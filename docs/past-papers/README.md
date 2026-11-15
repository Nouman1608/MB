# Past-paper library

Owner decision, 15 Nov 2026: "I will take full responsibility of the licensing; host the past papers."

The site holds the listings. The owner supplies every file. A working session does not add, download,
copy or transcribe a board's paper, mark scheme or examiner report, and no paper text is kept in this
repository.

The manifest is empty, so the site has no past-paper page, link or sitemap URL. They appear when the
first entry is added and the site is rebuilt.

## What exists

| Part | Where |
| --- | --- |
| Settings: allowed file hosts, rights notes, document types, sessions | `src/data/past-papers/config.ts` |
| The manifest: one JSON file per course | `src/data/past-papers/courses/` |
| The rules | `src/utils/past-papers/manifest.ts` (`checkManifest`) |
| Validator | `scripts/validate-past-papers.mjs` |
| Test | `scripts/test-past-paper-library.mjs` |
| Index page, built only when a course has entries | `/past-papers/` |
| Course page, built only for a course with entries | `/past-papers/<board>/<qualification>/<subject>/` |
| Link on the course hub, shown only for a course with entries | `/boards/<board>/<qualification>/<subject>/` |

A listing attaches to a course the site already has: the board, qualification and subject slugs of an
active row in `src/data/academic/matrix.ts`, and one of that course's syllabus codes.

## Where to keep the files

Keep them outside the repository, in a Cloudflare R2 bucket served on a subdomain of marlbridge.com,
and put the URLs in the manifest.

