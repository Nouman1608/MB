---
title: "Cambridge International AS & A Level Mathematics 9709: Pure Mathematics 2 Numerical Solution of Equations -- Revision Notes"
seoTitle: "9709 P2 Numerical Solution of Equations Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Pure Mathematics 2: Numerical solution of equations"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 42
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-2-cambridge-alevel"
    subtopic: "numerical-solution-of-equations-cambridge-2"
description: "Revision notes for Cambridge 9709 Paper 2 section 2.6: sign-change method, iteration steps, exact limits, a quick self-test and where marks are lost."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

These notes condense section 2.6, Numerical solution of equations, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). Section 2.6 belongs to Pure Mathematics 2 and is examined on Paper 2, which is taken only in the AS Level Pure Mathematics route (Paper 1 plus Paper 2). The same outcomes appear as section 3.6 for Paper 3. A scientific calculator is allowed, but unsupported calculator answers earn no marks.

For full explanations and longer worked examples, use the [study guide](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations/). Then test yourself with the [practice questions](/resources/a-level-maths-9709-pure-mathematics-2-numerical-solution-of-equations-practice/). Other links: the whole-paper [Pure Mathematics 2 revision notes](/resources/a-level-mathematics-pure-mathematics-2-revision-notes/), the [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/) (section 3.6 is the same content), the [A Level Mathematics hub](/boards/cambridge/a-level/mathematics/), the [printable 9709 checklist](/checklists/cambridge/a-level/mathematics/) and the free [AS diagnostic](/practice/9709/diagnostic/as/).

## The three outcomes in one line each

| 2.6 outcome | In short |
|---|---|
| Locate a root | Sketch graphs and/or find a sign change; e.g. name two consecutive integers either side of the root |
| Sequences of approximations | x₁, x₂, x₃, … converging to α; write xₙ → α |
| Iterative formula xₙ₊₁ = F(xₙ) | The limit satisfies α = F(α), so it is a root of x = F(x). Use it to reach a stated accuracy. It may fail to converge |

Not required: the condition for convergence. Required: recognising from the numbers that an iteration is not converging.

## Key facts

| Idea | What to remember |
|---|---|
| Sign-change rule | f continuous on [a, b] and f(a), f(b) of opposite sign ⇒ f(x) = 0 has a root between a and b |
| Graphs | Roots of f(x) = g(x) are the x-coordinates where y = f(x) and y = g(x) meet; the number of meeting points is the number of roots |
| Limit of an iteration | If xₙ → α then xₙ₊₁ → α too, so α = F(α) |
| From equation to formula | Rearrange to x = F(x), then write xₙ₊₁ = F(xₙ) |
| From formula to equation | Put xₙ₊₁ = xₙ = x and rearrange |
| Stopping rule | Stop when two successive iterates agree to the accuracy required |
| Accuracy check | α = c to 2 d.p. is confirmed by a sign change on [c − 0.005, c + 0.005] |

## Method: show that a root lies in an interval

```
1. Write the equation as f(x) = 0 (everything on one side).
2. Work out f(a) and f(b); write both values, to 2 or more s.f.
3. State: "sign change, and f is continuous, so a root lies between a and b".
```

**Worked reminder.** Show that 3 sin x = x has a root between 2 and 3.

```
f(x) = 3 sin x - x   (radians)
f(2) = 3 sin 2 - 2 =  0.7279   (positive)
f(3) = 3 sin 3 - 3 = -2.5766   (negative)
```

Sign change and f is continuous, so a root lies between 2 and 3. (It is about 2.2789.) In degree mode you would get nonsense, so check the mode first.

## Method: iterate to a prescribed accuracy

```
1. Write down x1 exactly as given.
2. Calculate each iterate using the stored value (Ans), not a rounded one.
3. Write each iterate to the places asked for (usually 4 d.p.).
4. Stop when two successive iterates round to the same value.
5. State the root to the accuracy asked for.
```

**Worked reminder.** The equation x² + 3 ln x = 10 can be rearranged as x = √(10 − 3 ln x). Use xₙ₊₁ = √(10 − 3 ln xₙ) with x₁ = 3 to find the root to 2 d.p.

```
x1 = 3
x2 = 2.5892
x3 = 2.6732
x4 = 2.6552
x5 = 2.6590
```

x₄ and x₅ both round to 2.66, so the root is **2.66** (2 d.p.). Check: with f(x) = x² + 3 ln x − 10, f(2.655) = −0.0216 and f(2.665) = 0.0428, a sign change.

## Method: find the exact limit

```
1. Replace x(n+1) and x(n) by alpha.
2. Rearrange to an equation with no fractions.
3. Solve exactly; reject any value the sequence cannot reach.
```

**Worked reminder.** xₙ₊₁ = 6/(xₙ + 1), x₁ = 1, converges to α.

