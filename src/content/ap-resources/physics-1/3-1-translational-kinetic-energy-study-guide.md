---
resourceId: "mb-ap-phys1-3.1-study-guide"
title: "Translational Kinetic Energy: Study Guide (Physics 1 3.1)"
description: "Kinetic energy of a moving object from K = ½mv²: why it is a scalar, how it scales with mass and speed, how to sketch and linearise its graphs, and why it depends on the observer's frame."
course: "physics-1"
unit: 3
topics: ["3.1"]
resourceType: "study-guide"
prerequisites:
  - "Speed, velocity and their signs in one dimension (Topic 1.2)"
  - "Describing motion from different reference frames (Topic 1.4)"
  - "Treating a system as a single object at its center of mass (Topic 2.1)"
prerequisiteResources: ["mb-ap-phys1-2.9-study-guide"]
learningObjectives:
  - "Calculate the translational kinetic energy of an object from its mass and speed, and find the speed from a given kinetic energy"
  - "Explain why kinetic energy is a scalar that is never negative and does not depend on the direction of motion"
  - "Predict how kinetic energy changes when mass or speed changes by a given factor"
  - "Sketch kinetic energy against speed and against speed squared, and use a straight-line graph to find a quantity from data"
  - "Explain why observers in different reference frames can measure different kinetic energies for the same object"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s² where gravity appears, as on the course equation table. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-3.1-revision-notes", "mb-ap-phys1-3.1-practice", "mb-ap-phys1-3.1-checklist"]
next: "mb-ap-phys1-3.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Translational kinetic energy is the energy an object has because its center of mass is moving: K = ½mv²."
  - "K is a scalar. It depends on speed, not direction, and it is never negative."
  - "K is proportional to v², so doubling the speed makes K four times bigger. Doubling the mass only doubles K."
  - "A change in kinetic energy is ½mv² − ½mv₀², not ½m(Δv)². Reversing direction at the same speed gives ΔK = 0."
  - "Kinetic energy depends on the reference frame. Pick one frame and use it for the whole problem."
faqs:
  - question: "What is the unit of kinetic energy?"
    answer: "The joule (J). From K = ½mv², the unit is kg × (m/s)² = kg·m²/s², and 1 J = 1 kg·m²/s². It is the same joule used for every form of energy and for work."
  - question: "Why is it called translational kinetic energy?"
    answer: "Translational means the center of mass moves from place to place. A spinning wheel can also have rotational kinetic energy, which you meet in Unit 5. In Unit 3 we only deal with the energy of center-of-mass motion."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Unit 3 swaps the force-and-acceleration view of Unit 2 for an energy view. The first idea you need is the energy of motion. No calculus is needed.

## Energy of motion

A moving object can change things. A rolling ball can knock over a skittle; a moving hammer can drive a nail. We say the moving object has **kinetic energy**. The faster and heavier it is, the more it can do.

In this course you model the moving thing as an **object**: a single point at its center of mass, as in Topic 2.1. The energy that comes from the motion of that center of mass is called **translational kinetic energy**:

**K = ½mv²**

- m is the mass in kilograms (kg).
- v is the **speed** of the center of mass in metres per second (m/s).
- K is in **joules** (J), where 1 J = 1 kg·m²/s².

For example, a 2.0 kg ball moving at 3.0 m/s has K = ½ × 2.0 kg × (3.0 m/s)² = **9.0 J**.

## Kinetic energy is a scalar

Velocity is a vector. Kinetic energy is not. It has a size but **no direction**.

The equation uses v², and squaring removes any sign. With +x to the right, a cart moving at v_x = +2.0 m/s and an identical cart at v_x = −2.0 m/s have exactly the same kinetic energy. Three things follow:

1. **K is never negative.** Mass is positive and v² is positive or zero.
2. **K is zero only when the object is at rest** in the frame you are using.
3. **Kinetic energies add as plain numbers.** For a system of several objects, the total translational kinetic energy is the sum of each object's K. You never cancel kinetic energies the way you cancel opposite velocities.

