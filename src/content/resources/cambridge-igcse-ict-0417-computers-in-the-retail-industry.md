---
title: "Cambridge IGCSE ICT (0417): Computers in the retail industry"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.9
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "computers-in-the-retail-industry-0417"
description: "How POS terminals update and reorder stock, how EFTPOS card, contactless and NFC payments are checked, and internet shopping, for Cambridge IGCSE ICT 0417 6.9."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.9 of Cambridge IGCSE ICT 0417 covers computers in the retail industry. The syllabus names point of sale (POS) terminals, "including updating stock files automatically and ordering new stock automatically", and electronic funds transfer at point of sale (EFTPOS) terminals, "including checking of the validity of cards, the use of chip and PIN, the use of contactless cards, the use of Near Field Communication (NFC) payment, the communication between the supermarket computer and the bank computer". It also covers the "characteristics, advantages and disadvantages of internet shopping". The [ICT Applications study guide](/resources/igcse-ict-applications-systems/) summarises these. This guide works through a stock update with numbers, separates the card checks, and weighs internet shopping for customers, businesses and society.

## POS terminals

A **point of sale terminal** is the checkout where a sale is recorded. Its hardware usually includes a **barcode scanner**, a keyboard or touch screen, a customer display, a **receipt printer**, a cash drawer, often **scales** for loose items, and a card reader for payment.

The POS terminal is connected to the store's computer, which holds the **stock file**. Each product has a record such as:

| Field | Example (invented) |
|---|---|
| Barcode number (key field) | 5012345678900 |
| Description | Wholemeal bread 800 g |
| Price | £1.45 |
| Number in stock | 25 |
| Reorder level | 20 |
| Reorder quantity | 60 |
| New order flag | No |

### What happens when an item is scanned

1. The scanner reads the **barcode number**.
2. The number is sent to the store's computer, which searches the stock file for the matching record.
3. The **price and description** are sent back to the POS terminal, displayed and added to the itemised receipt.
4. The **number in stock** is reduced by one.
5. The computer compares the number in stock with the **reorder level**.

If a barcode will not scan, the operator types the number in by hand.

### Worked example: automatic stock updating and reordering

The figures are the invented ones in the table above.

1. Six loaves are sold during the morning. Stock falls from 25 to **19**.
2. 19 is below the reorder level of 20, and the new order flag is "No".
3. The computer automatically sends an order for the **reorder quantity** of 60 loaves to the supplier, and sets the new order flag to "Yes".
4. Two more loaves are sold. Stock falls to 17, but because the flag is "Yes", **no second order** is sent.
5. The delivery of 60 arrives. Staff scan it in, stock rises to 77 and the flag is reset to "No".

The flag is what stops the system ordering again after every sale while it waits for the delivery. Questions often expect you to mention it.

**Advantages of automatic stock control:** shelves rarely run empty; no staff time spent counting stock; accurate records; sales data shows which products sell best. **Disadvantages:** the system is expensive; if a barcode is wrong or a theft is not recorded, the stock figures become inaccurate; a network failure stops sales being processed.

## EFTPOS terminals

An **EFTPOS terminal** is the card reader used to pay. Electronic funds transfer at point of sale means the money moves electronically from the customer's bank account to the shop's account.

### Checking the validity of the card

Before any money moves, the system checks:

- the card has not passed its **expiry date**
- the card has not been reported **lost or stolen**
- the card number is genuine for that bank
- for chip and PIN, that the **PIN** entered matches the one stored on the chip

### Chip and PIN

1. The customer inserts the card. The terminal reads the chip.
2. The customer types the PIN on the keypad, which is checked against the chip.
3. The terminal sends the request to the bank's computer.

The chip is much harder to copy than a magnetic stripe, and the PIN means a stolen card cannot easily be used.

### Contactless cards

The customer holds the card near the reader. A chip and aerial inside the card send the details by radio over a few centimetres. No PIN is needed for small amounts, up to a limit set by the bank or country, and the customer may be asked for a PIN from time to time as a security check.

**Advantages:** very quick, which shortens queues; nothing to type. **Disadvantages:** a lost card can be used for small purchases until it is stopped; customers may lose track of spending; the customer may not notice a payment being taken in error.

### NFC payment

**Near Field Communication** lets a **smartphone** or smartwatch act as the card. Card details are stored securely in a payment app. The customer unlocks the phone with a fingerprint, face scan or PIN and holds it near the reader. Because the phone must be unlocked by its owner, NFC payment is often considered more secure than a contactless card, which works for anyone holding it.

### Communication between the supermarket computer and the bank computer

1. The supermarket's computer sends the card details and the amount to the bank's computer.
2. The bank checks that the card is valid and that the account has **enough funds** or credit.
3. If so, the bank **authorises** the payment and sends back an authorisation code.
4. The amount is **debited** from the customer's account and **credited** to the supermarket's account.
5. The terminal shows "approved" and a receipt is printed. If the bank declines, the customer must pay another way.

## Internet shopping

**Characteristics:** an online catalogue with pictures, descriptions, prices and reviews; a search facility; a **shopping basket**; a **checkout** where delivery and payment details are entered over a secure (HTTPS) connection; a customer account storing addresses and order history; order confirmation and delivery tracking.

| Group | Advantages | Disadvantages |
|---|---|---|
| Customers | Shop at any time; no travel; compare prices easily; wider choice; goods delivered; reviews help decisions | Cannot see or try goods; delivery charges and waiting time; returns can be awkward; risk of fraud and fake websites; needs internet access; less social contact |
| Businesses | Customers anywhere; no need for many shops, cutting rent and staff costs; open all the time; data on what customers buy | Website and delivery costs; more competition, as customers compare prices; must protect customer data; costs of returns |
| Society | Less travel to shops for some people; helpful for people who find it hard to get to shops | Closure of high-street shops; fewer shop jobs, although more warehouse and delivery jobs; more delivery vans on the roads |

## Common mistakes

- Saying the POS terminal stores prices. Prices are in the stock file on the store's computer.
- Leaving out the comparison with the reorder level, or the new order flag.
- Saying the EFTPOS terminal checks the balance. The **bank's computer** does.
- Confusing contactless cards with NFC phone payments.
- Writing "internet shopping is cheaper" without saying why, such as lower costs for the seller or easier price comparison.

## Exam technique

- **Describe** POS: scan, look up, return price and description, reduce stock, compare with reorder level, order, set flag.
- **Describe** EFTPOS: card checks, PIN or tap, request to bank, funds checked, authorised, debit and credit.
- **Discuss** internet shopping: decide whether the question asks about customers, businesses or both, and give both sides with a judgement.

## Keep going

- [Retail industry revision notes](/resources/cambridge-igcse-ict-0417-computers-in-the-retail-industry-revision-notes/)
- [Retail industry practice questions](/resources/cambridge-igcse-ict-0417-computers-in-the-retail-industry-practice/)
- [Recognition systems study guide](/resources/cambridge-igcse-ict-0417-recognition-systems/)

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", 6.9 Computers in the retail industry.
