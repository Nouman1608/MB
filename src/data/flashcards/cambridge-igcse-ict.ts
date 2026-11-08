/**
 * D-444 -- flashcards for Cambridge IGCSE ICT 0417 (2026-2028).
 *
 * Numbered subtopics use ids `<subtopic number>-<n>`. Topics 3, 12, 14, 16,
 * 17 and 19 list only unnumbered content headings in syllabus-topics.ts, so
 * the validator requires their ids to be `-<n>`, unique across the whole
 * deck. Each such subtopic is given its own block of a hundred, in the order
 * below: block 1 (-101, -102, ...) is Storage devices, block 2 Storage media,
 * and so on up to block 17, Output the presentation. Ids are permanent
 * (browser progress is keyed by them): add a card with the next unused number
 * in its block, never renumber.
 *
 * Not tiered. Written from Marlbridge's own 0417 study guides and revision
 * notes. Card text is plain text, so HTML elements are named in words (the
 * img element) rather than written as tags.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0417); origin 'revision-notes'.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const card = (topic: string, subtopic: string, id: string, { f, b, u, src }: Spec): Flashcard => ({
  id,
  topic,
  subtopic,
  front: f,
  back: b,
  ...(u ? { tier: 'upper' as const } : {}),
  origin: src ? 'revision-notes' as const : 'authored' as const,
  ...(src ? { source: src } : {}),
});

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, `${number}-${s.n}`, s));

/** A subtopic with no number in the syllabus record: ids `-<block × 100 + n>`. */
const unnumbered = (topic: string, subtopic: string, block: number, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, `-${block * 100 + s.n}`, s));

const T1 = 'types-and-components-of-computer-systems';
const T2 = 'input-and-output-devices';
const T3 = 'storage-devices-and-media';
const T4 = 'networks-and-the-effects-of-using-them';
const T5 = 'the-effects-of-using-it';
const T6 = 'ict-applications';
const T7 = 'the-systems-life-cycle';
const T8 = 'safety-and-security';
const T17 = 'document-production';
const T19 = 'presentations';

const STORE = 'igcse-ict-storage-devices-and-media-revision-notes';
const NET = 'igcse-ict-networks-and-effects-revision-notes';
const EFF = 'igcse-ict-effects-of-using-it-revision-notes';
const COMM = 'igcse-ict-applications-communication-revision-notes';

