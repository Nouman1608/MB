---
resourceId: "mb-ap-physcm-6.5-study-guide"
title: "Rolling: Study Guide (Physics C: Mechanics 6.5)"
description: "Calculus-based rolling: the v_cm = rω link derived, kinetic energy of rolling bodies, Newton's laws on a slope, why static friction does no work, and slipping with kinetic friction."
course: "physics-c-mechanics"
unit: 6
topics: ["6.5"]
resourceType: "study-guide"
prerequisites:
  - "Total kinetic energy as ½Mv_cm² + ½I_cm ω² (Topic 6.1)"
  - "Arc length s = rθ and v = rω for a point on a rotating body (Topics 5.1 and 5.2)"
  - "Newton's second law in translational and rotational form, F_net = Ma_cm and τ_net = Iα (Topics 2.5 and 5.6)"
  - "Static and kinetic friction (Topic 2.7)"
prerequisiteResources: ["mb-ap-physcm-6.4-study-guide"]
learningObjectives:
  - "Split the kinetic energy of a body that moves and spins into translational and rotational parts, and write it as ½M(1 + β)v_cm² when it rolls"
  - "Derive Δx_cm = rΔθ, v_cm = rω and a_cm = rα for rolling without slipping, and find the velocity of any point on the rim"
  - "Use Newton's laws for translation and rotation together to find the acceleration of a rolling body and the static friction it needs"
  - "Explain why static friction dissipates no energy from a body that rolls without slipping"
  - "Analyse a body that slips: treat translation and rotation separately, find when rolling starts, and find the energy kinetic friction dissipates"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. Angular speeds in rad/s. g = 9.8 m/s², the value on the course equation table. Answers to 2 or 3 significant figures"
related: ["mb-ap-physcm-6.5-revision-notes", "mb-ap-physcm-6.5-practice", "mb-ap-physcm-6.5-checklist"]
next: "mb-ap-physcm-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "A rolling body has K = ½Mv_cm² + ½I_cm ω². With I_cm = βMr² and v_cm = rω, that is K = ½M(1 + β)v_cm²."
  - "Rolling without slipping means Δx_cm = rΔθ, so v_cm = rω and a_cm = rα. The contact point is momentarily at rest."
  - "Down a slope, a_cm = g sin θ ÷ (1 + β). Bodies with more of their mass far from the axis (larger β) are slower."
  - "Static friction on an ideal rolling body does no net work: the point it acts on does not move. Mechanical energy is conserved."
  - "While slipping, v_cm ≠ rω. Kinetic friction acts at a point that slides over the surface, so it dissipates energy."
faqs:
  - question: "How is this different from the Physics 1 version of Topic 6.5?"
    answer: "They are separate courses. Physics 1 uses energy and the v = rω link with algebra, and describes slipping in words. Physics C: Mechanics derives the links by calculus, combines F = Ma with τ = Iα to find accelerations and friction, and calculates how a slipping body changes and when it starts to roll."
  - question: "Is rolling friction (rolling resistance) part of this topic?"
    answer: "No. Rolling friction, the small drag from tyres or floors squashing, is beyond the scope of the course. Treat rolling bodies and surfaces as rigid."
  - question: "Which way does static friction point on a rolling body?"
    answer: "Whichever way stops the contact point sliding. Do not guess: draw it either way, solve, and let the sign of your answer tell you."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**How this differs from the Physics 1 version.** Physics C: Mechanics and Physics 1 are **separate courses** that both have a Topic 6.5 called Rolling. This guide is the **calculus-based** one. It derives the rolling links by differentiating, combines Newton's laws for translation and rotation, and calculates how a slipping body changes until it rolls. The algebra-based treatment is in the [Physics 1 study guide](/advanced-course-resources/physics-1/6-5-rolling-study-guide/); do not mix the two when you revise.

## Kinetic energy of a body that moves and spins

From Topic 6.1, any rigid body that moves and spins has a total kinetic energy that splits into two scalar parts:

**K_tot = K_trans + K_rot = ½Mv_cm² + ½I_cm ω²**

The rotational part must use I about the centre of mass. This split holds whether the body rolls, skids or flies through the air. Rolling adds one extra fact: a link between v_cm and ω.

It helps to write the rotational inertia of round bodies as **I_cm = βMr²**, where r is the radius that touches the ground and β is a pure number:

