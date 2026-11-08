---
title: "Cambridge O Level Mathematics: Trigonometry (4024) -- Revision Notes"
seoTitle: "O Level Maths Trigonometry Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Trigonometry"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 523
syllabusTopics:
  - qualification: "o-level"
    topic: "trigonometry"
description: "Condensed Cambridge O Level Mathematics revision notes on Pythagoras, sine, cosine and tangent, the sine and cosine rules, bearings and 3D trigonometry."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-25
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---
These notes condense topic 6, Trigonometry, from the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, sections 6.1 to 6.4. The syllabus has no tiers, so everything here is for every candidate. For full explanations and longer worked examples, read the [study guide](/resources/o-level-mathematics-trigonometry/). For testing, use the [existing practice questions](/resources/o-level-mathematics-trigonometry-practice/).

Related pages: the [course hub](/boards/cambridge/o-level/mathematics/), the [checklist](/checklists/cambridge/o-level/mathematics/) and the [free diagnostics](/diagnostics/).

## Assessment reminders

- Paper 1 is non-calculator and Paper 2 is a calculator paper, both written, 2 hours, 100 marks.
- Paper 2 asks for non-exact answers to 3 significant figures and angles in degrees to 1 decimal place, unless the question says otherwise.
- The syllabus advises avoiding rounding until the final answer, and using the unrounded value if a later part needs it.
- The sine rule, cosine rule and area formula are in the List of formulas. You still need to know when to use each.

## 6.1 Pythagoras' theorem

| Find | Formula |
|---|---|
| Hypotenuse c | c = √(a² + b²) |
| A shorter side a | a = √(c² - b²) |

Method in steps:

1. Identify the hypotenuse, the side opposite the right angle.
2. Add the squares if you want the hypotenuse, subtract if you want a shorter side.
3. Square root, then check the hypotenuse is the longest side.

Reminder: 9, 12, 15 and 5, 12, 13 are right-angled triangles. Spotting such sets saves time on Paper 1.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-pythagoras-theorem--01-squares-on-sides.webp" width="900" height="890" alt="A 3, 4, 5 right-angled triangle has a square on each side, with 9, 16 and 25 unit cells. 9 plus 16 equals 25, so the squares on the short sides together equal the square on the hypotenuse." loading="lazy">
  <figcaption>The squares on the two shorter sides add up to the square on the hypotenuse.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-pythagoras-theorem--02-hypotenuse-first.webp" width="900" height="1010" alt="Two scaled triangles with the hypotenuse highlighted opposite the right angle. For PQR, add 7.4 squared and 5.9 squared to get 9.46 cm. For ABC, subtract 4.7 squared from 9.2 squared to get 7.91 cm." loading="lazy">
  <figcaption>Find the hypotenuse, then add the squares for it or subtract to find a shorter side.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-pythagoras-theorem--05-field-diagonal.webp" width="900" height="975" alt="A rectangular field 85 m by 62 m. Walking two edges is 147 m; the diagonal is 105.209 m. The difference is 41.8 m, and rounding the diagonal early gives a wrong 42 m." loading="lazy">
  <figcaption>Keep the unrounded diagonal until the final answer.</figcaption>
</figure>


## 6.2 Right-angled triangles

| Ratio | Formula | Use when you have |
|---|---|---|
| sin θ | opposite / hypotenuse | opposite and hypotenuse |
| cos θ | adjacent / hypotenuse | adjacent and hypotenuse |
| tan θ | opposite / adjacent | opposite and adjacent |

Method for a side:

1. Label the sides from the angle you are using.
2. Pick the ratio containing the known side and the wanted side.
3. Write the equation and rearrange. If the unknown is on the bottom, swap it with the answer: x = 8 / sin 30° rather than dividing wrongly.

Method for an angle:

1. Choose the ratio from the two known sides.
2. Use the inverse (sin⁻¹, cos⁻¹, tan⁻¹).
3. Give degrees to 1 decimal place.

### Shortest distance

