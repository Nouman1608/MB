---
title: "OCR A Level Physics A: X-rays, attenuation and CAT scanning (H556)"
seoTitle: "OCR A Level Physics X-rays and CAT Scanning Guide"
resourceType: "study-guides"
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
description: "A study guide to X-ray tubes, photon production, attenuation, contrast media and CAT scanning for OCR A Level Physics A (H556), with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---
This guide covers section 6.5.1 (Using X-rays), statements (a) to (g), of the OCR Advanced GCE in Physics A specification (H556), Version 3.0 (March 2026), for first assessment in 2017. H556 is the full A level. The other parts of 6.5 (tracers, the gamma camera, PET and ultrasound) are not covered here.

See the [OCR A Level Physics hub](/boards/ocr/a-level/physics/) and the [printable checklist](/checklists/ocr/a-level/physics/). Pair this page with the [revision notes](/resources/ocr-a-level-physics-x-rays-attenuation-and-cat-scanning-revision-notes/) and the [practice questions](/resources/ocr-a-level-physics-x-rays-attenuation-and-cat-scanning-practice/), and test yourself with the [free diagnostics](/diagnostics/). Photon energy and the photoelectric effect at a metal surface are in [Photons, the photoelectric effect and wave-particle duality](/resources/ocr-a-level-physics-photons-photoelectric-effect-and-wave-particle-duality/).

Constants used here: e = 1.60 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m s⁻¹, electron rest energy 0.511 MeV.

## What you must be able to do

| Statement | Content |
|---|---|
| 6.5.1(a) | Basic structure of an X-ray tube: heater (cathode), anode, target metal, high voltage supply |
| 6.5.1(b) | How X-ray photons are produced in the tube |
| 6.5.1(c) | Attenuation mechanisms: simple scatter, photoelectric effect, Compton effect, pair production |
| 6.5.1(d) | Attenuation of X-rays, I = I₀e^(−μx), with μ the attenuation (absorption) coefficient |
| 6.5.1(e) | X-ray imaging with contrast media: barium and iodine |
| 6.5.1(f) | CAT scanning: rotating X-ray tube, thin fan-shaped beam, ring of detectors, computer software and display |
| 6.5.1(g) | Advantages of a CAT scan over an X-ray image |

The specification links (d) to exponential relationships and logarithmic plots (M0.5 and M3.11).

## 6.5.1(a) The structure of an X-ray tube

An X-ray tube is an evacuated glass or metal envelope. The vacuum stops electrons colliding with gas molecules.

- **Heater (cathode).** A hot tungsten filament releases electrons by thermionic emission. A larger heater current gives more electrons per second, so a larger tube current and a more intense beam.
- **High voltage supply.** A p.d. of tens of kilovolts between cathode and anode accelerates the electrons towards the anode. The p.d. sets the maximum energy each electron can transfer to a photon.
- **Anode and target metal.** The electrons strike a small piece of target metal, usually tungsten, set into a copper anode. Tungsten has a high atomic number and a very high melting point. Copper conducts heat away.

Almost all of the electrons' energy becomes thermal energy in the target. Only about 1% emerges as X-rays. Tubes therefore use cooling, such as oil, fins or a rotating anode. The housing is lined with lead, with a window where the beam leaves.

## 6.5.1(b) Producing X-ray photons

An electron accelerated through a p.d. V gains kinetic energy eV. Two processes turn some of this into photons.

**Braking radiation (continuous spectrum).** An electron is decelerated as it passes close to a target nucleus, and the energy it loses is emitted as a photon. The electron can lose any fraction of its energy, so photon energies form a continuous spread. The most energetic photon comes from an electron that gives up all its energy in one go:

hf_max = eV, so λ_min = hc/(eV)

The spectrum has a sharp cut-off at this shortest wavelength. Raising V lowers λ_min and gives more penetrating photons.

**Characteristic lines.** A fast electron can eject an inner-shell electron from a target atom. An electron from a higher energy level drops into the vacancy and emits a photon whose energy equals the difference between the two levels. These energies depend only on the target element, so they appear as sharp peaks on the continuous spectrum. They only appear if eV is greater than the energy needed to remove that inner electron.

