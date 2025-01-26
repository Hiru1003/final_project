import pandas as pd

def one_hot_encode(input_file, output_file, columns_to_encode):
    # Load your Excel file
    df = pd.read_excel(input_file)
    
    # Perform one-hot encoding
    df_encoded = pd.get_dummies(df, columns=columns_to_encode)

    # Save the one-hot encoded DataFrame to a new Excel file
    df_encoded.to_excel(output_file, index=False)
    print(f"Encoded data saved to {output_file}")

if __name__ == "__main__":
    # Example usage
    input_file = 'data/BirdData.xlsx' 
    output_file = 'data/OneHotEncoding.xlsx' 
    columns_to_encode = ['Primary Color', 'Beak Color', 'Tail Shape','Size','Wing Pattern','Habitat','Leg Color','Head Markings','Body Pattern','Beak Shape','Tail Color','Behavior'] 

    one_hot_encode(input_file, output_file, columns_to_encode)
