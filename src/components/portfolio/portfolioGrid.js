"use client";

import { useState } from "react";
import portfolioData from "@/data/portfolioData";
import PortfolioItem from "./portfolioItem";
import ChevronDownIcon from "../icon/ChevronDownIcon";

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
            <ChevronDownIcon stroke="2" className={`size-4 ${showAll ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
