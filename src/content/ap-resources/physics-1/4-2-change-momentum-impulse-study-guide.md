---
resourceId: "mb-ap-phys1-4.2-study-guide"
title: "Change in Momentum and Impulse: Study Guide (Physics 1 4.2)"
description: "Link force and time to change in momentum: impulse as average force times time, the impulse–momentum theorem, areas under force–time graphs, slopes of momentum–time graphs and Newton's second law."
course: "physics-1"
unit: 4
topics: ["4.2"]
resourceType: "study-guide"
prerequisites:
  - "Momentum p = mv as a signed vector quantity (Topic 4.1)"
  - "Newton's second law, F_net = ma (Topic 2.5)"
  - "Slopes and areas on velocity–time graphs (Topics 1.2 and 1.3)"
prerequisiteResources: ["mb-ap-phys1-4.1-study-guide"]
learningObjectives:
  - "Calculate the change in momentum of an object or system, with signs, including when it reverses direction"
  - "Calculate impulse as average force times time, and find it from the area under a force–time graph"
  - "Use the impulse–momentum theorem to connect force, time and change in momentum, and find a net force from the slope of a momentum–time graph"
  - "Predict how the average force changes when the stopping time or the change in momentum changes"
  - "Show that Newton's second law follows from the impulse–momentum theorem when mass is constant"
  - "Plan a lab procedure that tests the impulse–momentum theorem and analyse its data with a straight-line graph"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Areas under force–time graphs use rectangles and triangles. g = 9.8 m/s². Answers to 2 significant figures unless the data justify more"
related: ["mb-ap-phys1-4.2-revision-notes", "mb-ap-phys1-4.2-practice", "mb-ap-phys1-4.2-checklist"]
next: "mb-ap-phys1-4.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Change in momentum is final minus initial: Δp = p − p₀. Use signed values."
  - "Impulse is average force times time interval: J = F_avg Δt. It points the same way as the net force. Units: N·s, which equal kg·m/s."
  - "Impulse–momentum theorem: the impulse from the net external force equals the change in momentum, J = Δp."
  - "Area under a net force–time graph = impulse. Slope of a momentum–time graph = net external force."
  - "For the same change in momentum, a longer interaction time means a smaller average force. That is how crumple zones and soft landings work."
faqs:
  - question: "Is impulse the same thing as force?"
    answer: "No. Impulse is force multiplied by the time it acts. A small force acting for a long time can deliver the same impulse as a large force acting briefly."
  - question: "Do I need to handle rockets or leaking carts with changing mass?"
    answer: "Not with numbers. This course does not ask you to calculate for systems whose mass changes with time. You may still describe such systems in words."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. In Topic 4.1 you defined momentum, p = mv. Here you find out what changes it. The answer is the same thing that changes velocity: a net force. The new idea is that the **time** for which the force acts matters just as much as its size.

## Change in momentum

The change in momentum of an object or system is its final momentum minus its initial momentum:

**Δp = p − p₀**

For one object of constant mass, this is Δp = mv − mv₀ = m(v − v₀).

In one dimension, choose an axis and use **signed** velocities. Take **+x towards a wall**. A 0.20 kg ball that hits the wall at +5.0 m/s and stops has Δp = 0.20 × (0 − 5.0) = −1.0 kg·m/s. If it bounces back at −5.0 m/s instead, Δp = 0.20 × (−5.0 − 5.0) = −2.0 kg·m/s. **Bouncing back needs twice the change in momentum of stopping**, even though the final speed is the same as the starting speed.

## Force is the rate of change of momentum

Newton's second law, as you met it in Topic 2.5, says F_net = ma. There is a more general form:

**F_net = Δp / Δt**

In words: **the net external force on an object or system equals the rate at which its momentum changes.** A large net force changes momentum quickly. Zero net force means momentum does not change.

Only **external** forces count. Forces between parts of a system cannot change the momentum of the system as a whole; Topic 4.3 develops that idea.

## Impulse

Rearranging F_net = Δp / Δt gives a product that is worth naming. **Impulse**, J, is the average force on a system multiplied by the time interval over which it acts:

**J = F_avg Δt**

- Units: newton-seconds, N·s. Since 1 N = 1 kg·m/s², 1 N·s = **1 kg·m/s**, the same unit as momentum.
- Impulse is a **vector**. It points in the same direction as the net force.

## The impulse–momentum theorem

Put the two ideas together and you get the central result of this topic:

**J = Δp**

The impulse delivered to a system by the net external force equals the system's change in momentum. You can read it either way. A known force for a known time tells you the change in momentum. A measured change in momentum tells you the impulse, and dividing by the contact time gives the average net force.

### Impulse as an area

Real forces are rarely constant. A kick, a bat or a bumper produces a force that rises and falls in a fraction of a second. You do not need calculus to handle this. **The impulse equals the area between a net force–time graph and the time axis.** Split the area into rectangles and triangles.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p4-2a-title p4-2a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p4-2a-title">Force–time graph of a push on a cart, with the area shaded</title>
<desc id="p4-2a-desc">Net force F_x in newtons from 0 to 15 against time t in seconds from 0 to 0.25. The force rises in a straight line from 0 at t = 0 to 12 N at 0.05 s, stays at 12 N until 0.15 s, then falls in a straight line to 0 at 0.20 s. The region under the graph is hatched and split by dotted lines into a left triangle of area 0.30 N·s, a middle rectangle of area 1.2 N·s and a right triangle of area 0.30 N·s. The total area is 1.8 N·s.</desc>
<defs><pattern id="p42-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M150 270 V50 M230 270 V50 M310 270 V50 M390 270 V50 M470 270 V50"/>
<path d="M70 200 H480 M70 130 H480 M70 60 H480"/>
</g>
<polygon points="70,270 150,102 310,102 390,270" fill="url(#p42-hatch)" stroke="none"/>
<path d="M150 102 V270 M310 102 V270" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 3"/>
<path d="M70 270 H490 M70 270 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<polyline points="70,270 150,102 310,102 390,270 470,270" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="150" y="288">0.05</text><text x="230" y="288">0.10</text><text x="310" y="288">0.15</text><text x="390" y="288">0.20</text><text x="470" y="288">0.25</text>
<text x="280" y="314" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="204">5</text><text x="62" y="134">10</text><text x="62" y="64">15</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">net force, F_x (N)</text>
<text x="230" y="94" font-size="12" fill="#1d2b44" text-anchor="middle">12 N</text>
<rect x="190" y="178" width="80" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="230" y="194" font-size="12" fill="#1d2b44" text-anchor="middle">1.2 N·s</text>
<rect x="96" y="232" width="48" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="120" y="246" font-size="11" fill="#1d2b44" text-anchor="middle">0.30</text>
<rect x="316" y="232" width="48" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="340" y="246" font-size="11" fill="#1d2b44" text-anchor="middle">0.30</text>
<text x="400" y="80" font-size="12" fill="#1d2b44">total area = 1.8 N·s</text>
</svg>
<figcaption>Figure 1. Net force on a cart during a 0.20 s push, +x in the direction of the push. The hatched area is the impulse: two triangles of ½ × 0.05 s × 12 N = 0.30 N·s each plus a rectangle of 0.10 s × 12 N = 1.2 N·s, a total of 1.8 N·s.</figcaption>
</figure>

### Net force as a slope

