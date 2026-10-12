---
title: "OxfordAQA International AS and A-level Physics: Oscillating systems, damping and resonance (9630)"
seoTitle: "OxfordAQA A-level Physics Oscillations and Resonance Guide"
resourceType: "study-guides"
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
description: "Study guide to mass-spring and pendulum periods, oscillation energy, damping, required practical 4, forced vibrations and resonance for OxfordAQA Physics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide follows the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4, for exams from May/June 2020 onwards. It covers sections 3.5.1 (Oscillating systems) and 3.5.2 (Forced vibrations and resonance). Both are shared International AS and A-level content. The derivation of the period formulae sits in section 3.6.2, which is International A-level only, and is marked as such below.

Companion pages: the [revision notes](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations-practice/). See also the [course hub](/boards/oxfordaqa/a-level/physics/) and [printable checklist](/checklists/oxfordaqa/a-level/physics/). Energy ideas build on [work, power, efficiency and conservation of energy](/resources/oxfordaqa-a-level-physics-work-power-efficiency-and-conservation-of-energy/), and the practical work on [measurements and their errors](/resources/a-level-oxfordaqa-physics-measurements-and-their-errors/). Find weak spots with the [free diagnostics](/diagnostics/).

## What these sections ask you to do

| Specification section | What you must be able to do | Applies to |
|---|---|---|
| 3.5.1 | Calculate periods with T = 2π√(m/k) (mass-spring) and T = 2π√(l/g) (simple pendulum) | AS and A-level |
| 3.5.1 | Describe how Ek, Ep and total energy vary with displacement and with time; describe the effects of damping | AS and A-level |
| 3.5.1 | Required practical 4: simple harmonic systems with a mass-spring system and a simple pendulum | AS and A-level |
| 3.5.2 | Describe free and forced vibrations qualitatively; explain resonance and how damping changes its sharpness | AS and A-level |
| 3.5.2 | Give examples in mechanical systems and in situations involving stationary waves | AS and A-level |
| 3.6.2 | Derive the period formulae; use x = A cos ωt, maximum speed ωA and total energy ½mω²A² | International A-level only |

## Words you need

An oscillation is a repeated to-and-fro motion about an equilibrium position. Displacement x is measured from equilibrium, and amplitude A is the maximum displacement. One complete oscillation takes the period T, and the frequency is f = 1/T. Here the resultant force always points towards equilibrium and grows with displacement.

## Period of a mass-spring system

For a mass m on a spring of stiffness k (force per unit extension, in N m⁻¹):

T = 2π√(m/k)

A stiffer spring gives a shorter period. A larger mass gives a longer one. T does not depend on the amplitude. 

**Worked example 1.** A 0.35 kg mass stretches a hanging spring by 0.070 m. Find k, then the period of vertical oscillations.

Equilibrium: kΔL = mg, so k = 0.35 × 9.81 / 0.070 = 49.05 N m⁻¹.
T = 2π√(0.35 / 49.05) = 2π × 0.0845 = **0.53 s**, so f = 1/T = **1.9 Hz**.

## Period of a simple pendulum

A simple pendulum is a small dense bob on a light string of length l, swinging through a small angle. Its period is

T = 2π√(l/g)

The length is measured from the pivot to the centre of the bob. For small amplitudes the period does not depend on the bob's mass or the amplitude.

**Worked example 2.** Find the length of a pendulum with a period of 2.0 s where g = 9.81 m s⁻².

Rearrange: l = gT² / 4π² = 9.81 × 4.0 / 39.48 = **0.994 m**.

## Energy in an oscillation

An oscillator swaps energy between kinetic energy (Ek) and potential energy (Ep): gravitational for a pendulum, elastic for a horizontal mass-spring system. With no energy lost, the total is constant.

| Position | Ek | Ep | Total |
|---|---|---|---|
| Maximum displacement (at rest momentarily) | zero | maximum | constant |
| Equilibrium (maximum speed) | maximum | minimum (zero if taken as reference) | constant |
| In between | falls as displacement grows | rises as displacement grows | constant |