Point 3 matters. Two 1.5 kg carts roll towards each other, each at 2.0 m/s. Their velocities are +2.0 m/s and −2.0 m/s, so they "cancel" when you add them. Their kinetic energies do not: the system has 3.0 J + 3.0 J = **6.0 J** of kinetic energy.

## How K depends on mass and speed

K is **proportional to m** and **proportional to v²**. That lets you predict changes without numbers.

| Change | Effect on K | Reason |
|---|---|---|
| mass doubles, same speed | K × 2 | K ∝ m |
| speed doubles, same mass | K × 4 | K ∝ v², and 2² = 4 |
| speed triples | K × 9 | 3² = 9 |
| speed halves | K × ¼ | (½)² = ¼ |
| velocity reverses, same speed | no change | only v² appears |

To go backwards, from kinetic energy to speed, rearrange:

**v = √(2K / m)**

Halving K does **not** halve the speed. It divides the speed by √2, so the speed drops to about 71% of its old value.

## Representing kinetic energy on graphs

A graph of K against velocity is a **parabola** that opens upward, with its lowest point at v = 0. It is symmetric: the same speed in either direction gives the same K. A graph of K against **v²** is a **straight line through the origin**, with slope ½m.

<figure>
<svg viewBox="0 0 640 340" role="img" aria-labelledby="p1-k-title p1-k-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-k-title">Kinetic energy against velocity and against velocity squared for a 2.0 kg cart</title>
<desc id="p1-k-desc">Two graphs for a cart of mass 2.0 kilograms. Left: kinetic energy K in joules from 0 to 16 against velocity v_x in metres per second from −4 to +4. The curve is a U-shaped parabola with its lowest point at the origin and reaches 16 J at both −4 and +4 m/s. Two marked points at −2 and +2 m/s both have K = 4 J. Right: K in joules from 0 to 16 against v squared in metres squared per second squared from 0 to 16. The points lie on a straight line through the origin with slope 1.0 kilogram, which is half the mass.</desc>
<rect x="0" y="0" width="640" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M60 238 H300 M60 186 H300 M60 134 H300 M60 82 H300"/>
<path d="M380 238 H600 M380 186 H600 M380 134 H600 M380 82 H600"/>
</g>
<path d="M60 290 H305 M180 290 V60" stroke="#1d2b44" stroke-width="2" fill="none"/>
<path d="M380 290 H610 M380 290 V60" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="308">−4</text><text x="120" y="308">−2</text><text x="180" y="308">0</text><text x="240" y="308">2</text><text x="300" y="308">4</text>
<text x="180" y="330" font-size="13">velocity, v_x (m/s)</text>
<text x="380" y="308">0</text><text x="435" y="308">4</text><text x="490" y="308">8</text><text x="545" y="308">12</text><text x="600" y="308">16</text>
<text x="490" y="330" font-size="13">v² (m²/s²)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="172" y="242">4</text><text x="172" y="190">8</text><text x="172" y="138">12</text><text x="172" y="86">16</text>
<text x="372" y="294">0</text><text x="372" y="242">4</text><text x="372" y="190">8</text><text x="372" y="138">12</text><text x="372" y="86">16</text>
</g>
<text x="180" y="50" font-size="13" fill="#1d2b44" text-anchor="middle">K (J)</text>
<text x="380" y="50" font-size="13" fill="#1d2b44" text-anchor="middle">K (J)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,82.0 67.5,107.2 75.0,130.8 82.5,152.7 90.0,173.0 97.5,191.7 105.0,208.8 112.5,224.2 120.0,238.0 127.5,250.2 135.0,260.8 142.5,269.7 150.0,277.0 157.5,282.7 165.0,286.8 172.5,289.2 180.0,290.0 187.5,289.2 195.0,286.8 202.5,282.7 210.0,277.0 217.5,269.7 225.0,260.8 232.5,250.2 240.0,238.0 247.5,224.2 255.0,208.8 262.5,191.7 270.0,173.0 277.5,152.7 285.0,130.8 292.5,107.2 300.0,82.0"/>
<circle cx="120" cy="238" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="240" cy="238" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M120 238 H240" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<text x="180" y="226" font-size="11" fill="#1d2b44" text-anchor="middle">±2 m/s → 4 J</text>
<path d="M380 290 L600 82" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="393.75" cy="277" r="4" fill="#1d2b44"/><circle cx="435" cy="238" r="4" fill="#1d2b44"/><circle cx="503.75" cy="173" r="4" fill="#1d2b44"/><circle cx="600" cy="82" r="4" fill="#1d2b44"/>
<text x="470" y="130" font-size="12" fill="#1d2b44">slope = ½m = 1.0 kg</text>
<text x="70" y="70" font-size="12" fill="#1d2b44">parabola</text>
<text x="545" y="70" font-size="12" fill="#1d2b44">straight line</text>
</svg>
<figcaption>Figure 1. Kinetic energy of a 2.0 kg cart, K = ½ × 2.0 × v² = (1.0 kg)v². Left: K against velocity is a parabola; −2.0 m/s and +2.0 m/s both give 4.0 J. Right: K against v² is a straight line through the origin with slope ½m = 1.0 kg, so the slope gives the mass.</figcaption>
</figure>

