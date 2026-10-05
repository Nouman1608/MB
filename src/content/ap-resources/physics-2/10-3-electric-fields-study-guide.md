---
resourceId: "mb-ap-phys2-10.3-study-guide"
title: "Electric Fields: Study Guide (Physics 2 10.3)"
description: "Define the electric field with a test charge, add the fields of point charges as vectors, read field maps and field lines, and compare charged conductors with insulators."
course: "physics-2"
unit: 10
topics: ["10.3"]
resourceType: "study-guide"
prerequisites:
  - "Coulomb's law and the direction of electric forces (Topic 10.1)"
  - "Conductors, insulators and how objects become charged (Topics 10.1 and 10.2)"
  - "Adding vectors using components"
prerequisiteResources: ["mb-ap-phys2-10.2-study-guide"]
learningObjectives:
  - "Define the electric field at a point as the force per unit charge on a small test charge, and use E = F_E/q both ways"
  - "Give the direction of the field near positive and negative charges, and the direction of the force on any charge placed in it"
  - "Calculate the field of a point charge and add the fields of up to four charges as vectors"
  - "Read and draw vector field maps and field-line diagrams"
  - "Describe where excess charge sits, and what the field is like, in and around charged conductors and insulators"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C²; e = 1.6 × 10⁻¹⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-phys2-10.3-revision-notes", "mb-ap-phys2-10.3-practice", "mb-ap-phys2-10.3-checklist"]
next: "mb-ap-phys2-10.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The electric field at a point is the force per unit charge on a small positive test charge: E = F_E/q, measured in N/C."
  - "E points away from positive charges and toward negative charges. A positive charge is pushed along E; a negative charge is pushed opposite to E."
  - "For a point charge E = k|q|/r², so doubling the distance cuts the field to one quarter."
  - "Fields from several charges add as vectors, not as plain numbers."
  - "In electrostatic equilibrium a conductor has zero field inside, its excess charge on the surface, and a field perpendicular to the surface."
faqs:
  - question: "Does an electric field exist at a point where there is no charge to feel it?"
    answer: "Yes. The field is set up by the source charges. A test charge only lets you detect and measure it. Remove the test charge and the field at that point is unchanged."
  - question: "Why must a test charge be small?"
    answer: "A large charge would push or pull on the source charges and move them, which would change the very field you are trying to measure. A small test charge measures the field without disturbing it."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What an electric field is

In Topic 10.1 you met Coulomb's law: two charged objects push or pull on each other even when they do not touch. The **field model** explains this action at a distance in two steps.

1. A charged object (the **source**) sets up an **electric field** in the space around it.
2. Any other charge placed in that space feels a force from the field at its own location.

To measure the field at a point, place a **test charge** q there and measure the electric force F_E on it. The electric field is the force per unit charge:

**E = F_E / q**

A test charge is a point charge small enough that it does not noticeably change the field around it. A large charge would pull or push the source charges and move them. The unit of E is the newton per coulomb (N/C). In Topic 10.5 you will see that the same unit can be written as V/m.

This is the same idea as the gravitational field from Physics 1, g = F_g/m, measured in N/kg. Mass sets up a gravitational field; charge sets up an electric field.

**Example.** A test charge of +2.0 nC at point P feels a force of 6.0 × 10⁻⁵ N to the east. The field at P is E = (6.0 × 10⁻⁵ N) ÷ (2.0 × 10⁻⁹ C) = 3.0 × 10⁴ N/C, to the east. Now put a −4.0 nC charge at P instead (with the source charges held in place). The force on it is F_E = qE, with magnitude (4.0 × 10⁻⁹ C)(3.0 × 10⁴ N/C) = 1.2 × 10⁻⁴ N, to the **west**.

## Direction of the field and of the force

The electric field is a **vector**. Its direction is defined by the force on a **positive** test charge.

- Near an isolated **positive** charge, the field points **away** from it (a positive test charge is repelled).
- Near an isolated **negative** charge, the field points **toward** it (a positive test charge is attracted).
- A **positive** charge in a field feels a force in the **same direction** as E.
- A **negative** charge (for example an electron) feels a force **opposite** to E.

