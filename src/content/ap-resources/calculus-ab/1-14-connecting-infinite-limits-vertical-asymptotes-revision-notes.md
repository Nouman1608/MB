---
resourceId: "mb-ap-calcab-1.14-revision-notes"
title: "Connecting Infinite Limits and Vertical Asymptotes: Revision Notes (Calculus AB 1.14)"
description: "One-page recap of infinite limits: what = ∞ really means, the sign check for one-sided limits, holes versus vertical asymptotes, and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.14"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.14-study-guide"]
learningObjectives:
  - "Recall the limit-based definition of a vertical asymptote"
  - "Apply the sign check quickly and avoid the common errors with infinite limits"
skills: ["2", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.14-study-guide", "mb-ap-calcab-1.14-practice", "mb-ap-calcab-1.14-checklist"]
next: "mb-ap-calcab-1.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "lim (x → a) f(x) = ∞ means unbounded and positive near a. The limit still does not exist as a number."
  - "x = a is a vertical asymptote if at least one one-sided limit at a is +∞ or −∞."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)". **x → a⁻** is from the left; **x → a⁺** is from the right.

## Recap

- An **infinite limit** describes values that grow without bound near x = a. "= ∞" means large and positive; "= −∞" means large and negative.
- ∞ is not a number. A limit that equals ±∞ **does not exist**; the symbol says how it fails.
- Write a two-sided "lim (x → a) f(x) = ∞" only when **both** sides go to +∞ (or both to −∞). Otherwise give the one-sided limits.
- **Vertical asymptote:** x = a is one if at least one one-sided limit at a is ±∞.
- Justify it in words: "Because lim (x → a⁺) f(x) = ∞, x = a is a vertical asymptote."

## Key relationships

| Situation at x = a | What it tells you | Next step |
|---|---|---|
| Substitution gives a number, bottom ≠ 0 | Ordinary limit | Done |
| 0/0 | Not decided yet | Factor and cancel, then substitute again |
| 0/0, factor cancels, bottom now ≠ 0 | **Hole**, finite limit | Give the height of the hole |
| Nonzero/0 (before or after cancelling) | **Vertical asymptote** | Sign check on each side |
| (x − a) to an **odd** power in the bottom | Sign flips across a | One-sided limits are opposite |
| (x − a) to an **even** power in the bottom | Same sign on both sides | Two-sided ±∞ |

Standard infinite limits: lim (x → 0⁺) ln x = −∞; lim (x → π/2⁻) tan x = ∞ and lim (x → π/2⁺) tan x = −∞; lim (x → 0) 1/x² = ∞.

## Assumptions behind the method

- The sign check needs the top to tend to a **nonzero** number. If the top also tends to 0, simplify first.
- "Slightly left" and "slightly right" mean values close enough to a that no other zero of the top or bottom lies in between.
- Being undefined at a is not enough for an asymptote. You need an infinite limit (for example, x/ln x → 0 as x → 0⁺, so x = 0 is not an asymptote).

## Mistakes to avoid

1. **Calling every zero of the denominator an asymptote.** Cancel common factors first: some are holes.
2. **"Nonzero/0 = 0".** A fixed number over something tiny is huge.
3. **Guessing +∞.** Check the signs of the top and the bottom on each side.
4. **Writing "lim = ∞" when the sides disagree.** Use one-sided limits.
5. **Saying the limit "exists and equals ∞".** It does not exist; "= ∞" describes the way.
6. **Thinking both sides must be infinite.** One side is enough (ln x at 0).

## Quick self-check

1. Find lim (x → 2⁻) (x + 4)/(x − 2) and lim (x → 2⁺) (x + 4)/(x − 2). *(−∞ and +∞: the top tends to 6 and x − 2 changes sign at 2)*
2. Where does (x² − 4)/(x² + x − 6) have a hole, and where a vertical asymptote? *(It simplifies to (x + 2)/(x + 3) for x ≠ 2. Hole at (2, 4/5); vertical asymptote at x = −3)*
3. Find lim (x → −5) −1/(x + 5)². *(−∞: the bottom is positive on both sides and the top is −1)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-practice/).
