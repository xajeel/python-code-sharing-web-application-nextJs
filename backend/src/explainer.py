from langchain_google_genai import ChatGoogleGenerativeAI
import os
from dotenv import load_dotenv
load_dotenv()


def get_explantion(code):
      llm = ChatGoogleGenerativeAI(
      model="gemini-2.0-flash",
      temperature=0.4,
      max_retries=2,)
      prompt = f"""
    You are an intelligent senior software engineer who specializes in onboarding junior software engineers onto projects.
    You are onboarding a junior software engineer and explaining to them the purpose of the code line by line ( do not code of each line).
    Just explain the code. Do not say anything else.
    Seperate the explanation of each line with a new line.
    Include some important details about the code.
    Include imojies.
    Here is the code:
    ```
    {code}
    ```
    Give a explanation of no more than 100 words of the code above.
    """
      response = llm.invoke(prompt)
      return response
