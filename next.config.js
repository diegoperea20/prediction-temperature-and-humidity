/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configura Next.js para usar Server Components por defecto
    // lo que puede ayudar con problemas de importación en API routes
    reactStrictMode: true,
    
    // Agrega la configuración experimental para API routes
    experimental: {
      serverComponentsExternalPackages: ['@libsql/client', '@prisma/adapter-libsql'],
    },
    
    webpack: (config, { isServer }) => {
      if (isServer) {
        // Ignorar todos los archivos de licencia y documentación en dependencias
        config.externals = [...config.externals, 
          '@libsql/client/README.md', 
          '@libsql/hrana-client/LICENSE'
        ];
      }
      
      // Configuración para manejar mejor los archivos no-JavaScript
      config.module.rules.push({
        test: /\.(md|LICENSE|txt)$/i,
        // Use raw-loader para archivos que webpack esté intentando procesar
        use: 'null-loader',
      });
      
      return config;
    },
  };
  
  module.exports = nextConfig;