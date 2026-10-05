---
resourceId: "mb-ap-phys2-10.6-study-guide"
title: "Capacitors: Study Guide (Physics 2 10.6)"
description: "Parallel-plate capacitors from first principles: C = Q/ΔV and C = κε₀A/d, the uniform field between the plates, stored energy, dielectrics, and charged particles moving between plates."
course: "physics-2"
unit: 10
topics: ["10.6"]
resourceType: "study-guide"
prerequisites:
  - "Electric potential, potential difference and |E| = |ΔV/Δr| (Topic 10.5)"
  - "Electric field as force per unit charge (Topic 10.3)"
  - "Projectile motion with constant acceleration"
prerequisiteResources: ["mb-ap-phys2-10.5-study-guide"]
learningObjectives:
  - "Describe a parallel-plate capacitor and define capacitance as charge per unit potential difference"
  - "Use C = κε₀A/d to explain and calculate how plate area, separation and the material between the plates change the capacitance"
  - "Calculate the uniform field between the plates from ΔV and d or from Q and A"
  - "Model a charged particle between the plates as moving with constant acceleration, like a projectile"
  - "Calculate the energy stored in a capacitor and explain it as the work needed to separate the charge"
  - "Explain how a dielectric changes the capacitance and the field, for an isolated capacitor and for one kept connected to a battery"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²), e = 1.60 × 10⁻¹⁹ C, mₑ = 9.11 × 10⁻³¹ kg. Ignore edge effects. Keep unrounded values until the final step"
related: ["mb-ap-phys2-10.6-revision-notes", "mb-ap-phys2-10.6-practice", "mb-ap-phys2-10.6-checklist"]
next: "mb-ap-phys2-10.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A parallel-plate capacitor holds +Q on one plate and −Q on the other. Its capacitance is C = Q/ΔV, in farads."
  - "C depends only on the capacitor itself: C = κε₀A/d. It does not depend on Q or ΔV."
  - "Between the plates the field is uniform, E = ΔV/d, and points from the positive plate to the negative plate."
  - "Stored energy U_C = ½QΔV = ½C(ΔV)², the area under a Q–ΔV graph."
  - "Isolated capacitor: Q stays fixed. Capacitor connected to a battery: ΔV stays fixed. Decide which first."
faqs:
  - question: "If each plate holds charge, why do we say the capacitor stores energy and not charge?"
    answer: "The total charge on a capacitor is zero: +Q on one plate and −Q on the other. What it stores is electric potential energy, from the work done to pull those charges apart. 'The charge on a capacitor' means Q, the size of the charge on either plate."
  - question: "Why does a dielectric increase the capacitance?"
    answer: "The field between the plates pulls the dielectric's charges slightly apart. That sets up a field inside the dielectric opposite to the plates' field, so the net field and the potential difference are smaller for the same Q. Since C = Q/ΔV, a smaller ΔV for the same Q means a larger C."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Two plates, equal and opposite charge

A **parallel-plate capacitor** is two flat conducting plates facing each other, a small distance d apart, with an insulator (or empty space) between them. Connect the plates to a battery and electrons move off one plate and onto the other. The result is **+Q on one plate and −Q on the other**: equal sizes, opposite signs. The total charge stays zero.

Separating the charges creates a potential difference ΔV between the plates. The more charge you separate, the larger ΔV becomes, in direct proportion. The ratio is the **capacitance**:

**C = Q / ΔV**

Q is the size of the charge on **one** plate. The unit is the **farad**: 1 F = 1 C/V. A farad is very large; real capacitors are usually measured in microfarads (µF, 10⁻⁶ F), nanofarads (nF, 10⁻⁹ F) or picofarads (pF, 10⁻¹² F).

A large C means the capacitor holds a lot of charge for each volt across it.

## What sets the capacitance

Capacitance depends **only on the capacitor itself**: its shape, its size and the material between the plates. It does not depend on how much charge is on it or what voltage is applied. Double Q and ΔV doubles too, so their ratio stays the same.

For parallel plates:

