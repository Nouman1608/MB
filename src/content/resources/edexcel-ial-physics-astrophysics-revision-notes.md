---
title: "Edexcel IAL Physics: Astrophysics and Cosmology — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 5.6
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-5-thermodynamics-radiation-oscillations-and-cosmology"
    subtopic: "astrophysics-and-cosmology"
description: "Condensed recall notes on luminosity, Wien and Stefan laws, the HR diagram, stellar evolution and Hubble's law for Edexcel IAL Physics YPH11 (Unit 5, WPH15)."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Astrophysics and Cosmology study guide](/resources/edexcel-ial-physics-astrophysics-and-cosmology-ial/).

## Gravitational fields

```
g = F / m
F = G m1 m2 / r^2      (Newton's law of universal gravitation)
g = G m / r^2           (field of a point mass)
Vgrav = -G m / r         (gravitational potential, radial field)
```

**Gravitational field strength**, g = F/m, is the force per unit mass on a small test mass. Gravitational fields are structurally like electric fields — both inverse-square, both with radial and uniform forms — but gravity is **always attractive** (never repulsive) and **Vgrav is always negative**, rising towards zero at infinity, whereas electric potential can be positive or negative.

**Orbital motion**: gravity supplies the centripetal force, so GMm/r² = mv²/r, giving orbital speed v = √(GM/r) for a satellite in circular orbit.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--02-inverse-square.webp" width="900" height="1000" alt="The same field lines pass through windows of 1, 4 and 9 unit areas at distances R, 2R and 3R, so the field spreads thinner. For Earth g is 9.81, 2.45 and 1.09 N per kg at R, 2R and 3R." loading="lazy">
  <figcaption>Double the distance and g falls to a quarter; triple it and g falls to a ninth.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--03-g-and-v-graphs.webp" width="900" height="1030" alt="Two graphs for Earth against distance r. g falls from 9.81 N per kg at the surface to 2.45 at 2R and never reaches zero. V rises from -62.5 MJ per kg at the surface towards zero at infinity. The gradient of V at 2R is 2.45 N per kg, the size of g there." loading="lazy">
  <figcaption>g falls as 1/r2; V = -GM/r rises towards 0; the gradient of the V graph gives g.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-gravitational-fields--05-orbit-kepler-third.webp" width="900" height="1210" alt="A satellite on a circular orbit has gravity as its centripetal force. Equating GMm/r2 with mv2/r cancels m and gives v = root(GM/r), then T2 = (4pi2/GM) r3. A graph of T2 against r3 for Earth satellites is a straight line through the origin, passing through the 24 hour point." loading="lazy">
  <figcaption>Gravity supplies the centripetal force, so v and T depend only on M and r, giving T2 proportional to r3.</figcaption>
</figure>


## Luminosity, flux and distance

```
F = L / (4 pi d^2)
```

**Luminosity** is total power emitted; **radiant flux** is power received per unit area. Confusing the two is the commonest error in the topic.

**Standard candles** have known luminosity, so measuring flux gives distance. Type Ia supernovae qualify because they detonate at a fixed critical mass and so reach a consistent peak luminosity. For relatively close stars, **trigonometric parallax** — the apparent shift in a star's position against distant background stars as Earth orbits the Sun — provides an independent distance measurement, useful for calibrating standard candles.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--02-aphy-astro-inverse-square.webp" width="900" height="1130" alt="A star emits light in a widening cone. At 2d the same light covers 4 times the area and at 3d 9 times, so the flux falls to F/4 and F/9. A standard candle has known L, so measuring F gives d; the worked example gives 5.6e18 m." loading="lazy">
  <figcaption>Flux falls as 1/d^2, so a standard candle of known luminosity gives its distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--01-aphy-astro-parallax.webp" width="900" height="1000" alt="Earth at opposite ends of its orbit sees a nearby star shift against far more distant stars. The parallax angle p is the angle at the star subtended by 1 AU. For p in arcseconds, d in parsecs is 1/p; 0.0625 arcsec gives 16.0 pc or 52.3 ly. The drawing is not to scale." loading="lazy">
  <figcaption>Parallax angle p subtends 1 AU at the star, so d (pc) = 1/p (arcsec).</figcaption>
