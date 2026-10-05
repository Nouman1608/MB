---
resourceId: "mb-ap-physcem-9.1-study-guide"
title: "Electric Potential Energy: Study Guide (Physics C: E&M 9.1)"
description: "Calculus-based guide to electric potential energy: deriving U = kq₁q₂/r from the work done, signs and graphs of U(r), and the energy of systems of several charges."
course: "physics-c-electricity-and-magnetism"
unit: 9
topics: ["9.1"]
resourceType: "study-guide"
prerequisites:
  - "Coulomb's law and superposition of forces (Topic 8.1)"
  - "Work as the integral of force along a path, and conservative forces (Physics C: Mechanics)"
  - "Gauss's law results for spherical charge distributions (Topic 8.6)"
prerequisiteResources: ["mb-ap-physcem-8.6-study-guide"]
learningObjectives:
  - "Explain electric potential energy as the work an external force does to assemble charges from infinitely far apart"
  - "Derive U = q₁q₂/(4πε₀r) by integrating the external force from infinity"
  - "Interpret the sign of U for like and unlike charges and sketch U against separation"
  - "Find the total potential energy of three or more charges by adding the energy of every pair once"
  - "Relate the work done by external and electric forces to the change in potential energy"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "1/(4πε₀) = k = 8.99 × 10⁹ N·m²/C², ε₀ = 8.85 × 10⁻¹² C²/(N·m²), e = 1.60 × 10⁻¹⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-physcem-9.1-revision-notes", "mb-ap-physcem-9.1-practice", "mb-ap-physcem-9.1-checklist"]
next: "mb-ap-physcem-9.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "The electric potential energy of two point charges is the work an external force does to bring them slowly from infinitely far apart to separation r."
  - "U = q₁q₂/(4πε₀r). Keep the signs: like charges give U > 0, unlike charges give U < 0."
  - "U falls off as 1/r; the force falls off as 1/r². The radial force is the negative slope of the U(r) graph: F_r = −dU/dr."
  - "For three or more charges, add U for every pair exactly once: N charges have N(N − 1)/2 pairs."
  - "Potential energy belongs to the system of charges, not to one charge."
faqs:
  - question: "Is electric potential energy the same as electric potential?"
    answer: "No. Potential energy U (joules) belongs to a system of charges. Electric potential V (volts) is potential energy per unit charge at a point in space. Potential is Topic 9.2."
  - question: "Why is the zero of potential energy put at infinite separation?"
    answer: "At infinite separation the charges do not interact, so it is a natural reference. Only changes in U have physical meaning, so any fixed reference would work, but U = kq₁q₂/r assumes this one."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 9.1, the first topic of Unit 9. You will use an integral of force to find energy. The algebra-based Physics 2 course uses the same final result but does not derive it.

Constants used throughout: **k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²**, ε₀ = 8.85 × 10⁻¹² C²/(N·m²) and e = 1.60 × 10⁻¹⁹ C.

## Energy stored in an arrangement of charges

In Unit 8 you described electric interactions with forces and fields. Unit 9 describes the same interactions with **energy**. Energy is often easier to use because it is a scalar: you add numbers, not vectors.

Picture two point charges, q₁ and q₂, very far apart. They do not interact, so we say their electric potential energy is **zero**. Now an external agent (your hand, say) brings them together until they are a distance r apart. It moves them **slowly**, so they gain no kinetic energy.

The **electric potential energy** U of the two-charge system is the **work this external force does** to bring the charges from infinitely far apart to their present positions.

- If the charges repel, the agent must push them together. It does **positive** work, so U > 0.
- If the charges attract, the agent must hold them back. It does **negative** work, so U < 0.

This energy belongs to the **system** of two charges. It is not stored "in" q₁ or "in" q₂. It is a property of their arrangement, in the same way that gravitational potential energy belongs to the Earth–object system.

## Deriving U from the work done

Fix q₁ at the origin. Bring q₂ in along a radial line from r = ∞ to r = R. At distance r, the electric force on q₂ is radial:

F_r = kq₁q₂/r²  (positive means away from q₁)

