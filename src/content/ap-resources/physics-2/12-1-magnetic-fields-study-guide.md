---
resourceId: "mb-ap-phys2-12.1-study-guide"
title: "Magnetic Fields: Study Guide (Physics 2 12.1)"
description: "What a magnetic field is, how dipoles and field lines represent it, why there are no monopoles, how materials respond to a field, Earth's field and permeability."
course: "physics-2"
unit: 12
topics: ["12.1"]
resourceType: "study-guide"
prerequisites:
  - "Electric fields as vector fields and field-line maps (Unit 10)"
  - "Adding perpendicular vectors with Pythagoras and trigonometry"
  - "Current as moving charge (Topic 11.1)"
prerequisiteResources: ["mb-ap-phys2-11.8-study-guide"]
learningObjectives:
  - "Describe a magnetic field as a vector field that acts on moving charges, currents and magnetic materials"
  - "Draw and read field-line maps of a bar magnet, including the closed loops inside the magnet"
  - "Explain why magnetic poles always come in north-south pairs, and how poles attract and repel"
  - "Explain permanent and induced magnetism as alignment of tiny dipoles made by moving electrons"
  - "Compare ferromagnetic, paramagnetic and diamagnetic behaviour, and model Earth's field as a dipole"
  - "Describe magnetic permeability, including the constant μ₀ and why a material's permeability is not constant"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Very little calculation. μ₀ = 4π × 10⁻⁷ T·m/A. Add field vectors with Pythagoras and tan⁻¹"
related: ["mb-ap-phys2-12.1-revision-notes", "mb-ap-phys2-12.1-practice", "mb-ap-phys2-12.1-checklist"]
next: "mb-ap-phys2-12.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A magnetic field B is a vector field. It exerts forces on moving charges, on currents and on magnetic materials. Its unit is the tesla (T)."
  - "Magnetic fields come from dipoles. A north pole is never found without a south pole: there are no magnetic monopoles."
  - "Field lines are closed loops. Outside a magnet they run from N to S; inside, from S back to N."
  - "Like poles repel, unlike poles attract, and a compass needle lines up with the field at its position."
  - "Permanent and induced magnetism both come from the alignment of tiny dipoles, made by the motion of electrons."
  - "Free space has a fixed permeability μ₀. A material's permeability depends on what it is made of and also on temperature and field strength."
faqs:
  - question: "Why does the north end of a compass point north if like poles repel?"
    answer: "Because the magnetic pole of Earth near the geographic North Pole is a magnetic south pole. The north end of the needle is attracted to it. The name 'north pole' of a magnet is short for 'north-seeking pole'."
  - question: "Is a magnetic field line the path a particle follows?"
    answer: "No. A field line shows the direction of B at each point, which is the direction a compass needle points. As you will see in Topic 12.2, the force on a moving charge is at right angles to B, so charges do not travel along field lines in general."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## What a magnetic field is

In Unit 10 you described the space around a charge with an electric field. Magnetism works the same way. A magnet, a current or a moving charge changes the space around it, and we describe that change with a **magnetic field**, symbol **B**.

A magnetic field is a **vector field**. At every point it has a size and a direction. You use it to find the magnetic force on three kinds of things placed at that point:

- a **moving** charged object (a charge at rest feels no magnetic force),
- a wire carrying an electric **current**, and
- a **magnetic material**, such as a compass needle or a piece of iron.

The SI unit of B is the **tesla (T)**, a large unit. A fridge magnet gives roughly 0.001 to 0.01 T near its surface, and Earth's field at the surface is only about 30 to 60 microtesla (3 × 10⁻⁵ to 6 × 10⁻⁵ T). So you will often see mT (10⁻³ T) and μT (10⁻⁶ T).

The direction of B at a point is defined as the direction in which the **north end of a small compass needle** points when it is placed there. That gives you a practical way to map any field: move a small compass around and record where it points.

## Dipoles, poles and field lines

Every magnet you can hold is a **magnetic dipole**. It has two ends of opposite polarity, called the **north pole (N)** and the **south pole (S)**. A bar magnet is the simplest example. Magnetic fields are always produced by dipoles, or by combinations of dipoles. They are never produced by a single isolated pole, a **monopole**.

