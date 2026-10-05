---
resourceId: "mb-ap-phys2-12.2-study-guide"
title: "Magnetism and Moving Charges: Study Guide (Physics 2 12.2)"
description: "The field made by a moving charge, the magnetic force F = qvB sin θ and its right-hand rule, circular paths, crossed electric and magnetic fields, and the Hall effect."
course: "physics-2"
unit: 12
topics: ["12.2"]
resourceType: "study-guide"
prerequisites:
  - "Magnetic fields, dipoles and field-line maps (Topic 12.1)"
  - "Electric force F = qE and uniform fields E = ΔV/d (Unit 10)"
  - "Centripetal force F = mv²/r and Newton's second law"
prerequisiteResources: ["mb-ap-phys2-12.1-study-guide"]
learningObjectives:
  - "Describe the direction and size of the magnetic field made by a moving charged object at a nearby point"
  - "Calculate the magnetic force on a moving charge for angles of 0°, 90° and 180°, and reason qualitatively about other angles"
  - "Find the direction of the magnetic force with a right-hand rule, including for negative charges"
  - "Derive the radius of the circular path of a charge moving at right angles to a uniform field"
  - "Treat electric and magnetic forces on the same charge independently, including balanced crossed fields"
  - "Explain the Hall effect and use it to find the sign and drift speed of charge carriers"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C, proton mass 1.67 × 10⁻²⁷ kg, electron mass 9.11 × 10⁻³¹ kg. Keep unrounded values until the final step"
related: ["mb-ap-phys2-12.2-revision-notes", "mb-ap-phys2-12.2-practice", "mb-ap-phys2-12.2-checklist"]
next: "mb-ap-phys2-12.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A moving charge makes a magnetic field. At a point, the field is at right angles to both the velocity and the line from the charge to the point."
  - "A magnetic field pushes on a moving charge with F = |q|vB sin θ. The force is largest at 90° and zero when v is parallel or antiparallel to B."
  - "The force is at right angles to both v and B. Use the right-hand rule, then reverse it for a negative charge."
  - "Because F is always at right angles to v, the magnetic force does no work. It changes the direction of motion, not the speed."
  - "Electric and magnetic forces act independently. When qE = qvB the forces can balance, so only charges with v = E/B go straight."
  - "In the Hall effect, the magnetic force pushes moving carriers to one side of a conductor, creating a potential difference across it."
faqs:
  - question: "Do I need to calculate the force for angles such as 30°?"
    answer: "In this course, calculations of the magnetic force on a moving charge use only 0°, 90° or 180° between v and B. For other angles you should be able to say that the force is between zero and its largest value, and that it grows as the angle approaches 90°."
  - question: "Why does a charge at rest feel no magnetic force?"
    answer: "The magnetic force is proportional to the speed v. With v = 0 the force is zero, however strong the field. A charge at rest can still feel an electric force if there is an electric field."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Moving charges make magnetic fields

In Topic 12.1 you saw that magnetic dipoles come from charges moving inside atoms. The same idea works for a single charged object. **A charged object at rest makes only an electric field. A moving charged object also makes a magnetic field.**

The magnetic field at a point near a moving charge depends on:

- the **velocity** of the charge: a faster charge makes a stronger field, and
- the **distance** from the charge to the point: the field is weaker further away.

Its **direction** is at right angles to two things at once: the velocity v of the charge, and the position vector r from the charge to the point. So the field circles round the line along which the charge moves.

**Right-hand rule for the field.** For a positive charge, point your right thumb along v. Your fingers curl the way B circles round the line of motion. For a negative charge, the field is the other way round.

**Example.** A positive charge moves to the right across the page. At a point directly above it, the field points **out of** the page. At a point directly below it, the field points **into** the page.

The field is **largest** when v and r are at right angles, as at those two points. At a point straight ahead of the charge, or straight behind it, v and r are parallel, and the charge makes **no** magnetic field there.

## Magnetic forces between moving charges

Magnetic forces describe **interactions between moving charges**. One moving charge makes a magnetic field. A second charge moving through that field feels a force. Two positive charges moving side by side in the same direction, for example, pull towards each other magnetically. They still repel electrically. For charges moving much more slowly than light, the electric repulsion is far larger, but the magnetic part is real, and in a wire full of moving charges it is the part you notice (Topic 12.3).

