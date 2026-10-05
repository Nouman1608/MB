---
resourceId: "mb-ap-phys2-14.3-study-guide"
title: "Boundary Behavior of Waves and Polarization: Study Guide (Physics 2 14.3)"
description: "What happens when a wave reaches a new medium: reflection and transmission, when the reflected pulse flips, why frequency stays fixed, polarization and intensity."
course: "physics-2"
unit: 14
topics: ["14.3"]
resourceType: "study-guide"
prerequisites:
  - "Transverse and longitudinal waves, and wave speed on a string v = √(F_T/μ) (Topic 14.1)"
  - "Period, frequency, wavelength and v = fλ (Topic 14.2)"
  - "Power as the rate of energy transfer, in watts"
prerequisiteResources: ["mb-ap-phys2-14.2-study-guide"]
learningObjectives:
  - "Describe the reflected and transmitted waves produced when a wave reaches a boundary between two media"
  - "Predict whether a reflected pulse is inverted from the change in wave speed across the boundary"
  - "Explain why frequency stays the same across a boundary and find the new wavelength"
  - "Explain what polarization is and why only transverse waves can be polarized"
  - "Describe how filters, reflection and refraction can polarize a wave and reduce its intensity"
  - "Calculate intensity as average power per unit area"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Use v = √(F_T/μ), v = fλ and I = P/A. Keep unrounded values until the final step"
related: ["mb-ap-phys2-14.3-revision-notes", "mb-ap-phys2-14.3-practice", "mb-ap-phys2-14.3-checklist"]
next: "mb-ap-phys2-14.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "At a boundary between two media, a wave is partly reflected and partly transmitted."
  - "If the wave slows down in the new medium, the reflected pulse is inverted. If it speeds up, the reflected pulse is upright."
  - "The transmitted pulse is never inverted."
  - "Frequency does not change at a boundary. The wavelength changes in proportion to the speed: λ₂/λ₁ = v₂/v₁."
  - "Only transverse waves can be polarized. Polarizing a wave usually reduces its intensity."
  - "Intensity is average power per unit area: I = P/A, in W/m²."
faqs:
  - question: "Is it the density of the string that decides whether the reflection flips?"
    answer: "Not directly. The rule is about wave speed. For two strings under the same tension, the string with more mass per length has the lower speed, so a pulse going into it reflects inverted. Always reason from the speed."
  - question: "Can sound be polarized?"
    answer: "No. Sound is a longitudinal wave: the air moves back and forth along the direction the wave travels. There is no sideways direction to select, so a slit or filter cannot polarize it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## A wave meets a boundary

So far you have studied waves travelling through one medium. Now let the wave reach the place where the medium changes. Two strings tied together are the simplest example. A thin, light string is knotted to a thick, heavy string, and both are under the same tension. The knot is the **boundary**.

When a pulse reaches the boundary, two things usually happen at once:

- part of the pulse is **reflected**: it travels back into the first medium;
- part of the pulse is **transmitted**: it carries on into the second medium.

The incident energy is shared between the two new pulses. So each of them carries less energy than the original pulse, and each has a smaller amplitude. How the energy is shared depends on the two media. The more different they are, the larger the share that is reflected. If the two media are identical, there is no real boundary and everything is transmitted.

Two limiting cases are worth knowing:

- **A string fixed to a wall.** The wall cannot move, so nothing is transmitted along it. The whole pulse is reflected, and it comes back inverted.
- **A string end that is free to slide** (for example, a light ring on a smooth vertical pole). Again nothing is transmitted, and the whole pulse comes back upright.

These are the extreme versions of "a much slower medium" and "a much faster medium". The rule in the next section covers both.

## Inverted or upright? Follow the speed

The reflected pulse may come back the same way up as the incident pulse, or upside down. The deciding quantity is the **wave speed** on each side of the boundary.

| Wave goes into a medium where its speed… | Reflected pulse | Transmitted pulse |
|---|---|---|
| decreases (for example light string → heavy string) | **inverted** | upright |
| increases (for example heavy string → light string) | upright | upright |

Notice the last column. The **transmitted pulse is never inverted**. The knot is pulled up by the incident pulse, so it pulls the second string up too.

For strings, the speed comes from v = √(F_T/μ), where F_T is the tension and μ is the mass per unit length. Two strings tied together share the same tension, so the string with the larger μ is the slower one. A pulse going from light to heavy slows down, so its reflection is inverted.

