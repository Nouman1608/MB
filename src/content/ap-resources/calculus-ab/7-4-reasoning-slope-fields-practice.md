---
resourceId: "mb-ap-calcab-7.4-practice"
title: "Reasoning Using Slope Fields: Practice Questions (Calculus AB 7.4)"
description: "Seven original Marlbridge practice questions on particular solutions, constant solutions, long-run behaviour and concavity from slope fields, with solutions and suggested rubrics."
course: "calculus-ab"
unit: 7
topics: ["7.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Drawing and reading slope fields (Topic 7.3)"
  - "Implicit differentiation"
prerequisiteResources: ["mb-ap-calcab-7.4-study-guide"]
learningObjectives:
  - "Identify constant solutions and families of solutions"
  - "Sketch particular solutions on a slope field and describe their long-run behaviour"
  - "Use dy/dx and d²y/dx² to justify increasing, decreasing, extrema and concavity"
  - "Use a tangent line to estimate a value of a particular solution and decide whether it is an over- or underestimate"
skills: ["4", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Exact values quoted in the solutions as checks are for interest only."
related: ["mb-ap-calcab-7.4-study-guide", "mb-ap-calcab-7.4-revision-notes", "mb-ap-calcab-7.4-checklist"]
next: "mb-ap-calcab-7.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need sketches or written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, axes drawn with equal scales, and y a differentiable function of x (or C of t) unless stated. Contexts and models are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which of the following is a constant solution of dy/dx = (y + 1)(x − 2)?

- (A) y = −1
- (B) y = 1
- (C) x = 2
- (D) y = 2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** If y = −1, then dy/dx = 0 because y is constant, and the equation gives (−1 + 1)(x − 2) = 0 for every x. Both sides agree, so y = −1 is a solution.

- (B) solves y + 1 = 0 with the wrong sign. At x = 0, y = 1 gives a slope of (2)(−2) = −4, not 0.
- (C) is where the segments are flat, but x = 2 is a vertical line. It is not a function of x, so it cannot be a solution y(x).
- (D) uses the number from the other factor. At x = 0, y = 2 gives a slope of (3)(−2) = −6.
</details>

## Question 2 (multiple choice · core)

Let y = f(x) be the solution of dy/dx = (5 − y)/3 with f(0) = 1. What is the limit of f(x) as x → ∞?

- (A) 1
- (B) 3
- (C) 5
- (D) The limit is infinite.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The constant solution is y = 5. For y < 5 the slope (5 − y)/3 is positive, so f increases from 1. As y gets closer to 5 the slope gets closer to 0, so the curve levels off and approaches the line y = 5 without crossing it.

- (A) is the starting value. f does not stay at 1, because the slope there is 4/3, not 0.
- (B) takes the denominator 3 as the level where the curve settles. The slope at y = 3 is 2/3, not 0.
- (D) notices that f is increasing but ignores that the slopes shrink to 0 as y approaches 5.
</details>

## Question 3 (multiple choice · core)

Let y = g(x) be the solution of dy/dx = x² + y through the point (1, −4). At x = 1, which statement is true?

- (A) g is increasing and concave up.
- (B) g is increasing and concave down.
- (C) g is decreasing and concave up.
- (D) g is decreasing and concave down.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** dy/dx = 1² + (−4) = −3 < 0, so g is decreasing. Differentiate implicitly: d²y/dx² = 2x + dy/dx = 2x + x² + y. At (1, −4): 2 + 1 − 4 = −1 < 0, so g is concave down.

- (A) and (B) get the sign of dy/dx wrong, for example by computing x² − y = 5.
- (C) differentiates y as if it were a constant, giving d²y/dx² = 2x = 2 > 0. Because y depends on x, its derivative dy/dx must be included.
</details>

## Question 4 (multiple choice · core)

A slope field has identical segments in every vertical column. The segments are horizontal along the y-axis, rise for x > 0 and fall for x < 0, and are steeper further from the y-axis. Which could be the general solution of the differential equation it shows?

- (A) y = x²/2 + C
- (B) y = Ceˣ
- (C) y = (x + C)²/2
- (D) y = −x²/2 + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each function in (A) has derivative x. That depends on x only (identical columns), is 0 on the y-axis, positive for x > 0, negative for x < 0 and larger in size further out. The members are vertical shifts of one parabola, as expected when dy/dx depends on x only.

- (B) has derivative Ceˣ = y, which depends on y. The rows, not the columns, would be identical.
- (C) has derivative x + C, so different members have different slopes at the same x (and at x = 0 the slope is C, not 0). The members are horizontal shifts, which matches a field that depends on y.
- (D) has derivative −x: falling for x > 0 and rising for x < 0, the opposite of the description.
</details>

## Question 5 (sketch · core)

The slope field for dy/dx = −x(y − 2)/2 is shown below.

<figure>
<svg viewBox="0 0 454.8 322.8" role="img" aria-labelledby="sf74q5-title sf74q5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf74q5-title">Slope field for practice question 5</title>
<desc id="sf74q5-desc">Slope field for dy/dx = −x(y − 2)/2 at x = −3, −2, ..., 3 and y = 0 to 4 in steps of 0.5. The column x = 0 and the row y = 2 are flat. Above y = 2 the segments rise to the left of the y-axis and fall to the right of it. Below y = 2 they fall on the left and rise on the right. Segments get steeper further from both the y-axis and the line y = 2.</desc>
<rect x="0" y="0" width="454.8" height="322.8" fill="#ffffff"/>
<defs><clipPath id="sf74q5-clip"><rect x="44" y="24" width="380.8" height="268.8"/></clipPath></defs>
<line x1="44" y1="270.4" x2="424.8" y2="270.4" stroke="#8a94a6" stroke-width="1"/>
<line x1="234.4" y1="292.8" x2="234.4" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="66.4" y="310.8">−3</text>
<text x="122.4" y="310.8">−2</text>
<text x="178.4" y="310.8">−1</text>
<text x="234.4" y="310.8">0</text>
<text x="290.4" y="310.8">1</text>
<text x="346.4" y="310.8">2</text>
<text x="402.4" y="310.8">3</text>
<text x="438.8" y="310.8">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="274.4">0</text>
<text x="36" y="218.4">1</text>
<text x="36" y="162.4">2</text>
<text x="36" y="106.4">3</text>
<text x="36" y="50.4">4</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="63.7" y1="262.2" x2="69.1" y2="278.6"/>
<line x1="62.9" y1="234.5" x2="69.9" y2="250.3"/>
<line x1="61.6" y1="207.2" x2="71.2" y2="221.6"/>
<line x1="59.5" y1="181.2" x2="73.3" y2="191.6"/>
<line x1="57.7" y1="158.4" x2="75.1" y2="158.4"/>
<line x1="59.5" y1="135.6" x2="73.3" y2="125.2"/>
<line x1="61.6" y1="109.6" x2="71.2" y2="95.2"/>
<line x1="62.9" y1="82.3" x2="69.9" y2="66.5"/>
<line x1="63.7" y1="54.6" x2="69.1" y2="38.2"/>
<line x1="118.5" y1="262.6" x2="126.3" y2="278.2"/>
<line x1="117.6" y1="235.2" x2="127.2" y2="249.6"/>
<line x1="116.3" y1="208.3" x2="128.5" y2="220.5"/>
<line x1="114.6" y1="182.5" x2="130.2" y2="190.3"/>
<line x1="113.7" y1="158.4" x2="131.1" y2="158.4"/>
<line x1="114.6" y1="134.3" x2="130.2" y2="126.5"/>
<line x1="116.3" y1="108.5" x2="128.5" y2="96.3"/>
<line x1="117.6" y1="81.6" x2="127.2" y2="67.2"/>
<line x1="118.5" y1="54.2" x2="126.3" y2="38.6"/>
<line x1="172.3" y1="264.3" x2="184.5" y2="276.5"/>
<line x1="171.5" y1="237.2" x2="185.3" y2="247.6"/>
<line x1="170.6" y1="210.5" x2="186.2" y2="218.3"/>
<line x1="170" y1="184.3" x2="186.8" y2="188.5"/>
<line x1="169.7" y1="158.4" x2="187.1" y2="158.4"/>
<line x1="170" y1="132.5" x2="186.8" y2="128.3"/>
<line x1="170.6" y1="106.3" x2="186.2" y2="98.5"/>
<line x1="171.5" y1="79.6" x2="185.3" y2="69.2"/>
<line x1="172.3" y1="52.5" x2="184.5" y2="40.3"/>
<line x1="225.7" y1="270.4" x2="243.1" y2="270.4"/>
<line x1="225.7" y1="242.4" x2="243.1" y2="242.4"/>
<line x1="225.7" y1="214.4" x2="243.1" y2="214.4"/>
<line x1="225.7" y1="186.4" x2="243.1" y2="186.4"/>
<line x1="225.7" y1="158.4" x2="243.1" y2="158.4"/>
<line x1="225.7" y1="130.4" x2="243.1" y2="130.4"/>
<line x1="225.7" y1="102.4" x2="243.1" y2="102.4"/>
<line x1="225.7" y1="74.4" x2="243.1" y2="74.4"/>
<line x1="225.7" y1="46.4" x2="243.1" y2="46.4"/>
<line x1="284.3" y1="276.5" x2="296.5" y2="264.3"/>
<line x1="283.5" y1="247.6" x2="297.3" y2="237.2"/>
<line x1="282.6" y1="218.3" x2="298.2" y2="210.5"/>
<line x1="282" y1="188.5" x2="298.8" y2="184.3"/>
<line x1="281.7" y1="158.4" x2="299.1" y2="158.4"/>
<line x1="282" y1="128.3" x2="298.8" y2="132.5"/>
<line x1="282.6" y1="98.5" x2="298.2" y2="106.3"/>
<line x1="283.5" y1="69.2" x2="297.3" y2="79.6"/>
<line x1="284.3" y1="40.3" x2="296.5" y2="52.5"/>
<line x1="342.5" y1="278.2" x2="350.3" y2="262.6"/>
<line x1="341.6" y1="249.6" x2="351.2" y2="235.2"/>
<line x1="340.3" y1="220.5" x2="352.5" y2="208.3"/>
<line x1="338.6" y1="190.3" x2="354.2" y2="182.5"/>
<line x1="337.7" y1="158.4" x2="355.1" y2="158.4"/>
<line x1="338.6" y1="126.5" x2="354.2" y2="134.3"/>
<line x1="340.3" y1="96.3" x2="352.5" y2="108.5"/>
<line x1="341.6" y1="67.2" x2="351.2" y2="81.6"/>
<line x1="342.5" y1="38.6" x2="350.3" y2="54.2"/>
<line x1="399.7" y1="278.6" x2="405.1" y2="262.2"/>
<line x1="398.9" y1="250.3" x2="405.9" y2="234.5"/>
<line x1="397.6" y1="221.6" x2="407.2" y2="207.2"/>
<line x1="395.5" y1="191.6" x2="409.3" y2="181.2"/>
<line x1="393.7" y1="158.4" x2="411.1" y2="158.4"/>
<line x1="395.5" y1="125.2" x2="409.3" y2="135.6"/>
<line x1="397.6" y1="95.2" x2="407.2" y2="109.6"/>
<line x1="398.9" y1="66.5" x2="405.9" y2="82.3"/>
<line x1="399.7" y1="38.2" x2="405.1" y2="54.6"/>
</g>
</svg>
<figcaption>Slope field for Question 5. Copy it onto paper, or sketch it from the equation, before you draw the curves. Axes are unitless and use equal scales.</figcaption>
</figure>

(a) On a copy of the field, sketch the solution curves through (0, 3) and through (0, 1).
(b) Let y = h(x) be the solution through (0, 3). Find the limit of h(x) as x → ∞, and explain how the field supports your answer.
(c) Show that y = 2 is a solution of the differential equation.
(d) Use d²y/dx² to show that h has a relative maximum at x = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

<figure>
<svg viewBox="0 0 454.8 322.8" role="img" aria-labelledby="sf74q5s-title sf74q5s-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf74q5s-title">Model answer: solution curves through (0, 3) and (0, 1)</title>
<desc id="sf74q5s-desc">The same slope field with two thick solution curves. The curve through (0, 3) is a hump: highest at (0, 3), falling on both sides and levelling off towards y = 2, reaching about 2.1 at x = ±3. The curve through (0, 1) is its mirror image in the line y = 2: lowest at (0, 1) and rising towards y = 2 on both sides. The dashed line y = 2 is the constant solution between them.</desc>
<rect x="0" y="0" width="454.8" height="322.8" fill="#ffffff"/>
<defs><clipPath id="sf74q5s-clip"><rect x="44" y="24" width="380.8" height="268.8"/></clipPath></defs>
<line x1="44" y1="270.4" x2="424.8" y2="270.4" stroke="#8a94a6" stroke-width="1"/>
<line x1="234.4" y1="292.8" x2="234.4" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="66.4" y="310.8">−3</text>
<text x="122.4" y="310.8">−2</text>
<text x="178.4" y="310.8">−1</text>
<text x="234.4" y="310.8">0</text>
<text x="290.4" y="310.8">1</text>
<text x="346.4" y="310.8">2</text>
<text x="402.4" y="310.8">3</text>
<text x="438.8" y="310.8">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="274.4">0</text>
<text x="36" y="218.4">1</text>
<text x="36" y="162.4">2</text>
<text x="36" y="106.4">3</text>
<text x="36" y="50.4">4</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="63.7" y1="262.2" x2="69.1" y2="278.6"/>
<line x1="62.9" y1="234.5" x2="69.9" y2="250.3"/>
<line x1="61.6" y1="207.2" x2="71.2" y2="221.6"/>
<line x1="59.5" y1="181.2" x2="73.3" y2="191.6"/>
<line x1="57.7" y1="158.4" x2="75.1" y2="158.4"/>
<line x1="59.5" y1="135.6" x2="73.3" y2="125.2"/>
<line x1="61.6" y1="109.6" x2="71.2" y2="95.2"/>
<line x1="62.9" y1="82.3" x2="69.9" y2="66.5"/>
<line x1="63.7" y1="54.6" x2="69.1" y2="38.2"/>
<line x1="118.5" y1="262.6" x2="126.3" y2="278.2"/>
<line x1="117.6" y1="235.2" x2="127.2" y2="249.6"/>
<line x1="116.3" y1="208.3" x2="128.5" y2="220.5"/>
<line x1="114.6" y1="182.5" x2="130.2" y2="190.3"/>
<line x1="113.7" y1="158.4" x2="131.1" y2="158.4"/>
<line x1="114.6" y1="134.3" x2="130.2" y2="126.5"/>
<line x1="116.3" y1="108.5" x2="128.5" y2="96.3"/>
<line x1="117.6" y1="81.6" x2="127.2" y2="67.2"/>
<line x1="118.5" y1="54.2" x2="126.3" y2="38.6"/>
<line x1="172.3" y1="264.3" x2="184.5" y2="276.5"/>
<line x1="171.5" y1="237.2" x2="185.3" y2="247.6"/>
<line x1="170.6" y1="210.5" x2="186.2" y2="218.3"/>
<line x1="170" y1="184.3" x2="186.8" y2="188.5"/>
<line x1="169.7" y1="158.4" x2="187.1" y2="158.4"/>
<line x1="170" y1="132.5" x2="186.8" y2="128.3"/>
<line x1="170.6" y1="106.3" x2="186.2" y2="98.5"/>
<line x1="171.5" y1="79.6" x2="185.3" y2="69.2"/>
<line x1="172.3" y1="52.5" x2="184.5" y2="40.3"/>
<line x1="225.7" y1="270.4" x2="243.1" y2="270.4"/>
<line x1="225.7" y1="242.4" x2="243.1" y2="242.4"/>
<line x1="225.7" y1="214.4" x2="243.1" y2="214.4"/>
<line x1="225.7" y1="186.4" x2="243.1" y2="186.4"/>
<line x1="225.7" y1="158.4" x2="243.1" y2="158.4"/>
<line x1="225.7" y1="130.4" x2="243.1" y2="130.4"/>
<line x1="225.7" y1="102.4" x2="243.1" y2="102.4"/>
<line x1="225.7" y1="74.4" x2="243.1" y2="74.4"/>
<line x1="225.7" y1="46.4" x2="243.1" y2="46.4"/>
<line x1="284.3" y1="276.5" x2="296.5" y2="264.3"/>
<line x1="283.5" y1="247.6" x2="297.3" y2="237.2"/>
<line x1="282.6" y1="218.3" x2="298.2" y2="210.5"/>
<line x1="282" y1="188.5" x2="298.8" y2="184.3"/>
<line x1="281.7" y1="158.4" x2="299.1" y2="158.4"/>
<line x1="282" y1="128.3" x2="298.8" y2="132.5"/>
<line x1="282.6" y1="98.5" x2="298.2" y2="106.3"/>
<line x1="283.5" y1="69.2" x2="297.3" y2="79.6"/>
<line x1="284.3" y1="40.3" x2="296.5" y2="52.5"/>
<line x1="342.5" y1="278.2" x2="350.3" y2="262.6"/>
<line x1="341.6" y1="249.6" x2="351.2" y2="235.2"/>
<line x1="340.3" y1="220.5" x2="352.5" y2="208.3"/>
<line x1="338.6" y1="190.3" x2="354.2" y2="182.5"/>
<line x1="337.7" y1="158.4" x2="355.1" y2="158.4"/>
<line x1="338.6" y1="126.5" x2="354.2" y2="134.3"/>
<line x1="340.3" y1="96.3" x2="352.5" y2="108.5"/>
<line x1="341.6" y1="67.2" x2="351.2" y2="81.6"/>
<line x1="342.5" y1="38.6" x2="350.3" y2="54.2"/>
<line x1="399.7" y1="278.6" x2="405.1" y2="262.2"/>
<line x1="398.9" y1="250.3" x2="405.9" y2="234.5"/>
<line x1="397.6" y1="221.6" x2="407.2" y2="207.2"/>
<line x1="395.5" y1="191.6" x2="409.3" y2="181.2"/>
<line x1="393.7" y1="158.4" x2="411.1" y2="158.4"/>
<line x1="395.5" y1="125.2" x2="409.3" y2="135.6"/>
<line x1="397.6" y1="95.2" x2="407.2" y2="109.6"/>
<line x1="398.9" y1="66.5" x2="405.9" y2="82.3"/>
<line x1="399.7" y1="38.2" x2="405.1" y2="54.6"/>
</g>
<line x1="44" y1="158.4" x2="424.8" y2="158.4" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<polyline points="44,155.3 45.9,155.1 47.8,154.9 49.7,154.7 51.6,154.5 53.5,154.3 55.4,154 57.3,153.8 59.2,153.5 61.1,153.3 63,153 64.9,152.7 66.8,152.4 68.8,152.1 70.7,151.8 72.6,151.5 74.5,151.1 76.4,150.8 78.3,150.4 80.2,150 82.1,149.6 84,149.2 85.9,148.7 87.8,148.3 89.7,147.9 91.6,147.4 93.5,146.9 95.4,146.4 97.3,145.9 99.2,145.4 101.1,144.8 103,144.3 104.9,143.7 106.8,143.1 108.7,142.5 110.6,141.9 112.5,141.3 114.4,140.6 116.4,140 118.3,139.3 120.2,138.6 122.1,137.9 124,137.2 125.9,136.5 127.8,135.8 129.7,135 131.6,134.3 133.5,133.5 135.4,132.8 137.3,132 139.2,131.2 141.1,130.4 143,129.6 144.9,128.8 146.8,128 148.7,127.2 150.6,126.4 152.5,125.6 154.4,124.8 156.3,123.9 158.2,123.1 160.1,122.3 162,121.5 164,120.7 165.9,119.9 167.8,119.1 169.7,118.3 171.6,117.5 173.5,116.7 175.4,116 177.3,115.2 179.2,114.5 181.1,113.8 183,113 184.9,112.3 186.8,111.7 188.7,111 190.6,110.3 192.5,109.7 194.4,109.1 196.3,108.5 198.2,107.9 200.1,107.4 202,106.9 203.9,106.4 205.8,105.9 207.7,105.5 209.6,105.1 211.6,104.7 213.5,104.3 215.4,104 217.3,103.7 219.2,103.4 221.1,103.2 223,103 224.9,102.8 226.8,102.7 228.7,102.5 230.6,102.5 232.5,102.4 234.4,102.4 236.3,102.4 238.2,102.5 240.1,102.5 242,102.7 243.9,102.8 245.8,103 247.7,103.2 249.6,103.4 251.5,103.7 253.4,104 255.3,104.3 257.2,104.7 259.2,105.1 261.1,105.5 263,105.9 264.9,106.4 266.8,106.9 268.7,107.4 270.6,107.9 272.5,108.5 274.4,109.1 276.3,109.7 278.2,110.3 280.1,111 282,111.7 283.9,112.3 285.8,113 287.7,113.8 289.6,114.5 291.5,115.2 293.4,116 295.3,116.7 297.2,117.5 299.1,118.3 301,119.1 302.9,119.9 304.8,120.7 306.8,121.5 308.7,122.3 310.6,123.1 312.5,123.9 314.4,124.8 316.3,125.6 318.2,126.4 320.1,127.2 322,128 323.9,128.8 325.8,129.6 327.7,130.4 329.6,131.2 331.5,132 333.4,132.8 335.3,133.5 337.2,134.3 339.1,135 341,135.8 342.9,136.5 344.8,137.2 346.7,137.9 348.6,138.6 350.5,139.3 352.4,140 354.4,140.6 356.3,141.3 358.2,141.9 360.1,142.5 362,143.1 363.9,143.7 365.8,144.3 367.7,144.8 369.6,145.4 371.5,145.9 373.4,146.4 375.3,146.9 377.2,147.4 379.1,147.9 381,148.3 382.9,148.7 384.8,149.2 386.7,149.6 388.6,150 390.5,150.4 392.4,150.8 394.3,151.1 396.2,151.5 398.1,151.8 400,152.1 402,152.4 403.9,152.7 405.8,153 407.7,153.3 409.6,153.5 411.5,153.8 413.4,154 415.3,154.3 417.2,154.5 419.1,154.7 421,154.9 422.9,155.1 424.8,155.3 424.8,155.3" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf74q5s-clip)"/>
<polyline points="44,161.5 45.9,161.7 47.8,161.9 49.7,162.1 51.6,162.3 53.5,162.5 55.4,162.8 57.3,163 59.2,163.3 61.1,163.5 63,163.8 64.9,164.1 66.8,164.4 68.8,164.7 70.7,165 72.6,165.3 74.5,165.7 76.4,166 78.3,166.4 80.2,166.8 82.1,167.2 84,167.6 85.9,168.1 87.8,168.5 89.7,168.9 91.6,169.4 93.5,169.9 95.4,170.4 97.3,170.9 99.2,171.4 101.1,172 103,172.5 104.9,173.1 106.8,173.7 108.7,174.3 110.6,174.9 112.5,175.5 114.4,176.2 116.4,176.8 118.3,177.5 120.2,178.2 122.1,178.9 124,179.6 125.9,180.3 127.8,181 129.7,181.8 131.6,182.5 133.5,183.3 135.4,184 137.3,184.8 139.2,185.6 141.1,186.4 143,187.2 144.9,188 146.8,188.8 148.7,189.6 150.6,190.4 152.5,191.2 154.4,192 156.3,192.9 158.2,193.7 160.1,194.5 162,195.3 164,196.1 165.9,196.9 167.8,197.7 169.7,198.5 171.6,199.3 173.5,200.1 175.4,200.8 177.3,201.6 179.2,202.3 181.1,203 183,203.8 184.9,204.5 186.8,205.1 188.7,205.8 190.6,206.5 192.5,207.1 194.4,207.7 196.3,208.3 198.2,208.9 200.1,209.4 202,209.9 203.9,210.4 205.8,210.9 207.7,211.3 209.6,211.7 211.6,212.1 213.5,212.5 215.4,212.8 217.3,213.1 219.2,213.4 221.1,213.6 223,213.8 224.9,214 226.8,214.1 228.7,214.3 230.6,214.3 232.5,214.4 234.4,214.4 236.3,214.4 238.2,214.3 240.1,214.3 242,214.1 243.9,214 245.8,213.8 247.7,213.6 249.6,213.4 251.5,213.1 253.4,212.8 255.3,212.5 257.2,212.1 259.2,211.7 261.1,211.3 263,210.9 264.9,210.4 266.8,209.9 268.7,209.4 270.6,208.9 272.5,208.3 274.4,207.7 276.3,207.1 278.2,206.5 280.1,205.8 282,205.1 283.9,204.5 285.8,203.8 287.7,203 289.6,202.3 291.5,201.6 293.4,200.8 295.3,200.1 297.2,199.3 299.1,198.5 301,197.7 302.9,196.9 304.8,196.1 306.8,195.3 308.7,194.5 310.6,193.7 312.5,192.9 314.4,192 316.3,191.2 318.2,190.4 320.1,189.6 322,188.8 323.9,188 325.8,187.2 327.7,186.4 329.6,185.6 331.5,184.8 333.4,184 335.3,183.3 337.2,182.5 339.1,181.8 341,181 342.9,180.3 344.8,179.6 346.7,178.9 348.6,178.2 350.5,177.5 352.4,176.8 354.4,176.2 356.3,175.5 358.2,174.9 360.1,174.3 362,173.7 363.9,173.1 365.8,172.5 367.7,172 369.6,171.4 371.5,170.9 373.4,170.4 375.3,169.9 377.2,169.4 379.1,168.9 381,168.5 382.9,168.1 384.8,167.6 386.7,167.2 388.6,166.8 390.5,166.4 392.4,166 394.3,165.7 396.2,165.3 398.1,165 400,164.7 402,164.4 403.9,164.1 405.8,163.8 407.7,163.5 409.6,163.3 411.5,163 413.4,162.8 415.3,162.5 417.2,162.3 419.1,162.1 421,161.9 422.9,161.7 424.8,161.5 424.8,161.5" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf74q5s-clip)"/>
<circle cx="234.4" cy="102.4" r="5" fill="#1d2b44"/>
<text x="242.4" y="92.4" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 3)</text>
<circle cx="234.4" cy="214.4" r="5" fill="#1d2b44"/>
<text x="242.4" y="234.4" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 1)</text>
<text x="150.4" y="151.7" font-size="12" fill="#1d2b44" text-anchor="middle" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">y = 2</text>
</svg>
<figcaption>Model answer for Question 5(a). Both curves are symmetric about the y-axis and level off towards the constant solution y = 2.</figcaption>
</figure>

