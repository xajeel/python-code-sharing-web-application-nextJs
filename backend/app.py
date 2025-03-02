from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
from src.checker import is_python_code
from src.explainer import get_explantion
from fastapi.middleware.cors import CORSMiddleware


class Item(BaseModel):
    code: str

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/api/check")
def check_code(request: Item):
    return {"valid": is_python_code(request.code)}

@app.post("/api/explain")
def explain_code(request: Item):
    explanation = get_explantion(request.code)
    return {"explanation": explanation.content}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=5000)