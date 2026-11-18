---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Evaluation of limits using l’Hôpital’s rule or Maclaurin series (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-13"
description: "IB DP Maths AA HL section 5.13 study guide: limits of the forms 0/0 and ∞/∞ by l'Hôpital's rule, repeated use, and by Maclaurin series, with examples."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.13, the evaluation of limits of the form lim f(x)/g(x), as x → a and as x → ∞, using l'Hôpital's rule or the Maclaurin series, including repeated use of l'Hôpital's rule**. It is AHL content, examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

The [AA HL further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/) shows one limit done both ways. This page sets out when each method is the better choice, the checks that must be written down, and how to handle unknown constants.

## What section 5.13 asks of you

- Recognise the indeterminate forms 0/0 and ∞/∞.
- Apply l'Hôpital's rule, repeatedly if necessary, for limits as x → a and as x → ∞.
- Evaluate the same kinds of limit by replacing functions with their Maclaurin series (section 5.19).

## Indeterminate forms

Substituting x = a into f(x)/g(x) is always the first step. If it gives a number, that number is the limit and no rule is needed. Only when it gives **0/0** or **∞/∞** is the limit undetermined: the answer depends on how fast top and bottom approach their limits, and could be any value.

## l'Hôpital's rule

If lim f(x)/g(x) has the form 0/0 or ∞/∞, then

```
lim f(x)/g(x) = lim f′(x)/g′(x)
```

provided the right-hand limit exists. The rule works the same way for x → a and for x → ∞.

Differentiate the numerator and the denominator **separately**. This is not the quotient rule. After each application, substitute again: if the form is still 0/0 or ∞/∞, apply the rule again; if it is a number, stop.

### Worked example 1: one application

Find lim (x→0) (e^(2x) − 1)/sin x.

```
x = 0 gives (1 − 1)/0 = 0/0
Differentiate separately: 2e^(2x)/cos x
x = 0 gives 2/1 = 2
```

### Worked example 2: repeated application

Find lim (x→0) (eˣ − 1 − x)/x².

```
x = 0: 0/0
First application:  (eˣ − 1)/(2x)   → still 0/0
Second application: eˣ/2            → 1/2
```

The answer is 1/2. Write the form (0/0) after each step: the mark scheme looks for evidence that the rule was valid each time.

### Worked example 3: x → ∞

Find lim (x→∞) x²/eˣ.

```
∞/∞ → 2x/eˣ   (∞/∞) → 2/eˣ → 0
```

This is the formal version of the statement that eˣ grows faster than any power of x.

### Worked example 4: a limit at x → 1

Find lim (x→1) (ln x)/(x − 1).

```
x = 1: 0/0 → (1/x)/1 → 1
```

## The Maclaurin series method

Replace each function by the start of its Maclaurin series, simplify, and let x → 0. The standard series you need are:

```
eˣ        = 1 + x + x²/2! + x³/3! + …
ln(1 + x) = x − x²/2 + x³/3 − …
sin x     = x − x³/3! + x⁵/5! − …
cos x     = 1 − x²/2! + x⁴/4! − …
arctan x  = x − x³/3 + x⁵/5 − …
```

### Worked example 5

Find lim (x→0) (ln(1 + x) − x)/x².

```
ln(1 + x) − x = (x − x²/2 + x³/3 − …) − x = −x²/2 + x³/3 − …
Divide by x²: −1/2 + x/3 − …
Limit: −1/2
```

Example 2 by series: eˣ − 1 − x = x²/2 + x³/6 + …, so the quotient is 1/2 + x/6 + … → 1/2.

**Which method?** Series are usually faster when several applications of l'Hôpital would be needed, or when the numerator is a difference of nearly equal quantities, as in example 5. l'Hôpital's rule is the only option for x → ∞, and is often simplest for a single application. If a question says "using l'Hôpital's rule", you must use it.

## Unknown constants

### Worked example 6

Given that lim (x→0) (sin 3x − ax)/x³ exists, find a and the value of the limit.

```
sin 3x = 3x − (3x)³/6 + … = 3x − (9/2)x³ + …
sin 3x − ax = (3 − a)x − (9/2)x³ + …
Divide by x³: (3 − a)/x² − 9/2 + …
```

For the limit to be finite the 1/x² term must vanish, so **a = 3**, and the limit is **−9/2**. With l'Hôpital's rule the same condition appears as "the first application must still be 0/0": (3 cos 3x − a)/(3x²) is 0/0 at x = 0 only when a = 3.

### Worked example 7: a product in the denominator

Find lim (x→0) (x − sin x)/(x(1 − cos x)).

```
Series: x − sin x = x³/6 − x⁵/120 + …
        x(1 − cos x) = x(x²/2 − x⁴/24 + …) = x³/2 − x⁵/24 + …
Quotient = (1/6 − x²/120 + …)/(1/2 − x²/24 + …) → (1/6)/(1/2) = 1/3
```

l'Hôpital's rule would need three applications here, with the product rule in every denominator, so the series method is far quicker. The general principle: find the lowest power of x in the numerator and in the denominator. If the powers are equal, the limit is the ratio of their coefficients; if the numerator's power is higher, the limit is 0.

## Other forms: rewrite first

Products such as x ln x as x → 0⁺ have the form 0 × ∞. Rewrite as a quotient to get ∞/∞:

```
x ln x = (ln x)/(1/x)    → (1/x)/(−1/x²) = −x → 0
```

## The trap: applying the rule when it does not apply

lim (x→0) (cos x)/(x + 1) = 1/1 = 1 by substitution. Applying l'Hôpital's rule anyway gives (−sin x)/1 → 0, which is wrong. The rule is only valid for 0/0 or ∞/∞, which is why the form must be checked and stated every time.

## Common mistakes

- Using the quotient rule instead of differentiating top and bottom separately.
- Not checking the form before each application, and so applying the rule to a determinate limit.
- Stopping after one application while the form is still 0/0.
- Truncating a Maclaurin series too early: keep terms up to the power in the denominator.
- Forgetting the chain rule factor, for example writing the series of sin 3x as 3x − x³/6.
- Treating ∞/∞ results such as 3x²/(5x² − 1) as needing calculus: dividing by x² is quicker, giving 3/5.

## Exam technique: the command words

- **Use l'Hôpital's rule to find**: state the form, show each differentiation, and the final substitution.
- **Use Maclaurin series to find**: write each series to enough terms, simplify the quotient, then take the limit.
- **Hence**: an earlier part usually provides a series or a derivative to reuse.
- **Find the value of a such that the limit exists**: argue from the vanishing of lower-order terms, as in example 6.

## Where next

Condense this section with the [section 5.13 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-13-revision-notes/) and test yourself with the [section 5.13 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-13-practice/). The limit definition behind all of this is in the [section 5.12 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-12/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section AHL 5.13.