| Body (about its central axis) | β | Rotational share of K when rolling, β/(1 + β) |
|---|---|---|
| Thin hoop or thin-walled pipe | 1 | 1/2 = 50 % |
| Thin spherical shell | 2/3 | 2/5 = 40 % |
| Uniform solid cylinder or disc | 1/2 | 1/3 ≈ 33 % |
| Uniform solid sphere | 2/5 | 2/7 ≈ 29 % |

## Rolling without slipping: deriving the links

Let a wheel of radius r roll along a flat surface without skidding. As it turns through an angle θ (in radians), the length of rim that has touched the ground is the arc length rθ. The ground under it has the same length, and the centre stays above the current contact point. So the centre moves forward by the same amount:

**Δx_cm = rΔθ**

Now differentiate with respect to time. r is constant, so:

**v_cm = dx_cm/dt = r dθ/dt = rω**

**a_cm = dv_cm/dt = r dω/dt = rα**

These three equations are the **rolling condition**. They hold only while there is no slipping. Use them to replace ω by v_cm/r, which gives the rolling kinetic energy in one term:

**K = ½Mv_cm² + ½(βMr²)(v_cm/r)² = ½M(1 + β)v_cm²**

### The velocity of any point on the rim

Each point of the wheel has the velocity of the centre plus its velocity of rotation about the centre: **v = v_cm + v′**, where v′ has size rω = v_cm and is tangent to the rim. Adding the vectors gives:

- **Contact point:** v_cm forward plus v_cm backward = **0**. The contact point is momentarily at rest.
- **Top:** v_cm + v_cm = **2v_cm** forward.
- **Front and back points (level with the centre):** v_cm forward plus v_cm vertical, so speed **√2 v_cm** at 45° to the ground.

A neat way to see all of this at once: at each instant the wheel turns about the contact point P with the same ω. Each point moves at right angles to the line joining it to P, with speed ω × (its distance from P). The top is 2r from P, so it moves at 2rω (Figure 1).

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="pcm-65-rim-title pcm-65-rim-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-65-rim-title">Velocities of points on a wheel rolling to the right</title>
<desc id="pcm-65-rim-desc">A wheel of radius r rests on a ground line and rolls to the right, turning clockwise. The contact point P at the bottom is marked with a filled dot and labelled v = 0. Dashed lines join P to the centre, to the top, to the front point level with the centre and to the back point level with the centre. The centre has a right-pointing arrow labelled v_cm. The top has a right-pointing arrow twice as long labelled 2v_cm. The front point has an arrow pointing right and down at 45 degrees, labelled √2 v_cm. The back point has an arrow pointing right and up at 45 degrees, also labelled √2 v_cm. Each arrow is at right angles to its dashed line from P. A note says each point moves as if the wheel were turning about P, with speed ω times its distance from P.</desc>
<defs><marker id="pcm-65-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="560" height="300" fill="#ffffff"/>
<path d="M20 230 H540" stroke="#1d2b44" stroke-width="2"/>
<circle cx="180" cy="150" r="80" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#1d2b44" stroke-width="1.3" stroke-dasharray="5 4" fill="none">
<path d="M180 230 L180 70"/><path d="M180 230 L260 150"/><path d="M180 230 L100 150"/>
</g>
<g stroke="#1d2b44" stroke-width="2.5" fill="none" marker-end="url(#pcm-65-arr)">
<path d="M180 150 H240"/><path d="M180 70 H300"/><path d="M260 150 L320 210"/><path d="M100 150 L160 90"/>
</g>
<path d="M150 112 A45 45 0 0 1 222 120" fill="none" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pcm-65-arr)"/>
<g fill="#1d2b44"><circle cx="180" cy="230" r="5"/><circle cx="180" cy="150" r="3.5"/><circle cx="180" cy="70" r="3.5"/><circle cx="260" cy="150" r="3.5"/><circle cx="100" cy="150" r="3.5"/></g>
<g font-size="12" fill="#1d2b44">
<text x="190" y="250">P: v = 0</text>
<text x="244" y="146">v_cm</text>
<text x="306" y="66">2v_cm</text>
<text x="326" y="214">√2 v_cm</text>
<text x="56" y="92">√2 v_cm</text>
<text x="186" y="104">ω (clockwise)</text>
<text x="390" y="110">Each point moves at right</text>
<text x="390" y="126">angles to its dashed line</text>
<text x="390" y="142">from P, with speed</text>
<text x="390" y="158">ω × (distance from P).</text>
<text x="390" y="190">Top: distance 2r → 2v_cm</text>
<text x="390" y="206">Centre: distance r → v_cm</text>
<text x="390" y="222">Front, back: distance √2 r</text>
</g>
</svg>
<figcaption>Figure 1. A wheel rolling to the right without slipping. Arrow lengths are drawn to scale. The contact point P is at rest for an instant, and every other point moves as if the wheel were turning about P.</figcaption>
</figure>

