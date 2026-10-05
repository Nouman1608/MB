---
resourceId: "mb-ap-phys2-14.7-study-guide"
title: "Diffraction: Study Guide (Physics 2 14.7)"
description: "How waves spread through openings and around edges, why the gap size compared with the wavelength matters, and how to read and calculate a single-slit diffraction pattern."
course: "physics-2"
unit: 14
topics: ["14.7"]
resourceType: "study-guide"
prerequisites:
  - "Wavelength, frequency and v = fλ (Topic 14.2)"
  - "Superposition and constructive and destructive interference (Topic 14.6)"
  - "Light as an electromagnetic wave (Topic 14.4)"
  - "Basic trigonometry: sin θ and tan θ in a right-angled triangle"
prerequisiteResources: ["mb-ap-phys2-14.6-study-guide"]
learningObjectives:
  - "Explain diffraction as the spreading of a wave through a gap or around an edge"
  - "Predict how strongly a wave diffracts by comparing the size of the opening with the wavelength"
  - "Explain the bright and dark bands of a single-slit pattern using path length differences between wavelets from the slit"
  - "Use a sin θ = mλ to locate the dark fringes, and y_min = mλL/a when the angle is small"
  - "Predict how the pattern changes when the slit width, wavelength, frequency or screen distance changes"
  - "Use a picture or measurements of a diffraction pattern to find the slit width or the wavelength"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "1 nm = 10⁻⁹ m and 1 mm = 10⁻³ m. Convert every length to metres before substituting. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.7-revision-notes", "mb-ap-phys2-14.7-practice", "mb-ap-phys2-14.7-checklist"]
next: "mb-ap-phys2-14.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Diffraction is the spreading of a wave through an opening or around the edge of an obstacle."
  - "Diffraction is strongest when the opening is about the same size as the wavelength. A gap much wider than λ lets the wave through almost unspread."
  - "Wavelets from different parts of one slit interfere, so a single slit gives a wide, bright central band with dimmer bands on each side."
  - "Dark fringes: a sin θ = mλ with m = ±1, ±2, … For small angles (under about 10°), y_min = mλL/a."
  - "The central bright band is 2λL/a wide, twice as wide as each side band. A narrower slit or a longer wavelength makes the whole pattern wider."
faqs:
  - question: "Why can I hear someone around a corner but not see them?"
    answer: "Sound in air has wavelengths from a few centimetres to several metres, about the size of a doorway, so sound spreads widely through the door. Visible light has wavelengths of a few hundred nanometres, more than a million times smaller than the doorway, so light passes through almost in straight lines and leaves a sharp shadow."
  - question: "Is a sin θ = mλ the condition for bright fringes, like in a double slit?"
    answer: "No. For a single slit, a sin θ = mλ (m = ±1, ±2, …) gives the DARK fringes. The same-looking equation with the slit separation d gives the bright fringes of a double slit in Topic 14.8. Always check which width the letter stands for and what the pattern is."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Waves bend around edges

Stand outside an open door and you can hear people talking in the room, even if you cannot see them. The sound does not just travel in straight lines through the doorway. It spreads out into the space beyond. Water waves do the same thing when they pass the end of a harbour wall: behind the wall, where you might expect calm water, curved waves spread in.

This spreading is called **diffraction**. A wave diffracts when it passes through an opening (a gap or a slit) or past the edge of an obstacle. Every type of wave diffracts: waves on water, sound, light and other electromagnetic waves.

Diffraction does **not** change the wave's speed, frequency or wavelength. The medium has not changed, so the waves beyond the gap have the same λ as the waves arriving. Only the direction in which the energy travels spreads out.

## Gap size compared with wavelength

How much a wave spreads depends on one comparison: the width of the opening, a, compared with the wavelength, λ.

- **a much larger than λ:** most of the wave passes straight through. It spreads only a little at the edges, and there is a fairly sharp shadow on each side.
- **a about the same as λ:** the wave spreads strongly. Beyond the gap the wavefronts are nearly semicircles, as if the gap were a new point source.

