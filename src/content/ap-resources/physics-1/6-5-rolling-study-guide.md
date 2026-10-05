---
resourceId: "mb-ap-phys1-6.5-study-guide"
title: "Rolling: Study Guide (Physics 1 6.5)"
description: "Total kinetic energy of rolling objects, the link v = rω when rolling without slipping, why static friction does no work, and what changes when an object slips, with algebra only."
course: "physics-1"
unit: 6
topics: ["6.5"]
resourceType: "study-guide"
prerequisites:
  - "Rotational kinetic energy K = ½Iω² and total K = ½Mv_cm² + ½I_cm ω² (Topic 6.1)"
  - "Arc length and v = rω for a point on a turning body (Topic 5.2)"
  - "Conservation of mechanical energy and the work done by friction (Topics 3.2 and 3.4)"
prerequisiteResources: ["mb-ap-phys1-6.4-study-guide"]
learningObjectives:
  - "Find the total kinetic energy of an object that moves and spins as the sum of its translational and rotational kinetic energies"
  - "Use Δx_cm = rΔθ, v_cm = rω and a_cm = rα for an object rolling without slipping, and explain why the contact point is momentarily at rest"
  - "Explain why static friction does no work on an object rolling without slipping, and use conservation of energy to find speeds and heights"
  - "Predict and justify which of several rolling objects is fastest at the bottom of a ramp from how their mass is distributed"
  - "Describe in words how the speed and angular speed of a slipping object change, and why kinetic friction removes energy while it slips"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Angular speeds in rad/s. Rotational inertias of balls, discs and hoops are given in each question. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-6.5-revision-notes", "mb-ap-phys1-6.5-practice", "mb-ap-phys1-6.5-checklist"]
next: "mb-ap-phys1-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "A rolling object has two kinds of kinetic energy: K_total = ½Mv_cm² + ½I_cm ω²."
  - "Rolling without slipping links the two motions: Δx_cm = rΔθ, v_cm = rω and a_cm = rα. The contact point is momentarily at rest."
  - "In ideal rolling without slipping, static friction does no work, so mechanical energy is conserved."
  - "Objects with more of their mass far from the axis put more energy into spinning, so they roll down a ramp more slowly. Mass and radius on their own do not matter."
  - "While an object slips, v_cm and ω are not linked, and kinetic friction turns some kinetic energy into thermal energy."
faqs:
  - question: "Does a rolling ball need friction?"
    answer: "To roll without slipping on a slope or while speeding up, yes: static friction supplies the torque that changes its spin. On level ground at constant speed, an ideal rolling ball needs no friction at all."
  - question: "Do I need to know rolling resistance?"
    answer: "No. Rolling friction (the small drag from squashing of tyres or floors) is outside this course. Treat rolling objects as rigid and the surfaces as hard."
  - question: "Can I calculate exactly when a slipping ball starts to roll?"
    answer: "Not in this course. You are expected to explain in words how v_cm and ω change while an object slips. You may be given measured values before and after and asked about energy."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. It uses algebra and graphs only. It brings together two ideas from earlier in Unit 6: the total kinetic energy of something that moves and spins ([Topic 6.1](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/)), and energy and angular momentum transfer by torques ([Topics 6.2 to 6.4](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/)).

## Rolling is translation plus rotation

A bicycle wheel, a ball on a pitch or a can on a ramp does two things at once. Its **centre of mass moves** along a line, and the object **spins** about its centre of mass. So its kinetic energy has two parts:

**K_total = K_trans + K_rot = ½Mv_cm² + ½I_cm ω²**

- ½Mv_cm² is the **translational** kinetic energy: the whole mass M moving at the speed of the centre of mass.
- ½I_cm ω² is the **rotational** kinetic energy: spinning at ω about an axis through the centre of mass.

Both parts are scalars and never negative, so you add them. This is true for any moving, spinning rigid object. What makes **rolling** special is the link between v_cm and ω.

## Rolling without slipping: the link between v and ω

Paint a mark on the rim of a wheel of radius r and roll it along the floor without skidding. In one full turn, every part of the rim touches the floor once. So the wheel moves forward exactly one circumference, 2πr. In general, when the wheel turns through Δθ (in radians), its centre moves

