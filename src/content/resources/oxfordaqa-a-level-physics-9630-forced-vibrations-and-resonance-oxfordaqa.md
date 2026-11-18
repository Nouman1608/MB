---
title: "OxfordAQA A-Level Physics (9630): Forced vibrations and resonance"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.5 – Oscillations and waves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 5.2
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "forced-vibrations-and-resonance-oxfordaqa"
description: "Study guide to OxfordAQA 9630 section 3.5.2: free and forced vibrations, resonance, how damping changes the resonance peak, and mechanical and wave examples."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.5.2, Forced vibrations and resonance, in Section 3.5 Oscillations and waves. It is shared International AS and A-level content. Sections 3.5.1 and 3.5.2 are taught together in the [oscillating systems, damping, free and forced vibrations study guide](/resources/oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations/). After this page, condense it with the [forced vibrations and resonance revision notes](/resources/oxfordaqa-a-level-physics-9630-forced-vibrations-and-resonance-oxfordaqa-revision-notes/) and test yourself with the [forced vibrations and resonance practice questions](/resources/oxfordaqa-a-level-physics-9630-forced-vibrations-and-resonance-oxfordaqa-practice/).

## What the specification asks for

| Statement in 3.5.2 | What you must be able to do |
|---|---|
| Qualitative treatment of free and forced vibrations | Distinguish them and describe how a forced system responds |
| Resonance and the effects of damping on the sharpness of resonance | Describe resonance; sketch and explain amplitude-frequency curves for different damping |
| Examples of these effects in mechanical systems and situations involving stationary waves | Explain real examples, wanted and unwanted |

The treatment is qualitative: you will not need an equation for the amplitude. You will still use T = 2π√(m/k) and T = 2π√(l/g) from section 3.5.1 to find natural frequencies, and the first-harmonic equation for a string from section 3.5.5.

## Free vibrations

A system vibrates **freely** when it is displaced and released and then left alone, with no periodic force acting on it. It oscillates at its **natural frequency** f₀, set by the system itself: for a mass on a spring f₀ = (1/2π)√(k/m), and for a pendulum f₀ = (1/2π)√(g/l). With no damping the amplitude would stay constant; in practice it slowly decays.

## Forced vibrations

A system undergoes a **forced vibration** when a periodic driving force acts on it. The source of the force is the **driver** and its frequency is the **driving frequency** f.

Three points describe the response once it has settled to a steady state:

1. The system vibrates **at the driving frequency**, not at its natural frequency.
2. The **amplitude** depends on how close f is to f₀.
3. The steady amplitude is reached when the energy supplied by the driver in each cycle equals the energy transferred to the surroundings by damping in each cycle.

Moving through the frequency range for a lightly damped system:

| Driving frequency | Response |
|---|---|
| Much lower than f₀ | Small amplitude; for a system driven by moving its support, close to the driver's own amplitude |
| Close to f₀ | Amplitude rises steeply to a maximum |
| Much higher than f₀ | Amplitude falls towards zero; the system cannot follow the rapid driving |

## Resonance

**Resonance** is the large increase in amplitude that occurs when the driving frequency equals the natural frequency of the driven system (for light damping). At resonance the driver transfers energy to the system most efficiently, because each push arrives at the right point in each oscillation to add to the motion, as when a child on a swing is pushed once per swing.

With no damping the amplitude would keep growing. Damping limits it: the amplitude grows until the energy lost per cycle matches the energy supplied per cycle.

### Worked example 1: predicting resonance

A 0.20 kg mass hangs from a spring of constant 50 N m⁻¹. The top of the spring is attached to a vibration generator whose frequency can be varied. At what frequency will the mass resonate, and what happens at 1.0 Hz and at 5.0 Hz?

f₀ = (1/2π)√(k/m) = (1/2π)√(50/0.20) = **2.5 Hz**.

At 1.0 Hz the mass vibrates at 1.0 Hz with a small amplitude, moving almost in step with the support. At 2.5 Hz the amplitude is very large. At 5.0 Hz the mass vibrates at 5.0 Hz with a very small amplitude.

## Damping and the sharpness of resonance

A graph of amplitude (vertical) against driving frequency (horizontal) is called a resonance curve. Increasing the damping changes it in three ways:

