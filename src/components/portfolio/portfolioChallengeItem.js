import { injectHtml } from "@/helpers/injectHtml";
import * as Icons from "@heroicons/react/24/outline";

export default function PortfolioChallengeItem({
  challenge,
  variant,
  hidden = false,
}) {
  const Icon = Icons[challenge.icon] || Icons.QuestionMarkCircleIcon;

  const wrapperClasses = [
    hidden && "hidden",
    variant === "list"
      ? "relative pl-9 grid gap-2 grid-cols-1 sm:grid-cols-2 line-y"
      : "group px-4 sm:px-2 sm:even:line-l sm:odd:line-r",
  ]
    .filter(Boolean)
    .join(" ");

  if (variant === "list") {
    return (
      <div className={wrapperClasses}>
        <dt className="text-base/7 font-semibold text-gray-950">
          <div className="absolute left-0 top-0.5 size-6 rounded-[8px] flex justify-center items-center bg-gray-950/5">
            <Icon className="size-4 text-gray-600" />
          </div>
          {challenge.title}
        </dt>
        <dd className="text-sm/6 text-gray-600">{injectHtml(challenge.description, challenge.highlights, challenge.links)}</dd>
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={wrapperClasses}>
        <div className="max-sm:pl-9 py-2 relative max-sm:line-y sm:group-nth-[2n+1]:line-y">
          <dt className="text-base font-medium text-gray-950">
            <div className="max-sm:absolute max-sm:left-0 max-sm:top-2 sm:mb-2 size-6 sm:size-8 rounded-[8px] flex justify-center items-center bg-gray-950/5">
              <Icon className="size-4 sm:size-5 text-gray-600" />
            </div>
            {challenge.title}
          </dt>
          <dd className="mt-1 text-sm/6 text-gray-600">
            {injectHtml(challenge.description, challenge.highlights, challenge.links)}
          </dd>
        </div>
      </div>
    );
  }
}
