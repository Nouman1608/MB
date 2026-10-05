---
resourceId: "mb-ap-phys2-14.6-study-guide"
title: "Wave Interference and Standing Waves: Study Guide (Physics 2 14.6)"
description: "Superposition of pulses and waves, constructive and destructive interference, beats, and standing waves on strings and in pipes: nodes, antinodes, harmonics and boundary conditions."
course: "physics-2"
unit: 14
topics: ["14.6"]
resourceType: "study-guide"
prerequisites:
  - "Wavelength, frequency, period and v = fλ (Topic 14.2)"
  - "Wave speed on a string, v = √(F_T/μ), and sound as a longitudinal wave (Topic 14.1)"
  - "Reflection of waves at a boundary (Topic 14.3)"
prerequisiteResources: ["mb-ap-phys2-14.5-study-guide"]
learningObjectives:
  - "Find the net displacement when pulses or waves overlap by adding displacements"
  - "Tell constructive from destructive interference and explain that waves pass through each other unchanged"
  - "Explain beats and calculate a beat frequency from two nearby frequencies"
  - "Describe nodes and antinodes and explain how a standing wave forms in a confined region"
  - "Draw the allowed standing-wave patterns for strings and pipes with different end conditions and link L, λ, f, v and harmonic number"
  - "Explain why a region with a node at one end and an antinode at the other supports only odd harmonics"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Take the speed of sound in air as 340 m/s unless told otherwise. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.6-revision-notes", "mb-ap-phys2-14.6-practice", "mb-ap-phys2-14.6-checklist"]
next: "mb-ap-phys2-14.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Overlapping waves pass through each other. While they overlap, the net displacement is the sum of the individual displacements (superposition)."
  - "Displacements in the same direction give constructive interference; opposite directions give destructive interference."
  - "Two waves of slightly different frequency produce beats: f_beat = |f₁ − f₂|."
  - "A standing wave forms when waves travelling in opposite directions are confined to a region. Nodes never move; antinodes have the largest amplitude."
  - "Same type of end at both ends (fixed–fixed, open–open): λ = 2L/n, all harmonics. Node at one end and antinode at the other: λ = 4L/n, odd n only."
faqs:
  - question: "Is energy destroyed when two waves interfere destructively?"
    answer: "No. At a point of destructive interference the displacement is reduced, but the energy is not lost. It appears at other places or other times, for example at the antinodes of a standing wave or the loud moments of a beat. After two pulses have passed through each other, each still carries all its original energy."
  - question: "Why is the second resonance of a pipe closed at one end called the third harmonic?"
    answer: "Harmonic numbers compare frequencies with the fundamental. With a node at the closed end and an antinode at the open end, the next pattern after the fundamental has three times the fundamental frequency. Frequencies of 2, 4, 6 … times the fundamental cannot fit the end conditions, so those harmonics are missing."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Superposition: waves pass through each other

Send a pulse along a rope from each end. The two pulses meet in the middle. They do not bounce off each other like two balls. They **travel through each other**, and after they separate each pulse carries on with exactly the shape, size and speed it had before.

While the pulses overlap, each point on the rope has to do what both pulses ask of it at once. The rule is simple:

**The net displacement at any point equals the sum of the displacements the individual pulses would cause there.**

This is the **principle of superposition**. Add displacements with their signs: up is positive, down is negative. Any meeting of two or more pulses or waves is called **interference**.

- **Constructive interference:** the individual displacements are in the **same direction**, so the net displacement is bigger than either one.
- **Destructive interference:** the displacements are in **opposite directions**, so they partly or completely cancel.

