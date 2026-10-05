---
resourceId: "mb-ap-phys2-12.3-study-guide"
title: "Magnetism and Current-Carrying Wires: Study Guide (Physics 2 12.3)"
description: "The magnetic field around a long straight wire and at the centre of a loop, adding fields from several wires, and the force a magnetic field exerts on a current."
course: "physics-2"
unit: 12
topics: ["12.3"]
resourceType: "study-guide"
prerequisites:
  - "The magnetic field of a moving charge and the force on a moving charge (Topic 12.2)"
  - "Current as the rate of flow of charge (Topic 11.1)"
  - "Adding vectors by components"
prerequisiteResources: ["mb-ap-phys2-12.2-study-guide"]
learningObjectives:
  - "Describe the shape and direction of the magnetic field around a long straight wire using the right-hand rule"
  - "Use B = μ₀I/(2πr) to calculate field strengths and predict how B changes when I or r changes"
  - "Find the direction of the field at the centre of a current loop"
  - "Add the fields of two or more wires as vectors"
  - "Calculate the force on a current-carrying wire in a magnetic field and find its direction"
  - "Plan and analyse an experiment that tests how B depends on current or distance"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "μ₀ = 4π × 10⁻⁷ T·m/A, so μ₀/(2π) = 2 × 10⁻⁷ T·m/A. g = 9.8 m/s². Keep unrounded values until the final step"
related: ["mb-ap-phys2-12.3-revision-notes", "mb-ap-phys2-12.3-practice", "mb-ap-phys2-12.3-checklist"]
next: "mb-ap-phys2-12.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A current makes a magnetic field. Around a long straight wire the field lines are circles centred on the wire."
  - "B = μ₀I/(2πr): double the current and B doubles; double the distance and B halves."
  - "Right-hand rule: thumb along the current, curled fingers show the direction of B."
  - "Fields from several wires add as vectors, so they can cancel at some points."
  - "A field pushes on a current: F = IℓB sin θ, at right angles to both the wire and the field."
faqs:
  - question: "Do I need a formula for the size of the field at the centre of a loop?"
    answer: "No. In this topic you need the direction of the field at the centre of a loop, which you find with the right-hand rule. The formula you calculate with is the one for a long straight wire."
  - question: "Why does a wire carrying a current feel a force if the wire is electrically neutral?"
    answer: "The magnetic force acts on moving charges. In the wire only the conduction electrons drift along it, so they feel the force and pass it on to the metal. The stationary positive ions feel no magnetic force."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## From one moving charge to a current

In Topic 12.2 you met two ideas. A moving charged object makes a magnetic field around it. A magnetic field pushes on a charged object that moves through it. A current in a wire is just a huge number of charges drifting along together. So a current-carrying wire does both things at once:

- it **makes** a magnetic field in the space around it, and
- it **feels** a force when it sits in a magnetic field made by something else.

This topic deals with each idea in turn, then puts them together for two wires near each other.

## The field around a long straight wire

Picture a long, straight wire running at right angles to this page, with the current going into the page. Sprinkle iron filings on the page around it and they line up in **circles centred on the wire**. The magnetic field vector at any point is **tangent** to the circle through that point. It has no part pointing towards the wire, away from it, or along it.

**Direction: the right-hand rule.** Point the thumb of your right hand along the (conventional) current. Your fingers curl around the wire in the direction of the field. For a current going into the page, the field circles **clockwise** as you look at the page. For a current coming out of the page, it circles anticlockwise.

**Size.** At a perpendicular distance r from the centre of a long straight wire carrying current I:

**B = μ₀I / (2πr)**

Here μ₀ = 4π × 10⁻⁷ T·m/A is the vacuum permeability (Topic 12.1). A handy shortcut is μ₀/(2π) = 2 × 10⁻⁷ T·m/A. So B is **proportional to I** and **inversely proportional to r**. Note that it is 1/r, not the 1/r² you used for point charges.

