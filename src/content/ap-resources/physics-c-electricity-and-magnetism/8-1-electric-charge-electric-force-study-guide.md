---
resourceId: "mb-ap-physcem-8.1-study-guide"
title: "Electric Charge and Electric Force: Study Guide (Physics C: E&M 8.1)"
description: "Calculus-based guide to electric charge and Coulomb's law: quantised charge, vector forces from up to four charges, electric versus gravitational force, and permittivity."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.1"]
resourceType: "study-guide"
prerequisites:
  - "Vectors: components, magnitude and direction, and adding vectors"
  - "Newton's laws and free-body diagrams from mechanics"
  - "Newton's law of gravitation, F = Gm₁m₂/r²"
learningObjectives:
  - "Describe charge as a scalar property that comes in whole-number multiples of e"
  - "Use Coulomb's law to find the size and direction of the force between two point charges"
  - "Add Coulomb forces as vectors to find the net force from up to four charges"
  - "Compare electric and gravitational forces and explain why gravity dominates at large scales"
  - "Explain permittivity and polarisation, and the difference between conductors and insulators"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "1/(4πε₀) = 8.99 × 10⁹ N·m²/C², ε₀ = 8.85 × 10⁻¹² C²/(N·m²), e = 1.60 × 10⁻¹⁹ C, G = 6.67 × 10⁻¹¹ N·m²/kg². Keep unrounded values until the final step"
related: ["mb-ap-physcem-8.1-revision-notes", "mb-ap-physcem-8.1-practice", "mb-ap-physcem-8.1-checklist"]
next: "mb-ap-physcem-8.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Charge is a scalar. It is positive or negative and always a whole-number multiple of e = 1.60 × 10⁻¹⁹ C."
  - "Coulomb's law: F = |q₁q₂|/(4πε₀r²), directed along the line joining the charges."
  - "Like charges repel; unlike charges attract. The two forces in a pair are equal and opposite."
  - "With several charges, find each pair force separately, then add them as vectors."
  - "The electric force between two particles is far larger than their gravitational force, but large bodies are almost neutral, so gravity wins at large scales."
faqs:
  - question: "Is the force formula different in the calculus-based course?"
    answer: "No. Coulomb's law is the same. The calculus-based course writes the constant as 1/(4πε₀) and later uses it to integrate over charge distributions (Topics 8.4 and 8.6)."
  - question: "How many charges will I have to add?"
    answer: "Force calculations use at most four charged objects, or more only when a high symmetry makes the sum simple."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 8.1. It is the starting point of Unit 8. Most of this topic is algebra and vectors. Calculus appears in one place here (testing stability with a derivative), and much more in Topics 8.4 and 8.6.

Constants used throughout: **1/(4πε₀) = 8.99 × 10⁹ N·m²/C²**, **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**, **e = 1.60 × 10⁻¹⁹ C**, G = 6.67 × 10⁻¹¹ N·m²/kg².

## What electric charge is

Electric charge is a basic property of matter, like mass. You cannot explain it in terms of something simpler. You describe it by what it does: charged objects push or pull on each other.

- **Charge is a scalar.** It has a size and a sign, but no direction. The SI unit is the **coulomb (C)**.
- **Two signs.** Charge is either positive or negative. An object with equal amounts of both is **neutral**.
- **The particles.** A proton has charge **+e**, an electron has **−e**, and a neutron has **zero** charge.
- **Quantised.** The elementary charge e = 1.60 × 10⁻¹⁹ C is the smallest amount of charge you will meet on a free particle in this course. Any object's charge is a whole-number multiple of e: **q = ne**, with n an integer.

A coulomb is a very large charge. One nanocoulomb (1 nC = 10⁻⁹ C) is the charge of 10⁻⁹ ÷ (1.60 × 10⁻¹⁹) = **6.25 × 10⁹ electrons**. Everyday objects usually carry charges of nanocoulombs or microcoulombs (1 μC = 10⁻⁶ C).

An object becomes charged by gaining or losing **electrons**. Protons sit in nuclei and do not move from one object to another in ordinary charging. So a positive object has **lost** electrons, and a negative object has **gained** them. (How charge moves and why it is conserved is Topic 8.2.)

