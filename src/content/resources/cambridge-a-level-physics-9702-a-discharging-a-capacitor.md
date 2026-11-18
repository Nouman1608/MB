---
title: "Cambridge A Level Physics (9702): Discharging a capacitor"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-discharging-a-capacitor"
description: "A focused guide to 19.3 Discharging a capacitor in Cambridge A Level Physics 9702: V, Q and I against time graphs, τ = RC, x = x₀e^(−t/RC) and finding τ from data."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **19.3 Discharging a capacitor** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Capacitance study guide](/resources/a-physics-capacitance/) introduces the whole of Topic 19 and states the exponential decay equation; this page goes further into the discharge outcomes alone: why the decay is exponential, what each feature of the three graphs means, the four ways of finding the time constant, and how to rearrange the equation to find a time. For quick recall use the [Discharging a capacitor revision notes](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-revision-notes/), and for exam-style questions the [Discharging a capacitor practice questions](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-practice/).

## What 19.3 asks you to do

The syllabus lists three outcomes. Candidates should be able to:

- **analyse graphs of the variation with time of potential difference, charge and current for a capacitor discharging through a resistor**
- **recall and use τ = RC for the time constant for a capacitor discharging through a resistor**
- **use equations of the form x = x₀e^(−t/RC) where x could represent current, charge or potential difference** for a capacitor discharging through a resistor

Note the scope: the subtopic is about **discharging**. Charging curves are not part of these outcomes, so the analysis below is all for discharge.

## Why the decay is exponential

Consider a capacitor C, charged to p.d. V₀, connected across a resistor R at t = 0. At any later instant:

1. The p.d. across the resistor equals the p.d. across the capacitor (they are in parallel, and there is no other component in the loop). So V = Q/C.
2. The current through the resistor is I = V/R = Q/(RC).
3. That current is the rate at which charge leaves the capacitor.

So the rate of loss of charge is **proportional to the charge remaining**. A large charge drives a large current and falls quickly; as the charge falls, the current falls and the charge drains more slowly. Any quantity that decreases at a rate proportional to its own size decays exponentially, so:

```
Q = Q₀ e^(−t/RC)
```

Because V = Q/C and I = V/R are both proportional to Q, the p.d. and the current decay in exactly the same way, with the **same time constant**:

```
V = V₀ e^(−t/RC)        I = I₀ e^(−t/RC)        where I₀ = V₀/R
```

## The time constant τ = RC

The product RC has the unit of time: an ohm is a volt per ampere and a farad is a coulomb per volt, so Ω × F = (V A⁻¹)(C V⁻¹) = C A⁻¹ = s.

Substituting t = RC into the equation gives x = x₀e⁻¹ = 0.37x₀. So **τ is the time for the charge, p.d. or current to fall to 1/e (about 37%) of its initial value**. It is a property of the circuit, not of how much charge the capacitor started with: a capacitor charged to 6 V and one charged to 12 V, in the same circuit, both take the same time to fall to 37% of their starting values.

Useful multiples:

| Time elapsed | Fraction remaining |
|---|---|
| τ | 0.37 |
| 2τ | 0.14 |
| 3τ | 0.050 |
| 5τ | 0.0067 (under 1%) |
| t½ = τ ln 2 = 0.693τ | 0.50 |

The quantity never reaches zero in a finite time, but after about 5τ it is negligible for most purposes.

## Analysing the three graphs

The V–t, Q–t and I–t graphs for discharge are all decaying exponential curves of the same shape. What you are asked to read from each differs:

- **Equal time intervals give equal fractional falls.** If the p.d. falls from 12 V to 6 V in 3.0 s, it will fall from 6 V to 3 V in the next 3.0 s. Checking this "constant ratio" property on a graph is the standard way to show a decay is exponential.
- **Gradient of the Q–t graph is the current.** At t = 0 the gradient has magnitude Q₀/RC = I₀. If you draw the tangent at t = 0, it meets the time axis at t = RC. This gives another way to find τ from a graph.
- **Area under the I–t graph is the charge that has flowed.** The total area under the complete curve equals Q₀ = CV₀.
- **Direction of the current.** During discharge, current flows out of the positive plate and round through the resistor, the opposite way to the charging current. If a graph shows charging current as positive, the discharge current is drawn negative (a curve rising towards zero from below).
- **Energy decays faster.** Stored energy is ½CV², so W = W₀e^(−2t/RC). The energy falls to 37% in τ/2, not τ.

## Four ways to find τ

1. **From the components:** τ = RC.
2. **The 37% point:** read the time at which the quantity has fallen to 0.37 of its initial value.
3. **Half-life:** read the time to fall to half, t½, and use τ = t½ / ln 2.
4. **Logarithmic graph:** ln x = ln x₀ − t/RC, so a graph of ln V (or ln Q or ln I) against t is a straight line of gradient −1/RC.

The tangent-at-zero method described above is a fifth option for a graph, but it is the least precise because drawing a tangent to a curve introduces error.

## Rearranging for time

Take natural logarithms of x = x₀e^(−t/RC):

