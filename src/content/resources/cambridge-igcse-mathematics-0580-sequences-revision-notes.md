---
title: "Cambridge IGCSE Mathematics (0580): Sequences -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Topic 2 – Algebra and graphs"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0580"]
syllabusSeries: "2025-2027"
order: 2.07
syllabusTopics:
  - qualification: "igcse"
    topic: "algebra-and-graphs-cambridge-igcse-maths"
    subtopic: "sequences-cambridge-igcse-maths"
description: "Revision notes for 0580 subtopic 2.7 Sequences: difference methods, nth terms of linear, quadratic, cubic and exponential sequences, traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic **2.7 Sequences** of the Cambridge IGCSE Mathematics 0580 syllabus (examination in 2025, 2026 and 2027). Both tiers continue sequences, use term-to-term rules, link different sequences and find nth terms. Core (C2.7) needs nth terms of linear, simple quadratic and simple cubic sequences. Lines marked *(Extended)* are E2.7 only: general quadratics and cubics, exponential sequences, simple combinations, and subscript notation. For full worked examples, read the [sequences study guide](/resources/cambridge-igcse-mathematics-0580-sequences/); for marked questions, use the [sequences practice questions](/resources/cambridge-igcse-mathematics-0580-sequences-practice/).

## Key terms

| Term | Meaning | Example |
|---|---|---|
| Term | One number in the sequence | the 3rd term of 5, 9, 13 is 13 |
| Term-to-term rule | How to get the next term from the one before | "add 4" |
| nth term | A formula giving the term in position n | 4n + 1 |
| First difference | Gap between consecutive terms | 5, 9, 13 has first differences 4, 4 |
| Second / third difference | Differences of the differences | 1, 4, 9, 16 has second difference 2 |
| Common ratio *(Extended)* | The constant multiplier in an exponential sequence | 3, 6, 12 has ratio 2 |
| Tₙ *(Extended)* | Subscript notation for the nth term of sequence T | T₄ is the 4th term |

## Identify the type first

| Pattern | Type | nth term shape | Leading coefficient |
|---|---|---|---|
| Constant 1st difference d | Linear | dn + c | d |
| Constant 2nd difference | Quadratic | an² + bn + c | a = (2nd difference) ÷ 2 |
| Constant 3rd difference | Cubic | an³ + … | a = (3rd difference) ÷ 6 |
| Constant ratio r *(Extended)* | Exponential | a × rⁿ⁻¹ | first term a |
| Differences that multiply *(Extended)* | Exponential plus a constant (combination) | e.g. 2ⁿ + 1 | compare with powers |

## Condensed recall

### Linear

```
nth term = (difference) × n + (zero term)
zero term = first term - difference
7, 11, 15, 19:  d = 4, zero term 3   ->  4n + 3
20, 17, 14:     d = -3, zero term 23 ->  23 - 3n
```

### Simple quadratic and cubic (Core and Extended)

Line the sequence up against n² (1, 4, 9, 16, 25) or n³ (1, 8, 27, 64, 125), or a multiple of them, and spot the change: 0, 3, 8, 15 is n² − 1; 2, 16, 54, 128 is 2n³.

### General quadratic *(Extended)*

```
1. a = second difference ÷ 2
2. Subtract an^2 from each term
3. The remainder is linear: bn + c
4. nth term = an^2 + bn + c; check with n = 1 and n = 3
```

### Cubic *(Extended)*

a = third difference ÷ 6; subtract an³; deal with what is left as a quadratic or linear sequence.

### Exponential and combinations *(Extended)*

- Exponential: divide consecutive terms to find r; nth term = first term × rⁿ⁻¹.
- Combination: if the differences themselves form an exponential sequence, compare with 2ⁿ, 3ⁿ, …, e.g. 1, 7, 25, 79 is 3ⁿ − 2.

### Using an nth term

- Find a term: substitute n.
- Test membership: set nth term = value and solve. A whole-number n means it is a term.
- First term over a value: estimate, then test whole numbers either side.

## Exam traps

- **Zero term, not first term.** 9, 14, 19 is 5n + 4, not 5n + 9.
- **Decreasing sequences.** 30, 26, 22 is 34 − 4n; the coefficient of n is negative.
- **Halve the second difference.** 6, 15, 28, 45 has second difference 4, so the n² coefficient is 2, not 4.
- **Divide the third difference by 6**, not 3 and not 2.
- **Powers apply to the ratio only.** 5 × 3ⁿ⁻¹ is not 15ⁿ⁻¹.
- **"Explain" needs a reason.** "150 is not a term because 5n + 4 = 150 gives n = 29.2, which is not a whole number."
- **Position, not value.** "Which term" asks for n; "find the term" asks for the value.

## Self-test

1. Write down the next two terms of 5, 9, 14, 20, 27, ….
2. Find the nth term of 9, 14, 19, 24, ….
3. Find the nth term of 30, 26, 22, 18, ….
4. Is 150 a term of the sequence with nth term 5n + 4? Explain.
5. Find the nth term of 0, 3, 8, 15, 24, ….
6. Find the nth term of 2, 16, 54, 128, ….
7. *(Extended)* Find the nth term of 6, 15, 28, 45, 66, ….
8. *(Extended)* Find the nth term of 2, 10, 30, 68, 130, ….
9. *(Extended)* Find the nth term of 5, 15, 45, 135, ….
10. *(Extended)* Find the nth term of 1, 7, 25, 79, 241, ….
11. *(Extended)* Tₙ = n² − 3n. Find T₇.
12. Which term of the sequence with nth term 3n² − 2 is equal to 145?

### Answers

1. Differences 4, 5, 6, 7, then 8, 9: **35, 44**.
2. d = 5, zero term 4: **5n + 4**.
3. d = −4, zero term 34: **34 − 4n**.
4. 5n + 4 = 150 gives n = 29.2, not a whole number, so **150 is not a term**.
5. Each term is one less than n²: **n² − 1**.
6. Each term is twice n³: **2n³**.
7. Second difference 4, so 2n²; remainder 4, 7, 10, 13, 16 = 3n + 1: **2n² + 3n + 1**.
8. Third difference 6, so n³; remainder 1, 2, 3, 4, 5: **n³ + n**.
9. Ratio 3, first term 5: **5 × 3ⁿ⁻¹**.
10. Compare with 3, 9, 27, 81, 243: each is 2 less, **3ⁿ − 2**.
11. 49 − 21 = **28**.
12. 3n² = 147, n² = 49, **n = 7** (the 7th term).

## Where to go next

- [Sequences study guide](/resources/cambridge-igcse-mathematics-0580-sequences/) for worked examples of every type.
- [Sequences practice questions](/resources/cambridge-igcse-mathematics-0580-sequences-practice/) for marked exam-style questions.
- [Indices II revision notes](/resources/cambridge-igcse-mathematics-0580-indices-ii-revision-notes/) for the powers used in exponential nth terms.
- [Algebra and graphs revision notes](/resources/igcse-mathematics-algebra-and-graphs-revision-notes/) for the whole topic.

## Official syllabus

Cambridge International: *Cambridge IGCSE Mathematics 0580 syllabus* for examination in 2025, 2026 and 2027, Topic 2 Algebra and graphs, C2.7 and E2.7 Sequences.
