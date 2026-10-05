---
resourceId: "mb-ap-calcab-2.7-study-guide"
title: "Derivatives of cos x, sin x, eˣ and ln x: Study Guide (Calculus AB 2.7)"
description: "Learn the derivatives of sin x, cos x, eˣ and ln x, why each rule is true, how to combine them with earlier rules, and how to spot a limit that is really a derivative."
course: "calculus-ab"
unit: 2
topics: ["2.7"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The derivative as a limit of a difference quotient (Topics 2.1 to 2.3)"
  - "Power, constant, sum, difference and constant multiple rules (Topics 2.5 and 2.6)"
  - "The limits of (sin h)/h and (1 − cos h)/h as h → 0 (Topic 1.8)"
  - "Radian measure, exact values of sin and cos, and the laws of logarithms"
learningObjectives:
  - "State and use the derivatives of sin x, cos x, eˣ and ln x"
  - "Combine these four rules with the sum, difference and constant multiple rules"
  - "Explain where the rules come from, using the limit definition and graphs"
  - "Recognise a limit as the definition of a known derivative and evaluate it"
  - "Use these derivatives to find tangent lines and points with a given slope"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Work without a calculator. Angles are in radians. Leave answers in exact form (e, ln 3, √3/2) unless a question asks for a decimal check."
related: ["mb-ap-calcab-2.7-revision-notes", "mb-ap-calcab-2.7-practice", "mb-ap-calcab-2.7-checklist"]
next: "mb-ap-calcab-2.7-practice"
prerequisiteResources: ["mb-ap-calcab-2.6-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "d/dx sin x = cos x, d/dx cos x = −sin x, d/dx eˣ = eˣ and d/dx ln x = 1/x (for x > 0)."
  - "The trig rules only hold when x is in radians."
  - "Combine the four rules with the sum and constant multiple rules term by term. A constant such as e², ln 4 or sin(π/6) has derivative 0."
  - "A limit of the form [f(a + h) − f(a)]/h is f′(a). If you know f′, you know the limit."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.7 is common content, so the same page serves AB and BC students."
  - question: "Do I need to prove these rules on the exam?"
    answer: "You need to use them quickly and accurately. Knowing where they come from helps you remember the signs and lets you use the limit definition with confidence, which the course does expect."
  - question: "What about sin(3x) or e^(2x)?"
    answer: "Those are compositions, so they need the chain rule from Topic 3.1. In this topic the input is always plain x, or something you can rewrite into plain x with algebra."
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

This page has no equation renderer. **d/dx f(x)** and **f′(x)** both mean "the derivative of f with respect to x". Limits are written as **lim (h → 0)** for "the limit as h approaches 0". Powers of e are written **eˣ**, or **e^(x + 3)** when the power is longer. **ln x** is the natural logarithm, the logarithm with base e.

## The four new rules

So far you can differentiate powers of x and combine them with sums and constant multiples. This topic adds four functions that appear on almost every page of calculus.

| Function | Derivative | Condition |
|---|---|---|
| sin x | cos x | x in radians |
| cos x | −sin x | x in radians |
| eˣ | eˣ | all real x |
| ln x | 1/x | x > 0 (ln x is only defined there) |

Two signs to watch: the derivative of cos x carries a **minus**, and the derivative of sin x does not. A memory aid: on the interval 0 < x < π/2, cos x is falling, so its slope must be negative. That is why −sin x, which is negative there, is its derivative.

These rules work alongside the rules from Topics 2.5 and 2.6. Differentiate a sum term by term, keep constant multiples in front, and remember that the derivative of any constant is 0.

## Why the trig rules are true

The rules come straight from the definition of the derivative. Start with sin x and use the addition formula sin(x + h) = sin x cos h + cos x sin h:

**[sin(x + h) − sin x]/h = sin x · (cos h − 1)/h + cos x · (sin h)/h**

Now let h → 0. Here x is fixed, so sin x and cos x act as constants. From Topic 1.8 you know two limits:

- lim (h → 0) (sin h)/h = 1
- lim (h → 0) (cos h − 1)/h = 0

So the limit is sin x · 0 + cos x · 1 = **cos x**.

The same method with cos(x + h) = cos x cos h − sin x sin h gives

**[cos(x + h) − cos x]/h = cos x · (cos h − 1)/h − sin x · (sin h)/h → cos x · 0 − sin x · 1 = −sin x**

**Why radians matter.** The limit (sin h)/h = 1 holds only when h is measured in radians. If x were in degrees, every slope would pick up an extra factor of π/180 ≈ 0.01745. The clean rules on this page assume radians, so set your calculator to radians whenever you check a derivative.

### The graph agrees

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="sincos-title sincos-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sincos-title">The slopes of y = sin x match the heights of y = cos x</title>
<desc id="sincos-desc">Two stacked graphs share the same x-axis scale from 0 to 2π. The top graph is y = sin x with short tangent lines drawn at x = 0, π/2, π, 3π/2 and 2π. Their slopes are 1, 0, −1, 0 and 1, and each is labelled. The bottom graph is y = cos x with solid dots at the same five x-values, at heights 1, 0, −1, 0 and 1. Dotted vertical guide lines connect each tangent point on the top graph to the matching dot on the bottom graph, showing that every slope of sin x equals the height of cos x.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<text x="20" y="22" font-size="13" fill="#1d2b44" font-weight="600">Top: y = sin x, with tangent lines</text>
<text x="20" y="212" font-size="13" fill="#1d2b44" font-weight="600">Bottom: y = cos x, with dots at the same x-values</text>
<line x1="20" y1="110" x2="540" y2="110" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="20" y1="300" x2="540" y2="300" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="50" y1="40" x2="50" y2="180" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="50" y1="230" x2="50" y2="370" stroke="#1d2b44" stroke-width="1.2"/>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="45" y="54">1</text><text x="45" y="174">−1</text>
<text x="45" y="244">1</text><text x="45" y="364">−1</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="46" y1="50" x2="54" y2="50"/><line x1="46" y1="170" x2="54" y2="170"/>
<line x1="46" y1="240" x2="54" y2="240"/><line x1="46" y1="360" x2="54" y2="360"/>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="160" y="388">π/2</text><text x="270" y="388">π</text><text x="380" y="388">3π/2</text><text x="490" y="388">2π</text><text x="535" y="318">x</text>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4">
<line x1="160" y1="50" x2="160" y2="300"/><line x1="270" y1="110" x2="270" y2="360"/><line x1="380" y1="170" x2="380" y2="300"/><line x1="490" y1="110" x2="490" y2="240"/>
</g>
<path d="M29.0 127.7 L37.0 121.1 L45.1 114.2 L53.1 107.4 L61.1 100.5 L69.2 93.8 L77.2 87.3 L85.2 81.1 L93.2 75.2 L101.3 69.9 L109.3 65.0 L117.3 60.8 L125.4 57.2 L133.4 54.3 L141.4 52.1 L149.5 50.7 L157.5 50.0 L165.5 50.2 L173.5 51.1 L181.6 52.8 L189.6 55.3 L197.6 58.5 L205.7 62.3 L213.7 66.8 L221.7 71.9 L229.8 77.4 L237.8 83.4 L245.8 89.8 L253.9 96.4 L261.9 103.1 L269.9 110.0 L277.9 116.9 L286.0 123.6 L294.0 130.2 L302.0 136.6 L310.1 142.6 L318.1 148.1 L326.1 153.2 L334.2 157.7 L342.2 161.5 L350.2 164.7 L358.2 167.2 L366.3 168.9 L374.3 169.8 L382.3 170.0 L390.4 169.3 L398.4 167.9 L406.4 165.7 L414.5 162.8 L422.5 159.2 L430.5 155.0 L438.5 150.1 L446.6 144.8 L454.6 138.9 L462.6 132.7 L470.7 126.2 L478.7 119.5 L486.7 112.6 L494.8 105.8 L502.8 98.9 L510.8 92.3" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M29.0 242.7 L37.0 241.0 L45.1 240.1 L53.1 240.1 L61.1 240.8 L69.2 242.2 L77.2 244.5 L85.2 247.4 L93.2 251.1 L101.3 255.4 L109.3 260.3 L117.3 265.7 L125.4 271.5 L133.4 277.8 L141.4 284.3 L149.5 291.0 L157.5 297.9 L165.5 304.8 L173.5 311.6 L181.6 318.2 L189.6 324.7 L197.6 330.8 L205.7 336.5 L213.7 341.7 L221.7 346.3 L229.8 350.4 L237.8 353.8 L245.8 356.5 L253.9 358.4 L261.9 359.6 L269.9 360.0 L277.9 359.6 L286.0 358.4 L294.0 356.5 L302.0 353.8 L310.1 350.4 L318.1 346.3 L326.1 341.7 L334.2 336.5 L342.2 330.8 L350.2 324.7 L358.2 318.2 L366.3 311.6 L374.3 304.8 L382.3 297.9 L390.4 291.0 L398.4 284.3 L406.4 277.8 L414.5 271.5 L422.5 265.7 L430.5 260.3 L438.5 255.4 L446.6 251.1 L454.6 247.4 L462.6 244.5 L470.7 242.2 L478.7 240.8 L486.7 240.1 L494.8 240.1 L502.8 241.0 L510.8 242.7" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 4"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="15" y1="140" x2="85" y2="80"/><line x1="125" y1="50" x2="195" y2="50"/><line x1="235" y1="80" x2="305" y2="140"/><line x1="345" y1="170" x2="415" y2="170"/><line x1="455" y1="140" x2="525" y2="80"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<circle cx="50" cy="110" r="4"/><circle cx="160" cy="50" r="4"/><circle cx="270" cy="110" r="4"/><circle cx="380" cy="170" r="4"/><circle cx="490" cy="110" r="4"/>
</g>
<g fill="#1d2b44">
<circle cx="50" cy="240" r="4.5"/><circle cx="160" cy="300" r="4.5"/><circle cx="270" cy="360" r="4.5"/><circle cx="380" cy="300" r="4.5"/><circle cx="490" cy="240" r="4.5"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="70" y="128">slope 1</text><text x="140" y="40">slope 0</text><text x="282" y="100">slope −1</text><text x="355" y="190">slope 0</text><text x="500" y="142">slope 1</text>
<text x="60" y="232">height 1</text><text x="168" y="292">0</text><text x="300" y="376">height −1</text><text x="366" y="292">0</text><text x="440" y="232">height 1</text>
</g>
</svg>
<figcaption>Figure 1. Top: y = sin x (solid curve) with tangent lines at five points. Bottom: y = cos x (dashed curve). At each marked x-value, the slope of the sine curve equals the height of the cosine curve, which is what d/dx sin x = cos x says. Axes are unitless; x is in radians.</figcaption>
</figure>

You can also check one value numerically: (sin 1.001 − sin 1)/0.001 ≈ 0.5399, and cos 1 ≈ 0.5403. The difference quotient is already close to cos 1 with h = 0.001.

## Why eˣ is its own derivative

Use the definition again, and the law e^(x + h) = eˣ · eʰ:

**[e^(x + h) − eˣ]/h = eˣ · (eʰ − 1)/h**

Everything depends on the limit of (eʰ − 1)/h. For a general base b, the value of (bʰ − 1)/h at h = 0.001 is:

| Base b | (bʰ − 1)/h at h = 0.001 |
|---|---|
| 2 | 0.6934 |
| e ≈ 2.7183 | 1.0005 |
| 3 | 1.0992 |

For b = 2 the limit is a little below 1, and for b = 3 it is a little above 1. The number e is exactly the base that makes the limit equal to 1. So the derivative of eˣ is eˣ · 1 = **eˣ**.

Graphically: the slope of y = eˣ at any point equals the height of the graph at that point. Since eˣ > 0 for all x, the graph of eˣ always has a positive slope.

## Why ln x has derivative 1/x (background)

The graph of y = ln x is the reflection of y = eˣ in the line y = x, because ln and exp are inverse functions. Reflecting in y = x swaps the x and y coordinates, so it also swaps rise and run. A slope m becomes a slope 1/m.

On y = eˣ, the point (a, eᵃ) has slope eᵃ. Its mirror image on y = ln x is (eᵃ, a), with slope 1/eᵃ. Write x for the x-coordinate of that mirror point, so x = eᵃ, and the slope of ln at x is **1/x**. A full treatment of derivatives of inverse functions comes in Topic 3.3; here you only need the rule.

<figure>
<svg viewBox="0 0 430 420" role="img" aria-labelledby="expln-title expln-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="expln-title">y = eˣ and y = ln x are reflections in y = x, and their slopes are reciprocals</title>
<desc id="expln-desc">Axes from about −2 to 4 in each direction. A solid curve y = eˣ rises steeply through (0, 1). A dashed curve y = ln x rises slowly through (1, 0). A thin dotted line y = x lies between them. Point A at (1, e) on y = eˣ has a short tangent line labelled slope e, about 2.718. Point B at (e, 1) on y = ln x, the mirror image of A, has a tangent line labelled slope 1/e, about 0.368.</desc>
<rect x="0" y="0" width="430" height="420" fill="#ffffff"/>
<line x1="10" y1="270" x2="420" y2="270" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="150" y1="410" x2="150" y2="8" stroke="#1d2b44" stroke-width="1.2"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="90" y1="266" x2="90" y2="274"/><line x1="210" y1="266" x2="210" y2="274"/><line x1="270" y1="266" x2="270" y2="274"/><line x1="330" y1="266" x2="330" y2="274"/><line x1="390" y1="266" x2="390" y2="274"/>
<line x1="146" y1="210" x2="154" y2="210"/><line x1="146" y1="150" x2="154" y2="150"/><line x1="146" y1="90" x2="154" y2="90"/><line x1="146" y1="30" x2="154" y2="30"/><line x1="146" y1="330" x2="154" y2="330"/>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="90" y="287">−1</text><text x="210" y="287">1</text><text x="270" y="287">2</text><text x="330" y="287">3</text><text x="390" y="287">4</text><text x="414" y="262">x</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="end">
<text x="143" y="214">1</text><text x="143" y="154">2</text><text x="143" y="94">3</text><text x="143" y="34">4</text><text x="143" y="334">−1</text><text x="143" y="14">y</text>
</g>
<line x1="18" y1="402" x2="414" y2="6" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<text x="372" y="76" font-size="12" fill="#1d2b44">y = x</text>
<path d="M18.0 263.4 L26.8 262.3 L35.5 261.1 L44.3 259.7 L53.0 258.1 L61.8 256.2 L70.6 254.0 L79.3 251.5 L88.1 248.6 L96.8 245.3 L105.6 241.4 L114.4 236.9 L123.1 231.7 L131.9 225.6 L140.6 218.7 L149.4 210.6 L158.2 201.3 L166.9 190.5 L175.7 177.9 L184.4 163.5 L193.2 146.7 L202.0 127.4 L210.7 104.9 L219.5 79.0 L228.2 49.0 L234.8 23.4 L237.0 14.2" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M154.9 420.0 L155.9 409.5 L157.0 399.0 L158.3 388.5 L159.9 378.0 L161.8 367.6 L164.1 357.1 L166.7 346.6 L169.9 336.1 L173.8 325.6 L178.3 315.1 L183.7 304.6 L190.1 294.1 L197.8 283.6 L206.9 273.2 L217.8 262.7 L230.7 252.2 L246.2 241.7 L264.5 231.2 L286.4 220.7 L312.5 210.2 L343.5 199.7 L380.5 189.3 L414.0 181.1" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 4"/>
<line x1="183" y1="180.3" x2="237" y2="33.5" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="235.1" y1="238.7" x2="391.1" y2="181.3" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="210" cy="106.9" r="5" fill="#1d2b44"/>
<circle cx="313.1" cy="210" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="158" y="98">A (1, e)</text><text x="240" y="70">slope e ≈ 2.718</text>
<text x="300" y="232">B (e, 1)</text><text x="300" y="248">slope 1/e ≈ 0.368</text>
<text x="246" y="24">y = eˣ (solid)</text><text x="330" y="168">y = ln x (dashed)</text>
</g>
</svg>
<figcaption>Figure 2. y = eˣ (solid) and y = ln x (dashed) are mirror images in the dotted line y = x. Point A (1, e) and point B (e, 1) are mirror images, and their tangent slopes are reciprocals: e and 1/e. This is why the slope of ln x at x is 1/x. Axes are unitless.</figcaption>
</figure>

Numerical check: (ln 2.001 − ln 2)/0.001 ≈ 0.4999, which is close to 1/2.

## Rewrite before you differentiate

In this topic the input of each function must be plain x. Some expressions can be rewritten into that form with algebra you already know:

| Expression | Rewrite | Derivative |
|---|---|---|
| ln(5x), x > 0 | ln 5 + ln x | 0 + 1/x = 1/x |
| ln(x³), x > 0 | 3 ln x | 3/x |
| e^(x + 3) | e³ · eˣ | e³ · eˣ = e^(x + 3) |
| e² + ln 4 + sin(π/6) | a constant | 0 |

The last row catches many students. e², ln 4 and sin(π/6) = 1/2 are fixed numbers, not functions of x, so each has derivative 0.

Expressions such as sin(3x), cos(x²) or e^(2x) cannot be handled yet. They need the chain rule (Topic 3.1).

## Worked example 1: a tangent line to a trig combination

**Question.** Let f(x) = 2 sin x + cos x − 3. Find the equation of the tangent line to the graph of f at x = π/2.

1. **Differentiate term by term.** d/dx (2 sin x) = 2 cos x. d/dx (cos x) = −sin x. d/dx (−3) = 0. So **f′(x) = 2 cos x − sin x**.
2. **Find the point.** f(π/2) = 2 sin(π/2) + cos(π/2) − 3 = 2(1) + 0 − 3 = **−1**. The point is (π/2, −1).
3. **Find the slope.** f′(π/2) = 2 cos(π/2) − sin(π/2) = 0 − 1 = **−1**.
4. **Write the line.** Point–slope form: y − (−1) = −1(x − π/2), so

   **y = −1 − (x − π/2)**, or equivalently y = −x + π/2 − 1.

**Check.** At x = π/2 + 0.01, f ≈ −1.0101 and the tangent line gives −1.0100. Close to the point, the line and the curve agree, as a tangent line should.

**Watch the sign.** If you wrote d/dx cos x = +sin x, you would get slope 0 + 1 = +1 and a line sloping the wrong way.

## Worked example 2: finding a point from a slope

**Question.** (a) At which point on y = ln x is the tangent line parallel to y = x/3? (b) At which point on y = eˣ is the slope of the tangent line equal to 5? (c) Is there any point on y = eˣ where the tangent line is horizontal?

**(a)**

1. Parallel lines have equal slopes, so you need a slope of 1/3.
2. The slope of y = ln x at x is 1/x. Solve 1/x = 1/3, which gives **x = 3**.
3. The point is **(3, ln 3)**, about (3, 1.0986). The tangent line there is y = ln 3 + (x − 3)/3.

**(b)**

1. The slope of y = eˣ at x is eˣ. Solve eˣ = 5.
2. Take ln of both sides: **x = ln 5** ≈ 1.6094.
3. The height is e^(ln 5) = 5, so the point is **(ln 5, 5)**. On y = eˣ, slope and height are the same number.

**(c)** A horizontal tangent needs slope 0, so you would need eˣ = 0. But eˣ > 0 for every real x. **No such point exists.** The same reasoning shows that y = ln x never has a horizontal tangent either: 1/x is never 0.

## Worked example 3: a limit that is really a derivative

The definition of the derivative says

**f′(a) = lim (h → 0) [f(a + h) − f(a)]/h**, or equivalently **f′(a) = lim (x → a) [f(x) − f(a)]/(x − a)**.

Read the other way round, some limits are derivatives in disguise. If you can name f and a, and you already know f′, the limit is f′(a).

**Question.** Evaluate each limit.

(a) lim (h → 0) [cos(π/3 + h) − 1/2]/h
(b) lim (x → 2) (eˣ − e²)/(x − 2)
(c) lim (h → 0) ln(1 + h)/h

**(a)**

1. Note that cos(π/3) = 1/2. So the limit has the shape [f(a + h) − f(a)]/h with **f(x) = cos x** and **a = π/3**.
2. The limit is f′(π/3) = −sin(π/3) = **−√3/2** ≈ −0.866.

**(b)**

1. The shape is [f(x) − f(a)]/(x − a) with **f(x) = eˣ** and **a = 2**.
2. The limit is f′(2) = **e²** ≈ 7.389.

**(c)**

1. ln 1 = 0, so ln(1 + h) = ln(1 + h) − ln 1. The shape is [f(1 + h) − f(1)]/h with **f(x) = ln x** and **a = 1**.
2. The limit is f′(1) = 1/1 = **1**.

**Check.** ln(1.001)/0.001 ≈ 0.9995, close to 1.

**Why this matters.** Substitution in each limit gives 0/0, and none of the algebra from Topic 1.6 works easily. Recognising the derivative is the cleanest route. When you write the answer, name f and a so a reader can follow your reasoning.

## Common misconceptions

- **"d/dx cos x = sin x."** The sign is negative: −sin x. Check with a graph: cos x is falling just to the right of 0.
- **"d/dx sin x = −cos x."** The sin rule has no minus sign.
- **Using degrees.** The rules assume radians. In degrees every slope is off by a factor of π/180.
- **Treating eˣ as a power of x.** The power rule needs a variable base and a constant power, as in xⁿ. eˣ has a constant base and a variable power. Writing d/dx eˣ = x·e^(x − 1) is wrong.
- **Mixing up eˣ and xᵉ.** d/dx xᵉ = e·x^(e − 1) by the power rule, while d/dx eˣ = eˣ.
- **Differentiating a constant as if it were a function.** d/dx e² = 0, not e². d/dx ln 4 = 0, not 1/4.
- **Forgetting the domain of ln x.** 1/x is defined for negative x, but ln x is not. The rule d/dx ln x = 1/x applies for x > 0.
- **"d/dx sin(3x) = cos(3x)."** The input is not plain x, so this needs the chain rule (Topic 3.1). The correct answer is not cos(3x).
- **Ignoring the limit-as-derivative shortcut.** If a 0/0 limit looks like a difference quotient of a familiar function, name f and a and use f′(a).

## Where this leads

These four derivatives are the building blocks for the rest of differentiation. In [Topic 2.8, the product rule](/advanced-course-resources/calculus-ab/2-8-product-rule-study-guide/), you will differentiate products such as x² sin x and eˣ ln x. Topic 2.9 adds the quotient rule, and Topic 2.10 uses it to find the derivatives of tan x, cot x, sec x and csc x from sin x and cos x. Unit 3 adds the chain rule, so you can handle sin(3x) and e^(x²). For the rules you are combining with here, see the [Topic 2.6 study guide](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/). For the trig limits behind the proof, see the [Topic 1.8 study guide](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-7-derivatives-cos-x-sin-x-checklist/) to consolidate.
