import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import clientData from "@/data/clientData";

export default function ClientList({ className }) {
  return (
    <div className={`${className} px-2 max-sm:px-4 line-y`}>
      <ul className="flex items-center gap-4">
        {clientData.map((client) => (
          <li key={client.id} className="flex">
            <HoverCard openDelay={10} closeDelay={10}>
              <HoverCardTrigger
                href={client.url}
                className="group inline-flex h-10 w-10 items-center justify-center border-x border-gray-950/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{client.name}</span>
                <Image
                  src={client.logoUrl}
                  alt={`${client.name} Logo`}
                  width={24}
                  height={24}
                  className="inline-block shrink-0 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </HoverCardTrigger>
              <HoverCardContent
                side="bottom"
                sideOffset={12}
                className="p-0 border-0 text-gray-950 ring-1 ring-gray-950/5 bg-white shadow-none w-auto text-sm px-2 py-1"
              >
                {client.name}
              </HoverCardContent>
            </HoverCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
