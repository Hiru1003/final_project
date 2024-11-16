import os
import numpy as np
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import tensorflow as tf

# Function to load and preprocess images
def load_image(image_path, target_size=(224, 224)):
    image = load_img(image_path, target_size=target_size)
    image = img_to_array(image)
    image = image / 255.0  # Normalize to [0, 1]
    return image

# Function to load class labels
def load_class_labels(file_path):
    with open(file_path, 'r') as f:
        # Modify to extract the class name from the full folder name
        class_labels = [label.strip().split('.')[1] for label in f if label.strip()]
    return class_labels

# Path to the dataset and labels file
image_dir = '/Users/hirumiperera/Downloads/Projects/final_project/Backend/data/CUB_200_2011/images/'  # Update this path to where your images are stored
class_labels_file = '/Users/hirumiperera/Downloads/Projects/final_project/Backend/data/classlabels.txt'  # Update this path

# Loading class labels
class_labels = load_class_labels(class_labels_file)

if not class_labels:
    print("No class labels found. Please check your class labels file.")
    exit()

# Function to load images and match with labels
def load_images(image_dir, class_labels):
    images = []
    labels = []
    
    # Iterate over the class folders (such as 001.Black_footed_Albatross)
    for class_name in class_labels:
        # Modify class_name to match folder structure (e.g., 001.Black_footed_Albatross)
        class_folder = os.path.join(image_dir, f"{str(class_labels.index(class_name) + 1).zfill(3)}.{class_name}")

        # Check if class_folder exists
        if os.path.isdir(class_folder):
            print(f"Found folder: {class_folder}")  # Debug print to check folder presence
            # Iterate through each image in the folder
            for image_file in os.listdir(class_folder):
                if image_file.lower().endswith(('.jpg', '.jpeg', '.png')):  # Ensure valid image format
                    image_path = os.path.join(class_folder, image_file)
                    print(f"Loading image: {image_path}")  # Debug print to check image loading
                    try:
                        image = load_image(image_path)
                        images.append(image)
                        labels.append(class_name)
                    except Exception as e:
                        print(f"Error loading image {image_path}: {e}")
        else:
            print(f"Class folder not found: {class_folder}")  # Debug print if folder is missing

    return np.array(images), np.array(labels)

# Loading images and matching labels
images, labels = load_images(image_dir, class_labels)

# Check if images and labels are loaded correctly
if len(images) == 0:
    print("No images loaded. Please check the dataset.")
    exit()
if len(labels) == 0:
    print("No labels found. Please check the dataset.")
    exit()

# Convert labels to numeric values
label_to_idx = {label: idx for idx, label in enumerate(class_labels)}
labels = [label_to_idx[label] for label in labels]

# Convert images to numpy array
images = np.array(images)
labels = np.array(labels)

# Split the data into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(images, labels, test_size=0.2, stratify=labels, random_state=42)

# Ensure the data is split correctly
print(f"Training data size: {len(X_train)} images")
print(f"Validation data size: {len(X_val)} images")

# Build a simple CNN model
model = tf.keras.Sequential([
    tf.keras.layers.InputLayer(input_shape=(224, 224, 3)),  # Input layer for images of shape (224, 224, 3)
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Conv2D(128, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(128, activation='relu'),
    tf.keras.layers.Dense(len(class_labels), activation='softmax')  # Output layer with one neuron per class
])

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, validation_data=(X_val, y_val), epochs=10, batch_size=32)

# Save the model
model.save('bird_species_classifier.h5')
print("Model training completed and saved.")
