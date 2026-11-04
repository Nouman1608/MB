---
resourceId: "mb-ap-physcem-12.1-study-guide"
title: "Magnetic Fields: Study Guide (Physics C: E&M 12.1)"
description: "Calculus-based guide to magnetic fields: dipoles and field maps, Gauss's law for magnetism and closed field lines, magnetic materials, Earth's field and permeability."
course: "physics-c-electricity-and-magnetism"
unit: 12
topics: ["12.1"]
resourceType: "study-guide"
prerequisites:
  - "Vector fields and field-line maps for the electric field (Topic 8.3)"
  - "Flux through a surface and Gauss's law for the electric field (Topics 8.5 and 8.6)"
  - "Dot products and surface integrals over flat and curved surfaces"
prerequisiteResources: ["mb-ap-physcem-11.8-study-guide"]
learningObjectives:
  - "Describe a magnetic field as a vector field and read or draw a field-line map for a bar magnet"
  - "Use Gauss's law for magnetism to explain zero net flux through a closed surface, and explain why cutting an ordinary bar magnet yields two dipoles"
  - "Calculate the magnetic flux through parts of a closed surface and use the zero total to find a missing part"
  - "Explain permanent and induced magnetism, and ferromagnetic, paramagnetic and diamagnetic behaviour, in terms of dipole alignment"
  - "Describe Earth's field as a dipole field and explain what magnetic permeability measures and why it varies"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A. Magnetic flux is measured in webers: 1 Wb = 1 T·m². Keep unrounded values until the final step"
related: ["mb-ap-physcem-12.1-revision-notes", "mb-ap-physcem-12.1-practice", "mb-ap-physcem-12.1-checklist"]
next: "mb-ap-physcem-12.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A magnetic field B is a vector field. It tells you the magnetic force on moving charges, currents and magnetic materials. Its unit is the tesla (T)."
  - "No isolated magnetic monopole has been confirmed. Ordinary bar magnets have paired poles; currents and moving charges can produce magnetic-field geometries that are not point-dipole fields."
  - "Gauss's law for magnetism: ∮B·dA = 0 for every closed surface. A bar-magnet dipole has loops from N to S outside and S to N inside; other field configurations need not close within the modeled region."
  - "Orbital motion and intrinsic quantum angular momentum contribute magnetic moments; electron spin is not literal rotation of a charged ball. Bulk magnetisation depends on how atomic moments align."
  - "Permeability μ measures how strongly a material magnetises. Free space has the constant μ₀; for real materials μ is not a constant."
faqs:
  - question: "If I cut a bar magnet in half, do I get a separate north pole and south pole?"
    answer: "No. Each half is a complete dipole with its own north and south pole. However many times you cut it, every piece has both poles, because the magnetism comes from tiny dipoles all through the material."
  - question: "Is Gauss's law for magnetism just Gauss's law with B instead of E?"
    answer: "It has the same form, but the right-hand side is always zero. There is no magnetic charge to enclose, so the net magnetic flux through any closed surface is zero. It is Maxwell's second equation."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 12.1. It is the first topic of Unit 12. You will use surface integrals of B, in the same way you used surface integrals of E with Gauss's law in Topic 8.6.

Constant used throughout: **μ₀ = 4π × 10⁻⁷ T·m/A**. Magnetic flux is measured in **webers**: 1 Wb = 1 T·m².

## What a magnetic field is

A **magnetic field** B is a vector field. At every point in space it has a size and a direction. You use it to find the magnetic force on three kinds of object placed at that point:

- a **moving** charged object (Topic 12.2),
- a wire carrying a **current** (Topic 12.3 onwards),
- a piece of **magnetic material**, such as a compass needle or an iron nail.

A charge at rest feels no magnetic force. That is the first big difference from the electric field.

The SI unit of B is the **tesla** (T). One tesla is a large field. Earth's field at the surface is roughly 30 to 60 μT (3 × 10⁻⁵ to 6 × 10⁻⁵ T), depending on where you are.

## Field-line maps and dipoles

You can show B with a **vector field map** (arrows at grid points) or with **field lines**. The rules are the same as for E:

