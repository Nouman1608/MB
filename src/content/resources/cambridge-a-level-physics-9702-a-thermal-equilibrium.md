---
title: "Cambridge A Level Physics (9702): Thermal equilibrium"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Temperature"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-temperature"
    subtopic: "a-thermal-equilibrium"
description: "A focused guide to 14.1 Thermal equilibrium in Cambridge A Level Physics 9702: direction of energy transfer, what equilibrium means, thermometers and mixing."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **14.1 Thermal equilibrium** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Temperature study guide](/resources/a-physics-temperature/) introduces all three parts of Topic 14; this page goes further into the equilibrium outcomes alone: why temperature, not energy content, decides which way energy flows, what is happening to molecules when two bodies are in equilibrium, why a thermometer works at all, and how to calculate the temperature that two bodies settle at. For quick recall use the [Thermal equilibrium revision notes](/resources/cambridge-a-level-physics-9702-a-thermal-equilibrium-revision-notes/), and for exam-style questions the [Thermal equilibrium practice questions](/resources/cambridge-a-level-physics-9702-a-thermal-equilibrium-practice/).

## What 14.1 asks you to do

The syllabus lists two outcomes. Candidates should be able to:

- understand that **(thermal) energy is transferred from a region of higher temperature to a region of lower temperature**
- understand that **regions of equal temperature are in thermal equilibrium**

These two statements are the working definition of temperature used in the rest of the thermal physics topics. Questions on them are usually short explanations, often attached to a calculation from 14.3.

## Temperature decides the direction

The first outcome says nothing about how much energy each region contains. Net thermal energy flows from the region at **higher temperature** to the region at **lower temperature**, whatever their sizes.

A spark from a sparkler can be at over 1000 °C, yet it lands on skin without causing a burn. Energy does flow from the spark to the skin, as the outcome says, because the spark is hotter. But the spark has a tiny mass, so the total energy it can give up while cooling is very small. Temperature tells you **which way** energy goes; the amount transferred depends also on mass and on the material (14.3).

The reverse case matters too. A large body at a low temperature cannot warm a small body at a higher temperature, however much internal energy the large body contains. Energy only ever flows "downhill" in temperature on its own.

## What happens at the molecular level

In a solid, liquid or gas, energy passes between neighbouring regions through molecular collisions and vibrations (and, between separated bodies, by electromagnetic radiation). These exchanges happen in **both directions** all the time.

- In the hotter region the molecules have a greater **mean kinetic energy**. On average, in collisions at the boundary, they give more energy to the cooler region's molecules than they receive.
- The **net** transfer is therefore from hot to cold, until the mean kinetic energies are equal.
- At **equal temperatures**, energy still crosses the boundary in both directions, but at equal rates. The net transfer is zero.

So thermal equilibrium is a **dynamic** state, not a state where nothing happens. Mean kinetic energy per molecule is linked precisely to thermodynamic temperature in the [Kinetic theory of gases guide](/resources/cambridge-a-level-physics-9702-a-kinetic-theory-of-gases/).

## What thermal equilibrium means, and what it does not

**Thermal equilibrium**: two regions are in thermal equilibrium when there is **no net transfer of thermal energy** between them. This is the case exactly when they are at the **same temperature**.

It does **not** mean:

- that the two regions contain the same internal energy (a swimming pool and a cup of water at 25 °C are in equilibrium, but the pool holds vastly more energy)
- that energy has stopped moving between them
- that the two materials feel equally hot or cold to touch (a metal bench and a wooden bench in the same shade are at the same temperature; the metal feels colder because it conducts energy away from your hand faster)

## Why thermometers work

A thermometer can only ever report **its own** temperature. It is useful because of a simple consequence of the equilibrium idea: if body A is in thermal equilibrium with a thermometer, and body B is also in equilibrium with the same thermometer reading the same value, then A and B are at the same temperature and would be in equilibrium with each other. (This is sometimes called the zeroth law of thermodynamics.)

Two practical points follow.

- **Wait for equilibrium.** The reading means nothing until net energy transfer between thermometer and object has stopped.
- **The thermometer must not disturb what it measures.** To reach equilibrium it absorbs (or gives up) energy, which changes the object's temperature. A thermometer that needs little energy to change its temperature, used in a large sample, disturbs the sample least.

