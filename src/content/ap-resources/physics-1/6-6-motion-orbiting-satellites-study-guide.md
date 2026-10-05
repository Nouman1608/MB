---
resourceId: "mb-ap-phys1-6.6-study-guide"
title: "Motion of Orbiting Satellites: Study Guide (Physics 1 6.6)"
description: "Energy and angular momentum of satellites in circular and elliptical orbits, why the central body barely moves, potential energy zero at infinity and escape speed, with algebra only."
course: "physics-1"
unit: 6
topics: ["6.6"]
resourceType: "study-guide"
prerequisites:
  - "Newton's law of gravitation and circular orbits, GMm/r² = mv²/r (Topics 2.6 and 2.9)"
  - "Gravitational potential energy U_g = −Gm₁m₂/r, zero at infinite separation (Topic 3.3)"
  - "Conservation of energy (Topic 3.4) and conservation of angular momentum, L = mvr sin θ (Topics 6.3 and 6.4)"
prerequisiteResources: ["mb-ap-phys1-6.5-study-guide"]
learningObjectives:
  - "Explain why a massive central body can be treated as stationary when a much lighter satellite orbits it"
  - "Derive and use K = GMm/(2r), U = −GMm/r and E = −GMm/(2r) for a circular orbit, and explain why all three stay constant"
  - "Use conservation of angular momentum and of mechanical energy to compare a satellite's speed and energies at different points of an elliptical orbit"
  - "Explain what the sign of the total mechanical energy says about whether a satellite is bound"
  - "Derive the escape speed v_esc = √(2GM/r) from conservation of energy and use it, including for launches below and above escape speed"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. G = 6.67 × 10⁻¹¹ N·m²/kg². Distances r are measured from the centre of the central body. Answers to 2 or 3 significant figures; use powers of ten carefully"
related: ["mb-ap-phys1-6.6-revision-notes", "mb-ap-phys1-6.6-practice", "mb-ap-phys1-6.6-checklist"]
next: "mb-ap-phys1-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "When a satellite's mass is tiny compared with the central body's, the central body's motion is negligible and you treat it as fixed."
  - "Gravity on a satellite points at the centre of the central body, so it exerts no torque about that centre: the satellite's angular momentum is constant in every orbit."
  - "With only gravity acting, the satellite–central-body system's mechanical energy is constant. U_g = −GMm/r is zero at infinite separation."
  - "Circular orbit: r and v are fixed, so K, U, E and L are all constant, with E = −GMm/(2r) = −K."
  - "Elliptical orbit: E and L are constant, but K and U trade. The satellite is fastest at its closest point."
  - "Escape speed makes the total energy zero: v_esc = √(2GM/r). It does not depend on the satellite's mass."
faqs:
  - question: "Why is the total energy of an orbiting satellite negative?"
    answer: "Because the zero of gravitational potential energy is at infinite separation. A satellite that is bound to a planet does not have enough kinetic energy to reach infinity, so K + U is less than zero."
  - question: "Do I need Kepler's first and second laws?"
    answer: "No. The course does not expect them. You do need to explain, from conservation of angular momentum, why a satellite moves faster when it is closer to the central body."
  - question: "Does the direction of launch matter for escape speed?"
    answer: "Not for the energy argument. Kinetic energy depends only on speed, so any direction works as long as the path does not hit the planet and nothing but gravity acts. Real launches also have to get through an atmosphere, which this course ignores."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It uses algebra and graphs only. It brings together circular orbits from [Topic 2.9](/advanced-course-resources/physics-1/2-9-circular-motion-study-guide/), gravitational potential energy from [Topic 3.3](/advanced-course-resources/physics-1/3-3-potential-energy-study-guide/) and conservation of angular momentum from [Topic 6.4](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/). The planets, moons and probes in the examples are fictional.

## A two-object system

Take a system of two objects that interact **only through gravity**: a planet of mass M and a satellite of mass m. No other forces act. By Newton's third law, the planet pulls the satellite with a force of size GMm/r², and the satellite pulls the planet with the **same** size of force.

