---
title: "Pearson Edexcel International Advanced Level Mathematics: Integration by substitution, by parts and using partial fractions (YMA01) -- Practice Questions"
seoTitle: "Edexcel IAL Maths P4 Integration Methods Practice"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration by substitution, integration by parts and integration using partial fractions"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 152
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-integration-edexcel-alevel-maths"
description: "Original practice questions with worked answers on P4 integration for Edexcel International Advanced Level Maths: substitution, parts, partial fractions."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover Pearson Edexcel International Advanced Level Mathematics (YMA01), aligned to the *International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics* specification (Issue 3, April 2019), Pure Mathematics 4 topics 6.2 and 6.3. The specification states that P3 and P4 are compulsory for IAL Mathematics and Pure Mathematics only; they are not part of IAS.

Revise first with the [study guide](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and/) and [revision notes](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-revision-notes/). Course pages: [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [checklist](/checklists/edexcel/a-level/mathematics/). Give exact answers unless a question says otherwise.

## Questions

**1.** (a) Find ∫ 5x/(x² + 3) dx. **[2]**
**(b)** Evaluate ∫ from 1 to 2 of 12/(2x − 1)⁴ dx. **[3]**

**2.** Use the substitution u = 5 − x to find ∫ x√(5 − x) dx. **[5]**

**3.** Evaluate ∫ from 0 to π/2 of x sin 2x dx. **[5]**

**4.** Evaluate ∫ from 1 to 4 of (ln x)/√x dx. **[5]**

**5.** Find ∫ x² sin x dx. **[5]**

**6.** f(x) = (7x + 3)/((x − 1)(x + 4)).

**(a)** Write f(x) as partial fractions A/(x − 1) + B/(x + 4), stating the values of A and B. **[3]**
**(b)** Hence evaluate ∫ from 2 to 6 of f(x) dx, leaving your answer in terms of ln 5 and ln 3. **[3]**

**7.** g(x) = (2x² + 2x − 9)/((x + 1)(x − 2)).

**(a)** Show that g(x) can be written as P + A/(x + 1) + B/(x − 2), and find P, A and B. **[4]**
**(b)** Hence evaluate ∫ from 3 to 5 of g(x) dx, giving the answer in the form a + ln b. **[3]**

**8.** Use the substitution u = 1 + √x to evaluate ∫ from 1 to 9 of 1/(√x (1 + √x)²) dx. **[5]**

**9.** Find ∫ e^(−x) sin 2x dx. **[6]**

**10.** Use the substitution u = x² to show that ∫ from 0 to 1 of x³ e^(x²) dx = ½. **[8]**

**11.** Show that ∫ from 1 to e of (ln x)/x³ dx = (e² − 3)/(4e²). **[6]**

## Answers

**1. (a)** The numerator is a multiple of the derivative of x² + 3, so the result is a logarithm: k ln(x² + 3) [1]. Differentiating gives 2kx/(x² + 3), so k = 5/2: **(5/2) ln(x² + 3) + c** [1]
**(b)** Write 12(2x − 1)^(−4). Antiderivative: 12 × (2x − 1)^(−3)/((−3)(2)) [1], which is −2(2x − 1)^(−3) [1]. At x = 2: −2/27. At x = 1: −2. The difference is 2 − 2/27 = **52/27** [1]
*Examiner insight:* In part (a) a modulus is not needed because x² + 3 is positive, and writing the reasoning for the factor 5/2 shows the method even if the constant slips; in part (b) the factor 1/((−3)(2)) is where most errors occur, so write it out.

**2.** u = 5 − x gives x = 5 − u and dx = −du [1].
∫ (5 − u)√u (−du) = ∫ (u^(3/2) − 5u^(1/2)) du [1]
= (2/5)u^(5/2) [1] − (10/3)u^(3/2) [1]
Substituting back: **(2/5)(5 − x)^(5/2) − (10/3)(5 − x)^(3/2) + c** [1]
*Examiner insight:* The minus sign from dx = −du is easy to drop; stating dx in terms of du on its own line, before rewriting the integrand, protects the whole question.

**3.** Take u = x and dv/dx = sin 2x, so du/dx = 1 and v = −½ cos 2x [1].
∫ x sin 2x dx = −(x/2) cos 2x + ∫ ½ cos 2x dx [1]
= −(x/2) cos 2x + ¼ sin 2x [1]
At x = π/2: −(π/4)(−1) + 0 = π/4 [1]. At x = 0: 0. The value is **π/4** [1]
*Examiner insight:* Show the choice of u and v and the evaluation at both limits. If one sign slips, a clear structure shows where the method was sound.

**4.** Take u = ln x and dv/dx = x^(−1/2), so du/dx = 1/x and v = 2x^(1/2) [1].
∫ (ln x)/√x dx = 2√x ln x − ∫ 2x^(−1/2) dx [1] = 2√x ln x − 4√x [1]
At x = 4: 4 ln 4 − 8 = 8 ln 2 − 8. At x = 1: 0 − 4 [1].
The value is **8 ln 2 − 4** [1]
*Examiner insight:* Choose ln x as u: its derivative 1/x makes the new integral a simple power. Taking u = x^(−1/2) would leave you needing the integral of ln x in the next step, which is harder than the original.

**5.** First pass: u = x², dv/dx = sin x, so du/dx = 2x and v = −cos x [1].
∫ x² sin x dx = −x² cos x + ∫ 2x cos x dx [1]
Second pass: u = 2x, v = sin x, so ∫ 2x cos x dx = 2x sin x − ∫ 2 sin x dx [1] = 2x sin x + 2 cos x [1]
Result: **−x² cos x + 2x sin x + 2 cos x + c** [1]
*Examiner insight:* Keep the first term in brackets when you subtract the second integral, and check by differentiating: the terms should collapse to x² sin x.

**6. (a)** Set 7x + 3 = A(x + 4) + B(x − 1) [1]. Put x = 1: 10 = 5A, so A = 2 [1]. Put x = −4: −25 = −5B, so B = 5 [1].
**(b)** ∫ f(x) dx = 2 ln|x − 1| + 5 ln|x + 4| [1].
From 2 to 6: (2 ln 5 + 5 ln 10) − (2 ln 1 + 5 ln 6) [1]
= 2 ln 5 + 5 ln(5/3) = **7 ln 5 − 5 ln 3** [1]
*Examiner insight:* A common slip is to leave 5 ln 10 − 5 ln 6 unsimplified, so the answer is not in terms of ln 5 and ln 3 only. Combine the logarithms of 5 first to reach 7 ln 5 − 5 ln 3.

**7. (a)** The denominator is x² − x − 2, and the numerator has the same degree, so divide first. 2x² + 2x − 9 = 2(x² − x − 2) + (4x − 5), so P = 2 [1] and the remainder is 4x − 5 [1].
Then 4x − 5 = A(x − 2) + B(x + 1) [1]. Put x = 2: 3 = 3B, so B = 1. Put x = −1: −9 = −3A, so A = 3 [1].
So g(x) = 2 + 3/(x + 1) + 1/(x − 2).
**(b)** ∫ g(x) dx = 2x + 3 ln(x + 1) + ln(x − 2) [1]
At x = 5: 10 + 3 ln 6 + ln 3. At x = 3: 6 + 3 ln 4 + 0 [1]
Difference: 4 + 3 ln(3/2) + ln 3 = 4 + ln(27/8 × 3) = **4 + ln(81/8)** [1]
*Examiner insight:* If you apply partial fractions to a top-heavy fraction without dividing first, the constants cannot match, so test the degrees before you start. Check A and B by putting x = 0 into both forms.

**8.** u = 1 + √x gives du = dx/(2√x), so dx/√x = 2 du [1]. When x = 1, u = 2; when x = 9, u = 4 [1].
The integral becomes ∫ from 2 to 4 of 2/u² du [1]
= [−2/u] from 2 to 4 [1]
= −½ − (−1) = **½** [1]
*Examiner insight:* When the substitution is given, the work lies in converting dx and the limits accurately. Writing both limits in u removes any need to return to x.

**9.** First pass: u = sin 2x, dv/dx = e^(−x), so du/dx = 2 cos 2x and v = −e^(−x) [1].
Let I = ∫ e^(−x) sin 2x dx. Then I = −e^(−x) sin 2x + 2 ∫ e^(−x) cos 2x dx [1].
Second pass: u = cos 2x, v = −e^(−x): ∫ e^(−x) cos 2x dx = −e^(−x) cos 2x − 2I [1].
So I = −e^(−x) sin 2x − 2e^(−x) cos 2x − 4I [1], giving 5I = −e^(−x)(sin 2x + 2 cos 2x) [1].
**I = −e^(−x)(sin 2x + 2 cos 2x)/5 + c** [1]
*Examiner insight:* Use the same type of function as u on both passes. Swapping halfway undoes the first pass, and the integral you started with simply reappears.

**10.** u = x² gives du = 2x dx, so x³ dx = ½ u du [1]. The limits are u = 0 and u = 1 [1].
The integral becomes ½ ∫ from 0 to 1 of u eᵘ du [1].
Parts with U = u and dV/du = eᵘ: u eᵘ − ∫ eᵘ du [1] = u eᵘ − eᵘ [1].
At u = 1: e − e = 0. At u = 0: −1 [1]. The difference is 0 − (−1) = 1 [1].
Multiplying by ½ gives **½** [1].
*Examiner insight:* A question that gives you the result to reach rewards a complete chain of reasoning: show the new limits, the integrand in u, the parts step and the evaluation. Agreeing decimals do not replace those lines.

**11.** Take u = ln x and dv/dx = x^(−3), so du/dx = 1/x and v = −1/(2x²) [1].
∫ (ln x)/x³ dx = −(ln x)/(2x²) + ∫ 1/(2x³) dx [1] = −(ln x)/(2x²) − 1/(4x²) [1]
At x = e: −1/(2e²) − 1/(4e²) = −3/(4e²) [1]. At x = 1: 0 − 1/4 [1].
Difference: −3/(4e²) + 1/4 = **(e² − 3)/(4e²)** [1]
*Examiner insight:* A common error is to treat 1/x³ as a logarithm. Write it as x^(−3) before integrating, and take care with the sign on the lower limit.

## Where marks are usually lost

- Writing dx = du when the substitution has a coefficient, or when it is u = 5 − x, which gives dx = −du.
- Leaving an x in the integrand after substituting, instead of solving for x.
- Applying x-limits to an integral already in u.
- Dropping the sign of the second integral in parts, especially in repeated parts.
- Swapping which function is u between passes in an eˣ with sin or cos integral.
- Integrating a squared denominator as a logarithm, or a first-power denominator as a power.
- Skipping the division step when the numerator's degree is not lower than the denominator's.
- Giving an answer as separate logarithms when the question asks for a particular form.
- Omitting + c on an indefinite integral.

## Next steps

- Revise any weak method with the [revision notes](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and-revision-notes/) and the [study guide](/resources/edexcel-ial-mathematics-integration-by-substitution-integration-by-parts-and/).
- Return to the [Edexcel IAL Mathematics hub](/boards/edexcel/a-level/mathematics/) and the [printable checklist](/checklists/edexcel/a-level/mathematics/).
- Try the [free 10-minute diagnostics](/diagnostics/).
- [Book a free trial class](/trial/) if you want one-to-one help.

## Official syllabus

*International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics*, Specification Issue 3, April 2019, Pearson Education Limited. This page covers unit P4 topics 6.2 and 6.3.
