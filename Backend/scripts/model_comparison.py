import os
import numpy as np
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import tensorflow as tf
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
import joblib

# Function to load and preprocess images
def load_image(image_path, target_size=(224, 224)):
    image = load_img(image_path, target_size=target_size)
    image = img_to_array(image)
    image = image / 255.0  # Normalize to [0, 1]
    return image

# Function to load class labels from the text file
def load_class_labels(file_path):
    with open(file_path, 'r') as f:
        class_labels = [label.strip().split('.')[1] for label in f if label.strip()]  # Extract the class name from the file
    return class_labels

# Function to load images and match with labels
def load_images(image_dir, class_labels):
    images = []
    labels = []

    for class_name in class_labels:
        # Adjust class folder naming based on the dataset format
        class_folder = os.path.join(image_dir, f"{str(class_labels.index(class_name) + 1).zfill(3)}.{class_name}")

        if os.path.isdir(class_folder):
            # Iterate through each image in the folder
            for image_file in os.listdir(class_folder):
                if image_file.lower().endswith(('.jpg', '.jpeg', '.png')):  # Ensure valid image formats
                    image_path = os.path.join(class_folder, image_file)
                    try:
                        image = load_image(image_path)
                        images.append(image)
                        labels.append(class_name)
                    except Exception as e:
                        print(f"Error loading image {image_path}: {e}")
        else:
            print(f"Class folder not found: {class_folder}")

    return np.array(images), np.array(labels)

# Define paths
image_dir = '/Users/hirumiperera/Downloads/Projects/final_project/Backend/data/CUB_200_2011/images/'  # Path to your image dataset
class_labels_file = '/Users/hirumiperera/Downloads/Projects/final_project/Backend/data/classlabels.txt'  # Path to your class labels file

# Loading class labels from the file
class_labels = load_class_labels(class_labels_file)

if not class_labels:
    print("No class labels found. Please check your class labels file.")
    exit()

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

# Split the data into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(images, labels, test_size=0.2, stratify=labels, random_state=42)

# Flatten the images for models like Logistic Regression
X_train_flattened = X_train.reshape(X_train.shape[0], -1)
X_val_flattened = X_val.reshape(X_val.shape[0], -1)

# List of models to compare
models = {
    "Logistic Regression": LogisticRegression(max_iter=1000),
    "Decision Tree": DecisionTreeClassifier(),
    "Random Forest": RandomForestClassifier(),
    "Gradient Boosting": GradientBoostingClassifier(),
    "Support Vector Machine": SVC(),
    "K-Nearest Neighbors": KNeighborsClassifier(),
    "Naive Bayes": GaussianNB()
}

# Dictionary to store accuracy results
model_results = {}

# Train and evaluate each model
for model_name, model in models.items():
    print(f"Training {model_name}...")
    model.fit(X_train_flattened, y_train)
    y_pred = model.predict(X_val_flattened)
    accuracy = accuracy_score(y_val, y_pred)
    model_results[model_name] = accuracy
    print(f"{model_name} Accuracy: {accuracy:.4f}")

    # Save the model
    model_save_path = os.path.join('models', f'{model_name.lower().replace(" ", "_")}_model.pkl')
    os.makedirs(os.path.dirname(model_save_path), exist_ok=True)  # Ensure directory exists
    joblib.dump(model, model_save_path)

# Print the comparison of models
print("\nModel Comparison Results:")
for model_name, accuracy in model_results.items():
    print(f"{model_name}: {accuracy:.4f}")
