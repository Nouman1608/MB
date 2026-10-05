---
resourceId: "mb-ap-phys2-14.8-study-guide"
title: "Double-Slit Interference and Diffraction Gratings: Study Guide (Physics 2 14.8)"
description: "Young's double slit from first principles: path difference d sin θ, bright and dark fringes, fringes inside the single-slit envelope, diffraction gratings and white-light spectra."
course: "physics-2"
unit: 14
topics: ["14.8"]
resourceType: "study-guide"
prerequisites:
  - "Single-slit diffraction, a sin θ = mλ and y_min = mλL/a (Topic 14.7)"
  - "Superposition and constructive and destructive interference (Topic 14.6)"
  - "The order of colours in the visible spectrum (Topic 14.4)"
prerequisiteResources: ["mb-ap-phys2-14.7-study-guide"]
learningObjectives:
  - "Explain the double-slit pattern as interference of light that has diffracted through each slit"
  - "Use the path difference d sin θ to decide where bright and dark fringes form"
  - "Use d sin θ = mλ, and y_max = mλL/d for small angles, to find positions, spacings, wavelengths or slit separations"
  - "Describe and sketch double-slit fringes inside a single-slit diffraction envelope"
  - "Explain why Young's double-slit result is evidence that light behaves as a wave"
  - "Describe the pattern from a diffraction grating, including the white central maximum and the order of colours in each spectrum"
  - "Plan a measurement of slit separation or wavelength and analyse it with a straight-line graph"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "1 nm = 10⁻⁹ m, 1 mm = 10⁻³ m. For a grating with N lines per millimetre, d = (1/N) mm. Use the small-angle form only when θ is under about 10°. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.8-revision-notes", "mb-ap-phys2-14.8-practice", "mb-ap-phys2-14.8-checklist"]
next: "mb-ap-phys2-14.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Two slits a distance d apart give a path difference of d sin θ between their waves."
  - "Bright fringes: d sin θ = mλ (m = 0, ±1, ±2, …). Dark fringes: path difference = half-odd numbers of λ."
  - "For small angles the bright fringes are evenly spaced: y_max = mλL/d, so the spacing is λL/d."
  - "Real slits have width, so the double-slit fringes sit inside the single-slit diffraction envelope."
  - "A grating (many evenly spaced slits) gives the same maxima as d sin θ = mλ, but much sharper and brighter. With white light the centre is white and red is farthest out in each order."
faqs:
  - question: "Why does the double-slit equation look the same as the single-slit one?"
    answer: "Both have the form (width) × sin θ = mλ, but they mean opposite things. With d, the separation of two slits, it gives BRIGHT fringes. With a, the width of one slit, it gives DARK fringes. Check which length you have and which pattern you want."
  - question: "Why does a grating send red light further out, when a prism bends violet light most?"
    answer: "They work by different physics. A grating spreads colours by interference, and sin θ = mλ/d grows with wavelength, so red goes furthest. A prism spreads colours by refraction, and glass slows violet light most, so violet bends most."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two slits, one light source

Shine a laser at a card with **two** narrow slits close together. On a far screen you do not see two bright lines, one behind each slit. You see a row of evenly spaced bright and dark bands, called **fringes**.

This is the double-slit experiment, named after Thomas Young, who studied the interference of light in the early 1800s. Its result is strong evidence that light behaves as a **wave**:

- Particles going through two openings would just pile up behind each opening. Two streams of particles cannot add up to *nothing*.
- Waves can cancel. At a dark fringe, light from one slit plus light from the other gives darkness. That only makes sense if the light from each slit is a wave that can arrive crest-on-trough with the other.

Two things combine to make the pattern:

1. **Diffraction.** Each slit is narrow, so light spreads out from it (Topic 14.7). Without this spreading, the light from the two slits would never overlap on the screen.
2. **Interference.** Where the waves from the two slits overlap, they add (superposition, Topic 14.6). The same wavefront reaches both slits, so the two slits send out waves that start **in step**.

## Path difference decides bright or dark

Take a point on the screen at angle θ from the straight-through direction. The slits are a distance **d** apart (centre to centre), and the screen is far away (L much larger than d), so the two paths are nearly parallel. Figure 1 shows that the wave from the lower slit travels further by

