---
resourceId: "mb-ap-phys1-5.4-study-guide"
title: "Rotational Inertia: Study Guide (Physics 1 5.4)"
description: "What rotational inertia measures, I = mr² for point masses, adding inertias for small systems, why the axis matters, the parallel axis theorem and hoops versus disks, with algebra only."
course: "physics-1"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
prerequisites:
  - "Finding the centre of mass of a system of objects (Topic 2.1)"
  - "Inertial mass as resistance to changes in motion (Unit 2)"
  - "Torque about an axis (Topic 5.3)"
prerequisiteResources: ["mb-ap-phys1-5.3-study-guide"]
learningObjectives:
  - "Explain rotational inertia as a rigid system's resistance to changes in rotation, set by its mass and how far that mass is from the axis"
  - "Calculate the rotational inertia of up to five point masses in a flat arrangement about a stated axis by adding mr² for each"
  - "Explain why the rotational inertia about an axis through the centre of mass is smaller than about any parallel axis"
  - "Use the parallel axis theorem, I = I_cm + Md², with a given value of I_cm"
  - "Compare rotational inertias of objects such as a hoop and a disk from how their mass is distributed"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Algebra only; no calculus. Formulas for extended objects (rods, disks, hoops) are given in each question, as they are in the exam. Answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-5.4-revision-notes", "mb-ap-phys1-5.4-practice", "mb-ap-phys1-5.4-checklist"]
next: "mb-ap-phys1-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Rotational inertia I measures how hard it is to change a rigid system's rotation. It depends on the mass and on how far that mass is from the axis."
  - "For a small object a distance r from the axis, I = mr². Units: kg·m². Doubling r makes I four times as large."
  - "For a collection of objects, add the inertias: I = Σmᵢrᵢ², every r measured from the same axis."
  - "For a family of parallel axes, I is smallest for the one through the centre of mass. The parallel axis theorem gives I = I_cm + Md²."
  - "Give a hoop and a solid disk equal mass and radius: the hoop's I is larger, because all of its mass sits at the rim."
faqs:
  - question: "Do I need to memorise the rotational inertia of a rod, disk or sphere?"
    answer: "No. The exam provides those values when they are needed. You do need to understand why, for example, a hoop's value is larger than a disk's, and be able to use a given value."
  - question: "Is rotational inertia the same as mass?"
    answer: "No. Mass resists changes in linear motion and has one value. Rotational inertia resists changes in rotation and has a different value for every axis, because it depends on where the mass is."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

This guide is for the **algebra-based Physics 1 course**. In Topic 5.3 you met torque, the cause of changes in rotation. Now you meet the property that resists those changes: rotational inertia. No calculus is needed.

## Resistance to changes in rotation

In Unit 2, **inertial mass** measured how hard it is to change an object's velocity. A loaded trolley is harder to speed up than an empty one.

Rotation has its own version. **Rotational inertia**, I, measures how hard it is to change a rigid system's **rotation**: to start it turning, speed it up, slow it down or stop it. The bigger I is, the bigger the torque you need for the same change in angular velocity in the same time (Topic 5.6 makes this exact).

Try this with a broom. Hold it in the middle and twist it back and forth: easy. Now hold it at the end of the handle and swing it from side to side: much harder. The broom's mass has not changed. What changed is **where the mass is relative to the axis**. That is the central idea of this topic:

> Rotational inertia depends on the **mass** of the system and on **how that mass is distributed** relative to the axis of rotation.

## One small object: I = mr²

Start with the simplest case: a small object of mass m (small enough to treat as a point) going round an axis at a perpendicular distance r.

**I = mr²**

The unit is **kg·m²**.

For example, a 0.50 kg lump of clay 0.40 m from the axis has I = 0.50 kg × (0.40 m)² = 0.080 kg·m².

The distance is **squared**, so it matters far more than the mass. Move the same lump to 0.80 m and I = 0.50 × 0.80² = 0.32 kg·m²: twice the distance, **four times** the rotational inertia. Doubling the mass at the same place would only double it.

Always measure r **perpendicular to the axis**: it is the radius of the circle the object would move around.

## Several objects: add them up

A rigid system made of several small objects, joined by rods or a frame light enough to ignore, has total rotational inertia

