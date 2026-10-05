---
resourceId: "mb-ap-phys2-15.2-study-guide"
title: "The Bohr Model of Atomic Structure: Study Guide (Physics 2 15.2)"
description: "Inside the atom: nucleus, protons, neutrons and electrons, nuclear notation, isotopes and ions, then the Bohr model and why only standing-wave orbits are allowed."
course: "physics-2"
unit: 15
topics: ["15.2"]
resourceType: "study-guide"
prerequisites:
  - "De Broglie wavelength λ = h/(mv) and quantized energy in bound systems (Topic 15.1)"
  - "Coulomb's law (Topic 10.1) and electric potential energy (Topic 10.4)"
  - "Centripetal acceleration v²/r in uniform circular motion (Physics 1)"
  - "Standing waves on a string (Topic 14.6)"
prerequisiteResources: ["mb-ap-phys2-15.1-study-guide"]
learningObjectives:
  - "Describe the structure of an atom: a small positive nucleus of protons and neutrons, surrounded by electrons"
  - "Read and write nuclear notation, and find the numbers of protons, neutrons and electrons in an atom or ion"
  - "Explain what makes atoms of one element the same and what makes isotopes and ions different"
  - "Explain why the mass of an atom is almost all in its nucleus"
  - "Apply Coulomb's law and circular motion to an electron in a Bohr orbit"
  - "Explain, using the de Broglie wavelength, why only certain orbits and energies are allowed"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 9.0 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C, h = 6.63 × 10⁻³⁴ J·s, mₑ = 9.11 × 10⁻³¹ kg, mₚ ≈ mₙ = 1.67 × 10⁻²⁷ kg, 1 eV = 1.60 × 10⁻¹⁹ J. Keep unrounded values until the final step"
related: ["mb-ap-phys2-15.2-revision-notes", "mb-ap-phys2-15.2-practice", "mb-ap-phys2-15.2-checklist"]
next: "mb-ap-phys2-15.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "An atom is a tiny, positive nucleus (protons and neutrons) surrounded by negative electrons. Almost all its mass is in the nucleus."
  - "The number of protons Z fixes the element. The mass number A = protons + neutrons fixes the isotope. An ion has a nonzero net charge."
  - "In the Bohr model the electric force from the nucleus provides the centripetal force: kq₁q₂/r² = mv²/r."
  - "Only orbits whose circumference is a whole number of de Broglie wavelengths are allowed: 2πr = nλ."
  - "So the electron can have only certain energies: the atom has discrete energy states."
faqs:
  - question: "Is the Bohr model what an atom really looks like?"
    answer: "No. It is a historical model built from classical physics plus one quantum rule. It correctly predicts the energy levels of single-electron atoms, but electrons do not follow sharp circular paths. In this course you only need energy levels, not the more advanced descriptions such as orbitals."
  - question: "Why doesn't the electron fall into the nucleus?"
    answer: "Classical physics says an orbiting charge should radiate energy and spiral inward. Bohr simply stated that allowed orbits are stable. The standing-wave picture gives a reason: there is no allowed state with less energy than the lowest one, so the electron has nowhere lower to go."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What is inside an atom

Atoms have internal structure. The model you need has two parts:

- A **nucleus** at the centre. It is very small and positively charged. It contains **protons** (charge +e) and **neutrons** (no charge). Together, protons and neutrons are called nucleons.
- One or more **electrons** (charge −e) around the nucleus.

The evidence for a small, dense nucleus came from scattering experiments in Rutherford's laboratory, which Rutherford explained with his nuclear model in 1911. Positively charged alpha particles were fired at thin gold foil. Most went straight through, but a very few bounced back sharply. Only a tiny, concentrated positive charge could push them back like that.

The sizes are very different. An atom is about 10⁻¹⁰ m across, but a nucleus is roughly 10⁻¹⁵ m to 10⁻¹⁴ m across. So most of an atom is empty space, with the electrons moving far from the nucleus.

### Mass is in the nucleus

