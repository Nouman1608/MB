---
title: "Cambridge O Level Computer Science (2210): Automated systems -- Practice Questions"
seoTitle: "Cambridge O Level CS 2210 Automated Systems Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 6 – Automated and emerging technologies"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 6.1
syllabusTopics:
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
  - qualification: "o-level"
    topic: "automated-and-emerging-technologies-2210"
    subtopic: "automated-systems-2210"
description: "Original questions with answers on Cambridge O Level Computer Science 2210 section 6.1: sensors, microprocessors and actuators, and the advantages and disadvantages of automated systems."
author: "marlbridge-academic-team"
publishedDate: 2026-11-20
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs. Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

Related: [Automated systems study guide](/resources/cambridge-o-level-computer-science-2210-automated-systems/) and [Automated systems revision notes](/resources/cambridge-o-level-computer-science-2210-automated-systems-revision-notes/)

---

## Section A

**1.** State what is meant by a sensor. **[1]**

**2.** State what is meant by an actuator. **[1]**

**3.** Give **two** examples of sensors. **[2]**

**4.** Give **two** examples of actuators. **[2]**

**5.** State the role of the microprocessor in an automated system. **[2]**

**6.** State what is meant by an automated system. **[1]**

## Section B

**7.** A school installs an automatic system that switches the corridor lights on when it gets dark and off when it is bright.

**(a)** Name the type of sensor used. **[1]**

**(b)** Name the actuator. **[1]**

**(c)** Describe how the sensor, microprocessor and actuator work together. **[3]**

**8.** A greenhouse has an automated system to keep the temperature at 22 degrees Celsius or above.

**(a)** Name the sensor and **two** actuators that the system could use. **[3]**

**(b)** The sensor sends a reading of 19 to the microprocessor. Describe what the microprocessor does. **[3]**

**(c)** Explain why the sensor keeps taking readings after the heater has been switched on. **[2]**

**9.** The pseudocode below is part of the program for a moisture-controlled watering system. `INPUT Moisture` stands for a reading from the sensor.

```
CONSTANT MinMoisture ← 30
DECLARE Moisture : INTEGER
INPUT Moisture
IF Moisture < MinMoisture
   THEN
      OUTPUT "Pump ON"
   ELSE
      OUTPUT "Pump OFF"
ENDIF
```

**(a)** State the output when the sensor reading is 24. **[1]**

**(b)** State the output when the sensor reading is 30. **[1]**

**(c)** Identify which line of the program represents the actuator being used. **[1]**

**10.** A farmer wants to use an automated irrigation system.

**(a)** Give **two** advantages of the system for the farmer. **[2]**

**(b)** Give **two** disadvantages of the system for the farmer. **[2]**

**11.** A car manufacturer uses automated robot arms in its factory.

**(a)** Describe **two** advantages to the manufacturer. **[4]**

**(b)** Describe **one** disadvantage to the factory workers. **[2]**

**12.** A weather centre collects data from automatic weather stations in remote mountain areas.

**(a)** Explain **one** advantage of using automatic weather stations. **[2]**

**(b)** Explain **one** disadvantage of using automatic weather stations. **[2]**

**13.** A security system uses a motion sensor and a light sensor. The light is switched on only if movement is detected and it is dark. Describe how the microprocessor decides whether to switch the light on. **[3]**

**14.** A student says: "In an automated system the sensor decides when to switch the heater on." Explain why the student is wrong. **[3]**

---

## Answers

**1.** An input device that measures a physical quantity (such as temperature or light) and sends the readings to the microprocessor [1].

**2.** An output device that carries out a physical action when it receives a signal from the microprocessor [1].

**3.** Any two: temperature; light; moisture; pressure; motion; infrared; pH; sound [1 each].

**4.** Any two: motor; pump; heater; valve; lamp; buzzer; siren [1 each].

**5.** It receives the readings from the sensor and compares them with the stored value [1], then decides what action is needed and sends a signal to the actuator [1].

**6.** A system that carries out a task with little or no human control [1].

**7. (a)** Light sensor [1].
**(b)** The lamp / light [1].
**(c)** The light sensor measures the brightness and sends the reading to the microprocessor [1]. The microprocessor compares the reading with the stored value for "dark" [1]. If it is dark, it sends a signal to the lamp to switch on, and if it is bright it sends a signal to switch the lamp off [1].

**8. (a)** Sensor: temperature sensor [1]. Actuators, any two: heater; motor to open or close vents; fan [1 each, maximum 2].
**(b)** The microprocessor compares 19 with the stored value of 22 [1]. It sees that the temperature is too low [1], so it sends a signal to the actuator to switch on the heater [1].
**(c)** The sensor needs to check the effect of the heater / the system uses feedback [1], so the microprocessor can switch the heater off when the temperature reaches 22, which stops the greenhouse getting too hot [1].

**9. (a)** Pump ON [1].
**(b)** Pump OFF [1] (30 is not less than 30).
**(c)** OUTPUT "Pump ON" (or OUTPUT "Pump OFF"), because this is the line that stands for the signal to the pump [1].

**10. (a)** Any two: water is only used when the soil is dry, so less is wasted [1]; the crops get the right amount of water [1]; the farmer does not have to check or water by hand, saving time [1]; it works at night and when the farmer is away [1].
**(b)** Any two: expensive to buy and install [1]; sensors can be damaged or give false readings, so crops could be over- or under-watered [1]; the system needs power and maintenance [1]; a software fault could stop it working [1].

**11. (a)** Any two advantages, each with a development: the robots can work for 24 hours a day without breaks [1], so more cars are produced [1]; they repeat tasks with the same accuracy every time [1], so the quality is consistent [1]; they can do dangerous jobs, such as welding or lifting heavy parts [1], so there are fewer injuries to workers [1]; fewer workers are needed [1], so the manufacturer saves wages [1]. Maximum 4.
**(b)** Some workers may lose their jobs because robots replace them [1], and others would need retraining for new jobs [1]. Accept any other valid disadvantage with a development, such as less skilled work.

**12. (a)** The stations work in remote places where a person would have difficulty going [1], and they collect readings regularly, day and night, without a person present [1].
**(b)** Any one: the equipment may be damaged by harsh weather [1], and repairs in remote areas are difficult and costly [1]; or the station needs a power supply and a link for sending the data, which may fail [1] and then data is lost [1].

**13.** The microprocessor receives readings from both sensors [1]. It checks whether movement has been detected AND whether the light reading is below the value for "dark" [1]. Only if both conditions are true does it send a signal to switch the light on [1].

**14.** The sensor only measures the temperature and sends the reading [1]. The microprocessor compares the reading with the stored value and decides to switch the heater on [1]. The actuator (or heater) then carries out the action when it receives the signal [1].

---

## Where marks are usually lost

- Question 3 and Question 4: naming devices that are not sensors or actuators, such as a keyboard or a monitor.
- Question 7 (c): leaving out the comparison with a stored value.
- Question 8 (a): naming a thermometer, which is not a sensor connected to a microprocessor. Say "temperature sensor".
- Question 8 (c): not mentioning feedback.
- Question 9 (b): choosing Pump ON, because 30 is not less than 30.
- Question 10 and Question 11: stating a benefit with no explanation. The second mark is for the development.
- Question 13: saying the system uses "either" sensor. Both must agree.
- Question 14: stating that the microprocessor decides without also saying the actuator acts.

## Checking a system description

Read your answer and tick off: sensor, reading sent, comparison, signal, actuator, action, repeat. In a four-mark answer, aim for at least four of these.
