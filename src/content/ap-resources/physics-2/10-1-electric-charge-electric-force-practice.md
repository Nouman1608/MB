---
resourceId: "mb-ap-phys2-10.1-practice"
title: "Electric Charge and Electric Force: Practice Questions (Physics 2 10.1)"
description: "Seven original Marlbridge practice questions on the elementary charge, Coulomb's law, factors of change, net force from several charges, gravity versus electric force and permittivity."
course: "physics-2"
unit: 10
topics: ["10.1"]
resourceType: "practice-questions"
prerequisites:
  - "Coulomb's law and the rules for the direction of the electric force"
prerequisiteResources: ["mb-ap-phys2-10.1-study-guide"]
learningObjectives:
  - "Apply Coulomb's law and factors of change to point charges"
  - "Decide the direction of a net electric force from several charges"
  - "Derive a symbolic expression for a point where the net force is zero"
  - "Analyse invented force and distance data to test the inverse-square law"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "k = 9.0 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C, G = 6.67 × 10⁻¹¹ N·m²/kg², g = 9.8 m/s². Give answers to 2 or 3 significant figures to match the data"
related: ["mb-ap-phys2-10.1-study-guide", "mb-ap-phys2-10.1-revision-notes", "mb-ap-phys2-10.1-checklist"]
next: "mb-ap-phys2-10.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2", "exam-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Use |q₁q₂| for the size of a force and a diagram for its direction."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data for every question: k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C; G = 6.67 × 10⁻¹¹ N·m²/kg²; g = 9.8 m/s². Treat all charged objects as point charges unless told otherwise. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Two point charges exert an electric force of magnitude F on each other. One charge is doubled and the distance between them is tripled. What is the new magnitude of the force?

- (A) (2/3)F
- (B) (2/9)F
- (C) 6F
- (D) (4/9)F

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** F ∝ |q₁q₂|/r². Doubling one charge multiplies F by 2. Tripling r multiplies F by 1/3² = 1/9. Together: 2 × 1/9 = 2/9.

- (A) treats the force as depending on 1/r instead of 1/r².
- (C) multiplies by the distance factor instead of dividing (2 × 3 = 6).
- (D) doubles both charges, but only one was changed.
</details>

## Question 2 (multiple choice · foundation)

A student measures the charges on four small oil drops. Which value **cannot** be the net charge of a drop?

- (A) +3.2 × 10⁻¹⁹ C
- (B) +4.8 × 10⁻¹⁹ C
- (C) −2.4 × 10⁻¹⁹ C
- (D) −8.0 × 10⁻¹⁹ C

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Every net charge is a whole-number multiple of e. Dividing by e = 1.60 × 10⁻¹⁹ C gives: (A) +2, (B) +3, (C) −1.5, (D) −5. Only (C) is not a whole number, so it is impossible.

- (A) is +2e: a drop missing 2 electrons.
- (B) is +3e: a drop missing 3 electrons.
- (D) is −5e: a drop with 5 extra electrons. A negative sign is fine; it just means extra electrons.
</details>

## Question 3 (multiple choice · core)

A charge +q is fixed at x = 0 and a charge −q is fixed at x = d. A small positive test charge is placed at x = 2d. What is the direction of the net electric force on the test charge?

- (A) In the −x direction, because the attraction to −q is stronger than the repulsion from +q
- (B) In the +x direction, because the repulsion from +q is stronger than the attraction to −q
- (C) There is no net force, because +q and −q have equal magnitudes
- (D) In the −x direction, because both forces point toward the origin

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The test charge is d from −q and 2d from +q. Attraction to −q points in the −x direction with size kq q₀/d². Repulsion from +q points in the +x direction with size kq q₀/(2d)² = (1/4)kq q₀/d². The attraction is 4 times larger, so the net force is (3/4)kq q₀/d² in the −x direction.

- (B) gets the directions right but forgets that the nearer charge gives the larger force.
- (C) would be true only if the test charge were the same distance from both charges, which no point on this line beyond the charges is.
- (D) has the right answer for the wrong reason: the repulsion from +q points away from the origin.
</details>

## Question 4 (multiple choice · core)

Material X has a larger electric permittivity than material Y. Which statement best explains the difference?

