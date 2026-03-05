export function injectHtml(
  text,
  highlights = [],
  links = [],
  codes = []
) {
  if (!text) return text;

  const escapeRegex = (str) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // 1️⃣ Build unified token list with priority
  const tokens = [
    ...links.map((l) => ({
      type: "link",
      value: l.label,
      meta: l,
    })),
    ...codes.map((c) => ({
      type: "code",
      value: c,
    })),
    ...highlights.map((h) => ({
      type: "highlight",
      value: h,
    })),
  ];

  if (!tokens.length) return text;

  // 2️⃣ Sort by length (longest first) to prevent partial matching
  tokens.sort((a, b) => b.value.length - a.value.length);

  // 3️⃣ Build regex pattern
  const pattern = new RegExp(
    `(${tokens.map((t) => escapeRegex(t.value)).join("|")})`,
    "g"
  );

  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const token = tokens.find((t) => t.value === part);

    if (!token) return part;

    switch (token.type) {
      case "link":
        return (
          <a
            key={index}
            href={token.meta.url}
            target={token.meta.isExternalLink ? "_blank" : "_self"}
            rel={token.meta.isExternalLink ? "noopener noreferrer" : undefined}
            className="font-semibold text-gray-950 underline decoration-cyan-400 underline-offset-4 hover:text-cyan-500"
          >
            {token.value}
          </a>
        );

      case "code":
        return (
          <code
            key={index}
            className="px-1.5 py-0.5 rounded bg-gray-100 text-sm font-mono text-gray-950 not-prose"
          >
            {token.value}
          </code>
        );

      case "highlight":
        return (
          <strong
            key={index}
            className="font-semibold text-gray-950"
          >
            {token.value}
          </strong>
        );

      default:
        return part;
    }
  });
}