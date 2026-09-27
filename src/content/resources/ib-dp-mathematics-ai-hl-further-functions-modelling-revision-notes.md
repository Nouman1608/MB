---
title: "IB DP Mathematics: Applications and Interpretation -- Composite and inverse functions, transformations, further models and logarithmic scales (HL) Revision Notes"
seoTitle: "IB Maths AI HL Functions, Transformations & Models Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Composite and inverse functions, transformations, further models and logarithmic scales (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 2.7
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-7"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-8"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-functions"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-2-10"
description: "Condensed IB Maths AI HL revision notes for sections 2.7-2.10: inverses, transformations, logistic and log models, linearizing data, with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

For full explanations and longer worked examples, read the [study guide for this unit](/resources/ib-dp-mathematics-ai-hl-further-functions-modelling/) first.

These revision notes cover IB Diploma Programme Mathematics: Applications and Interpretation, aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021. They condense syllabus sections AHL 2.7–2.10, which are HL only. They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 sessions.

Use them with the [practice questions](/resources/ib-dp-mathematics-ai-hl-further-functions-modelling-practice/), the [Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/) and the [printable checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/).

## Definitions

- **Composite function:** (f ∘ g)(x) = f(g(x)). Apply g first, then f.
- **Inverse function f⁻¹:** undoes f, so (f ∘ f⁻¹)(x) = (f⁻¹ ∘ f)(x) = x. It exists only when f is one-to-one.
- **Domain restriction:** limiting the domain of a many-to-one function so that it becomes one-to-one and has an inverse.
- **Half-life:** the time for an exponentially decaying quantity to halve.
- **Phase shift:** the horizontal translation c in a sin(b(x − c)) + d.
- **Carrying capacity:** the horizontal asymptote y = L of a logistic model.
- **Piecewise model:** a function defined by different rules on different intervals of its domain.
- **Semi-log graph:** log y plotted against x. **Log-log graph:** log y plotted against log x.

## Key results

| Topic | Result |
|---|---|
| Inverse | Domain of f⁻¹ = range of f; range of f⁻¹ = domain of f |
| Inverse graph | Reflection of y = f(x) in y = x |
| Translation | y = f(x − a) + b: right a, up b |
| Reflections | y = −f(x) in the x-axis; y = f(−x) in the y-axis |
| Vertical stretch | y = p f(x), scale factor p |
| Horizontal stretch | y = f(qx), scale factor 1/q |
| Half-life | A = A₀e^(−kt) with k = ln 2 / (half-life); or A = A₀(0.5)^(t/half-life) |
| Log model | f(x) = a + b ln x |
| Sinusoidal (radians) | f(x) = a sin(b(x − c)) + d; period 2π/b; amplitude \|a\|; principal axis y = d |
| Logistic | f(x) = L/(1 + Ce^(−kx)); L, C, k > 0; asymptote y = L |
| Exponential, linearized | y = ka^x ⇒ ln y = ln k + x ln a |
| Power, linearized | y = ax^b ⇒ ln y = ln a + b ln x |

## Method in steps

**Finding an inverse**

1. Write y = f(x).
2. Make x the subject. If you take a square root, choose the sign that matches the restricted domain.
3. Write f⁻¹(x) and state its domain (the range of f).

**Describing a composite transformation from y = f(x) to y = p f(q(x − a)) + b**

1. Horizontal stretch, scale factor 1/q (and reflection in the y-axis if q < 0).
2. Horizontal translation by a.
3. Vertical stretch, scale factor |p| (and reflection in the x-axis if p < 0).
4. Vertical translation by b.

The vertical steps must be stretch then translate. Swapping them gives p(f(x) + b), which is a different graph.

**Fitting a sinusoidal model from max and min**

1. a = (max − min)/2 and d = (max + min)/2.
2. b = 2π/period.
3. For a sine model, the maximum occurs where b(x − c) = π/2. Solve for c.

**Fitting a logistic model**

1. Read L from the carrying capacity.
2. Use the initial value: f(0) = L/(1 + C), so C = L/f(0) − 1.
3. Use a second point to find k, taking ln of both sides.

**Choosing between exponential and power by linearizing**

1. Find r for (x, ln y) and for (ln x, ln y) on your GDC.
2. The pair with |r| closer to 1 is the better linear fit.
3. Run the linear regression on that pair, then convert: exponential gives k = e^(intercept), a = e^(gradient); power gives a = e^(intercept), b = gradient.

## Small worked reminders

