"use client";
import React, { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import * as actions from "@/actions";

const page = () => {
  const [formStateData, Xyz] = useActionState(actions.createSnippet, {
    message: "",
  });
  return (
    <div>
      <form action={Xyz}>
        <div>
          <Label className="font-bold my-5">Title:</Label>
          <Input type="text" name="title" id="title" />
        </div>
        <div className="my-5">
          <Label className="font-bold my-5">Code:</Label>
          <Textarea name="code" id="code" />
        </div>
        {formStateData.message && (
          <div className="bg-red-400 border-2 border-red-400 mx-2">
            {formStateData.message}
          </div>
        )}
        <Button
          type="submit"
          variant="outline"
          className="bg-gray-500 my-5 text-white hover:bg-gray-400 hover:scale-105 transition duration-300 ease-in-out shadow-md active:scale-95"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default page;
