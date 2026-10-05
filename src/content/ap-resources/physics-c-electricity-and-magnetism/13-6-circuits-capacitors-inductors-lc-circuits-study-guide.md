---
resourceId: "mb-ap-physcem-13.6-study-guide"
title: "Circuits with Capacitors and Inductors (LC Circuits): Study Guide (Physics C: E&M 13.6)"
description: "Calculus-based guide to LC circuits: energy exchange between capacitor and inductor, maximum current, the simple harmonic equation for charge, ω = 1/√(LC) and graphs of q and I."
course: "physics-c-electricity-and-magnetism"
unit: 13
topics: ["13.6"]
resourceType: "study-guide"
prerequisites:
  - "Energy stored in a capacitor, U = q²/(2C) (Topic 10.3), and in an inductor, U = ½LI² (Topic 13.4)"
  - "LR circuits: the loop rule with an inductor and why inductor current cannot jump (Topic 13.5)"
  - "Simple harmonic motion: d²x/dt² = −ω²x and its solution x = A cos(ωt + φ)"
prerequisiteResources: ["mb-ap-physcem-13.5-study-guide"]
learningObjectives:
  - "Use conservation of energy to find the maximum current or maximum charge in an LC circuit"
  - "Apply the loop rule to show that the capacitor's charge obeys d²q/dt² = −q/(LC)"
  - "Derive the angular frequency ω = 1/√(LC) and use it to find the period and frequency"
  - "Draw quantitative graphs of charge, current and energy against time, with correct phase and scales"
  - "Plan an experiment to test how the period depends on L and C, and analyse the data with a straight-line graph"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "Work in radians. 1 μF = 10⁻⁶ F and 1 mH = 10⁻³ H; √(H·F) is in seconds. Keep unrounded values until the final step"
related: ["mb-ap-physcem-13.6-revision-notes", "mb-ap-physcem-13.6-practice", "mb-ap-physcem-13.6-checklist"]
next: "mb-ap-physcem-13.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "In an ideal LC circuit, energy moves back and forth between the capacitor's electric field and the inductor's magnetic field; the total stays constant."
  - "Energy conservation gives the maximum current: Q₀²/(2C) = ½LI_max², so I_max = Q₀/√(LC)."
  - "The loop rule gives d²q/dt² = −q/(LC), the equation of simple harmonic motion, with ω = 1/√(LC)."
  - "The charge and the current are a quarter-cycle out of step: when the charge is greatest the current is zero, and the reverse."
  - "The period T = 2π√(LC) does not depend on how much charge you start with."
faqs:
  - question: "Why doesn't the capacitor just discharge once and stop?"
    answer: "When the capacitor is empty, the current is at its maximum, and the inductor will not let it stop suddenly. The current keeps flowing and charges the capacitor the other way round. Then the process reverses, again and again."
  - question: "Do real LC circuits oscillate for ever?"
    answer: "No. Real wires and coils have resistance, so some energy is dissipated each cycle and the amplitude dies away. The ideal model, with no resistance, is the one this topic uses."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 13.6, the last topic of the course. It links circuits to the simple harmonic motion you met in mechanics. Every circuit here is **ideal**: it contains only a capacitor and an inductor, with no resistance.

## The idea: energy passed back and forth

Charge a capacitor C to a charge Q₀, then connect it across an inductor L at t = 0. Here is what happens over one cycle.

1. **Start.** The capacitor holds charge Q₀ and stores energy Q₀²/(2C) in its electric field. The current is zero.
2. **Discharging.** The capacitor pushes charge through the inductor. The inductor opposes the change, so the current grows smoothly, not suddenly. Energy moves into the inductor's magnetic field.
3. **Quarter cycle.** The capacitor is empty (q = 0). All the energy is now in the inductor, ½LI_max², and the current is greatest.
4. **Recharging the other way.** The inductor's current cannot stop suddenly, so it keeps going. It charges the capacitor with the opposite polarity, and the current falls.
5. **Half cycle.** The capacitor holds −Q₀ and the current is zero. The process then runs in reverse back to the start.

This is the case mentioned in Topic 13.4: an inductor's energy can be **used to charge a capacitor**, rather than dissipated in a resistor as in Topic 13.5.

**Energy conservation.** With no resistance, no energy is dissipated, so at every instant:

**q²/(2C) + ½LI² = Q₀²/(2C)** (a constant)

When q = 0 the current is greatest:

½LI_max² = Q₀²/(2C), so **I_max = Q₀/√(LC)**

