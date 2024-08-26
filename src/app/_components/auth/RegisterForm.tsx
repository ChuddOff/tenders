"use client";

import {
  type RegisterOptions,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { registerFn, type registerPayload } from "../utils/auth";
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
    onSuccess: () =>
      signIn("credentials", {
        email: getValues("email"),
        password: getValues("password"),
        callbackUrl: "/",
        redirect: true,
      }),
  });

  const onSubmit: SubmitHandler<registerPayload> = (data) => {
    registerMutation.mutate(data);
  };

  const inputs: {
    name: keyof registerPayload;
    type: string;
    placeholder: string;
    validators: RegisterOptions<registerPayload, keyof registerPayload>;
  }[] = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      validators: {
        required: {
          value: true,
          message: "Username не может быть пустым",
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
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      validators: {
        required: {
          value: true,
          message: "Email не может быть пустым",
        },
      },
    },
    {
      name: "companyName",
      type: "text",
      placeholder: "Company Name",
      validators: {
        required: {
          value: true,
          message: "Company name не может быть пустым",
        },
      },
    },
    {
      name: "stationaryNumber",
      type: "tel",
      placeholder: "Stationary Number",
      validators: {
        required: {
          value: true,
          message: "Stationary number не может быть пустым",
        },
      },
    },
    {
      name: "mobileNumber",
      type: "tel",
      placeholder: "Mobile Number",
      validators: {
        required: {
          value: true,
          message: "Mobile number не может быть пустым",
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
          <h1 className="text-2xl">Регистрация</h1>
          <p className="text-[#bebebe]">Рады видеть вас снова!</p>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {inputs.map((input) => {
            console.log(errors.username);
            return (
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
            );
          })}
        </div>
        <button type="submit" className="mb-7 rounded-md bg-[#4d4d4d] py-1">
          Register
        </button>
      </form>
    </div>
  );
}
