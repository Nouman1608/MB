---
resourceId: "mb-ap-phys2-14.2-study-guide"
title: "Periodic Waves: Study Guide (Physics 2 14.2)"
description: "Describe a repeating wave: period, frequency, wavelength and amplitude, displacement–time and displacement–position graphs, wave equations, v = fλ, pitch and energy."
course: "physics-2"
unit: 14
topics: ["14.2"]
resourceType: "study-guide"
prerequisites:
  - "Wave pulses and waves, amplitude, and wave speed on a string (Topic 14.1)"
  - "The cosine and sine functions and radians"
  - "Speed as distance divided by time"
prerequisiteResources: ["mb-ap-phys2-14.1-study-guide"]
learningObjectives:
  - "Define period, frequency and wavelength, and use T = 1/f"
  - "Read amplitude, wavelength and period from displacement–position and displacement–time graphs, and tell the two graphs apart"
  - "Write and use cosine (or sine) equations for displacement as a function of time at one place, and as a function of position at one time"
  - "Use v = fλ to calculate and to predict how wavelength changes when the speed or the frequency changes"
  - "Explain that amplitude does not depend on frequency, link frequency to pitch, and state that energy carried increases with frequency"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Set your calculator to radians for cos(2πt/T) and cos(2πx/λ). 1 ms = 10⁻³ s. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.2-revision-notes", "mb-ap-phys2-14.2-practice", "mb-ap-phys2-14.2-checklist"]
next: "mb-ap-phys2-14.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Period T is the time for one full oscillation; frequency f is how many repeat each second; T = 1/f."
  - "Wavelength λ is the distance between matching points, such as crest to next crest."
  - "A displacement–time graph shows T; a displacement–position graph shows λ. Always read the horizontal axis first."
  - "v = fλ. In one medium the speed is fixed, so a higher frequency means a shorter wavelength."
  - "Amplitude is independent of frequency. Higher frequency sounds have higher pitch, and a wave carries more energy at higher frequency."
faqs:
  - question: "If I increase the frequency of a source, does the wave travel faster?"
    answer: "No. The speed is set by the medium (Topic 14.1). The source sets the frequency. With v fixed, v = fλ means the wavelength must get shorter. Doubling f halves λ."
  - question: "Should I use sine or cosine in the wave equation?"
    answer: "Either, as long as it matches the starting point. Use cosine when the displacement is at +A when t = 0 (or x = 0), and sine when it is zero and increasing. The amplitude, period and wavelength read from the equation are the same."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Waves that repeat

In Topic 14.1 you met the pulse, a single disturbance. Now the source keeps going. A vibrator attached to a string moves up and down again and again at a steady rate. Every piece of the string copies that motion, a little later than the piece before it. The result is a **periodic wave**: a pattern that repeats in time at any one place, and repeats in space at any one moment.

Two numbers describe the repetition in time:

- The **period T** is the time for one complete oscillation. Unit: seconds (s).
- The **frequency f** is the number of oscillations per second, the rate at which the wave repeats. Unit: hertz (Hz), where 1 Hz = 1 s⁻¹.

They are reciprocals:

**T = 1/f**

If a loudspeaker cone vibrates 1500 times in 3.0 s, f = 1500 ÷ 3.0 s = 500 Hz and T = 3.0 s ÷ 1500 = 2.0 × 10⁻³ s (2.0 ms).

One number describes the repetition in space:

- The **wavelength λ** is the distance between two successive matching points on the wave, such as one crest and the next crest, or one trough and the next trough. Unit: metres (m).

And, as in Topic 14.1, the **amplitude A** is the maximum displacement from equilibrium.

**Amplitude does not depend on the period or the frequency.** You can shake a rope gently or hard at the same rate (same f, different A), or quickly or slowly with the same size of shake (same A, different f). The two are set separately.

## Two graphs that look alike

A periodic wave is described by a displacement y that depends on two things: where you look (x) and when you look (t). A graph has only one horizontal axis, so there are two ways to draw it.

- **Displacement–position graph (snapshot).** Freeze time and plot y against x. This is a photograph of the whole wave. The repeat distance on the horizontal axis is the **wavelength λ**.
- **Displacement–time graph (history).** Stay at one location and plot y against t. This is a record of one point moving up and down. The repeat time on the horizontal axis is the **period T**.

Both graphs show the amplitude as the height of a crest above the axis. The curves can look exactly the same, so **always read the label on the horizontal axis first**.

