
from flask import Flask, request, jsonify
from pymongo import MongoClient
from pydantic import BaseModel, EmailStr
from fastapi import HTTPException
import bcrypt
import os
from dotenv import load_dotenv

# Initialize Flask app
app = Flask(__name__)

# Load environment variables
load_dotenv()

# MongoDB Connection
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["User_Management"]
users_collection = db["users"]

# Pydantic model for validation
class UserLogin(BaseModel):
    email: EmailStr
    password: str

def check_password(stored_password: str, provided_password: str) -> bool:
    """Checks if the provided password matches the stored hashed password."""
    return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password.encode('utf-8'))

def login_user(user: UserLogin):
    """Validates user login credentials."""
    existing_user = users_collection.find_one({"email": user.email})
    
    if not existing_user:
        raise HTTPException(status_code=400, detail="User not found")
    
    # Check password
    if not check_password(existing_user["password"], user.password):
        raise HTTPException(status_code=400, detail="Incorrect password")
    
    return {
        "message": "Login successful",
        "user_id": str(existing_user["_id"]),
        "name": existing_user["name"],
        "email": user.email
    }