</figure>


## Stellar temperature and size

```
Wien:    lambda_max T = 2.898 x 10^-3 m K
Stefan:  L = 4 pi r^2 sigma T^4
```

**Wien first, then Stefan.** Peak wavelength gives temperature; temperature plus luminosity gives radius. Attempting Stefan first leaves two unknowns.

Because `L ∝ T⁴`, a small rise in temperature produces a very large rise in luminosity.

**Worked example.** A star has a surface temperature of 5800 K. Find the wavelength at which it emits most strongly.

```
lambda_max = (2.898 x 10^-3) / T = (2.898 x 10^-3) / 5800 = 5.00 x 10^-7 m
```

500 nm, in the visible spectrum — consistent with a Sun-like star.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-astrophysics-revision-notes--01-wien-then-stefan.webp" width="900" height="1020" alt="A two-step method. Step 1, Wien: a star whose spectrum peaks at 500 nanometres has temperature about 5800 kelvin, from lambda max times T equals 2.898 times ten to the minus three metre kelvin. Step 2, Stefan: with the luminosity 3.8 times ten to the 26 watts and that temperature, L equals 4 pi r squared sigma T to the fourth gives a radius of about 6.9 times ten to the 8 metres. Starting with Stefan fails because both r and T are unknown. A small bar chart shows that doubling T at fixed radius multiplies luminosity by 16." loading="lazy">
  <figcaption>Wien first, then Stefan: T from the peak, then r from L and T.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--03-aphy-astro-blackbody.webp" width="900" height="980" alt="Planck curves for 4800 K, 5800 K and 7000 K. Hotter stars are higher at every wavelength and peak at shorter wavelengths (604, 500, 414 nm from Wien). Area under each curve scales as T^4 (Stefan)." loading="lazy">
  <figcaption>Hotter black bodies emit more at every wavelength and peak at shorter wavelength; total power scales as T^4.</figcaption>
</figure>


## The Hertzsprung–Russell diagram

Luminosity (vertical) against temperature (horizontal), with **temperature increasing to the left** — the reversed axis is a standard trap.

Regions: **main sequence** (diagonal band), **red giants** (top right — cool but luminous, so they must be very large), **white dwarfs** (bottom left — hot but dim, so very small).

**The HR diagram's power is that position implies size.** A cool star that is nonetheless highly luminous must have an enormous surface area, which is what identifies it as a giant.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--04-aphy-astro-hr-diagram.webp" width="900" height="1010" alt="Log-log plot of luminosity against surface temperature with spectral classes O to M across the top. Main sequence runs top left to bottom right; giants, supergiants and white dwarfs are marked, with the Sun. Dashed lines of constant radius come from L = 4 pi r^2 sigma T^4." loading="lazy">
  <figcaption>On the HR diagram, stars of equal radius lie on lines from L = 4 pi r^2 sigma T^4; above the main sequence at the same temperature means bigger.</figcaption>
</figure>


## Stellar evolution

**Sun-like star:** nebula → protostar → main sequence → red giant → planetary nebula → **white dwarf**.

**Massive star:** nebula → protostar → main sequence → red supergiant → **supernova** → neutron star or **black hole**.

The fate is determined by mass. The **Chandrasekhar limit** (~1.4 solar masses) is the maximum mass of a white dwarf; above it, electron degeneracy pressure cannot resist gravity and collapse continues.