**(b)** The limit is **2**. Above y = 2, the segments to the right of the y-axis fall, so h decreases for x > 0. As h gets closer to 2 the factor y − 2 shrinks, and the segments near y = 2 are almost flat, so the curve levels off towards the constant solution y = 2 rather than crossing it. (Check, for interest: h(x) = 2 + e^(−x²/4), which tends to 2.)

**(c)** If y = 2, then dy/dx = 0. The equation gives −x(2 − 2)/2 = 0 for every x. Both sides agree, so y = 2 is a solution.

**(d)** At (0, 3), dy/dx = −0 × (1)/2 = 0. Differentiate using the product rule, with y a function of x:

d²y/dx² = −(y − 2)/2 − (x/2) · dy/dx.

At (0, 3): d²y/dx² = −(1)/2 − 0 = −1/2 < 0. Since dy/dx = 0 and d²y/dx² < 0 at x = 0, h has a relative maximum there, by the second derivative test.

| Point | What earns it |
|---|---|
| 1 | Both curves pass through their points, follow the segments, and are drawn on both sides of the y-axis |
| 1 | (b) Limit 2, with a reason from the field: falling towards y = 2 and levelling off |
| 1 | (c) Substitutes y = 2 into both sides and shows they agree for all x |
| 1 | (d) Correct d²y/dx² including the dy/dx term, value −1/2 at (0, 3), and the conclusion with dy/dx = 0 |

