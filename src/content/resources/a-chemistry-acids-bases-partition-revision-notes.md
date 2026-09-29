---
title: "A Level Chemistry: Acids, Bases, Buffers and Partition Coefficients — Revision Notes"
resourceType: "revision-notes"
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
  - qualification: "a-level"
    topic: "a-equilibria"
    subtopic: "a-partition-coefficients"
description: "Condensed recall notes on conjugate acid–base pairs, pH, Ka, pKa and Kw calculations, buffer solutions, solubility product and the common ion effect, and partition coefficients for Cambridge A Level Chemistry 9701 (2025-2027)."
author: "marlbridge-academic-team"
reviewer: "nouman-ahmed"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

Condensed for revision. For the full explanation, use the
[Acids, Bases, Buffers and Partition Coefficients study guide](/resources/a-acids-bases-buffers-and-partition-coefficients/),
then test yourself with the [practice questions](/resources/a-equilibria-acids-buffers-practice/).
For Brønsted–Lowry acids, strong and weak acids, and neutralisation at AS Level, see the
[AS Acids and Bases revision notes](/resources/as-chem-acids-bases-revision-notes/).

**Syllabus:** Cambridge International AS & A Level Chemistry 9701, 2025–2027, **A Level** content:
subtopics 25.1 Acids and bases and 25.2 Partition coefficients.

## Acids and bases (25.1)

### Conjugate acid–base pairs

- A Brønsted–Lowry **acid** is a proton (H⁺) donor; a **base** is a proton acceptor.
- When an acid donates H⁺, what remains is its **conjugate base**. When a base accepts H⁺, it becomes its
  **conjugate acid**.
- A **conjugate acid–base pair** is two species that differ by **one H⁺**.

| Reaction | Acid / conjugate base | Base / conjugate acid |
|---|---|---|
| CH₃COOH + H₂O ⇌ CH₃COO⁻ + H₃O⁺ | CH₃COOH / CH₃COO⁻ | H₂O / H₃O⁺ |
| NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ | H₂O / OH⁻ | NH₃ / NH₄⁺ |
| HCl + NH₃ → NH₄⁺ + Cl⁻ | HCl / Cl⁻ | NH₃ / NH₄⁺ |

Water can act as an acid or as a base, depending on what it reacts with.

### Definitions: pH, Ka, pKa and Kw

    pH  = –log₁₀[H⁺]              so  [H⁺] = 10^(–pH)
    Ka  = [H⁺][A⁻] / [HA]          for HA ⇌ H⁺ + A⁻        units: mol dm⁻³
    pKa = –log₁₀ Ka               so  Ka = 10^(–pKa)
    Kw  = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴ mol² dm⁻⁶ at 298 K

- **Ka** is the acid dissociation constant: a **larger Ka** (a **smaller pKa**) means a **stronger** acid.
- In pure water at 298 K, [H⁺] = [OH⁻] = 1.00 × 10⁻⁷ mol dm⁻³, so pH = 7.00.
- Kb and the relationship Kw = Ka × Kb are **not** tested.

### Calculating [H⁺] and pH

| Type | Method |
|---|---|
| **Strong acid** (fully dissociated), e.g. HCl → H⁺ + Cl⁻ | [H⁺] = concentration of the acid |
| **Strong alkali** (fully dissociated), e.g. NaOH → Na⁺ + OH⁻ | find [OH⁻], then [H⁺] = Kw / [OH⁻] |
| **Weak acid** (partly dissociated) | [H⁺] = √(Ka × [HA]) |

**Strong acid:** 0.050 mol dm⁻³ HCl.

    [H⁺] = 0.050 mol dm⁻³      pH = –log(0.050) = 1.30

**Strong alkali:** 0.020 mol dm⁻³ NaOH. (0.010 mol dm⁻³ Ba(OH)₂ gives the same [OH⁻], because each
formula unit releases two OH⁻.)

    [OH⁻] = 0.020 mol dm⁻³
    [H⁺]  = 1.00 × 10⁻¹⁴ / 0.020 = 5.0 × 10⁻¹³ mol dm⁻³      pH = 12.30

