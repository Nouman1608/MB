---
resourceId: "mb-ap-physcm-5.4-study-guide"
title: "Rotational Inertia: Study Guide (Physics C: Mechanics 5.4)"
description: "Rotational inertia by summation and by integration: I = Σmr², I = ∫r² dm for rods, shells, disks and annular rings, nonuniform rods, and the parallel axis theorem."
course: "physics-c-mechanics"
unit: 5
topics: ["5.4"]
resourceType: "study-guide"
prerequisites:
  - "Torque about an axis (Topic 5.3)"
  - "Centre of mass, including linear mass density λ for a rod (Topic 2.1)"
  - "Integrating polynomials with limits"
prerequisiteResources: ["mb-ap-physcm-5.3-study-guide"]
learningObjectives:
  - "Explain how rotational inertia depends on mass and on how that mass is spread about the axis"
  - "Calculate I = Σmr² for a collection of small objects about a given axis"
  - "Derive I = ∫r² dm for uniform and nonuniform rods about any perpendicular axis"
  - "Derive I for a thin cylindrical shell, a uniform disk and an annular ring by adding coaxial rings"
  - "Use the parallel axis theorem and explain why I is smallest about an axis through the centre of mass"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Integrals by hand; calculator for arithmetic only. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-5.4-revision-notes", "mb-ap-physcm-5.4-practice", "mb-ap-physcm-5.4-checklist"]
next: "mb-ap-physcm-5.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Rotational inertia I measures how hard it is to change an object's rotation about a given axis. Unit: kg·m²."
  - "For small objects, I = Σmr², where r is the perpendicular distance from each mass to the axis."
  - "For a continuous object, I = ∫r² dm. Choose dm so that all of it is the same distance from the axis."
  - "Results to know how to derive: rod ML²/12 (centre) and ML²/3 (end); hoop or shell MR²; disk ½MR²; annulus ½M(R₁² + R₂²)."
  - "Parallel axis theorem: I = I_cm + Md². I is smallest about an axis through the centre of mass."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 5.4?"
    answer: "They are separate courses with the same topic title. Physics 1 uses I = Σmr², given formulas and the parallel axis theorem. Physics C: Mechanics adds calculus: you derive I = ∫r² dm for rods (including nonuniform ones), shells, disks and annular rings."
  - question: "Do I need to derive the rotational inertia of a solid sphere?"
    answer: "No. The derivations expected are for thin rods about a perpendicular axis, and for thin cylindrical shells, disks and other shapes built from coaxial rings or shells about their central axis. If a sphere appears, expect its I to be given, or to be asked only to reason about it qualitatively."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 5.4 called Rotational Inertia. This guide is the one for the **calculus-based** course. As well as adding up point masses, you will **derive** rotational inertias by integration. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/5-4-rotational-inertia-study-guide/); do not mix the two when you revise.

## Resistance to changes in rotation

Mass measures how hard it is to change an object's velocity. **Rotational inertia** I does the same job for rotation: it measures how hard it is to change a rigid system's angular velocity about a given axis. Topic 5.6 will show that the same net torque gives a smaller angular acceleration when I is larger.

I depends on two things:

- **the mass** of the system, and
- **how that mass is spread out relative to the axis.** Mass far from the axis counts much more than mass close to it.

So I is not a fixed property of an object. It belongs to an object **and an axis**. Always say which axis.

## Point masses: I = mr²

A small object of mass m, a perpendicular distance r from the axis, has

**I = mr²** (unit: kg·m²)

For a collection of small objects about **the same axis**, add their contributions:

**I = Σ mᵢrᵢ²**

Here r is the **perpendicular distance to the axis**, not the distance to the origin. If the axis is the y-axis, a mass at (x, y) has r = |x|. If the axis is the z-axis, r = √(x² + y²). A mass on the axis adds nothing.

Because r is squared, doubling a mass's distance from the axis makes its contribution four times as big.

## Continuous objects: I = ∫r² dm

A solid object is a collection of tiny masses dm. The sum becomes an integral:

**I = ∫ r² dm**

where r is the perpendicular distance from dm to the axis. The method is always the same:

1. **Choose an element dm whose parts are all the same distance r from the axis.** For a thin rod, a short slice of length dx. For a disk about its centre, a thin ring of radius r.
2. **Write dm in terms of a density and a coordinate.** Rod: dm = λ dx, with λ the mass per unit length (kg/m). Flat disk: dm = σ dA = σ(2πr dr), with σ the mass per unit area (kg/m²).
3. **Integrate r² dm over the whole object,** with limits that cover it once.
4. **Use the total mass** (M = ∫dm) to replace λ or σ by M.

