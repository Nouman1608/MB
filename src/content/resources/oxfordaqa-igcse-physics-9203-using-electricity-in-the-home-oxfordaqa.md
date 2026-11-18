---
title: "OxfordAQA International GCSE Physics (9203): Using electricity in the home"
resourceType: "study-guides"
subject: "physics"
level: ["igcse"]
topic: "Generating and distributing electricity and household use"
boards: ["oxfordaqa"]
qualifications: ["igcse"]
syllabusCodes: ["9203"]
syllabusSeries: "For exams May/June 2018 onwards"
order: 6.3
syllabusTopics:
  - qualification: "igcse"
    topic: "generating-and-distributing-electricity-and-household-use"
    subtopic: "using-electricity-in-the-home-oxfordaqa"
description: "Direct and alternating current, oscilloscope traces, mains supply, earthing, fuses, circuit breakers and double insulation for OxfordAQA IGCSE Physics (9203)."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers one subtopic in depth: **3.6.3 Using electricity in the home**, statements a to f of the OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards. The qualification is untiered. The specification asks you to **determine the period, and hence the frequency, of a supply from diagrams**, and to **compare and calculate** dc potential differences and the **peak** potential differences of ac supplies. It also says knowledge of root mean square (rms) values is not required, so every ac voltage you calculate from a trace in this subtopic is a peak value.

The [mains electricity, safety, power and cost guide](/resources/oxfordaqa-igcse-physics-mains-electricity-safety-power-and-the-cost-of/) covers this together with power and cost. This page adds trace-reading practice and step-by-step fault sequences. Afterwards, use the [home electricity revision notes](/resources/oxfordaqa-igcse-physics-9203-using-electricity-in-the-home-oxfordaqa-revision-notes/) and the [home electricity practice questions](/resources/oxfordaqa-igcse-physics-9203-using-electricity-in-the-home-oxfordaqa-practice/).

## What the specification asks for

| Statement | Content |
|---|---|
| a | Cells and batteries supply current that always passes in the same direction: direct current (dc) |
| b | Alternating current (ac) repeatedly changes direction; find period and frequency from diagrams; compare dc pd with peak ac pd |
| c | Mains electricity is an ac supply with a set frequency and voltage |
| d | Earthing: if the metal body of an appliance becomes live through a fault, the current is harmlessly conducted away |
| e | A fuse or circuit breaker in the live wire disconnects the circuit if too great a current flows; a circuit breaker is faster and can be reset |
| f | Metal-cased appliances are usually earthed; a fault current to earth melts the fuse. Some appliances are double insulated and have no earth connection |

## Direct and alternating current (statements a to c)

**Direct current** flows in one direction only. A cell or battery gives a steady pd, so on a pd–time graph or oscilloscope it appears as a **horizontal straight line** above (or below) zero.

**Alternating current** repeatedly reverses direction. The pd rises to a maximum (the **peak**), falls through zero, reaches a maximum in the opposite direction and returns. On a trace it is a wave that crosses the zero line.

**Mains electricity** is ac with a fixed frequency and voltage chosen by each country. For example, the United Kingdom uses 230 V at 50 Hz, while some other countries use about 120 V at 60 Hz. You will be told the values you need.

## Reading an oscilloscope trace

An oscilloscope screen is a grid of squares called divisions.

- The **time-base** setting tells you the time represented by one horizontal division (for example 5 ms/div).
- The **Y-gain** setting tells you the pd represented by one vertical division (for example 2 V/div).

**To find the period:** count the horizontal divisions for one complete cycle (peak to next peak, or one crossing of zero to the next crossing in the same direction) and multiply by the time-base. **Frequency = 1 ÷ period**, with the period in seconds.

**To find the peak pd:** count the vertical divisions from the **centre line** to the top of the wave, not from the bottom to the top, and multiply by the Y-gain.

**Worked example 1.** An ac trace has one complete cycle spanning 4 divisions horizontally, and its peaks are 3.5 divisions above the centre line. Time-base 5 ms/div; Y-gain 2 V/div.

