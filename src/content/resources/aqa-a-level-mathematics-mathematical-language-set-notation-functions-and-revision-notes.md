---
title: "AQA A-level Mathematics: Language, Sets, Functions and Critiquing Arguments (7357) -- Revision Notes"
seoTitle: "AQA A-level Maths OT1 Sets and Functions Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Mathematical Language, Set Notation, Functions and Critiquing Arguments"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 6
syllabusTopics:
  - qualification: "a-level"
    topic: "overarching-themes-aqa-alevel-maths"
    subtopic: "ot1-mathematical-argument-language-and-proof-aqa-alevel-maths"
description: "Condensed AQA A-level Maths 7357 OT1 revision notes: key terms, set symbols, domain and range, inverse and composite functions, and flawed arguments."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense overarching theme OT1.1 to OT1.5 of the AQA 7357 A-level Mathematics specification (version 1.3), including the set and function notation in Appendix A. The [study guide](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and/) has the full explanations and worked examples. Test yourself with the [practice questions](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and-practice/).

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [diagnostics](/diagnostics/) (free, 10 minutes)

## 1. Language and syntax (OT1.1, OT1.2)

| Word | One-line meaning | Example in 5x³ − 2x + 9 |
|---|---|---|
| Term | Piece added or subtracted | 5x³, −2x, 9 |
| Coefficient | Number multiplying a variable | 5 and −2 |
| Constant | Fixed number | 9 |
| Variable | Letter that can change | x |
| Index | Power | 3 |
| Expression | No equals sign | 5x³ − 2x + 9 |
| Equation | True only for some values | 5x³ − 2x + 9 = 0 |
| Identity | True for all values, uses ≡ | (x + 2)² − 1 ≡ x² + 4x + 3 |
| Function | One output for each input | f(x) = 5x³ − 2x + 9 |

| Symbol | Read as | Check |
|---|---|---|
| ⇒ | implies | Does the left side force the right? |
| ⇐ | is implied by | Does the right side force the left? |
| ⇔ | if and only if | Both directions must be true |
| ≡ | is identical to | Equal for every x |
| ∴ or "so" | therefore | Next line follows from the last |

**Method for an identity: compare coefficients.**

1. Expand the side with brackets.
2. Match the coefficient of each power of x, then the constant.
3. Solve the resulting simple equations.
4. Check by expanding your answer.

Quick reminder: 3(x − 1)² + 5 ≡ 3x² − 6x + 8, so matching 3x² − 6x + 8 to a(x + b)² + c gives a = 3, b = −1, c = 5.

## 2. Set notation (OT1.3)

| Symbol | Meaning |
|---|---|
| x ∈ A, x ∉ A | x is, or is not, an element of A |
| A ⊆ B | A is a subset of B (equality allowed) |
| A ⊂ B | A is a proper subset of B |
| {x: …} | the set of all x such that … |
| n(A) | number of elements in A |
| ∅ | empty set |
| A′ | complement of A |
| A ∪ B, A ∩ B | union, intersection |
| ℕ, ℤ, ℤ⁺, ℤ⁺₀ | natural numbers {1, 2, 3, …}, integers, positive integers, non-negative integers |
| (x, y) | the ordered pair x, y |
| ℚ, ℝ | rational numbers, real numbers |
| [a, b], (a, b) | closed interval, open interval of real numbers |
| [a, b), (a, b] | half-open intervals |

**Worked reminder.** Let the universal set be the integers from 1 to 12, with A = multiples of 3 and B = even numbers.

```
A = {3, 6, 9, 12}        B = {2, 4, 6, 8, 10, 12}
A ∩ B = {6, 12}          A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12}
n(A ∪ B) = 8             (A ∪ B)′ = {1, 5, 7, 11}
```

Check: n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 4 + 6 − 2 = 8.

**Inequality solutions.** "And" means intersection, "or" means union.

| Inequality | Solution | Set notation |
|---|---|---|
| x² − 9x + 14 ≤ 0 | 2 ≤ x ≤ 7 | {x: 2 ≤ x ≤ 7} or [2, 7] |
| \|x − 3\| > 2 | x < 1 or x > 5 | {x: x < 1} ∪ {x: x > 5} |

**Probability notation.** Events are sets, so P(A ∪ B) = P(A) + P(B) − P(A ∩ B) and P(A′) = 1 − P(A). With P(A) = 1/2, P(B) = 7/20 and P(A ∩ B) = 3/20:

```
P(A ∪ B) = 1/2 + 7/20 − 3/20 = 14/20 = 7/10
P(A ∪ B)′ = 3/10
P(A ∩ B′) = 1/2 − 3/20 = 7/20
```

## 3. Functions (OT1.4)

- A **function** gives exactly one output for every input in its **domain**. The set of outputs is the **range**.
- Notation: f(x) is the value at x. f: x ↦ y means f maps x to y. f⁻¹ is the inverse. gf(x) means g(f(x)).
- **One-one:** each output comes from one input. **Many-one:** two inputs can give the same output. Only one-one functions have inverses.
- **Domain rules:** no division by zero, no square root of a negative.

**Method for the range.**

1. Write the domain.
2. Sketch the graph or complete the square.
3. Find the turning point, asymptotes and the values at the ends of the domain.
4. State the range as an inequality in f(x).

**Method for the inverse.**

1. Set y equal to f(x).
2. Make x the subject.
3. Swap the letter y for x to obtain f⁻¹(x).
4. Give f⁻¹ the domain that matches the outputs of f.

