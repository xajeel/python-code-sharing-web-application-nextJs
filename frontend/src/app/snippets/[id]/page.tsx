import { deletevalue } from "@/actions";
import ShowSnippet from "@/components/Showsnippet";
import { db } from "@/db/cleint";
import Link from "next/link";
import { notFound } from "next/navigation";

interface SnippetsProps {
  params: { id: string };
}

export default async function editSnippets({ params }: SnippetsProps) {
  const data = await db.snippet.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!data) {
    notFound();
  }
 const deleteSnippet = deletevalue.bind(null, data.id);

  return (
    <>
  <div className="w-full md:w-3/5 my-4 mx-auto">
    <h1 className="text-2xl font-bold" >Snippet</h1>
  </div>

    <div className="border p-4 rounded w-full md:w-3/5 mx-auto">

      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">{data?.title}</h1>
        <div className="flex gap-4">
          <Link href={`${data.id}/edit`} className="bg-gray-50 rounded border p-2">Edit</Link>
          <form action={deleteSnippet}>
          <button className="bg-gray-50 rounded border p-2">Delete</button>
          </form>
        </div>
      </div>

      <div className="bg-gray-50 p-4 border rounded my-4">
        <ShowSnippet snippet={data} />
        </div>
    </div>
    </>

  );
}