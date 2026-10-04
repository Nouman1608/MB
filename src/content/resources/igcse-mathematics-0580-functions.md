---
title: "Cambridge IGCSE Mathematics 0580: Functions -- Study Guide"
seoTitle: "IGCSE Maths 0580 Functions Study Guide (E2.13)"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Functions"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "functions-cambridge-igcse-maths"
description: "Study guide for Cambridge IGCSE Mathematics 0580 section E2.13: function notation, domain and range, inverse and composite functions, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-04
featured: false
---

This study guide teaches section 2.13, Functions, of the Cambridge IGCSE Mathematics 0580 syllabus for exams in 2025, 2026 and 2027. The Core column of the syllabus lists C2.13 as "Extended content only", so everything on this page is **Extended only**. Extended candidates take Paper 2 (non-calculator, 2 hours) and Paper 4 (calculator, 2 hours), and functions questions can appear on either, so every method here is shown by hand.

Use it with the [course hub](/boards/cambridge/igcse/mathematics/) and the [printable checklist for syllabus 0580](/checklists/cambridge/igcse/mathematics/). The wider topic is taught in the [algebra and graphs study guide](/resources/igcse-mathematics-algebra-and-graphs/) and condensed in the [algebra and graphs revision notes](/resources/igcse-mathematics-algebra-and-graphs-revision-notes/). For exam-style questions on functions, use the [algebra and graphs practice questions](/resources/igcse-mathematics-algebra-and-graphs-practice/) and the [Extended algebra practice set](/resources/igcse-mathematics-algebra-extended-practice/). The worked examples below use different functions from those pages, so you can work through both.

## What this subtopic covers

| 0580 outcome | What you must be able to do | Tier |
|---|---|---|
| E2.13.1 | Understand functions, domain and range, and use function notation such as f(x) = 3x − 5 | Extended only |
| E2.13.2 | Understand and find inverse functions f⁻¹(x) | Extended only |
| E2.13.3 | Form composite functions, defined by gf(x) = g(f(x)) | Extended only |

The syllabus notes add three points that shape the questions you will meet:

- Functions may be linear, fractional or quadratic, for example 3(x + 4)/5 or 2x² + 3.
- You may be asked to give a composite function "as a fraction in its simplest form".
- You are **not** expected to find the domains and ranges of composite functions, and the topic may include mapping diagrams.

## E2.13.1 Functions, domain and range

### What a function is

A function is a rule that takes each input and gives exactly **one** output. The rule f(x) = 3x − 5 means "multiply the input by 3, then subtract 5". The letter in brackets is just a placeholder for the input.

- The **domain** is the set of inputs the function is allowed to take.
- The **range** is the set of outputs the function actually produces from that domain.

### Function notation

f(4) means "the output when the input is 4". So for f(x) = 3x − 5, f(4) = 3 × 4 − 5 = 7.

You can put an expression in the brackets as well as a number. Whatever is in the brackets replaces **every** x in the rule. So f(2a) = 3(2a) − 5 = 6a − 5.

"Solve f(x) = 10" is different: here you know the **output** and must find the input. Write the rule equal to 10 and solve.

### Worked example 1: using function notation

f(x) = 7 − 2x.

(a) Find f(−3).
(b) Solve f(x) = −5.
(c) Find and simplify f(a + 2).

```
(a) f(-3) = 7 - 2(-3)
          = 7 + 6
          = 13

(b) 7 - 2x = -5
       -2x = -12
         x = 6

(c) f(a + 2) = 7 - 2(a + 2)
             = 7 - 2a - 4
             = 3 - 2a
```

In (c), the bracket is essential. Writing 7 − 2a + 2 is the most common slip in this kind of question.

### Mapping diagrams, domain and range

A mapping diagram has two ovals: inputs (domain) on the left, outputs (range) on the right, with an arrow from each input to its output.

### Worked example 2: range from a given domain

h(x) = x² − 4 with domain {−2, −1, 0, 1, 3}. Find the range.

Work out the output for each input:

| x | −2 | −1 | 0 | 1 | 3 |
|---|---|---|---|---|---|
| h(x) | 0 | −3 | −4 | −3 | 5 |

The range is the set of different outputs: **{−4, −3, 0, 5}**. You list −3 once, even though two inputs map to it.

In a mapping diagram, both −1 and 1 would have arrows to −3. That is allowed: two inputs can share an output. What a function never does is send **one** input to two different outputs.

### Domain and range for all values of x

When no domain is given, take the domain to be all real numbers, unless a value would make the rule impossible.

