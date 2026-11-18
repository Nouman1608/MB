---
title: "Cambridge O Level Computer Science (2210): Data storage -- Practice Questions"
resourceType: "practice-questions"
subject: "computer-science"
level: ["o-levels"]
topic: "Topic 3 – Hardware"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["2210"]
syllabusSeries: "2026-2028"
order: 3.3
syllabusTopics:
  - qualification: "o-level"
    topic: "hardware-2210"
    subtopic: "data-storage-2210"
description: "Original 2210 practice questions with mark-scheme answers on RAM and ROM, hard disks, optical discs, flash memory, virtual memory and cloud storage."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---
> **These are original questions written for Marlbridge**, for revision and
> practice on this content. They are **not** reproduced past-paper questions,
> and they do **not** replicate the exam's exact structure, question count or
> mark tariffs — Cambridge International holds copyright in its own papers. Use
> these alongside the official past papers available from your board.

These questions cover every learning outcome in sub-topic 3.3 Data storage of Cambridge O Level Computer
Science (2210). Section A checks recall; Section B asks you to describe, explain and compare in context.

Related: [data storage study guide](/resources/cambridge-o-level-computer-science-2210-data-storage/) |
[data storage revision notes](/resources/cambridge-o-level-computer-science-2210-data-storage-revision-notes/)

---

## Section A

**1.** State what is meant by primary storage. **[1]**

**2.** Identify whether each statement describes RAM or ROM.

(a) Its contents are lost when the computer is switched off.

(b) It stores the start-up instructions for the computer.

(c) It stores the program the user is currently running. **[3]**

**3.** Name **one** example of each type of secondary storage: magnetic, optical and solid-state. **[3]**

**4.** State **two** reasons why a computer needs secondary storage as well as RAM. **[2]**

**5.** State what is meant by cloud storage. **[2]**

## Section B

**6.** A student says a computer could manage with RAM only. Explain why it also needs ROM, and why
ROM could not replace RAM. **[4]**

**7.** Describe how data is written to and read from a hard disk drive. **[4]**

**8.** Describe how data is stored on and read from a Blu-ray disc. **[4]**

**9.** A tablet computer uses flash memory for its secondary storage.

(a) Describe how flash memory stores data.

(b) Explain **two** reasons why flash memory is more suitable than a hard disk drive for a tablet. **[7]**

**10.** A student has a computer with a small amount of RAM. They open a word processor, a web browser
with many tabs and a photo editor at the same time.

(a) Describe how virtual memory is used so that all three programs can stay open.

(b) Explain why the computer becomes slower as more programs are opened. **[6]**

**11.** A small design company stores all its files on a hard disk drive in its office. It is thinking
about moving the files to cloud storage. Explain **two** advantages and **two** disadvantages of this
change for the company. **[8]**

**12.** A museum wants to give each visitor a copy of a short film about its collection to take home. The
museum is choosing between a DVD and a USB flash drive. Compare the two devices for this purpose and
recommend one. **[4]**

---

## Answers

**1.** Storage that is directly accessed by the CPU [1].

**2.** (a) RAM [1]. (b) ROM [1]. (c) RAM [1].

**3.** Magnetic: hard disk drive (HDD) [1]. Optical: any one of CD, DVD or Blu-ray [1]. Solid-state: any
one of solid-state drive (SSD), SD card or USB flash drive [1].

**4.** Any two:

- RAM is volatile, so data and programs would be lost when the power is switched off [1].
- Secondary storage keeps files and programs more permanently, between sessions [1].
- RAM is too small to hold every program and file the user owns [1].
- Secondary storage can be removable, so data can be moved to another computer [1].

**5.** Data is stored on remote (physical) servers [1] that are accessed over the internet, usually owned
by a third party [1].

**6.** Any four:

- ROM is non-volatile, so it keeps the start-up instructions when the power is off [1].
- These instructions (the bootloader) are needed to load the operating system when the computer is
  switched on [1].
- RAM is volatile, so it is empty at switch-on and could not start the computer on its own [1].
- RAM can be written to, so it can hold the programs and data currently in use, which change as the user
  works [1].
- ROM is read only, so it cannot be used for the user's changing data [1].

