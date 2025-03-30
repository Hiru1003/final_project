from pymongo import MongoClient
from pydantic import BaseModel, EmailStr
from fastapi import HTTPException
import bcrypt
import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify

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
class UserSignup(BaseModel):
    name: str
    email: EmailStr
    password: str

def hash_password(password: str) -> str:
    """Hashes the password using bcrypt."""
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password.decode('utf-8')

def register_user(user: UserSignup):
    """Registers a new user in MongoDB."""
    existing_user = users_collection.find_one({"email": user.email})
    
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = hash_password(user.password)

    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    }

    inserted_user = users_collection.insert_one(new_user)

    return {
        "message": "User created successfully",
        "user_id": str(inserted_user.inserted_id),
        "name": user.name,
        "email": user.email
    }



