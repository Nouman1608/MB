---
title: "AQA A-Level Physics (7408): Data communication systems"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electronics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 13.6
syllabusTopics:
  - qualification: "a-level"
    topic: "electronics-aqa-alevel"
    subtopic: "data-communication-systems-aqa-alevel"
description: "Study guide to AQA A-Level Physics 7408 section 3.13.6: communication block diagrams, transmission media, radio propagation, TDM, AM and FM bandwidth."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section 3.13.6, Data communication systems, of the AQA AS and A-level Physics specification (7407/7408). It has four content statements: 3.13.6.1 Principles of communication systems, 3.13.6.2 Transmission media, 3.13.6.3 Time-division multiplexing and 3.13.6.4 Amplitude (AM) and frequency modulation (FM) techniques. The section is part of the A-level only Electronics option, assessed in Paper 3 Section B. The [Electronics study guide](/resources/aqa-a-level-physics-electronics/) gives the outline; this page explains each stage, each medium and each modulation method more fully. Follow it with the [data communication systems revision notes](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-revision-notes/) and the [data communication systems practice questions](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-practice/).

## What the specification asks for

| Content statement | Required |
|---|---|
| 3.13.6.1 Principles | Block diagram of a "real time" communication system; only the purpose of each stage |
| 3.13.6.2 Transmission media | Metal wire, optic fibre, electromagnetic (radio, microwave); ground wave, refraction and reflection of sky waves, diffraction of long-wavelength radiation around the Earth's surface; satellite systems and typical frequencies; different up- and down-link frequencies so receivers are not de-sensed; advantages and disadvantages, considering data rate, cost and security |
| 3.13.6.3 Time-division multiplexing | Basic principles |
| 3.13.6.4 AM and FM | Principles of modulation; bandwidth; carrier wave and information signal; graphs of AM and FM signals; identifying carrier and information frequencies from a voltage–time graph; bandwidth 2f_M for AM and 2(Δf + f_M) for FM; data capacity of a channel; comparing bandwidth availability of media |

Modulation circuits and a detailed mathematical treatment are not required.

## The real-time communication system

A real-time system delivers the message as it happens, as in a phone call. Learn what each block does and why it is there.

| Stage | Purpose |
|---|---|
| Input transducer | Converts the message (sound, light, temperature) into an electrical signal |
| Amplifier | Raises the small signal to a level the next stage can use |
| Filter | Removes frequencies outside the range needed, reducing noise and bandwidth |
| ADC | Samples and quantises the signal so it can be sent as binary codes |
| Multiplexer | Combines several channels onto one transmission path |
| Modulator (with carrier oscillator) | Puts the signal onto a high-frequency carrier suited to the medium |
| Transmitter and aerial | Supplies power and launches the signal into the medium |
| Transmission path | Wire, fibre or electromagnetic waves carrying the signal |
| Receiver (tuned circuit and amplifier) | Selects the wanted carrier and amplifies the weak received signal |
| Demodulator | Recovers the information signal from the carrier |
| Demultiplexer | Separates the channels |
| DAC | Rebuilds the analogue signal from the codes |
| Amplifier and output transducer | Drives a loudspeaker, earpiece or display |

Not every system uses every block. An analogue AM broadcast has no ADC, multiplexer or DAC; a digital link carried on a wire may have no modulator.

## Transmission media

| Medium | Data rate | Cost | Security | Other points |
|---|---|---|---|---|
| Metal wire (twisted pair, coaxial cable) | Lowest bandwidth | Cheap and easy to join | Easy to tap; radiates signal | Attenuation and electrical interference rise with length and frequency |
| Optic fibre | Very high bandwidth | Expensive to lay, but light and thin | Very hard to tap without detection | Low attenuation; immune to electrical interference |
| Radio | Limited by the band allocated | No cable; low cost per user | Anyone with a receiver can pick it up unless encrypted | Range depends on wavelength (below) |
| Microwave | High bandwidth | Needs dishes and line of sight | Narrow beams are harder to intercept | Used for links between towers and to satellites |

## How radio waves travel

**Ground waves.** Long-wavelength radio waves (wavelengths of hundreds of metres or more) **diffract** around the curve of the Earth's surface, following it well beyond the horizon. A 198 kHz long-wave transmitter has a wavelength of 3.00 × 10⁸ / 1.98 × 10⁵ ≈ 1500 m, comparable with obstacles and the scale of the curvature, so diffraction is strong.

**Sky waves.** Shorter wavelengths, such as 10 m to 100 m, are **refracted** by the ionised layers of the upper atmosphere (the ionosphere) until they are **reflected** back down to the ground. Repeated reflection from the ionosphere and the ground can carry them very long distances. A 9.5 MHz short-wave signal has λ ≈ 32 m.

