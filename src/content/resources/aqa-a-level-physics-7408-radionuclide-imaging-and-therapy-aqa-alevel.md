---
title: "AQA A-Level Physics (7408): Radionuclide imaging and therapy"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 10.6
syllabusTopics:
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "radionuclide-imaging-and-therapy-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.10.6 in depth: tracers, the Mo-Tc generator, PET, effective half-life, the gamma camera, radiotherapy and comparisons."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.10.6 Radionuclide imaging and therapy** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Medical physics option assessed in Paper 3 Section B. It has six content statements: 3.10.6.1 imaging techniques, 3.10.6.2 half-life, 3.10.6.3 the gamma camera, 3.10.6.4 use of high-energy X-rays, 3.10.6.5 use of radioactive implants and 3.10.6.6 imaging comparisons.

The option overview is in the [Medical physics study guide](/resources/aqa-a-level-physics-medical-physics/). For recall use the [radionuclide imaging and therapy revision notes](/resources/aqa-a-level-physics-7408-radionuclide-imaging-and-therapy-aqa-alevel-revision-notes/), and test yourself with the [radionuclide imaging and therapy practice questions](/resources/aqa-a-level-physics-7408-radionuclide-imaging-and-therapy-aqa-alevel-practice/). Decay constant and activity are covered in [Nuclear physics](/resources/aqa-a-level-physics-nuclear-physics/).

## 3.10.6.1 Imaging techniques

### What makes a good tracer

A **tracer** is a radioactive isotope attached (labelled) to a compound that the body carries to, or concentrates in, the organ of interest. A detector outside the body maps where the radiation comes from, showing how the organ is **functioning**, not just its structure. The specification names four properties to judge:

1. **Radiation emitted.** It should emit **gamma** rays, which pass out of the body to the detector. Alpha and beta particles are absorbed within the body, adding dose without contributing to the image.
2. **Half-life.** Long enough for the tracer to be prepared, reach the organ and be imaged (hours), but short enough that the activity, and so the patient's dose, falls quickly afterwards.
3. **Gamma energy.** High enough to escape the body without much absorption, but low enough to be stopped and detected efficiently in the camera's crystal and blocked by the lead collimator. Around 100 to 200 keV suits a gamma camera.
4. **Labelling.** It must bond readily to a compound with an affinity for the target organ.

| Isotope | Radiation | Half-life (approx.) | Gamma energy (approx.) | Typical use |
|---|---|---|---|---|
| Technetium-99m | Gamma only | 6 hours | 140 keV | Labels many compounds; bone, heart, kidney and other scans |
| Iodine-131 | Beta-minus and gamma | 8 days | 364 keV | Thyroid, which takes up iodine |
| Indium-111 | Gamma (decays by electron capture) | 2.8 days | 171 and 245 keV | Labels compounds such as white blood cells for slower processes |

The "m" in technetium-99m means **metastable**: the nucleus is in an excited state and emits only a gamma photon as it falls to the ground state of technetium-99. Because no particle is emitted, Tc-99m gives an image with a small dose, which is why it is the most widely used tracer. Iodine-131's beta emission adds dose, a disadvantage for imaging. Indium-111's longer half-life suits processes that take days.

### The molybdenum-technetium generator

A 6-hour half-life means Tc-99m cannot be stored or delivered from far away. Instead, hospitals receive a **generator** containing molybdenum-99 (half-life about 66 hours) bound to a column. Mo-99 decays by beta-minus emission to Tc-99m. When a dose is needed, saline is passed through the column and **washes out (elutes)** the technetium, which is chemically different and is not held, leaving the molybdenum behind. Because the parent has a longer half-life, Tc-99m keeps being produced, and the generator supplies tracer on site for about a week before it is replaced.

**Worked example 1.** What fraction of the Mo-99 activity remains after 7.0 days?

```
t = 7.0 × 24 = 168 h;  n = 168/66 = 2.55 half-lives
fraction = (1/2)^2.55 = 0.17
```

### PET scans

In **positron emission tomography**, the tracer contains a positron-emitting isotope; a common choice is fluorine-18 (half-life about 110 minutes) in a glucose-like compound that collects in active tissue such as tumours. Each positron travels a very short distance and **annihilates** with an electron. The pair's rest energy becomes **two gamma photons**, each of energy m_ec², travelling in **opposite directions** so that momentum is conserved.

```
m_ec² = 9.11 × 10⁻³¹ × (3.00 × 10⁸)² = 8.20 × 10⁻¹⁴ J ≈ 0.51 MeV per photon
```

A ring of detectors surrounds the patient. When two detectors register photons **at the same time** (in coincidence), the annihilation happened on the straight line joining them. Many such lines are combined by a computer into a three-dimensional image of where the tracer is concentrated.

