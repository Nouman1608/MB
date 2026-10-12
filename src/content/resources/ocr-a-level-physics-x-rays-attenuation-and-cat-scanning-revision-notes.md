---
title: "OCR A Level Physics A: X-rays, attenuation and CAT scanning (H556) -- Revision Notes"
seoTitle: "OCR A Level Physics X-rays and CT Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "X-rays, attenuation and CAT scanning"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H556"]
syllabusSeries: "Version 3.0 (March 2026), for first assessment in 2017"
order: 73
syllabusTopics:
  - qualification: "a-level"
    topic: "particles-and-medical-physics"
    subtopic: "medical-imaging-ocr-alevel"
description: "Condensed revision notes on X-ray tubes, attenuation, contrast media and CAT scanning for OCR A Level Physics A (H556), with a self-test."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
These notes condense section 6.5.1 (Using X-rays), statements (a) to (g), of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. For full explanations use the [study guide](/resources/ocr-a-level-physics-x-rays-attenuation-and-cat-scanning/), then test yourself with the [practice questions](/resources/ocr-a-level-physics-x-rays-attenuation-and-cat-scanning-practice/).

Related pages: the [OCR A Level Physics hub](/boards/ocr/a-level/physics/), the [printable checklist](/checklists/ocr/a-level/physics/) and the [free diagnostics](/diagnostics/). Photon energy is in [Photons, the photoelectric effect and wave-particle duality](/resources/ocr-a-level-physics-photons-photoelectric-effect-and-wave-particle-duality/).

Constants: e = 1.60 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹.

## 6.5.1(a) and (b): the tube and photon production

| Part | Job |
|---|---|
| Heater (cathode) | Hot filament releases electrons (thermionic emission). Heater current controls the number of electrons, so the tube current and beam intensity |
| High voltage supply | Accelerates electrons from cathode to anode. Sets the maximum photon energy |
| Target metal | Tungsten: high atomic number, high melting point. Electrons stop here and X-rays are emitted |
| Anode | Holds the target, usually copper, which conducts heat away. Often rotates |
| Evacuated envelope | No gas for electrons to hit |

Electron kinetic energy gained: eV. About 1% becomes X-rays and the rest is heat.

**Two ways photons are made**

- **Braking radiation.** Electron decelerated near a nucleus. Any energy loss up to eV is possible, so the spectrum is continuous. Sharp cut-off at λ_min = hc/(eV).
- **Characteristic lines.** An inner-shell electron is knocked out, an outer electron falls in and a photon of energy equal to the level difference is emitted. Sharp peaks. Fixed by the target element, not by V.

**Sketching the spectrum in words:** intensity against wavelength rises from zero at λ_min to a broad maximum and then falls slowly. Narrow spikes from the characteristic lines sit on top. Raising V moves λ_min to a shorter wavelength. Raising the tube current scales the whole curve up without moving λ_min.

Tube voltage: maximum photon energy and penetration. Tube current: intensity.

### Method: maximum photon energy and wavelength

1. E_max = eV in joules, with V in volts.
2. λ_min = hc/E_max.
3. Convert to keV by dividing by 1.60 × 10⁻¹⁶ J per keV (or just V/1000).

Reminder: at 120 kV, E_max = 1.60 × 10⁻¹⁹ × 120 000 = 1.92 × 10⁻¹⁴ J. λ_min = (6.63 × 10⁻³⁴ × 3.00 × 10⁸)/(1.92 × 10⁻¹⁴) = 1.04 × 10⁻¹¹ m.

Reminder: power in = VI. Electrons per second = I/e.

## 6.5.1(c): attenuation mechanisms

| Mechanism | Photon fate | Electron fate | Key facts |
|---|---|---|---|
| Simple scatter | Changes direction, same energy | Atom not ionised | Low photon energies |
| Photoelectric effect | Absorbed completely | Inner-shell electron ejected | Probability rises steeply with atomic number and falls as photon energy rises. Gives bone-tissue contrast |
| Compton effect | Scattered with reduced energy | Loosely bound outer electron ejected | Depends mainly on electron density |
| Pair production | Disappears | Electron and positron created | Photon energy at least 2 × 0.511 MeV = 1.02 MeV, near a nucleus |

Pair production check: the electron rest energy is 0.511 MeV, so the threshold is 1.022 MeV, which is 1.64 × 10⁻¹³ J.

**Must-know distinctions**

- Photoelectric: photon gone, inner electron out. Compton: photon survives with less energy, outer electron out.
- Simple scatter changes only direction. Compton changes direction and energy.
- Pair production needs a threshold. The others do not.

## 6.5.1(d): the attenuation law

| Quantity | Formula |
|---|---|
| Transmitted intensity | I = I₀e^(−μx) |
| Half-value thickness | x½ = ln 2/μ |
| Layers in series | I = I₀e^(−(μ₁x₁ + μ₂x₂ + ...)) |
| Linear form | ln I = ln I₀ − μx, gradient = −μ |

μ is the attenuation (absorption) coefficient: unit m⁻¹ (or cm⁻¹ with x in cm). It depends on the material and the photon energy.

### Method: finding μ from two readings

1. Divide: I/I₀.
2. Take natural logs: ln(I/I₀) = −μx.
3. μ = −ln(I/I₀)/x. Check the sign: μ must be positive.