A proton and a neutron each have a mass of about 1.67 × 10⁻²⁷ kg. An electron has a mass of only 9.11 × 10⁻³¹ kg, about 1/1800 as much. So the mass of an atom is **dominated by its protons and neutrons**. The electrons add only a few hundredths of one percent.

### Elements, isotopes and ions

- **Element.** Each element has its own number of protons, called the **atomic number Z**. Every carbon atom has 6 protons; every iron atom has 26. Change Z and you change the element.
- **Isotope.** Atoms of the same element can have different numbers of neutrons. The total number of protons and neutrons is the **mass number A**, and it identifies the isotope. Carbon-12 and carbon-14 are both carbon (Z = 6), with 6 and 8 neutrons. The number of neutrons is N = A − Z.
- **Ion.** A neutral atom has as many electrons as protons. An **ion** is an atom with a nonzero net charge because it has gained or lost electrons. Net charge = (protons − electrons) × e.

The **number and arrangement of electrons** decides how an atom interacts with other atoms: how it bonds and reacts. The nucleus decides which element it is and how heavy it is.

### Nuclear notation

Nuclear notation writes the mass number at the top left of the chemical symbol and the atomic number at the bottom left. Any ionic charge goes at the top right.

<figure>
<svg viewBox="0 0 520 210" role="img" aria-labelledby="nn-title nn-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="nn-title">Nuclear notation for an iron ion</title>
<desc id="nn-desc">The symbol Fe is written large in the centre. A small 56 sits at its top left, labelled mass number A equals protons plus neutrons. A small 26 sits at its bottom left, labelled atomic number Z equals number of protons. A small 3 plus sits at its top right, labelled net charge in units of e.</desc>
<defs><marker id="nn-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="#1d2b44">
<text x="250" y="125" font-size="64" font-weight="600" text-anchor="middle">Fe</text>
<text x="208" y="78" font-size="26" text-anchor="end">56</text>
<text x="208" y="142" font-size="26" text-anchor="end">26</text>
<text x="290" y="78" font-size="26">3+</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<path d="M150 40 L182 62" marker-end="url(#nn-arr)"/>
<path d="M150 180 L182 146" marker-end="url(#nn-arr)"/>
<path d="M392 40 L326 64" marker-end="url(#nn-arr)"/>
</g>
<g font-size="13" fill="#1d2b44">
<text x="10" y="28">mass number A</text>
<text x="10" y="44">= protons + neutrons</text>
<text x="10" y="186">atomic number Z</text>
<text x="10" y="202">= number of protons</text>
<text x="398" y="28">net charge</text>
<text x="398" y="44">in units of e</text>
</g>
</svg>
<figcaption>Figure 1. Nuclear notation for the ion ⁵⁶₂₆Fe³⁺. The top-left number is the mass number A, the bottom-left number is the atomic number Z, and the top-right label is the net charge of the ion.</figcaption>
</figure>

## The Bohr model

In 1913 Niels Bohr proposed a model of the hydrogen atom (one proton, one electron). It uses classical physics you already know, plus one new rule.

**Classical part.** The electron moves in a circle of radius r around the nucleus. The only force on it that matters is the electric attraction of the nucleus, given by Coulomb's law. That force points to the centre, so it provides the centripetal force:

**k|q₁q₂|/r² = mv²/r**

For hydrogen, q₁ = +e and q₂ = −e, so ke²/r² = mₑv²/r. This gives the electron's speed in an orbit of radius r:

**v = √(ke²/(mₑr))**

A smaller orbit means a stronger force and a faster electron.

**The problem.** Classical physics allows **any** radius, and so any energy. It also predicts that a charge moving in a circle should give out electromagnetic waves, lose energy and spiral into the nucleus. Real atoms are stable and have only certain energies (you will see the evidence from spectra in Topic 15.3). Bohr's model had to add a rule that only certain orbits are allowed.

## Why only some orbits: the standing-wave picture

Topic 15.1 gave a reason for Bohr's rule. The electron has a de Broglie wavelength λ = h/(mₑv). Think of the electron's wave wrapped around the orbit. As you go once round the circle, the wave must join up smoothly with itself. That is only possible if a **whole number of wavelengths** fits exactly into the circumference:

**2πr = nλ, n = 1, 2, 3, …**

This is the same idea as a string fixed at both ends, where only a whole number of half-wavelengths fits. If the wave does not fit, it does not join up, and that orbit is not allowed.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="sw-title sw-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sw-title">An electron wave that fits an orbit and one that does not</title>
<desc id="sw-desc">Two panels, each with a small dot for the nucleus and a dashed circle for the orbit. In the left panel a solid wavy line goes around the circle with exactly four full wavelengths and joins itself smoothly; it is labelled n equals 4, allowed. In the right panel a solid wavy line goes around with four and a half wavelengths; where it comes back to its starting point on the right side, the two ends are at different distances from the circle and do not meet, with a gap marked. It is labelled 4.5 wavelengths, not allowed.</desc>
<g fill="none" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4">
<circle cx="140" cy="160" r="85"/>
<circle cx="420" cy="160" r="85"/>
</g>
<circle cx="140" cy="160" r="5" fill="#1d2b44"/>
<circle cx="420" cy="160" r="5" fill="#1d2b44"/>
<polyline points="237.0,160.0 236.7,155.8 235.9,151.6 234.6,147.5 232.8,143.6 230.5,139.9 227.9,136.4 225.0,133.2 221.8,130.2 218.5,127.5 215.1,125.0 211.8,122.6 208.4,120.5 205.2,118.5 202.1,116.5 199.2,114.6 196.5,112.6 194.0,110.6 191.6,108.4 189.4,106.0 187.4,103.5 185.4,100.8 183.5,97.9 181.5,94.8 179.5,91.6 177.4,88.2 175.0,84.9 172.5,81.5 169.8,78.2 166.8,75.0 163.6,72.1 160.1,69.5 156.4,67.2 152.5,65.4 148.4,64.1 144.2,63.3 140.0,63.0 135.8,63.3 131.6,64.1 127.5,65.4 123.6,67.2 119.9,69.5 116.4,72.1 113.2,75.0 110.2,78.2 107.5,81.5 105.0,84.9 102.6,88.2 100.5,91.6 98.5,94.8 96.5,97.9 94.6,100.8 92.6,103.5 90.6,106.0 88.4,108.4 86.0,110.6 83.5,112.6 80.8,114.6 77.9,116.5 74.8,118.5 71.6,120.5 68.2,122.6 64.9,125.0 61.5,127.5 58.2,130.2 55.0,133.2 52.1,136.4 49.5,139.9 47.2,143.6 45.4,147.5 44.1,151.6 43.3,155.8 43.0,160.0 43.3,164.2 44.1,168.4 45.4,172.5 47.2,176.4 49.5,180.1 52.1,183.6 55.0,186.8 58.2,189.8 61.5,192.5 64.9,195.0 68.2,197.4 71.6,199.5 74.8,201.5 77.9,203.5 80.8,205.4 83.5,207.4 86.0,209.4 88.4,211.6 90.6,214.0 92.6,216.5 94.6,219.2 96.5,222.1 98.5,225.2 100.5,228.4 102.6,231.8 105.0,235.1 107.5,238.5 110.2,241.8 113.2,245.0 116.4,247.9 119.9,250.5 123.6,252.8 127.5,254.6 131.6,255.9 135.8,256.7 140.0,257.0 144.2,256.7 148.4,255.9 152.5,254.6 156.4,252.8 160.1,250.5 163.6,247.9 166.8,245.0 169.8,241.8 172.5,238.5 175.0,235.1 177.4,231.8 179.5,228.4 181.5,225.2 183.5,222.1 185.4,219.2 187.4,216.5 189.4,214.0 191.6,211.6 194.0,209.4 196.5,207.4 199.2,205.4 202.1,203.5 205.2,201.5 208.4,199.5 211.8,197.4 215.1,195.0 218.5,192.5 221.8,189.8 225.0,186.8 227.9,183.6 230.5,180.1 232.8,176.4 234.6,172.5 235.9,168.4 236.7,164.2 237.0,160.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="517.0,160.0 516.7,155.8 515.7,151.6 514.2,147.6 512.1,143.8 509.5,140.2 506.5,136.8 503.3,133.7 499.9,130.9 496.4,128.4 492.9,126.0 489.5,123.8 486.3,121.7 483.3,119.7 480.5,117.6 478.1,115.4 475.9,113.1 474.0,110.5 472.3,107.7 470.7,104.7 469.2,101.4 467.7,97.9 466.1,94.1 464.4,90.3 462.5,86.4 460.3,82.5 457.9,78.8 455.1,75.3 452.0,72.2 448.6,69.4 444.9,67.2 440.9,65.5 436.8,64.5 432.6,64.1 428.4,64.3 424.1,65.1 420.0,66.5 416.0,68.4 412.2,70.7 408.6,73.4 405.2,76.3 402.1,79.3 399.2,82.3 396.4,85.3 393.8,88.1 391.3,90.7 388.8,93.0 386.2,95.0 383.5,96.8 380.7,98.2 377.6,99.5 374.3,100.5 370.8,101.4 367.1,102.2 363.1,103.1 359.1,104.2 354.9,105.4 350.7,106.8 346.6,108.6 342.7,110.7 339.0,113.3 335.8,116.1 332.9,119.4 330.6,123.0 328.8,126.8 327.7,130.9 327.2,135.1 327.3,139.4 327.9,143.8 329.1,148.0 330.7,152.2 332.7,156.2 335.0,160.0 337.4,163.6 339.9,167.0 342.3,170.2 344.6,173.3 346.8,176.2 348.6,179.1 350.2,182.0 351.4,185.0 352.3,188.0 353.0,191.2 353.5,194.6 353.7,198.3 353.9,202.1 354.1,206.1 354.4,210.3 354.9,214.6 355.6,219.0 356.6,223.4 358.1,227.6 359.9,231.6 362.2,235.4 364.9,238.7 368.0,241.6 371.5,244.0 375.3,245.8 379.4,247.1 383.7,247.7 388.0,247.8 392.4,247.4 396.8,246.5 401.1,245.3 405.2,243.7 409.2,242.0 413.0,240.1 416.6,238.3 420.0,236.5 423.3,235.0 426.4,233.6 429.6,232.6 432.7,231.9 435.8,231.5 439.1,231.4 442.6,231.6 446.2,231.9 450.0,232.4 454.0,232.9 458.2,233.3 462.5,233.6 466.9,233.7 471.4,233.4 475.8,232.7 480.1,231.6 484.2,230.0 487.9,227.9 491.3,225.4 494.3,222.4 496.8,218.9 498.7,215.1 500.1,211.0 501.0,206.7 501.3,202.3 501.2,197.9 500.7,193.4 499.9,189.1 498.8,184.9 497.7,180.8 496.5,177.0 495.4,173.3 494.4,169.8 493.6,166.4 493.2,163.2 493.0,160.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="493" y1="160" x2="517" y2="160" stroke-dasharray="2 3"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="140" y="290">n = 4: four whole wavelengths</text>
<text x="140" y="308" font-weight="600">wave joins itself: allowed</text>
<text x="420" y="290">4.5 wavelengths</text>
<text x="420" y="308" font-weight="600">ends do not meet: not allowed</text>
<text x="535" y="140" text-anchor="start">gap</text>
<text x="140" y="164" font-size="11" dy="-12">nucleus</text>
</g>
</svg>
<figcaption>Figure 2. Electron standing waves drawn around an orbit (dashed circle). Left: exactly 4 wavelengths fit the circumference, so the wave joins itself smoothly and the orbit is allowed. Right: 4.5 wavelengths do not fit; the wave's start and end points do not match (gap on the right), so this orbit is not allowed.</figcaption>
</figure>

