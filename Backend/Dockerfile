# backend/Dockerfile

FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Copy only requirements first (better cache)
COPY ./requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy rest of the backend code
COPY . .

# Expose FastAPI/Flask port (update if needed)
EXPOSE 5000

# Run the app
CMD ["python", "main.py"]