- For g(x) = 3x² + 1, x² is never negative, so the smallest output is g(0) = 1. The range is **g(x) ≥ 1**.
- For k(x) = 5/(x − 4), the input 4 would mean dividing by zero, so **x = 4 is not in the domain**. A question may say "x ≠ 4" for this reason.

Range is about outputs, so write it using f(x) (or y), not x. "Range x ≥ 1" for g above loses the mark.

## E2.13.2 Inverse functions

### What the inverse does

The inverse function f⁻¹ undoes f. If f sends 5 to 1, then f⁻¹ sends 1 back to 5. On a mapping diagram, the inverse simply reverses every arrow, so the domain and range swap.

The ⁻¹ is notation, not a power: f⁻¹(x) does **not** mean 1/f(x).

### Method: finding f⁻¹(x)

1. Write y = f(x).
2. Swap x and y.
3. Rearrange to make y the subject.
4. Write the result as f⁻¹(x) = ...

This is the same rearranging you use for changing the subject of a formula, so work carefully with brackets and fractions.

### Worked example 3: a fractional linear function

f(x) = (2x − 7)/3. Find f⁻¹(x).

```
      y = (2x - 7)/3
swap: x = (2y - 7)/3
     3x = 2y - 7
3x + 7  = 2y
      y = (3x + 7)/2

f⁻¹(x) = (3x + 7)/2
```

**Check:** f(5) = (10 − 7)/3 = 1, and f⁻¹(1) = (3 + 7)/2 = 5. The inverse takes 1 back to 5, so the answer is consistent. A quick numerical check like this takes seconds and catches sign errors.

### Worked example 4: x in the denominator

g(x) = 4/(x − 1), x ≠ 1. Find g⁻¹(x).

```
       y = 4/(x - 1)
 swap: x = 4/(y - 1)
x(y - 1) = 4
  y - 1  = 4/x
      y  = 4/x + 1

g⁻¹(x) = 4/x + 1   (or (x + 4)/x)
```

**Check:** g(3) = 4/2 = 2, and g⁻¹(2) = 4/2 + 1 = 3. Correct.

Either form of the answer is fine unless the question asks for a particular form.

### Worked example 5: a cubic

h(x) = x³ + 5. Find h⁻¹(x).

```
swap: x = y³ + 5
  x - 5 = y³
      y = ∛(x - 5)

h⁻¹(x) = ∛(x - 5)
```

**Check:** h(2) = 13, and h⁻¹(13) = ∛8 = 2.

### Finding one value of f⁻¹ without the full inverse

If a question only asks for f⁻¹(17) where f(x) = 5x + 2, you do not need f⁻¹(x) at all. f⁻¹(17) is the input that gives 17, so solve 5x + 2 = 17, giving **x = 3**. Finding the full inverse and substituting also works, but it gives you more chances to slip.

## E2.13.3 Composite functions

### Order matters

The syllabus defines gf(x) = g(f(x)). Read it from the inside out:

- **gf(x): apply f first, then g.**
- **fg(x): apply g first, then f.**

The function written nearest to x acts first. In general fg(x) and gf(x) are different, as the next example shows.

### Worked example 6: numerical and algebraic composites

f(x) = 3x − 1 and g(x) = x² + 4.

(a) Find fg(2) and gf(2).
(b) Find fg(x) and gf(x).
(c) Find ff(x).

```
(a) fg(2): g(2) = 4 + 4 = 8, then f(8) = 24 - 1 = 23
    gf(2): f(2) = 6 - 1 = 5, then g(5) = 25 + 4 = 29

(b) fg(x) = f(x² + 4)
          = 3(x² + 4) - 1
          = 3x² + 11

    gf(x) = g(3x - 1)
          = (3x - 1)² + 4
          = 9x² - 6x + 1 + 4
          = 9x² - 6x + 5

(c) ff(x) = f(3x - 1)
          = 3(3x - 1) - 1
          = 9x - 4
```

You can check (b) with (a): 3(2)² + 11 = 23 and 9(4) − 12 + 5 = 29. Both match.

For fg(x), put the **whole** of g(x) in place of x in f, inside a bracket. For gf(x), the whole of f(x) is squared, not just the 3x.

### Worked example 7: a fraction in its simplest form

f(x) = 6/(x + 1) and g(x) = (2x − 1)². Find fg(x), giving your answer as a fraction in its simplest form.

