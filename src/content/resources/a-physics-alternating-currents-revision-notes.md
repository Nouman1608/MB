---
title: "A Level Physics: Alternating Currents — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Alternating currents"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 21.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-alternating-currents"
    subtopic: "a-characteristics-of-alternating-currents"
  - qualification: "a-level"
    topic: "a-alternating-currents"
    subtopic: "a-rectification-and-smoothing"
description: "Condensed recall notes on r.m.s. values, peak values, transformers and rectification for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Alternating Currents study guide](/resources/a-physics-alternating-currents/).

## Describing an alternating current

```
I = I_0 sin(omega t)        omega = 2 pi f = 2 pi / T
```

`I₀` is the **peak** current, ω the angular frequency, T the period.

## R.m.s. values — and why they exist

```
I_rms = I_0 / sqrt(2)         V_rms = V_0 / sqrt(2)
```

**The mean current over a full cycle is zero**, because the current spends equal time in each direction. So the mean tells you nothing useful about the power delivered. The r.m.s. value solves this:

> The r.m.s. value of an alternating current is the value of the **direct current that would dissipate the same mean power** in the same resistor.

Squaring makes every value positive, so the mean of the squares is not zero. That is the whole justification — and it is a standard 3-mark question.

```
mean power  <P> = I_rms V_rms = (1/2) I_0 V_0
peak power  P_0 = I_0 V_0
```

**Mean power is exactly half the peak power** for a resistive load. Mains "230 V" is an r.m.s. value; the peak is 230 × √2 ≈ 325 V.

## Transformers

```
N_s / N_p = V_s / V_p

ideal (100% efficient):   I_p V_p = I_s V_s
```

Step-up increases voltage and decreases current in the same proportion; step-down does the reverse. Power is conserved in an ideal transformer.

**Operating principle:** alternating current in the primary produces a continuously changing magnetic flux in the soft-iron core; this changing flux links the secondary coil and induces an alternating e.m.f. in it (Faraday's law).

**A transformer cannot work on d.c.** — a steady current produces a constant flux, there is no rate of change of flux linkage, so no e.m.f. is induced. That is examined often.

### Why the losses matter

| Loss | Cause | Reduced by |
|---|---|---|
| **Eddy currents** | Currents induced in the core dissipate energy | **Laminating** the core with insulated layers |
| **Resistive (I²R)** | Heating in the copper windings | Thick, low-resistance wire |
| **Hysteresis** | Energy to repeatedly re-magnetise the core | Soft iron core, easily magnetised and demagnetised |
| **Flux leakage** | Not all flux links the secondary | Well-designed, fully linked core |

## Power transmission

Transmit at **high voltage and low current**. Since power loss in the cables is `I²R`, halving the current quarters the loss. Stepping the voltage up by ×10 divides the current by 10 and cuts the transmission loss by a factor of 100.

The loss depends on the **current squared**, not the voltage — that is the reason high-voltage transmission is used, and stating it in terms of voltage loses the mark.

## Worked examples

**Mains supply, 230 V r.m.s., 50 Hz, powering a 1150 W heater.** Peak voltage V₀ = V_rms × √2 = 230 × √2 ≈ **325 V**. R.m.s. current I_rms = P ÷ V_rms = 1150 ÷ 230 = **5.0 A**, so peak current I₀ = I_rms × √2 ≈ **7.1 A**. Peak power P₀ = I₀V₀ ≈ **2300 W** — exactly twice the mean power, as the formula requires.

**Step-down transformer, 230 V to 12 V, primary with 1150 turns.** Secondary turns N_s = N_p × (V_s ÷ V_p) = 1150 × (12 ÷ 230) = **60 turns**. For an ideal transformer supplying a secondary current of 3.0 A, the primary current I_p = (I_s × V_s) ÷ V_p = (3.0 × 12) ÷ 230 ≈ **0.16 A** — much smaller than the secondary current, since the primary operates at the higher voltage.

## Rectification

**Half-wave** — a single diode. Conducts on one half-cycle only; the other half is blocked. Output is a series of pulses with gaps.

**Full-wave** — four diodes in a **bridge** arrangement. Both half-cycles are used, with the negative half inverted, so the output has twice the pulse rate and no gaps.

**Smoothing** uses a capacitor in **parallel** with the load. It charges at the peak and discharges through the load during the gap, so the output falls only slightly before the next peak arrives. A **larger capacitance** gives a longer time constant (τ = RC) and therefore **less ripple**; so does a **larger load resistance**, since τ = RC increases either way — a smaller load current draws the capacitor's charge down more slowly between peaks. Increasing either only **reduces** the ripple, though: the capacitor still discharges to some extent between pulses, so the output is never a perfectly constant, ripple-free voltage.

## Exam traps

- Using peak values where r.m.s. is required, or vice versa.
- Saying the mean current is zero *therefore* no power is delivered.
- Forgetting mean power is half peak power.
- Claiming a transformer works on d.c.
- Explaining transmission loss in terms of voltage rather than I²R.
- Putting the smoothing capacitor in series with the load.
- Confusing lamination (eddy currents) with using soft iron (hysteresis).

## Self-test

1. Define the r.m.s. value of an alternating current.
2. Why is the mean current over a cycle useless as a measure, and how does squaring fix it?
3. Relate mean power to peak power.
4. Why can a transformer not operate on direct current?
5. Why is electricity transmitted at high voltage?

**Answers:** 1. The value of the direct current that would dissipate the same mean power in the same resistor. 2. The current spends equal time in each direction so the mean is zero; squaring makes all values positive, so the mean of the squares is non-zero and reflects the power actually dissipated. 3. Mean power is half the peak power for a resistive load. 4. D.c. produces a constant magnetic flux, so there is no rate of change of flux linkage in the secondary and no e.m.f. is induced. 5. Power loss in the cables is I²R, so high voltage allows low current for the same power, and the loss falls with the square of the current.
