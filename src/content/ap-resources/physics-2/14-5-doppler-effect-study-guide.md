---
resourceId: "mb-ap-phys2-14.5-study-guide"
title: "The Doppler Effect: Study Guide (Physics 2 14.5)"
description: "Why relative motion changes the frequency you observe: wavefront diagrams, moving sources and observers, passing sirens, red and blue shift of light, and how to argue it qualitatively."
course: "physics-2"
unit: 14
topics: ["14.5"]
resourceType: "study-guide"
prerequisites:
  - "Period, frequency, wavelength and v = fλ (Topic 14.2)"
  - "Sound as a longitudinal mechanical wave whose speed is set by the medium (Topic 14.1)"
  - "The order of the electromagnetic spectrum (Topic 14.4)"
prerequisiteResources: ["mb-ap-phys2-14.4-study-guide"]
learningObjectives:
  - "Tell apart the rest frequency of a source and the frequency an observer measures"
  - "Explain with a wavefront diagram why an approaching source is heard at a higher frequency and a receding one at a lower frequency"
  - "Predict that there is no shift when source and observer share the same velocity"
  - "Compare shifts in different situations: a larger relative speed gives a larger difference from the rest frequency"
  - "Describe how the observed pitch of a passing source changes with time"
  - "Apply the same reasoning to light, using red shift and blue shift"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "scientific"
calculatorNote: "Doppler reasoning in this course is qualitative. Any numbers use only v = fλ and distance = speed × time. Take the speed of sound in air as 340 m/s"
related: ["mb-ap-phys2-14.5-revision-notes", "mb-ap-phys2-14.5-practice", "mb-ap-phys2-14.5-checklist"]
next: "mb-ap-phys2-14.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-2", "clar-physics-2", "page-physics-2"]
keyPoints:
  - "The Doppler effect is a difference between the frequency a source emits (its rest frequency) and the frequency an observer measures, caused by relative motion."
  - "Source and observer getting closer: observed frequency is higher. Getting farther apart: observed frequency is lower."
  - "Same velocity (so the distance between them stays constant): no shift at all."
  - "A greater relative speed gives a greater difference between observed and rest frequency."
  - "Light shows the same effect: a receding source is red-shifted (longer λ), an approaching one blue-shifted (shorter λ)."
faqs:
  - question: "Do I need a Doppler formula for the exam?"
    answer: "No. The course treats the Doppler effect qualitatively. You must predict whether the observed frequency is higher, lower or equal to the rest frequency, compare situations and justify your answer, often with a wavefront diagram."
  - question: "Does the sound get higher as an approaching car comes closer?"
    answer: "No. If the car moves straight toward you at constant speed, the pitch you hear is constant and higher than the rest pitch. It gets louder as the car approaches, but the pitch only drops when the car passes you."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

## Rest frequency and observed frequency

Stand by a road and listen to a car sounding its horn as it goes past. While the car comes toward you, the horn has one pitch. As it passes, the pitch drops. The driver, sitting in the car, hears no change at all. The horn did not change. What changed is the **relative motion** between the horn and the person listening.

Two frequencies are involved:

- The **rest frequency f₀** (also called the source frequency) is the frequency at which the source vibrates. It is what an observer moving with the source measures.
- The **observed frequency f** is the number of wavefronts (crests or compressions) that reach a particular observer each second.

The **Doppler effect** is the difference between these two frequencies caused by the relative velocity of the source and the observer. For sound, a higher observed frequency is heard as a higher pitch (Topic 14.2).

The source does not change how fast it vibrates. A siren that vibrates 600 times per second still vibrates 600 times per second whether it is parked or speeding. Only the *rate at which wavefronts arrive* at you can change.

## Why it happens: a travel-time argument

Think about the wavefronts one at a time. The source sends out one crest every period T₀ = 1/f₀. Each crest then travels to you at the wave speed set by the medium.

