import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const origin = process.argv[2] || 'http://localhost:3192';
const data = await readFile(new URL('../src/lib/basics.ts', import.meta.url), 'utf8');
const slugs = [...data.matchAll(/slug: '([^']+)'/g)].map(match => match[1]);
assert.equal(slugs.length, 15);
assert.equal(new Set(slugs).size, 15);
const links = new Set();
for (const slug of ['', ...slugs]) {
  const path = `/learn-the-basics/${slug ? `${slug}/` : ''}`;
  const response = await fetch(origin + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(html.includes('/assets/saily.png'), `Mascot: ${path}`);
  assert.ok(html.includes('/images/basics/saily-'), `Chapter artwork: ${path}`);
  assert.ok(html.includes(`https://www.sailingschools.com.au${path}`), `Canonical: ${path}`);
  if (slug) {
    assert.ok(html.includes(`data-lesson-diagram="${slug}"`), `Unique lesson diagram: ${path}`);
    assert.ok(html.includes('LearningResource'), `Schema: ${path}`);
    assert.ok(html.includes('What stuck with you?'), `Quiz: ${path}`);
    assert.ok(html.includes('Saily’s tip'), `Tip: ${path}`);
    assert.ok(html.includes('Show the explanation'), `Worked example: ${path}`);
    assert.ok(html.includes('Word to know:'), `Term explanation: ${path}`);
    assert.ok(html.includes('Your reading journey'), `Reading progress: ${path}`);
    assert.ok(html.includes('<svg'), `Illustration: ${path}`);
  } else {
    for (const lesson of slugs) assert.ok(html.includes(`data-lesson-diagram="${lesson}"`), `Lesson thumbnail: ${lesson}`);
  }
  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (!match[1].startsWith('/_next/') && !match[1].includes('.')) links.add(match[1]);
  }
}
for (const path of links) assert.equal((await fetch(origin + path)).status, 200, `Internal link: ${path}`);
const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
const llms = await (await fetch(origin + '/llms.txt')).text();
for (const slug of slugs) {
  assert.ok(sitemap.includes(`/learn-the-basics/${slug}/`), `Sitemap: ${slug}`);
  assert.ok(llms.includes(`/learn-the-basics/${slug}/`), `LLM index: ${slug}`);
}
console.log(`Passed: hub + ${slugs.length} lessons, mascot, canonicals, schema, quizzes, ${links.size} internal links, sitemap and llms.txt.`);
