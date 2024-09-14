"use client";

// editor / components / extensions
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import Highlight from "@tiptap/extension-highlight";

// components
import Toolbar from "./Toolbar";

// hooks
import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Spinner from "@/components/ui/spinner";

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      CharacterCount,
      StarterKit,
      Highlight,
      Image,
      Placeholder.configure({ placeholder: "Tell your story" }),
    ],
  });
  const [title, setTitle] = useState("");

  if (!editor) {
    return (
      <div className="flex h-[calc(100vh-116px)] w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className=" max-w-[1080px] mx-auto">
      <Toolbar editor={editor} />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title.trimStart()}
        color="secondary"
        maxLength={100}
        placeholder="Title"
        className="light light:text-defaultLight light:placeholder:text-defaultLight dark:text-defaultDark dark:placeholder:text-defaultDark mb-1 w-full bg-transparent py-3 font-comfortaa text-[36px] outline-none"
      />
      <div className="light mb-10 rounded-3xl font-comfortaa">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
