---
title: "IB DP Mathematics: Applications and Interpretation -- Further differentiation and integration, volumes of revolution and kinematics (HL) Revision Notes"
seoTitle: "IB Maths AI HL Further Calculus and Kinematics Notes"
resourceType: "revision-notes"
subject: "mathematics-applications-and-interpretation"
level: ["ib"]
topic: "Further differentiation and integration, volumes of revolution and kinematics (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Applications and Interpretation"]
syllabusSeries: "First assessments for SL and HL—2021"
order: 5.9
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-9"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-10"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-11"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-applications-and-interpretation-calculus"
    subtopic: "ib-dp-mathematics-applications-and-interpretation-5-13"
description: "Condensed IB Maths AI HL notes on differentiation rules, concavity, substitution, areas, volumes of revolution and kinematics, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "review-pending"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
---

For full explanations and longer worked examples, use the [further calculus and kinematics study guide](/resources/ib-dp-mathematics-ai-hl-further-calculus-kinematics/).

These notes cover the HL further calculus unit of IB Diploma Programme Mathematics: Applications and Interpretation. They are aligned to the IB *Mathematics: applications and interpretation guide*, first assessment 2021, syllabus sections 5.9–5.13, and everything here is HL only (AHL). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

Check your coverage against the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-applications-and-interpretation/), see the rest of the course on the [IB DP Maths AI course hub](/boards/ib/ib-dp/mathematics-applications-and-interpretation/), and test yourself with the [practice questions](/resources/ib-dp-mathematics-ai-hl-further-calculus-kinematics-practice/).

## Key definitions

- **Second derivative:** f′′(x) or d²y/dx², the derivative of the derivative.
- **Concave-up:** f′′(x) > 0. **Concave-down:** f′′(x) < 0.
- **Point of inflexion:** a point where the concavity changes.
- **Related rates:** rates of change of linked quantities, found by differentiating their connecting equation with respect to time.
- **Displacement (s):** position relative to a fixed origin; it can be negative.
- **Velocity (v):** rate of change of displacement. **Speed:** the magnitude of velocity, |v|.
- **Acceleration (a):** rate of change of velocity.
- **ẋ and ẍ:** dx/dt and d²x/dt².

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--03-concavity-inflexion.webp" width="900" height="778" alt="The cubic is shaded copper where it is concave down (x &lt; 2) and teal where it is concave up (x &gt; 2). The local maximum (1, 6) has f″ = −6, the local minimum (3, 2) has f″ = 6, and the point of inflexion (2, 4) is where f″ = 0 and changes sign, with a tangent of gradient −3 that crosses the curve." loading="lazy">
  <figcaption>A point of inflexion is where the second derivative changes sign, here at (2, 4).</figcaption>
</figure>


## Formulas

| Topic | Result |
|---|---|
| Powers | d/dx(xⁿ) = nxⁿ⁻¹, n ∈ ℚ |
| Trigonometric | d/dx(sin x) = cos x; d/dx(cos x) = −sin x; d/dx(tan x) = 1/cos²x |
| Exponential and log | d/dx(eˣ) = eˣ; d/dx(ln x) = 1/x |
| Chain rule | dy/dx = (dy/du)(du/dx) |
| Product rule | d/dx(uv) = u(dv/dx) + v(du/dx) |
| Quotient rule | d/dx(u/v) = (v(du/dx) − u(dv/dx))/v² |
| Integrals | ∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫(1/x) dx = ln\|x\| + C |
| Trig integrals | ∫sin x dx = −cos x + C; ∫cos x dx = sin x + C; ∫(1/cos²x) dx = tan x + C |
| Exponential integral | ∫eˣ dx = eˣ + C |
| Volume, x-axis | V = ∫ₐᵇ πy² dx |
| Volume, y-axis | V = ∫ₐᵇ πx² dy |
| Kinematics | v = ds/dt; a = dv/dt = d²s/dt² = v(dv/ds) |
| Displacement | ∫ v(t) dt from t₁ to t₂ |
| Total distance | ∫ \|v(t)\| dt from t₁ to t₂ |

