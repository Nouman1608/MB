---
title: "Cambridge IGCSE ICT (0417): Recognition systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.91
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "recognition-systems-0417"
description: "How OMR, barcodes, QR codes, OCR and ANPR, RFID, NFC and biometric recognition work, with uses, pros and cons, for Cambridge IGCSE ICT 0417 subtopic 6.10."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.10 of Cambridge IGCSE ICT 0417 asks for the "characteristics, uses, advantages and disadvantages" of five recognition systems: Optical Mark Recognition (OMR) "including school registers, multiple-choice examination papers, barcode, QR code"; Optical Character Recognition (OCR) "including automated number plate recognition (ANPR) systems"; Radio Frequency Identification Device (RFID) "including tracking stock, passports, automobiles, contactless payment"; Near Field Communication (NFC) "including payment using a smartphone"; and biometric recognition "including face, iris, retina, finger, thumb, hand, voice". The [ICT Applications study guide](/resources/igcse-ict-applications-systems/) gives a one-row summary of each. This guide explains how each one reads its data, follows ANPR step by step, and compares the biometric methods.

## Optical Mark Recognition (OMR)

**How it works:** a printed form has boxes or ovals in fixed positions. The user shades the chosen ones. The OMR reader shines light onto the form; shaded marks reflect less light than blank paper, so the reader detects **where** the marks are. The position of each mark tells the computer what it means, such as "answer B" or "present".

**Uses:**

- **School registers**: teachers shade a box for each learner as present or absent.
- **Multiple-choice examination papers**: candidates shade one option per question, and thousands of sheets are marked automatically.

**Advantages:** very fast for large numbers of forms; more accurate than manual marking or typing; no need for data entry staff; forms are simple to fill in. **Disadvantages:** forms must be printed precisely and filled in correctly; marks outside the box, faint pencil, crossings-out or two marks in one row cause errors; sheets that are creased or damaged may jam or be misread; only suits data that fits set choices.

### Barcodes and QR codes

The syllabus places barcodes and QR codes under OMR because the reader detects a pattern of dark and light areas.

- A **barcode** is a pattern of dark and light bars of different widths that represents a number. A laser or camera scanner reads the reflected light. Barcodes are used on products, library books and luggage labels.
- A **QR (quick response) code** is a square, two-dimensional grid of black and white squares. It holds much more data than a barcode, such as a website address, contact details or a ticket. It is read by a smartphone camera from any angle, and the code still works if part of it is damaged.

**QR advantages:** holds more data; read quickly by phones without a special scanner; can link straight to a website. **QR disadvantages:** a fake QR code can be stuck over a real one to send users to a malicious website; the user needs a camera-equipped device; the user cannot read the content before scanning.

## Optical Character Recognition (OCR)

**How it works:** a scanner or camera captures an **image** of text. OCR software analyses the shapes in the image and recognises each character, converting the image into **editable text** that can be searched, edited or stored in a database.

**Uses:** converting printed documents into word-processed files; reading text on forms; reading passport details at border control; and **ANPR**.

### Automated number plate recognition (ANPR)

1. A sensor detects a vehicle approaching, and a camera captures an image of the front or rear of the vehicle.
2. Software locates the number plate in the image and adjusts brightness and contrast.
3. **OCR** recognises each character on the plate.
4. The registration number is checked against a **database**.
5. The system acts: a car park barrier opens, a parking time is recorded, a toll is charged, or a vehicle of interest is flagged to the police.

**Uses:** car parks, toll roads, congestion and low-emission zones, speed and traffic enforcement, and finding stolen vehicles.

**Advantages:** no staff needed at barriers; works continuously; fast; records exact times. **Disadvantages:** dirty, damaged or non-standard plates and bad weather cause misreads; expensive cameras and software; privacy concerns because vehicle movements are recorded; cloned plates can lead to the wrong owner being charged.

## Radio Frequency Identification Device (RFID)

