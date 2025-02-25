from langchain_google_genai import ChatGoogleGenerativeAI
import os

os.environ["GOOGLE_API_KEY"] = "AIzaSyA23p9UO4vwuzXJRo92phCYSZ7YV_zO8x4"

def get_explantion(code):
      llm = ChatGoogleGenerativeAI(
      model="gemini-2.0-flash",
      temperature=0.4,
      max_retries=2,)
      prompt = f"""
    You are an intelligent senior software engineer who specializes in onboarding junior software engineers onto projects.
    You are onboarding a junior software engineer and explaining to them the purpose of the code line by line ( do not inculde code in the response).
    Just explain the code. Do not say anything else.
    Here is the code:
    ```
    {code}
    ```
    Give a explanation of no more than 100 words of the code above.
    """
      response = llm.invoke(prompt)
      return response