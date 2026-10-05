---
resourceId: "mb-ap-physcem-10.2-study-guide"
title: "Redistribution of Charge Between Conductors: Study Guide (Physics C: E&M 10.2)"
description: "Calculus-based guide to charge sharing between conductors: equal potentials on contact, spheres joined by a wire, nested conductors, ground as a reference and charging by grounding."
course: "physics-c-electricity-and-magnetism"
unit: 10
topics: ["10.2"]
resourceType: "study-guide"
prerequisites:
  - "Conductors in electrostatic equilibrium are equipotentials (Topic 10.1)"
  - "Potential of a point charge and of a charged sphere, V = Q/(4πε₀r) (Unit 9)"
  - "Conservation of charge and charging by induction (Topic 8.2)"
prerequisiteResources: ["mb-ap-physcem-10.1-study-guide"]
learningObjectives:
  - "Explain why conductors in electrical contact end at the same potential, not with the same charge"
  - "Derive how charge divides between two separated spheres joined by a wire, and compare their surface charge densities and fields"
  - "Predict what happens when a conductor inside a hollow conductor is connected to it"
  - "Describe ground as a zero-potential reference that can supply or absorb any amount of charge"
  - "Explain and calculate the charge induced on a conductor grounded near another charge"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "ε₀ = 8.85 × 10⁻¹² C²/(N·m²), so 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; e = 1.602 × 10⁻¹⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-physcem-10.2-revision-notes", "mb-ap-physcem-10.2-practice", "mb-ap-physcem-10.2-checklist"]
next: "mb-ap-physcem-10.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Conductors in contact share charge until they are at the same potential; total charge is conserved."
  - "For two distant spheres joined by a wire, q₁/R₁ = q₂/R₂: the larger sphere takes more charge, but the smaller one has the larger σ and the stronger surface field."
  - "Connect a conductor inside a hollow conductor to it, and all the inner conductor's charge moves to the outer surface."
  - "Ground is an ideal reference at V = 0 that can give or take any amount of charge without its potential changing."
  - "Grounding a conductor near a charge leaves it with an induced charge of opposite sign; for a sphere, Q′ = −qR/d."
faqs:
  - question: "Do two touching conductors always end with equal charges?"
    answer: "Only if they are identical in size and shape. In general they end at equal potential, and the larger conductor holds more of the charge."
  - question: "Does grounding always make a conductor neutral?"
    answer: "Only if no other charges are nearby. Grounding sets the conductor's potential to zero. With a charge nearby, that requires an induced charge of opposite sign."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 10.2. It uses two results from Topic 10.1: a conductor in equilibrium is an equipotential, and excess charge sits on its surface.

Constants used throughout: **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**, so k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C², and e = 1.602 × 10⁻¹⁹ C.

## Contact means equal potential, not equal charge

Touch two conductors together, or join them with a conducting wire. They now form **one** conductor. In equilibrium, one conductor is one equipotential. So charge flows between them until **every surface is at the same potential**. As in Topic 10.1, this happens effectively at once.

Two rules fix the final state:

1. **Equal potential:** V₁ = V₂.
2. **Conservation of charge:** q₁ + q₂ = (total charge before contact).

In a metal, the charge that actually moves is electrons. They move from the conductor at **lower** potential towards the one at **higher** potential. Equivalently, you can think of positive charge flowing from high V to low V. Either way, the flow stops when the potentials are equal.

In Topic 8.2 you saw that two **identical** spheres share charge equally. That is a special case: identical spheres have equal potential only when their charges are equal. For conductors of different size or shape, equal potential means **unequal** charges.

## Two spheres joined by a long wire

Take a sphere of radius R₁ and a sphere of radius R₂, far apart, joined by a long thin wire. "Far apart" means each sphere's potential comes almost entirely from its own charge. "Thin" means the wire holds a negligible share of the charge. Then:

- V₁ = kq₁/R₁ and V₂ = kq₂/R₂.
- Equal potentials: **q₁/R₁ = q₂/R₂**, so q ∝ R.
- With total charge Q: **q₁ = QR₁/(R₁ + R₂)** and q₂ = QR₂/(R₁ + R₂).

Now compare the surface charge densities, σ = q/(4πR²):

σ = q/(4πR²) = (q/R) × 1/(4πR). The factor q/R is the same for both spheres, so σ ∝ 1/R and **σ₁/σ₂ = R₂/R₁**.

The field just outside each sphere is E = σ/ε₀ (Topic 10.1), which also equals V/R. So the **smaller sphere has the stronger surface field**, even though it holds less charge.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="spheres-wire-title spheres-wire-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="spheres-wire-title">Two charged metal spheres joined by a long wire</title>
<desc id="spheres-wire-desc">A small sphere A on the left and a sphere B three times its radius on the right are joined by a horizontal wire with a break mark showing that the wire is much longer than drawn. Sphere A shows six plus signs and sphere B shows eighteen plus signs, in proportion to their charges of 3.0 and 9.0 nanocoulombs. Short arrows point straight out from each surface to show the field just outside: the arrows on A are three times as long as the arrows on B. Labels give A a radius of 0.030 metres and a surface field of 3.0 times ten to the four newtons per coulomb, and B a radius of 0.090 metres and a surface field of 1.0 times ten to the four newtons per coulomb. A heading states that both spheres are at 899 volts.</desc>
<defs><marker id="sw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="280" y="28" font-size="14" fill="#1d2b44" text-anchor="middle">Both spheres at the same potential, V = 899 V</text>
<g stroke="#1d2b44" stroke-width="2.5">
<line x1="135" y1="150" x2="225" y2="150"/>
<line x1="255" y1="150" x2="345" y2="150"/>
<line x1="222" y1="160" x2="232" y2="140" stroke-width="1.5"/>
<line x1="248" y1="160" x2="258" y2="140" stroke-width="1.5"/>
</g>
<text x="240" y="132" font-size="12" fill="#1d2b44" text-anchor="middle">long thin wire (not to scale)</text>
<circle cx="110" cy="150" r="25" fill="#f2f4f8" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="420" cy="150" r="75" fill="#f2f4f8" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" font-weight="700" fill="#1d2b44" text-anchor="middle" dominant-baseline="middle">
<text x="124" y="154">+</text><text x="113" y="165">+</text><text x="99" y="160">+</text><text x="96" y="146">+</text><text x="107" y="135">+</text><text x="121" y="140">+</text>
<text x="481" y="169">+</text><text x="471" y="189">+</text><text x="455" y="204">+</text><text x="434" y="212">+</text><text x="412" y="213">+</text><text x="391" y="207">+</text><text x="373" y="193">+</text><text x="361" y="175">+</text><text x="356" y="153">+</text><text x="359" y="131">+</text><text x="369" y="111">+</text><text x="385" y="96">+</text><text x="406" y="88">+</text><text x="428" y="87">+</text><text x="449" y="93">+</text><text x="467" y="107">+</text><text x="479" y="125">+</text><text x="484" y="147">+</text>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#sw-arr)">
<line x1="110" y1="125" x2="110" y2="80"/>
<line x1="88.3" y1="137.5" x2="49.4" y2="115"/>
<line x1="88.3" y1="162.5" x2="49.4" y2="185"/>
<line x1="110" y1="175" x2="110" y2="220"/>
<line x1="420" y1="75" x2="420" y2="60"/>
<line x1="485" y1="112.5" x2="497.9" y2="105"/>
<line x1="495" y1="150" x2="510" y2="150"/>
<line x1="485" y1="187.5" x2="497.9" y2="195"/>
<line x1="420" y1="225" x2="420" y2="240"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="110" y="262">Sphere A: R = 0.030 m</text>
<text x="110" y="280">q = 3.0 nC</text>
<text x="110" y="298">E at surface = 3.0 × 10⁴ N/C</text>
<text x="420" y="262">Sphere B: R = 0.090 m</text>
<text x="420" y="280">q = 9.0 nC</text>
<text x="420" y="298">E at surface = 1.0 × 10⁴ N/C</text>
</g>
</svg>
<figcaption>Figure 1. The final state in Worked example 1. Charge divides in proportion to radius (count the plus signs: 6 and 18). The arrows show the field just outside each surface: the small sphere's field is three times larger, because its surface charge density is three times larger.</figcaption>
</figure>

