---
resourceId: "mb-ap-physcm-6.6-study-guide"
title: "Motion of Orbiting Satellites: Study Guide (Physics C: Mechanics 6.6)"
description: "Calculus-based orbits: U = −GMm/r by integration, energy and angular momentum in circular and elliptical orbits, K = −½U derived, apsis speeds, and escape velocity from energy."
course: "physics-c-mechanics"
unit: 6
topics: ["6.6"]
resourceType: "study-guide"
prerequisites:
  - "Newton's law of gravitation, F = GMm/r² (Topic 2.6)"
  - "Centripetal acceleration v²/r for circular motion (Topic 2.10)"
  - "Potential energy as the negative of the work done by a conservative force, and conservation of energy (Topics 3.3 and 3.4)"
  - "Angular momentum of a point object, L = mvr sin θ, and its conservation (Topics 6.3 and 6.4)"
prerequisiteResources: ["mb-ap-physcm-6.5-study-guide"]
learningObjectives:
  - "Explain why the central object's motion can be ignored when the satellite's mass is very much smaller"
  - "Derive U = −GMm/r from the gravitational force with the zero at infinite separation"
  - "State and justify which quantities stay constant in circular orbits and in elliptical orbits"
  - "Derive K = −½U and E = ½U = −GMm/(2r) for a circular orbit, and sketch K, U and E against r"
  - "Use conservation of energy and angular momentum to find speeds and distances at the nearest and farthest points of an elliptical orbit"
  - "Derive the escape velocity √(2GM/r) from energy conservation and describe the motion of a body that just escapes"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic. G = 6.67 × 10⁻¹¹ N·m²/kg², the value on the course equation table. Planets and moons in examples are fictional. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-6.6-revision-notes", "mb-ap-physcm-6.6-practice", "mb-ap-physcm-6.6-checklist"]
next: "mb-ap-physcm-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "With U_g = 0 at infinite separation, U_g = −GMm/r. It is negative for every finite r, and a bound orbit has E < 0."
  - "Gravity is a central force, so it exerts no torque about the central object: the satellite's angular momentum is constant in every orbit."
  - "Circular orbit: K, U, E and L are all constant, with K = −½U and E = ½U = −GMm/(2r)."
  - "Elliptical orbit: E and L are constant, but K and U trade. The satellite is fastest at its closest point."
  - "Escape velocity makes E = 0: v_esc = √(2GM/r), which is √2 times the circular orbit speed at the same r."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 6.6?"
    answer: "They are separate courses. Physics 1 uses the energy and angular momentum results with algebra. Physics C: Mechanics derives U = −GMm/r by integrating the force, derives K = −½U from Newton's second law, and combines both conservation laws to solve for unknown distances and speeds in elliptical orbits."
  - question: "Do I need Kepler's laws for elliptical orbits?"
    answer: "No. The course does not expect Kepler's first or second laws. Everything this topic asks about elliptical orbits follows from conservation of energy and of angular momentum. Kepler's third law for circular orbits belongs to Topic 2.10."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 6.6 called Motion of Orbiting Satellites. This guide is the **calculus-based** one. It derives the potential energy and the circular-orbit energy relations, and uses both conservation laws together to solve elliptical orbits. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-study-guide/); do not mix the two when you revise.

## The system: a massive body and a light satellite

Take a system of two objects that interact **only** through gravity: a central body of mass M (a planet or star) and a satellite of mass m. No outside forces act, so the system's total momentum is constant and its centre of mass does not accelerate. Both bodies actually orbit that centre of mass.

The momenta of the two bodies are equal and opposite in the centre-of-mass frame, so Mv_M = mv_m and

**v_M ÷ v_m = m ÷ M**

When m ≪ M, the central body's speed is tiny and the centre of mass sits almost exactly at the central body's centre. So we treat the central body as **fixed** and study only the satellite. In Worked example 1, the planet's speed works out at about 2 × 10⁻¹⁸ m/s.

## Gravitational potential energy with the zero at infinity

The gravitational force on the satellite points towards the central body. Taking r outward, its radial component is F_r = −GMm/r². Potential energy is defined by the work done by this force. Choose **U = 0 when the separation is infinite**. Then

