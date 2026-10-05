---
resourceId: "mb-ap-phys2-14.4-study-guide"
title: "Electromagnetic Waves: Study Guide (Physics 2 14.4)"
description: "What an electromagnetic wave is: perpendicular electric and magnetic fields, why it is transverse, plane waves, travel without a medium, and the order of the spectrum."
course: "physics-2"
unit: 14
topics: ["14.4"]
resourceType: "study-guide"
prerequisites:
  - "Transverse waves and polarization (Topics 14.1 and 14.3)"
  - "v = fλ and T = 1/f (Topic 14.2)"
  - "Electric fields (Topic 10.3) and magnetic fields (Topic 12.1) as vector fields"
prerequisiteResources: ["mb-ap-phys2-14.3-study-guide"]
learningObjectives:
  - "Describe an electromagnetic wave as oscillating electric and magnetic fields at right angles to each other"
  - "Explain why electromagnetic waves are transverse and can be polarized"
  - "Describe a plane wave and its flat wavefronts"
  - "Explain that electromagnetic waves need no medium and all travel at c in a vacuum"
  - "Put the main categories of the electromagnetic spectrum, and the colours of visible light, in order of wavelength"
  - "Use c = fλ to move between frequency and wavelength"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "c = 3.00 × 10⁸ m/s. 1 nm = 10⁻⁹ m, 1 MHz = 10⁶ Hz, 1 GHz = 10⁹ Hz. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.4-revision-notes", "mb-ap-phys2-14.4-practice", "mb-ap-phys2-14.4-checklist"]
next: "mb-ap-phys2-14.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "An electromagnetic wave is an electric field and a magnetic field oscillating together, at right angles to each other."
  - "Both fields are perpendicular to the direction of travel, so electromagnetic waves are transverse and can be polarized."
  - "Electromagnetic waves need no medium. In a vacuum they all travel at c = 3.00 × 10⁸ m/s, whatever their frequency."
  - "In order of decreasing wavelength: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma."
  - "Visible light, in order of decreasing wavelength: red, orange, yellow, green, blue, violet."
faqs:
  - question: "Do I need to learn the wavelength range of each part of the spectrum?"
    answer: "No. This course expects you to know the order of the categories, and of the colours of visible light, but not exact wavelength limits. Use c = fλ when a question gives you a number."
  - question: "Is \"light\" only the visible part?"
    answer: "Visible electromagnetic waves are what we usually call light. But physicists sometimes use \"light\" or \"electromagnetic radiation\" for waves of every wavelength. Read the question to see which meaning is used."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What is waving?

A wave on a string is a moving disturbance of the string. A sound wave is a moving disturbance of the air. So what is disturbed in a light wave? The answer is **fields**.

An **electromagnetic (EM) wave** is an electric field **E** and a magnetic field **B** that oscillate together and travel through space. At any point the wave passes, both fields keep changing in size and direction, over and over, at the frequency of the wave.

Three directions matter, and they are all at right angles to each other:

- the electric field oscillates along one line;
- the magnetic field oscillates along a second line, **perpendicular to E**;
- the wave travels along the third line, **perpendicular to both E and B**.

