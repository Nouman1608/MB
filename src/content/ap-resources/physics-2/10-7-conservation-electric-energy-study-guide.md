---
resourceId: "mb-ap-phys2-10.7-study-guide"
title: "Conservation of Electric Energy: Study Guide (Physics 2 10.7)"
description: "Use ΔU_E = qΔV and energy conservation to predict how a charged particle speeds up or slows down as it moves between points at different electric potentials."
course: "physics-2"
unit: 10
topics: ["10.7"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential energy of a system of point charges (Topic 10.4)"
  - "Electric potential and potential difference, V = kq/r and equipotential lines (Topic 10.5)"
  - "The uniform field between parallel plates (Topic 10.6)"
  - "Kinetic energy and conservation of energy from mechanics"
prerequisiteResources: ["mb-ap-phys2-10.6-study-guide"]
learningObjectives:
  - "Calculate the change in electric potential energy when a charge moves through a potential difference, with the correct sign"
  - "Apply energy conservation to find the change in kinetic energy, or the speed, of a charged particle"
  - "Predict which way a released positive or negative charge moves in terms of potential"
  - "Derive and use symbolic expressions for speed, and compare particles with different charges and masses"
  - "Sketch kinetic and potential energy against position for a charge in a uniform field or near a point charge"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C; m_e = 9.11 × 10⁻³¹ kg; m_p = 1.67 × 10⁻²⁷ kg; k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Keep unrounded values until the final step"
related: ["mb-ap-phys2-10.7-revision-notes", "mb-ap-phys2-10.7-practice", "mb-ap-phys2-10.7-checklist"]
next: "mb-ap-phys2-10.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "When a charge q moves through a potential difference ΔV, the electric potential energy of the charge–field system changes by ΔU_E = qΔV."
  - "If only electric forces do work, ΔK + ΔU_E = 0, so ΔK = −qΔV."
  - "Released from rest, a positive charge moves toward lower potential and a negative charge toward higher potential. Both lose U_E and gain K."
  - "From rest, ½mv² = |q||ΔV|, so v = √(2|q||ΔV|/m). The speed depends only on the potential difference, not on the path or the distance."
  - "Moving along an equipotential line causes no change in U_E, so it causes no change in K."
faqs:
  - question: "Is ΔU_E = qΔV the same as the work done by the field?"
    answer: "No. They are equal in size and opposite in sign. The work done by the electric field on the charge is W = −qΔV = −ΔU_E. If you treat the charge alone as the system, use the work; if you include the field (or the source charges), use the potential energy. Never use both at once."
  - question: "Do I need to include gravity for electrons and protons?"
    answer: "Almost never. For a proton in a field of 1.0 × 10⁴ V/m the electric force is about 10¹¹ times its weight. Include gravity only for large, lightly charged objects such as charged oil drops or small spheres, or when the question tells you to."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From potential to potential energy

In Topic 10.5 you met **electric potential V**: the electric potential energy per unit charge at a point. It is a property of the place, set up by the source charges. It does not depend on what you put there.

Now put a charge q at that place. The system of the charge and the field (or, equivalently, the charge and the source charges) has electric potential energy U_E = qV. If the charge moves from a point at potential V_i to a point at potential V_f, the potential energy of the system changes by

**ΔU_E = qΔV = q(V_f − V_i)**

Units check: C × V = C × (J/C) = J.

The sign of q matters as much as the sign of ΔV. Look at a charge of size 2.0 μC that moves from a point at 50 V to a point at 10 V, so ΔV = −40 V:

| Charge | ΔV | ΔU_E = qΔV | What happens to U_E |
|---|---|---|---|
| +2.0 μC | −40 V | −8.0 × 10⁻⁵ J | decreases |
| −2.0 μC | −40 V | +8.0 × 10⁻⁵ J | increases |

The rule in words:

- A **positive** charge has **less** U_E at **lower** potential.
- A **negative** charge has **less** U_E at **higher** potential.

Only the potential difference matters. The path between the two points does not. If the start and end points are on the same equipotential line, ΔV = 0 and ΔU_E = 0, however far or however curved the route.

## Energy conservation for a moving charge

Choose the system as the charged object **plus** the electric field (or plus the fixed source charges). If no external force does work on the system and no energy leaves as heating, the total energy of the system is constant:

**ΔK + ΔU_E = 0, so ΔK = −qΔV**

Every joule of electric potential energy lost becomes a joule of kinetic energy, and the other way round. This is the same idea as a ball rolling down a hill, with qV playing the part of mgh.

Two variations you should be able to handle:

- **An external force also does work.** Then ΔK + ΔU_E = W_ext. A common case is a hand or a machine that moves a charge **slowly**, at constant speed. Then ΔK = 0, so W_ext = ΔU_E = qΔV.
- **You choose the charge alone as the system.** Now there is no potential energy inside the system. Instead the field does work on the charge: W_field = −qΔV, and ΔK = W_field. You get the same answer. Just do not count the energy twice by using W_field and ΔU_E together.

**What about gravity?** For particles such as electrons and protons, gravity is far too small to matter. A proton in a field of 1.0 × 10⁴ V/m feels an electric force eE = 1.6 × 10⁻¹⁵ N, but its weight is only m_p g = 1.6 × 10⁻²⁶ N. Ignore gravity for particles unless the question says otherwise. For a larger charged object you can add ΔU_g to the energy equation.

## Which way does a released charge move?

A charge released from rest can only start moving in a direction that gives it kinetic energy, so its potential energy must fall:

- A **positive** charge moves toward **lower** potential, in the direction of the electric field.
- A **negative** charge moves toward **higher** potential, against the field.

Remember from Topic 10.5 that the electric field points in the direction of decreasing potential, and that equipotential lines are perpendicular to the field. Figure 1 shows both cases between two parallel plates.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pp-title pp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pp-title">Equipotential lines between two charged parallel plates</title>
<desc id="pp-desc">Two vertical parallel plates. The left plate is positive and at 200 volts; the right plate is negative and at 0 volts. Between them are three dashed vertical equipotential lines labelled 150, 100 and 50 volts, equally spaced. Horizontal arrows labelled E point from left to right. A small circle marked plus starts near the left plate and an arrow shows it moving right, toward lower potential. A small circle marked minus starts near the right plate and an arrow shows it moving left, toward higher potential.</desc>
<defs><marker id="pp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="100" y="40" width="14" height="240" fill="#1d2b44"/>
<rect x="446" y="40" width="14" height="240" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="107" y="30">+ plate, 200 V</text>
<text x="453" y="30">− plate, 0 V</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4">
<line x1="197" y1="45" x2="197" y2="275"/>
<line x1="280" y1="45" x2="280" y2="275"/>
<line x1="363" y1="45" x2="363" y2="275"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="197" y="300">150 V</text><text x="280" y="300">100 V</text><text x="363" y="300">50 V</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pp-arr)">
<line x1="235" y1="70" x2="325" y2="70"/>
<line x1="235" y1="250" x2="325" y2="250"/>
</g>
<text x="280" y="62" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">E</text>
<circle cx="140" cy="130" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="140" y="135" font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<line x1="156" y1="130" x2="300" y2="130" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pp-arr)"/>
<text x="230" y="120" font-size="12" fill="#1d2b44" text-anchor="middle">to lower V</text>
<circle cx="420" cy="195" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="420" y="200" font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle">−</text>
<line x1="404" y1="195" x2="260" y2="195" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#pp-arr)"/>
<text x="330" y="185" font-size="12" fill="#1d2b44" text-anchor="middle">to higher V</text>
</svg>
<figcaption>Figure 1. Between the plates the field E points from the 200 V plate to the 0 V plate. A positive charge released from rest moves with the field, toward lower potential; a negative charge moves against it, toward higher potential. Both lose electric potential energy and gain kinetic energy. The dashed equipotential lines are equally spaced because the field is uniform.</figcaption>
</figure>

