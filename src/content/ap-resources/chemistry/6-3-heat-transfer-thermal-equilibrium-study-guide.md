---
resourceId: "mb-ap-chem-6.3-study-guide"
title: "Heat Transfer and Thermal Equilibrium: Study Guide (Chemistry 6.3)"
description: "Explain heat transfer through particle collisions: why energy moves from a warmer body to a cooler one, and why it stops at thermal equilibrium when the temperatures are equal."
course: "chemistry"
unit: 6
topics: ["6.3"]
resourceType: "study-guide"
prerequisites:
  - "Kinetic molecular theory: KE = ½mv² and Kelvin temperature is proportional to average kinetic energy (Topic 3.5)"
  - "System, surroundings and conservation of energy (Topic 6.1)"
prerequisiteResources: ["mb-ap-chem-6.2-study-guide"]
learningObjectives:
  - "Link the temperature of a body to the average kinetic energy of its particles"
  - "Explain, at the particle level, how collisions transfer energy from a warmer body to a cooler one"
  - "Explain what thermal equilibrium is and why the net transfer of energy stops when it is reached"
  - "Use temperature–time data to identify the direction of heat transfer and the moment equilibrium is reached"
  - "Compare average kinetic energies at two Kelvin temperatures"
skills: ["4", "6"]
studyMinutes: 35
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Convert to kelvin with T(K) = T(°C) + 273.15 before comparing average kinetic energies; temperature differences are the same in °C and K"
related: ["mb-ap-chem-6.3-revision-notes", "mb-ap-chem-6.3-practice", "mb-ap-chem-6.3-checklist"]
next: "mb-ap-chem-6.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-chemistry", "page-chemistry"]
keyPoints:
  - "The particles of a warmer body have a greater average kinetic energy than the particles of a cooler body."
  - "When two bodies touch, their particles collide. On average, energy passes from the faster particles to the slower ones, so energy moves from the warmer body to the cooler one. This is heat transfer."
  - "Heat transfer continues until both bodies have the same average kinetic energy, and so the same temperature. This is thermal equilibrium."
  - "At thermal equilibrium the particles still move and collide, but the energy passed each way is equal, so there is no net transfer."
  - "Average kinetic energy is proportional to the Kelvin temperature, so always compare temperatures in kelvin."
faqs:
  - question: "Is heat the same thing as temperature?"
    answer: "No. Temperature measures the average kinetic energy of the particles in a body. Heat is energy that moves from one body to another because their temperatures differ. A body has a temperature; it does not 'contain' heat."
  - question: "Does cold move from an ice cube into my drink?"
    answer: "No. Only energy moves. Particles in the drink collide with particles of the ice and pass energy to them, so the drink loses energy and its temperature falls."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What temperature means for particles

In [Topic 6.1](/advanced-course-resources/chemistry/6-1-endothermic-exothermic-processes-study-guide/) you saw that heat is one way energy moves between a system and its surroundings. This topic asks *how* that happens, particle by particle.

Start with what you know from the kinetic molecular theory (Topic 3.5):

- The particles in any sample of matter are always moving: flying around in a gas, sliding past each other in a liquid, vibrating about fixed positions in a solid.
- A moving particle has **kinetic energy**, KE = ½mv², where m is its mass and v its speed.
- At any moment the particles in a sample have a **spread** of kinetic energies. Some are fast, most are medium, a few are slow. (The Maxwell–Boltzmann distribution shows this spread for a gas.)
- The **Kelvin temperature** of a sample is **proportional to the average kinetic energy** of its particles.

So a thermometer reading is a measure of how energetic the particles are *on average*. This gives the first key idea of the topic:

> The particles in a warmer body have a greater **average** kinetic energy than the particles in a cooler body.

Notice the word *average*. In a cup of warm water, some molecules are moving more slowly than some molecules in a cup of cold water. It is the average across the whole sample that is higher.

| Statement | True? |
|---|---|
| The average kinetic energy of the particles in the warmer body is greater. | Yes |
| Every particle in the warmer body is faster than every particle in the cooler body. | No: the two spreads overlap |
| The warmer body always has more total energy. | No: a large cool lake has far more total energy than a hot cup of tea |

## How collisions move energy

Now put a warmer body in contact with a cooler body. This is called **thermal contact**: their particles can touch and collide, for example where a hot metal pan sits on a cold worktop, or where hot water meets the glass wall of a cold bottle.

