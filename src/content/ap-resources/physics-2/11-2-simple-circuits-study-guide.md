---
resourceId: "mb-ap-phys2-11.2-study-guide"
title: "Simple Circuits: Study Guide (Physics 2 11.2)"
description: "What makes a circuit work: closed, open and short circuits, loops that share elements, standard schematic symbols, meter placement and drawing schematics from a description."
course: "physics-2"
unit: 11
topics: ["11.2"]
resourceType: "study-guide"
prerequisites:
  - "Current as the rate of charge flow, and conventional current (Topic 11.1)"
  - "Electric potential and potential difference (Topic 10.5)"
prerequisiteResources: ["mb-ap-phys2-11.1-study-guide"]
learningObjectives:
  - "Name the common circuit elements and draw their standard schematic symbols, including variable elements"
  - "Decide whether a path is a closed circuit, an open circuit or a short circuit"
  - "Identify every closed loop in a circuit and the elements that belong to more than one loop"
  - "Translate between a written or physical description of a circuit and a schematic diagram"
  - "Predict which elements carry current when switches are opened or closed, or a short circuit is added"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Very little calculation in this topic. Use I = ΔQ/Δt with time in seconds where charge is asked for"
related: ["mb-ap-phys2-11.2-revision-notes", "mb-ap-phys2-11.2-practice", "mb-ap-phys2-11.2-checklist"]
next: "mb-ap-phys2-11.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A circuit is made of loops. Charge can flow only around a closed loop."
  - "Closed circuit: charge could flow. Open circuit: there is a break, so it cannot. Short circuit: charge can flow with no change in potential."
  - "One element can belong to several loops at the same time."
  - "Schematics show how elements are connected, not where they sit or how long the wires are."
  - "Ammeters go in the loop so the current passes through them; voltmeters connect across the element being measured."
faqs:
  - question: "Does the shape of a wire on a schematic matter?"
    answer: "No. In a schematic, wires are ideal: they have no change in potential along them. Only the connections matter. Two schematics with the same connections describe the same circuit, however the lines are drawn."
  - question: "Which way does current go in a schematic?"
    answer: "Unless a question says otherwise, schematics use conventional current: out of the positive terminal of the battery (the long line of the symbol), around the circuit, and back into the negative terminal."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What a circuit is

In Topic 11.1 you saw that charge moves when a source keeps a potential difference across a conductor. A **circuit** is the arrangement that lets this happen continuously. It is built from **circuit elements** joined by wires:

- **batteries** (sources of emf), which keep a potential difference,
- **resistors** and **lightbulbs**, where energy is transferred out of the circuit,
- **capacitors**, which store separated charge (Topic 10.6),
- **switches**, which open or close a path,
- **ammeters**, which measure current, and **voltmeters**, which measure potential difference,
- **wires**, which connect everything. In this course wires are ideal unless a question says otherwise: there is no change in potential along a wire.

A circuit is made of one or more **electrical loops**. A loop is a path that starts at a point, goes through elements and wires, and comes back to the same point.

## Closed, open and short circuits

Charge can flow continuously only around a **closed loop**: a complete path with no gap. Three words describe what is possible.

- **Closed circuit.** There is a complete loop that includes the source, so charges would be able to flow. A closed switch is part of a closed circuit.
- **Open circuit.** There is a break somewhere in the loop, for example an open switch, a loose connection or a broken filament. Charges cannot flow around it. Every element in that loop then has zero current, wherever the break is. The current does not "reach the gap and stop": with no complete loop, there is no flow anywhere in that loop.
- **Short circuit.** There is a path along which charges can flow **with no change in potential**, usually a plain wire connected across an element or across the source. The two ends of the shorted element are joined by an ideal wire, so they are at the same potential. With no potential difference across it, the shorted element carries no current. Charges take the wire path instead.

A wire connected straight across a battery is a dangerous short circuit. Almost nothing limits the current, so the battery and wire can become very hot. You will see why in Topic 11.3.

