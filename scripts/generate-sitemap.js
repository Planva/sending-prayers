import fs from 'fs';
import path from 'path';

const baseUrl = 'https://sending-prayers.com';

const routes = [
  {
    path: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    path: '/create-prayer-messages',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    path: '/sending-prayers-images',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    path: '/inspirational-prayer-quotes',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    path: '/alternative-prayer-messages',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.7'
  }
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route.path}</loc>
      <lastmod>${route.lastmod}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');