<figure>
<svg viewBox="0 0 520 380" role="img" aria-labelledby="sp-title sp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sp-title">Two pulses on a rope passing through each other</title>
<desc id="sp-desc">Three snapshots of a rope. Before: pulse A, an upward triangle 2 units high, on the left moving right, and pulse B, a downward triangle 1 unit deep and the same width, on the right moving left. Overlap: the two pulses are exactly on top of each other; each is shown dashed and the rope itself, shown solid, is an upward triangle only 1 unit high, the sum of plus 2 and minus 1. After: pulse A is now on the right still moving right and still 2 units high, and pulse B is on the left still moving left and still 1 unit deep. Neither pulse has changed.</desc>
<defs><marker id="sp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="20" y="30" font-size="13" font-weight="600" fill="#1d2b44">Before</text>
<text x="20" y="150" font-size="13" font-weight="600" fill="#1d2b44">Overlap</text>
<text x="20" y="270" font-size="13" font-weight="600" fill="#1d2b44">After</text>
<polyline points="30,80 110,80 110,80 150,40 190,80 330,80 330,80 370,100 410,80 500,80" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="140" y1="28" x2="185" y2="28" stroke="#1d2b44" stroke-width="2" marker-end="url(#sp-arr)"/><text x="125" y="34" font-size="13" fill="#1d2b44" text-anchor="middle">A</text>
<line x1="385" y1="116" x2="340" y2="116" stroke="#1d2b44" stroke-width="2" marker-end="url(#sp-arr)"/><text x="400" y="121" font-size="13" fill="#1d2b44" text-anchor="middle">B</text>
<polyline points="220,200 260,160 300,200" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline points="220,200 260,220 300,200" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<polyline points="30,200 220,200 260,180 300,200 500,200" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44"><text x="268" y="158">A alone (+2)</text><text x="268" y="234">B alone (−1)</text><text x="330" y="188">rope: A + B = +1</text></g>
<polyline points="30,320 110,320 110,320 150,340 190,320 330,320 330,320 370,280 410,320 500,320" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="360" y1="268" x2="405" y2="268" stroke="#1d2b44" stroke-width="2" marker-end="url(#sp-arr)"/><text x="345" y="274" font-size="13" fill="#1d2b44" text-anchor="middle">A</text>
<line x1="165" y1="356" x2="120" y2="356" stroke="#1d2b44" stroke-width="2" marker-end="url(#sp-arr)"/><text x="180" y="361" font-size="13" fill="#1d2b44" text-anchor="middle">B</text>
</svg>
<figcaption>Figure 1. Superposition of two pulses on a rope (solid line = the rope). Pulse A (+2 units) moves right; pulse B (−1 unit, same width) moves left. At full overlap the dashed shapes show each pulse alone and the rope shows their sum, +1 unit: destructive interference. Afterwards both pulses continue unchanged.</figcaption>
</figure>

When you work with superposition questions, draw it. Sketch each pulse where it would be at the moment asked about, as if the other pulse were not there. Then add the two displacements point by point. For pulses with straight edges, checking a few points (the peaks and the corners) is usually enough.

Two equal and opposite pulses that overlap exactly give a rope that is momentarily **flat**. The energy has not vanished. At that instant the rope's segments are still moving, so the energy is all kinetic. A moment later the pulses separate again.

## Beats

Now overlap two **continuous** sound waves whose frequencies are slightly different, for example two tuning forks of 440 Hz and 444 Hz sounding together.

- At some moments the compressions from the two forks arrive together: the waves are **in phase** and interfere constructively. The sound is loud.
- The 444 Hz wave gains 4 cycles per second on the 440 Hz wave, so it gains one full cycle every 0.25 s. Halfway through that time it is half a cycle ahead. Then a compression from one fork arrives with a rarefaction from the other: the waves are **out of phase** and interfere destructively. The sound is quiet.

You hear a tone whose loudness rises and falls regularly. These periodic changes in amplitude are **beats**. The number of loud moments per second is the **beat frequency**:

**f_beat = |f₁ − f₂|**

For the forks above, f_beat = 444 − 440 = 4 Hz: four loud moments per second, one every 0.25 s. The tone itself sounds close to the average of the two frequencies.

Beats are only easy to hear when the two frequencies are close (a difference of a few hertz). As the frequencies get closer, the beats get **slower**. When they are equal, the beats disappear. Musicians use this to tune: adjust until the beats slow down and stop.

## Standing waves

A **standing wave** forms when two identical waves travel through each other in **opposite directions** in a region with boundaries, for example a wave and its reflection on a string clamped at both ends. The two travelling waves superpose to give a pattern that does not move along the string.

- A **node** is a point where the amplitude is always zero. The two waves always cancel there.
- An **antinode** is a point where the amplitude is the largest. The two waves always reinforce there.
- Neighbouring nodes are **λ/2** apart, and an antinode lies halfway between them. So node to neighbouring antinode is λ/4.
- Each segment between two nodes is called a **loop**. Every point in a loop oscillates at the same frequency, with different amplitudes.

