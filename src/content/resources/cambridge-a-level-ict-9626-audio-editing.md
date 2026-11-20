---
title: "Cambridge A Level Information Technology (9626): Audio editing"
seoTitle: "A Level IT 9626 Audio Editing: Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 11.2 study guide: audio editing features, sampling rate and resolution, file size sums, compression, and MP3, M4A, WAV and AAC formats."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 11.2 Audio editing** of Topic 11 Video and audio editing in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content. Paper 1 Theory asks how and why features are used, and why file sizes depend on sampling; Paper 2 Practical asks you to carry out the edits and exports. The [video and audio editing revision notes](/resources/a-level-cambridge-ict-video-and-audio-editing-revision-notes/) cover the whole topic briefly; this page goes deeper on audio. Use it with the [audio editing revision notes](/resources/cambridge-a-level-ict-9626-audio-editing-revision-notes/) and the [audio editing practice questions](/resources/cambridge-a-level-ict-9626-audio-editing-practice/).

## What section 11.2 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Editing a clip | Edit audio to meet the needs of its application and audience |
| Features | Explain how and why typical features are used |
| Export formats | Give advantages and disadvantages of MP3, MP4a (M4A), WAV and AAC |
| Sampling | Explain why file size depends on sampling rate and sampling resolution |
| Compression | Explain the effect of compression methods on quality, files against containers, and lossy against lossless |

## How sound becomes a file

Sound is an analogue wave. A computer stores it by **sampling**: measuring the height of the wave many times per second and storing each measurement as a number.

- **Sampling rate** is the number of samples taken each second, in hertz (Hz). A higher rate captures the wave more often, so it records higher pitches and follows the shape of the wave more closely. Telephone-quality speech uses about 8,000 Hz. Music on a compact disc uses 44,100 Hz.
- **Sampling resolution** (bit depth) is the number of bits used to store each sample. More bits means more possible levels, so the stored wave is a closer copy of the original and background hiss is lower. 8 bits gives 256 levels. 16 bits gives 65,536.

Higher rate and higher resolution give better quality, but the file is larger.

### Calculating file size

For uncompressed audio:

**file size in bits = sampling rate × resolution × number of channels × time in seconds**

Divide by 8 for bytes.

**Worked example 1: a stereo recording.** A 3-minute (180 second) song is recorded at 44,100 Hz, 16 bits, stereo (two channels).

1. Bits per second = 44,100 × 16 × 2 = 1,411,200.
2. Bits for 180 seconds = 1,411,200 × 180 = 254,016,000.
3. Bytes = 254,016,000 ÷ 8 = 31,752,000, about **31.8 MB**.

**Worked example 2: halving by converting to mono.** The same song in mono has one channel, so the size is halved: 31,752,000 ÷ 2 = 15,876,000 bytes, about **15.9 MB**.

**Worked example 3: lowering the rate.** A 60-second telephone message is recorded at 8,000 Hz, 8 bits, mono. Bits = 8,000 × 8 × 1 × 60 = 3,840,000. Bytes = 480,000, which is **0.48 MB**. Speech is still understandable, but music would sound dull and thin because high frequencies are lost.

## Importing and building up a project

- **Importing new tracks** brings existing recordings into the project.
- **Adding a track** to an existing clip layers one sound on another, such as music beneath speech. Each track can have its own volume, so one sound does not drown out another.
- **Splicing** joins two clips end to end. Place the join at a quiet point, or add a short fade, to avoid a click.
- **Trimming** removes unwanted material, such as silence before a speaker starts, or a cough.

## Level and clean-up

**Normalising** adjusts the whole clip so that its loudest peak reaches a chosen level. It is a fixed adjustment of volume, so quiet recordings become louder without distortion and several clips end up at a matching level. Normalising can also **remove a DC offset**. A DC offset is when the wave is centred slightly above or below the zero line instead of on it. It wastes headroom and can cause a click at the start or end of a clip. Removing it re-centres the wave.

**Noise reduction** lowers constant background sound such as hiss, hum or the whirr of a fan. The usual method is to select a short section containing only the noise, let the software learn its pattern, and then reduce that pattern across the clip. Too much reduction makes speech sound thin and robotic, so apply it gently.

**Equalisation (EQ)** changes the volume of selected frequency ranges. A **high pass filter** lets high frequencies through and removes low ones, so it clears low rumble and wind. A **low pass filter** lets low frequencies through and removes high ones, so it softens hiss. Boosting the middle range can make a voice clearer.

## Changing time, pitch and space