The same view gives the kinetic energy another way. About P, I_P = I_cm + Mr² by the parallel axis theorem, so ½I_P ω² = ½I_cm ω² + ½M(rω)², the same total as the split formula. Use one method or the other, never both.

## Why static friction does no work here

On a slope, or while a rolling body speeds up, static friction at the contact point is usually needed. It supplies the torque that changes ω so that ω keeps up with v_cm/r.

But in the ideal case it removes **no energy**. The rate at which a force does work is P = F · v, where v is the velocity of the material point the force acts on. Static friction acts at the contact point, whose velocity is zero. So its power is zero at every instant, and it does no work on the body.

Another way to see it: friction does negative work on the translation (−f Δx_cm) and the same amount of positive work on the rotation (+fr Δθ = +f Δx_cm). The two cancel. For an ideal rolling body, **mechanical energy is conserved**, even though a friction force acts. (Real tyres and floors squash a little, which causes rolling friction. That is outside the course.)

## Rolling down a slope: Newton's laws together

Take a body with I_cm = βMr² rolling without slipping down a slope at angle θ. Take **+x down the slope** and **clockwise rotation positive**, so that a_cm = rα with both positive. Forces: gravity Mg at the centre, normal force N and static friction f, both at the contact point. Assume f acts up the slope.

1. Translation along the slope: Mg sin θ − f = Ma_cm.
2. Rotation about the centre: only friction has a torque, fr = I_cm α = βMr² α.
3. Rolling condition: α = a_cm/r, so f = βMa_cm.
4. Substitute into step 1: Mg sin θ = Ma_cm(1 + β), so

**a_cm = g sin θ ÷ (1 + β)**  and  **f = βMg sin θ ÷ (1 + β)**

Friction came out positive, so it does act up the slope. Static friction can be at most μ_s N = μ_s Mg cos θ, so rolling without slipping needs

**μ_s ≥ β tan θ ÷ (1 + β)**

Energy gives the same speed with less work. From rest, after the centre drops h: Mgh = ½M(1 + β)v², so **v = √(2gh ÷ (1 + β))**. Mass and radius cancel. Only β matters: a solid sphere (smallest β in the table) beats a disc, which beats a hoop, whatever their sizes.

## Rolling while slipping

If a wheel skids, spins on the spot or slides with too little spin, **v_cm ≠ rω**. The rolling condition is gone, and so is the shortcut between translation and rotation. Instead, treat them as two separate equations:

- **Translation:** F_net = Ma_cm, with kinetic friction of size μ_k N.
- **Rotation:** τ_net = I_cm α about the centre.

Kinetic friction always opposes the sliding of the contact point over the surface. Work out the contact point's velocity, v_cm − rω (for a wheel moving right and turning clockwise), and point friction the other way.

Now the contact point **moves** relative to the surface, so kinetic friction does dissipate energy. The energy dissipated equals the friction force multiplied by the **distance the contact point slides**, not the distance the centre moves. Sliding continues until v_cm = rω. After that, the body rolls and friction stops dissipating energy.

## Worked example 1: a roller with denser outer layers

**Question.** A solid roller of radius R = 0.10 m and mass M = 2.0 kg is made in layers, so that its density grows in proportion to the distance s from its axis: ρ = ks. It rolls without slipping from rest down a slope at 30° to the horizontal. (a) Show that I_cm = (3/5)MR². (b) Find its acceleration and the friction force on it. (c) Find the smallest coefficient of static friction that allows rolling. (d) Find its speed after it has rolled 2.0 m along the slope, and check by energy.

**(a)** Take a thin cylindrical shell of radius s, thickness ds and length L. Its volume is 2πsL ds, so dm = ks × 2πsL ds.

1. M = ∫₀ᴿ 2πkL s² ds = 2πkLR³/3.
2. I = ∫₀ᴿ s² dm = ∫₀ᴿ 2πkL s⁴ ds = 2πkLR⁵/5.
3. I ÷ (MR²) = (1/5) ÷ (1/3) = **3/5**. So β = 0.60, between a disc (0.50) and a hoop (1).

