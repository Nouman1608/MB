---
resourceId: "mb-ap-phys2-9.6-study-guide"
title: "Entropy and the Second Law of Thermodynamics: Study Guide (Physics 2 9.6)"
description: "Learn what entropy means, why the total entropy of an isolated system never decreases, why systems move toward equilibrium and how a closed system's entropy can fall."
course: "physics-2"
unit: 9
topics: ["9.6"]
resourceType: "study-guide"
prerequisites:
  - "Net energy flows spontaneously from a hotter system to a colder one (Topic 9.3)"
  - "The first law ΔU = Q + W, with W as the work done on the gas (Topic 9.4)"
  - "Q = mcΔT and thermal equilibrium calculations (Topic 9.5)"
prerequisiteResources: ["mb-ap-phys2-9.5-study-guide"]
learningObjectives:
  - "Describe entropy as a measure of how spread out a system's energy is, and of how much of that energy cannot be used to do work"
  - "State the second law for an isolated system and use it to predict which way a spontaneous process goes"
  - "Explain why entropy is a state function, so its change depends only on the start and end states"
  - "Explain why an isolated system moves toward thermodynamic equilibrium, where its entropy is greatest"
  - "Explain how the entropy of a closed system can decrease when energy leaves it, while total entropy still does not decrease"
  - "Tell reversible (idealised) processes from irreversible (real) ones by what happens to total entropy"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Entropy is treated qualitatively in this course and is never calculated. Numbers appear only in energy steps (Q = mcΔT, ΔU = Q + W). R = 8.31 J/(mol·K)"
related: ["mb-ap-phys2-9.6-revision-notes", "mb-ap-phys2-9.6-practice", "mb-ap-phys2-9.6-checklist"]
next: "mb-ap-phys2-9.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Entropy describes how spread out energy is. The more spread out, the higher the entropy and the less of the energy can do useful work."
  - "Second law: the total entropy of an isolated system never decreases. It stays constant only if every process is reversible; real processes make it increase."
  - "Entropy is a state function: ΔS between two states is the same for every path, and ΔS = 0 for a system that completes a cycle."
  - "An isolated system moves by itself toward thermodynamic equilibrium, where its entropy is at its maximum."
  - "A closed system's entropy can decrease when energy leaves it, as when water freezes. The surroundings gain more entropy than the system loses."
faqs:
  - question: "Do I need to calculate entropy in this course?"
    answer: "No. The course treats the second law only qualitatively. You must say whether entropy increases, decreases or stays the same, and justify it. Calculations in this topic are energy calculations from earlier topics."
  - question: "Does a refrigerator break the second law?"
    answer: "No. The food or water inside is a closed system, and its entropy can fall because energy leaves it. The refrigerator gives even more energy to the room, so the entropy of the room rises by more. The total entropy still increases."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Which way do things happen?

Drop a ball on the floor. It bounces lower each time and then stops. Its kinetic energy has not disappeared. It has become random motion of the atoms in the ball, the floor and the air, so they are very slightly warmer. Energy is conserved.

Now imagine the film run backwards. The floor and air cool slightly, and the ball jumps up off the floor by itself. Energy would still be conserved, so the first law does not forbid it. But you never see it happen.

You met the same pattern in Topic 9.3. Net energy flows by itself from a hotter object to a colder one, never the other way. The first law says how much energy moves. It does not say which way things go. The **second law of thermodynamics** answers that question, using a quantity called **entropy**, symbol S.

## Entropy: how spread out the energy is

In this course you describe entropy in words, not with a formula. Two descriptions go together.

1. **Entropy measures how spread out energy is.** Energy that is concentrated in one place (a hot spot, a moving ball, a squeezed gas) tends to spread out among more particles and more space. When it spreads, entropy rises.
2. **Entropy measures how much energy is unavailable to do work.** Concentrated energy can be used. A hot gas next to a cold one can drive an engine. Once the energy has spread out evenly, the same amount of energy is still there, but it can no longer be used to do work.

Some examples of energy spreading by itself:

- A drop of hot water in a cold bath. The extra energy spreads through the whole bath.
- One end of a metal rod is heated. The energy spreads along the rod until it is at one temperature.
- A gas in one half of a box, with the other half empty. Remove the divider and the gas fills the whole box.

### Background model: counting arrangements

This model goes beyond what the course asks, but it shows **why** spreading wins. Put 4 gas particles in a box with a left half and a right half. Each particle can be on either side, so there are 2⁴ = 16 equally likely arrangements.

| Particles on the left | 4 | 3 | 2 | 1 | 0 |
|---|---|---|---|---|---|
| Number of arrangements | 1 | 4 | 6 | 4 | 1 |

