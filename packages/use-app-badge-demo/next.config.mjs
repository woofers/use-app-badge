import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    basePath: '/use-app-badge',
    assetPrefix: '/use-app-badge/',
    experimental: {
      reactCompiler: true
    }
}

export default withContentlayer(nextConfig)
