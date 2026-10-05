---
resourceId: "mb-ap-phys2-13.3-study-guide"
title: "Refraction: Study Guide (Physics 2 13.3)"
description: "Why light bends at a boundary: index of refraction n = c/v, Snell's law, bending toward or away from the normal, finding n from a graph, and total internal reflection."
course: "physics-2"
unit: 13
topics: ["13.3"]
resourceType: "study-guide"
prerequisites:
  - "Light rays, the normal and the law of reflection (Topic 13.1)"
  - "Sine and inverse sine on a calculator, in degree mode"
  - "Reading the slope of a straight-line graph"
prerequisiteResources: ["mb-ap-phys2-13.2-study-guide"]
learningObjectives:
  - "Explain refraction as a change of direction caused by a change in the speed of light"
  - "Use n = c/v to link the index of refraction of a medium to the speed of light in it"
  - "Apply Snell's law, n₁ sin θ₁ = n₂ sin θ₂, with angles measured from the normal"
  - "Predict whether a ray bends toward or away from the normal, or not at all"
  - "Find an index of refraction from the slope of a linearised graph of angle data"
  - "Explain when total internal reflection happens and calculate a critical angle"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "c = 3.00 × 10⁸ m/s; take n = 1.00 for air. Set the calculator to degrees. Keep unrounded values until the final step"
related: ["mb-ap-phys2-13.3-revision-notes", "mb-ap-phys2-13.3-practice", "mb-ap-phys2-13.3-checklist"]
next: "mb-ap-phys2-13.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Refraction is the change in direction of a ray as it crosses from one medium into another. It happens because the speed of light changes."
  - "The index of refraction is n = c/v. A larger n means slower light."
  - "Snell's law: n₁ sin θ₁ = n₂ sin θ₂, with both angles measured from the normal."
  - "Into a higher n the ray bends toward the normal; into a lower n it bends away. A ray along the normal does not bend."
  - "Total internal reflection can only happen going into a lower n, at angles beyond the critical angle, where sin θc = n₂/n₁."
faqs:
  - question: "Does the frequency of light change when it enters glass?"
    answer: "No. The frequency is set by the source and stays the same. The speed falls, so the wavelength gets shorter. Unit 14 uses this wave picture in more detail."
  - question: "Can n ever be less than 1?"
    answer: "Not for the materials in this course. Light travels fastest in a vacuum, where n = 1 exactly, so every material has n ≥ 1. Air is so close to 1 that you can use n = 1.00."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Why light bends

Shine a laser pointer at a glass block at an angle. The beam changes direction where it enters the glass, and again where it leaves. This change of direction at a boundary between two media is called **refraction**.

The cause is a change in the **speed** of light. Light travels at c = 3.00 × 10⁸ m/s in a vacuum and more slowly in air, water or glass. Think of a wide wavefront hitting the boundary at an angle. One edge of the wavefront enters the slower medium first and slows down, while the other edge is still moving fast. The wavefront swings round, so the ray, which is always perpendicular to the wavefront, changes direction. It is like a line of people marching at an angle onto sand: the people who reach the sand first slow down first, and the whole line turns.

Two facts follow from this picture:

- If the ray meets the boundary **along the normal** (at 0°), the whole wavefront slows at the same moment. The light slows down but does **not** change direction.
- The bigger the change in speed, the more the ray bends.

As in Topic 13.1, every angle in this topic is measured from the **normal**, the line perpendicular to the surface at the point where the ray hits. Never measure from the surface itself.

## The index of refraction

The **index of refraction** n of a medium compares the speed of light in a vacuum with the speed v in the medium:

**n = c / v**

n has no units. It is **inversely proportional** to v: a medium with twice the index has half the speed of light. Some typical values:

| Medium | n (typical) | Speed v = c/n |
|---|---|---|
| Vacuum | 1 (exactly) | 3.00 × 10⁸ m/s |
| Air | 1.0003, use 1.00 | 3.00 × 10⁸ m/s |
| Water | 1.33 | 2.26 × 10⁸ m/s |
| Glass (typical) | about 1.5 | about 2.0 × 10⁸ m/s |
| Diamond | 2.42 | 1.24 × 10⁸ m/s |

A medium with a larger n is often called "optically denser". That phrase is about the speed of light, not about mass density. Questions will always give you the n values you need.

## Snell's law

**Snell's law** connects the angle of incidence θ₁ in medium 1 with the angle of refraction θ₂ in medium 2:

**n₁ sin θ₁ = n₂ sin θ₂**

It gives three rules you should be able to state without calculating:

- **Into a higher n** (n₂ > n₁), sin θ₂ < sin θ₁, so θ₂ < θ₁. The ray bends **toward** the normal.
- **Into a lower n** (n₂ < n₁), θ₂ > θ₁. The ray bends **away from** the normal.
- **Along the normal** (θ₁ = 0), sin θ₂ = 0, so θ₂ = 0. No bending.

