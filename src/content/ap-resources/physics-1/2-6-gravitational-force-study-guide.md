---
resourceId: "mb-ap-phys1-2.6-study-guide"
title: "Gravitational Force: Study Guide (Physics 1 2.6)"
description: "Universal gravitation, gravitational field strength, weight, when gravity can be treated as constant, apparent weight in accelerating lifts, and inertial versus gravitational mass."
course: "physics-1"
unit: 2
topics: ["2.6"]
resourceType: "study-guide"
prerequisites:
  - "Newton’s second law, a = ΣF / m (Topic 2.5)"
  - "Newton’s third law and force pairs (Topic 2.3)"
  - "Powers of ten and scientific notation"
prerequisiteResources: ["mb-ap-phys1-2.5-study-guide"]
learningObjectives:
  - "Use F_g = G m₁m₂ / r² to find the gravitational force between two objects and predict factors of change"
  - "Describe gravity as an attractive force along the line joining the centres of mass, exerted on each object’s centre of mass"
  - "Find gravitational field strength g = GM / r² and explain why it equals free-fall acceleration when gravity is the only force"
  - "Decide when the gravitational force can be treated as constant and use weight = mg"
  - "Explain when apparent weight (the normal force) differs from the gravitational force, including weightlessness"
  - "Distinguish inertial mass from gravitational mass and explain the evidence that they are equal"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. G = 6.67 × 10⁻¹¹ N·m²/kg² and g = 9.8 N/kg (9.8 m/s²) at Earth’s surface, as on the course equation table; the course also accepts 10 N/kg where stated"
related: ["mb-ap-phys1-2.6-revision-notes", "mb-ap-phys1-2.6-practice", "mb-ap-phys1-2.6-checklist"]
next: "mb-ap-phys1-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Any two masses attract: F_g = G m₁m₂ / r², with r measured between their centres of mass."
  - "Gravitational field strength g = F_g / m = GM / r². Its unit N/kg equals m/s²."
  - "If gravity is the only force, an object’s acceleration equals the local g."
  - "Weight is mg. Near Earth’s surface g is almost constant at 9.8 N/kg (about 10 N/kg)."
  - "Apparent weight is the normal force. It differs from mg whenever the system accelerates, and is zero in free fall."
faqs:
  - question: "Is weight the same as mass?"
    answer: "No. Mass (kg) measures how much an object resists changes in motion. Weight (N) is the gravitational force on it, mg. A 2.0 kg object has a weight of 19.6 N on Earth but only about 3.2 N on the Moon; its mass is 2.0 kg in both places."
  - question: "Are astronauts in orbit weightless because there is no gravity?"
    answer: "No. At the height of a low orbit, a few hundred kilometres up, Earth’s field is still about 90% of its surface value. Astronauts feel weightless because gravity is the only force on them, so nothing pushes back on them: their apparent weight is zero."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Everything here uses algebra, diagrams and graphs. If you are taking the calculus-based Physics C: Mechanics course, it has its own separate guide. Gravity is the main non-contact force you will meet in Physics 1.

## Gravity is an interaction between masses

Every object with mass attracts every other object with mass. **Newton’s law of universal gravitation** gives the size of the force:

**F_g = G m₁m₂ / r²**

- m₁ and m₂ are the two masses (kg).
- r is the distance between their **centres of mass** (m), not between their surfaces.
- G = 6.67 × 10⁻¹¹ N·m²/kg² is the universal gravitational constant.

Three facts about direction and where the force acts:

1. The force is always **attractive**.
2. It acts **along the line joining the two centres of mass**.
3. For each object, you can treat the force as acting **at its centre of mass**.

The forces on the two objects form a Newton’s third-law pair (Topic 2.3): equal in size, opposite in direction, even when one mass is far larger.

<figure>
<svg viewBox="0 0 560 220" role="img" aria-labelledby="p1-26a-title p1-26a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-26a-title">Gravitational forces between two spheres</title>
<desc id="p1-26a-desc">A large sphere labelled m₁ on the left and a small sphere labelled m₂ on the right. A dashed line joins their centres and is labelled r, the centre-to-centre distance. From the centre of the large sphere, an arrow of length 80 points right towards the small sphere, labelled force on m₁ by m₂. From the centre of the small sphere, an arrow of the same length points left towards the large sphere, labelled force on m₂ by m₁. The two arrows are equal in length and opposite in direction.</desc>
<defs><marker id="p1-26-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="220" fill="#ffffff"/>
<circle cx="130" cy="100" r="60" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="430" cy="100" r="22" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M130 175 V190 M430 175 V190 M130 183 H430" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="280" y="205" font-size="13" fill="#1d2b44" text-anchor="middle">r (centre to centre)</text>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-26-ah)">
<path d="M130 100 H210"/>
<path d="M430 100 H350"/>
</g>
<circle cx="130" cy="100" r="4" fill="#1d2b44"/><circle cx="430" cy="100" r="4" fill="#1d2b44"/>
<text x="110" y="60" font-size="14" fill="#1d2b44">m₁</text>
<text x="422" y="70" font-size="14" fill="#1d2b44">m₂</text>
<text x="200" y="88" font-size="12" fill="#1d2b44">F on m₁ by m₂</text>
<text x="290" y="125" font-size="12" fill="#1d2b44">F on m₂ by m₁</text>
</svg>
<figcaption>Figure 1. The two gravitational forces are equal and opposite, act along the line of centres, and are drawn from each centre of mass. Each has size G m₁m₂ / r².</figcaption>
</figure>

