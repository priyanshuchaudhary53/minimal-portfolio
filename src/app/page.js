import ClientList from "@/components/client/clientList";
import SectionWrapper from "@/components/layout/SectionWrapper";
import ProfileImage from "@/components/PorfileImage";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import ProfileAbout from "@/components/ProfileAbout";
import ProfileTitle from "@/components/ProfileTitle";
import ProjectList from "@/components/project/projectList";
import TestimonialList from "@/components/testimonial/testimonialList";

export default function Home() {
  return (
    <main className="py-18 grid gap-18 2xl:gap-24 2xl:py-24">
      <section id="intro" className="scroll-mt-4">
        <ProfileImage src="/profile.webp" alt="Priyanshu Chaudhary" />
        <ProfileTitle className="mt-4" title="Priyanshu Chaudhary" subtitle="WordPress Developer" />
        <ProfileAbout className="mt-6 2xl:mt-10" />
        {/* <div className="mt-6 px-2 max-sm:px-4 line-y">
          <div className="group font-mono flex items-center gap-2 text-sm">
            <div className="shrink-0 flex size-7 bg-gray-50 text-gray-600 justify-center items-center rounded-[8px] ring-1 ring-inset ring-gray-950/5">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
              <p>
                <a href="mailto:contact@priyanshuc.dev" aria-label="Send email to contact@priyanshuc.dev" className="inline-block text-gray-600 text-sm/7 underline-offset-4 hover:underline">contact@priyanshuc.dev</a>
              </p>
          </div>
        </div> */}
      </section>

      <SectionWrapper title="CLients" description="Trusted by businesses & agencies">
          <ClientList className="mt-6 2xl:mt-10" />
      </SectionWrapper>

      <SectionWrapper id="work" title="Work" description="A small selection of my work">
        <PortfolioGrid className="mt-6 2xl:mt-10" limit={4} />
      </SectionWrapper>

      <SectionWrapper id="testimonial" title="Testimonial" showTitle={false}>
        <TestimonialList />
      </SectionWrapper>

      <SectionWrapper id="side-projects" title="Side projects">
        <ProjectList className="mt-6 2xl:mt-10" />
      </SectionWrapper>
    </main>
  );
}
