/**
 * D-444 -- flashcards for OxfordAQA International AS and A-level Computer
 * Science 9645 (2024 onwards).
 *
 * Topic 2 itemises subtopics 3.2.1-3.2.4 in syllabus-topics.ts, so its cards
 * use `<subtopic number>-<n>` (e.g. 3.2.3-1). The other 15 topics itemise
 * none, so their cards hang on the topic (topicOnly helper) and use
 * `<topic number>-<n>`. Ids are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * Not tiered (AS covers topics 1-8, the full A-level all 16; that staging is
 * not a tier). Written from Marlbridge's own 9645 revision notes and study
 * guides, which use Python as the example language. Code is written in words
 * where the card's plain-text rules forbid the symbol (Haskell's back-quoted
 * div and mod).
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9645); origin 'revision-notes'.
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

const T2 = 'fundamental-data-structures';
const PROC = 'a-computer-science-procedural-revision-notes';
const ARR = 'oxfordaqa-a-level-computer-science-arrays-lists-revision-notes';

export const DECK_OXFORDAQA_A_LEVEL_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'computer-science',
  syllabusCode: '9645',
  syllabusSeries: '2024-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Procedural programming
    ...topicOnly('procedural-programming', 1, [
      { n: 1, f: 'Procedure vs function', b: 'A procedure carries out a task and returns nothing. A function returns a value.' },
      { n: 2, f: 'Parameter vs argument', b: 'Parameters appear in the subroutine definition. Arguments are the actual values passed when it is called.' },
      { n: 3, f: 'Passing by value vs by reference', b: 'By value: a copy is passed, so the original is unaffected. By reference: the address is passed, so the original can be changed.', src: PROC },
      { n: 4, f: 'Why prefer local variables and passing by value?', b: 'They prevent side effects, where one subroutine unintentionally alters data another depends on, and make each subroutine independently testable.' },
      { n: 5, f: 'What does a recursive subroutine need?', b: 'A base case that stops the recursion, and a general (recursive) case that moves towards the base case.' },
      { n: 6, f: 'Why can deep recursion cause a stack overflow?', b: 'Each unfinished call is held on the call stack with its own local variables and return address. Too many calls, or no base case, fill the stack.' },
      { n: 7, f: 'Recursion vs iteration', b: 'Recursion is more elegant for tree and divide-and-conquer problems, but uses more memory and is usually slower because of stack overhead. Any recursive algorithm can be rewritten iteratively.' },
      { n: 8, f: 'Syntax vs logic vs runtime errors', b: 'Syntax: breaks the language rules, so the program will not run. Logic: it runs but gives the wrong output, the hardest to find. Runtime: it fails during execution, e.g. division by zero.' },
      { n: 9, f: 'White box vs black box testing', b: 'White box testing tests every path through the code. Black box testing checks inputs against expected outputs without knowledge of the code. Regression testing re-runs earlier tests after a change.' },
    ]),

    // 2 Fundamental data structures
    ...sub(T2, 'arrays-and-lists-oxfordaqa-alevel-cs', '3.2.1', [
      { n: 1, f: 'Static vs dynamic data structures', b: 'Static: fixed size at creation, giving fast, predictable indexed access, but wasting memory if oversized or failing if undersized. Dynamic: grows and shrinks while the program runs, at the cost of resizing overhead.', src: ARR },
      { n: 2, f: 'Is a Python list static or dynamic?', b: 'Dynamic: it grows and shrinks as the program runs. Python has no built-in array type; the array module and numpy provide arrays.', src: ARR },
      { n: 3, f: 'Would you use a static or dynamic structure for a year of daily temperatures, and for game high scores?', b: 'Temperatures: static, because the count (365 or 366) is known and fixed. High scores: dynamic, because the count is unknown and growing.' },
      { n: 4, f: 'What is a two-dimensional array or list of lists?', b: 'A structure indexed by two coordinates, usually row and column, used for tabular or grid data. E.g. seating[2][5] is row index 2, seat index 5. Exam questions use no more than two dimensions.' },
    ]),
    ...sub(T2, 'records-oxfordaqa-alevel-cs', '3.2.2', [
      { n: 1, f: 'What is a record?', b: 'A data structure holding fields of different data types about one entity, handled as a single item, e.g. a student with a name (string), age (integer) and fees paid (Boolean).' },
      { n: 2, f: 'Record vs array', b: 'A record groups fields of different types about one entity, accessed by field name. An array holds items of the same type, accessed by index.' },
      { n: 3, f: 'How can a record be stored in Python?', b: 'Python has no record type, so a class (or data class) with one attribute per field is commonly used, or a dictionary with one key per field. A list of records holds many entities.' },
    ]),
    ...sub(T2, 'queues-oxfordaqa-alevel-cs', '3.2.3', [
      { n: 1, f: 'What is a queue?', b: 'A first in, first out (FIFO) structure: items are added (enqueued) at the rear and removed (dequeued) from the front.' },
      { n: 2, f: 'Give three uses of queues', b: 'Print spooling, process scheduling, keyboard and data buffers, and breadth-first search.' },
      { n: 3, f: 'Linear vs circular queue in a one-dimensional array', b: 'In a linear queue the front moves along as items leave, so space at the start is wasted. In a circular queue the rear pointer wraps round to the start, reusing freed space.' },
      { n: 4, f: 'Which tests and pointers does an array-based queue need?', b: 'Front and rear pointers (and usually a count). Test for empty before dequeuing and for full before enqueuing.' },
    ]),
    ...sub(T2, 'stacks-oxfordaqa-alevel-cs', '3.2.4', [
      { n: 1, f: 'What is a stack?', b: 'A last in, first out (LIFO) structure: items are pushed onto and popped off the top.' },
      { n: 2, f: 'Push vs pop vs peek', b: 'Push adds an item to the top. Pop removes and returns the top item. Peek returns the top item without removing it.' },
      { n: 3, f: 'Give three uses of stacks', b: 'The call stack for subroutines, undo in an application, evaluating expressions, and depth-first search.' },
      { n: 4, f: 'Stack overflow vs stack underflow', b: 'Overflow: trying to push onto a full stack. Underflow: trying to pop from an empty stack. Check full before pushing and empty before popping.' },
    ]),

    // 3 Program design
    ...topicOnly('program-design-9645', 3, [
      { n: 1, f: 'What is the structured approach to program design?', b: 'Designing and building a program from separate modules, passing data by parameters and return values, and using local (or block scope) variables.' },
      { n: 2, f: 'Hierarchy chart vs structure chart', b: 'Both show the modules and which module calls which. Only a structure chart also shows the data passed between modules: parameters down, return values up.' },
      { n: 3, f: 'Abstraction vs decomposition', b: 'Abstraction removes unnecessary detail ("what can I leave out?"). Decomposition breaks a problem into sub-problems, each doing an identifiable task ("what smaller jobs is this made of?").' },
      { n: 4, f: 'What is an algorithm?', b: 'A sequence of steps that can be followed to complete a task and that always terminates.' },
      { n: 5, f: 'What is the critical path in software development?', b: 'The part of a solution that everything else depends on. Implementation may be iterative, solving the critical path first.' },
      { n: 6, f: 'Normal, boundary and erroneous test data', b: 'Normal: typical valid data that should be accepted. Boundary: values at the edges of the valid range and just outside them. Erroneous: data that should be rejected.' },
      { n: 7, f: 'Name the five aspects of software development', b: 'Analysis, design, implementation, testing and evaluation.' },
      { n: 8, f: 'Name three criteria for evaluating a system', b: 'Correctness, efficiency and maintainability.' },
    ]),

    // 4 Searching and sorting algorithms
    ...topicOnly('searching-and-sorting-algorithms', 4, [
      { n: 1, f: 'Linear search vs binary search', b: 'Linear checks each item in turn from the start; the list can be in any order. Binary repeatedly checks the middle item of an ordered list and discards the half that cannot hold the target.' },
      { n: 2, f: 'How do worst-case comparisons grow for linear and binary search?', b: 'Linear: in step with the list length. Binary: by just one each time the list length doubles.' },
      { n: 3, f: 'How does a bubble sort work?', b: 'It repeatedly compares adjacent pairs and swaps any in the wrong order. One sweep through the list is a pass.' },
      { n: 4, f: 'What are the two improvements to the basic bubble sort?', b: 'Check one fewer item on each pass (the end is already sorted), and stop after a pass with no swaps.' },
      { n: 5, f: 'How does merge sort work?', b: 'Split the list into single-item lists, then repeatedly merge sorted lists in pairs until one list remains.' },
      { n: 6, f: 'Bubble sort vs merge sort: time and memory', b: 'Bubble sort is slow on large unsorted lists but sorts in place with one temporary variable and stops early on a nearly sorted list. Merge sort is much faster on large lists but needs extra memory for the sub-lists.' },
      { n: 7, f: 'Give the best and worst Big O for linear search, binary search and bubble sort', b: 'Linear search O(1) best, O(n) worst. Binary search O(1) best, O(log n) worst. Bubble sort O(n) best, O(n²) worst. Merge sort is O(n log n). (Big O is International A-level only.)' },
      { n: 8, f: 'Definite vs indefinite iteration', b: 'Definite iteration runs a fixed number of times (FOR). Indefinite iteration runs until a condition is met (WHILE).' },
    ]),

    // 5 Representing data
    ...topicOnly('representing-data', 5, [
      { n: 1, f: 'What range can n bits represent unsigned and in two\'s complement?', b: 'Unsigned: 0 to 2ⁿ − 1. Two\'s complement: −2ⁿ⁻¹ to +2ⁿ⁻¹ − 1. For 8 bits: 0 to 255, or −128 to +127.' },
      { n: 2, f: 'Binary vs decimal prefixes', b: 'Binary: Ki = 2¹⁰, Mi = 2²⁰, Gi = 2³⁰, Ti = 2⁴⁰. Decimal: k = 10³, M = 10⁶, G = 10⁹, T = 10¹².' },
      { n: 3, f: 'How do you subtract using two\'s complement?', b: 'a − b = a + (the two\'s complement of b). Ignore any carry out of the leftmost bit.' },
      { n: 4, f: 'What are the mantissa and exponent of a floating point number?', b: 'The mantissa holds the significant digits; the exponent is the power of 2 the mantissa is multiplied by. Value = mantissa × 2^exponent.' },
      { n: 5, f: 'Why normalise a floating point number?', b: 'Each value then has one unique representation, and no mantissa bits are wasted on leading 0s (or 1s), so precision is as high as the format allows.' },
      { n: 6, f: 'Overflow vs underflow', b: 'Overflow: a result too large to be represented in the available bits. Underflow: a result so close to zero that its closest representation is zero.' },
      { n: 7, f: 'Absolute vs relative error', b: 'Absolute error: the stored value minus the true value, ignoring sign. Relative error: the absolute error divided by the true value.' },
      { n: 8, f: 'What does the Nyquist theorem say?', b: 'The sampling rate must be at least twice the highest frequency in the signal.' },
      { n: 9, f: 'Perfect security vs computational security', b: 'Perfect security (e.g. the Vernam cipher): nothing can be learned about the plaintext from the ciphertext. Computationally secure: cracking it takes an unfeasible time or has a very low chance of success.' },
      { n: 10, f: 'Where do the ASCII codes for digits, upper-case and lower-case letters start?', b: 'Digits from 48, upper-case letters from 65 and lower-case letters from 97. ASCII is a 7-bit code with 128 characters.' },
    ]),

    // 6 Computer systems
    ...topicOnly('computer-systems-9645', 6, [
      { n: 1, f: 'Hardware vs software', b: 'Hardware is the electronic components of a computer system. Software is the sequences of instructions executed using the hardware.' },
      { n: 2, f: 'Name the four types of system software on the 9645 specification', b: 'Operating system, utility programs, libraries and translators.' },
      { n: 3, f: 'What are libraries?', b: 'Collections of pre-written, tested subroutines that programs call, so code is not rewritten and errors are reduced.' },
      { n: 4, f: 'Name four functions of an operating system', b: 'Scheduling (which process uses the processor next), memory allocation, I/O device management through device drivers, and interrupt handling.' },
      { n: 5, f: 'Low-level vs high-level languages: advantages', b: 'Low-level: direct control of hardware and registers; can be fast and use little memory. High-level: quicker to write, easier to read, debug and maintain, portable, with libraries available.' },
      { n: 6, f: 'What is an imperative high-level language?', b: 'A high-level language in which the commands describe the process to be followed to carry out a task.' },
      { n: 7, f: 'Compiler vs interpreter', b: 'A compiler translates the whole program once, before execution, producing object code that runs fast without the source. An interpreter translates and executes one statement at a time on every run, producing no object code.' },
      { n: 8, f: 'How is intermediate (byte) code run?', b: 'A virtual machine interprets it, or a just-in-time (JIT) compiler converts it into machine code for the computer it is running on.' },
      { n: 9, f: 'Source code vs object code', b: 'Source code is the program as written in a high-level or assembly language; it is not directly executable. Object (executable) code is machine code output by a compiler or assembler.' },
    ]),

    // 7 Computer organisation and architecture
    ...topicOnly('computer-organisation-and-architecture', 7, [
      { n: 1, f: 'What do the address, data and control buses carry?', b: 'Address bus: addresses, one way out of the processor. Data bus: data and instructions, two ways. Control bus: timing and command signals such as read, write, clock and interrupt.' },
      { n: 2, f: 'How much memory can 22 address lines address with 1 byte per location?', b: '2²² = 4,194,304 bytes = 4 MiB.' },
      { n: 3, f: 'What is the stored program concept?', b: 'The program sits in main memory as machine code, and the processor fetches and executes those instructions one at a time, in order.' },
      { n: 4, f: 'Von Neumann vs Harvard architecture', b: 'Von Neumann: shared memory and buses for instructions and data; simpler and cheaper, for general-purpose machines. Harvard: separate instruction and data memories and buses, accessed at once; used in embedded systems.' },
      { n: 5, f: 'What do the PC, CIR, MAR, MBR and SR hold?', b: 'PC: address of the next instruction. CIR: instruction being decoded or executed. MAR: address for the next memory read or write. MBR: value going to or from memory. SR: condition flags and interrupt-enable state.' },
      { n: 6, f: 'Describe the fetch stage of the fetch-execute cycle', b: 'The PC is copied to the MAR; the instruction at that address is read into the MBR; the PC is incremented; the MBR is copied to the CIR.' },
      { n: 7, f: 'Name six factors that affect processor performance', b: 'Number of cores, cache size, clock speed, word length, address bus width and data bus width.' },
      { n: 8, f: 'What is the cycle time of a 1.25 GHz clock?', b: 'Cycle time = 1 ÷ frequency = 1 ÷ (1.25 × 10⁹) s = 0.8 ns.' },
      { n: 9, f: 'How do a hard disk and an SSD store data?', b: 'Hard disk: spinning magnetic platters in tracks and sectors, read and written by a head on a moving arm. SSD: NAND flash cells trap charge, with no moving parts; erased in whole blocks with limited write cycles.' },
    ]),

    // 8 Machine code and assembly language
    ...topicOnly('machine-code-and-assembly-language', 8, [
      { n: 1, f: 'Opcode vs operand', b: 'The opcode says which operation to perform. The operand is the data it works on: a value, a memory address or a register.' },
      { n: 2, f: 'Why is machine code processor specific?', b: 'It is written for one processor\'s instruction set (all the instructions it can carry out), so it is not generally usable on another processor type.' },
      { n: 3, f: 'Immediate vs direct vs indirect addressing', b: 'Immediate: the operand is the value itself (MOV R0, #12). Direct: the operand is the address or register holding the value (LDR R0, 12). Indirect: a register holds the memory address (LDR R0, [R4]).' },
      { n: 4, f: 'R4 holds 70 and location 70 holds 5. What do LDR R0, [R4] and MOV R0, R4 put in R0?', b: 'LDR R0, [R4] puts 5 in R0 (indirect). MOV R0, R4 puts 70 in R0.' },
      { n: 5, f: 'LDR vs STR', b: 'LDR loads a value from memory into a register. STR stores a value from a register into memory.' },
      { n: 6, f: 'What do ORR, EOR and MVN do?', b: 'ORR is bitwise OR; EOR is bitwise XOR (exclusive OR); MVN is bitwise NOT.' },
      { n: 7, f: 'How do you clear, set and toggle chosen bits?', b: 'Clear: AND with 0s in those positions. Set: ORR with 1s in those positions. Toggle: EOR with 1s in those positions.' },
      { n: 8, f: 'What do LSL and LSR do to a value?', b: 'LSL Rd, Rn, #n shifts left n places, multiplying by 2ⁿ. LSR shifts right n places, dividing by 2ⁿ and losing the remainder. Zeros come in; bits falling off are lost.' },
      { n: 9, f: 'How does CMP work with a conditional branch?', b: 'CMP Rn, operand2 compares the two and sets up the following branch, such as BEQ, BNE, BGT or BLT, whose condition reads "Rn compared with operand2".' },
    ]),

    // 9 Object-oriented and additional programming
    ...topicOnly('object-oriented-and-additional-programming', 9, [
      { n: 1, f: 'Class vs object', b: 'A class defines the attributes and methods common to a type of object; it is written once. An object is one instance of a class, with its own attribute values.' },
      { n: 2, f: 'What are instantiation and a constructor?', b: 'Instantiation is creating an object from a class. The constructor is called on instantiation and initialises the object to a given state.' },
      { n: 3, f: 'What is encapsulation?', b: 'Hiding how a class works and how it represents data from other classes, usually by making attributes private and accessing them through methods.' },
      { n: 4, f: 'What are inheritance and overriding?', b: 'Inheritance: one class is a more specialised version of an existing class. Overriding: a base-class method is redefined in a subclass so subclass objects behave differently.' },
      { n: 5, f: 'Inheritance vs association', b: '"Is a more specialised kind of" means inheritance. "Uses" or "has a link to" means association, which is much weaker. A Ward is associated with its Patients; it is not a kind of Patient.' },
      { n: 6, f: 'Public, private and protected access modifiers', b: 'Public (+): accessible from anywhere. Private (−): the class only. Protected (#): the class and its subclasses.' },
      { n: 7, f: 'How are private and protected members written in Python?', b: 'Private: a double underscore prefix, which triggers name mangling. Protected: a single underscore prefix, which is a convention only.' },
      { n: 8, f: 'Why use the object-oriented paradigm?', b: 'It models problems as interacting objects, protects data behind methods, lets subclasses reuse tested code, and lets each class be built and tested separately.' },
    ]),

    // 10 Advanced data structures
    ...topicOnly('advanced-data-structures', 10, [
      { n: 1, f: 'Directed vs undirected vs weighted graphs', b: 'Undirected: edges work both ways. Directed: each edge points one way. Weighted: each edge has a value such as distance, time or cost.' },
      { n: 2, f: 'When is an adjacency matrix better than an adjacency list?', b: 'Matrix: when the graph is dense, or edges are often added, removed or tested. List: when the graph is sparse (few edges relative to vertices), as it stores only each vertex\'s neighbours.' },
      { n: 3, f: 'What is a tree, and what is a rooted tree?', b: 'A tree is a connected, undirected graph with no cycles; it does not need a root. A rooted tree has one vertex designated as the root, giving parent-child relationships.' },
      { n: 4, f: 'What is a binary search tree?', b: 'A binary tree (each node has at most two children) in which, at every node, smaller values are in the left subtree and larger values in the right subtree.' },
      { n: 5, f: 'What makes a good hash function?', b: 'It spreads records evenly across the table and is quick to compute. Using key MOD size keeps the result in the range 0 to size − 1.' },
      { n: 6, f: 'What is a collision, and how does rehashing deal with it?', b: 'A collision is when two keys produce the same hash. Rehashing (the specification\'s method) stores the second record in the next available position.' },
      { n: 7, f: 'Hash table vs array searched by key', b: 'A hash table calculates a record\'s position from its key, so no search is needed and inserting needs no shifting; but it needs spare space and records are not in key order. An array can be kept in order but must be searched.' },
      { n: 8, f: 'What is a priority queue?', b: 'A queue in which each item has a priority: items are removed in priority order, and items of equal priority leave in arrival order. Used in Dijkstra\'s algorithm and job scheduling.' },
      { n: 9, f: 'What is a dictionary?', b: 'A collection of key-value pairs in which each value is accessed by its key, e.g. a look-up table.' },
    ]),

    // 11 Advanced algorithms
    ...topicOnly('advanced-algorithms', 11, [
      { n: 1, f: 'Breadth-first vs depth-first search', b: 'BFS visits vertices layer by layer outwards using a queue, and finds the fewest-edge path in an unweighted graph. DFS follows one branch as far as possible then backtracks, using a stack or recursion, e.g. to navigate a maze.' },
      { n: 2, f: 'What does Dijkstra\'s algorithm find?', b: 'The shortest (lowest total weight) route from one vertex to all others in a weighted graph. At each step the unvisited vertex with the smallest total distance is picked and its distance becomes final.' },
      { n: 3, f: 'Why is BFS not used for shortest routes in a weighted graph?', b: 'BFS counts edges and ignores weights, so a route with fewer edges can still cost more.' },
      { n: 4, f: 'Give two applications of Dijkstra\'s algorithm', b: 'Satellite navigation and route planners, and routing data across networks (link-state protocols such as OSPF).' },
      { n: 5, f: 'Pre-order, in-order and post-order traversal', b: 'Pre-order: node, left, right. In-order: left, node, right. Post-order: left, right, node.' },
      { n: 6, f: 'What is each binary tree traversal used for?', b: 'Pre-order: copying a tree; prefix expressions. In-order: outputting a BST in ascending order. Post-order: postfix expressions; emptying a tree.' },
      { n: 7, f: 'What is an expression tree?', b: 'A binary tree with operators at the internal nodes and operands at the leaves. Pre-order gives prefix notation and post-order gives postfix; neither needs brackets.' },
      { n: 8, f: 'In code, how do the loop versions of BFS and DFS differ?', b: 'BFS removes from the front of the collection (a queue, e.g. popleft), while DFS removes from the end (a stack, e.g. pop).' },
    ]),

    // 12 Functional programming
    ...topicOnly('functional-programming', 12, [
      { n: 1, f: 'What do f: A → B, the domain and the co-domain mean?', b: 'f takes arguments of type A and returns results of type B. The domain (A) is the set inputs come from; the co-domain (B) is the set outputs come from, though not every member has to be output.' },
      { n: 2, f: 'What is a first-class object?', b: 'A value that may appear in expressions, be assigned to a variable, be passed as an argument and be returned from a function call. In functional languages, functions are first-class objects.' },
      { n: 3, f: 'What is function composition g ∘ f?', b: 'It combines f: A → B and g: B → C into one function of type A → C, with f applied first. The co-domain of f must match the domain of g.' },
      { n: 4, f: 'What is a higher-order function?', b: 'A function that takes a function as an argument, returns a function, or both, e.g. map, filter and fold.' },
      { n: 5, f: 'What do map, filter and fold do?', b: 'map applies a function to every element of a list. filter keeps the elements for which a condition is true. fold (foldl or foldr) combines the elements into one value, starting from a given value.' },
      { n: 6, f: 'What do head, tail and null return for the list [5, 2]?', b: 'head gives 5 (the first element). tail gives [2] (the rest, always a list). null gives False (the list is not empty).' },
      { n: 7, f: 'How does Haskell choose which equation of a function to use?', b: 'By pattern matching: it tries the equations from top to bottom and uses the first pattern that fits, such as 0, [], a name, (x:xs) for any non-empty list or [x] for a one-item list.' },
      { n: 8, f: 'How is a function applied in Haskell, and how is whole-number division written?', b: 'Arguments follow the name with spaces and no brackets or commas, e.g. name 7 2. div and mod are written between back-quotes: 17 div 5 = 3 and 17 mod 5 = 2.' },
      { n: 9, f: 'Name the number sets ℕ, ℤ, ℚ and ℝ', b: 'ℕ: natural numbers 0, 1, 2, ... (zero included). ℤ: integers. ℚ: rational numbers p/q with integers p and q. ℝ: real numbers, including π and √2.' },
    ]),

    // 13 Theory of computation
    ...topicOnly('theory-of-computation-9645', 13, [
      { n: 1, f: 'What is a finite state machine?', b: 'A machine with a fixed number of states that changes state as it reads each input symbol. Without output, the input is accepted if it ends in an accepting state.' },
      { n: 2, f: 'What is a Mealy machine?', b: 'An FSM with output, in which each output is produced on a transition; arcs are labelled input / output.' },
      { n: 3, f: 'What do *, +, ? and | mean in a regular expression?', b: '* means 0 or more repetitions; + means 1 or more; ? means 0 or 1 (optional); | means alternation (or). Brackets group a regular expression.' },
      { n: 4, f: 'Does k(o|i)+t match kt, kot and koit?', b: 'It matches kot and koit, but not kt, because + needs at least one o or i.' },
      { n: 5, f: 'What is a regular language?', b: 'A language that can be represented by a regular expression (equivalently, accepted by an FSM).' },
      { n: 6, f: 'What are the parts of a Turing machine?', b: 'A finite set of states (one start state; halting states have no outgoing transitions), a finite alphabet, a tape infinite in one direction divided into squares, and a read-write head that moves one square at a time.' },
      { n: 7, f: 'What is a universal Turing machine, and why is it important?', b: 'A Turing machine that can simulate any other, with the other machine\'s description and input stored on its tape. It shows one machine can run any program held as data, and Turing machines define what is computable.' },
      { n: 8, f: 'Tractable vs intractable problems', b: 'A tractable problem has a polynomial (or less) time solution. An intractable problem has no polynomial time solution, so heuristics may be used to find an acceptable answer.' },
      { n: 9, f: 'What is the halting problem?', b: 'The unsolvable problem of determining, without running it, whether a program will eventually stop for a given input. It shows some problems cannot be solved by any algorithm.' },
      { n: 10, f: 'What is BNF used for?', b: 'Backus-Naur form is a notation of production rules for defining the syntax of a language.' },
    ]),

    // 14 Networking and cyber security
    ...topicOnly('networking-and-cyber-security', 14, [
      { n: 1, f: 'Synchronous vs asynchronous transmission', b: 'Synchronous: a continuous data stream with sender and receiver clocks kept in step by a timing signal. Asynchronous: characters sent individually, framed by start and stop bits.' },
      { n: 2, f: 'Baud rate vs bit rate', b: 'Baud rate is the number of signal changes per second. Bit rate is the number of bits transmitted per second; it can be higher than the baud rate if each signal change carries more than one bit.' },
      { n: 3, f: 'Why is serial transmission better than parallel over long distances?', b: 'There is no skew between bits, no crosstalk between neighbouring wires, and the cable is cheaper with fewer conductors.' },
      { n: 4, f: 'Peer-to-peer vs client-server networks', b: 'Peer-to-peer: all computers equal; cheap with no dedicated server, but no central control. Client-server: servers provide services that clients request; central backups, security and user management, but server cost and a single point of failure.' },
      { n: 5, f: 'Thin client vs thick client', b: 'Thin client: processing and storage mostly on the server; cheap terminals, but a fast, reliable network is essential. Thick client: processing and storage on the local machine; lighter network load, but each machine is maintained separately.' },
      { n: 6, f: 'How does CSMA/CA with RTS/CTS work?', b: 'The sender transmits a Request to Send to the access point, which broadcasts Clear to Send; all other stations stay quiet while the data frame is sent and acknowledged. It solves the hidden-node problem.' },
      { n: 7, f: 'How can a wireless network be secured?', b: 'Use WPA2 encryption, disable SSID broadcast, and use a MAC address allow list.' },
      { n: 8, f: 'What does a packet contain, and what does time to live do?', b: 'Source and destination addresses, sequence number, time to live, payload and error detection data. TTL is reduced by 1 at each router and the packet is discarded at 0.' },
    ]),

    // 15 Databases
    ...topicOnly('databases-9645', 15, [
      { n: 1, f: 'What is a relational database?', b: 'Data held in separate tables, one per entity type, linked by common key fields.' },
      { n: 2, f: 'Primary key, composite primary key and foreign key', b: 'Primary key: attribute(s) that uniquely identify each record. Composite key: two or more attributes combined. Foreign key: a field matching another table\'s primary key, linking the two tables.' },
      { n: 3, f: 'How is a many-to-many relationship resolved?', b: 'By adding a link entity between the two, giving two one-to-many relationships, e.g. Climber and Route linked by Ascent.' },
      { n: 4, f: 'Why normalise a database?', b: 'Every fact is stored in one place, so redundant copies disappear, data stays consistent, less storage is used, and update, insertion and deletion problems are avoided.' },
      { n: 5, f: 'Give the SQL patterns for UPDATE, INSERT and DELETE', b: 'UPDATE table SET field = value WHERE condition\nINSERT INTO table (f1, f2) VALUES (v1, v2)\nDELETE FROM table WHERE condition' },
      { n: 6, f: 'What does GROUP BY do in SQL?', b: 'It groups rows that share a value so an aggregate function such as COUNT, SUM or AVG gives one result per group, e.g. SELECT field, COUNT(*) FROM table GROUP BY field.' },
      { n: 7, f: 'What is the lost update problem?', b: 'Two clients read the same record and both change it; the second save overwrites the first, so one update is lost.' },
      { n: 8, f: 'How does record locking preserve integrity?', b: 'The record is locked while one client updates it, so no other client can update it until the lock is released.' },
      { n: 9, f: 'What do volume and velocity mean for Big Data?', b: 'Volume: too much data to fit on a single server. Velocity: data arrives as a stream and responses are needed in milliseconds to seconds.' },
    ]),

    // 16 Artificial intelligence
    ...topicOnly('artificial-intelligence-9645', 16, [
      { n: 1, f: 'When is a system often called artificially intelligent?', b: 'There is no one accepted definition. A system is often called AI if it solves a complex problem using a method like a human\'s, or one at least as good as a human\'s, on problems once thought to need human intelligence.' },
      { n: 2, f: 'Narrow AI vs generally intelligent AI', b: 'Narrow AI works in one field and is what exists and is widely used today. Generally intelligent AI would learn and reason across any field; it is an area of research only.' },
      { n: 3, f: 'What is a neural network?', b: 'A network of nodes connected in a similar way to neurons in the brain. Each node takes weighted inputs and produces an output, in input, hidden and output layers.' },
      { n: 4, f: 'What is backpropagation?', b: 'A training method in which the output error is passed backwards through the network and the weights are adjusted to reduce it.' },
      { n: 5, f: 'Deep learning vs machine learning', b: 'Machine learning is a type of AI whose performance improves based on experience. Deep learning uses neural networks with several hidden layers, allowing more complex problems to be solved.' },
      { n: 6, f: 'A node gets inputs 0.6, 0.2 and 0.9 on weights 0.5, −1.5 and 0.8. What is the weighted sum?', b: '0.30 − 0.30 + 0.72 = 0.72. With a threshold of 0.7 the node outputs 1.' },
      { n: 7, f: 'How does bias arise in an AI system?', b: 'From the training data: if a group is under-represented, or the historical decisions in the data were unfair. Careful selection of data and testing each group separately reduce the risk.' },
      { n: 8, f: 'Give three benefits and three risks of AI', b: 'Benefits: more consistent decisions; very large data sets analysed quickly; continuous availability; lower cost. Risks: job losses; bias; false information from bad training data; plagiarism; surveillance.' },
    ]),
  ],
};