Work in radians for all calculus with trigonometric functions.

## Method in steps

**Related rates of change**

1. Write the equation linking the quantities (for example V = (4/3)πr³).
2. Differentiate both sides with respect to t, using the chain rule.
3. Substitute the known rate and the values at that instant.
4. Solve for the unknown rate and give units. The sign tells you increasing or decreasing.

**Classifying stationary points and inflexions**

1. Solve f′(x) = 0.
2. Find f′′(x) at each solution: negative → maximum; positive → minimum; zero → test fails, so check the sign of f′(x) either side.
3. For inflexions, solve f′′(x) = 0 and check that f′′ changes sign.

**Integration by substitution**

1. Spot g(x) whose derivative g′(x) appears (up to a constant).
2. Let u = g(x); write du = g′(x) dx.
3. Rewrite the whole integral in u, including the limits if definite.
4. Integrate, then substitute back (indefinite) or evaluate with the u-limits (definite).

**Area with negative parts**

1. Find where the curve meets the axis inside the interval.
2. Integrate over each piece separately.
3. Add the absolute values, or use the GDC on ∫|f(x)| dx.

**Volume about the y-axis**

1. Rearrange to get x² in terms of y.
2. Convert the limits to y-values.
3. Evaluate π∫x² dy.

**Total distance travelled**

1. Solve v(t) = 0 to find where the direction changes.
2. Integrate v over each interval.
3. Add the absolute values, or use the GDC on ∫|v(t)| dt.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--02-related-rates-snowball.webp" width="900" height="844" alt="The radius of a snowball whose volume falls at 12 cm³ per minute is plotted against time. It starts at 5 cm, falls ever more steeply, and reaches 0 at about 43.6 minutes. The tangent at the start has gradient −3/(25π) ≈ −0.0382 cm per minute, and the surface area falls at 4.8 cm² per minute at that instant." loading="lazy">
  <figcaption>Differentiating V = (4/3)πr³ with respect to t links dV/dt to dr/dt, giving dr/dt ≈ −0.0382 cm min⁻¹.</figcaption>
</figure>


## Small worked reminders

- d/dx(e⁻²ˣ cos x) = −2e⁻²ˣ cos x − e⁻²ˣ sin x = −e⁻²ˣ(2 cos x + sin x).
- ∫ sin(5x + 2) dx = −(1/5) cos(5x + 2) + C.
- ∫ 3x²/(x³ + 4) dx = ln|x³ + 4| + C, because the numerator is the derivative of the denominator.
- Region under y = √x for 0 ≤ x ≤ 4, rotated about the x-axis: V = π∫₀⁴ x dx = 8π.
- Region between y = x² and the y-axis for 0 ≤ y ≤ 4, rotated about the y-axis: x² = y, so V = π∫₀⁴ y dy = 8π.
- A circle's radius grows at 0.5 cm s⁻¹. When r = 6: dA/dt = 2πr(dr/dt) = 2π(6)(0.5) = 6π ≈ 18.8 cm² s⁻¹.
- f(x) = x³ − 3x: f′′(x) = 6x, so the curve is concave-down for x < 0 and concave-up for x > 0, with an inflexion at (0, 0).
- If v = 3 − t, the particle is at rest at t = 3 and changes direction there. At t = 5, v = −2 and speed = 2 m s⁻¹.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--09-back-then-forward.webp" width="900" height="800" alt="The velocity v = e^(0.5t) − 3 is negative until t = 2 ln 3 ≈ 2.20 s and positive after. The backward area is −2.59 and the forward area is +3.37, so displacement is 2e² − 14 ≈ 0.778 m while total distance is about 5.96 m." loading="lazy">
  <figcaption>The particle moves back about 2.59 m then forward 3.37 m, so displacement is small but distance is larger.</figcaption>
