---
resourceId: "mb-ap-phys1-8.3-study-guide"
title: "Fluids and Newton’s Laws: Study Guide (Physics 1 8.3)"
description: "Apply Newton's laws to fluids: why a pressure difference makes fluid speed up, where the buoyant force comes from, and how to solve floating, sinking and spring-scale problems."
course: "physics-1"
unit: 8
topics: ["8.3"]
resourceType: "study-guide"
prerequisites:
  - "Pressure P = F⊥ / A and the change of pressure with depth, P = P₀ + ρgh (Topic 8.2)"
  - "Density ρ = m / V and the ideal-fluid model (Topic 8.1)"
  - "Free-body diagrams and Newton's first and second laws (Topics 2.2, 2.4 and 2.5)"
prerequisiteResources: ["mb-ap-phys1-8.2-study-guide"]
learningObjectives:
  - "Explain, using Newton's second law on a small piece of fluid, why fluid speeds up only when the pressure on it is different on its two sides"
  - "Explain the buoyant force as the net effect of all the pressure forces the surrounding fluid exerts on an object"
  - "Derive F_b = ρ_fluid V_disp g from the pressure difference between the top and bottom of a submerged object"
  - "Draw free-body diagrams for floating, submerged and suspended objects and use them with Newton's laws to find unknown forces, volumes and densities"
  - "Predict how a buoyant force, a submerged fraction or an acceleration changes when a density or volume changes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. g = 9.8 m/s², density of water 1000 kg/m³. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-8.3-revision-notes", "mb-ap-phys1-8.3-practice", "mb-ap-phys1-8.3-checklist"]
next: "mb-ap-phys1-8.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Newton's laws apply to every small piece of a fluid. A piece of fluid speeds up only if the forces on it do not balance, usually because the pressure behind it is greater than the pressure in front."
  - "The buoyant force is the net upward force from the fluid. It exists because pressure is greater at the bottom of an object than at the top."
  - "Its size equals the weight of the fluid the object displaces: F_b = ρ_fluid V_disp g."
  - "The buoyant force depends on the fluid's density and the displaced volume, not on the object's mass, material or depth (for a fully submerged object in an ideal fluid)."
  - "A floating object displaces its own weight of fluid, so the fraction submerged is ρ_object / ρ_fluid."
faqs:
  - question: "Should I draw the buoyant force and the pressure forces on the same free-body diagram?"
    answer: "No. The buoyant force is the sum of all the pressure forces the fluid exerts on the object. Draw either the single buoyant force or the separate pressure forces, never both, or you count the fluid's push twice."
  - question: "Does an object weigh less in water?"
    answer: "Its weight, mg, does not change. What changes is the reading on a scale holding it, because the water now supports part of the object. That reading is sometimes called the apparent weight."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, free-body diagrams and Newton's laws from Unit 2. Fluids are treated as **ideal**: incompressible, with no viscosity (Topic 8.1), unless a question says otherwise.

## Newton's laws inside a fluid

A fluid is made of a huge number of particles. You cannot track each one, but you can track a **small piece** of fluid, called a fluid element or parcel. The parcel has mass, so Newton's laws apply to it exactly as they apply to a block or a cart.

What forces act on the parcel?

- **Pressure forces** from the fluid around it, on every face. Each one pushes inwards, perpendicular to the face, with size P × A.
- **Its weight**, from the gravitational interaction with Earth.
- Forces from walls or objects it touches (in an ideal fluid, there is no friction-like viscous force).

So the behaviour of a whole fluid comes from two things: the interactions between its own particles (which show up as pressure) and the external forces on it, such as gravity and the push of a container or a pump.

### When does a fluid's velocity change?

Apply Newton's second law to a parcel moving along a horizontal pipe. Its weight is balanced by the pipe below, so only the pressure forces on its two ends matter.

- If the pressure is the **same** on both ends, the forces balance. By Newton's first law, the parcel keeps a **constant velocity** (or stays at rest).
- If the pressure behind it, P₁, is **greater** than the pressure in front, P₂, the net force points from high pressure to low pressure. The parcel **speeds up** in that direction.
- If the pressure in front is greater, the parcel **slows down**.

