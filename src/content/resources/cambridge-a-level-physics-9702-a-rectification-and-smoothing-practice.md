---
title: "Cambridge A Level Physics (9702): Rectification and smoothing -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with mark-scheme answers on Cambridge A Level Physics 9702 21.2 Rectification and smoothing: diodes, bridge rectifiers and ripple."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Rectification and smoothing study guide](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing/) · [Rectification and smoothing revision notes](/resources/cambridge-a-level-physics-9702-a-rectification-and-smoothing-revision-notes/)

Treat all diodes as ideal. Where a question asks for a sketch, describe your sketch in words if you are working without paper. All values are invented for practice.

---

## Section A

**1.** State what is meant by rectification. **[1]**

**2.** Explain how a single diode connected in series with a resistor produces half-wave rectification of an alternating p.d. **[3]**

**3.** A 60 Hz sinusoidal supply is full-wave rectified. At what frequency does the rectified output repeat?

A: 30 Hz

B: 60 Hz

C: 120 Hz

D: 240 Hz

**[1]**

**4.** State how a smoothing capacitor is connected in a rectifier circuit, and explain briefly how it reduces the variation of the output. **[3]**

**5.** State and explain the effect on the ripple of increasing the load resistance in a smoothed rectifier circuit. **[2]**

**6.** Describe how the graphs of output p.d. against time for half-wave and full-wave rectification of the same sinusoidal input differ. **[2]**

---

## Section B

**7.** A bridge rectifier has the a.c. supply connected across corners A and B and the load across corners P and N. Diode D1 conducts from A to P, D2 from B to P, D3 from N to A and D4 from N to B.

**(a)** When A is positive with respect to B, state which two diodes conduct. **[1]**

**(b)** Describe the path of the current from A back to B in this half-cycle. **[1]**

**(c)** When B is positive with respect to A, state which two diodes conduct, and the direction of the current in the load. **[2]**

**(d)** Diode D1 breaks and becomes an open circuit. Describe the output p.d. across the load now, with a reason. **[2]**

**8.** A full-wave rectifier connected to a 50 Hz supply gives an output of peak p.d. 15 V across a load of 2.2 kΩ. A 220 μF capacitor is connected across the load.

**(a)** Calculate the time constant of the capacitor–load combination. **[1]**

**(b)** State the time between successive peaks of the rectified p.d. **[1]**

**(c)** Assuming the capacitor discharges through the load for the whole of this time, estimate the minimum p.d. and the ripple. **[2]**

**(d)** Estimate the ripple if the same components were used with half-wave rectification. **[1]**

**(e)** Explain why the assumption in (c) slightly overestimates the ripple. **[1]**

**9.** A designer needs a full-wave rectified 50 Hz supply with a peak of 20 V to deliver current to a 500 Ω load with a ripple of no more than 0.50 V. Using ripple ≈ V₀t/(RC), where t is the time between peaks, estimate the minimum smoothing capacitance needed. **[3]**

**10.** Describe the shape of the graph of output p.d. against time for a full-wave rectifier with a smoothing capacitor whose time constant is large compared with the time between peaks. **[3]**

**11.** Explain why, once a smoothing capacitor is connected, the diodes in a rectifier conduct for only a short part of each cycle. **[2]**

**12.** A student suggests reducing the ripple by doubling the smoothing capacitance and, at the same time, halving the load resistance. Evaluate this suggestion. **[2]**

---

## Answers

**1.** Converting an alternating current into a current that flows in one direction only (through the load) [1].

**2.** The diode conducts only when it is forward-biased [1], so current flows through the resistor during one half of each cycle, and the p.d. across the resistor follows the input [1]. In the other half-cycle the diode is reverse-biased, no current flows and the p.d. across the resistor is zero [1].

**3.** C [1].

**4.** In parallel with the load [1]. The capacitor charges as the rectified p.d. rises to its peak [1], then discharges through the load between peaks, so the p.d. does not fall to zero [1].

**5.** The ripple is reduced [1]: the time constant RC is larger (the load current is smaller), so the capacitor discharges more slowly between peaks [1].

**6.** Half-wave: one hump per cycle with gaps of zero p.d. between humps [1]. Full-wave: two humps per cycle, all in the same direction, with no gaps [1].

**7. (a)** D1 and D4 [1].

**(b)** A → D1 → P → load → N → D4 → B [1].

**(c)** D2 and D3 [1]; the current in the load is from P to N, the same direction as before [1].

**(d)** In the half-cycle when A is positive there is now no conducting path, so the output is zero [1]; current still flows in the other half-cycle, so the output becomes half-wave rectified (one hump per cycle with gaps) [1].

**8. (a)** RC = 2.2 × 10³ × 220 × 10⁻⁶ = 0.48 s [1].

**(b)** 1 ÷ (2 × 50) = 0.010 s [1].

**(c)** V_min = 15e^(−0.010/0.484) = 14.7 V [1]; ripple ≈ 15 − 14.7 = 0.3 V [1].

**(d)** t = 0.020 s: V_min = 15e^(−0.020/0.484) = 14.4 V, ripple ≈ 0.6 V [1].

**(e)** The capacitor starts discharging only after the peak and stops when the next pulse overtakes it, which is slightly before the next peak, so the actual discharge time is a little less than the time between peaks [1].

**9.** t = 1 ÷ (2 × 50) = 0.010 s [1]. C = V₀t ÷ (R × ripple) = 20 × 0.010 ÷ (500 × 0.50) [1] = 8.0 × 10⁻⁴ F (800 μF) [1].

**10.** The p.d. rises with each rectified pulse to (nearly) the peak value [1]. It then falls slowly and almost linearly as the capacitor discharges [1], until the next pulse rises to meet it; the pattern repeats twice per input cycle, giving a small sawtooth-like ripple about a high mean value [1].

**11.** The capacitor holds the output p.d. close to the peak value, so the diodes are reverse-biased whenever the input p.d. is below the capacitor p.d. [1]. They conduct only during the short time near each peak when the input exceeds the capacitor p.d. and recharges it [1].

**12.** Doubling C and halving R leaves the time constant RC unchanged [1], so the ripple stays about the same; the suggestion does not work (though doubling C alone would) [1].

---

## Where marks are usually lost

- Placing the smoothing capacitor in series with the load.
- Claiming that all four diodes in a bridge conduct together.
- Drawing a full-wave output with gaps, or with alternate humps below the axis.
- Describing the effect of the load resistance the wrong way round.
- Drawing a smoothed output as perfectly flat or as falling to zero between pulses.
- Using the supply period instead of half of it as the discharge time for full-wave rectification.