When you sketch K against v, show three features: the lowest point at the origin, the symmetry about v = 0, and the steepening curve (each extra m/s adds more energy than the one before).

The straight-line version is the one to use with data. If you measure K and v for one object, plot K against v²: the slope is ½m. If you measure speeds for objects of different mass that all have the same K, plot v² against 1/m: the slope is 2K. Turning a curve into a straight line like this is called **linearising**.

## Kinetic energy depends on the observer

In Topic 1.4 you saw that velocity depends on the reference frame. Kinetic energy is built from speed, so **it depends on the frame too**. Two observers moving relative to each other can measure different kinetic energies for the same object, and both can be right.

A coffee cup on a café table has K = 0 for you, sitting at the table. For an observer in a passing bus, the cup is moving, so it has kinetic energy. Neither answer is "the true one". The rule is simple: **choose one frame and use it for every speed in the problem.** In this course that is usually the ground.

## Worked example 1: which vehicle has more kinetic energy?

**Question.** A delivery van of mass 2400 kg moves at 12 m/s. A motorbike and rider of total mass 300 kg move at 30 m/s. (a) Which has more kinetic energy, and by what factor? (b) How fast would the motorbike need to go to match the van's kinetic energy?

1. Van: K = ½ × 2400 kg × (12 m/s)² = ½ × 2400 × 144 = **172 800 J ≈ 1.7 × 10⁵ J**.
2. Motorbike: K = ½ × 300 kg × (30 m/s)² = ½ × 300 × 900 = **135 000 J ≈ 1.4 × 10⁵ J**.
3. Ratio: 172 800 ÷ 135 000 = **1.28**. The van has about 1.3 times as much kinetic energy.
4. Matching speed: v = √(2K / m) = √(2 × 172 800 J ÷ 300 kg) = √1152 m²/s² = **34 m/s**.

**Interpretation.** The van is 8 times heavier but only 0.4 times as fast. Because K depends on v², the motorbike's speed advantage counts for a lot: (0.4)² = 0.16, and 8 × 0.16 = 1.28. The motorbike needs only a small rise in speed, from 30 m/s to 34 m/s, to catch up.

**Check.** Units: kg × m²/s² = J. Both answers are positive, as every kinetic energy must be.

## Worked example 2: one jogger, three observers

**Question.** A ferry moves due east at a steady 6.0 m/s relative to the shore. A 70 kg passenger jogs along the deck at 3.0 m/s relative to the deck. Find the passenger's kinetic energy (a) relative to the deck, (b) relative to the shore when she jogs east towards the bow, and (c) relative to the shore when she jogs west towards the stern.

Take **+x as east** for every velocity.

1. **Deck frame.** Her speed is 3.0 m/s, so K = ½ × 70 × (3.0)² = **315 J ≈ 320 J**.
2. **Shore frame, jogging east.** Her velocity is +6.0 + 3.0 = +9.0 m/s, so K = ½ × 70 × (9.0)² = **2835 J ≈ 2.8 × 10³ J**.
3. **Shore frame, jogging west.** Her velocity is +6.0 + (−3.0) = +3.0 m/s, so K = ½ × 70 × (3.0)² = **315 J ≈ 320 J**.

