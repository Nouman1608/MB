---
title: "Pearson Edexcel International GCSE Physics (4PH1): Light and sound -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["igcse"]
topic: "Waves"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 3.4
syllabusTopics:
  - qualification: "igcse"
    topic: "waves"
    subtopic: "light-and-sound"
description: "Recall notes for 4PH1 sub-topic 3d: ray rules, n = sin i / sin r, critical angle, optical fibres, speed of sound and oscilloscope readings."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-17
reviewNote: "2026-11-17: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-17
featured: false
---

These notes condense sub-topic **3(d) Light and sound** (statements 3.14 to 3.29) of Pearson Edexcel International
GCSE Physics 4PH1, Issue 4. Statements 3.24P to 3.29P are Physics-only and appear only on Paper 2. For full
explanations and worked examples, use the [Light and sound study guide](/resources/edexcel-igcse-physics-4ph1-light-and-sound/);
to test yourself under exam conditions, use the [Light and sound practice questions](/resources/edexcel-igcse-physics-4ph1-light-and-sound-practice/).

## Equations

```
n = sin i / sin r          (refractive index; no unit)
sin c = 1 / n              (critical angle c)
f = 1 / T                  (frequency from the period on an oscilloscope)
speed = distance / time    (speed of sound; echo distance is there AND back)
```

Both refraction equations are in the specification's list of relationships you must recall: they are not provided in
the exam, either as written or rearranged.

## Light: the rules in one place

- Light is a **transverse** wave; it reflects and refracts.
- **Law of reflection:** angle of incidence = angle of reflection, both measured from the **normal**.
- Into a material with a higher refractive index (air to glass): light **slows**, bends **towards** the normal.
- Out of it (glass to air): light **speeds up**, bends **away** from the normal.
- A ray meeting a surface along the normal (angle of incidence 0°) passes straight through without bending, though
  its speed still changes.
- The larger `n` is, the more the light slows and bends, and the **smaller** the critical angle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--01-reflection-and-refraction-rules.webp" width="900" height="605" alt="Left: a ray reflects from a mirror with the angle of incidence equal to the angle of reflection, both measured from the dashed normal. Right: a ray passing from air into glass slows and bends towards the normal, so the angle of refraction is smaller than the angle of incidence." loading="lazy">
  <figcaption>Measure all angles from the normal; light entering glass bends towards it.</figcaption>
</figure>

## The three blocks in practical 3.17

| Block | What you see | Why it is used |
|---|---|---|
| Rectangular | Emerging ray parallel to incident ray, shifted sideways | Measuring pairs of `i` and `r` for refractive index |
| Semi-circular | Ray aimed at the centre is unbent at the curved face; bends only at the flat face | Watching the critical angle and total internal reflection |
| Triangular prism | Ray deviated towards the base; white light spreads into colours | Refraction at non-parallel faces |

**Practical 3.19 (refractive index):** vary `i`, measure `r`, plot `sin i` (y) against `sin r` (x); gradient = `n`.
A straight line through the origin confirms `sin i / sin r` is constant.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--02-three-block-shapes.webp" width="900" height="550" alt="Rectangular block: the ray bends towards the normal entering and away leaving, so it emerges parallel to the incident ray but shifted. Semi-circular block: the ray enters the curved side along a radius without bending and refracts only at the flat face. Triangular prism: the ray is deviated towards the base and white light spreads into colours." loading="lazy">
  <figcaption>Each block shape shows something different: a parallel shift, one clean refraction, or dispersion.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--03-sin-i-against-sin-r.webp" width="900" height="640" alt="A graph of sin i against sin r with five plotted points and a straight line of best fit through the origin. Using the points (0.225, 0.342) and (0.574, 0.866), the gradient is 0.524 ÷ 0.349 = 1.50, the refractive index." loading="lazy">
  <figcaption>Plot sin i against sin r: the gradient is the refractive index, n = 1.50.</figcaption>
</figure>

## Total internal reflection

Both conditions are needed:

1. light travels from the higher-`n` material towards the lower-`n` one (glass to air, water to air);
2. angle of incidence **greater than** the critical angle.

At exactly `c`, the refracted ray runs along the boundary (refraction angle 90°).

**Optical fibres:** light hits the fibre wall at more than `c`, is totally internally reflected again and again, and
carries information (pulses of light) along the fibre.

**Prisms:** a 45° right-angled glass prism turns light through 90° (one reflection) or 180° (two reflections). It works
because glass has a critical angle below 45°; a material would need `n` above 1.41 for this.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--04-critical-angle-acrylic.webp" width="900" height="620" alt="Acrylic with refractive index 1.49 has a critical angle of 42.2°. A ray inside a semicircular acrylic block meeting the flat surface at 40° refracts out into the air, bending away from the normal; a ray at 50° is totally internally reflected." loading="lazy">
  <figcaption>Below the critical angle light escapes; above it, all of it reflects.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--05-optical-fibre.webp" width="900" height="555" alt="A ray zig-zags along a glass fibre, meeting the side wall each time at an angle greater than the critical angle, so it is totally internally reflected again and again and stays inside." loading="lazy">
  <figcaption>Every bounce is total internal reflection, so the light follows the fibre.</figcaption>
</figure>

## Sound