So diffraction is **most noticeable when the opening is comparable to the wavelength**. Figure 1 shows the two cases in a ripple tank.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="gap-title gap-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="gap-title">Plane waves passing through a wide gap and a narrow gap</title>
<desc id="gap-desc">Two panels seen from above, as in a ripple tank. In both, straight wavefronts, shown as vertical lines one wavelength apart, travel from left to right towards a barrier. Left panel: the gap in the barrier is six wavelengths wide. Beyond it the wavefronts stay straight across the width of the gap and curve only slightly at their ends, so the wave carries on mostly in a straight beam with shadow regions above and below. Right panel: the gap is about one wavelength wide. Beyond it the wavefronts are semicircles centred on the gap, so the wave spreads into the whole region behind the barrier.</desc>
<defs><marker id="gap-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<line x1="40" y1="40" x2="40" y2="260"/><line x1="60" y1="40" x2="60" y2="260"/><line x1="80" y1="40" x2="80" y2="260"/><line x1="100" y1="40" x2="100" y2="260"/>
<path d="M134.1 75.9 A20 20 0 0 1 140 90 L140 210 A20 20 0 0 1 134.1 224.1"/>
<path d="M148.3 61.7 A40 40 0 0 1 160 90 L160 210 A40 40 0 0 1 148.3 238.3"/>
<path d="M162.4 47.6 A60 60 0 0 1 180 90 L180 210 A60 60 0 0 1 162.4 252.4"/>
<path d="M176.6 33.4 A80 80 0 0 1 200 90 L200 210 A80 80 0 0 1 176.6 266.6"/>
<path d="M190.7 19.3 A100 100 0 0 1 220 90 L220 210 A100 100 0 0 1 190.7 280.7"/>
<path d="M204.9 5.1 A120 120 0 0 1 240 90 L240 210 A120 120 0 0 1 204.9 294.9"/>
<line x1="320" y1="40" x2="320" y2="260"/><line x1="340" y1="40" x2="340" y2="260"/><line x1="360" y1="40" x2="360" y2="260"/>
<path d="M370 130 A20 20 0 0 1 370 170"/><path d="M370 110 A40 40 0 0 1 370 190"/><path d="M370 90 A60 60 0 0 1 370 210"/>
<path d="M370 70 A80 80 0 0 1 370 230"/><path d="M370 50 A100 100 0 0 1 370 250"/><path d="M370 30 A120 120 0 0 1 370 270"/>
<path d="M370 10 A140 140 0 0 1 370 290"/>
</g>
<g stroke="#1d2b44" stroke-width="5">
<line x1="120" y1="20" x2="120" y2="90"/><line x1="120" y1="210" x2="120" y2="300"/>
<line x1="370" y1="20" x2="370" y2="140"/><line x1="370" y1="160" x2="370" y2="300"/>
</g>
<line x1="30" y1="285" x2="90" y2="285" stroke="#1d2b44" stroke-width="2" marker-end="url(#gap-arr)"/>
<line x1="310" y1="285" x2="350" y2="285" stroke="#1d2b44" stroke-width="2" marker-end="url(#gap-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="40" y="320">(a) gap a = 6λ: little spreading</text>
<text x="300" y="320">(b) gap a ≈ λ: strong spreading</text>
<text x="126" y="45">shadow</text><text x="126" y="265">shadow</text>
</g>
</svg>
<figcaption>Figure 1. Straight wavefronts (lines one wavelength apart) meet a barrier (thick lines). (a) A gap six wavelengths wide: the wave carries on mostly as a straight beam, curving only at the edges. (b) A gap about one wavelength wide: the wavefronts become semicircles and fill the whole region behind the barrier. The wavelength is the same on both sides of each barrier.</figcaption>
</figure>