Unlike electric charges, poles never come alone. If you cut a bar magnet in half, you do not separate N from S. You get two smaller magnets, each with its own N and S. A new pair of poles appears at the cut. Cut again and the same thing happens, down to the level of single atoms.

Poles interact like this:

- **Like poles repel** (N–N or S–S).
- **Unlike poles attract** (N–S).

### Field lines

A field-line map (a vector field map) shows B the same way an electric field map shows E:

- The **direction** of B at a point is along the tangent to the line, in the direction of the arrow.
- The **strength** of B is shown by how close the lines are. Crowded lines mean a strong field.
- Field lines never cross, because B has only one direction at each point.

Magnetic field lines have one rule that electric field lines do not: **magnetic field lines always form closed loops**. They have no start and no end. Electric field lines start on positive charges and end on negative charges. Magnetic field lines cannot do that, because there are no magnetic "charges" (monopoles) for them to start or end on.

For a bar magnet (Figure 1), the field outside points **away from the north pole** and curves round to **enter the south pole**. That is how the two poles are defined. Inside the magnet the lines carry on from **S to N**, which closes each loop.

<figure>
<svg viewBox="0 0 560 380" role="img" aria-labelledby="bar-field-title bar-field-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bar-field-title">Magnetic field lines around and through a bar magnet</title>
<desc id="bar-field-desc">A horizontal bar magnet in the centre, with its south pole labelled S on the left half and its north pole labelled N on the right half. Curved field lines leave the north end, loop above and below the magnet, and enter the south end. Arrows on the lines point from the north end towards the south end outside the magnet. A straight line runs along the axis: it leaves the north end to the right, and enters the south end from the left. Inside the magnet a dashed line with an arrow points from the south end to the north end, completing the closed loops. Lines are closest together near the poles and spread out far from the magnet. Point P is above the middle of the magnet, where the field points to the left, parallel to the magnet.</desc>
<defs><marker id="bf-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.6">
<polyline points="335,159 339,149 342,140 345,130 347,120 349,111 349,101 349,91 348,81 346,71 343,61 339,52 334,44 328,36 320,29 312,23 304,18 294,15 284,13 274,13 265,15 255,18 246,23 238,29 231,36 225,44 220,52 216,62 213,71 211,81 210,91 210,101 211,111 212,121 214,131 217,140 220,150 224,159 224,159"/>
<polyline points="335,191 339,201 342,210 345,220 347,230 349,239 349,249 349,259 348,269 346,279 343,289 339,298 334,306 328,314 320,321 312,327 304,332 294,335 284,337 274,337 265,335 255,332 246,327 238,321 231,314 225,306 220,298 216,288 213,279 211,269 210,259 210,249 211,239 212,229 214,219 217,210 220,200 224,191 224,191"/>
<polyline points="326,159 325,149 323,139 319,130 315,121 309,113 301,107 292,102 283,100 273,100 263,103 255,109 248,116 243,124 239,133 236,143 234,153 233,159"/>
<polyline points="326,191 325,201 323,211 319,220 315,229 309,237 301,243 292,248 283,250 273,250 263,247 255,241 248,234 243,226 239,217 236,207 234,197 233,191"/>
<polyline points="311,159 303,153 295,148 285,146 275,145 265,148 257,153 249,159 248,159"/>
<polyline points="311,191 303,197 295,202 285,204 275,205 265,202 257,197 249,191 248,191"/>
<line x1="335" y1="175" x2="545" y2="175"/><line x1="15" y1="175" x2="225" y2="175"/>
</g>
<g stroke="#1d2b44" stroke-width="1.6">
<line x1="290" y1="13" x2="280" y2="13" marker-end="url(#bf-arr)"/>
<line x1="290" y1="337" x2="280" y2="337" marker-end="url(#bf-arr)"/>
<line x1="289" y1="100" x2="279" y2="100" marker-end="url(#bf-arr)"/>
<line x1="289" y1="250" x2="279" y2="250" marker-end="url(#bf-arr)"/>
<line x1="281" y1="145" x2="271" y2="145" marker-end="url(#bf-arr)"/>
<line x1="281" y1="205" x2="271" y2="205" marker-end="url(#bf-arr)"/>
<line x1="440" y1="175" x2="452" y2="175" marker-end="url(#bf-arr)"/><line x1="110" y1="175" x2="122" y2="175" marker-end="url(#bf-arr)"/>
</g>
<rect x="225" y="160" width="55" height="30" fill="#e8eef7" stroke="#1d2b44" stroke-width="2"/>
<rect x="280" y="160" width="55" height="30" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<line x1="236" y1="183" x2="318" y2="183" stroke="#1d2b44" stroke-width="1.6" stroke-dasharray="5 3" marker-end="url(#bf-arr)"/>
<g font-size="15" font-weight="700" fill="#1d2b44" text-anchor="middle"><text x="252" y="178">S</text><text x="308" y="178">N</text></g>
<circle cx="283" cy="118" r="3.5" fill="#1d2b44"/><text x="291" y="132" font-size="13" font-weight="600" fill="#1d2b44">P</text>
<text x="280" y="368" font-size="12" fill="#1d2b44" text-anchor="middle">Outside: lines run from N to S. Inside (dashed): from S to N. Every line is a closed loop.</text>
</svg>
<figcaption>Figure 1. Field lines of a bar magnet (N on the right). Arrows show the direction of B. Outside the magnet the field points away from N and back towards S; inside it points from S to N, so each line closes on itself. The lines are crowded near the poles, where the field is strongest, and spread out with distance. At P, above the middle of the magnet, B points to the left, parallel to the magnet.</figcaption>
</figure>