So F_E = qE works as a vector equation when you keep the sign of q. A negative q flips the direction.

## Field of a point charge

Put a test charge q₀ a distance r from a point charge q. Coulomb's law gives a force of size k|q||q₀|/r². Divide by |q₀|:

**E = k|q| / r²**, where k = 1/(4πε₀) = 9.0 × 10⁹ N·m²/C²

Notice that q₀ has cancelled. The field depends only on the source charge and the distance from it.

The field follows an **inverse-square** law. For a +5.0 nC point charge:

| Distance r | E = k q / r² |
|---|---|
| 0.30 m | 500 N/C |
| 0.60 m | 125 N/C |
| 0.90 m | 55.6 N/C |

Double the distance and E falls to 1/4 of its value. Triple the distance and E falls to 1/9.

## Adding fields: superposition

When several charges are nearby, the net field at a point is the **vector sum** of the fields that each charge would make on its own. The course asks you to calculate fields from up to four charged objects, or more when the arrangement is highly symmetric. A reliable method:

1. Draw the point, and draw an arrow for the field from each charge (away from positives, toward negatives).
2. Find each magnitude with E = k|q|/r². Use the distance from that charge to the point.
3. Split each field into x- and y-components. Use symmetry to spot components that cancel.
4. Add the components, then find the magnitude and direction of the net field.

Never add magnitudes when the arrows point in different directions.

## Field maps and field lines

There are two common pictures of a field (Figure 1).

A **vector field map** draws an arrow at many points. Each arrow shows the direction of E at its tail and its length shows the magnitude. Around a single positive charge, all arrows point outward and they shrink quickly with distance.

A **field-line diagram** is a simplified model of the vector field map. Its rules:

- The field at any point is **tangent** to the line through that point, in the direction of the arrowheads.
- Lines start on positive charges and end on negative charges (or go off to infinity).
- The number of lines leaving or entering a charge is proportional to the size of the charge.
- Where lines are **closer together**, the field is **stronger**.
- Lines never cross, because the field has only one direction at each point.

