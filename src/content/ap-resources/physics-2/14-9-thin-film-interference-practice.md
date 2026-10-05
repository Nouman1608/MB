---
resourceId: "mb-ap-phys2-14.9-practice"
title: "Thin-Film Interference: Practice Questions (Physics 2 14.9)"
description: "Seven original Marlbridge practice questions on reflection phase changes, wavelength in a film, soap and oil film colours and antireflection coatings, with full solutions."
course: "physics-2"
unit: 14
topics: ["14.9"]
resourceType: "practice-questions"
prerequisites:
  - "Counting reflection phase changes and using λ_film = λ/n"
prerequisiteResources: ["mb-ap-phys2-14.9-study-guide"]
learningObjectives:
  - "Decide which reflections have a 180° phase change"
  - "Find the wavelengths a film reflects strongly or weakly at normal incidence"
  - "Design and evaluate quarter-wave antireflection coatings"
  - "Use measured reflection minima to find the thickness of a film"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "n_air = 1.00. Visible light is 400–700 nm. All light is at normal incidence. Give answers to 3 significant figures unless the data justify fewer"
related: ["mb-ap-phys2-14.9-study-guide", "mb-ap-phys2-14.9-revision-notes", "mb-ap-phys2-14.9-checklist"]
next: "mb-ap-phys2-14.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Always count the reflection phase changes before choosing a condition."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Data and assumptions for every question: n_air = 1.00; visible light runs from 400 nm to 700 nm; all light strikes the film at **normal incidence**, so the extra path in a film of thickness t is 2t; λ without a label is the wavelength in air; λ_film = λ/n_film. A scientific calculator is assumed. Round only at the end.

## Question 1 (multiple choice · foundation)

Which of these reflections gives the reflected light a 180° phase change?

- (A) Light travelling in air reflects from the surface of a pond (n = 1.33).
- (B) Light travelling in glass (n = 1.52) reflects from a layer of water (n = 1.33).
- (C) Light travelling in water (n = 1.33) reflects from the water–air surface.
- (D) Light travelling in glass (n = 1.52) refracts out into air.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The light is in air (n = 1.00) and reflects from water, which has a **higher** index. Reflection from a higher index gives a 180° phase change.

- (B) The light reflects from a **lower** index (1.33 < 1.52), so there is no phase change.
- (C) Again the reflection is from a lower index (air), so there is no phase change.
- (D) This is refraction, not reflection. Refraction never changes the phase.
</details>

## Question 2 (multiple choice · foundation)

Light of wavelength 600 nm in air enters a plastic film with n = 1.50. What is its wavelength inside the film?

- (A) 400 nm
- (B) 900 nm
- (C) 600 nm
- (D) 200 nm

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The frequency does not change at the boundary, but the speed falls to c/n. From v = fλ, the wavelength falls by the same factor: λ_film = 600 nm ÷ 1.50 = 400 nm.

- (B) multiplies by n. Light is slower in the film, so its wavelength must be shorter, not longer.
- (C) assumes the wavelength is fixed. It is the frequency that stays fixed.
- (D) is λ/(2n). The 2 belongs with the path 2t, not with the wavelength in the film.
</details>

## Question 3 (multiple choice · core)

A coating with n = 1.25 is put on a glass screen (n = 1.52) to stop it reflecting 500 nm light. What is the smallest coating thickness that does this?

- (A) 100 nm
- (B) 200 nm
- (C) 125 nm
- (D) 82.2 nm

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Air → coating and coating → glass are both reflections into a higher index, so there are two phase changes and only the path matters. Destructive interference needs 2t = ½λ_coating, so t = λ/(4n_coating) = 500 nm ÷ (4 × 1.25) = 100 nm.

- (B) is λ/(2n), a half-wave thickness. Then 2t is one whole wavelength in the coating, and with two phase changes that is **constructive**: the screen would reflect more.
- (C) is λ/4 using the wavelength in air. The path is inside the coating, so the wavelength in the coating must be used.
- (D) uses the glass index, 1.52, instead of the coating index.
</details>

## Question 4 (multiple choice · core)

A soap film in a wire loop is held vertical in air. After a while the top of the film looks black in reflected white light, just before the film bursts. Which statement best explains the black region?

