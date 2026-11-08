---
title: "Pressure: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["o-levels"]
topic: "Motion, forces and energy"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 1.8
syllabusTopics:
  - qualification: "o-level"
    topic: "motion-forces-and-energy"
    subtopic: "pressure"
description: "Condensed recall notes on pressure as force per unit area, atmospheric pressure, barometers and pressure in liquids for Cambridge O Level Physics 5054."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
---

Condensed for the final weeks. For the full explanation, use the
[Pressure study guide](/resources/pressure/).

## The two equations

```
PRESSURE FROM A FORCE
p = F / A            p in pascals (Pa), F in N, A in m2
                     1 Pa = 1 N/m2

PRESSURE IN A LIQUID (at depth h)
p = rho g h          rho = density (kg/m3), g ≈ 9.8 N/kg on Earth
                     h = DEPTH below the surface
```

Note what `p = ρgh` does **not** contain: area, shape or total volume. Pressure at a depth depends only on depth, density and g.

## Pressure from a force

Same force, smaller area → **greater** pressure. This explains:

- Sharp knives and drawing pins — tiny area, high pressure, cuts easily.
- Skis and tractor tyres — large area, low pressure, prevents sinking.
- Camels' wide feet — spread weight over soft sand.

The force from pressure always acts **perpendicular** to the surface — shown experimentally with a thistle funnel and manometer: rotating the funnel's open end while holding it at the same depth gives the same manometer reading whichever way it faces, since the liquid pushes at right angles to the membrane regardless of its orientation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/pressure--01-pressure-force-area.webp" width="900" height="850" alt="Two blocks each press with 600 N. On 0.5 m2 the pressure is 1200 Pa and the block sinks little into sand; on 0.1 m2 it is 6000 Pa and it sinks deeper." loading="lazy">
  <figcaption>For the same force, a smaller area gives a larger pressure.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/pressure--02-right-angles-experiment.webp" width="900" height="880" alt="Three beakers hold a thistle funnel at the same depth facing up, sideways and down, joined to a U-tube manometer. The arrows meet the membrane at right angles and the manometer shows the same height difference h each time." loading="lazy">
  <figcaption>Pressure at a point acts at right angles to the surface, and is the same in every direction.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/pressure--03-pressure-with-depth.webp" width="900" height="960" alt="A tank of water with arrows on the wall that lengthen with depth: 9800 Pa at 1 m, 19600 Pa at 2 m, 29400 Pa at 3 m, matching the worked example 1000 x 9.8 x 3." loading="lazy">
  <figcaption>Pressure beneath a liquid increases in proportion to depth.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/pressure--05-why-mercury.webp" width="900" height="1170" alt="Drawn to scale, the same air pressure supports about 0.75 m of mercury but about 10.2 m of water, because mercury is 13.6 times denser." loading="lazy">
  <figcaption>A denser liquid gives a shorter column, so mercury is practical for barometers.</figcaption>
</figure>


## Pressure in liquids

Key facts:

- Increases with **depth**.
- Acts **equally in all directions** at a given depth.
- Independent of the **shape** or **width** of the container.
- Greater for a **denser** liquid.

This is why dam walls are **thicker at the base** — pressure is greatest there.

## Atmospheric pressure

Caused by the weight of air above. Roughly **100 000 Pa** (1 × 10⁵ Pa) at sea level, decreasing with altitude as there is less air above.

**Mercury barometer:** the height of the mercury column is supported by atmospheric pressure. At sea level ≈ **760 mm Hg**.

Mercury is used rather than water because its high density keeps the column a manageable height — a water barometer would need to be over 10 m tall.

**Manometer:** a U-tube measuring the pressure of a gas supply; the **difference in the two levels** gives the excess pressure over atmospheric.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/pressure--04-liquid-barometer.webp" width="900" height="1070" alt="Two mercury barometers with a vacuum above the column and open to a dish. At higher air pressure the arrows are longer and the column is taller (788 mm) than at lower air pressure (713 mm)." loading="lazy">
  <figcaption>A taller mercury column means a higher atmospheric pressure.</figcaption>
