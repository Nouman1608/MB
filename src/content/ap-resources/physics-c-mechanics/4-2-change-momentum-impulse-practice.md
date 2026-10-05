---
resourceId: "mb-ap-physcm-4.2-practice"
title: "Change in Momentum and Impulse: Practice Questions (Physics C: Mechanics 4.2)"
description: "Seven original Marlbridge calculus-based practice questions on impulse as an integral, force–time areas, momentum–time slopes, the impulse–momentum theorem, sensor data and changing mass."
course: "physics-c-mechanics"
unit: 4
topics: ["4.2"]
resourceType: "practice-questions"
prerequisites:
  - "Integrating polynomials and linear momentum (Topic 4.1)"
prerequisiteResources: ["mb-ap-physcm-4.2-study-guide"]
learningObjectives:
  - "Calculate impulse from a constant force, a force function and sensor data"
  - "Find the net force from the slope of a momentum–time graph"
  - "Apply the impulse–momentum theorem with signed values and initial conditions"
  - "Derive symbolic results from F_net = dp/dt and compare scenarios"
  - "Use F = v dm/dt for a system gaining mass at constant velocity"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-4.2-study-guide", "mb-ap-physcm-4.2-revision-notes", "mb-ap-physcm-4.2-checklist"]
next: "mb-ap-physcm-4.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. In force functions, F is in N and t in s."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, F is in N, p in kg·m/s, v in m/s and t in s, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x in the direction of the push**. A 0.60 kg cart is at rest on a level, frictionless track. A constant net force of 12 N in +x acts on it for 0.25 s. What is the cart's speed afterwards?

- (A) 1.8 m/s
- (B) 3.0 m/s
- (C) 5.0 m/s
- (D) 20 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** J = FΔt = 12 × 0.25 = 3.0 N·s = Δp. So v = 3.0 ÷ 0.60 = 5.0 m/s.

- (A) multiplies the impulse by the mass (3.0 × 0.60) instead of dividing.
- (B) is the impulse, 3.0 N·s, reported as a speed. The mass is missing.
- (D) is the acceleration, F/m = 20 m/s², given the wrong unit. The time is missing.
</details>

## Question 2 (multiple choice · core)

Take **+x in the direction of the force**. The net force on an object is F_x(t) = 30t² from t = 0 to t = 2.0 s. What impulse does it deliver?

- (A) 60 N·s
- (B) 80 N·s
- (C) 120 N·s
- (D) 240 N·s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** J = ∫₀²·⁰ 30t² dt = [10t³] from 0 to 2.0 = 80 N·s.

- (A) uses the force at the middle time, F(1.0) = 30 N, as the average: 30 × 2.0. That works only for a force that changes linearly.
- (C) treats the graph as a straight line from 0 to 120 N and takes the triangle area, ½ × 120 × 2.0. The curve bends, so the area is smaller.
- (D) uses the final force for the whole time: 120 × 2.0.
</details>

## Question 3 (multiple choice · core)

Take **+x to the right**. A cart's momentum–time graph is a straight line from p_x = +6.0 kg·m/s at t = 0 to p_x = −2.0 kg·m/s at t = 4.0 s. What is the net force on the cart?

- (A) −2.0 N
- (B) +2.0 N
- (C) −1.0 N
- (D) −0.50 N

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Net force = slope of the p–t graph = (−2.0 − 6.0) ÷ 4.0 = −2.0 N. The force points left the whole time, first slowing the cart and then speeding it up to the left.

- (B) has the right size but the wrong sign. Momentum is decreasing, so the slope is negative.
- (C) subtracts the sizes, 6.0 − 2.0 = 4.0, and ignores that the final momentum is negative.
- (D) inverts the slope, computing Δt/Δp = 4.0 ÷ (−8.0), which has the unit s/(kg·m/s), not newtons.
</details>

## Question 4 (calculation · core)

Take **+x along a level, frictionless track**. A 0.80 kg cart moves at +1.5 m/s at t = 0. From t = 0 to t = 2.0 s the net force on it is F_x(t) = 6.0 − 3.0t².

(a) Find the impulse on the cart from t = 0 to t = 2.0 s.
(b) Find the cart's velocity at t = 2.0 s.
(c) Find the cart's greatest velocity in this interval, and when it occurs.

<details>
<summary>Worked solution</summary>

