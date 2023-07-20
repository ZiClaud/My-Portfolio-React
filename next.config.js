/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'assets.telegraphindia.com',
            'media.cnn.com',
            'cdn.fuelrocks.com',
            // Add more hostnames if you have additional image URLs
        ],
    },
}

module.exports = nextConfig