**I = Σmᵢrᵢ² = m₁r₁² + m₂r₂² + m₃r₃² + …**

Each rᵢ is that object's perpendicular distance from the **same axis**. An object sitting on the axis has r = 0 and adds nothing.

In this course you calculate I this way for up to **five** objects arranged in a flat (two-dimensional) layout. For extended objects such as rods, disks and spheres, the value of I is given to you.

## The axis matters: a dumbbell

Take two 2.0 kg masses fixed to the ends of a light rod 0.60 m long. The axis is perpendicular to the rod. Where it crosses the rod changes I:

| Axis position (distance from left mass) | Calculation | I (kg·m²) |
|---|---|---|
| 0 (through the left mass) | 2.0 × 0² + 2.0 × 0.60² | 0.72 |
| 0.10 m | 2.0 × 0.10² + 2.0 × 0.50² | 0.52 |
| 0.20 m | 2.0 × 0.20² + 2.0 × 0.40² | 0.40 |
| 0.30 m (centre of mass) | 2.0 × 0.30² + 2.0 × 0.30² | 0.36 |

The values are symmetric about the centre: an axis at 0.40 m gives 0.40 kg·m² again, and one through the right mass gives 0.72 kg·m².

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="p1ri-g-title p1ri-g-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p1ri-g-title">Rotational inertia of a dumbbell against the position of the axis</title>
<desc id="p1ri-g-desc">Rotational inertia I in kilogram metres squared, from 0 to 0.8, against the position of a perpendicular axis along a 0.60 m light rod with a 2.0 kg mass at each end, from 0 to 0.60 m. The curve is a U shape: 0.72 at both ends, falling to a minimum of 0.36 at 0.30 m, the centre of mass. Points marked at 0.10 m (0.52) and 0.20 m (0.40). A small sketch along the bottom of the plot, just above the horizontal axis, shows the rod with a filled circle at each end and a cross marking the centre of mass.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M70 230 H500 M70 170 H500 M70 110 H500 M70 50 H500"/>
<path d="M140 290 V45 M210 290 V45 M280 290 V45 M350 290 V45 M420 290 V45 M490 290 V45"/>
</g>
<path d="M70 290 H505 M70 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="306">0</text><text x="140" y="306">0.10</text><text x="210" y="306">0.20</text><text x="280" y="306">0.30</text><text x="350" y="306">0.40</text><text x="420" y="306">0.50</text><text x="490" y="306">0.60</text>
<text x="290" y="326" font-size="13">axis position from left mass (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="294">0</text><text x="62" y="234">0.2</text><text x="62" y="174">0.4</text><text x="62" y="114">0.6</text><text x="62" y="54">0.8</text>
</g>
<text x="20" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 170)">I (kg·m²)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70,74 105,107 140,134 175,155 210,170 245,179 280,182 315,179 350,170 385,155 420,134 455,107 490,74"/>
<circle cx="70" cy="74" r="4" fill="#1d2b44"/><circle cx="490" cy="74" r="4" fill="#1d2b44"/>
<circle cx="140" cy="134" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="210" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="274" y="176" width="12" height="12" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="84" y="70" font-size="12" fill="#1d2b44">0.72 (axis at one mass)</text>
<text x="150" y="128" font-size="12" fill="#1d2b44">0.52</text>
<text x="218" y="164" font-size="12" fill="#1d2b44">0.40</text>
<text x="230" y="210" font-size="12" fill="#1d2b44" font-weight="600">minimum 0.36 at the centre of mass</text>
<path d="M70 268 H490" stroke="#1d2b44" stroke-width="3"/>
<circle cx="70" cy="268" r="8" fill="#1d2b44"/><circle cx="490" cy="268" r="8" fill="#1d2b44"/>
<path d="M274 262 L286 274 M286 262 L274 274" stroke="#1d2b44" stroke-width="2"/>
<text x="296" y="262" font-size="11" fill="#1d2b44">centre of mass</text>
<text x="86" y="258" font-size="11" fill="#1d2b44">2.0 kg</text><text x="440" y="258" font-size="11" fill="#1d2b44">2.0 kg</text>
</svg>
<figcaption>Figure 1. Rotational inertia of two 2.0 kg masses on a light 0.60 m rod, for a perpendicular axis at different points along the rod. The square marks the minimum, 0.36 kg·m², with the axis through the centre of mass. Open circles mark the values from the table. The sketch along the bottom shows the dumbbell itself.</figcaption>
</figure>

