---
title: "IB MYP Mathematics: Functions and models: linear, quadratic, exponential and rational (MYP Mathematics) -- Revision Notes"
seoTitle: "MYP Maths Functions and Models Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["ib"]
topic: "Functions and models: linear, quadratic, exponential and rational"
boards: ["ib"]
qualifications: ["ib-myp"]
syllabusCodes: ["MYP Mathematics"]
syllabusSeries: "From 2020, first assessment 2022"
order: 341
syllabusTopics:
  - qualification: "ib-myp"
    topic: "ib-myp-mathematics-branches-of-mathematical-study"
    subtopic: "ib-myp-mathematics-branches-of-mathematical-study-thinking-with-models"
description: "Condensed revision notes on functions and models for IB MYP Mathematics: formulas, methods, a self-test and the mistakes that cost the most."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense functions and models from the thinking with models framework of the IB Middle Years Programme *Mathematics guide* (first assessment 2022). The [study guide](/resources/ib-myp-mathematics-functions-and-models-linear-quadratic-exponential-and/) has the explanations and fully worked examples. Test yourself with the [practice set](/resources/ib-myp-mathematics-functions-and-models-linear-quadratic-exponential-and-practice/). Course page: [MYP Mathematics](/boards/ib/ib-myp/mathematics/). Progress tracker: [checklist](/checklists/ib/ib-myp/mathematics/). To find weak spots first, try the [all free 10-minute diagnostics](/diagnostics/).

Labels follow the framework: **standard** (MYP 4-5), **extended** (MYP 4-5) and **enrichment** (optional, not in eAssessments according to the guide).

## Key definitions

| Term | Meaning |
|---|---|
| Mapping | A pairing of inputs with outputs |
| Function | A mapping where each input has exactly one output |
| f(x) | The output when the rule f is applied to x |
| Model | A real situation described by expressions, equations or graphs |
| Asymptote | A line a graph approaches but does not reach |
| Domain, range (extended) | Allowed inputs; outputs that occur |
| Extrapolation | Using a model beyond the data that built it |

## Linear functions (standard)

| Item | Result |
|---|---|
| Rule | f(x) = mx + c |
| Gradient | m = (y₂ - y₁)/(x₂ - x₁) |
| y-intercept | c |
| Lines that are parallel | same m |
| Perpendicular lines | m₁ × m₂ = -1 |

**Method: find a line through two points.**

1. Find the gradient using the coordinates of both points.
2. Substitute one point and rearrange to get c.
3. Test the second point in your equation.

**Method: line perpendicular to a given line through a point.**

1. Read m from the given line.
2. Flip it and change the sign: new gradient = -1/m.
3. Substitute the point to find c.

**Reminder.** Perpendicular to y = 4x - 1 through (8, 2): m = -1/4, so 2 = -2 + c, c = 4 and y = -x/4 + 4.

## Simultaneous equations (standard)

The solution is the pair (x, y) that fits both equations, which is where the graphs cross. Parallel distinct lines give no solution.

| Method | Use when |
|---|---|
| Substitution | one equation already says y = ... or x = ... |
| Elimination | x or y terms have equal or opposite coefficients, or can be made so |
| Graph | an estimate is enough, or you need to see the situation |

**Reminder.** y = x + 4 and 2x + y = 13. Substitute: 2x + x + 4 = 13, so x = 3 and y = 7.

## Quadratics (standard)

| Form | Rule | Gives you |
|---|---|---|
| General | ax² + bx + c | y-intercept c; axis x = -b/(2a) |
| Factorised | a(x - p)(x - q) | crossing points p, q |
| Vertex | a(x - h)² + k | vertex (h, k) |

- a > 0: opens up, minimum at the vertex. a < 0: opens down, maximum.
- Larger |a| gives a narrower parabola.
- The axis sits midway between x-intercepts.

**Method: general form to vertex.**

1. Find the axis x = -b/(2a) (or factorise and go halfway between roots).
2. Substitute that x to get k.
3. Write a(x - h)² + k and expand to check.

**Reminder.** f(x) = x² + 2x - 8 = (x + 4)(x - 2). Axis x = -1. f(-1) = -9. Vertex form (x + 1)² - 9.

**Method: sketch a quadratic.**

1. Decide whether it opens up or down from the sign of a.
2. Mark the y-intercept and any x-intercepts.
3. Mark the vertex on the axis halfway between the intercepts.
4. Join with a smooth curve and label the points.

**Completing the square.** x² + 6x + 2 = (x + 3)² - 9 + 2 = (x + 3)² - 7. For a leading coefficient other than 1, factor it out of the x terms first.

## Exponential functions (standard)

| Item | Result |
|---|---|
| Rule | f(x) = a × bˣ, b > 0, b ≠ 1 |
| Start value | f(0) = a |
| Growth | b > 1 |
| Decay | 0 < b < 1 |
| Horizontal asymptote | y = 0 (or y = k for a × bˣ + k) |

**Reminder.** f(x) = 4 × 3ˣ - 5: start value without shift is 4, but f(0) = -1; asymptote y = -5; range f(x) > -5.

**Method: model a situation with an exponential.**

1. Identify the start value a.
2. Turn the percentage change into a factor b (add the rise to 1, or subtract the fall from 1).
3. Write y = a × bᵗ and test it on a known value.
4. State the limits of the model.

**Model checks.** Substitute known values to test the model. Ask whether the context allows negative or very large inputs. A population model that grows without limit fails once resources run out.

## Domain and range (extended)

- Domain: take away inputs that break the rule (zero denominator, argument of a logarithm not positive) and any the context rules out.
- Range: use the vertex of a parabola or the asymptote of an exponential.

