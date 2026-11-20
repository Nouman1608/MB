---
title: "Cambridge A Level Information Technology (9626): Mobile communication systems"
seoTitle: "A Level IT 9626 Mobile Communication Systems Guide"
resourceType: "study-guides"
subject: "ict"
level: ["a-levels"]
topic: "Topic 14 – Communications technology"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9626"]
syllabusSeries: "2025-2027"
stage: "A"
order: 14.8
syllabusTopics:
  - qualification: "a-level"
    topic: "communications-technology"
  - qualification: "a-level"
    topic: "communications-technology"
    subtopic: "mobile-communication-systems"
description: "Cambridge 9626 IT section 14.8 study guide: cellular network structure, 3G, 4G and 5G, and satellite systems including GPS, mapping, surveillance and broadcasting."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---

This guide teaches **section 14.8 Mobile communication systems** of Topic 14 Communications technology in the Cambridge International AS & A Level Information Technology 9626 syllabus for 2025, 2026 and 2027. It is A Level content, examined in Paper 3 Advanced Theory. The [communications technology revision notes](/resources/a-level-cambridge-ict-communications-technology-revision-notes/) summarise the whole topic; this page goes deeper on cellular and satellite systems. Use it with the [mobile communication systems practice questions](/resources/cambridge-a-level-ict-9626-mobile-communication-systems-practice/).

## What section 14.8 covers

| Syllabus strand | What you must be able to do |
|---|---|
| Cellular networks | Describe the structure of a cellular network and the use of 3G, 4G and 5G |
| Satellite systems | Explain how communications data is prepared, sent and received by satellite systems |
| Applications | Global positioning systems (GPS), global mapping systems, surveillance, telecommunications (television, radio and telephone broadcasting) and ultra-high definition television |

## Cellular networks

### Structure

A **cellular network** divides an area into regions called **cells**. Each cell has a **base station** (a mast with antennas) that communicates by radio with the mobile devices inside the cell. Cells are drawn as hexagons, as this shape tiles an area without gaps, though real cells are irregular.

The main parts:

- **Mobile device** with a SIM that identifies the subscriber.
- **Base station (cell tower)**: sends and receives radio signals to and from devices in its cell.
- **Base station controller / mobile switching centre**: links base stations, manages calls and data, tracks where each device is, and connects to other networks, such as the public telephone network and the internet.
- **Backhaul links**: cable, fibre or microwave links between towers and the core network.

### How a call or data session works

1. The phone registers with the nearest base station, which tells the network where the phone is.
2. When a call or data request starts, the network assigns a radio channel in that cell.
3. The signal passes by radio to the base station, then by backhaul to the switching centre, and on to the destination.
4. As the user moves toward another cell and the signal weakens, the network arranges a **handover**: the call moves to a new base station and channel without interruption.

### Frequency reuse

The radio spectrum is limited. Adjacent cells use **different** frequencies, to avoid interference, but cells far apart can **reuse** the same frequencies. This lets a network serve many more users than there are separate channels. In dense areas, cells are made smaller, with more towers, to give more capacity.

**Worked example 1: frequency reuse.** A network has 70 channels. It uses a pattern of 7 cells, each with a different group of channels.

- Channels per cell = 70 ÷ 7 = **10**.
- If a city has 49 cells in all, the 70 channels are reused 49 ÷ 7 = 7 times, so the city has 7 × 70 = **490** channels in use at one time.

Without reuse, the city would have only 70 channels.

### 3G, 4G and 5G

| Generation | Main features | Typical use |
|---|---|---|
| 3G | Introduced mobile broadband; faster than earlier voice-focused systems; supports basic web, email and video calls | Web browsing and apps on early smartphones |
| 4G | Much faster; designed for data; all-IP network; lower delay (latency); supports HD video streaming | Streaming, video calls, cloud services |
| 5G | Fastest; very low latency; many more devices per area; uses higher frequency bands with smaller cells | Ultra-high definition streaming, Internet of Things, remote control of machines, connected vehicles |

Higher frequencies carry more data but have shorter range and are blocked more easily by walls. So 5G in high bands requires many small cells, while lower bands cover wider areas. Real speeds depend on the signal and the number of users.

**Worked example 2: download time by generation.** A 2 GB file is 16,000 megabits. At a typical 4G speed of 20 Mbit/s, the time is 16,000 ÷ 20 = **800 seconds**, about 13 minutes. At a 5G speed of 300 Mbit/s, the time is 16,000 ÷ 300 = **53 seconds**.

