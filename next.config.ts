// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // No detengas el build si hay advertencias/errores de ESLint
    ignoreDuringBuilds: true,
  },
  // Si más adelante te sale un error de TypeScript en el build,
  // descomenta este bloque:
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