To move q₂ slowly, the external force must balance it: F_ext,r = −kq₁q₂/r². The work done by the external force is:

W_ext = ∫_∞^R F_ext,r dr = ∫_∞^R (−kq₁q₂/r²) dr = [kq₁q₂/r]_∞^R = kq₁q₂/R

So the potential energy at separation r is:

**U = q₁q₂/(4πε₀r) = kq₁q₂/r**

Three points about this result:

- **The path does not matter.** The electric force is radial. If q₂ moves sideways around a circle centred on q₁, the force is perpendicular to the motion and does no work. Any path can be built from radial steps and circular steps, so only the start and end separations count. The electric force is **conservative**.
- **Charged spheres.** Outside a spherically symmetric charge distribution, the field is the same as for a point charge at the centre (Topic 8.6). So for two small uniformly charged insulating spheres that do not overlap, use the centre-to-centre distance for r.
- **Force from energy.** Reverse the derivation: F_r = −dU/dr = −d(kq₁q₂/r)/dr = kq₁q₂/r². This is Coulomb's law again, which is a useful check.

**Work done by each force.** If the charges start and end at rest:

- work done by the **external** force: W_ext = ΔU = U_final − U_initial
- work done by the **electric** force: W_electric = −ΔU

The two have equal size and opposite sign.

## Signs, sizes and the U(r) graph

The formula already carries the sign if you substitute the charges **with** their signs.

| Pair | Sign of U | As r increases | Force |
|---|---|---|---|
| Like charges (+ +, or − −) | positive | U decreases towards 0 | repulsive |
| Unlike charges (+ −) | negative | U increases towards 0 | attractive |

A negative U does not mean "less than no energy". It means the system has **less** energy than when the charges are far apart. You must supply energy to separate them. For example, in the simplest (Bohr) model of hydrogen the electron is 5.29 × 10⁻¹¹ m from the proton. Then U = k(+e)(−e)/r = −4.35 × 10⁻¹⁸ J, or −27.2 eV, where 1 eV = 1.60 × 10⁻¹⁹ J.

<figure>
<svg viewBox="0 0 560 380" role="img" aria-labelledby="pe-ur-title pe-ur-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pe-ur-title">Electric potential energy against separation for like and unlike charges</title>
<desc id="pe-ur-desc">Horizontal axis: separation r over r zero, from 0 to 4. Vertical axis: U over the size of U zero, from minus 2 to plus 2, with zero in the middle. Solid curve for like charges: positive, falling from 2 at half r zero to 1 at r zero, one half at 2 r zero and one quarter at 4 r zero, approaching zero from above. Dashed curve for unlike charges: the mirror image below the axis, rising from minus 2 towards zero. Open circles mark plus 1 and minus 1 at r zero, and plus one half and minus one half at 2 r zero.</desc>
<defs><marker id="pe-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="70" y1="190" x2="545" y2="190" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr)"/>
<line x1="70" y1="330" x2="70" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="185" y1="190" x2="185" y2="196" stroke="#1d2b44"/><text x="185" y="208">1</text>
<line x1="300" y1="190" x2="300" y2="196" stroke="#1d2b44"/><text x="300" y="208">2</text>
<line x1="415" y1="190" x2="415" y2="196" stroke="#1d2b44"/><text x="415" y="208">3</text>
<line x1="530" y1="190" x2="530" y2="196" stroke="#1d2b44"/><text x="530" y="208">4</text>
<text x="300" y="365" font-size="13">Separation, r / r₀ (no unit)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="64" y1="70" x2="70" y2="70" stroke="#1d2b44"/><text x="60" y="74">+2</text>
<line x1="64" y1="130" x2="70" y2="130" stroke="#1d2b44"/><text x="60" y="134">+1</text>
<text x="60" y="194">0</text>
<line x1="64" y1="250" x2="70" y2="250" stroke="#1d2b44"/><text x="60" y="254">−1</text>
<line x1="64" y1="310" x2="70" y2="310" stroke="#1d2b44"/><text x="60" y="314">−2</text>
</g>
<text x="18" y="190" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 18 190)">Potential energy, U / |U₀| (no unit)</text>
<polyline points="127.5,70.0 139.0,90.0 156.2,110.0 185.0,130.0 213.8,142.0 242.5,150.0 300.0,160.0 357.5,166.0 415.0,170.0 472.5,172.9 530.0,175.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="127.5,310.0 139.0,290.0 156.2,270.0 185.0,250.0 213.8,238.0 242.5,230.0 300.0,220.0 357.5,214.0 415.0,210.0 472.5,207.1 530.0,205.0" fill="none" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="7 5"/>
<circle cx="185" cy="130" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="160" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="185" cy="250" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="220" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="200" y="100">like charges (solid): U &gt; 0,</text>
<text x="200" y="115">slope negative, so F repulsive</text>
<text x="200" y="285">unlike charges (dashed): U &lt; 0,</text>
<text x="200" y="300">slope positive, so F attractive</text>
</g>
</svg>
<figcaption>Figure 1. U against separation for a pair of like charges (solid curve) and a pair of unlike charges of the same sizes (dashed curve). U₀ is the energy at separation r₀. Both curves approach zero as r → ∞. Doubling r halves U (open circles), but it quarters the force, because F = −dU/dr depends on the slope, not on the value.</figcaption>
</figure>

