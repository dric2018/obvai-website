// Vite bundles local Markdown files; no database or CMS required.
const sources = import.meta.glob('./posts/*.md', { query: '?raw', import: 'default', eager: true });
function parsePost(filename, raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return null;
  const metadata = {};
  for (const line of match[1].split('\n')) {
    const index = line.indexOf(':');
    if (index > 0) metadata[line.slice(0, index).trim()] = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
  }
  if (!metadata.title || !metadata.date || !metadata.lang || !metadata.author) return null;
  const slug = metadata.slug || filename.split('/').pop().replace(/\.md$/, '');
  return { ...metadata, slug, tags: (metadata.tags || '').split(',').map(s => s.trim()).filter(Boolean), body: raw.slice(match[0].length) };
}
export const posts = Object.entries(sources).map(([name, raw]) => parsePost(name, raw)).filter(post => post && post.draft !== 'true').sort((a, b) => b.date.localeCompare(a.date));