**The point-charge model.** If an object's size is very small compared with the distances in the problem, you can treat all its charge as sitting at one point. That is a **point charge**. Small beads, dust grains and charged particles are usually point charges. Two charged spheres 2 cm across and 5 cm apart are not.

## Coulomb's law

The size of the electric force between two point charges is:

**F = (1/(4πε₀)) |q₁q₂| / r²**

- F is proportional to **each** charge. Double one charge and F doubles.
- F is inversely proportional to the **square** of the separation r. Double r and F becomes one quarter.
- ε₀ is the **permittivity of free space**. The combination 1/(4πε₀) = 8.99 × 10⁹ N·m²/C² is often called k.

**Direction.** The force acts along the line joining the two charges.

- **Like charges** (same sign) **repel**: each force points away from the other charge.
- **Unlike charges** (opposite signs) **attract**: each force points towards the other charge.

The two forces form a **Newton's third-law pair**. They are equal in size and opposite in direction, even if one charge is much larger than the other. The larger charge does not "win".

**Use magnitudes, then decide the direction.** Put the sizes of the charges into the formula to get F. Then decide the direction from the signs: repel or attract. This is safer than carrying signs through the formula, because a minus sign on F does not tell you which way to draw an arrow in two dimensions.

**Vector form (useful later).** The force on charge 2 due to charge 1 can be written **F₁₂ = (1/(4πε₀)) (q₁q₂/r²) r̂₁₂**, where r̂₁₂ is a unit vector pointing from 1 to 2. If q₁q₂ is positive, the force points away from charge 1 (repulsion). If it is negative, the force points towards charge 1 (attraction). Topic 8.3 builds the electric field from this form.

## More than two charges: superposition

When several charges act on one charge, each pair interacts as if the others were not there. The net force is the **vector sum**:

**F_net = F₁ + F₂ + F₃ + …**

A reliable method:

1. Draw the charges and the one you want the force on.
2. For each other charge, find the **size** of its force with Coulomb's law, using magnitudes.
3. Draw each force as an arrow from the charge you are studying, towards or away from the other charge.
4. Split each force into x and y components. Use the geometry (often a 3-4-5 triangle or a 45° angle).
5. Add the components, then find the magnitude and direction of the resultant.

The course expects force calculations with **four or fewer** charged objects, or with more if the arrangement is highly symmetric. Fields of continuous charge distributions come later, in Topics 8.4 and 8.6.