Reading Figure 1:

- **Value versus slope.** The force is the negative **slope**, not the height. At r₀ the like-charge curve has height +1 and a negative slope, so the force is outward (repulsive).
- **1/r versus 1/r².** U ∝ 1/r, but F ∝ 1/r². Doubling r halves U and divides F by 4.
- **Which way is "downhill"?** Left alone, a system moves towards lower U. Like charges fly apart (U falls towards 0). Unlike charges pull together (U becomes more negative).

## Systems of three or more charges

The total potential energy is the sum of the energies of **every pair** of charges, each pair counted **once**:

**U_total = Σ (over pairs i < j) kq_iq_j / r_ij**

Why does this work? Build the system one charge at a time. Bringing in the first charge costs nothing, since no other charges are present. Bringing in the second costs kq₁q₂/r₁₂. Bringing in the third costs kq₁q₃/r₁₃ + kq₂q₃/r₂₃, one term for each charge already there. Every pair appears exactly once, and the order of assembly does not change the total.

N charges have **N(N − 1)/2** pairs: 3 pairs for 3 charges, 6 for 4 and 10 for 5.

To find the work needed to **rearrange** a system (for example, to remove one charge to infinity), use W_ext = U_final − U_initial with everything at rest. Only the pairs that change contribute.

## Worked example 1: assembling a triangle of charges

**Question.** Three small charged beads are placed at the corners of an equilateral triangle of side 0.20 m. q₁ = +5.0 nC, q₂ = +5.0 nC and q₃ = −2.0 nC. (a) Find the total electric potential energy. (b) The beads are brought in one at a time, q₁ then q₂ then q₃. How much work does the external agent do at each step? (c) What does the sign of the total tell you?

**(a)** There are 3 pairs, all 0.20 m apart.

1. U₁₂ = (8.99 × 10⁹)(5.0 × 10⁻⁹)(5.0 × 10⁻⁹) ÷ 0.20 = +1.124 × 10⁻⁶ J
2. U₁₃ = (8.99 × 10⁹)(5.0 × 10⁻⁹)(−2.0 × 10⁻⁹) ÷ 0.20 = −4.495 × 10⁻⁷ J
3. U₂₃ = U₁₃ = −4.495 × 10⁻⁷ J (same charges, same distance)
4. U_total = 1.124 × 10⁻⁶ − 2(4.495 × 10⁻⁷) = **+2.25 × 10⁻⁷ J**

**(b)** Step 1: bringing q₁ costs **0 J** (nothing else is there). Step 2: bringing q₂ costs U₁₂ = **+1.12 × 10⁻⁶ J**; the agent pushes against repulsion. Step 3: bringing q₃ costs U₁₃ + U₂₃ = **−8.99 × 10⁻⁷ J**; q₃ is attracted, so the agent holds it back and does negative work. The three steps add to the total in (a).

