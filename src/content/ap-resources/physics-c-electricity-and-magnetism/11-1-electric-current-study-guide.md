---
resourceId: "mb-ap-physcem-11.1-study-guide"
title: "Electric Current: Study Guide (Physics C: E&M 11.1)"
description: "Calculus-based guide to electric current: I = dq/dt, drift velocity and I = nqv_dA, current density as a vector, E = ρJ, integrating J over an area and conventional current."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.1"]
resourceType: "study-guide"
prerequisites:
  - "Electric field and the force on a charge, F = qE (Unit 8)"
  - "Electric potential difference and field inside a conductor (Units 9 and 10)"
  - "Differentiating and integrating simple functions, and the area element 2πr dr for a disc"
prerequisiteResources: ["mb-ap-physcem-10.4-study-guide"]
learningObjectives:
  - "Define current as the rate of charge flow through a cross-section and use I = dq/dt in both directions"
  - "Explain drift velocity and derive I = nqv_dA from a model of moving charge carriers"
  - "Explain why zero current does not mean the charge carriers are at rest"
  - "Use current density as a vector, J = nqv_d, and relate it to the field in a conductor with E = ρJ"
  - "Find the total current from a non-uniform current density by integrating J over the cross-section"
  - "Explain why current has a direction but is not a vector, and use conventional current correctly"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C. Copper: about 8.5 × 10²⁸ free electrons per m³ and resistivity 1.7 × 10⁻⁸ Ω·m. Keep unrounded values until the final step"
related: ["mb-ap-physcem-11.1-revision-notes", "mb-ap-physcem-11.1-practice", "mb-ap-physcem-11.1-checklist"]
next: "mb-ap-physcem-11.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Current is the rate at which charge crosses a cross-section: I = dq/dt, measured in amperes (1 A = 1 C/s)."
  - "Charge carriers move randomly at high speed; a potential difference adds a slow average drift, so I = nqv_dA."
  - "Zero current means zero net motion of carriers, not carriers at rest."
  - "Current density J = nqv_d is a vector; the field in a conductor is E = ρJ, and the total current is I = ∫J·dA."
  - "Current has a direction along the wire but is a scalar: currents at a junction add as numbers, not as vectors."
  - "Conventional current points the way positive charge would move; in metal wires the electrons move the opposite way."
faqs:
  - question: "If electrons drift so slowly, why does a lamp light as soon as I close the switch?"
    answer: "The wire is already full of free electrons. Closing the switch sets up an electric field all around the circuit almost at once, so electrons everywhere, including those inside the lamp, start drifting together. No electron has to travel from the switch to the lamp."
  - question: "Is current a vector because it has a direction?"
    answer: "No. The direction of a current is set by the wire it is in, not by a direction in space. Currents at a junction add as signed numbers. Current density J is the vector quantity."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.1, the first topic of Unit 11 (Electric Circuits). You will use derivatives and integrals here, for example to find a total current from a current density that changes across a wire.

Constants used throughout: **e = 1.60 × 10⁻¹⁹ C**. For copper, about **8.5 × 10²⁸** free electrons per cubic metre (one per atom) and resistivity **1.7 × 10⁻⁸ Ω·m** at room temperature.

## What current measures

Until now, charges have mostly been at rest (electrostatics). In a circuit, charge **moves**. Pick any cross-section of a wire, like a slice across it. The **current** I is the rate at which charge crosses that slice:

**I = dq/dt**

- The SI unit is the **ampere**: 1 A = 1 C/s.
- If the current is steady, I = Δq/Δt. If it changes, use the derivative.
- Going the other way, the charge that passes between t₁ and t₂ is **q = ∫ I dt**, the area under an I–t graph.

**Short example.** The charge that has passed a point in a wire is q(t) = 4.0t + 0.50t², with q in coulombs and t in seconds. Then I = dq/dt = 4.0 + 1.0t, so at t = 3.0 s the current is 7.0 A.

**Short example in reverse.** A current rises steadily from 0 to 2.0 A over 5.0 s. The I–t graph is a triangle, so the charge is ½ × 5.0 s × 2.0 A = 5.0 C. That is 5.0 ÷ (1.60 × 10⁻¹⁹) = 3.1 × 10¹⁹ electrons.