export const DECK_CAMBRIDGE_IGCSE_ICT: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'ict',
  syllabusCode: '0417',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Types and components of computer systems
    ...sub(T1, 'hardware-and-software-0417', '1.1', [
      { n: 1, f: 'Hardware vs software', b: 'Hardware is the physical components of a computer system. Software is the programs that run on it.' },
      { n: 2, f: 'System software vs application software', b: 'System software runs the computer: the operating system, utilities, device drivers and compilers. Application software does the user\'s work: word processors, spreadsheets, browsers, databases.' },
      { n: 3, f: 'Is a device driver system software or application software?', b: 'System software. Although it relates to one device, it helps run the computer rather than doing a task for the user.' },
      { n: 4, f: 'Why must analogue data be converted to digital, and what does it?', b: 'The real world is analogue (continuously variable), but a computer only stores and processes digital data. An analogue-to-digital converter (ADC) samples the signal and stores each sample as a binary number.' },
      { n: 5, f: 'What does a digital-to-analogue converter (DAC) do?', b: 'It turns stored binary values back into a continuously variable signal that a device such as a speaker or motor can use.' },
    ]),
    ...sub(T1, 'the-main-components-of-computer-systems-0417', '1.2', [
      { n: 1, f: 'What does the CPU do, and what does it contain?', b: 'It processes instructions and data. It contains the control unit, the arithmetic logic unit (ALU) and registers.' },
      { n: 2, f: 'RAM vs ROM', b: 'RAM is volatile, can be written to, and holds the programs and data in current use. ROM is non-volatile, normally read-only, and holds the boot instructions.' },
      { n: 3, f: 'Does ROM store the operating system?', b: 'No. ROM holds the boot (start-up) instructions that begin loading the operating system. The operating system itself is stored on backing storage and loaded into RAM.' },
      { n: 4, f: 'Internal memory vs backing storage', b: 'Internal memory (RAM and ROM) is accessed directly by the CPU. Backing (secondary) storage is non-volatile and keeps files permanently, but is not directly accessed by the CPU.' },
    ]),
    ...sub(T1, 'operating-systems-0417', '1.3', [
      { n: 1, f: 'What does an operating system manage?', b: 'Memory, files, processes, input and output devices, and it provides the user interface.' },
      { n: 2, f: 'Command line interface: advantages and disadvantages', b: 'The user types commands. Efficient and powerful for experts, with direct access to the system. But commands must be memorised and typing errors are not forgiven.' },
      { n: 3, f: 'Graphical user interface: advantages and disadvantages', b: 'Uses windows, icons, menus and a pointer (WIMP). Intuitive for beginners and needs no commands learned. But it uses more memory and processing power.' },
      { n: 4, f: 'Dialogue-based and gesture-based interfaces', b: 'Dialogue-based: the user speaks commands (voice control), useful when hands are busy, but less reliable in noisy places. Gesture-based: the user controls the device with movements such as swipes.' },
    ]),
    ...sub(T1, 'types-of-computer-0417', '1.4', [
      { n: 1, f: 'Name the five types of computer on the 0417 syllabus', b: 'Desktop, laptop, tablet, smartphone and phablet.' },
      { n: 2, f: 'Desktop vs laptop', b: 'A desktop is the most powerful and upgradeable for its cost, but is not portable. A laptop has a built-in screen and keyboard and is portable, with moderate power and a battery.' },
      { n: 3, f: 'Tablet vs smartphone', b: 'A tablet is very portable and touch-based with a longer battery life, but limited power for heavy tasks. A smartphone is the most portable and always with the user, but has the smallest screen and least power.' },
      { n: 4, f: 'What is a phablet?', b: 'A device between a large smartphone and a small tablet in size, combining the uses of a phone and a tablet.' },
    ]),
    ...sub(T1, 'emerging-technologies-0417', '1.5', [
      { n: 1, f: 'What is artificial intelligence (AI)?', b: 'Technology that lets a system appear to learn and make decisions rather than simply following a fixed set of instructions, e.g. voice assistants and recommendation systems.' },
      { n: 2, f: 'Virtual reality vs augmented reality', b: 'Virtual reality (VR) places the user in a fully simulated environment. Augmented reality (AR) overlays digital information on the real world. Both are forms of extended reality (XR).' },
      { n: 3, f: 'Give two uses of extended reality', b: 'Any two of: gaming, training simulations (e.g. pilots or surgeons), education, virtual tours, viewing products in your own room before buying.' },
    ]),

    // 2 Input and output devices
    ...sub(T2, 'input-devices-and-their-uses-0417', '2.1', [
      { n: 1, f: 'Name eight input devices on the 0417 syllabus', b: 'Any eight of: keyboard, numeric keypad, pointing devices (mouse, touchpad, tracker ball), remote control, joystick or driving wheel, touch screen, scanner, digital camera, microphone, sensors, light pen.' },
      { n: 2, f: 'Why is a touch screen suitable for a public information kiosk?', b: 'It is intuitive and needs no training, and there are no loose parts such as a mouse or keyboard to be damaged or stolen.' },
      { n: 3, f: 'Why are sensors used as input in monitoring and control?', b: 'They take continuous, automatic readings with no human error, even in places or at times a person could not.' },
      { n: 4, f: 'Is a touch screen an input or an output device?', b: 'Both. It is input when the user makes a selection on it, and output when it displays an image or interface.' },
    ]),
    ...sub(T2, 'direct-data-entry-and-associated-devices-0417', '2.2', [
      { n: 1, f: 'What is direct data entry?', b: 'Data is captured automatically by a device, without a person typing or clicking it in. It is faster, has a lower error rate and needs no one to read or interpret the data first.' },
      { n: 2, f: 'OMR vs OCR', b: 'OMR (optical mark recognition) reads marks in set positions, e.g. a multiple-choice answer sheet. OCR (optical character recognition) reads printed or handwritten text and turns it into editable text.' },
      { n: 3, f: 'Why is RFID preferred to a bar code for tracking a moving object?', b: 'An RFID tag is read by radio waves, so it needs no line of sight and can be read while the object moves or the tag is hidden, e.g. a hospital wristband.' },
      { n: 4, f: 'Why is MICR used for bank cheques?', b: 'Magnetic ink characters are hard to forge and can be read reliably even when the cheque is dirty or creased.' },
      { n: 5, f: 'Name six direct data entry devices', b: 'Magnetic stripe reader, chip and PIN reader, RFID reader, OMR reader, OCR reader, bar code reader, QR code scanner.' },
    ]),
    ...sub(T2, 'output-devices-and-their-uses-0417', '2.3', [
      { n: 1, f: 'Laser vs inkjet printer', b: 'Laser: fast and low cost per page for high-volume printing, but dearer to buy. Inkjet: cheap to buy with good colour and photo quality, but slower and expensive per page for large volumes.' },
      { n: 2, f: 'When is a dot matrix printer still used?', b: 'For multi-part carbon forms printed in one pass (e.g. a delivery note with copies), or in dusty, harsh places that would damage a laser or inkjet printer. It is noisy and low resolution.' },
      { n: 3, f: 'What is a plotter used for?', b: 'Large-format, high-precision line drawings such as CAD plans, maps and posters.' },
      { n: 4, f: 'What is an actuator?', b: 'An output device that turns an electrical signal into physical movement, e.g. opening a valve, moving a robot arm or starting a motor.' },
      { n: 5, f: 'Name eight output devices on the 0417 syllabus', b: 'Any eight of: monitor, touch screen, multimedia projector, laser printer, inkjet printer, dot matrix printer, plotter, 3D printer, speaker, actuator.' },
    ]),

    // 3 Storage devices and media
    ...unnumbered(T3, 'storage-devices-0417', 1, [
      { n: 1, f: 'Storage device vs storage media', b: 'A storage device is the hardware that reads and writes the data (e.g. a DVD drive). Storage media is the material the data is recorded onto (e.g. a DVD disc).', src: STORE },
      { n: 2, f: 'Magnetic storage: devices, strength and weakness', b: 'Devices: fixed and portable hard drives, tape drives. Strength: large capacity and low cost per GB. Weakness: slower access, and damaged by strong magnetic fields or shock.', src: STORE },
      { n: 3, f: 'Solid-state storage: devices, strength and weakness', b: 'Devices: SSDs, pen drives and flash drives. Strength: no moving parts, so fast and shock-resistant. Weakness: higher cost per GB.', src: STORE },
      { n: 4, f: 'Why does an SSD suit a laptop?', b: 'No moving parts, so it survives being carried and knocked; lower power use, so longer battery life; faster and silent. The trade-off is a higher price per gigabyte.' },
    ]),
    ...unnumbered(T3, 'storage-media-0417', 2, [
      { n: 1, f: 'Name the media used in each storage family', b: 'Magnetic: magnetic hard disks and magnetic tape. Optical: CD, DVD and Blu-ray discs. Solid-state: memory cards such as SD, xD and CFast.' },
      { n: 2, f: 'Order CD, DVD and Blu-ray by capacity', b: 'CD (smallest), then DVD, then Blu-ray (largest).' },
      { n: 3, f: 'Why is magnetic tape still used for backups?', b: 'It has a very low cost per gigabyte at huge capacities. Its access is sequential, so finding one file is slow, but that is acceptable for long-term archiving.' },
      { n: 4, f: 'Why might optical media be chosen deliberately?', b: 'Read-only and write-once (R) discs mean the data cannot be changed after writing. They are also cheap and widely compatible.' },
    ]),

    // 4 Networks and the effects of using them
    ...sub(T4, 'networks-0417', '4.1', [
      { n: 1, f: 'What are the three functions of a router?', b: 'It connects networks and devices to the internet, stores computer addresses, and routes data packets to their destination.', src: NET },
      { n: 2, f: 'Hub vs switch vs bridge', b: 'A hub sends data to every connected device. A switch learns which device is on which port and sends data only to the intended device. A bridge joins two network segments into one.', src: NET },
      { n: 3, f: 'Wi-Fi vs Bluetooth', b: 'Wi-Fi connects a device to a wider network or the internet over a larger range. Bluetooth connects two devices directly over a short range, with no network needed, e.g. headphones.', src: NET },
      { n: 4, f: 'Intranet vs extranet vs internet', b: 'Intranet: private, for one organisation only. Extranet: private network with controlled access for chosen outsiders such as suppliers. Internet: global and public.', src: NET },
      { n: 5, f: 'LAN vs WLAN vs WAN', b: 'LAN: a small area such as one building, usually cabled. WLAN: the wireless version of a LAN. WAN: a large area joining LANs across sites, cities or countries; the internet is the largest WAN.', src: NET },
      { n: 6, f: 'Cloud computing: one advantage and one disadvantage', b: 'Advantage: accessible from any device with an internet connection, with less need for local storage. Disadvantage: depends on a working connection and on a third party for security and availability.', src: NET },
    ]),
    ...sub(T4, 'network-issues-and-communication-0417', '4.2', [
      { n: 1, f: 'What makes a password strong?', b: 'It is long, mixes character types (upper and lower case, numbers, symbols) and avoids personal information such as names or birthdates.', src: NET },
      { n: 2, f: 'What are the three types of authentication factor?', b: 'Something you know (a password), something you have (a token or card) and something you are (a biometric). Combining them is multi-factor authentication.', src: NET },
      { n: 3, f: 'What is zero login?', b: 'Authentication by passive signals, such as typing pattern, location or device recognition, with no active entry by the user.', src: NET },
      { n: 4, f: 'Why must anti-malware software be kept up to date?', b: 'It relies on a database of known malware signatures, so it cannot recognise malware discovered after its last update.', src: NET },
      { n: 5, f: 'Video- vs audio- vs web-conferencing', b: 'Video: camera, microphone, speakers and a fast connection; suits meetings where seeing people matters. Audio: voice only, lower bandwidth. Web: adds shared documents and screens for collaboration.', src: NET },
    ]),

    // 5 The effects of using IT
    ...sub(T5, 'microprocessor-controlled-devices-0417', '5.1', [
      { n: 1, f: 'Name the five areas in which smart devices in the home affect people', b: 'Lifestyle, leisure time, physical fitness, security of data and social interaction.', src: EFF },
      { n: 2, f: 'Positive and negative effects of microprocessor-controlled devices in the home', b: 'Positive: more leisure time, remote monitoring and control, better home security. Negative: less physical activity, less face-to-face contact, dependence on technology, risk to data if a device is hacked.' },
      { n: 3, f: 'Name the three areas for smart devices in transport', b: 'Security of data, autonomous vehicles and transport safety.', src: EFF },
      { n: 4, f: 'Give a positive and a negative effect of autonomous vehicles', b: 'Positive: less human error, and passengers can use travel time productively. Negative: job losses for professional drivers, safety questions in unusual situations, and risk if the control system is hacked.', src: EFF },
    ]),
    ...sub(T5, 'health-problems-0417', '5.2', [
      { n: 1, f: 'RSI: cause and prevention', b: 'Repetitive strain injury is caused by repeated small movements such as typing and using a mouse. Prevent it with regular breaks, an ergonomic keyboard or mouse, and a wrist rest.' },
      { n: 2, f: 'Back problems: cause and prevention', b: 'Caused by poor posture and an unsuitable chair or desk height. Prevent them with an adjustable chair, a screen at eye level and good posture.' },
      { n: 3, f: 'Eye problems: cause and prevention', b: 'Caused by focusing on a screen for a long time, poor lighting and glare. Prevent them by looking away regularly, using an anti-glare screen and good lighting.' },
      { n: 4, f: 'Headaches from IT use: causes and prevention', b: 'Causes: eye strain, glare, poor posture and dehydration. Prevention: regular breaks, adjusting screen brightness and contrast, and drinking water.' },
    ]),

    // 6 ICT applications
    ...sub(T6, 'ict-applications-communication-0417', '6.1', [
      { n: 1, f: 'Newsletter or poster as communication media: advantage and disadvantage', b: 'Advantage: no device or internet is needed to view it. Disadvantage: it cannot be updated once distributed, has no interactivity, and has printing and distribution costs.' },
      { n: 2, f: 'Website as a communication medium: advantages and disadvantages', b: 'It can be updated at any time, hold more content and link to further detail. But it only reaches people with a device and internet access, and they must choose to visit it.', src: COMM },
      { n: 3, f: 'Media streaming vs ePublication', b: 'Streaming plays audio or video as the data arrives, without storing the full file, so it needs an ongoing connection. An ePublication is downloaded as a complete file and can then be read offline.' },
      { n: 4, f: 'How does VoIP differ from a standard phone call?', b: 'VoIP carries voice as data over the internet, not over a dedicated voice channel. It can be much cheaper, especially internationally, but call quality depends on the internet connection.' },
    ]),
    ...sub(T6, 'modelling-applications-0417', '6.2', [
      { n: 1, f: 'What is a computer model?', b: 'A computer representation of a real system, using data and rules, that predicts what would happen when the inputs change, so "what if" questions can be tested.' },
      { n: 2, f: 'Give four uses of computer modelling on the 0417 syllabus', b: 'Any four of: personal finance, bridge and building design, flood water management, traffic management, weather forecasting.' },
      { n: 3, f: 'Give three advantages of using a computer model', b: 'It is cheaper and safer than building or testing the real thing; many "what if" scenarios can be tried quickly; time can be speeded up to see long-term results; it can test situations too dangerous to try for real.' },
      { n: 4, f: 'Give two disadvantages of a computer model', b: 'It is only as good as the data and rules used, so it may not reflect reality; complex models can be costly to build and need powerful computers and skilled staff.' },
    ]),
    ...sub(T6, 'computer-controlled-systems-0417', '6.3', [
      { n: 1, f: 'Give three uses of computer-controlled systems', b: 'Any three of: robots in manufacturing (welding, paint spraying, assembly), production line control, autonomous vehicles, automatic warehouses.' },
      { n: 2, f: 'Advantages of robots on a production line', b: 'They work non-stop without breaks, give consistent quality, are accurate, and can work in conditions that are dangerous to people.' },
      { n: 3, f: 'Disadvantages of computer-controlled manufacturing', b: 'High set-up and maintenance cost, job losses for unskilled workers, robots cannot easily cope with unexpected situations, and a fault can stop the whole line.' },
    ]),
    ...sub(T6, 'school-management-systems-0417', '6.4', [
      { n: 1, f: 'What can a school management system be used for?', b: 'Registering attendance, recording and analysing learner performance, organising examinations and creating timetables.' },
      { n: 2, f: 'Name three ways a school can register attendance automatically', b: 'Any three of: magnetic stripe cards, RFID (smart) cards, biometrics such as fingerprints or face recognition.' },
      { n: 3, f: 'Why use biometrics rather than swipe cards for registration?', b: 'A biometric cannot be lost, forgotten or lent to another learner, so it is more reliable and secure. It costs more and raises privacy concerns about storing personal data.' },
    ]),
    ...sub(T6, 'booking-systems-0417', '6.5', [
      { n: 1, f: 'Give four uses of online booking systems', b: 'Any four of: travel (flights, trains, holidays), concerts, cinemas, theatres, sporting events.' },
      { n: 2, f: 'Advantages of online booking for the customer', b: 'Book at any time from anywhere; see availability and choose seats; compare prices; receive an e-ticket by email or phone; no queues.' },
      { n: 3, f: 'Disadvantages of online booking', b: 'Needs a device and internet access; risk of fraud or hacking of payment details; no face-to-face help; some sites charge booking fees.' },
      { n: 4, f: 'How does an online booking system prevent double booking?', b: 'When a seat is selected it is held, and once payment is confirmed the database is updated at once so the seat shows as unavailable to every other user.' },
    ]),
    ...sub(T6, 'banking-applications-0417', '6.6', [
      { n: 1, f: 'What is electronic funds transfer (EFT)?', b: 'Moving money electronically from one bank account to another, e.g. for paying wages, with no cash or paper changing hands.' },
      { n: 2, f: 'Give four things a customer can do at an ATM', b: 'Withdraw cash, check the account balance, deposit cash or cheques, print a mini statement, change the PIN, pay bills or top up a phone.' },
      { n: 3, f: 'Internet banking: advantages and disadvantages', b: 'Advantages: bank at any time, no travel, easy to check accounts and pay bills. Disadvantages: risk of hacking and phishing, needs internet access, no face-to-face service, less social contact.' },
      { n: 4, f: 'Describe the steps in withdrawing cash at an ATM', b: 'The card is inserted and read; the PIN is entered and checked; the amount is chosen; the bank checks the balance; if there is enough money, the account is debited, the card is returned and the cash is issued.' },
    ]),
    ...sub(T6, 'computers-in-medicine-0417', '6.7', [
      { n: 1, f: 'What information systems are used in medicine?', b: 'Patient records (details, history, tests, treatments) and pharmacy records (prescriptions, drug stock, checks for drug interactions and allergies).' },
      { n: 2, f: 'Give four uses of 3D printing in medicine', b: 'Any four of: prosthetics, surgical and diagnostic aids (models of organs to plan operations), tissue engineering, artificial blood vessels, customised medicines.' },
      { n: 3, f: 'Why are 3D-printed prosthetics an advantage?', b: 'They can be made to fit the individual exactly, quickly and at lower cost than traditional methods, and replaced easily as a child grows.' },
    ]),
    ...sub(T6, 'expert-systems-0417', '6.8', [
      { n: 1, f: 'What is an expert system?', b: 'A computer system that copies the knowledge and reasoning of a human expert to give advice or a diagnosis in one subject area.' },
      { n: 2, f: 'Name the five parts of an expert system', b: 'User interface, inference engine, knowledge base, rules base and explanation system.' },
      { n: 3, f: 'Give five uses of expert systems', b: 'Any five of: medical diagnosis, car engine fault diagnosis, mineral prospecting, financial planning, chess games, route scheduling for deliveries, plant and animal identification.' },
      { n: 4, f: 'What does the explanation system do?', b: 'It tells the user how the expert system reached its conclusion, often with the probability that the conclusion is correct.' },
    ]),
    ...sub(T6, 'computers-in-the-retail-industry-0417', '6.9', [
      { n: 1, f: 'What is a point-of-sale (POS) terminal?', b: 'A checkout till that reads bar codes, looks up each item\'s price and description in the stock database, adds up the bill, takes payment and prints a receipt.' },
      { n: 2, f: 'How does automatic stock control work?', b: 'Each sale reduces the stock level in the database. When stock falls to the reorder level, the system automatically orders more from the supplier.' },
      { n: 3, f: 'How does contactless card payment work?', b: 'The card or phone is held near the reader, which uses RFID or NFC to read the card details. No PIN is needed for small amounts, so it is fast, but a lost card could be misused up to the limit.' },
      { n: 4, f: 'Internet shopping: advantages and disadvantages for the customer', b: 'Advantages: shop at any time, wider choice, easy price comparison, home delivery. Disadvantages: risk of fraud, cannot see or try goods, delivery costs and waits, needs internet access.' },
    ]),
    ...sub(T6, 'recognition-systems-0417', '6.10', [
      { n: 1, f: 'Name five recognition systems on the 0417 syllabus', b: 'OMR, OCR, bar code and QR code readers, RFID, and biometric recognition. ANPR (automatic number plate recognition) is a use of OCR.' },
      { n: 2, f: 'How does automatic number plate recognition (ANPR) work?', b: 'A camera captures an image of the vehicle; software finds the number plate and uses OCR to read the characters; the number is checked against a database, e.g. to open a car park barrier.' },
      { n: 3, f: 'Give two uses of QR codes', b: 'Any two of: linking to a website or app, adverts, boarding passes and e-tickets, making payments, product information in shops.' },
      { n: 4, f: 'Biometric recognition: advantages and disadvantages', b: 'Advantages: cannot be forgotten, lost or shared; hard to forge. Disadvantages: expensive equipment, can fail (e.g. a cut finger or poor lighting), and privacy concerns about storing personal data.' },
    ]),
    ...sub(T6, 'satellite-systems-0417', '6.11', [
      { n: 1, f: 'How does GPS work out a position?', b: 'Satellites send signals with the exact time they were sent. The receiver uses the time each signal takes to arrive to find its distance from at least three satellites, and from these calculates its position.' },
      { n: 2, f: 'Satellite navigation: advantages and disadvantages', b: 'Advantages: no paper maps, live route and traffic updates, estimated arrival time, fewer people getting lost. Disadvantages: maps may be out of date, signal loss in tunnels or cities, over-reliance by drivers.' },
      { n: 3, f: 'What is a geographic information system (GIS)?', b: 'A system that captures, stores and displays data linked to locations, building up layers of information on a map, e.g. for planning or emergency services.' },
      { n: 4, f: 'What are media communication satellites used for?', b: 'Satellite television, satellite phones and internet links, and relaying news broadcasts across the world.' },
    ]),

    // 7 The systems life cycle
    ...sub(T7, 'analysis-0417', '7.1', [
      { n: 1, f: 'Name four methods of researching the current system', b: 'Observation, interviews, questionnaires and examining existing documents.' },
      { n: 2, f: 'Observation vs interviews', b: 'Observation shows what really happens, but staff may behave differently when watched. Interviews give detailed answers with follow-up questions, but take time, so only a few people can be asked.' },
      { n: 3, f: 'Questionnaires: advantage and disadvantage', b: 'Many people can answer quickly and the results are easy to analyse. But answers may be rushed or untruthful, the response rate may be low and no follow-up questions are possible.' },
      { n: 4, f: 'What is a requirements specification?', b: 'The agreed list of what the new system must do, produced at the end of analysis, along with the inputs, outputs and processing needed.' },
    ]),
    ...sub(T7, 'design-0417', '7.2', [
      { n: 1, f: 'What is produced at the design stage?', b: 'Data capture forms and screen layouts, report layouts, the file or database structure (field names, data types, lengths, key field), validation routines, verification methods, choice of hardware and software, and a test plan.' },
      { n: 2, f: 'Name six validation checks', b: 'Range check, length check, type check, presence check, format check and check digit.' },
      { n: 3, f: 'Validation vs verification', b: 'Validation checks that data is sensible and allowed, but not that it is correct. Verification checks that data has been copied accurately from the source, by visual checking or double data entry.' },
    ]),
    ...sub(T7, 'development-and-testing-0417', '7.3', [
      { n: 1, f: 'Normal, abnormal and extreme test data', b: 'Normal: valid data that should be accepted. Abnormal: invalid data that should be rejected. Extreme: the largest and smallest valid values, at the edge of the range (some mark schemes say boundary).' },
      { n: 2, f: 'A field accepts ages 11 to 16. Is 17 extreme or abnormal data?', b: 'Abnormal. It is outside the range, so it should be rejected. The extreme values are 11 and 16, which should be accepted.' },
      { n: 3, f: 'What is live data?', b: 'Real data whose results are already known from the old system, used to test the new system after testing with test data.' },
      { n: 4, f: 'What does a test plan contain?', b: 'Each test, the data to be used, the expected result and, once run, the actual result, so the two can be compared.' },
    ]),
    ...sub(T7, 'implementation-0417', '7.4', [
      { n: 1, f: 'Direct changeover: advantage and disadvantage', b: 'The old system stops and the new one starts at once. It is quick and cheap, but if the new system fails there is nothing to fall back on.' },
      { n: 2, f: 'Parallel running: advantage and disadvantage', b: 'Both systems run side by side. It is the safest, as results can be compared and the old system is a backup, but it is the most expensive because all work is done twice.' },
      { n: 3, f: 'Phased implementation vs pilot running', b: 'Phased: the new system is introduced one part at a time, so problems affect one part only, but the change takes longer. Pilot: the whole system is tried in one branch first, so failure affects only that branch.' },
      { n: 4, f: 'Why would a hospital avoid direct changeover for patient records?', b: 'If the new system failed there would be no working backup, putting patient safety at risk.' },
    ]),
    ...sub(T7, 'documentation-0417', '7.5', [
      { n: 1, f: 'Who is technical documentation for, and what does it contain?', b: 'For the people who maintain or upgrade the system. It contains the purpose of the system, hardware and software requirements, flowcharts, program listings, file structures, input and output formats, validation rules and test results.' },
      { n: 2, f: 'Who is user documentation for, and what does it contain?', b: 'For the people who use the system. It contains how to log in and use the features, example screens, error messages and what to do, troubleshooting tips and FAQs.' },
      { n: 3, f: 'Give two items in technical documentation but not usually in user documentation', b: 'Any two of: flowcharts, program listings, file structures, hardware requirements, validation rules.' },
    ]),
    ...sub(T7, 'evaluation-0417', '7.6', [
      { n: 1, f: 'What is checked when a new system is evaluated?', b: 'Whether it meets the requirements in the original specification, how easy it is to use, how efficient it is, user satisfaction and the appropriateness of the solution.' },
      { n: 2, f: 'What evidence is used in an evaluation?', b: 'A comparison of results with the requirements specification, user feedback (e.g. questionnaires) and test results.' },
      { n: 3, f: 'What happens after evaluation finds limitations?', b: 'Improvements are proposed, which can start the analysis stage of the next version, which is why the stages form a cycle.' },
    ]),

    // 8 Safety and security
    ...sub(T8, 'physical-safety-0417', '8.1', [
      { n: 1, f: 'Trailing cables: harm and prevention', b: 'People trip and are injured, or equipment is pulled down. Prevent it with cable ducts or covers, tidy cable routes or wireless connections.' },
      { n: 2, f: 'Overloaded sockets: harm and prevention', b: 'They can cause a fire. Limit the number of devices per socket, check cables and use surge protectors.' },
      { n: 3, f: 'Liquids and exposed wires near computers: harm and prevention', b: 'Electric shock, electrocution or short circuits. Ban drinks and food near equipment, and have equipment tested regularly by qualified staff.' },
      { n: 4, f: 'Which fire extinguisher is used for an electrical fire?', b: 'Carbon dioxide (CO₂) or dry powder, never water.' },
    ]),
    ...sub(T8, 'esafety-0417', '8.2', [
      { n: 1, f: 'Why should personal data be kept private online?', b: 'Details such as name, address, school, photos or bank details can be used for identity theft, fraud, or to find and harm a person.' },
      { n: 2, f: 'Give four eSafety rules for social media', b: 'Use privacy settings; use a nickname, not your real name; do not post your address, school or location; never meet someone you only know online; report abuse; think before posting.' },
      { n: 3, f: 'What is grooming?', b: 'An adult building a false online friendship with a young person to gain their trust in order to harm them.' },
      { n: 4, f: 'How can you check a website is safe for personal details?', b: 'Check that the address starts with https and shows a padlock, and only use trusted, reputable sites. The padlock shows the connection is encrypted, not that the site is honest.' },
    ]),
    ...sub(T8, 'security-of-data-0417', '8.3', [
      { n: 1, f: 'Phishing vs pharming', b: 'Phishing: a fake email or message tricks the user into giving details, often via a link to a fake site. Pharming: malicious code redirects the user to a fake website even when the correct address is typed.' },
      { n: 2, f: 'What are smishing and vishing?', b: 'Phishing carried out by SMS text message (smishing) and by voice call (vishing).' },
      { n: 3, f: 'What does a firewall do, and what does it not do?', b: 'It monitors network traffic and blocks unauthorised or suspicious traffic in and out. It does not remove viruses; anti-malware software does that.' },
      { n: 4, f: 'Does encryption stop data being intercepted?', b: 'No. It scrambles data so that intercepted data cannot be read without the key.' },
      { n: 5, f: 'Why does two-factor authentication improve security?', b: 'A password alone is not enough: the attacker also needs a second item, such as a code sent to the user\'s phone.' },
    ]),

    // 9 Audience
    ...sub('audience', 'audience-appreciation-0417', '9.1', [
      { n: 1, f: 'What is audience appreciation?', b: 'Understanding who will read, view or use your work and adapting it to their age, knowledge, interests, needs and setting.' },
      { n: 2, f: 'How should a document for children aged 6 to 8 be designed?', b: 'Large rounded font, bright colours, large pictures, simple words and short sentences, with one idea per page.' },
      { n: 3, f: 'How should work be adapted for people with a visual impairment?', b: 'Use high contrast, large fonts and alt text for images.' },
      { n: 4, f: 'How do you earn the mark when describing a design feature for an audience?', b: 'Give the feature and a reason linked to the named audience, e.g. "large photographs of animals, because they keep children interested". A feature with no reason earns no mark.' },
    ]),
    ...sub('audience', 'copyright-0417', '9.2', [
      { n: 1, f: 'What is copyright?', b: 'A legal right that protects the creator of an original work (text, images, music, video, software) and gives them control over how it is copied, shared and sold.' },
      { n: 2, f: 'Does naming the source make it legal to use a copyrighted image?', b: 'No. Giving credit does not replace permission. You need the owner\'s permission or a licence that allows reuse.' },
      { n: 3, f: 'Give four ways software makers try to prevent illegal copying', b: 'Any four of: licence agreements, product keys or activation codes, needing the original disk or an online check, holograms, digital rights management (DRM), watermarks.' },
      { n: 4, f: 'Give two risks of using pirated software', b: 'It may contain malware, and it gets no updates or support. The user may also face fines or prosecution.' },
    ]),

    // 10 Communication
    ...sub('communication-0417', 'communication-with-other-ict-users-using-email-0417', '10.1', [
      { n: 1, f: 'Cc vs Bcc', b: 'Cc (carbon copy) recipients can be seen by everyone who gets the email. Bcc (blind carbon copy) recipients are hidden from the other recipients.' },
      { n: 2, f: 'When should Bcc be used?', b: 'When emailing a large group, such as all parents, so that their email addresses are not revealed to each other.' },
      { n: 3, f: 'What is netiquette? Give two rules for email', b: 'The accepted rules of polite behaviour online. E.g. use a clear subject line, be polite and brief, do not write in capitals (it looks like shouting), check spelling, do not copy people in unnecessarily.' },
      { n: 4, f: 'What is spam, and how can you reduce it?', b: 'Unsolicited junk email sent in bulk. Reduce it with a spam filter, by not publishing your address on websites, not replying to spam and giving your address only to trusted sites.' },
    ]),
    ...sub('communication-0417', 'effective-use-of-the-internet-0417', '10.2', [
      { n: 1, f: 'Internet vs World Wide Web', b: 'The internet is the worldwide network of networks. The World Wide Web is the collection of web pages accessed through it using a web browser.' },
      { n: 2, f: 'How do you make a web search more effective?', b: 'Use specific keywords, quotation marks for an exact phrase, AND, OR and NOT, and advanced options such as date or file type. Look beyond the first results and refine the search.' },
      { n: 3, f: 'What does AND do in a search, and what does OR do?', b: 'AND narrows a search: both terms must appear. OR widens it: either term may appear. NOT excludes a term.' },
      { n: 4, f: 'How can you judge whether a website is reliable?', b: 'Check who wrote it and their expertise, when it was published or updated, whether it is biased or selling something, and whether other reliable sources agree. A domain ending is a hint, not proof.' },
    ]),

    // 11 File management
    ...sub('file-management', 'manage-files-effectively-0417', '11.1', [
      { n: 1, f: 'What makes a good file name?', b: 'It describes the content, avoids unusual symbols, and may include a version number or date, e.g. Year9_Geography_Draft2.docx.' },
      { n: 2, f: 'Save vs Save as', b: 'Save overwrites the current file. Save as creates a new file with a different name, location or format, keeping the original.' },
      { n: 3, f: 'What is a generic file format? Give examples', b: 'A format that many different programs can open, not tied to one manufacturer, e.g. .csv, .txt, .rtf and .pdf.' },
      { n: 4, f: 'Why is a backup on the same hard drive not enough?', b: 'If the drive fails, both copies are lost. A backup should be on a different device or in a different place, such as an external drive or cloud storage.' },
    ]),
    ...sub('file-management', 'reduce-file-sizes-for-storage-or-transmission-0417', '11.2', [
      { n: 1, f: 'Lossless vs lossy compression', b: 'Lossless keeps all the data so the original can be rebuilt exactly (ZIP, PNG, GIF). Lossy permanently removes data people are least likely to notice, giving much smaller files (JPEG, MP3, MP4).' },
      { n: 2, f: 'Name four ways to reduce a file\'s size', b: 'Compress it; reduce an image\'s resolution, dimensions or colour depth; crop it or shorten audio and video; reduce the bit rate or sample rate; save in a more efficient format.' },
      { n: 3, f: 'How long does a 6 MB file take to send at 12 megabits per second?', b: '6 MB × 8 = 48 megabits. 48 ÷ 12 = 4 seconds.' },
      { n: 4, f: 'Which format suits a logo with flat colours and a transparent background?', b: 'PNG: it is lossless, so sharp edges stay crisp, and it supports transparency.' },
    ]),

    // 12 Images
    ...unnumbered('images', 'place-and-edit-an-image-t12-0417', 3, [
      { n: 1, f: 'Why keep the aspect ratio locked when resizing an image?', b: 'It keeps the width and height in proportion. Changing them by different amounts stretches or squashes (distorts) the picture.' },
      { n: 2, f: 'An image of 3200 × 2400 pixels is resized to 800 pixels wide, keeping its proportions. What is its new height?', b: 'Scale factor 800 ÷ 3200 = 0.25, so the height is 2400 × 0.25 = 600 pixels.' },
      { n: 3, f: 'What does text wrapping control? Name three options', b: 'How the surrounding text behaves around an image. Options: in line with text, square, tight, top and bottom, behind text, in front of text.' },
      { n: 4, f: 'What is cropping?', b: 'Removing unwanted edges of an image to change what is visible, without stretching it.' },
    ]),
    ...unnumbered('images', 'file-size-reduction-t12-0417', 4, [
      { n: 1, f: 'How do you calculate the size of an uncompressed image in bytes?', b: 'Width × height × bits per pixel ÷ 8.' },
      { n: 2, f: 'Name four ways to reduce an image\'s file size', b: 'Resize it to smaller pixel dimensions; crop it; reduce the resolution; reduce the colour depth; save it in a compressed format such as JPEG.' },
      { n: 3, f: 'What is the trade-off when reducing an image\'s file size?', b: 'Quality falls: an image that is too small or too compressed looks blurred or blocky when enlarged or printed.' },
      { n: 4, f: 'Why save a reduced image under a new name?', b: 'So the original full-quality image is kept and can be used again later.' },
    ]),

    // 13 Layout
    ...sub('layout', 'create-or-edit-a-document-0417', '13.1', [
      { n: 1, f: 'Portrait vs landscape orientation', b: 'Portrait is taller than it is wide. Landscape is wider than it is tall.' },
      { n: 2, f: 'Page break vs column break vs section break', b: 'A page break starts a new page. A column break moves text to the next column. A section break allows different settings, such as columns or orientation, in different parts.' },
      { n: 3, f: 'A4 is 21 cm wide with 2.5 cm side margins. How wide is each of three columns with 0.8 cm gaps?', b: 'Text width 21 − 5 = 16 cm. Two gaps = 1.6 cm. 16 − 1.6 = 14.4 cm ÷ 3 = 4.8 cm per column.' },
      { n: 4, f: 'Why use tab stops instead of the space bar to line up text?', b: 'Tab stops align text at exact positions (decimal tabs line up numbers), and the alignment stays correct when fonts or text change. Spaces give uneven results.' },
    ]),
    ...sub('layout', 'tables-0417', '13.2', [
      { n: 1, f: 'What is a cell in a table?', b: 'The box where a row and a column meet.' },
      { n: 2, f: 'How do you make a table title span the whole table?', b: 'Merge all the cells in the first row into one cell.' },
      { n: 3, f: 'How should text and numbers be aligned in a table?', b: 'Text left-aligned; numbers right-aligned or decimal-aligned so the decimal points line up; headings centred if asked.' },
      { n: 4, f: 'Name four ways a table can be formatted', b: 'Any four of: column width and row height, borders, shading, merging or splitting cells, inserting or deleting rows and columns, sorting, aligning the table on the page.' },
    ]),
    ...sub('layout', 'headers-and-footers-0417', '13.3', [
      { n: 1, f: 'What are a header and a footer?', b: 'Text or images in the top (header) or bottom (footer) margin that repeat automatically on every page.' },
      { n: 2, f: 'Name four automatic fields that can go in a header or footer', b: 'Page number, total number of pages, date and time, file name and file path.' },
      { n: 3, f: 'Why must page numbers be inserted as an automatic field?', b: 'A field updates itself on each page. A number typed by hand shows the same number on every page.' },
    ]),

    // 14 Styles
    ...unnumbered('styles', 'create-edit-and-apply-styles-t14-0417', 5, [
      { n: 1, f: 'What is a style?', b: 'A saved set of formatting, such as font, size, colour, alignment and spacing, applied to text or another object in one step.' },
      { n: 2, f: 'Paragraph style vs character style', b: 'A paragraph style applies to a whole paragraph (e.g. Heading 1, Body Text). A character style applies to selected words only.' },
      { n: 3, f: 'Why use styles instead of formatting by hand?', b: 'Formatting is consistent and faster to apply; editing a style updates every paragraph that uses it; heading styles can build a contents list automatically.' },
      { n: 4, f: 'Why name a style by purpose (Caption) rather than appearance (BigBlue)?', b: 'The appearance may change later, which would make a name like BigBlue misleading.' },
    ]),
    ...unnumbered('styles', 'corporate-house-style-t14-0417', 6, [
      { n: 1, f: 'What is a corporate house style?', b: 'A set of rules an organisation uses for all its documents (logo, colours, fonts, layout) so they look consistent and are instantly recognisable as the organisation\'s.' },
      { n: 2, f: 'Name five elements of a corporate house style', b: 'Any five of: logo position and size, colour scheme, fonts and sizes, margins and alignment, header and footer layout, slogan, standard wording, chart and image style.' },
      { n: 3, f: 'How is a house style usually built into software?', b: 'As a template containing the saved styles, header and footer, logo and page setup, so a user can write without formatting from scratch.' },
      { n: 4, f: 'Give two benefits and one drawback of a house style', b: 'Benefits: professional, consistent documents; easy brand recognition; less time spent formatting. Drawback: it limits creativity, and every document must be updated if the style changes.' },
    ]),

    // 15 Proofing
    ...sub('proofing', 'software-tools-0417', '15.1', [
      { n: 1, f: 'Why might a spell checker miss an error?', b: 'It only checks each word against a dictionary, so a real word used wrongly (there for their, form for from) passes. It also ignores numbers such as a wrong date.' },
      { n: 2, f: 'What does a grammar checker look for?', b: 'Problems in sentence structure: verbs not agreeing with subjects, missing capitals, repeated words and over-long sentences. Its suggestions are not always right.' },
      { n: 3, f: 'Name four other software proofing tools', b: 'Any four of: thesaurus, word count, find and replace, automatic correction, show formatting marks, track changes and comments, validation.' },
      { n: 4, f: 'What can validation not do?', b: 'It cannot check that data is correct, only that it is reasonable. A mark of 68 typed as 86 still passes a range check of 0 to 100.' },
    ]),
    ...sub('proofing', 'proofing-techniques-0417', '15.2', [
      { n: 1, f: 'Name four proofreading techniques', b: 'Read slowly, line by line, or aloud; compare with the source item by item; check consistency of fonts and spacing; check numbers, dates and names; use print preview; ask another person to read it.' },
      { n: 2, f: 'What are visual verification and double data entry?', b: 'Visual verification: reading the entered data against the original. Double data entry: the data is entered twice and the computer compares the two, reporting any differences.' },
      { n: 3, f: 'What are widows and orphans?', b: 'Single lines of a paragraph left alone at the top or the bottom of a page.' },
    ]),

    // 16 Graphs and charts
    ...unnumbered('graphs-and-charts', 'create-label-and-edit-a-graph-or-chart-t16-0417', 7, [
      { n: 1, f: 'Which chart type should you use for each purpose?', b: 'Bar or column: comparing categories. Line graph: change over time. Pie chart: parts of a whole. Scatter graph: whether two sets of numbers are related.' },
      { n: 2, f: 'Why should you not include the Total row when selecting chart data?', b: 'It appears as an extra category (a huge bar or sector) and distorts the chart.' },
      { n: 3, f: 'Name five labels a chart may need', b: 'Chart title, axis titles (with units), legend (when there is more than one series), data labels, category labels.' },
      { n: 4, f: 'When is a legend needed on a chart?', b: 'When there is more than one data series, to show what each colour or line represents. It can be removed for a single series.' },
      { n: 5, f: 'Books 120, Games 90, Music 60, Toys 30. What angle is the Books sector of a pie chart?', b: 'Total = 300. Books = 120 ÷ 300 = 40%, and 0.40 × 360° = 144°.' },
    ]),

    // 17 Document production
    ...unnumbered(T17, 'organise-page-layout-t17-0417', 8, [
      { n: 1, f: 'Why set page size and orientation before typing?', b: 'Changing them later can move tables and images and spoil the layout.' },
      { n: 2, f: 'How do you put a full-width heading above a two-column article?', b: 'Insert a continuous section break after the heading, so only the article below is set in columns.' },
      { n: 3, f: 'What is a margin?', b: 'The blank space between the text and the edge of the paper, set separately for top, bottom, left and right.' },
    ]),
    ...unnumbered(T17, 'format-text-t17-0417', 9, [
      { n: 1, f: 'Name the four types of text alignment', b: 'Left, right, centred and justified (lined up with both margins).' },
      { n: 2, f: 'When should you use bullets and when numbering?', b: 'Bullets for items in no set order; numbering for steps or ranked items where order matters.' },
      { n: 3, f: 'Serif vs sans-serif fonts', b: 'Serif fonts, such as Times New Roman, have small strokes on the ends of letters. Sans-serif fonts, such as Arial, do not.' },
      { n: 4, f: 'First-line indent vs hanging indent', b: 'A first-line indent moves only the first line of a paragraph in. A hanging indent leaves the first line out and indents the following lines.' },
    ]),
    ...unnumbered(T17, 'find-and-replace-text-t17-0417', 10, [
      { n: 1, f: 'Replace vs Replace all', b: 'Replace changes one occurrence at a time. Replace all changes every occurrence at once.' },
      { n: 2, f: 'What do "match case" and "find whole words only" do?', b: 'Match case makes the search case-sensitive, so Park does not match park. Whole words only stops a search for art matching inside party or start.' },
      { n: 3, f: 'What is the danger of Replace all?', b: 'Without whole-word matching, it can damage other words, e.g. replacing "it" also changes "with" and "little". Check the result afterwards.' },
    ]),
    ...unnumbered(T17, 'navigation-t17-0417', 11, [
      { n: 1, f: 'What is a bookmark in a document?', b: 'A named place in a document that you can jump back to or link to.' },
      { n: 2, f: 'How is a table of contents created automatically?', b: 'From the headings formatted with heading styles. It lists them with page numbers and can be updated after changes.' },
      { n: 3, f: 'What can a hyperlink in a document link to?', b: 'A bookmark or section in the same document, another file, or a web page.' },
    ]),
    ...unnumbered(T17, 'pagination-t17-0417', 12, [
      { n: 1, f: 'What is pagination?', b: 'Dividing a document into pages and controlling where the pages break.' },
      { n: 2, f: 'Why use a page break instead of blank lines?', b: 'Blank lines move when text is edited, so the new page starts in the wrong place. A page break always starts the next text on a new page.' },
      { n: 3, f: 'What does "keep with next" do?', b: 'It keeps a heading on the same page as the paragraph after it, so the heading is not left alone at the bottom of a page.' },
    ]),
    ...unnumbered(T17, 'gutter-margin-t17-0417', 13, [
      { n: 1, f: 'What is a gutter margin?', b: 'Extra space added on the inside edge of the page, where it will be bound, so text is not lost in the binding. It is added to the normal margin.' },
      { n: 2, f: 'A left margin of 3 cm has a 1 cm gutter on A4 (21 cm) with a 2 cm right margin. How wide is the text?', b: 'Text starts 3 + 1 = 4 cm from the left edge. Width = 21 − 4 − 2 = 15 cm.' },
      { n: 3, f: 'Where is the gutter with mirrored margins?', b: 'On the left of right-hand pages and on the right of left-hand pages, used for booklets and double-sided printing.' },
    ]),

    // 18 Databases
    ...sub('databases-0417', 'create-a-database-structure-0417', '18.1', [
      { n: 1, f: 'Name the field data types used in 0417 databases', b: 'Text (alphanumeric), numeric (integer or real), currency, date/time and Boolean (logical, yes/no).' },
      { n: 2, f: 'Primary key vs foreign key', b: 'A primary key has a unique value in every record, so each record can be identified. A foreign key is a field in one table that matches the primary key of another, linking the tables.' },
      { n: 3, f: 'What is a relational database, and why use one?', b: 'A database with more than one linked table. It avoids repeating the same details in many records, which saves space and reduces errors.' },
      { n: 4, f: 'What is a lookup check?', b: 'A validation check that the value entered comes from a given list, such as a drop-down menu.' },
      { n: 5, f: 'What must you check when importing a CSV file into a database?', b: 'The correct delimiter, whether the first row holds field names, and that each field has the right data type (e.g. a date not imported as text).' },
    ]),
    ...sub('databases-0417', 'manipulate-data-0417', '18.2', [
      { n: 1, f: '"More than 10" vs "at least 10" as search criteria', b: 'More than 10 is > 10 and excludes 10. At least 10 is >= 10 and includes 10.' },
      { n: 2, f: 'What is a wildcard in a database search?', b: 'A symbol that matches part of a text value. In many systems * stands for any number of characters, so S* finds every entry starting with S.' },
      { n: 3, f: 'What is a calculated field, and where is it created?', b: 'A new value worked out from other fields, e.g. Price * InStock. It is created in a query and calculated when the query runs, not stored in the table.' },
      { n: 4, f: 'Which criteria find fiction books that are in stock?', b: 'Genre = "Fiction" AND InStock > 0. AND is used because both conditions, on different fields, must be true.' },
    ]),
    ...sub('databases-0417', 'present-data-0417', '18.3', [
      { n: 1, f: 'What is a database report?', b: 'A formatted printout of data, usually based on a query, with a title, only the fields required, readable headings and, if needed, grouping and totals.' },
      { n: 2, f: 'Give three common mistakes in a database report', b: 'Truncated field headings or data, extra fields not asked for, fields in the wrong order, or a missing title or total.' },
      { n: 3, f: 'Name three summary calculations a report can show', b: 'Any three of: sum (total), count, average, minimum, maximum.' },
    ]),

    // 19 Presentations
    ...unnumbered(T19, 'create-a-presentation-t19-0417', 14, [
      { n: 1, f: 'What is a slide layout?', b: 'A pattern of placeholders for a slide\'s title, text, images, charts or tables. Placeholders keep their position and style linked to the master slide.' },
      { n: 2, f: 'Transition vs animation', b: 'A transition is the effect when one slide changes to the next. An animation controls how objects on a slide appear, move or disappear.' },
      { n: 3, f: 'What do hyperlinks and action buttons allow in a presentation?', b: 'Links to another slide, a file or a web page, so the presentation can be non-linear, e.g. with a home or back button.' },
      { n: 4, f: 'Why should transitions and animations be used sparingly?', b: 'Too many different effects distract the audience from the message. Use the same transition throughout unless told otherwise.' },
    ]),
    ...unnumbered(T19, 'use-a-master-slide-t19-0417', 15, [
      { n: 1, f: 'What is a master slide?', b: 'A template that controls the appearance of every slide based on it. Anything set on the master appears automatically on all those slides.' },
      { n: 2, f: 'What is normally set on a master slide?', b: 'Fonts, sizes and colours for titles and text, bullet styles, background, a logo in a fixed position, slide numbers, date and footer text, and placeholder positions.' },
      { n: 3, f: 'Why use a master slide?', b: 'Consistency and speed: every slide matches, and one change on the master updates all slides.' },
    ]),
    ...unnumbered(T19, 'edit-a-presentation-t19-0417', 16, [
      { n: 1, f: 'What are speaker notes?', b: 'Notes attached to each slide for the presenter. They are not shown on screen to the audience but can be printed.' },
      { n: 2, f: 'How do you reorder slides?', b: 'Drag them into the new order in the slide sorter view or the outline pane.' },
      { n: 3, f: 'Why use alignment tools when editing a slide?', b: 'They line objects up exactly and space them evenly, which is more accurate than positioning by eye.' },
    ]),
    ...unnumbered(T19, 'output-the-presentation-t19-0417', 17, [
      { n: 1, f: 'Name four ways a presentation can be output', b: 'Slide show, printed slides, handouts (several slides per page), notes pages, outline (text only), or a file such as PDF.' },
      { n: 2, f: 'Handouts vs notes pages', b: 'Handouts show several slides per page (e.g. 2, 3, 4 or 6) for the audience to take away. Notes pages show each slide with the speaker notes below it.' },
      { n: 3, f: '12 slides advance every 25 seconds. How long is the show, and how many pages for 6-per-page handouts?', b: '12 × 25 = 300 seconds = 5 minutes. 12 ÷ 6 = 2 pages.' },
      { n: 4, f: 'Why save a presentation as a PDF to share it?', b: 'A PDF opens the same on any device without the presentation software, though it can no longer be edited easily.' },
    ]),

    // 20 Spreadsheets
    ...sub('spreadsheets-0417', 'create-a-data-model-0417', '20.1', [
      { n: 1, f: 'What is a spreadsheet data model?', b: 'A spreadsheet set up so that changing an input changes the outputs automatically, so "what if" questions can be tested.' },
      { n: 2, f: 'Relative vs absolute cell references', b: 'A relative reference (C4) changes when the formula is copied. An absolute reference ($C$4) stays fixed. A mixed reference (C$4 or $C4) fixes only the row or the column.' },
      { n: 3, f: 'Why does =D2/$D$7 use dollar signs?', b: 'So that when the formula is copied down, every row still divides by the same total in D7, while D2 changes to D3, D4 and so on.' },
      { n: 4, f: 'What does =IF(D7>150,D7*0.1,0) return when D7 is 168?', b: 'The condition is true, so it returns 168 × 0.1 = 16.8.' },
      { n: 5, f: 'What does VLOOKUP do?', b: 'It searches the first column of a table for a value and returns the item from a chosen column in the same row. HLOOKUP does the same across rows. Use exact match (FALSE) for codes.' },
      { n: 6, f: 'COUNT vs COUNTA vs COUNTIF', b: 'COUNT counts cells containing numbers. COUNTA counts non-empty cells. COUNTIF counts only cells that meet a condition, e.g. =COUNTIF(D2:D6,">35").' },
      { n: 7, f: 'What is a named range, and why use it?', b: 'A meaningful name given to a cell or range, such as VATRate. It makes formulas easier to read and check.' },
    ]),
    ...sub('spreadsheets-0417', 'manipulate-data-20-2-0417', '20.2', [
      { n: 1, f: 'Why select the whole data range before sorting?', b: 'If only one column is sorted, the other columns stay where they are and the rows are scrambled.' },
      { n: 2, f: 'Sort vs filter', b: 'A sort rearranges rows into ascending or descending order. A filter hides rows that do not meet the criteria without deleting them.' },
      { n: 3, f: 'What is conditional formatting?', b: 'Formatting that changes a cell\'s appearance automatically when it meets a rule, e.g. shading marks below 40 red.' },
    ]),
    ...sub('spreadsheets-0417', 'present-data-20-3-0417', '20.3', [
      { n: 1, f: 'What does a cell full of hash symbols (####) mean?', b: 'The column is too narrow to display the value. Widen the column.' },
      { n: 2, f: 'Name five number formats for spreadsheet cells', b: 'Integer, a set number of decimal places, percentage, currency, date and time.' },
      { n: 3, f: 'Why print a spreadsheet with formulas showing?', b: 'It shows the examiner, or a checker, that results come from formulas and cell references rather than typed-in values.' },
    ]),

    // 21 Website authoring
    ...sub('website-authoring', 'web-development-layers-0417', '21.1', [
      { n: 1, f: 'Name the three web development layers and the language for each', b: 'Content layer: HTML (text, images and structure). Presentation layer: CSS (colours, fonts, layout). Behaviour layer: usually JavaScript (what happens when the user interacts).' },
      { n: 2, f: 'Why separate content from presentation?', b: 'The look of a whole site can be changed by editing one stylesheet without touching the content, and the same content can be styled differently for phones and desktops.' },
      { n: 3, f: 'Which layer would validate a form or show a menu?', b: 'The behaviour layer.' },
    ]),
    ...sub('website-authoring', 'create-a-web-page-0417', '21.2', [
      { n: 1, f: 'What goes in the head section and the body section of an HTML page?', b: 'Head: information about the page, such as its title (shown on the browser tab) and links to stylesheets. Body: everything visible on the page.' },
      { n: 2, f: 'Which HTML elements make bulleted and numbered lists?', b: 'ul makes an unordered (bulleted) list and ol an ordered (numbered) list. Each item goes in an li element.' },
      { n: 3, f: 'What are the src and alt attributes of an img element?', b: 'src gives the image file\'s location. alt gives text shown if the image fails to load and read aloud by screen readers.' },
      { n: 4, f: 'Why use relative file paths such as images/logo.png?', b: 'They still work when the site\'s folder is moved to a web server. Absolute paths such as C:\\Users\\... break on another computer.' },
      { n: 5, f: 'Which elements build an HTML table?', b: 'table for the table, tr for each row, th for header cells and td for data cells.' },
    ]),
    ...sub('website-authoring', 'use-stylesheets-0417', '21.3', [
      { n: 1, f: 'What are the parts of a CSS rule?', b: 'A selector (what to style) and declarations inside curly brackets, each a property, a colon, a value and a semicolon, e.g. h1 { color: navy; }.' },
      { n: 2, f: 'External vs internal vs inline CSS', b: 'External: rules in a separate .css file linked from each page; best for a whole site. Internal: rules in a style element in the page head; that page only. Inline: a style attribute on one element.' },
      { n: 3, f: 'Class selector vs id selector', b: 'A class (.note) can be used on many elements on a page. An id (#banner) applies to one element only, because an id must be unique.' },
      { n: 4, f: 'CSS margin vs padding', b: 'Margin is the space outside an element\'s border. Padding is the space inside, between the border and the content.' },
      { n: 5, f: 'When CSS rules conflict, which wins?', b: 'The more specific rule. An inline style overrides internal and external rules for that element.' },
    ]),
  ],
};
