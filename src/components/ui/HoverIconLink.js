import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function HoverIconLink({
  children,
  href,
  hoverText,
  isExternal = false,
}) {
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <HoverCard openDelay={10} closeDelay={10}>
      <HoverCardTrigger
        className="group inline-flex rounded-md bg-gray-100 h-7 w-7 items-center justify-center"
        asChild
      >
        <Link href={href} {...externalProps}>
          {children}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent
        side="top"
        sideOffset={8}
        className="p-0 border-0 text-white ring-1 ring-inset ring-white/10 bg-black shadow-none w-auto text-sm px-2 py-1"
      >
        {hoverText}
      </HoverCardContent>
    </HoverCard>
  );
}
