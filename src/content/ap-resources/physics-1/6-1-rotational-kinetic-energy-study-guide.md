---
resourceId: "mb-ap-phys1-6.1-study-guide"
title: "Rotational Kinetic Energy: Study Guide (Physics 1 6.1)"
description: "Where rotational kinetic energy comes from, how to use K = ½Iω², and how to add rotational and translational kinetic energy for rigid systems that spin and move, with algebra only."
course: "physics-1"
unit: 6
topics: ["6.1"]
resourceType: "study-guide"
prerequisites:
  - "Translational kinetic energy, K = ½mv², and the idea of energy as a scalar (Topic 3.1)"
  - "Angular velocity ω in rad/s and the link v = rω (Topics 5.1 and 5.2)"
  - "Rotational inertia I = Σmr² for a few point objects, and the parallel axis theorem (Topic 5.4)"
prerequisiteResources: ["mb-ap-phys1-5.6-study-guide"]
learningObjectives:
  - "Show that the kinetic energy of a spinning rigid system is the sum of the ordinary kinetic energies of its parts, which gives K = ½Iω²"
  - "Calculate rotational kinetic energy from rotational inertia and angular velocity, converting revolutions per minute to rad/s first"
  - "Find the total kinetic energy of a rigid system that both moves and spins as ½Mv_cm² + ½I_cm ω²"
  - "Explain how a system can have kinetic energy while its centre of mass stays at rest"
  - "Predict how rotational kinetic energy changes when angular velocity, mass or mass distribution changes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angular velocity must be in rad/s. Rotational inertias of extended objects (hoops, discs, rods) are given in each question. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-6.1-revision-notes", "mb-ap-phys1-6.1-practice", "mb-ap-phys1-6.1-checklist"]
next: "mb-ap-phys1-6.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A spinning rigid system has rotational kinetic energy K = ½Iω², with ω in rad/s. The unit is the joule."
  - "This is not a new kind of energy. It is the ordinary ½mv² of every part, added up, using v = rω for each part."
  - "A system that moves and spins has total K = ½Mv_cm² + ½I_cm ω²: translation of the centre of mass plus rotation about it."
  - "A wheel spinning on a fixed axle has kinetic energy even though its centre of mass is at rest."
  - "Rotational kinetic energy is a scalar. It is never negative, whichever way the object turns."
faqs:
  - question: "Do I need to memorise the rotational inertia of a disc or a hoop?"
    answer: "No. In this course the rotational inertia of an extended object such as a disc, hoop or rod is given to you. You should know why a hoop has more rotational inertia than a disc of the same mass and radius: more of its mass is far from the axis."
  - question: "Can I use revolutions per minute in K = ½Iω²?"
    answer: "No. The formula comes from v = rω, which only works with ω in radians per second. Convert first: multiply rev/min by 2π and divide by 60."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It joins two ideas you already have: kinetic energy from Unit 3 and rotational inertia from Unit 5. No calculus is needed.

## A spinning wheel has kinetic energy

Spin a bicycle wheel on a fixed stand. Its centre does not move, so the wheel as a whole is not going anywhere. Yet it clearly has energy. Touch the tyre and friction warms your hand. Hold a brake pad against it and the pad heats up. Energy is leaving the wheel, so the wheel must have had energy to give.

Where is it? Every small piece of the tyre is moving in a circle. Each piece has a speed, and so each piece has ordinary kinetic energy, ½mv². The wheel's centre of mass is at rest only because the pieces on opposite sides move in opposite directions. Their momenta cancel. Their kinetic energies do **not** cancel, because kinetic energy has no direction.

## From ½mv² to ½Iω²

Treat a rigid system as a set of small pieces with masses m₁, m₂, m₃ … at distances r₁, r₂, r₃ … from the axis. The system turns with one angular velocity ω, so every piece has the same ω. Its speed depends on its distance from the axis:

**v = rω** (ω in rad/s)

Now add the kinetic energies of all the pieces:

K = ½m₁v₁² + ½m₂v₂² + … = ½m₁r₁²ω² + ½m₂r₂²ω² + …

Every term has ½ω² in it, so take that outside:

K = ½(m₁r₁² + m₂r₂² + …)ω²

The bracket is exactly the rotational inertia from Topic 5.4, I = Σmr². So:

**Rotational kinetic energy: K = ½Iω²**

Compare it with K = ½mv². Rotational inertia I takes the place of mass, and angular velocity ω takes the place of speed. The unit works out too: kg·m² × (rad/s)² = kg·m²/s² = J. The radian has no dimension, so it drops out.

