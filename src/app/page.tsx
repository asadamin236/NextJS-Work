import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma, Prisma } from "@/lib/prisma";
// import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <div>
      <h1 className="font-bold text-xl">Home</h1>
      <div className="flex items-center justify-between">
        <h1>Snippits</h1>
        <Link href={"/snippet/new"}>
          <button className="bg-gray-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-400 hover:scale-105 transition duration-300 ease-in-out shadow-md active:scale-95">
            New
          </button>
        </Link>
      </div>
      {snippets.map((snippet) => {
        return (
          <div
            key={snippet.id}
            className="flex items-center justify-between bg-gray-200 my-5"
          >
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <button className="bg-gray-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-gray-500 hover:scale-105 transition duration-300 ease-in-out shadow-md active:scale-95">
                View
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
