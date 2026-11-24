---
title: "Cambridge IGCSE Computer Science (0478): Methods of error detection -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original Cambridge IGCSE Computer Science 0478 questions on parity checks and blocks, checksums, echo checks, check digits and ARQ, with full answers."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs -- examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

These questions cover **2.2 Methods of error detection** in Topic 2, Data transmission, of the Cambridge IGCSE
Computer Science 0478 syllabus for 2026 to 2028. In every parity question, the parity bit is the leftmost bit.

Related: [Methods of error detection study guide](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection/)
and [Methods of error detection revision notes](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection-revision-notes/)

---

## Section A

**1.** Give **two** ways that data can be affected by an error during transmission. **[2]**

**2.** A system uses even parity. State the parity bit that should be added to the 7 bits 1100101. **[1]**

**3.** A system uses even parity. Identify which of these bytes has been received with an error:
10110110, 01100110, 11111111. **[1]**

**4.** State the purpose of a check digit. **[1]**

**5.** Give **one** example of where a check digit is used. **[1]**

**6.** In ARQ, state what the receiver sends if the data contains no error. **[1]**

## Section B

**7.** Explain why a parity check cannot detect every transmission error. Use an example. **[2]**

**8.** A block of four bytes and a parity byte is sent using even parity. It is received as shown.

```
          column: 1 2 3 4 5 6 7 8
byte 1            1 1 0 0 1 1 0 0
byte 2            0 0 1 1 1 0 0 0
byte 3            0 1 1 0 0 0 1 1
byte 4            0 0 1 1 0 1 1 0
parity byte       1 0 1 0 0 0 1 1
```

**(a)** Identify the byte and the column that contain the error. Explain how you found it. **[3]**
**(b)** Write the corrected byte. **[1]**

**9.** Describe how a checksum is used to detect errors in transmitted data. **[4]**

**10.** A computer sends data to a remote device using an echo check.

**(a)** Describe how the echo check works. **[3]**
**(b)** Explain one weakness of the echo check. **[1]**

**11.** The first 12 digits of an ISBN-13 are 978157231234. The check digit is calculated by multiplying the digits
alternately by 1 and 3, adding the results, and choosing the digit that makes the total a multiple of 10.

**(a)** Calculate the check digit. Show your working. **[3]**
**(b)** A librarian types the ISBN with the last two of the first twelve digits swapped. Explain how the check digit
helps the computer detect this. **[2]**

**12.** Describe how an automatic repeat query (ARQ) is used to make sure data is received without error. **[5]**

---

## Answers

**1.** Any two from: data loss [1]; data gain [1]; data change (bits flipped) [1]

**2.** 1100101 has four 1s, which is already even, so the parity bit is **0** [1]

**3.** **10110110** (five 1s, an odd total) [1]

**4.** To detect errors made when data (such as a product number) is entered [1]

**5.** Any one from: ISBNs [1]; bar codes [1]

**6.** A positive acknowledgement [1]

**7.** If two bits are changed, the number of 1s is still even (or still odd) [1]; for example, with even parity, 01100110 sent and 01010110 received both have four 1s, so the error is not detected [1]

**8. (a)** Byte 2 has three 1s, an odd total, so the error is in byte 2 [1]; column 7 has three 1s (0, 0, 1, 1, 1), an odd total, so the error is in column 7 [1]; the error is where they meet: **byte 2, column 7** [1]
**(b)** **00111010** [1] **[4]**
*Examiner insight:* The row alone is only one mark; the method marks need both the row and the column with the counts that show they are odd.

**9.** The sender calculates a checksum from the data using an agreed method [1]; the checksum is sent with the data [1]; the receiver recalculates the checksum from the data it receives, using the same method [1]; if the two checksums are different, an error has occurred and the data is requested again [1]

**10. (a)** The remote device sends a copy of the data it received back to the computer [1]; the computer compares the returned copy with the original data [1]; if they are different, an error has occurred and the data is sent again [1]
**(b)** Any one from: the computer cannot tell whether the error happened on the way to the device or on the way back; twice as much data is transmitted [1] **[4]**

**11. (a)** Products: 9, 21, 8, 3, 5, 21, 2, 9, 1, 6, 3, 12 [1]; total = 100 [1]; 100 is already a multiple of 10, so the check digit is **0** [1]
**(b)** The computer recalculates the weighted total from the digits typed [1]; swapping 3 and 4 changes the total (to 98), so the calculated check digit (2) does not match the 0 entered, and the error is detected [1] **[5]**
*Examiner insight:* A check digit of 10 is impossible; when the total is already a multiple of 10, the check digit is 0.

**12.** The sender transmits the data and starts a timer [1]; the receiver checks the data for errors [1]; if there is no error, it sends a positive acknowledgement [1]; if there is an error, it sends a negative acknowledgement and the sender resends the data [1]; if no acknowledgement arrives before the timeout, the sender resends the data automatically [1]

---

## Where marks are usually lost

- Counting the 1s without including the parity bit.
- Locating a parity block error by row only.
- Describing a checksum as "checking the sum of the bits" with no recalculation and comparison.
- Mixing up the echo check (data sent back) with ARQ (acknowledgements).
- Treating a check digit as a check on transmitted data rather than on data entry.
- Leaving the timeout out of an ARQ description.

## More on this topic

- [Methods of error detection study guide](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection/)
- [Methods of error detection revision notes](/resources/cambridge-igcse-computer-science-0478-methods-of-error-detection-revision-notes/)
- [Data Transmission practice questions](/resources/igcse-computer-science-data-transmission-practice/) for the whole topic

## Official syllabus

Cambridge IGCSE Computer Science 0478 syllabus for 2026, 2027 and 2028 (Cambridge International) -- Topic 2 Data
transmission, 2.2 Methods of error detection.
