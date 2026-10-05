---
resourceId: "mb-ap-physcem-u12-review"
title: "Magnetic Fields and Electromagnetism: Mixed Unit Review (Physics C: E&M Unit 12)"
description: "A mixed review of Unit 12: the big ideas that link magnetic fields, moving charges, the Biot-Savart law and Ampère's law, a summary table and seven original questions that combine topics, with rubrics."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 12.1 to 12.4"
  - "Vector cross products, circular motion and Gauss's law (Topic 8.6)"
prerequisiteResources: ["mb-ap-physcem-u12-diagnostic"]
learningObjectives:
  - "Connect the sources of magnetic field (moving charges and currents) with the forces fields exert on them"
  - "Choose between the Biot-Savart law and Ampère's law for a given current distribution"
  - "Solve multi-step problems that combine two or more Unit 12 topics, including superposition"
  - "Check answers with right-hand rules, limiting cases and the zero-work property of the magnetic force"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A; e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg; proton mass 1.67 × 10⁻²⁷ kg. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u12-diagnostic", "mb-ap-physcem-12.1-checklist", "mb-ap-physcem-12.2-checklist", "mb-ap-physcem-12.3-checklist", "mb-ap-physcem-12.4-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Moving charge is both the source of magnetic field and the thing it pushes on: F = q(v × B) and dF = I dℓ × B."
  - "Field lines always close (∮B·dA = 0); there are no magnetic monopoles."
  - "Use Biot-Savart for loops, arcs and finite wires; use Ampère's law only when symmetry makes B constant along the loop."
  - "The magnetic force is perpendicular to v, so it changes direction but never speed."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This review joins the four topics of Unit 12. Each question uses at least two topics. These are **original Marlbridge practice questions**, not past exam questions, and the mark tables are a **suggested Marlbridge rubric**, not an official scoring guideline. All data are invented for practice. Use right-handed axes (î × ĵ = k̂); "long" wires and solenoids and "large" sheets are much bigger than the distances involved. If you have not taken it yet, start with the [Unit 12 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-12-diagnostic/).

## Big ideas of the unit

- **B is a vector field.** It pushes on moving charges, currents and magnetic materials, never on a charge at rest ([12.1](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/)).
- **No monopoles.** ∮B·dA = 0 for every closed surface, so field lines close on themselves, and cutting a magnet gives two dipoles.
- **Moving charge is the source.** A single moving charge makes B ∝ q v × r̂/r²; atomic dipoles in materials come from moving electrons ([12.2](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/)).
- **The force is sideways.** F = q(v × B) is perpendicular to v, so it does no work: circles and helices, with a period that does not depend on speed.
- **E and B forces are independent.** They add as vectors; they cancel for one speed, v = E/B. The Hall effect is that balance inside a conductor.
- **A current is many moving charges.** Summing their fields gives the Biot-Savart law; summing their forces gives dF = I dℓ × B ([12.3](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/)).
- **Symmetry decides the method.** Ampère's law, ∮B·dℓ = μ₀I_enc, gives B quickly for long wires, cylinders, sheets and solenoids, just as Gauss's law does for E ([12.4](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/)).
- **Superposition always works.** Find each field with its own direction, then add vectors.
- **Changing E also makes B.** Maxwell's addition completes Ampère's law for a charging capacitor.

## Key relationships and methods

| Idea | Relationship | When to use it |
|---|---|---|
| Gauss's law for magnetism | ∮B·dA = 0 | Missing flux through part of a closed surface |
| Field of a moving charge | B = (μ₀/4π) q v × r̂/r² | One slow charge; zero along its line of motion |
| Force on a moving charge | F = qE + q(v × B) | Reverse v × B for negative q |
| Circular motion | r = mv/(qB); T = 2πm/(qB) | v ⊥ B in a uniform field (size of q); use v⊥ for a helix |
| Hall effect | ΔV_H = IB/(nqt) | Carrier sign, carrier density or a field probe |
| Biot-Savart law | dB = (μ₀/4π) I dℓ × r̂/r² | Loops, arcs, finite wires |
| Loop centre; arc | μ₀I/(2R); μ₀Iφ/(4πR) | φ in radians; leads aimed at the centre add 0 |
| Force on a wire | F = Iℓ × B; F/ℓ = μ₀I₁I₂/(2πd) | Integrate dF if B varies; same-direction currents attract |
| Ampère's law | ∮B·dℓ = μ₀I_enc | Long wire μ₀I/(2πr); solenoid μ₀nI; sheet μ₀K/2 |

## Question 1 (multiple choice · mixed)

A long solenoid has 1200 turns per metre and carries 0.50 A. Inside it, an electron moves at 2.0 × 10⁶ m/s at right angles to the axis. What happens to the electron?