## Why charge piles up at sharp points

Topic 10.1 stated that σ is largest at points and edges. The two-sphere model explains it. Think of a sharp tip as a small sphere and a broad, flat region as a large sphere, both parts of one conductor at one potential. Since σ ∝ 1/R at a fixed potential, the tightly curved tip carries the larger σ and the stronger field. Very strong fields near sharp points can make the surrounding air conduct, which is why high-voltage equipment is usually built with smooth, rounded surfaces.

## Conductors inside conductors

Put a charged conductor inside the cavity of a hollow conductor, then join them with a wire. Now they are one conductor, so they must be at the same potential.

- If the inner conductor kept any charge q, there would be a field between it and the cavity wall, from Gauss's law. Then ∫E·dl across the gap would not be zero, so the two would be at different potentials.
- So the inner conductor ends with **zero charge**, and the cavity wall too. **All the charge moves to the outer surface** of the outer conductor.

This happens **however much charge** the outer conductor already has. The inner conductor always starts at a higher potential than the shell when it carries positive charge, so positive charge flows outward. This is the principle of the Van de Graaff generator, which keeps carrying charge to the inside of its metal dome.

## Ground: the ideal reference

**Ground** is an idealized conductor that:

- is defined to have **zero electric potential**; and
- can **absorb or supply any amount of charge** without its potential changing.

Earth behaves like this for most purposes. A wire to ground forces whatever it touches to V = 0.

**Grounding an isolated conductor.** A sphere alone in space has V = kQ/R. Setting V = 0 requires Q = 0, so a grounded isolated conductor becomes **neutral**. A positive sphere gains electrons from ground; a negative sphere sends electrons to ground.

**Grounding near another charge.** Now a point charge q sits outside a conducting sphere of radius R, a distance d from its centre. Ground the sphere. The sphere is a conductor, so every point of it, including its centre, is at V = 0. At the centre:

V_centre = kq/d + (potential of the induced charge Q′) = 0

All of Q′ sits on the surface, at distance R from the centre, so its potential there is kQ′/R **however it is spread** (the spread is uneven: denser on the side facing q). So:

kq/d + kQ′/R = 0 → **Q′ = −qR/d**

The induced charge has the **opposite sign** to q and is smaller in size, since R < d. Bring q closer and |Q′| grows.

**Charging by grounding.** To keep this induced charge, break the ground connection **first**, then remove q. The sphere keeps Q′, which then spreads uniformly. If you remove q first, Q′ flows back to ground. Topic 8.2 described the same order of steps qualitatively.

**Grounding a shell around a charge.** In Topic 10.1, a charge q inside a neutral shell put −q on the inner wall and +q on the outer surface. Ground the shell, and the outer +q flows away (it must, to make V = 0 with nothing else nearby). The field outside disappears. A grounded closed shell therefore shields **both ways**.

## Worked example 1: two spheres joined by a wire

**Question.** Sphere A (radius 0.030 m) carries +12 nC. Sphere B (radius 0.090 m) is neutral. They are far apart and are joined by a long thin wire. Find (a) the final charge on each, (b) the common potential and A's potential before connection, (c) the surface fields, and (d) how many electrons move, and in which direction.

**(a)** q ∝ R, so q_A = (12 nC)(0.030)/(0.030 + 0.090) = **3.0 nC** and q_B = **9.0 nC**. Check: 3.0 + 9.0 = 12 nC, so charge is conserved.

