---
resourceId: "mb-ap-physcm-7.5-study-guide"
title: "Simple and Physical Pendulums: Study Guide (Physics C: Mechanics 7.5)"
description: "Calculus-based pendulums: the gravitational restoring torque, the small-angle approximation, the SHM equation from τ = Iα, T = 2π√(I/mgd), the simple pendulum as a special case, and torsion pendulums."
course: "physics-c-mechanics"
unit: 7
topics: ["7.5"]
resourceType: "study-guide"
prerequisites:
  - "Torque, rotational inertia, the parallel axis theorem and τ_net = Iα (Topics 5.3, 5.4 and 5.6)"
  - "The SHM equation d²x/dt² = −ω²x, its solution and T = 2π/ω (Topics 7.1 to 7.3)"
prerequisiteResources: ["mb-ap-physcm-7.4-study-guide"]
learningObjectives:
  - "Describe a physical pendulum as a rigid body swinging about a fixed axis, and identify d, the pivot-to-centre-of-mass distance"
  - "Write the gravitational restoring torque −mgd sin θ and explain when sin θ ≈ θ is a good approximation"
  - "Derive d²θ/dt² = −(mgd/I)θ from Newton's second law in rotational form, and from it ω = √(mgd/I) and T = 2π√(I/mgd)"
  - "Show that the simple pendulum period 2π√(l/g) is the special case of a point mass on a light string"
  - "Derive the period of a torsion pendulum, T = 2π√(I/κ), from a restoring torque proportional to angle"
  - "Plan and analyse a pendulum experiment, including linearising timing data to find g or a rotational inertia"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Angles in radians. g = 9.8 m/s², the value on the course equation table. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-7.5-revision-notes", "mb-ap-physcm-7.5-practice", "mb-ap-physcm-7.5-checklist"]
next: "mb-ap-physcm-7.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A physical pendulum is a rigid body swinging about a fixed axis. Gravity acting at the centre of mass gives a restoring torque τ = −mgd sin θ."
  - "For small angles (θ in radians), sin θ ≈ θ, so τ ≈ −mgdθ. With τ = Iα this gives d²θ/dt² = −(mgd/I)θ: angular SHM."
  - "Physical pendulum: ω = √(mgd/I) and T = 2π√(I/mgd), with I about the pivot, not about the centre of mass."
  - "Simple pendulum: a point mass at distance l, so I = ml² and d = l. Then T = 2π√(l/g) and the mass cancels."
  - "Torsion pendulum: a twisted wire gives τ = −κθ, so T = 2π√(I/κ). Gravity does not appear, and no small-angle step is needed."
faqs:
  - question: "Is the ω in T = 2π/ω the same as the pendulum's angular velocity?"
    answer: "No. ω = √(mgd/I) is the angular frequency, a constant set by the pendulum. The angular velocity dθ/dt changes all the time, from zero at the turning points to ωθ_max at the bottom."
  - question: "Does Physics 1 cover physical pendulums?"
    answer: "No. Physics 1 uses the simple pendulum period T = 2π√(l/g) in its Topic 7.2. Physical and torsion pendulums, and the derivation from τ = Iα, belong to the calculus-based Physics C: Mechanics course."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this fits with Physics 1.** Physics C: Mechanics and Physics 1 are **separate courses**. Physics 1 meets only the simple pendulum formula, in its [Topic 7.2 study guide](/advanced-course-resources/physics-1/7-2-frequency-period-shm-study-guide/). This guide is the **calculus-based** treatment: it derives the motion of any rigid pendulum from Newton's second law in rotational form, then shows the simple pendulum and the torsion pendulum as cases of the same idea.

## What a physical pendulum is

A **physical pendulum** is a **rigid body** that swings about a **fixed axis** that does not pass through its centre of mass. A sign swinging from a hook through its top edge, a leg swinging from the hip, a ruler hanging from a nail through one of its holes: all are physical pendulums.

Three quantities describe it:

- **m**, its total mass.
- **d**, the distance from the pivot axis to the **centre of mass**.
- **I**, its rotational inertia **about the pivot axis**. Usually you find I_cm first and then use the parallel axis theorem from Topic 5.4: I = I_cm + md².

We measure the **angular displacement θ** from the equilibrium position, where the centre of mass hangs directly below the pivot. Choose a sign convention, for example **"counterclockwise positive"**, and keep θ in **radians**.

## The restoring torque from gravity

Take torques about the pivot. The pivot force passes through the axis, so it gives no torque. Gravity acts at the centre of mass, a distance d from the pivot. When the body is turned through θ, the lever arm of the weight is d sin θ, so

**τ = −mgd sin θ**

