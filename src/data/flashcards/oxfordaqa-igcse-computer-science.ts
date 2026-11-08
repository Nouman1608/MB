/**
 * D-444 -- flashcards for OxfordAQA International GCSE Computer Science 9210
 * (for teaching from September 2017, exams from May/June 2019).
 *
 * Topic 2 (Programming) itemises subtopics 3.2.1-3.2.13, so its cards use
 * `<subtopic number>-<n>`. Topics 1 and 3-8 list no subtopics in the syllabus
 * record, so their cards sit on the topic (topicOnly helper, ids
 * `<topic number>-<n>`). Ids are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9210); origin 'revision-notes'.
 *
 * Pseudocode follows the form on Marlbridge's own 9210 pages (← for
 * assignment; every block closed: ENDIF, ENDFOR, ENDWHILE). HTML elements are
 * named in words, not written as tags, because card text is plain text. Not
 * tiered. Plain text only (see types.ts).
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const ALG = 'igcse-oxfordaqa-computer-science-algorithms-revision-notes';

const T2 = 'programming-9210';

export const DECK_OXFORDAQA_IGCSE_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'computer-science',
  syllabusCode: '9210',
  syllabusSeries: 'For teaching from September 2017, exams from May/June 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Algorithms
    ...topicOnly('algorithms-9210', '1', [
      { n: 1, f: 'What is an algorithm?', b: 'A sequence of steps that solves a problem or completes a task. It must be unambiguous, finite and produce a result. A program is one implementation of an algorithm in a particular language.' },
      { n: 2, f: 'What is decomposition?', b: 'Breaking a problem into smaller, manageable sub-problems.', src: ALG },
      { n: 3, f: 'What is abstraction?', b: 'Removing unnecessary detail to focus on what matters, e.g. an underground map keeps the connections but drops real distances.', src: ALG },
      { n: 4, f: 'What is algorithmic thinking?', b: 'Devising the sequence of steps that solves the problem.', src: ALG },
      { n: 5, f: 'What do the four main flowchart symbols mean?', b: 'Oval/rounded: start and stop.\nParallelogram: input and output.\nRectangle: process.\nDiamond: decision, with two labelled exits, Yes and No.' },
      { n: 6, f: 'What is the difference between a linear search and a binary search?', b: 'Linear: checks each item in turn; works on data in any order; slow on large sets.\nBinary: compares the middle item and discards half each time; the data must be sorted; much faster.' },
      { n: 7, f: 'How does a bubble sort work?', b: 'Repeatedly compare adjacent pairs and swap them if out of order. After each pass the largest remaining item has moved to the end. Stop when a pass makes no swaps.' },
      { n: 8, f: 'How does a merge sort work?', b: 'Divide the list in half repeatedly until each part holds one item, then merge the parts back together in order. Faster than bubble sort on large lists but more complex.' },
      { n: 9, f: 'What is a trace table used for?', b: 'Recording the value of each variable (one column each) as an algorithm runs line by line, to work out its output and find logic errors.' },
    ]),

    // 2 Programming
    ...sub(T2, 'data-types-9210', '3.2.1', [
      { n: 1, f: 'What are the integer and real data types?', b: 'Integer: whole numbers.\nReal: numbers with a fractional part (some languages call this float).' },
      { n: 2, f: 'What are the Boolean, character and string data types?', b: 'Boolean: True or False.\nCharacter: a single character.\nString: a sequence of characters.' },
      { n: 3, f: 'Which data type would you use for a phone number, and why?', b: 'String: it may start with 0 or contain + or spaces, and no arithmetic is done on it.' },
    ]),
    ...sub(T2, 'programming-concepts-9210', '3.2.2', [
      { n: 1, f: 'What is the difference between a variable and a constant?', b: 'A variable’s value can change while the program runs. A constant’s value is set once and cannot change.' },
      { n: 2, f: 'What are the three basic programming constructs?', b: 'Sequence (instructions in order), selection (IF … THEN … ELSE) and iteration (repetition).' },
      { n: 3, f: 'What is the difference between WHILE and REPEAT … UNTIL loops?', b: 'WHILE tests its condition before the loop body, so the body may run zero times. REPEAT … UNTIL tests after, so the body always runs at least once.' },
      { n: 4, f: 'When should you use a FOR loop?', b: 'When the number of repetitions is known in advance (count-controlled iteration), e.g. FOR i ← 1 TO 10 … ENDFOR.' },
      { n: 5, f: 'What is nesting?', b: 'Placing one construct inside another, such as an IF inside a FOR loop or one loop inside another.' },
    ]),
    ...sub(T2, 'arithmetic-operations-9210', '3.2.3', [
      { n: 1, f: 'What is the difference between real division and integer division?', b: 'Real division gives the exact result: 11 ÷ 2 = 5.5.\nInteger division gives only the whole-number part: 11 DIV 2 = 5.' },
      { n: 2, f: 'What does the modulus (MOD) operation give?', b: 'The remainder after integer division: 11 MOD 2 = 1. Useful for testing whether a number is even (n MOD 2 = 0).' },
      { n: 3, f: 'Name the basic arithmetic operations used in programs.', b: 'Addition, subtraction, multiplication, real division, integer division, modulus, and rounding or truncation.' },
    ]),
    ...sub(T2, 'relational-operations-9210', '3.2.4', [
      { n: 1, f: 'What are the relational operators?', b: 'Equal to, not equal to, less than, greater than, less than or equal to, greater than or equal to (=, ≠, <, >, ≤, ≥).' },
      { n: 2, f: 'What type of value does a relational operation produce?', b: 'A Boolean: True or False. For example, 7 > 3 is True.' },
      { n: 3, f: 'What is the difference between < 50 and ≤ 50 in a condition?', b: '< 50 is False when the value is exactly 50; ≤ 50 is True for 50. Getting this wrong causes off-by-one errors at boundaries.' },
    ]),
    ...sub(T2, 'boolean-operations-9210', '3.2.5', [
      { n: 1, f: 'When is A AND B true, and when is A OR B true?', b: 'A AND B: only when both are true.\nA OR B: when at least one is true.' },
      { n: 2, f: 'What does NOT do?', b: 'It reverses a Boolean value: NOT True is False.' },
      { n: 3, f: 'Write a condition that is true when Score is at least 50 and Lives is more than 0.', b: 'Score ≥ 50 AND Lives > 0' },
    ]),
    ...sub(T2, 'data-structures-9210', '3.2.6', [
      { n: 1, f: 'What is an array?', b: 'A data structure that holds a fixed number of items of the same data type under one name, each reached by its index.' },
      { n: 2, f: 'What is a two-dimensional array?', b: 'An array arranged as a table of rows and columns; each item is reached with two indices, such as scores[2][3].' },
      { n: 3, f: 'What is a record?', b: 'A data structure that groups related fields, which can be of different data types, about one item, such as a student’s name, age and form.' },
      { n: 4, f: 'Why use an array instead of many separate variables?', b: 'One name holds all the values, so a loop can process every item, and the code is shorter and easier to change.' },
    ]),
    ...sub(T2, 'input-output-and-file-handling-9210', '3.2.7', [
      { n: 1, f: 'Why do programs read from and write to files?', b: 'Data in variables is lost when the program ends. A file stores data permanently so it can be used next time the program runs.' },
      { n: 2, f: 'What are the steps to read data from a text file?', b: 'Open the file for reading, read the data (often line by line in a loop until the end of the file), then close the file.' },
      { n: 3, f: 'What is the difference between writing and appending to a file?', b: 'Writing replaces any existing contents of the file. Appending adds the new data to the end, keeping what is already there.' },
    ]),
    ...sub(T2, 'string-handling-operations-9210', '3.2.8', [
      { n: 1, f: 'What is concatenation?', b: 'Joining two or more strings together end to end, e.g. "Pass" and "word" give "Password".' },
      { n: 2, f: 'What is a substring?', b: 'Part of a string taken from a start position for a given length, e.g. the first three characters of "London" are "Lon".' },
      { n: 3, f: 'Name common string handling operations.', b: 'Finding the length, finding the position of a character, extracting a substring, concatenation, and converting between characters and their character codes or between strings and numbers.' },
      { n: 4, f: 'Why might you convert a string to an integer?', b: 'Input is often read as a string; it must be converted to a number before arithmetic can be done on it.' },
    ]),
    ...sub(T2, 'random-number-generation-9210', '3.2.9', [
      { n: 1, f: 'What is random number generation used for in programs?', b: 'Games (dice rolls, shuffling), simulations, and picking test data or quiz questions at random.' },
      { n: 2, f: 'How would you simulate rolling a six-sided die?', b: 'Generate a random integer between 1 and 6 inclusive, using the language’s random number function.' },
      { n: 3, f: 'Why are computer-generated random numbers called pseudo-random?', b: 'They are produced by an algorithm from a starting value (seed), so they only appear random; the same seed gives the same sequence.' },
    ]),
    ...sub(T2, 'subroutines-procedures-and-functions-9210', '3.2.10', [
      { n: 1, f: 'What is a subroutine?', b: 'A named block of code that performs a specific task and can be called from elsewhere in the program.' },
      { n: 2, f: 'What is the difference between a procedure and a function?', b: 'A function returns a value to the code that called it. A procedure carries out a task but does not return a value.' },
      { n: 3, f: 'What are parameters?', b: 'Values passed into a subroutine when it is called, so the same subroutine can work on different data.' },
      { n: 4, f: 'What is the difference between a local and a global variable?', b: 'A local variable is declared inside a subroutine and only exists there. A global variable can be used anywhere in the program.' },
      { n: 5, f: 'What are the advantages of using subroutines?', b: 'Code is reused rather than repeated, programs are easier to read, test and maintain, and different programmers can work on different subroutines.' },
    ]),
    ...sub(T2, 'structured-programming-9210', '3.2.11', [
      { n: 1, f: 'What is structured programming?', b: 'Designing a program as a set of modules (subroutines) using only sequence, selection and iteration, with clear interfaces (parameters and return values).' },
      { n: 2, f: 'What are the advantages of the structured approach?', b: 'Modules are easier to understand, test and debug on their own, can be reused, and make the program easier to maintain.' },
      { n: 3, f: 'Why does good code use meaningful identifiers, indentation and comments?', b: 'They make the code easier for other people (and the author later) to read, understand and maintain.' },
    ]),
    ...sub(T2, 'robust-and-secure-programming-9210', '3.2.12', [
      { n: 1, f: 'What is data validation? Give three checks.', b: 'Checking that input is sensible and allowed before it is used. Examples: range check, length check, presence check, type check, format check.' },
      { n: 2, f: 'What is authentication in a program?', b: 'Checking that a user is who they claim to be, for example by asking for a username and password.' },
      { n: 3, f: 'What are normal, boundary and erroneous test data?', b: 'Normal: typical valid data, should be accepted.\nBoundary: on and just either side of the limits.\nErroneous: invalid data, should be rejected.' },
      { n: 4, f: 'What is the difference between a syntax error and a logic error?', b: 'Syntax error: breaks the rules of the language, so the program will not run.\nLogic error: the program runs but produces the wrong output.' },
    ]),
    ...sub(T2, 'classification-of-programming-languages-and-translators-9210', '3.2.13', [
      { n: 1, f: 'What is the difference between high-level and low-level languages?', b: 'High-level: English-like, easier to write and debug, portable between processors.\nLow-level (machine code and assembly): close to the hardware, processor-specific, give direct control and can be very efficient.' },
      { n: 2, f: 'What is machine code?', b: 'Instructions in binary that the processor can execute directly.' },
      { n: 3, f: 'What is the difference between a compiler and an interpreter?', b: 'A compiler translates the whole program into machine code before it runs, producing an executable file. An interpreter translates and runs the program one line at a time, each time it runs.' },
      { n: 4, f: 'What does an assembler do?', b: 'Translates assembly language (mnemonics such as ADD and LDA) into machine code.' },
    ]),

    // 3 Data representation
    ...topicOnly('data-representation-9210', '3', [
      { n: 1, f: 'Why do computers use binary?', b: 'Their circuits are made of switches (transistors) with two states, on and off, which represent 1 and 0.' },
      { n: 2, f: 'How do you convert binary 1011 0110 to hexadecimal?', b: 'Split into groups of four bits: 1011 = B and 0110 = 6, so B6.' },
      { n: 3, f: 'Why is hexadecimal used?', b: 'It is a shorter way of writing binary that is easier for people to read and less error-prone; each hex digit stands for four bits.' },
      { n: 4, f: 'What are the units of storage from bit to gigabyte?', b: 'A bit is a 0 or 1; 4 bits = a nibble; 8 bits = a byte; then kilobyte, megabyte and gigabyte. Calculations usually divide by 1,000 for each step up (check the convention your papers use).' },
      { n: 5, f: 'What happens when binary numbers are added and the result does not fit?', b: 'Overflow: the result needs more bits than are available, so the extra carry bit is lost and the stored answer is wrong.' },
      { n: 6, f: 'What does a binary shift do?', b: 'A left shift by one place multiplies a number by 2; a right shift by one place divides it by 2 (any remainder is lost).' },
      { n: 7, f: 'What is a character set? Compare ASCII and Unicode.', b: 'A set of characters with a binary code for each. ASCII uses 7 bits (128 characters, English). Unicode uses more bits per character, so it can represent characters from many languages.' },
      { n: 8, f: 'How do you calculate the file size of a bitmap image?', b: 'Width in pixels × height in pixels × colour depth (bits per pixel) gives the size in bits; divide by 8 for bytes.' },
      { n: 9, f: 'How do you calculate the file size of a sound recording?', b: 'Sample rate (Hz) × sample resolution (bits) × duration (seconds) gives the size in bits.' },
      { n: 10, f: 'What is the difference between lossy and lossless compression?', b: 'Lossy permanently removes some data to make a much smaller file (e.g. photos, music). Lossless lets the original be rebuilt exactly (e.g. text, programs).' },
    ]),

    // 4 Computer systems
    ...topicOnly('computer-systems-9210', '4', [
      { n: 1, f: 'What do the ALU and the control unit do?', b: 'ALU: carries out calculations and logical comparisons.\nControl unit: fetches and decodes instructions and directs the other parts of the CPU.' },
      { n: 2, f: 'What are registers and cache?', b: 'Registers: very small, very fast storage locations inside the CPU.\nCache: a small amount of fast memory holding frequently used data and instructions, so the CPU waits less for main memory.' },
      { n: 3, f: 'What is the von Neumann architecture?', b: 'Program instructions and data are both stored in main memory, and the processor fetches both from there.' },
      { n: 4, f: 'What happens in the fetch-decode-execute cycle?', b: 'Fetch: the next instruction (address in the program counter) is copied from memory into the CPU.\nDecode: the control unit works out what it means.\nExecute: it is carried out. The cycle repeats.' },
      { n: 5, f: 'How do clock speed, number of cores and cache size affect CPU performance?', b: 'Higher clock speed: more cycles, so more instructions, per second.\nMore cores: several instructions processed at once, if the program can be split.\nLarger cache: fewer waits for main memory.' },
      { n: 6, f: 'What is the difference between RAM and ROM?', b: 'RAM: volatile, read and write, holds the programs and data in use.\nROM: non-volatile, read only, holds the start-up (boot) instructions.' },
      { n: 7, f: 'Compare magnetic, optical and solid-state storage.', b: 'Magnetic (hard disk): large capacity, cheap per gigabyte, moving parts.\nOptical (CD, DVD, Blu-ray): cheap and portable, low capacity, slower.\nSolid-state (SSD, flash): fast, no moving parts, robust, but more expensive per gigabyte.' },
      { n: 8, f: 'What is an embedded system?', b: 'A computer built into a larger device to do one dedicated task, such as the controller in a washing machine or microwave.' },
      { n: 9, f: 'What are the main functions of an operating system?', b: 'Managing memory, files, the processor (so several programs can run), peripherals and security, and providing a user interface.' },
      { n: 10, f: 'What do the NOT, AND and OR gates do?', b: 'NOT: inverts its single input.\nAND: output 1 only when both inputs are 1.\nOR: output 1 when at least one input is 1.' },
    ]),

    // 5 Computer networks
    ...topicOnly('computer-networks', '5', [
      { n: 1, f: 'What is the difference between a LAN and a WAN?', b: 'LAN: covers a small area such as one building, usually with its own hardware.\nWAN: covers a large geographical area, often using communication links owned by others. The internet is the largest WAN.' },
      { n: 2, f: 'What are the advantages of networking computers?', b: 'Sharing files, printers and an internet connection; central back-up and security; and communication between users.' },
      { n: 3, f: 'What is the difference between a star and a bus topology?', b: 'Star: each device connects to a central switch; one cable failing affects only that device.\nBus: all devices share one main cable; cheap, but a break stops the network and collisions increase with traffic.' },
      { n: 4, f: 'What is a network protocol?', b: 'A set of rules that devices follow to communicate, covering the format and the order of messages.' },
      { n: 5, f: 'What are HTTP and HTTPS used for?', b: 'HTTP transfers web pages between a web server and a browser. HTTPS does the same but encrypts the data.' },
      { n: 6, f: 'What are TCP and IP responsible for?', b: 'TCP splits data into packets, checks they all arrive and puts them back in order. IP addresses the packets and routes them across networks.' },
      { n: 7, f: 'What is the difference between an IP address and a MAC address?', b: 'An IP address identifies a device on a network and can change. A MAC address is a unique hardware address fixed into the network interface card.' },
      { n: 8, f: 'What is the difference between wired and wireless connections?', b: 'Wired: faster, more reliable and more secure. Wireless (WiFi): devices can move around and no cables are needed, but signals are affected by distance and walls and can be intercepted.' },
    ]),

    // 6 Cyber security
    ...topicOnly('cyber-security-9210', '6', [
      { n: 1, f: 'What is cyber security?', b: 'The processes, practices and technologies that protect networks, computers, programs and data from attack, damage or unauthorised access.' },
      { n: 2, f: 'What is social engineering? Give two examples.', b: 'Manipulating people into giving away information or access. Examples: phishing (fake emails or sites), blagging (an invented story to persuade someone), shouldering (watching someone type a PIN or password).' },
      { n: 3, f: 'What is malware? Name three types.', b: 'Software written to cause harm or gain unauthorised access. Types: viruses, worms, trojans, spyware and ransomware.' },
      { n: 4, f: 'What is a brute force attack and how can it be prevented?', b: 'Trying every possible password until one works. Prevented by long, complex passwords and by locking an account after several failed attempts.' },
      { n: 5, f: 'What is SQL injection?', b: 'Typing SQL code into a website’s input box so that it runs on the database, to read or change data. Prevented by validating input and using parameterised queries.' },
      { n: 6, f: 'How does a firewall protect a network?', b: 'It checks incoming and outgoing traffic against a set of rules and blocks traffic that is not allowed.' },
      { n: 7, f: 'What is encryption?', b: 'Scrambling data using a key so that it cannot be understood if it is intercepted; only someone with the right key can decrypt it.' },
      { n: 8, f: 'What is penetration testing?', b: 'Authorised, simulated attacks on a system to find its weaknesses before real attackers do.' },
      { n: 9, f: 'Why is two-factor authentication more secure than a password alone?', b: 'The user needs two different kinds of evidence, such as a password and a code sent to their phone, so a stolen password alone is not enough.' },
    ]),

    // 7 Relational databases and SQL
    ...topicOnly('relational-databases-and-sql', '7', [
      { n: 1, f: 'What are a table, a record and a field in a database?', b: 'Table: data about one type of thing.\nRecord: one row, all the data about one item.\nField: one column, one item of data about each record.' },
      { n: 2, f: 'What is a primary key?', b: 'A field that uniquely identifies each record in a table, such as StudentID.' },
      { n: 3, f: 'What is a foreign key?', b: 'A field in one table that is the primary key in another table, used to link the two tables.' },
      { n: 4, f: 'Why is a relational database better than one flat file?', b: 'Data is stored once in linked tables, so there is less data redundancy, fewer inconsistencies, and less storage is needed.' },
      { n: 5, f: 'What does this SQL do?\nSELECT Name FROM Pupil WHERE Age > 14 ORDER BY Name ASC', b: 'Lists the Name of every pupil older than 14, in alphabetical order.' },
      { n: 6, f: 'How do you add a new record in SQL?', b: 'INSERT INTO Pupil (PupilID, Name, Age) VALUES (25, \'Ali\', 15)' },
      { n: 7, f: 'How do you change and remove records in SQL?', b: 'UPDATE Pupil SET Age = 16 WHERE PupilID = 25\nDELETE FROM Pupil WHERE PupilID = 25\nWithout WHERE, every record would be changed or deleted.' },
      { n: 8, f: 'How do you get data from two linked tables in SQL?', b: 'List both tables and match the foreign key to the primary key, e.g.\nSELECT Pupil.Name, Form.Tutor FROM Pupil, Form WHERE Pupil.FormID = Form.FormID' },
    ]),

    // 8 Web page design
    ...topicOnly('web-page-design', '8', [
      { n: 1, f: 'What is the difference between HTML and CSS?', b: 'HTML (hypertext markup language) describes the structure and content of a page. CSS (cascading style sheets) describes how it looks: colours, fonts and layout.' },
      { n: 2, f: 'What are the head and body sections of an HTML page for?', b: 'Head: information about the page that is not shown in the main window, such as the title and links to style sheets.\nBody: the content displayed in the browser.' },
      { n: 3, f: 'Which HTML elements are used for headings, paragraphs and lists?', b: 'h1 to h6 for headings (most to least important), p for a paragraph, ul for an unordered list, ol for an ordered list and li for each list item.' },
      { n: 4, f: 'Which HTML elements create a hyperlink and an image, and which attributes do they need?', b: 'a creates a link, with href giving the destination. img inserts an image, with src giving the file and alt giving a text description.' },
      { n: 5, f: 'Why should every image have alt text?', b: 'It is displayed if the image does not load and is read out by screen readers for visually impaired users.' },
      { n: 6, f: 'What are the parts of a CSS rule?', b: 'A selector, which says which elements to style, and a declaration block in curly brackets holding property: value pairs, each ending with a semicolon.' },
      { n: 7, f: 'What is the difference between an element, a class and an id selector in CSS?', b: 'Element (h1): styles every element of that type.\nClass (.price): styles any element with that class, on many elements.\nId (#banner): styles the one element with that id.' },
      { n: 8, f: 'Why is an external style sheet usually best?', b: 'One .css file linked from every page gives a consistent look across the whole site, and a change made once updates every page.' },
      { n: 9, f: 'What makes a web page well designed?', b: 'Consistent layout and navigation, readable text with good contrast, accessibility (alt text, logical headings, labelled forms), sensibly sized images, and working on different devices.' },
    ]),
  ],
};
