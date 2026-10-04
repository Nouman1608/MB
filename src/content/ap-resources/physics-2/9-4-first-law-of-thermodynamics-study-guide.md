---
resourceId: "mb-ap-phys2-9.4-study-guide"
title: "The First Law of Thermodynamics: Study Guide (Physics 2 9.4)"
description: "Build the first law from energy conservation: internal energy of an ideal gas, heating versus work, PV diagrams, the four special processes and a full cycle."
course: "physics-2"
unit: 9
topics: ["9.4"]
resourceType: "study-guide"
prerequisites:
  - "The ideal gas law PV = nRT (Topic 9.2)"
  - "Temperature as a measure of average molecular kinetic energy (Topic 9.1)"
  - "Work as force × displacement, and conservation of energy"
learningObjectives:
  - "Describe the internal energy of a system and of an ideal monatomic gas"
  - "Apply ΔU = Q + W with W as the work done on the gas, using the correct signs"
  - "Find the work done on a gas from the area under a PV graph and the direction of the process"
  - "Describe isochoric, isobaric, isothermal and adiabatic processes as limiting cases of the first law"
  - "Analyse a closed cycle on a PV diagram"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "R = 8.31 J/(mol·K). Keep unrounded values until the final step"
related: ["mb-ap-phys2-9.4-revision-notes", "mb-ap-phys2-9.4-practice", "mb-ap-phys2-9.4-checklist"]
next: "mb-ap-phys2-9.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The first law is energy conservation for a gas: ΔU = Q + W."
  - "In this course W is the work done ON the gas, so W = −PΔV. Expansion gives W < 0; compression gives W > 0."
  - "For an ideal monatomic gas U = (3/2)nRT, so U changes only when T changes."
  - "On a PV diagram the area under the path gives |W|; the direction of the path gives the sign."
  - "Around a closed cycle ΔU = 0, so the net Q equals minus the net W."
faqs:
  - question: "Some textbooks write ΔU = Q − W. Which is right?"
    answer: "Both are correct with their own definition of W. Those books use W for the work done BY the gas. This course defines W as the work done ON the gas, which gives ΔU = Q + W. Use the course convention on the exam and say which W you mean."
  - question: "Does a gas have internal energy if it is not moving?"
    answer: "Yes. Internal energy is the kinetic energy of the particles moving randomly inside the gas, plus any potential energy between them. A gas in a stationary container still has U > 0 because its atoms move."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Energy inside a gas

Pick a system: the gas inside a cylinder. The gas is made of a huge number of atoms moving in random directions. The **internal energy U** of the system is the total of two parts:

- the kinetic energy of all the particles, and
- the potential energy stored in how the particles are arranged (the forces between them).

An **ideal gas** is a model in which the particles do not interact with each other through conservative forces. So an ideal gas has no internal potential energy. For an ideal **monatomic** gas (single atoms, no internal structure), U is just the total kinetic energy of the atoms:

**U = (3/2) nRT = (3/2) N k_B T**

Here n is the amount in moles, R = 8.31 J/(mol·K), T is the absolute temperature in kelvin, N is the number of atoms and k_B is Boltzmann's constant. In this course you should assume an ideal gas is monatomic unless told otherwise.

Two consequences follow:

1. **U depends only on T** (for a fixed amount of ideal gas). If T does not change, U does not change.
2. Because PV = nRT, you can also write **U = (3/2) PV**. This is very useful on PV diagrams: the product PV at a point tells you U.

Changing U changes the random motion inside the gas. It does not move the container. A box of hot gas on a table is not moving any faster than a box of cold gas.

## Two ways to change internal energy

Energy can enter or leave the gas in two different ways.

- **Heating, Q.** Energy moves because of a temperature difference between the gas and its surroundings. Q > 0 means energy enters the gas by heating; Q < 0 means energy leaves (the gas is cooled).
- **Work, W.** Energy moves because a force pushes a boundary through a distance, for example a piston. In this course **W is the work done ON the gas**. W > 0 means the surroundings push in and give energy to the gas.