<figure>
<svg viewBox="0 0 640 360" role="img" aria-labelledby="ef-map-title ef-map-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ef-map-title">Vector field map of a positive point charge and field-line diagram of a charge pair</title>
<desc id="ef-map-desc">Left panel: a small sphere marked plus at the centre, with 24 arrows on three rings around it. Every arrow points straight away from the charge. Arrows on the inner ring are 36 units long, on the middle ring (almost twice as far out) about 11 units, and on the outer ring (about 2.6 times as far out) about 5.5 units, because the field strength falls as 1 over r squared. Right panel: a charge plus 2q on the left and a charge minus q on the right. Sixteen field lines leave plus 2q, evenly spaced. Eight of them curve round and end on minus q. The other eight leave the edge of the diagram. Arrowheads on every line point away from plus 2q. The lines are crowded near each charge and spread out far away, and no two lines cross.</desc>
<rect x="8" y="8" width="304" height="344" fill="none" stroke="#1d2b44" stroke-width="1"/>
<rect x="328" y="8" width="304" height="344" fill="none" stroke="#1d2b44" stroke-width="1"/>
<text x="160" y="30" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">(a) Vector field map, +q</text>
<text x="480" y="30" font-size="13" font-weight="600" fill="#1d2b44" text-anchor="middle">(b) Field lines, +2q and −q</text>
<line x1="205.0" y1="175.0" x2="234.0" y2="175.0" stroke="#1d2b44" stroke-width="2"/><polygon points="241.0,175.0 234.0,178.8 234.0,171.2" fill="#1d2b44"/>
<line x1="191.8" y1="206.8" x2="212.3" y2="227.3" stroke="#1d2b44" stroke-width="2"/><polygon points="217.3,232.3 209.6,230.0 215.0,224.6" fill="#1d2b44"/>
<line x1="160.0" y1="220.0" x2="160.0" y2="249.0" stroke="#1d2b44" stroke-width="2"/><polygon points="160.0,256.0 156.2,249.0 163.8,249.0" fill="#1d2b44"/>
<line x1="128.2" y1="206.8" x2="107.7" y2="227.3" stroke="#1d2b44" stroke-width="2"/><polygon points="102.7,232.3 105.0,224.6 110.4,230.0" fill="#1d2b44"/>
<line x1="115.0" y1="175.0" x2="86.0" y2="175.0" stroke="#1d2b44" stroke-width="2"/><polygon points="79.0,175.0 86.0,171.2 86.0,178.8" fill="#1d2b44"/>
<line x1="128.2" y1="143.2" x2="107.7" y2="122.7" stroke="#1d2b44" stroke-width="2"/><polygon points="102.7,117.7 110.4,120.0 105.0,125.4" fill="#1d2b44"/>
<line x1="160.0" y1="130.0" x2="160.0" y2="101.0" stroke="#1d2b44" stroke-width="2"/><polygon points="160.0,94.0 163.8,101.0 156.1,101.0" fill="#1d2b44"/>
<line x1="191.8" y1="143.2" x2="212.3" y2="122.7" stroke="#1d2b44" stroke-width="2"/><polygon points="217.3,117.7 215.0,125.4 209.6,120.0" fill="#1d2b44"/>
<line x1="233.9" y1="205.6" x2="238.1" y2="207.4" stroke="#1d2b44" stroke-width="2"/><polygon points="244.4,210.0 236.7,210.8 239.6,203.9" fill="#1d2b44"/>
<line x1="190.6" y1="248.9" x2="192.4" y2="253.1" stroke="#1d2b44" stroke-width="2"/><polygon points="195.0,259.4 188.9,254.6 195.8,251.7" fill="#1d2b44"/>
<line x1="129.4" y1="248.9" x2="127.6" y2="253.1" stroke="#1d2b44" stroke-width="2"/><polygon points="125.0,259.4 124.2,251.7 131.1,254.6" fill="#1d2b44"/>
<line x1="86.1" y1="205.6" x2="81.9" y2="207.4" stroke="#1d2b44" stroke-width="2"/><polygon points="75.6,210.0 80.4,203.9 83.3,210.8" fill="#1d2b44"/>
<line x1="86.1" y1="144.4" x2="81.9" y2="142.6" stroke="#1d2b44" stroke-width="2"/><polygon points="75.6,140.0 83.3,139.2 80.4,146.1" fill="#1d2b44"/>
<line x1="129.4" y1="101.1" x2="127.6" y2="96.9" stroke="#1d2b44" stroke-width="2"/><polygon points="125.0,90.6 131.1,95.4 124.2,98.3" fill="#1d2b44"/>
<line x1="190.6" y1="101.1" x2="192.4" y2="96.9" stroke="#1d2b44" stroke-width="2"/><polygon points="195.0,90.6 195.8,98.3 188.9,95.4" fill="#1d2b44"/>
<line x1="233.9" y1="144.4" x2="238.1" y2="142.6" stroke="#1d2b44" stroke-width="2"/><polygon points="244.4,140.0 239.6,146.1 236.7,139.2" fill="#1d2b44"/>
<line x1="275.0" y1="175.0" x2="277.2" y2="175.0" stroke="#1d2b44" stroke-width="2"/><polygon points="280.5,175.0 277.2,178.0 277.2,172.0" fill="#1d2b44"/>
<line x1="241.3" y1="256.3" x2="242.9" y2="257.9" stroke="#1d2b44" stroke-width="2"/><polygon points="245.2,260.2 240.8,260.0 245.0,255.8" fill="#1d2b44"/>
<line x1="160.0" y1="290.0" x2="160.0" y2="292.2" stroke="#1d2b44" stroke-width="2"/><polygon points="160.0,295.5 157.0,292.2 163.0,292.2" fill="#1d2b44"/>
<line x1="78.7" y1="256.3" x2="77.1" y2="257.9" stroke="#1d2b44" stroke-width="2"/><polygon points="74.8,260.2 75.0,255.8 79.2,260.0" fill="#1d2b44"/>
<line x1="45.0" y1="175.0" x2="42.8" y2="175.0" stroke="#1d2b44" stroke-width="2"/><polygon points="39.5,175.0 42.8,172.0 42.8,178.0" fill="#1d2b44"/>
<line x1="78.7" y1="93.7" x2="77.1" y2="92.1" stroke="#1d2b44" stroke-width="2"/><polygon points="74.8,89.8 79.2,90.0 75.0,94.2" fill="#1d2b44"/>
<line x1="160.0" y1="60.0" x2="160.0" y2="57.8" stroke="#1d2b44" stroke-width="2"/><polygon points="160.0,54.5 163.0,57.8 157.0,57.8" fill="#1d2b44"/>
<line x1="241.3" y1="93.7" x2="242.9" y2="92.1" stroke="#1d2b44" stroke-width="2"/><polygon points="245.2,89.8 245.0,94.2 240.8,90.0" fill="#1d2b44"/>
<circle cx="160" cy="175" r="9" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="160" y="180" font-size="14" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<text x="160" y="335" font-size="12" fill="#1d2b44" text-anchor="middle">arrow length ∝ field strength (falls as 1/r²)</text>
<defs><clipPath id="ef-clip"><rect x="329" y="40" width="302" height="276"/></clipPath></defs>
<g clip-path="url(#ef-clip)">
<polyline points="428.8,176.8 433.5,177.7 438.2,178.6 443.0,179.5 447.7,180.3 452.4,181.1 457.2,181.8 461.9,182.4 466.7,182.9 471.5,183.2 476.3,183.3 481.1,183.2 485.9,182.9 490.6,182.3 495.4,181.4 500.1,180.4 504.7,179.3 509.4,178.1 511.7,177.4" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="427.5,180.0 431.5,182.6 435.5,185.3 439.6,187.8 443.7,190.3 447.9,192.7 452.1,194.9 456.5,196.9 460.9,198.7 465.5,200.2 470.2,201.2 474.9,201.8 479.7,201.9 484.5,201.3 489.2,200.2 493.6,198.4 497.9,196.2 501.8,193.5 505.6,190.4 509.1,187.2 512.4,183.7 514.4,181.5" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="425.0,182.5 427.7,186.5 430.4,190.4 433.2,194.3 436.1,198.1 439.1,201.9 442.2,205.6 445.4,209.1 448.8,212.5 452.4,215.7 456.2,218.6 460.2,221.3 464.4,223.6 468.8,225.5 473.4,227.0 478.1,227.9 482.9,228.2 487.6,227.9 492.3,226.8 496.8,225.1 500.9,222.6 504.7,219.6 507.9,216.1 510.7,212.2 513.0,208.0 514.9,203.6 516.4,199.0 517.5,194.4 518.4,189.6 519.0,184.9 519.2,183.7" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="421.8,183.8 422.7,188.5 423.7,193.2 424.8,197.9 426.0,202.6 427.2,207.2 428.6,211.8 430.1,216.3 431.7,220.9 433.5,225.3 435.4,229.7 437.5,234.0 439.8,238.3 442.2,242.4 444.8,246.5 447.6,250.4 450.6,254.1 453.7,257.7 457.0,261.2 460.6,264.5 464.3,267.5 468.1,270.4 472.1,273.0 476.3,275.3 480.7,277.4 485.1,279.2 489.7,280.6 494.4,281.7 499.1,282.4 503.9,282.7 508.7,282.6 513.5,282.0 518.2,281.0 522.7,279.5 527.1,277.5 531.2,275.1 535.0,272.1 538.4,268.8 541.5,265.1 544.0,261.0 546.1,256.7 547.7,252.1 548.8,247.5 549.4,242.7 549.6,237.9 549.4,233.1 548.8,228.4 547.8,223.7 546.6,219.0 545.0,214.5 543.2,210.1 541.1,205.7 538.9,201.5 536.5,197.3 533.9,193.3 531.1,189.4 528.3,185.5 525.4,181.7 525.4,181.7" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="418.2,183.8 417.3,188.5 416.5,193.3 415.7,198.0 414.9,202.7 414.2,207.5 413.6,212.2 413.0,217.0 412.6,221.8 412.2,226.6 411.9,231.4 411.7,236.2 411.6,241.0 411.6,245.8 411.7,250.6 411.9,255.4 412.2,260.1 412.6,264.9 413.0,269.7 413.6,274.5 414.2,279.2 415.0,284.0 415.8,288.7 416.7,293.4 417.7,298.1 418.8,302.8 419.9,307.5 421.1,312.1 422.1,315.6" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="415.0,182.5 412.4,186.5 409.7,190.5 407.1,194.5 404.6,198.6 402.0,202.7 399.6,206.8 397.1,210.9 394.7,215.1 392.3,219.3 390.0,223.5 387.7,227.7 385.5,231.9 383.3,236.2 381.2,240.5 379.1,244.8 377.0,249.1 375.0,253.5 373.0,257.9 371.1,262.3 369.1,266.7 367.3,271.1 365.4,275.5 363.6,280.0 361.9,284.4 360.2,288.9 358.5,293.4 356.8,297.9 355.2,302.4 353.6,306.9 352.0,311.5 350.6,315.4" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="412.5,180.0 408.5,182.7 404.6,185.4 400.6,188.1 396.6,190.8 392.7,193.6 388.8,196.3 384.9,199.1 381.0,201.9 377.1,204.7 373.2,207.6 369.4,210.5 365.6,213.3 361.7,216.2 357.9,219.2 354.1,222.1 350.4,225.1 346.6,228.1 342.8,231.0 339.1,234.1 335.4,237.1 334.9,237.5" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="411.2,176.8 406.5,177.7 401.8,178.6 397.1,179.6 392.4,180.6 387.7,181.5 383.0,182.5 378.3,183.5 373.6,184.5 368.9,185.5 364.2,186.5 359.5,187.5 354.8,188.5 350.1,189.5 345.4,190.6 340.7,191.6 336.0,192.7 334.9,192.9" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="411.2,173.2 406.5,172.3 401.8,171.4 397.1,170.4 392.4,169.4 387.7,168.5 383.0,167.5 378.3,166.5 373.6,165.5 368.9,164.5 364.2,163.5 359.5,162.5 354.8,161.5 350.1,160.5 345.4,159.4 340.7,158.4 336.0,157.3 334.9,157.1" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="412.5,170.0 408.5,167.3 404.6,164.6 400.6,161.9 396.6,159.2 392.7,156.4 388.8,153.7 384.9,150.9 381.0,148.1 377.1,145.3 373.2,142.4 369.4,139.5 365.6,136.7 361.7,133.8 357.9,130.8 354.1,127.9 350.4,124.9 346.6,121.9 342.8,119.0 339.1,115.9 335.4,112.9 334.9,112.5" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="415.0,167.5 412.4,163.5 409.7,159.5 407.1,155.5 404.6,151.4 402.0,147.3 399.6,143.2 397.1,139.1 394.7,134.9 392.3,130.7 390.0,126.5 387.7,122.3 385.5,118.1 383.3,113.8 381.2,109.5 379.1,105.2 377.0,100.9 375.0,96.5 373.0,92.1 371.1,87.7 369.1,83.3 367.3,78.9 365.4,74.5 363.6,70.0 361.9,65.6 360.2,61.1 358.5,56.6 356.8,52.1 355.2,47.6 353.6,43.1 352.0,38.5 350.6,34.6" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="418.2,166.2 417.3,161.5 416.5,156.7 415.7,152.0 414.9,147.3 414.2,142.5 413.6,137.8 413.0,133.0 412.6,128.2 412.2,123.4 411.9,118.6 411.7,113.8 411.6,109.0 411.6,104.2 411.7,99.4 411.9,94.6 412.2,89.9 412.6,85.1 413.0,80.3 413.6,75.5 414.2,70.8 415.0,66.0 415.8,61.3 416.7,56.6 417.7,51.9 418.8,47.2 419.9,42.5 421.1,37.9 422.1,34.4" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="421.8,166.2 422.7,161.5 423.7,156.8 424.8,152.1 426.0,147.4 427.2,142.8 428.6,138.2 430.1,133.7 431.7,129.1 433.5,124.7 435.4,120.3 437.5,116.0 439.8,111.7 442.2,107.6 444.8,103.5 447.6,99.6 450.6,95.9 453.7,92.3 457.0,88.8 460.6,85.5 464.3,82.5 468.1,79.6 472.1,77.0 476.3,74.7 480.7,72.6 485.1,70.8 489.7,69.4 494.4,68.3 499.1,67.6 503.9,67.3 508.7,67.4 513.5,68.0 518.2,69.0 522.7,70.5 527.1,72.5 531.2,74.9 535.0,77.9 538.4,81.2 541.5,84.9 544.0,89.0 546.1,93.3 547.7,97.9 548.8,102.5 549.4,107.3 549.6,112.1 549.4,116.9 548.8,121.6 547.8,126.3 546.6,131.0 545.0,135.5 543.2,139.9 541.1,144.3 538.9,148.5 536.5,152.7 533.9,156.7 531.1,160.6 528.3,164.5 525.4,168.3 525.4,168.3" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="425.0,167.5 427.7,163.5 430.4,159.6 433.2,155.7 436.1,151.9 439.1,148.1 442.2,144.4 445.4,140.9 448.8,137.5 452.4,134.3 456.2,131.4 460.2,128.7 464.4,126.4 468.8,124.5 473.4,123.0 478.1,122.1 482.9,121.8 487.6,122.1 492.3,123.2 496.8,124.9 500.9,127.4 504.7,130.4 507.9,133.9 510.7,137.8 513.0,142.0 514.9,146.4 516.4,151.0 517.5,155.6 518.4,160.4 519.0,165.1 519.2,166.3" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="427.5,170.0 431.5,167.4 435.5,164.7 439.6,162.2 443.7,159.7 447.9,157.3 452.1,155.1 456.5,153.1 460.9,151.3 465.5,149.8 470.2,148.8 474.9,148.2 479.7,148.1 484.5,148.7 489.2,149.8 493.6,151.6 497.9,153.8 501.8,156.5 505.6,159.6 509.1,162.8 512.4,166.3 514.4,168.5" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polyline points="428.8,173.2 433.5,172.3 438.2,171.4 443.0,170.5 447.7,169.7 452.4,168.9 457.2,168.2 461.9,167.6 466.7,167.1 471.5,166.8 476.3,166.7 481.1,166.8 485.9,167.1 490.6,167.7 495.4,168.6 500.1,169.6 504.7,170.7 509.4,171.9 511.7,172.6" fill="none" stroke="#1d2b44" stroke-width="1.3"/>
<polygon points="462.7,182.5 455.3,185.1 456.2,178.2" fill="#1d2b44"/>
<polygon points="462.2,199.2 454.5,200.0 456.9,193.4" fill="#1d2b44"/>
<polygon points="461.4,222.0 453.6,221.2 457.4,215.3" fill="#1d2b44"/>
<polygon points="467.8,270.2 460.1,268.8 464.3,263.2" fill="#1d2b44"/>
<polygon points="411.8,235.2 408.6,228.0 415.6,228.3" fill="#1d2b44"/>
<polygon points="386.0,231.0 386.2,223.2 392.3,226.5" fill="#1d2b44"/>
<polygon points="380.8,202.0 384.5,195.1 388.5,200.8" fill="#1d2b44"/>
<polygon points="379.8,183.2 386.0,178.3 387.4,185.2" fill="#1d2b44"/>
<polygon points="379.8,166.8 387.4,164.8 386.0,171.7" fill="#1d2b44"/>
<polygon points="380.8,148.0 388.5,149.2 384.5,154.9" fill="#1d2b44"/>
<polygon points="386.0,119.0 392.3,123.5 386.2,126.8" fill="#1d2b44"/>
<polygon points="411.8,114.8 415.6,121.7 408.6,122.0" fill="#1d2b44"/>
<polygon points="467.8,79.8 464.3,86.8 460.1,81.2" fill="#1d2b44"/>
<polygon points="461.4,128.0 457.4,134.7 453.6,128.8" fill="#1d2b44"/>
<polygon points="462.2,150.8 456.9,156.6 454.5,150.0" fill="#1d2b44"/>
<polygon points="462.7,167.5 456.2,171.8 455.3,164.9" fill="#1d2b44"/>
</g>
<circle cx="420" cy="175" r="10" fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5"/>
<text x="420" y="180" font-size="13" font-weight="700" fill="#1d2b44" text-anchor="middle">+</text>
<circle cx="520" cy="175" r="10" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="520" y="180" font-size="14" font-weight="700" fill="#1d2b44" text-anchor="middle">−</text>
<text x="420" y="207" font-size="12" fill="#1d2b44" text-anchor="middle">+2q</text>
<text x="520" y="207" font-size="12" fill="#1d2b44" text-anchor="middle">−q</text>
<text x="480" y="335" font-size="12" fill="#1d2b44" text-anchor="middle">16 lines leave +2q; 8 end on −q</text>
</svg>
<figcaption>Figure 1. (a) A vector field map for a positive point charge: arrows point away from the charge and get much shorter with distance (solid arrows, length in proportion to E). (b) Field lines for +2q (solid outline) and −q (dashed outline). Twice as many lines touch +2q as touch −q; the 8 lines that do not end on −q leave the diagram.</figcaption>
</figure>