**C = κε₀A / d**

- A is the area of **one** plate (m²).
- d is the distance between the plates (m).
- ε₀ = 8.85 × 10⁻¹² C²/(N·m²) is the permittivity of free space.
- κ (kappa) is the **dielectric constant** of the material between the plates. κ = 1 for a vacuum, air is very close to 1, and insulating materials have κ > 1. κ has no unit.

Why these trends make sense:

- **Larger A:** the same charge spreads over more area, so the field between the plates is weaker and ΔV is smaller. Smaller ΔV for the same Q means larger C. So C ∝ A.
- **Smaller d:** with the same field, ΔV = Ed is smaller over a shorter distance. Again, larger C. So C ∝ 1/d.

You can test C ∝ 1/d in the lab. Mount two flat plates on insulating spacers of different thicknesses, measure C with a capacitance meter for each spacing, and plot C against 1/d. A straight line confirms the relationship, and its slope estimates κε₀A.

## The field between the plates

Away from the edges, the field between the plates is **uniform**: the same size and direction everywhere. It points from the positive plate to the negative plate, at right angles to the plates. Near the edges the field bulges outward; in this course you ignore these edge effects unless told otherwise.

Because the field is uniform, the average field equals the actual field:

**E = ΔV / d**

With empty space between the plates, the field also depends directly on the charge per unit area:

**E = Q / (ε₀A)**

The two formulas agree. Put Q = CΔV = (ε₀A/d)ΔV into the second one and you get ΔV/d.

The equipotentials between the plates are flat surfaces parallel to the plates, equally spaced for equal steps of V. That is the pattern of a uniform field.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="cap-title cap-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cap-title">Uniform field between parallel plates and the curved path of an electron</title>
<desc id="cap-desc">Two horizontal plates, 4.0 centimetres long, 2.0 centimetres apart. The top plate is marked with plus signs and labelled positive; the bottom plate is marked with minus signs and labelled negative. Six evenly spaced vertical arrows point straight down from the top plate to the bottom plate, showing a uniform field. A dashed horizontal line marks the midline. An electron enters from the left on the midline moving to the right at 2.0 times 10 to the 7 metres per second, and its path curves upward toward the positive plate as a parabola, leaving the plates slightly above the midline. The vertical scale of the deflection is exaggerated.</desc>
<defs><marker id="cap-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="120" y="70" width="320" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="120" y="248" width="320" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle">
<text x="150" y="64">+</text><text x="210" y="64">+</text><text x="270" y="64">+</text><text x="330" y="64">+</text><text x="390" y="64">+</text>
<text x="150" y="282">−</text><text x="210" y="282">−</text><text x="270" y="282">−</text><text x="330" y="282">−</text><text x="390" y="282">−</text>
</g>
<g stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cap-arr)">
<line x1="160" y1="88" x2="160" y2="242"/><line x1="216" y1="88" x2="216" y2="242"/><line x1="272" y1="88" x2="272" y2="242"/>
<line x1="328" y1="88" x2="328" y2="242"/><line x1="384" y1="88" x2="384" y2="242"/><line x1="430" y1="88" x2="430" y2="242"/>
</g>
<line x1="60" y1="165" x2="500" y2="165" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<path d="M60 165 L120 165 Q 280 165 440 115 L 500 96" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="60" cy="165" r="6" fill="#1d2b44"/>
<text x="60" y="190" font-size="12" fill="#1d2b44" text-anchor="middle">electron</text>
<line x1="40" y1="140" x2="100" y2="140" stroke="#1d2b44" stroke-width="2" marker-end="url(#cap-arr)"/>
<text x="70" y="132" font-size="12" fill="#1d2b44" text-anchor="middle">v₀</text>
<g font-size="13" fill="#1d2b44">
<text x="455" y="80">positive plate</text>
<text x="455" y="258">negative plate</text>
<text x="455" y="132">E (uniform)</text>
<line x1="470" y1="165" x2="470" y2="248" stroke="#1d2b44"/>
<text x="476" y="210">d/2</text>
<text x="280" y="310" text-anchor="middle">plate length L</text>
</g>
<line x1="120" y1="295" x2="440" y2="295" stroke="#1d2b44" stroke-width="1"/>
<line x1="120" y1="289" x2="120" y2="301" stroke="#1d2b44"/><line x1="440" y1="289" x2="440" y2="301" stroke="#1d2b44"/>
</svg>
<figcaption>Figure 1. The field between the plates (vertical arrows) is uniform and points from the + plate to the − plate. An electron entering along the midline feels a constant upward force, so its path between the plates is a parabola (solid curve, deflection exaggerated); after it leaves the plates it travels in a straight line.</figcaption>
</figure>

