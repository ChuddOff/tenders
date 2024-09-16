import { ZodError, z } from "zod";
import type { JSONContent } from "@tiptap/react";

export const ContentValidator = z.custom<JSONContent>((val: JSONContent) => {
  let paragraphsWithContent = 0;

  val.content?.map((paragraph) => {
    switch (paragraph.type) {
      case "image":
        paragraphsWithContent += 1;

      default:
        if (paragraph.content) {
          paragraphsWithContent += 1;
        }
    }
  });

  if (paragraphsWithContent <= 0) {
    throw new ZodError([
      {
        message: "Контент поста не может быть пустым",
        code: "custom",
        path: ["content"],
      },
    ]);
  }

  if (val.type == "doc") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return val;
  } else {
    throw new ZodError([
      {
        message: "Неправильный формат контента",
        code: "custom",
        path: [""],
      },
    ]);
  }
});

export const LoginSchema = z.object({
  email: z.string().email().min(1, { message: "Email не может быть пустым" }),
  password: z.string().min(1, { message: "Пароль не может быть пустым" }),
});

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Имя пользователя не может быть пустым" }),
  email: z.string().email({ message: "Email не может быть пустым" }),
  password: z.string().min(1, { message: "Пароль не может быть пустым" }),
  companyName: z
    .string()
    .min(1, { message: "Название компании не может быть пустым" }),
  stationaryNumber: z
    .string()
    .min(1, { message: "Стационарный номер не может быть пустым" })
    .max(12, {
      message: "Стационарный номер не может быть больше 10 символов",
    }),
  mobileNumber: z
    .string()
    .min(1, { message: "Мобильный номер не может быть пустым" })
    .max(12, { message: "Мобильный номер не может быть больше 10 символов" }),
});

export const createPostSchema = z.object({
  title: z.string().min(1, "Название не может быть пустым"),
  smallDesc: z.string().min(1, "Описание поста не может быть пустым"),
  perviewSrc: z.string().min(1, "Картинка поста не может быть путой"),
  content: ContentValidator,
});
