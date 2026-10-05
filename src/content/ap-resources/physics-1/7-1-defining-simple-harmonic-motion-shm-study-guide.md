---
resourceId: "mb-ap-phys1-7.1-study-guide"
title: "Defining Simple Harmonic Motion (SHM): Study Guide (Physics 1 7.1)"
description: "What makes an oscillation simple harmonic: equilibrium position, restoring force proportional to displacement, a = −(k/m)x, vertical springs and small-angle pendulums."
course: "physics-1"
unit: 7
topics: ["7.1"]
resourceType: "study-guide"
prerequisites:
  - "Hooke's law, F_s = −kΔx, and the direction of a spring force (Topic 2.8)"
  - "Newton's second law along one axis, a = F_net / m (Topic 2.5)"
  - "Torque, τ = rF sin θ, and angles in radians (Topics 5.1 and 5.3)"
prerequisiteResources: ["mb-ap-phys1-6.6-study-guide"]
learningObjectives:
  - "Tell periodic motion apart from simple harmonic motion, and give examples of each"
  - "Find the equilibrium position of a system as the place where the net force is zero"
  - "Explain what a restoring force is and test whether its size is proportional to displacement"
  - "Use Newton's second law to show that a = −(k/m)x for a block on an ideal spring, and use it to find accelerations"
  - "Explain why a pendulum swinging through a small angle can be modelled as simple harmonic motion"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra and trigonometry only, no calculus. g = 9.8 m/s². Angles in radians when you compare θ with sin θ. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-7.1-revision-notes", "mb-ap-phys1-7.1-practice", "mb-ap-phys1-7.1-checklist"]
next: "mb-ap-phys1-7.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Periodic motion repeats itself. Simple harmonic motion (SHM) is a special kind of periodic motion."
  - "The equilibrium position is where the net force on the object is zero. Displacement x is measured from there."
  - "A restoring force points back toward equilibrium. SHM happens when its size is proportional to the displacement: F_net = −kx."
  - "For a block on an ideal spring, Newton's second law gives a = −(k/m)x: the acceleration always points toward equilibrium and is largest at the ends."
  - "A pendulum is close to SHM only for small angles, because only then is the restoring torque proportional to the angle."
faqs:
  - question: "Is every repeating motion simple harmonic?"
    answer: "No. A bouncing ball and a puck sliding between two walls both repeat, but the force on them is not proportional to their displacement from equilibrium. Only motion with a restoring force of the form F = −kx is SHM."
  - question: "For a spring hanging vertically, where is the equilibrium position?"
    answer: "Where the spring's upward pull balances the object's weight, so the net force is zero. That is below the end of the relaxed spring, by mg/k. Measure displacement from there, and the net force is still −k times the displacement."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. You need Hooke's law (Topic 2.8), Newton's second law (Topic 2.5) and torque (Topic 5.3). Unit 7 uses no new laws of physics. It applies forces, torques and energy to motion that repeats.

## Periodic motion and what makes SHM special

Many things move back and forth: a swing, a guitar string, a car on its suspension. Any motion that repeats itself in equal time intervals is **periodic motion**. The time for one full repeat is the **period** (Topic 7.2 deals with it in detail).

**Simple harmonic motion (SHM)** is one special kind of periodic motion, defined by the force that causes it. First, two definitions.

## Equilibrium position and restoring force

The **equilibrium position** is the place where the **net force** on the object (or system) is **zero**. If you put the object there at rest, it stays at rest.

- For a block on a smooth horizontal surface attached to a spring, equilibrium is where the spring is relaxed.
- For a block hanging from a vertical spring, equilibrium is where the spring's upward pull equals the weight. That is lower than the end of the relaxed spring (Worked example 2).
- For a pendulum, equilibrium is with the string hanging straight down.

Measure the **displacement**, x, from the equilibrium position, and state your axis, for example "+x to the right, x = 0 at equilibrium".

A **restoring force** is a force that points **opposite to the displacement**, back toward equilibrium. Pull the block to +x and the restoring force points toward −x. Push it to −x and the restoring force points toward +x. It does not matter which way the object is moving at that instant.

A restoring force alone does not make motion simple harmonic. What matters is **how its size changes** with displacement.

## The condition for SHM

An object moves in **SHM** when the **size of the restoring force is proportional to the size of its displacement** from equilibrium. With signs, along one axis:

**F_net = −kx**

Here k is a positive constant in N/m: the spring constant for a block on an ideal spring, or whatever constant links force and displacement in another system. The minus sign says the force is a restoring force. The direct proportion says that twice as far from equilibrium means twice the restoring force.

Now apply Newton's second law, a = F_net / m:

**a = −(k/m)x**