**Main-sequence lifetime is shorter for more massive stars**, despite their greater fuel supply, because luminosity rises far faster than mass — they burn through it disproportionately quickly, so a massive star's greater reserves are exhausted sooner rather than later.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-astrophysics-revision-notes--02-mass-and-lifetime.webp" width="900" height="1180" alt="Bars compare a star of 10 solar masses with the Sun on a logarithmic scale. Its fuel is 10 times larger but its luminosity, taken illustratively as proportional to mass to the power 3.5, is about 3200 times larger, so its lifetime is about 316 times shorter. Lower bars give lifetimes taking the Sun as 10 billion years: 0.5 solar masses about 57 billion years, 1 solar mass 10 billion, 2 solar masses 1.8 billion, 10 solar masses about 32 million years." loading="lazy">
  <figcaption>More fuel but a much higher burn rate means a shorter main-sequence life.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--05-aphy-astro-star-life-cycle.webp" width="900" height="1210" alt="A low-mass star goes from gas cloud to protostar, main sequence, red giant, planetary nebula and white dwarf (electron degeneracy pressure, at most 1.4 solar masses). A massive star ends as a red supergiant, supernova, then a neutron star or black hole. A main-sequence star is stable because gas and radiation pressure balance gravity." loading="lazy">
  <figcaption>Mass decides whether a star ends as a white dwarf, neutron star or black hole.</figcaption>
</figure>


## Redshift and cosmology

```
Doppler:  delta-lambda / lambda = v / c
Hubble:   v = H0 d
age  ~  1 / H0
```

There is ongoing scientific controversy over the precise value of the Hubble constant, and what this implies for the age and ultimate fate of the universe.

Almost all galaxies are redshifted, and redshift increases with distance, so the universe is **expanding**.

**This does not place us at the centre.** Space itself is expanding, so every observer everywhere would see the same relationship — a point worth stating explicitly, since it is a common misreading of the redshift-distance evidence.

**Big Bang evidence, with what each shows:**

1. **Galactic redshift** → the universe is expanding and was once smaller and denser.
2. **Cosmic microwave background** → the cooled remnant of a hot early universe, black-body at ~2.7 K.
3. **Hydrogen and helium abundances** → match the ratio predicted by Big Bang nucleosynthesis.

**Dark matter** is inferred from galactic rotation curves — outer stars orbit faster than visible mass can account for, implying unseen mass exerting additional gravitational pull. **Dark energy** is inferred from supernova observations showing the expansion is **accelerating** rather than slowing under gravity's pull, as would otherwise be expected.

## Exam traps

- Confusing luminosity with flux.
- Applying Stefan's law before Wien's.
- Forgetting the HR diagram's reversed temperature axis.
- Saying massive stars live longer because they have more fuel.
- Claiming redshift shows Earth is at the centre.
- Using °C in Wien's or Stefan's law.
- Forgetting that gravitational potential is always negative, unlike electric potential.

## Self-test

1. Distinguish luminosity from radiant flux.
2. In what order are Wien's and Stefan's laws applied, and why?
3. Why must a cool, highly luminous star be very large?
4. Why do massive stars have shorter main-sequence lifetimes?
5. What is the evidence for dark matter?
6. A star has a surface temperature of 5800 K. Find its peak emission wavelength.
7. How does trigonometric parallax measure stellar distance, and what is it used for?
8. State the equation for gravitational field strength due to a point mass, and give one similarity and one difference between gravitational and electric fields.

