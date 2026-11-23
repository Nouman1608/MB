---
title: "AQA A-Level Physics (7408): Biological measurement"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Medical physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "medical-physics-aqa-alevel"
    subtopic: "biological-measurement-aqa-alevel"
description: "AQA A-level Physics 7408 section 3.10.3 in depth: how an ECG machine obtains the heart's signal and why the normal ECG waveform has its P, QRS and T shape."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section **3.10.3 Biological measurement** of the AQA AS and A-level Physics specification (7407/7408). It is part of the Medical physics option (section 3.10), which is A-level only and assessed in Paper 3 Section B. The sub-section has one content statement, 3.10.3.1 Simple ECG machines and the normal ECG waveform: "principles of operation for obtaining the ECG waveform; explanation of the characteristic shape of a normal ECG waveform."

The [Medical physics study guide](/resources/aqa-a-level-physics-medical-physics/) gives a short overview of the whole option. Use the [biological measurement revision notes](/resources/aqa-a-level-physics-7408-biological-measurement-revision-notes/) for recall and the [biological measurement practice questions](/resources/aqa-a-level-physics-7408-biological-measurement-practice/) to test yourself.

## What an ECG measures

An electrocardiogram (ECG) is a graph of potential difference against time, recorded between electrodes on the skin. It shows the **electrical activity of the heart**, not the mechanical pumping itself, although each electrical event triggers a mechanical one.

### Where the signal comes from

Heart muscle cells, like nerve cells, have a potential difference across their membranes. At rest the inside of a cell is negative relative to the outside, typically about −70 mV in textbook models. When a cell is stimulated, ions move across the membrane and the potential rises quickly to a positive value (about +30 mV): this is **depolarisation**, and it makes the muscle cell contract. The cell then returns to its resting potential: **repolarisation**, and the muscle relaxes.

When a large mass of muscle depolarises or repolarises together, the currents in the surrounding tissue set up small potential differences that reach the skin. These are of order **1 mV**, far smaller than the potentials across individual cell membranes, because the body tissue between heart and skin acts like a resistive network.

### The sequence of electrical events

1. The **sinoatrial (SA) node**, a region of special cells in the wall of the right atrium, acts as the heart's pacemaker and starts each beat.
2. Depolarisation spreads across both **atria**, which contract and push blood into the ventricles.
3. The signal reaches the **atrioventricular (AV) node**, which delays it briefly so the ventricles can fill.
4. Conducting fibres (the bundle of His and Purkinje fibres) carry the signal rapidly through the **ventricles**, which depolarise and contract.
5. The ventricles **repolarise** and relax, ready for the next beat.

## The normal ECG waveform

Each beat produces the same characteristic shape on the trace, with a flat baseline between beats.

| Feature | What it shows | Why it looks like that |
|---|---|---|
| **P wave** | Depolarisation of the atria | Small, rounded: the atria have relatively little muscle |
| **PR interval** (P to start of QRS) | Delay at the AV node | Flat: no large mass of muscle is changing state |
| **QRS complex** | Depolarisation of the ventricles | Largest and sharpest: the ventricles have the most muscle and the signal spreads through them quickly |
| **T wave** | Repolarisation of the ventricles | Broader and lower than QRS: repolarisation is slower |

Two further points earn marks in "explain the shape" questions:

- The **atria repolarise** at the same time as the ventricles depolarise, so the atrial repolarisation signal is small and **hidden within the QRS complex**.
- The **time between successive R peaks** is the period of the heartbeat, so the heart rate = 60/(R–R interval in seconds) beats per minute.

In a normal resting adult the QRS complex lasts about 0.1 s and the whole P–T sequence well under a second; a typical resting rate is between 60 and 100 beats per minute.

## Principles of operation of an ECG machine

The specification asks how the waveform is **obtained**. Each part of the system answers a physics problem caused by the tiny, low-power signal.

### Electrodes and skin preparation

- **Electrodes** are placed at standard positions on the limbs (wrists and ankles) and on the chest, so that traces from different patients and different occasions can be compared. One limb electrode is often used as a reference.
- The **skin is prepared**: hair may be removed, and the skin is cleaned to remove grease and dead skin cells, which have a high resistance.
- A **conducting gel** (or a pre-gelled pad) fills the gaps between the electrode and the skin, giving a good, low-resistance electrical contact and avoiding air gaps.

