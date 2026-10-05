---
resourceId: "mb-ap-physcm-5.2-study-guide"
title: "Connecting Linear and Rotational Motion: Study Guide (Physics C: Mechanics 5.2)"
description: "Calculus-based links between rotation and the motion of points on a rigid system: s = rθ, v = rω and a_T = rα derived by differentiation, centripetal acceleration ω²r, and strings or hoses that unwind without slipping."
course: "physics-c-mechanics"
unit: 5
topics: ["5.2"]
resourceType: "study-guide"
prerequisites:
  - "Angular displacement, ω = dθ/dt and α = dω/dt about a fixed axis (Topic 5.1)"
  - "Centripetal acceleration a_c = v²/r for circular motion (Topic 2.10)"
prerequisiteResources: ["mb-ap-physcm-5.1-study-guide"]
learningObjectives:
  - "Relate the arc length travelled by a point to the angle turned, s = rθ, with θ in radians"
  - "Derive v = rω and a_T = rα by differentiating s = rθ for a point at fixed distance r from the axis"
  - "Explain why all points of a rigid system share ω and α but have linear speeds and accelerations proportional to r"
  - "Combine tangential and centripetal components to find the full acceleration of a point on a rotating system"
  - "Link the linear motion of a string, hose or belt that does not slip to the rotation of the rim it touches"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Exact calculus by hand; a calculator for arithmetic and square roots. Angles must be in radians in s = rθ, v = rω and a_T = rα"
related: ["mb-ap-physcm-5.2-revision-notes", "mb-ap-physcm-5.2-practice", "mb-ap-physcm-5.2-checklist"]
next: "mb-ap-physcm-5.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A point at distance r from a fixed axis moves along an arc of length s = rθ, with θ in radians."
  - "Differentiate with r constant: v = rω and a_T = rα. These hold only with ω in rad/s and α in rad/s²."
  - "All points of a rigid system share ω and α; their v, a_T and a_c are all proportional to r."
  - "A rotating point also has centripetal acceleration a_c = v²/r = ω²r toward the axis, even when ω is constant."
  - "A string, hose or belt that does not slip moves with the same speed and tangential acceleration as the rim it touches."
faqs:
  - question: "Is a_T = rα the whole acceleration of a point on a spinning wheel?"
    answer: "No. It is only the component along the path. The point also has a centripetal component ω²r toward the axis. The total acceleration has size √(a_T² + a_c²)."
  - question: "Why must θ be in radians here?"
    answer: "The radian is defined so that s = rθ with no extra factor. In degrees you would need s = rθπ/180, and the same factor would then appear in v = rω and a_T = rα."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 5.2 with this title. This guide is the **calculus-based** one: it derives v = rω and a_T = rα by differentiating s = rθ, and handles angular velocities that change with time. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/5-2-connecting-linear-rotational-motion-study-guide/); do not mix the two when you revise.

## One rotation, many circles

In Topic 5.1 you described a rigid system with three angular quantities: θ, ω and α. Every point of the system shares them. But each point also has **linear** motion: it moves along a circle centred on the axis. A point close to the axis moves along a small circle; a point near the edge moves along a large one. This topic connects the two descriptions.

Take a point at a fixed distance r from a fixed axis. As the system turns, r does not change, because the system is rigid. Only the angle changes.

## Arc length and the radian

The radian is defined so that the arc length s along a circle of radius r, for an angle θ, is

**s = rθ** (θ in radians)

So 1 rad is the angle for which the arc equals the radius, and one full turn (s = 2πr) is 2π rad. This is why the radian is a ratio of two lengths and often drops out of units: (0.30 m)(2.0 rad) = 0.60 m.

The same holds for changes: when the system turns through Δθ, the point travels a distance **Δs = rΔθ** along its circle. If you work in degrees or revolutions, s = rθ gives nonsense. Convert first.

## Deriving v = rω and a_T = rα

Differentiate s = rθ with respect to time. Because r is constant for a point on a rigid system, it comes outside the derivative:

**v = ds/dt = r(dθ/dt) = rω**

