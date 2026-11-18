---
title: "Cambridge O Level Computer Science (2210): Types and methods of data transmission -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 2 – Data transmission"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 2.1
syllabusTopics:
  - qualification: "o-level"
    topic: "data-transmission-2210"
    subtopic: "types-and-methods-of-data-transmission"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 2.1: packets, packet switching, transmission methods and USB."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Types and methods of data transmission study guide](/resources/cambridge-o-level-computer-science-2210-types-and-methods-of-data-transmission/) and [revision notes](/resources/cambridge-o-level-computer-science-2210-types-and-methods-of-data-transmission-revision-notes/)

---

## Section A

**1.** Identify the part of a packet that contains the data being sent. **[1]**

**2.** State **three** items of information stored in a packet header. **[3]**

**3.** State what is meant by full-duplex data transmission. **[1]**

**4.** State **one** reason why data is broken into packets before it is transmitted. **[1]**

**5.** A 6 MiB video clip is sent across a network. Each packet carries a payload of 2 KiB. Calculate the number of packets needed, showing your working. **[2]**

**6.** Identify whether each of the following uses simplex, half-duplex or full-duplex transmission: a television broadcast to a home; two people talking on a mobile phone; a radio system where a driver presses a button to speak and releases it to listen. **[3]**

## Section B

**7.** Describe the process of packet switching. **[5]**

**8.** Explain why the packet header contains both the packet number and the originator's address. **[2]**

**9.** Describe how data is transmitted using serial transmission and using parallel transmission. **[2]**

**10.** A factory connects a control computer to a machine 200 metres away using a cable. Explain why serial transmission is more suitable than parallel transmission for this connection. **[3]**

**11.** Inside a computer, data is moved between the processor and memory using parallel transmission. Explain why parallel transmission is suitable here. **[2]**

**12.** A company uses half-duplex transmission for a link between two offices. Staff complain that file transfers in both directions are slow. Explain why, and identify a more suitable method. **[3]**

**13.** A student connects a new external hard drive to a laptop using USB.

**(a)** Describe how the USB interface is used when the drive is plugged in.

**(b)** Give **two** benefits and **one** drawback of using USB for this drive. **[7]**

**14.** A message is sent as packets numbered 1 to 5. They arrive in the order 3, 1, 5, 2, 4. Explain what the receiving computer does with the packets, and when. **[2]**

---

## Answers

**1.** The payload [1].

**2.** Destination address [1]; packet number [1]; originator's (sender's) address [1].

**3.** Data can be sent in both directions at the same time [1].

**4.** Any one: so that only a damaged or lost packet needs to be resent, not the whole file; so that packets can take different routes and avoid busy links; so that the network can be shared between many users [1].

**5.** 6 × 1024 = 6144 KiB [1]; 6144 ÷ 2 = **3072 packets** [1].

**6.** Television broadcast: simplex [1]; mobile phone conversation: full-duplex [1]; push-to-talk radio: half-duplex [1].

**7.** The data is broken down into packets [1]. Each packet may take a different route across the network [1]. Routers decide the route each packet takes, using the destination address [1]. Packets may therefore arrive out of order [1]. Once the last packet has arrived, the packets are reordered using their packet numbers [1].

**8.** The packet number allows the receiver to put the packets back in the correct order [1]. The originator's address tells the receiver who sent the packet, so a reply or a request to resend can be sent back [1].

**9.** Serial: data is sent one bit at a time along a single wire [1]. Parallel: several bits are sent at the same time along several wires [1].

**10.** Over a long distance such as 200 metres, bits sent in parallel can arrive at slightly different times (skew) [1], so the data can be corrupted [1]. Serial sends bits one after another along one wire, so they arrive in order, and the cable is cheaper because it has fewer wires [1].

**11.** The distance between the processor and memory is very short, so skew is not a problem [1], and sending several bits at once gives the high speed needed [1].

**12.** In half-duplex, data can only travel in one direction at a time [1], so each office must wait for the other's transfer to finish before sending [1]. Full-duplex would be more suitable, as both offices could send at the same time [1].

**13. (a)** When the drive is plugged in, the computer detects that a device has been connected [1] and identifies the type of device [1]. The correct driver is loaded [1], and data is then sent between the laptop and the drive using serial transmission [1].
**(b)** Benefits, any two: the drive can be powered through the USB cable, so no separate power supply is needed [1]; USB is a universal standard, so the drive will work with almost any computer [1]. Also accept: automatic detection; backwards compatible. Drawback, any one: an older USB port may be much slower than the drive could manage, or the cable can only be a few metres long [1].

**14.** The receiver stores the packets as they arrive [1]. Once the last packet has arrived, it reorders them as 1, 2, 3, 4, 5 using the packet numbers in the headers [1].

---

## Where marks are usually lost

- Question 7: describing packets taking "the fastest route", or leaving out that packets are reordered only after the last one arrives.
- Question 10: writing "serial is faster". Speed is parallel's advantage; serial wins on reliability over distance.
- Question 12: naming full-duplex without explaining what is wrong with half-duplex.
- Question 13: giving benefits as single words such as "power" or "standard" rather than full sentences linked to the drive.
- Question 5: dividing 6 by 2 without converting MiB to KiB first.
- Question 6: calling the push-to-talk radio simplex. Both people can speak, just not at the same time, so it is half-duplex.
- Question 8: explaining only one of the two header items. Each needs its own reason.
- Question 14: saying the receiver puts each packet in place as it arrives. The syllabus says reordering happens once the last packet has arrived.
