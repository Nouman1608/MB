---
resourceId: "mb-ap-calcab-7.4-study-guide"
title: "Reasoning Using Slope Fields: Study Guide (Calculus AB 7.4)"
description: "Use slope fields to sketch particular solutions, recognise families and constant solutions, and reason about long-run behaviour, extrema and concavity."
course: "calculus-ab"
unit: 7
topics: ["7.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Drawing and reading slope fields (Topic 7.3)"
  - "Verifying solutions of differential equations (Topic 7.2)"
  - "Implicit differentiation and the chain rule (Topics 3.1 and 3.2)"
  - "Tangent lines and local linear approximation (Topic 4.6)"
  - "Increasing, decreasing and concavity from first and second derivatives (Unit 5)"
prerequisiteResources: ["mb-ap-calcab-7.3-study-guide"]
learningObjectives:
  - "Explain why a differential equation has a family of solution functions and how one point selects a particular solution"
  - "Sketch the particular solution through a given point on a slope field"
  - "Identify constant solutions from the equation and from the field, and tell them apart from zero-slope curves that are not solutions"
  - "Describe long-run behaviour of solutions using the field"
  - "Use dy/dx and d²y/dx² to decide where a solution increases, decreases, has an extremum or is concave up or down"
  - "Write a tangent line to a particular solution and judge whether it over- or underestimates"
skills: ["4", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Exact solutions quoted for checking were found and verified separately; you do not need them."
related: ["mb-ap-calcab-7.4-revision-notes", "mb-ap-calcab-7.4-practice", "mb-ap-calcab-7.4-checklist"]
next: "mb-ap-calcab-7.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A solution of a differential equation is a function. Usually there is a whole family of them, and the slope field shows the family at once."
  - "A point (an initial condition) picks out one particular solution. Sketch it by starting at the point and following the segments in both directions."
  - "y = c is a constant solution when dy/dx = 0 at every point of that horizontal line. A zero-slope curve that is not horizontal is not a solution."
  - "Use the equation as well as the picture: the sign of dy/dx gives increasing or decreasing, and d²y/dx² (by implicit differentiation) gives concavity."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 7.4 is common content, so the same page serves AB and BC students."
  - question: "Can two solution curves cross?"
    answer: "For the equations on these pages, no: through each point there is only one solution, so curves never cross or touch. This rests on a uniqueness theorem that is beyond the course, so use it as a guide when sketching rather than as a written justification."
  - question: "How accurate does my sketched solution have to be?"
    answer: "It must pass through the given point, follow the segments, and show the right shape: where it rises or falls, levels off or turns. It is not expected to hit exact values."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

dy/dx and y′ both mean the first derivative; d²y/dx² and y″ mean the second derivative. An **initial condition** such as y(0) = 2, or "the solution through (0, 2)", tells you one point on the solution curve. Equations may use other letters, such as dC/dt; the reasoning is the same.

## Solutions are functions, and there are many

In Topic 7.2 you checked that a function satisfies a differential equation. Here is the key idea behind this topic: **a solution of a differential equation is a function**, and there are usually infinitely many of them.

Take dy/dx = x/2. The function y = x²/4 is a solution, because its derivative is x/2. So is y = x²/4 + 5, and y = x²/4 − 1. Adding any constant C does not change the derivative, so the **family** y = x²/4 + C contains a solution for every value of C.

The slope field shows the whole family at once. Every curve that follows the segments is the graph of one member. To pick out a single **particular solution**, you need one point on it. For example, the solution of dy/dx = x/2 through (2, 3) has 3 = 4/4 + C, so C = 2.

Two patterns from Topic 7.3 now tell you how the members of a family are related:

| If dy/dx depends on... | Columns or rows identical | How the solution curves relate |
|---|---|---|
| x only | Columns | Each curve is a **vertical shift** of the others (y = F(x) + C). Example: dy/dx = cos x has solutions y = sin x + C. |
| y only | Rows | Each curve is a **horizontal shift** of the others. Sliding a curve left or right keeps it on the field. |

## How to sketch a particular solution

1. **Mark the given point.** The curve must pass through it.
2. **Read the slope there** from the field or from the equation. Start the curve along that direction.
3. **Follow the segments to the right**, bending smoothly so the curve is always tangent to the nearby segments. It runs between grid points, not only through them.
4. **Go back to the point and follow the segments to the left.** Forgetting the left side is a common loss of marks.
5. **Respect the field's features.** A solution curve never cuts across segments at a sharp angle. Near a horizontal line of flat segments it levels off instead of crossing. It is the graph of a function, so it never doubles back to the left.
6. **Stop at the edge of the field.** Do not guess beyond the region that is drawn.

## Constant solutions

Sometimes a horizontal line is itself a solution. If dy/dx = 0 at **every** point of the line y = c, then the constant function y = c satisfies the equation: its derivative is 0, and the equation also gives 0. These are called **constant** (or **equilibrium**) solutions.

To find them, look for values of y that make dy/dx = 0 **whatever x is**. For dy/dx = (y − 1)(3 − y)/2, both y = 1 and y = 3 work. In the field, a constant solution appears as a whole row of horizontal segments.

**Be careful:** a curve of zero slopes is not automatically a solution. For dy/dx = 2x − y, the segments are flat along the line y = 2x. But that line has slope 2, while the field says the slope on it is 0. The line cuts across its own segments, so it is not a solution. Only a **horizontal** line of flat segments can be a solution, because only then does the line's own slope (0) agree with the field.

## Worked example 1: three solutions of one equation

**Question.** For dy/dx = (y − 1)(3 − y)/2, the slope field below is drawn at x = −3, −2, ..., 3 and y = 0, 0.5, ..., 4.5.

(a) Find the constant solutions.
(b) Sketch the particular solutions through (0, 2), (0, 4) and (0, 0).
(c) For the solution through (0, 2), find the limit of y as x → ∞ and as x → −∞.
(d) Where is the solution through (0, 2) concave up and where concave down?

<figure>
<svg viewBox="0 0 454.8 334" role="img" aria-labelledby="sf74a-title sf74a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf74a-title">Slope field for dy/dx = (y − 1)(3 − y)/2 with three solution curves</title>
<desc id="sf74a-desc">Slope field for dy/dx = (y − 1)(3 − y)/2 at x = −3 to 3 and y = 0 to 4.5. Every row of segments is identical. Rows y = 1 and y = 3 are flat and are drawn over with dashed horizontal lines labelled as constant solutions. Between them the segments rise; above y = 3 and below y = 1 they fall, more steeply further away. Three thick solution curves pass through marked points. The curve through (0, 2) is S-shaped: it rises from just above y = 1 on the left to just below y = 3 on the right. The curve through (0, 4) falls from the top of the field near x = −1 and levels off just above y = 3 on the right. The curve through (0, 0) rises from just below y = 1 on the far left, passes through the origin and drops out of the bottom of the field just to the right of it.</desc>
<rect x="0" y="0" width="454.8" height="334" fill="#ffffff"/>
<defs><clipPath id="sf74a-clip"><rect x="44" y="24" width="380.8" height="280"/></clipPath></defs>
<line x1="44" y1="281.6" x2="424.8" y2="281.6" stroke="#8a94a6" stroke-width="1"/>
<line x1="234.4" y1="304" x2="234.4" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="66.4" y="322">−3</text>
<text x="122.4" y="322">−2</text>
<text x="178.4" y="322">−1</text>
<text x="234.4" y="322">0</text>
<text x="290.4" y="322">1</text>
<text x="346.4" y="322">2</text>
<text x="402.4" y="322">3</text>
<text x="438.8" y="322">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="285.6">0</text>
<text x="36" y="229.6">1</text>
<text x="36" y="173.6">2</text>
<text x="36" y="117.6">3</text>
<text x="36" y="61.6">4</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="61.6" y1="274.4" x2="71.2" y2="288.8"/>
<line x1="59" y1="249" x2="73.8" y2="258.2"/>
<line x1="57.7" y1="225.6" x2="75.1" y2="225.6"/>
<line x1="58.3" y1="200.6" x2="74.5" y2="194.6"/>
<line x1="58.6" y1="173.5" x2="74.2" y2="165.7"/>
<line x1="58.3" y1="144.6" x2="74.5" y2="138.6"/>
<line x1="57.7" y1="113.6" x2="75.1" y2="113.6"/>
<line x1="59" y1="81" x2="73.8" y2="90.2"/>
<line x1="61.6" y1="50.4" x2="71.2" y2="64.8"/>
<line x1="63.3" y1="21.5" x2="69.5" y2="37.7"/>
<line x1="117.6" y1="274.4" x2="127.2" y2="288.8"/>
<line x1="115" y1="249" x2="129.8" y2="258.2"/>
<line x1="113.7" y1="225.6" x2="131.1" y2="225.6"/>
<line x1="114.3" y1="200.6" x2="130.5" y2="194.6"/>
<line x1="114.6" y1="173.5" x2="130.2" y2="165.7"/>
<line x1="114.3" y1="144.6" x2="130.5" y2="138.6"/>
<line x1="113.7" y1="113.6" x2="131.1" y2="113.6"/>
<line x1="115" y1="81" x2="129.8" y2="90.2"/>
<line x1="117.6" y1="50.4" x2="127.2" y2="64.8"/>
<line x1="119.3" y1="21.5" x2="125.5" y2="37.7"/>
<line x1="173.6" y1="274.4" x2="183.2" y2="288.8"/>
<line x1="171" y1="249" x2="185.8" y2="258.2"/>
<line x1="169.7" y1="225.6" x2="187.1" y2="225.6"/>
<line x1="170.3" y1="200.6" x2="186.5" y2="194.6"/>
<line x1="170.6" y1="173.5" x2="186.2" y2="165.7"/>
<line x1="170.3" y1="144.6" x2="186.5" y2="138.6"/>
<line x1="169.7" y1="113.6" x2="187.1" y2="113.6"/>
<line x1="171" y1="81" x2="185.8" y2="90.2"/>
<line x1="173.6" y1="50.4" x2="183.2" y2="64.8"/>
<line x1="175.3" y1="21.5" x2="181.5" y2="37.7"/>
<line x1="229.6" y1="274.4" x2="239.2" y2="288.8"/>
<line x1="227" y1="249" x2="241.8" y2="258.2"/>
<line x1="225.7" y1="225.6" x2="243.1" y2="225.6"/>
<line x1="226.3" y1="200.6" x2="242.5" y2="194.6"/>
<line x1="226.6" y1="173.5" x2="242.2" y2="165.7"/>
<line x1="226.3" y1="144.6" x2="242.5" y2="138.6"/>
<line x1="225.7" y1="113.6" x2="243.1" y2="113.6"/>
<line x1="227" y1="81" x2="241.8" y2="90.2"/>
<line x1="229.6" y1="50.4" x2="239.2" y2="64.8"/>
<line x1="231.3" y1="21.5" x2="237.5" y2="37.7"/>
<line x1="285.6" y1="274.4" x2="295.2" y2="288.8"/>
<line x1="283" y1="249" x2="297.8" y2="258.2"/>
<line x1="281.7" y1="225.6" x2="299.1" y2="225.6"/>
<line x1="282.3" y1="200.6" x2="298.5" y2="194.6"/>
<line x1="282.6" y1="173.5" x2="298.2" y2="165.7"/>
<line x1="282.3" y1="144.6" x2="298.5" y2="138.6"/>
<line x1="281.7" y1="113.6" x2="299.1" y2="113.6"/>
<line x1="283" y1="81" x2="297.8" y2="90.2"/>
<line x1="285.6" y1="50.4" x2="295.2" y2="64.8"/>
<line x1="287.3" y1="21.5" x2="293.5" y2="37.7"/>
<line x1="341.6" y1="274.4" x2="351.2" y2="288.8"/>
<line x1="339" y1="249" x2="353.8" y2="258.2"/>
<line x1="337.7" y1="225.6" x2="355.1" y2="225.6"/>
<line x1="338.3" y1="200.6" x2="354.5" y2="194.6"/>
<line x1="338.6" y1="173.5" x2="354.2" y2="165.7"/>
<line x1="338.3" y1="144.6" x2="354.5" y2="138.6"/>
<line x1="337.7" y1="113.6" x2="355.1" y2="113.6"/>
<line x1="339" y1="81" x2="353.8" y2="90.2"/>
<line x1="341.6" y1="50.4" x2="351.2" y2="64.8"/>
<line x1="343.3" y1="21.5" x2="349.5" y2="37.7"/>
<line x1="397.6" y1="274.4" x2="407.2" y2="288.8"/>
<line x1="395" y1="249" x2="409.8" y2="258.2"/>
<line x1="393.7" y1="225.6" x2="411.1" y2="225.6"/>
<line x1="394.3" y1="200.6" x2="410.5" y2="194.6"/>
<line x1="394.6" y1="173.5" x2="410.2" y2="165.7"/>
<line x1="394.3" y1="144.6" x2="410.5" y2="138.6"/>
<line x1="393.7" y1="113.6" x2="411.1" y2="113.6"/>
<line x1="395" y1="81" x2="409.8" y2="90.2"/>
<line x1="397.6" y1="50.4" x2="407.2" y2="64.8"/>
<line x1="399.3" y1="21.5" x2="405.5" y2="37.7"/>
</g>
<line x1="44" y1="225.6" x2="424.8" y2="225.6" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="420.8" y="241.6" font-size="12" fill="#1d2b44" text-anchor="end" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">y = 1 (constant solution)</text>
<line x1="44" y1="113.6" x2="424.8" y2="113.6" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<text x="48" y="107.6" font-size="12" fill="#1d2b44" text-anchor="start" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">y = 3 (constant solution)</text>
<polyline points="44,222 45.9,221.9 47.8,221.7 49.7,221.6 51.6,221.5 53.5,221.3 55.4,221.2 57.3,221.1 59.2,220.9 61.1,220.7 63,220.6 64.9,220.4 66.8,220.2 68.8,220.1 70.7,219.9 72.6,219.7 74.5,219.5 76.4,219.3 78.3,219.1 80.2,218.9 82.1,218.7 84,218.5 85.9,218.2 87.8,218 89.7,217.7 91.6,217.5 93.5,217.2 95.4,217 97.3,216.7 99.2,216.4 101.1,216.1 103,215.8 104.9,215.5 106.8,215.2 108.7,214.9 110.6,214.5 112.5,214.2 114.4,213.8 116.4,213.5 118.3,213.1 120.2,212.7 122.1,212.3 124,211.9 125.9,211.5 127.8,211.1 129.7,210.6 131.6,210.2 133.5,209.7 135.4,209.3 137.3,208.8 139.2,208.3 141.1,207.8 143,207.3 144.9,206.8 146.8,206.2 148.7,205.7 150.6,205.1 152.5,204.5 154.4,203.9 156.3,203.3 158.2,202.7 160.1,202.1 162,201.5 164,200.8 165.9,200.1 167.8,199.5 169.7,198.8 171.6,198.1 173.5,197.4 175.4,196.7 177.3,195.9 179.2,195.2 181.1,194.4 183,193.6 184.9,192.9 186.8,192.1 188.7,191.3 190.6,190.4 192.5,189.6 194.4,188.8 196.3,187.9 198.2,187.1 200.1,186.2 202,185.3 203.9,184.5 205.8,183.6 207.7,182.7 209.6,181.8 211.6,180.9 213.5,180 215.4,179 217.3,178.1 219.2,177.2 221.1,176.2 223,175.3 224.9,174.3 226.8,173.4 228.7,172.5 230.6,171.5 232.5,170.6 234.4,169.6 236.3,168.6 238.2,167.7 240.1,166.7 242,165.8 243.9,164.9 245.8,163.9 247.7,163 249.6,162 251.5,161.1 253.4,160.2 255.3,159.2 257.2,158.3 259.2,157.4 261.1,156.5 263,155.6 264.9,154.7 266.8,153.9 268.7,153 270.6,152.1 272.5,151.3 274.4,150.4 276.3,149.6 278.2,148.8 280.1,147.9 282,147.1 283.9,146.3 285.8,145.6 287.7,144.8 289.6,144 291.5,143.3 293.4,142.5 295.3,141.8 297.2,141.1 299.1,140.4 301,139.7 302.9,139.1 304.8,138.4 306.8,137.7 308.7,137.1 310.6,136.5 312.5,135.9 314.4,135.3 316.3,134.7 318.2,134.1 320.1,133.5 322,133 323.9,132.4 325.8,131.9 327.7,131.4 329.6,130.9 331.5,130.4 333.4,129.9 335.3,129.5 337.2,129 339.1,128.6 341,128.1 342.9,127.7 344.8,127.3 346.7,126.9 348.6,126.5 350.5,126.1 352.4,125.7 354.4,125.4 356.3,125 358.2,124.7 360.1,124.3 362,124 363.9,123.7 365.8,123.4 367.7,123.1 369.6,122.8 371.5,122.5 373.4,122.2 375.3,122 377.2,121.7 379.1,121.5 381,121.2 382.9,121 384.8,120.7 386.7,120.5 388.6,120.3 390.5,120.1 392.4,119.9 394.3,119.7 396.2,119.5 398.1,119.3 400,119.1 402,119 403.9,118.8 405.8,118.6 407.7,118.5 409.6,118.3 411.5,118.1 413.4,118 415.3,117.9 417.2,117.7 419.1,117.6 421,117.5 422.9,117.3 424.8,117.2 424.8,117.2" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf74a-clip)"/>
<polyline points="195.8,-107.3 197.7,-86.7 199.7,-69.1 201.6,-53.9 203.5,-40.6 205.4,-28.9 207.3,-18.5 209.2,-9.2 211.1,-0.9 213,6.6 214.9,13.4 216.8,19.5 218.7,25.1 220.6,30.3 222.5,35 224.4,39.4 226.3,43.4 228.2,47.2 230.1,50.6 232,53.9 233.9,56.9 235.8,59.7 237.7,62.3 239.6,64.8 241.5,67.1 243.4,69.3 245.3,71.3 247.3,73.2 249.2,75 251.1,76.8 253,78.4 254.9,79.9 256.8,81.4 258.7,82.7 260.6,84 262.5,85.3 264.4,86.4 266.3,87.6 268.2,88.6 270.1,89.6 272,90.6 273.9,91.5 275.8,92.4 277.7,93.2 279.6,94 281.5,94.8 283.4,95.5 285.3,96.2 287.2,96.9 289.1,97.5 291,98.1 292.9,98.7 294.9,99.3 296.8,99.8 298.7,100.3 300.6,100.8 302.5,101.3 304.4,101.8 306.3,102.2 308.2,102.6 310.1,103 312,103.4 313.9,103.8 315.8,104.1 317.7,104.5 319.6,104.8 321.5,105.1 323.4,105.4 325.3,105.7 327.2,106 329.1,106.3 331,106.5 332.9,106.8 334.8,107 336.7,107.3 338.6,107.5 340.5,107.7 342.5,107.9 344.4,108.1 346.3,108.3 348.2,108.5 350.1,108.7 352,108.8 353.9,109 355.8,109.2 357.7,109.3 359.6,109.5 361.5,109.6 363.4,109.7 365.3,109.9 367.2,110 369.1,110.1 371,110.2 372.9,110.4 374.8,110.5 376.7,110.6 378.6,110.7 380.5,110.8 382.4,110.9 384.3,111 386.2,111.1 388.1,111.2 390.1,111.2 392,111.3 393.9,111.4 395.8,111.5 397.7,111.5 399.6,111.6 401.5,111.7 403.4,111.7 405.3,111.8 407.2,111.9 409.1,111.9 411,112 412.9,112 414.8,112.1 416.7,112.1 418.6,112.2 420.5,112.2 422.4,112.3 424.3,112.3 424.8,112.3" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf74a-clip)"/>
<polyline points="44,226.9 45.9,226.9 47.8,226.9 49.7,227 51.6,227 53.5,227.1 55.4,227.1 57.3,227.2 59.2,227.3 61.1,227.3 63,227.4 64.9,227.4 66.8,227.5 68.8,227.6 70.7,227.6 72.6,227.7 74.5,227.8 76.4,227.9 78.3,227.9 80.2,228 82.1,228.1 84,228.2 85.9,228.3 87.8,228.4 89.7,228.5 91.6,228.6 93.5,228.7 95.4,228.8 97.3,228.9 99.2,229 101.1,229.2 103,229.3 104.9,229.4 106.8,229.6 108.7,229.7 110.6,229.9 112.5,230 114.4,230.2 116.4,230.3 118.3,230.5 120.2,230.7 122.1,230.9 124,231 125.9,231.2 127.8,231.5 129.7,231.7 131.6,231.9 133.5,232.1 135.4,232.4 137.3,232.6 139.2,232.9 141.1,233.1 143,233.4 144.9,233.7 146.8,234 148.7,234.3 150.6,234.6 152.5,235 154.4,235.3 156.3,235.7 158.2,236.1 160.1,236.5 162,236.9 164,237.3 165.9,237.8 167.8,238.2 169.7,238.7 171.6,239.2 173.5,239.8 175.4,240.3 177.3,240.9 179.2,241.5 181.1,242.1 183,242.8 184.9,243.5 186.8,244.2 188.7,245 190.6,245.8 192.5,246.6 194.4,247.4 196.3,248.4 198.2,249.3 200.1,250.3 202,251.4 203.9,252.5 205.8,253.6 207.7,254.9 209.6,256.1 211.6,257.5 213.5,258.9 215.4,260.4 217.3,262 219.2,263.7 221.1,265.5 223,267.4 224.9,269.4 226.8,271.6 228.7,273.8 230.6,276.3 232.5,278.8 234.4,281.6 236.3,284.6 238.2,287.7 240.1,291.1 242,294.8 243.9,298.8 245.8,303 247.7,307.7 249.6,312.7 251.5,318.2 253.4,324.3 255.3,330.9 257.2,338.2 259.2,346.3 261.1,355.3 263,365.3 264.9,376.7 266.8,389.6 267.2,393.1" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf74a-clip)"/>
<circle cx="234.4" cy="169.6" r="5" fill="#1d2b44"/>
<text x="184.4" y="161.6" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 2)</text>
<circle cx="234.4" cy="57.6" r="5" fill="#1d2b44"/>
<text x="242.4" y="49.6" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 4)</text>
<circle cx="234.4" cy="281.6" r="5" fill="#1d2b44"/>
<text x="242.4" y="273.6" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 0)</text>
</svg>
<figcaption>Figure 1. Three particular solutions of dy/dx = (y − 1)(3 − y)/2 (thick curves) and the two constant solutions y = 1 and y = 3 (dashed lines). Curves between or beside the constant solutions level off towards them instead of crossing. Axes are unitless and use equal scales.</figcaption>
</figure>

