/**
 * D-444 -- flashcards for AQA A-level Computer Science 7517 (2015 onwards).
 *
 * One block per subtopic, in specification order. All 13 topics itemise
 * subtopics in the syllabus record, so every card is keyed `<subtopic
 * number>-<n>` (e.g. 4.2.3-1). Topics 3-13 were first written as whole-topic
 * cards (`<topic number>-<n>`) and re-filed on 20 Nov 2026 when the syllabus
 * record gained their subtopics; `idMigration` below moves browser progress
 * saved before then onto the new ids. Ids are permanent: add a new card with
 * the next unused n, never renumber.
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

const DS = 'aqa-a-level-computer-science-data-structures-revision-notes';
const ABS = 'aqa-a-level-computer-science-7517-abstraction-and-automation-revision-notes';
const NSYS = 'aqa-a-level-computer-science-7517-number-systems-revision-notes';
const NBASE = 'aqa-a-level-computer-science-7517-number-bases-revision-notes';

const T1 = 'fundamentals-of-programming';
const T2 = 'fundamentals-of-data-structures';

export const DECK_AQA_A_LEVEL_COMPUTER_SCIENCE: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'computer-science',
  // D-484: recorded on the owner's word (16 Nov 2026), accountable teacher for this course.
  deckReview: { reviewerSlug: 'harris-khan', reviewedOn: '2026-11-16' },
  syllabusCode: '7517',
  syllabusSeries: '2015-onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  idMigration: {
    id: '7517-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '4.1.1-1': '4.1.1-1', '4.1.1-2': '4.1.1-2', '4.1.1-3': '4.1.1-3', '4.1.1-4': '4.1.1-4', '4.1.1-5': '4.1.1-5', '4.1.1-6': '4.1.1-6', '4.1.1-7': '4.1.1-7', '4.1.1-8': '4.1.1-8',
      '4.1.2-1': '4.1.2-1', '4.1.2-2': '4.1.2-2', '4.1.2-3': '4.1.2-3', '4.1.2-4': '4.1.2-4', '4.1.2-5': '4.1.2-5', '4.1.2-6': '4.1.2-6', '4.1.2-7': '4.1.2-7',
      '4.2.1.1-1': '4.2.1.1-1', '4.2.1.1-2': '4.2.1.1-2', '4.2.1.1-3': '4.2.1.1-3',
      '4.2.1.2-1': '4.2.1.2-1', '4.2.1.2-2': '4.2.1.2-2', '4.2.1.2-3': '4.2.1.2-3',
      '4.2.1.3-1': '4.2.1.3-1', '4.2.1.3-2': '4.2.1.3-2', '4.2.1.3-3': '4.2.1.3-3',
      '4.2.1.4-1': '4.2.1.4-1', '4.2.1.4-2': '4.2.1.4-2', '4.2.1.4-3': '4.2.1.4-3',
      '4.2.2-1': '4.2.2-1', '4.2.2-2': '4.2.2-2', '4.2.2-3': '4.2.2-3', '4.2.2-4': '4.2.2-4',
      '4.2.3-1': '4.2.3-1', '4.2.3-2': '4.2.3-2', '4.2.3-3': '4.2.3-3', '4.2.3-4': '4.2.3-4',
      '4.2.4-1': '4.2.4-1', '4.2.4-2': '4.2.4-2', '4.2.4-3': '4.2.4-3', '4.2.4-4': '4.2.4-4',
      '4.2.5-1': '4.2.5-1', '4.2.5-2': '4.2.5-2', '4.2.5-3': '4.2.5-3', '4.2.5-4': '4.2.5-4',
      '4.2.6-1': '4.2.6-1', '4.2.6-2': '4.2.6-2', '4.2.6-3': '4.2.6-3', '4.2.6-4': '4.2.6-4',
      '4.2.7-1': '4.2.7-1', '4.2.7-2': '4.2.7-2', '4.2.7-3': '4.2.7-3',
      '4.2.8-1': '4.2.8-1', '4.2.8-2': '4.2.8-2', '4.2.8-3': '4.2.8-3', '4.2.8-4': '4.2.8-4',
      '3-1': '4.3.1-1', '3-2': '4.3.1-2', '3-3': '4.3.2-1', '3-4': '4.3.3-1', '3-5': '4.3.4-1', '3-6': '4.3.5-1', '3-7': '4.3.5-2', '3-8': '4.3.6-1',
      '4-1': '4.4.2-1', '4-2': '4.4.2-2', '4-3': '4.4.2-3', '4-4': '4.4.5-1', '4-5': '4.4.5-2', '4-6': '4.4.4-1', '4-7': '4.4.4-2', '4-8': '4.4.3-1', '4-9': '4.4.4-3',
      '5-1': '4.5.3-1', '5-2': '4.5.4-1', '5-3': '4.5.4-2', '5-4': '4.5.4-3', '5-5': '4.5.4-4', '5-6': '4.5.5-1', '5-7': '4.5.6-1', '5-8': '4.5.6-2', '5-9': '4.5.6-3', '5-10': '4.5.6-4',
      '6-1': '4.6.1-1', '6-2': '4.6.1-2', '6-3': '4.6.2-1', '6-4': '4.6.3-1', '6-5': '4.6.3-2', '6-6': '4.6.4-1', '6-7': '4.6.4-2', '6-8': '4.6.4-3', '6-9': '4.6.5-1',
      '7-1': '4.7.2-1', '7-2': '4.7.1-1', '7-3': '4.7.3-1', '7-4': '4.7.3-2', '7-5': '4.7.3-3', '7-6': '4.7.3-4', '7-7': '4.7.3-5', '7-8': '4.7.4-1', '7-9': '4.7.4-2',
      '8-1': '4.8.1-1', '8-2': '4.8.1-2', '8-3': '4.8.1-3', '8-4': '4.8.1-4', '8-5': '4.8.1-5',
      '9-1': '4.9.1-1', '9-2': '4.9.1-2', '9-3': '4.9.1-3', '9-4': '4.9.2-1', '9-5': '4.9.4-1', '9-6': '4.9.4-2', '9-7': '4.9.4-3', '9-8': '4.9.4-4', '9-9': '4.9.4-5', '9-10': '4.9.4-6', '9-11': '4.9.3-1',
      '10-1': '4.10.1-1', '10-2': '4.10.2-1', '10-3': '4.10.3-1', '10-4': '4.10.4-1', '10-5': '4.10.4-2', '10-6': '4.10.5-1', '10-7': '4.10.5-2',
      '11-1': '4.11.1-1', '11-2': '4.11.1-2', '11-3': '4.11.1-3', '11-4': '4.11.1-4', '11-5': '4.11.1-5', '11-6': '4.11.1-6',
      '12-1': '4.12.1-1', '12-2': '4.12.1-2', '12-3': '4.12.2-1', '12-4': '4.12.2-2', '12-5': '4.12.1-3', '12-6': '4.12.1-4', '12-7': '4.12.3-1',
      '13-1': '4.13.1-1', '13-2': '4.13.1-2', '13-3': '4.13.1-3', '13-4': '4.13.1-4', '13-5': '4.13.1-5',
    },
  },
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
    // 4.3.1 Graph-traversal
    ...sub('fundamentals-of-algorithms', 'graph-traversal-7517', '4.3.1', [
      { n: 1, f: 'How does a breadth-first traversal of a graph work?', b: 'Visit all the neighbours of the start vertex first, then their neighbours, and so on, using a queue. Finds the shortest path in an unweighted graph.' },
      { n: 2, f: 'How does a depth-first traversal of a graph work?', b: 'Go as far as possible along one branch before backtracking, using a stack (or recursion). Used for navigating a maze.' },
      { n: 3, f: 'In breadth-first search, when is a vertex marked as visited?', b: 'When it is added to the queue, not when it is removed. This stops the same vertex being queued twice by two different neighbours.', src: 'aqa-a-level-computer-science-7517-graph-traversal-revision-notes' },
      { n: 4, f: 'How do you traverse a graph that is not connected?', b: 'One traversal reaches only the connected part containing the start vertex. Start again from each vertex that is still unvisited until every vertex has been visited.', src: 'aqa-a-level-computer-science-7517-graph-traversal-revision-notes' },
      { n: 5, f: 'How can breadth-first search give the actual shortest path to a target?', b: 'Record each vertex\'s parent when it is first discovered, then follow parents back from the target to the start. It is valid only for unweighted graphs; with weights use Dijkstra\'s algorithm.', src: 'aqa-a-level-computer-science-7517-graph-traversal-revision-notes' },
    ]),
    // 4.3.2 Tree-traversal
    ...sub('fundamentals-of-algorithms', 'tree-traversal-7517', '4.3.2', [
      { n: 1, f: 'What are the pre-order, in-order and post-order traversals of a binary tree?', b: 'Pre-order: node, left, right (copying a tree).\nIn-order: left, node, right (outputs a binary search tree in order).\nPost-order: left, right, node (emptying a tree; producing Reverse Polish).' },
      { n: 2, f: 'What does an in-order traversal of a binary search tree output?', b: 'The values in ascending order. The left subtree holds smaller values and the right subtree larger ones, so left, node, right visits them in sorted order.', src: 'aqa-a-level-computer-science-7517-tree-traversal-revision-notes' },
      { n: 3, f: 'Which traversal of an expression tree gives Reverse Polish, and what do the others give?', b: 'Post-order gives postfix (Reverse Polish), which needs no brackets. Pre-order gives prefix. In-order gives infix with the brackets missing.', src: 'aqa-a-level-computer-science-7517-tree-traversal-revision-notes' },
      { n: 4, f: 'Why is pre-order used to copy a tree and post-order to empty one?', b: 'Pre-order creates a parent before its children, so children can be attached as they are made. Post-order deletes children before their parent, so no reference is lost.', src: 'aqa-a-level-computer-science-7517-tree-traversal-revision-notes' },
      { n: 5, f: 'What is the base case of a recursive tree traversal?', b: 'An empty subtree: do nothing and return. Each node is otherwise output exactly once, so the number of items output equals the number of nodes.', src: 'aqa-a-level-computer-science-7517-tree-traversal-revision-notes' },
    ]),
    // 4.3.3 Reverse Polish
    ...sub('fundamentals-of-algorithms', 'reverse-polish-7517', '4.3.3', [
      { n: 1, f: 'What is Reverse Polish notation and why is it used?', b: 'Postfix notation: the operator follows its operands, e.g. 3 4 + for 3 + 4. No brackets are needed, and it is easily evaluated with a stack.' },
      { n: 2, f: 'How is a Reverse Polish expression evaluated with a stack?', b: 'Read left to right. Push each operand. At an operator, pop two values, apply it and push the result. The single value left at the end is the answer.', src: 'aqa-a-level-computer-science-7517-reverse-polish-revision-notes' },
      { n: 3, f: 'In RPN evaluation, which popped value is the left operand?', b: 'The value popped second. The first value popped is the right operand, so 9 3 - means 9 - 3 = 6, not 3 - 9.', src: 'aqa-a-level-computer-science-7517-reverse-polish-revision-notes' },
      { n: 4, f: 'Write a + b × c in Reverse Polish notation.', b: 'a b c * +. Multiplication has higher precedence, so b c * is formed first and then added to a.', src: 'aqa-a-level-computer-science-7517-reverse-polish-revision-notes' },
      { n: 5, f: 'What are the stack rules for converting infix to RPN (shunting-yard)?', b: 'Operands go straight to the output. For an operator, pop operators of higher or equal precedence to the output, then push it. Push "(", and at ")" pop to the output until "(". At the end pop everything.', src: 'aqa-a-level-computer-science-7517-reverse-polish-revision-notes' },
    ]),
    // 4.3.4 Searching algorithms
    ...sub('fundamentals-of-algorithms', 'searching-algorithms-7517', '4.3.4', [
      { n: 1, f: 'What are the time complexities of linear search, binary search and binary tree search?', b: 'Linear search: O(n).\nBinary search: O(log n).\nBinary tree search: O(log n) for a balanced tree.' },
      { n: 2, f: 'What must be true of the data before a binary search can be used?', b: 'It must be sorted and allow direct access to the middle item, as in an array. On unsorted data a binary search can give wrong answers.', src: 'aqa-a-level-computer-science-7517-searching-algorithms-revision-notes' },
      { n: 3, f: 'Why is binary search O(log n)?', b: 'Each comparison halves the items left to search, so doubling the list adds only one more comparison. About log₂ n steps are needed to reach a single item.', src: 'aqa-a-level-computer-science-7517-searching-algorithms-revision-notes' },
      { n: 4, f: 'What are the best and worst cases for a linear search of n items?', b: 'Best case: the target is first, 1 comparison. Worst case: the target is last or absent, n comparisons. Doubling the list roughly doubles the work.', src: 'aqa-a-level-computer-science-7517-searching-algorithms-revision-notes' },
      { n: 5, f: 'How does a binary tree search work, and when does it become O(n)?', b: 'Compare with the node: go left if smaller, right if larger; an empty subtree means not found. If data was inserted in sorted order the tree is a chain, so the search is O(n).', src: 'aqa-a-level-computer-science-7517-searching-algorithms-revision-notes' },
    ]),
    // 4.3.5 Sorting algorithms
    ...sub('fundamentals-of-algorithms', 'sorting-algorithms-7517', '4.3.5', [
      { n: 1, f: 'How does a merge sort work, and what is its time complexity?', b: 'Split the list into single items, then repeatedly merge pairs of sorted sublists into larger sorted lists. O(n log n).' },
      { n: 2, f: 'What is the time complexity of bubble sort?', b: 'O(n²): each pass compares adjacent pairs, and up to n passes may be needed.' },
      { n: 3, f: 'How does a bubble sort know it has finished?', b: 'A complete pass makes no swaps. Each pass compares adjacent pairs and places the next largest item at the end, so the sort stops after a swap-free pass.', src: 'aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes' },
      { n: 4, f: 'Why is merge sort an example of divide and conquer?', b: 'It splits the list into halves recursively until each part has one item (already sorted), then merges the sorted parts back together. The problem is divided into smaller identical problems.', src: 'aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes' },
      { n: 5, f: 'How does the merge step of merge sort combine two sorted lists?', b: 'Compare the front items of the two lists, move the smaller to the result, and repeat. When one list is empty, copy across whatever remains of the other.', src: 'aqa-a-level-computer-science-7517-sorting-algorithms-revision-notes' },
    ]),
    // 4.3.6 Optimisation algorithms
    ...sub('fundamentals-of-algorithms', 'optimisation-algorithms-7517', '4.3.6', [
      { n: 1, f: 'What does Dijkstra’s algorithm do?', b: 'Finds the shortest path from a start vertex to every other vertex in a weighted graph (with no negative weights), using a priority queue.' },
      { n: 2, f: 'Why can Dijkstra\'s algorithm not be replaced by breadth-first search on a weighted graph?', b: 'Breadth-first search finds the route with the fewest edges, which is not necessarily the lowest total weight. Dijkstra\'s algorithm minimises the sum of the weights.', src: 'aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes' },
      { n: 3, f: 'What are the starting values in Dijkstra\'s algorithm?', b: 'The start vertex has distance 0 and every other vertex has distance infinity. No vertex is visited and none has a previous vertex.', src: 'aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes' },
      { n: 4, f: 'In Dijkstra\'s algorithm, which vertex is chosen next and when is a distance updated?', b: 'Choose the unvisited vertex with the smallest distance and mark it visited. Update a neighbour only if distance plus edge weight is strictly smaller, and record the previous vertex.', src: 'aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes' },
      { n: 5, f: 'How is the shortest route read off once Dijkstra\'s algorithm has finished?', b: 'Follow the previous-vertex pointers back from the target to the start, then reverse the list. The target\'s final distance is the total weight of that route.', src: 'aqa-a-level-computer-science-7517-optimisation-algorithms-revision-notes' },
    ]),

    // 4.4 Theory of computation
    // 4.4.1 Abstraction and automation
    ...sub('theory-of-computation-7517', 'abstraction-and-automation-7517', '4.4.1', [
      { n: 1, f: 'What is an algorithm, according to the specification, and what are the four constructs?', b: 'A sequence of steps that can be followed to complete a task and that always terminates. The constructs are sequence, assignment, selection and iteration.', src: ABS },
      { n: 2, f: 'What is the difference between procedural abstraction and functional abstraction?', b: 'Procedural: actual values are replaced by parameters, giving a reusable procedure, such as DrawSquare(side). Functional: the method of computation is hidden and only input and output matter, such as SquareRoot(x).', src: ABS },
      { n: 3, f: 'Define data abstraction and information hiding', b: 'Information hiding: hiding all details of an object that do not contribute to its essential characteristics. Data abstraction: hiding how data is represented, so a stack is used through Push and Pop, not as an array and pointer.', src: ABS },
      { n: 4, f: 'What is representational abstraction, and what is abstraction by generalisation?', b: 'Representational: a representation reached by removing unnecessary detail, such as a railway map.\nGeneralisation: grouping by common characteristics, giving an "is a kind of" hierarchy, such as car and lorry as kinds of vehicle.', src: ABS },
      { n: 5, f: 'Problem abstraction (reduction), decomposition and composition', b: 'Reduction: removing details until the problem becomes one already solved.\nDecomposition: breaking a problem into sub-problems.\nComposition: combining procedures or data objects into compound ones.', src: ABS },
      { n: 6, f: 'What is automation? Give its four steps', b: 'Putting models into action on a computer: create algorithms, implement them in program code, implement the models in data structures, then execute the code.', src: ABS },
      { n: 7, f: 'Hand-trace a loop that sums the digits of 4729 by dividing n by 10 each time. What is the result?', b: 'n takes 4729, 472, 47, 4, 0; the digits added are 9, 2, 7, 4. Total = 22. The loop terminates because n shrinks by a factor of ten each time.', src: ABS },
    ]),
    // 4.4.2 Regular languages
    ...sub('theory-of-computation-7517', 'regular-languages-7517', '4.4.2', [
      { n: 1, f: 'What is a finite state machine (FSM)?', b: 'A model of computation with a finite set of states, a start state, inputs and transitions between states. An FSM with no output can accept or reject input strings.' },
      { n: 2, f: 'What is a Mealy machine?', b: 'A finite state machine with outputs, where each output is determined by the current state and the input (shown on the transitions).' },
      { n: 3, f: 'What is a regular expression? What do *, + and ? mean?', b: 'A way of describing a set of strings (a regular language).\n* : zero or more of the previous item.\n+ : one or more.\n? : zero or one.\n| separates alternatives.' },
    ]),
    // 4.4.3 Context-free languages
    ...sub('theory-of-computation-7517', 'context-free-languages-7517', '4.4.3', [
      { n: 1, f: 'Why is Backus–Naur Form (BNF) needed as well as regular expressions?', b: 'Some languages, such as those with nested structures, cannot be described by regular expressions. BNF can define them, including recursive rules, so it is used to define programming language syntax.' },
      { n: 2, f: 'What do the symbols ::= and | mean in BNF?', b: '::= means "is defined as". | means "or" and separates alternative productions. Symbols placed side by side mean "followed by".', src: 'aqa-a-level-computer-science-7517-context-free-languages-revision-notes' },
      { n: 3, f: 'What is the difference between a terminal and a non-terminal in BNF?', b: 'A terminal appears literally in the string, for example 7 or if. A non-terminal is a category in angle brackets, such as digit in angle brackets, that is defined by its own production rule.', src: 'aqa-a-level-computer-science-7517-context-free-languages-revision-notes' },
      { n: 4, f: 'How does BNF show repetition, and what must the rule include?', b: 'A recursive rule, for example number ::= digit | digit number (each name in angle brackets). It needs a non-recursive base case, or the derivation could never finish.', src: 'aqa-a-level-computer-science-7517-context-free-languages-revision-notes' },
      { n: 5, f: 'How do you check whether a string is valid against a set of BNF rules?', b: 'Start from the starting non-terminal and choose the alternative that fits, expanding non-terminals until only terminals remain. If the whole string is produced it is valid.', src: 'aqa-a-level-computer-science-7517-context-free-languages-revision-notes' },
    ]),
    // 4.4.4 Classification of algorithms
    ...sub('theory-of-computation-7517', 'classification-of-algorithms-7517', '4.4.4', [
      { n: 1, f: 'What is the Halting problem?', b: 'The problem of deciding, for any program and input, whether the program will eventually stop. It has been proved that no algorithm can solve it: some problems are not computable.' },
      { n: 2, f: 'What is the difference between tractable and intractable problems?', b: 'Tractable: can be solved in polynomial time or better.\nIntractable: solvable in theory, but no polynomial-time algorithm is known, so heuristic methods are used for large inputs.' },
      { n: 3, f: 'What is the order of complexity of an algorithm that halves the problem each step?', b: 'Logarithmic, O(log n), as in binary search. Constant O(1) < logarithmic < linear O(n) < polynomial O(n²) < exponential O(2ⁿ).' },
    ]),
    // 4.4.5 A model of computation
    ...sub('theory-of-computation-7517', 'a-model-of-computation-7517', '4.4.5', [
      { n: 1, f: 'What is a Turing machine?', b: 'A theoretical model of computation: a finite state machine with a read/write head on an infinitely long tape divided into cells, moving one cell left or right per step according to its transition rules.' },
      { n: 2, f: 'What is a universal Turing machine?', b: 'A Turing machine that can simulate any other Turing machine by reading that machine’s description and its input from the tape: the idea behind the stored-program computer.' },
      { n: 3, f: 'What are the parts of a Turing machine?', b: 'A finite set of states (one start state), a finite alphabet including a blank, an infinite tape of squares, a read-write head moving one square at a time, and transition rules.', src: 'aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes' },
      { n: 4, f: 'What does the transition function of a Turing machine map?', b: '(current state, symbol read) to (next state, symbol written, direction of head movement). δ(S0, 1) = (S0, 0, R) means stay in S0, write 0 and move right.', src: 'aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes' },
      { n: 5, f: 'When does a Turing machine halt?', b: 'When it reaches a halting state, which has no outgoing transitions, or there is no rule for the current state and symbol. The final tape contents are then checked.', src: 'aqa-a-level-computer-science-7517-a-model-of-computation-revision-notes' },
    ]),

    // 4.5 Fundamentals of data representation
    // 4.5.1 Number systems
    ...sub('fundamentals-of-data-representation', 'number-systems-7517', '4.5.1', [
      { n: 1, f: 'Natural numbers and integers: symbols, sets and the difference', b: 'ℕ = {0, 1, 2, 3, …}: whole numbers from zero upwards (zero is natural in this specification).\nℤ = {…, −2, −1, 0, 1, 2, …}: whole numbers that may be negative.', src: NSYS },
      { n: 2, f: 'Rational vs irrational numbers, with examples', b: 'Rational (ℚ): can be written as a fraction of two integers, so 7 = 7/1 and 0.75 are rational. Irrational: cannot be written as a fraction, such as √2 and π.', src: NSYS },
      { n: 3, f: 'How do the decimal forms of rational and irrational numbers differ?', b: 'Rational: the decimal terminates (0.125) or repeats for ever (0.333…). Irrational: it never terminates and never repeats (√2 = 1.41421356…).', src: NSYS },
      { n: 4, f: 'How are ℕ, ℤ, ℚ and ℝ related? What does ℝ contain?', b: 'They nest: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Real numbers include all rationals and all irrationals, so every real number is one or the other.', src: NSYS },
      { n: 5, f: 'Classify 18, −7, 5/6, √9 and √7 in the smallest suitable set', b: '18 is in ℕ; −7 in ℤ; 5/6 in ℚ; √9 = 3, so ℕ; √7 = 2.6457… never ends or repeats, so it is irrational.', src: NSYS },
      { n: 6, f: 'What is an ordinal number? How does it differ from a cardinal number?', b: 'An ordinal gives the position of an object in an ordered set (1st, 2nd, 3rd). A cardinal says how many there are ("three items").', src: NSYS },
      { n: 7, f: 'Which kind of number is used for counting and which for measurement?', b: 'Counting uses natural numbers and gives an exact whole number. Measurement uses real numbers on a continuous scale, with limited precision (height, mass, time).', src: NSYS },
    ]),
    // 4.5.2 Number bases
    ...sub('fundamentals-of-data-representation', 'number-bases-7517', '4.5.2', [
      { n: 1, f: 'Digits and place values of decimal, binary and hexadecimal', b: 'Decimal (base 10): digits 0 to 9, places 1, 10, 100.\nBinary (base 2): digits 0 and 1, places 1, 2, 4, 8, 16, 32, 64, 128.\nHexadecimal (base 16): digits 0 to 9 and A to F, places 1, 16, 256.', src: NBASE },
      { n: 2, f: 'Convert 11010110₂ to decimal', b: 'Add the place values of the 1 bits: 128 + 64 + 16 + 4 + 2 = 214.', src: NBASE },
      { n: 3, f: 'Convert 173₁₀ to binary, and then to hexadecimal', b: '128 + 32 + 8 + 4 + 1 = 173, so 10101101₂. Groups of four: 1010 1101 = AD₁₆.', src: NBASE },
      { n: 4, f: 'How do you convert 1000₁₀ to hexadecimal by repeated division?', b: '1000 ÷ 16 = 62 r 8; 62 ÷ 16 = 3 r 14 (E); 3 ÷ 16 = 0 r 3. Read the remainders from the bottom up: 3E8₁₆.', src: NBASE },
      { n: 5, f: 'Convert 3F₁₆ to binary and to decimal', b: '3 = 0011 and F = 1111, so 00111111₂. In decimal: 3 × 16 + 15 = 63.', src: NBASE },
      { n: 6, f: 'Why is hexadecimal used as shorthand for binary?', b: 'One hex digit is exactly four bits, so a byte is two hex digits. It is a quarter of the length, easier to read and copy with fewer errors, and conversion needs no arithmetic. Computers still store binary.', src: NBASE },
      { n: 7, f: 'Convert 110010₂ to hexadecimal. Which way do you group the bits?', b: 'Group in fours from the right and pad the left with zeros: 0011 0010 = 32₁₆.', src: NBASE },
    ]),
    // 4.5.3 Units of information
    ...sub('fundamentals-of-data-representation', 'units-of-information-7517', '4.5.3', [
      { n: 1, f: 'What is the difference between kibi and kilo prefixes?', b: 'Kibi (Ki) = 2¹⁰ = 1024; mebi (Mi) = 2²⁰; gibi (Gi) = 2³⁰.\nKilo (k) = 10³ = 1000; mega = 10⁶; giga = 10⁹.' },
      { n: 2, f: 'How many different values can n bits represent?', b: '2ⁿ different values. For unsigned binary the range is 0 to 2ⁿ − 1, so 8 bits give 256 values, with a largest number of 255.', src: 'aqa-a-level-computer-science-7517-units-of-information-revision-notes' },
      { n: 3, f: 'How many bits are needed to represent 100 different values?', b: '7 bits. Find the smallest n with 2ⁿ ≥ 100, rounding up: 2⁶ = 64 is too few and 2⁷ = 128 is enough.', src: 'aqa-a-level-computer-science-7517-units-of-information-revision-notes' },
      { n: 4, f: 'What are a bit, a nibble and a byte?', b: 'A bit is the fundamental unit of information, 0 or 1. A nibble is 4 bits. A byte is a group of 8 bits.', src: 'aqa-a-level-computer-science-7517-units-of-information-revision-notes' },
      { n: 5, f: 'How do you convert between binary and decimal prefixes such as KiB and kB?', b: 'Convert to bytes first. Binary prefixes step by 1024 (1 KiB = 2¹⁰ B = 1024 B); decimal prefixes step by 1000 (1 kB = 10³ B = 1000 B).', src: 'aqa-a-level-computer-science-7517-units-of-information-revision-notes' },
    ]),
    // 4.5.4 Binary number system
    ...sub('fundamentals-of-data-representation', 'binary-number-system-7517', '4.5.4', [
      { n: 1, f: 'How do you represent a negative number in two’s complement?', b: 'Write the positive value in binary, invert all the bits and add 1. The most significant bit has a negative place value (−128 in 8 bits).' },
      { n: 2, f: 'What is the difference between fixed point and floating point binary?', b: 'Fixed point: the binary point is in a set position, giving fixed precision and a limited range.\nFloating point: a mantissa and an exponent, giving a much greater range for the same bits.' },
      { n: 3, f: 'Why is a floating-point number normalised?', b: 'To give the maximum precision for the number of bits: the mantissa starts 01 for a positive number or 10 for a negative one.' },
      { n: 4, f: 'What is the difference between absolute and relative error?', b: 'Absolute error: the difference between the true value and the stored value.\nRelative error: the absolute error divided by the true value.' },
    ]),
    // 4.5.5 Information coding systems
    ...sub('fundamentals-of-data-representation', 'information-coding-systems-7517', '4.5.5', [
      { n: 1, f: 'How do majority voting and check digits detect errors?', b: 'Majority voting: each bit is sent three times and the receiver takes the value that appears most often.\nCheck digit: a digit calculated from the others and added to the end, recalculated to check the number.' },
      { n: 2, f: 'How does the character code for the digit 7 differ from its pure binary value?', b: 'Pure binary 00000111 is the value seven, used for calculation. The ASCII code 00110111 (55) is the symbol "7", used for display and input. Subtract 48 from the code to get the value.', src: 'aqa-a-level-computer-science-7517-information-coding-systems-revision-notes' },
      { n: 3, f: 'How many characters can ASCII represent, and what is its limitation?', b: 'It uses 7 bits, giving 128 codes (extended versions use 8 bits for 256). That is too few for other alphabets and large character sets, which is why Unicode was introduced.', src: 'aqa-a-level-computer-science-7517-information-coding-systems-revision-notes' },
      { n: 4, f: 'What does Unicode provide that ASCII does not?', b: 'A code point for every character in every writing system, over a million possible values. Its first 128 code points match ASCII. The cost is more bits per character, so files can be larger.', src: 'aqa-a-level-computer-science-7517-information-coding-systems-revision-notes' },
      { n: 5, f: 'How does a parity bit detect errors?', b: 'An extra bit is added so the number of 1s is always even (even parity) or always odd (odd parity). A received byte with the wrong parity shows an error, though it cannot say which bit.', src: 'aqa-a-level-computer-science-7517-information-coding-systems-revision-notes' },
    ]),
    // 4.5.6 Representing images, sound and other data
    ...sub('fundamentals-of-data-representation', 'representing-images-sound-and-other-data-7517', '4.5.6', [
      { n: 1, f: 'What does Nyquist’s theorem state?', b: 'To reproduce a sound accurately, the sampling rate must be at least twice the highest frequency in the sound.' },
      { n: 2, f: 'What is MIDI and what are its advantages?', b: 'Musical Instrument Digital Interface: music stored as event messages (note on/off, pitch, duration, instrument), not samples. Files are much smaller and easy to edit, but cannot store vocals.' },
      { n: 3, f: 'What is the Vernam cipher, and why is it called perfectly secure?', b: 'Each character is XORed with a character of a random key (one-time pad) at least as long as the message, used only once. The ciphertext gives no information about the plaintext.' },
      { n: 4, f: 'How do run-length encoding and dictionary-based compression work?', b: 'RLE: a run of repeated values is stored as one value and a count.\nDictionary-based: repeated patterns are stored once in a dictionary and replaced in the data by their codes. Both are lossless.' },
    ]),

    // 4.6 Fundamentals of computer systems
    // 4.6.1 Hardware and software
    ...sub('fundamentals-of-computer-systems', 'hardware-and-software-7517', '4.6.1', [
      { n: 1, f: 'What is the difference between system software and application software?', b: 'System software runs and manages the computer (operating systems, utilities, libraries, translators). Application software performs tasks for the user.' },
      { n: 2, f: 'What is the role of an operating system?', b: 'It hides the complexity of the hardware from the user and manages resources: processor scheduling, memory, input/output devices and files.' },
      { n: 3, f: 'What are hardware and software?', b: 'Hardware is the physical components of a computer system. Software is the programs and data, the instructions that tell the hardware what to do. Each needs the other to be useful.', src: 'aqa-a-level-computer-science-7517-hardware-and-software-revision-notes' },
      { n: 4, f: 'What is the difference between bespoke and off-the-shelf software?', b: 'Bespoke software is written for one customer: it fits exactly but is costly and slow to develop. Off-the-shelf software is mass market: cheap and ready now but may not fit exactly.', src: 'aqa-a-level-computer-science-7517-hardware-and-software-revision-notes' },
      { n: 5, f: 'What are the roles of a utility program and a library?', b: 'A utility program maintains, protects or manages the system, for example antivirus, backup or compression. A library is a collection of pre-written, tested subroutines that programs can reuse.', src: 'aqa-a-level-computer-science-7517-hardware-and-software-revision-notes' },
    ]),
    // 4.6.2 Classification of programming languages
    ...sub('fundamentals-of-computer-systems', 'classification-of-programming-languages-7517', '4.6.2', [
      { n: 1, f: 'What is the difference between low-level and high-level languages?', b: 'Low-level (machine code, assembly) is close to the processor’s instruction set. High-level languages use English-like statements, are portable between processors and are easier to write and debug.' },
      { n: 2, f: 'What are the opcode and operands in a machine code instruction?', b: 'The opcode is the operation to carry out. The operands are what it acts on: registers, values or memory addresses. Machine code is the only language the processor executes directly.', src: 'aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes' },
      { n: 3, f: 'What is assembly language and why is it not portable?', b: 'It uses mnemonics (such as ADD, LDR) and labels in place of binary, roughly one assembly instruction per machine instruction, translated by an assembler. It is specific to one processor\'s instruction set.', src: 'aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes' },
      { n: 4, f: 'What is an imperative high-level language?', b: 'One in which a program is a sequence of commands carried out in order, changing the state (variable values). Examples are Python, Java and C. Each statement becomes several machine instructions.', src: 'aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes' },
      { n: 5, f: 'Why are machine code programs hard to write and debug?', b: 'Instructions are binary patterns specific to one processor, with no meaningful names. They are very difficult to read, so errors are hard to spot, which is why assembly and high-level languages were developed.', src: 'aqa-a-level-computer-science-7517-classification-of-programming-languages-revision-notes' },
    ]),
    // 4.6.3 Types of program translator
    ...sub('fundamentals-of-computer-systems', 'types-of-program-translator-7517', '4.6.3', [
      { n: 1, f: 'What is the difference between a compiler, an interpreter and an assembler?', b: 'Compiler: translates the whole high-level program into object code before it runs.\nInterpreter: translates and runs one statement at a time.\nAssembler: translates assembly language into machine code.' },
      { n: 2, f: 'What is bytecode?', b: 'An intermediate code produced by a compiler that is then run by a virtual machine (interpreter) on the target computer, so the same code is platform-independent.' },
      { n: 3, f: 'What are source code and object code?', b: 'Source code is the program as written by the programmer (assembly or high-level). Object code is the translated machine code that the processor can run. A translator converts source into object code.', src: 'aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes' },
      { n: 4, f: 'Why is a compiled program usually faster than an interpreted one?', b: 'A compiled program is already machine code, so it runs without translation and can be optimised. An interpreter has to re-translate statements as it runs, for example every time round a loop.', src: 'aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes' },
      { n: 5, f: 'When is a compiler better than an interpreter, and when the reverse?', b: 'Compiler: finished software distributed and run many times, where speed matters and the source should stay private. Interpreter: development, testing and short scripts, or source running on many machine types.', src: 'aqa-a-level-computer-science-7517-types-of-program-translator-revision-notes' },
    ]),
    // 4.6.4 Logic gates
    ...sub('fundamentals-of-computer-systems', 'logic-gates-7517', '4.6.4', [
      { n: 1, f: 'What are the truth conditions for NAND, NOR and XOR?', b: 'NAND: 1 unless both inputs are 1.\nNOR: 1 only if both inputs are 0.\nXOR: 1 if the inputs differ.' },
      { n: 2, f: 'What are the outputs of a half adder?', b: 'Sum = A XOR B; Carry = A AND B.' },
      { n: 3, f: 'What does an edge-triggered D-type flip-flop do?', b: 'It stores one bit: on the rising edge of the clock the output takes the value of the D input and holds it until the next clock edge. Used to build registers and memory.' },
    ]),
    // 4.6.5 Boolean algebra
    ...sub('fundamentals-of-computer-systems', 'boolean-algebra-7517', '4.6.5', [
      { n: 1, f: 'State De Morgan’s laws.', b: 'NOT (A AND B) = NOT A OR NOT B\nNOT (A OR B) = NOT A AND NOT B' },
      { n: 2, f: 'State the identity and null laws for AND and OR.', b: 'Identity: A AND 1 = A, and A OR 0 = A. Null: A AND 0 = 0, and A OR 1 = 1. Complement: A AND NOT A = 0, and A OR NOT A = 1.', src: 'aqa-a-level-computer-science-7517-boolean-algebra-revision-notes' },
      { n: 3, f: 'State the absorption laws.', b: 'A AND (A OR B) = A, and A OR (A AND B) = A. The second variable is absorbed, so the expression reduces to A.', src: 'aqa-a-level-computer-science-7517-boolean-algebra-revision-notes' },
      { n: 4, f: 'How is XOR defined in Boolean algebra?', b: 'A XOR B is true when exactly one input is true: (A AND NOT B) OR (NOT A AND B). Expand XOR first when simplifying an expression.', src: 'aqa-a-level-computer-science-7517-boolean-algebra-revision-notes' },
      { n: 5, f: 'Simplify (NOT A AND B) OR (A AND B).', b: 'Factorise with the distributive law: B AND (NOT A OR A). The complement law gives NOT A OR A = 1, and the identity law gives B.', src: 'aqa-a-level-computer-science-7517-boolean-algebra-revision-notes' },
    ]),

    // 4.7 Fundamentals of computer organisation and architecture
    // 4.7.1 Internal hardware components of a computer
    ...sub('fundamentals-of-computer-organisation-and-architecture', 'internal-hardware-components-of-a-computer-7517', '4.7.1', [
      { n: 1, f: 'What is the difference between Von Neumann and Harvard architecture?', b: 'Von Neumann: instructions and data share one memory and bus.\nHarvard: separate memories and buses for instructions and data, so both can be fetched at once; used in embedded systems and digital signal processors.' },
      { n: 2, f: 'What does the address bus carry, and what determines how much memory it can address?', b: 'It carries the address of the location wanted, one direction only (processor outwards). With n address lines there are 2ⁿ addressable locations, so 16 lines address 65,536.', src: 'aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes' },
      { n: 3, f: 'What do the data bus and the control bus carry?', b: 'The data bus carries data and instructions in both directions; its width sets how many bits move per transfer. The control bus carries signals such as read, write, clock and interrupt requests.', src: 'aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes' },
      { n: 4, f: 'What does an I/O controller do?', b: 'It is the interface between the bus and a peripheral device: it converts signals and formats, buffers data and holds status information, so the processor need not handle device details.', src: 'aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes' },
      { n: 5, f: 'What is addressable memory?', b: 'Main memory split into locations, each with a unique address, usually holding one byte. The processor selects a location by placing its address on the address bus.', src: 'aqa-a-level-computer-science-7517-internal-hardware-components-revision-notes' },
    ]),
    // 4.7.2 The stored program concept
    ...sub('fundamentals-of-computer-organisation-and-architecture', 'the-stored-program-concept-7517', '4.7.2', [
      { n: 1, f: 'What is the stored program concept?', b: 'Machine-code instructions are stored in main memory and are fetched and executed serially by a processor that carries out arithmetic and logical operations.' },
      { n: 2, f: 'What four parts should a full description of the stored program concept include?', b: 'Machine code instructions, stored in main memory, fetched and executed serially (one at a time, in order unless a branch occurs), by a processor performing arithmetic and logical operations.', src: 'aqa-a-level-computer-science-7517-stored-program-concept-revision-notes' },
      { n: 3, f: 'Why can instructions and data share the same memory?', b: 'Memory holds only binary patterns. What a pattern means depends on how the processor uses it: 01100101 could be the number 101, the letter e or an instruction.', src: 'aqa-a-level-computer-science-7517-stored-program-concept-revision-notes' },
      { n: 4, f: 'What did the stored program concept change compared with earlier machines?', b: 'Earlier machines were set up for one job by rewiring or switches. With a stored program the program is held in memory as data, so one machine can run any program by loading it.', src: 'aqa-a-level-computer-science-7517-stored-program-concept-revision-notes' },
      { n: 5, f: 'How does the processor use the program counter to run a stored program?', b: 'It fetches the instruction at the address in the program counter, decodes and executes it, then repeats. The counter normally increases after each fetch; a branch instruction changes it.', src: 'aqa-a-level-computer-science-7517-stored-program-concept-revision-notes' },
    ]),
    // 4.7.3 Structure and role of the processor and its components
    ...sub('fundamentals-of-computer-organisation-and-architecture', 'structure-and-role-of-the-processor-and-its-components-7517', '4.7.3', [
      { n: 1, f: 'What do the program counter, MAR, MBR and CIR hold?', b: 'PC: address of the next instruction.\nMAR: address to be read or written.\nMBR: data or instruction just read or to be written.\nCIR: the instruction being decoded and executed.' },
      { n: 2, f: 'What are the steps of the fetch-execute cycle?', b: 'Fetch: copy PC to MAR; read memory into the MBR; increment PC; copy MBR to CIR.\nDecode: the control unit decodes the opcode.\nExecute: the instruction is carried out.' },
      { n: 3, f: 'What is the difference between immediate and direct addressing?', b: 'Immediate: the operand is the value to use.\nDirect: the operand is the memory address holding the value.' },
      { n: 4, f: 'What are the opcode and the operand of an instruction?', b: 'The opcode gives the operation (and addressing mode). The operand is the data or address it acts on.' },
      { n: 5, f: 'Which factors affect processor performance?', b: 'Number of cores, cache memory size, clock speed, word length, and the width of the address and data buses.' },
    ]),
    // 4.7.4 External hardware devices
    ...sub('fundamentals-of-computer-organisation-and-architecture', 'external-hardware-devices-7517', '4.7.4', [
      { n: 1, f: 'How does an RFID tag work?', b: 'A reader sends radio waves that power a passive tag’s chip (or an active tag has its own battery); the tag transmits its stored data back to the reader by radio.' },
      { n: 2, f: 'How does a solid-state drive store data, compared with a hard disk?', b: 'An SSD stores charge in NAND flash memory cells, with no moving parts, so access is faster. A hard disk uses magnetised regions on spinning platters read by a moving head, which is slower but cheaper per gigabyte.' },
      { n: 3, f: 'How does a barcode reader read a barcode?', b: 'A laser sweeps across the bars; dark bars absorb light and light spaces reflect it. A photodiode detects the pattern, which becomes a number that the computer looks up in a database.', src: 'aqa-a-level-computer-science-7517-external-hardware-devices-revision-notes' },
      { n: 4, f: 'How does a laser printer produce a page?', b: 'The drum is charged, a laser removes charge to form an electrostatic image, toner sticks to the image and is transferred to charged paper, then a fuser melts it on with heat and pressure.', src: 'aqa-a-level-computer-science-7517-external-hardware-devices-revision-notes' },
      { n: 5, f: 'How does a digital camera turn light into a stored image?', b: 'A lens focuses light on a CCD or CMOS sensor whose cells build up charge in proportion to brightness. An analogue-to-digital converter makes each charge a binary number, and the image is usually compressed.', src: 'aqa-a-level-computer-science-7517-external-hardware-devices-revision-notes' },
    ]),

    // 4.8 Consequences of uses of computing
    // 4.8.1 Individual (moral), social (ethical), legal and cultural issues and opportunities
    ...sub('consequences-of-uses-of-computing', 'individual-moral-social-ethical-legal-and-cultural-issues-and-opportunities-7517', '4.8.1', [
      { n: 1, f: 'Why do computers raise new moral, ethical, legal and cultural issues?', b: 'They can collect, store, analyse and share huge amounts of personal data quickly and cheaply, so decisions by software developers can affect very many people.' },
      { n: 2, f: 'Why is it hard for legislation to keep up with computing?', b: 'Technology changes faster than laws are made, and the internet crosses national borders, so it is hard to decide which country’s laws apply and to enforce them.' },
      { n: 3, f: 'What are the arguments about monitoring behaviour online?', b: 'For: helps prevent crime and terrorism. Against: invades privacy, can be misused, and data can be leaked or used without consent.' },
      { n: 4, f: 'How can algorithms embed bias?', b: 'If they are trained on biased data or designed with biased assumptions, automated decisions (e.g. in recruitment or credit) can treat groups unfairly, often without anyone noticing.' },
      { n: 5, f: 'Who is responsible when software causes harm?', b: 'A key ethical question: developers, the organisations that deploy software and users all bear some responsibility, which is why professional codes of conduct and testing matter.' },
    ]),

    // 4.9 Fundamentals of communication and networking
    // 4.9.1 Communication
    ...sub('fundamentals-of-communication-and-networking', 'communication-7517', '4.9.1', [
      { n: 1, f: 'What is the difference between serial and parallel transmission?', b: 'Serial: bits sent one after another along a single wire.\nParallel: several bits sent at once on separate wires. Serial is used over longer distances because parallel suffers from skew and crosstalk.' },
      { n: 2, f: 'What is the difference between baud rate and bit rate?', b: 'Baud rate: the number of signal changes per second.\nBit rate: the number of bits sent per second. Bit rate can exceed baud rate when each signal change encodes more than one bit.' },
      { n: 3, f: 'What are start and stop bits used for?', b: 'In asynchronous serial transmission, a start bit tells the receiver a byte is coming and a stop bit marks its end, so sender and receiver keep in step.' },
    ]),
    // 4.9.2 Networking
    ...sub('fundamentals-of-communication-and-networking', 'networking-7517', '4.9.2', [
      { n: 1, f: 'How does CSMA/CA with RTS/CTS work on WiFi?', b: 'A device listens and transmits only when the channel is free. With RTS/CTS it sends a Request to Send and waits for the access point’s Clear to Send before transmitting.' },
      { n: 2, f: 'What is the difference between physical and logical topology?', b: 'Physical topology is how cables and devices are laid out; logical topology is how data flows between devices. A physical star can behave as a logical bus if a hub repeats every frame to all ports.', src: 'aqa-a-level-computer-science-7517-networking-revision-notes' },
      { n: 3, f: 'Compare peer-to-peer and client-server networks.', b: 'Peer-to-peer: all computers are equal and share their own resources; cheap but security and back-up are harder. Client-server: servers provide services centrally to clients; easier to manage but costly and the server is a single point of failure.', src: 'aqa-a-level-computer-science-7517-networking-revision-notes' },
      { n: 4, f: 'What components does a WiFi network need, and what is an SSID?', b: 'A wireless network adapter in each device and a wireless access point. The SSID (Service Set Identifier) is the name that identifies the wireless network.', src: 'aqa-a-level-computer-science-7517-networking-revision-notes' },
      { n: 5, f: 'What are three ways to secure a wireless network?', b: 'WPA/WPA2 encryption, turning off SSID broadcast, and a MAC address allow list. Encryption is the main protection; the others are extra layers, since names can be found and MAC addresses copied.', src: 'aqa-a-level-computer-science-7517-networking-revision-notes' },
    ]),
    // 4.9.3 The Internet
    ...sub('fundamentals-of-communication-and-networking', 'the-internet-7517', '4.9.3', [
      { n: 1, f: 'What is the difference between symmetric and asymmetric encryption?', b: 'Symmetric: one shared key encrypts and decrypts.\nAsymmetric: data encrypted with the recipient’s public key can only be decrypted with their private key.' },
      { n: 2, f: 'What is packet switching?', b: 'A message is split into packets, each sent separately and possibly by a different route, then reassembled at the destination using sequence numbers. A header holds the destination and source IP addresses and a hop count.', src: 'aqa-a-level-computer-science-7517-the-internet-revision-notes' },
      { n: 3, f: 'What is the role of a router and of a gateway?', b: 'A router connects networks and forwards each packet towards its destination using the destination IP address and a routing table. A gateway connects networks that may use different protocols.', src: 'aqa-a-level-computer-science-7517-the-internet-revision-notes' },
      { n: 4, f: 'What does the Domain Name System (DNS) do?', b: 'It translates a domain name into an IP address, using a distributed hierarchy of servers (root, top-level domain, authoritative server). The result is cached for later requests.', src: 'aqa-a-level-computer-science-7517-the-internet-revision-notes' },
      { n: 5, f: 'How does a digital signature work?', b: 'The sender hashes the message and encrypts the hash with their private key. The receiver decrypts it with the sender\'s public key and compares hashes, confirming authenticity and integrity.', src: 'aqa-a-level-computer-science-7517-the-internet-revision-notes' },
    ]),
    // 4.9.4 The Transmission Control Protocol/Internet Protocol (TCP/IP) protocol
    ...sub('fundamentals-of-communication-and-networking', 'the-transmission-control-protocol-internet-protocol-tcp-ip-protocol-7517', '4.9.4', [
      { n: 1, f: 'What are the four layers of the TCP/IP stack?', b: 'Application (e.g. HTTP), Transport (TCP: splits data into numbered segments and adds port numbers), Network (IP: adds IP addresses and routes packets), Link (adds MAC addresses for the physical network).' },
      { n: 2, f: 'What is a socket?', b: 'The combination of an IP address and a port number, which identifies one end of a connection to a particular process on a host.' },
      { n: 3, f: 'What does network address translation (NAT) do?', b: 'It lets devices with private IP addresses share one public IP address: the router replaces the private address with its public one on outgoing packets and keeps a table to route replies back.' },
      { n: 4, f: 'What does DHCP do?', b: 'Dynamic Host Configuration Protocol automatically gives a device an IP address (and settings such as the gateway) from a pool when it joins a network.' },
      { n: 5, f: 'What is a subnet mask used for?', b: 'ANDing an IP address with the subnet mask gives the network identifier, showing whether another host is on the same subnet or must be reached through a router.' },
      { n: 6, f: 'What is the difference between JSON and XML for data exchange?', b: 'Both are text formats. JSON is shorter, easier for people to read and quicker for computers to parse. XML is more verbose but allows more complex structures and validation.' },
    ]),

    // 4.10 Fundamentals of databases
    // 4.10.1 Conceptual data models and entity relationship modelling
    ...sub('fundamentals-of-databases', 'conceptual-data-models-and-entity-relationship-modelling-7517', '4.10.1', [
      { n: 1, f: 'What are an entity, an attribute and a relationship?', b: 'Entity: something about which data is stored (e.g. Student).\nAttribute: a property of an entity (e.g. DateOfBirth).\nRelationship: a link between entities (one-to-one, one-to-many, many-to-many).' },
      { n: 2, f: 'What is a conceptual data model?', b: 'A description of what data is stored and how it is related, independent of any software. Each entity later becomes a table and each attribute a field.', src: 'aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes' },
      { n: 3, f: 'How do you write an entity description?', b: 'In the form Entity (Attribute1, Attribute2, ...), with the entity identifier underlined. For example Member (MemberID, Name, Year) with MemberID underlined.', src: 'aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes' },
      { n: 4, f: 'How do you resolve a many-to-many relationship in a data model?', b: 'Add a link entity that has a one-to-many relationship with each original entity. Name it and give it an identifier, for example Loan between Member and Book.', src: 'aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes' },
      { n: 5, f: 'How do you decide the type of a relationship between two entities?', b: 'Ask the question in both directions: how many occurrences of B can one A relate to, and how many of A can one B relate to? The two answers give one-to-one, one-to-many or many-to-many.', src: 'aqa-a-level-computer-science-7517-conceptual-data-models-er-modelling-revision-notes' },
    ]),
    // 4.10.2 Relational databases
    ...sub('fundamentals-of-databases', 'relational-databases-7517', '4.10.2', [
      { n: 1, f: 'What are a primary key, a composite key and a foreign key?', b: 'Primary key: uniquely identifies each record.\nComposite key: a primary key made of two or more attributes.\nForeign key: an attribute that is the primary key of another table, linking the two.' },
      { n: 2, f: 'What is a relational database?', b: 'Data held in tables, each about one kind of thing, linked by key values so related data can be combined without storing any fact twice.', src: 'aqa-a-level-computer-science-7517-relational-databases-revision-notes' },
      { n: 3, f: 'What are other names for a table, a column and a row in a relational database?', b: 'Table: relation. Column: attribute or field, one property with one value per record. Row: record or tuple, one occurrence of the entity.', src: 'aqa-a-level-computer-science-7517-relational-databases-revision-notes' },
      { n: 4, f: 'What properties must a primary key have?', b: 'Its value must be unique for every record, never empty (null) and stable over time. A table has only one primary key, though it may be composite.', src: 'aqa-a-level-computer-science-7517-relational-databases-revision-notes' },
      { n: 5, f: 'Where does a foreign key live, and can its values repeat?', b: 'It lives in the table that refers to another. It is that other table\'s primary key, creates the link between the tables, and its values can repeat.', src: 'aqa-a-level-computer-science-7517-relational-databases-revision-notes' },
    ]),
    // 4.10.3 Database design and normalisation techniques
    ...sub('fundamentals-of-databases', 'database-design-and-normalisation-techniques-7517', '4.10.3', [
      { n: 1, f: 'Why are databases normalised?', b: 'To remove data redundancy and so avoid update, insertion and deletion anomalies, keeping data consistent. A database in third normal form has attributes that depend on the key, the whole key and nothing but the key.' },
      { n: 2, f: 'What are the update, insertion and deletion anomalies?', b: 'Update: many rows must change, risking a missed one. Insertion: a customer or product cannot be recorded until an order exists. Deletion: removing the last order loses customer or product details.', src: 'aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes' },
      { n: 3, f: 'What are the requirements of first normal form (1NF)?', b: 'No repeating groups, every cell holds a single atomic value, and the relation has a primary key.', src: 'aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes' },
      { n: 4, f: 'What does second normal form (2NF) remove?', b: 'Partial dependencies: a non-key attribute that depends on only part of a composite key. The relation must be in 1NF, and every non-key attribute must depend on the whole key.', src: 'aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes' },
      { n: 5, f: 'What does third normal form (3NF) remove?', b: 'Transitive dependencies: a non-key attribute that depends on another non-key attribute. The relation must already be in 2NF.', src: 'aqa-a-level-computer-science-7517-database-design-and-normalisation-revision-notes' },
    ]),
    // 4.10.4 Structured Query Language (SQL)
    ...sub('fundamentals-of-databases', 'structured-query-language-sql-7517', '4.10.4', [
      { n: 1, f: 'Write an SQL query to list names of students in Year 12, sorted by name.', b: 'SELECT Name FROM Student WHERE Year = 12 ORDER BY Name;' },
      { n: 2, f: 'What do the SQL statements INSERT, UPDATE and DELETE do?', b: 'INSERT INTO adds a new record.\nUPDATE … SET … WHERE changes values in existing records.\nDELETE FROM … WHERE removes records.' },
      { n: 3, f: 'In which order do the clauses of an SQL SELECT statement appear?', b: 'SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY. Only SELECT and FROM are compulsory.', src: 'aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes' },
      { n: 4, f: 'What is the difference between WHERE and HAVING?', b: 'WHERE filters rows before grouping. HAVING filters groups after grouping, so conditions on aggregates such as COUNT or SUM go in HAVING.', src: 'aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes' },
      { n: 5, f: 'How do you join tables in SQL?', b: 'Use INNER JOIN ... ON, matching a foreign key to the primary key it refers to, for example Member.MemberID = Loan.MemberID. Without an ON condition every row pairs with every row.', src: 'aqa-a-level-computer-science-7517-structured-query-language-sql-revision-notes' },
    ]),
    // 4.10.5 Client server databases
    ...sub('fundamentals-of-databases', 'client-server-databases-7517', '4.10.5', [
      { n: 1, f: 'What problem arises when two users update the same record at once in a client-server database?', b: 'Lost update: one user’s change overwrites the other’s. It is prevented by record locking, serialisation, timestamp ordering or commitment ordering.' },
      { n: 2, f: 'What is record locking?', b: 'When one transaction is updating a record, the record is locked so no other transaction can change it until the first is finished. It can cause deadlock if two transactions wait for each other.' },
      { n: 3, f: 'What is a client server database?', b: 'The database and its management system sit on a server. Clients send requests over a network, many at the same time, and everyone sees the same current data, with security and back-up managed centrally.', src: 'aqa-a-level-computer-science-7517-client-server-databases-revision-notes' },
      { n: 4, f: 'What is a transaction in a database?', b: 'A sequence of operations treated as one unit of work, for example read, calculate and write. Concurrency control stops overlapping transactions from corrupting each other\'s results.', src: 'aqa-a-level-computer-science-7517-client-server-databases-revision-notes' },
      { n: 5, f: 'How do serialisation and timestamp ordering control concurrent access?', b: 'Serialisation makes overlapping transactions give the same result as running them one at a time. Timestamp ordering makes conflicting operations happen in timestamp order, aborting and restarting a transaction that breaks it.', src: 'aqa-a-level-computer-science-7517-client-server-databases-revision-notes' },
    ]),

    // 4.11 Big Data
    // 4.11.1 Big Data
    ...sub('big-data', 'big-data-7517', '4.11.1', [
      { n: 1, f: 'What is Big Data?', b: 'Data that will not fit on a single server and is too large or complex for a conventional relational database, described by volume, velocity and variety.' },
      { n: 2, f: 'What do volume, velocity and variety mean for Big Data?', b: 'Volume: too much data for one server.\nVelocity: data arrives, and must be processed, very quickly (often streamed).\nVariety: many types of data, often unstructured (text, images, video).' },
      { n: 3, f: 'Why is Big Data processed across many machines?', b: 'One machine cannot store or process it fast enough, so the work is split across a cluster of servers working in parallel.' },
      { n: 4, f: 'Why is functional programming suited to distributed processing of Big Data?', b: 'Functions have no side effects and data is immutable, so parts of the work can run in parallel on different machines without interfering with each other.' },
      { n: 5, f: 'What is the fact-based model for representing data?', b: 'Each fact holds one piece of information and is immutable and timestamped; facts are never overwritten, so the history is kept.' },
      { n: 6, f: 'What is a graph schema?', b: 'A way of showing the structure of a dataset as a graph: nodes for entities, edges for the relationships between them, and properties stored on the nodes.' },
    ]),

    // 4.12 Fundamentals of functional programming
    // 4.12.1 Functional programming paradigm
    ...sub('fundamentals-of-functional-programming', 'functional-programming-paradigm-7517', '4.12.1', [
      { n: 1, f: 'What is a function in functional programming?', b: 'A rule that maps each value in its domain to a value in its co-domain, written f: A → B. It has no side effects: the same input always gives the same output.' },
      { n: 2, f: 'What does it mean that functions are first-class objects?', b: 'They can be assigned to variables, passed as arguments, and returned as the results of other functions.' },
      { n: 3, f: 'What is partial function application?', b: 'Fixing some of a function’s arguments to produce a new function of the remaining arguments, e.g. add 3 gives a function that adds 3 to its argument.' },
      { n: 4, f: 'What is function composition?', b: 'Combining two functions so that the output of one becomes the input of the other: g ∘ f means apply f, then g.' },
    ]),
    // 4.12.2 Writing functional programs
    ...sub('fundamentals-of-functional-programming', 'writing-functional-programs-7517', '4.12.2', [
      { n: 1, f: 'What is a higher-order function?', b: 'A function that takes a function as an argument, returns a function, or both. Examples: map, filter and reduce (fold).' },
      { n: 2, f: 'What do map, filter and reduce (fold) do?', b: 'Map: applies a function to every item of a list, giving a new list.\nFilter: keeps the items that meet a condition.\nReduce/fold: combines the items into one value using a function, e.g. a sum.' },
      { n: 3, f: 'What is a lambda expression?', b: 'An unnamed function written in place, for example \\x -> x * x in Haskell style or lambda x: x * x in Python. It is often passed to map, filter or fold.', src: 'aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes' },
      { n: 4, f: 'Why does a fold need a starting value, and what values are typical?', b: 'The accumulator needs a value to combine with the first element. Use 0 for a sum, 1 for a product and an empty string for joining strings.', src: 'aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes' },
      { n: 5, f: 'What are the lengths of the lists returned by map, filter and fold?', b: 'Map returns a list of the same length. Filter returns a list that is the same length or shorter. Fold returns a single value. None changes the original list.', src: 'aqa-a-level-computer-science-7517-writing-functional-programs-revision-notes' },
    ]),
    // 4.12.3 Lists in functional programming
    ...sub('fundamentals-of-functional-programming', 'lists-in-functional-programming-7517', '4.12.3', [
      { n: 1, f: 'What are the head and tail of a list?', b: 'Head: the first element. Tail: the list of everything after the first element. Head of [4, 3, 5] is 4; tail is [3, 5].' },
      { n: 2, f: 'What is the empty list and what are its head and tail?', b: 'The empty list [] contains no elements, so it has no head and no tail. Taking the head or tail of [] is an error, so test for empty first.', src: 'aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes' },
      { n: 3, f: 'What is the difference between prepend and append?', b: 'Prepend adds one item to the front: 9 : xs. Append joins a list on the end: xs ++ [9]. For xs = [4, 3, 5] they give [9, 4, 3, 5] and [4, 3, 5, 9].', src: 'aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes' },
      { n: 4, f: 'What is the value of head (tail [4, 3, 5])?', b: '3. The tail of [4, 3, 5] is [3, 5], and the head of that list is 3.', src: 'aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes' },
      { n: 5, f: 'What are the two cases when defining a function on a list recursively?', b: 'The base case, the empty list [], and the recursive case x : xs, which uses the function on the tail. Each operation returns a new list.', src: 'aqa-a-level-computer-science-7517-lists-in-functional-programming-revision-notes' },
    ]),

    // 4.13 Systematic approach to problem solving
    // 4.13.1 Aspects of software development
    ...sub('systematic-approach-to-problem-solving-7517', 'aspects-of-software-development-7517', '4.13.1', [
      { n: 1, f: 'What happens in the analysis stage?', b: 'The problem is defined and the requirements are established with the client and users, often by interview and observation, and agreed as measurable objectives. A data model may be produced.' },
      { n: 2, f: 'What happens in the design stage?', b: 'Plans are made for the solution: data structures, algorithms, modular structure, the user interface, and the testing strategy.' },
      { n: 3, f: 'Why is prototyping and agile development useful?', b: 'Working versions are shown to users early and often, so feedback can be used to refine the requirements and design as development proceeds.' },
      { n: 4, f: 'What are normal, boundary and erroneous test data?', b: 'Normal: typical valid data, should be accepted.\nBoundary: values on and just beyond the limits.\nErroneous: invalid data, should be rejected.' },
      { n: 5, f: 'What happens in the evaluation stage?', b: 'The finished system is judged against the original requirements and objectives, with feedback from users, and possible improvements are identified.' },
    ]),
  ],
};