Notice what is proportional: the **sines** of the angles, not the angles. For light going from air into glass with n = 1.52, an incidence angle of 20° gives a refraction angle of 13.0°, but 40° gives 25.0°, not 26.0°. The ratio sin θ₁ / sin θ₂ = n₂/n₁ = 1.52 is the same for every angle.

Reflection and refraction usually happen together. At a glass surface most of the light goes through, but a small part is reflected, obeying the law of reflection.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="ref-block-title ref-block-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ref-block-title">A ray passing through a rectangular glass block</title>
<desc id="ref-block-desc">A rectangular glass block with index 1.50 sits in air. A ray in air comes down from the upper left and hits the top surface at 50 degrees to the vertical dashed normal. Inside the block it travels more steeply, at 30.7 degrees to the normal, bending toward the normal. At the bottom surface it leaves at 50 degrees to the normal, bending away from the normal, so the ray that leaves is parallel to the ray that entered but shifted sideways. A dotted line shows where the ray would have gone with no block.</desc>
<defs><marker id="rb-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="60" y="120" width="440" height="160" fill="#eef3fa" stroke="#1d2b44" stroke-width="2"/>
<text x="480" y="145" font-size="13" fill="#1d2b44" text-anchor="end">glass, n = 1.50</text>
<text x="480" y="60" font-size="13" fill="#1d2b44" text-anchor="end">air, n = 1.00</text>
<text x="480" y="320" font-size="13" fill="#1d2b44" text-anchor="end">air, n = 1.00</text>
<line x1="200" y1="45" x2="200" y2="195" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="295" y1="205" x2="295" y2="355" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="200" y1="120" x2="390.7" y2="280" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/>
<line x1="92.8" y1="30" x2="200" y2="120" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#rb-arr)"/>
<line x1="200" y1="120" x2="295" y2="280" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#rb-arr)"/>
<line x1="295" y1="280" x2="402.3" y2="370" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#rb-arr)"/>
<g font-size="13" fill="#1d2b44">
<text x="96" y="100">θ₁ = 50°</text>
<text x="112" y="172">θ₂ = 30.7° →</text>
<text x="305" y="345">50°</text>
<text x="345" y="215" font-size="12">no-block path (dotted)</text>
<text x="206" y="58" font-size="12">normal</text>
</g>
</svg>
<figcaption>Figure 1. Light entering glass (higher n) bends toward the normal; light leaving into air (lower n) bends away. Because the two faces are parallel, the ray leaves at the same 50° it entered, shifted sideways (dotted line: the path with no block). For a 4.0 cm thick block the shift is about 1.5 cm.</figcaption>
</figure>

## Using a graph to find n

Snell's law is not a straight-line relationship between θ₁ and θ₂. To find n from experimental data, plot quantities that **are** proportional. For light from air (n = 1.00) into a material of index n:

sin θ_air = n sin θ_material

So a graph of **sin θ_air** (vertical) against **sin θ_material** (horizontal) is a straight line through the origin with **slope n**. A typical experiment: aim a laser at the flat face of a block, mark the beam on paper before and after the face, draw the normal, and measure both angles with a protractor for five or more angles of incidence. Wide range, repeat readings and a best-fit line all reduce the effect of reading errors of about ±0.5°.

## Total internal reflection

When light goes **into a lower n**, it bends away from the normal. As θ₁ increases, θ₂ reaches 90° first. The angle of incidence at which this happens is the **critical angle** θc. Putting θ₂ = 90° into Snell's law gives n₁ sin θc = n₂ × 1, so:

**sin θc = n₂ / n₁** (only possible when n₁ > n₂)

- **Below** θc: the ray refracts out (with a weak reflection as well).
- **At** θc: the refracted ray travels along the surface, at 90° to the normal.
- **Beyond** θc: no light is transmitted. **All** of it reflects back into medium 1, following the law of reflection. This is **total internal reflection** (TIR).

TIR is impossible when light goes into a higher n, because then θ₂ is always smaller than θ₁ and never reaches 90°. Optical fibres use TIR: light hits the wall of the fibre's core beyond the critical angle and stays inside, even when the fibre bends gently.