<figure>
<svg viewBox="0 0 560 470" role="img" aria-labelledby="pw-title pw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pw-title">Displacement–position and displacement–time graphs of the same wave</title>
<desc id="pw-desc">Top graph: displacement in centimetres against position in metres, at time zero, for positions 0 to 1.6 metres. A cosine curve with crests at 0, 0.80 and 1.6 metres and troughs at 0.40 and 1.2 metres, reaching plus and minus 3.0 centimetres. A double-headed arrow between the crests at 0 and 0.80 metres is labelled wavelength equals 0.80 metres, and a vertical arrow from the axis to a crest is labelled A equals 3.0 centimetres. Bottom graph: displacement in centimetres against time in seconds, at position zero, for times 0 to 0.040 seconds. The same cosine shape with crests at 0, 0.020 and 0.040 seconds. A double-headed arrow between the crests at 0 and 0.020 seconds is labelled period equals 0.020 seconds.</desc>
<defs><marker id="pw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="290" y="22" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">Snapshot at t = 0</text>
<line x1="70" y1="120" x2="530" y2="120" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pw-arr)"/>
<line x1="70" y1="195" x2="70" y2="40" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pw-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="180" y1="120" x2="180" y2="126" stroke="#1d2b44"/><text x="180" y="138">0.40</text>
<line x1="290" y1="120" x2="290" y2="126" stroke="#1d2b44"/><text x="290" y="138">0.80</text>
<line x1="400" y1="120" x2="400" y2="126" stroke="#1d2b44"/><text x="400" y="138">1.20</text>
<line x1="510" y1="120" x2="510" y2="126" stroke="#1d2b44"/><text x="510" y="138">1.60</text>
<text x="300" y="212" font-size="13">Position x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="60" x2="70" y2="60" stroke="#1d2b44"/><text x="60" y="64">3.0</text>
<line x1="64" y1="180" x2="70" y2="180" stroke="#1d2b44"/><text x="60" y="184">−3.0</text>
</g>
<text x="18" y="120" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 120)">y (cm)</text>
<polyline points="70.0,60.0 76.9,61.2 83.8,64.6 90.6,70.1 97.5,77.6 104.4,86.7 111.2,97.0 118.1,108.3 125.0,120.0 131.9,131.7 138.8,143.0 145.6,153.3 152.5,162.4 159.4,169.9 166.2,175.4 173.1,178.8 180.0,180.0 186.9,178.8 193.8,175.4 200.6,169.9 207.5,162.4 214.4,153.3 221.2,143.0 228.1,131.7 235.0,120.0 241.9,108.3 248.8,97.0 255.6,86.7 262.5,77.6 269.4,70.1 276.2,64.6 283.1,61.2 290.0,60.0 296.9,61.2 303.8,64.6 310.6,70.1 317.5,77.6 324.4,86.7 331.2,97.0 338.1,108.3 345.0,120.0 351.9,131.7 358.8,143.0 365.6,153.3 372.5,162.4 379.4,169.9 386.3,175.4 393.1,178.8 400.0,180.0 406.9,178.8 413.8,175.4 420.6,169.9 427.5,162.4 434.4,153.3 441.2,143.0 448.1,131.7 455.0,120.0 461.9,108.3 468.8,97.0 475.6,86.7 482.5,77.6 489.4,70.1 496.2,64.6 503.1,61.2 510.0,60.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M76 46 H284" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#pw-arr)" marker-end="url(#pw-arr)"/>
<text x="180" y="40" font-size="12" fill="#1d2b44" text-anchor="middle">λ = 0.80 m</text>
<path d="M455 120 V64" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#pw-arr)"/>
<text x="462" y="95" font-size="12" fill="#1d2b44">A = 3.0 cm</text>
<text x="290" y="252" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">History at x = 0</text>
<line x1="70" y1="350" x2="530" y2="350" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pw-arr)"/>
<line x1="70" y1="425" x2="70" y2="270" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pw-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="180" y1="350" x2="180" y2="356" stroke="#1d2b44"/><text x="180" y="368">0.010</text>
<line x1="290" y1="350" x2="290" y2="356" stroke="#1d2b44"/><text x="290" y="368">0.020</text>
<line x1="400" y1="350" x2="400" y2="356" stroke="#1d2b44"/><text x="400" y="368">0.030</text>
<line x1="510" y1="350" x2="510" y2="356" stroke="#1d2b44"/><text x="510" y="368">0.040</text>
<text x="300" y="462" font-size="13">Time t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="290" x2="70" y2="290" stroke="#1d2b44"/><text x="60" y="294">3.0</text>
<line x1="64" y1="410" x2="70" y2="410" stroke="#1d2b44"/><text x="60" y="414">−3.0</text>
</g>
<text x="18" y="350" font-size="12" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 350)">y (cm)</text>
<polyline points="70.0,290.0 76.9,291.2 83.8,294.6 90.6,300.1 97.5,307.6 104.4,316.7 111.2,327.0 118.1,338.3 125.0,350.0 131.9,361.7 138.8,373.0 145.6,383.3 152.5,392.4 159.4,399.9 166.2,405.4 173.1,408.8 180.0,410.0 186.9,408.8 193.8,405.4 200.6,399.9 207.5,392.4 214.4,383.3 221.2,373.0 228.1,361.7 235.0,350.0 241.9,338.3 248.8,327.0 255.6,316.7 262.5,307.6 269.4,300.1 276.2,294.6 283.1,291.2 290.0,290.0 296.9,291.2 303.8,294.6 310.6,300.1 317.5,307.6 324.4,316.7 331.2,327.0 338.1,338.3 345.0,350.0 351.9,361.7 358.8,373.0 365.6,383.3 372.5,392.4 379.4,399.9 386.2,405.4 393.1,408.8 400.0,410.0 406.9,408.8 413.8,405.4 420.6,399.9 427.5,392.4 434.4,383.3 441.2,373.0 448.1,361.7 455.0,350.0 461.9,338.3 468.8,327.0 475.6,316.7 482.5,307.6 489.4,300.1 496.2,294.6 503.1,291.2 510.0,290.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 4"/>
<path d="M76 276 H284" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#pw-arr)" marker-end="url(#pw-arr)"/>
<text x="180" y="270" font-size="12" fill="#1d2b44" text-anchor="middle">T = 0.020 s</text>
</svg>
<figcaption>Figure 1. The same wave drawn two ways. Top (solid): a snapshot at t = 0, displacement against position; the crest-to-crest distance is the wavelength, 0.80 m. Bottom (dashed): the motion of the point at x = 0, displacement against time; the crest-to-crest time is the period, 0.020 s. Both show an amplitude of 3.0 cm.</figcaption>
</figure>