For example, a wire carrying 10 A gives B = (2 × 10⁻⁷ T·m/A)(10 A) ÷ (0.050 m) = 4.0 × 10⁻⁵ T at 5.0 cm from its centre. Use the functional dependence to predict new values without starting again:

- at 10 cm (twice as far), B halves to 2.0 × 10⁻⁵ T;
- at 2.5 cm (half as far), B doubles to 8.0 × 10⁻⁵ T;
- with 20 A at 5.0 cm, B doubles to 8.0 × 10⁻⁵ T.

"Long" means the wire is much longer than the distance r, so the ends do not matter.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="wire-field-title wire-field-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="wire-field-title">Magnetic field lines around a long straight wire carrying current into the page</title>
<desc id="wire-field-desc">End view of a wire at the centre, drawn as a circle with a cross to show current into the page. Three concentric circular field lines surround it, each with arrowheads showing a clockwise direction. A point P lies on the middle circle directly to the right of the wire. A dashed line labelled r joins the wire to P. At P an arrow labelled B points straight down the page, tangent to the circle.</desc>
<defs><marker id="wf-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.5">
<circle cx="230" cy="200" r="55"/>
<circle cx="230" cy="200" r="110"/>
<circle cx="230" cy="200" r="165"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#wf-arr)">
<path d="M222 145 L238 145"/><path d="M238 255 L222 255"/>
<path d="M222 90 L238 90"/><path d="M238 310 L222 310"/>
<path d="M222 35 L238 35"/><path d="M238 365 L222 365"/>
<path d="M65 208 L65 192"/><path d="M120 208 L120 192"/>
</g>
<circle cx="230" cy="200" r="14" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M221 191 L239 209 M239 191 L221 209" stroke="#1d2b44" stroke-width="2"/>
<line x1="244" y1="200" x2="340" y2="200" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<text x="290" y="192" font-size="13" fill="#1d2b44" text-anchor="middle">r</text>
<circle cx="340" cy="200" r="4" fill="#1d2b44"/>
<text x="352" y="196" font-size="14" font-weight="600" fill="#1d2b44">P</text>
<line x1="340" y1="204" x2="340" y2="262" stroke="#1d2b44" stroke-width="3" marker-end="url(#wf-arr)"/>
<text x="352" y="250" font-size="14" font-weight="600" fill="#1d2b44">B</text>
<text x="430" y="70" font-size="13" fill="#1d2b44">⊗ current I</text>
<text x="430" y="88" font-size="13" fill="#1d2b44">into the page</text>
<text x="430" y="120" font-size="13" fill="#1d2b44">field lines circle</text>
<text x="430" y="138" font-size="13" fill="#1d2b44">clockwise</text>
</svg>
<figcaption>Figure 1. End view of a long straight wire with current into the page (⊗). The field lines are circles centred on the wire, running clockwise. At P, to the right of the wire, the field points down the page, tangent to the circle and at right angles to the radius r. Circles further out stand for a weaker field.</figcaption>
</figure>

## The field at the centre of a loop

Bend the wire into a circle. Every short piece of the loop makes a field that, at the centre, points the same way, so they add up. The field at the centre points **along the axis of the loop**, at right angles to the plane of the loop.

To find its direction, curl the fingers of your right hand around the loop in the direction of the current. Your thumb points along the field at the centre. A loop drawn on the page with an **anticlockwise** current has a field **out of the page** at its centre. A clockwise current gives a field into the page. You need only this direction in this topic, not a formula for the size.

## Fields from more than one wire

Magnetic fields obey **superposition**. Find the field of each wire at the point as if it were alone (size from μ₀I/(2πr), direction from the right-hand rule), then add the vectors. Two wires can make fields that point the same way and add, or opposite ways and partly or fully cancel. Worked example 1 shows both.

## The force on a current-carrying wire

Now place a straight wire in a magnetic field B made by something else, such as a magnet. The field pushes on each drifting charge, and the wire as a whole feels a force:

**F = IℓB sin θ**

