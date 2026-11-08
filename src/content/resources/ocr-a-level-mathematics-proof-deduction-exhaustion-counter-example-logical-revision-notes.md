---
title: "OCR A Level Mathematics A: Proof: deduction, exhaustion, counter-example, logical connectives and contradiction (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Proof Revision Notes (H240)"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Proof: deduction, exhaustion, counter-example, logical connectives and contradiction"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 103
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "proof-ocr-alevel-maths"
description: "Condensed OCR A Level Mathematics A revision notes on proof: methods, connectives, counter-examples, contradiction, a self-test and common slips."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These revision notes condense section 1.01 Proof (1.01a to 1.01d) of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. Stage 1 content (1.01a to 1.01c) is shared with AS. Proof by contradiction, 1.01d, is **A Level only**. The [study guide](/resources/ocr-a-level-mathematics-proof-deduction-exhaustion-counter-example-logical/) explains each method at length. Test yourself with the [practice questions](/resources/ocr-a-level-mathematics-proof-deduction-exhaustion-counter-example-logical-practice/).

Course links: the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/) and the [free diagnostics](/diagnostics/).

## The four methods at a glance

| Method | Ref | Idea | Use it when |
|---|---|---|---|
| Deduction | 1.01a | Start from known facts, apply valid steps, reach the result | The statement is general and algebra can show a form |
| Exhaustion | 1.01a | Split into a finite list of cases and prove each | The cases are few, or can be sorted by remainder |
| Counter-example | 1.01c | One value that makes P true and Q false | You must show a statement is false |
| Contradiction | 1.01d, A Level only | Assume the opposite and reach an impossibility | "No such number exists", or "is irrational" |

## Structure of every proof

1. Define letters: "Let n be an integer."
2. Work in steps, one idea per line.
3. Finish with a sentence that states what has been proved.

The specification describes a formal proof as having variables clearly defined, correct algebraic manipulation and a concise conclusion. Testing a few values is evidence, never proof.

## Forms to know

| Statement | Write it as |
|---|---|
| Even / odd integer | 2n / 2n + 1 |
| Three integers in a row | n, n + 1, n + 2 |
| Two integers that may differ | m and n |
| Multiple of 5 | 5n |
| Remainder 3 on division by 5 | 5n + 3 |
| Rational number | a/b, with a and b integers, b ≠ 0 |
| Irrational number | real, but not rational |

## Deduction in steps

1. Write the objects in general form.
2. Expand and simplify.
3. Factorise, or complete the square, to show the required property.
4. Say why the property follows (for example, "2 times an integer is even").

**Reminder.** Prove that the sum of an odd and an even integer is odd.

```
(2m + 1) + 2n = 2(m + n) + 1
```

Since m + n is an integer, the sum has the form 2k + 1 and is odd.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--01-proof-anatomy.webp" width="900" height="680" alt="A 7 by 7 grid with a 5 by 5 square in one corner shows 7² − 5² = 24 left over. Beside it are the three parts of a proof: assume 2n+1 and 2n+3, show (2n+3)² − (2n+1)² = 8(n+1), conclude a multiple of 8 for every n. For n = 2 this is 49 − 25 = 24 = 8 × 3." loading="lazy">
  <figcaption>A proof starts from stated assumptions, makes valid steps and ends with a conclusion that holds for every n.</figcaption>
</figure>


## Exhaustion in steps

1. List every case and check that the list is complete.
2. Prove each case separately.
3. Say that the cases cover all possibilities.

**Reminder.** Prove that n⁴ leaves remainder 0 or 1 when divided by 5. Every integer is congruent to one of 0, 1, 2, 3 or 4 when divided by 5, so check each residue.

```
0⁴ = 0    1⁴ = 1    2⁴ = 16    3⁴ = 81    4⁴ = 256
```

These have remainders 0, 1, 1, 1 and 1 on division by 5. All five cases give 0 or 1, so the result holds for every integer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--02-two-odd-letters.webp" width="900" height="820" alt="A 4 by 4 table shows p + q for odd p and q from 1, 3, 5, 7: all sixteen sums are even. The diagonal cells, where p = q, hold only 2, 6, 10 and 14, which is all that one letter 2n+1 used twice could cover. Using 2m+1 and 2n+1 gives 2(m+n+1) for every pair." loading="lazy">
  <figcaption>Two different odd numbers need two different letters; using one letter only covers the diagonal.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--03-remainder-lanes.webp" width="900" height="1075" alt="The integers 0 to 39 are arranged in four columns by remainder on division by 4. Squares sit only in the 4k and 4k+1 columns. Cubes (OCR only) sit in 4k, 4k+1 and 4k+3 but never 4k+2." loading="lazy">
  <figcaption>Every integer lies in one of four remainder lanes, so four cases cover them all.</figcaption>
