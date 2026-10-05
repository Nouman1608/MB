---
resourceId: "mb-ap-physcem-u10-review"
title: "Conductors and Capacitors: Mixed Unit Review (Physics C: E&M Unit 10)"
description: "A mixed review of Unit 10: the big ideas that link conductors, charge sharing, grounding, capacitors and dielectrics, a summary table and seven original questions that combine topics, with rubrics."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: []
resourceType: "unit-review"
prerequisites:
  - "You have studied Topics 10.1 to 10.4"
  - "Gauss's law (Topic 8.6) and ΔV = −∫E·dr (Unit 9)"
prerequisiteResources: ["mb-ap-physcem-u10-diagnostic"]
learningObjectives:
  - "Connect equipotential conductors, charge sharing, capacitance and dielectrics in one picture"
  - "Decide what stays fixed (charge or potential difference) before predicting a change"
  - "Solve multi-step problems that combine two or more Unit 10 topics"
  - "Check answers with E = σ/ε₀, limiting cases and energy bookkeeping"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²); e = 1.60 × 10⁻¹⁹ C; proton mass 1.67 × 10⁻²⁷ kg. Give answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-u10-diagnostic", "mb-ap-physcem-10.1-checklist", "mb-ap-physcem-10.2-checklist", "mb-ap-physcem-10.3-checklist", "mb-ap-physcem-10.4-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A conductor in equilibrium is one equipotential with E = 0 inside and E = σ/ε₀ just outside."
  - "Connected conductors share charge until their potentials are equal; ground holds V = 0 and can supply any charge."
  - "Capacitance C = Q/ΔV depends only on shape, size and the material in the gap; a dielectric multiplies it by κ."
  - "Before any change, ask whether Q is fixed (isolated) or ΔV is fixed (connected to a battery)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Each question uses at least two Unit 10 topics. These are **original Marlbridge practice questions**, not past exam questions, and the mark tables are a **suggested Marlbridge rubric**, not an official scoring guideline. All data are invented; ignore edge effects.

## Big ideas of the unit

- **Equilibrium comes first.** Free charges move until E = 0 inside the metal, so a Gaussian surface there encloses no charge and excess charge sits on surfaces ([10.1](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-study-guide/)).
- **One conductor, one potential.** E just outside is perpendicular to the surface, with size σ/ε₀. Sharp points have the largest σ.
- **Shielding works one way unless grounded.** A closed shell keeps outside fields out of its cavity, but a charge inside still charges the outer surface.
- **Contact equalises potential, not charge.** Charge is conserved and shared until V is the same; for distant spheres, q ∝ R. Ground sets V = 0 and can give or take any charge ([10.2](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-study-guide/)).
- **A capacitor is two conductors with ±Q.** Gauss's law gives E, integrating gives ΔV, and C = Q/ΔV depends only on geometry and material ([10.3](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-study-guide/)).
- **Stored energy is work done separating charge.** U = ½QΔV; charge sharing loses some of it.
- **Dielectrics reduce the field, never cancel it.** Bound charge σ(1 − 1/κ) opposes the applied field, so C rises by κ ([10.4](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-study-guide/)).
- **Ask what is fixed.** Isolated means Q is fixed; connected to a battery means ΔV is fixed.

## Key relationships and methods

| Idea | Relationship | When to use it |
|---|---|---|
| Conductor in equilibrium | E = 0 inside; V constant throughout | Any shape, any net charge |
| Field just outside a conductor | E = σ/ε₀, perpendicular to the surface | σ from a measured field, or E from σ |
| Isolated sphere | V = kQ/R, so C = 4πε₀R | Charge sharing |
| Spheres joined by a wire | q₁/R₁ = q₂/R₂; σ₁/σ₂ = R₂/R₁ | Distant spheres, thin wire |
| Capacitance | C = Q/ΔV | Every capacitor |
| Parallel plates | E = σ/ε₀ in air; C = κε₀A/d | Gap much smaller than the plates |
| Concentric spheres; coaxial cylinders | C = 4πε₀ab/(b − a); C = 2πε₀L/ln(b/a) | Multiply by κ if the gap is filled |
| Stored energy | U = ½QΔV = Q²/(2C) = ½C(ΔV)² | Use Q²/(2C) if Q fixed, ½C(ΔV)² if ΔV fixed |
| Dielectric | E = E₀/κ (Q fixed); σᵢ = σ(1 − 1/κ) | Isolated or connected: decide first |

## Question 1 (multiple choice · mixed)

An isolated parallel-plate capacitor has capacitance C and plate separation d. An uncharged metal slab of thickness d/3, as large as the plates, is slid into the gap parallel to them, touching neither. Which statement is correct?

