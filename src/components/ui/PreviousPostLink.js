"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import HoverIconLink from "./HoverIconLink";
import { Kbd } from "./kbd";

export default function PreviousPostLink({ previousPostSlug }) {
  const router = useRouter();
  const url = `/work/${previousPostSlug}`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore typing inside inputs/textareas
      const tag = e.target.tagName.toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target.isContentEditable) {
        return;
      }

      if (e.key === "ArrowLeft") {
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
          Previous work <Kbd className="dark text-white">&larr;</Kbd>
        </>
      }
    >
      <span className="sr-only">Previous</span>
      <ArrowLeftIcon className="size-3.5 stroke-2" aria-hidden="true" />
    </HoverIconLink>
  );
}