**(a)** dy/dx = 0 when y = 1 or y = 3, for every x. So **y = 1** and **y = 3** are constant solutions. The field shows two rows of flat segments there.

**(b)** Work out the sign in each band of y-values.

| Band | Sign of (y − 1)(3 − y) | Segments |
|---|---|---|
| y > 3 | (+)(−) = negative | Fall |
| 1 < y < 3 | (+)(+) = positive | Rise |
| y < 1 | (−)(+) = negative | Fall |

- Through **(0, 2)**: slope (1)(1)/2 = 1/2. The curve rises, flattening as it nears y = 3 on the right. Going left it falls, flattening as it nears y = 1.
- Through **(0, 4)**: slope (3)(−1)/2 = −3/2. Going right it falls and levels off towards y = 3 from above. Going left it climbs steeply and soon leaves the top of the field.
- Through **(0, 0)**: slope (−1)(3)/2 = −3/2. Going right it falls ever more steeply and leaves the bottom of the field almost at once. Going left it rises and levels off towards y = 1 from below.

**(c)** The solution through (0, 2) stays between the two constant solutions and rises towards the upper one. So **y → 3 as x → ∞** and **y → 1 as x → −∞**. (Check, for interest: this solution is y = (1 + 3eˣ)/(1 + eˣ), which you will be able to find with Topic 7.6. Substituting shows it satisfies the equation, and its limits are 3 and 1.)