Conservation of energy for a closed system (no gas enters or leaves) then gives the **first law of thermodynamics**:

**ΔU = Q + W**

Read it as: change in internal energy = energy added by heating + work done on the gas. If the system is isolated (no heating and no work), ΔU = 0 and the total energy is constant.

Heat and work are **transfers**, not things the gas "contains". A gas has internal energy. It does not have "an amount of heat".

### Work done by a piston

Suppose the gas pushes on a piston of area A with pressure P, and the piston moves outward a distance d. The gas pushes with force F = PA, so the gas does work PAd = PΔV on the piston, where ΔV = Ad. The work done **on** the gas is the negative of this:

**W = −PΔV** (constant or average pressure)

- Expansion: ΔV > 0, so W < 0. The gas gives energy to the surroundings.
- Compression: ΔV < 0, so W > 0. The surroundings give energy to the gas.

Units check: Pa × m³ = (N/m²) × m³ = N·m = J.

## PV diagrams

A PV diagram plots pressure (vertical, Pa) against volume (horizontal, m³). Each point is one state of the gas. A path between points is a process.

- The **area under the path**, down to the V axis, equals the **magnitude** of the work done on the gas.
- The **direction** of the path fixes the sign: moving right (expansion) means W < 0; moving left (compression) means W > 0; a vertical path (constant V) means W = 0.
- A curve along which T is constant is an **isotherm**. For an ideal gas it is the curve PV = constant. Isotherms further from the origin are at higher temperatures.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="pv-cycle-title pv-cycle-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pv-cycle-title">PV diagram of a rectangular cycle with one isotherm</title>
<desc id="pv-cycle-desc">Pressure in pascals on the vertical axis from 0 to 3.5 times 10 to the 5, volume in cubic metres on the horizontal axis from 0 to 4 times 10 to the minus 3. A clockwise rectangular cycle: A at 1.0 times 10 to the minus 3 cubic metres and 2.0 times 10 to the 5 pascals, B at 3.0 times 10 to the minus 3 and 2.0 times 10 to the 5, C at 3.0 times 10 to the minus 3 and 1.0 times 10 to the 5, D at 1.0 times 10 to the minus 3 and 1.0 times 10 to the 5. The enclosed rectangle is shaded. A dashed curve, the isotherm PV equals 300 joules, passes through C and through the point on AB where the volume is 1.5 times 10 to the minus 3 cubic metres.</desc>
<defs><marker id="pv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="190" y="180" width="220" height="80" fill="#fdf6e3" stroke="none"/>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#pv-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#pv-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="190" y1="340" x2="190" y2="346" stroke="#1d2b44"/><text x="190" y="360">1.0</text>
<line x1="300" y1="340" x2="300" y2="346" stroke="#1d2b44"/><text x="300" y="360">2.0</text>
<line x1="410" y1="340" x2="410" y2="346" stroke="#1d2b44"/><text x="410" y="360">3.0</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">4.0</text>
<text x="300" y="385" font-size="13">Volume V (× 10⁻³ m³)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="260" x2="80" y2="260" stroke="#1d2b44"/><text x="70" y="264">1.0</text>
<line x1="74" y1="180" x2="80" y2="180" stroke="#1d2b44"/><text x="70" y="184">2.0</text>
<line x1="74" y1="100" x2="80" y2="100" stroke="#1d2b44"/><text x="70" y="104">3.0</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Pressure P (× 10⁵ Pa)</text>
<polyline points="190.0,100.0 212.0,140.0 234.0,168.6 245.0,180.0 256.0,190.0 278.0,206.7 300.0,220.0 327.5,233.3 355.0,244.0 382.5,252.7 410.0,260.0 454.0,269.4 498.0,276.8" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="488" y="296" font-size="12" fill="#1d2b44" text-anchor="middle">isotherm PV = 300 J</text>
<path d="M190 180 H300" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pv-arr)"/>
<path d="M300 180 H410 V220" stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#pv-arr)"/>
<path d="M410 220 V260 H300" stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#pv-arr)"/>
<path d="M300 260 H190 V220" stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#pv-arr)"/>
<path d="M190 220 V180" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<g font-size="14" font-weight="600" fill="#1d2b44">
<text x="176" y="172">A</text><text x="416" y="172">B</text><text x="416" y="276">C</text><text x="176" y="276">D</text>
</g>
<text x="250" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">enclosed area = 200 J</text>
</svg>
<figcaption>Figure 1. A clockwise cycle A → B → C → D → A (solid path with arrows; shaded region is the enclosed area). The dashed curve is the isotherm PV = 300 J: every point on it has the same temperature, and it passes through C and through the point (1.5 × 10⁻³ m³, 2.0 × 10⁵ Pa) on AB.</figcaption>
</figure>