The shortest distance from a point to a line is the perpendicular distance. Draw the perpendicular, then use a right-angled triangle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--01-point-to-line-distance.webp" width="900" height="920" alt="A boat at P is 13.5 m from the end A of a pier; PA makes 42 degrees with the pier. The perpendicular PF is the shortest route and a slanting dashed route is longer. d = 13.5 sin 42 = 9.03 m." loading="lazy">
  <figcaption>The shortest distance is the perpendicular: PA is the hypotenuse and d is opposite the 42 degree angle.</figcaption>
</figure>


### Elevation and depression

- Elevation: angle up from the horizontal to the line of sight.
- Depression: angle down from the horizontal to the line of sight.
- Alternate angles are equal, so the depression from A to B equals the elevation from B to A.
- Subtract eye height from the object's height to get the vertical side.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--05-trig-elevation-depression-numbers.webp" width="900" height="1051" alt="Example 6: eyes 1.6 m up, tower 38 m, 55 m away: tan theta = 36.4/55, angle of elevation 33.5 degrees. Example 7: cliff 26 m high, boat 90 m away: tan theta = 26/90, angle of depression 16.1 degrees below the horizontal." loading="lazy">
  <figcaption>Draw the horizontal through the observer first, then measure the angle from it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--02-elevation-depression.webp" width="900" height="950" alt="A person 55 m from a 40 m tower. The angle of elevation to the top is 36.0 degrees since tan x = 40/55. From the top, the angle of depression to the person is also 36.0 degrees, measured from a horizontal line, as they are alternate angles." loading="lazy">
  <figcaption>Elevation and depression are both measured from the horizontal and are equal for the same line of sight.</figcaption>
</figure>


### Bearings

- Measured clockwise from north, with three figures: 040°, 305°.
- Back bearing: add 180° if the bearing is less than 180°, subtract 180° if it is 180° or more.
- Draw a north line at every point. Co-interior angles on parallel north lines add to 180°.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--02-bearings-right-angle.webp" width="900" height="890" alt="A ship sails 8 km on 075 degrees from A to B then 6 km on 165 degrees to C. The bearings differ by 90 degrees so angle ABC is a right angle; AC = 10 km, angle CAB = 36.9 degrees, bearing of C from A = 111.9 degrees." loading="lazy">
  <figcaption>North lines and a right angle turn a bearing problem into Pythagoras and tangent.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--03-bearings-cosine-rule.webp" width="900" height="890" alt="A ship sails 150 km on 040 degrees from P to Q then 210 km on 100 degrees to R. Angle PQR = 220 - 100 = 120 degrees, PR = 313 km, angle QPR = 35.5 degrees, so the bearing of R from P is 075.5 degrees." loading="lazy">
  <figcaption>Find the angle inside the triangle from the bearings, then use the cosine and sine rules.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--04-trig-find-side-and-angle.webp" width="900" height="960" alt="Example 3: angle 37 degrees, adjacent 14.5 cm, tan gives opposite = 10.9 cm. Example 4: hypotenuse 11.4 cm, opposite 7.2 cm, sine gives theta = 39.2 degrees." loading="lazy">
  <figcaption>Choose the ratio that contains the two sides involved, then rearrange or use the inverse.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--06-trig-cosine-rule-angle.webp" width="900" height="810" alt="A triangle with sides 7, 9 and 12 cm drawn to scale. cos A = -14/126, so A = 96.4 degrees; A is inside the dashed semicircle on the 12 cm side, so it is obtuse." loading="lazy">
  <figcaption>A negative cosine from the cosine rule means an obtuse angle, opposite the longest side.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--01-soh-cah-toa.webp" width="900" height="890" alt="A right-angled triangle with sides 3, 4, 5 and angle theta. Opposite is 3, adjacent 4, hypotenuse 5. Sine is 3/5 = 0.6, cosine 4/5 = 0.8, tangent 3/4 = 0.75, and inverse sine of 0.6 gives theta = 36.9 degrees." loading="lazy">
  <figcaption>Name the sides from the angle, then pick sin, cos or tan.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-geometrical-terms-constructions-and-scale-drawings--05-reverse-bearings.webp" width="900" height="990" alt="Points P and Q each with a parallel north line. Bearing of Q from P is 063 degrees; bearing of P from Q is 243 degrees, which is 063 plus 180." loading="lazy">
  <figcaption>The two bearings between a pair of points differ by 180 degrees.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-geometrical-terms-constructions-and-scale-drawings--06-boat-route.webp" width="900" height="780" alt="Harbour H, buoys A and B at 1 cm to 2 km. HA is 6 cm at 070 degrees, AB is 4 cm at 160 degrees with a right angle at A. HB measures about 7.2 cm, about 14.4 km, at bearing about 104 degrees." loading="lazy">
  <figcaption>Boat route drawn to scale, with the distance and bearing of B from H.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--06-area-sine.webp" width="900" height="800" alt="Triangle with a = 8, b = 10 and C = 40 degrees. Height h = 8 sin 40 = 5.14 cm, so area = half of 10 times 5.14 = 25.7 cm squared, which is half a b sin C." loading="lazy">
  <figcaption>The area formula comes from base times height with h = a sin C.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--03-sine-rule.webp" width="900" height="860" alt="Triangle ABC with A = 48, B = 65, C = 67 degrees and a = 9 cm drawn to scale. a over sin A equals b over sin B gives b = 9 sin 65 over sin 48 = 11.0 cm. The rule needs a side and its opposite angle." loading="lazy">
  <figcaption>Pair each side with the angle opposite it.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ocr-gcse-mathematics-sine-rule-and-cosine-rule--01-choose-sine-or-cosine.webp" width="900" height="1000" alt="Four triangles show known sides and angles in gold and the unknown in green. Two angles and a side, or a side with its opposite angle and one more side, need the sine rule. Two sides and the angle between them, or all three sides, need the cosine rule." loading="lazy">
  <figcaption>A matching side and angle pair means sine rule; no pair means cosine rule.</figcaption>
