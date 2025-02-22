"use client";

import Link from "next/link";
import { CommandItem } from "../ui/command";

export default function ExperienceItem({
  icon,
  company,
  title,
  date,
  linkTo,
}: {
  icon: React.ReactNode;
  company: string;
  title: string;
  date: string;
  linkTo: string;
}) {
  const searchValue = company + " " + title;

  return (
    <CommandItem
      value={searchValue}
      onSelect={() => {
        window.open(linkTo, "_blank");
      }}
    >
      <Link
        className="flex items-center justify-between w-full text-xs md:text-sm"
        href={linkTo}
        target="_blank"
      >
        <div className="flex items-center gap-2">
          {icon}
          <div className="flex flex-col gap-1">
            <div className="text-muted-foreground text-xs">{company}</div>
            <span className="font-medium">{title}</span>
          </div>
        </div>
        <span className="text-muted-foreground text-xs text-nowrap">
          {date}
        </span>
      </Link>
    </CommandItem>
  );
}
