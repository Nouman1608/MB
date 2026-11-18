---
title: "Cambridge IGCSE ICT (0417): Operating systems"
resourceType: "study-guides"
subject: "ict"
level: ["igcse"]
topic: "Topic 1: Types and components of computer systems"
boards: ["cambridge"]
qualifications: ["igcse"]
syllabusCodes: ["0417"]
syllabusSeries: "2026-2028"
order: 1.3
syllabusTopics:
  - qualification: "igcse"
    topic: "types-and-components-of-computer-systems"
    subtopic: "operating-systems-0417"
description: "Command line, graphical, dialogue-based and gesture-based interfaces compared, with scenario answers, for Cambridge IGCSE ICT 0417 section 1.3."
author: "marlbridge-academic-team"
reviewer: "harris-khan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to harris-khan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 1.3 of Cambridge IGCSE ICT 0417 is about the way an operating system lets a person communicate with a computer. The syllabus names four types of interface: **Command Line Interface (CLI)**, **Graphical User Interface (GUI)**, **dialogue-based interface** and **gesture-based interface**. You need their characteristics, the differences between them, and the advantages and disadvantages of each. Exam questions usually go one step further and ask which interface suits a particular user or situation, so this guide ends each section with the kind of user it suits.

For condensed recall use the [operating systems revision notes](/resources/cambridge-igcse-ict-0417-operating-systems-revision-notes/), and test yourself with the [operating systems practice questions](/resources/cambridge-igcse-ict-0417-operating-systems-practice/).

## What the operating system does for the user

An operating system is system software that manages the computer's hardware and runs other programs. For the user, its most visible job is providing the **user interface**: the means by which the user gives instructions and the computer shows results. The four interface types below are four different answers to the same question: how does the user tell the computer what to do?

## Command Line Interface (CLI)

### Characteristics

- The user **types commands** at a prompt, using the keyboard.
- Commands must follow an exact **syntax** (spelling, order and punctuation); a mistyped command produces an error or the wrong result.
- The screen shows mainly **text**, with few or no graphics.
- The user must **know or look up** the commands, because they are not shown on screen.
- Gives **direct access** to the operating system, so actions that are hidden in other interfaces can be carried out.

### Advantages

- The user has **more control** over the computer and its settings.
- Uses **little memory and processing power**, because no graphics have to be produced.
- Experienced users can work **very quickly**, and one command can act on many files at once, such as copying every file of one type to a new folder.
- Sequences of commands can be saved and run again, which saves time on repeated tasks.

### Disadvantages

- **Hard to learn**: many commands must be remembered.
- **Errors are easy** to make, and a typing mistake can have serious effects, such as deleting the wrong files.
- **Not intuitive** for beginners, and unsuitable for users who cannot type accurately.

**Suits**: network technicians, programmers and system administrators who need precise control.

## Graphical User Interface (GUI)

### Characteristics

- The user interacts with **icons, menus, windows and buttons** on screen.
- A **pointing device** (such as a mouse) or a touch screen is used to select items. The traditional form is called **WIMP**: windows, icons, menus and pointer.
- Several programs can be open at once, each in its own **window**.
- Options are **visible**, so the user can recognise them instead of remembering them.

### Advantages

- **Easy to learn and use**, with no commands to memorise.
- **Intuitive**: icons represent their function, and the same design is used across many programs.
- Fewer errors from mistyping.
- Easy to switch between tasks in different windows.

### Disadvantages

- Uses **more memory and processing power** and more storage than a CLI.
- Can be **slower for experienced users**, who must open several menus to reach an option they could type in one command.
- The user has **less direct control**, because only the options that the designer provided are available.

**Suits**: most home, school and office users, especially beginners.

## Dialogue-based interface

### Characteristics

- The user **speaks** instructions, and the computer uses **speech recognition** to identify the words.
- The computer may **reply in speech**, so a two-way dialogue takes place.
- Recognises a set of commands, and can be **trained** to recognise a particular user's voice more accurately.
- Common in cars, smart speakers, phone assistants and automated telephone systems.

### Advantages

- **Hands-free** and eyes-free: useful when the user's hands are busy, such as when driving or cooking.
- Useful for people with some **disabilities**, such as those who cannot use a keyboard or see a screen.
- No typing skill is needed.

