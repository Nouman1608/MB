---
resourceId: "mb-ap-phys2-13.1-study-guide"
title: "Reflection: Study Guide (Physics 2 13.1)"
description: "Model light as rays perpendicular to wavefronts, apply the law of reflection with angles measured from the normal, and explain specular and diffuse reflection."
course: "physics-2"
unit: 13
topics: ["13.1"]
resourceType: "study-guide"
prerequisites:
  - "Waves transfer energy in their direction of travel; the idea of a wavefront"
  - "Angles in triangles and on straight lines; basic trigonometry (tan)"
prerequisiteResources: ["mb-ap-phys2-12.4-study-guide"]
learningObjectives:
  - "Explain what a light ray represents and how it relates to the wavefronts of a light wave"
  - "Say when the ray model works and when the wave nature of light must be used instead"
  - "Draw ray diagrams that show the path of light before and after it meets a surface"
  - "Apply the law of reflection, measuring both angles from the normal"
  - "Explain the difference between specular and diffuse reflection in terms of the normal to the surface"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "Set the calculator to degrees. Angles are given to the nearest degree; keep unrounded values until the final step"
related: ["mb-ap-phys2-13.1-revision-notes", "mb-ap-phys2-13.1-practice", "mb-ap-phys2-13.1-checklist"]
next: "mb-ap-phys2-13.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "A light ray is a straight line, perpendicular to the wavefronts, that points the way the wave travels."
  - "The ray model works when the wave nature of light can be ignored. It cannot explain interference or diffraction."
  - "Law of reflection: θᵢ = θᵣ, with both angles measured from the normal, not from the surface."
  - "Smooth surface: the normal points the same way everywhere, so parallel rays stay parallel (specular reflection)."
  - "Rough surface: the normal changes from point to point, so parallel rays scatter in many directions (diffuse reflection)."
faqs:
  - question: "Does the law of reflection still hold for a rough surface?"
    answer: "Yes. At each tiny patch, the angle of incidence equals the angle of reflection. The light scatters because the normal points in a different direction at each patch, not because the law fails."
  - question: "Why measure angles from the normal instead of from the surface?"
    answer: "The normal is defined the same way for flat and curved surfaces, and the same convention is used for refraction in Topic 13.3. An angle measured from the surface is 90° minus the angle from the normal."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Light as a ray

Unit 13 models light with **rays** instead of waves.

Picture a light wave spreading out. A **wavefront** is a surface joining points of the wave that are in step, for example all the crests at one instant. A **light ray** is a straight line drawn **perpendicular to the wavefronts**, pointing in the direction the wave travels. A ray is a drawing of where the light energy goes, not a physical object.

- Far from a source, or in a narrow beam, the wavefronts are flat (plane wavefronts). The rays are parallel straight lines.
- Close to a small source, the wavefronts are spheres (circles in a drawing). The rays point straight outward from the source, like spokes of a wheel.

<figure>
<svg viewBox="0 0 560 310" role="img" aria-labelledby="ray-wf-title ray-wf-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13" fill="#1d2b44">
<title id="ray-wf-title">Rays drawn perpendicular to wavefronts</title>
<desc id="ray-wf-desc">Left: five parallel vertical wavefronts crossed at right angles by three parallel rays pointing right. Right: a point source with three concentric circular wavefronts and eight rays pointing straight outward, each crossing the circles at right angles.</desc>
<defs><marker id="rw-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"><path d="M60,40L60,260M100,40L100,260M140,40L140,260M180,40L180,260M220,40L220,260"/></g>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#rw-arr)">
<path d="M35,80L250,80"/><path d="M35,150L250,150"/><path d="M35,220L250,220"/>
</g>
<text x="140" y="290" text-anchor="middle">Plane wavefronts, parallel rays</text>
<g fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4">
<circle cx="420" cy="150" r="35"/><circle cx="420" cy="150" r="70"/><circle cx="420" cy="150" r="105"/>
</g>
<g stroke="#1d2b44" stroke-width="2.5" marker-end="url(#rw-arr)">
<path d="M430,150L550,150"/><path d="M427.1,142.9L511.9,58.1"/><path d="M420,140L420,20"/><path d="M412.9,142.9L328.1,58.1"/><path d="M410,150L290,150"/><path d="M412.9,157.1L328.1,241.9"/><path d="M420,160L420,280"/><path d="M427.1,157.1L511.9,241.9"/>
</g>
<circle cx="420" cy="150" r="5" fill="#1d2b44"/>
<text x="420" y="302" text-anchor="middle">Point source: circular wavefronts, rays outward</text>
</svg>
<figcaption>Figure 1. Dashed lines and circles are wavefronts; solid arrows are rays. In both panels every ray crosses every wavefront at a right angle and points the way the wave moves.</figcaption>
</figure>

