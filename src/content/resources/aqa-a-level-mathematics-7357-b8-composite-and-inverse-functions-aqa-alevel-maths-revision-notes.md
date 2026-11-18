---
title: "AQA A-Level Mathematics (7357): Composite and inverse functions -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "B: Algebra and functions"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 3.08
syllabusTopics:
  - qualification: "a-level"
    topic: "b-algebra-and-functions-aqa-alevel-maths"
    subtopic: "b8-composite-and-inverse-functions-aqa-alevel-maths"
description: "Condensed AQA A-level Maths 7357 B8 notes on composite and inverse functions: domains, self-inverse functions, (gf)⁻¹, inverse graphs, self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense content statement **B8** of AQA A-level Mathematics (7357), Section B: Algebra and functions: "Understand and use composite functions; inverse functions and their graphs." Worked examples are in the [B8 composite and inverse functions study guide](/resources/aqa-a-level-mathematics-7357-b8-composite-and-inverse-functions-aqa-alevel-maths/), and exam-style questions are in the [B8 practice questions](/resources/aqa-a-level-mathematics-7357-b8-composite-and-inverse-functions-aqa-alevel-maths-practice/). The combined [graphs, composite and inverse functions revision notes](/resources/aqa-a-level-mathematics-graphs-of-functions-composite-functions-and-inverse-revision-notes/) cover the first steps.

## Key terms

| Term | Meaning |
|---|---|
| Domain | Allowed inputs of a function |
| Range | Outputs actually produced |
| One-one | Each output comes from exactly one input; needed for an inverse |
| Many-one | Some output comes from two or more inputs |
| gf(x) | g(f(x)): f acts first |
| ff(x) | f applied twice; sometimes written f²(x) |
| f⁻¹ | The inverse: f⁻¹f(x) = ff⁻¹(x) = x |
| Self-inverse | f⁻¹ = f, so ff(x) = x; graph symmetric in y = x |

## Composite functions

- **Forming gf(x):** replace every x in g by the whole expression f(x).
- **Order matters:** in general gf ≠ fg.
- **Domain of gf:** x must be in the domain of f, **and** f(x) must be in the domain of g.
- **Range of gf:** apply g to the range of f (restricted as above).
- **Domain from the steps, not the final formula:** ff(x) for f(x) = 1/(x + 1) simplifies to (x + 1)/(x + 2), but x = −1 and x = −2 are both excluded.

*Reminder.* f(x) = x − 3, g(x) = |x|: gf(x) = |x − 3| (V with vertex at x = 3); fg(x) = |x| − 3 (V with vertex at (0, −3)).

## Finding an unknown function

| Given | Missing | Method |
|---|---|---|
| f and fg(x) | inner g | Write f(g(x)) and make g(x) the subject |
| f and hf(x) | outer h | Let u = f(x), write x in terms of u, substitute |

*Reminder.* f(x) = x + 4 and hf(x) = x² + 8x + 20. With u = x + 4, x² + 8x + 20 = (x + 4)² + 4, so h(x) = x² + 4.

## Inverse functions

**Method**

1. Check f is one-one on its domain; restrict the domain if not.
2. Write y = f(x) and make x the subject.
3. Replace y with x to write f⁻¹(x).
4. Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f.

**Choosing the sign of a root:** when the domain of f is x ≥ k on one side of a turning point, take the sign that keeps f⁻¹(x) on that side.

**Inverse of a composite:** (gf)⁻¹ = f⁻¹g⁻¹. Undo the last step first.

**Self-inverse check:** find f⁻¹; if it equals f, the function is self-inverse. Common forms: k/x, c − x, (ax + b)/(cx − a).

## Inverse graphs

- Reflect y = f(x) in y = x.
- (a, b) on f becomes (b, a) on f⁻¹.
- Asymptote x = p becomes y = p; asymptote y = q becomes x = q.
- An increasing f meets f⁻¹ only on y = x: solve f(x) = x and keep roots in the domain.
- If f(x) = x has no real roots (for an increasing f), the graphs never meet.

## Exam traps

- Doing g first in gf.
- Missing an excluded value in the domain of ff.
- Writing f⁻¹(x) as 1/f(x).
- Taking (gf)⁻¹ as g⁻¹f⁻¹.
- Keeping both signs of a square root when inverting a restricted quadratic.
- Forgetting to state the domain of f⁻¹.
- Accepting a root of f(x) = x that is outside the domain of f.
- Saying "no inverse" without naming two inputs with the same output.

## Quick self-test

1. f(x) = 3x − 1 and g(x) = x². Find fg(2) and gf(2).
2. f(x) = √x, x ≥ 0, and g(x) = x − 5. Find the domain of fg.
3. f(x) = 2/(x − 3), x ≠ 3. Find ff(x) in simplest form and its domain.
4. f(x) = 3x + 2. Find g such that fg(x) = 6x − 7.
5. f(x) = x − 1. Find h such that hf(x) = x² − 2x + 3.
6. Show that f(x) = 6 − x is self-inverse.
7. f(x) = (x + 5)/(x − 1), x ≠ 1. Find f⁻¹(x).
8. f(x) = x + 2 and g(x) = 4x. Find (gf)⁻¹(x).
9. f(x) = (x + 1)² for x ≥ −1. Find f⁻¹(x) and its domain.
10. y = f(x) has asymptotes x = −2 and y = 5. State the asymptotes of y = f⁻¹(x).
11. f(x) = x² − 2 for x ≥ 0. Find where y = f(x) meets y = f⁻¹(x).
12. Explain why f(x) = x² − 4x, x ∈ ℝ, has no inverse.

### Answers

1. fg(2) = f(4) = **11**; gf(2) = g(5) = **25**.
2. fg(x) = √(x − 5), so **x ≥ 5**.
3. ff(x) = 2/(2/(x − 3) − 3) = 2(x − 3)/(2 − 3(x − 3)) = **(2x − 6)/(11 − 3x)**. Domain **x ≠ 3, x ≠ 11/3** (since f(11/3) = 3).
4. 3g(x) + 2 = 6x − 7, so **g(x) = 2x − 3**.
5. x² − 2x + 3 = (x − 1)² + 2, so **h(x) = x² + 2**.
6. y = 6 − x gives x = 6 − y, so f⁻¹(x) = 6 − x = f(x).
7. y(x − 1) = x + 5, so x(y − 1) = y + 5: **f⁻¹(x) = (x + 5)/(x − 1)**, x ≠ 1 (self-inverse).
8. gf(x) = 4x + 8, so **(gf)⁻¹(x) = x/4 − 2**; equivalently f⁻¹(g⁻¹(x)).
9. **f⁻¹(x) = √x − 1**, domain **x ≥ 0**.
10. **x = 5 and y = −2**.
11. x² − 2 = x gives (x − 2)(x + 1) = 0; x ≥ 0, so **(2, 2)** only.
12. It is many-one: for example f(0) = f(4) = 0.

## Official syllabus

AQA A-level Mathematics (7357) specification, first teaching 2017, Section B: Algebra and functions, content statement B8.