**(b)** +x down the slope.

1. a_cm = g sin θ ÷ (1 + β) = 9.8 × 0.50 ÷ 1.60 = **3.06 m/s²**.
2. f = βMa_cm = 0.60 × 2.0 × 3.0625 = **3.7 N**, up the slope.

**Check.** Mg sin θ − f = 9.8 − 3.675 = 6.125 N, and Ma_cm = 2.0 × 3.0625 = 6.125 N. ✓

**(c)** μ_s ≥ β tan θ ÷ (1 + β) = 0.60 × 0.577 ÷ 1.60 = **0.22**.

**(d)** Constant acceleration from rest: v² = 2a_cm d = 2 × 3.0625 × 2.0 = 12.25, so **v = 3.5 m/s** and ω = v/R = **35 rad/s**.

**Energy check.** The centre drops h = 2.0 × sin 30° = 1.0 m, so Mgh = 19.6 J. At the bottom, K_trans = ½ × 2.0 × 3.5² = 12.25 J and K_rot = ½ × (0.60 × 2.0 × 0.10²) × 35² = 7.35 J. Total 19.6 J. ✓ No energy is lost. Friction did −7.35 J of work on the translation (−f × 2.0 m) and +7.35 J on the rotation (τΔθ = fR × 20 rad).

**Interpretation.** A block sliding down a frictionless slope from the same height would reach √(2gh) = 4.4 m/s. The roller is slower because 37.5 % of its kinetic energy is in rotation, not because friction wasted any.

## Worked example 2: a cylinder that lands sliding

**Question.** A uniform solid steel cylinder (M = 12 kg, r = 0.080 m, I_cm = ½Mr²) slides off a conveyor onto a level floor. It lands moving to the right at v₀ = 6.0 m/s with no spin. The coefficient of kinetic friction is μ_k = 0.20. Take **+x to the right** and **clockwise positive**. (a) Find v_cm(t) and ω(t) while it slips. (b) When does it start to roll, and how fast is it then moving? (c) How much energy does friction dissipate?

**(a)** At landing, the contact point moves right at v_cm − rω = 6.0 m/s, so kinetic friction acts to the left with size f = μ_k Mg = 0.20 × 12 × 9.8 = 23.52 N.

1. Translation: a_cm = −f/M = −μ_k g = −1.96 m/s², so **v_cm = 6.0 − 1.96t**.
2. Rotation: friction acts at the bottom, to the left, which turns the cylinder clockwise. α = fr ÷ (½Mr²) = 2μ_k g/r = **49 rad/s²**, so **ω = 49t** and rω = 3.92t (m/s).

**(b)** Slipping stops when v_cm = rω: 6.0 − 1.96t = 3.92t, so **t = 1.02 s**. Then v_cm = 6.0 − 1.96 × 1.0204 = **4.0 m/s** and ω = 4.0 ÷ 0.080 = **50 rad/s**. After this, the contact point is at rest, friction drops to zero, and the cylinder rolls on at 4.0 m/s (Figure 2). In symbols, v_final = v₀ ÷ (1 + β) = ⅔v₀.

**(c)** Kinetic energy before: ½ × 12 × 6.0² = 216 J. After: ½M(1 + β)v² = ½ × 12 × 1.5 × 4.0² = 144 J. So **72 J** is dissipated, one third of the original energy.

**Check with the sliding distance.** The contact point slides at v_cm − rω = 6.0 − 5.88t. Integrate from 0 to 1.0204 s: 6.0 × 1.0204 − 2.94 × 1.0204² = 3.06 m. Friction × sliding distance = 23.52 × 3.06 = **72 J**. ✓

