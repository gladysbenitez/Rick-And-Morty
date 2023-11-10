/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'rickandmortyapi.com',
          // Optionally, you can also specify a port and pathname here
        },
      ],
    },
  };