---
title: "Cambridge O Level Computer Science (2210): Methods of error detection -- Practice Questions"
resourceType: "practice-questions"
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
description: "Original questions with mark-scheme answers on Cambridge O Level Computer Science 2210 section 2.2: parity blocks, checksums, echo checks, check digits and ARQ."
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
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Methods of error detection study guide](/resources/cambridge-o-level-computer-science-2210-methods-of-error-detection/) and [revision notes](/resources/cambridge-o-level-computer-science-2210-methods-of-error-detection-revision-notes/)

---

## Section A

**1.** State **three** ways in which data can be affected by interference during transmission. **[3]**

**2.** The 7 data bits `0011011` are to be sent with a parity bit as the left-most bit. Write the byte that is sent using even parity and the byte sent using odd parity. **[2]**

**3.** A system uses odd parity. Identify which of these bytes has been received with an error: `10101110`, `01110000`, `11100001`. **[1]**

**4.** State **one** example of where a check digit is used. **[1]**

**5.** State what is meant by a timeout in an automatic repeat query (ARQ). **[1]**

**6.** Explain why a parity check might not detect an error in a received byte. **[2]**

## Section B

**7.** Five bytes and a parity byte were sent using **even** parity. The left-most bit of each byte is the parity bit. One bit was changed during transmission.

| | Bit 1 | Bit 2 | Bit 3 | Bit 4 | Bit 5 | Bit 6 | Bit 7 | Bit 8 |
|---|---|---|---|---|---|---|---|---|
| Byte 1 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 1 |
| Byte 2 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| Byte 3 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |
| Byte 4 | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 1 |
| Byte 5 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 0 |
| Parity byte | 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 |

Identify the byte and the bit that contain the error, explain how you found it, and give the corrected byte. **[4]**

**8.** Describe how a checksum is used to detect errors in transmitted data. **[4]**

**9.** A simple checksum adds the denary values of the bytes in a block and keeps the remainder after dividing by 256. A block contains the values 90, 150, 77 and 201. Calculate the checksum, showing your working. **[2]**

**10.** Describe how an echo check works, and give **one** drawback of the method. **[4]**

**11.** The first 12 digits of an ISBN are `978014103614`. ISBN-13 multiplies the digits by 1 and 3 alternately, starting with 1, adds the products, and subtracts the remainder after dividing by 10 from 10 (a remainder of 0 gives a check digit of 0). Calculate the check digit, showing your working. **[3]**

**12.** A librarian types an ISBN and accidentally swaps two neighbouring digits. Explain how the check digit allows the computer to detect this mistake. **[2]**

**13.** Describe how an automatic repeat query (ARQ) is used to make sure data is received without error. **[5]**

**14.** A student says: "A check digit, a checksum and an echo check all do the same job." Explain why the check digit is different from the other two. **[2]**

---

## Answers

**1.** Data loss [1]; data gain [1]; data change [1].

**2.** `0011011` has four 1s. Even parity: `00011011` [1]. Odd parity: `10011011` [1].

**3.** `11100001`, which has four 1s (an even number) [1].

**4.** Any one: ISBNs on books; bar codes on products [1].

**5.** The length of time the sender waits for an acknowledgement before it sends the data again [1].

**6.** If two bits (or any even number of bits) change [1], the number of 1s keeps the same parity, so the byte still passes the check [1].

**7.** Byte 2 has three 1s, an odd number, so the error is in byte 2 [1]. Column 7 (bit 7) holds 0, 0, 0, 1, 1 and 1 from the parity byte, three 1s, so the error is in bit 7 [1]. The error is where they meet: byte 2, bit 7 [1]. The bit should be 1, so the corrected byte is `10011010` [1].

**8.** The sender calculates a value (the checksum) from the block of data using an agreed algorithm [1]. The checksum is sent with the data [1]. The receiver recalculates the checksum from the data it received, using the same algorithm [1]. If the two checksums are different, an error has occurred and the data is requested again [1].

**9.** 90 + 150 + 77 + 201 = 518 [1]; 518 ÷ 256 leaves a remainder of 518 − 512 = **6**, so the checksum is 6 [1].

**10.** The receiver sends a copy of the data it received back to the sender [1]. The sender compares the returned copy with the original data [1]; if they are different, the data is sent again [1]. Drawback, any one: it doubles the amount of data transmitted, or the sender cannot tell whether the error occurred on the way to the receiver or on the way back [1].

**11.** Products: 9, 21, 8, 0, 1, 12, 1, 0, 3, 18, 1, 12 [1]. Total = 86 [1]. Remainder after dividing by 10 is 6; 10 − 6 = **4** [1].

**12.** The computer recalculates the check digit from the digits that were typed [1]. Swapping two digits changes the weighted total, so the recalculated digit does not match the check digit entered, and the ISBN is rejected [1].

**13.** The sender transmits the data and starts a timer [1]. The receiver checks the data for errors, for example using a checksum or parity check [1]. If there is no error, it sends a positive acknowledgement [1]. If there is an error, it sends a negative acknowledgement and the sender resends the data [1]. If no acknowledgement arrives before the timeout, the sender resends the data [1].

**14.** A check digit detects errors made when data is **entered**, for example typed or scanned [1], whereas checksums and echo checks detect errors that happen during **transmission** [1].

---

## Where marks are usually lost

- Question 7: finding the row but not the column, or stating the position without giving the corrected byte.
- Question 10: saying the receiver compares the data in an echo check. It is the sender.
- Question 11: starting the weights with 3, or leaving out the final subtraction from 10.
- Question 13: leaving out the timeout, which earns its own mark.
- Question 3: forgetting to count the parity bit as part of the total.