## The force on a moving charge

A charge q moving with velocity v through a magnetic field B feels a magnetic force of size

**F_B = |q| v B sin θ**

- |q| is the size of the charge (C), v the speed (m/s), B the field (T);
- θ is the angle between the velocity and the field.

So the force is proportional to the charge, the speed and the field, and it depends on the angle:

| Angle between v and B | sin θ | Force |
|---|---|---|
| 0° (v parallel to B) | 0 | F = 0 |
| 90° (v at right angles to B) | 1 | F = qvB, the largest value |
| 180° (v antiparallel to B) | 0 | F = 0 |

For angles in between, the force lies between 0 and |q|vB. It grows as the angle moves towards 90°. In this course you calculate the force only at 0°, 90° and 180°, and reason about other angles without numbers.

Units: 1 T = 1 N/(A·m) = 1 N·s/(C·m), so C × m/s × T gives N.

### Direction: the right-hand rule

The magnetic force is **at right angles to both v and B**. To find which way:

1. Point the fingers of your right hand along v.
2. Curl them towards the direction of B.
3. Your thumb points along the force on a **positive** charge.
4. For a **negative** charge, the force is in the **opposite** direction.

Diagrams usually show fields into the page as crosses (×, the tail of an arrow) and out of the page as dots (·, the tip of an arrow).

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="qvb-title qvb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="qvb-title">A positive charge moving at right angles to a magnetic field directed into the page</title>
<desc id="qvb-desc">The whole region is filled with small crosses, meaning a uniform magnetic field pointing into the page. A positive charge sits at the bottom of a dashed circle. Its velocity arrow, labelled v, points to the right. Its force arrow, labelled F, points straight up towards the centre of the circle. Arrows on the dashed circle show that the charge travels counterclockwise around it. The radius r is marked from the centre to the charge.</desc>
<defs><marker id="qvb-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#8a94a6" stroke-width="1.2">
<path d="M46 26 L54 34 M54 26 L46 34"/>
<path d="M46 81 L54 89 M54 81 L46 89"/>
<path d="M46 136 L54 144 M54 136 L46 144"/>
<path d="M46 191 L54 199 M54 191 L46 199"/>
<path d="M46 246 L54 254 M54 246 L46 254"/>
<path d="M46 301 L54 309 M54 301 L46 309"/>
<path d="M106 26 L114 34 M114 26 L106 34"/>
<path d="M106 81 L114 89 M114 81 L106 89"/>
<path d="M106 136 L114 144 M114 136 L106 144"/>
<path d="M106 191 L114 199 M114 191 L106 199"/>
<path d="M106 246 L114 254 M114 246 L106 254"/>
<path d="M106 301 L114 309 M114 301 L106 309"/>
<path d="M166 26 L174 34 M174 26 L166 34"/>
<path d="M166 81 L174 89 M174 81 L166 89"/>
<path d="M166 136 L174 144 M174 136 L166 144"/>
<path d="M166 191 L174 199 M174 191 L166 199"/>
<path d="M166 246 L174 254 M174 246 L166 254"/>
<path d="M166 301 L174 309 M174 301 L166 309"/>
<path d="M226 26 L234 34 M234 26 L226 34"/>
<path d="M226 81 L234 89 M234 81 L226 89"/>
<path d="M226 136 L234 144 M234 136 L226 144"/>
<path d="M226 191 L234 199 M234 191 L226 199"/>
<path d="M226 246 L234 254 M234 246 L226 254"/>
<path d="M226 301 L234 309 M234 301 L226 309"/>
<path d="M286 26 L294 34 M294 26 L286 34"/>
<path d="M286 81 L294 89 M294 81 L286 89"/>
<path d="M286 136 L294 144 M294 136 L286 144"/>
<path d="M286 301 L294 309 M294 301 L286 309"/>
<path d="M346 26 L354 34 M354 26 L346 34"/>
<path d="M346 81 L354 89 M354 81 L346 89"/>
<path d="M346 136 L354 144 M354 136 L346 144"/>
<path d="M346 191 L354 199 M354 191 L346 199"/>
<path d="M346 246 L354 254 M354 246 L346 254"/>
<path d="M346 301 L354 309 M354 301 L346 309"/>
<path d="M406 81 L414 89 M414 81 L406 89"/>
<path d="M406 136 L414 144 M414 136 L406 144"/>
<path d="M406 191 L414 199 M414 191 L406 199"/>
<path d="M406 246 L414 254 M414 246 L406 254"/>
<path d="M406 301 L414 309 M414 301 L406 309"/>
<path d="M466 81 L474 89 M474 81 L466 89"/>
<path d="M466 136 L474 144 M474 136 L466 144"/>
<path d="M466 191 L474 199 M474 191 L466 199"/>
<path d="M466 246 L474 254 M474 246 L466 254"/>
<path d="M466 301 L474 309 M474 301 L466 309"/>
<path d="M526 81 L534 89 M534 81 L526 89"/>
<path d="M526 136 L534 144 M534 136 L526 144"/>
<path d="M526 191 L534 199 M534 191 L526 199"/>
<path d="M526 246 L534 254 M534 246 L526 254"/>
<path d="M526 301 L534 309 M534 301 L526 309"/>
</g>
<circle cx="280" cy="170" r="120" fill="none" stroke="#1d2b44" stroke-width="1.6" stroke-dasharray="7 5"/>
<path d="M400 182 L400 160" stroke="#1d2b44" stroke-width="2" marker-end="url(#qvb-arr)"/>
<path d="M172 156 L172 178" stroke="#1d2b44" stroke-width="2" marker-end="url(#qvb-arr)"/>
<path d="M290 50 L270 50" stroke="#1d2b44" stroke-width="2" marker-end="url(#qvb-arr)"/>
<line x1="280" y1="170" x2="280" y2="282" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<circle cx="280" cy="170" r="3" fill="#1d2b44"/><text x="288" y="232" font-size="13" fill="#1d2b44">r</text>
<path d="M294 290 L385 290" stroke="#1d2b44" stroke-width="3" marker-end="url(#qvb-arr)"/><text x="392" y="295" font-size="15" font-weight="700" fill="#1d2b44">v</text>
<path d="M262 276 L262 214" stroke="#1d2b44" stroke-width="3" marker-end="url(#qvb-arr)"/><text x="240" y="230" font-size="15" font-weight="700" fill="#1d2b44">F</text>
<circle cx="280" cy="290" r="11" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/><text x="280" y="295" font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<rect x="408" y="8" width="146" height="24" fill="#ffffff" stroke="#1d2b44"/><text x="481" y="25" font-size="12" fill="#1d2b44" text-anchor="middle">× = B into the page</text>
</svg>
<figcaption>Figure 1. A positive charge moving to the right through a uniform field into the page (crosses). The magnetic force F is at right angles to both v and B, here towards the top of the page. Because F is always at right angles to v, it bends the path into a circle (dashed) of radius r, travelled counterclockwise. A negative charge would feel the opposite force and circle clockwise.</figcaption>
</figure>