### When the ray model works, and when it fails

Rays are the right tool in **geometric optics**, where mirrors and lenses are much larger than the wavelength, so the wave nature of light can be ignored.

Rays are **not enough** to explain how light spreads out after passing through a narrow gap, or the bright and dark fringes made when two beams overlap. Those effects are **diffraction** and **interference**, and they need the wave model. You will meet them in Unit 14.

A **laser** is a convenient source for optics experiments. It gives a single narrow beam of light of one colour (monochromatic) in which the waves stay in step (coherent). Over the distances on a lab bench, a laser beam behaves like a single ray. Its wave behaviour also returns in Unit 14.

### Ray diagrams

A **ray diagram** shows the path of light before and after it meets matter: a mirror, a glass block, a lens. Good habits:

- Draw rays with a ruler and put an arrow on each one to show the direction of travel.
- Draw the **normal** as a dashed line at 90° to the surface, at the point where the ray hits.
- Label angles from the normal.
- Use solid lines for real light paths. (Topic 13.2 adds dashed lines for paths light only *appears* to follow.)

## Reflection and the law of reflection

Light that meets a surface can bounce back: this is **reflection**. Most surfaces reflect some light, absorb some and may transmit some.

Three terms describe a single reflection:

- the **incident ray**, which arrives at the surface;
- the **reflected ray**, which leaves it;
- the **normal**, a line perpendicular to the surface at the point where the ray hits.

The **angle of incidence θᵢ** is the angle between the incident ray and the normal. The **angle of reflection θᵣ** is the angle between the reflected ray and the normal. The law of reflection says:

**θᵢ = θᵣ**

Two further facts go with it. The incident ray, the normal and the reflected ray all lie in the same plane. And the incident and reflected rays are on opposite sides of the normal.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="law-ref-title law-ref-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13" fill="#1d2b44">
<title id="law-ref-title">Law of reflection at a plane mirror</title>
<desc id="law-ref-desc">A horizontal plane mirror with hatching underneath. A dashed vertical normal rises from the point where a ray hits the mirror. The incident ray comes from the upper left and makes 40 degrees with the normal; the reflected ray leaves to the upper right, also at 40 degrees to the normal. Arcs mark both angles, labelled theta i and theta r. The angle between the incident ray and the mirror surface is marked as 50 degrees.</desc>
<defs><marker id="lr-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M70,250L490,250" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1"><path d="M90,250L78,264M130,250L118,264M170,250L158,264M210,250L198,264M250,250L238,264M290,250L278,264M330,250L318,264M370,250L358,264M410,250L398,264M450,250L438,264M490,250L478,264"/></g>
<path d="M280,250L280,60" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<text x="280" y="50" text-anchor="middle">normal</text>
<path d="M157.9,104.5L280,250" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#lr-arr)"/>
<path d="M280,250L402.1,104.5" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#lr-arr)"/>
<path d="M280 190 A60 60 0 0 0 241.4 204" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<path d="M280 190 A60 60 0 0 1 318.6 204" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="250" y="182" font-size="14" text-anchor="middle">θᵢ</text>
<text x="310" y="182" font-size="14" text-anchor="middle">θᵣ</text>
<path d="M220 250 A60 60 0 0 1 241.4 204" fill="none" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<text x="196" y="240" font-size="12" text-anchor="middle">50°</text>
<text x="140" y="95" text-anchor="middle">incident ray</text>
<text x="420" y="95" text-anchor="middle">reflected ray</text>
<text x="280" y="290" text-anchor="middle">plane mirror (θᵢ = θᵣ = 40°)</text>
</svg>
<figcaption>Figure 2. Both angles are measured from the dashed normal: θᵢ = θᵣ = 40°. The ray makes 50° with the mirror surface, which is not the angle of incidence.</figcaption>
</figure>

Two useful results come straight from the law.

- **Reversibility.** If you send a ray back along the reflected path, it leaves along the original incident path. Light paths can be reversed.
- **Turning a mirror.** If the incident ray stays fixed and the mirror turns through an angle φ, the normal also turns through φ. The angle of incidence changes by φ, and so does the angle of reflection, so the reflected ray turns through **2φ**. Worked example 1 uses this.

## Specular and diffuse reflection

The law of reflection holds at every point of every surface. What differs between a mirror and a sheet of paper is the **direction of the normal** across the area the light hits.

- **Specular reflection** happens at a smooth surface such as a mirror, still water or polished metal. Over the area the light strikes, the normal points in almost the same direction everywhere. A set of parallel incident rays all have the same angle of incidence, so they leave as parallel reflected rays. You see a clear image of the source.
- **Diffuse reflection** happens at a rough surface such as paper, cloth, painted walls or a dry road. At a small scale the surface is full of tiny patches tilted different ways. The normal changes from patch to patch, so parallel incident rays have different angles of incidence and leave in many directions.