This is the key relationship for this topic. Read it in words:

- The acceleration always points **toward equilibrium** (opposite sign to x).
- Its size is **proportional to the distance** from equilibrium.
- At equilibrium (x = 0) the acceleration is **zero**. At the ends of the motion, where the displacement is largest, the acceleration is largest.
- A larger k/m means a larger acceleration for the same displacement. Topic 7.2 shows this makes the oscillation faster.

You may also see this written as a = −ω²x, with ω² = k/m. It is the same relationship; Topic 7.2 links ω to the frequency.

A graph of a against x (or F_net against x) for SHM is a **straight line through the origin with a negative slope**. That is the easiest test for SHM from data.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="p1-shm-title p1-shm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-shm-title">Net force against displacement for three oscillating systems</title>
<desc id="p1-shm-desc">Three small graphs side by side, each with net force F_net on the vertical axis and displacement x from equilibrium on the horizontal axis, crossing at the origin. Graph (a), labelled SHM: a straight line through the origin sloping down from upper left to lower right, so force is proportional to displacement and opposite to it. Graph (b), labelled not SHM: the force has a constant positive size for every negative x and a constant negative size of the same magnitude for every positive x, with a jump at the origin, like a block sliding in a frictionless V-shaped trough. Graph (c), labelled SHM only for small x: a curve through the origin that is close to a straight line near the origin but bends more steeply at large displacements.</desc>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="1.5" fill="none">
<path d="M30 150 H185 M105 55 V245"/>
<path d="M210 150 H365 M285 55 V245"/>
<path d="M390 150 H545 M465 55 V245"/>
</g>
<path d="M40 70 L170 230" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M220 110 H285" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M285 190 H350" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M285 110 V190" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4" fill="none"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="400.0,70.0 406.5,84.2 413.0,96.4 419.5,106.9 426.0,115.8 432.5,123.5 439.0,130.1 445.5,135.8 452.0,140.9 458.5,145.6 465.0,150.0 471.5,154.4 478.0,159.1 484.5,164.2 491.0,169.9 497.5,176.5 504.0,184.2 510.5,193.1 517.0,203.6 523.5,215.8 530.0,230.0"/>
<path d="M415 116.2 L515 183.8" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4" fill="none"/>
<g font-size="12" fill="#1d2b44">
<text x="110" y="62">F_net</text><text x="290" y="62">F_net</text><text x="470" y="62">F_net</text>
<text x="172" y="166">x</text><text x="352" y="166">x</text><text x="532" y="166">x</text>
<text x="105" y="270" text-anchor="middle" font-weight="600">(a) SHM</text>
<text x="105" y="286" text-anchor="middle">straight line through origin</text>
<text x="285" y="270" text-anchor="middle" font-weight="600">(b) not SHM</text>
<text x="285" y="286" text-anchor="middle">constant size, V-shaped trough</text>
<text x="465" y="270" text-anchor="middle" font-weight="600">(c) SHM only for small x</text>
<text x="465" y="286" text-anchor="middle">dashed: straight-line fit near 0</text>
</g>
</svg>
<figcaption>Figure 1. Qualitative sketches of net force against displacement from equilibrium. All three forces are restoring forces (they point back toward x = 0), but only (a) is proportional to x everywhere. System (c) behaves like SHM for small displacements, where the curve follows the dashed straight line.</figcaption>
</figure>

## SHM compared with other periodic motion

Each system below is periodic. Check the force before calling it SHM.

| System | Restoring force | SHM? |
|---|---|---|
| Block on an ideal horizontal spring, no friction | F = −kx | Yes, for any displacement the spring can take |
| Block on a vertical spring | −k × (displacement from the new equilibrium) | Yes (Worked example 2) |
| Pendulum, small angle | about proportional to angle | Approximately (see below) |
| Block sliding in a frictionless V-shaped trough | constant size, mg sin θ along each side | No |
| Ball bouncing on a hard floor | constant weight mg in the air; a large brief push at the floor | No |
| Puck sliding between two walls | zero except at the walls | No |

## The pendulum: a restoring torque

A **simple pendulum** is a small, heavy bob on a light string of length ℓ, swinging from a fixed pivot. Its displacement is an **angle**, θ, measured from the vertical.