**(c)** The total is positive. Taking the whole system apart, slowly, back to infinite separation would give 2.25 × 10⁻⁷ J back to the external agent.

**Check.** Assemble in a different order: q₃, then q₁, then q₂. The steps are 0, −4.495 × 10⁻⁷ J and +6.74 × 10⁻⁷ J. They add to the same +2.25 × 10⁻⁷ J.

## Worked example 2: work by integration, and why the path does not matter

**Question.** A charge q₁ = +6.0 nC is fixed. A small bead with q₂ = +3.0 nC is moved slowly from 0.60 m to 0.15 m from q₁. (a) Use an integral to find the work done by the external force. (b) Find the work done by the electric force. (c) The bead is moved instead along a quarter circle of radius 0.60 m and then straight in to 0.15 m. Does the work change? (d) By what factor does U change?

**(a)** Take r outward from q₁. The electric force on the bead is +kq₁q₂/r² (repulsive), so the external force is −kq₁q₂/r². The bead moves from r = 0.60 m to r = 0.15 m:

W_ext = ∫ from 0.60 to 0.15 of (−kq₁q₂/r²) dr = kq₁q₂ [1/r] from 0.60 to 0.15 = kq₁q₂ (1/0.15 − 1/0.60)

kq₁q₂ = (8.99 × 10⁹)(6.0 × 10⁻⁹)(3.0 × 10⁻⁹) = 1.618 × 10⁻⁷ N·m². So W_ext = (1.618 × 10⁻⁷)(6.667 − 1.667) = **8.09 × 10⁻⁷ J**.

The sign check: the integration runs from larger r to smaller r (dr is negative) and the external force also points inward, so the work is positive. That fits: you push like charges together.

**(b)** W_electric = −ΔU = **−8.09 × 10⁻⁷ J**. The repulsive force points away from q₁ while the bead moves towards it.

**(c)** No. On the quarter circle the bead stays 0.60 m from q₁. The force is radial and the motion is along the circle, so F·dr = 0 and no work is done. The radial part is the same as in (a). The work is still 8.09 × 10⁻⁷ J.

**(d)** U ∝ 1/r and r falls by a factor of 4, so U rises by a factor of **4**: from 2.70 × 10⁻⁷ J to 1.08 × 10⁻⁶ J. The difference is 8.09 × 10⁻⁷ J, which matches (a).

**Interpretation.** The force at 0.15 m (7.19 × 10⁻⁶ N) is **16** times the force at 0.60 m (4.50 × 10⁻⁷ N), but U is only 4 times larger. This is the 1/r² versus 1/r difference from Figure 1.

## Common misconceptions

- **"The charge has potential energy."** Potential energy belongs to the system of interacting charges. Say "the potential energy of the q₁–q₂ system".
- **Dropping the signs.** Put each charge in with its sign. A negative U for unlike charges is correct and meaningful.
- **Using r² in the energy.** Force goes as 1/r²; energy goes as 1/r. Check the units: kq₁q₂/r is in N·m = J.
- **Counting each pair twice.** Summing kq_iq_j/r_ij over all i and all j ≠ i counts every pair twice. Either list pairs once or halve the double sum.
- **"Bigger U means bigger force."** The force is −dU/dr, the slope. A large U on a nearly flat part of the curve means a small force.
- **Confusing who does the work.** The external work equals +ΔU; the electric work equals −ΔU. Name the force before you give a sign.
- **"The order of assembly changes the energy."** Each step's cost changes, but the total does not.
- **"Negative U is impossible."** U is measured relative to infinite separation. Negative U just means a bound arrangement that needs energy to pull apart.

## Where this leads

Topic 9.2 divides potential energy by charge to define **electric potential**, a property of a point in space that does not need a second charge. Topic 9.3 then uses conservation of energy to follow charges that speed up or slow down as U changes. Next: [Electric Potential](/advanced-course-resources/physics-c-electricity-and-magnetism/9-2-electric-potential-study-guide/). Before that, practise with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/9-1-electric-potential-energy-checklist/).
