import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

function Header({ title }) {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft size={24} />
        </Button>
      </Link>
      <h1 className="font-bold text-lg">{title}</h1>
      <div />
    </div>
  );
}

export default Header;
