---
resourceId: "mb-ap-csp-2.2-study-guide"
title: "Data Compression: Study Guide (Computer Science Principles 2.2)"
description: "What compression is, how lossless and lossy methods differ, run-length encoding with calculations, redundancy, and how to choose a method for a situation, with two worked examples."
course: "computer-science-principles"
unit: 2
topics: ["2.2"]
resourceType: "study-guide"
prerequisites: 
  - "Topic 2.1 (bits, bytes and how data are stored in binary)"
  - "Percentages and simple fractions by hand"
prerequisiteResources: ["mb-ap-csp-2.1-study-guide"]
learningObjectives: 
  - "Explain what data compression is and why fewer bits does not always mean less information"
  - "Distinguish lossless from lossy compression and state what each guarantees"
  - "Apply a simple run-length scheme and calculate the size reduction"
  - "Choose lossless or lossy compression for a described situation and justify the choice"
skills: ["1", "3", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "No calculator is allowed in this course. Any arithmetic is small enough to do by hand."
related: ["mb-ap-csp-2.2-revision-notes", "mb-ap-csp-2.2-practice", "mb-ap-csp-2.2-checklist"]
next: "mb-ap-csp-2.2-practice"
sources: ["ced-computer-science-principles", "page-computer-science-principles"]
keyPoints: 
  - "Data compression reduces the number of bits needed to store or transmit data."
  - "Lossless compression allows complete reconstruction of the original; lossy compression allows only an approximation."
  - "Lossy methods can usually reduce size more than lossless methods."
  - "How much size is saved depends on the redundancy in the data and the algorithm used."
  - "Choose lossless when quality or exact reconstruction matters most; choose lossy when small size or fast transmission matters most."
faqs:
  - question: "Does compressing a file always make it smaller?"
    answer: "No. A method that works well on data with a lot of repetition may do nothing, or even make the file larger, on data with little repetition. The saving depends on both the data and the algorithm."
  - question: "Can I get the original back after lossy compression?"
    answer: "Not exactly. Lossy compression lets you reconstruct only an approximation of the original, because some detail has been discarded for good."
  - question: "Is lossy compression always bad?"
    answer: "No. It is the right choice when small size or fast transmission matters more than perfect quality, such as streaming video on a slow connection, as long as the loss is acceptable for the purpose."
  - question: "Do I need to know the name of a compression algorithm?"
    answer: "No specific algorithm is required. You need to reason about lossless and lossy methods, the effect of redundancy, and which is suitable for a situation."
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
version: "1.0"
publishedDate: 2026-11-08
updatedDate: 2026-11-08
author: "marlbridge-academic-team"
editorialStatus: "reviewed"
reviewer: "Harris Khan"
reviewedDate: 2026-11-08
---

## Why compress data?

Data take space to store and time to send. A photograph, a song and a video are all long sequences of bits (Topic 2.1). If we can represent the same data with fewer bits, files take less space, load faster and use less bandwidth. **Data compression** is the process of reducing the number of bits needed to store or transmit data.

Two points are easy to miss.

- **Fewer bits does not necessarily mean less information.** A good method removes *redundancy* (repetition) while keeping everything that matters. The text "ten dashes: ----------" can be described in a few bits without losing any information.
- **How much is saved depends on two things:** the amount of **redundancy** in the original data, and the **algorithm** used. A picture of a plain blue sky has a lot of repetition and compresses a great deal; a picture full of random-looking noise does not.

## Lossless compression

A **lossless** algorithm reduces the number of bits while **guaranteeing complete reconstruction of the original data**. Decompress it and you get back exactly what you started with, bit for bit. This matters whenever a single changed bit would be damaging: a spreadsheet, program code, a legal document, a medical record.

**A simple lossless idea: run-length encoding.** Where the same value repeats, store the value once together with how many times it repeats. The string `AAAAABBBCCCCCCCCDD` (18 characters) becomes `5A3B8C2D` (8 characters). Reading it back, 5 A's, 3 B's, 8 C's and 2 D's, rebuilds the original exactly.

<figure>
<svg viewBox="0 0 640 240" role="img" aria-labelledby="rle-title rle-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rle-title">Run-length encoding of a row of sixteen pixels</title>
<desc id="rle-desc">A row of sixteen small squares. The first five contain the letter W for white, the next three contain B for black and are drawn shaded with diagonal lines, and the last eight contain W. Brackets below the row mark the runs: 5 W, 3 B and 8 W. Underneath, the encoded form reads 5W 3B 8W, which uses three pairs instead of sixteen separate values.</desc>
<rect x="0" y="0" width="640" height="240" fill="#ffffff"/>
<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="2"/></pattern></defs>
<g fill="none" stroke="#1d2b44" stroke-width="1.5">
<rect x="20" y="30" width="36" height="36"/><rect x="56" y="30" width="36" height="36"/><rect x="92" y="30" width="36" height="36"/><rect x="128" y="30" width="36" height="36"/><rect x="164" y="30" width="36" height="36"/>
<rect x="200" y="30" width="36" height="36" fill="url(#hatch)"/><rect x="236" y="30" width="36" height="36" fill="url(#hatch)"/><rect x="272" y="30" width="36" height="36" fill="url(#hatch)"/>
<rect x="308" y="30" width="36" height="36"/><rect x="344" y="30" width="36" height="36"/><rect x="380" y="30" width="36" height="36"/><rect x="416" y="30" width="36" height="36"/><rect x="452" y="30" width="36" height="36"/><rect x="488" y="30" width="36" height="36"/><rect x="524" y="30" width="36" height="36"/><rect x="560" y="30" width="36" height="36"/>
</g>
<g fill="#1d2b44" font-size="16" text-anchor="middle" font-weight="bold">
<text x="38" y="54">W</text><text x="74" y="54">W</text><text x="110" y="54">W</text><text x="146" y="54">W</text><text x="182" y="54">W</text>
<text x="326" y="54">W</text><text x="362" y="54">W</text><text x="398" y="54">W</text><text x="434" y="54">W</text><text x="470" y="54">W</text><text x="506" y="54">W</text><text x="542" y="54">W</text><text x="578" y="54">W</text>
</g>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="1"><rect x="212" y="40" width="12" height="18"/><rect x="248" y="40" width="12" height="18"/><rect x="284" y="40" width="12" height="18"/></g>
<g fill="#1d2b44" font-size="16" text-anchor="middle" font-weight="bold">
<text x="218" y="54">B</text><text x="254" y="54">B</text><text x="290" y="54">B</text>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2">
<path d="M20 80 L20 90 L200 90 L200 80"/><path d="M200 80 L200 90 L308 90 L308 80"/><path d="M308 80 L308 90 L596 90 L596 80"/>
</g>
<g fill="#1d2b44" font-size="15" text-anchor="middle">
<text x="110" y="112">run of 5 white</text><text x="254" y="112">3 black</text><text x="452" y="112">run of 8 white</text>
<text x="320" y="160" font-size="20" font-weight="bold">Encoded: 5W  3B  8W</text>
<text x="320" y="190">3 runs replace 16 separate pixel values; the original can be rebuilt exactly.</text>
<text x="320" y="215">W means white and B means black (hatched squares).</text>
</g>
</svg>
<figcaption>Figure 1. A row of 16 black-and-white pixels stored as three runs. Because the runs can be expanded back into exactly the same 16 pixels, this is lossless.</figcaption>
</figure>

**Run-length encoding does not always help.** If there are few repeats, the "count" can make things longer. `ABCDEF` becomes `1A1B1C1D1E1F`, twice as long. That is why the saving depends on the redundancy in the data.

## Lossy compression

A **lossy** algorithm can reduce the number of bits **significantly**, but it allows reconstruction of only an **approximation** of the original. Some detail is thrown away for good. Examples include reducing the number of colours in a picture, storing a sound with fewer detailed frequencies, or storing a video with less precise motion. Humans often cannot notice the difference, so the approximation is good enough.

Because it is willing to discard information, lossy compression can usually reduce size **more** than lossless compression. The cost is that you cannot get the exact original back, and repeatedly compressing and decompressing can lower the quality further.

## Choosing between them

| Situation | Matters most | Typical choice |
|---|---|---|
| Medical scan kept for diagnosis; legal text; program code | Quality and exact reconstruction | Lossless |
| Video call on a slow connection; photo thumbnails on a web page | Small size and fast transmission | Lossy |
| A file that will be edited and saved many times | Keeping all detail | Lossless |
| Music streamed to a phone with a limited data plan | Small size, acceptable quality | Lossy |

State the **priority** first (quality or size), then match the type, and mention the trade-off.

## Worked example 1: run-length encoding and the saving

**Task.** A fictional pixel row, written with R for red, G for green and B for blue, is `RRRRRRGGGGBBBBBBBBRR`. (a) Encode it by run-length. (b) Assume each character takes 8 bits (one byte). Work out the size before and after and the percentage saved. (c) Show that the encoding is lossless.

**(a) Encode.** Group the runs: RRRRRR (6 R), GGGG (4 G), BBBBBBBB (8 B), RR (2 R). Total: 6 + 4 + 8 + 2 = 20 characters. Encoded: `6R4G8B2R`.

**(b) Sizes.** Before: 20 characters × 8 bits = 160 bits. After: `6R4G8B2R` has 8 characters × 8 bits = 64 bits. Bits saved: 160 - 64 = 96. Percentage saved: 96 ÷ 160 = 0.6, so **60%**. (The compressed version is 64 ÷ 160 = 40% of the original size.)

**(c) Lossless check.** Decode: 6 R, 4 G, 8 B, 2 R gives RRRRRR GGGG BBBBBBBB RR, which is exactly the original 20 characters. Nothing was lost.

**Check.** The two numbers 160 and 64 are consistent with 20 characters and 8 characters at 8 bits each. A tidy final sentence: "the encoding is smaller because the data contain long runs."

## Worked example 2: choosing a method and reading file sizes

**Scenario.** A fictional hospital stores a 12 MB X-ray image. It tests two methods. Method 1 produces a 7 MB file and the original can be rebuilt exactly. Method 2 produces a 1.5 MB file and the rebuilt image differs slightly from the original.

**Task.** (a) Classify each method. (b) Calculate the percentage saved by each. (c) Choose a method for (i) keeping the X-ray for diagnosis and (ii) sending a preview to a doctor's phone over a weak signal.

**(a) Classify.** Method 1 allows complete reconstruction: **lossless**. Method 2 gives only an approximation: **lossy**.

**(b) Savings.** Method 1: (12 - 7) ÷ 12 = 5 ÷ 12 = 0.4167, so about **41.7%**. Method 2: (12 - 1.5) ÷ 12 = 10.5 ÷ 12 = 0.875, so **87.5%**. The lossy method saves much more, as expected.

**(c) Choose.** (i) **Method 1 (lossless).** For diagnosis the quality and the ability to reconstruct the exact original matter most; a small change could hide a detail. (ii) **Method 2 (lossy).** A preview over a weak signal needs to be small and fast, and a slightly degraded picture is acceptable for a preview; the full lossless image remains stored for diagnosis.

**Check.** Each choice names the priority (quality or speed), the matching method and the trade-off. It is not a mistake to use both methods in one system, for different purposes.

## Why redundancy makes compression possible

Compression works because real data are rarely random. Text uses some letters far more than others; a photograph has large areas where neighbouring pixels are nearly identical; a song repeats its chorus. This predictable repetition is **redundancy**, and an algorithm can store the repeated pattern more cheaply than the full data. Data with no pattern at all cannot be compressed much, and an algorithm that suits one kind of data may do poorly on another.

## Another lossless idea: shorter codes for common values

Suppose a message of 20 symbols uses only four symbols, A, B, C and D, with counts A 10, B 5, C 3 and D 2. A fixed-length code gives every symbol 2 bits, so the message needs 20 × 2 = **40 bits**. A variable-length code gives the most common symbol the shortest code: A = 0, B = 10, C = 110 and D = 111. The total is 10 × 1 + 5 × 2 + 3 × 3 + 2 × 3 = 10 + 10 + 9 + 6 = **35 bits**, a saving of 5 bits, which is 12.5% of 40. No code is the start of another, so the message can be decoded exactly: this is lossless. (This is Marlbridge's illustration; the course does not require any named algorithm.)

## How lossy methods save bits

A lossy method decides which detail matters least and discards it. A picture stored with 256 shades of grey needs 8 bits per pixel (2 to the power 8 is 256). If the shades are reduced to 16, each pixel needs only 4 bits (2 to the power 4 is 16), so the picture is half the size, at the cost of smooth shading becoming visibly stepped. Once the extra shades are discarded they cannot be recovered from the compressed file, which is why only an approximation of the original can be rebuilt.

Because the savings depend on the data, a question that gives you two compression results for the same file is really asking which method suits that data, and a question that gives you the same method on two files is asking about redundancy. Reading it that way saves time.

## Common misconceptions

- **"Compression deletes information, so the data are always damaged."** Lossless compression loses nothing; it removes redundancy only.
- **"Fewer bits means less information."** Not necessarily: lossless methods keep all the information in fewer bits.
- **"Lossy is always worse."** It depends on the purpose; when small size matters more than perfect quality it can be the better choice.
- **"All compression works equally on all data."** Savings depend on the redundancy in the data and the algorithm; data with little repetition may not compress or may grow.
- **"After lossy compression I can restore the original."** Only an approximation can be reconstructed.
- **"Lossless is always the best."** It may produce files that are too large for the situation.
- **"Compression changes what the data mean."** Lossless methods do not; lossy methods may change detail but aim to keep the meaning.

## Where this leads

Compression is one way of handling the size of data; next, [Extracting Information from Data](/advanced-course-resources/computer-science-principles/2-3-extracting-information-data-study-guide/) asks what we can learn from data once they are stored. Compression also matters for networks in Unit 4, where sending fewer bits saves time. Practise with the [practice questions](/advanced-course-resources/computer-science-principles/2-2-data-compression-practice/), recap with the [revision notes](/advanced-course-resources/computer-science-principles/2-2-data-compression-revision-notes/), and review your skills on the [checklist](/advanced-course-resources/computer-science-principles/2-2-data-compression-checklist/).
