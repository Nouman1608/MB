---
title: "Cambridge A Level Computer Science (9618): Data Integrity -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["a-levels"]
topic: "Topic 6: Security, privacy and data integrity"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "AS"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "security-privacy-and-data-integrity"
    subtopic: "data-integrity"
description: "Original questions with worked answers on validation, check digits, double entry, odd parity blocks and checksums for Cambridge AS Computer Science 9618."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Data Integrity study guide](/resources/cambridge-a-level-computer-science-9618-data-integrity/) · [Data Integrity revision notes](/resources/cambridge-a-level-computer-science-9618-data-integrity-revision-notes/) · [Security, privacy and data integrity practice questions](/resources/cambridge-a-level-computer-science-security-privacy-and-data-integrity-practice/)

These questions practise section 6.2 Data Integrity of Cambridge International AS & A Level Computer Science 9618. All codes and data are invented. Answers are in mark-scheme style, with [1] for each creditable point.

---

## Section A

**1.** State the purpose of **verification**. **[1]**

**2.** A field holds the number of children in a family. It must be a whole number from 0 to 15. Name the validation check and give **one** value it would reject. **[2]**

**3.** Explain the difference between a **presence check** and an **existence check**. **[2]**

**4.** State **one** reason why data that passes all its validation checks may still be incorrect. **[1]**

**5.** Which method is used to verify data during data **transfer**?

A: Visual check

B: Double entry

C: Checksum

D: Format check

**[1]**

**6.** A byte is sent using even parity. Two of its bits are changed during transmission. Explain why the receiver does not detect the error. **[2]**

## Section B

**7.** A membership code is two capital letters followed by three digits, for example AB123.

**(a)** Name **two** different validation checks that could be applied to the code, and give an invalid code that each would reject. **[4]**

**(b)** Write pseudocode that repeatedly asks the user for the number of tickets until a value from 1 to 8 is entered. **[3]**

**8.** A six-digit code has a seventh check digit. Weights 1, 3, 1, 3, 1, 3 are applied from the left, and the check digit is (10 − (total MOD 10)) MOD 10.

**(a)** Calculate the check digit for 381604. Show your working. **[3]**

**(b)** A user types 3186042 instead of 3816042. Show that the error is detected. **[2]**

**(c)** A different user types 3861042. Show that this error is **not** detected. **[2]**

**9.** A hospital enters patients' blood test results from paper forms.

**(a)** Describe how **double entry** would be used. **[2]**

**(b)** Give **one** drawback of double entry compared with a visual check. **[1]**

**10.** A block of three bytes is sent with **odd** parity. The leftmost bit of each byte is its parity bit, and the last row is the parity byte. This block is **received**:

| | Bit 1 | Bit 2 | Bit 3 | Bit 4 | Bit 5 | Bit 6 | Bit 7 | Bit 8 |
|---|---|---|---|---|---|---|---|---|
| Byte 1 | 0 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| Byte 2 | 1 | 1 | 0 | 1 | 0 | 1 | 1 | 1 |
| Byte 3 | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 0 |
| Parity byte | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |

One bit has been changed during transmission.

**(a)** Identify the byte and bit that are wrong, explaining how you found them. **[3]**

**(b)** Write the corrected byte. **[1]**

**11.** A checksum is calculated by adding the values of the bytes in a block and taking the result MOD 256.

**(a)** Calculate the checksum for the bytes 17, 240, 96, 133, 58. Show your working. **[2]**

**(b)** Describe what the receiver does with the checksum. **[2]**

**(c)** Explain **one** type of error this checksum method cannot detect. **[1]**

**12.** Explain how validation and verification together help protect the integrity of data entered into an online booking system. **[4]**

---

## Answers

**1.** To check that data has been entered or transferred accurately / matches the original source [1].

**2.** Range check [1]; any value outside 0 to 15, e.g. 16 or −1 [1].

**3.** A presence check makes sure that data has been entered / the field is not empty [1]; an existence check makes sure the value entered exists in a set of allowed values, such as a table or file [1].

**4.** Validation checks only that data is reasonable or allowed, not that it is the true value; e.g. a valid but wrong date of birth [1].

**5.** **C** [1].

**6.** Changing two bits changes the number of 1s by 0 or 2 [1], so the count is still even and the parity bit still appears correct [1].

**7. (a)** Any two, one mark for the check and one for a matching example:

- Length check: must be 5 characters [1]; rejects AB1234 [1].
- Format check: two letters then three digits [1]; rejects 12ABC or A1234 [1].
- Presence check: something must be entered [1]; rejects an empty field [1].

**(b)**

```
REPEAT
   OUTPUT "Enter number of tickets (1 to 8)"
   INPUT Tickets
UNTIL Tickets >= 1 AND Tickets <= 8
```

REPEAT ... UNTIL loop [1]; INPUT inside the loop [1]; correct condition for valid data, both limits [1].

**8. (a)** Products: 3×1 = 3, 8×3 = 24, 1×1 = 1, 6×3 = 18, 0×1 = 0, 4×3 = 12 [1]. Total = 58; 58 MOD 10 = 8 [1]. Check digit = 10 − 8 = **2** [1].

**(b)** From 318604: 3 + 3 + 8 + 18 + 0 + 12 = 44 [1]. 44 MOD 10 = 4, so the check digit should be 6, but 2 was entered, so the code is rejected [1].

**(c)** From 386104: 3 + 24 + 6 + 3 + 0 + 12 = 48 [1]. 48 MOD 10 = 8, so the check digit is 2, which matches the 2 entered, so the code is accepted although it is wrong [1].

**9. (a)** The results are entered twice, ideally by two different people [1]; the computer compares the two versions and flags any differences for checking against the form [1].

**(b)** It takes twice as long / needs twice the staff time [1].

**10. (a)** With odd parity every row and column must have an odd number of 1s. Byte 2 has six 1s, which is even, so the error is in byte 2 [1]. Column 6 has 1 + 1 + 1 + 1 = four 1s (including the parity byte), which is even, so the error is in bit 6 [1]. Every other row and column is odd, so the changed bit is byte 2, bit 6 [1].

**(b)** **11010011** [1].

**11. (a)** 17 + 240 + 96 + 133 + 58 = 544 [1]; 544 MOD 256 = **32** [1].

**(b)** The receiver adds the received bytes and takes MOD 256 in the same way [1]; if the result is not equal to the checksum received, the block has been corrupted and is requested again [1].

**(c)** If two bytes are swapped / arrive in the wrong order, the sum is the same, so the checksum still matches [1].

**12.** Any four: validation checks each item as it is entered against rules [1], for example a range check on the number of guests or a format check on a booking reference [1]; this stops impossible or unreasonable values being stored [1]; verification checks that the data entered matches what the user intended, for example asking the user to confirm the details on screen (visual check) [1] or to type an email address twice (double entry) [1]; together they reduce errors, but cannot guarantee the data is correct [1].

---

## Where marks are usually lost

- Writing an UNTIL condition that describes invalid data, so the loop exits on bad input.
- Omitting the working in check digit questions; the method marks need the products and the total.
- Forgetting to include the parity byte when counting a column.
- Using "range check" for a field with only one boundary.
- Listing parity as a method of verifying data entry.
