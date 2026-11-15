---
title: "A Level Computer Science: Data Representation (A Level) — Revision Notes (Cambridge 9618)"
seoTitle: "Cambridge 9618 A Level Data Representation Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["a-levels"]
topic: "Data Representation"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9618"]
syllabusSeries: "2026"
stage: "A"
order: 13
syllabusTopics:
  - qualification: "a-level"
    topic: "a-data-representation"
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "user-defined-data-types"
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "file-organisation-and-access"
  - qualification: "a-level"
    topic: "a-data-representation"
    subtopic: "floating-point-numbers-representation-and-manipulation"
description: "Condensed notes on enumerated, pointer, set and record types, file organisation, hashing and floating-point normalisation for Cambridge A Level 9618."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-11-08
featured: false
reviewNote: "2026-11-08: reviewed by harris-khan."
---

These revision notes condense Topic 13 Data Representation, A Level content in Cambridge International AS & A Level Computer Science 9618: user-defined data types, file organisation and access with hashing, and binary floating-point numbers with a two's complement mantissa and exponent. It is examined in Paper 3, where conversions, normalisation and the choice of file organisation are standard questions.

Related: [Data Representation (A Level) study guide](/resources/a-level-computer-science-data-representation-a-level/) · [Data Representation (A Level) practice questions](/resources/a-level-computer-science-data-representation-a-level-practice/)

## Syllabus coverage

- **13.1 User-defined data types**: why they are needed; non-composite (enumerated, pointer); composite (set, record, class/object); choosing and designing a type.
- **13.2 File organisation and access**: serial, sequential (key field) and random (record key); sequential and direct access; hashing algorithms to read and write random or sequential files.
- **13.3 Floating-point numbers**: format with two's complement; effect of bit allocation; conversion to and from denary; normalisation and its reasons; approximation, rounding errors, underflow and overflow.

## User-defined types at a glance

| Type | Composite? | Pseudocode | Use |
|---|---|---|---|
| Enumerated | No | `TYPE Size = (Small, Medium, Large)` | A fixed, ordered list of named values |
| Pointer | No | `TYPE TIntPointer = ^INTEGER` | Holds the address of data; builds linked structures |
| Set | Yes | `TYPE DigitSet = SET OF INTEGER` and `DEFINE` | Distinct values with set operations |
| Record | Yes | `TYPE ... DECLARE ... ENDTYPE` | Fields of different types about one item |
| Class/object | Yes | `CLASS ... ENDCLASS` | Data plus the methods that act on it |

**Why user-defined types?** Built-in types cannot model every problem; user-defined types make code clearer, group related data, and let invalid values be rejected.

Pointer operations: `P ← ^X` stores the address of X; `P^` is the value at that address (dereferencing).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--14-choose-a-type.webp" width="900" height="960" alt="Five user-defined types in two bands. Non-composite: an enumerated type (a fixed list of named options) and a pointer (holds the address of a value). Composite: a record (fields of mixed types), a set (collection for membership tests) and a class (data plus its own operations)." loading="lazy">
  <figcaption>Match the data to the type: enumerated for fixed options, record for mixed data, set for membership, class for data with operations.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--15-pointer-memory.webp" width="900" height="780" alt="Memory cells with illustrative addresses. MyPointer (address 1001) holds 1003, the address of Score (address 1003), which holds 42. The statement MyPointer assigned ^Score stores the address; OUTPUT MyPointer^ prints 42." loading="lazy">
  <figcaption>A pointer stores the memory address of a value, and following it gives the value.</figcaption>
</figure>


## File organisation and access

| Organisation | Order of records | Access methods |
|---|---|---|
| Serial | Order of arrival | Sequential only |
| Sequential | Ordered by key field | Sequential; direct via an index |
| Random | Address from hashing the key | Direct (via the hash) |

| Situation | Best choice | Reason |
|---|---|---|
| Log of every door entry | Serial | New records are just appended; read in time order |
| Monthly payroll of all employees | Sequential | Every record is processed in key order |
| Look up one product at a till | Random | Fast direct access to a single record |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--16-file-organisation.webp" width="900" height="880" alt="Three strips of records with illustrative keys. Finding key 31 reads 4 records in a serial file (arrival order), 2 in a sequential file (key order) by sequential access, and 1 in a random file where 31 MOD 10 gives address 1, by direct access." loading="lazy">
  <figcaption>Serial files are in arrival order, sequential files in key order, and random files at a hashed address.</figcaption>
</figure>


## Hashing in four lines

1. Address = hash(key), e.g. key MOD number of addresses.
2. Writing: hash the key; if the address is taken (a **collision**), use the next free address or an overflow area.
3. Reading: hash the key; check the key at that address; if it does not match, search on (next addresses or the overflow area) until found or an empty slot is reached.
4. The hash is applied to the **record key**, and it locates a **record**, not the file.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--17-hash-remainder.webp" width="900" height="1020" alt="With 500 addresses, 74317 and 12817 both hash to address 317. With open addressing the second record goes in the next free address, 318, and is found by hashing and searching forward. With an overflow area it is stored separately and that area is searched serially." loading="lazy">
  <figcaption>A collision is handled by the next free address or by an overflow area; reading uses the same hash as writing.</figcaption>
