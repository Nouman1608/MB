---
resourceId: "mb-ap-physcm-2.1-study-guide"
title: "Systems and Center of Mass: Study Guide (Physics C: Mechanics 2.1)"
description: "Calculus-based systems and center of mass: choosing a system, when it can be one object, the center of mass of particles, symmetry, and x_cm = ∫x dm / ∫dm for non-uniform rods and plates."
course: "physics-c-mechanics"
unit: 2
topics: ["2.1"]
resourceType: "study-guide"
prerequisites:
  - "Position vectors and components (Topics 1.1 and 1.5)"
  - "Definite integrals of polynomials (calculus taken before or alongside the course)"
prerequisiteResources: ["mb-ap-physcm-1.5-study-guide"]
learningObjectives:
  - "Choose a system, say what crosses its boundary, and decide whether it can be modelled as a single object"
  - "Explain how interactions and internal structure inside a system shape its behaviour, and why parts can move differently from the whole"
  - "Locate the center of mass of a set of particles or uniform pieces using symmetry and x_cm = Σmᵢxᵢ / Σmᵢ"
  - "Use linear mass density λ = dm/dx to find the mass and center of mass of a non-uniform rod by integration"
  - "Set up mass integrals over an area or a volume when a density function is given"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Integrals by hand; a calculator for arithmetic only. Give answers to 2 or 3 significant figures as stated"
related: ["mb-ap-physcm-2.1-revision-notes", "mb-ap-physcm-2.1-practice", "mb-ap-physcm-2.1-checklist"]
next: "mb-ap-physcm-2.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A system is whatever you choose to draw a boundary around. Its behaviour comes from the interactions inside it and with its environment."
  - "If the inner details do not matter for your question, model the whole system as one object located at its center of mass."
  - "For particles: x_cm = Σmᵢxᵢ / Σmᵢ, and the same for y and z. A uniform symmetric object has its center of mass on every line of symmetry."
  - "For a continuous object: x_cm = ∫x dm / ∫dm. For a rod, dm = λ dx, where λ = dm/dx is the linear mass density."
  - "The center of mass can lie outside the material, and it is not, in general, the point with half the mass on each side."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 2.1?"
    answer: "They are separate courses. Physics 1 finds the center of mass of particles and uniform pieces with sums. Physics C: Mechanics also expects you to integrate: to find the mass and center of mass of an object whose density changes along its length, or across an area or volume."
  - question: "Does the center of mass have to be inside the object?"
    answer: "No. For a ring, a horseshoe or an L-shaped bracket, the center of mass sits in empty space. It is a calculated position, not a piece of the object."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses**, and both have a Topic 2.1 with the same title. This guide is the **calculus-based** one. As well as sums over particles, it uses integrals to find the mass and center of mass of objects whose density changes from place to place. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-1-systems-center-mass-study-guide/); do not mix the two when you revise.

## Choosing a system

In Unit 1 you treated every moving thing as a point. From now on you must first decide **what** you are analysing. A **system** is the object or group of objects inside a boundary that you choose. Everything outside is the **environment**.

The choice is yours, and a good choice makes a problem easier. A car can be one system. So can the car plus its passengers, or just one wheel. Always say it in words, for example "system: cart and the brick on it".

Four ideas follow from that choice.

