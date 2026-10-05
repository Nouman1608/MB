---
resourceId: "mb-ap-calcab-4.5-practice"
title: "Solving Related Rates Problems: Practice Questions (Calculus AB 4.5)"
description: "Seven original Marlbridge practice questions on related rates with Pythagoras, angles, similar triangles and volumes, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 4
topics: ["4.5"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Differentiating an equation with respect to time (Topic 4.4)"
  - "Pythagoras' theorem, similar triangles and right-angle trigonometry"
prerequisiteResources: ["mb-ap-calcab-4.5-study-guide"]
learningObjectives:
  - "Build a related rates equation from a description"
  - "Remove a variable using similar triangles before differentiating"
  - "Calculate a related rate at an instant, with units and sign"
  - "Explain the meaning of a related rate in context"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave π and fractions exact; decimals are given in the solutions only to help interpretation."
related: ["mb-ap-calcab-4.5-study-guide", "mb-ap-calcab-4.5-revision-notes", "mb-ap-calcab-4.5-checklist"]
next: "mb-ap-calcab-4.5-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning and interpretation."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, time t in the units stated, and every situation is fictional. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A weather balloon rises straight up at 3 m/s from a launch point on flat ground. An observer stands on the ground 80 m from the launch point. At what rate is the distance between the observer and the balloon increasing when the balloon is 60 m high?

- (A) 1.8 m/s
- (B) 2.25 m/s
- (C) 2.4 m/s
- (D) 3 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Let h be the height and D the distance. At all times h² + 80² = D². When h = 60, D = √(3600 + 6400) = 100 m. Differentiate: 2h · dh/dt = 2D · dD/dt, so 60 × 3 = 100 · dD/dt and dD/dt = 1.8 m/s.

- (B) uses 60/80 instead of 60/100: it divides by the fixed leg instead of the hypotenuse D.
- (C) uses 80/100: it puts the fixed 80 m where the changing height belongs.
- (D) assumes the distance changes as fast as the balloon rises. Only part of the balloon's motion is directed away from the observer.
</details>

## Question 2 (multiple choice · core)

Water is poured into a cone-shaped funnel held with its point at the bottom. The funnel is 10 cm deep and the radius of its rim is 5 cm. When the water is h cm deep, which equation gives the volume V of water, in cm³, in terms of h alone?

- (A) V = πh³/12
- (B) V = πh³/4
- (C) V = 4πh³/3
- (D) V = 25πh/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** By similar triangles, the water's radius r satisfies r/h = 5/10, so r = h/2 at every depth. Then V = (1/3)πr²h = (1/3)π(h/2)²h = πh³/12. (If water then flowed in at 3 cm³/s, at h = 6 you would get 3 = (πh²/4) · dh/dt = 9π · dh/dt, so dh/dt = 1/(3π) cm/s.)

- (B) forgets the 1/3 in the cone volume formula.
- (C) inverts the ratio, writing r = 2h instead of r = h/2.
- (D) uses the rim radius 5 as if the water's radius were fixed. The water's radius changes with the depth.
</details>

## Question 3 (multiple choice · core)

A spotlight sits on a stage floor 8 m from a vertical wall. It turns upward at a steady 0.5 radians per second, so its spot of light moves up the wall. How fast is the spot moving up the wall when it is 6 m above the floor?

- (A) 2.56 m/s
- (B) 4 m/s
- (C) 5 m/s
- (D) 6.25 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Let y be the height of the spot and θ the angle of the beam above the floor. At all times tan θ = y/8, so y = 8 tan θ and dy/dt = 8 sec²θ · dθ/dt. When y = 6, the beam length is √(64 + 36) = 10, so sec θ = 10/8 and sec²θ = 25/16. Then dy/dt = 8 × (25/16) × 0.5 = 6.25 m/s.

- (A) uses cos²θ = 16/25 in place of sec²θ.
- (B) forgets sec²θ altogether: 8 × 0.5 = 4. That is only correct when the beam is horizontal.
- (C) uses sec θ = 5/4 without squaring it.
</details>

## Question 4 (multiple choice · core)

A spherical balloon is inflated so that its volume increases at a constant rate. Which statement about the radius r is true while the balloon is being inflated?

- (A) The radius increases at a constant rate.
- (B) The radius increases faster as the balloon gets larger.
- (C) The radius increases more slowly as the balloon gets larger.
- (D) Nothing can be said without knowing the value of dV/dt.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** V = (4/3)πr³, so dV/dt = 4πr² · dr/dt and dr/dt = (dV/dt)/(4πr²). The top is a positive constant and the bottom grows as r grows, so dr/dt gets smaller. The same volume of air is spread over a larger surface. (For example, with dV/dt = 100 cm³/s, dr/dt is about 7.96 cm/s at r = 1 cm, 1.99 cm/s at r = 2 cm and 0.50 cm/s at r = 4 cm.)

- (A) assumes that a constant rate for V means a constant rate for r. The relationship between V and r is not linear.
- (B) has the effect the wrong way round: r² is in the denominator.
- (D) is wrong because the conclusion depends only on dV/dt being a positive constant, not on its value.
</details>

## Question 5 (constructed response · core)

A lamp at the top of a 4.8 m pole lights a park path. A child 1.6 m tall walks in a straight line directly away from the foot of the pole at 1.2 m/s. Let x be the child's distance from the foot of the pole and s the length of the child's shadow.

(a) Use similar triangles to show that s = x/2 at all times.
(b) Find the rate at which the shadow's length is changing. Does it depend on x?
(c) Find the rate at which the tip of the shadow is moving away from the pole.
(d) Explain in context why the answers to (b) and (c) are different.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The light ray from the lamp to the tip of the shadow passes over the child's head. The big triangle (pole, ground from the pole to the tip) and the small triangle (child, shadow) are similar. So s/1.6 = (x + s)/4.8. Multiply out: 4.8s = 1.6x + 1.6s, so 3.2s = 1.6x and **s = x/2**.

**(b)** Differentiate: ds/dt = (1/2) · dx/dt = (1/2)(1.2) = **0.6 m/s**. The shadow is getting longer at 0.6 metres per second. This does not depend on x, because s is a constant multiple of x.

**(c)** The tip is at distance x + s = 1.5x from the pole. Its rate is 1.5 · dx/dt = 1.5 × 1.2 = **1.8 m/s**, away from the pole.

**(d)** The shadow's length is measured from the child's feet, and the child is moving. The tip's position is measured from the fixed pole. The tip moves at the child's speed (1.2 m/s) plus the rate at which the shadow grows (0.6 m/s): 1.2 + 0.6 = 1.8 m/s.

| Point | What earns it |
|---|---|
| 1 | Correct similar-triangle proportion leading to s = x/2 |
| 1 | ds/dt = 0.6 m/s, interpreted as the shadow getting longer, with a reason it does not depend on x |
| 1 | Tip position x + s (or 1.5x) and rate 1.8 m/s |
| 1 | Explains the difference: one length is measured from the moving child, the other from the fixed pole |

A common error is to answer (c) with 0.6 m/s. That is the rate of change of the shadow's length, not the speed of its tip.
</details>

## Question 6 (constructed response · core)

In a theatre, a scenery trolley is pulled across the stage by a cable. The cable runs from a hook on the trolley to a pulley fixed 2 m higher than the hook. A winch pulls the cable in at 0.5 m/s. Let x be the horizontal distance from the hook to the point directly below the pulley, and L the length of cable between the hook and the pulley.

(a) Write an equation linking x and L that holds at all times.
(b) Find dx/dt at the moment when x = 4.8 m.
(c) Interpret your answer to (b), and explain why the trolley moves faster than the cable is pulled in.
(d) Find dx/dt when x = 1.5 m. What does this model predict as x gets close to 0, and is that realistic?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The hook, the point below the pulley and the pulley form a right triangle with a fixed vertical side of 2 m. So **x² + 2² = L²**.

**(b)** When x = 4.8, L² = 23.04 + 4 = 27.04, so L = 5.2 m. The cable is getting shorter, so dL/dt = −0.5 m/s. Differentiate: 2x · dx/dt = 2L · dL/dt. So 4.8 · dx/dt = 5.2 × (−0.5) = −2.6 and **dx/dt = −2.6/4.8 = −13/24 m/s** (about −0.54 m/s).

**(c)** At the moment the trolley is 4.8 m from the point below the pulley, that distance is decreasing at 13/24 m/s (about 0.54 m/s): the trolley is moving towards the pulley at about 0.54 m/s. From (b), dx/dt = (L/x) · dL/dt, and L > x because L is the hypotenuse. So the trolley's speed is always bigger than the cable speed of 0.5 m/s.

**(d)** At x = 1.5, L = √(2.25 + 4) = 2.5 m, so dx/dt = (2.5/1.5)(−0.5) = **−5/6 m/s** (about −0.83 m/s). As x → 0, L → 2 while x → 0, so L/x grows without bound and the model predicts the trolley speeding up without limit. That is not realistic: when the cable is almost vertical it lifts rather than pulls, so the model only works while the trolley is well away from the point below the pulley.

| Point | What earns it |
|---|---|
| 1 | Correct equation x² + 4 = L² |
| 1 | L = 5.2 at the instant, and dL/dt = −0.5 used with a negative sign |
| 1 | dx/dt = −13/24 m/s (or about −0.54 m/s) with an interpretation stating direction and units |
| 1 | Reason for the trolley's greater speed (L/x > 1) **and** a sensible comment on the model as x → 0 |
</details>

## Question 7 (constructed response · stretch)

A water trough is 4 m long. Its ends are isosceles triangles with the point at the bottom, 1.2 m wide across the top and 0.6 m deep. Water is pumped in at 0.1 m³ per minute, but the trough also leaks. At the moment when the water is 0.4 m deep, the depth is increasing at 0.02 m per minute.

(a) Show that the volume of water when the depth is h metres is V = 4h².
(b) Find the rate at which water is leaking out at that moment.
(c) Suppose the net rate at which the volume increases stays the same as in (b). Would the depth rise faster or more slowly when the water is 0.5 m deep? Support your answer with a calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The water's cross-section is a small triangle similar to the end. Width/depth = 1.2/0.6 = 2, so the water is 2h wide at depth h. Area of the cross-section = (1/2)(2h)(h) = h². Volume = area × length = 4h².

**(b)** Differentiate: dV/dt = 8h · dh/dt. At the instant, dV/dt = 8(0.4)(0.02) = **0.064 m³/min**. This is the net rate: inflow minus leak. So the leak rate = 0.1 − 0.064 = **0.036 m³ per minute**. At that moment, water is leaking out at 0.036 cubic metres per minute.

**(c)** At h = 0.5 with dV/dt = 0.064: 0.064 = 8(0.5) · dh/dt, so dh/dt = **0.016 m/min**. That is slower than 0.02 m/min. The water surface is wider higher up the trough (its area is 4 × 2h = 8h m²), so the same net volume raises the level less.

| Point | What earns it |
|---|---|
| 1 | Uses similar triangles to get width 2h and V = 4h² |
| 1 | Correct derivative dV/dt = 8h · dh/dt and net rate 0.064 m³/min |
| 1 | Leak rate 0.036 m³/min, identifying 0.064 as inflow minus leak |
| 1 | dh/dt = 0.016 m/min at h = 0.5 and the conclusion "more slowly", with a reason |

A common error in (b) is to use dV/dt = 0.1. That ignores the leak and gives dh/dt = 1/32 m/min, which does not match the given 0.02.
</details>

## How did you do?

- **Q1 or Q6 wrong:** revisit Worked example 1 (Pythagoras) in the [study guide](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-study-guide/), and find the missing side before substituting.
- **Q2, Q5 or Q7 wrong:** reread "Removing a variable with similar triangles" and Worked example 2.
- **Q3 wrong:** redo part (b) of Worked example 1 and check the sec²θ factor.
- **Q4, Q5(d) or Q6(c) wrong:** reread "Interpreting the answer".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/4-5-solving-related-rates-problems-checklist/).
