---
resourceId: "mb-ap-phys2-13.4-study-guide"
title: "Images Formed by Lenses: Study Guide (Physics 2 13.4)"
description: "Converging and diverging thin lenses: focal points, the three principal rays, the thin-lens equation, sign conventions, magnification and finding f from data."
course: "physics-2"
unit: 13
topics: ["13.4"]
resourceType: "study-guide"
prerequisites:
  - "Refraction and Snell's law (Topic 13.3)"
  - "Real and virtual images, focal points and ray diagrams for mirrors (Topic 13.2)"
  - "Rearranging equations with reciprocals"
prerequisiteResources: ["mb-ap-phys2-13.3-study-guide"]
learningObjectives:
  - "Describe how converging and diverging thin lenses bend rays parallel to the principal axis"
  - "Draw the three principal rays to locate an image and describe it"
  - "Use the thin-lens equation 1/sᵢ + 1/sₒ = 1/f with a consistent sign convention"
  - "Calculate magnification and image height, and state whether an image is real or virtual, upright or inverted"
  - "Predict how the image changes as the object moves, and find f from experimental data"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "scientific"
calculatorNote: "Keep distances in the same unit throughout (cm is fine). Watch the signs of f and sᵢ. Keep unrounded values until the final step"
related: ["mb-ap-phys2-13.4-revision-notes", "mb-ap-phys2-13.4-practice", "mb-ap-phys2-13.4-checklist"]
next: "mb-ap-phys2-13.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A converging lens bends parallel rays to meet at a focal point on the far side; a diverging lens spreads them as if they came from a focal point on the near side."
  - "Thin-lens equation: 1/sᵢ + 1/sₒ = 1/f. f > 0 for converging, f < 0 for diverging."
  - "sᵢ > 0: real image on the far side (rays really meet). sᵢ < 0: virtual image on the object's side (rays only appear to meet)."
  - "Magnification compares sizes: |M| = |hᵢ/hₒ| = |sᵢ/sₒ|. For a single lens, real images are inverted and virtual images are upright."
  - "A diverging lens always gives a virtual, upright, smaller image of a real object."
faqs:
  - question: "Why do some textbooks write M = −sᵢ/sₒ?"
    answer: "This course writes magnification as |M| = |hᵢ/hₒ| = |sᵢ/sₒ|: a size ratio with no sign. Some textbooks drop the bars and use M = −sᵢ/sₒ, so that a negative M means an inverted image. Treat that as background only. In this course, quote |M| and state the orientation in words: for a single lens, a real image is inverted and a virtual image is upright."
  - question: "Does covering half of a lens remove half of the image?"
    answer: "No. Every part of the lens receives light from every point of the object, so the whole image still forms. It is dimmer, because less light gets through."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## How a lens bends light

A lens is a piece of transparent material with curved surfaces. Light refracts twice: once entering the lens and once leaving it (Topic 13.3). In the **thin-lens model** you ignore the thickness and draw each ray bending once, at the lens's central plane (its midline). The line through the centre of the lens, perpendicular to it, is the **principal axis**.

- A **converging (convex)** lens is thicker in the middle. Rays parallel to the principal axis are refracted and meet at a point on the **transmitted side**: the **focal point** F.
- A **diverging (concave)** lens is thinner in the middle. Rays parallel to the principal axis are refracted outward. They spread as if they came from a focal point on the **incident side**.

A lens has a focal point on **each side**. For a thin lens with the same medium (usually air) on both sides, the two focal points are the same distance f from the lens. That distance is the **focal length**. Its size depends on the curvature of the two surfaces and on the index of refraction of the lens compared with its surroundings. More strongly curved surfaces give a shorter focal length. (Background: the same glass lens is weaker under water, because glass and water have closer indices.)

## Real and virtual images

Light leaves every point of an object in many directions. A lens redirects a cone of that light.

- A **real image** forms where refracted rays from one object point **actually meet** at another point. Real images form on the transmitted side of a lens and can be caught on a screen.
- A **virtual image** forms where refracted rays **diverge** but appear to come from one point when traced backwards. Virtual images are on the incident side. You can see them by looking through the lens, but a screen placed there shows nothing.

## The three principal rays

To find an image, draw any two of these rays from the top of the object, then check with the third:

1. **Parallel ray**: travels parallel to the principal axis, then refracts through F on the far side (converging) or away from the lens as if it came from F on the near side (diverging).
2. **Central ray**: passes through the centre of the lens **undeflected**.
3. **Focal ray**: passes through (or, for a diverging lens, heads toward) a focal point, then leaves the lens parallel to the principal axis. For a converging lens this is the near-side F; for a diverging lens it is aimed at the far-side F.

<figure>
<svg viewBox="0 0 560 280" role="img" aria-labelledby="conv-title conv-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="conv-title">Ray diagram for a converging lens with the object beyond 2F</title>
<desc id="conv-desc">A converging lens is at the centre of a horizontal principal axis, with focal points F 10 centimetres on each side and points 2F at 20 centimetres. A 6 centimetre upright object stands 30 centimetres to the left. Three rays from its tip: one parallel to the axis that refracts through the right focal point; one straight through the centre; one through the left focal point that leaves parallel to the axis. They meet 15 centimetres to the right of the lens, 3 centimetres below the axis, forming a real, inverted, half-size image.</desc>
<defs><marker id="cv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="20" y1="170" x2="540" y2="170" stroke="#1d2b44" stroke-width="1.2"/>
<ellipse cx="300" cy="170" rx="10" ry="85" fill="#eef3fa" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="12" text-anchor="middle">
<circle cx="220" cy="170" r="3"/><text x="220" y="190">F</text>
<circle cx="380" cy="170" r="3"/><text x="380" y="190">F</text>
<circle cx="140" cy="170" r="3"/><text x="140" y="190">2F</text>
<circle cx="460" cy="170" r="3"/><text x="460" y="190">2F</text>
</g>
<line x1="60" y1="170" x2="60" y2="124" stroke="#1d2b44" stroke-width="3" marker-end="url(#cv-arr)"/>
<text x="60" y="112" font-size="12" fill="#1d2b44" text-anchor="middle">object</text>
<line x1="420" y1="170" x2="420" y2="192" stroke="#1d2b44" stroke-width="3" marker-end="url(#cv-arr)"/>
<text x="420" y="214" font-size="12" fill="#1d2b44" text-anchor="middle">image</text>
<polyline points="60,122 300,122 480,230" fill="none" stroke="#1d2b44" stroke-width="1.8"/>
<line x1="60" y1="122" x2="480" y2="206" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="8 4"/>
<polyline points="60,122 300,194 480,194" fill="none" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="2 3"/>
<g font-size="11" fill="#1d2b44">
<text x="120" y="116">1 parallel</text>
<text x="490" y="210">2 central</text>
<text x="490" y="190">3 focal</text>
<text x="490" y="236">1</text>
</g>
</svg>
<figcaption>Figure 1. Converging lens, f = 10 cm, object 6 cm tall at sₒ = 30 cm (beyond 2F). Ray 1 (solid) goes in parallel and out through F; ray 2 (dashed) passes straight through the centre; ray 3 (dotted) goes through the near F and comes out parallel. They meet at sᵢ = 15 cm: a real, inverted image 3 cm tall.</figcaption>
</figure>