**(b)** V = kq_A/R_A = (8.99 × 10⁹)(3.0 × 10⁻⁹) ÷ 0.030 = **899 V**. Check with B: (8.99 × 10⁹)(9.0 × 10⁻⁹) ÷ 0.090 = 899 V. Before connection, V_A = (8.99 × 10⁹)(12 × 10⁻⁹) ÷ 0.030 = **3.60 × 10³ V** and V_B = 0. A was at the higher potential, so positive charge flowed from A to B.

**(c)** E = V/R: E_A = 899 ÷ 0.030 = **3.0 × 10⁴ N/C** and E_B = 899 ÷ 0.090 = **1.0 × 10⁴ N/C**. Equivalently σ_A = 3.0 × 10⁻⁹ ÷ (4π × 0.030²) = 2.65 × 10⁻⁷ C/m² and σ_B = 8.84 × 10⁻⁸ C/m²; σ/ε₀ gives the same fields. The ratio is 3 = R_B/R_A.

**(d)** A's charge falls by 9.0 nC. In a metal this means electrons move from B to A: 9.0 × 10⁻⁹ ÷ 1.602 × 10⁻¹⁹ = **5.6 × 10¹⁰ electrons, from B to A**.

**Interpretation.** The large sphere ends with three times the charge, but the small sphere has three times the surface field (Figure 1).

## Worked example 2: grounding a sphere near a charge

**Question.** A metal sphere of radius 0.050 m is connected to ground. A point charge of +6.0 nC is held 0.20 m from the sphere's centre. (a) Find the charge induced on the sphere and the number of electrons that flow, with direction. (b) The ground wire is removed, then the point charge is taken far away. Find the sphere's final potential and surface charge density.

**(a)** The point charge alone would make the centre's potential kq/d = (8.99 × 10⁹)(6.0 × 10⁻⁹) ÷ 0.20 = 270 V. Grounding requires the induced charge to cancel this: Q′ = −qR/d = −(6.0 nC)(0.050)/(0.20) = **−1.5 nC**. That is 1.5 × 10⁻⁹ ÷ 1.602 × 10⁻¹⁹ = **9.4 × 10⁹ electrons, flowing from ground into the sphere**.

**(b)** With the ground wire removed first, the −1.5 nC cannot leave. When the point charge is taken away, it spreads uniformly. V = kQ′/R = (8.99 × 10⁹)(−1.5 × 10⁻⁹) ÷ 0.050 = **−270 V**, and σ = −1.5 × 10⁻⁹ ÷ (4π × 0.050²) = **−4.8 × 10⁻⁸ C/m²**.

**Interpretation.** A positive charge nearby induced a negative charge through the ground wire. If the point charge were moved to 0.10 m, Q′ would double to −3.0 nC: |Q′| ∝ 1/d.

## Common misconceptions

- **"Conductors in contact share charge equally."** Only identical conductors do. The rule is equal potential.
- **"The bigger sphere has the stronger surface field because it has more charge."** The smaller sphere has the larger σ and the larger field.
- **"Charge stops flowing when the charges are balanced."** Flow stops when the potentials are equal. At that point there is no field along the wire to push charge.
- **"Grounding always makes a conductor neutral."** Only if no other charges are nearby.
- **"Ground has no charge, so it cannot change anything."** Ground can supply or absorb any amount of charge; that is its job.
- **Removing the inducing charge before breaking the ground.** The induced charge then returns to ground.
- **Forgetting conservation of charge.** Whatever one conductor gains, another (or ground) loses.
- **"The inner sphere keeps its charge when connected to a surrounding shell."** All of it moves to the outer surface.

## Where this leads

Next, in Topic 10.3, you will put two conductors close together with equal and opposite charges: a capacitor. The ideas here, equal potential within one conductor and potential difference between two, define capacitance: [Capacitors](/advanced-course-resources/physics-c-electricity-and-magnetism/10-3-capacitors-study-guide/). Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/10-2-redistribution-charge-between-conductors-checklist/).
