---
resourceId: "mb-ap-phys2-14.9-study-guide"
title: "Thin-Film Interference: Study Guide (Physics 2 14.9)"
description: "How light reflected from the two surfaces of a thin film interferes: phase changes on reflection, wavelength in the film, soap and oil colours, and antireflection coatings."
course: "physics-2"
unit: 14
topics: ["14.9"]
resourceType: "study-guide"
prerequisites:
  - "Index of refraction n = c/v and refraction at a boundary (Topic 13.3)"
  - "Inverted and upright reflections at a boundary (Topic 14.3)"
  - "Constructive and destructive interference, and v = fλ (Topics 14.2 and 14.6)"
prerequisiteResources: ["mb-ap-phys2-14.8-study-guide"]
learningObjectives:
  - "Describe what happens to light at a boundary: part is reflected, part transmitted and part absorbed"
  - "Decide whether a reflected ray has a 180° phase change by comparing indices of refraction"
  - "Find the wavelength of light inside a film from its wavelength in air and the film's index"
  - "Combine the path difference 2t and any reflection phase changes to predict constructive or destructive interference at normal incidence"
  - "Explain the colours of soap bubbles and oil films using differences in film thickness"
  - "Explain how a quarter-wave antireflection coating works and find its minimum thickness"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Take visible light as 400–700 nm and n_air = 1.00. All calculations are for light at normal incidence. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.9-revision-notes", "mb-ap-phys2-14.9-practice", "mb-ap-phys2-14.9-checklist"]
next: "mb-ap-phys2-14.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A thin film reflects light from its top and bottom surfaces. The two reflected waves overlap and interfere."
  - "A reflection from a medium with a higher index of refraction gives a 180° phase change. A reflection from a lower index gives none. Refraction never changes the phase."
  - "Inside a film the wavelength is λ_film = λ/n. At normal incidence the wave from the bottom surface travels an extra 2t."
  - "Count the reflection phase changes. Zero or two: 2t = mλ_film is constructive. Exactly one: 2t = (m + ½)λ_film is constructive. The conditions swap for destructive."
  - "A simple antireflection coating has n between air and the lens and a thickness of a quarter of the wavelength in the coating, t = λ/(4n_coating)."
faqs:
  - question: "Why does a thick sheet of window glass not show coloured bands?"
    answer: "The two reflections still overlap, but in a thick sheet the extra path is many wavelengths long. Then the condition for constructive interference is met for many different wavelengths at almost the same thickness, so all the colours mix back into white. The effect is only visible when the thickness is comparable to the wavelength of light."
  - question: "If an antireflection coating cancels the reflected light, where does the energy go?"
    answer: "Energy is not destroyed. When the reflected waves cancel, more of the light energy is transmitted into the lens. That is the point of the coating: a camera or a pair of glasses lets more light through and shows less glare."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Light at a boundary

When light reaches a boundary between two media, three things can happen to its energy:

- some is **reflected** back into the first medium,
- some is **transmitted** (refracted) into the second medium, and
- some is **absorbed** by the material and becomes thermal energy.

A **thin film** is a layer of transparent material with two boundaries close together: a top surface and a bottom surface. Examples are the wall of a soap bubble, a layer of oil on a puddle and a coating on a camera lens. Light that enters the film can reflect from both surfaces. So two reflected waves leave the film travelling in the same direction, and they overlap. Their superposition (Topic 14.6) gives a single reflected wave whose amplitude depends on how the two waves line up.

The effect is only noticeable when the film's thickness is **comparable to the wavelength of light**, roughly a few hundred nanometres. That is why it is called *thin*-film interference.

## Phase changes on reflection

In Topic 14.3 you saw that a pulse on a string reflects **inverted** when it reaches a medium where it travels more slowly, and **upright** when it reaches a faster medium. Light follows the same rule. A larger index of refraction means slower light (n = c/v), so:

- **Reflection from a medium with a higher n** (for example, light in air reflecting from water): the reflected wave has a **180° phase change**. It is shifted by half a cycle, so a crest comes back as a trough.
- **Reflection from a medium with a lower n** (for example, light inside glass reflecting from air): **no phase change**.
- **Refraction (transmission)** never changes the phase, whichever way the light goes.