For a parcel of length L and end area A, its mass is m = ρAL, and the net force is (P₁ − P₂)A. Newton's second law gives

**a = (P₁ − P₂)A / (ρAL) = (P₁ − P₂) / (ρL)**

You do not need to memorise this. You need the idea behind it: **a fluid accelerates from higher pressure towards lower pressure.** A pressure difference is what makes a fluid start to flow. Topic 8.4 uses this idea with energy to build Bernoulli's equation.

### A fluid at rest: Newton's first law again

Now take a vertical column of fluid at rest, with top area A and height h. The forces on it are:

- P₀A downward on its top face (P₀ is the pressure at the top),
- its weight, ρAhg, downward,
- PA upward on its bottom face.

The column is at rest, so the net force is zero: PA = P₀A + ρAhg. Divide by A and you get **P = P₀ + ρgh**, the depth rule from Topic 8.2. Pressure grows with depth **because** each layer of fluid has to hold up the weight of the fluid above it.

## Where the buoyant force comes from

Put a solid cube in water. The water pushes on every face. The forces on the four side faces cancel in pairs, because each pair is at the same depths. But the bottom face is deeper than the top face, so the pressure there is greater. The upward push on the bottom beats the downward push on the top.

That leftover net upward force is the **buoyant force**, F_b. It is not a new kind of force. It is the total of all the pushes from the fluid particles hitting the object's surface.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-83-cube-title p1-83-cube-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-83-cube-title">Pressure forces on a submerged cube and the buoyant force they add up to</title>
<desc id="p1-83-cube-desc">Left panel: a tank of water with the surface marked at the top. A cube of side 0.10 m is held under water with its top face 0.20 m below the surface. A short arrow pushes down on the top face, labelled 19.6 N, and a longer arrow pushes up on the bottom face, labelled 29.4 N. Equal and opposite horizontal arrows push on the left and right faces and are labelled "cancel". Right panel: the same cube drawn as a dot with a single upward arrow labelled F_b = 29.4 N minus 19.6 N = 9.8 N, which equals the weight of 0.001 cubic metres of water.</desc>
<defs><marker id="p1-83-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<rect x="30" y="50" width="300" height="250" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M30 70 H330" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 4"/>
<text x="40" y="64" font-size="12" fill="#1d2b44">water surface</text>
<rect x="140" y="150" width="80" height="80" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M240 70 V150" stroke="#1d2b44" stroke-width="1"/>
<path d="M235 70 H245 M235 150 H245" stroke="#1d2b44" stroke-width="1"/>
<text x="250" y="114" font-size="12" fill="#1d2b44">0.20 m</text>
<text x="150" y="196" font-size="12" fill="#1d2b44">0.10 m</text>
<path d="M180 108 V146" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah)"/>
<text x="188" y="122" font-size="12" fill="#1d2b44">19.6 N</text>
<path d="M180 292 V234" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah)"/>
<text x="188" y="282" font-size="12" fill="#1d2b44">29.4 N</text>
<path d="M98 190 H136" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-83-ah)"/>
<path d="M262 190 H224" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-83-ah)"/>
<text x="62" y="214" font-size="12" fill="#1d2b44">cancel</text>
<text x="262" y="214" font-size="12" fill="#1d2b44">cancel</text>
<text x="180" y="320" font-size="12" fill="#1d2b44" text-anchor="middle">(a) pressure forces on each face</text>
<circle cx="450" cy="210" r="6" fill="#1d2b44"/>
<path d="M450 204 V110" stroke="#1d2b44" stroke-width="3" marker-end="url(#p1-83-ah)"/>
<text x="450" y="84" font-size="12" fill="#1d2b44" text-anchor="middle">F_b = 29.4 N − 19.6 N</text>
<text x="450" y="100" font-size="12" fill="#1d2b44" text-anchor="middle">= 9.8 N (upward)</text>
<text x="450" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">same as the weight of</text>
<text x="450" y="266" font-size="12" fill="#1d2b44" text-anchor="middle">0.0010 m³ of water</text>
<text x="450" y="320" font-size="12" fill="#1d2b44" text-anchor="middle">(b) their sum: the buoyant force</text>
</svg>
<figcaption>Figure 1. A 0.10 m cube held in water, top face 0.20 m below the surface (sketch, not to scale; gauge pressures, g = 9.8 m/s²). The top face feels 1960 Pa × 0.010 m² = 19.6 N down; the bottom face feels 2940 Pa × 0.010 m² = 29.4 N up. The side forces cancel. The net 9.8 N upward is the buoyant force. Panel (b) replaces all the arrows in panel (a); it is not an extra force.</figcaption>
</figure>