## Loops that share elements

A single element can be part of **more than one loop**. This is what makes circuits with branches different from a single chain of elements.

The points where three or more wires meet are called **junctions**. At a junction, the current can split between paths or combine. (Topic 11.7 shows how the currents at a junction are related.) Every loop that passes through a branch includes the elements in that branch.

When you count loops, include loops that do **not** contain the battery. A loop made of two bulbs in neighbouring branches is a real loop, even though it has no source in it.

## Schematic symbols

A **schematic diagram** is a simplified drawing of a circuit using standard symbols. It shows which elements are connected to which, and nothing else. Figure 1 shows the symbols used in this course.

<figure>
<svg viewBox="0 0 560 290" role="img" aria-labelledby="sym-title sym-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sym-title">Standard schematic symbols for circuit elements</title>
<desc id="sym-desc">Eight symbols, each drawn on a short horizontal wire with its name below. Top row, left to right: battery, drawn as a long thin line marked plus beside a short thick line marked minus; bulb, a circle with a curved filament inside; switch, shown open, a blade hinged at one contact and lifted away from the other; capacitor, two parallel lines of equal length with a gap. Bottom row: resistor, a zigzag line; variable resistor, a zigzag line with a diagonal arrow drawn through it; ammeter, a circle containing the letter A; voltmeter, a circle containing the letter V.</desc>
<defs><marker id="sym-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="30" y1="80" x2="72" y2="80"/><line x1="72" y1="58" x2="72" y2="102"/><line x1="88" y1="70" x2="88" y2="90" stroke-width="5"/><line x1="88" y1="80" x2="130" y2="80"/>
<line x1="160" y1="80" x2="194" y2="80"/><circle cx="210" cy="80" r="16"/><path d="M201 88 C201 66 219 66 219 88"/><line x1="226" y1="80" x2="260" y2="80"/>
<line x1="290" y1="80" x2="322" y2="80"/><circle cx="324" cy="80" r="2.5"/><circle cx="356" cy="80" r="2.5"/><line x1="324" y1="80" x2="352" y2="62"/><line x1="358" y1="80" x2="390" y2="80"/>
<line x1="420" y1="80" x2="464" y2="80"/><line x1="464" y1="60" x2="464" y2="100"/><line x1="476" y1="60" x2="476" y2="100"/><line x1="476" y1="80" x2="520" y2="80"/>
<polyline points="30,210 50,210 55,200 65,220 75,200 85,220 95,200 105,220 110,210 130,210"/>
<polyline points="160,210 180,210 185,200 195,220 205,200 215,220 225,200 235,220 240,210 260,210"/>
<line x1="186" y1="234" x2="236" y2="186" marker-end="url(#sym-arr)"/>
<line x1="290" y1="210" x2="324" y2="210"/><circle cx="340" cy="210" r="16"/><line x1="356" y1="210" x2="390" y2="210"/>
<line x1="420" y1="210" x2="454" y2="210"/><circle cx="470" cy="210" r="16"/><line x1="486" y1="210" x2="520" y2="210"/>
</g>
<g font-size="15" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="62" y="58">+</text><text x="98" y="64">−</text>
<text x="340" y="215">A</text><text x="470" y="215">V</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="128">Battery</text><text x="80" y="143">(long line = +)</text>
<text x="210" y="128">Bulb</text>
<text x="340" y="128">Switch (open)</text>
<text x="470" y="128">Capacitor</text>
<text x="80" y="258">Resistor</text>
<text x="210" y="258">Variable resistor</text>
<text x="340" y="258">Ammeter</text>
<text x="470" y="258">Voltmeter</text>
</g>
</svg>
<figcaption>Figure 1. Schematic symbols. The long line of the battery symbol is the positive terminal. A diagonal arrow drawn through any symbol marks a variable element, such as the variable resistor (a dimmer).</figcaption>
</figure>