### The inverse-square law and factors of change

Because F_g ∝ m₁, F_g ∝ m₂ and F_g ∝ 1/r²:

| Change | Effect on F_g |
|---|---|
| Double one mass | × 2 |
| Double both masses | × 4 |
| Double the distance r | × ¼ |
| Triple the distance r | × ⅑ |
| Halve the distance r | × 4 |

Always square the distance factor. Halving r multiplies the force by 4, not by 2.

## Worked example 1: two lab spheres

**Question.** A 12 kg lead sphere and a 0.80 kg lead sphere have centres 0.15 m apart. (a) Find the gravitational force between them. (b) Compare it with the small sphere’s weight on Earth. (c) What is the force if the centres move to 0.30 m apart?

1. F_g = G m₁m₂ / r² = (6.67 × 10⁻¹¹)(12)(0.80) ÷ (0.15)² = **2.8 × 10⁻⁸ N**.
2. Weight of the small sphere: mg = 0.80 × 9.8 = 7.84 N. The ratio is 2.8 × 10⁻⁸ ÷ 7.84 ≈ **3.6 × 10⁻⁹**. The attraction between the spheres is a few billionths of the small sphere’s weight.
3. Doubling r divides the force by 2² = 4: F_g = **7.1 × 10⁻⁹ N**.

**Interpretation.** Gravity between everyday objects is tiny, because G is so small. It becomes large only when at least one mass is astronomical. Measuring forces this small needs a very sensitive instrument: Henry Cavendish made the first laboratory measurement with a torsion balance in 1798.

## The gravitational field

A **field** describes the effect of a non-contact force at each point in space, before you place an object there. Place a small **test mass** m at a point near a body of mass M. The **gravitational field strength** at that point is the force per kilogram:

**g = F_g / m = GM / r²**

The unit is N/kg. Since 1 N = 1 kg·m/s², **1 N/kg = 1 m/s²**. That is no coincidence. If gravity is the **only** force on an object, the second law gives a = F_g / m = g. So the free-fall acceleration (in m/s²) is numerically equal to the field strength (in N/kg) at that place.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-26b-title p1-26b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-26b-title">Gravitational field strength against distance from a planet’s centre</title>
<desc id="p1-26b-desc">Field strength g in newtons per kilogram from 0 to 10 against distance from the centre in multiples of the planet’s radius R, from 0 to 4R. The curve starts at the surface, r = R, at 9.8 N/kg and falls steeply, then levels off. Marked points: 9.8 N/kg at R, 2.45 N/kg at 2R, 1.09 N/kg at 3R and 0.61 N/kg at 4R. The region from 0 to R is shaded grey and labelled inside the planet, not covered.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<rect x="70" y="50" width="105" height="240" fill="#e8e8e8"/>
<text x="122" y="160" font-size="11" fill="#1d2b44" text-anchor="middle">inside the</text>
<text x="122" y="174" font-size="11" fill="#1d2b44" text-anchor="middle">planet:</text>
<text x="122" y="188" font-size="11" fill="#1d2b44" text-anchor="middle">not covered</text>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M175 290 V50 M280 290 V50 M385 290 V50 M490 290 V50"/>
<path d="M70 242 H490 M70 194 H490 M70 146 H490 M70 98 H490 M70 50 H490"/>
</g>
<path d="M70 290 H500 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="175" y="308">R</text><text x="280" y="308">2R</text><text x="385" y="308">3R</text><text x="490" y="308">4R</text>
<text x="280" y="330" font-size="13">distance from the planet’s centre, r</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="246">2</text><text x="62" y="198">4</text><text x="62" y="150">6</text><text x="62" y="102">8</text><text x="62" y="54">10</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">field strength, g (N/kg)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="175.0,54.8 185.5,95.6 196.0,126.7 206.5,150.8 217.0,170.0 227.5,185.5 238.0,198.1 248.5,208.6 259.0,217.4 269.5,224.8 280.0,231.2 290.5,236.7 301.0,241.4 311.5,245.5 322.0,249.2 332.5,252.4 343.0,255.2 353.5,257.7 364.0,260.0 374.5,262.0 385.0,263.9 395.5,265.5 406.0,267.0 416.5,268.4 427.0,269.7 437.5,270.8 448.0,271.9 458.5,272.8 469.0,273.7 479.5,274.5 490.0,275.3"/>
<g fill="#1d2b44"><circle cx="175" cy="54.8" r="4.5"/><circle cx="280" cy="231.2" r="4.5"/><circle cx="385" cy="263.9" r="4.5"/><circle cx="490" cy="275.3" r="4.5"/></g>
<g font-size="12" fill="#1d2b44">
<text x="185" y="50">9.8 N/kg at R</text>
<text x="288" y="222">2.45 at 2R (÷ 4)</text>
<text x="370" y="252">1.09 at 3R (÷ 9)</text>
<text x="440" y="262">0.61 (÷ 16)</text>
</g>
</svg>
<figcaption>Figure 2. Outside a planet, field strength follows an inverse-square law: twice as far from the centre gives one quarter of the field. Here the planet is Earth-like, with g = 9.8 N/kg at its surface. Physics 1 does not ask about the field inside a planet.</figcaption>
</figure>

