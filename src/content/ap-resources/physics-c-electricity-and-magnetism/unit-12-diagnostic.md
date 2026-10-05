---
resourceId: "mb-ap-physcem-u12-diagnostic"
title: "Magnetic Fields and Electromagnetism: Unit Diagnostic (Physics C: E&M Unit 12)"
description: "A 30-minute check of Unit 12: ten original Marlbridge questions on magnetic fields, moving charges, the Biot-Savart law and Ampère's law, each linked to the guide to revisit."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied, or at least started, Topics 12.1 to 12.4"
learningObjectives:
  - "Find out which Unit 12 topics you can already use with confidence"
  - "Spot the specific mistakes behind any wrong answers"
  - "Choose the study guide to revisit for each topic you missed"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A; e = 1.60 × 10⁻¹⁹ C; proton mass 1.67 × 10⁻²⁷ kg. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u12-review", "mb-ap-physcem-12.1-study-guide", "mb-ap-physcem-12.2-study-guide", "mb-ap-physcem-12.3-study-guide", "mb-ap-physcem-12.4-study-guide"]
next: "mb-ap-physcem-u12-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Ten short questions cover all four Unit 12 topics; allow about 30 minutes."
  - "Questions 5, 8 and 10 need short written working; the rest are multiple choice."
  - "Every answer says why each wrong option is tempting and which guide to read if you missed it."
  - "This is a check of what to revisit, not a score prediction."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which Unit 12 topics to revisit, with at least one short question per topic. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated against real exam results, and your result is **not** a predicted score.

**How to take it.** Work without notes for about 30 minutes, answering before opening each explanation. A scientific calculator is assumed. Data for every question: μ₀ = 4π × 10⁻⁷ T·m/A (so μ₀/(2π) = 2 × 10⁻⁷ T·m/A), e = 1.60 × 10⁻¹⁹ C and proton mass 1.67 × 10⁻²⁷ kg. Use right-handed axes (î × ĵ = k̂). "Long" wires are much longer than the distances involved. All data are invented for practice.

## Question 1 (multiple choice · 12.1)

A closed cardboard box sits near a strong magnet. A probe gives the magnetic flux through five of its six faces, with outward area vectors: top +3.0 × 10⁻⁴ Wb, bottom −1.2 × 10⁻⁴ Wb, east +0.5 × 10⁻⁴ Wb, west +0.5 × 10⁻⁴ Wb, north −0.8 × 10⁻⁴ Wb. What is the flux through the south face?

- (A) +2.0 × 10⁻⁴ Wb
- (B) 0
- (C) −2.0 × 10⁻⁴ Wb
- (D) −6.0 × 10⁻⁴ Wb

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Gauss's law for magnetism, ∮B·dA = 0, holds for every closed surface. The five known faces add to +2.0 × 10⁻⁴ Wb, so the south face must carry −2.0 × 10⁻⁴ Wb.

- (A) has the wrong sign; the total must be zero.
- (B) assumes no field crosses the south face. A net flux would need a monopole inside.
- (D) adds the sizes of the five fluxes and ignores their signs.

**If you missed this:** read "No monopoles: Gauss's law for magnetism" in the [12.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/).
</details>

## Question 2 (multiple choice · 12.1)

A bar magnet lies on a table with its north pole pointing east. A small compass is placed on the table 10 cm north of the magnet's centre, level with the middle of the magnet. Which way does the north end of the compass needle point? (Ignore Earth's field.)

- (A) East
- (B) West
- (C) South, towards the magnet
- (D) North, away from the magnet

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Outside a magnet, field lines run from the N end round to the S end. Beside the middle they run parallel to the magnet, from N (east) towards S (west). A compass lines up with the field, so its N end points **west**.

- (A) uses the direction of the field **inside** the magnet, from S to N.
- (C) assumes a compass points at the magnet, not along the field.
- (D) treats the side of the magnet as a pole.

**If you missed this:** read "Field-line maps and dipoles" and the misconceptions in the [12.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/).
</details>

## Question 3 (multiple choice · 12.2)

A positively charged particle passes through the origin moving in the +y direction. At that instant, consider three points: P at (0, 0, 3d), Q at (2d, d, 0) and R at (0, −3d, 0). Which ranks the sizes of the magnetic field the particle produces at these points?

- (A) P > Q > R, with R zero
- (B) R > Q > P
- (C) Q > P = R
- (D) Q > P > R, with R zero

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** B ∝ sin θ/r², where θ is the angle between v and the line to the point. P: sin 90°/(3d)² = 0.111/d². Q: r = √5 d and sin θ = 2/√5, so 0.179/d². R is on the line of motion, behind the charge, so sin θ = 0 and B = 0.