<figure>
<svg viewBox="0 0 560 310" role="img" aria-labelledby="bnd-title bnd-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bnd-title">A pulse reflecting and transmitting at a light-to-heavy string junction</title>
<desc id="bnd-desc">Two panels. Top panel, before: a thin light string on the left is joined at a knot to a thick heavy string on the right. An upright pulse on the light string moves right towards the knot. Bottom panel, after: on the light string a smaller inverted pulse moves left, away from the knot. On the heavy string a smaller, narrower upright pulse moves right.</desc>
<defs><marker id="bnd-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="20" y="28" font-size="14" font-weight="600" fill="#1d2b44">Before</text>
<path d="M40 100 H110 C130 100 135 62 150 62 C165 62 170 100 190 100 H280" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 100 H520" fill="none" stroke="#1d2b44" stroke-width="5"/>
<circle cx="280" cy="100" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="130" y1="44" x2="185" y2="44" stroke="#1d2b44" stroke-width="2" marker-end="url(#bnd-arr)"/>
<text x="150" y="128" font-size="12" fill="#1d2b44" text-anchor="middle">incident pulse (upright)</text>
<text x="160" y="146" font-size="12" fill="#1d2b44" text-anchor="middle">light string: faster</text>
<text x="400" y="128" font-size="12" fill="#1d2b44" text-anchor="middle">heavy string: slower</text>
<text x="280" y="82" font-size="12" fill="#1d2b44" text-anchor="middle">knot</text>
<line x1="20" y1="168" x2="540" y2="168" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<text x="20" y="194" font-size="14" font-weight="600" fill="#1d2b44">After</text>
<path d="M40 240 H110 C130 240 135 254 150 254 C165 254 170 240 190 240 H280" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 240 H360 C370 240 372 214 380 214 C388 214 390 240 400 240 H520" fill="none" stroke="#1d2b44" stroke-width="5"/>
<circle cx="280" cy="240" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="185" y1="276" x2="130" y2="276" stroke="#1d2b44" stroke-width="2" marker-end="url(#bnd-arr)"/>
<line x1="365" y1="200" x2="410" y2="200" stroke="#1d2b44" stroke-width="2" marker-end="url(#bnd-arr)"/>
<text x="150" y="298" font-size="12" fill="#1d2b44" text-anchor="middle">reflected pulse: inverted, smaller</text>
<text x="420" y="270" font-size="12" fill="#1d2b44" text-anchor="middle">transmitted pulse: upright,</text>
<text x="420" y="286" font-size="12" fill="#1d2b44" text-anchor="middle">smaller and narrower</text>
</svg>
<figcaption>Figure 1. A pulse travels from a light string (thin line) into a heavy string (thick line) under the same tension. The wave slows down at the knot, so the reflected pulse is inverted. The transmitted pulse is upright and narrower, because it moves more slowly but takes the same time to pass a point.</figcaption>
</figure>

The same ideas apply to any wave. Sound passing from air into water, and light passing from air into glass, are both partly reflected and partly transmitted at the surface.

## Frequency stays the same; wavelength changes

Think about the knot in Figure 1 when a continuous wave arrives. The knot belongs to both strings. Each time the first string moves it up and down once, the second string is moved up and down once too. So both sides oscillate at the same rate:

**The frequency of a wave does not change when it crosses a boundary.**

The frequency is set by the source. The speed is set by the medium. So the wavelength has to adjust. From v = fλ with f fixed:

**λ₂ / λ₁ = v₂ / v₁**

- Into a slower medium: the wavelength gets **shorter**.
- Into a faster medium: the wavelength gets **longer**.

The period T = 1/f does not change either. A single pulse takes the same time to pass a point on each side of the boundary, so its **width** changes in proportion to the speed, just like the wavelength. That is why the transmitted pulse in Figure 1 is narrower.

## Polarization

In a transverse wave the disturbance is perpendicular to the direction of travel. But "perpendicular" still leaves a choice. Picture a long rope along the x-axis. You can shake it up and down (along y), side to side (along z), or in any direction in between.

- A wave whose disturbance stays in **one direction** (so the rope moves in a single plane) is **polarized**. The direction of the disturbance is its **polarization direction**.
- A wave whose disturbance keeps changing direction at random is **unpolarized**. Light from a hot filament or a flame is unpolarized.

Now pass the rope through a narrow vertical slot. Up-and-down motion goes through the slot. Side-to-side motion is stopped. Whatever the rope was doing before, it moves only up and down after the slot: the slot has **polarized** the wave.

A **longitudinal** wave cannot be polarized. Its disturbance is along the direction of travel, so there is no sideways direction for a slot to pick out. Turning a slot in front of a loudspeaker makes no difference to what you hear. This gives a useful test. If rotating a filter changes how much of a wave gets through, the wave must be transverse. Light passes this test, so light is a transverse wave (Topic 14.4 shows what is oscillating).

