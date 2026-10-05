---
resourceId: "mb-ap-physcem-8.3-study-guide"
title: "Electric Fields: Study Guide (Physics C: E&M 8.3)"
description: "Calculus-based guide to electric fields: E = F/q, test charges, adding field vectors from point charges, field maps and field lines, and fields of charged conductors and insulators."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.3"]
resourceType: "study-guide"
prerequisites:
  - "Coulomb's law and the direction of electric forces (Topic 8.1)"
  - "Charge conservation, conductors and insulators (Topic 8.2)"
  - "Adding vectors by components, using sine, cosine and Pythagoras"
prerequisiteResources: ["mb-ap-physcem-8.2-study-guide"]
learningObjectives:
  - "Define the electric field as force per unit test charge and explain what makes a charge a good test charge"
  - "Find the direction of the field and of the force on positive and negative charges"
  - "Calculate the field of a point charge and predict how it changes with charge and distance"
  - "Add the field vectors from a few point charges by components, using symmetry where it helps"
  - "Read and draw vector field maps and field-line diagrams"
  - "Describe where excess charge sits, and what the field is, for charged conductors and insulators in equilibrium"
  - "Plan a measurement of an electric field and analyse the data with a linear graph"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; ε₀ = 8.85 × 10⁻¹² C²/(N·m²); e = 1.60 × 10⁻¹⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-physcem-8.3-revision-notes", "mb-ap-physcem-8.3-practice", "mb-ap-physcem-8.3-checklist"]
next: "mb-ap-physcem-8.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "The electric field at a point is the force on a small test charge divided by that charge: E = F/q₀, measured in N/C."
  - "E points away from positive charges and towards negative charges. A positive charge is pushed along E; a negative charge is pushed the opposite way."
  - "A point charge q gives E = kq/r², so doubling r makes E four times smaller."
  - "The net field is the vector sum of the fields from each charge. Add components, not magnitudes."
  - "In equilibrium, a conductor's excess charge sits on its surface, E = 0 inside, and E just outside is perpendicular to the surface. An insulator can hold charge inside and can have a field inside."
faqs:
  - question: "Does the field at a point depend on the test charge I put there?"
    answer: "No. The force depends on the test charge, but the ratio F/q₀ does not. The field is set by the source charges. The test charge must be small so that it does not push the source charges into new positions."
  - question: "Is the field zero where no field line is drawn?"
    answer: "No. Field lines are a sample. The field exists everywhere near the charges; the spacing of the lines only shows where it is stronger or weaker."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the **calculus-based** Physics C: Electricity and Magnetism course, Topic 8.3. The ideas also appear in the algebra-based Physics 2 course, but here you will add field vectors by components and derive symbolic results that lead into the integrals of Topic 8.4.

Constants used throughout: **k = 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²**, ε₀ = 8.85 × 10⁻¹² C²/(N·m²) and e = 1.60 × 10⁻¹⁹ C. 1 nC = 10⁻⁹ C.

## What an electric field is

In Topic 8.1 you used Coulomb's law to find the force between two charges. A field gives a second way to think about the same force. A charged object (the **source**) changes the space around it. Any other charge placed in that space then feels a force. The **electric field** describes that change at each point.

To measure the field at a point, place a small **test charge** q₀ there and measure the force on it. The field is the force per unit charge:

**E = F/q₀**

- E is a **vector**. It has the direction of the force on a **positive** test charge.
- Its unit is the newton per coulomb, **N/C**.
- A **test charge** must be small enough that its presence does not noticeably change the field. A large test charge would push or pull the source charges (for example, the free electrons in a metal source) into new positions, so you would measure a different field.

Once you know E, you can find the force on **any** charge q placed at that point:

**F = qE**

If q is positive, F points along E. If q is negative, F points opposite to E. The field itself does not change when you swap the test charge.

Where does the field point? Away from an isolated **positive** charge, and towards an isolated **negative** charge. This follows from the force on a positive test charge: it is repelled by a positive source and attracted by a negative one.

## The field of a point charge

Put a test charge q₀ a distance r from a point charge q. Coulomb's law gives F = kqq₀/r². Divide by q₀:

**E = kq/r² = q/(4πε₀r²)**, directed radially away from q if q > 0 and towards q if q < 0.

In vector form, E = (kq/r²) r̂, where r̂ is the unit vector pointing from the source to the point. If q is negative, the minus sign flips the direction.

This is a **functional dependence** you can use to predict changes without a full calculation:

- E ∝ q. Doubling the source charge doubles the field.
- E ∝ 1/r². Doubling the distance makes E four times smaller; tripling it makes E nine times smaller.
- E does **not** depend on q₀.

## Adding fields: superposition

When several charges are present, each one produces its own field as if the others were not there. The **net field** at a point is the **vector sum** of the individual fields:

**E_net = E₁ + E₂ + E₃ + …**

A reliable method:

1. Draw the point and each source charge. For each charge, draw an arrow at the point: away from a positive charge, towards a negative one.
2. Find each magnitude with kq/r², using the distance from that charge to the point.
3. Split each arrow into x- and y-components, using the geometry of the diagram.
4. Add the x-components and add the y-components separately.
5. Combine: |E| = √(E_x² + E_y²), with direction θ = tan⁻¹(E_y/E_x), checking the quadrant.

**Look for symmetry first.** If two equal charges sit symmetrically about a point, some components cancel exactly. You can then skip those components entirely. The course limits force calculations (Topic 8.1) to four or fewer charged objects, or more only in highly symmetric cases, so expect field sums of a similar size.

## Showing a field: maps and field lines

Because E is a vector at every point in space, you need a picture that shows many vectors at once. There are two common ones.

A **vector field map** draws an arrow at each point of a grid. The arrow points along E at that point, and its length shows the magnitude. Figure 1(a) is a map for one positive charge: the arrows point outward and shrink quickly with distance, because E ∝ 1/r².

A **field-line diagram** is a simplified version of the map. You join the arrows into continuous lines. The rules:

- At any point, E is **tangent** to the field line through that point, in the direction of the arrowhead.
- Lines **start** on positive charges and **end** on negative charges (or run off to a great distance).
- The **number** of lines leaving or entering a charge is proportional to the size of its charge.
- Where lines are **close together**, the field is **strong**; where they spread out, it is weak.
- Field lines **never cross**. At a crossing point the field would have two directions, which is impossible.

In Figure 1(b), +2q has sixteen lines and −q has eight. So only half of the lines from +2q can end on −q; the other half leave the picture. Far away, the pair looks like a single charge +q.

