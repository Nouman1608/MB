---
resourceId: "mb-ap-physcem-10.3-study-guide"
title: "Capacitors: Study Guide (Physics C: E&M 10.3)"
description: "Calculus-based guide to capacitors: C = Q/ΔV, the parallel-plate field from Gauss's law, spherical and coaxial capacitors, charged particles between plates and stored energy."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.3"]
resourceType: "study-guide"
prerequisites:
  - "Gauss's law and the field of a charged sheet, E = σ/(2ε₀) (Topic 8.6)"
  - "Potential difference as ΔV = −∫E·dr (Unit 9)"
  - "Charge on conductors in electrostatic equilibrium (Topics 10.1 and 10.2)"
learningObjectives:
  - "Describe what a capacitor is and what its capacitance measures"
  - "Use Gauss's law and superposition to show the field between parallel plates is σ/ε₀ and uniform"
  - "Derive the capacitance of parallel-plate, concentric spherical and coaxial cylindrical capacitors"
  - "Treat a charged particle between parallel plates as a constant-acceleration (projectile-like) problem"
  - "Derive the stored energy by integrating the work done to charge a capacitor"
  - "Predict how C, Q, ΔV, E and U change when the geometry changes with Q fixed or with ΔV fixed"
skills: ["1", "2", "3"]
studyMinutes: 60
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²); 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; e = 1.60 × 10⁻¹⁹ C; mₑ = 9.11 × 10⁻³¹ kg. Keep unrounded values until the final step"
related: ["mb-ap-physcem-10.3-revision-notes", "mb-ap-physcem-10.3-practice", "mb-ap-physcem-10.3-checklist"]
next: "mb-ap-physcem-10.3-practice"
prerequisiteResources: ["mb-ap-physcem-10.2-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A capacitor is two separated conductors holding charges +Q and −Q; capacitance C = Q/ΔV."
  - "C depends only on shape, size and the material between the conductors, never on Q or ΔV."
  - "Parallel plates: E = σ/ε₀ = Q/(ε₀A), uniform away from the edges, and C = ε₀A/d for an air gap."
  - "Method for any shape: assume ±Q, find E with Gauss's law, integrate to get ΔV, then C = Q/ΔV."
  - "Stored energy U = ½QΔV = Q²/(2C) = ½C(ΔV)², equal to the work done to separate the charge."
faqs:
  - question: "Is the net charge on a capacitor Q?"
    answer: "No. One conductor holds +Q and the other −Q, so the net charge is zero. Q means the size of the charge on either conductor."
  - question: "Which capacitor shapes do I need to analyse with numbers?"
    answer: "Parallel-plate, concentric spherical and coaxial cylindrical capacitors. Other shapes store charge too, but the course only expects quantitative work on these three."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 10.3. The algebra-based Physics 2 course also meets parallel-plate capacitors; this course adds Gauss's-law derivations, spherical and cylindrical capacitors, and energy by integration.

Constants used throughout: **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**, 1/(4πε₀) = 8.99 × 10⁹ N·m²/C². Unless a question says otherwise, the space between the conductors is air or vacuum (dielectric constant κ = 1). Topic 10.4 deals with other materials.

## What a capacitor is

A **capacitor** is two conductors separated by an insulating gap. When you connect it to a battery, the battery moves charge from one conductor to the other. One conductor ends up with **+Q** and the other with **−Q**. The net charge stays zero. When we say "the charge on a capacitor", we mean Q, the size of the charge on **either** conductor.

The separated charges create a field in the gap and so a potential difference ΔV. Double Q and both the field and ΔV double. The fixed ratio is the **capacitance**:

**C = Q / ΔV**

The unit is the **farad**: 1 F = 1 C/V. A farad is very large, so real capacitors are usually rated in μF, nF or pF.

C depends **only** on the capacitor itself: the shape, size and spacing of the conductors and the material between them. Charging it more changes Q and ΔV in proportion, never C.

## The parallel-plate capacitor

The simplest design is two flat plates of area A, a distance d apart, with d much smaller than the width of the plates. Find the field with Gauss's law and superposition.

1. In Topic 8.6 you found that one large thin sheet with charge density σ makes a field **σ/(2ε₀)** on each side, pointing away from positive charge.
2. The + plate has density +σ = Q/A; the − plate has −σ.
3. **Between** the plates, both fields point from + to −. They add: E = σ/(2ε₀) + σ/(2ε₀) = **σ/ε₀**.
4. **Outside** the plates, the two fields point in opposite directions and cancel: E ≈ 0.

So between the plates:

**E = σ/ε₀ = Q/(ε₀A)**

The field is uniform in size and direction, except near the edges, where the lines bulge outward ("fringing"). E is proportional to σ: put twice the charge on the same plates and E doubles.

You can reach the same result in one step. Take a Gaussian pillbox with one end inside the metal of the + plate (where E = 0) and the other end in the gap. Only the gap end has flux: EA′ = σA′/ε₀, so E = σ/ε₀.

<figure>
<svg viewBox="0 0 560 390" role="img" aria-labelledby="cap-pp-title cap-pp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cap-pp-title">Field of a parallel-plate capacitor by superposition</title>
<desc id="cap-pp-desc">Top: a plate on the left with plus charges on its inner face and a plate on the right with minus charges on its inner face, with four equal straight arrows from plus to minus between them and dashed fringing curves at the edges; outside, E is approximately zero. Bottom: the plus plate alone gives arrows pointing away from it on both sides; the minus plate alone gives arrows pointing towards it. Between the plates both point right and add; outside they point opposite ways and cancel.</desc>
<defs><marker id="cpp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="170" y="40" width="10" height="180" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="380" y="40" width="10" height="180" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="15" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="191" y="56">+</text><text x="191" y="94">+</text><text x="191" y="134">+</text><text x="191" y="174">+</text><text x="191" y="212">+</text>
<text x="370" y="56">−</text><text x="370" y="94">−</text><text x="370" y="134">−</text><text x="370" y="174">−</text><text x="370" y="212">−</text>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#cpp-arr)">
<line x1="188" y1="70" x2="370" y2="70"/>
<line x1="188" y1="110" x2="370" y2="110"/>
<line x1="188" y1="150" x2="370" y2="150"/>
<line x1="188" y1="190" x2="370" y2="190"/>
</g>
<path d="M180 42 Q280 8 380 42" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<path d="M180 218 Q280 252 380 218" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="80" y="135">outside:</text><text x="80" y="153">E ≈ 0</text>
<text x="480" y="135">outside:</text><text x="480" y="153">E ≈ 0</text>
<text x="280" y="246">between: E = σ/ε₀, uniform</text>
<text x="280" y="20" font-size="11">fringing at the edges (dashed)</text>
</g>
<line x1="20" y1="262" x2="540" y2="262" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<g font-size="12" fill="#1d2b44">
<text x="20" y="285">+ plate alone, each arrow σ/(2ε₀):</text>
<text x="20" y="335">− plate alone, each arrow σ/(2ε₀):</text>
</g>
<line x1="175" y1="292" x2="175" y2="370" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="385" y1="292" x2="385" y2="370" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#cpp-arr)">
<line x1="150" y1="305" x2="70" y2="305"/>
<line x1="230" y1="305" x2="330" y2="305"/>
<line x1="410" y1="305" x2="490" y2="305"/>
<line x1="70" y1="355" x2="150" y2="355"/>
<line x1="230" y1="355" x2="330" y2="355"/>
<line x1="490" y1="355" x2="410" y2="355"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="110" y="382">opposite: cancel</text>
<text x="280" y="382">same way: add to σ/ε₀</text>
<text x="450" y="382">opposite: cancel</text>
</g>
</svg>
<figcaption>Figure 1. Top: the field between oppositely charged parallel plates is uniform, except for fringing near the edges, and close to zero outside. Bottom: each plate alone gives σ/(2ε₀) on both sides. The two fields add between the plates and cancel outside.</figcaption>
</figure>

**Capacitance.** The field is uniform, so the potential difference is ΔV = Ed = Qd/(ε₀A). Then:

**C = Q/ΔV = ε₀A/d**

(With a material of dielectric constant κ filling the gap, C = κε₀A/d; see Topic 10.4.) Larger plates hold more charge for the same ΔV; a wider gap needs a larger ΔV for the same field, so C falls.

## A method for any capacitor

The parallel-plate result follows a recipe that works for every shape in this course:

1. Put +Q on one conductor and −Q on the other.
2. Use Gauss's law to find E in the gap.
3. Integrate along a path from one conductor to the other: ΔV = ∫E·dr (take the size).
4. Divide: C = Q/ΔV. Q should cancel. If it does not, check your work.

**Concentric spherical capacitor.** An inner sphere of radius a holds +Q; a thin outer shell of radius b holds −Q. A spherical Gaussian surface with a < r < b encloses +Q, so E = Q/(4πε₀r²). Then:

ΔV = ∫ₐᵇ Q/(4πε₀r²) dr = (Q/4πε₀)(1/a − 1/b) = (Q/4πε₀)(b − a)/(ab)

**C = 4πε₀ab/(b − a)**

Two checks:

- Let b → ∞. Then C → 4πε₀a, the capacitance of an isolated sphere.
- Let the gap be thin, b − a = d ≪ a. Then ab ≈ a², and C ≈ ε₀(4πa²)/d. That is ε₀A/d with A the area of the sphere: up close, the gap looks like parallel plates.

The coaxial cylindrical capacitor follows the same recipe; it is Worked example 2.

## A charged particle between the plates

The field between the plates is uniform, so a charged particle there feels a constant force **F = qE**. Its acceleration a = qE/m is constant. The motion is just like a projectile near Earth's surface, with qE/m in place of g:

- along the plates: no force, so constant velocity;
- across the plates: constant acceleration, so displacement ½at².

The path is a parabola. For electrons and protons, gravity is negligible next to qE (Worked example 3).

## Energy stored in a capacitor

To charge a capacitor, something (usually a battery) must move charge from one conductor to the other against the field. The work done is stored as **electric potential energy**.

Suppose the capacitor already holds charge q, so the potential difference is q/C. Moving a further small charge dq takes work dW = (q/C) dq. Charging from 0 to Q:

**U = ∫₀^Q (q/C) dq = Q²/(2C)**

Using Q = CΔV, the same result can be written three ways:

**U = Q²/(2C) = ½QΔV = ½C(ΔV)²**

On a graph of ΔV against q, the line is straight with slope 1/C. Each thin strip of width dq under the line has area (q/C) dq, the work for that bit of charge. So the **area under the line**, a triangle, is the stored energy, ½QΔV.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="cap-u-title cap-u-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cap-u-title">Potential difference against charge while charging a capacitor</title>
<desc id="cap-u-desc">Charge q on the horizontal axis, potential difference on the vertical axis. A straight line of slope 1 over C rises from the origin to the point Q, Delta V. The triangle under it is hatched and labelled U equals one half Q Delta V. A thin outlined strip of width dq at charge q is labelled dW equals q over C times dq.</desc>
<defs>
<marker id="cu-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="cu-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="#1d2b44" stroke-width="1"/></pattern>
</defs>
<polygon points="80,280 440,280 440,70" fill="url(#cu-hatch)" stroke="none"/>
<line x1="80" y1="280" x2="530" y2="280" stroke="#1d2b44" stroke-width="2" marker-end="url(#cu-arr)"/>
<line x1="80" y1="280" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#cu-arr)"/>
<line x1="80" y1="280" x2="440" y2="70" stroke="#1d2b44" stroke-width="3"/>
<line x1="440" y1="280" x2="440" y2="70" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="80" y1="70" x2="440" y2="70" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="250" y="181" width="20" height="99" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="13" fill="#1d2b44">
<text x="440" y="300" text-anchor="middle">Q</text>
<text x="260" y="300" text-anchor="middle">q</text>
<text x="70" y="74" text-anchor="end">ΔV</text>
<text x="70" y="284" text-anchor="end">0</text>
<text x="300" y="325" text-anchor="middle">Charge on the capacitor, q (C)</text>
<text x="160" y="140">slope = 1/C</text>
<text x="250" y="170" text-anchor="end">strip: dW = (q/C) dq</text>
<text x="455" y="200">hatched area:</text>
<text x="455" y="218">U = ½QΔV</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">Potential difference (V)</text>
</svg>
<figcaption>Figure 2. While a capacitor charges, ΔV = q/C rises in proportion to q. The work for each small charge dq is a thin strip under the line; the whole hatched triangle is the stored energy U = ½QΔV.</figcaption>
</figure>

Why ½QΔV and not QΔV? Early charge crossed a small ΔV; only the last bit crossed the full ΔV.

## Fixed charge or fixed potential difference?

When the geometry changes, first ask what stays constant:

- **Isolated** capacitor (disconnected): **Q is fixed**, because the charge has nowhere to go.
- Capacitor **connected to a battery**: **ΔV is fixed** by the battery.

| Double the plate separation d | C | Q | ΔV | E | U |
|---|---|---|---|---|---|
| Isolated (Q fixed) | ×½ | same | ×2 | same | ×2 |
| Connected (ΔV fixed) | ×½ | ×½ | same | ×½ | ×½ |

Isolated: E = Q/(ε₀A) does not involve d, and U = Q²/(2C) doubles as C halves (you do work pulling the plates apart). Connected: U = ½C(ΔV)² halves.

## Worked example 1: a parallel-plate capacitor, then pulling the plates apart

**Question.** Two plates, each of area 0.050 m², are 1.0 mm apart in air and connected to a 6.0 V battery. (a) Find C, Q, σ, E and U. (b) The battery is disconnected, then the plates are pulled apart to 3.0 mm. Find the new ΔV, E and U, and the work done by the person pulling.

**(a)**

1. C = ε₀A/d = (8.85 × 10⁻¹²)(0.050) ÷ (1.0 × 10⁻³) = 4.43 × 10⁻¹⁰ F = 443 pF.
2. Q = CΔV = (4.425 × 10⁻¹⁰ F)(6.0 V) = 2.66 × 10⁻⁹ C.
3. σ = Q/A = 5.31 × 10⁻⁸ C/m².
4. E = ΔV/d = 6.0 V ÷ 1.0 × 10⁻³ m = 6.0 × 10³ V/m. Check: σ/ε₀ = 5.31 × 10⁻⁸ ÷ 8.85 × 10⁻¹² = 6.0 × 10³ N/C. (1 V/m = 1 N/C.)
5. U = ½C(ΔV)² = ½(4.425 × 10⁻¹⁰)(6.0)² = 7.97 × 10⁻⁹ J.

**(b)** The capacitor is isolated, so Q stays 2.66 × 10⁻⁹ C.

1. C′ = ε₀A/(3.0 × 10⁻³ m) = 1.48 × 10⁻¹⁰ F, one third of C.
2. ΔV′ = Q/C′ = 18 V, three times larger.
3. E′ = Q/(ε₀A) is unchanged: 6.0 × 10³ V/m (check: 18 V ÷ 3.0 mm).
4. U′ = Q²/(2C′) = 2.39 × 10⁻⁸ J, three times larger.
5. Work done by the person = U′ − U = 1.59 × 10⁻⁸ J.

**Interpretation.** The plates attract, so separating them takes work, and that work is stored. ΔV rises although no charge was added.

## Worked example 2: a coaxial cylindrical capacitor

**Question.** A coaxial cable has an inner wire of radius a = 0.40 mm and a thin outer conducting tube of radius b = 1.5 mm, with air between them. Its length is L = 2.0 m. (a) Derive C for a length L. (b) Evaluate C. (c) The cable is charged to 100 V. Find Q and the field at the surface of the inner wire.

**(a)**

1. Put +Q on the inner wire and −Q on the tube. The charge per length is λ = Q/L.
2. Gaussian surface: a coaxial cylinder of radius r (a < r < b) and length L. E is radial, so the end caps have zero flux: E(2πrL) = Q/ε₀, giving E = Q/(2πε₀Lr).
3. ΔV = ∫ₐᵇ Q/(2πε₀Lr) dr = [Q/(2πε₀L)] ln(b/a).
4. **C = Q/ΔV = 2πε₀L / ln(b/a)**. Q cancels, as it should.

**(b)** ln(1.5/0.40) = ln 3.75 = 1.322. C = 2π(8.85 × 10⁻¹²)(2.0) ÷ 1.322 = 8.41 × 10⁻¹¹ F = 84 pF (42 pF per metre).

**(c)** Q = CΔV = 8.41 × 10⁻⁹ C, so λ = 4.21 × 10⁻⁹ C/m. At r = a: E = λ/(2πε₀a) = 1.89 × 10⁵ V/m.

**Check.** Rearranging, E(a) = ΔV/[a ln(b/a)] = 100 ÷ (4.0 × 10⁻⁴ × 1.322) = 1.89 × 10⁵ V/m. The field is strongest next to the thin wire (E ∝ 1/r). C grows with L, as expected.

## Worked example 3: an electron passing between plates

**Question.** An electron enters the gap between two horizontal plates midway between them, moving at 1.0 × 10⁷ m/s parallel to the plates. The plates are 5.0 cm long and 2.0 cm apart, with ΔV = 40 V. Does it leave the plates, and at what angle?

1. E = ΔV/d = 40 ÷ 0.020 = 2.0 × 10³ V/m, uniform.
2. a = eE/mₑ = (1.60 × 10⁻¹⁹)(2.0 × 10³) ÷ (9.11 × 10⁻³¹) = 3.51 × 10¹⁴ m/s², towards the **positive** plate (the electron is negative).
3. Time between the plates: t = 0.050 m ÷ 1.0 × 10⁷ m/s = 5.0 × 10⁻⁹ s.
4. Sideways displacement: y = ½at² = ½(3.51 × 10¹⁴)(5.0 × 10⁻⁹)² = 4.4 × 10⁻³ m = 4.4 mm. That is less than the 10 mm to a plate, so the electron gets out.
5. Sideways velocity at exit: v_y = at = 1.76 × 10⁶ m/s. Angle: tan θ = 1.76 × 10⁶ ÷ 1.0 × 10⁷, so θ = 10° from its original direction.

**Check.** The electric force, 3.2 × 10⁻¹⁶ N, is more than 10¹³ times the electron's weight (about 8.9 × 10⁻³⁰ N), so ignoring gravity is safe. A slower electron spends longer between the plates; y ∝ 1/v², so at half the speed it would deflect four times as far and hit the plate.

## Common misconceptions

- **"The capacitor's charge is 2Q" or "its net charge is Q."** Each conductor holds Q in size; the net charge is zero.
- **"More charge means more capacitance."** C is set by geometry and material. Extra charge raises ΔV in proportion, so Q/ΔV is unchanged.
- **Using σ/(2ε₀) between the plates.** That is one isolated sheet. Two plates add to σ/ε₀.
- **"E between the plates depends on d."** With Q fixed, E = Q/(ε₀A) does not involve d. Only when ΔV is fixed does E = ΔV/d change with d.
- **Forgetting to ask what is constant.** Isolated means Q fixed; connected to a battery means ΔV fixed.
- **U = QΔV.** That is the energy for charge Q crossing a fixed ΔV. Charging a capacitor gives ½QΔV.
- **Using the parallel-plate formula for spheres or cylinders.** Use the spherical or coaxial result unless the gap is thin compared with the radius.

## Where this leads

Next, in [Topic 10.4, Dielectrics](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-study-guide/), you fill the gap with an insulating material and see C rise by the factor κ. In Unit 11 you will combine capacitors in series and parallel and watch them charge and discharge in RC circuits. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-checklist/).
