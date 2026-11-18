---
title: "Cambridge IGCSE Computer Science (0478): Methods of error detection"
resourceType: "study-guides"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 2: Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 2.2
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
    subtopic: "methods-of-error-detection-0478"
description: "Cambridge IGCSE Computer Science 0478 error detection in depth: why errors occur, parity checks and blocks, checksums, echo checks, check digits and ARQ."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **2.2 Methods of error detection**, the second subtopic of Topic 2, Data transmission, in
the Cambridge IGCSE Computer Science 0478 syllabus for 2026 to 2028, examined on Paper 1, Computer systems. The
[Data Transmission study guide](/resources/igcse-computer-science-data-transmission/) says what each method checks;
this page works through each method with data, including locating an error in a parity block and calculating an
ISBN-13 check digit. For quick recall, use the
[Methods of error detection revision notes](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection-revision-notes/),
and test yourself with the
[Methods of error detection practice questions](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection-practice/).

## What 2.2 asks you to do

- Understand the **need to check for errors** after data transmission, and **how errors occur**.
- Describe the processes of the **parity check** (odd and even, including the **parity byte** and **parity block
  check**), the **checksum** and the **echo check**.
- Describe how a **check digit** detects errors in **data entry**, with examples including **ISBN** and **bar codes**.
- Describe how an **automatic repeat query (ARQ)** establishes that data has been received without error.

## Why errors happen, and why they matter

Data can be corrupted on its journey, most often by **interference**, for example electrical noise near a cable. The
result can be:

- **data loss**: some bits never arrive
- **data gain**: extra bits appear that were not sent
- **data change**: some bits are flipped, a 0 becoming a 1 or a 1 becoming a 0.

A single wrong bit can change a number, a character or an instruction, so the receiver must be able to tell whether
the data is exactly what was sent. If an error is found, the data is sent again.

## Parity checks

A **parity bit** is an extra bit added to each byte before it is sent. Sender and receiver agree on **even parity** or
**odd parity**.

- **Even parity**: the parity bit is set so the **total number of 1s** in the byte, including the parity bit, is
  **even**.
- **Odd parity**: the parity bit is set so the total number of 1s is **odd**.

**Worked example 1.** The 7 data bits 1011001 contain four 1s. The parity bit is placed as the first (leftmost) bit.

```
even parity: four 1s is already even → parity bit 0 → 01011001
odd parity:  four 1s is even, need odd → parity bit 1 → 11011001
```

On arrival, the receiver counts the 1s. Using even parity, a byte with an odd number of 1s must contain an error.

**The limitation.** If **two** bits are flipped, the count is even again, so the error is **not detected**. A parity
bit also shows *that* a byte is wrong, not *which* bit is wrong.

### Parity block check (parity byte)

To find the position of a single wrong bit, data is sent as a **block** of bytes. Each byte has its own parity bit,
and an extra **parity byte** is added at the end. Each bit of the parity byte is the parity bit for one **column**.

**Worked example 2.** Even parity is used. The block was sent as:

```
          column: 1 2 3 4 5 6 7 8
byte 1            0 1 0 1 1 0 0 1
byte 2            1 0 1 1 0 1 0 0
byte 3            0 1 1 1 0 0 0 1
byte 4            0 0 0 0 1 1 1 1
parity byte       1 0 0 1 0 0 1 1
```

Every row and every column contains an even number of 1s. Suppose the block **arrives** with byte 3 as 01111001.

```
byte 3 (row):   01111001 → five 1s → odd  → error in this row
column 5:       1, 0, 1, 1, 0 → three 1s → odd → error in this column
```

The wrong bit is where the odd row meets the odd column: **byte 3, column 5**. Because it is a single bit, the
receiver could flip it back. Some patterns of several errors can still cancel out and go unnoticed.

## Checksum

A **checksum** is a value **calculated from the data** before it is sent, using an agreed method, and sent with the
data.

1. The sender calculates the checksum from the block of data and sends both.
2. The receiver uses the **same method** to recalculate the checksum from the data it received.
3. If the two checksums **match**, the data is assumed to be correct. If they **differ**, an error has occurred and the
   data is requested again.

**Worked example 3.** One simple method, used here only as an illustration: add the byte values and keep the
remainder after dividing by 256. The bytes 120, 45, 200 and 17 add to 382, so the checksum is 382 − 256 = 126. If 45
arrives as 44, the receiver's total is 381, giving 125. That does not match 126, so the error is detected.

## Echo check

1. The receiver sends a **copy of the data it received back to the sender**.
2. The sender **compares** the returned copy with the original.
3. If they differ, there is an error and the data is sent again.

**Limitation:** if the copies differ, the sender cannot tell whether the error happened on the way there or on the
way back. Sending everything twice also doubles the amount of data transmitted.

## Check digits

A **check digit** is an extra digit added to the **end of a number** such as a product code. It is calculated from the
other digits. Its job is different from the methods above: it detects **data-entry errors**, made when the number is
typed or scanned, such as a wrong digit or two digits swapped (a transposition).

Examples: **ISBNs** (International Standard Book Numbers) and **bar codes** on products.

**Worked example 4: ISBN-13.** The first 12 digits are 978094123675. Multiply the digits alternately by 1 and 3, add,
and choose the check digit that makes the total a multiple of 10.

```
digits:   9  7  8  0  9  4  1  2  3  6  7  5
weights:  1  3  1  3  1  3  1  3  1  3  1  3
products: 9 21  8  0  9 12  1  6  3 18  7 15   total = 109
109 → next multiple of 10 is 110 → check digit = 1
ISBN: 9780941236751
```

When the number is entered, the computer repeats the calculation. If the result does not match the check digit, the
number was entered wrongly. Swapping the adjacent digits 7 and 5 at the end gives a total of 113 before the check
digit, so the check digit would need to be 7, not 1, and the error is caught.

## Automatic repeat query (ARQ)

ARQ uses **acknowledgements** and a **timeout** to make sure data arrives correctly:

1. The sender transmits the data and **starts a timer**.
2. The receiver checks the data for errors (for example with a parity check or checksum).
3. If there is no error, the receiver sends a **positive acknowledgement**.
4. If there is an error, it sends a **negative acknowledgement**, and the sender resends the data.
5. If the sender receives **no acknowledgement before the timeout**, it assumes the data was lost and **resends it
   automatically**.
6. This repeats until a positive acknowledgement is received.

## Common mistakes

- Saying a parity bit can always find the error. A single parity bit detects an odd number of flipped bits, not where
  they are.
- Forgetting that two flipped bits pass a parity check.
- Counting the 1s without including the parity bit itself.
- Calling a check digit a transmission check. It checks data entry.
- Describing ARQ without the timeout.
- Saying an echo check is "the data being checked twice". The receiver sends the data back to the sender.

## Exam technique

**Describe** questions on these methods are marked as processes: say what is added or calculated, what the receiver
does, and what happens if an error is found. **Identify** the error in a parity block by giving the byte and the
column, and show the odd row and odd column. **Explain why** a method might fail by naming the situation, such as two
bits changed, or an error on the return path of an echo check. **Calculate** a check digit by showing the weighted
products and the total.

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 2 Data
transmission, 2.2 Methods of error detection.
