---
resourceId: "mb-ap-physcem-8.5-study-guide"
title: "Electric Flux: Study Guide (Physics C: E&M 8.5)"
description: "Calculus-based guide to electric flux: the area vector, Φ = E·A for flat surfaces, sign conventions, surface integrals for non-uniform fields and closed surfaces."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.5"]
resourceType: "study-guide"
prerequisites:
  - "Electric field as a vector, and the fields of charge distributions (Topics 8.3 and 8.4)"
  - "The dot product a·b = ab cos θ and its component form"
  - "Setting up a single integral by splitting a region into thin strips"
prerequisiteResources: ["mb-ap-physcem-8.4-study-guide"]
learningObjectives:
  - "Explain what electric flux measures and define the area vector of a surface"
  - "Calculate the flux through a flat surface in a uniform field using Φ = E·A = EA cos θ"
  - "Decide the sign of a flux from the directions of the field and the area vector, including outward normals on closed surfaces"
  - "Set up and evaluate the surface integral ∫E·dA when the field changes across a surface"
  - "Compare fluxes in different situations by reasoning about field strength, area and orientation"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use angles in degrees and check your calculator mode. Keep unrounded values until the final step. Flux is measured in N·m²/C"
related: ["mb-ap-physcem-8.5-revision-notes", "mb-ap-physcem-8.5-practice", "mb-ap-physcem-8.5-checklist"]
next: "mb-ap-physcem-8.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Electric flux measures how much electric field passes through a surface. Its unit is N·m²/C."
  - "For a uniform field and a flat surface, Φ_E = E·A = EA cos θ, where θ is the angle between E and the area vector, not between E and the surface."
  - "The area vector is perpendicular to the surface. On a closed surface it always points outward."
  - "Flux is positive when E has a component along A and negative when E points against A."
  - "When E changes across a surface, Φ_E = ∫E·dA: split the surface into strips on which E is constant."
faqs:
  - question: "Is flux a vector?"
    answer: "No. Flux is a scalar. It comes from a dot product, so it has a size and a sign but no direction."
  - question: "Which way does the area vector point on an open surface?"
    answer: "You choose one of the two perpendicular directions and state your choice. Changing the choice changes the sign of the flux, not its size. On a closed surface there is no choice: the area vector points outward."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 8.5. You will use dot products and set up simple surface integrals. Flux is the idea that Gauss's law (Topic 8.6) is built on, so take time over the sign rules here.

Before you start, make sure you are confident with electric field vectors from [Topic 8.4, Electric Fields of Charge Distributions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-study-guide/).

## What flux measures

**Flux** describes how much of something passes through a given area. Think of air blowing through an open window. More air passes through when:

- the wind is stronger,
- the window is larger, or
- the window faces the wind directly instead of being turned sideways.

If the window is turned so that it lies along the wind direction, no air passes through it at all.

**Electric flux**, Φ_E, uses the same idea for the electric field. Nothing actually flows. But if you picture field lines, the flux is proportional to the number of field lines that cross the surface. A strong field, a large area and a surface that faces the field all give a large flux.

The SI unit of flux is the unit of field times the unit of area: **N·m²/C**. (This is the same as V·m, which you will meet once you have studied electric potential in Unit 9.)

## The area vector

To describe how a surface faces the field, give the surface an **area vector**, **A**:

- its **magnitude** is the area of the surface, in m²;
- its **direction** is **perpendicular** (normal) to the surface.

A flat open surface, such as a window, has two possible normal directions. You choose one and say which. A **closed** surface, such as a box or a sphere, has an inside and an outside. Its area vector always points **outward**. This rule is fixed, and it is what makes flux through closed surfaces meaningful in Topic 8.6.

## Flux through a flat surface in a uniform field

When E has the same size and direction over the whole of a flat surface, the flux is a dot product:

**Φ_E = E·A = EA cos θ**

Here θ is the angle between **E** and the **area vector A**. Only the component of E along A, E cos θ, passes through the surface. The component of E parallel to the surface slides along it and adds nothing.

