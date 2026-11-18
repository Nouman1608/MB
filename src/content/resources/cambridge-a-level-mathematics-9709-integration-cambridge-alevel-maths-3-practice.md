---
title: "Cambridge A Level Mathematics (9709): Integration (Pure Mathematics 3) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.5
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "integration-cambridge-alevel-maths-3"
description: "Thirteen original Cambridge 9709 Paper 3 integration questions with marked answers on standard forms, partial fractions, by parts and given substitutions."
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
> these alongside the official past papers from your board or school.

These questions cover section **3.5 Integration** of Pure Mathematics 3 (Paper 3) in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. Angles are in radians. "Exact" means in terms of π, e, logarithms or surds. The number in square brackets after the last part of each question is the total for the whole question.

Related: the [3.5 study guide](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3/) and the [3.5 revision notes](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3-revision-notes/).

## Questions

### Section A: short questions

**1.** Find ∫ (e^(3 − 2x) + 4/(2x + 1)) dx. **[3]**

**2.** Find the exact value of ∫₀^(π/8) sec²(2x) dx. **[2]**

**3.** Find the exact value of ∫₀^(π/6) sin²(3x) dx. **[3]**

**4.** Find the exact value of ∫₀^(√3) 1/(x² + 3) dx. **[3]**

**5.** Find the exact value of ∫₀¹ (2x + 3)/(x² + 3x + 2) dx, giving your answer as a single logarithm. **[3]**

**6.** Find the exact value of ∫₁^e x ln x dx. **[4]**

### Section B: longer questions

**7.** Let f(x) = (x² + 7)/((x + 1)(x² + 3)).

**(a)** Express f(x) in partial fractions.

**(b)** Hence show that ∫₀¹ f(x) dx = ln(2√3) + π/(6√3). **[9]**

**8.** Find the exact value of ∫₀^(π/3) x sec²x dx. **[5]**

**9.** Find the exact value of ∫₀^(π/2) x² cos x dx. **[6]**

**10.** Using integration by parts, find the exact value of ∫₀¹ tan⁻¹ x dx. **[5]**

**11.** Use the substitution u = cos x to find the exact value of ∫₀^(π/3) sin³x dx. **[5]**

**12.** Use the substitution u = eˣ + 1 to show that ∫₀^(ln 2) e^(2x)/(eˣ + 1) dx = 1 − ln(3/2). **[5]**

**13.** **(a)** Show that sin²x cos²x ≡ ⅛(1 − cos 4x).

**(b)** Hence find the exact value of ∫₀^(π/8) sin²x cos²x dx. **[5]**

## Answers

**1.** −½e^(3 − 2x) [1] + 2 ln|2x + 1| [1] + c, with both terms correct [1]

**2.** [½ tan 2x]₀^(π/8) [1] = ½ tan(π/4) = **½** [1]

**3.** sin²3x = ½(1 − cos 6x) [1]. ∫ = [x/2 − (sin 6x)/12]₀^(π/6) [1] = π/12 − 0 = **π/12** [1]

**4.** [(1/√3) tan⁻¹(x/√3)]₀^(√3) [1] = (1/√3) tan⁻¹ 1 = (1/√3)(π/4) [1] = **π/(4√3)**, or √3π/12 [1]

**5.** The numerator 2x + 3 is the derivative of x² + 3x + 2 [1]. ∫ = [ln(x² + 3x + 2)]₀¹ [1] = ln 6 − ln 2 = **ln 3** [1]

**6.** u = ln x, dv/dx = x, so v = x²/2 [1]. ∫ = (x²/2) ln x − ∫ x/2 dx [1] = (x²/2) ln x − x²/4 [1]. [ ]₁^e = (e²/2 − e²/4) − (0 − ¼) = **(e² + 1)/4** [1]

