---
resourceId: "mb-ap-phys2-10.1-study-guide"
title: "Electric Charge and Electric Force: Study Guide (Physics 2 10.1)"
description: "Electric charge from first principles: the elementary charge, point charges, Coulomb's law, adding forces from several charges, electric versus gravitational force, and permittivity."
course: "physics-2"
unit: 10
topics: ["10.1"]
resourceType: "study-guide"
prerequisites:
  - "Newton's laws, including equal and opposite force pairs"
  - "Adding vectors using components"
  - "Newton's law of gravitation and the inverse-square idea"
prerequisiteResources: ["mb-ap-phys2-9.6-study-guide"]
learningObjectives:
  - "Describe charge as a property of matter that comes in whole-number multiples of the elementary charge"
  - "Use Coulomb's law to find the size and direction of the electric force between two point charges"
  - "Predict how the electric force changes when a charge or the separation changes"
  - "Add the electric forces from up to four charges as vectors"
  - "Compare electric and gravitational forces and explain why gravity dominates at large scales"
  - "Describe permittivity and polarization, and the difference between conductors and insulators"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C², e = 1.60 × 10⁻¹⁹ C, G = 6.67 × 10⁻¹¹ N·m²/kg². Keep unrounded values until the final step"
related: ["mb-ap-phys2-10.1-revision-notes", "mb-ap-phys2-10.1-practice", "mb-ap-phys2-10.1-checklist"]
next: "mb-ap-phys2-10.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Charge is positive or negative. Every charge is a whole-number multiple of e = 1.60 × 10⁻¹⁹ C."
  - "Coulomb's law: F = k|q₁q₂|/r², with k = 1/(4πε₀). The force acts along the line joining the charges."
  - "Like charges repel; unlike charges attract. The two forces in a pair are equal in size and opposite in direction."
  - "With several charges, find each force separately, then add them as vectors."
  - "Between charged particles, the electric force is far larger than gravity. Gravity wins at large scales because big objects are almost neutral."
faqs:
  - question: "Why does the formula use |q₁q₂| with absolute value signs?"
    answer: "Coulomb's law gives the size of the force, which is never negative. You find the direction separately: repulsion for like charges, attraction for unlike charges, along the line joining them."
  - question: "Is k the same thing as 1/(4πε₀)?"
    answer: "Yes. k = 1/(4πε₀) ≈ 9.0 × 10⁹ N·m²/C², where ε₀ is the permittivity of free space. Both forms appear in physics. Use whichever your data make easier."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Charge: a property of matter

Rub a balloon on your hair and it sticks to a wall. Tear up small bits of paper and a combed plastic ruler picks them up. These effects come from **electric charge**, a basic property of matter, like mass.

There are two kinds of charge, called **positive** and **negative**. The names are a convention. What matters is that the two kinds behave in opposite ways.

Ordinary matter is made of three particles:

| Particle | Charge | Where it is |
|---|---|---|
| Proton | +e | in the nucleus |
| Neutron | 0 | in the nucleus |
| Electron | −e | around the nucleus |

Here **e = 1.60 × 10⁻¹⁹ C** is the **elementary charge**. The SI unit of charge is the coulomb (C). In this course you treat e as the smallest piece of charge that can exist on its own. So every charge you meet is a whole-number multiple of e:

**q = Ne** (N a whole number, positive or negative)

An object with more protons than electrons has a positive net charge. An object with more electrons than protons has a negative net charge. A **neutral** object has equal numbers, so its net charge is zero, but it is still full of charges.

Two quick consequences:

