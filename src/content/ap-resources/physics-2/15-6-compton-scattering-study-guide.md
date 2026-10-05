---
resourceId: "mb-ap-phys2-15.6-study-guide"
title: "Compton Scattering: Study Guide (Physics 2 15.6)"
description: "How an X-ray photon scatters off a free electron like a particle: photon momentum, conservation of energy and momentum, and the Compton wavelength shift with angle."
course: "physics-2"
unit: 15
topics: ["15.6"]
resourceType: "study-guide"
prerequisites:
  - "Photon energy E = hf = hc/λ and the photoelectric effect (Topic 15.5)"
  - "Conservation of momentum in two dimensions and vector components"
  - "Kinetic energy K = ½mv² = p²/2m"
prerequisiteResources: ["mb-ap-phys2-15.5-study-guide"]
learningObjectives:
  - "Describe Compton scattering as a collision between a photon and a free electron"
  - "Use p = h/λ = E/c for the momentum of a photon"
  - "Apply conservation of energy to find the kinetic energy of the recoiling electron"
  - "Apply conservation of momentum in two dimensions to find the electron's momentum and direction"
  - "Use Δλ = (h/m_e c)(1 − cos θ) to relate the wavelength shift to the scattering angle"
  - "Explain why Compton scattering is evidence that light is made of photons"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "h = 6.63 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s, m_e = 9.11 × 10⁻³¹ kg, 1 eV = 1.60 × 10⁻¹⁹ J. Working in SI units, then converting, is used throughout; hc = 1240 eV·nm can change the third figure slightly"
related: ["mb-ap-phys2-15.6-revision-notes", "mb-ap-phys2-15.6-practice", "mb-ap-phys2-15.6-checklist"]
next: "mb-ap-phys2-15.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "In Compton scattering a photon collides with a free electron and comes out with lower energy and longer wavelength."
  - "A photon has momentum p = h/λ = E/c, even though it has no mass."
  - "Energy and momentum are both conserved in the collision. The electron's kinetic energy equals the energy the photon loses."
  - "The wavelength shift is Δλ = (h/m_e c)(1 − cos θ): zero at θ = 0, largest (4.85 pm) at θ = 180°, and independent of the starting wavelength."
  - "A wave model predicts no change in wavelength, so the shift is evidence that light behaves as particles."
faqs:
  - question: "Why use X-rays and not visible light?"
    answer: "The largest possible shift is only about 4.85 × 10⁻¹² m. That is about 10% of a 50 pm X-ray wavelength, which is easy to measure, but only about one part in 100,000 of a 500 nm visible wavelength."
  - question: "Does the photon slow down after the collision?"
    answer: "No. A photon in a vacuum always travels at c. It loses energy by having a lower frequency and a longer wavelength, not by slowing down."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## A photon that bounces

In Topic 15.5 a photon gave **all** its energy to an electron and disappeared. In Compton scattering a photon gives only **part** of its energy to an electron and carries on, in a new direction.

Fire a beam of X-rays at a target whose outer electrons are only loosely held, so you can model them as **free electrons** at rest. Place a detector at an angle θ to the original beam direction. The detector finds X-rays with a **longer wavelength** than the incoming beam. The bigger the angle θ, the bigger the increase in wavelength. Arthur Compton reported this in 1923, and the change is called the **Compton effect** or Compton shift.

### What a wave model predicts

Treat the X-rays as a classical wave. The wave's oscillating electric field shakes the electron at the wave's own frequency. A shaking charge radiates at the frequency it is shaken at. So the scattered wave should have **the same frequency and wavelength** as the incoming wave, at every angle. The measured shift does not fit this model.

### What a particle model predicts

Treat the X-ray as a stream of photons. Each photon hits one electron, like one ball hitting another. The electron recoils and takes some kinetic energy. The photon must leave with less energy:

E′ = hf′ < E = hf, so f′ < f and λ′ > λ.