**7.** **(a)** x² + 7 ≡ A(x² + 3) + (Bx + C)(x + 1) [1]. x = −1: 8 = 4A, so A = 2 [1]. x²: 1 = A + B, so B = −1 [1]. Constants: 7 = 3A + C, so C = 1. **f(x) = 2/(x + 1) + (1 − x)/(x² + 3)** [1]

**(b)** ∫ 2/(x + 1) dx = 2 ln(x + 1) [1]. ∫ −x/(x² + 3) dx = −½ ln(x² + 3) [1]. ∫ 1/(x² + 3) dx = (1/√3) tan⁻¹(x/√3) [1]. Limits: 2 ln 2 − ½ ln 4 + ½ ln 3 + (1/√3)(π/6) [1] = ln 2 + ½ ln 3 + π/(6√3) = ln(2√3) + π/(6√3) [1]

*Examiner insight:* the (1 − x) numerator must be split into two integrals; one gives a logarithm and the other an inverse tangent.

**8.** u = x, dv/dx = sec²x, so v = tan x [1]. ∫ = x tan x − ∫ tan x dx [1] = x tan x + ln|cos x| [1]. [ ]₀^(π/3) = (π/3)√3 + ln ½ [1] = **π√3/3 − ln 2** [1]

**9.** u = x², dv/dx = cos x [1]: x² sin x − ∫ 2x sin x dx [1]. Second time, u = 2x, dv/dx = sin x [1]: ∫ 2x sin x dx = −2x cos x + 2 sin x [1]. So ∫ = x² sin x + 2x cos x − 2 sin x [1]. [ ]₀^(π/2) = **π²/4 − 2** [1]

*Examiner insight:* the subtraction of the second integral flips both of its signs; brackets prevent the error.

**10.** u = tan⁻¹ x, dv/dx = 1, so v = x [1]. ∫ = x tan⁻¹ x − ∫ x/(1 + x²) dx [1] = x tan⁻¹ x − ½ ln(1 + x²) [1]. [ ]₀¹ = π/4 − ½ ln 2 − 0 [1] = **π/4 − ½ ln 2** [1]

**11.** sin³x = (1 − cos²x) sin x [1]. du = −sin x dx [1]. x = 0 gives u = 1 and x = π/3 gives u = ½ [1]. The integral becomes −∫ (1 − u²) du from u = 1 to u = ½, which equals ∫ (1 − u²) du from u = ½ to u = 1 [1] = [u − u³/3] evaluated from ½ to 1 = 2/3 − 11/24 = **5/24** [1]

**12.** du = eˣ dx [1]. e^(2x) dx = eˣ × eˣ dx = (u − 1) du [1]. x = 0 gives u = 2 and x = ln 2 gives u = 3 [1]. ∫₂³ (u − 1)/u du = ∫₂³ (1 − 1/u) du [1] = [u − ln u]₂³ = 1 − ln 3 + ln 2 = 1 − ln(3/2) [1]

**13.** **(a)** sin x cos x = ½ sin 2x, so sin²x cos²x = ¼ sin²2x [1] = ¼ × ½(1 − cos 4x) = ⅛(1 − cos 4x) [1]

**(b)** ∫ = ⅛[x − (sin 4x)/4]₀^(π/8) [1] = ⅛(π/8 − ¼) [1] = **π/64 − 1/32** [1]

## Where marks are usually lost

- Missing the 1/a factor from a linear inside, especially with logarithms.
- Not making the coefficient of x² equal to 1 before using the tan⁻¹ result.
- Splitting (1 − x)/(x² + 3) into only one integral.
- Sign errors in the second application of integration by parts.
- Keeping x limits after a substitution.
- Writing a decimal when the question asks for an exact value.

## Next steps

- [3.5 study guide](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3/)
- [3.5 revision notes](/resources/cambridge-a-level-mathematics-9709-integration-cambridge-alevel-maths-3-revision-notes/)
- Mixed questions: [Pure 3 algebra and calculus practice](/resources/a-level-mathematics-pure-3-algebra-calculus-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.5 Integration.
