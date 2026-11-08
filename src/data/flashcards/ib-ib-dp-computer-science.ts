/**
 * D-444 -- flashcards for IB Diploma Programme Computer Science (first
 * assessment 2027).
 *
 * One block per sub-topic (A.1-A.4, B.1-B.4), in syllabus order. Card ids are
 * `<sub-topic number>-<n>` (e.g. A.2-3) and are permanent (browser progress
 * is keyed by them): add a new card with the next unused n, never renumber.
 *
 * The syllabus record is not tiered, so no card carries an upper-tier flag;
 * where the course notes mark content as HL only, the card says so in its
 * text. Written from Marlbridge's own DP Computer Science pages (the Theme A
 * and B.2 revision notes and study guides). Those pages are tagged with the
 * code "DP Computer Science", which does not match either part of this
 * record's code, so no card names a `src`.
 *
 * Plain text only (see types.ts).
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string; u?: true; src?: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const TA = 'ib-dp-computer-science-theme-a';
const TB = 'ib-dp-computer-science-theme-b';

export const DECK_IB_IB_DP_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'computer-science',
  syllabusCode: 'DP Computer Science (2014) / DP Computer Science (2027)',
  syllabusSeries: 'First assessment 2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // Theme A -- Concepts of computer science
    ...sub(TA, 'ib-dp-computer-science-a-1', 'A.1', [
      { n: 1, f: 'What do the control unit, ALU and registers do in a CPU?', b: 'The control unit directs the fetch-execute cycle and the flow of data. The ALU carries out arithmetic and logic operations. Registers are very fast, small stores inside the CPU holding the data and instructions in use.' },
      { n: 2, f: 'Describe the fetch-execute cycle', b: 'The CPU fetches the next instruction from memory, decodes what operation it specifies, then executes it (which may read or write data via the registers), and repeats for the next instruction.' },
      { n: 3, f: 'Primary vs secondary storage', b: 'Primary storage (e.g. RAM) is directly accessible to the CPU, fast and usually volatile, but limited in capacity. Secondary storage (e.g. an SSD) is non-volatile and larger but slower, holding data and programs not in active use.' },
      { n: 4, f: 'Why is all data in a computer ultimately binary?', b: 'The hardware stores and processes only two states. Numbers, text, images and sound are all encoded as patterns of bits; a byte is 8 bits.' },
      { n: 5, f: 'What is the role of the operating system?', b: 'It manages the hardware resources (processor, memory, storage, devices) and mediates between applications and the machine, so programs do not need to control the hardware directly.' },
      { n: 6, f: 'How many values can n bits represent?', b: '2ⁿ different values. For example, 8 bits (one byte) give 2⁸ = 256 values.' },
    ]),
    ...sub(TA, 'ib-dp-computer-science-a-2', 'A.2', [
      { n: 1, f: 'LAN vs WAN', b: 'A LAN (local area network) covers a small area such as one building. A WAN (wide area network) connects networks over a large geographical area; the internet is the largest WAN.' },
      { n: 2, f: 'Client vs server', b: 'A server provides a service or resource, such as files, web pages or email, over a network. A client is a device or program that requests and uses that service.' },
      { n: 3, f: 'What do a router, a switch and a wireless access point do?', b: 'A router forwards packets between networks using IP addresses. A switch forwards data within a LAN only to the intended device. A wireless access point lets wireless devices join a wired network.' },
      { n: 4, f: 'TCP vs UDP', b: 'TCP is connection-based and reliable: it numbers, acknowledges and resends packets so data arrives complete and in order. UDP sends packets with no checks, so it is faster but unreliable; it suits live streaming and gaming.' },
      { n: 5, f: 'What do DHCP and HTTPS do?', b: 'DHCP automatically assigns IP addresses and network settings to devices joining a network. HTTPS transfers web pages like HTTP but encrypts the data between browser and server.' },
      { n: 6, f: 'What is packet switching?', b: 'Data is split into packets, each with addressing and sequence information, which travel independently across the network, possibly by different routes, and are reassembled in order at the destination.' },
      { n: 7, f: 'Why is the internet described as decentralised?', b: 'No single computer or organisation controls it. Many independent networks are linked by routers, and data can be re-routed around a failed link or node.' },
      { n: 8, f: 'Name the four layers of the TCP/IP model (HL)', b: 'Application, transport, internet and network interface (link). Each layer provides services to the one above, so data can be sent reliably across networks.' },
    ]),
    ...sub(TA, 'ib-dp-computer-science-a-3', 'A.3', [
      { n: 1, f: 'Why store data in a relational database rather than a flat file?', b: 'Data is stored once and referenced by keys, which reduces redundancy, preserves integrity when records change, and allows controlled access. A flat file duplicates related data with no way to keep copies consistent.' },
      { n: 2, f: 'Primary key vs foreign key', b: 'A primary key uniquely identifies each record within its own table. A foreign key is a field in one table that references the primary key of a different table, linking the two.' },
      { n: 3, f: 'SQL data definition language vs data manipulation language', b: 'DDL defines the structure of the database, e.g. creating tables. DML works with the data the database holds, e.g. SELECT, INSERT, UPDATE and DELETE.' },
      { n: 4, f: 'What do JOIN and LIKE with % do in SQL?', b: 'JOIN combines rows from two tables where a key matches, e.g. ON Borrowers.BorrowerID = Loans.BorrowerID. LIKE with the % wildcard matches a pattern, e.g. LIKE \'Mc%\' finds values starting with Mc.' },
      { n: 5, f: 'WHERE vs HAVING in SQL', b: 'WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY, usually on an aggregate such as COUNT.' },
      { n: 6, f: 'What does ACID stand for in database transactions (HL)?', b: 'Atomicity (all of a transaction happens or none), consistency (the database stays valid), isolation (concurrent transactions do not interfere) and durability (committed changes survive failures).' },
      { n: 7, f: 'What do BEGIN TRANSACTION, COMMIT and ROLLBACK do (HL)?', b: 'BEGIN TRANSACTION starts a group of changes. COMMIT makes them permanent. ROLLBACK undoes them, returning the database to its state before the transaction.' },
    ]),
    ...sub(TA, 'ib-dp-computer-science-a-4', 'A.4', [
      { n: 1, f: 'Rule-based programming vs machine learning', b: 'In rule-based programming a programmer writes the rules. In machine learning the system derives its own rules, or model, from data.' },
      { n: 2, f: 'What are training data and features?', b: 'Training data is the set of examples a model learns from. Features are the measurable input properties of each example that the model uses to make its prediction.' },
      { n: 3, f: 'Supervised vs unsupervised learning', b: 'Supervised learning trains on labelled data, where the correct output is known, e.g. emails marked spam or not. Unsupervised learning finds patterns or groups in unlabelled data, e.g. clustering customers.' },
      { n: 4, f: 'Name three ethical issues raised by machine learning', b: 'Bias in training data leading to unfair or discriminatory outputs; lack of transparency in how automated decisions are reached; the environmental and energy cost of training large models.' },
      { n: 5, f: 'Give three real-world applications of machine learning', b: 'Any three of: spam filtering, recommendation systems, image and speech recognition, medical image analysis, fraud detection, language translation.' },
    ]),

    // Theme B -- Computational thinking and problem-solving
    ...sub(TB, 'ib-dp-computer-science-b-1', 'B.1', [
      { n: 1, f: 'What is decomposition?', b: 'Breaking a complex problem into smaller sub-problems that are easier to understand, solve and test separately.' },
      { n: 2, f: 'What is abstraction?', b: 'Removing unnecessary detail and keeping only what matters for solving the problem, e.g. a map that shows routes but not every building.' },
      { n: 3, f: 'What is pattern recognition in computational thinking?', b: 'Spotting similarities within or between problems, so an existing solution can be reused or a repeated task can be generalised.' },
      { n: 4, f: 'What is an algorithm?', b: 'A finite, ordered sequence of unambiguous steps that solves a problem or completes a task.' },
      { n: 5, f: 'Why design a solution in pseudocode or a flowchart before coding?', b: 'Designing the logic separately from syntax reduces logic errors and follows the specify, decompose, abstract and test process of computational thinking.' },
      { n: 6, f: 'Linear search vs binary search', b: 'Linear search checks each item in turn and works on unsorted data. Binary search repeatedly halves a sorted list by checking the middle item, so it needs far fewer comparisons on large lists.' },
    ]),
    ...sub(TB, 'ib-dp-computer-science-b-2', 'B.2', [
      { n: 1, f: 'Name the three basic control structures', b: 'Sequence (instructions in order), selection (branching on a condition, e.g. if/else) and iteration (repeating a block, e.g. for and while loops).' },
      { n: 2, f: 'What is modularity, and which computational thinking step does it express?', b: 'Breaking a program into functions or procedures with defined inputs and outputs, making it easier to build, test and understand. It is the programming form of decomposition.' },
      { n: 3, f: 'Normal, boundary and erroneous test data', b: 'Normal: typical, expected values. Boundary: values at the very edge of what is valid. Erroneous: invalid values the program should reject or handle gracefully.' },
      { n: 4, f: 'What is debugging by tracing?', b: 'Stepping through code line by line, recording variable values, to find where the actual behaviour diverges from the expected behaviour.' },
      { n: 5, f: 'Name four primitive data types', b: 'Integer, real (float), Boolean and character or string.' },
      { n: 6, f: 'What kinds of question does Paper 2 ask on programming?', b: 'Code reading (predicting the output of code or pseudocode), code writing (a short program or function to a specification) and finding or fixing errors, answered in Java or Python.' },
    ]),
    ...sub(TB, 'ib-dp-computer-science-b-3', 'B.3', [
      { n: 1, f: 'Class vs object', b: 'A class is a template defining the attributes (data) and methods (behaviour) of a type of object. An object is one instance of a class, with its own attribute values.' },
      { n: 2, f: 'What is a constructor?', b: 'A special method that runs when an object is created (instantiated) and sets its initial attribute values.' },
      { n: 3, f: 'What is encapsulation?', b: 'Bundling data with the methods that act on it and hiding the data from outside the class, usually with private attributes accessed through public methods (getters and setters).' },
      { n: 4, f: 'What is inheritance?', b: 'A subclass takes on the attributes and methods of a superclass and can add its own or override them, so tested code is reused.' },
      { n: 5, f: 'What is polymorphism?', b: 'The same method name behaving differently depending on the object it is called on, e.g. a subclass overriding a superclass method.' },
      { n: 6, f: 'What does a UML class diagram show?', b: 'Each class as a box with its name, attributes and methods, with visibility marks (+ public, − private), and lines showing relationships such as inheritance between classes.' },
    ]),
    ...sub(TB, 'ib-dp-computer-science-b-4', 'B.4', [
      { n: 1, f: 'What is an abstract data type?', b: 'A data type defined by its values and the operations allowed on it, not by how it is implemented. B.4 is HL only.' },
      { n: 2, f: 'What is a linked list?', b: 'A dynamic structure of nodes, each holding data and a pointer to the next node; the last points to null. Nodes can be added or removed by changing pointers, without shifting other items.' },
      { n: 3, f: 'Singly vs doubly vs circular linked lists', b: 'Singly: each node points to the next. Doubly: each node points to the next and the previous. Circular: the last node points back to the first.' },
      { n: 4, f: 'What is a binary search tree?', b: 'A binary tree in which each node\'s left subtree holds smaller values and its right subtree larger values, so a search can discard half the remaining tree at each step when it is balanced.' },
      { n: 5, f: 'What is a set as an abstract data type?', b: 'An unordered collection of distinct values, with no duplicates, supporting operations such as add, remove, membership test, union and intersection.' },
      { n: 6, f: 'What is a hash table, and what is a collision?', b: 'A structure that uses a hash function to turn a key into the position where its value is stored, giving very fast look-up. A collision is when two keys hash to the same position.' },
    ]),
  ],
};
