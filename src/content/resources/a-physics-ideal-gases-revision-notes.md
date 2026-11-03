---
title: "A Level Physics: Ideal Gases — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Ideal gases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 15.1
stage: "A"
syllabusTopics:
  - qualification: "a-level"
    topic: "a-ideal-gases"
    subtopic: "a-the-mole"
  - qualification: "a-level"
    topic: "a-ideal-gases"
    subtopic: "a-equation-of-state"
  - qualification: "a-level"
    topic: "a-ideal-gases"
    subtopic: "a-kinetic-theory-of-gases"
description: "Condensed recall notes on the equation of state, kinetic theory and the mole for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Ideal Gases study guide](/resources/a-physics-ideal-gases/).

## The equation of state

```
pV = nRT        n = number of MOLES,      R = 8.31 J mol^-1 K^-1
pV = N k T      N = number of MOLECULES,  k = 1.38 x 10^-23 J K^-1
```

Related by `N = n N_A` and `k = R / N_A`, where `N_A = 6.02 × 10²³ mol⁻¹` is the **Avogadro constant** — one mole of any substance contains this same fixed number of particles.

**T must be in kelvin, always.** More marks are lost to this than to any other error in the topic.

**Worked example.** 2.0 mol of an ideal gas at 300 K occupies 0.020 m³. Its pressure: p = nRT/V = (2.0 × 8.31 × 300) ÷ 0.020 = **2.49 × 10⁵ Pa**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--04-boyle-law.webp" width="900" height="1200" alt="Two syringes hold the same ten molecules at constant temperature. Halving the volume from 60 to 30 cm3 doubles the pressure from 1.00 to 2.00 x 10^5 Pa because molecules hit the walls twice as often. A graph of p against 1/V for six readings is a straight line through the origin, and pV = 6.0 J every time." loading="lazy">
  <figcaption>At constant temperature pV is constant, so p against 1/V is a straight line through the origin.</figcaption>
</figure>


## The gas laws as special cases

| Law | Held constant | Relationship |
|---|---|---|
| Boyle's | T | p ∝ 1/V |
| Charles's | p | V ∝ T |
| Pressure (Gay-Lussac) | V | p ∝ T |

All three fall out of pV = nRT — learn the one equation, not the three laws.

**Worked example (combined gas law).** A fixed mass of gas at p₁ = 1.0 × 10⁵ Pa, V₁ = 2.0 × 10⁻³ m³ and T₁ = 300 K is compressed to V₂ = 1.0 × 10⁻³ m³ and heated to T₂ = 350 K. Since n is fixed, p₁V₁/T₁ = p₂V₂/T₂, so p₂ = p₁V₁T₂ / (V₂T₁) = (1.0 × 10⁵ × 2.0 × 10⁻³ × 350) ÷ (1.0 × 10⁻³ × 300) = **2.33 × 10⁵ Pa**.

## Kinetic theory

```
pV = (1/3) N m <c^2>
```

where `<c²>` is the **mean square speed**. Combining with pV = NkT:

```
(1/2) m <c^2> = (3/2) k T     (mean TRANSLATIONAL kinetic energy of a molecule)
```

**The central result: the mean translational kinetic energy of a molecule is directly proportional to the absolute temperature.** It depends on temperature *only* — not on pressure, volume, or the identity of the gas. Helium and xenon at the same temperature have the same mean translational molecular kinetic energy; the xenon molecules simply move more slowly because they are heavier.

Root-mean-square speed:

```
c_rms = sqrt(<c^2>) = sqrt(3kT/m) = sqrt(3RT/M)
```

**Worked example.** Nitrogen gas (molar mass M = 0.028 kg mol⁻¹) at 300 K: c_rms = √(3RT/M) = √((3 × 8.31 × 300) ÷ 0.028) = √(267,100) = **517 m s⁻¹**. This is the r.m.s. speed of an *average* molecule — individual molecules have a whole distribution of speeds around this value.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--05-absolute-zero.webp" width="900" height="1080" alt="Pressure of a fixed volume of air against Celsius temperature: 100 kPa at 20 °C and 128 kPa at 100 °C, a gradient of 0.35 kPa per °C. Extending the line back to zero pressure gives -266 °C, close to the accepted -273 °C; the long extrapolation magnifies small errors." loading="lazy">
  <figcaption>Extrapolating a pressure-temperature line back to p = 0 estimates absolute zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--06-kinetic-pressure.webp" width="900" height="1222" alt="A molecule rebounds elastically from the wall of a cube of side L, changing momentum by 2mv_x. The time between hits on that wall is 2L/v_x, so the force is mv_x²/L. For N molecules F = (Nm/L)&lt;v_x²&gt;; random motion gives &lt;c²&gt; = 3&lt;v_x²&gt;; dividing by area L² gives pV = 1/3 Nm&lt;c²&gt;. Comparing with pV = NkT gives 1/2 m&lt;c²&gt; = 3/2 kT. For nitrogen at 300 K the r.m.s. speed is 517 m/s." loading="lazy">
  <figcaption>Pressure arises from the momentum change of molecules rebounding from the walls.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--07-maxwell-boltzmann.webp" width="900" height="1150" alt="Speed distribution curves for helium at 300 K and 1200 K, computed from the Maxwell-Boltzmann formula. Both start at zero, rise to a peak and have a long tail to high speeds. At 1200 K the peak is lower and further right, with equal area. The r.m.s. speed is 1370 m/s at 300 K and 2740 m/s at 1200 K: four times the kelvin temperature gives twice the r.m.s. speed." loading="lazy">
  <figcaption>Molecular speeds are spread; a higher temperature shifts and flattens the distribution.</figcaption>
