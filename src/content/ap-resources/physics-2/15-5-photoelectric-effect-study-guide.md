---
resourceId: "mb-ap-phys2-15.5-study-guide"
title: "The Photoelectric Effect: Study Guide (Physics 2 15.5)"
description: "Why light ejects electrons from a metal only above a threshold frequency, the equation K_max = hf − φ, stopping potential experiments and graphs of K_max against frequency."
course: "physics-2"
unit: 15
topics: ["15.5"]
resourceType: "study-guide"
prerequisites:
  - "Photon energy E = hf and c = fλ (Topics 14.4 and 15.1)"
  - "Electric potential difference and the energy change qΔV of a charge (Topics 10.5 and 10.7)"
  - "Energy levels and binding energy in atoms (Topic 15.3)"
prerequisiteResources: ["mb-ap-phys2-15.4-study-guide"]
learningObjectives:
  - "Describe the photoelectric effect and the role of the threshold frequency"
  - "Explain why the energy of the emitted electrons depends on the frequency of the light, not on the number of photons"
  - "Use K_max = hf − φ to find maximum kinetic energy, work function, threshold frequency or threshold wavelength"
  - "Describe a stopping-potential experiment and use eV_s = K_max"
  - "Plot K_max or stopping potential against frequency and read Planck's constant and the work function from the graph"
  - "Predict how the number and energy of emitted electrons change when the intensity or frequency of the light changes"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "scientific"
calculatorNote: "h = 6.63 × 10⁻³⁴ J·s = 4.14 × 10⁻¹⁵ eV·s, c = 3.00 × 10⁸ m/s, hc = 1.24 × 10³ eV·nm, 1 eV = 1.60 × 10⁻¹⁹ J. Keep unrounded values until the final step"
related: ["mb-ap-phys2-15.5-revision-notes", "mb-ap-phys2-15.5-practice", "mb-ap-phys2-15.5-checklist"]
next: "mb-ap-phys2-15.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The photoelectric effect is the emission of electrons from a material when electromagnetic radiation falls on it."
  - "Electrons are emitted only if the light's frequency is at or above the threshold frequency f₀ = φ/h, however many photons arrive."
  - "One photon gives all its energy to one electron, so K_max = hf − φ, where φ is the work function of the material."
  - "Brighter light of the same frequency ejects more electrons per second but does not raise K_max."
  - "A graph of K_max against f is a straight line: the slope is h, the horizontal intercept is f₀ and the vertical intercept is −φ."
faqs:
  - question: "Do I need to learn the work functions of different metals?"
    answer: "No. Questions give you the work function when you need it. You are not expected to know values, or the properties of a material that set the size of its work function."
  - question: "Why is it 'maximum' kinetic energy?"
    answer: "Each photon gives the same energy hf, but electrons start in different places and some lose energy before they escape. The work function is the least energy needed to free an electron, so hf − φ is the most kinetic energy any emitted electron can have."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

## What the photoelectric effect is

Shine ultraviolet light on a clean zinc plate and electrons leave the surface. This is the **photoelectric effect**: electrons are emitted when electromagnetic radiation falls on a **photoactive** material, usually a metal. The emitted electrons are often called photoelectrons, but they are ordinary electrons.

Electrons in a metal are held in the material. To pull one out, something must give it energy. The **work function φ** of a material is the minimum energy needed to remove an electron from it. Different materials have different work functions. On the exam you will be given the work function; you do not need to know values or what makes them large or small.

The puzzle is not that light can free electrons. A wave carries energy, so a wave model expects that. The puzzle is the **pattern** of the results.

## What the experiments show

Experiments with a fixed metal and light of one frequency at a time (monochromatic light) show four things:

1. **There is a threshold frequency f₀.** Below f₀, no electrons are emitted, however bright the light is and however long you wait.
2. **At or above f₀, electrons are emitted even when the light is very dim.** Fewer photons just means fewer electrons per second.
3. **The maximum kinetic energy K_max of the electrons depends on the frequency**, and rises in a straight line as f rises.
4. **K_max does not depend on the intensity.** Brighter light of the same frequency gives a larger current (more electrons per second), but each electron has no more energy than before.