### Charged particles between the plates

A charge q between the plates feels a constant force F = qE, so it has a **constant acceleration** a = qE/m. That is exactly the situation of a thrown ball near Earth's surface, with qE/m playing the part of g. If the particle enters moving parallel to the plates:

- along the plates: no force, so constant velocity, x = v₀t;
- across the plates: constant acceleration from rest, y = ½at².

The path is a parabola. A positive charge curves toward the negative plate; a negative charge curves toward the positive plate. For electrons and protons the electric force is so much larger than the weight that you can ignore gravity.

## Energy stored in a capacitor

Charging a capacitor takes work. Each small bit of charge must be pushed from one plate to the other against the potential difference that already exists. The first bit is easy (ΔV ≈ 0); the last bit is pushed through the full ΔV. The **energy stored** equals that work.

On a graph of Q against ΔV (Figure 2), the line through the origin has slope C, and the energy stored is the **area under the line**, a triangle:

**U_C = ½QΔV = ½C(ΔV)² = Q²/(2C)**

The ½ appears because the average potential difference during charging is half the final value.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="qv-title qv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="qv-title">Graph of charge against potential difference for a 2.0 microfarad capacitor</title>
<desc id="qv-desc">Charge Q in microcoulombs on the vertical axis from 0 to 12, potential difference in volts on the horizontal axis from 0 to 6. A straight line through the origin passes through 4 microcoulombs at 2 volts, 8 at 4 volts and 12 at 6 volts, so the slope is 2.0 microfarads. The triangle under the line up to 6 volts is shaded and labelled: stored energy equals one half times 6.0 volts times 12 microcoulombs, which is 36 microjoules.</desc>
<defs><marker id="qv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<polygon points="80,330 500,330 500,66" fill="#fdf6e3" stroke="none"/>
<line x1="80" y1="330" x2="535" y2="330" stroke="#1d2b44" stroke-width="2" marker-end="url(#qv-arr)"/>
<line x1="80" y1="330" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#qv-arr)"/>
<line x1="80" y1="330" x2="500" y2="66" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="500" y1="330" x2="500" y2="66" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="220" y1="330" x2="220" y2="336" stroke="#1d2b44"/><text x="220" y="350">2</text>
<line x1="360" y1="330" x2="360" y2="336" stroke="#1d2b44"/><text x="360" y="350">4</text>
<line x1="500" y1="330" x2="500" y2="336" stroke="#1d2b44"/><text x="500" y="350">6</text>
<text x="80" y="350">0</text>
<text x="300" y="375" font-size="13">Potential difference ΔV (V)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="242" x2="80" y2="242" stroke="#1d2b44"/><text x="70" y="246">4</text>
<line x1="74" y1="154" x2="80" y2="154" stroke="#1d2b44"/><text x="70" y="158">8</text>
<line x1="74" y1="66" x2="80" y2="66" stroke="#1d2b44"/><text x="70" y="70">12</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Charge Q (µC)</text>
<text x="250" y="140" font-size="13" fill="#1d2b44" text-anchor="middle">slope = C = 2.0 µF</text>
<text x="390" y="290" font-size="13" fill="#1d2b44" text-anchor="middle">area = ½ × 6.0 V × 12 µC</text>
<text x="390" y="308" font-size="13" fill="#1d2b44" text-anchor="middle">= 36 µJ stored</text>
</svg>
<figcaption>Figure 2. For a capacitor, Q is proportional to ΔV. The slope of the line is the capacitance, and the shaded triangle under it is the energy stored: here 36 µJ when a 2.0 µF capacitor is charged to 6.0 V.</figcaption>
</figure>