This one line answers most "maximum current" questions without any differential equation. It works the other way too. If an inductor carrying I₀ is switched onto an uncharged capacitor, the largest charge is Q_max = I₀√(LC).

## The loop rule gives simple harmonic motion

Let q be the charge on one plate of the capacitor (call it plate A). Let I = dq/dt, so I is positive when charge flows onto plate A. Going round the loop, the potential changes across the capacitor and the inductor must add to zero:

q/C + L dI/dt = 0

Since I = dq/dt, dI/dt = d²q/dt². So:

**d²q/dt² = −(1/(LC)) q**

This has exactly the form of the mass–spring equation, d²x/dt² = −(k/m)x. The charge oscillates in simple harmonic motion.

| Mass on a spring | LC circuit |
|---|---|
| displacement x | charge q |
| velocity v = dx/dt | current I = dq/dt |
| mass m (inertia, resists change in v) | inductance L (resists change in I) |
| spring constant k | 1/C |
| kinetic energy ½mv² | magnetic energy ½LI² |
| spring energy ½kx² | electric energy q²/(2C) |
| ω = √(k/m) | ω = 1/√(LC) |

**Deriving ω.** Try q = Q₀ cos(ωt + φ). Differentiating twice gives d²q/dt² = −ω²Q₀ cos(ωt + φ) = −ω²q. This matches the circuit equation only if ω² = 1/(LC), so:

**ω = 1/√(LC)**, **T = 2π/ω = 2π√(LC)**, **f = 1/T = 1/(2π√(LC))**

Check the units: a henry is V·s/A and a farad is C/V = A·s/V, so H·F = s², and √(LC) is in seconds.

The period does not depend on Q₀. A circuit with more charge swings harder, but not faster, just as a spring's period does not depend on its amplitude.

## Charge, current and energy against time

If the capacitor starts fully charged with the current zero (φ = 0):

- **q = Q₀ cos ωt**
- **I = dq/dt = −ωQ₀ sin ωt**, so the current amplitude is ωQ₀ = Q₀/√(LC), the same I_max as energy conservation gave.
- **U_C = (Q₀²/2C) cos² ωt** and **U_L = (Q₀²/2C) sin² ωt**. They add to Q₀²/(2C) at every instant.

