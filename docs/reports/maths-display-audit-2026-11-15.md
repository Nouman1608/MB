# Maths display audit (15 November 2026)

Read-only audit of `src/content/resources` as of about 19:00 PKT on 15 Nov 2026; nothing in the repository was changed.
Expression counts are heuristic (probably high for inline maths); file and pattern counts are exact for that snapshot.

Paths used below:

- `R/` = `src/content/resources/`
- `D/` = `dist/resources/`
- scratch = `(session scratch files, not kept) `

## 1. Outcome

Nothing in the repo was changed (read-only). Maths on the site is plain Unicode text with no typesetting of any kind, and that is undocumented rather than decided. It reads acceptably for one-line algebra and most calculus, but it has real faults:

- 5 pages show raw LaTeX.
- About 43% of worked-solution lines break mid-expression on a phone.
- Matrices, column vectors and long division drawn with spaces are misaligned, because code blocks use a proportional font.
- Several hundred expressions are ambiguous as written.

**Recommendation: (b)** fix a specific list now plus three small sitewide fixes. Do **not** adopt KaTeX HTML output sitewide, because measured output size would push the content store to roughly 73-95% of its hard limit. If typeset maths is wanted later, do it as a scoped pilot with MathML-only output.

## 2. Findings

### A. How the site handles maths today

- **No maths tooling anywhere.** `package.json` has 8 dependencies, none maths-related. No remark-math, rehype-katex, katex, mathjax, temml or MathML in `package.json`, `astro.config.mjs`, `src/content.config.ts`, `src/utils/markdown/` (only `hast-rtl-blocks.mjs`), layouts or components. Built pages contain no `katex` class and no `<math>` element.
- **The Markdown processor is Sätteri** (`@astrojs/markdown-satteri` 0.4.1, `satteri` 0.10.5), not remark/rehype. So "remark-math + rehype-katex" cannot be plugged in as such. Sätteri has its own switch (`features.math`, default off); see section E.
- **Maths is written three ways:** inline in prose as Unicode; in fenced blocks with no language tag (8,378 blocks in the subjects scanned); and in tables. Fenced blocks render as `<pre class="astro-code">`, styled by `src/styles/global.css` lines 115-128: `white-space: pre-wrap; overflow-wrap: anywhere;` font 0.95em.
- **Code blocks are not monospaced.** `global.css` line 60 sets `--font-mono` to Public Sans ("the monospace face is gone"). This came with D-397 (visual refresh, 6 Oct 2026: "Newsreader and IBM Plex Mono were removed"). D-397 does not mention the effect on space-aligned worked solutions. This is the root cause of the alignment faults below.
- **The body font cannot draw most maths characters.** I parsed the shipped font files: `public-sans-latin-400.woff2` has 226 glyphs and, of the maths characters tested, contains only ¹ ² ³ ± × ÷ − ½ and the combining macron. It lacks ⁴-⁹ ⁿ ⁻ ⁺, every subscript, all Greek (π θ λ μ σ Δ Σ), ∫ √ ∞ ≤ ≥ ≠ ≈ → ⇌ and ′ ″. Those come from whatever fallback font the visitor's device has, so "x² + x⁴" is drawn in two typefaces. 1,917 files / 51,770 characters are superscripts beyond ¹²³.
- **Decision log: no entry decides maths notation for study pages.** Searches for KaTeX, MathJax, LaTeX, typeset, MathML returned nothing relevant; "equation", "Unicode", "superscript" hits are all about content or encoding. The only recorded notation rule is for flashcards: D-444 (5 Nov 2026) and `src/data/flashcards/types.ts` lines 24-27: "PLAIN TEXT rendered with textContent, never HTML ... Use Unicode for chemistry and maths"; `scripts/validate-ap-flashcards.mjs` line 104 rejects LaTeX outright. The `astro.config.mjs` comment (markdown block) records only that fenced blocks hold "formulas and worked calculations" and got a light theme.

### B. Counts

Snapshot about 19:00 PKT; 8,276 files in `src/content/resources`; other sessions were writing there.

Scope scanned (4,121 files):

