---
title: "Cambridge A Level Information Technology (9626): Audio editing -- Practice Questions"
seoTitle: "A Level IT 9626 Audio Editing: Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 11 – Video and audio editing"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 11.2
syllabusTopics:
  - qualification: "a-level"
    topic: "video-and-audio-editing"
  - qualification: "a-level"
    topic: "video-and-audio-editing"
    subtopic: "audio-editing"
description: "Thirteen original Cambridge 9626 IT section 11.2 questions with answers on audio features, sampling sums, compression and file formats."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Audio editing study guide](/resources/cambridge-a-level-ict-9626-audio-editing/) | [Audio editing revision notes](/resources/cambridge-a-level-ict-9626-audio-editing-revision-notes/)

These questions are for **section 11.2 Audio editing** (Topic 11, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Calculators are not allowed in the theory paper, so the numbers are chosen to be worked by hand. All organisations are invented.

---

## Section A

**1.** Define the term sampling rate. **[1]**

**2.** State what is meant by an 8-bit sampling resolution, including the number of levels it provides. **[2]**

**3.** Describe what normalising does to an audio clip. **[2]**

**4.** State **two** reasons for fading an audio clip in and out. **[2]**

**5.** Identify the filter that removes low-frequency rumble from a recording, and the filter that reduces high-frequency hiss. **[2]**

**6.** Describe the difference between lossy and lossless compression. **[2]**

## Section B

**7.** A sound is recorded at a sampling rate of 12,000 Hz.

**(a)** State the highest frequency that this recording can store. **[1]**

**(b)** Explain why a recording of a flute, which produces high notes, may sound dull at this rate. **[2]**

**8.** A 20-second mono clip is recorded at 22,050 Hz with a resolution of 8 bits.

**(a)** Calculate the size of the file in bytes. Show your working. **[3]**

**(b)** The clip is re-recorded as stereo with the same settings. State the new size and explain your answer. **[2]**

**9.** Marlow Podcasts stores a 2-minute interview at 44,100 Hz, 16 bits, in stereo.

**(a)** Calculate the size of the uncompressed file in bytes. **[3]**

**(b)** The interview is changed to mono. State the new size in bytes. **[1]**

**(c)** The mono file is then exported at 96 kilobits per second. Calculate the size of the exported file in bytes. **[2]**

**10.** Explain why a studio might edit audio in WAV format and export to MP3 only at the end. **[4]**

**11.** Describe how **noise reduction** is used on a recording of a lecture made in a room with a noisy projector fan. **[4]**

**12.** A local radio station records a voiceover for an advert. The producer wants to add music underneath, change the voiceover to be heard in a large hall and send a compact file to a presenter's phone.

**(a)** Name **two** audio editing features that would help the producer and say what each does. **[4]**

**(b)** Evaluate MP3 and WAV for sending the final advert to the presenter's phone. **[5]**

**13.** Explain the difference between a file format and a container when saving audio, and why the name of a file type does not show whether the audio is lossy. **[4]**

---

## Answers

**1.** The number of samples of the sound wave taken each second, measured in hertz [1]. **[1]**

**2.** Each sample is stored using 8 bits [1], giving 2 to the power 8 = 256 possible levels [1]. **[2]**

**3.** It adjusts the whole clip so that the loudest peak reaches a chosen level [1], and it can remove a DC offset by re-centring the wave on zero [1]. **[2]**

**4.** Any two from: avoids an abrupt start or stop [1]; blends one clip into the next [1]; avoids a click when the clip begins or ends [1]; signals the start or end of a piece [1]. **[2]**

**5.** A high pass filter removes low-frequency rumble [1]. A low pass filter reduces high-frequency hiss [1]. **[2]**

**6.** Lossy compression permanently removes some data, so the original cannot be restored [1], but it gives a much smaller file. Lossless compression keeps all the data so the original can be rebuilt exactly [1], but the file is larger. **[2]**

**7. (a)** 6,000 Hz [1] (half the sampling rate).

**(b)** A flute produces high frequencies, some of which are above 6,000 Hz [1]. These are not stored, so the recording loses its bright upper range and sounds dull [1]. **[3]**

**8. (a)** Bits = 22,050 × 8 × 1 × 20 [1] = 3,528,000 bits [1]. Bytes = 3,528,000 ÷ 8 = 441,000 [1].

**(b)** 882,000 bytes [1], because stereo has two channels and so twice as much data [1]. **[5]**

**9. (a)** Bits = 44,100 × 16 × 2 × 120 [1] = 169,344,000 bits [1]. Bytes = 169,344,000 ÷ 8 = 21,168,000 [1].

**(b)** 10,584,000 bytes [1].

**(c)** 96,000 × 120 ÷ 8 [1] = 1,440,000 bytes [1]. **[6]**

**10.** WAV is usually uncompressed, so no data is lost while editing [1]. Each time a lossy file such as MP3 is saved, more data is discarded [1], so repeated editing and saving would reduce quality further [1]. Exporting to MP3 once at the end gives a small file for sharing while limiting the loss to a single step [1]. **[4]**

**11.** Select a short section of the recording that has only the fan noise [1]. The software analyses it to learn the pattern of the noise [1]. The same pattern is then reduced across the whole recording [1]. It should be applied gently, because too much reduction makes the speaker's voice sound thin or distorted [1]. **[4]**

**12. (a)** Any two features, each with a description of what it does ([1] for the feature and [1] for the description): adding a track, which layers music under the voiceover [2]; reverberation, which adds fading reflections so that the voice sounds as if in a large hall [2]; fading, which brings the music in and out smoothly [2]; normalising, which sets both tracks to a suitable level [2].

**(b)** MP3 is lossy [1] so the file is small and quick to send and uses little storage on a phone [1]; it plays on almost all phones [1]. WAV keeps full quality [1], but the file is very large and may use up the phone's storage and data allowance [1]. Conclusion: MP3, or AAC, because a phone speaker cannot show the full quality of WAV, and file size matters more [1]. Maximum 5 marks. **[9]**

**13.** A format is how the audio data is arranged and compressed [1]. A container is a wrapper that holds the audio data together with details such as the title and artist [1]. The same container, such as M4A, can hold audio compressed in different ways [1], so the file type alone does not show whether the data inside is lossy or lossless; you need to know which codec was used [1]. **[4]**

## Where marks are usually lost

- Forgetting the number of channels, or dividing by 8 twice, in size calculations.
- Calling a frequency limit "the sampling rate" instead of half the sampling rate.
- Saying lossy compression "reduces the file" without mentioning permanent loss of data.
- Mixing up the high pass and low pass filters.
- Choosing a format without referring to the device or the file size.
