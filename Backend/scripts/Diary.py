from fastapi import APIRouter, HTTPException
from config import collection
from models import DiaryEntry

router = APIRouter()

@router.post("/add_entry")
async def add_entry(entry: DiaryEntry):
    entry_dict = entry.dict()
    result = collection.insert_one(entry_dict)
    
    if result.inserted_id:
        return {"message": "Diary entry saved successfully!"}
    else:
        raise HTTPException(status_code=500, detail="Failed to save entry")
