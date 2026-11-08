/**
 * D-444 -- flashcards for Cambridge International AS & A Level Computer Science 9618 (2026).
 *
 * One block per subtopic, in syllabus order (topics 1-12 AS Level, 13-20 the
 * A Level). Card ids are `<subtopic number>-<n>` and are permanent (browser
 * progress is keyed by them): add a new card with the next unused n, never
 * renumber.
 *
 * Pseudocode follows the Cambridge 9618 pseudocode guide: assignment with ←,
 * DECLARE identifier : <type>, CONSTANT identifier = <value>,
 * IF … THEN … ELSE … ENDIF, CASE OF … OTHERWISE … ENDCASE, FOR … TO … NEXT,
 * REPEAT … UNTIL, WHILE … ENDWHILE, PROCEDURE … ENDPROCEDURE, FUNCTION …
 * RETURNS … ENDFUNCTION, and OPENFILE / READFILE / WRITEFILE / CLOSEFILE / EOF.
 *
 * Every 9618 revision-notes page maps to a whole topic, not a subtopic, so no
 * card here carries `src`; all are authored, following the terminology of
 * Marlbridge's own 9618 study guides and revision notes. Not tiered. Plain
 * text only (see types.ts). Unicode for symbols.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

export const DECK_CAMBRIDGE_A_LEVEL_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'computer-science',
  syllabusCode: '9618',
  syllabusSeries: '2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Information representation
    ...sub('information-representation', 'data-representation', '1.1', [
      { n: 1, f: 'How do you convert a denary number to binary?', b: 'Repeatedly divide by 2 and read the remainders upwards; or subtract the largest place values (128, 64, 32 …) that fit and write a 1 in each one used.' },
      { n: 2, f: 'Why is hexadecimal used in computing?', b: 'It is far more compact than binary and each hex digit maps to exactly four bits, so conversion is easy and errors are less likely. Used for memory addresses, colour codes and MAC addresses.' },
      { n: 3, f: 'How do you find the two’s complement of a binary number (to negate it)?', b: 'Invert all the bits and add 1.\nExample: +5 = 00000101 → 11111010 → 11111011 = −5.' },
      { n: 4, f: 'What is the range of an 8-bit two’s complement integer?', b: '−128 to +127. In general, n bits give −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1.' },
      { n: 5, f: 'What is binary-coded decimal (BCD)?', b: 'Each denary digit is stored separately as its own 4-bit binary code. 59 in BCD is 0101 1001. Used where digits are displayed or exact decimal values matter, such as in calculators and electronic displays.' },
      { n: 6, f: 'What is the difference between a kibibyte and a kilobyte?', b: 'A kibibyte (KiB) is 2¹⁰ = 1024 bytes (binary prefix). A kilobyte (kB) is 10³ = 1000 bytes (decimal prefix). Likewise MiB = 2²⁰ bytes and MB = 10⁶ bytes.' },
      { n: 7, f: 'ASCII and Unicode: how many bits, and why was Unicode needed?', b: 'ASCII uses 7 bits (128 characters); extended ASCII uses 8 bits (256). Unicode uses up to 32 bits per character, so it can represent non-Latin scripts and symbols that ASCII cannot.' },
    ]),
    ...sub('information-representation', 'multimedia-graphics-sound', '1.2', [
      { n: 1, f: 'What is image resolution, and what is colour depth?', b: 'Resolution: the number of pixels in the image (width × height).\nColour depth: the number of bits per pixel; n bits give 2ⁿ colours.' },
      { n: 2, f: 'How do you estimate the file size of a bitmap image?', b: 'File size (bits) = width in pixels × height in pixels × colour depth. Divide by 8 for bytes.' },
      { n: 3, f: 'What is the difference between a bitmap and a vector graphic?', b: 'A bitmap stores the colour of every pixel. A vector graphic stores a drawing list of objects and their properties (e.g. coordinates, line colour, fill), so it scales without loss of quality but is unsuitable for photographs.' },
      { n: 4, f: 'What are sampling rate and sampling resolution in digital sound?', b: 'Sampling rate: the number of samples taken per second (Hz).\nSampling resolution: the number of bits used to store each sample.' },
      { n: 5, f: 'How do sampling rate and resolution affect a sound file?', b: 'Increasing either gives a more accurate representation of the original sound, but a larger file. File size = sampling rate × sampling resolution × duration (× number of channels).' },
    ]),
    ...sub('information-representation', 'compression', '1.3', [
      { n: 1, f: 'What is the difference between lossy and lossless compression?', b: 'Lossless: the original data can be fully recovered (used for text and program files).\nLossy: some data is permanently discarded, usually detail people barely notice (used for photos, audio and video).' },
      { n: 2, f: 'Why is file compression needed?', b: 'Smaller files use less storage space and transfer faster over a network, using less bandwidth.' },
      { n: 3, f: 'How does run-length encoding (RLE) work?', b: 'A run of identical values is replaced by one copy of the value and a count. Example: AAAAABB → 5A2B.' },
      { n: 4, f: 'When is run-length encoding a poor choice?', b: 'On noisy or photographic data with few repeated runs: the encoded file can end up larger than the original.' },
    ]),

    // 2 Communication
    ...sub('communication', 'networks-including-the-internet', '2.1', [
      { n: 1, f: 'What is the difference between the client-server and peer-to-peer models?', b: 'Client-server: dedicated servers provide services (files, authentication, printing) to clients.\nPeer-to-peer: all computers have equal status and each acts as both client and server.' },
      { n: 2, f: 'What is the difference between a thin client and a thick client?', b: 'A thin client relies heavily on the server for processing. A thick client does most of its processing locally.' },
      { n: 3, f: 'How do the bus, star and mesh topologies differ?', b: 'Bus: one shared line all devices connect to.\nStar: every device connects to a central switch, so a faulty link is easy to isolate.\nMesh: many interconnections, so there are alternative routes and high resilience.' },
      { n: 4, f: 'What does CSMA/CD do on an Ethernet network?', b: 'Carrier Sense Multiple Access / Collision Detection: a device checks the medium is free before transmitting; if a collision is detected, each device waits a random time before trying again.' },
      { n: 5, f: 'What is the difference between the internet and the World Wide Web?', b: 'The internet is the global network of interconnected networks (the infrastructure). The WWW is the collection of linked web pages and resources accessed over the internet using HTTP.' },
      { n: 6, f: 'What does DNS do?', b: 'The Domain Name System translates the domain name in a URL into the IP address that is used to route the request.' },
      { n: 7, f: 'What is the difference between a static and a dynamic IP address?', b: 'Static: fixed, does not change (suits a web server that must always be found).\nDynamic: assigned from a pool each time a device connects, usually by DHCP, so addresses can be reused.' },
      { n: 8, f: 'What is the difference between a switch and a router?', b: 'A switch forwards data between devices within one network. A router forwards packets between different networks, such as a LAN and the internet.' },
    ]),

    // 3 Hardware
    ...sub('hardware', 'computers-and-their-components', '3.1', [
      { n: 1, f: 'What is the difference between RAM and ROM?', b: 'RAM: volatile, read and write, holds the programs and data currently in use.\nROM: non-volatile, read only (in normal use), holds fixed start-up instructions such as the bootstrap.' },
      { n: 2, f: 'What is the difference between SRAM and DRAM?', b: 'DRAM stores each bit as a charge on a capacitor and must be refreshed constantly; it is cheaper and denser, so used for main memory.\nSRAM uses flip-flops, needs no refresh and is faster, so used for cache.' },
      { n: 3, f: 'What are PROM and EPROM?', b: 'PROM: programmable once after manufacture, then cannot be changed.\nEPROM: can be erased (using ultraviolet light) and reprogrammed.' },
      { n: 4, f: 'What is the difference between magnetic, optical and solid-state storage?', b: 'Magnetic (hard disk): data stored as magnetised regions on spinning platters.\nOptical (CD, DVD): pits and lands read by a laser.\nSolid-state (flash): charge stored in transistors, no moving parts, so faster access.' },
      { n: 5, f: 'What is an embedded system?', b: 'A computer system built into a larger device to perform one dedicated function, e.g. in a washing machine or a car engine management unit.' },
      { n: 6, f: 'What is the role of sensors and actuators in a control system?', b: 'Sensors measure physical quantities (temperature, light, pressure) and send data to the processor. Actuators carry out physical actions (motors, valves, heaters) in response to the processor’s output. Feedback lets the system adjust its output.' },
    ]),
    ...sub('hardware', 'logic-gates-and-logic-circuits', '3.2', [
      { n: 1, f: 'When is the output of an AND gate and of an OR gate 1?', b: 'AND: only when both inputs are 1.\nOR: when at least one input is 1.' },
      { n: 2, f: 'When is the output of a NAND gate and of a NOR gate 1?', b: 'NAND (NOT AND): 1 unless both inputs are 1.\nNOR (NOT OR): 1 only when both inputs are 0.' },
      { n: 3, f: 'When is the output of an XOR gate 1?', b: 'When the inputs are different (one is 1 and the other 0).' },
      { n: 4, f: 'How many rows does a truth table need for a circuit with n inputs?', b: '2ⁿ rows. Three inputs need 8 rows, listed in binary order 000 to 111.' },
    ]),

    // 4 Processor fundamentals
    ...sub('processor-fundamentals', 'cpu-architecture', '4.1', [
      { n: 1, f: 'What is the Von Neumann model of a computer?', b: 'A single processor that fetches and executes instructions in sequence, with program instructions and data stored together in the same main memory (the stored program concept).' },
      { n: 2, f: 'What do the PC, MAR, MDR and CIR hold?', b: 'PC: address of the next instruction.\nMAR: address of the location currently being accessed.\nMDR: data or instruction being transferred to or from memory.\nCIR: the instruction currently being decoded and executed.' },
      { n: 3, f: 'What do the accumulator (ACC), index register (IX) and status register hold?', b: 'ACC: the result of ALU operations.\nIX: a value added to an address in indexed addressing.\nStatus register: flag bits (carry, negative, overflow, zero) set by the last operation.' },
      { n: 4, f: 'What are the steps of the fetch stage in register transfer notation?', b: 'MAR ← [PC]\nPC ← [PC] + 1, and MDR ← [[MAR]]\nCIR ← [MDR]' },
      { n: 5, f: 'What do the address, data and control buses carry?', b: 'Address bus: addresses from the MAR to memory (one way).\nData bus: data and instructions (both ways).\nControl bus: control signals such as memory read, memory write and the clock (both ways).' },
      { n: 6, f: 'Which factors affect the performance of a CPU?', b: 'Clock speed, number of cores, size of cache memory, and the width of the address and data buses.' },
      { n: 7, f: 'What is an interrupt and how is it handled?', b: 'A signal that a device or program needs attention. At the end of each fetch-execute cycle the CPU checks for interrupts; if one has priority, the current register contents are saved, the interrupt service routine runs, then the saved values are restored.' },
    ]),
    ...sub('processor-fundamentals', 'assembly-language', '4.2', [
      { n: 1, f: 'What is the relationship between assembly language and machine code?', b: 'Each assembly instruction is a mnemonic for one machine-code instruction. An assembler translates assembly language into machine code.' },
      { n: 2, f: 'What is the difference between immediate and direct addressing?', b: 'Immediate: the operand is the value itself (LDM #5 loads 5).\nDirect: the operand is the address of the value (LDD 200 loads the contents of address 200).' },
      { n: 3, f: 'What is the difference between indirect and indexed addressing?', b: 'Indirect: the operand holds the address of the address of the value (LDI).\nIndexed: the address used is the operand plus the contents of the index register (LDX).' },
      { n: 4, f: 'What is relative addressing?', b: 'The operand is an offset; the address used is worked out relative to a base address, usually that of the current instruction.' },
      { n: 5, f: 'How does a conditional jump such as JPE work after CMP?', b: 'CMP compares the ACC with the operand. JPE jumps to the given address only if the comparison was equal; otherwise execution continues with the next instruction.' },
      { n: 6, f: 'What is a two-pass assembler?', b: 'Pass 1 reads the program and builds a symbol table of labels and their addresses. Pass 2 uses the table to translate every instruction, including forward references to labels, into machine code.' },
    ]),
    ...sub('processor-fundamentals', 'bit-manipulation', '4.3', [
      { n: 1, f: 'How do you clear, set or toggle chosen bits with a mask?', b: 'Clear: AND with 0s in those positions.\nSet: OR with 1s in those positions.\nToggle: XOR with 1s in those positions.' },
      { n: 2, f: 'What does a logical left shift do to an unsigned binary value?', b: 'Each bit moves left and 0 enters on the right. A shift of n places multiplies the value by 2ⁿ (bits shifted out are lost).' },
      { n: 3, f: 'What is the difference between a logical and an arithmetic right shift?', b: 'Logical: 0 enters on the left. Arithmetic: the sign bit is copied in, so a negative two’s complement value stays negative. Either divides by 2 per place.' },
      { n: 4, f: 'What is a cyclic shift?', b: 'Bits shifted out of one end are moved back in at the other end, so no bits are lost.' },
    ]),

    // 5 System software
    ...sub('system-software', 'operating-systems', '5.1', [
      { n: 1, f: 'Why does a computer need an operating system?', b: 'It provides an interface between the user and the hardware, and manages the hardware and resources so that application software can run.' },
      { n: 2, f: 'What are the key management tasks of an operating system?', b: 'Memory management, file management, security management, hardware (peripheral) management, process management, and providing a user interface.' },
      { n: 3, f: 'What are utility programs? Give examples.', b: 'System software that helps maintain the computer, e.g. disk formatter, virus checker, defragmenter, disk contents analysis and repair, file compression, back-up software.' },
      { n: 4, f: 'What is a program library and what is a DLL?', b: 'A library is a collection of pre-written, tested routines a program can use. A dynamic link library (DLL) is linked when the program runs, so one copy can be shared by several programs and the file sizes stay smaller.' },
    ]),
    ...sub('system-software', 'language-translators', '5.2', [
      { n: 1, f: 'What is the difference between a compiler and an interpreter?', b: 'A compiler translates the whole source program into an executable file before it runs. An interpreter translates and executes one statement at a time, every time the program runs.' },
      { n: 2, f: 'Why is an interpreter useful during program development?', b: 'It stops at the first error it meets and reports it, so the error can be fixed and the program re-run straight away from that point.' },
      { n: 3, f: 'Why does Java use partial compilation and interpretation?', b: 'Source code is compiled to intermediate bytecode, which is then interpreted (by the Java Virtual Machine) on any platform, so the same compiled code runs on different hardware.' },
      { n: 4, f: 'What features does a typical IDE provide?', b: 'Coding aids (context-sensitive prompts, auto-completion), initial error detection (dynamic syntax checks), presentation aids (prettyprint, expand and collapse code blocks) and debugging tools (single stepping, breakpoints, report window for variables).' },
    ]),

    // 6 Security, privacy and data integrity
    ...sub('security-privacy-and-data-integrity', 'data-security', '6.1', [
      { n: 1, f: 'What is the difference between data security, data privacy and data integrity?', b: 'Security: protecting data from loss or unauthorised access.\nPrivacy: keeping personal data from people not entitled to see it.\nIntegrity: data being accurate, complete and up to date.' },
      { n: 2, f: 'How does a firewall protect a computer system?', b: 'It monitors traffic between the computer or network and the outside, and blocks packets that do not meet set rules, such as those from unauthorised addresses.' },
      { n: 3, f: 'What security measures protect data in a computer system?', b: 'User accounts and passwords, authentication (e.g. biometrics), firewalls, anti-virus and anti-spyware software, encryption, access rights, and regular back-ups.' },
      { n: 4, f: 'What is malware? Name three types.', b: 'Software written to harm a system or steal data. Examples: a virus (attaches to files and replicates), a worm (replicates itself across a network), spyware (records what the user does and sends it on).' },
      { n: 5, f: 'What is phishing and what is pharming?', b: 'Phishing: emails or messages that trick a user into giving personal details on a fake site.\nPharming: malicious code redirects a user from a genuine website to a fake one, even when the correct address is typed.' },
    ]),
    ...sub('security-privacy-and-data-integrity', 'data-integrity', '6.2', [
      { n: 1, f: 'What is the difference between validation and verification?', b: 'Validation: an automatic check that input data is reasonable and follows set rules.\nVerification: a check that data has been copied or entered accurately from its source.' },
      { n: 2, f: 'Name five types of validation check.', b: 'Range check, format check, length check, presence check, existence check, limit check, check digit.' },
      { n: 3, f: 'How is data verified during data entry?', b: 'Double entry (typed twice and compared by the computer) or a visual check (the user compares the entered data with the source document).' },
      { n: 4, f: 'How do parity checks verify data during transfer?', b: 'A parity bit is added so each byte has an even (or odd) number of 1s. The receiver counts the 1s; a wrong count shows an error. A parity block check can locate a single-bit error.' },
      { n: 5, f: 'What is a checksum?', b: 'A value calculated from a block of data before sending. The receiver recalculates it; if the two values differ, the data was corrupted in transit.' },
    ]),

    // 7 Ethics and ownership
    ...sub('ethics-and-ownership', 'ethics-and-ownership-sub', '7.1', [
      { n: 1, f: 'Why do professional bodies such as the BCS and IEEE publish codes of conduct?', b: 'To set ethical standards for computing professionals: acting in the public interest, being competent and honest, and acting with integrity towards employers and clients.' },
      { n: 2, f: 'What is copyright, and why does software need it?', b: 'A legal right protecting the owner of an original work from it being copied or distributed without permission. Software is easy to copy, so the law protects the investment of the people who wrote it.' },
      { n: 3, f: 'What is the difference between open source and freeware?', b: 'Open source: the source code is available and users may study, change and redistribute it.\nFreeware: free to use, but the source code is not provided and it may not be changed.' },
      { n: 4, f: 'What is the difference between shareware and commercial software?', b: 'Shareware: free to try for a limited time or with limited features; a fee is paid to keep using it.\nCommercial software: must be paid for (a licence bought) before use; the code is protected.' },
      { n: 5, f: 'What ethical and social issues does artificial intelligence raise?', b: 'Possible job losses, bias in decisions learned from data, accountability when an AI system causes harm, and privacy concerns over the data used.' },
    ]),

    // 8 Databases
    ...sub('databases', 'database-concepts', '8.1', [
      { n: 1, f: 'What are the limitations of a file-based approach to storing data?', b: 'Data is often duplicated across files (data redundancy), copies can disagree (inconsistency), and programs depend on the file structure (data dependency).' },
      { n: 2, f: 'What is a primary key, and what is a foreign key?', b: 'Primary key: an attribute (or combination) that uniquely identifies each tuple in a table.\nForeign key: an attribute in one table that is the primary key of another table, used to link them.' },
      { n: 3, f: 'What is a candidate key and a secondary key?', b: 'Candidate key: any attribute that could act as the primary key.\nSecondary key: a candidate key not chosen as the primary key, often used as an index for searching.' },
      { n: 4, f: 'What is referential integrity?', b: 'Every foreign key value must match an existing primary key value in the linked table, so no record refers to a record that does not exist.' },
      { n: 5, f: 'What are first, second and third normal form?', b: '1NF: no repeated groups of attributes; all values atomic.\n2NF: in 1NF and no partial dependencies (every non-key attribute depends on the whole primary key).\n3NF: in 2NF and no non-key dependencies (non-key attributes depend only on the key).' },
      { n: 6, f: 'What relationships can exist between entities in an E-R diagram?', b: 'One-to-one, one-to-many and many-to-many. A many-to-many relationship is resolved with a link table, giving two one-to-many relationships.' },
    ]),
    ...sub('databases', 'database-management-systems-dbms', '8.2', [
      { n: 1, f: 'How does a DBMS address the problems of a file-based approach?', b: 'Data is stored once and shared, which reduces redundancy and inconsistency, and program–data independence means changes to the structure need not change every program.' },
      { n: 2, f: 'What is the data dictionary in a DBMS?', b: 'Data about the data (metadata): table names, field names, data types, validation rules, relationships and access rights.' },
      { n: 3, f: 'What do the developer interface and query processor of a DBMS do?', b: 'Developer interface: lets the developer create and maintain the database structure, forms and reports.\nQuery processor: takes a query, works out how to carry it out and returns the results.' },
      { n: 4, f: 'How does a DBMS help keep data secure?', b: 'Usernames and passwords, access rights (different views for different users), encryption, automatic back-ups, and an audit trail of changes.' },
    ]),
    ...sub('databases', 'ddl-and-dml', '8.3', [
      { n: 1, f: 'What is the difference between DDL and DML?', b: 'Data Definition Language creates and changes the database structure (CREATE DATABASE, CREATE TABLE, ALTER TABLE).\nData Manipulation Language queries and changes the data (SELECT, INSERT, UPDATE, DELETE).' },
      { n: 2, f: 'What does this SQL do?\nSELECT Name, Age FROM Student WHERE Age > 16 ORDER BY Name;', b: 'Returns the Name and Age of every student older than 16, sorted alphabetically by name (ascending by default).' },
      { n: 3, f: 'How do you add a record and change a record in SQL?', b: 'INSERT INTO Student (StudentID, Name) VALUES (1, \'Ali\');\nUPDATE Student SET Name = \'Sara\' WHERE StudentID = 1;' },
      { n: 4, f: 'What do GROUP BY and the aggregate functions do in SQL?', b: 'GROUP BY collects rows with the same value into groups. Aggregate functions summarise them: SUM, COUNT and AVG.' },
      { n: 5, f: 'How do you join two tables in an SQL query?', b: 'With INNER JOIN … ON matching the foreign key to the primary key, e.g.\nSELECT … FROM Student INNER JOIN Class ON Student.ClassID = Class.ClassID;' },
    ]),

    // 9 Algorithm design and problem-solving
    ...sub('algorithm-design-and-problem-solving', 'computational-thinking-skills', '9.1', [
      { n: 1, f: 'What is abstraction?', b: 'Removing unnecessary detail and keeping only the information needed to solve the problem, e.g. a map that shows only stations and lines.' },
      { n: 2, f: 'What is decomposition?', b: 'Breaking a complex problem down into smaller sub-problems that are easier to understand and solve, often as separate modules.' },
      { n: 3, f: 'What are the benefits of abstraction?', b: 'Simpler models are quicker to design and program, use less memory and processing, and are easier to understand and maintain.' },
    ]),
    ...sub('algorithm-design-and-problem-solving', 'algorithms-9-2', '9.2', [
      { n: 1, f: 'What is an algorithm?', b: 'An ordered set of steps that solves a problem or completes a task.' },
      { n: 2, f: 'Name three ways of documenting an algorithm.', b: 'Structured English, a program flowchart, and pseudocode.' },
      { n: 3, f: 'What is stepwise refinement?', b: 'Breaking each step of an algorithm into smaller, more detailed steps, repeated until each step can be written directly as program code.' },
      { n: 4, f: 'What is an identifier table?', b: 'A table listing each identifier (variable or constant) used in an algorithm, with its data type and a description of what it is used for.' },
      { n: 5, f: 'What does a trace table show?', b: 'The value of each variable, and any output, after each step of an algorithm, used to dry-run it and find logic errors.' },
    ]),

    // 10 Data types and structures
    ...sub('data-types-and-structures', 'data-types-and-records', '10.1', [
      { n: 1, f: 'Which basic data types does 9618 pseudocode use?', b: 'INTEGER, REAL, CHAR, STRING, BOOLEAN and DATE.' },
      { n: 2, f: 'How do you declare a variable and a constant in 9618 pseudocode?', b: 'DECLARE Total : INTEGER\nCONSTANT VAT = 0.2\nA constant’s value is fixed when it is declared and cannot be changed by the program.' },
      { n: 3, f: 'What is a record data type?', b: 'A composite data type made of several fields, which can be of different data types, describing one item (such as one student).' },
      { n: 4, f: 'How do you define a record type in 9618 pseudocode?', b: 'TYPE TStudent\n  DECLARE Name : STRING\n  DECLARE Age : INTEGER\nENDTYPE\nThen DECLARE Pupil : TStudent and use dot notation: Pupil.Name ← "Ali"' },
    ]),
    ...sub('data-types-and-structures', 'arrays', '10.2', [
      { n: 1, f: 'What is an array?', b: 'A fixed-size data structure holding elements of the same data type under one identifier, each reached by its index.' },
      { n: 2, f: 'How do you declare 1D and 2D arrays in 9618 pseudocode?', b: 'DECLARE Names : ARRAY[1:30] OF STRING\nDECLARE Grid : ARRAY[1:3, 1:5] OF INTEGER\nThe bounds give the lower and upper index of each dimension.' },
      { n: 3, f: 'How does a linear search work?', b: 'Check each element in turn from the start until the item is found or the end of the array is reached. The data need not be sorted.' },
      { n: 4, f: 'How does a bubble sort work?', b: 'Compare each pair of adjacent elements and swap them if they are in the wrong order. Repeat passes until a pass makes no swaps.' },
      { n: 5, f: 'How can a bubble sort be made more efficient?', b: 'Use a flag to stop as soon as a pass makes no swaps, and reduce the number of comparisons by one after each pass, since the largest value is already in place.' },
    ]),
    ...sub('data-types-and-structures', 'files', '10.3', [
      { n: 1, f: 'Why are files needed?', b: 'Data in variables is lost when a program ends. A file stores data permanently, so it can be read back by the program later or by other programs.' },
      { n: 2, f: 'What are the three file modes for a text file in 9618 pseudocode?', b: 'READ, WRITE and APPEND, e.g. OPENFILE "Scores.txt" FOR READ. WRITE replaces any existing contents; APPEND adds to the end.' },
      { n: 3, f: 'How do you read every line of a text file in 9618 pseudocode?', b: 'OPENFILE "Data.txt" FOR READ\nWHILE NOT EOF("Data.txt")\n  READFILE "Data.txt", Line\n  …\nENDWHILE\nCLOSEFILE "Data.txt"' },
      { n: 4, f: 'How do you write a line to a text file in 9618 pseudocode?', b: 'OPENFILE "Log.txt" FOR WRITE (or FOR APPEND)\nWRITEFILE "Log.txt", Line\nCLOSEFILE "Log.txt"' },
    ]),
    ...sub('data-types-and-structures', 'introduction-to-abstract-data-types-adt', '10.4', [
      { n: 1, f: 'What is an abstract data type (ADT)?', b: 'A collection of data together with a set of operations on that data, defined by what it does rather than how it is implemented.' },
      { n: 2, f: 'How does a stack work?', b: 'Last in, first out (LIFO). Items are pushed onto and popped off the top. A top-of-stack pointer tracks the last item.' },
      { n: 3, f: 'How does a queue work?', b: 'First in, first out (FIFO). Items join at the rear (enqueue) and leave from the front (dequeue), tracked by front and rear pointers. A circular queue reuses freed spaces.' },
      { n: 4, f: 'What is a linked list?', b: 'A list of nodes, each holding data and a pointer to the next node. A start pointer gives the first node and a null pointer marks the end. Items can be inserted or deleted by changing pointers, without moving data.' },
      { n: 5, f: 'How can a stack, queue or linked list be implemented using arrays?', b: 'Store the items in a 1D array and keep integer pointers (indices) for the top, front/rear or next node. A linked list also keeps a free list of unused array positions.' },
    ]),

    // 11 Programming
    ...sub('programming', 'programming-basics', '11.1', [
      { n: 1, f: 'What is the assignment operator in 9618 pseudocode?', b: '← , for example Count ← Count + 1. The = sign is used for comparison and in CONSTANT declarations, not for assignment.' },
      { n: 2, f: 'How do you take input and give output in 9618 pseudocode?', b: 'INPUT Name\nOUTPUT "Hello ", Name\nOUTPUT can print several items separated by commas.' },
      { n: 3, f: 'Which string functions does the 9618 pseudocode guide give?', b: 'Examples: LENGTH(s) gives the number of characters; LEFT(s, x) and RIGHT(s, x) give x characters from either end; MID(s, x, y) gives y characters starting at position x. & joins (concatenates) strings.' },
      { n: 4, f: 'What do INT and RAND do in 9618 pseudocode?', b: 'INT(x) returns the integer part of x (e.g. INT(27.9) is 27).\nRAND(x) returns a random real number from 0 up to but not including x.' },
      { n: 5, f: 'What are integer division and modulo? Give 17 and 5 as an example.', b: 'Integer division gives the whole-number quotient: 17 divided by 5 gives 3.\nModulo gives the remainder: 17 modulo 5 gives 2.' },
    ]),
    ...sub('programming', 'constructs', '11.2', [
      { n: 1, f: 'What is the structure of an IF statement in 9618 pseudocode?', b: 'IF condition\n  THEN\n    statements\n  ELSE\n    statements\nENDIF' },
      { n: 2, f: 'What is the structure of a CASE statement in 9618 pseudocode?', b: 'CASE OF identifier\n  value1 : statement\n  value2 : statement\n  OTHERWISE statement\nENDCASE' },
      { n: 3, f: 'What is the structure of a count-controlled loop in 9618 pseudocode?', b: 'FOR Count ← 1 TO 10\n  statements\nNEXT Count\nSTEP can set the increment, e.g. FOR i ← 10 TO 0 STEP -2.' },
      { n: 4, f: 'What is the difference between a pre-condition and a post-condition loop?', b: 'Pre-condition (WHILE condition … ENDWHILE): the condition is tested first, so the body may run zero times.\nPost-condition (REPEAT … UNTIL condition): the body always runs at least once.' },
      { n: 5, f: 'When does a WHILE loop stop and when does a REPEAT loop stop?', b: 'WHILE repeats while its condition is TRUE and stops when it becomes FALSE.\nREPEAT … UNTIL repeats until its condition becomes TRUE.' },
    ]),
    ...sub('programming', 'structured-programming', '11.3', [
      { n: 1, f: 'What is the difference between a procedure and a function?', b: 'A function returns a single value and is used in an expression. A procedure performs a task and is run with CALL; it returns no value directly.' },
      { n: 2, f: 'How do you write a function in 9618 pseudocode?', b: 'FUNCTION Square(Num : INTEGER) RETURNS INTEGER\n  RETURN Num * Num\nENDFUNCTION' },
      { n: 3, f: 'How do you write and call a procedure in 9618 pseudocode?', b: 'PROCEDURE Greet(Name : STRING)\n  OUTPUT "Hello ", Name\nENDPROCEDURE\nCALL Greet("Ali")' },
      { n: 4, f: 'What is the difference between passing a parameter BYVAL and BYREF?', b: 'BYVAL: a copy of the value is passed, so the original variable is not changed.\nBYREF: the address is passed, so changes made in the subroutine change the original. If neither is stated, BYVAL is assumed.' },
      { n: 5, f: 'What is the difference between a parameter and an argument?', b: 'A parameter is the variable named in the subroutine header. An argument is the actual value passed to it when the subroutine is called.' },
    ]),

    // 12 Software development
    ...sub('software-development', 'program-development-life-cycle', '12.1', [
      { n: 1, f: 'What are the stages of the program development life cycle?', b: 'Analysis, design, coding, testing and maintenance.' },
      { n: 2, f: 'How does the waterfall model work?', b: 'Each stage is completed in order before the next begins, with little going back. Suits projects with clear, fixed requirements; changes late on are costly.' },
      { n: 3, f: 'How does the iterative model work?', b: 'A simple version is developed first and then improved in repeated cycles of design, coding and testing, adding features each time.' },
      { n: 4, f: 'What is rapid application development (RAD)?', b: 'Prototypes are built quickly and refined with frequent user feedback, with little formal planning. Suits projects where requirements are unclear, but needs users to be closely involved.' },
    ]),
    ...sub('software-development', 'program-design', '12.2', [
      { n: 1, f: 'What does a structure chart show?', b: 'How a program is broken into modules, in a hierarchy, and the parameters passed between them. It can also show selection and repetition.' },
      { n: 2, f: 'What is a state-transition diagram?', b: 'A diagram showing the states a system can be in, the events (inputs) that cause a change of state, and the transitions between states.' },
      { n: 3, f: 'Which symbols in a program flowchart show a decision and a process?', b: 'Decision: a diamond with two exits (yes/no).\nProcess: a rectangle.\nInput/output: a parallelogram. Start/stop: a rounded terminator.' },
    ]),
    ...sub('software-development', 'program-testing-and-maintenance', '12.3', [
      { n: 1, f: 'What is the difference between a syntax, a logic and a run-time error?', b: 'Syntax: breaks the rules of the language, so it will not translate.\nLogic: the program runs but gives the wrong result.\nRun-time: the program crashes while running, e.g. dividing by zero.' },
      { n: 2, f: 'What are normal, abnormal (erroneous) and boundary test data?', b: 'Normal: valid data the program should accept.\nAbnormal: invalid data it should reject.\nBoundary (extreme): values on and either side of the limits of the valid range.' },
      { n: 3, f: 'What is the difference between white-box and black-box testing?', b: 'White-box: tests every path through the code, chosen by looking at the code.\nBlack-box: tests inputs against expected outputs without looking at the code.' },
      { n: 4, f: 'What are alpha and beta testing?', b: 'Alpha: in-house testing by the developer’s own team.\nBeta: a near-finished version given to a group of real users outside the company, who report faults.' },
      { n: 5, f: 'What are the three types of maintenance?', b: 'Corrective: fixing errors found after release.\nAdaptive: changing the program for new requirements or a new environment.\nPerfective: improving performance or usability.' },
      { n: 6, f: 'What is a dry run?', b: 'Working through an algorithm by hand with test data, recording variable values in a trace table, to check the logic without running the code.' },
    ]),

    // 13 Data representation (A Level)
    ...sub('a-data-representation', 'user-defined-data-types', '13.1', [
      { n: 1, f: 'What is a user-defined data type and why is it used?', b: 'A data type created by the programmer from the built-in types, to model the data of a particular problem more closely.' },
      { n: 2, f: 'What is an enumerated data type? Give a 9618 pseudocode example.', b: 'A non-composite type whose values are a fixed ordered list of names.\nTYPE Season = (Spring, Summer, Autumn, Winter)' },
      { n: 3, f: 'What is a pointer data type? Give a 9618 pseudocode example.', b: 'A type whose values are memory addresses.\nTYPE TIntPointer = ^INTEGER\nMyPtr^ refers to the value at the address MyPtr holds (dereferencing).' },
      { n: 4, f: 'What is the difference between composite and non-composite data types?', b: 'Non-composite: defined without referring to another type (e.g. enumerated, pointer).\nComposite: built from other data types (e.g. record, set, class).' },
      { n: 5, f: 'What is a set data type?', b: 'A composite type holding an unordered collection of values with no duplicates, supporting set operations such as union, intersection and membership.' },
    ]),
    ...sub('a-data-representation', 'file-organisation-and-access', '13.2', [
      { n: 1, f: 'What are serial, sequential and random file organisation?', b: 'Serial: records stored in the order they were added.\nSequential: records stored in order of a key field.\nRandom: each record is stored at an address calculated from its key by a hashing algorithm.' },
      { n: 2, f: 'What is the difference between sequential and direct access?', b: 'Sequential access reads records one after another from the start. Direct (random) access goes straight to a record’s location, using an index or a hashing algorithm.' },
      { n: 3, f: 'What is a hashing collision and how can it be handled?', b: 'Two keys give the same address. The record can be stored in the next free position (searching forwards) or in a separate overflow area.' },
      { n: 4, f: 'How do you write a record to a random file in 9618 pseudocode?', b: 'OPENFILE "Seats.dat" FOR RANDOM\nSEEK "Seats.dat", Position\nPUTRECORD "Seats.dat", NewRecord\nCLOSEFILE "Seats.dat"\n(GETRECORD reads one.)' },
      { n: 5, f: 'Which file organisation suits a payroll run and which suits a booking system?', b: 'Payroll processes every record in order, so sequential suits it. A booking system needs one record found quickly, so random (direct access) suits it.' },
    ]),
    ...sub('a-data-representation', 'floating-point-numbers-representation-and-manipulation', '13.3', [
      { n: 1, f: 'What are the mantissa and exponent in floating-point representation?', b: 'The number is mantissa × 2^exponent. The mantissa holds the significant digits (precision); the exponent sets where the binary point goes (range). Both are in two’s complement.' },
      { n: 2, f: 'What is the trade-off between mantissa and exponent size?', b: 'More bits for the mantissa give greater precision. More bits for the exponent give a greater range of values.' },
      { n: 3, f: 'What does it mean for a floating-point number to be normalised?', b: 'The mantissa starts 01 (positive) or 10 (negative), so the first two bits differ. This gives the maximum precision for the bits available and a unique representation of each value.' },
      { n: 4, f: 'Why can some numbers not be stored exactly in floating point?', b: 'Values such as 0.1 have no exact binary fraction, so they are rounded, giving rounding errors. Results too large give overflow; too small to represent give underflow.' },
    ]),

    // 14 Communication and internet technologies
    ...sub('communication-and-internet-technologies', 'protocols', '14.1', [
      { n: 1, f: 'Why are protocols needed in networking?', b: 'A protocol is a set of rules for transmitting data. Devices from different manufacturers can communicate only if they follow the same rules.' },
      { n: 2, f: 'What are the four layers of the TCP/IP protocol suite?', b: 'Application (e.g. HTTP, FTP, SMTP), Transport (TCP), Internet (IP), and Link (e.g. Ethernet).' },
      { n: 3, f: 'What is the role of TCP and of IP?', b: 'TCP splits data into packets, numbers them, and makes sure all arrive and are reassembled in order (re-requesting lost ones).\nIP adds addresses and routes each packet across networks.' },
      { n: 4, f: 'What are HTTP, FTP, SMTP, POP3 and IMAP used for?', b: 'HTTP: transferring web pages.\nFTP: transferring files.\nSMTP: sending email.\nPOP3 and IMAP: retrieving email from a server (IMAP keeps it synchronised on the server).' },
      { n: 5, f: 'What is BitTorrent?', b: 'A peer-to-peer protocol for sharing large files: the file is split into pieces, and each peer (in a swarm) downloads pieces from others while uploading the pieces it has. A tracker helps peers find each other.' },
    ]),
    ...sub('communication-and-internet-technologies', 'circuit-switching-packet-switching', '14.2', [
      { n: 1, f: 'What is circuit switching?', b: 'A dedicated path is set up between sender and receiver for the whole communication; all data follows that path, in order. Used for traditional telephone calls.' },
      { n: 2, f: 'What is packet switching?', b: 'Data is split into packets, each with a header holding addresses and a sequence number. Packets may take different routes and are reassembled in order at the destination.' },
      { n: 3, f: 'What are the advantages of packet switching over circuit switching?', b: 'No line is tied up, so bandwidth is shared efficiently; packets can be re-routed around faults or congestion. Drawback: packets can arrive out of order or be delayed.' },
      { n: 4, f: 'What does a router do in packet switching?', b: 'It reads each packet’s destination address and uses its routing table to forward the packet to the next router on a suitable route.' },
    ]),

    // 15 Hardware and virtual machines
    ...sub('hardware-and-virtual-machines', 'processors-parallel-processing-and-virtual-machines', '15.1', [
      { n: 1, f: 'What is the difference between RISC and CISC processors?', b: 'RISC: a small set of simple instructions, each taking one clock cycle; more general-purpose registers; suits pipelining.\nCISC: many complex instructions, some taking several cycles; shorter programs.' },
      { n: 2, f: 'What is pipelining?', b: 'Different stages of several instructions (fetch, decode, execute …) are carried out at the same time, one stage per instruction, so more instructions complete per unit time.' },
      { n: 3, f: 'What are SISD, SIMD, MISD and MIMD?', b: 'Basic computer architectures: Single/Multiple Instruction stream with Single/Multiple Data stream. SIMD applies one instruction to many data items at once (e.g. graphics); MIMD has processors running different instructions on different data.' },
      { n: 4, f: 'What is a massively parallel computer?', b: 'A large number of processors working together on the same problem, each with its own memory, linked by a network.' },
      { n: 5, f: 'What is a virtual machine? Give a benefit and a drawback.', b: 'Software that emulates a computer, so one system can run another operating system as a guest. Benefit: run software for another platform or test safely. Drawback: slower than running directly on the hardware.' },
    ]),
    ...sub('hardware-and-virtual-machines', 'boolean-algebra-and-logic-circuits', '15.2', [
      { n: 1, f: 'What are De Morgan’s laws?', b: 'NOT (A AND B) = (NOT A) OR (NOT B)\nNOT (A OR B) = (NOT A) AND (NOT B)' },
      { n: 2, f: 'What does a half adder do?', b: 'Adds two bits, A and B. Sum = A XOR B; Carry = A AND B.' },
      { n: 3, f: 'What does a full adder do?', b: 'Adds two bits and a carry-in, giving a sum and a carry-out. It can be built from two half adders and an OR gate; full adders are chained to add multi-bit numbers.' },
      { n: 4, f: 'What is a flip-flop?', b: 'A sequential circuit that stores one bit: its output depends on its inputs and its previous state. SR and JK flip-flops are used in memory and registers.' },
      { n: 5, f: 'What is a Karnaugh map used for?', b: 'Simplifying a Boolean expression: 1s are placed in a grid labelled in Gray code order, and adjacent groups of 1, 2, 4 or 8 are combined to remove variables.' },
    ]),

    // 16 System software (A Level)
    ...sub('a-system-software', 'purposes-of-an-operating-system-os', '16.1', [
      { n: 1, f: 'What is the difference between a program and a process?', b: 'A program is the code stored on disk. A process is a program that has been loaded into memory and is being executed.' },
      { n: 2, f: 'What are the three main process states?', b: 'Running (using the processor), ready (waiting for its turn) and blocked (waiting for an event such as input/output to finish).' },
      { n: 3, f: 'Name four process scheduling routines.', b: 'First come first served, shortest job first, shortest remaining time first, and round robin (each process gets a fixed time slice in turn).' },
      { n: 4, f: 'What is the difference between paging and segmentation?', b: 'Paging: memory is split into fixed-size pages and frames.\nSegmentation: memory is split into variable-size segments matching logical parts of a program.' },
      { n: 5, f: 'What is virtual memory, and what is disk thrashing?', b: 'Virtual memory uses secondary storage as an extension of RAM, swapping pages in and out. Disk thrashing happens when pages are swapped so often that the computer spends more time swapping than processing.' },
    ]),
    ...sub('a-system-software', 'translation-software', '16.2', [
      { n: 1, f: 'What are the stages of compilation?', b: 'Lexical analysis, syntax analysis, code generation and optimisation.' },
      { n: 2, f: 'What happens in lexical analysis?', b: 'White space and comments are removed, and the code is split into tokens; identifiers are added to the symbol table.' },
      { n: 3, f: 'What happens in syntax analysis?', b: 'The tokens are parsed and checked against the grammar of the language; syntax errors are reported.' },
      { n: 4, f: 'What are BNF and syntax diagrams used for?', b: 'To define the grammar of a language. Backus–Naur Form uses rules such as ⟨digit⟩ ::= 0|1|…|9 and can define items recursively; syntax diagrams show the same rules graphically.' },
      { n: 5, f: 'What is Reverse Polish Notation (RPN)?', b: 'A way of writing expressions with the operator after its operands, so no brackets are needed: (a + b) × c becomes a b + c ×. It is evaluated with a stack.' },
    ]),

    // 17 Security
    ...sub('security', 'encryption-encryption-protocols-and-digital-certificates', '17.1', [
      { n: 1, f: 'What is the difference between symmetric and asymmetric encryption?', b: 'Symmetric: the same key encrypts and decrypts, so the key must be shared securely.\nAsymmetric: a public key encrypts and only the matching private key decrypts.' },
      { n: 2, f: 'What are plaintext and ciphertext?', b: 'Plaintext: the original readable data.\nCiphertext: the data after encryption, unreadable without the key.' },
      { n: 3, f: 'What do SSL and TLS provide?', b: 'Secure communication between a client and server: they authenticate the server, agree encryption keys in a handshake, and encrypt the data sent (as in HTTPS).' },
      { n: 4, f: 'How is a digital signature created and checked?', b: 'The sender hashes the message to a digest and encrypts the digest with their private key. The receiver decrypts it with the sender’s public key and compares it with a fresh hash of the message.' },
      { n: 5, f: 'What is a digital certificate?', b: 'An electronic document issued by a Certificate Authority that links a public key to its owner’s identity, so others can trust that the key is genuine.' },
      { n: 6, f: 'What is quantum cryptography?', b: 'Using the properties of photons to send encryption keys (quantum key distribution): any attempt to intercept the key disturbs it and can be detected.' },
    ]),

    // 18 Artificial intelligence
    ...sub('artificial-intelligence-ai', 'artificial-intelligence-sub', '18.1', [
      { n: 1, f: 'What is the difference between Dijkstra’s algorithm and A*?', b: 'Both find the shortest path in a weighted graph. Dijkstra’s explores by distance from the start only. A* adds a heuristic estimate of the distance to the goal, so it usually explores fewer nodes.' },
      { n: 2, f: 'What is machine learning?', b: 'A system improves its performance on a task by learning from data, rather than by being explicitly programmed with rules.' },
      { n: 3, f: 'What is the difference between supervised, unsupervised and reinforcement learning?', b: 'Supervised: learns from labelled data.\nUnsupervised: finds patterns in unlabelled data.\nReinforcement: learns by trial and error, guided by rewards and penalties.' },
      { n: 4, f: 'What is an artificial neural network?', b: 'Layers of connected nodes (input, hidden and output layers). Each connection has a weight, adjusted during training so the network’s outputs improve.' },
      { n: 5, f: 'What is deep learning?', b: 'Machine learning using artificial neural networks with many hidden layers, used for tasks such as image and speech recognition.' },
      { n: 6, f: 'What is back propagation?', b: 'A training method: the error at the output is passed backwards through the network and the weights are adjusted to reduce it, repeated over many examples.' },
    ]),

    // 19 Computational thinking and problem-solving
    ...sub('computational-thinking-and-problem-solving', 'algorithms-19-1', '19.1', [
      { n: 1, f: 'How does a binary search work, and what does it need?', b: 'The data must be sorted. Compare the item with the middle element; discard the half that cannot contain it; repeat on the remaining half until found or no items remain.' },
      { n: 2, f: 'How does an insertion sort work?', b: 'Take each element in turn from the second onwards and move it back through the sorted part of the list until it is in the correct position.' },
      { n: 3, f: 'What is Big O notation?', b: 'A way of describing how the time (or memory) an algorithm needs grows as the size of the input, n, grows, using the worst case.' },
      { n: 4, f: 'What are the time complexities of linear search, binary search and bubble sort?', b: 'Linear search: O(n).\nBinary search: O(log n).\nBubble sort and insertion sort: O(n²).' },
      { n: 5, f: 'How do you add a value to a binary search tree?', b: 'Start at the root; go left if the value is smaller than the node, right if larger; repeat until an empty position is reached and add the new node there.' },
    ]),
    ...sub('computational-thinking-and-problem-solving', 'recursion', '19.2', [
      { n: 1, f: 'What is recursion?', b: 'A subroutine that is defined in terms of itself: it calls itself with a smaller version of the problem.' },
      { n: 2, f: 'What are the essential features of a recursive subroutine?', b: 'A base case that stops the recursion, a general case that calls itself, and each call moving closer to the base case.' },
      { n: 3, f: 'How does a compiler implement recursion?', b: 'Each call pushes a stack frame (return address, parameters, local variables) onto the call stack; when a call ends its frame is popped and control returns, unwinding the stack.' },
      { n: 4, f: 'What happens if a recursive subroutine has no reachable base case?', b: 'It keeps calling itself until the call stack runs out of memory: a stack overflow.' },
      { n: 5, f: 'Write a recursive factorial function in 9618 pseudocode.', b: 'FUNCTION Factorial(n : INTEGER) RETURNS INTEGER\n  IF n = 0\n    THEN\n      RETURN 1\n    ELSE\n      RETURN n * Factorial(n - 1)\n  ENDIF\nENDFUNCTION' },
    ]),

    // 20 Further programming
    ...sub('further-programming', 'programming-paradigms', '20.1', [
      { n: 1, f: 'What is the difference between low-level, imperative, object-oriented and declarative paradigms?', b: 'Low-level: works directly with the processor’s instructions and registers.\nImperative (procedural): a sequence of statements that change state.\nObject-oriented: objects combining data and methods.\nDeclarative: states facts and rules; the system works out how to answer a goal.' },
      { n: 2, f: 'What are a class, an object and a constructor?', b: 'Class: a template defining attributes and methods.\nObject: an instance of a class.\nConstructor: the method that creates and initialises a new object.' },
      { n: 3, f: 'What are encapsulation and inheritance?', b: 'Encapsulation: attributes are kept private and accessed only through the object’s methods (getters and setters).\nInheritance: a subclass takes on the attributes and methods of its parent class and can add its own.' },
      { n: 4, f: 'What is polymorphism?', b: 'A method with the same name behaves differently depending on the class of the object; a subclass can override an inherited method.' },
      { n: 5, f: 'How does a declarative (logic) program answer a query?', b: 'It holds facts, e.g. parent(ali, sara), and rules, e.g. grandparent(X, Z) IF parent(X, Y) AND parent(Y, Z). A goal (query) is answered by matching it against the facts and rules.' },
    ]),
    ...sub('further-programming', 'file-processing-and-exception-handling', '20.2', [
      { n: 1, f: 'What is an exception?', b: 'An unexpected event during program execution that disrupts the normal flow, such as a missing file, division by zero or invalid input.' },
      { n: 2, f: 'What is exception handling and why is it used?', b: 'Code that catches an exception and deals with it (e.g. with try … except/catch) so the program does not crash and can report the problem or recover.' },
      { n: 3, f: 'How do you read a record from a random file in 9618 pseudocode?', b: 'OPENFILE "Stock.dat" FOR RANDOM\nSEEK "Stock.dat", Position\nGETRECORD "Stock.dat", ThisItem\nCLOSEFILE "Stock.dat"' },
      { n: 4, f: 'How do you add a record to a sequential file while keeping it in key order?', b: 'Read each record from the old file and write it to a new file until the correct position is reached; write the new record; copy the rest; then replace the old file with the new one.' },
    ]),
  ],
};
