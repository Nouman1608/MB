---
title: "Cambridge A Level Chemistry (9701): Acids and bases"
resourceType: "study-guides"
subject: "chemistry"
level: ["a-levels"]
topic: "Equilibria"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9701"]
syllabusSeries: "2025-2027"
stage: "A"
order: 25.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-equilibria"
    subtopic: "a-acids-and-bases"
description: "Conjugate pairs, pH, Ka, pKa and Kw, weak-acid and buffer calculations, how buffers work, and Ksp with the common ion effect for Cambridge 9701, subtopic 25.1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **25.1, Acids and bases**, from Topic 25, Equilibria, of Cambridge
International AS & A Level Chemistry 9701, 2025–2027 series. It is A Level content. The broader
[Acids, Bases, Buffers and Partition Coefficients guide](/resources/a-acids-bases-buffers-and-partition-coefficients/)
works the standard single-step calculations. This page concentrates on the multi-step problems
that cause most difficulty: finding Ka from a measured pH, buffers made by partial
neutralisation, buffers after acid is added, and deciding whether a precipitate forms.

## What the syllabus asks for

Learning outcomes 1 to 10 of 25.1 require you to:

- understand and use **conjugate acid** and **conjugate base**, and identify conjugate
  acid–base pairs in reactions;
- define **pH, Ka, pKa and Kw** mathematically and use them (Kb and Kw = Ka × Kb are **not**
  tested);
- calculate [H⁺(aq)] and pH for **strong acids, strong alkalis and weak acids**;
- define a **buffer solution**, explain how one is made and how it controls pH using equations,
  and describe uses including the role of **HCO₃⁻ in blood**;
- calculate the **pH of buffer solutions**;
- understand **Ksp**, write Ksp expressions, calculate Ksp from concentrations and vice versa;
- use the **common ion effect** qualitatively and in calculations.

## Conjugate pairs beyond the obvious

A conjugate pair differs by **one proton**. Some species can be either acid or base, so the pair
depends on the reaction:

- HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺: HCO₃⁻ is an acid; its conjugate base is CO₃²⁻.
- HCO₃⁻ + H₃O⁺ ⇌ H₂CO₃ + H₂O: HCO₃⁻ is a base; its conjugate acid is H₂CO₃.
- In HNO₃ + H₂SO₄ ⇌ H₂NO₃⁺ + HSO₄⁻, nitric acid acts as a **base**, accepting a proton from the
  stronger acid. The pairs are H₂SO₄/HSO₄⁻ and H₂NO₃⁺/HNO₃.

To identify pairs, find the species that loses H⁺ and follow it to the product side; do the
same for the species that gains H⁺.

## The four definitions as equations