*Tip:* make each point a contrast or a reason. "RAM is temporary and ROM is permanent" with no reason
gains little.

**7.** Any four:

- The disk has platters with a magnetic coating that spin [1].
- Each surface is divided into tracks and sectors [1].
- A read/write head on an arm moves to the correct track [1].
- To write, an electromagnet in the head magnetises areas of the surface in one of two directions to
  represent 1 or 0 [1].
- To read, the head detects the direction of magnetisation as the platter spins [1].

**8.** Any four:

- A laser is used to burn pits into the reflective surface of the disc [1].
- The areas between the pits are lands [1].
- Data is stored along a single spiral track [1].
- To read, a laser is shone onto the spinning disc and pits and lands reflect the light differently [1].
- A sensor detects the difference in reflection and it is converted to binary [1].
- Blu-ray uses a shorter-wavelength (blue-violet) laser, so pits are smaller and more data fits on the
  disc [1].

**9.** (a) Any three:

- It uses NAND (or NOR) technology [1].
- Data is stored in transistors, each with a control gate and a floating gate [1].
- A voltage on the control gate moves electrons onto the floating gate, where they are trapped [1].
- Whether the floating gate holds charge represents the binary value stored [1].
- The charge remains without power, so it is non-volatile [1].

(b) Two reasons, each with a point [1] and an explanation linked to a tablet [1]:

- No moving parts [1], so it will not be damaged if the tablet is dropped or carried around [1].
- Faster access to data [1], so apps open and files load quickly [1].
- Smaller and lighter [1], so it fits inside a thin, portable device [1].
- Uses less power [1], so the battery lasts longer [1].

Total 3 + 4 = 7 marks.

**10.** (a) Any four:

- RAM becomes full [1].
- The operating system uses an area of secondary storage as virtual memory [1].
- Data is divided into pages [1].
- Pages not currently in use (for example from the program in the background) are moved from RAM to
  virtual memory [1].
- Pages that are needed are transferred into RAM, and pages are moved back when they are needed
  again [1].

(b) Any two:

- Secondary storage is much slower to access than RAM [1].
- As more programs are opened, more pages must be transferred between RAM and virtual memory [1].
- The computer spends more time transferring pages than processing data [1].

Total 4 + 2 = 6 marks.

**11.** Two advantages and two disadvantages, each with a point [1] and an expansion [1]:

*Advantages*

- Staff can access files from anywhere with an internet connection [1], so they can work from home or at a
  client's office [1].
- The company does not need to buy and maintain its own drives [1], so storage can be increased as the
  business grows without new hardware [1].
- The provider keeps back-up copies on several servers [1], so files are not lost if the office drive
  fails or the office is damaged [1].

*Disadvantages*

- Files cannot be reached if the internet connection fails [1], so work stops [1].
- The files are held by a third party [1], so they could be hacked or seen by others, risking clients'
  designs [1].
- There is usually a monthly subscription [1], so costs continue for as long as the service is used [1].
- Uploading and downloading large design files is limited by the connection speed [1], so it can be
  slower than opening them from a local drive [1].

Maximum 4 marks for advantages and 4 marks for disadvantages.

**12.** Comparison points, any three:

- A DVD is cheaper to produce, so giving one to every visitor costs less [1].
- A USB drive is more durable; a DVD scratches easily [1].
- Some visitors' computers have no optical drive, but most have a USB port [1].
- A USB drive is smaller and easier to carry, but a DVD is thin and light enough to post or carry in a
  bag [1].

Recommendation with a reason linked to the comparison, for example: DVD, because a short film fits easily
and the low cost matters when giving one to every visitor; or USB drive, because more visitors will be
able to play it [1].

*Tip:* a recommendation alone gains nothing; it must follow from the points you have compared.

---

## Where marks are usually lost

- Calling virtual memory "extra RAM" instead of an area of secondary storage used when RAM is full.
- Describing an HDD with lasers or an optical disc with magnets.
- Explaining that flash memory is "faster" without saying it is because there are no moving parts.
- Giving advantages of the cloud only, when the question asks for both sides.
- Recommending a device without linking the recommendation to the comparison.