<figure>
<svg viewBox="0 0 640 400" role="img" aria-labelledby="tir-title tir-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tir-title">Three rays from a lamp under water meeting the surface</title>
<desc id="tir-desc">A lamp S is under water, 150 units below a flat water surface with air above. Ray a meets the surface at 30 degrees to the normal and refracts into the air at 41.7 degrees, bending away from the normal. Ray b meets the surface at the critical angle, 48.8 degrees, and travels along the surface. Ray c meets the surface at 60 degrees, beyond the critical angle, and is totally reflected back into the water at 60 degrees.</desc>
<defs><marker id="tir-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="150" width="600" height="230" fill="#eef3fa"/>
<line x1="20" y1="150" x2="620" y2="150" stroke="#1d2b44" stroke-width="2"/>
<text x="600" y="40" font-size="13" fill="#1d2b44" text-anchor="end">air, n = 1.00</text>
<text x="600" y="370" font-size="13" fill="#1d2b44" text-anchor="end">water, n = 1.33</text>
<circle cx="250" cy="300" r="7" fill="#1d2b44"/>
<text x="238" y="325" font-size="14" font-weight="600" fill="#1d2b44">S</text>
<line x1="163.4" y1="90" x2="163.4" y2="210" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="421.1" y1="100" x2="421.1" y2="210" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="509.8" y1="100" x2="509.8" y2="210" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<line x1="250" y1="300" x2="163.4" y2="150" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="163.4" y1="150" x2="83.6" y2="60.4" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tir-arr)"/>
<line x1="250" y1="300" x2="421.1" y2="150" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 4"/>
<line x1="421.1" y1="147" x2="500" y2="147" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="10 4" marker-end="url(#tir-arr)"/>
<line x1="250" y1="300" x2="509.8" y2="150" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 3"/>
<line x1="509.8" y1="150" x2="596.4" y2="200" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 3" marker-end="url(#tir-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="92" y="110">a: out at 41.7°</text>
<text x="130" y="240">a: 30°</text>
<text x="330" y="245">b: 48.8° (critical)</text>
<text x="430" y="135">b: along surface</text>
<text x="470" y="275">c: 60°, totally reflected</text>
</g>
</svg>
<figcaption>Figure 2. Rays from a lamp S under water. Ray a (solid, 30°) refracts out, bending away from the normal. Ray b (dashed) meets the surface at the critical angle, 48.8°, and runs along it. Ray c (dotted, 60°) is beyond the critical angle and is totally internally reflected.</figcaption>
</figure>

## Worked example 1: identifying an unknown liquid

**Question.** A laser beam in air enters a flat tank of an unknown clear liquid. The angle of incidence is 40.0° and the angle of refraction in the liquid is 27.0°. Ignore the thin tank wall. Find (a) the index of refraction of the liquid, (b) the speed of light in it and (c) the critical angle for light going from the liquid into air.

1. Snell's law with n_air = 1.00: (1.00) sin 40.0° = n sin 27.0°.
2. (a) n = sin 40.0° / sin 27.0° = 0.6428 / 0.4540 = 1.416, so **n = 1.42**.
3. (b) v = c / n = (3.00 × 10⁸ m/s) / 1.416 = **2.12 × 10⁸ m/s**.
4. (c) sin θc = n_air / n = 1.00 / 1.416 = 0.7063, so θc = **44.9°**.

**Interpretation and check.** The ray bent toward the normal (27° < 40°), so the liquid must have n > 1, as found. The speed is less than c, as it must be. A ray inside the liquid that meets the surface at 50° is beyond 44.9°, so it would be totally reflected; at 40° it would leave into the air at 65.5°.

## Worked example 2: finding n from a graph

**Question.** A student aims a laser from air into a glass block and records these fictional results.

| θ_air (°) | 15 | 30 | 45 | 60 | 75 |
|---|---|---|---|---|---|
| θ_glass (°) | 10.0 | 19.0 | 28.0 | 35.0 | 39.5 |
| sin θ_air | 0.259 | 0.500 | 0.707 | 0.866 | 0.966 |
| sin θ_glass | 0.174 | 0.326 | 0.469 | 0.574 | 0.636 |

Use a graph to find n for the glass, then predict θ_glass for θ_air = 80°.

1. Choose axes that give a straight line: sin θ_air (vertical) against sin θ_glass (horizontal). Snell's law says the slope is n.
2. Plot the points (Figure 3). They lie close to a straight line through the origin.
3. Read two points far apart **on the line**, not data points: (0, 0) and (0.600, 0.906). Slope = 0.906 / 0.600 = **1.51**. So n ≈ 1.51.
4. Prediction: sin θ_glass = sin 80° / 1.51 = 0.9848 / 1.51 = 0.652, so θ_glass ≈ **40.7°**.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="snell-graph-title snell-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="snell-graph-title">Graph of sine of the angle in air against sine of the angle in glass</title>
<desc id="snell-graph-desc">Horizontal axis: sine of the angle in glass, from 0 to 0.6 and beyond. Vertical axis: sine of the angle in air, from 0 to 1. Five data points at (0.174, 0.259), (0.326, 0.500), (0.469, 0.707), (0.574, 0.866) and (0.636, 0.966) lie close to a straight best-fit line through the origin with slope 1.51.</desc>
<defs><marker id="sg-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="520" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#sg-arr)"/>
<line x1="80" y1="340" x2="80" y2="40" stroke="#1d2b44" stroke-width="2" marker-end="url(#sg-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="200" y1="340" x2="200" y2="346" stroke="#1d2b44"/><text x="200" y="360">0.2</text>
<line x1="320" y1="340" x2="320" y2="346" stroke="#1d2b44"/><text x="320" y="360">0.4</text>
<line x1="440" y1="340" x2="440" y2="346" stroke="#1d2b44"/><text x="440" y="360">0.6</text>
<text x="80" y="360">0</text>
<text x="300" y="385" font-size="13">sin θ_glass</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="270" x2="80" y2="270" stroke="#1d2b44"/><text x="70" y="274">0.25</text>
<line x1="74" y1="200" x2="80" y2="200" stroke="#1d2b44"/><text x="70" y="204">0.50</text>
<line x1="74" y1="130" x2="80" y2="130" stroke="#1d2b44"/><text x="70" y="134">0.75</text>
<line x1="74" y1="60" x2="80" y2="60" stroke="#1d2b44"/><text x="70" y="64">1.00</text>
</g>
<text x="22" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 200)">sin θ_air</text>
<line x1="80" y1="340" x2="476" y2="61" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<path d="M178.2 261.5 l12 12 M190.2 261.5 l-12 12"/>
<path d="M269.3 194 l12 12 M281.3 194 l-12 12"/>
<path d="M355.7 136 l12 12 M367.7 136 l-12 12"/>
<path d="M418.1 91.5 l12 12 M430.1 91.5 l-12 12"/>
<path d="M455.6 63.5 l12 12 M467.6 63.5 l-12 12"/>
</g>
<text x="330" y="230" font-size="12" fill="#1d2b44">best-fit line, slope = n ≈ 1.51</text>
</svg>
<figcaption>Figure 3. The data from Worked example 2 (crosses) with a best-fit line through the origin (dashed). Plotting the sines, not the angles, turns Snell's law into a straight line whose slope is the index of refraction of the glass.</figcaption>
</figure>

