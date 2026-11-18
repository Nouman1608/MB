---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.19 The Maclaurin series (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.19
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-19"
description: "IB DP Maths AA HL section 5.19 study guide: deriving Maclaurin series, building new ones by substitution, products and calculus, and series from differential equations."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches: **section 5.19, the Maclaurin series**. It is additional higher level (AHL) content, examined at HL only, and it follows the IB *Mathematics: analysis and approaches guide* for first assessment 2021.

For an overview of all HL calculus, use the [further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/). Here the aim is narrower: to make you quick and accurate at producing a series by whichever route a question chooses.

## What section 5.19 asks of you

- Use the Maclaurin series to obtain expansions for **eˣ, sin x, cos x, ln(1 + x)** and **(1 + x)ᵖ, p ∈ ℚ**.
- Obtain other series by **simple substitution, products, integration and differentiation**.
- Develop a Maclaurin series **from a differential equation**.

Series also feed other sections: evaluating limits in section 5.13, and approximating values and definite integrals that cannot be found exactly.

## The idea behind the formula

A Maclaurin series is a polynomial that matches a function, and all of its derivatives, at x = 0:

f(x) = f(0) + x f′(0) + (x²/2!) f″(0) + (x³/3!) f‴(0) + … + (xⁿ/n!) f⁽ⁿ⁾(0) + …

Why the factorials? Differentiate the term (xⁿ/n!) f⁽ⁿ⁾(0) n times and you are left with exactly f⁽ⁿ⁾(0). So the nth derivative of the polynomial at 0 equals the nth derivative of f at 0, for every n. The more terms you take, the better the polynomial follows f near x = 0.

The function and all its derivatives must exist at 0. That is why there is a series for ln(1 + x) but not for ln x.

### Worked example 1 (calculator-free): deriving a series

Use the Maclaurin formula to find the series for ln(1 + x) up to and including the term in x⁴.

```
f(x)    = ln(1 + x)         f(0)    = 0
f′(x)   = (1 + x)⁻¹         f′(0)   = 1
f″(x)   = −(1 + x)⁻²        f″(0)   = −1
f‴(x)   = 2(1 + x)⁻³        f‴(0)   = 2
f⁗(x)   = −6(1 + x)⁻⁴       f⁗(0)   = −6

ln(1 + x) = 0 + x − x²/2! + 2x³/3! − 6x⁴/4! + …
          = x − x²/2 + x³/3 − x⁴/4 + …
```

Set out the derivatives in a column like this. Each value at 0 then earns its own mark, and an arithmetic slip is easy to find.

## The five standard expansions and where they are valid

| Function | Series | Valid for |
|---|---|---|
| eˣ | 1 + x + x²/2! + x³/3! + … | all real x |
| sin x | x − x³/3! + x⁵/5! − … | all real x |
| cos x | 1 − x²/2! + x⁴/4! − … | all real x |
| ln(1 + x) | x − x²/2 + x³/3 − x⁴/4 + … | −1 < x ≤ 1 |
| (1 + x)ᵖ | 1 + px + p(p − 1)x²/2! + p(p − 1)(p − 2)x³/3! + … | \|x\| < 1 (for p not a positive integer) |

Patterns that help you check: sin x is odd, so it has only odd powers; cos x is even, so only even powers; the signs alternate in sin, cos and ln(1 + x). The last row is the extended binomial theorem from section 1.10, now seen as a Maclaurin series. Make sure you know which of these your formula booklet gives and which you must derive.

The "valid for" column matters. Putting x = 2 into the ln(1 + x) series to find ln 3 does not work: the terms grow and the sum does not settle. To approximate ln 3, use a different route, for example ln 3 = ln 2 + ln 1.5.

## Building new series from known ones

### Substitution

Replace x by a multiple, a power or another expression throughout, brackets included.

- e^(−3x) = 1 − 3x + (−3x)²/2! + (−3x)³/3! + … = 1 − 3x + 9x²/2 − 9x³/2 + …
- cos(x²) = 1 − x⁴/2 + x⁸/24 − …
- ln(1 − x) = −x − x²/2 − x³/3 − …, valid for −1 ≤ x < 1.

The validity changes too: ln(1 + 3x) is valid for −1/3 < x ≤ 1/3.

### Substituting one series into another

A whole series can be the "x" in another series, as long as it starts with zero constant term so that its powers get smaller.

**Worked example 2 (calculator-free).** Find the Maclaurin series for sec x up to and including the term in x⁴.

```
sec x = (cos x)⁻¹ = (1 + u)⁻¹,  where u = −x²/2 + x⁴/24 + …
(1 + u)⁻¹ = 1 − u + u² − …
u² = x⁴/4 + (higher powers)

sec x = 1 − (−x²/2 + x⁴/24) + x⁴/4 + …
      = 1 + x²/2 + (−1/24 + 6/24)x⁴ + …
      = 1 + x²/2 + 5x⁴/24 + …
```

The u² term is essential: it is the only other source of x⁴. Before multiplying out, decide which powers can still contribute to the highest term you need, and drop the rest.

### Differentiation and integration term by term

Differentiating the sin x series term by term gives the cos x series, and integrating 1/(1 + t²) = 1 − t² + t⁴ − … from 0 to x gives arctan x = x − x³/3 + x⁵/5 − …, valid for |x| < 1 by this route.

### Worked example 3 (calculator allowed): approximating an integral

∫₀^0.5 e^(−x²) dx cannot be found with elementary antiderivatives. Use four non-zero terms of a series to estimate it.

```
e^(−x²) = 1 − x² + x⁴/2 − x⁶/6 + …          (substitute −x² into eˣ)
∫₀^0.5 (1 − x² + x⁴/2 − x⁶/6) dx
  = [x − x³/3 + x⁵/10 − x⁷/42]₀^0.5
  = 0.5 − 0.0416667 + 0.003125 − 0.0001860
  = 0.461272 (6 d.p.)
```

A GDC gives 0.461281, so the estimate is correct to 4 decimal places. The terms shrink quickly because x ≤ 0.5, which is why a series estimate works well for small x.

## Series from a differential equation

When an equation cannot be solved exactly, differentiate it repeatedly, evaluate each derivative at x = 0, and place the values in the Maclaurin formula.

### Worked example 4 (calculator-free)

y satisfies dy/dx = 1 + xy, with y = 2 when x = 0. Find the Maclaurin series for y up to and including the term in x⁴.

```
y′   = 1 + xy                 y′(0)   = 1 + 0 = 1
y″   = y + xy′                y″(0)   = 2
y‴   = 2y′ + xy″              y‴(0)   = 2
y⁗   = 3y″ + xy‴              y⁗(0)   = 6

y = 2 + x(1) + (x²/2!)(2) + (x³/3!)(2) + (x⁴/4!)(6) + …
  = 2 + x + x² + x³/3 + x⁴/4 + …
```

Each derivative of xy uses the product rule. Notice how the pattern d/dx(x × something) = something + x × (its derivative) keeps the working short.

## Common mistakes

- Forgetting the factorials, or using 3 instead of 3! = 6.
- Substituting 2x but writing 2x² instead of (2x)² = 4x².
- Dropping a cross-term when multiplying or composing series, such as the u² term in worked example 2.
- Truncating each factor too early: to reach x⁴ in a product, each factor needs every term up to x⁴ that can pair with the other.
- Using a series outside its interval of validity, such as ln(1 + x) with x = 2.
- Writing "≈" without saying how many terms were used, or omitting "+ …" so the series looks like an exact equality.
- In series from differential equations, forgetting the product or chain rule when differentiating terms like xy or y².

## Exam technique: the command words

- **Show that** the series for f(x) begins …: derive the derivatives at 0 explicitly, or build from a given standard series, and reach the printed terms exactly.
- **Hence** find …: use the series you have just found, for example to evaluate a limit or an approximation; a different method may score nothing.
- **Find the first three non-zero terms**: zero coefficients do not count, so for sin 2x you need terms up to x⁵.
- **Up to and including the term in x³**: stop at x³, but include it even if it comes from several products.
- **Write down**: a standard series or a direct substitution, with little working needed.

HL Paper 1 allows no technology, so series must be built by hand. On Paper 2 the GDC is useful for checking an approximation against the true value.

## Where next

Condense this section with the [section 5.19 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-19-revision-notes/), then test yourself with the [section 5.19 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-19-practice/). The methods for solving differential equations exactly are in the [section 5.18 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-18/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 5.19.
