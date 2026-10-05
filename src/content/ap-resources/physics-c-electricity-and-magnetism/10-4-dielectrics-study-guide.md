---
resourceId: "mb-ap-physcem-10.4-study-guide"
title: "Dielectrics: Study Guide (Physics C: E&M 10.4)"
description: "Calculus-based guide to dielectrics: polarization, the dielectric constant κ = ε/ε₀, why E falls to E₀/κ in an isolated capacitor and why C rises to κC₀."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.4"]
resourceType: "study-guide"
prerequisites:
  - "Capacitance C = Q/ΔV and the parallel-plate results E = σ/ε₀ and C = ε₀A/d (Topic 10.3)"
  - "Superposition of electric fields (Topic 8.3)"
  - "Stored energy U = Q²/(2C) = ½C(ΔV)² (Topic 10.3)"
learningObjectives:
  - "Explain how a dielectric becomes polarized and why its field opposes the applied field"
  - "Relate the dielectric constant to the permittivity of the material, κ = ε/ε₀"
  - "Show that filling an isolated parallel-plate capacitor reduces E and ΔV by κ and raises C by κ"
  - "Predict changes in Q, ΔV, E and U when a dielectric is inserted with Q fixed or with ΔV fixed"
  - "Plan a measurement of κ and find it from the gradient of a straight-line graph"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²). Keep unrounded values until the final step"