<figure>
<svg viewBox="0 0 520 420" role="img" aria-labelledby="coul-tri-title coul-tri-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="coul-tri-title">Forces on a charge at the corner of a right triangle</title>
<desc id="coul-tri-desc">Three point charges. q1, plus 2.0 microcoulombs, at the origin. q2, minus 3.0 microcoulombs, 0.30 metres to the right of q1. q3, plus 1.5 microcoulombs, 0.40 metres above q1. The distance from q2 to q3 is 0.50 metres. At q3 three arrows start. F13 points straight up, away from q1, because both charges are positive. F23 points down and to the right, towards q2, because q2 is negative. The net force, drawn with a double line, points up and to the right at about 22 degrees above the horizontal.</desc>
<defs><marker id="ct-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="100" y1="360" x2="250" y2="360" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="100" y1="360" x2="100" y2="160" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<line x1="250" y1="360" x2="100" y2="160" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="175" y="380">0.30 m</text>
<text x="70" y="265">0.40 m</text>
<text x="200" y="270">0.50 m</text>
</g>
<circle cx="100" cy="360" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="100" y="365" font-size="15" fill="#1d2b44" text-anchor="middle">+</text>
<text x="100" y="400" font-size="13" fill="#1d2b44" text-anchor="middle">q₁ = +2.0 μC</text>
<circle cx="250" cy="360" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="250" y="365" font-size="15" fill="#1d2b44" text-anchor="middle">−</text>
<text x="250" y="400" font-size="13" fill="#1d2b44" text-anchor="middle">q₂ = −3.0 μC</text>
<circle cx="100" cy="160" r="13" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="100" y="165" font-size="15" fill="#1d2b44" text-anchor="middle">+</text>
<text x="82" y="165" font-size="13" fill="#1d2b44" text-anchor="end">q₃ = +1.5 μC</text>
<line x1="100" y1="147" x2="100" y2="59" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ct-arr)"/>
<text x="108" y="70" font-size="13" fill="#1d2b44">F₁₃ = 0.169 N (repulsion)</text>
<line x1="108" y1="170" x2="158" y2="237" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 4" marker-end="url(#ct-arr)"/>
<text x="166" y="240" font-size="13" fill="#1d2b44">F₂₃ = 0.162 N (attraction)</text>
<line x1="112" y1="155" x2="154" y2="138" stroke="#1d2b44" stroke-width="5"/>
<line x1="112" y1="155" x2="154" y2="138" stroke="#ffffff" stroke-width="1.5"/>
<path d="M152.4 133.5 L162.6 134.7 L156.2 142.7 z" fill="#1d2b44"/>
<text x="172" y="135" font-size="13" fill="#1d2b44">F_net = 0.105 N at 21.9°</text>
</svg>
<figcaption>Figure 1. The set-up for Worked example 1. Force arrows start at q₃ and are drawn to one scale. The solid arrow is the repulsion from q₁, the dashed arrow is the attraction towards q₂, and the double-line arrow is their vector sum.</figcaption>
</figure>

## Worked example 1: net force from two charges in a plane

**Question.** Three small charged beads lie on an insulating table (Figure 1). q₁ = +2.0 μC is at the origin. q₂ = −3.0 μC is at (0.30 m, 0). q₃ = +1.5 μC is at (0, 0.40 m). Find the net electric force on q₃.

1. **Distances.** q₁ to q₃: 0.40 m. q₂ to q₃: √(0.30² + 0.40²) = 0.50 m.
2. **Force from q₁.** F₁₃ = (8.99 × 10⁹)(2.0 × 10⁻⁶)(1.5 × 10⁻⁶) ÷ (0.40)² = 0.1686 N. Both charges are positive, so this is repulsion: it points away from q₁, in the **+y** direction.
3. **Force from q₂.** F₂₃ = (8.99 × 10⁹)(3.0 × 10⁻⁶)(1.5 × 10⁻⁶) ÷ (0.50)² = 0.1618 N. The signs are opposite, so this is attraction: it points from q₃ **towards** q₂. That direction is (+0.30, −0.40) ÷ 0.50 = (0.60, −0.80).
4. **Components of F₂₃.** x: 0.1618 × 0.60 = 0.0971 N. y: 0.1618 × (−0.80) = −0.1295 N.
5. **Add.** F_x = 0 + 0.0971 = 0.0971 N. F_y = 0.1686 − 0.1295 = 0.0391 N.
6. **Resultant.** |F| = √(0.0971² + 0.0391²) = 0.105 N. Angle: tan θ = 0.0391 ÷ 0.0971, so θ = 21.9° above the +x axis.

**Answer.** The net force on q₃ is **0.105 N** (0.10 N to 2 significant figures), directed **21.9° above the +x direction**, that is, up and towards the side where q₂ is.

**Check.** The two forces are almost equal in size (0.169 N and 0.162 N) but at a large angle, so the resultant is smaller than either. Its y-component is small and positive because the upward repulsion only just beats the downward part of the attraction. Each force also acts on the *other* bead: q₁ feels 0.169 N pointing in the −y direction, by Newton's third law.

## Worked example 2: where is the net force zero?

**Question.** Two fixed charges lie on the x-axis: q_A = +2.0 nC at x = 0 and q_B = +8.0 nC at x = d = 0.60 m. (a) Find, in terms of d and the charges, the point between them where a third charge feels no net electric force. (b) Evaluate it. (c) Is the balance stable along the axis for a positive third charge?

**(a) Symbolic.** Put a third charge q at x, between the two. Both forces on it lie along the axis and point in opposite directions, so they can cancel. Set the magnitudes equal:

(1/(4πε₀)) |q_A q| / x² = (1/(4πε₀)) |q_B q| / (d − x)²

The factor q and the constant cancel, so the answer does not depend on the third charge. Taking square roots:

(d − x)/x = √(q_B/q_A), so **x = d / (1 + √(q_B/q_A))**

**(b) Numbers.** √(8.0/2.0) = 2, so x = 0.60 m ÷ 3 = **0.20 m** from q_A. Check with a +1.0 nC test charge: q_A pushes it with (8.99 × 10⁹)(2.0 × 10⁻⁹)(1.0 × 10⁻⁹) ÷ (0.20)² = 4.50 × 10⁻⁷ N in +x; q_B pushes it with (8.99 × 10⁹)(8.0 × 10⁻⁹)(1.0 × 10⁻⁹) ÷ (0.40)² = 4.50 × 10⁻⁷ N in −x. They cancel.

**(c) Stability along the axis.** For a positive third charge, the net force along x is

F(x) = (q/(4πε₀)) [q_A/x² − q_B/(d − x)²]

Its derivative is dF/dx = (q/(4πε₀)) [−2q_A/x³ − 2q_B/(d − x)³]. Both terms are negative, so dF/dx < 0. If the charge moves a little to the right, F becomes negative and pushes it back to the left; if it moves left, F becomes positive. So the balance is **stable along the axis** for a positive charge. (With the numbers: F at x = 0.21 m is −6.5 × 10⁻⁸ N for q = +1.0 nC, and F at 0.19 m is +7.0 × 10⁻⁸ N.)

**Interpretation.** The zero-force point sits closer to the **smaller** charge, because the 1/r² fall-off has to make up for the smaller charge. For a negative third charge both forces reverse, so it is still balanced at 0.20 m, but a small nudge along the axis now pulls it further from the balance point: that balance is unstable.

## Electric force versus gravitational force

Coulomb's law and Newton's law of gravitation look alike: both forces fall as 1/r². There are two big differences.

**1. Sign.** Charge comes in two signs, so electric forces can attract **or** repel. Mass is always positive, so gravity always attracts.

**2. Size.** For particles, the electric force is enormous compared with gravity. For a proton and an electron:

F_e / F_g = [(1/(4πε₀)) e²] ÷ [G m_p m_e] = (8.99 × 10⁹)(1.60 × 10⁻¹⁹)² ÷ [(6.67 × 10⁻¹¹)(1.67 × 10⁻²⁷)(9.11 × 10⁻³¹)] ≈ **2.3 × 10³⁹**

The r² cancels, so this ratio is the same at every separation. (Masses used: m_p = 1.67 × 10⁻²⁷ kg, m_e = 9.11 × 10⁻³¹ kg.)

**So why does gravity rule planets and stars?** Large bodies contain almost exactly equal numbers of positive and negative charges. Their electric forces nearly cancel: a neutral Earth exerts no net electric force on a neutral Moon. Mass has no negative version, so gravitational forces from every particle add up. At large scales gravity dominates, even though it is far weaker particle by particle.

**Everyday forces are electric too.** The normal force from a table, friction, tension in a rope and the push of your hand all come from electric forces between the electrons and nuclei of neighbouring atoms. There are far too many interactions to add one by one. So in mechanics you treat them as **contact forces**, which are not fundamental forces, and you describe them with simpler models.

## Permittivity, polarisation, conductors and insulators

**Polarisation.** An external electric field pulls a material's electrons slightly one way and its nuclei slightly the other. The material stays neutral overall, but one side becomes a little negative and the other a little positive. This induced separation of charge is **polarisation**.

**Permittivity** measures how strongly a material or medium polarises in an electric field. It depends on how easily the electrons in the material can change their arrangement, which depends on what the material is made of and how its particles are arranged.

- Empty space has a fixed permittivity, **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)**. It is the ε₀ in Coulomb's law.
- Every material has a permittivity that differs from ε₀. You will meet the ratio of the two, the dielectric constant κ, in Topics 10.3 and 10.4, when a material fills the gap of a capacitor.