The charge and current are a quarter-cycle out of step. When |q| is greatest, I = 0; when q = 0, |I| is greatest. Each energy goes through two full cycles for every one cycle of q, because cos² and sin² repeat every half-period.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="lc-graph-title lc-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lc-graph-title">Charge and current against time for the LC circuit in Worked example 1</title>
<desc id="lc-graph-desc">Two graphs share a time axis from 0 to 8 milliseconds. Top graph: charge on plate A in millicoulombs, a cosine curve starting at plus 1.0, crossing zero at 1.99 milliseconds, reaching minus 1.0 at 3.97 milliseconds, crossing zero again at 5.96 milliseconds and returning to plus 1.0 at 7.95 milliseconds. Bottom graph: current in amperes, starting at zero, reaching minus 0.79 at 1.99 milliseconds, zero at 3.97 milliseconds, plus 0.79 at 5.96 milliseconds and zero at 7.95 milliseconds. Dotted vertical lines at one quarter, one half and three quarters of the period show that the current is greatest in size when the charge is zero, and zero when the charge is greatest in size.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="30" x2="70" y2="170"/><line x1="70" y1="100" x2="530" y2="100"/>
<line x1="70" y1="190" x2="70" y2="330"/><line x1="70" y1="260" x2="530" y2="260"/>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4">
<line x1="179.3" y1="30" x2="179.3" y2="330"/><line x1="288.6" y1="30" x2="288.6" y2="330"/><line x1="397.9" y1="30" x2="397.9" y2="330"/><line x1="507.1" y1="30" x2="507.1" y2="330"/>
</g>
<polyline points="70.0,40.0 80.9,40.7 91.9,42.9 102.8,46.5 113.7,51.5 124.6,57.6 135.6,64.7 146.5,72.8 157.4,81.5 168.4,90.6 179.3,100.0 190.2,109.4 201.1,118.5 212.1,127.2 223.0,135.3 233.9,142.4 244.8,148.5 255.8,153.5 266.7,157.1 277.6,159.3 288.6,160.0 299.5,159.3 310.4,157.1 321.3,153.5 332.3,148.5 343.2,142.4 354.1,135.3 365.1,127.2 376.0,118.5 386.9,109.4 397.8,100.0 408.8,90.6 419.7,81.5 430.6,72.8 441.6,64.7 452.5,57.6 463.4,51.5 474.3,46.5 485.3,42.9 496.2,40.7 507.1,40.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="70.0,260.0 80.9,269.3 91.9,278.3 102.8,286.9 113.7,294.9 124.6,301.9 135.6,308.0 146.5,312.8 157.4,316.4 168.4,318.6 179.3,319.3 190.2,318.6 201.1,316.4 212.1,312.8 223.0,308.0 233.9,301.9 244.8,294.9 255.8,286.9 266.7,278.3 277.6,269.3 288.6,260.0 299.5,250.7 310.4,241.7 321.3,233.1 332.3,225.1 343.2,218.1 354.1,212.0 365.1,207.2 376.0,203.6 386.9,201.4 397.8,200.7 408.8,201.4 419.7,203.6 430.6,207.2 441.6,212.0 452.5,218.1 463.4,225.1 474.3,233.1 485.3,241.7 496.2,250.7 507.1,260.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="40" x2="70" y2="40" stroke="#1d2b44"/><text x="60" y="44">+1.0</text>
<text x="60" y="104">0</text>
<line x1="64" y1="160" x2="70" y2="160" stroke="#1d2b44"/><text x="60" y="164">−1.0</text>
<line x1="64" y1="200.7" x2="70" y2="200.7" stroke="#1d2b44"/><text x="60" y="205">+0.79</text>
<text x="60" y="264">0</text>
<line x1="64" y1="319.3" x2="70" y2="319.3" stroke="#1d2b44"/><text x="60" y="323">−0.79</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="70" y1="330" x2="530" y2="330" stroke="#1d2b44" stroke-width="1"/>
<line x1="180" y1="330" x2="180" y2="336" stroke="#1d2b44"/><text x="180" y="350">2</text>
<line x1="290" y1="330" x2="290" y2="336" stroke="#1d2b44"/><text x="290" y="350">4</text>
<line x1="400" y1="330" x2="400" y2="336" stroke="#1d2b44"/><text x="400" y="350">6</text>
<line x1="510" y1="330" x2="510" y2="336" stroke="#1d2b44"/><text x="510" y="350">8</text>
<text x="70" y="350">0</text>
<text x="300" y="385" font-size="13">Time, t (ms)</text>
<text x="179.3" y="24">T/4</text><text x="288.6" y="24">T/2</text><text x="397.9" y="24">3T/4</text><text x="507.1" y="24">T</text>
</g>
<text x="18" y="100" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 100)">Charge, q (mC)</text>
<text x="18" y="260" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 260)">Current, I (A)</text>
<g font-size="12" fill="#1d2b44">
<text x="196" y="62">solid: q = Q₀ cos ωt</text>
<text x="300" y="300">dashed: I = −I_max sin ωt</text>
</g>
</svg>
<figcaption>Figure 1. Charge (solid, top) and current (dashed, bottom) for Worked example 1: Q₀ = 1.0 mC, I_max = 0.79 A, T = 7.95 ms. The dotted lines at T/4, T/2 and 3T/4 show the quarter-cycle shift: the current is largest in size when the charge is zero. A negative current means charge is flowing off plate A.</figcaption>
</figure>

## Worked example 1: a charged capacitor connected to a coil

**Question.** A 20 μF capacitor is charged to 50 V and then connected across a 0.080 H inductor at t = 0. Find (a) the initial charge and energy, (b) ω, f and T, (c) the maximum current, by two methods, and (d) the first times at which the capacitor is empty and fully charged with the opposite polarity.

1. (a) Q₀ = CV = (20 × 10⁻⁶ F)(50 V) = **1.0 × 10⁻³ C**. U = ½CV² = ½(20 × 10⁻⁶)(50)² = **2.5 × 10⁻² J** (25 mJ).
2. (b) ω = 1/√(LC) = 1/√(0.080 × 20 × 10⁻⁶) = 1/√(1.6 × 10⁻⁶) = **791 rad/s**. f = ω/(2π) = **126 Hz**. T = 1/f = **7.95 ms**.
3. (c) Energy method: ½LI_max² = 0.025 J, so I_max = √(2 × 0.025 ÷ 0.080) = **0.79 A**. Oscillation method: I_max = ωQ₀ = 791 × 1.0 × 10⁻³ = **0.79 A**. The two agree.
4. (d) The capacitor is first empty at T/4 = **1.99 ms**, and first fully charged the other way round at T/2 = **3.97 ms**.