- **Fading in and out** raises the volume smoothly from silence at the start and lowers it at the end, avoiding an abrupt start or stop.
- **Altering speed** changes how fast the clip plays. In many editors this also changes the pitch, as with a record played too fast.
- **Changing pitch** makes the sound higher or lower, with or without changing speed. It can correct a note or disguise a voice.
- **Delay or echo** repeats the sound a short time later, giving a sense of a large space or a special effect.
- **Reverberation** adds many overlapping reflections that fade quickly, as in a hall. It makes a dry recording sound as if it was made in a room.
- **Stereo to mono** combines two channels into one. It halves the file size and suits speech, voice recordings or systems with one speaker.

**Overdubbing** records a new track while playing existing tracks. It is used for a **voiceover** on a video or presentation, or to add a second vocal part. Wearing headphones stops the existing sound being picked up by the microphone.

## Why typical features are used

| Feature | Why it is used |
|---|---|
| Trimming | Removes unwanted material and shortens the file |
| Splicing | Joins clips into one continuous piece |
| Fading in and out | Avoids sudden starts and stops, and blends clips |
| Normalising | Brings the clip to a consistent, undistorted level |
| Noise reduction | Makes speech clear by removing hiss and hum |
| Overdubbing and voiceover | Adds commentary or extra parts without re-recording everything |
| Exporting in different formats | Matches the player and the way the audio is shared |
| Compressing | Reduces file size for storage, streaming and downloads |

## Compression

**Lossless compression** reduces file size but allows the original data to be restored exactly, in a similar way to zipping a file. Files are about half the size of uncompressed audio, and quality is not affected.

**Lossy compression** permanently removes data. Audio compressors remove sounds that the human ear is least likely to notice, such as very high frequencies, or quiet sounds masked by a louder sound at the same time. Files can be a tenth of the original size. Quality falls as compression increases, giving a thin, "watery" sound at low bit rates, and the discarded data cannot be recovered. Repeated saving in a lossy format makes quality worse each time, so edit in an uncompressed or lossless format and compress only at the end.

**Worked example 4: effect of compression.** The 4-minute (240 second) CD-quality stereo song needs 44,100 × 16 × 2 × 240 ÷ 8 = 42,336,000 bytes, about 42.3 MB. Compressed to 128 kilobits per second it needs 128,000 × 240 ÷ 8 = 3,840,000 bytes, about 3.8 MB. That is roughly 11 times smaller, so the song can be streamed over a slow connection and many songs fit on a phone.

### Compressing to different sample rates

Lowering the sample rate shrinks the file and suits the medium. 8,000 to 22,050 Hz may be enough for speech podcasts or telephone systems. 44,100 Hz or above suits music. The highest frequency that can be stored is about half the sample rate, so 22,050 Hz cannot hold sounds above about 11,000 Hz.

## Files and containers

A **file format** can be a **container**, a wrapper holding the audio data and information such as the title, artist and track length, or the compressed audio itself. A container such as M4A can hold audio compressed in different ways. So "saving in files v containers" means knowing that the name of the file type does not by itself tell you whether the audio inside is lossy or lossless. You also need to know which codec was used.

## Export formats

| Format | Compression | Advantages | Disadvantages |
|---|---|---|---|
| MP3 | Lossy | Small files; plays on almost every device and website | Quality loss; at the same size, AAC usually sounds better |
| MP4a (M4A) | Container, usually with AAC; sometimes lossless | Good quality for the size; supported on most modern devices; stores track information | Older equipment may not play it |
| WAV | Usually uncompressed | Full quality, ideal for editing and archiving | Very large files; not suited to streaming or phones |
| AAC | Lossy | Better quality than MP3 at a similar size; used for streaming | Less supported on very old devices |

Use WAV while editing, and export to MP3 or AAC for sharing.

## Common mistakes

- Forgetting to multiply by the number of channels in a file-size sum.
- Dividing by 8 twice, or not at all, when converting bits to bytes.
- Saying a higher sampling rate gives "louder" sound. It gives a closer copy of the wave, and a wider range of pitch.
- Mixing up sampling rate (how often) and sampling resolution (how detailed each measure is).
- Saying lossless files can be smaller than lossy files. They are normally larger.
- Describing normalising as "making everything the same volume". It adjusts the clip to a peak level, and does not even out loud and quiet parts of one recording.
- Using the same filter for rumble and for hiss. Rumble needs a high pass filter, hiss needs a low pass filter.

## Exam technique

- **Explain why a file size depends on sampling**: link both rate and resolution to the amount of data per second, and show the arithmetic if values are given.
- **Describe how** a feature works, then **why** it is used. Many questions need both.
- **Compare formats** using compression type, file size, quality and device support.
- In calculations, state the formula, show each stage, and give the unit.
- Name the format exactly as asked in Paper 2, such as WAV, MP3, AAC or M4A.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 11 Video and audio editing, section 11.2 Audio editing.
