---
resourceId: "mb-ap-phys2-15.4-study-guide"
title: "Blackbody Radiation: Study Guide (Physics 2 15.4)"
description: "Why every warm object glows: the blackbody model, the shape of its spectrum, Planck's quantum idea, Wien's law for peak wavelength and the Stefan–Boltzmann law for power."
course: "physics-2"
unit: 15
topics: ["15.4"]
resourceType: "study-guide"
prerequisites:
  - "Temperature and internal energy (Topics 9.1 and 9.4)"
  - "The electromagnetic spectrum and c = fλ (Topic 14.4)"
  - "Photon energy E = hf (Topic 15.1)"
prerequisiteResources: ["mb-ap-phys2-15.3-study-guide"]
learningObjectives:
  - "Explain that matter turns some of its internal energy into electromagnetic radiation, and describe the blackbody model"
  - "Sketch and interpret graphs of intensity per unit wavelength against wavelength for blackbodies at different temperatures"
  - "Explain why classical physics could not describe the blackbody spectrum and how Planck's quantum assumption fixed it"
  - "Use Wien's law to link peak wavelength and temperature"
  - "Use the Stefan–Boltzmann law to find and compare the power radiated by blackbodies"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "Wien's constant b = 2.898 × 10⁻³ m·K; Stefan–Boltzmann constant σ = 5.67 × 10⁻⁸ W/(m²·K⁴). Temperatures in kelvin. Keep unrounded values until the final step"
related: ["mb-ap-phys2-15.4-revision-notes", "mb-ap-phys2-15.4-practice", "mb-ap-phys2-15.4-checklist"]
next: "mb-ap-phys2-15.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "All matter turns some internal energy into electromagnetic radiation. A blackbody is an ideal absorber, and in equilibrium it must emit as well."
  - "A blackbody gives a continuous spectrum whose shape depends only on its temperature."
  - "Hotter means more radiation at every wavelength, and a peak at a shorter wavelength: λ_max = b/T (Wien's law)."
  - "Total power P = σAT⁴ (Stefan–Boltzmann law). Doubling the kelvin temperature multiplies the power by 16."
  - "Classical physics predicted far too much short-wavelength radiation. Planck fixed this by assuming light energy is quantized."
faqs:
  - question: "Is a blackbody black?"
    answer: "Only when it is cool. \"Black\" means it absorbs all the radiation that falls on it, so it reflects nothing. A hot blackbody glows brightly. Stars, including the Sun, are good approximations to blackbodies."
  - question: "Do I need to learn Planck's law itself?"
    answer: "No. You need to know that Planck's law describes the blackbody curve and that it depends on the assumption that light energy comes in quanta. You calculate with Wien's law and the Stefan–Boltzmann law."
  - question: "Can I use Celsius in these formulas?"
    answer: "No. Both laws use absolute temperature in kelvin. Add 273 to a Celsius temperature first."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## Everything glows

Put your hand near a hot stove plate and you feel energy arriving even though you do not touch it. That energy travels as electromagnetic radiation. In fact **all matter** above absolute zero does this: it spontaneously turns some of its internal (thermal) energy into electromagnetic energy.

Why? The particles in matter contain charges, and thermal motion makes those charges jiggle. Accelerating charges emit electromagnetic waves (Topic 14.4). The hotter the object, the more vigorous the motion and the more energy is radiated.

Most everyday objects are too cool for you to see this glow. Your skin, at around 300 K, radiates mainly in the infrared, near 10 µm. That is what a thermal camera detects. A stove plate at a few hundred °C also radiates mainly infrared. Only above about 800 K or so does an object emit enough visible light to glow a dull red.

## The blackbody model

A **blackbody** is an idealized object that **absorbs all** the electromagnetic radiation that falls on it, at every wavelength. Nothing is reflected and nothing passes through.

Now think about energy. Suppose a blackbody sits at a constant temperature. It is absorbing energy all the time. If its temperature is not rising, it must be losing energy at the same rate, so it **must emit**. A perfect absorber is therefore also a perfect emitter.

No real object is a perfect blackbody, but some come close:

- a small hole in the wall of a hollow, heated box (radiation that enters the hole bounces around inside and is almost all absorbed);
- stars, including the Sun, whose surface layers absorb almost everything that falls on them;
- dull, dark, rough surfaces, for many wavelengths.

The model matters because the radiation a blackbody emits depends **only on its temperature**, not on what it is made of. That makes it a clean test case for physics.

## The blackbody spectrum

