---
title: "AQA A-Level Physics (7408): Gravitational fields"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Fields and their consequences"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 7.2
syllabusTopics:
  - qualification: "a-level"
    topic: "fields-and-their-consequences"
    subtopic: "gravitational-fields-aqa-alevel"
description: "AQA A-Level Physics 7408 gravitational fields in depth: Newton's law, g and potential, graphs, orbital energy, escape velocity and synchronous orbits."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into sub-section 3.7.2 Gravitational fields of the AQA AS and A-level Physics specification (7407/7408, AS and A-level exams June 2016 onwards): 3.7.2.1 Newton's law, 3.7.2.2 Gravitational field strength, 3.7.2.3 Gravitational potential and 3.7.2.4 Orbits of planets and satellites. It is **A-level only** and assessed in Paper 2.

The [Fields and their consequences study guide](/resources/aqa-a-level-physics-fields-and-their-consequences/) summarises the whole of section 3.7. For recall use the [gravitational fields revision notes](/resources/aqa-a-level-physics-7408-gravitational-fields-revision-notes/); to test yourself use the [gravitational fields practice questions](/resources/aqa-a-level-physics-7408-gravitational-fields-practice/). The general idea of a field is in the [fields study guide](/resources/aqa-a-level-physics-7408-fields/).

Values used: G = 6.67 × 10⁻¹¹ N m² kg⁻²; Earth mass 5.97 × 10²⁴ kg, radius 6.37 × 10⁶ m; Moon mass 7.35 × 10²² kg, radius 1.74 × 10⁶ m.

## What this subtopic covers

| Spec ref | Content |
|---|---|
| 3.7.2.1 | Gravity as a universal attractive force; F = Gm₁m₂/r² for point masses |
| 3.7.2.2 | Field lines; g = F/m; g = GM/r² in a radial field |
| 3.7.2.3 | Potential (zero at infinity); potential difference; ΔW = mΔV; equipotentials; V = −GM/r; significance of the minus sign; g and V graphs; g = −ΔV/Δr; ΔV from area under g–r |
| 3.7.2.4 | T² ∝ r³ derivation; energy of an orbiting satellite; escape velocity; synchronous, low and geostationary orbits |

## Newton's law and estimation

F = Gm₁m₂/r² applies to point masses; a uniform sphere acts as if all its mass were at its centre, so r is always measured **centre to centre**. The specification asks you to estimate forces between a variety of objects. Two 70 kg people 1.0 m apart attract with F = 6.67 × 10⁻¹¹ × 70 × 70/1.0² ≈ 3 × 10⁻⁷ N, far too small to notice. The Earth and Sun (Sun 1.99 × 10³⁰ kg, 1.50 × 10¹¹ m apart) attract with about 3.5 × 10²² N. Gravity is weak, but it is always attractive and masses add, so it dominates on large scales.

## Field strength

g = F/m is the force per unit mass (N kg⁻¹, equivalent to m s⁻²). Outside a spherical body, g = GM/r², so g ∝ 1/r².

**Worked example 1: where does g halve?** g falls to half its surface value when r² doubles, so r = √2 R.

```
r = 1.414 × 6.37 × 10⁶ = 9.01 × 10⁶ m
height above the surface = (√2 − 1)R = 2.64 × 10⁶ m
```

A common error is to say g halves at a height equal to R; at r = 2R it falls to a quarter.

## Potential and its graphs

**Gravitational potential** at a point is the work done per unit mass in bringing a small mass from infinity to that point. Because gravity attracts, the field does work on a mass falling in from infinity; an external agent would have to do work to push it back out. So the potential everywhere is **below** the zero at infinity: V = −GM/r. The minus sign means a mass is in a "potential well" and energy must be supplied to remove it.

**Graphs outside a sphere of radius R**:

- g against r: maximum at the surface, then falls as 1/r².
- V against r: most negative at the surface, rising towards zero as −1/r.
- The gradient of the V–r graph at a point gives the field: g = −ΔV/Δr.
- The area under the g–r graph between two radii gives ΔV between them.

**Worked example 2: why mgh fails at large heights.** Find the work done lifting 1.0 kg from Earth's surface to 1000 km above it, and compare with mgh using g = 9.81 N kg⁻¹.

