---
resourceId: "mb-ap-phys1-5.2-study-guide"
title: "Connecting Linear and Rotational Motion: Study Guide (Physics 1 5.2)"
description: "Link the angle, angular velocity and angular acceleration of a rotating rigid body to the distance, speed and tangential acceleration of each point on it, using s = rθ, v = rω and a = rα."
course: "physics-1"
unit: 5
topics: ["5.2"]
resourceType: "study-guide"
prerequisites:
  - "Angular displacement, angular velocity and angular acceleration in radians (Topic 5.1)"
  - "Centripetal acceleration a_c = v²/r and tangential acceleration on a circle (Topic 2.9)"
prerequisiteResources: ["mb-ap-phys1-5.1-study-guide"]
learningObjectives:
  - "Use Δs = rΔθ to turn an angle turned by a rigid body into the distance a point on it travels, and back again"
  - "Derive and use v = rω and a_T = rα for a point at distance r from a fixed axis"
  - "Explain why all points on a rigid body share ω and α but have linear speeds and tangential accelerations proportional to their distance from the axis"
  - "Compare speeds and accelerations of different points on one body, and of pulleys linked by a belt or string, including the centripetal acceleration ω²r"
  - "Sketch graphs of linear speed and angular velocity against distance from the axis or against time for points on a rotating body"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angles must be in radians for s = rθ, v = rω and a = rα. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-5.2-revision-notes", "mb-ap-phys1-5.2-practice", "mb-ap-phys1-5.2-checklist"]
next: "mb-ap-phys1-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A point at distance r from the axis travels a distance Δs = rΔθ when the body turns through Δθ (in radians)."
  - "Its linear speed is v = rω and its tangential acceleration is a_T = rα."
  - "All points on a rigid body share the same ω and α. Their v and a_T grow in proportion to r."
  - "Things that move together without slipping, such as a belt and the rims of its pulleys, share the same linear speed, not the same ω."
  - "A point on a turning body also has a centripetal acceleration, a_c = v²/r = ω²r, towards the axis (Topic 2.9)."
faqs:
  - question: "Why do these equations only work in radians?"
    answer: "The radian is defined as arc length divided by radius, so s = rθ is true by definition only when θ is in radians. With degrees or revolutions you would need an extra conversion factor in every equation."
  - question: "Is the tangential acceleration the whole acceleration of a point?"
    answer: "No. a_T = rα changes the point's speed. The point also has a centripetal acceleration ω²r towards the axis because its direction keeps changing. The two are perpendicular."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Topic 5.1 described a rotating body as a whole, using θ, ω and α. This topic zooms in on one point of the body and asks: how far does it travel, how fast does it move and how quickly does its speed change? No calculus is needed.

## One body, many paths

Watch a spinning wheel. Every point goes round in a circle centred on the axis. In one full turn:

- every point turns through the same angle, 2π rad;
- a point near the axle travels round a small circle;
- a point on the rim travels round a much larger circle.

So the **angular** quantities are shared, but the **linear** quantities (distance travelled, speed, tangential acceleration) depend on how far the point is from the axis. The link between them is the radius r.

## Arc length and the radian

The radian is defined so that the link is as simple as possible. For a point at distance r from a fixed axis, turning through an angle Δθ (in radians) carries it along an arc of length

**Δs = rΔθ**

This is the definition of the radian rearranged: an angle in radians is arc length divided by radius. One full turn is 2π rad, and the arc is then 2πr, the circumference, as it should be.

**Example.** A wheel of radius 0.30 m turns through 2.0 rad. A point on its rim travels 0.30 m × 2.0 = **0.60 m** along its circular path.

Because radians are a ratio of two lengths, they have no physical dimension. That is why "m × rad" simply becomes "m". It also means **Δs = rΔθ is false if Δθ is in degrees or revolutions**. Convert first.

## Linear speed and tangential acceleration

Divide both sides of Δs = rΔθ by the time interval Δt. Since r is fixed for a point on a rigid body:

Δs / Δt = r(Δθ / Δt), so **v = rω**

Here v is the point's **linear speed** along its path. Its velocity is always **tangent** to the circle, perpendicular to the radius.

Now look at how v changes. If ω changes by Δω, then v changes by rΔω. Divide by Δt:

Δv / Δt = r(Δω / Δt), so **a_T = rα**

a_T is the **tangential acceleration**: the part of the acceleration along the path that changes the point's speed. (Topic 2.9 wrote it as a_t; it is the same quantity.)

| Rotational quantity (shared by every point) | Linear quantity for a point at radius r |
|---|---|
| angular displacement Δθ (rad) | distance along the arc, Δs = rΔθ (m) |
| angular velocity ω (rad/s) | linear speed, v = rω (m/s) |
| angular acceleration α (rad/s²) | tangential acceleration, a_T = rα (m/s²) |

