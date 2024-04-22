"use client";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="max-w-[980px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.jpg" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice, and get better at coding interviews
        </h1>
        <div>
          <ClerkLoaded>
            <SignedOut>
              <div className=" flex flex-col items-center justify-center">
                <SignUpButton
                  mode="modal"
                  afterSignUpUrl="/learn"
                  afterSignInUrl="/learn"
                >
                  <Button size="lg" className="w-[400px]" variant="secondary">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton
                  mode="modal"
                  afterSignUpUrl="/learn"
                  afterSignInUrl="/learn"
                >
                  <Button
                    size="lg"
                    className="w-[400px]"
                    variant="secondaryOutline"
                  >
                    I already have an account
                  </Button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <Button>Continue Learning</Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

export default page;