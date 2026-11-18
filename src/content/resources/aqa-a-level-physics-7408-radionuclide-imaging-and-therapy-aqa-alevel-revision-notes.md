---
title: "AQA A-Level Physics (7408): Radionuclide imaging and therapy -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Physics 7408 notes on radionuclides (3.10.6): tracer choice, Mo-Tc generator, PET, half-lives, gamma camera, therapy and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.10.6 Radionuclide imaging and therapy** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Medical physics option. Full explanations and worked examples are in the [radionuclide imaging and therapy study guide](/resources/aqa-a-level-physics-7408-radionuclide-imaging-and-therapy-aqa-alevel/); test yourself with the [radionuclide imaging and therapy practice questions](/resources/aqa-a-level-physics-7408-radionuclide-imaging-and-therapy-aqa-alevel-practice/).

## Equations

| Equation | Use |
|---|---|
| 1/T_E = 1/T_B + 1/T_P | Effective half-life |
| A = A₀(1/2)^(t/T_E) | Activity remaining in the body |
| λ = ln 2/T_P; A = λN | Number of radioactive nuclei from activity |
| E = m_ec² ≈ 0.51 MeV | Energy of each PET annihilation photon |
| Gain = (secondary electrons per dynode)ⁿ | Photomultiplier with n dynodes |

## Key terms

| Term | Meaning |
|---|---|
| Tracer | Gamma-emitting isotope labelled to a compound that collects in a target organ |
| Labelling | Attaching the isotope to a chemical compound |
| Metastable | Excited nuclear state that decays by gamma emission only (the "m" in Tc-99m) |
| Mo-Tc generator | Column of Mo-99 (66 h) that decays to Tc-99m (6 h), eluted with saline |
| Annihilation | Positron and electron become two gamma photons in opposite directions |
| Physical half-life | Time for half the nuclei to decay |
| Biological half-life | Time for half the substance to be removed by the body |
| Effective half-life | Time for the activity in the body to halve |
| Collimator | Lead plate with parallel holes; passes only photons travelling along the holes |
| Scintillator | Crystal (typically sodium iodide) that flashes when it absorbs a gamma photon |
| Dynode | Electrode at a higher potential that releases several secondary electrons per electron |

## Tracer checklist (the four named properties)

- **Radiation**: gamma only is ideal (escapes the body; no extra particle dose).
- **Half-life**: hours: long enough to prepare and scan, short enough to limit dose.
- **Gamma energy**: escapes the body but is detected in the crystal and blocked by the collimator walls (about 100 to 200 keV suits a gamma camera).
- **Labelling**: must attach to a compound with an affinity for the organ.

| Isotope | Radiation | Half-life | Gamma energy |
|---|---|---|---|
| Tc-99m | Gamma | About 6 h | About 140 keV |
| I-131 | Beta-minus and gamma | About 8 days | About 364 keV |
| In-111 | Gamma (electron capture) | About 2.8 days | About 171 and 245 keV |

## Mo-Tc generator

- Mo-99 decays by beta-minus to Tc-99m on a column.
- Saline washes out the Tc-99m when needed; Mo-99 stays bound.
- Importance: supplies a short-lived tracer on site for about a week.

## PET

- Positron emitter in the tracer (for example fluorine-18, half-life about 110 min).
- Positron annihilates with an electron: two 0.51 MeV photons in opposite directions (momentum conservation).
- Ring of detectors; coincident detection places the event on the line between the two detectors.
- Computer builds a 3D image of tracer concentration (function, such as active tumour tissue).

## Gamma camera order

Collimator → scintillator crystal → photomultiplier tubes (photocathode, dynodes, anode) → position logic and computer → image.

## Therapy

- **High-energy X-rays (external)**: multiple beams or rotating source crossing at the tumour; beam shaped to the tumour; shielding; dose split over many sessions; accurate positioning.
- **Beta implants (internal)**: beta range in tissue is short, so the dose stays in and around the tumour.

## Exam traps

- "Long half-life so it lasts": wrong; long half-life means a long dose.
- T_E = T_B + T_P: wrong; add reciprocals. T_E is shorter than both.
- Using hours for one half-life and days for another.
- Collimator "focuses" gamma rays: it absorbs those not parallel to its holes.
- PET photons come from annihilation, not from the nucleus.
- Iodine-131's beta emission is a drawback for imaging, not an advantage.

## Self-test

1. State two reasons why a gamma emitter, rather than an alpha or beta emitter, is used as a tracer.
2. What does the "m" in technetium-99m indicate?
3. Why is a Mo-Tc generator used rather than delivering Tc-99m from a factory?
4. A tracer has T_P = 8.0 days and T_B = 24 days. Calculate T_E.
5. A tracer has T_P = 2.8 days and T_B = 5.0 days. Calculate T_E.
6. A patient receives 300 MBq of a tracer with T_E = 6.0 days. Find the activity after 18 days.
7. Why are the two PET photons emitted in opposite directions?
8. State the energy of each PET photon in MeV.
9. What is the function of the collimator in a gamma camera?
10. A photomultiplier has 12 dynodes, each releasing 3 electrons per incident electron. Calculate its gain.
11. Give two methods of limiting the dose to healthy tissue in external X-ray therapy.
12. Why are beta emitters used for implants?

### Answers

1. Gamma rays **escape the body** to reach the detector; alpha and beta are absorbed in the body and only **add dose**.
2. **Metastable**: an excited nuclear state that decays by **gamma emission only**.
3. Its 6-hour half-life means much would decay in transport; the 66-hour **parent** produces it **on site** for about a week.
4. 1/T_E = 1/8.0 + 1/24 = 1/6.0, so **T_E = 6.0 days**.
5. 1/T_E = 1/2.8 + 1/5.0, so **T_E = 1.8 days**.
6. 18 days = 3 effective half-lives: 300/8 = **37.5 MBq**.
7. The positron–electron pair has almost zero momentum, so the photons' momenta must be **equal and opposite**.
8. About **0.51 MeV**.
9. It lets through only photons travelling **along its holes** (perpendicular to the crystal), so each point on the crystal matches a point in the patient.
10. 3¹² = **5.3 × 10⁵**.
11. Any two: **beams from several directions** crossing at the tumour; **beam shaped** to the tumour; **shielding** of healthy organs; dose split over **several sessions**.
12. Beta particles have a **short range** in tissue, so the dose is concentrated in the tumour.

## Frequently asked questions

**Why is the effective half-life shorter than both the physical and biological half-lives?**
Activity in the body is reduced by radioactive decay and by biological removal at the same time. The two rates add, so 1/T_E = 1/T_B + 1/T_P, which always gives a shorter time than either process alone.

**How does a gamma camera locate where a photon came from?**
The collimator passes only photons travelling along its holes, so the flash in the crystal is directly opposite the source. Neighbouring photomultiplier tubes share the light, and comparing their pulse sizes fixes the flash's position.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.6 Radionuclide imaging and therapy (A-level only).