Two everyday comparisons make the rule concrete. A 500 Hz note in air (v = 340 m/s) has λ = 340 ÷ 500 = 0.68 m. A doorway about 0.9 m wide is only about 1.3 wavelengths across, so the sound spreads widely. Light of wavelength 500 nm meets the same doorway, which is now 0.9 ÷ (500 × 10⁻⁹) = 1.8 million wavelengths wide. The light hardly spreads at all, and the edge of the shadow looks sharp. To see light diffract clearly you need a slit a fraction of a millimetre wide.

## Why a single slit gives bands

If the gap were a single point, the wave beyond it would just spread evenly. A real slit has a width, and every part of the opening acts as a source of its own small wavelets. These wavelets all start in step, because the same wavefront reaches the whole slit at once. Beyond the slit they overlap, so they **interfere**, using the superposition rule from Topic 14.6.

This is the standard light experiment. **Monochromatic** light (a single wavelength λ, for example from a laser) falls on a narrow slit of width a. A screen is a distance L away, with L much larger than a. On the screen you see:

- a **wide, bright central band** straight ahead,
- **dark fringes** where the light cancels, and
- **dimmer bright bands** further out, getting fainter with distance from the centre.

Whether wavelets add or cancel at a point on the screen depends on the **path length difference ΔL**: how much further one wavelet travels than another to reach that point.

## Where the dark fringes are

Look at light leaving the slit at an angle θ to the straight-through direction (the **normal** to the slit). Because the screen is far away, the wavelets heading to one point on the screen travel along nearly parallel lines. Figure 2 shows the geometry.

<figure>
<svg viewBox="0 0 560 280" role="img" aria-labelledby="ss-title ss-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ss-title">Path length difference across a single slit</title>
<desc id="ss-desc">Close-up of a slit of width a in a barrier, with light arriving from the left. Two parallel rays leave the top and bottom edges of the slit, heading up and to the right at angle theta to the normal, which is drawn as a dashed horizontal line. A short line drawn from the top edge meets the lower ray at a right angle. The extra length of the lower ray before that point is labelled a sine theta: the path length difference between the waves from the two edges. A third ray from the centre of the slit is also drawn; its extra path compared with the top ray is half as much, a over 2 times sine theta.</desc>
<defs><marker id="ss-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="6"><line x1="150" y1="20" x2="150" y2="110"/><line x1="150" y1="230" x2="150" y2="270"/></g>
<line x1="150" y1="170" x2="470" y2="170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<text x="476" y="174" font-size="12" fill="#1d2b44">normal</text>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="150" y1="110" x2="413" y2="14" marker-end="url(#ss-arr)"/>
<line x1="150" y1="170" x2="432" y2="67" marker-end="url(#ss-arr)"/>
<line x1="150" y1="230" x2="451" y2="120" marker-end="url(#ss-arr)"/>
</g>
<line x1="150" y1="110" x2="188.6" y2="216" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="150" y1="230" x2="188.6" y2="216" stroke="#1d2b44" stroke-width="5" stroke-opacity="0.45"/>
<path d="M183 218 L180.9 212.4 L186.5 210.4" fill="none" stroke="#1d2b44" stroke-width="1"/>
<path d="M230 170 A80 80 0 0 0 225 143" fill="none" stroke="#1d2b44" stroke-width="1"/>
<g font-size="13" fill="#1d2b44">
<text x="236" y="160">θ</text>
<text x="112" y="175">a</text>
<line x1="128" y1="110" x2="128" y2="230" stroke="#1d2b44" stroke-width="1"/>
<line x1="123" y1="110" x2="133" y2="110" stroke="#1d2b44"/><line x1="123" y1="230" x2="133" y2="230" stroke="#1d2b44"/>
<text x="150" y="258" font-size="12">ΔL = a sin θ</text>
<text x="300" y="250" font-size="12">all three rays head to the same</text>
<text x="300" y="266" font-size="12">far-away point on the screen</text>
<text x="20" y="60" font-size="12">light from</text><text x="20" y="76" font-size="12">the laser →</text>
</g>
</svg>
<figcaption>Figure 2. Rays leaving the top edge, centre and bottom edge of a slit of width a at angle θ (angle exaggerated). The thin line from the top edge meets the bottom ray at a right angle, so the bottom ray travels an extra a sin θ (thick shaded segment). The ray from the centre travels an extra (a/2) sin θ compared with the top ray.</figcaption>
</figure>