- (A) X contains more free electrons that can flow through it as a current
- (B) The electrons in X can change their arrangement more easily, so X polarizes more in an electric field
- (C) X has more net positive charge than Y
- (D) X is denser than Y, so its gravitational attraction to nearby charges is larger

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Permittivity measures how strongly a material polarizes when it is in an electric field, and that depends on how easily its electrons can shift. Both materials remain neutral overall.

- (A) describes being a conductor. Permittivity is about charges shifting within the material, not flowing through it; insulators can have large permittivities.
- (C) confuses polarization with net charge. Polarization separates charge but keeps the material neutral.
- (D) mixes up gravitational and electric effects. Gravity plays no part in permittivity.
</details>

## Question 5 (calculation · core)

Two identical small spheres each have mass 0.50 g and charge −3.2 × 10⁻⁹ C. Their centres are 4.0 cm apart.

(a) How many extra electrons does each sphere carry?
(b) Calculate the electric force between the spheres and state whether it is attractive or repulsive.
(c) Calculate the gravitational force between the spheres and the ratio F_E/F_G.
(d) The Moon has far more mass than these spheres, yet the electric force between Earth and the Moon is negligible. Explain why.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (a) N = |q|/e = 3.2 × 10⁻⁹ C ÷ 1.60 × 10⁻¹⁹ C = **2.0 × 10¹⁰ electrons**.
2. (b) Convert units: r = 0.040 m. F_E = k q²/r² = (9.0 × 10⁹)(3.2 × 10⁻⁹)² ÷ (0.040)² = **5.8 × 10⁻⁵ N** (5.76 × 10⁻⁵ N). Both charges are negative, so the force is **repulsive**.
3. (c) m = 0.50 × 10⁻³ kg. F_G = G m²/r² = (6.67 × 10⁻¹¹)(5.0 × 10⁻⁴)² ÷ (0.040)² = **1.0 × 10⁻¹⁴ N**. Ratio F_E/F_G = 5.76 × 10⁻⁵ ÷ 1.04 × 10⁻¹⁴ ≈ **5.5 × 10⁹**.
4. (d) Earth and the Moon are almost exactly electrically neutral: their positive and negative charges nearly cancel, so the net electric force between them is close to zero. Mass has only one sign, so gravitational attractions add up and never cancel.

| Point | What earns it |
|---|---|
| 1 | (a) 2.0 × 10¹⁰ electrons |
| 1 | (b) 5.8 × 10⁻⁵ N with r converted to metres |
| 1 | (b) Repulsive, because both charges have the same sign |
| 1 | (c) F_G ≈ 1.0 × 10⁻¹⁴ N and a ratio of about 5.5 × 10⁹ |
| 1 | (d) Large bodies are nearly neutral, so electric forces cancel; gravity is always attractive and does not cancel |

Do not award (d) for "gravity is stronger at large distances": both forces fall off as 1/r². Common error in (b): using r = 4.0 in place of 0.040 m, which gives an answer 10⁴ times too small.
</details>

## Question 6 (constructed response · core)

A charge +4Q is fixed at x = 0 and a charge +Q is fixed at x = d.

(a) Explain why a third charge placed between the two can feel zero net electric force, but a third charge placed anywhere on the x axis outside the pair cannot.
(b) Derive an expression, in terms of d, for the position x where the net electric force on a third charge q is zero.
(c) Does your answer to (b) depend on the sign or size of q? Justify.
(d) For d = 0.60 m, give the position numerically.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Between the charges, a third charge is pushed (or pulled) by the two charges in **opposite** directions, so the forces can cancel. Outside the pair, both forces point the same way along the axis (both away from the pair for positive q, both toward it for negative q), so they can never cancel. Off the axis, the two forces are not along the same line, so they cannot cancel either.

**(b)** At position x (0 < x < d), the two magnitudes must be equal:

k(4Q)|q|/x² = kQ|q|/(d − x)²

Cancel k, Q and |q|: 4/x² = 1/(d − x)². Both sides are positive, so take square roots: 2/x = 1/(d − x), giving 2(d − x) = x, so **x = 2d/3**.

(Squaring and solving the quadratic also gives x = 2d. Reject it: that point is outside the pair, where (a) showed the forces cannot cancel.)

**(c)** No. k, Q and |q| cancelled, so the position depends only on the ratio of the fixed charges and on d. If q is negative, both forces reverse, but they still cancel at the same point.

**(d)** x = 2(0.60 m)/3 = **0.40 m** from the +4Q charge (0.20 m from +Q). Check: 4/0.40² = 25 m⁻² and 1/0.20² = 25 m⁻².

