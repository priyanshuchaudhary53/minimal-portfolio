import Image from "next/image";
import ArrowUpRightIcon2 from "../icon/ArrowUpRightIcon2";
import ArrowUpRightIcon from "../icon/ArrowUpRightIcon";
import Link from "next/link";

export default function PortfolioItem({ portfolio }) {
  return (
    <li className="relative group transition-colors sm:even:line-l sm:odd:line-r hover:bg-gray-950/5">
      {/* <Link
        href={`/work/${portfolio.slug}`}
        aria-label={portfolio.title}
        className="absolute inset-0 z-10"
      ></Link> */}
      <div className="p-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
        <div className="block relative">
          <a
            href={portfolio.url}
            aria-label={`Visit ${portfolio.title}`}
            className="absolute bottom-2 right-2 z-20 w-7 h-7 rounded-md sm:w-auto sm:h-auto flex sm:transform justify-center items-center gap-1 sm:rounded-full border border-gray-950/10 bg-white sm:border-gray-950 sm:bg-gray-950/90 sm:py-0.5 sm:pr-2 sm:pb-1 sm:pl-3 text-center font-mono text-xs/5 font-medium text-gray-950 sm:text-white inset-ring inset-ring-white/10 sm:opacity-0 sm:top-1/2 sm:bottom-auto sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:hidden sm:transition-opacity sm:group-hover:flex sm:group-hover:opacity-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden sm:block">
              {portfolio.url.replace(/^https?:\/\/([^\/]+).*$/, "$1")}
            </span>{" "}
           <ArrowUpRightIcon2
              className="hidden sm:block shrink-0 size-3.5"
              aria-hidden="true"
            />
            <ArrowUpRightIcon
              className="sm:hidden shrink-0 size-4"
              stroke="2"
              aria-hidden="true"
            />
          </a>
          <div className="relative aspect-672/494 overflow-hidden rounded-xl outline outline-gray-950/5">
            <Image
              src={portfolio.image}
              alt={portfolio.title}
              width={600}
              height={400}
              className="absolute object-cover transition-all ease-in-out duration-400 group-hover:object-bottom object-top inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-2 px-4 py-2 sm:px-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
        <h3 className="text-gray-950 text-sm/6 font-medium">
          {portfolio.title}
        </h3>
        <p className="line-clamp-1 text-sm/6 text-neutral-600">
          {portfolio.description}
        </p>
        <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-xs">
          {portfolio.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-[8px] bg-gray-50 border border-gray-950/5 px-2.5 py-1 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
