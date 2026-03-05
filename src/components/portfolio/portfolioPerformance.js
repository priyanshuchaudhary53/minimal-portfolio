import Image from "next/image";

export default function PortfolioPerformance({
  title,
  image,
  url,
  hideTitle = false,
  className,
}) {
  return (
    <section className={className}>
      {hideTitle ? (
        <h2 className="sr-only">Performace report</h2>
      ) : (
        <div className="px-2 max-sm:px-4 line-y">
          <h2 className="text-gray-950 text-2xl font-semibold tracking-tight">
            {title}
          </h2>
        </div>
      )}
      
      <div className={`line-y ${hideTitle ? '' : 'mt-6 2xl:mt-10'}`}>
        <a
          className="block"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={image.path} width={1100} height={220} alt={image.alt} />
        </a>
      </div>
    </section>
  );
}
