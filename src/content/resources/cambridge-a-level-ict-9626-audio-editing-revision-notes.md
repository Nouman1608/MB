---
title: "Cambridge A Level Information Technology (9626): Audio editing -- Revision Notes"
seoTitle: "A Level IT 9626 Audio Editing: Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge 9626 IT section 11.2: audio features, sampling sums, compression, file formats and a twelve-question self-test with answers."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

These notes condense **section 11.2 Audio editing** (Topic 11 Video and audio editing) of the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. AS Level content, examined in Paper 1 Theory and in the practical Paper 2. Full explanations and worked sums are in the [audio editing study guide](/resources/cambridge-a-level-ict-9626-audio-editing/); test yourself with the [audio editing practice questions](/resources/cambridge-a-level-ict-9626-audio-editing-practice/).

## The five strands

1. Edit a clip to suit its application and audience.
2. Explain how and why typical features are used.
3. Give advantages and disadvantages of export formats.
4. Explain why file size depends on sampling rate and resolution.
5. Explain the effects of compression, files against containers, lossy against lossless.

## Key terms

| Term | Meaning |
|---|---|
| Sampling | Measuring the height of a sound wave at regular intervals and storing each measurement |
| Sampling rate | Samples taken per second, in hertz |
| Sampling resolution | Bits used to store each sample (bit depth) |
| Channel | One stream of audio: mono has one, stereo has two |
| Bit rate | Bits of audio data per second |
| Normalising | Adjusting a whole clip so its loudest peak reaches a set level |
| DC offset | The wave sitting above or below the zero line instead of centred on it |
| Equalisation | Changing the volume of chosen frequency ranges |
| High pass filter | Lets high frequencies through, removes low ones |
| Low pass filter | Lets low frequencies through, removes high ones |
| Overdubbing | Recording a new track while playing existing ones |
| Lossy | Compression that permanently removes data |
| Lossless | Compression that allows exact restoration |
| Container | A wrapper file holding audio data and information about it |

## Sampling: the main sum

**File size (bits) = rate × resolution × channels × seconds. Divide by 8 for bytes.**

- Higher **rate**: closer follows the wave and covers higher pitches. Highest storable frequency is about **half** the rate.
- Higher **resolution**: more levels per sample, so a closer copy and less hiss. 8 bits gives 256 levels, 16 bits gives 65,536.
- Both make files bigger.

**Quick example.** 60 seconds, 22,050 Hz, 16 bits, mono: 22,050 × 16 × 1 × 60 = 21,168,000 bits = 2,646,000 bytes, about **2.6 MB**.

**Quick example.** Same clip in stereo: 2 × 2,646,000 = 5,292,000 bytes, about **5.3 MB**.

**CD quality** is 44,100 Hz, 16 bits, stereo: 1,411,200 bits per second, about 10.6 MB per minute.

**Telephone speech** is about 8,000 Hz, 8 bits, mono: 480,000 bytes per minute.

## Features: how and why

| Feature | How | Why |
|---|---|---|
| Import tracks | Bring recordings into the project | Reuse existing material |
| Add a track | Layer a new track on the clip | Music under speech |
| Trim | Cut start or end | Remove silence, coughs, mistakes |
| Splice | Join two clips | One continuous piece |
| Fade in and out | Raise or lower volume gradually | Avoid abrupt starts and stops |
| Normalise | Set peak level; remove DC offset | Consistent volume without clipping; remove clicks |
| Noise reduction | Sample the noise, then reduce it | Clear hiss, hum, fan noise |
| Overdub | Record over playing tracks | Voiceovers, extra parts |
| Speed | Faster or slower | Fit a time slot; effect |
| Pitch | Higher or lower | Correct a note; disguise a voice |
| Delay or echo | Repeat sound after a short gap | Sense of distance or effect |
| Reverberation | Many fast-fading reflections | Make a dry recording sound as if in a room |
| Stereo to mono | Combine two channels | Half the size; suits speech |
| EQ, high and low pass | Boost or cut frequency bands | Remove rumble (high pass) or hiss (low pass); clarify voices |
| Compress to a sample rate | Lower the sample rate | Smaller file for the medium |
| Export | Save in a chosen format | Match the player or the sharing method |

## Compression

| | Lossless | Lossy |
|---|---|---|
| Data | All kept, can be restored | Some permanently removed |
| Size | About half of uncompressed | Often a tenth or less |
| Quality | Unchanged | Falls as compression rises |
| Use | Archive, editing, high quality | Streaming, downloads, phones |

- Lossy methods remove sounds the ear is least likely to notice: very high frequencies and quiet sounds masked by louder ones.
- Heavy lossy compression sounds thin, "watery" or full of artefacts.
- Do not save repeatedly in a lossy format. Edit in WAV, compress last.
- **Files v containers:** a container (such as M4A) wraps audio and details such as title and artist. The same container can hold lossy or lossless audio, so the container name does not tell you the compression.

**Quick example.** 4 minutes of CD-quality stereo is about 42.3 MB. At 128 kilobits per second it is 128,000 × 240 ÷ 8 = 3,840,000 bytes, about 3.8 MB, about 11 times smaller.

## Export formats

| Format | Type | For | Against |
|---|---|---|---|
| MP3 | Lossy | Small; plays almost everywhere | Quality loss |
| MP4a (M4A) | Container, usually AAC | Good quality for the size; keeps track details | Older devices may not play it |
| WAV | Usually uncompressed | Full quality; ideal for editing | Very large |
| AAC | Lossy | Better than MP3 at similar size | Less support on very old devices |

## Exam traps

- Leaving out the number of channels in a file size sum.
- Mixing up sampling rate and sampling resolution.
- Saying a higher sampling rate makes the sound louder.
- Claiming a lossy file can be restored to the original.
- Choosing a format without a reason tied to size, quality or device.
- Mixing up high pass and low pass filters.
- Describing a feature without saying why it is used.

## Self-test

1. Define sampling rate.
2. Define sampling resolution.
3. State why a file with a higher sampling resolution is larger.
4. Calculate the size in bytes of a 10-second mono clip at 8,000 Hz and 16 bits.
5. What happens to the file size when stereo is converted to mono?
6. State what normalising does.
7. Which filter removes low-frequency rumble?
8. Give one reason for fading in and out.
9. Give one advantage and one disadvantage of WAV.
10. State the difference between lossy and lossless compression.
11. Why is an audio file not always lossy because it is in a container?
12. Why is it best to edit in WAV and export to MP3 at the end?

### Answers

1. The number of samples taken each second, measured in hertz.
2. The number of bits used to store each sample.
3. More bits are stored for every sample, so the total number of bits is greater.
4. 8,000 × 16 × 1 × 10 = 1,280,000 bits, which is 160,000 bytes.
5. It is halved, as there is one channel instead of two.
6. Adjusts the whole clip so that its loudest peak reaches a set level, and can remove a DC offset.
7. A high pass filter.
8. Avoids an abrupt start or stop, or blends the clip smoothly with another.
9. Advantage: full quality, ideal for editing. Disadvantage: very large files.
10. Lossy permanently removes data and gives smaller files; lossless keeps all data so the original can be restored.
11. A container only wraps the data. The compression used inside depends on the codec, so the same container can hold lossy or lossless audio.
12. Each save in a lossy format loses more quality, so editing in an uncompressed format avoids repeated loss, and compression is applied once at the end.
