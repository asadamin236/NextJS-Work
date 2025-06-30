import React from "react";
import Editor from "@monaco-editor/react";
import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";

const EditPage = async ({params}: {params: Promise<{id: string}>}) => {
  const id = (await params).id
  const snippet = await prisma.snippet.findUnique({
    where: {
      id: Number(id)
    }
  })
  if(!snippet) return <h1>Snippet Not Found</h1>
  return (
    <div>
      <EditSnippetForm snippet = {snippet}/>
    </div>
  );
};

export default EditPage;