- The direction of B at a point is the tangent to the line through that point.
- The field is stronger where the lines are closer together.
- Lines never cross, because B has only one direction at each point.

The simplest source of a magnetic field is a **magnetic dipole**: a bar magnet, a compass needle, a small loop of current or a single atom. A dipole has a **north (N) pole** and a **south (S) pole**. Outside a bar magnet, the field points away from the N end and back towards the S end. Inside the magnet it runs from S to N, so every line is a **closed loop** (Figure 1).

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="mf-bar-title mf-bar-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="mf-bar-title">Magnetic field lines of a bar magnet, with a closed surface around the north end</title>
<desc id="mf-bar-desc">A horizontal bar magnet with its south pole on the left and north pole on the right. Curved field lines leave the north end, loop over the top and under the bottom of the magnet, and return to the south end; arrowheads on the outer lines point from right to left. A straight line leaves the north end to the right and a straight line arrives at the south end from the left, both with arrowheads pointing right. A dashed line inside the magnet, with an arrow pointing right, shows the field running from south to north inside, so each line is a closed loop. A dashed circle surrounds the north end: some lines leave through it outside the magnet and the same lines re-enter it inside the magnet.</desc>
<rect x="180" y="145" width="200" height="50" fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="280" y1="145" x2="280" y2="195" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="18" font-weight="700" fill="#1d2b44" text-anchor="middle">
<text x="230" y="170">S</text>
<text x="330" y="170">N</text>
</g>
<line x1="195" y1="184" x2="365" y2="184" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<polygon points="296,179 306,184 296,189" fill="#1d2b44"/>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<path d="M380,160 C470,60 90,60 180,160"/>
<path d="M380,165 C520,10 40,10 180,165"/>
<path d="M380,180 C470,280 90,280 180,180"/>
<path d="M380,175 C520,330 40,330 180,175"/>
<line x1="380" y1="170" x2="545" y2="170"/>
<line x1="15" y1="170" x2="180" y2="170"/>
</g>
<g fill="#1d2b44">
<polygon points="286,80 276,85 286,90"/>
<polygon points="286,44 276,49 286,54"/>
<polygon points="286,250 276,255 286,260"/>
<polygon points="286,286 276,291 286,296"/>
<polygon points="474,165 484,170 474,175"/>
<polygon points="90,165 100,170 90,175"/>
</g>
<circle cx="380" cy="170" r="42" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 4"/>
<line x1="412" y1="143" x2="455" y2="105" stroke="#1d2b44" stroke-width="1"/>
<g font-size="12" fill="#1d2b44">
<text x="440" y="88">dashed circle: closed</text>
<text x="440" y="102">surface around N end</text>
<text x="200" y="215">inside: S to N</text>
</g>
</svg>
<figcaption>Figure 1. Field lines in the bar-magnet dipole model run from N to S outside the magnet and return from S to N inside it. A closed surface around the N end has equal net inward and outward flux; magnetic fields have no local sources or sinks in this model.</figcaption>
</figure>

Three facts about dipoles that you must be able to use:

1. **Like poles repel and unlike poles attract.** Two N poles push apart; an N pole and an S pole pull together.
2. **A dipole in a field tends to line up with the field.** A compass needle is a small dipole that can turn. The field turns it until its N end points along B. So a compass shows you the direction of the field line at the place where it sits.
3. **A dipole's field weakens with distance.** Far from a small magnet, B falls off quickly. *(Background, beyond this topic: far from a dipole B falls roughly as 1/r³, faster than the 1/r² of a point charge, because the fields of the two poles nearly cancel.)*

## No monopoles: Gauss's law for magnetism
<!-- marlbridge-diagram:physcem-b24-magnetic-flux-dome-and-cylinder -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/physics/physcem-b24-magnetic-flux-dome-and-cylinder.svg" aria-label="Open full-size diagram: physcem-b24-magnetic-flux-dome-and-cylinder"><img src="/images/learning/physics/physcem-b24-magnetic-flux-dome-and-cylinder.svg" width="1600" height="1050" alt="Two closed-surface examples. A hemisphere and flat base in a uniform upward magnetic field have negative base flux and equal positive dome flux. A cylinder above a magnet pole has bottom flux −3.77 × 10⁻⁵ Wb, top flux +2.51 × 10⁻⁵ Wb and outward side flux +1.26 × 10⁻⁵ Wb, summing to zero." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Outward normals set the sign of each flux. The dome example balances one flat-base flux with dome flux; the cylinder example balances unequal end fluxes with side flux. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:physcem-b24-magnetic-flux-dome-and-cylinder -->


