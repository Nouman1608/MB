---
resourceId: "mb-ap-calcbc-9.8-study-guide"
title: "Area of a Polar Region or the Area Bounded by a Single Polar Curve: Study Guide (Calculus BC 9.8)"
description: "Build the polar area formula ½∫r² dθ from thin sectors, choose limits that trace a region exactly once, and find areas of petals, loops and regions between two rays."
course: "calculus-bc"
unit: 9
topics: ["9.8"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Polar coordinates and polar curves r = f(θ) (Topic 9.7)"
  - "Riemann sums and the definite integral as a limit (Topics 6.2 to 6.4)"
  - "Area of a circular sector, ½r²θ, with θ in radians"
  - "Power-reducing identities: sin²θ = ½(1 − cos 2θ) and cos²θ = ½(1 + cos 2θ)"
prerequisiteResources: ["mb-ap-calcbc-9.7-study-guide"]
learningObjectives:
  - "Explain why the area of a polar region is ½ ∫ r² dθ, using sectors and a Riemann sum"
  - "Find the area of a region bounded by a polar curve and two rays"
  - "Choose limits of integration that trace a loop, petal or closed curve exactly once, using zeros of r, symmetry and a sketch"
  - "Evaluate polar area integrals exactly with power-reducing identities, or with a calculator"
  - "Interpret ½ r² as the rate at which area is swept out as θ increases"
skills: ["1", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "mixed"
calculatorNote: "Exact areas by hand using power-reducing identities. On calculator questions, use radian mode, write the integral first, and give decimals to 3 decimal places."
related: ["mb-ap-calcbc-9.8-revision-notes", "mb-ap-calcbc-9.8-practice", "mb-ap-calcbc-9.8-checklist"]
next: "mb-ap-calcbc-9.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "The region swept out by r = f(θ) from θ = α to θ = β has area ½ ∫ from α to β of r² dθ."
  - "The formula comes from thin sectors, each of area about ½ r² Δθ, not from thin rectangles."
  - "Choose α and β so that the region is traced exactly once. Zeros of r often mark the ends of a petal or loop."
  - "Square r before integrating, and use sin²θ = ½(1 − cos 2θ) or cos²θ = ½(1 + cos 2θ) to integrate by hand."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Polar area is BC-only content. AB students can skip this page."
  - question: "What if r is negative on part of the interval?"
    answer: "The formula uses r², which is never negative, so it still gives the area that is swept out. But the points with negative r are on the opposite side of the pole, so use a sketch to make sure the region you are measuring is the one you want."
  - question: "Why can't I just integrate from 0 to 2π every time?"
    answer: "Because many curves are traced more than once, or have loops inside loops, on 0 ≤ θ ≤ 2π. The circle r = 6 cos θ is traced twice, so 0 to 2π doubles its area."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Polar area is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need polar curves from [Topic 9.7](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/) and the idea of an integral as a limit of sums. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Polar coordinates and curves | 9.7 | Reading and sketching the region |
| Riemann sums and definite integrals | 6.2–6.4 | Turning a sum of sectors into an integral |
| Sector area ½r²θ (radians) | Geometry | The building block of the formula |
| Power-reducing identities | Precalculus | Integrating sin²(kθ) and cos²(kθ) by hand |

Notation on this page: "½ ∫ from α to β of r² dθ" is a definite integral with lower limit α and upper limit β. Angles are in radians.

## Why rectangles do not fit

For y = f(x), you found areas by slicing into thin vertical rectangles, each of area f(x) Δx. A polar region is different. Its natural boundaries are **rays from the pole** and a curve r = f(θ). Thin rectangles do not line up with rays. Thin **sectors** do, like slices of a pizza.

**A sector of a circle.** A sector with radius r and angle θ (in radians) is the fraction θ/(2π) of a full disc, so its area is

> **(θ / 2π) × πr² = ½ r² θ**

For example, a sector with radius 4 and angle π/6 has area ½ × 16 × π/6 = 4π/3.

## Building the formula from thin sectors

Take the region bounded by the curve r = f(θ) and the rays θ = α and θ = β, where f is continuous and the region is swept out once as θ goes from α to β.

1. Split [α, β] into n small angles, each Δθ wide.
2. On each small angle, the curve is close to a circular arc with radius r = f(θₖ) for some θₖ in that piece. So that slice has area about **½ f(θₖ)² Δθ**.
3. Add the slices: area ≈ Σ ½ f(θₖ)² Δθ. This is a **Riemann sum** for the function ½ f(θ)².
4. Let n → ∞ (so Δθ → 0). The sum becomes a definite integral:

> **Area = ½ ∫ from α to β of r² dθ = ½ ∫ from α to β of [f(θ)]² dθ**

This is the same idea you used for rectangular areas: approximate with simple shapes, add, take the limit. Only the shape of the slice has changed.

<figure>
<svg viewBox="0 0 540 470" role="img" aria-labelledby="pol98-title pol98-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pol98-title">Approximating a polar area with thin sectors: r = 2 + cos θ in the first quadrant</title>
<desc id="pol98-desc">The closed curve r = 2 + cos θ, which crosses the x-axis at (3, 0) and (−1, 0) and the y-axis at (0, 2) and (0, −2). The part of the region inside the curve in the first quadrant, between the rays θ = 0 and θ = π/2, is shaded with diagonal hatching. It is covered by six thin circular sectors from the pole, each with angle π/12, drawn with solid outlines. One sector is labelled with its angle Δθ and its radius r. A note says that the six sectors have total area about 5.540, close to the exact area 2 + 9π/8, about 5.534.</desc>
<defs><pattern id="hatch98" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="0.8"/></pattern></defs>
<rect x="0" y="0" width="540" height="470" fill="#ffffff"/>
<path d="M170.0 240.0 L410.0 240.0 L409.9 233.7 L409.6 227.4 L409.0 221.2 L408.2 215.0 L407.3 208.8 L406.1 202.6 L404.7 196.5 L403.0 190.5 L401.2 184.5 L399.2 178.6 L397.0 172.8 L394.5 167.0 L391.9 161.4 L389.1 155.9 L386.1 150.5 L382.9 145.2 L379.6 140.0 L376.1 135.0 L372.4 130.1 L368.6 125.4 L364.6 120.8 L360.5 116.3 L356.2 112.0 L351.8 107.9 L347.3 104.0 L342.7 100.2 L337.9 96.6 L333.1 93.2 L328.2 89.9 L323.1 86.9 L318.0 84.0 L312.9 81.3 L307.7 78.8 L302.4 76.5 L297.0 74.4 L291.7 72.5 L286.3 70.8 L280.9 69.3 L275.4 67.9 L270.0 66.8 L264.6 65.8 L259.1 65.1 L253.7 64.5 L248.3 64.1 L242.9 63.9 L237.6 63.9 L232.3 64.0 L227.1 64.3 L221.9 64.8 L216.8 65.5 L211.7 66.3 L206.7 67.2 L201.8 68.3 L197.0 69.6 L192.2 71.0 L187.6 72.6 L183.0 74.2 L178.6 76.0 L174.2 78.0 L170.0 80.0 Z" fill="url(#hatch98)" stroke="none"/>
<line x1="40" y1="240" x2="460" y2="240" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="170" y1="460" x2="170" y2="15" stroke="#1d2b44" stroke-width="1.2"/>
<text x="84" y="256" font-size="11" fill="#1d2b44" text-anchor="end">−1</text>
<text x="250" y="256" font-size="11" fill="#1d2b44" text-anchor="middle">1</text>
<text x="330" y="256" font-size="11" fill="#1d2b44" text-anchor="middle">2</text>
<text x="416" y="256" font-size="11" fill="#1d2b44" text-anchor="start">3</text>
<text x="163" y="404" font-size="11" fill="#1d2b44" text-anchor="end">−2</text>
<text x="163" y="324" font-size="11" fill="#1d2b44" text-anchor="end">−1</text>
<text x="163" y="164" font-size="11" fill="#1d2b44" text-anchor="end">1</text>
<text x="163" y="84" font-size="11" fill="#1d2b44" text-anchor="end">2</text>
<text x="455" y="234" font-size="12" fill="#1d2b44" text-anchor="end">x</text>
<text x="178" y="24" font-size="12" fill="#1d2b44">y</text>
<path d="M170 240 L409.3 240.0 A239.3 239.3 0 0 0 401.2 178.1 Z" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<path d="M170 240 L395.9 179.5 A233.9 233.9 0 0 0 372.6 123.0 Z" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<path d="M170 240 L363.5 128.3 A223.5 223.5 0 0 0 328.0 82.0 Z" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<path d="M170 240 L317.6 92.4 A208.7 208.7 0 0 0 274.4 59.3 Z" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<path d="M170 240 L265.3 74.9 A190.6 190.6 0 0 0 219.3 55.9 Z" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<path d="M170 240 L214.1 75.4 A170.4 170.4 0 0 0 170.0 69.6 Z" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="410.0,240.0 409.9,233.7 409.6,227.4 409.0,221.2 408.2,215.0 407.3,208.8 406.1,202.6 404.7,196.5 403.0,190.5 401.2,184.5 399.2,178.6 397.0,172.8 394.5,167.0 391.9,161.4 389.1,155.9 386.1,150.5 382.9,145.2 379.6,140.0 376.1,135.0 372.4,130.1 368.6,125.4 364.6,120.8 360.5,116.3 356.2,112.0 351.8,107.9 347.3,104.0 342.7,100.2 337.9,96.6 333.1,93.2 328.2,89.9 323.1,86.9 318.0,84.0 312.9,81.3 307.7,78.8 302.4,76.5 297.0,74.4 291.7,72.5 286.3,70.8 280.9,69.3 275.4,67.9 270.0,66.8 264.6,65.8 259.1,65.1 253.7,64.5 248.3,64.1 242.9,63.9 237.6,63.9 232.3,64.0 227.1,64.3 221.9,64.8 216.8,65.5 211.7,66.3 206.7,67.2 201.8,68.3 197.0,69.6 192.2,71.0 187.6,72.6 183.0,74.2 178.6,76.0 174.2,78.0 170.0,80.0 165.9,82.1 161.8,84.4 157.9,86.8 154.1,89.2 150.5,91.7 146.9,94.3 143.5,97.0 140.2,99.8 137.0,102.6 133.9,105.5 131.0,108.4 128.2,111.3 125.5,114.4 122.9,117.4 120.5,120.5 118.2,123.6 115.9,126.7 113.9,129.8 111.9,132.9 110.0,136.1 108.2,139.2 106.6,142.4 105.0,145.5 103.6,148.6 102.2,151.7 101.0,154.8 99.8,157.8 98.8,160.9 97.8,163.9 96.9,166.9 96.0,169.8 95.3,172.7 94.6,175.6 94.0,178.4 93.4,181.2 92.9,184.0 92.5,186.7 92.1,189.4 91.7,192.0 91.4,194.6 91.2,197.2 91.0,199.7 90.8,202.2 90.6,204.6 90.5,207.1 90.4,209.4 90.3,211.8 90.2,214.1 90.1,216.3 90.1,218.6 90.1,220.8 90.0,223.0 90.0,225.2 90.0,227.3 90.0,229.5 90.0,231.6 90.0,233.7 90.0,235.8 90.0,237.9 90.0,240.0 90.0,242.1 90.0,244.2 90.0,246.3 90.0,248.4 90.0,250.5 90.0,252.7 90.0,254.8 90.0,257.0 90.1,259.2 90.1,261.4 90.1,263.7 90.2,265.9 90.3,268.2 90.4,270.6 90.5,272.9 90.6,275.4 90.8,277.8 91.0,280.3 91.2,282.8 91.4,285.4 91.7,288.0 92.1,290.6 92.5,293.3 92.9,296.0 93.4,298.8 94.0,301.6 94.6,304.4 95.3,307.3 96.0,310.2 96.9,313.1 97.8,316.1 98.8,319.1 99.8,322.2 101.0,325.2 102.2,328.3 103.6,331.4 105.0,334.5 106.6,337.6 108.2,340.8 110.0,343.9 111.9,347.1 113.9,350.2 115.9,353.3 118.2,356.4 120.5,359.5 122.9,362.6 125.5,365.6 128.2,368.7 131.0,371.6 133.9,374.5 137.0,377.4 140.2,380.2 143.5,383.0 146.9,385.7 150.5,388.3 154.1,390.8 157.9,393.2 161.8,395.6 165.9,397.9 170.0,400.0 174.2,402.0 178.6,404.0 183.0,405.8 187.6,407.4 192.2,409.0 197.0,410.4 201.8,411.7 206.7,412.8 211.7,413.7 216.8,414.5 221.9,415.2 227.1,415.7 232.3,416.0 237.6,416.1 242.9,416.1 248.3,415.9 253.7,415.5 259.1,414.9 264.6,414.2 270.0,413.2 275.4,412.1 280.9,410.7 286.3,409.2 291.7,407.5 297.0,405.6 302.4,403.5 307.7,401.2 312.9,398.7 318.0,396.0 323.1,393.1 328.2,390.1 333.1,386.8 337.9,383.4 342.7,379.8 347.3,376.0 351.8,372.1 356.2,368.0 360.5,363.7 364.6,359.2 368.6,354.6 372.4,349.9 376.1,345.0 379.6,340.0 382.9,334.8 386.1,329.5 389.1,324.1 391.9,318.6 394.5,313.0 397.0,307.2 399.2,301.4 401.2,295.5 403.0,289.5 404.7,283.5 406.1,277.4 407.3,271.2 408.2,265.0 409.0,258.8 409.6,252.6 409.9,246.3 410.0,240.0"/>
<text x="252.5" y="180.7" font-size="12" fill="#1d2b44" text-anchor="middle">Δθ</text>
<line x1="347.3" y1="104.0" x2="407.3" y2="74.0" stroke="#1d2b44" stroke-width="1"/>
<text x="411.3" y="72.0" font-size="12" fill="#1d2b44">one sector: radius r,</text>
<text x="411.3" y="87.0" font-size="12" fill="#1d2b44">area ≈ ½ r² Δθ</text>
<rect x="330" y="300" width="200" height="56" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="430" y="320" font-size="12" fill="#1d2b44" text-anchor="middle">6 sectors: total ≈ 5.540</text>
<text x="430" y="342" font-size="12" fill="#1d2b44" text-anchor="middle">exact hatched area ≈ 5.534</text>
<text x="40" y="40" font-size="13" fill="#1d2b44">r = 2 + cos θ</text>
</svg>
<figcaption>Figure 1. The hatched region lies inside r = 2 + cos θ between the rays θ = 0 and θ = π/2. Six thin sectors, each of angle Δθ = π/12 and with r taken at the middle angle, have total area about 5.540. As Δθ → 0 the sum approaches the exact area, ½ ∫ from 0 to π/2 of r² dθ = 2 + 9π/8 ≈ 5.534.</figcaption>
</figure>

**Area as an accumulation.** If A(θ) is the area swept out from α up to angle θ, the Fundamental Theorem of Calculus gives **dA/dθ = ½ r²**. So ½ r² is the rate at which area is being swept out, in square units per radian.

## Choosing the limits: trace the region once

The integral is easy. The limits are where the marks are won or lost. Use three tools.

**1. Zeros of r mark the ends of petals and loops.** A petal or loop starts and ends at the pole, where r = 0. For the three-petal rose r = 2 cos 3θ, solve cos 3θ = 0: θ = ±π/6 are consecutive zeros, and r > 0 between them. So one petal is

½ ∫ from −π/6 to π/6 of 4 cos²3θ dθ = 2 ∫ from −π/6 to π/6 of ½(1 + cos 6θ) dθ = [θ + (1/6) sin 6θ] from −π/6 to π/6 = **π/3**.

All three petals together have area 3 × π/3 = π.

**2. Check how many times the curve is traced.** The rose r = 2 cos 3θ is traced completely for 0 ≤ θ ≤ π. Integrating from 0 to 2π gives 2π, which counts every petal twice. Likewise, the circle r = 6 cos θ is traced once for 0 ≤ θ ≤ π (area 9π, the area of a circle of radius 3) but twice for 0 ≤ θ ≤ 2π (giving 18π). A quick table of values, or the graph on a calculator, tells you when the curve starts repeating.

**3. Use symmetry, but carefully.** If the region is symmetric about the x-axis, you can integrate over the top half and double. Only do this when you are sure the two halves match; a sketch is the safest check.

**Negative r.** The formula squares r, so it measures swept area whatever the sign of r. But when r < 0, the points plotted are on the opposite side of the pole. Draw the region before choosing limits, so you measure the part you actually want.

## Worked example 1: a limaçon by hand

**Question.** The curve r = 2 + cos θ is shown in Figure 1. Without a calculator, find

(a) the area of the whole region enclosed by the curve;
(b) the area of the part of that region in the first quadrant.

**(a)** r = 2 + cos θ ≥ 1 > 0 for every θ, so the curve is a single loop traced once for 0 ≤ θ ≤ 2π.

1. Set up: Area = ½ ∫ from 0 to 2π of (2 + cos θ)² dθ.
2. Expand: (2 + cos θ)² = 4 + 4 cos θ + cos²θ.
3. Integrate each term over [0, 2π]:
   - ∫ 4 dθ = 8π
   - ∫ 4 cos θ dθ = 4[sin θ] = 0
   - ∫ cos²θ dθ = ∫ ½(1 + cos 2θ) dθ = [½θ + ¼ sin 2θ] = π
4. Area = ½(8π + 0 + π) = **9π/2 ≈ 14.137**.

*Check:* the curve stays between r = 1 and r = 3, so the area must be between π(1)² ≈ 3.14 and π(3)² ≈ 28.27. 14.137 fits.

**(b)** The first quadrant is the region between the rays θ = 0 and θ = π/2.

1. Area = ½ ∫ from 0 to π/2 of (4 + 4 cos θ + cos²θ) dθ.
2. ∫ from 0 to π/2 of 4 dθ = 2π. ∫ from 0 to π/2 of 4 cos θ dθ = 4[sin θ] from 0 to π/2 = 4. ∫ from 0 to π/2 of cos²θ dθ = [½θ + ¼ sin 2θ] from 0 to π/2 = π/4.
3. Area = ½(2π + 4 + π/4) = **2 + 9π/8 ≈ 5.534**.

*Check:* in the first quadrant 2 ≤ r ≤ 3, so the area lies between a quarter disc of radius 2 (π ≈ 3.14) and one of radius 3 (9π/4 ≈ 7.07). 5.534 fits, and it matches the six-sector estimate of about 5.540 in Figure 1.

*Why is (b) more than a quarter of (a)?* A quarter of 9π/2 is about 3.534. The curve bulges to the right (r is largest at θ = 0), so the right-hand half holds more of the area.

## Worked example 2: a lawn sprinkler, with a calculator

**Context.** A fictional rotating lawn sprinkler sits at the pole. As it turns from θ = 0 to θ = π, it throws water a distance r = 4 + cos 3θ metres. The watered region is bounded by this curve and the x-axis.

**(a) Find the watered area.**
r ranges from 3 to 5, so r > 0 and the region is swept out once on [0, π].
Area = ½ ∫ from 0 to π of (4 + cos 3θ)² dθ = ½ ∫ from 0 to π of (16 + 8 cos 3θ + cos²3θ) dθ.
By hand: ∫ 16 dθ = 16π; ∫ 8 cos 3θ dθ = (8/3)[sin 3θ] from 0 to π = 0; ∫ cos²3θ dθ = π/2.
Area = ½(16π + π/2) = **33π/4 ≈ 25.918 m²**. A calculator's numerical integral agrees.

*Check:* the area is between half-discs of radius 3 (about 14.137) and 5 (about 39.270). ✓

**(b) At what rate is area being watered, per radian of turning, when θ = π/3?**
dA/dθ = ½ r². At θ = π/3, r = 4 + cos π = 3, so dA/dθ = ½ × 9 = **4.5 m² per radian**.

**(c) The sprinkler is switched off once it has watered 10 m². At what angle does this happen?**
Solve ½ ∫ from 0 to k of (4 + cos 3θ)² dθ = 10 on a calculator (for example, graph the integral as a function of k, or use a solver). This gives **k ≈ 1.328 radians**.
*Sense check:* at the start r = 5, so area builds at ½ × 25 = 12.5 m² per radian; slower later as r falls towards 3. Reaching 10 m² in a little over 1.3 radians is reasonable.

**Write-up tip.** On a calculator question, write the integral with its limits before giving the number. The setup is a mark on its own.

## Common misconceptions

- **"Area = ∫ r dθ."** You must square r and multiply by ½. ∫ r dθ is not an area of anything useful here.
- **Forgetting the ½.** The sector area is ½ r² θ, not r² θ.
- **Squaring incorrectly.** (2 + cos θ)² is 4 + 4 cos θ + cos²θ, not 4 + cos²θ.
- **Integrating 0 to 2π by habit.** Many curves repeat. Find the interval that traces the region once.
- **Using the wrong zeros of r for a petal.** Use consecutive zeros with the petal between them, and check the sign of r in between.
- **Ignoring where negative r puts the points.** The formula still gives a positive area, but possibly of a part of the curve you did not intend.
- **Integrating sin²θ as −cos³θ/3 or similar.** Use the power-reducing identity first.
- **Degree mode** on the calculator. Every formula here assumes radians.

## Where this leads

Next, Topic 9.9 finds the area of a region between two polar curves: the area inside one curve and outside another is ½ ∫ (R² − r²) dθ, where R is the outer curve and the limits come from where the curves meet. Continue with [Topic 9.9, Finding the Area of the Region Bounded by Two Polar Curves](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-checklist/) to consolidate.
