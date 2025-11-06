/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    webpack: (config) => {
        // Ensure the main field is placed last
        config.resolve = {
          ...config.resolve,
          mainFields: ['browser', 'module', 'main'], // 'main' should be the last
        };
        return config;
      },
=======

>>>>>>> 290414e2d0b00decc234c5b552f3bca9db0e7ead
};

// export default nextConfig;
export default nextConfig