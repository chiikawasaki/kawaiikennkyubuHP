/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 静的エクスポート（SSG）
  images: {
    unoptimized: true, // 静的エクスポート時は画像最適化を無効化
  },
};

module.exports = nextConfig;
