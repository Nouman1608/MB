---
resourceId: "mb-ap-physcem-11.2-practice"
title: "Simple Circuits: Practice Questions (Physics C: E&M 11.2)"
description: "Seven original Marlbridge practice questions on simple circuits: symbols, closed, open and short circuits, counting loops, switches and drawing schematics, with full solutions."
course: "physics-c-electricity-and-magnetism"
unit: 11
topics: ["11.2"]
resourceType: "practice-questions"
prerequisites:
  - "The meaning of closed, open and short circuits, and the standard symbols"
prerequisiteResources: ["mb-ap-physcem-11.2-study-guide"]
learningObjectives:
  - "Identify circuit symbols, including variable elements"
  - "Classify circuits and branches as closed, open or short, and predict which bulbs are lit"
  - "Count closed loops and say which elements belong to each"
  - "Draw a schematic from a description and show conventional current"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C (Question 7 only). Give numerical answers to 2 or 3 significant figures"
related: ["mb-ap-physcem-11.2-study-guide", "mb-ap-physcem-11.2-revision-notes", "mb-ap-physcem-11.2-checklist"]
next: "mb-ap-physcem-11.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written answers or a drawn schematic."
  - "Most questions are qualitative: justify each claim with loops and potential differences."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based course. In every question, connecting wires are ideal (no change in potential along them), a bulb is lit when there is a current in it, and current means conventional current. Data for Question 7: e = 1.60 × 10⁻¹⁹ C.

## Question 1 (multiple choice · foundation)

On a schematic, an element is drawn as two parallel lines of **equal** length, perpendicular to the wire, with a small gap between them. Which element is it?

- (A) A battery
- (B) A capacitor
- (C) A switch
- (D) An inductor

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Two equal parallel lines represent the two plates of a capacitor, separated by a gap.

- (A) A battery also uses two parallel lines, but they are **unequal**: the long line is the positive terminal.
- (C) A switch is drawn as a lever hinged at one contact, either touching or lifted from the other contact.
- (D) An inductor is drawn as a coil, a row of connected loops.
</details>

## Question 2 (multiple choice · core)

A battery, bulb X and bulb Y are connected in a single loop, and both bulbs are lit. A wire is then connected directly between the two terminals of bulb Y. Which statement is correct?

- (A) X stays lit; Y goes out.
- (B) Both bulbs go out.
- (C) Both bulbs stay lit, but Y is dimmer.
- (D) X goes out; Y stays lit.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The wire is a short circuit across Y: it joins Y's two ends with no change in potential, so there is no potential difference across Y and no current in it. The loop through the battery, X and the new wire is still closed, so X stays lit.

- (B) treats the short as a break. A short is the opposite of an open circuit: the loop is still complete.
- (C) assumes some current still passes through Y. With zero potential difference across Y, none does.
- (D) has the roles reversed: X is still in a closed loop with the battery; Y is the shorted element.
</details>

## Question 3 (multiple choice · core)

A battery and three identical bulbs are each connected directly between the same two junctions, so there are four separate paths between the junctions. How many different closed loops does the circuit contain?

- (A) 3
- (B) 4
- (C) 6
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Any two of the four paths make a closed loop (out along one, back along the other). There are 6 ways to choose two paths from four: battery with each bulb (3 loops) and each pair of bulbs (3 more loops).

- (A) counts only the loops that contain the battery. Pairs of bulbs also form closed paths.
- (B) counts paths, not loops.
- (D) counts each loop twice, once in each direction. A loop is the same loop whichever way you go round it.
</details>

## Question 4 (constructed response · core)

The circuit in Figure 1 has a battery, switches S1 and S2, and identical bulbs P, Q and R.

