/**
 * Static export: `npm run build` writes plain HTML to `out/`, ready to upload
 * to Hostinger (Apache) or any static host. Redirects and HTTPS live in
 * public/.htaccess because static exports cannot run server redirects.
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};
export default nextConfig;
