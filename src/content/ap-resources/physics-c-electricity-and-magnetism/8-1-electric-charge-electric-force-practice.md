---
resourceId: "mb-ap-physcem-8.1-practice"
title: "Electric Charge and Electric Force: Practice Questions (Physics C: E&M 8.1)"
description: "Seven original Marlbridge practice questions on charge and Coulomb's law: quantised charge, factors of change, vector forces, electric versus gravitational force and polarisation."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.1"]
resourceType: "practice-questions"
prerequisites:
  - "Coulomb's law and adding forces as vectors"
prerequisiteResources: ["mb-ap-physcem-8.1-study-guide"]
learningObjectives:
  - "Relate an object's charge to the number of electrons gained or lost"
  - "Use Coulomb's law to predict factors of change and to calculate forces"
  - "Find the net force from several charges and the point where it is zero"
  - "Explain polarisation and compare electric and gravitational forces"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C; G = 6.67 × 10⁻¹¹ N·m²/kg²; g = 9.8 m/s². Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-8.1-study-guide", "mb-ap-physcem-8.1-revision-notes", "mb-ap-physcem-8.1-checklist"]
next: "mb-ap-physcem-8.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Question 7 uses a derivative to test whether a balance point is stable."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. Data for every question: 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C, G = 6.67 × 10⁻¹¹ N·m²/kg², proton mass m_p = 1.67 × 10⁻²⁷ kg, electron mass m_e = 9.11 × 10⁻³¹ kg, g = 9.8 m/s². All charged objects are point charges unless stated. A scientific calculator is assumed; round only at the end.

## Question 1 (multiple choice · foundation)

Two small charged spheres exert an electric force of size F on each other. The charge on **each** sphere is doubled, and the distance between them is made three times as large. What is the new size of the force?

- (A) 4F/9
- (B) 2F/9
- (C) 4F/3
- (D) 2F/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** F ∝ |q₁q₂|/r². Doubling both charges multiplies the top by 2 × 2 = 4. Tripling r multiplies r² by 9. So the new force is (4/9)F.

- (B) doubles only **one** of the charges.
- (C) divides by 3 instead of 3², as if F ∝ 1/r.
- (D) makes both mistakes: one charge doubled and F ∝ 1/r.
</details>

## Question 2 (multiple choice · foundation)

A plastic comb starts neutral. After it is rubbed, its charge is +4.8 nC. Which statement is correct?

- (A) It gained 3.0 × 10¹⁰ electrons.
- (B) It lost 3.0 × 10¹⁰ electrons.
- (C) It lost 3.0 × 10¹⁹ electrons.
- (D) It gained 3.0 × 10¹⁰ protons.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** n = q/e = (4.8 × 10⁻⁹ C) ÷ (1.60 × 10⁻¹⁹ C) = 3.0 × 10¹⁰. A positive charge means the comb has fewer electrons than protons, so it **lost** electrons.

- (A) has the right number but the wrong process. Gaining electrons would make the comb negative.
- (C) forgets the "nano": it uses 4.8 C instead of 4.8 × 10⁻⁹ C.
- (D) Protons are held in the nuclei and do not move between objects during rubbing.
</details>

## Question 3 (multiple choice · core)

Two protons are a distance r apart in empty space. Which statement about the ratio of the electric force to the gravitational force between them is correct?

- (A) The ratio is about 2.3 × 10³⁹, and it stays the same if r is doubled.
- (B) The ratio is about 1.2 × 10³⁶, and it becomes four times smaller if r is doubled.
- (C) The ratio is about 1.2 × 10³⁶, and it stays the same if r is doubled.
- (D) The ratio depends on r, so it cannot be found without knowing r.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** F_e/F_g = [(1/(4πε₀)) e²/r²] ÷ [G m_p²/r²] = (8.99 × 10⁹)(1.60 × 10⁻¹⁹)² ÷ [(6.67 × 10⁻¹¹)(1.67 × 10⁻²⁷)²] = 1.24 × 10³⁶. Both forces fall as 1/r², so the r² cancels and the ratio does not depend on r.

- (A) is the ratio for a proton and an **electron** (it uses m_p m_e instead of m_p²).
- (B) has the right value, but both forces change by the same factor when r changes, so the ratio stays the same.
- (D) misses that both laws are inverse-square, so r cancels.
</details>

## Question 4 (calculation · core)

Three small charged beads are fixed on a straight insulating rod along the x-axis: q₁ = +4.0 nC at x = 0, q₂ = −2.0 nC at x = 0.10 m and q₃ = +6.0 nC at x = 0.25 m. Find the magnitude and direction of the net electric force on q₂.

<details>
<summary>Worked solution</summary>