**(d)** Differentiate dy/dx = (y − 1)(3 − y)/2 implicitly with respect to x. The product rule and the chain rule give

**d²y/dx² = [(3 − y) − (y − 1)]/2 · dy/dx = (2 − y) · dy/dx**

On this solution dy/dx > 0, because 1 < y < 3. So the sign of d²y/dx² is the sign of 2 − y:

- below y = 2 (that is, for x < 0): **concave up**;
- above y = 2 (for x > 0): **concave down**.

At (0, 2) the concavity changes, so the curve has a point of inflection there. That is also where the segments along the curve are steepest.

**Answer.** Constant solutions y = 1 and y = 3; the solution through (0, 2) rises from y = 1 towards y = 3, with an inflection point at (0, 2).

## Worked example 2: reasoning with the equation and the field

**Question.** Let y = f(x) be the particular solution of dy/dx = 2x − y through (0, 1).

(a) Write the tangent line to the solution at x = 0 and use it to estimate f(0.2).
(b) Find d²y/dx² in terms of x and y. Is your estimate an overestimate or an underestimate?
(c) Show that y = 2x − 2 is a solution. What does this tell you about the field?
(d) Does f have a relative minimum? Describe the long-run behaviour of f.

<figure>
<svg viewBox="0 0 362 470" role="img" aria-labelledby="sf74b-title sf74b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sf74b-title">Slope field for dy/dx = 2x − y with the solution through (0, 1)</title>
<desc id="sf74b-desc">Slope field for dy/dx = 2x − y at x from −1 to 3 and y from −2 to 4 in steps of 0.5. Segments fall steeply in the upper left and rise steeply in the lower right. A dotted line y = 2x passes through the points where the segments are flat; it is labelled as zero slopes, not a solution. A dashed line y = 2x − 2, labelled as a solution, runs parallel to the segments along it. A thick curve through the marked point (0, 1) comes down from the top left, has its lowest point just right of x = 0.4 at a height of about 0.8, where it meets the dotted line, and then rises, getting closer and closer to the dashed line.</desc>
<rect x="0" y="0" width="362" height="470" fill="#ffffff"/>
<defs><clipPath id="sf74b-clip"><rect x="44" y="24" width="288" height="416"/></clipPath></defs>
<line x1="44" y1="296" x2="332" y2="296" stroke="#8a94a6" stroke-width="1"/>
<line x1="124" y1="440" x2="124" y2="24" stroke="#8a94a6" stroke-width="1"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="458">−1</text>
<text x="124" y="458">0</text>
<text x="188" y="458">1</text>
<text x="252" y="458">2</text>
<text x="316" y="458">3</text>
<text x="346" y="458">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="36" y="428">−2</text>
<text x="36" y="364">−1</text>
<text x="36" y="300">0</text>
<text x="36" y="236">1</text>
<text x="36" y="172">2</text>
<text x="36" y="108">3</text>
<text x="36" y="44">4</text>
<text x="36" y="16">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1.8" stroke-linecap="round">
<line x1="50.1" y1="424" x2="69.9" y2="424"/>
<line x1="51.1" y1="387.6" x2="68.9" y2="396.4"/>
<line x1="53" y1="353" x2="67" y2="367"/>
<line x1="54.5" y1="319.7" x2="65.5" y2="336.3"/>
<line x1="55.6" y1="287.1" x2="64.4" y2="304.9"/>
<line x1="56.3" y1="254.8" x2="63.7" y2="273.2"/>
<line x1="56.9" y1="222.6" x2="63.1" y2="241.4"/>
<line x1="57.3" y1="190.5" x2="62.7" y2="209.5"/>
<line x1="57.6" y1="158.4" x2="62.4" y2="177.6"/>
<line x1="57.8" y1="126.3" x2="62.2" y2="145.7"/>
<line x1="58.1" y1="94.3" x2="61.9" y2="113.7"/>
<line x1="58.2" y1="62.2" x2="61.8" y2="81.8"/>
<line x1="58.4" y1="30.2" x2="61.6" y2="49.8"/>
<line x1="85" y1="431" x2="99" y2="417"/>
<line x1="83.1" y1="396.4" x2="100.9" y2="387.6"/>
<line x1="82.1" y1="360" x2="101.9" y2="360"/>
<line x1="83.1" y1="323.6" x2="100.9" y2="332.4"/>
<line x1="85" y1="289" x2="99" y2="303"/>
<line x1="86.5" y1="255.7" x2="97.5" y2="272.3"/>
<line x1="87.6" y1="223.1" x2="96.4" y2="240.9"/>
<line x1="88.3" y1="190.8" x2="95.7" y2="209.2"/>
<line x1="88.9" y1="158.6" x2="95.1" y2="177.4"/>
<line x1="89.3" y1="126.5" x2="94.7" y2="145.5"/>
<line x1="89.6" y1="94.4" x2="94.4" y2="113.6"/>
<line x1="89.8" y1="62.3" x2="94.2" y2="81.7"/>
<line x1="90.1" y1="30.3" x2="93.9" y2="49.7"/>
<line x1="119.6" y1="432.9" x2="128.4" y2="415.1"/>
<line x1="118.5" y1="400.3" x2="129.5" y2="383.7"/>
<line x1="117" y1="367" x2="131" y2="353"/>
<line x1="115.1" y1="332.4" x2="132.9" y2="323.6"/>
<line x1="114.1" y1="296" x2="133.9" y2="296"/>
<line x1="115.1" y1="259.6" x2="132.9" y2="268.4"/>
<line x1="117" y1="225" x2="131" y2="239"/>
<line x1="118.5" y1="191.7" x2="129.5" y2="208.3"/>
<line x1="119.6" y1="159.1" x2="128.4" y2="176.9"/>
<line x1="120.3" y1="126.8" x2="127.7" y2="145.2"/>
<line x1="120.9" y1="94.6" x2="127.1" y2="113.4"/>
<line x1="121.3" y1="62.5" x2="126.7" y2="81.5"/>
<line x1="121.6" y1="30.4" x2="126.4" y2="49.6"/>
<line x1="152.9" y1="433.4" x2="159.1" y2="414.6"/>
<line x1="152.3" y1="401.2" x2="159.7" y2="382.8"/>
<line x1="151.6" y1="368.9" x2="160.4" y2="351.1"/>
<line x1="150.5" y1="336.3" x2="161.5" y2="319.7"/>
<line x1="149" y1="303" x2="163" y2="289"/>
<line x1="147.1" y1="268.4" x2="164.9" y2="259.6"/>
<line x1="146.1" y1="232" x2="165.9" y2="232"/>
<line x1="147.1" y1="195.6" x2="164.9" y2="204.4"/>
<line x1="149" y1="161" x2="163" y2="175"/>
<line x1="150.5" y1="127.7" x2="161.5" y2="144.3"/>
<line x1="151.6" y1="95.1" x2="160.4" y2="112.9"/>
<line x1="152.3" y1="62.8" x2="159.7" y2="81.2"/>
<line x1="152.9" y1="30.6" x2="159.1" y2="49.4"/>
<line x1="185.6" y1="433.6" x2="190.4" y2="414.4"/>
<line x1="185.3" y1="401.5" x2="190.7" y2="382.5"/>
<line x1="184.9" y1="369.4" x2="191.1" y2="350.6"/>
<line x1="184.3" y1="337.2" x2="191.7" y2="318.8"/>
<line x1="183.6" y1="304.9" x2="192.4" y2="287.1"/>
<line x1="182.5" y1="272.3" x2="193.5" y2="255.7"/>
<line x1="181" y1="239" x2="195" y2="225"/>
<line x1="179.1" y1="204.4" x2="196.9" y2="195.6"/>
<line x1="178.1" y1="168" x2="197.9" y2="168"/>
<line x1="179.1" y1="131.6" x2="196.9" y2="140.4"/>
<line x1="181" y1="97" x2="195" y2="111"/>
<line x1="182.5" y1="63.7" x2="193.5" y2="80.3"/>
<line x1="183.6" y1="31.1" x2="192.4" y2="48.9"/>
<line x1="218.1" y1="433.7" x2="221.9" y2="414.3"/>
<line x1="217.8" y1="401.7" x2="222.2" y2="382.3"/>
<line x1="217.6" y1="369.6" x2="222.4" y2="350.4"/>
<line x1="217.3" y1="337.5" x2="222.7" y2="318.5"/>
<line x1="216.9" y1="305.4" x2="223.1" y2="286.6"/>
<line x1="216.3" y1="273.2" x2="223.7" y2="254.8"/>
<line x1="215.6" y1="240.9" x2="224.4" y2="223.1"/>
<line x1="214.5" y1="208.3" x2="225.5" y2="191.7"/>
<line x1="213" y1="175" x2="227" y2="161"/>
<line x1="211.1" y1="140.4" x2="228.9" y2="131.6"/>
<line x1="210.1" y1="104" x2="229.9" y2="104"/>
<line x1="211.1" y1="67.6" x2="228.9" y2="76.4"/>
<line x1="213" y1="33" x2="227" y2="47"/>
<line x1="250.4" y1="433.8" x2="253.6" y2="414.2"/>
<line x1="250.2" y1="401.8" x2="253.8" y2="382.2"/>
<line x1="250.1" y1="369.7" x2="253.9" y2="350.3"/>
<line x1="249.8" y1="337.7" x2="254.2" y2="318.3"/>
<line x1="249.6" y1="305.6" x2="254.4" y2="286.4"/>
<line x1="249.3" y1="273.5" x2="254.7" y2="254.5"/>
<line x1="248.9" y1="241.4" x2="255.1" y2="222.6"/>
<line x1="248.3" y1="209.2" x2="255.7" y2="190.8"/>
<line x1="247.6" y1="176.9" x2="256.4" y2="159.1"/>
<line x1="246.5" y1="144.3" x2="257.5" y2="127.7"/>
<line x1="245" y1="111" x2="259" y2="97"/>
<line x1="243.1" y1="76.4" x2="260.9" y2="67.6"/>
<line x1="242.1" y1="40" x2="261.9" y2="40"/>
<line x1="282.6" y1="433.8" x2="285.4" y2="414.2"/>
<line x1="282.5" y1="401.8" x2="285.5" y2="382.2"/>
<line x1="282.4" y1="369.8" x2="285.6" y2="350.2"/>
<line x1="282.2" y1="337.8" x2="285.8" y2="318.2"/>
<line x1="282.1" y1="305.7" x2="285.9" y2="286.3"/>
<line x1="281.8" y1="273.7" x2="286.2" y2="254.3"/>
<line x1="281.6" y1="241.6" x2="286.4" y2="222.4"/>
<line x1="281.3" y1="209.5" x2="286.7" y2="190.5"/>
<line x1="280.9" y1="177.4" x2="287.1" y2="158.6"/>
<line x1="280.3" y1="145.2" x2="287.7" y2="126.8"/>
<line x1="279.6" y1="112.9" x2="288.4" y2="95.1"/>
<line x1="278.5" y1="80.3" x2="289.5" y2="63.7"/>
<line x1="277" y1="47" x2="291" y2="33"/>
<line x1="314.8" y1="433.8" x2="317.2" y2="414.2"/>
<line x1="314.7" y1="401.8" x2="317.3" y2="382.2"/>
<line x1="314.6" y1="369.8" x2="317.4" y2="350.2"/>
<line x1="314.5" y1="337.8" x2="317.5" y2="318.2"/>
<line x1="314.4" y1="305.8" x2="317.6" y2="286.2"/>
<line x1="314.2" y1="273.8" x2="317.8" y2="254.2"/>
<line x1="314.1" y1="241.7" x2="317.9" y2="222.3"/>
<line x1="313.8" y1="209.7" x2="318.2" y2="190.3"/>
<line x1="313.6" y1="177.6" x2="318.4" y2="158.4"/>
<line x1="313.3" y1="145.5" x2="318.7" y2="126.5"/>
<line x1="312.9" y1="113.4" x2="319.1" y2="94.6"/>
<line x1="312.3" y1="81.2" x2="319.7" y2="62.8"/>
<line x1="311.6" y1="48.9" x2="320.4" y2="31.1"/>
</g>
<line x1="44" y1="584" x2="332" y2="8" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 5" clip-path="url(#sf74b-clip)"/>
<text x="223.2" y="273.6" font-size="12" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">y = 2x − 2 (solution)</text>
<line x1="44" y1="456" x2="260" y2="24" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4" clip-path="url(#sf74b-clip)"/>
<text x="140" y="104" font-size="12" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">y = 2x (zero slopes)</text>
<polyline points="44,-86.1 44.8,-79.4 45.6,-72.8 46.4,-66.3 47.2,-59.9 48,-53.5 48.8,-47.3 49.6,-41.2 50.4,-35.2 51.2,-29.2 52,-23.4 52.8,-17.7 53.6,-12 54.4,-6.4 55.2,-1 56,4.4 56.8,9.7 57.6,14.9 58.4,20.1 59.2,25.1 60,30.1 60.8,35 61.6,39.8 62.4,44.5 63.2,49.1 64,53.7 64.8,58.2 65.6,62.6 66.4,67 67.2,71.2 68,75.4 68.8,79.5 69.6,83.6 70.4,87.6 71.2,91.5 72,95.3 72.8,99.1 73.6,102.8 74.4,106.4 75.2,110 76,113.5 76.8,117 77.6,120.4 78.4,123.7 79.2,127 80,130.2 80.8,133.3 81.6,136.4 82.4,139.4 83.2,142.4 84,145.3 84.8,148.2 85.6,151 86.4,153.7 87.2,156.4 88,159 88.8,161.6 89.6,164.1 90.4,166.6 91.2,169.1 92,171.4 92.8,173.8 93.6,176.1 94.4,178.3 95.2,180.5 96,182.6 96.8,184.7 97.6,186.8 98.4,188.8 99.2,190.7 100,192.6 100.8,194.5 101.6,196.3 102.4,198.1 103.2,199.9 104,201.6 104.8,203.2 105.6,204.8 106.4,206.4 107.2,208 108,209.5 108.8,210.9 109.6,212.4 110.4,213.7 111.2,215.1 112,216.4 112.8,217.7 113.6,218.9 114.4,220.1 115.2,221.3 116,222.4 116.8,223.5 117.6,224.6 118.4,225.6 119.2,226.6 120,227.6 120.8,228.6 121.6,229.5 122.4,230.3 123.2,231.2 124,232 126.1,234 128.2,235.8 130.2,237.4 132.3,238.8 134.4,240 136.5,241.1 138.6,241.9 140.6,242.7 142.7,243.3 144.8,243.7 146.9,244 149,244.1 151,244.1 153.1,243.9 155.2,243.7 157.3,243.3 159.4,242.8 161.4,242.2 163.5,241.4 165.6,240.6 167.7,239.6 169.8,238.6 171.8,237.4 173.9,236.1 176,234.8 178.1,233.4 180.2,231.8 182.2,230.2 184.3,228.5 186.4,226.8 188.5,224.9 190.6,223 192.6,221 194.7,219 196.8,216.8 198.9,214.6 201,212.4 203,210.1 205.1,207.7 207.2,205.3 209.3,202.8 211.4,200.2 213.4,197.7 215.5,195 217.6,192.3 219.7,189.6 221.8,186.8 223.8,184 225.9,181.1 228,178.2 230.1,175.2 232.2,172.3 234.2,169.2 236.3,166.2 238.4,163.1 240.5,159.9 242.6,156.8 244.6,153.6 246.7,150.3 248.8,147.1 250.9,143.8 253,140.5 255,137.1 257.1,133.8 259.2,130.4 261.3,127 263.4,123.5 265.4,120.1 267.5,116.6 269.6,113.1 271.7,109.5 273.8,106 275.8,102.4 277.9,98.8 280,95.2 282.1,91.6 284.2,88 286.2,84.3 288.3,80.6 290.4,76.9 292.5,73.2 294.6,69.5 296.6,65.8 298.7,62 300.8,58.3 302.9,54.5 305,50.7 307,46.9 309.1,43.1 311.2,39.3 313.3,35.5 315.4,31.6 317.4,27.8 319.5,23.9 321.6,20 323.7,16.2 325.8,12.3 327.8,8.4 329.9,4.5 332,0.6 332,0.6" fill="none" stroke="#1d2b44" stroke-width="3" clip-path="url(#sf74b-clip)"/>
<circle cx="124" cy="232" r="5" fill="#1d2b44"/>
<text x="80" y="226" font-size="13" fill="#1d2b44" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" paint-order="stroke">(0, 1)</text>
</svg>
<figcaption>Figure 2. The particular solution of dy/dx = 2x − y through (0, 1) (thick curve). The dotted line y = 2x joins the flat segments but is not a solution. The dashed line y = 2x − 2 is a solution, and the curve approaches it as x increases. Axes are unitless and use equal scales.</figcaption>
</figure>

**(a)** At (0, 1), dy/dx = 2(0) − 1 = −1. The tangent line is **y = 1 − x**. So f(0.2) ≈ 1 − 0.2 = **0.8**.

**(b)** Differentiate dy/dx = 2x − y with respect to x, remembering that y depends on x:

**d²y/dx² = 2 − dy/dx = 2 − (2x − y) = 2 − 2x + y**

At (0, 1), d²y/dx² = 2 − 0 + 1 = 3 > 0. The solution is concave up near x = 0, so it lies above its tangent line. The estimate 0.8 is an **underestimate**.

(Check, for interest: the exact solution is f(x) = 2x − 2 + 3e⁻ˣ, which you can verify by substitution as in Topic 7.2. It gives f(0.2) ≈ 0.856, which is indeed above 0.8.)

**(c)** For y = 2x − 2: the left side is dy/dx = 2. The right side is 2x − (2x − 2) = 2. They agree for every x, so the straight line is a solution. In the field, the segments along this line all have slope 2 and lie exactly along it.

**(d)** f starts at (0, 1) going down, with slope −1. Its slope is 0 where 2x − y = 0, that is, where the curve meets the line y = 2x. Below that line 2x − y > 0, so the curve rises after crossing it. Because dy/dx changes from negative to positive there, f has a **relative minimum**, a little to the right of x = 0. (From the exact solution, it is at x = ln 1.5 ≈ 0.41, where f ≈ 0.81.)

For large x, the field shows every curve being drawn towards the line y = 2x − 2. The curve through (0, 1) starts above it and gets closer and closer, so **f(x) − (2x − 2) → 0 as x → ∞**. The solution does not level off; it grows roughly like the line.

## Using the equation, not just the picture

A sketch can mislead. Back up each claim with the equation.

| Question | What to use |
|---|---|
| Increasing or decreasing at a point? | The sign of dy/dx at that point |
| Relative max or min of a particular solution? | dy/dx = 0 and changes sign there, or dy/dx = 0 and d²y/dx² ≠ 0 there |
| Concave up or down? | The sign of d²y/dx², found by implicit differentiation, then substitute dy/dx |
| Approximate a value? | Tangent line at the known point; concavity tells you over or under |
| Constant solution? | A value c with dy/dx = 0 for every x when y = c |
| Long-run behaviour? | Which constant solution or straight-line solution the curves approach, read from the field and the signs |

When you find d²y/dx², always substitute the expression for dy/dx so the answer is in terms of x and y only. Then you can evaluate it at the given point.

**Background, not examined as theory.** For the well-behaved equations in this course, two different solution curves never meet, because each point lies on exactly one solution. That is why the solution through (0, 2) in Worked example 1 stays between y = 1 and y = 3. When you justify such a claim in writing, use the slopes (for example, "the slopes approach 0 as y approaches 3") rather than quoting the theorem.

## Common misconceptions

- **Drawing only to the right of the point.** A particular solution goes in both directions. Sketch the left side too.
- **"Every zero-slope curve is a solution."** Only horizontal lines of flat segments are. y = 2x in Worked example 2 is not a solution.
- **Crossing a constant solution.** A curve that approaches y = 3 levels off; it does not pass through.
- **Forgetting the chain rule in d²y/dx².** y is a function of x, so the derivative of y is dy/dx, not 0 and not 1.
- **Leaving d²y/dx² in terms of dy/dx.** Substitute the equation for dy/dx before you evaluate.
- **Treating a sketched value as exact.** Values read from a sketch are estimates. Use the tangent line, or later an exact solution, for numbers.
- **"Approaching" means "reaching".** In Worked example 1, y gets ever closer to 3 but never equals 3.
- **Confusing the family with one solution.** dy/dx = x/2 has infinitely many solutions; only one passes through a given point.

## Where this leads

Next, Topic 7.6 shows how to find general solutions exactly by separating the variables, and Topic 7.7 uses an initial condition to pick the particular solution. You will be able to check those answers against the slope fields from this topic. BC students also meet Euler's method (Topic 7.5), which builds an approximate solution by following the field in small straight steps.

Next topic: [Finding General Solutions Using Separation of Variables](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/). Previous topic: [Sketching Slope Fields](/advanced-course-resources/calculus-ab/7-3-sketching-slope-fields-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-checklist/) to consolidate.
