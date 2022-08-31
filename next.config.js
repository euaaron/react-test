/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
})

const nextConfig = { reactStrictMode: true, swcMinify: true }

if (process.env.NODE_ENV === 'production') {
  module.exports = withPWA(nextConfig)
} else {
  module.exports = nextConfig
}