Reminder: 25% passes through 4.0 cm, so μ = ln 4/4.0 = 0.347 cm⁻¹. At 6.0 cm: e^(−0.347 × 6.0) = 0.125. That is three half-value thicknesses, since x½ = 2.0 cm and 1/2³ = 0.125.

Reminder: x½ = 2.5 cm gives μ = ln 2/2.5 = 0.277 cm⁻¹. Through 9.0 cm: 2^(−9.0/2.5) = 0.082, which is 8.2%.

### Method: layers of different material

1. Work out μx for each layer.
2. Add the exponents.
3. I/I₀ = e raised to minus the total.

Reminder: 2.0 cm of tissue (μ = 0.20 cm⁻¹) then 1.5 cm of bone (μ = 0.60 cm⁻¹). Total exponent = 0.40 + 0.90 = 1.30, so I/I₀ = e^(−1.30) = 0.27. The same 3.5 cm of tissue alone gives e^(−0.70) = 0.50, so the bone path transmits e^(−0.60), about 0.55, of the tissue-only intensity. That ratio is the contrast.

### Method: graph of ln I against x

1. Calculate ln I for every reading.
2. Plot ln I (y-axis) against x.
3. Draw a best-fit straight line.
4. Large gradient triangle. μ = −gradient.
5. A straight line confirms the exponential law.

## 6.5.1(e): contrast media

| Medium | Atomic number | Use | Delivery |
|---|---|---|---|
| Barium (barium sulfate) | 56 | Outlines the gut | Swallowed or by enema |
| Iodine compounds | 53 | Blood vessels, kidneys and urinary tract | Injected |

Why they work: high atomic number, so strong absorption by the photoelectric effect. The organ then appears with a different intensity from its surroundings. Soft tissues alone have similar μ and low contrast.

Safety point: barium sulfate is insoluble and stays in the gut. Some patients react to iodine compounds. Weigh benefit against risk.

## 6.5.1(f): CAT scanning

| Component | Role |
|---|---|
| Rotating X-ray tube | Beam crosses the slice from many angles |
| Thin fan-shaped beam | Defines one slice and keeps scatter low |
| Ring of detectors | Records transmitted intensity at many positions |
| Computer software | Calculates attenuation of each voxel from all the readings |
| Display | Grey-scale cross-sectional image |

Why the computer is essential: no single detector reading tells you where along the beam the attenuation happened. Only by combining readings from many angles can the software assign an attenuation value to each voxel.

Order to quote: tube rotates, detectors record, computer reconstructs, display shows. The couch moves the patient through so slices can be stacked into a 3D view.

## 6.5.1(g): CAT scan against X-ray image

- No overlapping structures: slices, not one flat shadow.
- Better contrast between soft tissues.
- Position, size and depth can be measured, and 3D views built.
- Against: higher dose of ionising radiation, expensive equipment, limited availability.

## Quick self-test

1. State what the high voltage supply does in an X-ray tube.
2. Why is the tube evacuated?
3. Calculate the shortest wavelength emitted at 100 kV.
4. Name the process in which a photon is absorbed and an inner-shell electron is ejected.
5. In the Compton effect, what happens to the photon?
6. Why does pair production not occur in diagnostic X-ray imaging?
7. 100 units of intensity fall to 37.0 over 4.4 cm. Find μ.
8. A material has x½ = 2.5 cm. What fraction passes through 5.0 cm?
9. Why is barium suited to imaging the gut?
10. Give two advantages of a CAT scan over an X-ray image.
11. What is the gradient of a graph of ln I against x?

### Answers

1. It accelerates electrons from the cathode to the anode, giving each electron kinetic energy eV and setting the maximum photon energy.
2. So electrons do not collide with gas molecules on their way to the target.
3. E = 1.60 × 10⁻¹⁹ × 100 000 = 1.60 × 10⁻¹⁴ J. λ = (6.63 × 10⁻³⁴ × 3.00 × 10⁸)/(1.60 × 10⁻¹⁴) = 1.24 × 10⁻¹¹ m.
4. The photoelectric effect.
5. It scatters with reduced energy and a new direction, and an outer electron is ejected.
6. The photon energy would need to be at least 1.02 MeV, far above diagnostic energies.
7. μ = ln(100/37.0)/4.4 = 0.226 cm⁻¹.
8. 5.0 cm is two half-value thicknesses, so (1/2)² = 0.25.
9. High atomic number, so it absorbs strongly, and the insoluble sulfate is not absorbed into the body.
10. Any two of: no overlapping structures, better soft tissue contrast, 3D views, measurement of position and size.
11. −μ.

## Where marks are usually lost

- Saying the heater current sets photon energy. It sets intensity.
- Leaving a numerical answer in joules when the question asks for keV, or the reverse.
- Using μ in cm⁻¹ with a thickness in metres.
- Adding intensities for two layers instead of adding μx terms.
- Writing that Compton scattering absorbs the photon.
- Describing contrast media without linking to high atomic number and strong absorption.
- Listing CAT components without saying what each one does.
- Giving a one-sided answer to a question that asks you to weigh benefit against risk.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), for first assessment in 2017, section 6.5.1, published by OCR.