**Conductors and insulators.**

- In a **conductor** (for example a metal), some charge carriers (electrons) move freely through the material.
- In an **insulator** (for example plastic, glass or dry wood), charge carriers cannot move easily. Electrons can only shift a little within their own atoms or molecules.

Polarisation explains why a charged object attracts a neutral one. Figure 2 shows a positive rod near a neutral insulator. The electrons in each molecule shift slightly towards the rod. The negative ends are now a little closer to the rod than the positive ends. Because the force falls off with distance, the attraction of the nearer negative charges is larger than the repulsion of the farther positive charges, so there is a **net attraction**.

<figure>
<svg viewBox="0 0 520 260" role="img" aria-labelledby="coul-pol-title coul-pol-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="coul-pol-title">Polarisation of a neutral insulator near a positive rod</title>
<desc id="coul-pol-desc">On the left, a vertical rod marked with plus signs. On the right, a rectangular block of insulating material containing six oval molecules in two rows. In each oval the minus sign is on the left side, nearer the rod, and the plus sign is on the right side, farther away. Below, a single arrow on the block points left, towards the rod, labelled net attraction.</desc>
<defs><marker id="cp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="40" y="30" width="36" height="170" rx="6" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="18" fill="#1d2b44" text-anchor="middle">
<text x="58" y="62">+</text><text x="58" y="96">+</text><text x="58" y="130">+</text><text x="58" y="164">+</text><text x="58" y="194">+</text>
</g>
<text x="58" y="222" font-size="13" fill="#1d2b44" text-anchor="middle">charged rod</text>
<rect x="190" y="40" width="270" height="150" rx="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<ellipse cx="240" cy="85" rx="34" ry="18"/><ellipse cx="325" cy="85" rx="34" ry="18"/><ellipse cx="410" cy="85" rx="34" ry="18"/>
<ellipse cx="240" cy="145" rx="34" ry="18"/><ellipse cx="325" cy="145" rx="34" ry="18"/><ellipse cx="410" cy="145" rx="34" ry="18"/>
</g>
<g font-size="16" fill="#1d2b44" text-anchor="middle">
<text x="222" y="91">−</text><text x="258" y="91">+</text><text x="307" y="91">−</text><text x="343" y="91">+</text><text x="392" y="91">−</text><text x="428" y="91">+</text>
<text x="222" y="151">−</text><text x="258" y="151">+</text><text x="307" y="151">−</text><text x="343" y="151">+</text><text x="392" y="151">−</text><text x="428" y="151">+</text>
</g>
<text x="325" y="30" font-size="13" fill="#1d2b44" text-anchor="middle">neutral insulator (each molecule polarised)</text>
<line x1="380" y1="225" x2="270" y2="225" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#cp-arr)"/>
<text x="390" y="230" font-size="13" fill="#1d2b44">net attraction</text>
</svg>
<figcaption>Figure 2. A positive rod polarises a neutral insulator. Each molecule's negative side (−) shifts towards the rod and its positive side (+) away. The nearer negative charges are attracted more strongly than the farther positive charges are repelled, so the block is pulled towards the rod.</figcaption>
</figure>

