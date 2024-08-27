"use client";

import {
  type RegisterOptions,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { registerFn, type registerPayload } from "../utils/auth";
import { signIn } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import Spinner from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import ErrorMessage from "./ErrorMessage";

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
      }),
  });

  const onSubmit: SubmitHandler<registerPayload> = (data) => {
    registerMutation.mutate(data);
  };

  const inputs: {
    name: keyof registerPayload;
    type: string;
    label: string;
    placeholder: string;
    validators: RegisterOptions<registerPayload, keyof registerPayload>;
  }[] = [
    {
      name: "username",
      label: "Имя пользователя",
      type: "text",
      placeholder: "Введите Имя пользователя",
      validators: {
        required: {
          value: true,
          message: "Имя пользователя не может быть пустым",
        },
      },
    },
    {
      name: "password",
      label: "Пароль",
      type: "password",
      placeholder: "Введите пароль",
      validators: {
        required: {
          value: true,
          message: "Пароль не может быть пустым",
        },
      },
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Введите email",
      validators: {
        required: {
          value: true,
          message: "Email не может быть пустым",
        },
      },
    },
    {
      name: "companyName",
      label: "Название компании",
      type: "text",
      placeholder: "Ваша компания",
      validators: {
        required: {
          value: true,
          message: "Название компании не может быть пустым",
        },
      },
    },
    {
      name: "stationaryNumber",
      label: "Стационарный номер",
      type: "tel",
      placeholder: "Введите стационарный номер",
      validators: {
        required: {
          value: true,
          message: "Стационарный номер не может быть пустым",
        },
        min: {
          value: 1,
          message: "Стационарный номер не может быть больше 10 символов",
        },
      },
    },
    {
      name: "mobileNumber",
      label: "Мобильный номер",
      type: "tel",
      placeholder: "Введите номер телефона",
      validators: {
        required: {
          value: true,
          message: "Мобильный номер не может быть пустым",
        },
        min: {
          value: 1,
          message: "Мобильный номер не может быть больше 10 символов",
        },
      },
    },
  ];

  return (
    <div className="flex w-full items-center justify-center overflow-hidden rounded-[20px] shadow-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-20 flex w-full flex-col rounded-[20px] border border-[#e8e8e8] px-5 py-3 font-sans text-black backdrop-blur-3xl"
      >
        <div className="mb-5">
          <h1 className="text-center text-2xl">Создайте аккаунт</h1>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {registerMutation.error && (
            <ErrorMessage message={registerMutation.error.message} />
          )}
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
                  {...register(input.name, {
                    ...input.validators,
                  })}
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
          className={`mb-7 rounded-md bg-black py-1 text-white ${registerMutation.isPending && "opacity-30"}`}
        >
          Register{" "}
          {registerMutation.isPending && <Spinner className="ml-2 inline" />}
        </Button>
      </form>
    </div>
  );
}
