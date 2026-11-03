---
title: "IB DP Physics: Standing waves, resonance and damping (DP Physics) -- Revision Notes"
seoTitle: "IB Physics Standing Waves and Damping Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Standing waves, resonance and damping"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 287
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-c"
    subtopic: "ib-dp-physics-c-4"
description: "Condensed revision notes on standing waves, pipes, strings, resonance and damping for IB Diploma Physics C.4, with a self-test and common mistakes."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

These notes condense section C.4 of the IB *Physics guide* (first assessment 2025) for the final weeks. C.4 is common to SL and HL, with no additional higher-level content. For full explanations and longer worked examples, use the [study guide](/resources/ib-dp-physics-standing-waves-resonance-and-damping/). Test yourself with the [practice questions](/resources/ib-dp-physics-standing-waves-resonance-and-damping-practice/), tick off outcomes on the [printable checklist](/checklists/ib/ib-dp/physics/), see the [IB Physics hub](/boards/ib/ib-dp/physics/), and find weak spots with the [free diagnostics](/diagnostics/).

## Key definitions

| Term | Meaning |
|---|---|
| Standing wave | Superposition of two matching waves moving in opposite senses; the pattern does not move and no net energy is carried along the medium |
| Node | Point of permanently zero amplitude (the two waves are always in antiphase there) |
| Antinode | Point of maximum amplitude (the two waves are always in phase there) |
| Boundary condition | The constraint at the end of a string or pipe that decides which wavelengths fit |
| First harmonic | The lowest frequency standing wave that fits |
| Natural frequency | Frequency at which a system oscillates freely after a disturbance |
| Driving frequency | Frequency of the periodic external force applied to a system |
| Resonance | Large amplitude response when the driving frequency is at or very near a natural frequency |
| Damping | Dissipative force that removes energy from an oscillation |

## Pattern facts

- Node to adjacent node: λ/2. Node to adjacent antinode: λ/4.
- Amplitude at distance x from a node: A sin(2πx/λ), where A is the antinode amplitude.
- Same loop: in phase. Adjacent loops: phase difference π. Two loops apart: in phase.
- All points oscillate at the same frequency. Only the amplitude changes with position.
- Travelling wave: every point has the same amplitude, energy moves along the medium. Standing wave: amplitude varies with position, no net energy transfer along the medium.

## Strings and pipes at a glance

| System | Ends | Allowed harmonics n | Wavelength | Frequency |
|---|---|---|---|---|
| String fixed at both ends | node, node | 1, 2, 3, ... | λ = 2L/n | f = n v / 2L |
| Pipe open at both ends | antinode, antinode | 1, 2, 3, ... | λ = 2L/n | f = n v / 2L |
| Pipe closed at one end | node (closed), antinode (open) | 1, 3, 5, ... | λ = 4L/n | f = n v / 4L |

Other boundary conditions: a string with one fixed and one free end (node, antinode) follows the closed-pipe rule, f = n v / 4L with odd n. A string free at both ends (antinode, antinode) and a pipe closed at both ends (node, node) follow f = n v / 2L with all n.

Shapes of the first harmonic, with N for node and A for antinode:

```
String, fixed both ends:   N ------ A ------ N       L = λ/2
Open pipe:                 A ------ N ------ A       L = λ/2
Closed pipe (closed left): N ------------- A         L = λ/4
```

In a pipe, the displacement picture is used: closed end is a node because the air cannot move there.

Method in steps for a harmonic question:

1. Decide the boundary conditions (node or antinode at each end).
2. Draw the pattern you need and count quarter- or half-wavelengths into the length L.
3. Write L in terms of λ, then use v = fλ.
4. Check that the harmonic number is allowed for the system. A closed pipe has no second harmonic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--03-string-harmonics.webp" width="900" height="1060" alt="A 0.80 m string fixed at both ends shows one, two and three loops at 150, 300 and 450 Hz with wavelengths 1.60, 0.80 and 0.533 m. The nth harmonic has n antinodes and n + 1 nodes, and f = nv/2L." loading="lazy">
  <figcaption>Harmonics are whole-number multiples of the first harmonic, f = nv/2L.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--04-open-closed-pipes.webp" width="900" height="1290" alt="Pipes of length 0.60 m with speed of sound 340 m/s. Open pipe: antinodes at both ends, 283, 567 and 850 Hz. Closed pipe: node at the closed end and antinode at the open end, odd harmonics only, 142, 425 and 708 Hz. The closed pipe sounds an octave lower." loading="lazy">
  <figcaption>A closed pipe has a node at the closed end, so only odd harmonics with f = nv/4L.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--05-end-conditions.webp" width="900" height="1140" alt="Six cases with their lowest pattern. Equal ends (fixed-fixed, free-free, open-open, closed-closed) follow f = nv/2L with every n. One node end and one antinode end (fixed-free string, closed-open pipe) follow f = nv/4L with odd n only." loading="lazy">
  <figcaption>Same end types give nv/2L; mixed end types give nv/4L with odd n.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--06-resonance-tube.webp" width="900" height="1020" alt="Two tubes under a 440 Hz fork with water at the first and second resonance. Water level is a node and the open top an antinode. The levels are 0.390 m apart, half a wavelength, so lambda = 0.780 m and v = 440 x 0.780 = 343 m/s." loading="lazy">
  <figcaption>Successive resonances are half a wavelength apart in column length.</figcaption>
</figure>


## Worked reminders

**String.** A string of length 0.80 m, wave speed 240 m/s. f₁ = 240 ÷ 1.60 = 150 Hz. Third harmonic: 450 Hz, with λ = 1.60 ÷ 3 = 0.533 m.

**Closed pipe.** Closed pipe length 0.60 m, speed of sound 340 m/s. f₁ = 340 ÷ 2.40 = 142 Hz, then 425 Hz and 708 Hz for the third and fifth harmonics.

**Open pipe, same length.** f₁ = 340 ÷ 1.20 = 283 Hz. The closed pipe first harmonic is half this.

**Amplitude.** Antinode amplitude 6.0 mm, point at λ/12 from a node: 6.0 × sin(π/6) = 3.0 mm.

**Resonance tube.** Two successive resonances differ in length by λ/2. A 440 Hz fork with resonances 0.390 m apart: λ = 0.780 m, so v = 343 m s⁻¹.

## Resonance and damping

Resonance in steps:

1. A driving force of frequency f_d is applied to a system of natural frequency f₀.
2. If f_d is far from f₀ the amplitude is small.
3. As f_d approaches f₀, the driver adds energy in step with the motion and the amplitude rises.
4. At the peak, energy input per cycle equals energy dissipated per cycle.
5. In the steady state the system oscillates at f_d, not f₀.

Effect of increasing damping on the response curve (amplitude against driving frequency):

| Feature | Light damping | Heavier damping |
|---|---|---|
| Maximum amplitude | Large | Smaller |
| Width of peak | Narrow | Broader |
| Peak position | Very close to f₀ | Slightly below f₀ |

Types of damping after a single displacement and release:

| Type | Behaviour |
|---|---|
| Light | Several oscillations, amplitude falls gradually |
| Critical | Fastest return to equilibrium with no overshoot |
| Heavy | No oscillation, but a slower return than critical |

Resonance can be useful (the air column and body of musical instruments reinforcing notes) or destructive (bridges and buildings driven near a natural frequency). Damping, or changes to stiffness and mass, reduce the risk.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--07-resonance-damping-curves.webp" width="900" height="1030" alt="Amplitude against driving frequency over natural frequency for light, more and heavy damping. Light damping gives a tall narrow peak at almost f0; more damping gives a lower, wider peak slightly below f0; heavy damping a low, broad peak clearly below f0." loading="lazy">
  <figcaption>More damping lowers, broadens and shifts the resonance peak to a lower frequency.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--08-damping-types.webp" width="900" height="1120" alt="Displacement-time graphs after release from rest. Light damping oscillates inside a decaying envelope. Critical damping returns to zero fastest without overshoot. Heavy damping also does not oscillate but returns more slowly than critical damping, shown with a dashed critical curve." loading="lazy">
  <figcaption>Critical damping is the fastest return to equilibrium without overshoot.</figcaption>
</figure>


## Wording that earns credit in explanations

Forming a standing wave: a wave travels along the string, reflects at the fixed end, and the reflected wave travels back. The incident and reflected waves have the same frequency and amplitude, so they superpose. Where they are always in antiphase there is a node; where they are always in phase there is an antinode. Only wavelengths that fit the boundary conditions give a stable pattern.

Resonance: the driving frequency equals (or is very close to) the natural frequency, so energy is transferred to the system efficiently on every cycle and the amplitude builds up until the energy lost to damping per cycle equals the energy gained.