This derivation tells you something important. For an object turning about a **fixed axis**, ½Iω² is not extra energy on top of ½mv². It **is** the ½mv² of every piece, added up. It is the object's whole kinetic energy.

### Why mass far from the axis matters

Pieces far from the axis move fastest, and kinetic energy grows with the **square** of speed. So the outer mass carries most of the energy. That is why a hoop stores more energy than a disc of the same mass, radius and ω: a hoop's mass is all at the rim. In this course you will be given the rotational inertia of extended objects. For a hoop of mass M and radius R it is MR². For a uniform disc it is ½MR².

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="p1-61-rod-title p1-61-rod-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-61-rod-title">Speeds of points on a rod spinning about its centre</title>
<desc id="p1-61-rod-desc">A light rod 0.80 m long spins counterclockwise about an axle at its centre with angular velocity 6.0 rad/s. A 0.50 kg ball is fixed at each end, 0.40 m from the axle. Each ball has a velocity arrow 2.4 m/s long, perpendicular to the rod: the right ball moves up the page and the left ball moves down. Points halfway along the rod, 0.20 m from the axle, have shorter arrows labelled 1.2 m/s. The axle itself has speed zero.</desc>
<defs><marker id="p1-61-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M120 170 H440" stroke="#1d2b44" stroke-width="4"/>
<circle cx="280" cy="170" r="7" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="120" cy="170" r="16" fill="#1d2b44"/>
<circle cx="440" cy="170" r="16" fill="#1d2b44"/>
<circle cx="200" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="360" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M440 150 V60" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-61-arr)"/>
<path d="M120 190 V280" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-61-arr)"/>
<path d="M360 164 V122" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-61-arr)"/>
<path d="M200 176 V218" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-61-arr)"/>
<path d="M310 120 A55 55 0 0 0 250 120" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#p1-61-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="252" y="104">ω = 6.0 rad/s</text>
<text x="450" y="78">v = rω = 2.4 m/s</text>
<text x="20" y="276">v = 2.4 m/s</text>
<text x="368" y="132">1.2 m/s</text>
<text x="150" y="232">1.2 m/s</text>
<text x="262" y="196">axle: v = 0</text>
<text x="410" y="205">0.50 kg</text>
<text x="92" y="150">0.50 kg</text>
<text x="300" y="300">rod length 0.80 m; each ball 0.40 m from the axle</text>
</g>
</svg>
<figcaption>Figure 1. Every point on the rod has the same ω, but its speed v = rω grows with distance from the axle. The balls at 0.40 m move at 2.4 m/s; points at 0.20 m move at only 1.2 m/s. Because K grows with v², a piece of mass at twice the distance carries four times the kinetic energy.</figcaption>
</figure>

### Units: always rad/s

Machines often give rotation rates in revolutions per minute (rev/min or rpm). One revolution is 2π rad and one minute is 60 s, so:

ω (rad/s) = rev/min × 2π ÷ 60

For example, 300 rev/min = 300 × 2π ÷ 60 = **31.4 rad/s**. Putting 300 straight into ½Iω² gives an answer about 91 times too big.

## Moving and spinning at the same time

A thrown flying disc, a spinning ball in flight, a wheel skidding along a road: these move **and** spin. For any rigid system the total kinetic energy splits neatly into two parts:

**K_total = ½Mv_cm² + ½I_cm ω²**

- ½Mv_cm² is the **translational** kinetic energy: the whole mass M moving with the speed of the centre of mass.
- ½I_cm ω² is the **rotational** kinetic energy: spinning about an axis through the centre of mass, using I_cm.

Both parts are scalars and both are positive, so you simply add them. In Topic 6.5 you will meet rolling without slipping, where v_cm and ω are linked. In this topic they can take any values you are given.

### Two ways to describe one motion

Here is a subtle point. A door swinging on its hinges turns about a fixed axis that is **not** through its centre of mass. You can find its kinetic energy in either of two ways:

1. Use the rotational inertia about the hinge axis: K = ½I_hinge ω². This already counts everything.
2. Split it: the centre of mass moves in a circle at v_cm = dω, and the door also turns about its centre of mass. K = ½Mv_cm² + ½I_cm ω².

The parallel axis theorem from Topic 5.4, I_hinge = I_cm + Md², makes these two answers identical. What you must **not** do is mix them, for example ½I_hinge ω² + ½Mv_cm². That counts the motion of the centre of mass twice. Worked example 1 checks this with numbers.

## Kinetic energy with the centre of mass at rest

