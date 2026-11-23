---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.1 Operations with numbers in the form a × 10ᵏ"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-1"
description: "IB DP Maths AA syllabus section 1.1 in depth: multiplying, dividing, adding, powers and roots of numbers in the form a × 10ᵏ, with and without a GDC."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers syllabus section **1.1** of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): operations with numbers in the form **a × 10ᵏ, where 1 ≤ a < 10 and k is an
integer**. It is common content for SL and HL. The guide also states that calculator or computer notation is
not acceptable in answers, so a display such as 5.2E+30 must be written as 5.2 × 10³⁰.

Section 1.1 is short, but it is tested in two ways: by hand on Paper 1, where no technology is allowed,
and as the format for very large or very small answers on Paper 2 (and Paper 3 at HL). For quick recall use
the [section 1.1 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-1-revision-notes/),
and test yourself with the [section 1.1 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-1-practice/).
The broader [sequences, series and financial applications study guide](/resources/ib-dp-mathematics-aa-sequences-series-financial/)
summarises 1.1 with the rest of the unit.

## The form itself

A number is in the required form when the front number **a** satisfies **1 ≤ a < 10** and the power **k** is
an **integer** (positive, negative or zero).

| Number | In the form? | Corrected |
|---|---|---|
| 6.3 × 10⁻² | Yes | |
| 63 × 10⁻³ | No: a = 63 | 6.3 × 10⁻² |
| 0.63 × 10⁻¹ | No: a < 1 | 6.3 × 10⁻² |
| 1 × 10⁵ | Yes (a = 1 is allowed) | |
| 10 × 10⁴ | No: a must be less than 10 | 1 × 10⁵ |

**Adjusting a and k.** Moving the decimal point in a one place left multiplies a by 10⁻¹, so k must go **up**
by 1 to compensate; moving it right makes k go **down** by 1. For example 63 × 10⁻³ = 6.3 × 10⁻²: a got
smaller, so k got larger.

**Converting ordinary numbers.** Count how many places the decimal point moves to reach a value between 1
and 10. Large numbers give positive k, numbers between 0 and 1 give negative k:
0.000 407 = 4.07 × 10⁻⁴ and 2 950 000 = 2.95 × 10⁶.

## The four operations by hand

### Multiplication and division

Deal with the front numbers and the powers of 10 **separately**, using the laws of exponents for the powers
(add for multiplication, subtract for division). Then adjust to the correct form.

**Worked example 1 (calculator-free).** Evaluate (4.5 × 10⁷) ÷ (9 × 10⁻³).

```
4.5 ÷ 9 = 0.5
10^7 ÷ 10^(−3) = 10^(7 − (−3)) = 10^10
0.5 × 10^10 = 5 × 10^9      (a was below 1, so k goes down by 1)
```

The step 7 − (−3) = 10 is where sign slips happen; write it out.

### Addition and subtraction

There is no rule for adding powers of 10. Rewrite the numbers with the **same power** first, or convert to
ordinary numbers if they are manageable.

```
7.1 × 10^6 − 4.6 × 10^5
= 7.1 × 10^6 − 0.46 × 10^6
= 6.64 × 10^6
```

Choose the **larger** power as the common one: it keeps the front numbers small and makes the final
adjustment easier.

### Powers and roots

Raise both parts to the power. For a root, first make the power of 10 divisible by the root.

```
(3 × 10^4)^2 = 3^2 × 10^8 = 9 × 10^8
√(1.6 × 10^9) = √(16 × 10^8) = 4 × 10^4
∛(8 × 10^(−6)) = 2 × 10^(−2)
```

In the square root, 1.6 × 10⁹ is rewritten as 16 × 10⁸ so that the power is even; √16 and √10⁸ are then
exact.

## Using technology

On Paper 2 your GDC does the arithmetic, but you must present the answer properly.

- Set the calculator to scientific notation if answers are very large or small, and **rewrite** the display
  as a × 10ᵏ.
- Round a to the required accuracy. Unless a question says otherwise, IB answers are given exactly or to
  **three significant figures**, and in this form the three significant figures are all in a:
  9.4608 × 10¹⁵ becomes 9.46 × 10¹⁵.
- Keep full calculator values in intermediate steps and round only at the end.

**Worked example 2 (calculator allowed).** Light travels at about 3.00 × 10⁸ m s⁻¹. Find the distance it
travels in a year of 365 days, in the form a × 10ᵏ, correct to 3 significant figures.

```
Seconds in a year: 365 × 24 × 3600 = 31 536 000 = 3.1536 × 10^7
Distance = 3.00 × 10^8 × 3.1536 × 10^7
         = 9.4608 × 10^15
         ≈ 9.46 × 10^15 m
```

Writing the number of seconds in the same form first makes it easy to check the size of the answer:
3 × 3 ≈ 9, and 10⁸ × 10⁷ = 10¹⁵.

## Comparing and estimating

To **order** numbers in this form, compare the powers first; only when the powers are equal do you compare
the front numbers. So 2.1 × 10⁻⁴ < 9.8 × 10⁻⁴ < 1.3 × 10⁻³.

To estimate a calculation, round each a to one significant figure and use the powers:

```
(2.4 × 10^5)(3 × 10^(−2)) / (1.6 × 10^3)
≈ (2 × 3 / 2) × 10^(5 − 2 − 3) = 3 × 10^0 = 3
Exact value: 4.5
```

The estimate gets the size right, which is its job. It catches errors of a factor of 10 or more in a GDC
answer.

### Worked example 3: a ratio in context

*The mass of the Earth is about 5.97 × 10²⁴ kg and the mass of the Moon about 7.35 × 10²² kg. How many times
heavier is the Earth? Give your answer to 3 significant figures.*

```
(5.97 × 10^24) ÷ (7.35 × 10^22) = (5.97 ÷ 7.35) × 10^2
                                = 0.8122... × 10^2
                                = 81.2 (3 s.f.)
```

A ratio of two quantities measured in the same unit has no unit. An answer of 81.2 does not need to be
written in the form a × 10ᵏ unless the question asks for it.

## Exam technique

- **"Give your answer in the form a × 10ᵏ, where 1 ≤ a < 10, k ∈ ℤ"** means the form is part of the answer;
  36 × 10⁵ is not acceptable even though it is equal.
- **"Write down"** means little or no working is needed; **"calculate"** or **"find"** on Paper 1 means show
  the separated front numbers and powers.
- If a question gives data to 3 significant figures, give your answer to 3 significant figures as well.

## Common mistakes

- Copying calculator notation into the answer.
- Leaving a outside 1 ≤ a < 10 after multiplying or dividing.
- Moving k the wrong way when adjusting a.
- Adding powers when adding numbers: 3 × 10⁴ + 2 × 10⁴ is 5 × 10⁴, not 5 × 10⁸.
- Rounding k instead of a, or rounding during the working.
- Taking a square root without first making the power of 10 even.

## Next steps

- [Section 1.1 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-1-revision-notes/)
- [Section 1.1 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-1-practice/)
- [Section 1.2 study guide: arithmetic sequences and series](/resources/ib-dp-mathematics-analysis-and-approaches-1-2/)
- [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/)

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*,
first assessment 2021: syllabus section 1.1, operations with numbers in the form a × 10ᵏ.