So if the wave travels along the x-axis and E oscillates along the y-axis, then B oscillates along the z-axis. For the plane waves in this course, E and B also reach their maximum values at the same places and times: they are in step.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="em-title em-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="em-title">Electric and magnetic fields in an electromagnetic wave</title>
<desc id="em-desc">A three-dimensional sketch. The direction of travel is the x-axis, drawn horizontally to the right. The electric field is a solid sine curve that oscillates up and down in the vertical plane, along the y-axis. The magnetic field is a dashed sine curve that oscillates in the horizontal plane, along the z-axis, drawn slanting towards the viewer. The two curves cross the x-axis at the same points and reach their peaks at the same positions. Arrows at two peaks show the electric field vector vertical and the magnetic field vector along z.</desc>
<defs><marker id="em-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="150" x2="535" y2="150" stroke="#1d2b44" stroke-width="2" marker-end="url(#em-arr)"/>
<line x1="80" y1="150" x2="80" y2="60" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#em-arr)"/>
<line x1="80" y1="150" x2="50" y2="205" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#em-arr)"/>
<polyline points="80,150.0 85,141.1 90,132.3 95,124.0 100,116.2 105,109.2 110,103.1 115,98.0 120,94.1 125,91.5 130,90.2 135,90.2 140,91.5 145,94.1 150,98.0 155,103.1 160,109.2 165,116.2 170,124.0 175,132.3 180,141.1 185,150.0 190,158.9 195,167.7 200,176.0 205,183.8 210,190.8 215,196.9 220,202.0 225,205.9 230,208.5 235,209.8 240,209.8 245,208.5 250,205.9 255,202.0 260,196.9 265,190.8 270,183.8 275,176.0 280,167.7 285,158.9 290,150.0 295,141.1 300,132.3 305,124.0 310,116.2 315,109.2 320,103.1 325,98.0 330,94.1 335,91.5 340,90.2 345,90.2 350,91.5 355,94.1 360,98.0 365,103.1 370,109.2 375,116.2 380,124.0 385,132.3 390,141.1 395,150.0 400,158.9 405,167.7 410,176.0 415,183.8 420,190.8 425,196.9 430,202.0 435,205.9 440,208.5 445,209.8 450,209.8 455,208.5 460,205.9 465,202.0 470,196.9 475,190.8 480,183.8 485,176.0 490,167.7 495,158.9 500,150.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="80.0,150.0 82.5,154.5 85.1,158.9 87.8,163.1 90.7,167.0 93.8,170.6 97.1,173.7 100.7,176.2 104.6,178.2 108.9,179.5 113.5,180.2 118.5,180.2 123.9,179.5 129.6,178.2 135.7,176.2 142.1,173.7 148.8,170.6 155.7,167.0 162.8,163.1 170.1,158.9 177.5,154.5 185.0,150.0 192.5,145.5 199.9,141.1 207.2,136.9 214.3,133.0 221.2,129.4 227.9,126.3 234.3,123.8 240.4,121.8 246.1,120.5 251.5,119.8 256.5,119.8 261.1,120.5 265.4,121.8 269.3,123.8 272.9,126.3 276.2,129.4 279.3,133.0 282.2,136.9 284.9,141.1 287.5,145.5 290.0,150.0 292.5,154.5 295.1,158.9 297.8,163.1 300.7,167.0 303.8,170.6 307.1,173.7 310.7,176.2 314.6,178.2 318.9,179.5 323.5,180.2 328.5,180.2 333.9,179.5 339.6,178.2 345.7,176.2 352.1,173.7 358.8,170.6 365.7,167.0 372.8,163.1 380.1,158.9 387.5,154.5 395.0,150.0 402.5,145.5 409.9,141.1 417.2,136.9 424.3,133.0 431.2,129.4 437.9,126.3 444.3,123.8 450.4,121.8 456.1,120.5 461.5,119.8 466.5,119.8 471.1,120.5 475.4,121.8 479.3,123.8 482.9,126.3 486.2,129.4 489.3,133.0 492.2,136.9 494.9,141.1 497.5,145.5 500.0,150.0" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="132.5" y1="150" x2="132.5" y2="94" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#em-arr)"/>
<line x1="132.5" y1="150" x2="118" y2="177" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#em-arr)"/>
<line x1="237.5" y1="150" x2="237.5" y2="206" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#em-arr)"/>
<line x1="237.5" y1="150" x2="252" y2="123" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#em-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="88" y="66">y</text>
<text x="34" y="216">z</text>
<text x="510" y="140">x</text>
<text x="380" y="248" text-anchor="middle">direction of travel along x</text>
<text x="150" y="80">E (solid curve, along y)</text>
<text x="300" y="200">B (dashed curve, along z)</text>
</g>
</svg>
<figcaption>Figure 1. One snapshot of a plane electromagnetic wave travelling along x. The electric field (solid curve) oscillates along y; the magnetic field (dashed curve) oscillates along z. Both are perpendicular to the direction of travel and to each other, and they peak at the same positions. The arrows show the field vectors at one crest and one trough.</figcaption>
</figure>

## Transverse, so it can be polarized

Both fields oscillate at right angles to the direction of travel. That is exactly what makes a wave **transverse** (Topic 14.1). So every electromagnetic wave is transverse.

This fits the evidence from Topic 14.3. Light can be polarized by a filter, and only transverse waves can be polarized. By convention, the **polarization direction** of an EM wave is the direction in which its **electric field** oscillates. The wave in Figure 1 is polarized along y. An ideal polarizing filter with its axis along y would let it all through. With the axis along z, the filter would block it completely.

## Plane waves and wavefronts

A **wavefront** is a surface joining points where the wave is at the same stage of its cycle, for example all the crests. Near a small source the wavefronts are spheres spreading out. Far from the source, a small piece of a huge sphere is almost flat. A wave whose wavefronts are flat, parallel planes is called a **plane wave**. In this course you can usually treat an EM wave as a plane wave:

- the wavefronts are planes perpendicular to the direction of travel;
- E and B are the same at every point of one wavefront;
- neighbouring crest wavefronts are one wavelength apart.

