// every .md file inside characters/ and places/ is picked up here at build time,
// so adding or editing an entry is just adding or editing a file (see README.md)
const files = import.meta.glob("./*/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

export type Group = "characters" | "places";

export interface Entry {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  thumbPosition: string; // thumbnails are a crop of the image, see "thumb" in README.md
  thumbSize: string;
  order: number;
  html: string;
}

// "---" block at the top with "key: value" lines, the rest is the text
function parse(raw: string) {
  const data: Record<string, string> = {};
  let body = raw.replace(/\r\n/g, "\n");

  const match = body.match(/^---\n([\s\S]*?)\n---\n?/);
  if (match) {
    for (const line of match[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
    body = body.slice(match[0].length);
  }

  return { data, body };
}

// small markdown: paragraphs, **bold**, *italic*, [links](url)
function render(md: string) {
  const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  return md
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const text = escape(p.replace(/\n/g, " "))
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/\[(.+?)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" class="underline">$1</a>');
      return `<p>${text}</p>`;
    })
    .join("");
}

// default crop for thumbnails: characters zoom on the head, places show the middle
const thumbDefaults: Record<Group, string> = { characters: "50% 6% 210%", places: "50% 50% cover" };

// "x y zoom", like "50% 10% 200%"
function thumb(value: string) {
  const parts = value.split(/\s+/);
  return { position: `${parts[0] || "50%"} ${parts[1] || "50%"}`, size: parts[2] || "cover" };
}

// entries of a group in the current language, anything missing in pt comes from the en file
export function getEntries(group: Group, language: string): Entry[] {
  const lang = language.startsWith("pt") ? "pt" : "en";
  const entries: Entry[] = [];

  for (const [path, raw] of Object.entries(files)) {
    const match = path.match(/^\.\/(\w+)\/([\w-]+)\.en\.md$/);
    if (!match || match[1] !== group) continue;

    const slug = match[2];
    const en = parse(raw);
    const translated = lang === "en" ? en : parse(files[`./${group}/${slug}.${lang}.md`] || raw);
    const data = { ...en.data, ...translated.data };

    entries.push({
      slug,
      title: data.title || slug,
      subtitle: data.subtitle || "",
      image: data.image || "",
      thumbPosition: thumb(data.thumb || thumbDefaults[group]).position,
      thumbSize: thumb(data.thumb || thumbDefaults[group]).size,
      order: Number(data.order) || 999,
      html: render(translated.body.trim() ? translated.body : en.body),
    });
  }

  return entries.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