## Weight, and when gravity is constant

The gravitational force that a planet or moon exerts on a small object near it is called the object’s **weight**:

**Weight = F_g = mg**

where g is the local field strength. Near Earth’s surface the course uses **g = 9.8 N/kg** (the course also accepts 10 N/kg when a question says so).

Why can we treat g as constant in most problems? Because the gravitational force barely changes as an object moves a short distance compared with the planet’s radius. For example, at the top of a 300 m tower, r is 6.37 × 10⁶ m + 300 m. The field there is smaller than at ground level by only about **0.009%** (a fraction of 9.4 × 10⁻⁵). For a thrown ball, a lift or a ramp, a constant mg is an excellent model.

The model fails when the distance changes by a large fraction of r: a rocket climbing thousands of kilometres, a satellite, or the Moon.

## Worked example 2: field strength from G, M and r

**Question.** Earth has mass 5.97 × 10²⁴ kg and mean radius 6.37 × 10⁶ m. (a) Calculate g at Earth’s surface. (b) Calculate g at 400 km above the surface. (c) A planet has twice Earth’s mass and 1.5 times Earth’s radius. Predict its surface g without the constant G.

1. **(a)** g = GM / R² = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (6.37 × 10⁶)² = **9.81 N/kg**. This matches the table value of 9.8 N/kg.
2. **(b)** r = R + h = 6.37 × 10⁶ + 0.40 × 10⁶ = 6.77 × 10⁶ m. g = (6.67 × 10⁻¹¹)(5.97 × 10²⁴) ÷ (6.77 × 10⁶)² = **8.7 N/kg**, about 89% of the surface value.
3. **(c)** g ∝ M / R², so the factor is 2 ÷ 1.5² = 2 ÷ 2.25 = 0.889. Surface g ≈ 0.889 × 9.8 = **8.7 N/kg**.

**Check.** In (b), r grew by about 6%, so 1/r² should fall by roughly 12%: 0.89 is consistent. In (c), the larger mass is more than cancelled by the larger radius, because radius is squared.

## Apparent weight

A bathroom scale does not measure the gravitational force on you. It measures how hard it pushes up on you: the **normal force**. The **apparent weight** of a system is the size of the normal force exerted on it.

- If the system is **not accelerating**, F_N = mg, so apparent weight equals true weight.
- If the system **accelerates**, F_N ≠ mg, and the apparent weight differs.

## Worked example 3: riding a lift

**Question.** Take **+y upward**. A 55 kg student stands on a scale in a lift. Find the scale reading when the lift (a) accelerates upward at 1.2 m/s², (b) moves at constant velocity, (c) accelerates downward at 1.2 m/s², and (d) is in free fall.

The forces on the student are F_N (scale, up) and mg (Earth, down). The second law gives F_N − mg = ma_y, so **F_N = m(g + a_y)**.

1. **(a)** a_y = +1.2 m/s²: F_N = 55(9.8 + 1.2) = **605 N** (about 610 N).
2. **(b)** a_y = 0: F_N = 55 × 9.8 = **539 N**, the true weight.
3. **(c)** a_y = −1.2 m/s²: F_N = 55(9.8 − 1.2) = **473 N** (about 470 N).
4. **(d)** a_y = −9.8 m/s²: F_N = 55(9.8 − 9.8) = **0 N**.