Acceptable alternative for (d): a first-derivative argument. For y > 2, dy/dx > 0 when x < 0 and dy/dx < 0 when x > 0, so dy/dx changes from positive to negative at x = 0.
</details>

## Question 6 (constructed response · core)

A medicine is given through a drip. In an invented model, its concentration C (mg/L) in a patient's blood t hours after the drip starts satisfies

**dC/dt = 2 − 0.5C, with C(0) = 0.**

(a) Find the constant solution of the differential equation and explain what it means in context.
(b) Show that the solution is increasing and concave down while 0 ≤ C < 4.
(c) Use the tangent line at t = 0 to estimate C(0.5). Is your estimate too high or too low? Explain.
(d) Describe what happens to the concentration in the long run.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dC/dt = 0 when 2 − 0.5C = 0, so **C = 4**. If the concentration were 4 mg/L, it would stay at 4 mg/L: the drip adds medicine at the same rate as the body removes it.

**(b)** For 0 ≤ C < 4, 0.5C < 2, so dC/dt > 0: C is increasing. Differentiate with respect to t: d²C/dt² = −0.5 · dC/dt. Since dC/dt > 0, d²C/dt² < 0: the graph is concave down.

**(c)** At t = 0, dC/dt = 2 − 0 = 2 mg/L per hour. The tangent line is C ≈ 0 + 2t, so C(0.5) ≈ **1 mg/L**. The solution is concave down, so it lies below its tangent line: the estimate is **too high**. (Check, for interest: the exact solution C = 4(1 − e^(−t/2)) gives C(0.5) ≈ 0.885 mg/L.)

