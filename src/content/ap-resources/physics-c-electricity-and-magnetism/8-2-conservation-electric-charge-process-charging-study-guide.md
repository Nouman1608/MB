---
resourceId: "mb-ap-physcem-8.2-study-guide"
title: "Conservation of Charge and Charging: Study Guide (Physics C: E&M 8.2)"
description: "Guide to conservation of electric charge: charging by friction, contact and induction, polarization of neutral objects, grounding and electron bookkeeping."
course: "physics-c-electricity-and-magnetism"
unit: 8
topics: ["8.2"]
resourceType: "study-guide"
prerequisites:
  - "Charge is positive or negative, and the elementary charge e is the smallest free charge (Topic 8.1)"
  - "Coulomb's law: like charges repel, unlike charges attract, and the force falls as 1/r² (Topic 8.1)"
  - "The difference between conductors and insulators (Topic 8.1)"
prerequisiteResources: ["mb-ap-physcem-8.1-study-guide"]
learningObjectives:
  - "Use conservation of charge to predict the net charge of a system before and after charging"
  - "Explain charging by friction and by contact as a transfer of electrons between systems"
  - "Describe induced charge separation (polarization) in conductors and insulators, including neutral objects"
  - "Explain grounding and use it to describe charging by induction step by step"
  - "Count the electrons transferred in a charging process and check that the total charge is unchanged"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "foundation"
calculator: "scientific"
calculatorNote: "e = 1.60 × 10⁻¹⁹ C; electron mass 9.11 × 10⁻³¹ kg; 1/(4πε₀) = 8.99 × 10⁹ N·m²/C²; 1 nC = 10⁻⁹ C. Keep unrounded values until the final step"
related: ["mb-ap-physcem-8.2-revision-notes", "mb-ap-physcem-8.2-practice", "mb-ap-physcem-8.2-checklist"]
next: "mb-ap-physcem-8.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-electricity-and-magnetism", "clar-physics-c-electricity-and-magnetism", "page-physics-c-electricity-and-magnetism"]
keyPoints:
  - "Charge is conserved: a system's net charge changes only when charge crosses its boundary."
  - "In solids, charging almost always means moving electrons. Protons stay in their nuclei."
  - "Friction and contact move charge between objects; induction rearranges charge inside an object without touching it."
  - "A neutral object can be polarized, and a charged object always attracts a neutral one."
  - "Grounding connects an object to a huge, nearly neutral reservoir such as Earth, which can give or take electrons."
faqs:
  - question: "Does rubbing two objects together create charge?"
    answer: "No. Rubbing moves electrons from one object to the other. One object gains exactly the charge the other loses, so the total charge of the pair does not change."
  - question: "Is this topic also in Physics 2?"
    answer: "Yes. The algebra-based Physics 2 course has a topic with the same title (Topic 10.2). The ideas are the same; Physics C adds calculus later, in fields and Gauss's law."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course note.** This guide is for the calculus-based Physics C: Electricity and Magnetism course, Topic 8.2. This topic needs no calculus. It sets up the charge bookkeeping you will use in every later unit.

Constants used: **e = 1.60 × 10⁻¹⁹ C** (the elementary charge), electron mass 9.11 × 10⁻³¹ kg, and 1 nC = 10⁻⁹ C.

## Charge is conserved

Think of a **system**: any object or group of objects you choose to study, with a boundary around it. Everything outside the boundary is the surroundings.

The law of **conservation of charge** says:

- The net charge of a system stays the same unless charge crosses the boundary.
- If the net charge changes, the same amount of charge has gone to, or come from, the surroundings.

So charge is never created or destroyed in a charging process. It only moves. If one object gains −3.0 nC, something else must gain +3.0 nC.

**What moves?** In solids, the charges that move are almost always **electrons**. Protons are locked inside nuclei, which are held in place in the material. So:

- An object becomes **negative** when it **gains** electrons.
- An object becomes **positive** when it **loses** electrons. It does not gain protons.

(In liquids and gases, whole ions can also move. For the solid objects in this topic, think "electrons".)

**Charge comes in whole electrons.** Any net charge is a whole number of elementary charges: q = Ne. One nanocoulomb is 10⁻⁹ ÷ (1.60 × 10⁻¹⁹) ≈ 6.24 × 10⁹ electrons. Everyday charging moves billions of electrons, but their mass is tiny, so the mass of the object does not change measurably.