### Circular motion

The magnetic force is always at right angles to the velocity. So it does **no work** on the charge, and the charge's speed and kinetic energy do not change. The force only turns the velocity. If v is at right angles to a uniform field, the force has a constant size and always points sideways: that is exactly the condition for **uniform circular motion** (Figure 1).

The magnetic force provides the centripetal force. Writing q for the size of the charge:

qvB = mv²/r, so **r = mv / (qB)**

- Faster or heavier charges move in **larger** circles.
- Bigger charges or stronger fields give **smaller** circles.
- The time for one orbit is T = 2πr/v = 2πm/(|q|B). It does not depend on the speed: a faster charge goes round a bigger circle in the same time.

If v is parallel to B, there is no force at all, and the charge moves in a straight line at constant speed.

## Electric and magnetic fields together

When a region contains both an electric field and a magnetic field, a moving charge feels **two independent forces**:

- the electric force qE, which does not depend on the motion, and
- the magnetic force, of size |q|vB for v at right angles to B.

You find each one separately and add them as vectors. A useful case is **crossed fields**, arranged so that the two forces point in opposite directions. They balance when (with q the size of the charge)

qE = qvB, so **v = E/B**

The charge cancels. So only charges with exactly this speed pass straight through, whatever their charge or mass. Faster charges feel a bigger magnetic force and bend towards the magnetic-force side. Slower charges bend towards the electric-force side. This device is called a **velocity selector**.

