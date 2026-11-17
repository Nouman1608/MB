# Generated topic figures

One folder per lesson slug from [`topic-images-needed.csv`](../topic-images-needed.csv). Each folder has:

- `<slug>--NN-<name>.webp`: 1800 px wide (displayed at 900 px), ready to upload to `https://img.marlbridge.com/`.
- `figures.html`: the `<figure class="topic-figure">` blocks with alt text and captions, each marked with the heading to paste it after.
- `figures.json`: the same data, machine-readable.
- `svg/`: editable sources.

Rebuild a lesson after editing its source in `scripts/topic-figures/lessons/`:

    node scripts/topic-figures/build.mjs scripts/topic-figures/lessons/<slug>.mjs docs/reports/topic-images/generated

Status: all 330 pages in the CSV are done (2,114 new figures, 63 reused). See [REVIEW-NOTES.md](REVIEW-NOTES.md) before uploading.

Reused figures are hand-added blocks in `figures.html` (`<!-- reused from <slug> -->`, `<!-- place after: ## heading -->`, `<figure>`); `build.mjs` keeps them, once each, on rebuild.

## Uploading to img.marlbridge.com

All 2,162 figure URLs were verified live on 17 Nov 2026. To upload new figures, copy `scripts/topic-figures/upload-figures.mjs` and `UPLOAD-ALL-FIGURES.bat` into a folder that holds these lesson folders and double-click the .bat (Windows, Node.js). It signs in to Cloudflare once in the browser, fetches any image missing locally from GitHub, and uploads only images not yet online to the R2 bucket `marlbridge-figures`.