Rules for reading and drawing schematics:

- **Variable elements** are shown by a diagonal arrow drawn through the normal symbol. A variable resistor is a resistor that can be adjusted, as in a dimmer switch.
- **Conventional current** is used unless a question says otherwise. It leaves the positive terminal (the long line), goes around the external circuit and returns to the negative terminal.
- **Wires are ideal.** A line on a schematic has the same potential all along it. Its length, shape and corners do not matter.
- **Junctions** are often marked with a dot where wires join. Two wires that cross without a dot are not connected.
- **An ammeter** measures the current **through** a point, so it is placed **in the loop**: you break the wire and connect the ammeter into the gap, so all the charge passing that point goes through it. An ideal ammeter does not change the current.
- **A voltmeter** measures the potential difference **between** two points, so it is connected **across** an element, from one end to the other, without breaking the loop. An ideal voltmeter draws no current.

### Arrangement changes behaviour

The properties of a circuit depend on how its elements are arranged, not just on which elements it contains. Take one battery and two identical bulbs:

- Wired one after the other in a single loop, the bulbs share one path. Unscrew either bulb and the loop opens, so both go out.
- Wired in separate branches, each bulb is in its own loop with the battery. Unscrew one and the other stays lit, because its loop is still closed.

Same parts, different behaviour. That is why a schematic must show the connections exactly.

## Worked example 1: loops and switches

**Question.** Figure 2 shows a battery, bulb A, and two branches between junctions J₁ and J₂. One branch contains bulb B. The other contains switch S and bulb C. (a) With S closed, list every closed loop and the elements in each. Which elements are in more than one loop? (b) S is now opened. Which bulbs carry current?

<figure>
<svg viewBox="0 0 540 350" role="img" aria-labelledby="loop-title loop-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="loop-title">Circuit with one bulb in the main line and two branches</title>
<desc id="loop-desc">A battery on the left side, long line marked plus at the top. From the positive terminal a wire goes up and right along the top through bulb A to junction J1. From J1 one branch goes straight down through bulb B to junction J2 at the bottom. A second branch continues right from J1, then down through switch S, drawn open, and bulb C, and back left along the bottom to J2. From J2 a wire runs left along the bottom and up to the negative terminal of the battery. An arrow on the top wire marks conventional current to the right.</desc>
<defs><marker id="loop-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="170"/><line x1="60" y1="170" x2="100" y2="170"/><line x1="70" y1="184" x2="90" y2="184" stroke-width="5"/><line x1="80" y1="184" x2="80" y2="300"/>
<line x1="80" y1="60" x2="174" y2="60"/><circle cx="190" cy="60" r="16"/><path d="M181 68 C181 46 199 46 199 68"/><line x1="206" y1="60" x2="440" y2="60"/>
<line x1="300" y1="60" x2="300" y2="164"/><circle cx="300" cy="180" r="16"/><path d="M291 188 C291 166 309 166 309 188"/><line x1="300" y1="196" x2="300" y2="300"/>
<line x1="440" y1="60" x2="440" y2="103"/><circle cx="440" cy="105" r="2.5"/><circle cx="440" cy="140" r="2.5"/><line x1="440" y1="140" x2="458" y2="110"/><line x1="440" y1="142" x2="440" y2="204"/>
<circle cx="440" cy="220" r="16"/><path d="M431 228 C431 206 449 206 449 228"/><line x1="440" y1="236" x2="440" y2="300"/>
<line x1="80" y1="300" x2="440" y2="300"/>
<line x1="230" y1="40" x2="275" y2="40" marker-end="url(#loop-arr)"/>
</g>
<circle cx="300" cy="60" r="4" fill="#1d2b44"/><circle cx="300" cy="300" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="108" y="166">+</text><text x="104" y="200">−</text><text x="40" y="182">ℰ</text>
<text x="190" y="32">A</text><text x="325" y="185">B</text><text x="468" y="225">C</text><text x="474" y="128">S</text>
<text x="252" y="32" font-size="13">I</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="312" y="50">J₁</text><text x="312" y="322">J₂</text>
</g>
</svg>
<figcaption>Figure 2. Bulb A is in the main line. Between junctions J₁ and J₂ there are two branches: bulb B alone, and switch S (drawn open) with bulb C. The arrow shows conventional current leaving the positive terminal.</figcaption>
</figure>

