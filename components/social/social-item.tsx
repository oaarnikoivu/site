"use client";

import Link from "next/link";
import { CommandItem } from "../ui/command";

export default function SocialItem({
  icon,
  name,
  linkTo,
}: {
  icon: React.ReactNode;
  name: string;
  linkTo: string;
}) {
  return (
    <CommandItem value={name} onSelect={() => window.open(linkTo, "_blank")}>
      <Link
        className="flex w-full items-center gap-2.5 text-xs md:text-sm"
        href={linkTo}
        target="_blank"
      >
        {icon}
        <span className="font-medium">{name}</span>
      </Link>
    </CommandItem>
  );
}
