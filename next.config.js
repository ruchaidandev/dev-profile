const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '', 
    disableStaticImages: true,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["raidan.com.au"],
  },
};