## How fast? The speed after a potential difference

Start from rest and let only electric forces act. Then K_f = −qΔV = |q||ΔV|, so

**½mv² = |q||ΔV|, giving v = √(2|q||ΔV| / m)**

This expression tells you a lot without any numbers:

- **v ∝ √ΔV.** Four times the potential difference gives twice the speed. The kinetic energy, though, is directly proportional to ΔV.
- **v ∝ 1/√m** for the same charge. An electron and a proton accelerated through the same ΔV gain the **same** kinetic energy (same |q|), but the electron is far faster because its mass is much smaller.
- **Distance does not appear.** Moving the plates further apart with the same ΔV gives a weaker field and a longer run, and the final speed is the same. Only the time taken changes.

**Comparing two particles.** Particle X has charge +q and mass m. Particle Y has charge +2q and mass 4m. Both start from rest and cross the same ΔV. Y gains **twice** the kinetic energy (K ∝ q). Its speed ratio is v_Y/v_X = √[(2q/4m) ÷ (q/m)] = √(1/2) ≈ 0.707. So Y has more kinetic energy but less speed.

*Background, not required:* physicists often measure particle energies in **electronvolts** (eV). One electronvolt is the kinetic energy gained by a charge e crossing 1 V, so 1 eV = 1.60 × 10⁻¹⁹ J. You can always work in joules instead.

## Energy graphs

You may be asked to sketch U_E and K against position. Two cases come up most often.

**Uniform field (between plates).** V changes linearly with distance, so U_E = qV is a straight line and K, which is the total energy minus U_E, is a straight line too. For a charge released from rest, K against distance is a straight line through the origin. (Speed against distance is a √ curve, and K against **time** is a curve, because the particle covers more distance each second.)

