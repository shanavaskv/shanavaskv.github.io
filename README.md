# shanavasv.com

Personal site of Shanavas Kavu, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, bio, links, impact stats, expertise, selected work, experience, education | `src/data/profile.ts` |
| Publications and talks | `src/data/publications.json` |
| Blog posts (Markdown, served at `/<slug>/`) | `src/content/posts/` |
| Projects (Markdown, served at `/projects/<slug>/`) | `src/content/projects/` |
| Colours, fonts, spacing | `src/styles/global.css` |

To add a post, create `src/content/posts/my-post.md` with `title`, `description`, `date` and `tags` in the front matter. Math works with `$inline$` and `$$block$$` LaTeX.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. In the repository's **Settings → Pages**, the source must be set to **GitHub Actions**. The custom domain comes from `public/CNAME`.
