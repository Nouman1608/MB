---
resourceId: "mb-ap-phys2-9.5-study-guide"
title: "Specific Heat and Thermal Conductivity: Study Guide (Physics 2 9.5)"
description: "Learn how much energy it takes to change an object's temperature, Q = mcΔT, and how fast energy is conducted through a material, Q/Δt = kAΔT/L, with graphs and worked examples."
course: "physics-2"
unit: 9
topics: ["9.5"]
resourceType: "study-guide"
prerequisites:
  - "Heating, cooling and thermal equilibrium between systems in thermal contact (Topic 9.3)"
  - "The first law ΔU = Q + W and the meaning of Q (Topic 9.4)"
  - "Power as energy transferred per unit time"
prerequisiteResources: ["mb-ap-phys2-9.4-study-guide"]
learningObjectives:
  - "Calculate the energy needed to change the temperature of an object using its mass and specific heat"
  - "Explain why specific heat is a property of the material, set by its atoms and how they interact"
  - "Find a specific heat from a graph of temperature against energy supplied, or from heater data"
  - "Use energy conservation to find the final temperature when objects reach thermal equilibrium"
  - "Calculate the rate of energy transfer by conduction through a slab and predict how it changes when k, A, ΔT or L change"
  - "Explain why thermal conductivity depends on the material, and why metals conduct far better than gases"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Take c for water as 4180 J/(kg·K) unless a question gives another value. Temperature changes are the same in K and °C. Keep unrounded values until the final step"
related: ["mb-ap-phys2-9.5-revision-notes", "mb-ap-phys2-9.5-practice", "mb-ap-phys2-9.5-checklist"]
next: "mb-ap-phys2-9.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The energy needed to change an object's temperature is Q = mcΔT, where c is the specific heat of the material."
  - "A high specific heat means a small temperature change for a given energy. In this course c does not depend on temperature."
  - "Specific heat and thermal conductivity are intrinsic: they belong to the material, not to the size or shape of the object."
  - "The rate of conduction through a slab is Q/Δt = kAΔT/L: larger area or temperature difference means faster transfer; a thicker slab means slower transfer."
  - "When objects reach thermal equilibrium in an isolated system, the energy lost by the hotter ones equals the energy gained by the cooler ones."
faqs:
  - question: "Is a temperature change in °C the same as in K?"
    answer: "Yes. A kelvin and a degree Celsius are the same size, so ΔT has the same number in both scales. Only when you need an absolute temperature, as in PV = nRT, must you use kelvin."
  - question: "Why does a metal handle feel colder than a wooden one at the same temperature?"
    answer: "Both are at the same temperature. Metal has a much higher thermal conductivity, so it conducts energy away from your hand much faster. Your skin cools faster, and that is what you feel."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Energy to change temperature

In Topic 9.4 you met Q, the energy transferred to a system by heating. Now ask a practical question: **how much energy does it take to warm an object by a certain amount?**

The energy needed is proportional to the **mass** you heat and to the **temperature change** you want, and it depends on **what the object is made of**:

**Q = mcΔT**

- Q is the energy transferred to the object by heating, in J. Q > 0 when the temperature rises; Q < 0 when the object cools.
- m is the mass, in kg.
- ΔT = T_final − T_initial, in K (or °C; a change is the same number in both).
- c is the **specific heat** of the material, in J/(kg·K). It is the energy needed to raise 1 kg of the material by 1 K.

For example, warming 1.0 kg of water by 10 K takes (1.0 kg)(4180 J/(kg·K))(10 K) = 41,800 J. The same for copper takes only about 3,850 J, roughly one-eleventh as much.

So **for the same energy and mass, a material with a high c has a small temperature change.**

### Links to the first law

For solids and liquids the volume barely changes, so the work done on them is close to zero. Then ΔU = Q + W gives **ΔU ≈ Q = mcΔT**: the energy supplied by heating goes into internal energy, and the temperature rises.

### What this course assumes

- **c is constant.** Real values change a little with temperature, but this course models c as independent of temperature.
- **No change of state.** Q = mcΔT applies while the material stays solid, liquid or gas. Melting and boiling are not part of this topic.

## Why materials have different specific heats

Specific heat is an **intrinsic property** of the material. A 1 g copper bead and a 5 kg copper block have the same c; the block needs more energy for the same ΔT only because m is larger.

What sets c is the **arrangement of the atoms and how they interact**:

- **How many particles are in a kilogram.** In many simple solids, each atom stores about the same energy per kelvin. A kilogram of light atoms contains more atoms than a kilogram of heavy atoms, so it needs more energy per kelvin.
- **How many ways the particles can store energy.** Molecules can rotate and vibrate, and the bonds between them can stretch. Energy that goes into these motions does not all show up as faster random motion, so more energy is needed per kelvin. Water molecules interact strongly with each other, which is one reason water's c is so high.

| Material | Approximate c near room temperature (J/(kg·K)) |
|---|---|
| Water (liquid) | 4180 |
| Aluminium | 900 |
| Copper | 385 |
| Lead | 130 |

*Background, beyond the course:* per mole of atoms (27 g, 64 g and 207 g), the three metals need about 24 J, 24 J and 27 J per kelvin. Per atom they are almost the same; their values of c per kilogram differ mainly because their atoms have different masses.

## Reading a temperature–energy graph

If a heater of power P runs for a time Δt and all its energy goes into an object, then Q = PΔt. Plot the temperature T (vertical) against the energy supplied Q (horizontal). From Q = mcΔT:

**slope = ΔT/Q = 1/(mc)**

A **steeper** line means a **smaller** mc: the object warms up more for each joule.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="tq-title tq-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tq-title">Temperature against energy supplied for two 0.50 kg metal blocks</title>
<desc id="tq-desc">Temperature, 20 to 60 degrees Celsius, against energy supplied, 0 to 8000 joules. Both straight lines start at 20 degrees Celsius. Block A, solid, reaches 36.0 degrees Celsius at 7200 joules. Block B, dashed and steeper, reaches 57.4 degrees Celsius at 7200 joules.</desc>
<defs><marker id="tq-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#tq-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#tq-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="360">0</text>
<line x1="190" y1="340" x2="190" y2="346" stroke="#1d2b44"/><text x="190" y="360">2000</text>
<line x1="300" y1="340" x2="300" y2="346" stroke="#1d2b44"/><text x="300" y="360">4000</text>
<line x1="410" y1="340" x2="410" y2="346" stroke="#1d2b44"/><text x="410" y="360">6000</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">8000</text>
<text x="300" y="385" font-size="13">Energy supplied Q (J)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="344">20</text>
<line x1="74" y1="270" x2="80" y2="270" stroke="#1d2b44"/><text x="70" y="274">30</text>
<line x1="74" y1="200" x2="80" y2="200" stroke="#1d2b44"/><text x="70" y="204">40</text>
<line x1="74" y1="130" x2="80" y2="130" stroke="#1d2b44"/><text x="70" y="134">50</text>
<line x1="74" y1="60" x2="80" y2="60" stroke="#1d2b44"/><text x="70" y="64">60</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Temperature T (°C)</text>
<line x1="476" y1="340" x2="476" y2="78.2" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="80" y1="340" x2="476" y2="228" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="340" x2="476" y2="78.2" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<circle cx="476" cy="228" r="4" fill="#1d2b44"/>
<circle cx="476" cy="78.2" r="4" fill="#fff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="468" y="216" text-anchor="end">(7200 J, 36.0 °C)</text>
<text x="468" y="72" text-anchor="end">(7200 J, 57.4 °C)</text>
<text x="370" y="302" text-anchor="middle">Block A (solid line)</text>
<text x="250" y="180" text-anchor="end">Block B (dashed line)</text>
</g>
</svg>
<figcaption>Figure 1. Two blocks of equal mass, 0.50 kg, heated from 20 °C. Block A (solid line, filled dot) reaches 36.0 °C after 7200 J; block B (dashed line, open dot) reaches 57.4 °C after the same 7200 J. B's line is steeper, so B's material has the smaller specific heat.</figcaption>
</figure>

With a heater of constant power P, Q = PΔt, so a graph of T against time t has slope **P/(mc)**. A best-fit line through plotted data gives a better value of c than one pair of readings, because it averages out reading errors.

## Thermal equilibrium and mixing

Put a hot and a cold object in thermal contact inside an insulated container (an isolated system). Energy flows from hot to cold until both reach the same temperature T_f (Topic 9.3). No energy leaves, so:

**energy lost by the hotter objects = energy gained by the cooler objects**

or, with signs, the sum of all the Q values is zero: Σ mcΔT = 0. Two checks catch most errors:

- T_f must lie **between** the starting temperatures.
- T_f is closer to the starting temperature of the object with the **larger mc**. It is the simple average only when the two values of mc are equal.

## Conduction through a slab

