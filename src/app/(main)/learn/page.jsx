import FeedWrapper from "@/components/FeedWrapper";
import Header from "@/components/Header";
import StickyWrapper from "@/components/StickyWrapper";
import UserProgress from "@/components/UserProgress";
import React from "react";

function page() {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: "React",
            imageSrc: "/react.svg",
          }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="React" />
      </FeedWrapper>
    </div>
  );
}

export default page;