U(r) = −∫ from ∞ to r of F_r dr′ = −∫ from ∞ to r of (−GMm/r′²) dr′ = −[GMm/r′] from ∞ to r

**U_g = −GMm/r**

Three things to notice:

- **U is negative at every finite r.** It rises towards zero as r grows. Moving the satellite outward always increases U.
- The sign comes from the choice of zero. Only **changes** in U have physical meaning: ΔU = GMm(1/r₁ − 1/r₂) when the satellite moves out from r₁ to r₂.
- U belongs to the satellite–central-body **system**, not to the satellite alone. Kinetic energy, by contrast, is the satellite's (the central body's is negligible).

A system whose total mechanical energy E = K + U is **negative** is **bound**: the satellite cannot reach r = ∞, where it would need K = E < 0, which is impossible.

## What is conserved, and why

Two conservation laws control every orbit:

1. **Energy.** Gravity is the only force, it is internal to the system and it is conservative. So E = ½mv² − GMm/r is constant.
2. **Angular momentum about the central body.** The force on the satellite points along the line to the centre, so its torque about the centre, τ = r × F, is zero. So the satellite's angular momentum L = mvr sin φ is constant (φ is the angle between r and v).

What this means for each shape of orbit:

| Quantity | Circular orbit | Elliptical orbit |
|---|---|---|
| Total mechanical energy E | constant | constant |
| Angular momentum L of the satellite | constant | constant |
| Gravitational potential energy U | constant (r is fixed) | changes: lowest at the closest point |
| Kinetic energy K (and speed) | constant | changes: greatest at the closest point |

In an elliptical orbit, energy flows back and forth between K and U while their sum stays fixed.

## Energy in a circular orbit

For a circular orbit of radius r, gravity alone supplies the centripetal force (Topic 2.10):

GMm/r² = mv²/r, so **mv² = GMm/r**

Then the kinetic energy is

**K = ½mv² = GMm/(2r) = −½U**

and the total energy is

**E = K + U = GMm/(2r) − GMm/r = −GMm/(2r) = ½U = −K**

Each result has a meaning you can check:

- E is negative, so the orbit is bound.
- A larger orbit has a **less negative** E, so moving to a higher orbit needs energy input.
- But K = GMm/(2r) gets **smaller** as r grows. The satellite in a higher orbit moves more slowly. The energy you add, plus the kinetic energy it loses, all goes into U: ΔU = −2ΔK and ΔE = −ΔK.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="pcm-66-en-title pcm-66-en-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-66-en-title">Kinetic, potential and total energy against orbit radius for circular orbits</title>
<desc id="pcm-66-en-desc">Energy in units of GMm divided by 2 r-nought, from −2 to +1, against orbit radius r in units of r-nought, from 1 to 4. A horizontal line marks zero energy. The kinetic energy curve, solid, is positive: it falls from 1 at r = r-nought to 0.25 at 4 r-nought. The potential energy curve, dashed, is negative: it rises from −2 to −0.5. The total energy curve, dotted, lies between zero and the potential energy curve: it rises from −1 to −0.25. At every radius the kinetic energy curve is the mirror image of the total energy curve in the zero line, and the potential energy is twice the total energy.</desc>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M170 50 V320 M270 50 V320 M370 50 V320 M470 50 V320"/>
<path d="M70 70 H500 M70 110 H500 M70 190 H500 M70 230 H500 M70 270 H500 M70 310 H500"/>
</g>
<path d="M70 150 H510 M70 320 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="170" y="338">1</text><text x="270" y="338">2</text><text x="370" y="338">3</text><text x="470" y="338">4</text>
<text x="300" y="356" font-size="13">orbit radius, r (units of r₀)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="74">+1</text><text x="62" y="154">0</text><text x="62" y="234">−1</text><text x="62" y="314">−2</text>
</g>
<text x="22" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 190)">energy (units of GMm/(2r₀))</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="170.0,70.0 180.0,77.3 190.0,83.3 200.0,88.5 210.0,92.9 220.0,96.7 230.0,100.0 240.0,102.9 250.0,105.6 260.0,107.9 270.0,110.0 280.0,111.9 290.0,113.6 300.0,115.2 310.0,116.7 320.0,118.0 330.0,119.2 340.0,120.4 350.0,121.4 360.0,122.4 370.0,123.3 380.0,124.2 390.0,125.0 400.0,125.8 410.0,126.5 420.0,127.1 430.0,127.8 440.0,128.4 450.0,128.9 460.0,129.5 470.0,130.0 480.0,130.5 490.0,131.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 6" points="170.0,310.0 180.0,295.5 190.0,283.3 200.0,273.1 210.0,264.3 220.0,256.7 230.0,250.0 240.0,244.1 250.0,238.9 260.0,234.2 270.0,230.0 280.0,226.2 290.0,222.7 300.0,219.6 310.0,216.7 320.0,214.0 330.0,211.5 340.0,209.3 350.0,207.1 360.0,205.2 370.0,203.3 380.0,201.6 390.0,200.0 400.0,198.5 410.0,197.1 420.0,195.7 430.0,194.4 440.0,193.2 450.0,192.1 460.0,191.0 470.0,190.0 480.0,189.0 490.0,188.1"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="2 4" points="170.0,230.0 180.0,222.7 190.0,216.7 200.0,211.5 210.0,207.1 220.0,203.3 230.0,200.0 240.0,197.1 250.0,194.4 260.0,192.1 270.0,190.0 280.0,188.1 290.0,186.4 300.0,184.8 310.0,183.3 320.0,182.0 330.0,180.8 340.0,179.6 350.0,178.6 360.0,177.6 370.0,176.7 380.0,175.8 390.0,175.0 400.0,174.2 410.0,173.5 420.0,172.9 430.0,172.2 440.0,171.6 450.0,171.1 460.0,170.5 470.0,170.0 480.0,169.5 490.0,169.0"/>
<g font-size="12" fill="#1d2b44">
<text x="350" y="112">K = GMm/(2r) (solid)</text>
<text x="350" y="166">E = −GMm/(2r) (dotted)</text>
<text x="350" y="224">U = −GMm/r (dashed)</text>
</g>
</svg>
<figcaption>Figure 1. Energies of a satellite in circular orbits of different radii. K and E are mirror images in the zero line, and U is always twice E. A higher orbit has more total energy but less kinetic energy.</figcaption>
</figure>

## Elliptical orbits: using both conservation laws

In an elliptical orbit the distance r changes. The closest point is called **periapsis** (perigee for an Earth orbit) and the farthest **apoapsis**. At these two points, and only these two, the velocity is at right angles to the radius line, so L = mvr exactly. Conservation of angular momentum then gives

**r_p v_p = r_a v_a**

So the satellite moves fastest where it is closest. Combine this with energy conservation,

½mv_p² − GMm/r_p = ½mv_a² − GMm/r_a

and you have two equations for two unknowns. A useful result (background: you can derive it, but it is not a required equation) is that eliminating v_a gives

v_p² = 2GM r_a ÷ [r_p(r_p + r_a)]  and  E = −GMm ÷ (r_p + r_a)