### Deriving F_b = ρVg

Take any upright block of height h and top area A, fully under a fluid of density ρ. Let its top face be at depth d.

1. Pressure on the top: P_top = P₀ + ρgd. Pressure on the bottom: P_bottom = P₀ + ρg(d + h).
2. Net upward force: F_b = P_bottom A − P_top A = ρghA.
3. The block's volume is V = Ah, so **F_b = ρ_fluid V g**.

Two things drop out of this derivation:

- **The depth d cancels.** In an ideal (incompressible) fluid, a fully submerged object feels the same buoyant force at any depth. In Figure 1, lowering the cube another metre raises both face pressures by the same amount, and F_b stays 9.8 N.
- **ρ_fluid V is the mass of fluid that would fill the object's space.** So the buoyant force equals the **weight of the fluid displaced**. If only part of the object is under the surface, use the submerged volume: **F_b = ρ_fluid V_disp g**.

Notice what is missing from the formula: the object's mass, its density and its material. A lead block and a plastic block of the same volume, both fully under water, feel the same buoyant force.

## Free-body diagrams with a buoyant force

Every buoyancy problem is a Newton's-laws problem. Draw the object, list the forces, choose a positive direction, and apply ΣF = ma.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-83-fbd-title p1-83-fbd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-83-fbd-title">Free-body diagrams for three buoyancy situations</title>
<desc id="p1-83-fbd-desc">Three free-body diagrams, each with the object drawn as a box. (a) Floating block: an upward arrow F_b and a downward arrow mg of equal length; F_b equals mg. (b) Block hanging from a spring scale, fully submerged and at rest: two upward arrows, tension T from the scale and buoyant force F_b, and one longer downward arrow mg; T plus F_b equals mg. (c) Block tied by a string to the bottom of a tank, fully submerged and at rest: a long upward arrow F_b and two downward arrows, mg and tension T; F_b equals mg plus T.</desc>
<defs><marker id="p1-83-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<rect x="70" y="130" width="50" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M95 130 V70" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah2)"/>
<path d="M95 170 V230" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah2)"/>
<text x="103" y="88" font-size="13" fill="#1d2b44">F_b</text>
<text x="103" y="226" font-size="13" fill="#1d2b44">mg</text>
<text x="95" y="268" font-size="12" fill="#1d2b44" text-anchor="middle">(a) floating</text>
<text x="95" y="286" font-size="12" fill="#1d2b44" text-anchor="middle">F_b = mg</text>
<rect x="255" y="120" width="50" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M268 120 V70" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah2)"/>
<path d="M292 120 V90" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#p1-83-ah2)"/>
<path d="M280 160 V240" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah2)"/>
<text x="232" y="84" font-size="13" fill="#1d2b44">T</text>
<text x="300" y="98" font-size="13" fill="#1d2b44">F_b (dashed)</text>
<text x="288" y="236" font-size="13" fill="#1d2b44">mg</text>
<text x="280" y="268" font-size="12" fill="#1d2b44" text-anchor="middle">(b) spring scale, under water</text>
<text x="280" y="286" font-size="12" fill="#1d2b44" text-anchor="middle">T + F_b = mg</text>
<rect x="440" y="120" width="50" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M465 120 V40" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah2)"/>
<path d="M453 160 V210" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-83-ah2)"/>
<path d="M477 160 V190" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#p1-83-ah2)"/>
<text x="473" y="58" font-size="13" fill="#1d2b44">F_b</text>
<text x="420" y="206" font-size="13" fill="#1d2b44">mg</text>
<text x="484" y="194" font-size="13" fill="#1d2b44">T (dashed)</text>
<text x="465" y="268" font-size="12" fill="#1d2b44" text-anchor="middle">(c) tied to the tank floor</text>
<text x="465" y="286" font-size="12" fill="#1d2b44" text-anchor="middle">F_b = mg + T</text>
</svg>
<figcaption>Figure 2. Free-body diagrams for an object at rest in a fluid, +y upward. Arrow lengths show relative sizes. In (a) the object floats. In (b) a spring scale holds a dense object under water; the scale reads T = mg − F_b. In (c) a string holds a light object down; the string pulls down with T = F_b − mg.</figcaption>
</figure>