A phase change of 180° has the same effect on interference as an extra path of half a wavelength. You must count these phase changes before you can say whether the two reflected waves add or cancel.

## The wavelength inside the film

When light enters a material its frequency stays the same, because the waves arriving at the boundary set the rate at which crests pass. The speed falls to v = c/n. From v = fλ the wavelength must fall by the same factor:

**λ_film = λ / n_film**

Here λ is the wavelength in air (or vacuum). For example, 600 nm light in water (n = 1.33) has a wavelength of 600 nm ÷ 1.33 = 451 nm. The path difference inside a film must be compared with **this** shorter wavelength, not with the wavelength in air.

## Two reflected rays

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="tf-title tf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tf-title">Two reflected rays from a thin film</title>
<desc id="tf-desc">Cross-section with three layers: air at the top with index n1, a thin film of thickness t in the middle with index n2, and the material below with index n3. An incident ray comes down from the upper left and hits the top surface of the film. Ray 1 reflects from the top surface back up into the air. The rest of the light refracts into the film, reflects from the bottom surface, travels back up through the film and leaves through the top surface as ray 2, parallel to ray 1. A dotted ray continues down into the material below, labelled transmitted. Notes at the right say that the top-surface reflection has a 180 degree phase change if n2 is greater than n1, and the bottom-surface reflection has a 180 degree phase change if n3 is greater than n2. A double-headed arrow marks the film thickness t.</desc>
<defs><marker id="tf-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="20" y="140" width="520" height="80" fill="#fdf6e3" stroke="none"/>
<rect x="20" y="220" width="520" height="110" fill="#e8edf5" stroke="none"/>
<line x1="20" y1="140" x2="540" y2="140" stroke="#1d2b44" stroke-width="2"/>
<line x1="20" y1="220" x2="540" y2="220" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44">
<text x="30" y="30">air, n₁ = 1.00</text>
<text x="30" y="186">thin film, n₂</text>
<text x="30" y="290">material below, n₃</text>
</g>
<line x1="100" y1="49" x2="198" y2="138" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tf-arr)"/>
<text x="92" y="70" font-size="12" fill="#1d2b44" text-anchor="end">incident</text>
<line x1="200" y1="140" x2="298" y2="51" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tf-arr)"/>
<text x="304" y="46" font-size="13" font-weight="600" fill="#1d2b44">ray 1</text>
<line x1="200" y1="140" x2="239" y2="218" stroke="#1d2b44" stroke-width="2"/>
<line x1="240" y1="220" x2="279" y2="142" stroke="#1d2b44" stroke-width="2"/>
<line x1="280" y1="140" x2="378" y2="51" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tf-arr)"/>
<text x="384" y="46" font-size="13" font-weight="600" fill="#1d2b44">ray 2</text>
<line x1="240" y1="220" x2="268" y2="318" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 4" marker-end="url(#tf-arr)"/>
<text x="276" y="318" font-size="12" fill="#1d2b44">transmitted</text>
<line x1="500" y1="144" x2="500" y2="216" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#tf-arr)" marker-end="url(#tf-arr)"/>
<text x="510" y="186" font-size="14" font-weight="600" fill="#1d2b44">t</text>
<g font-size="12" fill="#1d2b44">
<text x="330" y="128">top reflection: 180° if n₂ &gt; n₁</text>
<text x="300" y="242">bottom reflection: 180° if n₃ &gt; n₂</text>
</g>
</svg>
<figcaption>Figure 1. Ray 1 reflects from the top surface; ray 2 reflects from the bottom surface and leaves parallel to ray 1. The rays are drawn at an angle only so that you can tell them apart. In every calculation in this course the light is at normal incidence (straight down), so ray 2 travels an extra distance 2t inside the film.</figcaption>
</figure>

At **normal incidence**, ray 2 goes down through the film and back up again, so it travels an extra **2t**, where t is the film thickness. In wavelengths of the light inside the film, that is 2t ÷ λ_film.

Now combine the two effects:

1. **Path.** The extra path 2t shifts ray 2 by 2t/λ_film cycles.
2. **Reflections.** Count how many of the two reflections have a 180° phase change: zero, one or two.

If there are **zero or two** reflection phase changes, the reflections do not change how the waves line up (two half-cycle shifts make a whole cycle). Only the path matters. If there is **exactly one**, the reflections add an extra half cycle.

| Reflection phase changes | Constructive (bright reflection) | Destructive (dim reflection) |
|---|---|---|
| 0 or 2 | 2t = mλ_film | 2t = (m + ½)λ_film |
| exactly 1 | 2t = (m + ½)λ_film | 2t = mλ_film |

Here m = 0, 1, 2, … and λ_film = λ/n_film, so you can also write 2n_film t = mλ or 2n_film t = (m + ½)λ. Do not memorise the table blindly. Work out the phase changes for each problem, then decide.

### Angle matters too

If you look at a film at an angle, the light takes a longer path through it, so the condition for a given colour changes. That is why the colours of an oil film shift as you move your head. In this course you only need to describe this; calculations use normal incidence.

## Soap bubbles and oil films

White light contains all visible wavelengths, about 400 nm to 700 nm. At a given thickness, some wavelengths satisfy the constructive condition and are reflected strongly, while others are reflected weakly. The film looks the colour of the strong ones.

- A soap film or oil film is **not** the same thickness everywhere. Gravity drains a vertical soap film, so it is thinner at the top. An oil slick spreads unevenly. Each thickness picks out a different colour, so you see **bands of colour**. Each band follows a line of equal thickness.
- A soap film in air has one phase change (air → soap is low to high; soap → air is high to low). Where the film becomes much thinner than the wavelength, 2t is almost zero and the single half-cycle shift makes the two reflections cancel for **every** colour. That part of the film looks black. A black patch at the top of a soap film shows it is very thin and close to bursting.

## Antireflection coatings

Glass reflects a few per cent of the light at each surface. In a camera with many lenses that adds up to glare and lost light. A coating can cancel the reflections.

Choose a coating with an index **between** air and glass: n_air < n_coating < n_glass. Then:

- the air → coating reflection is low to high: 180° phase change;
- the coating → glass reflection is also low to high: 180° phase change.

Two phase changes cancel out, so only the path matters. Destructive interference needs 2t = ½λ_coating for the thinnest coating, which gives

**t = λ_coating / 4 = λ / (4n_coating)**

This is a **quarter-wave coating**. It works exactly for one chosen wavelength (often in the middle of the visible range) and nearly for its neighbours. The energy that is not reflected is transmitted into the glass.

## Worked example 1: the colour of a soap film

**Question.** A soap film (n = 1.35) is held in air and is 300 nm thick. White light falls on it at normal incidence. Which visible wavelengths are reflected most strongly, and which most weakly?

1. Phase changes: air → soap is low to high, so 180°. Soap → air is high to low, so none. There is **exactly one** phase change.
2. With one phase change, constructive reflection needs 2n t = (m + ½)λ. Here 2n t = 2 × 1.35 × 300 nm = 810 nm.
3. Constructive: λ = 810 nm ÷ (m + ½). m = 0 gives 1620 nm (infrared); m = 1 gives **540 nm**; m = 2 gives 324 nm (ultraviolet). Only 540 nm (green) is visible.
4. Destructive: 2n t = mλ, so λ = 810 nm ÷ m. m = 1 gives 810 nm (infrared); m = 2 gives **405 nm**, at the violet edge of the visible range.

**Answer.** Green light near 540 nm is reflected most strongly. Violet light near 405 nm is reflected most weakly. The film looks green.

**Check.** Inside the film, 540 nm light has λ_film = 540 ÷ 1.35 = 400 nm. The extra path 2t = 600 nm is 1.5 film wavelengths. Add the half cycle from the single phase change and the total shift is 2 whole cycles: constructive, as found.

## Worked example 2: designing a lens coating

**Question.** A lens has n = 1.60. A coating with n = 1.30 is to remove reflection of 520 nm light at normal incidence. (a) Find the minimum thickness. (b) Give the next thickness that would also work. (c) Explain why a coating with n = 1.70 at a quarter-wave thickness would make reflection worse.

1. (a) Phase changes: air (1.00) → coating (1.30), low to high: 180°. Coating (1.30) → lens (1.60), low to high: 180°. Two phase changes, so destructive needs 2t = (m + ½)λ_coating.
2. λ_coating = 520 nm ÷ 1.30 = 400 nm. With m = 0: t = λ_coating/4 = 520 nm ÷ (4 × 1.30) = **100 nm**.
3. (b) With m = 1: t = 3λ_coating/4 = 3 × 520 nm ÷ (4 × 1.30) = **300 nm**.
4. (c) With n = 1.70 the coating → lens reflection goes from 1.70 to 1.60, high to low, so it has no phase change. Now there is exactly one phase change. A quarter-wave thickness gives 2t = ½λ_coating, which with one phase change is the **constructive** condition. The two reflections add, and the lens reflects more than with no coating at all.

**Interpretation.** The 100 nm coating cannot be perfect for all colours. For 450 nm light the extra path is 0.58 of a wavelength in the coating, and for 650 nm it is 0.40, instead of exactly 0.50. Reflection at the ends of the spectrum is reduced but not removed, which is why coated lenses often show a faint coloured tint.

## Worked example 3: bands on a draining soap film

**Question.** A soap film (n = 1.33) stands vertically in a wire loop and is lit by 600 nm light at normal incidence. It shows horizontal bright and dark bands, with a black band at the top. (a) Explain the black band. (b) Find the thickness at the first and second bright bands below it. (c) By how much does the thickness change from one bright band to the next?

1. (a) There is one phase change (at the front air → soap surface only). At the top the film is far thinner than the wavelength, so 2t ≈ 0. The single half-cycle shift makes the two reflections cancel: dark.
2. (b) One phase change, so bright needs 2n t = (m + ½)λ. m = 0: t = λ/(4n) = 600 nm ÷ (4 × 1.33) = **112.8 nm**. m = 1: t = 3λ/(4n) = **338.3 nm**.
3. (c) Each step of m by 1 adds λ/(2n) to the thickness: 600 nm ÷ (2 × 1.33) = **225.6 nm**.

**Interpretation.** Each band follows a line of equal thickness. Bands crowded close together mean the thickness changes quickly there. As the film drains, the bands slide downwards and the black band grows. In white light each colour has its own band spacing, so the bands overlap into the familiar rainbow pattern.

## Common misconceptions

- **"Every reflection flips the wave."** Only reflection from a higher index gives a 180° phase change. Reflection from a lower index gives none.
- **"Refraction causes a phase change too."** It does not. Only reflection can.
- **Using the wavelength in air for the path in the film.** The path 2t must be compared with λ/n_film (or write 2n t).
- **Using t instead of 2t.** The light crosses the film twice, down and back.
- **Learning one formula for every film.** The bright and dark conditions swap depending on whether there is one phase change or zero/two. Always count first.
- **"Destructive interference destroys light energy."** The reflected energy is reduced, and the transmitted energy rises by the same amount.
- **"An antireflection coating is a quarter of the wavelength in air."** It is a quarter of the wavelength **in the coating**, λ/(4n_coating), and the coating's index must lie between the two media.

## Where this leads

Thin-film interference is the last topic in Unit 14 and builds directly on [Topic 14.8: Double-Slit Interference and Diffraction Gratings](/advanced-course-resources/physics-2/14-8-double-slit-interference-diffraction-gratings-study-guide/): in both, path difference decides whether waves add or cancel. These effects show that light behaves as a wave. [Topic 15.1: Quantum Theory and Wave-Particle Duality](/advanced-course-resources/physics-2/15-1-quantum-theory-wave-particle-duality-study-guide/) asks what happens when light also behaves like a stream of particles. Test yourself with the [practice questions](/advanced-course-resources/physics-2/14-9-thin-film-interference-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-9-thin-film-interference-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-9-thin-film-interference-checklist/).