<figure>
<svg viewBox="0 0 560 270" role="img" aria-labelledby="spec-diff-title spec-diff-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13" fill="#1d2b44">
<title id="spec-diff-title">Specular reflection from a smooth surface and diffuse reflection from a rough surface</title>
<desc id="spec-diff-desc">Left: three parallel rays hit a flat surface and leave as three parallel reflected rays. Right: the same three rays hit a rough surface of three tilted patches, each with its own dashed normal, and leave in three different directions: almost straight up, at 45 degrees up and right, and almost along the surface.</desc>
<defs><marker id="sd-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M20,200L260,200" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#sd-arr)">
<path d="M26.9,109.9L90,200"/><path d="M76.9,109.9L140,200"/><path d="M126.9,109.9L190,200"/>
<path d="M90,200L153.1,109.9"/><path d="M140,200L203.1,109.9"/><path d="M190,200L253.1,109.9"/>
</g>
<text x="140" y="235" text-anchor="middle">Smooth surface: specular</text>
<text x="140" y="253" font-size="12" text-anchor="middle">one normal direction, rays stay parallel</text>
<polyline points="310,200 346.5,208.6 393.5,191.4 395.1,197.8 444.9,202.2 446.5,191.4 493.5,208.6 540,200" fill="none" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="4 3"><path d="M370,200L356.3,162.4M420,200L423.5,160.2M470,200L483.7,162.4"/></g>
<g stroke="#1d2b44" stroke-width="2" marker-end="url(#sd-arr)">
<path d="M306.9,109.9L370,200"/><path d="M356.9,109.9L420,200"/><path d="M406.9,109.9L470,200"/>
<path d="M370,200L364.8,140.2"/><path d="M420,200L476.6,143.4"/><path d="M470,200L542.4,180.6"/>
</g>
<text x="425" y="235" text-anchor="middle">Rough surface: diffuse</text>
<text x="425" y="253" font-size="12" text-anchor="middle">normal varies, rays scatter</text>
</svg>
<figcaption>Figure 3. The incident rays are identical in both panels. On the rough surface each tilted patch has its own normal (short dashed lines), so the angles of incidence are 15°, 40° and 55°, and the reflected rays spread out. The law of reflection holds at every patch.</figcaption>
</figure>

Diffuse reflection is why you can see most objects at all. A page of a book reflects light from the lamp in all directions, so light from every part of the page reaches your eye wherever you sit. A perfect mirror sends the lamp's light in one direction only. You do not see the mirror's surface; you see the lamp's reflection, and only from certain positions.

## Worked example 1: angles, and turning a mirror

**Question.** A laser beam strikes a plane mirror. The beam makes an angle of 28° with the mirror surface.
(a) Find the angle of incidence and the angle of reflection.
(b) Find the angle between the incident and reflected beams.
(c) The mirror is turned through 8.0°, about the point where the beam strikes it, so that the angle of incidence becomes smaller. The laser does not move. The reflected beam originally hit a wall 2.50 m from the mirror, meeting the wall at right angles. How far does the spot on the wall move?

