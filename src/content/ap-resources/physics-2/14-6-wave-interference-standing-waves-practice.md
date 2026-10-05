---
resourceId: "mb-ap-phys2-14.6-practice"
title: "Wave Interference and Standing Waves: Practice Questions (Physics 2 14.6)"
description: "Seven original Marlbridge practice questions on superposition, beats, nodes and antinodes, harmonics on strings and in pipes, and a graph-based speed of sound task, with solutions."
course: "physics-2"
unit: 14
topics: ["14.6"]
resourceType: "practice-questions"
prerequisites:
  - "Superposition, beats and the harmonic patterns for strings and pipes"
prerequisiteResources: ["mb-ap-phys2-14.6-study-guide"]
learningObjectives:
  - "Add displacements of overlapping pulses"
  - "Calculate beat frequencies and interpret them"
  - "Identify allowed harmonics from the boundary conditions"
  - "Link L, λ, f, v and tension for a standing wave on a string"
  - "Derive and compare harmonic frequencies for open and closed pipes"
  - "Use a linearised graph of data to find the speed of sound"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Speed of sound 340 m/s unless the question gives other data. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-14.6-study-guide", "mb-ap-phys2-14.6-revision-notes", "mb-ap-phys2-14.6-checklist"]
next: "mb-ap-phys2-14.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "For every standing-wave question, draw the pattern before calculating."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: speed of sound 340 m/s unless stated; pipes are ideal (antinode exactly at an open end); f_beat = |f₁ − f₂|; v = fλ; v = √(F_T/μ) on a string. All data are invented for practice. A scientific calculator is assumed.

## Question 1 (multiple choice · foundation)

Two pulses travel toward each other on a stretched spring. Pulse P is an upward displacement of maximum height 3 cm. Pulse Q has the same shape and width but is a downward displacement of maximum depth 1 cm. What is the maximum displacement of the spring at the instant the pulses exactly overlap, and what happens next?

- (A) 2 cm upward; then both pulses continue with their original shapes.
- (B) 4 cm upward; then both pulses continue with their original shapes.
- (C) 2 cm upward; then a single pulse of height 2 cm continues.
- (D) 2 cm upward; then both pulses reflect back the way they came.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Superposition: add the displacements with signs, (+3 cm) + (−1 cm) = +2 cm. Pulses pass through each other unchanged, so after the overlap P and Q carry on as before.

- (B) adds the sizes and ignores that the displacements are in opposite directions.
- (C) treats the overlap as permanent. The +2 cm shape exists only while the pulses overlap.
- (D) treats the pulses like colliding objects. Waves do not bounce off each other.
</details>

## Question 2 (multiple choice · foundation)

Two loudspeakers are driven at 500 Hz and 503 Hz. A listener hears the loudness rise and fall. Which row gives the beat frequency and the time between neighbouring loud moments?

- (A) 3 Hz; 0.33 s
- (B) 3 Hz; 3.0 s
- (C) 501.5 Hz; 0.0020 s
- (D) 1003 Hz; 0.0010 s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f_beat = 503 − 500 = 3 Hz. The time between loud moments is the beat period, 1/(3 Hz) = 0.33 s.

- (B) uses the beat frequency itself as a time. A period is the reciprocal of a frequency.
- (C) uses the average frequency. That is roughly the pitch heard, not how often the loudness peaks.
- (D) adds the frequencies. Beats come from the difference.
</details>

## Question 3 (multiple choice · core)

A pipe is closed at one end and open at the other. Its fundamental frequency is 150 Hz. Which of these is **not** a resonant frequency of the pipe?

- (A) 450 Hz
- (B) 300 Hz
- (C) 750 Hz
- (D) 1050 Hz

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** With a node at the closed end and an antinode at the open end, only odd multiples of the fundamental exist: 150, 450, 750, 1050 Hz … 300 Hz is 2 × 150 Hz, an even multiple, so it cannot occur.

- (A) is 3 × 150 Hz, the third harmonic.
- (C) is 5 × 150 Hz, the fifth harmonic.
- (D) is 7 × 150 Hz, the seventh harmonic.
</details>

## Question 4 (multiple choice · core)

A string fixed at both ends vibrates in its third harmonic. How many nodes (including the two ends) and how many antinodes does the pattern have?

- (A) 3 nodes, 3 antinodes
- (B) 4 nodes, 3 antinodes
- (C) 3 nodes, 4 antinodes
- (D) 4 nodes, 4 antinodes

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The third harmonic has three loops. Each loop has one antinode in the middle, so 3 antinodes. The loops are separated by nodes, and there is a node at each end: 2 inside + 2 ends = 4 nodes.

- (A) forgets one of the end nodes (or counts only the internal ones plus one end).
- (C) swaps the counts: on a string fixed at both ends there is always one more node than antinodes.
- (D) assumes nodes and antinodes always come in equal numbers. That is only true when one end is a node and the other an antinode.
</details>

## Question 5 (calculation · core)

A string 1.20 m long is fixed at both ends and has a mass per unit length of 3.0 × 10⁻³ kg/m. When it is driven at 360 Hz, a standing wave with **four loops** forms.

(a) Find the wavelength and the wave speed.
(b) Find the tension in the string.
(c) Find the fundamental frequency and the next frequency above 360 Hz at which a standing wave forms.
(d) How far apart are neighbouring nodes at 360 Hz?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. **(a)** Four loops, each λ/2 long, fill the string: 4(λ/2) = 1.20 m, so λ = **0.600 m**. v = fλ = 360 Hz × 0.600 m = **216 m/s**.
2. **(b)** v = √(F_T/μ), so F_T = μv² = (3.0 × 10⁻³ kg/m)(216 m/s)² = **140 N** (139.97 N).
3. **(c)** Four loops is the 4th harmonic, so f₁ = 360 ÷ 4 = **90 Hz** (check: v/(2L) = 216 ÷ 2.40 = 90 Hz). The next standing wave is the 5th harmonic: 5 × 90 = **450 Hz**.
4. **(d)** Node spacing = λ/2 = **0.300 m** (or 1.20 m ÷ 4 loops).

