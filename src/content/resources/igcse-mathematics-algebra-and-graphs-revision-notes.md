---
title: "IGCSE Mathematics: Algebra and Graphs — Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "For examination in 2025, 2026 and 2027"
order: 2
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "introduction-to-algebra-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "algebraic-manipulation-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "algebraic-fractions-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "indices-ii-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "equations-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "inequalities-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "sequences-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "proportion-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "graphs-in-practical-situations-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "graphs-of-functions-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "sketching-curves-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "differentiation-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "functions-cambridge-igcse-maths"
description: "Condensed recall notes on algebraic manipulation, equations, inequalities, sequences and graphs for Cambridge IGCSE Mathematics 0580 Topic 2."
author: "marlbridge-academic-team"
publishedDate: 2026-08-29
updatedDate: 2026-09-27
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Algebra and Graphs study guide](/resources/igcse-mathematics-algebra-and-graphs/).

## Letters and substitution

A letter stands for a number that can vary, a **generalised number**. If a pen costs p cents and a ruler costs r cents, 3 pens and 2 rulers cost 3p + 2r cents, whatever the prices are. If n is any integer, 2n is always even and 2n + 1 is always odd.

To **substitute**, replace each letter with its value, using brackets around negative numbers, then follow the order of operations:

```
v = u + at   with u = 12, a = -3, t = 5:   v = 12 + (-3)(5) = 12 - 15 = -3
```

## Manipulation toolkit

| Skill | Rule / reminder |
|---|---|
| Expanding | (a + b)(c + d) = ac + ad + bc + bd; (a + b)² = a² + 2ab + b² — **not** a² + b² |
| Factorising: common factor | Take out the highest common factor first, always |
| Factorising: difference of squares *(Extended)* | a² − b² = (a + b)(a − b) |
| Factorising: quadratic trinomial *(Extended)* | x² + (p+q)x + pq = (x + p)(x + q) |
| Indices | aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; a⁰ = 1; a⁻ⁿ = 1/aⁿ; *(Extended)* a^(1/n) = ⁿ√a |
| Algebraic fractions *(Extended)* | Find a common denominator before adding/subtracting, same as with numbers |

## Solving equations

- **Linear:** collect terms, then isolate the unknown — do the same operation to both sides.
- **Simultaneous (linear):** eliminate one variable by substitution or by adding/subtracting scaled equations.
- **Quadratic (Extended) — three methods, in order of preference:** solving a quadratic equation by any method is Extended-only content.
  1. **Factorise** first if it looks clean: x² + (p+q)x + pq = 0 → (x+p)(x+q) = 0 → x = −p or x = −q.
  2. **Quadratic formula**: x = (−b ± √(b² − 4ac)) / 2a, for ax² + bx + c = 0.
  3. **Completing the square**: rewrite as a(x + h)² + k, useful for finding a turning point as well as solving.
- **Changing the subject:** treat the formula like an equation — whatever you do to isolate the new subject, do to both sides, in the same order you'd solve an equation for it.
- **Simultaneous linear + quadratic** *(Extended)*: substitute the linear equation into the quadratic one, then solve the resulting quadratic.

## Inequalities

- On a number line: open circle (○) for < or >, filled circle (●) for ≤ or ≥.
- **Solving** a linear inequality *(Extended)*: solve exactly like an equation, **except**: multiplying or dividing both sides by a **negative** number reverses the inequality sign.
- **Two-variable regions** *(Extended)*: draw the boundary line (solid for ≤/≥, broken for </>), then shade the **unwanted** side, the syllabus convention unless the question says otherwise — test a point like (0,0) if unsure which side is wanted.

## Sequences

| Pattern in differences | Type | nth term shape |
|---|---|---|
| Constant 1st difference | Linear | an + b |
| Constant 2nd difference | Quadratic | an² + bn + c |
| Constant, nonzero 3rd difference | Cubic | an³ + bn² + cn + d |

