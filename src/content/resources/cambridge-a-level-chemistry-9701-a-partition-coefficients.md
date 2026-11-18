---
title: "Cambridge A Level Chemistry (9701): Partition coefficients"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Equilibria"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 25.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-equilibria"
    subtopic: "a-partition-coefficients"
description: "What Kpc means, finding it from titration data, extraction calculations with unequal volumes and repeated portions, and polarity effects for Cambridge 9701."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **25.2, Partition coefficients**, from Topic 25, Equilibria, of
Cambridge International AS & A Level Chemistry 9701, 2025–2027 series. It is A Level content.
The broader
[Acids, Bases, Buffers and Partition Coefficients guide](/resources/a-acids-bases-buffers-and-partition-coefficients/)
works one equal-volume example; this page shows how to obtain Kpc from experimental data, how
to handle unequal volumes and repeated extractions, how to work backwards to a required solvent
volume, and how to argue from polarity.

## What the syllabus asks for

The three learning outcomes for 25.2 are:

1. state what is meant by the term **partition coefficient, Kpc**;
2. **calculate and use** a partition coefficient for a system in which the solute is in the
   **same physical state** in the two solvents;
3. understand the factors affecting the numerical value of Kpc **in terms of the polarities of
   the solute and the solvents** used.

## The definition and why each part matters

**Partition coefficient, Kpc:** the ratio of the concentrations of a solute in two immiscible
solvents **at equilibrium**, at a **stated temperature**.

For a solute X distributed between an organic solvent and water:

X(aq) ⇌ X(org)    Kpc = [X(org)] ÷ [X(aq)]

Each phrase carries meaning:

- **Immiscible**: the solvents form two separate layers, so each concentration can be measured.
- **At equilibrium**: the mixture must be shaken until no further transfer occurs; Kpc is an
  equilibrium constant, like Kc.
- **Stated temperature**: like any equilibrium constant, Kpc changes with temperature.
- **Same physical state**: the solute must be dissolved as the same species in both layers.
  If, for example, a carboxylic acid forms hydrogen-bonded pairs (dimers) in a non-polar
  solvent but stays as single molecules in water, the simple ratio is no longer constant.

Kpc has **no units**, because it is a ratio of two concentrations in the same units. You must
always say **which solvent is on top**: Kpc(hexane/water) = 50 means the same as
Kpc(water/hexane) = 0.020.

## Calculation 1: finding Kpc from titration data

*Invented data for illustration.* Iodine is shaken with 50 cm³ of hexane and 50 cm³ of water
until equilibrium is reached. The layers are separated and each is titrated with sodium
thiosulfate (I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻).

- 10.0 cm³ of the hexane layer needs 18.40 cm³ of 0.0500 mol dm⁻³ S₂O₃²⁻.
- 25.0 cm³ of the aqueous layer needs 4.60 cm³ of 0.0100 mol dm⁻³ S₂O₃²⁻.

Hexane layer: mol S₂O₃²⁻ = 0.01840 × 0.0500 = 9.20 × 10⁻⁴; mol I₂ = 4.60 × 10⁻⁴;
[I₂] = 4.60 × 10⁻⁴ ÷ 0.0100 = 0.0460 mol dm⁻³

Aqueous layer: mol S₂O₃²⁻ = 0.00460 × 0.0100 = 4.60 × 10⁻⁵; mol I₂ = 2.30 × 10⁻⁵;
[I₂] = 2.30 × 10⁻⁵ ÷ 0.0250 = 9.20 × 10⁻⁴ mol dm⁻³

Kpc(hexane/water) = 0.0460 ÷ 9.20 × 10⁻⁴ = **50.0**

Notice that the volumes of the two layers used in the shaking (50 cm³ each) do not appear:
only the concentrations measured in the samples matter.

## Calculation 2: a single extraction with unequal volumes

2.00 g of compound Y is dissolved in 100 cm³ of water and shaken with 25.0 cm³ of ether.
Kpc(ether/water) = 12.0. Calculate the mass extracted.

Let x g move into the ether. Concentration in ether = x ÷ 25.0; in water = (2.00 − x) ÷ 100.

12.0 = (x ÷ 25.0) ÷ ((2.00 − x) ÷ 100)