1. **(a)** J = ∫₀²·⁰ (6.0 − 3.0t²) dt = [6.0t − t³] from 0 to 2.0 = 12 − 8.0 = **+4.0 N·s**.
2. **(b)** p_f = p_i + J = 0.80 × 1.5 + 4.0 = 5.2 kg·m/s, so v = 5.2 ÷ 0.80 = **+6.5 m/s**.
3. **(c)** The slope of the p–t graph is F_x. Momentum is greatest where F_x = 0 and changes from positive to negative: 6.0 − 3.0t² = 0 at t = √2.0 ≈ **1.4 s**. Impulse to then: 6.0√2 − (√2)³ = 4√2 ≈ 5.66 N·s. So p = 1.2 + 5.66 = 6.86 kg·m/s and v_max ≈ **8.6 m/s**.

Suggested mark points (4): 1 for integrating F correctly; 1 for adding the initial momentum in (b); 1 for setting F = 0 to locate the maximum; 1 for v_max.

Common error: using F(0) = 6.0 N as constant for 2.0 s gives 16.5 m/s. The force falls and then reverses, so this is far too large.
</details>

## Question 5 (constructed response · core)

Take **+x in the direction of the push**. A cart of mass m starts from rest on a level, frictionless track. From t = 0 to t = T a motor pushes it with a net force F_x(t) = F₀(1 − t/T), where F₀ is a positive constant. After t = T the force is zero.

(a) Derive an expression for the cart's velocity v_x(t) for 0 ≤ t ≤ T.
(b) Show that the cart's final speed is F₀T/(2m).
(c) A second identical cart starts from rest and receives a constant force F₀ for the same time T. Find the ratio of the first cart's final speed to the second cart's.
(d) Sketch the first cart's momentum against time from t = 0 to t = 2T. Describe the shape and explain it using the slope.
(e) Evaluate your answer to (b) for F₀ = 24 N, T = 0.50 s and m = 2.0 kg.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** m dv_x/dt = F₀(1 − t/T). Integrate from 0 (v = 0) to t: m v_x = F₀(t − t²/(2T)), so **v_x(t) = (F₀/m)(t − t²/(2T))**.

**(b)** At t = T: v_x = (F₀/m)(T − T/2) = **F₀T/(2m)**. (Equivalently, the area under the F–t graph is a triangle of area ½F₀T.)

**(c)** Constant F₀ for time T gives v = F₀T/m. Ratio = (F₀T/2m) ÷ (F₀T/m) = **½**.

**(d)** From 0 to T, p_x rises from 0 to F₀T/2 along a curve that is **steepest at t = 0** (slope F₀) and **flattens to zero slope at t = T** (concave down). From T to 2T it is a horizontal line at F₀T/2. The slope of a p–t graph is the net force, which falls steadily to zero and then stays zero.

**(e)** v = 24 × 0.50 ÷ (2 × 2.0) = **3.0 m/s**.

| Point | What earns it |
|---|---|
| 1 | (a) Integrates the force with the initial condition v = 0 at t = 0 |
| 1 | (b) Evaluates at t = T to reach F₀T/(2m) |
| 1 | (c) Ratio ½, from F₀T/m for the constant force |
| 1 | (d) Sketch: concave-down rise to F₀T/2, zero slope at T, horizontal after T |
| 1 | (d) Explanation linking the slope to the net force |
| 1 | (e) 3.0 m/s |

**Alternative method for (b) and (c).** Finding both impulses as areas under the F–t graphs (a triangle and a rectangle) earns both points if each area is stated.
</details>

## Question 6 (constructed response · experimental)

Take **+x towards a fixed force sensor** on a level, low-friction track. A 0.50 kg cart with a spring bumper rolls into the sensor. A motion sensor shows its velocity is +0.80 m/s before the collision and −0.74 m/s after. The force sensor records the force on the cart:

| t (s) | 0 | 0.020 | 0.040 | 0.060 | 0.080 | 0.100 | 0.120 |
|---|---|---|---|---|---|---|---|
| F_x (N) | 0 | −4.0 | −9.0 | −12.0 | −9.5 | −4.5 | 0 |