related: ["mb-ap-physcem-10.4-revision-notes", "mb-ap-physcem-10.4-practice", "mb-ap-physcem-10.4-checklist"]
next: "mb-ap-physcem-10.4-practice"
prerequisiteResources: ["mb-ap-physcem-10.3-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A dielectric is an insulator. Its charges cannot flow, but they shift slightly, so the material polarizes."
  - "The polarized dielectric makes a field opposite to the applied field, so the net field is smaller."
  - "κ = ε/ε₀. Filling an isolated capacitor gives E = E₀/κ, ΔV = ΔV₀/κ and C = κC₀ = κε₀A/d."
  - "Isolated (Q fixed): ΔV, E and U all fall by κ. Connected (ΔV fixed): Q and U rise by κ, E is unchanged."
  - "κ is 1 for vacuum, about 1.0006 for air and greater than 1 for ordinary insulating materials."
faqs:
  - question: "Does a dielectric always change the capacitance?"
    answer: "Filling the gap completely multiplies C by κ. A thinner slab raises C by less, and a material with κ very close to 1 (such as air) makes almost no difference."
  - question: "Why is a dielectric different from a conductor?"
    answer: "In a conductor charges move freely until the field inside is zero. In a dielectric they only shift slightly within atoms or molecules, so the field inside is reduced but not cancelled."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 10.4. The algebra-based Physics 2 course mentions dielectrics inside its capacitor topic; here they have a topic of their own, built on the Gauss's-law results of [Topic 10.3](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-study-guide/).

Constant used throughout: **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**.

## What happens inside a dielectric

A **dielectric** is an insulating material, such as plastic, glass, paper or ceramic. In a conductor, some electrons are free to move through the whole material. In a dielectric, the charges are bound to their atoms or molecules. An electric field can only shift them slightly. This is called **polarization**.

There are two ways it happens:

- **Non-polar molecules** have no dipole of their own. The applied field pulls the electron cloud one way and the nucleus the other, making a small **induced dipole**.
- **Polar molecules** (water is an example) already have a dipole. The field turns them partly into line, against the jostling of thermal motion.

Either way, the dipoles point along the field. Inside the material, the + end of one dipole sits next to the − end of the next, so their charges cancel. At the two faces they do not. The face next to the **positive** plate is left with a thin layer of **negative** bound charge; the face next to the negative plate gets **positive** bound charge. These are **induced (bound) surface charges**. They cannot leave the dielectric.

## The induced field and the dielectric constant

The induced surface charges form a pair of oppositely charged sheets, just like a small capacitor inside the big one. Their field points from their + face to their − face. That is **opposite** to the applied field E₀ from the plates. By superposition, the net field in the material is smaller:

**E = E₀ − E_induced**

For a given material, E is a fixed fraction of E₀. We write that fraction as 1/κ:

**E = E₀/κ**

where **κ** (kappa) is the **dielectric constant** of the material. It has no unit. It also links the material's permittivity ε to the permittivity of free space:

**κ = ε/ε₀**

Some values: κ = 1 for a vacuum (by definition), about 1.0006 for air, about 2.1 for PTFE and about 80 for water at 20 °C. Air is so close to 1 that the course treats air-filled capacitors as having κ = 1.

**Size of the induced charge.** If the plates carry free charge density σ, then E₀ = σ/ε₀. The induced sheets carry density σᵢ, so E_induced = σᵢ/ε₀. Setting E₀ − σᵢ/ε₀ = E₀/κ gives:

**σᵢ = σ(1 − 1/κ)**

σᵢ is always smaller than σ, so the field is reduced but never reversed. A conductor would be the limit κ → ∞: σᵢ = σ and the field inside drops to zero.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="diel-pol-title diel-pol-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="diel-pol-title">A polarized dielectric between capacitor plates</title>
<desc id="diel-pol-desc">A positive plate on the left and a negative plate on the right, each with its free charge on the face towards the gap. A hatched slab of dielectric fills most of the gap. Inside it, small oval dipoles each have a minus end on the left and a plus end on the right. Along the slab's left face is a column of small minus signs, and along its right face a column of small plus signs: the induced surface charges. Below, three arrows: a long arrow pointing right labelled E nought from the free charge on the plates; a shorter arrow pointing left labelled E induced from the bound charge; and a short arrow pointing right labelled net field E equals E nought over kappa.</desc>
<defs>
<marker id="dp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="dp-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="12" stroke="#1d2b44" stroke-width="0.6" stroke-opacity="0.45"/></pattern>
</defs>
<rect x="110" y="30" width="10" height="190" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="440" y="30" width="10" height="190" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="15" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="130" y="60">+</text><text x="130" y="110">+</text><text x="130" y="160">+</text><text x="130" y="210">+</text>
<text x="430" y="60">−</text><text x="430" y="110">−</text><text x="430" y="160">−</text><text x="430" y="210">−</text>
</g>
<rect x="140" y="40" width="280" height="170" fill="url(#dp-hatch)" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="13" fill="#1d2b44" text-anchor="middle">
<text x="150" y="70">−</text><text x="150" y="110">−</text><text x="150" y="150">−</text><text x="150" y="190">−</text>
<text x="410" y="70">+</text><text x="410" y="110">+</text><text x="410" y="150">+</text><text x="410" y="190">+</text>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<ellipse cx="215" cy="85" rx="24" ry="11"/><ellipse cx="345" cy="85" rx="24" ry="11"/>
<ellipse cx="280" cy="125" rx="24" ry="11"/>
<ellipse cx="215" cy="165" rx="24" ry="11"/><ellipse cx="345" cy="165" rx="24" ry="11"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="203" y="89">−</text><text x="227" y="89">+</text><text x="333" y="89">−</text><text x="357" y="89">+</text>
<text x="268" y="129">−</text><text x="292" y="129">+</text>
<text x="203" y="169">−</text><text x="227" y="169">+</text><text x="333" y="169">−</text><text x="357" y="169">+</text>
<text x="280" y="232">dielectric (hatched): dipoles line up with the field</text>
</g>
<g stroke="#1d2b44" marker-end="url(#dp-arr)">
<line x1="140" y1="258" x2="420" y2="258" stroke-width="3"/>
<line x1="420" y1="283" x2="250" y2="283" stroke-width="2" stroke-dasharray="7 4"/>
<line x1="140" y1="310" x2="250" y2="310" stroke-width="3"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="10" y="262">E₀ (free charge)</text>
<text x="10" y="287">E_induced (bound)</text>
<text x="10" y="314">net E = E₀/κ</text>
</g>
</svg>
<figcaption>Figure 1. The applied field E₀ lines up the dipoles in the dielectric. This leaves bound negative charge on the face next to the positive plate and bound positive charge on the other face. Their field (dashed arrow) points against E₀, so the net field in the material is E₀/κ.</figcaption>
</figure>

## Capacitance with a dielectric

Fill the gap of an isolated parallel-plate capacitor with a dielectric. The free charge Q on the plates does not change. The field falls to E₀/κ everywhere in the gap, so the potential difference falls too:

ΔV = Ed = (E₀/κ)d = ΔV₀/κ

The capacitance therefore rises:

**C = Q/ΔV = κQ/ΔV₀ = κC₀ = κε₀A/d**

In words: the bound charges partly cancel the field of the free charges, so the plates can hold the same charge at a lower potential difference. That is exactly what "more capacitance" means. The formula C = κε₀A/d can also be written εA/d, with ε = κε₀.

This works for the other shapes too. Filling a spherical or coaxial capacitor completely with the material multiplies its capacitance by κ, because every field in the gap is divided by κ.

## Isolated or connected: two different stories

As in Topic 10.3, the first question is what stays fixed. Insert a slab that fills the gap:

| Quantity | Isolated (Q fixed) | Connected to battery (ΔV fixed) |
|---|---|---|
| C | ×κ | ×κ |
| Q | same | ×κ (the battery supplies more charge) |
| ΔV | ÷κ | same |
| E between plates | ÷κ | same (E = ΔV/d) |
| U | ÷κ, from U = Q²/(2C) | ×κ, from U = ½C(ΔV)² |

In the connected case, E is unchanged because ΔV and d are unchanged. The induced charge still cuts the field, but the battery sends extra free charge to the plates until E is back to ΔV/d.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="diel-ca-title diel-ca-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="diel-ca-title">Capacitance against plate area, with and without a dielectric</title>
<desc id="diel-ca-desc">Horizontal axis: plate area from 0 to 0.040 square metres. Vertical axis: capacitance from 0 to 800 picofarads. Plate gap 1.0 millimetre. Lower straight line through the origin with open circles: air, reaching 354 picofarads at 0.040 square metres. Upper straight line through the origin with filled squares: dielectric with kappa 2.1, reaching 743 picofarads at 0.040 square metres. The upper line is 2.1 times as steep.</desc>
<defs><marker id="dc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="290" x2="545" y2="290" stroke="#1d2b44" stroke-width="2" marker-end="url(#dc-arr)"/>
<line x1="80" y1="290" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#dc-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="190" y1="290" x2="190" y2="296" stroke="#1d2b44"/><text x="190" y="310">0.010</text>
<line x1="300" y1="290" x2="300" y2="296" stroke="#1d2b44"/><text x="300" y="310">0.020</text>
<line x1="410" y1="290" x2="410" y2="296" stroke="#1d2b44"/><text x="410" y="310">0.030</text>
<line x1="520" y1="290" x2="520" y2="296" stroke="#1d2b44"/><text x="520" y="310">0.040</text>
<text x="300" y="332" font-size="13">Plate area, A (m²)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="230" x2="80" y2="230" stroke="#1d2b44"/><text x="70" y="234">200</text>
<line x1="74" y1="170" x2="80" y2="170" stroke="#1d2b44"/><text x="70" y="174">400</text>
<line x1="74" y1="110" x2="80" y2="110" stroke="#1d2b44"/><text x="70" y="114">600</text>
<line x1="74" y1="50" x2="80" y2="50" stroke="#1d2b44"/><text x="70" y="54">800</text>
</g>
<text x="20" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 170)">Capacitance, C (pF)</text>
<line x1="80" y1="290" x2="520" y2="183.8" stroke="#1d2b44" stroke-width="2"/>
<line x1="80" y1="290" x2="520" y2="67.0" stroke="#1d2b44" stroke-width="2.5"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="190" cy="263.5" r="4.5"/><circle cx="300" cy="236.9" r="4.5"/><circle cx="410" cy="210.4" r="4.5"/><circle cx="520" cy="183.8" r="4.5"/>
</g>
<g fill="#1d2b44">
<rect x="185.5" y="229.7" width="9" height="9"/><rect x="295.5" y="174.0" width="9" height="9"/><rect x="405.5" y="118.2" width="9" height="9"/><rect x="515.5" y="62.5" width="9" height="9"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="335" y="95">dielectric, κ = 2.1 (squares)</text>
<text x="335" y="112">gradient = κε₀/d</text>
<text x="390" y="250">air (circles)</text>
<text x="390" y="267">gradient = ε₀/d</text>
</g>
</svg>
<figcaption>Figure 2. Calculated capacitance against plate area for a 1.0 mm gap. Both lines pass through the origin (C ∝ A). The dielectric line is κ = 2.1 times as steep, so the ratio of the gradients gives κ.</figcaption>
</figure>