**Weak acid:** 0.10 mol dm⁻³ ethanoic acid, Ka ≈ 1.7 × 10⁻⁵ mol dm⁻³ (approximate value at 298 K).
Two assumptions: [H⁺] = [CH₃COO⁻] (ionisation of water ignored), and [CH₃COOH] at equilibrium ≈ the
starting concentration (dissociation is very small).

    Ka = [H⁺]² / [CH₃COOH]
    [H⁺] = √(1.7 × 10⁻⁵ × 0.10) = √(1.7 × 10⁻⁶) = 1.304 × 10⁻³ mol dm⁻³
    pH = –log(1.304 × 10⁻³) = 2.88      (keep the unrounded [H⁺] for the log)
    pKa = –log(1.7 × 10⁻⁵) = 4.77

**Ka from pH** *(illustrative values)*: a 0.050 mol dm⁻³ solution of a weak acid HA has pH 3.00.

    [H⁺] = 10⁻³·⁰⁰ = 1.0 × 10⁻³ mol dm⁻³
    Ka = (1.0 × 10⁻³)² / 0.050 = 2.0 × 10⁻⁵ mol dm⁻³

### Buffer solutions

**Definition:** a buffer solution is a solution that **resists changes in pH** when **small amounts** of
acid or alkali are added.

**How a buffer is made:**

- a **weak acid and its conjugate base**, e.g. ethanoic acid with sodium ethanoate; or by adding
  **less than** the neutralising amount of NaOH to excess ethanoic acid (partial neutralisation);
- a **weak base and its conjugate acid**, e.g. ammonia with ammonium chloride. Added H⁺ is removed by
  NH₃ + H⁺ → NH₄⁺; added OH⁻ is removed by NH₄⁺ + OH⁻ → NH₃ + H₂O.

**How the ethanoic acid / ethanoate buffer controls pH:** the buffer contains **large reservoirs** of
both CH₃COOH and CH₃COO⁻.

    CH₃COOH ⇌ CH₃COO⁻ + H⁺
    added H⁺:   CH₃COO⁻ + H⁺  → CH₃COOH
    added OH⁻:  CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O

Added H⁺ or OH⁻ is removed, and because the reservoirs are large the ratio [CH₃COOH] : [CH₃COO⁻] hardly
changes, so [H⁺] and the pH hardly change.

**Uses of buffers:**

- **Blood** is kept close to pH 7.4 by the carbonic acid / hydrogencarbonate buffer:

      CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻
      added H⁺:   HCO₃⁻ + H⁺  → H₂CO₃
      added OH⁻:  H₂CO₃ + OH⁻ → HCO₃⁻ + H₂O

  **HCO₃⁻** removes excess H⁺; H₂CO₃ removes excess OH⁻. Enzymes and other proteins in the body work
  only in a narrow pH range.
- Other uses: calibrating pH meters; keeping the pH constant for enzyme-catalysed reactions and cell
  cultures; shampoos and some foods and medicines.

### Calculating the pH of a buffer

    [H⁺] = Ka × [HA] / [A⁻]         or   pH = pKa + log([A⁻] / [HA])

**Example:** 0.10 mol dm⁻³ ethanoic acid with 0.20 mol dm⁻³ sodium ethanoate; Ka ≈ 1.7 × 10⁻⁵ mol dm⁻³
(approximate).

    [H⁺] = 1.7 × 10⁻⁵ × 0.10 / 0.20 = 8.5 × 10⁻⁶ mol dm⁻³
    pH = –log(8.5 × 10⁻⁶) = 5.07

For a partial-neutralisation buffer, first work out the moles of HA left and A⁻ formed; the total
volume is the same for both, so you can use the mole ratio directly. When [HA] = [A⁻], pH = pKa.

### Solubility product, Ksp

**Definition:** Ksp is the **equilibrium constant** for a **sparingly soluble ionic compound** in a
**saturated solution**: the product of the concentrations of its ions, each raised to the power of its
coefficient in the equilibrium equation. The solid is not included.