Equal forces, very different masses. The accelerations are GM/r² for the satellite and Gm/r² for the planet, so their ratio is m/M. For a 1000 kg satellite and a planet of 6.0 × 10²⁴ kg, the planet's acceleration is about **1.7 × 10⁻²²** of the satellite's. The centre of mass of the system sits, for all practical purposes, at the planet's centre.

So when the satellite's mass is negligible compared with the central body's, **the central body's motion is negligible**. You treat it as fixed and study the satellite alone, measuring every distance r from the central body's **centre**. (If the two masses were similar, as in a pair of stars, both would move about their common centre of mass. That case is not needed here.)

## Two conservation laws constrain every orbit

**Angular momentum.** Gravity on the satellite always points at the centre of the planet. A force that points through a point has no lever arm about it, so its torque about the planet's centre is **zero**. With no torque, the satellite's angular momentum about that centre is constant (Topic 6.4):

**L = mvr sin θ = constant**

Here θ is the angle between the satellite's velocity and the line from the planet to the satellite.

**Mechanical energy.** Gravity is the only force, and it is internal to the satellite–planet system. So the system's mechanical energy is constant:

**E = K + U_g = ½mv² − GMm/r = constant**

U_g is defined to be **zero when the satellite is infinitely far away**. At any finite distance it is negative, and it gets more negative as the satellite gets closer.

## Circular orbits: everything is constant

In a circular orbit, gravity alone provides the centripetal force (Topic 2.9):

GMm/r² = mv²/r, so **v² = GM/r**

Multiply by ½m to get the kinetic energy, then add the potential energy:

- **K = ½mv² = GMm/(2r)**
- **U_g = −GMm/r**
- **E = K + U_g = −GMm/(2r)**

So in a circular orbit, E = −K and U_g = 2E. Because r and v do not change, **K, U_g, E and L = mvr are all constant**. (The velocity is always perpendicular to the radius, so sin θ = 1.)

### Comparing orbits of different radius

Figure 1 shows how the three energies depend on the orbital radius. Read it carefully: it compares **different** circular orbits. A satellite stays at one value of r.

<figure>
<svg viewBox="0 0 600 330" role="img" aria-labelledby="p1-66-en-title p1-66-en-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-66-en-title">Energies of a satellite in circular orbits of different radius</title>
<desc id="p1-66-en-desc">Energy, in units of GMm over R, from −1 to +0.5 on the vertical axis, against orbital radius r from R to 5R on the horizontal axis, where R is the planet's radius. Three curves. The solid curve, kinetic energy K, is positive and falls from 0.5 at r = R towards zero. The dashed curve, potential energy U, is negative and rises from −1 at r = R towards zero. The dotted curve, total energy E, is negative and rises from −0.5 at r = R towards zero. At every radius E is halfway between U and zero and equals minus K. All three curves approach zero as r grows.</desc>
<rect x="0" y="0" width="600" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M168 30 V285 M256 30 V285 M344 30 V285 M432 30 V285 M520 30 V285"/>
<path d="M80 40 H530 M80 200 H530 M80 280 H530"/>
</g>
<path d="M80 120 H535 M80 290 V25" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="168.0,40.0 190.0,56.0 212.0,66.7 234.0,74.3 256.0,80.0 278.0,84.4 300.0,88.0 322.0,90.9 344.0,93.3 366.0,95.4 388.0,97.1 410.0,98.7 432.0,100.0 454.0,101.2 476.0,102.2 498.0,103.2 520.0,104.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5" points="168.0,280.0 190.0,248.0 212.0,226.7 234.0,211.4 256.0,200.0 278.0,191.1 300.0,184.0 322.0,178.2 344.0,173.3 366.0,169.2 388.0,165.7 410.0,162.7 432.0,160.0 454.0,157.6 476.0,155.6 498.0,153.7 520.0,152.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4" points="168.0,200.0 190.0,184.0 212.0,173.3 234.0,165.7 256.0,160.0 278.0,155.6 300.0,152.0 322.0,149.1 344.0,146.7 366.0,144.6 388.0,142.9 410.0,141.3 432.0,140.0 454.0,138.8 476.0,137.8 498.0,136.8 520.0,136.0"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="168" y="304">R</text><text x="256" y="304">2R</text><text x="344" y="304">3R</text><text x="432" y="304">4R</text><text x="520" y="304">5R</text>
<text x="344" y="324" font-size="13">orbital radius, r</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="44">+0.5</text><text x="72" y="124">0</text><text x="72" y="204">−0.5</text><text x="72" y="284">−1.0</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">energy (units of GMm/R)</text>
<g font-size="13" fill="#1d2b44" font-weight="600"><text x="538" y="108">K</text><text x="538" y="140">E</text><text x="538" y="160">U</text></g>
<g font-size="12" fill="#1d2b44">
<text x="330" y="38">solid: K = GMm/(2r)</text>
<text x="330" y="54">dotted: E = −GMm/(2r)</text>
<text x="330" y="70">dashed: U = −GMm/r</text>
</g>
</svg>
<figcaption>Figure 1. Energies of a satellite in circular orbits of different radius, in units of GMm/R. At every radius, U is twice E and K is the same size as E with the opposite sign. A larger orbit has less kinetic energy but more (less negative) total energy.</figcaption>
</figure>

