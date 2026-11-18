---
title: "OxfordAQA A-Level Physics (9630): Kinetic theory of gases"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.11 – Thermal physics"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 11.4
syllabusTopics:
  - qualification: "a-level"
    topic: "thermal-physics-oxfordaqa-alevel"
    subtopic: "kinetic-theory-of-gases-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.11.4: Brownian motion, the assumptions behind pV = ⅓Nm(c_rms)², molecular kinetic energy and internal energy."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.11.4, Kinetic theory of gases, part of Section 3.11 Thermal physics, which is International A-level only. The full derivation of pV = ⅓Nm(c_rms)² and the basic worked examples are in the [ideal gases and kinetic theory study guide](/resources/oxfordaqa-a-level-physics-ideal-gases-and-kinetic-theory/). This page shows where each assumption is used, works through single-molecule and whole-room calculations, and compares gases at the same temperature. Condense it with the [kinetic theory revision notes](/resources/oxfordaqa-a-level-physics-9630-kinetic-theory-of-gases-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [kinetic theory practice questions](/resources/oxfordaqa-a-level-physics-9630-kinetic-theory-of-gases-oxfordaqa-alevel-physics-practice/).

Values used: k = 1.38 × 10⁻²³ J K⁻¹, R = 8.31 J mol⁻¹ K⁻¹, N_A = 6.02 × 10²³ mol⁻¹.

## What the specification asks for

| Statement | What you must be able to do |
|---|---|
| Brownian motion as evidence for existence of atoms | Describe what is seen and explain what it shows |
| Explanation of relationships between p, V and T in terms of a simple molecular model | Explain each gas law using molecular collisions |
| The gas laws are empirical; the kinetic theory model arises from theory | Explain the difference between the two |
| Assumptions leading to pV = ⅓Nm(c_rms)²; calculations using the formula | State the assumptions; use and rearrange the equation |
| For an ideal gas, internal energy is kinetic energy of the atoms | Calculate internal energy from temperature or from pV |
| Average molecular kinetic energy = ½m(c_rms)² = 3kT/2 = 3RT/2N_A | Link temperature to molecular energy and speed |

## Brownian motion in more detail

In the usual demonstration, smoke in a small glass cell is lit from the side and viewed through a microscope. The smoke particles appear as bright points that move in short, straight, randomly directed jumps. Three observations carry the argument:

- The motion never stops, even though the cell is left undisturbed. Something is continually supplying energy to the particles.
- The direction changes are random. No steady current of air could cause that.
- Smaller particles jitter more than larger ones, and warming the cell makes the motion more vigorous.

The explanation is that the particles are struck on all sides by air molecules that are too small to see and are themselves in fast, random motion. At any instant the impacts on one side do not quite balance those on the other, so the particle receives a net push that keeps changing. A small particle has fewer impacts to average out and less mass, so the imbalance moves it more. When an exam asks what Brownian motion is evidence for, the answer is that matter is made of molecules (or atoms) that are in continuous, random motion.

## Where each assumption is used

Kinetic theory begins with a model, not with measurements. Each assumption justifies one step of the derivation, and linking them is a common six-mark question.

| Assumption | Where it is used |
|---|---|
| Very large number of identical molecules in random motion | Lets you take averages; makes ⟨c_x²⟩ = ⟨c_y²⟩ = ⟨c_z²⟩ = ⅓⟨c²⟩ |
| Collisions with walls and each other are perfectly elastic | A molecule rebounds with the same speed, so its momentum change is 2mc_x and no kinetic energy is lost |
| Volume of the molecules is negligible compared with the container | The distance travelled between walls is the full length of the container |
| No forces between molecules except during collisions | Molecules move in straight lines at constant speed between collisions; no potential energy |
| Duration of a collision is negligible compared with time between collisions | The time between hits on one wall is simply 2l/c_x |
| Newton's laws apply | Force on the wall = rate of change of momentum |

Because these assumptions describe the **ideal gas**, a real gas departs from pV = ⅓Nm(c_rms)² when they fail: at high pressure the molecules' own volume is no longer negligible, and at low temperature the attractive forces between molecules matter.

## Empirical laws against a theoretical model

Boyle, Charles and the pressure law were found by experiment. They describe what happens without explaining it. Kinetic theory starts from assumptions about molecules and Newton's laws and **predicts** pV = ⅓Nm(c_rms)². Comparing this with the experimental pV = NkT gives ½m(c_rms)² = 3kT/2: temperature is a measure of the average kinetic energy of the molecules. A theory that reproduces independent experimental laws, and also explains temperature, gains strong support.

## Explaining the gas laws with molecules

- **Boyle's law (constant T):** the mean speed of the molecules is unchanged. Halving the volume means each molecule travels half as far between collisions with a wall, so collisions are twice as frequent and the pressure doubles.
- **Pressure law (constant V):** a higher temperature means a higher mean kinetic energy and speed. Each collision changes momentum by more, and collisions happen more often, so the pressure rises.
- **Charles's law (constant p):** the molecules move faster at a higher temperature. For the pressure to stay the same, the collision rate per unit area of wall must fall, so the gas expands.
- **More gas (constant V and T):** more molecules strike the walls each second, each with the same average momentum change, so the pressure rises in proportion to N.

## A density form of the equation

Nm is the total mass of gas, so dividing pV = ⅓Nm(c_rms)² by V gives

p = ⅓ρ(c_rms)²

where ρ is the density. It is useful when a question gives density instead of N and m.

## Worked example 1: r.m.s. speed from density

Air at 1.01 × 10⁵ Pa has a density of 1.20 kg m⁻³. Find the r.m.s. speed of its molecules.

c_rms = √(3p/ρ) = √(3 × 1.01 × 10⁵ / 1.20) = **503 m s⁻¹**

## Worked example 2: one molecule in a box

A nitrogen molecule of mass 4.65 × 10⁻²⁶ kg moves at 500 m s⁻¹ back and forth between two opposite walls of a cube of side 0.10 m, colliding only with those walls.

- Momentum change at each wall: 2mc = 2 × 4.65 × 10⁻²⁶ × 500 = 4.65 × 10⁻²³ kg m s⁻¹.
- Time between hits on the same wall: 2l/c = 0.20 / 500 = 4.0 × 10⁻⁴ s.
- Mean force on that wall: 4.65 × 10⁻²³ / 4.0 × 10⁻⁴ = **1.2 × 10⁻¹⁹ N**.

To produce a pressure of 1.01 × 10⁵ Pa on the 0.010 m² wall needs a force of 1.01 × 10³ N, the equivalent of about 9 × 10²¹ such molecules. So many impacts arrive each second that the force is steady, even though each one is a tiny, separate impulse.

## Worked example 3: comparing gases at one temperature

Helium (M = 0.0040 kg mol⁻¹) and argon (M = 0.040 kg mol⁻¹) are mixed in a container at 300 K. Compare (a) their mean kinetic energies and (b) their r.m.s. speeds.

(a) The mean kinetic energy depends only on T: both are 3kT/2 = 1.5 × 1.38 × 10⁻²³ × 300 = **6.2 × 10⁻²¹ J**.

(b) ½m(c_rms)² is the same, so c_rms ∝ 1/√m. The ratio helium : argon = √(0.040/0.0040) = √10 = **3.2**.

A common wrong answer says the heavier atoms have more kinetic energy. At the same temperature they do not; they move more slowly instead.

## Internal energy of an ideal gas

In an ideal gas there are no forces between molecules except in collisions, so there is no potential energy. The internal energy is the total kinetic energy of the molecules:

U = N × 3kT/2 = 3nRT/2 = 3pV/2

The last form follows from pV = nRT. Doubling the kelvin temperature of a fixed amount of ideal gas doubles its internal energy.

## Worked example 4: the air in a room

A room measures 5.0 m × 4.0 m × 2.5 m and holds air at 1.0 × 10⁵ Pa. Treat the air as an ideal gas whose internal energy is 3pV/2. Find the total kinetic energy of the molecules.

V = 50 m³, so U = 1.5 × 1.0 × 10⁵ × 50 = **7.5 × 10⁶ J**.

This answer does not depend on temperature. If the room is warmed while air leaks out to keep the pressure at 1.0 × 10⁵ Pa, each molecule gains kinetic energy but there are fewer of them, and the total stays the same. Questions that ask "what happens to the internal energy" must say whether the amount of gas is fixed.

## Worked example 5: doubling the r.m.s. speed

Nitrogen is at 300 K. To what temperature must it be heated to double c_rms?

(c_rms)² ∝ T, so doubling c_rms needs four times the temperature: **1200 K**, which is 927 °C.

## Common mistakes

- Saying molecules move faster when a gas is compressed at constant temperature.
- Giving heavier molecules a larger mean kinetic energy at the same temperature.
- Using molar mass M in ⅓Nm(c_rms)² in place of the molecular mass m = M/N_A.
- Treating c_rms as the mean speed. The r.m.s. value is the square root of the mean of the squares, and is larger than the mean speed.
- Writing that Brownian motion shows the *smoke particles* are molecules. The smoke particles are visible; the molecules hitting them are not.
- Forgetting to use kelvin in 3kT/2.

## Exam technique

- **Describe** Brownian motion: what is seen (random, jerky motion of visible particles), not the explanation.
- **Explain** a gas law: mention speed (or kinetic energy), the rate of collisions and the momentum change per collision, and say which of these changes.
- **State the assumptions:** give each one precisely, for example "collisions are perfectly elastic", not "collisions are perfect".
- **Calculate:** decide whether you need m (per molecule) or M (per mole), and whether to use k or R.
- **Discuss** empirical against theoretical: say where each came from and how their agreement supports the model.

## Where next

- Condense with the [kinetic theory revision notes](/resources/oxfordaqa-a-level-physics-9630-kinetic-theory-of-gases-oxfordaqa-alevel-physics-revision-notes/).
- Try the [kinetic theory practice questions](/resources/oxfordaqa-a-level-physics-9630-kinetic-theory-of-gases-oxfordaqa-alevel-physics-practice/).
- Review the experimental laws in the [ideal gases study guide](/resources/oxfordaqa-a-level-physics-9630-ideal-gases-oxfordaqa-alevel-physics/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.11.4 Kinetic theory of gases, published by OxfordAQA.