```
alpha = 6/(alpha + 1)
alpha^2 + alpha - 6 = 0
(alpha + 3)(alpha - 2) = 0
```

All iterates are positive (1, 3, 1.5, 2.4, 1.7647, …), so α = −3 is rejected and **α = 2**.

## Must-know distinctions

- **Sign change vs root.** A sign change on an interval where f is continuous proves a root. No sign change does not prove there is no root: a touching root such as (x − 2)² = 0, or two roots close together, gives no sign change.
- **Discontinuity.** f(x) = 1/x changes sign between −1 and 1, but 1/x = 0 has no root. The graph jumps across an asymptote.
- **Converging vs diverging.** Iterates that settle down converge. Iterates that move away from the root, or oscillate with growing size, do not converge. A different rearrangement of the same equation may converge.
- **Monotonic vs oscillating convergence.** Iterates may approach from one side (a "staircase" of values) or jump either side of α on alternate steps. Both are fine.
- **Iterates vs answer.** Iterates are usually to 4 d.p.; the final answer is to the accuracy the question asks for, often 2 or 3 d.p.
- **Exact vs approximate.** "Find the exact value of α" needs algebra from α = F(α), not a calculator decimal.

## Quick self-test

1. Show that x³ + x − 3 = 0 has a root between 1 and 2.
2. Find the pair of consecutive integers between which the root of eˣ = 10 − x lies.
3. f(x) = 1/x. Does f(−1) < 0 < f(1) prove that f(x) = 0 has a root? Explain.
4. f(x) = (x − 2)². Is there a sign change on [1, 3]? Is there a root?
5. Using xₙ₊₁ = √(2xₙ + 5) with x₁ = 3, find x₂ and x₃ to 4 d.p.
6. The sequence in question 5 converges to α. Find the exact value of α.
7. Which cubic equation, in the form f(x) = 0, does xₙ₊₁ = (xₙ³ + 4)/5 solve?
8. The iteration xₙ₊₁ = (xₙ + 12)/(xₙ + 1), x₁ = 3, converges to β. Find β exactly.
9. Four successive iterates are 2.4136, 2.4178, 2.4165, 2.4169. State the root to 2 d.p. and justify.
10. Which interval would you test for a sign change to confirm that a root is 1.79 to 2 d.p.?
11. Rearrange eˣ = 4 − x² into the form x = F(x) using a logarithm.

### Answers

1. f(1) = 1 + 1 − 3 = −1, f(2) = 8 + 2 − 3 = 7. Sign change and f continuous, so a root lies in (1, 2).
2. f(x) = eˣ + x − 10: f(2) = −0.611, f(3) = 13.086. **Between 2 and 3** (the root is about 2.07).
3. **No.** f is not continuous at x = 0; its graph jumps across the asymptote, and 1/x is never 0.
4. f(1) = 1 and f(3) = 1, so **no sign change**, but **x = 2 is a root** (the graph touches the axis).
5. x₂ = √11 = **3.3166**, x₃ = √(2 × 3.3166 + 5) = **3.4108**.
6. α² = 2α + 5, so α² − 2α − 5 = 0 and α = 1 ± √6. The iterates are positive, so **α = 1 + √6**.
7. x = (x³ + 4)/5 ⇒ 5x = x³ + 4 ⇒ **x³ − 5x + 4 = 0**.
8. β(β + 1) = β + 12 ⇒ β² = 12 ⇒ β = ±2√3. Iterates are positive, so **β = 2√3**.
9. The last three iterates all round to 2.42, so the root is **2.42** (2 d.p.). The first, 2.4136, rounds to 2.41 and is ignored.
10. **[1.785, 1.795]**: a sign change there confirms the root rounds to 1.79.
11. eˣ = 4 − x² ⇒ **x = ln(4 − x²)** (valid for −2 < x < 2). Its positive root is about 1.058.

## Where marks are usually lost

- Values of f written without a statement that there is a sign change, or without "so a root lies between a and b".
- A sign change used across an asymptote, e.g. for a function containing 1/(x − k) or tan x.
- Only one iterate shown to round to the answer; two successive iterates must agree.
- Iterates retyped from their rounded values, so later iterates are slightly wrong.
- Iterates given to 3 d.p. when the question says "give each iteration to 4 decimal places".
- Calculator left in degree mode when F(x) involves sin, cos or tan.
- In "find the exact value of α", a decimal given instead of the exact form, or the wrong root of the quadratic kept.
- An iteration that is clearly not converging carried on for many lines instead of being described as failing to converge.
- In "show that α satisfies x = F(x)", steps skipped between the original equation and the given form.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus, for exams in 2026 and 2027 (Version 4), Cambridge University Press & Assessment. Topic 2, Pure Mathematics 2 (for Paper 2): section 2.6 Numerical solution of equations.