In Figure 1(b), 16 lines leave +2q but only 8 end on −q, because −q has half the size of charge. The field is strongest close to each charge and in the region between them, where the lines are most crowded. Field lines show the direction of the **force** on a positive charge, not the path a charge follows: a moving charge can cut across field lines.

## Charged conductors and insulators

In a **conductor** (such as a metal), electrons move freely. In an **insulator** they cannot. This difference controls where excess charge ends up.

**Conductors in electrostatic equilibrium** (no charges moving):

- **The field inside the conducting material is zero.** If there were a field inside, the free electrons would feel a force and move. They keep moving until the field inside has been cancelled. "Equilibrium" means that has already happened.
- **Excess charge sits on the outer surface.** Like charges repel and spread out as far apart as they can.
- **At the surface the field is perpendicular to the surface.** A component along the surface would push charges sideways, and they would move until that component vanished.
- **A charged conducting sphere** acts, for points outside it, like a point charge of the same total charge at its centre. Inside, the field is zero.

**Insulators.** Charge cannot move freely through an insulator, so excess charge can stay where it was placed: inside the material as well as on its surface. The field inside a charged insulator need not be zero. The course only asks for qualitative reasoning about fields inside insulators. Outside a sphere whose charge is spread with spherical symmetry, the point-charge result still holds, whether the sphere is a conductor or an insulator.

