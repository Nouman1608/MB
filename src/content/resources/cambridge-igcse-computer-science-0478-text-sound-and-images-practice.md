---
title: "Cambridge IGCSE Computer Science (0478): Text, sound and images -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 1: Data representation"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 1.2
syllabusTopics:
  - qualification: "igcse"
    topic: "data-representation-0478"
    subtopic: "text-sound-and-images-0478"
description: "Fourteen original Cambridge IGCSE Computer Science 0478 questions on ASCII and Unicode, sound sampling, resolution and colour depth, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover **1.2 Text, sound and images** in Topic 1, Data representation, of the Cambridge IGCSE
Computer Science 0478 syllabus for 2026 to 2028. File-size calculations are practised separately in the
[Data storage and compression practice questions](/resources/cambridge-igcse-computer-science-0478-data-storage-and-compression-practice/).

Related: [Text, sound and images study guide](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images/)
and [Text, sound and images revision notes](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images-revision-notes/)

---

## Section A

**1.** State what is meant by a character set. **[2]**

**2.** State the number of bits ASCII uses for each character. **[1]**

**3.** The ASCII code for A is 65. State the denary ASCII code for K. **[1]**

**4.** Define the term sample resolution. **[1]**

**5.** An image has a colour depth of 5 bits. State how many different colours each pixel can be. **[1]**

**6.** Define the term image resolution. **[1]**

## Section B

**7.** A company is building a messaging app that will be used worldwide.

**(a)** Explain why the app should use Unicode rather than ASCII. **[2]**
**(b)** State one drawback of using Unicode. **[1]**

**8.** The ASCII code for A is 65 (1000001 in 7-bit binary).

**(a)** Write the word BAD in 7-bit ASCII binary. **[3]**
**(b)** A message arrives as 1001000 1101001. The code for H is 72 and the code for i is 105. Decode the message. **[1]**

**9.** Describe how a computer converts a sound into a form it can store. **[4]**

**10.** A recording is made twice: once with a sample resolution of 4 bits and once with 8 bits. The sample rate is
the same.

**(a)** Calculate the number of possible amplitude values for each resolution. **[2]**
**(b)** Explain which recording is more accurate, and the effect on its file size. **[2]**

**11.** A music streaming service reduces the sample rate of its recordings.

**(a)** Explain the effect on the sound quality. **[2]**
**(b)** Explain the effect on the file size. **[1]**

**12.** A graphic designer is choosing a colour depth.

**(a)** Calculate the minimum colour depth needed to display 1000 different colours. **[2]**
**(b)** Explain the effect of increasing the colour depth on the quality and file size of the image. **[2]**

**13.** A photographer reduces the resolution of a photo from 4000 × 3000 pixels to 800 × 600 pixels before emailing it.
Explain the effect on the image and on the file. **[3]**

**14.** A school logo is stored with a colour depth of 1 bit.

**(a)** State how many colours the logo can contain, and explain why. **[2]**
**(b)** The school wants a version of the logo with 256 colours. State the colour depth needed. **[1]**

---

## Answers

**1.** The set of characters a computer can represent [1]; each character has a unique binary code [1]

**2.** 7 bits [1]

**3.** K is 10 letters after A: 65 + 10 = **75** [1]

**4.** The number of bits used to store each sample [1]

**5.** 2⁵ = **32** [1]

**6.** The number of pixels in the image [1]
*Examiner insight:* "How clear the image is" describes an effect of resolution, not what it is, and earns no mark.

**7. (a)** ASCII can only represent 128 (or 256) characters, mainly English letters and symbols [1]; Unicode represents a much greater range, including characters from many languages and emojis, which worldwide users need [1]
**(b)** Unicode uses more bits per character, so messages take more storage (or more data to transmit) [1] **[3]**

**8. (a)** B = 66 = **1000010** [1]; A = **1000001** [1]; D = 68 = **1000100** [1]
**(b)** **Hi** [1] **[4]**

**9.** Sound is an analogue wave [1]; the amplitude of the wave is measured (sampled) [1]; at regular intervals, set by the sample rate [1]; each measurement is stored as a binary number with a set number of bits (the sample resolution) [1]

**10. (a)** 4 bits: 2⁴ = **16** [1]; 8 bits: 2⁸ = **256** [1]
**(b)** The 8-bit recording is more accurate, because each sample can be stored closer to the true amplitude [1]; its file size is larger (twice as large for the same number of samples) [1] **[4]**

**11. (a)** Fewer samples are taken each second [1]; so the digital version follows the original wave less closely and the sound quality (accuracy) is lower [1]
**(b)** Fewer samples are stored, so the file size decreases [1] **[3]**

**12. (a)** 2⁹ = 512, which is too few [1]; 2¹⁰ = 1024, so **10 bits** [1]
**(b)** More colours can be represented, so the image is more realistic, with smoother shading [1]; more bits are stored for each pixel, so the file size increases [1] **[4]**
*Examiner insight:* An answer of 9 bits in (a) shows the student found the nearest power of 2, not the smallest one that is large enough.

**13.** The image has fewer pixels, so it shows less detail [1]; it may look pixelated (blocky) if it is enlarged [1]; fewer pixels are stored, so the file is much smaller and quicker to email [1]
*Examiner insight:* In "explain the effect" questions, the mark for the file usually needs the reason (fewer pixels stored), not just "the file is smaller".

**14. (a)** **2** colours [1]; each pixel is stored as a single bit, which can only be 0 or 1 [1]
**(b)** **8 bits** (2⁸ = 256) [1] **[3]**

---

## Where marks are usually lost

- Describing a character set without mentioning the unique binary code for each character.
- Claiming Unicode makes files smaller.
- Saying sampling measures frequency or pitch instead of amplitude.
- Swapping sample rate and sample resolution.
- Using 2 × n instead of 2ⁿ for the number of colours or levels.
- Stating only the quality effect, or only the file-size effect, of a change.

## Next steps

- [Text, sound and images study guide](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images/)
- [Text, sound and images revision notes](/resources/cambridge-igcse-computer-science-0478-text-sound-and-images-revision-notes/)
- [Data Representation practice questions](/resources/data-representation-practice/) for the whole topic

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 1 Data
representation, 1.2 Text, sound and images.
