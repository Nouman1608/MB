---
title: "Cambridge O Level Physics (5054): Uses of an oscilloscope"
resourceType: "study-guides"
subject: "physics"
level: ["o-levels"]
topic: "Electricity and magnetism"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 4.6
syllabusTopics:
  - qualification: "o-level"
    topic: "electricity-and-magnetism"
    subtopic: "uses-of-an-oscilloscope"
description: "Displaying waveforms and measuring p.d., period, frequency and short time intervals with the Y-gain and timebase, for Cambridge O Level Physics 5054."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **4.6 Uses of an oscilloscope**, the last
section of Topic 4, Electricity and magnetism, in Cambridge O Level Physics
5054 (2026–2028 series). The subtopic has two statements: describe the use
of an oscilloscope to display waveforms, and describe how to measure p.d.
and short intervals of time using the **Y-gain** and **timebase**. The
syllabus states that the structure of an oscilloscope is **not required**,
so this page is entirely about using one and reading its screen.

The [Electricity and magnetism study guide](/resources/o-level-physics-electricity-and-magnetism/)
has one short worked example. Here you will find the full reading method,
d.c. and a.c. traces, timing of pulses and echoes, and how to choose
settings for precise readings.

Companion pages: [Oscilloscope revision notes](/resources/cambridge-o-level-physics-5054-uses-of-an-oscilloscope-revision-notes/)
and [Oscilloscope practice questions](/resources/o-level-physics-uses-of-an-oscilloscope-practice/).

## What the screen shows

An oscilloscope draws a **graph of p.d. (vertical) against time
(horizontal)**. The screen has a grid, and each square is one
**division**; the main lines are usually subdivided into five smaller
marks, so readings can be taken to 0.2 of a division. A horizontal centre
line marks zero p.d. when no signal is connected.

Two controls turn divisions into physical quantities:

| Control | Unit | Converts |
|---|---|---|
| **Y-gain** | volts per division (V/div) | vertical divisions → p.d. |
| **Timebase** | time per division (s/div, ms/div or µs/div) | horizontal divisions → time |

```
p.d.  = number of vertical divisions × Y-gain
time  = number of horizontal divisions × timebase
```

Changing either control changes how the trace **looks**, not the signal
itself. Turning the Y-gain to a smaller value (fewer volts per division)
makes the same signal appear **taller**; turning the timebase to a
smaller value (less time per division) **spreads** the waves out
horizontally so fewer cycles fit on the screen.

## Displaying waveforms

Anything that produces a p.d. can be displayed:

- a **d.c. supply** gives a **horizontal straight line**, shifted up (or
  down, if connected the other way) from the centre line
- an **a.c. supply** or **a.c. generator** gives a regular wave above and
  below the centre line
- a **microphone** turns sound into a p.d., so a note can be displayed: this
  is how loudness, pitch and timbre are compared in
  [subtopic 3.4 Sound](/resources/cambridge-o-level-physics-5054-sound/)

If the timebase is switched off, the spot no longer sweeps across, so an
a.c. signal appears as a **vertical line**. Its length corresponds to the
peak-to-peak p.d., but no time information can be read.

## Measuring p.d.

**Worked example 1 (a.c.).** The Y-gain is 5.0 V/div. The top of the wave
is 2.4 divisions above the centre line.

```
peak p.d. = 2.4 × 5.0 = 12 V
peak-to-peak p.d. = 2 × 12 = 24 V   (4.8 divisions × 5.0 V/div)
```

Measuring the full **peak-to-peak** height and halving it is often more
precise than measuring from the centre line, because the centre line may be
hard to judge on a moving trace and the larger distance reduces the
percentage reading error.

**Worked example 2 (d.c.).** With no input, the trace is a flat line on the
centre line. When a cell is connected, the line jumps up 1.5 divisions.
The Y-gain is 2.0 V/div.

```
p.d. of the cell = 1.5 × 2.0 = 3.0 V
```

## Measuring time, period and frequency

