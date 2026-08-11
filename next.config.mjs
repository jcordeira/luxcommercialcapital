/** @type {import('next').NextConfig} */
const nextConfig = {
  // Every page is static. Exporting plain HTML lets Netlify's build-time form
  // parser find the two forms in the markup, and keeps hosting free of a runtime.
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
