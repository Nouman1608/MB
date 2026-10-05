---
resourceId: "mb-ap-calcab-4.4-study-guide"
title: "Introduction to Related Rates: Study Guide (Calculus AB 4.4)"
description: "Learn how the chain rule links the rates of quantities that change together, and how to differentiate equations with respect to time using product and quotient rules."
course: "calculus-ab"
unit: 4
topics: ["4.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule (Topic 3.1) and implicit differentiation (Topic 3.2)"
  - "The product and quotient rules (Topics 2.8 and 2.9)"
  - "Interpreting a derivative as a rate with units (Topics 4.1 and 4.3)"
  - "Area and volume formulas for squares, rectangles, cubes, circles and cylinders, and Pythagoras' theorem"
learningObjectives:
  - "Explain why the chain rule is needed when a quantity that depends on time appears inside another expression"
  - "Differentiate an equation linking several quantities with respect to time, term by term"
  - "Use the product rule or quotient rule when two changing quantities are multiplied or divided"
  - "Separate facts that hold at all times from values that hold only at one instant, and substitute the instant values only after differentiating"
  - "Calculate one rate from the others at a given instant, with units"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave π in exact answers."
related: ["mb-ap-calcab-4.4-revision-notes", "mb-ap-calcab-4.4-practice", "mb-ap-calcab-4.4-checklist"]
next: "mb-ap-calcab-4.4-practice"
prerequisiteResources: ["mb-ap-calcab-4.3-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "When several quantities change with time, differentiate the equation that links them with respect to time t."
  - "The chain rule does the linking: d/dt of g(x) is g′(x) · dx/dt."
  - "If two changing quantities are multiplied or divided, you also need the product rule or the quotient rule."
  - "Differentiate first, then substitute the values at the instant. Substituting first turns variables into constants and loses their rates."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 4.4 is common content, so the same page serves AB and BC students."
  - question: "How is this different from implicit differentiation?"
    answer: "It is the same technique. In Topic 3.2 you differentiated with respect to x and attached dy/dx to every y term. Here you differentiate with respect to time t and attach a rate such as dx/dt, dr/dt or dh/dt to every changing quantity."
  - question: "What is the difference between Topic 4.4 and Topic 4.5?"
    answer: "Topic 4.4 builds the method: differentiating a relationship with respect to time and calculating a rate. Topic 4.5 applies it to full problems where you choose the equation yourself, often from a diagram, and interpret the answer."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## Quantities that change together

In Topic 4.3 one quantity changed and you found its rate. Often several quantities change at once, and they are tied together by an equation.

Think of an ice cube melting. Its side length s gets shorter, so its volume V = s³ gets smaller. Both s and V depend on time t. Because V and s are linked by an equation, their rates dV/dt and ds/dt are linked too. These are called **related rates**.

The question is always the same: **if I know some rates at an instant, what is the rate of the other quantity at that instant?**

## The chain rule does the linking

V depends on s, and s depends on t. To find how fast V changes with time, use the chain rule:

> **dV/dt = (dV/ds) · (ds/dt)**

For V = s³, dV/ds = 3s², so

**dV/dt = 3s² · ds/dt**

Read this aloud: "the rate of change of the volume equals 3s² times the rate of change of the side". The factor ds/dt is the important part. It appears because s is not the variable you are differentiating with respect to. You are differentiating with respect to t, and s is a function of t.

This is the same idea as implicit differentiation in Topic 3.2, where every y term picked up a factor dy/dx. Here **every changing quantity picks up its own rate**. The only difference is that now all quantities are differentiated with respect to the **same** independent variable: time.

## Differentiating with respect to t: a reference table

Assume x, y, r and h all depend on t.

| Expression | Its derivative with respect to t | Rule used |
|---|---|---|
| x² | 2x · dx/dt | Chain rule |
| √x | (1/(2√x)) · dx/dt | Chain rule |
| sin x | cos x · dx/dt | Chain rule |
| πr² | 2πr · dr/dt | Chain rule (π is a constant) |
| xy | x · dy/dt + y · dx/dt | Product rule, chain rule on each factor |
| x/y | (y · dx/dt − x · dy/dt)/y² | Quotient rule, chain rule on each part |
| x² + y² | 2x · dx/dt + 2y · dy/dt | Chain rule on each term |
| πr²h | 2πrh · dr/dt + πr² · dh/dt | Product rule (r² times h), chain rule |
| 7 (or any constant) | 0 | A constant does not change |

Two habits to build:

- Every time you differentiate a changing quantity, write its rate next to it. If you write "2x" and stop, you have differentiated with respect to x, not t.
- When two changing quantities are multiplied, use the product rule. **d/dt(xy) is not (dx/dt)(dy/dt).**

## Always true, or only true now?

A related rates problem mixes two kinds of information. Sort them before you start.

| Holds at all times | Holds only at the instant asked about |
|---|---|
| The equation linking the quantities (V = s³, A = wh) | The current values (s = 5 cm, w = 40 cm) |
| A quantity that never changes (a fixed radius) | A rate given "at the moment when…" |
| A rate stated as constant ("grows at a steady 3 cm/s") | |

The equation is true at all times, so you can differentiate it. A value such as s = 5 is true only at one instant. If you put s = 5 into V = s³ first, you get V = 125, a constant, and its derivative is 0. That is wrong: the cube is still melting.

> **Order of work.** (1) Write the equation that holds at all times. (2) Differentiate both sides with respect to t. (3) Substitute the values at the instant. (4) Solve for the unknown rate and give units.

A rate's sign also carries information. A quantity that is getting smaller has a **negative** rate. If a side "shrinks by 0.2 cm per minute", then ds/dt = −0.2 cm/min.

## Worked example 1: a melting ice cube (chain rule)

**Situation.** A cube of ice keeps its cube shape as it melts. At the moment when each edge is 5 cm long, the edge length is decreasing at 0.2 cm per minute.

**Questions.** (a) How fast is the volume changing at that moment? (b) How fast is the total surface area changing at that moment?

**(a)**

1. **Sort the information.** At all times: V = s³. At this instant: s = 5 cm and ds/dt = −0.2 cm/min (negative because s is decreasing).
2. **Differentiate with respect to t:** dV/dt = 3s² · ds/dt.
3. **Substitute:** dV/dt = 3(5)²(−0.2) = 3 × 25 × (−0.2) = **−15 cm³ per minute**.
4. **Units check:** cm² × cm/min = cm³/min. Correct for a volume rate.

**Answer.** At that moment the volume is decreasing at a rate of 15 cm³ per minute.

**(b)**

1. At all times: S = 6s² (six square faces).
2. Differentiate: dS/dt = 12s · ds/dt.
3. Substitute: dS/dt = 12 × 5 × (−0.2) = **−12 cm² per minute**.

**Answer.** At that moment the surface area is decreasing at 12 cm² per minute.

**Check.** If you forget the factor ds/dt, you get dV/dt = 3 × 25 = 75. That has the wrong sign (a melting cube cannot be growing) and the wrong units (cm², not cm³/min). Units and signs catch most chain-rule slips.

## Worked example 2: resizing an image (product and quotient rules)

**Situation.** On a screen, a rectangular image is being reshaped. Its width w is increasing at 3 cm per second and its height h is decreasing at 2 cm per second. Consider the instant when w = 40 cm and h = 25 cm.

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="rect-title rect-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rect-title">A rectangle whose width is growing and whose height is shrinking</title>
<desc id="rect-desc">A solid rectangle labelled width w = 40 cm and height h = 25 cm. An arrow on the right side points outward, labelled "w increasing, dw/dt = +3 cm/s". An arrow above the rectangle points down at the top edge, labelled "h decreasing, dh/dt = −2 cm/s". A dashed rectangle shows the shape one second later: slightly wider and slightly shorter, sharing the same bottom-left corner.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<rect x="60" y="102" width="258" height="138" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<rect x="60" y="90" width="240" height="150" fill="#eef2f8" stroke="#1d2b44" stroke-width="2.5"/>
<text x="180" y="262" font-size="13" fill="#1d2b44" text-anchor="middle">w = 40 cm</text>
<text x="52" y="170" font-size="13" fill="#1d2b44" text-anchor="end">h = 25 cm</text>
<line x1="322" y1="190" x2="372" y2="190" stroke="#1d2b44" stroke-width="2"/>
<polygon points="372,184 384,190 372,196" fill="#1d2b44"/>
<text x="390" y="186" font-size="12" fill="#1d2b44">w increasing</text>
<text x="390" y="202" font-size="12" fill="#1d2b44">dw/dt = +3 cm/s</text>
<line x1="180" y1="40" x2="180" y2="74" stroke="#1d2b44" stroke-width="2"/>
<polygon points="174,74 180,86 186,74" fill="#1d2b44"/>
<text x="192" y="44" font-size="12" fill="#1d2b44">h decreasing</text>
<text x="192" y="60" font-size="12" fill="#1d2b44">dh/dt = −2 cm/s</text>
<text x="330" y="125" font-size="12" fill="#1d2b44">dashed: one second later</text>
<text x="180" y="170" font-size="13" fill="#1d2b44" text-anchor="middle">A = w × h</text>
</svg>
<figcaption>Figure 1. The width and height change at the same time, in opposite directions. Whether the area grows or shrinks depends on both rates and on the current sizes, which is why the product rule is needed. The dashed outline is the rectangle one second later, 43 cm by 23 cm, if the rates stay the same.</figcaption>
</figure>

**Questions.** (a) Find the rate of change of the area. (b) Find the rate of change of the aspect ratio R = w/h. (c) Find the rate of change of the length of the diagonal.

**(a) Area.**

1. **Sort.** At all times: A = wh. At this instant: w = 40, h = 25, dw/dt = 3, dh/dt = −2.
2. **Differentiate.** A is a product of two changing quantities, so use the product rule:
   **dA/dt = w · dh/dt + h · dw/dt**
3. **Substitute:** dA/dt = 40(−2) + 25(3) = −80 + 75 = **−5 cm² per second**.

**Answer.** At that instant the area is decreasing at 5 cm² per second. The loss from the shrinking height (80 cm²/s) is slightly bigger than the gain from the growing width (75 cm²/s).

A common wrong method multiplies the two rates: (3)(−2) = −6. That is not the product rule, and the units would be cm²/s² instead of cm²/s.

**(b) Aspect ratio.**

1. At all times: R = w/h. At this instant R = 40/25 = 1.6.
2. Quotient rule: **dR/dt = (h · dw/dt − w · dh/dt)/h²**
3. Substitute: dR/dt = (25 × 3 − 40 × (−2))/25² = (75 + 80)/625 = 155/625 = **0.248 per second**.

R has no units (cm ÷ cm), so its rate is simply "per second". The image is becoming wider relative to its height, which matches the picture.

**(c) Diagonal.**

1. At all times, by Pythagoras: D² = w² + h². At this instant D = √(1600 + 625) = √2225 = 5√89 cm.
2. Differentiate both sides (chain rule on each square): 2D · dD/dt = 2w · dw/dt + 2h · dh/dt.
3. Divide by 2 and substitute: 5√89 · dD/dt = 40(3) + 25(−2) = 120 − 50 = 70.
4. So dD/dt = 70/(5√89) = **14/√89 cm per second**, which is about 1.48 cm per second.

The diagonal is getting longer even though the area is shrinking. Different quantities built from the same w and h can change in different directions.

## Common misconceptions

- **Substituting before differentiating.** Putting w = 40 into A = wh gives A = 40h, as if the width were fixed. You then lose the dw/dt term. Substitute only after differentiating.
- **Forgetting the rate factor.** d/dt(s³) is 3s² · ds/dt, not 3s². Without ds/dt the units are wrong.
- **Multiplying rates instead of using the product rule.** d/dt(wh) ≠ (dw/dt)(dh/dt).
- **Ignoring signs.** "Decreasing at 2 cm/s" means dh/dt = −2. Using +2 gives the wrong answer and often the wrong direction.
- **Treating an instant value as a constant.** The value at the instant (s = 5) is not a constant for all time. A true constant (such as a fixed radius) has rate 0; a quantity that only takes a value at one instant keeps its own rate, which is usually not 0.
- **Differentiating with respect to different variables.** All terms must be differentiated with respect to the same variable, t.
- **Mixing units.** If one length is in metres and another in centimetres, convert before substituting.
- **Leaving out units or direction.** A rate is incomplete without units, and the sign should be explained in words.

## Where this leads

You can now differentiate a relationship with respect to time and calculate a rate. In [Topic 4.5, Solving Related Rates Problems](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/), you will build the equation yourself from a description or a diagram (similar triangles, Pythagoras, area and volume formulas), and explain the meaning of the answer in context. The interpretation skills from [Topic 4.3](/advanced-course-resources/calculus-ab/4-3-rates-change-applied-contexts-other-study-guide/) are what you will use to write that explanation. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-checklist/) to consolidate.
