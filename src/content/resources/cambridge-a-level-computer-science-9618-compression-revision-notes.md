---
title: "Cambridge A Level Computer Science (9618): Compression -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 1 – Information representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "information-representation"
    subtopic: "compression"
description: "Revision notes for Cambridge 9618 section 1.3: reasons to compress, lossy and lossless methods, RLE rules, methods by file type, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section 1.3 Compression of the Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, AS content assessed on Paper 1. The three outcomes: the need for compression and examples of its use; lossy and lossless compression, with justification of a method for a situation; and how text, bitmap, vector and sound files can be compressed, including run-length encoding. Full teaching is in the [compression study guide](/resources/cambridge-a-level-computer-science-9618-compression/); test yourself with the [compression practice questions](/resources/cambridge-a-level-computer-science-9618-compression-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Compression | Reducing the number of bits needed to store or transmit data |
| Lossless | The original data can be reconstructed exactly |
| Lossy | Some data is permanently removed; the result approximates the original |
| Redundancy | Repetition or predictability in data that can be stored more efficiently |
| Run | A sequence of identical, consecutive values |
| Run-length encoding (RLE) | Lossless method storing each run as a value and a count |
| Flag (in RLE) | A marker showing that the next bytes are a count and a value, used so short runs need not be encoded |
| Dictionary encoding | Lossless method replacing repeated words or sequences with short codes listed in a dictionary |
| Perceptual coding | Lossy sound method removing sounds people cannot hear or will not notice |

## Why compress (with consequences)

- Less storage → more files on a device; lower cloud storage cost.
- Faster transfer → quicker downloads, uploads and page loads.
- Less bandwidth → less congestion; mobile data allowances last longer.
- Streaming → lower bit rate needed, so fewer pauses for buffering.
- Size limits → files fit email attachment and upload limits.

## Lossless vs lossy at a glance

| Choose lossless when... | Choose lossy when... |
|---|---|
| Every bit matters (text, code, spreadsheets, databases) | Small size matters more than perfect accuracy |
| The file will be edited and saved again | The file is for viewing or listening only |
| Records must be exact (legal, medical, archives) | The loss will not be noticed by people |
| — | Fast transmission or streaming is the priority |

## RLE rules

1. Read the data from left to right and group identical consecutive values.
2. Replace each run with a count and the value (state the order you use).
3. Count the bytes before and after.
4. Decoding expands each pair back to the run: no data is lost.

**Works well:** long runs (flat-colour images, simple graphics, repeated spaces).
**Works badly:** few repeats (prose, photographs, noisy data), where pairs can **double** the size.
**Fix:** use a flag to encode only long runs.

Mini example: AAAABBBBBBC (11 bytes) → 4A 6B 1C (6 bytes).

## Methods by file type

| File type | Lossless method | Lossy method |
|---|---|---|
| Text | RLE on repeated characters; dictionary encoding of repeated words | Not acceptable |
| Bitmap image | RLE on runs of identical pixels | Reduce resolution; reduce colour depth; discard fine detail the eye barely notices |
| Vector graphic | Compress the drawing list (e.g. as text) | Rarely used: changing properties changes the shapes |
| Sound | Lossless sound formats exist, larger files | Remove frequencies outside human hearing; remove sounds masked by louder sounds; lower sampling rate or resolution |

## Writing a justification

**Method → reason from the scenario → why not the other.**

Example: "A hospital storing X-ray images should use lossless compression, because doctors need every detail for diagnosis, and lossy compression could remove fine detail that cannot be recovered."

## Exam traps

- RLE is **lossless**, not lossy.
- RLE does **not** always reduce size.
- Lossy compression is never suitable for text or program files.
- Vague justifications ("keeps quality") without linking to the scenario.
- Forgetting to state the RLE format (count first or value first).
- Confusing compression with reducing resolution only: that is one lossy method among several.
- Saying a lossy file can be "decompressed back to the original".

## Self-test

1. Define lossless compression.
2. Give **two** reasons a website might compress its images.
3. Why must a program file be compressed losslessly?
4. Encode XXXXXYYYZZZZZZZZ using RLE as count–character pairs and state the number of bytes saved, at one byte per count and per character.
5. Encode HELLO using count–character pairs. What happens to the file size?
6. Why is RLE effective for a cartoon but not a photograph?
7. Name **one** lossy method for compressing a bitmap image.
8. Explain how perceptual coding reduces a sound file's size.
9. Why are vector graphics usually compressed losslessly?
10. Describe dictionary encoding of a text file.
11. A photographer will edit an image several more times before publishing it. Which type of compression should be used until then, and why?
12. Decode the RLE data 3R 2G 4B (count then colour).

### Answers

1. Compression from which the original data can be reconstructed exactly.
2. Any two: pages load faster; less bandwidth used; less server storage; faster on mobile connections.
3. Changing even one bit could make an instruction wrong, so the program would not run correctly.
4. 5X 3Y 8Z = 6 bytes; original 16 bytes; **10 bytes saved**.
5. 1H 1E 2L 1O = 8 bytes instead of 5: the file **gets bigger**.
6. A cartoon has large areas of identical colour (long runs); neighbouring pixels in a photograph usually differ slightly, so runs are short.
7. Any one: reduce resolution; reduce colour depth; discard fine detail or subtle colour changes.
8. It removes sounds that humans cannot hear (outside the hearing range) or will not notice (masked by louder sounds), so fewer data need to be stored.
9. The file is already a compact list of objects; changing any property would change the shapes drawn.
10. Repeated words or sequences are replaced by short codes, and a dictionary linking each code to its word is stored with the file so it can be decoded exactly.
11. **Lossless**: each lossy save would discard more data, so quality would fall with every edit.
12. **RRRGGBBBB**.

## Official syllabus

Cambridge International AS & A Level Computer Science (9618) syllabus for 2026, Subject content, section 1.3 Compression. Published by Cambridge International.