## Measuring κ in the lab

Figure 2 suggests a method. With a capacitance meter you can measure C directly.

1. **Question:** what is κ for a given sheet material?
2. **Independent variable:** something you can change in a controlled way, such as the plate area A (use different-sized plates) or the gap d (stack 1, 2, 3, … identical sheets).
3. **Dependent variable:** C, read from the meter.
4. **Controls:** the same material, plates pressed flat with no air gaps, the same leads, and the meter zeroed with the leads open to remove their own small capacitance.
5. **Analysis:** plot a graph that should be a straight line. C against A gives gradient κε₀/d; C against 1/d gives gradient κε₀A. Divide the gradient by ε₀ (and by A or 1/d) to find κ. A gradient uses all the data, so it is better than one reading.

Practice Question 6 gives a data set to analyse this way. Reading and simulations are useful preparation, but they do not replace hands-on laboratory work.

## Worked example 1: inserting a slab into an isolated capacitor

**Question.** A parallel-plate capacitor has plate area 0.030 m² and gap 0.50 mm. It is charged to 20 V and disconnected. A slab with κ = 2.1 is slid in to fill the gap. Find C, Q, ΔV, E and U before and after, and the induced surface charge density.

**Before.**

1. C₀ = ε₀A/d = (8.85 × 10⁻¹²)(0.030) ÷ (0.50 × 10⁻³) = 5.31 × 10⁻¹⁰ F (531 pF).
2. Q = C₀ΔV₀ = 1.06 × 10⁻⁸ C.
3. E₀ = ΔV₀/d = 20 ÷ 0.50 × 10⁻³ = 4.0 × 10⁴ V/m.
4. U₀ = ½QΔV₀ = 1.06 × 10⁻⁷ J.