- (A) The capacitance becomes 3C/2, and the field in the remaining air gaps is unchanged.
- (B) The capacitance becomes 3C/2, and the field in the air gaps falls to two thirds of its old value.
- (C) The capacitance is unchanged, because the slab is neutral and adds no charge.
- (D) The capacitance becomes infinite, because a metal acts like a dielectric with κ → ∞.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The slab polarises so that E = 0 in the metal. Q on the plates is fixed, so the air field is still Q/(ε₀A), but it acts over only 2d/3. ΔV falls to two thirds, so C = Q/ΔV rises to 3C/2.

- (B) gets C right but assumes the field fell. With Q fixed, E in the air depends only on σ.
- (C) The slab's induced charges remove the field from a third of the gap.
- (D) The κ → ∞ limit applies only if the slab fills the gap.
</details>

## Question 2 (multiple choice · mixed)

An insulated parallel-plate capacitor carries +Q and −Q, with 50 V between its plates. Its negative plate is then connected to ground. What happens?

- (A) Essentially no charge flows; the negative plate is now at 0 V and the positive plate at +50 V.
- (B) The −Q flows to ground and the capacitor discharges.
- (C) Half of the charge flows to ground, so the potential difference falls to 25 V.
- (D) Charge flows until both plates are at 0 V.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The −Q is held by the +Q, and the field outside the plates is essentially zero, so nothing drives charge to ground. Grounding only sets the reference; Q, C and ΔV = 50 V are unchanged.

- (B) To discharge, the + plate would need a path to ground too.
- (C) Q sets ΔV, and Q has not changed.
- (D) would need **both** plates to be grounded.
</details>

## Question 3 (multiple choice · mixed)

An air-filled capacitor is charged by a battery, then disconnected; it now stores 6.0 μJ. A slab with κ = 3 is slid in to fill the gap. The capacitor is then reconnected to the same battery. What is the final stored energy?

- (A) 18 μJ
- (B) 2.0 μJ
- (C) 6.0 μJ
- (D) 54 μJ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Isolated, Q is fixed and C triples, so U = Q²/(2C) falls to 2.0 μJ. Reconnected, the battery restores ΔV₀ with C still 3C₀, so U = ½(3C₀)(ΔV₀)² = 18 μJ.

- (B) stops before the battery is reconnected.
- (C) forgets that C is still three times larger.
- (D) multiplies by κ². At fixed ΔV, U = ½C(ΔV)² is proportional to C.
</details>

## Question 4 (constructed response · mixed)

A thin metal shell of radius b = 0.080 m is grounded. At its centre is a metal sphere of radius a = 0.040 m, connected by an insulated wire, through a small hole, to the +300 V terminal of a supply whose other terminal is grounded.

(a) Derive the capacitance of the sphere–shell pair and evaluate it.
(b) Find the charge on the sphere and on the inner and outer surfaces of the shell.
(c) Find the field just outside the sphere. Check your answer with E = σ/ε₀.
(d) The supply and ground wire are now removed, leaving the sphere and shell each isolated. A +5.0 nC point charge is then held outside the shell, 0.30 m from the centre. State whether the potential difference between the sphere and the shell changes, and find the new potential of each.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Put +Q on the sphere and −Q on the shell. A concentric Gaussian sphere with a < r < b encloses +Q, so E = kQ/r². ΔV = ∫ₐᵇ kQ/r² dr = kQ(1/a − 1/b), so C = Q/ΔV = **4πε₀ab/(b − a)** = (0.040 × 0.080) ÷ [(8.99 × 10⁹)(0.040)] = **8.9 × 10⁻¹² F** (8.9 pF).

**(b)** Q = CΔV = (8.90 × 10⁻¹²)(300) = **+2.7 × 10⁻⁹ C** on the sphere. Gauss's law in the shell's metal puts **−2.7 nC** on its inner surface. The grounded shell needs zero net enclosed charge to be at V = 0, so its outer surface carries **zero**.

**(c)** E(a) = kQ/a² = (8.99 × 10⁹)(2.67 × 10⁻⁹) ÷ 0.040² = **1.5 × 10⁴ V/m**, outward. Check: σ = Q/(4πa²) = 1.33 × 10⁻⁷ C/m², and σ/ε₀ = 1.5 × 10⁴ V/m.

**(d)** **ΔV does not change.** The point charge induces charge only on the shell's **outer** surface, and together they give no field inside it, so the gap field and ΔV = 300 V are unchanged. They add a constant potential inside, equal to their value at the centre: k(5.0 × 10⁻⁹)/0.30 = 150 V (the induced charge is net zero, all at distance b). The shell is at **+150 V** and the sphere at **+450 V**.