(a) Use the force data to estimate the impulse on the cart.
(b) Calculate the cart's change in momentum from the velocity data.
(c) Do these data support the impulse–momentum theorem? Justify your answer quantitatively.
(d) Find the average force on the cart and compare it with the peak force.
(e) Sketch the cart's momentum against time from just before to just after the collision. Label the start and end values and the time when the momentum changes fastest.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use the trapezium rule with strips of 0.020 s: J ≈ 0.020 × [½(0 + 0) + (−4.0 − 9.0 − 12.0 − 9.5 − 4.5)] = 0.020 × (−39.0) = **−0.78 N·s**.

**(b)** Δp = 0.50 × (−0.74 − 0.80) = **−0.77 kg·m/s**.

**(c)** **Yes.** The two values agree to within 0.01 N·s, about 1.3%. That is smaller than the uncertainty you would expect from estimating the area with only seven readings, plus a little friction during the collision. Both are negative, so the impulse points the way the force acts (away from the sensor), as the theorem requires.

**(d)** F_avg = J ÷ Δt = −0.78 ÷ 0.120 = **−6.5 N**, about half the size of the peak, −12 N.

**(e)** p_x starts at +0.40 kg·m/s (flat before contact), falls slowly at first, **falls fastest at t = 0.060 s** (where |F| is largest), passes through zero at about 0.06 s, levels off and ends flat at about **−0.37 kg·m/s** (or −0.38 from the force data).

| Point | What earns it |
|---|---|
| 1 | (a) Area method applied correctly, −0.78 N·s (accept −0.76 to −0.80) |
| 1 | (b) −0.77 kg·m/s with signed velocities |
| 1 | (c) Compares the two values numerically and concludes they agree within reasonable uncertainty |
| 1 | (d) −6.5 N and the comparison with the −12 N peak |
| 1 | (e) Sketch with flat ends at +0.40 and about −0.37, steepest at 0.060 s |

**Alternative method for (a).** Counting squares on a plotted graph, or fitting a smooth curve and integrating, earns the point if the result is within the accepted range.
</details>

## Question 7 (constructed response · stretch)

Take **+x in the direction of motion**. An open cart rolls on a level, frictionless track while rain falls vertically into it, adding mass at a steady 0.040 kg/s. A student pushes horizontally to keep the cart moving at a constant 1.5 m/s.

(a) Starting from F_net = dp/dt, show that the horizontal push must be F = v dm/dt, and state the assumption about the rain that this needs.
(b) Calculate the push.
(c) By what factor would the push change if both the rain rate and the cart's speed were doubled?
(d) At one moment the cart and the water in it have a total mass of 2.0 kg. The student then stops pushing. Explain, using F_net = dp/dt, why the cart slows down, and find its speed 10 s later.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Take the system as the cart plus the water in it. F_net,x = dp_x/dt = d(mv)/dt = m dv/dt + v dm/dt. The speed is constant, so dv/dt = 0 and **F = v dm/dt**. This assumes the raindrops have **no horizontal momentum** before they land in the cart (they fall vertically).

**(b)** F = 1.5 × 0.040 = **0.060 N** in +x.

**(c)** F = v dm/dt, so doubling both gives **× 4** (0.24 N).

**(d)** With no push and no friction, there is no net horizontal force, so the horizontal momentum is constant: p_x = 2.0 × 1.5 = 3.0 kg·m/s. The mass keeps rising, so v = p_x/m must fall. After 10 s, m = 2.0 + 0.040 × 10 = 2.4 kg and v = 3.0 ÷ 2.4 ≈ **1.3 m/s** (1.25 m/s).

| Point | What earns it |
|---|---|
| 1 | (a) Product rule on d(mv)/dt with dv/dt = 0 |
| 1 | (a) States that the rain arrives with no horizontal momentum |
| 1 | (b) 0.060 N |
| 1 | (c) Factor of 4, from the product v × dm/dt |
| 1 | (d) Constant horizontal momentum because F_net,x = 0, so v falls as m rises |
| 1 | (d) 1.25 m/s (accept 1.2 or 1.3) |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Impulse" in the [study guide](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-study-guide/). Integrate the force; do not use a single value of it unless it is constant.
- **Q3 or Q5(d) wrong:** revisit "Two graph rules" and Figure 1. Slope of p–t is the net force.
- **Q4 or Q6 incomplete:** work through Worked example 1 again. Add the initial momentum, and keep signs on every velocity.
- **Q7 incomplete:** go through "Newton's second law as a special case" and Worked example 3.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/4-2-change-momentum-impulse-checklist/).