The minus sign says the torque always acts **back towards equilibrium**: θ positive gives a negative torque, and θ negative gives a positive torque. That is what makes it a **restoring torque**.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="pcm75-pp-title pcm75-pp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm75-pp-title">Physical pendulum displaced through angle θ</title>
<desc id="pcm75-pp-desc">A rigid plank hangs from a pivot P near its top end and has been turned 20 degrees to the right of a dashed vertical line through P. A solid line of length d joins P to the centre of mass C, and an arc between the dashed vertical and this line is labelled theta. A downward arrow labelled mg starts at C. A dotted vertical line rises from C to the height of P, and a dotted horizontal segment from P to it is labelled lever arm d sin theta. A curved arrow below the plank points back towards the dashed vertical and is labelled restoring torque.</desc>
<rect x="0" y="0" width="560" height="400" fill="#ffffff"/>
<path d="M200 30 H360" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1" opacity="0.6"><path d="M210 30 l-10 -10 M230 30 l-10 -10 M250 30 l-10 -10 M270 30 l-10 -10 M290 30 l-10 -10 M310 30 l-10 -10 M330 30 l-10 -10 M350 30 l-10 -10"/></g>
<path d="M280 30 V60" stroke="#1d2b44" stroke-width="2"/>
<g transform="rotate(-20 280 60)">
<rect x="268" y="36" width="24" height="288" rx="8" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
</g>
<path d="M280 60 V380" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 5"/>
<path d="M280 60 L321.0 172.8" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="60" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="321.0" cy="172.8" r="5" fill="#1d2b44"/>
<path d="M280 130 A70 70 0 0 0 303.9 125.8" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 60 H321.0 M321.0 60 V172.8" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<path d="M321.0 172.8 V256" stroke="#1d2b44" stroke-width="2.5"/>
<polygon points="321.0,266 315.5,254 326.5,254" fill="#1d2b44"/>
<path d="M369.6 335.8 A290 290 0 0 1 320.2 347.3" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="310.3,348.4 320.7,352.3 319.7,342.3" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="260" y="64" text-anchor="end">pivot P (fixed axis)</text>
<text x="330" y="50">lever arm d sin θ</text>
<text x="285" y="150" font-weight="600">θ</text>
<text x="297" y="104" font-weight="600">d</text>
<text x="346" y="184">C (centre of mass)</text>
<text x="313" y="244" text-anchor="end">mg</text>
<text x="376" y="340">restoring torque</text>
<text x="376" y="356">τ = −mgd sin θ</text>
<text x="190" y="372" text-anchor="end">dashed line: equilibrium</text>
</g>
</svg>
<figcaption>Figure 1. A physical pendulum turned through θ. Gravity acts at the centre of mass C, a distance d from the pivot. Its lever arm about P is d sin θ, so the torque about P is −mgd sin θ, always back towards the dashed equilibrium line.</figcaption>
</figure>

## The small-angle approximation

The torque depends on sin θ, not on θ. That is **not quite** the "restoring quantity proportional to displacement" that SHM needs. But for small angles in radians, sin θ ≈ θ. The table shows how good this is:

| θ (degrees) | θ (rad) | sin θ | θ larger than sin θ by | True period longer than the small-angle value by |
|---|---|---|---|---|
| 5 | 0.0873 | 0.0872 | 0.13% | 0.05% |
| 10 | 0.1745 | 0.1736 | 0.51% | 0.19% |
| 15 | 0.2618 | 0.2588 | 1.15% | 0.43% |
| 20 | 0.3491 | 0.3420 | 2.06% | 0.77% |
| 30 | 0.5236 | 0.5000 | 4.72% | 1.74% |

The last column is background only: it comes from an exact calculation that is beyond this course. What you need is the trend. At larger amplitudes the true torque, mgd sin θ, is **weaker** than the linear model mgdθ, so the pendulum returns more slowly and the true period is a little **longer** than the formula predicts. Below about 15°, the error is under half a percent.

With sin θ ≈ θ, the torque becomes

**τ ≈ −mgdθ**

## From τ = Iα to SHM

Newton's second law in rotational form about the fixed pivot is τ_net = Iα, with α = d²θ/dt². Put in the small-angle torque:

1. I (d²θ/dt²) = −mgdθ
2. **d²θ/dt² = −(mgd/I) θ**

Compare this with the SHM equation from Topic 7.3, d²x/dt² = −ω²x. It has the same form, with θ in place of x. So the pendulum performs **angular simple harmonic motion** with

**ω² = mgd/I, so ω = √(mgd/I)** and **T = 2π/ω = 2π√(I/(mgd))**

The solution is θ(t) = θ_max cos(ωt + φ). You need to know this solution and recognise the equation as SHM; the course does not ask you to prove that the solution works.

Notice three things:

- **I is about the pivot.** Using I_cm instead is the commonest error.
- **The amplitude θ_max is not in T** (within the small-angle approximation).
- **ω is a constant, not the angular velocity.** The angular velocity is dθ/dt = −ωθ_max sin(ωt + φ). Its largest size is ωθ_max, at the bottom of the swing.

## The simple pendulum: a special case

A **simple pendulum** is a small, dense bob on a light string of length l (pivot to the centre of the bob). Model the bob as a **point mass**. Then:

- d = l, because all the mass is at distance l;
- I = ml², because a point mass at distance l has rotational inertia ml².

Substitute into the physical pendulum result:

**T = 2π√(ml²/(mgl)) = 2π√(l/g)**

The mass cancels because both I and the torque are proportional to m, and **all the mass sits at the same distance**. For a real body the mass is spread out, so I and md are not simply related, and the shape matters.

A useful idea: any physical pendulum has the same period as a simple pendulum of length **l_eq = I/(md)**. This is always longer than d.

## The torsion pendulum

A **torsion pendulum** is a body hung from a wire attached at its centre of mass, for example a horizontal disk on a vertical wire. Twist the disk through θ and the wire twists back with a torque proportional to the angle:

**τ = −κθ**

where κ (kappa) is the **torsion constant** of the wire, in N·m/rad. Then Iα = −κθ gives

**d²θ/dt² = −(κ/I) θ, so ω = √(κ/I) and T = 2π√(I/κ)**

Two differences from a gravity pendulum:

- **No small-angle step.** If the wire obeys τ = −κθ, the motion is SHM at any amplitude for which that holds.
- **No g.** The disk turns in a horizontal plane, so its weight gives no restoring torque. A torsion pendulum keeps the same period on the Moon or in orbit.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm75-tp-title pcm75-tp-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm75-tp-title">Torsion pendulum: a disk hanging from a wire</title>
<desc id="pcm75-tp-desc">A vertical wire hangs from a fixed support and is attached to the centre of a horizontal disk, drawn in perspective as an ellipse. A small curved arrow around the wire is labelled restoring torque, opposite to the twist. On the disk, a dashed radial line marks the equilibrium position, and a solid radial line marks the position after the disk has been twisted through angle theta, with an arc between them labelled theta.</desc>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<path d="M200 30 H360" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1" opacity="0.6"><path d="M210 30 l-10 -10 M230 30 l-10 -10 M250 30 l-10 -10 M270 30 l-10 -10 M290 30 l-10 -10 M310 30 l-10 -10 M330 30 l-10 -10 M350 30 l-10 -10"/></g>
<path d="M280 30 V210" stroke="#1d2b44" stroke-width="2"/>
<path d="M140 210 V226 A140 40 0 0 0 420 226 V210" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<ellipse cx="280" cy="210" rx="140" ry="40" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<circle cx="280" cy="210" r="4" fill="#1d2b44"/>
<path d="M280 210 L280 250" stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 4"/>
<path d="M280 210 L360.3 242.8" stroke="#1d2b44" stroke-width="2.5"/>
<path d="M280 234 A84 24 0 0 0 328.2 229.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M301.7 121.2 A22 7 0 0 1 258.7 121.8" fill="none" stroke="#1d2b44" stroke-width="2"/>
<polygon points="254.9,117.2 263.1,120.8 257.0,125.9" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="290" y="80">wire, torsion constant κ</text>
<text x="312" y="128">restoring torque τ = −κθ</text>
<text x="312" y="144">(opposite to the twist)</text>
<text x="300" y="246" font-weight="600">θ</text>
<text x="140" y="290">dashed: equilibrium mark</text>
<text x="330" y="290">solid: mark after twist</text>
<text x="128" y="190" text-anchor="end">disk, rotational</text>
<text x="128" y="206" text-anchor="end">inertia I about</text>
<text x="128" y="222" text-anchor="end">the wire</text>
</g>
</svg>
<figcaption>Figure 2. A torsion pendulum. Twisting the disk through θ twists the wire, which pushes back with τ = −κθ. The disk turns in a horizontal plane, so gravity provides no restoring torque and g does not appear in T = 2π√(I/κ).</figcaption>
</figure>

## Worked example 1: a plank hung from a hole

**Question.** A uniform plank of mass 1.2 kg and length 0.90 m hangs from a nail through a hole 0.15 m from one end. It swings with small amplitude. Take counterclockwise as positive. Find (a) d, (b) I about the nail, (c) the period, and (d) the length of a simple pendulum with the same period. (I_cm of a uniform rod = ML²/12.)

