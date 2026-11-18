---
title: "AQA A-Level Physics (7408): Data communication systems -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for AQA A-Level Physics 7408 section 3.13.6: system blocks, media, ground and sky waves, satellites, TDM, AM and FM bandwidth, with a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 3.13.6, Data communication systems, of the AQA AS and A-level Physics specification (7407/7408): principles of communication systems, transmission media, time-division multiplexing, and AM and FM. The section is part of the A-level only Electronics option, assessed in Paper 3 Section B. For explanations and worked examples, read the [data communication systems study guide](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel/); then practise with the [data communication systems practice questions](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-practice/).

## Key equations

| Quantity | Equation |
|---|---|
| Wavelength | λ = c/f, with c = 3.00 × 10⁸ m s⁻¹ |
| AM bandwidth | 2f_M |
| AM frequency range | f_c − f_M to f_c + f_M |
| FM bandwidth | 2(Δf + f_M) |
| TDM bit rate | channels × sampling rate × bits per sample |
| TDM frame period | 1 / sampling rate |
| Time slot per channel | frame period / number of channels |

## Key terms

| Term | Meaning |
|---|---|
| Real-time system | Delivers the message as it happens, such as a phone call |
| Transducer | Converts the message to an electrical signal (input) or back (output) |
| Multiplexer | Combines several channels onto one path |
| Modulator | Puts the information signal onto a carrier |
| Demodulator | Recovers the information signal from the carrier |
| Carrier wave | High-frequency wave that is modulated |
| Information signal | The message, frequency f_M |
| AM | Carrier amplitude varies with the information signal |
| FM | Carrier frequency varies with the information signal; amplitude constant |
| Frequency deviation Δf | Largest change of the FM carrier from its unmodulated frequency |
| Envelope | Outline of the peaks of an AM signal, shaped like the information signal |
| Ground wave | Long-wavelength wave that diffracts around the Earth's surface |
| Sky wave | Wave refracted and reflected back to Earth by the ionosphere |
| De-sensing | Loss of a receiver's sensitivity when swamped by a strong nearby transmission |
| Time slot | Short interval in which one channel's data is sent in TDM |
| Frame | One complete round of time slots |
| Data capacity | Rate at which a channel can carry information; rises with bandwidth |

## Condensed recall

**Block diagram (purpose only).** Input transducer → amplifier → (filter) → ADC → multiplexer → modulator with carrier oscillator → transmitter → path → tuned receiver and amplifier → demodulator → demultiplexer → DAC → amplifier → output transducer.

**Media.**
- Wire: cheap; low bandwidth; attenuation and interference grow with length; easy to tap.
- Optic fibre: very high bandwidth; low attenuation; immune to electrical interference; hard to tap; costly to install.
- Radio: no cable; open to anyone with a receiver; range set by wavelength.
- Microwave: high bandwidth; line of sight; used for satellite links.

**Propagation.**
- Long wavelengths (hundreds of metres or more): ground waves, diffraction around the Earth.
- Short wavelengths (tens of metres): sky waves, refraction and reflection by the ionosphere.
- Microwaves (centimetres): pass through the ionosphere; line of sight; satellites.

**Satellites.** Gigahertz frequencies. Up-link and down-link at different frequencies so the satellite's strong transmitter does not de-sense its own receiver.

**TDM.** Channels take turns in time slots; the receiver separates them by synchronised timing; total bit rate is the sum of the channel rates.

**AM and FM.** Carrier frequency from the fast oscillations; information frequency from the repeat of the envelope (AM) or of the frequency pattern (FM). FM needs more bandwidth but resists amplitude noise.

## Quick-check numbers

| Data | Result |
|---|---|
| f = 198 kHz | λ ≈ 1500 m (ground wave) |
| f = 9.5 MHz | λ ≈ 32 m (sky wave) |
| f = 12 GHz | λ = 2.5 cm (satellite) |
| AM, f_M = 4.0 kHz | bandwidth 8.0 kHz |
| FM, Δf = 60 kHz, f_M = 12 kHz | bandwidth 144 kHz |
| TDM, 30 channels, 8.0 kHz, 8 bits | 1.92 Mbit s⁻¹; frame 125 µs; slot 4.17 µs |

## Exam traps

- Describing circuits inside blocks when only purpose is asked.
- Saying ground waves travel by reflection; they diffract.
- Calling the ionosphere "a mirror": sky waves are refracted gradually until they turn back.
- Explaining the two satellite frequencies as avoiding other users rather than de-sensing.
- AM bandwidth as f_M instead of 2f_M.
- FM bandwidth as 2Δf + f_M instead of 2(Δf + f_M).
- Reading the carrier frequency from the envelope period.
- Forgetting the number of channels in a TDM bit rate.

## Self-test

1. State the purpose of the modulator in a communication system.
2. Why is a multiplexer used?
3. Give one advantage and one disadvantage of optic fibre compared with metal wire.
4. Which type of radio wave diffracts around the Earth's surface?
5. Explain how a sky wave can reach a receiver beyond the horizon.
6. Why do satellite up-links and down-links use different frequencies?
7. A carrier of 600 kHz is amplitude modulated by a 3.0 kHz tone. State the range of frequencies in the signal and the bandwidth.
8. Calculate the FM bandwidth for Δf = 25 kHz and f_M = 5.0 kHz.
9. An AM graph shows 50 carrier oscillations in each 0.10 ms repeat of the envelope. Find the carrier and information frequencies.
10. Twelve channels sampled at 8.0 kHz with 8 bits each share a TDM link. Find the bit rate.
11. For the link in question 10, find the time slot for each channel.
12. Why can an optic fibre carry more data per second than a copper wire?

### Answers

1. It puts the information signal onto a high-frequency carrier suitable for the transmission medium.
2. To send several channels along one transmission path.
3. Advantage, any one: higher bandwidth; lower attenuation; no electrical interference; harder to tap. Disadvantage: expensive to install (or harder to join).
4. Ground waves (long wavelengths).
5. It is refracted by the ionosphere until it is reflected back down to the ground, and can be reflected again by the ground.
6. So the satellite's powerful transmitter does not de-sense its receiver, which must pick up the weak up-link signal.
7. 597 kHz to 603 kHz; bandwidth 6.0 kHz.
8. 2(25 + 5.0) = 60 kHz.
9. Information: 1/0.10 ms = 10 kHz; carrier: 50 × 10 kHz = 500 kHz.
10. 12 × 8000 × 8 = 768 kbit s⁻¹.
11. 125 µs / 12 = 10.4 µs.
12. It has a much larger bandwidth, and data capacity rises with bandwidth.

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.6 Data communication systems (A-level only), within section 3.13 Electronics.