**Why not friction × distance moved by the centre?** The centre moves 5.10 m, so −f Δx_cm = −120 J. That is the work on the translation alone; it takes K_trans from 216 J to 96 J. The torque of the same friction does +48 J on the rotation, giving K_rot = 48 J. Net: −120 + 48 = −72 J.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pcm-65-slip-title pcm-65-slip-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pcm-65-slip-title">Centre-of-mass speed and rim speed against time for a cylinder that lands sliding</title>
<desc id="pcm-65-slip-desc">Speed in metres per second from 0 to 7 against time in seconds from 0 to 2. A solid line for v_cm starts at 6.0 m/s and falls in a straight line. A dashed line for r times omega starts at 0 and rises in a straight line. The two lines meet at t = 1.02 s at 4.0 m/s. The region between them before they meet is hatched and labelled slipping, v_cm greater than r omega; its area is 3.06 m, the distance the contact point slides. After 1.02 s a single solid horizontal line at 4.0 m/s is labelled rolling, v_cm = r omega.</desc>
<defs><pattern id="pcm-65-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 V6" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="560" height="330" fill="#ffffff"/>
<g stroke="#1d2b44" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.5">
<path d="M175 270 V50 M280 270 V50 M385 270 V50 M490 270 V50"/>
<path d="M70 210 H500 M70 150 H500 M70 90 H500"/>
</g>
<polygon points="70,90 284.3,150 70,270" fill="url(#pcm-65-hatch)" stroke="none"/>
<path d="M70 270 H515 M70 270 V40" stroke="#1d2b44" stroke-width="2" fill="none"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="288">0</text><text x="175" y="288">0.5</text><text x="280" y="288">1.0</text><text x="385" y="288">1.5</text><text x="490" y="288">2.0</text>
<text x="290" y="312" font-size="13">time, t (s)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="274">0</text><text x="62" y="214">2</text><text x="62" y="154">4</text><text x="62" y="94">6</text>
</g>
<text x="22" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 22 160)">speed (m/s)</text>
<path d="M70 90 L284.3 150 H490" stroke="#1d2b44" stroke-width="2.5" fill="none"/>
<path d="M70 270 L284.3 150" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="8 5" fill="none"/>
<circle cx="284.3" cy="150" r="4.5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="96" y="80">v_cm (solid): 6.0 − 1.96t</text>
<text x="150" y="258">rω (dashed): 3.92t</text>
<rect x="74" y="137" width="104" height="52" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/>
<text x="80" y="152" font-weight="600">slipping</text>
<text x="80" y="167">hatched area</text>
<text x="80" y="182">= 3.06 m slid</text>
<text x="292" y="140">rolling starts: 1.02 s, 4.0 m/s</text>
<text x="370" y="172">rolling: v_cm = rω</text>
</g>
</svg>
<figcaption>Figure 2. The cylinder in Worked example 2. Friction slows the centre and spins up the rim until the two speeds match. The area between the lines is the distance the contact point slides; multiplying it by the friction force gives the 72 J dissipated.</figcaption>
</figure>

## Common misconceptions

- **"Friction on a rolling ball wastes energy."** Static friction on an ideal rolling body does no net work. The body is slower than a sliding block because energy goes into rotation.
- **Using v_cm = rω while the body slips.** The link holds only for rolling without slipping. While slipping, solve translation and rotation separately.
- **"Static friction always points backwards."** Its direction depends on what would make the contact point slide. Draw it, solve, and read the sign.
- **Using μ_s N as the static friction force.** μ_s N is the maximum. The actual f comes from Newton's laws (βMg sin θ ÷ (1 + β) on a slope).
- **Energy dissipated = friction × distance moved by the centre.** Use the distance the contact point slides over the surface.
- **"Bigger or heavier balls roll down faster."** For rolling without slipping, a_cm depends only on β and θ.
- **Using I about the contact point and adding ½Mv_cm².** That counts the translation twice.
- **"The whole wheel moves at v_cm."** The top moves at 2v_cm and the contact point is at rest.

## Where this leads

Rolling ties together everything in Units 5 and 6: rotational inertia, torque, rotational kinetic energy and angular momentum. Angular momentum about a fixed point on the floor is also useful for slipping problems, as Practice Question 6 shows. Next, Topic 6.6 returns to gravity and uses conservation of energy and angular momentum for satellites. Try the [practice questions](/advanced-course-resources/physics-c-mechanics/6-5-rolling-practice/) now, then use the [revision notes](/advanced-course-resources/physics-c-mechanics/6-5-rolling-revision-notes/) and the [checklist](/advanced-course-resources/physics-c-mechanics/6-5-rolling-checklist/). When you are ready, move on to [Topic 6.6, Motion of Orbiting Satellites](/advanced-course-resources/physics-c-mechanics/6-6-motion-orbiting-satellites-study-guide/), go back to [Topic 6.4, Conservation of Angular Momentum](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-study-guide/), or return to the [course roadmap](/advanced-course-resources/physics-c-mechanics/#roadmap).
