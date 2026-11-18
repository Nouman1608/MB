---
title: "Cambridge IGCSE ICT (0417): Computers in the retail industry -- Revision Notes"
resourceType: "revision-notes"
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
description: "Quick-recall notes on POS stock control, EFTPOS card checks, contactless and NFC payment and internet shopping, for Cambridge IGCSE ICT 0417 6.9."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense subtopic 6.9 of Cambridge IGCSE ICT 0417, computers in the retail industry. For the worked stock-control example and full explanations, read the [retail industry study guide](/resources/cambridge-igcse-ict-0417-computers-in-the-retail-industry/); then test yourself with the [retail industry practice questions](/resources/cambridge-igcse-ict-0417-computers-in-the-retail-industry-practice/).

## Syllabus coverage

| Heading | Named content |
|---|---|
| POS terminals | Updating stock files automatically; ordering new stock automatically |
| EFTPOS terminals | Checking validity of cards; chip and PIN; contactless cards; NFC payment; communication between the supermarket computer and the bank computer |
| Internet shopping | Characteristics, advantages and disadvantages |

## Key terms

| Term | Meaning |
|---|---|
| POS terminal | Point of sale: the checkout where items are scanned and the sale recorded |
| EFTPOS terminal | Electronic funds transfer at point of sale: the card reader that takes electronic payment |
| Stock file | Database of products: barcode, description, price, number in stock, reorder level |
| Reorder level | Stock level at which new stock is ordered |
| Reorder quantity | Number of items ordered each time |
| New order flag | Field showing that an order has already been placed, so it is not repeated |
| Chip and PIN | Card with a microchip; customer types a PIN to confirm identity |
| Contactless | Card paid by holding it near the reader, using radio, with no PIN for small amounts |
| NFC | Near Field Communication: very short-range wireless link used to pay with a phone or watch |
| Authorisation | The bank's approval of a payment |

## POS: the scan-to-reorder chain

1. Barcode scanned.
2. Number sent to store computer; stock file searched.
3. Price and description returned; shown and printed on receipt.
4. Number in stock reduced.
5. Stock compared with reorder level.
6. If at or below the reorder level and no order flagged: order sent automatically; flag set.
7. Delivery scanned in: stock increased; flag reset.

**Quick numbers** (invented): stock 14, reorder level 10, reorder quantity 40. Sell 5: stock 9, order 40, flag Yes. Sell 3 more: stock 6, no new order. Delivery: 6 + 40 = 46, flag No.

| POS stock control: for | Against |
|---|---|
| Shelves rarely empty | Expensive system |
| No manual stock counts | Errors if theft or wrong scans are not recorded |
| Accurate, up-to-date records | Network failure stops sales |
| Sales data shows best sellers | Staff need training |

## EFTPOS: checks and payment

**Validity checks:** expiry date; not reported lost or stolen; genuine card number; PIN matches chip.

| Method | How | Plus | Minus |
|---|---|---|---|
| Chip and PIN | Insert card; type PIN | Chip hard to copy; PIN stops use of stolen cards | Slower; PIN can be watched |
| Contactless card | Hold card near reader | Very fast; shorter queues | Lost card usable for small sums; spending harder to track |
| NFC (phone or watch) | Unlock phone; hold near reader | Phone must be unlocked by owner | Needs a charged, compatible device |

**Supermarket computer to bank computer:**

1. Card details and amount sent to the bank.
2. Bank checks validity and funds.
3. Payment authorised (or declined).
4. Customer's account debited; supermarket's account credited.
5. Receipt printed.

## Internet shopping

**Characteristics:** online catalogue; search; reviews; shopping basket; secure checkout (HTTPS); customer account; confirmation email; delivery tracking.

| Group | Advantages | Disadvantages |
|---|---|---|
| Customers | Any time; no travel; easy price comparison; wider choice; home delivery; reviews | Cannot see or try goods; delivery costs and waits; returns; fraud and fake sites; needs internet |
| Businesses | Customers anywhere; fewer shops, staff and rent; always open; customer data | Website and delivery costs; more competition; data protection; returns |
| Society | Less travel for some; helps people who cannot reach shops | Shop closures; shop job losses; more delivery traffic |

## Exam traps

- "The POS terminal stores the price". The stock file on the store's computer does.
- Forgetting the reorder level comparison or the new order flag.
- "The EFTPOS terminal checks the funds". The bank's computer does.
- Mixing up contactless cards and NFC phone payment.
- Answering internet shopping questions only for customers when asked about the business.

## Self-test

1. Give four items of hardware found at a POS terminal.
2. What is the key field in a stock file?
3. What happens to the number in stock when an item is scanned?
4. What is the purpose of the new order flag?
5. Stock is 31, reorder level 30. Three items are sold. What happens?
6. Give three validity checks made on a card.
7. Why is chip and PIN more secure than signing for a payment?
8. Give one disadvantage of contactless cards.
9. Why is NFC phone payment considered more secure than a contactless card?
10. What does the bank's computer check before authorising a payment?
11. Give three characteristics of an internet shopping website.
12. Give two effects of internet shopping on society.

### Answers

1. Any four: barcode scanner; touch screen or keyboard; display; receipt printer; cash drawer; scales; card reader.
2. The barcode number.
3. It is reduced by the number sold.
4. To show an order has been placed, so another is not sent before the delivery arrives.
5. Stock falls to 28, below the reorder level, so the reorder quantity is ordered automatically and the flag is set.
6. Any three: expiry date; not reported lost or stolen; card number genuine; PIN matches.
7. The PIN is known only to the card holder, and the chip is hard to copy.
8. Any one: a lost card can be used for small payments; spending is harder to track; payment may be taken in error.
9. The phone must be unlocked by its owner with a fingerprint, face or PIN.
10. That the card is valid and the account has enough funds or credit.
11. Any three: catalogue; search; reviews; shopping basket; secure checkout; customer account; tracking.
12. Any two: high-street shop closures; fewer shop jobs; more warehouse and delivery jobs; more delivery traffic; less travel to shops.