| Subject group | Files |
|---|---|
| Mathematics, including IB AA and AI | 1,105 |
| Statistics | 92 |
| Physics | 788 |
| Chemistry | 937 |
| Economics | 1,199 |
| Further mathematics (no separate subject exists) | 0 |

#### Pattern totals

| Pattern | Files | Occurrences |
|---|---|---|
| Derivative form `dy/dx` | 176 | 2,886 |
| Bracketed fraction `(a+b)/(c+d)` | 1,737 | 9,435 |
| Numeric fraction `1/3` | 1,578 | 16,896 |
| Algebraic fraction `x/2`, `4/x³` | 1,060 | 6,598 |
| Nested fraction on one line | 190 | 365 |
| Integral sign ∫ (all in mathematics) | 127 | 1,752 |
| Σ symbol | 200 | 1,342 |
| The word "sum" (mostly ordinary prose) | 908 | 2,130 |
| `√(` | 636 | 2,004 |
| Any √ | 940 | 7,764 |
| The word "sqrt" | 48 | 132 |
| Caret powers `x^2` | 618 | 7,355 |
| Caret with bracketed fractional power `x^(3/2)` | 210 | 1,373 |
| Unicode superscripts | 2,547 | 115,424 |
| Unicode superscripts beyond ¹²³ | 1,917 | 51,770 |
| Unicode subscripts (mostly chemistry formulae) | 1,539 | 58,062 |
| Inline HTML `<sup>` | 0 | 0 |
| Inline HTML `<sub>` (chemistry, renders correctly) | 5 | 77 |
| Raw LaTeX showing as literal text (all IB maths) | 5 | see D1 |
| Fenced `latex` / `math` blocks | 0 | 0 |
| Underscore subscripts shown literally | 251 | 2,044 |
| The word "matrix" | 48 | 463 |
| Matrices or column vectors drawn with spaces | 24 | 42 blocks |
| i-j vector form `3i − 4j` | 62 | 570 |
| Arrow written before letters `→AB` | 12 | 470 |

#### Examples for each pattern

1. **Slash fractions**
   - Derivative form:
     - `a-level-mathematics-mechanics-practice.md:102` "dv/dt = 6 − 2t"
     - `a-level-maths-9709-pure-mathematics-1-differentiation-practice.md:41` "Find dy/dx when y = 5x⁴ − 6/x³ + 4√x"
     - `a-level-maths-9709-pure-mathematics-2-differentiation-revision-notes.md:43`
   - Bracketed:
     - `a-level-aqa-mathematics-quadratics-practice.md:120` "x = (2 ± √(4 + 20))/2"
     - `a-level-maths-9709-probability-statistics-1-revision-notes.md:54` "P(A ∩ B) / P(B)"
     - `a-level-maths-9709-pure-mathematics-1-circular-measure.md:119` "θ/(2π)"
   - Nested:
     - `a-level-maths-9709-pure-mathematics-1-integration.md:65` "3x^(3/2)/(3/2)"
     - `a-level-mathematics-pure-3-algebra-calculus-practice.md:82` "[(−½)(−3/2)/2](4x)²"
     - `a-level-maths-9709-pure-mathematics-2-trigonometry-revision-notes.md:153` "(1 − √2/2)/2"
2. **Integrals.** Limits are written five different ways:

   | Convention | Occurrences | Files | Example |
   |---|---|---|---|
   | Unicode sub + superscript `∫₀³` | 313 | 46 | `a-level-mathematics-mechanics-practice.md:103` |
   | Subscript then caret `∫₂^∞`, `∫₀^(π/2)` | 60 | 23 | `a-level-maths-9709-pure-mathematics-3.md:185` |
   | Underscore-caret `∫_(-4)^(-1)` | 5 | 2 | `ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes.md:93` |
   | `∫ (1 to 4)` | 31 | 3 | `edexcel-ial-mathematics-volumes-of-revolution-separable-differential-equations-practice.md:64` |
   | Words `∫ from 0 to 2 of` | about 271 | 60 | `edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and.md:78` |
   | No limits on the sign | 997 | 109 | |