A standing wave can only form at certain frequencies, because the pattern has to fit the region. The **boundary conditions** decide what fits:

| End | What the end does | Point in the pattern |
|---|---|---|
| String end clamped (fixed) | cannot move | node |
| String end free to move (loose), e.g. a light ring on a smooth pole | moves the most | antinode |
| Closed end of a pipe | air cannot move along the pipe there | displacement node |
| Open end of a pipe | air moves freely in and out | displacement antinode |

(Background: sound in a pipe can also be described with pressure. A displacement node is a place of largest pressure variation, and an open end stays close to atmospheric pressure. The pictures in this guide show displacement.)

## Harmonics

The standing wave with the **longest** possible wavelength is the **fundamental**, or **first harmonic** (n = 1). The harmonic number n is how many times the fundamental frequency the pattern has.

<figure>
<svg viewBox="0 0 600 410" role="img" aria-labelledby="sw-title sw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sw-title">First three possible standing waves on a string fixed at both ends and in a pipe closed at one end</title>
<desc id="sw-desc">Left column: a string of length L clamped at both ends. Row 1, the first harmonic, has one loop, with nodes at the ends and one antinode in the middle, so L equals half a wavelength. Row 2, the second harmonic, has two loops and a node in the middle, so L equals one wavelength. Row 3, the third harmonic, has three loops, so L equals one and a half wavelengths. Right column: a pipe of length L closed at its left end and open at its right end, with displacement shown. Every pattern has a node at the closed end and an antinode at the open end. Row 1, the first harmonic, is half a loop (node to antinode), so L equals a quarter wavelength. Row 2, the third harmonic, so L equals three quarters of a wavelength. Row 3, the fifth harmonic, so L equals five quarters of a wavelength. There is no second or fourth harmonic in the pipe.</desc>
<g font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle"><text x="150" y="36">String, both ends fixed</text><text x="450" y="36">Pipe, closed left, open right</text></g>
<line x1="40" y1="95" x2="260" y2="95" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<polyline points="40.0,95.0 45.5,92.8 51.0,90.6 56.5,88.5 62.0,86.3 67.5,84.3 73.0,82.3 78.5,80.4 84.0,78.5 89.5,76.8 95.0,75.2 100.5,73.7 106.0,72.3 111.5,71.1 117.0,70.1 122.5,69.1 128.0,68.4 133.5,67.8 139.0,67.3 144.5,67.1 150.0,67.0 155.5,67.1 161.0,67.3 166.5,67.8 172.0,68.4 177.5,69.1 183.0,70.1 188.5,71.1 194.0,72.3 199.5,73.7 205.0,75.2 210.5,76.8 216.0,78.5 221.5,80.4 227.0,82.3 232.5,84.3 238.0,86.3 243.5,88.5 249.0,90.6 254.5,92.8 260.0,95.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="40.0,95.0 45.5,97.2 51.0,99.4 56.5,101.5 62.0,103.7 67.5,105.7 73.0,107.7 78.5,109.6 84.0,111.5 89.5,113.2 95.0,114.8 100.5,116.3 106.0,117.7 111.5,118.9 117.0,119.9 122.5,120.9 128.0,121.6 133.5,122.2 139.0,122.7 144.5,122.9 150.0,123.0 155.5,122.9 161.0,122.7 166.5,122.2 172.0,121.6 177.5,120.9 183.0,119.9 188.5,118.9 194.0,117.7 199.5,116.3 205.0,114.8 210.5,113.2 216.0,111.5 221.5,109.6 227.0,107.7 232.5,105.7 238.0,103.7 243.5,101.5 249.0,99.4 254.5,97.2 260.0,95.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="32" y="81" width="8" height="28" fill="#1d2b44"/><rect x="260" y="81" width="8" height="28" fill="#1d2b44"/>
<line x1="340" y1="59" x2="560" y2="59" stroke="#1d2b44" stroke-width="2"/><line x1="340" y1="131" x2="560" y2="131" stroke="#1d2b44" stroke-width="2"/><line x1="340" y1="59" x2="340" y2="131" stroke="#1d2b44" stroke-width="5"/>
<polyline points="340.0,95.0 345.5,93.9 351.0,92.8 356.5,91.7 362.0,90.6 367.5,89.5 373.0,88.5 378.5,87.4 384.0,86.3 389.5,85.3 395.0,84.3 400.5,83.3 406.0,82.3 411.5,81.3 417.0,80.4 422.5,79.4 428.0,78.5 433.5,77.7 439.0,76.8 444.5,76.0 450.0,75.2 455.5,74.4 461.0,73.7 466.5,73.0 472.0,72.3 477.5,71.7 483.0,71.1 488.5,70.6 494.0,70.1 499.5,69.6 505.0,69.1 510.5,68.7 516.0,68.4 521.5,68.1 527.0,67.8 532.5,67.5 538.0,67.3 543.5,67.2 549.0,67.1 554.5,67.0 560.0,67.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="340.0,95.0 345.5,96.1 351.0,97.2 356.5,98.3 362.0,99.4 367.5,100.5 373.0,101.5 378.5,102.6 384.0,103.7 389.5,104.7 395.0,105.7 400.5,106.7 406.0,107.7 411.5,108.7 417.0,109.6 422.5,110.6 428.0,111.5 433.5,112.3 439.0,113.2 444.5,114.0 450.0,114.8 455.5,115.6 461.0,116.3 466.5,117.0 472.0,117.7 477.5,118.3 483.0,118.9 488.5,119.4 494.0,119.9 499.5,120.4 505.0,120.9 510.5,121.3 516.0,121.6 521.5,121.9 527.0,122.2 532.5,122.5 538.0,122.7 543.5,122.8 549.0,122.9 554.5,123.0 560.0,123.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="150" y="147">n = 1: L = λ/2</text><text x="450" y="147">n = 1: L = λ/4</text></g>
<line x1="40" y1="215" x2="260" y2="215" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<polyline points="40.0,215.0 45.5,210.6 51.0,206.3 56.5,202.3 62.0,198.5 67.5,195.2 73.0,192.3 78.5,190.1 84.0,188.4 89.5,187.3 95.0,187.0 100.5,187.3 106.0,188.4 111.5,190.1 117.0,192.3 122.5,195.2 128.0,198.5 133.5,202.3 139.0,206.3 144.5,210.6 150.0,215.0 155.5,219.4 161.0,223.7 166.5,227.7 172.0,231.5 177.5,234.8 183.0,237.7 188.5,239.9 194.0,241.6 199.5,242.7 205.0,243.0 210.5,242.7 216.0,241.6 221.5,239.9 227.0,237.7 232.5,234.8 238.0,231.5 243.5,227.7 249.0,223.7 254.5,219.4 260.0,215.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="40.0,215.0 45.5,219.4 51.0,223.7 56.5,227.7 62.0,231.5 67.5,234.8 73.0,237.7 78.5,239.9 84.0,241.6 89.5,242.7 95.0,243.0 100.5,242.7 106.0,241.6 111.5,239.9 117.0,237.7 122.5,234.8 128.0,231.5 133.5,227.7 139.0,223.7 144.5,219.4 150.0,215.0 155.5,210.6 161.0,206.3 166.5,202.3 172.0,198.5 177.5,195.2 183.0,192.3 188.5,190.1 194.0,188.4 199.5,187.3 205.0,187.0 210.5,187.3 216.0,188.4 221.5,190.1 227.0,192.3 232.5,195.2 238.0,198.5 243.5,202.3 249.0,206.3 254.5,210.6 260.0,215.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="32" y="201" width="8" height="28" fill="#1d2b44"/><rect x="260" y="201" width="8" height="28" fill="#1d2b44"/>
<line x1="340" y1="179" x2="560" y2="179" stroke="#1d2b44" stroke-width="2"/><line x1="340" y1="251" x2="560" y2="251" stroke="#1d2b44" stroke-width="2"/><line x1="340" y1="179" x2="340" y2="251" stroke="#1d2b44" stroke-width="5"/>
<polyline points="340.0,215.0 345.5,211.7 351.0,208.5 356.5,205.3 362.0,202.3 367.5,199.4 373.0,196.8 378.5,194.4 384.0,192.3 389.5,190.6 395.0,189.1 400.5,188.1 406.0,187.3 411.5,187.0 417.0,187.1 422.5,187.5 428.0,188.4 433.5,189.6 439.0,191.1 444.5,193.0 450.0,195.2 455.5,197.7 461.0,200.4 466.5,203.3 472.0,206.3 477.5,209.5 483.0,212.8 488.5,216.1 494.0,219.4 499.5,222.6 505.0,225.7 510.5,228.7 516.0,231.5 521.5,234.0 527.0,236.3 532.5,238.3 538.0,239.9 543.5,241.3 549.0,242.2 554.5,242.8 560.0,243.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="340.0,215.0 345.5,218.3 351.0,221.5 356.5,224.7 362.0,227.7 367.5,230.6 373.0,233.2 378.5,235.6 384.0,237.7 389.5,239.4 395.0,240.9 400.5,241.9 406.0,242.7 411.5,243.0 417.0,242.9 422.5,242.5 428.0,241.6 433.5,240.4 439.0,238.9 444.5,237.0 450.0,234.8 455.5,232.3 461.0,229.6 466.5,226.7 472.0,223.7 477.5,220.5 483.0,217.2 488.5,213.9 494.0,210.6 499.5,207.4 505.0,204.3 510.5,201.3 516.0,198.5 521.5,196.0 527.0,193.7 532.5,191.7 538.0,190.1 543.5,188.7 549.0,187.8 554.5,187.2 560.0,187.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="150" y="267">n = 2: L = λ</text><text x="450" y="267">n = 3: L = 3λ/4</text></g>
<line x1="40" y1="335" x2="260" y2="335" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<polyline points="40.0,335.0 45.5,328.5 51.0,322.3 56.5,316.8 62.0,312.3 67.5,309.1 73.0,307.3 78.5,307.1 84.0,308.4 89.5,311.1 95.0,315.2 100.5,320.4 106.0,326.3 111.5,332.8 117.0,339.4 122.5,345.7 128.0,351.5 133.5,356.3 139.0,359.9 144.5,362.2 150.0,363.0 155.5,362.2 161.0,359.9 166.5,356.3 172.0,351.5 177.5,345.7 183.0,339.4 188.5,332.8 194.0,326.3 199.5,320.4 205.0,315.2 210.5,311.1 216.0,308.4 221.5,307.1 227.0,307.3 232.5,309.1 238.0,312.3 243.5,316.8 249.0,322.3 254.5,328.5 260.0,335.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="40.0,335.0 45.5,341.5 51.0,347.7 56.5,353.2 62.0,357.7 67.5,360.9 73.0,362.7 78.5,362.9 84.0,361.6 89.5,358.9 95.0,354.8 100.5,349.6 106.0,343.7 111.5,337.2 117.0,330.6 122.5,324.3 128.0,318.5 133.5,313.7 139.0,310.1 144.5,307.8 150.0,307.0 155.5,307.8 161.0,310.1 166.5,313.7 172.0,318.5 177.5,324.3 183.0,330.6 188.5,337.2 194.0,343.7 199.5,349.6 205.0,354.8 210.5,358.9 216.0,361.6 221.5,362.9 227.0,362.7 232.5,360.9 238.0,357.7 243.5,353.2 249.0,347.7 254.5,341.5 260.0,335.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="32" y="321" width="8" height="28" fill="#1d2b44"/><rect x="260" y="321" width="8" height="28" fill="#1d2b44"/>
<line x1="340" y1="299" x2="560" y2="299" stroke="#1d2b44" stroke-width="2"/><line x1="340" y1="371" x2="560" y2="371" stroke="#1d2b44" stroke-width="2"/><line x1="340" y1="299" x2="340" y2="371" stroke="#1d2b44" stroke-width="5"/>
<polyline points="340.0,335.0 345.5,329.5 351.0,324.3 356.5,319.4 362.0,315.2 367.5,311.7 373.0,309.1 378.5,307.5 384.0,307.0 389.5,307.5 395.0,309.1 400.5,311.7 406.0,315.2 411.5,319.4 417.0,324.3 422.5,329.5 428.0,335.0 433.5,340.5 439.0,345.7 444.5,350.6 450.0,354.8 455.5,358.3 461.0,360.9 466.5,362.5 472.0,363.0 477.5,362.5 483.0,360.9 488.5,358.3 494.0,354.8 499.5,350.6 505.0,345.7 510.5,340.5 516.0,335.0 521.5,329.5 527.0,324.3 532.5,319.4 538.0,315.2 543.5,311.7 549.0,309.1 554.5,307.5 560.0,307.0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polyline points="340.0,335.0 345.5,340.5 351.0,345.7 356.5,350.6 362.0,354.8 367.5,358.3 373.0,360.9 378.5,362.5 384.0,363.0 389.5,362.5 395.0,360.9 400.5,358.3 406.0,354.8 411.5,350.6 417.0,345.7 422.5,340.5 428.0,335.0 433.5,329.5 439.0,324.3 444.5,319.4 450.0,315.2 455.5,311.7 461.0,309.1 466.5,307.5 472.0,307.0 477.5,307.5 483.0,309.1 488.5,311.7 494.0,315.2 499.5,319.4 505.0,324.3 510.5,329.5 516.0,335.0 521.5,340.5 527.0,345.7 532.5,350.6 538.0,354.8 543.5,358.3 549.0,360.9 554.5,362.5 560.0,363.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="150" y="387">n = 3: L = 3λ/2</text><text x="450" y="387">n = 5: L = 5λ/4</text></g>
<g font-size="11" fill="#1d2b44"><text x="346" y="54">closed: N</text><text x="556" y="54" text-anchor="end">open: A</text></g>
</svg>
<figcaption>Figure 2. Left: the first three standing waves on a string fixed at both ends (clamps at the ends are nodes). Right: the first three standing waves in a pipe closed at the left end (node, N) and open at the right end (antinode, A). Solid and dashed curves show the two extreme positions of the displacement. The pipe can only have n = 1, 3, 5 …</figcaption>
</figure>

