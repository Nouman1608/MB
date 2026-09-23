# Student stories and sample lessons: template and asset list — D-286

Prepared 2026-09-23 (PKT). Marlbridge holds no consented student story of its
own yet (`src/data/outcomes.ts` is empty on purpose, and the homepage block
renders nothing). Learners Academy's results and testimonials are published
separately and always labelled as Learners Academy's (`AcademyResults`,
and the 9609 tuition section). The two are never merged or counted together.

## Fields (one story = one entry in `OUTCOMES`)

| Field | Rule |
|---|---|
| `organisation` | `marlbridge` or `learners-academy`. Only `marlbridge` stories appear in the "student progress" block. |
| `attribution` | First name and initial at most, exactly as the family agreed. Never a school name or photo of a minor. |
| `course` | Board, qualification, subject and code, e.g. "Cambridge IGCSE Mathematics (0580)". |
| `startingPoint` | The original difficulty, in the student's, parent's or teacher's documented words (e.g. a mock grade on file). |
| `teachingApproach` | Format and focus, as recorded (e.g. "one-to-one, twice a week, focused on algebra"). |
| `timeframe` | Only if documented (enrolment dates). Omit otherwise. |
| `support` | What was provided. |
| `outcome` | Exactly what can be evidenced, e.g. "A in the June 2026 series". No "improved by two grades" unless both grades are on file. |
| `outcomeEvidence` | What was seen and by whom, e.g. "Statement of Results seen by the owner on 2026-08-14". |
| `quote` | Only with written permission for that exact wording; `by: student` or `parent`. |
| `year` | Exam series year. |
| `consentOnFile` | `true` only when the person setting it has seen the signed consent. For under-18s, a parent or guardian signs. |

## Assets to collect for each story

1. Signed consent covering: publication on marlbridge.com, the exact wording
   used, the attribution form (first name + initial), and — for minors — a
   parent or guardian's signature.
2. Evidence of the outcome (Statement of Results or school report), kept
   offline, not in the repository.
3. The starting point, if a before-and-after is described (earlier grade or
   assessment on file).
4. The teacher's note on the approach and duration.

## Sample lessons

A sample lesson is a teaching video (see `teacher-video-filming-brief.md`).
Classes with students must not be recorded for publication unless every
student and, for minors, a parent has consented in writing; the simplest route
is teacher-only lessons recorded for the purpose.