**After** (Q fixed at 1.06 × 10⁻⁸ C).

1. C = κC₀ = 1.12 × 10⁻⁹ F.
2. ΔV = Q/C = 20 ÷ 2.1 = 9.5 V.
3. E = E₀/κ = 1.9 × 10⁴ V/m.
4. U = Q²/(2C) = U₀/κ = 5.1 × 10⁻⁸ J.

**Induced charge.** σ = Q/A = 3.54 × 10⁻⁷ C/m², so σᵢ = σ(1 − 1/2.1) = 1.85 × 10⁻⁷ C/m².

**Check.** σᵢ/ε₀ = 2.1 × 10⁴ V/m, and E₀ − E = 4.0 × 10⁴ − 1.9 × 10⁴ = 2.1 × 10⁴ V/m. The induced field accounts exactly for the drop.

**Interpretation.** The stored energy fell by 5.6 × 10⁻⁸ J. That energy went into work done on the slab: the field **pulls** a dielectric into an isolated capacitor, and you would have to hold the slab back to stop it speeding up.

## Worked example 2: inserting a slab with the battery connected

**Question.** A 120 pF air capacitor stays connected to a 9.0 V battery. A slab with κ = 3.0 is inserted to fill the gap. Find the change in charge, the change in stored energy and the work done by the battery.

1. Q₀ = C₀ΔV = (120 × 10⁻¹²)(9.0) = 1.08 × 10⁻⁹ C.
2. C = 3.0 × 120 pF = 360 pF, so Q = 3.24 × 10⁻⁹ C. The battery pushes ΔQ = 2.16 × 10⁻⁹ C onto the plates.
3. U₀ = ½C₀(ΔV)² = 4.86 × 10⁻⁹ J; U = ½C(ΔV)² = 1.46 × 10⁻⁸ J. ΔU = +9.72 × 10⁻⁹ J.
4. The battery moves ΔQ across a fixed 9.0 V, so it does work ΔQ × ΔV = 1.94 × 10⁻⁸ J.

**Interpretation.** The battery supplies twice the gain in stored energy. The other 9.72 × 10⁻⁹ J is the work done by the field pulling the slab in, just as in Worked example 1. E between the plates is the same before and after, 9.0 V ÷ d.

## Common misconceptions

- **"A dielectric adds charge to the plates."** With the capacitor isolated, the free charge is unchanged; only the bound charge appears, and it stays in the dielectric.
- **"The dielectric cancels the field, like a conductor."** It only reduces it, by the factor κ. Only a conductor makes the field inside zero.
- **"The induced field points the same way as the applied field."** It points the opposite way.
- **"E always falls when a dielectric is inserted."** Only if Q is fixed. With a battery connected, E = ΔV/d stays the same.
- **"Energy always increases when C increases."** With Q fixed, U = Q²/(2C) falls. With ΔV fixed, U = ½C(ΔV)² rises.
- **Dividing C by κ.** Capacitance goes **up** by κ; field and ΔV (for an isolated capacitor) go down.
- **"κ can be less than 1."** For the materials in this course, κ ≥ 1, with κ = 1 only for a vacuum.

## Where this leads

Capacitors, with or without dielectrics, are about to become circuit components. In [Topic 11.1, Electric Current](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/), charge starts to flow, and later in Unit 11 you will combine capacitors and watch them charge through resistors. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-4-dielectrics-checklist/).