**Same kind of boundary at both ends** (string fixed at both ends, pipe open at both ends, string loose at both ends). Each end is a node, or each end is an antinode. The length must hold a whole number of half-wavelengths:

L = n(λ/2), so **λₙ = 2L/n** and **fₙ = v/λₙ = n·v/(2L)**, with n = 1, 2, 3, …

All harmonics are possible, and fₙ = n·f₁.

**Node at one end, antinode at the other** (pipe closed at one end, string fixed at one end and loose at the other). The shortest pattern is a quarter-wavelength, node to antinode. Each extra node–antinode pair adds half a wavelength, so the length must hold an **odd** number of quarter-wavelengths:

L = n(λ/4), so **λₙ = 4L/n** and **fₙ = n·v/(4L)**, with n = 1, 3, 5, … only.

An even number of quarter-wavelengths would put the same kind of point (two nodes, or two antinodes) at both ends, which breaks the boundary conditions. That is why **only odd harmonics** exist here. The second-longest wavelength in a closed pipe belongs to the third harmonic, not the "second".

Three habits make these questions much easier:

1. **Draw the pattern first.** Mark the ends as N or A, then add nodes and antinodes alternately.
2. **Count quarter- or half-wavelengths** in the drawing to link L and λ.
3. **Then use v = fλ.** On a string, v = √(F_T/μ) is set by tension and mass per unit length. In a pipe, v is the speed of sound in the air, which rises with temperature.

