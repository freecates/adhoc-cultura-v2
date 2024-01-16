/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
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
