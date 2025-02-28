import ast

def is_python_code(code: str) -> bool:
    """Check if the given code is a valid python code or not."""
    try:
        ast.parse(code)
        return True 
    except SyntaxError:
        return False
