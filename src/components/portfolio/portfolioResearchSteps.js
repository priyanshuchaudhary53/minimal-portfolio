import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import TagRenderer from "../TagRenderer";

export default function PortfolioResearchSteps({
  index,
  title,
  description,
  options,
  content,
}) {
  return (
    <div>
      <h3 className="px-2 max-sm:px-4 pt-5 relative text-gray-950 text-xl font-semibold tracking-tight">
        <span className="absolute left-2 max-sm:left-4 top-0 font-mono text-xs font-normal text-black/30 select-none">{`Step ${index + 1}`}</span>{" "}
        <span className="sr-only">:</span>{" "}
        <span className="line-y">{title}</span>
      </h3>

      {description && (
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <p className="text-gray-600 text-base/7">{description}</p>
        </div>
      )}

      {options && (
        <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-gray-100 group px-2 max-sm:px-4 sm:even:line-l sm:odd:line-r"
            >
              <div className="flex flex-col h-full py-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <p className="text-base/7 text-gray-950">
                  <strong className="font-semibold">{option.title}</strong>
                </p>
                <p className="mt-0.5 text-sm/6 text-gray-600">
                  {option.description}
                </p>
                <div className="mt-2 space-y-2">
                  <div>
                    <p className="flex items-center gap-1.5 text-base/7 font-medium text-gray-950">
                      <CheckIcon
                        aria-label="hidden"
                        className="size-4.5 stroke-2 text-green-500"
                      />
                      Pros
                    </p>
                    <div className="prose text-gray-600 text-sm">
                      <ul className="marker:text-gray-400">
                        {option.pros.map((pro, index) => (
                          <li key={index}>{pro}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-base/7 font-medium text-gray-950">
                      <XMarkIcon
                        aria-label="hidden"
                        className="size-4.5 stroke-2 text-red-500"
                      />
                      Cons
                    </p>
                    <div className="prose text-gray-600 text-sm">
                      <ul className="marker:text-gray-400">
                        {option.cons.map((con, index) => (
                          <li key={index}>{con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {content && (
        <div
          className={`mt-4 grid grid-cols-1 gap-4 px-2 max-sm:px-4 text-gray-600`}
        >
          {content.map((item, index) => {
            if (item.type === "block") {
              return (
                <div key={index} className="line-y prose">
                  {item.items?.map((elem, i) => (
                    <TagRenderer
                      key={i}
                      tag={elem.tag}
                      content={elem.content}
                      highlights={elem.highlights}
                      links={elem.links}
                    />
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      )}
    </div>
  );
}
