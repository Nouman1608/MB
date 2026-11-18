---
title: "AQA A-Level Physics (7408): Data communication systems -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original practice questions with mark-scheme answers on AQA A-Level Physics 7408 section 3.13.6: system blocks, media, propagation, TDM, AM and FM."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers from your board or school.

These questions cover section 3.13.6, Data communication systems, of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Electronics option assessed in Paper 3 Section B. Learn the content first with the [data communication systems study guide](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel/) and the [data communication systems revision notes](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-revision-notes/). Take c = 3.00 × 10⁸ m s⁻¹.

## Questions

### Section A: short questions

**1.** State the purpose of:

**(a)** the demodulator in a radio receiver. **[1]**
**(b)** the output transducer. **[1]**

**2.** A transmitter broadcasts at 225 kHz. Calculate the wavelength and state how the signal mainly travels to distant receivers. **[2]**

**3.** Explain why a communications satellite receives on one frequency and transmits on another. **[2]**

**4.** An information signal of 10 kHz is sent by AM on one channel and by FM, with a frequency deviation of 40 kHz, on another. Calculate the bandwidth of each. **[2]**

**5.** Give two reasons why an audio signal is used to modulate a high-frequency carrier rather than being transmitted directly as radio waves. **[2]**

**6.** Explain why an FM signal is less affected by noise than an AM signal. **[2]**

### Section B: structured questions

**7.** A digital telephone link has the stages: microphone → amplifier → ADC → multiplexer → modulator → transmitter → path → tuned receiver → demodulator → demultiplexer → DAC → amplifier → earpiece.

**(a)** State the purpose of the ADC, the multiplexer and the tuned receiver. **[3]**
**(b)** Explain why an amplifier is needed after the tuned receiver. **[1]**

**8.** A company needs to link two offices 5 km apart. The link must carry about 400 Mbit s⁻¹ of confidential data. Compare metal wire, optic fibre and a microwave link for this purpose, referring to data rate, cost and security, and recommend one. **[6]**

**9.** A voltage–time graph of an AM signal shows carrier oscillations with a period of 2.0 µs. The envelope repeats every 0.40 ms.

**(a)** Calculate the carrier frequency. **[1]**
**(b)** Calculate the information frequency. **[1]**
**(c)** State the range of frequencies in the signal and its bandwidth. **[2]**
**(d)** Calculate how many channels of this bandwidth fit between 500 kHz and 1500 kHz. **[1]**

**10.** **(a)** Describe the appearance of a voltage–time graph of a carrier frequency modulated by a sine-wave information signal. **[2]**
**(b)** FM stations use Δf = 75 kHz and f_M = 15 kHz. Calculate the largest number of stations that can share a band 20 MHz wide without overlapping. **[2]**

**11.** A digital link carries 24 speech channels by time-division multiplexing. Each channel is sampled at 8.0 kHz with 8 bits per sample. Each frame also contains one extra bit used for synchronisation.

**(a)** Calculate the number of bits in each frame. **[1]**
**(b)** Calculate the bit rate of the link. **[1]**
**(c)** Explain why the receiver needs synchronisation. **[1]**
**(d)** Explain why the link needs a much greater bandwidth than a single channel. **[1]**

**12.** A broadcaster transmits at 9.5 MHz to listeners about 3000 km away.

**(a)** Explain how the signal reaches the listeners. **[3]**
**(b)** Explain why a 2.4 GHz signal from the same transmitter would not reach them. **[2]**

## Answers

**1. (a)** To recover (separate) the information signal from the modulated carrier [1]
**(b)** To convert the electrical signal back into the original form of the message, such as sound from a loudspeaker [1] **[2]**
*Examiner insight:* "Demodulates the signal" restates the name and gains nothing.

**2.** λ = 3.00 × 10⁸/2.25 × 10⁵ = 1330 m (1.33 km) [1]; a long wavelength, so it travels as a ground wave, diffracting around the Earth's surface [1] **[2]**
*Examiner insight:* The process (diffraction) is needed, not just the name "ground wave".

**3.** The satellite's transmitter is powerful and close to its receiver, while the up-link signal from Earth is very weak [1]. On the same frequency, the transmission would swamp (de-sense) the receiver, so different frequencies keep it sensitive to the up-link [1]. **[2]**
*Examiner insight:* Answers about interference with other satellites miss the point the specification makes.

**4.** AM: 2 × 10 = 20 kHz [1]; FM: 2(40 + 10) = 100 kHz [1] **[2]**
*Examiner insight:* Writing 2 × 40 + 10 = 90 kHz for FM is the most common slip.

**5.** Any two of: many stations can share the airwaves by using different carrier frequencies; audio-frequency radio waves would need impractically large aerials; the carrier frequency can be chosen to suit the medium and the range required (for example ground or sky waves) [2] **[2]**
*Examiner insight:* "So it travels further" alone is too vague for credit.

