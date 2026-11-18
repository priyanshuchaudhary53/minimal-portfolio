import portfolioData from "@/data/portfolioData";
import { SITE_URL } from "@/lib/site";

// Static routes. Add new top-level pages here.
const staticRoutes = ["/", "/work"];

export default function sitemap() {
  // Only public portfolio items render in production (others 404).
  const workRoutes = portfolioData
    .filter((item) => item.public)
    .map((item) => `/work/${item.slug}`);

  return [...staticRoutes, ...workRoutes].map((path) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
  }));
}