In a conductor the electrons can move right across the object, so the separation of charge is much larger. A neutral piece of metal foil is therefore pulled more strongly than a neutral scrap of paper of the same size. (How objects are charged by contact and by induction is Topic 8.2.)

## Common misconceptions

- **"The bigger charge exerts the bigger force."** The forces in a pair are always equal and opposite. A larger charge affects the size of *both* forces equally.
- **"Doubling the distance halves the force."** F ∝ 1/r², so doubling r makes F one quarter.
- **Using r instead of r² (or forgetting to convert cm and nC).** Put every quantity in SI units: metres and coulombs.
- **Adding forces as numbers.** Forces are vectors. Two 0.16 N forces at an angle do not give 0.32 N.
- **Carrying the minus signs of charges into a 2D problem.** Use magnitudes for the size, then use "like repel, unlike attract" for each direction.
- **"A positive object has gained protons."** Objects gain or lose **electrons**. Protons stay in the nuclei.
- **"Neutral objects feel no electric force."** A neutral object can be polarised and then attracted to a charged object.
- **"Gravity is stronger because it controls planets."** Gravity is far weaker between particles. It dominates large scales only because large bodies are almost neutral.
- **"Charge can take any value."** Charge on any object is a whole-number multiple of e.

## Where this leads

Next, Topic 8.2 explains how objects become charged, by friction, contact and induction, and why charge is conserved: see [Conservation of Electric Charge and the Process of Charging](/advanced-course-resources/physics-c-electricity-and-magnetism/8-2-conservation-electric-charge-process-charging-study-guide/). Topic 8.3 turns Coulomb's law into the electric field, and Topics 8.4 to 8.6 add the fields of whole charge distributions using integration and Gauss's law. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-checklist/).
