import { isValidNode, parseTiptapJsonToHtml } from "@/lib/post";
import { api } from "@/trpc/server";
import { notFound } from "next/navigation";

interface Props {
  id: string;
}

export default async function Post({ id }: Props) {
  const post = await api.blog.getPost({ id });

  if (!post) {
    return notFound();
  }

  const parsedContent = isValidNode(post.content)
    ? parseTiptapJsonToHtml(post.content)
    : "";

  return (
    <main className="mx-auto max-w-[1280px]">
      <h1 className="text-4xl font-semibold">{post?.title}</h1>
      <div className="mx-auto mb-6 mt-5">
        <div
          dangerouslySetInnerHTML={{ __html: parsedContent }}
          className="tiptap font-comfortaa"
        />
      </div>
    </main>
  );
}
