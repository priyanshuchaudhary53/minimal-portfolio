"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import navbarData from "@/data/navbarData";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const distanceFromBottom = fullHeight - (scrollTop + viewportHeight);

    if (distanceFromBottom <= 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pb-8 w-full fixed left-1/2 -translate-x-1/2 bottom-0 flex justify-center z-50 max-w-screen">
      {isVisible && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="opacity-100 absolute inset-0 z-1 mask-[linear-gradient(rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_25%,rgba(0,0,0,0)_37.5%)] pointer-events-none backdrop-blur-[0.25px] will-change-auto"
          ></div>
          <div
            className="opacity-100 absolute inset-0 z-2 mask-[linear-gradient(rgba(0,0,0,0)_12.5%,rgb(0,0,0)_25%,rgb(0,0,0)_37.5%,rgba(0,0,0,0)_50%)] pointer-events-none backdrop-blur-[0.5px] will-change-auto"
          ></div>
          <div
            className="opacity-100 absolute inset-0 z-3 mask-[linear-gradient(rgba(0,0,0,0)_25%,rgb(0,0,0)_37.5%,rgb(0,0,0)_50%,rgba(0,0,0,0)_62.5%)] pointer-events-none backdrop-blur-[1px] will-change-auto"
          ></div>
          <div
            className="opacity-100 absolute inset-0 z-4 mask-[linear-gradient(rgba(0,0,0,0)_37.5%,rgb(0,0,0)_50%,rgb(0,0,0)_62.5%,rgba(0,0,0,0)_75%)] pointer-events-none backdrop-blur-[2px] will-change-auto"
          ></div>
          <div
          className="opacity-100 absolute inset-0 z-5 mask-[linear-gradient(rgba(0,0,0,0)_50%,rgb(0,0,0)_62.5%,rgb(0,0,0)_75%,rgba(0,0,0,0)_87.5%)] pointer-events-none backdrop-blur-xs will-change-auto"
          ></div>
          <div
          className="opacity-100 absolute inset-0 z-6 mask-[linear-gradient(rgba(0,0,0,0)_62.5%,rgb(0,0,0)_75%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] pointer-events-none backdrop-blur-sm will-change-auto"
          ></div>
          <div
          className="opacity-100 absolute inset-0 z-7 mask-[linear-gradient(rgba(0,0,0,0)_75%,rgb(0,0,0)_87.5%,rgb(0,0,0)_100%)] pointer-events-none backdrop-blur-lg will-change-auto"
          ></div>
          <div
            className="opacity-100 absolute inset-0 z-8 mask-[linear-gradient(rgba(0,0,0,0)_87.5%,rgb(0,0,0)_100%)] pointer-events-none backdrop-blur-[32px] will-change-auto"
          ></div>
        </div>
      )}
      <nav
        className={`z-10 p-1 flex gap-1 bg-white rounded-[12px] ring-1 ring-gray-950/5 transition-all duration-200 ${isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}`}
      >
        {navbarData.map((item) => (
          <div key={item.id}>
            <HoverCard openDelay={10} closeDelay={10}>
              <HoverCardTrigger
                href={item.url}
                className="inline-flex h-9 w-9 text-gray-600 items-center justify-center rounded-md transition-colors hover:bg-gray-950/5 "
              >
                <span className="sr-only">{item.title}</span>
                {item.svg}
              </HoverCardTrigger>
              <HoverCardContent
                side="top"
                sideOffset={12}
                className="p-0 border-0 text-gray-950 ring-1 ring-gray-950/5 bg-gray-50 shadow-none w-auto text-sm px-2 py-1"
              >
                {item.title}
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </nav>
    </div>
  );
}
