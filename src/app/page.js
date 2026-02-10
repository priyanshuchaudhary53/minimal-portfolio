import Image from "next/image";
import IndiaTime from "./components/IndiaTime";
import CurrentTemperature from "./components/CurrentTemperature";
import DayNight from "./components/DayNight";

export default function Home() {
  return (
    // <div className="isolate">
    <div className="max-w-screen overflow-x-hidden">
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:2.5rem] md:-mx-4 md:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-md))_var(--gutter-width)] lg:mx-0">
        <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:block "></div>
        <div className="">
          <div className="border-b border-black/5">
            <div className="h-14 flex items-center justify-between gap-8 px-2 text-gray-600 font-(family-name:--font-geist-mono) max-sm:px-4">
              <div className="flex items-center gap-2 text-xs leading-4">
                <DayNight className="size-4" />
                <span>
                  <CurrentTemperature />
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs leading-4 uppercase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>
                  <IndiaTime /> GMT+5:30
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-18 //pb-24 sm:gap-30 //md:pb-40">
            <div>
              <div className="h-12 sm:h-20"></div>
              <div className="px-2 max-sm:px-4">
                <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 after:-left-[100vw]">
                  <Image
                    src="/profile.webp"
                    alt="Priyanshu Chaudhary"
                    width={72}
                    height={72}
                    className="rounded-2xl"
                  />
                </div>
                <div className="mt-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 after:-left-[100vw]">
                  <p className="text-gray-950 font-medium text-base">Priyanshu Chaudhary</p>
                  <p className="text-gray-600 text-base">WordPress Developer</p>
                </div>
                <div className="mt-6 sm:mt-10 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 after:-left-[100vw]">
                  <p className="text-gray-600 text-base">Hey, I'm Priyanshu, a WordPress developer based in <span className="inline-flex items-center gap-1.5">Lucknow, India <Image src="/india.svg" alt="India Flag" width={24} height={20} className="inline-block shrink-0 rounded object-cover h-4.5" /></span> . I specialize in creating custom themes and plugins.</p>
                  <p className="mt-2 text-gray-600 text-base">I love creating websites that are perfect blend of functionality and aesthetics.</p>
                </div>
              </div>
            </div>
            <div>
              <div className="px-2 max-sm:px-4">
                <div className="relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 after:-left-[100vw]">
                  <p className="text-gray-950 font-mono text-sm font-semibold tracking-widest uppercase sm:text-xs">Work</p>
                </div>
                <div className="mt-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 after:-left-[100vw]">
                  <p className="text-gray-600 text-base">A small selection of my work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block"></div>
      </div>
    </div>
    // </div>
  );
}