A classical wave model predicts the opposite of points 1, 2 and 4. In that model the energy of a wave depends on its amplitude (its brightness), not its frequency. Bright light of any colour should eventually shake electrons loose, and brighter light should give faster electrons. That does not happen.

## The photon explanation

In 1905 Einstein explained the results by treating light as a stream of **photons**, each carrying energy

**E = hf = hc/λ**

where h is Planck's constant. The key idea is that the energy arrives in packets, and **one photon interacts with one electron**. The electron either takes all of the photon's energy or none of it.

Use energy conservation for that one interaction:

energy given by the photon = energy needed to escape + kinetic energy left over

For the electrons that need the least energy to escape, the energy needed is exactly φ. They leave with the most kinetic energy:

**K_max = hf − φ**

Now each observation has a reason:

- **Threshold.** If hf < φ, one photon cannot free even the most loosely held electron. An electron cannot save up energy from several photons, so more photons do not help. Emission starts when hf = φ, so the **threshold frequency** is **f₀ = φ/h**. The matching **threshold wavelength** is λ₀ = hc/φ. Light with a wavelength *longer* than λ₀ cannot eject electrons.
- **Dim light still works.** Above f₀, every photon that is absorbed by a suitable electron can free it. Fewer photons means fewer electrons, not none.
- **K_max depends on f.** Higher frequency means more energy per photon, so more is left over after paying φ.
- **K_max does not depend on intensity.** Intensity, at a fixed frequency, sets the **number** of photons per second. It does not change the energy of each photon. More photons per second gives more electrons per second, so the current goes up, while K_max stays the same.

Because the energy of each emitted electron is set by the frequency and not by the number of photons, the photoelectric effect is strong evidence that light is made of discrete, quantized energy packets.

### Working in electron volts

Photon energies are tiny in joules, so it is easier to use the **electron volt**: 1 eV = 1.60 × 10⁻¹⁹ J, the energy one electron gains when it moves through a potential difference of 1 V. Two useful forms of the constants:

- h = 4.14 × 10⁻¹⁵ eV·s
- hc = 1.24 × 10³ eV·nm, so E (in eV) = 1240 ÷ λ (in nm)

For example, a 500 nm photon has E = 1240 ÷ 500 = 2.48 eV, or about 3.98 × 10⁻¹⁹ J.

## Measuring K_max: the stopping potential

You cannot see an electron's speed directly. Instead you measure the energy it can climb against. Figure 1 shows the usual set-up.

