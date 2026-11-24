---
title: "Cambridge AS & A Level Physics (9702): Doppler effect for sound waves"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Waves"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 7.3
syllabusTopics:
  - qualification: "a-level"
    topic: "as-waves"
    subtopic: "as-doppler-effect-for-sound-waves"
description: "Subtopic 7.3 of Cambridge AS Physics 9702 in depth: why a moving source changes the observed frequency, choosing the sign and solving for source speed."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **7.3 Doppler effect for sound waves**, the third
subtopic of AS Topic 7, Waves, in Cambridge International AS & A Level Physics
9702 (2025–2027 series). The [Waves study guide](/resources/as-physics-waves/)
introduces the formula; this page explains where it comes from, how to choose
the sign, and how to handle the problem types that appear most often: finding
the source speed, using two observed frequencies, and sources moving in a
circle. For quick recall, use the
[Doppler effect revision notes](/resources/cambridge-a-level-physics-9702-as-doppler-effect-for-sound-waves-revision-notes/),
then try the [Doppler effect practice questions](/resources/cambridge-a-level-physics-9702-as-doppler-effect-for-sound-waves-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, 7.3 Doppler effect for sound waves**

Candidates should be able to:

- understand that when a source of sound waves moves relative to a stationary
observer, the observed frequency is different from the source frequency
(understanding of the Doppler effect for a stationary source and a moving
observer is not required)
- use the expression f₀ = fₛv/(v ± vₛ) for the observed frequency when a source
of sound waves moves relative to a stationary observer

Here f₀ is the observed frequency, fₛ the source frequency, v the speed of
sound and vₛ the speed of the source. Only a **moving source** and a
**stationary observer** are examined.

## Why the observed frequency changes

A source of frequency fₛ emits one wavefront every period T = 1/fₛ. Each
wavefront travels outwards at the speed of sound v, which is set by the air,
not by the motion of the source.

If the source is **stationary**, wavefronts are equally spaced in every
direction, one wavelength λ = v/fₛ apart.

If the source **moves towards** the observer at speed vₛ, then during each
period:

- the previous wavefront travels a distance vT towards the observer
- the source itself moves a distance vₛT in the same direction before
emitting the next wavefront

So the wavefronts ahead of the source are closer together:

```
observed wavelength ahead:   lambda' = (v - vs) T = (v - vs) / fs
observed frequency:          fo = v / lambda' = fs v / (v - vs)
```

Behind a source that is **moving away**, the wavefronts are spread out:

```
lambda' = (v + vs) / fs        fo = fs v / (v + vs)
```

You do not need to reproduce this derivation, but it gives the explanation
that "explain" questions reward: the **wavelength** reaching the observer
changes, the **speed** of sound does not, so the **frequency** changes.

## Choosing the sign

| Source motion | Wavefronts | Formula | Observed frequency |
|---|---|---|---|
| Towards the observer | Bunched | f₀ = fₛv/(v − vₛ) | Higher than fₛ |
| Away from the observer | Spread out | f₀ = fₛv/(v + vₛ) | Lower than fₛ |

A quick check: approaching sources sound higher, so the denominator must be
smaller, so use minus.

**What the listener hears.** For a source moving at constant speed directly
towards a listener, the observed frequency is constant and higher than fₛ. As
it passes, the frequency drops, and it then stays constant and lower than fₛ
while the source moves away. The *loudness* increases as the source gets
closer, but loudness is not the Doppler effect: the effect is the change in
frequency.

## Worked examples

**1. Finding the source speed from one observation.** A siren of frequency
800 Hz approaches a stationary observer, who hears 850 Hz. The speed of sound
is 340 m s⁻¹.

```
850 = 800 x 340 / (340 - vs)
340 - vs = 800 x 340 / 850 = 320
vs = 20 m/s
```

**2. Two observations, unknown source frequency.** A car sounds its horn
continuously while driving past a stationary observer at constant speed. The
observer hears 520 Hz as the car approaches and 480 Hz as it moves away.
Speed of sound 340 m s⁻¹. Find the car's speed and the horn's frequency.

```
approaching: 520 = fs v / (v - vs)
receding:    480 = fs v / (v + vs)
divide:      520 / 480 = (v + vs) / (v - vs)
             520 (v - vs) = 480 (v + vs)
             40 v = 1000 vs
             vs = 0.040 x 340 = 13.6 m/s
then:        fs = 520 x (340 - 13.6) / 340 = 499 Hz
```

Dividing the two equations removes fₛ, which is the standard method whenever
the source frequency is not given. Notice that fₛ is not simply the mean of
520 Hz and 480 Hz, although for slow sources it is close.

**3. A source moving in a circle.** A small loudspeaker emitting 1200 Hz is
whirled in a horizontal circle of radius 0.80 m at 2.5 revolutions per second.
An observer stands some distance away in the plane of the circle. Speed of
sound 340 m s⁻¹.

```
speed of source  vs = 2 pi r x (rev per second) = 2 pi x 0.80 x 2.5 = 12.6 m/s
maximum fo = 1200 x 340 / (340 - 12.6) = 1246 Hz   (moving directly towards)
minimum fo = 1200 x 340 / (340 + 12.6) = 1157 Hz   (moving directly away)
```

The observed frequency rises and falls once per revolution between these
limits. It equals 1200 Hz at the two moments when the source's velocity is at
right angles to the line joining it to the observer.

## Scope reminders

- **Moving observer** cases are explicitly not required. If an exam question
mentions a moving listener and a fixed source, it is outside this subtopic.
- The **speed of sound is unchanged** by the source's motion. Only the
wavelength and frequency reaching the observer change.
- The Doppler effect for light (redshift) is A Level content in Astronomy and
cosmology, with a different equation; it is not part of 7.3.

## Exam technique

- **Explain why the frequency increases**: wavefronts emitted closer
together → shorter observed wavelength → speed of sound unchanged → higher
frequency (f = v/λ). Each link earns credit.
- **Calculate**: write the formula with the sign chosen *before* substituting,
and say why ("source approaching, so minus").
- **Determine the speed of the source**: rearrange step by step rather than
in one line; most errors come from algebra, not physics.
- **State and explain the change** heard as a source passes: describe the
frequency before and after, not just "it goes lower".

## Common mistakes

- Using v + vₛ for an approaching source.
- Saying the speed of sound increases when the source moves towards the
observer.
- Confusing the Doppler effect with the increase in loudness.
- Using the moving-observer formula, which is not on the syllabus.
- Assuming the source frequency is the average of the two observed
frequencies.

## Quick revision checklist

- Moving source, stationary observer only
- Wavefronts bunch ahead and spread behind; v unchanged, λ changes
- f₀ = fₛv/(v − vₛ) approaching; f₀ = fₛv/(v + vₛ) receding
- Divide the two equations to find vₛ when fₛ is unknown
- Circular motion: maximum and minimum f₀ when moving directly towards and
away

## Frequently asked questions

**Does the source frequency change in the Doppler effect?**
No. The source still emits at fₛ. It is the frequency received by the
stationary observer that differs.

**Why is the moving-observer case not on the syllabus?**
The Cambridge 9702 syllabus restricts 7.3 to a moving source and a stationary
observer, and states that the other case is not required.

**What does the observer hear as the source passes?**
A higher, constant frequency while it approaches, then a sudden fall to a
lower, constant frequency as it moves away (for constant speed in a straight
line through the observer's position).

## More resources on this topic

- [Waves](/resources/as-physics-waves/) — the whole of Topic 7 in one guide
- [Progressive waves](/resources/cambridge-a-level-physics-9702-as-progressive-waves/) — subtopic 7.1, v = fλ and wave terms
- [Astronomy and Cosmology](/resources/a-physics-astronomy-and-cosmology/) — the A Level treatment of Doppler redshift for light
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
