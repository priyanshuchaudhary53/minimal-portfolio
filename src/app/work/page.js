import PortfolioItem from "@/components/portfolio/portfolioItem";
import portfolioData from "@/data/portfolioData";

export const metadata = {
  title: "Work – Priyanshu Chaudhary",
  description: "A collection of my recent work in WordPress development.",
}

const page = async () => {
  return (
    <main className="py-10 2xl:py-16">
      <div className="px-2 max-sm:px-4 line-y">
        <h1 className="text-gray-950 text-2xl font-semibold tracking-tight">
          Work
        </h1>
      </div>
      <div className="mt-4 px-2 max-sm:px-4 line-y">
        <p className="text-gray-600 text-base">
          A collection of my recent work in WordPress development.
        </p>
      </div>
      <div className="mt-6 2xl:mt-10">
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {portfolioData.map((portfolio) => (
            <PortfolioItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default page;
