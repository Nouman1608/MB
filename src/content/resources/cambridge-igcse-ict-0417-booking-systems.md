---
title: "Cambridge IGCSE ICT (0417): Booking systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 6: ICT applications"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 6.5
syllabusTopics:
  - qualification: "igcse"
    topic: "ict-applications"
    subtopic: "booking-systems-0417"
description: "How online booking systems work for travel, concerts, cinemas and sporting events, with their advantages and disadvantages, for Cambridge IGCSE ICT 0417 6.5."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Subtopic 6.5 of Cambridge IGCSE ICT 0417 covers the "characteristics, uses, advantages and disadvantages of online booking systems including travel industry, concerts, cinemas, sporting events". The [ICT Applications study guide](/resources/igcse-ict-applications-systems/) outlines the booking steps. This guide looks more closely at what makes a booking system work, how it stops two people buying the same seat, how the four named uses differ, and how to weigh the advantages and disadvantages for customers and for organisations.

## Characteristics of an online booking system

An **online booking system** is a website or app connected to a central **database** of everything that can be booked: seats, rooms, flights or tickets. Its main characteristics are:

- **Real-time access**: every customer sees the database as it is now, so availability is always up to date.
- **Search and filters**: customers search by date, time, destination, event or price.
- **Interactive seat or room maps**: available seats are shown in one colour and booked seats in another.
- **Secure payment**: card details are sent over an encrypted connection (HTTPS), often with extra checks from the card issuer.
- **Instant confirmation**: a booking reference is shown on screen and sent by email or text.
- **Electronic tickets (e-tickets)**: a ticket with a barcode or QR code, printed at home or shown on a phone and scanned at the venue.
- **Customer accounts**: stored details make the next booking faster and show past bookings.

## How a booking is made

1. The customer searches for the event, film, flight or room and chooses a date and time.
2. The system queries the database and displays what is available.
3. The customer selects seats or a room. The system **holds** these for a short time, so no one else can choose them while the customer completes the booking.
4. The customer enters personal details and payment details.
5. Payment is authorised by the customer's bank.
6. The database is **updated**: the seats are marked as booked and can no longer be selected by anyone.
7. A confirmation and e-ticket are sent to the customer.
8. At the venue, the e-ticket's code is scanned and checked against the database; once used, it cannot be used again.

### Preventing double booking

Two customers might try to book the last seat at the same moment. The system prevents this because:

- the seat is **locked** or held as soon as the first customer selects it, so it disappears from everyone else's choices
- if the first customer does not pay within the time limit, the hold is released and the seat becomes available again
- once payment is made the database is updated immediately

With a manual system, where staff in different offices took bookings by phone, the same seat could be sold twice because the offices did not share up-to-date information.

### What the database stores

Each booking becomes a record in the database. A typical cinema booking record holds:

| Field | Example (invented) |
|---|---|
| Booking reference | CN48213 |
| Customer ID | 10572 |
| Screening | Screen 3, Saturday 19:30 |
| Seats | F7, F8 |
| Amount paid | £18.50 |
| Status | Paid; ticket not yet scanned |

Each seat has its own status field: available, held or booked. The seat map that customers see is drawn directly from these status fields, which is why it is always up to date. When the e-ticket is scanned at the door, the status changes to "used".

## The four named uses

| Use | What is booked | Typical features |
|---|---|---|
| Travel industry | Flights, train tickets, hotel rooms, car hire, holiday packages | Compare prices and times; choose seats; add luggage or meals; prices often change with demand; online check-in and boarding passes on a phone |
| Concerts | Tickets for a performance | Very high demand when tickets go on sale; online queues; limit on tickets per customer; seat map or standing areas |
| Cinemas | A seat for a film at a set time | Choose film, screening and exact seat; accessible seating; collect or scan ticket on arrival |
| Sporting events | Match or tournament tickets | Stadium map by section; membership or season tickets; tickets may be linked to a named person |

When answering, use the context. A question about a concert might raise the risk of the website crashing when thousands of people try to book at once; a question about flights might raise comparing airlines and changing prices.

## Advantages and disadvantages

### For the customer

**Advantages**

- Book 24 hours a day, from anywhere with internet access, with no travel to a booking office or queue.
- See exactly what is available and choose the seat or room.
- Compare prices, times and reviews, and find special offers.
- Instant confirmation; e-tickets cannot be lost in the post and can be stored on a phone.

**Disadvantages**

- Needs a device and an internet connection.
- Risk of fraud: fake websites, or personal and payment data stolen if the site is hacked.
- Booking fees may be added.
- No personal advice from a member of staff.
- Mistakes, such as the wrong date, may be hard or costly to correct.
- Websites may slow down or crash at times of high demand.

### For the organisation

**Advantages**

- Fewer booking staff needed, reducing costs.
- Customers from anywhere can book, increasing sales.
- Real-time database prevents double booking.
- Data on bookings helps plan, for example adding extra screenings of a popular film.

**Disadvantages**

- Cost of building, maintaining and securing the website and database.
- Responsibility for protecting customers' personal and payment data.
- Loss of sales or reputation if the system fails during a busy sale.
- Fewer jobs for booking office staff.

## Worked example: an annotated answer

**Question:** A cinema chain introduces online booking. Explain **two** advantages for customers and **one** disadvantage for the cinema. **[6]**

**Model answer:**

Customers can choose their exact seats from a seat map *(advantage)*, so groups can sit together and do not need to arrive early to get good seats *(consequence in context)*.

Customers can book at any time from home *(advantage)*, so they do not have to travel to the cinema and risk the film being sold out when they arrive *(consequence)*.

The cinema must pay to build and secure the website *(disadvantage)*, and if it is hacked, customers' card details could be stolen, damaging the cinema's reputation *(consequence)*.

Each point names a feature, then says what it means for this cinema and its customers.

## Common mistakes

- Saying the system "stops double booking" without explaining how: the seat is held, then the database is updated at once.
- Writing "it is faster" without saying faster than what, such as queuing at a box office.
- Giving only customer points when the question asks about the organisation.
- Forgetting the e-ticket is checked at the venue against the database.
- Treating all four uses as identical; add one detail from the named context.

## Exam technique

- **Describe** the booking process: give the steps in order, including the database update and confirmation.
- **Explain** an advantage or disadvantage: feature plus consequence, in the context given.
- **Discuss** or **evaluate**: cover customer and organisation, both sides, and finish with a judgement.

## Keep going

- [Booking systems revision notes](/resources/cambridge-igcse-ict-0417-booking-systems-revision-notes/)
- [Booking systems practice questions](/resources/cambridge-igcse-ict-0417-booking-systems-practice/)
- [Banking applications study guide](/resources/cambridge-igcse-ict-0417-banking-applications/)

## Syllabus reference

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Topic 6 "ICT applications", 6.5 Booking systems.
