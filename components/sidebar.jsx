import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";

function Sidebar({ className }) {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.png" alt="Duodev" width={200} height={75} />
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="LEARN" href="/learn" iconSrc="/learn.svg" />
      </div>
    </div>
  );
}

export default Sidebar;
