---
resourceId: "mb-ap-phys1-3.5-study-guide"
title: "Power: Study Guide (Physics 1 3.5)"
description: "Power as the rate of energy transfer or conversion: average power from energy or work over time, instantaneous power P = F∥v, energy–time and power–time graphs, and top speed, with algebra only."
course: "physics-1"
unit: 3
topics: ["3.5"]
resourceType: "study-guide"
prerequisites:
  - "Work done by a constant force, W = Fd cos θ (Topic 3.2)"
  - "Kinetic and gravitational potential energy, K = ½mv² and ΔU_g = mgΔy (Topics 3.1 and 3.3)"
  - "Choosing a system and tracking energy into, out of and within it (Topic 3.4)"
prerequisiteResources: ["mb-ap-phys1-3.4-study-guide"]
learningObjectives:
  - "Describe energy moving into, out of or within a system as a rate, and say which way the energy flows"
  - "Calculate average power from an energy change or from the work done over a time interval"
  - "Derive and use P = F∥v for the instantaneous power delivered by a constant force, using only the force component along the velocity"
  - "Read power from the slope of an energy–time graph and energy from the area under a power–time graph"
  - "Plan a measurement of power and use data to support or challenge a claim about it"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², as on the course equation table. Answers to 2 or 3 significant figures"
related: ["mb-ap-phys1-3.5-revision-notes", "mb-ap-phys1-3.5-practice", "mb-ap-phys1-3.5-checklist"]
next: "mb-ap-phys1-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Power is the rate at which energy is transferred into or out of a system, or converted from one form to another inside it. Unit: the watt, 1 W = 1 J/s."
  - "Average power is P_avg = ΔE / Δt. Because work is energy transferred by a force, P_avg = W / Δt as well."
  - "The instantaneous power delivered by a constant force is P = F∥v = Fv cos θ. Only the force component along the velocity counts."
  - "On an energy–time graph, the slope is the power. On a power–time graph, the area is the energy transferred."
  - "More power does not mean more energy. Power tells you how fast; energy tells you how much."
faqs:
  - question: "Is a kilowatt-hour a unit of power?"
    answer: "No. A kilowatt-hour is an amount of energy: 1 kW kept up for 1 hour, which is 1000 J/s × 3600 s = 3.6 × 10⁶ J. Power is measured in watts or kilowatts."
  - question: "Can power be negative?"
    answer: "Yes. The power of a force is negative when the force component along the velocity points backwards, so the force takes energy out of the object. Kinetic friction on a sliding block is the usual example."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. Topics 3.1–3.4 told you **how much** energy moves into, out of or around a system. This topic asks **how fast**. No calculus is needed.

## Power is a rate

Two motors each lift a load and give it 2000 J of gravitational potential energy. One takes 4.0 s; the other takes 10 s. They transfer the same energy, but the first one does it faster. We say it has more **power**.

**Power** is the rate at which energy changes. That change can happen in two ways:

1. **Transfer across the system boundary.** A force from outside the system does work on it, and energy goes in (positive work) or out (negative work).
2. **Conversion inside the system.** Energy changes form without leaving, for example kinetic energy turning into internal (thermal) energy when two surfaces in the system rub.

So always start the same way as in Topic 3.4: **choose the system**. Then say whether the energy is crossing the boundary or changing form inside it.

The unit of power is the **watt**: 1 W = 1 J/s. In the example, the first motor delivers 2000 J ÷ 4.0 s = **500 W**; the second delivers 2000 J ÷ 10 s = **200 W**. A kilowatt (kW) is 1000 W.

## Average power

Averages use only the start and end of a time interval:

**P_avg = ΔE / Δt**

Here ΔE is the energy transferred or converted during Δt. Work is energy transferred by a force (Topic 3.2), so you can also write:

**P_avg = W / Δt**

Use the second form when you know the work done by one force. Use the first form when it is easier to track an energy store, such as the rise in gravitational potential energy of a lifted load.

Be careful with **"how much" versus "how fast"**. A small motor running for a long time can transfer more energy than a powerful one running briefly. Electricity bills use the **kilowatt-hour**: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J. It is an energy unit, not a power unit.