**(d)** The concentration rises towards 4 mg/L. As C approaches 4, the rate 2 − 0.5C approaches 0, so the increase slows and C levels off just below 4 mg/L without exceeding it.

| Point | What earns it |
|---|---|
| 1 | (a) C = 4 with a correct interpretation in context |
| 1 | (b) Sign of dC/dt from 0 ≤ C < 4 **and** d²C/dt² = −0.5 dC/dt < 0 |
| 1 | (c) Tangent line C ≈ 2t and estimate 1 mg/L |
| 1 | (c) and (d) "Too high" justified by concave down, and long-run value 4 mg/L with units |
</details>

## Question 7 (constructed response · stretch)

Consider dy/dx = y − 2x + 1.

(a) Show that y = 2x + 1 is a solution.
(b) Let y = k(x) be the solution through (0, 0). Is k increasing or decreasing at x = 0? Is its graph concave up or down there?
(c) A student says: "The line y = 2x + 1 is a solution, so every other solution gets closer to it as x increases." Let D = y − (2x + 1), the vertical distance of a solution above the line. Show that dD/dx = D, and use this to explain why the student is wrong for the solution through (0, 0).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For y = 2x + 1, dy/dx = 2. The right side is (2x + 1) − 2x + 1 = 2. They agree for every x.