**Answers:** 1. Luminosity is the total power radiated by the star; radiant flux is the power received per unit area at the observer. 2. Wien first, because peak wavelength gives temperature; Stefan then uses that temperature with the luminosity to find the radius — reversing the order leaves two unknowns. 3. Luminosity depends on both temperature and surface area, so a low temperature can only give high luminosity if the surface area, and hence the radius, is very large. 4. Luminosity increases much faster than mass, so they consume their larger fuel supply disproportionately quickly. 5. Galactic rotation curves show that stars in the outer regions orbit far faster than the visible mass distribution can explain. 6. λmax = (2.898×10⁻³) ÷ 5800 = 5.00×10⁻⁷ m (500 nm). 7. It measures the apparent shift in a nearby star's position against distant background stars as Earth orbits the Sun; it is used to calibrate standard candles for larger distances. 8. g = Gm/r²; both fields are inverse-square with radial and uniform forms, but gravitational forces are always attractive while electric forces can attract or repel.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-astrophysics-revision-notes--03-rotation-curve.webp" width="900" height="1130" alt="A graph of orbital speed against distance from the galactic centre. The dashed line, expected from visible matter alone, peaks at about 150 kilometres per second and then falls with distance. The solid line, the observed speeds, stays roughly flat at about 200 kilometres per second out to 30 kiloparsecs. Below, a galaxy disc is surrounded by a dashed halo of unseen mass, inferred to provide the extra gravitational pull. Curves are illustrative, computed from a simple disc plus halo model." loading="lazy">
  <figcaption>Flat rotation curves imply unseen mass.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-astrophysics-revision-notes--04-cmb-spectrum.webp" width="900" height="910" alt="A black-body spectrum for a temperature of 2.725 kelvin plotted against wavelength from 0 to 5 millimetres. It peaks at 1.06 millimetres, in the microwave region, which Wien's law confirms: 2.898 times ten to the minus 3 divided by 2.725 gives 1.06 millimetres. This is the cooled remnant of the hot early universe, evidence for the Big Bang." loading="lazy">
  <figcaption>The CMB is a 2.7 K black-body spectrum peaking at 1.06 mm.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-ial-physics-astrophysics-revision-notes--05-expansion-no-centre.webp" width="900" height="970" alt="Two rows of five galaxies, A to E, drawn before (dashed) and after space has stretched by half again. Seen from galaxy A, the others move away with arrows growing in proportion to their distance. Seen from galaxy C, the same pattern appears in both directions, with equal arrows for galaxies at equal distances. Every galaxy sees the others recede in proportion to distance, so the redshift evidence does not put us at the centre of the universe." loading="lazy">
  <figcaption>Every galaxy sees the same pattern of recession.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--06-aphy-astro-redshift.webp" width="900" height="980" alt="Hydrogen absorption lines at 434.0, 486.1 and 656.3 nm in the laboratory are shifted to 442.7, 495.8 and 669.4 nm in a distant galaxy, all by the same fraction z = 0.020. z = delta lambda / lambda = v/c gives a recession speed of about 6.0e6 m/s." loading="lazy">
  <figcaption>Spectral lines of a receding galaxy shift to longer wavelength by z = v/c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-astronomy-and-cosmology--07-aphy-astro-hubble.webp" width="900" height="1140" alt="Speed against distance is a straight line through the origin with gradient H0 = 70 km/s/Mpc, including the worked example 85.5 Mpc at 5990 km/s. Farther galaxies recede proportionally faster. H0 = 2.3e-18 per second, so age is about 1/H0 = 4.4e17 s or 1.4e10 years." loading="lazy">
  <figcaption>Recession speed is proportional to distance (v = H0 d), and 1/H0 estimates the age of the universe.</figcaption>
</figure>

## Frequently asked questions

**Why must you use Wien's law before the Stefan-Boltzmann law?**
The peak wavelength gives the star's temperature through Wien's law. Only then can the temperature and luminosity be put into L = 4πr²σT⁴ to find the radius; using Stefan's law first leaves two unknowns.

**What is the Chandrasekhar limit?**
The Chandrasekhar limit, about 1.4 solar masses, is the maximum mass of a white dwarf. Above it, electron degeneracy pressure cannot resist gravity and the collapse continues.

**Why do more massive stars have shorter lives?**
Luminosity rises far faster than mass, so massive stars use up their larger fuel supply disproportionately quickly and leave the main sequence sooner.

**What is the evidence for the Big Bang?**
Galactic redshift shows the universe is expanding, the cosmic microwave background is the cooled remnant of a hot early universe at about 2.7 K, and the abundances of hydrogen and helium match Big Bang nucleosynthesis predictions.
