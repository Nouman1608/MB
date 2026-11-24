---
title: "Cambridge A Level Physics (9702): Production and use of X-rays"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 24.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-medical-physics"
    subtopic: "a-production-and-use-of-x-rays"
description: "A focused guide to 24.2 X-rays in Cambridge A Level Physics 9702: the X-ray tube, minimum wavelength, contrast, attenuation and how CT builds a 3D image."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **24.2 Production and use of X-rays** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Medical Physics study guide](/resources/a-physics-medical-physics/) introduces all of Topic 24; this page goes further into how an X-ray tube works, why there is a minimum wavelength, how contrast arises and can be improved, how to compare beams that pass along different paths through the body, and the stages of a CT scan. For quick recall use the [X-rays revision notes](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-revision-notes/), and for exam-style questions the [X-rays practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-practice/).

## What 24.2 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- explain that X-rays are produced by **electron bombardment of a metal target**, and calculate the **minimum wavelength** of X-rays produced from the accelerating p.d.
- understand the use of X-rays in imaging internal body structures, including an understanding of the term **contrast** in X-ray imaging
- recall and use **I = I₀e^(−μx)** for the attenuation of X-rays in matter
- understand that **computed tomography (CT)** scanning produces a 3D image by combining X-ray images of one section taken from different angles into a 2D image of that section, then repeating along an axis and combining the 2D images of many sections

## The X-ray tube

An X-ray tube is an evacuated glass or metal enclosure containing two electrodes.

1. **Cathode.** A heated filament releases electrons by thermionic emission. The filament current controls how many electrons are released per second, and so the **intensity** of the X-ray beam.
2. **Accelerating p.d.** A large p.d. V (tens of kilovolts up to more than 100 kV) between cathode and anode accelerates the electrons. Each electron gains kinetic energy eV.
3. **Target (anode).** The electrons strike a metal target, often tungsten. As they decelerate rapidly in the target, some of their kinetic energy is emitted as X-ray photons.
4. **Vacuum.** Prevents the electrons colliding with gas molecules on the way.

Only about 1 % of the electrons' kinetic energy becomes X-rays; the rest becomes thermal energy in the target. That is why the target metal must have a high melting point and the anode is cooled, often by rotating it so the beam does not strike one spot continuously.

**Tube current and power.** With a tube current of 5.0 mA, the number of electrons striking the target each second is 5.0 × 10⁻³ / 1.60 × 10⁻¹⁹ = 3.1 × 10¹⁶. At 80 kV the power delivered to the target is VI = 80 000 × 5.0 × 10⁻³ = 400 W, nearly all of it as heat.

## The minimum wavelength

An electron can lose its kinetic energy in one large step or several smaller ones, so the X-rays have a continuous range of photon energies. The **largest** photon energy occurs when an electron loses **all** its kinetic energy in a single interaction, producing one photon:

```
maximum photon energy = eV
hc / λ_min = eV        so        λ_min = hc / (eV)
```

Key consequences:

- λ_min depends only on the accelerating p.d., not on the target metal or the tube current.
- Doubling V halves λ_min.
- A higher p.d. produces more penetrating (**harder**) X-rays, with shorter wavelengths and higher photon energies.

## Worked example 1: minimum wavelength

An X-ray tube operates at 100 kV. Calculate the maximum photon energy and the minimum wavelength.

```
E_max = eV = 1.60 × 10⁻¹⁹ × 100 × 10³ = 1.60 × 10⁻¹⁴ J  (100 keV)
λ_min = hc / (eV) = (6.63 × 10⁻³⁴ × 3.00 × 10⁸) / 1.60 × 10⁻¹⁴
      = 1.24 × 10⁻¹¹ m
```

*Annotation.* "100 kV" must become 100 × 10³ V. The answer is of order 10⁻¹¹ m, which is a useful check: diagnostic X-rays have wavelengths around 10⁻¹¹ m.

## Attenuation in matter

As an X-ray beam passes through matter, photons are absorbed or scattered out of the beam, so its intensity falls exponentially:

```
I = I₀ e^(−μx)
```

μ is the **linear attenuation coefficient** (unit m⁻¹ when x is in metres). It depends on the material and on the photon energy. Bone has a much larger μ than soft tissue at diagnostic energies, mainly because it contains elements with higher proton numbers (such as calcium) and is denser.

## Contrast

