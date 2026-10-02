import assert from 'node:assert/strict';
const origin = process.argv[2] || 'http://localhost:3193';
for (const path of ['/about/', '/about/gabriel-machuret/']) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const expected of ['gabriel@yousail.com.au', 'https://yousail.com.au/', 'About us', 'Gabriel', 'Kristy']) assert.ok(html.includes(expected), path + ': ' + expected);
  for (const removed of ['hello@sailingschools.com.au', 'Can a school pay to be listed higher?', 'Paid placements', 'every one in the sitemap', 'Regulatory facts checked']) assert.ok(!html.includes(removed), path + ': removed ' + removed);
  assert.ok(html.includes('https://www.sailingschools.com.au' + path));
  if (path.includes('gabriel-machuret')) assert.ok(html.includes('ProfilePage'));
  console.log('Passed ' + path);
}
const sitemap = await (await fetch(origin + '/sitemap.xml')).text();
assert.ok(sitemap.includes('https://www.sailingschools.com.au/about/gabriel-machuret/'));
console.log('Founder sitemap entry verified.');
