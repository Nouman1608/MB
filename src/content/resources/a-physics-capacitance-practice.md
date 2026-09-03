---
title: "A Level Physics: Capacitance — Practice Questions"
resourceType: "practice-questions"
subject: "physics"
level: ["a-levels"]
topic: "Capacitance"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 19.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-capacitors-and-capacitance"
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-energy-stored-in-a-capacitor"
  - qualification: "a-level"
    topic: "a-capacitance"
    subtopic: "a-discharging-a-capacitor"
description: "Original exam-style practice questions with full worked answers on capacitance, energy stored, combinations and exponential discharge for A Level Physics."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> examination boards hold copyright in their own papers. Use these alongside the
> official past papers available free from your board.

Related: [Capacitance revision notes](/resources/a-physics-capacitance-revision-notes/)

---

## Questions

**1.** Define capacitance and state its unit. **[2]**

**2.** State how capacitors combine in series and in parallel, and note how this compares with resistors. **[3]**

**3.** Explain why the energy stored on a capacitor is ½QV and not QV. **[3]**

**4.** A 220 μF capacitor is charged to 9.0 V.

**(a)** Calculate the charge stored. **[2]**
**(b)** Calculate the energy stored. **[2]**
**(c)** It is then discharged through a 47 kΩ resistor. Calculate the time constant. **[2]**
**(d)** Calculate the charge remaining after 15 s. **[3]**
**(e)** Calculate the time taken for the charge to fall to half its initial value. **[3]**

**5.** Three capacitors of 2.0 μF, 3.0 μF and 6.0 μF are connected.

**(a)** Calculate the total capacitance in parallel. **[1]**
**(b)** Calculate the total capacitance in series. **[3]**

**6.** Explain what happens to the current during the discharge of a capacitor, and why the decay is exponential. **[3]**

**7.** A 100 μF capacitor is charged through a 2.0 kΩ resistor from a 6.0 V supply.

**(a)** Calculate the time constant of the charging circuit. **[2]**
**(b)** Calculate the maximum charge the capacitor can store. **[2]**
**(c)** Calculate the charge stored after 0.30 s of charging. **[3]**

**8.** A student discharges a capacitor and plots a graph of ln Q against time t, obtaining a straight line of gradient −0.25 s⁻¹.

**(a)** Explain why plotting ln Q against t, rather than Q against t, is a useful graphical method here. **[2]**
**(b)** Use the gradient to find the time constant of the circuit. **[2]**

---

## Answers

**1.** The **charge stored per unit potential difference** [1], C = Q ÷ V; the unit is the **farad (F)** [1].

**2.** **Parallel:** C = C₁ + C₂ + … [1]. **Series:** 1/C = 1/C₁ + 1/C₂ + … [1]. This is the **opposite** way round to resistors [1].

**3.** The p.d. across the capacitor **rises from zero to V as charge accumulates** [1], so the **average p.d. during charging is V/2** [1]. The energy is the **area under the Q–V graph**, which is a triangle of area ½QV [1].

**4. (a)** Q = CV = 220 × 10⁻⁶ × 9.0 [1] = **1.98 × 10⁻³ C** [1].
**(b)** E = ½CV² = 0.5 × 220 × 10⁻⁶ × 81 [1] = **8.91 × 10⁻³ J** [1].
**(c)** τ = RC = 47 × 10³ × 220 × 10⁻⁶ [1] = **10.3 s** [1].
**(d)** Q = Q₀e^(−t/RC) = 1.98 × 10⁻³ × e^(−15/10.3) [1]
= 1.98 × 10⁻³ × e^(−1.456) = 1.98 × 10⁻³ × 0.2332 [1]
= **4.62 × 10⁻⁴ C** [1].
**(e)** Half-life = RC × ln2 [1] = 10.3 × 0.693 [1] = **7.14 s** [1].

**5. (a)** 2.0 + 3.0 + 6.0 = **11.0 μF** [1].
**(b)** 1/C = 1/2.0 + 1/3.0 + 1/6.0 [1] = 0.5 + 0.333 + 0.167 = 1.0 [1]
C = **1.0 μF** [1].

**6.** The current **decreases exponentially** to zero [1]. As charge leaves the capacitor the **p.d. across it falls**, so the current through the resistor (I = V/R) falls in proportion [1]. Because the rate of decrease is **proportional to the quantity remaining**, the decay is exponential [1].

**7. (a)** τ = RC = 2.0 × 10³ × 100 × 10⁻⁶ [1] = **0.20 s** [1].
**(b)** Q₀ = CV = 100 × 10⁻⁶ × 6.0 [1] = **6.0 × 10⁻⁴ C** [1].
**(c)** Q = Q₀(1 − e^(−t/RC)) = 6.0 × 10⁻⁴ × (1 − e^(−0.30/0.20)) [1]
= 6.0 × 10⁻⁴ × (1 − e^(−1.5)) = 6.0 × 10⁻⁴ × (1 − 0.223) [1]
= 6.0 × 10⁻⁴ × 0.777 = **4.7 × 10⁻⁴ C** [1].

**8. (a)** Since Q = Q₀e^(−t/RC), taking logs gives ln Q = ln Q₀ − t/RC [1], a straight-line equation, so a graph of ln Q against t is linear with gradient −1/RC, making RC easy to find from experimental data without needing to identify a point at exactly 37% [1].
**(b)** gradient = −1/RC, so RC = 1/0.25 = **4.0 s** [1] [1].

---

## Where marks are usually lost

- Combining capacitors like resistors.
- Forgetting the ½ in the energy expressions, or being unable to explain it.
- Not converting μF to F.
- Using RC rather than RC ln2 for the half-life.
- Using the discharge equation Q = Q₀e^(−t/RC) for a charging problem instead of the charging equation Q = Q₀(1 − e^(−t/RC)) — the two are easily confused under exam pressure.
- Forgetting that the gradient of a ln Q against t graph is **negative** and equal to −1/RC, not +1/RC.

## Charging vs discharging — the two equations side by side

| | Discharging | Charging |
|---|---|---|
| Charge | Q = Q₀e^(−t/RC) | Q = Q₀(1 − e^(−t/RC)) |
| Current | I = I₀e^(−t/RC) | I = I₀e^(−t/RC) (decays from max) |
| Behaviour | Falls from Q₀ toward 0 | Rises from 0 toward Q₀ |

Current always decays exponentially in both cases — during charging it
starts at its maximum value V₀/R and falls as the capacitor's own p.d.
opposes the supply, while during discharging it falls from its initial
value as the driving p.d. across the capacitor itself falls. For the
full derivation of both equations and the graphical method for finding
RC, see the [Capacitance revision notes](/resources/a-physics-capacitance-revision-notes/).
