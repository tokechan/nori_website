/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',  // この画像ドメインからの読み込みを許可
        pathname: '/vi/**',
      },
    ],
  },
}

module.exports = nextConfig