A blackbody gives a **continuous** spectrum: every wavelength is present, with no lines. We describe it with a graph of **intensity per unit wavelength** (how much power is emitted per unit area in a narrow band of wavelength) against **wavelength**. Figure 1 shows three temperatures.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="bb-title bb-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="bb-title">Blackbody spectra at 4000 K, 5000 K and 6000 K</title>
<desc id="bb-desc">Intensity per unit wavelength on the vertical axis, in relative units, against wavelength from 0 to 2500 nanometres on the horizontal axis. A band from 400 to 700 nanometres is shaded and labelled visible. Three single-peaked curves start at zero at short wavelength, rise steeply to a peak and fall slowly with a long tail. The solid 6000 kelvin curve is tallest, peaking at about 483 nanometres. The dashed 5000 kelvin curve peaks at about 580 nanometres at about 40 percent of that height. The dotted 4000 kelvin curve peaks at about 725 nanometres at about 13 percent of that height. The hotter curve is higher at every wavelength and its peak is further left.</desc>
<defs><marker id="bb-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="150.4" y="50" width="52.8" height="290" fill="#fdf6e3"/>
<text x="176.8" y="46" font-size="12" fill="#1d2b44" text-anchor="middle">visible</text>
<line x1="80" y1="340" x2="535" y2="340" stroke="#1d2b44" stroke-width="2" marker-end="url(#bb-arr)"/>
<line x1="80" y1="340" x2="80" y2="45" stroke="#1d2b44" stroke-width="2" marker-end="url(#bb-arr)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="168" y1="340" x2="168" y2="346" stroke="#1d2b44"/><text x="168" y="360">500</text>
<line x1="256" y1="340" x2="256" y2="346" stroke="#1d2b44"/><text x="256" y="360">1000</text>
<line x1="344" y1="340" x2="344" y2="346" stroke="#1d2b44"/><text x="344" y="360">1500</text>
<line x1="432" y1="340" x2="432" y2="346" stroke="#1d2b44"/><text x="432" y="360">2000</text>
<line x1="520" y1="340" x2="520" y2="346" stroke="#1d2b44"/><text x="520" y="360">2500</text>
<text x="80" y="360">0</text>
<text x="300" y="385" font-size="13">Wavelength λ (nm)</text>
</g>
<text x="30" y="200" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 30 200)">Intensity per unit wavelength</text>
<polyline points="80.0,340.0 106.4,338.5 115.2,321.1 124.0,271.9 132.8,204.7 141.6,143.8 150.4,102.8 159.2,83.2 168.0,80.8 176.8,89.9 185.6,105.9 194.4,125.3 203.2,145.6 212.0,165.5 220.8,184.2 229.6,201.3 238.4,216.8 247.2,230.6 256.0,242.8 264.8,253.6 273.6,263.1 282.4,271.4 291.2,278.8 300.0,285.2 308.8,290.9 317.6,295.8 326.4,300.2 335.2,304.1 344.0,307.6 352.8,310.6 361.6,313.3 370.4,315.8 379.2,317.9 388.0,319.8 396.8,321.6 405.6,323.1 414.4,324.5 423.2,325.8 432.0,326.9 440.8,327.9 449.6,328.8 458.4,329.7 467.2,330.5 476.0,331.1 484.8,331.8 493.6,332.4 502.4,332.9 511.2,333.4 520.0,333.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="80.0,340.0 106.4,339.9 115.2,338.3 124.0,330.0 132.8,312.6 141.6,290.2 150.4,268.6 159.2,251.8 168.0,241.1 176.8,236.2 185.6,235.8 194.4,238.7 203.2,243.6 212.0,249.7 220.8,256.4 229.6,263.2 238.4,269.9 247.2,276.2 256.0,282.0 264.8,287.5 273.6,292.4 282.4,296.9 291.2,300.9 300.0,304.6 308.8,307.9 317.6,310.8 326.4,313.5 335.2,315.8 344.0,318.0 352.8,319.9 361.6,321.6 370.4,323.2 379.2,324.6 388.0,325.8 396.8,327.0 405.6,328.0 414.4,328.9 423.2,329.8 432.0,330.6 440.8,331.3 449.6,331.9 458.4,332.5 467.2,333.0 476.0,333.5 484.8,333.9 493.6,334.4 502.4,334.7 511.2,335.1 520.0,335.4" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 4"/>
<polyline points="80.0,340.0 106.4,340.0 115.2,340.0 124.0,339.4 132.8,337.5 141.6,333.6 150.4,328.2 159.2,322.2 168.0,316.6 176.8,312.0 185.6,308.8 194.4,306.8 203.2,305.9 212.0,305.9 220.8,306.5 229.6,307.7 238.4,309.2 247.2,310.8 256.0,312.6 264.8,314.4 273.6,316.2 282.4,317.9 291.2,319.5 300.0,321.0 308.8,322.4 317.6,323.8 326.4,325.0 335.2,326.2 344.0,327.2 352.8,328.2 361.6,329.1 370.4,329.9 379.2,330.6 388.0,331.3 396.8,331.9 405.6,332.5 414.4,333.0 423.2,333.5 432.0,334.0 440.8,334.4 449.6,334.8 458.4,335.1 467.2,335.4 476.0,335.7 484.8,336.0 493.6,336.3 502.4,336.5 511.2,336.7 520.0,336.9" fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 3"/>
<g fill="#1d2b44">
<circle cx="165.0" cy="80.0" r="4"/><circle cx="182.0" cy="235.5" r="4"/><circle cx="207.5" cy="305.8" r="4"/>
</g>
<g stroke="#1d2b44">
<line x1="320" y1="86" x2="360" y2="86" stroke-width="2.5"/>
<line x1="320" y1="110" x2="360" y2="110" stroke-width="2" stroke-dasharray="8 4"/>
<line x1="320" y1="134" x2="360" y2="134" stroke-width="2" stroke-dasharray="2 3"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="368" y="90">6000 K, peak 483 nm</text>
<text x="368" y="114">5000 K, peak 580 nm</text>
<text x="368" y="138">4000 K, peak 725 nm</text>
</g>
</svg>
<figcaption>Figure 1. Blackbody spectra at 6000 K (solid), 5000 K (dashed) and 4000 K (dotted), drawn to scale from Planck's law. Dots mark the peaks. The shaded band is visible light (400–700 nm). The area under each curve is proportional to the total power per unit area.</figcaption>
</figure>