1. **(a)** The centre of mass is at the middle, 0.45 m from the end. d = 0.45 − 0.15 = **0.30 m**.
2. **(b)** I_cm = (1.2)(0.90)²/12 = 0.081 kg·m². Parallel axis: I = 0.081 + (1.2)(0.30)² = 0.081 + 0.108 = **0.189 kg·m²**.
3. **(c)** mgd = (1.2)(9.8)(0.30) = 3.53 N·m. ω = √(3.53 ÷ 0.189) = 4.32 rad/s. T = 2π/ω = **1.45 s**.
4. **(d)** l_eq = I/(md) = 0.189 ÷ (1.2 × 0.30) = **0.525 m**. Check: 2π√(0.525/9.8) = 1.45 s.

**Check the mass.** Doubling m doubles I and mgd, so T is unchanged. The period depends only on how the mass is spread: T = 2π√((I/m)/(gd)).

**Check the model.** Treating the plank as a simple pendulum of length d = 0.30 m gives 1.10 s, which is far too short. A plank is not a point mass.

## Worked example 2: measuring rotational inertia with a torsion pendulum

**Question.** A uniform disk of mass 2.0 kg and radius 0.15 m hangs from a wire through its centre. It twists back and forth with period 2.40 s. A small machine part is fixed on the disk, centred on the wire, and the period becomes 3.10 s. Find (a) the torsion constant κ and (b) the rotational inertia of the part about the wire. (I of a uniform disk about its axis = ½MR².)

1. **(a)** I_disk = ½(2.0)(0.15)² = 0.0225 kg·m². From T = 2π√(I/κ), κ = 4π²I/T² = 4π²(0.0225) ÷ (2.40)² = **0.154 N·m/rad**.
2. **(b)** With the part: I_total = κT²/(4π²) = 0.154 × (3.10)² ÷ 4π² = 0.0375 kg·m².
3. I_part = 0.0375 − 0.0225 = **0.0150 kg·m²**.

**A shortcut.** κ is the same in both runs, so I ∝ T². I_total = 0.0225 × (3.10/2.40)² = 0.0225 × 1.668 = 0.0375 kg·m². This avoids rounding κ.

**Interpretation.** No value of g was used. The same method works in orbit, which is why oscillation is a good way to measure inertia where weighing is impossible.

## Designing a pendulum experiment

A typical task asks you to find g, or a rotational inertia, from timing data. Good procedures share these features:

- **Time many oscillations**, say 20, and divide. A reaction-time error of about 0.2 s then becomes about 0.01 s per period.
- **Start timing as the body passes equilibrium**, where it moves fastest and the instant is sharpest.
- **Keep the amplitude small** (under about 10°), so the small-angle model holds.
- **Measure d to the centre of mass**, found for example by balancing the body on an edge.
- **Vary one quantity and linearise.** For a uniform bar with several holes, write I = m(k² + d²), where k² = I_cm/m. Then T²d = (4π²/g)d² + (4π²/g)k². A graph of **T²d against d²** is a straight line with slope 4π²/g and intercept (4π²/g)k². You can find g from the slope and k² from intercept ÷ slope. Practice Question 6 uses this.
- **Repeat and look for outliers** before drawing the best-fit line.

## Common misconceptions

- **Using I_cm in T = 2π√(I/mgd).** The body turns about the pivot, so I must be about the pivot (Worked example 1).
- **Treating every pendulum as simple.** T = 2π√(l/g) needs all the mass at one distance. A plank or hoop needs the physical pendulum formula.
- **Measuring d to the far end, or to the bottom of the bob.** d runs from the pivot to the centre of mass.
- **Using degrees in sin θ ≈ θ.** The approximation is only true in radians.
- **Confusing ω with dθ/dt.** ω = √(mgd/I) is fixed; the angular speed varies and peaks at ωθ_max.
- **"The period never depends on mass."** Scaling all the mass changes nothing, but moving or adding mass in one place changes I and d differently (Practice Question 7).
- **"A torsion pendulum needs gravity."** Its restoring torque comes from the wire, so g is absent.
- **"Large swings have the same period."** Only approximately. Beyond small angles the period grows slightly.

## Where this leads

This is the last topic of the course. It pulls together torque, rotational inertia and Newton's second law in rotational form (Units 5 and 6) with the SHM ideas of Topics 7.1 to 7.4. Look back at [Topic 7.4, Energy of Simple Harmonic Oscillators](/advanced-course-resources/physics-c-mechanics/7-4-energy-simple-harmonic-oscillators-study-guide/): the same pendulum can be analysed with energy, using ½I(dθ/dt)² for kinetic energy and mgd(1 − cos θ) for gravitational potential energy. Now try the [practice questions](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-practice/), then use the [revision notes](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/7-5-simple-physical-pendulums-checklist/). When you are done, return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap) to plan your full-course revision.
