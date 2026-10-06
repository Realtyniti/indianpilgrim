/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/chardham-yatra/", destination: "/char-dham-yatra/", permanent: true },
      { source: "/char-dham/", destination: "/char-dham-yatra/", permanent: true },
      { source: "/do-dham/", destination: "/do-dham-yatra/", permanent: true },
      { source: "/vaishno-devi/", destination: "/vaishno-devi-yatra/", permanent: true },
      { source: "/kedarnath/", destination: "/kedarnath-yatra/", permanent: true },
      { source: "/badrinath/", destination: "/badrinath-yatra/", permanent: true },
    ];
  },
};
export default nextConfig;
