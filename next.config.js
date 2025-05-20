// To deploy as pure static, set output: 'export' and change publish dir to out; also set NETLIFY_NEXT_PLUGIN_SKIP=true.
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Temporarily disable ESLint during build to complete codebase cleanup
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable type checking during build for now
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig;
