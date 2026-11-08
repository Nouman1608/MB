/**
 * D-444 -- flashcards for Cambridge O Level Computer Science 2210 (2026-2028).
 *
 * 2210 shares its content with Cambridge IGCSE Computer Science 0478, but this
 * deck is written for 2210 and keyed to the 2210 record in syllabus-topics.ts:
 * topics 2 and 3 itemise subtopics (ids `<subtopic number>-<n>`); topics 1 and
 * 4-10 itemise none, so their cards hang on the topic (topicOnly helper, ids
 * `<topic number>-<n>`). Ids are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 * Not tiered. Written from Marlbridge's own 2210 revision notes, study guides
 * and practice pages; pseudocode follows the Cambridge style used there.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 2210); origin 'revision-notes'.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const card = (topic: string, subtopic: string | undefined, id: string, { f, b, u, src }: Spec): Flashcard => ({
  id,
  topic,
  ...(subtopic ? { subtopic } : {}),
  front: f,
  back: b,
  ...(u ? { tier: 'upper' as const } : {}),
  origin: src ? 'revision-notes' as const : 'authored' as const,
  ...(src ? { source: src } : {}),
});

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, subtopic, `${number}-${s.n}`, s));

/** A topic with no subtopics: ids `<topic number>-<n>`. */
const topicOnly = (topic: string, number: number, specs: Spec[]): Flashcard[] =>
  specs.map((s) => card(topic, undefined, `${number}-${s.n}`, s));

const T2 = 'data-transmission-2210';
const T3 = 'hardware-2210';

const DR = 'o-level-computer-science-data-representation-revision-notes';

