---
title: "OCR A Level Mathematics A: Differential equations: separable equations and their interpretation (H240) -- Practice Questions"
seoTitle: "OCR A Level Maths A Separable DEs Practice Questions"
resourceType: "practice-questions"
subject: "mathematics"
level: ["a-levels"]
topic: "Differential equations: separable equations and their interpretation"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 121
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "integration-ocr-alevel-maths"
description: "Eleven original practice questions with worked answers on separable differential equations, growth and decay and modelling, for OCR A Level Mathematics A."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions follow the OCR A Level Mathematics A specification (Version 3.1, August 2026, for first assessment in 2018), sections 1.08k and 1.08l. Both are Stage 2, so they are A Level only. Learn the methods from the [study guide](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their/) or the [revision notes](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their-revision-notes/) first. The course page is [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/) and the printable list is the [checklist](/checklists/ocr/a-level/mathematics/). The [free diagnostics](/diagnostics/) can show where to start.

## Questions

**1.** Find the general solution of dy/dx = 6√x − 2/x². **[3]**

**2.** Given that x > 0 and y > 0, find the general solution of dy/dx = y/x². **[4]**

**3.** Solve dy/dx = 3eˣ/y², given that y = 3 when x = 0. Hence find y when x = ln 2, giving your answer to 3 significant figures. **[5]**

**4.** Solve dy/dx = 4x − 2xy, given that y = 5 when x = 0. Give y in terms of x. **[5]**

**5.** Solve dy/dx = e⁻ʸ sin x, given that y = 0 when x = π/2. State the values of x for which your solution is valid on the interval 0 ≤ x ≤ 2π. **[5]**

**6.** A radioactive sample has mass m grams after t days. The rate of decrease of m is proportional to m, so dm/dt = −km with k > 0. Initially m = 80.

**(a)** Solve the equation to show that m = 80e^(−kt). **[2]**
**(b)** After 5 days the mass is 62 g. Find k to 3 significant figures. **[2]**
**(c)** Find the half-life of the sample. **[2]**

**7.** The population P thousand of a town t years after 2020 is modelled by dP/dt = 0.03P, with P = 120 when t = 0.

**(a)** Find P in terms of t. **[2]**
**(b)** Find the time for the population to double. **[2]**
**(c)** Use the model to predict the population in 2070 and give one reason the model may be unreliable for such a long period. **[2]**

**8.** A thermometer at 5 °C is placed in a room kept at 21 °C. Its temperature T °C after t minutes satisfies dT/dt = k(21 − T), where k is a positive constant.

**(a)** Solve the equation to show that T = 21 − 16e^(−kt). **[3]**
**(b)** The reading is 12 °C when t = 4. Find k, then the time for the reading to reach 20 °C. **[3]**

**9.** A trolley moves in a straight line. Its velocity v m s⁻¹ at time t seconds satisfies dv/dt = −kv², where k > 0. When t = 0, v = 12, and when t = 5, v = 8.

**(a)** Show that 1/v = kt + 1/12. **[3]**
**(b)** Find k and hence show that v = 120/(t + 10). **[2]**
**(c)** Find the velocity when t = 15 and the distance travelled in the first 15 seconds. **[3]**

**10.** A small sphere falls through a liquid. Its speed v m s⁻¹ after t seconds satisfies dv/dt = 9.8 − 0.35v, and v = 0 when t = 0.

**(a)** Show that v = 28(1 − e^(−0.35t)). **[6]**
**(b)** State the terminal velocity. **[1]**
**(c)** Find the time for the sphere to reach 20 m s⁻¹. **[2]**
**(d)** Does the sphere ever reach its terminal velocity according to this model? **[1]**

**11.** A tank empties through a hole in its base. Its depth h metres at time t seconds satisfies dh/dt = −0.25√h, with h = 25 when t = 0.

**(a)** Solve the equation to find h in terms of t. **[4]**
**(b)** Find the time at which the tank is empty. **[1]**
**(c)** Find the depth when t = 16. **[1]**
**(d)** Explain why the solution cannot describe the tank for t greater than your answer to part (b). **[2]**

## Answers

**1.** 6x^(1/2) integrates to 4x^(3/2) [1]; −2x⁻² integrates to 2x⁻¹ [1]; add the constant: **y = 4x^(3/2) + 2/x + c** [1] **[3]**
*Examiner insight:* the constant is easy to forget when there is no initial condition; a general solution without it is incomplete.

**2.** Separate: (1/y) dy = x⁻² dx [1]. Integrate: ln y = −1/x + c [1]. Exponentiate: y = eᶜe^(−1/x) [1]. So **y = Ae^(−1/x)**, where A is a positive constant [1] **[4]**
*Examiner insight:* writing y = e^(−1/x) + c is a common slip; the constant must multiply, so keep it as A.

**3.** y² dy = 3eˣ dx [1]. y³/3 = 3eˣ + c [1]. At (0, 3): 9 = 3 + c, so c = 6 [1]. y³ = 9eˣ + 18, so **y = ∛(9eˣ + 18)** [1]. At x = ln 2: y = ∛36 = **3.30** [1] **[5]**
*Examiner insight:* substituting the condition before integrating, or forgetting the factor 3 when multiplying through by 3, are the two likeliest places to go wrong.

**4.** Factorise: dy/dx = 2x(2 − y) [1]. ∫ 1/(2 − y) dy = ∫ 2x dx [1]. −ln|2 − y| = x² + c [1]. So y − 2 = Ae^(−x²), and at (0, 5), A = 3 [1]. **y = 2 + 3e^(−x²)** [1] **[5]**
*Examiner insight:* if you do not take out the common factor you cannot separate, so the whole method is lost, not just one step.