Learn these features, because you may be asked to sketch them:

1. **Shape.** Each curve starts near zero at very short wavelengths, rises steeply to a single peak, then falls away slowly with a long tail at long wavelengths.
2. **Higher everywhere.** A hotter blackbody emits **more at every wavelength**. The curves never cross.
3. **Peak moves left.** The hotter the body, the **shorter** the peak wavelength.
4. **Area grows fast.** The area under a curve is the total power per unit area. It rises steeply with temperature (as T⁴, below).

This explains the colours of hot objects. A piece of iron heated in a flame first glows dull red, because only the short-wavelength tail of its curve reaches the red end of the visible band. As it gets hotter, more of the visible band is covered, and it looks orange, then yellow-white. Stars work the same way: cooler stars look reddish, hotter stars look bluish-white.

The Sun's surface is close to a blackbody at about 5800 K, with its peak near 500 nm, in the middle of the visible band. The Sun still looks white rather than green, because its curve is broad and it emits strongly across the whole visible range.

## Why classical physics failed

Physicists in the late 1800s tried to predict the blackbody curve using classical physics: waves in the hot cavity, sharing the thermal energy equally. The result matched the experiments well at long wavelengths. But at short wavelengths the classical prediction **kept rising without limit**. It said that a hot object should pour out huge amounts of ultraviolet radiation, and that the total power should be infinite. That is obviously wrong. The failure was later nicknamed the "ultraviolet catastrophe".

In 1900 Max Planck found a formula, now called **Planck's law**, that fits the measured curve at all wavelengths. To get it, he had to assume that the energy of light of frequency f is emitted in **whole-number packets**, each of energy E = hf. In other words, light energy is **quantized**.

Here is why the assumption fixes the short-wavelength end. Short wavelength means high frequency, so each packet is large. The thermal energy available to an atom is limited, so producing even one large packet becomes very unlikely. Emission at short wavelengths is cut off, and the curve comes back down to zero. This was one of the first pieces of evidence for quantum theory (Topic 15.1). You do not need to use Planck's formula; you need to know what it assumes and why it was needed.

## Wien's law: the peak wavelength

The peak wavelength λ_max is inversely proportional to the absolute temperature:

**λ_max = b/T**, with **b = 2.898 × 10⁻³ m·K** (Wien's constant)

- Double T and λ_max halves.
- Measure λ_max and you can find T. This is how astronomers estimate the surface temperatures of stars without visiting them.
- Units: m·K ÷ K = m. Always use kelvin.

Check with the Sun: λ_max = 2.898 × 10⁻³ m·K ÷ 5800 K = 5.00 × 10⁻⁷ m = 500 nm. For skin at 300 K: λ_max = 9.66 × 10⁻⁶ m, about 10 µm (infrared).

## The Stefan–Boltzmann law: total power

The **total power** emitted by a blackbody, over all wavelengths, is

**P = σAT⁴**, with **σ = 5.67 × 10⁻⁸ W/(m²·K⁴)**

where A is the surface area of the body and T its absolute temperature.

- P is proportional to **area**: twice the surface, twice the power.
- P is proportional to **T⁴**: this is a very steep rise. Double T and P becomes 2⁴ = **16** times larger. Increase T by 10% and P rises by 1.1⁴ ≈ 1.46, about 46%.
- For a sphere of radius r, A = 4πr².

This is the power **emitted**. An object also absorbs radiation from its surroundings, so its net loss is less than σAT⁴ if the surroundings are warm. Questions in this topic focus on the emitted power.

## Worked example 1: comparing two stars

**Question.** Two invented stars are modelled as blackbodies. Star P has its peak intensity at 414 nm. Star Q has its peak at 966 nm. (a) Find the surface temperature of each star. (b) Find the ratio of the power emitted per square metre of surface, P to Q. (c) The two stars emit the same total power. Which is larger, and by what factor is its radius larger?

1. **(a) Wien's law for P.** T_P = b/λ_max = (2.898 × 10⁻³ m·K) ÷ (414 × 10⁻⁹ m) = **7000 K**.
2. **Wien's law for Q.** T_Q = (2.898 × 10⁻³ m·K) ÷ (966 × 10⁻⁹ m) = **3000 K**.
3. **(b) Power per unit area** is P/A = σT⁴. The ratio is (T_P/T_Q)⁴ = (7000/3000)⁴ = (2.333…)⁴ = **29.6**. Each square metre of star P emits about 30 times as much as each square metre of star Q. (Values: 1.36 × 10⁸ W/m² and 4.59 × 10⁶ W/m².)
4. **(c) Equal total power.** σ(4πR_P²)T_P⁴ = σ(4πR_Q²)T_Q⁴, so R_Q²/R_P² = (T_P/T_Q)⁴ and R_Q/R_P = (T_P/T_Q)² = (7000/3000)² = **5.44**.

**Interpretation.** Star Q is cooler, so each square metre is much dimmer. To emit the same total power it must have a much bigger surface: its radius is about 5.4 times that of star P. Star Q peaks in the infrared and would look reddish; star P peaks in the violet end and would look bluish-white.

## Worked example 2: a hot metal sphere

**Question.** A small metal sphere of radius 2.0 cm is heated to 1200 K. Model it as a blackbody. (a) Find the power it radiates. (b) Find its peak wavelength and explain why it glows only a dull red. (c) To what temperature must it be raised to double the power it radiates?

1. **Area.** A = 4πr² = 4π(0.020 m)² = 5.03 × 10⁻³ m².
2. **(a) Power.** P = σAT⁴ = (5.67 × 10⁻⁸ W/(m²·K⁴))(5.027 × 10⁻³ m²)(1200 K)⁴. Here (1200)⁴ = 2.07 × 10¹² K⁴, so P = **591 W**.
3. **(b) Peak wavelength.** λ_max = (2.898 × 10⁻³ m·K) ÷ 1200 K = 2.415 × 10⁻⁶ m = **2.42 µm**, in the infrared. Most of the radiation is invisible. Only the short-wavelength tail of the curve reaches the red end of the visible band (about 700 nm), so we see a dim red glow.
4. **(c) Double the power.** P ∝ T⁴, so we need T_new⁴ = 2T⁴, giving T_new = 2^(1/4) × 1200 K = 1.189 × 1200 K = **1430 K** (1427 K).

**Check and interpretation.** A 19% rise in temperature doubles the power, which shows how steep the T⁴ law is. A common error is to double the temperature to 2400 K. That would multiply the power by 16, not 2. Also check units: W/(m²·K⁴) × m² × K⁴ = W.

## Common misconceptions

- **"A blackbody is black."** It is an ideal absorber. A hot blackbody glows; the Sun is a good example.
- **"A hot object emits only at its peak wavelength."** The spectrum is continuous. The peak is just where the emission per unit wavelength is greatest.
- **"A hotter object emits less at long wavelengths because its peak moved left."** No: the hotter curve is higher at **every** wavelength.
- **"Doubling the temperature doubles the power."** P ∝ T⁴, so it multiplies the power by 16.
- **"λ_max is proportional to T."** It is **inversely** proportional: hotter means shorter peak wavelength.
- **Using °C.** Both laws need kelvin. 27 °C is 300 K, not 27 K.
- **"A star that peaks in green looks green."** The curve is broad, so a star peaking near the middle of the visible band looks white.
- **"Planck just improved the measurements."** The classical theory failed in principle. Planck had to assume that light energy is quantized.

## Where this leads

Planck's packets of energy, E = hf, come back in Topic 15.5, where Einstein used them to explain the photoelectric effect. See the [photoelectric effect study guide](/advanced-course-resources/physics-2/15-5-photoelectric-effect-study-guide/). Compare blackbody spectra with the line spectra of single atoms in the [emission and absorption spectra guide](/advanced-course-resources/physics-2/15-3-emission-absorption-spectra-study-guide/). For this topic, try the [practice questions](/advanced-course-resources/physics-2/15-4-blackbody-radiation-practice/), then use the [revision notes](/advanced-course-resources/physics-2/15-4-blackbody-radiation-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/15-4-blackbody-radiation-checklist/) to consolidate.
