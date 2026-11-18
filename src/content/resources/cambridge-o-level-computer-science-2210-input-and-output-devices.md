---
title: "Cambridge O Level Computer Science (2210): Input and output devices"
resourceType: "study-guides"
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
description: "Study guide to Cambridge O Level Computer Science 2210 section 3.2: how each named input and output device works, the named sensors, and choosing devices for a scenario."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.2 of the Cambridge O Level Computer Science 2210 syllabus asks you to understand what is meant by an **input device** and an **output device** and why each is required, for a named list of devices; to understand what a **sensor** is and the purposes of sensors, for a named list of fourteen; and to identify the **type of data** each sensor captures and select "the most suitable sensor for a given context".

The [Hardware study guide](/resources/o-level-computer-science-hardware/) lists the devices. This guide groups them by what they do, explains the working of each in exam-ready steps, and then applies them to two scenarios: a hospital ward and a museum gallery.

## Why the devices are required

A computer stores and processes **binary**. People and the physical world do not. Input devices are required to **capture** data (key presses, images, sound, codes, physical measurements) and turn it into binary; output devices are required to **present** the results (light, print, sound, solid objects, movement). Where the real-world signal is analogue, an analogue-to-digital converter is needed on the way in and a digital-to-analogue converter on the way out.

## Input devices

### Devices that read codes and images

**Barcode scanner**
1. A laser or LED shines light across the barcode.
2. White spaces reflect light; black bars absorb it.
3. A light sensor turns the reflected pattern into an electrical signal.
4. The pattern is converted into the digits the barcode represents, which are checked using the check digit and looked up in a database.

**QR code scanner**
1. A camera takes an image of the square QR code.
2. Software finds the three large corner squares to work out the code's position and angle.
3. The pattern of small black and white squares is decoded into data, such as a web address or a boarding pass.

QR codes hold more data than barcodes and can be read in any orientation.

**Digital camera**
1. The lens focuses light onto an image sensor made of millions of light-sensitive elements.
2. Each element produces a signal according to the brightness and colour of light falling on it.
3. The signals are converted into binary values, one set for each pixel.
4. The image is stored, usually on a removable memory card.

**2D scanner**
1. The document lies flat on a glass plate under a cover.
2. A bright light moves across it, and the reflected light is directed onto a sensor.
3. The sensor's readings become a digital image of the page, which can be processed further, for example by text recognition software.

**3D scanner**
The scanner measures points on the surface of a solid object from many angles, using lasers or light, and software combines the measurements into a digital 3D model. The model can be edited or sent to a 3D printer.

### Devices people operate directly

**Keyboard**: each key sits over a switch; pressing it completes a circuit. The keyboard's chip identifies the key from its position in a grid of circuits and sends the matching character code.

**Optical mouse**: an LED lights the surface beneath the mouse; a tiny sensor captures images of the surface many times a second; a processor compares consecutive images to calculate movement, which moves the on-screen pointer.

**Microphone**: incoming sound waves make a diaphragm vibrate; the vibration is converted into a varying electrical (analogue) signal, which is sampled by an ADC to produce digital sound data.

**Touch screens**

- **Resistive**: two thin conductive layers separated by a gap. Pressure presses them together at one point, completing a circuit; the voltages measured give the position. Works with gloves and any stylus; cheaper; less durable and less clear.
- **Capacitive**: a glass screen with a conductive layer that holds an electric charge. A finger draws some charge at the point of contact; sensors measure the change to locate the touch. Supports multi-touch gestures; durable; needs a bare finger or a special stylus.
- **Infra-red**: infra-red LEDs along two edges send beams across the screen to sensors on the opposite edges. A finger or object breaks beams, and the position comes from which horizontal and vertical beams are blocked. Works with any object, including gloved hands; suits large displays.

## Output devices

### Devices that produce printed or solid output

**Inkjet printer**: the print head travels back and forth, spraying tiny droplets of liquid ink through nozzles; the paper advances after each pass. It is cheap to buy and good for photographs, but slow for large print runs, and the ink can smudge.

**Laser printer**: works with a rotating drum and static electricity.
1. The drum surface is charged.
2. A laser beam draws the page onto the drum by changing the charge where the image will be.
3. Toner (fine, charged powder) sticks only to those areas.
4. The paper is charged so it attracts the toner from the drum.
5. Heated rollers (the fuser) melt the toner so it bonds to the paper.
6. The drum is discharged and cleaned for the next page.

It suits large volumes of text.

**3D printer**: reads a digital design that has been split into thin horizontal slices and builds the object one layer at a time, for example by extruding melted plastic or hardening liquid resin, each layer bonding to the one below.