A scale marked in kilograms divides the normal force by 9.8, so it would read 61.7 kg, 55.0 kg and 48.3 kg in (a)–(c).

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-26c-title p1-26c-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-26c-title">Free-body diagrams of a student in a lift</title>
<desc id="p1-26c-desc">Three free-body diagrams side by side, each a dot with an upward normal-force arrow and a downward gravitational-force arrow of 539 N. Left, accelerating upward: the normal-force arrow, 605 N, is longer than the gravity arrow. Middle, constant velocity: both arrows are 539 N and equal in length. Right, accelerating downward: the normal-force arrow, 473 N, is shorter than the gravity arrow.</desc>
<defs><marker id="p1-26-ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-26-ah2)">
<path d="M100 150 V38"/><path d="M100 150 V250"/>
<path d="M280 150 V50"/><path d="M280 150 V250"/>
<path d="M460 150 V62"/><path d="M460 150 V250"/>
</g>
<g fill="#1d2b44"><circle cx="100" cy="150" r="6"/><circle cx="280" cy="150" r="6"/><circle cx="460" cy="150" r="6"/></g>
<g font-size="12" fill="#1d2b44">
<text x="108" y="50">F_N = 605 N</text><text x="108" y="245">mg = 539 N</text>
<text x="288" y="62">F_N = 539 N</text><text x="288" y="245">mg = 539 N</text>
<text x="468" y="74">F_N = 473 N</text><text x="468" y="245">mg = 539 N</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="278">(a) a up: F_N &gt; mg</text>
<text x="280" y="278">(b) a = 0: F_N = mg</text>
<text x="460" y="278">(c) a down: F_N &lt; mg</text>
</g>
</svg>
<figcaption>Figure 3. The gravitational force on the student is 539 N in every case. Only the normal force, the apparent weight, changes. The longer arrow always points in the direction of the acceleration.</figcaption>
</figure>

**Important:** apparent weight depends on the direction of the **acceleration**, not of the velocity. A lift moving upward while slowing down has a downward acceleration, so the scale reads less than mg.

### Weightlessness and the equivalence principle

A system **appears weightless** when nothing pushes or pulls on it except gravity, or when no forces act at all. In free fall, the scale and the student fall together, so F_N = 0. Astronauts in orbit feel weightless for the same reason. Earth’s field at orbit height is still large (8.7 N/kg at 400 km, from Worked example 2); gravity is simply the only force acting on them.

The **equivalence principle** goes further. Inside a closed lift you cannot do any experiment that tells "accelerating upward at 1.2 m/s² near Earth" apart from "at rest on a planet with g = 11.0 N/kg". An observer in an accelerating (non-inertial) frame cannot separate apparent weight from a real gravitational force.

## Inertial mass and gravitational mass

Mass appears in two different laws, with two different meanings.

- **Inertial mass** is in a = ΣF / m. It measures how strongly an object resists a change in its motion.
- **Gravitational mass** is in F_g = G m₁m₂ / r². It measures how strongly an object takes part in gravitational attraction.

Nothing in logic forces these to be equal. Experiments, starting with pendulums and refined with torsion balances and in orbit, show they are equal to very high precision. That is why every object in free fall near Earth has the same acceleration:

a = F_g / m_inertial = (m_grav g) / m_inertial = g

A heavier ball feels a larger gravitational force, but it also has proportionally more inertia, so its acceleration is the same. If a material had gravitational mass even 1% larger than its inertial mass, it would fall at about 9.9 m/s² instead of 9.8 m/s², and this has never been observed.

## Common misconceptions

- **"r is the gap between the surfaces."** Measure r between the centres of mass.
- **"Doubling the distance halves the force."** It quarters it: the distance is squared.
- **"The bigger body pulls harder."** The two forces form a third-law pair and are equal in size. The smaller body accelerates more because its mass is smaller.
- **"There is no gravity in space."** Field strength falls with distance but never reaches zero. Orbiting astronauts are in free fall, not out of gravity.
- **"A scale measures weight."** A scale measures the normal force: the apparent weight. It equals mg only when there is no acceleration.
- **"Moving upward means the scale reads more."** The reading depends on the acceleration, not the velocity.
- **"Heavier objects fall faster."** Without air resistance, all objects fall with acceleration g, because inertial and gravitational mass are equal.
- **"Weight and mass are the same."** Mass is in kg and does not depend on location; weight is a force in N and does.

## Where this leads

Weight is now a force you can calculate anywhere. Topic 2.7 (Kinetic and Static Friction) shows how the normal force, which you met here as apparent weight, sets the size of friction. Gravity returns in Topic 2.9 for circular orbits and in later units for gravitational potential energy. Try the [practice questions](/advanced-course-resources/physics-1/2-6-gravitational-force-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/2-6-gravitational-force-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/2-6-gravitational-force-checklist/) to consolidate. Next topic: [Kinetic and Static Friction](/advanced-course-resources/physics-1/2-7-kinetic-static-friction-study-guide/). Previous topic: [Newton’s Second Law](/advanced-course-resources/physics-1/2-5-newtons-second-law-study-guide/). You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