An electric field can start on positive charge and end on negative charge. No isolated magnetic monopole has been confirmed experimentally. In the classical no-monopole model, magnetic flux has no local source or sink; currents and moving charges can produce field geometries beyond the bar-magnet dipole. Cutting an ordinary bar magnet produces two smaller dipoles, each with north and south poles.

The mathematical statement is **Gauss's law for magnetism**. **Maxwell's equations** are a set of four equations that together describe all of electromagnetism; Gauss's law for electric fields (Topic 8.6) is the first, and this law is the second:

**Φ_B = ∮ B·dA = 0**

As in Topic 8.6, the circle means a **closed** surface and dA points **outward**. Compare the two laws:

| | Electric field | Magnetic field |
|---|---|---|
| Gauss's law | ∮E·dA = q_enc/ε₀ | ∮B·dA = 0 |
| Field lines | start on + charges, end on − charges | no local starts or ends; shown dipole lines close, while other configurations may extend beyond the modeled region |
| Isolated "charge" | exists (an electron, a proton) | no isolated magnetic monopole has been confirmed |

What the law tells you:

- **Net magnetic flux through a closed surface is zero.** Flux entering and leaving balances; this does not require every field line to form a closed loop within the region being modeled.
- **You can find a missing flux.** If you know the flux through every part of a closed surface except one, the last part must bring the total to zero.
- The zero-flux law applies to every closed surface in the classical no-monopole model, including fields near magnets and current-carrying wires.

The magnetic flux through an open surface (one face of a closed surface) is Φ_B = ∫B·dA, measured in webers. For a flat area A in a uniform field at angle θ to the normal, Φ_B = BA cos θ. You will use magnetic flux again in Unit 13 for induction.

## Where magnetism comes from

<!-- marlbridge-diagram:phys2-b20-microscopic-moments-domains -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/physics/phys2-b20-microscopic-moments-domains.svg" aria-label="Open full-size diagram: phys2-b20-microscopic-moments-domains"><img src="/images/learning/physics/phys2-b20-microscopic-moments-domains.svg" width="1600" height="1050" alt="An electron’s intrinsic magnetic moment is shown as a quantum property; random atomic moments cancel while aligned domains create net magnetisation." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Separates individual microscopic magnetic moments from bulk magnetisation and avoids picturing quantum spin as literal mechanical rotation. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:phys2-b20-microscopic-moments-domains -->


Magnetic moments arise from charged-particle orbital motion and intrinsic spin. Electron spin is quantum intrinsic angular momentum, not a literal rotation of the electron. Atomic electron and nuclear moments combine; a material has a net magnetisation when its microscopic moments do not cancel.

In most materials these atomic dipoles point in random directions and their fields cancel. A material becomes magnetic when many dipoles **line up**:

- **Permanent magnetism**: the dipoles stay aligned on their own, as in a bar magnet.
- **Induced magnetism**: an external field lines the dipoles up while it is present. This is why a magnet attracts an unmagnetised iron nail: the magnet's field makes the nail a dipole, with its near end opposite in polarity to the magnet's nearby pole.

An atom can have a magnetic moment, but bulk magnetisation depends on the combined alignment and cancellation of many moments. Ferromagnetic domains can align collectively and may retain some alignment after an external field is removed.

## How materials respond to a field

<!-- marlbridge-diagram:physcem-b21-magnetic-material-responses -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/physics/physcem-b21-magnetic-material-responses.svg" aria-label="Open full-size diagram: physcem-b21-magnetic-material-responses"><img src="/images/learning/physics/physcem-b21-magnetic-material-responses.svg" width="1600" height="1050" alt="Paramagnetic dipoles weakly align, diamagnetic response opposes the field, and ferromagnetic domains align strongly with possible remanence." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Comparison of three common introductory magnetic material responses; scopes the classification and shows the ferromagnet’s nonlinear, saturating behavior qualitatively. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:physcem-b21-magnetic-material-responses -->