The more the photon is deflected, the more energy it hands over, just as a ball that bounces straight back pushes a target harder than a glancing blow. This matches the measurements, so Compton scattering is strong evidence that light comes in discrete energy packets, photons, that behave like particles in collisions.

## The momentum of a photon

A photon has no mass, but it does carry momentum:

**p = h/λ = E/c**

A shorter wavelength means a larger momentum. For a 50.0 pm X-ray photon, p = (6.63 × 10⁻³⁴ J·s) ÷ (50.0 × 10⁻¹² m) = 1.33 × 10⁻²³ kg·m/s. Do not use p = mv for a photon; it has no mass, and it always moves at c in a vacuum.

When the photon's energy goes down, its frequency goes down, its wavelength goes up and its momentum goes down. Its speed stays at c.

## Conservation laws in the collision

The photon and the electron form an isolated system during the collision, so two conservation laws apply.

**Energy.** The electron starts at rest. The energy the photon loses becomes the electron's kinetic energy:

**hc/λ = hc/λ′ + K_e**

**Momentum.** Momentum is a vector, so conserve each component. Take the incoming photon along +x. The scattered photon leaves at angle θ above the x axis, and the electron recoils at angle α below it (Figure 1).

- x: h/λ = (h/λ′) cos θ + p_e cos α
- y: 0 = (h/λ′) sin θ − p_e sin α

The y equation tells you something useful without any numbers: before the collision there is no y-momentum, so if the photon goes up, the electron **must** go down. The electron never moves off along the photon's new direction.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="cs-col-title cs-col-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cs-col-title">Compton scattering of a photon by an electron at rest</title>
<desc id="cs-col-desc">On the left, before the collision: a wavy line labelled incoming photon, wavelength lambda, momentum h over lambda, travels to the right towards an electron at rest at the centre. On the right, after the collision: a longer-spaced wavy line labelled scattered photon, wavelength lambda prime, momentum h over lambda prime, leaves the centre at angle theta above the dashed original direction. The electron leaves the centre at angle alpha below the dashed line, labelled electron, momentum p sub e.</desc>
<defs><marker id="cs-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M30 180 q 7.5 -14 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0 t 15 0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M235 180 L262 180" stroke="#1d2b44" stroke-width="2" marker-end="url(#cs-arr)"/>
<text x="40" y="150" font-size="12" fill="#1d2b44">incoming photon: λ, p = h/λ</text>
<line x1="280" y1="180" x2="530" y2="180" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="450" y="200" font-size="12" fill="#1d2b44">original direction</text>
<circle cx="280" cy="180" r="9" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="184" font-size="11" font-weight="600" fill="#1d2b44" text-anchor="middle">e⁻</text>
<g transform="rotate(-50 280 180)">
<path d="M292 180 q 10 -14 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M432 180 L462 180" stroke="#1d2b44" stroke-width="2" marker-end="url(#cs-arr)"/>
</g>
<text x="410" y="85" font-size="12" fill="#1d2b44">scattered photon:</text>
<text x="410" y="101" font-size="12" fill="#1d2b44">λ′ &gt; λ, p′ = h/λ′</text>
<path d="M284 188 L339 301" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#cs-arr)"/>
<text x="352" y="318" font-size="12" fill="#1d2b44">electron: p_e, K_e</text>
<path d="M340 180 A 60 60 0 0 0 318.6 134" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="346" y="160" font-size="14" fill="#1d2b44">θ</text>
<path d="M330 180 A 50 50 0 0 1 301.9 224.9" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="334" y="220" font-size="14" fill="#1d2b44">α</text>
</svg>
<figcaption>Figure 1. Before: a photon of wavelength λ travels towards a free electron at rest. After: the photon leaves at angle θ above the original direction (dashed line) with a longer wavelength λ′ (wider wave spacing), and the electron recoils at angle α below it (drawn for θ = 50°, where α is about 64° for a 50 pm photon). The upward momentum of the photon is balanced by the downward momentum of the electron.</figcaption>
</figure>