- (A) The film there is much thinner than the wavelength, and only one of the two reflections has a 180° phase change, so the reflections cancel for all colours.
- (B) The film there is much thinner than the wavelength, so almost no light reflects from either surface.
- (C) The film there is exactly half a wavelength thick for every colour, so the reflections cancel.
- (D) Both reflections have a 180° phase change, so they cancel for all colours.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Air → soap is a reflection into a higher index (180°); soap → air is into a lower index (0°). With t much smaller than λ, the path difference 2t is almost zero. The only difference between the waves is the single half-cycle shift, so they cancel for every wavelength.

- (B) Each surface still reflects light. It is interference, not a lack of reflection, that makes the film dark.
- (C) No single thickness is half a wavelength for all colours, because the colours have different wavelengths.
- (D) The soap → air reflection has no phase change. And two phase changes with zero path difference would give **constructive** interference.
</details>

## Question 5 (calculation · core)

A thin layer of oil (n = 1.48) floats on water (n = 1.33). The oil is 420 nm thick. White light shines straight down on it. (a) How many of the two reflections have a 180° phase change? (b) Which visible wavelength is reflected most strongly? (c) Which visible wavelengths are reflected most weakly?

<details>
<summary>Worked solution</summary>

1. (a) Air → oil: into a higher index, 180°. Oil → water: into a lower index (1.33 < 1.48), no change. **One** phase change.
2. With one phase change, bright needs 2n t = (m + ½)λ and dark needs 2n t = mλ. Here 2n t = 2 × 1.48 × 420 nm = 1243.2 nm.
3. (b) Bright: λ = 1243.2 nm ÷ (m + ½). m = 0: 2486 nm; m = 1: 828.8 nm; m = 2: **497 nm**; m = 3: 355.2 nm. Only 497 nm is visible.
4. (c) Dark: λ = 1243.2 nm ÷ m. m = 1: 1243 nm; m = 2: **622 nm**; m = 3: **414 nm**. Both 622 nm and 414 nm are visible.

Suggested mark points (3): 1 for one phase change with a reason for each surface; 1 for 497 nm as the only visible bright wavelength; 1 for both 622 nm and 414 nm as dark wavelengths. Accept the equivalent method that compares 2t = 840 nm with multiples of λ_oil = λ/1.48.

Common error: treating the oil → water reflection as a phase change because "water is denser". The rule depends on the index of refraction, and water's index is lower than the oil's.
</details>

## Question 6 (constructed response · core)

Two identical glass lenses (n = 1.50) are coated for light of wavelength 560 nm. Lens X has a coating with n = 1.38. Lens Y has a coating with n = 1.70. Each coating is a quarter of the 560 nm wavelength **in that coating** thick.

(a) Draw a labelled diagram for lens X showing the incident ray, the ray reflected from the top of the coating and the ray reflected from the coating–glass surface. Label each reflection with its phase change.
(b) Calculate the thickness of each coating.
(c) Compare how strongly lenses X and Y reflect 560 nm light. Justify your answer.
(d) A student claims: "Any coating that is a quarter of a wavelength thick reduces reflection." Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three layers: air (1.00), coating (1.38), glass (1.50). The incident ray hits the top of the coating. Ray 1 reflects from the top surface, labelled "180° (air → higher n)". The rest refracts into the coating, reflects from the coating–glass surface, labelled "180° (1.38 → 1.50, higher n)", and leaves as ray 2, parallel to ray 1. (The rays may be drawn slightly slanted so they can be told apart.)

**(b)** t = λ/(4n). Lens X: 560 nm ÷ (4 × 1.38) = **101 nm** (101.4 nm). Lens Y: 560 nm ÷ (4 × 1.70) = **82.4 nm**.

**(c)** In both coatings the extra path is 2t = ½λ_coating, a half-cycle shift.
- Lens X has **two** phase changes, which cancel each other. The net shift is the half cycle from the path: **destructive**, so reflection is reduced.
- Lens Y: air → coating is 180°, but coating (1.70) → glass (1.50) is into a lower index, so 0°. **One** phase change plus the half cycle from the path gives a whole cycle: **constructive**, so reflection is increased.

