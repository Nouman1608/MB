---
resourceId: "mb-ap-physcm-2.10-study-guide"
title: "Circular Motion: Study Guide (Physics C: Mechanics 2.10)"
description: "Calculus-based circular motion: deriving centripetal acceleration, tangential and net acceleration, loops, banked curves with friction, conical pendulums and Kepler's third law."
course: "physics-c-mechanics"
unit: 2
topics: ["2.10"]
resourceType: "study-guide"
prerequisites:
  - "Newton's second law and free-body diagrams (Topics 2.2 and 2.5)"
  - "Gravitational force and static friction (Topics 2.6 and 2.7)"
  - "Differentiating sine and cosine, and vectors in two dimensions (Topics 1.1 and 1.5)"
prerequisiteResources: ["mb-ap-physcm-2.9-study-guide"]
learningObjectives:
  - "Derive the size and direction of centripetal acceleration by differentiating a circular position vector"
  - "Use period and frequency to describe uniform circular motion and link them to speed and radius"
  - "Find tangential acceleration from the rate of change of speed and combine it with centripetal acceleration"
  - "Identify which forces, or components of forces, provide the centripetal acceleration in loops, banked curves and conical pendulums"
  - "Derive the minimum speed at the top of a vertical loop and the speed limits on a banked curve with friction"
  - "Derive Kepler's third law for a circular orbit and use it to find periods, radii or the central mass"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use g = 9.8 m/s², G = 6.67 × 10⁻¹¹ N·m²/kg², Earth's mass 5.97 × 10²⁴ kg and Earth's radius 6.37 × 10⁶ m. Set the calculator to degrees for angles"
related: ["mb-ap-physcm-2.10-revision-notes", "mb-ap-physcm-2.10-practice", "mb-ap-physcm-2.10-checklist"]
next: "mb-ap-physcm-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Centripetal acceleration points to the centre of the circle and has size a_c = v²/r. Differentiating a circular position vector twice proves it."
  - "Tangential acceleration a_t = dv/dt changes the speed. The net acceleration is the vector sum of a_c and a_t."
  - "There is no separate 'centripetal force'. One force, several forces or components of forces add up to ΣF toward the centre = mv²/r."
  - "At the top of a vertical loop the minimum speed is √(gr), when gravity alone provides the centripetal acceleration."
  - "For a circular orbit, gravity alone provides the centripetal acceleration, which gives T² = 4π²r³/(GM)."
faqs:
  - question: "How is this different from the Physics 1 version?"
    answer: "Physics 1 covers circular motion as its Topic 2.9. Physics C: Mechanics covers it as Topic 2.10 and adds calculus: you derive a_c = v²/r by differentiating, find tangential acceleration as dv/dt when the speed changes with time, and handle banked curves with friction as well as without."
  - question: "Do I need Kepler's first and second laws?"
    answer: "No. The course expects only the third law, for circular orbits. Elliptical orbits and the equal-areas law are outside its scope."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses**. Physics 1 teaches circular motion as Topic 2.9; this course teaches it as Topic 2.10, with calculus. Here you derive the centripetal acceleration from a position vector, find tangential acceleration as a derivative when the speed changes with time, and include friction on banked curves. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/2-9-circular-motion-study-guide/); do not mix the two when you revise. This topic follows [Topic 2.9, Resistive Forces](/advanced-course-resources/physics-c-mechanics/2-9-resistive-forces-study-guide/).

## Why moving in a circle means accelerating

Velocity is a vector. On a circle its direction changes all the time, so the object accelerates even at constant speed. Calculus shows exactly how.

Put the origin at the centre of a circle of radius r. An object goes round at constant speed, once every period T. Write ω = 2π/T (you will meet ω again as angular speed in Unit 5). Its position vector is:

**r(t) = r cos(ωt) î + r sin(ωt) ĵ**

Differentiate once for velocity:

**v(t) = dr/dt = −rω sin(ωt) î + rω cos(ωt) ĵ**

Its size is rω, so **v = rω = 2πr/T**. Its dot product with r(t) is zero, so the velocity is **tangent** to the circle.

Differentiate again for acceleration:

**a(t) = dv/dt = −rω² cos(ωt) î − rω² sin(ωt) ĵ = −ω² r(t)**

The minus sign means the acceleration points opposite to the position vector: **toward the centre**. Its size is rω² = v²/r. This is the **centripetal acceleration**:

**a_c = v²/r, directed toward the centre**

## Period and frequency

For uniform circular motion (constant speed):

- **Period T**: the time for one full revolution, in s.
- **Frequency f**: revolutions per second, in Hz (s⁻¹). **T = 1/f**.
- One revolution covers 2πr, so **T = 2πr/v**.