1. **Force from q₁.** Opposite signs, so attraction: the force on q₂ points towards q₁, in the **−x** direction. F₁₂ = (8.99 × 10⁹)(4.0 × 10⁻⁹)(2.0 × 10⁻⁹) ÷ (0.10)² = 7.19 × 10⁻⁶ N.
2. **Force from q₃.** Opposite signs, so attraction towards q₃, in the **+x** direction. The separation is 0.25 − 0.10 = 0.15 m. F₃₂ = (8.99 × 10⁹)(6.0 × 10⁻⁹)(2.0 × 10⁻⁹) ÷ (0.15)² = 4.79 × 10⁻⁶ N.
3. **Net.** F = +4.79 × 10⁻⁶ − 7.19 × 10⁻⁶ = −2.40 × 10⁻⁶ N.

**Answer: 2.4 × 10⁻⁶ N in the −x direction** (towards q₁).

Suggested mark points (3): 1 for correct directions of both forces from the signs; 1 for both magnitudes, using 0.15 m (not 0.25 m) for the q₃ separation; 1 for the net force with its direction.

Common errors: using 0.25 m (the position of q₃) as the separation gives 1.73 × 10⁻⁶ N for F₃₂; adding the two magnitudes gives 1.20 × 10⁻⁵ N, which ignores that the forces point in opposite directions.
</details>

## Question 5 (calculation · core)

A small sphere with charge +50 nC is fixed at the bottom of a vertical, frictionless, insulating tube. A bead of mass 0.50 g and charge +50 nC is dropped into the tube and eventually settles at rest, floating above the fixed sphere.

(a) Draw a free-body diagram for the bead at rest.
(b) Find the height h of the bead above the fixed sphere.
(c) Without a full recalculation, find h if the bead's charge were +25 nC instead.
(d) The fixed sphere has mass 2.0 g. Calculate the gravitational force between the two objects at height h and comment on it.

<details>
<summary>Worked solution</summary>