Differentiate again:

**a_T = dv/dt = r(dω/dt) = rα**

Here v is the point's **speed along its circle** (its velocity is tangent to the circle), and a_T is the **tangential component** of its acceleration: the part that changes the speed. Both equations need ω in rad/s and α in rad/s².

You can also go the other way. If you know how fast a point's speed changes, α = a_T/r; if you know its speed, ω = v/r. And integrating works as in Topic 5.1: the distance a point travels from t₁ to t₂ is ∫ v dt = r∫ ω dt = rΔθ (for motion in one sense).

**Directions.** Directions of rotation are described as clockwise or counterclockwise. The point's velocity is along the tangent, in the sense of rotation. a_T points along the velocity if the system is spinning faster, and against it if spinning slower.

## The other component: centripetal acceleration

A point on a rotating system moves in a circle, so it also has a **centripetal acceleration** toward the axis (Topic 2.10). Using v = rω:

**a_c = v²/r = ω²r**

This component is present whenever the system rotates, **even when ω is constant** and a_T = 0. The two components are perpendicular, so the full acceleration has size

**|a| = √(a_T² + a_c²)**

Notice the different dependences: a_T depends on α, but a_c depends on ω². Early in a spin-up from rest, ω is small and a_T can dominate. Later, a_c usually takes over.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm52-pts-title pcm52-pts-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm52-pts-title">Velocity and acceleration of two points on a disc speeding up counterclockwise</title>
<desc id="pcm52-pts-desc">Left panel: a disc with a fixed axis at its centre, turning counterclockwise and speeding up, shown by a curved arrow labelled omega and alpha counterclockwise. A radius line goes straight up from the axis. Point P is on it at distance r and point Q at distance 2r. Each point has a velocity arrow pointing left, along the tangent. Q's arrow is twice as long as P's and is labelled v_Q equals 2 r omega; P's is labelled v_P equals r omega. Right panel: the accelerations of Q drawn from one point. A short solid arrow points left, labelled tangential a_T equals 2 r alpha. A long solid arrow points down toward the axis, labelled centripetal a_c equals omega squared times 2r. A dashed arrow points down and to the left along the diagonal, labelled total acceleration, the square root of a_T squared plus a_c squared.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<circle cx="150" cy="190" r="125" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="150" cy="190" r="5" fill="#1d2b44"/>
<path d="M150 190 V75" stroke="#1d2b44" stroke-width="1.4" stroke-dasharray="6 4"/>
<circle cx="150" cy="132.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="150" cy="75" r="5" fill="#1d2b44"/>
<path d="M150 132.5 H111" stroke="#1d2b44" stroke-width="2.5"/>
<polygon points="103,132.5 113,127.5 113,137.5" fill="#1d2b44"/>
<path d="M150 75 H64" stroke="#1d2b44" stroke-width="2.5"/>
<polygon points="56,75 66,70 66,80" fill="#1d2b44"/>
<text x="158" y="137" font-size="12" fill="#1d2b44" font-weight="600">P (distance r)</text>
<text x="158" y="80" font-size="12" fill="#1d2b44" font-weight="600">Q (distance 2r)</text>
<text x="118" y="152" font-size="12" fill="#1d2b44" text-anchor="middle">v_P = rω</text>
<text x="56" y="62" font-size="12" fill="#1d2b44">v_Q = 2rω</text>
<path d="M121.8 200.3 A30 30 0 0 0 178.2 200.3" fill="none" stroke="#1d2b44" stroke-width="1.8"/>
<polygon points="181.6,190.9 182.9,202.0 173.5,198.6" fill="#1d2b44"/>
<text x="150" y="246" font-size="12" fill="#1d2b44" text-anchor="middle">ω and α counterclockwise</text>
<text x="150" y="262" font-size="12" fill="#1d2b44" text-anchor="middle">(speeding up)</text>
<text x="150" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Velocities: v ∝ r</text>
<path d="M300 20 V310" stroke="#1d2b44" stroke-width="0.8" stroke-dasharray="3 4"/>
<text x="430" y="24" font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600">Accelerations of Q</text>
<circle cx="420" cy="110" r="4" fill="#1d2b44"/>
<path d="M420 110 H368" stroke="#1d2b44" stroke-width="2.5"/>
<polygon points="360,110 370,105 370,115" fill="#1d2b44"/>
<path d="M420 110 V222" stroke="#1d2b44" stroke-width="2.5"/>
<polygon points="420,230 415,220 425,220" fill="#1d2b44"/>
<path d="M420 110 L364.5 221.1" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 4"/>
<polygon points="360,230 369.0,223.3 360.0,218.9" fill="#1d2b44"/>
<text x="366" y="98" font-size="12" fill="#1d2b44">a_T = 2rα (along v)</text>
<text x="430" y="170" font-size="12" fill="#1d2b44">a_c = ω²(2r)</text>
<text x="430" y="186" font-size="12" fill="#1d2b44">(toward the axis)</text>
<text x="316" y="254" font-size="12" fill="#1d2b44">dashed: total a = √(a_T² + a_c²)</text>
<text x="316" y="290" font-size="12" fill="#1d2b44">P has half of each component,</text>
<text x="316" y="306" font-size="12" fill="#1d2b44">so its total a is half as large too.</text>
</svg>
<figcaption>Figure 1. Two points on one rigid disc share ω and α. Q is twice as far from the axis, so its speed, tangential acceleration and centripetal acceleration are each twice P's. Solid arrows are components; the dashed arrow is the total acceleration of Q.</figcaption>
</figure>

