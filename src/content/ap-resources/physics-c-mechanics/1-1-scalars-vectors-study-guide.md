---
resourceId: "mb-ap-physcm-1.1-study-guide"
title: "Scalars and Vectors: Study Guide (Physics C: Mechanics 1.1)"
description: "Scalars and vectors for calculus-based mechanics: arrows, signs in one dimension, unit vector notation in three dimensions, position vectors, unit vectors and resultants by components."
course: "physics-c-mechanics"
unit: 1
topics: ["1.1"]
resourceType: "study-guide"
prerequisites:
  - "Right-angled triangle trigonometry: sine, cosine, tangent and Pythagoras"
  - "Plotting points on x–y axes and reading signed coordinates"
learningObjectives:
  - "Sort physical quantities into scalars (size only) and vectors (size and direction), and explain the choice"
  - "Draw a vector as an arrow to scale and add vectors tip to tail"
  - "Use + and − signs to show direction along one axis"
  - "Write a vector in unit vector notation with î, ĵ and k̂, and switch between components and magnitude-and-direction form"
  - "Write a position vector r, find its magnitude and its unit vector r̂"
  - "Find a resultant by adding the components of the vectors being added"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Calculator in degree mode for sine, cosine and inverse tangent. Worked examples give answers to 3 significant figures"
related: ["mb-ap-physcm-1.1-revision-notes", "mb-ap-physcm-1.1-practice", "mb-ap-physcm-1.1-checklist"]
next: "mb-ap-physcm-1.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A scalar has only a size. A vector has a size and a direction. Distance and speed are scalars; position, displacement, velocity and acceleration are vectors."
  - "In unit vector notation, A = A_x î + A_y ĵ + A_z k̂, and the magnitude is |A| = √(A_x² + A_y² + A_z²)."
  - "To add vectors, add their x-components, then their y-components, then their z-components."
  - "A unit vector has magnitude 1 and no unit: r̂ = r / |r| points the same way as r."
  - "Along one axis, the sign of a vector component is its direction. State the positive direction first."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 1.1?"
    answer: "They are separate courses. The Physics 1 topic works along one dimension only. Physics C: Mechanics also uses î, ĵ, k̂ notation in two and three dimensions, the position vector r and its unit vector r̂."
  - question: "Is speed the magnitude of velocity?"
    answer: "Yes, at a single instant. But average speed (distance ÷ time) is usually larger than the magnitude of average velocity (displacement ÷ time), because distance counts every part of the path."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both open with a Topic 1.1 on scalars and vectors. The Physics 1 topic stays in one dimension. This guide also covers vectors in **two and three dimensions** with î, ĵ and k̂, the position vector r and its unit vector r̂. The one-dimension treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/1-1-scalars-vectors-one-dimension-study-guide/); do not mix the two when you revise.

## Scalars and vectors

Every quantity in mechanics is one of two kinds.

- A **scalar** is described by a **magnitude** (a size, with a unit) only. Examples: mass, time, distance, speed, energy.
- A **vector** is described by a **magnitude and a direction**. Examples: position, displacement, velocity, acceleration, force.

The test is simple. Ask: "Does it make sense to ask *which way*?" "Which way is 3.0 s?" has no answer, so time is a scalar. "Which way is a velocity of 3.0 m/s?" must be answered, so velocity is a vector.

Two pairs are easy to confuse:

- **Distance** (scalar) is the total length of path travelled. **Displacement** (vector) is the straight-line change in position, from start to finish.
- **Speed** (scalar) is how fast something moves. **Velocity** (vector) is how fast *and* which way.

At any one instant, speed is the magnitude of velocity. Over an interval it is different: a runner who completes one lap of a 400 m track has run a distance of 400 m but has zero displacement.

**Notation on these pages.** In a vector equation such as A = A_x î + A_y ĵ, the letters A and r stand for vectors. The magnitude of a vector is written |A|, which is never negative. A_x, A_y and A_z are **components**: signed scalars.

