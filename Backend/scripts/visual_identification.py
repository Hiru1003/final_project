import pandas as pd
import joblib
import numpy as np

# Load the trained model
model = joblib.load('bird_model.pkl')

# Define a dictionary for each feature with its possible values
feature_choices = {
    'Primary Color': ['Black', 'White', 'Brown', 'Grey', 'Blue', 'Green','Yellow', 'Red', 'Orange', 'Pink', 'Purple', 'Multicolored', 'Black and White'],
    'Beak Color':    ['Black', 'Yellow', 'Orange', 'Red', 'Grey', 'Blue', 'Brown', 'White'],
    'Tail Shape':    ['Rounded', 'Forked', 'Pointed', 'Square', 'Long','Short', 'Fan-shaped'],
    'Size':          ['Small (e.g., Sparrow-sized)', 'Medium (e.g., Robin-sized)','Large (e.g., Crow-sized)', 'Extra Large (e.g., Eagle-sized)'],
    'Wing Pattern':  ['Solid', 'Striped', 'Spotted', 'Bars', 'Mottled','Plain'],
    'Habitat':       ['Forest', 'Wetlands', 'Grasslands', 'Urban','Coastal', 'Desert', 'Mountains'],
    'Leg Color':     ['Black', 'Yellow', 'Orange', 'Red', 'Pink','Grey', 'Brown', 'White'],
    'Head Markings': ['Plain', 'Striped', 'Crested', 'Cap','Mask', 'Patch', 'Eyering'],
    'Body Pattern':  ['Solid', 'Spotted', 'Streaked', 'Striped','Mottled', 'Iridescent'],
    'Beak Shape':    ['Hooked', 'Pointed', 'Conical', 'Flat','Curved', 'Long', 'Short'],
    'Tail Color':    ['Black', 'Brown', 'White', 'Grey', 'Yellow','Orange', 'Red', 'Blue', 'Green','Multicolored', 'Black and White'],
    'Behavior':      ['Perching', 'Soaring', 'Wading', 'Swimming','Ground Walking', 'Hovering', 'Diving', 'Drilling']
}

# Function to collect user input for each feature
def get_user_input():
    features = []
    for feature, choices in feature_choices.items():
        print(f"Select the {feature}:")
        for i, choice in enumerate(choices, 1):
            print(f"{i}. {choice}")
        while True:
            try:
                selected = int(input(f"Enter the number corresponding to your choice for {feature}: ")) - 1
                if 0 <= selected < len(choices):
                    features.append(choices[selected])
                    break
                else:
                    print("Please enter a valid number from the list.")
            except ValueError:
                print("Invalid input. Please enter a number corresponding to your choice.")
    return features

# Function to convert user input to one-hot encoded format
def encode_features(features):
    encoded_features = []
    
    # Ensure we only collect features that the model expects
    for feature in feature_choices.keys():
        value = features[list(feature_choices.keys()).index(feature)]  # Find user's selected value
        encoded_row = [0] * len(feature_choices[feature])  # Create a row for one-hot encoding

        if value in feature_choices[feature]: 
            value_index = feature_choices[feature].index(value)  # Get index of selected value
            encoded_row[value_index] = 1  # One-hot encode
            
        encoded_features.extend(encoded_row)  # Append the one-hot encoded row
    
    # Ensure we only collect the first `expected_features` length
    expected_features = 88  # Adjust this accordingly based on your model's requirements
    if len(encoded_features) > expected_features:
        encoded_features = encoded_features[:expected_features]  # Cut off excess features if necessary
    
    return np.array(encoded_features)



# Function to predict the bird based on the user input
def predict_bird(user_input):
    encoded_input = encode_features(user_input)
    
    print(f"Encoded Input: {encoded_input}")  # Print for debugging
    
    # Reshape and check features count
    encoded_input = encoded_input.reshape(1, -1)

    if len(encoded_input[0]) != 88:  # It should match your model's expectation
        print(f"Error: Expected 88 features, but got {len(encoded_input[0])}.")
        return "Information is not enough to predict the bird."  # Return a message when features are incorrect
    
    prediction = model.predict(encoded_input)
    
    # Assuming prediction might sometimes return an empty or unidentifiable value
    if prediction is None or prediction[0] == 'unknown':  # Adjust condition based on model behavior
        return "Information is not enough to predict the bird."  # When prediction is unclear or unknown
    return prediction[0]  # Return the predicted bird species


# Main script to get input from the user and make a prediction
if __name__ == "__main__":
    user_input = get_user_input()
    predicted_bird = predict_bird(user_input)
    if predicted_bird:
        print(f"\nPredicted Bird Name: {predicted_bird}")
