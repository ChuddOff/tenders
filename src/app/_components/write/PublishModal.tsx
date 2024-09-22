"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ImagePerview from "./ImagePerview";
import { api } from "@/trpc/react";
import { type Editor } from "@tiptap/react";
import { createPostSchema } from "@/validators/zod";
import { ZodError } from "zod";
import { toast } from "sonner";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";

interface Props {
  editor: Editor;
}

export function PublishModal({ editor }: Props) {
  const [title, setTitle] = useState("");
  const [smallDesc, setSmallDesc] = useState("");
  const [perviewSrc, setPerviewSrc] = useState("");

  const router = useRouter();

  const createPost = api.blog.createPost.useMutation({
    onSuccess: () => {
      router.push("/blog");
    },
  });

  function publishPost() {
    try {
      createPostSchema.parse({
        title,
        smallDesc,
        perviewSrc,
        content: editor.getJSON(),
      });

      createPost.mutate({
        title,
        smallDesc,
        perviewSrc,
        content: editor.getJSON(),
      });
    } catch (error) {
      if (error instanceof ZodError) {
        toast(error.errors[0]?.message);
      }
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Опубликовать</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Опубликовать пост</DialogTitle>
          <DialogDescription>
            Напишите название и краткое описание поста.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Название
              </Label>
              <Input
                id="name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Краткое описание
              </Label>
              <Input
                id="username"
                value={smallDesc}
                onChange={(e) => setSmallDesc(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Картинка поста
              </Label>
              <ImagePerview onSuccess={(imageSrc) => setPerviewSrc(imageSrc)} />
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button
            onClick={publishPost}
            className="flex items-center gap-2"
            disabled={createPost.isPending}
          >
            Опубликовать
            {createPost.isPending && <Spinner className="inline" />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