1. (a) Start at the battery and look for every way to return to the start.
   - Loop 1: battery → A → J₁ → B → J₂ → battery.
   - Loop 2: battery → A → J₁ → S → C → J₂ → battery.
   - Loop 3 (no battery): J₁ → B → J₂ → C → S → J₁.
2. Each element appears in exactly two loops. The battery and A are in loops 1 and 2. B is in loops 1 and 3. S and C are in loops 2 and 3.
3. (b) Opening S breaks loops 2 and 3. Only loop 1 is still closed. It contains the battery, so A and B carry current. C is in no closed loop, so it carries no current.

**Answer.** (a) Three loops, as listed. Every element is in two of them. (b) A and B carry current; C does not.

**Check.** Opening S did not turn off A, because A is also in loop 1. Only elements that are in **no** remaining closed loop with the battery lose their current.

## Worked example 2: adding a short circuit

**Question.** In Figure 2, S is closed and all three bulbs are lit. A student then connects a plain wire directly from J₁ to J₂. Which bulbs now carry current? Explain.

1. The new wire joins J₁ and J₂. An ideal wire has no change in potential along it, so J₁ and J₂ are now at the **same** potential.
2. Bulb B is connected between J₁ and J₂, so the potential difference across B is zero. The same is true of the branch containing S and C.
3. With no potential difference across them, B and C carry no current: they are **short-circuited**. Charges flow from J₁ to J₂ through the new wire instead.
4. Bulb A is still in a closed loop with the battery: battery → A → J₁ → wire → J₂ → battery. So A still carries current.

**Answer.** Only A carries current. B and C go out.

**Check.** It is tempting to say "B and C now share the current with the wire". They cannot: an element only carries current if there is a potential difference across it, and the wire has removed it. (In Topic 11.3 you will see that the current through A also increases, because the loop has less resistance.)

## Worked example 3: from a description to a schematic

**Question.** A desk lamp has a battery, an on/off switch, a dimmer (variable resistor) and a bulb, all in one loop. A student wants to measure the current in the bulb and the potential difference across it. (a) Draw the schematic, including the meters. (b) With the switch closed, the ammeter reads 0.25 A. How much charge passes through the dimmer in 1.0 minute?

1. (a) One loop: draw a rectangle of wire and put the battery, switch, variable resistor and bulb on it, in any order. The order does not matter in a single loop.
2. The ammeter must carry the bulb's current, so put it **in the loop**. In a single loop, any position works.
3. The voltmeter must measure the potential difference across the bulb, so connect it **across the bulb**, with one lead on each side.
4. (b) In a single loop there is only one path, so the same current passes through every element (charge is conserved, as in Topic 11.1). ΔQ = IΔt = (0.25 A)(60 s) = 15 C.

