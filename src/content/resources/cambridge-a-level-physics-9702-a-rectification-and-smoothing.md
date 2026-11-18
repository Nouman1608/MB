---
title: "Cambridge A Level Physics (9702): Rectification and smoothing"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Alternating currents"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 21.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-alternating-currents"
    subtopic: "a-rectification-and-smoothing"
description: "A focused guide to 21.2 Rectification and smoothing in Cambridge A Level Physics 9702: half-wave and bridge rectifiers, current paths, and how C and R control the ripple."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **21.2 Rectification and smoothing** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Alternating Currents study guide](/resources/a-physics-alternating-currents/) introduces the whole of Topic 21 and describes the output shapes in words; this page goes further into the 21.2 outcomes alone: what a diode does in each half-cycle, the exact current paths through a bridge rectifier, what a smoothed output looks like and why, and how to estimate the ripple using the discharge equation from Topic 19. For quick recall use the [Rectification and smoothing revision notes](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-revision-notes/), and for exam-style questions the [Rectification and smoothing practice questions](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-practice/).

## What 21.2 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- **distinguish graphically between half-wave and full-wave rectification**
- **explain the use of a single diode for the half-wave rectification of an alternating current**
- **explain the use of four diodes (bridge rectifier) for the full-wave rectification of an alternating current**
- **analyse the effect of a single capacitor in smoothing, including the effect of the values of capacitance and the load resistance**

## The diode as a one-way valve

A diode conducts when it is **forward-biased** (its anode more positive than its cathode) and has a very high resistance when **reverse-biased**. In rectifier questions, diodes are normally treated as ideal: zero resistance forward, infinite resistance in reverse. In the circuit symbol, the arrow points in the direction of conventional current when the diode conducts.

**Rectification** means converting an alternating current into a current that flows in one direction only through the load. It need not be steady: rectified current is unidirectional but still varies.

## Half-wave rectification: one diode

A single diode is placed in series with the load resistor across the a.c. supply.

- **Half-cycle in which the diode is forward-biased**: the diode conducts, and the p.d. across the load follows the input, tracing one sinusoidal hump.
- **Next half-cycle**: the diode is reverse-biased, no current flows, and the p.d. across the load is zero. The whole input p.d. appears across the diode.

**Graph**: humps of the original shape on one side of the time axis, separated by flat zero sections of equal length. There is **one pulse per input cycle**, so the output repeats at the supply frequency. Half the input cycle is wasted.

## Full-wave rectification: the bridge

Four diodes form a diamond, with the a.c. supply connected to two opposite corners (call them A and B) and the load connected to the other two (P and N). Label the diodes:

- D1 from A to P, D2 from B to P (both pointing towards P);
- D3 from N to A, D4 from N to B (both pointing away from N).

**When A is positive:** current flows A → D1 → P → load → N → D4 → B. D2 and D3 are reverse-biased.

**When B is positive:** current flows B → D2 → P → load → N → D3 → A. D1 and D4 are reverse-biased.

In both half-cycles the current passes through the load **from P to N**: the same direction. At any instant **two diodes conduct, in series with the load**, and the other two block. P is always the positive output terminal.

**Graph**: a continuous train of humps all on the same side of the axis, with no flat sections; the negative half-cycles of the input appear inverted. There are **two pulses per input cycle**, so the output repeats at twice the supply frequency.

## Distinguishing the two graphically

| Feature | Half-wave | Full-wave |
|---|---|---|
| Diodes | 1 | 4 (bridge) |
| Pulses per input cycle | 1 | 2 |
| Gaps of zero output | Yes, half of each cycle | No |
| Output repeats at | f | 2f |
| Peak of output (ideal diodes) | V₀ | V₀ |

Because the peak is the same in both, you cannot tell them apart by height: count the pulses and look for gaps.

## Smoothing with a single capacitor

A capacitor is connected **in parallel with the load**.

1. While the rectified p.d. is rising towards its peak, the diode(s) conduct and the capacitor **charges** to (nearly) the peak value V₀.
2. After the peak, the rectified p.d. falls faster than the capacitor can discharge. The diodes become reverse-biased, because the capacitor holds the output terminal at a higher p.d. than the supply. The capacitor now **discharges through the load**, keeping the current flowing.
3. The capacitor p.d. falls exponentially with time constant τ = RC (Topic 19.3) until the next rising pulse overtakes it, and the cycle repeats.

