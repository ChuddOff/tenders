"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { type loginPayload } from "../../../lib/auth";
import { signIn } from "next-auth/react";
import ErrorMessage from "./ErrorMessage";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/validators/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<loginPayload>({ resolver: zodResolver(LoginSchema) });
  const [isPending, setIsPending] = useState(false);
  const [authError, setAuthError] = useState("");
  const router = useRouter();

  const onSubmit: SubmitHandler<loginPayload> = async () => {
    setIsPending(true);
    const res = await signIn("credentials", {
      email: getValues("email"),
      password: getValues("password"),
      redirect: false,
    });

    if (res?.status === 200) {
      router.push("/");
    } else {
      if (res?.error) {
        setAuthError(res.error);
        setIsPending(false);
      }
    }
  };

  const inputs: {
    name: keyof loginPayload;
    label: string;
    type: string;
    placeholder: string;
  }[] = [
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Email",
    },
    {
      name: "password",
      label: "Пороль",
      type: "password",
      placeholder: "Password",
    },
  ];

  return (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-[20px] shadow-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-20 flex w-full flex-col rounded-[20px] border border-[#e8e8e8] px-5 py-3 font-sans text-black backdrop-blur-3xl"
      >
        <div className="mb-5">
          <h1 className="text-center text-2xl">Ввойдите в аккаунт</h1>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {authError && <ErrorMessage message={authError} />}
          {inputs.map((input) => {
            return (
              <div key={input.name}>
                <p className="mb-1">
                  {errors[input.name] ? (
                    <ErrorMessage message={errors[input.name]!.message!} />
                  ) : (
                    <>{input.label}</>
                  )}
                </p>
                <input
                  {...register(input.name)}
                  type={input.type}
                  className="w-full rounded-md border bg-transparent px-2 py-2 outline-none placeholder:text-[#a4a4a4]"
                  id={input.name}
                  placeholder={input.placeholder}
                />
              </div>
            );
          })}
        </div>
        <Button
          type="submit"
          className={`mb-7 rounded-md bg-black py-1 text-white ${isPending && "opacity-30"}`}
        >
          Login {isPending && <Spinner className="ml-2 inline" />}
        </Button>
      </form>
    </div>
  );
}