</figure>


## Connectives and language (1.01b)

| Symbol | Name | Read as |
|---|---|---|
| ⇒ | implies | if P then Q |
| ⇐ | is implied by | if Q then P |
| ⇔ | is equivalent to | P ⇒ Q and Q ⇒ P (if and only if, iff) |
| ≡ | identity | true for every value of the variable |

- The **converse** of P ⇒ Q is Q ⇒ P. It may be false when P ⇒ Q is true.
- The **contrapositive** of P ⇒ Q is "not Q ⇒ not P". The two are equivalent.
- To prove "P if and only if Q", prove **both** directions and say so.
- Squaring both sides gives ⇒ only. Check answers in the original equation.
- An equation holds for some values. An identity (≡) holds for all.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--04-squaring-implication.webp" width="900" height="955" alt="The line y = x meets the upper curve y = √(x+2) at (2, 2), a true solution. Squaring brings in the lower branch y = −√(x+2), which the line meets at (−1, −1), an extra root. Check every answer in the original equation, because squaring gives ⇒ only." loading="lazy">
  <figcaption>Squaring is an implication one way only, so it can add false roots.</figcaption>
</figure>


## Disproof by counter-example (1.01c)

Method:

1. Choose a value that satisfies P.
2. Show that Q fails for it.
3. State that the statement is false.

**Reminder.** Disprove: "If a > b then 1/a < 1/b."

Take a = 2 and b = −1. Then 2 > −1, so P holds. But 1/a = 1/2 and 1/b = −1, and 1/2 < −1 is false. The statement is false.

Rules: the value must lie in the stated domain, and it must be checked, not just quoted.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--05-counter-example-graph.webp" width="900" height="920" alt="The graph of y = x² with the line y = 25 shows x² &gt; 25 for x &lt; −5 or x &gt; 5. The claim only fits x &gt; 5. The point (−6, 36) is above the line but −6 is not greater than 5, so it disproves the claim." loading="lazy">
  <figcaption>One case that meets the condition but breaks the conclusion disproves a general claim.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--06-examples-not-proof.webp" width="900" height="860" alt="Four rows of dots, one per n, show each expression is prime until a single failure. 3^n + 2 fails at n = 5 (245), n² + n + 11 at n = 10 (121), 2n² + 11 at n = 11 (253) and n² + n + 41 at n = 40 (1681 = 41²)." loading="lazy">
  <figcaption>Long runs of examples can still end in a counter-example, so examples are not a proof.</figcaption>
</figure>


## Contradiction in steps (A Level only)

1. Assume the **exact opposite** of what you want to prove.
2. Deduce consequences with valid steps.
3. Reach a statement that is false, or contradicts the assumption.
4. Conclude that the assumption is false, so the original statement is true.

**Standard results.**

- √2 is irrational: assume √2 = p/q in lowest terms, so p² = 2q². Then p is even, p = 2r, then q² = 2r², so q is even. Both have factor 2, a contradiction.
- There are infinitely many primes: assume a finite list p₁ to pₖ and form N = p₁ × ... × pₖ + 1. No listed prime divides N, so N has a prime factor off the list.

**Reminder.** Prove that there are no positive integers m and n with m² − n² = 2.

Suppose there are such m and n. Then (m − n)(m + n) = 2. The two factors differ by 2n, which is even, so they are both even or both odd. If both are even, the product is a multiple of 4, not 2. If both are odd, the product is odd, not 2. Either way there is a contradiction, so no such integers exist.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--07-root2-contradiction.webp" width="900" height="830" alt="Assume √2 = p/q in lowest terms. Squaring gives p² = 2q², so p is even, and p = 2r then gives q even. Both are even so they share the factor 2, shown as a Venn overlap, which clashes with lowest terms. So √2 is irrational." loading="lazy">
  <figcaption>The assumption of lowest terms is what the contradiction clashes with.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--08-infinite-primes.webp" width="900" height="880" alt="Six primes 2 to 13 each leave remainder 1 into N = 30031. N = 59 × 509, two primes not on the list. N need not be prime, only have a prime factor missing from the list." loading="lazy">
  <figcaption>Multiplying the listed primes and adding 1 always yields a prime factor not on the list.</figcaption>
</figure>


## Notation to use in your answers