The relationships work in both directions. If you know how fast a string comes off a spool, you can find the spool's ω from ω = v / r.

Directions in this course are described only as clockwise or counterclockwise. If a disc turns counterclockwise, each point's velocity is tangent to its circle in the counterclockwise sense.

## Same ω, different v: comparing points

For a rigid body, **all points have the same ω and the same α** at any instant. Then:

- v = rω: linear speed is **proportional** to r. A point twice as far from the axis moves twice as fast.
- a_T = rα: tangential acceleration is also proportional to r.
- a_c = v²/r = (rω)²/r = **ω²r**: the centripetal acceleration from Topic 2.9 is **also** proportional to r when ω is shared.

That last result surprises many students, who remember a_c = v²/r and expect a smaller r to give a bigger a_c. That is true only when v is held fixed. On one rigid body, ω is the same for every point, so a_c = ω²r grows with r.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p1-lr-title p1-lr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-lr-title">Linear speed grows with distance from the axis on a rotating disc</title>
<desc id="p1-lr-desc">Left: a disc rotates counterclockwise about its centre. Three points lie on a vertical radius at distances r, 2r and 3r above the axis. Each has a velocity arrow pointing to the left, perpendicular to the radius, with lengths in the ratio 1 to 2 to 3, labelled v, 2v and 3v. A dashed straight line through the arrow tips passes through the axis. Right, upper graph: linear speed v against distance from the axis r is a straight line through the origin. Right, lower graph: angular velocity omega against r is a horizontal line, the same for all points.</desc>
<defs><marker id="p1-lr-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<circle cx="160" cy="180" r="125" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="160" cy="180" r="5" fill="#1d2b44"/>
<path d="M160 180 V55" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M160 180 L66.25 55" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-lr-arr)">
<path d="M160 138.3 H128.75"/>
<path d="M160 96.7 H97.5"/>
<path d="M160 55 H66.25"/>
</g>
<g fill="#1d2b44"><circle cx="160" cy="138.3" r="4"/><circle cx="160" cy="96.7" r="4"/><circle cx="160" cy="55" r="4"/></g>
<g font-size="12" fill="#1d2b44">
<text x="166" y="142">r</text><text x="166" y="101">2r</text><text x="166" y="59">3r</text>
<text x="132" y="132">v</text><text x="104" y="90">2v</text><text x="76" y="48">3v</text>
<text x="168" y="198">axis</text>
</g>
<path d="M90 301.2 A140 140 0 0 0 230 301.2" fill="none" stroke="#1d2b44" stroke-width="2" marker-end="url(#p1-lr-arr)"/>
<text x="240" y="324" font-size="12" fill="#1d2b44">counterclockwise</text>
<path d="M330 150 H530 M330 150 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M330 150 L510 50" stroke="#1d2b44" stroke-width="2.5"/>
<text x="430" y="168" font-size="12" fill="#1d2b44">distance from axis, r</text>
<text x="316" y="40" font-size="12" fill="#1d2b44" text-anchor="end">v</text>
<text x="400" y="70" font-size="12" fill="#1d2b44">v = rω (straight line</text>
<text x="400" y="85" font-size="12" fill="#1d2b44">through the origin)</text>
<path d="M330 300 H530 M330 300 V190" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M330 240 H510" stroke="#1d2b44" stroke-width="2.5"/>
<text x="430" y="318" font-size="12" fill="#1d2b44">distance from axis, r</text>
<text x="316" y="200" font-size="12" fill="#1d2b44" text-anchor="end">ω</text>
<text x="380" y="230" font-size="12" fill="#1d2b44">ω the same for every point</text>
</svg>
<figcaption>Figure 1. On a disc turning counterclockwise, points at r, 2r and 3r share the same ω, so their speeds are v, 2v and 3v. The tips of the velocity arrows lie on a straight line through the axis. The sketches on the right show v proportional to r and ω constant with r.</figcaption>
</figure>

## Things that share a linear speed

When two rotating parts are linked so that nothing slips, the **linear speed** at the contact is shared:

- **Belt or chain drives.** The belt moves at one speed, so the rims of both pulleys move at that speed: r₁ω₁ = r₂ω₂. The smaller pulley turns faster.
- **String on a spool or winch.** A string unwinding without slipping moves at v = rω of the drum, and its acceleration equals a_T = rα. The length unwound equals rΔθ.
- **Gears in mesh.** The teeth at the contact point move together, so r₁ω₁ = r₂ω₂ again (meshing gears turn in opposite senses; a belt keeps the same sense).

So when you see a belt, chain or string, think "**same v**". When you see one rigid body, think "**same ω**".

## Worked example 1: a winch lifting a load