Two more features of Figure 1 matter:

- The field is strongest near the poles, where the lines crowd together.
- The field gets **weaker as you move away** from the magnet. The lines spread out. Far from a small magnet the field falls off quickly with distance (much faster than the field of a single point charge).

### A compass in a field

A compass needle is a small dipole that can turn freely. In a magnetic field it **tends to line up with the field**: its north end turns to point along B. This happens because the field pushes the needle's N end one way and its S end the opposite way, which twists the needle until it lies along the field line. At point P in Figure 1, above the middle of the magnet, a compass would point to the left, towards the magnet's S end.

## Where magnetism comes from

Why are some objects magnetic? The answer is moving charge. **A charge moving in a circle, or spinning, acts as a tiny magnetic dipole.** In atoms, electrons move around the nucleus and also have an intrinsic spin. Each electron therefore behaves like a microscopic magnet. In most atoms these tiny dipoles point in different directions and cancel. In some atoms they do not fully cancel, so the atom itself is a small dipole.

Whether a whole object is magnetic depends on how its atomic dipoles are arranged:

- **Random directions:** the dipoles cancel. The object has no overall field.
- **Lined up:** the dipoles add. The object is a magnet.

So magnetism is a **system property**: it belongs to the arrangement of many dipoles, not to any one of them.

### Permanent and induced magnetism

- A **permanent magnet** keeps its dipoles lined up after any external field has gone.
- **Induced magnetism** appears only while an external field lines the dipoles up. Bring a magnet near an iron paper clip and the clip's dipoles align with the field: the clip becomes a magnet, with its nearer end the opposite pole to the magnet's pole. That is why the clip is attracted. It can then pick up a second clip.

Both kinds are the same physics: **alignment of magnetic dipoles in a system**. They differ only in whether the alignment lasts. Strong heating or hammering can scramble the alignment, which is why a dropped or overheated magnet can lose strength.

## How different materials respond

All materials respond to a magnetic field in some way. What they do depends on their composition.

| Behaviour | Examples | What happens in an external field | After the field is removed |
|---|---|---|---|
| **Ferromagnetic** | iron, nickel, cobalt | Regions called **domains**, each with many dipoles already aligned, grow and turn to line up with the field. Strong attraction. | Much of the alignment can stay: the material can become a permanent magnet. |
| **Paramagnetic** | aluminium, titanium, magnesium | Atomic dipoles line up slightly with the field. Weak attraction. | The dipoles go back to random directions. No lasting magnetism. |
| **Diamagnetic** | every material; it is the main effect in copper, water and bismuth | The electrons' motion adjusts to create a weak alignment **opposite** to the field. Weak repulsion. | Nothing remains. |