| Function | Domain | Range |
|---|---|---|
| x² - 4x + 1 = (x - 2)² - 3 | all reals | f(x) ≥ -3 |
| 2ˣ | all reals | f(x) > 0 |
| 1/x | x ≠ 0 | f(x) ≠ 0 |

## Rational functions (extended)

For f(x) = (ax + b)/(cx + d):

| Feature | How to find it |
|---|---|
| Vertical asymptote | cx + d = 0, so x = -d/c |
| Horizontal asymptote | y = a/c |
| x-intercept | ax + b = 0, so x = -b/a |
| y-intercept | f(0) = b/d |
| Domain, range | x ≠ -d/c; f(x) ≠ a/c |

**Reminder.** f(x) = (5x - 10)/(x + 2): vertical asymptote x = -2, horizontal y = 5, x-intercept 2, y-intercept -5.

## Transforming quadratics (extended)

| Rule | Effect on the graph of f |
|---|---|
| f(x) + k | up k |
| f(x - h) | right h |
| -f(x) | reflect in the x-axis |
| f(-x) | reflect in the y-axis |
| a f(x) | vertical dilation, factor a |
| f(bx) | horizontal dilation, factor 1/b |

**Reminder.** y = 3(x + 2)² - 7 is y = x² moved 2 left, dilated vertically by 3, then moved 7 down. Vertex (-2, -7).

## Shapes and asymptotes (extended)

| Function | Features to quote |
|---|---|
| Cubic | up to three x-intercepts; ends go in opposite directions |
| Rational 1/x | asymptotes x = 0 and y = 0 |
| sin x | wave between -1 and 1, period 360° |
| tan x | vertical asymptotes at 90° + multiples of 180° |
| log₂ x | passes (1, 0); vertical asymptote x = 0 |

## Enrichment summary (optional)

| Idea | Key fact |
|---|---|
| Transforming cubics and trig | same rules; 3 sin x - 2 has values from -5 to 1 |
| e and ln | e ≈ 2.718; ln x undoes eˣ |
| Composite g∘f | do f first, then g; order matters |
| Inverse f⁻¹ | swap x and y, solve for y; mirror image in y = x |
| Logarithm | logarithm base b of a asks which power of b gives a |

## Must-know distinctions

- **Function and relation.** A circle is a relation; a line, parabola or exponential curve is a function.
- **Zero, intercept, root.** For a function these all point to the same place on the graph: an x-intercept.
- **Vertex and y-intercept.** The y-intercept is f(0). The vertex is on the axis of symmetry, not at x = 0 unless the form is symmetric.
- **Growth factor and growth rate.** A 12% rise each year has factor 1.12. A 12% fall has factor 0.88.
- **Vertical and horizontal asymptotes.** Vertical ones come from zero denominators. Horizontal ones describe behaviour for very large or very negative inputs.

## Quick self-test

1. If f(x) = 7 - 2x, find f(-3) and solve f(x) = 1.
2. Find the equation of the line through (0, 6) and (3, -3).
3. Give the gradient of a line perpendicular to y = 0.25x + 6.
4. Solve x + y = 10 and x - y = 4.
5. Write x² - 8x + 12 in factorised form and vertex form.
6. State the vertex and whether it is a maximum or minimum for -(x - 1)² + 6.
7. The value of a machine is 5000 × 0.8ᵗ dollars. Find the value after 2 years and the horizontal asymptote.
8. (Extended) State the domain and range of f(x) = 2ˣ + 3.
9. (Extended) Find both asymptotes of f(x) = (4x - 1)/(2x + 6).
10. (Enrichment) With f(x) = x + 5 and g(x) = 2x, find g∘f(1) and f⁻¹(x).

### Answers

1. f(-3) = 7 + 6 = 13. For 7 - 2x = 1, x = 3.
2. m = (-3 - 6)/(3 - 0) = -3; c = 6; y = -3x + 6.
3. Negative reciprocal of 0.25 is -4.
4. Adding: 2x = 14, x = 7, y = 3.
5. (x - 2)(x - 6). Axis x = 4, f(4) = -4, so (x - 4)² - 4.
6. Vertex (1, 6). a is negative, so it is a maximum.
7. 5000 × 0.64 = 3200 dollars. Asymptote y = 0.
8. Domain all reals. Range f(x) > 3.
9. Vertical x = -3; horizontal y = 4/2 = 2.
10. g∘f(1) = g(6) = 12. f⁻¹(x) = x - 5.

## Where marks are usually lost

- Writing a point as (x, f(x)) the wrong way round, or reading the vertex of (x - 3)² - 4 as having x-coordinate -3.
- Forgetting that a line's perpendicular gradient needs the minus sign as well as the flip.
- Solving only for x in simultaneous equations and leaving out y.
- Giving the y-intercept of a quadratic as the vertex's y-value.
- Naming the asymptote of a shifted exponential as y = 0 when a constant has been added.
- Stating the horizontal asymptote as x = a/c; it is y = a/c.
- Giving a range that includes values the function never reaches (for example including -3 for 2ˣ - 3).
- Using a model outside its context without comment, such as negative time or a population that never stops growing.
- Using f(a + 1) = f(a) + 1 as if the rule were always additive.

For criteria in practice, see [criteria in practice](/resources/ib-myp-mathematics-criteria-in-practice/): explain your reasoning and state what a result means in context.

## Official syllabus

Source: *Mathematics guide* of the Middle Years Programme, International Baccalaureate Organization; first assessment 2022. Section used: the framework for thinking with models.
