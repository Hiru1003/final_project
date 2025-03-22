from pydantic import BaseModel
from typing import Optional

class DiaryEntry(BaseModel):
    bird_name: str
    location: str
    date: str
    weather: Optional[str] = None
    notes: Optional[str] = None
    image_url: Optional[str] = None