**Question.** A builder's winch has a drum of radius 0.15 m. A cable wrapped round it lifts a bucket. The drum starts from rest and has a constant angular acceleration of 2.0 rad/s² for 3.0 s. The cable does not slip or stretch. Find (a) the drum's angular velocity and angle turned after 3.0 s, and (b) the bucket's speed, acceleration and the height it has risen.

1. Drum: ω = ω₀ + αt = 0 + 2.0 × 3.0 = **6.0 rad/s**. Δθ = ½αt² = ½ × 2.0 × 3.0² = **9.0 rad** (about 1.4 turns).
2. The cable moves with the rim, and the bucket moves with the cable.
3. Speed: v = rω = 0.15 × 6.0 = **0.90 m/s** (upward).
4. Acceleration: a = rα = 0.15 × 2.0 = **0.30 m/s²** (upward).
5. Height: Δs = rΔθ = 0.15 × 9.0 = **1.35 m** (about 1.4 m).

**Check.** Treat the bucket with Unit 1 kinematics: from rest with a = 0.30 m/s² for 3.0 s, v = 0.30 × 3.0 = 0.90 m/s and Δy = ½ × 0.30 × 3.0² = 1.35 m. ✓ The rotational and linear pictures give the same answer, as they must.

## Worked example 2: a belt drive

**Question.** A motor pulley of radius 4.0 cm turns at 1500 rpm. A belt connects it to a second pulley of radius 12 cm. The belt does not slip. Find (a) the belt's speed and (b) the angular velocity of the large pulley, in rad/s and rpm.

1. Convert: ω₁ = 1500 × 2π ÷ 60 = 50π ≈ 157 rad/s.
2. Belt speed = rim speed of the motor pulley: v = r₁ω₁ = 0.040 m × 157.1 rad/s ≈ **6.3 m/s**.
3. The large pulley's rim moves at the same v: ω₂ = v / r₂ = 6.283 ÷ 0.12 ≈ **52 rad/s**.
4. In rpm: 52.36 × 60 ÷ 2π = **500 rpm**.

**Check.** r₁ω₁ = r₂ω₂ gives ω₂ = ω₁ × (r₁ / r₂) = 1500 rpm × (4.0 ÷ 12) = 500 rpm. ✓ The pulley three times larger turns three times more slowly. Notice that the ratio method works in rpm directly, because the conversion factor cancels; but the belt speed itself needs rad/s.

## Worked example 3: two points on a fan blade

**Question.** A ceiling fan is speeding up. At one instant its angular velocity is 8.0 rad/s and its angular acceleration is 2.5 rad/s². Point P is 0.20 m from the axis; point Q, at the blade tip, is 0.60 m from the axis. Compare their linear speeds, tangential accelerations and centripetal accelerations.

| Quantity | P (r = 0.20 m) | Q (r = 0.60 m) |
|---|---|---|
| ω | 8.0 rad/s | 8.0 rad/s |
| α | 2.5 rad/s² | 2.5 rad/s² |
| v = rω | 1.6 m/s | 4.8 m/s |
| a_T = rα | 0.50 m/s² | 1.5 m/s² |
| a_c = ω²r | 12.8 m/s² | 38.4 m/s² |

Q is three times as far from the axis, so v, a_T and a_c are all **three times** larger at Q. The angular quantities are equal.

**Interpretation.** At this instant a_c is much bigger than a_T at both points. The total acceleration of the tip has size √(38.4² + 1.5²) ≈ 38 m/s², pointing almost straight at the axis (only about 2° from it). As ω keeps growing, a_c grows as ω², while a_T stays fixed as long as α does.

**Check.** a_c at Q using v²/r: 4.8² ÷ 0.60 = 38.4 m/s². ✓

## Common misconceptions

- **"Points farther out have a bigger angular velocity."** They have a bigger *linear* speed. ω is the same for the whole rigid body.
- **"Pulleys joined by a belt turn at the same rate."** They share the belt's linear speed. The smaller pulley has the larger ω.
- **Using degrees or rpm in v = rω.** Use rad and rad/s, or the answer is wrong by a factor of 2π or 57.3.
- **"a_T = rα is the acceleration of the point."** It is only the tangential part. There is also a centripetal part ω²r, even when α = 0.
- **"Smaller radius means bigger centripetal acceleration."** Only when v is fixed. For points on one rigid body ω is fixed, so a_c = ω²r is larger farther out.
- **Mixing up r and the length of string.** In Δs = rΔθ, r is the radius of the drum, not the length of cable wound on it.

## Where this leads

You now have the full kinematic picture of rotation. Topic 5.3, [Torque](/advanced-course-resources/physics-1/5-3-torque-study-guide/), asks what makes a body's angular velocity change. Later, Topic 6.5 uses v = rω for bodies that roll without slipping. Try the [practice questions](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-checklist/). You can also go back to [Topic 5.1, Rotational Kinematics](/advanced-course-resources/physics-1/5-1-rotational-kinematics-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
