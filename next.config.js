/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "fakestoreapi.com",
      "api.lorem.space",
      "placeimg.com",
      "d1zktoovjdma6n.cloudfront.net",
    ],
  },
};

module.exports = nextConfig