**Every** material is diamagnetic, but in ferro- and paramagnetic materials the stronger attraction hides it. Para- and diamagnetic effects are tiny, which is why we usually call aluminium and copper "non-magnetic".

## Earth as a magnet

Earth's field can be modelled as the field of a **magnetic dipole**, as if a large bar magnet sat near Earth's centre. The dipole is tilted by about 11° from Earth's rotation axis, so the magnetic poles are not at the geographic poles.

Here is the part that often confuses students. The north end of a compass points roughly towards the **geographic North Pole**. The north end of a needle is attracted by a **south** pole. So the magnetic pole near the geographic North Pole is, in physics terms, a **magnetic south pole**. Outside Earth, field lines leave the southern hemisphere, loop round, and enter the ground in the northern hemisphere. Inside Earth they run back from north to south, closing the loops.

Because of this geometry, Earth's field at most places is not horizontal. In the northern hemisphere it points partly downwards into the ground. An ordinary compass only shows the horizontal part.

## Magnetic permeability

When a material sits in an external field, its own dipoles add to or subtract from that field. **Magnetic permeability**, symbol **μ**, measures how strongly a material becomes magnetised in response to an external field.

- **Free space** (a vacuum) has a fixed permeability, the **vacuum permeability μ₀ = 4π × 10⁻⁷ T·m/A ≈ 1.26 × 10⁻⁶ T·m/A**. It is a constant of nature, like ε₀ for electric fields, and it appears in the equations for fields made by moving charges and currents later in this unit.
- **Matter** has a permeability different from μ₀, set by its composition and the arrangement of its atoms. Ferromagnetic materials have μ much larger than μ₀. Paramagnetic materials have μ slightly larger than μ₀. Diamagnetic materials have μ slightly smaller than μ₀.
- A material's permeability is **not a constant**. It changes with temperature, with the orientation of the sample and with the strength of the external field. For iron the change is large.

A useful way to compare is the ratio μ/μ₀ (often called the relative permeability). It has no units. For a long rod of material that fills a long coil, the field inside is μ/μ₀ times the field the coil makes with nothing inside it. You will meet coils properly in Topic 12.3.

## Worked example 1: a compass near a magnet

**Question.** A compass lies flat on a table. With no magnet nearby, its needle points north. Here the horizontal part of Earth's field is 2.0 × 10⁻⁵ T, pointing north. A bar magnet is now placed due east of the compass, with its **north pole** facing the compass. At the compass, the magnet's field is 3.5 × 10⁻⁵ T. (a) Which way does the magnet's field point at the compass? (b) Find the size and direction of the total horizontal field. (c) Which way does the needle point?

1. **Direction of the magnet's field.** Outside a magnet the field points away from its north pole. The N pole is to the east, so at the compass the magnet's field points **west**.
2. **Add the vectors.** Magnetic fields are vectors, so the total field is the vector sum. North and west are at right angles, so use Pythagoras: B = √[(2.0 × 10⁻⁵ T)² + (3.5 × 10⁻⁵ T)²] = 4.03 × 10⁻⁵ T.
3. **Direction.** The angle from north towards west is θ = tan⁻¹(3.5 ÷ 2.0) = 60.3°. So the total field points about **60° west of north**.
4. **The needle.** A compass lines up with the total field at its position. Its north end points about 60° west of north.

**Answer.** (a) West. (b) 4.0 × 10⁻⁵ T, 60° west of north. (c) The north end points 60° west of north.

**Interpretation and check.** The angle is more than 45° because the magnet's field (3.5 × 10⁻⁵ T) is bigger than Earth's (2.0 × 10⁻⁵ T). If the magnet is moved further east, its field at the compass gets weaker, because a dipole's field decreases with distance. At 1.0 × 10⁻⁵ T the angle would be tan⁻¹(1.0 ÷ 2.0) = 26.6°. If the magnet is turned round so its south pole faces the compass, its field points east (towards S), and the needle swings to the east of north instead.

