---
resourceId: "mb-ap-chem-1.2-study-guide"
title: "Mass Spectra of Elements: Study Guide (Chemistry 1.2)"
description: "Learn how a mass spectrum shows the isotopes of an element and their abundances, and how to calculate an average atomic mass as a weighted average."
course: "chemistry"
unit: 1
topics: ["1.2"]
resourceType: "study-guide"
prerequisites:
  - "Protons, neutrons and electrons, and how they make up an atom"
  - "Moles and molar mass (Topic 1.1)"
  - "Percentages and decimal fractions"
prerequisiteResources: ["mb-ap-chem-1.1-study-guide"]
learningObjectives:
  - "Read a mass spectrum of one element to find how many isotopes it has, their masses and their relative abundances"
  - "Convert peak heights given relative to the tallest peak into percentage abundances"
  - "Calculate an average atomic mass as a weighted average of isotope masses"
  - "Work backwards from an average atomic mass to the abundances of two isotopes"
  - "Explain why the average atomic mass is closest to the mass of the most abundant isotope"
skills: ["1", "5"]
studyMinutes: 35
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Isotope masses are in amu. Keep unrounded values until the final step; give average atomic masses to 2 decimal places unless told otherwise"
related: ["mb-ap-chem-1.2-revision-notes", "mb-ap-chem-1.2-practice", "mb-ap-chem-1.2-checklist"]
next: "mb-ap-chem-1.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "A mass spectrum of one element has one peak for each isotope. Peak position gives the isotope's mass; peak height gives its relative abundance."
  - "Average atomic mass = sum of (isotope mass × fractional abundance). It is a weighted average, not a simple mean."
  - "If peak heights are scaled so the tallest is 100, divide each height by the total of all heights to get fractions."
  - "The average always lies between the lightest and heaviest isotope, closest to the most abundant one."
faqs:
  - question: "Why is the x-axis labelled m/z and not just mass?"
    answer: "The instrument separates ions by mass divided by charge (m/z). In this course every ion has a charge of +1, so m/z has the same number as the isotope's mass in amu."
  - question: "Why does no atom have the average atomic mass?"
    answer: "For an element with two or more isotopes, each atom is one particular isotope. The average is a property of a large natural sample, so it usually falls between the isotope masses and matches none of them."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Isotopes: one element, several masses

Every atom of an element has the same number of protons. That number (the atomic number) decides which element it is. The number of neutrons can vary. Atoms of the same element with different numbers of neutrons are **isotopes**.

- The **mass number** is protons + neutrons. It is a whole number, written as a left superscript: ²⁴Mg, ²⁵Mg, ²⁶Mg.
- The **isotopic mass** is the measured mass of one atom of that isotope in atomic mass units (amu). It is close to the mass number but not exactly equal: ²⁴Mg has a mass of 23.985 amu.
- Isotopes of one element have essentially the same chemistry, because chemistry depends on electrons, and isotopes have the same number of electrons.

Most elements in nature are a mixture of isotopes. The periodic table cannot show the mass of "a magnesium atom", because magnesium atoms do not all have the same mass. It shows an **average atomic mass** instead, and a mass spectrum is how that average is measured.

## What a mass spectrometer does (background)

You do not need to describe the instrument in detail, but knowing the main stages makes the spectrum easier to read:

1. The sample is turned into a gas.
2. The atoms are **ionised**, usually by knocking off one electron, so each becomes a +1 ion.
3. The ions are accelerated and then separated by their **mass-to-charge ratio, m/z**. Heavier ions are deflected less, so ions of different isotopes travel along different paths.
4. A detector counts how many ions arrive at each m/z value.

The result is a graph of **relative abundance** (how many ions) against **m/z** (how heavy each ion is). For an ion with a charge of +1, z = 1, so m/z is simply the isotope's mass.

## Reading a mass spectrum

