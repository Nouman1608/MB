---
title: "OxfordAQA International AS and A-level Physics: Superposition and stationary waves (9630) -- Revision Notes"
seoTitle: "OxfordAQA A-level Physics Stationary Waves Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Superposition and stationary waves"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "AS"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 109
syllabusTopics:
  - qualification: "a-level"
    topic: "oscillations-and-waves-oxfordaqa-alevel"
    subtopic: "principle-of-superposition-and-stationary-waves-oxfordaqa"
description: "Condensed revision notes on stationary waves, harmonics, f = (1/2l)√(T/μ) and string experiments for OxfordAQA International AS and A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense section 3.5.5 (Principle of superposition of waves and formation of stationary waves) of the OxfordAQA International AS and A-level Physics (9630) specification, Version 4.4. It is shared International AS and A-level content. For full explanations and worked examples, read the [study guide](/resources/oxfordaqa-a-level-physics-superposition-and-stationary-waves/). Test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-superposition-and-stationary-waves-practice/), use the [course hub](/boards/oxfordaqa/a-level/physics/) and tick points off the [printable checklist](/checklists/oxfordaqa/a-level/physics/). Not sure what to revise first? Take a [free diagnostic](/diagnostics/).

## Key definitions

- **Principle of superposition:** at a point where waves meet, add their separate displacements (with signs) to get the resultant.
- **Stationary wave:** a pattern of fixed nodes and antinodes made when two same-frequency waves moving in opposite directions superpose. It does not transfer energy along its length.
- **Node:** a point of zero amplitude. The waves are always in antiphase there.
- **Antinode:** a point of maximum amplitude. The waves are always in phase there.
- **First harmonic:** the lowest-frequency stationary wave on a string fixed at both ends. The terms fundamental and overtone are not used.

## Formation: graphical explanation in steps

Two waves, amplitude A, one moving each way.

1. t = 0: waves coincide. Resultant is 2A at the crests and has the shape of one wave with double amplitude.
2. t = T/4: each wave has moved λ/4 in opposite directions. They are in antiphase everywhere. Resultant is zero everywhere.
3. t = T/2: waves coincide again. Resultant is the t = 0 pattern inverted.
4. Nodes stay at the same places throughout. Antinodes oscillate between +2A and −2A.

Distances: node to node = λ/2. Node to adjacent antinode = λ/4.

## Stationary and progressive waves

| Feature | Progressive | Stationary |
|---|---|---|
| Amplitude | Same everywhere | Varies from 0 to maximum |
| Phase | Changes along the wave | Same in a loop, opposite in the next loop |
| Energy transfer | Along the wave | None along the wave |
| Wavelength | Between points in phase | Twice node spacing |

Points within one loop move in phase. Points either side of a node move in antiphase.

## Strings and harmonics

| Harmonic | Loops | λ | f |
|---|---|---|---|
| 1st | 1 | 2l | f₁ |
| 2nd | 2 | l | 2f₁ |
| 3rd | 3 | 2l/3 | 3f₁ |
| nth | n | 2l/n | nf₁ |

An n-harmonic pattern has n loops, n + 1 nodes (including both fixed ends) and n antinodes.

**First harmonic:** f = (1/2l) √(T/μ). Also v = √(T/μ), v = fλ.

| Change | Effect on f₁ |
|---|---|
| l doubled | halved |
| T quadrupled | doubled |
| μ quadrupled | halved |
| T doubled | multiplied by √2 (about 1.41) |

**Method in steps for a string calculation:**
1. Identify the harmonic and write λ in terms of l.
2. Find v from v = fλ, or from v = √(T/μ) if T and μ are given.
3. Rearrange: T = μv² or μ = T/v².
4. Convert units first: grams to kilograms, centimetres to metres.
5. Check the answer scales sensibly with the table above.

**Quick example.** l = 0.55 m, T = 36 N, μ = 1.8 × 10⁻³ kg m⁻¹. v = √(36 / 1.8 × 10⁻³) = √20 000 = 141.4 m s⁻¹. f₁ = 141.4 / 1.10 = 128.6 Hz, so **129 Hz** to 3 s.f. Fourth harmonic: 4 × 128.6 = **514 Hz**.

## Microwaves

- Transmitter faces a metal plate. Incident and reflected waves superpose.
- A probe receiver moved between them finds minima (nodes) and maxima (antinodes).
- Minima are λ/2 apart. Measure over many gaps: with N successive minima, there are N − 1 gaps.
- Then f = c/λ with c = 3.00 × 10⁸ m s⁻¹.

**Quick example.** The first and sixth minima are at 5.2 cm and 12.7 cm. Six minima make 5 gaps, so λ/2 = 7.5 / 5 = 1.50 cm and λ = 3.0 cm. Then f = 3.00 × 10⁸ / 0.030 = 1.0 × 10¹⁰ Hz.

## Sound

- Loudspeaker facing a flat reflector. A microphone and oscilloscope find minima and maxima.
- Sound is longitudinal. At a displacement node the air does not move, but pressure change is greatest there.
- λ = v/f. Minimum-to-minimum = λ/2. Minimum-to-maximum = λ/4.

