import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from scripts.predict_species import predict_species

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