- I is the current, in A;
- ℓ is the length of wire **inside** the field, in m;
- B is the field strength, in T;
- θ is the angle between the direction of the current and the direction of B.

The force is largest (F = IℓB) when the wire is at right angles to the field, and **zero** when the current runs parallel or antiparallel to B. If θ = 30°, sin θ = 0.5 and the force is half its largest value. Only the part of B at right angles to the wire matters.

**Where it comes from.** Suppose a length ℓ of wire holds N charge carriers, each of charge q, drifting at speed v. Each one feels a force qvB (field at right angles). A carrier takes time ℓ/v to cross the length ℓ, so the current is I = Nq ÷ (ℓ/v) = Nqv/ℓ. The total force is N(qvB) = (Nqv)B = IℓB. So the wire formula is just the moving-charge formula from Topic 12.2, added up over all the carriers.

**Direction: the right-hand rule again.** Point the fingers of your right hand along the current. Curl them towards the direction of B. Your thumb points along the force. The force is always **at right angles to both** the wire and the field. It is the same answer you get by treating the current as positive charges moving along the wire.

Unit check: A × m × T = A × m × N/(A·m) = N.

### Two parallel wires

Two long parallel wires, a distance d apart, carry currents I₁ and I₂. Wire 1 makes a field B₁ = μ₀I₁/(2πd) at wire 2, at right angles to wire 2. So a length ℓ of wire 2 feels

**F = I₂ℓ × μ₀I₁/(2πd) = μ₀I₁I₂ℓ/(2πd)**

Using both right-hand rules gives a short result:

- currents in the **same** direction: the wires **attract**;
- currents in **opposite** directions: the wires **repel**.

This is the reverse of the rule for charges, so learn it carefully. By Newton's third law the two forces are equal in size, even when one current is much larger than the other.

## Worked example 1: two wires, one point

**Question.** Two long parallel wires, P and Q, are 6.0 cm apart and at right angles to the page. Both carry current into the page: 8.0 A in P and 4.0 A in Q. Q is to the right of P. (a) Find the magnetic field at M, the midpoint between them. (b) Find where on the line PQ the field is zero. (c) Find the force per metre between the wires.

1. **(a) Field of P at M.** r = 3.0 cm. B_P = (2 × 10⁻⁷)(8.0) ÷ 0.030 = 5.33 × 10⁻⁵ T. Current into the page gives clockwise circles, and M is to the right of P, so B_P points **down** the page (as at point P in Figure 1).
2. **Field of Q at M.** B_Q = (2 × 10⁻⁷)(4.0) ÷ 0.030 = 2.67 × 10⁻⁵ T. M is to the **left** of Q. On a clockwise circle the left-hand side runs upwards, so B_Q points **up** the page.
3. **Add the vectors.** They point in opposite directions: B = 5.33 × 10⁻⁵ − 2.67 × 10⁻⁵ = **2.7 × 10⁻⁵ T, down the page**.
4. **(b) Zero field.** Between the wires the two fields always point opposite ways, so they can cancel there. Let the point be x from P. Then 8.0/x = 4.0/(0.060 − x), so 8.0(0.060 − x) = 4.0x and x = 0.040 m. The field is zero **4.0 cm from P (2.0 cm from Q)**, nearer the weaker wire.
5. **(c) Force.** F/ℓ = μ₀I₁I₂/(2πd) = (2 × 10⁻⁷)(8.0)(4.0) ÷ 0.060 = **1.1 × 10⁻⁴ N/m**. The currents are in the same direction, so the wires **attract**. P pulls on Q and Q pulls on P with forces of the same size.

**Check.** At the zero point, B_P = (2 × 10⁻⁷)(8.0)/0.040 = 4.0 × 10⁻⁵ T and B_Q = (2 × 10⁻⁷)(4.0)/0.020 = 4.0 × 10⁻⁵ T: equal and opposite. Outside the pair (for example 2.0 cm to the left of P) both fields point up the page and add, so there is no zero point there.