*Background (beyond what you must calculate):* the zero field inside a conductor is the idea behind electrostatic shielding. A closed metal box with no charge in its cavity keeps outside static fields away from what is inside.

## Worked example 1: two charges on a line

**Question.** A +4.0 nC point charge sits at x = 0 and a −2.0 nC point charge sits at x = 0.30 m. (a) Find the net electric field at x = 0.10 m. (b) Find the force on an electron placed there. (c) Is there any point on the x-axis where the net field is zero?

1. Distances from the point: 0.10 m from the +4.0 nC charge, 0.20 m from the −2.0 nC charge.
2. Field from +4.0 nC: E₁ = (9.0 × 10⁹)(4.0 × 10⁻⁹) ÷ (0.10)² = 3600 N/C, pointing **away** from it, so in the +x direction.
3. Field from −2.0 nC: E₂ = (9.0 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.20)² = 450 N/C, pointing **toward** it, also in the +x direction.
4. (a) Both point the same way, so they add: E = 3600 + 450 = 4050 N/C, in the +x direction.
5. (b) F = |q|E = (1.6 × 10⁻¹⁹ C)(4050 N/C) = 6.48 × 10⁻¹⁶ N. The electron is negative, so the force is in the **−x** direction.
6. (c) Between the charges both fields point in +x, so they cannot cancel. To the left of x = 0 the point is always closer to the larger charge, so its field always wins. The zero must lie to the **right** of the −2.0 nC charge. There, at position x, set the sizes equal: 4.0/x² = 2.0/(x − 0.30)². Taking square roots, x − 0.30 = x/√2, so x = 0.30 ÷ (1 − 1/√2) = 1.02 m.