**How it works:** an RFID **tag** contains a microchip and an aerial. A **reader** sends out radio waves; the tag responds by transmitting the data stored on its chip. **Passive tags** have no battery and are powered by the reader's radio waves, so they work over short distances. **Active tags** have their own battery and can be read from further away. The tag does **not** need to be in line of sight, and many tags can be read at once.

**Uses:**

- **Tracking stock**: tags on pallets or items are read as goods enter and leave a warehouse or shop, giving live stock positions.
- **Passports**: an electronic passport contains an RFID chip storing the holder's details and photograph, read at border control and automatic gates.
- **Automobiles**: tags track vehicles and parts through a factory, and windscreen tags pay road tolls automatically as vehicles pass.
- **Contactless payment**: contactless bank cards use RFID technology.

**Advantages:** no line of sight needed; many items read at once, much faster than scanning barcodes one by one; tags can be read through packaging; tags can hold more data than barcodes, and some can be rewritten. **Disadvantages:** tags cost more than printed barcodes; metal and liquids can interfere with signals; tags can be read without the owner knowing, which raises privacy and security concerns; tags can be damaged or removed.

## Near Field Communication (NFC)

**How it works:** NFC is a form of RFID that works only over a very short range of a few centimetres. Unlike basic RFID, NFC allows **two-way** communication between devices, so a smartphone can act as a card, read a tag, or exchange data with another phone.

**Use named in the syllabus: payment using a smartphone.** Card details are stored in a payment app. The user unlocks the phone with a fingerprint, face scan or PIN and holds it near the reader, which receives the payment details.

**Advantages:** quick; the very short range makes it hard to intercept; the phone must be unlocked by its owner; no physical card needed. **Disadvantages:** the phone must be charged and compatible; a lost or stolen unlocked phone is a risk; not every shop accepts it.

## Biometric recognition

**Biometrics** identify a person from a unique physical or behavioural feature. A sample is captured, converted into data and compared with the stored record.

| Method | What is measured | Strengths | Weaknesses |
|---|---|---|---|
| Face | Shape and position of features such as eyes, nose and mouth | No contact; quick; used on phones and at airports | Affected by lighting, glasses, masks, ageing; privacy concerns |
| Iris | Coloured pattern of the iris | Very accurate; works with glasses | Expensive; user must look into a camera |
| Retina | Pattern of blood vessels at the back of the eye | Very accurate; hard to fake | Intrusive; expensive; slow; user must keep very still |
| Finger and thumb | Ridges and patterns of the print | Cheap; small scanners; quick | Cuts, dirt or worn skin cause rejections |
| Hand | Shape and size of the hand, finger lengths | Simple to use | Large scanner; less unique than other methods |
| Voice | Pitch, tone and pattern of speech | Can be used over the phone | Affected by colds, background noise; recordings can be used to fool it |

**General advantages:** features cannot be lost, forgotten or lent; hard to copy; quick to use. **General disadvantages:** equipment can be costly; false rejections of genuine users and, rarely, false acceptances; biometric data is sensitive, and if it is stolen it cannot be changed like a password; some users find scanning intrusive.

## Common mistakes

- Confusing OMR (detects the position of marks) with OCR (recognises text characters).
- Saying RFID needs line of sight. It does not; barcodes do.
- Saying NFC and RFID are unrelated. NFC is a very short-range, two-way form of RFID.
- Describing ANPR without the OCR step or the database check.
- Listing biometric methods without a strength or weakness of each.

## Exam technique

- **Describe** how a system works: what is captured, how it is read, and what is done with the data.
- **Explain** an advantage: point plus consequence, for example "RFID tags are read without line of sight, so a whole pallet is checked in seconds".
- **Compare** two systems: make a point about each, linked by "whereas".

## Keep going

- [Recognition systems revision notes](/resources/cambridge-igcse-ict-0417-recognition-systems-revision-notes/)
- [Recognition systems practice questions](/resources/cambridge-igcse-ict-0417-recognition-systems-practice/)
- [Computers in the retail industry study guide](/resources/cambridge-igcse-ict-0417-computers-in-the-retail-industry/)

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", 6.10 Recognition systems.
