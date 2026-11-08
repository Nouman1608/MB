/**
 * D-444 -- flashcards for AQA A-level Computer Science 7517 (2015 onwards).
 *
 * One block per subtopic, in specification order. Topics 1 and 2 itemise
 * subtopics (ids `<subtopic number>-<n>`, e.g. 4.2.3-1); topics 3-13 list no
 * subtopics in the syllabus record, so their cards sit on the topic (topicOnly
 * helper, ids `<topic number>-<n>`). Ids are permanent (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 7517); origin 'revision-notes'.
 *
 * AQA sets no pseudocode convention of its own, so code-shaped cards describe
 * the method rather than a syntax. Written from Marlbridge's own 7517 study
 * guides and revision notes. Not tiered. Plain text only (see types.ts).
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

const DS = 'aqa-a-level-computer-science-data-structures-revision-notes';

const T1 = 'fundamentals-of-programming';
const T2 = 'fundamentals-of-data-structures';

export const DECK_AQA_A_LEVEL_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'computer-science',
  syllabusCode: '7517',
  syllabusSeries: '2015-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 4.1 Fundamentals of programming
    ...sub(T1, 'programming-aqa-alevel-cs', '4.1.1', [
      { n: 1, f: 'What is the difference between a variable and a named constant?', b: 'A variable’s value can change while the program runs. A named constant’s value is fixed; naming it makes code easier to read and to update in one place.' },
      { n: 2, f: 'What are the three basic programming constructs?', b: 'Sequence (steps in order), selection (choosing a path, e.g. IF or CASE) and iteration (repetition: definite, e.g. FOR, or indefinite, e.g. WHILE).' },
      { n: 3, f: 'What is the difference between definite and indefinite iteration?', b: 'Definite: the number of repetitions is known before the loop starts (count-controlled).\nIndefinite: the loop repeats until a condition is met; the condition may be tested at the start or the end.' },
      { n: 4, f: 'What is the difference between a local and a global variable?', b: 'A local variable exists only inside the subroutine that declares it. A global variable can be accessed anywhere in the program. Local variables avoid unintended side effects.' },
      { n: 5, f: 'What is the difference between passing a parameter by value and by reference?', b: 'By value: a copy is passed, so the original is unchanged.\nBy reference: the memory address is passed, so changes affect the original.' },
      { n: 6, f: 'What is a stack frame?', b: 'The data pushed onto the call stack for each subroutine call: the return address, the parameters and the local variables.' },
      { n: 7, f: 'What is exception handling?', b: 'Code that detects an error at run time (such as a missing file or invalid input), deals with it and lets the program continue or end cleanly instead of crashing.' },
      { n: 8, f: 'What is a recursive subroutine and what must it have?', b: 'A subroutine that calls itself. It needs a base case (stopping condition) that is reached after a finite number of calls; otherwise the stack overflows.' },
    ]),
    ...sub(T1, 'programming-paradigms-aqa-alevel-cs', '4.1.2', [
      { n: 1, f: 'What is the procedural-oriented paradigm?', b: 'A program is a sequence of instructions grouped into subroutines (procedures and functions), with the problem solved by stepwise refinement into a hierarchy of modules.' },
      { n: 2, f: 'What are a class, an object and instantiation?', b: 'Class: a template defining attributes and methods.\nObject: an instance of a class.\nInstantiation: creating an object from a class, using its constructor.' },
      { n: 3, f: 'What is encapsulation?', b: 'Combining an object’s attributes and methods, with the attributes kept private and accessed only through public methods.' },
      { n: 4, f: 'What is inheritance?', b: 'A subclass takes on the attributes and methods of its superclass and can add or override its own: an “is a” relationship.' },
      { n: 5, f: 'What is the difference between aggregation and composition?', b: 'Both are “has a” relationships. Composition: the contained object is destroyed when its container is destroyed. Aggregation: the contained object can exist on its own.' },
      { n: 6, f: 'What is polymorphism and what is overriding?', b: 'Polymorphism: the same method name behaves differently depending on the object’s class.\nOverriding: a subclass replaces a method it has inherited with its own version.' },
      { n: 7, f: 'What are the three OOP design principles in the AQA specification?', b: 'Encapsulate what varies; favour composition over inheritance; program to interfaces, not implementation.' },
    ]),

    // 4.2 Fundamentals of data structures
    ...sub(T2, 'data-structures-7517', '4.2.1.1', [
      { n: 1, f: 'What is a data structure?', b: 'A way of organising, storing and accessing data so that it can be used efficiently for a given task.', src: DS },
      { n: 2, f: 'What is the difference between a static and a dynamic data structure?', b: 'Static: fixed size, set when it is created (e.g. an array).\nDynamic: grows and shrinks as the program runs, using memory from the heap (e.g. a linked list).' },
      { n: 3, f: 'What are the advantages and drawbacks of static and dynamic structures?', b: 'Static: no pointers needed and memory is known in advance, but space may be wasted or run out.\nDynamic: uses only the memory needed, but pointers take space and memory can run out at run time.' },
    ]),
    ...sub(T2, 'single-and-multi-dimensional-arrays-7517', '4.2.1.2', [
      { n: 1, f: 'What does a 1-D array represent, and what does a 2-D array represent?', b: 'A 1-D array is useful for a vector (a single ordered list, one index). A 2-D array is useful for a matrix (rows and columns, two indices).' },
      { n: 2, f: 'What is an n-dimensional array?', b: 'A set of elements of the same data type, indexed by a tuple of n integers (one index per dimension).' },
      { n: 3, f: 'What is the difference between an array’s dimensionality and its size?', b: 'Dimensionality: how many indices locate one element. Size: how many elements it holds in total. A 7 × 3 array is 2-D and holds 21 elements.' },
    ]),
    ...sub(T2, 'fields-records-and-files-7517', '4.2.1.3', [
      { n: 1, f: 'What are a field, a record and a file?', b: 'Field: one item of data about something (e.g. Surname).\nRecord: a set of related fields about one item.\nFile: a collection of records stored in secondary storage.' },
      { n: 2, f: 'What is the difference between a text file and a binary file?', b: 'A text file stores data as characters and can be read in a text editor. A binary file stores data in the same binary form as in memory (e.g. records of integers and reals) and is not human-readable.' },
      { n: 3, f: 'What are the steps to read data from a file in a program?', b: 'Open the file for reading, read records in a loop until the end of file is reached, then close the file.' },
    ]),
    ...sub(T2, 'abstract-data-types-data-structures-7517', '4.2.1.4', [
      { n: 1, f: 'What is an abstract data type?', b: 'A data type defined by the values it holds and the operations on it, without saying how it is implemented.' },
      { n: 2, f: 'Name the abstract data types in the AQA A-level specification.', b: 'Queue, stack, graph, tree, hash table, dictionary and vector.' },
      { n: 3, f: 'Why is the idea of an abstract data type useful?', b: 'Programs can use the operations (e.g. push and pop) without depending on the implementation, so the implementation can change without changing the code that uses it.' },
    ]),
    ...sub(T2, 'queues-7517', '4.2.2', [
      { n: 1, f: 'How does a queue work?', b: 'First in, first out (FIFO): items are added at the rear (enqueue) and removed from the front (dequeue).' },
      { n: 2, f: 'What is the difference between a linear and a circular queue?', b: 'Linear: front and rear pointers only move forward, so freed space at the start of the array is not reused.\nCircular: the rear wraps round to the start of the array when it reaches the end, reusing space.' },
      { n: 3, f: 'What is a priority queue?', b: 'A queue in which each item has a priority; items with higher priority are removed first, and items of equal priority leave in FIFO order.' },
      { n: 4, f: 'What should enqueue and dequeue check first?', b: 'Enqueue: test whether the queue is full.\nDequeue: test whether the queue is empty.' },
    ]),
    ...sub(T2, 'stacks-7517', '4.2.3', [
      { n: 1, f: 'How does a stack work?', b: 'Last in, first out (LIFO): items are pushed onto and popped off the top, tracked by a top-of-stack pointer.' },
      { n: 2, f: 'What do the push, pop and peek operations do?', b: 'Push adds an item to the top. Pop removes and returns the top item. Peek returns the top item without removing it.' },
      { n: 3, f: 'What are stack overflow and stack underflow?', b: 'Overflow: pushing onto a stack that is already full.\nUnderflow: popping from an empty stack.' },
      { n: 4, f: 'Give three uses of a stack.', b: 'Storing return addresses and local variables for subroutine calls, evaluating Reverse Polish expressions, and undo operations.' },
    ]),
    ...sub(T2, 'graphs-7517', '4.2.4', [
      { n: 1, f: 'What are a graph, a weighted graph and a directed graph?', b: 'Graph: vertices (nodes) joined by edges (arcs).\nWeighted: each edge has a value such as distance.\nDirected: edges go one way only.' },
      { n: 2, f: 'What is an adjacency matrix?', b: 'A 2-D array where the entry in row i, column j shows whether there is an edge from vertex i to vertex j (or its weight).' },
      { n: 3, f: 'What is an adjacency list?', b: 'For each vertex, a list of the vertices it is joined to (with weights if weighted).' },
      { n: 4, f: 'When is an adjacency matrix better than an adjacency list?', b: 'A matrix suits a dense graph with many edges and gives quick edge look-up. A list suits a sparse graph, as it stores only the edges that exist and uses less memory.' },
    ]),
    ...sub(T2, 'trees-7517', '4.2.5', [
      { n: 1, f: 'What is a tree?', b: 'A connected, undirected graph with no cycles.' },
      { n: 2, f: 'What is a rooted tree?', b: 'A tree with one vertex chosen as the root; every edge leads away from the root, giving parent–child relationships.' },
      { n: 3, f: 'What is a binary tree?', b: 'A rooted tree in which each node has at most two children.' },
      { n: 4, f: 'What is a binary search tree used for?', b: 'Storing items in order so they can be searched quickly: every left descendant is smaller than a node and every right descendant larger.' },
    ]),
    ...sub(T2, 'hash-tables-7517', '4.2.6', [
      { n: 1, f: 'What is a hash table?', b: 'A data structure in which a hashing algorithm calculates the storage position of each item from its key, so items can be found almost immediately.' },
      { n: 2, f: 'What is a collision in a hash table?', b: 'When two different keys hash to the same position.' },
      { n: 3, f: 'How can collisions be handled?', b: 'Rehashing (e.g. store the item in the next free position, open addressing) or chaining (each position holds a list of the items that hash to it).' },
      { n: 4, f: 'What makes a good hashing algorithm?', b: 'It is quick to calculate, spreads keys evenly over the table, and produces few collisions.' },
    ]),
    ...sub(T2, 'dictionaries-7517', '4.2.7', [
      { n: 1, f: 'What is a dictionary data structure?', b: 'A collection of key–value pairs in which each value is looked up by its unique key.' },
      { n: 2, f: 'Give a use of a dictionary.', b: 'Dictionary-based compression, such as counting or storing words and their codes; or storing settings by name.' },
      { n: 3, f: 'What are the main operations on a dictionary?', b: 'Add a key–value pair, retrieve the value for a key, and delete a pair.' },
    ]),
    ...sub(T2, 'vectors-7517', '4.2.8', [
      { n: 1, f: 'How can a vector be represented?', b: 'As a list of numbers, as a function, or as a geometric point (arrow) in space. A vector over ℝ with n components is written as ℝⁿ.' },
      { n: 2, f: 'What is the result of adding two vectors and scaling a vector?', b: 'Addition gives a translation: add the components, e.g. [1, 2] + [3, 4] = [4, 6].\nScalar multiplication gives a scaling: 2 × [1, 2] = [2, 4].' },
      { n: 3, f: 'How is the dot product of two vectors calculated?', b: 'Multiply matching components and add: [1, 2] · [3, 4] = 1 × 3 + 2 × 4 = 11.' },
      { n: 4, f: 'What can the dot product be used for?', b: 'Finding the angle between two vectors, and calculating a parity bit (the dot product of the bits with a vector of 1s, over modulo 2).' },
    ]),

    // 4.3 Fundamentals of algorithms
    ...topicOnly('fundamentals-of-algorithms', '3', [
      { n: 1, f: 'How does a breadth-first traversal of a graph work?', b: 'Visit all the neighbours of the start vertex first, then their neighbours, and so on, using a queue. Finds the shortest path in an unweighted graph.' },
      { n: 2, f: 'How does a depth-first traversal of a graph work?', b: 'Go as far as possible along one branch before backtracking, using a stack (or recursion). Used for navigating a maze.' },
      { n: 3, f: 'What are the pre-order, in-order and post-order traversals of a binary tree?', b: 'Pre-order: node, left, right (copying a tree).\nIn-order: left, node, right (outputs a binary search tree in order).\nPost-order: left, right, node (emptying a tree; producing Reverse Polish).' },
      { n: 4, f: 'What is Reverse Polish notation and why is it used?', b: 'Postfix notation: the operator follows its operands, e.g. 3 4 + for 3 + 4. No brackets are needed, and it is easily evaluated with a stack.' },
      { n: 5, f: 'What are the time complexities of linear search, binary search and binary tree search?', b: 'Linear search: O(n).\nBinary search: O(log n).\nBinary tree search: O(log n) for a balanced tree.' },
      { n: 6, f: 'How does a merge sort work, and what is its time complexity?', b: 'Split the list into single items, then repeatedly merge pairs of sorted sublists into larger sorted lists. O(n log n).' },
      { n: 7, f: 'What is the time complexity of bubble sort?', b: 'O(n²): each pass compares adjacent pairs, and up to n passes may be needed.' },
      { n: 8, f: 'What does Dijkstra’s algorithm do?', b: 'Finds the shortest path from a start vertex to every other vertex in a weighted graph (with no negative weights), using a priority queue.' },
    ]),

    // 4.4 Theory of computation
    ...topicOnly('theory-of-computation-7517', '4', [
      { n: 1, f: 'What is a finite state machine (FSM)?', b: 'A model of computation with a finite set of states, a start state, inputs and transitions between states. An FSM with no output can accept or reject input strings.' },
      { n: 2, f: 'What is a Mealy machine?', b: 'A finite state machine with outputs, where each output is determined by the current state and the input (shown on the transitions).' },
      { n: 3, f: 'What is a regular expression? What do *, + and ? mean?', b: 'A way of describing a set of strings (a regular language).\n* : zero or more of the previous item.\n+ : one or more.\n? : zero or one.\n| separates alternatives.' },
      { n: 4, f: 'What is a Turing machine?', b: 'A theoretical model of computation: a finite state machine with a read/write head on an infinitely long tape divided into cells, moving one cell left or right per step according to its transition rules.' },
      { n: 5, f: 'What is a universal Turing machine?', b: 'A Turing machine that can simulate any other Turing machine by reading that machine’s description and its input from the tape: the idea behind the stored-program computer.' },
      { n: 6, f: 'What is the Halting problem?', b: 'The problem of deciding, for any program and input, whether the program will eventually stop. It has been proved that no algorithm can solve it: some problems are not computable.' },
      { n: 7, f: 'What is the difference between tractable and intractable problems?', b: 'Tractable: can be solved in polynomial time or better.\nIntractable: solvable in theory, but no polynomial-time algorithm is known, so heuristic methods are used for large inputs.' },
      { n: 8, f: 'Why is Backus–Naur Form (BNF) needed as well as regular expressions?', b: 'Some languages, such as those with nested structures, cannot be described by regular expressions. BNF can define them, including recursive rules, so it is used to define programming language syntax.' },
      { n: 9, f: 'What is the order of complexity of an algorithm that halves the problem each step?', b: 'Logarithmic, O(log n), as in binary search. Constant O(1) < logarithmic < linear O(n) < polynomial O(n²) < exponential O(2ⁿ).' },
    ]),

    // 4.5 Fundamentals of data representation
    ...topicOnly('fundamentals-of-data-representation', '5', [
      { n: 1, f: 'What is the difference between kibi and kilo prefixes?', b: 'Kibi (Ki) = 2¹⁰ = 1024; mebi (Mi) = 2²⁰; gibi (Gi) = 2³⁰.\nKilo (k) = 10³ = 1000; mega = 10⁶; giga = 10⁹.' },
      { n: 2, f: 'How do you represent a negative number in two’s complement?', b: 'Write the positive value in binary, invert all the bits and add 1. The most significant bit has a negative place value (−128 in 8 bits).' },
      { n: 3, f: 'What is the difference between fixed point and floating point binary?', b: 'Fixed point: the binary point is in a set position, giving fixed precision and a limited range.\nFloating point: a mantissa and an exponent, giving a much greater range for the same bits.' },
      { n: 4, f: 'Why is a floating-point number normalised?', b: 'To give the maximum precision for the number of bits: the mantissa starts 01 for a positive number or 10 for a negative one.' },
      { n: 5, f: 'What is the difference between absolute and relative error?', b: 'Absolute error: the difference between the true value and the stored value.\nRelative error: the absolute error divided by the true value.' },
      { n: 6, f: 'How do majority voting and check digits detect errors?', b: 'Majority voting: each bit is sent three times and the receiver takes the value that appears most often.\nCheck digit: a digit calculated from the others and added to the end, recalculated to check the number.' },
      { n: 7, f: 'What does Nyquist’s theorem state?', b: 'To reproduce a sound accurately, the sampling rate must be at least twice the highest frequency in the sound.' },
      { n: 8, f: 'What is MIDI and what are its advantages?', b: 'Musical Instrument Digital Interface: music stored as event messages (note on/off, pitch, duration, instrument), not samples. Files are much smaller and easy to edit, but cannot store vocals.' },
      { n: 9, f: 'What is the Vernam cipher, and why is it called perfectly secure?', b: 'Each character is XORed with a character of a random key (one-time pad) at least as long as the message, used only once. The ciphertext gives no information about the plaintext.' },
      { n: 10, f: 'How do run-length encoding and dictionary-based compression work?', b: 'RLE: a run of repeated values is stored as one value and a count.\nDictionary-based: repeated patterns are stored once in a dictionary and replaced in the data by their codes. Both are lossless.' },
    ]),

    // 4.6 Fundamentals of computer systems
    ...topicOnly('fundamentals-of-computer-systems', '6', [
      { n: 1, f: 'What is the difference between system software and application software?', b: 'System software runs and manages the computer (operating systems, utilities, libraries, translators). Application software performs tasks for the user.' },
      { n: 2, f: 'What is the role of an operating system?', b: 'It hides the complexity of the hardware from the user and manages resources: processor scheduling, memory, input/output devices and files.' },
      { n: 3, f: 'What is the difference between low-level and high-level languages?', b: 'Low-level (machine code, assembly) is close to the processor’s instruction set. High-level languages use English-like statements, are portable between processors and are easier to write and debug.' },
      { n: 4, f: 'What is the difference between a compiler, an interpreter and an assembler?', b: 'Compiler: translates the whole high-level program into object code before it runs.\nInterpreter: translates and runs one statement at a time.\nAssembler: translates assembly language into machine code.' },
      { n: 5, f: 'What is bytecode?', b: 'An intermediate code produced by a compiler that is then run by a virtual machine (interpreter) on the target computer, so the same code is platform-independent.' },
      { n: 6, f: 'What are the truth conditions for NAND, NOR and XOR?', b: 'NAND: 1 unless both inputs are 1.\nNOR: 1 only if both inputs are 0.\nXOR: 1 if the inputs differ.' },
      { n: 7, f: 'What are the outputs of a half adder?', b: 'Sum = A XOR B; Carry = A AND B.' },
      { n: 8, f: 'What does an edge-triggered D-type flip-flop do?', b: 'It stores one bit: on the rising edge of the clock the output takes the value of the D input and holds it until the next clock edge. Used to build registers and memory.' },
      { n: 9, f: 'State De Morgan’s laws.', b: 'NOT (A AND B) = NOT A OR NOT B\nNOT (A OR B) = NOT A AND NOT B' },
    ]),

    // 4.7 Fundamentals of computer organisation and architecture
    ...topicOnly('fundamentals-of-computer-organisation-and-architecture', '7', [
      { n: 1, f: 'What is the stored program concept?', b: 'Machine-code instructions are stored in main memory and are fetched and executed serially by a processor that carries out arithmetic and logical operations.' },
      { n: 2, f: 'What is the difference between Von Neumann and Harvard architecture?', b: 'Von Neumann: instructions and data share one memory and bus.\nHarvard: separate memories and buses for instructions and data, so both can be fetched at once; used in embedded systems and digital signal processors.' },
      { n: 3, f: 'What do the program counter, MAR, MBR and CIR hold?', b: 'PC: address of the next instruction.\nMAR: address to be read or written.\nMBR: data or instruction just read or to be written.\nCIR: the instruction being decoded and executed.' },
      { n: 4, f: 'What are the steps of the fetch-execute cycle?', b: 'Fetch: copy PC to MAR; read memory into the MBR; increment PC; copy MBR to CIR.\nDecode: the control unit decodes the opcode.\nExecute: the instruction is carried out.' },
      { n: 5, f: 'What is the difference between immediate and direct addressing?', b: 'Immediate: the operand is the value to use.\nDirect: the operand is the memory address holding the value.' },
      { n: 6, f: 'What are the opcode and the operand of an instruction?', b: 'The opcode gives the operation (and addressing mode). The operand is the data or address it acts on.' },
      { n: 7, f: 'Which factors affect processor performance?', b: 'Number of cores, cache memory size, clock speed, word length, and the width of the address and data buses.' },
      { n: 8, f: 'How does an RFID tag work?', b: 'A reader sends radio waves that power a passive tag’s chip (or an active tag has its own battery); the tag transmits its stored data back to the reader by radio.' },
      { n: 9, f: 'How does a solid-state drive store data, compared with a hard disk?', b: 'An SSD stores charge in NAND flash memory cells, with no moving parts, so access is faster. A hard disk uses magnetised regions on spinning platters read by a moving head, which is slower but cheaper per gigabyte.' },
    ]),

    // 4.8 Consequences of uses of computing
    ...topicOnly('consequences-of-uses-of-computing', '8', [
      { n: 1, f: 'Why do computers raise new moral, ethical, legal and cultural issues?', b: 'They can collect, store, analyse and share huge amounts of personal data quickly and cheaply, so decisions by software developers can affect very many people.' },
      { n: 2, f: 'Why is it hard for legislation to keep up with computing?', b: 'Technology changes faster than laws are made, and the internet crosses national borders, so it is hard to decide which country’s laws apply and to enforce them.' },
      { n: 3, f: 'What are the arguments about monitoring behaviour online?', b: 'For: helps prevent crime and terrorism. Against: invades privacy, can be misused, and data can be leaked or used without consent.' },
      { n: 4, f: 'How can algorithms embed bias?', b: 'If they are trained on biased data or designed with biased assumptions, automated decisions (e.g. in recruitment or credit) can treat groups unfairly, often without anyone noticing.' },
      { n: 5, f: 'Who is responsible when software causes harm?', b: 'A key ethical question: developers, the organisations that deploy software and users all bear some responsibility, which is why professional codes of conduct and testing matter.' },
    ]),

    // 4.9 Fundamentals of communication and networking
    ...topicOnly('fundamentals-of-communication-and-networking', '9', [
      { n: 1, f: 'What is the difference between serial and parallel transmission?', b: 'Serial: bits sent one after another along a single wire.\nParallel: several bits sent at once on separate wires. Serial is used over longer distances because parallel suffers from skew and crosstalk.' },
      { n: 2, f: 'What is the difference between baud rate and bit rate?', b: 'Baud rate: the number of signal changes per second.\nBit rate: the number of bits sent per second. Bit rate can exceed baud rate when each signal change encodes more than one bit.' },
      { n: 3, f: 'What are start and stop bits used for?', b: 'In asynchronous serial transmission, a start bit tells the receiver a byte is coming and a stop bit marks its end, so sender and receiver keep in step.' },
      { n: 4, f: 'How does CSMA/CA with RTS/CTS work on WiFi?', b: 'A device listens and transmits only when the channel is free. With RTS/CTS it sends a Request to Send and waits for the access point’s Clear to Send before transmitting.' },
      { n: 5, f: 'What are the four layers of the TCP/IP stack?', b: 'Application (e.g. HTTP), Transport (TCP: splits data into numbered segments and adds port numbers), Network (IP: adds IP addresses and routes packets), Link (adds MAC addresses for the physical network).' },
      { n: 6, f: 'What is a socket?', b: 'The combination of an IP address and a port number, which identifies one end of a connection to a particular process on a host.' },
      { n: 7, f: 'What does network address translation (NAT) do?', b: 'It lets devices with private IP addresses share one public IP address: the router replaces the private address with its public one on outgoing packets and keeps a table to route replies back.' },
      { n: 8, f: 'What does DHCP do?', b: 'Dynamic Host Configuration Protocol automatically gives a device an IP address (and settings such as the gateway) from a pool when it joins a network.' },
      { n: 9, f: 'What is a subnet mask used for?', b: 'ANDing an IP address with the subnet mask gives the network identifier, showing whether another host is on the same subnet or must be reached through a router.' },
      { n: 10, f: 'What is the difference between JSON and XML for data exchange?', b: 'Both are text formats. JSON is shorter, easier for people to read and quicker for computers to parse. XML is more verbose but allows more complex structures and validation.' },
      { n: 11, f: 'What is the difference between symmetric and asymmetric encryption?', b: 'Symmetric: one shared key encrypts and decrypts.\nAsymmetric: data encrypted with the recipient’s public key can only be decrypted with their private key.' },
    ]),

    // 4.10 Fundamentals of databases
    ...topicOnly('fundamentals-of-databases', '10', [
      { n: 1, f: 'What are an entity, an attribute and a relationship?', b: 'Entity: something about which data is stored (e.g. Student).\nAttribute: a property of an entity (e.g. DateOfBirth).\nRelationship: a link between entities (one-to-one, one-to-many, many-to-many).' },
      { n: 2, f: 'What are a primary key, a composite key and a foreign key?', b: 'Primary key: uniquely identifies each record.\nComposite key: a primary key made of two or more attributes.\nForeign key: an attribute that is the primary key of another table, linking the two.' },
      { n: 3, f: 'Why are databases normalised?', b: 'To remove data redundancy and so avoid update, insertion and deletion anomalies, keeping data consistent. A database in third normal form has attributes that depend on the key, the whole key and nothing but the key.' },
      { n: 4, f: 'Write an SQL query to list names of students in Year 12, sorted by name.', b: 'SELECT Name FROM Student WHERE Year = 12 ORDER BY Name;' },
      { n: 5, f: 'What do the SQL statements INSERT, UPDATE and DELETE do?', b: 'INSERT INTO adds a new record.\nUPDATE … SET … WHERE changes values in existing records.\nDELETE FROM … WHERE removes records.' },
      { n: 6, f: 'What problem arises when two users update the same record at once in a client-server database?', b: 'Lost update: one user’s change overwrites the other’s. It is prevented by record locking, serialisation, timestamp ordering or commitment ordering.' },
      { n: 7, f: 'What is record locking?', b: 'When one transaction is updating a record, the record is locked so no other transaction can change it until the first is finished. It can cause deadlock if two transactions wait for each other.' },
    ]),

    // 4.11 Big Data
    ...topicOnly('big-data', '11', [
      { n: 1, f: 'What is Big Data?', b: 'Data that will not fit on a single server and is too large or complex for a conventional relational database, described by volume, velocity and variety.' },
      { n: 2, f: 'What do volume, velocity and variety mean for Big Data?', b: 'Volume: too much data for one server.\nVelocity: data arrives, and must be processed, very quickly (often streamed).\nVariety: many types of data, often unstructured (text, images, video).' },
      { n: 3, f: 'Why is Big Data processed across many machines?', b: 'One machine cannot store or process it fast enough, so the work is split across a cluster of servers working in parallel.' },
      { n: 4, f: 'Why is functional programming suited to distributed processing of Big Data?', b: 'Functions have no side effects and data is immutable, so parts of the work can run in parallel on different machines without interfering with each other.' },
      { n: 5, f: 'What is the fact-based model for representing data?', b: 'Each fact holds one piece of information and is immutable and timestamped; facts are never overwritten, so the history is kept.' },
      { n: 6, f: 'What is a graph schema?', b: 'A way of showing the structure of a dataset as a graph: nodes for entities, edges for the relationships between them, and properties stored on the nodes.' },
    ]),

    // 4.12 Fundamentals of functional programming
    ...topicOnly('fundamentals-of-functional-programming', '12', [
      { n: 1, f: 'What is a function in functional programming?', b: 'A rule that maps each value in its domain to a value in its co-domain, written f: A → B. It has no side effects: the same input always gives the same output.' },
      { n: 2, f: 'What does it mean that functions are first-class objects?', b: 'They can be assigned to variables, passed as arguments, and returned as the results of other functions.' },
      { n: 3, f: 'What is a higher-order function?', b: 'A function that takes a function as an argument, returns a function, or both. Examples: map, filter and reduce (fold).' },
      { n: 4, f: 'What do map, filter and reduce (fold) do?', b: 'Map: applies a function to every item of a list, giving a new list.\nFilter: keeps the items that meet a condition.\nReduce/fold: combines the items into one value using a function, e.g. a sum.' },
      { n: 5, f: 'What is partial function application?', b: 'Fixing some of a function’s arguments to produce a new function of the remaining arguments, e.g. add 3 gives a function that adds 3 to its argument.' },
      { n: 6, f: 'What is function composition?', b: 'Combining two functions so that the output of one becomes the input of the other: g ∘ f means apply f, then g.' },
      { n: 7, f: 'What are the head and tail of a list?', b: 'Head: the first element. Tail: the list of everything after the first element. Head of [4, 3, 5] is 4; tail is [3, 5].' },
    ]),

    // 4.13 Systematic approach to problem solving
    ...topicOnly('systematic-approach-to-problem-solving-7517', '13', [
      { n: 1, f: 'What happens in the analysis stage?', b: 'The problem is defined and the requirements are established with the client and users, often by interview and observation, and agreed as measurable objectives. A data model may be produced.' },
      { n: 2, f: 'What happens in the design stage?', b: 'Plans are made for the solution: data structures, algorithms, modular structure, the user interface, and the testing strategy.' },
      { n: 3, f: 'Why is prototyping and agile development useful?', b: 'Working versions are shown to users early and often, so feedback can be used to refine the requirements and design as development proceeds.' },
      { n: 4, f: 'What are normal, boundary and erroneous test data?', b: 'Normal: typical valid data, should be accepted.\nBoundary: values on and just beyond the limits.\nErroneous: invalid data, should be rejected.' },
      { n: 5, f: 'What happens in the evaluation stage?', b: 'The finished system is judged against the original requirements and objectives, with feedback from users, and possible improvements are identified.' },
    ]),
  ],
};
