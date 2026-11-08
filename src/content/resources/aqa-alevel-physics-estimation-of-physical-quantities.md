---
title: "Estimation of Physical Quantities"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Measurements and their errors"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 3.13
syllabusTopics:
  - qualification: "a-level"
    topic: "measurements-and-their-errors-aqa-alevel"
    subtopic: "estimation-of-physical-quantities"
description: "Orders of magnitude and estimating approximate values of physical quantities, for sub-topic 3.1.3 of AQA A-level Physics (7408)."
author: "iftikhar-azeemi"
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
publishedDate: 2026-08-19
updatedDate: 2026-08-25
featured: false
---

**Estimation of physical quantities** is the physics skill of judging the order of magnitude of a quantity -- for example the mass of a bacterium, the diameter of an atom, or the number of molecules in a glass of water -- using known formulae, everyday knowledge and reasonable assumptions, rather than a precise measurement. It lets a physicist sanity-check a calculated answer or make a quick approximate prediction when exact data is not available.

This guide covers sub-topic **3.1.3 Estimation of physical quantities**, the third and final sub-topic in **Topic 3.1 Measurements and their errors**, from the AQA A-level Physics (7408) specification (first teaching September 2015).

## Before studying this

Read [Limitation of Physical Measurements](/resources/aqa-alevel-physics-limitation-of-physical-measurements/) first. This sub-topic builds on the idea of significant figures and precision to develop order-of-magnitude reasoning.

## Syllabus coverage

**AQA A-LEVEL PHYSICS (7408) — Sub-topic 3.1.3**

Orders of magnitude. Estimation of approximate values of physical quantities. Students should be able to estimate approximate values of physical quantities to the nearest order of magnitude. Students should be able to use these estimates together with their knowledge of physics to produce further derived estimates also to the nearest order of magnitude.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--02-prefix-powers.webp" width="900" height="956" alt="Bars show prefixes from tera 10^12 down to femto 10^-15. Deci is used by Cambridge and OCR only; femto by AQA and OxfordAQA only. Examples: 250 mA = 0.25 A and 5.6 MeV = 5.6 x 10^6 eV." loading="lazy">
  <figcaption>Replace the prefix with its power of ten before substituting.</figcaption>
</figure>


## Orders of magnitude

An **order of magnitude** is a power of ten used to give a rough sense of the scale of a quantity, without claiming precision. Two quantities are said to be "of the same order of magnitude" if they are within a factor of about 3 (strictly √10 ≈ 3.16) of the same power of ten; a quantity's order of magnitude is the power of ten closest to its value **on a logarithmic (ratio) basis, not a linear one** -- closeness is judged by how many times bigger or smaller the value is than each power of ten, not by the numerical difference between them.

For example, a result of 3.4 x 10^5 has order of magnitude 10^6, not 10^5, since 3.4 is closer to 10 than to 1 on the relevant power-of-ten scale (the crossover point is at √10 ≈ 3.16, so a leading figure above that rounds up to the next power of ten -- which is also why 8 x 10^5 is order 10^6). This matters because two very different-looking numbers can still share an order of magnitude -- 2 x 10^5 and 3 x 10^5 are both order 10^5 -- while a number just the other side of the boundary jumps to a different order of magnitude entirely, even when it is not much larger: 4 x 10^6 is order 10^7, a different order of magnitude from 8 x 10^5's order 10^6, even though it is only five times as large. Estimation questions are marked on getting the power of ten right, not on how close the leading digit is.

## Estimating physical quantities

Students are expected to be able to estimate approximate values of physical quantities to the nearest order of magnitude — for example, the mass of an adult human (~10² kg), the diameter of an atom (~10⁻¹⁰ m), or the speed of a walking person (~1 m s⁻¹). These estimates rely on everyday experience and general physics knowledge rather than precise measurement.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--08-order-of-magnitude.webp" width="900" height="910" alt="A log ruler with decades 10^5, 10^6, 10^7 and crossover marks at 3.16 times each power. 2 x 10^5 is order 10^5; 3.4 x 10^5 and 8 x 10^5 are order 10^6; 4 x 10^6 is order 10^7. OxfordAQA gives the crossover as about 3.2." loading="lazy">
  <figcaption>Above 3.16 x 10^n the order of magnitude is 10^(n+1).</figcaption>
</figure>


## Producing derived estimates

Beyond estimating single quantities directly, students should be able to combine order-of-magnitude estimates of several quantities — together with relevant physics — to produce a further derived estimate, also to the nearest order of magnitude. This kind of reasoning (sometimes called a "Fermi estimate") is a valuable practical skill: it allows a physicist to sanity-check whether a calculated answer is plausible, and to make quick approximate predictions when exact data is unavailable.

