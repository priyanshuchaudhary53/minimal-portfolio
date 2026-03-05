import PortfolioChallenge from "./portfolioChallenge";
import PortfolioContent from "./portfolioContent";
import PortfolioDevelopment from "./portfolioDevelopment";
import PortfolioPerformance from "./portfolioPerformance";
import PortfolioResearch from "./portfolioResearch";
import PortfolioSeeding from "./portfolioSeeding";

export default function SectionRenderer({ section }) {
  if (!section?.type) return null;

  switch (section.type) {
    case "challenges":
      return <PortfolioChallenge initialLimit={4} {...section.data} />; // className="mt-6 2xl:mt-10"

    case "performance":
      return <PortfolioPerformance {...section.data} />; // className="my-10 2xl:my-18"

    case "research":
      return <PortfolioResearch {...section.data} /> // className="mt-6 2xl:mt-10"

    case "development":
      return <PortfolioDevelopment {...section.data} />

    case "seeding":
      return <PortfolioSeeding {...section.data} />

    case "content":
      return <PortfolioContent {...section.data} />

    default:
      return null;
  }
}