## 3.10.6.2 Half-life

- **Physical half-life T_P**: time for half the radioactive nuclei to decay.
- **Biological half-life T_B**: time for half of the substance to be removed from the body by biological processes.
- **Effective half-life T_E**: time for the activity in the body to halve, from both processes together.

**1/T_E = 1/T_B + 1/T_P**. T_E is always shorter than either half-life alone.

**Worked example 2.** A Tc-99m compound has T_P = 6.0 h and T_B = 24 h (illustrative). A patient receives 500 MBq. Find the activity in the body after 12 h.

```
1/T_E = 1/24 + 1/6.0 = 0.208 h⁻¹, so T_E = 4.8 h
activity = 500 × (1/2)^(12/4.8) = 500 × 0.177 = 88 MBq
```

A common error is to use T_P alone, which gives 125 MBq.

**Worked example 3.** How many Tc-99m nuclei give an activity of 400 MBq?

```
λ = ln 2/(6.0 × 3600) = 3.21 × 10⁻⁵ s⁻¹
N = A/λ = 4.0 × 10⁸/3.21 × 10⁻⁵ = 1.2 × 10¹³
```

## 3.10.6.3 The gamma camera and photomultiplier tube

From front to back:

- **Lead collimator**: a thick lead plate with many parallel holes. Only photons travelling along the holes reach the crystal, so each point on the crystal corresponds to a point in the patient. Without it, photons from all directions would blur the image. Longer, narrower holes improve resolution but let through fewer photons.
- **Scintillator crystal** (typically sodium iodide): each gamma photon absorbed produces a flash of light.
- **Photomultiplier tubes** (an array behind the crystal): light releases electrons from a **photocathode** by the photoelectric effect. The electrons are accelerated to the first **dynode**, at a higher potential, where each releases several secondary electrons. This repeats at a chain of dynodes at increasing potentials, then the electrons reach the anode as a measurable pulse.
- **Position logic and computer**: the flash is shared between neighbouring tubes; comparing their pulse sizes locates it. Thousands of located flashes build the image.

**Worked example 4.** A tube has 10 dynodes, each releasing 4 electrons for every electron that strikes it. Overall gain = 4¹⁰ ≈ 1.0 × 10⁶, so one photoelectron becomes about a million electrons.

## 3.10.6.4 and 3.10.6.5 Therapy

**External treatment with high-energy X-rays.** A beam of high-energy X-rays (megavolt energies) is aimed at the tumour to kill its cells. To **limit exposure to healthy cells**:

- several beams from **different directions** (or a source rotating about the patient) all pass through the tumour, so it receives the sum of the doses while each region of healthy tissue receives only one beam's dose;
- the beam is **shaped** to the outline of the tumour, and shielding protects sensitive organs;
- the total dose is split into **several sessions**, giving healthy tissue time to recover;
- the patient is positioned accurately and kept still.

**Internal treatment with beta-emitting implants.** A small sealed source that emits beta particles is placed in or next to the tumour. Beta particles have a **short range in tissue** (millimetres), so they deliver a high dose to the tumour and very little to tissue further away. The implant may be removed after a set time, or its half-life chosen so the activity falls away.

## 3.10.6.6 Imaging comparisons

Questions are limited to **resolution, convenience and safety**.

| Method | Resolution | Convenience | Safety |
|---|---|---|---|
| Gamma camera | Low; shows function | Tracer must be prepared and given; scan takes time | Ionising dose from tracer; patient briefly radioactive |
| PET | Better than gamma camera; shows function | Needs a nearby cyclotron for short-lived tracers; expensive | Ionising dose |
| CT | High, 3D structure | Fast but expensive | High X-ray dose |
| MR | High, excellent soft tissue | Expensive, slow, confined | Non-ionising; metal implants a hazard |
| Ultrasound | Lower | Cheap, portable, live | Non-ionising |

## Common mistakes

- Saying a tracer should have a long half-life "so it lasts".
- Adding half-lives instead of their reciprocals.
- Describing the collimator as focusing photons; it only absorbs photons not travelling along its holes.
- Saying PET photons are emitted by the tracer; they come from annihilation.
- Forgetting that beta's short range is the reason implants work.

## Exam technique

- **Evaluate** a tracer against all four named properties.
- **Explain** the generator by linking the 66-hour parent to a supply of the 6-hour daughter.
- **Describe** the gamma camera in order: collimator, crystal, photomultipliers, computer.
- **Calculate** effective half-life first, then use it in (1/2)^(t/T_E).

Next, try the [radionuclide imaging and therapy practice questions](/resources/aqa-a-level-physics-7408-radionuclide-imaging-and-therapy-aqa-alevel-practice/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.6 Radionuclide imaging and therapy (A-level only), content statements 3.10.6.1 to 3.10.6.6.