## Dielectrics

A **dielectric** is an insulator placed between the plates. Its charges cannot flow, but the plates' field pulls them slightly apart: the positive charges shift a little toward the negative plate and the negative charges toward the positive plate. This creates an **induced field inside the dielectric that points opposite to the field from the plates**. The net field is smaller.

- For a **fixed Q**, a smaller field means a smaller ΔV = Ed. Since C = Q/ΔV, the capacitance **increases by the factor κ** when the dielectric fills the gap.
- If the capacitor stays connected to a battery, ΔV cannot change. The larger C then means the battery pushes **more charge** onto the plates: Q = κC₀ΔV.

So before any "what changes?" question, decide which quantity is held fixed:

| Situation | Held fixed | Why |
|---|---|---|
| Charged, then disconnected (isolated) | Q | the charge has nowhere to go |
| Kept connected to a battery | ΔV | the battery sets the potential difference |

## Worked example 1: a parallel-plate capacitor

**Question.** Two plates, each 0.20 m × 0.15 m, are 1.5 mm apart with air between them (κ = 1). The capacitor is connected to a 12 V battery. Find the capacitance, the charge on each plate, the field between the plates and the energy stored.

1. Area of one plate: A = 0.20 m × 0.15 m = 0.030 m². Separation d = 1.5 × 10⁻³ m.
2. Capacitance: C = ε₀A/d = (8.85 × 10⁻¹²)(0.030) ÷ (1.5 × 10⁻³) = **1.77 × 10⁻¹⁰ F** (177 pF).
3. Charge: Q = CΔV = (1.77 × 10⁻¹⁰ F)(12 V) = **2.12 × 10⁻⁹ C**. The other plate holds −2.12 × 10⁻⁹ C.
4. Field: E = ΔV/d = 12 V ÷ 1.5 × 10⁻³ m = **8.0 × 10³ V/m**, from the + plate to the − plate.
5. Energy: U_C = ½C(ΔV)² = 0.5 × (1.77 × 10⁻¹⁰)(12)² = **1.27 × 10⁻⁸ J**.

**Check.** The field from the charge gives the same result: E = Q/(ε₀A) = 2.124 × 10⁻⁹ ÷ (8.85 × 10⁻¹² × 0.030) = 8000 V/m. And ½QΔV = 0.5 × 2.124 × 10⁻⁹ × 12 = 1.27 × 10⁻⁸ J, which agrees. A capacitor the size of a sheet of paper holds only a couple of nanocoulombs at 12 V, which is why practical capacitors use very thin dielectric layers rolled or stacked into a small volume.

## Worked example 2: isolated or connected?

**Question.** Start with the charged capacitor from Worked example 1 (177 pF, 12 V). Predict what happens to C, Q, ΔV, E and U_C in each case: (a) it is disconnected and the plate separation is doubled; (b) it stays connected and the separation is doubled; (c) it is disconnected and a dielectric with κ = 3.0 is slid in to fill the gap.

1. (a) Isolated, so Q is fixed at 2.12 nC. C = ε₀A/d halves to 88.5 pF. ΔV = Q/C **doubles** to 24 V. E = ΔV/d = 24 V ÷ 3.0 mm = 8.0 × 10³ V/m, **unchanged** (E = Q/(ε₀A) depends only on Q and A). U_C = ½QΔV **doubles** to 2.55 × 10⁻⁸ J.
2. (b) Connected, so ΔV is fixed at 12 V. C halves to 88.5 pF. Q = CΔV **halves** to 1.06 nC. E = 12 V ÷ 3.0 mm = 4.0 × 10³ V/m, **halved**. U_C = ½C(ΔV)² **halves** to 6.37 × 10⁻⁹ J.
3. (c) Isolated, so Q stays at 2.12 nC. C triples to 531 pF. ΔV = Q/C falls to **4.0 V**. The field in the dielectric is 4.0 V ÷ 1.5 mm = 2.7 × 10³ V/m, one third of before: the induced field (5.3 × 10³ V/m, opposite) cancels two thirds of the plates' field. U_C = Q²/(2C) falls to **one third**, 4.25 × 10⁻⁹ J.

