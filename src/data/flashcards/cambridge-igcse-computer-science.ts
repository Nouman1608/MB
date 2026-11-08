/**
 * D-444 -- flashcards for Cambridge IGCSE Computer Science 0478 (2026-2028).
 *
 * Topics 1-3 itemise subtopics in syllabus-topics.ts, so their cards use
 * `<subtopic number>-<n>`. Topics 4-10 itemise none, so their cards hang on
 * the topic (topicOnly helper) and use `<topic number>-<n>`. Ids are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 * Not tiered. Written from Marlbridge's own 0478 revision notes and study
 * guides; pseudocode keywords follow the Cambridge pseudocode style used on
 * those pages (assignment ←, DECLARE, FOR ... NEXT, REPEAT ... UNTIL).
 * The 0478 revision notes map to topics only, so no card names a `src`.
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

const T1 = 'data-representation-0478';
const T2 = 'data-transmission';
const T3 = 'hardware-0478';

export const DECK_CAMBRIDGE_IGCSE_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'computer-science',
  syllabusCode: '0478',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Data representation
    ...sub(T1, 'number-systems-0478', '1.1', [
      { n: 1, f: 'Why do computers store data in binary?', b: 'A computer is built from switches (transistors) that have two states, on and off, which are represented as 1 and 0. All data and instructions are therefore stored and processed as binary.' },
      { n: 2, f: 'How do you convert binary to hexadecimal?', b: 'Split the binary number into nibbles (groups of 4 bits) from the right, then convert each nibble to one hex digit (0-9, then A=10 to F=15). Example: 11011001 → 1101 1001 → D9.' },
      { n: 3, f: 'Why is hexadecimal used in computer science?', b: 'It is a shorter, more readable way for humans to write binary, with fewer errors. Uses include MAC addresses, IPv6 addresses, colour codes, memory dumps and error codes. The computer itself still stores binary.' },
      { n: 4, f: 'What is overflow in binary addition?', b: 'The result of a calculation needs more bits than the register can hold, so the extra (most significant) bit is lost and the stored answer is wrong. In 8 bits, any result over 255 overflows.' },
      { n: 5, f: 'What does a logical shift do to an unsigned binary number?', b: 'A shift left of one place multiplies the number by 2; a shift right of one place divides it by 2. Bits shifted out of the register are lost, which can make the result inaccurate.' },
      { n: 6, f: 'How do you write a negative number in 8-bit two\'s complement?', b: 'Write the positive number in binary, flip every bit, then add 1. Example: 19 = 00010011 → 11101100 → 11101101, which is -19. The leftmost bit has a place value of -128.' },
      { n: 7, f: 'Convert denary 174 to binary and hexadecimal', b: '174 = 128 + 32 + 8 + 4 + 2 = 10101110. Nibbles 1010 and 1110 are A and E, so the hex value is AE.' },
    ]),
    ...sub(T1, 'text-sound-and-images-0478', '1.2', [
      { n: 1, f: 'What is a character set?', b: 'A defined list of characters that a computer recognises, each with a unique binary code. ASCII and Unicode are examples.' },
      { n: 2, f: 'ASCII vs extended ASCII vs Unicode: bits and number of characters', b: 'ASCII: 7 bits, 128 characters. Extended ASCII: 8 bits, 256 characters. Unicode: 16 bits or more per character, covering a very wide range of the world\'s writing systems.' },
      { n: 3, f: 'Why is Unicode used instead of ASCII for a multilingual website?', b: 'ASCII cannot represent non-Latin scripts. Unicode covers a very wide range of languages and symbols, though it can need more storage per character.' },
      { n: 4, f: 'What are sample rate and sample resolution in sound?', b: 'Sample rate: the number of samples of the sound wave taken per second (Hz). Sample resolution: the number of bits used to store each sample. Raising either improves accuracy and increases file size.' },
      { n: 5, f: 'What are image resolution and colour depth?', b: 'Resolution: the number of pixels in the image (width × height). Colour depth: the number of bits used per pixel; n bits give 2ⁿ possible colours. Raising either improves quality and increases file size.' },
      { n: 6, f: 'How many colours can be shown with a colour depth of 8 bits?', b: '2⁸ = 256 colours.' },
    ]),
    ...sub(T1, 'data-storage-and-compression-0478', '1.3', [
      { n: 1, f: 'What are a nibble and a byte?', b: 'A nibble is 4 bits. A byte is 8 bits (two nibbles).' },
      { n: 2, f: 'List the storage units from KiB upwards and the factor between them', b: 'Kibibyte (KiB), mebibyte (MiB), gibibyte (GiB), tebibyte (TiB), pebibyte (PiB), exbibyte (EiB). Each is 1024 times the one before; 1 KiB = 1024 bytes.' },
      { n: 3, f: 'How do you calculate the file size of an image and of a sound file?', b: 'Image (bits) = width × height × colour depth.\nSound (bits) = sample rate × sample resolution × length in seconds.\nThen ÷ 8 for bytes, ÷ 1024 for KiB, ÷ 1024 again for MiB.' },
      { n: 4, f: 'Lossless vs lossy compression', b: 'Lossless: removes redundancy so the original file can be restored exactly (e.g. RLE); used for text and program files. Lossy: permanently removes detail people are unlikely to notice, giving much smaller files; used for photos, music and video.' },
      { n: 5, f: 'How does run length encoding (RLE) work?', b: 'It replaces a run of identical values with one value-and-count pair, e.g. WWWWBBB → 4W 3B. It is lossless and works best on images with large blocks of one colour, not on photographs.' },
      { n: 6, f: 'Why is compression used?', b: 'Smaller files use less storage space, upload and download faster, and use less bandwidth when sent over a network.' },
      { n: 7, f: 'An image is 1024 × 768 pixels with 24-bit colour. What is its size in MiB?', b: '1024 × 768 × 24 = 18,874,368 bits ÷ 8 = 2,359,296 bytes ÷ 1024 = 2304 KiB ÷ 1024 = 2.25 MiB.' },
    ]),

    // 2 Data transmission
    ...sub(T2, 'types-and-methods-of-data-transmission-0478', '2.1', [
      { n: 1, f: 'What is a data packet made up of?', b: 'A header (destination address, packet number and originator\'s address), a payload (the actual data) and a trailer (marks the end of the packet and can hold an error check).' },
      { n: 2, f: 'Describe packet switching', b: 'The message is split into packets. Routers choose the route for each packet, so packets can travel by different routes and arrive out of order. The receiving device uses the packet numbers to reorder them.' },
      { n: 3, f: 'Serial vs parallel transmission', b: 'Serial: one bit at a time down a single wire; reliable over long distances and cheaper cabling. Parallel: several bits at once down several wires; faster over short distances, but bits can arrive out of sync (skew) over long ones.' },
      { n: 4, f: 'Simplex, half-duplex and full-duplex', b: 'Simplex: one direction only (e.g. computer to printer). Half-duplex: both directions, but only one at a time (e.g. walkie-talkie). Full-duplex: both directions at the same time (e.g. phone call).' },
      { n: 5, f: 'Give one benefit and one drawback of USB', b: 'Benefit: a standard connector supported by most devices, which also supplies power and is detected automatically. Drawback: a limited maximum cable length and transmission speeds lower than some dedicated interfaces.' },
    ]),
    ...sub(T2, 'methods-of-error-detection-0478', '2.2', [
      { n: 1, f: 'Why is error detection needed when data is transmitted?', b: 'Data can be corrupted, lost or gained in transit by interference, congestion or equipment faults, so the receiver must be able to tell whether the data arrived exactly as sent.' },
      { n: 2, f: 'How does a parity check work?', b: 'Sender and receiver agree odd or even parity. A parity bit is set so the number of 1s in each byte is odd (or even). The receiver counts the 1s; a wrong total shows an error. It cannot detect two bits changing.' },
      { n: 3, f: 'What does a parity block (parity byte) add to a parity check?', b: 'A parity bit is calculated for each row and each column of a block of bytes. The row and column that fail cross at the incorrect bit, so the error can be located and corrected.' },
      { n: 4, f: 'Checksum vs echo check', b: 'Checksum: a value calculated from the data is sent with it and recalculated on arrival; different values show an error. Echo check: the receiver sends the data back to the sender to compare with the original.' },
      { n: 5, f: 'What is a check digit, and how does it differ from parity and checksums?', b: 'An extra digit calculated from the other digits of a number such as an ISBN or barcode. It checks that one item of data has been entered correctly, not that a whole transmission arrived intact.' },
      { n: 6, f: 'What is an automatic repeat query (ARQ)?', b: 'The receiver sends a positive acknowledgement if the data is correct, or a negative one if not. If the sender gets no acknowledgement before a timeout, or a negative one, it resends the data.' },
    ]),
    ...sub(T2, 'encryption-0478', '2.3', [
      { n: 1, f: 'What is the purpose of encryption?', b: 'To scramble data (plaintext into ciphertext) so that if it is intercepted it cannot be understood without the key. It does not stop the data being intercepted.' },
      { n: 2, f: 'What is symmetric encryption?', b: 'One shared key is used both to encrypt and to decrypt the data. The key must be sent to the receiver, and if it is intercepted the data can be read.' },
      { n: 3, f: 'What is asymmetric encryption?', b: 'A mathematically linked public key and private key are used. Data encrypted with the receiver\'s public key can only be decrypted with the matching private key, which is never shared.' },
      { n: 4, f: 'Why is asymmetric encryption more secure than symmetric for sending data?', b: 'The private key never has to be transmitted, so there is no shared key that could be intercepted. Anyone can have the public key, but it cannot decrypt the data.' },
    ]),

    // 3 Hardware
    ...sub(T3, 'computer-architecture-0478', '3.1', [
      { n: 1, f: 'What do the ALU and the CU do?', b: 'ALU (arithmetic logic unit): carries out arithmetic and logic operations. CU (control unit): sends control signals that manage the fetch-decode-execute cycle and the flow of data in the CPU.' },
      { n: 2, f: 'What do the PC, MAR, MDR, CIR and ACC hold?', b: 'PC: address of the next instruction. MAR: address being accessed in memory. MDR: data or instruction being moved to or from memory. CIR: instruction being decoded and executed. ACC: result of ALU operations.' },
      { n: 3, f: 'What do the address bus, data bus and control bus carry?', b: 'Address bus: memory addresses (where), one way from the CPU. Data bus: data and instructions (what), both ways. Control bus: control signals such as read, write and clock, both ways.' },
      { n: 4, f: 'Describe the fetch stage of the fetch-decode-execute cycle', b: 'The address in the PC is copied to the MAR. The instruction at that address is copied from RAM to the MDR, then to the CIR. The PC is incremented to point to the next instruction.' },
      { n: 5, f: 'How do cores, cache and clock speed affect CPU performance?', b: 'More cores: more instructions processed at once. Larger cache: more frequently used data held close to the CPU, so fewer slow trips to RAM. Faster clock: more cycles, so more instructions, per second.' },
      { n: 6, f: 'What is an instruction set?', b: 'The list of all the commands, in machine code, that a particular CPU can process.' },
      { n: 7, f: 'What is an embedded system?', b: 'A computer system built into a larger device to perform one dedicated function, e.g. in a washing machine, car, security system or vending machine. A PC, by contrast, is general-purpose.' },
    ]),
    ...sub(T3, 'input-and-output-devices-0478', '3.2', [
      { n: 1, f: 'Name six input devices on the 0478 syllabus', b: 'Any six of: barcode scanner, digital camera, keyboard, microphone, optical mouse, QR code scanner, touch screen (resistive, capacitive or infra-red), 2D scanner, 3D scanner.' },
      { n: 2, f: 'Name six output devices on the 0478 syllabus', b: 'Any six of: actuator, DLP projector, LCD projector, inkjet printer, laser printer, LED screen, LCD screen, speaker, 3D printer.' },
      { n: 3, f: 'What is a sensor?', b: 'An input device that measures a physical property of its surroundings (such as temperature, light or pressure) and sends the reading to a computer, usually as an analogue signal that is converted to digital.' },
      { n: 4, f: 'Which sensor would you use to: detect an obstacle near a car; measure soil wetness; detect a gas leak?', b: 'Obstacle: proximity sensor (or acoustic sensor). Soil wetness: moisture sensor. Gas leak: gas sensor.' },
      { n: 5, f: 'What is an actuator?', b: 'An output device that turns a signal from a computer into physical movement or action, e.g. a motor, pump, valve or heater.' },
    ]),
    ...sub(T3, 'data-storage-0478', '3.3', [
      { n: 1, f: 'Primary vs secondary storage', b: 'Primary storage (RAM and ROM) is directly accessed by the CPU. Secondary storage (HDD, SSD, optical discs) is not directly accessed by the CPU, is non-volatile and is used to store data and programs long-term.' },
      { n: 2, f: 'RAM vs ROM', b: 'RAM: volatile, read and write, holds the programs and data currently in use. ROM: non-volatile, read-only, holds the start-up (bootstrap) instructions.' },
      { n: 3, f: 'How does magnetic storage (an HDD) store data?', b: 'Data is stored on spinning platters divided into tracks and sectors. A read/write head uses an electromagnet to magnetise areas of the surface, representing 1s and 0s.' },
      { n: 4, f: 'How do optical and solid-state storage store data?', b: 'Optical (CD, DVD, Blu-ray): a laser burns and reads pits and lands on the disc surface. Solid-state (SSD, SD card, USB drive): NAND or NOR flash memory, using transistors with control gates and floating gates to trap charge.' },
      { n: 5, f: 'What is virtual memory and why is it needed?', b: 'Part of secondary storage used as if it were RAM when RAM is full. Pages of data not currently needed are moved from RAM to virtual memory and back when needed, so more programs can run than RAM alone allows.' },
      { n: 6, f: 'Give one advantage and one disadvantage of cloud storage compared with local storage', b: 'Advantage: data can be accessed from anywhere with an internet connection. Disadvantage: it relies on a network connection and on physical servers run by a third party.' },
    ]),
    ...sub(T3, 'network-hardware-0478', '3.4', [
      { n: 1, f: 'What is a network interface card (NIC)?', b: 'The hardware a device needs to connect to a network. It is given a MAC address at manufacture.' },
      { n: 2, f: 'What is a MAC address?', b: 'A unique address fixed to a device\'s NIC at manufacture, written in hexadecimal. It is made up of a manufacturer code and a serial code.' },
      { n: 3, f: 'What is an IP address, and how does a static IP address differ from a dynamic one?', b: 'An address allocated by the network that identifies a device\'s location on it. A static IP address stays the same; a dynamic one is assigned each time the device connects and can change.' },
      { n: 4, f: 'IPv4 vs IPv6', b: 'IPv4: 32 bits, written as four denary numbers 0-255 separated by dots. IPv6: 128 bits, written as eight groups of four hexadecimal digits separated by colons, allowing far more addresses.' },
      { n: 5, f: 'What does a router do?', b: 'It sends data packets to a specific destination on a network, can assign IP addresses to devices, and connects a local network to the internet.' },
      { n: 6, f: 'MAC address vs IP address', b: 'A MAC address is fixed at manufacture and identifies the network hardware itself. An IP address is allocated by the network, can change, and identifies where the device is on the network.' },
    ]),

    // 4 Software
    ...topicOnly('software', 4, [
      { n: 1, f: 'System software vs application software', b: 'System software manages the computer and provides a platform for other software (operating system, utilities, device drivers, translators). Application software lets the user do a useful task (word processor, spreadsheet, web browser).' },
      { n: 2, f: 'Give five functions of an operating system', b: 'Any five of: managing files; handling interrupts; providing a user interface; managing peripherals and drivers; managing memory; managing multitasking; providing a platform for applications; managing security; managing user accounts.' },
      { n: 3, f: 'What is an interrupt?', b: 'A signal to the processor that something needs attention at once, e.g. a key press, a printer out of paper, a division-by-zero error or a timer. It can come from hardware or software.' },
      { n: 4, f: 'What happens when the processor receives an interrupt?', b: 'At the end of the current fetch-decode-execute cycle it checks for interrupts. If the interrupt has high enough priority, it saves the current state, runs the interrupt service routine, then restores the state and carries on.' },
      { n: 5, f: 'What is a device driver?', b: 'A small program that translates operating system commands into signals that a particular peripheral, such as a printer, understands.' },
      { n: 7, f: 'High-level vs low-level languages', b: 'High-level (e.g. Python): close to human language, easier to write and debug, not tied to one processor. Low-level (machine code, assembly): close to the processor, gives direct control of hardware and memory, but is processor-specific and harder to write.' },
      { n: 8, f: 'Compiler vs interpreter', b: 'Compiler: translates the whole program before it runs, creating an executable; reports all errors after translation; runs fast without the translator. Interpreter: translates and runs one statement at a time; stops at the first error; needed every run.' },
      { n: 9, f: 'What does an assembler do?', b: 'It translates assembly language (mnemonics such as LDA and ADD) into machine code.' },
      { n: 10, f: 'Name four features of an IDE', b: 'Any four of: code editor (with syntax highlighting, auto-completion, auto-correction and pretty printing); error diagnostics; run-time environment; translator; debugging tools such as breakpoints, stepping and variable watching.' },
      { n: 11, f: 'How do hardware, firmware and the operating system work together to run an application?', b: 'The bootloader (firmware) is run on the hardware at start-up; it loads the operating system, which runs on the firmware; applications are then run on the operating system.' },
      { n: 12, f: 'Give the syllabus examples of hardware and software interrupts', b: 'Hardware: pressing a key on the keyboard, moving the mouse. Software: division by zero, two processes trying to access the same memory location.' },
    ]),

    // 5 The internet and its uses
    ...topicOnly('the-internet-and-its-uses', 5, [
      { n: 1, f: 'What is the difference between the internet and the World Wide Web?', b: 'The internet is the global network of interconnected networks (the infrastructure). The World Wide Web is a collection of web pages and resources stored on web servers and accessed using the internet.' },
      { n: 2, f: 'What are the parts of a URL?', b: 'The protocol (e.g. https), the domain name (e.g. www.example.com) and usually a path and file name (e.g. /shop/boots.html).' },
      { n: 3, f: 'HTTP vs HTTPS', b: 'HTTP is the protocol used to request and send web pages. HTTPS is the secure version: it encrypts the data using SSL/TLS, so intercepted data cannot be read.' },
      { n: 4, f: 'How does the DNS find a web page?', b: 'The browser sends the domain name to a DNS server, which looks up the matching IP address (asking other DNS servers if needed) and returns it. The browser then requests the page from the web server at that IP address.' },
      { n: 5, f: 'Session cookie vs persistent cookie', b: 'A session cookie is held in memory and deleted when the browser closes, e.g. to keep a shopping basket. A persistent cookie stays on the device until it expires or is deleted, e.g. to remember logins or preferences.' },
      { n: 6, f: 'What is a blockchain?', b: 'A digital ledger of transactions held as a chain of blocks, shared across many computers. Each block holds transactions, a timestamp, its own hash and the hash of the previous block, so changing a past block breaks the chain and is detected.' },
      { n: 7, f: 'What is a DDoS attack, and how can it be prevented?', b: 'Distributed denial of service: many computers flood a server with requests so genuine users cannot get through. Defences include a firewall, traffic filtering and proxy servers.' },
      { n: 8, f: 'Phishing vs pharming', b: 'Phishing: fake emails or messages pretending to be from a trusted source trick the user into giving personal data. Pharming: malicious code redirects the user to a fake website even when the correct URL is typed.' },
      { n: 9, f: 'What is a brute-force attack, and how is it prevented?', b: 'Trying many passwords or keys in turn until one works. Prevent it with long, complex passwords, a limit on login attempts and two-factor authentication.' },
      { n: 10, f: 'Name five types of malware', b: 'Any five of: virus, worm, trojan horse, spyware, adware, ransomware.' },
    ]),

    // 6 Automated and emerging technologies
    ...topicOnly('automated-and-emerging-technologies', 6, [
      { n: 1, f: 'What are the three main parts of an automated system?', b: 'Sensors measure a physical property. A microprocessor reads the data, compares it with stored values and decides what to do. Actuators carry out the physical action, e.g. a motor, pump or heater.' },
      { n: 2, f: 'Why does an automated system need an ADC?', b: 'Sensors usually produce analogue signals that vary continuously, but the microprocessor can only process digital data, so an analogue-to-digital converter is needed between them.' },
      { n: 3, f: 'Describe the feedback loop in an automated system', b: 'The sensor takes a reading, which is converted to digital. The processor compares it with the preset value and, if action is needed, signals an actuator. The next reading reflects the effect, and the loop repeats continuously.' },
      { n: 4, f: 'Give two advantages and two disadvantages of automated systems', b: 'Advantages: work continuously; consistent quality; faster response; remove people from danger. Disadvantages: high set-up and maintenance cost; job losses; need skilled technicians; a fault can be repeated at speed.' },
      { n: 5, f: 'What are the characteristics of a robot?', b: 'It has a mechanical structure (such as arms, wheels or legs), electrical components (sensors, motors, a processor), and it is programmable.' },
      { n: 6, f: 'Give two advantages and two disadvantages of robots in a factory', b: 'Advantages: work non-stop; very consistent and accurate; can work in hazardous places. Disadvantages: high purchase and maintenance cost; cannot cope well with unexpected situations; can cause unemployment.' },
      { n: 7, f: 'What is artificial intelligence (AI)?', b: 'The ability of a computer system to carry out tasks that normally need human intelligence. An AI system collects data, uses rules to reason about it, and can adapt its behaviour.' },
      { n: 8, f: 'Knowledge base, rule base and inference engine', b: 'Knowledge base: stores the facts. Rule base: stores the rules, usually IF condition THEN conclusion. Inference engine: applies the rules to the facts to reach a conclusion.' },
      { n: 9, f: 'What is machine learning?', b: 'A branch of AI in which the system improves its performance by learning from data, rather than being given every rule by a programmer, e.g. a spam filter trained on labelled emails.' },
    ]),

    // 7 Algorithm design and problem-solving
    ...topicOnly('algorithm-design-and-problem-solving-0478', 7, [
      { n: 1, f: 'What are abstraction, decomposition and pattern recognition?', b: 'Abstraction: keep only the details that matter. Decomposition: split a problem into smaller sub-problems. Pattern recognition: spot similarities so a solution can be reused or a task put in a loop.' },
      { n: 2, f: 'What do the flowchart symbols mean?', b: 'Rounded terminator: start or end. Parallelogram: input or output. Rectangle: process. Diamond: decision, with labelled yes/no exits. Arrows show the order.' },
      { n: 3, f: 'How do totalling and counting work in an algorithm?', b: 'Totalling: set Total ← 0 before the loop, then Total ← Total + Value inside it. Counting: set Count ← 0, then Count ← Count + 1 each time the condition is met.' },
      { n: 4, f: 'How does a linear search work?', b: 'Check each item in turn from the start until the target is found or the end of the list is reached. It works on unsorted data but can be slow, as every item may need checking.' },
      { n: 5, f: 'How does a bubble sort work?', b: 'Compare adjacent items and swap them if they are in the wrong order, working through the list. After each pass the largest unsorted item is in place. Stop when a pass makes no swaps.' },
      { n: 6, f: 'Why does a swap in a bubble sort need a temporary variable?', b: 'To hold one value while the other is copied over it. Without Temp, one of the two values would be overwritten and lost.' },
      { n: 7, f: 'Validation vs verification', b: 'Validation: an automatic check that data is reasonable and allowed (range, length, type, presence, format, check digit); it cannot prove data is correct. Verification: checks data was entered or copied accurately (double entry, visual check).' },
      { n: 8, f: 'Normal, boundary and abnormal test data for whole numbers 1 to 10', b: 'Normal: e.g. 5 (accepted). Boundary: 1 and 10 (accepted) and 0 and 11, the first values outside the range (rejected). Abnormal (erroneous): e.g. "ten" (rejected).' },
      { n: 9, f: 'What is a trace table used for?', b: 'Recording the value of each variable, and any output, step by step as an algorithm runs, to work out what it does or find a logic error.' },
    ]),

    // 8 Programming
    ...topicOnly('programming-0478', 8, [
      { n: 1, f: 'Variable vs constant', b: 'A variable is a named memory location whose value can change while the program runs. A constant is a named value fixed for the whole run, so it only needs changing in one place.' },
      { n: 2, f: 'What are the five data types in Cambridge pseudocode?', b: 'INTEGER (whole number), REAL (number with a fractional part), CHAR (a single character), STRING (zero or more characters), BOOLEAN (TRUE or FALSE).' },
      { n: 3, f: 'What are sequence, selection and iteration?', b: 'Sequence: statements run in the order written. Selection: a path is chosen (IF ... THEN ... ELSE ... ENDIF, CASE OF ... ENDCASE). Iteration: statements are repeated (FOR, WHILE, REPEAT loops).' },
      { n: 4, f: 'FOR vs WHILE vs REPEAT ... UNTIL loops', b: 'FOR ... NEXT: count-controlled, runs a set number of times. WHILE ... DO ... ENDWHILE: pre-condition, tested first, may run zero times. REPEAT ... UNTIL: post-condition, tested after, always runs at least once.' },
      { n: 5, f: 'What do DIV and MOD do? Give 17 DIV 5 and 17 MOD 5', b: 'DIV gives the whole-number part of a division; MOD gives the remainder. 17 DIV 5 = 3 and 17 MOD 5 = 2.' },
      { n: 6, f: 'What do LENGTH, SUBSTRING, UCASE and LCASE do?', b: 'LENGTH returns the number of characters. SUBSTRING(Word, Start, Length) returns part of a string, e.g. SUBSTRING("Cambridge", 1, 4) is "Camb". UCASE and LCASE convert to upper or lower case.' },
      { n: 7, f: 'Procedure vs function', b: 'Both are named blocks of code called by name that can take parameters. A function returns a value that can be used in an expression; a procedure does not.' },
      { n: 8, f: 'Local vs global variables', b: 'A local variable exists only inside the procedure or function where it is declared. A global variable can be used anywhere in the program. Local variables prevent accidental changes elsewhere.' },
      { n: 9, f: 'How do you declare and use a 2D array in pseudocode?', b: 'DECLARE Grid : ARRAY[1:3, 1:4] OF INTEGER declares 3 rows and 4 columns. Grid[2, 4] is row 2, column 4. Arrays are usually processed with nested FOR loops.' },
      { n: 10, f: 'What are the steps of file handling in pseudocode?', b: 'Open the file (OPENFILE ... FOR READ or FOR WRITE), process it (READFILE or WRITEFILE, testing EOF when reading), then close it (CLOSEFILE). Opening for WRITE replaces the old contents.' },
      { n: 11, f: 'How do you make a program maintainable?', b: 'Use meaningful identifier names, comments, indentation, constants instead of repeated values, and procedures and functions for repeated tasks.' },
    ]),

    // 9 Databases
    ...topicOnly('databases-0478', 9, [
      { n: 1, f: 'Table, field and record', b: 'A table holds data about one kind of thing. A field is a column holding one kind of fact. A record is a row holding all the facts about one item.' },
      { n: 2, f: 'What is a primary key?', b: 'A field whose value is unique for every record, so each record can be identified. It cannot be left empty. An ID number is a good choice; a name is not, since two people can share one.' },
      { n: 3, f: 'Which database data types do you need for 0478?', b: 'Text/alphanumeric, character, Boolean, integer, real, and date/time.' },
      { n: 4, f: 'Why is a telephone number stored as text, not an integer?', b: 'It is never used in calculations, and a leading zero would be lost if it were stored as a number.' },
      { n: 5, f: 'What do SELECT, FROM, WHERE and ORDER BY do in SQL?', b: 'SELECT lists the fields to show (* for all). FROM names the table. WHERE gives the condition records must meet. ORDER BY sorts the results, ascending by default, or descending with DESC.' },
      { n: 6, f: 'What do SUM and COUNT do in SQL?', b: 'SUM adds up the values in a numeric field. COUNT counts the records that meet the condition. Each returns a single value.' },
      { n: 7, f: 'In what order must the clauses of an SQL query be written?', b: 'SELECT, FROM, WHERE, ORDER BY. Text values go in quotation marks; numbers do not.' },
      { n: 8, f: 'Write SQL to show the Title of books by N Okafor priced under 10, from table Book', b: 'SELECT Title\nFROM Book\nWHERE Author = \'N Okafor\' AND Price < 10;' },
    ]),

    // 10 Boolean logic
    ...topicOnly('boolean-logic', 10, [
      { n: 1, f: 'When is the output of a NOT, AND and OR gate 1?', b: 'NOT: when the input is 0 (it inverts). AND: only when both inputs are 1. OR: when at least one input is 1.' },
      { n: 2, f: 'When is the output of a NAND, NOR and XOR gate 1?', b: 'NAND: unless both inputs are 1. NOR: only when both inputs are 0. XOR: only when the inputs are different.' },
      { n: 3, f: 'Truth table for XOR (A, B → X)', b: '0, 0 → 0\n0, 1 → 1\n1, 0 → 1\n1, 1 → 0' },
      { n: 4, f: 'Truth table for NAND (A, B → X)', b: '0, 0 → 1\n0, 1 → 1\n1, 0 → 1\n1, 1 → 0' },
      { n: 5, f: 'How many rows does a truth table have?', b: '2ⁿ rows for n inputs: 4 rows for two inputs and 8 rows for three. List them in binary counting order (000, 001, 010 ...).' },
      { n: 6, f: 'OR vs XOR', b: 'OR gives 1 when either or both inputs are 1. XOR gives 1 only when exactly one input is 1.' },
      { n: 7, f: 'Is A NAND B the same as (NOT A) AND (NOT B)?', b: 'No. A NAND B is NOT (A AND B), which is 1 unless both inputs are 1. (NOT A) AND (NOT B) is 1 only when both are 0, which is NOR.' },
      { n: 8, f: 'How do you write a logic expression from a problem statement?', b: 'Give each condition a letter, then join them with AND (both), OR (either) and NOT (not / unless), using brackets. E.g. heater on when cold and window not open: H = C AND (NOT W).' },
      { n: 9, f: 'How do you complete a truth table for a circuit with several gates?', b: 'Add a working column for the output of each gate and fill them left to right through the circuit, then the final output. Working columns can earn marks even if the final column is wrong.' },
    ]),
  ],
};
