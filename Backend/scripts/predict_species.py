import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input
from PIL import Image

# Load the pre-trained model (make sure it's loaded once globally to avoid reloading on every request)
model = load_model('/Users/hirumiperera/Downloads/Projects/final_project/Backend/scripts/bird_species_classifier.h5')

# Function to preprocess the image and predict species
def predict_species(img_path):
    # Load the image and resize it to the model's input size (224x224)
    img = Image.open(img_path)
    img = img.resize((224, 224))  # Resize image to match model's expected size

    # Convert the image to a numpy array and preprocess it for prediction
    img_array = np.array(img) / 255.0  # Normalize the image
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension (model expects a batch)

    # Predict using the model
    predictions = model.predict(img_array)

    # Get the predicted class (index of the highest probability)
    predicted_class = np.argmax(predictions, axis=1)[0]

    # Optionally, map the predicted class index back to the species name (use a dictionary or file)
    species = get_species_name(predicted_class)

    return species

# Function to get species name from the predicted class index (can be modified based on your dataset)
def get_species_name(class_index):
    # Read class labels file and map the class index to the species name
    class_labels_file = '/Users/hirumiperera/Downloads/Projects/final_project/Backend/data/classlabels.txt'
    with open(class_labels_file, 'r') as f:
        class_labels = f.readlines()

    species = class_labels[class_index].strip().split(' ', 1)[1]  # Class label format: "id species_name"
    return species
