---
title: "Cambridge O Level Computer Science (2210): Methods of error detection"
resourceType: "study-guides"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2.2
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "methods-of-error-detection"
description: "Study guide to Cambridge O Level Computer Science 2210 section 2.2: parity checks and blocks, checksums, echo checks, check digits and ARQ, worked through."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 2.2 of the Cambridge O Level Computer Science 2210 syllabus asks you to understand **why errors occur** in transmitted data; to describe **parity checks (odd and even)**, including the **parity byte and parity block check**, the **checksum** and the **echo check**; to describe how a **check digit** detects errors in data entry, with examples including **ISBNs and bar codes**; and to describe how an **automatic repeat query (ARQ)** uses **positive and negative acknowledgements** and a **timeout**.

The [Data Transmission study guide](/resources/o-level-cambridge-computer-science-data-transmission/) introduces each method. This guide works through the calculations step by step: setting a parity bit, locating an error in a parity block, calculating an ISBN check digit, and tracing an ARQ exchange.

## Why errors happen

The syllabus says errors "can occur during data transmission due to interference", giving three kinds:

- **data loss**: bits or whole packets go missing;
- **data gain**: extra bits appear that were not sent;
- **data change**: bits are flipped, a 0 arriving as 1 or a 1 as 0.

Interference can come from electrical equipment near a cable, other wireless signals, or weak signals over long distances. A corrupted file may not open, or may contain wrong values, so the receiver needs a way to **detect** that something has gone wrong and, usually, ask for the data again.

## Parity check

A **parity bit** is added to each byte before it is sent. Usually 7 bits carry data and the eighth (often the left-most) is the parity bit.

- **Even parity**: the parity bit is set so that the total number of 1s in the byte is **even**.
- **Odd parity**: the parity bit is set so that the total number of 1s is **odd**.

The sender and receiver must agree which parity is used. The receiver counts the 1s in each byte; if the count does not match the agreed parity, an error has occurred.

### Worked example 1: setting and checking a parity bit

The 7 data bits are `1011001`, which contain four 1s.

- Even parity: four is already even, so the parity bit is **0**, giving `01011001`.
- Odd parity: a 1 is needed to make the count odd, giving `11011001`.

Suppose the even-parity byte arrives as `01011101`. Counting the 1s gives 5, which is odd, so the receiver knows the byte has been corrupted.

**Limitation:** if **two** bits change, the count stays even (or odd) and the error is **not detected**. A single parity bit also cannot show **which** bit is wrong.

## Parity byte and parity block check

To locate errors, bytes are sent in a **block**. Each byte has its own parity bit, and an extra **parity byte** is added at the end. Each bit of the parity byte is the parity bit for one **column** of the block.

### Worked example 2: finding the error

A block of four bytes is sent using even parity. The left-most bit of each byte is its parity bit.

| | Bit 1 | Bit 2 | Bit 3 | Bit 4 | Bit 5 | Bit 6 | Bit 7 | Bit 8 |
|---|---|---|---|---|---|---|---|---|
| Byte 1 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 |
| Byte 2 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 1 |
| Byte 3 | 1 | 1 | 1 | 0 | 0 | 1 | 0 | 0 |
| Byte 4 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
| Parity byte | 1 | 0 | 0 | 0 | 0 | 1 | 0 | 0 |

Every row and every column has an even number of 1s. During transmission, byte 3 arrives as `11101100`.

- **Row check:** byte 3 now has five 1s, which is odd, so the error is in byte 3.
- **Column check:** column 5 now holds 1, 0, 1, 1 and 0 from the parity byte, three 1s, which is odd, so the error is in bit 5.
- The bit where the failing row and failing column meet, **byte 3, bit 5**, is wrong. It arrived as 1, so it must have been 0. The receiver can **correct** it without asking for the block again.

This is the advantage of a parity block: it can detect **and locate** a single changed bit.

## Checksum

1. Before sending, the sender uses an agreed algorithm to calculate a value, the **checksum**, from the data in a block.
2. The checksum is sent with the block.
3. The receiver uses the same algorithm to recalculate the checksum from the data received.
4. If the two values are different, an error has occurred and the data is requested again.

For example, in one simple method the bytes 45, 120, 200 and 18 are added (total 383) and the remainder after dividing by 256 is kept, giving a checksum of 127. Real systems use more complex algorithms, but the principle is the same: **calculate, send, recalculate, compare**.

## Echo check

1. The sender transmits the data.
2. The receiver sends a copy of what it received **straight back** to the sender.
3. The sender compares the returned copy with the original.
4. If they differ, there has been an error and the data is sent again.

**Drawbacks:** the data travels twice, so the method doubles the traffic; and if a difference is found, the sender cannot tell whether the error happened on the way out or on the way back.

## Check digits

A check digit is used for errors in **data entry**, not transmission. It is an extra digit, calculated from the other digits, added to the end of a number such as an ISBN or the number under a bar code. When the number is typed in or scanned, the computer recalculates the check digit from the other digits and compares. A mismatch shows that a digit was entered wrongly or two digits were swapped.

### Worked example 3: an ISBN-13 check digit

The first 12 digits of an ISBN are `978030640615`. ISBN-13 uses alternating weights of 1 and 3.

| Digit | 9 | 7 | 8 | 0 | 3 | 0 | 6 | 4 | 0 | 6 | 1 | 5 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Weight | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 | 1 | 3 |
| Product | 9 | 21 | 8 | 0 | 3 | 0 | 6 | 12 | 0 | 18 | 1 | 15 |

1. Add the products: 9 + 21 + 8 + 0 + 3 + 0 + 6 + 12 + 0 + 18 + 1 + 15 = **93**.
2. Find the remainder when dividing by 10: 93 ÷ 10 leaves **3**.
3. Subtract from 10: 10 − 3 = **7**. (If the remainder is 0, the check digit is 0.)

The full ISBN is `9780306406157`. If someone types `9780306406517`, swapping the 1 and the 5, the recalculated check digit no longer matches and the entry is rejected. Thirteen-digit retail bar codes use the same weighting method.

## Automatic repeat query (ARQ)

ARQ establishes that data has been received **without error**.

1. The sender transmits the data and starts a **timer**.
2. The receiver checks the data for errors, for example with a parity check or checksum.
3. If there is no error, the receiver sends a **positive acknowledgement**.
4. If there is an error, the receiver sends a **negative acknowledgement**, and the sender sends the data again.
5. If the sender receives **no acknowledgement before the timeout**, it assumes the data was lost and sends it again.
6. This continues until a positive acknowledgement is received.

ARQ combines **detection** (done by another method) with **automatic resending**.

## Common mistakes

- Claiming a parity check finds every error. It misses an even number of changed bits.
- Saying a single parity bit shows which bit is wrong. Only a parity block can locate it.
- Describing an echo check as the receiver comparing the data. The **sender** compares.
- Treating a check digit as a transmission check. It checks data **entry**.
- Leaving the timeout out of an ARQ description.
- Forgetting to state which parity, odd or even, when setting a parity bit.

## Exam technique

- **Describe** a method: give its steps in order, ending with what happens if an error is found.
- **Identify the error** in a parity block: name the row and column that fail, then the bit where they meet.
- **Calculate** a check digit: show the weighted products, the total and the final step.
- **Compare** methods: say what each can and cannot do, for example "an echo check detects errors but cannot show whether they happened on the way out or back".

Condense this with the [Methods of error detection revision notes](/resources/cambridge-o-level-computer-science-2210-methods-of-error-detection-revision-notes/) and practise with the [Methods of error detection practice questions](/resources/cambridge-o-level-computer-science-2210-methods-of-error-detection-practice/).
