---
title: "Cambridge A Level Physics (9702): Standard candles"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Astronomy and cosmology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 25.1
syllabusTopics:
  - qualification: "a-level"
    topic: "a-astronomy-and-cosmology"
    subtopic: "a-standard-candles"
description: "A focused guide to 25.1 Standard candles in Cambridge A Level Physics 9702: luminosity, radiant flux intensity, F = L/4πd² and finding distances to galaxies."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **25.1 Standard candles** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Astronomy and Cosmology study guide](/resources/a-physics-astronomy-and-cosmology/) introduces all of Topic 25 with one distance calculation; this page goes further into where the inverse square law comes from, its assumptions, how standard candles are calibrated, the ratio method for comparing two objects, and the sources of uncertainty. For quick recall use the [Standard candles revision notes](/resources/cambridge-a-level-physics-9702-a-standard-candles-revision-notes/), and for exam-style questions the [Standard candles practice questions](/resources/cambridge-a-level-physics-9702-a-standard-candles-practice/).

## What 25.1 asks you to do

The syllabus lists four outcomes. Candidates should be able to:

- understand the term **luminosity** as the total power of radiation emitted by a star
- recall and use the **inverse square law** for radiant flux intensity F in terms of the luminosity L of the source, **F = L/(4πd²)**
- understand that an object of known luminosity is called a **standard candle**
- understand the use of standard candles to **determine distances to galaxies**

## Two quantities that must not be confused

| Quantity | Symbol | Meaning | Unit | Depends on distance? |
|---|---|---|---|---|
| Luminosity | L | Total power of radiation emitted by the star, in all directions | W | No: a property of the star |
| Radiant flux intensity | F | Power of radiation received per unit area, at right angles to the direction of travel, at the observer | W m⁻² | Yes |

A useful picture: luminosity is like the power rating of a lamp; radiant flux intensity is how bright the lamp appears from where you stand. A powerful lamp far away can look dimmer than a weak lamp nearby. In astronomy, F is what can be **measured** with a telescope and detector; L is what must be **known or inferred**.

## Where F = L/(4πd²) comes from

A star radiates equally in all directions. At distance d, its whole output L passes through the surface of an imaginary sphere of radius d, centred on the star. The surface area of a sphere is 4πd², so the power per unit area is:

```
F = L / (4πd²)
```

This gives the **inverse square law**: doubling the distance spreads the same power over four times the area, so F falls to a quarter. Trebling the distance reduces F to a ninth.

### Assumptions behind the law

When you use it, you are assuming that:

- the star radiates **equally in all directions** (isotropically)
- **no radiation is absorbed or scattered** between the star and the observer (for example by interstellar dust)
- the source is small compared with the distance, so it acts as a point

If dust absorbs some radiation, the measured F is too small, and the calculated distance is **too large**.

## Worked example 1: the Sun at the Earth

The Sun's luminosity is 3.8 × 10²⁶ W and the Earth-Sun distance is 1.5 × 10¹¹ m. Calculate the radiant flux intensity at the Earth.

```
F = L / (4πd²) = 3.8 × 10²⁶ / (4π × (1.5 × 10¹¹)²)
  = 3.8 × 10²⁶ / 2.83 × 10²³
  = 1.3 × 10³ W m⁻²
```

*Annotation.* About 1.3 kW falls on each square metre facing the Sun, above the atmosphere. Squaring 1.5 × 10¹¹ is where powers of ten go wrong: (1.5 × 10¹¹)² = 2.25 × 10²².

## Standard candles

A **standard candle** is an astronomical object whose **luminosity is known**. If L is known and F is measured, the distance follows:

```
d = √( L / (4πF) )
```

Standard candles are the only way to find distances to remote galaxies, which are far too distant for any direct geometric method.

### How luminosity becomes "known"

An object only works as a standard candle if there is a reliable way to know L without already knowing the distance. Two well-known classes of object are used:

- **Cepheid variable stars.** These stars pulsate, so their brightness varies with a regular period. Their period is related to their luminosity: Cepheids with the same period have the same luminosity. Measuring the period therefore gives L. They are bright enough to be seen in nearby galaxies.
- **Type Ia supernovae.** These exploding stars reach a very similar peak luminosity each time. They are extremely bright, so they can be seen in very distant galaxies.

