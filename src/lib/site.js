export const SITE_URL = "https://www.priyanshuc.dev";
export const SITE_NAME = "Priyanshu Chaudhary";
export const SITE_TITLE =
  "Priyanshu Chaudhary – GeneratePress & WordPress Developer";
export const SITE_DESCRIPTION =
  "Fast, lightweight WordPress sites built with GeneratePress and GenerateBlocks. I rebuild slow page-builder sites and build white-label for agencies. Book a call.";

// Shared Open Graph fields. Pages that set their own openGraph should spread
// this so they keep type and siteName (Next replaces openGraph, not merges).
const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: SITE_TITLE,
};

export const baseOpenGraph = {
  images: [ogImage],
  type: "profile",
  siteName: SITE_NAME,
};

export const profileLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/priyanshuchaudhary53/" },
  { name: "GitHub", url: "https://github.com/priyanshuchaudhary53" },
  { name: "X", url: "https://x.com/priyanshuch53" },
  { name: "WordPress.org", url: "https://profiles.wordpress.org/priyanshuchaudhary/" },
];

export const baseTwitter = {
  images: [ogImage],
  card: "summary_large_image",
  creator: "@priyanshuch53",
};
