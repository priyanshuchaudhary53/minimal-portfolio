/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio/:slug",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
