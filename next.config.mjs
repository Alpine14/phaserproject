/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

export default nextConfig;