<figure>
<svg viewBox="0 0 560 260" role="img" aria-labelledby="div-title div-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="div-title">Ray diagram for a diverging lens</title>
<desc id="div-desc">A diverging lens, thinner in the middle, sits on a horizontal principal axis with focal points 15 centimetres on each side. A 6 centimetre object stands 30 centimetres to the left. The parallel ray leaves the lens bending upward, and its dashed backward extension passes through the left focal point. The central ray passes straight through. The ray aimed at the right focal point leaves parallel to the axis; its dashed backward extension is horizontal. The backward extensions meet 10 centimetres left of the lens, 2 centimetres above the axis, forming a virtual, upright, one-third-size image.</desc>
<defs><marker id="dv-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="20" y1="170" x2="540" y2="170" stroke="#1d2b44" stroke-width="1.2"/>
<path d="M288 90 Q300 170 288 250 L312 250 Q300 170 312 90 Z" fill="#eef3fa" stroke="#1d2b44" stroke-width="2"/>
<g fill="#1d2b44" font-size="12" text-anchor="middle">
<circle cx="180" cy="170" r="3"/><text x="180" y="190">F</text>
<circle cx="420" cy="170" r="3"/><text x="420" y="190">F</text>
</g>
<line x1="60" y1="170" x2="60" y2="124" stroke="#1d2b44" stroke-width="3" marker-end="url(#dv-arr)"/>
<text x="60" y="112" font-size="12" fill="#1d2b44" text-anchor="middle">object</text>
<line x1="220" y1="170" x2="220" y2="157" stroke="#1d2b44" stroke-width="2" stroke-dasharray="3 2" marker-end="url(#dv-arr)"/>
<text x="232" y="214" font-size="12" fill="#1d2b44" text-anchor="middle">virtual image</text>
<line x1="226" y1="200" x2="221" y2="174" stroke="#1d2b44" stroke-width="1"/>
<polyline points="60,122 300,122 480,50" fill="none" stroke="#1d2b44" stroke-width="1.8"/>
<line x1="300" y1="122" x2="180" y2="170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="60" y1="122" x2="480" y2="206" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="8 4"/>
<polyline points="60,122 300,154 480,154" fill="none" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="2 3"/>
<line x1="300" y1="154" x2="220" y2="154" stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 3"/>
<g font-size="11" fill="#1d2b44">
<text x="420" y="62">1 parallel</text>
<text x="490" y="210">2 central</text>
<text x="490" y="150">3 focal</text>
</g>
</svg>
<figcaption>Figure 2. Diverging lens, f = −15 cm, object 6 cm tall at sₒ = 30 cm. The refracted rays spread out. Traced backwards (thin dashed lines), they appear to come from one point at sᵢ = −10 cm: a virtual, upright image 2 cm tall on the object's side.</figcaption>
</figure>

## The thin-lens equation and sign conventions

Ray diagrams give the picture; the **thin-lens equation** gives the numbers:

**1/sᵢ + 1/sₒ = 1/f**

sₒ and sᵢ are the distances of the object and image from the midline of the lens. Use this sign convention:

| Quantity | Positive (+) | Negative (−) |
|---|---|---|
| f | converging lens | diverging lens |
| sₒ | real object (the usual case) | not needed in this course |
| sᵢ | real image, on the transmitted side | virtual image, on the incident side |

The **magnification** compares image size with object size. The course writes it with absolute-value bars on every part:

**|M| = |hᵢ/hₒ| = |sᵢ/sₒ|**

It is a size ratio, so it never carries a sign. |M| > 1 means enlarged, |M| < 1 reduced, |M| = 1 the same size. Decide the orientation from the type of image: for a single lens, a **real image is inverted** and a **virtual image is upright**. (Background only: some textbooks drop the bars and write M = −sᵢ/sₒ, so that a negative M signals an inverted image. That gives the same description, but in this course quote |M| and state the orientation in words.)

## How the image depends on the object position

For a converging lens with object distance sₒ:

| Object position | sᵢ | Image |
|---|---|---|
| Very far away | just beyond f | real, inverted, tiny (this is how you find f quickly) |
| Beyond 2f (e.g. 3f) | between f and 2f (1.5f) | real, inverted, reduced (|M| = 0.5) |
| At 2f | 2f | real, inverted, same size |
| Between f and 2f (e.g. 1.5f) | beyond 2f (3f) | real, inverted, enlarged (|M| = 2) |
| At f | no image: rays leave parallel | — |
| Inside f (e.g. 0.5f) | negative (−f) | virtual, upright, enlarged (|M| = 2) |

For a diverging lens, a real object **always** gives a virtual, upright, reduced image between the lens and the near focal point. At sₒ = |f| the image is |f|/2 from the lens with |M| = 0.5; for a very distant object the image approaches F and shrinks.

