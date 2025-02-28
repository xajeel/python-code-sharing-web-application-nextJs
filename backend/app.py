from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
from src.checker import is_python_code
from src.explainer import get_explantion

class Item(BaseModel):
    code: str

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/api/check")
def check_code(request: Item):
    return {is_python_code(request.code)}

@app.post("/api/explain")
def explain_code(request: Item):
    explanation = get_explantion(request.code)
    return {"explanation": explanation.content}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)