## Three ways to charge an object

| Method | What happens | Final charges |
|---|---|---|
| **Friction** (rubbing) | Close contact lets electrons move from one material to the other | Opposite signs, equal sizes |
| **Contact** (touching a charged object) | Electrons move between the objects while they touch | Same sign on both; total unchanged |
| **Induction** (charged object near, plus grounding) | The nearby charge pushes or pulls electrons inside the object; a ground path lets some leave or enter | Opposite sign to the inducing object |

**Friction.** When two different materials are rubbed together, electrons move from one surface to the other. Which material gains electrons depends on the pair of materials. In every case the two objects end with equal and opposite charges. If the rod and the cloth form your system, its net charge is zero before and after rubbing.

**Contact.** When a charged object touches another object, some charge moves across. For two **identical metal spheres**, symmetry means they must end with **equal** charges, so each gets half of the total:

q_each = (q₁ + q₂) / 2

Use this only for identical conductors. For different sizes, the charge is shared unequally; Topic 10.2 explains why, using electric potential.

**Induction.** A charged object can change the *distribution* of charge in another object without touching it. This is the idea of induced charge separation, below. On its own, induction does not change the net charge. To leave a net charge behind, you also need a path for electrons to enter or leave, such as a ground connection.

## Induced charge separation (polarization)

Bring a positively charged rod near a **neutral** object. The rod attracts electrons and repels positive charge. The charge inside the object rearranges. This is **polarization**, or induced charge separation. It happens even though the object is neutral.

- **In a conductor**, electrons are free to move through the whole object. They gather on the side nearer the positive rod. The far side is left with a shortage of electrons, so it is positive.
- **In an insulator**, electrons cannot travel through the material. Instead, each atom or molecule is distorted slightly: its electron cloud shifts towards the rod. The result is a thin layer of negative charge on the near surface and positive charge on the far surface.

In both cases the net charge is still zero. Only the distribution has changed.

**Why a neutral object is attracted.** The induced charge of opposite sign to the rod is **closer** to the rod than the induced charge of the same sign. Coulomb's force falls as 1/r², so the attraction on the near side is larger than the repulsion on the far side. The net force is towards the rod. This works whatever the sign of the rod, which is why a charged rod picks up small bits of paper. It also means **attraction alone does not prove an object is charged**. Repulsion does, because a neutral object is never repelled.

Polarization can also happen between two systems that are both charged: each one's charge pushes the other's charges around.

## Grounding

**Grounding** means connecting an object, usually with a conducting wire, to a very large and nearly neutral system. Earth is the usual example. Earth is so large that it can give or take a huge number of electrons with almost no effect on itself.

- Ground a charged conductor with nothing else nearby, and it loses its excess charge. A negative object sends electrons to Earth. A positive object receives electrons from Earth.
- Ground a conductor while a charged object is **nearby**, and the result is different. The nearby charge pushes electrons into or out of the conductor through the ground wire. The conductor can end up charged. This is **charging by induction**.

Conservation of charge still holds. If the sphere loses electrons to Earth, Earth gains exactly that charge. Choose a system that includes Earth and its net charge does not change.