Lens Y reflects 560 nm light much more strongly than lens X.

**(d)** The claim is wrong. A quarter-wave thickness only reduces reflection if the number of phase changes is zero or two, which for a coating on glass in air means n_air < n_coating < n_glass. Lens Y meets the thickness condition but not the index condition, so its reflections add.

| Point | What earns it |
|---|---|
| 1 | Diagram with three labelled layers and two reflected rays leaving the top surface |
| 1 | Both reflections in X labelled as 180° phase changes, with the index comparison |
| 1 | Correct thicknesses: about 101 nm and 82.4 nm |
| 1 | X: two phase changes plus the half-wave path, so destructive |
| 1 | Y: only one phase change (1.70 → 1.50 has none), so constructive; Y reflects more |
| 1 | Rejects the claim, stating that the coating index must lie between the indices of air and glass |

Accept reasoning that compares 2n t with λ directly (2n t = 280 nm = ½ × 560 nm for both lenses). Do not award the last point for "it depends" without saying on what.
</details>

## Question 7 (constructed response · stretch)

A transparent film with n = 1.35 coats a glass plate (n = 1.52). White light shines straight down on it. A spectrometer shows that in the visible range the reflected light has minima at exactly two wavelengths, 450 nm and 630 nm, with no other minimum between them.

(a) How many 180° phase changes occur? State the condition for a reflection minimum.
(b) Show that the two minima are consistent with consecutive values of m, and find the thickness of the film.
(c) Predict the visible wavelength that is reflected most strongly.
(d) The film is slowly worn thinner. Does the 630 nm minimum move to a longer or a shorter wavelength? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Air → film (1.00 → 1.35) and film → glass (1.35 → 1.52) are both into a higher index: **two** phase changes, which cancel. A minimum needs **2n t = (m + ½)λ**.

**(b)** The longer wavelength has the smaller m. Put 630 nm at order m and 450 nm at order m + 1:

(m + ½)(630 nm) = (m + 3/2)(450 nm), so 630m + 315 = 450m + 675, so 180m = 360 and **m = 2**.

m is a whole number, so the two minima fit consecutive orders (m = 2 and m = 3). Then 2n t = 2.5 × 630 nm = 1575 nm (check: 3.5 × 450 nm = 1575 nm). So t = 1575 nm ÷ (2 × 1.35) = **583 nm** (583.3 nm).

**(c)** With two phase changes, a maximum needs 2n t = mλ, so λ = 1575 nm ÷ m. m = 2: 787.5 nm (infrared); m = 3: **525 nm**; m = 4: 393.8 nm (just below the visible range). The strongest visible reflection is at **525 nm**.

**(d)** For a fixed order, λ = 2n t ÷ (m + ½), which is proportional to t. As t decreases, the minimum moves to a **shorter** wavelength. For example, at t = 570 nm the m = 2 minimum is at 2 × 1.35 × 570 nm ÷ 2.5 = 616 nm.

| Point | What earns it |
|---|---|
| 1 | Two phase changes, with an index comparison at each surface |
| 1 | Correct minimum condition 2n t = (m + ½)λ |
| 1 | Sets up equal 2n t for consecutive orders and gets m = 2 (or shows 1575 nm from both wavelengths) |
| 1 | t = 583 nm |
| 1 | Maximum condition 2n t = mλ applied, giving 525 nm as the only visible maximum |
| 1 | Shorter wavelength, because λ is proportional to t at a fixed order |

Accept the method that writes 2n t = 2.5 × 630 nm directly after testing small m values. Carry forward an incorrect thickness from (b) into (c) once.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "Phase changes on reflection" in the [study guide](/advanced-course-resources/physics-2/14-9-thin-film-interference-study-guide/). Compare the indices on both sides of each reflection.
- **Q2 wrong:** revisit "The wavelength inside the film". The frequency is fixed; the wavelength shrinks.
- **Q3 or Q6 wrong:** work through Worked example 2 again, including part (c).
- **Q5 or Q7 incomplete:** redo Worked example 1, listing several values of m before you choose.

Then tick off the [topic checklist](/advanced-course-resources/physics-2/14-9-thin-film-interference-checklist/).