```
Period     = 4 div × 5 ms/div  = 20 ms = 0.020 s
Frequency  = 1 ÷ 0.020 s       = 50 Hz
Peak pd    = 3.5 div × 2 V/div = 7.0 V
```

**Worked example 2 (comparing supplies).** With Y-gain 5 V/div, a battery's trace is a flat line 1.8 divisions above centre, and an ac supply has peaks 2.4 divisions above centre. The time-base is 2 ms/div and one cycle covers 5 divisions.

```
dc pd          = 1.8 × 5 = 9.0 V
peak ac pd     = 2.4 × 5 = 12 V
period         = 5 × 2 ms = 10 ms = 0.010 s
frequency      = 1 ÷ 0.010 = 100 Hz
```

The ac supply's peak is 3.0 V higher than the battery's steady pd, but the ac pd is only at its peak for an instant in each half-cycle. Common slips are measuring peak-to-peak (which doubles the answer) and forgetting to convert milliseconds to seconds before finding the frequency.

## Safety features (statements d to f)

A household circuit has a **live** wire, which carries the alternating pd, a **neutral** wire, which completes the circuit, and, for many appliances, an **earth** wire connected to the metal case.

**Earthing.** If a fault lets the live wire touch the metal case, the case becomes live. Without an earth wire, anyone touching it would provide a path to the ground and could receive a fatal shock. With an earth wire, the very low-resistance earth path conducts the current away harmlessly.

**Fuses.** A fuse is a thin wire in the **live** wire that overheats and melts if the current is too large, breaking the circuit. It is placed in the live wire so that once it blows, the appliance is cut off from the high pd.

**Circuit breakers.** A circuit breaker in the live wire switches off ("trips") when the current is too large. It works **much faster** than a fuse and **can be reset**, rather than replaced.

**Worked example 3: the fault sequence.** A loose live wire touches the steel case of an earthed washing machine. Explain what happens.

1. The case becomes connected to the live wire.
2. A large current flows from the live wire, through the case and earth wire, to earth, because the earth path has a very low resistance.
3. This current is far bigger than the fuse rating, so the fuse wire overheats and melts.
4. The live wire is disconnected, so the case is no longer at a dangerous pd and is safe to touch.

The earth wire and fuse work **together**. The earth wire alone would carry the current but leave the circuit live; the large earth current is what blows the fuse.

**Double insulation.** Some appliances, such as many hairdryers, have a casing made of an insulating material, with no metal parts that a user could touch. Even if a live wire came loose inside, the case could not become live, so these appliances need no earth wire.

## Common mistakes

- Measuring peak pd from the bottom of the wave to the top (that is peak-to-peak).
- Forgetting to convert ms to s before calculating frequency.
- Saying the fuse is in the neutral or earth wire.
- Saying a fuse protects the user from all shocks. Its main job is to cut off the supply when the current is too large; the earth wire is what keeps a faulty case safe.
- Writing that a circuit breaker "melts". Fuses melt; circuit breakers trip and can be reset.
- Saying double-insulated appliances are earthed.

## Exam technique

- **Determine** a frequency: show the number of divisions, the time-base, the period in seconds, then 1 ÷ period.
- **Compare** two supplies: give both values with units and state which is larger.
- **Explain** a safety feature: give the sequence of events in order, as in worked example 3.
- **Give an advantage**: for a circuit breaker, say faster **and** resettable for full marks where two are asked.

## Related pages

- [Home electricity revision notes](/resources/oxfordaqa-igcse-physics-9203-using-electricity-in-the-home-oxfordaqa-revision-notes/)
- [Home electricity practice questions](/resources/oxfordaqa-igcse-physics-9203-using-electricity-in-the-home-oxfordaqa-practice/)
- [Transferring electrical energy study guide](/resources/oxfordaqa-igcse-physics-9203-transferring-electrical-energy-oxfordaqa/)

## Specification reference

OxfordAQA International GCSE Physics (9203) specification, for exams May/June 2018 onwards, section 3.6.3 Using electricity in the home, statements a to f.
