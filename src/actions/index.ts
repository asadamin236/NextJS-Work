"use server";

import { prisma } from "@/lib/prisma";
// import { Sniglet } from "next/font/google";
import { redirect } from "next/navigation";
// import { Snippet } from "next/font/google";

export const saveSnippet = async (id: number, formData: FormData) => {
  const code = formData.get("code") as string;

  await prisma.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippet/${id}`)
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: {
      id: Number(id)
    }
  })
  redirect("/")
}

export async function createSnippet(prevStet: {message: string}, formData: FormData) {

    const title = formData.get("title");
    const code = formData.get("code");
    if(!title){
      return {message: "Title is required"}
    }

    if(!code){
      return {message: "Code is required"}
    }
    const snippet = await prisma.snippet.create({
      data: { title, code },
    });

    console.log("Snippet Data:", snippet);
    redirect("/");
  }