**ΔL = d sin θ**

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="ds-title ds-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ds-title">Path length difference between two slits</title>
<desc id="ds-desc">A barrier with two narrow slits, S1 above and S2 below, a distance d apart. A dashed horizontal line from the midpoint between the slits marks the normal. Two parallel rays leave S1 and S2 heading up and to the right at angle theta to the normal, towards the same distant point on a screen. A thin line from S1 meets the ray from S2 at a right angle. The extra length of the S2 ray before that point is shaded and labelled d sine theta, the path length difference.</desc>
<defs><marker id="ds-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="6"><line x1="150" y1="20" x2="150" y2="134"/><line x1="150" y1="146" x2="150" y2="214"/><line x1="150" y1="226" x2="150" y2="275"/></g>
<line x1="150" y1="180" x2="470" y2="180" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<text x="476" y="184" font-size="12" fill="#1d2b44">normal</text>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="150" y1="140" x2="431.9" y2="37.4" marker-end="url(#ds-arr)"/>
<line x1="150" y1="220" x2="450.7" y2="110.6" marker-end="url(#ds-arr)"/>
</g>
<line x1="150" y1="140" x2="175.7" y2="210.6" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="150" y1="220" x2="175.7" y2="210.6" stroke="#1d2b44" stroke-width="5" stroke-opacity="0.45"/>
<path d="M170.1 212.7 L168.0 207.1 L173.7 205.0" fill="none" stroke="#1d2b44" stroke-width="1"/>
<path d="M220 180 A70 70 0 0 0 215.8 156.1" fill="none" stroke="#1d2b44" stroke-width="1"/>
<g font-size="13" fill="#1d2b44">
<text x="226" y="172">θ</text>
<text x="160" y="134">S₁</text><text x="160" y="240">S₂</text>
<line x1="128" y1="140" x2="128" y2="220" stroke="#1d2b44" stroke-width="1"/>
<line x1="123" y1="140" x2="133" y2="140" stroke="#1d2b44"/><line x1="123" y1="220" x2="133" y2="220" stroke="#1d2b44"/>
<text x="112" y="185">d</text>
<text x="170" y="262" font-size="12">ΔL = d sin θ</text>
<text x="300" y="250" font-size="12">both rays head to the same</text>
<text x="300" y="266" font-size="12">far-away point on the screen</text>
<text x="20" y="60" font-size="12">light from</text><text x="20" y="76" font-size="12">the laser →</text>
</g>
</svg>
<figcaption>Figure 1. Waves leaving slits S₁ and S₂ (separation d) at angle θ (angle exaggerated). The thin line from S₁ meets the S₂ ray at a right angle, so the S₂ wave travels an extra d sin θ (thick shaded segment) to reach the same distant point.</figcaption>
</figure>

- **Bright fringe (constructive):** the path difference is a whole number of wavelengths, so the waves arrive crest-on-crest.
  **d sin θ = mλ, with m = 0, ±1, ±2, …**
- **Dark fringe (destructive):** the path difference is a half-odd number of wavelengths (λ/2, 3λ/2, 5λ/2, …), so the waves arrive crest-on-trough.
  **d sin θ = (m + ½)λ, with m = 0, 1, 2, …** on each side

The whole number m is the **order** of the bright fringe. The central bright fringe (θ = 0, equal paths) is m = 0. The first bright fringe on either side is m = ±1, where one wave has travelled exactly one wavelength further.

### The small-angle form

A fringe a distance y from the centre of the screen has tan θ = y/L. For angles under about 10°, sin θ ≈ tan θ, so d(y/L) = mλ and the distance from the middle of the central bright fringe to the m-th bright fringe is

**y_max = mλL/d**

- Neighbouring bright fringes are **λL/d apart**. If you think only about the interference of two waves, the bright fringes are **evenly spaced**, and the dark fringes are exactly halfway between them.
- The fringes spread out when λ or L increases, or when the slits are moved **closer together** (smaller d).

## Fringes inside a diffraction envelope

The simple rule says every bright fringe is equally bright. A real pattern is not like that, because each slit has a width a. Each slit on its own makes the single-slit pattern of Topic 14.7: a wide central band, with dark minima at a sin θ = mλ. The two-slit fringes can only be as bright as this single-slit pattern allows.