### Three ways to polarize a wave

1. **Passing through a filter with a preferred direction.** A polarizing filter lets through the part of the wave oscillating along its **transmission axis** and blocks the part at right angles to it. This is the light version of the slot.
2. **Reflection.** Light reflected from a flat surface such as water, a wet road or a glass window is partly polarized, mostly parallel to the surface. For a horizontal surface, the glare is mostly horizontally polarized. Sunglasses with a vertical transmission axis block much of that glare.
3. **Refraction.** Light that is transmitted into a material at an angle can also become partly polarized.

<figure>
<svg viewBox="0 0 560 230" role="img" aria-labelledby="pol-title pol-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pol-title">Unpolarized light passing through two crossed polarizing filters</title>
<desc id="pol-desc">A beam travels from left to right. On the left, unpolarized light is shown as several double-headed arrows pointing in different directions, intensity I zero. It meets filter 1, drawn as a square with vertical lines showing a vertical transmission axis. Between the filters the light is shown as a single vertical double-headed arrow, intensity I zero over 2. It then meets filter 2, a square with horizontal lines showing a horizontal transmission axis. After filter 2 there is no light, intensity zero.</desc>
<defs><marker id="pol-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<marker id="pol-arr2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="20" y1="100" x2="420" y2="100" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#pol-arr)"/>
<g stroke="#1d2b44" stroke-width="2" marker-start="url(#pol-arr2)" marker-end="url(#pol-arr2)">
<line x1="75" y1="70" x2="75" y2="130"/>
<line x1="45" y1="100" x2="105" y2="100"/>
<line x1="54" y1="79" x2="96" y2="121"/>
<line x1="54" y1="121" x2="96" y2="79"/>
</g>
<rect x="150" y="55" width="70" height="90" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="165" y1="62" x2="165" y2="138"/><line x1="178" y1="62" x2="178" y2="138"/><line x1="192" y1="62" x2="192" y2="138"/><line x1="205" y1="62" x2="205" y2="138"/></g>
<line x1="265" y1="70" x2="265" y2="130" stroke="#1d2b44" stroke-width="2" marker-start="url(#pol-arr2)" marker-end="url(#pol-arr2)"/>
<rect x="310" y="55" width="70" height="90" rx="4" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.5"><line x1="317" y1="70" x2="373" y2="70"/><line x1="317" y1="90" x2="373" y2="90"/><line x1="317" y1="110" x2="373" y2="110"/><line x1="317" y1="130" x2="373" y2="130"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="75" y="165">unpolarized</text><text x="75" y="181">intensity I₀</text>
<text x="185" y="165">filter 1</text><text x="185" y="181">axis vertical</text>
<text x="265" y="165">polarized vertically</text><text x="265" y="181">intensity I₀/2</text>
<text x="345" y="165">filter 2</text><text x="345" y="181">axis horizontal</text>
<text x="470" y="96">no light</text><text x="470" y="112">intensity 0</text>
</g>
</svg>
<figcaption>Figure 2. Unpolarized light (arrows in many directions) passes an ideal filter with a vertical axis (vertical lines) and leaves polarized vertically with half the intensity. A second filter with a horizontal axis (horizontal lines) blocks it completely. Rotating filter 2 back to vertical would let all of the I₀/2 through.</figcaption>
</figure>

## Polarization and intensity

Polarizing a wave usually removes part of it, so the wave that comes out carries less energy each second. To compare how strong a wave is, we use its intensity.

**Intensity I** is the power carried by the wave through each square metre of area at right angles to its direction of travel:

**I = P / A**, in W/m²

The energy a wave carries goes up and down during each cycle, so intensity is defined as the **average power per unit area over one period**.

For ideal filters (in this course you can treat filters as ideal unless told otherwise):

- **Unpolarized light through one filter:** half the intensity gets through, I = I₀/2, whatever the direction of the axis. The light that leaves is polarized along the axis.
- **Polarized light, filter axis parallel to the polarization:** all of it gets through.
- **Polarized light, filter axis perpendicular to the polarization:** none gets through. Two filters with perpendicular axes are called **crossed**.

At angles in between, part of polarized light gets through: the closer the axis is to the polarization direction, the more is transmitted. The exact formula for in-between angles is not needed in this course.

## Worked example 1: a wave crossing a knot

**Question.** A light string (μ₁ = 0.020 kg/m) is tied to a heavy string (μ₂ = 0.080 kg/m). The tension in both is 50 N.

(a) An upright pulse 0.40 m wide is sent along the light string towards the knot. Describe the reflected and transmitted pulses, including the width of the transmitted pulse.
(b) The end of the light string is now shaken continuously at 20 Hz. Find the wavelength on each string.