Moving to a **larger** circular orbit:

- v and K **decrease** (the satellite is slower).
- U_g **increases** (becomes less negative).
- E **increases** (becomes less negative), so energy must be supplied.
- L = mvr **increases**, since v ∝ 1/√r and so L ∝ √r. Moving to a new orbit needs an external push, such as a rocket burn.

## Elliptical orbits: energy and angular momentum trade

An elliptical orbit brings the satellite closer to the planet and then farther away. Gravity still exerts no torque about the planet's centre, and it is still the only force. So **E and L stay constant, but K and U_g change**.

<figure>
<svg viewBox="0 0 560 350" role="img" aria-labelledby="p1-66-ell-title p1-66-ell-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-66-ell-title">An elliptical orbit with the closest and farthest points marked</title>
<desc id="p1-66-ell-desc">An ellipse wider than it is tall. The planet sits off-centre, inside the ellipse near its left end. The closest point of the orbit is at the left end, 8.0 times ten to the six metres from the planet's centre; there a long velocity arrow points straight up, perpendicular to the radius, labelled 8.66 kilometres per second. The farthest point is at the right end, 2.4 times ten to the seven metres from the planet's centre; there a short velocity arrow points straight down, labelled 2.89 kilometres per second. A small arrow on the ellipse shows the direction of motion. Notes say that at both points the velocity is perpendicular to the radius, so L = mvr, and that kinetic energy is largest and potential energy lowest at the closest point.</desc>
<defs><marker id="p1-66-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="350" fill="#ffffff"/>
<ellipse cx="300" cy="170" rx="160" ry="138.6" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="220" cy="170" r="14" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="220" cy="170" r="2.5" fill="#1d2b44"/>
<path d="M220 170 H140" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="4 3"/>
<path d="M220 170 H460" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="4 3"/>
<g fill="#1d2b44"><circle cx="140" cy="170" r="6"/><circle cx="460" cy="170" r="6"/></g>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#p1-66-arr)">
<path d="M140 170 V95"/>
<path d="M460 170 V195"/>
<path d="M300 31.4 L320 32"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="202" y="200">planet</text>
<text x="40" y="100">closest point</text>
<text x="40" y="116">v = 8.66 km/s</text>
<text x="150" y="150">r = 8.0 × 10⁶ m</text>
<text x="470" y="160">farthest point</text>
<text x="470" y="215">v = 2.89 km/s</text>
<text x="300" y="160">r = 2.4 × 10⁷ m</text>
<text x="18" y="322">At both marked points v is perpendicular to r, so L = mvr.</text>
<text x="18" y="338" font-size="11">Closest: K largest, U lowest. Farthest: K smallest, U highest. E constant.</text>
</g>
</svg>
<figcaption>Figure 2. The elliptical orbit in Worked example 2. The arrow lengths are drawn to scale: the speed at the closest point is three times the speed at the farthest point, because the distance there is three times smaller.</figcaption>
</figure>