## Comparing points on one rigid system

Because ω and α are the same everywhere, every linear quantity is **proportional to r**. For a disc with ω = 5.0 rad/s and α = 2.0 rad/s² at one instant:

| r (m) | v = rω (m/s) | a_T = rα (m/s²) | a_c = ω²r (m/s²) |
|---|---|---|---|
| 0.10 | 0.50 | 0.20 | 2.5 |
| 0.20 | 1.0 | 0.40 | 5.0 |
| 0.40 | 2.0 | 0.80 | 10 |

So a graph of v against r for points on one system is a **straight line through the origin** with slope ω, and a graph of a_c against r is a straight line with slope ω². The axis itself (r = 0) does not move at all.

**Graphs against time.** For one point, the v–t graph is the ω–t graph with every value multiplied by r: same shape, scaled. The a_T–t graph is the α–t graph scaled by r. The a_c–t graph follows ω², so if ω grows linearly, a_c grows as t².

## Strings, hoses and belts that do not slip

When a string, rope, hose or belt touches a rotating rim **without slipping**, the part in contact moves with the rim. So the straight part of the string has

**speed v = Rω and acceleration a = Rα**

where R is the radius at which it leaves the rim. This is the link you will use most in Unit 5 dynamics: a block hanging from a string wound on a pulley has a = Rα. Two assumptions sit behind it: no slipping, and a string that does not stretch. If the string winds in many layers, R changes as it unwinds; problems usually tell you to ignore this.

The straight part of the string has no centripetal acceleration, because it does not move in a circle. A piece of string still wrapped on the rim does.

## Worked example 1: a sensor on a rotating platform

**Question.** Take **counterclockwise as positive**. A rigid lab platform of radius 0.40 m turns about a fixed vertical axis with θ(t) = (0.20 rad/s³)t³. A sensor is fixed 0.30 m from the axis. (a) Derive expressions for the sensor's speed, tangential acceleration and centripetal acceleration in terms of r and t. (b) Find their values and the size of the total acceleration at t = 2.0 s. (c) How far has the sensor travelled by then? (d) When are a_T and a_c equal, and does this depend on where the sensor is mounted?