3. **Summation**
   - `a-level-maths-9709-probability-statistics-1-revision-notes.md:49` "x̄ = Σx / n"
   - `aqa-a-level-mathematics-data-presentation-and-interpretation-revision-notes.md:56`
   - `aqa-a-level-mathematics-sequences-and-series.md:170`
4. **Roots**
   - `a-level-maths-9709-probability-statistics-1.md:85` "√( Σx²/n − x̄² )"
   - `a-level-maths-9709-pure-mathematics-1-differentiation.md:117` "y = √(4x² + 9)"
   - `a-level-maths-9709-probability-statistics-2.md:142`
5. **Caret powers**
   - `a-level-aqa-mathematics-quadratics-and-inequalities.md:137` "x^2 - x - 6 = 0"
   - `a-level-maths-9709-probability-statistics-2-practice.md:115` "e^(−2.4) × 2.4²/2"
   - `a-level-maths-9709-pure-mathematics-1-integration-revision-notes.md:61` "√x = x^(1/2)"
6. **Unicode superscripts and subscripts**
   - `a-level-mathematics-pure-mathematics-2-revision-notes.md:65` "logₐ b = x"
   - `a-level-maths-9709-pure-mathematics-1-differentiation-revision-notes.md:57` "y − y₁ = m(x − x₁)"
   - `a-level-mathematics-pure-mathematics-1-functions.md:166` "f⁻¹(x)"
7. **Inline HTML `<sub>`** (all render correctly)
   - `a-chemical-energetics-lattice-energy-entropy-and-gibbs-free-energy.md:85` "ΔH<sub>at</sub>"
   - `a-electrochemistry-electrolysis-and-electrode-potentials.md:66`
   - `a-group-2-quantitative-trends.md:108`
8. **Raw LaTeX showing as literal text:** 5 files, all IB maths (list in D1). No `\( \)` maths delimiters anywhere; the 2 chemistry `\[` hits are an escaped square bracket and render correctly. Every other `$` in the store is currency or a spreadsheet reference (536 files).
9. **Fenced `latex` / `math` blocks:** 0. All 8,378 fenced blocks in scope have no language tag (4 say `text`).
10. **Underscore subscripts shown literally** (v_max, c_rms, N_A, x_(n+1))
    - `aqa-a-level-mathematics-exponentials-and-logarithms-revision-notes.md:42` "log_a x"
    - `a-level-mathematics-pure-mathematics-2-practice.md:55` "x_(n+1) = (x_n + 1)^(1/3)"
    - `aqa-a-level-physics-further-mechanics-and-thermal-physics.md:93` "v_max = ωA"
11. **Matrices and vectors**
    - Drawn with spaces: `ib-dp-mathematics-ai-hl-matrices-eigenvalues.md:71` (8 blocks); `oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations.md:51` (7 blocks); `igcse-mathematics-0580-vectors-and-magnitude.md:71` (5 blocks)
    - Arrow before the letters: `aqa-a-level-mathematics-vectors-practice.md:54`
    - Vectors are not bold anywhere I read ("r = a + tb", "a.b").
12. **Multi-line worked solutions aligned by spaces**
    - 4,882 blocks of 3+ lines.
    - 550 blocks align continuation lines with leading spaces (`edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and.md:70-71`).
    - 3,145 blocks use runs of spaces as columns (`aqa-a-level-mathematics-integration.md:117-118`).
    - A further 22 blocks in scope draw fraction bars or long division with dashes (`a-level-maths-9709-pure-mathematics-2-algebra.md:182`; `igcse-edexcel-mathematics-use-of-symbols-and-algebraic-manipulation.md:176`; `ocr-gcse-mathematics-fractions-and-decimal-fractions.md:311`).

#### How much structural notation

Files with at least one of: bracketed or nested fraction, ∫, caret, `√(`, underscore subscript, drawn matrix.

| Subject group | Files | With 1+ | With 5+ | With 20+ |
|---|---|---|---|---|
| Mathematics (incl. IB) | 1,105 | 864 | 614 | 275 |
| Physics | 788 | 517 | 305 | 54 |
| Statistics | 92 | 51 | 21 | 2 |
| Chemistry | 937 | 219 | 87 | 5 |
| Economics (mostly simple ratios) | 1,199 | 456 | 93 | 0 |

