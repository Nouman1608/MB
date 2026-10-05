---
resourceId: "mb-ap-physcem-11.2-study-guide"
title: "Simple Circuits: Study Guide (Physics C: E&M 11.2)"
description: "Guide to simple circuits for the calculus-based course: closed, open and short circuits, electrical loops, schematic symbols, variable elements and reading a circuit from its diagram."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.2"]
resourceType: "study-guide"
prerequisites:
  - "Current as the rate of charge flow, and conventional current (Topic 11.1)"
  - "Potential difference and emf as what drives charge round a circuit (Topic 11.1 and Unit 9)"
  - "Capacitors as two separated conductors (Unit 10)"
prerequisiteResources: ["mb-ap-physcem-11.1-study-guide"]
learningObjectives:
  - "Explain what a closed electrical loop is and identify every loop in a circuit diagram"
  - "Classify a circuit or part of a circuit as closed, open or short, and predict which bulbs are lit"
  - "Recognise and draw the standard symbols for batteries, bulbs, switches, capacitors, resistors, inductors and meters, including variable elements"
  - "Translate a written description of a circuit into a schematic, and a schematic into a description"
  - "Show conventional current on a schematic and explain why the arrangement of elements matters"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Mostly qualitative. Where charge is calculated, e = 1.60 × 10⁻¹⁹ C"
related: ["mb-ap-physcem-11.2-revision-notes", "mb-ap-physcem-11.2-practice", "mb-ap-physcem-11.2-checklist"]
next: "mb-ap-physcem-11.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "A closed loop is a complete path that charge can travel round; a circuit is built from one or more loops."
  - "Closed circuit: charge can flow. Open circuit: there is a break, so it cannot. Short circuit: charge can flow along a path with no change in potential."
  - "One element can belong to several loops, so changing one element can affect several parts of a circuit."
  - "Schematics use standard symbols; a diagonal arrow through a symbol marks a variable element."
  - "Schematics show connections, not physical layout, and use conventional current unless told otherwise."
faqs:
  - question: "Does a schematic show where the components really are?"
    answer: "No. A schematic shows only what is connected to what. Two diagrams that look different are the same circuit if every element connects to the same points. The arrangement of connections, not the drawing, decides how the circuit behaves."
  - question: "Why does a short-circuited bulb go out?"
    answer: "The wire across it connects its two ends with no change in potential between them. With no potential difference across the bulb, there is nothing to drive charge through it, so the current takes the wire instead."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 11.2. This topic is mostly about **describing** circuits and reading diagrams. The numbers come later: resistance and Ohm's law in Topic 11.3, power in 11.4, series and parallel combinations and meters in 11.5, and Kirchhoff's rules in 11.6 and 11.7. A clear picture of loops and connections now makes all of those easier.

## What a circuit is

In Topic 11.1 you saw that charge moves when a potential difference sets up a field in a conductor. A **circuit** is an arrangement that lets this happen in a controlled way. It is built from **circuit elements** joined by wires. The elements you will meet in this course are:

- **wires** (treated as ideal: no change in potential along them),
- **batteries** (sources of emf),
- **resistors** and **light bulbs**,
- **capacitors** and **inductors**,
- **switches**,
- **ammeters** (measure current) and **voltmeters** (measure potential difference).

A **closed electrical loop** is a closed path through the circuit: start at any point, follow wires and elements, and come back to the start without passing through any point twice. Charge can only flow steadily round a path that closes on itself. A circuit is made of one or more such loops.

## Closed, open and short circuits

These three words describe whether charge **could** flow, and how.

- **Closed circuit.** There is a complete loop containing a source, so charge can flow. A torch with its switch on is a closed circuit.
- **Open circuit.** There is a break somewhere: an open switch, a loose connection or a broken filament. Charge cannot flow round that path, so the current in it is zero. (Remember from Topic 11.1: zero current does not mean the electrons stop moving; it means no **net** flow.)
- **Short circuit.** There is a path along which charge can flow with **no change in potential**: for example, a bare wire joining two points. Any element connected between those same two points has zero potential difference across it, so it carries no current.

A short circuit across a **bulb** turns the bulb off. A short circuit straight across a **battery** is dangerous: almost nothing limits the current, so the battery and wire can become very hot and the battery drains quickly.

