import { injectHtml } from "@/helpers/injectHtml";

export default function PortfolioSeeding({ title, items, className }) {
  return (
    <section className={className}>
      <div className="px-2 max-sm:px-4 line-y">
        <h2 className="text-gray-950 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {items && (
        <div className="mt-6 grid grid-col-1 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 px-2 max-sm:px-4 py-4 prose line-y"
            >
              <h3 className="text-gray-950 text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <div className="text-gray-600 prose">
                {item.content.map((para, index) => (
                  <p key={index}>{injectHtml(para, item.highlights, item.links)}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