## Equations for a sinusoidal wave

The curves in Figure 1 are cosine curves. A sinusoidal wave can be written as an equation in two ways, one for each graph.

**At one location, as a function of time:**

y = A cos(2πt/T) = A cos(2πft)

**At one instant, as a function of position:**

y = A cos(2πx/λ)

How to read them:

- The number in front, A, is the **amplitude**.
- The angle 2πt/T increases by 2π (one full cycle) each time t increases by T. So the equation repeats every period.
- The angle 2πx/λ increases by 2π each time x increases by λ. So the snapshot repeats every wavelength.
- The quantity 2πf is the **angular frequency** ω, in rad/s. You may see y = A cos(ωt).
- If the displacement is zero and increasing at the start, use sine instead: y = A sin(2πt/T). The amplitude, period and wavelength are the same.

**Use radians** when you evaluate these on a calculator. A quick check: at t = T/4 the cosine form gives cos(π/2) = 0, and at t = T/2 it gives cos(π) = −1, so y = −A. That matches the bottom graph in Figure 1.

## Speed, frequency and wavelength

In one period, each point of the medium completes one oscillation, and the pattern moves forward by exactly one wavelength. So the wave speed is

v = λ/T, and since 1/T = f:

**v = fλ**

This links the three quantities, but they are not all free:

- The **medium sets v** (Topic 14.1: tension and mass per length for a string, the material and its temperature for sound).
- The **source sets f**. Every piece of medium oscillates at the frequency of whatever is driving it.
- **λ follows**: λ = v/f.

So, for a periodic wave:

- **λ is proportional to v** at a fixed frequency. If the same source sends waves into a faster medium, the waves are longer.
- **λ is inversely proportional to f** at a fixed speed. Double the frequency in the same medium and the wavelength halves.

## Pitch, loudness and energy

For sound, the properties of the wave match what you hear:

- **Frequency ↔ pitch.** A higher frequency is heard as a higher note. Two notes an octave apart have frequencies in the ratio 2 : 1, and they sound very alike.
- **Amplitude ↔ loudness** (Topic 14.1). A larger pressure amplitude sounds louder.

These are independent. A quiet high note and a loud low note are both possible.

The energy carried by a wave depends on both:

- It **increases with amplitude** (Topic 14.1).
- It **increases with frequency**. To make a rope oscillate through the same amplitude more often each second, your hand has to move faster, so you must supply energy at a greater rate.

