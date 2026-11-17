---
title: "Pearson Edexcel International GCSE Physics (4PH1): Units in radioactivity"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Radioactivity and particles"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4PH1"]
syllabusSeries: "Issue 4"
order: 7.1
syllabusTopics:
  - qualification: "igcse"
    topic: "radioactivity-and-particles"
    subtopic: "units-radioactivity"
description: "Using the becquerel, centimetre, hour, minute and second in activity, count-rate and half-life work for Edexcel IGCSE Physics 4PH1 sub-topic 7a."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-17
featured: false
---

This guide covers sub-topic **7(a) Units** of the Pearson Edexcel
International GCSE in Physics (4PH1), Issue 4 specification. It has a
single statement, **7.1: use the following units: becquerel (Bq),
centimetre (cm), hour (h), minute (min) and second (s)**. The statement is
core content, so it can be tested on both papers. It is short, but unit
slips are one of the most common ways to lose marks in half-life and
count-rate questions, so this page shows where each unit is used across
Topic 7 and how to convert between them. The physics behind activity and
half-life is in the
[Radioactivity study guide](/resources/edexcel-igcse-physics-4ph1-radioactivity/)
and the topic overview,
[Radioactivity and Particles](/resources/edexcel-igcse-physics-radioactivity-and-particles/).

## Where each unit appears

| Unit | Symbol | Quantity it measures in Topic 7 | Typical context |
|---|---|---|---|
| becquerel | Bq | Activity of a source | "The activity falls from 800 Bq to 200 Bq" |
| second | s | Time; basis of the becquerel | Count rates in counts per second; short half-lives |
| minute | min | Time | Count rates in counts per minute; half-lives of minutes |
| hour | h | Time | Half-lives of hours, such as medical tracers |
| centimetre | cm | Distance, thickness | Range of alpha in air; source-to-detector distance; absorber thickness |

## The becquerel

The **activity** of a radioactive source is the number of unstable nuclei
that decay each second. Its unit is the **becquerel**:

```
1 Bq = 1 decay per second
```

Statement 7.11 says that activity "decreases over a period of time and is
measured in becquerels", so whenever a question talks about activity, the
answer needs Bq. Large activities are often written with prefixes: 1 kBq
is 1000 Bq and 1 MBq is 1 000 000 Bq.

**Activity is not the same as count rate.** A Geiger-Müller detector
records a **count rate**: the number of radiation particles or rays that
reach it and are detected each second or each minute. A source emits in
all directions, and the detector only intercepts a small fraction; some
radiation is absorbed before it arrives; the detector also picks up
background radiation. So the count rate is normally much less than the
activity, and its unit is **counts per second** or **counts per minute**,
not Bq. Both quantities halve in one half-life, so either can be used to
find a half-life.

## The time units: second, minute and hour

Half-lives range from fractions of a second to many years, so questions
mix time units freely. The conversions you need are:

```
1 min = 60 s
1 h   = 60 min = 3600 s
```

Two rules prevent almost every unit error:

1. **Before dividing elapsed time by half-life, put both in the same unit.** Number of half-lives = elapsed time ÷ half-life only works if the units match.
2. **Count rates must be per the same time unit before you subtract background.** You cannot subtract a background in counts per second from a reading in counts per minute.

When converting a count rate, think about whether the number should get
bigger or smaller. A rate per minute is **60 times larger** than the same
rate per second, because a minute contains 60 seconds.

```
counts per minute = counts per second × 60
counts per second = counts per minute ÷ 60
```

## The centimetre

Distances in Topic 7 are usually small, so the centimetre is the natural
unit:

- **Range of alpha in air:** alpha particles travel only a few centimetres in air before they have caused so much ionisation that they stop. Moving a Geiger-Müller tube away from an alpha source in centimetre steps shows the count rate dropping to background within that short distance.
- **The penetration practical (7.6):** the source-to-detector distance is fixed, often a few centimetres, and must be kept the same while different absorbers (paper, aluminium, lead) are placed in between. Absorber thicknesses are measured in millimetres or centimetres.
- **Safety:** distance reduces exposure, which is why sources are handled with long tongs and held well away from the body.

The base SI unit of length is the metre, but radioactivity questions do
not usually need distances in a formula, so working in centimetres is
fine unless the question asks for metres (1 m = 100 cm).

## Worked examples

**Example 1 (mixed time units).** A source has a half-life of 45 min.
Its activity is 3200 Bq. Calculate the activity 3.0 h later.

```
elapsed time = 3.0 h = 3.0 × 60 = 180 min
number of half-lives = 180 ÷ 45 = 4
3200 → 1600 → 800 → 400 → 200 Bq
```

Activity after 3.0 h = **200 Bq**. Dividing 3.0 by 45 without converting
would give a meaningless fraction of a half-life.

**Example 2 (count rates and background).** A Geiger-Müller tube
records 1260 counts in 3.0 minutes near a source. The background count
rate is 0.40 counts per second. Calculate the corrected count rate in
counts per minute and in counts per second.

```
measured count rate = 1260 ÷ 3.0 = 420 counts/min
background = 0.40 × 60 = 24 counts/min
corrected count rate = 420 − 24 = 396 counts/min
in counts per second: 396 ÷ 60 = 6.6 counts/s
```

**Example 3 (half-life in different units).** The activity of a sample
falls from 6000 Bq to 750 Bq in 15 h. Find the half-life in hours,
minutes and seconds.

```
6000 → 3000 → 1500 → 750: 3 half-lives
half-life = 15 h ÷ 3 = 5.0 h
5.0 h = 5.0 × 60 = 300 min = 300 × 60 = 18 000 s
```

**Example 4 (graph reading).** On an activity-time graph, the time axis
is labelled "time / min" and the activity axis "activity / Bq". Read the
half-life directly in minutes: find the time for the activity to fall
from any value to half that value, then repeat from a second starting
value and average. The answer's unit comes from the axis label, so write
it as minutes unless the question asks for a different unit.

## Common mistakes

- Giving a count rate in becquerels. Bq is for activity; detectors give counts per second or per minute.
- Dividing an elapsed time in hours by a half-life in minutes.
- Multiplying by 60 when you should divide, and the reverse. Check the size of the answer: per minute should be bigger than per second.
- Subtracting a background given per second from a reading per minute.
- Using 100 instead of 60 when converting between minutes and hours or seconds and minutes.
- Leaving out the unit altogether. A half-life of "5" earns nothing without h, min or s.

## Exam technique

- **Calculate:** write the conversion as a line of working, such as "3.0 h = 180 min". If the final answer is wrong, a shown conversion can still earn a mark.
- **Determine** from a graph: read values from the axes using their labelled units; show the readings on the graph or in your working.
- **State** the unit of activity: the answer is "becquerel" or "Bq"; "counts per second" does not earn the mark.
- **Add/Label** (for example, completing a results table): put units in the column headings, such as "count rate / counts per min", not after every number.

## Related resources

- [Units in radioactivity revision notes](/resources/edexcel-igcse-physics-4ph1-units-radioactivity-revision-notes/) for the conversions on one page
- [Units in radioactivity practice questions](/resources/edexcel-igcse-physics-4ph1-units-radioactivity-practice/) with worked answers
- [Radioactivity study guide](/resources/edexcel-igcse-physics-4ph1-radioactivity/), sub-topic 7(b)

*Written against the Pearson Edexcel International GCSE in Physics (4PH1)
specification, Issue 4. Always check the current specification for your
examination year.*