- (A) It moves in a circle of radius 1.5 cm.
- (B) It moves in a circle of radius 9.5 cm.
- (C) It moves in a straight line, because a solenoid's field exerts no force inside it.
- (D) It moves in a circle of radius 28 m.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** B = μ₀nI = (4π × 10⁻⁷)(1200)(0.50) = 7.5 × 10⁻⁴ T along the axis, perpendicular to v. Then r = mₑv/(eB) = (9.11 × 10⁻³¹)(2.0 × 10⁶) ÷ [(1.60 × 10⁻¹⁹)(7.54 × 10⁻⁴)] = 0.015 m.

- (B) uses μ₀nI/(2π), mixing the solenoid result with the long-wire formula.
- (C) is true only for motion **along** the axis, parallel to B.
- (D) uses the proton mass.
</details>

## Question 2 (multiple choice · mixed)

A long straight wire on the x-axis carries 25 A in the +x direction. A proton is 1.0 cm from the wire, on the +y side, moving at 4.0 × 10⁵ m/s in the +x direction. What is the magnetic force on the proton?

- (A) 3.2 × 10⁻¹⁷ N, towards the wire
- (B) 3.2 × 10⁻¹⁷ N, away from the wire
- (C) 3.2 × 10⁻¹⁷ N, along +x, speeding the proton up
- (D) Zero, because the proton moves parallel to the wire

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At the proton, B = μ₀I/(2πd) = (2 × 10⁻⁷)(25) ÷ 0.010 = 5.0 × 10⁻⁴ T in the +z direction. F = e(vî × Bk̂) = −evB ĵ, of size 3.2 × 10⁻¹⁷ N, towards the wire. This matches "parallel currents attract".

- (B) reverses the cross product or the field direction.
- (C) puts the force along v. A magnetic force can never do work.
- (D) confuses v parallel to the **wire** with v parallel to **B**. B circles the wire, so v ⊥ B.
</details>

## Question 3 (multiple choice · mixed)

A long solenoid of radius 2.0 cm has 1500 turns per metre and carries 2.0 A. A closed cylindrical surface of radius 3.0 cm shares its axis. One flat end of the surface is inside the solenoid, halfway along it, and the field there points into the closed surface. The other flat end is far beyond the end of the solenoid, where the field is negligible. What is the flux through the curved side of the surface?

- (A) +4.7 × 10⁻⁶ Wb (leaving the surface)
- (B) 0, because the field outside a solenoid is negligible
- (C) +1.1 × 10⁻⁵ Wb (leaving the surface)
- (D) −4.7 × 10⁻⁶ Wb (entering the surface)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** B = μ₀nI = 3.77 × 10⁻³ T, but only over the solenoid's own cross-section, π(0.020)², so the inner end carries −4.7 × 10⁻⁶ Wb. The far end carries about zero. By ∮B·dA = 0, the curved side carries +4.7 × 10⁻⁶ Wb: the lines spread out through the side beyond the solenoid's end.

- (B) Beyond the solenoid's end the field spreads out through the side. Lines that enter must leave somewhere.
- (C) uses the 3.0 cm radius. Outside the windings, B is negligible.
- (D) has the sign of the end flux, not the side flux.
</details>

## Question 4 (constructed response · mixed)

A Hall probe is a semiconductor strip 0.10 mm thick with 2.0 × 10²¹ positive carriers per m³. It carries a constant 20 mA. It is placed inside a long solenoid, flat face perpendicular to the axis. A student varies the solenoid current I_s and records the Hall potential difference.

| I_s (A) | 0.50 | 1.00 | 1.50 | 2.00 | 2.50 |
|---|---|---|---|---|---|
| ΔV_H (mV) | 0.97 | 1.86 | 2.85 | 3.74 | 4.73 |

(a) Use Ampère's law and the Hall force balance to show that ΔV_H = [μ₀nI_p/(n_c e t)] I_s, where n is the solenoid's turns per metre, I_p the probe current, n_c the carrier density and t the strip thickness.
(b) Plot ΔV_H against I_s and find the gradient of the best-fit line.
(c) Use your gradient to find n.
(d) At I_s = 2.00 A, the probe is turned so that its face normal is at 60° to the axis. Predict the reading.
(e) Explain why moving the probe sideways, still inside the solenoid, does not change the reading.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A rectangular Amperian loop with one side inside along the axis gives Bℓ = μ₀nℓI_s, so B = μ₀nI_s. In the strip, carriers drift at v_d and balance when qE_H = qv_dB, so ΔV_H = v_dBw. With I_p = n_c e v_d wt, ΔV_H = I_pB/(n_c e t) = [μ₀nI_p/(n_c e t)] I_s: a straight line through the origin.

