---
resourceId: "mb-ap-physcm-u3-diagnostic"
title: "Work, Energy, and Power: Unit Diagnostic (Physics C: Mechanics Unit 3)"
description: "A 30-minute check of calculus-based work and energy: ten original questions on kinetic energy, work integrals, potential energy, energy conservation and power, each linked to a topic guide."
course: "physics-c-mechanics"
unit: 3
topics: []
resourceType: "unit-diagnostic"
prerequisites:
  - "You have studied some or all of Topics 3.1 to 3.5"
  - "Differentiating and integrating polynomials and simple exponentials"
learningObjectives:
  - "Find out which Unit 3 topics you can already handle and which ones to revisit"
  - "Test kinetic energy in different reference frames and work done by forces that change with position"
  - "Test the link between a potential energy function, the force it gives and the choice of zero"
  - "Test energy conservation with springs, gravity and a potential energy graph"
  - "Test average and instantaneous power, including power against a resistive force"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; a calculator for arithmetic, square roots and exponentials. We use g = 9.8 m/s², the value on the course equation table. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-u3-review", "mb-ap-physcm-3.2-study-guide", "mb-ap-physcm-3.3-study-guide", "mb-ap-physcm-3.4-study-guide", "mb-ap-physcm-3.5-study-guide"]
next: "mb-ap-physcm-u3-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Ten short questions, one or more for every Unit 3 topic. Each answer links to the guide for that topic."
  - "It finds gaps. It is not a past exam, it is not calibrated and it gives no predicted score."
  - "Work without notes for about 30 minutes, then mark yourself and use the table at the end."
  - "Questions 1 to 7 are multiple choice; Questions 8 to 10 need short written working."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic helps you decide which Unit 3 (Work, Energy, and Power) topics to revisit. It covers every topic, with extra questions on Topics 3.2 to 3.4. These are **original Marlbridge practice questions**, not past exam questions. The set is not calibrated against real exam results, so it **does not give a predicted score**. Treat each wrong answer as a pointer to one topic, not as a grade.

**How to sit it.** Allow about 30 minutes without notes. Use a calculator for arithmetic, roots and exponentials, but do the calculus by hand. Use g = 9.8 m/s². Quantities are in SI units; each coefficient carries the unit that makes its term correct.

## Question 1 (multiple choice · 3.1)

Take **+x forward**. A 60 kg traveller walks forward at 1.5 m/s **relative to a moving walkway**. The walkway moves forward at 1.0 m/s relative to the airport floor. What is the traveller's kinetic energy measured by someone standing on the floor?

- (A) 7.5 J
- (B) 68 J
- (C) 98 J
- (D) 190 J

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Relative to the floor, v = 1.5 + 1.0 = 2.5 m/s, so K = ½(60)(2.5)² = 187.5 J ≈ 190 J.

- (A) subtracts the speeds. Both velocities point forward, so they add.
- (B) is K in the walkway's frame, 67.5 J. K depends on the observer.
- (C) adds two kinetic energies, 67.5 J + 30 J. Add the **velocities**, then square.

**If you missed this:** read "Kinetic energy depends on the observer" in the [Topic 3.1 study guide](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/).
</details>

## Question 2 (multiple choice · 3.2)

Take **+x along a level floor**. A cable pulls a crate with a horizontal force F_x = 2.0 + 3.0x² as the crate moves from x = 0 to x = 2.0 m. How much work does the cable do?

- (A) 4.0 J
- (B) 10 J
- (C) 12 J
- (D) 16 J

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Integrate: W = ∫₀² (2.0 + 3.0x²) dx = [2.0x + x³]₀² = 4.0 + 8.0 = 12 J.

- (A) uses the starting force, 2.0 N, for the whole distance.
- (B) uses the midpoint force, 5.0 N. That works only for a **linear** F(x).
- (D) uses the mean of the end forces, 8.0 N. Also linear-only; this graph curves upward.

**If you missed this:** read "Variable forces: integrate along the path" in the [Topic 3.2 study guide](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/).
</details>

## Question 3 (multiple choice · 3.2)

A crate sits on the flat bed of a truck. The truck speeds up along a level road, and the crate does **not** slip. In the road's frame, which force does positive work on the crate?

- (A) No force, because static friction cannot do work when nothing slides
- (B) The static friction force from the truck bed
- (C) The normal force from the truck bed
- (D) None, because the crate is at rest on the truck

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The crate speeds up, so the net work on it is positive. The only horizontal force is static friction, forward, and in the road's frame its point of application moves forward: W > 0.

- (A) "No sliding" is not "no displacement". Crate and truck move together relative to the road.
- (C) The normal force is perpendicular to the displacement.
- (D) uses the truck's frame. Work, like kinetic energy, depends on the frame.

**If you missed this:** read "The dot product and constant forces" and "Net work and the work–energy theorem" in the [Topic 3.2 study guide](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/).
</details>

