---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.16 Integration by substitution and by parts (AHL only) -- Practice Questions"
resourceType: "practice-questions"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-16"
description: "Original IB DP Maths AA HL practice on section 5.16: substitution with changed limits, integration by parts, repeated and cyclic parts, with mark schemes."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- the IB holds copyright in its own papers. Use these alongside
> the official past papers available through your school or the IB store.

These questions cover **section 5.16 of IB DP Mathematics: Analysis and Approaches: integration by substitution, integration by parts and repeated integration by parts**. It is AHL content, for HL students. All questions are calculator-free; give exact answers.

Learn the methods first in the [section 5.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16/) and the [section 5.16 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16-revision-notes/).

## Section A

**1.** Find ∫ x sin 2x dx. **[3]**

**2.** Find ∫ ln(2x) dx, for x > 0. **[3]**

**3.** Find ∫ x³ ln x dx, for x > 0. **[3]**

**4.** Show that ∫₀¹ arctan x dx = π/4 − (1/2) ln 2. **[4]**

**5.** Use the substitution u = x² + 1 to show that ∫₀^√3 x³√(x² + 1) dx = 58/15. **[5]**

## Section B

**6.** Find ∫ x² cos x dx. **[5]**

**7.** Find ∫ e^(−x) sin x dx. **[6]**

**8.** Use the substitution u = 1 + √x to find the exact value of ∫₀⁴ 1/(1 + √x) dx. **[6]**

**9.** **(a)** Find ∫ x e^(−x) dx. **[2]**
**(b)** Hence find the exact value of ∫₀¹ x² e^(−x) dx. **[4]**

**10.** Use the substitution x = sin θ to evaluate ∫₀¹ x²/√(1 − x²) dx. **[6]**

**11.** Find ∫ (ln x)² dx, for x > 0. **[5]**

**12.** **(a)** Show that ∫ sin(ln x) dx = (x/2)[sin(ln x) − cos(ln x)] + C. **[6]**
**(b)** Hence find the exact value of ∫₁^(e^π) sin(ln x) dx. **[2]**

**13.** Find the exact value of ∫₀^(π/2) x cos x dx. **[4]**

## Answers

**1.** u = x, v = −(1/2) cos 2x [1]; −(x/2) cos 2x + ∫ (1/2) cos 2x dx [1]; **−(x/2) cos 2x + (1/4) sin 2x + C** [1] **[3]**

**2.** u = ln(2x), dv/dx = 1, du/dx = 1/x [1]; x ln(2x) − ∫ 1 dx [1]; **x ln(2x) − x + C** [1] **[3]**

**3.** u = ln x, v = x⁴/4 [1]; (x⁴/4) ln x − ∫ x³/4 dx [1]; **(x⁴/4) ln x − x⁴/16 + C** [1] **[3]**

**4.** u = arctan x, v = x: [x arctan x]₀¹ − ∫₀¹ x/(1 + x²) dx [1]; = π/4 − [(1/2) ln(1 + x²)]₀¹ [1] [1]; = π/4 − (1/2) ln 2 [1] **[4]**

**5.** du = 2x dx and x² = u − 1, so x³ dx = (1/2)(u − 1) du [1]; limits u = 1 to u = 4 [1]; (1/2)∫₁⁴ (u^(3/2) − u^(1/2)) du = (1/2)[(2/5)u^(5/2) − (2/3)u^(3/2)]₁⁴ [1]; = (1/2)[(64/5 − 16/3) − (2/5 − 2/3)] [1] = (1/2)(62/5 − 14/3) = (1/2)(116/15) = 58/15 [1] **[5]**

**6.** u = x², v = sin x: x² sin x − ∫ 2x sin x dx [1] [1]; u = 2x, v = −cos x: ∫ 2x sin x dx = −2x cos x + 2 sin x [1] [1]; **x² sin x + 2x cos x − 2 sin x + C** [1] **[5]**
*Examiner insight:* The sign of the middle term is where most errors appear; subtracting −2x cos x gives +2x cos x.

**7.** Let I = ∫ e^(−x) sin x dx. u = sin x, v = −e^(−x): I = −e^(−x) sin x + ∫ e^(−x) cos x dx [1] [1]; u = cos x, v = −e^(−x): ∫ e^(−x) cos x dx = −e^(−x) cos x − I [1] [1]; so 2I = −e^(−x)(sin x + cos x) [1]; **I = −(1/2)e^(−x)(sin x + cos x) + C** [1] **[6]**

**8.** √x = u − 1, x = (u − 1)², dx = 2(u − 1) du [1] [1]; limits u = 1 to u = 3 [1]; ∫₁³ 2(u − 1)/u du = ∫₁³ (2 − 2/u) du [1]; = [2u − 2 ln u]₁³ = (6 − 2 ln 3) − 2 [1] = **4 − 2 ln 3** [1] **[6]**

**9. (a)** u = x, v = −e^(−x): −x e^(−x) + ∫ e^(−x) dx [1] = **−(x + 1)e^(−x) + C** [1]
**(b)** u = x², v = −e^(−x): [−x² e^(−x)]₀¹ + 2∫₀¹ x e^(−x) dx [1] [1]; = −e⁻¹ + 2[−(x + 1)e^(−x)]₀¹ = −e⁻¹ + 2(−2e⁻¹ + 1) [1] = **2 − 5/e** [1] **[6]**

**10.** dx = cos θ dθ; limits θ = 0 to π/2 [1] [1]; √(1 − sin²θ) = cos θ, so the integrand becomes sin²θ dθ [1]; sin²θ = (1 − cos 2θ)/2 [1]; [θ/2 − (sin 2θ)/4]₀^(π/2) [1] = **π/4** [1] **[6]**

**11.** u = (ln x)², dv/dx = 1: x(ln x)² − ∫ 2 ln x dx [1] [1]; ∫ ln x dx = x ln x − x [1] [1]; **x(ln x)² − 2x ln x + 2x + C** [1] **[5]**

**12. (a)** Let I = ∫ sin(ln x) dx. u = sin(ln x), dv/dx = 1: I = x sin(ln x) − ∫ cos(ln x) dx [1] [1]; u = cos(ln x), dv/dx = 1: ∫ cos(ln x) dx = x cos(ln x) + I [1] [1]; I = x sin(ln x) − x cos(ln x) − I [1]; 2I = x[sin(ln x) − cos(ln x)], giving the result [1]
**(b)** At x = e^π: (e^π/2)(0 − (−1)) = e^π/2; at x = 1: (1/2)(0 − 1) = −1/2 [1]; **(e^π + 1)/2** [1] **[8]**

**13.** u = x, v = sin x [1]; [x sin x]₀^(π/2) − ∫₀^(π/2) sin x dx [1]; = π/2 − [−cos x]₀^(π/2) = π/2 − (0 + 1) [1] = **π/2 − 1** [1] **[4]**
*Examiner insight:* The limits apply to the uv term as well; leaving [x sin x] unevaluated loses the accuracy mark.

## Where next

Revisit the choice of u in the [section 5.16 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-16/) if questions 6 to 12 caused trouble, then apply these techniques to volumes with the [section 5.17 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-17-practice/).
