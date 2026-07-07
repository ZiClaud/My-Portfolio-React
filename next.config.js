/** @type {import("next").NextConfig} */
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  output: 'export',
  basePath: isGhPages ? '/My-Portfolio-React' : '',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.imgur.com' },
      { protocol: 'https', hostname: 'camo.githubusercontent.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
}
module.exports = nextConfig