import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import ProjectList from "@/components/project/projectList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-12 grid gap-18 //pb-24 sm:gap-30 sm:py-20 //md:pb-40">
      <div className="">
        <div className="px-2 max-sm:px-4 line-y">
          <Image src="/profile.webp" alt="Priyanshu Chaudhary" width={72} height={72} className="rounded-2xl" />
        </div>
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <h1 className="text-gray-950 font-medium text-base">Priyanshu Chaudhary</h1>
          <p className="text-gray-600 text-base">WordPress Developer</p>
        </div>
        <div className="mt-6 px-2 max-sm:px-4 sm:mt-10 line-y">
          <p className="text-gray-600 text-base">Hey, I'm Priyanshu, a WordPress developer based in <span className="inline-flex items-center gap-1.5">Lucknow, India <Image src="/india.svg" alt="India Flag" width={24} height={20} className="inline-block shrink-0 rounded object-cover h-4.5" /></span> . I specialize in creating custom themes and plugins.</p>
          <p className="mt-2 text-gray-600 text-base">I love creating websites that are perfect blend of functionality and aesthetics.</p>
        </div>
      </div>
      <div className="">
        <div className="px-2 max-sm:px-4 line-y">
          <h2 className="text-accent font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">Work</h2>
        </div>
        <div className="mt-4 px-2 max-sm:px-4 line-y">
          <p className="text-gray-600 text-base">A small selection of my work</p>
        </div>
        <PortfolioGrid className="mt-6 sm:mt-10" />
      </div>
      <div>
        <div className="px-2 max-sm:px-4 line-y">
          <h2 className="text-accent font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">Side project</h2>
        </div>
        <ProjectList className="mt-6 sm:mt-10" />
      </div>
    </div>
  );
}