## Worked example 1: reading the two graphs

**Question.** Figure 1 shows a wave on a long string. (a) State the amplitude, wavelength and period. (b) Find the frequency and the wave speed. (c) Write the equation for the displacement at x = 0 as a function of time, and use it to find the displacement at x = 0 when t = 0.0025 s. (d) How far does the wave travel in 0.020 s?

1. (a) From the top graph: A = 3.0 cm = 0.030 m; crest to crest is λ = 0.80 m. From the bottom graph: crest to crest is T = 0.020 s.
2. (b) f = 1/T = 1 ÷ 0.020 s = **50 Hz**. v = fλ = 50 Hz × 0.80 m = **40 m/s**. (Check: λ/T = 0.80 m ÷ 0.020 s = 40 m/s.)
3. (c) At x = 0 the displacement is +A at t = 0, so use cosine: **y = (0.030 m) cos(2πt/0.020 s)**. At t = 0.0025 s: 2πt/T = 2π × 0.125 = π/4 rad. y = 0.030 × cos(π/4) = **0.021 m** (2.1 cm).
4. (d) Distance = vt = 40 m/s × 0.020 s = **0.80 m**, exactly one wavelength in one period.

**Interpretation and check.** At t = 0.0025 s, one eighth of a period has passed. The point has moved down from 3.0 cm but is still above zero: cos(π/4) ≈ 0.71, so it is at 71% of the amplitude, which agrees with the curve. Part (d) is the reasoning behind v = fλ.

## Worked example 2: one note, changing conditions

**Question.** A tuning fork vibrates at 686 Hz in air where sound travels at 343 m/s. (a) Find the period and the wavelength of the sound. (b) Later the room is warmer and sound travels at 349 m/s. The same fork is struck. What happens to the frequency, the pitch and the wavelength? (c) A second fork sounds the note one octave higher, in the original air. Find its wavelength.

1. (a) T = 1/f = 1 ÷ 686 Hz = **1.46 × 10⁻³ s** (1.46 ms). λ = v/f = 343 m/s ÷ 686 Hz = **0.500 m**.
2. (b) The fork, not the air, sets the frequency, so f stays **686 Hz** and the **pitch is unchanged**. The speed rises, so λ = 349 ÷ 686 = **0.509 m**, slightly longer (by about 0.009 m).
3. (c) One octave higher means double the frequency: f = 1372 Hz. The air is the same, so v = 343 m/s and λ = 343 ÷ 1372 = **0.250 m**, half the original.

**Interpretation and check.** Part (b) uses λ ∝ v at fixed f: a speed increase of 349/343 ≈ 1.017 gives the same factor on λ. Part (c) uses λ ∝ 1/f at fixed v: doubling f halves λ, with no new calculation needed.

## Common misconceptions

- **Mixing up λ and T.** A crest-to-crest distance on a graph is λ only if the horizontal axis is position. If the axis is time, it is T.
- **Taking crest to trough as the wavelength, or as the amplitude.** Crest to the next trough is half a wavelength horizontally, and twice the amplitude vertically.
- **"Higher frequency means a faster wave."** In one medium all frequencies travel at the same speed. The wavelength changes instead.
- **"Changing the medium changes the frequency."** The source sets f. When the speed changes, λ changes.
- **"A louder sound has a higher pitch."** Loudness depends on amplitude; pitch depends on frequency. They are independent.
- **"Amplitude gets smaller when the frequency goes up."** Amplitude is independent of frequency and period.
- **"The displacement–time graph is a picture of the wave."** It is a record of how one point moves. The shape of the wave at one instant is the displacement–position graph. A point on a transverse wave moves only up and down; it never travels along the curve of either graph.
- **Forgetting that f is fixed by the source.** If a question says the same source or the same vibrator is used, keep f the same and let λ adjust.
- **Calculator in degrees.** cos(2πt/T) needs radians. In degree mode, cos(π/4) gives the wrong value.

## Where this leads

Topic 14.3 asks what happens when a periodic wave reaches a boundary between two media. Speed changes, frequency stays the same, and so the wavelength changes: exactly the v = fλ reasoning from Worked example 2. Continue with [Boundary Behavior of Waves and Polarization](/advanced-course-resources/physics-2/14-3-boundary-behavior-waves-polarization-study-guide/). Before that, test yourself with the [practice questions](/advanced-course-resources/physics-2/14-2-periodic-waves-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-2-periodic-waves-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-2-periodic-waves-checklist/) to consolidate.
