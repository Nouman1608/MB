---
title: "OCR A Level Mathematics A: Numerical methods: locating roots, iteration, Newton-Raphson and numerical integration (H240) -- Practice Questions"
seoTitle: "OCR A Level Maths A Numerical Methods Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Numerical methods: locating roots, iteration, Newton-Raphson and numerical integration"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 122
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "numerical-methods-ocr-alevel-maths"
description: "Original practice questions with worked answers on sign change, iteration, Newton-Raphson and the trapezium rule for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow section 1.09, Numerical Methods, of the OCR A Level Mathematics A specification (H240, Version 3.1, August 2026, for first assessment in 2018). All of 1.09 is Stage 2, so it is **A Level only**. Read the [study guide](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton/) first and keep the [revision notes](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton-revision-notes/) beside you. The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/) and the printable list is the [checklist](/checklists/ocr/a-level/mathematics/). The [free diagnostics](/diagnostics/) are a good warm-up. Angles are in radians.

## Questions

**1.** The equation x + ln x = 4 has one root, α.
**(a)** Show that α lies between 2 and 3. **[2]**
**(b)** Show that α = 2.93 correct to 2 decimal places. **[2]**

**2.** f(x) = (3x − 4)/(x − 2).
**(a)** Show that f(1) and f(3) are both positive, but that f(x) = 0 has a root between 1 and 3. **[2]**
**(b)** A student evaluates f(1.9) and f(2.1) and says "there is a sign change, so there is a root between 1.9 and 2.1". Explain the error. **[2]**

**3.** The equation x³ + 4x − 10 = 0 has a root α near 1.56.
**(a)** Show that the equation can be written x = 10/(x² + 4). **[1]**
**(b)** Use xₙ₊₁ = 10/(xₙ² + 4) with x₁ = 1.5 to find x₂, x₃ and x₄, correct to 4 d.p.. **[2]**
**(c)** Find g′(x) for g(x) = 10/(x² + 4). Use g′(α) to explain what the iteration does and describe the cobweb or staircase diagram. **[3]**

**4.** An iteration is xₙ₊₁ = (xₙ² + 6)/5.
**(a)** Show that the limit of a convergent sequence must be 2 or 3. **[1]**
**(b)** Find g′(x) and decide which of the two values the iteration can approach. **[3]**
**(c)** With x₁ = 2.5, find x₂ and x₃ and describe the diagram. **[1]**

**5.** f(x) = eˣ + 2x − 6. Use Newton-Raphson with x₁ = 1.5 to find x₂ and x₃, correct to 4 d.p.. **[4]**

**6.** f(x) = x³ − 3x + 3.
**(a)** Find f′(x) and explain why Newton-Raphson cannot be used with x₁ = 1. **[2]**
**(b)** Use x₁ = 0 to find x₂, and explain why the method then fails. **[2]**
**(c)** Use x₁ = −2 to find x₂ and x₃ correct to 4 d.p.. **[2]**

**7.** I = ∫ (1/x) dx from 1 to 5.
**(a)** Estimate I by applying the trapezium rule to 4 strips. **[3]**
**(b)** State, with a reason, whether your answer is an overestimate or an underestimate. **[2]**
**(c)** With the same 4 strips, use rectangles to give upper and lower bounds on I. **[3]**

**8.** A river is 12 m wide. Its depth, in metres, is measured every 2 m across: 0, 1.1, 1.9, 2.4, 2.2, 1.4, 0.
**(a)** Use the trapezium rule to estimate the cross-sectional area. **[3]**
**(b)** The water flows at 0.8 m per second. Estimate the volume passing per second. **[1]**
**(c)** Suggest how to make the area estimate more reliable. **[1]**

**9.** I = ∫ sin x dx from 0 to π/2.
**(a)** Find the trapezium rule estimate with 2 strips, in exact form and correct to 4 d.p.. **[3]**
**(b)** Find the estimate with 4 strips, correct to 4 d.p.. **[2]**
**(c)** Given that I = 1, explain why both estimates are too small, and comment on the change in the error. **[2]**

