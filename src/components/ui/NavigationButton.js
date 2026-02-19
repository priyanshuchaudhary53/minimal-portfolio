import Link from "next/link";

export default function NavigationButton({ children, href, withIcon = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 cursor-pointer rounded-lg bg-black px-4 ${withIcon ? "pr-3" : ""} py-2 text-sm/6 font-medium text-white hover:bg-gray-800 outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50`}
    >
      {children}
    </Link>
  );
}
