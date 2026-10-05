---
resourceId: "mb-ap-calcab-6.14-study-guide"
title: "Selecting Techniques for Antidifferentiation: Study Guide (Calculus AB 6.14)"
description: "Learn to read an integrand before you integrate it: the signals that point to a basic rule, rewriting, substitution, long division or completing the square, plus the BC-only methods."
course: "calculus-ab"
unit: 6
topics: ["6.14"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Basic antiderivative rules and indefinite integral notation (Topic 6.8)"
  - "Integration by substitution, including changing the limits of a definite integral (Topic 6.9)"
  - "Long division of polynomials and completing the square (Topic 6.10)"
  - "Derivatives of inverse trigonometric functions, especially arctan x (Topic 3.4)"
prerequisiteResources: ["mb-ap-calcab-6.10-study-guide"]
learningObjectives:
  - "Classify an integrand by its form and choose a technique before doing any algebra"
  - "Tell apart lookalike integrals that need different techniques, such as x/(x² + 9), 1/(x² + 9) and x²/(x² + 9)"
  - "Rewrite an integrand (expand, split, use powers, divide, complete the square) so that a known rule applies"
  - "Combine techniques in one integral, including a definite integral that needs new limits"
  - "Recognise integrands with no antiderivative in familiar functions and use technology for a definite value"
  - "Check any antiderivative by differentiating it"
skills: ["1", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "mixed"
calculatorNote: "Choosing and carrying out a technique is a no-calculator skill. A calculator is used only for the definite integral in the section on integrands with no closed form; give decimals to 3 decimal places."
related: ["mb-ap-calcab-6.14-revision-notes", "mb-ap-calcab-6.14-practice", "mb-ap-calcab-6.14-checklist"]
next: "mb-ap-calcab-6.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Classify first, calculate second. The form of the integrand tells you the technique."
  - "Look for, in order: a basic rule, a rewrite, an inner function with its derivative (substitution), a top-heavy fraction (long division), an irreducible quadratic below (complete the square)."
  - "Small changes in the integrand change the method: x/(x² + 9) is substitution, 1/(x² + 9) is arctan, x²/(x² + 9) needs division first."
  - "BC students also choose between integration by parts and linear partial fractions."
  - "Some integrands, such as e^(−x²), have no antiderivative in familiar functions. Use technology for a definite value."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.14 is shared. AB students use the basic rules, substitution, long division and completing the square. BC students use all of those plus integration by parts and linear partial fractions. The BC-only parts are labelled."
  - question: "Is there a new formula in this topic?"
    answer: "No. Topic 6.14 is about choosing among the techniques you already have. The new skill is reading the integrand and deciding what to do before you start."
  - question: "What if two techniques both work?"
    answer: "Then either is correct. Pick the one with fewer steps. Your answers may look different but should differ only by a constant; differentiate both to check."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. The basic rules, substitution, long division and completing the square are examinable for both. Integration by parts and linear partial fractions are **BC only**, and are marked that way below.

## A note on notation

This page has no equation renderer. **∫ f(x) dx** is an indefinite integral (a family of antiderivatives, so it ends with + C). **∫ (a to b) f(x) dx** is the definite integral from x = a to x = b, which is a number. **[F(x)] (a to b)** means F(b) − F(a). Angles are in radians.

## Choosing is the skill

In Topics 6.8 to 6.10 each page told you which technique to use. On a test, nobody tells you. Deciding what kind of integral you are looking at is the whole of Topic 6.14.

There is no new formula here, only a habit: **classify first, calculate second.** Before you write any working, ask what the integrand is made of. A sum of powers? A function times the derivative of its inside? A fraction whose top has a higher degree than its bottom? Each answer points to a technique.

You did the same with derivatives in Topic 3.5. For antiderivatives the choice matters more: a wrong choice usually gives no answer at all, because the algebra gets worse instead of better.

## The toolkit and the signal for each tool

Every technique has a **signal**: a feature of the integrand that tells you to use it.

| Technique | Signal in the integrand | First move | Topic |
|---|---|---|---|
| Basic rule | Matches a known derivative: xⁿ, eˣ, 1/x, sin x, cos x, sec²x, 1/(1 + x²) | Write the antiderivative directly | 6.8 |
| Rewrite | Product or quotient you can expand, a fraction over a single term, roots | Expand, split into separate terms, write √x as x^(1/2) | 6.8 |
| Substitution | An inner function g(x) together with g′(x), up to a constant factor | Let u = g(x), so du = g′(x) dx | 6.9 |
| Long division | Rational function with degree of top ≥ degree of bottom | Divide to get a polynomial plus a proper fraction | 6.10 |
| Completing the square | Quadratic in the denominator with no real roots and no matching x on top | Write it as (x − h)² + k², then use arctan | 6.10 |
| Integration by parts (**BC only**) | Product of two unlike types, such as a power times a log, exponential or trig function | ∫ u dv = uv − ∫ v du, with u chosen so du is simpler | 6.11 |
| Linear partial fractions (**BC only**) | Proper rational function whose denominator factors into different linear factors | Split into A/(x − p) + B/(x − q), then use ln | 6.12 |

Two habits make the table work:

- **Look at the whole integrand, not one part of it.** In x/(x² + 9), the x on top is the signal. In 1/(x² + 9) it is missing, and the technique changes.
- **Rewrite before you give up.** Many integrals that look hard become basic after expanding, splitting or dividing.

## A decision path

<figure>
<svg viewBox="0 0 600 520" role="img" aria-labelledby="path-title path-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="path-title">Decision path for choosing an antidifferentiation technique</title>
<desc id="path-desc">A flowchart with seven question boxes in a column on the left and an action box to the right of each. Arrows marked "no" lead down from each question to the next. Arrows marked "yes" lead right to the action. Question 1: does it match a basic rule? Yes: write the antiderivative. Question 2: can you expand, split or rewrite with powers? Yes: rewrite, then go back to question 1. Question 3: is an inner function present with its derivative, up to a constant? Yes: substitution. Question 4: is it a rational function with top degree at least bottom degree? Yes: long division first. Question 5: is there a quadratic below with no real roots? Yes: complete the square, then arctan. Question 6, marked BC only: is it a product of unlike types, or a denominator with different linear factors? Yes: integration by parts or partial fractions. Question 7: none of these fit? Then there may be no closed form, so use technology for a definite integral.</desc>
<defs>
<marker id="path-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="600" height="520" fill="#ffffff"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<rect x="10" y="10" width="330" height="50" rx="6"/>
<rect x="10" y="80" width="330" height="50" rx="6"/>
<rect x="10" y="150" width="330" height="50" rx="6"/>
<rect x="10" y="220" width="330" height="50" rx="6"/>
<rect x="10" y="290" width="330" height="50" rx="6"/>
<rect x="10" y="360" width="330" height="50" rx="6" stroke-dasharray="6 4"/>
<rect x="10" y="430" width="330" height="50" rx="6"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<rect x="380" y="10" width="210" height="50" rx="6"/>
<rect x="380" y="80" width="210" height="50" rx="6"/>
<rect x="380" y="150" width="210" height="50" rx="6"/>
<rect x="380" y="220" width="210" height="50" rx="6"/>
<rect x="380" y="290" width="210" height="50" rx="6"/>
<rect x="380" y="360" width="210" height="50" rx="6" stroke-dasharray="6 4"/>
<rect x="380" y="430" width="210" height="50" rx="6"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="20" y="31">1. Matches a basic rule? (xⁿ, eˣ, 1/x,</text><text x="20" y="49">sin, cos, sec², 1/(1 + x²) …)</text>
<text x="20" y="101">2. Can you expand, split the fraction,</text><text x="20" y="119">or write roots as powers?</text>
<text x="20" y="171">3. Inner function g(x) with g′(x) nearby,</text><text x="20" y="189">up to a constant factor?</text>
<text x="20" y="241">4. Rational, and degree of top ≥</text><text x="20" y="259">degree of bottom?</text>
<text x="20" y="311">5. Quadratic below with no real roots</text><text x="20" y="329">(and no matching x on top)?</text>
<text x="20" y="381">6. BC only: product of unlike types, or</text><text x="20" y="399">denominator with different linear factors?</text>
<text x="20" y="451">7. None of these fit?</text><text x="20" y="469">(Check for a missed rewrite first.)</text>
<text x="390" y="31">Write the antiderivative.</text><text x="390" y="49">Check by differentiating.</text>
<text x="390" y="101">Rewrite, then go back</text><text x="390" y="119">to question 1.</text>
<text x="390" y="171">Substitution: u = g(x).</text><text x="390" y="189">Change limits if definite.</text>
<text x="390" y="241">Long division first, then</text><text x="390" y="259">integrate each piece.</text>
<text x="390" y="311">Complete the square:</text><text x="390" y="329">(x − h)² + k², then arctan.</text>
<text x="390" y="381">Parts, or linear</text><text x="390" y="399">partial fractions.</text>
<text x="390" y="451">Maybe no closed form: use</text><text x="390" y="469">technology for a definite value.</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#path-arrow)">
<line x1="340" y1="35" x2="378" y2="35"/><line x1="340" y1="105" x2="378" y2="105"/><line x1="340" y1="175" x2="378" y2="175"/><line x1="340" y1="245" x2="378" y2="245"/><line x1="340" y1="315" x2="378" y2="315"/><line x1="340" y1="385" x2="378" y2="385"/><line x1="340" y1="455" x2="378" y2="455"/>
<line x1="175" y1="60" x2="175" y2="78"/><line x1="175" y1="130" x2="175" y2="148"/><line x1="175" y1="200" x2="175" y2="218"/><line x1="175" y1="270" x2="175" y2="288"/><line x1="175" y1="340" x2="175" y2="358"/><line x1="175" y1="410" x2="175" y2="428"/>
</g>
<g font-size="11" fill="#1d2b44">
<text x="346" y="30">yes</text><text x="346" y="100">yes</text><text x="346" y="170">yes</text><text x="346" y="240">yes</text><text x="346" y="310">yes</text><text x="346" y="380">yes</text><text x="346" y="450">yes</text>
<text x="182" y="73">no</text><text x="182" y="143">no</text><text x="182" y="213">no</text><text x="182" y="283">no</text><text x="182" y="353">no</text><text x="182" y="423">no</text>
</g>
<text x="10" y="505" font-size="12" fill="#1d2b44">Dashed boxes: BC-only step. AB students go from question 5 straight to question 7.</text>
</svg>
<figcaption>Figure 1. A decision path for antiderivatives. Ask the questions in order; the first "yes" gives your first move. After a rewrite, division or substitution, the new integral often goes back to question 1. Dashed outlines mark the BC-only step.</figcaption>
</figure>

The path is a guide, not a law. Sometimes two routes work. For ∫ x²(x³ + 2) dx you can expand to ∫ (x⁵ + 2x²) dx or substitute u = x³ + 2. Both are correct, and the two answers differ only by a constant. Choose the shorter route.

## Lookalike integrals: small changes, different techniques

The best way to learn the signals is to compare integrals that look almost the same. Every integral below has x² ± 9 in the denominator.

| Integral | Signal | Technique | Antiderivative |
|---|---|---|---|
| ∫ x/(x² + 9) dx | x on top is half the derivative of x² + 9 | Substitution, u = x² + 9 | ½ ln(x² + 9) + C |
| ∫ 1/(x² + 9) dx | No x on top; x² + 9 has no real roots | arctan form, with 9 = 3² | (1/3) arctan(x/3) + C |
| ∫ x²/(x² + 9) dx | Top degree 2 = bottom degree 2 | Long division: 1 − 9/(x² + 9) | x − 3 arctan(x/3) + C |
| ∫ x³/(x² + 9) dx | Top degree 3 > bottom degree 2 | Long division: x − 9x/(x² + 9), then substitution | x²/2 − (9/2) ln(x² + 9) + C |
| ∫ 1/(x² − 9) dx (**BC only**) | x² − 9 = (x − 3)(x + 3), different linear factors | Partial fractions | (1/6) ln|(x − 3)/(x + 3)| + C |

Notice three things.

- Removing the x on top turns a logarithm into an arctangent.
- Changing + 9 to − 9 turns an arctangent into logarithms, because the denominator now factors.
- x² + 9 is always positive, so ln(x² + 9) needs no absolute value bars. ln|x + 2| does.

## Worked example 1: classify, then integrate

**Question.** Find each indefinite integral. For each one, name the signal and the technique before you start.

(a) ∫ (x² − 4)/√x dx  (b) ∫ sec²(3x) e^(tan 3x) dx  (c) ∫ (x + 5)/(x + 2) dx  (d) ∫ 1/(x² − 6x + 13) dx

**(a) Signal:** a fraction over a single term with a root. **Technique:** rewrite with powers and split.

1. √x = x^(1/2), so (x² − 4)/√x = x^(3/2) − 4x^(−1/2).
2. Power rule on each term: x^(5/2)/(5/2) − 4 × x^(1/2)/(1/2).
3. **∫ (x² − 4)/√x dx = (2/5)x^(5/2) − 8√x + C**

Do not try substitution here. There is no inner function, just a quotient you can split.

**(b) Signal:** the exponent tan 3x is an inner function, and its derivative 3 sec²(3x) is present apart from the factor 3. **Technique:** substitution.

1. Let u = tan 3x. Then du = 3 sec²(3x) dx, so sec²(3x) dx = (1/3) du.
2. The integral becomes ∫ (1/3) eᵘ du = (1/3) eᵘ + C.
3. **∫ sec²(3x) e^(tan 3x) dx = (1/3) e^(tan 3x) + C**

**(c) Signal:** a rational function with top degree 1 and bottom degree 1. **Technique:** long division (or "add and subtract").

1. Write x + 5 = (x + 2) + 3. So (x + 5)/(x + 2) = 1 + 3/(x + 2).
2. Integrate each term: ∫ 1 dx = x and ∫ 3/(x + 2) dx = 3 ln|x + 2|.
3. **∫ (x + 5)/(x + 2) dx = x + 3 ln|x + 2| + C**

**(d) Signal:** a quadratic denominator with nothing on top. Check for real roots: the discriminant is 36 − 52 = −16 < 0, so it does not factor. **Technique:** complete the square, then arctan.

1. x² − 6x + 13 = (x² − 6x + 9) + 4 = (x − 3)² + 2².
2. Let u = x − 3, so du = dx. The integral is ∫ 1/(u² + 2²) du = (1/2) arctan(u/2) + C.
3. **∫ 1/(x² − 6x + 13) dx = (1/2) arctan((x − 3)/2) + C**

**Check (d) by differentiating.** The derivative of arctan(v) is v′/(1 + v²). With v = (x − 3)/2, v′ = 1/2. So the derivative of the answer is (1/2) × (1/2) / (1 + (x − 3)²/4) = (1/4) × 4/(4 + (x − 3)²) = 1/((x − 3)² + 4) = 1/(x² − 6x + 13). It matches the integrand.

## Worked example 2: split first, then two different techniques

**Question.** Evaluate ∫ (0 to 2) (x + 2)/(x² − 4x + 8) dx exactly, without a calculator.

1. **Classify.** The top has degree 1, the bottom degree 2, so no long division. The derivative of the bottom is 2x − 4 = 2(x − 2). The top is x + 2, which is **not** a constant multiple of x − 2. So substitution alone will not work.
2. **Split the top** into "a multiple of the derivative" plus "a constant": x + 2 = (x − 2) + 4. So

   **∫ (0 to 2) (x + 2)/(x² − 4x + 8) dx = ∫ (0 to 2) (x − 2)/(x² − 4x + 8) dx + ∫ (0 to 2) 4/(x² − 4x + 8) dx**

3. **First piece: substitution.** Let u = x² − 4x + 8, so du = (2x − 4) dx and (x − 2) dx = ½ du. Change the limits: x = 0 gives u = 8, and x = 2 gives u = 4. Keep them in that order, even though 8 > 4.
   ∫ (8 to 4) ½ × (1/u) du = ½ [ln u] (8 to 4) = ½ (ln 4 − ln 8) = **−½ ln 2**.
4. **Second piece: complete the square.** x² − 4x + 8 = (x − 2)² + 2². Let v = x − 2, so dv = dx, and v runs from −2 to 0.
   ∫ (−2 to 0) 4/(v² + 2²) dv = 4 × ½ [arctan(v/2)] (−2 to 0) = 2(0 − (−π/4)) = **π/2**, since arctan(−1) = −π/4.
5. **Add.**

   **∫ (0 to 2) (x + 2)/(x² − 4x + 8) dx = π/2 − ½ ln 2**

**Size check.** π/2 ≈ 1.571 and ½ ln 2 ≈ 0.347, so the integral is about **1.224**. The integrand rises from 0.25 at x = 0 to 1 at x = 2, and the interval has width 2, so the value must lie between 0.5 and 2. It does.

**Common slip.** Writing "∫ (x + 2)/(x² − 4x + 8) dx = ½ ln(x² − 4x + 8)" pretends the top is half the derivative of the bottom. It is not, and the answer would be −½ ln 2 ≈ −0.347: negative, for a positive integrand.

## When there is no formula

Some integrands have **no antiderivative that can be written with familiar functions** (powers, roots, exponentials, logarithms, trig and inverse trig functions, combined in finitely many steps). Examples include e^(−x²), sin(x²), cos(x²) and √(1 + x³). No substitution or rewriting will produce a formula, because none exists.

That does not mean the definite integral fails to exist. A continuous function on [a, b] always has a definite integral. You find its value in one of two ways:

- **With technology:** on a calculator section, ∫ (0 to 1) e^(−x²) dx ≈ **0.747**.
- **As an accumulation function:** F(x) = ∫ (0 to x) e^(−t²) dt is an antiderivative of e^(−x²) by the Fundamental Theorem (Topic 6.4), even though it has no formula in familiar functions.

So "no closed form" is a real possibility. But check first that you have not missed a signal: x e^(−x²) **does** have a formula, −½ e^(−x²) + C, by substitution.

## Worked example 3 (BC only): substitution, parts or partial fractions?

**Calculus AB students can skip this example.**

**Question.** Choose a technique for each, then integrate (x > 0 in (a) and (b)).

(a) ∫ (ln x)/x dx  (b) ∫ (ln x)/x² dx  (c) ∫ 6/(x² + 4x − 5) dx

**(a) Signal:** ln x is an inner function and 1/x, its derivative, is a factor. **Technique:** substitution. With u = ln x, du = (1/x) dx:
∫ u du = u²/2 + C, so **∫ (ln x)/x dx = (ln x)²/2 + C**.

**(b) Signal:** the extra power of x means 1/x² is **not** the derivative of ln x, so substitution fails. It is a product of a logarithm and a power. **Technique:** integration by parts with u = ln x and dv = x⁻² dx, so du = (1/x) dx and v = −1/x.
∫ (ln x)/x² dx = −(ln x)/x − ∫ (−1/x)(1/x) dx = −(ln x)/x + ∫ x⁻² dx. So **∫ (ln x)/x² dx = −(ln x)/x − 1/x + C**.

**(c) Signal:** a proper rational function, and x² + 4x − 5 = (x − 1)(x + 5) has two different linear factors. **Technique:** linear partial fractions.
6/((x − 1)(x + 5)) = A/(x − 1) + B/(x + 5). Then 6 = A(x + 5) + B(x − 1). At x = 1: 6 = 6A, so A = 1. At x = −5: 6 = −6B, so B = −1.
**∫ 6/(x² + 4x − 5) dx = ln|x − 1| − ln|x + 5| + C**, or ln|(x − 1)/(x + 5)| + C.

Parts (a) and (b) differ by one power of x, yet need different techniques.

## Always check by differentiating

Differentiate your answer and compare it with the integrand. This catches lost constants, wrong signs and the wrong technique. If two methods give answers that look different, differentiate both: they can differ only by a constant.

## Common misconceptions

- **"Start with substitution and see what happens."** Substitution only works when the derivative of the inner function is present up to a constant factor. Check for that signal first.
- **Dividing by a variable to "fix" du.** If du = 2x dx and there is no x in the integrand, you cannot write dx = du/(2x) and carry on. A leftover x means substitution is the wrong choice.
- **"Integrate the top and the bottom separately."** ∫ f/g dx is not (∫ f dx)/(∫ g dx). The same goes for products.
- **Using ln for every fraction.** ∫ 1/(x² + 9) dx is not ln(x² + 9) + C. The ln pattern needs the derivative of the bottom on top.
- **Completing the square when the quadratic factors.** If the discriminant is positive, the denominator has real roots, and completing the square gives (x − h)² − k², which is not an arctan form. In BC, use partial fractions.
- **Skipping long division.** If the top's degree is at least the bottom's, divide first. Substitution or arctan on a top-heavy fraction leads nowhere.
- **Forgetting new limits after substitution.** In a definite integral, either change the limits to u-values or switch back to x and use the original x-limits. Never mix the two.
- **"Every integral has a formula."** Some, such as ∫ e^(−x²) dx, do not. Use technology or an accumulation function for a definite value.
- **Dropping + C or the absolute value.** Write ln|x + 2|, not ln(x + 2), unless the expression inside is always positive.

## Where this leads

Topic 6.14 closes the antidifferentiation part of Unit 6. In Unit 7 you will solve differential equations by separating variables (Topic 7.6); each side of the separated equation is an integral that needs exactly this selection skill. The next topic, [Topic 7.1, Modeling Situations with Differential Equations](/advanced-course-resources/calculus-ab/7-1-modeling-situations-differential-equations-study-guide/), starts that work. If a technique felt shaky, go back to [Topic 6.8 (basic rules)](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/), [Topic 6.9 (substitution)](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/) or [Topic 6.10 (long division and completing the square)](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/). BC students can also revisit [Topic 6.11 (integration by parts)](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-study-guide/) and [Topic 6.12 (linear partial fractions)](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-checklist/) to consolidate.