<figure>
<svg viewBox="0 0 600 340" role="img" aria-labelledby="ef-map-title ef-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ef-map-title">A vector field map and a field-line diagram</title>
<desc id="ef-map-desc">Left panel, labelled (a) vector field map: a positive point charge, drawn as a circle with a plus sign, sits in the centre of a square grid. At each grid point an arrow points directly away from the charge. The four arrows nearest the charge are long; arrows at the edge of the grid, twice as far away, are one quarter as long, and the corner arrows are shortest of all. Right panel, labelled (b) field lines: a charge plus 2q on the left and a charge minus q on the right. Sixteen lines leave plus 2q evenly spaced. Eight of them curve round and end on minus q; the other eight spread out and leave the picture. Lines are crowded near each charge and spread out far away. Arrowheads on the lines point away from plus 2q and towards minus q. No two lines cross.</desc>
<rect x="10" y="20" width="270" height="270" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="310" y="20" width="280" height="270" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<path d="M42.9 52.9 L48.6 55.6 L45.6 58.6 z" fill="#1d2b44"/>
<path d="M41.4 103.2 L49.8 104.3 L47.3 109.3 z" fill="#1d2b44"/>
<path d="M40.0 155.0 L50.0 151.5 L50.0 158.5 z" fill="#1d2b44"/>
<path d="M41.4 206.8 L47.3 200.7 L49.8 205.7 z" fill="#1d2b44"/>
<path d="M42.9 257.1 L45.6 251.4 L48.6 254.4 z" fill="#1d2b44"/>
<path d="M93.2 51.4 L99.3 57.3 L94.3 59.8 z" fill="#1d2b44"/>
<line x1="102.1" y1="112.1" x2="92.9" y2="102.9" stroke="#1d2b44" stroke-width="1.4"/><path d="M87.9 97.9 L95.4 100.4 L90.4 105.4 z" fill="#1d2b44"/>
<line x1="115.0" y1="155.0" x2="82.0" y2="155.0" stroke="#1d2b44" stroke-width="1.4"/><path d="M75.0 155.0 L82.0 151.5 L82.0 158.5 z" fill="#1d2b44"/>
<line x1="102.1" y1="197.9" x2="92.9" y2="207.1" stroke="#1d2b44" stroke-width="1.4"/><path d="M87.9 212.1 L90.4 204.6 L95.4 209.6 z" fill="#1d2b44"/>
<path d="M93.2 258.6 L94.3 250.2 L99.3 252.7 z" fill="#1d2b44"/>
<path d="M145.0 50.0 L148.5 60.0 L141.5 60.0 z" fill="#1d2b44"/>
<line x1="145.0" y1="125.0" x2="145.0" y2="92.0" stroke="#1d2b44" stroke-width="1.4"/><path d="M145.0 85.0 L148.5 92.0 L141.5 92.0 z" fill="#1d2b44"/>
<line x1="145.0" y1="185.0" x2="145.0" y2="218.0" stroke="#1d2b44" stroke-width="1.4"/><path d="M145.0 225.0 L141.5 218.0 L148.5 218.0 z" fill="#1d2b44"/>
<path d="M145.0 260.0 L141.5 250.0 L148.5 250.0 z" fill="#1d2b44"/>
<path d="M196.8 51.4 L195.7 59.8 L190.7 57.3 z" fill="#1d2b44"/>
<line x1="187.9" y1="112.1" x2="197.1" y2="102.9" stroke="#1d2b44" stroke-width="1.4"/><path d="M202.1 97.9 L199.6 105.4 L194.6 100.4 z" fill="#1d2b44"/>
<line x1="175.0" y1="155.0" x2="208.0" y2="155.0" stroke="#1d2b44" stroke-width="1.4"/><path d="M215.0 155.0 L208.0 158.5 L208.0 151.5 z" fill="#1d2b44"/>
<line x1="187.9" y1="197.9" x2="197.1" y2="207.1" stroke="#1d2b44" stroke-width="1.4"/><path d="M202.1 212.1 L194.6 209.6 L199.6 204.6 z" fill="#1d2b44"/>
<path d="M196.8 258.6 L190.7 252.7 L195.7 250.2 z" fill="#1d2b44"/>
<path d="M247.1 52.9 L244.4 58.6 L241.4 55.6 z" fill="#1d2b44"/>
<path d="M248.6 103.2 L242.7 109.3 L240.2 104.3 z" fill="#1d2b44"/>
<path d="M250.0 155.0 L240.0 158.5 L240.0 151.5 z" fill="#1d2b44"/>
<path d="M248.6 206.8 L240.2 205.7 L242.7 200.7 z" fill="#1d2b44"/>
<path d="M247.1 257.1 L241.4 254.4 L244.4 251.4 z" fill="#1d2b44"/>
<circle cx="145" cy="155" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="145" y="160" font-size="16" fill="#1d2b44" text-anchor="middle" font-weight="700">+</text>
<text x="145" y="312" font-size="13" fill="#1d2b44" text-anchor="middle">(a) vector field map, one +q</text>
<polyline points="401.2,152.8 402.4,152.5 403.5,152.3 404.7,152.1 405.9,151.8 407.1,151.6 408.2,151.4 409.4,151.2 410.6,150.9 411.8,150.7 413.0,150.5 414.1,150.3 415.3,150.0 416.5,149.8 417.7,149.6 418.9,149.4 420.0,149.2 421.2,149.0 422.4,148.8 423.6,148.6 424.8,148.3 426.0,148.2 427.1,148.0 428.3,147.8 429.5,147.6 430.7,147.4 431.9,147.2 433.1,147.0 434.3,146.9 435.4,146.7 436.6,146.5 437.8,146.4 439.0,146.2 440.2,146.1 441.4,146.0 442.6,145.9 443.8,145.7 445.0,145.6 446.2,145.5 447.4,145.4 448.6,145.4 449.8,145.3 451.0,145.2 452.2,145.2 453.4,145.1 454.6,145.1 455.8,145.1 457.0,145.1 458.2,145.1 459.4,145.1 460.6,145.1 461.8,145.2 463.0,145.2 464.2,145.3 465.4,145.4 466.6,145.5 467.7,145.6 468.9,145.7 470.1,145.8 471.3,145.9 472.5,146.1 473.7,146.3 474.9,146.4 476.1,146.6 477.3,146.8 478.4,147.0 479.6,147.2 480.8,147.5 482.0,147.7 483.2,147.9 484.3,148.2 485.5,148.4 486.7,148.7 487.8,149.0 489.0,149.3 490.2,149.6 491.3,149.8 492.5,150.1 493.7,150.4 494.8,150.8 496.0,151.1 497.1,151.4 498.3,151.7 499.5,152.0 499.5,152.0" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M445.6 145.6 L438.9 149.7 L438.3 142.7 z" fill="#1d2b44"/>
<polyline points="399.5,148.7 401.0,147.7 402.5,146.7 404.0,145.7 405.5,144.7 407.0,143.7 408.5,142.8 410.0,141.8 411.6,140.8 413.1,139.9 414.6,138.9 416.2,138.0 417.7,137.1 419.3,136.2 420.8,135.3 422.4,134.4 424.0,133.5 425.6,132.7 427.2,131.9 428.8,131.1 430.4,130.3 432.0,129.5 433.7,128.8 435.3,128.1 437.0,127.5 438.7,126.8 440.4,126.2 442.1,125.7 443.8,125.2 445.6,124.7 447.3,124.3 449.1,123.9 450.9,123.6 452.7,123.4 454.4,123.2 456.2,123.1 458.0,123.0 459.8,123.0 461.6,123.1 463.4,123.2 465.2,123.4 467.0,123.7 468.8,124.1 470.5,124.5 472.2,125.0 474.0,125.5 475.6,126.2 477.3,126.8 478.9,127.6 480.5,128.4 482.1,129.3 483.7,130.2 485.2,131.2 486.7,132.2 488.1,133.2 489.6,134.3 491.0,135.5 492.3,136.6 493.7,137.8 495.0,139.0 496.3,140.3 497.6,141.5 498.9,142.8 500.1,144.1 501.4,145.4 502.6,146.7 502.6,146.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M446.2 124.6 L440.3 129.7 L438.5 122.9 z" fill="#1d2b44"/>
<polyline points="396.3,145.5 397.7,143.5 399.0,141.6 400.4,139.6 401.8,137.6 403.1,135.6 404.5,133.7 406.0,131.8 407.4,129.8 408.8,127.9 410.3,126.0 411.8,124.1 413.3,122.3 414.9,120.4 416.4,118.6 418.0,116.8 419.7,115.1 421.3,113.4 423.0,111.7 424.8,110.0 426.6,108.4 428.4,106.8 430.2,105.3 432.1,103.9 434.1,102.5 436.1,101.1 438.1,99.8 440.2,98.6 442.3,97.5 444.5,96.4 446.7,95.5 448.9,94.6 451.2,93.8 453.5,93.2 455.8,92.6 458.2,92.2 460.6,91.9 462.9,91.7 465.3,91.7 467.7,91.8 470.1,92.0 472.5,92.4 474.8,93.0 477.1,93.7 479.4,94.5 481.6,95.5 483.7,96.6 485.8,97.8 487.7,99.2 489.6,100.7 491.4,102.3 493.1,104.0 494.7,105.8 496.1,107.7 497.5,109.6 498.8,111.7 500.0,113.7 501.1,115.9 502.1,118.1 503.1,120.3 503.9,122.5 504.7,124.8 505.4,127.1 506.0,129.4 506.6,131.7 507.1,134.1 507.5,136.4 507.9,138.8 508.3,141.2 508.7,143.5 508.7,144.1" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M445.0 96.2 L440.1 102.3 L437.2 96.0 z" fill="#1d2b44"/>
<polyline points="392.2,143.8 393.2,139.1 394.2,134.4 395.3,129.7 396.4,125.1 397.6,120.4 398.9,115.8 400.3,111.2 401.8,106.6 403.4,102.1 405.1,97.6 406.9,93.2 408.9,88.8 411.0,84.5 413.2,80.3 415.6,76.1 418.2,72.1 420.9,68.1 423.7,64.2 426.7,60.5 429.9,56.9 433.2,53.4 436.7,50.1 440.3,46.9 444.1,43.9 448.0,41.1 452.0,38.5 456.2,36.2 460.5,34.0 464.9,32.1 469.4,30.5 474.0,29.2 478.7,28.2 483.4,27.4 488.2,27.1 493.0,27.0 497.8,27.4 502.5,28.1 507.2,29.2 511.8,30.8 516.2,32.7 520.3,35.0 524.3,37.8 527.9,40.9 531.3,44.3 534.2,48.1 536.8,52.1 539.0,56.4 540.8,60.9 542.2,65.5 543.1,70.2 543.7,74.9 543.9,79.7 543.8,84.5 543.4,89.3 542.6,94.0 541.6,98.7 540.3,103.3 538.8,107.9 537.0,112.4 535.1,116.8 533.0,121.1 530.7,125.3 528.3,129.4 525.7,133.5 523.0,137.5 520.3,141.4 517.4,145.3 516.7,146.3" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M414.7 77.7 L414.3 85.5 L408.2 82.0 z" fill="#1d2b44"/>
<polyline points="387.8,143.8 387.4,142.1 387.1,140.3 386.8,138.5 386.4,136.7 386.1,135.0 385.8,133.2 385.5,131.4 385.2,129.7 384.9,127.9 384.6,126.1 384.3,124.3 384.0,122.6 383.7,120.8 383.5,119.0 383.2,117.2 383.0,115.4 382.7,113.6 382.5,111.9 382.3,110.1 382.1,108.3 381.9,106.5 381.7,104.7 381.5,102.9 381.4,101.1 381.2,99.3 381.1,97.5 380.9,95.7 380.8,93.9 380.7,92.1 380.6,90.3 380.5,88.6 380.4,86.8 380.3,85.0 380.2,83.2 380.2,81.4 380.1,79.6 380.1,77.8 380.1,76.0 380.1,74.2 380.1,72.4 380.1,70.6 380.1,68.8 380.2,67.0 380.2,65.2 380.3,63.4 380.3,61.6 380.4,59.8 380.5,58.0 380.6,56.2 380.7,54.4 380.9,52.6 381.0,50.8 381.1,49.0 381.3,47.2 381.5,45.4 381.6,43.6 381.8,41.8 382.0,40.0 382.2,38.2 382.5,36.5 382.7,34.7 382.9,32.9 383.2,31.1 383.5,29.3 383.7,27.5 384.0,25.8 384.3,24.0 384.6,22.2 384.9,20.4 384.9,20.4" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M380.4 88.0 L384.3 94.8 L377.3 95.1 z" fill="#1d2b44"/>
<polyline points="383.7,145.5 382.7,144.0 381.7,142.5 380.7,141.0 379.7,139.5 378.7,138.0 377.7,136.5 376.8,135.0 375.8,133.5 374.8,131.9 373.9,130.4 372.9,128.9 371.9,127.4 371.0,125.9 370.0,124.3 369.1,122.8 368.2,121.3 367.2,119.7 366.3,118.2 365.4,116.6 364.4,115.1 363.5,113.5 362.6,112.0 361.7,110.4 360.8,108.9 359.9,107.3 359.0,105.7 358.1,104.2 357.3,102.6 356.4,101.0 355.5,99.5 354.6,97.9 353.8,96.3 352.9,94.7 352.1,93.1 351.2,91.5 350.4,89.9 349.6,88.4 348.7,86.8 347.9,85.2 347.1,83.6 346.3,81.9 345.5,80.3 344.7,78.7 343.9,77.1 343.1,75.5 342.3,73.9 341.5,72.3 340.7,70.6 339.9,69.0 339.2,67.4 338.4,65.8 337.6,64.1 336.9,62.5 336.1,60.9 335.4,59.2 334.6,57.6 333.9,55.9 333.2,54.3 332.4,52.7 331.7,51.0 331.0,49.4 330.3,47.7 329.6,46.0 328.9,44.4 328.2,42.7 327.5,41.1 326.8,39.4 326.1,37.8 325.4,36.1 324.7,34.4 324.1,32.8 323.4,31.1 322.7,29.4 322.1,27.7 321.4,26.1 320.7,24.4 320.1,22.7 319.4,21.0 319.2,20.5" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M351.0 91.0 L357.3 95.6 L351.1 98.8 z" fill="#1d2b44"/>
<polyline points="380.5,148.7 379.5,148.0 378.5,147.3 377.5,146.7 376.5,146.0 375.5,145.3 374.6,144.6 373.6,144.0 372.6,143.3 371.6,142.6 370.6,141.9 369.6,141.3 368.6,140.6 367.6,139.9 366.6,139.2 365.6,138.6 364.6,137.9 363.7,137.2 362.7,136.5 361.7,135.8 360.7,135.1 359.7,134.4 358.7,133.8 357.7,133.1 356.8,132.4 355.8,131.7 354.8,131.0 353.8,130.3 352.8,129.6 351.9,128.9 350.9,128.2 349.9,127.5 348.9,126.8 348.0,126.1 347.0,125.4 346.0,124.7 345.0,124.0 344.1,123.3 343.1,122.6 342.1,121.9 341.2,121.2 340.2,120.5 339.2,119.8 338.3,119.1 337.3,118.4 336.3,117.7 335.4,116.9 334.4,116.2 333.4,115.5 332.5,114.8 331.5,114.1 330.5,113.4 329.6,112.6 328.6,111.9 327.7,111.2 326.7,110.5 325.7,109.8 324.8,109.0 323.8,108.3 322.9,107.6 321.9,106.9 321.0,106.1 320.0,105.4 319.1,104.7 318.1,103.9 317.2,103.2 316.2,102.5 315.3,101.7 314.3,101.0 313.4,100.3 312.4,99.5 311.5,98.8 310.5,98.1 310.1,97.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M348.0 126.1 L355.7 127.4 L351.6 133.1 z" fill="#1d2b44"/>
<polyline points="378.8,152.8 378.2,152.7 377.6,152.5 377.1,152.4 376.5,152.3 375.9,152.2 375.3,152.1 374.7,152.0 374.1,151.8 373.5,151.7 372.9,151.6 372.3,151.5 371.8,151.4 371.2,151.2 370.6,151.1 370.0,151.0 369.4,150.9 368.8,150.8 368.2,150.7 367.6,150.5 367.1,150.4 366.5,150.3 365.9,150.2 365.3,150.1 364.7,149.9 364.1,149.8 363.5,149.7 362.9,149.6 362.3,149.5 361.8,149.3 361.2,149.2 360.6,149.1 360.0,149.0 359.4,148.9 358.8,148.7 358.2,148.6 357.6,148.5 357.1,148.4 356.5,148.3 355.9,148.1 355.3,148.0 354.7,147.9 354.1,147.8 353.5,147.7 352.9,147.5 352.4,147.4 351.8,147.3 351.2,147.2 350.6,147.0 350.0,146.9 349.4,146.8 348.8,146.7 348.2,146.6 347.7,146.4 347.1,146.3 346.5,146.2 345.9,146.1 345.3,145.9 344.7,145.8 344.1,145.7 343.5,145.6 343.0,145.5 342.4,145.3 341.8,145.2 341.2,145.1 340.6,145.0 340.0,144.8 339.4,144.7 338.8,144.6 338.3,144.5 337.7,144.3 337.1,144.2 336.5,144.1 335.9,144.0 335.3,143.9 334.7,143.7 334.2,143.6 333.6,143.5 333.0,143.4 332.4,143.2 331.8,143.1 331.2,143.0 330.6,142.9 330.0,142.7 329.5,142.6 328.9,142.5 328.3,142.4 327.7,142.2 327.1,142.1 326.5,142.0 325.9,141.9 325.3,141.7 324.8,141.6 324.2,141.5 323.6,141.3 323.0,141.2 322.4,141.1 321.8,141.0 321.2,140.8 320.7,140.7 320.1,140.6 319.5,140.5 318.9,140.3 318.3,140.2 317.7,140.1 317.1,140.0 316.6,139.8 316.0,139.7 315.4,139.6 314.8,139.4 314.2,139.3 313.6,139.2 313.0,139.1 312.4,138.9 311.9,138.8 311.3,138.7 310.7,138.6 310.1,138.4 310.1,138.4" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M347.7 146.4 L355.2 144.4 L353.8 151.3 z" fill="#1d2b44"/>
<polyline points="378.8,157.2 378.2,157.3 377.6,157.5 377.1,157.6 376.5,157.7 375.9,157.8 375.3,157.9 374.7,158.0 374.1,158.2 373.5,158.3 372.9,158.4 372.3,158.5 371.8,158.6 371.2,158.8 370.6,158.9 370.0,159.0 369.4,159.1 368.8,159.2 368.2,159.3 367.6,159.5 367.1,159.6 366.5,159.7 365.9,159.8 365.3,159.9 364.7,160.1 364.1,160.2 363.5,160.3 362.9,160.4 362.3,160.5 361.8,160.7 361.2,160.8 360.6,160.9 360.0,161.0 359.4,161.1 358.8,161.3 358.2,161.4 357.6,161.5 357.1,161.6 356.5,161.7 355.9,161.9 355.3,162.0 354.7,162.1 354.1,162.2 353.5,162.3 352.9,162.5 352.4,162.6 351.8,162.7 351.2,162.8 350.6,163.0 350.0,163.1 349.4,163.2 348.8,163.3 348.2,163.4 347.7,163.6 347.1,163.7 346.5,163.8 345.9,163.9 345.3,164.1 344.7,164.2 344.1,164.3 343.5,164.4 343.0,164.5 342.4,164.7 341.8,164.8 341.2,164.9 340.6,165.0 340.0,165.2 339.4,165.3 338.8,165.4 338.3,165.5 337.7,165.7 337.1,165.8 336.5,165.9 335.9,166.0 335.3,166.1 334.7,166.3 334.2,166.4 333.6,166.5 333.0,166.6 332.4,166.8 331.8,166.9 331.2,167.0 330.6,167.1 330.0,167.3 329.5,167.4 328.9,167.5 328.3,167.6 327.7,167.8 327.1,167.9 326.5,168.0 325.9,168.1 325.3,168.3 324.8,168.4 324.2,168.5 323.6,168.7 323.0,168.8 322.4,168.9 321.8,169.0 321.2,169.2 320.7,169.3 320.1,169.4 319.5,169.5 318.9,169.7 318.3,169.8 317.7,169.9 317.1,170.0 316.6,170.2 316.0,170.3 315.4,170.4 314.8,170.6 314.2,170.7 313.6,170.8 313.0,170.9 312.4,171.1 311.9,171.2 311.3,171.3 310.7,171.4 310.1,171.6 310.1,171.6" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M347.7 163.6 L353.8 158.7 L355.2 165.6 z" fill="#1d2b44"/>
<polyline points="380.5,161.3 379.5,162.0 378.5,162.7 377.5,163.3 376.5,164.0 375.5,164.7 374.6,165.4 373.6,166.0 372.6,166.7 371.6,167.4 370.6,168.1 369.6,168.7 368.6,169.4 367.6,170.1 366.6,170.8 365.6,171.4 364.6,172.1 363.7,172.8 362.7,173.5 361.7,174.2 360.7,174.9 359.7,175.6 358.7,176.2 357.7,176.9 356.8,177.6 355.8,178.3 354.8,179.0 353.8,179.7 352.8,180.4 351.9,181.1 350.9,181.8 349.9,182.5 348.9,183.2 348.0,183.9 347.0,184.6 346.0,185.3 345.0,186.0 344.1,186.7 343.1,187.4 342.1,188.1 341.2,188.8 340.2,189.5 339.2,190.2 338.3,190.9 337.3,191.6 336.3,192.3 335.4,193.1 334.4,193.8 333.4,194.5 332.5,195.2 331.5,195.9 330.5,196.6 329.6,197.4 328.6,198.1 327.7,198.8 326.7,199.5 325.7,200.2 324.8,201.0 323.8,201.7 322.9,202.4 321.9,203.1 321.0,203.9 320.0,204.6 319.1,205.3 318.1,206.1 317.2,206.8 316.2,207.5 315.3,208.3 314.3,209.0 313.4,209.7 312.4,210.5 311.5,211.2 310.5,211.9 310.1,212.3" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M348.0 183.9 L351.6 176.9 L355.7 182.6 z" fill="#1d2b44"/>
<polyline points="383.7,164.5 382.7,166.0 381.7,167.5 380.7,169.0 379.7,170.5 378.7,172.0 377.7,173.5 376.8,175.0 375.8,176.5 374.8,178.1 373.9,179.6 372.9,181.1 371.9,182.6 371.0,184.1 370.0,185.7 369.1,187.2 368.2,188.7 367.2,190.3 366.3,191.8 365.4,193.4 364.4,194.9 363.5,196.5 362.6,198.0 361.7,199.6 360.8,201.1 359.9,202.7 359.0,204.3 358.1,205.8 357.3,207.4 356.4,209.0 355.5,210.5 354.6,212.1 353.8,213.7 352.9,215.3 352.1,216.9 351.2,218.5 350.4,220.1 349.6,221.6 348.7,223.2 347.9,224.8 347.1,226.4 346.3,228.1 345.5,229.7 344.7,231.3 343.9,232.9 343.1,234.5 342.3,236.1 341.5,237.7 340.7,239.4 339.9,241.0 339.2,242.6 338.4,244.2 337.6,245.9 336.9,247.5 336.1,249.1 335.4,250.8 334.6,252.4 333.9,254.1 333.2,255.7 332.4,257.3 331.7,259.0 331.0,260.6 330.3,262.3 329.6,264.0 328.9,265.6 328.2,267.3 327.5,268.9 326.8,270.6 326.1,272.2 325.4,273.9 324.7,275.6 324.1,277.2 323.4,278.9 322.7,280.6 322.1,282.3 321.4,283.9 320.7,285.6 320.1,287.3 319.4,289.0 319.2,289.5" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M351.0 219.0 L351.1 211.2 L357.3 214.4 z" fill="#1d2b44"/>
<polyline points="387.8,166.2 387.4,167.9 387.1,169.7 386.8,171.5 386.4,173.3 386.1,175.0 385.8,176.8 385.5,178.6 385.2,180.3 384.9,182.1 384.6,183.9 384.3,185.7 384.0,187.4 383.7,189.2 383.5,191.0 383.2,192.8 383.0,194.6 382.7,196.4 382.5,198.1 382.3,199.9 382.1,201.7 381.9,203.5 381.7,205.3 381.5,207.1 381.4,208.9 381.2,210.7 381.1,212.5 380.9,214.3 380.8,216.1 380.7,217.9 380.6,219.7 380.5,221.4 380.4,223.2 380.3,225.0 380.2,226.8 380.2,228.6 380.1,230.4 380.1,232.2 380.1,234.0 380.1,235.8 380.1,237.6 380.1,239.4 380.1,241.2 380.2,243.0 380.2,244.8 380.3,246.6 380.3,248.4 380.4,250.2 380.5,252.0 380.6,253.8 380.7,255.6 380.9,257.4 381.0,259.2 381.1,261.0 381.3,262.8 381.5,264.6 381.6,266.4 381.8,268.2 382.0,270.0 382.2,271.8 382.5,273.5 382.7,275.3 382.9,277.1 383.2,278.9 383.5,280.7 383.7,282.5 384.0,284.2 384.3,286.0 384.6,287.8 384.9,289.6 384.9,289.6" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M380.4 222.0 L377.3 214.9 L384.3 215.2 z" fill="#1d2b44"/>
<polyline points="392.2,166.2 393.2,170.9 394.2,175.6 395.3,180.3 396.4,184.9 397.6,189.6 398.9,194.2 400.3,198.8 401.8,203.4 403.4,207.9 405.1,212.4 406.9,216.8 408.9,221.2 411.0,225.5 413.2,229.7 415.6,233.9 418.2,237.9 420.9,241.9 423.7,245.8 426.7,249.5 429.9,253.1 433.2,256.6 436.7,259.9 440.3,263.1 444.1,266.1 448.0,268.9 452.0,271.5 456.2,273.8 460.5,276.0 464.9,277.9 469.4,279.5 474.0,280.8 478.7,281.8 483.4,282.6 488.2,282.9 493.0,283.0 497.8,282.6 502.5,281.9 507.2,280.8 511.8,279.2 516.2,277.3 520.3,275.0 524.3,272.2 527.9,269.1 531.3,265.7 534.2,261.9 536.8,257.9 539.0,253.6 540.8,249.1 542.2,244.5 543.1,239.8 543.7,235.1 543.9,230.3 543.8,225.5 543.4,220.7 542.6,216.0 541.6,211.3 540.3,206.7 538.8,202.1 537.0,197.6 535.1,193.2 533.0,188.9 530.7,184.7 528.3,180.6 525.7,176.5 523.0,172.5 520.3,168.6 517.4,164.7 516.7,163.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M414.7 232.3 L408.2 228.0 L414.3 224.5 z" fill="#1d2b44"/>
<polyline points="396.3,164.5 397.7,166.5 399.0,168.4 400.4,170.4 401.8,172.4 403.1,174.4 404.5,176.3 406.0,178.2 407.4,180.2 408.8,182.1 410.3,184.0 411.8,185.9 413.3,187.7 414.9,189.6 416.4,191.4 418.0,193.2 419.7,194.9 421.3,196.6 423.0,198.3 424.8,200.0 426.6,201.6 428.4,203.2 430.2,204.7 432.1,206.1 434.1,207.5 436.1,208.9 438.1,210.2 440.2,211.4 442.3,212.5 444.5,213.6 446.7,214.5 448.9,215.4 451.2,216.2 453.5,216.8 455.8,217.4 458.2,217.8 460.6,218.1 462.9,218.3 465.3,218.3 467.7,218.2 470.1,218.0 472.5,217.6 474.8,217.0 477.1,216.3 479.4,215.5 481.6,214.5 483.7,213.4 485.8,212.2 487.7,210.8 489.6,209.3 491.4,207.7 493.1,206.0 494.7,204.2 496.1,202.3 497.5,200.4 498.8,198.3 500.0,196.3 501.1,194.1 502.1,191.9 503.1,189.7 503.9,187.5 504.7,185.2 505.4,182.9 506.0,180.6 506.6,178.3 507.1,175.9 507.5,173.6 507.9,171.2 508.3,168.8 508.7,166.5 508.7,165.9" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M445.0 213.8 L437.2 214.0 L440.1 207.7 z" fill="#1d2b44"/>
<polyline points="399.5,161.3 401.0,162.3 402.5,163.3 404.0,164.3 405.5,165.3 407.0,166.3 408.5,167.2 410.0,168.2 411.6,169.2 413.1,170.1 414.6,171.1 416.2,172.0 417.7,172.9 419.3,173.8 420.8,174.7 422.4,175.6 424.0,176.5 425.6,177.3 427.2,178.1 428.8,178.9 430.4,179.7 432.0,180.5 433.7,181.2 435.3,181.9 437.0,182.5 438.7,183.2 440.4,183.8 442.1,184.3 443.8,184.8 445.6,185.3 447.3,185.7 449.1,186.1 450.9,186.4 452.7,186.6 454.4,186.8 456.2,186.9 458.0,187.0 459.8,187.0 461.6,186.9 463.4,186.8 465.2,186.6 467.0,186.3 468.8,185.9 470.5,185.5 472.2,185.0 474.0,184.5 475.6,183.8 477.3,183.2 478.9,182.4 480.5,181.6 482.1,180.7 483.7,179.8 485.2,178.8 486.7,177.8 488.1,176.8 489.6,175.7 491.0,174.5 492.3,173.4 493.7,172.2 495.0,171.0 496.3,169.7 497.6,168.5 498.9,167.2 500.1,165.9 501.4,164.6 502.6,163.3 502.6,163.3" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M446.2 185.4 L438.5 187.1 L440.3 180.3 z" fill="#1d2b44"/>
<polyline points="401.2,157.2 402.4,157.5 403.5,157.7 404.7,157.9 405.9,158.2 407.1,158.4 408.2,158.6 409.4,158.8 410.6,159.1 411.8,159.3 413.0,159.5 414.1,159.7 415.3,160.0 416.5,160.2 417.7,160.4 418.9,160.6 420.0,160.8 421.2,161.0 422.4,161.2 423.6,161.4 424.8,161.7 426.0,161.8 427.1,162.0 428.3,162.2 429.5,162.4 430.7,162.6 431.9,162.8 433.1,163.0 434.3,163.1 435.4,163.3 436.6,163.5 437.8,163.6 439.0,163.8 440.2,163.9 441.4,164.0 442.6,164.1 443.8,164.3 445.0,164.4 446.2,164.5 447.4,164.6 448.6,164.6 449.8,164.7 451.0,164.8 452.2,164.8 453.4,164.9 454.6,164.9 455.8,164.9 457.0,164.9 458.2,164.9 459.4,164.9 460.6,164.9 461.8,164.8 463.0,164.8 464.2,164.7 465.4,164.6 466.6,164.5 467.7,164.4 468.9,164.3 470.1,164.2 471.3,164.1 472.5,163.9 473.7,163.7 474.9,163.6 476.1,163.4 477.3,163.2 478.4,163.0 479.6,162.8 480.8,162.5 482.0,162.3 483.2,162.1 484.3,161.8 485.5,161.6 486.7,161.3 487.8,161.0 489.0,160.7 490.2,160.4 491.3,160.2 492.5,159.9 493.7,159.6 494.8,159.2 496.0,158.9 497.1,158.6 498.3,158.3 499.5,158.0 499.5,158.0" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M445.6 164.4 L438.3 167.3 L438.9 160.3 z" fill="#1d2b44"/>
<circle cx="390.0" cy="155.0" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="390.0" y="160.0" font-size="16" fill="#1d2b44" text-anchor="middle" font-weight="700">+</text>
<rect x="373.0" y="172.0" width="34" height="18" fill="#ffffff"/>
<text x="390.0" y="186.0" font-size="13" fill="#1d2b44" text-anchor="middle">+2q</text>
<circle cx="510.0" cy="155.0" r="11" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="510.0" y="160.0" font-size="16" fill="#1d2b44" text-anchor="middle" font-weight="700">−</text>
<rect x="493.0" y="172.0" width="34" height="18" fill="#ffffff"/>
<text x="510.0" y="186.0" font-size="13" fill="#1d2b44" text-anchor="middle">−q</text>
<text x="450" y="312" font-size="13" fill="#1d2b44" text-anchor="middle">(b) field lines, +2q and −q</text>
</svg>
<figcaption>Figure 1. (a) A vector field map for a single positive charge. Each arrow shows the direction of E at the grid point it is centred on; its length shows the magnitude, which falls as 1/r². (b) Field lines for +2q (left) and −q (right). Line density shows strength, and arrowheads show direction. Eight of the sixteen lines from +2q end on −q.</figcaption>
</figure>

