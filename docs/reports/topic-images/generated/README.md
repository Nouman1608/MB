# Generated topic figures

One folder per lesson slug from [`topic-images-needed.csv`](../topic-images-needed.csv). Each folder has:

- `<slug>--NN-<name>.webp`: 1800 px wide (displayed at 900 px), ready to upload to `https://img.marlbridge.com/`.
- `figures.html`: the `<figure class="topic-figure">` blocks with alt text and captions, each marked with the heading to paste it after.
- `figures.json`: the same data, machine-readable.
- `svg/`: editable sources.

Rebuild a lesson after editing its source in `scripts/topic-figures/lessons/`:

    node scripts/topic-figures/build.mjs scripts/topic-figures/lessons/<slug>.mjs docs/reports/topic-images/generated

Done so far: `cambridge-o-level-geography-coasts` (8 figures).
