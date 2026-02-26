/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio/:slug",
        destination: "/work",
        permanent: true,
        missing: [
          {
            type: "header",
            key: "x-nextjs-data",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
