---
title: "IB DP Mathematics: Applications and Interpretation: Operations with numbers in the form a × 10ᵏ"
resourceType: "study-guides"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 1.1
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-number-and-algebra"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-1-1"
description: "IB DP Maths AI section 1.1 study guide: writing numbers as a × 10^k, calculating with them by hand and on a GDC, contextual problems and common errors."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide teaches syllabus section **1.1** of IB Diploma Programme Mathematics: Applications and Interpretation: *operations with numbers in the form a × 10ᵏ, where 1 ≤ a < 10 and k is an integer*. It follows the IB guide for first assessment 2021, and 1.1 is common content for SL and HL. Every paper in this course allows a graphic display calculator (GDC), so the skill being tested is less the arithmetic and more writing results correctly, interpreting very large and very small quantities, and avoiding keying errors.

After working through it, use the [revision notes for section 1.1](/resources/ib-ib-dp-mathematics-applications-and-interpretation-dp-mathematics-applications-and-interpretation-ib-dp-mathematics-applications-and-interpretation-1-1-revision-notes/) and the [practice questions for section 1.1](/resources/ib-ib-dp-mathematics-applications-and-interpretation-dp-mathematics-applications-and-interpretation-ib-dp-mathematics-applications-and-interpretation-1-1-practice/). The whole of topic 1 is summarised in the [number, approximation and financial mathematics study guide](/resources/ib-dp-mathematics-ai-number-approximation-financial/).

## What section 1.1 requires

| Requirement | Meaning in practice |
|---|---|
| Form a × 10ᵏ with 1 ≤ a < 10 | Exactly one non-zero digit before the decimal point in a |
| k is an integer | k can be positive, negative or zero |
| Operations | Multiply, divide, add, subtract, raise to powers and take roots |
| Notation | The IB guide states that calculator or computer notation is **not** acceptable: a display such as 5.2E8 must be written as 5.2 × 10⁸ |

The form makes the **size** of a number visible at a glance: k tells you the order of magnitude, and a tells you the leading digits.

## Converting into the form

**Large numbers.** Move the decimal point left until one non-zero digit remains in front of it; the number of places is k.

```
3 840 000      = 3.84 × 10^6        (point moves 6 places left)
72 000 000 000 = 7.2 × 10^10
```

**Small numbers.** Move the point right; k is negative.

```
0.000 405      = 4.05 × 10^-4       (point moves 4 places right)
0.06           = 6 × 10^-2
```

**Numbers that are nearly in the form.** A GDC result or a working line often gives something like 47.3 × 10⁵ or 0.82 × 10⁻³. Adjust a and compensate in k so the value is unchanged:

```
47.3 × 10^5  = 4.73 × 10^1 × 10^5 = 4.73 × 10^6
0.82 × 10^-3 = 8.2 × 10^-1 × 10^-3 = 8.2 × 10^-4
```

Check: making a smaller (dividing by 10) must make k larger by 1, and the reverse.

## Calculating by hand

The laws of exponents (section 1.5) do the work.

**Multiplying and dividing:** combine the a-values and the powers of 10 separately, then tidy.

```
(6 × 10^4) × (7 × 10^-9) = 42 × 10^-5 = 4.2 × 10^-4
(2.4 × 10^3) ÷ (8 × 10^-2) = 0.3 × 10^5 = 3 × 10^4
```

**Adding and subtracting:** the powers must match first. Rewrite the number with the smaller power.

```
4.82 × 10^8 + 9.6 × 10^7 = 4.82 × 10^8 + 0.96 × 10^8 = 5.78 × 10^8
```

Adding the a-values and the powers separately (giving 14.42 × 10¹⁵) is the most common serious error in this section.

**Powers and roots:** apply the power to both parts. For a square root, make the power of 10 even first.

```
(3 × 10^4)^2   = 9 × 10^8
√(1.6 × 10^9)  = √(16 × 10^8) = 4 × 10^4
```

## Using the GDC

