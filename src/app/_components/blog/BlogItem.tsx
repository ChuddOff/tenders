import Link from "next/link";
import type { Post } from "@prisma/client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { shortString } from "@/lib/utils";

interface Props {
  item: Post
}

export default function BlogItem({ item }: Props) {
  return (
    <Link
      href={`blog/${item.id}`}
      className="flex w-full flex-col items-center justify-end pb-7 animate"
    >
      <p className="text- mb-4 max-w-[500px] font-comfortaa text-xl font-medium hover:underline max-lg:text-base break-all">
        {shortString(item.title, 35)}
      </p>
      <AspectRatio
        ratio={7 / 4}
        className="mx-auto mb-5 max-h-[320px] max-w-[500px]"
      >
        <img
          src={item.perviewImage}
          className="h-full w-full overflow-hidden rounded-xl"
          alt="test"
        />
      </AspectRatio>

      <p className="mb-2 max-w-[500px] font-inter text-[#303030] max-lg:text-sm">
        {shortString(item.smallDesc, 65)}
      </p>
    </Link>
  );
}
