---
title: "Edexcel International A Level Mathematics (YMA01): Proof (P2.1) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-proof-edexcel-alevel-maths"
description: "Original practice questions with mark-scheme answers on proof structure, proof by exhaustion and counter-examples for Edexcel IAL Maths Unit P2 (YMA01)."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover section 1 of Unit P2 (YMA01, Issue 3): the structure of proof, proof by exhaustion and disproof by counter example. Revise first with the [P2 proof study guide](/resources/edexcel-a-level-mathematics-yma01-p2-proof-edexcel-alevel-maths/) and the [P2 proof revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-proof-edexcel-alevel-maths-revision-notes/).

---

## Section A

**1.** Show that the statement "if p is a prime number, then p + 2 is also a prime number" is false. **[2]**

**2.** Show that the statement "the sum of any three consecutive integers is divisible by 6" is false. **[2]**

**3.** A student checks the values n = 1, 2, ..., 10 and finds that n² + n + 17 is prime each time. She writes: "so n² + n + 17 is prime for every positive integer n".

**(a)** Explain why her checks do not prove the statement. **[1]**

**(b)** Show that n = 16 gives a counter-example. **[2]**

**4.** Give a counter-example to show that "x² > x for all real numbers x" is false. **[2]**

## Section B

**5.** Prove that the product of any two odd integers is odd. **[3]**

**6.** Prove by exhaustion that every prime number p with 3 < p < 30 leaves a remainder of 1 or 5 when divided by 6. **[4]**

**7.** **(a)** Prove that 5n² + 3n is even for every integer n. **[4]**

**(b)** Hence explain why 5n² + 3n + 7 is odd for every integer n. **[1]**

**8.** Prove that the last digit of n⁴, where n is a positive integer, is always 0, 1, 5 or 6. **[5]**

**9.** Prove that no square number leaves a remainder of 3, 5 or 6 when divided by 7. **[5]**

**10.** Consider the statement "for all real numbers a and b, if a < b then 1/a > 1/b".

**(a)** Give a counter-example to show that the statement is false. **[2]**

**(b)** Prove that the statement is true when 0 < a < b. **[3]**

**11.** A student is asked to prove that the sum of an odd integer and an even integer is odd. She writes:

"Let the odd integer be 2n + 1 and the even integer be 2n. Their sum is 4n + 1 = 2(2n) + 1, which is odd."

**(a)** Explain the error in her proof. **[1]**

**(b)** Write a correct proof. **[3]**

**12.** **(a)** Show that the statement "2ⁿ > n² for every positive integer n" is false. **[2]**

**(b)** Prove by exhaustion that 2ⁿ > n² for n = 5, 6, 7 and 8. **[3]**

**13.** Prove that n³ − n is divisible by 6 for every integer n. **[5]**

---

## Answers

**1.** Take p = 7, which is prime: p + 2 = 9 = 3 × 3, which is not prime [1]. So the statement is false [1]. (p = 13, giving 15, also works.)

**2.** Take 2, 3 and 4: the sum is 9 [1]. 9 is not divisible by 6, so the statement is false [1]. (Any three consecutive integers whose middle one is odd will do, since their sum is 3 × the middle integer.)

**3. (a)** Checking a finite number of cases cannot show a result for every positive integer; there are infinitely many values left unchecked [1].

**(b)** n = 16: 16² + 16 + 17 = 256 + 16 + 17 = 289 [1]. 289 = 17², so it is not prime and the statement is false [1].

**4.** Take x = ½: x² = ¼, and ¼ < ½ [1], so x² > x is not true for this x and the statement is false [1]. (x = 0 or x = 1, where x² = x, also work.)

**5.** Let the integers be 2a + 1 and 2b + 1, where a and b are integers. (2a + 1)(2b + 1) = 4ab + 2a + 2b + 1 [1] = 2(2ab + a + b) + 1 [1]. Since 2ab + a + b is an integer, the product is one more than an even number, so it is odd [1].

**6.** The primes with 3 < p < 30 are 5, 7, 11, 13, 17, 19, 23 and 29, and there are no others [1].

5 = 6 × 0 + 5, 7 = 6 × 1 + 1, 11 = 6 × 1 + 5, 13 = 6 × 2 + 1 [1]

