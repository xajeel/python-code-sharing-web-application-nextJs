'use client';

import {updateValue} from "@/actions";
import { Editor } from "@monaco-editor/react"
import { useState } from "react";
import Button from "./Button";

const SnippetEditForm = (props: any) => {

  const [code, setCode] = useState(props.snippet.code)

  const handleEditorChange = (value: string = '') => {
    setCode(value)
  }

  const editSnippet = updateValue.bind(null, props.snippet.id, code)

  return (

    <div className="w-full md:w-3/5 mx-auto" >
      <div>
        <h1 className=" text-2xl font-bold text-left">Edit Snippet</h1>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mt-5 bg-gray-50 px-4 py-4 border rounded">
      <div className="w-full">
        <h1 className=" text-xl font-bold text-left mb-4">Title: {props.snippet.title}</h1>
      </div>
        <div className="w-full">
          <Editor
            height="30vh"
            defaultLanguage="python"
            defaultValue={props.snippet.code}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              wordWrap: "on",
              // readOnly: true, 
              // lineNumbers: "off",
              lineDecorationsWidth: 10,
              padding: { top: 20 }
            }}

          />
          <form action={editSnippet}>
            <div className="flex mt-4">
              <Button name='save' />

            </div>
          </form>
        </div>
      </div>

    </div>


  )
}

export default SnippetEditForm