| Equilibrium | Ksp expression | Units |
|---|---|---|
| AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq) | [Ag⁺][Cl⁻] | mol² dm⁻⁶ |
| CaF₂(s) ⇌ Ca²⁺(aq) + 2F⁻(aq) | [Ca²⁺][F⁻]² | mol³ dm⁻⁹ |
| PbI₂(s) ⇌ Pb²⁺(aq) + 2I⁻(aq) | [Pb²⁺][I⁻]² | mol³ dm⁻⁹ |

**Ksp from solubility** *(illustrative values)*: the solubility of AgCl is 1.34 × 10⁻⁵ mol dm⁻³.

    [Ag⁺] = [Cl⁻] = 1.34 × 10⁻⁵ mol dm⁻³
    Ksp = (1.34 × 10⁻⁵)² = 1.8 × 10⁻¹⁰ mol² dm⁻⁶

**Solubility from Ksp** *(illustrative values)*: Ksp of CaF₂ = 3.2 × 10⁻¹¹ mol³ dm⁻⁹. Let the solubility
be s, so [Ca²⁺] = s and [F⁻] = 2s.

    Ksp = s × (2s)² = 4s³ = 3.2 × 10⁻¹¹
    s³ = 8.0 × 10⁻¹²        s = 2.0 × 10⁻⁴ mol dm⁻³

**Will a precipitate form?** Calculate the ionic product using the concentrations after mixing. If it is
**greater than Ksp**, a precipitate forms until the product falls to Ksp.

### The common ion effect

A sparingly soluble salt is **less soluble** in a solution that already contains one of its ions (a
**common ion**). The added ion shifts the position of equilibrium, e.g. AgCl(s) ⇌ Ag⁺ + Cl⁻, to the
**left**, so more solid remains undissolved. Ksp itself does not change (at constant temperature).

**Calculation** *(illustrative values)*: solubility of AgCl (Ksp = 1.8 × 10⁻¹⁰ mol² dm⁻⁶) in
0.10 mol dm⁻³ NaCl. The Cl⁻ from the dissolving AgCl is negligible compared with 0.10 mol dm⁻³.

    [Ag⁺] = Ksp / [Cl⁻] = 1.8 × 10⁻¹⁰ / 0.10 = 1.8 × 10⁻⁹ mol dm⁻³

Compare the solubility in pure water: √(1.8 × 10⁻¹⁰) = 1.3 × 10⁻⁵ mol dm⁻³, several thousand times greater.

## Partition coefficients (25.2)

**Definition:** the partition coefficient, **Kpc**, is the **ratio of the concentrations of a solute in
two immiscible solvents** when an equilibrium has been established, at a stated temperature. The solute
must be in the **same physical state** in both solvents.

    Kpc = [X in solvent 1] / [X in solvent 2]          (no units)

State which solvent is on top of the ratio; Kpc(organic/water) is the reciprocal of Kpc(water/organic).

**Using Kpc** *(illustrative values)*: 1.00 g of X in 100 cm³ of water is shaken with 50 cm³ of an
organic solvent. Kpc(organic/water) = 4.0. Let x g of X move into the organic layer.

    Kpc = (x / 50) / ((1.00 – x) / 100) = 4.0
    2x / (1.00 – x) = 4.0     →   6x = 4.00     →   x = 0.67 g extracted; 0.33 g stays in the water

Using the same 50 cm³ as **two 25 cm³ portions**: each time (x / 25) / ((m – x) / 100) = 4.0 gives
x = m / 2, so 0.50 g then 0.25 g is extracted, a total of **0.75 g**. Several small extractions remove
more solute than one large one.

**Factors affecting the value of Kpc (polarity):**

| Solute | Dissolves better in | Kpc(organic/water) |
|---|---|---|
| non-polar, or weakly polar (e.g. I₂, hydrocarbons) | the **non-polar** organic solvent ("like dissolves like") | **large** (much greater than 1) |
| polar, or able to form hydrogen bonds with water (e.g. NH₃, small alcohols) | **water** | **small** |

The more similar the polarity of the solute is to that of a solvent, the more of the solute is found in
that solvent. A more polar organic solvent will also take up a polar solute better, changing the value.

## Exam traps

