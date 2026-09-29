---
title: "IB DP Mathematics: Applications and Interpretation -- Radians, the unit circle, matrix transformations and vectors (HL) Revision Notes"
seoTitle: "IB Maths AI HL Radians, Matrices and Vectors Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Radians, the unit circle, matrix transformations and vectors (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 3.7
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-3-13"
description: "Condensed IB Maths AI HL revision notes on radians, unit circle, matrix transformations and vectors (3.7-3.13), with formula tables and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and worked examples, use the [study guide](/resources/ib-dp-mathematics-ai-hl-trigonometry-matrix-transformations-vectors/). These notes condense the HL unit on radians, the unit circle, matrix transformations and vectors in IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 3.7–3.13, all HL only (AHL). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

When you are ready, test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-trigonometry-matrix-transformations-vectors-practice/). The [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/) show where this unit sits, and the [geometry and trigonometry overview](/resources/ib-dp-mathematics-ai-geometry-trigonometry/) covers the SL part of the strand.

Two facts to keep in mind: all three HL papers require technology, and HL papers assume radians unless a question says otherwise.

## Definitions

- **Radian:** the angle at the centre of a circle subtended by an arc equal in length to the radius. 2π rad = 360°.
- **Unit circle:** the point at angle θ (anticlockwise from the positive x-axis) is (cos θ, sin θ).
- **tan θ** = sin θ / cos θ.
- **Scalar:** size only. **Vector:** size and direction.
- **Base vectors:** i, j, k, of length 1 along the x-, y- and z-axes.
- **Position vector:** OA = a. **Displacement** from A to B: AB = b − a.
- **Unit vector:** length 1. **Normalising** v means finding v / |v|.
- **Zero vector** 0; **−v** has the same length as v and the opposite direction.
- **Resultant:** the sum of two or more vectors.

## Formula table

| Topic | Result |
|---|---|
| Degrees → radians | × π/180 |
| Radians → degrees | × 180/π |
| Arc length (θ in rad) | l = rθ |
| Sector area (θ in rad) | A = ½r²θ |
| Pythagorean identity | cos²θ + sin²θ = 1 |
| Sine rule | a / sin A = b / sin B = c / sin C |
| Affine transformation | (x', y') = A(x, y) + (e, f) |
| A then B | matrix BA |
| Area of image | \|det A\| × area of object |
| Magnitude | \|v\| = √(v₁² + v₂² + v₃²) |
| Vector of length L along v | L × v / \|v\| |
| Line | r = a + λb |
| Parametric form | x = x₀ + λl, y = y₀ + λm, z = z₀ + λn |
| Constant velocity | r = r₀ + vt |
| Scalar product | v · w = v₁w₁ + v₂w₂ + v₃w₃ = \|v\|\|w\| cos θ |
| Vector product | v × w = (v₂w₃ − v₃w₂, v₃w₁ − v₁w₃, v₁w₂ − v₂w₁) |
| Magnitude of v × w | \|v\|\|w\| sin θ = area of parallelogram |
| Component of a along b | (a · b) / \|b\| = \|a\| cos θ |
| Component of a perpendicular to b | \|a × b\| / \|b\| = \|a\| sin θ |

## Transformation matrices

Rows separated by semicolons.

| Transformation | Matrix | det |
|---|---|---|
| Reflect in x-axis | (1 0; 0 −1) | −1 |
| Reflect in y-axis | (−1 0; 0 1) | −1 |
| Reflect in y = x | (0 1; 1 0) | −1 |
| Reflect in y = (tan θ)x | (cos 2θ sin 2θ; sin 2θ −cos 2θ) | −1 |
| Horizontal stretch, factor k | (k 0; 0 1) | k |
| Vertical stretch, factor k | (1 0; 0 k) | k |
| Enlargement, centre O, factor k | (k 0; 0 k) | k² |
| Rotation θ anticlockwise about O | (cos θ −sin θ; sin θ cos θ) | 1 |

Quick check: the columns of a matrix are the images of (1, 0) and (0, 1).

## Method in steps

> **Ambiguous case of the sine rule**
> 1. Use the sine rule to find sin of the unknown angle.
> 2. Take the GDC value, B₁, and also B₂ = 180° − B₁ (or π − B₁).
> 3. Keep B₂ only if it plus the given angle is less than 180°.
> 4. Finish each triangle separately.

> **Solving a trig equation graphically**
> 1. Set the GDC to the unit of the interval (usually radians).
> 2. Graph both sides over exactly the interval given.
> 3. Read off every intersection; write a sketch or the equations you graphed.

> **Composite transformation**
> 1. Write each matrix.
> 2. Multiply in reverse order: first transformation on the right.
> 3. Apply to the point, then add any translation vector.
> 4. For areas, multiply by |det| of the matrix part only.