### Disadvantages

- **Background noise** can stop commands being recognised.
- Accents, unclear speech or illness that affects the voice can cause **errors**.
- A limited set of commands may be understood, and commands may still need to be learned.
- Others nearby can **hear** what is being said, so it is not private.

**Suits**: drivers, people with limited movement or sight, and situations where hands must be kept free.

## Gesture-based interface

### Characteristics

- The user controls the computer with **movements of the body**, usually the hands: for example swiping, pinching, tapping or waving.
- Gestures are detected by a **touch screen** or by a **camera and sensors** that track movement.
- Each gesture is linked to an action, such as swiping to turn a page or pinching to zoom.

### Advantages

- **Natural and intuitive**, so it is quick to learn; even young children can use it.
- **No extra device** such as a mouse or keyboard is needed.
- With camera-based gestures there is **no physical contact**, which can be more hygienic, for example in an operating theatre.

### Disadvantages

- **Unintended movements** can be recognised as commands, causing errors.
- Only a **limited range of gestures** can be recognised, and some are not obvious.
- Holding the arm up to make gestures can be **tiring** over long periods.
- Camera-based systems can be affected by poor lighting or by other people moving in view.

**Suits**: smartphone and tablet users, interactive displays and games consoles.

## Differences at a glance

| Feature | CLI | GUI | Dialogue-based | Gesture-based |
|---|---|---|---|---|
| How the user gives input | Typed commands | Pointing at icons and menus | Spoken words | Body or hand movements |
| Main hardware | Keyboard | Mouse or touch screen, monitor | Microphone, speaker | Touch screen or camera and sensors |
| Ease of learning | Hard | Easy | Fairly easy | Easy |
| Memory and processing needed | Low | High | High (speech recognition) | High (movement recognition) |
| Control over the system | High | Lower | Limited to recognised commands | Limited to recognised gestures |

## Worked example: matching interface to user

*A surgeon needs to look through a patient's scan images during an operation. Recommend an interface and justify your choice. [3]*

> A gesture-based interface using a camera (1), because the surgeon can move between images by waving a hand without touching anything (1), so sterile gloves are not contaminated by touching a keyboard, mouse or screen (1).

A dialogue-based interface would also be a credible choice, justified by the surgeon's hands being busy. What matters is that the justification refers to the situation in the question: the need for hygiene or free hands. "It is easy to use" alone would not score here.

## Annotated model answer: a discuss question

*Discuss the advantages and disadvantages of a command line interface compared with a graphical user interface for a network technician. [4]*

> A CLI gives the technician direct access to the operating system, so settings can be changed that are not available through a GUI (1). Commands can be typed quickly and applied to many files or computers at once, which is faster than clicking through menus (1). However, the technician must learn the exact commands, while a GUI shows options as icons that can be recognised (1), and a typing error in a CLI could cause serious damage, such as deleting the wrong files, which is less likely when selecting from menus (1).

Notice that every point compares the two interfaces and every point is linked to the technician's work.

## Common mistakes

- Saying a CLI "has no screen". It displays text; it lacks graphics.
- Describing a GUI only as "easy to use" without saying why (icons, no commands to remember).
- Confusing dialogue-based interfaces with a chat window. In this syllabus, dialogue-based means spoken interaction.
- Saying gesture-based interfaces need a mouse. They use touch or camera-detected movement.
- Giving a disadvantage of a GUI as "it is slow". Say it uses more memory and processing power, or that it can be slower than typing for an expert.

## Exam technique

- **Describe** a characteristic: say what the user does and what the interface shows.
- **Give advantages** or **disadvantages**: each one must be a separate point; "easy to learn" and "easy to use" may be treated as one point.
- **Identify and justify** (or recommend): name one interface, then give reasons tied to the user in the scenario.
- **Compare** or **discuss**: write points that contrast two interfaces and include both advantages and disadvantages.

## Official syllabus

Cambridge International, *Cambridge IGCSE Information and Communication Technology (0417) syllabus for 2026, 2027 and 2028*, Version 3, Topic 1 "Types and components of computer systems", section 1.3 Operating systems.