<figure>
<svg viewBox="0 0 560 300" role="img" aria-labelledby="ind-title ind-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ind-title">Charging a metal sphere by induction in four stages</title>
<desc id="ind-desc">Four panels from left to right. Panel 1: a negatively charged rod, marked with minus signs, is held above a neutral metal sphere. Three plus signs sit on the top of the sphere, nearest the rod, and three minus signs on the bottom. Panel 2: a wire joins the bottom of the sphere to a ground symbol. An arrow labelled e minus points down the wire, showing electrons leaving to Earth. Three plus signs remain at the top and the bottom has no minus signs. Panel 3: the wire is broken, so the ground is disconnected, while the rod is still above. Three plus signs remain at the top. Panel 4: the rod has been removed. Three plus signs are now spread evenly around the sphere, which has a net positive charge.</desc>
<defs><marker id="ind-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 4"><line x1="140" y1="40" x2="140" y2="290"/><line x1="280" y1="40" x2="280" y2="290"/><line x1="420" y1="40" x2="420" y2="290"/></g>
<g font-size="13" fill="#1d2b44" text-anchor="middle" font-weight="600"><text x="70" y="26">1</text><text x="210" y="26">2</text><text x="350" y="26">3</text><text x="490" y="26">4</text></g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2"><rect x="25" y="52" width="90" height="18" rx="6"/><rect x="165" y="52" width="90" height="18" rx="6"/><rect x="305" y="52" width="90" height="18" rx="6"/></g>
<g font-size="15" fill="#1d2b44" text-anchor="middle"><text x="70" y="66">− − − −</text><text x="210" y="66">− − − −</text><text x="350" y="66">− − − −</text></g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2.5"><circle cx="70" cy="150" r="36"/><circle cx="210" cy="150" r="36"/><circle cx="350" cy="150" r="36"/><circle cx="490" cy="150" r="36"/></g>
<g font-size="15" fill="#1d2b44" text-anchor="middle">
<text x="70" y="136">+ + +</text><text x="70" y="176">− − −</text>
<text x="210" y="136">+ + +</text>
<text x="350" y="136">+ + +</text>
<text x="490" y="132">+</text><text x="466" y="160">+</text><text x="514" y="160">+</text>
</g>
<g stroke="#1d2b44" stroke-width="2">
<line x1="210" y1="186" x2="210" y2="228"/>
<line x1="350" y1="186" x2="350" y2="200"/><line x1="350" y1="214" x2="350" y2="228"/>
<line x1="195" y1="228" x2="225" y2="228"/><line x1="200" y1="234" x2="220" y2="234"/><line x1="205" y1="240" x2="215" y2="240"/>
<line x1="335" y1="228" x2="365" y2="228"/><line x1="340" y1="234" x2="360" y2="234"/><line x1="345" y1="240" x2="355" y2="240"/>
</g>
<line x1="226" y1="190" x2="226" y2="222" stroke="#1d2b44" stroke-width="2" marker-end="url(#ind-arr)"/>
<text x="232" y="210" font-size="12" fill="#1d2b44">e⁻</text>
<text x="358" y="211" font-size="11" fill="#1d2b44">open</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="265">Rod brought near:</text><text x="70" y="281">sphere polarized</text>
<text x="210" y="265">Ground connected:</text><text x="210" y="281">electrons leave</text>
<text x="350" y="265">Ground removed,</text><text x="350" y="281">rod still near</text>
<text x="490" y="265">Rod removed:</text><text x="490" y="281">net charge positive</text>
</g>
</svg>
<figcaption>Figure 1. Charging a metal sphere (on an insulating stand) by induction with a negative rod. Each + or − symbol stands for the same small amount of charge, so you can count it: the sphere has net zero in panel 1 and net +3 units in panels 2 to 4. The rod never touches the sphere, and the rod's own charge does not change.</figcaption>
</figure>

## Worked example 1: sharing charge by contact

**Question.** Two identical small metal spheres, P and Q, sit on insulating stands. P carries +6.0 nC and Q carries −2.0 nC. They are touched together and then separated.
(a) Find the final charge on each sphere.
(b) Which way did electrons move, and how many moved?
(c) Q is then touched to an identical neutral sphere R. Find the charges on P, Q and R.

**(a) Conservation first.** Take P and Q as the system. Its total charge is (+6.0) + (−2.0) = +4.0 nC. No charge leaves the system, because the stands are insulators. The spheres are identical, so by symmetry they share the total equally: **+2.0 nC each**.

**(b) Follow the change.** P went from +6.0 nC to +2.0 nC, a change of −4.0 nC. A negative change means P **gained electrons**. Q went from −2.0 nC to +2.0 nC, a change of +4.0 nC, so Q **lost electrons**. Electrons moved from Q to P. The number is

N = |Δq| / e = (4.0 × 10⁻⁹ C) ÷ (1.60 × 10⁻¹⁹ C) = **2.5 × 10¹⁰ electrons**.

Their total mass is (2.5 × 10¹⁰)(9.11 × 10⁻³¹ kg) ≈ 2.3 × 10⁻²⁰ kg, far too small to measure.

**(c)** Q (+2.0 nC) and R (0) share +2.0 nC, so Q and R each end with **+1.0 nC**. P keeps **+2.0 nC**.

**Check.** The total of P, Q and R is 2.0 + 1.0 + 1.0 = +4.0 nC, the same as the starting total. The changes on P and Q are equal and opposite (−4.0 nC and +4.0 nC). No positive charge moved: P "lost positive charge" only in the sense that it gained electrons.