- If the distance between you and the source **stays the same**, every crest has the same trip. Crests arrive exactly T₀ apart. You measure f = f₀.
- If the distance is **shrinking**, each crest starts from a little closer than the one before. Its trip is shorter, so it catches up a little on the crest ahead. Crests arrive **less** than T₀ apart, so f > f₀.
- If the distance is **growing**, each trip is longer than the last. Crests arrive **more** than T₀ apart, so f < f₀.

This argument works whether the source moves, the observer moves, or both move. It also shows that the size of the effect depends on how quickly the distance changes. A faster approach shortens each trip by more, so the observed frequency moves further from f₀. That is the rule you will use most: **greater relative speed, greater shift**.

## A moving source: the wavefront picture

A wavefront diagram shows each crest as a circle centred on the point where the source was when it emitted that crest. For a source at rest, the circles are concentric and evenly spaced, one wavelength λ₀ apart.

When the source moves, each new circle is centred a little further along. The circles bunch up in front of the source and spread out behind it.

<figure>
<svg viewBox="0 0 560 480" role="img" aria-labelledby="dop-src-title dop-src-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="dop-src-title">Wavefronts from a source moving to the right</title>
<desc id="dop-src-desc">Five circular wavefronts. The largest, oldest circle is centred furthest left, and each newer, smaller circle is centred a little further right. The source, shown as a filled dot with an arrow pointing right, is to the right of all the centres. On the right side of the source the circles are close together, labelled crests closer together, shorter wavelength, higher observed frequency, with observer A standing there. On the left side the circles are far apart, labelled crests further apart, longer wavelength, lower observed frequency, with observer B standing there. The spacing ahead is 0.7 times the rest spacing and the spacing behind is 1.3 times the rest spacing.</desc>
<defs><marker id="dop-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.6">
<circle cx="270" cy="220" r="200"/>
<circle cx="282" cy="220" r="160"/>
<circle cx="294" cy="220" r="120"/>
<circle cx="306" cy="220" r="80"/>
<circle cx="318" cy="220" r="40"/>
</g>
<g fill="#1d2b44">
<circle cx="270" cy="220" r="2"/><circle cx="282" cy="220" r="2"/><circle cx="294" cy="220" r="2"/><circle cx="306" cy="220" r="2"/><circle cx="318" cy="220" r="2"/>
<circle cx="330" cy="220" r="6"/>
</g>
<line x1="338" y1="220" x2="372" y2="220" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#dop-arr)"/>
<text x="352" y="210" font-size="12" fill="#1d2b44" text-anchor="middle">source</text>
<text x="352" y="240" font-size="12" fill="#1d2b44" text-anchor="middle">velocity</text>
<g fill="#1d2b44" font-size="13" font-weight="600" text-anchor="middle">
<circle cx="520" cy="220" r="7" fill="none" stroke="#1d2b44" stroke-width="2"/><text x="520" y="200">A</text>
<circle cx="32" cy="220" r="7" fill="none" stroke="#1d2b44" stroke-width="2"/><text x="32" y="200">B</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="420" y="448">Ahead (A): crests closer together</text>
<text x="420" y="466">shorter λ, higher observed f</text>
<text x="140" y="448">Behind (B): crests further apart</text>
<text x="140" y="466">longer λ, lower observed f</text>
</g>
</svg>
<figcaption>Figure 1. Wavefronts from a source moving to the right (filled dot with arrow). The small dots mark where the source was when it emitted each crest; the largest circle is the oldest crest. Ahead of the source, at observer A, the crests are 0.7 times their rest spacing apart; behind, at observer B, they are 1.3 times their rest spacing apart.</figcaption>
</figure>

For a sound source moving through still air:

- The **wave speed does not change**. Sound travels at a speed set by the air (its temperature and so on), not by the motion of the source.
- **Ahead** of the source the wavelength is shorter. Since v = fλ and v is fixed, a shorter λ means a higher frequency reaches observer A.
- **Behind** the source the wavelength is longer, so a lower frequency reaches observer B.
- Sound emitted while the source is moving straight across an observer's line of sight (neither approaching nor receding) reaches that observer at f₀.

## A moving observer

