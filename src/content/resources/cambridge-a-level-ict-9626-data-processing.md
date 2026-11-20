---
title: "Cambridge A Level Information Technology (9626): Data processing"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 1 – Data processing and information"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 1.5
syllabusTopics:
  - qualification: "a-level"
    topic: "data-processing-and-information"
  - qualification: "a-level"
    topic: "data-processing-and-information"
    subtopic: "data-processing"
description: "Cambridge 9626 IT section 1.5 study guide: batch, online and real-time processing, master and transaction files, worked update algorithm, and advantages and disadvantages."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 1.5 Data processing** of Topic 1 Data processing and information in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is AS Level content, examined in Paper 1 Theory. The [Data processing and information overview](/resources/a-level-cambridge-ict-data-processing-and-information/) gives the three methods briefly; this page explains the steps in each, includes a worked master-file update, and shows how to write the steps as an algorithm. Use it with the [data processing practice questions](/resources/cambridge-a-level-ict-9626-data-processing-practice/).

## What section 1.5 covers

| Syllabus point | What you must be able to do |
|---|---|
| Batch processing | Describe methods and uses: utility bills, credit and debit card accounts, customer accounts, master and transaction files in payroll and customer orders, and the steps in sequentially updating a master file |
| Online processing | Describe the steps in electronic funds transfer, automatic stock control, electronic data interchange, business-to-business buying and selling, and online shopping |
| Real-time processing | Describe systems where the output affects the input, including microprocessor-controlled systems and wireless sensor and actuator networks |
| Algorithms | Write an algorithm to show the steps in a method of processing (see section 4.1) |
| Evaluation | Give advantages and disadvantages of each method |

## Batch processing

In **batch processing**, data is collected over a period and stored. It is then processed **all at once** as a single job, normally with **no user interaction** while it runs. It is often scheduled for the night, when the computer is not busy.

### Uses

- **Utility bills:** meter readings are collected during the month. At the end, the system calculates every customer's bill and prints or emails them all.
- **Credit and debit card accounts:** transactions during the month are collected, and the monthly statements are produced in one run.
- **Customer accounts:** payments and orders are applied together at the end of the day.
- **Payroll:** hours worked are collected in a **transaction file**, and the processing updates each employee's record in the **master file** and produces payslips.
- **Customer orders:** orders collected during the day are processed overnight to update stock and print picking lists.

### Master and transaction files

| Term | Meaning |
|---|---|
| **Master file** | The permanent file holding the current, full details of all records, such as every employee's name, pay rate and year-to-date pay |
| **Transaction file** | A temporary file of changes since the last update, such as this week's hours worked |
| **Key field** | The unique field that identifies each record, such as the employee number |

In a **sequential** update, both files are **sorted into the same order of the key field**, so that they can be read together from the start to the end in a single pass.

### Steps in sequentially updating a master file

1. Sort the transaction file into the same key order as the master file, and validate the transactions.
2. Read the first record from the master file and the first from the transaction file.
3. Compare the keys.
   - If the **keys match**, apply the transaction to the master record, write the updated record to the new master file, then read the next transaction and the next master record.
   - If the **master key is smaller**, there is no transaction for this record. Copy it unchanged to the new master file and read the next master record.
   - If the **transaction key is smaller**, there is no matching master record. Write the transaction to an error report (or add a new record if it is an insertion) and read the next transaction.
4. Repeat until both files are at the end. Any remaining master records are copied across.
5. The result is a **new master file**. The old master and the transaction file are kept as back-ups (the "grandfather, father, son" idea), so if something goes wrong the process can be repeated.

### Worked example 1: updating account balances

A shop's master file holds account numbers and balances in pounds. Today's transaction file holds payments (positive) and charges (negative), in account order.

| Master: account | Balance | Transaction: account | Amount |
|---|---|---|---|
| 101 | 50 | 102 | +20 |
| 102 | 80 | 104 | -5 |
| 104 | 20 | 105 | +30 |
| 106 | 10 | 106 | +15 |

Compare the keys step by step.

1. Master 101, transaction 102. The master key is smaller, so copy 101 (50) unchanged.
2. Master 102, transaction 102. Keys match: 80 + 20 = 100. Write 102 (100).
3. Master 104, transaction 104. Keys match: 20 − 5 = 15. Write 104 (15).
4. Master 106, transaction 105. The transaction key is smaller and no master record 105 exists, so report 105 as an error.
5. Master 106, transaction 106. Keys match: 10 + 15 = 25. Write 106 (25).

**New master file:** 101 (50), 102 (100), 104 (15), 106 (25). **Error report:** account 105 not found.

### Writing the update as an algorithm

The syllabus asks you to write the steps as an algorithm (section 4.1 covers pseudocode). A suitable version is:

```
READ master record
READ transaction record
WHILE NOT end of both files
    IF master key = transaction key THEN
        update master balance with transaction amount
        WRITE master record to new master
        READ next master record
        READ next transaction record
    ELSE
        IF master key < transaction key THEN
            WRITE master record to new master
            READ next master record
        ELSE
            WRITE transaction to error report
            READ next transaction record
        ENDIF
    ENDIF
ENDWHILE
```

