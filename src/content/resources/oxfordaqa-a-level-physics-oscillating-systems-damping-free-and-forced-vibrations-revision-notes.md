---
title: "OxfordAQA International AS and A-level Physics: Oscillating systems, damping and resonance (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Oscillations Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Oscillating systems, damping, free and forced vibrations and resonance"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 107
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "oscillating-systems-oxfordaqa"
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "forced-vibrations-and-resonance-oxfordaqa"
description: "Condensed notes on periods, oscillation energy, damping, required practical 4, forced vibrations and resonance for OxfordAQA AS and A-level Physics."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---

These notes condense sections 3.5.1 (Oscillating systems) and 3.5.2 (Forced vibrations and resonance) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, exams from May/June 2020 onwards. Both sections are shared AS and A-level content. The derivation of the period formulae is in 3.6.2, which is International A-level only. For full explanations use the [study guide](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations/), and test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations-practice/). The [course hub](/boards/oxfordaqa/a-level/physics/) and [printable checklist](/checklists/oxfordaqa/a-level/physics/) show the rest of the course. Not sure where to start? Try the [free diagnostics](/diagnostics/). Related: [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/).

## Key definitions

- **Period T**: the time taken by one full oscillation. **Frequency** f = 1/T.
- **Amplitude A**: maximum displacement from equilibrium.
- **Free vibration**: displaced once, then left to oscillate at its natural frequency.
- **Forced vibration**: driven by a periodic force; it vibrates at the driver's frequency.
- **Damping**: energy transferred from the oscillator to the surroundings by resistive forces, so the amplitude falls.
- **Resonance**: the driver's frequency matches the natural frequency, so the amplitude peaks and the driver transfers energy at its greatest rate.

## Formulae

| Result | Equation | Notes |
|---|---|---|
| Mass-spring period | T = 2π√(m/k) | k in N m⁻¹; independent of amplitude |
| Simple pendulum period | T = 2π√(l/g) | Small angles; l to centre of bob; independent of mass |
| Rearranged | k = 4π²m / T², g = 4π²l / T² | Gradient of T² against m is 4π²/k; against l is 4π²/g |
| Frequency | f = 1/T | Hz |
| International A-level only | a = −ω²x, T = 2π/ω | Condition for SHM |
| International A-level only | x = A cos ωt, v = ±ω√(A² − x²) | Maximum speed ωA, maximum acceleration ω²A |
| International A-level only | Total energy = ½mω²A² | For a spring, ½kA² |

## Method in steps: using the period formulae

1. Write down which system it is and which quantity is fixed.
2. Check units: kg, m, N m⁻¹, s.
3. Substitute into T = 2π√(m/k) or T = 2π√(l/g), or rearrange first.
4. For "what happens when..." questions, use proportionality: T² ∝ m (spring) and T² ∝ l (pendulum).
5. Give an answer with a sensible number of significant figures and the unit.

**Worked reminder.** A 0.60 kg mass on a spring with k = 24 N m⁻¹: T = 2π√(0.60/24) = 2π × 0.158 = **0.99 s**. A pendulum needs T = 1.8 s: l = gT²/4π² = 9.81 × 3.24 / 39.48 = **0.81 m**.

## Energy in an oscillation

| Position | Ek | Ep | Total |
|---|---|---|---|
| Maximum displacement | zero | maximum | constant |
| Equilibrium | maximum | minimum | constant |

- **Against displacement:** Ep is a U-shaped parabola, Ek an inverted parabola, total a horizontal line meeting both tops.
- **Against time:** total is horizontal. Ek and Ep each go through two cycles for every cycle of the motion, are never negative, and are a quarter of a period out of step.
- With damping, the total falls with time and the curves shrink.

**Worked reminder.** A 0.40 kg trolley on a horizontal spring (k = 200 N m⁻¹) is pulled 5.0 cm and released. Ep at the start = ½kA² = ½ × 200 × 0.050² = **0.25 J**, which equals the maximum Ek. Maximum speed = √(2 × 0.25 / 0.40) = **1.1 m s⁻¹**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--05-shm-restoring-force.webp" width="900" height="1000" alt="A 0.40 kg mass on a 25 N/m spring at x = -0.050 m, 0 and +0.050 m with restoring force arrows to scale (1.25 N towards equilibrium, zero at equilibrium). An acceleration-displacement graph is a straight line through the origin with gradient -omega squared = -62.5 per second squared, so omega squared = k/m and T = 0.795 s." loading="lazy">
  <figcaption>The restoring force and acceleration are proportional to displacement and opposite to it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--06-shm-graphs.webp" width="900" height="1110" alt="Three stacked graphs over one period for amplitude 0.050 m and omega 4.0 per second: x is a cosine, v a negative sine with maximum 0.20 m/s a quarter cycle ahead of x, and a a negative cosine with maximum 0.80 m/s^2 in antiphase with x. Dotted lines mark quarter periods." loading="lazy">
  <figcaption>v leads x by a quarter cycle and a is in antiphase with x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--07-shm-energy.webp" width="900" height="1080" alt="For a 0.250 kg oscillator with A 0.080 m and f 1.8 Hz the total energy is 0.102 J. Against displacement, Ep is an upright parabola and Ek an inverted parabola under a flat total line, crossing at plus and minus A over root 2. Against time each energy completes two cycles per oscillation and they are in antiphase." loading="lazy">
  <figcaption>Energy swaps between kinetic and potential, with the total constant when there is no damping.</figcaption>