Notice that "open" and "short" can describe **part** of a circuit. A circuit can be closed overall while one branch is open, or while one bulb is shorted.

## Circuit schematics and symbols

A **schematic** (circuit diagram) shows which elements are connected to which, using standard symbols. Figure 1 shows the ones you need.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="sym-title sym-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sym-title">Standard circuit symbols</title>
<desc id="sym-desc">A grid of nine circuit symbols, each drawn on a short horizontal wire with its name below. Row 1: battery, a long thin line beside a short thick line, with a plus sign by the long line; bulb, a circle containing a looped filament; open switch, a lever hinged at one contact and raised away from the other. Row 2: capacitor, two parallel lines of equal length; resistor, a zigzag; variable resistor, a zigzag with a diagonal arrow drawn through it. Row 3: ammeter, a circle with the letter A; voltmeter, a circle with the letter V; inductor, a row of four connected loops.</desc>
<defs><marker id="sym-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="25" y1="55" x2="89" y2="55"/><line x1="89" y1="37" x2="89" y2="73" stroke-width="2.5"/><line x1="101" y1="46" x2="101" y2="64" stroke-width="5"/><line x1="101" y1="55" x2="165" y2="55"/>
<line x1="210" y1="55" x2="266" y2="55"/><circle cx="280" cy="55" r="14"/><path d="M266 55 L271 55 C271 42 289 42 289 55 L294 55"/><line x1="294" y1="55" x2="350" y2="55"/>
<line x1="395" y1="55" x2="440" y2="55"/><circle cx="443" cy="55" r="3"/><line x1="446" y1="53" x2="484" y2="36"/><circle cx="487" cy="55" r="3"/><line x1="490" y1="55" x2="535" y2="55"/>
<line x1="25" y1="160" x2="89" y2="160"/><line x1="89" y1="142" x2="89" y2="178" stroke-width="2.5"/><line x1="101" y1="142" x2="101" y2="178" stroke-width="2.5"/><line x1="101" y1="160" x2="165" y2="160"/>
<line x1="210" y1="160" x2="250" y2="160"/><polyline points="250,160 255,150 265,170 275,150 285,170 295,150 305,170 310,160"/><line x1="310" y1="160" x2="350" y2="160"/>
<line x1="395" y1="160" x2="435" y2="160"/><polyline points="435,160 440,150 450,170 460,150 470,170 480,150 490,170 495,160"/><line x1="495" y1="160" x2="535" y2="160"/><line x1="440" y1="184" x2="492" y2="136" stroke-width="1.5" marker-end="url(#sym-arr)"/>
<line x1="25" y1="265" x2="81" y2="265"/><circle cx="95" cy="265" r="14"/><line x1="109" y1="265" x2="165" y2="265"/>
<line x1="210" y1="265" x2="266" y2="265"/><circle cx="280" cy="265" r="14"/><line x1="294" y1="265" x2="350" y2="265"/>
<line x1="395" y1="265" x2="433" y2="265"/><path d="M433 265 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0 a8 8 0 0 1 16 0"/><line x1="497" y1="265" x2="535" y2="265"/>
</g>
<g font-size="14" fill="#1d2b44" text-anchor="middle" font-weight="bold">
<text x="78" y="38">+</text><text x="95" y="270">A</text><text x="280" y="270">V</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="95" y="98">Battery (long line is +)</text><text x="280" y="98">Bulb</text><text x="465" y="98">Switch (open)</text>
<text x="95" y="203">Capacitor</text><text x="280" y="203">Resistor</text><text x="465" y="203">Variable resistor</text>
<text x="95" y="303">Ammeter</text><text x="280" y="303">Voltmeter</text><text x="465" y="303">Inductor</text>
</g>
</svg>
<figcaption>Figure 1. The standard symbols. For a battery, the longer line is the positive terminal. A diagonal arrow through any symbol, as on the variable resistor, means its value can be adjusted. Capacitor (equal lines) and battery (unequal lines) are easy to confuse.</figcaption>
</figure>

Points to remember about schematics:

- **Variable elements.** A diagonal arrow drawn through a symbol means the element can be adjusted, such as a variable resistor or a variable capacitor.
- **Conventional current.** Unless a question says otherwise, current on a schematic is conventional current: out of the positive terminal of a battery, round the external circuit, back into the negative terminal. Electrons drift the other way (Topic 11.1).
- **Connections, not layout.** A schematic records only what is joined to what. A dot marks a junction where wires connect. You can stretch or bend wires on the page without changing the circuit, as long as every connection stays the same.
- **Arrangement matters.** The same bulbs and battery behave differently when they are connected differently. Whether a bulb lights, and how brightly, depends on which loops it is in and what else is in those loops.

## Loops: one element, several loops

In a single-loop circuit, every element is in the same loop, and (because charge is conserved) the current is the same everywhere round it. Most circuits have **branches**, and then one element can belong to **several** loops. That is why opening one switch, or shorting one bulb, can change what happens in other parts of the circuit.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="loops-title loops-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="loops-title">A circuit with three closed loops</title>
<desc id="loops-desc">A battery on the left, positive terminal at the top. From the top of the battery a wire runs right through bulb A to a junction. From the junction one branch goes straight down through bulb B to a junction on the bottom wire. The top wire also continues right to a second branch, which goes down through bulb C and then an open switch S to the bottom wire. The bottom wire returns to the negative terminal of the battery. Loop 1 is labelled inside the left rectangle (battery, A, B). Loop 3 is labelled inside the right rectangle (B, C, S). An arrow labelled I on the top wire near the battery points right.</desc>
<defs><marker id="lp-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="80" y1="60" x2="80" y2="149"/><line x1="62" y1="149" x2="98" y2="149" stroke-width="2.5"/><line x1="71" y1="161" x2="89" y2="161" stroke-width="5"/><line x1="80" y1="161" x2="80" y2="250"/>
<line x1="80" y1="60" x2="186" y2="60"/><circle cx="200" cy="60" r="14"/><path d="M186 60 L191 60 C191 47 209 47 209 60 L214 60"/><line x1="214" y1="60" x2="460" y2="60"/>
<line x1="320" y1="60" x2="320" y2="146"/>
<g transform="rotate(90 320 160)"><circle cx="320" cy="160" r="14"/><path d="M306 160 L311 160 C311 147 329 147 329 160 L334 160"/></g>
<line x1="320" y1="174" x2="320" y2="250"/>
<line x1="460" y1="60" x2="460" y2="106"/>
<g transform="rotate(90 460 120)"><circle cx="460" cy="120" r="14"/><path d="M446 120 L451 120 C451 107 469 107 469 120 L474 120"/></g>
<line x1="460" y1="134" x2="460" y2="180"/>
<g transform="rotate(90 460 200)"><circle cx="443" cy="200" r="3"/><line x1="446" y1="198" x2="478" y2="184"/><circle cx="477" cy="200" r="3"/></g>
<line x1="460" y1="220" x2="460" y2="250"/>
<line x1="80" y1="250" x2="460" y2="250"/>
<line x1="110" y1="60" x2="150" y2="60" stroke-width="2" marker-end="url(#lp-arr)"/>
</g>
<circle cx="320" cy="60" r="4" fill="#1d2b44"/><circle cx="320" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="108" y="146" font-weight="bold">+</text>
<text x="40" y="160">ℰ</text>
<text x="130" y="50">I</text>
<text x="200" y="36">A</text>
<text x="344" y="165">B</text>
<text x="484" y="125">C</text>
<text x="490" y="205">S</text>
</g>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-style="italic">
<text x="200" y="160">loop 1</text>
<text x="390" y="160">loop 3</text>
</g>
<text x="270" y="285" font-size="12" fill="#1d2b44" text-anchor="middle">Loop 2 is the outer path: battery, A, C, S.</text>
</svg>
<figcaption>Figure 2. A battery, three bulbs and a switch (shown open). There are three closed loops: loop 1 (battery, A, B), loop 2 (battery, A, C, S; the outer edge) and loop 3 (B, C, S). Every element here belongs to two loops. The arrow shows conventional current leaving the positive terminal.</figcaption>
</figure>

To find loops systematically, start at one element and list each different way to travel round and return, without passing through any junction twice. In Figure 2 you get exactly the three loops in the caption.

