---
title: "Cambridge IGCSE Computer Science (0478): Input and output devices"
resourceType: "study-guides"
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
description: "Study guide to Cambridge IGCSE Computer Science 0478 section 3.2: how the named input devices, output devices and sensors work and how to choose one for a context."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.2 of the Cambridge IGCSE Computer Science 0478 syllabus names three lists you must know: **input devices**, **output devices** and **sensors**. For each input and output device you need to understand what it is and why it is required; for sensors you must also "identify the type of data captured by each sensor" and select "the most suitable sensor for a given context". Questions usually set a scenario and ask you to describe how a device works or to justify a choice.

The [Hardware study guide](/resources/igcse-computer-science-hardware/) lists the devices. This guide explains how each one works in the depth the exam rewards, then shows how to apply that knowledge.

## Why input and output devices are needed

The CPU only processes binary data. An **input device** converts something from the real world, such as a key press, a sound or an image, into data the computer can process. An **output device** converts processed data back into a form people or machines can use, such as light, sound, printed paper or movement. Many input devices produce analogue signals, so an analogue-to-digital converter is needed; output devices such as speakers need a digital-to-analogue converter.

## Input devices

### Barcode scanner

A light source (often a laser or LED) shines across the barcode. Dark bars **absorb** light and white spaces **reflect** it. A light-sensitive sensor detects the pattern of reflected light, which is converted into the binary number the barcode represents. The computer then looks the number up, for example in a shop's stock database.

### QR code scanner

A QR code is a two-dimensional grid of black and white squares. The scanner (often a phone camera) captures an **image** of the code, and software decodes the pattern into data. Three large position squares in the corners let it be read from any angle. A QR code holds much more data than a barcode, such as a web address or ticket details.

### Digital camera

Light passes through the lens onto a sensor made of millions of tiny light-sensitive cells. Each cell produces an electrical signal according to the light falling on it, which is converted into a digital value for one pixel. The values are stored as an image file on the camera's memory card.

### Keyboard

Pressing a key completes an electrical circuit under that key. The keyboard's processor works out which key was pressed from its position and sends the matching character code to the computer.

### Microphone

Sound waves make a thin **diaphragm** vibrate. The movement produces a varying electrical signal (analogue), which an ADC samples and converts into digital data.

### Optical mouse

An LED shines light onto the surface under the mouse. A small sensor takes many images of the surface every second, and the mouse's processor compares each image with the last to work out the direction and distance moved. These values move the pointer on the screen.

### Touch screens

| Type | How it works | Strengths | Weaknesses |
|---|---|---|---|
| Resistive | Two flexible layers with conductive coatings are separated by a tiny gap. Pressing the screen pushes them together; the point of contact completes a circuit and its position is calculated | Works with a finger, glove or stylus; cheap | Needs pressure; top layer can wear; usually less clear |
| Capacitive | A glass layer carries a conductive coating. A finger, which conducts electricity, changes the electric charge at the point touched, and sensors work out where | Very responsive; supports multi-touch; durable glass | Does not work with an ordinary glove or a non-conductive stylus |
| Infra-red | A grid of infra-red beams crosses the screen from LEDs on two edges to sensors on the others. A touch breaks beams, and the position comes from which beams are broken | Works with any object; good for large screens | Can be triggered by objects close to the screen; frame adds bulk |

### 2D and 3D scanners

A **2D scanner** shines light onto a flat document; reflected light is captured by a sensor that moves across the page, and the readings are converted into a digital image. A **3D scanner** captures the shape of a solid object, for example using lasers or light to measure the distance to points on its surface from many angles, and builds a digital 3D model. Uses include copying a part for 3D printing or creating models for computer-aided design.

## Output devices

### Actuator

An actuator converts an electrical signal from a computer into **physical movement**, for example a motor turning, a valve opening or a pump starting. Actuators are the output side of control systems.

### Inkjet and laser printers

An **inkjet printer** moves a print head across the paper and fires tiny droplets of liquid ink through nozzles; the paper moves forward a line at a time. It suits low volumes and colour photographs.

A **laser printer** uses a rotating drum. The drum is given an electric charge; a laser alters the charge on the drum to form the image of the page; charged powder called toner sticks to the image areas; the toner is transferred to the paper, which then passes through a heated fuser that melts the toner onto the page. It is fast and suits high volumes.