## Worked example 2: lifting a rod with a magnetic force

**Question.** A horizontal metal rod of mass 3.0 g hangs from two light, flexible leads. A 5.0 cm length of the rod sits in a uniform horizontal field of 0.12 T, at right angles to the rod. The current runs to the right along the rod. (a) Which way must the field point so that the magnetic force on the rod is upwards? (b) What current makes the tension in the leads zero? (c) The rod is turned in the horizontal plane until it makes 30° with the field. What current is now needed?

1. **(a) Direction.** We want an upward force with the current to the right. Fingers to the right, curl them towards B, thumb up: this works if B points **into the page**. (Check: fingers right, curled into the page, thumb points up.)
2. **(b) Balance.** The tension is zero when the magnetic force equals the weight: IℓB = mg.
3. Weight: mg = (0.0030 kg)(9.8 m/s²) = 0.0294 N.
4. I = mg/(ℓB) = 0.0294 N ÷ [(0.050 m)(0.12 T)] = **4.9 A**.
5. **(c) At 30°.** Now F = IℓB sin 30° = 0.5 IℓB, so the current must double: I = 0.0294 ÷ (0.050 × 0.12 × 0.5) = **9.8 A**. Both the rod and B are still horizontal, so the force is still vertical.

**Interpretation.** Only 5.0 cm of rod is in the field, so ℓ = 0.050 m, not the full length of the rod. If the current were reversed, the force would point down and the tension would increase instead.

## Worked example 3: testing B ∝ 1/r with data

**Question.** A student uses a magnetic field sensor to measure the field at several distances r from a long straight wire carrying a steady current. The sensor is zeroed with the current off, so Earth's field is removed. The (invented) results are below. Use a graph to test whether B ∝ 1/r and to find the current.

| r (cm) | 2.0 | 4.0 | 5.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|
| B (μT) | 118 | 61 | 47 | 30 | 24 |
| 1/r (m⁻¹) | 50 | 25 | 20 | 12.5 | 10 |

1. **Choose the axes.** B = (μ₀I/2π)(1/r) has the form y = mx. So plot B on the vertical axis against 1/r on the horizontal axis. If the model is right, the points lie on a straight line through the origin.
2. **Plot and fit.** Figure 2 shows the points and a best-fit line through the origin. The points lie close to it, which supports B ∝ 1/r. A graph of B against r would be a curve, which is much harder to test by eye.
3. **Slope.** The best-fit line passes through about (50 m⁻¹, 119 μT), so the slope is 119 × 10⁻⁶ T ÷ 50 m⁻¹ ≈ 2.37 × 10⁻⁶ T·m.
4. **Current.** Slope = μ₀I/(2π), so I = 2.37 × 10⁻⁶ ÷ (2 × 10⁻⁷) ≈ **12 A** (11.9 A from this line).

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="b-invr-title b-invr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="b-invr-title">Graph of magnetic field against one over distance for a long straight wire</title>
<desc id="b-invr-desc">Vertical axis: magnetic field B in microtesla from 0 to 140. Horizontal axis: one over r in inverse metres from 0 to 60. Five data points, drawn as open circles, at (10, 24), (12.5, 30), (20, 47), (25, 61) and (50, 118). A straight best-fit line starts at the origin and passes close to every point, reaching about 119 microtesla at 50 inverse metres.</desc>
<defs><marker id="bi-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#bi-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#bi-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="153.3" y1="340" x2="153.3" y2="346" stroke="#1d2b44"/><text x="153.3" y="360">10</text>
<line x1="226.7" y1="340" x2="226.7" y2="346" stroke="#1d2b44"/><text x="226.7" y="360">20</text>
<line x1="300" y1="340" x2="300" y2="346" stroke="#1d2b44"/><text x="300" y="360">30</text>
<line x1="373.3" y1="340" x2="373.3" y2="346" stroke="#1d2b44"/><text x="373.3" y="360">40</text>
<line x1="446.7" y1="340" x2="446.7" y2="346" stroke="#1d2b44"/><text x="446.7" y="360">50</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">60</text>
<text x="300" y="385" font-size="13">1/r (m⁻¹)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="300" x2="80" y2="300" stroke="#1d2b44"/><text x="70" y="304">20</text>
<line x1="74" y1="260" x2="80" y2="260" stroke="#1d2b44"/><text x="70" y="264">40</text>
<line x1="74" y1="220" x2="80" y2="220" stroke="#1d2b44"/><text x="70" y="224">60</text>
<line x1="74" y1="180" x2="80" y2="180" stroke="#1d2b44"/><text x="70" y="184">80</text>
<line x1="74" y1="140" x2="80" y2="140" stroke="#1d2b44"/><text x="70" y="144">100</text>
<line x1="74" y1="100" x2="80" y2="100" stroke="#1d2b44"/><text x="70" y="104">120</text>
</g>
<text x="24" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 200)">Magnetic field B (μT)</text>
<line x1="80" y1="340" x2="483.3" y2="78.8" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2">
<circle cx="153.3" cy="292" r="5"/><circle cx="171.7" cy="280" r="5"/><circle cx="226.7" cy="246" r="5"/><circle cx="263.3" cy="218" r="5"/><circle cx="446.7" cy="104" r="5"/>
</g>
<text x="400" y="190" font-size="12" fill="#1d2b44" text-anchor="middle">best-fit line through origin</text>
<text x="400" y="206" font-size="12" fill="#1d2b44" text-anchor="middle">slope ≈ 2.37 × 10⁻⁶ T·m</text>
</svg>
<figcaption>Figure 2. The data from Worked example 3 (open circles) plotted as B against 1/r. The dashed best-fit line passes through the origin, as B = (μ₀I/2π)(1/r) predicts. Its slope gives the current.</figcaption>
</figure>