### C. Twelve pages read in full, with their built HTML

Built HTML matches the source character for character on all of them: no transformation, no extra markup. I also rendered them in headless Chrome at 390 px (content column 335 px, code-block text area about 299 px).

| # | Page | Verdict | Reads well | Hard or ambiguous |
|---|---|---|---|---|
| 1 | `a-level-maths-9709-pure-mathematics-1-integration` | Readable. 19 of 53 block lines wrap. | "∫₁⁴ (2x − 1/√x) dx" | "3x^(3/2)/(3/2)"; "∫₋₂² ((5 − x²)² − 1²) dx" |
| 2 | `a-level-maths-9709-pure-mathematics-3` | Mixed. Vectors unmarked: "CP.b = 0". | "(3x − 2)(x + 4) = 0" | "(½)(−½)/2 × (−x/4)²"; ambiguous: "x < ln 2/ln(5/3)" |
| 3 | `aqa-a-level-mathematics-integration` | Readable. 21 of 40 lines wrap. | | "∫₁⁹ ((u + 1)/2) u^(1/2) (1/2) du"; "y + 1 = e^(x²/2 + ln 3)" |
| 4 | `edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and` | Readable; uses the "∫ from 1 to 5 of" convention. | | "k(ax + b)^(1−n) / (a(1 − n)) + c" |
| 5 | `ib-dp-mathematics-aa-calculus` | Older ASCII style. Only one worked example on the page. | | "d^2A/dx^2 = -4"; "10 x 20 = 200" |
| 6 | `ib-dp-mathematics-aa-hl-further-calculus` | Hardest prose. On a phone "(1/n + 1/(500" breaks before "− n))". | "dy/dx = −(2x + y)/(x + 2y)" | "I(x) = e^(∫P dx)"; "n = 500/(1 + 9e^(−0.5t))"; "v + x dv/dx = 1/v + v" |
| 7 | `a-level-maths-9709-mechanics` | Reads well. | "v² = u² + 2as"; "s = ut + ½at²" | |
| 8 | `a-level-maths-9709-probability-statistics-2` | Mixed. 27 of 44 lines wrap. | | "s² = (1/(n − 1)) ( Σx² − (Σx)²/n )"; "z = (31 − 30)/(6/√50)" |
| 9 | `ib-dp-mathematics-ai-hl-matrices-eigenvalues` | Worst page. Matrices are drawn as "\| 2 -1 \|" rows; on a phone rows do not line up and "= \| 2  12 \|" splits across lines. The bars are also the notation for a determinant, on a page that defines "det A = \|A\|". | "Mⁿ = PDⁿP⁻¹" | "A⁻¹ = (1 / (ad − bc)) × \| d -b \|" |
| 10 | `aqa-a-level-physics-further-mechanics-and-thermal-physics` | Reads well for formulae. 30 of 49 lines wrap. | "T = 2π√(m/k)" | Ambiguous: "l = gT²/4π²"; "√(3 × 1.38 × 10⁻²³ × 300 / 4.65 × 10⁻²⁶)" |
| 11 | `as-chemical-equilibria` | Prose fine; expressions poor. | | "Kp = (P꜀)ᶜ(P_D)ᵈ / (Pₐ)ᵃ(P_B)ᵇ" (line 145) |
| 12 | `a-reaction-kinetics-rate-equations-and-catalysis` | Reads well. | "rate = k[A]ᵐ[B]ⁿ" | Ambiguous: "2.0 × 10⁻³ / 1.0 × 10⁻³" (line 121) |

Also read in part: `aqa-a-level-mathematics-vectors` (column vector at lines 59-61 misaligned), the five raw-LaTeX IB pages, `a-level-maths-9709-pure-mathematics-2-algebra` (long division).

**Honest verdict as a student on a phone.** A Level mechanics, kinetics and standard formulae are fine. Calculus is readable but slow: you parse brackets instead of seeing a fraction, and the limit notation changes from page to page. Matrices, column vectors, long division and piecewise definitions are broken layouts. Wrapping is the biggest everyday problem.

