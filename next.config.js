/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tokens.buildspace.so",
      "firebasestorage.googleapis.com",
      "app.glowlabs.xyz",
    ],
  },
};

module.exports = nextConfig;
