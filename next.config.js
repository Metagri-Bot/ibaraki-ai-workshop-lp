/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'metagri-labo.com',
      },
      {
        protocol: 'https',
        hostname: 'gen-eki.co.jp',
      },
      {
        protocol: 'https',
        hostname: 'image.shingakunet.com',
      },
      {
        protocol: 'http',
        hostname: 'metagri-labo.com',
      },
    ],
  },
};

module.exports = nextConfig;
