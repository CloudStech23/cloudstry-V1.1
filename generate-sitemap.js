const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

const links = [
  {
    url: "/WhatweDo/Product-Platform/Digital-Certificate",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    url: "/WhatweDo/Product-Platform/Pet-Aadhar",
    changefreq: "weekly",
    priority: 0.8,
  },
  {
    url: "/WhatweDo/IT-Solutions/Software-Services",
    changefreq: "weekly",
    priority: 0.8,
  },
  { url: "/WhatweDo/Staffing-Solution", changefreq: "weekly", priority: 0.8 },
  { url: "/Team-Cloudstry", changefreq: "weekly", priority: 0.8 },
  { url: "/Support", changefreq: "weekly", priority: 0.8 },
];

async function generateSitemap() {
  try {
    const stream = new SitemapStream({ hostname: "https://cloudstrytech.com" });

    links.forEach((link) => stream.write(link));

    // ✅ Properly end the stream before using streamToPromise
    stream.end();

    const data = await streamToPromise(stream);

    // ✅ Ensure "public" folder exists
    const publicDir = path.join(__dirname, "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // ✅ Write sitemap.xml file
    fs.writeFileSync(path.join(publicDir, "sitemap.xml"), data.toString());

    console.log("✅ Sitemap successfully generated at /public/sitemap.xml");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
}

generateSitemap();
