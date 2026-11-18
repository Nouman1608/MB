---
title: "Edexcel International A Level Mathematics (YMA01): P4 Differentiation -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P4: Pure Mathematics 4"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 4.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-differentiation-edexcel-alevel-maths"
description: "Revision notes for Edexcel IAL Maths P4 differentiation: implicit and parametric dy/dx, tangents and normals, differential equations and rates of change."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes cover section 5 of Unit P4 in Pearson Edexcel International A Level Mathematics (YMA01): differentiation of functions defined implicitly or parametrically, with tangents and normals, and the formation of simple differential equations, including connected rates of change. For full explanations, use the [P4 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p4-differentiation-edexcel-alevel-maths/).

## Implicit differentiation: the method

1. Differentiate every term with respect to x, including constants (which give 0).
2. Each term containing y gets a factor dy/dx (chain rule).
3. Each product of an x part and a y part needs the product rule.
4. Collect the dy/dx terms on one side and factorise.
5. Divide to make dy/dx the subject.

```
d/dx (y^n)  = n y^(n-1) dy/dx
d/dx (xy)   = y + x dy/dx
d/dx (x^2 y^2) = 2xy^2 + 2x^2 y dy/dx
d/dx (e^y)  = e^y dy/dx
d/dx (sin y) = cos y dy/dx
```

**Example:** y³ + 2x²y = 7 gives 3y² dy/dx + 4xy + 2x² dy/dx = 0, so dy/dx = −4xy/(3y² + 2x²).

## Parametric differentiation

```
dy/dx = (dy/dt) / (dx/dt)
```

- The gradient is in terms of t. Find the t value of the point first.
- Horizontal tangent: dy/dt = 0. Vertical tangent: dx/dt = 0.
- **Example:** x = 3t², y = 2t³ gives dy/dx = 6t²/(6t) = t, so at t = 2 the gradient is 2 and the point is (12, 16).

## Tangents and normals

| Line | Gradient | Equation through (x₁, y₁) |
|---|---|---|
| Tangent | m = dy/dx at the point | y − y₁ = m(x − x₁) |
| Normal | −1/m | y − y₁ = (−1/m)(x − x₁) |

**Where a line meets a parametric curve again:** substitute x(t) and y(t) into the line's equation. One root is the parameter of the known point, which helps you factorise.

**Points with a given gradient on an implicit curve:** set dy/dx equal to the value. This gives a line, such as y = −2x. Substitute it back into the curve's equation to find the points.

## Forming differential equations

| Phrase | Becomes |
|---|---|
| "rate of change of A" | dA/dt |
| "proportional to B" | kB, with k a constant |
| "inversely proportional to B" | k/B |
| "decreases" | a minus sign, with k > 0 |
| "added at a constant rate c" | + c |
| "removed at a rate proportional to B" | − kB |

- Newton's law of cooling: dθ/dt = −k(θ − θ₀), where θ₀ is the temperature of the surroundings.
- Growth with removal: dP/dt = kP − r, where r is removed per unit time.
- If you divide through by a number, rename the constant and say so.

## Connected rates of change

```
dA/dt = dA/dr × dr/dt
dr/dt = (dA/dt) / (dA/dr)
```

| Shape | Formula | Derivative |
|---|---|---|
| Circle | A = πr² | dA/dr = 2πr |
| Sphere, volume | V = (4/3)πr³ | dV/dr = 4πr² |
| Sphere, surface area | S = 4πr² | dS/dr = 8πr |
| Cube | V = x³, S = 6x² | dV/dx = 3x², dS/dx = 12x |
| Cylinder of fixed radius r | V = πr²h | dV/dh = πr² |

When a formula is implicit, as with a ladder where x² + y² = L², differentiate with respect to t directly: 2x dx/dt + 2y dy/dt = 0.

## Key terms

| Term | Meaning |
|---|---|
| Implicit equation | An equation in x and y where y is not the subject |
| Parameter | A third variable, often t, used to give x and y separately |
| Tangent | The line touching the curve with the same gradient at that point |
| Normal | The line through the point perpendicular to the tangent |
| Differential equation | An equation containing a derivative such as dy/dx or dV/dt |
| Connected rates | Two rates of change linked through the chain rule |

## Exam traps

- y² differentiated as 2y, with no dy/dx.
- The product rule left out on xy terms.
- Substituting an x value into a gradient that is in terms of t.
- The tangent gradient used where the normal is asked for.
- A missing minus sign for a decreasing quantity.
- Dividing a rate by the wrong derivative. Check that the units cancel to what you want.

## Self-test

1. Differentiate y³ with respect to x.
2. Differentiate x²y with respect to x.
3. Find dy/dx for x eʸ = x² + 3.
4. Give the formula for dy/dx when x and y are functions of t.
5. Find dy/dx for x = 3t², y = 2t³.
6. On a parametric curve, what tells you there is a vertical tangent?
7. The tangent at a point has gradient 4/5. What is the gradient of the normal?
8. Write a differential equation: the rate of decrease of temperature θ is proportional to the amount by which θ exceeds 20.
9. The radius of a circle increases at 0.5 cm s⁻¹. How fast is the area increasing when r = 6 cm?
10. The volume of a sphere increases at 50 cm³ s⁻¹. Find dr/dt when r = 5 cm.
11. A population P grows at a rate proportional to P, and 200 animals are removed each year. Write a differential equation.
12. Find dy/dx for x sin y + y² = π²/4 at (0, π/2).

**Answers:**

1. 3y² dy/dx.
2. 2xy + x² dy/dx.
3. eʸ + x eʸ dy/dx = 2x, so dy/dx = (2x − eʸ)/(x eʸ).
4. dy/dx = (dy/dt) ÷ (dx/dt).
5. dy/dx = 6t²/(6t) = t.
6. dx/dt = 0 while dy/dt ≠ 0.
7. −5/4.
8. dθ/dt = −k(θ − 20), with k > 0.
9. dA/dt = 2πr × 0.5 = 6π ≈ 18.8 cm² s⁻¹.
10. dV/dr = 4π(25) = 100π, so dr/dt = 50/(100π) = 1/(2π) ≈ 0.159 cm s⁻¹.
11. dP/dt = kP − 200, with k > 0 and t in years.
12. sin y + x cos y dy/dx + 2y dy/dx = 0. At (0, π/2): 1 + π dy/dx = 0, so dy/dx = −1/π.

Next, try the [P4 differentiation practice questions](/resources/edexcel-a-level-mathematics-yma01-p4-differentiation-edexcel-alevel-maths-practice/).