Take torques about the pivot. The tension in the string acts along the string, through the pivot, so its torque is zero. The weight mg acts at the bob. Its lever arm (the perpendicular distance from the pivot to the weight's line of action) is ℓ sin θ. So the size of the torque is

**τ = mgℓ sin θ**

This torque always turns the bob back toward the vertical, so it is a **restoring torque**. With signs: τ = −mgℓ sin θ.

For SHM we need the restoring torque to be **proportional to the angle**, θ. It is proportional to sin θ instead. But for **small angles, measured in radians, sin θ ≈ θ**. Then

**τ ≈ −mgℓθ**

which is proportional to θ. So a pendulum with a **small angular displacement** can be modelled as SHM. Worked example 3 shows how small "small" is.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="p1-pend-title p1-pend-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1-pend-title">Forces on a pendulum bob displaced by an angle</title>
<desc id="p1-pend-desc">A pivot at the top with a string of length ℓ hanging at an angle θ of 20 degrees to the right of a dashed vertical line. The bob is at the end of the string. A long arrow points straight down from the bob, labelled weight mg. A shorter arrow from the bob points along the arc, down and to the left, toward the vertical line, labelled mg sin θ, restoring. A dotted horizontal line from the vertical line to the bob is labelled lever arm ℓ sin θ. Tension acts along the string through the pivot and has no torque about it.</desc>
<defs><marker id="p1-pend-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<path d="M240 40 H320" stroke="#1d2b44" stroke-width="3"/>
<path d="M280 40 V275" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="6 5" fill="none"/>
<path d="M280 40 L355.2 246.7" stroke="#1d2b44" stroke-width="2"/>
<path d="M280 110 A70 70 0 0 0 303.9 105.8" stroke="#1d2b44" stroke-width="1.2" fill="none"/>
<text x="292" y="128" font-size="13" fill="#1d2b44">θ</text>
<text x="325" y="140" font-size="13" fill="#1d2b44">ℓ</text>
<path d="M280 246.7 H355.2" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 3"/>
<text x="150" y="243" font-size="12" fill="#1d2b44">lever arm ℓ sin θ</text>
<circle cx="355.2" cy="246.7" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M355.2 258 V366.7" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-pend-ah)"/>
<text x="364" y="360" font-size="12" fill="#1d2b44">weight mg</text>
<path d="M344.6 250.6 L316.6 260.7" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#p1-pend-ah)"/>
<text x="196" y="290" font-size="12" fill="#1d2b44">mg sin θ (restoring,</text>
<text x="196" y="305" font-size="12" fill="#1d2b44">along the arc)</text>
<text x="380" y="215" font-size="12" fill="#1d2b44">tension: along the string,</text>
<text x="380" y="230" font-size="12" fill="#1d2b44">no torque about the pivot</text>
<text x="268" y="30" font-size="12" fill="#1d2b44">pivot</text>
</svg>
<figcaption>Figure 2. A pendulum displaced by θ = 20°. The weight has lever arm ℓ sin θ about the pivot, so the restoring torque has size mgℓ sin θ. Equivalently, the part of the weight along the arc, mg sin θ, pulls the bob back toward the vertical.</figcaption>
</figure>

## Worked example 1: is it SHM? Testing force data

**Question.** Take **+x to the right**, with x = 0 at equilibrium. A 0.40 kg glider sits on a level air track between two springs. A force sensor records the net horizontal force on it at five positions:

| x (cm) | −6.0 | −3.0 | 0 | +3.0 | +6.0 |
|---|---|---|---|---|---|
| F_net (N) | +1.49 | +0.76 | 0.00 | −0.74 | −1.51 |

(a) Do the data support the claim that the glider moves in SHM? (b) Find the glider's acceleration when it is at x = +4.0 cm.

1. **Direction.** At every negative x the force is positive, and at every positive x it is negative. The force always points toward x = 0, so it is a restoring force.
2. **Proportion.** Convert to metres and find −F_net / x for each non-zero point: 24.8, 25.3, 24.7 and 25.2 N/m. They are all close to one constant, **k ≈ 25 N/m**. A straight line through (−0.060 m, +1.50 N) and (+0.060 m, −1.50 N) passes through the origin with slope −3.00 N ÷ 0.120 m = −25 N/m.
3. **(a)** The force is opposite to the displacement and proportional to it, F_net ≈ −(25 N/m)x. The data **support** the SHM claim, at least over ±6 cm.
4. **(b)** a = −(k/m)x = −(25 ÷ 0.40) × 0.040 = −62.5 × 0.040 = **−2.5 m/s²** (2.5 m/s² to the left, toward equilibrium).

**Contrast.** A 0.050 kg block slides without friction in a V-shaped trough whose sides slope at 10°. On either side, the net force along the slope has size mg sin 10° = 0.050 × 9.8 × 0.174 ≈ 0.085 N, whatever the distance from the bottom. The force is a restoring force, but its size does not grow with displacement (Figure 1b). The block's motion is periodic, but **not** SHM.

## Worked example 2: a vertical spring

**Question.** A 0.25 kg mass hangs from an ideal spring with k = 49 N/m. Take **+y downward**. (a) Find how far the spring is stretched at equilibrium. (b) The mass is pulled 3.0 cm below equilibrium. Find the net force and acceleration. (c) Show that the net force is −ky, where y is the displacement from equilibrium.

1. **(a)** At equilibrium the net force is zero, so the spring force balances the weight: kd = mg. d = mg ÷ k = (0.25 × 9.8) ÷ 49 = 2.45 N ÷ 49 N/m = **0.050 m** (5.0 cm).
2. **(b)** The total stretch is now 5.0 + 3.0 = 8.0 cm. Spring force = 49 × 0.080 = 3.92 N **upward**. Weight = 2.45 N downward. Net force = 3.92 − 2.45 = **1.47 N upward**, so F_net = −1.47 N with +y downward. a = 1.47 ÷ 0.25 ≈ **5.9 m/s² upward**, toward equilibrium.
3. **Check 3.0 cm above equilibrium.** Stretch = 2.0 cm, spring force = 0.98 N up, weight 2.45 N down, net = **1.47 N downward**. Same size, opposite direction: a restoring force again.
4. **(c)** At displacement y from equilibrium, the stretch is d + y. With +y downward: F_net = mg − k(d + y) = (mg − kd) − ky. Because kd = mg, the bracket is zero, so **F_net = −ky**.

**Interpretation.** Gravity only shifts the equilibrium down by mg/k. Measured from there, the net force has the same form as for a horizontal spring, so a vertical spring–mass system also moves in SHM. Measuring y from the relaxed spring instead gives −ky + mg, which is not proportional to y.

## Worked example 3: how small is a small angle?

**Question.** A pendulum has length ℓ = 0.80 m and a 0.20 kg bob. Compare the true restoring torque, mgℓ sin θ, with the SHM model, mgℓθ, at 5°, 15°, 30° and 45°.

1. mgℓ = 0.20 × 9.8 × 0.80 = 1.568 N·m.
2. Convert each angle to radians (multiply by π/180) and work out both torques:

| θ | θ (rad) | sin θ | true τ (N·m) | model τ (N·m) | model too large by |
|---|---|---|---|---|---|
| 5° | 0.0873 | 0.0872 | 0.137 | 0.137 | 0.1% |
| 15° | 0.2618 | 0.2588 | 0.406 | 0.411 | 1.2% |
| 30° | 0.5236 | 0.5000 | 0.784 | 0.821 | 4.7% |
| 45° | 0.7854 | 0.7071 | 1.109 | 1.232 | 11% |

3. **Conclusion.** Up to about 15° the restoring torque is proportional to θ to within about 1%, so SHM is a good model. At 45° it is not: the real torque grows more slowly than θ, so a graph of torque against θ bends away from the straight line at large angles. (Figure 1c bends the other way, more steeply, but the lesson is the same: only the part near zero is close to a straight line.)

**Check.** The angle must be in **radians** for sin θ ≈ θ. In degrees, "θ = 5" and "sin θ = 0.087" are nowhere near each other.

The same result works with forces. For small angles the bob moves along an arc of length s = ℓθ, and the restoring force along the arc is mg sin θ ≈ mgθ = (mg/ℓ)s. That is "force = −constant × displacement", with constant mg/ℓ = 2.45 N/m for this pendulum.

## Common misconceptions

- **"Any back-and-forth motion is SHM."** It is periodic, but SHM also needs F_net = −kx (the trough, bouncing-ball and wall examples).
- **"The restoring force points the way the object is moving."** It points toward equilibrium, whichever way the object moves.
- **"Zero force at equilibrium means the object stops there."** Zero force means zero acceleration, not zero velocity. The object passes through equilibrium moving (Topic 7.3).
- **"The acceleration is largest at equilibrium."** It is zero there, and largest at the ends, where |x| is largest.
- **"For a vertical spring, measure x from the relaxed length."** Measure it from the equilibrium position, where the net force is zero (Worked example 2).
- **"Any pendulum is SHM."** Only for small angles, in radians, where sin θ ≈ θ (Worked example 3).
- **"The minus sign in F = −kx means the force is negative in size."** The minus sign only gives direction: opposite to the displacement.

## Where this leads

Once you know a motion is SHM, you can predict how long each cycle takes. The next topic, [Frequency and Period of SHM](/advanced-course-resources/physics-1/7-2-frequency-period-shm-study-guide/), gives the period of a spring–mass system and of a small-angle pendulum. Topics 7.3 and 7.4 add graphs of position, velocity and acceleration against time, and the energy of an oscillator. Try the [practice questions](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/7-1-defining-simple-harmonic-motion-shm-checklist/) to consolidate. You can also return to the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