Three common introductory responses are compared below; magnetic ordering also includes other classes, such as antiferromagnets and ferrimagnets.

| Type | Examples | What the dipoles do in an external field | After the field is removed |
|---|---|---|---|
| Ferromagnetic | iron, nickel, cobalt | Whole regions (**magnetic domains**) of aligned dipoles grow and turn to line up with the field; a strong effect | Can stay aligned: the material can become a **permanent** magnet |
| Paramagnetic | aluminium, titanium, magnesium | Atomic dipoles line up weakly **with** the field, so the material is weakly attracted | Alignment is lost |
| Diamagnetic | all materials; noticeable in copper, water, bismuth | Electron motion responds to create a weak alignment **opposite** to the field, so the material is weakly repelled | No alignment remains |

Diamagnetism is present in **every** material. You only notice it when no stronger para- or ferromagnetic effect hides it.

A ferromagnet loses its ferromagnetism when it is heated above its Curie temperature (about 770 °C for iron), because thermal motion destroys the domains.

## Earth as a magnet

<!-- marlbridge-diagram:physcem-b18-earth-dipole-compass -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/physics/physcem-b18-earth-dipole-compass.svg" aria-label="Open full-size diagram: Earth's magnetic dipole and compass components"><img src="/images/learning/physics/physcem-b18-earth-dipole-compass.svg" width="1600" height="1050" alt="Earth's magnetic dipole axis is tilted from its rotation axis; its magnetic south pole lies near geographic North, and a northern-hemisphere compass follows the horizontal field component." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Earth’s field is approximately dipolar; a flat compass follows its horizontal component while the field also has vertical inclination. — Marlbridge Physics.</figcaption>
</figure>
<!-- /marlbridge-diagram:physcem-b18-earth-dipole-compass -->

Earth's field can be modelled as the field of a **dipole** inside Earth, roughly lined up with the spin axis. A compass N end points (roughly) towards the geographic North Pole. Since unlike poles attract, the pole of Earth's dipole near the geographic North Pole is a magnetic **south** pole. Field lines leave Earth in the southern hemisphere and re-enter in the northern hemisphere.

At most places Earth's field is not horizontal. It has a **horizontal component** (which a flat compass shows) and a **vertical component**. In the northern hemisphere the vertical component points downward, into the ground.

## Magnetic permeability

**Magnetic permeability**, μ, measures how strongly a material becomes magnetised in response to an external field.

- **Free space** has a fixed permeability, the **vacuum permeability μ₀ = 4π × 10⁻⁷ T·m/A**. It appears in the equations for the fields of currents, as ε₀ appears in the equations for electric fields.
- **Matter** has a different permeability, set by its composition and the arrangement of its atoms and domains. A helpful comparison is the ratio μ/μ₀: slightly more than 1 for paramagnets, slightly less than 1 for diamagnets, and very large for ferromagnets.
- μ is **not a constant** for a material. It changes with temperature, with the orientation of the sample (for crystals) and with the strength of the external field. For iron, μ/μ₀ can be in the hundreds or thousands, and it changes a lot with the applied field; once the domains are nearly all aligned, extra field adds little magnetisation and μ falls.

## Worked example 1: flux through a closed dome

**Question.** A closed surface is made of a hemisphere (dome) of radius R = 0.060 m sitting on a flat horizontal disc of the same radius. It is in a uniform field B = 0.25 T that points upward at 40° to the vertical. Find the magnetic flux through (a) the flat base and (b) the dome.

1. **Base.** The outward normal of the base points **down**. B has an upward vertical component B cos 40° = 0.25 × cos 40° = 0.1915 T. The horizontal component lies in the plane of the base, so it gives no flux. The base area is πR² = π(0.060 m)² = 0.01131 m². So Φ_base = −(0.1915 T)(0.01131 m²) = **−2.17 × 10⁻³ Wb**. It is negative because the lines go **in** through the base.
2. **Dome.** Gauss's law for magnetism: Φ_base + Φ_dome = 0, so Φ_dome = **+2.17 × 10⁻³ Wb**.

