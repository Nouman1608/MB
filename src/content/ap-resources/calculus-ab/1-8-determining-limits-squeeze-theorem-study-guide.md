---
resourceId: "mb-ap-calcab-1.8-study-guide"
title: "Determining Limits Using the Squeeze Theorem: Study Guide (Calculus AB 1.8)"
description: "Learn when a limit can be trapped between two simpler functions, how to check the three conditions of the squeeze theorem, and why sin x / x tends to 1."
course: "calculus-ab"
unit: 1
topics: ["1.8"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and the properties of limits (Topics 1.2 to 1.5)"
  - "Rewriting 0/0 limits with algebra (Topic 1.6)"
  - "The graphs of sin x and cos x, and the fact that both stay between −1 and 1"
  - "Radian measure, arc length and sector area on the unit circle"
prerequisiteResources: ["mb-ap-calcab-1.7-study-guide"]
learningObjectives:
  - "State the squeeze theorem and check each of its conditions before using it"
  - "Build bounding functions from −1 ≤ sin u ≤ 1 and −1 ≤ cos u ≤ 1, using absolute values where a factor can be negative"
  - "Use the squeeze theorem to find limits that algebra and the limit laws cannot reach"
  - "Explain why sin x / x tends to 1 and (1 − cos x)/x tends to 0 as x tends to 0, and use both results"
  - "Say what the squeeze theorem does not tell you, such as the value of f(a)"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every limit here without a calculator. Angles are in radians. A table of values is a check, not a method."
related: ["mb-ap-calcab-1.8-revision-notes", "mb-ap-calcab-1.8-practice", "mb-ap-calcab-1.8-checklist"]
next: "mb-ap-calcab-1.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If g(x) ≤ f(x) ≤ h(x) for all x near a (except possibly at a), and g and h have the same limit L at a, then f also has limit L at a."
  - "Check three things before you use it: the inequality, where it holds, and that both outer limits are equal."
  - "Typical bounds come from −1 ≤ sin u ≤ 1. Multiply by a quantity that is never negative, such as x² or |x|."
  - "Two results to know: sin x / x → 1 and (1 − cos x)/x → 0 as x → 0, with x in radians."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.8 is common content, so the same page serves AB and BC students. The two trig limits proved here are used again for the derivatives of sin x and cos x in Unit 2."
  - question: "Is the squeeze theorem the same as the sandwich theorem?"
    answer: "Yes. Some books call it the sandwich theorem. The statement and the conditions are the same."
  - question: "If the two bounding limits are different, does the limit of f not exist?"
    answer: "Not necessarily. The theorem simply gives no conclusion. The limit of f might exist or might not; you need another method to decide."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (x → 0) f(x)** means "the limit as x approaches 0 of f(x)".

On paper, write the usual form with "x → 0" under "lim". The vertical bars in |x| mean the absolute value of x, so |x| is never negative. All angles are in **radians**.

## When rewriting is not enough

In Topic 1.6 you turned 0/0 limits into easier ones by factoring, using conjugates or using identities. Some limits do not give in to any of these.

**Example A.** lim (x → 0) (sin x)/x. Substitution gives 0/0. But sin x has no factor of x to cancel, and no identity removes the problem.

**Example B.** lim (x → 0) x² sin(1/x). You might try the product law: "limit of x² times limit of sin(1/x)". That fails, because sin(1/x) has no limit at 0. As x → 0, 1/x grows without bound, so sin(1/x) swings between −1 and 1 infinitely often. The product law only applies when **both** limits exist.

Both limits do exist. To find them you need a different tool: trap the awkward function between two simpler ones.

## The squeeze theorem

> **Squeeze theorem.** Suppose that, for all x in an open interval containing a (except possibly at x = a),
>
> **g(x) ≤ f(x) ≤ h(x)**
>
> and that lim (x → a) g(x) = L and lim (x → a) h(x) = L. Then lim (x → a) f(x) = L.

Think of g as a floor and h as a ceiling. Near a, the floor and the ceiling both move towards the same height L. The graph of f is stuck between them, so it has nowhere else to go.

Before you use the theorem, **check three conditions**. In a written answer, show each one.

1. **The inequality.** You have two functions g and h with g(x) ≤ f(x) ≤ h(x). The order matters: the lower bound must really be below f, and the upper bound must really be above it.
2. **Where it holds.** The inequality is true for every x close to a on **both** sides. It need not hold far away from a, and it need not hold at a itself.
3. **Equal outer limits.** The limits of g and h at a exist and are the **same** number L.

If condition 3 fails (say g → 1 and h → 4), the theorem says nothing. It does not say the limit of f fails to exist. It simply gives no answer.

Notice what the theorem does **not** tell you. It gives the limit of f at a, not the value f(a). Because the inequality only needs to hold for x ≠ a, f(a) could be anything, or f might not be defined at a at all.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="sq-title sq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sq-title">Graph of y = 3 + x² sin(4/x) trapped between y = 3 − x² and y = 3 + x²</title>
<desc id="sq-desc">Axes for x from −1 to 1 and y from 0 to 4. A dashed parabola opening upwards, y = 3 + x², and a dotted parabola opening downwards, y = 3 − x², both touch the point (0, 3). A solid wavy curve, y = 3 + x² sin(4/x), runs between the two parabolas. Its waves get smaller and faster as x approaches 0, and it is squeezed towards height 3. An open circle at (0, 3) shows the function is undefined at x = 0.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="30" y1="290" x2="500" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="305" x2="260" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="40" y1="286" x2="40" y2="294"/><line x1="150" y1="286" x2="150" y2="294"/><line x1="370" y1="286" x2="370" y2="294"/><line x1="480" y1="286" x2="480" y2="294"/>
<line x1="256" y1="230" x2="264" y2="230"/><line x1="256" y1="170" x2="264" y2="170"/><line x1="256" y1="110" x2="264" y2="110"/><line x1="256" y1="50" x2="264" y2="50"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="308">−1</text><text x="150" y="308">−0.5</text><text x="370" y="308">0.5</text><text x="480" y="308">1</text><text x="505" y="294">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="252" y="234">1</text><text x="252" y="174">2</text><text x="252" y="114">3</text><text x="252" y="54">4</text><text x="252" y="22">y</text>
</g>
<path d="M40.0 50.0 L68.6 64.6 L95.0 76.2 L123.6 86.9 L150.0 95.0 L178.6 101.8 L205.0 106.2 L220.4 108.1 L233.6 109.1 L260.0 110.0 L286.4 109.1 L299.6 108.1 L315.0 106.2 L341.4 101.8 L370.0 95.0 L398.6 86.2 L425.0 76.2 L451.4 64.6 L480.0 50.0" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<path d="M40.0 170.0 L68.6 155.4 L95.0 143.8 L123.6 133.1 L150.0 125.0 L178.6 118.2 L205.0 113.8 L220.4 111.9 L233.6 110.9 L260.0 110.0 L286.4 110.9 L299.6 111.9 L315.0 113.8 L341.4 118.2 L370.0 125.0 L398.6 133.8 L425.0 143.8 L451.4 155.4 L480.0 170.0" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<path d="M40.0 64.6 L45.1 63.3 L50.1 62.6 L55.1 62.4 L59.9 62.8 L64.7 63.7 L69.5 65.2 L74.2 67.2 L78.9 69.8 L87.2 75.6 L95.9 83.4 L103.9 91.9 L120.5 110.6 L127.7 117.8 L134.8 123.2 L138.1 124.8 L141.2 125.8 L144.2 126.1 L147.2 125.8 L150.2 124.8 L153.1 123.1 L158.8 118.5 L171.2 105.4 L174.6 103.0 L177.7 102.0 L180.5 102.2 L183.3 103.5 L186.1 105.9 L192.9 112.9 L194.9 114.3 L196.7 114.8 L198.4 114.7 L200.0 113.8 L206.0 108.0 L208.5 106.8 L210.7 107.5 L214.8 111.5 L216.6 112.3 L218.1 111.8 L221.1 108.9 L222.5 108.3 L223.6 108.7 L225.9 110.9 L226.9 111.3 L227.8 111.1 L230.4 108.9 L233.2 110.9 L235.6 109.3 L237.6 110.6 L239.2 109.5 L240.6 110.5 L241.9 109.6 L243.0 110.4 L244.0 109.7 L244.8 110.3 L245.6 109.7 L246.3 110.2 L247.0 109.8 L247.5 110.2 L248.1 109.8 L248.6 110.2 L249.0 109.9 L249.4 110.1 L249.8 109.9 L254.0 110.0 M266.0 110.0 L270.2 110.1 L270.6 109.9 L271.0 110.1 L271.4 109.8 L271.9 110.2 L272.5 109.8 L273.0 110.2 L273.7 109.8 L274.4 110.3 L275.2 109.7 L276.0 110.3 L277.0 109.6 L278.1 110.4 L279.4 109.5 L280.8 110.5 L282.4 109.4 L284.4 110.7 L286.8 109.1 L289.6 111.1 L292.2 108.9 L293.1 108.7 L294.1 109.1 L296.4 111.3 L297.5 111.7 L298.9 111.1 L301.9 108.2 L303.4 107.7 L305.2 108.5 L309.3 112.5 L311.5 113.2 L314.0 112.0 L320.0 106.2 L321.6 105.3 L323.3 105.2 L325.1 105.7 L327.1 107.1 L333.9 114.1 L336.7 116.5 L339.5 117.8 L342.3 118.0 L345.4 117.0 L348.8 114.6 L361.2 101.5 L366.9 96.9 L369.8 95.2 L372.8 94.2 L375.8 93.9 L378.8 94.2 L381.9 95.2 L385.2 96.8 L392.3 102.2 L399.5 109.4 L416.1 128.1 L424.1 136.6 L432.8 144.4 L441.1 150.2 L445.8 152.8 L450.5 154.8 L455.3 156.3 L460.1 157.2 L464.9 157.6 L469.9 157.4 L474.9 156.7 L480.0 155.4" fill="none" stroke="#1d2b44" stroke-width="2.2"/>
<circle cx="260" cy="110" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="476" y="40" text-anchor="end">dashed: y = 3 + x² (ceiling)</text>
<text x="476" y="190" text-anchor="end">dotted: y = 3 − x² (floor)</text>
<text x="300" y="250">solid: y = 3 + x² sin(4/x)</text>
<text x="196" y="250" text-anchor="end">open circle at (0, 3)</text>
</g>
<line x1="345" y1="238" x2="345" y2="122" stroke="#1d2b44" stroke-width="1"/>
<line x1="180" y1="238" x2="255" y2="116" stroke="#1d2b44" stroke-width="1"/>
</svg>
<figcaption>Figure 1. The solid curve y = 3 + x² sin(4/x) wiggles between the dashed ceiling y = 3 + x² and the dotted floor y = 3 − x². Both bounds reach height 3 at x = 0, so the curve is forced towards 3 as x → 0, even though it is undefined at x = 0. Line style, not colour, tells the curves apart. Axes are unitless.</figcaption>
</figure>

## How to build the bounds

Most squeeze questions start from one fact you already know:

**−1 ≤ sin u ≤ 1 and −1 ≤ cos u ≤ 1, for every real number u.**

Here u can be anything: 1/x, 4/x, 1/(x − 3). Then build up to f in small, legal steps.

- **Multiply by a quantity that is never negative**, such as x², x⁴ or |x|. The inequality signs stay the same. Example: −x² ≤ x² sin(1/x) ≤ x².
- **Add or subtract a constant** on all three parts. The signs stay the same.
- **Watch out for factors that can be negative**, such as x or x³. If you multiply −1 ≤ cos u ≤ 1 by x, the signs flip when x < 0. The safe route is absolute values: |x cos u| = |x| |cos u| ≤ |x|, so **−|x| ≤ x cos u ≤ |x|**. This holds for every x, on both sides of 0.

Then check that both bounds have the same limit. With bounds like ±x² or ±|x| at a = 0, both limits are 0, so the trapped function tends to 0 as well.

## Worked example 1: a wiggle around a nonzero value

**Question.** Find lim (x → 0) [3 + x² sin(4/x)], justifying your answer.

1. **Try the limit laws.** The limit of 3 is 3. But lim (x → 0) sin(4/x) does not exist (it oscillates between −1 and 1), so the product law cannot be used on x² sin(4/x).
2. **Start from a known inequality.** For every x ≠ 0: −1 ≤ sin(4/x) ≤ 1.
3. **Multiply by x².** For x ≠ 0, x² > 0, so the signs stay the same: −x² ≤ x² sin(4/x) ≤ x².
4. **Add 3.** For every x ≠ 0:
   **3 − x² ≤ 3 + x² sin(4/x) ≤ 3 + x²**
5. **Check the conditions.** The inequality holds for all x ≠ 0, so it holds on an open interval around 0, except at 0. The bounds are polynomials, so lim (x → 0) (3 − x²) = 3 and lim (x → 0) (3 + x²) = 3. The outer limits are equal.
6. **Conclude.** By the squeeze theorem, lim (x → 0) [3 + x² sin(4/x)] = **3**.

**Check.** At x = 0.1 the function equals about 3.0075, and the bounds are 2.99 and 3.01. The value sits between them, as it must. At x = 0.01 it is about 2.99991.

**Interpretation.** Figure 1 shows this function. The function is not defined at x = 0, so its graph has a hole at (0, 3), yet the limit is 3.

## Worked example 2: given bounds, and what they do not tell you

**Question.** A function f is not given by a formula. You are told that for 0 < x < 3, x ≠ 1,

**x + 1 ≤ f(x) ≤ x² − x + 2.**

(a) Find lim (x → 1) f(x). (b) What can you say about f(1)? (c) Can you find lim (x → 2) f(x)?

**(a)**

1. **Is the inequality possible?** The upper bound minus the lower bound is x² − 2x + 1 = (x − 1)², which is never negative. So the floor really is below the ceiling. (The two touch only at x = 1.)
2. **Where does it hold?** On 0 < x < 3 except x = 1. That is an open interval around 1, with only x = 1 removed. Condition 2 is met.
3. **Outer limits.** Both bounds are polynomials, so substitute: 1 + 1 = 2 and 1 − 1 + 2 = 2. They are equal.
4. **Conclude.** By the squeeze theorem, lim (x → 1) f(x) = **2**.

**(b)** Nothing. The inequality was not claimed at x = 1, so f(1) could be 2, 7 or undefined. The limit and the function value are separate questions. (Topic 1.10 onwards looks at when they match.)

**(c)** No, not from this information. At x = 2 the bounds tend to 2 + 1 = 3 and 4 − 2 + 2 = 4. The outer limits are different, so condition 3 fails. All you know is that f(x) stays between about 3 and 4 near x = 2. The limit might be 3.5, or it might not exist. The squeeze theorem is silent.

## The two trig limits you must know

The squeeze theorem proves two results that the rest of the course depends on. **Both need x in radians.**

### Result 1: lim (x → 0) (sin x)/x = 1

Take 0 < x < π/2 and look at the unit circle in Figure 2. Three shapes share the corner O and the side OA of length 1.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="uc-title uc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="uc-title">Unit circle diagram comparing triangle OAP, sector OAP and triangle OAT</title>
<desc id="uc-desc">A quarter of a circle of radius 1 with centre O at the bottom left. A is the point (1, 0). P is on the arc at angle x from OA. T is directly above A on the vertical line through A, on the line from O through P. A small triangle OAP sits inside the sector OAP, which sits inside the larger triangle OAT. The height of P above OA is labelled sin x and the length AT is labelled tan x. Area formulas are listed on the right.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<defs>
<pattern id="uc-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1"/>
</pattern>
</defs>
<path d="M60 290 L280 290 A220 220 0 0 0 228.3 148.3 Z" fill="#e8edf5" stroke="none"/>
<polygon points="60,290 280,290 228.3,148.3" fill="url(#uc-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 290 A220 220 0 0 0 60 70" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="290" x2="60" y2="62" stroke="#1d2b44" stroke-width="1"/>
<polygon points="60,290 280,290 280,104.7" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="228.3" y1="148.3" x2="228.3" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<path d="M100 290 A40 40 0 0 0 90.6 264.2" fill="none" stroke="#1d2b44" stroke-width="1"/>
<g font-size="13" fill="#1d2b44">
<text x="48" y="306">O</text><text x="284" y="306">A</text><text x="214" y="142">P</text><text x="286" y="104">T</text>
<text x="104" y="282">x</text>
<text x="160" y="306">1</text>
<text x="232" y="232">sin x</text>
<text x="286" y="200">tan x</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="330" y="80">hatched triangle OAP:</text><text x="342" y="96">area = ½ sin x</text>
<text x="330" y="126">shaded sector OAP:</text><text x="342" y="142">area = ½ x</text>
<text x="330" y="172">dashed triangle OAT:</text><text x="342" y="188">area = ½ tan x</text>
<text x="330" y="222">nested, so</text><text x="342" y="238">½ sin x &lt; ½ x &lt; ½ tan x</text>
</g>
</svg>
<figcaption>Figure 2. For 0 &lt; x &lt; π/2, triangle OAP (hatched) fits inside sector OAP (shaded), which fits inside triangle OAT (dashed outline). Comparing their areas gives sin x &lt; x &lt; tan x. Shapes are told apart by hatching, shading and line style as well as by the labels. Drawn with x = 0.7 radians.</figcaption>
</figure>

1. **Compare the areas.** Triangle OAP has base 1 and height sin x, so area ½ sin x. The sector has area ½ × 1² × x = ½ x (this is where radians matter). Triangle OAT has base 1 and height tan x, so area ½ tan x. The shapes are nested, so

   **sin x < x < tan x.**

2. **Divide by sin x**, which is positive here: 1 < x / sin x < 1/cos x.
3. **Take reciprocals** (all parts positive, so the signs reverse):

   **cos x < (sin x)/x < 1.**

4. **Negative x.** Both cos x and (sin x)/x are even functions (replacing x by −x gives the same value). So the same inequality holds for −π/2 < x < 0.
5. **Squeeze.** The inequality holds for all x near 0 except 0. lim (x → 0) cos x = 1 and lim (x → 0) 1 = 1. So **lim (x → 0) (sin x)/x = 1**.

**Check.** sin(0.1)/0.1 ≈ 0.99833, and cos 0.1 ≈ 0.99500. The value sits between cos x and 1.

### Result 2: lim (x → 0) (1 − cos x)/x = 0

Step 1 above gives sin t < t for 0 < t < π/2. For t ≥ π/2, sin t ≤ 1 < t. Since sin is odd, **|sin t| ≤ |t| for every t**. Now use the identity 1 − cos x = 2 sin²(x/2), which comes from cos 2θ = 1 − 2 sin²θ:

1 − cos x = 2 sin²(x/2) ≤ 2 (x/2)² = x²/2.

Also 1 − cos x ≥ 0. Divide by |x| (positive for x ≠ 0): 0 ≤ (1 − cos x)/|x| ≤ |x|/2. Since (1 − cos x)/x is either that value or its negative,

**−|x|/2 ≤ (1 − cos x)/x ≤ |x|/2** for x ≠ 0.

Both bounds tend to 0, so **lim (x → 0) (1 − cos x)/x = 0**. (At x = 0.1 the value is about 0.04996, below the bound 0.05.)

**Degrees warning.** If x were measured in degrees, the first limit would be π/180 ≈ 0.01745, not 1. That is one reason calculus always uses radians.

## Worked example 3: using the result for sin x / x

**Question.** Find lim (x → 0) (sin 3x)/(x + x cos x).

1. **Substitution** gives 0/0, so rewrite.
2. **Factor the bottom:** x + x cos x = x(1 + cos x).
3. **Create the form sin u / u.** Multiply and divide by 3:
   (sin 3x)/(x(1 + cos x)) = 3 × (sin 3x)/(3x) × 1/(1 + cos x), for x ≠ 0 near 0.
4. **Take each limit.** Let u = 3x. As x → 0, u → 0, so (sin 3x)/(3x) → 1. Also 1/(1 + cos x) → 1/2.
5. **Product law** (now every limit exists): 3 × 1 × 1/2 = **3/2**.

**Check.** At x = 0.01 the expression is about 1.49981, close to 1.5.

## A useful shortcut: bounded times something that tends to 0

Worked example 1 is an instance of a general pattern. Suppose |b(x)| ≤ M near a, for some fixed number M, and lim (x → a) z(x) = 0. Then

−M |z(x)| ≤ b(x) z(x) ≤ M |z(x)|,

and both bounds tend to 0. So **b(x) z(x) → 0**. On a free-response answer, show the inequality and name the squeeze theorem. "Bounded times zero" on its own is a slogan, not a justification.

The word **bounded** matters. The factor 1/x is not bounded near 0, and x × (1/x) = 1 for every x ≠ 0, so that limit is 1, not 0.

## Common misconceptions

- **"Use the product law on x² sin(1/x)."** The product law needs both limits to exist. lim (x → 0) sin(1/x) does not, so the law does not apply. Use the squeeze theorem.
- **Multiplying by x without care.** From −1 ≤ cos u ≤ 1, writing −x ≤ x cos u ≤ x is wrong for x < 0. Use −|x| ≤ x cos u ≤ |x|.
- **Different outer limits, so "the limit does not exist".** If the bounds tend to different values, the theorem gives no conclusion at all.
- **Checking the inequality at a single point.** It must hold for every x in an interval around a, on both sides (except possibly at a).
- **"The squeeze gives f(a)."** It gives the limit only. f(a) can differ, or be undefined.
- **Cancelling the x in sin x / x.** sin x is not x times anything. The value 1 comes from the squeeze argument, not from cancelling.
- **Forgetting radians.** sin x / x → 1 only when x is in radians.
- **"lim (x → 0) (sin 5x)/x = 1."** The angle and the denominator must match. Rewrite as 5 × (sin 5x)/(5x), so the limit is 5.

## Where this leads

Topic 1.9 brings graphs, tables, equations and words together, so you can find the same limit from whichever representation you are given. In Unit 2 the two trig limits proved here give the derivatives of sin x and cos x. Squeeze arguments also return when you meet limits at infinity later in Unit 1, for example to show that (sin x)/x → 0 as x grows without bound. Continue with [Topic 1.9, Connecting Multiple Representations of Limits](/advanced-course-resources/calculus-ab/1-9-connecting-multiple-representations-limits-study-guide/), or go back to [Topic 1.7, Selecting Procedures for Determining Limits](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-checklist/) to consolidate.
