---
title: "AQA A-level Mathematics: Mathematical Language, Set Notation, Functions and Critiquing Arguments (7357)"
seoTitle: "AQA A-level Maths OT1: Sets, Functions, Arguments"
resourceType: "study-guides"
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
description: "Study guide to AQA A-level Maths 7357 OT1: precise language, set notation, functions with domain and range, and spotting flaws in arguments."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the AQA 7357 A-level Mathematics specification (version 1.3, dated 31 January 2018) and covers overarching theme OT1.1 to OT1.5. It teaches the language of mathematics, the set notation in Appendix A (applied to inequalities and probability), the definition of a function with its domain and range, and how to critique an argument. OT1 applies to the whole course, so expect these skills to appear inside questions on any topic. The shorter [overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/) gives a broad overview; this page goes deeper on the parts it leaves out.

Quick links: [course hub](/boards/aqa/a-level/mathematics/) | [checklist](/checklists/aqa/a-level/mathematics/) | [revision notes](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and-revision-notes/) | [practice questions](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and-practice/) | [free 10-minute diagnostics](/diagnostics/)

## What this unit covers

| Spec reference | What you must be able to do |
|---|---|
| OT1.1 | Build arguments from diagrams, sketched graphs, logical deduction and precise statements, using the terms constant, coefficient, expression, equation, function, identity, index, term, variable correctly |
| OT1.2 | Use mathematical language and syntax correctly |
| OT1.3 | Use set language and symbols (Appendix A, section 6.1); apply them to solutions of inequalities and to probability |
| OT1.4 | Use the definition of a function; find and state domain and range |
| OT1.5 | Comprehend and critique arguments, proofs and justifications of methods and formulae |

Related content that uses the same ideas: B5 (inequalities, solutions expressed with "and", "or" or set notation), B8 (composite and inverse functions) and the probability notation in Appendix A, section 6.11.

## 1. Precise language (OT1.1, OT1.2)

Each word below has one job. Marks are lost when they are swapped.

| Term | Meaning | In 3x² − 7x + 2 |
|---|---|---|
| Term | A part added or subtracted | 3x², −7x and 2 |
| Coefficient | The number multiplying a variable | 3 (of x²) and −7 (of x) |
| Constant | A fixed value that does not change | 2 |
| Variable | A letter that can take different values | x |
| Index | The power | 2, in x² |
| Expression | Terms combined, with no equals sign | 3x² − 7x + 2 |
| Equation | Two expressions joined by =, true only for some values | 3x² − 7x + 2 = 0 |
| Identity | True for every value of the variable, written with ≡ | (x + 1)² ≡ x² + 2x + 1 |
| Function | A rule giving one output for each input | f(x) = 3x² − 7x + 2 |

**Connecting language.** ⇒ means "implies", ⇐ means "is implied by", and ⇔ means "if and only if". Use "since", "so", "hence" and "therefore" in sentences, so that each line is visibly a consequence of the line before.

**Example 1.** Find the constants a, b and c such that 2x² + 12x + 7 ≡ a(x + b)² + c.

Because this is an identity, the coefficients must match for every x.

```
a(x + b)² + c ≡ ax² + 2abx + (ab² + c)
x² : a = 2
x  : 2ab = 12  ⇒  4b = 12  ⇒  b = 3
constant: ab² + c = 7  ⇒  18 + c = 7  ⇒  c = −11
```

So 2x² + 12x + 7 ≡ 2(x + 3)² − 11, and a = 2, b = 3, c = −11.

**One-way implication.** x = 3 ⇒ x² = 9 is true. The reverse, x² = 9 ⇒ x = 3, is false, because x could be −3. Writing ⇔ when only ⇒ holds is a logical error.

**Diagrams and sketches as arguments.** A sketch can justify a statement if it is labelled with intercepts, asymptotes and the points that matter. For example, to argue that x² = 2x + 3 has exactly two real roots, sketch y = x² and the line y = 2x + 3 and note that the line cuts the curve twice.