### 3D printer

A 3D printer builds a solid object **layer by layer** from a digital design, for example by melting plastic and depositing it through a nozzle, with each layer fused to the one below. It is used for prototypes, replacement parts and custom medical items.

### Screens and projectors

- **LCD screen**: each pixel contains liquid crystals. A backlight shines through them; the crystals change alignment to block or let through light, and colour filters give red, green and blue. The crystals produce no light of their own.
- **LED screen**: light-emitting diodes produce the light. Each pixel uses red, green and blue LEDs whose brightness is varied to make colours.
- **LCD projector**: a bright light is split and passed through LCD panels that form the image in red, green and blue; the images are combined and projected through a lens.
- **DLP projector**: a chip holds millions of microscopic mirrors, one per pixel. Each mirror tilts towards or away from the light to make its pixel light or dark; colour is added by a colour wheel or coloured light, and a lens projects the image.

### Speaker

Digital sound data is converted to an analogue signal by a DAC and amplified. The varying current flows through a coil next to a magnet, making the coil and the attached cone vibrate. The vibrations create sound waves.

## Sensors

A sensor measures a physical property and sends the reading to a computer, usually as an analogue signal that is converted to digital. The syllabus list is:

| Sensor | Data captured | Example use |
|---|---|---|
| Acoustic | Sound level | Detecting breaking glass in a burglar alarm |
| Accelerometer | Acceleration and changes in motion or tilt | Rotating a phone display; detecting a crash to fire an airbag |
| Flow | Rate of flow of a liquid or gas | Measuring water through a pipe |
| Gas | Amount of a particular gas | Carbon monoxide alarm |
| Humidity | Water vapour in the air | Climate control in a greenhouse or museum |
| Infra-red | Infra-red radiation, or a broken infra-red beam | Automatic doors; intruder detection |
| Level | Height of a liquid in a container | Fuel tank gauge |
| Light | Light intensity | Street lamps switching on at dusk |
| Magnetic field | Changes in a magnetic field | Detecting a door opening in an alarm system |
| Moisture | Water content of soil or a material | Automatic crop watering |
| pH | Acidity or alkalinity | Swimming pool water treatment |
| Pressure | Force or pressure applied | Pressure pad under a doormat |
| Proximity | How close an object is | Car parking sensors |
| Temperature | Temperature | Central heating control |

**Humidity** measures water in the **air**; **moisture** measures water in **soil or a material**. **Level** measures the **height** of a liquid; **flow** measures how fast it is **moving**. These pairs appear often in "most suitable sensor" questions.

## Worked example: a smart supermarket checkout

**Question:** A self-service checkout has a barcode scanner, a touch screen and a weighing area. Describe how the barcode scanner reads a product, and suggest a suitable sensor for the weighing area. [4]

**Model answer:** Light from the scanner shines on the barcode [1]. The dark bars absorb light and the white spaces reflect it, and a sensor detects the pattern of reflected light [1], which is converted into a number used to look up the product [1]. A **pressure** sensor in the weighing area detects the weight of the item placed there, so the system can check it matches the product scanned [1].

The answer uses the scenario throughout. "A sensor" would not score: the examiner wants the named sensor and its purpose.

## Common mistakes

- Writing that a sensor "decides" or "switches on" something. Sensors only measure; the processor decides and an actuator acts.
- Saying LCD crystals give out light. They block or allow light from a backlight.
- Confusing resistive and capacitive screens. Resistive needs pressure; capacitive needs a conductive touch.
- Calling a QR code scanner a barcode scanner: it captures an image and decodes a 2D pattern.
- Choosing a temperature sensor to detect an intruder: the expected answer is usually infra-red, pressure, acoustic or magnetic field.

## Exam technique

- **Describe how [device] works**: give the steps in order from input to digital data (or from data to output).
- **Identify a suitable sensor**: name it exactly from the syllabus list.
- **Explain your choice**: state what the sensor measures and why that property shows what the scenario needs.
- **Give an advantage**: compare with an alternative in the same scenario, for example "a capacitive screen allows multi-touch, so customers can zoom the map".

Condense this guide with the [Input and output devices revision notes](/resources/cambridge-igcse-computer-science-0478-input-and-output-devices-revision-notes/), then practise with the [input and output devices practice questions](/resources/igcse-computer-science-input-and-output-devices-practice/).