export const DECK_CAMBRIDGE_O_LEVEL_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'computer-science',
  syllabusCode: '2210',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Data representation
    ...topicOnly('data-representation-2210', 1, [
      { n: 1, f: 'How do you convert a denary number to binary by division?', b: 'Divide by 2 repeatedly, writing down each remainder, until you reach 0. Read the remainders from the bottom upwards.' },
      { n: 2, f: 'Why is hexadecimal used rather than binary?', b: 'It is far more compact, and each hex digit maps to exactly four binary digits, so conversion is simple and human error is less likely. Used for memory addresses, MAC addresses, colour codes and error codes.', src: DR },
      { n: 3, f: 'Convert denary 205 to hexadecimal', b: '205 = 128 + 64 + 8 + 4 + 1 = 11001101. Split into nibbles from the right: 1100 = C and 1101 = D, so 205 = CD.' },
      { n: 4, f: 'What is overflow?', b: 'The result of a calculation is too large for the number of bits allocated, so the stored value is incorrect. In 8 bits the largest unsigned value is 255.', src: DR },
      { n: 5, f: 'What does a binary shift of n places do?', b: 'A left shift of n places multiplies by 2ⁿ; a right shift of n places divides by 2ⁿ, discarding any remainder. Bits shifted out are lost and zeros are shifted in.' },
      { n: 6, f: 'What is the range of an 8-bit two\'s complement integer?', b: '-128 to +127. The most significant bit has a place value of -128; a leading 1 means the number is negative.' },
      { n: 7, f: 'Convert -45 to 8-bit two\'s complement', b: '+45 = 00101101. Invert every bit: 11010010. Add 1: 11010011. Check: -128 + 64 + 16 + 2 + 1 = -45.' },
      { n: 8, f: 'Convert the two\'s complement number 11101100 to denary', b: 'Add the place values, using -128 for the first bit: -128 + 64 + 32 + 8 + 4 = -20.' },
      { n: 9, f: 'ASCII vs Unicode', b: 'ASCII uses 7 bits (128 characters); extended ASCII uses 8 bits (256). Unicode can use up to 32 bits per character to cover a very wide range of the world\'s scripts, so text files are larger.' },
      { n: 10, f: 'Why was Unicode introduced?', b: 'ASCII could not represent non-Latin writing systems such as Arabic, Chinese or Urdu, so a larger character set was needed.' },
      { n: 11, f: 'Resolution and colour depth of a bitmap image', b: 'Resolution: the number of pixels. Colour depth: bits per pixel; n bits give 2ⁿ colours. Higher values give better quality but larger files.', src: DR },
      { n: 12, f: 'Sample rate and bit depth of a sound file', b: 'Sample rate: samples per second (Hz). Bit depth (sample resolution): bits per sample. Raising either records the wave more accurately but increases file size.', src: DR },
      { n: 13, f: 'An image is 800 × 600 pixels with 24-bit colour. What is its file size in MiB?', b: '800 × 600 × 24 = 11,520,000 bits ÷ 8 = 1,440,000 bytes ÷ 1024 = 1406.25 KiB ÷ 1024 ≈ 1.37 MiB.' },
      { n: 14, f: 'List the 2210 storage units from bit to exbibyte', b: 'Bit, nibble (4 bits), byte (8 bits), KiB, MiB, GiB, TiB, PiB, EiB. From the kibibyte (1024 bytes) up, each unit is 1024 times the one before.' },
      { n: 15, f: 'When must lossless compression be used, and what does lossy compression do?', b: 'Lossless is needed where every bit matters (text, program files, spreadsheets), as the original is fully recovered. Lossy permanently removes data, e.g. by reducing resolution, colour depth or sample rate; used for images, audio, video.' },
      { n: 16, f: 'Can run-length encoding make a file larger?', b: 'Yes. RLE stores each run as a value and a count, so on noisy or photographic data with few repeated adjacent values it can produce a file larger than the original.' },
    ]),

    // 2 Data transmission
    ...sub(T2, 'types-and-methods-of-data-transmission', '2.1', [
      { n: 1, f: 'What does the header of a data packet contain?', b: 'The destination address, the packet number and the originator\'s (sender\'s) address. The payload carries the data and the trailer marks the end of the packet.' },
      { n: 2, f: 'Why can packets from one message arrive out of order?', b: 'In packet switching, routers send each packet by the best route available at the time, so packets can take different routes. The receiver puts them back in order using the packet numbers.' },
      { n: 3, f: 'Which transmission method suits a long-distance link, and which a short high-speed cable?', b: 'Long distance: serial (one bit at a time on one wire, so no skew and cheaper cabling). Short, high-speed connection: parallel (several bits at once on several wires).' },
      { n: 4, f: 'Give an example of simplex, half-duplex and full-duplex transmission', b: 'Simplex (one way only): keyboard to computer. Half-duplex (both ways, one at a time): walkie-talkie. Full-duplex (both ways at once): telephone call.' },
      { n: 5, f: 'Why is USB widely used to connect devices?', b: 'It is a standard connector supported by most devices, it supplies power, devices are detected automatically and the right driver is loaded. Drawbacks: limited cable length and speed.' },
    ]),
    ...sub(T2, 'methods-of-error-detection', '2.2', [
      { n: 1, f: 'How does odd or even parity detect an error?', b: 'A parity bit makes the number of 1s in each byte odd (or even), as agreed. The receiver counts the 1s; if the total no longer matches the agreed parity, an error has occurred.' },
      { n: 2, f: 'What can a parity check not detect?', b: 'An even number of changed bits, such as two bits flipped in the same byte, because the count of 1s stays odd (or even).' },
      { n: 3, f: 'How does a checksum work?', b: 'A value is calculated from the data before sending and sent with it. The receiver recalculates the value from the data received; if the two values differ, an error has occurred.' },
      { n: 4, f: 'How does an echo check work?', b: 'The receiver sends a copy of the data it received back to the sender, which compares it with the original. If they differ, the data is sent again. It cannot show which way the error happened.' },
      { n: 5, f: 'What is a check digit used for?', b: 'Validating one item of entered data, such as an ISBN or bar code number. A digit is calculated from the other digits and compared with the one entered.' },
      { n: 6, f: 'Describe automatic repeat query (ARQ)', b: 'The receiver sends a positive acknowledgement for correct data or a negative one for an error. If the sender gets a negative acknowledgement, or none before the timeout, it resends the data.' },
    ]),
    ...sub(T2, 'encryption', '2.3', [
      { n: 1, f: 'Plaintext vs ciphertext', b: 'Plaintext is the original, readable data. Ciphertext is the scrambled data produced by encryption, which is meaningless without the key.' },
      { n: 2, f: 'Symmetric vs asymmetric encryption', b: 'Symmetric: the same key encrypts and decrypts, so it must be shared securely. Asymmetric: a linked public/private key pair; the public key encrypts and only the matching private key decrypts.' },
      { n: 3, f: 'Does encryption stop data being intercepted?', b: 'No. It makes intercepted data meaningless to anyone without the key, so it cannot be understood or used.' },
      { n: 4, f: 'What is the risk with symmetric encryption?', b: 'The key has to be sent to the receiver. If the key is intercepted, anyone holding it can decrypt the data.' },
    ]),

    // 3 Hardware
    ...sub(T3, 'computer-architecture-2210', '3.1', [
      { n: 1, f: 'What is the role of the CPU?', b: 'To process instructions and data by carrying out the fetch-decode-execute cycle. It contains the ALU, the control unit, registers and buses.' },
      { n: 2, f: 'Which register holds the address of the next instruction, and which holds the instruction being decoded?', b: 'The program counter (PC) holds the address of the next instruction. The current instruction register (CIR) holds the instruction being decoded and executed.' },
      { n: 3, f: 'MAR vs MDR', b: 'The memory address register holds the address of the memory location being read or written. The memory data register holds the data or instruction being transferred to or from that location.' },
      { n: 4, f: 'Which bus is one-way, and what do the three buses carry?', b: 'The address bus is one-way (CPU to memory) and carries addresses. The data bus carries data and instructions both ways. The control bus carries control signals such as read and write.' },
      { n: 5, f: 'Trace the fetch-decode-execute cycle', b: 'Fetch: PC → MAR; instruction from RAM → MDR → CIR; PC incremented. Decode: the CU interprets the instruction in the CIR. Execute: the instruction is carried out, e.g. the ALU calculates and the result goes to the ACC.' },
      { n: 6, f: 'Why does a larger cache improve CPU performance?', b: 'Cache is fast memory close to the CPU that holds frequently used data and instructions, so the CPU fetches them from RAM less often.' },
      { n: 7, f: 'Give three examples of embedded systems', b: 'Any three of: a washing machine controller, a car engine management system, a security alarm, a lighting system, a vending machine, a microwave. Each performs one dedicated function.' },
    ]),
    ...sub(T3, 'input-and-output-devices-2210', '3.2', [
      { n: 1, f: 'Name the three types of touch screen on the syllabus', b: 'Resistive, capacitive and infra-red.' },
      { n: 2, f: 'Name two types of printer and two types of projector on the syllabus', b: 'Printers: inkjet and laser (also the 3D printer). Projectors: digital light processing (DLP) and LCD.' },
      { n: 3, f: 'Which sensor would you use in a greenhouse to monitor: warmth; air wetness; soil wetness; brightness?', b: 'Temperature sensor; humidity sensor; moisture sensor; light sensor.' },
      { n: 4, f: 'What do a pH sensor, a flow sensor and a level sensor measure?', b: 'pH sensor: acidity or alkalinity. Flow sensor: the rate at which a liquid or gas moves. Level sensor: how full a container is.' },
      { n: 5, f: 'Why must a scenario answer name a specific sensor?', b: 'The mark is for naming the sensor and what it measures, e.g. "a proximity sensor to detect nearby obstacles", not just "a sensor".' },
    ]),
    ...sub(T3, 'data-storage-2210', '3.3', [
      { n: 1, f: 'Why does a computer need both RAM and ROM?', b: 'RAM is volatile, so it cannot keep the start-up instructions when the power is off; it holds programs and data in use. ROM is non-volatile and permanently stores the bootstrap instructions.' },
      { n: 2, f: 'Name the three types of secondary storage and an example of each', b: 'Magnetic: hard disk drive. Optical: CD, DVD or Blu-ray. Solid-state (flash): SSD, SD card or USB flash drive.' },
      { n: 3, f: 'How is data stored on an optical disc?', b: 'A laser burns pits into the disc surface; the unchanged areas are lands. When reading, a laser is reflected differently from pits and lands, which are read as binary.' },
      { n: 4, f: 'How does solid-state storage hold data?', b: 'It uses NAND or NOR flash memory with transistors that have a control gate and a floating gate. Charge trapped in the floating gate represents a 1 or a 0, with no moving parts.' },
      { n: 5, f: 'Describe how virtual memory is used', b: 'When RAM is full, part of secondary storage is used as an extension of RAM. Pages of data not currently needed are moved out of RAM, and moved back in when needed.' },
      { n: 6, f: 'What is cloud storage?', b: 'Data stored on remote servers, owned by a third party, and accessed over the internet. It can be reached from anywhere, but depends on a connection and on the provider\'s physical servers.' },
    ]),
    ...sub(T3, 'network-hardware-2210', '3.4', [
      { n: 1, f: 'What is the purpose of a NIC?', b: 'A network interface card lets a device connect to a network. Each NIC has a unique MAC address.' },
      { n: 2, f: 'What two parts make up a MAC address?', b: 'A manufacturer code and a serial code. The address is fixed at manufacture and written in hexadecimal.' },
      { n: 3, f: 'Static vs dynamic IP address', b: 'A static IP address is fixed and does not change. A dynamic IP address is assigned by the network each time the device connects, so it can change.' },
      { n: 4, f: 'How do IPv4 and IPv6 addresses differ?', b: 'IPv4 uses 32 bits, written as four denary numbers from 0 to 255 separated by full stops. IPv6 uses 128 bits, written as eight groups of hexadecimal digits separated by colons.' },
      { n: 5, f: 'Give three roles of a router', b: 'It directs data packets to their destination, it can assign IP addresses to devices on the network, and it connects a local network to the internet.' },
    ]),

    // 4 Software
    ...topicOnly('software-2210', 4, [
      { n: 1, f: 'Is antivirus software application or system software?', b: 'System software. It is a utility program, which maintains the computer, rather than an application that does the user\'s task.' },
      { n: 2, f: 'State three functions of an operating system', b: 'Any three of: managing files; managing memory; handling interrupts; managing peripherals and drivers; providing a user interface; managing multitasking; providing a platform for applications; providing security; managing user accounts.' },
      { n: 3, f: 'How does the processor deal with an interrupt?', b: 'It checks for interrupts at the end of each fetch-decode-execute cycle. If an interrupt has higher priority than the current task, it saves the task\'s state, runs the interrupt service routine, then restores and resumes the task.' },
      { n: 4, f: 'Name five utility programs', b: 'Any five of: antivirus, backup software, disk formatter, disk defragmenter, file compression, disk content analysis or repair, firewall.' },
      { n: 5, f: 'Give three reasons for writing in a high-level language', b: 'It is machine independent (portable); it is easier to read and debug; the programmer is less likely to make errors; one statement does the work of many machine-code instructions.' },
      { n: 6, f: 'Why is assembly language used for device drivers and embedded systems?', b: 'It gives direct control of the hardware and memory and can produce code that is fast and uses little memory.' },
      { n: 7, f: 'How do a compiler and an interpreter report errors?', b: 'A compiler translates the whole program first and gives a report listing all the errors. An interpreter stops at the first error it meets and continues only once it is corrected.' },
      { n: 8, f: 'Which translator would you choose to distribute a finished game, and why?', b: 'A compiler: it produces an executable file that runs without the translator, runs faster, and does not give customers the source code.' },
      { n: 9, f: 'What do auto-completion, auto-correction and prettyprint do in an IDE?', b: 'Auto-completion suggests how to finish a keyword or identifier being typed. Auto-correction fixes misspelt keywords. Prettyprint shows keywords and identifiers in different colours and layout so code is easier to read.' },
    ]),

    // 5 The internet and its uses
    ...topicOnly('the-internet-and-its-uses-2210', 5, [
      { n: 1, f: 'Is the World Wide Web the same as the internet?', b: 'No. The internet is the global infrastructure of connected networks. The World Wide Web is a collection of web pages and resources accessed using the internet.' },
      { n: 2, f: 'Name the three parts of https://www.example.org/tickets/prices.html', b: 'https is the protocol; www.example.org is the domain name; /tickets/prices.html is the path and file name of the web page.' },
      { n: 3, f: 'Give three functions of a web browser', b: 'Any three of: requests web pages and renders the HTML; stores bookmarks; records history; opens multiple tabs; stores cookies; provides navigation tools such as back and forward buttons and an address bar.' },
      { n: 4, f: 'Describe how the DNS is used to find a website', b: 'The browser sends the domain name to a DNS server, which searches its records for the IP address, passing the request to another DNS server if needed. The IP address is returned, and the browser requests the page from that web server.' },
      { n: 5, f: 'How does a browser set up an HTTPS connection with a web server?', b: 'The browser asks the server to identify itself; the server sends its digital (SSL) certificate; the browser checks it is valid. If so, an encrypted connection is set up; if not, the user is warned.' },
      { n: 6, f: 'Give one use of a session cookie and one of a persistent cookie', b: 'Session cookie: keeping track of a shopping basket during one visit. Persistent cookie: remembering login details or preferences between visits.' },
      { n: 7, f: 'Why is a blockchain hard to tamper with?', b: 'It is a decentralised ledger: every computer in the network holds a copy. Each block holds its own hash and the previous block\'s hash, so changing a block breaks the chain and does not match the other copies.' },
      { n: 8, f: 'How does a user reach a fake website in phishing and in pharming?', b: 'Phishing: the user clicks a link in a legitimate-looking email or message. Pharming: malicious code on the computer or a DNS server redirects them, even when they type the correct URL.' },
      { n: 9, f: 'What is social engineering?', b: 'Manipulating people into giving away confidential information or access, e.g. by pretending to be a technician. Staff training and clear procedures help prevent it.' },
      { n: 10, f: 'Spyware vs ransomware', b: 'Spyware secretly records what the user does, such as key presses, and sends it to a third party. Ransomware encrypts or locks the user\'s data and demands payment to release it.' },
    ]),

    // 6 Automated and emerging technologies
    ...topicOnly('automated-and-emerging-technologies-2210', 6, [
      { n: 1, f: 'Describe how a sensor-based automated heating system works', b: 'A temperature sensor continually takes readings; an ADC converts them to digital; the microprocessor compares them with stored values; if too cold it signals an actuator to switch the heater on. This repeats continuously.' },
      { n: 2, f: 'Sensor, microprocessor or actuator: which one decides what happens?', b: 'The microprocessor. A sensor only measures, and an actuator only carries out the physical action it is told to.' },
      { n: 3, f: 'Give three areas where automated systems are used', b: 'Any three of: industry (production lines), transport (automatic braking, traffic lights), agriculture (greenhouses, irrigation), weather monitoring, gaming, lighting, science.' },
      { n: 4, f: 'Name the electrical components of a robot', b: 'Sensors, microprocessors and actuators (such as motors). Arms, wheels and legs belong to its mechanical structure, not its electrical components.' },
      { n: 5, f: 'Give two characteristics that make a machine a robot', b: 'It has a mechanical structure or framework, and it is programmable. It also has electrical components such as sensors and actuators.' },
      { n: 6, f: 'Give an advantage and a disadvantage of a remotely controlled robot, with reasons', b: 'Advantage: the operator need not be near the hazard, so they are kept safe. Disadvantage: the network connection could be lost or delayed, so the robot cannot be controlled and work stops.' },
      { n: 7, f: 'What do the knowledge base and the rule base of an expert system hold?', b: 'The knowledge base is a database of facts about the subject, gathered from human experts. The rule base is a set of IF ... THEN rules used to draw conclusions from those facts.' },
      { n: 8, f: 'What does the inference engine do in an expert system?', b: 'It compares the user\'s answers with the knowledge base, applies the rules in the rule base to reach a conclusion, and decides which question to ask next.' },
      { n: 9, f: 'How does machine learning differ from a system given fixed rules?', b: 'A machine-learning system improves its performance by finding patterns in the data it is trained on, rather than following only rules written by a programmer. Poor or biased data gives poor decisions.' },
    ]),

    // 7 Algorithm design and problem-solving
    ...topicOnly('algorithm-design-and-problem-solving-2210', 7, [
      { n: 1, f: 'What are the stages of the program development life cycle?', b: 'Analysis, design, coding and testing.' },
      { n: 2, f: 'What is decomposition? Give an example', b: 'Breaking a problem into smaller sub-problems that can be solved and tested separately, e.g. a library system split into searching, borrowing, returning and fines.' },
      { n: 3, f: 'What is abstraction? Give an example', b: 'Removing unnecessary detail to focus on what matters, e.g. a rail map that shows the order of stations but not the real distances.' },
      { n: 4, f: 'Which flowchart symbol is used for input/output, and which for a decision?', b: 'Input or output: a parallelogram. Decision: a diamond with labelled yes/no exits. A rectangle is a process; a rounded terminator marks start and end.' },
      { n: 5, f: 'How do you find the maximum value in a list?', b: 'Set Highest to the first item (or a very low value). Compare each item in turn; if it is greater than Highest, replace Highest with it. Output Highest after the loop.' },
      { n: 6, f: 'What happens in one pass of a bubble sort?', b: 'Each pair of adjacent items is compared and swapped if in the wrong order, from the start of the list to the end of the unsorted part. The largest unsorted item ends in its correct place.' },
      { n: 7, f: 'Name six validation checks', b: 'Range check, length check, type check, presence check, format check and check digit.' },
      { n: 8, f: 'Name two methods of verification', b: 'Double entry (the data is entered twice and the two compared) and a visual check (the data is compared by eye with the source).' },
      { n: 9, f: 'What is boundary (extreme) test data?', b: 'Values at the edges of the valid range, which should be accepted, plus the values just outside it, which should be rejected. For 11 to 16: 11 and 16 accepted, 10 and 17 rejected.' },
      { n: 10, f: 'Why must a running total be set to 0 before the loop?', b: 'Otherwise it starts with an unknown value, so every total calculated from it is wrong.' },
    ]),

    // 8 Programming
    ...topicOnly('programming-2210', 8, [
      { n: 1, f: 'Which data type should store a postcode, a price and a yes/no answer?', b: 'Postcode: STRING (letters and digits, not used in calculations). Price: REAL. Yes/no answer: BOOLEAN.' },
      { n: 2, f: 'How do you declare a variable and assign a value in Cambridge pseudocode?', b: 'DECLARE Total : INTEGER declares it; Total ← 0 assigns a value using the arrow. The = sign is used only for comparison.' },
      { n: 3, f: 'What are DIV(47, 6) and MOD(47, 6)?', b: 'DIV(47, 6) = 7, the whole-number part of the division. MOD(47, 6) = 5, the remainder, because 47 = 6 × 7 + 5.' },
      { n: 4, f: 'How do you output an average rounded to 2 decimal places in pseudocode?', b: 'Put the calculation inside ROUND with 2 as the second parameter, e.g. OUTPUT ROUND(Total / Count, 2).' },
      { n: 5, f: 'Where does a string start in Cambridge pseudocode, and what is SUBSTRING("KX4829", 3, 2)?', b: 'The first character is at position 1. SUBSTRING("KX4829", 3, 2) starts at character 3 and takes 2 characters, giving "48".' },
      { n: 6, f: 'How are a function and a procedure called differently?', b: 'A function returns a value, so it is used in an expression, e.g. OUTPUT Perimeter(4.5, 3.0). A procedure does not return a value and is run with CALL.' },
      { n: 7, f: 'Which loop always runs at least once?', b: 'The post-condition loop, REPEAT ... UNTIL, because the condition is tested after each iteration. A WHILE loop tests first and may not run at all.' },
      { n: 8, f: 'What is a CASE OF statement used for?', b: 'Selection between several values of one variable, each with its own action, ending with an optional OTHERWISE and ENDCASE. It is neater than many nested IF statements.' },
      { n: 9, f: 'What is a one-dimensional array?', b: 'A data structure holding several items of the same data type under one identifier, each reached by an index, e.g. DECLARE Scores : ARRAY[1:25] OF INTEGER.' },
      { n: 10, f: 'Why must a program close a file after using it?', b: 'To make sure all data is written to the file and to free it for other use.' },
      { n: 11, f: 'What is a library routine? Give two examples', b: 'A ready-written, tested routine supplied with the language, so you do not write it yourself. Examples: ROUND, RANDOM, MOD, DIV.' },
    ]),

    // 9 Databases
    ...topicOnly('databases-2210', 9, [
      { n: 1, f: 'What is a single-table (flat-file) database?', b: 'A database in which all the data is held in one table of records and fields.' },
      { n: 2, f: 'Fields run down or across a table, and what about records?', b: 'Fields are the columns, each holding one kind of data. Records are the rows, each holding all the data about one item.' },
      { n: 3, f: 'How do you rule out a field as the primary key?', b: 'Look for repeated values in the data. A field such as a surname, where two records share a value, cannot identify one record on its own.' },
      { n: 4, f: 'Which data types would you choose for WeightKg, Vaccinated, Species and Visits?', b: 'WeightKg: real. Vaccinated: Boolean. Species: text. Visits: integer.' },
      { n: 5, f: 'Write SQL to list PetName and OwnerSurname of every dog in table Pet', b: 'SELECT PetName, OwnerSurname\nFROM Pet\nWHERE Species = \'Dog\';' },
      { n: 6, f: 'How do you list results with the largest value first in SQL?', b: 'Add ORDER BY the field followed by DESC. ORDER BY sorts in ascending order unless DESC is added.' },
      { n: 7, f: 'What do SUM and COUNT return in an SQL query?', b: 'SUM returns the total of the values in a numeric field for the selected records. COUNT returns the number of records that meet the WHERE condition.' },
      { n: 8, f: 'When are quotation marks needed in an SQL condition?', b: 'Around a text value, e.g. Species = \'Dog\'. Numbers are written without quotation marks, e.g. WeightKg > 20.' },
    ]),

    // 10 Boolean logic
    ...topicOnly('boolean-logic-2210', 10, [
      { n: 1, f: 'Name the six logic gates on the 2210 syllabus', b: 'NOT, AND, OR, NAND, NOR and XOR.' },
      { n: 2, f: 'Truth table for AND and OR (A, B → AND, OR)', b: '0, 0 → 0, 0\n0, 1 → 0, 1\n1, 0 → 0, 1\n1, 1 → 1, 1' },
      { n: 3, f: 'Truth table for NOR (A, B → X)', b: '0, 0 → 1\n0, 1 → 0\n1, 0 → 0\n1, 1 → 0' },
      { n: 4, f: 'What does XOR mean?', b: 'Exclusive OR: the output is 1 when one input or the other is 1, but not both.' },
      { n: 5, f: 'How is a NAND gate related to an AND gate?', b: 'NAND is NOT AND: its output is the AND output inverted, so it is 0 only when both inputs are 1. The small circle on its symbol shows the inversion.' },
      { n: 6, f: 'How many rows does a truth table for three inputs need?', b: '8 (2³), listed in binary order from 000 to 111.' },
      { n: 7, f: 'Write XOR using only AND, OR and NOT', b: 'X = (A AND NOT B) OR (NOT A AND B).' },
      { n: 8, f: 'Write a logic expression: alarm S sounds when door D is open and keypad K is not unlocked, or panic button P is pressed', b: 'S = (D AND NOT K) OR P.' },
      { n: 9, f: 'What is the maximum number of inputs in a 2210 logic circuit?', b: 'Three inputs and one output.' },
    ]),
  ],
};