| Case | C | Q | ΔV | E | U_C |
|---|---|---|---|---|---|
| (a) isolated, d doubled | ½ | same | ×2 | same | ×2 |
| (b) connected, d doubled | ½ | ½ | same | ½ | ½ |
| (c) isolated, κ = 3.0 added | ×3 | same | ⅓ | ⅓ | ⅓ |

**Interpretation.** In (a) the stored energy rises: you must do work to pull the oppositely charged plates apart, and that work is stored. In (c) the energy falls: the field pulls the dielectric into the gap and does work on it, so the capacitor loses energy.

## Worked example 3: an electron between the plates

**Question.** Two plates 2.0 cm apart and 4.0 cm long have a potential difference of 50 V. An electron enters along the midline, moving parallel to the plates at 2.0 × 10⁷ m/s (Figure 1). How far is it deflected by the time it leaves the plates? Which way?

1. Field: E = ΔV/d = 50 V ÷ 0.020 m = 2.5 × 10³ V/m, from the + plate to the − plate.
2. Force: F = eE = (1.60 × 10⁻¹⁹ C)(2500 V/m) = 4.0 × 10⁻¹⁶ N, toward the **positive** plate (the electron is negative, so the force is opposite to E).
3. Acceleration: a = F/m = 4.0 × 10⁻¹⁶ ÷ 9.11 × 10⁻³¹ = 4.39 × 10¹⁴ m/s².
4. Time between the plates: t = L/v₀ = 0.040 m ÷ 2.0 × 10⁷ m/s = 2.0 × 10⁻⁹ s.
5. Deflection: y = ½at² = 0.5 × (4.39 × 10¹⁴)(2.0 × 10⁻⁹)² = **8.8 × 10⁻⁴ m**, about 0.88 mm toward the positive plate.

**Check.** 0.88 mm is less than the 10 mm from the midline to the plate, so the electron gets through. Gravity would give an acceleration of 9.8 m/s², about 2 × 10⁻¹⁴ of the electric one, so ignoring it is safe.

## Common misconceptions

- **"C depends on Q or ΔV."** C = Q/ΔV is how you *measure* C, not what *sets* it. Only A, d and κ set it.
- **Adding the charges on both plates.** Q is the charge on one plate. The capacitor's total charge is zero.
- **Forgetting the ½ in the stored energy.** QΔV would assume all the charge was moved through the full ΔV.
- **Not deciding what is fixed.** Most errors in "what happens if…" questions come from assuming Q is fixed when the battery is still connected, or the reverse.
- **"The field is stronger near the plates."** Away from the edges it is the same everywhere between the plates.
- **"A dielectric is a conductor."** A conductor filling the gap would join the plates and discharge them. A dielectric is an insulator whose charges only shift slightly.
- **Bending the electron the wrong way.** A negative charge is pushed opposite to the field, toward the positive plate.

## Where this leads

Topic 10.7 uses ΔU_E = qΔV with conservation of energy to find the speed a charge gains crossing a potential difference such as the gap in a capacitor: see the [conservation of electric energy study guide](/advanced-course-resources/physics-2/10-7-conservation-electric-energy-study-guide/). Capacitors return in Unit 11, in circuits that charge and discharge them. Test yourself with the [practice questions](/advanced-course-resources/physics-2/10-6-capacitors-practice/), then use the [revision notes](/advanced-course-resources/physics-2/10-6-capacitors-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/10-6-capacitors-checklist/). For potential and equipotentials, look back at the [electric potential study guide](/advanced-course-resources/physics-2/10-5-electric-potential-study-guide/).