### Worked example 1: tube voltage and power

A tube operates at 85 kV with a tube current of 12 mA. Find (a) the maximum photon energy, (b) the shortest wavelength, (c) the input power and the number of electrons striking the target each second.

```
(a) E_max = eV = 1.60e-19 × 85 000 = 1.36 × 10^-14 J (85 keV)
(b) λ_min = hc/E = (6.63e-34 × 3.00e8)/1.36e-14 = 1.46 × 10^-11 m
(c) P = VI = 85 000 × 0.012 = 1.0 × 10^3 W (1020 W)
    n = I/e = 0.012/1.60e-19 = 7.5 × 10^16 electrons per second
```

If 1% of the power becomes X-rays, about 10 W is radiated and about 1010 W is thermal.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--04-aphy-medical-xray-production.webp" width="900" height="1210" alt="A heated filament releases electrons that a high voltage accelerates onto a tungsten target in a copper anode inside a lead-lined, evacuated tube. The spectrum has a sharp cut-off at the shortest wavelength hc/eV: 1.55 and 3.11 times 10 to the minus 11 m for 80 kV and 40 kV. Narrow characteristic lines depend on the target and appear only if eV is large enough." loading="lazy">
  <figcaption>Tube voltage sets the shortest wavelength (maximum photon energy); tube current sets the intensity.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--07-aphy-medical-gamma-camera.webp" width="900" height="990" alt="Gamma photons from tracer in an organ pass through a lead collimator that only lets photons travelling straight along a hole through; photons at an angle are absorbed. Each photon makes a flash in the crystal, the photomultiplier tubes give pulses (largest from the nearest tube) and the computer uses them to add a count at that place in the image." loading="lazy">
  <figcaption>A gamma camera forms an image of tracer distribution, one counted photon at a time.</figcaption>
</figure>


## 6.5.1(c) Attenuation mechanisms

**Attenuation** is the loss of intensity of a beam as it passes through matter. The photons are either absorbed or deflected out of the beam. Four mechanisms are named in the specification.

| Mechanism | What happens | When it matters |
|---|---|---|
| Simple scatter | A low-energy photon is deflected by an atom. It keeps its energy, and no ionisation occurs. | Low photon energies |
| Photoelectric effect | The photon is absorbed completely by an atom and an inner-shell electron is ejected. The photon's energy goes into freeing the electron and into its kinetic energy. | Low to moderate energies. Probability rises steeply with atomic number |
| Compton effect | The photon collides with a loosely bound outer electron. The electron is ejected and the photon continues in a new direction with less energy. | Moderate to high energies. Depends mainly on the number of electrons per unit volume |
| Pair production | A photon passing near a nucleus becomes an electron and a positron. | Only above a threshold of about 1.02 MeV |

Here the ejected electron comes from an inner shell of an atom in the body. The photoelectric effect is the main reason bone (calcium, atomic number 20) shows up against soft tissue (mainly hydrogen, carbon and oxygen): it absorbs far more strongly.

### The pair production threshold

The photon must supply the rest energy of both particles. A positron has the same rest energy as an electron, 0.511 MeV.

```
threshold = 2 × 0.511 MeV = 1.02 MeV
          = 1.022e6 × 1.60e-19 = 1.64 × 10^-13 J
λ at threshold = hc/E = 1.22 × 10^-12 m
```

Diagnostic tube voltages are well below this, so pair production does not contribute to a normal X-ray image. 

## 6.5.1(d) The attenuation law

For a narrow beam of single-energy photons passing through a uniform material, each thin layer removes the same fraction of the photons that reach it. This gives exponential decay of intensity with thickness:

I = I₀e^(−μx)

I₀ is the incident intensity, I the transmitted intensity, x the thickness and μ the attenuation (absorption) coefficient. μ has units of m⁻¹ (or cm⁻¹, matching x). It depends on the material and on the photon energy. A large μ means strong attenuation.