## Worked example 1: tuning with beats

**Question.** A guitarist sounds a string together with a 392 Hz tuning fork and hears 3 beats per second. She tightens the string slightly and now hears 5 beats per second. (a) What were the two possible frequencies of the string at first? (b) Which was it? (c) What should she do next?

1. **(a)** f_beat = |f_string − 392 Hz| = 3 Hz, so f_string = 392 − 3 = **389 Hz** or 392 + 3 = **395 Hz**.
2. **(b)** Tightening the string raises the tension, which raises the wave speed v = √(F_T/μ). The length is unchanged, so the fundamental f₁ = v/(2L) rises.
   - If the string was at 389 Hz, a small rise would bring it **closer** to 392 Hz and the beats would slow down (for example 390 Hz gives 2 beats per second).
   - If the string was at 395 Hz, a small rise moves it **further** from 392 Hz and the beats speed up. That matches the 5 beats per second she hears (397 Hz).
   - So the string was at **395 Hz**, and is now at 397 Hz.
3. **(c)** She should **loosen** the string, lowering its frequency, until the beats slow down and disappear.

**Check.** At 3 beats per second the loud moments are 1/3 s ≈ 0.33 s apart. "Beats got faster" always means "moved further from the reference frequency".

## Worked example 2: a string fixed at both ends