**Conduction** is energy transfer through a material by collisions and interactions between neighbouring particles, with no bulk movement of the material. Think of a flat slab with one face at a higher temperature T_H and the other at a lower temperature T_C.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="slab-title slab-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="slab-title">Energy conducted through a slab</title>
<desc id="slab-desc">A slab in perspective. Three arrows labelled energy flow, rate Q over delta t, pass through it from left to right. The hidden left face, dashed, is the hot face at T H. The hatched right face is the cold face at T C, with area A. A double-headed arrow under the slab marks the thickness L between the faces.</desc>
<defs>
<marker id="slab-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="slab-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern>
</defs>
<polygon points="200,80 330,80 380,40 250,40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<polygon points="200,80 330,80 330,230 200,230" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<polygon points="330,80 380,40 380,190 330,230" fill="url(#slab-hatch)" stroke="#1d2b44" stroke-width="2"/>
<polygon points="200,80 250,40 250,190 200,230" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<g stroke="#1d2b44" stroke-width="2.5">
<line x1="120" y1="120" x2="450" y2="120" marker-end="url(#slab-arr)"/>
<line x1="120" y1="155" x2="450" y2="155" marker-end="url(#slab-arr)"/>
<line x1="120" y1="190" x2="450" y2="190" marker-end="url(#slab-arr)"/>
</g>
<line x1="200" y1="255" x2="330" y2="255" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#slab-arr)" marker-end="url(#slab-arr)"/>
<g font-size="13" fill="#1d2b44">
<text x="265" y="280" text-anchor="middle">thickness L</text>
<text x="190" y="30" text-anchor="end">Hot face (hidden), T_H</text>
<line x1="192" y1="34" x2="222" y2="62" stroke="#1d2b44" stroke-width="1"/>
<text x="400" y="30" text-anchor="start">Cold face, T_C, area A</text>
<line x1="410" y1="36" x2="372" y2="70" stroke="#1d2b44" stroke-width="1"/>
<text x="20" y="108">Energy flow, rate Q/Δt</text>
</g>
</svg>
<figcaption>Figure 2. Energy is conducted through a slab of thickness L, from the hot face (T_H, left, dashed outline) to the cold face (T_C, right, hatched). A is the area of each of these faces, at right angles to the flow. The arrows show the direction of energy flow, from higher to lower temperature.</figcaption>
</figure>

Once the temperatures of the two faces are steady, the rate of energy transfer is:

**Q/Δt = kAΔT/L**

- Q/Δt is the rate of energy transfer, in J/s = W.
- k is the **thermal conductivity** of the material, in W/(m·K).
- A is the area the energy flows through, in m².
- ΔT = T_H − T_C is the temperature difference across the slab.
- L is the thickness (or length) the energy must travel, in m.

A larger A gives more paths side by side; a larger ΔT drives energy faster; a larger L means further to travel, so Q/Δt ∝ 1/L. Units check: (W/(m·K)) × m² × K ÷ m = W.

Use the equation to predict **factors of change**. Double A and the rate doubles. Double L and the rate halves. Double ΔT and halve A, and the rate stays the same.

The equation assumes a steady state (temperatures not changing with time), a uniform slab and energy flowing straight through, not out of the sides.

## Why thermal conductivity depends on the material

Like c, the thermal conductivity k is an **intrinsic property** of the material, set by the arrangement and interactions of its atoms. The *rate* of conduction is not intrinsic: it also depends on A, L and ΔT.

- **Metals** have electrons free to move through the whole solid, carrying energy quickly from hot to cold regions. Metals have high k.
- **Non-metal solids** (glass, wood, plastic) pass energy mainly through vibrations of bonded atoms. This is slower, so k is lower.
- **Gases** have particles far apart that collide rarely, so k is very small. Foams and wool work by trapping still air.

| Material | Approximate k near room temperature (W/(m·K)) |
|---|---|
| Copper | 400 |
| Aluminium | 240 |
| Glass | about 1 |
| Water | 0.6 |
| Wood | 0.1 to 0.2 |
| Plastic foam | 0.03 |
| Air (still) | 0.025 |

Do not mix up c and k. Water has a high c but a low k; copper has a low c but a high k.

## Worked example 1: finding c from a graph

**Question.** Block A in Figure 1 (0.50 kg) is warmed by a 40 W heater for 180 s, and all the heater's energy goes into it. Use the graph to find its specific heat. Then predict the final temperature of block B (same mass, c = 385 J/(kg·K)) after the same heating.

1. Energy supplied: Q = PΔt = (40 W)(180 s) = 7200 J.
2. Read the graph: block A goes from 20.0 °C to 36.0 °C, so ΔT = 16.0 K.
3. Rearrange Q = mcΔT: c = Q/(mΔT) = 7200 J ÷ [(0.50 kg)(16.0 K)] = 900 J/(kg·K).
4. Block B: ΔT = Q/(mc) = 7200 J ÷ [(0.50 kg)(385 J/(kg·K))] = 37.4 K. Final temperature = 20.0 °C + 37.4 K = 57.4 °C.

**Answer.** c_A = 900 J/(kg·K); block B ends at about 57 °C.

**Check.** B's slope is 900/385 = 2.34 times A's, as slope = 1/(mc) predicts. In a real experiment some energy leaks to the air, so ΔT is too small and the calculated c comes out **too large**. Insulating the block reduces this error.

## Worked example 2: tea in a cold mug

**Question.** 0.25 kg of water at 80.0 °C is poured into a 0.30 kg mug at 20.0 °C. Take c = 850 J/(kg·K) for the mug. Assume no energy leaves the water and the mug. Find their final common temperature.

1. Work out mc for each object. Water: (0.25 kg)(4180 J/(kg·K)) = 1045 J/K. Mug: (0.30 kg)(850 J/(kg·K)) = 255 J/K.
2. Energy lost by water = energy gained by mug: 1045(80.0 − T_f) = 255(T_f − 20.0).
3. Expand: 83,600 − 1045 T_f = 255 T_f − 5100.
4. Collect terms: 88,700 = 1300 T_f, so T_f = 68.2 °C.

**Answer.** T_f ≈ 68 °C.

**Check.** Water loses 1045 × (80.0 − 68.23) ≈ 12,300 J; the mug gains 255 × (68.23 − 20.0) ≈ 12,300 J, so energy is conserved. T_f is between 20 °C and 80 °C, and much closer to 80 °C because the water's mc is about four times the mug's. The simple average, 50 °C, would be wrong.

## Worked example 3: conduction through a window

**Question.** A glass window pane is 1.2 m by 0.80 m and 4.0 mm thick. Take k = 0.80 W/(m·K) for the glass. The inner surface of the glass is at 12.0 °C and the outer surface is at 10.0 °C. (a) Find the rate of energy transfer through the glass. (b) How much energy passes through in 1.0 hour? (c) A different pane is 6.0 mm thick with a 3.0 K temperature difference across it. Predict the new rate without a full recalculation.

1. Area: A = (1.2 m)(0.80 m) = 0.96 m². Thickness: L = 4.0 × 10⁻³ m. ΔT = 2.0 K.
2. (a) Q/Δt = kAΔT/L = (0.80)(0.96)(2.0) ÷ (4.0 × 10⁻³) = 384 W.
3. (b) Q = (384 W)(3600 s) = 1.38 × 10⁶ J, about 1.4 MJ.
4. (c) ΔT goes up by a factor 3.0/2.0 = 1.5. L goes up by a factor 6.0/4.0 = 1.5, which divides the rate by 1.5. The two factors cancel, so the rate is still **384 W**.

**Interpretation.** In a real window, thin layers of still air on each side of the glass take most of the temperature difference between room and outside, so the two glass surfaces are much closer in temperature than the room air and the outside air.

## Common misconceptions

- **"Heat and temperature are the same thing."** Temperature relates to the average kinetic energy of the particles; Q is energy transferred. Warming a bath by 5 K takes far more energy than warming a cup by 5 K.
- **"A high specific heat means the material heats up quickly."** It is the opposite. A high c means a lot of energy per kelvin, so the temperature changes slowly.
- **"The metal is colder than the wood."** Objects left in the same room reach the same temperature. Metal *feels* colder because its high k conducts energy away from your hand faster.
- **Taking the simple average as the final temperature.** It works only when the two values of mc are equal.
- **Treating k as the rate of conduction.** k belongs to the material. The rate also depends on A, ΔT and L.
- **"A thicker slab conducts more energy."** A thicker slab conducts less: Q/Δt ∝ 1/L.
- **Adding 273 to a temperature change.** A change of 16 °C is a change of 16 K, not 289 K.

## Where this leads

Conduction always carries energy from hot to cold, never the other way on its own. Topic 9.6, [Entropy and the Second Law of Thermodynamics](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-study-guide/), explains why. Before moving on, test yourself with the [practice questions](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-practice/), then use the [revision notes](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-checklist/) to consolidate. The previous topic, [the first law of thermodynamics](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-study-guide/), explains where Q fits in ΔU = Q + W.
