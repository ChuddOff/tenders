/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";

// icons
import { LuCode2, LuHighlighter } from "react-icons/lu";
import { GoListUnordered } from "react-icons/go";
import { BsListNested } from "react-icons/bs";
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineFormatBold, MdUndo, MdRedo } from "react-icons/md";
// hooks / react types
import { useRef, type ChangeEvent } from "react";

// tiptap types
import type { Editor } from "@tiptap/react";
import { PublishModal } from "./PublishModal";
import { env } from "@/env";

interface ToolbarProps {
  editor: Editor | null;
}

export default function Toolbar({ editor }: ToolbarProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!editor) {
    return null;
  }

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        const data = (await response.json()) as {
          secure_url: string;
        };

        editor?.commands.setImage({ src: data.secure_url });
        editor?.commands.createParagraphNear();
        editor?.chain().focus().createParagraphNear();
      } catch (error) {
        console.error("Error uploading audio:", error);
      }
    }
  };

  return (
    <div className="border-1 light:border-gray-400 sticky top-16 z-[1] mb-6 w-full rounded-xl bg-transparent p-4 backdrop-blur-lg dark:border-[#868b9366]">
      <div className="flex w-full flex-wrap items-center justify-between gap-2 max-[696px]:justify-center max-[696px]:gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`px-3 py-1`}
            >
              <MdOutlineFormatBold size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`px-3 py-1`}
            >
              <LuCode2 size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`px-3 py-1`}
            >
              <FaQuoteLeft size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHighlight().run()}
              className={`px-3 py-1`}
            >
              <LuHighlighter size={20} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`light light:bg-[#848484] rounded-md px-3 py-1 dark:bg-[#353535]`}
            >
              <GoListUnordered size={20} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().sinkListItem("listItem").run()
              }
              disabled={!editor.can().sinkListItem("listItem")}
              className={`light light:bg-[#848484] rounded-md px-3 py-1 dark:bg-[#353535] ${editor.can().sinkListItem("listItem") ? "block" : "hidden"}`}
            >
              <BsListNested size={20} />
            </button>
          </div>

          <div className="mx-auto flex items-center gap-2">
            <button
              className={`px-3 py-1`}
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Image
            </button>
            <button
              onClick={() => editor.commands.undo()}
              disabled={!editor.can().undo()}
              className={` ${
                editor.can().undo()
                  ? "opacity-100"
                  : "opacity-30 hover:!opacity-30"
              } bg-primary-500 rounded-md px-3 py-1 transition-opacity`}
            >
              <MdUndo size={20} />
            </button>
            <button
              onClick={() => editor.commands.redo()}
              disabled={!editor.can().redo()}
              className={` ${
                editor.can().redo()
                  ? "opacity-100"
                  : "opacity-30 hover:!opacity-30"
              } bg-primary-500 rounded-md px-3 py-1 transition-opacity`}
            >
              <MdRedo size={20} />
            </button>
          </div>
        </div>
        <PublishModal editor={editor} />
      </div>
      <div className="flex gap-2">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
  );
}