## The Compton shift equation

Solving the energy and momentum equations together (with the relativistic form of the electron's energy, which is beyond this course) gives the shift in wavelength:

**Δλ = λ′ − λ = (h / m_e c)(1 − cos θ)**

where m_e = 9.11 × 10⁻³¹ kg is the electron mass and θ is the angle between the photon's old and new directions. You do not need to derive it; you need to be able to use it and explain its features.

The constant h/(m_e c) has units of length. With the course values:

h/(m_e c) = (6.63 × 10⁻³⁴) ÷ [(9.11 × 10⁻³¹)(3.00 × 10⁸)] = 2.43 × 10⁻¹² m = 2.43 pm

| Scattering angle θ | 1 − cos θ | Δλ |
|---|---|---|
| 0° (photon carries straight on) | 0 | 0 |
| 60° | 0.5 | 1.21 pm |
| 90° | 1 | 2.43 pm |
| 180° (photon bounces straight back) | 2 | 4.85 pm |

Features to notice:

- **Δλ depends only on θ.** It does not depend on the starting wavelength or on the brightness of the beam.
- **Δλ rises with θ** from 0 at 0° to a maximum of 2h/(m_e c) at 180°.
- **The shift is tiny.** For a 50 pm X-ray, a 4.85 pm shift is about 10% of the wavelength. For 500 nm visible light it is about 0.001%, far too small to notice. That is why the effect is studied with X-rays.
- **Shorter starting wavelengths lose a bigger fraction of their energy**, because the same Δλ is a bigger fraction of a small λ.

## Worked example 1: energy shared in a collision

**Question.** An X-ray photon of wavelength 50.0 pm scatters off a free electron at rest. The photon is detected at θ = 60°. Find (a) the scattered wavelength, (b) the energies of the photon before and after, and (c) the kinetic energy of the electron.

1. (a) Δλ = (2.43 pm)(1 − cos 60°) = (2.43 pm)(0.5) = 1.21 pm. So λ′ = 50.0 pm + 1.21 pm = 51.2 pm.
2. (b) Before: E = hc/λ = (6.63 × 10⁻³⁴)(3.00 × 10⁸) ÷ (50.0 × 10⁻¹²) = 3.98 × 10⁻¹⁵ J. In electron volts: 3.978 × 10⁻¹⁵ ÷ 1.60 × 10⁻¹⁹ = 2.49 × 10⁴ eV = 24.9 keV.
3. After: E′ = hc/λ′ = (1.989 × 10⁻²⁵ J·m) ÷ (51.21 × 10⁻¹² m) = 3.88 × 10⁻¹⁵ J = 24.3 keV.
4. (c) Energy conservation: K_e = E − E′ = 3.978 × 10⁻¹⁵ − 3.884 × 10⁻¹⁵ = 9.42 × 10⁻¹⁷ J = 0.589 keV (589 eV).

**Interpretation.** The photon loses only 2.4% of its energy. Its frequency drops from 6.00 × 10¹⁸ Hz to 5.86 × 10¹⁸ Hz, and its speed stays at c. Keep unrounded values for E and E′: K_e is a small difference between two large numbers, so rounding them early ruins the answer.

## Worked example 2: momentum in two dimensions

**Question.** The same 50.0 pm photon instead scatters at θ = 90°, so it leaves along +y. Find the magnitude and direction of the electron's momentum, and check that energy is conserved.

1. Scattered wavelength: Δλ = 2.43 pm × (1 − cos 90°) = 2.43 pm, so λ′ = 52.43 pm.
2. Photon momenta: p = h/λ = 6.63 × 10⁻³⁴ ÷ 50.0 × 10⁻¹² = 1.326 × 10⁻²³ kg·m/s (along +x). p′ = h/λ′ = 6.63 × 10⁻³⁴ ÷ 52.43 × 10⁻¹² = 1.265 × 10⁻²³ kg·m/s (along +y).
3. Conserve x-momentum: the scattered photon has no x-component, so the electron's x-momentum is p_ex = 1.326 × 10⁻²³ kg·m/s.
4. Conserve y-momentum: total y-momentum is zero, so p_ey = −1.265 × 10⁻²³ kg·m/s (downward).
5. Magnitude: p_e = √(1.326² + 1.265²) × 10⁻²³ = 1.83 × 10⁻²³ kg·m/s.
6. Direction: tan α = 1.265 ÷ 1.326, so α = 43.6° below the +x axis.
7. Energy check: K_e = hc/λ − hc/λ′ = 1.84 × 10⁻¹⁶ J (1.15 keV). From the momentum, p_e²/(2m_e) = (1.832 × 10⁻²³)² ÷ (2 × 9.11 × 10⁻³¹) = 1.84 × 10⁻¹⁶ J.

**Interpretation.** The two values of K_e agree to about 0.1%. The tiny difference comes from relativity: the electron moves at about 7% of the speed of light, so ½mv² is very slightly off. The electron's momentum (1.83 × 10⁻²³) is larger than the incoming photon's (1.33 × 10⁻²³). That is not a contradiction: momentum is a vector, and the electron's downward component cancels the photon's upward component.

## Comparing scattering situations

Questions often ask you to compare without full calculation.

- **Two angles, same beam.** Larger θ gives larger Δλ, lower E′ and larger K_e.
- **Two beams, same angle.** The shift Δλ is the same. The beam with the shorter wavelength has more energy per photon and loses a larger fraction of it. For θ = 90°, a 20 pm photon loses about 11% of its energy, while an 80 pm photon loses about 3%.
- **Factor of change.** Going from θ = 90° to θ = 180° doubles Δλ, because 1 − cos θ goes from 1 to 2.

It also helps to compare this topic with the last one, because exam questions often mix them.

| | Photoelectric effect (15.5) | Compton scattering (15.6) |
|---|---|---|
| What happens to the photon | Absorbed completely | Survives with less energy, in a new direction |
| Electron | Bound in a material; needs φ to escape | Treated as free and at rest |
| Main equation | K_max = hf − φ | Δλ = (h/m_e c)(1 − cos θ) |
| Conservation laws used | Energy | Energy and momentum |
| Typical radiation | Visible or ultraviolet | X-rays |

## Common misconceptions

- **"The photon slows down."** It always travels at c in a vacuum. Lower energy means lower frequency and longer wavelength.
- **"A photon has no mass, so it has no momentum."** A photon has momentum p = h/λ. Using p = mv for a photon is wrong.
- **"The scattered photon has a shorter wavelength."** It has lost energy, so its wavelength is longer.
- **"Δλ is bigger for longer wavelengths."** Δλ depends only on θ. The *fractional* change is bigger for shorter wavelengths.
- **"The electron moves off in the same direction as the scattered photon."** The y-momentum must cancel, so the electron moves to the opposite side of the original line.
- **Confusing Compton scattering with the photoelectric effect.** In the photoelectric effect the photon is absorbed completely. In Compton scattering it survives with less energy.
- **Rounding E and E′ before subtracting.** The electron's energy is a small difference, so keep all figures until the end.

## Where this leads

Compton scattering completes the evidence that light behaves as particles with energy and momentum. Topic 15.7 turns to the nucleus: in [fission, fusion and nuclear decay](/advanced-course-resources/physics-2/15-7-fission-fusion-nuclear-decay-study-guide/), conservation laws again decide what can happen. Test yourself with the [practice questions](/advanced-course-resources/physics-2/15-6-compton-scattering-practice/), then use the [revision notes](/advanced-course-resources/physics-2/15-6-compton-scattering-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/15-6-compton-scattering-checklist/) to consolidate. For the photon model of absorption, look back at [the photoelectric effect](/advanced-course-resources/physics-2/15-5-photoelectric-effect-study-guide/).