## Vectors as arrows

You can draw any vector as an **arrow**:

- the arrow points in the vector's direction;
- its length is **proportional to the magnitude**, using a stated scale (for example, 1 cm represents 50 m).

Two vectors are **equal** if they have the same magnitude and the same direction, wherever they are drawn. So you may slide an arrow around the page, as long as you do not turn it or stretch it. That is what makes the **tip-to-tail** method work: to add B to A, draw A, then draw B starting at the tip of A. The **resultant** R = A + B runs from the tail of A to the tip of B (see Figure 1).

The vector −A has the same magnitude as A and points the opposite way. Subtracting a vector means adding its negative: A − B = A + (−B). Multiplying a vector by a positive scalar changes its length but not its direction; multiplying by a negative scalar also reverses it.

## One dimension: the sign is the direction

When all motion is along one line, you need only one axis. Choose a positive direction and **write it down**, for example **"+x to the right"**. Then opposite directions are shown by **opposite signs**:

| Statement | With +x to the right |
|---|---|
| displacement 4.0 m to the left | Δx = −4.0 m |
| velocity 3.0 m/s to the right | v_x = +3.0 m/s |
| velocity 3.0 m/s to the left | v_x = −3.0 m/s (speed 3.0 m/s) |

The sign is part of the direction, not part of the size. A velocity of −3.0 m/s is not "less than" a velocity of +3.0 m/s in speed: both have speed 3.0 m/s. If you had chosen +x to the left, every sign would flip and the physics would be identical.

## Unit vectors and components

A **unit vector** has magnitude exactly 1 and **no unit**. Its only job is to point. The three standard ones point along the axes:

- **î** along +x, **ĵ** along +y, **k̂** along +z.

Any vector can be built from them. Its components say how far to go along each axis:

**A = A_x î + A_y ĵ + A_z k̂**

**|A| = √(A_x² + A_y² + A_z²)**

The magnitude formula is Pythagoras used twice: once in the x–y plane, then again with the z-component.

**From magnitude and direction to components (two dimensions).** If A makes an angle θ with the +x axis, measured towards +y:

**A_x = |A| cos θ  A_y = |A| sin θ**

For example, a velocity of 12 m/s at 30° above the +x axis has v_x = 12 cos 30° = 10.4 m/s and v_y = 12 sin 30° = 6.00 m/s.

If the angle is measured from a different line, such as "20° west of north", draw a sketch first. The component **next to** the angle uses cosine; the component **opposite** the angle uses sine. Then give each component the sign of its direction.

**From components to magnitude and direction.** Use |A| = √(A_x² + A_y²) and tan θ = A_y / A_x, then **check the quadrant**. For A = −3.0 î + 4.0 ĵ, a calculator gives tan⁻¹(4.0 / −3.0) = −53.1°. But A points left and up, so it lies in the second quadrant: the true angle from +x is 180° − 53.1° = **126.9°**, and |A| = 5.00. A quick sketch avoids this trap every time.

## Position vectors and their unit vectors

Pick an origin and axes. The **position vector** of a point runs from the origin to the point:

**r = x î + y ĵ + z k̂**

Its components are simply the point's coordinates. The **unit vector in the direction of r** is

**r̂ = r / |r|**

Dividing each component by |r| keeps the direction and shrinks the length to 1. The metres cancel, so r̂ has no unit. For example, r = (3.0 î + 4.0 ĵ + 12 k̂) m has |r| = √(9 + 16 + 144) = 13.0 m, so r̂ = 0.231 î + 0.308 ĵ + 0.923 k̂. Check: 0.231² + 0.308² + 0.923² = 1.00.

**Displacement** is the change in the position vector: **Δr = r − r₀**. Topics 1.2, 1.4 and 1.5 build on this idea.

## Adding vectors by components: the resultant