- Sound is **longitudinal**: vibrations parallel to the direction of travel, forming compressions and rarefactions.
- Sound reflects (echoes) and refracts.
- **Hearing range (3.24P):** 20 Hz to 20 000 Hz.
- **Speed of sound practical (3.25P):** echo method (time many clap-echo intervals, use distance there and back) or
  two microphones a measured distance apart with an oscilloscope or timer (time delay between signals).
- **Oscilloscope (3.26P, 3.27P):** microphone converts sound to a varying voltage; the trace is voltage against time.
  Period = (divisions for one wave) × (timebase setting). Frequency = 1/period.
- **Pitch (3.28P)** depends on frequency: more waves on the screen, higher pitch.
- **Loudness (3.29P)** depends on amplitude: taller trace, louder sound.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--06-speed-of-sound-echo.webp" width="900" height="675" alt="Echo method: a person 80 m from a wall claps in time with the echoes; 20 intervals take 9.6 s, so one interval is 0.48 s, the sound travels 160 m and the speed is 330 m/s. Second method: two microphones a measured distance apart record the time delay." loading="lazy">
  <figcaption>The echo travels to the wall and back: speed = 2 × 80 ÷ 0.48 = 330 m/s.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-physics-4ph1-light-and-sound--07-oscilloscope-frequency.webp" width="900" height="695" alt="An oscilloscope screen of 10 divisions showing a trace in which one complete wave spans 5.0 divisions. With a timebase of 0.20 ms per division the period is 1.0 ms, so the frequency is 1 ÷ 0.0010 = 1000 Hz." loading="lazy">
  <figcaption>Divisions per wave × timebase = period; frequency = 1 ÷ period.</figcaption>
</figure>

## Key terms

| Term | Meaning |
|---|---|
| Normal | Line at 90° to a surface at the point where a ray meets it |
| Angle of incidence | Angle between incoming ray and the normal |
| Angle of refraction | Angle between refracted ray and the normal |
| Refractive index, n | `sin i / sin r` for light entering a material from air; a ratio with no unit |
| Critical angle, c | Angle of incidence inside the material at which the refracted ray travels along the boundary |
| Total internal reflection | All light reflected back inside the material, when the angle of incidence exceeds c |
| Optical fibre | Thin glass strand that carries light by repeated total internal reflection |
| Compression / rarefaction | Region of a sound wave where particles are closer together / further apart |
| Timebase | Oscilloscope setting: time represented by one horizontal division |
| Pitch | How high or low a sound is; set by frequency |
| Loudness | How loud a sound is; set by amplitude |

## Exam traps

- Using the angle between ray and **surface**. If a question gives that angle, subtract it from 90° first.
- Typing `n = 1/sin c` the wrong way round and getting `sin c` above 1 (impossible).
- Saying a ray "reflects" at the boundary of a semi-circular block when the angle is below `c`: some light reflects
  weakly, but most refracts out. Total internal reflection needs an angle **above** `c`.
- Echo calculations: speed = **2d** / t. A wall 100 m away means 200 m of travel.
- Quoting the oscilloscope trace as evidence that sound is transverse. The trace is a voltage-time graph.
- Mixing pitch with loudness. Same pitch, louder: peaks the same distance apart but taller.
- Giving `n` a unit, or giving an angle without the degree sign.

## Self-test

1. State the law of reflection.
2. Light passes from air into water. State what happens to its speed and which way it bends.
3. A ray in air strikes glass at 45° to the normal and refracts at 28°. Calculate the refractive index.
4. Calculate the critical angle of water, refractive index 1.33.
5. A ray inside a glass block (n = 1.52) meets the surface at 45°. Does it leave the block? Show your reasoning.
6. Give the two conditions needed for total internal reflection.
7. Why does a ray aimed at the centre of the flat face of a semi-circular block not bend at the curved surface?
8. Which graph do you plot to find the refractive index of glass, and how do you get `n` from it?
9. State the range of human hearing.
10. A wall is 120 m away. The echo of a clap returns after 0.70 s. Calculate the speed of sound.
11. An oscilloscope timebase is 0.5 ms per division. One wave covers 4 divisions. Calculate the frequency.
12. A sound becomes louder but keeps the same pitch. Describe the change to the oscilloscope trace.

**Answers:** 1. Angle of incidence equals angle of reflection, both measured from the normal. 2. It slows down and bends
towards the normal. 3. `n = sin 45° / sin 28° = 0.707 / 0.469 = 1.51`. 4. `sin c = 1/1.33 = 0.752`, so `c = 48.8°`.
5. `sin c = 1/1.52 = 0.658`, so `c = 41.1°`; 45° is greater than 41.1°, so it is totally internally reflected and
does not leave. 6. Light travels from the higher refractive index material towards the lower one, and the angle of
incidence is greater than the critical angle. 7. It travels along a radius, so it meets the curved surface along the
normal (angle of incidence 0°). 8. `sin i` against `sin r`; `n` is the gradient. 9. 20 Hz to 20 000 Hz.
10. `v = 2 × 120 / 0.70 = 240 / 0.70 = 340 m/s` (2 s.f.). 11. `T = 4 × 0.5 ms = 2.0 ms = 0.0020 s`, so
`f = 1/0.0020 = 500 Hz`. 12. The peaks stay the same distance apart (same frequency) but the trace becomes taller
(larger amplitude).