### Putting the two conditions together

Each allowed orbit has to satisfy **both** conditions at once: the force condition (which links v and r) and the standing-wave condition (which links λ, and so v, to r). Only one radius satisfies both for each value of n. Combining them gives:

- **r = n² r₁**, where r₁ = 5.29 × 10⁻¹¹ m for hydrogen (n = 1, the smallest orbit);
- **v = v₁/n**, so the electron moves more slowly in larger orbits;
- **λ = nλ₁**, so the wavelength grows with n, and 2πr = n²(2πr₁) = n(nλ₁) still holds.

(If you substitute the constants, the radius comes out as h²/(4π²kmₑe²), which gives 5.3 × 10⁻¹¹ m with the rounded values in this course.)

### Allowed orbits mean allowed energies

The energy of the electron-nucleus system is kinetic energy plus electric potential energy. Taking U = 0 when the electron is far away and at rest:

- K = ½mₑv² = ke²/(2r)
- U = −ke²/r
- **E = K + U = −ke²/(2r)**

The total energy is **negative** because the electron is bound: you must add energy to pull it free. Because only certain radii are allowed, only certain energies are allowed. For hydrogen these come out as E = −13.6 eV/n²: −13.6 eV for n = 1, −3.40 eV for n = 2, −1.51 eV for n = 3, and so on, getting closer to zero. These are the **discrete energy states** that Topic 15.3 draws on energy level diagrams.