```
fg(x) = f((2x - 1)²)
      = 6 / ((2x - 1)² + 1)
      = 6 / (4x² - 4x + 1 + 1)
      = 6 / (4x² - 4x + 2)
      = 3 / (2x² - 2x + 1)
```

The last step divides the numerator and every term of the denominator by 2. Stopping at 6/(4x² − 4x + 2) would not be "simplest form".

**Check with x = 2:** g(2) = 9, f(9) = 6/10 = 3/5, and 3/(8 − 4 + 1) = 3/5. Correct.

Remember the syllabus note: you will not be asked for the domain or range of a composite like this.

### Worked example 8: solving an equation with a composite

f(x) = 2x + 3 and g(x) = x² − 1. Solve gf(x) = 15.

```
gf(x) = (2x + 3)² - 1

(2x + 3)² - 1 = 15
     (2x + 3)² = 16
        2x + 3 = 4   or   2x + 3 = -4
            x = 1/2  or       x = -7/2
```

Taking the square root of both sides needs **both** signs. Expanding to 4x² + 12x − 8 = 0 and factorising also works, but the square-root route is quicker on a non-calculator paper.

### Worked example 9: inverse and function together

f(x) = 2x + 3. Solve f⁻¹(x) = f(x).

```
f⁻¹(x) = (x - 3)/2

(x - 3)/2 = 2x + 3
    x - 3 = 4x + 6
      -3x = 9
        x = -3
```

**Check:** f(−3) = −3, and f⁻¹(−3) = (−6)/2 = −3. Both sides equal −3.

## Doing this on Paper 2 and Paper 4

Paper 2 does not allow a calculator, so every function value, inverse and composite must be worked out by hand. Keep fractions as fractions (x = −7/2, not −3.5 unless asked). On Paper 4 a calculator is required, but it only helps with arithmetic: the algebra in an inverse or composite still has to be written out. If an answer is not exact on Paper 4, give it to 3 significant figures, as the syllabus requires for non-exact answers.

## Common errors

- **Composite order reversed.** fg(x) means g first. Say "f of g of x" aloud before you start.
- **Missing brackets in a substitution.** f(a + 2) for f(x) = 7 − 2x is 7 − 2(a + 2), not 7 − 2a + 2.
- **Squaring only part of an expression.** For g(3x − 1) with g(x) = x² + 4, the whole of (3x − 1) is squared.
- **Treating f⁻¹(x) as 1/f(x).** The inverse undoes f; it is not a reciprocal.
- **Not swapping x and y.** Rearranging y = f(x) for x and stopping gives the inverse in terms of y. Swap, then rearrange, so the answer is in terms of x.
- **Range written in terms of x.** The range describes outputs: write g(x) ≥ 1, not x ≥ 1.
- **Repeated values in a range.** List each output once.
- **Losing the negative root** when solving something like (2x + 3)² = 16.
- **Fractions not fully simplified** when the question asks for simplest form.

## Check yourself

Try these, then look at the answers.

1. p(x) = 5 − 3x. Find p(−2), and solve p(x) = −10.
2. q(x) = (x + 6)/4. Find q⁻¹(x).
3. r(x) = 10 − x and s(x) = x². Find rs(3) and sr(3).
4. t(x) = 2/(x − 5), x ≠ 5. Find t⁻¹(x).

**Answers:** 1. p(−2) = 11; x = 5. 2. q⁻¹(x) = 4x − 6. 3. rs(3) = r(9) = 1; sr(3) = s(7) = 49. 4. t⁻¹(x) = 2/x + 5.

## Next steps

- Recap the whole topic with the [algebra and graphs revision notes](/resources/igcse-mathematics-algebra-and-graphs-revision-notes/).
- Practise exam-style function questions in the [Extended algebra practice set](/resources/igcse-mathematics-algebra-extended-practice/) and the [algebra and graphs practice questions](/resources/igcse-mathematics-algebra-and-graphs-practice/).
- Find your gaps across the course with the free diagnostic for syllabus 0580: [Core](/practice/0580/diagnostic/core/) or [Extended](/practice/0580/diagnostic/extended/).
- Tick off E2.13 on the [printable checklist](/checklists/cambridge/igcse/mathematics/) and see other resources for syllabus 0580 on the [course hub](/boards/cambridge/igcse/mathematics/).

## Official syllabus

Cambridge IGCSE Mathematics 0580 syllabus for exams in 2025, 2026 and 2027 (Version 3, published May 2024), Cambridge International. Topic 2, Algebra and graphs, section E2.13 Functions (C2.13 is Extended content only).