All 4 on the left happens in only 1 arrangement out of 16 (6.25% of the time). An even 2–2 split happens in 6 out of 16 (37.5%). With 10 particles, all on the left has a chance of about 0.1% (1 in 1024). With 100 particles, it is about 8 × 10⁻³¹. A litre of air at room conditions holds about 2.5 × 10²² particles, so "all on one side" never happens. The spread-out states have overwhelmingly more arrangements, so the system ends up in them. Higher entropy means more ways to share out the energy and the particles.

## Entropy is a state function

Entropy belongs to the **state** of a system, like internal energy U does. If you know the state (for a fixed amount of gas: its pressure, volume and temperature), the entropy is fixed. It does not matter how the system got there.

Two consequences follow:

- **ΔS depends only on the start and end states.** Two different paths between the same states give the same ΔS for the system. (Compare Q and W, which depend on the path.)
- **Around a complete cycle, ΔS_system = 0.** The system returns to its starting state, so its entropy returns to its starting value. This is just like ΔU_cycle = 0 in Topic 9.4.

Careful: the system's ΔS is path-independent, but the **surroundings** can be affected differently by different paths. Worked example 2 shows this.

## The second law

An **isolated system** exchanges no energy and no matter with anything outside it. For such a system:

**The total entropy of an isolated system never decreases. It stays constant only if every process inside it is reversible.**

- A **reversible process** is an idealised limit. It happens so slowly, with no friction and no heating across a finite temperature difference, that it could be run backwards with only a tiny change. Total entropy stays constant.
- Every **real process** is **irreversible**: friction, fast expansion, mixing, or heating from hot to cold. Total entropy increases.

So for an isolated system, ΔS_total ≥ 0, with the equals sign only in the ideal reversible limit. A process that would lower the total entropy of an isolated system does not happen. That is why the film of the bouncing ball looks wrong when it is run backwards.

## Thermodynamic equilibrium is maximum entropy

Left alone, an isolated system moves **spontaneously** toward **thermodynamic equilibrium**: one temperature throughout, one pressure, no net flows. Along the way its entropy rises. At equilibrium the entropy has reached its **maximum** value, so there is nothing left for it to increase toward. The system stays there. The particles still move and collide, but nothing changes on a large scale.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="s-time-title s-time-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="s-time-title">Total entropy of an isolated system against time</title>
<desc id="s-time-desc">Time on the horizontal axis, total entropy of an isolated system on the vertical axis, no numerical scale. A solid curve labelled real, irreversible process starts at a low value, rises steeply at first and then levels off at a maximum, marked by a dotted horizontal line labelled maximum entropy, equilibrium. A dashed horizontal line starting at the same point stays at the starting value and is labelled reversible limit, total entropy constant. No curve goes below the starting value.</desc>
<defs><marker id="st-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#st-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#st-arr)"/>
<text x="300" y="370" font-size="13" fill="#1d2b44" text-anchor="middle">Time</text>
<text x="34" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 34 200)">Total entropy S of the isolated system</text>
<line x1="80" y1="110" x2="520" y2="110" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<text x="515" y="100" font-size="12" fill="#1d2b44" text-anchor="end">maximum entropy: equilibrium</text>
<polyline points="80.0,280.0 91.0,260.0 102.0,242.4 113.0,226.8 124.0,213.1 135.0,201.0 146.0,190.3 157.0,180.9 168.0,172.5 179.0,165.2 190.0,158.7 201.0,153.0 212.0,147.9 223.0,143.5 234.0,139.5 245.0,136.1 256.0,133.0 267.0,130.3 278.0,127.9 289.0,125.8 300.0,124.0 311.0,122.3 322.0,120.9 333.0,119.6 344.0,118.5 355.0,117.5 366.0,116.6 377.0,115.8 388.0,115.1 399.0,114.5 410.0,114.0 421.0,113.5 432.0,113.1 443.0,112.7 454.0,112.4 465.0,112.1 476.0,111.9 487.0,111.7 498.0,111.5 509.0,111.3 520.0,111.1" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="300" y="150" font-size="12" fill="#1d2b44">real, irreversible process (solid)</text>
<line x1="80" y1="280" x2="520" y2="280" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<text x="300" y="302" font-size="12" fill="#1d2b44" text-anchor="middle">reversible limit: total entropy constant (dashed)</text>
<text x="300" y="325" font-size="12" fill="#1d2b44" text-anchor="middle">no allowed path goes below the starting value</text>
</svg>
<figcaption>Figure 1. Total entropy of an isolated system over time. A real (irreversible) process raises S until equilibrium, where S is at its maximum and stops changing (solid curve). In the ideal reversible limit S stays constant (dashed line). A falling total entropy would break the second law.</figcaption>
</figure>

## Isolated systems and closed systems

The second law is about the **total** entropy of an **isolated** system. A smaller system inside it can behave differently.

A **closed system** exchanges energy with its surroundings but no matter. The change in its entropy depends on how it interacts with its surroundings:

- If energy enters the system by heating, its entropy rises.
- If energy leaves it by heating (it is cooled), its entropy **can decrease**.

So the entropy of a closed system can go down. This does not break the second law, because the surroundings gain at least as much entropy as the system loses. Draw the boundary around the system **and** its surroundings, and that larger isolated system has ΔS_total ≥ 0.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="frz-title frz-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="frz-title">System boundaries for water freezing in a freezer</title>
<desc id="frz-desc">A large dashed rectangle is labelled isolated system: water, freezer, room and power supply. Inside it, a solid rectangle labelled freezer contains a smaller thick rectangle labelled water turning to ice, closed system, entropy decreases. An arrow labelled energy out by cooling goes from the water to the freezer. A second arrow, labelled more energy to the room, goes from the freezer to the room air, which is labelled entropy increases by more. A third arrow labelled work goes from a box labelled power supply into the freezer. A note at the bottom says total entropy of the isolated system increases.</desc>
<defs><marker id="frz-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="15" y="15" width="530" height="300" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<text x="30" y="38" font-size="13" font-weight="600" fill="#1d2b44">Isolated system: water + freezer + room + power supply</text>
<rect x="45" y="70" width="240" height="180" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="165" y="92" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">Freezer</text>
<rect x="65" y="140" width="130" height="80" fill="#ffffff" stroke="#1d2b44" stroke-width="3"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="130" y="160">Water → ice</text>
<text x="130" y="178">(closed system)</text>
<text x="130" y="200">S decreases</text>
</g>
<line x1="195" y1="180" x2="270" y2="180" stroke="#1d2b44" stroke-width="2" marker-end="url(#frz-arr)"/>
<text x="232" y="132" font-size="11" fill="#1d2b44" text-anchor="middle">energy out</text>
<text x="232" y="146" font-size="11" fill="#1d2b44" text-anchor="middle">by cooling</text>
<line x1="285" y1="120" x2="390" y2="120" stroke="#1d2b44" stroke-width="2" marker-end="url(#frz-arr)"/>
<text x="338" y="110" font-size="11" fill="#1d2b44" text-anchor="middle">more energy to room</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="460" y="105">Room air</text>
<text x="460" y="123">S increases</text>
<text x="460" y="141">by more</text>
</g>
<rect x="360" y="200" width="150" height="45" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="435" y="227" font-size="12" fill="#1d2b44" text-anchor="middle">Power supply</text>
<line x1="360" y1="222" x2="290" y2="222" stroke="#1d2b44" stroke-width="2" marker-end="url(#frz-arr)"/>
<text x="325" y="212" font-size="11" fill="#1d2b44" text-anchor="middle">work</text>
<text x="280" y="290" font-size="13" fill="#1d2b44" text-anchor="middle">Total entropy of the isolated system increases.</text>
</svg>
<figcaption>Figure 2. Choosing the system. The water (thick outline) is a closed system: energy leaves it, and its entropy falls as it freezes. The freezer passes this energy, plus the work from the power supply, to the room, whose entropy rises by more. The dashed boundary encloses an isolated system, and its total entropy increases.</figcaption>
</figure>

Other everyday examples of a closed system whose entropy falls: a cup of tea cooling on a table, steam condensing on a cold window, a gas compressed slowly while in contact with cool surroundings. In each case energy leaves the system and the surroundings gain more entropy than the system loses.

### Background: why no engine turns all its heating into work

The 9.4 cycles showed an engine taking in energy by heating and doing work. The second law adds a limit. In a cycle the engine's working gas returns to its start, so ΔS_gas = 0. Taking energy from the hot source lowers the hot source's entropy. Work done on something (such as lifting a weight) does not spread energy out, so it cannot make up for that loss. The only way to keep the total entropy from falling is to give **some** energy to a colder place, where it raises the entropy. So no engine can turn all of the energy it takes in into work. You will not be asked to calculate this, but you may be asked to explain it.

## Worked example 1: two blocks reach equilibrium

**Question.** Block A (0.50 kg, specific heat 900 J/(kg·K), 80 °C) and block B (1.5 kg, specific heat 400 J/(kg·K), 20 °C) are placed in contact inside an insulated box. Treat the box and the blocks as an isolated system. (a) Find the final temperature and the energy transferred. (b) Describe the entropy change of A, of B and of the whole system. (c) Explain why the reverse process is never observed.

