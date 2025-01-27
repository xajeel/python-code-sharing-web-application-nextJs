'use client';

import { Editor } from "@monaco-editor/react";

interface Snippet {
    code: string;
}

interface ShowSnippetProps {
    snippet: Snippet;
}

const ShowSnippet = (props: ShowSnippetProps) => {
    return (
        <div>
                <div className="w-full">
                    <Editor
                        height="30vh"
                        defaultLanguage="python"
                        defaultValue={props.snippet.code}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            wordWrap: "on",
                            readOnly: true, 
                            lineNumbers: "off",
                            lineDecorationsWidth: 10,
                            padding: { top: 20 }
                        }}
                    />
                    </div>
        </div>
    )
}

export default ShowSnippet