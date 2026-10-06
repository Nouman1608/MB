---
title: "AQA A-Level Mathematics: J: Vectors (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Vectors Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "J: Vectors"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "j-vectors-aqa-alevel-maths"
description: "Condensed revision notes for AQA A-level Maths (7357) vectors, J1 to J5: notation, formula table, method steps, key distinctions and a quick self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and worked examples, use the [Vectors study guide](/resources/aqa-a-level-mathematics-vectors/). These notes condense **Section J: Vectors (J1 to J5)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The specification places Section J on **Paper 2**, and a calculator is required in every 7357 paper. Test yourself afterwards with the [Vectors practice questions](/resources/aqa-a-level-mathematics-vectors-practice/), or start with the [free 10-minute diagnostics](/diagnostics/). Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Printable checklist: [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/).

## Notation (Appendix A)

| Symbol | Meaning |
|---|---|
| **a**, a̲ | the vector a (bold in print, underlined by hand) |
| →AB (AB with an arrow) | the vector from A to B |
| â | unit vector in the direction of a |
| i, j, k | unit vectors along the x-, y- and z-axes |
| \|a\|, \|→AB\| | magnitude of a, of →AB |
| r, s, v, a | position, displacement, velocity, acceleration vectors |

The scalar product a.b appears in Appendix A under "Further Maths only". You do not need it for 7357.

## Formulae

| Result | Formula |
|---|---|
| Magnitude, 2D | \|xi + yj\| = √(x² + y²) |
| Magnitude, 3D (Appendix B: must be recalled) | \|xi + yj + zk\| = √(x² + y² + z²) |
| Unit vector | â = a / \|a\| |
| Components from magnitude r, angle θ from i | r cos θ i + r sin θ j |
| Angle with i (first quadrant) | tan θ = y / x, then adjust for quadrant |
| Angle with an axis in 3D | cos θ = (component along that axis) / \|a\| |
| Vector between points | →AB = b − a |
| Distance between points | AB = \|b − a\| |
| Point dividing AB in ratio m : n | a + (m/(m + n))(b − a) |
| Midpoint | (a + b)/2 |
| Constant velocity | r = r₀ + vt, speed = \|v\| |
| Equilibrium | sum of force vectors = 0 |

## J1 and J2: components, magnitude, direction

**Method: magnitude and direction of a 2D vector**

1. Sketch it to see the quadrant.
2. Magnitude = √(x² + y²).
3. Find the acute angle with the x-axis from tan α = |y| / |x|.
4. Convert to the reference asked for: anticlockwise from i, below i, or a bearing.

**Method: magnitude/direction to components**

1. Write the angle θ anticlockwise from i (for a bearing β with i east and j north, θ = 90° − β).
2. Components are r cos θ and r sin θ. Signs come out automatically.

Reminder: |3i + 4j − 12k| = √(9 + 16 + 144) = √169 = 13, so the unit vector is (3i + 4j − 12k)/13.

Reminder: a 24 N force at 300° anticlockwise from i is 24 cos 300° i + 24 sin 300° j = (12i − 12√3 j) N.

Reminder (bearing): with i east and j north, a velocity of 10 m s⁻¹ on a bearing of 030° has θ = 90° − 30° = 60° from i, so v = 10 cos 60° i + 10 sin 60° j = (5i + 5√3 j) m s⁻¹. Check: it points mostly north and a little east, which matches a bearing of 030°.

## J3: addition, scalar multiples and geometry

- **Triangle law:** a + b is the third side when b starts where a ends.
- **Parallelogram law:** a + b is the diagonal from the common starting point.
- ka is parallel to a; same direction if k > 0, opposite if k < 0; length |k| |a|.
- a − b = a + (−b).
- A closed loop of vectors sums to 0.

**Method: geometric vector proof**

1. Write every vector you need in terms of the given base vectors (a, b).
2. Use routes through known points: →XY = →XO + →OY.
3. For a ratio along a line, take the right fraction of that line's vector.
4. To show parallel: show one vector is a scalar multiple of the other.
5. To show collinear: show parallel **and** name the shared point.

**Method: equating coefficients**

When a and b are not parallel, pa + qb = ra + sb gives p = r and q = s. With components, equate the i, j (and k) parts. Use this to find unknown ratios where two lines cross.

Reminder (two lines crossing): in triangle OAB, →OA = a and →OB = b. M is the midpoint of AB and N is on OA with ON : NA = 1 : 2. OM and BN meet at X.

```
On OM:  →OX = λ(a + b)/2 = (λ/2)a + (λ/2)b
On BN:  →OX = b + μ((1/3)a − b) = (μ/3)a + (1 − μ)b
a:  λ/2 = μ/3        b:  λ/2 = 1 − μ
So μ/3 = 1 − μ  →  μ = 3/4, λ = 1/2
```

→OX = (1/4)(a + b), so X is the midpoint of OM, and BX : XN = 3 : 1. Always state why you may equate coefficients: a and b are not parallel.

