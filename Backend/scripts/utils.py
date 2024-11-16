import os
import shutil

def organize_images_by_class():
    source_images = 'CUB-200-2011/images/'
    class_labels_file = 'CUB-200-2011/labels/class_labels.txt'
    train_dir = 'Backend/data/train/'

    # Read class labels
    with open(class_labels_file, 'r') as file:
        class_labels = file.readlines()

    # Create subfolders for each category in the train directory
    for line in class_labels:
        class_id, class_name = line.strip().split(' ')
        class_dir = os.path.join(train_dir, class_name)
        os.makedirs(class_dir, exist_ok=True)

    # Move images into the respective class folder
    for image_name in os.listdir(source_images):
        class_id = image_name.split('_')[0]
        class_name = class_labels[int(class_id)-1].strip().split(' ')[1]
        shutil.move(os.path.join(source_images, image_name), os.path.join(train_dir, class_name, image_name))

    print("Images have been organized into class folders.")

# Call the function to organize the images
organize_images_by_class()