<figure>
<svg viewBox="0 0 560 330" role="img" aria-labelledby="pe-app-title pe-app-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pe-app-title">Apparatus for measuring the stopping potential</title>
<desc id="pe-app-desc">An evacuated glass tube contains two metal plates. Monochromatic light enters from the upper left and falls on the left plate, the emitter. Electrons travel from the emitter towards the right plate, the collector. Wires from the two plates run down to an external circuit containing an ammeter and a variable source of potential difference. The source is connected so that the collector is at a lower potential than the emitter, which slows the electrons.</desc>
<defs><marker id="pe-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="120" y="40" width="320" height="150" rx="60" fill="#fdf6e3" stroke="#1d2b44" stroke-width="2"/>
<text x="280" y="60" font-size="12" fill="#1d2b44" text-anchor="middle">vacuum</text>
<rect x="170" y="75" width="12" height="90" fill="#1d2b44"/>
<rect x="378" y="75" width="12" height="90" fill="#1d2b44"/>
<text x="176" y="182" font-size="12" fill="#1d2b44" text-anchor="middle">emitter</text>
<text x="384" y="182" font-size="12" fill="#1d2b44" text-anchor="middle">collector</text>
<g stroke="#1d2b44" stroke-width="2" stroke-dasharray="5 4" fill="none">
<path d="M40 30 L165 95" marker-end="url(#pe-arr)"/><path d="M40 60 L165 125" marker-end="url(#pe-arr)"/>
</g>
<text x="30" y="22" font-size="12" fill="#1d2b44">light, frequency f</text>
<g stroke="#1d2b44" stroke-width="1.8" fill="none">
<path d="M188 100 L330 100" marker-end="url(#pe-arr)"/><path d="M188 140 L300 140" marker-end="url(#pe-arr)"/>
</g>
<text x="260" y="125" font-size="12" fill="#1d2b44" text-anchor="middle">electrons (e⁻)</text>
<g stroke="#1d2b44" stroke-width="2" fill="none">
<path d="M176 165 V280 H250"/><path d="M384 165 V280 H330"/>
</g>
<circle cx="290" cy="280" r="18" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="290" y="285" font-size="14" font-weight="600" fill="#1d2b44" text-anchor="middle">A</text>
<path d="M250 280 H272" stroke="#1d2b44" stroke-width="2"/><path d="M308 280 H330" stroke="#1d2b44" stroke-width="2"/>
<rect x="150" y="230" width="52" height="24" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<path d="M150 254 L202 230" stroke="#1d2b44" stroke-width="1.5" marker-end="url(#pe-arr)"/>
<text x="96" y="236" font-size="12" fill="#1d2b44" text-anchor="middle">variable</text>
<text x="96" y="251" font-size="12" fill="#1d2b44" text-anchor="middle">source</text>
<text x="420" y="236" font-size="12" fill="#1d2b44">collector at</text>
<text x="420" y="251" font-size="12" fill="#1d2b44">lower potential</text>
<text x="290" y="318" font-size="12" fill="#1d2b44" text-anchor="middle">ammeter reads the current</text>
</svg>
<figcaption>Figure 1. Light falls on the emitter plate in a vacuum tube. The variable source makes the collector negative relative to the emitter, so emitted electrons must climb a potential difference to reach it. The ammeter (A) shows whether any electrons arrive.</figcaption>
</figure>

1. Two metal plates sit in a vacuum, so the electrons do not hit air molecules.
2. Monochromatic light falls on one plate, the emitter. Electrons leave it.
3. A variable source makes the other plate, the collector, negative relative to the emitter. An electron moving to the collector loses kinetic energy e × ΔV.
4. Increase the potential difference until the ammeter reads zero. Now even the fastest electrons just fail to arrive. This potential difference is the **stopping potential V_s**.

Energy conservation for the fastest electron:

**K_max = eV_s**

So a stopping potential of 0.66 V means K_max = 0.66 eV. This is one reason the electron volt is so convenient. The experiment also gives the work function: once you know f and V_s, φ = hf − eV_s.

## The K_max–frequency graph

K_max = hf − φ has the form y = mx + b with y = K_max and x = f. Figure 2 shows it for two metals.

