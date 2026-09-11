---
title: "Cambridge O-Level Computer Science: Data Transmission — Practice Questions (2210)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data Transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
description: "Original exam-style practice questions with full worked answers on packet structure, transmission methods, error detection and encryption, for Cambridge O-Level Computer Science (2210) Topic 2 Data Transmission."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available free from your board.

Related: [Data Transmission study guide](/resources/o-level-cambridge-computer-science-data-transmission/)
and [revision notes](/resources/o-level-computer-science-data-transmission-revision-notes/)

---

## Section A

**1.** State what a parity block check checks that a simple parity check on a single byte does not. **[1]**

**2.** Name the two acknowledgement types used in an automatic repeat query (ARQ). **[2]**

**3.** State one drawback of the USB interface. **[1]**

## Section B

**4.** A large video file is sent across a network to a second computer.

**(a)** Explain why the file is broken into packets rather than sent as one continuous stream. **[2]**
**(b)** Explain how the receiving computer ensures the packets are reassembled in the correct order. **[3]**

**5.** A wireless printer receives print jobs from a computer but never needs to send data back to the
computer.

**(a)** Identify the most suitable transmission direction method for this scenario. **[1]**
**(b)** Explain why full-duplex transmission would be unnecessary here. **[2]**

**6.** A bookshop's stock system uses the last digit of each book's ISBN to check whether the number
has been typed correctly at the till.

**(a)** Name the error-detection method being used. **[1]**
**(b)** Explain how this method differs from a checksum used to verify a transmitted file. **[3]**

**7.** A business wants to send a confidential file to a client over the internet and is choosing
between symmetric and asymmetric encryption.

**(a)** Explain one risk associated with using symmetric encryption for this purpose. **[2]**
**(b)** Explain how asymmetric encryption avoids this risk. **[3]**

**8.** Two computers are connected by a cable that sends 8 bits simultaneously along 8 separate wires,
over a distance of only 30 cm inside a single device.

**(a)** Identify the transmission method being used. **[1]**
**(b)** Explain why this method is well suited to this specific scenario, but less suitable over a
much longer distance. **[3]**

---

## Answers

**1.** A parity block check checks both the rows and the columns of a block of data, allowing it to
identify which specific bit is likely to be incorrect, whereas a simple parity check on a single byte
can only detect that an error has occurred somewhere within that byte, not identify its exact
position [1].

**2.** Positive acknowledgement and negative acknowledgement [2].

**3.** Any one of: cable length limitations, or transmission speed limits compared with some dedicated
interfaces [1].

**4. (a)** Breaking the file into packets allows different packets to travel independently by
different routes across the network as directed by routers, rather than requiring one single
continuous, uninterrupted path for the entire file [1–2].
**(b)** Each packet's header contains a packet number [1]. Because packets can arrive out of order
after travelling by different routes, the receiving computer uses these packet numbers to place the
packets back into their correct original sequence once the final packet has arrived [1–2].

**5. (a)** Simplex transmission [1].
**(b)** Full-duplex transmission would be unnecessary because the printer never needs to send data
back to the computer — only one-way transmission (computer to printer) is ever required in this
scenario, so simplex transmission meets the need without the added complexity of two-way
capability [2].

**6. (a)** Check digit [1].
**(b)** A check digit is calculated from, and validates, a single piece of manually entered data (such
as an ISBN typed at a till), catching data-entry errors made by a person [1–2]. A checksum instead
validates an entire block of data transmitted across a network, calculated before sending and
recalculated on arrival to detect errors introduced during transmission itself, rather than errors
made during manual entry [1–2].

**7. (a)** Symmetric encryption requires the same shared key to be used for both encrypting and
decrypting the file, so that key must be transmitted or shared with the client beforehand, creating a
risk that the key itself could be intercepted by a third party during that exchange [2].
**(b)** Asymmetric encryption uses a public key to encrypt the file and a linked private key to decrypt
it [1]. The public key can be shared openly without compromising security, since only the
corresponding private key — which is never transmitted and stays with the recipient — can decrypt data
encrypted with it, removing the need to securely exchange a secret key at all [2].

**8. (a)** Parallel transmission [1].
**(b)** Over a very short distance, parallel transmission can send multiple bits at once, making it
faster than sending the same bits one at a time [1–2]. Over a much longer distance, the separate wires
are more likely to experience slightly different signal timings (skew), causing the bits sent
simultaneously to arrive at slightly different times and increasing the risk of errors, which is why
parallel transmission is generally reserved for short internal connections rather than long-distance
links [1–2].

## A note on exam technique for this topic

Question 4 rewards describing packet switching and reassembly as a connected process, using the
packet number specifically, rather than stating separately that "packets can arrive out of order" and
"packets are reassembled" without explaining how the two connect. Question 6 rewards keeping check
digits and checksums distinct by what each one actually validates — a check digit catches manual
data-entry errors, a checksum catches transmission errors in a data block — since the study guide
identifies this as a common point of confusion alongside the parity-check-versus-checksum distinction.