**6.** Noise mainly changes the amplitude of the received signal [1]. In FM the information is in the frequency, so the receiver can ignore amplitude changes, whereas in AM the amplitude carries the information and the noise is demodulated with it [1]. **[2]**
*Examiner insight:* Contrast where the information is held in each method.

**7. (a)** ADC: samples and quantises the analogue signal so it can be sent as binary codes [1]. Multiplexer: combines several channels onto one transmission path [1]. Tuned receiver: selects the wanted carrier frequency and rejects others [1].
**(b)** The received signal is very weak after attenuation along the path, so it must be amplified before it can be demodulated and processed [1] **[4]**
*Examiner insight:* One clear purpose per block is all that is required; do not describe circuits.

**8.** Marked by points here for self-checking; in the exam a discussion may be marked by levels. A strong answer covers:
- Data rate: 400 Mbit s⁻¹ is well within the bandwidth of optic fibre and of a microwave link, but metal wire over 5 km has too little bandwidth and too much attenuation [1].
- Cost: wire is cheapest per metre; fibre is expensive to lay along a 5 km route; microwave needs only two dishes with line of sight, so it avoids digging [1].
- Security: wire is easy to tap and radiates its signal; microwave beams can be intercepted by a receiver in the beam unless the data is encrypted [1].
- Fibre is very hard to tap without detection and is immune to electrical interference [1].
- Microwaves need a clear line of sight between the offices, and heavy rain can weaken them [1].
- Recommendation with a reason, for example optic fibre for its high data rate and security despite the installation cost, or microwave if digging is impossible [1].

**[6]**
*Examiner insight:* Use the three headings the specification names; a recommendation without a reason earns nothing.

**9. (a)** 1/2.0 µs = 500 kHz [1]
**(b)** 1/0.40 ms = 2.5 kHz [1]
**(c)** 497.5 kHz to 502.5 kHz [1]; bandwidth 2 × 2.5 = 5.0 kHz [1]
**(d)** 1000 kHz/5.0 kHz = 200 channels [1] **[5]**
*Examiner insight:* Using the envelope period for the carrier gives 2.5 kHz in (a) and loses most marks.

**10. (a)** The amplitude stays constant [1]; the waves are alternately crowded together and spread out, repeating at the information frequency [1]
**(b)** Bandwidth = 2(75 + 15) = 180 kHz [1]; 20 MHz/180 kHz = 111 stations [1] **[4]**
*Examiner insight:* Round the number of stations down: 111.1 means 111 complete channels.

**11. (a)** 24 × 8 + 1 = 193 bits [1]
**(b)** 193 × 8000 = 1.544 × 10⁶ bit s⁻¹ [1]
**(c)** Each time slot belongs to one channel, so the receiver must know where each frame starts in order to send each slot's bits to the correct output [1]
**(d)** All 24 channels' bits must be sent in the time one channel would take, so the bit rate, and hence the bandwidth, is about 24 times greater [1] **[4]**
*Examiner insight:* One frame is sent per sampling interval, so multiply the bits per frame by the sampling rate.

**12. (a)** λ = 3.00 × 10⁸/9.5 × 10⁶ ≈ 32 m, a short wavelength that travels as a sky wave [1]. It is refracted by the ionosphere until it is reflected back down to Earth [1]. It may be reflected by the ground and again by the ionosphere, so it reaches receivers far beyond the horizon [1].
**(b)** At 2.4 GHz the waves pass through the ionosphere instead of returning to Earth [1], and their short wavelength (about 12.5 cm) means negligible diffraction around the Earth, so they need line of sight [1] **[5]**
*Examiner insight:* "Bounces off the atmosphere" is too vague; name the ionosphere and refraction.

## Where marks are usually lost

- Describing block circuits instead of their purpose.
- Missing the diffraction or refraction process in propagation answers.
- Explaining satellite frequencies without mentioning de-sensing.
- Using 2Δf + f_M for FM bandwidth.
- Taking the carrier frequency from the envelope.
- Forgetting synchronisation bits or the number of channels in TDM.
- Recommending a medium without a reason.

## Next steps

- Recap with the [data communication systems revision notes](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel-revision-notes/).
- Re-read the [data communication systems study guide](/resources/aqa-a-level-physics-7408-data-communication-systems-aqa-alevel/).
- Revise sampling and PCM with the [analogue and digital signals practice questions](/resources/aqa-a-level-physics-7408-analogue-and-digital-signals-aqa-alevel-practice/).

## Official syllabus

AQA AS and A-level Physics (7407/7408) specification, AS and A-level exams June 2016 onwards, published by AQA. Section 3.13.6 Data communication systems (A-level only), within section 3.13 Electronics.
