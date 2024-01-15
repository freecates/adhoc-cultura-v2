/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.adhoc-cultura.com',
        },
        {
          protocol: 'https',
          hostname: 'adhocc-data.vercel.app',
        },
      ],
    },
}

module.exports = nextConfig