## Question 4 (multiple choice · 3.3)

A 0.50 kg ball falls from a shelf 2.0 m above the floor. Student P chooses U_g = 0 at the floor. Student Q chooses U_g = 0 at the shelf. Which statement is correct?

- (A) P: U_g = +9.8 J at the shelf. Q: U_g = −9.8 J at the floor. Both: ΔU_g = −9.8 J.
- (B) They find different ΔU_g but the same speed at the floor.
- (C) For Q, U_g = 0 at the shelf, so the ball cannot speed up.
- (D) Both must have U_g = 0 at the floor, where the ball stops.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** mgh = 0.50 × 9.8 × 2.0 = 9.8 J. The zero is a free choice, so the **values** of U_g differ, but every **change** is the same, ΔU_g = −9.8 J, and so is the speed at the floor, 6.3 m/s.

- (B) Only values of U depend on the zero; changes, forces and speeds do not.
- (C) What matters is ΔU, not the starting value. U_g can fall from 0 to −9.8 J.
- (D) The observer chooses the zero; the motion does not set it.

**If you missed this:** read "Defining U with an integral" (choosing the zero) in the [Topic 3.3 study guide](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/).
</details>

## Question 5 (multiple choice · 3.3)

A planet has mass M and radius R. A probe of mass m is moved from the surface to a distance 3R from the planet's centre. What is the change in the gravitational potential energy of the probe–planet system?

- (A) −2GMm/(3R)
- (B) +2GMm/(3R)
- (C) +8GMm/(9R)
- (D) +2GMm/R

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With U_g = −GMm/r: ΔU_g = −GMm/(3R) − (−GMm/R) = GMm(1 − ⅓)/R = +2GMm/(3R). Positive: the probe moves away against the attraction.

- (A) has the sign reversed. U_g rises towards zero as r grows.
- (C) uses 1/r², as for force. Potential energy goes as 1/r.
- (D) uses mgΔy with surface g over a height 2R. The field weakens with height, so this overestimates.

**If you missed this:** read "Gravitational potential energy" and Worked example 2 in the [Topic 3.3 study guide](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/).
</details>

## Question 6 (multiple choice · 3.4)

A vertical toy launcher has an ideal spring with k = 500 N/m. A 0.20 kg ball sits on top of it, and the spring is compressed by 0.10 m. When released, the ball leaves the spring at its relaxed length. Ignoring air resistance, how high does the ball rise above its **release point**?

- (A) 0.64 m
- (B) 1.2 m
- (C) 1.3 m
- (D) 2.6 m

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** System: ball + spring + Earth, with no external work or friction. K = 0 at release and at the top, so ½kx² = mgh. ½(500)(0.10)² = 2.5 J, so h = 2.5 ÷ (0.20 × 9.8) = 1.3 m (1.28 m).

- (A) drops the ½ from K only (½kx² = mv², then h = v²/2g).
- (B) is the height above the relaxed spring, not above the release point.
- (D) drops the ½ from the spring energy.

**If you missed this:** read "Mechanical energy and the energy rule" and "Comparing scenarios" in the [Topic 3.4 study guide](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/).
</details>

## Question 7 (multiple choice · 3.5)

A constant net force speeds a 2.0 kg cart up from rest to 6.0 m/s in 3.0 s. What is the power of the net force at t = 3.0 s, and the average power over the 3.0 s?

- (A) 24 W at 3.0 s; 12 W average
- (B) 24 W at 3.0 s; 24 W average
- (C) 12 W at 3.0 s; 12 W average
- (D) 12 W at 3.0 s; 24 W average

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** a = 6.0 ÷ 3.0 = 2.0 m/s², so F = 4.0 N. At 3.0 s, P = Fv = 4.0 × 6.0 = 24 W. Average: P_avg = ΔK/Δt = ½(2.0)(6.0)² ÷ 3.0 = 36 ÷ 3.0 = 12 W. With a constant force from rest, P rises linearly, so the average is half the final value.

- (B) treats the final power as the average, but Fv grows during the push.
- (C) uses the average for the instant too.
- (D) swaps the two values.

**If you missed this:** read "Average power" and "Instantaneous power: P = dW/dt = F·v" in the [Topic 3.5 study guide](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/).
</details>

## Question 8 (short answer · 3.2)

Take **+x along a level, frictionless track**. A 0.60 kg cart passes x = 0 at +1.0 m/s. A fan on the cart gives a forward push that fades with distance: F_x = (3.0 N)e^(−x/2.0 m).

(a) Find the work done by the push from x = 0 to x = 4.0 m.
(b) Find the cart's speed at x = 4.0 m.
(c) A student uses W = (3.0 N)(4.0 m) = 12 J. Explain the error.

<details>
<summary>Answer and explanation</summary>