For a circle, r_p = r_a = r, and E = −GMm/(2r) as before. ✓

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm-66-ell-title pcm-66-ell-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-66-ell-title">An elliptical orbit with the planet at one focus</title>
<desc id="pcm-66-ell-desc">An ellipse, wider than it is tall, with a planet drawn as a filled circle at one focus, to the right of the ellipse's centre. The closest point, periapsis, is at the right end of the ellipse, 7.0 million metres from the planet. The farthest point, apoapsis, is at the left end, 21 million metres from the planet. Solid lines from the planet to each end are labelled r_p and r_a. At periapsis a long arrow points upward, labelled v_p = 6.5 km/s. At apoapsis a short arrow, one third as long, points downward, labelled v_a = 2.2 km/s. A curved arrow on the ellipse shows the probe moving counterclockwise. Notes say speed is greatest and potential energy lowest at periapsis, and that E and L are the same at both points.</desc>
<defs><marker id="pcm-66-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<ellipse cx="260" cy="170" rx="168" ry="145.5" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="344" cy="170" r="14" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="344" cy="170" r="3" fill="#1d2b44"/>
<path d="M330 170 H92" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M358 170 H428" stroke="#1d2b44" stroke-width="1.5"/>
<g fill="#1d2b44"><circle cx="428" cy="170" r="5"/><circle cx="92" cy="170" r="5"/></g>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#pcm-66-arr)">
<path d="M428 170 V110"/><path d="M92 170 V190"/>
</g>
<path d="M330 37 A168 145.5 0 0 0 220 28" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#pcm-66-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="362" y="194">r_p = 7.0 × 10⁶ m</text>
<text x="150" y="164">r_a = 2.1 × 10⁷ m</text>
<text x="436" y="120">v_p = 6.5 km/s</text>
<text x="440" y="152">periapsis</text>
<text x="100" y="206">v_a = 2.2 km/s</text>
<text x="20" y="160">apoapsis</text>
<text x="344" y="212" text-anchor="middle">planet</text>
<text x="250" y="20">direction of motion</text>
<text x="190" y="244">At both ends v is at right</text>
<text x="190" y="260">angles to r, so L = mvr.</text>
<text x="190" y="276">r_p v_p = r_a v_a; E the same.</text>
</g>
</svg>
<figcaption>Figure 2. The probe's orbit in Worked example 2, drawn to scale (the planet is not to scale). At periapsis the probe is three times closer and three times faster than at apoapsis; its kinetic energy there is nine times larger.</figcaption>
</figure>

## Escape velocity

A satellite **escapes** if it can reach r → ∞. There U = 0, so it needs K ≥ 0 there, which means **E ≥ 0**. The escape velocity is the launch speed that makes E exactly zero:

½mv_esc² − GMm/r = 0, so **v_esc = √(2GM/r)**

- It does not depend on the satellite's mass, or on the direction of launch (if nothing is in the way).
- A body launched at exactly v_esc keeps moving away and slows down. Its speed at distance r′ is v_esc√(r/r′), which tends to **zero as r′ → ∞**. It never turns back.
- A faster launch leaves the body with speed v_∞ = √(v₀² − v_esc²) far away. A slower one gives E < 0: the body stops at some r_max and falls back, or stays in a bound orbit.
- At the same r, v_esc = √2 × v_circular. A satellite in a circular orbit escapes if its speed increases by a factor of √2 (about 41 %).

## Worked example 1: raising a circular orbit

**Question.** Corvan is a fictional planet of mass 3.0 × 10²⁴ kg. A 1200 kg satellite moves in a circular orbit of radius 8.0 × 10⁶ m. (a) Find its speed, K, U, E and L. (b) It is moved to a circular orbit of radius 1.2 × 10⁷ m. Find the new values and the energy that had to be supplied. (c) How much must its speed increase, in the original orbit, for it to escape? (d) How fast does Corvan move about the system's centre of mass?

**(a)** GM = 6.67 × 10⁻¹¹ × 3.0 × 10²⁴ = 2.00 × 10¹⁴ N·m²/kg.

1. v = √(GM/r) = √(2.00 × 10¹⁴ ÷ 8.0 × 10⁶) = **5.0 × 10³ m/s**.
2. U = −GMm/r = −(2.00 × 10¹⁴ × 1200) ÷ 8.0 × 10⁶ = **−3.0 × 10¹⁰ J**.
3. K = −½U = **1.5 × 10¹⁰ J** (check: ½ × 1200 × 5000² = 1.5 × 10¹⁰ J ✓).
4. E = ½U = **−1.5 × 10¹⁰ J**.
5. L = mvr = 1200 × 5.0 × 10³ × 8.0 × 10⁶ = **4.8 × 10¹³ kg·m²/s**.

**(b)** At r = 1.2 × 10⁷ m: v = **4.1 × 10³ m/s**, U = **−2.0 × 10¹⁰ J**, K = **1.0 × 10¹⁰ J**, E = **−1.0 × 10¹⁰ J**, L = **5.9 × 10¹³ kg·m²/s**.

- Energy supplied: ΔE = −1.0 × 10¹⁰ − (−1.5 × 10¹⁰) = **+5.0 × 10⁹ J**.
- K **fell** by 5.0 × 10⁹ J while U rose by 1.0 × 10¹⁰ J. The satellite is slower, by a factor √(8.0/12) = 0.82, in the higher orbit.
- L changed because the move needed thrust, which is an outside force on the satellite. In each circular orbit L is constant.

