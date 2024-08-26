"use server";

import AuthForm from "@/app/_components/auth";
import { getServerAuthSession } from "@/server/auth";
import { notFound } from "next/navigation";

export default async function Auth() {
  const session = await getServerAuthSession();

  if (session) return notFound();

  return <AuthForm />;
}