12.0 = 4x ÷ (2.00 − x)

24.0 − 12.0x = 4x, so 16.0x = 24.0 and **x = 1.50 g** (75% extracted)

Masses can be used in place of moles because the molar mass cancels from top and bottom.
Volumes do **not** cancel unless they are equal; leaving them out is the most common error.

## Calculation 3: two smaller portions

The same 25.0 cm³ of ether is used as two portions of 12.5 cm³.

For each extraction with m g in the water: 12.0 = (x ÷ 12.5) ÷ ((m − x) ÷ 100), giving
8x = 12.0(m − x) and so x = 0.600m.

- First portion: x = 0.600 × 2.00 = 1.20 g; 0.80 g stays in the water.
- Second portion: x = 0.600 × 0.80 = 0.48 g.

Total extracted = 1.20 + 0.48 = **1.68 g** (84%), compared with 1.50 g from a single portion.
Each fresh portion starts with no solute in it, so it takes another fixed fraction of what is
left; in total, more is removed.

## Calculation 4: working backwards to a solvent volume

What volume of ether would extract 90% of Y from 100 cm³ of water in one step?

With 90% in the ether and 10% left: 12.0 = (0.90m ÷ V) ÷ (0.10m ÷ 100)

12.0 = 900 ÷ V, so **V = 75.0 cm³**

Comparing with Calculation 3 shows why chemists usually choose several small extractions:
84% from 25 cm³ in two portions, against 75 cm³ for 90% in one.

## Polarity and the size of Kpc

A solute dissolves best in the solvent whose intermolecular forces most resemble its own, so
Kpc depends on how the **polarity of the solute** compares with the **polarities of the two
solvents**.

| Solute | Forces it can form | Favoured solvent | Kpc(hexane/water) |
|---|---|---|---|
| iodine, I₂ | instantaneous dipole–induced dipole only | hexane | much greater than 1 |
| a hydrocarbon such as octane | instantaneous dipole–induced dipole only | hexane | very large |
| ethanol | hydrogen bonds with water | water | less than 1 |
| ammonia | hydrogen bonds with water | water | very small |
| an ionic salt | ion–dipole attractions with water | water | close to zero |

Two further points examiners test:

- **Changing the organic solvent changes Kpc.** If hexane is replaced by a more polar organic
  solvent, a polar solute partitions into it more, so Kpc(organic/water) for that solute
  increases, because the solute can now form stronger interactions with the organic layer.
- **Molecular structure within a series.** For alcohols, a longer hydrocarbon chain makes the
  molecule less polar overall, so Kpc(organic/water) increases along the series even though the
  –OH group can still hydrogen bond with water.

## Common mistakes

- Defining Kpc without "at equilibrium" or "immiscible solvents".
- Giving Kpc units.
- Not stating which solvent is on the top of the ratio, or inverting it mid-calculation.
- Ignoring unequal volumes, or using the volumes of the shaken layers when the concentrations
  come from titrated samples.
- Forgetting the 1 : 2 ratio of I₂ to S₂O₃²⁻ in iodine titrations.
- Explaining polarity effects with "like dissolves like" alone, without naming the
  intermolecular forces.

## Exam technique

- **State** what Kpc means: concentration ratio, solute in two immiscible solvents, at
  equilibrium, at constant temperature.
- **Calculate**: define x clearly, write each concentration with its own volume, then solve
  the equation and give the mass or percentage asked for.
- **Use** Kpc for repeated extractions: show each step separately; the remaining mass becomes
  the new starting mass.
- **Explain** the size of Kpc: compare the solute's polarity and its possible intermolecular
  forces with each solvent.
- **Suggest** a change in Kpc when the solvent changes, with a reason based on polarity.

## Where next

Condense this page with the
[Partition coefficients revision notes](/resources/cambridge-a-level-chemistry-9701-a-partition-coefficients-revision-notes/)
and test it with the
[Partition coefficients practice questions](/resources/cambridge-a-level-chemistry-9701-a-partition-coefficients-practice/).
For the rest of Topic 25, see the
[Acids and bases study guide](/resources/cambridge-a-level-chemistry-9701-a-acids-and-bases/).

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series.
Always check the current syllabus for your examination year.
