---
title: "Edexcel International GCSE Mathematics A (4MA1): Electronic calculators"
resourceType: "study-guides"
subject: "mathematics"
level: ["igcse"]
topic: "Numbers and the number system"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 1.11
syllabusTopics:
  - qualification: "igcse"
    topic: "numbers-and-the-number-system-edexcel-igcse-maths"
    subtopic: "electronic-calculators-edexcel-igcse-maths"
description: "Study guide to 4MA1 section 1.11: entering fractions, powers, roots, negatives, standard form, trigonometry and Σfx correctly on a scientific calculator."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 1.11, Electronic calculators, in topic 1 (Numbers and the number system) of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2. The section has a single statement, 1.11 A: "use a scientific electronic calculator to determine numerical results". It is Foundation Tier content, and the Higher Tier says "See Foundation Tier", so everything here applies to both tiers.

The broader [Applying number and electronic calculators study guide](/resources/edexcel-igcse-maths-4ma1-applying-number-and-calculators/) shows the basic bracket and rounding habits alongside units, time and money. This page goes further into the calculator itself: each key the specification lists, how it can mislead you, and how to show calculator work so that method marks are safe. Practise with the [electronic calculators revision notes](/resources/edexcel-igcse-mathematics-4ma1-electronic-calculators-edexcel-igcse-maths-revision-notes/) and the [electronic calculators practice questions](/resources/edexcel-igcse-mathematics-4ma1-electronic-calculators-edexcel-igcse-maths-practice/).

## What the specification expects

The "Calculators" page of the specification sets a minimum list of functions:

| Tier | Minimum functions |
|---|---|
| Foundation (1F, 2F) | +, −, ×, ÷, x², √x, memory, brackets, x^y, x^(1/y), x̄, Σx, Σfx, sine, cosine, tangent and their inverses |
| Higher (1H, 2H) | The same list, plus standard form |

Calculators with databanks, retrieval of text or formulae, QWERTY keyboards, built-in symbolic algebra, or symbolic differentiation or integration are prohibited in all examinations. Any ordinary scientific model meets the list; a graphical model with symbolic algebra does not.

Because a calculator is allowed on every paper, many marks depend on entering expressions correctly. The calculator never fails at arithmetic; it fails when the expression typed is not the expression on the page.

## Key idea 1: the calculator obeys the order of operations

A scientific calculator applies brackets, then powers and roots, then multiplication and division, then addition and subtraction. A printed fraction line groups the whole numerator and the whole denominator, but the ÷ key does not. You have two safe choices:

- use the fraction template, which puts the numerator and denominator in separate boxes, or
- type a bracket round the whole numerator and another round the whole denominator.

**Worked example 1.** Work out (4.6² − 1.8) / (2.3 + √7.29).

```
Fraction template, or:  ( 4.6 x² − 1.8 ) ÷ ( 2.3 + √ 7.29 ) =
numerator   = 21.16 − 1.8 = 19.36
denominator = 2.3 + 2.7   = 5
answer      = 19.36 ÷ 5   = 3.872
```

Typing `4.6² − 1.8 ÷ 2.3 + √7.29` with no brackets gives 23.077..., because only 1.8 is divided by 2.3. Writing the numerator and denominator values (19.36 and 5) in your working also earns a method mark if the final division goes wrong.

## Key idea 2: powers and roots keys

| Key | Use | Example |
|---|---|---|
| x² | squares | 1.3² = 1.69 |
| x^y | any power, including negative | 2.5⁻³ = 0.064 |
| √x | square root | √0.81 = 0.9 |
| x^(1/y) | any root | fifth root of 243 = 3 |

A fractional power needs its own brackets. To work out 32^(2/5), type `32 ^ ( 2 ÷ 5 )` or use the fraction template in the power box; the answer is 4. Typing `32 ^ 2 ÷ 5` gives 204.8, because the calculator squares 32 and then divides by 5.

With a root key, the whole expression under the root must be inside the root. For √(52.3 − 4.7²), either use the root template or press `=` on 52.3 − 4.7² first and then take the square root of the answer.

## Key idea 3: negative numbers

Most calculators have a negative key, (−), separate from the subtraction key. Use the negative key at the start of an expression or after an opening bracket.

The calculator applies a power before a leading minus sign. So:

```
(−1.4)⁴ = 3.8416      the base is −1.4
 −1.4⁴  = −3.8416     the calculator works out 1.4⁴ and then makes it negative
```

With an odd power the two forms agree, because (−1.4)³ = −(1.4³), but with an even power they do not. Always bracket a negative number before raising it to a power, and substitute negative values into formulae inside brackets.

## Key idea 4: Ans and memory

Re-typing a long decimal wastes time and invites rounding. The Ans key holds the last result, and the memory key stores a value for later.

**Worked example 2.** A right-angled triangle has shorter sides 7.3 cm and 4.1 cm. A wire 3.6 times the length of the hypotenuse is needed. Find the length of wire to 3 significant figures.

```
hypotenuse = √(7.3² + 4.1²) = √70.1 = 8.372574...
wire = Ans × 3.6 = 30.141267...
     = 30.1 cm (3 s.f.)
```

If the hypotenuse is rounded to 8.37 first, 8.37 × 3.6 = 30.132, which is 30.13 instead of 30.14 at 4 significant figures. Keep every intermediate value on the calculator and round once, at the end.