**Check.** Figure 1 is drawn from these numbers. At t = T/4 the charge curve crosses zero exactly where the current curve has its largest size, 0.79 A.

## Worked example 2: when is the energy shared equally?

**Question.** A 3.0 μF capacitor is charged by a 15 V battery and then switched across a 12 mH inductor. (a) Find, in terms of T, the first time at which the energy is shared equally between the capacitor and the inductor, and the charge and current at that time. (b) Evaluate these. (c) The capacitor is replaced by a 12 μF capacitor charged by the same battery. By what factor does each of T, Q₀, I_max and the total energy change?

**(a) Symbols first.** With q = Q₀ cos ωt, U_C = U_L when cos² ωt = sin² ωt, so tan ωt = 1 and ωt = π/4. Then **t = (π/4)/ω = T/8**. At that moment q = Q₀ cos(π/4) = **Q₀/√2** and |I| = I_max sin(π/4) = **I_max/√2**. Check: each energy is then half the total, since (1/√2)² = ½.

**(b) Numbers.** Q₀ = CV = (3.0 × 10⁻⁶)(15) = 4.5 × 10⁻⁵ C. ω = 1/√(0.012 × 3.0 × 10⁻⁶) = 5.27 × 10³ rad/s, so T = 2π/ω = 1.19 ms and t = T/8 = **0.149 ms**. I_max = ωQ₀ = 0.237 A. At t = T/8, q = **3.2 × 10⁻⁵ C** and |I| = **0.168 A**.

**(c) Factors of change.** The battery fixes the voltage, so Q₀ = Cℰ and I_max = ωQ₀ = ℰ√(C/L).

- T = 2π√(LC): C × 4 gives **T × 2**.
- Q₀ = Cℰ: **× 4**.
- I_max = ℰ√(C/L): **× 2**. (Q₀ is 4 times larger but ω is half as large.)
- U = ½Cℰ²: **× 4**. Check: ½LI_max² also goes up by 2² = 4.

**Interpretation.** A bigger capacitor charged to the same voltage stores more energy and oscillates more slowly. Always ask what is held fixed, the charge or the voltage, before predicting a factor of change.

## Designing an experiment

To test T = 2π√(LC), you could connect a voltage sensor or oscilloscope across the capacitor. Charge the capacitor with a battery, then use a two-way switch to connect it across the inductor and record V_C against time.

- **Independent variable:** C (a set of capacitors), with the same inductor throughout.
- **Measure:** the period, by timing several cycles on the trace and dividing, which reduces the reading uncertainty.
- **Analysis:** T² = 4π²L × C, so a graph of T² against C should be a straight line through the origin with gradient 4π²L. Use the gradient to find L and compare it with the value marked on the inductor.
- **What you will see:** real coils have resistance, so the amplitude of V_C shrinks from cycle to cycle. The period is still close to 2π√(LC) when the resistance is small. Analysing this damping is beyond this course.

Reading about an experiment does not replace doing one; the course has its own laboratory requirement.

## Common misconceptions

- **"The current is largest when the capacitor is fully charged."** It is zero then. The current is largest when the capacitor is empty.
- **"Once the capacitor is empty, the current stops."** The inductor keeps the current going, so the capacitor recharges with the opposite polarity.
- **Mixing up ω and f.** ω = 1/√(LC) is in rad/s; f = ω/(2π) is in Hz. Leaving out the 2π gives an answer about six times too large or small.
- **"Doubling the starting charge halves the period."** The period does not depend on the amplitude.
- **"The energy oscillates with period T."** Each of U_C and U_L repeats every T/2; the total is constant.
- **Using √(L/C) or √(C/L) as a time.** Only √(LC) has units of seconds. √(L/C) is in ohms and appears in V_max = I₀√(L/C).
- **Forgetting what is held fixed.** Changing C with fixed Q₀ and with fixed V gives different changes in I_max.
- **Applying the ideal model to a circuit with a resistor.** With resistance, energy is dissipated and the oscillation dies away.

## Where this leads

This is the last topic of the course. The LC circuit brings together capacitors (Unit 10), circuits (Unit 11), induction (Unit 13) and simple harmonic motion. Look back at [LR circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/13-5-circuits-resistors-inductors-lr-circuits-study-guide/) to compare a circuit that decays with one that oscillates. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/13-6-circuits-capacitors-inductors-lc-circuits-checklist/). Then return to the [course roadmap](/advanced-course-resources/physics-c-electricity-and-magnetism/#roadmap) to plan your review of all six units.