| Point | What earns it |
|---|---|
| 1 | (a) Between the charges the forces are opposite, so they can cancel |
| 1 | (a) Outside the pair the forces are in the same direction, so they cannot cancel |
| 1 | (b) Sets the two Coulomb magnitudes equal with the correct distances x and d − x |
| 1 | (b) Solves to x = 2d/3, rejecting x = 2d with a reason (or taking the positive square root directly) |
| 1 | (c) Independent of q, because |q| cancels from both sides |
| 1 | (d) 0.40 m from the +4Q charge |

Reasonableness check that also earns credit in (b): the zero-force point must be nearer the **smaller** charge, and 2d/3 from +4Q is nearer +Q.
</details>

## Question 7 (constructed response · stretch)

A student hangs a small charged metal sphere from an insulating thread. A second identical sphere, with the same charge, is held on an insulating rod and placed at different distances r (centre to centre). A force sensor records the electric force F between them. The invented data are below.

| r (m) | 0.050 | 0.100 | 0.150 | 0.200 |
|---|---|---|---|---|
| F (N) | 8.8 × 10⁻³ | 2.3 × 10⁻³ | 0.98 × 10⁻³ | 0.57 × 10⁻³ |

(a) Choose quantities to plot so that the graph should be a straight line if Coulomb's law holds. Give the theoretical slope in terms of k and the charge q on each sphere.
(b) Calculate the values you would plot and use them to find the slope.
(c) Use your slope to find q.
(d) The spheres are each 2.0 cm across. Suggest why the point-charge model is least reliable for the first data point, and predict whether the measured force there is likely to be larger or smaller than Coulomb's law predicts for like charges.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Plot F (vertical) against 1/r² (horizontal). Coulomb's law gives F = kq²(1/r²), a straight line through the origin with **slope = kq²**.

**(b)** 1/r² = 400, 100, 44.4 and 25.0 m⁻². A best-fit line through the four points has slope ≈ 2.2 × 10⁻⁵ N·m² (a least-squares fit gives 2.19 × 10⁻⁵ N·m²; a line forced through the origin gives 2.21 × 10⁻⁵ N·m²). Using the first and last points: (8.8 × 10⁻³ − 0.57 × 10⁻³) ÷ (400 − 25) = 2.19 × 10⁻⁵ N·m².

**(c)** kq² = 2.2 × 10⁻⁵ N·m², so q = √(2.2 × 10⁻⁵ ÷ 9.0 × 10⁹) = **4.9 × 10⁻⁸ C** (49 nC). The data cannot show the sign of q; both spheres have the same sign because they repel.

**(d)** At r = 0.050 m the gap between the sphere surfaces is only 3.0 cm, comparable to the sphere size, so the charges are not "points". The like charges on each metal sphere repel each other toward the far sides of the spheres, which increases their effective separation. So the measured force is likely to be **smaller** than a point-charge calculation predicts.

| Point | What earns it |
|---|---|
| 1 | (a) Plots F against 1/r² (or an equivalent linearisation, such as log F against log r with slope −2) |
| 1 | (a) Slope identified as kq² |
| 1 | (b) Correct 1/r² values |
| 1 | (b) Slope between 2.1 × 10⁻⁵ and 2.3 × 10⁻⁵ N·m², from a line of best fit or two well-separated points |
| 1 | (c) q ≈ 4.9 × 10⁻⁸ C, consistent with their slope |
| 1 | (d) Point-charge model fails because the size is comparable to the separation, and charge redistributes away from the other sphere, so F is smaller |

Accept a log–log plot in (a) if the student states the expected slope of −2 and uses the intercept to find q. Carry forward an error in the slope into (c) once.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Predicting changes" in the [study guide](/advanced-course-resources/physics-2/10-1-electric-charge-electric-force-study-guide/). Write F ∝ |q₁q₂|/r² before every factor-of-change question.
- **Q2 wrong:** revisit "Charge: a property of matter" and divide by e.
- **Q4 wrong:** re-read "Permittivity and polarization".
- **Q5 or Q6 incomplete:** work through Worked examples 1 and 2 again, then redo the question with a labelled diagram.
- **Q7 incomplete:** practise linearising: if y ∝ 1/x², plot y against 1/x².

Then tick off the [topic checklist](/advanced-course-resources/physics-2/10-1-electric-charge-electric-force-checklist/).