## Worked example 1: switches and a short circuit

**Question.** Use the circuit in Figure 2. A bulb is lit when there is a current in it. Predict which bulbs are lit when (a) S is open, (b) S is closed, (c) S is closed and a wire is connected directly between the top and bottom junctions next to B, (d) the extra wire is moved so it connects the two terminals of the battery.

**(a) S open.** Loops 2 and 3 both pass through S, so both are open. Loop 1 (battery, A, B) is still closed. **A and B are lit; C is not.** There is no complete path through C.

**(b) S closed.** All three loops are closed. Current from the battery passes through A, then splits between B and the C branch. **A, B and C are all lit.**

**(c) Wire across B.** The new wire joins the top and bottom junctions with no change in potential along it: a **short circuit** across B. B's two ends are now at the same potential, so there is no potential difference to drive charge through B. The C branch is connected between the same two junctions, so it is shorted too. **A is lit; B and C go out.** The circuit is still closed, through A and the new wire. (In fact A becomes brighter. Topics 11.3 and 11.5 give you the tools to explain why.)

**(d) Wire across the battery.** Now the battery's terminals are joined directly. All the external elements have zero potential difference across them. **No bulb is lit.** The current in the short wire is very large, so this situation can overheat the battery and the wire. This is why short circuits across a supply are a hazard.

**Interpretation.** In each case, the question to ask is: "Is this element in a closed loop that contains the source, and is there a potential difference across it?" If either answer is no, it carries no current.

## Worked example 2: from a description to a schematic

**Question.** A student builds this circuit: "A battery, an ammeter, a switch S, a variable resistor and a lamp are connected one after another in a single loop. The ammeter is next to the positive terminal of the battery. A voltmeter is connected across the lamp, joined to the wires on each side of it." (a) Draw the schematic. (b) Identify every closed loop. (c) Show the direction of conventional current. (d) Describe what happens when S is opened.

**(a) Schematic.** Draw the symbols in order round one loop, then add the voltmeter as a separate branch joined at junction dots on each side of the lamp (Figure 3).

<figure>
<svg viewBox="0 0 580 290" role="img" aria-labelledby="desc2-title desc2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="desc2-title">Schematic for Worked example 2</title>
<desc id="desc2-desc">A battery on the left, positive terminal at the top. Along the top wire, from left to right: an ammeter (circle with A), an open switch S, and a variable resistor (zigzag with a diagonal arrow). The wire turns down the right side through a lamp, then runs back along the bottom to the negative terminal. Two junction dots on the right-hand wire, one above and one below the lamp, connect a parallel branch further right containing a voltmeter (circle with V). Arrowheads labelled I show conventional current rightward along the top, downward through the lamp and leftward along the bottom.</desc>
<defs><marker id="d2-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="60" x2="70" y2="144"/><line x1="52" y1="144" x2="88" y2="144" stroke-width="2.5"/><line x1="61" y1="156" x2="79" y2="156" stroke-width="5"/><line x1="70" y1="156" x2="70" y2="240"/>
<line x1="70" y1="60" x2="136" y2="60"/><circle cx="150" cy="60" r="14"/><line x1="164" y1="60" x2="225" y2="60"/>
<circle cx="228" cy="60" r="3"/><line x1="231" y1="58" x2="263" y2="43"/><circle cx="262" cy="60" r="3"/><line x1="265" y1="60" x2="320" y2="60"/>
<polyline points="320,60 325,50 335,70 345,50 355,70 365,50 375,70 380,60"/><line x1="325" y1="84" x2="377" y2="36" stroke-width="1.5" marker-end="url(#d2-arr)"/><line x1="380" y1="60" x2="420" y2="60"/>
<line x1="420" y1="60" x2="420" y2="136"/>
<g transform="rotate(90 420 150)"><circle cx="420" cy="150" r="14"/><path d="M406 150 L411 150 C411 137 429 137 429 150 L434 150"/></g>
<line x1="420" y1="164" x2="420" y2="240"/><line x1="420" y1="240" x2="70" y2="240"/>
<polyline points="420,100 520,100 520,136"/><circle cx="520" cy="150" r="14"/><polyline points="520,164 520,200 420,200"/>
<line x1="95" y1="60" x2="125" y2="60" marker-end="url(#d2-arr)"/>
<line x1="420" y1="205" x2="420" y2="230" marker-end="url(#d2-arr)"/>
<line x1="270" y1="240" x2="230" y2="240" marker-end="url(#d2-arr)"/>
</g>
<circle cx="420" cy="100" r="4" fill="#1d2b44"/><circle cx="420" cy="200" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="96" y="140" font-weight="bold">+</text>
<text x="150" y="65" font-weight="bold">A</text><text x="520" y="155" font-weight="bold">V</text>
<text x="105" y="50">I</text><text x="250" y="260">I</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="150" y="35">ammeter</text><text x="245" y="85">switch S</text><text x="350" y="100">variable resistor</text>
<text x="388" y="155">lamp</text><text x="545" y="125">voltmeter</text><text x="30" y="155">ℰ</text>
</g>
</svg>
<figcaption>Figure 3. Schematic for Worked example 2, with S shown open. The voltmeter sits in its own branch across the lamp. Arrowheads show the direction of conventional current when S is closed.</figcaption>
</figure>