## Fields of charged conductors and insulators

What happens to the field depends on whether charge can move.

**Conductors in electrostatic equilibrium.** In a conductor, free charges move whenever there is a field inside to push them. "Equilibrium" means charges are no longer moving. So:

- **E = 0 everywhere inside the conducting material.** If it were not zero, free charges would still be moving.
- **Any excess charge sits on the surface.** Like charges push one another as far apart as they can, which means onto the outer surface.
- **Just outside the surface, E is perpendicular to the surface.** If E had a component along the surface, it would push surface charges sideways, so they would not be in equilibrium.

**Insulators.** In an insulator, charges cannot move freely. Excess charge can stay wherever it was put: **throughout the inside** as well as on the surface. So the field inside a charged insulator **can be non-zero**.

**Spheres.** Outside any isolated sphere whose charge is spread with **spherical symmetry** (a charged metal sphere, or an insulating sphere with charge spread evenly or in shells), the field is the same as that of a **point charge with the same net charge placed at the centre**: E = kQ/r² for r ≥ R. Inside, the two cases differ: zero inside the metal, but generally non-zero inside the insulator. You will prove these results with Gauss's law in Topic 8.6, and study conductors in more detail in Unit 10.

## Measuring a field

You can design an experiment straight from the definition E = F/q₀. One possible plan for the field near a charged sphere:

