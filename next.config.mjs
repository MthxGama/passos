/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        urlImports: ['https://*.pagar.me/*', 'https://payments.pagar.me/*', 'https://www.google-analytics.com/*', 'http://localhost*']
    },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'api.pagar.me',
              port: '',
              pathname: '**',
            },
            {
              protocol: 'https',
              hostname: 'via.placeholder.com',
              port: '',
              pathname: '**',
            }
          ],
    }
};

export default nextConfig;