## J4: position vectors

- The position vector of A is a = →OA.
- →AB = b − a (go from A to O, then O to B).
- Distance AB = |b − a|.

Reminder: X(−2, 5) and Y(6, −1). →XY = 8i − 6j, XY = √(64 + 36) = 10. The point dividing XY in the ratio 3 : 1 from X is x + (3/4)(8i − 6j) = 4i + 0.5j.

## J5: problems in pure mathematics and in context

- **Right angle check without the scalar product:** if AB² + BC² = AC², angle ABC = 90° (converse of Pythagoras).
- **Parallelogram ABCD:** →AD = →BC, so d = a + c − b.
- **Forces:** resultant = vector sum; equilibrium means resultant = 0; F = ma links resultant to acceleration (Section R).
- **Constant velocity:** r = r₀ + vt. "Due north of O" means the i component is 0 and the j component is positive. "Due east" means the j component is 0 and the i component is positive.
Reminder: r = (4i − 3j) + t(−2i + 5j). The i component 4 − 2t is 0 at t = 2, when r = 7j. The j component is positive, so the particle is due north of O, 7 units away. Its speed is √29 ≈ 5.39.

- **Two moving objects:** the vector from A to B at time t is r_B − r_A. Closest approach: minimise |r_B − r_A|² by differentiating (Section G).

## Must-know distinctions

| This | Is not the same as |
|---|---|
| Velocity (vector, e.g. 3i − 4j m s⁻¹) | Speed (scalar, \|v\| = 5 m s⁻¹) |
| Displacement →AB | Distance AB = \|→AB\| |
| Position vector of A (from O) | Vector →AB (from A) |
| Parallel vectors | Collinear points (parallel **and** a shared point) |
| Resultant force (vector sum) | Sum of magnitudes |
| Unit vector â (length 1) | i, j or k (unit vectors along the axes only) |

## Quick self-test

1. Find |7i − 24j|.
2. Find the unit vector in the direction of 2i − j + 2k.
3. Find the angle between 4i − 4j and the positive x-direction, and say on which side of i it lies.
4. Write a 10 N force at 120° anticlockwise from i in component form, exactly.
5. a = 2i + 3j and b = i − 4j. Find 3a − 2b.
6. A is (3, −1) and B is (−1, 2). Find →AB and the distance AB.
7. Find the midpoint of P(2, 6, −1) and Q(4, −2, 5).
8. Is 6i − 9j parallel to −4i + 6j? Give a reason.
9. Find m if mi + 10j is parallel to 3i − 5j.
10. Forces (2i + j) N, (−3i + 4j) N and F are in equilibrium. Find F.
11. A particle has r = (1 + 2t)i + (3t − 4)j. Find its speed to 3 s.f.
12. a = 2i + pj + 6k and |a| = 7. Find the possible values of p.

### Answers

1. √(49 + 576) = √625 = **25**.
2. Magnitude √(4 + 1 + 4) = 3, so **(2i − j + 2k)/3**.
3. tan α = 4/4 = 1, so **45° below i** (45° clockwise from the positive x-direction).
4. 10 cos 120° i + 10 sin 120° j = **(−5i + 5√3 j) N**.
5. (6i + 9j) − (2i − 8j) = **4i + 17j**.
6. →AB = b − a = **−4i + 3j**; AB = √(16 + 9) = **5**.
7. ((2 + 4)/2, (6 − 2)/2, (−1 + 5)/2) = **(3, 2, 2)**.
8. **Yes**: 6i − 9j = −(3/2)(−4i + 6j), a scalar multiple.
9. m/3 = 10/(−5) = −2, so **m = −6**.
10. F = −((2i + j) + (−3i + 4j)) = −(−i + 5j) = **(i − 5j) N**.
11. v = 2i + 3j, speed = √13 = **3.61** (units of the question).
12. 4 + p² + 36 = 49, so p² = 9 and **p = 3 or p = −3**.

## Where marks are usually lost

- Writing →AB = a − b. It is always "end minus start": b − a.
- Giving the angle with i straight from a calculator's arctan for a vector in the second or third quadrant.
- Dividing by the wrong number for a unit vector; you divide by the magnitude.
- Showing two vectors are parallel and then stating "collinear" without naming the shared point.
- Using the wrong fraction for a ratio: AP : PB = 3 : 2 means AP = (3/5)→AB, not (3/2)→AB.
- Adding magnitudes of forces instead of adding the force vectors.
- Giving a speed when the question asks for a velocity, or a velocity with no units.
- In "due north/east" questions, setting a component to zero but not checking the sign of the other one.
- Equating coefficients of a and b without stating that a and b are not parallel, in a proof that asks for full reasoning.
- Squaring a negative component as a negative number when finding a magnitude.
- Rounding too early, so a final distance or angle is wrong in the third significant figure.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.11 J: Vectors (J1 to J5), with Appendix A: mathematical notation (vectors) and Appendix B: mathematical formulae and identities.
