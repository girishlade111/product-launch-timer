/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/product-launch-timer",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig