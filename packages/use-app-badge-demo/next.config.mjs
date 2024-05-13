import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    basePath: '/use-app-badge',
    assetPrefix: '/use-app-badge/'
}

export default withContentlayer(nextConfig)