## The Hall effect

A current in a conductor is made of charge carriers drifting along it. Put the conductor in a magnetic field that has a part at right angles to the current, and the field pushes the carriers sideways (Figure 2). They pile up on one edge, leaving the opposite charge on the other edge. This separation of charge creates a potential difference across the width of the conductor: the **Hall potential difference** ΔV_H.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="hall-title hall-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hall-title">The Hall effect in a conducting strip with electrons as charge carriers</title>
<desc id="hall-desc">A horizontal rectangular strip of width w. Conventional current I flows to the right along the strip. A uniform magnetic field points into the page, shown by crosses on the strip. Electrons inside drift to the left. An upward arrow labelled F on an electron shows the magnetic force pushing electrons towards the top edge. The top edge is marked with minus signs and the bottom edge with plus signs. A voltmeter connected between the top and bottom edges reads the Hall potential difference. The bottom edge is at the higher potential.</desc>
<defs><marker id="hall-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="110" y="110" width="320" height="100" fill="#e8eef7" stroke="#1d2b44" stroke-width="2"/>
<g stroke="#8a94a6" stroke-width="1.2">
<path d="M136 131 L144 139 M144 131 L136 139"/>
<path d="M136 181 L144 189 M144 181 L136 189"/>
<path d="M186 131 L194 139 M194 131 L186 139"/>
<path d="M186 181 L194 189 M194 181 L186 189"/>
<path d="M236 131 L244 139 M244 131 L236 139"/>
<path d="M236 181 L244 189 M244 181 L236 189"/>
<path d="M336 131 L344 139 M344 131 L336 139"/>
<path d="M336 181 L344 189 M344 181 L336 189"/>
<path d="M386 131 L394 139 M394 131 L386 139"/>
<path d="M386 181 L394 189 M394 181 L386 189"/>
</g>
<g font-size="16" font-weight="700" fill="#1d2b44" text-anchor="middle">
<text x="130" y="125">−</text>
<text x="130" y="206">+</text>
<text x="160" y="125">−</text>
<text x="160" y="206">+</text>
<text x="190" y="125">−</text>
<text x="190" y="206">+</text>
<text x="220" y="125">−</text>
<text x="220" y="206">+</text>
<text x="250" y="125">−</text>
<text x="250" y="206">+</text>
<text x="280" y="125">−</text>
<text x="280" y="206">+</text>
<text x="310" y="125">−</text>
<text x="310" y="206">+</text>
<text x="340" y="125">−</text>
<text x="340" y="206">+</text>
<text x="370" y="125">−</text>
<text x="370" y="206">+</text>
<text x="400" y="125">−</text>
<text x="400" y="206">+</text>
</g>
<path d="M40 160 L100 160" stroke="#1d2b44" stroke-width="3" marker-end="url(#hall-arr)"/><text x="58" y="150" font-size="14" font-weight="700" fill="#1d2b44">I</text>
<path d="M440 160 L510 160" stroke="#1d2b44" stroke-width="3" marker-end="url(#hall-arr)"/><text x="480" y="150" font-size="14" font-weight="700" fill="#1d2b44">I</text>
<circle cx="270" cy="160" r="8" fill="#ffffff" stroke="#1d2b44" stroke-width="1.6"/><text x="270" y="164" font-size="11" font-weight="700" fill="#1d2b44" text-anchor="middle">e⁻</text>
<path d="M258 160 L222 160" stroke="#1d2b44" stroke-width="2" marker-end="url(#hall-arr)"/><text x="200" y="157" font-size="12" fill="#1d2b44">drift</text>
<path d="M270 150 L270 132" stroke="#1d2b44" stroke-width="2.4" marker-end="url(#hall-arr)"/><text x="278" y="146" font-size="13" font-weight="700" fill="#1d2b44">F</text>
<line x1="450" y1="110" x2="450" y2="210" stroke="#1d2b44" stroke-width="1"/><line x1="444" y1="110" x2="456" y2="110" stroke="#1d2b44"/><line x1="444" y1="210" x2="456" y2="210" stroke="#1d2b44"/><text x="458" y="200" font-size="13" fill="#1d2b44">w</text>
<g fill="none" stroke="#1d2b44" stroke-width="1.6"><path d="M330 110 V70 H360"/><path d="M330 210 V250 H540 V78 H398"/></g>
<circle cx="380" cy="78" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="380" y="83" font-size="14" font-weight="700" fill="#1d2b44" text-anchor="middle">V</text>
<text x="404" y="64" font-size="13" fill="#1d2b44">ΔV_H</text>
<text x="270" y="300" font-size="12" fill="#1d2b44" text-anchor="middle">× = B into the page.  Top edge −, bottom edge + (higher potential).</text>
</svg>
<figcaption>Figure 2. The Hall effect. Current I flows to the right, so the electrons drift to the left. With B into the page, the magnetic force on each electron points up the page. Electrons collect on the top edge (−) and leave the bottom edge positive (+). A voltmeter across the width w reads the Hall potential difference ΔV_H.</figcaption>
</figure>