### What the Bohr model can and cannot do

The model works well for atoms or ions with a **single electron** (H, He⁺, Li²⁺). It does not work for atoms with several electrons, and electrons do not really follow sharp circular paths. In this course you describe electron structure only by **energy levels**. You do not need orbitals, orbital shapes or probability functions.

## Worked example 1: counting particles in an ion

**Question.** An ion is written ⁵⁶₂₆Fe³⁺ (Figure 1). (a) How many protons, neutrons and electrons does it have? (b) What is its net charge in coulombs? (c) How does an atom of ⁵⁴₂₆Fe differ from a neutral atom of ⁵⁶₂₆Fe? (d) Estimate the fraction of the ion's mass that comes from its electrons.

1. (a) Protons: Z = **26**. Neutrons: N = A − Z = 56 − 26 = **30**. The charge is 3+, so the ion has 3 fewer electrons than protons: 26 − 3 = **23 electrons**.
2. (b) Net charge = (26 − 23)e = 3 × 1.60 × 10⁻¹⁹ C = **+4.80 × 10⁻¹⁹ C**.
3. (c) Same Z, so it is the same element with the same number of protons (26) and, if neutral, the same number of electrons (26). It has 54 − 26 = **28 neutrons**, two fewer. It is a different **isotope** of iron. Its electron arrangement, and so its chemistry, is essentially the same.
4. (d) Nucleus: 56 × 1.67 × 10⁻²⁷ kg = 9.35 × 10⁻²⁶ kg. Electrons: 23 × 9.11 × 10⁻³¹ kg = 2.10 × 10⁻²⁹ kg. Fraction = 2.10 × 10⁻²⁹ ÷ 9.35 × 10⁻²⁶ ≈ **2.2 × 10⁻⁴**, about 0.022%.

**Interpretation.** Losing three electrons changed the charge a lot but the mass by almost nothing. That is why ⁵⁶Fe³⁺ and a neutral ⁵⁶Fe atom have practically the same mass.

## Worked example 2: the hydrogen ground state

**Question.** In the Bohr model, the electron in a hydrogen atom in its lowest state orbits at r₁ = 5.29 × 10⁻¹¹ m. Find (a) the electric force on the electron, (b) its speed, (c) its de Broglie wavelength, and check the standing-wave condition. (d) Find the total energy in eV.

1. (a) F = ke²/r² = (9.0 × 10⁹)(1.60 × 10⁻¹⁹)² ÷ (5.29 × 10⁻¹¹)² = **8.23 × 10⁻⁸ N**, towards the nucleus.
2. (b) From ke²/r² = mₑv²/r: v = √(ke²/(mₑr)) = √[(9.0 × 10⁹)(1.60 × 10⁻¹⁹)² ÷ (9.11 × 10⁻³¹ × 5.29 × 10⁻¹¹)] = **2.19 × 10⁶ m/s**. That is under 1% of c, so the non-relativistic formulas are fine.
3. (c) λ = h/(mₑv) = (6.63 × 10⁻³⁴) ÷ (9.11 × 10⁻³¹ × 2.187 × 10⁶) = **3.33 × 10⁻¹⁰ m**.
4. Check: circumference 2πr₁ = 2π × 5.29 × 10⁻¹¹ m = 3.32 × 10⁻¹⁰ m. This equals λ (to within rounding of the constants), so **exactly one wavelength** fits: n = 1.
5. (d) E = −ke²/(2r₁) = −½ × (9.0 × 10⁹)(1.60 × 10⁻¹⁹)² ÷ (5.29 × 10⁻¹¹) = −2.18 × 10⁻¹⁸ J. Dividing by 1.60 × 10⁻¹⁹ J/eV: **E = −13.6 eV**.