</figure>


## Damping

| Type | Behaviour | Example |
|---|---|---|
| Light | Oscillates; amplitude falls each cycle; period almost unchanged | Playground swing left alone |
| Critical | Returns to equilibrium fastest with no oscillation | Car suspension, door closer |
| Heavy | No oscillation; slow return | Door closer set too stiff |

If the resistive force grows with speed, the amplitude falls by the same fraction each cycle. Mechanical energy becomes thermal energy.

## Required practical 4

**Pendulum:** vary l, time 10 oscillations from a fiducial marker at equilibrium, find T, plot T² against l. Gradient 4π²/g.

**Mass-spring:** vary m, time 10 oscillations, plot T² against m. Gradient 4π²/k.

**Good practice:**

- Time multiple oscillations and repeat; take the mean.
- Start and stop at equilibrium with a fiducial marker, where the speed is highest and the timing error smallest.
- Use a set square and plumb line to check the string is vertical and to set a small angle.
- Keep the pendulum angle small.
- Use at least six values and a line of best fit.
- Percentage uncertainty in T² is double that in T.
- For the spring, mass of the spring itself means the line does not pass through the origin.

**Worked reminder (damping).** A lightly damped oscillator has amplitude 6.0 cm. After 10 oscillations it is 3.0 cm. If the energy is proportional to amplitude squared, the fraction of energy left is (3.0/6.0)² = **0.25**, so **75%** has been transferred to thermal energy of the surroundings. A second 10 oscillations would leave the amplitude at 1.5 cm if the same fraction is lost each time.

**What to write in a "describe" answer on damping.** Name the resistive force. State that energy is transferred out of the oscillator. State that the amplitude decreases with time. State what happens to the period (almost no change for light damping). Name the type if asked: light, critical or heavy.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--04-vertical-circle.webp" width="900" height="810" alt="A 0.50 kg ball on a 0.80 m string. At the top (4.0 m/s) tension 5.1 N and weight 4.9 N both point down; at the bottom (6.9 m/s) tension 34.5 N points up and weight 4.9 N down, arrows to scale. The bottom tension exceeds the top by 6mg = 29.4 N, and the minimum speed at the top (T = 0) is sqrt(gr) = 2.8 m/s." loading="lazy">
  <figcaption>Tension is least at the top and greatest at the bottom, differing by 6mg for a freely moving ball.</figcaption>
</figure>


## Forced vibrations and resonance

1. A driver applies a periodic force at frequency f.
2. After the start-up, the system vibrates at f.
3. Amplitude rises as f approaches the natural frequency f₀ and peaks at resonance.
4. More damping gives a **lower, broader** peak, slightly below f₀. Light damping gives a **tall, sharp** peak.

**Examples:** a child on a swing, a loose car panel rattling at one engine speed, footbridges, vehicle suspension, musical instruments, and stationary waves on strings and in air columns.

**Stationary-wave resonance.** A string fixed at both ends resonates at f = v/2L, then 2f, 3f and so on. An air column closed at one end resonates when the length is λ/4, then 3λ/4, 5λ/4.

**Worked reminder.** A string of length 1.0 m with wave speed 50 m s⁻¹: lowest resonance f = 50 / 2.0 = **25 Hz**; next **50 Hz**. A closed tube resonates at its shortest length of 0.15 m: λ = 0.60 m, so f = 340 / 0.60 = **567 Hz**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--08-damping-resonance.webp" width="900" height="1110" alt="Top: displacement against time for light, critical and heavy damping, with a dashed envelope on the light-damping curve. Bottom: amplitude of a forced oscillation against driving frequency over natural frequency; light damping gives a tall sharp peak near f0 and heavy damping a lower, broader peak at slightly lower frequency." loading="lazy">
  <figcaption>Damping removes energy; resonance is largest when the driving frequency matches the natural frequency, and damping flattens it.</figcaption>
</figure>


## Must-know distinctions

| Compare | Point |
|---|---|
| Natural vs driving frequency | Natural depends on the system. Driving comes from the driver. Resonance needs them equal. |
| Free vs forced | Free: natural frequency. Forced: driver's frequency. |
| Light vs critical damping | Light: oscillates. Critical: shortest time, no oscillation. |
| Energy vs motion frequency | Ek and Ep cycle at twice the frequency of the motion. |
| Amplitude vs period | Amplitude does not change T (small angles for a pendulum). |