Charge moves in a circuit because something creates a **potential difference** across the conductor. A battery does this. The potential difference a source provides is often called its **electromotive force**, or **emf**, written ℰ. Despite the name, emf is a potential difference measured in volts, not a force.

## Drift velocity: how charge carriers really move

In a metal, the charge carriers are free electrons. Even with no current, they move very fast, about 10⁶ m/s, in random directions. They keep colliding with the vibrating ions of the metal and changing direction. Over any cross-section, as many cross one way as the other, so the **net** charge flow is zero.

This is an important point: **if the current in a section of wire is zero, the net motion of the carriers is zero, but each carrier still has a large speed.** Zero current is not the same as carriers at rest.

When a potential difference is applied, an electric field appears inside the conductor. It pushes each carrier a little in one direction between collisions. On top of the random motion, the carriers gain a small average velocity called the **drift velocity**, v_d. This drift is what makes the current.

## Deriving I = nqv_dA

Model a wire with cross-sectional area A. It contains n charge carriers per unit volume, each with charge q, all drifting at speed v_d.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="cur-wire-title cur-wire-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cur-wire-title">Charge carriers drifting through a section of wire</title>
<desc id="cur-wire-desc">A horizontal wire drawn as a long cylinder. A dashed oval across the wire marks a cross-section of area A. Just to its right, a hatched slice of the wire of length v_d times delta t is marked. Small circles with minus signs, the free electrons, are spread through the wire. An arrow above the wire labelled E points right. An arrow below labelled conventional current I points right. A short arrow labelled electron drift v_d points left.</desc>
<defs>
<marker id="cw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="cw-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1.2"/></pattern>
</defs>
<rect x="230" y="95" width="110" height="100" fill="url(#cw-hatch)" opacity="0.45"/>
<line x1="60" y1="95" x2="500" y2="95" stroke="#1d2b44" stroke-width="2"/>
<line x1="60" y1="195" x2="500" y2="195" stroke="#1d2b44" stroke-width="2"/>
<ellipse cx="60" cy="145" rx="16" ry="50" fill="none" stroke="#1d2b44" stroke-width="2"/>
<path d="M500 95 A16 50 0 0 1 500 195" fill="none" stroke="#1d2b44" stroke-width="2"/>
<ellipse cx="340" cy="145" rx="16" ry="50" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<ellipse cx="230" cy="145" rx="16" ry="50" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5">
<circle cx="100" cy="120" r="7"/><circle cx="140" cy="170" r="7"/><circle cx="185" cy="130" r="7"/>
<circle cx="250" cy="115" r="7"/><circle cx="280" cy="165" r="7"/><circle cx="315" cy="130" r="7"/>
<circle cx="390" cy="170" r="7"/><circle cx="430" cy="118" r="7"/><circle cx="470" cy="160" r="7"/>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="100" y="124">−</text><text x="140" y="174">−</text><text x="185" y="134">−</text>
<text x="250" y="119">−</text><text x="280" y="169">−</text><text x="315" y="134">−</text>
<text x="390" y="174">−</text><text x="430" y="122">−</text><text x="470" y="164">−</text>
</g>
<line x1="150" y1="55" x2="420" y2="55" stroke="#1d2b44" stroke-width="2" marker-end="url(#cw-arr)"/>
<text x="285" y="45" font-size="13" fill="#1d2b44" text-anchor="middle">E (field inside the wire)</text>
<line x1="150" y1="240" x2="420" y2="240" stroke="#1d2b44" stroke-width="3" marker-end="url(#cw-arr)"/>
<text x="285" y="262" font-size="13" fill="#1d2b44" text-anchor="middle">conventional current I</text>
<line x1="470" y1="215" x2="420" y2="215" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#cw-arr)"/>
<text x="500" y="230" font-size="12" fill="#1d2b44" text-anchor="middle">electron drift v_d</text>
<line x1="230" y1="205" x2="340" y2="205" stroke="#1d2b44" stroke-width="1"/>
<line x1="230" y1="200" x2="230" y2="210" stroke="#1d2b44"/><line x1="340" y1="200" x2="340" y2="210" stroke="#1d2b44"/>
<text x="285" y="222" font-size="12" fill="#1d2b44" text-anchor="middle">v_d Δt</text>
<text x="222" y="88" font-size="12" fill="#1d2b44" text-anchor="end">area A</text>
<text x="20" y="290" font-size="12" fill="#1d2b44">Hatched slice: every carrier in it crosses the dashed section in time Δt.</text>
</svg>
<figcaption>Figure 1. A wire with cross-sectional area A. The electrons drift to the left, so in time Δt every electron in the hatched slice of length v_d Δt (just upstream of the dashed cross-section, on its right) crosses it. For electrons (negative carriers), the drift is opposite to E and opposite to the conventional current.</figcaption>
</figure>