## Instantaneous power: P = F∥v

Suppose a constant force F acts on an object while it moves a short distance Δx along a straight line. The angle between the force and the displacement is θ. From Topic 3.2, the work is W = F Δx cos θ. Divide both sides by the short time Δt:

P = W / Δt = F cos θ × (Δx / Δt)

When Δt is very short, Δx / Δt is the instantaneous velocity v (Topic 1.2). So:

**P = F∥v = Fv cos θ**

where F∥ = F cos θ is the component of the force **parallel to the velocity**. Three cases follow at once:

| Angle between F and v | cos θ | Power of that force |
|---|---|---|
| 0° (force along the motion) | 1 | P = Fv, positive: energy goes in |
| 90° (force at right angles) | 0 | P = 0: no energy transferred |
| 180° (force against the motion) | −1 | P = −Fv, negative: energy comes out |

The normal force on a car on a level road, and the tension in a string whirling a ball in a horizontal circle (Topic 2.9), are at 90° to the velocity. Their power is zero at every instant, so they never change the object's kinetic energy.

The course uses P = F∥v for a **constant force**. If the speed changes, the power changes too, even though the force does not. Worked example 3 shows this.

## Reading graphs of energy and power

The graph links are the same as in kinematics, with energy playing the part of position and power the part of velocity.

- The **slope of an energy–time graph** is the power. A straight section means constant power. A flat section means zero power.
- The **area under a power–time graph** is the energy transferred. Area below the time axis (negative power) means energy leaving.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-35-ut-title p1-35-ut-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-35-ut-title">Energy–time graph for a crate lifted by a winch</title>
<desc id="p1-35-ut-desc">Gravitational potential energy of the crate–Earth system, in kilojoules from 0 to 12, against time in seconds from 0 to 30. A straight line rises from 0 at t = 0 to 10.0 kJ at t = 20 s; its slope, 10.0 kJ divided by 20 s, is about 500 W. From 20 s to 30 s the line is flat at 10.0 kJ, meaning zero power while the crate is held at rest.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M220 290 V50 M370 290 V50 M520 290 V50"/>
<path d="M70 210 H520 M70 130 H520 M70 50 H520"/>
</g>
<path d="M70 290 H530 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="220" y="308">10</text><text x="370" y="308">20</text><text x="520" y="308">30</text>
<text x="295" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="214">4</text><text x="62" y="134">8</text><text x="62" y="54">12</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">gravitational PE, U_g (kJ)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,290 370,90 520,90"/>
<path d="M70 290 H370 V90" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<circle cx="370" cy="90" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="200" y="282" font-size="12" fill="#1d2b44">run = 20 s</text>
<text x="378" y="200" font-size="12" fill="#1d2b44">rise = 10.0 kJ</text>
<text x="100" y="120" font-size="12" fill="#1d2b44">rising: slope ≈ 500 W</text>
<text x="380" y="78" font-size="12" fill="#1d2b44">flat: power = 0</text>
<text x="380" y="62" font-size="12" fill="#1d2b44">(crate held at rest)</text>
</svg>
<figcaption>Figure 1. Energy–time graph for Worked example 1. While the winch lifts the crate at constant speed, U_g rises by 10.0 kJ in 20 s: slope ≈ 500 W. When the crate is held still, the line is flat and the power is zero, even though the cable still pulls.</figcaption>
</figure>

## Worked example 1: a winch lifting a crate

**Question.** An electric winch lifts an 85 kg crate 12 m straight up at constant speed in 20 s. Find the average power the cable delivers, first from energy and then from P = Fv. Take **+y upward**.

1. **System:** crate and Earth. The cable is outside the system, so its work is energy transferred in.
2. **Energy change:** the speed is constant, so ΔK = 0. ΔU_g = mgΔy = 85 kg × 9.8 m/s² × 12 m = 9996 J ≈ **1.0 × 10⁴ J**.
3. **Average power:** P_avg = ΔE / Δt = 9996 J ÷ 20 s ≈ **5.0 × 10² W** (500 W).
4. **Check with P = Fv.** At constant speed the net force is zero, so the cable tension equals the weight: F = mg = 833 N, upward. The speed is v = 12 m ÷ 20 s = 0.60 m/s, also upward, so θ = 0. P = 833 N × 0.60 m/s ≈ **500 W**.