1. **A system's properties come from the interactions inside it.** A foam mattress is springy because of how its cells push on one another. A stack of magnets holds its shape because of the forces between the magnets. Change those interactions and the system behaves differently.
2. **Systems can be open.** Mass or energy can cross the boundary. A rocket loses mass as exhaust leaves it. A pan on a hob gains energy from the flame. If nothing crosses, the system is closed for that quantity.
3. **Parts can behave differently from the whole.** When a diver tucks during a dive, her arms and legs move in quite different ways, but the system "whole diver" follows one smooth path through the air.
4. **Internal structure can matter, and it can change.** A full, sealed water tank on a lorry behaves like a solid block. A half-full tank does not: when the lorry brakes, the water surges forward. Changing something outside the system (the lorry's braking) has changed the arrangement inside it.

### When is a system one object?

If the parts and their interactions do not affect the question you are asking, you can model the system as **a single object**. You do not need to know how a falling sack of rice is packed to find when it lands. You do need the inner details to decide whether a tall load on a trolley tips over when the trolley stops suddenly.

When you do treat a system as one object, you place it at one special point: its **center of mass**.

## Center of mass of particles

For particles of mass mᵢ at positions xᵢ along one axis, the center of mass is the **mass-weighted average position**:

**x_cm = Σmᵢxᵢ / Σmᵢ**

Repeat it for each axis: y_cm = Σmᵢyᵢ / Σmᵢ, and z_cm the same way. In vector form, r_cm = Σmᵢrᵢ / M, where M = Σmᵢ is the total mass.

Three habits keep you safe:

- **Positions are signed.** A mass at x = −0.30 m pulls x_cm towards negative x.
- **Divide by the total mass**, not by the number of particles.
- **The answer does not depend on where you put the origin.** Move the origin and every xᵢ and x_cm shift by the same amount, so the physical point stays put. Pick the origin that makes the arithmetic easiest.

For two particles, the center of mass lies on the line joining them, closer to the heavier one. The distances from each particle are in the inverse ratio of the masses.

## Symmetry and uniform pieces

For an object with a **symmetrical mass distribution**, the center of mass lies on every line (or plane) of symmetry. So a uniform rod has its center of mass at its midpoint, and a uniform rectangle, disc or sphere at its geometric center.

This lets you split a complicated object into uniform pieces. Replace each piece by a particle, with the piece's mass, at the piece's own center of mass. Then use the particle formula. A missing piece (a hole) can be handled as a piece with **negative mass**.

## Center of mass of a continuous object

Now let the density change along the object. Cut the object into tiny elements, each of mass dm at position x. The sum becomes an integral:

**x_cm = ∫x dm / ∫dm**, where ∫dm = M, the total mass.

For a rod or other thin object along the x-axis, describe the mass with the **linear mass density**:

**λ = dm/dx** (unit kg/m)

So each element has dm = λ(x) dx, and

**M = ∫λ(x) dx** and **x_cm = (1/M) ∫x λ(x) dx**, both over the length of the rod.

For a uniform rod, λ is constant and x_cm comes out at the midpoint, as symmetry says it must.

The same idea works in two and three dimensions. With an **area density** σ (kg/m²) the mass is M = ∫σ dA. With a **volume density** ρ (kg/m³) it is M = ∫ρ dV. In this course the useful trick is to choose elements that make the integral one-dimensional: for a flat plate whose density changes only with x, use thin strips parallel to y, each of area (height × dx).

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm21-rod-title pcm21-rod-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm21-rod-title">A non-uniform rod divided into mass elements dm = λ dx</title>
<desc id="pcm21-rod-desc">A rod lies along an x-axis from 0 to 0.80 metres. It is drawn thin at the left end and thicker towards the right, showing that its linear mass density rises from 0.50 kilograms per metre at x = 0 to 1.7 kilograms per metre at x = 0.80 metres. A narrow hatched slice at x = 0.30 metres is labelled dm = λ(x) dx, with its width labelled dx. Below the axis, a dashed tick marks the midpoint at 0.40 metres, and a solid triangle marks the center of mass at 0.47 metres, to the right of the midpoint.</desc>
<defs><pattern id="pcm21-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V5" stroke="#1d2b44" stroke-width="1.2"/></pattern></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<polygon points="60,145 460,133 460,167 60,155" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="202" y="140.5" width="16" height="19" fill="url(#pcm21-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M202 118 V136 M218 118 V136 M202 124 H218" stroke="#1d2b44" stroke-width="1.2"/>
<text x="210" y="112" font-size="12" fill="#1d2b44" text-anchor="middle">dx</text>
<path d="M226 168 L262 196" stroke="#1d2b44" stroke-width="1.2"/>
<text x="266" y="206" font-size="12" fill="#1d2b44">element at x: dm = λ(x) dx</text>
<text x="60" y="122" font-size="12" fill="#1d2b44">λ = 0.50 kg/m</text>
<text x="400" y="122" font-size="12" fill="#1d2b44">λ = 1.7 kg/m</text>
<path d="M60 240 H500" stroke="#1d2b44" stroke-width="2"/>
<path d="M494 236 L504 240 L494 244 z" fill="#1d2b44"/>
<g stroke="#1d2b44" stroke-width="1.5"><path d="M60 235 V245 M160 235 V245 M360 235 V245 M460 235 V245"/></g>
<path d="M260 222 V250" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="262">0</text><text x="160" y="262">0.20</text><text x="260" y="262">0.40</text><text x="360" y="262">0.60</text><text x="460" y="262">0.80</text>
<text x="515" y="244" text-anchor="start">x (m)</text>
</g>
<path d="M296 232 L289 220 L303 220 z" fill="#1d2b44"/>
<text x="250" y="284" font-size="12" fill="#1d2b44" text-anchor="end">midpoint 0.40 m (dashed)</text>
<text x="300" y="284" font-size="12" fill="#1d2b44">center of mass 0.47 m (▲)</text>
</svg>
<figcaption>Figure 1. The rod of Worked example 2. Its thickness is drawn in proportion to λ. Adding up x dm over all the elements and dividing by M puts the center of mass at 0.47 m, past the midpoint, towards the denser end.</figcaption>
</figure>

## The system as one object at its center of mass

Once you have the center of mass, you can replace the whole system by a single particle of mass M placed there. This is the model behind every free-body diagram in the rest of the unit (Topic 2.2): the dot you draw stands for the center of mass.

The model has limits. It tells you about the motion of the system **as a whole**. It does not tell you how the parts move relative to each other. A thrown spanner spins as it flies, and any point on its handle traces a looping path, but its center of mass follows a smooth parabola, like the projectiles of Topic 1.5. Why that happens is shown in Unit 4 with momentum; here, just notice that the parts and the whole behave differently.

## Worked example 1: an L-shaped bracket

**Question.** A bracket is made from two thin uniform steel bars welded at a right angle. The horizontal bar is 0.40 m long with mass 1.2 kg. The vertical bar is 0.30 m long with mass 0.90 kg. Take the origin at the corner, **+x along the horizontal bar and +y up the vertical bar**. (a) Find the center of mass of the bracket. (b) A 0.30 kg clamp is then fixed at the free end of the horizontal bar. Find the new center of mass.

1. **Use symmetry for each bar.** Each bar is uniform, so its center of mass is at its midpoint: horizontal bar at (0.20 m, 0); vertical bar at (0, 0.15 m).
2. **Total mass:** M = 1.2 + 0.90 = **2.1 kg**.
3. **x-coordinate:** x_cm = (1.2 × 0.20 + 0.90 × 0) / 2.1 = 0.24 / 2.1 = **0.114 m**.
4. **y-coordinate:** y_cm = (1.2 × 0 + 0.90 × 0.15) / 2.1 = 0.135 / 2.1 = **0.064 m**.
5. **(b) Add the clamp** as a particle at (0.40 m, 0). New total mass 2.4 kg. x_cm = (0.24 + 0.30 × 0.40) / 2.4 = 0.36 / 2.4 = **0.150 m**; y_cm = 0.135 / 2.4 = **0.056 m**.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm21-bracket-title pcm21-bracket-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm21-bracket-title">Center of mass of an L-shaped bracket</title>
<desc id="pcm21-bracket-desc">An L-shaped bracket with its corner at the origin. A horizontal bar runs 0.40 metres along +x and a vertical bar runs 0.30 metres up +y. Small open squares mark the center of each bar: (0.20 metres, 0) and (0, 0.15 metres). A dashed line joins these two points. A circle with a cross marks the bracket's center of mass at (0.114 metres, 0.064 metres). It lies on the dashed line, in the empty space between the bars, closer to the heavier horizontal bar.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<rect x="100" y="284" width="320" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="94" y="50" width="12" height="246" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M260 290 L100 170" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<rect x="255" y="285" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="95" y="165" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="191" cy="239" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M185 233 L197 245 M197 233 L185 245" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="270" y="278">bar 1: 1.2 kg, center (0.20 m, 0)</text>
<text x="116" y="160">bar 2: 0.90 kg, center (0, 0.15 m)</text>
<text x="212" y="226">center of mass of bracket</text>
<text x="212" y="242">(0.114 m, 0.064 m)</text>
<text x="74" y="316">origin</text>
<text x="430" y="294">+x</text>
<text x="88" y="42">+y</text>
<text x="300" y="326">0.40 m</text>
<text x="20" y="175">0.30 m</text>
</g>
</svg>
<figcaption>Figure 2. The bracket's center of mass (circle with a cross) lies on the dashed line joining the two bar centers (open squares), but outside the steel itself.</figcaption>
</figure>

**Check.** The center of mass lies on the line joining the two bar centers, dividing it in the ratio 0.90 : 1.2, nearer the heavier bar. It is not on either bar: the bracket's center of mass is in empty space. Adding the clamp at the far end of the horizontal bar moved x_cm towards it (0.114 m → 0.150 m) and pulled y_cm down a little, because the new mass sits at y = 0.

## Worked example 2: a non-uniform rod by integration

**Question.** A wooden pointer is 0.80 m long and thicker at one end. Take the origin at the thin end and **+x along the pointer towards the thick end**. Its linear mass density is λ(x) = 0.50 + 1.5x, with λ in kg/m and x in m. Find (a) its mass and (b) the position of its center of mass.

1. **Units first.** The 0.50 is in kg/m. The 1.5 multiplies a length, so it is in kg/m²; then 1.5x is in kg/m too.
2. **(a) Mass:** M = ∫₀^0.80 (0.50 + 1.5x) dx = [0.50x + 0.75x²]₀^0.80 = 0.40 + 0.48 = **0.88 kg**.
3. **(b) Moment integral:** ∫₀^0.80 x(0.50 + 1.5x) dx = [0.25x² + 0.50x³]₀^0.80 = 0.16 + 0.256 = 0.416 kg·m.
4. **Divide by the mass:** x_cm = 0.416 / 0.88 = **0.47 m** from the thin end (0.473 m to 3 s.f.).

**Check with a limiting case.** If the 1.5x term were zero, the pointer would be uniform. The general result for λ = 0.50 + bx over 0.80 m reduces to 0.40 m when b = 0, the midpoint, as symmetry requires. With b > 0 the extra mass is towards the thick end, so x_cm moves past 0.40 m, which is what we found.

**A point to notice.** The mass to the left of x_cm is ∫₀^0.473 λ dx ≈ 0.40 kg, and to the right ≈ 0.48 kg. They are **not equal**. The point with half the mass on each side is at about 0.50 m. The center of mass weights each element by its distance, so the heavier elements far out count for more.

## Common misconceptions

- **"The center of mass is always at the geometric center."** Only for a uniform, symmetric object. Worked example 2 shows a rod whose center of mass is 0.07 m past its midpoint.
- **"The center of mass must be inside the material."** The bracket in Worked example 1, a ring and a horseshoe all have it in empty space.
- **"Half the mass is on each side of the center of mass."** Not in general. For the pointer, the split is about 0.40 kg and 0.48 kg.
- **Dividing by the number of particles.** The formula divides by the total mass, Σmᵢ.
- **Dropping signs.** A particle at negative x must enter the sum as a negative term.
- **Confusing λ with mass.** λ is mass per unit length. You must integrate λ dx to get a mass; λ × (length) works only when λ is constant.
- **Integrating x λ and stopping there.** ∫x λ dx has unit kg·m. Divide by M to get a position.
- **"A system can always be treated as one point."** Only when the inner details do not matter for the question. A sloshing tank or a tipping load needs its internal structure.

## Where this leads

The center of mass is the dot you draw in every free-body diagram, and choosing a system decides which forces appear on it. That is the next step: [Topic 2.2, Forces and Free-Body Diagrams](/advanced-course-resources/physics-c-mechanics/2-2-forces-free-body-diagrams-study-guide/). The same "cut into dm and integrate" method returns in Unit 5 for rotational inertia, ∫r² dm, and in Unit 4 you will see why the center of mass of an isolated system keeps moving steadily however its parts move. Earlier: [Topic 1.5, Motion in Two or Three Dimensions](/advanced-course-resources/physics-c-mechanics/1-5-motion-two-three-dimensions-study-guide/). Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-1-systems-center-mass-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
