"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import PortfolioChallengeGrid from "./portfolioChallengeGrid";
import { useState, useMemo } from "react";

export default function PortfolioChallenge({
  title,
  description = "",
  items = [],
  initialLimit = null,
  className,
}) {
  if (!items.length) return null;

  const limit = useMemo(() => {
    return typeof initialLimit === "number" && initialLimit > 0
      ? initialLimit
      : null;
  }, [initialLimit]);

  const [showAll, setShowAll] = useState(limit === null);

  const shouldShowToggle = limit && items.length > limit;

  return (
    <section className={className}>
      <div className="px-2 max-sm:px-4 line-y">
        <h2 className="text-gray-950 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {description && (
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <p className="max-w-lg text-gray-600 text-base/7">{description}</p>
        </div>
      )}

      <PortfolioChallengeGrid
        challenges={items}
        style="grid"
        limit={limit}
        showAll={showAll}
        className="mt-6 2xl:mt-10"
      />

      {shouldShowToggle && (
        <div className="px-2 max-sm:px-4 flex justify-center mt-6 line-y 2xl:mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-black pl-4 pr-3 py-2 text-sm/6 font-medium text-white hover:bg-gray-800 outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {showAll ? "Show less" : "Show more"}
            <ChevronDownIcon
              className={`size-4 stroke-2 ${showAll ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </section>
  );
}