| Angle θ between E and A | cos θ | Flux |
|---|---|---|
| 0° (E perpendicular to the surface, along A) | 1 | +EA, the largest positive value |
| 60° | 0.500 | +0.500EA |
| 90° (E parallel to the surface) | 0 | 0 |
| 120° | −0.500 | −0.500EA |
| 180° (E perpendicular to the surface, against A) | −1 | −EA |

**Sign rule.** The sign of the flux comes from the dot product. Flux is **positive** when E has a component along A and **negative** when E has a component against A. On a closed surface, outward A means positive flux where field lines **leave** and negative flux where they **enter**.

If you know the components, use the component form of the dot product. For a surface in the xy-plane with A = A k̂, only E_z matters: Φ_E = E_z A.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="flux-tilt-title flux-tilt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flux-tilt-title">A flat surface tilted in a uniform electric field, seen edge-on</title>
<desc id="flux-tilt-desc">Four parallel horizontal field lines point to the right, labelled uniform field E. A flat surface, seen edge-on as a thick line, crosses the middle of the diagram, tilted 25 degrees below the field direction. A thick arrow labelled area vector A starts at the centre of the surface and points up and to the right, perpendicular to the surface. A dashed reference line through the centre points along the field. A small arc marks the angle theta, 65 degrees, between the reference line and the area vector. A larger arc marks the angle alpha, 25 degrees, between the reference line and the surface. The two angles add to 90 degrees.</desc>
<defs>
<marker id="ft-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<marker id="ft-arr-big" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="30" y1="45" x2="530" y2="45" marker-end="url(#ft-arr)"/>
<line x1="30" y1="95" x2="530" y2="95" marker-end="url(#ft-arr)"/>
<line x1="30" y1="230" x2="530" y2="230" marker-end="url(#ft-arr)"/>
<line x1="30" y1="275" x2="530" y2="275" marker-end="url(#ft-arr)"/>
</g>
<line x1="180" y1="160" x2="440" y2="160" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 5"/>
<line x1="180.3" y1="113.5" x2="379.7" y2="206.5" stroke="#1d2b44" stroke-width="6" stroke-linecap="round"/>
<line x1="280" y1="160" x2="320" y2="74" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#ft-arr-big)"/>
<path d="M320 160 A40 40 0 0 0 296.9 123.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M350 160 A70 70 0 0 1 343.4 189.6" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="13" fill="#1d2b44">
<text x="36" y="35">uniform field E (to the right)</text>
<text x="328" y="78">area vector A (normal to surface)</text>
<text x="322" y="138">θ = 65°</text>
<text x="356" y="186">α = 25°</text>
<text x="50" y="140">surface (edge-on)</text>
<text x="400" y="154">direction of E</text>
</g>
</svg>
<figcaption>Figure 1. A flat surface seen edge-on in a uniform field. The surface makes α = 25° with the field, so the area vector makes θ = 90° − 25° = 65° with the field. The flux uses θ: Φ_E = EA cos 65°. Using cos 25° would be the classic error.</figcaption>
</figure>

## Worked example 1: a tilted window

**Question.** (a) A flat rectangle 0.30 m × 0.50 m sits in a uniform field of 2.4 × 10³ N/C. The plane of the rectangle makes 25° with the field direction, as in Figure 1. Find the flux, taking A on the side the field passes out through. (b) A square of side 0.20 m lies in the xy-plane, with area vector +k̂. The uniform field is E = (500 î − 200 ĵ + 300 k̂) N/C. Find the flux.

**(a)**

1. Area: A = 0.30 m × 0.50 m = 0.15 m².
2. Angle: the surface makes 25° with E, so the normal makes θ = 90° − 25° = 65° with E.
3. Flux: Φ_E = EA cos θ = (2.4 × 10³ N/C)(0.15 m²) cos 65° = 152 N·m²/C.

**Answer (a).** Φ_E = 1.5 × 10² N·m²/C, positive with the chosen A.

**Check.** The largest possible flux, with the surface facing the field, is EA = 360 N·m²/C. Our answer is smaller, as it must be. If you used cos 25° by mistake you would get 326 N·m²/C, close to the maximum, even though the surface is turned well away from facing the field. If you had chosen A on the other side, the answer would be −152 N·m²/C: same size, opposite sign.

**(b)**

1. Area vector: A = (0.20 m)² k̂ = 0.040 k̂ m².
2. Dot product: E·A = (500)(0) + (−200)(0) + (300)(0.040) = 12 N·m²/C.

**Answer (b).** Φ_E = 12 N·m²/C. The field's size is about 616 N/C, but only its z-component, 300 N/C, crosses a surface in the xy-plane. The x- and y-components run along the surface.

## Flux as a surface integral

Φ_E = EA cos θ only works when E is the same over a **flat** surface. If E changes from place to place, or the surface is curved, split the surface into tiny patches. Each patch has a small area vector dA, and over one patch E is effectively constant. Add up all the contributions:

**Φ_E = ∫ E·dA**

This is a **surface integral**. In this course you can turn it into an ordinary single integral by choosing patches wisely:

1. Find the direction in which E changes across the surface.
2. Cut the surface into thin **strips** perpendicular to that direction. On each strip E is constant.
3. Write the area of one strip, for example dA = (length) × dy.
4. Write dΦ = E(y) cos θ dA for one strip, then integrate across the surface.

The same steps work for a triangle or any shape whose strip length changes; the strip length then becomes a function of position.

## Worked example 2: a field that grows across the surface

**Question.** A rectangle lies in the xy-plane, with 0 ≤ x ≤ a and 0 ≤ y ≤ h. Its area vector is +k̂. In this region the field is E = b y² k̂, where b is a positive constant. (a) Find the flux in terms of a, b and h. (b) Evaluate it for b = 2.5 × 10⁴ N/(C·m²), a = 0.30 m and h = 0.20 m.

**(a)**

1. E depends on y only, so cut the rectangle into strips parallel to the x-axis. A strip at height y has length a and width dy, so dA = a dy.
2. E is parallel to the area vector everywhere, so E·dA = E dA = b y² a dy.
3. Integrate from the bottom edge to the top edge:

Φ_E = ∫₀ʰ b y² a dy = ab [y³/3]₀ʰ = **abh³/3**

**Unit check.** b has units N/(C·m²), so a b h³ has units m × N/(C·m²) × m³ = N·m²/C, the unit of flux.

**(b)** Φ_E = (0.30 m)(2.5 × 10⁴ N/(C·m²))(0.20 m)³ ÷ 3 = 20 N·m²/C.

**Interpretation.** The field rises from 0 at the bottom edge to bh² = 1000 N/C at the top edge. The area is 0.060 m², so the flux equals the area times an average field of 333 N/C, which is bh²/3. A quick estimate using the field at the middle strip, y = h/2, gives only 250 N/C × 0.060 m² = 15 N·m²/C. That estimate is too small, because E grows faster than linearly; the integral handles this correctly.

## Closed surfaces

A **closed** surface encloses a volume. For flux through it you add the fluxes through all its parts, each with an **outward** area vector. The integral sign is written with a circle, ∮E·dA, to show the surface is closed.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="flux-can-title flux-can-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="flux-can-title">A closed cylinder in a uniform field with its outward area vectors</title>
<desc id="flux-can-desc">A closed cylinder, seen from the side, has its axis horizontal. Three horizontal field lines point to the right; the middle one passes through the cylinder along its axis. Outward area vectors are drawn as thick arrows. On the left end cap the arrow points left, against the field, labelled flux minus E A. On the right end cap the arrow points right, along the field, labelled flux plus E A. On the curved side, arrows point straight up and straight down, perpendicular to the field, each labelled flux zero. The net flux through the closed surface is zero.</desc>
<defs>
<marker id="fc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<marker id="fc-arr-big" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="30" y1="40" x2="530" y2="40" marker-end="url(#fc-arr)"/>
<line x1="30" y1="160" x2="530" y2="160" marker-end="url(#fc-arr)"/>
<line x1="30" y1="280" x2="530" y2="280" marker-end="url(#fc-arr)"/>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<ellipse cx="200" cy="160" rx="16" ry="45"/>
<ellipse cx="360" cy="160" rx="16" ry="45"/>
<line x1="200" y1="115" x2="360" y2="115"/>
<line x1="200" y1="205" x2="360" y2="205"/>
</g>
<g stroke="#1d2b44" stroke-width="3.5">
<line x1="184" y1="185" x2="130" y2="185" marker-end="url(#fc-arr-big)"/>
<line x1="376" y1="185" x2="430" y2="185" marker-end="url(#fc-arr-big)"/>
<line x1="280" y1="115" x2="280" y2="68" marker-end="url(#fc-arr-big)"/>
<line x1="280" y1="205" x2="280" y2="252" marker-end="url(#fc-arr-big)"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="36" y="30">uniform field E (to the right)</text>
<text x="60" y="210">left end: Φ = −EA</text>
<text x="390" y="210">right end: Φ = +EA</text>
<text x="290" y="88">side: Φ = 0</text>
<text x="290" y="240">side: Φ = 0</text>
</g>
</svg>
<figcaption>Figure 2. A closed cylinder (a "can") with its axis along a uniform field. Thick arrows are outward area vectors. Field lines enter the left end (negative flux), leave the right end (positive flux) and run along the curved side (zero flux). The net flux is −EA + 0 + EA = 0.</figcaption>
</figure>

In a **uniform** field, every field line that enters a closed surface also leaves it. So the net flux through any closed surface in a uniform field is **zero**. In Topic 8.6 you will see the general rule: the net flux through a closed surface depends only on the charge inside it.

This gives a useful shortcut. If an open curved surface and a flat surface share the same rim, together they form a closed surface. In a uniform field the two fluxes must cancel, so the flux through the curved surface has the same size as the flux through the flat surface across its rim.

## Worked example 3: a dome in a tilted field

**Question.** A hemispherical dome of radius 0.12 m sits on a flat floor. A uniform field of 3.0 × 10³ N/C points upward, tilted at 30° to the vertical. (Because the field is uniform, it has this same direction at every point.) Find the flux through the curved surface of the dome, with A pointing outward (away from the centre).

1. Close the surface with the flat floor disc under the dome. The dome plus disc is a closed surface in a uniform field, so the net flux is zero.
2. The disc's outward area vector points **down**, at 180° − 30° = 150° to E. Its area is πR² = π(0.12 m)² = 0.04524 m².
3. Flux through the disc: (3.0 × 10³)(0.04524) cos 150° = −117.5 N·m²/C. The field enters through the floor.
4. Net flux zero, so Φ_dome = +117.5 N·m²/C.

**Answer.** Φ_dome = +1.2 × 10² N·m²/C. Field lines enter through the floor and leave through the dome.

**Check.** If the field were vertical, the flux would be EπR² = 136 N·m²/C, the largest possible value. Tilting by 30° multiplies this by cos 30° = 0.866. A direct numerical integration of E·dA over the dome gives the same result. Notice that you never needed the dome's curved area, 2πR².

## Common misconceptions

- **Measuring θ from the surface.** θ is the angle between E and the **area vector**, which is perpendicular to the surface. If you are given the angle to the surface, use 90° minus it, or use sin instead of cos.
- **"Flux is a vector because E and A are vectors."** Flux is a scalar. It has a sign but no direction.
- **Ignoring the sign.** Negative flux is meaningful: on a closed surface it shows where field lines enter.
- **Choosing inward normals on a closed surface.** Area vectors on a closed surface always point outward.
- **Using the total area for a curved surface in a uniform field.** Only the area "seen" by the field counts. For a dome or bowl in a uniform field, use the flat area across the rim, πR², not 2πR².
- **Multiplying E by area when E varies.** If E changes across the surface, you must integrate. Using one value of E gives a wrong answer unless that value happens to be the average.
- **"Zero net flux means no field."** A closed surface in a uniform field has zero net flux, but the field is not zero; it enters on one side and leaves on the other.

## Where this leads

Flux is the language of Gauss's law. In [Topic 8.6, Gauss's Law](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-study-guide/), you will find that the net flux through any closed surface equals the enclosed charge divided by ε₀, and you will use that to find fields. The same definition, with B in place of E, gives magnetic flux in Topic 13.1, the basis of Faraday's law. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-5-electric-flux-checklist/).
