import SnippetEditForm from "@/components/Snippet-form"
import { db } from "@/db/cleint"
import { notFound } from "next/navigation"


interface snippetProps {
    params: {
        id: string
    }
}

const snippetEditPage = async (props: snippetProps) => {
    const data = await db.snippet.findUnique({
        where: {
            id: parseInt(props.params.id)
        }
    })

    if (!data) {
       return  notFound()
    }

  return (
    <div>
        <SnippetEditForm snippet={data} />
    </div>
  )
}

export default snippetEditPage