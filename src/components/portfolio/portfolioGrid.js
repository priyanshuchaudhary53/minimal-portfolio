"use client";

import portfolioData from "@/data/portfolioData";
import PortfolioItem from "./portfolioItem";
import NavigationButton from "../ui/NavigationButton";
import ArrowRightIcon from "../icon/ArrowRightIcon";

export default function PortfolioGrid({ className, limit = null }) {
  const normalizedLimit = Math.max(0, Number(limit)) || null;

  const portfoliosToShow = normalizedLimit
    ? portfolioData.slice(0, normalizedLimit)
    : portfolioData;

  const hasMorePortfolios =
    normalizedLimit !== null && portfolioData.length > normalizedLimit;

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
          <NavigationButton href="/work" withIcon={true}>
            More works
            <ArrowRightIcon className="size-4" stroke="2" aria-hidden="true" />
          </NavigationButton>
        </div>
      )}
    </>
  );
}
