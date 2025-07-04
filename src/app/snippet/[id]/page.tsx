import { prisma } from "@/lib/prisma";
import { Pointer } from "lucide-react";
import { Snippet } from "next/font/google";
import React from "react";
import Link from "next/link";
import * as actions from "@/actions";
// import { Prisma } from "@lib/prisma";

type SnippetDetailPageProps = {
  params: Promise<{ id: string }>;
};

const SnippetDetailPage: React.FC<SnippetDetailPageProps> = async ({
  params,
}) => {
  const id = (await params).id;

  await new Promise((r) => setTimeout(r, 2000))

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!snippet) return <h1>Snippet not found</h1>;

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex items-center justify-between font-bold">
        <h1>{snippet.title}</h1>
        <div className="flex items-center gap-3 mt-5">
          <Link href={`/snippet/${snippet.id}/edit`}>
            <button className="px-4 py-2 rounded-lg bg-gray-600 text-white font-medium shadow hover:bg-gray-500 hover:scale-105 active:scale-95 transition duration-300 ease-in-out">
              Edit
            </button>
          </Link>
          <form action={deleteSnippetAction}>
            <button
              className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium shadow hover:bg-red-500 hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
              type="submit"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="my-5 bg-gray-200">
        <h1>{snippet.code}</h1>
      </pre>
    </div>
  );
};
export default SnippetDetailPage;