So a real double-slit pattern is **interference fringes sitting inside a single-slit diffraction envelope**:

- The fringe **spacing** is set by d (λL/d).
- The **envelope** is set by a (its central band is 2λL/a wide).
- Because d is larger than a, the fringes are much closer together than the envelope's minima. Many fringes fit inside the central band of the envelope.
- Where a minimum of the envelope lands exactly on a bright-fringe position, that fringe is **missing**: one slit alone sends no light there, so there is nothing to interfere.

<figure>
<svg viewBox="0 0 580 400" role="img" aria-labelledby="env-title env-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="env-title">Double-slit fringes inside a single-slit envelope</title>
<desc id="env-desc">Graph of brightness against position on the screen, in units of the fringe spacing lambda L over d, from minus 7.5 to plus 7.5. A dashed curve, the single-slit envelope, has a broad central hump that falls to zero at plus and minus 5, with small humps beyond. A solid curve shows narrow, evenly spaced fringes, one at every whole number, whose peaks touch the dashed envelope. The fringes at 0, plus and minus 1, 2, 3 and 4 lie in the central hump and get dimmer away from the centre. The fringes at plus and minus 5 are missing, because the envelope is zero there. Faint fringes at plus and minus 6 and 7 lie in the first side hump.</desc>
<polyline points="65.0,311.0 67.5,310.8 70.0,310.7 72.5,310.6 75.0,310.6 77.5,310.6 80.0,310.6 82.5,310.8 85.0,310.9 87.5,311.2 90.0,311.5 92.5,311.8 95.0,312.2 97.5,312.6 100.0,313.0 102.5,313.5 105.0,314.0 107.5,314.6 110.0,315.1 112.5,315.7 115.0,316.3 117.5,316.8 120.0,317.4 122.5,317.9 125.0,318.4 127.5,318.8 130.0,319.2 132.5,319.6 135.0,319.8 137.5,319.9 140.0,320.0 142.5,319.9 145.0,319.8 147.5,319.5 150.0,319.0 152.5,318.4 155.0,317.6 157.5,316.7 160.0,315.5 162.5,314.2 165.0,312.7 167.5,311.0 170.0,309.1 172.5,306.9 175.0,304.6 177.5,302.0 180.0,299.2 182.5,296.2 185.0,292.9 187.5,289.5 190.0,285.8 192.5,281.9 195.0,277.8 197.5,273.6 200.0,269.1 202.5,264.4 205.0,259.6 207.5,254.7 210.0,249.5 212.5,244.3 215.0,238.9 217.5,233.5 220.0,228.0 222.5,222.4 225.0,216.7 227.5,211.1 230.0,205.4 232.5,199.8 235.0,194.2 237.5,188.7 240.0,183.2 242.5,177.9 245.0,172.6 247.5,167.5 250.0,162.6 252.5,157.9 255.0,153.4 257.5,149.0 260.0,145.0 262.5,141.2 265.0,137.6 267.5,134.4 270.0,131.4 272.5,128.8 275.0,126.5 277.5,124.5 280.0,122.9 282.5,121.6 285.0,120.7 287.5,120.2 290.0,120.0 292.5,120.2 295.0,120.7 297.5,121.6 300.0,122.9 302.5,124.5 305.0,126.5 307.5,128.8 310.0,131.4 312.5,134.4 315.0,137.6 317.5,141.2 320.0,145.0 322.5,149.0 325.0,153.4 327.5,157.9 330.0,162.6 332.5,167.5 335.0,172.6 337.5,177.9 340.0,183.2 342.5,188.7 345.0,194.2 347.5,199.8 350.0,205.4 352.5,211.1 355.0,216.7 357.5,222.4 360.0,228.0 362.5,233.5 365.0,238.9 367.5,244.3 370.0,249.5 372.5,254.7 375.0,259.6 377.5,264.4 380.0,269.1 382.5,273.6 385.0,277.8 387.5,281.9 390.0,285.8 392.5,289.5 395.0,292.9 397.5,296.2 400.0,299.2 402.5,302.0 405.0,304.6 407.5,306.9 410.0,309.1 412.5,311.0 415.0,312.7 417.5,314.2 420.0,315.5 422.5,316.7 425.0,317.6 427.5,318.4 430.0,319.0 432.5,319.5 435.0,319.8 437.5,319.9 440.0,320.0 442.5,319.9 445.0,319.8 447.5,319.6 450.0,319.2 452.5,318.8 455.0,318.4 457.5,317.9 460.0,317.4 462.5,316.8 465.0,316.3 467.5,315.7 470.0,315.1 472.5,314.6 475.0,314.0 477.5,313.5 480.0,313.0 482.5,312.6 485.0,312.2 487.5,311.8 490.0,311.5 492.5,311.2 495.0,310.9 497.5,310.8 500.0,310.6 502.5,310.6 505.0,310.6 507.5,310.6 510.0,310.7 512.5,310.8 515.0,311.0" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<polyline points="65.0,320.0 67.5,319.4 70.0,317.7 72.5,315.3 75.0,312.9 77.5,311.2 80.0,310.6 82.5,311.4 85.0,313.2 87.5,315.6 90.0,317.9 92.5,319.4 95.0,320.0 97.5,319.5 100.0,318.3 102.5,316.8 105.0,315.5 107.5,314.9 110.0,315.1 112.5,316.0 115.0,317.2 117.5,318.4 120.0,319.3 122.5,319.9 125.0,320.0 127.5,319.9 130.0,319.8 132.5,319.8 135.0,319.8 137.5,319.9 140.0,320.0 142.5,319.9 145.0,319.8 147.5,319.7 150.0,319.7 152.5,319.9 155.0,320.0 157.5,319.8 160.0,318.9 162.5,317.1 165.0,314.5 167.5,311.6 170.0,309.1 172.5,307.8 175.0,308.4 177.5,311.0 180.0,314.8 182.5,318.4 185.0,320.0 187.5,318.0 190.0,311.5 192.5,301.0 195.0,288.4 197.5,276.7 200.0,269.1 202.5,268.2 205.0,274.7 207.5,287.3 210.0,302.4 212.5,314.9 215.0,320.0 217.5,314.2 220.0,297.0 222.5,271.2 225.0,242.6 227.5,218.4 230.0,205.4 232.5,207.9 235.0,225.7 237.5,254.3 240.0,285.8 242.5,310.5 245.0,320.0 247.5,309.8 250.0,280.7 252.5,238.9 255.0,195.0 257.5,160.5 260.0,145.0 262.5,153.1 265.0,183.2 267.5,227.2 270.0,272.9 272.5,307.2 275.0,320.0 277.5,306.9 280.0,270.7 282.5,220.8 285.0,170.5 287.5,133.6 290.0,120.0 292.5,133.6 295.0,170.5 297.5,220.8 300.0,270.7 302.5,306.9 305.0,320.0 307.5,307.2 310.0,272.9 312.5,227.2 315.0,183.2 317.5,153.1 320.0,145.0 322.5,160.5 325.0,195.0 327.5,238.9 330.0,280.7 332.5,309.8 335.0,320.0 337.5,310.5 340.0,285.8 342.5,254.3 345.0,225.7 347.5,207.9 350.0,205.4 352.5,218.4 355.0,242.6 357.5,271.2 360.0,297.0 362.5,314.2 365.0,320.0 367.5,314.9 370.0,302.4 372.5,287.3 375.0,274.7 377.5,268.2 380.0,269.1 382.5,276.7 385.0,288.4 387.5,301.0 390.0,311.5 392.5,318.0 395.0,320.0 397.5,318.4 400.0,314.8 402.5,311.0 405.0,308.4 407.5,307.8 410.0,309.1 412.5,311.6 415.0,314.5 417.5,317.1 420.0,318.9 422.5,319.8 425.0,320.0 427.5,319.9 430.0,319.7 432.5,319.7 435.0,319.8 437.5,319.9 440.0,320.0 442.5,319.9 445.0,319.8 447.5,319.8 450.0,319.8 452.5,319.9 455.0,320.0 457.5,319.9 460.0,319.3 462.5,318.4 465.0,317.2 467.5,316.0 470.0,315.1 472.5,314.9 475.0,315.5 477.5,316.8 480.0,318.3 482.5,319.5 485.0,320.0 487.5,319.4 490.0,317.9 492.5,315.6 495.0,313.2 497.5,311.4 500.0,310.6 502.5,311.2 505.0,312.9 507.5,315.3 510.0,317.7 512.5,319.4 515.0,320.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="55" y1="320" x2="530" y2="320" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="140" y1="320" x2="140" y2="326" stroke="#1d2b44"/><text x="140" y="340">−5</text>
<line x1="230" y1="320" x2="230" y2="326" stroke="#1d2b44"/><text x="230" y="340">−2</text>
<line x1="260" y1="320" x2="260" y2="326" stroke="#1d2b44"/><text x="260" y="340">−1</text>
<line x1="290" y1="320" x2="290" y2="326" stroke="#1d2b44"/><text x="290" y="340">0</text>
<line x1="320" y1="320" x2="320" y2="326" stroke="#1d2b44"/><text x="320" y="340">1</text>
<line x1="350" y1="320" x2="350" y2="326" stroke="#1d2b44"/><text x="350" y="340">2</text>
<line x1="440" y1="320" x2="440" y2="326" stroke="#1d2b44"/><text x="440" y="340">5</text>
<text x="290" y="365">Position on screen y (in units of λL/d)</text>
<text x="440" y="300">missing fringe</text><text x="140" y="300">missing fringe</text>
<text x="440" y="100">dashed: single-slit envelope</text>
<text x="440" y="116">solid: double-slit fringes</text>
</g>
<text x="24" y="230" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 230)">Brightness</text>
</svg>
<figcaption>Figure 2. Double-slit pattern for slits with d = 5a. The solid curve shows the fringes, one at every whole number of fringe spacings. The dashed curve is the single-slit envelope, whose first zeros are at ±5 fringe spacings, so the fifth-order fringes are missing and nine bright fringes fit inside the central band.</figcaption>
</figure>