Light from a laser, or from the Sun when it reaches the Earth, is close to a plane wave.

## No medium needed

A mechanical wave, such as sound, is passed along by particles of a medium pushing on their neighbours. With no particles, there is no sound. An electromagnetic wave is different: a changing electric field produces a magnetic field, and a changing magnetic field produces an electric field (you met the second idea in Topic 12.4). The two fields keep each other going, so the wave can cross **empty space**. That is how sunlight reaches the Earth through the near-vacuum between them.

In a vacuum **every** electromagnetic wave travels at the same speed, whatever its frequency:

**c = 3.00 × 10⁸ m/s**

The usual wave equation then becomes **c = fλ**. A higher frequency always means a shorter wavelength, and the product stays the same. In air the speed is very close to c, so you can use c for air too. In materials such as glass or water, light travels more slowly (Topic 13.3). As you saw in Topic 14.3, its frequency stays the same at the boundary and its wavelength gets shorter.

## The electromagnetic spectrum

All EM waves have the same nature. They differ only in wavelength (and so in frequency). The full range is called the **electromagnetic spectrum**. It spans wavelengths from kilometres down to picometres. The categories, in order of **decreasing wavelength** (so increasing frequency), are:

**radio → microwave → infrared → visible → ultraviolet → X-ray → gamma ray**

The visible part is a narrow band in the middle. In order of decreasing wavelength its colours are:

**red → orange → yellow → green → blue → violet**

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="spec-title spec-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="spec-title">Order of the electromagnetic spectrum, not to scale</title>
<desc id="spec-desc">A horizontal bar divided into seven equal boxes, from left to right: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. An arrow below the bar points right, labelled wavelength decreases and frequency increases. The visible box is shaded and expanded into a second bar below with six equal boxes, from left to right: red, orange, yellow, green, blue, violet. The boxes are equal widths because the diagram shows order only, not size.</desc>
<defs><marker id="spec-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<rect x="30" y="40" width="500" height="44"/>
<line x1="101.4" y1="40" x2="101.4" y2="84"/><line x1="172.9" y1="40" x2="172.9" y2="84"/><line x1="244.3" y1="40" x2="244.3" y2="84"/><line x1="315.7" y1="40" x2="315.7" y2="84"/><line x1="387.1" y1="40" x2="387.1" y2="84"/><line x1="458.6" y1="40" x2="458.6" y2="84"/>
</g>
<rect x="244.3" y="40" width="71.4" height="44" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="65.7" y="67">Radio</text><text x="137.1" y="67">Microwave</text><text x="208.6" y="67">Infrared</text><text x="280" y="67" font-weight="600">Visible</text><text x="351.4" y="67">Ultraviolet</text><text x="422.9" y="67">X-ray</text><text x="494.3" y="67">Gamma</text>
</g>
<line x1="60" y1="108" x2="500" y2="108" stroke="#1d2b44" stroke-width="2" marker-end="url(#spec-arr)"/>
<text x="280" y="126" font-size="12" fill="#1d2b44" text-anchor="middle">wavelength decreases, frequency increases →</text>
<line x1="244.3" y1="84" x2="130" y2="170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="315.7" y1="84" x2="430" y2="170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<rect x="130" y="170" width="300" height="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="180" y1="170" x2="180" y2="210"/><line x1="230" y1="170" x2="230" y2="210"/><line x1="280" y1="170" x2="280" y2="210"/><line x1="330" y1="170" x2="330" y2="210"/><line x1="380" y1="170" x2="380" y2="210"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="155" y="195">red</text><text x="205" y="195">orange</text><text x="255" y="195">yellow</text><text x="305" y="195">green</text><text x="355" y="195">blue</text><text x="405" y="195">violet</text>
<text x="280" y="240">Boxes show order only. They are not to scale.</text>
</g>
</svg>
<figcaption>Figure 2. The order of the electromagnetic spectrum from longest wavelength (left) to shortest (right), with the visible band expanded. The boxes have equal widths because only the order matters here. The real categories cover very different ranges and blend into each other at the edges.</figcaption>
</figure>

A memory aid that works in both directions: going from radio to gamma, wavelength goes **down** and frequency goes **up**. Within the visible band, red has the longest wavelength and the lowest frequency; violet has the shortest wavelength and the highest frequency. In Topic 14.2 you saw that the energy of a wave increases with frequency. Unit 15 makes this precise for light: it arrives in photons, and each photon of ultraviolet, X-ray or gamma radiation carries more energy than a photon of visible light or radio.

**Background (not assessed).** Visible light covers roughly 400 nm (violet) to 700 nm (red). You will not be asked for exact limits of any category, but this rough scale helps you check whether an answer is sensible.