<figure>
<svg viewBox="0 0 600 260" role="img" aria-labelledby="pcm-ri-title pcm-ri-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-ri-title">Choosing mass elements for a rod and for a disk</title>
<desc id="pcm-ri-desc">Left panel: a thin rod lies along an x-axis from 0 to L. A dash-dot axis line crosses it at x = 0, perpendicular to the rod. A small shaded slice of the rod at position x, of width dx, is labelled dm = lambda dx. A dimension arrow below shows its distance x from the axis. Right panel: a disk of radius R seen face-on, with the rotation axis through its centre perpendicular to the page, shown as a dot inside a circle. A thin shaded ring of radius r and width dr is drawn inside the disk and labelled dm = sigma times 2 pi r dr.</desc>
<rect x="0" y="0" width="600" height="260" fill="#ffffff"/>
<defs><marker id="pcm-ri-ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="60" y="112" width="240" height="14" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="196" y="112" width="14" height="14" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M60 60 V190" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="10 4 2 4"/>
<path d="M62 160 L201 160" stroke="#1d2b44" stroke-width="1.5" marker-start="url(#pcm-ri-ar)" marker-end="url(#pcm-ri-ar)"/>
<g font-size="13" fill="#1d2b44">
<text x="36" y="52">axis</text>
<text x="124" y="178">x</text>
<text x="170" y="100">dm = λ dx</text>
<text x="54" y="146">0</text>
<text x="294" y="146">L</text>
<text x="190" y="216">width dx</text>
</g>
<path d="M203 128 V200" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<circle cx="450" cy="130" r="95" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="450" cy="130" r="57" fill="none" stroke="#fdf6e3" stroke-width="12"/>
<circle cx="450" cy="130" r="51" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<circle cx="450" cy="130" r="63" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<circle cx="450" cy="130" r="7" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<circle cx="450" cy="130" r="2.5" fill="#1d2b44"/>
<path d="M450 130 L506 120" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm-ri-ar)"/>
<path d="M450 130 L383 197" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm-ri-ar)"/>
<g font-size="13" fill="#1d2b44">
<text x="470" y="114">r</text>
<text x="398" y="178">R</text>
<text x="380" y="248">ring: dm = σ(2πr dr)</text>
<text x="420" y="22">axis out of page</text>
</g>
</svg>
<figcaption>Figure 1. Choosing dm. Left: every part of a thin slice of rod is the same distance x from the axis. Right: every part of a thin ring is the same distance r from the centre of a disk.</figcaption>
</figure>

## Deriving the standard results

**Uniform rod, axis perpendicular to the rod at any point.** Put the rod along x from 0 to L, with λ = M/L, and the axis at x = a. A slice at x is a distance |x − a| from the axis, and r² = (x − a)²:

I = ∫₀ᴸ (x − a)² (M/L) dx = **M(L²/3 − La + a²)**

- Axis at the centre, a = L/2: **I = ML²/12**.
- Axis at one end, a = 0: **I = ML²/3**, four times larger.

**Thin hoop or thin cylindrical shell, axis along its centre line.** Every bit of mass is at the same distance R from the axis, so I = ∫R² dm = R²∫dm = **MR²**. The length of a cylindrical shell along the axis does not matter; only the distance from the axis does.

**Uniform disk (or solid cylinder) about its central axis.** Use rings. σ = M/(πR²), and a ring of radius r and width dr has dm = σ(2πr dr):

I = ∫₀ᴿ r² σ 2πr dr = 2πσ R⁴/4 = **½MR²**

**Annular ring (a disk with a hole), inner radius R₁, outer radius R₂.** Same rings, from R₁ to R₂, with σ = M/[π(R₂² − R₁²)]:

I = 2πσ (R₂⁴ − R₁⁴)/4 = **½M(R₁² + R₂²)**

Check the limits: R₁ → 0 gives the disk, ½MR₂². R₁ → R₂ gives the hoop, MR₂². Figure 2 shows how I changes between the two.