Drawing to scale is good for a picture and a rough check, but components give exact answers. The **resultant** R of several vectors is found by adding their components axis by axis:

**R_x = A_x + B_x + …  R_y = A_y + B_y + …  R_z = A_z + B_z + …**

Do **not** add magnitudes. A 120 m flight followed by a 90.0 m flight does not give a 210 m displacement unless both point the same way. In general:

**|A| − |B| ≤ |A + B| ≤ |A| + |B|** (taking |A| ≥ |B|)

The largest resultant comes when the vectors point the same way; the smallest when they point opposite ways.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm11-add-title pcm11-add-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm11-add-title">Tip-to-tail addition of two displacement vectors with the resultant and its components</title>
<desc id="pcm11-add-desc">Axes with +x to the east (right) and +y to the north (up), origin at the lower left. Vector A, 120 m long, starts at the origin and points 30.0 degrees north of east. Vector B, 90.0 m long, starts at the tip of A and points 20.0 degrees west of north, measured from a dashed north line drawn at the tip of A. The thick resultant R runs from the origin to the tip of B, 162 m long at 63.2 degrees north of east. Dashed lines show the components of R: 73.1 m along x and 144.6 m along y. A scale bar shows 50 m.</desc>
<defs>
<marker id="pcm11-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<path d="M60 300 H330" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#pcm11-head)"/>
<path d="M80 320 V40" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#pcm11-head)"/>
<text x="334" y="304" font-size="13" fill="#1d2b44">+x (east)</text>
<text x="88" y="44" font-size="13" fill="#1d2b44">+y (north)</text>
<path d="M235.9 210 V150" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M189.7 300 V83.1" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4"/>
<path d="M80 300 L235.9 210" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm11-head)"/>
<path d="M235.9 210 L189.7 83.1" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm11-head)"/>
<path d="M80 300 L189.7 83.1" stroke="#1d2b44" stroke-width="4" marker-end="url(#pcm11-head)"/>
<path d="M120 300 A40 40 0 0 0 114.6 280" stroke="#1d2b44" stroke-width="1.2" fill="none"/>
<path d="M140 300 A60 60 0 0 0 107.1 246.5" stroke="#1d2b44" stroke-width="1.2" fill="none"/>
<path d="M235.9 175 A35 35 0 0 0 223.9 177.1" stroke="#1d2b44" stroke-width="1.2" fill="none"/>
<g font-size="12" fill="#1d2b44">
<text x="124" y="293">30.0°</text>
<text x="128" y="252">63.2°</text>
<text x="200" y="168">20.0°</text>
<text x="242" y="158">north</text>
<text x="172" y="262" font-weight="600">A = 120 m</text>
<text x="222" y="132" font-weight="600">B = 90.0 m</text>
<text x="132" y="180" font-weight="600" text-anchor="end">R = 162 m</text>
<text x="196" y="288">R_y = 144.6 m</text>
<text x="100" y="318">R_x = 73.1 m</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="360" y="120">Key</text>
<text x="360" y="140">thin arrows: A and B, tip to tail</text>
<text x="360" y="158">thick arrow: resultant R = A + B</text>
<text x="360" y="176">dashed lines: components of R</text>
<path d="M360 210 H435" stroke="#1d2b44" stroke-width="2"/>
<path d="M360 204 V216 M435 204 V216" stroke="#1d2b44" stroke-width="2"/>
<text x="360" y="232">scale: 50 m</text>
</g>
</svg>
<figcaption>Figure 1. Tip-to-tail addition for Worked example 1, drawn to scale with +x east and +y north. The resultant R runs from the tail of A to the tip of B. Its dashed components, 73.1 m and 144.6 m, are the sums of the components of A and B.</figcaption>
</figure>

## Worked example 1: adding two displacements in a plane

