/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['asaxiy.uz'], // Tashqi manbani shu yerda aniqlang
  },
  
};
module.exports = {
  experimental: {
    appDir: true, // Yangi App Router'ni yoqish
    turbo: true, // Turbopack funksiyasini faollashtirish
  },
};


module.exports = nextConfig;
