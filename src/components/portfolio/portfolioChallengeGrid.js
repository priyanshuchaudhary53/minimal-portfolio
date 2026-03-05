import PortfolioChallengeItem from "./portfolioChallengeItem";

export default function PortfolioChallengeGrid({
  challenges = [],
  style = "grid",
  limit = null,
  showAll = true,
  className = "",
}) {
  if (!challenges.length) return null;

  const layout = style === "list" ? "list" : "grid";

  return (
    <div className={className}>
      <dl
        className={
          layout === "list"
            ? "grid px-2 max-sm:px-4 grid-cols-1 gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        }
      >
        {challenges.map((challenge, index) => {
          const shouldHide = limit && !showAll && index >= limit;

          return (
            <PortfolioChallengeItem
              key={challenge.key}
              challenge={challenge}
              variant={layout}
              hidden={shouldHide}
            />
          );
        })}
      </dl>
    </div>
  );
}
