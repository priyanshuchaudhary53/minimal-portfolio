import { injectHtml } from "@/helpers/injectHtml";
import TagRenderer from "../TagRenderer";

export default function PortfolioDevelopment({
  title,
  description,
  subSections,
  className,
}) {
  return (
    <section className={className}>
      <div className="px-2 max-sm:px-4 line-y">
        <h2 className="text-gray-950 text-2xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {description && (
        <div className="mt-6 px-2 max-sm:px-4 prose text-gray-600 line-y">
          {description.content?.map((para, index) => (
            <p key={index}>
              {injectHtml(para, description.highlights, description.links)}
            </p>
          ))}
        </div>
      )}

      {subSections && (
        <div className="mt-6 grid grid-cols-1 gap-6 2xl:gap-10 2xl:mt-10">
          {subSections.map((section, index) => (
            <div key={index}>
              <h3 className="px-2 max-sm:px-4 text-gray-950 text-xl font-semibold tracking-tight line-y">{section.title}</h3>
              {section.content && (
                <>
                  {section.content.map((item, index) => {
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
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