## Worked example 2: classifying materials by permeability

**Question.** A long coil produces a uniform field of 4.00 mT inside it when it is empty. A technician places long rods of three unknown materials W, X and Y inside it, one at a time, so that each rod fills the coil. A sensitive probe measures the field inside each rod. (These are invented results for practice.)

| Rod | Field inside (coil on) | Field near the rod after the coil is switched off |
|---|---|---|
| W | 4.00008 mT | 0 |
| X | 3.99996 mT | 0 |
| Y | 1.60 T | 0.15 mT |

(a) Find μ/μ₀ for each rod. (b) Classify each material. (c) The technician doubles the coil's field. Will the field inside Y double too? Explain.

1. **Ratios.** For a long rod filling a long coil, μ/μ₀ = (field with rod) ÷ (field without rod).
   - W: 4.00008 mT ÷ 4.00 mT = 1.00002.
   - X: 3.99996 mT ÷ 4.00 mT = 0.99999.
   - Y: 1.60 T ÷ 0.00400 T = 400.
2. **W.** μ is just above μ₀, so W's dipoles line up slightly with the field and strengthen it a little. Nothing remains when the coil is off. W is **paramagnetic**.
3. **X.** μ is just below μ₀, so X's response is a weak alignment opposite to the field. X is **diamagnetic**.
4. **Y.** μ = 400μ₀ = 400 × 4π × 10⁻⁷ T·m/A = 5.03 × 10⁻⁴ T·m/A. The field inside is hundreds of times bigger than the coil's own field, and some magnetism remains after the coil is off. Y is **ferromagnetic**: its domains lined up and many stayed lined up.
5. **Doubling the field.** Not necessarily. The permeability of a material is not a constant: for a ferromagnet it depends strongly on the external field. At 1.60 T a ferromagnet like Y already has most of its domains aligned, so there is little extra alignment left to gain. The field inside Y will increase, but most likely by less than a factor of 2.

**Answer.** (a) W 1.00002, X 0.99999, Y 400. (b) W paramagnetic, X diamagnetic, Y ferromagnetic. (c) Not necessarily: Y's μ changes with field strength. With most domains already aligned, the field most likely rises by less than double.

**Interpretation.** The changes for W and X are tiny: 0.08 μT up and 0.04 μT down in a 4 mT field. That is why para- and diamagnetism are hard to notice in everyday life. The leftover field near Y is the sign of permanent magnetism.

## Common misconceptions

- **"Field lines start at N and stop at S."** They continue inside the magnet from S to N. Every magnetic field line is a closed loop.
- **"Cut a magnet in half and you get a north piece and a south piece."** You get two complete dipoles. There are no magnetic monopoles.
- **"Magnetic field lines show the path a charge follows."** They show the direction a compass needle points. Moving charges are pushed sideways, at right angles to B (Topic 12.2).
- **"The magnetic pole in the Arctic is a north pole."** It attracts the north end of compass needles, so it is a magnetic south pole.
- **"Magnets attract all metals."** Strong attraction needs a ferromagnetic material. Aluminium is only weakly attracted (paramagnetic); copper is weakly repelled (diamagnetic).
- **"Permeability is a fixed property, like density."** Only μ₀ is fixed. A material's μ changes with temperature, orientation and field strength.
- **"A charge at rest in a magnetic field feels a force."** A magnetic field only acts on moving charges, currents and magnetic materials.

## Where this leads

Topic 12.2, [Magnetism and Moving Charges](/advanced-course-resources/physics-2/12-2-magnetism-moving-charges-study-guide/), shows how a single moving charge creates a magnetic field and how a field pushes on a moving charge. Topic 12.3 then builds the fields of current-carrying wires and coils. Test yourself with the [practice questions](/advanced-course-resources/physics-2/12-1-magnetic-fields-practice/), then use the [revision notes](/advanced-course-resources/physics-2/12-1-magnetic-fields-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/12-1-magnetic-fields-checklist/) to consolidate.