**Answer.** (a) 4.1 × 10³ N/C in +x (4050 N/C). (b) 6.5 × 10⁻¹⁶ N in −x. (c) Yes, at x ≈ 1.02 m.

**Check.** At x = 1.024 m both fields have size 34.3 N/C and point in opposite directions. The zero is closer to the smaller charge, which makes sense.

## Worked example 2: two charges in a plane

**Question.** Two +3.0 nC charges are fixed at (0, +4.0 cm) and (0, −4.0 cm). Point P is at (3.0 cm, 0). (a) Find the net field at P. (b) The upper charge is replaced by a −3.0 nC charge. Find the new net field at P.

1. Distance from each charge to P: r = √(0.030² + 0.040²) = 0.050 m (a 3-4-5 triangle).
2. Size of each field: E = (9.0 × 10⁹)(3.0 × 10⁻⁹) ÷ (0.050)² = 1.08 × 10⁴ N/C.
3. Components: the line from each charge to P makes cos θ = 0.030/0.050 = 0.6 with the x-axis and sin θ = 0.8. So each field has an x-part of 0.6 × 10 800 = 6480 N/C and a y-part of 0.8 × 10 800 = 8640 N/C.
4. (a) Both charges positive. The upper charge pushes P down and to the right; the lower charge pushes it up and to the right. The y-parts cancel by symmetry. E = 2 × 6480 = 1.30 × 10⁴ N/C in the +x direction.
5. (b) Now the field from the upper charge points **toward** it: up and to the left. The field from the lower charge still points up and to the right. The x-parts cancel and the y-parts add: E = 2 × 8640 = 1.73 × 10⁴ N/C in the +y direction.