</figure>


## Using your GDC in this unit

All three HL papers require technology, but the GDC supports the method rather than replacing it.

- **Definite integrals:** write the full integral with limits first, for example V = π∫₀² eˣ dx, then evaluate. The written integral usually carries the method mark.
- **Total distance:** enter ∫|v(t)| dt directly, or find the roots of v(t) from the graph and integrate piece by piece.
- **Areas with negative parts:** use the graph to find where the curve crosses the axis, then integrate |f(x)|.
- **Stationary points and inflexions:** the graph's maximum and minimum tools confirm your answers, but a question asking you to "show" or "justify" needs f′′ and the sign argument written out.
- **Checking derivatives:** the numerical derivative at a point is a quick check of a chain-rule or quotient-rule answer.
- **Accuracy:** store intermediate values in the GDC memory and round only the final answer to 3 significant figures.

## Must-know distinctions

- **Displacement vs distance:** displacement is ∫v dt and can be negative or zero; distance is ∫|v| dt and is never negative.
- **Velocity vs speed:** velocity has a sign for direction; speed is |v|.
- **Definite integral vs area:** a definite integral is negative where the curve is below the x-axis; an area is always positive.
- **Stationary point vs point of inflexion:** f′(x) = 0 at a stationary point; concavity changes at an inflexion. A point can be both (for example (0, 0) on y = x³).
- **x-axis vs y-axis rotation:** πy² dx with x-limits versus πx² dy with y-limits.
- **a = dv/dt vs a = v(dv/ds):** use the first when v is given in terms of t; use the second when v is given in terms of s.
- **Speeding up vs slowing down:** same signs of v and a → speeding up; opposite signs → slowing down.

## Quick self-test

1. Differentiate y = 5x^(2/5).
2. Differentiate y = ln(3x² + 1).
3. Differentiate y = x²e⁻ˣ and factorise.
4. Differentiate y = (tan x)/x.
5. Find the x-coordinates of the points of inflexion of f(x) = x⁴ − 4x³.
6. Find ∫ 1/cos²(3x) dx.
7. Find ∫ x e^(x²) dx.
8. Find ∫₀² (x − 1)³ dx and the area enclosed by y = (x − 1)³ and the x-axis for 0 ≤ x ≤ 2.
9. The region under y = x for 0 ≤ x ≤ 3 is rotated about the x-axis. Find the exact volume.
10. v = 4 − t² m s⁻¹ for 0 ≤ t ≤ 3. Find the displacement and the total distance travelled.
11. v = 2s + 3. Find the acceleration when s = 1.
12. x = cos 3t. Show that ẍ = −9x.

### Answers