**Graph**: the output rises with each pulse to the peak, then falls along a gentle curve (nearly a straight line if τ is large) until it meets the next pulse. The variation between maximum and minimum is the **ripple**.

## The effect of C and R

The output is smoother when the capacitor loses only a small fraction of its p.d. between peaks, which needs the time constant to be **long compared with the time between peaks**.

| Change | Time constant RC | Ripple | Reason |
|---|---|---|---|
| Larger capacitance | Larger | Smaller | More charge stored, so the same current lowers V less |
| Larger load resistance | Larger | Smaller | Smaller load current, so charge leaves more slowly |
| Smaller load resistance (heavier load) | Smaller | Larger | Larger current drains the capacitor quickly |
| Full-wave instead of half-wave | Unchanged | Smaller | Time between peaks halved |

No finite capacitance removes the ripple entirely: the capacitor always discharges a little between peaks.

## Estimating the ripple

Assume the capacitor charges to V₀ at each peak and then discharges through R for the whole time between peaks (a slight overestimate of the discharge time). Then the minimum p.d. is:

```
V_min = V₀ e^(−t/RC)        t = 1/f (half-wave)  or  1/(2f) (full-wave)
ripple ≈ V₀ − V_min
```

**Worked example.** A 50 Hz supply gives a rectified peak of 12 V. The load is 1.0 kΩ. Estimate the ripple for **(a)** full-wave with 470 μF, **(b)** half-wave with 470 μF, **(c)** full-wave with 47 μF.

```
(a) RC = 1.0 × 10³ × 470 × 10⁻⁶ = 0.47 s;  t = 1/(2 × 50) = 0.010 s
    V_min = 12 e^(−0.010/0.47) = 11.75 V   →  ripple ≈ 0.25 V

(b) t = 1/50 = 0.020 s
    V_min = 12 e^(−0.020/0.47) = 11.50 V   →  ripple ≈ 0.50 V

(c) RC = 0.047 s;  t = 0.010 s
    V_min = 12 e^(−0.010/0.047) = 9.70 V   →  ripple ≈ 2.3 V
```

*Annotation.* Doubling the time between peaks (half-wave) roughly doubles the ripple; cutting C by a factor of ten makes it roughly ten times larger. When RC is much larger than t, e^(−t/RC) ≈ 1 − t/RC, so ripple ≈ V₀t/(RC): directly proportional to t and inversely proportional to both R and C. This exponential estimate goes slightly beyond the bare outcome, but it uses only equations you must know for 19.3 and it makes "analyse the effect of" concrete.

## Common mistakes

- **Putting the smoothing capacitor in series** with the load. It goes in parallel.
- **Drawing the full-wave output with gaps** or with alternate humps below the axis.
- **Saying the bridge uses all four diodes at once.** Two conduct in each half-cycle.
- **Saying a larger load resistance increases the ripple.** It reduces it, because the current is smaller.
- **Drawing the smoothed output falling to zero** between peaks, or drawing it as a perfectly flat line.
- **Stating that rectified output is steady d.c.** It is unidirectional but varying until it is smoothed, and even then it ripples.

## Exam technique for the command words

- **Sketch** (output waveforms): use the same time axis as the input; show the correct number of pulses per cycle; for a smoothed output, show the rise with each pulse and a gradual fall, and label the ripple.
- **Explain** (half-wave with one diode): the diode conducts only when forward-biased, so current flows through the load in one half-cycle and not the other.
- **Explain** (the bridge): in each half-cycle, name the two diodes that conduct and state that current passes through the load in the same direction both times.
- **Explain** (smoothing): capacitor charges near the peak, then discharges through the load between peaks, keeping the p.d. from falling to zero.
- **State and explain** (the effect of changing C or R): refer to the time constant RC compared with the time between peaks.

## Related resources

- [Alternating Currents study guide](/resources/a-physics-alternating-currents/) — the whole of Topic 21
- [Rectification and smoothing revision notes](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-revision-notes/)
- [Rectification and smoothing practice questions](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-practice/)
- [Characteristics of alternating currents study guide](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents/) — the previous subtopic
- [Discharging a capacitor study guide](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor/) — the exponential decay behind the ripple

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