**Question.** Take **+x east and +y north**, origin at the launch point. A survey drone flies in a straight line 120 m at 30.0° north of east (vector A). It then flies 90.0 m at 20.0° west of north (vector B). Find its resultant displacement R in unit vector notation, then as a magnitude and direction.

1. **Components of A.** The angle is measured from east (+x), so A_x = 120 cos 30.0° = 103.9 m and A_y = 120 sin 30.0° = 60.0 m.
2. **Components of B.** The angle is measured from north (+y). The y-component is next to the angle: B_y = 90.0 cos 20.0° = 84.6 m. The x-component is opposite it, and it points west, so it is negative: B_x = −90.0 sin 20.0° = −30.8 m.
3. **Add axis by axis.** R_x = 103.9 + (−30.8) = 73.1 m; R_y = 60.0 + 84.6 = 144.6 m.
   **R = (73.1 î + 144.6 ĵ) m**
4. **Magnitude.** |R| = √(73.1² + 144.6²) = **162 m**.
5. **Direction.** Both components are positive, so R is in the first quadrant: θ = tan⁻¹(144.6 / 73.1) = **63.2° north of east**.

**Check.** The rule |A| − |B| ≤ |R| ≤ |A| + |B| gives 30 m ≤ 162 m ≤ 210 m. Figure 1, drawn to scale, shows the same arrow. The drone flew a **distance** of 210 m but its **displacement** has magnitude 162 m: the path bent, so distance is larger.

## Worked example 2: position vectors and a unit vector in three dimensions

**Question.** Take **+x east, +y north, +z up**, origin at a ground station. A drone hovers at r₁ = (3.0 î + 4.0 ĵ + 12 k̂) m, then moves in a straight line to r₂ = (11 î + 19 ĵ + 6.0 k̂) m. Find (a) |r₁| and r̂₁, (b) the displacement Δr, (c) its magnitude and its angle below the horizontal, and (d) the unit vector in the direction of Δr.

**(a)** |r₁| = √(3.0² + 4.0² + 12²) = √169 = **13.0 m**. Divide each component by 13.0 m: **r̂₁ = 0.231 î + 0.308 ĵ + 0.923 k̂** (no unit). This says the drone's position points mostly upwards from the station.

**(b)** Subtract component by component, Δr = r₂ − r₁:
Δx = 11 − 3.0 = 8.0 m; Δy = 19 − 4.0 = 15 m; Δz = 6.0 − 12 = −6.0 m.
**Δr = (8.0 î + 15 ĵ − 6.0 k̂) m.** The negative z-component means the drone moved down.

**(c)** |Δr| = √(8.0² + 15² + 6.0²) = √325 = **18.0 m**. The horizontal part has size √(8.0² + 15²) = 17.0 m, so the angle below the horizontal is tan⁻¹(6.0 / 17.0) = **19.4°**.

**(d)** Δr̂ = Δr / |Δr| = **0.444 î + 0.832 ĵ − 0.333 k̂**. Check: 0.444² + 0.832² + 0.333² = 1.00.