**Against displacement.** Ep is U-shaped, lowest at x = 0 and rising to its largest value at both ends. Ek is the mirror image: highest at the centre and zero at both ends. The total is a horizontal line level with the top of each curve.

**Against time.** The total is again horizontal. Ek and Ep are never negative, and each goes through two cycles in the time the oscillator goes through one. When one is at a maximum the other is zero, and they cross at half the total.

**Worked example 3.** A 0.050 kg pendulum bob is released with its centre 1.8 cm above its lowest point. Find the maximum Ek and the maximum speed.

Maximum Ep = mgh = 0.050 × 9.81 × 0.018 = 8.8 × 10⁻³ J. By the lowest point this has all become Ek, so maximum Ek = **8.8 × 10⁻³ J**. Then v = √(2 × 8.83 × 10⁻³ / 0.050) = **0.59 m s⁻¹**.

## International A-level only: link to simple harmonic motion (3.6.2)

Simple harmonic motion (SHM) has acceleration a = −ω²x, proportional to displacement and directed towards equilibrium. The period is T = 2π/ω.

**Mass-spring.** The restoring force is F = −kx, so ma = −kx and a = −(k/m)x. Compare with a = −ω²x: ω² = k/m, so T = 2π√(m/k).

**Pendulum.** For a small angle θ (in radians), the restoring force along the arc is mg sin θ ≈ mgθ, and θ ≈ x/l. So ma = −(mg/l)x, giving ω² = g/l and T = 2π√(l/g). This is why the amplitude must be small.

Other results for SHM: x = A cos ωt (starting at maximum displacement), v = ±ω√(A² − x²), maximum speed ωA and total energy ½mω²A². At displacement x, Ek = ½mω²(A² − x²) and Ep = ½mω²x².

**Worked example 4.** A 0.30 kg mass oscillates on a spring of stiffness 48 N m⁻¹ with amplitude 0.040 m. Find the total energy, and the speed at x = 0.024 m.

ω² = k/m = 160 s⁻², so ω = 12.6 rad s⁻¹. Total energy = ½mω²A² = ½ × 0.30 × 160 × 0.0016 = **0.038 J**.
Ep at 0.024 m = ½ × 48 × 0.024² = 0.0138 J, so Ek = 0.0384 − 0.0138 = 0.0246 J.
v = √(2 × 0.0246 / 0.30) = **0.40 m s⁻¹**. Check: ω√(A² − x²) = 12.6 × 0.032 = 0.40 m s⁻¹. Maximum speed ωA = 0.51 m s⁻¹.

## Damping

Resistive forces (air resistance, friction, internal forces in the spring) do negative work on a real oscillator. The oscillation is damped: mechanical energy is transferred to thermal energy of the surroundings.

- **Light damping.** The system still oscillates, but the amplitude falls with each cycle. The period is almost unchanged. If the resistive force grows with speed, the amplitude falls by the same fraction each cycle.
- **Critical damping.** The system settles at equilibrium as quickly as possible, with no oscillation (or a negligible overshoot). Examples: car suspension.
- **Heavy damping (overdamping).** The system does not oscillate but creeps back to equilibrium more slowly than with critical damping.

**Worked example 5.** The amplitude of a lightly damped pendulum falls from 8.0 cm to 5.6 cm in 5 oscillations. Find the fraction of the amplitude kept per oscillation and predict the amplitude after 20 oscillations.

Fraction per oscillation: (5.6/8.0)^(1/5) = 0.931. After 20 oscillations: 8.0 × 0.931²⁰ = 8.0 × 0.70⁴ = **1.9 cm**. Because energy is proportional to amplitude squared for this oscillator, the energy fraction lost per cycle is 1 − 0.931² = **13%**.

## Required practical 4

The practical skills section lists methods that suit this work: timing multiple oscillations, a fiduciary marker, and a set square and plumb line.

**Pendulum.** Measure l from the pivot to the centre of the bob. Set a small angle. Mark the equilibrium position with a fiducial marker and start timing as the bob passes it. Time 10 oscillations, repeat, take the mean and divide by 10. Repeat for at least six lengths.

