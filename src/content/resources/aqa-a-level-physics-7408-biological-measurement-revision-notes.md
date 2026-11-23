---
title: "AQA A-Level Physics (7408): Biological measurement -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Physics 7408 notes on the ECG (3.10.3): electrodes, gel, amplifier needs, P, QRS and T waves, heart-rate method and a self-test."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.10.3 Biological measurement** of the AQA AS and A-level Physics specification (7407/7408): simple ECG machines and the normal ECG waveform. It is part of the A-level only Medical physics option. Full explanations and worked examples are in the [biological measurement study guide](/resources/aqa-a-level-physics-7408-biological-measurement/); test yourself with the [biological measurement practice questions](/resources/aqa-a-level-physics-7408-biological-measurement-practice/).

## Core facts

- An ECG is a graph of **potential difference against time**, measured between electrodes on the skin.
- It records the **electrical activity** of heart muscle: depolarisation (cell interior becomes positive, muscle contracts) and repolarisation (back to resting potential, muscle relaxes).
- Resting membrane potential: negative inside, about −70 mV in textbook models; depolarised: about +30 mV.
- Signal at the skin: about **1 mV**, because the surrounding tissue acts as a resistive network.
- Each beat starts at the **SA node** (pacemaker) in the right atrium; the **AV node** delays the signal; conducting fibres carry it through the ventricles.

## Key terms

| Term | Meaning |
|---|---|
| Depolarisation | Rapid rise of membrane p.d. to a positive value; triggers contraction |
| Repolarisation | Return of membrane p.d. to its resting value; muscle relaxes |
| SA node | Pacemaker region that starts each heartbeat |
| AV node | Region that delays the signal between atria and ventricles |
| P wave | Atrial depolarisation |
| QRS complex | Ventricular depolarisation (hides atrial repolarisation) |
| T wave | Ventricular repolarisation |
| R–R interval | Time between successive R peaks = period of the heartbeat |
| Input impedance | Effective resistance of the amplifier's input; must be high |
| Conducting gel | Gives low-resistance contact between electrode and skin |

## The waveform: link, size, reason

| Feature | Event | Size and shape | Reason |
|---|---|---|---|
| P | Atria depolarise | Small, rounded | Little atrial muscle |
| Flat PR section | AV node delay | Baseline | No large muscle mass changing state |
| QRS | Ventricles depolarise | Tallest, sharpest | Most muscle; fast conduction |
| T | Ventricles repolarise | Lower, broader | Slower process |

Atrial repolarisation is not seen separately: it is small and occurs during the QRS complex.

## Obtaining the trace: one point per stage

1. **Electrode positions**: standard sites on limbs and chest, so traces can be compared.
2. **Skin preparation**: remove hair, grease and dead skin to lower contact resistance.
3. **Gel**: good electrical contact, no air gaps.
4. **Amplifier**: high gain (about × 1000) because the signal is about 1 mV.
5. **High input impedance**: contact resistance and amplifier input form a potential divider, so most of the p.d. must appear across the amplifier; also draws negligible current.
6. **Differential input**: amplifies the difference between electrodes, so interference common to both (mains hum) cancels.
7. **Patient still and relaxed**: skeletal muscle signals would add noise.
8. **Display**: screen or chart recorder; standard paper speed 25 mm s⁻¹ (1 mm = 0.04 s).

## Methods

**Heart rate from a trace**

1. Measure the distance between two successive R peaks.
2. Divide by the paper speed to get the period T in seconds.
3. Heart rate = 60/T beats per minute.

**Fraction of signal reaching the amplifier**

1. Treat the contact resistance R_c and the input resistance R_in as a potential divider.
2. Fraction = R_in/(R_in + R_c).
3. Comment: fraction close to 1 only if R_in ≫ R_c.

## Exam traps

- "The ECG shows the heart pumping": it shows electrical activity.
- Swapping P and T, or giving the T wave to the atria.
- Explaining gel as "amplifying" or "conducting the heartbeat": it reduces contact resistance.
- "Low input impedance so current flows": wrong; high input impedance keeps the signal p.d. across the amplifier.
- Measuring the period from P to T instead of R to R.
- Forgetting to convert millimetres to seconds with the paper speed.
- Missing the hidden atrial repolarisation in a 4-mark "explain the shape" answer.

## Self-test

1. What quantity is plotted on the vertical axis of an ECG?
2. State the approximate size of the ECG signal at the skin.
3. Which part of the heart starts each heartbeat?
4. Which feature of the ECG corresponds to ventricular depolarisation?
5. Why is the QRS complex larger than the P wave?
6. Why is atrial repolarisation not seen as a separate wave?
7. State two reasons the skin is prepared before electrodes are attached.
8. Why must the ECG amplifier have a high input impedance?
9. Why is the patient asked to lie still?
10. On a trace at 25 mm s⁻¹, R peaks are 15 mm apart. Calculate the heart rate.
11. The contact resistance is 30 kΩ and the amplifier input resistance is 5.0 MΩ. What fraction of the signal reaches the amplifier?
12. A 0.80 mV signal must give 2.0 V on the display. Calculate the gain.

### Answers

1. **Potential difference** (in mV), against time.
2. About **1 mV**.
3. The **SA node** (sinoatrial node) in the wall of the right atrium.
4. The **QRS complex**.
5. The ventricles contain much **more muscle** than the atria.
6. It is small and happens **at the same time as ventricular depolarisation**, so it is hidden in the QRS complex.
7. To remove **grease and dead skin** (and hair), which have high resistance, so the **contact resistance is low** and the electrode makes good contact.
8. The contact resistance and the input act as a **potential divider**; a high input impedance means almost all of the signal p.d. appears across the amplifier and negligible current is drawn.
9. **Skeletal muscle** activity produces its own electrical signals, which would add noise to the trace.
10. T = 15/25 = 0.60 s; rate = 60/0.60 = **100 beats per minute**.
11. 5.0/(5.0 + 0.030) = **0.994** (99.4%).
12. 2.0/(0.80 × 10⁻³) = **2500**.

## Frequently asked questions

**Why does an ECG need a high input impedance amplifier?**
The electrode–skin contacts and the amplifier input form a potential divider. With an input impedance much higher than the contact resistance, almost all of the tiny signal p.d. appears across the amplifier, and changes in contact resistance barely affect the trace.

**What does each part of the ECG waveform show?**
The P wave shows the atria depolarising, the QRS complex shows the ventricles depolarising, and the T wave shows the ventricles repolarising. Atrial repolarisation is hidden in the QRS complex.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.10.3 Biological measurement (A-level only), content statement 3.10.3.1.