1. **Angular quantities.** ω = dθ/dt = 0.60t² rad/s; α = dω/dt = 1.2t rad/s².
2. **(a)** For a point at distance r: v = rω = **0.60rt²**; a_T = rα = **1.2rt**; a_c = ω²r = **0.36rt⁴** (SI units throughout).
3. **(b)** At t = 2.0 s, ω = 2.4 rad/s and α = 2.4 rad/s². With r = 0.30 m: v = 0.30 × 2.4 = **0.72 m/s**; a_T = 0.30 × 2.4 = **0.72 m/s²**; a_c = (2.4)² × 0.30 ≈ **1.7 m/s²**.
4. Total: |a| = √(0.72² + 1.728²) ≈ **1.9 m/s²**, pointing about 23° from the inward radius toward the direction of motion.
5. **(c)** θ(2.0) = 0.20 × 8.0 = 1.6 rad, so s = rθ = 0.30 × 1.6 = **0.48 m**.
6. **(d)** Set 0.36rt⁴ = 1.2rt. The r cancels: t³ = 1.2 ÷ 0.36 ≈ 3.33 s³, so **t ≈ 1.5 s**, **for every point on the platform**. Before this, a_T is larger; after it, a_c is larger.

**Check.** A point on the rim (r = 0.40 m) has every linear value multiplied by 0.40/0.30 = 4/3: v = 0.96 m/s, a_T = 0.96 m/s², a_c ≈ 2.3 m/s² at 2.0 s.

## Worked example 2: a hose pulled off a reel

**Question.** Take **counterclockwise as positive** for the reel. A gardener walks away from a reel of radius 0.25 m, pulling the hose so that its speed is v = (0.50 m/s²)t from rest, for 4.0 s. The hose does not slip on the reel; treat it as thin, so the radius stays 0.25 m. Find (a) the reel's ω(t) and α, (b) the length of hose pulled out and the number of turns, and (c) at t = 4.0 s, the acceleration of a piece of hose still on the reel compared with a piece in the straight section.

1. **(a)** No slipping, so the rim moves with the hose: ω = v/R = 0.50t ÷ 0.25 = **2.0t rad/s**. Then α = dω/dt = **2.0 rad/s²** (equal to a/R = 0.50 ÷ 0.25).
2. **(b)** Length: L = ∫₀⁴ 0.50t dt = 0.25t² evaluated at 4.0 s = **4.0 m**.
3. Angle: θ = ∫₀⁴ 2.0t dt = 16 rad, or directly θ = L/R = 4.0 ÷ 0.25 = 16 rad. Turns: 16 ÷ 2π ≈ **2.5 turns**.
4. **(c)** At 4.0 s: v = 2.0 m/s, ω = 8.0 rad/s. Straight section: acceleration **0.50 m/s²**, along the hose.
5. On the reel: a_T = Rα = **0.50 m/s²** and a_c = ω²R = 64 × 0.25 = **16 m/s²**. Total ≈ **16 m/s²**, almost all toward the axis.

**Interpretation.** Both pieces of hose have the same speed and the same tangential acceleration, but the piece on the reel also curves around the axis, so its acceleration is about 30 times larger. If many layers were wound on, R would shrink as the hose came off, and the reel would need a larger ω for the same hose speed.

## Common misconceptions

- **Using degrees or rpm in s = rθ, v = rω or a_T = rα.** Convert to radians first.
- **"Outer points have a bigger ω."** All points share ω and α. Outer points have bigger v, a_T and a_c.
- **"a_T = rα is the acceleration."** It is one component. Add a_c = ω²r at right angles.
- **"Constant ω means zero acceleration."** a_T = 0, but a_c = ω²r is not zero.
- **Using v = rω for any moving point.** It applies to points at a fixed distance from a fixed axis, or to a string or belt that does not slip on the rim.
- **Mixing up the radius.** For a string, use the radius where it leaves the rim, not the outer radius of the whole wheel.
- **Giving the straight string a centripetal acceleration.** Only parts moving in a circle have one.

## Where this leads

Topic 5.3 introduces torque, the rotational cause of α, and Topic 5.6 combines τ = Iα with a = Rα for pulleys and hanging masses. In Unit 6, rolling without slipping uses the same link between the speed of the centre and the rotation. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/5-2-connecting-linear-rotational-motion-checklist/). The next topic is [Torque](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/). You can also go back to [Rotational Kinematics](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/) or the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