1. Mount the charged sphere on an insulating stand, away from other objects and from your hands.
2. Charge a small probe (a tiny conducting ball on an insulating rod) and measure its charge q₀.
3. Attach the probe to a sensitive force sensor. Measure the force F at several distances r from the sphere's centre, along one line.
4. Calculate E = F/q₀ at each point.
5. **Test-charge check.** Halve q₀ and repeat one reading. If F halves and F/q₀ stays the same, the probe is small enough not to disturb the sphere's charge.
6. To test E ∝ 1/r², plot E against 1/r². A straight line through the origin supports the model, and its slope is kQ.

## Worked example 1: from force to field and back

**Question.** A test charge q₀ = +2.0 nC at point P feels a force of 3.6 × 10⁻⁴ N directed north. (a) Find E at P. (b) Find the force on a −5.0 nC charge placed at P instead. (c) The field is produced by one point charge 0.30 m due south of P. Find its charge. (d) Find E at 0.60 m from the source.

1. **(a)** E = F/q₀ = (3.6 × 10⁻⁴ N) ÷ (2.0 × 10⁻⁹ C) = **1.8 × 10⁵ N/C, north**. The test charge is positive, so E has the same direction as F.
2. **(b)** |F| = |q|E = (5.0 × 10⁻⁹ C)(1.8 × 10⁵ N/C) = **9.0 × 10⁻⁴ N, south**. The charge is negative, so the force is opposite to E. The field at P has not changed.
3. **(c)** E points north, away from a source that is south of P, so the source is positive. From E = kQ/r²: Q = Er²/k = (1.8 × 10⁵)(0.30)² ÷ (8.99 × 10⁹) = **+1.8 × 10⁻⁶ C**.
4. **(d)** Doubling r divides E by 2² = 4: E = **4.5 × 10⁴ N/C**.

