# Filming brief: five initial teaching videos — D-286

Prepared 2026-09-23 (PKT). No Marlbridge teaching video exists yet (the
repository and site were searched for YouTube, Vimeo and video links: none).
The site is ready to show them: add one file to `src/content/videos/` per
lesson and it appears on the linked resource pages, the syllabus hub (with
tuition section), and the teacher's profile. Nothing shows until a real
recording is published.

The teacher named for each lesson is a suggestion based on the subject on
their published profile. The owner confirms who films each one.

## Rules for every video

- **Length:** 5–7 minutes. One idea, taught properly.
- **Who is on camera:** the teacher only. No students, no student work with
  names, no classroom faces. Staff sign the existing on-camera consent form
  (`Marlbridge_OnCamera_Consent_Form.docx`, staff only) before filming.
- **Content:** only what is in the named syllabus topic. Worked examples are
  original — no reproduced past-paper questions or mark schemes.
- **Structure:** (1) 20 seconds: what you will be able to do; (2) the idea,
  with one clear diagram or board sketch; (3) one worked example, step by step;
  (4) the two most common mistakes; (5) what to practise next (say the page
  name, e.g. "the 0620 diagnostic on marlbridge.com").
- **Picture and sound:** landscape 1080p, a clip-on microphone, a plain
  background, writing large enough to read on a phone.
- **Captions:** upload the checked transcript to YouTube as the caption track;
  do not rely on auto-captions. Set `captionsChecked: true` only then.
- **Upload:** YouTube channel, **unlisted** first. A second subject teacher
  watches it and checks the content. Then make it public and add the file.

## The five lessons

| # | Course | Syllabus topic (from the site's syllabus data) | Lesson | Suggested teacher | Link it to |
|---|---|---|---|---|---|
| 1 | Cambridge IGCSE Chemistry 0620 | 3 Stoichiometry | Moles, mass and Mr: the one relationship behind most calculations | Nouman Ahmed | `formulae-equations-and-the-mole`, `formulae-equations-and-the-mole-practice`; practice link `/practice/0620/diagnostic/core/` |
| 2 | Cambridge IGCSE Mathematics 0580 | 2 Algebra and graphs (C2.7 sequences) | Finding the nth term of a linear sequence | Muhammad Ghazali Siddiqui or Arslan Tanvir | `igcse-mathematics-algebra-and-graphs`, `igcse-mathematics-algebra-and-graphs-practice`; practice link `/practice/0580/` |
| 3 | Cambridge AS & A Level Chemistry 9701 | 7 Equilibria (AS) | Brønsted–Lowry acids and conjugate pairs | Nouman Ahmed | `as-chem-acids-bases-revision-notes`, `as-chem-acids-bases-practice`; practice link `/practice/9701/diagnostic/as/` |
| 4 | Cambridge AS & A Level Physics 9702 | 2 Kinematics (AS) | Choosing and using the equations of uniformly accelerated motion | Iftikhar Azeemi | `as-physics-kinematics-equations-of-motion`, `as-physics-kinematics-practice`; practice link `/practice/9702/diagnostic/as/` |
| 5 | Cambridge AS & A Level Business 9609 | Business and its environment (AS) | Stakeholders and conflicting objectives, with one worked case | Salman Ahmad or Asif Iqbal | `a-level-business-business-and-its-environment`, `a-business-environment-practice` |

## Connecting a finished video to the site

Create `src/content/videos/<short-name>.md` (copy `example-lesson-draft.md`):

```yaml
title: "Moles, mass and Mr (Cambridge IGCSE Chemistry 0620)"
summary: "One or two sentences on what the lesson teaches."
teacher: nouman-ahmed            # author slug
subject: chemistry               # subjects collection id
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0620"]
topics: ["stoichiometry"]        # topic slug from syllabus-topics.ts
youtubeId: "XXXXXXXXXXX"         # the 11 characters after watch?v=
durationSeconds: 390
uploadDate: 2026-10-01
captionsChecked: true
relatedResources: ["formulae-equations-and-the-mole"]
practiceLinks:
  - label: "0620 10-minute diagnostic"
    href: "/practice/0620/diagnostic/core/"
publicationState: published
```

The body of the file is the transcript. Run `npm run build`: the video then
appears on the related resources, the 0620 hub's tuition section and the
teacher's profile, with VideoObject structured data.
