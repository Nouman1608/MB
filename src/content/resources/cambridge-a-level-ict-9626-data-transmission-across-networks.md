---
title: "Cambridge A Level Information Technology (9626): Data transmission across networks"
seoTitle: "A Level IT 9626 Data Transmission: Study Guide"
resourceType: "study-guides"
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
description: "Cambridge 9626 IT section 14.5 study guide: bandwidth, bit rate, streaming, fibre optic, coaxial and twisted pair cables, lasers and their effect on bandwidth."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-20
reviewNote: "2026-11-20: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.5 Data transmission across networks** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on speed, streaming and transmission media. Use it with the [data transmission practice questions](/resources/cambridge-a-level-ict-9626-data-transmission-across-networks-practice/).

## What section 14.5 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Speed of transmission | Define bandwidth and bit rate, and compare the bandwidths of different media and internet access technologies |
| Data streaming | Explain real-time and on-demand streams, and the impact of bit rate and bandwidth |
| Transmission methods | Describe the properties of fibre optic, copper (coaxial and twisted pair) and laser methods, and their applications |
| Effect of medium | Explain how the medium limits bandwidth for data, audio and video streaming and ultra-high definition television |
| Evaluation | Give advantages and disadvantages of each method |

## Speed of transmission

**Bandwidth** is the maximum amount of data that a communication channel can carry in a given time, measured in bits per second (bit/s), with prefixes: kilobit/s, megabit/s (Mbit/s), gigabit/s (Gbit/s). It is the capacity of the "pipe". In a more technical sense, bandwidth is the range of frequencies that a channel can carry, and a wider range carries more data.

**Bit rate** is the number of bits actually transmitted (or needed) per second. A video might have a bit rate of 5 Mbit/s. A connection might have a bandwidth of 100 Mbit/s.

The difference: bandwidth is the **capacity** of the channel; bit rate is the **actual rate** being used. If many users share a channel, each one's bit rate is lower than the channel's bandwidth. The **throughput** (the real rate achieved) is usually lower than the stated bandwidth because of sharing, errors, distance and the extra data (headers) that every packet carries.

Always convert units carefully. Storage sizes are in **bytes** (8 bits per byte), but transmission speeds are in **bits**.

**Worked example 1: download time.** A 1.5 GB file is downloaded over a connection that delivers 50 Mbit/s.

1. 1.5 GB = 1.5 × 8,000 = 12,000 megabits (using 1 GB = 8,000 megabits).
2. Time = 12,000 ÷ 50 = **240 seconds**, which is 4 minutes.

On a 1 Gbit/s (1,000 Mbit/s) wired connection, the same file would take 12,000 ÷ 1,000 = 12 seconds if the full speed is achieved.

### Typical bandwidths

The figures vary with the exact standard and equipment, so use them for comparison only.

| Medium or technology | Typical bandwidth |
|---|---|
| Dial-up telephone modem | Around 56 kbit/s |
| ADSL broadband (copper telephone line) | Tens of Mbit/s |
| Mobile (4G) | Tens of Mbit/s, varying with signal |
| Mobile (5G) | Hundreds of Mbit/s, and higher in good conditions |
| Wi-Fi (modern standards) | Hundreds of Mbit/s to several Gbit/s, shared and reduced by distance and walls |
| Ethernet over twisted pair | 100 Mbit/s up to 1 or 10 Gbit/s, depending on the category of cable |
| Coaxial cable (cable broadband) | Hundreds of Mbit/s to around 1 Gbit/s, shared between users |
| Fibre optic | Gigabits per second for homes, and much higher in the core of the internet |

## Data streaming

**Streaming** sends audio or video continuously so that it can be played while it is still arriving, without waiting for a complete download. The player holds a short **buffer** of data to smooth out variations.

- **Real-time (live) streaming:** content is sent as it happens, such as a live match, a news broadcast or a video call. The delay must be short, and it cannot be paused or restarted, since the data does not exist yet. The bit rate is limited by the slowest part of the link at that moment.
- **On-demand streaming:** content is stored on a server and sent when the user asks for it. It can be paused, rewound or skipped, and the player can buffer ahead.

### Impact of bit rate and bandwidth on streaming

- If the available bandwidth is **at least** the bit rate of the stream, playback is smooth.
- If it is **less**, the buffer empties and playback stops to re-buffer, or the service lowers the quality (reducing resolution and bit rate).
- Higher quality needs a higher bit rate: standard definition needs less than high definition, and ultra-high definition needs far more.
- Many users on one connection share the bandwidth.

**Worked example 2: streams on one link.** A standard high-definition stream uses 5 Mbit/s. A home link provides 100 Mbit/s.