**Why a hoop beats a disk.** A hoop and a disk of the same mass and radius do not have the same I. In the hoop all the mass sits at R. In the disk much of it is near the centre, where r² is small. So I_hoop = MR² is twice I_disk = ½MR².

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="pcm-ri2-title pcm-ri2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-ri2-title">Rotational inertia of an annular ring against the ratio of its radii</title>
<desc id="pcm-ri2-desc">I divided by M R2 squared, from 0.4 to 1.0, against the ratio R1 over R2 from 0 to 1. The curve is half of one plus the ratio squared. It starts at 0.5 when the ratio is 0, labelled solid disk, passes through 0.58 at ratio 0.4, labelled Worked example 3 flywheel, and rises more steeply to 1.0 at ratio 1, labelled thin hoop.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M80 250 H500 M80 210 H500 M80 170 H500 M80 130 H500 M80 90 H500 M80 50 H500"/>
<path d="M164 290 V50 M248 290 V50 M332 290 V50 M416 290 V50 M500 290 V50"/>
</g>
<path d="M80 290 H515 M80 290 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="308">0</text><text x="164" y="308">0.2</text><text x="248" y="308">0.4</text><text x="332" y="308">0.6</text><text x="416" y="308">0.8</text><text x="500" y="308">1.0</text>
<text x="290" y="330" font-size="13">ratio of radii, R₁/R₂</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="294">0.4</text><text x="72" y="254">0.5</text><text x="72" y="214">0.6</text><text x="72" y="174">0.7</text><text x="72" y="134">0.8</text><text x="72" y="94">0.9</text><text x="72" y="54">1.0</text>
</g>
<text x="22" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 170)">I ÷ (M R₂²)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,250.0 90.5,249.9 101.0,249.5 111.5,248.9 122.0,248.0 132.5,246.9 143.0,245.5 153.5,243.9 164.0,242.0 174.5,239.9 185.0,237.5 195.5,234.9 206.0,232.0 216.5,228.9 227.0,225.5 237.5,221.9 248.0,218.0 258.5,213.9 269.0,209.5 279.5,204.9 290.0,200.0 300.5,194.9 311.0,189.5 321.5,183.9 332.0,178.0 342.5,171.9 353.0,165.5 363.5,158.9 374.0,152.0 384.5,144.9 395.0,137.5 405.5,129.9 416.0,122.0 426.5,113.9 437.0,105.5 447.5,96.9 458.0,88.0 468.5,78.9 479.0,69.5 489.5,59.9 500.0,50.0"/>
<rect x="75" y="245" width="10" height="10" fill="#1d2b44"/>
<circle cx="248" cy="218" r="6" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<path d="M494 44 L506 56 M506 44 L494 56" stroke="#1d2b44" stroke-width="2.5"/>
<g font-size="12" fill="#1d2b44">
<text x="92" y="272">solid disk: 0.50 (square)</text>
<text x="258" y="240">flywheel, Worked example 3: 0.58 (circle)</text>
<text x="352" y="44">thin hoop: 1.00 (cross)</text>
</g>
</svg>
<figcaption>Figure 2. For an annular ring of fixed mass and outer radius, I = ½M(R₁² + R₂²) rises from ½MR₂² (solid disk) to MR₂² (hoop) as the hole grows and the mass moves outwards.</figcaption>
</figure>

**What you derive and what is given.** In this course, calculus derivations are expected for thin rods (uniform or not) about any axis perpendicular to the rod, and for thin cylindrical shells, disks and other shapes built from **coaxial rings or shells**, about their central axis. For other shapes, such as a solid sphere, expect the rotational inertia to be given; you only need to reason about it qualitatively.

## The parallel axis theorem

If you know I_cm about an axis through the **centre of mass**, you can find I about any **parallel** axis a distance d away:

**I = I_cm + Md²**

Check with the rod: ML²/12 + M(L/2)² = ML²/3, which matches the integral. In fact the rod result M(L²/3 − La + a²) is exactly ML²/12 + M(a − L/2)².

Two consequences:

- Md² is never negative, so **I is smallest about an axis through the centre of mass**. Every parallel axis gives a larger I.
- The theorem always starts **from the centre-of-mass axis**. To go from one off-centre axis to another, go through I_cm.

## Worked example 1: a three-arm spinner

**Question.** A spinner toy has three small 0.050 kg weights on light arms, each 0.12 m from the centre, spaced 120° apart. Find I about (a) an axis through the centre, perpendicular to the toy, and (b) a parallel axis through one of the weights. (c) Check (b) with the parallel axis theorem.

1. **(a)** All three weights are 0.12 m from the axis: I = 3 × 0.050 × 0.12² = **2.16 × 10⁻³ kg·m²**.
2. **(b)** The axis weight has r = 0. The other two are one side of the equilateral triangle away: s = 0.12√3 = 0.208 m, so s² = 3(0.12)² = 0.0432 m². I = 2 × 0.050 × 0.0432 = **4.32 × 10⁻³ kg·m²**.
3. **(c)** The centre of mass is at the centre (symmetry). M = 0.15 kg and d = 0.12 m: I = 2.16 × 10⁻³ + 0.15 × 0.12² = 2.16 × 10⁻³ + 2.16 × 10⁻³ = **4.32 × 10⁻³ kg·m²**. ✓

**Interpretation.** Moving the axis from the centre to a weight doubles I. The centre-of-mass axis gives the smaller value, as it must.