The path length difference between the wavelets from the **two edges** of the slit is

**ΔL = a sin θ**

Now use a pairing argument. Split the slit into a top half and a bottom half. Pair each point in the top half with the point exactly a/2 below it in the bottom half. Each pair has a path difference of (a/2) sin θ.

- If (a/2) sin θ = λ/2, every pair arrives half a wavelength out of step. Each pair cancels, so the whole slit gives **darkness**. This happens when **a sin θ = λ**.
- Split the slit into four, six, eight … strips instead, and the same argument gives darkness whenever the edge-to-edge path difference is a whole number of wavelengths.

So the **dark fringes** (minima) are at

**a sin θ = mλ, with m = ±1, ±2, ±3, …**

m = 0 is **not** a dark fringe. At θ = 0 all the wavelets travel the same distance and arrive in step, so the centre of the pattern is the brightest point. Notice the surprise: when the edge-to-edge difference is a whole λ, the result is dark, not bright.

### The small-angle form

On the screen, a point at distance y from the centre of the central band is at angle θ with tan θ = y/L. For angles under about 10°, sin θ ≈ tan θ ≈ θ (in radians), with an error of under 2%. Then a sin θ = mλ becomes a(y/L) = mλ, so the distance from the middle of the central bright band to the m-th dark fringe is

**y_min = mλL/a**

Consequences you can read straight from this equation:

- The dark fringes are **evenly spaced**, λL/a apart (for small angles).
- The **central bright band** runs from the first dark fringe on one side to the first on the other side, so its width is **2λL/a**: twice the width of each side band.
- The pattern gets **wider** when λ or L increases, and when the slit gets **narrower** (a smaller). A narrower slit spreads the light more. This matches the rule from Figure 1.
- If a < λ, then sin θ = λ/a would be greater than 1, so there are **no dark fringes** at all. The light spreads over every forward direction.

