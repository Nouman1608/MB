---
resourceId: "mb-ap-physcem-8.3-practice"
title: "Electric Fields: Practice Questions (Physics C: E&M 8.3)"
description: "Seven original Marlbridge practice questions on electric fields: E = F/q, point charges, vector addition, zero-field points, conductors, experiment design and graphing."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.3"]
resourceType: "practice-questions"
prerequisites:
  - "The definition E = F/q₀ and the point-charge field kq/r²"
prerequisiteResources: ["mb-ap-physcem-8.3-study-guide"]
learningObjectives:
  - "Find the force on positive and negative charges from a given field"
  - "Predict factors of change in E and F"
  - "Add field vectors from several point charges and use symmetry"
  - "Plan a field measurement and analyse the data with a linear graph"
  - "Derive and interpret a symbolic expression for a net field"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 8.99 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C. Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-8.3-study-guide", "mb-ap-physcem-8.3-revision-notes", "mb-ap-physcem-8.3-checklist"]
next: "mb-ap-physcem-8.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism", "exam-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 6 asks you to plan an experiment and draw a graph; Question 7 needs a symbolic derivation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C and 1 nC = 10⁻⁹ C. All charges are at rest. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

At a point P the electric field is 4.0 × 10³ N/C directed east. An electron is placed at P. What is the electric force on the electron?

- (A) 6.4 × 10⁻¹⁶ N, east
- (B) 6.4 × 10⁻¹⁶ N, west
- (C) 2.5 × 10²² N, west
- (D) 6.4 × 10⁻¹⁶ N, but its direction cannot be found without knowing where the source charges are

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** F = qE, so |F| = eE = (1.60 × 10⁻¹⁹ C)(4.0 × 10³ N/C) = 6.4 × 10⁻¹⁶ N. The electron's charge is negative, so the force is opposite to E: west.

- (A) has the right size but uses the direction of E. That is only correct for a positive charge.
- (C) divides E by e instead of multiplying. Its unit would be N/C², not N.
- (D) is wrong: E already gives the direction. You do not need the sources once you know E at the point.
</details>

## Question 2 (multiple choice · core)

A point charge Q produces a field of magnitude E₀ at a point 0.20 m away. A small test charge q at that point feels a force F₀. Now Q is doubled, and a test charge 2q is placed 0.40 m from Q. Which row gives the new field magnitude at the new point and the new force on the test charge?

- (A) E₀/2 and F₀
- (B) E₀ and 2F₀
- (C) E₀/2 and F₀/2
- (D) E₀/4 and F₀/2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** E = kQ/r². Doubling Q doubles E; doubling r divides E by 4. So E = 2/4 × E₀ = E₀/2. The force is F = (2q)(E₀/2) = qE₀ = F₀.

- (B) treats E as ∝ 1/r. In fact E ∝ 1/r².
- (C) has the correct field but forgets that the force is proportional to the test charge, which doubled.
- (D) forgets that Q was doubled. Its force, 2q × E₀/4 = F₀/2, follows correctly from that wrong field.
</details>

## Question 3 (multiple choice · core)

Two spheres of the same radius R each carry a net charge +Q and are far apart. Sphere A is solid metal in electrostatic equilibrium. Sphere B is a solid insulator with its charge spread uniformly through its volume. How do the field magnitudes compare at a distance R/2 from each centre and at a distance 2R from each centre?

- (A) At R/2: zero for A, non-zero for B. At 2R: equal.
- (B) At R/2: zero for both. At 2R: equal.
- (C) At R/2: zero for A, non-zero for B. At 2R: larger for A, because its charge is on the surface, closer to the point.
- (D) At R/2: non-zero for A, zero for B. At 2R: equal.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** In equilibrium, A's excess charge sits on its surface and E = 0 inside the metal. B's charge is spread through its volume, so the field at R/2 is not zero. Outside, both distributions are spherically symmetric with net charge +Q, so each acts like a point charge at its centre: both fields are kQ/(4R²).

- (B) applies the conductor result to an insulator. An insulator can have a field inside.
- (C) gets the inside right, but outside only the net charge and the symmetry matter.
- (D) reverses the two materials.
</details>

## Question 4 (calculation · core)

Two charges, each +6.0 nC, are fixed at (−0.20 m, 0) and (+0.20 m, 0). Point P is at (0, 0.15 m).

(a) Find the magnitude and direction of the net electric field at P.
(b) Find the force on an electron placed at P.
(c) The charge at (+0.20 m, 0) is replaced by −6.0 nC. Find the new net field at P.