At the surface where they meet, particles from the two bodies collide. In a collision between a faster particle and a slower particle, energy is usually passed from the faster one to the slower one. The faster particle comes away a little slower; the slower particle comes away a little faster.

Not every single collision sends energy the same way. Sometimes a fast particle from the cooler body hits a slow particle from the warmer body. But because the warmer body's particles are more energetic **on average**, far more energy moves from warm to cool than from cool to warm. The **net** result is a flow of energy from the warmer body to the cooler body.

<figure>
<svg viewBox="0 0 640 300" role="img" aria-labelledby="ht-fig1-title ht-fig1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ht-fig1-title">Particle view of heat transfer between two bodies in contact</title>
<desc id="ht-fig1-desc">Two boxes touch along a shared vertical boundary. The left box, labelled warmer body, contains particles drawn with long motion arrows. The right box, labelled cooler body, contains particles drawn with short motion arrows. At the boundary one fast particle from the left collides with one slow particle from the right; after the collision the left particle has a shorter arrow and the right particle a longer arrow. A broad arrow below the boxes points from left to right and is labelled net energy transfer, heat.</desc>
<defs><marker id="htf1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<text x="165" y="24" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Warmer body</text>
<text x="165" y="42" text-anchor="middle" font-size="12" fill="#1d2b44">higher average kinetic energy</text>
<text x="475" y="24" text-anchor="middle" font-size="15" font-weight="600" fill="#1d2b44">Cooler body</text>
<text x="475" y="42" text-anchor="middle" font-size="12" fill="#1d2b44">lower average kinetic energy</text>
<rect x="20" y="52" width="300" height="170" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<rect x="320" y="52" width="300" height="170" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<line x1="320" y1="52" x2="320" y2="222" stroke="#1d2b44" stroke-width="4"/>
<g fill="#1d2b44">
<circle cx="70" cy="90" r="7"/><circle cx="150" cy="80" r="7"/><circle cx="230" cy="105" r="7"/>
<circle cx="90" cy="170" r="7"/><circle cx="180" cy="150" r="7"/><circle cx="250" cy="190" r="7"/>
<circle cx="300" cy="130" r="7"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#htf1a)">
<line x1="70" y1="90" x2="115" y2="70"/><line x1="150" y1="80" x2="110" y2="115"/><line x1="230" y1="105" x2="270" y2="75"/>
<line x1="90" y1="170" x2="45" y2="145"/><line x1="180" y1="150" x2="225" y2="175"/><line x1="250" y1="190" x2="205" y2="205"/>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="340" cy="135" r="7"/><circle cx="400" cy="85" r="7"/><circle cx="480" cy="120" r="7"/>
<circle cx="560" cy="90" r="7"/><circle cx="430" cy="185" r="7"/><circle cx="520" cy="175" r="7"/><circle cx="590" cy="200" r="7"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#htf1a)">
<line x1="400" y1="85" x2="416" y2="75"/><line x1="480" y1="120" x2="464" y2="130"/><line x1="560" y1="90" x2="574" y2="100"/>
<line x1="430" y1="185" x2="447" y2="180"/><line x1="520" y1="175" x2="506" y2="165"/><line x1="590" y1="200" x2="580" y2="187"/>
</g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#htf1a)">
<line x1="300" y1="130" x2="288" y2="121"/><line x1="340" y1="135" x2="378" y2="152"/>
</g>
<circle cx="320" cy="132" r="22" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="320" y="245" text-anchor="middle" font-size="12" fill="#1d2b44">collisions at the boundary (circled)</text>
<line x1="150" y1="272" x2="490" y2="272" stroke="#1d2b44" stroke-width="5" marker-end="url(#htf1a)"/>
<text x="320" y="294" text-anchor="middle" font-size="13" font-weight="600" fill="#1d2b44">net energy transfer (heat): warmer → cooler</text>
</svg>
<figcaption>Figure 1. Longer arrows show faster particles. Filled particles belong to the warmer body, open particles to the cooler body. The circled pair has just collided: the warmer body's particle has slowed (short arrow) and the cooler body's particle has sped up (long arrow). In collisions at the boundary, energy passes on average from the faster particles to the slower ones.</figcaption>
</figure>

Inside each body, the particles keep colliding with their neighbours, so the energy gained at the boundary spreads through the cooler body, and the energy lost at the boundary is shared out across the warmer body.

This collision process has three names that mean the same thing: **heat transfer**, **heat exchange** and **transfer of energy as heat**. The amount of energy moved is given the symbol **q**. Two points about the word "heat":