- Enter numbers with the calculator's exponent key (often labelled EE or ×10ˣ). This keeps 3.2 × 10⁶ as one number.
- If you type "× 10^" instead, use **brackets** round each number in a division. Typed in a line without brackets, 6 × 10⁵ ÷ 3 × 10² is evaluated as (6 × 10⁵ ÷ 3) × 10² = 2 × 10⁷, not the intended 2 × 10³.
- Setting the GDC to scientific mode shows every result in exponent form, but the display still needs rewriting in proper notation.
- Do a quick magnitude check by hand on the powers of 10 before trusting the screen.

## Worked example 1: astronomy

Light travels at about 3.00 × 10⁸ m s⁻¹. The mean distance from the Earth to the Sun is about 1.50 × 10¹¹ m. Find the time light takes to travel from the Sun to the Earth, in minutes and seconds.

```
t = (1.50 × 10^11) ÷ (3.00 × 10^8)
  = 0.5 × 10^3 = 5 × 10^2 s = 500 s
500 s = 8 minutes 20 seconds
```

The exact working makes it clear the answer is 500 s, so no rounding is needed.

## Worked example 2: comparing magnitudes in finance

A country's public debt is 2.84 × 10¹² dollars and its population is 6.71 × 10⁷ (figures invented for this example).

(a) Find the debt per person, giving your answer in the form a × 10ᵏ, where 1 ≤ a < 10 and k ∈ ℤ.

(b) A second country has debt per person of 9.1 × 10³ dollars. How many times larger is the first country's figure?

```
(a) (2.84 × 10^12) ÷ (6.71 × 10^7) = 42 324.888...
    = 4.23 × 10^4 dollars per person (3 s.f.)

(b) 42 324.888... ÷ (9.1 × 10^3) = 4.651...
    ≈ 4.65 times larger
```

In (b), use the unrounded value from (a). "How many times larger" asks for a ratio (division), not a difference.

## Worked example 3: very small lengths

A type of cell has a diameter taken as 7.5 × 10⁻⁶ m. How many cells, placed in a straight line touching each other, would fit along 1.2 cm?

```
1.2 cm = 1.2 × 10^-2 m
(1.2 × 10^-2) ÷ (7.5 × 10^-6) = 0.16 × 10^4 = 1.6 × 10^3
1600 cells
```

The units must match before dividing. Leaving 1.2 in centimetres gives an answer 100 times too large.

## Accuracy

Unless a question asks otherwise, IB papers expect answers exactly or correct to **three significant figures**. In this form, three significant figures means a has two decimal places: 4.23 × 10⁴, not 4.2 × 10⁴ or 4.2325 × 10⁴. Rounding and bounds are taught in section 1.6; here it is enough to round once, at the end.

## Common errors

- Writing 42.3 × 10³ or 0.423 × 10⁵ when the form a × 10ᵏ is asked for: correct value, wrong form, so the accuracy mark is lost.
- Copying the GDC display, such as 4.23E4, as the final answer.
- Adding the powers of 10 when adding two numbers.
- Changing k in the wrong direction when adjusting a: 0.82 × 10⁻³ is 8.2 × 10⁻⁴, not 8.2 × 10⁻².
- Ignoring units (cm and m, km and m) before dividing.
- Rounding an intermediate value and then reusing it in a later part.

## Exam technique

- **Write down**: little or no working expected, for example "write 0.000 73 in the form a × 10ᵏ".
- **Calculate** or **Find**: show the expression you entered into the GDC, then the answer. A correct expression earns method credit even if the final figure is mis-keyed.
- **Give your answer in the form a × 10ᵏ, where 1 ≤ a < 10, k ∈ ℤ**: both the value and the form are assessed.
- **Hence**: use the result of the previous part, unrounded where possible.
- In context, state the unit and answer the question asked (minutes and seconds, number of cells, dollars per person).

## Frequently asked questions

**Is "standard form" the same as a × 10ᵏ?**
Yes. Many textbooks call it standard form or scientific notation; the IB guide describes it as the form a × 10ᵏ with 1 ≤ a < 10 and k an integer.

**Can k be zero?**
Yes. A number from 1 to just under 10 is already in the form, with k = 0: 7.4 = 7.4 × 10⁰.

## Official syllabus

International Baccalaureate Organization, *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus section SL 1.1 (common to SL and HL).