- A conjugate pair differs by **exactly one H⁺**: H₂SO₄ and SO₄²⁻ are **not** a conjugate pair.
- For a strong alkali, never write pH = –log[OH⁻]; use Kw to find [H⁺] first.
- For a weak acid, [H⁺] is **not** equal to the acid concentration; use √(Ka × [HA]) and state the
  assumptions.
- In a buffer calculation, [A⁻] comes from the **salt** (or the NaOH added), not from the acid's own
  dissociation.
- Always write the **units** of Ka, Kw and Ksp; Ksp units depend on the formula (mol² dm⁻⁶ for AgCl,
  mol³ dm⁻⁹ for CaF₂).
- In Ksp for CaF₂, **square** [F⁻] and remember [F⁻] = 2s, so Ksp = 4s³.
- The common ion **lowers solubility**; it does **not** change Ksp.
- Kpc has **no units**, and you must say which solvent is on top of the ratio.

## Self-test

1. Identify the two conjugate acid–base pairs in NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺.
2. Calculate the pH of 0.010 mol dm⁻³ nitric acid.
3. Calculate the pH of 0.050 mol dm⁻³ KOH (Kw = 1.00 × 10⁻¹⁴ mol² dm⁻⁶).
4. *(Illustrative values.)* A weak acid HA has Ka = 1.0 × 10⁻⁴ mol dm⁻³. Calculate the pH of a
   0.040 mol dm⁻³ solution.
5. Define a buffer solution.
6. Using an equation, explain how HCO₃⁻ helps to control the pH of blood when H⁺ ions are added.
7. 50.0 cm³ of 0.200 mol dm⁻³ ethanoic acid is mixed with 25.0 cm³ of 0.200 mol dm⁻³ NaOH. Using
   Ka ≈ 1.7 × 10⁻⁵ mol dm⁻³, calculate the pH of the buffer formed.
8. Write the Ksp expression, with units, for lead(II) iodide, PbI₂.
9. *(Illustrative values.)* Ksp of CaF₂ = 3.2 × 10⁻¹¹ mol³ dm⁻⁹. Calculate the solubility of CaF₂ in
   0.10 mol dm⁻³ NaF.
10. *(Illustrative values.)* At equilibrium, a solute has concentration 0.24 mol dm⁻³ in hexane and
    0.030 mol dm⁻³ in water. Calculate Kpc(hexane/water) and state what it suggests about the solute.

**Answers:**

1. NH₄⁺ / NH₃ (acid / conjugate base) and H₃O⁺ / H₂O (conjugate acid / base).
2. [H⁺] = 0.010 mol dm⁻³; pH = 2.00.
3. [H⁺] = 1.00 × 10⁻¹⁴ / 0.050 = 2.0 × 10⁻¹³ mol dm⁻³; pH = 12.70.
4. [H⁺] = √(1.0 × 10⁻⁴ × 0.040) = √(4.0 × 10⁻⁶) = 2.0 × 10⁻³ mol dm⁻³; pH = 2.70.
5. A solution that resists changes in pH when small amounts of acid or alkali are added.
6. HCO₃⁻ + H⁺ → H₂CO₃. The added H⁺ is removed by the large reservoir of HCO₃⁻, so the pH hardly
   changes.
7. Acid: 0.0100 mol; NaOH: 0.00500 mol. After reaction: 0.00500 mol CH₃COOH and 0.00500 mol CH₃COO⁻,
   so [HA] = [A⁻] and pH = pKa = –log(1.7 × 10⁻⁵) = 4.77.
8. Ksp = [Pb²⁺][I⁻]²; units mol³ dm⁻⁹.
9. [F⁻] ≈ 0.10 mol dm⁻³; solubility = [Ca²⁺] = 3.2 × 10⁻¹¹ / (0.10)² = 3.2 × 10⁻⁹ mol dm⁻³.
10. Kpc = 0.24 / 0.030 = 8.0 (no units). The solute is much more soluble in hexane, so it is non-polar
    or only weakly polar.

*These are original notes written for revision. Ka, Ksp and Kpc values marked illustrative or approximate
are not data-book values. Check the full syllabus wording in the
[official 9701 syllabus](https://www.cambridgeinternational.org/Images/664563-2025-2027-syllabus.pdf).*