**(a)** W = ∫₀⁴ 3.0e^(−x/2.0) dx = [−6.0e^(−x/2.0)]₀⁴ = 6.0(1 − e^(−2.0)) = **5.2 J** (5.19 J).

**(b)** Only the push does work, so W = ΔK. K₀ = 0.30 J, so K = 5.49 J and v = √(2 × 5.49 ÷ 0.60) = **4.3 m/s**.

**(c)** F × d needs a **constant** force. This force fades, so the work is the area under the F–x curve, far below the 12 J rectangle.

**If you missed this:** work through Worked example 1 in the [Topic 3.2 study guide](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/).
</details>

## Question 9 (short answer · 3.4)

Take **+x to the right**, x > 0. A 0.25 kg glider moves without friction on an air track. Its system has U(x) = 0.50x² + 8.0/x.

(a) Find the equilibrium position and show whether it is stable.
(b) The glider is released from rest at x = 1.0 m. Find the force on it there.
(c) Find its speed as it passes the equilibrium position.
(d) Find the other turning point.

<details>
<summary>Answer and explanation</summary>

**(a)** dU/dx = x − 8.0/x² = 0 gives x³ = 8.0, so **x = 2.0 m**. d²U/dx² = 1 + 16/x³ = 3.0 J/m² > 0: a minimum of U, so the equilibrium is **stable**. U(2.0) = 6.0 J.

**(b)** F_x = −dU/dx = −(1.0 − 8.0) = **+7.0 N**, towards lower U and the equilibrium.

**(c)** E = U(1.0) = 0.50 + 8.0 = 8.5 J. At x = 2.0 m, K = 8.5 − 6.0 = 2.5 J, so v = √(2 × 2.5 ÷ 0.25) = **4.5 m/s** (4.47 m/s).

**(d)** Set U = E: 0.50x² + 8.0/x = 8.5, so x³ − 17x + 16 = 0. x = 1.0 (the release point) is one root; the other factor, x² + x − 16 = 0, gives **x = 3.5 m** (3.53 m).

**If you missed this:** for (c) and (d), read Worked example 1 in the [Topic 3.4 study guide](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/); for (a) and (b), "Equilibrium and stability on a U(x) graph" in the [Topic 3.3 study guide](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/).
</details>

## Question 10 (short answer · 3.5)

An e-bike and rider have a total mass of 90 kg on a level road. Model the total resistive force as F = (0.30 N·s²/m²)v².

(a) Find the power the motor must supply to cruise at 8.0 m/s.
(b) The motor's greatest power is 500 W. Find the top speed.
(c) At full power, find the acceleration at the moment the speed is 6.0 m/s.

<details>
<summary>Answer and explanation</summary>

**(a)** At constant speed the driving force balances resistance: F = 0.30 × 8.0² = 19.2 N. P = Fv = 19.2 × 8.0 = **150 W** (154 W).

**(b)** P = 0.30v³ = 500, so v³ = 1667 and **v = 12 m/s** (11.9 m/s).

**(c)** Driving force P/v = 83 N; resistive force 0.30 × 6.0² = 10.8 N. a = (83.3 − 10.8) ÷ 90 = **0.81 m/s²**.

**If you missed this:** read "Instantaneous power: P = dW/dt = F·v" and "Net power and kinetic energy" in the [Topic 3.5 study guide](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/).
</details>

## Your next step

Mark each question. Count a short answer as missed if any part went wrong.

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 3.1 Translational Kinetic Energy | 1 | [Topic 3.1 study guide](/advanced-course-resources/physics-c-mechanics/3-1-translational-kinetic-energy-study-guide/) |
| 3.2 Work | 2, 3, 8 | [Topic 3.2 study guide](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/) |
| 3.3 Potential Energy | 4, 5, 9(a)–(b) | [Topic 3.3 study guide](/advanced-course-resources/physics-c-mechanics/3-3-potential-energy-study-guide/) |
| 3.4 Conservation of Energy | 6, 9(c)–(d) | [Topic 3.4 study guide](/advanced-course-resources/physics-c-mechanics/3-4-conservation-energy-study-guide/) |
| 3.5 Power | 7, 10 | [Topic 3.5 study guide](/advanced-course-resources/physics-c-mechanics/3-5-power-study-guide/) |

## How to use your result

- **Read every explanation, even for questions you got right.** A lucky guess is still a gap.
- **Missed one question in a topic?** Read the named section, then try that topic's practice set.
- **Missed two or more in a topic?** Work through that topic's whole study guide, then its practice set and checklist.
- **Missed questions across several topics?** Start with Topic 3.2; work integrals feed every other topic.
- **Got everything right?** Go to the [mixed unit review](/advanced-course-resources/physics-c-mechanics/unit-3-review/), where each question combines topics.

Your result guides what to study next. It does not predict an exam score.
