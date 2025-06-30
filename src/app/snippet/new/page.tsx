import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
const page = () => {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: { title, code },
    });

    console.log("Snippet Data:", snippet); // ye sirf server console mein dikhega
    redirect("/");
  }
  return (
    <div>
      <form action={createSnippet}>
        <div>
          <Label className="font-bold my-5">Title:</Label>
          <Input type="text" name="title" id="title" />
        </div>
        <div className="my-5">
          <Label className="font-bold my-5">Code:</Label>
          <Textarea name="code" id="code" />
        </div>
        <Button
          type="submit"
          variant="outline"
          className="bg-gray-500 my-5 text-white hover:bg-gray-400 hover:scale-105 transition duration-300 ease-in-out shadow-md active:scale-95"
        >
          View
        </Button>
      </form>
    </div>
  );
};

export default page;