## Key idea 5: standard form

The ×10^x key (labelled EXP on some models) enters a number in standard form as a single value. That matters in a division.

**Worked example 3.** Work out (8.1 × 10⁶) ÷ (2.7 × 10⁻²). Give your answer in standard form.

```
Correct entry: 8.1 ×10^x 6 ÷ 2.7 ×10^x (−) 2 =    300 000 000
Answer: 3 × 10⁸
```

If you type the powers of 10 with the ordinary × and ^ keys and no brackets (`8.1 × 10 ^ 6 ÷ 2.7 × 10 ^ −2`), the calculator divides by 2.7 and then multiplies by 10⁻², giving 30 000, which is wrong by a factor of 10 000. Either use the ×10^x key or put each number in brackets. Answers asked for "in standard form" must be written as a × 10ⁿ with 1 ≤ a < 10, even if the display shows an ordinary number.

## Key idea 6: trigonometry and degree mode

All angles in 4MA1 are in degrees, so the calculator must be in degree mode. A quick check: sin 30 should give 0.5. If it gives −0.988..., the calculator is in radian mode.

The inverse keys sin⁻¹, cos⁻¹ and tan⁻¹ turn a ratio back into an angle: sin⁻¹(0.6) = 36.869...°, which is 36.9° to 1 decimal place. Put a fraction inside the inverse function in brackets: tan⁻¹(3.4 ÷ 5.1), not tan⁻¹(3.4) ÷ 5.1.

## Key idea 7: Σx and Σfx for statistics

The specification lists x̄, Σx and Σfx because the calculator's statistics mode finds totals and means from a frequency table. You can also do it with the memory or a table of products.

**Worked example 4.** Find the mean number of pets per household.

| Pets (x) | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Households (f) | 5 | 8 | 4 | 3 |

```
Σf  = 5 + 8 + 4 + 3 = 20
Σfx = 5 + 16 + 12 + 12 = 45
mean = Σfx ÷ Σf = 45 ÷ 20 = 2.25
```

Divide by Σf (the number of households, 20), not by the number of columns (4). Writing Σfx = 45 in your answer shows the method even if you use statistics mode to get it.

## Key idea 8: reading the display

- **Fractions.** Many calculators give an exact fraction such as 17/10. Use the fraction–decimal toggle when a decimal is wanted. A mixed number such as 1 7/10 is also correct unless the question asks for a decimal.
- **Recurring decimals.** 1 ÷ 7 shows 0.1428571429; the last digit is rounded, so the display is not exact.
- **Surds and π.** A natural-display calculator may show √20 as 2√5 or an answer as a multiple of π. Convert to a decimal when the question asks for "all the figures on your calculator display".
- **Context.** The display does not know that 3.25 hours is 3 hours 15 minutes, or that 12.3 coaches means 13 coaches.

## Annotated model answer

**Question.** Work out (3.7³ − 2.15) / (√18.4 × 0.65²).

(a) Write down all the figures on your calculator display. (b) Give your answer correct to 3 significant figures.

```
numerator   = 3.7³ − 2.15 = 50.653 − 2.15 = 48.503
denominator = √18.4 × 0.65² = 1.812323...
(a) 26.76288800
(b) 26.8
```

Why this scores full marks: the answer to (a) is copied with all of its figures, not rounded; part (b) is rounded from the full value. A quick estimate supports it: 3.7³ is about 50, √18.4 is about 4 and 0.65² is about 0.4, so the answer is about 50 ÷ 1.6, roughly 30. The value 26.8 is the right size.

## Common mistakes

- Using ÷ for a fraction line with no brackets round the numerator and the denominator.
- Typing a fractional power without brackets: 32 ^ 2 ÷ 5 instead of 32 ^ (2 ÷ 5).
- Squaring a negative value without brackets.
- Leaving the calculator in radian mode.
- Writing a rounded answer when the question asks for all the figures on the display.
- Rounding an intermediate value and carrying the rounded value forward.
- Copying the calculator's shorthand for a very large or very small answer instead of writing it as a × 10ⁿ.

## Exam technique

- **"Use your calculator to work out"**: a bare answer can score full marks, but show the numerator and the denominator values so a slip still earns method marks.
- **"Write down all the figures on your calculator display"**: copy every digit shown. Do not round.
- **"Give your answer correct to 3 significant figures"** (or 1 decimal place): round the full value once, at the end.
- **"Give your answer in standard form"**: write a × 10ⁿ with 1 ≤ a < 10.
- **"Show your working"**: write intermediate values to at least four significant figures, even though the calculator keeps more.
- Check every answer with a 1 significant figure estimate, as in the model answer above.

## Next steps

Revise the key sequences with the [electronic calculators revision notes](/resources/edexcel-igcse-mathematics-4ma1-electronic-calculators-edexcel-igcse-maths-revision-notes/), then try the [electronic calculators practice questions](/resources/edexcel-igcse-mathematics-4ma1-electronic-calculators-edexcel-igcse-maths-practice/). For rounding, bounds and standard form rules, use the [degree of accuracy and standard form study guide](/resources/edexcel-igcse-maths-4ma1-degree-of-accuracy-and-standard-form/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 1, Numbers and the number system: 1.11 Electronic calculators (Foundation Tier; the Higher Tier refers to the Foundation Tier), and the "Calculators" page listing minimum functions and prohibited facilities.