At the closest and farthest points, the velocity is perpendicular to the radius (Figure 2), so L = mvr there and

**v_near r_near = v_far r_far**

The satellite moves **fastest at its closest point** and slowest at its farthest point. Energy tells the same story: as the satellite moves away, gravity has a component opposite to its velocity, does negative work, and turns kinetic energy into potential energy. On the way back in, the transfer reverses. (This faster-when-closer behaviour is what Kepler's second law describes. The course does not ask you to know that law; argue from angular momentum or energy.)

## Zero at infinity: bound and unbound

Because U_g = 0 at infinity, the sign of E tells you whether the satellite can get away:

| Total energy E | What happens |
|---|---|
| E < 0 | **bound**: the satellite cannot reach infinity; it stays in orbit or falls back |
| E = 0 | just escapes: its speed falls towards zero as r grows without limit |
| E > 0 | escapes with speed to spare: it still moves at a finite speed very far away |

Every circular and elliptical orbit has E < 0.

## Escape speed

The **escape speed** from distance r is the speed that makes the total mechanical energy exactly zero:

½mv_esc² − GMm/r = 0, so **v_esc = √(2GM/r)**

A satellite launched at exactly this speed, with only gravity acting, moves away forever. Its speed keeps falling and reaches zero only at an infinite distance.

Three things to notice:

- **m cancels.** A heavy probe and a light probe need the same escape **speed** (though the heavy one needs more energy).
- Escape speed is √2 times the circular-orbit speed √(GM/r) at the same r. A satellite in a circular orbit needs its speed raised by a factor of 1.41 to escape.
- For Earth, using G, M = 5.97 × 10²⁴ kg and R = 6.37 × 10⁶ m, v_esc = √(2GM/R) ≈ **11.2 km/s** from the surface, ignoring air resistance.

## Worked example 1: a satellite in a circular orbit

**Question.** An 800 kg satellite moves in a circular orbit of radius 1.0 × 10⁷ m around a fictional planet of mass 6.0 × 10²⁴ kg. (a) Find its speed, K, U_g, E and L. (b) It is moved to a circular orbit of radius 2.0 × 10⁷ m. Find the change in each energy.

1. GM = 6.67 × 10⁻¹¹ × 6.0 × 10²⁴ = 4.00 × 10¹⁴ N·m²/kg.
2. **(a)** v = √(GM/r) = √(4.00 × 10⁷) = **6.32 × 10³ m/s**.
3. K = ½mv² = ½ × 800 × 4.00 × 10⁷ = **1.60 × 10¹⁰ J**.
4. U_g = −GMm/r = −4.00 × 10¹⁴ × 800 ÷ 1.0 × 10⁷ = **−3.20 × 10¹⁰ J**.
5. E = K + U_g = **−1.60 × 10¹⁰ J**. Check: E = −K. ✓
6. L = mvr = 800 × 6.32 × 10³ × 1.0 × 10⁷ = **5.06 × 10¹³ kg·m²/s**.
7. **(b)** Doubling r halves each energy: K = 8.0 × 10⁹ J, U_g = −1.60 × 10¹⁰ J, E = −8.0 × 10⁹ J.
8. Changes: ΔK = **−8.0 × 10⁹ J**, ΔU_g = **+1.60 × 10¹⁰ J**, ΔE = **+8.0 × 10⁹ J**.

**Interpretation.** The satellite ends up slower, yet the system has **more** energy. The 8.0 × 10⁹ J must come from outside the satellite–planet system, for example from rocket fuel. The potential energy rises by twice as much as the kinetic energy falls.

## Worked example 2: speed and energy around an elliptical orbit

**Question.** A 500 kg probe orbits the same planet (GM = 4.00 × 10¹⁴ N·m²/kg) on the ellipse in Figure 2. At its closest point, r = 8.0 × 10⁶ m and v = 8.66 × 10³ m/s. Its farthest point is at r = 2.4 × 10⁷ m. (a) Find its speed at the farthest point. (b) Show that the mechanical energy is the same at both points.

1. **(a)** Gravity exerts no torque about the planet's centre, so L is constant. At both points v ⟂ r: v_far = v_near r_near / r_far = 8.66 × 10³ × (8.0 × 10⁶ ÷ 2.4 × 10⁷) = **2.89 × 10³ m/s**.
2. **(b)** Closest point: K = ½ × 500 × (8.66 × 10³)² = 1.875 × 10¹⁰ J; U_g = −4.00 × 10¹⁴ × 500 ÷ 8.0 × 10⁶ = −2.50 × 10¹⁰ J; E = **−6.25 × 10⁹ J**.
3. Farthest point: K = ½ × 500 × (2.887 × 10³)² = 0.208 × 10¹⁰ J; U_g = −4.00 × 10¹⁴ × 500 ÷ 2.4 × 10⁷ = −0.833 × 10¹⁰ J; E = **−6.25 × 10⁹ J**.
4. The two totals agree, to the precision of the given speed.

**Interpretation.** Between the two points, K falls by about 1.67 × 10¹⁰ J and U_g rises by the same amount. E < 0, so the probe is bound. Its closest-point speed (8.66 km/s) is more than the circular speed there (7.07 km/s) but less than the escape speed there (10.0 km/s), which is why it swings out on an ellipse and comes back.

## Worked example 3: escaping from a small moon

**Question.** A fictional moon has mass 9.0 × 10²² kg and radius 1.5 × 10⁶ m, and no atmosphere. (a) Find the escape speed from its surface. (b) A probe is launched straight up at 2.0 km/s. How far from the moon's centre does it get? (c) Another probe is launched at 3.5 km/s. What speed does it have very far away?

1. GM = 6.67 × 10⁻¹¹ × 9.0 × 10²² = 6.00 × 10¹² N·m²/kg.
2. **(a)** v_esc = √(2GM/R) = √(2 × 6.00 × 10¹² ÷ 1.5 × 10⁶) = √(8.00 × 10⁶) = **2.83 × 10³ m/s**.
3. **(b)** Energy per kilogram is conserved, and the probe stops at r_max: ½v² − GM/R = −GM/r_max.
4. ½v² = 2.0 × 10⁶ J/kg and GM/R = 4.00 × 10⁶ J/kg, so −GM/r_max = −2.00 × 10⁶ J/kg.
5. r_max = 6.00 × 10¹² ÷ 2.00 × 10⁶ = **3.0 × 10⁶ m**, twice the radius: 1.5 × 10⁶ m above the surface.
6. **(c)** ½v² − GM/R = ½v_far² − 0, so v_far² = v² − v_esc² = (3.5 × 10³)² − 8.00 × 10⁶ = 4.25 × 10⁶. **v_far = 2.1 × 10³ m/s**.

**Check.** In (c), v_far is less than the launch speed but not zero, matching E > 0 in the table. A common error in (b) is to use mgh with the surface value of g; that assumes the field stays the same all the way up, which fails for a climb this large.

## Common misconceptions

- **"The planet does not move at all."** It does move, but by a negligible amount when m ≪ M. That is why you may treat it as fixed.
- **"A satellite in a higher orbit has more kinetic energy."** It has **less** K but **more** total E (Worked example 1).
- **"The total energy of an orbit should be positive."** With U_g = 0 at infinity, every bound orbit has E < 0.
- **"A satellite in an elliptical orbit moves at constant speed."** Only K + U_g is constant. Speed is greatest at the closest point.
- **"Use L = mvr anywhere on an ellipse."** Only where v is perpendicular to r, at the closest and farthest points. Elsewhere L = mvr sin θ.
- **"A heavier rocket needs a higher escape speed."** The mass cancels. It needs more energy, not more speed.
- **"At escape speed the probe stops at some large distance."** Its speed approaches zero only as r grows without limit.
- **Measuring r from the surface.** r is from the centre of the central body.

## Where this leads

This topic closes Unit 6. Unit 7 (Oscillations) uses the same energy reasoning for objects that move back and forth. Read the [Topic 7.1 study guide](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-practice/), then use the [revision notes](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
