"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { registerFn, type registerPayload } from "../utils";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

function ErrorMessage({ message }: { message: string }) {
  return <p className="text-red-500">{message}</p>;
}

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<registerPayload>();

  const registerMutation = useMutation({
    mutationFn: (data: registerPayload) => registerFn(data),
    onSuccess: () => signIn("credentials", { ...getValues() }),
  });

  const onSubmit: SubmitHandler<registerPayload> = (data) => {
    registerMutation.mutate(data);
  };

  const inputs: {
    name: keyof registerPayload;
    type: string;
    placeholder: string;
  }[] = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
    },
    {
      name: "companyName",
      type: "text",
      placeholder: "Company Name",
    },
    {
      name: "stationaryNumber",
      type: "text",
      placeholder: "Stationary Number",
    },
    {
      name: "mobileNumber",
      type: "text",
      placeholder: "Mobile Number",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
    },
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex min-w-[450px] flex-col rounded-md bg-[#2b2b2bf2] p-5 font-sans text-white"
      >
        <div className="mb-5">
          <h1 className="text-2xl">Login</h1>
          <p className="text-[#bebebe]">Glad you are back!</p>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {inputs.map((input) => (
            <div key={input.name}>
              {errors[input.name] && (
                <ErrorMessage message={errors[input.name]!.message!} />
              )}
              <input
                {...register(input.name, { required: true })}
                type={input.type}
                className="bg-transparent px-2 py-2 outline-none"
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