## Four special processes

Each special process sets one quantity to zero or holds one variable fixed. Then the first law becomes simpler. These are limiting, idealised cases; real processes lie somewhere between them.

| Process | What is fixed | Work on gas W | ΔU | Q |
|---|---|---|---|---|
| Isochoric (isovolumetric) | V constant | 0 | (3/2)nRΔT | Q = ΔU |
| Isobaric | P constant | −PΔV = −nRΔT | (3/2)nRΔT | Q = ΔU − W = (5/2)nRΔT |
| Isothermal | T constant | area under the isotherm, with sign | 0 | Q = −W |
| Adiabatic | no heating, Q = 0 | equals ΔU | ΔU = W | 0 |

Points to notice:

- **Isothermal expansion.** T stays fixed, so ΔU = 0. The gas does work on the piston (W < 0), so energy must enter by heating: Q = −W > 0. This needs slow expansion in good thermal contact with a reservoir.
- **Adiabatic.** No energy moves by heating, either because the walls are insulated or because the process is too fast. All of the work goes into U. Compress a gas adiabatically with 150 J of work and ΔU = +150 J, so its temperature rises. For 0.10 mol of monatomic gas, ΔT = 150 J ÷ [(3/2)(0.10 mol)(8.31 J/(mol·K))] = 120 K.
- On a PV diagram an adiabatic curve through a point is **steeper** than the isotherm through the same point. In an adiabatic expansion the gas cools, so its pressure falls faster than along the isotherm.

## Cycles

In a **cycle** the gas returns to its starting state. U depends only on the state, so over a full cycle:

**ΔU_cycle = 0, so Q_net = −W_net**

The magnitude of the net work equals the **area enclosed** by the loop. For a **clockwise** loop the expansion happens at higher pressure than the compression, so the gas does more work than is done on it: W_net < 0 and Q_net > 0. That is how a heat engine works. A counterclockwise loop gives W_net > 0 and Q_net < 0.

## Worked example 1: heating a gas at constant pressure

**Question.** 0.50 mol of an ideal monatomic gas is held at a constant pressure of 1.2 × 10⁵ Pa by a freely moving piston. It is heated from 300 K to 400 K. Find the work done on the gas, the change in internal energy and the energy added by heating.

1. Temperature change: ΔT = 400 K − 300 K = 100 K.
2. Volume change from PV = nRT at constant P: ΔV = nRΔT / P = (0.50 mol)(8.31 J/(mol·K))(100 K) ÷ (1.2 × 10⁵ Pa) = 3.46 × 10⁻³ m³. ΔV is positive, so the gas expands.
3. Work done on the gas: W = −PΔV = −(1.2 × 10⁵ Pa)(3.4625 × 10⁻³ m³) = −415.5 J. (Check: −nRΔT = −(0.50)(8.31)(100) = −415.5 J.)
4. Change in internal energy: ΔU = (3/2)nRΔT = 1.5 × 0.50 × 8.31 × 100 = 623.25 J.
5. First law: Q = ΔU − W = 623.25 J − (−415.5 J) = 1038.75 J.

