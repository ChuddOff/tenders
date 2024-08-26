import { ZodError, z } from "zod";
import type { JSONContent } from "@tiptap/react";

export const ContentValidator = z.custom<JSONContent>((val: JSONContent) => {
  // eslint-disable-next-line
  const contentLength = val.content ? val.content.length : 0;
  if (contentLength === 0) {
    throw new ZodError([
      { message: "Content can't be empty", code: "custom", path: [""] },
    ]);
  }

  if (val.type == "doc") {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return val;
  } else {
    throw new ZodError([
      {
        message: "Object type must be doc",
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
  username: z.string().min(1, { message: "Username не может быть пустым" }),
  companyName: z
    .string()
    .min(1, { message: "Company name не может быть пустым" }),
  stationaryNumber: z
    .string()
    .min(1, { message: "Stationary number не может быть пустым" })
    .max(12, { message: "Stationary number не может быть больше 10 символов" }),
  mobileNumber: z
    .string()
    .min(1, { message: "Mobile number не может быть пустым" })
    .max(12, { message: "Mobile number не может быть больше 10 символов" }),
  email: z.string().email({ message: "Email не может быть пустым" }),
  password: z.string().min(1, { message: "Пароль не может быть пустым" }),
});
