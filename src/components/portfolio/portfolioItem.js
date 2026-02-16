import Image from "next/image";

export default function PortfolioItem({ portfolio }) {
    return (
        <li className="relative group transition-colors sm:even:line-l sm:odd:line-r hover:bg-gray-950/5">
            <a href={portfolio.url} aria-label={`Visit ${portfolio.title}`} className="absolute inset-0 z-20" target="_blank" rel="noopener noreferrer"></a>
            <div className="p-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <div className="block relative">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        {portfolio.url.replace(/^https?:\/\/([^\/]+).*$/, '$1')} <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="relative aspect-672/494 overflow-hidden rounded-xl outline outline-gray-950/5">
                        <Image src={portfolio.image} alt={portfolio.title} width={600} height={400} className="absolute object-cover transition-all ease-in-out duration-400 group-hover:object-bottom object-top inset-0 h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="mt-2 px-4 py-2 sm:px-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <h3 className="text-gray-950 text-sm/6 font-medium">{portfolio.title}</h3>
                <p className="line-clamp-1 text-sm/6 text-neutral-600">{portfolio.description}</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-xs">
                    {portfolio.tags.map((tag, index) => (
                        <span key={index} className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">{tag}</span>
                    ))}
                </div>
            </div>
        </li>
    );
}