---
resourceId: "mb-ap-chem-3.13-study-guide"
title: "Beer-Lambert Law: Study Guide (Chemistry 3.13)"
description: "Learn how absorbance depends on molar absorptivity, path length and concentration, how to use a calibration curve, and how lab errors change a calculated concentration."
course: "chemistry"
unit: 3
topics: ["3.13"]
resourceType: "study-guide"
prerequisites:
  - "Molarity and dilution calculations (Topic 3.7)"
  - "Absorption of photons by molecules and ions (Topics 3.11 and 3.12)"
  - "Reading the gradient of a straight-line graph"
prerequisiteResources: ["mb-ap-chem-3.12-study-guide"]
learningObjectives:
  - "Use A = εbc to calculate absorbance, molar absorptivity, path length or concentration, with units"
  - "Explain why absorbance is proportional to path length and to concentration in terms of the number of absorbing particles in the light beam"
  - "Explain why a spectrophotometer is set to the wavelength of maximum absorbance"
  - "Build and use a calibration curve to find the concentration of an unknown solution, including one that was diluted"
  - "Identify sources of experimental error in an absorbance experiment and predict their effect on a calculated concentration"
skills: ["2", "3", "5"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Absorbance has no unit; ε in M⁻¹ cm⁻¹, b in cm, c in M (mol L⁻¹). Keep unrounded values until the final step"
related: ["mb-ap-chem-3.13-revision-notes", "mb-ap-chem-3.13-practice", "mb-ap-chem-3.13-checklist"]
next: "mb-ap-chem-3.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "The Beer-Lambert law is A = εbc: absorbance equals molar absorptivity × path length × concentration."
  - "ε measures how strongly one species absorbs light of one wavelength. It changes with the species and the wavelength, not with concentration."
  - "Path length and concentration both set how many absorbing particles the light meets, so A is proportional to each."
  - "With the same cuvette and wavelength, A is proportional to c alone: a calibration line through the origin with gradient εb."
  - "Set the instrument to the wavelength of maximum absorbance for the greatest sensitivity."
faqs:
  - question: "Does absorbance have a unit?"
    answer: "No. Absorbance is a ratio of light intensities, so it has no unit. That is why ε has the unit M⁻¹ cm⁻¹: the units of ε × b × c must cancel."
  - question: "Why do we use a blank?"
    answer: "The blank (cuvette plus solvent only) is set to A = 0. Any light lost to the cuvette walls or the solvent is then not counted, so the reading measures only the species you are studying."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What the law says

Shine light of one wavelength through a coloured solution and some of it is absorbed. In Topics 3.11 and 3.12 you saw why: a molecule or ion absorbs a photon when the photon's energy matches an electronic transition. Topic 3.13 asks a quantitative question: **how much** light is absorbed, and what controls it?

The answer is the **Beer-Lambert law** (often just called Beer's law):

> **A = εbc**

| Symbol | Name | Usual unit | What it describes |
|---|---|---|---|
| A | absorbance | none | how much light the sample absorbs (bigger A, less light gets through) |
| ε | molar absorptivity | M⁻¹ cm⁻¹ | how strongly this species absorbs light of this wavelength |
| b | path length | cm | the distance the light travels through the solution (the inside width of the cuvette) |
| c | concentration | M (mol L⁻¹) | the concentration of the absorbing species |

Check the units: M⁻¹ cm⁻¹ × cm × M leaves nothing, so A has no unit. If your units do not cancel, your setup is wrong.

The law is a direct proportion in each variable. Double the path length and A doubles. Double the concentration and A doubles. Switch to a species (or a wavelength) with twice the molar absorptivity and A doubles.

## Why b and c matter: counting particles in the beam

Picture the beam as a narrow column of light passing through the cuvette. Each absorbing particle in that column has a chance of absorbing a photon. What matters is **how many absorbing particles the light meets** on its way through.

- A **longer path** (larger b) puts more particles in the column, because the column is longer.
- A **higher concentration** (larger c) puts more particles in each centimetre of the column.

So b and c both scale the number of absorbing particles in the light path, and A follows that number. This gives a useful check: a 2.0 × 10⁻⁴ M solution in a 1.0 cm cuvette and a 1.0 × 10⁻⁴ M solution of the same species in a 2.0 cm cuvette have the same product bc (2.0 × 10⁻⁴ M cm). The light meets the same number of absorbing particles, so the absorbances are equal.

Notice what does **not** matter: the volume of solution in the cuvette. Pouring in more solution makes the liquid deeper, but the beam still crosses the same width at the same concentration.

## Molar absorptivity and the choice of wavelength

ε is a property of a **particular species at a particular wavelength**. A dye that looks purple absorbs some wavelengths strongly and others hardly at all, so its ε is large at some wavelengths and small at others. ε does **not** change when you change the concentration; it is a constant for that species, solvent and wavelength.

An **absorption spectrum** plots A against wavelength for one solution. Figure 1 shows the spectrum of a 5.00 × 10⁻⁵ M solution of an invented dye, Dye V, which we use again in Worked example 2.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="bl-spec-title bl-spec-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bl-spec-title">Absorption spectrum of Dye V with the wavelength of maximum absorbance marked</title>
<desc id="bl-spec-desc">A graph of absorbance from 0 to 0.7 against wavelength from 400 to 700 nanometres for a 5.00 times ten to the minus 5 molar solution of the invented Dye V. The curve is low, about 0.02, at 400 nm, rises to a single peak of absorbance 0.559 at 560 nm, then falls back to about 0.02 at 700 nm. A dashed vertical line marks the peak at 560 nm, labelled lambda max. Two open circles mark the curve at 500 nm, absorbance 0.18, and at 600 nm, absorbance 0.34.</desc>
<line x1="70" y1="230" x2="615" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="230" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="64" y="234">0</text><text x="64" y="176.9">0.2</text><text x="64" y="119.7">0.4</text><text x="64" y="62.6">0.6</text>
</g>
<g stroke="#1d2b44" stroke-width="1"><line x1="66" y1="172.9" x2="70" y2="172.9"/><line x1="66" y1="115.7" x2="70" y2="115.7"/><line x1="66" y1="58.6" x2="70" y2="58.6"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="248">400</text><text x="160" y="248">450</text><text x="250" y="248">500</text><text x="340" y="248">550</text><text x="430" y="248">600</text><text x="520" y="248">650</text><text x="610" y="248">700</text>
</g>
<text x="340" y="276" text-anchor="middle" font-size="14" fill="#1d2b44">Wavelength (nm)</text>
<text x="20" y="130" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 130)">Absorbance, A</text>
<path d="M70 224.3 L88 224.2 L106 224.0 L124 223.7 L142 223.0 L160 221.5 L178 218.6 L196 213.7 L214 205.7 L232 193.8 L250 177.4 L268 156.9 L286 133.5 L304 109.9 L322 89.4 L340 75.3 L358 70.3 L376 75.3 L394 89.4 L412 109.9 L430 133.5 L448 156.9 L466 177.4 L484 193.8 L502 205.7 L520 213.7 L538 218.6 L556 221.5 L574 223.0 L592 223.7 L610 224.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="358" y1="230" x2="358" y2="40" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="366" y="45" font-size="13" fill="#1d2b44">λmax = 560 nm, A = 0.559</text>
<circle cx="250" cy="177.4" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="240" y="170" text-anchor="end" font-size="12" fill="#1d2b44">500 nm: 0.18</text>
<circle cx="430" cy="133.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="440" y="128" font-size="12" fill="#1d2b44">600 nm: 0.34</text>
</svg>
<figcaption>Figure 1. Invented absorption spectrum of Dye V (5.00 × 10⁻⁵ M, 1.00 cm cuvette). The dashed line marks the wavelength of maximum absorbance, λmax.</figcaption>
</figure>

Because b and c are fixed for this one solution, the shape of the spectrum is the shape of ε against wavelength. At 560 nm, ε = 0.559 ÷ (1.00 cm × 5.00 × 10⁻⁵ M) ≈ 1.12 × 10⁴ M⁻¹ cm⁻¹. At 500 nm (A ≈ 0.18) it is only about 3.6 × 10³ M⁻¹ cm⁻¹, roughly a third as large.

Chemists set the spectrophotometer to the **wavelength of maximum absorbance, λmax**, for two reasons:

1. **Sensitivity.** The largest ε gives the biggest change in A for a given change in concentration. Small differences between solutions show up clearly.
2. **Stability.** The top of the peak is nearly flat, so if the instrument's wavelength setting drifts by a nanometre or two, A hardly changes. On the steep side of the peak, the same drift would change A noticeably.

If another substance in the mixture also absorbs at λmax, you may need a different wavelength where only your species absorbs, so that the reading belongs to one species alone.

## How a spectrophotometer measures absorbance

<figure>
<svg viewBox="0 0 640 170" role="img" aria-labelledby="bl-inst-title bl-inst-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bl-inst-title">Parts of a simple spectrophotometer</title>
<desc id="bl-inst-desc">Four boxes in a row joined by arrows showing the light path. A light source sends white light to a wavelength selector. One wavelength, with intensity I zero, passes into a cuvette holding the solution; the inside width of the cuvette is labelled path length b. Less intense light, I, leaves the cuvette and reaches a detector, which displays the absorbance A.</desc>
<defs><marker id="bl-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="10" y="50" width="110" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="65" y="77" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Light</text>
<text x="65" y="95" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">source</text>
<rect x="170" y="50" width="120" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="230" y="77" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Wavelength</text>
<text x="230" y="95" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">selector</text>
<rect x="360" y="40" width="70" height="80" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="395" y="85" text-anchor="middle" font-size="13" fill="#1d2b44">sample</text>
<line x1="360" y1="135" x2="430" y2="135" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#bl-a)" marker-end="url(#bl-a)"/>
<text x="395" y="156" text-anchor="middle" font-size="13" fill="#1d2b44">path length b</text>
<rect x="500" y="50" width="130" height="60" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="565" y="77" text-anchor="middle" font-size="14" font-weight="600" fill="#1d2b44">Detector</text>
<text x="565" y="95" text-anchor="middle" font-size="13" fill="#1d2b44">reads A</text>
<path d="M122 80 H166" stroke="#1d2b44" stroke-width="2" marker-end="url(#bl-a)"/>
<path d="M292 80 H356" stroke="#1d2b44" stroke-width="3" marker-end="url(#bl-a)"/>
<text x="324" y="70" text-anchor="middle" font-size="14" fill="#1d2b44">I₀</text>
<path d="M432 80 H496" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4" marker-end="url(#bl-a)"/>
<text x="464" y="70" text-anchor="middle" font-size="14" fill="#1d2b44">I</text>
</svg>
<figcaption>Figure 2. Light of one chosen wavelength (intensity I₀) enters the sample; weaker light (intensity I, thinner dashed arrow) reaches the detector.</figcaption>
</figure>

Before measuring any sample, you fill a cuvette with the **solvent only** (the **blank**) and set the instrument to A = 0. This cancels light lost to the cuvette walls and the solvent, so later readings measure only the absorbing species.

*Background (not needed for calculations in this course):* the instrument actually measures the fraction of light transmitted, T = I / I₀, and converts it with A = −log₁₀ T. That is why %T falls as concentration rises, but only A is proportional to concentration.

## Calibration curves

In most experiments you use the **same cuvette** (fixed b) and the **same wavelength** (fixed ε). Then εb is one constant, and A is proportional to c alone. You can use this in two ways:

- **One standard.** Measure a solution of known concentration, calculate ε, then use it for the unknown (Worked example 1).
- **Several standards (better).** Measure a series of known concentrations, plot A against c and draw the best-fit straight line. Its gradient is εb, and it should pass through (or very close to) the origin. Read the unknown's concentration from the line (Worked example 2).

A calibration curve averages out small errors in individual standards, and it shows you whether the readings really are linear. Keep the unknown's absorbance **inside the range of your standards**. Very high absorbances, when hardly any light reaches the detector, are less reliable, and the line can bend at high concentration. If the unknown reads too high, dilute it by a known factor and multiply back afterwards.

## Worked example 1: one standard, one unknown

**Question.** A standard solution of an invented blue dye, Dye B, has concentration 2.50 × 10⁻⁵ M. In a 1.00 cm cuvette at the dye's λmax, its absorbance is 0.380. A drink sample measured in the same way has A = 0.252. Find ε and the concentration of Dye B in the drink.

1. Rearrange A = εbc for ε: ε = A ÷ (bc) = 0.380 ÷ (1.00 cm × 2.50 × 10⁻⁵ M) = **1.52 × 10⁴ M⁻¹ cm⁻¹**.
2. Rearrange for c: c = A ÷ (εb) = 0.252 ÷ (1.52 × 10⁴ M⁻¹ cm⁻¹ × 1.00 cm) = 1.658 × 10⁻⁵ M.

**Answer.** c = **1.66 × 10⁻⁵ M** (3 significant figures, matching the data).

**Check by proportion.** Same cuvette and wavelength, so c is proportional to A: 2.50 × 10⁻⁵ M × (0.252 ÷ 0.380) = 1.66 × 10⁻⁵ M. The drink's absorbance is about two thirds of the standard's, and so is its concentration.

## Worked example 2: calibration curve and a diluted sample

**Question.** A student makes five standards of Dye V and measures them at 560 nm in a 1.00 cm cuvette, after zeroing with a water blank:

| c (× 10⁻⁵ M) | 1.00 | 2.00 | 3.00 | 4.00 | 5.00 |
|---|---|---|---|---|---|
| A | 0.112 | 0.221 | 0.338 | 0.446 | 0.559 |

A sample was too concentrated to read, so she diluted 10.00 mL of it to 100.0 mL with water. The diluted solution has A = 0.284. Find ε and the concentration of Dye V in the original sample.

<figure>
<svg viewBox="0 0 640 290" role="img" aria-labelledby="bl-cal-title bl-cal-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bl-cal-title">Calibration curve for Dye V with the unknown read off the line</title>
<desc id="bl-cal-desc">A graph of absorbance from 0 to 0.7 against concentration from 0 to 6 times ten to the minus 5 molar. Five filled circles for the standards lie on a straight best-fit line that passes through the origin. A dashed horizontal line runs from absorbance 0.284 on the vertical axis to the best-fit line, marked by an open square, then a dashed vertical line drops to the concentration axis at about 2.54 times ten to the minus 5 molar.</desc>
<line x1="70" y1="230" x2="615" y2="230" stroke="#1d2b44" stroke-width="2"/>
<line x1="70" y1="230" x2="70" y2="25" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="64" y="234">0</text><text x="64" y="176.9">0.2</text><text x="64" y="119.7">0.4</text><text x="64" y="62.6">0.6</text>
</g>
<g stroke="#1d2b44" stroke-width="1"><line x1="66" y1="172.9" x2="70" y2="172.9"/><line x1="66" y1="115.7" x2="70" y2="115.7"/><line x1="66" y1="58.6" x2="70" y2="58.6"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="248">0</text><text x="160" y="248">1</text><text x="250" y="248">2</text><text x="340" y="248">3</text><text x="430" y="248">4</text><text x="520" y="248">5</text><text x="610" y="248">6</text>
</g>
<text x="340" y="276" text-anchor="middle" font-size="14" fill="#1d2b44">Concentration, c (× 10⁻⁵ M)</text>
<text x="20" y="130" text-anchor="middle" font-size="14" fill="#1d2b44" transform="rotate(-90 20 130)">Absorbance, A</text>
<line x1="70" y1="230" x2="610" y2="38.3" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44"><circle cx="160" cy="198" r="5"/><circle cx="250" cy="166.9" r="5"/><circle cx="340" cy="133.4" r="5"/><circle cx="430" cy="102.6" r="5"/><circle cx="520" cy="70.3" r="5"/></g>
<path d="M70 148.9 H299 V230" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<rect x="293" y="143" width="12" height="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="78" y="142" font-size="12" fill="#1d2b44">A = 0.284</text>
<text x="306" y="222" font-size="12" fill="#1d2b44">2.54</text>
<text x="450" y="160" font-size="13" fill="#1d2b44">gradient = εb</text>
</svg>
<figcaption>Figure 3. Filled circles are the standards; the open square is the diluted unknown. Dashed lines show how its concentration is read from the best-fit line.</figcaption>
</figure>

1. **Gradient.** The best-fit line passes through the origin and, for example, through (5.00 × 10⁻⁵ M, 0.559). Gradient = 0.559 ÷ 5.00 × 10⁻⁵ M ≈ 1.12 × 10⁴ M⁻¹. (A least-squares fit of all five points gives the same value to 3 significant figures.)
2. **Molar absorptivity.** Gradient = εb, so ε = 1.12 × 10⁴ M⁻¹ ÷ 1.00 cm = **1.12 × 10⁴ M⁻¹ cm⁻¹**.
3. **Diluted solution.** c = A ÷ gradient = 0.284 ÷ 1.12 × 10⁴ M⁻¹ = **2.54 × 10⁻⁵ M**. This lies inside the range of the standards, so the reading is trustworthy.
4. **Undo the dilution.** The sample was diluted from 10.00 mL to 100.0 mL, a factor of 10.0. Original c = 2.54 × 10⁻⁵ M × 10.0 = **2.54 × 10⁻⁴ M**.

**Check.** By the law, the undiluted sample would read A ≈ 2.84, far above the highest standard (0.559). That is why the dilution was needed.

**Extension.** In a 0.500 cm cuvette, the same diluted solution would give A = 0.284 ÷ 2 = 0.142, because the light meets half as many absorbing particles.

## Worked example 3: predicting the effect of an error

Every error question has the same chain: **what happens to the measured A?** Then, because c = A ÷ (εb), **what happens to the calculated c?**

**Question.** Using Dye B from Worked example 1 (ε = 1.52 × 10⁴ M⁻¹ cm⁻¹, b = 1.00 cm), predict the effect of each error on the calculated concentration of the drink.

**(a) A fingerprint on the cuvette** during the drink measurement only. The smudge absorbs and scatters some light, so less reaches the detector and the measured A is **too high**. If it added 0.015 to the reading, A = 0.267 and c = 0.267 ÷ (1.52 × 10⁴ × 1.00) = 1.76 × 10⁻⁵ M, about 6% too high.

**(b) Water droplets left in the cuvette** from rinsing, before the drink is added. The drink is slightly diluted, so there are fewer absorbing particles in the beam: A is **too low**, and the calculated c is **too low**.

**(c) Wavelength set away from λmax** for both the standard and the drink. ε is smaller, so both absorbances are smaller, but ε is found from the standard at that same wavelength. The answer is not biased, but it is **less precise**, because small reading errors are now a larger fraction of each A.

| Error | Measured A | Calculated c |
|---|---|---|
| Smudge, scratch or air bubble in the beam (unknown only) | too high | too high |
| Cloudy sample (suspended solid scatters light) | too high | too high |
| Cuvette wet with water, unknown diluted | too low | too low |
| Unknown read without zeroing on the blank, though the standards were zeroed (solvent and cuvette absorb a little) | too high | too high |
| Unknown measured in a cuvette with a longer path than the standards | too high | too high |

Always name the direction of the error in A first, then link it to c through the equation. "It would be inaccurate" earns nothing on its own.

## Common misconceptions

- **"Absorbance has a unit."** It does not. ε carries the unit M⁻¹ cm⁻¹ so that εbc has none.
- **"A more concentrated solution has a larger ε."** ε depends on the species and the wavelength only. Concentration changes A, not ε.
- **"More solution in the cuvette means a larger absorbance."** The beam crosses the cuvette sideways. Depth of liquid does not change b.
- **"Choose the wavelength where most light gets through, so the detector gets a strong signal."** That wavelength gives small, insensitive absorbances. Choose λmax.
- **"Percent transmittance is proportional to concentration."** Only absorbance is. %T falls as c rises, but not in a straight line.
- **"Fingerprints make the solution seem weaker."** They block light, so the solution seems **stronger** (A and c too high).
- **Forgetting the dilution factor.** The calibration line gives the concentration of the solution in the cuvette. Multiply back to get the original sample.
- **"Colourless means no absorbance."** A colourless species may still absorb ultraviolet light; it simply does not absorb visible light.

## Where this leads

This topic completes Unit 3. It builds on photon absorption from [Topic 3.12, Properties of Photons](/advanced-course-resources/chemistry/3-12-properties-photons-study-guide/) and on molarity and dilution from Topic 3.7. Unit 4 starts with [Topic 4.1, Introduction for Reactions](/advanced-course-resources/chemistry/4-1-introduction-reactions-study-guide/). In Unit 5 (kinetics) you will use absorbance readings taken over time to follow how a concentration changes during a reaction. Try the [practice questions](/advanced-course-resources/chemistry/3-13-beer-lambert-law-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/3-13-beer-lambert-law-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/3-13-beer-lambert-law-checklist/) to consolidate.