The relation between a property (such as period) and luminosity is **calibrated** using examples whose distance has been found by another method: measure F for a nearby object at known d, then L = 4πd²F. Each step outwards relies on the one before, so astronomers describe a chain (or "ladder") of distance methods.

## Worked example 2: a Cepheid in another galaxy

A Cepheid in a nearby region at a known distance of 1.5 × 10¹⁹ m has a measured radiant flux intensity of 3.0 × 10⁻¹¹ W m⁻². A Cepheid with the **same period** is found in a distant galaxy, with radiant flux intensity 1.2 × 10⁻¹⁷ W m⁻². Calculate the distance to the galaxy.

**Method 1: find L first.**

```
L = 4πd²F = 4π × (1.5 × 10¹⁹)² × 3.0 × 10⁻¹¹ = 8.5 × 10²⁸ W
d = √(L / 4πF) = √(8.5 × 10²⁸ / (4π × 1.2 × 10⁻¹⁷)) = 2.4 × 10²² m
```

**Method 2: ratio.** Same period → same L, so F ∝ 1/d²:

```
d₂ = d₁ √(F₁ / F₂) = 1.5 × 10¹⁹ × √(3.0 × 10⁻¹¹ / 1.2 × 10⁻¹⁷)
   = 1.5 × 10¹⁹ × √(2.5 × 10⁶) = 1.5 × 10¹⁹ × 1581 = 2.4 × 10²² m
```

*Annotation.* The ratio method avoids large intermediate numbers and is quicker. Notice which way the ratio goes: the dimmer object is farther away, so F₁/F₂ (bright over dim) must be greater than 1.

## Uncertainties in standard-candle distances

A good answer to "suggest why this distance is uncertain" names a specific source:

- the **calibration** of luminosity carries uncertainty from the nearer distance measurements on which it rests
- **absorption by dust** reduces F and makes objects seem farther away
- the object may not be exactly typical of its class, so L may differ from the assumed value
- F itself is measured with some uncertainty for very faint objects

Because d ∝ 1/√F, a percentage error in F produces about half that percentage error in d.

## Common mistakes

- **Using "brightness" for both L and F.** Name the quantity: luminosity (W) or radiant flux intensity (W m⁻²).
- **Using 4πd instead of 4πd²**, or πd² (the area of a circle) instead of 4πd² (the area of a sphere).
- **Forgetting to square the distance** or to take the square root when finding d.
- **Defining a standard candle as "a very bright star"**. It is an object of known luminosity.
- **Claiming F depends on the star's luminosity only.** It depends on both L and d.
- **Inverting the ratio** in the comparison method, so the dimmer object comes out nearer.

## Exam technique for the command words

- **State** (what is meant by luminosity): the total power of radiation emitted by a star.
- **Define** (radiant flux intensity): power of radiation received per unit area at the observer.
- **State** (what is meant by a standard candle): an astronomical object of known luminosity.
- **Explain** (how standard candles give the distance to a galaxy): find a standard candle in the galaxy, measure its radiant flux intensity, use the known L in F = L/(4πd²) to calculate d.
- **Calculate**: rearrange first, then substitute; check the answer is sensible (galaxies are typically 10²¹ m or more away).
- **Suggest** (sources of uncertainty): dust absorption, calibration, non-typical luminosity.

## Related resources

- [Astronomy and Cosmology study guide](/resources/a-physics-astronomy-and-cosmology/) — the whole of Topic 25
- [Standard candles revision notes](/resources/cambridge-a-level-physics-9702-a-standard-candles-revision-notes/)
- [Standard candles practice questions](/resources/cambridge-a-level-physics-9702-a-standard-candles-practice/)
- [Stellar radii](/resources/cambridge-a-level-physics-9702-a-stellar-radii/) — subtopic 25.2, which uses luminosity to find a star's size
- [Hubble's law and the Big Bang theory](/resources/cambridge-a-level-physics-9702-a-hubbles-law-and-the-big-bang-theory/) — subtopic 25.3, where standard-candle distances are used

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