The **period** T is the time for one complete cycle; the frequency is
f = 1 / T.

**Worked example 3.** The timebase is 2.0 ms/div. One complete cycle
occupies 5.0 divisions.

```
T = 5.0 × 2.0 ms = 10 ms = 0.010 s
f = 1 / T = 1 / 0.010 = 100 Hz
```

For better precision, measure **several cycles** and divide: if four
cycles span 8.0 divisions at 1.0 ms/div, T = 8.0 × 1.0 ms ÷ 4 = 2.0 ms and
f = 500 Hz.

## Measuring short intervals of time

The oscilloscope is valuable because it can time events far too close
together for a stopwatch — milliseconds or microseconds apart. Two pulses
on the trace are read the same way as a period: count the horizontal
divisions between them and multiply by the timebase.

**Worked example 4 (pulse spacing).** Two pulses are 3.2 divisions apart at
a timebase of 0.50 ms/div.

```
interval = 3.2 × 0.50 ms = 1.6 ms
```

**Worked example 5 (speed of sound from an echo).** A microphone 1.7 m from
a wall picks up a sharp clap and then its echo. On the trace they are 5.0
divisions apart, at 2.0 ms/div.

```
time = 5.0 × 2.0 ms = 10 ms = 0.010 s
distance travelled = 2 × 1.7 = 3.4 m
speed = 3.4 / 0.010 = 340 m/s
```

**Worked example 6 (ultrasound echo).** In an ultrasound test, a pulse and
its echo are 4.0 divisions apart at 10 µs/div. The speed of sound in the
material is 1500 m/s.

```
time = 4.0 × 10 µs = 40 µs = 4.0 × 10⁻⁵ s
depth = 1500 × 4.0 × 10⁻⁵ / 2 = 0.030 m
```

## Choosing the settings

When a question asks how to adjust the oscilloscope for a good reading:

- set the **Y-gain** so the trace fills as much of the screen height as
  possible without going off the top or bottom
- set the **timebase** so one to a few complete cycles (or both pulses)
  appear across the screen
- read the larger distance available (peak-to-peak, several cycles) and
  divide, to reduce the effect of reading error

**Worked example 7 (changing the settings).** A trace peaks 2.0 divisions
above the centre at 5.0 V/div, and one cycle spans 4.0 divisions at
5.0 ms/div. The Y-gain is changed to 2.0 V/div and the timebase to
2.0 ms/div.

```
peak p.d. = 2.0 × 5.0 = 10 V, so new height = 10 / 2.0 = 5.0 divisions
period = 4.0 × 5.0 = 20 ms, so new cycle length = 20 / 2.0 = 10 divisions
```

The signal is unchanged; it simply fills more of the screen, so it can be
read more precisely.

## Common mistakes

- Multiplying the number of **grid lines** rather than the number of
  **divisions** (the spaces between them).
- Quoting peak-to-peak p.d. when the question asks for the peak, or the
  reverse.
- Forgetting that ms and µs must be converted to seconds before finding
  frequency.
- Measuring a period from a crest to the next trough. One period is crest
  to crest, or any point to the next identical point.
- Saying that increasing the Y-gain setting (more V/div) makes the trace
  taller. More volts per division makes the same signal **shorter**.
- Describing the internal structure of the oscilloscope; it is not
  required and earns no marks.

## Exam technique for Cambridge command words

- **Describe how to measure**: name the control used (Y-gain for p.d.,
  timebase for time), say what is counted on the screen, and give the
  multiplication.
- **Calculate**: write the number of divisions, the setting with its unit,
  and the result with a converted unit, as in the worked examples.
- **Describe the trace**: give shape (flat line or wave), position relative
  to the centre line, and height and spacing in divisions.
- **Suggest** an improvement: adjust the Y-gain or timebase to enlarge the
  trace, or measure over several cycles.

*Written against Cambridge O Level Physics 5054, 2026–2028 series. Always
check the current syllabus for your examination year.*