**Quick example.** f = 850 Hz, v = 340 m s⁻¹: λ = 0.40 m, minima 0.20 m apart, minimum to maximum 0.10 m.

## String experiments

Vibration generator, signal generator, bridge, pulley and hanging masses (T = mg).

| Vary | Keep fixed | Plot | Gradient |
|---|---|---|---|
| l | T, μ | f against 1/l | ½√(T/μ) |
| T | l, μ | f² against T | 1/(4l²μ) |
| μ | l, T | f² against 1/μ | T/(4l²) |

Technique points:
- Increase frequency slowly until one big loop forms (first harmonic). Find the centre of the range of maximum amplitude.
- Measure μ by weighing a long length and dividing by its length.
- Repeat and average. Use a long baseline for l.
- A straight line through the origin confirms the proportionality.

## Must-know distinctions

- **Wavelength vs loop length:** a loop is λ/2.
- **Node vs antinode:** zero amplitude vs maximum amplitude.
- **Harmonic number vs frequency ratio:** nth harmonic has frequency nf₁, not n + 1.
- **Stationary vs standing still:** the medium oscillates; only the pattern is fixed.

## Superposition: quick reminders

Add displacements with their signs. Waves with displacements +2.4 mm and +1.1 mm give +3.5 mm (reinforcement). Waves with +2.4 mm and −1.1 mm give +1.3 mm. Equal and opposite displacements give zero (cancellation). The waves do not change each other: each continues unaltered after crossing.

## Two more worked reminders

**Finding a harmonic number.** A string of length 0.75 m is driven at 200 Hz and shows three loops. Three loops means the third harmonic, so λ = 2l/3 = 0.50 m. Then v = fλ = 200 × 0.50 = 100 m s⁻¹, and the first harmonic is 200 / 3 = 66.7 Hz.

**Finding μ from an experiment.** A 2.50 m length of string has mass 6.0 g, so μ = 6.0 × 10⁻³ / 2.50 = 2.4 × 10⁻³ kg m⁻¹. Hanging 1.5 kg gives T = 1.5 × 9.81 = 14.7 N. On a vibrating length of 0.50 m, f₁ = (1 / 1.00) × √(14.7 / 2.4 × 10⁻³) = √6125 = 78.3 Hz.

## Answer templates

**Describe the formation of a stationary wave.** Name the two waves (for example the incident wave and its reflection). Say they have the same frequency and travel in opposite directions. Say they superpose. State that nodes occur where the waves are always in antiphase and antinodes where they are always in phase. Add that the pattern stores energy but does not transfer it along the medium.

**Describe a string experiment.** Name the independent variable, the measured variable and the two quantities kept constant. Say how you measure each one, how you find the frequency of the first harmonic, how you reduce uncertainty by repeating, and which graph you plot with what the gradient means.

**Explain a change.** Link a change to the formula: for example, a thicker string has larger μ, so v = √(T/μ) is smaller and the first harmonic frequency falls.

## Quick self-test

1. State the condition for two waves to form a stationary wave.
2. A string of length 0.60 m vibrates in its first harmonic. State λ.
3. A string has first harmonic 80 Hz. Give the frequency of the third harmonic.
4. How many nodes (including ends) are there in the fourth harmonic?
5. Calculate v for a string with T = 25 N and μ = 4.0 × 10⁻³ kg m⁻¹.
6. The tension in a string is increased by a factor of 9. By what factor does f₁ change?
7. Adjacent minima in a microwave stationary wave are 1.4 cm apart. Find λ.
8. State the phase difference between points in neighbouring loops.
9. Sound of 1.00 kHz in air at 340 m s⁻¹ forms a stationary wave. Find the distance between adjacent nodes.
10. Which graph gives a straight line through the origin for varying tension?

### Answers

1. The same frequency, and motion in opposite directions through the same region.
2. λ = 2l = **1.2 m**.
3. 3 × 80 = **240 Hz**.
4. Five nodes.
5. v = √(25 / 4.0 × 10⁻³) = √6250 = **79 m s⁻¹**.
6. √9 = 3, so f₁ becomes **three times** larger.
7. λ = 2 × 1.4 = **2.8 cm**.
8. **π rad (180°)**, so they move in antiphase.
9. λ = 340 / 1000 = 0.34 m, so nodes are **0.17 m** apart.
10. f² against T.

## Where marks are usually lost

- Calling the node-to-node distance a full wavelength.
- Writing "fundamental" where the question wants "first harmonic".
- Describing a stationary wave as one that "does not move" without saying that the medium still oscillates.
- Using only one time in a graphical explanation, instead of showing t = 0 and t = T/4 and what the sum is.
- Forgetting to convert grams to kilograms when finding μ.
- Using the string's total length when only a section vibrates between supports.
- Counting minima instead of gaps when finding λ from a microwave experiment.
- Saying the frequency of the nth harmonic is n + 1 times the first.
- Not saying which two quantities are kept constant in a string investigation.

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), specification Version 4.4, for exams from May/June 2020 onwards, published by OxfordAQA. These notes cover section 3.5.5.
