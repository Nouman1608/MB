---
title: "Cambridge A Level Physics (9702): Rectification and smoothing -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge A Level Physics 9702 21.2 Rectification and smoothing: half-wave and bridge rectifiers, smoothing, ripple, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 21.2 of Cambridge International AS & A Level Physics 9702 (2025–2027) asks you to distinguish graphically between half-wave and full-wave rectification, explain the use of a single diode and of a four-diode bridge, and analyse the effect of a single smoothing capacitor, including the values of capacitance and load resistance. These notes are condensed for recall. For full explanations and worked examples, read the [Rectification and smoothing study guide](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing/); to apply the ideas, try the [Rectification and smoothing practice questions](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-practice/).

## Diode behaviour

- Forward-biased (anode more positive) → conducts.
- Reverse-biased → very high resistance, no current.
- Ideal diode in questions: no p.d. across it when conducting.

## Half-wave (one diode)

- Diode in series with the load.
- Conducts in one half-cycle → load p.d. follows the input.
- Blocks in the other half-cycle → load p.d. zero; full input p.d. across the diode.
- Output: one hump per cycle, gaps of zero between, repeats at f.

## Full-wave (bridge of four diodes)

Supply across corners A and B; load across P (+) and N (−).

| Input half-cycle | Conducting diodes | Path | Current in load |
|---|---|---|---|
| A positive | D1 (A→P), D4 (N→B) | A → P → load → N → B | P to N |
| B positive | D2 (B→P), D3 (N→A) | B → P → load → N → A | P to N |

- Two diodes conduct at a time, in series with the load.
- Output: two humps per cycle, no gaps, repeats at 2f.

## Graphical comparison

| | Half-wave | Full-wave |
|---|---|---|
| Pulses per cycle | 1 | 2 |
| Zero sections | Yes | No |
| Peak (ideal diodes) | V₀ | V₀ |
| Time between peaks | T | T/2 |

## Smoothing

- Capacitor **in parallel** with the load.
- Charges to ≈ V₀ as each pulse rises.
- When the input falls below the capacitor p.d., the diodes are reverse-biased and the capacitor discharges through the load.
- P.d. falls with time constant RC until the next pulse.
- Ripple = maximum − minimum of the smoothed output.

## Effect of component values

| Change | RC | Ripple |
|---|---|---|
| C increased | ↑ | ↓ |
| R (load) increased | ↑ | ↓ |
| R (load) decreased | ↓ | ↑ |
| Half-wave → full-wave | — | ↓ (half the discharge time) |

Good smoothing: RC much greater than the time between peaks.

## Ripple estimate

```
V_min ≈ V₀ e^(−t/RC)     t = 1/f (half-wave), 1/(2f) (full-wave)
ripple ≈ V₀ − V_min ≈ V₀ t / (RC)   when RC ≫ t
```

Example: V₀ = 15 V, 50 Hz full-wave, R = 2.2 kΩ, C = 220 μF → RC = 0.48 s, ripple ≈ 0.31 V.

## Key terms

| Term | Meaning |
|---|---|
| Rectification | Converting a.c. to a current in one direction through the load |
| Half-wave rectification | Only one half of each cycle passes; uses a single diode |
| Full-wave rectification | Both halves pass in the same direction; uses a bridge of four diodes |
| Bridge rectifier | Four diodes arranged so two conduct in each half-cycle |
| Smoothing | Reducing variation of the rectified output with a capacitor in parallel with the load |
| Ripple | Variation remaining in the smoothed output |

## Exam traps

- Capacitor drawn in series with the load.
- Full-wave output drawn with gaps or with humps below the axis.
- Saying all four bridge diodes conduct together.
- Saying a larger load resistance gives more ripple.
- Smoothed output drawn dropping to zero, or perfectly flat.
- Distinguishing half- and full-wave by peak height rather than by pulse count and gaps.

## Self-test

1. What does a diode do when reverse-biased?
2. How many pulses per input cycle does a half-wave rectifier produce?
3. A 50 Hz supply is full-wave rectified. At what frequency does the output repeat?
4. In a bridge rectifier, how many diodes conduct at any instant?
5. Why does the current through the load in a bridge rectifier always flow the same way?
6. Where is the smoothing capacitor connected?
7. Explain why the diodes stop conducting shortly after each peak in a smoothed circuit.
8. State two changes that reduce ripple without changing the rectifier.
9. A smoothed full-wave output has V₀ = 10 V, RC = 1.0 s and f = 50 Hz. Estimate the ripple.
10. Why does switching from half-wave to full-wave reduce the ripple?
11. A heavier load (smaller R) is connected. What happens to the ripple?
12. Can a capacitor make the output perfectly steady? Explain.

**Answers:** 1. It has a very high resistance, so (almost) no current flows. 2. One. 3. 100 Hz. 4. Two. 5. In each half-cycle a different pair of diodes conducts, and both pairs route the current through the load from the same terminal (P) to the other (N). 6. In parallel with the load. 7. The input p.d. falls faster than the capacitor p.d., so the diodes become reverse-biased. 8. Increase the capacitance; increase the load resistance. 9. t = 0.010 s; V_min = 10e^(−0.010) = 9.90 V; ripple ≈ 0.10 V. 10. The time between peaks is halved, so the capacitor discharges for less time. 11. It increases (RC smaller, so faster discharge). 12. No: the capacitor always discharges a little through the load between peaks.

## Related resources

- [Alternating Currents revision notes](/resources/a-physics-alternating-currents-revision-notes/) — the whole of Topic 21
- [Rectification and smoothing practice questions](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-practice/)
- [Discharging a capacitor revision notes](/resources/cambridge-a-level-physics-9702-a-discharging-a-capacitor-revision-notes/)