**(b) Loops.** There are three closed loops:

1. battery → ammeter → S → variable resistor → lamp → battery;
2. battery → ammeter → S → variable resistor → voltmeter → battery;
3. lamp → voltmeter → lamp (the small loop on the right).

The lamp and the voltmeter are each in two loops, and so are the battery, ammeter, switch and variable resistor.

**(c) Conventional current.** It leaves the **positive** terminal (the long line), passes through the ammeter, S and the variable resistor, then down through the lamp, and returns along the bottom wire to the negative terminal. The free electrons in the wires drift the opposite way.

**(d) Opening S.** S is in loops 1 and 2, so both open. Loop 3 is still a complete path, but it contains no source of emf, so nothing drives a steady current round it. **The whole circuit carries no current, and the lamp goes out.** (Topic 11.5 explains why an ideal voltmeter takes almost no current even when S is closed.)

**Check.** There are two junctions (the dots) and three separate paths between them: through the lamp, through the voltmeter, and round through the battery, ammeter, S and variable resistor. Any two of these paths make a loop, and there are 3 ways to choose two from three, so there are three loops. This matches the list.

## Capacitors, inductors and meters in loops

- **Capacitor.** Its plates are separated by an insulator, so charge does not cross the gap. In a loop with a battery, charge flows round the loop only while the capacitor is charging or discharging; then the current stops. Topic 11.8 (RC circuits) describes how this happens over time.
- **Inductor.** It is a coil of wire, so it gives a continuous path. Its special behaviour, opposing **changes** in current, comes in Unit 13.
- **Meters.** An ammeter is placed so that the current to be measured passes through it; a voltmeter is connected across the element being measured. Topic 11.5 explains why, and what "ideal" meters are.

## Common misconceptions

- **"A bulb lights if it is touching the circuit."** It must be part of a closed loop that contains a source, with a potential difference across it.
- **"A short circuit is the same as an open circuit."** They are opposites. An open circuit has a break and no current. A short circuit offers an easy path with no potential change, often with a **large** current.
- **"A shorted bulb is broken."** It is undamaged. Remove the short and it lights again.
- **"Current is used up as it goes round the circuit."** In a single loop, the current is the same at every point. Energy is transferred to the elements; charge is not lost.
- **Confusing the battery and capacitor symbols.** Battery: unequal lines (long line +). Capacitor: equal lines.
- **"The diagram shows where things physically are."** It shows connections only. Redrawing a schematic tidily often makes loops easier to see.
- **Drawing current from the negative terminal.** On schematics, use conventional current from + to − through the external circuit.

## Where this leads

Next, Topic 11.3 introduces resistance, resistivity and Ohm's law, so you can calculate the currents you have been reasoning about here. Your loop-finding skill becomes Kirchhoff's loop rule in Topic 11.6. Go back to [Topic 11.1, Electric Current](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/) if drift and conventional current feel shaky. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-checklist/). The next study guide is [Topic 11.3, Resistance, Resistivity and Ohm's Law](/advanced-course-resources/physics-c-electricity-and-magnetism/11-3-resistance-resistivity-ohms-law-study-guide/).
