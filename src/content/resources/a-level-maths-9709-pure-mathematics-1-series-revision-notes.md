---
title: "Cambridge International AS & A Level Mathematics 9709: Series -- Revision Notes"
seoTitle: "A Level Maths 9709 Series (Pure 1) Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Series"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 34
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "series-cambridge-alevel-maths"
description: "Revision notes for Cambridge 9709 Paper 1 Series: binomial terms, AP and GP formulae, convergence and a quick self-test with answers."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

For full explanations and longer worked examples, use the [Series study guide](/resources/a-level-maths-9709-pure-mathematics-1-series/). These notes condense section 1.6, Series, of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027. The section is Pure Mathematics 1 content, examined on Paper 1 (1 hour 50 minutes, 75 marks) and assumed knowledge for Papers 2 and 3. It is AS Level content. A scientific calculator is allowed, but unsupported calculator answers earn no marks.

When you have finished, try the [Series practice questions](/resources/a-level-maths-9709-pure-mathematics-1-series-practice/). The [9709 course hub](/boards/cambridge/a-level/mathematics/), the [printable checklist](/checklists/cambridge/a-level/mathematics/) and the free [9709 AS diagnostic](/practice/9709/diagnostic/as/) help you plan the rest of your AS revision.

## 1.6 at a glance

You must be able to:

- use the expansion of (a + b)ⁿ for a positive integer n, including the notations ⁿCᵣ and n!
- recognise arithmetic and geometric progressions
- use the nth-term and sum formulae for APs and GPs, including the three-term tests 2b = a + c (AP) and b² = ac (GP), in problems that may involve more than one progression
- use the convergence condition |r| < 1 and the formula for the sum to infinity.

Not required: the greatest term of an expansion and properties of the binomial coefficients. The expansion of (1 + x)ⁿ for rational n is Pure Mathematics 3 -- see the [Pure Mathematics 3 revision notes](/resources/a-level-maths-9709-pure-mathematics-3-revision-notes/).

## Formula table

All of these are in the MF19 formula list, but you should know them well enough to use without looking.

| Result | Formula | Condition |
|---|---|---|
| Binomial coefficient | ⁿCᵣ = n!/(r!(n − r)!) | 0 ≤ r ≤ n |
| Binomial expansion | (a + b)ⁿ = aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + … + bⁿ | n a positive integer |
| General binomial term | ⁿCᵣ aⁿ⁻ʳ bʳ | term number r + 1 |
| AP nth term | uₙ = a + (n − 1)d | |
| AP sum | Sₙ = ½n(a + l) = ½n{2a + (n − 1)d} | l = last term |
| GP nth term | uₙ = arⁿ⁻¹ | |
| GP sum | Sₙ = a(1 − rⁿ)/(1 − r) | r ≠ 1 |
| GP sum to infinity | S∞ = a/(1 − r) | \|r\| < 1 |

Useful values: 0! = 1, ⁿC₀ = ⁿCₙ = 1, ⁿC₁ = n, ⁿC₂ = n(n − 1)/2, and ⁿCᵣ = ⁿCₙ₋ᵣ.

## Method boxes

### Binomial: first few terms

1. Identify a, b and n. Put b in brackets, including its sign and coefficient.
2. Write each term as ⁿCᵣ × aⁿ⁻ʳ × bʳ for r = 0, 1, 2, …
3. Simplify the numbers last.
4. Check the order asked for: ascending powers means the constant first.

*Reminder.* (1 − x/2)⁸ = 1 + ⁸C₁(−x/2) + ⁸C₂(−x/2)² + … = **1 − 4x + 7x² + …**

### Binomial: one specific term

1. Write the general term with the powers of x combined into one index.
2. Set that index equal to the power you want (0 for "independent of x").
3. Solve for r. It must be a whole number from 0 to n; if it is not, that term does not exist.
4. Substitute r and evaluate.

### Binomial: product of two brackets

1. Expand the harder bracket only up to the power you need.
2. List every pair of terms whose powers add to the target power.
3. Add their coefficients, keeping signs.

### AP or GP problem

1. Translate each fact into an equation in a and d (or a and r).
2. Solve simultaneously. For an AP this is usually linear; for a GP, divide one equation by the other to remove a.
3. Answer exactly what is asked: a term, a sum, or a number of terms.
4. For "least n such that Sₙ > …", solve the quadratic, take the next whole number, and check both neighbours.

### Sum to infinity

1. Find r.
2. Check |r| < 1. Reject any value that fails.
3. Use S∞ = a/(1 − r).
4. If r is an expression in x, solve −1 < r < 1 for the range of x.

## Must-know distinctions

| AP | GP |
|---|---|
| Add d each time | Multiply by r each time |
| d = u₂ − u₁ | r = u₂ ÷ u₁ |
| a, b, c in AP ⇔ 2b = a + c | a, b, c in GP ⇔ b² = ac |
| Terms grow or fall linearly | Terms grow, shrink or alternate in sign |
| No sum to infinity (unless every term is 0) | Sum to infinity exists only if \|r\| < 1 |

Other distinctions that cost marks:

