/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      // Remove www and force to non-www
      {
        source: '/:path*',
        destination: 'https://overstaycheck.com/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.overstaycheck.com',
          },
        ],
      },
      // Force HTTPS
      {
        source: '/:path*',
        destination: 'https://overstaycheck.com/:path*',
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http'
          },
        ],
      },
    ];
  },
}

export default nextConfig