**(b)** Plot I_s (A) from 0 to 2.5 across and ΔV_H (mV) from 0 to 5 up. The points lie close to a line through the origin. Gradient: **1.88 × 10⁻³ V/A** (1.88 mV/A).

**(c)** n = gradient × n_c e t/(μ₀I_p) = (1.88 × 10⁻³)(2.0 × 10²¹)(1.60 × 10⁻¹⁹)(1.0 × 10⁻⁴) ÷ [(4π × 10⁻⁷)(0.020)] = **2.4 × 10³ turns per metre**.

**(d)** Only the component of B along the face normal moves the carriers sideways. Reading = 3.74 mV × cos 60° ≈ **1.9 mV**.

**(e)** The Amperian rectangle gives B = μ₀nI_s wherever its inside side sits, so B is uniform inside an ideal solenoid. Same B, same ΔV_H.

| Point | What earns it |
|---|---|
| 1 | B = μ₀nI_s from an Amperian rectangle |
| 1 | Force balance and I_p = n_c e v_d wt combined to give ΔV_H |
| 1 | Axes labelled with units, sensible scales, best-fit line through the origin |
| 1 | Gradient 1.85–1.92 × 10⁻³ V/A from the line |
| 1 | n ≈ 2.4 × 10³ m⁻¹ |
| 1 | Reading ≈ 1.9 mV using the cos 60° component |
| 1 | Uniform field inside, with Ampère's law as the reason |

Total: 7 points.
</details>

## Question 5 (constructed response · mixed)

Two long parallel wires stand perpendicular to the page. Wire 1, at x = 0, carries 10 A out of the page. Wire 2, at x = 0.080 m, carries 30 A out of the page.

(a) Use Ampère's law to show that a long wire's field has size μ₀I/(2πr). State the symmetry you use.
(b) Find the point on the line between the wires where the net field is zero.
(c) Find the net field (size and direction) at the midpoint, x = 0.040 m. Take +y as up the page.
(d) A proton passes the midpoint moving out of the page at 2.0 × 10⁵ m/s. Find the magnetic force on it.
(e) Find the force per metre on wire 2 and state its direction.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** By symmetry, B has the same size at every point of a circle centred on the wire and is tangent to it. So ∮B·dℓ = B(2πr) = μ₀I, giving **B = μ₀I/(2πr)**.

**(b)** Between the wires the two fields point in opposite directions. They cancel where 10/x = 30/(0.080 − x), so **x = 0.020 m**, closer to the weaker wire.

**(c)** B₁ = (2 × 10⁻⁷)(10) ÷ 0.040 = 5.0 × 10⁻⁵ T, in +y (grip rule). B₂ = (2 × 10⁻⁷)(30) ÷ 0.040 = 1.5 × 10⁻⁴ T, in −y. Net: **1.0 × 10⁻⁴ T in the −y direction**.

**(d)** F = e(vk̂ × (−Bĵ)) = +evB î. Size: (1.60 × 10⁻¹⁹)(2.0 × 10⁵)(1.0 × 10⁻⁴) = **3.2 × 10⁻¹⁸ N, in +x**, towards wire 2.

**(e)** F/ℓ = μ₀I₁I₂/(2πd) = (2 × 10⁻⁷)(10)(30) ÷ 0.080 = **7.5 × 10⁻⁴ N/m**, towards wire 1 (same-direction currents attract).

| Point | What earns it |
|---|---|
| 1 | Circular Amperian loop with symmetry stated, giving μ₀I/(2πr) |
| 1 | Null point at x = 0.020 m |
| 1 | Both fields at the midpoint with correct directions |
| 1 | Net 1.0 × 10⁻⁴ T in −y |
| 1 | Force 3.2 × 10⁻¹⁸ N in +x from q(v × B) |
| 1 | 7.5 × 10⁻⁴ N/m, attractive |

Total: 6 points. Carry forward an error in (c) into (d) once.
</details>

## Question 6 (constructed response · mixed)

A flat circular coil of 25 turns and radius 0.080 m stands vertically, with its axis pointing east–west. A small compass sits at its centre. With no current, the compass points north. Take the horizontal component of Earth's field to be 2.0 × 10⁻⁵ T, pointing north.

(a) With a current in the coil, the compass settles 35° east of north. Explain why it settles at an angle rather than pointing east.
(b) Find the current in the coil.
(c) The compass is moved along the axis to 0.080 m from the centre. Find its new angle from north.
(d) Which face of the coil acts as its north pole? Seen from the east, which way does the current circulate?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A compass lines up with the **net** field. The coil's eastward field adds as a vector to Earth's northward horizontal field, so the net field points between north and east.