**5.** e^y dy = sin x dx [1]. e^y = −cos x + c [1]. At (π/2, 0): 1 = 0 + c, so c = 1 [1]. **y = ln(1 − cos x)** [1]. Since 1 − cos x = 0 at x = 0 and 2π, the solution is valid for **0 < x < 2π** [1] **[5]**
*Examiner insight:* a request to state where the solution holds is looking for a reason tied to the formula, such as the logarithm needing a positive argument.

**6. (a)** ∫ 1/m dm = ∫ −k dt gives ln m = −kt + c [1]. At t = 0, m = 80, so **m = 80e^(−kt)** [1]
**(b)** 62 = 80e^(−5k), so k = ln(80/62)/5 = **0.0510** [2]
**(c)** 40 = 80e^(−kt), so t = ln 2/k = **13.6 days** [2] **[6]**
*Examiner insight:* carry k unrounded into part (c); using a rounded k can change the third significant figure.

**7. (a)** ln P = 0.03t + c [1], so **P = 120e^(0.03t)** [1]
**(b)** 240 = 120e^(0.03t), so t = ln 2/0.03 = **23.1 years** [2]
**(c)** In 2070, t = 50 and P = 120e^(1.5) = **538 thousand** (about 538 000) [1]. The model allows unlimited growth, but resources and space limit a real town [1] **[6]**
*Examiner insight:* the limitation must refer to the situation (resources, space, migration), not just say the model is unrealistic.

**8. (a)** ∫ 1/(21 − T) dT = ∫ k dt [1]. −ln|21 − T| = kt + c, so 21 − T = Ae^(−kt) [1]. At t = 0, T = 5, so A = 16 and **T = 21 − 16e^(−kt)** [1]
**(b)** 9 = 16e^(−4k), so k = ln(16/9)/4 = **0.144** [1]. For T = 20: 1 = 16e^(−kt) [1], so t = ln 16/k = **19.3 minutes** [1] **[6]**
*Examiner insight:* in a "show that" question, every line from the separation to the final form should be on the page.

**9. (a)** ∫ v⁻² dv = ∫ −k dt [1]. −1/v = −kt + c [1]. At t = 0, v = 12: c = −1/12, so **1/v = kt + 1/12** [1]
**(b)** At t = 5: 1/8 = 5k + 1/12, so 5k = 1/24 and **k = 1/120** [1]. Then 1/v = (t + 10)/120, so **v = 120/(t + 10)** [1]
**(c)** v = 120/25 = **4.8 m s⁻¹** [1]. Distance = ∫₀¹⁵ 120/(t + 10) dt = [120 ln(t + 10)] from 0 to 15 [1] = 120 ln 2.5 = **110 m** (3 s.f.) [1] **[8]**
*Examiner insight:* distance needs integration of v with respect to t; substituting t = 15 into v gives a velocity, not a distance.

**10. (a)** ∫ 1/(9.8 − 0.35v) dv = ∫ dt [1]. −(1/0.35) ln|9.8 − 0.35v| = t + c [2]. So 9.8 − 0.35v = Ae^(−0.35t) [1]. At t = 0, v = 0: A = 9.8 [1]. Then 0.35v = 9.8(1 − e^(−0.35t)), so **v = 28(1 − e^(−0.35t))** [1]
**(b)** As t → ∞, e^(−0.35t) → 0, so the terminal velocity is **28 m s⁻¹** [1]
**(c)** 20 = 28(1 − e^(−0.35t)), so e^(−0.35t) = 2/7 [1]. t = ln 3.5/0.35 = **3.58 s** [1]
**(d)** **No**: e^(−0.35t) is always positive, so v is always less than 28 and only approaches it [1] **[10]**
*Examiner insight:* the coefficient −1/0.35 from integrating 1/(a − bv) is where answers most often go wrong; check it by differentiating your answer.

**11. (a)** h^(−1/2) dh = −0.25 dt [1]. 2√h = −0.25t + c [1]. At t = 0, h = 25: c = 10 [1]. √h = 5 − t/8, so **h = (5 − t/8)²** [1]
**(b)** h = 0 when t = **40 s** [1]
**(c)** h = (5 − 2)² = **9 m** [1]
**(d)** After t = 40 the formula gives h > 0 and increasing again [1], but a draining tank cannot refill, and the original equation has no meaning once the tank is empty. So the model holds for 0 ≤ t ≤ 40 only [1] **[8]**
*Examiner insight:* squaring √h = 5 − t/8 loses the condition 5 − t/8 ≥ 0, which is the root of the limitation in part (d).

## Where marks are usually lost

- Putting a constant on both sides of the integrated equation.
- Failing to factorise first, as in question 4, so the variables cannot be separated.
- Writing y − a = e^(g(x)) + c rather than y − a = Ae^(g(x)).
- Substituting the initial condition into the differential equation instead of the integrated result.
- Using a rounded value of k in a later calculation.
- A sign error for decay: "rate of decrease" needs the minus sign in the equation.
- Vague limitations with no link to the context.
- Stopping at the solution when the question asks for a time, a limit or a distance.

## Next steps

- Revise from the [revision notes](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their-revision-notes/).
- Re-read the [study guide](/resources/ocr-a-level-mathematics-differential-equations-separable-equations-and-their/).
- Course page: [OCR A Level Mathematics](/boards/ocr/a-level/mathematics/) and the [checklist](/checklists/ocr/a-level/mathematics/).
- Try the [free diagnostics](/diagnostics/) to find your weakest topics.
- [Book a free trial class](/trial/).

## Official syllabus

OCR, *A Level Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018. Sections 1.08k and 1.08l.