**Δx_cm = rΔθ**

Divide by the time taken, and then do the same with changes in velocity:

**v_cm = rω  and  a_cm = rα**

These three links hold **only** for rolling without slipping. They let you swap a rotational quantity for a translational one.

### The contact point is momentarily at rest

Think of rolling as two motions added together (Figure 1):

1. **Translation:** every point of the wheel moves forward at v_cm.
2. **Rotation about the centre:** every rim point moves at rω = v_cm, along the rim. At the top that is forwards; at the bottom it is backwards.

Add them. The top of the wheel moves at v_cm + v_cm = **2v_cm**. The centre moves at **v_cm**. The bottom, where the wheel touches the floor, moves at v_cm − v_cm = **0**. The contact point does not slide over the ground. It is lifted away and replaced by the next point of the rim.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-65-add-title p1-65-add-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-65-add-title">Rolling as translation plus rotation</title>
<desc id="p1-65-add-desc">Three wheels in a row, joined by a plus sign and an equals sign. Left wheel, labelled translation: arrows of equal length pointing right at the top, the centre and the bottom, each labelled v. Middle wheel, labelled rotation about the centre: an arrow labelled v pointing right at the top, a dot with zero at the centre, and an arrow labelled v pointing left at the bottom. Right wheel, labelled rolling without slipping, resting on a ground line: an arrow twice as long labelled 2v at the top, an arrow labelled v at the centre, and a dot labelled 0 at the contact point with the ground.</desc>
<defs><marker id="p1-65-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"><circle cx="90" cy="140" r="60"/><circle cx="270" cy="140" r="60"/><circle cx="430" cy="140" r="60"/></g>
<path d="M360 200 H540" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#p1-65-arr)">
<path d="M90 80 H140"/><path d="M90 140 H140"/><path d="M90 200 H140"/>
<path d="M270 80 H320"/><path d="M270 200 H220"/>
<path d="M430 80 H530"/><path d="M430 140 H480"/>
</g>
<g fill="#1d2b44"><circle cx="270" cy="140" r="4"/><circle cx="430" cy="200" r="5"/><circle cx="90" cy="80" r="3"/><circle cx="90" cy="140" r="3"/><circle cx="90" cy="200" r="3"/><circle cx="270" cy="80" r="3"/><circle cx="270" cy="200" r="3"/><circle cx="430" cy="80" r="3"/><circle cx="430" cy="140" r="3"/></g>
<g font-size="13" fill="#1d2b44">
<text x="146" y="84">v</text><text x="146" y="144">v</text><text x="146" y="204">v</text>
<text x="326" y="84">v</text><text x="278" y="134">0</text><text x="200" y="194">v</text>
<text x="500" y="72">2v</text><text x="486" y="144">v</text><text x="440" y="222">0 (contact point)</text>
</g>
<g font-size="22" fill="#1d2b44" text-anchor="middle"><text x="180" y="148">+</text><text x="355" y="148">=</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="90" y="240">translation:</text><text x="90" y="256">every point at v</text>
<text x="270" y="240">rotation about centre:</text><text x="270" y="256">rim speed rω = v</text>
<text x="430" y="250">rolling without slipping</text>
<text x="280" y="290">v stands for v_cm. Arrow lengths show speeds; the bottom point is at rest.</text>
</g>
</svg>
<figcaption>Figure 1. Rolling without slipping is translation plus rotation about the centre, with rim speed rω equal to v_cm. The velocities add to 2v_cm at the top, v_cm at the centre and zero at the contact point.</figcaption>
</figure>

**Example.** A wheel of radius 0.35 m rolls without slipping at v_cm = 7.0 m/s. Its angular speed is ω = v_cm / r = 7.0 ÷ 0.35 = **20 rad/s**. The top of the wheel moves at **14 m/s** relative to the road, and each turn carries the wheel 2π × 0.35 = **2.2 m** forward.

## Kinetic energy of a rolling object

For rolling without slipping, replace ω with v_cm / r:

K_total = ½Mv_cm² + ½I_cm (v_cm / r)²

The rotational inertia of a round object can be written as I_cm = βMr², where β is a number set by the **shape**: how far the mass sits from the axis. You are always given I in this course. Then

**K_total = ½(1 + β)Mv_cm²**