Substituting v = 2πr/T gives another useful form: a_c = 4π²r/T².

## Tangential acceleration and net acceleration

If the speed changes, the object also has a **tangential acceleration**, along the velocity:

**a_t = dv/dt** (the rate of change of **speed**)

a_t points along v when the object speeds up and against v when it slows down. It is always perpendicular to a_c, so the net acceleration is the vector sum:

**|a| = √(a_c² + a_t²)**, at angle φ from the inward radius, where tan φ = |a_t|/a_c.

If you know the distance travelled along the circle, s(t), then v = ds/dt and a_t = d²s/dt².

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm210-acc-title pcm210-acc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm210-acc-title">Centripetal, tangential and net acceleration on a circle</title>
<desc id="pcm210-acc-desc">A circle with its centre marked and a curved arrow below it showing anticlockwise travel. An object at point P on the right of the circle moves anticlockwise, so its velocity, a long dashed arrow, points straight up along the tangent. A thick arrow labelled a_c points from P horizontally to the centre. A short thick arrow labelled a_t points up from P along the velocity, showing the object is speeding up. A thick arrow labelled net a points up and to the left, the diagonal of the dotted rectangle formed by a_c and a_t. The angle phi between a_c and net a is marked.</desc>
<defs><marker id="pcm210-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<circle cx="190" cy="175" r="125" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="190" cy="175" r="4" fill="#1d2b44"/>
<text x="150" y="196" font-size="12" fill="#1d2b44">centre</text>
<path d="M120 296 A 140 140 0 0 0 260 296" fill="none" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm210-arr)"/>
<text x="190" y="334" font-size="12" fill="#1d2b44" text-anchor="middle">direction of travel: anticlockwise</text>
<path d="M219 175 H315 M219 145 H315 M219 145 V175" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3" fill="none"/>
<line x1="327" y1="175" x2="327" y2="75" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5" marker-end="url(#pcm210-arr)"/>
<line x1="315" y1="175" x2="223" y2="175" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#pcm210-arr)"/>
<line x1="315" y1="175" x2="315" y2="149" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#pcm210-arr)"/>
<line x1="315" y1="175" x2="223" y2="146" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#pcm210-arr)"/>
<circle cx="315" cy="175" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="322" y="196" font-size="13" fill="#1d2b44" font-weight="600">P</text>
<text x="252" y="192" font-size="13" fill="#1d2b44">a_c</text>
<text x="292" y="140" font-size="13" fill="#1d2b44">a_t</text>
<text x="232" y="136" font-size="13" fill="#1d2b44">net a</text>
<text x="335" y="85" font-size="13" fill="#1d2b44">v (dashed)</text>
<path d="M270 175 A 45 45 0 0 1 272 162" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<text x="276" y="170" font-size="12" fill="#1d2b44">φ</text>
<g font-size="12" fill="#1d2b44">
<text x="370" y="150">a_c = v²/r, toward the centre</text>
<text x="370" y="170">a_t = dv/dt, along v (speeding up)</text>
<text x="370" y="190">|a| = √(a_c² + a_t²)</text>
<text x="370" y="210">tan φ = a_t / a_c</text>
</g>
</svg>
<figcaption>Figure 1. An object speeding up anticlockwise around a circle. a_c points to the centre, a_t points along the velocity, and the net acceleration is their vector sum, tilted forward by φ. If the object slowed down, a_t would point backward instead and the net acceleration would tilt behind the radius.</figcaption>
</figure>

## Where the inward force comes from

Newton's second law along the radius, with **+ toward the centre**:

**ΣF_toward centre = m v²/r**

"Centripetal force" is not a new kind of force. It is the name for the inward total of real forces. Never draw it on a free-body diagram. That total can come from:

- **one force**: gravity on a satellite, or tension on a puck whirled on a horizontal frictionless table;
- **several forces**: gravity and the normal force on a car at the top of a hill;
- **components of forces**: the normal force and friction on a banked curve, or tension in a conical pendulum.

## Vertical loops: the minimum speed at the top

At the top of a vertical loop of radius r, a cart on the inside of the track feels gravity mg and the normal force N, both pointing **down**, toward the centre:

N + mg = mv²/r

N cannot be negative: the track can push but not pull. The smallest possible speed is when N = 0. Then gravity alone provides the centripetal acceleration:

mg = mv²/r, so **v_min = √(gr)**

For a toy track with r = 0.25 m, v_min = √(9.8 × 0.25) ≈ 1.6 m/s. Any slower, and the cart leaves the track before the top.

## Banked curves with friction

A road banked at angle θ tilts the normal force toward the centre. Take +x **horizontal, toward the centre**, and +y up. Friction acts **along the slope**, and its direction depends on the speed.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="pcm210-bank-title pcm210-bank-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm210-bank-title">Banked curve and free-body diagram at the maximum speed</title>
<desc id="pcm210-bank-desc">Left: cross-section of a road banked at angle theta, rising to the right, with a car drawn as a rectangle on the slope; an arrow along the bottom points left, labelled toward the centre of the curve. Right: a free-body diagram for the car as a dot. The normal force N points up and tilted left, at angle theta from the vertical. The weight mg points straight down. Static friction f points down the slope, to the left and slightly down. Axes show +x horizontal toward the centre (left) and +y up.</desc>
<defs><marker id="pcm210-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<path d="M30 250 L300 152 L300 250 Z" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="145" y="168" width="60" height="28" fill="#ffffff" stroke="#1d2b44" stroke-width="2" transform="rotate(-20 175 182)"/>
<path d="M90 250 A 60 60 0 0 0 86 230" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="96" y="242" font-size="13" fill="#1d2b44">θ</text>
<line x1="260" y1="285" x2="60" y2="285" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm210-arr2)"/>
<text x="90" y="305" font-size="12" fill="#1d2b44">toward the centre of the curve</text>
<line x1="430" y1="170" x2="430" y2="60" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="430" y1="170" x2="393" y2="67" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm210-arr2)"/>
<line x1="430" y1="170" x2="430" y2="270" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm210-arr2)"/>
<line x1="430" y1="170" x2="367" y2="193" stroke="#1d2b44" stroke-width="3" marker-end="url(#pcm210-arr2)"/>
<circle cx="430" cy="170" r="5" fill="#1d2b44"/>
<path d="M430 120 A 50 50 0 0 0 413 123" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<text x="416" y="112" font-size="12" fill="#1d2b44">θ</text>
<text x="372" y="62" font-size="13" fill="#1d2b44">N</text>
<text x="438" y="268" font-size="13" fill="#1d2b44">mg</text>
<text x="330" y="212" font-size="13" fill="#1d2b44">f (down slope)</text>
<line x1="520" y1="300" x2="480" y2="300" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm210-arr2)"/>
<line x1="520" y1="300" x2="520" y2="262" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm210-arr2)"/>
<text x="470" y="316" font-size="11" fill="#1d2b44">+x</text>
<text x="526" y="268" font-size="11" fill="#1d2b44">+y</text>
</svg>
<figcaption>Figure 2. A banked curve (angle exaggerated) and the free-body diagram for a car at the greatest safe speed. N is tilted θ from the vertical toward the centre; friction acts down the slope. At the least speed, friction would point up the slope instead.</figcaption>
</figure>

