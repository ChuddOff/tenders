import { db } from "@/server/db";
import { type NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { RegisterSchema } from "@/validators/zod";
import type { registerPayload } from "@/app/_components/utils";

export async function POST(req: NextRequest) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const body: registerPayload = await req.json();

  try {
    RegisterSchema.parse(body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: error.errors[0]!.message,
        },
        {
          status: 400,
        },
      );
    }
  }

  const userExist = await db.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (userExist) {
    return NextResponse.json({
      success: false,
      error: "User with this email already exist",
    });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  await db.user.create({
    data: {
      name: body.username,
      email: body.email,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ success: true, error: null });
}