<figure>
<svg viewBox="0 0 580 400" role="img" aria-labelledby="ip-title ip-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ip-title">Single-slit pattern on a screen and its brightness graph</title>
<desc id="ip-desc">Top: a strip showing the pattern on the screen. The middle bright band is wide and labelled central bright band, width 2 lambda L over a. On each side there are narrower, dimmer bright bands separated by dark fringes. Bottom: a graph of brightness against position on the screen, measured in units of lambda L over a, from minus 3.5 to plus 3.5. The curve has a tall central peak between minus 1 and plus 1, falling to zero at plus and minus 1, 2 and 3. Between the zeros are small side peaks, each less than one tenth of the central height. The zeros are labelled m equals plus or minus 1, 2, 3, dark fringes.</desc>
<rect x="45" y="30" width="490" height="40" fill="#1d2b44"/>
<rect x="232" y="30" width="116" height="40" fill="#ffffff" stroke="#1d2b44"/>
<rect x="374" y="30" width="42" height="40" fill="#a9b1bf"/><rect x="164" y="30" width="42" height="40" fill="#a9b1bf"/>
<rect x="444" y="30" width="42" height="40" fill="#5b6679"/><rect x="94" y="30" width="42" height="40" fill="#5b6679"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="290" y="20">central bright band, width 2λL/a</text>
<text x="395" y="88">dimmer</text><text x="185" y="88">dimmer</text>
<text x="465" y="88">dimmer still</text><text x="115" y="88">dimmer still</text>
</g>
<polyline points="45,328.8 50,328.8 55,328.9 60,329.1 65,329.4 70,329.7 75,329.9 80,330.0 85,329.9 90,329.6 95,329.2 100,328.7 105,328.2 110,327.8 115,327.6 120,327.6 125,327.8 130,328.2 135,328.8 140,329.4 145,329.8 150,330.0 155,329.8 160,329.2 165,328.1 170,326.8 175,325.4 180,324.2 185,323.2 190,322.9 195,323.3 200,324.4 205,326.0 210,327.8 215,329.3 220,330.0 225,329.1 230,326.1 235,320.4 240,311.8 245,300.1 250,285.8 255,269.2 260,251.4 265,233.3 270,216.2 275,201.3 280,189.8 285,182.5 290,180.0 295,182.5 300,189.8 305,201.3 310,216.2 315,233.3 320,251.4 325,269.2 330,285.8 335,300.1 340,311.8 345,320.4 350,326.1 355,329.1 360,330.0 365,329.3 370,327.8 375,326.0 380,324.4 385,323.3 390,322.9 395,323.2 400,324.2 405,325.4 410,326.8 415,328.1 420,329.2 425,329.8 430,330.0 435,329.8 440,329.4 445,328.8 450,328.2 455,327.8 460,327.6 465,327.6 470,327.8 475,328.2 480,328.7 485,329.2 490,329.6 495,329.9 500,330.0 505,329.9 510,329.7 515,329.4 520,329.1 525,328.9 530,328.8 535,328.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="45" y1="330" x2="540" y2="330" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="290" y1="330" x2="290" y2="160" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="80" y1="330" x2="80" y2="336" stroke="#1d2b44"/><text x="80" y="350">−3</text>
<line x1="150" y1="330" x2="150" y2="336" stroke="#1d2b44"/><text x="150" y="350">−2</text>
<line x1="220" y1="330" x2="220" y2="336" stroke="#1d2b44"/><text x="220" y="350">−1</text>
<text x="290" y="350">0</text>
<line x1="360" y1="330" x2="360" y2="336" stroke="#1d2b44"/><text x="360" y="350">1</text>
<line x1="430" y1="330" x2="430" y2="336" stroke="#1d2b44"/><text x="430" y="350">2</text>
<line x1="500" y1="330" x2="500" y2="336" stroke="#1d2b44"/><text x="500" y="350">3</text>
<text x="290" y="375">Position on screen y (in units of λL/a)</text>
<text x="430" y="285">zeros at m = ±1, ±2, ±3:</text><text x="430" y="300">dark fringes</text>
<text x="290" y="150">brightest at y = 0</text>
</g>
<text x="24" y="250" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 250)">Brightness</text>
</svg>
<figcaption>Figure 3. A single-slit pattern for small angles. Top: the screen, with the bright bands drawn lighter and labelled by brightness. Bottom: brightness against position, with the dark fringes at y = mλL/a. The central band is twice as wide as each side band, and the side peaks are much dimmer (the first is under 5% of the central brightness).</figcaption>
</figure>

## Shape of the opening

The pattern depends on the **shape** of the opening, not only its size.

- A **long, narrow slit** spreads light mainly in the direction across its narrow width. The bands are stripes parallel to the slit. The long direction is many wavelengths across, so there is almost no spreading along it.
- A **small circular hole** spreads light equally in all directions around the beam. The pattern is a bright central disc surrounded by faint rings.
- A **square hole** spreads light along both of its widths, giving bright spots in a cross shape.

The rule is always the same: the narrower the opening in a given direction, the wider the spreading in that direction.

## Reading a pattern

A picture or set of measurements of a diffraction pattern is evidence you can work backwards from. If you know λ and L and can measure the spacing of the dark fringes, you can find a. If you know a and L, the pattern gives λ. Measure across several fringes and divide, rather than measuring one small gap: it makes the result more precise.

## Worked example 1: predicting the pattern

**Question.** Laser light of wavelength 520 nm passes through a slit 0.130 mm wide. A screen is 2.40 m away. Find (a) the angle to the first dark fringe, (b) the distances from the centre to the first and second dark fringes, and (c) the widths of the central bright band and of the first side band.

