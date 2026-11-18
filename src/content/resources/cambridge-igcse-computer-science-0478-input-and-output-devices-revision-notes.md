---
title: "Cambridge IGCSE Computer Science (0478): Input and output devices -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["igcse"]
topic: "Topic 3: Hardware"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0478"]
syllabusSeries: "2026-2028"
order: 3.2
syllabusTopics:
  - qualification: "igcse"
    topic: "hardware-0478"
    subtopic: "input-and-output-devices-0478"
description: "Revision notes for Cambridge IGCSE Computer Science 0478 section 3.2: how the named input and output devices work, the fourteen sensors and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 3.2. For full explanations and a worked model answer, use the [Input and output devices study guide](/resources/cambridge-igcse-computer-science-0478-input-and-output-devices/).

## The named lists

- **Input**: barcode scanner, digital camera, keyboard, microphone, optical mouse, QR code scanner, touch screen (resistive, capacitive, infra-red), 2D and 3D scanners.
- **Output**: actuator, DLP projector, inkjet printer, laser printer, LED screen, LCD projector, LCD screen, speaker, 3D printer.
- **Sensors**: acoustic, accelerometer, flow, gas, humidity, infra-red, level, light, magnetic field, moisture, pH, pressure, proximity, temperature.

## Key terms

| Term | Meaning |
|---|---|
| Input device | Converts real-world data into a form the computer can process |
| Output device | Converts processed data into a form usable by people or machines |
| Sensor | Measures a physical property and sends readings to a computer |
| Actuator | Converts an electrical signal into physical movement |
| ADC | Converts an analogue signal (for example from a microphone) into digital data |
| DAC | Converts digital data into an analogue signal (for example for a speaker) |
| Toner | Charged powder used by a laser printer |
| Additive manufacturing | Building an object layer by layer, as a 3D printer does |

## How each input device works: one-line versions

| Device | Core mechanism |
|---|---|
| Barcode scanner | Light reflected from white spaces, absorbed by bars; reflection pattern read by a sensor and converted to a number |
| QR code scanner | Camera captures an image of a 2D pattern of squares; software decodes it |
| Digital camera | Light through lens onto a grid of light-sensitive cells; each gives a value for one pixel |
| Keyboard | Key press completes a circuit; position identifies the key; character code sent |
| Microphone | Sound vibrates a diaphragm; produces an analogue electrical signal; ADC converts it |
| Optical mouse | LED lights the surface; sensor compares successive images to find movement |
| 2D scanner | Light reflected from a flat document is captured by a moving sensor to form an image |
| 3D scanner | Measures the shape of an object from many angles to make a 3D model |

## Touch screens compared

| | Resistive | Capacitive | Infra-red |
|---|---|---|---|
| Detects | Pressure joining two layers | Change in charge from a conductive finger | Broken infra-red beams |
| Gloves or stylus | Yes | No (ordinary glove) | Yes |
| Multi-touch | Usually no | Yes | Possible |
| Typical drawback | Wears; less clear | Needs bare finger or special stylus | Bulky frame; can trigger early |

## How each output device works: one-line versions

| Device | Core mechanism |
|---|---|
| Actuator | Electrical signal produces movement (motor, valve, pump) |
| Inkjet printer | Print head sprays droplets of liquid ink through nozzles |
| Laser printer | Charged drum; laser forms image in charge; toner attracted; transferred to paper; fused by heat |
| 3D printer | Builds a solid object in layers from a digital design |
| LCD screen | Backlight through liquid crystals that block or pass light; colour filters |
| LED screen | Red, green and blue LEDs give out light for each pixel |
| LCD projector | Light passes through LCD panels; combined image projected |
| DLP projector | Millions of tiny tilting mirrors make each pixel light or dark |
| Speaker | DAC and amplifier; varying current in a coil moves a cone; sound waves |

## Laser printer sequence (often a 4-mark question)

1. Drum is charged.
2. Laser changes the charge on the drum to form the page image.
3. Toner sticks to the charged image areas.
4. Paper is charged and toner transfers to it.
5. Fuser heats the paper so the toner melts on.
6. Drum charge is removed, ready for the next page.

## Sensor pairs that are easy to confuse

| If the scenario measures... | Choose | Not |
|---|---|---|
| Water in the air | Humidity | Moisture |
| Water in soil | Moisture | Humidity |
| How full a tank is | Level | Flow |
| How fast water moves in a pipe | Flow | Level |
| A body moving across a room | Infra-red | Temperature |
| A door or window opening | Magnetic field | Proximity |
| How close a car is to a wall | Proximity | Pressure |
| A phone being tilted | Accelerometer | Proximity |

## Exam traps

- **Sensors do not act.** The processor compares readings; actuators move things.
- **LCDs need a backlight.** They do not produce their own light.
- **Barcode versus QR.** Barcode scanners read reflected light from bars; QR scanners capture and decode an image.
- **Inkjet versus laser.** Liquid ink and nozzles versus toner, drum and fuser.
- **Vague sensors.** "A heat sensor" or "a motion sensor" may not score: use the syllabus names, such as temperature or infra-red.
- **No scenario link.** "It is accurate" is weak; "it detects a change in soil moisture, so the pump only runs when the crop needs water" is strong.

## Self-test

1. Why does a microphone's output need an ADC?
2. How does a barcode scanner tell a bar from a space?
3. Give one reason a QR code may be used instead of a barcode.
4. Which touch screen would work for a worker wearing thick gloves, and why?
5. Why does an ordinary glove not work on a capacitive screen?
6. State what an actuator does.
7. Name the part of a laser printer that melts the toner onto the paper.
8. What does each tiny mirror do in a DLP projector?
9. Which sensor would show how full an underground fuel tank is?
10. Which sensor would detect the acidity of a fish tank?
11. A phone screen turns off when held to the ear. Which sensor is used?
12. What is the difference between a humidity sensor and a moisture sensor?

**Answers**

1. The microphone produces an analogue signal, but the computer can only process digital data.
2. Dark bars absorb light and white spaces reflect it; the sensor detects the reflected pattern.
3. It can store more data, such as a web address, and can be read from any angle.
4. Resistive (or infra-red): it works by pressure (or by breaking beams), not by the conductivity of a finger.
5. The glove does not conduct, so it does not change the charge on the screen at the point touched.
6. It converts an electrical signal into physical movement.
7. The fuser.
8. It tilts towards or away from the light to make its pixel light or dark.
9. A level sensor.
10. A pH sensor.
11. A proximity sensor.
12. Humidity measures water vapour in the air; moisture measures water in soil or a material.