A flywheel spinning on a fixed axle has v_cm = 0, so its translational kinetic energy is zero and its total momentum is zero. But its rotational kinetic energy is not zero, because each piece of the rim is moving. This is how a flywheel stores energy: spin it up, and the energy sits in the moving rim until something slows it down.

Do not confuse this with momentum. Momentum is a vector, and the momenta of opposite sides cancel. Kinetic energy is a scalar, and it adds up from every piece.

## Rotational kinetic energy is a scalar

Kinetic energy has a size but no direction. A wheel turning clockwise at 10 rad/s has exactly the same rotational kinetic energy as the same wheel turning counterclockwise at 10 rad/s. Because ω is squared, the sign of ω never makes K negative.

So if two identical wheels spin in opposite directions, the total kinetic energy of the pair is **twice** that of one wheel, not zero.

## Comparing scenarios: factors of change

Because K = ½Iω², you can predict changes without full calculations:

| Change (everything else the same) | Effect on rotational K |
|---|---|
| ω doubled | K × 4 |
| ω tripled | K × 9 |
| ω halved | K × ¼ |
| I doubled (for example, twice the mass at the same radii) | K × 2 |
| Same masses moved to twice the distance from the axis | I × 4, so K × 4 |

When a question says "same mass and radius" for a hoop and a disc spinning at the same ω, the hoop has twice the rotational inertia (MR² against ½MR²), so it has twice the rotational kinetic energy.

## Worked example 1: one rod, two axes

**Question.** A light rod 0.80 m long has a 0.50 kg ball fixed at each end (Figure 1). Treat the balls as point objects and ignore the rod's mass. (a) The rod spins at 6.0 rad/s about an axle through its centre. Find its kinetic energy. (b) The same rod now spins at 6.0 rad/s about an axle through one end. Find its kinetic energy, and check the answer by splitting it into translation and rotation.

**(a) Axle at the centre.**

1. Each ball is r = 0.40 m from the axle. I = Σmr² = 2 × 0.50 kg × (0.40 m)² = **0.16 kg·m²**.
2. K = ½Iω² = ½ × 0.16 kg·m² × (6.0 rad/s)² = ½ × 0.16 × 36 = **2.88 J ≈ 2.9 J**.
3. Check with speeds: each ball moves at v = rω = 0.40 × 6.0 = 2.4 m/s, so each has ½ × 0.50 × 2.4² = 1.44 J. Two balls: 2.88 J. The two methods agree, as the derivation says they must.

**(b) Axle at one end.**

1. One ball sits on the axle (r = 0), the other is 0.80 m away. I = 0.50 kg × (0.80 m)² = **0.32 kg·m²**.
2. K = ½ × 0.32 × 36 = **5.76 J ≈ 5.8 J**. All of it belongs to the far ball, which moves at 0.80 × 6.0 = 4.8 m/s.
3. Split check: the centre of mass is at the middle of the rod, 0.40 m from the axle, so v_cm = 0.40 × 6.0 = 2.4 m/s. Translational part: ½ × 1.0 kg × 2.4² = 2.88 J. Rotation about the centre of mass uses I_cm = 0.16 kg·m² from (a): ½ × 0.16 × 36 = 2.88 J. Total: 2.88 + 2.88 = **5.76 J**. ✓

**Interpretation.** Same masses, same ω, but moving the axle doubled the kinetic energy, because the mass is farther from the axis on average. The parallel axis theorem agrees: I_end = I_cm + Md² = 0.16 + 1.0 × 0.40² = 0.32 kg·m².

## Worked example 2: a thrown flying disc

**Question.** A flying disc of mass 0.175 kg leaves a player's hand with its centre of mass moving at 12 m/s. It spins at 60 rad/s about its centre. Take its rotational inertia about its centre as 2.4 × 10⁻³ kg·m² (value given). Find its translational, rotational and total kinetic energy, and the fraction that is rotational.