<figure>
<svg viewBox="0 0 560 400" role="img" aria-labelledby="pe-graph-title pe-graph-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pe-graph-title">Maximum kinetic energy against frequency for two metals</title>
<desc id="pe-graph-desc">Maximum kinetic energy in electron volts on the vertical axis, from minus 5 to plus 3, against frequency in units of 10 to the 14 hertz on the horizontal axis, from 0 to 16. Two parallel straight lines. Line A, for a metal with work function 2.3 electron volts, crosses the frequency axis at about 5.6 times 10 to the 14 hertz. Line B, for a metal with work function 4.3 electron volts, crosses at about 10.4 times 10 to the 14 hertz. Each line is solid to the right of its intercept and dashed to the left, where it is extended back to meet the vertical axis at minus 2.3 and minus 4.3 electron volts.</desc>
<defs><marker id="pe-arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<line x1="80" y1="200" x2="535" y2="200" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr2)"/>
<line x1="80" y1="380" x2="80" y2="80" stroke="#1d2b44" stroke-width="2" marker-end="url(#pe-arr2)"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<line x1="190" y1="200" x2="190" y2="206" stroke="#1d2b44"/><text x="190" y="220">4</text>
<line x1="300" y1="200" x2="300" y2="206" stroke="#1d2b44"/><text x="300" y="220">8</text>
<line x1="410" y1="200" x2="410" y2="206" stroke="#1d2b44"/><text x="410" y="220">12</text>
<line x1="520" y1="200" x2="520" y2="206" stroke="#1d2b44"/><text x="520" y="220">16</text>
<text x="300" y="245" font-size="13">Frequency f (× 10¹⁴ Hz)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<line x1="74" y1="95" x2="80" y2="95" stroke="#1d2b44"/><text x="70" y="99">3</text>
<line x1="74" y1="130" x2="80" y2="130" stroke="#1d2b44"/><text x="70" y="134">2</text>
<line x1="74" y1="165" x2="80" y2="165" stroke="#1d2b44"/><text x="70" y="169">1</text>
<text x="70" y="204">0</text>
<line x1="74" y1="270" x2="80" y2="270" stroke="#1d2b44"/><text x="70" y="274">−2</text>
<line x1="74" y1="340" x2="80" y2="340" stroke="#1d2b44"/><text x="70" y="344">−4</text>
</g>
<text x="24" y="230" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 230)">K_max (eV)</text>
<line x1="80" y1="280.5" x2="232.6" y2="200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="232.6" y1="200" x2="431.7" y2="95" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="80" y1="350.5" x2="365.4" y2="200" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<line x1="365.4" y1="200" x2="520" y2="118.4" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="12 3"/>
<g font-size="13" font-weight="600" fill="#1d2b44">
<text x="320" y="118" text-anchor="end">A (φ = 2.3 eV)</text><text x="532" y="182" text-anchor="end">B (φ = 4.3 eV)</text>
</g>
<g font-size="12" fill="#1d2b44">
<text x="236" y="192">f₀ for A</text><text x="352" y="192" text-anchor="end">f₀ for B</text>
<text x="88" y="276">−2.3</text><text x="88" y="364">−4.3</text>
</g>
</svg>
<figcaption>Figure 2. K_max against frequency for metal A (solid line) and metal B (long-dashed line). Short-dashed parts are extensions back to the vertical axis; no electrons are emitted there. Both lines have slope h = 4.14 × 10⁻¹⁵ eV·s, so they are parallel.</figcaption>
</figure>

Read three things from the graph:

- **Slope = h**, the same for every material. Lines for different metals are parallel.
- **Horizontal intercept = f₀**, the threshold frequency.
- **Vertical intercept = −φ**, found by extending the line back to f = 0. The extension is only a mathematical step: below f₀, K_max is not negative; there are simply no electrons.

A graph of V_s against f is the same shape, because V_s = K_max/e. Its slope is h/e, so h = e × slope.

## Worked example 1: will this light eject electrons?

**Question.** A fictional metal M has a work function of 4.30 eV. (a) Ultraviolet light of wavelength 250 nm falls on it. Find K_max and the stopping potential. (b) Find the threshold frequency and threshold wavelength. (c) A student replaces the source with a lamp of wavelength 320 nm that is ten times brighter. Are any electrons emitted?

1. (a) Photon energy: E = hc/λ = 1240 eV·nm ÷ 250 nm = 4.96 eV.
2. K_max = E − φ = 4.96 eV − 4.30 eV = 0.66 eV. In joules: 0.66 × 1.60 × 10⁻¹⁹ = 1.06 × 10⁻¹⁹ J.
3. Stopping potential: eV_s = K_max, so V_s = 0.66 V.
4. (b) f₀ = φ/h = 4.30 eV ÷ (4.14 × 10⁻¹⁵ eV·s) = 1.04 × 10¹⁵ Hz.
5. λ₀ = hc/φ = 1240 eV·nm ÷ 4.30 eV = 288 nm.
6. (c) Photon energy at 320 nm: 1240 ÷ 320 = 3.88 eV. This is less than 4.30 eV. Each photon has too little energy, so **no electrons are emitted**, whatever the brightness.

**Check.** 250 nm is shorter than λ₀ = 288 nm, so emission is expected in (a); 320 nm is longer than λ₀, so none is expected in (c). The frequency of the 250 nm light is c/λ = 1.20 × 10¹⁵ Hz, above f₀, which agrees.

## Worked example 2: finding h and φ from data

**Question.** A student measures the stopping potential for one (fictional) metal using five light sources. The results are in the table. Plot the data, then find Planck's constant and the work function.