**(b)** At (0, 0): dy/dx = 0 − 0 + 1 = 1 > 0, so k is **increasing**. Differentiate: d²y/dx² = dy/dx − 2 = (y − 2x + 1) − 2. At (0, 0): 1 − 2 = −1 < 0, so the graph is **concave down**.

**(c)** dD/dx = dy/dx − 2 = (y − 2x + 1) − 2 = y − 2x − 1 = D. For the solution through (0, 0), D starts at 0 − 1 = −1, so the curve starts below the line. While D < 0, dD/dx = D < 0, so D keeps decreasing: it becomes more negative, and its size grows. The curve moves **further below** the line as x increases, so the student is wrong. The line attracts nothing here: solutions on either side move away from it. (Check, for interest: k(x) = 2x + 1 − eˣ, so D = −eˣ, which grows in size.)

| Point | What earns it |
|---|---|
| 1 | (a) Both sides equal 2 for all x |
| 1 | (b) Increasing, from dy/dx = 1 at (0, 0) |
| 1 | (b) Concave down, from d²y/dx² = dy/dx − 2 = −1 |
| 1 | (c) Shows dD/dx = D |
| 1 | (c) Uses D(0) = −1 < 0 and dD/dx = D < 0 to conclude the distance grows, so the student is wrong |

Acceptable alternative for (c): an argument from the field that points below the line have dy/dx < 2, so the solution rises more slowly than the line and falls further behind, provided it is linked to D < 0.
</details>

## How did you do?

- **Q1 or Q5(c) wrong:** reread "Constant solutions" in the [study guide](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/): substitute y = c into both sides.
- **Q2, Q5(b) or Q6(d) wrong:** redo Worked example 1 (c): curves level off towards constant solutions.
- **Q3, Q5(d) or Q7(b) wrong:** practise implicit differentiation for d²y/dx², remembering that y depends on x.
- **Q4 wrong:** see "Solutions are functions, and there are many" and the table of vertical and horizontal shifts.
- **Q6(c) or Q7(c) wrong:** redo Worked example 2: tangent lines, concavity and how curves behave near a straight-line solution.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-checklist/).
