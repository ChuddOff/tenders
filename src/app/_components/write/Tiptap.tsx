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
import { useEditor, EditorContent } from "@tiptap/react";
import Spinner from "@/components/ui/spinner";

export default function Tiptap() {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      CharacterCount,
      StarterKit,
      Highlight,
      Image,
      Placeholder.configure({ placeholder: "Tell your story" }),
    ],
  });

  if (!editor) {
    return (
      <div className="flex h-[calc(100vh-116px)] w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1080px]">
      <Toolbar editor={editor} />
      <div className="mb-10 rounded-3xl font-comfortaa">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