<figure>
<svg viewBox="0 0 520 290" role="img" aria-labelledby="pq4-title pq4-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pq4-title">Circuit for Question 4</title>
<desc id="pq4-desc">A battery on the left, positive terminal at the top. The top wire runs right through switch S1 to a junction. From that junction one branch goes straight down through bulb P and then bulb Q to a junction on the bottom wire. The top wire also continues right to a second branch, which goes down through bulb R and then switch S2 to the bottom wire. The bottom wire returns to the negative terminal. Both switches are drawn open.</desc>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<line x1="70" y1="60" x2="70" y2="144"/><line x1="52" y1="144" x2="88" y2="144" stroke-width="2.5"/><line x1="61" y1="156" x2="79" y2="156" stroke-width="5"/><line x1="70" y1="156" x2="70" y2="250"/>
<line x1="70" y1="60" x2="130" y2="60"/><circle cx="133" cy="60" r="3"/><line x1="136" y1="58" x2="168" y2="43"/><circle cx="167" cy="60" r="3"/><line x1="170" y1="60" x2="420" y2="60"/>
<line x1="260" y1="60" x2="260" y2="106"/>
<g transform="rotate(90 260 120)"><circle cx="260" cy="120" r="14"/><path d="M246 120 L251 120 C251 107 269 107 269 120 L274 120"/></g>
<line x1="260" y1="134" x2="260" y2="176"/>
<g transform="rotate(90 260 190)"><circle cx="260" cy="190" r="14"/><path d="M246 190 L251 190 C251 177 269 177 269 190 L274 190"/></g>
<line x1="260" y1="204" x2="260" y2="250"/>
<line x1="420" y1="60" x2="420" y2="106"/>
<g transform="rotate(90 420 120)"><circle cx="420" cy="120" r="14"/><path d="M406 120 L411 120 C411 107 429 107 429 120 L434 120"/></g>
<line x1="420" y1="134" x2="420" y2="175"/>
<g transform="rotate(90 420 195)"><circle cx="403" cy="195" r="3"/><line x1="406" y1="193" x2="438" y2="179"/><circle cx="437" cy="195" r="3"/></g>
<line x1="420" y1="215" x2="420" y2="250"/>
<line x1="70" y1="250" x2="420" y2="250"/>
</g>
<circle cx="260" cy="60" r="4" fill="#1d2b44"/><circle cx="260" cy="250" r="4" fill="#1d2b44"/>
<g font-size="14" fill="#1d2b44" text-anchor="middle">
<text x="96" y="140" font-weight="bold">+</text><text x="150" y="36">S1</text>
<text x="284" y="125">P</text><text x="284" y="195">Q</text>
<text x="444" y="125">R</text><text x="452" y="200">S2</text>
</g>
</svg>
<figcaption>Figure 1. Circuit for Question 4, with both switches drawn open.</figcaption>
</figure>

(a) Copy and complete the table to show which bulbs are lit for each combination of switch positions.

| S1 | S2 | Bulbs lit |
|---|---|---|
| open | open | ? |
| open | closed | ? |
| closed | open | ? |
| closed | closed | ? |

(b) List the closed loops in the circuit (with both switches closed) and name the elements in each.
(c) With both switches closed, a wire is connected directly across bulb Q. Which bulbs are lit now? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

| S1 | S2 | Bulbs lit |
|---|---|---|
| open | open | none |
| open | closed | none |
| closed | open | P and Q |
| closed | closed | P, Q and R |

S1 is in every loop that contains the battery, so when S1 is open nothing is lit. With S1 closed, the P–Q branch is always a closed path back to the battery; R is lit only when S2 also completes its branch.

**(b)** Three loops: battery → S1 → P → Q → battery; battery → S1 → R → S2 → battery; and P → Q → S2 → R (the right-hand rectangle, with no battery in it).

**(c)** The wire joins Q's two ends with no change in potential, so **Q goes out**. P now connects the top junction directly to the bottom wire through the new wire, so it still has a potential difference across it and stays lit. R's branch is unchanged. **P and R are lit.**

| Point | What earns it |
|---|---|
| 1 | Both S1-open rows: no bulbs lit, with the reason that S1 is in every loop containing the battery |
| 1 | S1 closed, S2 open: P and Q lit, R not |
| 1 | Both closed: all three lit |
| 1 | All three loops listed with their elements |
| 1 | Q goes out, with the zero-potential-difference reason |
| 1 | P and R stay lit |
</details>

## Question 5 (constructed response · core)

A student writes this description: "A battery, an ammeter, a switch, a resistor and an inductor are connected one after another in a single loop. A capacitor is connected across the inductor, joined to the wires on each side of it."

(a) Draw the schematic, using standard symbols.
(b) Mark the direction of conventional current in the ammeter when the switch is closed.
(c) How many closed loops are there? List the elements in each.
(d) The resistor is replaced by one whose resistance can be adjusted. How should the schematic change?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** One rectangle containing, in order, the battery (unequal lines), the ammeter (circle with A), the switch, the resistor (zigzag) and the inductor (coil). Two junction dots, one on each side of the inductor, with a parallel branch containing the capacitor (equal lines).

**(b)** Out of the positive (long-line) terminal and through the ammeter away from the battery. Any order that matches the student's arrangement is fine, as long as the arrow starts at the + terminal.

**(c)** Three loops: battery → ammeter → switch → resistor → inductor → battery; battery → ammeter → switch → resistor → capacitor → battery; and inductor → capacitor → inductor. The inductor and the capacitor are each in two loops.

