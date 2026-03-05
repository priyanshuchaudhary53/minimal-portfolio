import PortfolioResearchSteps from "./portfolioResearchSteps";

export default function PortfolioResearch({
  title,
  description = "",
  steps,
  className,
}) {
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

      {steps && (
        <div className="mt-6 grid grid-cols-1 gap-6 2xl:gap-10 2xl:mt-10">
          {steps.map((step, index) => (
            <PortfolioResearchSteps key={index} index={index} {...step} />
          ))}
        </div>
      )}
    </section>
  );
}