- Heat is energy **on the move** because of a temperature difference. Once it has arrived, it is just part of the energy of the body that received it.
- Heat always flows, on its own, from the **warmer** body to the **cooler** body. Nothing called "cold" ever moves.

## Reaching thermal equilibrium

What happens as heat transfer continues?

1. The warmer body loses energy, so the average kinetic energy of its particles falls. Its temperature drops.
2. The cooler body gains energy, so the average kinetic energy of its particles rises. Its temperature rises.
3. The gap between the two average kinetic energies gets smaller. Collisions at the boundary now pass energy *both* ways in more similar amounts, so the **net** transfer becomes slower and slower.
4. Eventually the average kinetic energies of the two bodies become **equal**. Their temperatures are then equal too.

This final state is **thermal equilibrium**. It is a *dynamic* state:

- The particles do **not** stop moving, and they do **not** stop colliding.
- Energy still passes across the boundary in individual collisions, but the amount moving one way equals the amount moving the other way.
- So there is **no net transfer** of energy, and neither temperature changes any more.

Figure 2 shows what this looks like on a graph, using the data from Worked example 3. The warmer body cools and the cooler body warms; both curves level off at the **same** temperature, between the two starting temperatures.

<figure>
<svg viewBox="0 0 640 330" role="img" aria-labelledby="ht-fig2-title ht-fig2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ht-fig2-title">Temperature against time for a metal block in water</title>
<desc id="ht-fig2-desc">A graph with time from 0 to 10 minutes on the horizontal axis and temperature from 10 to 80 degrees Celsius on the vertical axis. A solid curve for the metal block starts at 70.0 degrees and falls quickly, then more slowly. A dashed curve for the water starts at 18.0 degrees and rises quickly, then more slowly. Both curves level off at 34.0 degrees Celsius, shown by a dotted horizontal line, by about 8 to 10 minutes.</desc>
<defs><marker id="htf2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="270" x2="615" y2="270" stroke="#1d2b44" stroke-width="2" marker-end="url(#htf2a)"/>
<line x1="80" y1="270" x2="80" y2="18" stroke="#1d2b44" stroke-width="2" marker-end="url(#htf2a)"/>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="80" y1="270" x2="80" y2="276"/><line x1="184" y1="270" x2="184" y2="276"/><line x1="288" y1="270" x2="288" y2="276"/><line x1="392" y1="270" x2="392" y2="276"/><line x1="496" y1="270" x2="496" y2="276"/><line x1="600" y1="270" x2="600" y2="276"/>
<line x1="74" y1="270" x2="80" y2="270"/><line x1="74" y1="235.7" x2="80" y2="235.7"/><line x1="74" y1="201.4" x2="80" y2="201.4"/><line x1="74" y1="167.1" x2="80" y2="167.1"/><line x1="74" y1="132.9" x2="80" y2="132.9"/><line x1="74" y1="98.6" x2="80" y2="98.6"/><line x1="74" y1="64.3" x2="80" y2="64.3"/><line x1="74" y1="30" x2="80" y2="30"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="292">0</text><text x="184" y="292">2</text><text x="288" y="292">4</text><text x="392" y="292">6</text><text x="496" y="292">8</text><text x="600" y="292">10</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="274">10</text><text x="70" y="239.7">20</text><text x="70" y="205.4">30</text><text x="70" y="171.1">40</text><text x="70" y="136.9">50</text><text x="70" y="102.6">60</text><text x="70" y="68.3">70</text><text x="70" y="34">80</text>
</g>
<text x="340" y="318" text-anchor="middle" font-size="13" fill="#1d2b44">Time (min)</text>
<text x="24" y="150" text-anchor="middle" font-size="13" fill="#1d2b44" transform="rotate(-90 24 150)">Temperature (°C)</text>
<line x1="80" y1="187.7" x2="600" y2="187.7" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<text x="604" y="183" font-size="12" fill="#1d2b44" text-anchor="end">34.0 °C (thermal equilibrium)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,64.3 93.0,86.7 106.0,105.0 119.0,120.0 132.0,132.3 145.0,142.3 158.0,150.5 171.0,157.3 184.0,162.8 197.0,167.3 210.0,171.0 223.0,174.0 236.0,176.5 249.0,178.5 262.0,180.2 275.0,181.6 288.0,182.7 301.0,183.6 314.0,184.3 327.0,185.0 340.0,185.5 353.0,185.9 366.0,186.2 379.0,186.5 392.0,186.7 405.0,186.9 418.0,187.0 431.0,187.2 444.0,187.3 457.0,187.3 470.0,187.4 483.0,187.5 496.0,187.5 509.0,187.5 522.0,187.6 535.0,187.6 548.0,187.6 561.0,187.6 574.0,187.7 587.0,187.7 600.0,187.7"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" points="80.0,242.6 93.0,232.6 106.0,224.5 119.0,217.8 132.0,212.4 145.0,207.9 158.0,204.2 171.0,201.2 184.0,198.8 197.0,196.8 210.0,195.1 223.0,193.8 236.0,192.7 249.0,191.8 262.0,191.1 275.0,190.4 288.0,190.0 301.0,189.5 314.0,189.2 327.0,188.9 340.0,188.7 353.0,188.5 366.0,188.4 379.0,188.3 392.0,188.2 405.0,188.1 418.0,188.0 431.0,188.0 444.0,187.9 457.0,187.9 470.0,187.9 483.0,187.8 496.0,187.8 509.0,187.8 522.0,187.8 535.0,187.8 548.0,187.8 561.0,187.7 574.0,187.7 587.0,187.7 600.0,187.7"/>
<g fill="#1d2b44"><circle cx="80" cy="64.3" r="4"/><circle cx="132" cy="132.2" r="4"/><circle cx="184" cy="162.7" r="4"/><circle cx="236" cy="176.4" r="4"/><circle cx="288" cy="182.6" r="4"/></g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"><rect x="76" y="238.6" width="8" height="8"/><rect x="128" y="208.4" width="8" height="8"/><rect x="180" y="194.7" width="8" height="8"/><rect x="232" y="188.9" width="8" height="8"/><rect x="284" y="186.1" width="8" height="8"/></g>
<text x="140" y="100" font-size="13" fill="#1d2b44">metal block (solid line, filled circles)</text>
<text x="130" y="255" font-size="13" fill="#1d2b44">water (dashed line, open squares)</text>
</svg>
<figcaption>Figure 2. The block cools and the water warms until both reach 34.0 °C. The curves are steep at first, when the temperature gap is large, and flatten as the gap closes. The final temperature lies between the two starting temperatures.</figcaption>
</figure>

