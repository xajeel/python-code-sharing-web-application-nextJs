import SnippetEditForm from "@/components/Snippet-form"
import { db } from "@/db/cleint"
import { notFound } from "next/navigation"

interface SnippetProps {
    params: Promise<{
      id: string;
    }>;
  }

const snippetEditPage = async ({ params }: SnippetProps) => {
  // Ensure `params.id` is used correctly
  const resolvedParams = await params;
  const snippetId = parseInt(resolvedParams.id, 10);
  
  if (isNaN(snippetId)) {
    return notFound();
  }

  const data = await db.snippet.findUnique({
    where: { id: snippetId },
  });

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={data} />
    </div>
  );
};

export default snippetEditPage;
