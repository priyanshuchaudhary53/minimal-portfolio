/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio/anyonlinetool",
        destination: "/work/anyonlinetool",
        permanent: true,
      },
      {
        source: "/portfolio/:slug((?!.*\\.[a-zA-Z]+$).*)",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