1. In a time Δt, each carrier moves a distance v_d Δt along the wire.
2. So every carrier within a slice of length v_d Δt just upstream of the cross-section (on the side the carriers come from) crosses it (the hatched slice in Figure 1).
3. The slice has volume A v_d Δt, so it holds n A v_d Δt carriers, with total charge Δq = nqA v_d Δt.
4. Divide by Δt: **I = Δq/Δt = nqv_dA**.

Here q is the charge of **one** carrier (for electrons, |q| = e = 1.60 × 10⁻¹⁹ C) and n is a **number density** in m⁻³. For magnitudes, use |q| and the drift speed.

**Functional dependence.** For a fixed current in a fixed material, v_d = I/(nqA). Halving the diameter quarters A, so the carriers must drift **4 times** faster to carry the same current.

## Current density J

Current tells you the total flow through a whole cross-section. **Current density** tells you how concentrated the flow is at a point. For a current spread evenly over an area A perpendicular to the flow:

**J = I / A**, measured in A/m².

From I = nqv_dA, the current density at a point is

**J = nq v_d** (a vector)

- J is a **vector**. It points the way positive charge flows.
- For electrons, q = −e, so J = −ne v_d. J points **opposite** to the electrons' drift velocity, in the direction of conventional current.

**The field inside a current-carrying conductor.** A potential difference across a conductor creates an electric field inside it. That field is proportional to the current density:

**E = ρJ**

Here ρ is the **resistivity** of the material, in Ω·m. (Careful: ρ also means volume charge density in Unit 8. Here it is resistivity.) Topic 11.3 develops resistivity fully. For now, notice two things:

- A good conductor (small ρ) needs only a small field to carry a large current density.
- In electrostatics, E = 0 inside a conductor. With a steady current, E is **not** zero: a small field keeps the carriers drifting against the "drag" of collisions.

## Non-uniform current density: I = ∫J·dA

If J is not the same everywhere across the wire, you cannot just multiply J by A. Split the cross-section into small pieces, find the current through each, and add them:

**I = ∫ J·dA**

For a round wire where J depends only on the distance r from the axis and points along the wire, use thin rings. A ring of radius r and width dr has area dA = 2πr dr, so

**I = ∫₀ᴿ J(r) 2πr dr**