Turn the theorem around. Since F_net = Δp / Δt, **the slope of a momentum–time graph is the net external force.** A steep momentum–time graph means a large net force. A flat section means zero net force.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="p4-2b-title p4-2b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p4-2b-title">Momentum–time graph of a sled being pulled, then coasting</title>
<desc id="p4-2b-desc">Momentum p_x in kg·m/s from 0 to 12 against time t in seconds from 0 to 4. A straight line rises from 4.0 kg·m/s at t = 0 to 10.0 kg·m/s at t = 3.0 s, then stays flat at 10.0 kg·m/s until 4.0 s. A dashed right triangle under the rising section shows a run of 3.0 s and a rise of 6.0 kg·m/s, so the slope and the net force are 2.0 N. The flat section is labelled slope 0, net force 0.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M170 280 V40 M270 280 V40 M370 280 V40 M470 280 V40"/>
<path d="M70 240 H480 M70 200 H480 M70 160 H480 M70 120 H480 M70 80 H480 M70 40 H480"/>
</g>
<path d="M70 280 H490 M70 280 V30" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="298">0</text><text x="170" y="298">1</text><text x="270" y="298">2</text><text x="370" y="298">3</text><text x="470" y="298">4</text>
<text x="280" y="320" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="284">0</text><text x="62" y="244">2</text><text x="62" y="204">4</text><text x="62" y="164">6</text><text x="62" y="124">8</text><text x="62" y="84">10</text><text x="62" y="44">12</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">momentum, p_x (kg·m/s)</text>
<path d="M70 200 H370 V80" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4" fill="none"/>
<polyline points="70,200 370,80 470,80" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="220" y="218" font-size="12" fill="#1d2b44" text-anchor="middle">run = 3.0 s</text>
<text x="378" y="150" font-size="12" fill="#1d2b44">rise = 6.0 kg·m/s</text>
<text x="110" y="120" font-size="12" fill="#1d2b44">slope = 6.0 ÷ 3.0 = 2.0 N</text>
<text x="380" y="68" font-size="12" fill="#1d2b44">slope 0: F_net = 0</text>
</svg>
<figcaption>Figure 2. A 2.0 kg sled on frictionless ice, +x in the direction of the pull. While the rope pulls (0 to 3.0 s), momentum rises steadily from 4.0 to 10.0 kg·m/s, so F_net = 2.0 N. After the rope goes slack the graph is flat: no net force, constant momentum.</figcaption>
</figure>

## Newton's second law as a special case

If the mass of the system does not change, Δp = mΔv. Substitute into F_net = Δp / Δt:

**F_net = mΔv / Δt = ma**

So F_net = ma is what the impulse–momentum theorem becomes for a system of constant mass. Check it on Figure 2: the sled's velocity rises from 4.0 ÷ 2.0 = 2.0 m/s to 10.0 ÷ 2.0 = 5.0 m/s in 3.0 s, so a = 1.0 m/s² and ma = 2.0 N, the same as the slope.

The momentum form is more general: it still applies when mass changes, for example a rocket expelling gas or a cart leaking sand. This course does not ask you to **calculate** with changing mass, but you may be asked to reason about it in words.

## Worked example 1: impulse from a force–time graph

**Question.** Take **+x in the direction of the push**. A 0.60 kg cart starts at rest on a level, frictionless track. A force sensor records the net force shown in Figure 1. Find (a) the impulse, (b) the cart's final velocity and (c) the average net force during the push.

1. Impulse = area. Left triangle: ½ × 0.05 s × 12 N = 0.30 N·s. Rectangle: (0.15 − 0.05) s × 12 N = 1.2 N·s. Right triangle: 0.30 N·s. Total **J = +1.8 N·s**.
2. Impulse–momentum theorem: J = Δp = m(v − v₀), so 1.8 = 0.60 × (v − 0), giving **v = +3.0 m/s**.
3. Average force: F_avg = J ÷ Δt = 1.8 N·s ÷ 0.20 s = **+9.0 N**.

**Check.** The average force (9.0 N) is less than the peak (12 N), as it must be, because the force spends part of the time rising and falling. Using the peak for the whole 0.20 s would give 2.4 N·s and a speed of 4.0 m/s, which is too big.

## Worked example 2: rebound against stopping

**Question.** Take **+x towards a buffer**. A 0.50 kg trolley hits a buffer at 1.2 m/s and rebounds at 0.80 m/s. The contact lasts 0.10 s. Find (a) the change in momentum, (b) the average force from the buffer on the trolley. (c) Compare with a trolley that sticks to the buffer, with the same contact time. Friction is negligible.