and the fraction of the kinetic energy that is rotational is β / (1 + β):

| Object (I given as) | β | K_total | Rotational share of K |
|---|---|---|---|
| thin hoop or thin-walled pipe, Mr² | 1 | ½(2)Mv² | ½ (50%) |
| thin hollow sphere, ⅔Mr² | ⅔ | ½(5/3)Mv² | 2/5 (40%) |
| uniform disc or solid cylinder, ½Mr² | ½ | ½(1.5)Mv² | 1/3 (33%) |
| uniform solid sphere, ⅖Mr² | ⅖ | ½(1.4)Mv² | 2/7 (29%) |
| block sliding without friction | 0 | ½Mv² | 0 |

At the same speed, a hoop has twice the kinetic energy of a frictionless sliding block of the same mass. Half of its energy is in spinning.

## Friction in ideal rolling does no work

Look at a ball rolling down a ramp (Figure 2). Three forces act: gravity, the normal force and **static friction** at the contact point, pointing **up** the slope.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-65-ramp-title p1-65-ramp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-65-ramp-title">Forces on a ball rolling down a ramp without slipping</title>
<desc id="p1-65-ramp-desc">A ramp slopes down from upper left to lower right. A ball touches the ramp partway down. Three force arrows: gravity, labelled Mg, straight down from the ball's centre; the normal force, labelled F_N, from the contact point perpendicular to the ramp surface; and static friction, labelled f_s, from the contact point pointing up the slope. A dashed arrow above the ball shows its velocity down the slope, and a curved arrow shows clockwise spin. A note says the contact point is at rest, so static friction does no work. A vertical dimension line at the left marks the height h = 0.70 m and the slope length is labelled 2.0 m.</desc>
<defs><marker id="p1-65-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<polygon points="40,100 520,260 40,260" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="261" cy="137" r="35" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="261" cy="137" r="3" fill="#1d2b44"/>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#p1-65-arr2)">
<path d="M261 137 V222"/>
<path d="M250 170 L272 104"/>
<path d="M250 170 L193 151"/>
</g>
<path d="M300 66 L360 86" stroke="#1d2b44" stroke-width="2" stroke-dasharray="6 4" fill="none" marker-end="url(#p1-65-arr2)"/>
<path d="M231 118 A35 35 0 0 1 286 112" stroke="#1d2b44" stroke-width="1.5" fill="none" marker-end="url(#p1-65-arr2)" transform="translate(0 -18)"/>
<path d="M20 100 V260" stroke="#1d2b44" stroke-width="1" marker-start="url(#p1-65-arr2)" marker-end="url(#p1-65-arr2)"/>
<g font-size="12" fill="#1d2b44">
<text x="268" y="236">Mg</text>
<text x="278" y="102">F_N</text>
<text x="130" y="125">f_s (static)</text>
<text x="366" y="90">v_cm</text>
<text x="24" y="190" transform="rotate(-90 24 190)" text-anchor="middle">h = 0.70 m</text>
<text x="300" y="214" transform="rotate(18.4 300 214)">2.0 m along the slope</text>
<text x="380" y="140">Contact point at rest:</text>
<text x="380" y="156">f_s does no work, so</text>
<text x="380" y="172">Mgh = ½Mv² + ½Iω²</text>
</g>
</svg>
<figcaption>Figure 2. A ball rolling down a ramp without slipping (Worked example 1). Static friction acts up the slope at the contact point. Its torque about the centre speeds up the spin, but it does no work because the contact point is not moving.</figcaption>
</figure>

Work needs a force whose point of application **moves**. In rolling without slipping, the contact point is at rest at every instant (Figure 1). So the static friction force does **no work** on the rolling object, and it dissipates no energy. For an ideal rolling object, mechanical energy is conserved:

**Mgh = ½Mv_cm² + ½I_cm ω²**

So what does friction do? Two things at once, with no net energy change:

- Its torque about the centre **speeds up the spin**, adding rotational kinetic energy.
- Pointing up the slope, it **reduces the acceleration** of the centre of mass, so less energy goes into translation.

The two effects exactly balance. Friction does not remove energy from the object; it **shares** the energy from gravity between translation and rotation.

