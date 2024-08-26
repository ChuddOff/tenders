"use client";

import {
  type RegisterOptions,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { type loginPayload } from "../utils/auth";
import { signIn } from "next-auth/react";

function ErrorMessage({ message }: { message: string }) {
  return <p className="text-red-500">{message}</p>;
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<loginPayload>();

  const onSubmit: SubmitHandler<loginPayload> = () => {
    void signIn("credentials", {
      email: getValues("email"),
      password: getValues("password"),
    });
  };

  const inputs: {
    name: keyof loginPayload;
    type: string;
    placeholder: string;
    validators?: RegisterOptions<loginPayload, keyof loginPayload>;
  }[] = [
    {
      name: "email",
      type: "text",
      placeholder: "Email",
      validators: {
        required: {
          value: true,
          message: "Email не может быть пустым",
        },
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      validators: {
        required: {
          value: true,
          message: "Password не может быть пустым",
        },
      },
    },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col rounded-md bg-[#2b2b2bf2] p-5 font-sans text-white"
      >
        <div className="mb-5">
          <h1 className="text-2xl">Логин</h1>
          <p className="text-[#bebebe]">Рады видеть вас снова!</p>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {inputs.map((input) => (
            <div key={input.name}>
              {errors[input.name] && (
                <ErrorMessage message={errors[input.name]!.message!} />
              )}
              <input
                {...register(input.name, {
                  ...input.validators,
                })}
                type={input.type}
                className="w-full bg-transparent px-2 py-2 outline-none"
                id={input.name}
                placeholder={input.placeholder}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="mb-7 rounded-md bg-[#4d4d4d] py-1">
          Login
        </button>
      </form>
    </div>
  );
}