### Devices that display images

| Device | How it makes the picture |
|---|---|
| LCD screen | A backlight shines through a layer of liquid crystals; each pixel's crystals twist to let more or less light through red, green and blue filters |
| LED screen | Each pixel contains red, green and blue light-emitting diodes that give out their own light at varying brightness |
| LCD projector | Light from a powerful lamp passes through LCD panels that form the image in red, green and blue; the images are combined and focused onto a screen by a lens |
| DLP projector | A chip covered with millions of microscopic mirrors, one per pixel, tilts each mirror to reflect light towards or away from the lens; a colour wheel or coloured light adds colour |

### Devices that make sound or movement

**Speaker**: digital audio is converted to an analogue signal by a DAC and amplified; the varying current in a coil makes it move against a permanent magnet, pushing a cone back and forth to create sound waves.

**Actuator**: converts an electrical signal into physical action, such as a motor turning a fan, a solenoid locking a door, or a valve opening a pipe. It is the output device in a control system, receiving signals from the processor.

## Sensors

A **sensor** is an input device that measures a physical property and sends the measurement to a processor, usually via an ADC. Its **purpose** is to let a computer monitor or control a process without a person taking readings.

| Sensor | Type of data captured | Where it would be used |
|---|---|---|
| Acoustic | Sound | Monitoring noise near an airport; detecting a crying baby in a monitor |
| Accelerometer | Acceleration, movement and tilt | Fitness trackers counting steps; car crash detection |
| Flow | Rate a liquid or gas flows | Fuel delivery at a petrol pump; drip rate in a medical infusion |
| Gas | Amount of a gas such as carbon dioxide or carbon monoxide | Air quality in a classroom; carbon monoxide alarm |
| Humidity | Water vapour in the air | Protecting paintings in a museum; greenhouse climate |
| Infra-red | Infra-red radiation from warm bodies, or a broken beam | Intruder alarms; hand dryers |
| Level | Height of a liquid | Water tank on a roof; chemical vat |
| Light | Brightness | Automatic headlights; adjusting screen brightness |
| Magnetic field | Changes in a magnetic field | Window and door alarm contacts; phone compass |
| Moisture | Water in soil or materials | Farm irrigation; damp detection in walls |
| pH | Acidity or alkalinity | Hydroponic farms; river pollution monitoring |
| Pressure | Force or pressure | Weighing vehicles; touch pads on a floor |
| Proximity | Distance to a nearby object | Reversing sensors; automatic taps |
| Temperature | Temperature | Fridge monitoring; incubators |

## Worked example 1: a hospital ward

**Question:** A hospital ward uses a computer system to monitor patients. Identify a suitable sensor for each task and explain your choice: (a) checking the rate at which a medicine drips into a patient; (b) raising an alert if a patient gets out of bed at night. [4]

**Model answer:** (a) A **flow** sensor [1], because it measures the rate at which the liquid medicine moves through the tube, so the system can check the patient is receiving the correct dose [1]. (b) A **pressure** sensor in the mattress [1], because when the patient gets out of bed the pressure falls, and the processor can then send an alert to the nurse [1].

## Worked example 2: a museum gallery

A museum wants to display a new exhibit. Matching devices to tasks:

- Visitors scan a **QR code** beside each painting with their phone to open an audio guide, because a QR code can hold a web address.
- A large **infra-red touch screen** shows a map, because visitors wearing gloves in winter can still use it and it suits a large display.
- **Humidity** and **light** sensors protect the paintings, because damp air and strong light damage them.
- A **3D scanner** records a fragile statue so a replica can be made on a **3D printer** for visitors to handle.
- A **DLP projector** shows a film on a wall in a darkened room.

## Common mistakes

- Treating a sensor as an output device, or saying it switches something on.
- Writing "motion sensor" or "heat sensor". Use the syllabus names, such as infra-red or temperature.
- Saying an LCD screen gives out its own light. It needs a backlight.
- Mixing the steps of inkjet and laser printing.
- Describing what a device is used for when the question asks how it **works**.

## Exam technique

- **Describe how it works**: give at least as many steps as there are marks, in order.
- **Identify a suitable device or sensor**: name it precisely.
- **Explain why it is suitable**: say what it measures or does, and why that matters in the scenario.
- **Compare** two devices: give the same feature for both, for example "resistive works with gloves, whereas capacitive does not".

Condense this with the [Input and output devices revision notes](/resources/cambridge-o-level-computer-science-2210-input-and-output-devices-revision-notes/) and practise with the [input and output devices practice questions](/resources/o-level-computer-science-input-and-output-devices-practice/).