</figure>


## Assumptions of the kinetic model

1. Large number of molecules in random motion.
2. Volume of the molecules is negligible compared with the volume of the container.
3. **No intermolecular forces except during collisions.**
4. Collisions are perfectly elastic.
5. Time of a collision is negligible compared with the time between collisions.

Assumptions 2 and 3 are the ones that fail in real gases, which is why real gases deviate most at **high pressure and low temperature** — molecules are close together, so their own volume matters and the attractions become significant.

## Internal energy of an ideal gas

Because assumption 3 says there are no intermolecular forces, an ideal gas has **no molecular potential energy**. Its internal energy is entirely kinetic, so:

```
U = (3/2) n R T     for a monatomic ideal gas
```

Hence internal energy depends only on temperature — which is what makes isothermal processes have ΔU = 0.

## Exam traps

- Using °C anywhere in pV = nRT.
- Confusing n (moles) with N (molecules), and so R with k.
- Confusing mean square speed `<c²>` with the square of the mean speed — they are not the same.
- Saying heavier molecules have more translational kinetic energy at the same temperature. They don't; they are just slower.
- Forgetting that "ideal" means zero potential energy, so U is purely kinetic.

## Self-test

1. State the two forms of the equation of state and say what each symbol counts.
2. What is the mean translational kinetic energy of a molecule proportional to?
3. Two gases at the same temperature — which has the greater mean translational molecular KE?
4. Under what conditions do real gases deviate most from ideal behaviour, and why?
5. Why does an ideal gas have no molecular potential energy?
6. What does the Avogadro constant represent?
7. 1.5 mol of an ideal gas at 250 K occupies 0.010 m³. Calculate its pressure.
8. Calculate the r.m.s. speed of a nitrogen molecule (M = 0.028 kg mol⁻¹) at 300 K.
9. A gas is compressed from 2.0 × 10⁻³ m³ to 1.0 × 10⁻³ m³ while its temperature rises from 300 K to 350 K, starting at 1.0 × 10⁵ Pa. Find the new pressure.

**Answers:** 1. pV = nRT with n in moles and R = 8.31; pV = NkT with N the number of molecules and k = 1.38 × 10⁻²³. 2. The absolute temperature, and nothing else. 3. Neither — they are equal; the heavier gas simply has a lower r.m.s. speed. 4. High pressure and low temperature, because molecular volume is no longer negligible and intermolecular attractions are no longer negligible. 5. The kinetic model assumes no intermolecular forces except during collisions, and potential energy arises from those forces. 6. It is the fixed number of particles (6.02 × 10²³) contained in one mole of any substance. 7. p = nRT/V = (1.5 × 8.31 × 250) ÷ 0.010 = 3.12 × 10⁵ Pa. 8. c_rms = √(3RT/M) = √((3 × 8.31 × 300) ÷ 0.028) = 517 m s⁻¹. 9. p₂ = p₁V₁T₂/(V₂T₁) = (1.0 × 10⁵ × 2.0 × 10⁻³ × 350) ÷ (1.0 × 10⁻³ × 300) = 2.33 × 10⁵ Pa.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--02-heating-curve.webp" width="900" height="1210" alt="Temperature-time graph for 0.200 kg of ice at -15 °C heated at 150 W. 6300 J warms the ice to 0 °C, 66 800 J melts it at constant temperature, and 16 800 J warms the water to 20 °C; the total of 89 900 J takes about 600 s. Particle pictures show ice as a lattice, melting as a mixture and water as an irregular close arrangement." loading="lazy">
  <figcaption>During melting the supplied energy increases potential energy, so the temperature stays constant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--08-first-law.webp" width="900" height="1270" alt="Top: a gas absorbs 500 J of thermal energy and expands, doing 200 J of work on its surroundings, so W = -200 J and the internal energy rises by 300 J. Bottom: a piston does 340 J of work on a gas while 120 J leaves by heating, so internal energy rises by 220 J. Waterfall bars show q, W and ΔU. Cambridge only: isothermal ΔU = 0, adiabatic q = 0, isobaric constant pressure, isovolumetric W = 0." loading="lazy">
  <figcaption>ΔU = q + W, with W the work done on the gas, negative when the gas expands.</figcaption>
</figure>