</figure>


## Worked example

A tank holds water 2.5 m deep. Find the pressure at the bottom.
(ρ = 1000 kg/m³, g = 9.8 N/kg)

```
p = rho g h = 1000 x 9.8 x 2.5 = 24 500 Pa

Total pressure including atmosphere:
24 500 + 100 000 = 124 500 Pa
```

Read the question carefully — "pressure due to the water" excludes atmospheric; "total pressure" includes it.

## Hydraulic systems (Pascal's principle) — background, not examinable

*Beyond the O Level Physics 5054 syllabus: the pressure subtopic does not include an outcome on hydraulic systems or transmission of pressure. The following is background reading only.*

Pressure applied to an enclosed liquid is **transmitted equally throughout the fluid**, so a small force on a small piston produces a large force on a larger piston:

```
p = F / A  (same p throughout)   so   F(output) = p x A(output)
```

**Worked example.** A force of 40 N is applied to a piston of area 0.0004 m². The output piston has area 0.0060 m². Find the output force.

```
p = F / A = 40 / 0.0004 = 100 000 Pa
F(output) = p x A(output) = 100 000 x 0.0060 = 600 N
```

Liquids are used rather than gases because liquids are **virtually incompressible**, so pressure is transmitted immediately; a gas would compress first, delaying the output force.

## Exam traps

- Use **depth** in `p = ρgh`, not the height of the container or the length of a slope.
- Area must be in **m²** — convert from cm² by dividing by 10 000.
- Pressure in a liquid does not depend on the container's shape or the volume of liquid.
- Distinguish pressure *due to the liquid* from *total* pressure including atmospheric.
- Mercury is chosen for its **density**, not its colour or toxicity.
- The force from pressure acts **perpendicular** to the surface, whatever the surface's orientation.
- In a hydraulic system, it is the **pressure** that stays equal throughout, not the force. *(Background — hydraulic systems are not on the 5054 syllabus.)*

## Self-test

1. A 600 N person stands on one foot of area 0.015 m². Find the pressure.
2. Why are dam walls thicker at the bottom?
3. State two factors affecting pressure at a point in a liquid.
4. Why is mercury used in a barometer rather than water?
5. Does pressure at 3 m depth differ between a narrow tube and a wide tank?
6. In which direction does the force from pressure act on a submerged surface?
7. *(Background, not examinable.)* A hydraulic system has an input piston of area 0.0004 m² (force 40 N) and an output piston of area 0.0060 m². Find the output force, and explain why the system uses a liquid rather than a gas.

**Answers:** 1. p = 600/0.015 = **40 000 Pa**. 2. Pressure increases with depth, so the force on the wall is greatest at the base and more material is needed to withstand it. 3. Depth below the surface and the density of the liquid (and g). 4. Mercury is about 13.6 times denser than water, so the supported column is around 760 mm rather than over 10 m — a practical instrument height. 5. No — pressure depends only on depth, density and g, not on the container's width or shape. 6. Perpendicular to the surface, regardless of the surface's orientation. 7. p = 40 ÷ 0.0004 = 100 000 Pa; F(output) = 100 000 × 0.0060 = **600 N**. A liquid is used because it is virtually incompressible, so pressure is transmitted immediately and in full; a gas would compress first, delaying the output force.

## Frequently asked questions

**Does pressure in a liquid depend on the shape of the container?**
No. Pressure at a given depth depends only on depth, the density of the liquid and g. The shape, width and total volume of the container make no difference.

**Why are dam walls thicker at the bottom?**
Pressure in a liquid increases with depth, so the force on the wall is greatest at the base. More material is needed there to withstand it.

**How do you convert an area from cm² to m²?**
Divide by 10 000. Area must be in m² for the pressure to come out in pascals.

**What is atmospheric pressure at sea level?**
It is roughly 100 000 Pa (1 × 10⁵ Pa), which supports a mercury column of about 760 mm. It decreases with altitude because there is less air above.