**Measured wrapping at 390 px**

| Sample | Block lines | Wrapped | Share |
|---|---|---|---|
| The 11 hard pages that have blocks | 358 | 174 | 49% |
| Seeded random sample of 60 A Level / IB maths pages | 1,437 | 613 | 42.7% |

- 55 of the 60 sampled pages have at least one wrapped line.
- Lines start wrapping at 38 characters; 40.9% of all maths block lines in the store (6,498 of 15,898) are longer than that.
- 5 of 172 tables in the sample are wider than the column.

### D. Rendering faults found (every one, with file and line)

**D1. Raw LaTeX visible as text, 5 pages.** Built HTML shows 221 `$...$` pairs and 108 backslash commands.

| File | Lines |
|---|---|
| `R/ib-dp-mathematics-aa-functions-practice.md` | 24 lines from 38 to 92 (for example 38: `$f(x) = \sqrt{x - 3}$`) |
| `R/ib-dp-mathematics-aa-functions-revision-notes.md` | 20 lines, 44-164 |
| `R/ib-dp-mathematics-aa-functions.md` | 22 lines, 50-168 |
| `R/ib-dp-mathematics-ai-geometry-trigonometry-practice.md` | 17 lines, 40-92; line 66 shows `\begin{pmatrix}1\2\0\end{pmatrix}` (double backslashes are also eaten) |
| `R/ib-dp-mathematics-ai-geometry-trigonometry.md` | lines 91-94, 98-99, 155 |

**D2. Underscores swallowed as italics, so the lower limit vanishes.**

- `R/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and-revision-notes.md` lines 93 and 154 (renders "Area = ∫(-4)^2 (8 - 2x - x²) dx = [8x - x² - x³/3](-4)^2" in italics).
- Same file line 210, and the study guide (`R/ocr-a-level-mathematics-integration-basics-fundamental-theorem-indefinite-and.md`) lines 161 and 167, show "∫_(-6)^(-2)" literally.

**D3. Asterisks marking chiral carbons swallowed.** `R/edexcel-ial-chemistry-chirality.md:77` renders "CH₃C<em>HClC</em>HClCH₂CH₃".

**D4. Caption cut off by an unescaped `<`.** `R/edexcel-ial-mathematics-continuous-random-variables-pdf-cdf-mean-variance-mode.md:123`. "P(1<X<3)" sits in a raw figcaption; the browser shows "...probability P(1" and drops the rest (confirmed in a screenshot).

**D5. Character not meant for maths.** U+A700 "꜀" is used as a subscript c at `R/a-level-maths-9709-pure-mathematics-1-integration.md:278` and `R/as-chemical-equilibria.md:145`. Whether phones show it or a blank box is not determined.

**D6. Kc / Kp written so the denominator is not grouped.**

- `R/as-chemical-equilibria.md:114` and `R/oxfordaqa-a-level-chemistry-equilibria-le-chateliers-principle.md:131` ("Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ").
- `R/as-chemical-equilibria.md:145` and `:154` also mix real subscripts with "P_D", "P_N₂O₄".

**D7. Space-drawn two-dimensional layouts misaligned (proportional font).** 42 blocks in 24 files. Files in scope:

- `aqa-a-level-mathematics-vectors.md:58`
- `ocr-a-level-mathematics-vectors-in-two-and-three-dimensions.md:52`
- `ib-dp-mathematics-ai-hl-matrices-eigenvalues.md:71` (8 blocks)
- `ib-dp-mathematics-ai-hl-matrices-eigenvalues-revision-notes.md:152` (2 blocks)
- `oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations.md:51` (7 blocks)
- `oxfordaqa-igcse-mathematics-matrices-and-matrix-transformations-revision-notes.md:84`
- `igcse-mathematics-0580-vectors-and-magnitude.md:71` (5 blocks)
- `ib-dp-mathematics-ai-hl-graph-theory.md:101` and `ib-dp-mathematics-ai-hl-graph-theory-practice.md:150`
- `ib-dp-mathematics-ai-hl-data-regression-tests-markov.md:257` and `ib-dp-mathematics-ai-hl-data-regression-tests-markov-practice.md:196`
- `edexcel-igcse-maths-4ma1-use-of-symbols-and-algebraic-manipulation.md:290`
- `ocr-gcse-mathematics-similarity-and-enlargement.md:167`
- five statistics / data pages with stem-and-leaf layouts