- **Composite in context:** A conversion c(d) = 0.92d followed by a fee k(e) = 0.98e − 2 gives (k ∘ c)(d) = 0.9016d − 2.
- **Restricted inverse:** f(x) = (x − 2)² + 1, x ≥ 2 has f⁻¹(x) = 2 + √(x − 1), x ≥ 1.
- **Point tracking:** (4, 6) on y = f(x) maps to (2, 17) on y = 3f(x + 2) − 1.
- **Half-life:** 80 mg with half-life 5.2 years leaves 80(0.5)^(12/5.2) = 16.2 mg after 12 years.
- **Continuity:** 4 + 1.5d (d < 10) and 1.2d + k (d ≥ 10) join when 19 = 12 + k, so k = 7.
- **Semi-log reading:** log₁₀ y = 0.3x + 1.3 gives y = 10^1.3 × (10^0.3)^x = 20.0 × 2.00^x.

## Must-know distinctions

- **f(x − a) vs f(x) − a:** the first moves the graph right a units; the second moves it down a units.
- **p f(x) vs f(qx):** a vertical stretch by p, against a horizontal stretch by 1/q.
- **Exponential vs logistic:** exponential growth has no upper limit; logistic growth levels off at L.
- **Logarithmic vs logistic:** a + b ln x keeps increasing without a bound (for b > 0), only more and more slowly. A logistic curve approaches L.
- **Semi-log vs log-log:** a straight semi-log graph means exponential; a straight log-log graph means power.
- **Degrees vs radians:** HL sinusoidal models are in radians unless a degree symbol appears, as in sin x°. Period 2π/b, not 360°/b.
- **Inverse vs reciprocal:** f⁻¹(x) is the inverse function, not 1/f(x).

## Quick self-test

1. f(x) = 2x + 1 and g(x) = x². Find (f ∘ g)(3) and (g ∘ f)(3).
2. f(x) = 5x − 3. Find f⁻¹(x) and f⁻¹(12).
3. f(x) = (x + 4)² − 1, x ≥ −4. Find f⁻¹(x) and its domain.
4. The point (2, 5) lies on y = f(x). Find its image on (a) y = f(x − 3) − 4, (b) y = f(x/2).
5. A = A₀e^(−0.0462t), t in days. Find the half-life to 3 s.f.
6. State the period of y = 4 sin((π/6)(t − 2)) + 10.
7. f(x) = 800/(1 + 3e^(−0.5x)). State f(0), the carrying capacity, and find f(2) to 3 s.f.
8. f(x) = 3x for x < 2 and f(x) = ax − 4 for x ≥ 2. Find a so that f is continuous.
9. Find log₁₀ 0.00025 to 3 s.f.
10. Data satisfy ln y = 0.7 ln x + 1.2. Write y in the form ax^b.
11. Data satisfy log₁₀ y = 0.25x + 0.9. Write y in the form ka^x.
12. A sinusoidal model has maximum 15 and minimum 3. Find |a| and d.

### Answers

1. (f ∘ g)(3) = f(9) = **19**; (g ∘ f)(3) = g(7) = **49**.
2. y = 5x − 3 ⇒ x = (y + 3)/5, so **f⁻¹(x) = (x + 3)/5**; f⁻¹(12) = **3**.
3. **f⁻¹(x) = −4 + √(x + 1)**, domain **x ≥ −1** (the range of f).
4. (a) **(5, 1)**; (b) **(4, 5)**.
5. Half-life = ln 2/0.0462 = **15.0 days**.
6. b = π/6, so period = 2π ÷ (π/6) = **12**.
7. f(0) = 800/4 = **200**; carrying capacity **800**; f(2) = 800/(1 + 3e^(−1)) = **380**.
8. At x = 2: 3(2) = 2a − 4, so **a = 5**.
9. **−3.60**.
10. a = e^1.2 = 3.32, b = 0.7: **y = 3.32x^0.7**.
11. k = 10^0.9 = 7.94, a = 10^0.25 = 1.78: **y = 7.94 × 1.78^x**.
12. **|a| = 6, d = 9**.

## Where marks are usually lost

- Writing f(g(x)) when the question asks for (g ∘ f)(x). Check which function is inside.
- Leaving out the domain of f⁻¹, or giving the domain of f instead of the range of f.
- Keeping ± in an inverse when the restricted domain fixes the sign of the root.
- Describing y = f(x + 3) as "translate 3 right". It is 3 units left.
- Writing "stretch by 2" for y = f(2x). The scale factor is 1/2, and it is horizontal.
- Describing a transformation without naming its type, direction and scale factor or vector. "Moved up" earns less than "translation by the vector (0, 4)".
- Working a radian model with the GDC in degree mode, which gives wrong times with no warning.
- Rounding k in a half-life or logistic model to 2 s.f. before substituting, so the final answer is outside 3 s.f. accuracy.
- Reporting e^(gradient) as b in a power model. In a log-log fit, b is the gradient itself.
- Making a prediction far outside the data range without commenting on extrapolation.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021. Sections AHL 2.7, 2.8, 2.9 and 2.10. For course-wide context see the [syllabus guide](/resources/ib-dp-mathematics-applications-and-interpretation-syllabus-guide/) and [exam preparation](/resources/ib-dp-mathematics-applications-and-interpretation-exam-preparation/) pages.
