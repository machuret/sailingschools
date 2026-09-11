/**
 * Renders the social card once, from the same chart language the site uses, and writes it
 * to public/og.png. Run by hand when the card design changes; the output is committed so
 * the build has no image-generation step.
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const logo = readFileSync('public/assets/logo-white.png').toString('base64');

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<style>
  @font-face { font-family: PJS; src: local('Plus Jakarta Sans'); }
  * { margin:0; box-sizing:border-box; }
  body { width:1200px; height:630px; overflow:hidden; position:relative;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(115deg,#0b2340 0%,#143d72 38%,#1a7fc2 74%,#26b3c9 100%); }
  svg.bg { position:absolute; inset:0; width:1200px; height:630px; opacity:.62; }
  .scrim { position:absolute; inset:0;
    background: linear-gradient(90deg, rgba(11,35,64,.88) 0%, rgba(11,35,64,.58) 46%, rgba(11,35,64,.06) 100%); }
  .in { position:absolute; inset:0; padding:64px 70px; display:flex; flex-direction:column; justify-content:space-between; }
  img.logo { height:46px; width:auto; align-self:flex-start; }
  h1 { color:#fff; font-size:70px; line-height:1.04; letter-spacing:-.032em; font-weight:700; max-width:20ch; }
  h1 em { font-family: Georgia, 'Times New Roman', serif; font-style:italic; font-weight:400; }
  p { color:rgba(255,255,255,.9); font-size:25px; line-height:1.4; margin-top:22px; max-width:34ch; }
  .rule { display:flex; align-items:center; gap:16px; }
  .dot { width:12px; height:12px; border-radius:50%; background:#ff5a1f; }
  .dom { color:#bfe6f5; font-size:20px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; }
</style></head><body>
<svg class="bg" viewBox="0 0 1200 630" preserveAspectRatio="xMidYMid slice">
  <g fill="none" stroke="#bfe6f5" stroke-width="1.1" opacity=".3">
    ${[0,1,2,3,4,5].map((r)=>{
      const pts = Array.from({length:9},(_,i)=>{
        const a=(i/9)*Math.PI*2+r*0.09;
        const rad=(120+r*86)*(0.86+((i*37)%11)/22);
        return [900+Math.cos(a)*rad*1.2, 300+Math.sin(a)*rad*0.8];
      });
      const d = pts.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join('')+'Z';
      return `<path d="${d}" opacity="${(0.34-r*0.04).toFixed(2)}"/>`;
    }).join('')}
  </g>
  <g stroke="#bfe6f5" stroke-width=".7" opacity=".18" fill="none">
    ${Array.from({length:16},(_,i)=>{const a=(i/16)*Math.PI*2;
      return `<path d="M900 420 L${(900+Math.cos(a)*1600).toFixed(0)} ${(420+Math.sin(a)*1600).toFixed(0)}"/>`;}).join('')}
  </g>
  <g opacity=".62">
    <circle cx="900" cy="420" r="92" fill="none" stroke="#bfe6f5" stroke-width="1"/>
    <circle cx="900" cy="420" r="84" fill="none" stroke="#bfe6f5" stroke-width=".7"/>
    ${Array.from({length:8},(_,i)=>{const a=(i/8)*Math.PI*2-Math.PI/2;const b=a+Math.PI/8;
      const long=i%2===0?78:48;
      return `<path d="M900 420 L${(900+Math.cos(b)*18).toFixed(1)} ${(420+Math.sin(b)*18).toFixed(1)} L${(900+Math.cos(a)*long).toFixed(1)} ${(420+Math.sin(a)*long).toFixed(1)} Z" fill="#bfe6f5" opacity=".4" stroke="#bfe6f5" stroke-width=".8"/>`;}).join('')}
    <circle cx="900" cy="420" r="4" fill="#ff5a1f"/>
  </g>
  <path d="M120 180 C340 120, 480 300, 700 240 C880 190, 1000 300, 1160 250"
    fill="none" stroke="#ff5a1f" stroke-width="3" stroke-dasharray="15 12" stroke-linecap="round" opacity=".9"/>
  <circle cx="120" cy="180" r="5" fill="none" stroke="#ff5a1f" stroke-width="2.5"/>
  <circle cx="700" cy="240" r="5" fill="none" stroke="#ff5a1f" stroke-width="2.5"/>
  <circle cx="1160" cy="250" r="8" fill="#ff5a1f"/>
</svg>
<div class="scrim"></div>
<div class="in">
  <img class="logo" src="data:image/png;base64,${logo}" alt="">
  <div>
    <h1>Australia’s <em>independent</em> guide to learning to sail</h1>
    <p>Sailing schools, courses and qualifications — verified, dated, and not for sale.</p>
  </div>
  <div class="rule"><span class="dot"></span><span class="dom">sailingschools.com.au</span></div>
</div>
</body></html>`;

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.setContent(html, { waitUntil: 'networkidle' });
await p.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 88 });
await b.close();
console.log('wrote public/og.jpg');
