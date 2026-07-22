const fs = require('fs');

let siteTs = fs.readFileSync('./src/lib/site.ts', 'utf8');

// Use a regex to find all objects in the products array and replace their image property with their slug
siteTs = siteTs.replace(/slug:\s*"([^"]+)",[\s\S]*?image:\s*"\/[^"]+",/g, (match, slug) => {
  return match.replace(/image:\s*"\/[^"]+"/, `image: "/img/${slug}.png"`);
});

fs.writeFileSync('./src/lib/site.ts', siteTs);
console.log('Updated site.ts images to use slugs');