Figure 1 shows a general rule: **for a set of parallel axes, the rotational inertia is smallest for the axis through the centre of mass.** Move the axis away from the centre of mass in any direction and some mass gets further away; the squared distances grow faster than the others shrink.

## The parallel axis theorem

You do not have to recalculate from scratch every time you move the axis. If you know I_cm, the rotational inertia about an axis through the centre of mass, then for any **parallel** axis a distance d away:

**I = I_cm + Md²**

Here M is the **total** mass of the system. Check it on the dumbbell: I_cm = 0.36 kg·m² and M = 4.0 kg.

- Axis 0.10 m from the centre of mass (at 0.20 m or 0.40 m): 0.36 + 4.0 × 0.10² = 0.40 kg·m². ✓
- Axis through one of the masses, d = 0.30 m: 0.36 + 4.0 × 0.30² = 0.72 kg·m². ✓

Because Md² can never be negative, the theorem also proves the rule from Figure 1: I_cm is the smallest value among all parallel axes.

Two conditions to remember: the new axis must be **parallel** to the one through the centre of mass, and the formula starts from I_cm, not from I about some other axis.

## Extended objects: where is the mass?

For objects such as rods, disks and hoops, the exam gives you I. Your job is to understand the factors that set it and to use the given value. A few standard results (you do not need to memorise them):

| Object (mass M) | Axis | I |
|---|---|---|
| Thin hoop, radius R | through centre, perpendicular to hoop | MR² |
| Solid disk, radius R | through centre, perpendicular to disk | ½MR² |
| Thin rod, length L | through centre, perpendicular to rod | (1/12)ML² |
| Thin rod, length L | through one end, perpendicular to rod | (1/3)ML² |

Compare the hoop and the disk. They have the same mass and radius, but **every** bit of the hoop is at distance R from the axis, while much of the disk's mass is close to the centre. So the hoop's rotational inertia is twice the disk's. The rod values agree with the parallel axis theorem: (1/12)ML² + M(L/2)² = (1/3)ML².

## Worked example 1: four masses on a square frame

**Question.** A light square frame has side 0.40 m. Two 1.0 kg masses sit at the two bottom corners and two 2.0 kg masses at the two top corners. Find I about (a) an axis perpendicular to the frame through its geometric centre, (b) an axis along the top side, and (c) an axis along the bottom side. (d) Of all the axes parallel to those in (b) and (c), which one gives the smallest I, and what is its value?

**(a)** Every corner is half a diagonal from the centre: r = 0.40 m ÷ √2 = 0.283 m, so r² = 0.080 m². I = (1.0 + 1.0 + 2.0 + 2.0) kg × 0.080 m² = **0.48 kg·m²**.

**(b)** The 2.0 kg masses lie **on** the axis (r = 0). The 1.0 kg masses are 0.40 m away. I = 2 × 1.0 × 0.40² = **0.32 kg·m²**.

**(c)** Now the 1.0 kg masses are on the axis and the 2.0 kg masses are 0.40 m away. I = 2 × 2.0 × 0.40² = **0.64 kg·m²**.

**(d)** Axes (b) and (c) are parallel, so the smallest I among such axes is through the centre of mass. The centre of mass is (2 × 2.0 kg × 0.40 m) ÷ 6.0 kg = **0.27 m** above the bottom side (0.267 m). About a horizontal axis there: I_cm = 2 × 1.0 × 0.267² + 2 × 2.0 × 0.133² = **0.21 kg·m²** (0.213).

**Check with the parallel axis theorem.** The top side is d = 0.133 m from the centre of mass: 0.213 + 6.0 × 0.133² = 0.32 kg·m², matching (b). The bottom side is d = 0.267 m: 0.213 + 6.0 × 0.267² = 0.64 kg·m², matching (c).

**Interpretation.** The same four masses give four different rotational inertias. The heavier masses dominate when they are far from the axis.

## Worked example 2: a pivoted rod and the parallel axis theorem