**Interpretation.** Both routes agree, as they must. The force and speed are constant here, so the instantaneous power equals the average power at every moment.

## Worked example 2: pulling a sled at an angle

**Question.** A child pulls a sled across level snow at a steady 1.5 m/s. The rope tension is 60 N, at 30° above the horizontal. Take **+x in the direction of motion**. (a) At what rate does the rope transfer energy to the sled? (b) At what rate does friction remove kinetic energy? (c) Where does that energy go?

1. **(a)** Only the component of the tension along the velocity counts: F∥ = 60 N × cos 30° = 52.0 N. P_rope = F∥v = 52.0 N × 1.5 m/s = **78 W**.
2. **(b)** The speed is constant, so the net horizontal force is zero. Kinetic friction is therefore 52.0 N, pointing in −x. It acts at 180° to the velocity: P_friction = −52.0 N × 1.5 m/s = **−78 W**.
3. **(c)** The sled's kinetic energy is constant, so energy in = energy out. If the system is the sled and the snow, friction converts 78 W of kinetic energy into internal (thermal) energy inside the system. Over one minute that is 78 W × 60 s ≈ 4.7 × 10³ J.

**Check.** Multiplying the full tension by the speed gives 60 N × 1.5 m/s = 90 W. That is too big: the vertical component of the tension is at 90° to the motion and transfers no energy.

## Worked example 3: power rises as a car speeds up

**Question.** A 1200 kg car starts from rest on a level road. The net horizontal force on it is a constant 3000 N for 8.0 s. Find the final speed, the average power delivered by the net force, and the instantaneous power at the end.

1. **Acceleration:** a = F_net / m = 3000 N ÷ 1200 kg = 2.5 m/s².
2. **Final speed:** v = at = 2.5 m/s² × 8.0 s = **20 m/s**.
3. **Energy gained:** ΔK = ½mv² = ½ × 1200 kg × (20 m/s)² = 2.4 × 10⁵ J.
4. **Average power:** P_avg = ΔK / Δt = 2.4 × 10⁵ J ÷ 8.0 s = **3.0 × 10⁴ W** (30 kW).
5. **Instantaneous power at 8.0 s:** P = Fv = 3000 N × 20 m/s = **6.0 × 10⁴ W** (60 kW).