### Advantages of batch processing

- Efficient for large volumes, as the computer is set up once for a whole job.
- Can run overnight or at quiet times, so it does not slow the system for users.
- Cheaper per record, since staff are not needed during the run.

### Disadvantages of batch processing

- **Results are delayed**: records are out of date until the batch has run.
- If an error is not found until the run finishes, the whole job may need repeating.
- Users cannot query or change records during the processing.

## Online processing

In **online processing** (also called interactive or transaction processing), each transaction is processed **as soon as it is entered**, and the stored data is updated at once. The user gets an immediate response. The system is always available.

### Steps in common online processes

**Electronic funds transfer (EFT).**
1. The customer enters the card and PIN, or the details of a bank transfer.
2. The bank's computer checks the details and the balance.
3. If there is enough money, the amount is taken from the payer's account and added to the payee's account.
4. The balances are updated immediately, and a confirmation is sent.

**Automatic stock control.**
1. A barcode is scanned at the till.
2. The system looks up the product and reduces the stock level by one.
3. If the stock falls to a set re-order level, the system orders more automatically.
4. The stock database is up to date for the next sale.

**Electronic data interchange (EDI).** Businesses exchange documents such as orders and invoices directly between their computers in an agreed standard format.
1. The buyer's system creates an order and sends it over a network.
2. The supplier's system receives it, checks it and updates stock and accounts without anyone retyping it.
3. An acknowledgement and then an invoice are returned the same way.

**Business-to-business (B2B) buying and selling.** A company buys goods from another company through a website or an EDI link, often with agreed prices and automatic re-ordering. The steps are similar to EDI, with stock, payment and delivery records updated as each order is placed.

**Online shopping.**
1. The customer selects items, and the system checks the stock.
2. The customer enters delivery and payment details.
3. The payment is authorised by the bank.
4. Stock is reduced, an order confirmation is sent and the warehouse is told what to pack.

### Advantages of online processing

- Records are always **up to date**, so decisions use current data.
- Customers get an **immediate response**, such as a confirmed booking.

### Disadvantages of online processing

- Needs a **powerful, always-available** system, which is more expensive.
- Many users at once can cause **slow response** or conflicts between updates.
- Greater **security risk** because the system is connected to a network all the time.
- A system failure can stop the whole business until it is fixed.

## Real-time processing

**Real-time processing** deals with input **immediately and continuously**, and the output **affects the next input**, forming a **feedback loop**. The response must be fast enough to influence what is being monitored.

### Microprocessor-controlled systems

Sensors send readings to a microprocessor, which compares them with set values and sends signals to actuators.

**Worked example 2: a greenhouse.**
1. A temperature sensor sends a reading to the microprocessor.
2. The microprocessor compares it with the required value, for example 22 degrees.
3. If it is too hot, the microprocessor sends a signal to open a window motor. If it is too cool, it switches a heater on.
4. The change in temperature is picked up by the sensor as the next input, and the cycle repeats.

The output (heating or cooling) changes the next reading. That is what makes it real-time and not simply online processing.

Other examples named in the syllabus are central heating, air conditioning, burglar alarms, the control of traffic and pedestrian flow (including smart motorways), car park barriers and traffic lights.

### Wireless sensor and actuator networks (WSAN)

A WSAN is a group of sensors and actuators that communicate **wirelessly** and work together.
- **Smart homes:** sensors report movement, light and temperature, and actuators adjust lights, heating and locks.
- **Guidance systems:** a rocket's sensors report position and speed, and actuators adjust the engines to stay on course.
- **Autonomous vehicles** (cars, aircraft, drones and ships): sensors detect surroundings, and the on-board computer controls steering, speed and braking.

### Advantages of real-time processing

- Immediate response to changes, which is essential for safety.
- Keeps a quantity very close to the set value.

### Disadvantages of real-time processing

- Expensive and complex to design, test and maintain.
- A sensor or software fault could cause serious damage or danger.

## Choosing a method

| Scenario | Best method | Reason |
|---|---|---|
| Producing 100,000 electricity bills | Batch | Large volume, no need for an instant result |
| Booking a seat at the cinema | Online | The seat must be reserved straight away, so nobody else can book it |
| Keeping a heart-rate monitor alert in an intensive care unit | Real-time | Output must respond to input at once |
| Monthly payroll | Batch | All employees are paid at the same time |

## Common mistakes

- Saying that online processing is the same as real-time. In real-time processing the **output changes the next input**.
- Forgetting that master and transaction files must be **in the same key order**.
- Describing batch processing as "slow". It is efficient for volume, but the **results are delayed**.
- Writing steps for EFT or online shopping that miss the **check** (balance, stock or authorisation) before the update.

## Exam technique

- For **steps in a process**, number them in order and include the checks and updates.
- For an **algorithm**, use the pseudocode forms from section 4.1 and keep the same indentation as the structure of the loop.
- When asked to **justify** a method for a scenario, link the method to the volume of data, the need for an immediate response and the effect on the next input.
- Evaluate with one advantage and one disadvantage of each method, then a conclusion for the scenario given.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 1 Data processing and information, section 1.5 Data processing.
