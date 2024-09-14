import { isValidNode, parseTiptapJsonToHtml } from "@/lib/post";
import { api } from "@/trpc/server";
import { notFound } from "next/navigation";
import { JsonValue } from "types";

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
    <main className=" max-w-[1280px] mx-auto">
      <h1 className="text-4xl font-semibold">{post?.title}</h1>
      <div className="mb-6 mt-5 mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: parsedContent }}
          className="tiptap font-comfortaa"
        />
      </div>
    </main>
  );
}
