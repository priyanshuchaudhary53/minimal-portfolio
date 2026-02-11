import Image from "next/image";

export default function PortfolioGrid({className}) {
  return (
    <div className={`relative isolate ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-md:gap-5">
        <div className="sm:border-r sm:border-gray-950/5"></div>
        <div className="sm:border-l sm:border-gray-950/5"></div>
      </div>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-10">
        <li className="group">
            <div className="p-2 bg-gray-950/5 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <a className="block group relative opacity-75 transition-opacity rounded-lg overflow-hidden hover:opacity-100" href="https://zdalnapraca.com/" target="_blank" rel="noopener noreferrer">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        zdalnapraca.com <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <Image src="/portfolio/zp-home.webp" alt="ZdalnaPraca" width={600} height={400} className="object-cover object-top w-full aspect-video" />
                </a>
            </div>
            <div className="px-4 py-2 sm:px-2 max-sm:line-b sm:group-nth-[2n+1]:line-b">
                <h3 className="text-gray-950 font-medium text-sm">ZdalnaPraca</h3>
                <p className="text-gray-600 text-sm mt-1">Job board for remote work in Poland</p>
            </div>
        </li>
        <li className="group">
            <div className="p-2 bg-gray-950/5 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <a className="block group relative opacity-75 transition-opacity rounded-lg overflow-hidden hover:opacity-100" href="https://nawypoczynek.pl/" target="_blank" rel="noopener noreferrer">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        nawypoczynek.pl <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <Image src="/portfolio/nw-home.webp" alt="NaWypoczynek" width={600} height={400} className="object-cover object-top w-full aspect-video" />
                </a>
            </div>
            <div className="px-4 py-2 sm:px-2 max-sm:line-b sm:group-nth-[2n+1]:line-b">
                <h3 className="text-gray-950 font-medium text-sm">NaWypoczynek</h3>
                <p className="text-gray-600 text-sm mt-1">Advertisement platform for rentals in Poland</p>
            </div>
        </li>
        <li className="group">
            <div className="p-2 bg-gray-950/5 max-sm:line-y sm:group-nth-[2n+1]:line-y">
                <a className="block group relative opacity-75 transition-opacity rounded-lg overflow-hidden hover:opacity-100" href="https://eternitech.com/" target="_blank" rel="noopener noreferrer">
                    <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 transform flex-row items-center gap-1 rounded-full border border-gray-950 bg-gray-950/90 py-0.5 pr-2 pb-1 pl-3 text-center font-mono text-xs/5 font-medium text-white opacity-0 inset-ring inset-ring-white/10 transition-opacity group-hover:flex group-hover:opacity-100">
                        eternitech.com <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5"><path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd"></path></svg>
                    </div>
                    <Image src="/portfolio/eternitech-home.webp" alt="Eternitech" width={600} height={400} className="object-cover object-top w-full aspect-video" />
                </a>
            </div>
            <div className="px-4 py-2 sm:px-2 max-sm:line-b sm:group-nth-[2n+1]:line-b">
                <h3 className="text-gray-950 font-medium text-sm">Eternitech</h3>
                <p className="text-gray-600 text-sm mt-1">Marketing site for IT company</p>
            </div>
        </li>
      </ul>
    </div>
  );
}
