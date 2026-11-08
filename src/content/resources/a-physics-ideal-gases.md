---
title: "Ideal Gases"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Ideal gases"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 15.1
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
description: "The mole and Avogadro constant, the ideal gas equation pV = nRT, and kinetic theory with r.m.s. speed: Topic 15 of Cambridge International A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review."
reviewedDate: 2026-09-29
publishedDate: 2026-08-18
updatedDate: 2026-08-18
featured: false
---

This guide covers Topic 15, Ideal gases, in full — subtopics **15.1 The
mole**, **15.2 Equation of state** and **15.3 Kinetic theory of gases** —
from Cambridge International AS & A Level Physics 9702, 2025–2027 series.
This is A Level content and follows directly on from thermal equilibrium and
temperature scales.

## Before studying this

This resource assumes temperature scales from
[Temperature](/resources/a-physics-temperature/), and momentum from
[Dynamics: Newton's Laws and
Momentum](/resources/as-physics-dynamics-newtons-laws-and-momentum/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — A Level, Topic 15**

**15.1 The mole** — understanding that amount of substance is a
fundamental quantity measured in moles; using molar quantities where one
mole of any substance contains a number of particles equal to the Avogadro
constant Nₐ.

**15.2 Equation of state** — understanding that a gas obeying pV = nRT at
all pressures, volumes and temperatures is known as an ideal gas; recalling
and using pV = nRT, where n is the number of moles; recalling and using
pV = NkT, where N is the number of particles and k is the Boltzmann
constant, and relating k to the molar gas constant by k = R/Nₐ.

**15.3 Kinetic theory of gases** — stating the basic assumptions of the
kinetic theory of gases; explaining how molecular movement causes the
pressure exerted by a gas, and deriving and using pV = (1/3)Nm⟨c²⟩, where
⟨c²⟩ is the mean-square speed (a simple model considering one-dimensional
collisions and then extending to three dimensions using
(1/3)⟨c²⟩ = ⟨cₓ²⟩ is sufficient); understanding that the root-mean-square
speed cᵣₘₛ is given by √⟨c²⟩; and comparing pV = (1/3)Nm⟨c²⟩ with
pV = NkT to deduce that the average translational kinetic energy of a
molecule is (3/2)kT, and recalling and using this expression. (Why a mean
square is used: the particles move randomly, so their velocity components
average to zero — positive and negative values would cancel — whereas the
squares of the velocity components are all positive and have a non-zero
mean.)

## The mole and the Avogadro constant

**Amount of substance**, measured in **moles**, is a fundamental quantity in
the SI system. One mole of any substance contains a fixed number of
particles — the **Avogadro constant**, Nₐ = 6.02 × 10²³ mol⁻¹.

## The equation of state

A gas that obeys the relationship pV = nRT under all conditions of pressure,
volume and temperature is called an **ideal gas**:

```
pV = nRT
```

where p is pressure, V is volume, n is the number of moles, R is the molar
gas constant (8.31 J mol⁻¹ K⁻¹), and T is the thermodynamic temperature in
kelvin. Temperature in this equation must always be in kelvin, not Celsius.

**Worked example.** 2.0 mol of an ideal gas at 300 K occupies a volume of
0.020 m³. Its pressure:

```
p = nRT/V = (2.0 × 8.31 × 300) / 0.020 = 249,300 Pa ≈ 2.49 × 10⁵ Pa
```

### The equation of state in terms of molecules

The equation of state can equally be written in terms of the number of
**particles** N rather than the number of moles n, using the **Boltzmann
constant** k in place of the molar gas constant R:

```
pV = NkT
```

The Boltzmann constant is related to the molar gas constant by:

```
k = R / Nₐ
```

so k is, in effect, "the gas constant per particle" rather than per mole.
The two forms, pV = nRT and pV = NkT, describe exactly the same physical
law — pick whichever matches the quantity (moles or number of particles)
given in a question.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--04-boyle-law.webp" width="900" height="1200" alt="Two syringes hold the same ten molecules at constant temperature. Halving the volume from 60 to 30 cm3 doubles the pressure from 1.00 to 2.00 x 10^5 Pa because molecules hit the walls twice as often. A graph of p against 1/V for six readings is a straight line through the origin, and pV = 6.0 J every time." loading="lazy">
  <figcaption>At constant temperature pV is constant, so p against 1/V is a straight line through the origin.</figcaption>
</figure>


## Kinetic theory of gases

The **kinetic theory of gases** models a gas as a large number of identical
point particles in continuous random motion, colliding elastically with each
other and with the walls of their container, with negligible forces between
particles except during collisions. Gas **pressure** arises from the
cumulative effect of many particles colliding with the container walls,
transferring momentum on each collision.

### Deriving the kinetic theory equation

The syllabus prescribes a specific route for this derivation, based on
considering the change in momentum of particles colliding with one wall of
a cube-shaped container of side L:

1. A single particle of mass m moving with velocity component vₓ
perpendicular to one wall rebounds elastically, reversing its velocity, so
its change in momentum per collision with that wall is 2mvₓ.
2. Between successive collisions with the same wall, the particle travels
a distance 2L (there and back), taking time 2L/vₓ — so the rate of
momentum transfer (force) from this one particle is 2mvₓ ÷ (2L/vₓ) =
mvₓ²/L.
3. Summing over all N particles in the container, the total force on the
wall is (m/L)Σvₓ² = (Nm/L)⟨vₓ²⟩, where ⟨vₓ²⟩ is the mean square velocity
component in the x-direction.
4. Because the particles move randomly in three dimensions, ⟨c²⟩ =
⟨vₓ²⟩ + ⟨vy²⟩ + ⟨vz²⟩ = 3⟨vₓ²⟩, so ⟨vₓ²⟩ = ⟨c²⟩/3.
5. Pressure is force per unit area, and the wall has area L², so
p = F/L² = (Nm/L³)⟨vₓ²⟩ = (Nm/L³) × ⟨c²⟩/3. Since L³ is the volume V of
the container, this rearranges to the **kinetic theory equation**:

```
pV = (1/3) Nm⟨c²⟩
```

where N is the number of particles, m is the mass of one particle, and
⟨c²⟩ is the mean square speed of the particles.

The **root-mean-square speed**, cᵣₘₛ = √⟨c²⟩, is used rather than the mean
speed or the mean velocity. The mean **velocity** is zero, because
velocity is a vector and the particles move randomly in all directions, so
positive and negative components cancel — this is precisely why step 4
above squares the velocities before averaging them. The mean **speed**,
by contrast, is not zero (speed is always positive), but working directly
with a mean of speeds, rather than a mean of squared speeds, does not lead
to the pV = (1/3)Nm⟨c²⟩ result, so cᵣₘₛ is the quantity that emerges
naturally from the derivation, not merely a convenient substitute.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--06-kinetic-pressure.webp" width="900" height="1222" alt="A molecule rebounds elastically from the wall of a cube of side L, changing momentum by 2mv_x. The time between hits on that wall is 2L/v_x, so the force is mv_x²/L. For N molecules F = (Nm/L)&lt;v_x²&gt;; random motion gives &lt;c²&gt; = 3&lt;v_x²&gt;; dividing by area L² gives pV = 1/3 Nm&lt;c²&gt;. Comparing with pV = NkT gives 1/2 m&lt;c²&gt; = 3/2 kT. For nitrogen at 300 K the r.m.s. speed is 517 m/s." loading="lazy">
  <figcaption>Pressure arises from the momentum change of molecules rebounding from the walls.</figcaption>
</figure>


## Linking kinetic theory to temperature

Comparing pV = (1/3)Nm⟨c²⟩ with pV = nRT shows that the average
**translational kinetic energy** of a gas molecule, ½m⟨c²⟩, is directly
proportional to the thermodynamic temperature T. This is a key result: a
gas's temperature is, at the molecular level, a direct measure of the
average kinetic energy of its particles.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--01-kelvin-celsius-scale.webp" width="900" height="1110" alt="A vertical scale from 0 K (absolute zero, -273.15 °C) through 77 K (nitrogen boils, -196 °C) and 273.16 K (triple point of water, 0.01 °C) to 293 K (a 20 °C room). T/K = θ/°C + 273.15, and a rise of 25 K equals a rise of 25 °C because the degrees are the same size." loading="lazy">
  <figcaption>The kelvin and Celsius degrees are the same size; only the zero points differ.</figcaption>
</figure>


## Root-mean-square speed

Combining pV = (1/3)Nm⟨c²⟩ with pV = NkT gives ½m⟨c²⟩ = (3/2)kT, confirming
that mean molecular kinetic energy depends on temperature **only** — not on
pressure, volume, or the identity of the gas. Helium and xenon at the same
temperature have the same mean molecular kinetic energy; the heavier xenon
molecules simply move more slowly.

Rearranging gives the **root-mean-square speed**:

```
c_rms = sqrt(<c^2>) = sqrt(3kT/m) = sqrt(3RT/M)
```

**Worked example.** Nitrogen gas (molar mass M = 0.028 kg mol⁻¹) at 300 K:

```
c_rms = sqrt(3RT/M) = sqrt((3 x 8.31 x 300) / 0.028) = sqrt(267,100) ~= 517 m/s
```

This is the r.m.s. speed of an *average* molecule — individual molecules
have a whole distribution of speeds around this value.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--07-maxwell-boltzmann.webp" width="900" height="1150" alt="Speed distribution curves for helium at 300 K and 1200 K, computed from the Maxwell-Boltzmann formula. Both start at zero, rise to a peak and have a long tail to high speeds. At 1200 K the peak is lower and further right, with equal area. The r.m.s. speed is 1370 m/s at 300 K and 2740 m/s at 1200 K: four times the kelvin temperature gives twice the r.m.s. speed." loading="lazy">
  <figcaption>Molecular speeds are spread; a higher temperature shifts and flattens the distribution.</figcaption>
</figure>


## Internal energy of an ideal gas

The kinetic model assumes negligible intermolecular forces except during
collisions, so an ideal gas has **no molecular potential energy** — its
internal energy is entirely kinetic:

```
U = (3/2) n R T        (for a monatomic ideal gas)
```

*This internal-energy expression is not itself a named recall equation in
the 9702 syllabus or data booklet — it follows directly from summing
the per-molecule kinetic energy E = (3/2)kT (which is on the syllabus) over
N = nNₐ molecules. If a question needs it, expect it to be derived from
that per-molecule relation rather than simply quoted.*

Internal energy therefore depends **only on temperature**, which is why an
isothermal process (constant T) has ΔU = 0, whatever happens to pressure or
volume.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--02-heating-curve.webp" width="900" height="1210" alt="Temperature-time graph for 0.200 kg of ice at -15 °C heated at 150 W. 6300 J warms the ice to 0 °C, 66 800 J melts it at constant temperature, and 16 800 J warms the water to 20 °C; the total of 89 900 J takes about 600 s. Particle pictures show ice as a lattice, melting as a mixture and water as an irregular close arrangement." loading="lazy">
  <figcaption>During melting the supplied energy increases potential energy, so the temperature stays constant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-ideal-gases--08-first-law.webp" width="900" height="1270" alt="Top: a gas absorbs 500 J of thermal energy and expands, doing 200 J of work on its surroundings, so W = -200 J and the internal energy rises by 300 J. Bottom: a piston does 340 J of work on a gas while 120 J leaves by heating, so internal energy rises by 220 J. Waterfall bars show q, W and ΔU. Cambridge only: isothermal ΔU = 0, adiabatic q = 0, isobaric constant pressure, isovolumetric W = 0." loading="lazy">
  <figcaption>ΔU = q + W, with W the work done on the gas, negative when the gas expands.</figcaption>
</figure>


## Common mistakes

- **Using Celsius temperature in pV = nRT** — this equation requires
thermodynamic (Kelvin) temperature.
- **Confusing mean speed with root-mean-square speed** — they are not the
same quantity, and cᵣₘₛ is specifically used because it avoids the
cancellation that occurs when averaging velocities in random directions.
- **Forgetting that the kinetic theory model assumes negligible
intermolecular forces except during collisions** — this is why it applies
well to gases and not to liquids or solids.
- **Treating n (moles) and N (number of particles) as interchangeable** — they
are related by N = nNₐ but appear in different versions of the gas equations.

## Quick revision checklist

- One mole = Nₐ particles, Nₐ = 6.02 × 10²³ mol⁻¹
- pV = nRT, with T always in kelvin
- pV = NkT, and k = R/Nₐ, the Boltzmann constant
- Deriving pV = (1/3)Nm⟨c²⟩ from the momentum change of particles colliding with a wall
- Why cᵣₘₛ, not mean speed, is used — mean *velocity* is zero because directions are random
- Average molecular kinetic energy ∝ thermodynamic temperature

## Frequently asked questions

**What is an ideal gas?**
An ideal gas is one that obeys pV = nRT at all pressures, volumes and temperatures. Temperature in this equation must always be in kelvin.

**How is the Boltzmann constant related to the molar gas constant?**
The Boltzmann constant is k = R/Nₐ, the molar gas constant divided by the Avogadro constant, so it is effectively the gas constant per particle. This links pV = nRT to pV = NkT.

**How do you derive pV = (1/3)Nm⟨c²⟩?**
Consider a particle rebounding elastically from one wall of a cube of side L, with momentum change 2mvₓ every 2L/vₓ. Summing over N particles, using ⟨vₓ²⟩ = ⟨c²⟩/3 for random motion in three dimensions, and dividing the force by the wall area L² gives pV = (1/3)Nm⟨c²⟩.

**Why is the root-mean-square speed used in kinetic theory?**
The mean velocity of gas molecules is zero because they move randomly in all directions, so positive and negative components cancel. Squaring the velocities gives all-positive values, and the mean square speed is what emerges from the derivation.

## Related resources

- [Temperature](/resources/a-physics-temperature/) — the previous A Level topic
- [Thermodynamics](/resources/a-physics-thermodynamics/) — the next A Level topic
- [Cambridge AS & A Level Physics hub](/boards/cambridge/a-level/physics/)

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027
series. Always check the current syllabus for your examination year.*