- (A) assumes the perpendicular point always wins. Q is closer, which outweighs its smaller sin θ.
- (B) puts the largest field on the line of motion, where it is zero.
- (C) uses 1/r² but drops sin θ, so R looks the same as P.

**If you missed this:** read "A moving charge makes a magnetic field" in the [12.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/).
</details>

## Question 4 (multiple choice · 12.2)

A thin strip of a semiconductor carries a current in a magnetic field perpendicular to its flat face, and a Hall potential difference ΔV_H appears across its width. It is replaced by a strip of the same material that is **twice as wide and half as thick**, with the same current and field. What is the new Hall potential difference?

- (A) 2ΔV_H
- (B) ΔV_H
- (C) 4ΔV_H
- (D) ΔV_H/2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** ΔV_H = IB/(nqt). The width does not appear, and halving the thickness t doubles ΔV_H. Check: wt is unchanged, so v_d is the same, and ΔV_H = v_dBw doubles with w.

- (B) notices that wt is unchanged but forgets the wider width.
- (C) counts both changes as if each doubled ΔV_H.
- (D) treats ΔV_H as proportional to t.

**If you missed this:** read "The Hall effect" in the [12.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/).
</details>

## Question 5 (short answer · 12.2)

A proton moves in a circle of radius 0.15 m in a uniform 0.40 T magnetic field that is perpendicular to its velocity.

(a) Find the proton's speed and the period of its motion.
(b) Find the work done on the proton by the magnetic force during half a turn. Explain.
(c) A uniform electric field is now added so that a proton with this speed moves in a straight line instead. Find the size of the electric field and describe its direction.

<details>
<summary>Answer and explanation</summary>

**(a)** evB = mv²/r, so v = eBr/m = (1.60 × 10⁻¹⁹)(0.40)(0.15) ÷ (1.67 × 10⁻²⁷) = **5.7 × 10⁶ m/s**. T = 2πm/(eB) = **1.6 × 10⁻⁷ s** (1.64 × 10⁻⁷ s).

**(b)** **Zero.** The magnetic force is always perpendicular to v, so F·v = 0 and the speed is constant.

**(c)** The forces must balance: eE = evB, so E = vB = (5.75 × 10⁶)(0.40) = **2.3 × 10⁶ V/m**. E must be perpendicular to both v and B, **opposite** to the magnetic force: away from the centre of the old circle.

Check yourself: 1 mark each for v, T, zero work with the perpendicular-force reason, and E with its direction (4 in total).

**If you missed this:** read "Circular and helical motion" and "Electric and magnetic fields together" in the [12.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/).
</details>

## Question 6 (multiple choice · 12.3)

A wire carrying current I runs in along a radius to a circle of radius R, goes three quarters of the way round the circle, then leaves along another radius. What is the size of the field at the centre of the circle?

- (A) μ₀I/(2R)
- (B) 3μ₀I/(4R)
- (C) 3μ₀I/(8R)
- (D) 3μ₀I/(8R) + μ₀I/(2πR)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For an arc, B = μ₀Iφ/(4πR) with φ in radians. Three quarters of a turn is φ = 3π/2, so B = 3μ₀I/(8R). The straight leads point at the centre, so dℓ × r̂ = 0 along them.

- (A) is the field of a complete loop.
- (B) uses μ₀Iφ/(2πR), which doubles every arc's field.
- (D) adds a long-wire term for the leads. A piece aimed straight at the point contributes nothing.

**If you missed this:** read "Loops and arcs" in the [12.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/).
</details>

## Question 7 (multiple choice · 12.3)

Two long parallel wires are 3.0 cm apart. One carries 6.0 A and the other 9.0 A, in opposite directions. What is the magnetic force on a 0.50 m length of either wire?

- (A) 1.8 × 10⁻⁴ N, pulling the wires together
- (B) 1.8 × 10⁻⁴ N, pushing the wires apart
- (C) 3.6 × 10⁻⁴ N, pushing the wires apart
- (D) 1.1 × 10⁻³ N, pushing the wires apart

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** F/ℓ = μ₀I₁I₂/(2πd) = (2 × 10⁻⁷)(6.0)(9.0) ÷ 0.030 = 3.6 × 10⁻⁴ N/m, so the force on 0.50 m is 1.8 × 10⁻⁴ N. Opposite currents repel.

- (A) For currents, same directions attract; opposite directions repel.
- (C) is the force per metre, not the force on 0.50 m.
- (D) uses μ₀ in place of μ₀/(2π).

**If you missed this:** read "Force on a current-carrying wire" in the [12.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/).
</details>