<figure>
<svg viewBox="0 0 640 320" role="img" aria-labelledby="mg-ms-title mg-ms-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mg-ms-title">Mass spectrum of a natural sample of magnesium</title>
<desc id="mg-ms-desc">A bar graph with mass-to-charge ratio m/z from 23 to 27 on the horizontal axis and relative abundance in percent from 0 to 100 on the vertical axis. There are three vertical lines. At m/z 24 the line reaches 78.99 percent. At m/z 25 it reaches 10.00 percent. At m/z 26 it reaches 11.01 percent. There are no peaks at 23 or 27.</desc>
<line x1="80" y1="250" x2="610" y2="250" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="250" x2="80" y2="40" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4" opacity="0.5">
<line x1="80" y1="150" x2="600" y2="150"/>
<line x1="80" y1="50" x2="600" y2="50"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="end">
<text x="72" y="254">0</text>
<text x="72" y="154">50</text>
<text x="72" y="54">100</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="270">23</text>
<text x="210" y="270">24</text>
<text x="340" y="270">25</text>
<text x="470" y="270">26</text>
<text x="600" y="270">27</text>
<text x="345" y="300" font-size="14">mass-to-charge ratio, m/z</text>
</g>
<text x="24" y="150" font-size="14" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 150)">relative abundance (%)</text>
<rect x="204" y="92" width="12" height="158" fill="#1d2b44"/>
<rect x="334" y="230" width="12" height="20" fill="#1d2b44"/>
<rect x="464" y="228" width="12" height="22" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="210" y="84">²⁴Mg: 78.99%</text>
<text x="340" y="222">²⁵Mg: 10.00%</text>
<text x="470" y="220">²⁶Mg: 11.01%</text>
</g>
</svg>
<figcaption>Figure 1. Mass spectrum of natural magnesium. Three peaks mean three isotopes; each peak is labelled with its isotope and percentage abundance, so the values do not depend on reading the bar heights.</figcaption>
</figure>

A spectrum of a single element answers three questions:

| What you look at | What it tells you | Magnesium (Figure 1) |
|---|---|---|
| Number of peaks | Number of isotopes in the sample | 3 isotopes |
| Position of each peak (m/z) | Mass of each isotope, in amu | 24, 25 and 26 (more precisely 23.985, 24.986 and 25.983) |
| Height of each peak | Relative abundance of that isotope | ²⁴Mg is by far the most common |

Spectra show abundance in one of two ways. Some give **percentages** that add up to 100. Others scale the **tallest peak to 100** and give the other peaks relative to it. In the second kind the heights add up to more than 100, so you must convert them before using them (Worked example 2).

## From a spectrum to the average atomic mass

The average atomic mass is a **weighted average**: each isotope's mass counts in proportion to how common it is.

> Average atomic mass = (mass₁ × fraction₁) + (mass₂ × fraction₂) + …

A **fraction** is a percentage divided by 100 (78.99% → 0.7899). The fractions of all the isotopes add up to 1.

Two quick checks catch most errors:

- The answer must lie **between** the lightest and heaviest isotope masses.
- It must lie **closest to the most abundant** isotope.

You can also run the method the other way to **identify an unknown element**. Calculate the average atomic mass from its spectrum, then find the element on the periodic table with that value. Even without a full calculation, the spectrum narrows the choice: the element's average must sit between its lightest and heaviest peaks. For example, two peaks of almost equal height at m/z 107 and 109 point to an average near 108, and silver (107.87) is the only element with an average in that range.

This average atomic mass, in amu, is the same number as the molar mass in g mol⁻¹ that you used in [Topic 1.1](/advanced-course-resources/chemistry/1-1-moles-and-molar-mass-study-guide/). The mass spectrum is where the periodic-table values come from.

## Worked example 1: three isotopes given as percentages

**Question.** Use the data in Figure 1 to calculate the average atomic mass of magnesium. The isotope masses are 23.985 amu (78.99%), 24.986 amu (10.00%) and 25.983 amu (11.01%).

1. Check the percentages: 78.99 + 10.00 + 11.01 = 100.00. Good.
2. Convert to fractions: 0.7899, 0.1000 and 0.1101.
3. Multiply each mass by its fraction:
   - 23.985 × 0.7899 = 18.9458
   - 24.986 × 0.1000 = 2.4986
   - 25.983 × 0.1101 = 2.8607
4. Add: 18.9458 + 2.4986 + 2.8607 = 24.3051 amu.

**Answer.** 24.31 amu. This matches the value on the periodic table.

**Check.** 24.31 lies between 23.985 and 25.983, and it is much closer to 24 than to 26, because ²⁴Mg makes up almost 80% of the atoms. A simple mean of the three masses would give 24.98, which is far too high: it treats the rare isotopes as if they were as common as ²⁴Mg.

## Worked example 2: peak heights relative to the tallest peak

**Question.** A mass spectrum of a boron sample shows two peaks. The peak at m/z 11.009 has a height of 100. The peak at m/z 10.013 has a height of 24.8. Find the percentage abundance of each isotope and the average atomic mass of boron.

