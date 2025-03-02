import Button from "@/components/Button";
import { db } from "@/db/cleint";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default async function Home() {

  const data = await db.snippet.findMany()

  const titles = data.map((snippet) => {
    return <Link
      href={`/snippets/${snippet.id}`}
      className="flex justify-between bg-gray-50 border rounded p-3 my-2 shadow-sm"
      key={snippet.id}>
      <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="justify-around">
      <div> #️⃣ {snippet.title} </div>
      {/* <div className="font-normal">View</div> */}
      </div>
      </div>
    </Link>
  })

  return (
    <div>
      <div className="flex flex-col gap-4 w-full md:ms-auto md:w-3/5 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold" >Latest Snippets</h1>
          <Link href={'/snippets/new'} >
            <Button name="New" />
          </Link>
        </div>
        <div className=" border p-4 rounded gap-4 ">
          <div>
            {titles}
          </div>
        </div>
      </div>
    </div>
  );
}
