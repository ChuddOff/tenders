import Link from "next/link";
import type { Post } from "@prisma/client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { shortString } from "@/lib/utils";
import Image from "next/image";

interface Props {
  item: Post;
}

export default function BlogItem({ item }: Props) {
  return (
    <Link
      href={`blog/${item.id}`}
      className="animate flex w-full flex-col items-center justify-end pb-7"
    >
      <p className="text- mb-4 max-w-[500px] break-all font-comfortaa text-xl font-medium hover:underline max-lg:text-base">
        {shortString(item.title, 35)}
      </p>
      <AspectRatio
        ratio={7 / 4}
        className="mx-auto mb-5 max-h-[320px] max-w-[500px]"
      >
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={item.perviewImage}
          className="h-full w-full overflow-hidden rounded-xl"
          alt="test"
        />
      </AspectRatio>

      <p className="mb-2 max-w-[500px] break-all font-inter text-[#303030] max-lg:text-sm">
        {shortString(item.smallDesc, 65)}
      </p>
    </Link>
  );
}
