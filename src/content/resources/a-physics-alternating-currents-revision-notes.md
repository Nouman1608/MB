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
description: "Condensed recall notes on r.m.s. and peak values, mean power, rectification and smoothing for Cambridge A Level Physics 9702, with transformer background."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--02-force-on-a-wire.webp" width="900" height="1050" alt="A wire carrying current into the page between a north pole on the left and a south pole on the right feels a downward force (Fleming left-hand rule: thumb force, first finger field, second finger current). A top view defines theta, and a graph of F = BIL sin theta (B = 0.35 T, I = 4.5 A, L = 0.080 m) gives 0 at 0 degrees, 0.081 N at 40 degrees and 0.126 N at 90 degrees." loading="lazy">
  <figcaption>The force on a wire in a field depends on sin theta and is greatest at 90 degrees.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--06-rotating-coil-generator.webp" width="900" height="1165" alt="Four end-on pictures show a coil turning in a uniform field at 0, 90, 180 and 270 degrees. Graphs for one 40 ms period (120 turns, 0.25 T, 4.5e-3 m2, 25 Hz) show N phi = NBA cos wt between plus and minus 0.135 Wb turns and E = NBAw sin wt with peak 21.2 V. E is zero when flux linkage is maximum and largest when it changes fastest." loading="lazy">
  <figcaption>The e.m.f. of a rotating coil is minus the gradient of the flux linkage, so a cosine flux linkage gives a sine e.m.f.</figcaption>
</figure>


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

## Transformers (prerequisite, not a new Topic 21 outcome)

The 2025-2027 syllabus doesn't list transformers under Topic 21 -- it only
assumes the practical/economic case for high-voltage transmission from
IGCSE/O Level. This section recaps that assumed background.

```
N_s / N_p = V_s / V_p

ideal (100% efficient):   I_p V_p = I_s V_s
```

Step-up increases voltage and decreases current in the same proportion; step-down does the reverse. Power is conserved in an ideal transformer.

**Operating principle:** alternating current in the primary produces a continuously changing magnetic flux in the soft-iron core; this changing flux links the secondary coil and induces an alternating e.m.f. in it (Faraday's law).

**A transformer cannot work on d.c.** — a steady current produces a constant flux, there is no rate of change of flux linkage, so no e.m.f. is induced. This is a common point of confusion when transformer background is drawn into a question.

### Why the losses matter

| Loss | Cause | Reduced by |
|---|---|---|
| **Eddy currents** | Currents induced in the core dissipate energy | **Laminating** the core with insulated layers |
| **Resistive (I²R)** | Heating in the copper windings | Thick, low-resistance wire |
| **Hysteresis** | Energy to repeatedly re-magnetise the core | Soft iron core, easily magnetised and demagnetised |
| **Flux leakage** | Not all flux links the secondary | Well-designed, fully linked core |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--07-transformer.webp" width="900" height="935" alt="A laminated iron core carries a primary coil of 1840 turns on 230 V a.c. and a secondary of 120 turns on a 15 V, 30 W load. The changing flux links both coils; Ip = 0.13 A and Is = 2.0 A, so power in equals power out for an ideal transformer. Eddy currents are big loops in a solid core and small loops in a laminated core. A real transformer draws 34.5 W for 30 W out, 87 percent efficient." loading="lazy">
  <figcaption>An ideal transformer has Ns/Np = Vs/Vp = Ip/Is; the laminated core reduces eddy-current losses.</figcaption>
</figure>


## Power transmission

Transmit at **high voltage and low current**. Since power loss in the cables is `I²R`, halving the current quarters the loss. Stepping the voltage up by ×10 divides the current by 10 and cuts the transmission loss by a factor of 100.

The loss depends on the **current squared**, not the voltage — that is the reason high-voltage transmission is used, and stating it in terms of voltage loses the mark.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--08-ac-rms-and-power.webp" width="900" height="945" alt="A mains voltage with peak 325 V and period 20 ms is plotted for two cycles with dashed lines at 230 V r.m.s. and a 650 V peak-to-peak arrow. Below, the power in a resistor, proportional to sin squared and never negative, has a mean of exactly half the peak power." loading="lazy">
  <figcaption>The r.m.s. value is the peak divided by root 2, and the mean power is half the peak power.</figcaption>
</figure>


## Worked examples

**Mains supply, 230 V r.m.s., 50 Hz, powering a 1150 W heater.** Peak voltage V₀ = V_rms × √2 = 230 × √2 ≈ **325 V**. R.m.s. current I_rms = P ÷ V_rms = 1150 ÷ 230 = **5.0 A**, so peak current I₀ = I_rms × √2 ≈ **7.1 A**. Peak power P₀ = I₀V₀ ≈ **2300 W** — exactly twice the mean power, as the formula requires.

**Step-down transformer, 230 V to 12 V, primary with 1150 turns.** Secondary turns N_s = N_p × (V_s ÷ V_p) = 1150 × (12 ÷ 230) = **60 turns**. For an ideal transformer supplying a secondary current of 3.0 A, the primary current I_p = (I_s × V_s) ÷ V_p = (3.0 × 12) ÷ 230 ≈ **0.16 A** — much smaller than the secondary current, since the primary operates at the higher voltage.

## Rectification

Distinguish these **graphically** (by output shape against time), not just
verbally -- against the same sinusoidal input:

**Half-wave** — a single diode. Conducts on one half-cycle only (an
unmodified positive hump); the other half is blocked (flat at zero). Output
is a series of pulses with flat gaps between them.

**Full-wave** — four diodes in a **bridge** arrangement. Both half-cycles
produce a hump, with the negative half-cycle inverted onto the positive
side instead of blocked, so the output has twice the pulse rate of the
half-wave case and no flat gaps.

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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--09-rectification-smoothing.webp" width="900" height="1140" alt="Three graphs share the same 50 Hz input (dashed). One diode gives half-wave rectification with a gap; a bridge of four diodes gives full-wave rectification with no gap and pulses at twice the frequency; a smoothing capacitor fills the gaps, with small RC giving large ripple and large RC giving small ripple." loading="lazy">
  <figcaption>Half-wave leaves gaps, full-wave does not, and a capacitor with a larger time constant RC gives a smoother output.</figcaption>
</figure>

## Frequently asked questions

**Why is the mean value of an alternating current not useful?**
An alternating current spends equal time flowing in each direction, so its mean over a full cycle is zero, which says nothing about the power delivered. Squaring the values makes them all positive, which is why the root-mean-square value is used instead.

**What is the relationship between mean power and peak power for a.c.?**
For a sinusoidal supply in a resistive load, the mean power is exactly half the peak power. Equivalently, mean power equals I_rms × V_rms, or half of I₀V₀.

**Why can a transformer not work on direct current?**
A steady direct current produces a constant magnetic flux in the core, so there is no rate of change of flux linkage in the secondary coil and no e.m.f. is induced.

**Where is the smoothing capacitor connected in a rectifier circuit?**
The smoothing capacitor is connected in parallel with the load, not in series. It charges at each peak and discharges through the load between peaks, and a larger capacitance or load resistance reduces the ripple by increasing the time constant RC.
