import TagRenderer from "../TagRenderer";

export default function PortfolioContent({ title, content, className }) {
  return (
    <section className={className}>
      <div className="px-2 max-sm:px-4 line-y">
        <h2 className="text-gray-950 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {content && (
        <>
          {content.map((item, index) => {
            if (item.type === "block") {
              return (
                <div key={index} className="px-2 max-sm:px-4 mt-4 line-y prose">
                  {item.items?.map((elem, i) => (
                    <TagRenderer
                      key={i}
                      tag={elem.tag}
                      content={elem.content}
                      highlights={elem.highlights}
                      links={elem.links}
                      codes={elem.codes}
                    />
                  ))}
                </div>
              );
            }

            return null;
          })}
        </>
      )}
    </section>
  );
}