Figure 3 sketches sᵢ against sₒ for a converging lens. As the object moves in from far away towards F, the real image moves out from F towards infinity and grows. Inside F the image is virtual (sᵢ < 0).

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="sisa-title sisa-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sisa-title">Sketch of image distance against object distance for a converging lens</title>
<desc id="sisa-desc">Horizontal axis: object distance s-o in multiples of f, from 0 to 5. Vertical axis: image distance s-i in multiples of f, from minus 4 to 5. For s-o less than f the curve starts at the origin and falls steeply negative as s-o approaches f, showing virtual images. For s-o greater than f the curve comes down from very large positive values near s-o equals f, passes through the point (2f, 2f), and levels off towards s-i equals f for large s-o. Dashed lines mark the asymptotes s-o equals f and s-i equals f.</desc>
<defs><marker id="sa-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="200" x2="545" y2="200" stroke="#1d2b44" stroke-width="2" marker-end="url(#sa-arr)"/>
<line x1="80" y1="330" x2="80" y2="35" stroke="#1d2b44" stroke-width="2" marker-end="url(#sa-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="170" y1="200" x2="170" y2="206" stroke="#1d2b44"/><text x="178" y="218">f</text>
<line x1="260" y1="200" x2="260" y2="206" stroke="#1d2b44"/><text x="260" y="218">2f</text>
<line x1="350" y1="200" x2="350" y2="206" stroke="#1d2b44"/><text x="350" y="218">3f</text>
<line x1="440" y1="200" x2="440" y2="206" stroke="#1d2b44"/><text x="440" y="218">4f</text>
<text x="500" y="230" font-size="13">sₒ</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="140" x2="80" y2="140" stroke="#1d2b44"/><text x="70" y="144">2f</text>
<line x1="74" y1="80" x2="80" y2="80" stroke="#1d2b44"/><text x="70" y="84">4f</text>
<line x1="74" y1="260" x2="80" y2="260" stroke="#1d2b44"/><text x="70" y="264">−2f</text>
<line x1="74" y1="320" x2="80" y2="320" stroke="#1d2b44"/><text x="70" y="324">−4f</text>
</g>
<text x="30" y="200" font-size="13" fill="#1d2b44" text-anchor="middle">sᵢ</text>
<line x1="170" y1="40" x2="170" y2="330" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="80" y1="170" x2="540" y2="170" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<polyline points="80.0,200.0 98.0,207.5 116.0,220.0 125.0,230.0 134.0,245.0 143.0,270.0 147.5,290.0 152.0,320.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="192.5,50.0 200.0,79.9 215.0,110.0 237.5,130.0 260.0,140.0 305.0,150.0 350.0,155.0 440.0,160.0 530.0,162.5" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="260" cy="140" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="268" y="132">(2f, 2f): |M| = 1</text>
<text x="200" y="300">virtual images (sᵢ &lt; 0)</text>
<text x="330" y="100">real images (sᵢ &gt; 0)</text>
<text x="450" y="185">sᵢ → f</text>
</g>
</svg>
<figcaption>Figure 3. Qualitative sketch of sᵢ against sₒ for a converging lens (thick curves). Dashed lines are the asymptotes sₒ = f and sᵢ = f. Real images (above the axis) need sₒ > f; inside f the image is virtual (below the axis).</figcaption>
</figure>

## Worked example 1: a real, enlarged image

**Question.** A small toy 1.5 cm tall stands 18.0 cm in front of a converging lens of focal length 12.0 cm. Find the image position, the magnification and the image height, and describe the image.

1. Thin-lens equation: 1/sᵢ = 1/f − 1/sₒ = 1/12.0 − 1/18.0 = (3 − 2)/36.0 = 1/36.0 cm⁻¹.
2. sᵢ = **+36.0 cm**. Positive, so the image is real and on the far side of the lens.
3. Magnification: |M| = |sᵢ/sₒ| = 36.0/18.0 = **2.0**.
4. Image height: hᵢ = |M| hₒ = 2.0 × 1.5 cm = **3.0 cm**. The image is real (sᵢ > 0), so with a single lens it is inverted.

**Answer.** A real, inverted image, twice the size of the toy (3.0 cm tall), 36.0 cm from the lens on the far side. A screen placed there would show it.

**Check.** The object is between f and 2f (12 to 24 cm), so the table predicts an enlarged, inverted, real image beyond 2f. 36 cm is beyond 2f = 24 cm. A ray diagram drawn to scale agrees.

## Worked example 2: a magnifying glass

**Question.** A beetle 0.40 cm long is 5.0 cm from a converging lens with f = 8.0 cm. Find the image position and size, and describe the image.