| Observer | Passenger's speed (m/s) | K (J) |
|---|---|---|
| on the deck (either direction) | 3.0 | 315 |
| on the shore, she jogs east | 9.0 | 2835 |
| on the shore, she stands still | 6.0 | 1260 |
| on the shore, she jogs west | 3.0 | 315 |

**Interpretation.** The same person, at the same moment, has kinetic energies that differ by a factor of 9 depending on who is watching. That is not a contradiction. Kinetic energy is a frame-dependent quantity, like velocity. In her own frame her K is zero.

**Check.** Notice that 2835 J is not 1260 J + 315 J. You must find the speed in the chosen frame first, then square it. You cannot add kinetic energies from different frames.

## Worked example 3: changes in kinetic energy

**Question.** A 0.60 kg cart moves at +2.0 m/s (with +x to the right). Find the change in its kinetic energy if (a) it bounces off a spring and moves away at −2.0 m/s, and (b) instead it is pushed until it moves at +4.0 m/s. (c) In case (b), what speed would the cart have if its final kinetic energy were 4.8 J? Comment.

1. **(a)** K₀ = ½ × 0.60 × (2.0)² = 1.2 J. K = ½ × 0.60 × (−2.0)² = 1.2 J. So **ΔK = K − K₀ = 0**, even though Δv_x = −4.0 m/s.
2. **(b)** K = ½ × 0.60 × (4.0)² = 4.8 J. **ΔK = 4.8 − 1.2 = +3.6 J**.
3. **(c)** v = √(2 × 4.8 ÷ 0.60) = √16 = **4.0 m/s**, which is consistent with (b).

**Check.** A tempting shortcut is ΔK = ½m(Δv)² = ½ × 0.60 × (2.0)² = 1.2 J. That is wrong: it is a factor of 3 too small. Always find each kinetic energy first, then subtract. In (a), this shortcut would also give a non-zero answer, which cannot be right for a cart that has the same speed before and after.

## Limiting cases worth knowing

- **At rest.** v = 0 gives K = 0, the smallest value K can have.
- **Turning point.** A ball thrown straight up has K = 0 at the top of its path for an instant, because its speed is zero there.
- **Constant speed on a curve.** A car going round a bend at a steady 15 m/s keeps the same K, even though its velocity changes direction. Kinetic energy only tracks speed.
- **Very large speed.** Because of v², fast objects carry far more energy than slow ones of similar mass. This is why braking distance grows so quickly with speed (you will see why in Topic 3.2).

## Common misconceptions

- **"Kinetic energy has a direction."** No. K is a scalar. Moving left or right at the same speed gives the same K.
- **"A negative velocity gives a negative kinetic energy."** v is squared, so K is never negative.
- **"Doubling the speed doubles the kinetic energy."** It multiplies K by 4.
- **"ΔK = ½m(Δv)²."** Find K at the start and at the end, then subtract (Worked example 3).
- **"Two objects moving in opposite directions have zero total kinetic energy."** Kinetic energies add as positive numbers; only velocities cancel.
- **"An object has one true kinetic energy."** K depends on the frame of reference (Worked example 2).
- **Forgetting to square, or forgetting the ½.** Write K = ½mv² every time before substituting.
- **Using a velocity component instead of the speed.** In two dimensions, use the full speed v, not just v_x.

## Where this leads

Kinetic energy is the first energy store in Unit 3. In [Topic 3.2, Work](/advanced-course-resources/physics-1/3-2-work-study-guide/), you will see how forces change kinetic energy through the work-energy theorem. Topic 3.3 adds potential energy, and Topic 3.4 links them with conservation of energy. Try the [practice questions](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/3-1-translational-kinetic-energy-checklist/) to consolidate. You can also review [Topic 1.4, Reference Frames and Relative Motion](/advanced-course-resources/physics-1/1-4-reference-frames-relative-motion-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