**Answer.** W = −416 J, ΔU = +623 J, Q = +1.04 × 10³ J. The data have 2 significant figures, so −4.2 × 10² J, +6.2 × 10² J and +1.0 × 10³ J are equally acceptable.

**Interpretation and check.** Q = (5/2)nRΔT = 1038.75 J, which agrees. Only 623/1039 = 60% of the energy supplied by heating stays in the gas. The other 40% leaves as work done by the gas on the piston. That is why heating at constant pressure needs more energy than heating at constant volume for the same ΔT.

## Worked example 2: a full cycle

**Question.** An ideal monatomic gas follows the cycle in Figure 1: A (1.0 × 10⁻³ m³, 2.0 × 10⁵ Pa) → B (3.0 × 10⁻³ m³, 2.0 × 10⁵ Pa) → C (3.0 × 10⁻³ m³, 1.0 × 10⁵ Pa) → D (1.0 × 10⁻³ m³, 1.0 × 10⁵ Pa) → A. Find W, ΔU and Q for each step and for the whole cycle.

1. Internal energy at each corner, using U = (3/2)PV: U_A = 1.5 × 200 J = 300 J; U_B = 1.5 × 600 J = 900 J; U_C = 1.5 × 300 J = 450 J; U_D = 1.5 × 100 J = 150 J.
2. A → B (isobaric expansion): W = −(2.0 × 10⁵ Pa)(2.0 × 10⁻³ m³) = −400 J. ΔU = 900 − 300 = +600 J. Q = 600 − (−400) = +1000 J.
3. B → C (isochoric): W = 0. ΔU = 450 − 900 = −450 J. Q = −450 J.
4. C → D (isobaric compression): W = −(1.0 × 10⁵ Pa)(−2.0 × 10⁻³ m³) = +200 J. ΔU = 150 − 450 = −300 J. Q = −300 − 200 = −500 J.
5. D → A (isochoric): W = 0. ΔU = 300 − 150 = +150 J. Q = +150 J.

| Step | W (J) | ΔU (J) | Q (J) |
|---|---|---|---|
| A → B | −400 | +600 | +1000 |
| B → C | 0 | −450 | −450 |
| C → D | +200 | −300 | −500 |
| D → A | 0 | +150 | +150 |
| **Cycle** | **−200** | **0** | **+200** |

**Check.** ΔU sums to zero, as it must for a cycle. The enclosed rectangle has area (1.0 × 10⁵ Pa)(2.0 × 10⁻³ m³) = 200 J, which matches |W_net|. The loop is clockwise, so W_net is negative: the gas does 200 J of net work on its surroundings, supplied by a net 200 J of heating.

## Common misconceptions

- **Using the "work done by the gas" sign without saying so.** In this course W is the work done on the gas. An expanding gas has W < 0. Mixing the two conventions flips the sign of your answer.
- **"Heat means hot."** Q is a transfer of energy, not a property of the gas. A gas can be heated (Q > 0) and still cool down, if it does even more work on its surroundings.
- **"Isothermal means no heating."** Isothermal means constant T, so ΔU = 0. Heating is usually needed to keep T constant. Adiabatic is the process with Q = 0.
- **"Adiabatic means constant temperature."** In an adiabatic process the temperature changes, because all the work changes U.
- **Taking the area under the curve as always positive.** The area gives the size of W. The direction of the path gives its sign.
- **Thinking W depends only on the end points.** Different paths between the same two states have different areas, so W and Q depend on the path. Only ΔU depends on the end points alone.
- **Using Celsius in U = (3/2)nRT.** T must be in kelvin. (A temperature *difference* is the same in K and °C.)

## Where this leads

The first law sets up Topic 9.5 (specific heat and thermal conductivity) and Topic 9.6, where the second law tells you which way heat flows and why no cycle can turn all of Q into work. Test yourself with the [practice questions](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-practice/), then use the [revision notes](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/9-4-first-law-of-thermodynamics-checklist/) to consolidate.