- One coulomb is a lot of charge. It takes 1 ÷ (1.60 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons to make −1 C. Charges in everyday static electricity are usually nanocoulombs (nC, 10⁻⁹ C) or microcoulombs (μC, 10⁻⁶ C).
- A charge of −4.8 × 10⁻¹⁹ C means exactly 3 extra electrons. A charge of 2.4 × 10⁻¹⁹ C would be 1.5e, which is not possible.

### The point-charge model

A **point charge** is a model: you treat a charged object as if all its charge sat at a single point. The model works when the object is small compared with the distances in the problem. Two charged beads 30 cm apart, each 2 mm across, are good point charges. Two charged spheres 3 cm across that almost touch are not, because the charge on each sphere is spread out and can shift.

## Coulomb's law

The electric force between two point charges q₁ and q₂ a distance r apart has magnitude

**F = k|q₁q₂| / r² = (1/(4πε₀)) |q₁q₂| / r²**

where **k = 9.0 × 10⁹ N·m²/C²** and **ε₀ = 8.85 × 10⁻¹² C²/(N·m²)** is the permittivity of free space.

The law has three parts.

1. **Size.** F is proportional to each charge and inversely proportional to the square of the distance between them.
2. **Line of action.** The force on each charge points along the straight line joining the two charges.
3. **Direction along that line.** Charges of the **same sign repel**. Charges of **opposite sign attract**.

The force on q₁ from q₂ and the force on q₂ from q₁ form a Newton's third law pair. They have the **same magnitude**, even if one charge is much larger than the other, and they point in opposite directions.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="coul-title coul-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="coul-title">Directions of the electric force for like and unlike charges</title>
<desc id="coul-desc">Three rows. Top row: two positive charges a distance r apart, each with a force arrow pointing away from the other, labelled repel. Middle row: two negative charges a distance r apart, each with an arrow pointing away from the other, labelled repel. Bottom row: a positive charge and a negative charge a distance r apart, each with an arrow pointing toward the other, labelled attract. All arrows lie along the line joining the charges and the two arrows in each row are the same length.</desc>
<defs><marker id="coul-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" fill="#ffffff" stroke-width="2">
<circle cx="200" cy="60" r="18"/><circle cx="360" cy="60" r="18"/>
<circle cx="200" cy="150" r="18"/><circle cx="360" cy="150" r="18"/>
<circle cx="200" cy="240" r="18"/><circle cx="360" cy="240" r="18"/>
</g>
<g font-size="22" font-weight="700" fill="#1d2b44" text-anchor="middle">
<text x="200" y="68">+</text><text x="360" y="68">+</text>
<text x="200" y="157">−</text><text x="360" y="157">−</text>
<text x="200" y="248">+</text><text x="360" y="247">−</text>
</g>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#coul-arr)">
<line x1="180" y1="60" x2="120" y2="60"/><line x1="380" y1="60" x2="440" y2="60"/>
<line x1="180" y1="150" x2="120" y2="150"/><line x1="380" y1="150" x2="440" y2="150"/>
<line x1="220" y1="240" x2="280" y2="240"/><line x1="340" y1="240" x2="285" y2="240"/>
</g>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3">
<line x1="200" y1="90" x2="360" y2="90"/><line x1="200" y1="180" x2="360" y2="180"/><line x1="200" y1="270" x2="360" y2="270"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="280" y="104">r</text><text x="280" y="194">r</text><text x="280" y="288">r</text>
</g>
<g font-size="13" fill="#1d2b44">
<text x="460" y="65">repel</text><text x="460" y="155">repel</text><text x="460" y="245">attract</text>
<text x="20" y="65">like (+, +)</text><text x="20" y="155">like (−, −)</text><text x="20" y="245">unlike (+, −)</text>
</g>
</svg>
<figcaption>Figure 1. Force arrows for three pairs of point charges a distance r apart. Like charges push each other apart; unlike charges pull together. In every pair the two arrows are equal in length and lie along the line joining the charges.</figcaption>
</figure>

### Predicting changes

Because F ∝ |q₁q₂| / r², you can predict new forces from **factors of change** without knowing k:

- Double one charge: F doubles.
- Double both charges: F becomes 2 × 2 = 4 times larger.
- Double the separation: F becomes 1/2² = 1/4 as large.
- Triple the separation: F becomes 1/9 as large.

Combine the factors by multiplying. Doubling both charges **and** doubling r gives (2 × 2)/2² = 1: the force does not change.

## More than two charges: superposition

When several charges act on one charge, each pair interacts exactly as if the others were not there. The **net electric force** is the **vector sum** of the separate forces:

**F_net = F₁ + F₂ + F₃ + …** (added as vectors)

A reliable method:

1. Draw the charge you care about and every other charge.
2. For each other charge, find the magnitude with Coulomb's law (use |q₁q₂|).
3. Mark the direction of each force on a diagram: away from like charges, toward unlike charges.
4. Split each force into x and y components, with signs from your diagram.
5. Add the components, then find the magnitude and direction of the net force.

In this course, calculations involve **four or fewer** interacting charges, or more charges arranged with high symmetry so that many components cancel.

## Electric force versus gravitational force

Both forces follow an inverse-square law with distance. They differ in two important ways.

| | Gravitational force | Electric force |
|---|---|---|
| Depends on | masses | charges |
| Direction | always attractive | attractive or repulsive |
| Constant | G = 6.67 × 10⁻¹¹ N·m²/kg² | k = 9.0 × 10⁹ N·m²/C² |

For an electron and a proton, the ratio of the two forces does not depend on their separation, because both forces have the same 1/r²:

F_E / F_G = k e² / (G mₑ mₚ) = (9.0 × 10⁹)(1.60 × 10⁻¹⁹)² ÷ [(6.67 × 10⁻¹¹)(9.11 × 10⁻³¹)(1.67 × 10⁻²⁷)] ≈ 2.3 × 10³⁹

So for charged particles the gravitational force is tiny by comparison. Why, then, does gravity hold planets in orbit? Because large objects are very close to **electrically neutral**. In a planet the positive and negative charges almost exactly cancel, so the net electric force on another planet is close to zero. Mass has only one sign, so gravitational forces never cancel. They add up, and over large distances and large masses gravity dominates.

### Everyday forces are electric underneath

The normal force from a table, friction, tension in a rope and the push of your hand are all, at the atomic level, electric forces between the charges in atoms. There are far too many particle interactions to track one by one, so in mechanics you model them as **contact forces**: normal force, friction, tension. This is a useful simplification, not a different kind of force.

## Permittivity and polarization

Put a neutral material near a charge. The material's electrons are pulled one way and its nuclei the other. The electrons shift slightly, so one side of each atom or molecule becomes a little negative and the other side a little positive. This **polarization** is an induced separation of positive and negative charge inside the material. The material as a whole stays neutral.

**Electric permittivity** measures how strongly a material or medium polarizes in an electric field. It depends on how easily the electrons in the material can change their arrangement.

- **Free space** (a vacuum) has a fixed permittivity, ε₀. It appears in Coulomb's law through k = 1/(4πε₀) and in later topics.
- Matter has a permittivity different from ε₀, set by its composition and the way its particles are arranged.

Materials also differ in whether charge can move through them:

- In a **conductor** (for example a metal), some charge carriers are free to move easily through the material.
- In an **insulator** (for example glass, dry wood or most plastics), charge carriers cannot move easily. Electrons can still shift slightly within each molecule, so insulators can be polarized.

You will use polarization in Topic 10.2 to explain why a charged object attracts a neutral one.

## Worked example 1: force between two charged spheres

**Question.** Two small charged spheres are 0.12 m apart. Sphere A has charge +4.0 × 10⁻⁸ C and sphere B has charge −6.0 × 10⁻⁸ C. Treat them as point charges.
(a) Find the magnitude and direction of the force on each sphere.
(b) The spheres are moved to 0.36 m apart. Find the new force.
(c) How many extra electrons does B carry?

1. (a) Coulomb's law: F = k|q_A q_B| / r² = (9.0 × 10⁹ N·m²/C²)(4.0 × 10⁻⁸ C)(6.0 × 10⁻⁸ C) ÷ (0.12 m)² = (2.16 × 10⁻⁵ N·m²) ÷ (0.0144 m²) = 1.5 × 10⁻³ N.
2. Direction: the charges have opposite signs, so they **attract**. The force on A points toward B; the force on B points toward A. Both forces have magnitude 1.5 × 10⁻³ N (third law).
3. (b) The distance triples, so F becomes 1/3² = 1/9 as large: F = 1.5 × 10⁻³ N ÷ 9 = 1.67 × 10⁻⁴ N, still attractive.
4. (c) N = |q_B| / e = 6.0 × 10⁻⁸ C ÷ 1.60 × 10⁻¹⁹ C = 3.75 × 10¹¹ extra electrons.

**Answer.** (a) 1.5 × 10⁻³ N on each, attractive, along the line joining them. (b) 1.7 × 10⁻⁴ N. (c) 3.75 × 10¹¹ electrons.

**Check.** Units: (N·m²/C²)(C)(C)/m² = N. Part (b) used a factor of change instead of a fresh calculation; a full calculation with r = 0.36 m gives the same 1.67 × 10⁻⁴ N. A whole number of electrons in (c) is consistent with charge coming in multiples of e.

## Worked example 2: net force from two charges at right angles

**Question.** A +1.0 μC charge sits at the origin. A +3.0 μC charge is 0.30 m away along the +x axis. A −4.0 μC charge is 0.20 m away along the +y axis. Find the magnitude and direction of the net electric force on the +1.0 μC charge.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="sup-title sup-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sup-title">Two forces on a charge at the origin</title>
<desc id="sup-desc">A plus 1.0 microcoulomb charge at the origin. A plus 3.0 microcoulomb charge 0.30 metres to its right on the x axis, and a minus 4.0 microcoulomb charge 0.20 metres above it on the y axis. On the charge at the origin, force F1 of 0.30 newtons points in the negative x direction, away from the plus 3.0 charge, and force F2 of 0.90 newtons points in the positive y direction, toward the minus 4.0 charge. A dashed arrow shows the resultant, 0.95 newtons, pointing up and to the left at 72 degrees above the negative x axis.</desc>
<defs><marker id="sup-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="60" y1="250" x2="500" y2="250" stroke="#1d2b44" stroke-width="1"/>
<line x1="250" y1="310" x2="250" y2="20" stroke="#1d2b44" stroke-width="1"/>
<text x="490" y="270" font-size="12" fill="#1d2b44">x</text><text x="258" y="30" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" fill="#ffffff" stroke-width="2">
<circle cx="250" cy="250" r="15"/><circle cx="430" cy="250" r="15"/><circle cx="250" cy="130" r="15"/>
</g>
<g font-size="18" font-weight="700" fill="#1d2b44" text-anchor="middle">
<text x="250" y="256">+</text><text x="430" y="256">+</text><text x="250" y="136">−</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="255" y="285">+1.0 μC</text><text x="410" y="285">+3.0 μC</text><text x="272" y="128">−4.0 μC</text>
<text x="330" y="242">0.30 m</text><text x="200" y="195">0.20 m</text>
</g>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#sup-arr)">
<line x1="235" y1="250" x2="190" y2="250"/>
<line x1="250" y1="235" x2="250" y2="152"/>
</g>
<line x1="244" y1="240" x2="214" y2="150" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#sup-arr)"/>
<g font-size="12" fill="#1d2b44">
<text x="150" y="245">F₁ = 0.30 N</text><text x="150" y="150">F_net ≈ 0.95 N</text><text x="258" y="215">F₂ = 0.90 N</text>
</g>
</svg>
<figcaption>Figure 2. Forces on the +1.0 μC charge at the origin (not to scale). F₁ (solid, left) is repulsion from the +3.0 μC charge; F₂ (solid, up) is attraction toward the −4.0 μC charge. The dashed arrow is the vector sum.</figcaption>
</figure>

1. Force from the +3.0 μC charge (like signs, so repulsion, pushing the origin charge in the −x direction): F₁ = (9.0 × 10⁹)(3.0 × 10⁻⁶)(1.0 × 10⁻⁶) ÷ (0.30)² = 0.30 N.
2. Force from the −4.0 μC charge (unlike signs, so attraction, pulling toward +y): F₂ = (9.0 × 10⁹)(4.0 × 10⁻⁶)(1.0 × 10⁻⁶) ÷ (0.20)² = 0.90 N.
3. Components of the net force: F_x = −0.30 N, F_y = +0.90 N.
4. Magnitude: F_net = √(0.30² + 0.90²) = √0.90 = 0.949 N.
5. Direction: tan θ = 0.90 ÷ 0.30 = 3.0, so θ = 71.6° above the −x axis (108° measured counterclockwise from the +x axis).

**Answer.** About 0.95 N, pointing up and to the left at 72° above the −x axis.

**Interpretation and check.** The −4.0 μC charge is closer and larger, so it gives the bigger force, and the net force leans mostly toward it, as the diagram shows. Notice that you used |q| in Coulomb's law and took every sign from the diagram. Putting the −4.0 μC sign into the formula as well would make you point F₂ the wrong way.

## Common misconceptions

- **"The larger charge feels the larger force."** The two forces in a pair are always equal in size (Newton's third law). Making either charge larger makes both forces larger by the same factor.
- **Putting signs into Coulomb's law and reading the answer's sign as a direction.** Use |q₁q₂| for the size and decide the direction from like/unlike charges and a diagram.
- **"Doubling the distance halves the force."** It quarters it. The force depends on 1/r².
- **Adding magnitudes instead of vectors.** In Worked example 2, 0.30 N + 0.90 N = 1.20 N is wrong. The forces are at right angles.
- **"A neutral object has no charges."** It has equal amounts of positive and negative charge. Those charges can be shifted (polarized).
- **"Gravity is stronger at large distances."** Both forces fall off as 1/r². Gravity dominates at large scales only because large objects are nearly neutral.
- **"Insulators cannot be affected by charge."** Charge cannot flow freely through them, but their molecules can still be polarized.
- **Using the point-charge model for spheres that nearly touch.** The model needs objects small compared with their separation.

## Where this leads

Topic 10.2 asks how objects become charged in the first place, using conservation of charge, contact, induced charge separation and grounding: see the [Topic 10.2 study guide](/advanced-course-resources/physics-2/10-2-conservation-electric-charge-process-charging-study-guide/). Topic 10.3 then replaces "force between two charges" with the idea of an electric field. Test yourself now with the [practice questions](/advanced-course-resources/physics-2/10-1-electric-charge-electric-force-practice/), then use the [revision notes](/advanced-course-resources/physics-2/10-1-electric-charge-electric-force-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/10-1-electric-charge-electric-force-checklist/) to consolidate.