## Worked example 2: charging by induction, step by step

**Question.** A plastic rod is rubbed with a cloth and gains a charge of −4.8 nC. It is then used to charge a neutral metal sphere on an insulating stand by induction, as in Figure 1.
(a) What is the charge on the cloth, and how many electrons moved during rubbing?
(b) Explain each stage of Figure 1 and state the final sign of the sphere's charge.
(c) In the process, 2.4 × 10¹⁰ electrons pass through the ground wire. Find the sphere's final charge.
(d) What would happen if the rod were removed **before** the ground wire?

**(a)** Rod plus cloth is a system with zero net charge before rubbing. Nothing else gains charge, so the cloth carries **+4.8 nC**. The rod gained N = (4.8 × 10⁻⁹) ÷ (1.60 × 10⁻¹⁹) = **3.0 × 10¹⁰ electrons** from the cloth.

**(b)**

1. **Rod near.** The negative rod repels the sphere's free electrons to the far side. The near side is left positive. The sphere is polarized, but its net charge is still zero.
2. **Ground connected.** Electrons are still repelled by the rod, and the wire gives them a path to Earth. Some flow out of the sphere into the ground.
3. **Ground removed, rod still near.** The sphere has now lost electrons, and the broken wire stops them coming back. The sphere's net charge is positive.
4. **Rod removed.** The positive charge spreads over the sphere's surface. The final charge is **positive**, opposite in sign to the rod.

**(c)** The sphere lost 2.4 × 10¹⁰ electrons, so q = +Ne = (2.4 × 10¹⁰)(1.60 × 10⁻¹⁹ C) = 3.84 × 10⁻⁹ C ≈ **+3.8 nC**. Earth gained −3.8 nC. The system "sphere + Earth" has the same net charge as before.

**(d)** If the rod is taken away while the ground is still connected, nothing pushes electrons away any more. Electrons flow back from Earth until the sphere is neutral. The sphere ends with **no net charge**. The order matters: break the ground path first, then remove the rod.

**Interpretation.** The rod's charge stays −4.8 nC throughout, because it never touches the sphere. Induction gives the sphere a charge of the opposite sign to the rod; contact would give the same sign.

## Common misconceptions

- **"Rubbing creates charge."** Rubbing only moves electrons. The two objects end with equal and opposite charges.
- **"A positive object has gained protons."** In solids it has *lost electrons*. Protons stay in the nuclei.
- **"A neutral object has no charges in it."** It has equal amounts of positive and negative charge. It can still be polarized.
- **"A neutral object feels no force from a charged rod."** Polarization puts the opposite charge closer, so there is a net attraction.
- **"Attraction proves the object is charged."** A neutral object is also attracted. Only repulsion is a reliable test for charge.
- **"Grounding always makes an object neutral."** Only if no charged object is nearby. With a charged object nearby, grounding is how you charge by induction.
- **"Charging by induction gives the same sign as the rod."** Induction gives the opposite sign; contact gives the same sign.
- **"Touching spheres always share equally."** Only identical conductors share equally. Insulators also keep their charge near the place where it was put.
- **"Charge can be any size."** Net charge is always a whole number of elementary charges, q = Ne.

## Where this leads

Next you will describe how a charge changes the space around it, using the electric field, in [Topic 8.3, Electric Fields](/advanced-course-resources/physics-c-electricity-and-magnetism/8-3-electric-fields-study-guide/). Conservation of charge returns in conductors (Topics 10.1 and 10.2) and in Kirchhoff's junction rule for circuits (Topic 11.7). Polarization returns with dielectrics in capacitors (Topic 10.4). If you need to revisit Coulomb's law first, see [Topic 8.1](/advanced-course-resources/physics-c-electricity-and-magnetism/8-1-electric-charge-electric-force-study-guide/).

Practise now with the [practice questions](/advanced-course-resources/physics-c-electricity-and-magnetism/8-2-conservation-electric-charge-process-charging-practice/), then use the [revision notes](/advanced-course-resources/physics-c-electricity-and-magnetism/8-2-conservation-electric-charge-process-charging-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-c-electricity-and-magnetism/8-2-conservation-electric-charge-process-charging-checklist/).