## Question 8 (short answer · 12.3)

A wire carries 4.0 A from the origin 0.30 m along the +x axis, then turns and runs 0.40 m in the +y direction. A uniform field B = 0.25 T points in the +z direction.

(a) Find the force vector on each straight section.
(b) Find the size of the net force, and check it with a single straight wire joining the two ends.
(c) Explain why the first section produces no magnetic field at points on the x-axis beyond x = 0.30 m.

<details>
<summary>Answer and explanation</summary>

**(a)** F = Iℓ × B. First section: (4.0)(0.30)(0.25)(î × k̂) = **−0.30ĵ N**. Second section: (4.0)(0.40)(0.25)(ĵ × k̂) = **+0.40î N**.

**(b)** Net F = (0.40î − 0.30ĵ) N, of size **0.50 N** (37° below the +x axis). Check: the ends are 0.50 m apart and the joining line is perpendicular to B, so F = IℓB = (4.0)(0.50)(0.25) = 0.50 N.

**(c)** By the Biot-Savart law, dB ∝ dℓ × r̂. On the x-axis, r̂ is parallel to dℓ for every piece of the first section, so every contribution is zero.

Check yourself: 1 mark each for the two force vectors, the 0.50 N total with its check, and the reason in (c) (4 in total).

**If you missed this:** for (a) and (b), read "Force on a current-carrying wire" and Worked example 3; for (c), "The Biot-Savart law", both in the [12.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/).
</details>

## Question 9 (multiple choice · 12.4)

A long thin wire along the axis of a long, thin-walled metal pipe of radius R carries current I. The pipe carries current I in the **same** direction. What is the ratio of the field size at r = R/2 to the field size at r = 2R?

- (A) 4
- (B) 1
- (C) 1/2
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Use coaxial circles. At R/2 only the wire is enclosed: B = μ₀I/(2π × R/2) = μ₀I/(πR). At 2R both currents are enclosed: B = μ₀(2I)/(2π × 2R) = μ₀I/(2πR). The ratio is 2.

- (A) leaves out the pipe's current at 2R, or counts it at R/2.
- (B) models it as a solid rod carrying 2I evenly, with B ∝ r inside. The pipe's current is all at radius R.
- (C) is the ratio the wrong way up.

**If you missed this:** read "Wires and cylinders" in the [12.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/).
</details>

## Question 10 (short answer · 12.4)

A long solid cylinder of radius R carries a current parallel to its axis. The current density is J = J₀(1 − r/R): largest on the axis, zero at the surface.

(a) Show that the total current is I = πJ₀R²/3.
(b) Use Ampère's law to find B inside the conductor (r ≤ R).
(c) Show that B is greatest at r = 3R/4, not at the surface.

<details>
<summary>Answer and explanation</summary>

**(a)** Thin rings: I_enc(r) = ∫₀ʳ J₀(1 − r′/R) 2πr′ dr′ = 2πJ₀(r²/2 − r³/(3R)). At r = R: I = 2πJ₀R²(1/2 − 1/3) = **πJ₀R²/3**.

**(b)** On a coaxial circle, symmetry makes B tangent and constant, so B(2πr) = μ₀I_enc. That gives **B = μ₀J₀(r/2 − r²/(3R))**. Check: at r = R this is μ₀J₀R/6 = μ₀I/(2πR), matching the outside result.

**(c)** dB/dr = μ₀J₀(1/2 − 2r/(3R)) = 0 at **r = 3R/4**. There B = 3μ₀J₀R/16, which is 9/8 of the surface value. (B is zero on the axis and falls as 1/r outside, so this is the maximum.)

Check yourself: 1 mark each for the ring integral, I_enc(r) inside Ampère's law, B(r) with the continuity check, and r = 3R/4 (4 in total).

**If you missed this:** read "Wires and cylinders" and Worked example 2 in the [12.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/).
</details>

## Your next step

Count a short answer as missed if you lost more than one mark.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 12.1 Magnetic fields | 1, 2 | [12.1 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-study-guide/) |
| 12.2 Magnetism and moving charges | 3, 4, 5 | [12.2 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/) |
| 12.3 Fields of currents and the Biot-Savart law | 6, 7, 8 | [12.3 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/) |
| 12.4 Ampère's law | 9, 10 | [12.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/12-4-amp-res-law-study-guide/) |

## How to use your result

- **Missed nothing in a topic?** Go straight to the [mixed unit review](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-12-review/).
- **Missed one topic?** Read that study guide, then do its practice set before the review.
- **Missed three or more topics?** Work through 12.1 to 12.4 in order; each builds on the one before.
- **Got it right but guessed?** Treat it as missed.