**At the greatest speed**, the car tends to slide up and out, so static friction points **down the slope**, at its maximum f = μ_s N:

- x: N sin θ + μ_s N cos θ = mv²/r
- y: N cos θ − μ_s N sin θ − mg = 0

Divide one equation by the other to remove N and m:

**v_max² = rg (sin θ + μ_s cos θ)/(cos θ − μ_s sin θ)**

**At the least speed**, the car tends to slide down and in, so friction points **up the slope**. Swap the sign of every μ_s term:

**v_min² = rg (sin θ − μ_s cos θ)/(cos θ + μ_s sin θ)**

If tan θ ≤ μ_s, the top line is zero or negative: the car can even stay parked on the slope, so there is no minimum speed. With μ_s = 0, both reduce to **v² = rg tan θ**, the one speed that needs no friction at all.

## Conical pendulums

A ball on a string of length L moves in a horizontal circle, with the string at angle θ to the vertical. Only the tension F_T and gravity act. The horizontal component of tension provides the centripetal acceleration:

- toward the centre: F_T sin θ = mv²/r, with r = L sin θ
- vertical: F_T cos θ = mg

Dividing gives **tan θ = v²/(rg)**. Combining with T = 2πr/v gives the period **T = 2π√(L cos θ/g)**. The mass cancels. For L = 1.2 m and θ = 40°, the period is about 1.9 s and the tension is mg/cos θ ≈ 1.3mg.

## Circular orbits and Kepler's third law

For a satellite of mass m in a circular orbit of radius r around a central body of mass M, **gravity is the only force**. It provides all the centripetal acceleration:

GMm/r² = mv²/r, so v² = GM/r.

Substitute v = 2πr/T and rearrange:

**T² = (4π²/GM) r³**

This is **Kepler's third law** for circular orbits. The satellite's mass cancels, so T depends only on r and the central mass M. Measure T and r for any moon, and you can find the mass of its planet. The course does not expect Kepler's first or second laws.