The size of static friction is whatever is needed to keep the contact point from sliding, up to a maximum of μ_s F_N. You do not use f = μ_s F_N unless the object is on the point of slipping.

### The ramp race

With K_total = ½(1 + β)Mv² and Mgh lost as potential energy:

**v_bottom = √(2gh / (1 + β))**

M and r have cancelled. Two solid cylinders of different sizes and masses reach the bottom at the **same** speed. Only the **shape**, through β, matters. For a 0.70 m drop:

| Object | v at bottom (m/s) |
|---|---|
| block sliding without friction (β = 0) | 3.70 |
| solid sphere (β = ⅖) | 3.13 |
| solid cylinder (β = ½) | 3.02 |
| hollow sphere (β = ⅔) | 2.87 |
| hoop (β = 1) | 2.62 |

The acceleration along a ramp at angle θ follows from v² = 2ad, with h = d sin θ:

**a_cm = g sin θ / (1 + β)**

It is constant, so the object with the larger speed at the bottom also gets there **first**. The lower β, the faster.

## Rolling while slipping

If the contact point slides, the object is **slipping** (or skidding). Then:

- v_cm and ω are **not** linked: v_cm ≠ rω. Each changes in its own way.
- The friction is **kinetic**. Its point of application moves over the surface, so kinetic friction **does dissipate energy**: some kinetic energy becomes thermal energy.

Two common cases:

1. **Sliding too fast for its spin (v_cm > rω).** A ball pushed along a lane with no spin. The bottom of the ball slides forwards, so kinetic friction acts backwards. It slows the centre of mass, and its torque increases the spin. Once v_cm has fallen and ω has risen until v_cm = rω, the slipping stops and the ball rolls.
2. **Spinning too fast for its speed (rω > v_cm).** A car wheel spinning on ice, or a hoop set down while spinning. The bottom of the wheel slides backwards, so kinetic friction acts forwards. It speeds up the centre of mass and its torque reduces the spin, until v_cm = rω.

In both cases, friction always opposes the **sliding of the contact point**, and the object ends up rolling without slipping. The exact values while slipping are beyond this course. You must be able to explain the changes in words, and you may be given measured values to work with (Worked example 3).

Rolling friction, the small loss from tyres or floors squashing, is also outside the course. Treat objects as rigid and surfaces as hard.

## Worked example 1: a ball rolls down a ramp

**Question.** A solid rubber ball of mass 0.50 kg and radius 0.040 m has I_cm = ⅖Mr². It is released from rest at the top of the 2.0 m ramp in Figure 2, and its centre drops 0.70 m. It rolls without slipping. Find (a) its speed and angular speed at the bottom, (b) how its kinetic energy is shared, and (c) its acceleration and the time it takes.

1. **System:** ball + Earth. Static friction does no work and the normal force is perpendicular to the motion, so mechanical energy is conserved.
2. **Energy:** Mgh = ½(1 + ⅖)Mv². Mass cancels: v = √(2gh / 1.4) = √(2 × 9.8 × 0.70 ÷ 1.4) = √9.8 = **3.13 m/s**.
3. **Angular speed:** ω = v / r = 3.13 ÷ 0.040 = **78 rad/s**.
4. **Sharing:** Mgh = 0.50 × 9.8 × 0.70 = 3.43 J. Translational: ½ × 0.50 × 3.13² = **2.45 J**. Rotational: the rest, **0.98 J**, which is 2/7 of the total, as the table says.
5. **Acceleration:** sin θ = 0.70 ÷ 2.0 = 0.35, so a = g sin θ / 1.4 = 9.8 × 0.35 ÷ 1.4 = **2.45 m/s²**. Check: v² / (2d) = 9.8 ÷ 4.0 = 2.45 m/s². ✓
6. **Time:** t = v / a = 3.13 ÷ 2.45 = **1.28 s**.

**Comparison.** A block sliding down the same ramp without friction reaches √(2gh) = 3.70 m/s. The ball is slower because 0.98 J of the 3.43 J went into spinning.

## Worked example 2: how high does a rolling hoop climb?

**Question.** An object with I_cm = βMr² rolls without slipping along level ground at speed v, then up a ramp. (a) Derive the greatest height h its centre rises. (b) Evaluate h for a hoop (β = 1) at v = 3.0 m/s and compare with a block sliding up a frictionless ramp at the same speed.