**What counts as "light"?** Visible EM waves are called light. Sometimes the word is used for EM waves of every wavelength, as in "ultraviolet light" or "electromagnetic radiation".

## Worked example 1: radio and visible light

**Question.** A radio transmitter broadcasts at 96.0 MHz. A lamp gives out light of wavelength 5.0 × 10⁻⁷ m.
(a) Find the wavelength of the radio wave.
(b) Find the frequency of the light.
(c) How many times greater is the frequency of the light than the frequency of the radio wave?

1. (a) Convert: f = 96.0 MHz = 96.0 × 10⁶ Hz. λ = c/f = (3.00 × 10⁸ m/s) ÷ (9.60 × 10⁷ Hz) = **3.125 m** (3.13 m to 3 significant figures).
2. (b) f = c/λ = (3.00 × 10⁸ m/s) ÷ (5.0 × 10⁻⁷ m) = **6.0 × 10¹⁴ Hz**.
3. (c) Ratio = (6.0 × 10¹⁴ Hz) ÷ (9.60 × 10⁷ Hz) = **6.25 × 10⁶**, about six million.

**Check.** Because c is the same for both, the wavelength ratio must be the same number the other way up: 3.125 m ÷ 5.0 × 10⁻⁷ m = 6.25 × 10⁶. Agreed. The answers also fit the spectrum order: the radio wave is metres long, the visible wavelength is less than a micrometre.

## Worked example 2: field directions and polarization

**Question.** A plane EM wave travels in the +z direction. At one instant at the origin, its electric field points in the +x direction.
(a) Along which axis does the magnetic field oscillate?
(b) Describe the wavefronts.
(c) The wave meets an ideal polarizing filter whose transmission axis is along y. What fraction of the intensity gets through? What if the axis is along x?

1. (a) B must be perpendicular to the direction of travel (z) **and** to E (x). The only axis left is **y**. So B oscillates along the y-axis.
2. (b) The wavefronts are flat planes perpendicular to z, so they are parallel to the xy-plane. Crests are spaced one wavelength apart along z.
3. (c) The polarization direction is the direction of E, which is x. A filter with its axis along y is perpendicular to it, so **none** gets through. With the axis along x, **all** of it gets through (an ideal filter).

**Interpretation.** Do not use the direction of B to decide polarization. The convention uses E. A common slip is to see "B along y" and conclude that a y-axis filter passes the wave.

## Worked example 3: timing an echo

**Question.** A radar station sends a short radio pulse towards an aircraft. The echo returns 2.4 × 10⁻⁴ s after the pulse is sent. How far away is the aircraft?

1. The pulse travels to the aircraft and back, so the total distance is ct = (3.00 × 10⁸ m/s)(2.4 × 10⁻⁴ s) = 7.2 × 10⁴ m.
2. The one-way distance is half of this: **3.6 × 10⁴ m** (36 km).

**Check.** Radio waves are electromagnetic, so they travel at c in air. Forgetting to halve the distance is the most common error here.

## Common misconceptions

- **"Electromagnetic waves need air (or some medium) to travel."** They do not. Fields can exist in a vacuum, which is why sunlight reaches the Earth.
- **"Higher-frequency waves travel faster."** In a vacuum all EM waves travel at c. A higher frequency means a shorter wavelength, not a higher speed.
- **"E and B point in the same direction" or "B points along the direction of travel."** E, B and the direction of travel are all perpendicular to each other.
- **"Radio waves are sound waves."** A radio receiver turns an EM wave into sound, but the radio wave itself is electromagnetic: transverse, needing no medium, travelling at c.
- **"Gamma rays and X-rays are not light."** In the wide sense, all of the spectrum is electromagnetic radiation of the same kind. Only the wavelength differs.
- **Reversing the spectrum.** Learn one end firmly: radio has the longest wavelength and lowest frequency. Red has the longest wavelength in the visible band.
- **"A shorter wavelength in glass changes the colour."** The frequency, which sets the colour you see, does not change at a boundary.

## Where this leads

This topic builds on polarization and boundaries from [Topic 14.3](/advanced-course-resources/physics-2/14-3-boundary-behavior-waves-polarization-study-guide/). Next, [Topic 14.5, The Doppler Effect](/advanced-course-resources/physics-2/14-5-doppler-effect-study-guide/), looks at what happens to the observed frequency when the source or observer moves. Later, the interference topics in this unit use light's short wavelength, and Unit 15 asks whether light is a wave or a particle. Test yourself with the [practice questions](/advanced-course-resources/physics-2/14-4-electromagnetic-waves-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-4-electromagnetic-waves-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-4-electromagnetic-waves-checklist/) to consolidate.