The build-up stops when the electric field E_H made by the separated charges pushes back on each carrier as hard as the magnetic field pushes it sideways. For a strip of width w, E_H = ΔV_H/w, and balance gives

q(ΔV_H/w) = qvB, so **ΔV_H = vBw**

where v is the drift speed of the carriers. Two uses follow:

- **Sign of the carriers.** Positive carriers moving with the current and negative carriers moving against it are pushed to the **same** edge. So the sign of the charge on that edge tells you the sign of the carriers. In Figure 2 the top edge is negative, so the carriers are negative (electrons).
- **Measuring B.** If you know v and w, measuring ΔV_H gives B. Small Hall sensors are used this way to measure magnetic fields.

## Worked example 1: a proton in a uniform field

**Question.** A proton (charge +1.60 × 10⁻¹⁹ C, mass 1.67 × 10⁻²⁷ kg) moves to the right at 3.0 × 10⁵ m/s through a uniform field of 0.25 T directed into the page, as in Figure 1. (a) Find the size and direction of the magnetic force. (b) Find the radius of its path and the time for one orbit. (c) An electron enters the same field with the same velocity. Compare its force and its path.

1. **Angle.** v is to the right and B is into the page, so θ = 90° and sin θ = 1.
2. **Size of force.** F = |q|vB = (1.60 × 10⁻¹⁹ C)(3.0 × 10⁵ m/s)(0.25 T) = 1.2 × 10⁻¹⁴ N.
3. **Direction.** Fingers to the right, curl into the page: thumb points to the **top of the page**. The proton is positive, so that is the force direction.
4. **Radius.** r = mv/(|q|B) = (1.67 × 10⁻²⁷ kg)(3.0 × 10⁵ m/s) ÷ [(1.60 × 10⁻¹⁹ C)(0.25 T)] = 1.25 × 10⁻² m, about 1.3 cm.
5. **Period.** T = 2πm/(qB) = 2π(1.67 × 10⁻²⁷) ÷ [(1.60 × 10⁻¹⁹)(0.25)] = 2.62 × 10⁻⁷ s. (Check: 2πr/v = 2π(0.012525 m) ÷ (3.0 × 10⁵ m/s) = 2.62 × 10⁻⁷ s.)
6. **Electron.** Same |q|, v and B, so the force has the **same size**, 1.2 × 10⁻¹⁴ N, but points to the **bottom** of the page. Its mass is much smaller, so r = (9.11 × 10⁻³¹)(3.0 × 10⁵) ÷ [(1.60 × 10⁻¹⁹)(0.25)] = 6.83 × 10⁻⁶ m. It circles clockwise in a circle about 1830 times smaller.

**Answer.** (a) 1.2 × 10⁻¹⁴ N towards the top of the page. (b) r = 1.3 cm, T = 2.6 × 10⁻⁷ s. (c) Same size of force, opposite direction; a far smaller circle, travelled the other way round.