**Interpretation.** Changing the sign of one charge turns its field round, so a different pair of components cancels. Symmetry saved half the work in both parts. In (b), a proton at P would be pushed in +y, and an electron in −y.

## Worked example 3: a charged metal sphere

**Question.** A solid metal sphere of radius 0.10 m carries +2.0 nC and is in electrostatic equilibrium. Find the field (a) 0.30 m from its centre, (b) just outside its surface and (c) 0.05 m from its centre.

1. (a) Outside, treat the sphere as a point charge at its centre: E = (9.0 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.30)² = 200 N/C, pointing radially outward.
2. (b) Just outside the surface, r = 0.10 m: E = (9.0 × 10⁹)(2.0 × 10⁻⁹) ÷ (0.10)² = 1800 N/C, perpendicular to the surface, outward.
3. (c) The point is inside the metal, so E = 0.

**Check.** The point in (a) is 3 times as far from the centre as the point in (b), and 1800 ÷ 200 = 9 = 3². All the excess charge is on the surface.

## Common misconceptions

- **"The field only exists where a charge is placed."** The source charges set up the field everywhere around them. A test charge just detects it.
- **"The field depends on the test charge."** The force depends on q; the ratio F_E/q does not. Double the test charge and the force doubles, but E stays the same.
- **"The force is always along E."** Only for a positive charge. An electron is pushed opposite to the field.
- **Adding magnitudes.** Fields are vectors. In Worked example 2(a) the two fields each have size 1.08 × 10⁴ N/C, yet the net field is 1.30 × 10⁴ N/C, not 2.16 × 10⁴ N/C.
- **"Field lines are the paths charges follow."** A line shows the direction of the force at each point, not the trajectory.
- **"There is no field between the lines."** A diagram draws only a few lines. The field exists at every point; its direction there follows the nearby lines.
- **"The field is zero inside every charged object."** That is true only inside a conductor in equilibrium. Inside a charged insulator the field can be nonzero.
- **Measuring r to the surface of a sphere.** For a charged sphere, measure r from the centre.

## Where this leads

The field tells you the force per unit charge. Topic 10.4 asks how much **energy** is stored when charges are pushed together against these forces: see [Electric Potential Energy](/advanced-course-resources/physics-2/10-4-electric-potential-energy-study-guide/). Topic 10.5 then defines the potential, which is energy per unit charge. Test yourself now with the [practice questions](/advanced-course-resources/physics-2/10-3-electric-fields-practice/), then use the [revision notes](/advanced-course-resources/physics-2/10-3-electric-fields-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/10-3-electric-fields-checklist/) to consolidate.
