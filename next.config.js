/** @type {import('next').NextConfig} */
module.exports = {
    types: ["jest"],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'rickandmortyapi.com',
        },
      ],
    },
  };
  