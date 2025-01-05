
/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {

  async redirects() {
    return [
      {
        source: '/',
        destination: '/portfolio/home',
        permanent: false,
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