### Energy is conserved during heat transfer

If the two bodies are insulated from everything else, no energy escapes. Every joule the warmer body loses is gained by the cooler body:

energy lost by the warmer body = energy gained by the cooler body

That is why the equilibrium temperature always lies **between** the two starting temperatures. It is not always halfway. In Figure 2 the block falls 36.0 °C but the water rises only 16.0 °C, because the two bodies need different amounts of energy to change temperature by 1 °C. Topic 6.4 turns this into a calculation.

## Same temperature, different particles

Thermal equilibrium means equal **average kinetic energy**. It does not mean equal speed, and it does not mean equal total energy.

- **Speed.** KE = ½mv². If two kinds of particle have the same average kinetic energy, the lighter ones must move faster on average. In a mixture of helium and argon at one temperature, the average kinetic energies are equal, but helium atoms (about one-tenth of the mass) move about 3.2 times faster on average.
- **Total energy.** A full swimming pool and a glass of water at the same temperature have the same average kinetic energy per particle. The pool has vastly more particles, so it has vastly more total energy. If you put them in contact, no net energy moves, because their particles are equally energetic on average.

This is the link between the two scales: temperature, a **macroscopic** reading on a thermometer, reports the **average** behaviour of the particles, not their total energy.

## Worked example 1: explaining heat transfer at the particle level

**Question.** A sealed glass bottle of juice at 5 °C is placed in a bowl of water at 40 °C. Explain, in terms of particles, why the juice warms and the water cools, and why both temperatures eventually stop changing.

1. **Compare average kinetic energies.** The water is warmer, so its molecules have a **greater average kinetic energy** than the particles of the glass and the juice.
2. **Describe the collisions.** Water molecules collide with the particles of the outside of the glass. On average, energy passes from the faster water molecules to the slower glass particles. The glass particles pass energy on, by collisions, to the juice particles inside.
3. **State the net direction.** Energy moves from the water, through the glass, into the juice. This is heat transfer. The average kinetic energy of the juice particles rises (temperature rises); that of the water molecules falls (temperature falls).
4. **Explain the end point.** As the gap in average kinetic energy narrows, the net transfer slows. When the average kinetic energies are equal, the temperatures are equal. Collisions continue, but energy passed each way is equal, so there is no net transfer: **thermal equilibrium**.