Core asks for the nth term of linear, **simple** quadratic and **simple** cubic sequences (for example, 2, 5, 10, 17, ... has nth term n² + 1). *(Extended)* Extended covers general quadratic and cubic sequences, and adds exponential sequences and simple combinations of these types.

**Method:** write out the sequence, then the differences between consecutive terms, then the differences of those (2nd differences), then — if the 2nd differences are still changing — the differences of *those* (3rd differences), to identify the type before finding the nth term. A cubic sequence is identified by a constant 3rd difference, not by a roughly constant ratio between 2nd differences; for n³, for example, the 2nd differences are 12, 18, 24, ... (a changing ratio) while the 3rd differences are a constant 6.

## Graphs

- **Gradient of a straight line** = (change in y) / (change in x), read from any two points on the line.
- **Travel graphs:** gradient of a distance–time graph = speed; a flat section = stationary; a negative gradient = returning toward the start.
- **Reading vs sketching — keep separate:**
  - *Reading* a given graph: use the axes and scale as drawn to find gradients, intercepts, or approximate solutions where the graph crosses a line.
  - *Sketching* (Core C2.11, linear/quadratic): show only the general shape and key features (intercepts, symmetry, direction) — no need for a table of values or exact scale. (Extended E2.11 adds cubic, reciprocal and exponential shapes, and requires turning points and asymptotes too.)
- **Quadratic graph shape:** a positive x² coefficient gives a U-shape (minimum); a negative x² coefficient gives an n-shape (maximum).

## Extended-only: proportion, differentiation, functions

- **Direct proportion:** y ∝ x means y = kx. **Inverse proportion:** y ∝ 1/x means y = k/x. Find k from one known pair of values first, then use it to find the rest.
- **Differentiation:** for y = axⁿ, dy/dx = anxⁿ⁻¹. The gradient of a curve at a point equals the value of dy/dx at that point. A turning point occurs where dy/dx = 0; check the sign either side (or the second derivative) to tell a maximum from a minimum.
- **Function notation:** f(x) means "substitute x into the function f." fg(x) means "apply g first, then apply f to the result" — work from the inside out. f⁻¹(x) undoes f(x); to find it algebraically, write y = f(x), swap x and y, then solve for y.

## Common mistakes

- Writing (a + b)² = a² + b², forgetting the middle term 2ab.
- Sign errors when expanding brackets with a negative in front, e.g. −(x − 3) = −x + 3, not −x − 3.
- *(Extended)* Forgetting to reverse an inequality sign when multiplying/dividing by a negative number.
- Confusing "reading a graph" (use given axes) with "sketching a graph" (show shape and key features only).
- *(Extended)* In function composition, applying f and g in the wrong order — fg(x) means g first, then f.

## Examiner report insight

- **Incomplete factorisation:** removing a numeric common factor is often only the first step -- check what remains inside the bracket for a further structure, especially a difference of two squares (a^2 - b^2).
- **Elimination sign errors:** after scaling one equation to match coefficients, re-check whether the two equations should now be added or subtracted to eliminate the variable -- this is where most marks are lost, not in the scaling itself.

*Source: Cambridge International, 0580 Mathematics Principal Examiner Report, June 2024 series, Papers 11, 22 (verified 2026-09-02).*

## Self-test

1. *(Extended)* Factorise x² − 49.
2. Solve 3x − 7 = 11.
3. *(Extended)* Solve 4 − 2x ≥ 10, and represent it on a number line.
4. The first four terms of a sequence are 5, 8, 11, 14. Find the nth term.
5. *(Extended)* A straight line passes through (0, 3) and (4, 11). Find its gradient.

**Answers:** 1. (x + 7)(x − 7). 2. 3x = 18, x = 6. 3. −2x ≥ 6, x ≤ −3 (dividing by a negative reverses the sign) — filled circle at −3, shading to the left. 4. Constant difference of 3, so nth term = 3n + 2. 5. gradient = (11 − 3)/(4 − 0) = 8/4 = 2.
