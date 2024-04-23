import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button variant="ghost" className="w-full" size="lg">
          <Image
            src="/react.svg"
            alt="logo"
            width={30}
            height={30}
            className="mr-4 rounded-md"
          />
          React
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image
            src="/javascript.svg"
            alt="logo"
            width={30}
            height={30}
            className="mr-4 rounded-md"
          />
          Javascript
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image
            src="/css.svg"
            alt="logo"
            width={30}
            height={30}
            className="mr-4 rounded-md"
          />
          CSS
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image
            src="/html.svg"
            alt="logo"
            width={30}
            height={30}
            className="mr-4 rounded-md"
          />
          HTML
        </Button>
        <Button variant="ghost" className="w-full" size="lg">
          <Image
            src="/nextjs.svg"
            alt="logo"
            width={30}
            height={30}
            className="mr-4 rounded-md"
          />
          Nextjs
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
