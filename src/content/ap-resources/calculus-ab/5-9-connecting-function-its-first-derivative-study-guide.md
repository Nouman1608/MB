---
resourceId: "mb-ap-calcab-5.9-study-guide"
title: "Connecting a Function, Its First Derivative, and Its Second Derivative: Study Guide (Calculus AB 5.9)"
description: "Learn how the graphs of f, f′ and f″ fit together: read increase, extrema, concavity and inflection points from any one graph, and justify each claim."
course: "calculus-ab"
unit: 5
topics: ["5.9"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Increasing and decreasing intervals from the sign of f′ (Topic 5.3)"
  - "The first derivative test for relative extrema (Topic 5.4)"
  - "Concavity, inflection points and the second derivative test (Topics 5.6 and 5.7)"
  - "Sketching a function from its derivative and the reverse (Topic 5.8)"
prerequisiteResources: ["mb-ap-calcab-5.8-study-guide"]
learningObjectives:
  - "Link each key feature of the graph of f to the matching feature on the graph of f′ and on the graph of f″"
  - "Read where f increases, decreases, has relative extrema, is concave up or down, and has inflection points from a graph of f′"
  - "Say what a graph of f″ does and does not tell you about f"
  - "Decide which of three unlabelled graphs is f, which is f′ and which is f″, and explain the decision"
  - "Write justifications that name the derivative and its behaviour, not just the shape of a graph"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise everything here without a calculator. All values are read from graphs or found by factoring."
related: ["mb-ap-calcab-5.9-revision-notes", "mb-ap-calcab-5.9-practice", "mb-ap-calcab-5.9-checklist"]
next: "mb-ap-calcab-5.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The sign of f′ (above or below the x-axis) tells you whether f is increasing or decreasing."
  - "The direction of f′ (rising or falling) tells you the concavity of f. The sign of f″ tells you the same thing."
  - "Where f′ crosses the x-axis, f has a relative extremum. Where f′ has a relative extremum, f has an inflection point."
  - "A graph of f″ tells you about the concavity of f and the direction of f′, but nothing about whether f itself is increasing."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.9 is common content, so the same page serves AB and BC students."
  - question: "Why do so many questions give the graph of f′ instead of f?"
    answer: "Because one graph of f′ answers two sets of questions: its sign gives where f increases or decreases, and its slope gives where f is concave up or down. It tests whether you can move between levels."
  - question: "Can the graph of f′ tell me the value of f(3)?"
    answer: "No. The graph of f′ tells you how f changes, not where it starts. Shifting f up or down does not change f′. Finding values of f from f′ needs one known value of f and the accumulation ideas of Unit 6."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

f′ ("f prime") is the first derivative of f, and f″ ("f double prime") is the second derivative. f″ is the derivative of f′, so f″ measures the slope of the graph of f′, in the same way that f′ measures the slope of the graph of f.

Intervals are written with round brackets, for example (−3, 1) means all x between −3 and 1.

## One story told by three graphs

Topics 5.3 to 5.8 gave you separate facts: the sign of f′ and increasing, the first derivative test, concavity, the second derivative test, sketching. This topic joins them. The graphs of f, f′ and f″ are three views of the same function, and every key feature on one graph appears in a predictable form on the others.

The whole topic rests on one chain:

**f″ is the slope of f′, and f′ is the slope of f.**

So the rule for moving between two neighbouring levels is always the same. To learn whether a graph is rising or falling, look at the **sign** of the graph one level below it.

| Feature of f | What you see on the graph of f′ | What you see on the graph of f″ |
|---|---|---|
| f increasing | f′ above the x-axis (f′ > 0) | nothing decided |
| f decreasing | f′ below the x-axis (f′ < 0) | nothing decided |
| Relative maximum of f at c | f′ crosses the axis from above to below at c | if f″(c) exists, often f″(c) < 0 (not required) |
| Relative minimum of f at c | f′ crosses the axis from below to above at c | if f″(c) exists, often f″(c) > 0 (not required) |
| Horizontal tangent on f | f′ = 0 (touches or crosses the axis) | nothing decided |
| f concave up | f′ increasing (rising) | f″ above the x-axis (f″ > 0) |
| f concave down | f′ decreasing (falling) | f″ below the x-axis (f″ < 0) |
| Inflection point of f at c | f′ has a relative maximum or minimum at c | f″ changes sign at c |

Read the table one row at a time and then one column at a time. The column for f′ shows that the graph of f′ carries **two** kinds of information. Its sign (above or below the axis) gives the direction of f. Its own direction (rising or falling) gives the concavity of f. Many exam questions use exactly this: you are shown only f′ and asked about both.

The column for f″ is shorter on purpose. The sign of f″ settles concavity, but it says nothing about whether f is going up or down. A function can be concave up while it falls (think of the left half of a U).

## Reading a graph of f′

When you are given the graph of f′, ask four questions in this order.

1. **Where is f′ above or below the axis?** That gives the intervals where f increases or decreases.
2. **Where does f′ cross the axis?** A crossing from above to below is a relative maximum of f. A crossing from below to above is a relative minimum of f. A touch without crossing is a horizontal tangent with no extremum.
3. **Where is f′ rising or falling?** Rising means f is concave up. Falling means f is concave down.
4. **Where does f′ turn (have a peak or a valley)?** Those are the inflection points of f.

Two warnings. First, the **height** of the graph of f′ is a slope of f, not a value of f. A tall peak on f′ means f is climbing steeply there, not that f is large. Second, you can read f″ from the graph of f′ as a slope: if f′ is a straight segment, f″ is the gradient of that segment. Where f′ has a sharp corner, f″ does not exist, yet f can still change concavity there.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="fp-title fp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fp-title">Graph of f′, made of three straight segments, for x from −4 to 6</title>
<desc id="fp-desc">The graph of the derivative f′ is drawn for x from −4 to 6. It is made of three line segments joining the points (−4, −2), (−1, 4), (3, −4) and (6, 2). It crosses the x-axis at x = −3 going upward, at x = 1 going downward and at x = 5 going upward. It has a peak at (−1, 4) and a valley at (3, −4). Dashed vertical lines mark x = −1 and x = 3. Open circles mark the three crossings of the x-axis.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<line x1="60" y1="170" x2="490" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="230" y1="310" x2="230" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="70" y1="166" x2="70" y2="174"/><line x1="110" y1="166" x2="110" y2="174"/><line x1="150" y1="166" x2="150" y2="174"/><line x1="190" y1="166" x2="190" y2="174"/><line x1="270" y1="166" x2="270" y2="174"/><line x1="310" y1="166" x2="310" y2="174"/><line x1="350" y1="166" x2="350" y2="174"/><line x1="390" y1="166" x2="390" y2="174"/><line x1="430" y1="166" x2="430" y2="174"/><line x1="470" y1="166" x2="470" y2="174"/>
<line x1="226" y1="50" x2="234" y2="50"/><line x1="226" y1="110" x2="234" y2="110"/><line x1="226" y1="230" x2="234" y2="230"/><line x1="226" y1="290" x2="234" y2="290"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="188">−4</text><text x="110" y="188">−3</text><text x="150" y="188">−2</text><text x="190" y="158">−1</text><text x="270" y="188">1</text><text x="310" y="188">2</text><text x="350" y="158">3</text><text x="390" y="188">4</text><text x="430" y="188">5</text><text x="470" y="188">6</text>
<text x="498" y="174">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="222" y="54">4</text><text x="222" y="114">2</text><text x="222" y="234">−2</text><text x="222" y="294">−4</text>
</g>
<line x1="190" y1="50" x2="190" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="350" y1="40" x2="350" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline points="70,230 190,50 350,290 470,110" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="110" cy="170" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="270" cy="170" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="430" cy="170" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="240" y="24" font-size="13" fill="#1d2b44">y = f′(x)</text>
<text x="196" y="44" font-size="12" fill="#1d2b44">peak (−1, 4)</text>
<text x="356" y="306" font-size="12" fill="#1d2b44">valley (3, −4)</text>
</svg>
<figcaption>Figure 1. The graph of f′ used in Worked example 1. It is the graph of the derivative, not of f. Circles mark where f′ crosses the x-axis; dashed lines mark where f′ turns. Axes are unitless.</figcaption>
</figure>

## Reading a graph of f″

A graph of f″ is one level further from f. Its sign tells you two linked things:

- f″ > 0 on an interval: f′ is increasing there, and f is concave up there.
- f″ < 0 on an interval: f′ is decreasing there, and f is concave down there.
- f″ changes sign at c (and f is continuous at c): f has an inflection point at c, and f′ has a relative extremum at c.

What it cannot tell you: whether f′ is positive or negative, so whether f is increasing or decreasing, or where f has relative extrema. For those you need the values of f′, which the graph of f″ does not show. A question that gives only f″ and asks "where is f increasing?" usually also gives you some values of f′.

## Matching three unlabelled graphs

Sometimes you see three curves and must decide which is f, which is f′ and which is f″. The reliable test is the same chain: **the zeros of a derivative line up with the turning points of the graph one level up.**

1. For each curve, list where it has horizontal tangents (peaks and valleys).
2. For each curve, list where it crosses the x-axis.
3. If curve A turns exactly where curve B crosses the axis, B could be A′. Check the signs too: where A rises, B must be above the axis.
4. Build the chain f → f′ → f″. The curve that is nobody's derivative is f. The curve that is nobody's original is f″.

Do not match by shape alone ("the wiggliest one must be f"). Match by positions of features.

## Justifying a conclusion

Exam answers are marked on the reason, and the reason must name a derivative and what it is doing. Compare:

| Weak reason | Acceptable reason |
|---|---|
| "The graph goes down at x = 1." | "f has a relative maximum at x = 1 because f′ changes from positive to negative at x = 1." |
| "It is a turning point." | "f has an inflection point at x = 3 because f′ changes from decreasing to increasing at x = 3." |
| "f″ is curving up." | "f is concave up on (3, 6) because f′ is increasing on (3, 6)." |

"The graph" is ambiguous when three graphs are in play. Always say which function, and use "changes sign" or "changes from … to …" for extrema and inflection points. "f′(1) = 0" alone is not a reason for an extremum, and "f″(3) = 0" alone is not a reason for an inflection point.

## Worked example 1: everything from a graph of f′

**Question.** The function f is continuous on [−4, 6], and Figure 1 shows the graph of its derivative f′. Using the graph:

(a) Find the open intervals on which f is increasing.
(b) Find the x-values of the relative extrema of f in (−4, 6), and classify each.
(c) Find the open intervals on which f is concave up and concave down.
(d) Find the x-values of the inflection points of f.
(e) Find f″(0).

**Solution.**

(a) f′ is above the axis on (−3, 1) and on (5, 6). **f is increasing on (−3, 1) and (5, 6)**, because f′ > 0 there. (f is decreasing on (−4, −3) and (1, 5), because f′ < 0 there.)

(b) Find where f′ crosses the axis.
- At x = −3, f′ changes from negative to positive: **relative minimum** of f.
- At x = 1, f′ changes from positive to negative: **relative maximum** of f.
- At x = 5, f′ changes from negative to positive: **relative minimum** of f.

(c) f′ rises on (−4, −1) and on (3, 6), and falls on (−1, 3). So **f is concave up on (−4, −1) and (3, 6)**, and **concave down on (−1, 3)**, because f′ is increasing or decreasing on those intervals.

(d) f′ changes from increasing to decreasing at x = −1 and from decreasing to increasing at x = 3. **f has inflection points at x = −1 and x = 3.**

Notice that f″ does not exist at x = −1 or x = 3, because f′ has sharp corners there. That does not stop them being inflection points: f is continuous there and its concavity changes.

(e) Near x = 0, f′ is the segment from (−1, 4) to (3, −4). f″(0) is its slope: (−4 − 4)/(3 − (−1)) = −8/4 = **−2**. The negative sign agrees with (c): f is concave down at x = 0.

**Check.** The answers fit together. Between the maximum at x = 1 and the minimum at x = 5 there must be a change from concave down to concave up, and there is one at x = 3. The graph cannot tell you f(1) or any other value of f.

## Worked example 2: which graph is which?

**Question.** Figure 2 shows three graphs, P, Q and R, on the same x-scale. One is f, one is f′ and one is f″. Identify each, and explain.

<figure>
<svg viewBox="0 0 520 430" role="img" aria-labelledby="match-title match-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="match-title">Three unlabelled graphs P, Q and R stacked on a shared x-scale from −2.5 to 2.5</title>
<desc id="match-desc">Three panels share the same horizontal scale, with dashed vertical lines at x = −2, 0 and 2 and dotted vertical lines at about x = −1.15 and x = 1.15. Graph P, at the top, is a U-shaped curve with its lowest point at x = 0, below the axis, crossing the x-axis at about x = −1.15 and x = 1.15. Graph Q, in the middle, is W-shaped: it has low points at x = −2 and x = 2 and a high point at x = 0 where it touches the axis. Graph R, at the bottom, rises, falls and rises again: it crosses the x-axis at x = −2, 0 and 2, with a peak at about x = −1.15 and a valley at about x = 1.15. Vertical scales differ between panels.</desc>
<rect x="0" y="0" width="520" height="430" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4">
<line x1="100" y1="15" x2="100" y2="410"/><line x1="260" y1="15" x2="260" y2="410"/><line x1="420" y1="15" x2="420" y2="410"/>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="1 4">
<line x1="167.6" y1="15" x2="167.6" y2="410"/><line x1="352.4" y1="15" x2="352.4" y2="410"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="50" y1="102.5" x2="475" y2="102.5"/><line x1="50" y1="171" x2="475" y2="171"/><line x1="50" y1="354" x2="475" y2="354"/>
</g>
<g font-size="13" fill="#1d2b44" font-weight="bold">
<text x="8" y="40">P</text><text x="8" y="200">Q</text><text x="8" y="330">R</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,21.4 68.0,29.5 76.0,37.2 84.0,44.6 92.0,51.7 100.0,58.5 108.0,64.9 116.0,71.0 124.0,76.8 132.0,82.3 140.0,87.4 148.0,92.2 156.0,96.6 164.0,100.7 172.0,104.5 180.0,108.0 188.0,111.1 196.0,113.9 204.0,116.4 212.0,118.6 220.0,120.4 228.0,121.9 236.0,123.0 244.0,123.8 252.0,124.3 260.0,124.5 268.0,124.3 276.0,123.8 284.0,123.0 292.0,121.9 300.0,120.4 308.0,118.6 316.0,116.4 324.0,113.9 332.0,111.1 340.0,108.0 348.0,104.5 356.0,100.7 364.0,96.6 372.0,92.2 380.0,87.4 388.0,82.3 396.0,76.8 404.0,71.0 412.0,64.9 420.0,58.5 428.0,51.7 436.0,44.6 444.0,37.2 452.0,29.5 460.0,21.4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,231.2 68.0,242.0 76.0,249.8 84.0,255.1 92.0,258.1 100.0,259.0 108.0,258.2 116.0,255.8 124.0,252.2 132.0,247.6 140.0,242.2 148.0,236.1 156.0,229.7 164.0,223.0 172.0,216.2 180.0,209.5 188.0,203.0 196.0,196.9 204.0,191.2 212.0,186.1 220.0,181.7 228.0,177.9 236.0,174.9 244.0,172.8 252.0,171.4 260.0,171.0 268.0,171.4 276.0,172.8 284.0,174.9 292.0,177.9 300.0,181.7 308.0,186.1 316.0,191.2 324.0,196.9 332.0,203.0 340.0,209.5 348.0,216.2 356.0,223.0 364.0,229.7 372.0,236.1 380.0,242.2 388.0,247.6 396.0,252.2 404.0,255.8 412.0,258.2 420.0,259.0 428.0,258.1 436.0,255.1 444.0,249.8 452.0,242.0 460.0,231.2"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,404.6 68.0,392.0 76.0,380.7 84.0,370.6 92.0,361.7 100.0,354.0 108.0,347.3 116.0,341.7 124.0,337.0 132.0,333.3 140.0,330.4 148.0,328.3 156.0,327.0 164.0,326.4 172.0,326.4 180.0,327.0 188.0,328.2 196.0,329.8 204.0,331.9 212.0,334.3 220.0,337.1 228.0,340.2 236.0,343.4 244.0,346.9 252.0,350.4 260.0,354.0 268.0,357.6 276.0,361.1 284.0,364.6 292.0,367.8 300.0,370.9 308.0,373.7 316.0,376.1 324.0,378.2 332.0,379.8 340.0,381.0 348.0,381.6 356.0,381.6 364.0,381.0 372.0,379.7 380.0,377.6 388.0,374.7 396.0,371.0 404.0,366.3 412.0,360.7 420.0,354.0 428.0,346.3 436.0,337.4 444.0,327.3 452.0,316.0 460.0,303.4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="425">−2</text><text x="167.6" y="425">≈ −1.15</text><text x="260" y="425">0</text><text x="352.4" y="425">≈ 1.15</text><text x="420" y="425">2</text>
<text x="490" y="358">x</text>
</g>
</svg>
<figcaption>Figure 2. Three graphs on a shared x-scale. Dashed lines mark x = −2, 0 and 2; dotted lines mark x ≈ ±1.15. Each horizontal line is that panel's x-axis. Vertical scales differ between panels, so compare positions, not heights.</figcaption>
</figure>

**Solution.**

1. **List the turning points.** Q turns at x = −2, 0 and 2. R turns at about x = −1.15 and 1.15. P turns at x = 0.
2. **List the axis crossings.** R crosses at x = −2, 0 and 2. P crosses at about x = −1.15 and 1.15.
3. **Pair them.** R crosses the axis exactly where Q turns. Check signs: Q falls on (−2.5, −2), and R is below the axis there; Q rises on (−2, 0), and R is above the axis there. So **R = Q′**.
4. P crosses the axis exactly where R turns. R rises on (−2.5, −1.15), and P is above the axis there; R falls on (−1.15, 1.15), and P is below the axis there. So **P = R′**.
5. The chain is Q → R → P. **Q is f, R is f′ and P is f″.**

**Check against concavity.** P is negative on (−1.15, 1.15), so f should be concave down there. Q is indeed shaped like an upside-down cup around its high point at x = 0. The dotted lines are the inflection points of Q, the turning points of R and the zeros of P: one feature seen three ways.

**Why the chain cannot start at P.** If P were f, its derivative would have to change sign at x = 0, where P turns, and nowhere else. R changes sign three times. Q touches the axis at x = 0 but stays below it on both sides, so it never changes sign. Neither curve can be P′, so P is the end of the chain, f″.

## Worked example 3: a formula for f′

**Question.** f′(x) = (x − 1)²(x − 4). Describe the relative extrema and inflection points of f, and explain how the features of the graph of f′ produce them.

**Solution.**

1. **Signs of f′.** (x − 1)² ≥ 0 always, so the sign of f′ is the sign of x − 4 (except at x = 1, where f′ = 0). f′ < 0 for x < 4 (x ≠ 1) and f′ > 0 for x > 4. Check values: f′(0) = −4, f′(2) = −2, f′(5) = 16.
2. **Extrema.** f′ changes from negative to positive at x = 4, so **f has a relative minimum at x = 4**. At x = 1, f′ = 0 but f′ is negative on both sides: the graph of f′ **touches** the axis without crossing. So **f has no extremum at x = 1**, only a horizontal tangent.
3. **f″.** Product rule: f″(x) = 2(x − 1)(x − 4) + (x − 1)² = (x − 1)(3x − 9) = 3(x − 1)(x − 3).
4. **Signs of f″.** f″(0) = 9 > 0, f″(2) = −3 < 0, f″(4) = 9 > 0. So f″ changes sign at x = 1 and at x = 3. **f has inflection points at x = 1 and x = 3.**
5. **Link to the graph of f′.** f′ touches the axis at x = 1, which is a relative maximum of f′ (its value 0 is above the nearby negative values). It has a relative minimum at x = 3, where f′(3) = −4. The two turning points of f′ are the two inflection points of f.

**Interpretation.** At x = 1 the graph of f flattens out, levels off for an instant and keeps falling, and it changes concavity at the same point. A critical point with no extremum is often an inflection point like this, but check the sign of f″ every time.

## Common misconceptions

- **"f′ is high, so f is high."** The height of f′ is the steepness of f. f can be large while f′ is negative.
- **"f′ is decreasing, so f is decreasing."** f′ decreasing means f is concave down. f is decreasing only where f′ is **negative**.
- **"f″ > 0, so f is increasing."** f″ > 0 means f′ is increasing and f is concave up. f can still be falling: in Figure 2, on (1.15, 2), graph P (f″) is positive while graph Q (f) is going down.
- **Using the wrong level for inflection points.** On a graph of f′, inflection points of f are the **turning points** of f′, not its zeros. On a graph of f″, they are where f″ **changes sign**.
- **"f″(c) = 0 means an inflection point."** f″ must change sign. Also, an inflection point can occur where f″ does not exist, as at the corners in Figure 1.
- **Reading f values from f′.** The graph of f′ cannot give f(c). Two functions that differ by a constant have the same derivative.
- **Reasons that name no function.** "Because the graph changes direction" earns nothing when three graphs are in play. Name f′ or f″ and say how it changes.
- **Matching by shape instead of position.** Line up zeros with turning points; do not guess from which curve "looks like" a derivative.

## Where this leads

You can now move between the graphs of f, f′ and f″ in either direction and justify each claim. In [Topic 5.10, Introduction to Optimization Problems](/advanced-course-resources/calculus-ab/5-10-introduction-optimization-problems-study-guide/), you use the same tools on a purpose: find the largest or smallest value of a function on an interval, first with functions you are given and then with functions you build from a situation. If any row of the table above felt shaky, revisit [Topic 5.8](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-checklist/) to consolidate.
