import fs from 'node:fs';
const files = ['src/data/media.ts','src/data/sources.ts','src/data/visualActivities.ts'];
const urls = new Set();
for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  for (const m of txt.matchAll(/https:\/\/commons\.wikimedia\.org\/wiki\/Special:Redirect\/file\/[^'"\s)]+/g)) urls.add(m[0]);
}
let bad=0;
for (const url of urls) {
  const r = await fetch(url, { method:'HEAD', redirect:'follow' });
  const ct = r.headers.get('content-type') || '';
  const ok = r.ok && ct.startsWith('image/') && r.status!==404 && !ct.includes('text/html');
  console.log(`${ok?'OK':'FAIL'} ${r.status} ${ct} ${url}`);
  if(!ok) bad++;
}
if(bad){console.error(`\n${bad} imatges incorrectes`);process.exit(1);} else console.log(`\nTotes bé: ${urls.size}`);