```
t = RC ln(x₀ / x)
```

Keep the fraction the right way up: x₀/x is greater than 1, so t comes out positive. Most calculator errors come from leaving out the minus sign when taking logs of the original form, which gives a negative time.

## Worked example 1: a timing circuit

A 470 μF capacitor charged to 12 V discharges through a 10 kΩ resistor. Calculate **(a)** the time constant, **(b)** the p.d. and the current after 3.0 s, **(c)** the time taken for the p.d. to fall to 2.0 V.

```
(a) τ = RC = 10 × 10³ × 470 × 10⁻⁶ = 4.7 s

(b) V = 12 e^(−3.0/4.7) = 12 × 0.528 = 6.3 V
    I = V/R = 6.34 / 10 × 10³ = 6.3 × 10⁻⁴ A
    (or I₀ = 12/10 000 = 1.2 mA, then I = 1.2 e^(−3.0/4.7) mA)

(c) t = RC ln(V₀/V) = 4.7 × ln(12/2.0) = 4.7 × ln 6 = 8.4 s
```

*Annotation.* In (b), the current at 3.0 s can be found either from V/R at that instant or from its own exponential; the two must agree, and checking this is quick. In (c), the answer is less than 2τ because 2.0 V is more than 14% of 12 V.

## Worked example 2: finding τ from data

A capacitor of 220 μF discharges through an unknown resistor. Readings show the p.d. falling from 8.0 V to 2.0 V in 6.0 s. Determine the resistance.

```
8.0 V → 4.0 V → 2.0 V is two halvings, so t½ = 3.0 s
τ = t½ / ln 2 = 3.0 / 0.693 = 4.33 s
R = τ / C = 4.33 / 220 × 10⁻⁶ = 1.97 × 10⁴ Ω ≈ 20 kΩ
```

*Annotation.* Spotting that 8.0 → 2.0 is two half-lives saves a logarithm. If the numbers do not halve neatly, use t = RC ln(V₀/V) directly: 6.0 = RC ln 4, so RC = 6.0/1.386 = 4.33 s, the same answer.

## Worked example 3: testing for exponential decay

A data-logger records the p.d. across a discharging capacitor every 10 s: 9.0, 5.5, 3.3, 2.0, 1.2 V. Show that the decay is exponential and find τ.

Ratios of successive readings: 5.5/9.0 = 0.61, 3.3/5.5 = 0.60, 2.0/3.3 = 0.61, 1.2/2.0 = 0.60. The ratio is constant for equal time intervals, so the decay is exponential.

```
e^(−10/RC) = 0.607  →  10/RC = −ln 0.607 = 0.50  →  RC = 20 s
```

*Annotation.* Plotting ln V against t would give ln values 2.20, 1.70, 1.19, 0.69, 0.18: a straight line of gradient −0.050 s⁻¹, so RC = 1/0.050 = 20 s. Either method earns the marks if each step is shown.

## Changing R or C

- Two equal resistors in **parallel** halve R and halve τ: the capacitor discharges twice as fast.
- Two equal capacitors in **parallel** double C and double τ: twice the charge must flow through the same resistor.
- A voltmeter connected across a charged capacitor provides its own discharge path. With a 1000 μF capacitor and a voltmeter of resistance 10 MΩ, τ = 1.0 × 10⁴ s, so the reading falls only slowly; a low-resistance meter would discharge the capacitor quickly and give misleading readings.

## Common mistakes

- **Treating τ as the time for complete discharge.** It is the time to fall to 37%.
- **Using RC for the half-life.** The half-life is 0.693RC.
- **Forgetting that V, Q and I all share one time constant.**
- **Dropping the minus sign** in the exponent, giving growth instead of decay.
- **Mixing kΩ and μF** without converting: 10 kΩ × 470 μF is 4.7 s, not 4700 s.
- **Reading the gradient of a ln V–t graph as RC** instead of −1/RC.

## Exam technique for the command words

- **Define** or **state** (the time constant): the time for the charge (or p.d. or current) to fall to 1/e, about 0.37, of its initial value; and τ = RC.
- **Show that** a decay is exponential: calculate at least three ratios for equal time intervals and comment that they are constant.
- **Calculate** or **determine**: write x = x₀e^(−t/RC) or t = RC ln(x₀/x), convert prefixes, and give a unit.
- **Sketch**: start at x₀ on the axis, mark x₀/e at t = RC, and make the curve approach the time axis without touching it.
- **Explain** (why the current decreases): as charge leaves, the p.d. across the capacitor and the resistor falls, so I = V/R falls.

## Related resources

- [Capacitance study guide](/resources/a-physics-capacitance/) — the whole of Topic 19
- [Discharging a capacitor revision notes](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-revision-notes/)
- [Discharging a capacitor practice questions](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-practice/)
- [Energy stored in a capacitor study guide](/resources/cambridge-a-level-physics-9702-a-energy-stored-in-a-capacitor/) — the previous subtopic
- [Rectification and smoothing study guide](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing/) — where discharge through a load smooths a rectified output

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
