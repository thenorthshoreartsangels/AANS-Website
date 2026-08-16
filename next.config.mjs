/** @type {import('next').NextStep} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML/CSS/JS files
  images: {
    unoptimized: true, // Required for static exports
  },
};

module.exports = nextConfig;
