/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.preferRelative = true;
        return config;
      },
}

module.exports = nextConfig