**Check.** The source is about 900 times larger than the test charge, so q₀ = 2.0 nC is reasonably treated as a test charge. Units: N ÷ C gives N/C.

## Worked example 2: net field from two charges

**Question.** A charge q₁ = +3.0 nC is at the origin and q₂ = −4.0 nC is at (0.40 m, 0). Find the net field at P = (0, 0.30 m), and the force on a proton placed at P.

<figure>
<svg viewBox="0 0 340 370" role="img" aria-labelledby="ef-we2-title ef-we2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ef-we2-title">Field vectors at point P from two charges</title>
<desc id="ef-we2-desc">Charge plus 3.0 nanocoulombs at the origin, bottom left. Charge minus 4.0 nanocoulombs 0.40 metres to its right. Point P is 0.30 metres directly above the origin, so P is 0.50 metres from the negative charge, forming a 3-4-5 right triangle. At P, arrow E1 points straight up, away from the positive charge. Arrow E2, about half as long, points down and to the right, along the line from P towards the negative charge. A dashed arrow, E net, points up and to the right at about 62 degrees above the horizontal.</desc>
<defs><marker id="ef-we2-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="60" y1="320" x2="260" y2="320" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="60" y1="320" x2="60" y2="170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="60" y1="170" x2="260" y2="320" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4"/>
<line x1="60" y1="170" x2="60" y2="35" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ef-we2-arr)"/>
<line x1="60" y1="170" x2="111.8" y2="208.8" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#ef-we2-arr)"/>
<line x1="60" y1="170" x2="111.8" y2="74" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="6 3" marker-end="url(#ef-we2-arr)"/>
<circle cx="60" cy="320" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="60" y="326" font-size="16" fill="#1d2b44" text-anchor="middle" font-weight="700">+</text>
<circle cx="260" cy="320" r="12" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="260" y="326" font-size="16" fill="#1d2b44" text-anchor="middle" font-weight="700">−</text>
<circle cx="60" cy="170" r="4" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="48" y="175" text-anchor="end">P</text>
<text x="60" y="354" text-anchor="middle">q₁ = +3.0 nC</text>
<text x="260" y="354" text-anchor="middle">q₂ = −4.0 nC</text>
<text x="160" y="312" text-anchor="middle">0.40 m</text>
<text x="52" y="250" text-anchor="end">0.30 m</text>
<text x="172" y="236">0.50 m</text>
<text x="48" y="45" text-anchor="end">E₁</text>
<text x="92" y="230" text-anchor="end">E₂</text>
<text x="120" y="78">E_net</text>
</g>
</svg>
<figcaption>Figure 2. Geometry for Worked example 2. Arrow lengths are drawn to one scale for E. E₁ points away from the positive charge; E₂ points towards the negative charge, along the 0.50 m line. The dashed arrow, E_net, is their vector sum.</figcaption>
</figure>

