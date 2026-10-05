---
resourceId: "mb-ap-physcem-12.2-study-guide"
title: "Magnetism and Moving Charges: Study Guide (Physics C: E&M 12.2)"
description: "Calculus-based guide to the field made by a moving charge and the force F = q(v × B): vector cross products, circular and helical paths, combined E and B fields, and the Hall effect."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.2"]
resourceType: "study-guide"
prerequisites:
  - "Magnetic fields as vector fields, and field-line maps (Topic 12.1)"
  - "Vector cross products in unit-vector form (î × ĵ = k̂ and so on)"
  - "Circular motion, Newton's second law and energy gained through a potential difference (Unit 9)"
prerequisiteResources: ["mb-ap-physcem-12.1-study-guide"]
learningObjectives:
  - "Describe and calculate the magnetic field produced by a single moving charge, including its direction by the right-hand rule"
  - "Use F = q(v × B) in vector and magnitude form, with the correct sign for negative charges"
  - "Explain why a magnetic force does no work, and derive the radius and period of circular motion in a uniform field"
  - "Analyse a charge in a region with both electric and magnetic fields, treating the two forces independently"
  - "Derive the Hall potential difference and use it to find the sign and number density of charge carriers"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A (so μ₀/4π = 1 × 10⁻⁷ T·m/A), e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg. Keep unrounded values until the final step"
related: ["mb-ap-physcem-12.2-revision-notes", "mb-ap-physcem-12.2-practice", "mb-ap-physcem-12.2-checklist"]
next: "mb-ap-physcem-12.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A moving charge makes a magnetic field: B = (μ₀/4π) q(v × r̂)/r². B is perpendicular to both v and r, greatest when they are perpendicular and zero along the line of motion."
  - "A magnetic field pushes on a moving charge with F = q(v × B), of size |q|vB sin θ. Reverse the direction for a negative charge."
  - "The magnetic force is always perpendicular to v, so it does no work: speed and kinetic energy stay constant."
  - "In a uniform field, r = mv/(|q|B) and T = 2πm/(|q|B); the period does not depend on speed."
  - "With E and B together, the forces add independently: F = qE + q(v × B). The Hall effect is a sideways potential difference caused by this magnetic push on moving carriers."
faqs:
  - question: "Does a charge at rest feel a magnetic force?"
    answer: "No. F = q(v × B) is zero when v = 0. A magnetic field acts only on moving charges (and on currents and magnetic materials, which contain moving charges). A charge at rest also produces no magnetic field."
  - question: "Why does a charged particle in a uniform magnetic field move in a circle?"
    answer: "The force is always at right angles to the velocity and has a constant size |q|vB. A constant-size force that is always perpendicular to the motion is exactly what circular motion needs, so it provides the centripetal force."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 12.2. You will use vector cross products in unit-vector form, so revise î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ (and reversing the order changes the sign).

Constants used throughout: **μ₀/4π = 1 × 10⁻⁷ T·m/A**, e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg, mₚ = 1.67 × 10⁻²⁷ kg.

## A moving charge makes a magnetic field

In Topic 12.1 you saw that magnetic dipoles come from moving charge. The simplest case is **one charged object moving with velocity v**. It produces a magnetic field around it. For a slowly moving point charge (v much less than the speed of light):

**B = (μ₀/4π) q (v × r̂) / r²**

Here r is the position vector **from the charge to the point** where you want B, r is its length and r̂ is the unit vector along it. The size is

**B = (μ₀/4π) |q| v sin θ / r²**

where θ is the angle between v and r. What this tells you:

- B depends on the charge's **velocity** and on the **distance** to the point. A charge at rest makes no magnetic field.
- B is **perpendicular to both v and r**. Its direction comes from the right-hand rule for v × r̂: point your fingers along v, curl them towards r, and your thumb gives v × r̂. For a negative charge, B points the opposite way.
- B is **greatest when v and r are perpendicular** (sin θ = 1) and **zero along the line of motion** (θ = 0° or 180°).
- The field lines are **circles around the line of motion**. A quick grip rule: point your right thumb along v (for a positive charge); your fingers curl the way B circles.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="mc-b-title mc-b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mc-b-title">Magnetic field produced by a positive charge moving to the right</title>
<desc id="mc-b-desc">A positive charge q moves to the right along a dashed horizontal line, shown by a velocity arrow v. A dashed position vector r runs from the charge up and to the right to point P, making angle theta with the velocity. At P the field is shown by a circle with a dot, meaning out of the page. At point Q, the same distance below the line, the field is shown by a circle with a cross, meaning into the page. At a point on the dashed line ahead of the charge, the label says B equals zero.</desc>
<defs><marker id="mc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="30" y1="160" x2="530" y2="160" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<circle cx="200" cy="160" r="15" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<text x="200" y="165" font-size="14" font-weight="700" fill="#1d2b44" text-anchor="middle">+q</text>
<line x1="216" y1="160" x2="305" y2="160" stroke="#1d2b44" stroke-width="3" marker-end="url(#mc-arr)"/>
<text x="296" y="183" font-size="15" font-weight="700" fill="#1d2b44">v</text>
<line x1="200" y1="160" x2="337" y2="62" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 4" marker-end="url(#mc-arr)"/>
<text x="250" y="98" font-size="15" font-weight="700" fill="#1d2b44">r</text>
<path d="M245,160 A45,45 0 0,0 236.6,133.8" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="252" y="147" font-size="14" fill="#1d2b44">θ</text>
<circle cx="350" cy="52" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="350" cy="52" r="2.5" fill="#1d2b44"/>
<text x="368" y="44" font-size="13" fill="#1d2b44">P: B out of page</text>
<text x="368" y="60" font-size="12" fill="#1d2b44">(dot = out of page)</text>
<circle cx="350" cy="268" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="342" y1="260" x2="358" y2="276" stroke="#1d2b44" stroke-width="2"/>
<line x1="358" y1="260" x2="342" y2="276" stroke="#1d2b44" stroke-width="2"/>
<text x="368" y="264" font-size="13" fill="#1d2b44">Q: B into page</text>
<text x="368" y="280" font-size="12" fill="#1d2b44">(cross = into page)</text>
<circle cx="470" cy="160" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="470" y="145" font-size="13" fill="#1d2b44" text-anchor="middle">B = 0 ahead</text>
</svg>
<figcaption>Figure 1. The field of a positive charge moving to the right. Above the line of motion B points out of the page; below it B points into the page; on the line of motion B is zero. The field lines are circles around the line of motion. For a negative charge every direction reverses.</figcaption>
</figure>

*(Background: summing this field over all the moving charges in a wire gives the Biot–Savart law for currents, in Topic 12.3.)*

## The force on a moving charge

A magnetic field exerts a force on a charged object **moving through it**:

**F_B = q (v × B)**, with size **F_B = |q| v B sin θ**

where θ is the angle between v and B.

- The force is **perpendicular to both v and B**. Use the right-hand rule for v × B, then reverse it if q is negative.
- It is **zero** if the charge is at rest or moves parallel or antiparallel to B. It is **greatest** when v ⊥ B.
- The units fit: 1 T = 1 N/(C·m/s) = 1 N/(A·m).

### The magnetic force does no work

The power delivered by a force is P = F·v. Because F_B is perpendicular to v at every instant, F_B·v = 0. So dK/dt = 0: **the speed stays constant**. A magnetic field can change the direction of motion, but never the speed.

### Circular and helical motion

If v ⊥ B in a uniform field, the force has constant size |q|vB and always points sideways. That is a centripetal force:

Setting |q|vB = mv²/r gives **r = mv/(|q|B)**

The period is T = 2πr/v = **2πm/(|q|B)**. It does **not** depend on the speed: a faster particle moves on a bigger circle and takes the same time to go round. Positive charges in a field into the page go round anticlockwise; negative charges go clockwise.

If v has a part along B, that part feels no force and stays the same. The perpendicular part makes the circle. Together they give a **helix**, with radius m v⊥/(|q|B) and **pitch** (distance moved along B per turn) v∥T.

This is why many large particle accelerators are rings: a magnetic field bends the beam round a closed path, and electric fields add energy on each lap.

## Electric and magnetic fields together

In a region with both an electric field and a magnetic field, a moving charge feels **two independent forces**. Each acts as if the other field were not there:

**F = qE + q(v × B)**

The electric force does not depend on v; the magnetic force does. If E, B and v are mutually perpendicular and arranged so that the forces oppose, the net force is zero when qE = qvB, that is when **v = E/B**. Faster charges are pushed one way by the stronger magnetic force, slower ones the other way.

## The Hall effect

A current in a conductor is carriers drifting with speed v_d. Put a strip of width w and thickness t in a field B perpendicular to its face. The magnetic force pushes the carriers sideways. They pile up on one edge, leaving the opposite charge on the other edge. This creates a sideways electric field E_H and a potential difference across the width, the **Hall potential difference** ΔV_H.

Charge builds up until the electric force balances the magnetic force on each carrier:

qE_H = qv_dB, so E_H = v_dB and **ΔV_H = E_H w = v_dBw**

The current is I = nqv_dA = nqv_d(wt), where n is the number of carriers per unit volume. Substituting v_d = I/(nqwt):

**ΔV_H = IB/(nqt)**

Two uses follow. The **sign** of ΔV_H (which edge is higher) tells you whether the carriers are positive or negative. The **size** gives n, or, if n is known, it lets a "Hall probe" measure B. Metals have huge n, so their Hall potential differences are tiny; semiconductors give much larger ones.

## Worked example 1: the field of a moving alpha particle

**Question.** An alpha particle (q = +2e = 3.20 × 10⁻¹⁹ C) passes through the origin moving at 1.5 × 10⁷ m/s in the +x direction. At that instant, find B at P (0, 50 nm, 0), at Q (50 nm, 50 nm, 0) and at S (100 nm, 0, 0).

1. **At P.** r = 50 nm = 5.0 × 10⁻⁸ m, r̂ = ĵ, so v × r̂ = v(î × ĵ) = v k̂ and sin θ = 1. B = (1 × 10⁻⁷)(3.20 × 10⁻¹⁹)(1.5 × 10⁷) ÷ (5.0 × 10⁻⁸)² = **1.92 × 10⁻⁴ T, in the +z direction** (out of the page if x is right and y is up).
2. **At Q.** r = √2 × 50 nm = 70.7 nm and θ = 45°. B = (1 × 10⁻⁷)(3.20 × 10⁻¹⁹)(1.5 × 10⁷)(sin 45°) ÷ (7.07 × 10⁻⁸)² = **6.79 × 10⁻⁵ T, also +z**, because î × (î + ĵ)/√2 = k̂/√2.
3. **At S.** r is along v, so v × r̂ = 0: **B = 0**.

**Check.** From P to Q, r² doubles and sin θ falls to 0.707, so B should fall by 0.707/2 = 0.354; indeed 6.79 × 10⁻⁵ ÷ 1.92 × 10⁻⁴ = 0.354. An electron with the same velocity would give a field at P half as big (charge e, not 2e) and pointing in the −z direction.

**Interpretation.** Even a fast particle makes only a small field, except very close to it. Large fields need huge numbers of moving charges: currents.

## Worked example 2: an electron beam bent into a circle

**Question.** An electron, starting from rest, is accelerated through a potential difference of 500 V. It then enters a uniform 1.2 mT field directed into the page, moving to the right (+x), at right angles to the field. (a) Find its speed. (b) Find the size and direction of the magnetic force as it enters. (c) Find the radius and period of its path. (d) The accelerating potential difference is doubled. What happens to the radius and the period?

**(a)** Energy: eΔV = ½mₑv², so v = √(2eΔV/mₑ) = √(2 × 1.60 × 10⁻¹⁹ × 500 ÷ 9.11 × 10⁻³¹) = **1.33 × 10⁷ m/s**. This is about 4% of the speed of light, so the non-relativistic formula is fine.

**(b)** F = evB = (1.60 × 10⁻¹⁹)(1.33 × 10⁷)(1.2 × 10⁻³) = **2.5 × 10⁻¹⁵ N**. Direction: F = q(v × B) = (−e)(v î × (−B k̂)) = (−e)(vB ĵ) = −evB ĵ, so the force points in the **−y direction** (down the page).

**(c)** r = mₑv/(eB) = (9.11 × 10⁻³¹ × 1.33 × 10⁷) ÷ (1.60 × 10⁻¹⁹ × 1.2 × 10⁻³) = **0.063 m (6.3 cm)**. T = 2πmₑ/(eB) = **3.0 × 10⁻⁸ s**. The electron curves downward and goes round clockwise.

**(d)** v ∝ √ΔV, so v rises by √2 and r = mv/(eB) rises by **√2**, to 8.9 cm. The period does **not** change, because T = 2πm/(eB) has no v in it.

**Check.** Units of mv/(qB): kg·(m/s) ÷ (C·N/(C·m/s)) = kg·m²/s² ÷ N = m. The force does no work, so the electron leaves the field (if it does) at the same 1.33 × 10⁷ m/s.

## Worked example 3: the Hall effect in a copper strip

**Question.** A copper strip 2.0 cm wide and 0.10 mm thick lies in the plane of the page and carries a current of 5.0 A to the right (+x). A uniform 0.80 T field points into the page (−z). Copper has n = 8.5 × 10²⁸ free electrons per m³. Find (a) the drift speed, (b) the Hall potential difference and (c) which edge is at the higher potential.

**(a)** v_d = I/(newt) = 5.0 ÷ (8.5 × 10²⁸ × 1.60 × 10⁻¹⁹ × 0.020 × 1.0 × 10⁻⁴) = **1.8 × 10⁻⁴ m/s**.

**(b)** ΔV_H = IB/(net) = (5.0 × 0.80) ÷ (8.5 × 10²⁸ × 1.60 × 10⁻¹⁹ × 1.0 × 10⁻⁴) = **2.9 × 10⁻⁶ V**, about 3 μV.

**(c)** The carriers are electrons drifting to the **left** (−x). First, v × B = (−v_d î) × (−B k̂) = v_dB(î × k̂) = −v_dB ĵ. Multiply by q = −e: F = **+ev_dB ĵ**. The electrons are pushed to the **top** edge, so the top becomes negative and the **bottom edge is at the higher potential**.

**Check.** ΔV_H = v_dBw = (1.8 × 10⁻⁴)(0.80)(0.020) = 2.9 × 10⁻⁶ V, the same. A positive carrier moving right would be pushed to the top too (try it), making the top **higher**. That difference is how the Hall effect reveals the sign of the carriers.

## Common misconceptions

- **"The magnetic force speeds particles up."** It is always perpendicular to v, so it does no work. Only an electric field can change the speed.
- **"F_B points along B."** It is perpendicular to B (and to v), unlike the electric force, which is along E.
- **Forgetting the sign of q.** For an electron, find v × B and then reverse it.
- **"A faster particle takes longer to go round."** It travels a bigger circle at a higher speed; the period 2πm/(|q|B) is the same.
- **"A moving charge's field points along its velocity."** B is perpendicular to v and circles the line of motion. On that line it is zero.
- **"In a region with E and B, one field cancels the other."** The two forces are independent and add as vectors; they cancel only for one particular velocity.
- **"The Hall potential difference is along the current."** It is across the width, perpendicular to both I and B.

## Where this leads

Next, Topic 12.3 adds up the fields of the many moving charges in a wire, and finds the force on a current: [Magnetic Fields of Current-Carrying Wires and the Biot–Savart Law](/advanced-course-resources/physics-c-electricity-and-magnetism/12-3-magnetic-fields-current-carrying-wires-study-guide/). Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-checklist/).