1. Signed velocities: v₀ = +1.2 m/s, v = −0.80 m/s.
2. Δp = m(v − v₀) = 0.50 × (−0.80 − 1.2) = **−1.0 kg·m/s**.
3. The buffer force is the only horizontal force, so it is the net force: F_avg = Δp ÷ Δt = −1.0 ÷ 0.10 = **−10 N** (10 N away from the buffer).
4. Sticking: Δp = 0.50 × (0 − 1.2) = −0.60 kg·m/s, so F_avg = **−6.0 N**.

**Interpretation.** Bouncing needs a larger impulse than stopping, because the buffer must first remove the trolley's momentum and then give it momentum in the opposite direction.

**Check.** If you used speeds without signs, you would get Δp = 0.50 × (0.80 − 1.2) = −0.20 kg·m/s, five times too small. Reversals are where sign errors cost the most.

## Worked example 3: why a soft landing protects

**Question.** Take **+y upward**. A 0.18 kg phone falls and hits the floor at 4.0 m/s, then stops. On a tile floor it stops in 0.0020 s. On a thick cushion it stops in 0.040 s. Find the average net force in each case, and the average force from the surface.

1. Δp = m(v − v₀) = 0.18 × (0 − (−4.0)) = **+0.72 kg·m/s** in both cases.
2. Tile: F_net = 0.72 ÷ 0.0020 = **+360 N**. Cushion: F_net = 0.72 ÷ 0.040 = **+18 N**.
3. During contact, two forces act: the surface pushes up, and gravity pulls down with mg = 0.18 × 9.8 = 1.8 N. So F_surface = F_net + mg: about **362 N** on tile and about **20 N** on the cushion.

**Interpretation.** The change in momentum is fixed by how fast the phone arrives and that it stops. The cushion stretches the stopping time by a factor of 20, so the average force falls by a factor of 20. Crumple zones in cars, bending your knees when you land, and "giving" with your hands when you catch a water balloon all work this way.

**Check.** On tile, the weight is less than 1% of the surface force. During a short, hard impact, gravity barely matters, which is why the collision model of Topic 4.1 ignores it.

## Testing the theorem in the lab

A typical procedure for testing J = Δp:

1. Measure the cart's mass on a balance.
2. Mount a **force sensor** on the cart, or on a fixed post, so that it records the force during a short push or a collision with a bumper.
3. Place a **motion sensor** at the end of the track to record the cart's velocity just before and just after the push.
4. Repeat with pushes of different sizes.
5. For each run, find the impulse as the area under the force–time graph (the software can do this) and the change in momentum as m(v − v₀).

To analyse the data, make a graph that **should be a straight line** if the theorem holds. For example, plot Δv on the vertical axis against J on the horizontal axis. Since Δv = J ÷ m, the points should lie on a line through the origin with slope 1/m. A line that misses the origin suggests a systematic error, such as friction or an offset in the force sensor.

## Common misconceptions

- **"Impulse is just a big force."** Impulse is force × time. Time matters as much as force (Worked example 3).
- **"Change in momentum is the change in speed times mass."** Use signed velocities. A rebound changes momentum by more than the change in speed suggests (Worked example 2).
- **"The peak force times the contact time gives the impulse."** Only if the force is constant. Otherwise use the area or the average force (Worked example 1).
- **"A soft landing reduces the impulse."** The impulse is the same; it is spread over a longer time, so the average force is smaller.
- **"Any force on a system changes its momentum."** Only the net **external** force does.
- **"A flat momentum–time graph means the object is at rest."** It means constant momentum and zero net force; the object can be moving.
- **"Impulse has its own unit, unrelated to momentum."** 1 N·s = 1 kg·m/s.

## Where this leads

Topic 4.3, [Conservation of Linear Momentum](/advanced-course-resources/physics-1/4-3-conservation-linear-momentum-study-guide/), applies the theorem to both objects in an interaction at once. By Newton's third law, the impulses they exert on each other are equal and opposite, which leads to conservation of momentum. Try the [practice questions](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/4-2-change-momentum-impulse-checklist/) to consolidate. You can also go back to [Topic 4.1, Linear Momentum](/advanced-course-resources/physics-1/4-1-linear-momentum-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
