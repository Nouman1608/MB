---
title: "Cambridge A Level Physics (9702): Damped and forced oscillations, resonance"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Oscillations"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 17.3
syllabusTopics:
  - qualification: "a-level"
    topic: "a-oscillations"
    subtopic: "a-damped-and-forced-oscillations-resonance"
description: "Cambridge A Level Physics 9702 subtopic 17.3: how resistive forces damp oscillations, light, critical and heavy damping sketches, and resonance."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **17.3 Damped and forced oscillations, resonance** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Oscillations study guide](/resources/a-physics-oscillations/) introduces damping and resonance within the whole of Topic 17; this page goes further: what a resistive force does to the energy of an oscillator, exactly what a correct damping sketch must show, why a driven system responds most strongly at its natural frequency, and how to answer the explanation questions that come up. For quick recall use the [Damped and forced oscillations revision notes](/resources/cambridge-a-level-physics-9702-a-damped-and-forced-oscillations-resonance-revision-notes/), and for exam-style questions the [Damped and forced oscillations practice questions](/resources/cambridge-a-level-physics-9702-a-damped-and-forced-oscillations-resonance-practice/).

## What 17.3 asks you to do

Candidates should be able to:

- understand that a **resistive force** acting on an oscillating system **causes damping**
- understand and use the terms **light, critical and heavy damping** and **sketch displacement–time graphs** illustrating these types of damping
- understand that **resonance involves a maximum amplitude** of oscillations and that this occurs when an oscillating system is **forced to oscillate at its natural frequency**

The sketching outcome is the one most often under-prepared, so it gets its own section below.

## What a resistive force does

A resistive force always acts **opposite to the velocity** of the oscillating object. Examples include air resistance on a pendulum bob, viscous drag on a mass moving through oil, friction in a hinge, and the electromagnetic braking of a metal plate swinging between magnet poles.

Because the force opposes the motion, it does negative work on the oscillator throughout every cycle. Energy is transferred from the oscillator, usually to internal energy of the surroundings (they warm very slightly). Since the total energy of an oscillator is E = ½mω²x₀², a falling energy means a **falling amplitude**. That is what damping is: the loss of energy, and so of amplitude, caused by resistive forces.

A useful quantitative link uses E ∝ x₀²:

```
amplitude falls from 80 mm to 60 mm
energy remaining = (60/80)² = 0.5625 of the original
energy lost = 1 − 0.5625 = 0.44, or 44%
```

A 25% drop in amplitude means a 44% loss of energy, so energy disappears faster than amplitude.

## Light, critical and heavy damping

| Type | Behaviour after release from a displacement | Typical use or example |
|---|---|---|
| Light | Oscillates; amplitude decreases gradually; period almost unchanged | A pendulum swinging in air; a plucked string |
| Critical | Returns to equilibrium in the **shortest possible time without oscillating** | Vehicle suspension; door closers; the pointer of an analogue meter |
| Heavy | Returns to equilibrium **without oscillating**, but more slowly than critical | A pendulum moving through thick oil |

Two points are worth stating precisely. Critical damping is defined by the shortest time to reach equilibrium **without overshooting**; light damping reaches equilibrium sooner the first time, but then overshoots. Heavy damping does not oscillate at all, yet it is slower than critical damping, because the large resistive force holds the motion back.

## Sketching damping graphs

All three curves should start at the same displacement at t = 0, with zero gradient (the object is released from rest), and use the same time axis.

**Light damping:**

- an oscillation with the **same period** throughout (the zero crossings are evenly spaced)
- peaks that decrease **gradually**, each smaller than the one before by a similar fraction, inside a smooth decaying envelope
- symmetric about the time axis, never reaching zero amplitude in the window drawn

**Critical damping:**

- falls from the starting displacement and approaches zero **without crossing the axis**
- reaches (very close to) zero sooner than the heavy damping curve

**Heavy damping:**

- also does **not cross** the axis
- falls more slowly, staying above the critical curve throughout

Common sketch errors: drawing the critical curve dipping below the axis, making the heavy curve reach zero first, changing the period of the lightly damped oscillation as the amplitude falls, or drawing peaks that decrease by equal amounts in a straight line.

## Free and forced oscillations

A **free oscillation** is one where the system, once displaced, oscillates with no external periodic force acting. It oscillates at its **natural frequency** f₀, which depends only on the system itself (for example, the length of a pendulum, or the mass and spring stiffness).

A **forced oscillation** happens when an external periodic force, the **driver**, acts on the system. After any initial irregular motion dies away, the system oscillates at the **driving frequency**, not its natural frequency. How large the amplitude becomes depends on how close the driving frequency is to the natural frequency.

