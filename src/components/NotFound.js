import Link from "next/link";
import ArrowRightIcon from "./icon/ArrowRightIcon";
import FaceFrownIcon from "./icon/FaceFrownIcon";

export function NotFound({ className }) {
  return (
    <div className={`${className}`}>
      <div className="px-2 max-sm:px-4 flex justify-center text-gray-950/10">
        <FaceFrownIcon className="size-30" stroke="0.4" aria-hidden="true" />
      </div>
      <div className="mt-2 px-2 max-sm:px-4">
        <h1 className="text-gray-950 text-8xl font-semibold tracking-tighter text-center">
          404
        </h1>
      </div>
      <div className="mt-4 px-2 flex justify-center max-sm:px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 cursor-pointer rounded-lg bg-black pl-4 pr-3 py-2 text-sm/6 font-medium text-white hover:bg-gray-800 outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          Go to Home
          <ArrowRightIcon className="size-4" stroke="2" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
