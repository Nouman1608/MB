---
resourceId: "mb-ap-calcab-5.6-study-guide"
title: "Determining Concavity of Functions over Their Domains: Study Guide (Calculus AB 5.6)"
description: "Learn what concave up and concave down mean, how the sign of f″ or the behaviour of f′ decides concavity, and how to find and justify points of inflection."
course: "calculus-ab"
unit: 5
topics: ["5.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Using f′ to decide where f increases or decreases (Topic 5.3)"
  - "Second derivatives (Topic 3.6)"
  - "Critical points and the First Derivative Test (Topics 5.2 and 5.4)"
learningObjectives:
  - "Describe concave up and concave down in terms of the slope of the graph"
  - "Decide concavity on an open interval from whether f′ is increasing or decreasing, or from the sign of f″"
  - "Find candidates for points of inflection where f″ is zero or does not exist, and test whether concavity really changes"
  - "Read concavity and inflection points of f from a graph of f′ or from information about f″"
  - "Interpret concavity in context as a rate of change that is speeding up or slowing down"
skills: ["2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator."
related: ["mb-ap-calcab-5.6-revision-notes", "mb-ap-calcab-5.6-practice", "mb-ap-calcab-5.6-checklist"]
next: "mb-ap-calcab-5.6-practice"
prerequisiteResources: ["mb-ap-calcab-5.5-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A graph is concave up on an open interval if f′ is increasing there, and concave down if f′ is decreasing there."
  - "If f″ > 0 on an interval, f is concave up there. If f″ < 0, f is concave down."
  - "A point of inflection is a point on the graph where the concavity changes."
  - "f″ = 0 (or f″ undefined) only gives a candidate. Check that f″ changes sign and that f is defined there."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.6 is common content, so the same page serves AB and BC students."
  - question: "Is a point where f″ = 0 always a point of inflection?"
    answer: "No. For f(x) = x⁴, f″(0) = 0, but f″ is positive on both sides, so the graph is concave up on both sides and there is no inflection point at x = 0."
  - question: "Can a critical point also be a point of inflection?"
    answer: "Yes. If f′ has a local minimum value of 0 at x = c, the graph has a horizontal tangent at c and changes concavity there. It is a point of inflection, but not a local extremum."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## Which way does the graph bend?

Topics 5.3 to 5.5 used the first derivative to say where a graph goes up or down. Two graphs can both be increasing and still look very different. One curves upward like the start of a ramp that gets steeper. The other rises but flattens out, like a hill near its top. **Concavity** describes this bending.

- A graph is **concave up** on an open interval if its slopes are **increasing** there: f′ is increasing. The curve bends upward, like a cup.
- A graph is **concave down** on an open interval if its slopes are **decreasing** there: f′ is decreasing. The curve bends downward, like a cap.

Concavity is a property of an **open interval**, not of a single point. Write intervals like (−2, 1), with round brackets.

<figure>
<svg viewBox="0 0 520 270" role="img" aria-labelledby="conc-title conc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="conc-title">Concave up and concave down shown by the slopes of tangent lines</title>
<desc id="conc-desc">Two panels. Left: a cup-shaped curve with three short dashed tangent lines, labelled with slopes −1, 0 and 1 from left to right, so the slopes increase. The panel is labelled concave up, f′ increasing. Right: a cap-shaped curve with three dashed tangent lines, labelled with slopes 1, 0 and −1 from left to right, so the slopes decrease. The panel is labelled concave down, f′ decreasing.</desc>
<rect x="0" y="0" width="520" height="270" fill="#ffffff"/>
<line x1="258" y1="20" x2="258" y2="250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<path d="M38.3 71.7 L47.5 95.7 L56.7 117.3 L65.8 136.3 L75.0 152.7 L84.2 166.7 L93.3 178.1 L102.5 186.9 L111.7 193.3 L120.8 197.1 L130.0 198.3 L139.2 197.1 L148.3 193.3 L157.5 186.9 L166.7 178.1 L175.8 166.7 L185.0 152.7 L194.2 136.3 L203.3 117.3 L212.5 95.7 L221.7 71.7" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M298.3 198.3 L307.5 174.3 L316.7 152.7 L325.8 133.7 L335.0 117.3 L344.2 103.3 L353.3 91.9 L362.5 83.1 L371.7 76.7 L380.8 72.9 L390.0 71.7 L399.2 72.9 L408.3 76.7 L417.5 83.1 L426.7 91.9 L435.8 103.3 L445.0 117.3 L454.2 133.7 L463.3 152.7 L472.5 174.3 L481.7 198.3" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4">
<line x1="56.7" y1="128.7" x2="111.7" y2="204.7"/><line x1="102.5" y1="198.3" x2="157.5" y2="198.3"/><line x1="148.3" y1="204.7" x2="203.3" y2="128.7"/>
<line x1="316.7" y1="141.3" x2="371.7" y2="65.3"/><line x1="362.5" y1="71.7" x2="417.5" y2="71.7"/><line x1="408.3" y1="65.3" x2="463.3" y2="141.3"/>
</g>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="84.2" cy="166.7" r="4.5"/><circle cx="130" cy="198.3" r="4.5"/><circle cx="175.8" cy="166.7" r="4.5"/>
<circle cx="344.2" cy="103.3" r="4.5"/><circle cx="390" cy="71.7" r="4.5"/><circle cx="435.8" cy="103.3" r="4.5"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="62" y="196">slope −1</text><text x="130" y="218">slope 0</text><text x="198" y="196">slope 1</text>
<text x="306" y="98">slope 1</text><text x="390" y="56">slope 0</text><text x="474" y="98">slope −1</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="130" y="244">Concave up: f′ increasing</text>
<text x="390" y="244">Concave down: f′ decreasing</text>
</g>
</svg>
<figcaption>Figure 1. Left: the slopes go −1, 0, 1 from left to right, so f′ is increasing and the graph is concave up. Right: the slopes go 1, 0, −1, so f′ is decreasing and the graph is concave down. The labels, not the shapes alone, carry the meaning.</figcaption>
</figure>

Notice that concavity is **not** the same as increasing or decreasing. The left curve falls and then rises, but it is concave up the whole time. What matters is how the **slope** changes.

## The second derivative decides concavity

f′ is increasing where its own derivative is positive. Its derivative is f″. So:

| Sign of f″ on an open interval | f′ is… | Graph of f is… |
|---|---|---|
| f″ > 0 | increasing | concave up |
| f″ < 0 | decreasing | concave down |

This gives a quick algebraic method.

1. Find f″(x).
2. Find where f″(x) = 0 or f″(x) does not exist. These x-values split the domain into intervals.
3. Test the sign of f″ in each interval (pick one value inside, or use the signs of the factors).
4. Read off concavity from the table above.

## Points of inflection

A **point of inflection** is a point on the graph of f where the concavity changes, from up to down or from down to up. Two conditions must hold at x = c:

- f is defined (and continuous) at c, so there is a point on the graph, and
- the concavity is different on the two sides of c.

Because concavity changes when f″ changes sign, the **candidates** are the x-values where f″ = 0 or f″ does not exist. But being a candidate is not enough. Look at three examples.

| Function | f″(x) | At x = 0 | Inflection point at x = 0? |
|---|---|---|---|
| x⁴ | 12x² | f″(0) = 0, but f″ > 0 on both sides | **No**: concave up on both sides |
| ∛x | −2/(9x^(5/3)) | f″(0) does not exist; f″ > 0 for x < 0, f″ < 0 for x > 0 | **Yes**, at (0, 0): concavity changes and f(0) = 0 is defined |
| 1/x | 2/x³ | f″ < 0 for x < 0, f″ > 0 for x > 0 | **No**: f(0) is not defined, so there is no point on the graph |

The title of this topic says "over their domains" for this reason. For 1/x, the graph is concave down on (−∞, 0) and concave up on (0, ∞). The concavity is different on the two pieces, but no point of the graph sits where the change happens.

**Justification sentence.** "The graph of f has a point of inflection at x = c because f″ changes sign at x = c" (and f(c) is defined). A sentence that only says "f″(c) = 0" is not a valid reason, because x⁴ shows it is not enough.

## Worked example 1: concavity from a formula

**Question.** Let f(x) = x⁴ + 2x³ − 12x² + 5. Find the open intervals on which the graph of f is concave up and concave down, and find the points of inflection. No calculator.

1. **First derivative.** f′(x) = 4x³ + 6x² − 24x.
2. **Second derivative.** f″(x) = 12x² + 12x − 24 = 12(x² + x − 2) = **12(x + 2)(x − 1)**.
3. **Candidates.** f″(x) = 0 at x = −2 and x = 1. f″ exists everywhere, since it is a polynomial.
4. **Sign of f″ on each interval.**

| Interval | Test value | 12(x + 2)(x − 1) | f″ | Concavity |
|---|---|---|---|---|
| (−∞, −2) | x = −3 | 12(−1)(−4) | + | concave up |
| (−2, 1) | x = 0 | 12(2)(−1) | − | concave down |
| (1, ∞) | x = 2 | 12(4)(1) | + | concave up |

5. **Inflection points.** f″ changes sign at both candidates, and f is defined everywhere. f(−2) = 16 − 16 − 48 + 5 = −43 and f(1) = 1 + 2 − 12 + 5 = −4.

**Answer.** The graph of f is concave up on (−∞, −2) and (1, ∞), and concave down on (−2, 1). The points of inflection are **(−2, −43)** and **(1, −4)**.

**Check.** A positive quartic (leading term x⁴) must be concave up far to the left and far to the right. The table agrees.

## Worked example 2: concavity from a graph of f′

Often you are not given f at all. You are given a graph of f′ and asked about f. The rule is the definition itself: **f is concave up where f′ is increasing, and concave down where f′ is decreasing.** The slope of the f′ graph is f″.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="fp-title fp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="fp-title">Graph of the derivative f′ for x from −0.5 to 4.5</title>
<desc id="fp-desc">The curve y = f′(x) starts below the x-axis at x = −0.5, crosses the x-axis at x = 0, rises to a local maximum at (1, 2), falls to touch the x-axis at a local minimum at (3, 0), then rises steeply. Dashed vertical lines at x = 1 and x = 3 split the picture into three parts. Labels above read f′ increasing, f′ decreasing, f′ increasing. Labels below read f concave up, f concave down, f concave up.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="50" y1="182.8" x2="505" y2="182.8" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="103" y1="285" x2="103" y2="35" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="189" y1="178.8" x2="189" y2="186.8"/><line x1="275" y1="178.8" x2="275" y2="186.8"/><line x1="361" y1="178.8" x2="361" y2="186.8"/><line x1="447" y1="178.8" x2="447" y2="186.8"/>
<line x1="99" y1="238.3" x2="107" y2="238.3"/><line x1="99" y1="127.2" x2="107" y2="127.2"/><line x1="99" y1="71.7" x2="107" y2="71.7"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="189" y="199">1</text><text x="275" y="199">2</text><text x="361" y="199">3</text><text x="447" y="199">4</text><text x="505" y="177">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="96" y="242.3">−2</text><text x="96" y="131.2">2</text><text x="96" y="75.7">4</text><text x="96" y="42">y</text>
</g>
<line x1="189" y1="35" x2="189" y2="285" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="361" y1="35" x2="361" y2="285" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<path d="M60.0 267.8 L65.4 254.6 L70.8 242.1 L76.1 230.4 L81.5 219.5 L86.9 209.2 L92.2 199.7 L97.6 190.9 L103.0 182.8 L108.4 175.3 L113.8 168.4 L119.1 162.2 L124.5 156.5 L129.9 151.4 L135.2 146.9 L140.6 142.9 L146.0 139.4 L151.4 136.4 L156.8 133.8 L162.1 131.7 L167.5 130.0 L172.9 128.8 L178.2 127.9 L183.6 127.4 L189.0 127.2 L194.4 127.4 L199.8 127.8 L205.1 128.6 L210.5 129.6 L215.9 130.9 L221.2 132.3 L226.6 134.0 L232.0 135.9 L237.4 137.9 L242.8 140.1 L248.1 142.4 L253.5 144.8 L258.9 147.3 L264.2 149.8 L269.6 152.4 L275.0 155.0 L280.4 157.6 L285.8 160.2 L291.1 162.7 L296.5 165.2 L301.9 167.6 L307.2 169.9 L312.6 172.1 L318.0 174.1 L323.4 176.0 L328.8 177.7 L334.1 179.1 L339.5 180.4 L344.9 181.4 L350.2 182.2 L355.6 182.6 L361.0 182.8 L366.4 182.6 L371.8 182.1 L377.1 181.2 L382.5 180.0 L387.9 178.3 L393.2 176.2 L398.6 173.6 L404.0 170.6 L409.4 167.1 L414.8 163.1 L420.1 158.6 L425.5 153.5 L430.9 147.8 L436.2 141.6 L441.6 134.7 L447.0 127.2 L452.4 119.1 L457.8 110.3 L463.1 100.8 L468.5 90.5 L473.9 79.6 L479.2 67.9 L484.6 55.4 L490.0 42.2" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="189" cy="127.2" r="5.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="361" cy="182.8" r="5.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="196" y="116">(1, 2)</text><text x="368" y="210">(3, 0)</text><text x="400" y="60">y = f′(x)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle" font-weight="600">
<text x="140" y="24">f′ increasing</text><text x="275" y="24">f′ decreasing</text><text x="425" y="24">f′ increasing</text>
<text x="140" y="306">f concave up</text><text x="275" y="306">f concave down</text><text x="425" y="306">f concave up</text>
</g>
</svg>
<figcaption>Figure 2. The graph of f′ (not f). Where f′ rises, f is concave up; where f′ falls, f is concave down. The turning points of f′, at x = 1 and x = 3, are where the concavity of f changes.</figcaption>
</figure>

**Question.** Figure 2 shows the graph of f′ on −0.5 < x < 4.5, where f is twice differentiable. (a) On which open intervals is the graph of f concave up? Concave down? (b) Find the x-coordinates of the points of inflection of f. (c) Is x = 3 a point of inflection, a local extremum of f, or both?

**(a)** f′ increases on (−0.5, 1) and on (3, 4.5), so f is **concave up** there. f′ decreases on (1, 3), so f is **concave down** there.

**(b)** The concavity changes at **x = 1** (f′ changes from increasing to decreasing) and at **x = 3** (from decreasing to increasing). These are the points of inflection. In terms of f″: f″ is the slope of the f′ graph, and it changes sign at x = 1 and x = 3.

**(c)** At x = 3, f′(3) = 0, so f has a horizontal tangent. But f′ is positive on both sides of 3 (the graph of f′ only touches the axis). So f does not change from increasing to decreasing: x = 3 is **not** a local extremum. It **is** a point of inflection, because f′ has a local minimum there. Compare x = 0: f′ changes sign from negative to positive, so f has a local minimum at x = 0. That is Topic 5.4, not concavity.

**Lesson.** On a graph of f′, look at **where f′ crosses the axis** for extrema of f, and at **where f′ turns** for inflection points of f.

## Concavity in context

When f measures a real quantity, concavity tells you whether its rate of change is speeding up or slowing down.

Suppose D(t) is the number of downloads of an invented app, t days after launch. If D′(t) > 0 and D″(t) < 0 on an interval, then downloads are **increasing**, but the **rate** of increase is **decreasing**: each day brings new downloads, but fewer new ones than the day before. At a point of inflection the rate of change D′ reaches a local maximum or minimum. If the graph of D switches from concave up to concave down on day c, then day c is when downloads were growing fastest (locally).

Use exact wording in answers: "D is increasing at a decreasing rate" means D′ > 0 and D″ < 0. Avoid "D is slowing down", which does not say whether D or D′ is meant.

## Common misconceptions

- **"f″(c) = 0 means an inflection point."** Not without a sign change: f(x) = x⁴ is concave up on both sides of 0.
- **"Inflection points are where f′ = 0."** Those are critical points. Inflection points are where f′ has a local maximum or minimum, which is where f″ changes sign.
- **"Concave up means increasing."** A concave up graph can be falling (left part of Figure 1). Concavity is about the slope changing, not the sign of the slope.
- **Reading the f′ graph as if it were f.** On a graph of f′, a "hill" means f′ has a local maximum, so f has an inflection point, not a local maximum.
- **Forgetting points where f″ does not exist.** ∛x has an inflection point at (0, 0) even though f″(0) does not exist.
- **Calling a gap in the domain an inflection point.** 1/x changes concavity at x = 0, but there is no point on the graph there.
- **Giving only the x-value when asked for the point.** A point of inflection is a point (c, f(c)). Give both coordinates when asked for the point.
- **Using closed intervals for concavity.** Concavity is stated on open intervals.

## Where this leads

Concavity is the second derivative's main job. In Topic 5.7 you will use the sign of f″ at a critical point to classify it as a local maximum or minimum: [Using the Second Derivative Test to Determine Extrema](/advanced-course-resources/calculus-ab/5-7-second-derivative-test-determine-extrema-study-guide/). Topics 5.8 and 5.9 then combine f, f′ and f″ to sketch and analyse whole graphs. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-6-determining-concavity-functions-over-their-checklist/) to consolidate.