1. (a) Heat capacities: m_A c_A = 0.50 × 900 = 450 J/K; m_B c_B = 1.5 × 400 = 600 J/K.
2. Isolated system, so energy lost by A = energy gained by B: 450(80 − T_f) = 600(T_f − 20).
3. Solve: T_f = (450 × 80 + 600 × 20) ÷ (450 + 600) = 48 000 ÷ 1050 = 45.7 °C.
4. Energy transferred from A to B: 450 J/K × (80 − 45.71) K = 1.54 × 10⁴ J. Check: 600 J/K × (45.71 − 20) K = 1.54 × 10⁴ J.
5. (b) A is cooled, so its entropy **decreases**. B is heated, so its entropy **increases**. The process is spontaneous and irreversible (heating across a temperature difference) in an isolated system, so the **total entropy increases**. That tells you B's increase is larger than A's decrease.
6. (c) Running it backwards (A heating back up to 80 °C, B cooling to 20 °C) conserves energy. But it would lower the total entropy of an isolated system, so the second law rules it out.

**Answer.** T_f = 45.7 °C (46 °C to 2 significant figures); 1.5 × 10⁴ J moves from A to B. S_A falls, S_B rises by more, S_total rises.

**Interpretation.** Before contact, the temperature difference could have run a small engine. After equilibrium, the total energy is the same but none of it is available to do work. The entropy is now at its maximum, and nothing more happens.

## Worked example 2: same end states, different paths

**Question.** 0.040 mol of an ideal gas at 300 K has volume 1.0 × 10⁻³ m³. It ends at 300 K with volume 2.0 × 10⁻³ m³. Compare two paths. Path 1: a slow isothermal expansion against a piston, in contact with a large reservoir at 300 K; the gas does 69 J of work on the piston (the area under the isotherm). Path 2: a free expansion; a divider is removed in an insulated container and the gas rushes into an empty second chamber.

1. Start and end states. Initial pressure: P = nRT/V = (0.040)(8.31)(300) ÷ (1.0 × 10⁻³) = 9.97 × 10⁴ Pa. Final pressure: 4.99 × 10⁴ Pa. Both paths join the same two states.
2. Path 1, first law: T is constant, so ΔU = 0. W = −69 J (the gas expands), so Q = −W = +69 J. Energy enters the gas from the reservoir.
3. Path 2, first law: insulated, so Q = 0. Nothing pushes back, so W = 0. Then ΔU = 0 and T stays 300 K.
4. Entropy of the gas: it ends spread over twice the volume, so S_gas **increases**. Entropy is a state function, so ΔS_gas is **the same** for both paths.
5. Surroundings, path 1: the reservoir loses 69 J by heating, so its entropy **decreases**. In the ideal slow limit the process is reversible: the reservoir's decrease equals the gas's increase, and ΔS_total = 0.
6. Surroundings, path 2: nothing outside the container changes. So ΔS_total = ΔS_gas > 0. The free expansion is irreversible.

**Answer.** ΔU = 0 and the same ΔS_gas > 0 for both paths. Q and W differ (+69 J and −69 J for path 1; zero for path 2). Total entropy is constant for path 1 (ideal limit) and increases for path 2.

**Check.** The gas never gathers back into one chamber by itself. That would lower the entropy of an isolated system. You can push it back with a piston, but to keep it at 300 K, energy must leave the gas by heating while it is compressed: its entropy falls and the surroundings' entropy rises by at least as much.

## Common misconceptions

- **"Entropy always increases."** Only the total entropy of an isolated system never decreases. A closed system's entropy can fall when energy leaves it (freezing water, a cooling cup).
- **"The second law is about how much energy there is."** Energy is conserved in every process. The second law is about the direction of change and about how usable the energy is.
- **"Entropy just means messiness."** "Disorder" is a loose picture that often misleads. Think of how spread out the energy and particles are, and how many ways there are to arrange them.
- **"ΔS depends on the path, like Q and W."** Entropy is a state function. The system's ΔS depends only on the start and end states. What changes between paths is the effect on the surroundings.
- **"Reversible means it can be undone."** Almost anything can be undone with outside help. Reversible means total entropy stays constant. It is an ideal limit that real processes only approach.
- **"Energy can never move from cold to hot."** It can, if work is done, as in a freezer. It never happens **spontaneously**.
- **"At equilibrium, nothing moves."** The particles keep moving. There is no net large-scale change because the entropy is already at its maximum.
- **"A free expansion has no entropy change because Q = 0."** No energy enters by heating, but the gas spreads into more space, so its entropy increases.

## Where this leads

This is the last topic of Unit 9. The first law (Topic 9.4) tells you how much energy moves; the second law tells you which way things go and how much of the energy stays usable. Test yourself with the [practice questions](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-practice/), then use the [revision notes](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/9-6-entropy-second-law-thermodynamics-checklist/) to consolidate. The previous topic, [specific heat and thermal conductivity](/advanced-course-resources/physics-2/9-5-specific-heat-thermal-conductivity-study-guide/), gives you Q = mcΔT for the energy steps here. Next, Unit 10 moves on to electric force, field and potential: see the [course roadmap](/advanced-course-resources/physics-2/#roadmap).