| Quantity | Definition | Rearranged |
|---|---|---|
| pH | −log₁₀[H⁺(aq)] | [H⁺] = 10^(−pH) |
| Ka | [H⁺][A⁻] ÷ [HA] for HA ⇌ H⁺ + A⁻ | — |
| pKa | −log₁₀ Ka | Ka = 10^(−pKa) |
| Kw | [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K | [H⁺] = Kw ÷ [OH⁻] |

## Strong alkalis: count the hydroxide ions

**Worked example 1.** Calculate the pH of 0.0250 mol dm⁻³ barium hydroxide, Ba(OH)₂.

Ba(OH)₂ → Ba²⁺ + 2OH⁻, so [OH⁻] = 2 × 0.0250 = 0.0500 mol dm⁻³

[H⁺] = 1.00 × 10⁻¹⁴ ÷ 0.0500 = 2.00 × 10⁻¹³ mol dm⁻³

pH = **12.70**

The doubling step is where marks go: Ba(OH)₂ and Ca(OH)₂ release two OH⁻ per formula unit.

## Weak acids: working backwards from pH

The standard weak-acid result, [H⁺] = √(Ka × [HA]), relies on two approximations:

1. [H⁺] = [A⁻], because ionisation of water is negligible;
2. [HA] at equilibrium ≈ initial concentration, because only a small fraction dissociates.

**Worked example 2.** A 0.0200 mol dm⁻³ solution of benzoic acid has pH 2.96. Calculate Ka and
pKa.

[H⁺] = 10⁻²·⁹⁶ = 1.10 × 10⁻³ mol dm⁻³

Ka = [H⁺]² ÷ [HA] = (1.10 × 10⁻³)² ÷ 0.0200 = **6.0 × 10⁻⁵ mol dm⁻³**

pKa = −log₁₀(6.0 × 10⁻⁵) = **4.22**

About 5% of the acid has dissociated here (1.10 × 10⁻³ ÷ 0.0200), so the second approximation is
reasonable but not perfect. Examiners expect you to state the approximations when asked, not
to correct for them.

## Buffer solutions

**Definition:** a solution that **resists changes in pH** when **small amounts** of acid or
alkali are added.

**Making a buffer:** either mix a weak acid with a salt of its conjugate base, or add a strong
base to an excess of weak acid so that some of the acid is converted to its conjugate base.

**How it controls pH:** the buffer holds large amounts of both HA and A⁻ in the equilibrium
HA ⇌ H⁺ + A⁻.

- Added H⁺ is removed: A⁻ + H⁺ → HA
- Added OH⁻ is removed: HA + OH⁻ → A⁻ + H₂O

Because both reservoirs are large compared with the amount added, the ratio [HA] : [A⁻]
changes only slightly, so [H⁺] = Ka × [HA] ÷ [A⁻] barely changes.

**Blood:** the H₂CO₃/HCO₃⁻ pair keeps blood pH close to 7.4. Extra H⁺ (for example from lactic
acid during exercise) is removed by HCO₃⁻ + H⁺ → H₂CO₃; extra OH⁻ is removed by
H₂CO₃ + OH⁻ → HCO₃⁻ + H₂O. Other uses include calibrating pH meters and keeping a constant pH
for reactions that are pH-sensitive, such as those catalysed by enzymes.

### Worked example 3: a buffer from partial neutralisation

40.0 cm³ of 0.150 mol dm⁻³ methanoic acid (Ka = 1.6 × 10⁻⁴ mol dm⁻³, value supplied) is mixed
with 20.0 cm³ of 0.100 mol dm⁻³ NaOH.

moles HCOOH at start = 0.0400 × 0.150 = 6.00 × 10⁻³ mol

moles OH⁻ added = 0.0200 × 0.100 = 2.00 × 10⁻³ mol

After reaction: HCOOH = 4.00 × 10⁻³ mol; HCOO⁻ = 2.00 × 10⁻³ mol

Both are in the same 60.0 cm³, so use the mole ratio:

[H⁺] = 1.6 × 10⁻⁴ × (4.00 ÷ 2.00) = 3.2 × 10⁻⁴ mol dm⁻³; pH = **3.49**

### Worked example 4: adding acid to a buffer

1.00 dm³ of buffer contains 0.0500 mol CH₃COOH and 0.0500 mol CH₃COO⁻ (Ka = 1.8 × 10⁻⁵,
supplied). 1.00 × 10⁻³ mol HCl is added.

Before: pH = pKa = **4.74**

After: CH₃COO⁻ + H⁺ → CH₃COOH, so HA = 0.0510 mol and A⁻ = 0.0490 mol

[H⁺] = 1.8 × 10⁻⁵ × (0.0510 ÷ 0.0490) = 1.87 × 10⁻⁵; pH = **4.73**

The pH falls by about 0.02. The same acid added to 1.00 dm³ of pure water would give pH 3.00, a
fall of 4 units.

## Solubility product and precipitation

Ksp is the equilibrium constant for a sparingly soluble ionic solid in contact with its
saturated solution, each ion concentration raised to the power of its coefficient.

**Worked example 5: Ksp from solubility.** The solubility of silver chromate, Ag₂CrO₄, is
6.5 × 10⁻⁵ mol dm⁻³ *(value supplied)*.

Ag₂CrO₄(s) ⇌ 2Ag⁺(aq) + CrO₄²⁻(aq), so [Ag⁺] = 2s and [CrO₄²⁻] = s

Ksp = [Ag⁺]²[CrO₄²⁻] = (2s)² × s = 4s³ = 4 × (6.5 × 10⁻⁵)³ = **1.1 × 10⁻¹² mol³ dm⁻⁹**

**Will a precipitate form?** Equal volumes of 2.0 × 10⁻⁴ mol dm⁻³ BaCl₂ and 2.0 × 10⁻⁴ mol dm⁻³
Na₂SO₄ are mixed. Ksp(BaSO₄) = 1.1 × 10⁻¹⁰ mol² dm⁻⁶ *(supplied)*.

Mixing halves each concentration: [Ba²⁺] = [SO₄²⁻] = 1.0 × 10⁻⁴ mol dm⁻³

Ionic product = 1.0 × 10⁻⁸, which is **greater than** Ksp, so barium sulfate precipitates.

**Common ion.** In 0.0100 mol dm⁻³ Na₂SO₄, the solubility of BaSO₄ is
[Ba²⁺] = 1.1 × 10⁻¹⁰ ÷ 0.0100 = **1.1 × 10⁻⁸ mol dm⁻³**: the extra sulfate shifts
BaSO₄(s) ⇌ Ba²⁺ + SO₄²⁻ to the left. Ksp itself is unchanged.

## Common mistakes

- Using the concentration of Ba(OH)₂ as [OH⁻] without doubling.
- Treating a weak acid as fully dissociated, or a strong acid with the Ka formula.
- In buffer problems, using initial moles of acid instead of moles left after neutralisation.
- Forgetting to halve concentrations when two solutions of equal volume are mixed.
- Leaving out the power in Ksp, or squaring the solubility instead of 2s.
- Saying a common ion changes Ksp.

## Exam technique

- **Define**: give the mathematical definition for pH, Ka, pKa and Kw; define a buffer in words.
- **Explain** buffer action: one equation for added H⁺, one for added OH⁻, then say the ratio
  of HA to A⁻ hardly changes.
- **Calculate**: show moles before and after any reaction, then concentrations or ratios, then
  pH to two decimal places.
- **State the assumptions** for weak acid calculations when asked.
- **Deduce** precipitation: compare the ionic product after mixing with Ksp, explicitly.

## Where next

Condense this page with the
[Acids and bases revision notes](/resources/cambridge-a-level-chemistry-9701-a-acids-and-bases-revision-notes/)
and test it with the
[Acids and bases practice questions](/resources/cambridge-a-level-chemistry-9701-a-acids-and-bases-practice/).
The other subtopic of Topic 25 is covered in the
[Partition coefficients study guide](/resources/cambridge-a-level-chemistry-9701-a-partition-coefficients/).

Written against Cambridge International AS & A Level Chemistry 9701, 2025–2027 series.
Always check the current syllabus for your examination year.