Write ∴ for "therefore" only if you also state the reason in words. Use ℤ for the integers and ℚ for the rationals if you wish, but define any symbol you introduce. In a proof, "Let n be an integer" is a complete first line, and "QED" on its own is not a conclusion.

## Must-know distinctions

- **Proof or evidence.** Many examples support a statement. Only an argument for all cases proves it.
- **Disprove or not prove.** One counter-example disproves. Failing to find a counter-example proves nothing.
- **Contrapositive or converse.** The contrapositive is equivalent to the original. The converse is a different statement.
- **Rational or irrational.** Rational means a ratio of integers with a non-zero denominator. Irrational means real but not rational.
- **Identity or equation.** Use ≡ only when the statement is true for all values.

## Quick self-test

1. Insert ⇒, ⇐ or ⇔ for integers n: "n is a multiple of 3" ... "n is a multiple of 6".
2. Write the converse of "if x > 4 then x² > 16". Is the converse true?
3. Find a value showing that "if a > b then a² > b²" is false.
4. What is the opposite of "√5 is irrational", as the first line of a proof by contradiction?
5. Show that n² + n is even for every integer n.
6. Is (x + 3)² ≡ x² + 9? Justify with one value.
7. You want to show that every cube leaves remainder 0, 1 or 3 on division by 4, splitting by the remainder of n on division by 4. How many cases do you need?
8. In the proof that √2 is irrational, why does p² even force p to be even?
9. Disprove "all prime numbers are odd".
10. A student proves "x² = 9 ⇒ x = 3 or x = −3" and concludes ⇔. Is ⇔ justified?

### Answers

1. The statement "multiple of 6" implies "multiple of 3", but not the other way round. So write "n is a multiple of 3" **⇐** "n is a multiple of 6".
2. The converse is "if x² > 16 then x > 4". It is **false**: x = −5 gives x² = 25 > 16, but −5 is not greater than 4.
3. Take a = 1 and b = −3. Then a > b, but a² = 1 and b² = 9, and 1 > 9 is false. **a = 1, b = −3** works.
4. **Assume that √5 is rational.**
5. n² + n = n(n + 1). One of two consecutive integers is even, so the product is **even**.
6. No. For x = 1, (x + 3)² = 16 but x² + 9 = 10. **Not an identity.**
7. **Four cases:** n = 4k, 4k + 1, 4k + 2 and 4k + 3.
8. If p were odd, p² would be odd (odd × odd = odd). So an even p² means **p is even**.
9. The number 2 is prime and even, so **2 is a counter-example**.
10. Yes, in this direction, since x = 3 or x = −3 gives x² = 9. Both directions hold, so ⇔ is justified provided you say why the reverse works.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-mathematical-language-set-notation-functions-and--09-multiple-of-three-gap.webp" width="900" height="690" alt="On a number line from 93 to 108 the multiples of 3 are filled. 6m + 9n = 3(2m + 3n) is always one of them, but 100 = 3 × 33 + 1 sits between 99 and 102, so no integers m, n exist." loading="lazy">
  <figcaption>Every value of 6m + 9n is a multiple of 3, and 100 is not.</figcaption>
</figure>


## Where marks are usually lost

- Writing "hence proved" after checking a few numbers.
- Not defining the letters, or using one letter for two different integers.
- Skipping the algebra between a correct start and the claimed form.
- Missing the concluding sentence in terms of the question.
- Treating ⇒ as ⇔, especially after squaring both sides.
- Proving only one direction of an "if and only if" statement.
- Giving a counter-example that fails P, or not checking that Q fails.
- In a contradiction proof, starting from the wrong opposite, or not saying where the contradiction is.
- Leaving a fraction a/b unreduced when the proof relies on lowest terms.

## Frequently asked questions

**What are the four methods of proof in OCR A Level Mathematics A (H240)?**
Section 1.01 covers proof by deduction, proof by exhaustion, disproof by counter-example and proof by contradiction. Proof by contradiction, 1.01d, is A Level only.

**What is the difference between the converse and the contrapositive?**
The converse of P ⇒ Q is Q ⇒ P, which may be false. The contrapositive is "not Q ⇒ not P", which is equivalent to the original statement.

**Why does squaring both sides only give ⇒?**
Squaring can introduce values that make the original equation false, so the step is an implication, not an equivalence. Check every answer in the original equation.

**How do you write even, odd and consecutive integers in a proof?**
Write an even integer as 2n, an odd integer as 2n + 1 and three integers in a row as n, n + 1, n + 2. Use separate letters, such as m and n, for integers that may differ.

## Official syllabus

OCR, *A Level in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, section 1.01 Proof (references 1.01a to 1.01d), published by OCR.