**Point to notice.** A full answer names the particles, says "average kinetic energy", says which way energy moves, and says that collisions continue at equilibrium.

## Worked example 2: comparing average kinetic energies

**Question.** A sample of nitrogen gas is warmed from 25 °C to 323 °C. (a) By what factor does the average kinetic energy of the molecules change? (b) A student says the factor is about 13. Explain the error.

1. **Convert to kelvin.** Average kinetic energy is proportional to the **Kelvin** temperature.
   - T₁ = 25 + 273.15 = 298.15 K
   - T₂ = 323 + 273.15 = 596.15 K
2. **Form the ratio.** KE₂ / KE₁ = T₂ / T₁ = 596.15 / 298.15 = 1.9995.

**Answer (a).** The average kinetic energy **doubles** (factor 2.00).

**(b)** The student divided the Celsius values: 323 / 25 = 12.9. The Celsius scale has its zero at the freezing point of water, not at zero kinetic energy, so ratios of Celsius temperatures have no physical meaning. Only the Kelvin scale starts from zero average kinetic energy.

**Check.** To *halve* the average kinetic energy from 25 °C, you would need 298.15 ÷ 2 ≈ 149.1 K, which is about −124 °C, not 12.5 °C.

## Worked example 3: reading a heating–cooling record

**Question.** A hot metal block is placed in water in an insulated container. Both temperatures are recorded (thermometers read to ±0.1 °C). The data are fictional.

| Time (min) | 0 | 1 | 2 | 3 | 4 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|---|---|
| Block (°C) | 70.0 | 50.2 | 41.3 | 37.3 | 35.5 | 34.3 | 34.1 | 34.0 |
| Water (°C) | 18.0 | 26.8 | 30.8 | 32.5 | 33.3 | 33.9 | 34.0 | 34.0 |

(a) In which direction does energy move? (b) When is thermal equilibrium reached? (c) Explain why the temperatures change quickly at first and slowly later.

1. **(a)** The block's temperature falls and the water's rises, so energy moves **from the block to the water**. The block's particles start with the greater average kinetic energy.
2. **(b)** At 8 min the readings differ by 0.1 °C, which is within the ±0.1 °C precision of the thermometers. By 10 min both read 34.0 °C. Thermal equilibrium is reached at about **8 to 10 min**, at **34.0 °C**.
3. **(c)** At the start the temperature gap is 52.0 °C, so the difference in average kinetic energy is large and much more energy passes from block to water than back. In the first minute the block falls 19.8 °C. Between 3 and 4 min the gap is under 5 °C, the two-way transfers are much closer in size, and the block falls only 1.8 °C, about 11 times less.

**Interpretation.** The record matches Figure 2: both curves flatten towards the same temperature, and that temperature lies between 18.0 °C and 70.0 °C.

## Common misconceptions

- **"Cold flows from the cold object into the warm one."** Only energy moves, and it moves from warmer to cooler.
- **"An object contains heat."** An object has energy and a temperature. Heat is the name for energy *while it is being transferred* because of a temperature difference.
- **"At thermal equilibrium the particles stop moving."** They keep moving and colliding. Only the **net** transfer stops.
- **"At equilibrium the particles in both bodies have the same speed."** They have the same **average kinetic energy**. Lighter particles move faster on average.
- **"Every particle in the hotter body is faster than every particle in the colder body."** The spreads overlap; only the averages differ.
- **"A bigger object at the same temperature will give energy to a smaller one."** Equal temperatures mean equal average kinetic energy, so there is no net transfer, whatever the sizes.
- **"The final temperature is always halfway between the two."** It is always *between* them, but where depends on how much of each substance there is and what it is (Topic 6.4).
- **Using °C in a kinetic energy ratio.** Average kinetic energy is proportional to the Kelvin temperature. Convert first.

## Where this leads

Next, [Topic 6.4](/advanced-course-resources/chemistry/6-4-heat-capacity-calorimetry-study-guide/) puts numbers on heat transfer with q = mcΔT and uses the idea "energy lost = energy gained" to analyse calorimetry experiments. Thermal equilibrium is also the assumption behind every final temperature you read in a calorimeter. Try the [practice questions](/advanced-course-resources/chemistry/6-3-heat-transfer-thermal-equilibrium-practice/) now, then use the [revision notes](/advanced-course-resources/chemistry/6-3-heat-transfer-thermal-equilibrium-revision-notes/) and the [checklist](/advanced-course-resources/chemistry/6-3-heat-transfer-thermal-equilibrium-checklist/) to consolidate.
