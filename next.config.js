/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['lucide-react'],
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.adhoc-cultura.cat',
            },
            {
                protocol: 'https',
                hostname: 'adhocc-data.vercel.app',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/blog-index',
                destination: '/actualitat',
                permanent: true,
            },
            {
                source: '/missio',
                destination: '/adhoc',
                permanent: true,
            },
            {
                source: '/adhoc-cultura',
                destination: '/adhoc',
                permanent: true,
            },
            {
                source: '/els-nostres-espais',
                destination: '/qui-som',
                permanent: true,
            }
        ];
    },
};

module.exports = nextConfig