1. 1/sᵢ = 1/8.0 − 1/5.0 = 0.125 − 0.200 = −0.075 cm⁻¹.
2. sᵢ = −13.3 cm. Negative, so the image is **virtual**, on the same side as the beetle, 13.3 cm from the lens.
3. |M| = |sᵢ/sₒ| = 13.3/5.0 = **2.7** (2.67).
4. hᵢ = 2.67 × 0.40 cm = **1.1 cm**. The image is virtual, so it is upright.

**Interpretation.** The object is inside f, so the refracted rays diverge. Your eye traces them back to a larger, upright image behind the beetle. This is how a magnifying glass works. Move the beetle out to 7.0 cm (closer to F) and the image jumps to sᵢ = −56 cm with |M| = 8: the closer the object gets to F, the larger and more distant the virtual image.

## Worked example 3: finding f from data

**Question.** A student moves a lamp (the object) to different distances from a converging lens and moves a screen until the image is sharp. Invented results:

| sₒ (cm) | 20 | 25 | 30 | 40 | 60 |
|---|---|---|---|---|---|
| sᵢ (cm) | 61.5 | 37.0 | 30.5 | 23.8 | 20.2 |
| 1/sₒ (cm⁻¹) | 0.0500 | 0.0400 | 0.0333 | 0.0250 | 0.0167 |
| 1/sᵢ (cm⁻¹) | 0.0163 | 0.0270 | 0.0328 | 0.0420 | 0.0495 |

Find the focal length using a graph.

1. Rearrange the thin-lens equation into straight-line form: 1/sᵢ = −(1/sₒ) + 1/f. So plot **1/sᵢ (vertical) against 1/sₒ (horizontal)**.
2. Prediction: a straight line with slope −1, and both intercepts equal to 1/f.
3. The best-fit line through these points has slope −1.00 and vertical intercept 0.0665 cm⁻¹. The horizontal intercept is also about 0.0665 cm⁻¹.
4. f = 1 / 0.0665 cm⁻¹ = **15.0 cm**.

**Interpretation.** A slope close to −1 confirms the data follow the thin-lens equation. Each single row gives f between 14.9 cm and 15.1 cm; the graph uses all rows at once and shows any point that does not fit. The main uncertainty is judging where the image is sharpest. Note that every sₒ in the table is larger than f: at or inside f there is no image on the screen.

## Lenses at work

- **Camera or eye**: a distant object is beyond 2f, so a real, inverted, reduced image forms on the sensor or retina. The eye changes the shape of its lens: for a near object the lens becomes thicker, giving a shorter f, so the image still lands on the retina at a fixed sᵢ.
- **Projector**: the object sits just outside f, giving a real, inverted, enlarged image on a distant screen (so slides go in upside down).
- **Magnifier**: the object is inside f, giving a virtual, upright, enlarged image.

## Common misconceptions

- **"Covering half the lens cuts off half the image."** Each point of the lens gets light from every object point. The full image forms, just dimmer.
- **"You need a screen for an image to exist."** A real image forms whether or not a screen is there. A virtual image cannot be put on a screen but can be seen through the lens.
- **"The focal length changes when the object moves."** f is a property of the lens and its surroundings. sᵢ changes, f does not.
- **Mixing signs.** A diverging lens has f < 0. Forgetting this gives a real image that cannot exist.
- **"The central ray bends like the others."** In the thin-lens model it passes straight through the centre.
- **"A diverging lens can project an image."** With a real object, it only forms virtual images.
- **Adding instead of subtracting.** 1/sᵢ = 1/f − 1/sₒ, not 1/f + 1/sₒ.

## Where this leads

Geometric optics treats light as rays. Unit 14 treats light as a wave, starting with [Topic 14.1, Properties of Wave Pulses and Waves](/advanced-course-resources/physics-2/14-1-properties-wave-pulses-waves-study-guide/). Before that, test yourself with the [practice questions](/advanced-course-resources/physics-2/13-4-images-formed-lenses-practice/), then use the [revision notes](/advanced-course-resources/physics-2/13-4-images-formed-lenses-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/13-4-images-formed-lenses-checklist/). For the refraction behind every lens, look back at [Topic 13.3](/advanced-course-resources/physics-2/13-3-refraction-study-guide/).