1. dy/dx = 2x^(−3/5)
2. dy/dx = 6x/(3x² + 1) (chain rule)
3. dy/dx = 2xe⁻ˣ − x²e⁻ˣ = xe⁻ˣ(2 − x)
4. dy/dx = (x/cos²x − tan x)/x²
5. f′′(x) = 12x² − 24x = 12x(x − 2). f′′ changes sign at both roots, so x = 0 and x = 2.
6. (1/3) tan 3x + C
7. u = x², du = 2x dx, so the integral is (1/2)e^(x²) + C
8. ∫₀² (x − 1)³ dx = 0 (the two halves cancel). Area = 1/4 + 1/4 = 1/2
9. V = π∫₀³ x² dx = 9π
10. Displacement = ∫₀³ (4 − t²) dt = 3 m. v = 0 at t = 2; distance = 16/3 + 7/3 = 23/3 ≈ 7.67 m
11. a = v(dv/ds) = (2s + 3)(2) = 10 m s⁻²
12. ẋ = −3 sin 3t, ẍ = −9 cos 3t = −9x

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--04-substitution-same-area.webp" width="900" height="792" alt="Two graphs show the same shaded area. On the left, 3x²e^(x³) is integrated from x = 0 to 1; on the right, e^u is integrated from u = 0 to 1 after the substitution u = x³. Both areas equal e − 1 ≈ 1.72." loading="lazy">
  <figcaption>Substitution turns an integral in x into an equal-area integral in u, with the limits changed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--05-net-integral-vs-area.webp" width="900" height="764" alt="The parabola y = x² − 4x + 3 crosses the x-axis at x = 1 and x = 3. The region above the axis from 0 to 1 gives +4/3 and the region below the axis from 1 to 3 gives −4/3, so the net integral is 0 but the area is 4/3 + 4/3 = 8/3." loading="lazy">
  <figcaption>A definite integral counts area below the axis as negative, so split at the roots to find the total area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--06-volume-about-x-axis.webp" width="900" height="818" alt="The region under y = e^(x/2) from x = 0 to 2 is shaded, with its reflection shown below the axis to suggest the solid. A thin vertical slice is a disc of radius y and area πy². Adding the discs gives V = π∫₀² eˣ dx = π(e² − 1) ≈ 20.1." loading="lazy">
  <figcaption>Each thin slice of the solid is a disc of area πy², so V = π∫y² dx.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--07-bowl-about-y-axis.webp" width="900" height="878" alt="The region between y = x² and the y-axis up to y = 9 is shaded, with its mirror image in copper. A thin horizontal slice at y = 6 is a disc of radius x, where x² = y. The volume is π∫₀⁹ y dy = 81π/2 ≈ 127 cm³." loading="lazy">
  <figcaption>About the y-axis, use y-limits and write x² in terms of y.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-ai-hl-further-calculus-kinematics--08-displacement-vs-distance.webp" width="900" height="1128" alt="Two graphs share a time axis from 0 to 5 s: displacement s above and velocity v = 3(t − 1)(t − 3) below. The particle is at rest at t = 1 and t = 3. The areas under v are +4, −4 and +20, so displacement is 20 m but total distance is 28 m. At t = 2.5 s, v = −2.25 and a = 3, so the particle is slowing down." loading="lazy">
  <figcaption>Displacement adds the signed areas under v, but distance adds their sizes.</figcaption>
</figure>


## Where marks are usually lost

- Leaving out the inner derivative in the chain rule, such as d/dx(e^(4x)) written as e^(4x).
- Writing the quotient rule numerator in the wrong order, which flips the sign of the answer.
- Substituting the particular value (for example r = 5) before differentiating in a related-rates question.
- Using f′′(x) = 0 as proof of an inflexion without showing the change in concavity.
- Omitting + C, or writing ln x instead of ln|x| when x could be negative.
- Keeping x-limits after a substitution changes the variable to u.
- Reporting a net definite integral as an area when part of the region is below the axis.
- Using x-limits, or πy², when the rotation is about the y-axis.
- Giving displacement when the question asks for distance travelled, or quoting a negative speed.
- Writing a GDC answer to fewer than 3 significant figures, or rounding early and carrying the error forward.

## Frequently asked questions

**How do you find a point of inflexion in IB Maths AI HL?**
Solve f′′(x) = 0 and then check that f′′ changes sign at that point. A point where f′′(x) = 0 but the concavity does not change is not a point of inflexion.

**What is the formula for a volume of revolution about the y-axis?**
Use V = π∫x² dy, after rearranging the equation to give x² in terms of y and converting the limits to y-values. About the x-axis, use V = π∫y² dx.

**Should trigonometric calculus be done in degrees or radians?**
Work in radians for all differentiation and integration of trigonometric functions. The standard results such as d/dx(sin x) = cos x only hold in radians.

**How is acceleration written in terms of displacement?**
Acceleration can be written as a = dv/dt = d²s/dt² or as a = v(dv/ds), which is useful when velocity is given as a function of displacement.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: applications and interpretation guide*, first assessment 2021.