1. The heights add up to 24.8 + 100 = 124.8, not 100. These are relative heights, so convert them.
2. Fraction of ¹⁰B = 24.8 ÷ 124.8 = 0.1987 (19.9%).
   Fraction of ¹¹B = 100 ÷ 124.8 = 0.8013 (80.1%).
3. Weighted average: (10.013 × 0.1987) + (11.009 × 0.8013) = 10.8111 amu.

**Answer.** About 19.9% ¹⁰B and 80.1% ¹¹B; average atomic mass 10.81 amu.

**Why step 1 matters.** If you treat the heights as percentages and divide by 100, you get (10.013 × 24.8 + 11.009 × 100) ÷ 100 = 13.49 amu. That is heavier than either isotope, which is impossible. The "between the isotope masses" check catches the mistake at once.

## Worked example 3: working backwards to the abundances

**Question.** Copper has two isotopes, ⁶³Cu (62.930 amu) and ⁶⁵Cu (64.928 amu). Its average atomic mass is 63.546 amu. Calculate the percentage abundance of each isotope, and predict the height of the ⁶⁵Cu peak if the ⁶³Cu peak is drawn at 100.

1. Let x be the fraction of ⁶⁵Cu. The fraction of ⁶³Cu is then 1 − x, because the two fractions add up to 1.
2. Write the weighted average: 62.930(1 − x) + 64.928x = 63.546.
3. Expand and collect terms: 62.930 + 1.998x = 63.546, so 1.998x = 0.616 and x = 0.3083.
4. Abundances: ⁶⁵Cu = 30.8%; ⁶³Cu = 1 − 0.3083 = 0.6917, so 69.2%.
5. Relative peak height of ⁶⁵Cu: (0.3083 ÷ 0.6917) × 100 = 44.6.

**Answer.** About 69.2% ⁶³Cu and 30.8% ⁶⁵Cu. The ⁶⁵Cu peak would be about 44.6% as tall as the ⁶³Cu peak.

**Check.** The average 63.546 is closer to 63 than to 65, so ⁶³Cu should be the more common isotope. Substituting back: 62.930 × 0.6917 + 64.928 × 0.3083 = 63.546. The answer is consistent.

## What you will and will not be asked

In this course, every spectrum you interpret comes from a sample of **one element**, and every peak comes from a **singly charged ion of one atom** (such as ²⁴Mg⁺). That is why each peak's m/z can be read directly as an isotope mass.

Real spectra can be more complicated. A gas such as Cl₂ also gives peaks for whole molecules, and some atoms lose two electrons and appear at an m/z equal to half their mass. Spectra of mixtures show peaks from several elements. These cases are useful background, but interpreting them is outside the scope of this topic's assessment, so you will not need them in the exam.

## Common misconceptions

- **"The average atomic mass is the mass of a typical atom."** No atom of magnesium has a mass of 24.31 amu. Each atom is one isotope (about 24, 25 or 26 amu). The average describes a large natural sample.
- **"Just average the peak positions."** A simple mean ignores how common each isotope is. Always weight each mass by its abundance.
- **"Peak height tells you the mass."** Height shows how many ions there are (abundance). Position on the m/z axis shows the mass.
- **Using relative heights as percentages.** If the tallest peak is 100 and there are other peaks, the heights add to more than 100. Divide each by the total first.
- **Forgetting to divide percentages by 100.** 78.99% must become 0.7899 before you multiply. Otherwise your answer is 100 times too large.
- **"Different isotopes are different elements."** Isotopes have the same number of protons, so they are the same element with the same chemistry. A spectrum of a pure element with three peaks is still one element.
- **Using mass numbers when isotope masses are given.** With magnesium, mass numbers give 24.32 instead of 24.31. Use the precise masses when the question gives them.

## Where this leads

The average atomic masses that come from mass spectra are the molar masses you use in every mole calculation. Next, in [Topic 1.3, Elemental Composition of Pure Substances](/advanced-course-resources/chemistry/1-3-elemental-composition-pure-substances-study-guide/), you will use them to find mass percentages and empirical formulas. Later, in Topic 1.6, you will meet a different kind of spectrum, photoelectron spectroscopy, which looks at electrons rather than whole atoms. Try the [practice questions](/advanced-course-resources/chemistry/1-2-mass-spectra-elements-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/1-2-mass-spectra-elements-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/1-2-mass-spectra-elements-checklist/) to consolidate.
