---
title: "Cambridge A Level Information Technology (9626): Data transmission across networks -- Practice Questions"
seoTitle: "A Level IT 9626 Data Transmission: Practice Questions"
resourceType: "practice-questions"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.5
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "data-transmission-across-networks"
description: "Thirteen original Cambridge 9626 IT section 14.5 questions with answers on bandwidth, bit rate, streaming sums and transmission media."
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

Related: [Data transmission across networks study guide](/resources/cambridge-a-level-ict-9626-data-transmission-across-networks/) | [Communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/)

These questions are for **section 14.5 Data transmission across networks** (Topic 14, A Level) of Cambridge International AS & A Level Information Technology (9626), 2025–2027. Use 1 gigabyte = 8,000 megabits. All organisations and figures are invented.

---

## Section A

**1.** Define the term bandwidth. **[2]**

**2.** Explain the difference between bandwidth and bit rate. **[2]**

**3.** State **two** differences between real-time streaming and on-demand streaming. **[2]**

**4.** Identify **two** properties of fibre optic cable that make it suitable for the backbone of the internet. **[2]**

**5.** Give **one** application of coaxial cable and **one** application of twisted pair cable. **[2]**

## Section B

**6.** A 3 GB file is downloaded at 200 megabits per second.

**(a)** Calculate the download time in seconds. Show your working. **[3]**

**(b)** Explain **two** reasons why the real download may take longer. **[2]**

**7.** A song lasting 4 minutes (240 seconds) is streamed at 256 kilobits per second.

**(a)** Calculate the amount of data sent, in kilobits. **[1]**

**(b)** Convert your answer to megabytes (1 megabyte = 8,000 kilobits). **[2]**

**8.** A home has a connection of 150 megabits per second. One ultra-high definition video stream needs 25 megabits per second.

**(a)** Calculate the greatest number of UHD streams that could run at once. **[1]**

**(b)** Explain why fewer streams may run smoothly in practice. **[2]**

**9.** A 12-minute (720 second) video has a bit rate of 6 megabits per second. It is streamed over a link of 4 megabits per second.

**(a)** Calculate the size of the video in megabits. **[1]**

**(b)** Calculate the time taken to send the whole video. **[1]**

**(c)** Calculate the shortest delay before playback should start so that it never stops. **[2]**

**(d)** State **one** way the streaming service could avoid the delay. **[1]**

**10.** A live match is streamed at 6 megabits per second for 90 minutes. Calculate the amount of data used, in gigabytes. **[3]**

**11.** Compare fibre optic cable and twisted pair cable for a company connecting two buildings 800 metres apart. **[6]**

**12.** A hospital wants to share very large medical scans between its sites and to stream live video of operations to students. Discuss the transmission requirements and suggest suitable media. **[6]**

**13.** Describe the advantages and the limitations of using a laser link between two buildings instead of a cable. **[4]**

---

## Answers

**1.** The maximum amount of data [1] that a channel can carry in a given time, measured in bits per second [1]. **[2]**

**2.** Bandwidth is the capacity of the channel [1]; bit rate is the number of bits actually being sent (or needed) per second, which may be less than the bandwidth [1]. **[2]**

**3.** Real-time: content is sent as it happens, so it cannot be paused or replayed [1]. On-demand: content is stored and sent when requested, so it can be paused, skipped and buffered ahead [1]. (Any two valid differences.) **[2]**

**4.** Any two from: very high bandwidth [1]; signals travel long distances with little loss [1]; not affected by electrical interference [1]; hard to tap, so more secure [1]. **[2]**

**5.** Coaxial: cable television or cable broadband [1]. Twisted pair: telephone lines or Ethernet in a LAN [1]. **[2]**

**6. (a)** 3 × 8,000 = 24,000 megabits [1]; 24,000 ÷ 200 [1] = 120 seconds [1].

**(b)** Any two from: the connection is shared with other users [1]; errors cause packets to be sent again [1]; headers add extra data [1]; the server may be slow [1].

**7. (a)** 256 × 240 = 61,440 kilobits [1].

**(b)** 61,440 ÷ 8,000 [1] = 7.68 megabytes [1].

**8. (a)** 150 ÷ 25 = 6 [1].

**(b)** Other devices share the connection [1], and overheads and signal losses reduce the speed that is actually available [1].

**9. (a)** 6 × 720 = 4,320 megabits [1].

**(b)** 4,320 ÷ 4 = 1,080 seconds [1].

**(c)** 1,080 − 720 [1] = 360 seconds [1].

**(d)** Lower the bit rate of the stream to 4 megabits per second or less [1].

**10.** 90 minutes = 5,400 seconds [1]; 6 × 5,400 = 32,400 megabits [1]; 32,400 ÷ 8,000 = 4.05 gigabytes [1].

**11.** Fibre: much higher bandwidth, so future needs are met [1]; can reach 800 metres with no repeater [1]; not affected by electrical interference between buildings [1]; difficult to tap, so more secure [1]. But it costs more to buy and install [1]. Twisted pair: cheap and easy to install [1]; but limited to about 100 metres per segment, so repeaters are needed over 800 metres [1]; signals weaken and suffer interference [1]. Recommendation: fibre, because of the distance [1]. Maximum 6 marks. **[6]**

**12.** Large scans need high bandwidth so that they transfer in reasonable time [1], but a delay is acceptable [1]. Live video of operations needs a steady bit rate and low delay [1], and high quality needs a high bit rate, since students must see detail [1]. Real-time streams cannot be buffered far ahead, so the link must have enough bandwidth throughout [1]. Fibre optic links between sites give high bandwidth over distance [1]; wired connections inside buildings are more reliable than Wi-Fi [1]. Maximum 6 marks. **[6]**

**13.** Advantages: no cable needs to be laid or dug under a road [1]; quick to set up [1]; very high speed [1]. Limitations: needs a clear line of sight [1], so fog, heavy rain or birds can interrupt it [1]; must be aligned exactly and can be affected if buildings move [1]; short to medium distance only [1]. Maximum 4 marks. **[4]**

## Where marks are usually lost

- Leaving out the conversion from gigabytes to megabits.
- Using bandwidth and bit rate as if they were the same thing.
- Forgetting to give units in answers.
- Comparing media without referring to the distance or the scenario.
- Saying a live stream can be paused and replayed.