If you cover one of the two slits, the fringes disappear. What remains is the single-slit envelope on its own, less bright, because only one slit sends light.

## Diffraction gratings

A **diffraction grating** is a large number of evenly spaced, parallel slits (or lines). Gratings are usually described by lines per millimetre. A grating with N lines per millimetre has slit spacing d = (1/N) mm. For example, 500 lines/mm gives d = 0.002 mm = 2.00 × 10⁻⁶ m.

The bright maxima are at the **same angles** as for two slits with the same d:

**d sin θ = mλ**

But they look very different:

- For a bright maximum, the wave from **every** slit must be in step with every other one. That only happens at angles very close to d sin θ = mλ. A tiny step away from that angle and the waves from hundreds of slits cancel each other almost completely.
- So a grating gives **narrow, very bright** maxima separated by wide dark regions. This makes the positions easy to measure accurately, which is why gratings are used to measure wavelengths.
- Because d is so small, the angles are **large**. Do not use the small-angle form for a grating. Use d sin θ = mλ and, if you need positions on a screen, y = L tan θ.
- sin θ cannot exceed 1, so the highest order you can see is the largest whole number m with m ≤ d/λ.

## White light and a grating

Send **white light** (all visible wavelengths) at a grating.

- At θ = 0 (m = 0) every wavelength has zero path difference, so every colour is bright there. The **central maximum is white**.
- In each higher order, sin θ = mλ/d, so a longer wavelength goes to a larger angle. Each order is spread into a **spectrum**: violet closest to the centre, **red farthest** from it.
- Higher orders are spread over a wider range of angles, and they can overlap: the start of one order can fall inside the previous one. Figure 3 shows this for the grating in Worked example 2.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="gr-title gr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gr-title">Angles of white-light spectra from a 600 lines per millimetre grating</title>
<desc id="gr-desc">Horizontal axis: angle from the central maximum, 0 to 90 degrees. Four rows of bars show where each order appears, with V marking the violet end at 400 nanometres and R marking the red end at 700 nanometres. Order 0: a single white line at 0 degrees. Order 1: a bar from 13.9 degrees (V) to 24.8 degrees (R). Order 2: a bar from 28.7 degrees (V) to 57.1 degrees (R). Order 3: a bar from 46.1 degrees (V) running to 90 degrees, where it stops at about 556 nanometres, so the red end is not produced; it overlaps the red end of order 2. Order 4: a short bar from 73.7 degrees (V) to 90 degrees.</desc>
<line x1="70" y1="250" x2="520" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="70" y1="250" x2="70" y2="256" stroke="#1d2b44"/><text x="70" y="270">0°</text>
<line x1="145" y1="250" x2="145" y2="256" stroke="#1d2b44"/><text x="145" y="270">15°</text>
<line x1="220" y1="250" x2="220" y2="256" stroke="#1d2b44"/><text x="220" y="270">30°</text>
<line x1="295" y1="250" x2="295" y2="256" stroke="#1d2b44"/><text x="295" y="270">45°</text>
<line x1="370" y1="250" x2="370" y2="256" stroke="#1d2b44"/><text x="370" y="270">60°</text>
<line x1="445" y1="250" x2="445" y2="256" stroke="#1d2b44"/><text x="445" y="270">75°</text>
<line x1="520" y1="250" x2="520" y2="256" stroke="#1d2b44"/><text x="520" y="270">90°</text>
<text x="295" y="292">Angle θ from the central maximum</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="10" y="44">m = 0</text><text x="10" y="94">m = 1</text><text x="10" y="144">m = 2</text><text x="10" y="194">m = 3</text><text x="10" y="236">m = 4</text>
</g>
<rect x="68" y="30" width="5" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<text x="80" y="45" font-size="12" fill="#1d2b44">white (all colours together)</text>
<rect x="139.4" y="80" width="54.8" height="20" fill="#a9b1bf" stroke="#1d2b44"/>
<rect x="213.4" y="130" width="142.3" height="20" fill="#a9b1bf" stroke="#1d2b44"/>
<rect x="300.3" y="180" width="219.7" height="20" fill="#a9b1bf" stroke="#1d2b44"/>
<rect x="438.7" y="222" width="81.3" height="20" fill="#a9b1bf" stroke="#1d2b44"/>
<g font-size="12" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="139.4" y="75">V</text><text x="194.2" y="75">R</text>
<text x="213.4" y="125">V</text><text x="355.7" y="125">R</text>
<text x="300.3" y="175">V</text><text x="438.7" y="217">V</text>
</g>
<text x="470" y="175" font-size="11" fill="#1d2b44" text-anchor="middle">stops at 556 nm</text>
<line x1="300.3" y1="152" x2="355.7" y2="152" stroke="#1d2b44" stroke-width="1"/>
<text x="328" y="165" font-size="11" fill="#1d2b44" text-anchor="middle">overlap</text>
</svg>
<figcaption>Figure 3. Where each order of white light (400–700 nm) appears for a grating with 600 lines/mm. V marks the violet (400 nm) end and R the red (700 nm) end of each spectrum. The central maximum is white. The first and second orders are separate, but the third order starts (46.1°) before the second order ends (57.1°), so they overlap. Red light reaches only the first two orders.</figcaption>
</figure>