## Calculating the equilibrium temperature

When two bodies are placed in contact and isolated from their surroundings, energy is conserved: **energy lost by the hotter body = energy gained by the cooler body**, and both end at the same final temperature θ. Using Q = mcΔθ from 14.3 for each:

```
m₁c₁(θ₁ – θ) = m₂c₂(θ – θ₂)        (θ₁ hotter, θ₂ cooler)
```

The final temperature must lie between θ₁ and θ₂. If your answer does not, a sign has gone wrong.

## Worked example 1: a hot block in water

A copper block of mass 0.20 kg at 95 °C is placed in 0.30 kg of water at 20 °C in an insulated container of negligible heat capacity. The specific heat capacities of copper and water are 385 J kg⁻¹ K⁻¹ and 4200 J kg⁻¹ K⁻¹. Calculate the final temperature.

```
energy lost by copper = energy gained by water
0.20 × 385 × (95 – θ) = 0.30 × 4200 × (θ – 20)
77(95 – θ) = 1260(θ – 20)
7315 – 77θ = 1260θ – 25 200
1337θ = 32 515
θ = 24 °C
```

*Annotation.* The final temperature is much closer to the water's starting temperature because the water needs far more energy per kelvin (1260 J K⁻¹ compared with 77 J K⁻¹). The assumptions, no energy exchanged with the surroundings or the container, should be stated if the question asks for them; in a real experiment the final temperature would be slightly lower.

## Worked example 2: a thermometer that disturbs the sample

A glass thermometer at room temperature, 20 °C, is placed in 5.0 g of water at 60 °C. The part of the thermometer that must warm up is equivalent to 10 g of glass of specific heat capacity 840 J kg⁻¹ K⁻¹. Find the reading once equilibrium is reached, assuming no other energy losses.

```
0.0050 × 4200 × (60 – θ) = 0.010 × 840 × (θ – 20)
21(60 – θ) = 8.4(θ – 20)
1260 – 21θ = 8.4θ – 168
θ = 1428 / 29.4 = 49 °C
```

*Annotation.* The thermometer reads 49 °C for water that was at 60 °C. It has correctly reached equilibrium with the water, but in doing so it cooled the water by 11 K. With 200 g of water instead, the same calculation gives about 59.6 °C: the error shrinks because the sample needs far more energy per kelvin than the thermometer. This is the reason for choosing a thermometer that needs little energy to change its temperature when measuring a small sample.

## Common mistakes

- **Saying energy flows from the body with more energy** to the one with less. The direction depends on temperature only.
- **Defining thermal equilibrium as "no energy transfer".** The mark is for no **net** transfer, at equal temperatures.
- **Using "heat" and "temperature" interchangeably.** Temperature is a property of a body; thermal energy transferred is a process quantity.
- **Getting a final temperature outside the range** of the two starting temperatures in a mixing calculation.
- **Reading a thermometer before equilibrium** is reached, or ignoring the energy the thermometer absorbs.
- **Saying a metal object "is colder"** than a wooden one in the same room because it feels colder.

## Exam technique for the command words

- **State** (direction of energy transfer): from higher temperature to lower temperature; mention net.
- **Explain** (thermal equilibrium): same temperature, so no net transfer of thermal energy; energy still passes both ways at equal rates.
- **Calculate** or **determine** (final temperature): write energy lost = energy gained, bracket each temperature difference so both sides are positive, solve and check the answer lies between the starting values.
- **Suggest** (why a measured final temperature differs): energy exchanged with the surroundings or the container, or energy absorbed by the thermometer.

## Related resources

- [Temperature study guide](/resources/a-physics-temperature/) — the whole of Topic 14
- [Thermal equilibrium revision notes](/resources/cambridge-a-level-physics-9702-a-thermal-equilibrium-revision-notes/)
- [Thermal equilibrium practice questions](/resources/cambridge-a-level-physics-9702-a-thermal-equilibrium-practice/)
- [Temperature scales](/resources/cambridge-a-level-physics-9702-a-temperature-scales/) — subtopic 14.2
- [Specific heat capacity and specific latent heat](/resources/cambridge-a-level-physics-9702-a-specific-heat-capacity-and-specific-latent-heat/) — subtopic 14.3

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