## 2. Set language and symbols (OT1.3)

| Symbol | Meaning | Symbol | Meaning |
|---|---|---|---|
| ∈ | is an element of | ∪ | union |
| ∉ | is not an element of | ∩ | intersection |
| ⊆ | is a subset of | A′ | complement of A |
| ⊂ | is a proper subset of | n(A) | number of elements in A |
| {x: …} | the set of all x such that … | ∅ | the empty set |
| ℕ, ℤ, ℤ⁺, ℤ⁺₀ | natural numbers, integers, positive integers, non-negative integers | ℚ, ℝ | rational numbers, real numbers |

The universal set has its own symbol in Appendix A (item 1.9). A proper subset is smaller than the set it sits in; a subset may equal it.

**Intervals** (specification items 1.20 to 1.23): [a, b] means {x ∈ ℝ: a ≤ x ≤ b}, and (a, b) means {x ∈ ℝ: a < x < b}. A square bracket includes the end value and a round bracket excludes it. Mixed forms such as [a, b) also exist.

**Example 2 (inequalities).** Solve x² − 3x − 18 > 0, and write the answer in set notation.

```
x² − 3x − 18 = (x − 6)(x + 3)
Sketch: upward parabola, roots at −3 and 6.
Above the axis where x < −3 or x > 6.
```

Answer: {x: x < −3} ∪ {x: x > 6}. "Or" corresponds to union.

**Example 3 (and = intersection).** Find {x: x² − 5x + 4 < 0} ∩ {x: 2x − 3 ≥ 0}.

First set: (x − 1)(x − 4) < 0, so 1 < x < 4. Second set: x ≥ 3/2. Both conditions hold when 3/2 ≤ x < 4, so the answer is [3/2, 4). Keep the ends honest: 3/2 is included because the second inequality is non-strict, and 4 is excluded because the first is strict.

**Example 4 (probability).** A club has 34 members. 19 swim (event S), 13 cycle (event C) and 6 do neither. One member is chosen at random.

```
n(S ∪ C) = 34 − 6 = 28
n(S ∩ C) = 19 + 13 − 28 = 4
Only swim: 19 − 4 = 15      Only cycle: 13 − 4 = 9
P(S ∩ C′) = 15/34
P(S′ ∩ C) = 9/34
P(S ∪ C)′ = 6/34 = 3/17
```

This uses P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Also note (A ∪ B)′ = A′ ∩ B′: not in either set means not in A and not in B.

## 3. Functions, domain and range (OT1.4)

A **function** f is a rule that maps every element of the **domain** to exactly one element. The set of outputs is the **range**. Notation: f(x) is the value at x, and f: x ↦ y says f maps x to y.

- **Function test.** Every input has one output. y² = x does not define y as a function of x, because x = 4 gives y = 2 and y = −2. On a graph, no vertical line meets the curve more than once.
- **One-one and many-one.** f(x) = x² on ℝ is many-one, since f(2) = f(−2). A function with an inverse must be one-one.
- **Domain.** It is either stated or taken to be every real number for which the rule works. Exclude division by zero and square roots of negatives.
- **Range.** Find it from the graph or by completing the square, and check the ends of the domain.

**Example 5.** Find the range of f(x) = x² − 8x + 19 (a) for x ∈ ℝ, (b) for 0 ≤ x ≤ 6.

(a) f(x) = (x − 4)² + 3, so the minimum is 3 at x = 4 and f grows without limit: range f(x) ≥ 3.

(b) Minimum 3 at x = 4, which is inside the domain. Check the ends: f(0) = 19 and f(6) = 7. The greatest value is 19, so the range is 3 ≤ f(x) ≤ 19.

**Example 6 (inverse).** f(x) = (3x − 1)/(x + 2), x ∈ ℝ, x ≠ −2.