</figure>


## Floating point rules

- Value = mantissa × 2^exponent; mantissa binary point after the first bit; both in two's complement.
- **Normalised**: positive mantissa starts **01**, negative starts **10**.
- Normalise by shifting the mantissa left and subtracting 1 from the exponent per shift.
- More mantissa bits → more **precision**; more exponent bits → more **range**.
- **Overflow**: number too large for the exponent. **Underflow**: magnitude too small, stored as 0.
- **Rounding error**: many fractions (e.g. 0.1) have no exact binary form.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--18-float-from-denary.webp" width="900" height="910" alt="Four steps for +5.75: binary 101.11; slide the point 3 places left to get 0.10111 with exponent +3; store mantissa 01011100 and exponent 0011; check that 0.71875 times 2 cubed is 5.75." loading="lazy">
  <figcaption>Convert to binary, move the point, store mantissa and exponent, then check by multiplying back.</figcaption>
</figure>


## Worked example: denary to floating point (10-bit mantissa, 6-bit exponent)

Store −6.5.

1. +6.5 = 110.1 → as a fixed-point mantissa 0110.100000 (sign bit 0).
2. Two's complement of 0110.100000: invert to 1001.011111, add 1 in the last place → 1001.100000. Check: −8 + 1 + 0.5 = −6.5.
3. Normalise: the point must follow the first bit, so move it 3 places left: 1.001100000 × 2³. It starts 10, so it is normalised.
4. Mantissa **1001100000**; exponent +3 = **000011**.
5. Check: mantissa = −1 + 0.125 + 0.0625 = −0.8125; −0.8125 × 8 = −6.5.

## Worked example: floating point to denary (8-bit mantissa, 4-bit exponent)

Mantissa 10110000, exponent 1110.

1. Exponent 1110 = −8 + 4 + 2 = −2.
2. Mantissa 1.0110000 = −1 + 0.25 + 0.125 = −0.625.
3. Value = −0.625 × 2⁻² = −0.15625.

## Worked example: normalising

Mantissa 11101000, exponent 0100 (+4). The mantissa starts 11, so it is not normalised.

- Shift left 2 places: 10100000; exponent 4 − 2 = 2 (0010).
- Check: 1.1101000 = −1 + 0.5 + 0.25 + 0.0625 = −0.1875, × 16 = −3. And 1.0100000 = −1 + 0.25 = −0.75, × 4 = −3. Same value, more precision available.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--19-float-normalise.webp" width="900" height="890" alt="Mantissa 00011010 with exponent 0011 starts 00 so is not normalised. Shifting left two places gives 01101000 with exponent 0001; both are 1.625. A negative normalised mantissa starts 10, e.g. 10100000 with exponent 1111 for -0.375. Normalising gives maximum precision and a unique representation." loading="lazy">
  <figcaption>Normalise by shifting left until the first two bits differ, reducing the exponent for each shift.</figcaption>
</figure>


## Range of an 8-bit mantissa, 4-bit exponent system

| Value | Mantissa | Exponent | Denary |
|---|---|---|---|
| Largest positive | 01111111 | 0111 | 0.9921875 × 2⁷ = 127 |
| Smallest positive (normalised) | 01000000 | 1000 | 0.5 × 2⁻⁸ = 1/512 |
| Most negative | 10000000 | 0111 | −1 × 2⁷ = −128 |

## Common mistakes and exam traps

- Losing the sign of a negative value when converting (June 2025, Paper 32).
- Wrong exponent from miscounting the shift of the binary point; moving the point right gives a negative exponent (June 2025).
- A negative "normalised" mantissa written as 11...; it must start 10.
- Serial and sequential confused; direct access to a sequential file described without an index (June 2024).
- Hashing applied to the whole file (June 2024, November 2024).
- Enumerated values written in quotation marks.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-computer-science-data-representation-a-level--20-float-range.webp" width="900" height="900" alt="With an 8-bit mantissa and 4-bit exponent the smallest positive normalised value is 1/512 and the largest is 127; values below underflow to zero and values above overflow. The same 12 bits split 9+3 give more precision and less range; split 7+5 they give more range and less precision." loading="lazy">
  <figcaption>More mantissa bits give precision; more exponent bits give range.</figcaption>
</figure>


## Frequently asked questions

**Why is a normalised mantissa more precise?**
Leading bits that only repeat the sign carry no information. Removing them leaves every mantissa bit free for significant digits.

**What happens if the exponent cannot get any smaller during normalisation?**
The value cannot be normalised within that format; if the number is smaller than the format allows, underflow occurs.

**Can a sequential file be accessed directly?**
Yes, if an index of key values and record positions is kept. Without an index, records must be read in sequence.

## Official syllabus

Cambridge International AS & A Level Computer Science 9618, syllabus for 2027, 2028 and 2029, Topic 13 Data Representation (13.1 to 13.3). Examiner points are summarised on our [9618 past papers page](/resources/cambridge-a-level-computer-science-9618-past-papers/).