| Point | What earns it |
|---|---|
| 1 | Gauss's law for E in the gap and the integral for ΔV |
| 1 | C = 4πε₀ab/(b − a) = 8.9 pF |
| 1 | Sphere +2.7 nC, inner wall −2.7 nC, outer surface 0 with a reason |
| 1 | E = 1.5 × 10⁴ V/m and the σ/ε₀ check |
| 1 | ΔV unchanged, by shielding (induced charge on the outer surface only) |
| 1 | Shell at 150 V and sphere at 450 V |

Total: 6 points. Carry forward an error in C into (b) and (c) once.
</details>

## Question 5 (constructed response · mixed)

Metal sphere A, of radius 0.020 m, is charged to 6.0 kV. A long thin wire then joins it to a far-away neutral metal sphere B of radius 0.060 m.

(a) Treating an isolated sphere as a capacitor whose other conductor is at infinity, show that C = 4πε₀R. Find A's starting charge.
(b) Find the final charge on each sphere and their common potential.
(c) Find the total stored energy before and after the connection. What fraction is lost, and where does it go?
(d) Find the field just outside each sphere afterwards.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** An isolated sphere has V = kQ/R, so C = Q/V = R/k = **4πε₀R**. For A: C_A = 0.020 ÷ 8.99 × 10⁹ = **2.2 × 10⁻¹² F**, and Q = C_AV = **1.3 × 10⁻⁸ C** (13.3 nC).

**(b)** Equal potentials give q ∝ R, so A keeps 0.020/0.080 = ¼ of the charge: q_A = **3.3 nC** and q_B = **10 nC**. Common potential: kq_A/R_A = **1.5 kV** (check: kq_B/R_B = 1.5 kV).

**(c)** Before: U = ½QV = ½(1.335 × 10⁻⁸)(6000) = **4.0 × 10⁻⁵ J**. After: U = ½Q(1.5 × 10³) = **1.0 × 10⁻⁵ J**. Three quarters, **3.0 × 10⁻⁵ J**, becomes internal energy in the wire.

**(d)** For a sphere, E = σ/ε₀ = V/R: E_A = **7.5 × 10⁴ V/m** and E_B = **2.5 × 10⁴ V/m**. The smaller sphere has the stronger field, because σ ∝ 1/R.

| Point | What earns it |
|---|---|
| 1 | C = 4πε₀R from V = kQ/R, and Q = 13 nC |
| 1 | q_A = 3.3 nC and q_B = 10 nC from equal potentials |
| 1 | Common potential 1.5 kV |
| 1 | Energies 4.0 × 10⁻⁵ J and 1.0 × 10⁻⁵ J |
| 1 | Fraction ¾ lost, to heating in the wire |
| 1 | Both surface fields, with the smaller sphere's larger |

Total: 6 points.
</details>

## Question 6 (constructed response · mixed)

Two square plates, each 0.20 m by 0.20 m, are 1.0 mm apart and stay connected to a 12 V battery. A slab of plastic, 0.20 m wide and exactly 1.0 mm thick, is pushed into the gap a distance x along the plates. The table shows the measured capacitance.

| x (cm) | 0 | 5.0 | 10.0 | 15.0 | 20.0 |
|---|---|---|---|---|---|
| C (pF) | 355 | 572 | 799 | 1015 | 1240 |

(a) Explain why the field between the plates has the same value, ΔV/d, in the air region and in the plastic region.
(b) Find the free charge density on the plates in each region (use κ for the plastic). Hence explain why the plastic region holds more charge.
(c) Show that C = (ε₀W/d)[L + (κ − 1)x], where W and L are the width and length of the plates.
(d) Plot C against x, find the gradient of the best-fit line, and use it to find κ.
(e) Find the bound charge density on the plastic's surface when it is fully inserted.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Each plate is one equipotential, so ΔV = 12 V across the same 1.0 mm gap everywhere, and E = ΔV/d = **1.2 × 10⁴ V/m** in both regions.

**(b)** Air region: σ = ε₀E = (8.85 × 10⁻¹²)(1.2 × 10⁴) = **1.06 × 10⁻⁷ C/m²**. Plastic region: bound charge cuts the free charge's field by κ, so the same E needs κ times the free charge, σ = κε₀E, supplied by the battery.

**(c)** Q = ε₀E(air area) + κε₀E(plastic area) = ε₀E W[(L − x) + κx]. With E = ΔV/d, C = Q/ΔV = **(ε₀W/d)[L + (κ − 1)x]**, a straight line in x.