## Planning a measurement

To find an unknown slit separation (or a wavelength), you can:

1. Fix the slits and a screen a measured distance L away, and shine a laser of known wavelength through the slits.
2. Measure across several fringes, for example from the m = −3 bright fringe to the m = +3 one, and divide by 6 to get the spacing. One spacing alone is too small to measure precisely.
3. Repeat for several values of L.
4. Plot fringe spacing against L. The graph should be a straight line through the origin with gradient λ/d. Then d = λ ÷ gradient.

For a grating, measure the distance between the two first-order spots, halve it to get y, find θ from tan θ = y/L, and use d sin θ = mλ.

## Worked example 1: a double slit with an envelope

**Question.** Light of wavelength 560 nm falls on two slits 0.250 mm apart (centre to centre). Each slit is 0.050 mm wide. The screen is 3.00 m away. Find (a) the fringe spacing, (b) the positions of the third bright fringe and of the first dark fringe, (c) the path difference at the third bright fringe, and (d) how many bright fringes lie inside the central band of the diffraction envelope.

1. Convert: λ = 5.60 × 10⁻⁷ m, d = 2.50 × 10⁻⁴ m, a = 5.0 × 10⁻⁵ m.
2. (a) Spacing = λL/d = (5.60 × 10⁻⁷ m)(3.00 m) ÷ (2.50 × 10⁻⁴ m) = 6.72 × 10⁻³ m = **6.72 mm**.
3. (b) Third bright fringe: y = 3 × 6.72 mm = **20.2 mm** (20.16 mm). Its angle: sin θ = 3λ/d = 6.72 × 10⁻³, θ = 0.385°, so the small-angle form is fine. The first dark fringe is halfway between m = 0 and m = 1: y = ½ × 6.72 mm = **3.36 mm**.
4. (c) At the third bright fringe, ΔL = d sin θ = 3λ = **1.68 × 10⁻⁶ m**.
5. (d) The envelope's first minimum is at y = λL/a = (5.60 × 10⁻⁷)(3.00) ÷ (5.0 × 10⁻⁵) = 33.6 mm. That is 33.6 ÷ 6.72 = 5 fringe spacings, so the m = ±5 fringes are missing. Inside the central band: m = 0, ±1, ±2, ±3, ±4, which is **9 bright fringes**.