1. **(a)** Two vertical forces on the bead: weight mg downward, and the electric repulsion F_e upward. (The tube wall exerts no force, because both forces are vertical.)
2. **(b)** At rest, F_e = mg. mg = (0.50 × 10⁻³ kg)(9.8 m/s²) = 4.9 × 10⁻³ N. So (1/(4πε₀)) q₁q₂/h² = mg, giving h = √[(8.99 × 10⁹)(50 × 10⁻⁹)² ÷ (4.9 × 10⁻³)] = **0.068 m** (6.8 cm).
3. **(c)** h = √[k q₁q₂/(mg)], so h ∝ √q₂. Halving q₂ multiplies h by 1/√2 = 0.707: h = **0.048 m** (4.8 cm).
4. **(d)** F_g = G m₁m₂/h² = (6.67 × 10⁻¹¹)(0.50 × 10⁻³)(2.0 × 10⁻³) ÷ (0.0677)² = **1.5 × 10⁻¹⁴ N**. The electric force is 4.9 × 10⁻³ N, about 3 × 10¹¹ times larger, so the gravitational attraction between the two objects is negligible. (The bead's weight is a gravitational force too, but it comes from the whole Earth.)

Suggested mark points (5): 1 for a diagram with only weight (down) and electric force (up), labelled; 1 for setting F_e = mg; 1 for h = 0.068 m; 1 for (c) using the square-root dependence to get 0.048 m; 1 for F_g ≈ 1.5 × 10⁻¹⁴ N with the comment that it is negligible next to the electric force.

Common error: in (c), halving h. The height depends on the **square root** of the charge.
</details>

## Question 6 (constructed response · core)

A student rubs a balloon so it becomes negatively charged and holds it near small, neutral scraps of paper. The scraps jump up to the balloon.

(a) Explain, in terms of charges in the paper, why a neutral scrap is attracted.
(b) A neutral scrap of aluminium foil of the same size is attracted more strongly than the paper. Explain why.
(c) The student says: "Electric forces are rare in everyday life; this is a special case." Explain why the normal force from a desk is also electric in origin, and why mechanics treats it as a contact force.
(d) Explain why the Earth and the Moon attract each other gravitationally but exert almost no electric force on each other.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The negative balloon repels electrons in the paper's molecules slightly away from it. Each molecule is polarised: its positive side is nearer the balloon and its negative side farther away. The paper is still neutral overall. Because the Coulomb force falls with distance, the attraction on the nearer positive charges is larger than the repulsion on the farther negative charges, so the net force is towards the balloon.

**(b)** Aluminium is a conductor. Its free electrons can move across the whole scrap, not just within each molecule, so the charge separation is much larger. The near side becomes more positive and the far side more negative, so the net attraction is stronger. The paper is an insulator, so its electrons can only shift a little within their own molecules.

**(c)** When an object rests on a desk, the electrons in the surface atoms of each object repel each other. That repulsion is the normal force. It comes from an enormous number of individual particle interactions, which cannot be added one by one, so mechanics models the total as a single contact force.

**(d)** The Earth and the Moon are almost exactly electrically neutral: their positive and negative charges nearly cancel, so the net electric force is tiny. Mass is always positive, so the gravitational forces of all their particles add up. That is why gravity dominates at large scales even though it is far weaker particle by particle.

| Point | What earns it |
|---|---|
| 1 | Polarisation of the paper's molecules: charge separation induced by the balloon, paper still neutral |
| 1 | Net attraction explained by the nearer opposite charges and the decrease of force with distance |
| 1 | Foil is a conductor: electrons move freely through it, giving a larger separation and a stronger pull |
| 1 | Normal force is electric repulsion between atoms; treated as a contact force because of the huge number of interactions |
| 1 | Large bodies are nearly neutral, so electric forces cancel, while gravitational forces always add |

Accept "electron clouds of the surface atoms repel" for (c). Do not accept "the paper becomes positively charged" in (a): it stays neutral.
</details>

## Question 7 (constructed response · stretch)

Two fixed point charges lie on the x-axis: q₁ = +9.0 nC at x = 0 and q₂ = −1.0 nC at x = d = 0.20 m. A small positive test charge q can be placed anywhere on the axis.

(a) Explain why the net force on q cannot be zero between the two charges, or to the left of q₁.
(b) Find the position where the net force on q is zero.
(c) For x > d, write the net force F(x) on q. Use dF/dx to decide whether the balance in (b) is stable or unstable for small displacements along the axis.
(d) Calculate the net force on a +2.0 nC charge placed at x = 0.40 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Between the charges, q₁ repels q in the +x direction and q₂ attracts it towards x = d, also +x. Both forces point the same way, so they cannot cancel. To the left of q₁, the forces do point in opposite directions, but q is always closer to q₁ than to q₂, and |q₁| is the larger charge. So q₁'s force is always larger.

**(b)** For x > d the forces are opposite. Setting the magnitudes equal:

9.0/x² = 1.0/(x − d)², so x = 3(x − d) and **x = 1.5d = 0.30 m**.

**(c)** Taking +x as positive, for x > d:

**F(x) = (q/(4πε₀)) [q₁/x² − |q₂|/(x − d)²]**

dF/dx = (q/(4πε₀)) [−2q₁/x³ + 2|q₂|/(x − d)³]

At x = 0.30 m, in nanocoulombs and metres: −2(9.0)/(0.30)³ + 2(1.0)/(0.10)³ = −667 + 2000 = **+1333 > 0**. So dF/dx is positive: a small move to the right gives a force to the right, and a small move to the left gives a force to the left. The balance is **unstable** for a positive charge.

**(d)** At x = 0.40 m: F = (8.99 × 10⁹)(2.0 × 10⁻⁹)(10⁻⁹)[9.0/(0.40)² − 1.0/(0.20)²] = (1.798 × 10⁻⁸)(56.25 − 25.0) = **5.6 × 10⁻⁷ N in the +x direction**. (The extra 10⁻⁹ converts the charges in the bracket from nC to C.) This agrees with (c): beyond 0.30 m the net force pushes q further away.

| Point | What earns it |
|---|---|
| 1 | Between the charges: both forces point in +x, so no cancellation |
| 1 | Left of q₁: larger charge is also closer, so its force always wins |
| 1 | Equal magnitudes for x > d leading to x = 0.30 m |
| 1 | Correct expression for F(x) with signs consistent with the directions |
| 1 | dF/dx evaluated (or its sign argued) at x = 0.30 m |
| 1 | Correct conclusion "unstable", linked to the sign of dF/dx |
| 1 | F = 5.6 × 10⁻⁷ N in +x at x = 0.40 m |

Accept a stability argument that compares the force a little to each side of 0.30 m (for example at 0.29 m and 0.31 m) instead of using the derivative. A negative test charge would be stable along the axis at the same point; mention of this is not required.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Coulomb's law" and "Electric force versus gravitational force" in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-study-guide/).
- **Q2 wrong:** revisit "What electric charge is", especially q = ne and which particles move.
- **Q4 or Q5 wrong:** work through Worked example 1 again, drawing each force before you add.
- **Q6 incomplete:** re-read "Permittivity, polarisation, conductors and insulators" and Figure 2.
- **Q7 incomplete:** compare it with Worked example 2, where the charges have the same sign.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-checklist/).
