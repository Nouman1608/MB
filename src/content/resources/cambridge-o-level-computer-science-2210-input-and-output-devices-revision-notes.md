---
title: "Cambridge O Level Computer Science (2210): Input and output devices -- Revision Notes"
resourceType: "revision-notes"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.2
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "input-and-output-devices-2210"
description: "Revision notes for Cambridge O Level Computer Science 2210 section 3.2: how the named input and output devices work, sensors, exam traps and a self-test."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed notes for syllabus section 3.2. For step-by-step explanations and two scenario examples, use the [Input and output devices study guide](/resources/cambridge-o-level-computer-science-2210-input-and-output-devices/).

## Syllabus lists at a glance

| Input devices | Output devices | Sensors |
|---|---|---|
| Barcode scanner | Actuator | Acoustic, accelerometer |
| Digital camera | DLP projector | Flow, gas |
| Keyboard | Inkjet printer | Humidity, infra-red |
| Microphone | Laser printer | Level, light |
| Optical mouse | LED screen | Magnetic field, moisture |
| QR code scanner | LCD projector | pH, pressure |
| Touch screen: resistive, capacitive, infra-red | LCD screen | Proximity, temperature |
| 2D and 3D scanners | Speaker, 3D printer | |

## Key terms

| Term | Meaning |
|---|---|
| Input device | Captures data from the user or environment and converts it to binary |
| Output device | Converts binary results into a form usable by people or machines |
| Sensor | Measures a physical property for a computer to monitor or control |
| Actuator | Turns an electrical signal into movement |
| Backlight | Light source behind an LCD screen |
| Digital micromirror | Tiny tilting mirror used for each pixel in a DLP projector |
| Fuser | Heated rollers in a laser printer that bond toner to paper |
| Layer-by-layer | How a 3D printer builds a solid object |

## Working principles: the key word for each device

| Device | Key word | One-line mechanism |
|---|---|---|
| Barcode scanner | Reflection | Bars absorb, spaces reflect; sensor reads the pattern |
| QR code scanner | Image | Camera image of squares decoded by software |
| Digital camera | Image sensor | Light-sensitive elements give values for each pixel |
| Keyboard | Circuit | Key press completes a circuit; key code sent |
| Microphone | Diaphragm | Vibrations give an analogue signal; ADC converts |
| Optical mouse | Images of surface | Comparing successive images gives movement |
| Resistive screen | Pressure | Layers pressed together complete a circuit |
| Capacitive screen | Charge | Finger changes charge at the touch point |
| Infra-red screen | Beams | Touch breaks a grid of infra-red beams |
| 2D scanner | Reflected light | Light across a flat page captured by a sensor |
| 3D scanner | Shape | Surface measured from many angles to build a 3D model |
| Inkjet printer | Droplets | Nozzles spray liquid ink |
| Laser printer | Static charge | Drum, laser, toner, fuser |
| 3D printer | Layers | Object built in slices |
| LCD screen | Liquid crystals | Crystals block or pass backlight |
| LED screen | Diodes | Red, green and blue LEDs give light |
| LCD projector | Panels | Light passes through LCD panels; lens projects |
| DLP projector | Mirrors | Mirrors tilt towards or away from the lens |
| Speaker | Cone | Current in a coil moves a cone to make sound |
| Actuator | Movement | Electrical signal drives a motor, valve or solenoid |

## Touch screens: choose by scenario

- **Gloved hands or a stylus needed, low budget** → resistive.
- **Pinch and zoom, phone or tablet** → capacitive.
- **Very large display, any object must work** → infra-red.

## Printers: choose by scenario

- **Occasional photo printing at home** → inkjet.
- **An office printing hundreds of text pages** → laser.
- **A prototype part or replica** → 3D printer.

## Sensors: data captured

| Sensor | Captures |
|---|---|
| Acoustic | Sound |
| Accelerometer | Acceleration, movement, tilt |
| Flow | Speed of a liquid or gas moving |
| Gas | Concentration of a gas |
| Humidity | Water vapour in air |
| Infra-red | Infra-red radiation or beam interruption |
| Level | Height of a liquid |
| Light | Brightness |
| Magnetic field | Magnetic field changes |
| Moisture | Water in soil or a material |
| pH | Acidity or alkalinity |
| Pressure | Force or pressure |
| Proximity | Closeness of an object |
| Temperature | Temperature |

## Exam traps

- **Sensors only measure.** They do not decide or act.
- **Use syllabus names.** "Motion sensor" and "heat sensor" are not on the list.
- **LCD has no light of its own**; LED screens do.
- **DLP versus LCD projectors**: mirrors versus light passing through panels.
- **Laser printer steps out of order**: charge, laser, toner, transfer, fuse, discharge.
- **"Why is it required?"** answers need the conversion idea: real-world data to binary, or binary to a usable form.

## Self-test

1. Why is an input device required?
2. How does a QR code scanner differ from a barcode scanner in how it reads data?
3. Describe how a microphone captures sound.
4. Which touch screen locates a touch by measuring a change in electric charge?
5. Give one advantage of an infra-red touch screen.
6. List the main stages of laser printing in order.
7. What is the role of the backlight in an LCD screen?
8. How does a DLP projector make a pixel dark?
9. Name the output device that converts an electrical signal into movement.
10. Which sensor would check the acidity of soil in a hydroponic farm?
11. Which sensor counts steps on a fitness tracker?
12. A roof water tank must refill when it is nearly empty. Which sensor is needed?

**Answers**

1. To capture data from the user or environment and convert it into binary the computer can process.
2. A QR code scanner captures an image of the code and decodes the 2D pattern; a barcode scanner reads light reflected from bars and spaces.
3. Sound waves make a diaphragm vibrate, producing an analogue electrical signal that an ADC converts into digital data.
4. Capacitive.
5. Any one: works with any object, including gloved fingers; suits very large screens.
6. Charge the drum; laser draws the image in charge; toner sticks to the image; toner transferred to charged paper; fuser melts toner on; drum discharged.
7. It provides the light that the liquid crystals block or let through.
8. Its mirror tilts away from the lens, so no light from that pixel reaches the screen.
9. An actuator.
10. A pH sensor.
11. An accelerometer.
12. A level sensor.