```
y = (3x − 1)/(x + 2)  ⇒  y(x + 2) = 3x − 1
xy + 2y = 3x − 1  ⇒  x(y − 3) = −1 − 2y
x = (2y + 1)/(3 − y)
f⁻¹(x) = (2x + 1)/(3 − x),  x ≠ 3
```

The graph of f has a horizontal asymptote y = 3, so the range of f is f(x) ≠ 3. That set of outputs becomes the set of inputs for f⁻¹: whatever f can produce is what f⁻¹ accepts.

**Example 7 (composite).** f(x) = x − 5 for x ∈ ℝ, and g(x) = √x for x ≥ 0. Then gf(x) = g(f(x)) = √(x − 5). The input to g must be at least 0, so x − 5 ≥ 0 and the domain of gf is x ≥ 5. Its range is gf(x) ≥ 0.

## 4. Critiquing arguments (OT1.5)

To critique an argument, find the first line that does not follow from the lines before, and say exactly why. Common faults:

1. **Examples offered as proof.**
2. **Dividing by something that could be zero or negative.**
3. **Squaring without checking the roots.**
4. **Reversing an implication.**
5. **A conclusion that goes beyond what was shown.**

**Example 8 (a claim tested by examples).** Claim: 3ⁿ + 2 is prime for every positive integer n. Substituting n = 1 to 4 gives 5, 11, 29 and 83, all prime. A student concludes the claim is proved.

Critique: finitely many examples cannot prove a general statement. One counter-example disproves it: n = 5 gives 243 + 2 = 245 = 5 × 49, which is not prime.

**Example 9 (invalid step).** A student solves 1/x < 2 like this: "Multiply by x: 1 < 2x, so x > 1/2."

Critique: multiplying by x preserves the inequality only when x > 0. For x < 0 the inequality reverses. Test x = −1: 1/(−1) = −1 < 2, which is true, so negative values work as well. A correct treatment is to rearrange as 1/x − 2 < 0, giving (1 − 2x)/x < 0, which holds when the numerator and denominator have opposite signs: {x: x < 0} ∪ {x: x > 1/2}.

**Example 10 (extra root).** A student solves √(x + 6) = x by squaring: x + 6 = x², so (x − 3)(x + 2) = 0 and x = 3 or x = −2.

Critique: squaring can create solutions of a different equation. Check each in the original. x = 3 gives √9 = 3, which is correct. x = −2 gives √4 = 2, which is not −2. Only x = 3 is a solution.

**Example 11 (a proof with a gap).** "The sum of five consecutive integers is a multiple of 5, because 3 + 4 + 5 + 6 + 7 = 25." This is one example. A valid proof: n + (n + 1) + (n + 2) + (n + 3) + (n + 4) = 5n + 10 = 5(n + 2), which is a multiple of 5 for every integer n, since n + 2 is an integer.

When asked to justify a formula or method, show why each step is allowed, and give any conditions it needs (for instance, a ≠ 0, or x > 0).

## Common errors

- Calling an equation an identity, or writing = where ≡ is needed.
- Using ⇔ when only ⇒ holds.
- Giving a range from the equation alone, without checking the domain's end values.
- Giving f⁻¹ without a domain, or with a domain that ignores what f could output.
- Writing x < −2 and x > 4 for a single x, when the correct connective is "or".
- Including an end value for a strict inequality, or leaving it out for a non-strict one.
- Treating a set of examples as proof.

## Where next

Work through the [practice questions](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and-practice/), then use the [revision notes](/resources/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and-revision-notes/) to consolidate. The [free 10-minute diagnostics](/diagnostics/) show where you stand.

## Official syllabus

Source: the AQA A-level Mathematics 7357 specification, first teaching 2017, version 1.3. Parts used: OT1 (section 3.1.1), content items B5 and B8, and Appendix A (sections 6.1, 6.4 and 6.11).