- **Term vs sum.** u₁₀ is one term; S₁₀ is ten terms added.
- **Coefficient vs term.** The coefficient of x² in 270x² is 270; the term is 270x².
- **Ascending vs descending.** Ascending starts with the lowest power of x.
- **Term number vs r.** The (r + 1)th term of (a + b)ⁿ uses ⁿCᵣ.
- **Strict inequality.** Convergence needs |r| < 1, not |r| ≤ 1: r = 1 or r = −1 gives no sum to infinity.

## Small worked reminders

*Three-term test.* If 2p, p + 9 and 5p are consecutive terms of an AP, then 2(p + 9) = 2p + 5p, so 2p + 18 = 7p and p = 3.6.

*GP from two terms.* If u₂ = 12 and u₅ = −96, then r³ = −96/12 = −8, so r = −2 and a = −6.

*Range for convergence.* The GP 5 + 5(x − 3) + 5(x − 3)² + … has r = x − 3, so it converges when −1 < x − 3 < 1, that is 2 < x < 4.

*Coefficient in a product.* In (3 + x)(1 − 2x)⁴, the bracket expands as 1 − 8x + 24x² + … The x term comes from 3 × (−8x) and x × 1, so the coefficient of x is −24 + 1 = −23.

*Least number of terms.* For the AP 2, 5, 8, …, Sₙ = ½n(3n + 1). Sₙ > 500 gives 3n² + n − 1000 > 0, with positive root about 18.1. Check S₁₈ = 495 and S₁₉ = 551, so 19 terms are needed.

*Two progressions.* An AP and a GP both have first term 5, and r ≠ 1. Their second terms are equal, and the third term of the GP equals the fourth term of the AP. Then 5r = 5 + d and 5r² = 5 + 3d. Substituting d = 5r − 5 gives r² − 3r + 2 = 0, so r = 1 or 2. Reject r = 1, so r = 2 and d = 5.

## Choosing the right formula

- Know the last term of an AP? Use Sₙ = ½n(a + l). It is shorter and less error-prone.
- Know a and d but not the last term? Use Sₙ = ½n{2a + (n − 1)d}.
- GP with r > 1? Use a(rⁿ − 1)/(r − 1) to keep the numbers positive. With r < 1, use a(1 − rⁿ)/(1 − r).
- Only two or three GP terms involved? Write the terms out (a + ar + ar²) instead of using Sₙ.
- Two facts about a GP, such as u₃ and u₆? Divide one equation by the other so a cancels and rⁿ is left.
- Asked for "the set of values" for convergence? Give a double inequality, not a single value.

## Quick self-test

1. Evaluate ⁷C₃.
2. Find the coefficient of x³ in (1 + 2x)⁶.
3. Find the term in x² in the expansion of (3 − x)⁵.
4. Is 12, −6, 3, −1.5, … an AP, a GP or neither? State d or r.
5. Find the 12th term of the AP 5, 9, 13, …
6. Find the sum of the first 20 terms of the AP 5, 9, 13, …
7. Find the 8th term of the GP 3, −6, 12, …
8. Find the sum of the first six terms of the GP 2, 6, 18, …
9. Show that the GP 12, 8, 16/3, … is convergent and find its sum to infinity.
10. The positive numbers x, 10, 25 are in geometric progression. Find x.
11. The numbers 3, y, 17 are in arithmetic progression. Find y.
12. For which values of x does the GP 1 + 3x + 9x² + … converge?

### Answers

1. 7!/(3! 4!) = **35**
2. ⁶C₃ × 2³ = 20 × 8 = **160**
3. ⁵C₂ × 3³ × (−x)² = 10 × 27x² = **270x²**
4. **GP**, r = −6/12 = **−½** (the differences are not constant).
5. 5 + 11 × 4 = **49**
6. ½ × 20 × (10 + 19 × 4) = 10 × 86 = **860**
7. 3 × (−2)⁷ = **−384**
8. 2(3⁶ − 1)/(3 − 1) = 3⁶ − 1 = **728**
9. r = 8/12 = 2/3 and |2/3| < 1, so it converges. S∞ = 12/(1 − 2/3) = **36**
10. 10² = 25x, so **x = 4**
11. 2y = 3 + 17, so **y = 10**
12. r = 3x, so |3x| < 1: **−1/3 < x < 1/3**

## Where marks are usually lost

- Not raising the coefficient inside b: (3x)² is 9x², not 3x².
- Dropping a negative sign on odd powers of a negative b, for example (−x)³ = −x³.
- Counting terms from r = 1, so the "third term" is worked out with ⁿC₃ instead of ⁿC₂.
- Solving a "term independent of x" problem without first combining the powers of x into one index, then picking the wrong r.
- Mixing up uₙ and Sₙ, especially when a question gives one of each.
- Writing arⁿ instead of arⁿ⁻¹, which shifts every term by one place.
- Quoting S∞ for a ratio with |r| ≥ 1, or failing to reject the non-convergent value of r when two are found.
- For "least number of terms", giving the decimal root or rounding down instead of taking the next integer.
- Losing the negative root when square-rooting r² or r⁴, so a valid progression with negative ratio is missed.
- On a "show that", jumping to the printed result without the intermediate algebra.

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027, Version 4, Cambridge Assessment International Education (part of Cambridge University Press & Assessment). Section 1.6, Series (Pure Mathematics 1, for Paper 1).