**Check.** d/a = 0.250 ÷ 0.050 = 5, which gives the same answer for (d) without any lengths on the screen. This is the pattern in Figure 2.

## Worked example 2: white light on a grating

**Question.** White light containing wavelengths from 400 nm to 700 nm falls on a grating with 600 lines/mm. (a) Find the angles at which the first-order spectrum starts and ends. (b) Do the second and third orders overlap? (c) What is the highest order in which red light (700 nm) appears?

1. d = (1/600) mm = 1.667 × 10⁻⁶ m.
2. (a) Violet: sin θ = (400 × 10⁻⁹) ÷ (1.667 × 10⁻⁶) = 0.240, θ = **13.9°**. Red: sin θ = 0.420, θ = **24.8°**. The spectrum runs from 13.9° (violet) to 24.8° (red).
3. (b) Second-order red: sin θ = 2 × 0.420 = 0.840, θ = 57.1°. Third-order violet: sin θ = 3 × 0.240 = 0.720, θ = 46.1°. The third order starts at 46.1°, before the second ends at 57.1°, so **yes, they overlap**.
4. (c) The largest m with m ≤ d/λ: d/λ = 1.667 × 10⁻⁶ ÷ 7.00 × 10⁻⁷ = 2.38, so red appears only up to **m = 2**.