1. **Distances.** r₁ = 0.30 m. r₂ = √(0.40² + 0.30²) = 0.50 m.
2. **Magnitudes.** E₁ = (8.99 × 10⁹)(3.0 × 10⁻⁹) ÷ (0.30)² = 299.7 N/C. E₂ = (8.99 × 10⁹)(4.0 × 10⁻⁹) ÷ (0.50)² = 143.8 N/C.
3. **Directions.** E₁ points straight up (+y), away from q₁. E₂ points from P **towards** q₂, along the unit vector (0.40, −0.30)/0.50 = (0.80, −0.60).
4. **Components.** E₁ = (0, 299.7) N/C. E₂ = (0.80 × 143.8, −0.60 × 143.8) = (115.1, −86.3) N/C.
5. **Add.** E_net = (115.1, 213.4) N/C. |E_net| = √(115.1² + 213.4²) = **242 N/C**, at tan⁻¹(213.4/115.1) = **61.7° above the +x direction**.
6. **Force on a proton.** F = eE = (1.60 × 10⁻¹⁹ C)(242 N/C) = **3.9 × 10⁻¹⁷ N**, in the same direction as E_net.

**Check.** Adding the magnitudes would give about 440 N/C, far too big: the y-components partly cancel. An electron at P would feel the same size of force in the opposite direction.

