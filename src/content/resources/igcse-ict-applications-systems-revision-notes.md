---
title: "IGCSE ICT: Applications — Modelling to Satellite Systems — Revision Notes"
resourceType: "revision-notes"
subject: "ict"
level: ["igcse"]
topic: "ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 7
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "modelling-applications-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "computer-controlled-systems-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "school-management-systems-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "booking-systems-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "banking-applications-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "computers-in-medicine-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "expert-systems-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "computers-in-the-retail-industry-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "recognition-systems-0417"
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "satellite-systems-0417"
description: "Condensed recall notes on modelling, control, school, booking, banking, medical, expert, retail, recognition and satellite systems for Cambridge IGCSE ICT 0417."
author: "marlbridge-academic-team"
publishedDate: 2026-11-08
featured: false
---

Condensed for the final weeks. These notes cover subtopics 6.2–6.11 of
Topic 6, ICT applications, in Cambridge IGCSE ICT 0417. For the full
explanation, use the [ICT applications study guide
(6.2–6.11)](/resources/igcse-ict-applications-systems/); for 6.1 use the
[Communication revision notes](/resources/igcse-ict-applications-communication-revision-notes/).

## The answer pattern for every subtopic

Most questions ask how a system works and for its advantages and
disadvantages. Give **the feature → its effect in the scenario**: "an
online booking system updates seat availability instantly, **so** the
same seat cannot be sold twice."

## 6.2 Modelling — what is modelled

Personal finance · bridge and building design · flood water management · traffic management · weather forecasting.

| Advantages (vs humans / real tests) | Disadvantages |
|---|---|
| Cheaper than real prototypes | Only as accurate as its data and formulas |
| Safer — dangerous scenarios tested | May not represent every real condition |
| Faster — many "what if?" runs | Software and expertise can be expensive |

## 6.3 Computer control

Robotics in manufacture · production line control · autonomous vehicles.

| Advantages | Disadvantages |
|---|---|
| Work 24/7 without breaks | High set-up cost |
| Consistent quality, precise | Costly maintenance/reprogramming |
| Safe in hazardous places | Poor at unexpected situations |
| Lower long-run cost | Loss of manual jobs |

## 6.4 School management

- **Registration/attendance** — electronic, swipe/RFID cards or biometrics → accurate, instant records; absence patterns spotted; emergency roll call.
- **Learner performance** — marks and grades analysed for reports and support.
- **Computer aided learning** — self-paced, instant feedback; needs devices, cannot fully replace a teacher.

## 6.5 Online booking

Travel · concerts · cinemas · sporting events.

Process: search → choose seat/date → personal and payment details → e-ticket; database updated immediately.

**+** any time, anywhere; choose seats; offers; instant confirmation. **−** needs internet; fraud/hacking risk; fees; less personal.

## 6.6 Banking

**ATM functions:** withdraw cash · deposit cash or cheques · check balance · mini statement · pay bills · transfer money.

Card in → PIN checked → ATM contacts bank computer → account checked → transaction done.

Also know: **EFT** (electronic transfer between accounts, e.g. wages), **credit/debit card transactions**, **cheques**, **internet banking** (any time, no travel; needs internet, phishing risk).

## 6.7 Medicine

- **Patient records** — history, tests, treatments; quick access for authorised staff.
- **Pharmacy records** — prescriptions; allergy and interaction checks; stock.
- **3D printing** — prosthetics · tissue engineering · artificial blood vessels · customised medicines.

## 6.8 Expert systems

Uses: mineral prospecting · car engine fault diagnosis · medical diagnosis · chess · financial planning · delivery route scheduling · plant and animal identification.

| Component | One-line role |
|---|---|
| User interface | Questions in, results out |
| Knowledge base | Facts |
| Rules base | IF ... THEN rules |
| Inference engine | Applies rules to facts and answers |
| Explanation system | Shows how the conclusion was reached |

## 6.9 Retail

- **POS:** barcode read → price looked up → **stock updated** → at reorder level, **new stock ordered automatically**.
- **EFTPOS:** card validity check → chip and PIN / contactless / NFC phone → shop computer contacts **bank computer** → funds checked → authorised.
- **Internet shopping:** any time, compare prices, delivery; but cannot see goods, delivery cost/delay, payment security risk.

## 6.10 Recognition systems

| | Uses named in the syllabus |
|---|---|
| **OMR** | School registers, multiple-choice papers, barcode, QR code |
| **OCR** | ANPR |
| **RFID** | Stock tracking, passports, automobiles, contactless payment |
| **NFC** | Smartphone payment |
| **Biometric** | Face, iris, retina, finger, thumb, hand, voice |

## 6.11 Satellite systems

**GPS** (position from several satellites) · **sat nav** (GPS + maps → directions) · **GIS** (layers of geographic data) · **satellite TV and phones** (reach remote areas).

**+** works almost anywhere, accurate, saves time and fuel. **−** signal loss in tunnels/cities, outdated maps, costly equipment.

## Worked example: a 4-mark "describe" answer

*Question:* Describe how a supermarket's computer system checks a card payment at the till. **[4]**

```
1. The EFTPOS terminal checks the card is valid (not expired, not stolen).
2. The customer enters a PIN, or taps a contactless card or NFC phone.
3. The supermarket's computer contacts the bank's computer to check
   that the account has enough funds.
4. The bank authorises the payment and the money is transferred.
```

Each line is one creditable step in the right order. An answer that
only says "the bank checks the card" scores one mark at most, because it
leaves out the validity check, the PIN or contactless step and the
authorisation.

## Exam traps

- Calling a model's output a fact rather than a prediction.
- Swapping knowledge base (facts) and rules base (rules).
- OMR reads marks; OCR reads text — do not swap them.
- POS updates stock; EFTPOS handles payment.
- Generic "it is faster" without saying what is faster and why.

## Self-test

1. Give two advantages of using a computer model to design a bridge.
2. Name the five components of an expert system.
3. Describe how a POS system knows when to reorder stock.
4. State two uses of RFID named in the syllabus.
5. What is the difference between GPS and a GIS?

**Answers:** 1. Cheaper than building prototypes; dangerous loads such as earthquakes can be tested safely. 2. User interface, inference engine, knowledge base, rules base, explanation system. 3. Each sale reduces the stock level in the stock file; when it reaches the reorder level the system orders more. 4. Any two of tracking stock, passports, automobiles, contactless payment. 5. GPS works out a position; a GIS stores and layers geographic data for analysis and planning.

## Frequently asked questions

**What is the difference between POS and EFTPOS?**
In Cambridge IGCSE ICT (0417), a POS system reads barcodes, looks up prices and updates the stock file, reordering automatically at the reorder level. EFTPOS handles the card payment by checking the card, contacting the bank's computer and authorising the transfer.

**What is the difference between GPS and GIS?**
GPS works out a position using signals from several satellites, while a GIS stores and layers geographic data for analysis and planning. Sat nav combines GPS with maps to give directions.

**Is the output of a computer model a fact?**
No. A model's output is a prediction, and it is only as accurate as the data and formulas used, so it may not represent every real condition.

**How should you structure answers on ICT applications?**
Give the feature and then its effect in the scenario, for example that an online booking system updates seat availability instantly, so the same seat cannot be sold twice.

## Official syllabus

Cambridge IGCSE ICT (0417) syllabus for examination 2026-2028 —
[cambridgeinternational.org](https://www.cambridgeinternational.org/Images/697139-2026-2028-syllabus.pdf).