| Point | What earns it |
|---|---|
| 1 | λ = 0.600 m from four half-wavelengths in 1.20 m |
| 1 | v = 216 m/s |
| 1 | F_T = μv² ≈ 140 N |
| 1 | f₁ = 90 Hz and next frequency 450 Hz |
| 1 | Node spacing 0.300 m |

Common error: taking λ = 1.20 m ÷ 4 = 0.30 m, which is the length of one loop (half a wavelength), not a full wavelength. Carry forward a wrong λ once.
</details>

## Question 6 (constructed response · core)

A pipe of length L is open at both ends. The speed of sound in the air in the pipe is v.

(a) Sketch the displacement pattern of the fundamental standing wave in the pipe. Mark nodes N and antinodes A.
(b) Derive an expression for the fundamental frequency f_open in terms of L and v.
(c) One end of the pipe is now covered. Sketch the new fundamental and derive its frequency f_closed in terms of L and v. Find f_closed/f_open.
(d) A student says: "Covering one end only changes the fundamental; the covered pipe still has all the same higher harmonics as before." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Antinodes at both open ends with one node in the middle: a half-loop pattern.

**(b)** The pipe holds half a wavelength: L = λ/2, so λ = 2L and **f_open = v/(2L)**.

**(c)** Now a node at the covered end and an antinode at the open end: L = λ/4, so λ = 4L and **f_closed = v/(4L)**. Ratio: f_closed/f_open = (v/4L) ÷ (v/2L) = **1/2**. The fundamental drops by half (an octave lower).

**(d)** The claim is **wrong**. The open pipe has all harmonics, n·v/(2L) = 2, 4, 6 … × v/(4L). The covered pipe has only odd multiples of its new fundamental: v/(4L), 3v/(4L), 5v/(4L) … So the set of frequencies changes completely: for example, the open pipe's v/L (= 4 × v/(4L)) is no longer a resonance, and new ones such as 3v/(4L) appear.

| Point | What earns it |
|---|---|
| 1 | Open–open sketch: A at both ends, N in the middle |
| 1 | f_open = v/(2L) from L = λ/2 |
| 1 | Closed sketch with N at the covered end and A at the open end, and f_closed = v/(4L) |
| 1 | Ratio 1/2 |
| 1 | Rejects the claim, with odd-only harmonics of the covered pipe and at least one example of a frequency that disappears or appears |

Accept numerical illustrations (for example L = 0.34 m gives 500 Hz open and 250 Hz covered) as support, but the derivations must be symbolic.
</details>

## Question 7 (constructed response · stretch)

A group finds the fundamental frequency f of five pipes, each closed at one end, with different lengths L. Their (invented) results:

| L (m) | 0.20 | 0.25 | 0.32 | 0.40 | 0.50 |
|---|---|---|---|---|---|
| f (Hz) | 428 | 346 | 267 | 216 | 171 |

(a) Explain why a graph of f against 1/L should be a straight line through the origin, and state what its gradient represents.
(b) Calculate 1/L for each pipe and plot f against 1/L, with labelled axes, units and a best-fit line.
(c) Use your gradient to find the speed of sound.
(d) Suggest one reason the points do not lie exactly on the line.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For a pipe closed at one end, f₁ = v/(4L) = (v/4)(1/L). This has the form y = mx with y = f and x = 1/L, so the graph is a straight line through the origin with **gradient v/4**.

**(b)** 1/L values: 5.00, 4.00, 3.125, 2.50, 2.00 m⁻¹. Plot f (Hz) on the vertical axis against 1/L (m⁻¹) on the horizontal axis; the five points lie very close to a straight line through the origin.

**(c)** A best-fit line gives a gradient of about 85.8 Hz·m (85.8 m/s). So v = 4 × gradient ≈ **343 m/s**. (Using the end points: (428 − 171) ÷ (5.00 − 2.00) = 85.7 m/s, giving v ≈ 343 m/s. Accept 340–347 m/s.)

**(d)** Any sensible source of error, for example: the antinode actually forms slightly beyond the open end, so the effective length is a little longer than L; the frequency of the loudest resonance is hard to judge precisely by ear; the air temperature (and so v) changed between trials.

| Point | What earns it |
|---|---|
| 1 | Uses f = v/(4L) to explain the straight line through the origin |
| 1 | States the gradient is v/4 |
| 1 | Correct 1/L values and a correctly plotted graph with labelled axes and units |
| 1 | Gradient from the line (not from one data point), about 85–87 m/s |
| 1 | v = 4 × gradient ≈ 343 m/s, with unit |
| 1 | A valid, specific source of error |

Do not award the gradient point for dividing a single f by its 1/L. Carry forward a gradient error into v once.
</details>

## How did you do?

- **Q1 wrong:** re-read "Superposition" and Figure 1 in the [study guide](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-study-guide/).
- **Q2 wrong:** revisit "Beats" and Worked example 1.
- **Q3 or Q6 wrong:** go back to "Harmonics" and the closed-pipe column of Figure 2. Mark the ends N or A first.
- **Q4 or Q5 wrong:** redo Worked example 2, counting loops as half-wavelengths.
- **Q7 incomplete:** practise rearranging an equation into y = mx form before plotting.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-checklist/).