<figure>
<svg viewBox="0 0 560 280" role="img" aria-labelledby="cur-ring-title cur-ring-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cur-ring-title">Splitting a wire's cross-section into thin rings</title>
<desc id="cur-ring-desc">Left: a circle of radius R, the end view of a wire. A thin hatched ring at radius r with width dr is marked, with its area labelled 2 pi r dr. Right: a graph of current density J against r from 0 to R. A curve starts at zero at r equals 0 and rises, getting steeper, to J zero at r equals R. A thin vertical strip under the curve at one value of r is hatched.</desc>
<defs>
<marker id="cr-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker>
<pattern id="cr-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.2"/></pattern>
</defs>
<circle cx="130" cy="135" r="100" fill="none" stroke="#1d2b44" stroke-width="2"/>
<circle cx="130" cy="135" r="65" fill="none" stroke="#1d2b44" stroke-width="12" opacity="0.35"/>
<circle cx="130" cy="135" r="71" fill="none" stroke="#1d2b44" stroke-width="1"/>
<circle cx="130" cy="135" r="59" fill="none" stroke="#1d2b44" stroke-width="1"/>
<circle cx="130" cy="135" r="3" fill="#1d2b44"/>
<line x1="130" y1="135" x2="189" y2="135" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#cr-arr)"/>
<text x="158" y="128" font-size="13" fill="#1d2b44" text-anchor="middle">r</text>
<line x1="130" y1="135" x2="200" y2="205" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<text x="210" y="222" font-size="13" fill="#1d2b44">R</text>
<text x="130" y="262" font-size="12" fill="#1d2b44" text-anchor="middle">ring of width dr: dA = 2πr dr</text>
<line x1="320" y1="230" x2="540" y2="230" stroke="#1d2b44" stroke-width="2" marker-end="url(#cr-arr)"/>
<line x1="320" y1="230" x2="320" y2="40" stroke="#1d2b44" stroke-width="2" marker-end="url(#cr-arr)"/>
<rect x="420" y="190" width="12" height="40" fill="url(#cr-hatch)"/>
<polyline points="320.0,230.0 340.0,228.4 360.0,223.6 380.0,215.6 400.0,204.4 420.0,190.0 440.0,172.4 460.0,151.6 480.0,127.6 500.0,100.4 520.0,70.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="520" y1="230" x2="520" y2="236" stroke="#1d2b44"/><text x="520" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">R</text>
<text x="320" y="250" font-size="12" fill="#1d2b44" text-anchor="middle">0</text>
<line x1="314" y1="70" x2="320" y2="70" stroke="#1d2b44"/><text x="310" y="74" font-size="12" fill="#1d2b44" text-anchor="end">J₀</text>
<text x="430" y="268" font-size="13" fill="#1d2b44" text-anchor="middle">distance from axis, r (m)</text>
<text x="300" y="32" font-size="13" fill="#1d2b44">current density, J (A/m²)</text>
<text x="380" y="140" font-size="12" fill="#1d2b44">J = J₀(r/R)²</text>
</svg>
<figcaption>Figure 2. Left: the end view of a wire, split into thin rings. Each ring carries dI = J(r) 2πr dr. Right: the current density for Worked example 2, J = J₀(r/R)², which is largest at the surface. The hatched strip stands for one ring.</figcaption>
</figure>

## Worked example 1: drift speed in a copper wire

**Question.** A copper wire with cross-sectional area 2.0 mm² carries a steady current of 3.0 A. Copper has 8.5 × 10²⁸ free electrons per m³ and resistivity 1.7 × 10⁻⁸ Ω·m. Find (a) the drift speed, (b) the time for an electron to drift 1.0 m, (c) the current density and the field in the wire, and (d) the drift speed if the same current flows in a copper wire of half the diameter.

1. Convert the area: 2.0 mm² = 2.0 × 10⁻⁶ m².
2. (a) v_d = I/(neA) = 3.0 ÷ (8.5 × 10²⁸ × 1.60 × 10⁻¹⁹ × 2.0 × 10⁻⁶) = **1.1 × 10⁻⁴ m/s**, about 0.1 mm per second.
3. (b) t = 1.0 m ÷ 1.10 × 10⁻⁴ m/s = 9.1 × 10³ s, about **2.5 hours**.
4. (c) J = I/A = 3.0 ÷ (2.0 × 10⁻⁶) = **1.5 × 10⁶ A/m²**, along the wire in the direction of the current. E = ρJ = (1.7 × 10⁻⁸ Ω·m)(1.5 × 10⁶ A/m²) = **0.026 V/m** (2.55 × 10⁻² V/m), in the same direction.
5. (d) Half the diameter gives a quarter of the area. The same I needs v_d four times larger: 4 × 1.10 × 10⁻⁴ = **4.4 × 10⁻⁴ m/s**.

**Interpretation.** The drift speed is about ten billion times smaller than the random speed of about 10⁶ m/s. Yet a lamp lights at once when you close a switch. The wire is already full of free electrons, and the field that makes them drift is set up around the whole circuit almost instantly. The electrons inside the lamp start moving straight away; they do not have to come from the switch.

