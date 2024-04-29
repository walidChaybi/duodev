"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function SidebarItem({ label, iconSrc, href }) {
  const pathName = usePathname();
  const active = pathName === href;

  return (
    <Button
      className=" justify-start h-[52px]"
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Link href={href} className="flex items-center">
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        <p>{label}</p>
      </Link>
    </Button>
  );
}

export default SidebarItem;