Plus 22 dash-drawn fraction or division blocks, for example:

- `a-level-maths-9709-pure-mathematics-2-algebra.md:182`
- `aqa-a-level-mathematics-polynomial-manipulation-algebraic-division-and-the.md:114`
- `oxfordaqa-a-level-mathematics-polynomials-factor-theorem-graph-sketching-and.md:71`
- `oxfordaqa-a-level-mathematics-transformations-rational-functions-algebraic-division.md:209`
- `ib-dp-economics-elasticity-of-demand.md:61` and `:208`
- `ocr-gcse-mathematics-fractions-and-decimal-fractions.md:311`

Full lists: `scratch/art2d.json` and the scan output.

**D8. Expressions wrapping mid-term.** Systemic; see section C (rule `overflow-wrap: anywhere` with `pre-wrap`). Example confirmed by screenshot: `ib-dp-mathematics-aa-hl-further-calculus.md:239` and `:246`.

**D9. Mathematically ambiguous or wrong as plain text** (pattern counts in scope).

| Pattern | Occurrences | Files | Examples |
|---|---|---|---|
| Division by a standard-form number with no brackets, "a / b × 10ⁿ". Read strictly these give the wrong value. | 564 | 201 | `a-reaction-kinetics-rate-equations-and-catalysis.md:121`; `a-chemistry-reaction-kinetics-revision-notes.md:123`; `aqa-a-level-chemistry-atomic-structure-revision-notes.md:67`; `aqa-a-level-physics-further-mechanics-and-thermal-physics.md:240` |
| Product denominators after a slash (pV/RT, gT²/4π², Q/4πε₀r², e^(−Ea/RT)) | 148 | 69 | `a-physics-electric-fields-revision-notes.md:63`; `aqa-a-level-chemistry-rate-equations.md:43` |
| Log quotients "ln 2/ln(5/3)" | 74 | 38 | `a-level-maths-9709-pure-mathematics-3.md:135` |
| "1/2l", "1/2r" | 13 | 8 | `aqa-a-level-physics-waves.md:42` |
| Negative lower limit as "∫₋₂²" | 16 | 8 | `a-level-maths-9709-pure-mathematics-1-integration.md:313` |

**D10. Smaller items.**

- 128 derivatives typed with an apostrophe became curly quotes ("f’(x)", "f’’(2)") against 1,769 true primes, in 24 maths files (for example `aqa-a-level-mathematics-differentiation.md`).
- 137 maths files use a hyphen for minus (40 use only hyphens) while 990 use the true minus sign.
- No tables are used to fake fractions. No broken or replacement characters, no mojibake, no stray `<del>`.

**D11. Not maths, found on the way (for the lead; outside this lane).**

- Literal `**` is visible 54 times on built pages because text sits on the same line as a closing HTML comment, including two maths answers: `aqa-gcse-maths-8300-geometry-and-measures.md:198` and `edexcel-igcse-maths-4ma1-geometry-and-trigonometry.md:225`.
- `&lt;` in image alt text is double-escaped to `&amp;lt;` on `ocr-gcse-mathematics-inequalities-and-the-language-of-functions` and its revision notes (screen readers only).

### E. Recommendation: (b), with (c) only as a later, scoped pilot

#### What to do now

1. Rewrite the 5 raw-LaTeX pages (D1) in the house Unicode notation.
2. Fix D2-D6 by hand: 9 files, about 15 lines.
3. Rewrite the 42 drawn matrix / vector blocks and 22 drawn fraction / division blocks (D7). Hand-written MathML in the Markdown would do it with no dependency; the cheaper stopgap is a monospace, no-wrap, scrollable style for those blocks only.
4. Bracket the 564 standard-form denominators (201 files). The pattern is narrow enough to script, with a human or verifier check.
5. Three small code changes (not content):
   1. CSS for worked-solution blocks so a wrapped line gets a hanging indent and breaks only at spaces, or scrolls.
   2. A self-hosted symbol subset so superscripts, subscripts, Greek and operators come from one typeface.
   3. A validator in the `validate:academic` chain that fails on raw LaTeX, "∫_", U+A700-A71F, and "<" inside raw figcaptions, plus a one-page notation rule (one way to write limits; brackets round every compound denominator; true minus; no underscore subscripts). The AP flashcard validator already does the LaTeX check.

