/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "sarsglobal.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/hire-developers/:path*",
        destination: "/hire-talent/",
        permanent: true
      },
      {
        source: "/about-us/:path*",
        destination: "/about/",
        permanent: true
      },
      {
        source: "/service/:path*",
        destination: "/services/",
        permanent: true
      },
      {
        source: "/hire-talent/Oldindex.html",
        destination: "/hire-talent/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