**Check.** If you had used the small-angle form for first-order red on a screen 1.00 m away, you would get y = λL/d = 0.420 m instead of the correct L tan θ = 0.463 m, an error of about 9%. Grating angles are too large for the approximation.

## Common misconceptions

- **"d sin θ = mλ gives dark fringes."** For two slits or a grating it gives the **bright** fringes. (For one slit of width a, the same form gives dark fringes.)
- **"Moving the slits apart spreads the fringes."** The spacing λL/d gets **smaller** as d increases.
- **"Every double-slit fringe is equally bright."** Only in the interference-only model. Real fringes fade with the single-slit envelope, and some can be missing.
- **"Violet is deviated most by a grating."** That is true for a prism (refraction), not for a grating. In each grating order, red is farthest from the centre.
- **"The central maximum of a grating is a spectrum."** At m = 0 all colours have zero path difference, so the centre is white.
- **Using y = mλL/d for a grating.** Grating angles are usually far above 10°; use d sin θ = mλ and tan θ = y/L.
- **Forgetting to convert lines/mm.** 300 lines/mm means d = 1/300 mm = 3.33 × 10⁻⁶ m, not 300 m or 1/300 m.

## Where this leads

Topic 14.9 uses the same path-difference reasoning for light reflected from the two surfaces of a thin film, such as a soap bubble or a layer of oil on water. Continue to [Topic 14.9: Thin-Film Interference](/advanced-course-resources/physics-2/14-9-thin-film-interference-study-guide/). First, test yourself with the [practice questions](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-checklist/). For single-slit diffraction, look back at [Topic 14.7: Diffraction](/advanced-course-resources/physics-2/14-7-diffraction-study-guide/).
