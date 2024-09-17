import { getServerAuthSession } from "@/server/auth";
import Tiptap from "../_components/write/Tiptap";
import { notFound } from "next/navigation";

export default async function CreatePost() {
  const session = await getServerAuthSession();

  if (session?.user.role !== "ADMIN") {
    return notFound();
  }

  return <Tiptap />;
}