<figure>
<svg viewBox="0 0 540 340" role="img" aria-labelledby="lamp-title lamp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lamp-title">Schematic of a dimmable lamp with meters</title>
<desc id="lamp-desc">A single rectangular loop. The battery is on the left side, positive terminal at the top. Along the top wire, from left to right, are a closed switch and a variable resistor drawn as a zigzag with a diagonal arrow. On the right side is an ammeter, a circle with the letter A, in the loop. On the bottom wire is a bulb. Below the bulb a voltmeter, a circle with the letter V, is connected by two wires to points on either side of the bulb, marked with dots.</desc>
<defs><marker id="lamp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="142"/><line x1="60" y1="142" x2="100" y2="142"/><line x1="70" y1="156" x2="90" y2="156" stroke-width="5"/><line x1="80" y1="156" x2="80" y2="240"/>
<line x1="80" y1="60" x2="150" y2="60"/><circle cx="152" cy="60" r="2.5"/><circle cx="186" cy="60" r="2.5"/><line x1="152" y1="60" x2="186" y2="58"/><line x1="188" y1="60" x2="250" y2="60"/>
<polyline points="250,60 255,50 265,70 275,50 285,70 295,50 305,70 310,60"/><line x1="258" y1="84" x2="304" y2="38" marker-end="url(#lamp-arr)"/>
<line x1="310" y1="60" x2="440" y2="60"/><line x1="440" y1="60" x2="440" y2="134"/><circle cx="440" cy="150" r="16"/><line x1="440" y1="166" x2="440" y2="240"/>
<line x1="440" y1="240" x2="276" y2="240"/><circle cx="260" cy="240" r="16"/><path d="M251 248 C251 226 269 226 269 248"/><line x1="244" y1="240" x2="80" y2="240"/>
<line x1="220" y1="240" x2="220" y2="300"/><line x1="220" y1="300" x2="244" y2="300"/><circle cx="260" cy="300" r="16"/><line x1="276" y1="300" x2="300" y2="300"/><line x1="300" y1="300" x2="300" y2="240"/>
</g>
<circle cx="220" cy="240" r="4" fill="#1d2b44"/><circle cx="300" cy="240" r="4" fill="#1d2b44"/>
<g font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">
<text x="108" y="140">+</text><text x="104" y="172">−</text>
<text x="440" y="155">A</text><text x="260" y="305">V</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="169" y="44">switch (closed)</text><text x="280" y="102">dimmer</text><text x="260" y="214">bulb</text>
<text x="478" y="154">ammeter</text><text x="345" y="305" text-anchor="start">voltmeter</text>
</g>
</svg>
<figcaption>Figure 3. One possible schematic for the lamp. The ammeter is in the loop, so the bulb's current passes through it. The voltmeter is connected across the bulb, between the two dotted junctions, and does not break the loop.</figcaption>
</figure>

**Answer.** (a) Figure 3 (any order of elements in the loop is correct). (b) 15 C.

**Check.** A common error is to put the ammeter across the bulb, side by side with it. An ideal ammeter acts like a plain wire, so that would short-circuit the bulb. Another is to put the voltmeter in the loop. An ideal voltmeter lets no charge through, so that would make an open circuit.

## Common misconceptions

- **"Current gets as far as the gap in an open circuit and stops there."** With a break anywhere in a loop, there is no current anywhere in that loop.
- **"A short circuit means a very short wire."** It means a path with no change in potential across the element it bypasses. The wire can be any length.
- **"A shorted bulb still gets some of the current."** With zero potential difference across it, it carries none.
- **"The bulb nearest the positive terminal lights first or gets the current first."** In a single loop, the current is the same everywhere and starts everywhere at almost the same time.
- **"Loops must contain the battery."** A loop through two branches with no source is still a loop. It matters later for Kirchhoff's loop rule (Topic 11.6).
- **"The drawing shows where the parts are on the bench."** A schematic shows connections only. Long wires, bends and positions make no difference.
- **"Ammeters and voltmeters are connected the same way."** Ammeter: in the loop, current through it. Voltmeter: across the element, potential difference between its ends.

## Where this leads

Next, Topic 11.3 links the current in an element to the potential difference across it through resistance, so you can calculate the currents in the circuits you can now draw. Continue with [Topic 11.3, Resistance, Resistivity and Ohm's Law](/advanced-course-resources/physics-2/11-3-resistance-resistivity-ohms-law-study-guide/). First test yourself with the [practice questions](/advanced-course-resources/physics-2/11-2-simple-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-2/11-2-simple-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/11-2-simple-circuits-checklist/) to consolidate.