1. **(a)** The normal is at 90° to the surface. The beam is 28° from the surface, so it is 90° − 28° = **62°** from the normal. θᵢ = 62°, and by the law of reflection θᵣ = **62°**.
2. **(b)** The two beams are on opposite sides of the normal, so the angle between them is θᵢ + θᵣ = 62° + 62° = **124°**. (The beam's direction of travel changes by 180° − 124° = 56°, which is twice the 28° angle with the surface.)
3. **(c)** Turning the mirror by 8.0° turns the normal by 8.0°. The new angle of incidence is 62° − 8° = 54°, so θᵣ = 54°, and the angle between the beams is now 108°. The reflected beam has turned through 124° − 108° = **16°**, which is 2 × 8.0°.
4. The original reflected beam met the wall at right angles, 2.50 m away. After turning by 16°, the spot moves along the wall by 2.50 m × tan 16° = 0.7169 m.

**Answer.** θᵢ = θᵣ = 62°; the beams are 124° apart; the spot moves about **0.717 m** (0.72 m to 2 significant figures).

**Check and interpretation.** The beam turns twice as far as the mirror, and a distant wall turns that into a large, easily measured shift. This "optical lever" is used to detect tiny rotations.

## Worked example 2: a ray between two mirrors

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="two-mir-title two-mir-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" font-size="13" fill="#1d2b44">
<title id="two-mir-title">A ray reflecting from two plane mirrors that meet at 75 degrees</title>
<desc id="two-mir-desc">Mirror 1 is horizontal along the bottom. Mirror 2 rises from the left end of mirror 1 at 75 degrees to it. An incident ray arrives from the upper right, hits mirror 1 with a 30 degree angle of incidence, reflects up and to the left, hits mirror 2 with a 45 degree angle of incidence and leaves up and to the right. Dashed normals are drawn at both points where the ray hits. The angle between the mirrors, 75 degrees, is marked at the corner.</desc>
<defs><marker id="tm-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<path d="M90,330L545,330" stroke="#1d2b44" stroke-width="3"/>
<path d="M90,330L171.5,25.7" stroke="#1d2b44" stroke-width="3"/>
<path d="M140 330 A50 50 0 0 0 102.9 281.7" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<text x="140" y="300">75°</text>
<path d="M300,330L300,239" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<path d="M156.6,81.6L244.5,105.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<path d="M391,172.4L300,330" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tm-arr)"/>
<path d="M300,330L156.6,81.6" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tm-arr)"/>
<path d="M156.6,81.6L265.7,18.6" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#tm-arr)"/>
<text x="318" y="262">30°</text>
<text x="270" y="262">30°</text>
<text x="205" y="80">45°</text>
<text x="196" y="122">45°</text>
<text x="470" y="350">mirror 1</text>
<text x="70" y="120">mirror 2</text>
<text x="400" y="165">incident ray</text>
<text x="272" y="22">final ray</text>
</svg>
<figcaption>Figure 4. Dashed lines are normals. The ray meets mirror 1 at 30° to the normal and mirror 2 at 45° to the normal. The final ray makes 150° with the original direction of travel.</figcaption>
</figure>

**Question.** Two plane mirrors meet at an angle of 75° (Figure 4). A ray strikes mirror 1 with an angle of incidence of 30° and then reflects onto mirror 2. Find the angle of incidence at mirror 2, and the angle between the direction of the incident ray and the direction of the final ray.

1. At mirror 1, θᵣ = θᵢ = 30°. So the reflected ray makes 90° − 30° = 60° with the surface of mirror 1.
2. The ray, mirror 1 and mirror 2 form a triangle. Its angles are 75° (at the corner) and 60° (between mirror 1 and the ray). The third angle, between the ray and mirror 2, is 180° − 75° − 60° = 45°.
3. The ray makes 45° with the surface of mirror 2, so its angle of incidence there is 90° − 45° = **45°**. It reflects at 45° to the normal.
4. Direction change. Each reflection turns the direction of travel by 180° − 2θᵢ. At mirror 1 this is 180° − 60° = 120°; at mirror 2 it is 180° − 90° = 90°. The two turns are in the same rotational sense, so the total turn is 210°. A turn of 210° one way leaves the ray pointing 360° − 210° = **150°** away from where it started.

**Answer.** θᵢ at mirror 2 = 45°; the final ray makes 150° with the original direction.

**Check.** 150° is exactly twice the 75° angle between the mirrors. Try any other starting angle that still reaches mirror 2 and you get the same 150°. For two mirrors at 90°, this gives 180°: the ray comes back the way it came, parallel to its original path. That is the principle of a corner reflector, and Practice Question 7 asks you to show it.

## Common misconceptions

- **Measuring the angle from the surface.** θᵢ and θᵣ are measured from the **normal**. If a question gives the angle with the surface, subtract it from 90° first.
- **"The reflected ray turns by the same angle as the mirror."** It turns by **twice** the angle, because both θᵢ and θᵣ change.
- **"Rough surfaces break the law of reflection."** Every tiny patch obeys θᵢ = θᵣ. Light scatters because the normals point different ways.
- **"A ray is a thin beam of light."** A ray is a line in a model that shows the direction of energy flow, perpendicular to the wavefronts. A real beam always has some width.
- **"The ray model explains everything about light."** It cannot explain diffraction or interference; for those you need waves (Unit 14).
- **"We see an object because light leaves our eyes."** Light from a source reflects off the object (mostly diffusely) and enters your eye.
- **Drawing rays without arrows.** A ray diagram must show the direction of travel, or it cannot show which ray is incident and which is reflected.

## Where this leads

Topic 13.2 uses the law of reflection on curved mirrors to locate images: [Images Formed by Mirrors](/advanced-course-resources/physics-2/13-2-images-formed-mirrors-study-guide/). Topic 13.3 applies the same ray model and the same normal to light that bends as it enters a new material. Before moving on, try the [practice questions](/advanced-course-resources/physics-2/13-1-reflection-practice/), skim the [revision notes](/advanced-course-resources/physics-2/13-1-reflection-revision-notes/) and tick off the [topic checklist](/advanced-course-resources/physics-2/13-1-reflection-checklist/).
