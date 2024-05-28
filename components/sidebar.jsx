"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";
import {
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";

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
        <SidebarItem
          label="LEADERBOARD"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="QUESTS" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="SHOP" href="/shop" iconSrc="/shop.svg" />
      </div>
      <div>
        <ClerkLoading>
          <Loader className="w-5 h-5 animate-spin" />
        </ClerkLoading>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton
            mode="modal"
            afterSignInUrl="/learn"
            afterSignUpUrl="/learn"
          >
            <Button variant="secondaryOutline">Sign in</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default Sidebar;