**Advantages of cellular networks:** wide coverage; mobility; no cables to the user; supports voice, text and data; reuse of frequencies. **Disadvantages:** coverage gaps in remote areas or inside buildings; congestion when many users share a cell; data costs; towers are costly to build and raise health and appearance concerns.

## Satellite communication systems

A **communications satellite** orbits the Earth and relays signals between places on the ground. It carries a **transponder** that receives a signal, amplifies it and sends it back to Earth on a different frequency.

### Preparing, sending and receiving data

1. **Preparation:** the data (voice, video or other information) is converted to digital form, compressed and encoded. It is then **modulated** onto a carrier wave, and error-correcting codes are added.
2. **Sending (uplink):** the ground station sends the signal as microwaves from a large dish aimed at the satellite.
3. **Relay:** the satellite's transponder receives the weak signal, amplifies it and changes its frequency, so the output does not interfere with the incoming signal.
4. **Receiving (downlink):** a dish or antenna on the ground receives the signal. The receiver demodulates it, checks and corrects errors, decodes and decompresses it to produce sound, pictures or data.

### Types of orbit

| Orbit | Height | Features |
|---|---|---|
| Geostationary | About 35,786 km above the equator | Stays over one point; three satellites cover most of the Earth; large delay |
| Low Earth orbit | Few hundred to about 2,000 km | Moves across the sky; shorter delay; many satellites are needed for continuous coverage |

**Worked example 3: delay from a geostationary satellite.** Radio waves travel at about 299,792 km/s. A signal goes up to a satellite 35,786 km away and back down, a distance of at least 2 × 35,786 = 71,572 km.

- One-way delay (ground to satellite to ground) = 71,572 ÷ 299,792 = **0.24 seconds**.
- In a two-way phone call, the reply must make the same trip, so there is a gap of about 4 × 35,786 ÷ 299,792 = **0.48 seconds** between speaking and hearing the answer.

This delay is noticeable in conversation. Low Earth orbit satellites, much closer, have a delay of only a few milliseconds.

## Applications

### Global positioning systems (GPS)

A set of satellites, each with a very accurate clock, constantly transmits its **position** and the **time** the signal was sent. A GPS receiver measures how long each signal took to arrive and multiplies it by the speed of light to find its distance from that satellite (**trilateration**). With signals from at least four satellites, the receiver works out its latitude, longitude, altitude and the exact time. A signal that took 0.07 seconds to arrive came from 0.07 × 299,792 = about 20,985 km away.

*Uses:* navigation in cars, ships and aircraft; tracking vehicles and parcels; timing for networks; locating emergency calls. *Limitations:* weak indoors and in tunnels, and signals reflect from buildings; accuracy depends on how many satellites are visible; tracking raises privacy concerns.

### Global mapping systems

Satellite images, combined with GPS data, produce digital maps of the world. Systems for **geographic information (GIS)** display layers such as roads, buildings, land use and traffic. Uses: route planning, urban planning, monitoring changes in forests and coastlines, finding places, and responding to disasters.

### Surveillance

Satellites with cameras and sensors monitor land, sea and air: weather forecasting, crop and forest monitoring, tracking ships and aircraft, military and border monitoring. *Benefits:* wide coverage and access to remote regions. *Concerns:* privacy, cost and misuse.

### Telecommunications

Satellites carry **television and radio broadcasts** to homes and, through telephone links, connect remote regions, ships and aircraft where no cable or mobile mast exists. Satellite phones work almost anywhere but with higher call costs and some delay.

### Ultra-high definition television

UHD television (4K and above) requires a high bit rate. Satellites can broadcast one signal to millions of receivers at once, which suits live events across a wide area, though the capacity of each channel is limited and weather can degrade the signal.

## Common mistakes

- Saying a cellular network uses a satellite. Mobile towers send radio signals to phones and are linked by cables or microwave.
- Forgetting handover and frequency reuse in answers on cell structure.
- Stating that 5G is only "faster", without mentioning latency, capacity or the need for smaller cells.
- Describing GPS as the satellites tracking the user. The receiver calculates its own position.
- Mixing up uplink and downlink.
- Forgetting that satellite communication has a delay.

## Exam technique

- **Describe the structure** of a cellular network using the terms cell, base station, switching centre, handover and frequency reuse.
- **Compare generations** by speed, latency and typical uses.
- **Satellite data**: give the stages in order (prepare, uplink, relay, downlink, decode).
- **Applications**: name the system and explain why a satellite suits it.

## Official syllabus

Cambridge International AS & A Level Information Technology 9626 syllabus for examination in 2025, 2026 and 2027, Cambridge International Education. Topic 14 Communications technology, section 14.8 Mobile communication systems.
