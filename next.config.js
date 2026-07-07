/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      "i.imgur.com",
      "camo.githubusercontent.com",
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
}

module.exports = nextConfig