**Worked reminder.** h(x) = √(x + 4) − 1, x ≥ −4.

```
h(−4) = −1, h is increasing, so range: h(x) ≥ −1
y = √(x + 4) − 1 ⇒ (y + 1)² = x + 4 ⇒ x = (y + 1)² − 4
h⁻¹(x) = (x + 1)² − 4 = x² + 2x − 3,  domain x ≥ −1
```

The domain restriction on h⁻¹ matters. Without it, x² + 2x − 3 is not the inverse of h.

**Composite functions: order matters.** With k(x) = 3x + 4 and m(x) = x²:

```
km(x) = k(m(x)) = 3x² + 4
mk(x) = m(k(x)) = (3x + 4)² = 9x² + 24x + 16
```

These are different functions. The inner function acts first and is written nearest x.

## 4. Critiquing arguments (OT1.5)

| Fault | What is wrong | Fix |
|---|---|---|
| Proof by example | Cases do not cover all values | Algebraic proof, or one counter-example to disprove |
| Dividing by an expression | May be zero (lost root) or negative (flips inequality) | Factorise, or split into cases |
| Squaring both sides | Can add a root that fails the original | Test each answer in the original |
| Converse used | A ⇒ B does not give B ⇒ A | Check each direction |
| Gap in logic | Step not justified | State the reason for each step |

**Reminder 1.** Claim: 2ⁿ > n² for every positive integer n. Check n = 1 (2 > 1, true), n = 2 (4 > 4, false). Counter-example n = 2 disproves it. (Also n = 3 gives 8 < 9.)

**Reminder 2.** "x² = 7x, so x = 7." Cancelling x loses the solution x = 0. Correct: x(x − 7) = 0, so x = 0 or x = 7.

**Reminder 3.** To prove the difference between consecutive squares is odd: (n + 1)² − n² = 2n + 1, which is odd for every integer n.

When you critique, name the first faulty line, say why it fails, and show a correct version or a counter-example.

## Must-know distinctions

| Pair | Difference |
|---|---|
| Equation and identity | An equation has particular solutions; an identity holds for every value |
| Range and domain | Domain is the allowed inputs; range is the outputs that result |
| ⊆ and ⊂ | ⊆ allows the sets to be equal; ⊂ does not |
| ∪ and ∩ | Union is "in at least one set" (or); intersection is "in both" (and) |
| A′ and ∅ | A′ is everything outside A; ∅ is the set with no elements |
| km and mk | Different functions in general: the inner function acts first |
| Counter-example and proof | One counter-example disproves; no number of examples proves |

**Method for turning an inequality into set notation.**

1. Solve the inequality and sketch if it is quadratic.
2. Decide whether the answer is one block (and) or two pieces (or).
3. Write one block as {x: a < x < b}, or as an interval. Write two pieces joined by ∪.
4. Check strict and non-strict ends against the original sign.

## Quick self-test

1. In 4x² − 3x + 7, state the coefficient of x and the constant term.
2. Is x² − 1 = (x − 1)(x + 1) an equation or an identity? Which symbol could replace "="?
3. Write {x ∈ ℝ: −1 < x ≤ 6} as an interval.
4. Let ℰ = {1, 2, …, 10}, A = {2, 4, 6, 8, 10} and B = {1, 2, 3, 4, 5}. Find A ∩ B, and n(A′ ∩ B′).
5. Is {3, 6} a subset or a proper subset of {3, 6, 9}? Which symbol do you use?
6. State the domain of f(x) = √(x − 8) + 2 and its range.
7. Find the range of g(x) = (x + 1)² − 4 for x ≥ 0.
8. Find f⁻¹ for f(x) = 2x − 7.
9. With k(x) = 3x + 4 and m(x) = x², find km(−1).
10. A student says "x² > 9, so x > 3". Give a counter-example and the correct solution set.

### Answers

1. Coefficient of x is −3, constant term is 7.
2. It is an identity (true for all x), so write ≡.
3. (−1, 6].
4. A ∩ B = {2, 4}. A ∪ B = {1, 2, 3, 4, 5, 6, 8, 10}, which has 8 elements, so (A ∪ B)′ = {7, 9} and n(A′ ∩ B′) = 2.
5. Proper subset, written {3, 6} ⊂ {3, 6, 9}.
6. Domain x ≥ 8, range f(x) ≥ 2.
7. g(0) = −3 and g increases for x ≥ 0, so the range is g(x) ≥ −3.
8. y = 2x − 7 gives x = (y + 7)/2, so f⁻¹(x) = (x + 7)/2.
9. m(−1) = 1, then k(1) = 7, so km(−1) = 7.
10. x = −4 gives 16 > 9 but is not greater than 3. Correct solution: {x: x < −3} ∪ {x: x > 3}.

## Where marks are usually lost

- Writing "or" as "and" when giving two separate ranges of x.
- Leaving the domain off an inverse function.
- Stating a range from the formula without testing the ends of a restricted domain.
- Using = in place of ≡ when asked to show an identity, or ⇔ for a one-way step.
- Treating a few checked values as a proof.
- Cancelling a factor that could be zero, and losing a solution.
- Squaring an equation and not testing the answers in the original.
- Composing functions in the wrong order.
- Giving a set answer without the braces or brackets that show what is included.

## Official syllabus

Source: the AQA A-level Mathematics 7357 specification, first teaching 2017, version 1.3. Parts used: OT1 (section 3.1.1), content items B5 and B8, and Appendix A (sections 6.1, 6.4 and 6.11).
