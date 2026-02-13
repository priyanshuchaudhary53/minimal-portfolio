import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import ProjectList from "@/components/project/projectList";
import TestimonialList from "@/components/testimonial/testimonialList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-18 grid gap-18 2xl:gap-24 2xl:py-24">
      <div className="">
        <div className="px-2 max-sm:px-4 line-y">
          <Image src="/profile.webp" alt="Priyanshu Chaudhary" width={72} height={72} className="rounded-2xl" />
        </div>
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <div className="flex items-center gap-2">
            <h1 className="text-gray-950 text-2xl font-semibold tracking-tight">Priyanshu Chaudhary</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="size-4 text-[#009CF5] select-none" aria-label="Verified"><path fill="currentColor" d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"></path></svg>
          </div>
          <p className="text-gray-600 text-base/7">WordPress Developer</p>
        </div>
        <div className="mt-6 px-2 max-sm:px-4 line-y">
          <p className="text-gray-600 text-base">Hey, I'm Priyanshu, a WordPress developer based in <span className="inline-flex items-center gap-1.5">Lucknow, India <Image src="/india.svg" alt="India Flag" width={24} height={20} className="inline-block shrink-0 rounded object-cover h-4.5" /></span> . I specialize in creating custom themes and plugins.</p>
          <p className="mt-2 text-gray-600 text-base">I love creating websites that are perfect blend of functionality and aesthetics.</p>
        </div>
      </div>
      <div className="">
        <div className="px-2 max-sm:px-4 line-y">
          <h2 className="text-accent font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">Work</h2>
        </div>
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <p className="text-gray-600 text-base/7">A small selection of my work</p>
        </div>
        <PortfolioGrid className="mt-6 2xl:mt-10" />
      </div>
      <div>
        <h2 className="sr-only">Testimonial</h2>
        <TestimonialList />
      </div>
      <div>
        <div className="px-2 max-sm:px-4 line-y">
          <h2 className="text-accent font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">Side projects</h2>
        </div>
        <ProjectList className="mt-6 2xl:mt-10" />
      </div>
    </div>
  );
}
