---
title: "OxfordAQA A-level Mathematics (9660): Exponentials and logarithms -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Maths (International A-level)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-exponentials-and-logarithms-oxfordaqa-alevel-maths"
description: "Revision notes for OxfordAQA 9660 P2.5: graphs of e^x and ln x, inverse rules, solving exponential and log equations, growth and decay models and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section P2.5 (Exponentials and logarithms) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, in International A-level Unit P2. The section covers the function eˣ and its graph, ln x and its graph as the inverse of eˣ, and exponential growth and decay, including exponential functions as models. For explanations and longer worked examples, read the [exponentials and logarithms study guide](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths/); to practise, use the [exponentials and logarithms practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths-practice/).

## The two graphs side by side

| Feature | y = eˣ | y = ln x |
|---|---|---|
| Domain | All real x | x > 0 |
| Range | y > 0 | All real y |
| Key point | (0, 1) | (1, 0) |
| Second point | (1, e) | (e, 1) |
| Asymptote | y = 0 (the x-axis) | x = 0 (the y-axis) |
| Shape | Increasing, ever steeper | Increasing, ever less steep |

The graphs are reflections of each other in y = x, because the functions are inverses.

## Inverse rules

```
ln(eˣ) = x          for all x
e^(ln x) = x        for x > 0
y = eˣ  ⇔  x = ln y
aˣ = e^(x ln a)     for a > 0
```

Laws of logarithms (from PP1.3) apply to ln: ln a + ln b = ln(ab), ln a − ln b = ln(a/b), k ln a = ln(aᵏ). Also ln 1 = 0 and ln e = 1.

## Sketching checklist

1. Intercepts: put x = 0 (if it is in the domain) and y = 0.
2. Asymptote: for eˣ forms, look at x → ±∞; for ln forms, find where the input of ln is zero.
3. End behaviour: which way the curve goes on each side.
4. Label everything with exact values, such as ln 2 or 7/3.

| Graph | Asymptote | Intercepts |
|---|---|---|
| y = e⁻ˣ | y = 0 | (0, 1) |
| y = 3 − 2e⁻ˣ | y = 3 | (0, 1), (−ln 1.5, 0) |
| y = ln(3x − 6) | x = 2 | (7/3, 0) |
| y = 2 + ln x | x = 0 | (e⁻², 0) |

## Equation types

| Type | Method |
|---|---|
| Aeᵏˣ = B | Divide by A, take ln: kx = ln(B/A) |
| ln(f(x)) = c | Exponentiate: f(x) = eᶜ |
| e²ˣ + p eˣ + q = 0 | Let u = eˣ, solve the quadratic, reject u ≤ 0 |
| eˣ + c e⁻ˣ = d | Multiply by eˣ first, then as above |
| Sums of logs | Combine into one log, then exponentiate; reject roots that make a log input non-positive |

## Models

| Form | Starting value | Long-term behaviour |
|---|---|---|
| N = Aeᵏᵗ (k > 0) | A | Grows without limit |
| N = Ae⁻ᵏᵗ (k > 0) | A | Decays towards 0 |
| T = a + be⁻ᵏᵗ (k > 0) | a + b | Approaches a |

- Doubling time for Aeᵏᵗ: (ln 2)/k. Half-life for Ae⁻ᵏᵗ: (ln 2)/k.
- Growth factor per unit time: eᵏ, so the percentage growth per unit time is 100(eᵏ − 1)%.
- Two readings: divide one equation by the other to eliminate A, then take ln.

## Key terms

| Term | Meaning |
|---|---|
| e | The constant 2.718…, the base of the natural exponential function |
| Natural logarithm | ln x = logₑ x |
| Inverse function | Undoes the original; its domain is the original's range |
| Asymptote | A line the curve approaches but does not reach |
| Exponential growth | A quantity whose rate of increase is proportional to its size |
| Exponential decay | A quantity whose rate of decrease is proportional to its size |
| Half-life | Time for a decaying quantity to halve |

## Exam traps

- Drawing the curve crossing its asymptote.
- Giving a decimal when the question asks for an exact value.
- Accepting eˣ = negative number, or a root that makes ln of a negative.
- Splitting ln(a + b) into ln a + ln b.
- Rounding k before using it again.
- Treating the k in Aeᵏᵗ as a percentage growth rate.
- Ignoring the long-term value a in T = a + be⁻ᵏᵗ when finding b.

## Self-test

1. Solve eˣ = 7, giving an exact answer.
2. Solve ln(2x) = 3, giving an exact answer.
3. State the asymptote and the y-intercept of y = 4 + e²ˣ.
4. State the domain and the x-intercept of y = ln(x + 5).
5. Find the inverse of f(x) = ln(x − 1), x > 1, and its domain.
6. Write 3ᵗ in the form eᵏᵗ.
7. Solve e²ˣ − 7eˣ + 10 = 0.
8. For N = 200e^(0.1t), find N at t = 0 and the doubling time.
9. Find the half-life of m = 50e^(−0.02t).
10. For θ = 15 + 60e^(−0.05t), state the initial and long-term values of θ.
11. Find the percentage growth per unit time of N = Ae^(0.2t).
12. Why is eˣ = −4 rejected?

### Answers

1. x = ln 7.
2. 2x = e³, so x = e³/2.
3. Asymptote y = 4; y-intercept (0, 5).
4. Domain x > −5; x-intercept (−4, 0).
5. f⁻¹(x) = eˣ + 1, domain all real x.
6. k = ln 3 ≈ 1.10, so 3ᵗ = e^(t ln 3).
7. (eˣ − 2)(eˣ − 5) = 0, so x = ln 2 or x = ln 5.
8. N = 200 at t = 0; doubling time 10 ln 2 ≈ 6.93.
9. (ln 2)/0.02 ≈ 34.7.
10. Initially 75; long-term 15.
11. e^0.2 ≈ 1.2214, so about 22.1% per unit time.
12. eˣ > 0 for every real x, so it has no solution.

## Related pages

- [Exponentials and logarithms study guide](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths/)
- [Exponentials and logarithms practice questions](/resources/oxfordaqa-a-level-mathematics-9660-p2-exponentials-and-logarithms-oxfordaqa-alevel-maths-practice/)
- [Parametric equations and exponential functions revision notes](/resources/oxfordaqa-a-level-mathematics-parametric-equations-and-exponential-and-logarithmic-revision-notes/)

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section P2.5 Exponentials and logarithms, published by OxfordAQA.