### Floating

A floating object is in equilibrium, so F_b = mg. Write both sides with densities:

ρ_fluid V_sub g = ρ_object V g, so **V_sub / V = ρ_object / ρ_fluid**.

An object floats if its average density is less than the fluid's. The fraction under the surface equals the density ratio. An object with exactly the fluid's density stays wherever you put it, fully submerged. An object denser than the fluid sinks, because even when fully submerged F_b < mg.

### Sinking and rising: Newton's second law

When F_b and mg do not balance, the object accelerates. Take +y upward. For a fully submerged object just after release (before water drag builds up, which the course ignores unless told):

ma_y = F_b − mg = (ρ_fluid − ρ_object)Vg, so **a_y = g(ρ_fluid / ρ_object − 1)**

A stone of density 2500 kg/m³ released in water has a_y = 9.8 × (1000/2500 − 1) = −5.9 m/s². Its acceleration is downward but smaller than g, because the water pushes up on it. Real stones speed up less than this once drag acts.

## Worked example 1: density from two spring-scale readings

**Question.** A metal block hangs from a spring scale. In air the scale reads 5.40 N. With the block fully under water (and not touching the beaker), the scale reads 3.40 N. Find (a) the buoyant force, (b) the block's volume and (c) its density.

1. **Forces.** Take +y upward. Under water the block is at rest, so T + F_b − mg = 0 (Figure 2b). In air, T = mg = 5.40 N (air's buoyant force is tiny and ignored).
2. **(a)** F_b = mg − T = 5.40 N − 3.40 N = **2.00 N**.
3. **(b)** F_b = ρ_water V g, so V = 2.00 N ÷ (1000 kg/m³ × 9.8 m/s²) = 2.04 × 10⁻⁴ m³ ≈ **2.0 × 10⁻⁴ m³** (about 200 cm³).
4. **(c)** m = 5.40 N ÷ 9.8 m/s² = 0.551 kg, so ρ = m / V = 0.551 kg ÷ 2.04 × 10⁻⁴ m³ = **2.7 × 10³ kg/m³**.

**Shortcut and check.** Because mg = ρ_object V g and F_b = ρ_water V g, the ratio mg / F_b = ρ_object / ρ_water = 5.40 / 2.00 = 2.70. So ρ_object = 2.70 × 1000 = 2700 kg/m³, the same answer without finding V. In an oil of density 850 kg/m³, F_b would be 850 × 9.8 × 2.04 × 10⁻⁴ = 1.70 N, so the scale would read 3.70 N: a less dense fluid gives a smaller buoyant force.

## Worked example 2: how deep does a floating block sit?

**Question.** A wooden block measures 0.20 m × 0.20 m across and 0.10 m tall, with density 600 kg/m³. It floats upright in water. (a) How deep is its bottom face below the surface? (b) Predict the depth in a liquid of density 800 kg/m³. (c) What extra mass, placed on top, would just push the block fully under water?

1. **Mass and weight.** V = 0.20 × 0.20 × 0.10 = 0.0040 m³; m = 600 × 0.0040 = 2.4 kg; mg = 23.5 N.
2. **(a)** Floating, so F_b = mg. The submerged fraction is ρ_object / ρ_fluid = 600 / 1000 = 0.60. Depth = 0.60 × 0.10 m = **0.060 m**. Check: F_b = 1000 × 9.8 × (0.20 × 0.20 × 0.060) = 23.5 N, equal to mg.
3. **(b)** The weight is the same, so the block must still displace 2.4 kg of liquid. Depth is inversely proportional to the liquid's density: 0.060 m × (1000/800) = **0.075 m**. A less dense liquid means the block sits lower.
4. **(c)** Fully submerged, F_b = 1000 × 9.8 × 0.0040 = 39.2 N. The total weight must equal this: (2.4 kg + M)g = 39.2 N, so M = 4.0 − 2.4 = **1.6 kg**.

**Interpretation.** In (a) and (b) the buoyant force is the **same** (23.5 N) in both liquids. Only the displaced volume changes. That is a common exam trap.

## Worked example 3: a pressure difference accelerates water

**Question.** Water fills a horizontal pipe of cross-sectional area 2.0 × 10⁻⁴ m². Consider a short slug of water 0.050 m long. At one instant, the pressure on its left end is 400 Pa greater than on its right end. Find its acceleration and say which way it points.

1. **System:** the slug of water. Take +x to the right.
2. **Mass:** m = ρAL = 1000 × 2.0 × 10⁻⁴ × 0.050 = 0.010 kg.
3. **Net force:** the pressures on the two ends differ by 400 Pa, so ΣF_x = ΔP × A = 400 × 2.0 × 10⁻⁴ = +0.080 N (to the right, from high to low pressure). Weight and the pipe's normal force are vertical and cancel.
4. **Newton's second law:** a_x = 0.080 N ÷ 0.010 kg = **+8.0 m/s²**, towards the lower-pressure end.

**Check.** The formula a = ΔP / (ρL) gives 400 ÷ (1000 × 0.050) = 8.0 m/s². If the two pressures were equal, a_x would be zero and the water would keep moving at a constant velocity: an ideal fluid needs no push to keep flowing in a level pipe, just as a puck on frictionless ice needs no push to keep sliding.

## Common misconceptions

- **"Things float because they are light."** A 10 kg log floats and a 1 g pin sinks. What matters is average **density** compared with the fluid, not mass or weight.
- **"Deeper water pushes up harder."** For a fully submerged object in an ideal fluid, both face pressures rise by the same amount with depth, so F_b does not change (derivation above).
- **"The buoyant force depends on what the object is made of."** It depends on ρ_fluid and V_disp only. Material matters for the object's weight, which decides whether it floats.
- **"An object always displaces its own weight of water."** Only a floating object does. A sinking object displaces its own **volume**, and that water weighs less than the object.
- **"In water the object weighs less."** Its weight mg is unchanged. The scale reading falls because the fluid now supports part of it.
- **Drawing both F_b and the pressure forces.** The buoyant force *is* the sum of the pressure forces. Pick one description (Figure 1).
- **"A fluid needs a pressure difference to keep moving."** It needs a pressure difference to **change** its velocity. Equal pressures on both ends mean constant velocity (Worked example 3).
- **Forgetting the third-law partner.** If the water pushes up on a hanging block with F_b, the block pushes down on the water with F_b. A balance under the beaker reads more by exactly F_b.

## Where this leads

Topic 8.4 (Fluids and Conservation Laws) follows moving fluids. Mass conservation gives the continuity equation, and energy conservation turns this topic's "fluid speeds up towards low pressure" into Bernoulli's equation. Read the [Topic 8.4 study guide](/advanced-course-resources/physics-1/8-4-fluids-conservation-laws-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-practice/), then use the [revision notes](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/8-3-fluids-newtons-laws-checklist/) to consolidate. To review pressure and depth, go back to [Topic 8.2](/advanced-course-resources/physics-1/8-2-pressure-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
