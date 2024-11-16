from tensorflow.keras.preprocessing.image import ImageDataGenerator

def load_data(dataset_path, img_size=(224, 224), batch_size=32):
    datagen = ImageDataGenerator(
        rescale=1.0/255,
        validation_split=0.2,
        horizontal_flip=True,
        rotation_range=15
    )
    
    train_data = datagen.flow_from_directory(
        dataset_path,
        target_size=img_size,
        batch_size=batch_size,
        class_mode='categorical',
        subset='training'
    )
    
    val_data = datagen.flow_from_directory(
        dataset_path,
        target_size=img_size,
        batch_size=batch_size,
        class_mode='categorical',
        subset='validation'
    )
    
    return train_data, val_data
