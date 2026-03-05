import { ArrowLeftIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import portfolioData from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioChallenge from "@/components/portfolio/portfolioChallenge";
import HoverIconLink from "@/components/ui/HoverIconLink";
import NextPostLink from "@/components/ui/NextPostLink";
import PreviousPostLink from "@/components/ui/PreviousPostLink";
import SectionRenderer from "@/components/portfolio/sectionRenderer";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const portfolioItem = portfolioData.find((item) => item.slug === slug);

  if (!portfolioItem) {
    return {
      title: "Page not found – Priyanshu Chaudhary",
    };
  }

  const metaData = {
    title: `${portfolioItem.title} – Priyanshu Chaudhary`,
    description: portfolioItem.description,
  };

  const { title, description } = portfolioItem.meta ?? {};

  if (title) metaData.title = title;
  if (description) metaData.description = description;

  return metaData;
}

const page = async ({ params }) => {
  const { slug } = await params;

  const isDev = process.env.NODE_ENV === "development";

  // Filter items
  const visiblePortfolio = portfolioData.filter((item) => item.public || isDev);

  // Find the portfolio item based on the slug
  const portfolioItem = visiblePortfolio.find((item) => item.slug === slug);

  if (!portfolioItem) {
    notFound();
  }

  // Get index of current item
  const currentIndex = visiblePortfolio.findIndex((item) => item.slug === slug);

  const previousPortfolio =
    currentIndex > 0 ? visiblePortfolio[currentIndex - 1] : null;

  const nextPortfolio =
    currentIndex < visiblePortfolio.length - 1
      ? visiblePortfolio[currentIndex + 1]
      : null;

  return (
    <main className="py-10 2xl:py-16 grid grid-cols-1 gap-12 2xl:gap-18">
      <section>
        <div className="px-2 flex justify-between max-sm:px-4 line-y">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 select-none cursor-pointer text-sm font-medium text-gray-600 transition-[color] underline-offset-4 hover:underline hover:text-gray-950"
          >
            <ArrowLeftIcon className="size-4 stroke-2" aria-hidden="true" />
            Work
          </Link>
        </div>

        <div className="mt-6 px-2 max-sm:px-4 line-y">
          <div className="flex justify-between items-center gap-2">
            <h1 className="text-gray-950 text-3xl font-semibold tracking-tight">
              {portfolioItem.title}
            </h1>
            <div className="flex items-center gap-2">
              <HoverIconLink
                href={portfolioItem.url}
                hoverText="Visit website"
                isExternal={true}
              >
                <span className="sr-only">
                  Visit {portfolioItem.title} website
                </span>
                <ArrowUpRightIcon
                  className="size-3.5 stroke-2"
                  aria-hidden="true"
                />
              </HoverIconLink>
              {previousPortfolio && (
                <PreviousPostLink previousPostSlug={previousPortfolio.slug} />
              )}
              {nextPortfolio && (
                <NextPostLink nextPostSlug={nextPortfolio.slug} />
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 px-2 2xl:mt-10">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-950/10 ring-inset"></div>
            <Image
              src={portfolioItem.image}
              width={1200}
              height={800}
              alt={`${portfolioItem.title} screenshot`}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {portfolioItem.project_info && (
          <div className="mt-6 2xl:mt-10">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {portfolioItem.project_info.map((info, index) => (
                <div
                  key={index}
                  className="group px-4 sm:px-2 sm:even:line-l sm:odd:line-r"
                >
                  <div className="py-2 relative max-sm:line-y sm:group-nth-[2n+1]:line-y">
                    <dt className="text-cyan-500 font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">
                      {info.label}
                    </dt>
                    <dd className="mt-0.5 text-gray-950 text-base/7 font-medium">
                      {info.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        )}
      </section>

      {portfolioItem.sections?.map((section, index) => (
        <SectionRenderer key={index} section={section} />
      ))}
    </main>
  );
};

export default page;