## Worked example 3: a field from a graph

**Question.** A student uses a field meter to measure E at distances r from the centre of a small charged sphere. Use the data to test whether E ∝ 1/r² and to find the sphere's charge.

| r (m) | 0.10 | 0.15 | 0.20 | 0.25 | 0.30 |
|---|---|---|---|---|---|
| E (N/C) | 4520 | 1980 | 1130 | 710 | 505 |
| 1/r² (m⁻²) | 100 | 44.4 | 25.0 | 16.0 | 11.1 |

1. **Choose axes.** The model is E = kQ/r². Writing x = 1/r² gives E = (kQ)x, a straight line through the origin with slope kQ. So plot E (vertical) against 1/r² (horizontal).
2. **Plot and fit.** The points lie close to a straight line through the origin (Figure 3). That supports E ∝ 1/r².
3. **Slope.** Using the line, not a single data point: at 1/r² = 100 m⁻² the line is at about 4510 N/C, so the slope is 4510 ÷ 100 ≈ **45 N·m²/C**.
4. **Charge.** kQ = 45 N·m²/C, so Q = 45 ÷ (8.99 × 10⁹) = **5.0 × 10⁻⁹ C (5.0 nC)**.

<figure>
<svg viewBox="0 0 560 370" role="img" aria-labelledby="ef-graph-title ef-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ef-graph-title">Field strength plotted against one over distance squared</title>
<desc id="ef-graph-desc">Horizontal axis: one over r squared, from 0 to 110 per square metre. Vertical axis: field strength E, from 0 to 5000 newtons per coulomb. Five data points, shown as open circles, at about (11.1, 505), (16, 710), (25, 1130), (44.4, 1980) and (100, 4520). A straight best-fit line passes through the origin and close to every point. A dashed triangle under the line marks a rise of 4510 newtons per coulomb over a run of 100 per square metre, giving a slope of about 45 newton metres squared per coulomb.</desc>
<defs><marker id="ef-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="300" x2="545" y2="300" stroke="#1d2b44" stroke-width="2" marker-end="url(#ef-arr)"/>
<line x1="80" y1="300" x2="80" y2="25" stroke="#1d2b44" stroke-width="2" marker-end="url(#ef-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="80.0" y1="300" x2="80.0" y2="306" stroke="#1d2b44"/><text x="80.0" y="320">0</text>
<line x1="160.0" y1="300" x2="160.0" y2="306" stroke="#1d2b44"/><text x="160.0" y="320">20</text>
<line x1="240.0" y1="300" x2="240.0" y2="306" stroke="#1d2b44"/><text x="240.0" y="320">40</text>
<line x1="320.0" y1="300" x2="320.0" y2="306" stroke="#1d2b44"/><text x="320.0" y="320">60</text>
<line x1="400.0" y1="300" x2="400.0" y2="306" stroke="#1d2b44"/><text x="400.0" y="320">80</text>
<line x1="480.0" y1="300" x2="480.0" y2="306" stroke="#1d2b44"/><text x="480.0" y="320">100</text>
<text x="300" y="348" font-size="13">1/r² (m⁻²)</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="250.0" x2="80" y2="250.0" stroke="#1d2b44"/><text x="70" y="254.0">1000</text>
<line x1="74" y1="200.0" x2="80" y2="200.0" stroke="#1d2b44"/><text x="70" y="204.0">2000</text>
<line x1="74" y1="150.0" x2="80" y2="150.0" stroke="#1d2b44"/><text x="70" y="154.0">3000</text>
<line x1="74" y1="100.0" x2="80" y2="100.0" stroke="#1d2b44"/><text x="70" y="104.0">4000</text>
<line x1="74" y1="50.0" x2="80" y2="50.0" stroke="#1d2b44"/><text x="70" y="54.0">5000</text>
</g>
<text x="20" y="175" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 175)">Field strength, E (N/C)</text>
<line x1="80" y1="300" x2="512.0" y2="56.5" stroke="#1d2b44" stroke-width="2"/>
<polyline points="80.0,300.0 480.0,300.0 480.0,74.6" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<circle cx="480.0" cy="74.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="257.8" cy="201.0" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="180.0" cy="243.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="144.0" cy="264.5" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="124.4" cy="274.8" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="472.0" y="187.3" text-anchor="end">rise ≈ 4510 N/C</text>
<text x="280.0" y="292" text-anchor="middle">run = 100 m⁻²</text>
<text x="200.0" y="105.0">best-fit line through origin:</text>
<text x="200.0" y="120.0">slope ≈ 45 N·m²/C</text>
</g></svg>
<figcaption>Figure 3. The data from Worked example 3 plotted as E against 1/r². The points lie close to a straight line through the origin, so E ∝ 1/r². The slope, about 45 N·m²/C, equals kQ.</figcaption>
</figure>