The **half-value thickness** x½ is the thickness that halves the intensity. Setting I = I₀/2 gives ln 2 = μx½, so x½ = ln 2/μ. Every extra x½ halves the intensity again.

### Worked example 2: muscle

Muscle has μ = 0.22 cm⁻¹ for a beam of a certain energy. Find the fraction transmitted by 6.0 cm, the half-value thickness, and the thickness that reduces the intensity to 5.0%.

```
I/I0 = e^(-0.22 × 6.0) = e^(-1.32) = 0.267 (26.7%)
x½ = ln 2 / 0.22 = 3.15 cm
5.0%: I/I0 = 0.050, so μx = ln 20 = 3.00
x = 3.00 / 0.22 = 13.6 cm
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--01-aphy-medical-ultrasound-echo.webp" width="900" height="970" alt="A probe sends a pulse down through fat, muscle and bone; echoes from the fat-muscle and muscle-bone boundaries return after 26 and 78 microseconds. Because the pulse goes there and back, the bone surface is at d = ct/2 = 6.0 cm. The muscle-bone echo is far stronger (41 percent) than the fat-muscle one (1.4 percent)." loading="lazy">
  <figcaption>Pulse-echo ultrasound: echo time gives depth through d = ct/2, and echo strength depends on the impedance change at each boundary.</figcaption>
</figure>


### Worked example 3: a path through bone and tissue

A 9.0 cm path contains 1.8 cm of bone, μ = 0.58 cm⁻¹, and 7.2 cm of soft tissue, μ = 0.21 cm⁻¹. Compare with a 9.0 cm path of soft tissue only.

Exponents add for layers in series, because the factors multiply.

```
With bone:  I/I0 = e^-(0.21 × 7.2 + 0.58 × 1.8) = e^-(1.512 + 1.044) = e^-2.556 = 0.0776
All tissue: I/I0 = e^-(0.21 × 9.0) = e^-1.89 = 0.151
Ratio = 0.0776/0.151 = 0.514
```

The beam behind the bone is about half as intense as the beam beside it. This difference is the **contrast**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--02-aphy-medical-ultrasound-gel.webp" width="900" height="840" alt="Without gel an air gap (Z about 408) lies against skin (Z 1.60 million) and 99.9 percent of the ultrasound is reflected. Gel with an impedance close to skin (1.52 million) reflects only 0.07 percent, so nearly all the beam enters the body. This is impedance matching, not lubrication." loading="lazy">
  <figcaption>Gel matches the impedance of the skin so that almost none of the ultrasound is reflected at the surface.</figcaption>
</figure>


### Linearising the law

Taking natural logarithms gives ln I = ln I₀ − μx. A plot of ln I against x is a straight line with gradient −μ and intercept ln I₀. This is the method for finding μ from measured data.

### Worked example 4: finding μ from data

Intensities (arbitrary units) through a slab:

| x / cm | 0 | 2 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|
| I | 100 | 62.5 | 39.1 | 24.4 | 15.3 | 9.5 |
| ln I | 4.605 | 4.135 | 3.666 | 3.195 | 2.728 | 2.251 |

```
gradient = (2.251 - 4.605)/(10 - 0) = -0.235 cm^-1
μ = 0.235 cm^-1
```

The points lie on a straight line, which confirms the exponential law. Use a large triangle on a best-fit line.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--05-aphy-medical-attenuation-contrast.webp" width="900" height="1060" alt="X-ray intensity falls exponentially, I = I0 e^(-mu x), with a half-value thickness ln2/mu (3.3 cm for mu = 0.21 per cm). A beam crossing a 1.8 cm bone block ends at 7.8 percent of its original intensity against 15.1 percent through tissue alone, about half. That difference is the image contrast." loading="lazy">
  <figcaption>Bone has a larger attenuation coefficient than soft tissue, so the beam behind it is weaker: this is image contrast.</figcaption>
</figure>


## 6.5.1(e) Contrast media

Soft organs have similar μ, so a plain image shows them poorly. A **contrast medium** is a substance with a high atomic number that absorbs X-rays strongly and so outlines the organ it fills.

- **Barium.** A barium sulfate suspension is swallowed (a barium meal) or given as an enema to outline the gut. Barium has atomic number 56. Barium sulfate is insoluble, so it is not absorbed into the body.
- **Iodine.** Iodine compounds (atomic number 53) are injected into the blood to show blood vessels, or to show the kidneys and urinary tract.

Their atoms have many inner-shell electrons, so the photoelectric effect removes many photons. Less radiation reaches the detector where the medium sits, and the organ shows with sharp edges.

### Worked example 5: an artery with and without contrast

A vessel 0.60 cm across has blood of μ = 0.21 cm⁻¹. With an iodine compound its effective μ is 1.9 cm⁻¹.

```
Blood alone: e^(-0.21 × 0.60) = 0.882
With iodine: e^(-1.9 × 0.60)  = 0.320
Ratio = 0.320/0.882 = 0.363 = e^(-(1.9 - 0.21) × 0.60)
```

The vessel now transmits only about a third as much as before, so it stands out. Some patients react to iodine compounds, so the diagnostic benefit must justify their use.

## 6.5.1(f) CAT scanning

Computerised axial tomography builds a cross-sectional image of a slice of the body from many X-ray measurements.

1. A **rotating X-ray tube** produces a **thin fan-shaped beam** that passes through the slice.
2. A **ring of detectors** records the transmitted intensity at many positions around the patient.
3. The tube rotates so each part of the slice is crossed by beams from many angles.
4. **Computer software** uses all the readings to find the attenuation of each small volume (voxel) in the slice.
5. A **display** shows the slice as a grey-scale image, with each pixel's brightness set by the attenuation at that voxel.

The couch moves the patient through the ring, so a series of slices builds a 3D picture.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--08-aphy-medical-pet.webp" width="900" height="1030" alt="A positron from a tracer such as fluorine-18 annihilates with an electron to give two 0.511 MeV gamma photons travelling in opposite directions. A ring of detectors records photons that arrive together; the source lies on the line joining the two detectors. Lines from many events cross at the tracer-rich tissue." loading="lazy">
  <figcaption>PET detects pairs of back-to-back photons, so each coincidence marks a line through the source.</figcaption>
</figure>


## 6.5.1(g) Advantages of CAT over an X-ray image

| Plain X-ray image | CAT scan |
|---|---|
| One flat image: every structure along the beam is superimposed | Cross-sectional slices: no overlapping structures |
| Soft tissues with similar μ are hard to tell apart | Small differences in attenuation are shown, so soft tissue detail is better |
| Depth and 3D position are hard to judge | Slices can be combined into a 3D view and measured |

A CAT scan usually gives a larger dose of ionising radiation than a plain image, and scanners are expensive. Judging whether the benefit justifies the dose for a patient is the reasoning HSW9, 10 and 12 expect.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-medical-physics--06-aphy-medical-ct-scanner.webp" width="900" height="1110" alt="A CT scanner rotates an X-ray tube so that a thin fan beam crosses one slice of the body from many angles, recorded by a ring of detectors. A computer combines the readings into a grey-scale image whose pixel brightness shows how strongly each small volume absorbs. Moving the couch gives a series of slices that build a 3-D image." loading="lazy">
  <figcaption>CT combines many angled X-ray views of each slice, then stacks slices into a 3-D image.</figcaption>
</figure>


## Common errors

- Saying the tube current sets photon energy. Tube voltage sets the maximum energy. Tube current sets intensity.
- Using μ in cm⁻¹ with x in metres.
- Adding intensities instead of adding exponents for layers.
- Describing Compton scattering as absorption. The photon survives.
- Forgetting that a CAT scan needs a computer: the detectors alone do not form the image.

## Official syllabus

OCR Advanced GCE in Physics A (H556), Version 3.0 (March 2026), for first assessment in 2017, section 6.5.1, published by OCR.