**Designing the experiment.** To test the effect of current instead, keep r fixed and vary I with a variable resistor, reading I from an ammeter; then plot B against I. Without a field sensor, a small compass beside the wire works: the needle settles between Earth's field and the wire's field, and a bigger deflection means a stronger wire field. Use a large enough current that the wire's field is not swamped by Earth's field (roughly 5 × 10⁻⁵ T), and keep magnets and iron away from the set-up.

## Common misconceptions

- **"The field lines point away from the wire."** That is the pattern for the electric field of a charge. Magnetic field lines around a straight wire are closed circles around it.
- **"B falls off as 1/r²."** For a long straight wire, B ∝ 1/r. Doubling the distance halves the field.
- **"The force on a wire points along the field."** The magnetic force is at right angles to both the field and the current. A wire lying along the field feels no force at all.
- **"Parallel currents repel, like charges."** Currents in the same direction attract; opposite currents repel.
- **"The wire with the larger current feels the larger force."** The forces two wires exert on each other are a Newton's third law pair: equal in size, opposite in direction.
- **"The field at the centre of a loop lies in the plane of the loop."** It points along the axis, at right angles to the plane.
- **Using the whole wire for ℓ.** In F = IℓB sin θ, ℓ is only the length that sits inside the field.
- **Quoting "right-hand rule" as a reason.** On written answers, say what the rule gives and why: for example "the current is into the page, so the field circles clockwise, so at a point to the right of the wire it points down the page".

## Where this leads

Topic 12.4 turns the story round: a **changing** magnetic field can make a current, which is electromagnetic induction. Start it with the [Topic 12.4 study guide](/advanced-course-resources/physics-2/12-4-electromagnetic-induction-faradays-law-study-guide/). Before you move on, test yourself with the [practice questions](/advanced-course-resources/physics-2/12-3-magnetism-current-carrying-wires-practice/), then use the [revision notes](/advanced-course-resources/physics-2/12-3-magnetism-current-carrying-wires-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/12-3-magnetism-current-carrying-wires-checklist/) to consolidate.