- the **peak amplitude is lower**, because more energy is lost per cycle;
- the **peak is broader** (less sharp): a large response occurs over a wider range of frequencies;
- the **peak moves to a slightly lower frequency** than f₀.

With light damping the peak is tall and narrow, sitting at f₀. With very heavy damping there may be hardly any peak at all. Whatever the damping, the curves converge at very low and very high frequencies.

### Annotated model answer: Barton's pendulums

*Question:* A heavy pendulum (the driver) and several light paper-cone pendulums of different lengths hang from the same horizontal string. Describe and explain what is seen when the driver is set swinging. **[4]**

*Answer:*

- All the light pendulums start to swing at the frequency of the driver, because the driver's motion is passed along the string as a periodic force. *(forced vibration at driving frequency)*
- The light pendulum with the same length as the driver swings with by far the largest amplitude. *(observation)*
- Its natural frequency, which depends only on its length, equals the driving frequency, so it is at resonance and absorbs energy most efficiently. *(explanation)*
- Pendulums much shorter or longer than the driver have natural frequencies far from the driving frequency, so their amplitudes stay small. If the cones are made heavier with damping (for example by attaching larger card discs), the resonant pendulum's amplitude is reduced and the differences between pendulums become less marked. *(damping link)*

The answer earns its marks by linking each observation to natural frequency and driving frequency rather than simply listing what moves.

## Mechanical examples

**Resonance that is useful**

- Pushing a swing once per swing builds a large amplitude with little effort.
- A vibration generator at the resonant frequency of a test structure is used to find its natural frequencies in engineering tests.

**Resonance that must be avoided**

- A car's mirror or panel may vibrate violently at one particular engine speed, when the engine's vibration frequency matches its natural frequency. An engine at 1800 revolutions per minute vibrating once per revolution drives at 1800 / 60 = 30 Hz. Remedies: change the natural frequency (stiffen the mount or change its mass) or add damping (a rubber mounting).
- Bridges and buildings can be driven by wind, traffic or footsteps. In 2000, London's Millennium Footbridge swayed noticeably sideways when crowds crossed it shortly after opening; dampers were fitted before it reopened.
- Car suspensions use shock absorbers so that bumps in the road do not drive large oscillations of the body.

## Resonance with stationary waves

A system that supports stationary waves has many natural frequencies, not just one. A string fixed at both ends resonates whenever the driving frequency allows a whole number of half-wavelengths to fit along it. For the first harmonic

f₁ = (1/2l)√(T/μ)

and the higher harmonics are 2f₁, 3f₁ and so on.

### Worked example 2: a driven string

A string of length 0.50 m under tension 32 N has mass per unit length 5.0 × 10⁻³ kg m⁻¹. A vibration generator drives it near one end. Find the lowest three driving frequencies that give large-amplitude stationary waves.

f₁ = (1 / (2 × 0.50)) × √(32 / 5.0 × 10⁻³) = 1.0 × 80 = **80 Hz**. The next two are **160 Hz** and **240 Hz**.

Between these frequencies the string vibrates with only a small amplitude. The same idea explains why the air in a tube resonates loudly when a loudspeaker or tuning fork above it has a frequency that sets up a stationary sound wave in the tube, and why each musical instrument string or air column picks out certain frequencies.

## Common mistakes

- Saying a forced system vibrates at its natural frequency: it vibrates at the driving frequency.
- Defining resonance as "vibrating at the natural frequency" without the large amplitude and the matching driving frequency.
- Drawing heavier damping with a taller or narrower peak.
- Drawing the heavily damped peak at a higher frequency.
- Forgetting that damping limits the amplitude by balancing energy supplied and energy lost.
- Using "fundamental" for the first harmonic (the specification uses first harmonic).

## Exam technique

- **Describe** forced vibrations: periodic driving force; vibrates at driving frequency; amplitude depends on the frequency match.
- **Explain** resonance: driving frequency = natural frequency → maximum energy transfer → maximum amplitude, limited by damping.
- **Sketch** resonance curves: label axes, mark f₀, and show lower, broader, slightly left-shifted peaks for more damping, all curves meeting at the ends.
- **Suggest** how to reduce unwanted resonance: change the natural frequency (mass or stiffness) or increase damping.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.5.2 Forced vibrations and resonance, published by OxfordAQA.
