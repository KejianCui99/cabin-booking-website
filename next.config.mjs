/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iifxplhnggnntzptykaj.supabase.co",
        port: "5432",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  //output: "export",
};

export default nextConfig;