**Check.** Units: A ÷ (m⁻³ × C × m²) = (C/s) ÷ (C/m) = m/s. The field is tiny because copper's resistivity is tiny.

## Worked example 2: a current density that varies across the wire

**Question.** In a wire of radius R = 1.0 mm, the current density is along the wire with magnitude J(r) = J₀(r/R)², where J₀ = 4.0 × 10⁶ A/m². (a) Find the total current. (b) What fraction of the current flows in the outer region, r > R/2? (c) Compare with the (wrong) answer J₀ × πR².

**(a) Total current.** Use rings of area 2πr dr:

I = ∫₀ᴿ J₀(r²/R²) 2πr dr = (2πJ₀/R²) ∫₀ᴿ r³ dr = (2πJ₀/R²)(R⁴/4) = **πJ₀R²/2**

With numbers: I = π(4.0 × 10⁶ A/m²)(1.0 × 10⁻³ m)² ÷ 2 = **6.3 A**.

**(b) Outer region.** The current inside radius r is (2πJ₀/R²)(r⁴/4) = πJ₀r⁴/(2R²). At r = R/2 this is (1/2)⁴ = 1/16 of the total. So **15/16 of the current**, about 94%, flows in the outer region, even though that region is only 3/4 of the area.

**(c) The shortcut.** J₀ × πR² = 12.6 A, twice the right answer. J₀ is the **largest** value of J, found only at the surface. The average current density is I/(πR²) = J₀/2 = 2.0 × 10⁶ A/m².

**Check.** Units: (A/m²) × m² = A. The answer lies between 0 and J₀πR², as it must. Half the current flows inside r = (1/2)^(1/4) R ≈ 0.84R, which matches the idea that the flow crowds towards the surface.

## The direction of current

Current has a **direction** along the wire, but it is **not a vector**.

- Its direction is defined relative to the conductor (along this wire, from this end to that end), not as a direction in space.
- So currents do **not** add like vectors and have no x- and y-components. If 2.0 A enters a junction from a wire running north–south and 3.0 A enters from a wire running east–west, the third wire carries 5.0 A out of the junction, whatever angle it makes. The vector-style answer, √(2.0² + 3.0²) = 3.6 A, is wrong.
- Current density **J** is the vector quantity, because it describes flow at a point in space.

**Conventional current** is defined as the direction in which **positive** charge would move: from higher to lower potential through a resistor or bulb, and out of the positive terminal of a battery. In ordinary circuits, the carriers are actually **electrons**, which drift the **opposite** way. Both descriptions give the same current: negative charge moving left transfers charge exactly like positive charge moving right. Circuit diagrams use conventional current unless a question says otherwise.

## Common misconceptions

- **"Electrons travel from the battery to the bulb at high speed."** Their drift speed is typically a fraction of a millimetre per second. The bulb lights quickly because the field is set up quickly and electrons are already everywhere in the wire.
- **"No current means the electrons are not moving."** They move fast and randomly; only their **net** motion is zero.
- **"Current is a vector because it has a direction."** Current is a scalar with a sign; J is the vector.
- **"Conventional current is the way the electrons go."** It is the opposite way in a metal.
- **Using I = JA when J varies.** Integrate: I = ∫J·dA, with dA = 2πr dr for a round wire.
- **Using diameter as radius, or mm² as m².** 1 mm² = 10⁻⁶ m². Area depends on radius squared, so these slips cause large errors.
- **"Current is used up in a bulb."** Charge is conserved. The same current leaves a bulb as enters it; energy, not charge, is transferred.
- **"The field inside a conductor is always zero."** That is only true in electrostatic equilibrium. With a current, E = ρJ is small but not zero.

## Where this leads

Next, [Topic 11.2, Simple Circuits](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-study-guide/), uses this picture of moving charge to describe closed, open and short circuits and how to draw schematics. Topic 11.3 turns E = ρJ into resistance and Ohm's law, and Topic 11.4 links current to power. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-checklist/).