**Interpretation.** The force is constant, but the speed rises steadily, so P = Fv rises steadily from 0 to 60 kW. The average is half the final value. At 4.0 s, when v = 10 m/s, P = 30 kW, which equals the average.

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1-35-pt-title p1-35-pt-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-35-pt-title">Power–time graph for a car pushed by a constant net force</title>
<desc id="p1-35-pt-desc">Power in kilowatts from 0 to 60 against time in seconds from 0 to 8. A straight line rises from 0 at t = 0 to 60 kW at t = 8.0 s. The triangle under the line is hatched and labelled area = ½ × 8.0 s × 60 kW = 240 kJ. A dashed horizontal line at 30 kW is labelled average power; it meets the sloping line at t = 4.0 s.</desc>
<defs><pattern id="p1-35-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<polygon points="70,290 510,50 510,290" fill="url(#p1-35-hatch)" stroke="#1d2b44" stroke-width="1"/>
<path d="M70 290 H530 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="180" y="308">2</text><text x="290" y="308">4</text><text x="400" y="308">6</text><text x="510" y="308">8</text>
<text x="295" y="330" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">15</text><text x="62" y="174">30</text><text x="62" y="114">45</text><text x="62" y="54">60</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">power, P (kW)</text>
<path d="M70 290 L510 50" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M70 170 H510" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="290" cy="170" r="5" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="510" cy="50" r="5" fill="#1d2b44"/>
<text x="80" y="188" font-size="12" fill="#1d2b44">dashed: P_avg = 30 kW</text>
<text x="282" y="160" font-size="12" fill="#1d2b44" text-anchor="end">(4.0 s, 30 kW)</text>
<text x="390" y="44" font-size="12" fill="#1d2b44">P = Fv = 60 kW</text>
<rect x="330" y="236" width="170" height="40" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="340" y="252" font-size="12" fill="#1d2b44">hatched area = energy</text>
<text x="340" y="268" font-size="12" fill="#1d2b44">½ × 8.0 s × 60 kW = 240 kJ</text>
</svg>
<figcaption>Figure 2. Power–time graph for Worked example 3. The hatched area, ½ × 8.0 s × 60 kW = 240 kJ, equals the kinetic energy gained. The dashed line is the average power, 30 kW: a rectangle of height 30 kW and width 8.0 s has the same area.</figcaption>
</figure>

**Check.** The car travels ½at² = ½ × 2.5 × 8.0² = 80 m, so the work done is 3000 N × 80 m = 2.4 × 10⁵ J. That matches ΔK and the area in Figure 2.

## Why a vehicle has a top speed

On a level road at constant speed, the net force is zero. The driving force from the road (pushed by the engine or motor) must equal the total resistive force. If the useful power from the motor has a maximum value P_max, then at top speed:

**v_max = P_max / F_resistive**

For example, an electric scooter whose motor can deliver 400 W to the wheels, against a total resistive force of 25 N, has a top speed of 400 W ÷ 25 N = **16 m/s**. In practice, air resistance grows with speed, so pushing the top speed higher needs much more power. On a hill, part of the driving force must also balance the component of the weight along the slope, so the same power gives a lower speed.

This also explains why P = F∥v does not mean a slow vehicle gets a huge force for free. At low speed, the force is limited by other things, such as how hard the tyres can grip the road (static friction, Topic 2.7).

## Measuring power in the lab

A classic way to find your own power is to run up a flight of stairs.

1. Measure your mass m with bathroom scales.
2. Measure the vertical height h of the stairs: for example, measure one step with a ruler and multiply by the number of steps.
3. Time the climb with a stopwatch, from first step to last.
4. Calculate P_avg = mgh / Δt. Repeat three times and average.

With m = 62 kg, 18 steps of 0.17 m each (h = 3.06 m) and a time of 6.5 s: mgh = 62 × 9.8 × 3.06 ≈ 1.86 × 10³ J, so P_avg ≈ **290 W**.

This value is a **lower limit** for the power your muscles produce. It ignores the kinetic energy you gain, the energy that becomes internal energy in your body, and the up-and-down motion of your legs. Timing errors matter most for short climbs, so a taller staircase gives a more reliable result.

## Common misconceptions

- **"More power means more energy."** Power is the rate. A 2 kW heater left on for one minute transfers less energy than a 100 W lamp left on for an hour (120 kJ against 360 kJ).
- **"A kilowatt-hour is a unit of power."** It is energy: 3.6 × 10⁶ J.
- **"P = Fv always uses the full force."** Use only the component parallel to the velocity (Worked example 2).
- **"Constant force means constant power."** Not if the speed changes (Worked example 3 and Figure 2).
- **"If the kinetic energy is constant, no power is involved."** A winch lifting at steady speed delivers 500 W; a sled pulled at steady speed has 78 W going in and 78 W converted by friction.
- **"Holding a load still needs power."** No work is done on a load that does not move, so the power delivered to it is zero (the flat part of Figure 1). Your muscles do use energy internally, but that energy is not transferred to the load.
- **"Average power is the mean of the starting and ending power."** That works only when the power changes at a steady rate, as in Figure 2. In general, use total energy ÷ total time.

## Where this leads

Power closes Unit 3: you can now say how much energy moves and how fast. Unit 4 starts a second conservation law, linear momentum, which handles collisions where energy alone is not enough. Continue with [Topic 4.1, Linear Momentum](/advanced-course-resources/physics-1/4-1-linear-momentum-study-guide/), or look back at [Topic 3.4, Conservation of Energy](/advanced-course-resources/physics-1/3-4-conservation-energy-study-guide/). Try the [practice questions](/advanced-course-resources/physics-1/3-5-power-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/3-5-power-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/3-5-power-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
