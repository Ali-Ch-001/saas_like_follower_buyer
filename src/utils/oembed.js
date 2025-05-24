// src/utils/preview.js
export async function fetchPreview(url) {
  try {
    const api = `https://noembed.com/embed?url=${encodeURIComponent(url)}`;
    const res = await fetch(api);
    if (!res.ok) throw new Error(`noembed returned ${res.status}`);
    const data = await res.json();
    // noembed returns thumbnail_url, author_name, title (sometimes)
    return {
      thumbnail: data.thumbnail_url,
      title:     data.author_name || data.title || null
    };
  } catch (err) {
    console.warn('fetchPreview error:', err);
    return null;
  }
}