- The site is deployed as Worker static assets (`wrangler.jsonc`). Cloudflare limits a deployment to
  20,000 files on the Free plan and 100,000 on a paid plan, and each file to 25 MiB
  ([Workers limits](https://developers.cloudflare.com/workers/platform/limits/#static-assets)). The
  build on 15 Nov 2026 had 15,215 files before the search index was added. The repository does not
  record which plan the account is on.
- The repository is about 205 MB packed. Git keeps every version of a binary file for good.
- A file in the bucket goes live without a site build. A file under `public/` needs a build and a deploy.

An R2 bucket is served on a subdomain by connecting a custom domain to it; the domain must be in the
same Cloudflare account ([R2 public buckets](https://developers.cloudflare.com/r2/buckets/public-buckets/)).
The bucket's `r2.dev` address is rate-limited and meant for testing, so do not put it in the manifest.

The allow-list `PAST_PAPER_FILE_HOSTS` starts with `img.marlbridge.com`, the one host the site already
serves its own files from. Papers can go there, or on a separate host (for example
`papers.marlbridge.com`, which does not exist yet). Add a new host to the list once it is live.

A few files can be kept in the repository instead, under `public/papers/`. Use this only as a stopgap.

## File names

The validator accepts only letters, digits, `.`, `_`, `-` and `/` in a file address. Recommended
layout, lower case, the same for every board:

```
<board>/<code>/<year>-<session>/<code>-<year>-<session>-p<paper>[-v<variant>]-<type>.pdf
cambridge/0620/2024-june/0620-2024-june-p4-v2-qp.pdf
cambridge/0620/2024-june/0620-2024-june-er.pdf
```

Type codes: `qp` question paper, `ms` mark scheme, `in` insert, `er` examiner report, `gt` grade
thresholds or boundaries. A document for the whole series has no paper part. Do not rename a file
after it is listed: the old address will be in search results and bookmarks.

## Before the first paper (once)

1. Storage (D-469). The owner chose R2 on 15 Nov 2026. The bucket `marlbridge-past-papers` was
   created that day (location: Eastern North America; files are served from Cloudflare's network
   wherever the visitor is), and `papers.marlbridge.com` is already in `PAST_PAPER_FILE_HOSTS`.
   One step is left, in the Cloudflare dashboard: R2 > `marlbridge-past-papers` > Settings >
   Custom Domains > Connect Domain > `papers.marlbridge.com`. Until then no file URL works, so
   do not add entries yet. Upload files in the dashboard (R2 > bucket > Upload) or with
   `npx wrangler r2 object put marlbridge-past-papers/<file name> --file <local path> --remote`.
2. Write the rights note for each board in `PAST_PAPER_RIGHTS_NOTES`: the basis on which you host that
   board's documents, in your own words, at least 20 characters. It is a record kept with the
   manifest and is not printed on any page. `.gitignore` describes this repository as public, so
   anyone who can read the repository can read the note. No entry is accepted for a board without one.
3. Reword the "Copyright and original questions" paragraph in `src/pages/legal/editorial-policy.astro`.
   It says Marlbridge "does not reproduce ... past-exam questions, or mark schemes", which stops being
   true when a paper is listed. The validator fails until it is changed (rule [8]). The Arabic, Urdu
   and Bengali versions in `src/i18n/pages/legal.ts` need the same check by a translator.

## Add one paper

1. Upload the file. Check that its address opens in a browser.
2. Open the course's file in `src/data/past-papers/courses/`, or create it. The name is
   `<board>-<qualification>-<subject>-<code>.json`, for example `cambridge-igcse-chemistry-0620.json`.
3. Add one line to `files` for the document:

   ```json
   {
     "board": "cambridge",
     "qualification": "igcse",
     "subject": "chemistry",
     "syllabusCode": "0620",
     "files": [
       { "year": 2024, "session": "june", "paper": "4", "variant": "2", "type": "question-paper",
         "file": "https://<host>/cambridge/0620/2024-june/0620-2024-june-p4-v2-qp.pdf" }
     ]
   }
   ```

4. If the course has a past-papers guide in `src/content/resources/` that says "We do not host any
   papers", change that sentence. It can link to the course's library page. The validator names the
   file (rule [8]).
5. Run both checks from the repository root:

   ```
   node --experimental-strip-types scripts/validate-past-papers.mjs
   node --experimental-strip-types scripts/test-past-paper-library.mjs
   ```

6. Commit the manifest change, then build and deploy as usual.

## Fields

Course file:

| Field | Required | Meaning |
| --- | --- | --- |
| `board`, `qualification`, `subject` | yes | The course's slugs, as in its URL `/boards/<board>/<qualification>/<subject>/` |
| `syllabusCode` | yes | One of the course's codes, as the site prints it (`0620`, `H432`) |
| `componentWord` | no | `Paper` (default), `Unit` or `Component`: the word shown before each paper's identifier |
| `rightsNote` | no | Replaces the board's note for this course |
| `files` | yes | The documents, at least one |

Each item of `files`:

| Field | Required | Meaning |
| --- | --- | --- |
| `year` | yes | The series year, a number: `2024`. For a specimen paper, the year printed on it |
| `session` | yes | `january`, `march`, `june`, `october`, `november` or `specimen`; the board must run it (`BOARD_SESSIONS`) |
| `paper` | for a question paper, insert or mark scheme | The paper as the board prints it, in quotes: `"4"`, `"1H"`, `"WCH11/01"` |
| `variant` | no | The variant, where the board has one, in quotes: `"2"` |
| `type` | yes | `question-paper`, `insert`, `mark-scheme`, `examiner-report` or `grade-thresholds` |
| `file` | yes | An `https://` address on an allowed host, or a path starting `/papers/` that exists under `public/` |
| `rightsNote` | no | Only where this one document is hosted on a different basis |

Two entries may not describe the same document, and one file may not be listed twice.

## Not accepted

- A course or syllabus code the site does not have. A paper set on an earlier code that the site
  holds no record of cannot be listed until that is designed.
- Cambridge "Confidential Instructions". D-111 records that these files are not opened or used. There
  is no document type for them, and a file named with `_ci_` is rejected.
- International Baccalaureate documents. The manifest has no field for Higher and Standard Level or
  for time zones, and `BOARD_SESSIONS` has no IB sessions.
- A document type or session that is not in `config.ts`. Add it there; no template changes.