| f (× 10¹⁴ Hz) | 6.0 | 7.0 | 8.0 | 9.0 | 10.0 |
|---|---|---|---|---|---|
| V_s (V) | 0.18 | 0.61 | 1.00 | 1.43 | 1.84 |

1. **Choose the axes.** V_s = (h/e)f − φ/e. Plot V_s (vertical) against f (horizontal). The theory predicts a straight line.
2. **Plot and draw a best-fit line.** Use scales that spread the points over most of the grid: for example f from 0 to 10 × 10¹⁴ Hz and V_s from −2.5 V to 2.0 V, so you can extend the line to the vertical axis. The points lie close to one straight line.
3. **Slope.** Use two points on your line far apart, not two data points. A least-squares line gives slope = 4.14 × 10⁻¹⁵ V/Hz. (Reading (6.0 × 10¹⁴ Hz, 0.184 V) and (10.0 × 10¹⁴ Hz, 1.84 V) off that line gives (1.84 − 0.184) ÷ (4.0 × 10¹⁴) = 4.14 × 10⁻¹⁵ V/Hz. A hand-drawn line may give a slightly different value.)
4. **Planck's constant.** h = e × slope = (1.60 × 10⁻¹⁹ C)(4.14 × 10⁻¹⁵ V/Hz) = 6.62 × 10⁻³⁴ J·s.
5. **Work function.** The vertical intercept of the best-fit line is −2.30 V. So φ/e = 2.30 V and **φ = 2.30 eV**.
6. **Threshold.** The horizontal intercept is f₀ = 2.30 ÷ (4.14 × 10⁻¹⁵) = 5.56 × 10¹⁴ Hz.

**Interpretation.** The value of h agrees with the accepted 6.63 × 10⁻³⁴ J·s to within 0.2%. A useful prediction: at f = 12 × 10¹⁴ Hz the line gives V_s = 2.67 V. Notice that doubling the frequency from 6.0 to 12 × 10¹⁴ Hz does **not** double V_s. It rises from about 0.18 V to 2.67 V, because K_max = hf − φ is a straight line that does not pass through the origin.

### Improving the experiment

If you were designing this experiment, you would:

- keep the same emitter plate throughout and change only the frequency;
- use several frequencies spread well above f₀, not just two;
- increase the potential difference slowly near the point where the current reaches zero, and repeat each reading;
- keep the light intensity fixed, or show that changing it does not change V_s.

## Common misconceptions

- **"Brighter light gives faster electrons."** At a fixed frequency, brighter light gives more electrons per second, not more energetic ones. Only the frequency changes K_max.
- **"Bright enough light of any colour will eject electrons."** Below f₀, no number of photons works, because one electron absorbs one photon.
- **"K_max is proportional to f."** K_max = hf − φ. Doubling f more than doubles K_max (if electrons were emitted at the lower frequency), because the φ term stays the same.
- **"The work function is the energy every electron needs."** It is the **minimum** energy. Many electrons need more, so they leave with less than K_max.
- **Using the wavelength the wrong way round.** Longer wavelength means lower frequency and lower photon energy. Light is above threshold when λ is *shorter* than λ₀.
- **Mixing units.** If φ is in eV, put hf in eV too (h = 4.14 × 10⁻¹⁵ eV·s, or hc = 1240 eV·nm). If you work in joules, convert φ to joules first.
- **Reading the dashed extension as data.** Below f₀, no electrons are emitted. The negative intercept just tells you −φ.

## Where this leads

The photoelectric effect shows that light delivers energy in photons. Topic 15.6 goes further: in [Compton scattering](/advanced-course-resources/physics-2/15-6-compton-scattering-study-guide/), a photon also carries momentum and bounces off an electron like a particle. Test yourself with the [practice questions](/advanced-course-resources/physics-2/15-5-photoelectric-effect-practice/), then use the [revision notes](/advanced-course-resources/physics-2/15-5-photoelectric-effect-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/15-5-photoelectric-effect-checklist/) to consolidate. If you need a reminder of where photon energies first appeared in this unit, see [blackbody radiation](/advanced-course-resources/physics-2/15-4-blackbody-radiation-study-guide/).