Now let the source sit still and the observer move. The circles are concentric and evenly spaced again. Nothing about the wave in the air has changed. But an observer running **toward** the source meets the crests more often than one standing still, because she runs into them as they come toward her. She measures f > f₀. An observer moving **away** has to let each crest catch up with her, so she meets them less often and measures f < f₀.

So the cause looks different (wavelength squeezed in the air, or crests met more often), but the rule is the same: **closing distance raises f, opening distance lowers f**.

## What sets the size of the shift

The course asks you to compare shifts, not to calculate them. Three rules cover almost every question.

1. **Direction of relative motion decides the sign.** Approaching: f > f₀. Receding: f < f₀.
2. **Same velocity means no shift.** If source and observer move together, with the same speed in the same direction, the distance between them never changes, so f = f₀. A passenger on a train hears the train's own announcements at their normal pitch. This holds even if a steady wind blows, as long as the distance between source and observer stays constant.
3. **Greater relative speed, greater shift.** A siren approaching at 30 m/s is heard at a higher frequency than the same siren approaching at 15 m/s. Receding at 30 m/s gives a lower frequency than receding at 15 m/s.

Only motion **along the line joining** source and observer matters. Motion across that line does not change the distance (at that instant), so it does not shift the frequency.

## A source that passes you

Put the three rules together for a train sounding its horn as it passes a platform at constant speed.

- **Far away and approaching:** the train is closing in almost head-on. You hear a steady pitch above f₀, getting louder.
- **Passing:** the train's motion turns from "toward you" to "across your line of sight" to "away from you". The pitch falls quickly. The sound emitted when the train is closest to you (moving across your line of sight) arrives at f₀.
- **Far away and receding:** a steady pitch below f₀, getting quieter.

The closer the track is to you, the more sudden the drop. A faster train gives a higher pitch on approach and a lower pitch after passing, so the total drop is bigger.

Keep **pitch** and **loudness** separate. Loudness depends on amplitude, which grows as the source gets nearer (Topic 14.1). Pitch depends on frequency. The Doppler effect is about frequency only.

## The Doppler effect for light

Electromagnetic waves need no medium (Topic 14.4), but the Doppler effect still happens: what matters is the relative velocity of source and observer.

- A light source **moving away** from you is observed at a lower frequency and a longer wavelength. Lines in its spectrum shift toward the **red** end. This is a **red shift**.
- A source **approaching** you is observed at a higher frequency and shorter wavelength. Its lines shift toward the **blue/violet** end: a **blue shift**.

Astronomers compare the wavelengths of spectral lines from stars and galaxies with the same lines measured in a laboratory. The direction of the shift tells them whether the object is approaching or receding, and a larger shift means a larger speed along the line of sight. The same idea is used with reflected waves: radar speed guns aimed at cars, and Doppler ultrasound that measures the speed of blood in a vessel. A wave reflected from an object moving toward the detector comes back at a higher frequency than it was sent out.

## Worked example 1: reading a wavefront diagram

**Question.** A race car's horn has a rest frequency of 400 Hz. The car travels at 68 m/s through still air, where sound travels at 340 m/s. (a) Use the wavefront picture to explain whether a marshal standing ahead of the car or one standing behind it hears the higher frequency. (b) As an illustration, find the spacing of the crests ahead of and behind the car.

**(a) Qualitative answer.**

1. The horn emits a crest once every period. Between crests the car moves forward, so each new crest is emitted closer to the marshal ahead and further from the marshal behind.
2. Ahead, the crests are squeezed together (shorter λ). Behind, they are spread apart (longer λ).
3. The speed of sound is fixed by the air, not by the car. With v = fλ and v constant, the shorter wavelength ahead means a higher frequency.
4. So the marshal **ahead** hears a frequency above 400 Hz and the marshal **behind** hears one below 400 Hz.

**(b) Background numbers (you will not be asked to calculate a Doppler shift on the exam).**

