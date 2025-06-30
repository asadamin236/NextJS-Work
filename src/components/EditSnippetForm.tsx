"use client";

import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import type { Snippet } from "@prisma/client";
import { saveSnippet } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const saveSnippetAction = saveSnippet.bind(null, snippet.id);

  return (
    <div>
      <form action={saveSnippetAction}>
        <div className="flex justify-between my-5">
          <h1>Edit your code:</h1>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-gray-600 text-white font-medium shadow hover:bg-gray-500 hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
        {/* Hidden input to pass code */}
        <input type="hidden" name="code" value={code} />
      </form>

      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value || "")}
      />
    </div>
  );
};

export default EditSnippetForm;