**Check.** r₁ + Δr = (3.0 + 8.0) î + (4.0 + 15) ĵ + (12 − 6.0) k̂ = r₂. Also note that |r₂| − |r₁| = 22.8 − 13.0 = 9.8 m, which is **not** |Δr|. The change in a vector's magnitude is not the magnitude of the change.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="pcm11-3d-title pcm11-3d-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm11-3d-title">Position vectors r₁ and r₂ and the displacement between them, drawn in three dimensions</title>
<desc id="pcm11-3d-desc">A three-dimensional sketch with +z pointing up the page, +y pointing to the right and +x drawn sloping down to the left towards the viewer. The unit vectors i-hat, j-hat and k-hat point along +x, +y and +z. A thin arrow r₁ goes from the origin up to the point (3, 4, 12) m. A thin arrow r₂ goes from the origin to the point (11, 19, 6) m. Dashed lines from the origin show the path to r₂ in three steps: 11 m along x, then 19 m along y, then 6 m up along z. A thick arrow Δr goes from the tip of r₁ down and to the right to the tip of r₂.</desc>
<defs>
<marker id="pcm11-head3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
</defs>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<path d="M170 270 L119.1 320.9" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#pcm11-head3)"/>
<path d="M170 270 H446" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#pcm11-head3)"/>
<path d="M170 270 V90" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#pcm11-head3)"/>
<g font-size="13" fill="#1d2b44">
<text x="114" y="342" text-anchor="end">+x (east, î)</text>
<text x="452" y="274">+y (north, ĵ)</text>
<text x="178" y="98">+z (up, k̂)</text>
<text x="160" y="266" text-anchor="end">O</text>
</g>
<path d="M170 270 L123.3 316.7 H351.3 V244.7" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 4" fill="none"/>
<path d="M170 270 L205.3 138.7" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm11-head3)"/>
<path d="M170 270 L351.3 244.7" stroke="#1d2b44" stroke-width="2" marker-end="url(#pcm11-head3)"/>
<path d="M205.3 138.7 L351.3 244.7" stroke="#1d2b44" stroke-width="4" marker-end="url(#pcm11-head3)"/>
<g font-size="12" fill="#1d2b44">
<text x="212" y="130" font-weight="600">r₁ = (3.0, 4.0, 12) m</text>
<text x="358" y="240" font-weight="600">r₂ = (11, 19, 6.0) m</text>
<text x="290" y="182" font-weight="600">Δr = r₂ − r₁</text>
<text x="140" y="300" text-anchor="end">x: 11 m</text>
<text x="237" y="334">y: 19 m</text>
<text x="358" y="286">z: 6.0 m</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="380" y="60">Key</text>
<text x="380" y="80">thin arrows: position vectors</text>
<text x="380" y="98">thick arrow: displacement Δr</text>
<text x="380" y="116">dashed: components of r₂</text>
</g>
</svg>
<figcaption>Figure 2. Position vectors in Worked example 2, with +x east, +y north and +z up. The dashed path shows r₂ = 11 î + 19 ĵ + 6.0 k̂ as three steps along the axes. The displacement Δr runs from the tip of r₁ to the tip of r₂. The sketch shows directions; it is not to scale along x.</figcaption>
</figure>

## Common misconceptions

- **"Distance and displacement are the same."** Distance is a path length (scalar). Displacement is a straight-line change in position (vector). They agree in size only for straight-line motion with no turning back.
- **Adding magnitudes.** |A + B| equals |A| + |B| only when A and B point the same way. Add components instead (Worked example 1).
- **"A negative vector is smaller."** In one dimension the sign shows direction. −5.0 m/s and +5.0 m/s have the same speed.
- **Trusting the calculator's angle.** tan⁻¹ cannot tell first-quadrant from third, or second from fourth. Sketch the vector and check the signs of its components.
- **Sine and cosine fixed to x and y.** Cosine goes with the component **next to** the angle, wherever the angle is measured from.
- **Giving a unit vector a unit.** r̂ = r / |r| has no unit and magnitude exactly 1.
- **|r₂| − |r₁| = |Δr|.** False in general (Worked example 2). Subtract the vectors first, then find the magnitude.
- **Forgetting the axis statement.** Every sign in an answer depends on it. Write it at the top of each solution.

## Where this leads

Next, [Topic 1.2 (Displacement, Velocity, and Acceleration)](/advanced-course-resources/physics-c-mechanics/1-2-displacement-velocity-acceleration-study-guide/) uses these signs and the displacement Δr = r − r₀, and defines velocity and acceleration as derivatives. Topics 1.4 and 1.5 add velocity vectors between reference frames and apply components to motion in two and three dimensions. Later, Topic 3.2 introduces the dot product of two vectors to calculate work; you do not need it yet. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/1-1-scalars-vectors-checklist/). You can also return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