<details>
<summary>Worked solution</summary>

1. Each charge is √(0.20² + 0.15²) = 0.25 m from P. Each field has magnitude E = (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ (0.25)² = 863 N/C.
2. (a) Each field points away from its charge. By symmetry the x-components cancel. The y-components are each 863 × (0.15/0.25) = 517.8 N/C and add: **E = 1.04 × 10³ N/C (1036 N/C) in the +y direction**.
3. (b) F = eE = (1.60 × 10⁻¹⁹)(1036) = **1.66 × 10⁻¹⁶ N in the −y direction**, opposite to E because the electron is negative.
4. (c) The right-hand field now points **towards** its charge, so the y-components cancel and the x-components add: each is 863 × (0.20/0.25) = 690.4 N/C. **E = 1.38 × 10³ N/C (1381 N/C) in the +x direction.**

Suggested mark points (4): 1 for 0.25 m and 863 N/C from each charge; 1 for cancelling x-components and 1036 N/C in +y; 1 for the force with its −y direction; 1 for 1381 N/C in +x in (c).

Common error: adding 863 + 863 = 1726 N/C in (a).
</details>

## Question 5 (calculation · core)

A charge q_A = +8.0 nC is fixed at x = 0 and a charge q_B = −2.0 nC is fixed at x = 0.30 m.

(a) Find the net field at the midpoint, x = 0.15 m.
(b) Find the position on the x-axis, other than at infinity, where the net field is zero.
(c) Explain why the field cannot be zero anywhere between the charges, or to the left of q_A.

<details>
<summary>Worked solution</summary>

1. (a) At the midpoint, E_A = (8.99 × 10⁹)(8.0 × 10⁻⁹) ÷ (0.15)² = 3196 N/C in +x (away from q_A). E_B = (8.99 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.15)² = 799 N/C, also in +x (towards q_B). Net: **4.0 × 10³ N/C (3996 N/C) in the +x direction**.
2. (b) The fields are opposite only outside the pair, and the point must be nearer the smaller charge: to the right of q_B. Set the magnitudes equal: k(8.0 nC)/x² = k(2.0 nC)/(x − 0.30)². Taking square roots: x/(x − 0.30) = 2, so **x = 0.60 m**.
3. Check: each field there has magnitude 200 N/C (199.8 N/C), in opposite directions.
4. (c) Between the charges, E_A and E_B both point right, so they cannot cancel. To the left of q_A, they are opposite, but every point there is closer to the larger charge, so E_A always wins.

Suggested mark points (4): 1 for both midpoint fields in +x and their sum; 1 for placing the zero point right of q_B, with a reason; 1 for x = 0.60 m; 1 for explaining both excluded regions.

Common error: solving the magnitude equation for 0 < x < 0.30 m, which gives x = 0.20 m. The magnitudes are equal there (1798 N/C each), but both fields point in +x, so E = 3.6 × 10³ N/C, not zero.
</details>

## Question 6 (constructed response · core)

A student wants to find the charge Q on a small metal sphere (radius 0.050 m) on an insulating stand. They have a probe (a tiny conducting ball on an insulating rod), a force sensor that holds the probe, a metre rule and a meter that measures the probe's charge.

(a) Describe a procedure the student could use. Include what to measure, how to keep the probe acting as a test charge, and one way to reduce error.
(b) With a probe charge of q₀ = +2.0 nC, the student records:

| r (m) | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 |
|---|---|---|---|---|---|
| F (N) | 5.45 × 10⁻⁵ | 2.36 × 10⁻⁵ | 1.36 × 10⁻⁵ | 8.5 × 10⁻⁶ | 6.1 × 10⁻⁶ |

Calculate E at each distance. Then state which quantities to plot to get a straight line, and plot the graph with labelled axes, units and a suitable scale.
(c) Use the slope of your best-fit line to find Q.
(d) The student repeats the reading at r = 0.10 m with q₀ = +1.0 nC and finds F = 2.74 × 10⁻⁵ N. What does this tell you?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At several distances along one line, measure r from the **centre** of the sphere to the probe, and the force F on the probe. Measure q₀ and calculate E = F/q₀. Keep q₀ much smaller than Q so the probe does not move charge on the metal sphere; check by repeating a reading with a smaller q₀. Keep other objects away, repeat readings and average them, and re-measure q₀ in case it leaks away.

**(b)** E = F/q₀ gives 27 250, 11 800, 6800, 4250 and 3050 N/C. Since E = kQ/r², plot **E against 1/r²** (100, 44.4, 25.0, 16.0 and 11.1 m⁻²) to get a straight line through the origin. The points lie close to such a line.

**(c)** The best-fit slope is about **271 N·m²/C** (for example, the line passes near 27 100 N/C at 100 m⁻²). Slope = kQ, so Q = 271 ÷ (8.99 × 10⁹) = **3.0 × 10⁻⁸ C (30 nC)**. Measuring r from the centre works because, outside a spherically symmetric sphere, the field is that of a point charge at the centre.

**(d)** E = (2.74 × 10⁻⁵ N) ÷ (1.0 × 10⁻⁹ C) = 2.74 × 10⁴ N/C. With 2.0 nC it was 2.725 × 10⁴ N/C, a difference of about 0.5%, which is within measurement error. Halving q₀ halved F but did not change E, so the 2.0 nC probe was small enough to act as a test charge.

| Point | What earns it |
|---|---|
| 1 | Measures F and r (from the centre) at several distances, and uses E = F/q₀ |
| 1 | A valid way to keep the probe a test charge (small q₀, checked by changing q₀) and one valid error-reduction step |
| 1 | Correct E values and the choice of E against 1/r² (or F against 1/r²), with a reason |
| 1 | Graph: labelled axes with units, sensible scale, points plotted, straight best-fit line |
| 1 | Slope from the line (not one data point) and Q ≈ 3.0 × 10⁻⁸ C |
| 1 | (d): F/q₀ unchanged, so the probe does not disturb the source |

Accept F against 1/r² (slope kQq₀ ≈ 5.4 × 10⁻⁷ N·m²). Accept Q from 2.9 × 10⁻⁸ C to 3.1 × 10⁻⁸ C.
</details>

## Question 7 (constructed response · stretch)

Three point charges lie on the y-axis: +q at (0, a), +q at (0, −a) and −2q at the origin, where q > 0.

(a) Explain, using symmetry, why the net field at any point (x, 0) on the positive x-axis has no y-component.
(b) Derive an expression for the net field E_x at (x, 0), with x > 0, in terms of k, q, a and x.
(c) Evaluate E_x at x = a, x = 2a and x = 10a, as multiples of kq/a², and state the direction of the field.
(d) For a single point charge, E(10a)/E(2a) would be (2/10)² = 0.04. Use your values from (c) to compare, and explain the difference physically.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The two +q charges are mirror images in the x-axis, equally far from (x, 0). Their fields are equal in size, one tilted up and one down, so the y-components cancel. The −2q charge is on the x-axis, so its field there is along the axis.

**(b)** Each +q is √(x² + a²) away, so each field has magnitude kq/(x² + a²). Its x-component is that times x/√(x² + a²). The −2q field points towards the origin, in −x, with size 2kq/x². So:

**E_x = 2kqx/(x² + a²)^(3/2) − 2kq/x²**

**(c)** In units of kq/a²: at x = a, E_x = 2/2^(3/2) − 2 = **−1.29**; at x = 2a, E_x = 4/5^(3/2) − 1/2 = **−0.142**; at x = 10a, E_x = 20/101^(3/2) − 0.02 = **−2.96 × 10⁻⁴**. All are negative, so the field points in **−x, towards the origin**.

**(d)** E(10a)/E(2a) = 2.96 × 10⁻⁴ ÷ 0.142 = **0.0021**, about twenty times smaller than 0.04. The net charge is +q + q − 2q = 0, so far away the fields of the +q pair and the −2q charge nearly cancel. The small difference left falls off much faster than 1/x² (for x ≫ a, as 1/x⁴).

| Point | What earns it |
|---|---|
| 1 | Symmetry argument for cancelling y-components, with the field of −2q along the axis |
| 1 | Correct x-component of each +q field, kqx/(x² + a²)^(3/2) |
| 1 | Correct −2kq/x² term with the right sign, giving the full expression |
| 1 | All three values correct, with the direction (towards the origin) |
| 1 | Ratio about 0.002 compared with 0.04 |
| 1 | Physical reason: zero net charge, so the far field falls faster than a point charge's |

Carry forward an error in (b) once. The 1/x⁴ statement is background, not needed for credit.
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "What an electric field is" and "The field of a point charge" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-study-guide/).
- **Q3 wrong:** revisit "Fields of charged conductors and insulators".
- **Q4, Q5 or Q7 wrong:** work through Worked example 2 again and the five-step superposition method.
- **Q6 incomplete:** see "Measuring a field" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-checklist/).
