import os
from bson import ObjectId
from fastapi import HTTPException, requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from models.feedback import FeedbackModel, save_feedback
from models.Login import  UserLogin, login_user
from models.Signup import UserSignup, register_user
from scripts.predict_species import predict_species
from scripts.visual_identification import predict_bird 
from config import collection 
from google.oauth2 import id_token
from google.auth.transport import requests

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)


@app.after_request
def apply_cors(response):
    response.headers['Cross-Origin-Opener-Policy'] = 'unsafe-none'  # Relax the COOP header
    response.headers['Cross-Origin-Embedder-Policy'] = 'unsafe-none'  # If needed
    return response


TEMP_DIR = "temp"
os.makedirs(TEMP_DIR, exist_ok=True)  # Ensure the temp directory exists


@app.route('/predict', methods=['POST'])
def predict():
    # Get the image from the POST request
    file = request.files['image']
    
    # Save the image temporarily
    img_path = f"temp/{file.filename}"
    file.save(img_path)

    # Predict the species using the model
    species = predict_species(img_path)

    # Extract species name after removing number and replacing underscores
    formatted_species = species.split('.', 1)[-1].replace('_', ' ')

    return jsonify({'species': formatted_species})


@app.route('/predict_features', methods=['POST'])
def predict_from_features():
    try:
        data = request.json  # Get JSON input

        # Ensure input data is a list of features
        if not isinstance(data, list):
            return jsonify({'error': 'Invalid input. Expecting a list of features.'}), 400

        # Predict species using the visual identification function
        predicted_bird = predict_bird(data)

        if predicted_bird:
            return jsonify({'species': predicted_bird})
        else:
            return jsonify({'error': 'Prediction failed. Check input data format.'}), 400

    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

ALLOWED_EXTENSIONS = {'jpg', 'jpeg', 'png', 'avif'}

# Function to check the allowed extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS



@app.route('/add_entry', methods=['POST'])
def add_entry():
    try:
        data = request.json

        # Get the logged-in user's email from the request headers (or JWT token, if applicable)
        user_email = request.headers.get('User-Email')  # Assuming you're passing email in the request header

        if not user_email:
            return jsonify({'error': 'User email is required for this request'}), 400

        required_fields = ["bird_name", "location", "date"]
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        entry = {
            "user_email": user_email,  # Associate entry with the logged-in user
            "bird_name": data.get("bird_name"),
            "location": data.get("location"),
            "date": data.get("date"),
            "weather": data.get("weather", None),
            "notes": data.get("notes", None),
            "image_url": data.get("image_url", None),
        }

        # Insert into MongoDB
        result = collection.insert_one(entry)

        # Debug log to ensure the insert was successful
        print(f"MongoDB result: {result.inserted_id}")

        if result.inserted_id:
            return jsonify({"message": "Diary entry added successfully!"}), 201
        else:
            return jsonify({"error": "Failed to save entry"}), 500

    except Exception as e:
        # Log the detailed error message
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500



@app.route('/get_entries', methods=['GET'])
def get_entries():
    try:
        # Get the user email from headers
        user_email = request.headers.get('User-Email')
        if not user_email:
            return jsonify({'error': 'User email is required'}), 400

        # Query the entries for the specific user
        entries = collection.find({"user_email": user_email})

        # Convert cursor to list and ensure _id is a string
        entries_list = []
        for entry in entries:
            entry['_id'] = str(entry['_id'])  # Convert ObjectId to string
            entries_list.append(entry)

        return jsonify(entries_list)

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500



@app.route('/delete_entry/<entry_id>', methods=['DELETE'])
def delete_entry(entry_id):
    try:
        # Get the user email from the request headers
        user_email = request.headers.get('User-Email')
        if not user_email:
            return jsonify({'error': 'User email is required'}), 400

        # Validate entry_id format
        if not ObjectId.is_valid(entry_id):
            return jsonify({'error': 'Invalid entry ID format'}), 400

        # Try to delete the entry by its unique _id and check if the entry belongs to the logged-in user
        result = collection.delete_one({
            "_id": ObjectId(entry_id),
            "user_email": user_email  # Ensure the entry belongs to the logged-in user
        })

        if result.deleted_count == 1:
            return jsonify({"message": "Diary entry deleted successfully!"}), 200
        else:
            return jsonify({"error": "Entry not found or user is not authorized to delete this entry"}), 404

    except Exception as e:
        # Log the detailed error message
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/edit_entry/<entry_id>', methods=['PUT'])
def edit_entry(entry_id):
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data provided"}), 400

        result = collection.update_one(
            {"_id": ObjectId(entry_id)},
            {"$set": data}
        )

        if result.matched_count == 0:
            return jsonify({"error": "Entry not found"}), 404

        return jsonify({"message": "Entry updated successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/signup", methods=["POST"])
def signup():
    """API endpoint to handle user signup."""
    try:
        # Get JSON data from the request
        user_data = request.get_json()
        user = UserSignup(**user_data)  # Validate the data using Pydantic
        return jsonify(register_user(user))
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/login", methods=["POST"])
def login():
    """API endpoint to handle user login."""
    try:
        # Get JSON data from the request
        user_data = request.get_json()
        user = UserLogin(**user_data)  # Validate the data using Pydantic
        return jsonify(login_user(user))
    except Exception as e:
        return jsonify({"error": str(e)}), 500



@app.route("/feedback", methods=["POST"])
def submit_feedback():
    """API endpoint to handle feedback submission."""
    try:
        data = request.get_json()
        feedback = FeedbackModel(**data)  # Validate using Pydantic
        result = save_feedback(feedback)  # Save the feedback to MongoDB
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500




MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["User_Management"]
users_collection = db["users"]

@app.route("/google-login", methods=['POST'])
def google_login_handler():
    """API endpoint to handle Google login."""
    token = request.json.get('token')  # Retrieve the token from the request

    try:
        # Specify your Google CLIENT_ID
        idinfo = id_token.verify_oauth2_token(
            token, requests.Request(), "135579718410-lr6odphl76uhfk475430teeuv257533r.apps.googleusercontent.com"
        )

        email = idinfo['email']
        name = idinfo['name']

        existing_user = users_collection.find_one({"email": email})
        if not existing_user:
            new_user = {
                "name": name,
                "email": email,
                "password": None  # Password not required for Google users
            }
            users_collection.insert_one(new_user)

        return jsonify({
            "message": "User logged in successfully",
            "email": email
        })
    except ValueError:
        raise HTTPException(status_code=403, detail="Invalid token")
    



if __name__ == '__main__':
    app.run(debug=True)



#source env/bin/activate
#cd Backend
#cd scripts
#python train_model.py

#all images loads
#Training data size: 9430 images , Validation data size: 2358 images


#Run Backend

#source env/bin/activate
#cd Backend
#python3 main.py
