---
title: "IGCSE Computer Science: Data Transmission — Practice Questions (Cambridge 0478)"
resourceType: "practice-questions"
subject: "computer-science"
level: ["igcse"]
topic: "Data transmission"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3
syllabusTopics:
  - qualification: "igcse"
    topic: "data-transmission"
description: "Original exam-style practice questions with full worked answers on packet switching, transmission methods, error detection and encryption, for Cambridge IGCSE Computer Science (0478) Topic 2 Data Transmission."
author: "marlbridge-academic-team"
publishedDate: 2026-09-06
featured: false
---
> **These are original questions written for Marlbridge**, in the style and at the
> standard of the examination. They are **not** reproduced past-paper questions —
> Cambridge International holds copyright in its own papers. Use these alongside the
> official past papers available free from your board.

Related: [Data Transmission study guide](/resources/igcse-computer-science-data-transmission/) and
[revision notes](/resources/data-transmission-revision-notes/)

---

## Section A

**1.** State the three parts of a data packet. **[3]**

**2.** Name the two keys used in asymmetric encryption. **[2]**

**3.** Give one example of a check digit application named in this topic. **[1]**

## Section B

**4.** Describe the process of packet switching for a message sent across a network, from the message
being broken into packets to it being correctly received. **[5]**

**5.** A long cable connects a keyboard to a computer, sending data one bit at a time along a single
wire.

**(a)** Identify the transmission method being described. **[1]**
**(b)** State one advantage of this method compared with parallel transmission over long distances. **[2]**

**6.** A file is transmitted across a network and arrives with several bits changed due to
interference.

**(a)** Name two methods of error detection that could be used to identify this problem. **[2]**
**(b)** Describe how one of these methods works. **[3]**

**7.** Explain the difference between symmetric and asymmetric encryption, and state one drawback of
symmetric encryption that asymmetric encryption avoids. **[4]**

**8.** A network transmits data using half-duplex communication rather than full-duplex. Explain the
difference between the two, and suggest a scenario where half-duplex would be an appropriate choice. **[3]**

**9.** State two benefits and one drawback of using USB to transmit data between a device and a
computer. **[3]**

---

## Answers

**1.** Header, payload, trailer [3].

**2.** Public key and private key [2].

**3.** International standard book number (ISBN), or a bar code [1].

**4.** The message is broken down into smaller packets [1]. Each packet is given a header containing
the destination address, the originator's address and a packet number [1]. Routers along the network
direct each packet, and different packets from the same message may travel by different routes [1].
Because packets travel independently, they may arrive at the destination out of order [1]. The
receiving device uses the packet numbers to reorder the packets correctly once the final packet has
arrived [1].

**5. (a)** Serial transmission [1].
**(b)** Serial transmission is less prone to data corruption over long distances, since sending data
one bit at a time along a single wire avoids the risk of the different bits sent simultaneously along
parallel wires arriving at slightly different times (skew), which becomes more likely to cause errors
as cable length increases [2].

**6. (a)** Any two of: parity check, checksum, echo check [2].
**(b)** For example, a parity check: before transmission, a parity bit is added to make the total
number of 1-bits either always odd (odd parity) or always even (even parity) [1–2]. On arrival, the
number of 1-bits is recounted; if the result does not match the expected odd or even total, an error
is detected [1]. (Checksum or echo check, correctly described, would also gain full marks.)

**7.** Symmetric encryption uses a single shared key for both encrypting and decrypting the data [1–2].
Asymmetric encryption uses a mathematically linked pair of keys — a public key and a private key —
where data encrypted with the public key can only be decrypted using the matching private key [1–2].
A drawback of symmetric encryption is that the single shared key must somehow be transmitted securely
to the other party before it can be used, creating a risk that the key itself could be intercepted;
asymmetric encryption avoids this, since the public key can be shared openly without compromising
security, as only the corresponding private key (which is never transmitted) can decrypt data
encrypted with it, removing the need to transmit any secret key at all [1].

**8.** Half-duplex allows data to travel in both directions, but only in one direction at any given
moment, with devices taking turns [1–2]. Full-duplex allows data to travel in both directions
simultaneously [1]. Half-duplex would be appropriate for a walkie-talkie-style communication system,
where users take turns speaking and it is not necessary for both parties to transmit at exactly the
same time [1].

**9.** Benefits: USB is a standardised connector supported by a very wide range of devices, and it can
supply power to a connected device as well as transmit data [2]. Drawback: USB has transmission speed
limits compared with some dedicated interfaces, and a maximum practical cable length beyond which
reliable transmission is not guaranteed [1].

## A note on exam technique for this topic

Question 4 rewards narrating packet switching as a sequence, exactly as the study guide recommends,
rather than listing facts about packets in any order. Question 6 rewards keeping the three
error-detection methods distinct by what each one actually checks — a parity check counts 1-bits, a
checksum recalculates a value for comparison, an echo check resends the data itself — since these
three methods are easily confused with each other on exam questions that name only one and ask for a
description. Question 9 rewards preparing at least one named benefit and one named drawback of USB specifically, since the study guide flags this as a topic students sometimes wrongly treat as too minor to be examined in its own right on a full paper.
