/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Ensure the main field is placed last
        config.resolve = {
          ...config.resolve,
          mainFields: ['browser', 'module', 'main'], // 'main' should be the last
        };
        return config;
      },
};

// export default nextConfig;
export default nextConfig