## Quick self-test

1. Calculate T for a 0.25 kg mass on a spring of stiffness 36 N m⁻¹.
2. Calculate T for a pendulum of length 0.25 m.
3. The mass on a spring is multiplied by 9. By what factor does T change?
4. A pendulum is lengthened to four times its length. By what factor does T change?
5. State how light damping affects the period and the amplitude.
6. A pendulum has a period of 0.80 s. State the frequency of the motion and of its kinetic energy graph.
7. A pendulum's T² against l graph is a line with gradient 4.05 s² m⁻¹. Find g.
8. A string of length 1.2 m has wave speed 90 m s⁻¹. Find its lowest resonant frequency.
9. State what happens to the height and width of a resonance peak when damping is increased.
10. A tube closed at one end is 0.20 m long and resonates at its lowest frequency. The speed of sound is 340 m s⁻¹. Find the frequency.
11. International A-level only: a 0.50 kg mass on a spring with k = 18 N m⁻¹ has amplitude 0.050 m. Find ω, the maximum speed and the total energy.

### Answers

1. T = 2π√(0.25/36) = **0.52 s**
2. T = 2π√(0.25/9.81) = **1.0 s**
3. T ∝ √m, so T is multiplied by **3**.
4. T ∝ √l, so T is multiplied by **2**.
5. The period is almost unchanged. The amplitude falls with time.
6. Motion: 1/0.80 = **1.25 Hz**. Kinetic energy: twice that, **2.5 Hz**.
7. g = 4π² / 4.05 = **9.7 m s⁻²** (9.75).
8. λ = 2.4 m, so f = 90 / 2.4 = **37.5 Hz**.
9. The peak is lower and broader.
10. λ = 4 × 0.20 = 0.80 m, so f = 340 / 0.80 = **425 Hz**.
11. ω = √(18/0.50) = **6.0 rad s⁻¹**. Maximum speed = ωA = 6.0 × 0.050 = **0.30 m s⁻¹**. Total energy = ½kA² = ½ × 18 × 0.050² = **0.0225 J**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--01-radian-omega-v.webp" width="900" height="1160" alt="A circle with a 1 radian sector: the arc along the edge is as long as the radius and the angle is about 57.3 degrees, with quarter, half and three-quarter turns marked as pi/2, pi, 3pi/2 and 2pi. Below, a turntable at 45 rpm has omega 4.71 rad/s everywhere; a point at 0.10 m moves at 0.47 m/s and a point at 0.20 m at 0.94 m/s, so v = omega r." loading="lazy">
  <figcaption>One radian is the angle whose arc equals the radius, and at the same ω a point further out moves faster.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-motion-in-a-circle--02-centripetal-acceleration.webp" width="900" height="710" alt="Balls on a circle have tangent velocity arrows of equal length and acceleration arrows pointing to the centre, at right angles to the velocity. A vector triangle shows v1 and v2 and their difference delta v pointing towards the centre. A dashed line shows a ball moving straight on if the force is removed." loading="lazy">
  <figcaption>Speed is constant but the velocity turns, so the change in velocity and the acceleration point towards the centre.</figcaption>
</figure>


## Where marks are usually lost

- Taking the string length alone instead of the distance to the centre of the bob.
- Stating that T depends on amplitude or on the mass of a pendulum bob.
- Not squaring or square-rooting correctly when rearranging T = 2π√(m/k).
- Describing Ek and Ep graphs against time without saying they are at twice the motion's frequency.
- Saying that resonance occurs at "high" driving frequencies instead of equal frequencies.
- Describing damping as "slowing the oscillation" without stating that the amplitude falls and why (energy loss).
- Mixing up the effect of more damping on peak height and on sharpness.
- Quoting a graph gradient without the 4π² step, or without units.
- Giving an answer for the closed tube using λ/2 rather than λ/4.

## Frequently asked questions

**What is critical damping?**
Critical damping returns a system to equilibrium as quickly as possible without oscillating. Car suspension is the usual example.

**How does damping affect a resonance curve?**
Light damping gives a tall, narrow peak very close to the natural frequency. Heavier damping gives a lower, broader peak slightly below the natural frequency.

**Why does the pendulum period formula need a small amplitude?**
The derivation uses sin θ ≈ θ for small angles in radians. Only then is the restoring force proportional to displacement, giving T = 2π√(l/g).

**Why does a T² against m graph for a spring not pass through the origin?**
The spring has mass of its own, which also moves as it oscillates. This adds to the effective mass, so the line is shifted away from the origin.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Sections 3.5.1 and 3.5.2, with the derivation in 3.6.2.