**Interpretation.** The proton's speed stays 3.0 × 10⁵ m/s the whole time, because the force does no work. If the proton had been moving along the field lines instead (θ = 0°), the force would have been zero and it would have gone straight on.

## Worked example 2: a velocity selector

**Question.** Two parallel plates 2.0 cm apart have a potential difference of 600 V, with the top plate positive. Positive ions move to the right between the plates. A uniform magnetic field of 0.15 T fills the same region. (a) Which direction must B point so that the magnetic force opposes the electric force? (b) At what speed do ions pass through undeflected? (c) Which way are ions moving at 3.0 × 10⁵ m/s deflected?

1. **Electric field.** E = ΔV/d = 600 V ÷ 0.020 m = 3.0 × 10⁴ V/m, pointing from the positive top plate down to the bottom plate.
2. **Electric force.** The ions are positive, so qE points **down**.
3. **Magnetic force needed.** It must point **up**. Fingers to the right (v), thumb up (F): the fingers must curl **into the page**. So B points **into the page**.
4. **Balance.** qE = qvB gives v = E/B = (3.0 × 10⁴ V/m) ÷ (0.15 T) = 2.0 × 10⁵ m/s.
5. **Faster ions.** At 3.0 × 10⁵ m/s, the magnetic force per unit charge is vB = 4.5 × 10⁴ N/C, larger than E = 3.0 × 10⁴ N/C. The upward magnetic force wins, so these ions are deflected **upwards**.

**Answer.** (a) Into the page. (b) 2.0 × 10⁵ m/s. (c) Upwards, towards the positive plate.

**Check.** The selected speed does not depend on q or m. An electron at 2.0 × 10⁵ m/s also goes straight: both of its forces reverse, so they still cancel.

## Worked example 3: reading a Hall sensor

**Question.** A strip of semiconductor 3.0 mm wide carries a current to the right, as in Figure 2, in a field of 0.40 T into the page. The Hall potential difference across its width is 0.36 mV, and the top edge is at the **higher** potential. (a) What is the sign of the charge carriers? (b) Find their drift speed.

1. **Sign.** For current to the right and B into the page, carriers of either sign are pushed to the top edge (Figure 2 and the right-hand rule). The top edge is at the higher potential, so the charge piling up there is positive. The carriers are **positive**.
2. **Drift speed.** v = ΔV_H/(Bw) = (0.36 × 10⁻³ V) ÷ [(0.40 T)(3.0 × 10⁻³ m)] = 0.30 m/s.

**Answer.** (a) Positive. (b) 0.30 m/s.

**Interpretation.** This is the opposite result to the strip in Figure 2, where the carriers are electrons and the top edge is negative. A Hall measurement is one of the few direct ways to tell the sign of the charges that carry a current.

## Common misconceptions

- **"A magnetic field pushes a charge along the field lines."** The force is at right angles to B, and also to v. A charge moving along B feels no force at all.
- **"The magnetic force speeds charges up."** It is always at right angles to v, so it does no work. Speed and kinetic energy stay constant; only the direction changes.
- **"Use the same hand rule for electrons."** Find the direction for a positive charge, then reverse it for a negative one.
- **"A charge at rest in a magnetic field feels a force."** F_B is proportional to v. With v = 0, F_B = 0.
- **"The field of a moving charge points along its motion."** It circles round the line of motion, at right angles to both v and r, and is zero straight ahead and straight behind.
- **"A velocity selector selects by charge or mass."** The balance speed is v = E/B; the charge cancels and mass does not appear.
- **"Saying 'right-hand rule' is a justification."** In a written answer, state the directions of v and B, say the force is at right angles to both, and give the result of the rule, including the reversal for a negative charge.

## Where this leads

Topic 12.3, [Magnetism and Current-Carrying Wires](/advanced-course-resources/physics-2/12-3-magnetism-current-carrying-wires-study-guide/), adds up the forces on all the moving charges in a wire to give the force on a current, and the fields of all those charges to give the field of a wire. Test yourself with the [practice questions](/advanced-course-resources/physics-2/12-2-magnetism-moving-charges-practice/), then use the [revision notes](/advanced-course-resources/physics-2/12-2-magnetism-moving-charges-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/12-2-magnetism-moving-charges-checklist/) to consolidate.
