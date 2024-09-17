"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { toast } from "sonner";

interface Props {
  onSuccess?: (imageSrc: string) => void;
}

export default function ImagePerview({ onSuccess }: Props) {
  const [perviewSrc, setPerviewSrc] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME as string,
      );

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        const data = await response.json();
        setPerviewSrc(data.secure_url);
        onSuccess?.(data.secure_url);
      } catch (error) {
        toast("Произошла ошибка при загрузке изображение", {
          description: error as string,
        });
      }
    }
  };
  return (
    <>
      {perviewSrc ? (
        <div className="relative col-span-2">
          <Image src={perviewSrc} alt="post perview" width={150} height={150} />
          <button
            className="absolute -top-2 right-0 rounded-full border border-red-500 bg-red-100 p-1"
            onClick={() => setPerviewSrc("")}
          >
            <MdClose size={15} color="red" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="col-span-3 rounded-md border px-2 py-1"
        >
          Загрузить изображение
        </button>
      )}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
      />
    </>
  );
}