1. Period: T₀ = 1/f₀ = 1/400 Hz = 0.0025 s. Rest wavelength: λ₀ = v/f₀ = 340 ÷ 400 = 0.85 m.
2. Distance the car moves in one period: 68 m/s × 0.0025 s = 0.17 m.
3. In one period the newest crest moves 0.85 m away from where it was emitted, but the car has moved 0.17 m after it. Spacing ahead: 0.85 − 0.17 = 0.68 m. Spacing behind: 0.85 + 0.17 = 1.02 m.
4. Using v = fλ with the unchanged wave speed: ahead, 340 ÷ 0.68 = 500 Hz; behind, 340 ÷ 1.02 ≈ 333 Hz.

**Check.** The ahead value is above 400 Hz and the behind value is below it, which agrees with (a). The average of the two spacings is (0.68 + 1.02)/2 = 0.85 m, the rest wavelength, as it should be: the car shortens one by the same amount it lengthens the other.

## Worked example 2: ranking observed frequencies

**Question.** A fire engine's siren has rest frequency f₀. Rank the frequency heard in each case, from highest to lowest, and justify the ranking. Treat equal frequencies as a tie.

- **P:** The fire engine is parked. A listener walks toward it at 2 m/s.
- **Q:** The fire engine drives toward a listener standing still, at 25 m/s.
- **R:** The fire engine drives at 25 m/s; the listener is in a car directly behind it, driving at the same velocity.
- **S:** The fire engine drives away from a listener standing still, at 25 m/s.
- **T:** The fire engine and listener are both at rest, and a steady wind blows from the engine toward the listener.

1. **Sort by direction.** In P and Q the distance is shrinking, so f > f₀. In S the distance is growing, so f < f₀. In R and T the distance never changes, so every crest has the same trip and f = f₀.
2. **Compare P and Q.** Both are approaching, but the distance shrinks at 25 m/s in Q and only 2 m/s in P. A greater relative speed gives a greater shift, so f_Q > f_P.
3. **The wind in T.** The wind carries all the crests along equally. They still leave the siren f₀ times per second and, with a constant trip, they reach the listener f₀ times per second. No shift.

**Answer.** Q > P > R = T > S.

**Interpretation.** Notice that you did not need any formula. The argument used only three things: the direction of the relative motion, whether the separation is changing, and how fast it changes.

## Common misconceptions

- **"The source's frequency changes."** The siren vibrates at the same rate throughout. Only the frequency observed changes.
- **"The pitch rises as the source gets closer."** For a source approaching at constant velocity the pitch is constant (and above f₀). What rises is the loudness. The pitch falls only as the source passes.
- **"A moving source makes the sound travel faster."** In a medium, the wave speed depends on the medium. The motion of the source changes the wavelength, not the wave speed.
- **"Any motion causes a shift."** Moving together at the same velocity, or moving across the line of sight, does not change the distance, so there is no shift.
- **"Louder means higher."** Loudness depends on amplitude; pitch depends on frequency. They are different properties.
- **"Light cannot show a Doppler shift because it needs no medium."** The shift depends on relative velocity, so light is shifted too: red shift when receding, blue shift when approaching.
- **"Red shift means the object turns red."** It means every line in its spectrum moves to a longer wavelength. For the speeds of most stars the shift is tiny: it is found by measuring line positions, not by looking at the colour.

## Where this leads

Topic 14.6 looks at what happens when two waves overlap: superposition, beats and standing waves. Beats give a neat link back to this topic, because a small Doppler shift between two otherwise equal sounds can be heard as a beat. Practise first with the [practice questions](/advanced-course-resources/physics-2/14-5-doppler-effect-practice/), then use the [revision notes](/advanced-course-resources/physics-2/14-5-doppler-effect-revision-notes/) and the [topic checklist](/advanced-course-resources/physics-2/14-5-doppler-effect-checklist/). When you are ready, continue to [Topic 14.6: Wave Interference and Standing Waves](/advanced-course-resources/physics-2/14-6-wave-interference-standing-waves-study-guide/). To review the electromagnetic spectrum used in red and blue shift, see [Topic 14.4: Electromagnetic Waves](/advanced-course-resources/physics-2/14-4-electromagnetic-waves-study-guide/).