**Near a fixed point charge.** V = kQ/r, so U_E = kqQ/r is a 1/r curve. For a like-signed pair (repulsion), U_E rises steeply as r gets small. A particle fired toward the fixed charge slows down; it stops at the **distance of closest approach**, where all its K has become U_E, and then it is pushed back out. Figure 2 shows this for the numbers in Worked example 2.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="ek-title ek-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ek-title">Potential and kinetic energy of a proton approaching a fixed positive charge</title>
<desc id="ek-desc">Energy in units of 10 to the minus 17 joules on the vertical axis from 0 to 2.5, distance r from the fixed charge in metres on the horizontal axis from 0 to 0.7. A horizontal dotted line at about 2.36 marks the constant total energy. A solid curve for electric potential energy U falls from 2.36 at r equal to 0.122 metres to about 0.48 at 0.60 metres and keeps falling slowly beyond. A dashed curve for kinetic energy K rises from zero at r equal to 0.122 metres to about 1.88 at 0.60 metres. At every r the two curves add to the total. The start point at 0.60 metres and the closest approach at 0.122 metres are marked with vertical guide lines.</desc>
<defs><marker id="ek-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="530" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#ek-arr)"/>
<line x1="80" y1="340" x2="80" y2="50" stroke="#1d2b44" stroke-width="2" marker-end="url(#ek-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="140" y1="340" x2="140" y2="346" stroke="#1d2b44"/><text x="140" y="360">0.1</text>
<line x1="200" y1="340" x2="200" y2="346" stroke="#1d2b44"/><text x="200" y="360">0.2</text>
<line x1="260" y1="340" x2="260" y2="346" stroke="#1d2b44"/><text x="260" y="360">0.3</text>
<line x1="320" y1="340" x2="320" y2="346" stroke="#1d2b44"/><text x="320" y="360">0.4</text>
<line x1="380" y1="340" x2="380" y2="346" stroke="#1d2b44"/><text x="380" y="360">0.5</text>
<line x1="440" y1="340" x2="440" y2="346" stroke="#1d2b44"/><text x="440" y="360">0.6</text>
<line x1="500" y1="340" x2="500" y2="346" stroke="#1d2b44"/><text x="500" y="360">0.7</text>
<text x="300" y="385" font-size="13">Distance from fixed charge r (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="288" x2="80" y2="288" stroke="#1d2b44"/><text x="70" y="292">0.5</text>
<line x1="74" y1="236" x2="80" y2="236" stroke="#1d2b44"/><text x="70" y="240">1.0</text>
<line x1="74" y1="184" x2="80" y2="184" stroke="#1d2b44"/><text x="70" y="188">1.5</text>
<line x1="74" y1="132" x2="80" y2="132" stroke="#1d2b44"/><text x="70" y="136">2.0</text>
<line x1="74" y1="80" x2="80" y2="80" stroke="#1d2b44"/><text x="70" y="84">2.5</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Energy (× 10⁻¹⁷ J)</text>
<line x1="153" y1="95" x2="510" y2="95" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="508" y="88" font-size="12" fill="#1d2b44" text-anchor="end">total K + U_E (constant)</text>
<line x1="153" y1="95" x2="153" y2="340" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="440" y1="95" x2="440" y2="340" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<polyline points="153.2,94.8 158.0,109.9 170.0,140.5 188.0,173.8 212.0,204.0 242.0,229.2 278.0,249.3 320.0,265.2 368.0,277.7 416.0,286.6 440.0,290.1 470.0,294.0 500.0,297.3" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="153.2,340.0 158.0,324.9 170.0,294.2 188.0,261.0 212.0,230.7 242.0,205.6 278.0,185.4 320.0,169.5 368.0,157.1 416.0,148.2 440.0,144.6 470.0,140.8 500.0,137.5" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<g font-size="13" font-weight="600" fill="#1d2b44">
<text x="232" y="250">U_E (solid)</text>
<text x="330" y="160">K (dashed)</text>
</g>
<g font-size="11" fill="#1d2b44" text-anchor="middle">
<text x="153" y="330" text-anchor="start" dx="4">closest approach</text>
<text x="440" y="122">start</text>
</g>
</svg>
<figcaption>Figure 2. A proton fired toward a fixed +2.0 nC charge from r = 0.60 m (Worked example 2). The solid curve is U_E = kqQ/r, the dashed curve is K, and the dotted line is their constant sum. K falls to zero at the closest approach, r ≈ 0.122 m. The proton cannot reach any r where U_E would exceed the total energy.</figcaption>
</figure>

## Worked example 1: an electron accelerated between plates

**Question.** An electron is released from rest next to the negative plate of a pair of parallel plates 2.0 cm apart. The potential difference between the plates is 250 V. Find the kinetic energy and speed of the electron when it reaches the positive plate.

1. The electron is negative, so it moves toward the **higher** potential: from the negative plate to the positive plate. ΔV = +250 V.
2. Change in potential energy: ΔU_E = qΔV = (−1.60 × 10⁻¹⁹ C)(+250 V) = −4.0 × 10⁻¹⁷ J. U_E falls, as expected for a charge released from rest.
3. Energy conservation: ΔK = −ΔU_E = +4.0 × 10⁻¹⁷ J. It started from rest, so K = 4.0 × 10⁻¹⁷ J.
4. Speed: v = √(2K/m) = √[2(4.0 × 10⁻¹⁷ J) ÷ (9.11 × 10⁻³¹ kg)] = 9.37 × 10⁶ m/s.

**Answer.** K = 4.0 × 10⁻¹⁷ J and v ≈ 9.4 × 10⁶ m/s.

**Check by forces.** The field is E = ΔV/d = 250 V ÷ 0.020 m = 1.25 × 10⁴ V/m, so the acceleration is a = eE/m = 2.20 × 10¹⁵ m/s². Kinematics gives v = √(2ad) = 9.37 × 10⁶ m/s, the same answer. The energy method was quicker and did not need the plate spacing at all. The speed is about 3% of the speed of light, so the ordinary formula K = ½mv² is fine here.

## Worked example 2: closest approach to a fixed charge

**Question.** A small sphere carrying +2.0 nC is fixed in place. A proton is 0.60 m from it and moving straight toward it at 1.50 × 10⁵ m/s. How close does the proton get? Ignore gravity.

1. Potential at the start: V_0 = kQ/r_0 = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ 0.60 = 29.97 V.
2. Initial kinetic energy: K_0 = ½(1.67 × 10⁻²⁷ kg)(1.50 × 10⁵ m/s)² = 1.879 × 10⁻¹⁷ J.
3. At closest approach the proton is momentarily at rest, so K = 0. Energy conservation: ΔU_E = −ΔK = +K_0, so e(V_min − V_0) = K_0.
4. The proton climbs a potential difference K_0/e = 1.879 × 10⁻¹⁷ J ÷ 1.60 × 10⁻¹⁹ C = 117.4 V. So V_min = 29.97 V + 117.4 V = 147.4 V.
5. Distance: r_min = kQ/V_min = 17.98 V·m ÷ 147.4 V = 0.122 m.

**Answer.** The proton gets to within about 0.12 m of the sphere, then turns back.

**Interpretation and check.** Total energy = U_E + K = e(29.97 V) + 1.879 × 10⁻¹⁷ J = 2.358 × 10⁻¹⁷ J. At r_min, U_E = e(147.4 V) = 2.358 × 10⁻¹⁷ J, which matches. Figure 2 shows the energy moving from K to U_E and back. When the proton returns to r = 0.60 m it has its original speed, 1.50 × 10⁵ m/s, because U_E is the same there. Far away, where U_E → 0, all 2.358 × 10⁻¹⁷ J is kinetic, so it leaves at about 1.68 × 10⁵ m/s.

## Common misconceptions

- **"Lower potential always means lower potential energy."** Only for a positive charge. For a negative charge, U_E = qV is lower where V is higher. Always keep the sign of q in ΔU_E = qΔV.
- **Mixing up V and U_E.** V is in volts and belongs to a location. U_E is in joules and belongs to a system of charges. A point can have a high potential while a negative charge there has a low potential energy.
- **"Every charge moves toward lower potential."** Negative charges move toward higher potential, against the field.
- **Counting the energy twice.** Use either W_field on the charge, or ΔU_E of the charge–field system. Using both doubles the change in K.
- **"A longer path or a bigger gap gives more speed."** For a fixed ΔV the change in K is fixed. The path and the distance only change how long the trip takes.
- **"The heavier particle gets less energy."** Kinetic energy gained is |q||ΔV|; mass does not appear. Mass only changes the speed that energy buys.
- **"K against time is a straight line in a uniform field."** K against **distance** is linear. Against time it curves upward, because the particle speeds up.

## Where this leads

This topic closes Unit 10 and links it to circuits. In Topic 11.1 a battery keeps a potential difference across a wire, and charges lose electric potential energy as they move through it. That energy has to go somewhere, which is where the study of current begins; resistance and power follow later in Unit 11. Read on in the [electric current study guide](/advanced-course-resources/physics-2/11-1-electric-current-study-guide/). If you need to revisit the uniform field between plates, go back to [capacitors](/advanced-course-resources/physics-2/10-6-capacitors-study-guide/).

Now test yourself with the [practice questions](/advanced-course-resources/physics-2/10-7-conservation-electric-energy-practice/), then use the [revision notes](/advanced-course-resources/physics-2/10-7-conservation-electric-energy-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/10-7-conservation-electric-energy-checklist/) to consolidate.