**(b)** tan 35° = B_coil/B_E, so B_coil = (2.0 × 10⁻⁵)(0.700) = 1.40 × 10⁻⁵ T. With B_coil = μ₀NI/(2R): I = 2RB_coil/(μ₀N) = (2 × 0.080)(1.40 × 10⁻⁵) ÷ [(4π × 10⁻⁷)(25)] = **0.071 A** (71 mA).

**(c)** On the axis, B = B_centre × [R²/(R² + z²)]^(3/2). With z = R the factor is 2^(−3/2) = 0.354, so B = 4.95 × 10⁻⁶ T. Angle: tan⁻¹(4.95 × 10⁻⁶ ÷ 2.0 × 10⁻⁵) = **14° east of north**.

**(d)** The coil's field at its centre points east. Field lines leave a dipole's north pole, so the **east face** is the north pole. By the grip rule, a field pointing towards a viewer on the east means the current circulates **anticlockwise** as seen from the east.

| Point | What earns it |
|---|---|
| 1 | Compass aligns with the vector sum of the coil's field and Earth's field |
| 1 | B_coil = B_E tan 35° = 1.4 × 10⁻⁵ T |
| 1 | I = 0.071 A from μ₀NI/(2R) |
| 1 | Axis factor 0.354 used to get 4.95 × 10⁻⁶ T |
| 1 | New angle about 14° |
| 1 | East face is north, current anticlockwise from the east, with a reason |

Total: 6 points.
</details>

## Question 7 (constructed response · mixed)

Two large, thin, parallel metal sheets are 0.10 m apart. Each carries current per unit width K = 500 A/m, in opposite directions.

(a) Ampère's law gives a single sheet's field as μ₀K/2 on each side. Use superposition to find the field between the sheets and outside them.
(b) A proton passes through a small hole in one sheet, moving at 4.0 × 10³ m/s perpendicular to the sheets. Describe its path, and find where and when it next reaches a sheet.
(c) Find the greatest speed for which a proton entering this way would fail to reach the other sheet.
(d) Find the magnetic force per square metre on each sheet, and say whether the sheets attract or repel.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Between the sheets the two fields point the same way, so B = μ₀K = (4π × 10⁻⁷)(500) = **6.3 × 10⁻⁴ T**, parallel to the sheets and perpendicular to the currents. Outside, the fields are equal and opposite: **B = 0**.

**(b)** B is perpendicular to v, so the proton moves on a circle of radius r = mₚv/(eB) = (1.67 × 10⁻²⁷)(4.0 × 10³) ÷ [(1.60 × 10⁻¹⁹)(6.28 × 10⁻⁴)] = **6.6 cm**. That is less than 10 cm, so it turns back after a semicircle and hits the **same** sheet 2r = **13 cm** from the hole. Time: half a period, πmₚ/(eB) = **5.2 × 10⁻⁵ s**.

**(c)** It just reaches the other sheet when r = d: v = eBd/mₚ = **6.0 × 10³ m/s**.

**(d)** Each sheet sits in the **other** sheet's field, μ₀K/2, not the total. Force per area = K × μ₀K/2 = μ₀K²/2 = **0.16 N/m²**. Opposite currents **repel**.

| Point | What earns it |
|---|---|
| 1 | B = μ₀K between, with the fields adding |
| 1 | B = 0 outside, with the fields cancelling |
| 1 | r = 6.6 cm and a semicircle back to the first sheet |
| 1 | Lands 13 cm from the hole after 5.2 × 10⁻⁵ s |
| 1 | v_max = 6.0 × 10³ m/s from r = d |
| 1 | Uses the other sheet's field only: 0.16 N/m², repulsive |

Total: 6 points. Using the full field μ₀K in (d) gives 0.31 N/m² and loses that point.
</details>

## How did you do?

Questions 1–3 are worth 1 point each, and Questions 4–7 are worth 7, 6, 6 and 6 points, 28 in all. Look at **where** you lost points.

- **Gauss's law for magnetism, dipoles, compasses or Earth's field (Q3, Q6(a) and (d)):** use the [12.1 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-checklist/).
- **Force on moving charges, circular paths or the Hall effect (Q1, Q2, Q4(a), Q5(d), Q7(b)–(c)):** use the [12.2 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-checklist/).
- **Loop and wire fields, or forces between currents (Q2, Q5(e), Q6(b)–(c), Q7(d)):** use the [12.3 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-checklist/).
- **Ampère's law, solenoids, sheets or superposition (Q1, Q3, Q4(a) and (e), Q5(a)–(c), Q7(a)):** use the [12.4 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-checklist/).

If you have not done it yet, the [Unit 12 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-12-diagnostic/) gives a quick topic-by-topic check.
