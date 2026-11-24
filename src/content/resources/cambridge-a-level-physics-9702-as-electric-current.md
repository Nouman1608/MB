---
title: "Cambridge A Level Physics (9702): Electric current"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electricity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 9.1
syllabusTopics:
  - qualification: "a-level"
    topic: "as-electricity"
    subtopic: "as-electric-current"
description: "A focused guide to 9.1 Electric current in Cambridge AS Physics 9702: charge carriers, quantised charge, Q = It, I–t graph areas and I = Anvq drift speed."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **9.1 Electric current** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (AS Level). The broader [Electricity study guide](/resources/as-physics-electricity/) introduces current alongside potential difference and resistance; this page goes deeper into current alone: what the charge carriers are in different materials, how to use the quantisation of charge, how to find charge from a changing current, and how to derive and apply I = Anvq. For quick recall use the [Electric current revision notes](/resources/cambridge-a-level-physics-9702-as-electric-current-revision-notes/), and for exam-style questions the [Electric current practice questions](/resources/cambridge-a-level-physics-9702-as-electric-current-practice/).

## What 9.1 asks you to do

Candidates should be able to:

- understand that an electric current is a **flow of charge carriers**
- understand that the charge on charge carriers is **quantised**
- recall and use **Q = It**
- use, for a current-carrying conductor, the expression **I = Anvq**, where n is the number density of charge carriers

## Current as a flow of charge carriers

An electric current is a flow of charged particles. The particles that move are called **charge carriers**, and they differ between materials:

| Material | Charge carriers |
|---|---|
| Metal | Free (delocalised) electrons, charge −e |
| Electrolyte (a solution or molten ionic compound) | Positive and negative ions moving in opposite directions |
| Ionised gas (for example in a discharge tube) | Electrons and positive ions |

**Conventional current** is defined as the direction in which positive charge would flow: from the positive terminal of a supply, round the circuit, to the negative terminal. In a metal the electrons actually drift the other way. Both descriptions give the same current, because negative charge moving left transfers charge in the same sense as positive charge moving right. In an electrolyte, positive ions moving one way and negative ions moving the other way **both** contribute to the current in the same direction, so their contributions add.

## Charge is quantised

Every charge carrier carries a whole-number multiple of the **elementary charge**, e = 1.60 × 10⁻¹⁹ C. An electron carries −e, a proton +e, and an ion such as Cu²⁺ carries +2e. The charge on any object is therefore:

```
Q = Ne     (N a whole number)
```

This gives a quick test of whether a reported charge is possible: divide by e and check that the result is a whole number. For example, 4.8 × 10⁻¹⁹ C is 3e (possible), but 5.6 × 10⁻¹⁹ C is 3.5e, which no object can carry.

In practice, the charges flowing in circuits involve so many carriers that charge appears continuous. A current of 1 A is about 6.25 × 10¹⁸ electrons passing a point every second.

## Q = It and the coulomb

**Current** is the rate of flow of charge. For a steady current:

```
Q = It
Q = charge (C),  I = current (A),  t = time (s)
```

The ampere is an SI base unit; the coulomb is derived from it. **One coulomb is the charge that passes a point when a current of one ampere flows for one second** (1 C = 1 A s).

To find the **number of charge carriers** passing a point, divide the charge by the charge on each carrier:

```
number of electrons = Q / e = It / e
```

**When the current changes**, Q = It no longer applies directly. Instead, the charge is the **area under a current–time graph**. For straight-line graphs this area is made of rectangles and triangles; for curves, count squares.

## Worked example 1: charge from an I–t graph

The current in a component rises steadily from 0 to 0.60 A in 4.0 s and then stays at 0.60 A for a further 6.0 s. Calculate the total charge that flows and the number of electrons this represents.

```
triangle (0 to 4.0 s):     ½ × 4.0 × 0.60 = 1.2 C
rectangle (4.0 to 10.0 s): 6.0 × 0.60    = 3.6 C
total charge Q = 4.8 C
number of electrons = 4.8 / 1.60 × 10⁻¹⁹ = 3.0 × 10¹⁹
```

