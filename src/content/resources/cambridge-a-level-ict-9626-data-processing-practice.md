---
title: "Cambridge A Level Information Technology (9626): Data processing -- Practice Questions"
resourceType: "practice-questions"
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
description: "Twelve original Cambridge 9626 IT section 1.5 questions with answers on batch, online and real-time processing and updating a master file."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs; examination boards hold copyright in their own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data processing study guide](/resources/cambridge-a-level-ict-9626-data-processing/)

These questions are for **section 1.5 Data processing** (Topic 1, AS Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. All organisations are invented.

---

## Section A

**1.** Describe batch processing. **[2]**

**2.** State the difference between a master file and a transaction file. **[2]**

**3.** Identify **two** uses of batch processing. **[2]**

**4.** Explain why real-time processing is used in a central heating system but not in the production of monthly bank statements. **[3]**

**5.** State why a key field is needed in a master file. **[1]**

## Section B

**6.** Castlebrook Water produces quarterly bills from meter readings.

**(a)** Explain why batch processing is suitable. **[2]**

**(b)** State **two** disadvantages of batch processing for the customers. **[2]**

**7.** A master file holds employee numbers and total hours worked this year. The transaction file holds this week's hours. Both are sorted by employee number.

| Master: employee | Total hours | Transaction: employee | Hours this week |
|---|---|---|---|
| 201 | 400 | 201 | 38 |
| 203 | 380 | 202 | 40 |
| 204 | 410 | 204 | 35 |
| 207 | 395 | 207 | 20 |

**(a)** Write down the contents of the new master file after the update. **[4]**

**(b)** State what the update program does with the transaction for employee 202. **[2]**

**(c)** Explain why both files must be sorted in the same order. **[2]**

**8.** Describe the steps in an online shopping transaction from the moment the customer selects a product to the moment the order is confirmed. **[5]**

**9.** A supermarket uses automatic stock control.

**(a)** Describe how the stock level of a tin of beans is kept up to date when it is sold. **[3]**

**(b)** Explain how the system can order new stock without a manager. **[2]**

**10.** Below is the start of an algorithm for a greenhouse controller.

```
REPEAT
    READ temperature
    IF temperature > 25 THEN
        open window
    ELSE
        IF temperature < 18 THEN
            switch heater on
        ENDIF
    ENDIF
UNTIL system is switched off
```

**(a)** Explain why this is a real-time processing system and not just online processing. **[3]**

**(b)** Identify the input, the process and the output when the temperature is 28 degrees. **[3]**

**11.** Compare online processing with batch processing for a bank's customer accounts. **[4]**

**12.** Tarn Motors orders parts from its suppliers using electronic data interchange (EDI).

**(a)** Describe how an order is sent and processed using EDI. **[3]**

**(b)** Discuss the advantages and disadvantages for the supplier of receiving orders by EDI rather than by post. **[6]**

---

## Answers

**1.** Data is collected over a period and stored [1], then all processed together as one job, usually without user interaction and often at a quiet time [1]. **[2]**

**2.** The master file is the permanent file that holds the current details of every record [1]; the transaction file is a temporary file of changes to be applied to it [1]. **[2]**

**3.** Any two from: utility bills [1]; credit or debit card statements [1]; payroll [1]; customer accounts [1]; processing customer orders overnight [1]. **[2]**

**4.** Central heating needs the output (heat) to change the next input (the room temperature) [1] and must respond immediately to keep the temperature steady [1]. Bank statements are produced once a month from stored data, and the result does not affect the next input, so there is no need for an immediate response [1]. **[3]**

**5.** It identifies each record uniquely so records in the master and transaction files can be matched [1]. **[1]**

**6. (a)** The readings are collected over three months and all bills are needed at the same time [1], so they can be processed together, overnight, at low cost [1].

**(b)** Any two from: the customer's account is out of date until the batch has run [1]; a mistake in a reading is not found until the bills are produced [1]; a customer cannot ask for a bill or balance between runs [1]. **[4]**

**7. (a)** Employee 201: 400 + 38 = 438 [1]. Employee 203: no transaction, so 380 [1]. Employee 204: 410 + 35 = 445 [1]. Employee 207: 395 + 20 = 415 [1].

**(b)** There is no matching record for 202 in the master file [1], so the transaction is written to an error report (and not applied) [1].

**(c)** The program reads both files from start to end in a single pass [1] and compares the keys, so it can only match records correctly if they are in the same order [1]. **[8]**

**8.** The customer selects the item and the system checks that it is in stock [1]. The customer enters delivery and payment details [1]. The payment details are sent to the bank and the payment is authorised [1]. The stock level is reduced and the order is stored [1]. An order confirmation is sent to the customer and the warehouse is told what to pack [1]. **[5]**

**9. (a)** The barcode is scanned at the till [1], the system finds the product record and reduces the stock level by one [1], so the stock database is updated straight away [1].

**(b)** A re-order level is stored for each product [1]. When the stock falls to this level the system automatically creates an order to the supplier [1]. **[5]**

**10. (a)** The sensor reading is processed straight away [1] and the output (window or heater) changes the temperature [1], which is the next input, forming a feedback loop [1].

**(b)** Input: the temperature reading of 28 degrees [1]. Process: the microprocessor compares 28 with 25 and finds it is higher [1]. Output: the signal to open the window [1]. **[6]**

**11.** Online processing updates an account as soon as a transaction occurs, whereas batch processing waits and updates all accounts together [1]. With online, balances are always current, whereas with batch they are out of date until the run [1]. Online needs a powerful system running all the time, whereas batch can run overnight on cheaper equipment [1]. Batch can be done at quiet times with little user impact, whereas online can slow down when many customers use it [1]. **[4]**

**12. (a)** Tarn Motors' system creates the order electronically in an agreed standard format [1]. It is sent over a network directly to the supplier's computer [1]. The supplier's system checks the order and updates stock and accounts without retyping, then sends back an acknowledgement [1].

**(b)** Advantages: no retyping, so fewer errors [1]; orders arrive in seconds instead of days [1]; the supplier's stock and accounts are updated automatically, saving staff time [1]. Disadvantages: the supplier needs compatible software and a network, which costs money [1]; staff need training [1]; if the network fails, orders cannot be received [1]; the data is at risk from hackers unless protected [1]. Conclusion: the benefits normally outweigh the costs for a regular supplier [1]. Any six marks. **[9]**

## Where marks are usually lost

- Describing real-time processing as simply "fast" without the feedback from output to input.
- Updating the master file without explaining how unmatched transactions are handled.
- Writing online shopping steps that leave out the stock check or payment authorisation.
- Giving advantages and disadvantages that apply to all three methods.
- Missing the conclusion in a discuss question.