## Worked example 1: a toy train speeding up

**Question.** A toy train starts from rest on a circular track of radius 0.60 m. The distance it travels along the track is s(t) = (0.30 m/s²)t². Find, at t = 2.0 s, (a) its speed, (b) its tangential acceleration, (c) its centripetal acceleration and (d) the size and direction of its net acceleration. (e) How long does it take to finish the first lap?

1. **(a)** v = ds/dt = 0.60t. At 2.0 s, **v = 1.2 m/s**.
2. **(b)** a_t = dv/dt = **0.60 m/s²**, along the velocity (speeding up). It is constant here.
3. **(c)** a_c = v²/r = (1.2)² ÷ 0.60 = **2.4 m/s²**, toward the centre.
4. **(d)** |a| = √(2.4² + 0.60²) = **2.5 m/s²**. Direction: tan φ = 0.60/2.4, so φ = **14°** from the inward radius, tilted forward (the direction of travel), as in Figure 1.
5. **(e)** One lap is 2πr = 3.77 m. Solve 0.30t² = 3.77: **t = 3.5 s**. The speed then is 2.1 m/s and a_c has grown to 7.5 m/s².

**Interpretation.** a_t stays constant, but a_c grows as v², so the net acceleration swings closer and closer to the inward radius as the train speeds up.

## Worked example 2: the greatest speed on a banked curve

**Question.** A motorway exit curve has radius 90 m and is banked at 12°. The coefficient of static friction between tyres and road is 0.40. Take +x horizontal toward the centre and +y up. Find (a) the speed that needs no friction and (b) the greatest speed at which a car can take the curve without sliding. (c) Is there a minimum speed?

1. **(a)** v² = rg tan θ = 90 × 9.8 × tan 12° = 187.5 m²/s², so **v = 14 m/s** (about 49 km/h).
2. **(b)** Friction points down the slope (Figure 2): v_max² = rg (sin 12° + 0.40 cos 12°)/(cos 12° − 0.40 sin 12°) = 90 × 9.8 × 0.5992/0.8950 = 590.5 m²/s². So **v_max = 24 m/s** (about 87 km/h).
3. **Check with forces** for a 1000 kg car at that speed: N = mg/(cos θ − μ_s sin θ) = 1.09 × 10⁴ N and f = 4.4 × 10³ N. Horizontal total N sin θ + f cos θ = 6.56 × 10³ N, which equals mv²/r = 6.56 × 10³ N.
4. **(c)** tan 12° = 0.21 is less than μ_s = 0.40, so the bracket in v_min² is negative. There is **no minimum speed**: friction can hold a parked car on this slope.

**Comparison.** On a flat road with the same friction, v_max = √(μ_s g r) = 19 m/s. Banking raises the limit by about 30%.

## Worked example 3: the period of a low Earth orbit

**Question.** A satellite moves in a circular orbit 600 km above Earth's surface. Find its period and speed.

1. r = 6.37 × 10⁶ m + 6.0 × 10⁵ m = 6.97 × 10⁶ m. Always measure r from the **centre** of Earth.
2. T = 2π√(r³/GM) = 2π√((6.97 × 10⁶)³ ÷ (6.67 × 10⁻¹¹ × 5.97 × 10²⁴)) = 5.79 × 10³ s ≈ **97 minutes**.
3. v = 2πr/T = **7.6 × 10³ m/s** (7.6 km/s).

**Factor of change.** An orbit with 4 times the radius has a period 4^(3/2) = 8 times as long.

## Common misconceptions

- **"Constant speed means no acceleration."** The direction changes, so a_c = v²/r even at constant speed.
- **"Centripetal force is an extra force on the diagram."** It is the inward net force. Draw only real forces: gravity, normal, tension, friction.
- **"Objects are flung outward by a centrifugal force."** In an inertial frame there is no outward force. A released object moves off along the tangent, by Newton's first law.
- **"Net acceleration always points to the centre."** Only when the speed is constant. With a_t ≠ 0 it tilts forward or backward.
- **"Friction on a banked curve always points down the slope."** It points down at high speed and up at low speed, and is zero at v² = rg tan θ.
- **"At the top of a loop, the normal force points up."** On the inside of a loop the track is above the cart, so N points down, toward the centre.
- **Using altitude as the orbit radius.** Add Earth's radius first.

## Where this leads

This topic ends Unit 2. Next, [Topic 3.1, Translational Kinetic Energy](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/), opens Unit 3; energy methods later give the speed at each point of a loop. Unit 5 describes the same motion with angular quantities, and orbits return in Unit 6. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/2-10-circular-motion-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