**(d)** Draw a diagonal arrow through the resistor symbol to show a variable resistor.

| Point | What earns it |
|---|---|
| 1 | Correct symbols for battery, ammeter, switch, resistor, inductor and capacitor |
| 1 | Capacitor drawn in a separate branch across the inductor, with junctions |
| 1 | Conventional current leaving the + terminal |
| 1 | Three loops, each listed with its elements |
| 1 | Diagonal arrow through the resistor symbol |

Do not award the first point if the capacitor is drawn with unequal lines (that is a battery).
</details>

## Question 6 (constructed response · core)

For each situation, state whether the circuit (or the named part) is **closed**, **open** or **short**, and say which bulbs, if any, are lit. Explain each answer in one sentence.

(i) A battery, a closed switch and a bulb in a single loop.
(ii) The same circuit, but the bulb's filament has broken.
(iii) A battery and a bulb in a single loop, with a bare wire also connected directly from the battery's positive terminal to its negative terminal.
(iv) A battery with bulbs X and Y on two separate branches between the same pair of junctions. X's branch contains an open switch.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

1. (i) **Closed.** The bulb is in a complete loop with the battery, so it is **lit**.
2. (ii) **Open.** The broken filament is a gap in the only loop, so there is no current and **no bulb is lit**.
3. (iii) **Short circuit across the battery.** The bare wire joins the terminals with no change in potential, so the bulb has no potential difference across it and is **not lit**. The current in the wire is very large, which can overheat the battery and wire.
4. (iv) The circuit as a whole is **closed** through Y, so **Y is lit**. X's branch is **open**, so **X is not lit**.

Suggested mark points (4): 1 for each situation with the correct label, bulb prediction and a valid reason. In (iii), the label "short" must come with the zero-potential-difference reason; in (iv), credit only if both the closed overall circuit and the open branch are identified.
</details>

## Question 7 (constructed response · stretch)

A battery, a bulb and an ammeter are connected in a single loop. The ammeter reads 0.25 A, steady.

(a) Calculate the charge that passes through the bulb in 2.0 minutes, and the number of electrons this represents.
(b) A student says: "The ammeter reads 0.25 A before the bulb, so it must read less after the bulb, because the bulb uses some of the current." Explain what is wrong with this claim.
(c) On a schematic, the current arrow points clockwise. State the direction in which the free electrons drift in the wires, and explain.
(d) The electrons' drift speed is only about 10⁻⁴ m/s, and the wires are about 1 m long in total. Explain why the bulb lights as soon as the circuit is closed.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** t = 2.0 min = 120 s. q = It = 0.25 A × 120 s = **30 C**. N = q/e = 30 ÷ (1.60 × 10⁻¹⁹) = **1.9 × 10²⁰ electrons**.

**(b)** Charge is conserved and does not build up anywhere in a steady circuit. In a single loop, the same charge per second must pass every point, so the ammeter reads **0.25 A on either side of the bulb**. The bulb transfers **energy** from the moving charge (as light and heat), not charge itself.

**(c)** **Anticlockwise.** Conventional current is the direction positive charge would move. The carriers in metal wires are electrons, which are negative, so they drift in the opposite direction.

**(d)** The wires and the bulb filament are already full of free electrons. When the circuit is closed, an electric field is set up around the whole loop almost at once, so electrons everywhere, including those in the filament, start drifting together. No electron has to travel from the battery to the bulb.

| Point | What earns it |
|---|---|
| 1 | Converts 2.0 min to 120 s and gets q = 30 C |
| 1 | 1.9 × 10²⁰ electrons |
| 1 | Uses charge conservation: the same current at every point of one loop |
| 1 | States that the bulb transfers energy, not charge |
| 1 | Electrons drift anticlockwise, opposite to conventional current, because they are negative |
| 1 | Field set up around the circuit quickly; electrons already present throughout the wire start drifting together |

Common error in (a): using t = 2.0 s gives 0.50 C.
</details>

## How did you do?

- **Q1 or Q5 wrong:** revisit "Circuit schematics and symbols" and Figure 1 in the [study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-study-guide/).
- **Q2 or Q6 wrong:** revisit "Closed, open and short circuits" and Worked example 1.
- **Q3 or Q4 wrong:** revisit "Loops: one element, several loops" and Figure 2.
- **Q7 incomplete:** go back to [Topic 11.1, Electric Current](/advanced-course-resources/physics-c-electricity-and-magnetism/11-1-electric-current-study-guide/) for drift and conventional current.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/11-2-simple-circuits-checklist/).
