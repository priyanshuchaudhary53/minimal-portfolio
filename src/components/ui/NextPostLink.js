"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import HoverIconLink from "./HoverIconLink";
import { Kbd } from "./kbd";

export default function NextPostLink({ nextPostSlug }) {
  const router = useRouter();
  const url = `/work/${nextPostSlug}`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore typing inside inputs/textareas
      const tag = e.target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target.isContentEditable) {
        return;
      }

      if (e.key === "ArrowRight") {
        router.push(url);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router, url]);

  return (
    <HoverIconLink
      href={url}
      hoverText={
        <>
          Next work <Kbd className="dark text-white">&rarr;</Kbd>
        </>
      }
    >
      <span className="sr-only">Next</span>
      <ArrowRightIcon className="size-3.5 stroke-2" aria-hidden="true" />
    </HoverIconLink>
  );
}