**Why not (a):** D1-D4 are plain defects visible to students today.

#### Why not (c) sitewide now: honest cost

- **Files to convert.** 1,432 maths / statistics / physics files carry structural notation (940 with 5+ instances, 331 with 20+). My rough count is about 146,700 expressions in those three subjects (16,500 display lines, 130,200 inline), about 91 per maths page. Chemistry formulae and most economics should stay Unicode.
- **Not mechanical.** Inline maths has no delimiters in the source, five limit conventions and four superscript styles are mixed, and at least 786 expressions rely on implied grouping a script cannot resolve safely. It needs the writer-plus-independent-verifier process the repo already uses, page by page, on pages that carry reviewer credit (D-379), while other sessions are editing the same folder.
- **Page weight**, measured with KaTeX 0.16.47 and Temml 0.14.0 on 15 expressions taken from these pages:

  | Output | Total bytes (15 expressions) | Mean per expression | Gzipped total |
  |---|---|---|---|
  | Plain text today | 460 | about 31 bytes | 342 |
  | KaTeX HTML + MathML (default) | 56,176 | 3.7 KB (display about 4.6 KB, inline about 1.5 KB) | 4,456 |
  | KaTeX HTML only | 48,298 | 3.2 KB | 3,010 |
  | KaTeX MathML only | 7,773 | about 0.5 KB | 1,424 |
  | Temml MathML | 7,128 | about 0.5 KB | 1,018 |

  `katex.min.css` is 23,827 bytes (3,583 gzipped); the 20 KaTeX woff2 fonts total 259,792 bytes, and a typical page would fetch about 48-82 KB of them once. The 9709 integration page (89 KB today) would gain roughly 340 KB raw with KaTeX HTML, or about 48 KB with MathML.
- **Content store.** It is 238,952,517 bytes now, 44.5% of the 536.9M-character limit (README, D-439, D-440). `check:content-store` warns at 75% and fails at 90%.

  | Output for maths, statistics and physics | Estimated addition | Store as share of limit |
  |---|---|---|
  | KaTeX HTML | 150-270 MB | 73-95% |
  | MathML only | 26-43 MB | 49-53% |

  So KaTeX HTML output is not viable without first taking rendered HTML out of the store (the untried `deferRender` step in D-440).
- **Build time.** 0.15 ms per expression (KaTeX), 0.045 ms (Temml): about 22 s or 7 s on a build of about 4m50s. Not a concern. Peak memory not measured.
- **What would break or need work** (from reading the code):
  - *Pipeline.* Enable Sätteri's `features.math` and write a small hast plugin like the existing `rtlBlocksPlugin`. I tested the site's own Sätteri in scratch: it emits `<code class="language-math math-inline">` and `<pre><code class="language-math math-display">`.
  - *Currency.* With single-dollar maths on, "$5 rising to $10" becomes a maths span (tested). 898 paragraphs in 354 resource files and 1,159 in 128 AP files hold two or more "$". Use "$$"-only (`singleDollarTextMath: false`, tested: single "$" stays literal).
  - *Practice engine.* `src/utils/practice/client-questions.ts` has its own `mdToHtml` (bold, code, italic, line breaks only), so LaTeX in practice files would appear raw on `/practice/` pages and in the practice-data JSON; `bank.ts` reads marks with `/\[(\d+)\]/`, which LaTeX brackets could confuse.
  - *Flashcards.* 169 decks; about 11,700 cards in the maths / physics / chemistry / statistics / economics decks are plain text by rule (D-444) and would stay Unicode, leaving two notations on the site.
  - *FAQ structured data.* `src/utils/content/faq-extract.ts` turns FAQ Markdown into plain text; 536 files have maths in their FAQ section and would leak LaTeX source into JSON-LD.
  - *Front matter and headings.* 100 front-matter fields and 153 headings contain maths and must stay plain text (titles, meta descriptions, anchors, llms.txt).
  - *Search.* KaTeX's default output repeats each expression (MathML, HTML, TeX annotation) inside the indexed `<main>`; needs an ignore rule.
  - *Hub indexability.* It uses a whitespace word count of the source (`src/utils/seo/word-count.ts`); LaTeX changes counts slightly.