</figure>


## 6.3 Non-right-angled triangles

Label side a opposite angle A, and so on.

| Result | Formula |
|---|---|
| Sine rule (side) | a / sin A = b / sin B = c / sin C |
| Sine rule (angle) | sin A / a = sin B / b = sin C / c |
| Cosine rule (side) | a² = b² + c² - 2bc cos A |
| Cosine rule (angle) | cos A = (b² + c² - a²) / (2bc) |
| Area | ½ab sin C |

### Which rule?

| Known | Wanted | Use |
|---|---|---|
| Side and opposite angle, plus one more | The other pair | Sine rule |
| Two sides and the included angle | Third side | Cosine rule |
| Three sides | An angle | Cosine rule (angle form) |
| Two sides and the included angle | Area | ½ab sin C |

### Obtuse angles and the ambiguous case

- sin(180° - x) = sin x, so an acute and an obtuse angle share a sine value.
- cos(180° - x) = -cos x. A negative cos A means A is obtuse.
- With two sides and a non-included angle (SSA), the sine rule can give B and 180° - B. Keep the obtuse value only if the angle sum stays below 180°.
- No triangle exists if sin B comes out above 1.
- Two triangles are possible only when the given angle is opposite the shorter of the two given sides, and that side is longer than the perpendicular height.

Worked reminder: A = 30°, a = 6, b = 9 gives sin B = 9 sin 30° / 6 = 0.75, so B = 48.6° or 131.4°. Angle sums are 78.6° and 161.4°, both under 180°, so both triangles exist.

Method for a bearing problem with a triangle:

1. Sketch the points and a north line at each.
2. Work out the interior angle at the middle point using the back bearing.
3. Choose the rule from the table above.
4. Add or subtract the angle you find from a known bearing.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--04-obtuse-sin-cos.webp" width="900" height="890" alt="A semicircle shows angles 62 and 118 degrees at the same height, so sin 62 = sin 118 = 0.88. Their horizontal distances from the centre are equal and opposite, so cos 62 = 0.47 and cos 118 = -0.47." loading="lazy">
  <figcaption>For an obtuse angle the sine stays positive and the cosine changes sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--07-trig-obtuse-cosine-rule-area.webp" width="900" height="840" alt="A triangle with sides 7.4 and 9.2 cm enclosing 118 degrees, to scale. The height falls outside the base and makes 62 degrees, so sin 118 = sin 62. c^2 = 203.3, c = 14.3 cm, area 30.1 cm^2." loading="lazy">
  <figcaption>With an obtuse angle the cosine term adds to c squared and the sine still gives a positive area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--08-trig-ambiguous-case-numbers.webp" width="900" height="900" alt="With A = 40 degrees, a = 8 cm, b = 11 cm a dashed arc about C crosses the line from A twice. sin B = 0.8838 so B = 62.1 or 117.9 degrees, giving c = 12.2 cm or c = 4.68 cm." loading="lazy">
  <figcaption>The same SSA data can make two different triangles.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--05-cosine-rule.webp" width="900" height="860" alt="The lesson worked example drawn to scale: AB = 7, AC = 10, angle A = 110 degrees. A bar shows BC squared = 149 + 47.9 = 196.9, so BC = 14.0 cm. The extra 47.9 is added because cos 110 degrees is negative." loading="lazy">
  <figcaption>With an obtuse angle the cosine term adds, so BC is longer than the right-angle case.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--04-ambiguous-case.webp" width="900" height="850" alt="Angle A = 30 degrees, AC = 10, BC = 6. BC can meet the base at two points, giving two triangles with B = 56.4 degrees (acute) or 123.6 degrees (obtuse), both with sin B = 0.833." loading="lazy">
  <figcaption>Two different triangles can fit the same sine rule data.</figcaption>
</figure>


## 6.4 Trigonometry in 3D

- Break the solid into flat right-angled triangles and redraw each.
- Cuboid: base diagonal √(l² + w²), space diagonal √(l² + w² + h²).
- Pyramid on a square base of side s: the centre is half a diagonal, s√2 / 2, from a corner.
- Angle between a line and a plane: the angle between the line and its projection on the plane. The projection runs from the foot of the perpendicular to the lower end of the line.

Method in steps:

1. Identify the line and the plane.
2. Mark the foot of the perpendicular from the top of the line to the plane.
3. Draw the projection and the right-angled triangle formed.
4. Use Pythagoras for missing lengths, then a ratio for the angle.

Worked reminder: a cuboid 4 cm by 3 cm by 12 cm. The base diagonal is 5 cm and the space diagonal is √(16 + 9 + 144) = 13 cm. The angle with the base is tan⁻¹(12 / 5) = 67.4°.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/o-level-mathematics-trigonometry--05-pyramid-3d.webp" width="900" height="1160" alt="A square-based pyramid, base 10 cm, height 12 cm above the centre O. AO = 5 root 2 = 7.07 cm, VA = 13.9 cm, and the angle between VA and the base has tan x = 12/7.07 so x = 59.5 degrees. The triangle VOA is shown flat to scale." loading="lazy">
  <figcaption>Half the base diagonal and the height make the right-angled triangle that gives the edge and its angle with the base.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-trigonometry--07-trig-3d.webp" width="900" height="960" alt="A cuboid 8 by 6 by 5 cm. The base diagonal AC = 10 cm, and with CG = 5 and AG = 11.2 it forms a right-angled triangle. The angle between AG and the base has tan x = 5/10, so x = 26.6 degrees. The triangle is also shown flat." loading="lazy">
  <figcaption>Pull the right-angled triangle out of the solid, then use ordinary trigonometry.</figcaption>
</figure>


## Non-calculator habits

Paper 1 can include any of this topic, so practise the structure without a calculator. Leave answers in a form such as 5√2 if the numbers allow, and recognise common Pythagorean sets like 3, 4, 5 and 8, 15, 17. Set out the equation clearly, because a correct method with a slip is easier to follow than a bare answer.

## Must-know distinctions