**Check.** Integrating B·dA directly over the dome with spherical coordinates gives the same value: the horizontal component contributes zero (its flux in and out of the dome cancels) and the vertical component gives B cos θ × πR². Using the law took one line instead of a double integral.

**Interpretation.** The flux through the dome is the same as through the flat disc under it, whatever the dome's shape. Every line that enters the base must leave through the dome.

## Worked example 2: a field that spreads out above a pole

**Question.** Just above the N end of a strong cylindrical magnet, the field is symmetric about the magnet's axis (the z-axis). Near the axis, a probe measures the vertical component B_z = 0.120 T at z = 0 and B_z = 0.080 T at z = h = 0.020 m, and it changes linearly in between. (These are invented values for practice.) Take a closed cylindrical surface of radius a = 0.010 m and height h on the axis, with B_z the same across each end.

(a) Find the flux through each end. (b) Find the flux through the curved side. (c) Show that the radial field at radius r is B_r = −(r/2) dB_z/dz, and evaluate it at r = a.

**(a) Ends.** End area πa² = π(0.010)² = 3.14 × 10⁻⁴ m².

- Bottom (outward normal points down): Φ = −(0.120 T)(3.14 × 10⁻⁴ m²) = −3.77 × 10⁻⁵ Wb.
- Top (outward normal points up): Φ = +(0.080 T)(3.14 × 10⁻⁴ m²) = +2.51 × 10⁻⁵ Wb.

**(b) Curved side.** ∮B·dA = 0, so Φ_side = −(−3.77 × 10⁻⁵ + 2.51 × 10⁻⁵) = **+1.26 × 10⁻⁵ Wb**. It is positive: field lines **leave** through the side. The field weakens upward because its lines spread outward.

**(c) Radial field.** Apply the law to a thin cylinder of radius r between z and z + dz. By symmetry B_r is the same all round the curved side.

- Ends: [B_z(z + dz) − B_z(z)]πr² = (dB_z/dz) dz πr²
- Side: B_r × 2πr dz
- Sum = 0, so B_r(2πr dz) = −(dB_z/dz)πr² dz, which gives **B_r = −(r/2) dB_z/dz**.

Here dB_z/dz = (0.080 − 0.120) ÷ 0.020 = −2.0 T/m. At r = a: B_r = −(0.010/2)(−2.0) = **+0.010 T**, pointing outward.

**Check.** Side flux = B_r × 2πah = (0.010)(2π)(0.010)(0.020) = 1.26 × 10⁻⁵ Wb, which matches (b).

**Interpretation.** A field cannot weaken along its direction without spreading sideways. Wherever B_z changes with z, there must be a radial part. B_r is zero on the axis and grows linearly with r.

## Common misconceptions

- **"A magnet's field lines start at N and end at S."** They continue inside the magnet from S back to N. Every line is a closed loop.
- **"Cutting a magnet separates the poles."** Each piece is a new dipole. There are no monopoles.
- **"The net flux through a surface around a pole is positive."** For a closed surface the net magnetic flux is always zero. Lines that leave also come back in.
- **"Zero net flux means zero field."** The field on the surface can be large; the inward and outward flux cancel.
- **"Earth's north magnetic pole is a north pole."** The pole near the geographic North Pole attracts the N end of a compass, so it is a magnetic **south** pole.
- **"Only iron, nickel and cobalt respond to magnets."** Every material is diamagnetic, and paramagnets such as aluminium are weakly attracted. The effects are small, not absent.
- **"Permeability is a fixed property, like density."** Only μ₀ is a constant. A material's μ changes with temperature, field strength and orientation.
- **"A compass points to where the magnet is."** It points along the field line at its own position, which may be at a large angle to the line joining it to the magnet.

## Where this leads

Topic 12.2 explains where magnetic fields come from at the smallest scale (a single moving charge) and how B pushes on moving charges: [Magnetism and Moving Charges](/advanced-course-resources/physics-c-electricity-and-magnetism/12-2-magnetism-moving-charges-study-guide/). Later, Ampère's law (Topic 12.4) will be the magnetic partner of the electric Gauss's law, and magnetic flux returns for induction in Unit 13. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/12-1-magnetic-fields-checklist/).
