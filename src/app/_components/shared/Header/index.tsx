import Image from "next/image";
import React from "react";
import { MdCreate, MdOutlineManageSearch } from "react-icons/md";
import avatar from "@/images/ava.jpg";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { DarkMode } from "../darkMode";
import { getServerAuthSession } from "@/server/auth";
import { Button } from "@/components/ui/button";

export default async function Header() {
  const session = await getServerAuthSession();

  return (
    <header className="mx-auto mb-6 mt-3 flex items-center justify-between">
      <Link href="/" className="text-3xl font-bold text-main">
        Tender
      </Link>
      <div className="flex items-center gap-[12px] max-[570px]:hidden">
        <div className="flex items-center justify-between border-b-[1px] border-main px-[12px] py-[8px]">
          <input
            type="text"
            placeholder="Поиск по названию"
            className="cursor-text font-normal text-[#000000] focus:border-none focus:outline-none"
          />
          <MdOutlineManageSearch size={25} className="text-main" />
        </div>
        <div className="flex items-center justify-center rounded-[100%] bg-main p-3">
          <IoMdSearch className="text-white" />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <DarkMode />
        {session?.user.role === "ADMIN" && (
          <Link href="/write">
            <Button variant={"outline"} size={"icon"}>
              <MdCreate />
            </Button>
          </Link>
        )}
        <Image src={avatar} alt="avatar" className="h-9 w-9 rounded-full" />
      </div>
    </header>
  );
}
