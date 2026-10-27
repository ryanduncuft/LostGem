"use strict";

exports.handler = async function (event, context) {
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            body: "Method not allowed"
        };
    }

    try {
        // Build the dynamic sitemap XML using her canonical Netlify domain
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lostgem.netlify.app/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lostgem.netlify.app/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lostgem.netlify.app/discography</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://lostgem.netlify.app/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
                "Cache-Control": "public, max-age=3600"
            },
            body: xml,
        };
    } catch (error) {
        console.error("Sitemap generation failed:", error);
        return {
            statusCode: 500,
            body: "Error generating sitemap",
        };
    }
};