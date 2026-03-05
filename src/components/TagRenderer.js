import { injectHtml } from "@/helpers/injectHtml";
import HighlightCode from "./HighlightCode";
import Image from "next/image";

export default function TagRenderer({
  tag,
  content,
  highlights,
  links,
  codes,
}) {
  if (!tag) return null;

  switch (tag) {
    case "p":
      return <p>{injectHtml(content, highlights, links, codes)}</p>;
    case "ul":
      return (
        <div className="prose">
          <ul>
            {content?.map((item, index) => (
              <TagRenderer
                key={index}
                tag={item.tag}
                content={item.content}
                highlights={item.highlights}
                links={item.links}
                codes={item.codes}
              />
            ))}
          </ul>
        </div>
      );

    case "li":
      return (
        <li>
          {Array.isArray(content)
            ? content.map((item, index) => (
                <TagRenderer
                  key={index}
                  tag={item.tag}
                  content={item.content}
                  highlights={item.highlights}
                  links={item.links}
                  codes={item.codes}
                />
              ))
            : injectHtml(content, highlights, links, codes)}
        </li>
      );

    case "pre":
      return <HighlightCode code={content} language="php" />;

    case "img":
      const image = (
        <Image src={content.path} className="not-prose mt-6 2xl:mt-10" width={content.width} height={content.height} alt={content.alt} />
      );

      return content.url ? (
        <a
          className="block"
          href={content.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {image}
        </a>
      ) : (
        image
      );

    default:
      return null;
  }
}