**10.** The water level h metres in a reservoir, t hours after 06:00, is modelled by h = 3 + 0.2t + 1.5 sin(0.5t). A warning is raised when h first reaches 5 metres.
**(a)** Show that the warning time satisfies f(t) = 0, where f(t) = 0.2t + 1.5 sin(0.5t) − 2, and that it lies between t = 2 and t = 3. **[2]**
**(b)** The equation is rearranged as t = 2 arcsin[(2 − 0.2t)/1.5]. The gradient of the right-hand side is −0.267/√(1 − [(2 − 0.2t)/1.5]²). Show that this iteration will not converge to the root. **[3]**
**(c)** Use Newton-Raphson with t₁ = 3 to find t₂ and t₃, correct to 4 d.p.. **[2]**
**(d)** Show that the root is 2.69 to 2 decimal places, and give the clock time of the warning to the nearest minute. **[3]**

## Answers

**1. (a)** Let f(x) = x + ln x − 4. f(2) = 2 + 0.6931 − 4 = −1.3069 [1]. f(3) = 3 + 1.0986 − 4 = 0.0986. The function is continuous and its sign changes, which gives 2 < α < 3 [1].
**(b)** f(2.925) = −0.0017 [1] and f(2.935) = 0.0117. The sign change means 2.925 < α < 2.935, so **α = 2.93** to 2 decimal places [1].
*Examiner insight:* Quote the values and say that f is continuous; a part (b) that tests only 2.93 itself does not show which way the rounding goes.

**2. (a)** f(1) = (−1)/(−1) = 1 and f(3) = 5/1 = 5, both positive [1]. f(4/3) = (4 − 4)/(−2/3) = **0**, so 4/3 is a root in the interval [1].
**(b)** f has a vertical asymptote at x = 2, so it is not continuous on [1.9, 2.1] [1]. The sign change is the jump from −17 (at 1.9) to +23 (at 2.1), not a crossing of the axis, and **there is no root there** [1].
*Examiner insight:* Naming the asymptote and the failed continuity condition is the explanation; "the function is undefined" alone does not say why a sign change was misleading.

**3. (a)** x³ + 4x = 10, so x(x² + 4) = 10 and **x = 10/(x² + 4)** [1].
**(b)** x₂ = 10/(2.25 + 4) = **1.6000** [1]. x₃ = **1.5244**, x₄ = **1.5813** [1].
**(c)** g′(x) = −20x/(x² + 4)² [1]. At α = 1.5568, g′(α) = −0.755 [1]. Since −1 < g′(α) < 0, the iteration converges, but slowly, with values alternating either side of α. The diagram is an **inward cobweb** [1].
*Examiner insight:* Evaluate g′ at the root, not at x₁, and give its sign: negative means a cobweb and positive a staircase.

**4. (a)** A limit L satisfies L = (L² + 6)/5, so L² − 5L + 6 = 0 and L = **2 or 3** [1].
**(b)** g′(x) = 2x/5 [1]. At 2, g′ = 0.8, so |g′| < 1 and the iteration can converge to 2 [1]. At 3, g′ = 1.2 > 1, so it cannot converge to 3 and moves away [1].
**(c)** x₂ = (6.25 + 6)/5 = **2.45** and x₃ = **2.4005**. The values step down towards 2, so this is a **staircase** [1].
*Examiner insight:* Link each root to its own value of g′; a single statement about "the iteration" misses that one rearrangement can converge to one root and not the other.

**5.** f′(x) = eˣ + 2 [1]. f(1.5) = 1.4817 and f′(1.5) = 6.4817, so x₂ = 1.5 − 1.4817/6.4817 [1] = **1.2714** [1]. Then x₃ = 1.2714 − 0.1087/5.5659 = **1.2519** [1].
*Examiner insight:* Write the formula with the functions substituted before you use numbers; keep unrounded values for x₂ when computing x₃.

**6. (a)** f′(x) = 3x² − 3 [1]. f′(1) = 0, so the formula divides by zero: the tangent at x = 1 is horizontal and never meets the axis [1].
**(b)** x₂ = 0 − 3/(−3) = **1** [1]. Then x₃ would need f′(1) = 0, so the method fails [1].
**(c)** x₂ = −2 − 1/9 = **−2.1111** [1]. x₃ = **−2.1038** [1].
*Examiner insight:* A start that is not itself stationary can still lead to a stationary point on the next step, so check f′ at every iterate.

