/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "images.unsplash.com",
                protocol: "https",
            },
            {
                hostname: "m.media-amazon.com",
                protocol: "https",
            },
        ]
    }
};

module.exports = nextConfig