- Number of HD streams = 100 ÷ 5 = **20**.
- An ultra-high definition stream needs 25 Mbit/s: 100 ÷ 25 = **4** streams.
- Data used by one hour of HD: 5 × 3,600 = 18,000 megabits = 18,000 ÷ 8 = **2,250 MB**. One hour of UHD: 25 × 3,600 ÷ 8 = 11,250 MB, which is **11.25 GB**.

In practice, other devices and overheads reduce the number of streams that can run smoothly.

**Worked example 3: stream faster than the link.** A 10-minute video (600 seconds) has a bit rate of 8 Mbit/s but the connection is 5 Mbit/s.

1. Data in the video = 8 × 600 = 4,800 megabits.
2. Time to deliver it at 5 Mbit/s = 4,800 ÷ 5 = 960 seconds.
3. To avoid stopping, playback must start at least 960 − 600 = **360 seconds** after the download begins, so the buffer never runs dry. Alternatively, the service lowers the bit rate to 5 Mbit/s or less.

## Transmission methods

### Copper cables

**Twisted pair** has pairs of copper wires twisted together. The twisting reduces interference. It is used for telephone lines and for Ethernet LANs. *Advantages:* cheap; easy to install; good for short runs up to about 100 metres. *Disadvantages:* the signal weakens with distance; affected by electrical interference; lower bandwidth than fibre; can be tapped.

**Coaxial cable** has a central copper core, an insulating layer, a metal shield and an outer cover. The shield reduces interference. It is used for cable television, cable broadband and aerial connections. *Advantages:* higher bandwidth and better shielding than basic twisted pair; works over longer distances. *Disadvantages:* thicker and less flexible; more expensive than twisted pair; bandwidth is shared between many users in a cable network.

### Fibre optic cable

A very thin strand of glass (or plastic) carries data as **pulses of light**. Light stays inside the strand because of reflection at the boundary of the core. **Multi-mode** fibre suits shorter distances, such as inside a building. **Single-mode** fibre has a thinner core and suits very long distances. *Advantages:* very high bandwidth; signals travel far before they need regenerating; not affected by electrical interference; hard to tap; thin and light. *Disadvantages:* cable and equipment cost more; installation needs skill; fragile if bent sharply; repair is more difficult. *Uses:* the backbone of the internet, undersea cables, broadband to homes and links between buildings.

### Lasers

A laser produces a narrow beam of light of one wavelength. Lasers are the light sources in fibre optic links, where they send the pulses. Lasers can also send data through the air between buildings that can see each other, a **free-space optical link**. *Advantages:* very high speeds; no cable needed between sites; quick to set up. *Disadvantages:* needs a clear line of sight, so fog, rain or birds can interrupt the signal; alignment must be exact; usable only over short to medium distances in the air.

## The effect of the medium on bandwidth

The medium sets an upper limit on how fast data can travel and how far.

| Use | Needs | Suitable medium |
|---|---|---|
| Ordinary data transfer | Moderate bandwidth | Twisted pair, Wi-Fi |
| Audio streaming | A few hundred kbit/s | Almost any current link |
| HD video streaming | About 5 Mbit/s per stream | Cable, fibre, good Wi-Fi or mobile |
| Ultra-high definition television | 25 Mbit/s or more per stream | Fibre, cable or strong mobile and Wi-Fi |
| Backbone links between cities | Very large aggregate bandwidth | Fibre optic |

Ultra-high definition (4K and above) has many more pixels than HD, so even after compression it needs a higher bit rate. Several UHD streams in one home demand a fast fibre or cable connection.

## Advantages and disadvantages of the methods: summary

| Method | Advantages | Disadvantages |
|---|---|---|
| Twisted pair | Cheap; easy to install | Limited distance; interference |
| Coaxial | Shielded; higher bandwidth than basic twisted pair | Bulky; shared bandwidth |
| Fibre optic | Highest bandwidth; long distance; no electrical interference | Costly; delicate; skilled installation |
| Laser (free space) | High speed with no cable | Line of sight needed; weather affects it |

## Common mistakes

- Using bandwidth and bit rate as if they were the same.
- Forgetting to multiply bytes by 8 to get bits.
- Saying fibre is "faster" because signals travel at a different speed. Its advantage is greater bandwidth and distance with little loss.
- Saying real-time streams can be paused. A live stream has no stored content to pause.
- Assuming the stated bandwidth is the speed the user gets.
- Describing a laser as a cable.

## Exam technique

- **Define** with units: "the maximum number of bits that can be transmitted per second".
- **Calculations**: write the conversion line (GB to megabits) and then the division.
- **Compare media** using bandwidth, distance, cost, interference and security.
- **Streaming**: link the stream's bit rate to the available bandwidth, and state what happens if the bandwidth is lower.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.5 Data transmission across networks.
