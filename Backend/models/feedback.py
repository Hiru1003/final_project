from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
import os
from typing import Dict
from bson import ObjectId  # Import ObjectId from bson

# MongoDB setup
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["User_Management"]  # Make sure to use the correct database name
feedback_collection = db["feedback"]  # Ensure you're using the correct collection name

# Pydantic model for input validation
class FeedbackModel(BaseModel):
    name: str
    email: EmailStr
    message: str

def serialize_objectid(data: Dict) -> Dict:
    """Helper function to convert ObjectId to string for JSON serialization."""
    for key, value in data.items():
        if isinstance(value, ObjectId):
            data[key] = str(value)
    return data

def save_feedback(feedback: FeedbackModel) -> Dict:
    """Save feedback to MongoDB and return a confirmation message."""
    feedback_dict = feedback.dict()  # Convert Pydantic model to dictionary
    result = feedback_collection.insert_one(feedback_dict)  # Save to MongoDB

    # Prepare the response and serialize ObjectId if present
    response = {
        "message": "Feedback submitted successfully",
        "id": str(result.inserted_id),  # Convert ObjectId to string for JSON response
        "data": serialize_objectid(feedback_dict)  # Ensure any ObjectId is converted to string
    }

    return response