**Interpretation.** The electron's wavelength (3.3 × 10⁻¹⁰ m) is about the size of the atom itself. That is exactly the situation from Topic 15.1 where quantum theory is essential, so it makes sense that only certain states are allowed.

## Worked example 3: comparing the n = 3 orbit

**Question.** Use the results of Worked example 2 to find, for the n = 3 orbit of hydrogen, the radius, speed, de Broglie wavelength and energy. Compare the electric force with the n = 1 value.

1. Radius: r₃ = 3² × r₁ = 9 × 5.29 × 10⁻¹¹ m = **4.76 × 10⁻¹⁰ m**.
2. Speed: v ∝ 1/√r, and r is 9 times larger, so v₃ = v₁/3 = **7.29 × 10⁵ m/s**.
3. Wavelength: λ ∝ 1/v, so λ₃ = 3λ₁ = **9.99 × 10⁻¹⁰ m**.
4. Check: 2πr₃ = 2.99 × 10⁻⁹ m, and 2.99 × 10⁻⁹ ÷ 9.99 × 10⁻¹⁰ = 3.0. **Three** wavelengths fit, as n = 3 requires.
5. Energy: E ∝ 1/r, so E₃ = −13.6 eV ÷ 9 = **−1.51 eV**.
6. Force: F ∝ 1/r², so F₃ = F₁/81, about 1.2% of the ground-state force.

**Interpretation.** Higher n means a bigger, slower orbit with a weaker force and a higher (less negative) energy. Moving from n = 1 to n = 3 needs 13.6 − 1.51 = 12.1 eV of energy to be added to the atom. How that energy arrives, as a photon, is the subject of Topic 15.3.

## Common misconceptions

- **"The mass number is the mass of the atom in kilograms."** A is a count of nucleons. The mass is roughly A × 1.67 × 10⁻²⁷ kg.
- **"Ions are different elements."** Gaining or losing electrons changes the charge, not Z. Fe³⁺ is still iron.
- **"Isotopes have different numbers of protons."** Isotopes of an element have the same Z and different numbers of neutrons.
- **"Electrons make up a good part of an atom's mass."** They add only a few hundredths of a percent.
- **"In a larger orbit the electron moves faster because it has further to go."** The force is weaker further out, so v = √(ke²/(mₑr)) is smaller.
- **"An electron can orbit at any radius as long as the forces balance."** The force condition alone allows any radius. The standing-wave condition picks out only r = n²r₁.
- **"The ground state has zero energy."** With zero set at infinite separation, the ground state has the most negative energy, −13.6 eV for hydrogen.
- **Using q₁q₂ = e² for every atom.** For a single-electron ion with Z protons the nucleus has charge +Ze, so the force is kZe²/r².

## Where this leads

The allowed energies from the Bohr model explain why atoms emit and absorb light only at certain wavelengths. That is the next topic, [emission and absorption spectra](/advanced-course-resources/physics-2/15-3-emission-absorption-spectra-study-guide/). If the de Broglie wavelength is unfamiliar, look back at [quantum theory and wave-particle duality](/advanced-course-resources/physics-2/15-1-quantum-theory-wave-particle-duality-study-guide/). Test yourself with the [practice questions](/advanced-course-resources/physics-2/15-2-bohr-model-atomic-structure-practice/), then use the [revision notes](/advanced-course-resources/physics-2/15-2-bohr-model-atomic-structure-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/15-2-bohr-model-atomic-structure-checklist/) to consolidate.