**Question.** A string of length 0.50 m is clamped at both ends. Its tension is 80 N and its mass per unit length is 5.0 × 10⁻⁴ kg/m. (a) Find the wave speed on the string. (b) Find the wavelengths and frequencies of the first three harmonics. (c) How far apart are the nodes in the third harmonic? (d) What tension would make the fundamental 440 Hz?

1. **(a)** v = √(F_T/μ) = √(80 N ÷ 5.0 × 10⁻⁴ kg/m) = √(1.6 × 10⁵ m²/s²) = **400 m/s**.
2. **(b)** Fixed at both ends, so λₙ = 2L/n and fₙ = v/λₙ.
   - n = 1: λ₁ = 2(0.50 m) = 1.00 m, f₁ = 400 ÷ 1.00 = **400 Hz**.
   - n = 2: λ₂ = 0.50 m, f₂ = **800 Hz**.
   - n = 3: λ₃ = 0.333 m, f₃ = **1200 Hz**.
3. **(c)** Nodes are λ/2 apart: 0.333 m ÷ 2 = **0.167 m**. Check from the picture: three loops fill 0.50 m, so each loop is 0.50 ÷ 3 = 0.167 m long.
4. **(d)** With L fixed, f₁ ∝ v ∝ √F_T, so F_T ∝ f₁². New tension = 80 N × (440/400)² = 80 N × 1.21 = **96.8 N** (about 97 N).