### The amplifier

- **High gain**: the signal is about 1 mV, so it must be amplified (by a factor of order 1000) before it can be displayed.
- **High input impedance**: the skin and electrode contacts behave like a resistance in series with the amplifier input. The signal p.d. divides between the contact resistance and the amplifier's input resistance like a potential divider. With an input resistance much larger than the contact resistance, almost all the signal p.d. appears across the amplifier, and almost no current is drawn from the body.
- **Differential amplification**: the amplifier amplifies the difference between two electrodes. Interference picked up equally by the whole body, such as mains hum, appears on both electrodes and is largely cancelled.

### Reducing noise

The patient lies still and relaxed. Skeletal muscle produces its own electrical signals when it contracts, and these would add noise to the trace. Leads are kept short and away from mains cables, and filtering may remove mains-frequency interference.

### Display

The amplified signal is shown on a screen or chart recorder as p.d. against time. On standard ECG paper the trace moves at 25 mm s⁻¹, so each millimetre along the time axis is 0.04 s.

## Worked examples

**Worked example 1: heart rate from a trace.** On a trace recorded at 25 mm s⁻¹, successive R peaks are 20 mm apart.

```
R–R interval = 20 mm ÷ 25 mm s⁻¹ = 0.80 s
heart rate   = 60/0.80 = 75 beats per minute
```

**Worked example 2: why high input impedance matters.** The total resistance of the electrode–skin contacts is 20 kΩ (an illustrative value). The heart produces a 1.2 mV signal between the electrodes. Compare the p.d. reaching an amplifier of input resistance 10 MΩ with one of input resistance 50 kΩ.

```
10 MΩ input:  V = 1.2 × 10/(10 + 0.020)  = 1.198 mV  (99.8% of the signal)
50 kΩ input:  V = 1.2 × 50/(50 + 20)     = 0.86 mV   (71% of the signal)
```

The low-impedance amplifier loses almost a third of the signal, and the loss changes whenever the contact resistance changes, distorting the trace. This is also why skin preparation and gel matter: they keep the contact resistance low.

**Worked example 3: amplifier gain.** The R peak is 1.2 mV at the skin, and the display needs 1.2 V for a full-height trace.

```
gain = 1.2/(1.2 × 10⁻³) = 1000
```

## Model answer

**Question:** Explain the characteristic shape of a normal ECG waveform. **[4]**

**Answer:** The P wave is produced as the atria depolarise and contract; it is small because the atria contain relatively little muscle [1]. The QRS complex is produced as the ventricles depolarise and contract; it is the largest feature because the ventricles have the greatest muscle mass [1]. The T wave is produced as the ventricles repolarise and relax [1]. Atrial repolarisation happens during ventricular depolarisation, so it is hidden by the QRS complex; the flat section between P and QRS is the delay at the AV node [1].

## Common mistakes

- Saying the ECG measures the sound or pressure of the heart: it measures potential difference.
- Linking the T wave to the atria, or saying the P wave shows the ventricles.
- Saying gel "amplifies the signal": it lowers the contact resistance.
- Saying the amplifier needs low input impedance "so current flows easily": a high input impedance means most of the p.d. is across the amplifier.
- Forgetting that the patient must keep still because skeletal muscles also produce signals.
- Using the spacing between P and T, rather than between successive R peaks, to find the heart rate.

## Exam technique

- **Describe** how an ECG is obtained: electrodes and positions, skin preparation, gel, amplifier, display. One clear point per mark.
- **Explain** the waveform: link each feature to an electrical event in a named part of the heart, and give a reason for its size.
- **Calculate** heart rate: convert the R–R distance to time using the paper speed first, then 60/T.
- **Suggest** reasons for a poor trace: high contact resistance, patient movement, mains interference.

Next, try the [biological measurement practice questions](/resources/aqa-a-level-physics-7408-biological-measurement-practice/), or revise the option as a whole with the [Medical physics revision notes](/resources/aqa-a-level-physics-medical-physics-revision-notes/).

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.3 Biological measurement (A-level only), content statement 3.10.3.1 Simple ECG machines and the normal ECG waveform.