**Mass-spring.** Hang masses from a spring, change m in equal steps, and time 10 oscillations for each.

**Analysis.** Squaring the pendulum formula gives T² = (4π²/g) l, so plotting T² against l gives a straight line starting at the origin, with gradient 4π²/g. Likewise T² against m for a spring has gradient 4π²/k. The spring has mass of its own, which also moves, so this line does not pass through the origin.

**Worked example 6.** A pendulum gives these results:

| l / m | 0.25 | 0.35 | 0.50 | 0.65 | 0.80 | 0.95 |
|---|---|---|---|---|---|---|
| time for 10 oscillations / s | 10.1 | 11.9 | 14.2 | 16.2 | 17.9 | 19.6 |
| T² / s² | 1.02 | 1.42 | 2.02 | 2.62 | 3.20 | 3.84 |

A line of best fit has gradient 4.017 s² m⁻¹. So g = 4π² / 4.017 = **9.83 m s⁻²**. A timing uncertainty of 0.2 s on 14.2 s gives a percentage uncertainty in T of about 1.4%, and about 2.8% in T² (double, as T² is a square). Timing 10 oscillations makes the reaction-time error ten times smaller as a fraction of T.

## Free and forced vibrations (3.5.2)

A **free vibration** happens when a system is displaced once and left alone. It oscillates at its **natural frequency**, f₀, which depends only on the system.

A **forced vibration** happens when a periodic driving force acts on the system. Once it has settled, the system vibrates at the **frequency of the driver**, not at its own natural frequency. Its amplitude depends on how close the driving frequency is to f₀.

## Resonance

**Resonance** occurs when the driver's frequency matches f₀. The amplitude then reaches its largest value and the driver transfers energy at the greatest rate. The amplitude stops growing when energy input per cycle equals energy lost.

**Effect of damping on sharpness.** Plot amplitude against driving frequency.

| Damping | Peak height | Peak shape | Peak position |
|---|---|---|---|
| Light | Tall | Narrow, sharp | Very close to f₀ |
| Heavier | Lower | Broader, flatter | Slightly below f₀ |
| Very heavy | Barely a peak | Almost flat | Hardly any resonance |

More damping removes more energy per cycle, so the amplitude cannot build as high, and a small frequency mismatch matters less, so the peak is broad.

## Examples of resonance

- A child on a swing, pushed once per swing.
- A loose car panel rattling at one engine speed; rubber mounts add damping.
- A footbridge swaying under crowds; dampers limit the motion.
- A musical instrument, where light damping gives a strong, clear note.

Resonance is wanted in instruments and unwanted in structures and machines, where designers add damping.

**Stationary waves.** A stretched string, or an air column in a pipe, has certain natural frequencies at which a stationary wave fits exactly. A driver at one of these frequencies produces large-amplitude vibrations.

**Worked example 7.** A 0.80 m string, fixed at both ends, carries waves at 64 m s⁻¹. A vibration generator drives it. Find the lowest driving frequency that gives resonance, and the next one.

The lowest stationary wave has half a wavelength on the string: λ = 1.6 m. f = v/λ = 64 / 1.6 = **40 Hz**. The next stationary wave has a full wavelength: **80 Hz**.

**Worked example 8.** A 512 Hz tuning fork is held over a tube closed at the bottom. The speed of sound is 340 m s⁻¹. Find the shortest air column that resonates (ignore end effects).

λ = 340 / 512 = 0.664 m. The closed end is a node and the open end an antinode, so the shortest column is a quarter of a wavelength: **0.166 m**. The next one is 3λ/4 = **0.498 m**.

## Common errors

- Measuring pendulum length to the top of the bob, not its centre.
- Saying the pendulum period depends on the bob's mass or the amplitude.
- Giving the energy graphs against time the same frequency as the motion. Theirs is double.
- Saying resonance happens at "high" frequency. It happens when driving frequency equals natural frequency.

## Next steps

Condense the topic with the [revision notes](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations-revision-notes/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations-practice/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams May/June 2020 onwards, published by OxfordAQA. Sections 3.5.1 and 3.5.2, with the derivation in 3.6.2.
