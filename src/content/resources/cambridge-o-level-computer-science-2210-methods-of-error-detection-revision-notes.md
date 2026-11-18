---
title: "Cambridge O Level Computer Science (2210): Methods of error detection -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Cambridge O Level Computer Science 2210 section 2.2: parity, parity blocks, checksums, echo checks, check digits, ARQ and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 2.2, Methods of error detection. The full worked examples are in the [Methods of error detection study guide](/resources/cambridge-o-level-computer-science-2210-methods-of-error-detection/).

## Why check for errors?

Interference during transmission can cause:

- **data loss** (bits missing),
- **data gain** (extra bits),
- **data change** (bits flipped).

## Key terms

| Term | Definition |
|---|---|
| Parity bit | Extra bit added so the number of 1s in a byte is odd or even |
| Even parity | Total number of 1s, including the parity bit, is even |
| Odd parity | Total number of 1s, including the parity bit, is odd |
| Parity block | Group of bytes, each with a parity bit, plus a parity byte |
| Parity byte | Byte whose bits are the parity bits for each column of the block |
| Checksum | Value calculated from a block of data and sent with it, then recalculated by the receiver |
| Echo check | Receiver returns the data to the sender, who compares it with the original |
| Check digit | Digit calculated from the other digits of a number, used to check data entry |
| ARQ | Automatic repeat query: acknowledgements and a timeout ensure data arrives without error |
| Positive acknowledgement | Message from the receiver: data received correctly |
| Negative acknowledgement | Message from the receiver: error found, send again |
| Timeout | Time the sender waits for an acknowledgement before resending |

## Parity: method in three lines

1. Agree odd or even.
2. Sender sets the parity bit to make the count of 1s match.
3. Receiver counts 1s; a mismatch means an error.

Example with 7 data bits `0100110` (three 1s): even parity gives `10100110`; odd parity gives `00100110`.

**Cannot:** detect two changed bits; show which bit is wrong.

## Parity block: how to find the faulty bit

1. Check each byte (row): which one has the wrong parity?
2. Check each column, including the parity byte: which one has the wrong parity?
3. The bit where the row and column meet is the error; flip it to correct it.

## The four transmission checks compared

| Method | Who checks? | Detects | Limitation |
|---|---|---|---|
| Parity check | Receiver | A single changed bit in a byte | Misses an even number of changes; cannot locate |
| Parity block | Receiver | A changed bit, and where it is | More data to send (extra parity byte) |
| Checksum | Receiver | Changes in a block of data | Some combinations of errors can give the same checksum |
| Echo check | Sender | Any difference between sent and returned data | Doubles traffic; cannot tell which direction the error occurred |

## Checksum sequence

Calculate from data → send with data → receiver recalculates → compare → if different, request resend.

## Check digit sequence

1. Check digit calculated from the other digits and added to the number.
2. When the number is entered, the check digit is recalculated.
3. If it does not match, the entry is rejected.

**Used in:** ISBNs, bar codes. **Detects:** a wrong digit typed; two digits swapped (transposition).

### ISBN-13 and 13-digit bar code method

- Multiply the first 12 digits by 1, 3, 1, 3, ... in turn.
- Add the products.
- Find the remainder after dividing by 10.
- Check digit = 10 − remainder (or 0 if the remainder is 0).

Example: `978186197271` gives products totalling 118; remainder 8; check digit 10 − 8 = **2**.

## ARQ sequence

1. Send data, start timer.
2. Receiver checks data.
3. No error: positive acknowledgement.
4. Error: negative acknowledgement; sender resends.
5. No reply before timeout: sender resends.

## Exam traps

- **Check digit as a transmission method.** It checks data entry. Keep it separate from parity, checksum and echo check.
- **Echo check comparison.** The sender compares, not the receiver.
- **Missing the timeout.** ARQ needs acknowledgements **and** a timeout.
- **Parity of the parity bit.** Count the parity bit itself when checking the total.
- **"Parity detects all errors."** Not if two bits flip.
- **ISBN arithmetic.** Use weights 1 and 3 for ISBN-13, starting with 1 on the first digit.

## Self-test

1. Name the three types of error the syllabus lists.
2. Add an even parity bit to the 7 bits `1110000`.
3. Using odd parity, is `10110110` correct?
4. Why can a single parity bit miss some errors?
5. What is the purpose of the parity byte in a parity block?
6. Describe an echo check in two sentences.
7. Give one drawback of an echo check.
8. Who calculates the checksum, and when?
9. What kind of error is a check digit designed to detect?
10. Calculate the check digit for the 12 digits `978000000001`.
11. What happens in ARQ if the receiver finds an error?
12. What happens in ARQ if no acknowledgement arrives?

**Answers**

1. Data loss, data gain, data change.
2. Three 1s, so the parity bit is 1: `11110000`.
3. It has five 1s, which is odd, so it passes the odd parity check.
4. If an even number of bits change, the count of 1s keeps the same parity.
5. It holds a parity bit for each column, so a faulty bit can be located (and corrected) by where the failing row and column meet.
6. The receiver sends the data back to the sender. The sender compares it with the original and resends if they differ.
7. Either: it doubles the amount of data sent; or the sender cannot tell whether the error happened on the way out or on the way back.
8. The sender calculates it before sending; the receiver recalculates it from the received data and compares.
9. Errors in data entry, such as a mistyped digit or two digits swapped.
10. Products total 9 + 21 + 8 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 3 = 41; remainder 1; check digit 10 − 1 = 9.
11. It sends a negative acknowledgement and the sender transmits the data again.
12. The sender waits until the timeout, then sends the data again.