1. Convert to metres: λ = 520 × 10⁻⁹ m = 5.20 × 10⁻⁷ m; a = 0.130 × 10⁻³ m = 1.30 × 10⁻⁴ m.
2. (a) First dark fringe, m = 1: sin θ₁ = λ/a = (5.20 × 10⁻⁷ m) ÷ (1.30 × 10⁻⁴ m) = 4.00 × 10⁻³. So θ₁ = 0.229°. This is far below 10°, so the small-angle form is valid.
3. (b) y₁ = λL/a = (5.20 × 10⁻⁷ m)(2.40 m) ÷ (1.30 × 10⁻⁴ m) = 9.60 × 10⁻³ m = **9.60 mm**. y₂ = 2λL/a = **19.2 mm**.
4. (c) Central band: from −y₁ to +y₁, width = 2 × 9.60 mm = **19.2 mm**. First side band: from y₁ to y₂, width = 19.2 − 9.60 = **9.60 mm**.

**Check.** Using the exact form y = L tan θ₂ with sin θ₂ = 8.00 × 10⁻³ gives 19.2006 mm, the same to 3 significant figures. The central band is twice the width of the side band, as expected. Units: (m × m) ÷ m = m.

## Worked example 2: working backwards, then predicting a change

**Question.** A student shines monochromatic light through a slit 0.300 mm wide onto a screen 1.50 m away. She measures the distance between the **second** dark fringe on the left and the **second** dark fringe on the right as 12.0 mm. (a) Find the wavelength. (b) She then halves the slit width and changes to light with 1.5 times the frequency. Predict the new width of the central bright band.

1. (a) The two second-order dark fringes are each at y₂ = 2λL/a from the centre. The distance between them is 2y₂ = 4λL/a.
2. So λ = (12.0 × 10⁻³ m)(3.00 × 10⁻⁴ m) ÷ (4 × 1.50 m) = **6.00 × 10⁻⁷ m** (600 nm). Then y₁ = λL/a = 3.00 mm, and the central band is 6.00 mm wide.
3. (b) The light still travels at the same speed, so from v = fλ, multiplying f by 1.5 multiplies λ by 1/1.5 = 2/3.
4. Width of the central band = 2λL/a. The new width is the old width × (2/3) ÷ (1/2) = old width × 4/3.
5. New width = 6.00 mm × 4/3 = **8.00 mm**.

**Check.** Directly: λ = 4.00 × 10⁻⁷ m, a = 1.50 × 10⁻⁴ m, so 2λL/a = 2(4.00 × 10⁻⁷)(1.50) ÷ (1.50 × 10⁻⁴) = 8.00 × 10⁻³ m. The two changes pull in opposite directions: the shorter wavelength narrows the pattern, the narrower slit widens it. The slit change is larger, so the pattern gets wider overall.

## Common misconceptions

- **"a sin θ = mλ gives bright fringes."** For a single slit it gives the **dark** fringes. The centre (θ = 0) is bright, and m = 0 is not a dark fringe.
- **"A narrower slit gives a narrower pattern."** The opposite. Pattern width ∝ λ/a, so narrowing the slit spreads the light more.
- **"All the bright bands are the same width and brightness."** The central band is twice as wide as the others and much brighter.
- **"Diffraction changes the wavelength."** The wave beyond the gap has the same λ and f. Only its direction spreads.
- **"Only light diffracts" or "light does not diffract."** All waves diffract. Light diffracts too; it is just hard to notice unless the opening is close to its tiny wavelength.
- **Using y = mλL/a at large angles.** The small-angle form needs θ under about 10°. Otherwise use a sin θ = mλ and tan θ = y/L.
- **Mixing units.** Put λ, a, L and y all in metres. Writing λ in nm and a in mm gives an answer that is wrong by a factor of 10⁶.

## Where this leads

In Topic 14.8 you will combine this single-slit spreading with the interference of light from two or more slits, and see the double-slit fringes sit inside the single-slit pattern you met here. Continue to [Topic 14.8: Double-Slit Interference and Diffraction Gratings](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-study-guide/). First, test yourself with the [practice questions](/advanced-course-resources/physics-2/14-7-diffraction-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-7-diffraction-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-7-diffraction-checklist/). For superposition itself, look back at [Topic 14.6: Wave Interference and Standing Waves](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-study-guide/).