*Annotation.* A common error is to multiply the final current by the total time (0.60 × 10.0 = 6.0 C), which ignores the period when the current was smaller. Always split the area into shapes that match the graph.

## Deriving I = Anvq

Consider a conductor of cross-sectional area A, containing n charge carriers per unit volume, each with charge q, drifting with mean speed v.

1. In time t, each carrier moves a distance vt along the conductor.
2. All the carriers in a length vt pass a given cross-section in that time. The volume of this length is A × vt.
3. The number of carriers in that volume is n × Avt, so the charge passing is Q = nAvtq.
4. Current I = Q/t, so:

```
I = Anvq
A = cross-sectional area (m²)
n = number density of charge carriers (m⁻³)
v = mean drift speed (m s⁻¹)
q = charge on each carrier (C)
```

The **drift speed** is the average speed of the carriers along the wire. It is superimposed on much faster random thermal motion in all directions, which on its own gives no net flow.

## Worked example 2: drift speed in copper

A copper wire of diameter 0.50 mm carries a current of 1.5 A. Copper has 8.5 × 10²⁸ free electrons per cubic metre. Calculate the drift speed.

```
A = π r² = π (0.25 × 10⁻³)² = 1.96 × 10⁻⁷ m²
v = I / (Anq) = 1.5 / (1.96 × 10⁻⁷ × 8.5 × 10²⁸ × 1.60 × 10⁻¹⁹)
v = 5.6 × 10⁻⁴ m s⁻¹  (about half a millimetre per second)
```

*Annotation.* Use the **radius**, not the diameter, in πr², and convert millimetres to metres before squaring. Squaring 0.25 mm and converting afterwards is the most common source of a factor-of-a-million error.

## Using I = Anvq for comparisons

Many questions ask for a comparison rather than a number. Rearrange to v = I/(Anq) and decide what stays the same.

- **Two wires in series** carry the same current (charge is conserved). If they are of the same metal, n and q are the same, so v ∝ 1/A. A wire of half the diameter has a quarter of the area, so the drift speed in it is **four times** larger.
- **A metal and a semiconductor** of the same size carrying the same current: the semiconductor has a far smaller n, so its carriers must drift much faster.
- **Increasing the current** in a given wire increases v in proportion.

**Why a lamp lights at once.** With drift speeds of fractions of a millimetre per second, an electron would take hours to travel from the switch to a lamp. The lamp lights almost instantly because the wire is already full of free electrons: closing the switch sets up an electric field throughout the circuit almost immediately, and electrons everywhere in the circuit begin drifting at the same time.

## Common mistakes

- **Saying current is "the flow of electrons".** In general it is the flow of charge carriers; in electrolytes these are ions.
- **Writing Q = It for a changing current.** Use the area under the I–t graph.
- **Using diameter instead of radius** when calculating A.
- **Confusing number density n with the number of carriers.** n is per cubic metre.
- **Claiming a thinner section of a series circuit carries less current.** The current is the same; the drift speed is greater.
- **Treating the drift speed as the speed of the electrons' random motion,** or as the speed at which the "signal" travels.

## Exam technique for the command words

- **State** or **define**: current is the rate of flow of charge; the coulomb is one ampere second. Use the words "rate of flow", not "amount of".
- **Explain** (what quantised means): charge exists only in whole-number multiples of e. If asked to show a value is possible, divide by e and comment on the result.
- **Calculate**: write the equation, convert to SI units (mA to A, minutes to seconds, mm² to m²), and give a unit.
- **Show that** or **derive** (I = Anvq): set out the steps above, defining every symbol, and finish with I = Q/t.
- **Suggest** or **compare**: identify which quantities in I = Anvq are fixed and state the proportionality you are using.

## More resources on this topic

- [Electricity study guide](/resources/as-physics-electricity/) — the whole of Topic 9
- [Electric current revision notes](/resources/cambridge-a-level-physics-9702-as-electric-current-revision-notes/)
- [Electric current practice questions](/resources/cambridge-a-level-physics-9702-as-electric-current-practice/)
- [Potential difference and power](/resources/cambridge-a-level-physics-9702-as-potential-difference-and-power/) — subtopic 9.2

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