**Question.** A uniform rod has mass 0.24 kg and length 1.00 m. About an axis through its centre, perpendicular to the rod, I_cm = (1/12)ML² (given). The rod is hung from a nail through a small hole 0.20 m from one end. Find I about the nail, and compare it with I about the end.

1. I_cm = (1/12) × 0.24 kg × (1.00 m)² = **0.020 kg·m²**.
2. The centre of mass is at 0.50 m from the end, so the nail is d = 0.50 − 0.20 = 0.30 m from it. The two axes are parallel.
3. I = I_cm + Md² = 0.020 + 0.24 × 0.30² = 0.020 + 0.0216 = **0.042 kg·m²** (0.0416).
4. About the end, d = 0.50 m: I = 0.020 + 0.24 × 0.50² = **0.080 kg·m²**, which equals (1/3)ML² as the table says.

**Interpretation.** Moving the axis 0.30 m from the centre roughly doubles I (factor 2.08). Moving it to the end multiplies it by 4.

## Worked example 3: a turntable with clay lumps

**Question.** A turntable is a uniform solid disk of mass 1.5 kg and radius 0.15 m; about its central axis I = ½MR² (given). Two 0.20 kg lumps of clay are stuck on the rim, and a third 0.20 kg lump is stuck 0.050 m from the centre. Find the total rotational inertia, and compare the disk with a hoop of the same mass and radius.

1. Disk: ½ × 1.5 kg × (0.15 m)² = **0.016875 kg·m²**.
2. Each rim lump: 0.20 × 0.15² = 0.0045 kg·m². Two of them: 0.0090 kg·m².
3. Inner lump: 0.20 × 0.050² = 0.0005 kg·m².
4. Total: 0.016875 + 0.0090 + 0.0005 = **0.026 kg·m²** (0.026375).

**Interpretation.** The three lumps together are only 0.60 kg, less than half the disk's mass, yet they raise I by about 56%. The inner lump contributes almost nothing: it is close to the axis.

**Hoop comparison.** A hoop of mass 1.5 kg and radius 0.15 m would have I = MR² = 0.034 kg·m² (0.03375), twice the disk's value, because all its mass is at the rim.

## How you could test this in the lab

You cannot read I off a meter, but you can compare rotational inertias. Wrap a string round the axle of a rotating platform and hang a mass from it. The falling mass exerts the same torque each time. Time how long the platform takes to make one revolution from rest, first with two sliding masses near the axis and then with them near the rim. A longer time means a smaller angular acceleration, so a larger rotational inertia. Topic 5.6 shows how to turn such timings into a value of I.

## Common misconceptions

- **"Rotational inertia is just the mass."** Mass is part of it, but distance from the axis matters more, because it is squared (the broom, Figure 1).
- **"An object has one rotational inertia."** It has a different value for every axis (Worked example 1).
- **"A disk has more rotational inertia than a hoop because it has more material."** With the same mass and radius, the hoop has twice as much: all its mass is far from the axis.
- **Forgetting to square r.** I = mr², so doubling r gives four times the inertia, not twice.
- **Measuring r from the wrong place.** Every r is the perpendicular distance from the same axis, not from the edge or from another mass.
- **Using the parallel axis theorem from a non-centre-of-mass axis.** Always start from I_cm, and use the total mass M.
- **Thinking the smallest I is always at the geometric centre.** It is at the centre of mass, which differs when the masses are unequal (Worked example 1(d)).

## Where this leads

Rotational inertia is the rotational partner of mass. Topic 5.5, [Rotational Equilibrium and Newton's First Law in Rotational Form](/advanced-course-resources/physics-1/5-5-rotational-equilibrium-newtons-first-law-study-guide/), uses torque to describe objects that do not change their rotation; Topic 5.6 links net torque, rotational inertia and angular acceleration. Try the [practice questions](/advanced-course-resources/physics-1/5-4-rotational-inertia-practice/) now, then use the [revision notes](/advanced-course-resources/physics-1/5-4-rotational-inertia-revision-notes/) and the [checklist](/advanced-course-resources/physics-1/5-4-rotational-inertia-checklist/). You can also go back to [Topic 5.3, Torque](/advanced-course-resources/physics-1/5-3-torque-study-guide/), or the [course roadmap](/advanced-course-resources/physics-1/#roadmap).