```
ΔV = GM(1/R − 1/r) with r = 7.37 × 10⁶ m
   = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × (1/6.37 × 10⁶ − 1/7.37 × 10⁶)
   = 8.5 × 10⁶ J kg⁻¹, so ΔW = mΔV = 8.5 × 10⁶ J
mgh = 1.0 × 9.81 × 1.0 × 10⁶ = 9.8 × 10⁶ J
```

mgh assumes g stays at 9.81 N kg⁻¹ all the way up, but g decreases with height, so mgh overestimates the work. It is accurate only when h is much smaller than R, where the field is nearly uniform.

## Orbits

For a circular orbit, gravity provides the centripetal force:

```
GMm/r² = mv²/r  →  v² = GM/r
v = 2πr/T       →  4π²r²/T² = GM/r  →  T² = (4π²/GM)r³
```

This derivation is required by the specification. Since T² ∝ r³, a graph of log T against log r has gradient 1.5; the intercept gives the mass of the central body.

**Worked example 3: weighing a planet.** A moon orbits a planet with period 1.77 days at an orbital radius of 4.22 × 10⁸ m.

```
T = 1.77 × 86 400 = 1.53 × 10⁵ s
M = 4π²r³/(GT²) = 4π² × (4.22 × 10⁸)³/(6.67 × 10⁻¹¹ × (1.53 × 10⁵)²)
  = 1.9 × 10²⁷ kg
```

The mass of the moon cancels, which is why orbital data give the mass of the central body only.

### Energy of an orbiting satellite

```
E_k = ½mv² = GMm/2r
E_p = mV = −GMm/r
E_total = −GMm/2r
```

**Worked example 4: raising an orbit.** A 1200 kg satellite moves from an orbit of radius 7.0 × 10⁶ m to one of 1.4 × 10⁷ m around Earth.

```
GMm = 6.67 × 10⁻¹¹ × 5.97 × 10²⁴ × 1200 = 4.78 × 10¹⁷ J m
ΔE_total = (GMm/2)(1/r₁ − 1/r₂) = 2.39 × 10¹⁷ × (1.43 × 10⁻⁷ − 7.14 × 10⁻⁸)
         = 1.7 × 10¹⁰ J
Speeds: v₁ = √(GM/r₁) = 7.5 × 10³ m s⁻¹;  v₂ = 5.3 × 10³ m s⁻¹
```

Energy must be supplied, yet the satellite ends up **slower**. Potential energy rises by twice as much as kinetic energy falls, so total energy increases.

### Escape velocity

Escape velocity is the minimum speed at the surface needed to reach infinity without further propulsion. Setting kinetic energy equal to the energy needed to reach V = 0: ½mv² = GMm/R, so v = √(2GM/R). The mass m cancels. For the Moon:

```
v = √(2 × 6.67 × 10⁻¹¹ × 7.35 × 10²²/1.74 × 10⁶) = 2.4 × 10³ m s⁻¹
```

Note that v_escape = √2 × v_orbit at the same radius.

### Synchronous, geostationary and low orbits

A **synchronous orbit** has a period equal to the rotation period of the body being orbited. For a planet of mass 6.4 × 10²³ kg rotating once every 10 hours, r³ = GMT²/4π² gives r = 1.1 × 10⁷ m. A **geostationary** orbit is Earth's synchronous orbit in the equatorial plane, moving west to east, radius about 4.2 × 10⁷ m; satellites there stay above one point, so ground dishes are fixed (useful for communications and broadcasting). **Low orbits** have shorter periods and lie closer to the surface, which suits imaging and observation, but each satellite passes overhead quickly, so continuous coverage needs several satellites.

## Common mistakes

- Using height above the surface as r.
- Saying g halves at a height of one radius.
- Dropping the minus sign in V = −GM/r, or calling potential a vector.
- Using mgh for large changes of height.
- Thinking a higher orbit means a faster satellite.
- Forgetting that the satellite's mass cancels in orbital speed and period.

## Exam technique for AQA command words

- **Derive** (T² ∝ r³): start from GMm/r² = mv²/r, substitute v = 2πr/T, and show each line.
- **Explain** (minus sign): mention zero at infinity, attractive force, and work done to move a mass to infinity.
- **Show that**: substitute fully, give one more significant figure than the target.
- **Estimate**: state the values you assume, such as masses and separations.
- **Use the graph**: say whether you are using a gradient (field) or an area (potential difference).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.7.2 Gravitational fields (A-level only).