- Sine rule or cosine rule: the sine rule needs an opposite pair, the cosine rule needs the included angle or all three sides.
- Elevation or depression: both are measured from the horizontal, never the vertical.
- Bearing of B from A or of A from B: they differ by 180°.
- Line and plane angle or line and line angle: the line-to-plane angle always uses the projection.
- Hypotenuse or longest side in a non-right-angled triangle: Pythagoras only works in a right-angled triangle.

## Quick self-test

1. A right-angled triangle has hypotenuse 15 cm and one shorter side 9 cm. Find the other side.
2. Find the opposite side when the adjacent side is 9 cm and the angle is 50°.
3. The opposite side is 5 cm and the adjacent side is 12 cm. Find the angle.
4. The adjacent side is 4.5 cm and the hypotenuse is 9 cm. Find the angle.
5. The bearing of Q from P is 130°. Find the bearing of P from Q.
6. In a triangle, one side is 12 cm and the angle opposite it is 71°. Find the side opposite an angle of 48°.
7. Two sides are 5 cm and 8 cm with an included angle of 60°. Find the third side.
8. Find the area of a triangle with sides 10 cm and 13 cm and an included angle of 150°.
9. Write sin 140° as the sine of an acute angle, and say whether cos 140° is positive or negative.
10. A cuboid measures 4 cm by 3 cm by 12 cm. Find the angle between its space diagonal and the 4 by 3 base.
11. In a triangle, A = 30°, a = 6 cm and b = 9 cm. How many possible values are there for angle B?

### Answers

1. 12 cm (√(225 - 81) = √144).
2. 9 × tan 50° = 10.7 cm (3 s.f.).
3. tan⁻¹(5 / 12) = 22.6°.
4. cos⁻¹(0.5) = 60.0°.
5. 130° + 180° = 310°.
6. 12 × sin 48° / sin 71° = 9.43 cm (3 s.f.).
7. √(25 + 64 - 40) = √49 = 7 cm.
8. ½ × 10 × 13 × sin 150° = 32.5 cm².
9. sin 140° = sin 40°. cos 140° is negative.
10. tan⁻¹(12 / 5) = 67.4°.
11. Two: 48.6° or 131.4°.

## Where marks are usually lost

- Calculator in the wrong angle mode.
- Rounding too early, which can move the final digit of the answer.
- Giving an angle to the wrong accuracy: angles to 1 decimal place, other answers to 3 significant figures.
- Using the sine rule with a side and an angle that are not opposite each other.
- Using the cosine rule with an angle that is not between the two sides used.
- Missing the second answer in an ambiguous case, or keeping an obtuse angle that breaks the angle sum.
- Writing a bearing with two figures or measuring it from the wrong north line.
- Drawing no sketch in a 3D problem, so the wrong triangle is used.
- Forgetting units, such as cm² for area.

## Frequently asked questions

**Are the sine rule and cosine rule given in the Cambridge O Level Mathematics 4024 exam?**
Yes. The sine rule, cosine rule and area formula are in the List of formulas, but you still need to know when to use each one.

**How accurate should trigonometry answers be in O Level Mathematics?**
Paper 2 asks for angles in degrees to 1 decimal place and other non-exact answers to 3 significant figures, unless the question says otherwise. Avoid rounding until the final answer.

**What is the ambiguous case of the sine rule?**
When you know two sides and a non-included angle, the sine rule can give an angle B and also 180° − B, because both have the same sine. Keep the obtuse value only if the angle sum stays below 180°.

**What is the difference between angles of elevation and depression?**
An angle of elevation is measured up from the horizontal to the line of sight, and an angle of depression is measured down from the horizontal. Both are measured from the horizontal, never the vertical.

**How do you find the space diagonal of a cuboid?**
Use √(l² + w² + h²), which comes from applying Pythagoras' theorem twice: once for the base diagonal and once with the height.

## Official syllabus

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for examination in 2025, 2026 and 2027, topic 6 Trigonometry (Cambridge University Press & Assessment).