1. **(a)** Mechanical energy is conserved because static friction does no work. At the top of its climb the object is momentarily at rest, so **both** kinds of kinetic energy are zero there: ½(1 + β)Mv² = Mgh.
2. Rearrange: **h = (1 + β)v² / (2g)**.
3. **(b)** Hoop: h = 2 × 3.0² ÷ (2 × 9.8) = **0.92 m**. Block: h = 3.0² ÷ (2 × 9.8) = **0.46 m**.

**Interpretation.** The hoop climbs twice as high. Its rotational kinetic energy is not "stuck" in the spin: as the hoop slows, static friction's torque slows the spin too, and that energy also becomes gravitational potential energy. On a **frictionless** ramp the hoop could not do this. It would keep spinning at the top and rise only 0.46 m.

**Check.** If β = 0, the result becomes v² / (2g), the familiar sliding-block answer. Limiting cases like this are a quick test of any derived expression.

## Worked example 3: a spinning hoop set down on the floor

**Question.** A hoop of mass 0.50 kg and radius 0.20 m (I = Mr² = 0.020 kg·m²) is spun at 30 rad/s about its centre and set down gently on a level floor, with its centre at rest. It skids, then rolls. Measurements show it finally rolls without slipping at v_cm = 3.0 m/s. (a) Describe how v_cm and ω change while it slips. (b) Find the energy dissipated.

1. **(a)** At first v_cm = 0 but the rim moves at rω = 6.0 m/s, so the contact point slides **backwards** over the floor. Kinetic friction on the hoop points **forwards**. That force speeds up the centre of mass. Its torque about the centre opposes the spin, so ω decreases. Slipping stops when v_cm = rω.
2. **Final state:** ω = v / r = 3.0 ÷ 0.20 = **15 rad/s**.
3. **(b)** Before: K = ½Iω² = ½ × 0.020 × 30² = **9.0 J**, all rotational.
4. After: K = ½Mv² + ½Iω² = ½ × 0.50 × 3.0² + ½ × 0.020 × 15² = 2.25 + 2.25 = **4.5 J**.
5. Energy dissipated by kinetic friction = 9.0 − 4.5 = **4.5 J**, half the starting energy, now thermal energy in the hoop and floor.

**Why only during slipping?** While the contact point slides, the friction force acts on a surface that moves under it, so it dissipates energy. Once rolling begins, the contact point is at rest, friction stops dissipating energy, and on a level floor the hoop rolls on at 3.0 m/s.

## Common misconceptions

- **"Friction always takes energy away."** Static friction on an object rolling without slipping does no work (Figure 2). Only kinetic friction during slipping dissipates energy (Worked example 3).
- **"A heavier ball rolls down faster."** Mass cancels. So does radius. Only the shape factor β matters.
- **"The bottom of a rolling wheel moves backwards at v."** Relative to the ground it is momentarily at rest. The top moves at 2v_cm (Figure 1).
- **"Use v = rω whenever something spins and moves."** Only when it rolls without slipping. A skidding wheel has v_cm ≠ rω.
- **"Friction on a rolling ball always points backwards."** A ball rolling **up** a ramp also feels static friction up the slope, which is forwards along its motion. A wheel spinning too fast feels kinetic friction forwards. On level ground at constant speed, ideal rolling needs no friction at all. Friction acts in whatever direction stops (or opposes) sliding of the contact point.
- **Forgetting the rotational kinetic energy.** Writing Mgh = ½Mv² for a ball gives the sliding-block speed, which is too high.
- **"Conservation of energy" as a full justification.** Say why: which energy goes into rotation, why that leaves less for translation, and why friction does no work.

## Where this leads

Topic 6.6 (Motion of Orbiting Satellites) applies the same conservation laws, energy and angular momentum, to a satellite moving under gravity alone. Read the [Topic 6.6 study guide](/advanced-course-resources/physics-1/6-6-motion-orbiting-satellites-study-guide/) next. First, try the [practice questions](/advanced-course-resources/physics-1/6-5-rolling-practice/), then use the [revision notes](/advanced-course-resources/physics-1/6-5-rolling-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/6-5-rolling-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
