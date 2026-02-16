"use client";

import { useState } from "react";
import portfolioData from "@/data/portfolioData";
import PortfolioItem from "./portfolioItem";

export default function PortfolioGrid({ className, inititalLimit }) {
  const initialLimit = typeof inititalLimit === "number" && inititalLimit > 0 ? inititalLimit : 4;
  const [showAll, setShowAll] = useState(false);

  const portfoliosToShow = showAll
    ? portfolioData
    : portfolioData.slice(0, initialLimit);
  const hasMorePortfolios = portfolioData.length > initialLimit;

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className={`${className} relative isolate`}>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {portfoliosToShow.map((portfolio) => (
            <PortfolioItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </ul>
      </div>
      {hasMorePortfolios && (
        <div className="px-2 max-sm:px-4 flex justify-center mt-6 line-y 2xl:mt-10">
          <button
            onClick={handleToggle}
            className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-black pl-4 pr-3 py-2 text-sm/6 font-medium text-white hover:bg-gray-800 outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            {showAll ? "Show less"  : "Show more"}
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-5 ${showAll ? "rotate-180" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