Damping and the peak: more damping means more energy dissipated per cycle, so the peak amplitude is lower, the peak is wider, and it sits at a slightly lower frequency.

## Must-know distinctions

- **Counting harmonics.** The first harmonic is the lowest frequency; number upward from it.
- **Open versus closed pipe.** Open: all harmonics, 2L/n. Closed at one end: odd harmonics only, 4L/n.
- **Node versus antinode in terms of phase.** At a node the waves are always in antiphase; at an antinode always in phase.
- **Natural versus driving frequency.** Natural belongs to the system. Driving belongs to the external force.
- **Critical versus heavy damping.** Both stop oscillation. Critical is the fastest return; heavy is slower.

## Quick self-test

1. A string of length 1.2 m is fixed at both ends. What is the wavelength of the third harmonic?
2. A string of length 0.50 m has wave speed 300 m/s. What is the frequency of its first harmonic?
3. A pipe closed at one end has length 0.17 m. Find the first harmonic frequency for a speed of sound of 340 m/s.
4. An open pipe has first harmonic 250 Hz in air where the speed of sound is 340 m/s. Find its length.
5. The antinode amplitude is 8.0 mm. What is the amplitude at a point λ/6 from a node?
6. How many nodes, including the ends, are there on a string fixed at both ends vibrating in its third harmonic?
7. A closed pipe has a first harmonic of 200 Hz. What is the next higher frequency it can resonate at?
8. What is the phase difference between points in adjacent loops of a standing wave?
9. What happens to the resonant frequency when light damping is increased slightly?
10. Which type of damping returns a displaced system to equilibrium in the shortest time without oscillating?
11. Compare the first harmonic of a closed pipe with that of an open pipe of the same length.
12. What condition on driving frequency gives the largest steady-state amplitude of a lightly damped system?

### Answers

1. λ = 2L/3 = 2.4 ÷ 3 = 0.80 m.
2. f₁ = 300 ÷ (2 × 0.50) = 300 Hz.
3. f₁ = 340 ÷ (4 × 0.17) = 500 Hz.
4. L = v/(2f₁) = 340 ÷ 500 = 0.68 m.
5. 8.0 × sin(π/3) = 6.9 mm.
6. Four nodes (two at the ends and two between), with three antinodes.
7. 600 Hz, the third harmonic (the closed pipe has odd harmonics only).
8. π (antiphase).
9. It decreases slightly, moving a little below the natural frequency.
10. Critical damping.
11. The closed pipe's first harmonic is half that of the open pipe.
12. The driving frequency is at or very near the natural frequency.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--02-amplitude-and-phase.webp" width="900" height="1034" alt="A two-loop standing wave with A = 6.0 mm has points P (3.0 mm), Q (about 5.8 mm) in loop 1 and R (6.0 mm) in loop 2. Their displacement-time graphs show the same frequency; P and Q move together and R moves oppositely, a phase difference of pi." loading="lazy">
  <figcaption>Points in one loop are in phase; neighbouring loops are in antiphase.</figcaption>
</figure>


## Where marks are usually lost

- Drawing a closed pipe pattern with a node at the open end.
- Using the open-pipe formula for a closed pipe, or allowing even harmonics in a closed pipe.
- Numbering from a higher mode instead of treating the lowest frequency as the first harmonic.
- Stating that a standing wave transfers energy along the medium.
- Saying points on a standing wave have the same amplitude, or are all in phase.
- Missing "half a wavelength between successive resonances" and using the tube length itself as the wavelength.
- Describing resonance as "when the frequencies are the same" without naming the driving frequency and the natural frequency.
- Saying heavy damping increases the peak height, or that damping changes the natural frequency of the system.
- Confusing critical damping with no damping.
- Leaving out units, or giving answers to more than three significant figures when the data has two or three.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-standing-waves-resonance-and-damping--01-standing-wave-formation.webp" width="900" height="1096" alt="Two identical waves, one moving right and one moving left, are drawn above their sum at one instant. At the dashed lines the two waves are always opposite, so the sum is zero: nodes. Halfway between them the waves add: antinodes. Adjacent nodes are half a wavelength apart and a node to the next antinode is a quarter." loading="lazy">
  <figcaption>Nodes are where two opposite waves always cancel; antinodes are where they always add.</figcaption>
</figure>


## Official syllabus

IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. Section C.4, standing waves and resonance.