**Interpretation.** The line passes through the origin, as Snell's law predicts. The scatter of individual ratios (1.49 to 1.54) comes from reading angles to about ±0.5°; the slope of a best-fit line averages this out. The speed of light in this glass is c / 1.51 = 1.99 × 10⁸ m/s.

## Worked example 3: keeping light inside a fibre

**Question.** An optical fibre has a glass core with n = 1.50 surrounded by a cladding with n = 1.40. (a) Find the critical angle at the core–cladding boundary. (b) A ray in the core meets the wall at 75° to the normal. What happens? (c) Another ray meets it at 60°. What happens?

1. (a) Light goes from n₁ = 1.50 into n₂ = 1.40, a lower n, so TIR is possible. sin θc = 1.40 / 1.50 = 0.9333, so θc = **69.0°**.
2. (b) 75° > 69.0°, so the ray is **totally internally reflected** and stays in the core.
3. (c) 60° < 69.0°, so the ray **refracts into the cladding**: sin θ₂ = 1.50 sin 60° / 1.40 = 0.928, θ₂ = 68.1°. Part of the light also reflects, but energy leaks out at every such hit.

**Interpretation.** Without cladding (core in air) the critical angle would be sin⁻¹(1.00/1.50) = 41.8°, so more rays would be trapped. The cladding protects the core surface but means rays must travel closer to the fibre axis to stay inside.

## Common misconceptions

- **Measuring angles from the surface.** Both angles in Snell's law are measured from the normal. Using the angle from the surface gives the complement and a wrong answer.
- **"Light always bends toward the normal."** Only when it enters a medium with a higher n. Leaving glass into air, it bends away.
- **"Light bends because it is pulled by the material."** It bends because its speed changes. A ray along the normal changes speed but not direction.
- **"θ₂ is proportional to θ₁."** It is the sines that are in fixed ratio. Plot sines to get a straight line.
- **"TIR happens whenever light goes from glass to air."** Only beyond the critical angle. Below θc most of the light gets out.
- **"TIR can happen going from air into water."** Never: going into a higher n, the refracted angle is always smaller than the incident angle and cannot reach 90°.
- **Thinking the frequency changes.** The speed and wavelength change; the frequency does not.

## Where this leads

Lenses work by refraction at two curved surfaces, so Snell's law is the physics behind Topic 13.4, [Images Formed by Lenses](/advanced-course-resources/physics-2/13-4-images-formed-lenses-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/physics-2/13-3-refraction-practice/), then use the [revision notes](/advanced-course-resources/physics-2/13-3-refraction-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/13-3-refraction-checklist/) to consolidate. For mirrors, look back at [Topic 13.2](/advanced-course-resources/physics-2/13-2-images-formed-mirrors-study-guide/).
