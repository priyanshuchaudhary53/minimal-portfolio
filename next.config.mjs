/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio/:slug((?!.*\\.[a-zA-Z]+$).*)",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