**Worked example.** Estimate, to the nearest order of magnitude, the number of times a typical human heart beats in a lifetime.

```
heart rate ≈ 1 beat per second (order of magnitude 10⁰ s⁻¹)
seconds in a year ≈ 3 × 10⁷ s (order of magnitude 10⁷ s)
lifetime ≈ 80 years (order of magnitude 10² years)

beats ≈ (10⁰) × (10⁷) × (10²) = 10⁹ beats
```

So a typical human heart beats on the order of 10⁹ (about a billion) times in a lifetime — this kind of reasoning combines several rough estimates to reach a derived order-of-magnitude answer.

**Worked example -- using an estimate as a sanity check.** A student calculates that a stadium measuring roughly 50 m by 50 m, allowing about 0.5 m² per spectator, can hold 5 × 10² spectators, and asks whether this is plausible.

```
area           = 50 x 50 = 2500 m^2
capacity       = area / area per spectator = 2500 / 0.5 = 5000

-> 5000 = 5 x 10^3 is order of magnitude 10^4 (5 is above the crossover at √10 ≈ 3.16),
   whereas the student's 5 x 10^2 is order 10^3
```

The student's answer is a factor of ten too small, so it lands one order of magnitude too low -- most likely from a slip of a factor of ten somewhere in the arithmetic -- and a quick order-of-magnitude recalculation catches the error immediately, without needing to redo the full working in detail. This is the "sanity-check" use of estimation referred to above: it does not replace a proper calculation, but it does flag when a proper calculation has clearly gone wrong.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--01-units-from-base.webp" width="900" height="890" alt="Six base unit boxes (kg, m, s, A, K, mol) above a chain of derived units. The newton, kg m s^-2, times metre gives the joule, divided by second gives the watt, and divided by ampere gives the volt (OCR). Newton divided by metre squared gives the pascal. Cambridge 9702 does not use the mole." loading="lazy">
  <figcaption>Each derived unit is a product or quotient of base units.</figcaption>
</figure>


## Common mistakes

Treating an order-of-magnitude estimate as if it needed to be precise to several significant figures — the goal is the correct power of ten, not an exact value. Forgetting to convert all quantities to consistent units before combining them in an estimate (e.g. mixing years and seconds). Being reluctant to make a reasonable assumption when data isn't given — estimation questions expect sensible, justified assumptions.

## Quick revision checklist

- Explain what "order of magnitude" means.
- Estimate everyday physical quantities to the nearest order of magnitude from general knowledge.
- Combine several order-of-magnitude estimates, using relevant physics, to produce a derived estimate.
- Practise justifying assumptions clearly when making an estimate.

## Frequently asked questions

**What is an order of magnitude?**
An order of magnitude is the power of ten closest to a quantity's value, judged on a logarithmic (ratio) basis. Two quantities are of the same order of magnitude if they are within a factor of about 3 of the same power of ten.

**What is a Fermi estimate?**
A Fermi estimate combines order-of-magnitude estimates of several quantities with relevant physics to produce a derived estimate, also to the nearest order of magnitude. AQA 7408 sub-topic 3.1.3 requires you to make these derived estimates.

**Do estimation answers need to be precise?**
No. The goal is the correct power of ten, not an exact value, so give the final answer as an order of magnitude and justify the assumptions you made.

**What are typical order-of-magnitude values to remember?**
Useful anchors include the mass of an adult human, about 10² kg, the diameter of an atom, about 10⁻¹⁰ m, and the speed of a walking person, about 1 m s⁻¹.

## Related resources

- [Estimation of Physical Quantities practice questions](/resources/aqa-alevel-physics-estimation-of-physical-quantities-practice/)
- [Limitation of Physical Measurements](/resources/aqa-alevel-physics-limitation-of-physical-measurements/) — the previous sub-topic
- [Use of SI Units and Their Prefixes](/resources/aqa-alevel-physics-use-of-si-units-and-their-prefixes/)
- [AQA A Level Physics hub](/boards/aqa/a-level/physics/)

*This guide is intended to support, not replace, engagement with the official AQA specification and your own teacher's guidance. Always check the current version of the specification for authoritative detail.*

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-measurements-and-their-errors--05-repeat-readings.webp" width="900" height="880" alt="Five timings 1.52, 1.58, 1.55, 1.49 and 1.56 s on a number line with mean 1.54 s. Range 0.09 s, half range 0.045 s, 2.9 percent; result 1.54 +/- 0.05 s." loading="lazy">
  <figcaption>Half the range is a common estimate of the uncertainty in a mean.</figcaption>
</figure>
