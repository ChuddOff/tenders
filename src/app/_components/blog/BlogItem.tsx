import Image from "next/image";
import imageSample from "@/images/Image.png";
import Link from "next/link";
import type { Prisma } from "@prisma/client";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Props {
  item: {
    title: string;
    content: Prisma.JsonValue;
  };
}

export default function BlogItem({ item }: Props) {
  return (
    <Link
      href={"/"}
      className="max-w- flex w-full flex-col items-center border-b border-[#C2C2C2] py-3"
    >
      <p className="mb-4 max-w-[500px] font-comfortaa text-xl font-medium hover:underline max-lg:text-base">
        {item.title}
      </p>
      <AspectRatio ratio={7 / 4} className="!block">
        <Image
          src={imageSample}
          className="mb-5 h-full w-full overflow-hidden rounded-xl"
          alt="test"
        />
      </AspectRatio>

      <p className="mb-2 max-w-[500px] font-inter text-[#303030] max-lg:text-sm">
        {item.content?.toString()}
      </p>
    </Link>
  );
}
