import Image from "next/image";

export default function PortfolioGrid({className}) {
  return (
    <div className={`relative isolate ${className}`}>
      {/* <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-md:gap-5">
        <div className="sm:border-r sm:border-gray-950/5"></div>
        <div className="sm:border-l sm:border-gray-950/5"></div>
      </div> */}
      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        <li className="relative group transition-colors sm:even:line-l sm:odd:line-r hover:bg-gray-950/5">
            <a href="https://zdalnapraca.com/" className="absolute inset-0 z-20" target="_blank" rel="noopener noreferrer"></a>
            <div className="p-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <div className="block relative opacity-75 transition-opacity group-hover:opacity-100">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        zdalnapraca.com <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="relative aspect-672/494 overflow-hidden rounded-xl outline outline-gray-950/5">
                        <Image src="/portfolio/zp-home.webp" alt="ZdalnaPraca" width={600} height={400} className="absolute object-cover object-top inset-0 h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="mt-2 px-4 py-2 sm:px-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <h3 className="text-gray-950 text-sm/6 font-medium">ZdalnaPraca</h3>
                <p className="line-clamp-1 text-sm/6 text-neutral-600">Job board for remote work</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">WP Job Manager</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">Jobhunt theme</span>
                </div>
            </div>
        </li>
        <li className="relative group transition-colors sm:even:line-l sm:odd:line-r hover:bg-gray-950/5">
            <a href="https://nawypoczynek.pl/" className="absolute inset-0 z-20" target="_blank" rel="noopener noreferrer"></a>
            <div className="p-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <div className="block relative opacity-75 transition-opacity group-hover:opacity-100">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        nawypoczynek.pl <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="relative aspect-672/494 overflow-hidden rounded-xl outline outline-gray-950/5">
                        <Image src="/portfolio/nw-home.webp" alt="Nawypoczynek" width={600} height={400} className="absolute object-cover object-top inset-0 h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="mt-2 px-4 py-2 sm:px-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <h3 className="text-gray-950 text-sm/6 font-medium">Nawypoczynek</h3>
                <p className="line-clamp-1 text-sm/6 text-neutral-600">Advertisement platform for rentals</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">HivePress</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">LisitingHive theme</span>
                </div>
            </div>
        </li>
        <li className="relative group transition-colors sm:even:line-l sm:odd:line-r hover:bg-gray-950/5">
            <a href="https://eternitech.com/" className="absolute inset-0 z-20" target="_blank" rel="noopener noreferrer"></a>
            <div className="p-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <div className="block relative opacity-75 transition-opacity group-hover:opacity-100">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        eternitech.com <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="relative aspect-672/494 overflow-hidden rounded-xl outline outline-gray-950/5">
                        <Image src="/portfolio/et-home.webp" alt="Eternitech" width={600} height={400} className="absolute object-cover object-top inset-0 h-full w-full" />
                    </div>
                </div>
            </div>
            <div className="mt-2 px-4 py-2 sm:px-2 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <h3 className="text-gray-950 text-sm/6 font-medium">Eternitech</h3>
                <p className="line-clamp-1 text-sm/6 text-neutral-600">Marketing site for IT company</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">Elementor</span>
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">Hello Elementor theme</span>
                </div>
            </div>
        </li>
      </ul>
    </div>
  );
}