> **Closest approach of two objects**
> 1. Write r_A and r_B in terms of t.
> 2. Form AB = r_B − r_A.
> 3. Find |AB|² as a quadratic in t.
> 4. Minimise (differentiate, or graph |AB| on the GDC).
> 5. Substitute t back; state time and distance with units.

> **Variable velocity**
> 1. Integrate each component of v with respect to t.
> 2. Use the position at t = 0 for the constants.
> 3. Speed is |v| at the required time.

> **Do two lines intersect?**
> 1. Write both in parametric form (λ for one, μ for the other).
> 2. Solve two of the equations for λ and μ.
> 3. Check the third. If it holds, substitute to get the point.

## Small worked reminders

- 150° = 5π/6 rad. 2.4 rad = 137.5°.
- Sector r = 8, θ = 1.2: l = 9.6, A = 38.4, perimeter 25.6 (include both radii).
- sin θ = 0.6, θ obtuse: cos θ = −0.8, tan θ = −0.75.
- a = 7, b = 9, A = 40°: B = 55.7° or 124.3°.
- Rotate 90° anticlockwise then vertical stretch ×2: (1 0; 0 2)(0 −1; 1 0) = (0 −1; 2 0), det 2.
- Speed 15 in direction (2, −2, 1): magnitude 3, so v = (10, −10, 5).
- a = (2, −1, 3), b = (1, 4, 2): a · b = 4, θ = 76.5°, a × b = (−14, −1, 9).

## Must-know distinctions

- **Degrees vs radians.** l = rθ and A = ½r²θ need radians.
- **Angle between vectors vs acute angle between lines.** Vectors can give an obtuse angle. For lines, use |v · w| to get the acute angle.
- **Scalar product vs vector product.** v · w is a number; v × w is a vector perpendicular to both.
- **Position vs velocity.** In r = r₀ + vt, r₀ is where the object starts; v is how it moves each unit of time.
- **Speed vs velocity.** Speed = |v|, a scalar.
- **Unit vector vs normalised velocity.** A unit vector has length 1; a velocity of speed s is s times that unit vector.
- **Matrix part vs translation.** Only the matrix changes area. Translations never do.
- **det negative vs positive.** Negative means a reflection is involved. Area still uses |det|.

## Quick self-test

1. Write 225° in radians as a multiple of π.
2. Convert 0.8 rad to degrees.
3. A sector has radius 5 cm and angle 0.9 rad. Find its arc length and area.
4. cos θ = −0.28 and π/2 < θ < π. Find sin θ.
5. Write the matrix for a 90° anticlockwise rotation about the origin.
6. A shape of area 5 units² is transformed by (2 1; 1 3). Find the area of the image.
7. Transformation P is applied, then Q. Which product gives the single matrix?
8. Find the unit vector in the direction of (6, −2, 3).
9. Does (7, −1, 4) lie on r = (1, 2, −2) + λ(2, −1, 2)?
10. Find the angle between (3, 0, 4) and (1, 2, 2), in degrees.
11. Find the area of the parallelogram with sides (2, 0, 1) and (1, 3, 0).
12. An object moves at 10 m s⁻¹ in the direction 3i − 4j. Write its velocity vector.

### Answers

1. 225 × π/180 = **5π/4**.
2. 0.8 × 180/π = **45.8°**.
3. l = 5 × 0.9 = **4.5 cm**; A = ½ × 25 × 0.9 = **11.3 cm²** (11.25).
4. sin²θ = 1 − 0.0784 = 0.9216; θ in the second quadrant so sin θ > 0: **sin θ = 0.96**.
5. **(0 −1; 1 0)**.
6. det = 2 × 3 − 1 × 1 = 5, so area = **25 units²**.
7. **QP**.
8. |v| = √(36 + 4 + 9) = 7, so the unit vector is **(6/7, −2/7, 3/7)**.
9. λ = 3 from x; y: 2 − 3 = −1 ✓; z: −2 + 6 = 4 ✓. **Yes**, with λ = 3.
10. Dot product 11, magnitudes 5 and 3, cos θ = 11/15, **θ = 42.8°**.
11. Cross product (−3, 1, 6), magnitude √46 = **6.78 units²**.
12. |3i − 4j| = 5, so **v = 6i − 8j** m s⁻¹.

## Where marks are usually lost

- Leaving the GDC in degree mode on an HL question where radians are assumed.
- Putting θ in degrees into l = rθ or A = ½r²θ.
- Giving only the acute angle in an ambiguous-case sine rule question that asks for all possible values.
- Stating graphical solutions outside the interval given, or missing one inside it.
- Writing AB instead of BA for "A followed by B".
- Using det A rather than |det A| when a reflection makes det negative.
- Adding the translation before applying the matrix when the form is Ax + b.
- Normalising with the wrong magnitude, or forgetting to multiply by the speed.
- Giving the obtuse angle when the question asks for the acute angle between two lines.
- In closest-approach questions, giving the time but not the distance, or dropping units.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021 — syllabus sections 3.7–3.13 (AHL).