1. Speeds: v₁ = √(F_T/μ₁) = √(50 N ÷ 0.020 kg/m) = 50 m/s. v₂ = √(50 N ÷ 0.080 kg/m) = 25 m/s.
2. The pulse goes into a medium where its speed **decreases** (50 m/s → 25 m/s). So the reflected pulse is **inverted** and travels back along the light string at 50 m/s. The transmitted pulse is **upright** and moves at 25 m/s. Both are smaller than the incident pulse because they share its energy.
3. Width of the transmitted pulse. The incident pulse takes Δt = 0.40 m ÷ 50 m/s = 0.0080 s (8.0 ms) to pass the knot. The transmitted pulse takes the same time to leave the knot, so its width is (25 m/s)(0.0080 s) = **0.20 m**.
4. (b) The frequency is 20 Hz on both strings. λ₁ = v₁/f = 50 ÷ 20 = **2.5 m**. λ₂ = v₂/f = 25 ÷ 20 = **1.25 m** (1.3 m to 2 significant figures).

**Check.** λ₂/λ₁ = 1.25/2.5 = 0.5 = v₂/v₁, as it should be. Four times the mass per length at the same tension halves the speed, because v ∝ 1/√μ. The reflected pulse stays on the light string, so it keeps the speed of 50 m/s and the width of 0.40 m.

## Worked example 2: two filters and intensity

**Question.** Unpolarized light of intensity 80 W/m² falls evenly on an ideal polarizing filter of area 4.0 × 10⁻⁴ m², at right angles to the filter.

(a) What power falls on the filter?
(b) What are the intensity and power of the light that gets through?
(c) A second ideal filter is placed behind the first, with its axis at 90° to the first. What intensity leaves it? What if its axis is parallel to the first?
(d) How much energy passes through the first filter in one minute?

1. (a) P = IA = (80 W/m²)(4.0 × 10⁻⁴ m²) = **0.032 W**.
2. (b) Unpolarized light through one ideal filter keeps half its intensity: I₁ = 80 ÷ 2 = **40 W/m²**. Power through: (40 W/m²)(4.0 × 10⁻⁴ m²) = **0.016 W**. The light is now polarized along the axis of filter 1.
3. (c) Crossed axes: the light is polarized at right angles to filter 2, so **0 W/m²** gets through. Parallel axes: all of the polarized light passes, so **40 W/m²**.
4. (d) E = Pt = (0.016 W)(60 s) = **0.96 J**.

**Interpretation.** The first filter halves the intensity whatever its direction, because unpolarized light has no preferred direction. The second filter's effect depends completely on its angle to the first. That dependence on angle is the evidence that light is transverse.

## Common misconceptions

- **"The frequency changes at a boundary."** The frequency is fixed by the source. The speed and the wavelength change; f and T do not.
- **"The transmitted pulse can be inverted."** Only the reflected pulse can flip. The transmitted pulse is always upright.
- **"Heavier always means inverted" without a reason.** The real rule is about speed. For strings at the same tension, heavier means slower, so it works there. For other waves, look at the speeds.
- **"The reflected pulse travels at a new speed."** The reflected pulse is back in the first medium, so it has the first medium's speed and its original width.
- **"All of the wave is reflected (or all transmitted)."** At a real boundary between two media you get both. Total reflection happens only in limiting cases such as a fixed end.
- **"Sound can be polarized by a slit."** Sound is longitudinal, so it cannot be polarized. A slit may change how sound spreads, but that is diffraction, not polarization.
- **"A polarizing filter blocks light at random."** It blocks the part oscillating at right angles to its axis. Unpolarized light loses half; polarized light loses anything from none to all, depending on the angle.
- **"Intensity is the same as power."** Intensity is power **per unit area**. The same power spread over a bigger area gives a smaller intensity.

## Where this leads

This topic builds on wave speed and v = fλ from [Topic 14.2, Periodic Waves](/advanced-course-resources/physics-2/14-2-periodic-waves-study-guide/). Next, [Topic 14.4, Electromagnetic Waves](/advanced-course-resources/physics-2/14-4-electromagnetic-waves-study-guide/), shows that light is made of oscillating electric and magnetic fields, which explains why it can be polarized. Reflection at a boundary returns in Topic 14.9, where the inversion rule decides the colours of thin films. Test yourself with the [practice questions](/advanced-course-resources/physics-2/14-3-boundary-behavior-waves-polarization-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-3-boundary-behavior-waves-polarization-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-3-boundary-behavior-waves-polarization-checklist/) to consolidate.
