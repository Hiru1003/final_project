import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from scripts.predict_species import predict_species
from scripts.visual_identification import predict_bird 
from config import collection 

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

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

        required_fields = ["bird_name", "location", "date"]
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        entry = {
            "bird_name": data.get("bird_name"),
            "location": data.get("location"),
            "date": data.get("date"),
            "weather": data.get("weather", None),
            "notes": data.get("notes", None),
            "image_url": data.get("image_url", None)
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
        # Query all entries from the MongoDB collection
        entries = collection.find({}, {"_id": 0})  # Exclude _id field from the result
        
        # Convert the MongoDB cursor to a list of dictionaries
        entries_list = list(entries)

        # Return the entries as JSON
        return jsonify(entries_list)

    except Exception as e:
        # Log and return the error message
        print(f"Error: {e}")
        return jsonify({'error': str(e)}), 500





if __name__ == '__main__':
    app.run(debug=True)

#Image Loading Progress

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