**(d)** A least-squares line has gradient **44.3 pF/cm = 4.43 × 10⁻⁹ F/m** and intercept 354 pF (= ε₀WL/d). The gradient is (ε₀W/d)(κ − 1), with ε₀W/d = 1.77 × 10⁻⁹ F/m, so κ − 1 = 2.50 and **κ = 3.5**.

**(e)** Free σ = κε₀E = 3.72 × 10⁻⁷ C/m², so σᵢ = σ(1 − 1/κ) = **2.7 × 10⁻⁷ C/m²**, negative next to the positive plate. Check: (σ − σᵢ)/ε₀ = 1.2 × 10⁴ V/m.

| Point | What earns it |
|---|---|
| 1 | Plates are equipotentials, so ΔV and E = ΔV/d are the same in both regions |
| 1 | σ in air = 1.06 × 10⁻⁷ C/m², and κ times this in the plastic, with a reason |
| 1 | Derivation of C(x) by adding the charge in the two regions |
| 1 | Graph with labelled axes and units and a best-fit straight line |
| 1 | Gradient 4.3–4.5 × 10⁻⁹ F/m from the line |
| 1 | κ ≈ 3.5 from the gradient (accept 3.4–3.6) |
| 1 | σᵢ ≈ 2.7 × 10⁻⁷ C/m² with sign |

Total: 7 points. κ from C(20 cm)/C(0) = 1240/355 = 3.5 earns the κ point but not the gradient point.
</details>

## Question 7 (constructed response · mixed)

Two large horizontal metal plates, each of area 0.025 m², are 8.0 mm apart in air. The lower plate is grounded and the upper plate is connected to +400 V.

(a) Find the field between the plates (size and direction) and the potential at a point 2.0 mm above the lower plate.
(b) Use E = σ/ε₀ at the surface of the lower plate to find the charge on it. Check your answer using the capacitance.
(c) A proton is released from rest at the upper plate. Use energy to find its speed when it reaches the lower plate.
(d) The upper plate is disconnected from the supply and then connected to ground. Describe what happens to the charges and state how much energy is converted.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** E = ΔV/d = 400 ÷ (8.0 × 10⁻³) = **5.0 × 10⁴ V/m**, **downward** (high to low potential). V rises steadily from 0 at the lower plate, so 2.0 mm up, V = **100 V**.

**(b)** The field points into the lower plate, so its σ is negative: σ = −ε₀E = −(8.85 × 10⁻¹²)(5.0 × 10⁴) = −4.43 × 10⁻⁷ C/m². Q = σA = **−1.1 × 10⁻⁸ C**. Check: C = ε₀A/d = 2.77 × 10⁻¹¹ F, and CΔV = 1.1 × 10⁻⁸ C.

**(c)** ½mv² = eΔV, so v = √(2eΔV/m) = √[2(1.60 × 10⁻¹⁹)(400) ÷ (1.67 × 10⁻²⁷)] = **2.8 × 10⁵ m/s**. Gravity is negligible: mg = 1.6 × 10⁻²⁶ N against eE = 8.0 × 10⁻¹⁵ N.

**(d)** Both plates are now grounded, so the +Q and −Q cancel through ground and the field disappears. The stored energy, ½C(ΔV)² = **2.2 × 10⁻⁶ J**, becomes internal energy in the wires.

| Point | What earns it |
|---|---|
| 1 | E = 5.0 × 10⁴ V/m downward and V = 100 V |
| 1 | Q = −1.1 × 10⁻⁸ C from σ = ε₀E, with its sign |
| 1 | The CΔV check |
| 1 | v = 2.8 × 10⁵ m/s from energy |
| 1 | Discharge through ground explained |
| 1 | U = 2.2 × 10⁻⁶ J converted |

Total: 6 points.
</details>

## How did you do?

Questions 1–3 score 1 point each and Questions 4–7 score 6, 6, 7 and 6: 28 in all. Look at **where** you lost points.

- **Field inside conductors, cavities, shielding or E = σ/ε₀ (Q1, Q4(c)–(d), Q6(a), Q7(b)):** use the [10.1 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-1-electrostatics-conductors-checklist/).
- **Charge sharing or grounding (Q2, Q4(b), Q5(b), Q7(d)):** use the [10.2 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-checklist/).
- **Capacitance, energy or particle motion between plates (Q3, Q4(a), Q5(a) and (c), Q7(c)):** use the [10.3 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-checklist/).
- **Dielectrics, bound charge or finding κ from a graph (Q3, Q6):** use the [10.4 checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-checklist/).

For a quick topic-by-topic check, take the [Unit 10 diagnostic](/advanced-course-resources/physics-c-electricity-and-magnetism/unit-10-diagnostic/).