1. Translational: ½Mv_cm² = ½ × 0.175 kg × (12 m/s)² = ½ × 0.175 × 144 = **12.6 J**.
2. Rotational: ½I_cm ω² = ½ × 2.4 × 10⁻³ kg·m² × (60 rad/s)² = ½ × 0.0024 × 3600 = **4.32 J ≈ 4.3 J**.
3. Total: 12.6 + 4.32 = **16.9 J**.
4. Rotational fraction: 4.32 ÷ 16.92 = 0.255, about **26 %**.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-61-bar-title p1-61-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-61-bar-title">Energy bar chart for a thrown flying disc</title>
<desc id="p1-61-bar-desc">Three vertical bars on a scale from 0 to 18 joules. The first bar, translational kinetic energy, is solid and reaches 12.6 J. The second bar, rotational kinetic energy, is hatched and reaches 4.3 J. The third bar, total kinetic energy, is drawn as a solid section of 12.6 J with a hatched section of 4.3 J stacked on top, reaching 16.9 J.</desc>
<defs><pattern id="p1-61-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1.5"/></pattern></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5"><path d="M80 190 H520 M80 130 H520 M80 70 H520"/></g>
<path d="M80 250 H520 M80 250 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="72" y="254">0</text><text x="72" y="194">6</text><text x="72" y="134">12</text><text x="72" y="74">18</text></g>
<text x="24" y="150" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 150)">energy (J)</text>
<rect x="120" y="124" width="80" height="126" fill="#1d2b44"/>
<rect x="250" y="207" width="80" height="43" fill="url(#p1-61-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<rect x="380" y="124" width="80" height="126" fill="#1d2b44"/>
<rect x="380" y="81" width="80" height="43" fill="url(#p1-61-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="160" y="116">12.6 J</text><text x="290" y="199">4.3 J</text><text x="420" y="73">16.9 J</text>
<text x="160" y="270">translational</text><text x="160" y="285">½Mv_cm² (solid)</text>
<text x="290" y="270">rotational</text><text x="290" y="285">½I_cm ω² (hatched)</text>
<text x="420" y="270">total</text><text x="420" y="285">sum of the two</text>
</g>
</svg>
<figcaption>Figure 2. Energy bar chart for the disc in Worked example 2. The solid bar is translational kinetic energy and the hatched bar is rotational kinetic energy. The total is their plain sum, because both are scalars.</figcaption>
</figure>

**Check.** Both parts are positive and in joules, and the total is simply their sum. An energy bar chart like Figure 2 is a good way to show this on an exam answer.

## Worked example 3: two flywheels with the centre of mass at rest

**Question.** Two flywheels each have mass 20 kg and radius 0.30 m and spin at 50 rad/s on fixed axles. Flywheel A is a thin hoop, I = MR². Flywheel B is a uniform disc, I = ½MR². (a) Find each one's kinetic energy. (b) How fast would B have to spin to store the same energy as A?

1. I_A = 20 × 0.30² = 1.8 kg·m². I_B = ½ × 20 × 0.30² = 0.90 kg·m².
2. K_A = ½ × 1.8 × 50² = **2250 J ≈ 2.3 kJ**. K_B = ½ × 0.90 × 50² = **1125 J ≈ 1.1 kJ**.
3. For equal energy, ½I_B ω_B² = ½I_A ω_A², so ω_B = ω_A × √(I_A / I_B) = 50 × √2 = **70.7 rad/s**.

**Interpretation.** Neither flywheel's centre of mass moves, so both have zero translational kinetic energy and zero momentum. Their energy is all rotational. A rim speed of 0.30 × 50 = 15 m/s at the hoop is what carries A's energy. Doubling the energy needed only √2 times the angular velocity, because K depends on ω².

## Common misconceptions

- **"If the centre of mass is at rest, there is no kinetic energy."** A spinning flywheel has v_cm = 0 but plenty of kinetic energy (Worked example 3).
- **"Rotational kinetic energy is a different kind of energy from ½mv²."** It is the ½mv² of all the pieces, added up.
- **"Clockwise spin gives negative kinetic energy."** K is a scalar and ω is squared, so K is never negative.
- **Using rev/min or degrees per second in ½Iω².** Convert to rad/s first.
- **Double counting.** For a fixed pivot, use ½I_pivot ω² on its own, or ½Mv_cm² + ½I_cm ω². Never ½I_pivot ω² + ½Mv_cm² (Worked example 1).
- **"Same mass and same ω means same kinetic energy."** Mass distribution matters. A hoop stores twice the energy of a disc of the same mass and radius at the same ω.
- **"Doubling ω doubles K."** K grows with ω², so it is four times bigger.
- **Using the rim speed as v_cm.** The speed of a point on the rim is rω. The centre of mass of a wheel on a fixed axle does not move at all.

## Where this leads

Topic 6.2 shows how a torque acting through an angle does work and changes rotational kinetic energy, just as a force through a distance changes ½mv². Topic 6.5 uses K_total = ½Mv_cm² + ½I_cm ω² for rolling objects. Try the [practice questions](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-checklist/) to consolidate. Next topic: [Torque and Work](/advanced-course-resources/physics-1/6-2-torque-work-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