An X-ray image is a shadow picture: the detector (or film) records the intensity that passes through the body. **Contrast** is the difference in brightness (degree of blackening) between neighbouring areas of the image. Good contrast lets a doctor tell structures apart.

Contrast is good when adjacent structures have **very different attenuation coefficients**, such as bone next to soft tissue. It is poor between two soft tissues, whose μ values are similar.

### Improving contrast

- **Contrast media**: a substance with a large attenuation coefficient is introduced into the body. A patient may swallow a barium compound to show the outline of the digestive tract, or have an iodine compound injected to show blood vessels.
- **Choice of p.d.**: lower-energy X-rays are attenuated more differently by different tissues, which can improve contrast between soft tissues; very high-energy X-rays pass through everything similarly. (The trade-off is that more low-energy radiation is absorbed by the patient.)

## Worked example 2: comparing two paths

Illustrative values: μ(soft tissue) = 20 m⁻¹, μ(bone) = 60 m⁻¹. Beam A passes through 8.0 cm of soft tissue only. Beam B passes through 6.0 cm of soft tissue and 2.0 cm of bone. Compare the transmitted intensities.

```
A: I/I₀ = e^(−20 × 0.080) = e^(−1.60) = 0.20
B: I/I₀ = e^(−20 × 0.060) × e^(−60 × 0.020) = e^(−1.20 − 1.20) = e^(−2.40) = 0.091
ratio A : B = 0.20 / 0.091 = 2.2
```

*Annotation.* For layers of different materials, **add the exponents** (or multiply the factors). Twice as much intensity reaches the detector behind path A, so the bone appears clearly as a lighter shadow: good contrast. Two soft tissues of 5.0 cm with μ = 20 m⁻¹ and 22 m⁻¹ transmit 0.37 and 0.33: barely distinguishable.

## Computed tomography (CT)

A single X-ray image flattens the whole body into one plane, so structures overlap. CT avoids this. Learn the stages in the syllabus order:

1. An X-ray tube and a ring of detectors **rotate around the patient**, taking many X-ray images of the **same thin section** (slice) from **different angles**.
2. A computer **combines** these images to produce a **2D image of that section**.
3. The patient is moved along an **axis** through the scanner and the process is **repeated** for the next section, and so on.
4. The 2D images of **multiple sections are combined** to build a **3D image** of the internal structure, which can be viewed from any angle or as any chosen slice.

As background beyond the syllabus outcome, a CT scan gives a much higher radiation dose than a single X-ray image, because the section is exposed from many directions.

## Common mistakes

- **Saying X-rays are produced when electrons "hit the target and bounce off"**. They are produced as the electrons decelerate in the target.
- **Using the wrong energy** for λ_min: it is eV, the kinetic energy of one electron, not the power of the tube.
- **Claiming λ_min depends on the target metal** or the current.
- **Defining contrast as "how sharp the image is"**. Sharpness and contrast are different; contrast is the difference in blackening between regions.
- **Multiplying μ values** for two layers instead of adding μx terms.
- **Describing CT as "a 3D X-ray"** without the stages: many angles → 2D section → repeat along axis → 3D.

## Exam technique for the command words

- **Explain** (how X-rays are produced): heated cathode, electrons accelerated by p.d., strike metal target, decelerate, kinetic energy emitted as X-ray photons; most becomes thermal energy.
- **Explain** (why there is a minimum wavelength): an electron transfers at most all its kinetic energy eV to one photon.
- **Calculate** λ_min: convert kV to V, then λ_min = hc/(eV).
- **State** (what is meant by contrast): the difference in degree of blackening between areas of the image.
- **Suggest** (how contrast may be improved): contrast medium with large μ, or suitable choice of X-ray energy.
- **Describe** (CT scanning): the four stages above, in order.

## More resources on this topic

- [Medical Physics study guide](/resources/a-physics-medical-physics/) — the whole of Topic 24
- [X-rays revision notes](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-revision-notes/)
- [X-rays practice questions](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-x-rays-practice/)
- [Production and use of ultrasound](/resources/cambridge-a-level-physics-9702-a-production-and-use-of-ultrasound/) — subtopic 24.1
- [PET scanning](/resources/cambridge-a-level-physics-9702-a-pet-scanning/) — subtopic 24.3
- [Quantum Physics](/resources/a-physics-quantum-physics/) — photon energy E = hf = hc/λ

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
