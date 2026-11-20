---
title: "Cambridge A Level Information Technology (ICT): 19.4 Compression (9626)"
seoTitle: "Cambridge A Level IT 9626: Image Compression Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Graphics creation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 19.4
syllabusTopics:
  - qualification: "a-level"
    topic: "graphics-creation"
  - qualification: "a-level"
    topic: "graphics-creation"
    subtopic: "compression"
description: "Study guide to section 19.4 of Cambridge A Level IT 9626: what compression is, lossless and lossy methods, run length encoding, and the effects of compression on images."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide goes deeper into section **19.4 Compression** of the Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027 (version 4). It is **A Level only** content. Paper 4 (Advanced Practical) tests sections 17 to 21, and Paper 3 (Advanced Theory) is based on sections 12 to 21, where calculators are not allowed.

The syllabus asks you to know:

- what compression is
- the methods of compression: **lossless** and **lossy**
- the effects of different methods of compression on images.

Use it with the [graphics creation topic guide](/resources/a-level-cambridge-ict-graphics-creation/), the [topic revision notes](/resources/a-level-cambridge-ict-graphics-creation-revision-notes/) and the [practice questions](/resources/cambridge-a-level-ict-9626-compression-practice/). File formats are described in the [common graphics skills guide](/resources/cambridge-a-level-ict-9626-common-graphics-skills/). The [Cambridge A Level IT hub](/boards/cambridge/a-level/ict/) lists every topic.

## What is compression?

**Compression** reduces the size of a file by storing the same information using fewer bits. It is needed because uncompressed images are large. A 1,000 by 800 pixel photograph with 24 bits per pixel needs 1,000 x 800 x 3 = 2,400,000 bytes (about 2.4 megabytes) before compression.

Reasons for compressing images:

- **Less storage space** is needed on a disk, phone or server.
- **Faster transmission** over a network, so web pages load quickly and emails send sooner.
- **Lower bandwidth and cost**, particularly for mobile data.
- More images can be held on a device or sent in one email.

Compression is done by an **algorithm** when the file is saved or exported. The reverse process, decompression, happens when the file is opened or displayed. There are two families of methods.

## Lossless compression

**Lossless compression** reduces file size without losing any data. When the file is decompressed, it is **identical** to the original, bit for bit.

It works by finding and removing **redundancy**: repetition and patterns in the data.

### Run length encoding (RLE)

RLE replaces a **run** of identical values with a single value and a count. It is suited to images with large blocks of one colour, such as logos, diagrams and cartoons.

*Example:* one row of 18 pixels, using the letters R (red), B (blue) and G (green):

RRRRRRBBBGGGGGGGGR

This has runs of 6 R, 3 B, 8 G and 1 R, so it is stored as:

6R 3B 8G 1R

If each pixel colour takes 1 byte and each count takes 1 byte:

- original: 18 bytes
- compressed: 4 runs x 2 bytes = 8 bytes
- saving: 18 - 8 = 10 bytes, which is 10 / 18 = about 56%
- compression ratio: 18 : 8, about 2.25 : 1.

*A row with long runs compresses very well:* WWWWWWWWWWBBWWWWWWWWWWWW (24 pixels) becomes 10W 2B 12W: 3 runs, 6 bytes, a ratio of 4 : 1.

*A row with no runs does not compress, and can get bigger:* ABCABC has 6 runs of length 1, so it becomes 1A 1B 1C 1A 1B 1C: 12 bytes, double the original 6. This shows that the saving depends on how repetitive the data is.

### Other lossless methods

Other lossless methods use **dictionaries** of repeated patterns, or shorter codes for more frequent values (for example Huffman coding). They are used in formats such as PNG and GIF. You do not need the details for this syllabus, but you should know that they allow an exact copy to be restored.

| Advantages of lossless | Disadvantages of lossless |
|---|---|
| No loss of quality; the original is recovered exactly | Smaller savings than lossy for photographs |
| Can be saved repeatedly without any loss | Files are larger than lossy files |
| Suitable when exact data matters (text in images, line art, medical images, images to be edited again) | Slower to transmit for large photographic images |

## Lossy compression

**Lossy compression** reduces file size by **permanently removing** some data. The decompressed file is **not** identical to the original, though it may look very close.

It works by discarding information that people are least likely to notice, for example:

- tiny differences in colour between neighbouring pixels
- fine detail and high-frequency changes that the eye barely sees
- reducing the number of colours.

In a photograph, a clear blue sky has many slightly different blues. A lossy method can replace them with a smaller number of values.

A user often chooses a **quality setting**. A lower quality setting discards more data, giving a smaller file but more visible damage.

### Example: JPEG

A photograph of 2,400,000 bytes uncompressed might become 240,000 bytes when saved as a JPG at a medium quality setting. The ratio is 2,400,000 : 240,000 = 10 : 1, and the saving is (2,400,000 - 240,000) / 2,400,000 = 90%. (The actual figure depends on the image and the setting.)

| Advantages of lossy | Disadvantages of lossy |
|---|---|
| Much smaller files, especially for photographs | Data is permanently lost; the original cannot be recovered |
| Fast to send and quick to load | Quality falls as compression increases |
| Allows many photographs on a web page or in storage | Repeated saving makes it worse (generation loss) |
| Often unnoticeable at moderate settings | Not suitable for sharp lines or text, or for images that need to be edited again |

## Effects of compression on images

| Effect | Lossless | Lossy |
|---|---|---|
| **File size** | Reduced, but by a moderate amount | Reduced greatly |
| **Quality** | Unchanged | Reduced: may show blockiness, blurring, fuzzy edges around sharp lines (artefacts), or colour banding |
| **Reversible?** | Yes, exactly | No |
| **Repeated saving** | No change | Quality drops each time |
| **Best for** | Logos, diagrams, screenshots, text, images to be edited, archiving | Photographs for web and email, where small size matters |
| **Common formats** | PNG, GIF, TIF (with lossless compression) | JPG |

### Choosing a method

1. Does the image need to be an exact copy, or will it be edited further? If so, **lossless**.
2. Is it a photograph with smooth tones where a small loss is acceptable and size matters? **Lossy** may be better.
3. Are there sharp edges and flat colours (a logo or diagram)? **Lossless** suits, and also compresses well with RLE.

A good practice is to keep an **uncompressed or lossless master** and make lossy copies for the web.

## Common errors

- Saying lossy compression "removes the pixels at random". It removes information that is least noticeable, by an algorithm.
- Saying lossless compression makes no difference to file size. It does reduce it.
- Saying a compressed file can always be restored. That is true only for lossless.
- Giving "it is smaller" as the only effect, without quality.
- Assuming RLE always gives smaller files. A picture with no runs can get bigger.
- Recommending lossy compression for an image that is to be edited and saved many times.

## Frequently asked questions

**What is the difference between lossless and lossy compression?**
Lossless compression reduces the file size without losing any data, so the original can be recovered exactly. Lossy compression permanently removes some data, giving smaller files but lower quality.

**What is run length encoding?**
A lossless method that replaces a run of identical values with one value and a count.

**Why is JPG a poor choice for a logo?**
Lossy compression produces artefacts around sharp edges and flat colours, and it cannot store transparency.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626, syllabus for examination in 2025, 2026 and 2027, version 4, Cambridge University Press & Assessment. Section 19.4: Compression.
