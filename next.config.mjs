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
            key: 'X-Canonical-URL',
            value: 'https://www.overstaycheck.com/:path*',
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: '/:path*',
        destination: 'https://www.overstaycheck.com/:path*',
        basePath: false,
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'overstaycheck.com',
          },
        ],
      },
    ];
  },
}

export default nextConfig