**7. (a)** h = 1, ordinates 1, 0.5, 0.3333, 0.25, 0.2 [1]. T = 0.5 × [1 + 0.2 + 2(0.5 + 0.3333 + 0.25)] [1] = **1.683** [1].
**(b)** f″(x) = 2/x³ > 0 on the interval, so the curve is convex and the chords lie above it: **overestimate** [2].
**(c)** The curve is decreasing, so left ends give the upper bound: 1 + 0.5 + 0.3333 + 0.25 = **2.083** [1]. Right ends give the lower bound: 0.5 + 0.3333 + 0.25 + 0.2 = **1.283** [1]. So 1.283 < I < 2.083, and the trapezium value is their mean [1].
*Examiner insight:* An over or under claim is stronger with its reason: state that the curve is convex and that the chords therefore lie above it.

**8. (a)** h = 2 [1]. Area ≈ (2/2) × [0 + 0 + 2(1.1 + 1.9 + 2.4 + 2.2 + 1.4)] [1] = **18.0 m²** [1].
**(b)** 18.0 × 0.8 = **14.4 m³ per second** [1].
**(c)** Measure the depth at closer intervals, so each strip follows the river bed more closely [1].
*Examiner insight:* Carry units through a context answer; giving 14.4 with no unit leaves the answer incomplete.

**9. (a)** h = π/4, ordinates 0, √2/2, 1 [1]. T = (π/8)[0 + 1 + 2(√2/2)] [1] = **(π/8)(1 + √2) = 0.9481** [1].
**(b)** h = π/8; ordinates 0, 0.3827, 0.7071, 0.9239, 1 [1]. T = (π/16)[1 + 2(2.0137)] = **0.9871** [1].
**(c)** sin x is concave on this interval (f″ = −sin x < 0), so the chords lie below the curve [1]. The error falls from 0.0519 to 0.0129, about a quarter, when the strips are halved [1].
*Examiner insight:* Show the exact form first when asked; a decimal alone does not show the structure of the working.

**10. (a)** Setting h = 5 gives 0.2t + 1.5 sin(0.5t) = 2, so f(t) = 0 [1]. f(2) = −0.338 and f(3) = 0.096; f is continuous with a sign change, which places the root between 2 and 3 [1].
**(b)** At the root t ≈ 2.69, (2 − 0.2t)/1.5 = 0.975 [1], and √(1 − 0.975²) = 0.223 [1]. So g′ = −0.267/0.223 = −1.19, which has magnitude greater than 1, so the iteration diverges [1].
**(c)** f′(t) = 0.2 + 0.75 cos(0.5t) [1]. t₂ = 3 − 0.0962/0.2531 = **2.6197**, and t₃ = **2.6879** [1].
**(d)** f(2.685) = −0.0019 and f(2.695) = 0.0018, so 2.685 < t < 2.695 and **t = 2.69** to 2 decimal places [2]. 0.69 hours is 41 minutes, so the warning is at about **08:41** [1].
*Examiner insight:* Part (b) needs the numerical value of the gradient at the root and a statement comparing its magnitude with 1; saying "it looks unstable" does not support the conclusion.

## Where marks are usually lost

- Showing a sign change without saying that the function is continuous.
- Testing 2.9 and 3.0 to justify a root to 2 decimal places instead of 2.925 and 2.935.
- Concluding that there is no root because the signs at the ends agree.
- Judging convergence from the first few terms, not from g′ at the root.
- Rounding intermediate values in an iteration and then reporting a last digit that is wrong.
- Forgetting that Newton-Raphson needs f′ and substituting f in both places.
- Doubling the first and last ordinates in the trapezium rule.
- Giving "overestimate" with no mention of the curve's shape or the sign of f″.
- Swapping upper and lower rectangle bounds for a decreasing function.

## Next steps

- Recap with the [revision notes](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton-revision-notes/).
- Re-read the [study guide](/resources/ocr-a-level-mathematics-numerical-methods-locating-roots-iteration-newton/).
- Course page: [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/) and the [checklist](/checklists/ocr/a-level/mathematics/).
- Find weak spots with the [free diagnostics](/diagnostics/).
- [Book a free trial class](/trial/).

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Section 1.09 Numerical Methods, 1.09a to 1.09g.