**Check.** From r = 0.10 m to r = 0.20 m, E falls from 4520 to 1130 N/C, a factor of exactly 4, as the inverse-square model predicts. A plot of E against r would be a curve, which makes the slope hard to use.

## Common misconceptions

- **"The field depends on the test charge."** The force does; the field does not. E is set by the source charges.
- **"Field lines are paths that charges follow."** A field line gives the direction of the force, which is the direction of the acceleration, not of the velocity. A charge released on a curved field line does not, in general, follow that line.
- **"No line drawn means no field."** Lines are only a sample. The field exists between them.
- **Adding magnitudes instead of vectors.** Two fields of 300 N/C and 140 N/C can give anything from 160 N/C to 440 N/C, depending on direction. Use components.
- **Using the wrong distance.** Each kq/r² uses the distance from **that** charge to the point, not the distance between the charges.
- **Wrong direction for a negative source.** E points **towards** a negative charge, whatever the sign of the test charge.
- **"The field is zero inside every charged sphere."** That is true for a conductor in equilibrium, not for an insulator with charge spread through it.
- **"Charge spreads evenly through a metal."** Excess charge on a conductor sits on its surface.

## Where this leads

Next, in Topic 8.4, you will replace sums over a few point charges with integrals over continuous charge distributions, such as rods and rings: see the [8.4 study guide](/advanced-course-resources/physics-c-electricity-and-magnetism/8-4-electric-fields-charge-distributions-study-guide/). Gauss's law ([Topic 8.6](/advanced-course-resources/physics-c-electricity-and-magnetism/8-6-gauss-law-study-guide/)) will then prove the conductor and sphere results above. Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-checklist/).