**(c)** v_esc = √2 × 5.0 × 10³ = 7.07 × 10³ m/s, so the speed must rise by about **2.1 × 10³ m/s**. That raises K by 1.5 × 10¹⁰ J and brings E to zero.

**(d)** v_M = (m/M)v = (1200 ÷ 3.0 × 10²⁴) × 5.0 × 10³ = **2 × 10⁻¹⁸ m/s**. Treating the planet as fixed is an excellent model.

## Worked example 2: an elliptical orbit from its two ends

**Question.** A 600 kg probe orbits Corvan (GM = 2.00 × 10¹⁴ N·m²/kg) on an ellipse. Its closest distance from the planet's centre is r_p = 7.0 × 10⁶ m and its farthest is r_a = 2.1 × 10⁷ m (Figure 2). (a) Find its speeds at both ends. (b) Find its total mechanical energy. (c) Describe how K and U change around the orbit.

**(a)** Angular momentum: r_p v_p = r_a v_a, so v_a = v_p r_p/r_a = v_p/3.

Energy: ½v_p² − GM/r_p = ½(v_p/3)² − GM/r_a (m cancels). Rearranging:

½(1 − 1/9)v_p² = (4/9)v_p² = GM(1/r_p − 1/r_a) = 2.00 × 10¹⁴ × (1/7.0 × 10⁶ − 1/2.1 × 10⁷) = 1.91 × 10⁷ m²/s²

So **v_p = 6.5 × 10³ m/s** (6547 m/s) and **v_a = 2.2 × 10³ m/s** (2182 m/s).

**(b)** E = ½ × 600 × 6547² − (2.00 × 10¹⁴ × 600) ÷ 7.0 × 10⁶ = 1.286 × 10¹⁰ − 1.714 × 10¹⁰ = **−4.3 × 10⁹ J**. Check at apoapsis: 1.43 × 10⁹ − 5.71 × 10⁹ = −4.3 × 10⁹ J ✓, and −GMm/(r_p + r_a) = −4.3 × 10⁹ J ✓.

**(c)** From periapsis to apoapsis, U rises from −1.71 × 10¹⁰ J to −5.7 × 10⁹ J, and K falls by the same 1.14 × 10¹⁰ J, from 1.29 × 10¹⁰ J to 1.4 × 10⁹ J. K at periapsis is 9 times K at apoapsis, because the speed is 3 times larger. Then the process reverses on the way back in.

**Checks.** At r_p, the circular-orbit speed would be √(GM/r_p) = 5.3 × 10³ m/s and the escape speed 7.6 × 10³ m/s. The probe's 6.5 × 10³ m/s lies between them: faster than circular, so it swings out, but not fast enough to escape, consistent with E < 0.

## Common misconceptions

- **"U = −GMm/r is negative, so it is less than nothing."** The sign comes from putting the zero at infinity. Only changes in U matter.
- **"Higher orbit, faster satellite."** In circular orbits v = √(GM/r): higher means slower, even though E is larger.
- **"Kinetic energy is constant in every orbit."** Only in circular orbits. In an ellipse gravity has a component along the velocity and does work.
- **Using L = mvr everywhere on an ellipse.** Only at the two ends, where v is at right angles to r. Elsewhere use mvr sin φ.
- **"Escape velocity depends on the satellite's mass."** Mass cancels.
- **"At escape velocity, the body keeps a steady speed."** It slows towards zero as r → ∞.
- **Using altitude for r.** r is measured from the centre of the central body.
- **Forgetting that L changes when thrusters fire.** Conservation laws hold only while gravity is the only force.

## Where this leads

This topic closes Unit 6. You have now used energy and angular momentum together for rolling bodies and orbits. Unit 7 turns to oscillations: [Topic 7.1, Defining Simple Harmonic Motion](/advanced-course-resources/physics-c-mechanics/7-1-defining-simple-harmonic-motion-shm-study-guide/), again starts from a force law and uses energy to describe the motion. Next, try the [practice questions](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-checklist/). You can also go back to [Topic 6.5, Rolling](/advanced-course-resources/physics-c-mechanics/6-5-rolling-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