## Resonance

**Resonance** is the large, maximum-amplitude response of a forced system when the driving frequency equals its natural frequency.

### Why the amplitude is maximum at f₀

At the natural frequency, the driving force can stay in step with the velocity of the oscillator, pushing in the direction of motion throughout each cycle. It therefore does the maximum possible positive work per cycle, transferring energy into the system most efficiently. At other frequencies the driver pushes against the motion for part of each cycle, so less energy is transferred overall.

### Why the amplitude does not grow forever

As the amplitude grows, the oscillator moves faster, so the resistive force and the energy lost per cycle increase. The amplitude stops growing when the **energy lost per cycle to damping equals the energy supplied per cycle by the driver**. Damping therefore sets the size of the resonant amplitude.

### The effect of damping on the resonance curve

On a graph of amplitude against driving frequency:

- with light damping, the peak is **tall and sharp**, centred on f₀
- increasing damping makes the peak **lower and broader**, and moves it slightly towards lower frequencies
- with heavy damping the peak becomes very flat
- at all driving frequencies, the amplitude with more damping is smaller

## Worked example 1: Barton's pendulums

A heavy "driver" pendulum hangs from a taut string together with several light paper-cone pendulums of different lengths, one of which has the same length as the driver. The driver is set swinging. Describe and explain what is observed.

*Model answer.* All the light pendulums are forced to oscillate at the frequency of the driver [1]. The pendulum with the same length as the driver has a natural frequency equal to the driving frequency, so it resonates and oscillates with the largest amplitude [1]. Pendulums with lengths further from the driver's length have natural frequencies further from the driving frequency and oscillate with smaller amplitudes [1].

## Worked example 2: a washing machine

The drum assembly of a washing machine, mounted on springs, has a natural frequency of 4.0 Hz. During a spin cycle the drum speeds up from rest to 1200 revolutions per minute. At what drum speed does the machine shake most violently?

```
resonance when driving frequency = 4.0 Hz = 4.0 rev s⁻¹
drum speed = 4.0 × 60 = 240 revolutions per minute
```

*Annotation.* An unbalanced load acts as the driver, with driving frequency equal to the rotation rate. The shaking is violent briefly as the drum passes through 240 rev min⁻¹, then dies down at higher speeds because the driving frequency is far above the natural frequency. Shock absorbers add damping to limit the resonant amplitude.

## Useful and harmful resonance

- **Useful:** pushing a swing in time with its natural swing; a radio receiver tuned so that its circuit resonates at the frequency of the chosen station; the air column of a wind instrument.
- **Harmful:** a structure driven near its natural frequency by wind, footsteps or machinery. When the London Millennium Bridge opened in 2000, pedestrians caused large sideways swaying, and dampers were fitted to cure it.
- **Remedies:** add damping, or change the natural frequency (by changing mass or stiffness) so it is far from any likely driving frequency.

## Common mistakes

- **Saying damping reduces the period or frequency.** For light damping the period stays almost constant.
- **Defining critical damping as "no oscillation"**: heavy damping also has no oscillation. Include "shortest time".
- **Saying resonance happens when "the frequency is maximum".** It is the amplitude that is maximum.
- **Saying the system oscillates at its natural frequency when forced.** It oscillates at the driving frequency.
- **Explaining the limit on resonant amplitude without damping.** It is set by energy loss balancing energy input.

## Exam technique for the command words

- **State** (meaning of damping): the loss of energy, and so a decrease in amplitude, caused by a resistive force.
- **Sketch**: same starting point, zero initial gradient, constant period for light damping, no crossing for critical and heavy, heavy slower than critical.
- **Explain** (resonance): driving frequency equals natural frequency; maximum energy transfer per cycle; amplitude maximum.
- **Describe** (effect of damping on a resonance curve): lower peak, broader peak, peak shifted slightly to lower frequency, smaller amplitude at all frequencies.
- **Suggest** (why critical damping is chosen): fastest return to equilibrium without overshoot or continued oscillation.

## Related resources

- [Oscillations study guide](/resources/a-physics-oscillations/) — the whole of Topic 17
- [Damped and forced oscillations revision notes](/resources/cambridge-a-level-physics-9702-a-damped-and-forced-oscillations-resonance-revision-notes/)
- [Damped and forced oscillations practice questions](/resources/cambridge-a-level-physics-9702-a-damped-and-forced-oscillations-resonance-practice/)
- [Energy in simple harmonic motion study guide](/resources/cambridge-a-level-physics-9702-a-energy-in-simple-harmonic-motion/) — why energy loss shrinks amplitude

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