17 = 6 × 2 + 5, 19 = 6 × 3 + 1, 23 = 6 × 3 + 5, 29 = 6 × 4 + 5 [1]

Every prime in the range leaves remainder 1 or 5, so the statement is proved [1].

**7. (a)** If n is even, n = 2k: 5n² + 3n = 20k² + 6k = 2(10k² + 3k), which is even [1].

If n is odd, n = 2k + 1: 5(4k² + 4k + 1) + 3(2k + 1) = 20k² + 26k + 8 [1] = 2(10k² + 13k + 4), which is even [1].

Every integer is even or odd, so 5n² + 3n is even for every integer n [1].

**(b)** 5n² + 3n + 7 is an even number plus an odd number, 7, so it is odd [1].

Total: 5

**8.** Write n = 10k + d, where d ∈ {0, 1, ..., 9}. Expanding (10k + d)⁴, every term except d⁴ contains a factor of 10, so (10k + d)⁴ = 10 × (an integer) + d⁴ [1]. So the last digit of n⁴ is the last digit of d⁴ [1].

d = 0, 1, 2, 3, 4 give d⁴ = 0, 1, 16, 81, 256, with last digits 0, 1, 6, 1, 6 [1]

d = 5, 6, 7, 8, 9 give d⁴ = 625, 1296, 2401, 4096, 6561, with last digits 5, 6, 1, 6, 1 [1]

All ten possible last digits have been checked, and the only results are 0, 1, 5 and 6 [1].

**9.** Every integer can be written as n = 7k + r, where k is an integer and r ∈ {0, 1, 2, 3, 4, 5, 6} [1].

n² = 49k² + 14kr + r² = 7(7k² + 2kr) + r², so n² leaves the same remainder on division by 7 as r² [1].

r² = 0, 1, 4, 9, 16, 25, 36 leave remainders 0, 1, 4, 2, 2, 4, 1 respectively [1] [1] (one mark for at least four correct, both marks for all seven).

So the only possible remainders are 0, 1, 2 and 4, and a square never leaves remainder 3, 5 or 6 [1].

**10. (a)** Take a = −1 and b = 2, so a < b [1]. Then 1/a = −1 and 1/b = ½, and −1 > ½ is false, so the statement is false [1].

**(b)** 1/a − 1/b = (b − a)/(ab) [1]. Since b > a, b − a > 0; since a and b are both positive, ab > 0 [1]. So 1/a − 1/b > 0, which gives 1/a > 1/b [1].

Total: 5

**11. (a)** She has used the same letter n for both integers, so her proof only covers pairs such as 7 and 6, where the odd integer is one more than the even one [1].

**(b)** Let the odd integer be 2a + 1 and the even integer be 2b, where a and b are integers. The sum is 2a + 2b + 1 = 2(a + b) + 1 [1]. a + b is an integer [1], so the sum is one more than an even number and is therefore odd [1].

Total: 4

**12. (a)** n = 3: 2³ = 8 and 3² = 9 [1]. 8 > 9 is false, so the statement is false [1]. (n = 2 and n = 4, where the two sides are equal, also work.)

**(b)** n = 5: 32 > 25; n = 6: 64 > 36 [1]. n = 7: 128 > 49; n = 8: 256 > 64 [1]. All four cases satisfy 2ⁿ > n², so the result holds for n = 5, 6, 7, 8 [1].

Total: 5

**13.** n³ − n = n(n² − 1) = (n − 1)n(n + 1) [1], which is the product of three consecutive integers [1]. At least one of any two consecutive integers is even, so the product is divisible by 2 [1]. Every integer is 3k, 3k + 1 or 3k + 2; in the three cases respectively n, n − 1 or n + 1 is a multiple of 3, so the product is divisible by 3 [1]. Since it is divisible by both 2 and 3, and 2 and 3 have no common factor, it is divisible by 6 [1].

## Where marks are usually lost

- Using one letter for two different integers, as in Question 11.
- Writing a counter-example without the arithmetic that shows it fails, or without the sentence "so the statement is false".
- In remainder proofs, listing only some of the remainders: division by 7 needs all seven cases in Question 9.
- Forgetting to justify why reducing to last digits or remainders is valid. In Questions 8 and 9 the algebra n = 10k + d or n = 7k + r is what earns the first marks.
- Ending a case-by-case proof without the conclusion that the cases cover every integer.
