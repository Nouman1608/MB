---
resourceId: "mb-ap-calcab-1.3-study-guide"
title: "Estimating Limit Values from Graphs: Study Guide (Calculus AB 1.3)"
description: "Learn to read left-hand, right-hand and two-sided limits from a graph, spot jumps, asymptotes and oscillation, and see how a graph's scale can hide behaviour."
course: "calculus-ab"
unit: 1
topics: ["1.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limit notation and the meaning of a limit (Topic 1.2)"
  - "Reading coordinates from a graph drawn on a grid"
  - "The shapes of y = 1/x, y = 1/x² and y = sin x"
prerequisiteResources: ["mb-ap-calcab-1.2-study-guide"]
learningObjectives:
  - "Read a left-hand and a right-hand limit from a graph by following the curve towards x = a from each side"
  - "Decide whether a two-sided limit exists by comparing the two one-sided limits"
  - "Keep the value f(a) separate from the limit as x → a when a graph has a hole or an isolated point"
  - "Recognise a jump, unbounded behaviour and oscillation as reasons a limit does not exist"
  - "Explain how the scale or window of a graph can hide important behaviour, and when to check another way"
skills: ["2", "3", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "none-needed"
calculatorNote: "Reading limits from a graph needs no calculator. Worked example 2 discusses what a graphing tool can miss; the values quoted there are given to you."
related: ["mb-ap-calcab-1.3-revision-notes", "mb-ap-calcab-1.3-practice", "mb-ap-calcab-1.3-checklist"]
next: "mb-ap-calcab-1.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "To estimate a limit from a graph, follow the curve towards x = a from each side and read the height it approaches. Ignore the point at x = a itself."
  - "The two-sided limit exists only when the left-hand and right-hand limits both exist and are equal."
  - "On a graph, a limit fails to exist at a jump, where the curve is unbounded (a vertical asymptote), or where it oscillates without settling."
  - "A graph is only as good as its scale: a window can hide a hole, a narrow spike or an asymptote, so a graph gives an estimate, not a proof."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.3 is common content, so the same page serves AB and BC students."
  - question: "Does a filled dot at x = a tell me the limit?"
    answer: "No. A filled dot shows the value f(a). The limit depends only on the heights the curve approaches from each side, so a filled dot that sits away from the curve has no effect on it."
  - question: "If I write lim f(x) = ∞, does the limit exist?"
    answer: "No. Writing ∞ is a way of describing why the limit does not exist: the values grow without bound. A limit exists only when it is a real number."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

- **lim (x → a) f(x)** means "the limit as x approaches a of f(x)". This is the **two-sided** limit.
- **lim (x → a⁻) f(x)** is the **left-hand limit**: x approaches a through values *less than* a.
- **lim (x → a⁺) f(x)** is the **right-hand limit**: x approaches a through values *greater than* a.

The small minus or plus sign shows the direction, not the sign of the number. For example, x → 2⁻ uses values such as 1.9, 1.99 and 1.999, which are all positive.

## What a graph tells you about a limit

In Topic 1.2 you met the idea of a limit: f(x) has limit L as x → a if you can make f(x) as close to L as you like by taking x close enough to a, but not equal to a.

A graph lets you **see** this. To estimate lim (x → a) f(x):

1. Put your finger on the curve to the left of x = a and slide it towards x = a. Note the height (the y-value) it approaches.
2. Do the same from the right.
3. Ignore whatever happens exactly at x = a. A filled dot, an open circle or a gap at x = a does not change the limit.

The answer is a **height**, so it is a y-value, not an x-value. It is also an **estimate**. If the graph is drawn on a grid and the curve heads towards a grid point, you can read the value with confidence. If it heads towards a point between grid lines, give your best reading, and say it is approximate.

## One-sided and two-sided limits

The idea of a limit includes one-sided limits. Steps 1 and 2 above give the two one-sided limits. They decide the two-sided limit:

> **Two-sided rule.** lim (x → a) f(x) = L exactly when lim (x → a⁻) f(x) = L **and** lim (x → a⁺) f(x) = L.

So the two-sided limit exists only when both one-sided limits exist and agree. If they disagree, the two-sided limit does not exist, even though each one-sided limit does.

At an **endpoint** of the domain, only one side is available. If the graph starts at x = −4, you can read lim (x → −4⁺) f(x), but there are no x-values to the left of −4 to approach from.

## Reading a graph: Figure 1

Figure 1 shows a function f on the interval from x = −4 to x = 6. It has been built to show every feature you need for this topic.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="f13-title f13-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f13-title">Graph of a function f with a hole, a jump and a vertical asymptote</title>
<desc id="f13-desc">The graph runs from x = −4 to x = 6. From the filled point (−4, 3) a straight line falls to an open circle at (−2, 1), then rises in a straight line to an open circle at (1, 4). A separate filled dot sits at (−2, 3). At x = 1 a filled dot at (1, 1) starts a curve that rises slowly, then steeply, going up without bound as x approaches 3 from the left. A dashed vertical line marks x = 3. To the right of x = 3 the curve comes up from far below and levels off, passing through the filled point (5, 1.5) and ending at the filled point (6, 5/3).</desc>
<rect x="0" y="0" width="560" height="390" fill="#ffffff"/>
<line x1="40" y1="240" x2="552" y2="240" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="252" y1="375" x2="252" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="236" x2="60" y2="244"/><line x1="108" y1="236" x2="108" y2="244"/><line x1="156" y1="236" x2="156" y2="244"/><line x1="204" y1="236" x2="204" y2="244"/><line x1="300" y1="236" x2="300" y2="244"/><line x1="348" y1="236" x2="348" y2="244"/><line x1="396" y1="236" x2="396" y2="244"/><line x1="444" y1="236" x2="444" y2="244"/><line x1="492" y1="236" x2="492" y2="244"/><line x1="540" y1="236" x2="540" y2="244"/>
<line x1="248" y1="360" x2="256" y2="360"/><line x1="248" y1="300" x2="256" y2="300"/><line x1="248" y1="180" x2="256" y2="180"/><line x1="248" y1="120" x2="256" y2="120"/><line x1="248" y1="60" x2="256" y2="60"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="257">−4</text><text x="108" y="257">−3</text><text x="156" y="257">−2</text><text x="204" y="257">−1</text><text x="300" y="257">1</text><text x="348" y="257">2</text><text x="383" y="257">3</text><text x="444" y="257">4</text><text x="492" y="257">5</text><text x="540" y="257">6</text>
<text x="548" y="232">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="244" y="364">−4</text><text x="244" y="304">−2</text><text x="244" y="184">2</text><text x="244" y="124">4</text><text x="244" y="64">6</text><text x="244" y="22">y</text>
</g>
<line x1="396" y1="18" x2="396" y2="372" stroke="#1d2b44" stroke-width="1" stroke-dasharray="6 5"/>
<polyline points="60,150 156,210 300,120" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="300,210 302.2,209.6 304.4,209.3 306.6,208.9 308.7,208.5 310.9,208.1 312.9,207.7 315,207.2 317,206.8 319,206.3 321,205.8 323,205.3 324.9,204.8 326.8,204.2 328.6,203.6 330.5,203 332.3,202.4 334,201.8 335.8,201.1 337.5,200.4 339.2,199.7 340.9,198.9 342.5,198.1 344.1,197.3 345.7,196.4 347.2,195.5 348.7,194.5 350.2,193.5 351.7,192.5 353.1,191.4 354.5,190.3 355.9,189.1 357.2,187.8 358.6,186.5 359.9,185.2 361.1,183.7 362.4,182.2 363.6,180.6 364.7,178.9 365.9,177.2 367,175.3 368.1,173.4 369.2,171.3 370.2,169.2 371.2,166.9 372.2,164.5 373.2,162 374.1,159.3 375,156.5 375.8,153.6 376.7,150.5 377.5,147.2 378.3,143.8 379,140.2 379.7,136.4 380.4,132.5 381.1,128.3 381.7,124 382.4,119.5 382.9,114.8 383.5,109.9 384,104.9 384.5,99.7 385,94.3 385.4,88.9 385.8,83.4 386.2,77.8 386.6,72.3 386.9,66.8 387.2,61.4 387.5,56.3 387.7,51.4 387.9,46.8 388.1,42.6 388.3,38.9 388.4,35.8 388.5,33.3 388.6,31.5 388.6,30.4 388.6,30" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="404,360 404,359.5 404.1,358.1 404.2,355.7 404.3,352.5 404.5,348.5 404.8,343.9 405.1,338.8 405.4,333.3 405.8,327.5 406.2,321.5 406.6,315.4 407.1,309.3 407.7,303.3 408.3,297.3 408.9,291.6 409.6,286 410.3,280.7 411.1,275.6 411.9,270.8 412.7,266.1 413.6,261.8 414.5,257.6 415.5,253.7 416.6,250.1 417.6,246.6 418.7,243.3 419.9,240.3 421.1,237.4 422.3,234.7 423.6,232.2 424.9,229.8 426.3,227.5 427.7,225.4 429.2,223.4 430.7,221.5 432.2,219.7 433.8,218.1 435.5,216.5 437.1,215 438.9,213.6 440.6,212.3 442.4,211 444.3,209.8 446.2,208.7 448.1,207.6 450.1,206.6 452.1,205.7 454.2,204.7 456.3,203.9 458.5,203 460.7,202.3 462.9,201.5 465.2,200.8 467.5,200.1 469.9,199.5 472.3,198.9 474.8,198.3 477.3,197.7 479.9,197.2 482.4,196.7 485.1,196.2 487.8,195.7 490.5,195.2 493.3,194.8 496.1,194.4 498.9,194 501.8,193.6 504.8,193.2 507.7,192.9 510.8,192.5 513.9,192.2 517,191.9 520.1,191.6 523.3,191.3 526.6,191 529.9,190.8 533.2,190.5 536.6,190.2 540,190" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="156" cy="210" r="5.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="120" r="5.5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="156" cy="150" r="5" fill="#1d2b44"/>
<circle cx="300" cy="210" r="5" fill="#1d2b44"/>
<circle cx="60" cy="150" r="5" fill="#1d2b44"/>
<circle cx="540" cy="190" r="5" fill="#1d2b44"/>
<circle cx="492" cy="195" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="120" y="138">filled (−2, 3)</text>
<text x="64" y="230">open (−2, 1)</text>
<text x="308" y="114">open (1, 4)</text>
<text x="308" y="230">filled (1, 1)</text>
<text x="402" y="28">asymptote x = 3</text>
<text x="470" y="218">(5, 1.5)</text>
<text x="452" y="176">y = f(x)</text>
</g>
</svg>
<figcaption>Figure 1. A function f with four features: a hole at x = −2 (open circle at height 1, with a separate filled dot at height 3), a jump at x = 1 (open circle at height 4 on the left, filled dot at height 1 on the right), a vertical asymptote at x = 3 (dashed line), and an ordinary point at x = 5. Open circles are drawn as rings; filled dots are solid. Axes are unitless.</figcaption>
</figure>

Learn to read the symbols before you read the limits:

| Symbol on the graph | What it tells you |
|---|---|
| Open circle (ring) | The curve heads to this point, but the function does not take this value here |
| Filled dot | The value of the function at that x |
| Dashed vertical line | A vertical asymptote: the curve is unbounded near this x |
| Curve that keeps going up or down off the grid | The values grow without bound |

## Worked example 1: reading limits from Figure 1

**Question.** Use Figure 1 to estimate each value, or explain why it does not exist.

(a) lim (x → −2) f(x) and f(−2)
(b) lim (x → 1⁻) f(x), lim (x → 1⁺) f(x), lim (x → 1) f(x) and f(1)
(c) lim (x → 3) f(x)
(d) lim (x → 5) f(x)

**(a) The hole at x = −2.**

1. **From the left.** Follow the falling line towards x = −2. The heights go down towards 1.
2. **From the right.** Follow the rising line back towards x = −2. The heights also go down towards 1.
3. **Compare.** Both sides approach 1, so **lim (x → −2) f(x) = 1**.
4. **The value.** The filled dot at (−2, 3) gives **f(−2) = 3**.

The limit and the value are different. That is allowed. The limit describes where the curve is heading; the dot is a single separate value.

**(b) The jump at x = 1.**

1. **From the left.** The line rises towards the open circle at (1, 4). So **lim (x → 1⁻) f(x) = 4**.
2. **From the right.** The curve starts at the filled dot (1, 1) and the points just to the right are close to height 1. So **lim (x → 1⁺) f(x) = 1**.
3. **Compare.** 4 ≠ 1, so **lim (x → 1) f(x) does not exist**.
4. **The value.** The filled dot is at height 1, so **f(1) = 1**.

Notice that f(1) equals the right-hand limit. That does not rescue the two-sided limit. The left side still heads to 4.

**(c) The asymptote at x = 3.**

1. **From the left.** The curve climbs off the top of the grid as x → 3⁻. The values grow without bound. You can write lim (x → 3⁻) f(x) = ∞.
2. **From the right.** The curve comes up from below the grid. You can write lim (x → 3⁺) f(x) = −∞.
3. **Conclusion.** Neither one-sided limit is a real number, so **lim (x → 3) f(x) does not exist**. The reason is that f is **unbounded** near x = 3. Also, f(3) is not defined: no dot sits on the line x = 3.

**(d) The ordinary point at x = 5.**

From both sides the curve approaches height 1.5, and there is no break. So **lim (x → 5) f(x) = 1.5**, which here also equals f(5).

**Check your reading.** In this example the graph shows exact coordinates at the key points, so the readings are exact. On a plain grid with no labels, give a reading such as "about 1.5" and say it is an estimate.

## Three ways a limit can fail to exist

A limit can fail to exist at a particular x-value. On a graph you will see one of three behaviours.

| Behaviour | What the graph shows | Own example |
|---|---|---|
| **Left ≠ right** (a jump) | The two sides head to different heights | (x − 1)/\|x − 1\| at x = 1: left → −1, right → 1 |
| **Unbounded** | The curve shoots up or down along a vertical asymptote | 1/(x − 2)² at x = 2: both sides → ∞ |
| **Oscillating** | The curve wiggles faster and faster and never settles on one height | sin(π/x) at x = 0 (Figure 2) |

**A note on writing ∞.** For 1/(x − 2)², both sides grow without bound, so you may write lim (x → 2) 1/(x − 2)² = ∞. This is a **description**, not a value. It tells the reader *why* the limit does not exist. ∞ is not a real number. When the two sides go in different directions, as at x = 3 in Figure 1, write the one-sided statements separately and say the two-sided limit does not exist.

<figure>
<svg viewBox="0 0 540 280" role="img" aria-labelledby="f13b-title f13b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f13b-title">Graph of y = sin(π/x) for x between −1 and 1, oscillating near x = 0</title>
<desc id="f13b-desc">The curve stays between the dashed lines y = 1 and y = −1. Far from x = 0 it makes slow, wide waves. As x gets closer to 0 from either side the waves get narrower and narrower, until near x = 0 they are too close together to draw and the region is shown as a shaded strip. Two points are marked: (2/5, 1), at the top of a wave, and (2/7, −1), at the bottom of the next wave.</desc>
<rect x="0" y="0" width="540" height="280" fill="#ffffff"/>
<defs><pattern id="f13b-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.2"/></pattern></defs>
<line x1="20" y1="140" x2="525" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="270" y1="265" x2="270" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="20" y1="50" x2="525" y2="50" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="20" y1="230" x2="525" y2="230" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="157">−1</text><text x="155" y="157">−0.5</text><text x="385" y="157">0.5</text><text x="500" y="157">1</text><text x="520" y="132">x</text>
</g>
<g stroke="#1d2b44" stroke-width="1"><line x1="40" y1="136" x2="40" y2="144"/><line x1="155" y1="136" x2="155" y2="144"/><line x1="385" y1="136" x2="385" y2="144"/><line x1="500" y1="136" x2="500" y2="144"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="264" y="46">1</text><text x="264" y="244">−1</text><text x="264" y="22">y</text></g>
<polyline points="28.5,153.4 37.8,142.7 46.4,131.9 54.4,121.2 61.9,110.8 68.8,100.9 75.3,91.4 81.4,82.7 87.1,74.8 92.5,67.9 97.6,62 102.4,57.1 106.9,53.5 111.2,51.2 115.3,50.1 119.2,50.3 122.9,51.8 126.4,54.5 129.7,58.5 132.9,63.7 136,69.9 138.9,77.2 141.7,85.3 144.3,94.3 146.9,103.9 149.4,114 151.7,124.5 154,135.2 156.2,146 158.3,156.7 160.3,167.1 162.3,177.2 164.2,186.8 166,195.6 167.8,203.7 169.5,210.8 171.1,217 172.7,222 174.3,225.8 175.8,228.5 177.2,229.8 178.6,229.9 180,228.6 181.3,226.1 182.6,222.4 183.9,217.5 185.1,211.4 186.3,204.3 187.4,196.4 188.5,187.6 189.6,178.1 190.7,168 191.7,157.6 192.7,146.9 193.7,136.1 194.6,125.4 195.6,114.9 196.5,104.7 197.4,95.1 198.2,86.1 199.1,77.8 199.9,70.5 200.7,64.2 201.5,58.9 202.3,54.8 203,52 203.8,50.4 204.5,50 205.2,51 205.9,53.3 206.5,56.8 207.2,61.5 207.9,67.3 208.5,74.2 209.1,82 209.7,90.6 210.3,100 210.9,109.9 211.5,120.3 212,130.9 212.6,141.7 213.1,152.5 213.7,163.1 214.2,173.3 214.7,183.1 215.2,192.2 215.7,200.6 216.2,208.1 216.7,214.7 217.1,220.1 217.6,224.5 218,227.6 218.5,229.4 218.9,230 219.3,229.3 219.8,227.3 220.2,224 220.6,219.5 221,213.9 221.4,207.3 221.8,199.6 222.2,191.1 222.5,181.9 222.9,172.1 223.3,161.8 223.6,151.2 224,140.4 224.3,129.6 224.7,119 225,108.7 225.4,98.8 225.7,89.5 226,81 226.3,73.3 226.6,66.5 226.9,60.8 227.3,56.3 227.6,52.9 227.8,50.8 228.1,50 228.4,50.5 228.7,52.2 229,55.3 229.3,59.5 229.5,64.9 229.8,71.3 230.1,78.8 230.3,87.1 230.6,96.2 230.9,106 231.1,116.2 231.4,126.7 231.6,137.5 231.9,148.2 232.1,158.9 232.3,169.3 232.6,179.3 232.8,188.7 233,197.4 233.2,205.3 233.5,212.2 233.7,218.1 233.9,222.9 234.1,226.5 234.3,228.9 234.5,229.9 234.8,229.7 235,228.2 235.2,225.4 235.4,221.4 235.6,216.3 235.8,210 235.9,202.7 236.1,194.6 236.3,185.6 236.5,176 236.7,165.9 236.9,155.4 237.1,144.7 237.2,133.9 237.4,123.2 237.6,112.7 237.8,102.7 237.9,93.1 238.1,84.3 238.3,76.2 238.4,69.1 238.6,63 238.8,57.9 238.9,54.1 239.1,51.5 239.3,50.2 239.4,50.1 239.6,51.4 239.7,53.9 239.9,57.7 240,62.6 240.2,68.7 240.3,75.7 240.5,83.7 240.6,92.6 240.7,102 240.9,112.1 241,122.5 241.2,133.2 241.3,144 241.4,154.7 241.6,165.2 241.7,175.4 241.8,185 242,194 242.1,202.3 242.2,209.6 242.4,215.9 242.5,221.2 242.6,225.2 242.7,228.1 242.9,229.7 243,230 243.1,229 243.2,226.7 243.3,223.2 243.5,218.4 243.6,212.6 243.7,205.7 243.8,197.9 243.9,189.2 244,179.9 244.1,169.9 244.2,159.6 244.4,148.9 244.5,138.1 244.6,127.4 244.7,116.8 244.8,106.6 244.9,96.8 245,87.7 245.1,79.3 245.2,71.8 245.3,65.3 245.4,59.8 245.5,55.5 245.6,52.4 245.7,50.6 245.8,50 245.9,50.7 246,52.8 246.1,56 246.2,60.5 246.3,66.2 246.4,72.8 246.5,80.5 246.6,89 246.6,98.2 246.7,108.1 246.8,118.4 246.9,129 247,139.7 247.1,150.5 247.2,161.1 247.3,171.4 247.3,181.3 247.4,190.6 247.5,199.1 247.6,206.8 247.7,213.5 247.8,219.2 247.8,223.8 247.9,227.1 248,229.2 248.1,230 248.2,229.5 248.2,227.7 248.3,224.7 248.4,220.5 248.5,215 248.6,208.6 248.6,201.1 248.7,192.8 248.8,183.6 248.9,173.9 248.9,163.7 249,153.1 249.1,142.4 249.1,131.6 249.2,121 249.3,110.6 249.4,100.6 249.4,91.2 249.5,82.5 249.6,74.6 249.6,67.7 249.7,61.8 249.8,57 249.8,53.5 249.9,51.1 250,50.1 250,50.3 250.1,51.8 250.2,54.6 250.2,58.6 250.3,63.8 250.4,70.1 250.4,77.4 250.5,85.5 250.6,94.5 250.6,104.1 250.7,114.2 250.7,124.7 250.8,135.5 250.9,146.3 250.9,157 251,167.4 251,177.5 251.1,187 251.2,195.8 251.2,203.9 251.3,211 251.3,217.1 251.4,222.1 251.5,225.9 251.5,228.5 251.6,229.8 251.6,229.9 251.7,228.6 251.7,226 251.8,222.3 251.8,217.3 251.9,211.2 252,204.2 252,196.1 252.1,187.3 252.1,177.8 252.2,167.8 252.2,157.3 252.3,146.7 252.3,135.9 252.4,125.1 252.4,114.6 252.5,104.5 252.5,94.8 252.6,85.9 252.6,77.6 252.7,70.3 252.7,64 252.8,58.8 252.8,54.7 252.9,51.9 252.9,50.3 253,50.1 253,51.1 253.1,53.4 253.1,56.9 253.2,61.6 253.2,67.5 253.3,74.4 253.3,82.2 253.4,90.9 253.4,100.2 253.4,110.2 253.5,120.6 253.5,131.2 253.6,142 253.6,152.7 253.7,163.3 253.7,173.5 253.8,183.3 253.8,192.4 253.8,200.8 253.9,208.3 253.9,214.8 254,220.3 254,224.6 254.1,227.6 254.1,229.5 254.1,230 254.2,229.2 254.2,227.2 254.3,223.9 254.3,219.4 254.3,213.8 254.4,207.1 254.4,199.4 254.5,190.9 254.5,181.7 254.5,171.8 254.6,161.5 254.6,150.9 254.7,140.1 254.7,129.4 254.7,118.8 254.8,108.4 254.8,98.6 254.9,89.3 254.9,80.8 254.9,73.1 255,66.4 255,60.7 255,56.2 255.1,52.9 255.1,50.8 255.2,50 255.2,50.5 255.2,52.3 255.3,55.3 255.3,59.6 255.3,65 255.4,71.5 255.4,79 255.4,87.4 255.5,96.5 255.5,106.2 255.5,116.4 255.6,127 255.6,137.7 255.7,148.5 255.7,159.2 255.7,169.6 255.8,179.5 255.8,188.9 255.8,197.6 255.9,205.4 255.9,212.4 255.9,218.3 256,223 256,226.6 256,228.9 256.1,229.9 256.1,229.7 256.1,228.2 256.1,225.4 256.2,221.3 256.2,216.1 256.2,209.8 256.3,202.5 256.3,194.4 256.3,185.4 256.4,175.8 256.4,165.6 256.4,155.1 256.5,144.4 256.5,133.6 256.5,122.9 256.5,112.5 256.6,102.4 256.6,92.9 256.6,84.1 256.7,76 256.7,68.9 256.7,62.8 256.8,57.8 256.8,54 256.8,51.5 256.8,50.2 256.9,50.2 256.9,51.4 256.9,54 257,57.8 257,62.8 257,68.8 257,75.9 257.1,84 257.1,92.8 257.1,102.3 257.2,112.3 257.2,122.8 257.2,133.5 257.2,144.3 257.3,155 257.3,165.5 257.3,175.6 257.3,185.3 257.4,194.2 257.4,202.5 257.4,209.8 257.4,216.1 257.5,221.3 257.5,225.3 257.5,228.1 257.5,229.7 257.6,229.9 257.6,228.9 257.6,226.6 257.7,223.1 257.7,218.3 257.7,212.4 257.7,205.5 257.8,197.7 257.8,189 257.8,179.6 257.8,169.7 257.9,159.3 257.9,148.6 257.9,137.9 257.9,127.1 257.9,116.6 258,106.3 258,96.6 258,87.5 258,79.1 258.1,71.6 258.1,65.1 258.1,59.7 258.1,55.4 258.2,52.3 258.2,50.5 258.2,50 258.2,50.8 258.3,52.8 258.3,56.1 258.3,60.7 258.3,66.3 258.3,73 258.4,80.7 258.4,89.2 258.4,98.5 258.4,108.3 258.5,118.6 258.5,129.2 258.5,140" fill="none" stroke="#1d2b44" stroke-width="1.6"/>
<polyline points="count 500
511.5,126.6 502.2,137.3 493.6,148.1 485.6,158.8 478.1,169.2 471.2,179.1 464.7,188.6 458.6,197.3 452.9,205.2 447.5,212.1 442.4,218 437.6,222.9 433.1,226.5 428.8,228.8 424.7,229.9 420.8,229.7 417.1,228.2 413.6,225.5 410.3,221.5 407.1,216.3 404,210.1 401.1,202.8 398.3,194.7 395.7,185.7 393.1,176.1 390.6,166 388.3,155.5 386,144.8 383.8,134 381.7,123.3 379.7,112.9 377.7,102.8 375.8,93.2 374,84.4 372.2,76.3 370.5,69.2 368.9,63 367.3,58 365.7,54.2 364.2,51.5 362.8,50.2 361.4,50.1 360,51.4 358.7,53.9 357.4,57.6 356.1,62.5 354.9,68.6 353.7,75.7 352.6,83.6 351.5,92.4 350.4,101.9 349.3,112 348.3,122.4 347.3,133.1 346.3,143.9 345.4,154.6 344.4,165.1 343.5,175.3 342.6,184.9 341.8,193.9 340.9,202.2 340.1,209.5 339.3,215.8 338.5,221.1 337.7,225.2 337,228 336.2,229.6 335.5,230 334.8,229 334.1,226.7 333.5,223.2 332.8,218.5 332.1,212.7 331.5,205.8 330.9,198 330.3,189.4 329.7,180 329.1,170.1 328.5,159.7 328,149.1 327.4,138.3 326.9,127.5 326.3,116.9 325.8,106.7 325.3,96.9 324.8,87.8 324.3,79.4 323.8,71.9 323.3,65.3 322.9,59.9 322.4,55.5 322,52.4 321.5,50.6 321.1,50 320.7,50.7 320.2,52.7 319.8,56 319.4,60.5 319,66.1 318.6,72.7 318.2,80.4 317.8,88.9 317.5,98.1 317.1,107.9 316.7,118.2 316.4,128.8 316,139.6 315.7,150.4 315.3,161 315,171.3 314.6,181.2 314.3,190.5 314,199 313.7,206.7 313.4,213.5 313.1,219.2 312.7,223.7 312.4,227.1 312.2,229.2 311.9,230 311.6,229.5 311.3,227.8 311,224.7 310.7,220.5 310.5,215.1 310.2,208.7 309.9,201.2 309.7,192.9 309.4,183.8 309.1,174 308.9,163.8 308.6,153.3 308.4,142.5 308.1,131.8 307.9,121.1 307.7,110.7 307.4,100.7 307.2,91.3 307,82.6 306.8,74.7 306.5,67.8 306.3,61.9 306.1,57.1 305.9,53.5 305.7,51.1 305.5,50.1 305.2,50.3 305,51.8 304.8,54.6 304.6,58.6 304.4,63.7 304.2,70 304.1,77.3 303.9,85.4 303.7,94.4 303.5,104 303.3,114.1 303.1,124.6 302.9,135.3 302.8,146.1 302.6,156.8 302.4,167.3 302.2,177.3 302.1,186.9 301.9,195.7 301.7,203.8 301.6,210.9 301.4,217 301.2,222.1 301.1,225.9 300.9,228.5 300.7,229.8 300.6,229.9 300.4,228.6 300.3,226.1 300.1,222.3 300,217.4 299.8,211.3 299.7,204.3 299.5,196.3 299.4,187.4 299.3,178 299.1,167.9 299,157.5 298.8,146.8 298.7,136 298.6,125.3 298.4,114.8 298.3,104.6 298.2,95 298,86 297.9,77.7 297.8,70.4 297.6,64.1 297.5,58.8 297.4,54.8 297.3,51.9 297.1,50.3 297,50 296.9,51 296.8,53.3 296.7,56.8 296.5,61.6 296.4,67.4 296.3,74.3 296.2,82.1 296.1,90.8 296,100.1 295.9,110.1 295.8,120.4 295.6,131.1 295.5,141.9 295.4,152.6 295.3,163.2 295.2,173.4 295.1,183.2 295,192.3 294.9,200.7 294.8,208.2 294.7,214.7 294.6,220.2 294.5,224.5 294.4,227.6 294.3,229.4 294.2,230 294.1,229.3 294,227.2 293.9,224 293.8,219.5 293.7,213.8 293.6,207.2 293.5,199.5 293.4,191 293.4,181.8 293.3,171.9 293.2,161.6 293.1,151 293,140.3 292.9,129.5 292.8,118.9 292.7,108.6 292.7,98.7 292.6,89.4 292.5,80.9 292.4,73.2 292.3,66.5 292.2,60.8 292.2,56.2 292.1,52.9 292,50.8 291.9,50 291.8,50.5 291.8,52.3 291.7,55.3 291.6,59.5 291.5,65 291.4,71.4 291.4,78.9 291.3,87.2 291.2,96.4 291.1,106.1 291.1,116.3 291,126.9 290.9,137.6 290.9,148.4 290.8,159 290.7,169.4 290.6,179.4 290.6,188.8 290.5,197.5 290.4,205.4 290.4,212.3 290.3,218.2 290.2,223 290.2,226.5 290.1,228.9 290,229.9 290,229.7 289.9,228.2 289.8,225.4 289.8,221.4 289.7,216.2 289.6,209.9 289.6,202.6 289.5,194.5 289.4,185.5 289.4,175.9 289.3,165.8 289.3,155.3 289.2,144.5 289.1,133.7 289.1,123 289,112.6 289,102.5 288.9,93 288.8,84.2 288.8,76.1 288.7,69 288.7,62.9 288.6,57.9 288.5,54.1 288.5,51.5 288.4,50.2 288.4,50.1 288.3,51.4 288.3,54 288.2,57.7 288.2,62.7 288.1,68.8 288,75.8 288,83.9 287.9,92.7 287.9,102.2 287.8,112.2 287.8,122.7 287.7,133.3 287.7,144.1 287.6,154.9 287.6,165.4 287.5,175.5 287.5,185.2 287.4,194.1 287.4,202.4 287.3,209.7 287.3,216 287.2,221.2 287.2,225.3 287.1,228.1 287.1,229.7 287,229.9 287,228.9 286.9,226.6 286.9,223.1 286.8,218.4 286.8,212.5 286.7,205.6 286.7,197.8 286.6,189.1 286.6,179.8 286.6,169.8 286.5,159.4 286.5,148.8 286.4,138 286.4,127.3 286.3,116.7 286.3,106.5 286.2,96.7 286.2,87.6 286.2,79.2 286.1,71.7 286.1,65.2 286,59.7 286,55.4 285.9,52.4 285.9,50.5 285.9,50 285.8,50.8 285.8,52.8 285.7,56.1 285.7,60.6 285.7,66.2 285.6,72.9 285.6,80.6 285.5,89.1 285.5,98.3 285.5,108.2 285.4,118.5 285.4,129.1 285.3,139.9 285.3,150.6 285.3,161.2 285.2,171.6 285.2,181.4 285.1,190.7 285.1,199.2 285.1,206.9 285,213.6 285,219.3 285,223.8 284.9,227.1 284.9,229.2 284.8,230 284.8,229.5 284.8,227.7 284.7,224.7 284.7,220.4 284.7,215 284.6,208.5 284.6,201 284.6,192.6 284.5,183.5 284.5,173.8 284.5,163.6 284.4,153 284.4,142.3 284.3,131.5 284.3,120.8 284.3,110.4 284.2,100.5 284.2,91.1 284.2,82.4 284.1,74.6 284.1,67.6 284.1,61.7 284,57 284,53.4 284,51.1 283.9,50.1 283.9,50.3 283.9,51.8 283.9,54.6 283.8,58.7 283.8,63.9 283.8,70.2 283.7,77.5 283.7,85.6 283.7,94.6 283.6,104.2 283.6,114.4 283.6,124.9 283.5,135.6 283.5,146.4 283.5,157.1 283.5,167.5 283.4,177.6 283.4,187.1 283.4,195.9 283.3,204 283.3,211.1 283.3,217.2 283.2,222.2 283.2,226 283.2,228.5 283.2,229.8 283.1,229.8 283.1,228.6 283.1,226 283,222.2 283,217.2 283,211.2 283,204.1 282.9,196 282.9,187.2 282.9,177.7 282.8,167.7 282.8,157.2 282.8,146.5 282.8,135.7 282.7,125 282.7,114.5 282.7,104.4 282.7,94.7 282.6,85.8 282.6,77.5 282.6,70.2 282.6,63.9 282.5,58.7 282.5,54.7 282.5,51.9 282.5,50.3 282.4,50.1 282.4,51.1 282.4,53.4 282.3,56.9 282.3,61.7 282.3,67.6 282.3,74.5 282.2,82.3 282.2,91 282.2,100.4 282.2,110.3 282.1,120.7 282.1,131.4 282.1,142.1 282.1,152.9 282.1,163.4 282,173.7 282,183.4 282,192.5 282,200.9 281.9,208.4 281.9,214.9 281.9,220.3 281.9,224.6 281.8,227.7 281.8,229.5 281.8,230 281.8,229.2 281.7,227.2 281.7,223.9 281.7,219.3 281.7,213.7 281.7,207 281.6,199.3 281.6,190.8 281.6,181.5 281.6,171.7 281.5,161.4 281.5,150.8 281.5,140" fill="none" stroke="#1d2b44" stroke-width="1.6"/>
<rect x="258.5" y="50" width="23" height="180" fill="url(#f13b-hatch)" stroke="#1d2b44" stroke-width="1"/>
<circle cx="362" cy="50" r="4" fill="#1d2b44"/>
<circle cx="335.7" cy="230" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="368" y="40">(2/5, 1)</text>
<text x="340" y="252">(2/7, −1)</text>
<text x="270" y="276" text-anchor="middle">hatched strip: waves too close together to draw</text>
</g>
</svg>
<figcaption>Figure 2. y = sin(π/x). As x → 0 from either side, the curve keeps reaching height 1 and height −1, faster and faster. Near 0 the waves cannot be drawn separately, so that strip is hatched. Axes are unitless.</figcaption>
</figure>

Why does sin(π/x) have no limit at 0? Take the x-values 2, 2/5, 2/9, 2/13, … They get closer and closer to 0, and at every one of them sin(π/x) = 1. Now take 2/3, 2/7, 2/11, 2/15, … These also approach 0, and at every one sin(π/x) = −1. However close to 0 you look, the function keeps taking both values. No single height L is approached, so **lim (x → 0) sin(π/x) does not exist**. This is not a jump, and the function is not unbounded: it stays between −1 and 1. It is oscillation.

## When the picture can mislead: issues of scale

A graph is a drawing at one particular scale. Important behaviour can be too small, too narrow or too fast to show up.

- **Holes are usually invisible.** Most graphing tools do not draw open circles. A function with a hole looks like an unbroken curve.
- **Narrow features can fall between plotted points.** Many tools plot points a fixed step apart and join them with straight lines. A spike or asymptote narrower than the step can vanish.
- **Fast oscillation can look like a smudge or a solid block.** You cannot read heights from it.
- **The window can cut off behaviour.** A curve can look level inside the window and turn sharply just outside it.

So a graph gives you an **estimate**. Zoom in, use a table of values (Topic 1.4), or use the formula when you have one.

## Worked example 2: a graph that hides an asymptote

**Question.** Let k(x) = x² + 0.001/(x − 3). A graphing tool plots k at x-values 0.1 apart. The two plotted points nearest 3 are x = 2.95 and x = 3.05, and the tool joins them with a straight line. A student looks at the result and says "the graph is a smooth parabola, so lim (x → 3) k(x) = 9". Is the student right?

1. **What the tool plotted.** k(2.95) = 8.7025 − 0.02 = 8.6825 and k(3.05) = 9.3025 + 0.02 = 9.3225. The straight line joining these passes through height about 9.0 at x = 3. On a normal window this is indistinguishable from the parabola y = x².
2. **Look closer to 3.** The extra term 0.001/(x − 3) is tiny unless x − 3 is tiny. Try values much closer to 3:

| x | 2.999 | 2.99999 | 3.001 | 3.00001 |
|---|---|---|---|---|
| k(x) (6 d.p.) | 7.994001 | −91.000060 | 10.006001 | 109.000060 |

3. **Read the pattern.** From the left, the values drop without bound. From the right, they grow without bound. So lim (x → 3⁻) k(x) = −∞ and lim (x → 3⁺) k(x) = ∞.
4. **Conclusion.** The student is **wrong**. lim (x → 3) k(x) **does not exist**, because k is unbounded near x = 3. The vertical asymptote is real, but it is so narrow that it fell between the plotted points.

**Interpretation.** The graph was not "wrong". It was drawn at a scale too coarse to show the asymptote. The formula tells you to expect trouble at x = 3, because the denominator x − 3 is 0 there. Whenever a formula has a denominator that can be 0, check that x-value closely before trusting a graph.

## Common misconceptions

- **"The limit is the y-value of the dot."** A filled dot gives f(a), not the limit. In Figure 1, f(−2) = 3 but the limit at −2 is 1.
- **"If f(a) is undefined, the limit does not exist."** A hole has no value at a, yet the limit can still exist. Limits ignore x = a.
- **"The right-hand limit equals f(a), so the limit exists."** At a jump the left side still disagrees. Both sides must agree.
- **"x → 2⁻ means x is negative."** The minus sign means "from the left", that is, from values below 2.
- **"lim = ∞, so the limit exists and equals infinity."** ∞ describes unbounded growth. The limit does not exist as a real number.
- **"The curve is centred on 0, so the limit of an oscillating function is 0."** If the heights keep swinging between two values, no single height is approached.
- **Giving the x-value instead of the height.** A limit is a y-value.
- **"The graph looks smooth, so the limit is just the height on the screen."** The scale can hide a hole, a spike or an asymptote. Treat a graph reading as an estimate.

## Where this leads

Reading limits from graphs is one of three ways to estimate a limit. Before this, review [Defining Limits and Using Limit Notation](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/). Next, [Estimating Limit Values from Tables](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/) does the same job with numbers instead of pictures, and shares the same weakness: a table can also miss behaviour. Topics 1.5 and 1.6 then find limits exactly with algebra. In Unit 1, one-sided limits return when you study continuity and vertical asymptotes. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-3-estimating-limit-values-graphs-checklist/) to consolidate.