**Interpretation.** A 10% rise in frequency needs a 21% rise in tension, because frequency depends on the square root of tension.

## Worked example 3: identifying a pipe from its resonances

**Question.** A loudspeaker sweeps through frequencies near the end of a pipe. The pipe resonates at 600 Hz, 1000 Hz and 1400 Hz, with no resonance in between. The speed of sound is 340 m/s. Is the pipe open at both ends or closed at one end? Find its length.

1. The resonances are 400 Hz apart.
2. **Test "open at both ends".** Then fₙ = n·f₁ and neighbouring harmonics differ by f₁, so f₁ would be 400 Hz. But 600 Hz ÷ 400 Hz = 1.5 is not a whole number, so 600 Hz could not be a harmonic. Rejected.
3. **Test "closed at one end".** Then only odd harmonics exist, so neighbours differ by 2f₁. That gives f₁ = 400 ÷ 2 = 200 Hz. Check: 600 = 3 × 200, 1000 = 5 × 200, 1400 = 7 × 200, all odd multiples. Accepted.
4. Length: f₁ = v/(4L), so L = v/(4f₁) = 340 ÷ (4 × 200) = **0.425 m**.

**Answer.** The pipe is closed at one end and is 0.425 m long. The three resonances are its 3rd, 5th and 7th harmonics.

**Check.** If the same 0.425 m pipe were opened at both ends, its harmonics would be 400, 800 and 1200 Hz, all multiples of 400 Hz. The measured set does not match this, as expected.

## Common misconceptions

- **"Waves bounce off each other."** They pass through each other and come out unchanged. Only the displacement *while they overlap* is affected.
- **"Destructive interference destroys energy."** The energy is moved to other places or times, not lost.
- **"Beat frequency is the sum (or the average) of the two frequencies."** It is the difference. The average is roughly the pitch you hear.
- **"A node is where the wave stops."** A node is a point that never moves. The rest of the loop oscillates at the same frequency.
- **"Nodes are a whole wavelength apart."** Neighbouring nodes are half a wavelength apart.
- **"The closed end of a pipe is an antinode."** Air cannot move along the pipe at a closed end, so it is a displacement node. The open end is a displacement antinode.
- **"A closed pipe has a second harmonic."** With a node at one end and an antinode at the other, only odd harmonics exist.
- **"The length alone sets the frequency."** fₙ also depends on v, so tension and μ (strings) or air temperature (pipes) matter too.

## Where this leads

Topic 14.7 shows how waves spread out when they pass through gaps and around edges. Topic 14.8 then puts interference and diffraction together for light passing through two slits or a grating, using the same superposition rule. Practise first with the [practice questions](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-checklist/). When you are ready, continue to [Topic 14.7: Diffraction](/advanced-course-resources/physics-2/14-7-diffraction-study-guide/). For the frequency shifts caused by motion, look back at [Topic 14.5: The Doppler Effect](/advanced-course-resources/physics-2/14-5-doppler-effect-study-guide/).
