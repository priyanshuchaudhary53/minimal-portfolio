import SectionWrapper from "@/components/layout/SectionWrapper";
import PortfolioItem from "@/components/portfolio/portfolioItem";
import Testimonial from "@/components/testimonial/testimonial";
import testimonialData from "@/data/testimonialData";
import portfolioData from "@/data/portfolioData";
import { baseOpenGraph, baseTwitter } from "@/lib/site";

const title = "Work – Priyanshu Chaudhary";
const description = "A collection of my recent work in WordPress development.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    ...baseOpenGraph,
    url: "/work",
    title,
    description,
  },
  twitter: {
    ...baseTwitter,
    title,
    description,
  },
};

const page = async () => {
    const testimonial = testimonialData.dmitry;

  return (
    <main className="py-10 grid grid-cols-1 gap-10 2xl:gap-18 2xl:py-16">
      <section>
        <div className="px-2 max-sm:px-4 line-y">
          <h1 className="text-gray-950 text-3xl font-semibold tracking-tight">
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
      </section>
      <SectionWrapper title="Testimonial" showTitle={false}>
        <Testimonial testimonial={testimonial} />
      </SectionWrapper>
    </main>
  );
};

export default page;