**Line of sight.** At still higher frequencies, waves pass through the ionosphere and diffract very little, so transmitter and receiver must be in line of sight. This suits microwave links and communication with satellites.

## Satellite systems

Satellites relay signals using microwaves in the gigahertz range: at these frequencies the waves pass through the ionosphere and narrow beams can be formed with dishes. A typical value is several GHz; 12 GHz gives λ = 2.5 cm.

The **up-link** (ground to satellite) and **down-link** (satellite to ground) use **different frequencies**. The satellite's transmitter is powerful and close to its own receiver, while the up-link signal arriving from Earth is very weak. On the same frequency, the transmitted signal would swamp the receiver, which is said to be **de-sensed**. Using separate frequencies, with filters, keeps the receiver sensitive to the weak up-link.

## Time-division multiplexing

**Time-division multiplexing (TDM)** lets several digital channels share one link. Each channel gets a short **time slot** in turn. One complete round, with a slot for every channel, is a **frame**. The receiver uses synchronised timing to send each slot's data to the right output.

For channels sampled at 8.0 kHz, one sample from each channel must be sent every 1/8000 s = 125 µs, so the frame lasts 125 µs.

### Worked example 1: a 30-channel link

Thirty speech channels, each sampled at 8.0 kHz with 8 bits per sample, are multiplexed onto one link.

```
total bit rate = 30 × 8000 × 8 = 1.92 × 10⁶ bit s⁻¹
frame period = 1 / 8000 = 125 µs
slot per channel = 125 / 30 = 4.17 µs
time per bit = 1 / (1.92 × 10⁶) = 0.52 µs
```

The link needs a bit rate 30 times that of one channel. That is why TDM is used on high-bandwidth media such as optic fibre.

## AM and FM

The **information signal** (frequency f_M) cannot usually be sent directly, so it **modulates** a high-frequency **carrier wave**. Different carrier frequencies let many stations share the airwaves, and each is chosen to suit the medium and the range needed.

- **AM**: the carrier's **amplitude** varies with the information signal. The outline of the peaks, the **envelope**, has the shape of the information signal.
- **FM**: the carrier's **frequency** varies with the information signal, while its amplitude stays constant. The **frequency deviation** Δf is the largest change from the carrier frequency.

### Reading the graphs

On a voltage–time graph:
- **Carrier frequency** = 1 / (period of one fast oscillation).
- **Information frequency** = 1 / (time for the envelope, or the pattern of crowded and spread-out waves in FM, to repeat).

### Bandwidth

```
AM: bandwidth = 2 f_M          FM: bandwidth = 2(Δf + f_M)
```

An AM signal contains frequencies from (f_c − f_M) to (f_c + f_M).

### Worked example 2: comparing AM and FM

A 1.000 MHz carrier is amplitude modulated by a 5.0 kHz tone. A different station uses FM with Δf = 60 kHz and f_M = 12 kHz.

```
AM range: 995 kHz to 1005 kHz → bandwidth 10 kHz
FM bandwidth = 2(60 + 12) = 144 kHz
```

The FM signal uses over 14 times the bandwidth. In return, FM is less affected by noise: noise mostly changes amplitude, and an FM receiver ignores amplitude changes.

### Data capacity

The **data capacity** of a channel is the rate at which it can carry information; it rises with bandwidth. A band of fixed width holds fewer wide FM channels than narrow AM channels. Media with more bandwidth carry more data: optic fibre and microwaves far exceed metal wire and long-wave radio, which is why long-distance and high-rate links use fibre or microwaves.

## Common mistakes

- Describing a block's internal circuit when only its purpose is asked for.
- Stating that sky waves are reflected by the ground only, or by "the atmosphere" without naming the ionosphere.
- Giving ground waves to short wavelengths: diffraction around the Earth is strongest for long wavelengths.
- Explaining different up- and down-link frequencies as "to avoid interference with other satellites" instead of de-sensing the satellite's own receiver.
- Using f_M for AM bandwidth, or 2Δf + f_M for FM.
- Reading the carrier period from the envelope.

## Exam technique

- **State the purpose** questions: one clear function per block.
- **Explain** propagation: name the process (diffraction, refraction, reflection) and the wavelength range.
- **Compare** media: use the specification's headings (data rate, cost, security) and give one point under each.
- **Calculate** bandwidth and bit rates: show the formula, then the substitution, then the unit.

## Next steps

Condense this page with the [data communication systems revision notes](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-revision-notes/) and test yourself with the [data communication systems practice questions](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-practice/). Sampling, PCM and noise, which feed into this section, are covered in [analogue and digital signals](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel/); refraction and optic fibres are in [Waves](/resources/aqa-a-level-physics-waves/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.6 Data communication systems (A-level only), within section 3.13 Electronics.
