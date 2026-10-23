# OBV posts

Create one `.md` file per article. Start with YAML-style front matter (simple `key: value` lines) between `---` delimiters. Required: `title`, `date`, `author`, `lang`, `summary`. Optional: `cover`, `tags`, `draft`, `slug`.

Images: place them in `public/images/` and reference as `![Caption](/images/photo.jpg)` inside Markdown. For cover images use `cover: /images/photo.jpg`.

`lang` is `fr` or `en`. Create separate files for translations. `draft: true` hides a post. Posts are bundled during the Vite build, so a maintainer should review the pull request and deploy the site to publish.

Use Markdown headings, lists, quotes, links, fenced code blocks and images. HTML is not enabled.
