from fastapi import APIRouter, HTTPException
from models import DiaryEntry
from config import collection

router = APIRouter()

@router.post("/add_entry")
async def add_entry(entry: DiaryEntry):
    entry_dict = entry.dict()
    
    try:
        # Insert entry into MongoDB
        result = collection.insert_one(entry_dict)
        
        # Check if the entry was successfully inserted
        if result.inserted_id:
            return {"message": "Diary entry saved successfully!"}
        else:
            raise HTTPException(status_code=500, detail="Failed to save entry")
    except Exception as e:
        # In case of error, raise an HTTP exception with the error message
        raise HTTPException(status_code=500, detail=f"Error occurred: {str(e)}")