**If the owner wants typeset maths anyway:** pilot on the 127 integral pages plus the matrix / vector pages, "$$" delimiters, MathML-only output (no CSS, no fonts, no client JavaScript), and keep FAQ answers, headings and front matter in Unicode.

## 3. Evidence

- **Read:** `README.md` (heap and content-store notes), `astro.config.mjs`, `package.json`, `src/styles/global.css`, `src/styles/fonts.css`, `src/pages/resources/[slug].astro`, `src/utils/practice/bank.ts` and `client-questions.ts`, `src/data/flashcards/types.ts`, `scripts/validate-ap-flashcards.mjs`, `scripts/check-content-store-size.mjs`, `src/utils/content/faq-extract.ts`, `src/utils/seo/word-count.ts`, `src/integrations/typographic-dashes.mjs`, `node_modules/satteri/dist/compile.d.ts`; decision log D-397, D-439, D-440, D-444.
- **Scripts** (all in scratch, read-only against the repo):
  - `scan.py` (pattern counts, `scan.json`)
  - `distscan.py` (all 8,276 built resource pages, `distscan.json`)
  - `exprcount.py` (expression estimate, `exprcount.json`)
  - `cmap.mjs` (font glyph check)
  - `serve.py` + `harness/` (local read-only server over `dist` for headless Chrome; `measure14.json`, `m60a.json`, `m60b.json`)
  - `katex-test/` (KaTeX and Temml installed in scratch only; `measure.mjs`, `satteri-test.mjs`)
- **Screenshots at 390 px** in `scratch/shots/`: `matrices1.png`, `vectors1.png`, `polydiv.png`, `latex1.png`, `chem1.png`, `figcap1.png`, `ibhl.png`, `p1int_vol.png`, `p1int_ex15.png`, `p3dense.png`.
- No validator from the repo was run; none was needed. No build, dev server or git state change. I ran one read-only `git status`.
- I did not check how other revision sites render maths.

## 4. Risks for the build

- None from this workstream: no files changed.
- If the lead acts on E.5(i): the CSS rule at `global.css` 115-128 styles all 11,066 code blocks on resource pages, including real code (Python, SQL, Haskell); test those too.
- If anyone trials `features.math`: Shiki's highlight plugin runs before user hast plugins and may claim `language-math` blocks; `syntaxHighlight.excludeLangs` exists but I did not test it.
- Source files outside content under the repository changed during my run (teacher photo, pricing components), so `dist` may lag source for those; my content comparisons were unaffected.

## 5. Needs the owner

- **Decision:** is plain Unicode maths the accepted standard for study pages (as D-444 already makes it for flashcards), or is typeset maths wanted for A Level and IB? This should become a decision-log entry either way.
- **Decision:** bring back a monospace face for worked-solution blocks (reverses part of D-397's look), or rewrite the 64 drawn layouts instead.
- A subject teacher's eye on notation conventions before any batch edit: how limits are written, bold or underlined vectors, K subscripts in chemistry.

## 6. Not determined

- How fallback glyphs look on real iPhones and Android phones; my screenshots are headless Chrome on Linux with DejaVu fallback. Whether U+A700, ᵀ or ⇌ show as blank boxes on any phone.
- Whether the upstream Public Sans has the missing glyphs (only the shipped subsets were checked).
- Effect on the Pagefind index (this `dist` has no `pagefind` folder) and on peak build memory.
- MathML rendering quality across browsers and devices.
- The AP library (3,270 files) was checked only for raw LaTeX (none; every "$" there is currency), not for the other patterns.
- Expression counts are heuristic (probably high for inline); file and pattern counts are exact for the snapshot.