## Worked example 2: a nonuniform rod

**Question.** A tapered rod of length L lies along x from 0 to L. Its mass per unit length is λ(x) = λ₀(1 + x/L), so the end at x = L is twice as dense as the end at x = 0. (a) Find its mass M. (b) Derive I about a perpendicular axis through x = 0, in terms of M and L. (c) Find the centre of mass and I_cm. (d) Find I about the dense end, x = L. (e) Evaluate for M = 0.90 kg and L = 1.2 m.

1. **(a)** M = ∫₀ᴸ λ₀(1 + x/L) dx = λ₀(L + L/2) = **3λ₀L/2**, so λ₀ = 2M/(3L).
2. **(b)** I₀ = ∫₀ᴸ x² λ₀(1 + x/L) dx = λ₀(L³/3 + L³/4) = 7λ₀L³/12. Substituting λ₀: **I₀ = 7ML²/18** ≈ 0.389ML².
3. **(c)** x_cm = (1/M)∫₀ᴸ x λ dx = λ₀(L²/2 + L²/3)/M = **5L/9**. Then I_cm = I₀ − M(5L/9)² = 7ML²/18 − 25ML²/81 = **13ML²/162** ≈ 0.0802ML².
4. **(d)** The dense end is L − 5L/9 = 4L/9 from the centre of mass: I_L = 13ML²/162 + M(4L/9)² = 13ML²/162 + 32ML²/162 = **5ML²/18** ≈ 0.278ML². (Integrating ∫(L − x)² λ dx directly gives the same.)
5. **(e)** I₀ = **0.504 kg·m²**, I_cm = **0.104 kg·m²**, I_L = **0.360 kg·m²**, with x_cm = 0.667 m.

**Check.** A uniform rod of the same M and L has I = 0.432 kg·m² about either end. Spinning about the light end, the tapered rod has more mass far away, so its I is larger (0.504). Spinning about the dense end, the heavy part is close, so its I is smaller (0.360). Its I_cm is just below ML²/12 = 0.108 kg·m², because its mass is slightly more bunched around the centre of mass.

## Worked example 3: an annular flywheel

**Question.** A flywheel is a flat steel ring of mass 4.0 kg, inner radius 0.10 m and outer radius 0.25 m. Find I about its central axis and compare it with a solid disk and a thin hoop of the same mass and outer radius.

1. Annulus: I = ½M(R₁² + R₂²) = ½ × 4.0 × (0.010 + 0.0625) = **0.145 kg·m²**.
2. Solid disk: ½MR₂² = ½ × 4.0 × 0.0625 = **0.125 kg·m²**.
3. Hoop: MR₂² = 4.0 × 0.0625 = **0.250 kg·m²**.

**Interpretation.** Cutting out the centre and keeping the mass the same pushes mass outwards, so I rises from 0.125 to 0.145 kg·m², a ratio R₁/R₂ = 0.4 on Figure 2. Flywheel designers put as much of the mass as possible near the rim for this reason.

## Linking to experiments

You cannot see I directly. In Topic 5.6 you will measure it from how a known torque changes the rotation. A clear test of I = Σmr² is to clamp two equal masses at the same distance r on either side of a light rotating bar, measure I for several values of r, and **plot I against r²**. The prediction is a straight line: slope 2m, intercept equal to I of the bar and hub alone. Practice Question 6 uses data like this.

## Common misconceptions

- **"I depends only on mass."** Mass distribution and the axis matter as much (Worked example 1).
- **Using the distance to the origin.** r is the perpendicular distance to the axis.
- **Using r instead of r².** A mass twice as far contributes four times as much.
- **Choosing dm badly.** All of dm must be the same distance from the axis; a thin slice across a disk does not work for its central axis.
- **Forgetting to replace λ or σ by M.** Answers should be in terms of M and the lengths.
- **Jumping between two off-centre axes with Md².** The parallel axis theorem starts from I_cm (practice Question 7).
- **"Same mass and radius means same I."** A hoop has twice the I of a disk.
- **Adding I values about different axes.** Sum only about one axis.

## Where this leads

Topic 5.5, [Rotational Equilibrium and Newton's First Law in Rotational Form](/advanced-course-resources/physics-c-mechanics/5-5-rotational-equilibrium-newtons-first-law-study-guide/), uses net torque to describe steady rotation, and Topic 5.6 combines net torque and I to find angular acceleration. Rotational inertia also returns in Unit 6, for rotational kinetic energy. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/5-4-rotational-inertia-checklist/). You can also go back to [Topic 5.3, Torque](/advanced-course-resources/physics-c-mechanics/5-3-torque-study-guide/), or the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
