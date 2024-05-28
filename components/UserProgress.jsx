import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function UserProgress({ activeCourse, hearts, points, hasActiveSubscription }) {
  return (
    <div className="flex iems-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={30}
            height={30}
            className=" rounded-md"
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            height={15}
            width={15}
            alt="Points"
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            height={28}
            width={28}
            alt="hearts"
            className="mr-2"
          />
          {hasActiveSubscription ? "∞" : hearts}
        </Button>
      </Link>
    </div>
  );
}

export default UserProgress;
