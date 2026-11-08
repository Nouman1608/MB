/**
 * D-444 -- flashcards for Cambridge International AS & A Level Information
 * Technology 9626 (2025-2027).
 *
 * Topics 2 and 3 itemise subtopics in syllabus-topics.ts, so their cards use
 * `<subtopic number>-<n>`. The other 19 topics itemise none, so their cards
 * hang on the topic (topicOnly helper) and use `<topic number>-<n>`. Ids are
 * permanent (browser progress is keyed by them): add a new card with the next
 * unused n, never renumber.
 *
 * Not tiered (AS covers topics 1-11, the full A Level all 21; that staging is
 * not a tier). Written from Marlbridge's own 9626 revision notes and study
 * guides. Card text is plain text, so code and HTML are named in words.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9626); origin 'revision-notes'.
 *               The topic 2 and 3 notes map to their topic only, so cards on
 *               those subtopics carry no src.
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

const R = (t: string) => `a-level-cambridge-ict-${t}-revision-notes`;
const DP = 'a-ict-data-processing-revision-notes';
const ALG = R('algorithms-and-flowcharts');
const SEC = R('esecurity');
const DD = R('the-digital-divide');
const ES = R('expert-systems');
const SS = R('spreadsheets');
const MOD = R('modelling');
const DB = R('database-and-file-concepts');
const VA = R('video-and-audio-editing');
const ITS = R('it-in-society');
const NEW = R('new-and-emerging-technologies');
const COM = R('communications-technology');
const PM = R('project-management');
const SLC = R('system-life-cycle');
const DAV = R('data-analysis-and-visualisation');
const MM = R('mail-merge');
const GC = R('graphics-creation');
const ANI = R('animation');
const WEB = R('programming-for-the-web');

export const DECK_CAMBRIDGE_A_LEVEL_ICT: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'ict',
  syllabusCode: '9626',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Data processing and information
    ...topicOnly('data-processing-and-information', 1, [
      { n: 1, f: 'Data vs information', b: 'Data: raw facts and figures with no context, e.g. 37, Smith, 2410. Information: data given context and meaning, e.g. "Patient Smith\'s temperature is 37 °C".', src: DP },
      { n: 2, f: 'Direct vs indirect data sources', b: 'Direct data is collected for the purpose at hand (questionnaires, interviews, data logging, observation). Indirect data was collected for another purpose and reused (census data, the electoral register, weather data).', src: DP },
      { n: 3, f: 'Direct data: advantages and disadvantages', b: 'Relevant, current, of known accuracy and in the required format. But costly and slow to gather, and may need a large sample.', src: DP },
      { n: 4, f: 'Name five factors that affect the quality of information', b: 'Accuracy, relevance, age, level of detail and completeness.', src: DP },
      { n: 5, f: 'Symmetric vs asymmetric encryption', b: 'Symmetric: one secret key both encrypts and decrypts, so it must be shared securely; fast, but key sharing is the weak point. Asymmetric: a public key encrypts and only the matching private key decrypts; solves key sharing but is slower.', src: DP },
      { n: 6, f: 'Validation vs verification', b: 'Validation: an automatic check that data is reasonable and of the correct type; it cannot show data is correct. Verification: a check that data has been accurately entered, transferred or copied.', src: DP },
      { n: 7, f: 'Consistency check vs limit check', b: 'Consistency: one field is checked against another for a logical match, e.g. a start date before an end date. Limit: a value is checked against one boundary only, e.g. no more than 60 hours.', src: DP },
      { n: 8, f: 'Hash total vs control total', b: 'Both are totals compared before and after data entry or transfer. A hash total has no meaning (e.g. a sum of employee numbers); a control total is meaningful (e.g. total hours worked in a batch).', src: DP },
      { n: 9, f: 'Batch vs online vs real-time processing', b: 'Batch: data collected and processed later as a group (payroll, utility bills). Online: each transaction is processed as entered while the user waits (online shopping, EFT). Real-time: processed at once and the output affects the input (central heating, traffic lights).', src: DP },
    ]),

    // 2 Hardware and software
    ...sub('hardware-and-software', 'mainframe-computers-and-supercomputers', '2.1', [
      { n: 1, f: 'Mainframe vs supercomputer: what is each built for?', b: 'A mainframe is built for high-volume transaction throughput (e.g. census and transaction processing). A supercomputer is built for raw processing speed (e.g. weather forecasting, quantum mechanics).' },
      { n: 2, f: 'What does RAS stand for?', b: 'Reliability (how rarely it fails), availability (how much of the time it can be used) and serviceability (how quickly and easily it is repaired). It applies to both mainframes and supercomputers.' },
      { n: 3, f: 'What is fault tolerance?', b: 'The ability of a system to keep running, often in a reduced state, when a component fails.' },
      { n: 4, f: 'MIPS vs FLOPS', b: 'MIPS (millions of instructions per second) is usually quoted for a mainframe\'s transaction workload. FLOPS (floating-point operations per second) is usually quoted for a supercomputer\'s calculation-heavy workload.' },
    ]),
    ...sub('hardware-and-software', 'system-software', '2.2', [
      { n: 1, f: 'Name the types of system software on the 9626 syllabus', b: 'Compilers, interpreters, linkers, device drivers, operating systems and utilities.' },
      { n: 2, f: 'Compiler vs interpreter', b: 'A compiler translates and stores the whole program before it is executed. An interpreter translates and executes it line by line, which is why code under development is often run through an interpreter.' },
      { n: 3, f: 'What is a cross compiler?', b: 'A compiler that runs on one type of computer but produces machine code for a different type of computer.' },
      { n: 4, f: 'How can one high-level program run on different computer systems?', b: 'Through interpreters (the same source code runs anywhere a suitable interpreter exists) or cross compilers (machine code is produced for each target system).' },
    ]),
    ...sub('hardware-and-software', 'utility-software', '2.3', [
      { n: 1, f: 'Name six types of utility software on the 9626 syllabus', b: 'Any six of: anti-virus, back-up, data compression, disk defragmentation, formatting, file copying and deleting, file management systems, disk management systems.' },
      { n: 2, f: 'Name the three levels of disk formatting', b: 'Low-level formatting, partitioning and high-level formatting.' },
      { n: 3, f: 'System software vs utility software', b: 'System software manages or translates for the computer itself. Utility software performs a specific maintenance task, such as defragmenting a disk or making a back-up.' },
    ]),
    ...sub('hardware-and-software', 'custom-written-and-off-the-shelf-software', '2.4', [
      { n: 1, f: 'Off-the-shelf software: advantages and disadvantages', b: 'Lower cost, available immediately and well tested by many users. But it may include features that are not needed and cannot be tailored exactly to the organisation.' },
      { n: 2, f: 'Custom-written software: advantages and disadvantages', b: 'It matches the exact requirements and can be adapted as needs change. But it costs more, takes time to develop and depends on ongoing support from the developer.' },
      { n: 3, f: 'Proprietary vs open-source software', b: 'Proprietary software is owned by a company; its source code is kept private and use is licensed. Open-source software has publicly available source code that users can study, change and share.' },
    ]),
    ...sub('hardware-and-software', 'user-interfaces', '2.5', [
      { n: 1, f: 'Name the four types of user interface on the 9626 syllabus', b: 'Command line, graphical, dialogue and gesture-based.' },
      { n: 2, f: 'Who would a command line interface suit, and why?', b: 'A systems administrator managing many servers: it is fast, precise and scriptable. It would not suit untrained users, who cannot be expected to know the commands.' },
      { n: 3, f: 'Why does a graphical interface suit a public museum kiosk?', b: 'It needs no knowledge of commands and gives immediate visual feedback, so visitors of all ages can use it without training.' },
    ]),

    // 3 Monitoring and control
    ...sub('monitoring-and-control', 'monitoring-and-measurement-technologies', '3.1', [
      { n: 1, f: 'Monitoring vs control', b: 'Monitoring reads and records values for a person to review, e.g. a weather station logging humidity. Control triggers an automatic response with no human decision, e.g. a greenhouse vent opening at a set temperature.' },
      { n: 2, f: 'Name eight sensors on the 9626 syllabus', b: 'Any eight of: light/UV, temperature, pressure, humidity, pH, gas (oxygen, CO₂, CO, nitrogen oxides), sound, infrared, touch, (electro)magnetic field, proximity.' },
      { n: 3, f: 'One-point vs two-point vs multipoint calibration', b: 'One-point: checks against one known reference value. Two-point: checks at a low and a high point, correcting offset and scale error. Multipoint: checks several points, for the highest accuracy when the response is not linear.' },
      { n: 4, f: 'Why must a working sensor still be calibrated?', b: 'It may respond to changes but give every reading shifted by a consistent offset. Only comparing it with a known reference corrects this systematic error; repeated readings do not.' },
    ]),
    ...sub('monitoring-and-control', 'control-technologies', '3.2', [
      { n: 1, f: 'Describe the sensor-microprocessor-actuator loop in a greenhouse vent system', b: 'A temperature sensor takes a reading; the microprocessor compares it with a stored threshold; if it is higher, an actuator opens the vent; the sensor is checked continuously and the vent closes when the temperature falls.' },
      { n: 2, f: 'Name six types of actuator on the 9626 syllabus', b: 'Any six of: linear, rotary, soft, hydraulic, pneumatic, electric, thermal, magnetic, mechanical.' },
      { n: 3, f: 'Which sensor would detect an intruder\'s body heat in a burglar alarm, and which a phone held to the ear?', b: 'Body heat: an infrared sensor (no contact needed). Phone near the ear: a proximity sensor.' },
      { n: 4, f: 'Why is a control system called a closed loop?', b: 'After acting, it keeps re-checking the sensor, so the output affects the next input. It does not act once and stop.' },
    ]),

    // 4 Algorithms and flowcharts
    ...topicOnly('algorithms-and-flowcharts', 4, [
      { n: 1, f: 'What is a rogue value?', b: 'A value that marks the end of the data, such as -1 or 0, and is not processed.', src: ALG },
      { n: 2, f: 'WHILE ... ENDWHILE vs REPEAT ... UNTIL', b: 'WHILE tests at the start and continues while the condition is true, so it may run 0 times. REPEAT tests at the end and continues until the condition is true, so it always runs at least once.' },
      { n: 3, f: 'Which loop would you use to re-ask for a PIN until it is valid, and why?', b: 'REPEAT ... UNTIL, because the PIN must be asked for at least once and the test comes after the input.' },
      { n: 4, f: 'What values does FOR K ← 2 TO 20 STEP 6 produce?', b: '2, 8, 14 and 20: four passes.' },
      { n: 5, f: 'IF vs CASE', b: 'IF tests any condition. CASE matches the value of one variable against a list of values, with OTHERWISE catching anything not listed.' },
      { n: 6, f: 'What is a nested loop? How many times does the inner body run for an outer loop of 5 and inner of 3?', b: 'A loop inside another loop; the inner loop runs fully on every pass of the outer one. 5 × 3 = 15 times.', src: ALG },
      { n: 7, f: 'Which flowchart symbols are used for a subroutine and a connector?', b: 'Subroutine: a rectangle with double vertical lines at the sides, holding the procedure\'s name. Connector: a small circle with a letter, linking two parts of a chart.' },
      { n: 8, f: 'How do you process data ending in a rogue value with a WHILE loop?', b: 'INPUT the first value before the loop; loop WHILE the value is not the rogue value; process it, then INPUT the next value as the last line of the loop body.' },
      { n: 9, f: 'What is a trace table?', b: 'A table that records the value of each variable after each step, used to test an algorithm.', src: ALG },
    ]),

    // 5 eSecurity
    ...topicOnly('esecurity', 5, [
      { n: 1, f: 'What is personal data?', b: 'Information about a living person who can be identified from it, alone or combined with other data, e.g. name, address, date of birth, bank details, medical records.' },
      { n: 2, f: 'Anonymising vs aggregating data', b: 'Anonymising removes or replaces identifiers such as name and ID number from each record. Aggregating combines many records into totals or averages so no individual record is shown.' },
      { n: 3, f: 'What is a geotag, and why is it a risk?', b: 'A GPS location stored as metadata in a photo or video file. A posted photo could reveal where someone lives.' },
      { n: 4, f: 'Phishing, smishing, vishing and pharming', b: 'Phishing: email with a link to a fake site. Smishing: SMS text message. Vishing: phone call or voicemail. Pharming: malicious code or a tampered DNS redirects the browser even when the correct address is typed.' },
      { n: 5, f: 'Hardware firewall vs software firewall', b: 'A hardware firewall is a separate device that protects every device on the network and uses none of their resources. A software firewall runs on one computer, protects it on any network, and can control which applications use the network.' },
      { n: 6, f: 'Worm vs trojan', b: 'A worm is standalone and spreads across networks by itself. A trojan looks legitimate, has a hidden payload, and relies on a user installing it; it does not replicate.' },
      { n: 7, f: 'What are a rootkit and a malicious bot?', b: 'A rootkit gains administrator-level access and hides itself and other malware. A malicious bot lets an infected computer be controlled remotely as part of a botnet.' },
      { n: 8, f: 'Name four uses of malware', b: 'Fraud, theft (of money, data, identities or intellectual property), industrial espionage and sabotage.', src: SEC },
      { n: 9, f: 'Signature-based vs heuristic malware detection', b: 'Signature-based matches known malware, so it needs updates and misses new malware. Heuristic spots suspicious behaviour, so it can catch new malware but gives more false positives.' },
    ]),

    // 6 The digital divide
    ...topicOnly('the-digital-divide', 6, [
      { n: 1, f: 'What is the digital divide?', b: 'The gap between people who have access to modern information technology, and the skills to use it, and those who do not.' },
      { n: 2, f: 'Name five groups between which a digital divide exists', b: 'Age groups; cities and rural areas; levels of education; socioeconomic groups; more and less industrially developed nations.' },
      { n: 3, f: 'Why are rural areas affected by the digital divide?', b: 'They often have weaker wireless coverage and slower connections, so people cannot easily work or study online.', src: DD },
      { n: 4, f: 'How are socioeconomic groups affected by the digital divide?', b: 'Devices, connections and data cost money, so poorer households may have no device, or a shared low-performance device with limited data.', src: DD },
      { n: 5, f: 'Give four services people miss without internet access', b: 'Any four of: online banking, online shopping, online education, online job adverts and applications, government services, health appointments and consultations, email and video calls.' },
      { n: 6, f: 'Why are some older people on the wrong side of the digital divide?', b: 'Some did not use computers at school or work and may lack the skills or confidence, so they are excluded as services move online.', src: DD },
      { n: 7, f: 'How can the effects of the digital divide be reduced?', b: 'For example: public access points in libraries, free or low-cost devices and data, better rural broadband and mobile coverage, and digital skills training. Match the measure to the cause.' },
    ]),

    // 7 Expert systems
    ...topicOnly('expert-systems', 7, [
      { n: 1, f: 'What is an expert system?', b: 'A computer system that stores the knowledge of human experts in one field and uses rules to reason with it, producing possible solutions and explaining how it reached them.', src: ES },
      { n: 2, f: 'Name the components of an expert system', b: 'User interface, inference engine, knowledge base (a database of facts and a rules base), explanation system, and knowledge base editor.' },
      { n: 3, f: 'Inference engine vs explanation system', b: 'The inference engine does the reasoning: it matches facts to rules, fires rules and decides the next question. The explanation system reports how a conclusion was reached and why a question is asked.' },
      { n: 4, f: 'What is the knowledge base editor used for, and by whom?', b: 'To add, edit and delete facts and rules so the system stays up to date. It is used by the knowledge engineer or experts, not by the user entering case data.' },
      { n: 5, f: 'Forward chaining vs backward chaining', b: 'Forward chaining (data driven) starts with known facts and works from IF parts to THEN parts. Backward chaining (goal driven) starts with a goal and works back to test its IF conditions.' },
      { n: 6, f: 'Name six scenarios where expert systems are used', b: 'Any six of: mineral prospecting, investment analysis, financial planning, insurance planning, car engine fault diagnosis, medical diagnosis, route scheduling for delivery vehicles, plant and animal identification.' },
      { n: 7, f: 'Give two advantages and two disadvantages of expert systems', b: 'Advantages: consistent with no tiredness; available any time; combines several experts\' knowledge; explains its reasoning. Disadvantages: errors in the knowledge base give wrong advice; no common sense; expensive to build; needs updating.' },
    ]),

    // 8 Spreadsheets
    ...topicOnly('spreadsheets', 8, [
      { n: 1, f: 'Relative, absolute and mixed cell references', b: 'B4 is relative: both parts move when copied. $B$4 is absolute: nothing moves. $B4 fixes the column; B$4 fixes the row. A two-way table needs mixed references.' },
      { n: 2, f: 'COUNT vs COUNTA vs COUNTBLANK', b: 'COUNT counts cells with numbers only. COUNTA counts any non-empty cell. COUNTBLANK counts empty cells.', src: SS },
      { n: 3, f: 'INT vs ROUND. What are INT(-2.3) and ROUND(14.678, 1)?', b: 'INT rounds down to a whole number, so INT(-2.3) = -3. ROUND goes to the nearest value at the stated decimal places, so ROUND(14.678, 1) = 14.7.' },
      { n: 4, f: 'How are the arguments of SUMIF and SUMIFS ordered?', b: 'SUMIF(range, criterion, sum_range) puts the sum range last. SUMIFS(sum_range, range1, criterion1, ...) puts it first.' },
      { n: 5, f: 'How do you write an exact-match VLOOKUP?', b: 'VLOOKUP(lookup value, table, column number, FALSE). The table is an absolute range with the key in its first column; the column is counted from the table\'s first column; FALSE gives an exact match.' },
      { n: 6, f: 'How do you build nested IF bands?', b: 'List the bands from highest to lowest; test the highest first with >=; put the next IF in each false branch; the last false value is the lowest band; one closing bracket per IF.' },
      { n: 7, f: 'IFERROR vs ISERROR', b: 'IFERROR(formula, message) replaces an error with a value or message. ISERROR returns TRUE or FALSE.' },
      { n: 8, f: 'Pivot table vs subtotals', b: 'A pivot table builds a separate summary and needs no sorting. Subtotals insert totals into the list itself and need the data sorted by the grouping field first.' },
      { n: 9, f: 'Normal, extreme and abnormal test data for a percentage from 0 to 100', b: 'Normal: e.g. 57. Extreme: 0 and 100 (valid, on the limits). Abnormal: e.g. -1, 101 or "pass" (must be rejected).' },
      { n: 10, f: 'Input message vs error message in spreadsheet validation', b: 'An input message appears when the cell is selected and tells the user what to enter. An error message appears when the rule is broken and says what went wrong and what is allowed.' },
    ]),

    // 9 Modelling
    ...topicOnly('modelling', 9, [
      { n: 1, f: 'What is a computer model?', b: 'A representation of a real system using variables and rules (formulas) to predict how it behaves.' },
      { n: 2, f: 'Model vs simulation', b: 'The model is the set of rules and data. The simulation is the model being run, often over time or with chance events, to see how the system behaves.' },
      { n: 3, f: 'What-if analysis vs goal seek', b: 'What-if: you change an input and see how the output changes. Goal seek: you set a target output and the software finds the input that achieves it.', src: MOD },
      { n: 4, f: 'What three things does goal seek need?', b: 'The result cell (which must contain a formula), the target value, and the input cell to change (which must contain a value, not a formula).' },
      { n: 5, f: 'Give four uses of what-if analysis on the 9626 syllabus', b: 'Any four of: financial forecasting, population growth, climate change, weather systems, queue management, traffic flow, construction.' },
      { n: 6, f: 'Give four reasons for using computer models', b: 'Cheaper than building or testing the real thing; safer, as nobody is in danger; faster, as time can be speeded up; repeatable with one variable changed; can study things that cannot be tested for real.' },
      { n: 7, f: 'Give three weaknesses of spreadsheet models', b: 'Rules are simplified and not every variable is included; assumptions such as constant rates may not hold; only as accurate as the input data; one formula error spreads; poor at 3D, visual or real-time simulation.' },
      { n: 8, f: 'Name four simulations on the 9626 syllabus', b: 'Natural disaster planning, pilot training, learning to drive a car, and nuclear science research.' },
      { n: 9, f: 'Fixed costs are £1,200 and each ticket makes £8. How many tickets break even?', b: '1200 ÷ 8 = 150 tickets.' },
    ]),

    // 10 Database and file concepts
    ...topicOnly('database-and-file-concepts', 10, [
      { n: 1, f: 'Primary key, foreign key and composite key', b: 'Primary key: a unique value for every record. Foreign key: the primary key of another table stored to make a link; it may repeat. Composite key: two or more fields that are unique together.' },
      { n: 2, f: 'What is referential integrity?', b: 'The rule that every foreign key value must match an existing primary key value. It prevents orphan records.', src: DB },
      { n: 3, f: 'How is a many-to-many relationship built?', b: 'As two one-to-many relationships through a link table, e.g. Student and Course linked by an Enrolment table.' },
      { n: 4, f: 'What are the tests for 1NF, 2NF and 3NF?', b: '1NF: no repeating groups, atomic values, a primary key. 2NF: 1NF and no field depends on only part of a composite key. 3NF: 2NF and no non-key field depends on another non-key field.' },
      { n: 5, f: 'Employee(EmpID, DeptID, DeptName). Which normal form does it break?', b: '3NF. DeptName depends on DeptID, which is a non-key field (a transitive dependency).' },
      { n: 6, f: 'Static vs dynamic parameter query', b: 'A static parameter query has its criterion fixed in the design. A dynamic parameter query asks the user to type the value each time it runs.' },
      { n: 7, f: 'Name the four action queries', b: 'Make-table (copy results into a new table), append (add results to an existing table), delete (remove matching records) and update (change values in matching records).' },
      { n: 8, f: 'Indexed sequential vs direct access files', b: 'Indexed sequential: records in key order plus an index; good for sequential runs and fairly fast single look-ups. Direct access: hashing turns the key into an address; fastest single look-up, poor for processing in order.' },
      { n: 9, f: 'Name eight components of a data dictionary', b: 'Any eight of: field name, data type, field size, format, key, validation rule, error text, default value, whether required, description, table name.' },
      { n: 10, f: 'Conceptual vs logical vs physical ERD', b: 'Conceptual: entities and relationships only. Logical: adds attributes and keys. Physical: adds real table and field names, data types and sizes.' },
    ]),

    // 11 Video and audio editing
    ...topicOnly('video-and-audio-editing', 11, [
      { n: 1, f: 'Trim vs crop in video editing', b: 'Trimming removes time: unwanted footage from the start or end of a clip. Cropping removes the edges of the frame or image.' },
      { n: 2, f: 'Subtitle vs caption', b: 'Subtitles show the spoken words. Captions show speech and other sounds, e.g. [phone rings], for deaf and hard-of-hearing viewers.', src: VA },
      { n: 3, f: 'Interframe vs intraframe video compression', b: 'Interframe stores only the changes between key frames, giving much smaller files, but suffers when the whole picture changes. Intraframe compresses each frame on its own, so files are larger but quality does not depend on other frames.' },
      { n: 4, f: 'Compare MP4, AVI, MOV and WMV', b: 'MP4: small for its quality and plays almost everywhere, but usually lossy. AVI: widely played on Windows but often large. MOV: Apple, high quality, suits editing, but large. WMV: Microsoft, small, weaker support elsewhere.' },
      { n: 5, f: 'What does normalising audio do?', b: 'It applies the same gain to the whole clip so the loudest peak reaches a target level, which may be quieter or louder. Any DC offset should be removed first.' },
      { n: 6, f: 'High pass vs low pass filter', b: 'Named after what they let through. A high pass filter keeps frequencies above the cut-off, removing rumble and hum. A low pass filter keeps frequencies below it, removing hiss.' },
      { n: 7, f: 'Echo vs reverberation', b: 'Echo (delay) gives distinct, quieter repeats after a set time. Reverb is many dense reflections blended together, sounding like a room or hall.' },
      { n: 8, f: 'How do you calculate the size of uncompressed audio?', b: 'Bits = sampling rate × sampling resolution × channels × seconds; ÷ 8 for bytes. E.g. 8,000 Hz × 8 bits × 1 channel × 10 s = 640,000 bits = 80,000 bytes.' },
      { n: 9, f: 'File vs container', b: 'A plain file holds one stream encoded one way. A container such as MP4 or MOV wraps one or more streams plus information about them; the codec inside sets the compression.' },
      { n: 10, f: 'WAV: one advantage and one disadvantage', b: 'Advantage: usually uncompressed, so full quality and best for editing. Disadvantage: very large files.' },
    ]),

    // 12 IT in society
    ...topicOnly('it-in-society', 12, [
      { n: 1, f: 'Virtual currency vs cryptocurrency', b: 'A virtual currency is issued and controlled by its developers and used in one online community. A cryptocurrency is a virtual currency secured by cryptography and recorded on a decentralised ledger.' },
      { n: 2, f: 'Centralised vs decentralised digital currencies', b: 'Centralised: one authority, such as a bank, checks transactions and keeps the record (debit and credit cards, EPOS). Decentralised: a network of peers checks them and every node holds a copy of the ledger (Bitcoin, Litecoin).' },
      { n: 3, f: 'Describe how a blockchain works', b: 'Transactions are grouped into a block; the block stores the hash of the previous block; nodes agree the block is valid; it is added to every copy of the ledger. Editing an old block changes its hash and breaks the link.' },
      { n: 4, f: 'What is data mining?', b: 'Using software to search large data sets for previously unknown patterns, relationships and anomalies, to make predictions and support decisions.' },
      { n: 5, f: 'Name the six stages of data mining in order', b: 'Business understanding, data understanding, data preparation, data modelling, evaluation, deployment.', src: ITS },
      { n: 6, f: 'Instant messaging vs chat room', b: 'Instant messaging is real-time messaging with known contacts or small groups. A chat room is a real-time, topic-based space open to many users, often strangers.' },
      { n: 7, f: 'Give two negative impacts of social networking on individuals', b: 'Any two of: intellectual isolation, effects on physical and mental health, ideological polarisation, stereotyping, cognitive issues.' },
      { n: 8, f: 'MOOC vs networked course', b: 'A MOOC (massive open online course) is open to anyone at very large scale, with little individual support. A networked course is delivered to a closed group over one network.' },
      { n: 9, f: 'Give one benefit and one drawback of surveillance by the police', b: 'Benefit: CCTV, number plate and facial recognition help detect crime. Drawback: mass surveillance reduces privacy and misidentification can occur.' },
    ]),

    // 13 New and emerging technologies
    ...topicOnly('new-and-emerging-technologies', 13, [
      { n: 1, f: 'AR vs VR', b: 'Augmented reality adds computer images to a live view of the real world. Virtual reality replaces the real world with a fully computer-generated, immersive 3D environment.' },
      { n: 2, f: 'Computer-assisted translation vs machine translation', b: 'In computer-assisted translation a human translates with software help (translation memory, terminology database). In machine translation the software translates on its own.' },
      { n: 3, f: 'How does 3D printing make an object?', b: 'A CAD model is created or scanned; software slices it into thin layers; the printer deposits or hardens material one layer at a time; the object may then be finished.' },
      { n: 4, f: 'How does an autonomous vehicle drive itself?', b: 'Sensors (cameras, radar, lidar, GPS) collect data; AI software identifies objects; the system decides speed and direction; actuators steer, brake and accelerate; the loop repeats many times a second.' },
      { n: 5, f: 'Internet of Things vs wearable computing', b: 'The IoT is any everyday object with sensors and a network connection, such as a smart meter. Wearables are computing devices worn on the body. A connected smartwatch is both.' },
      { n: 6, f: 'What is molecular data storage?', b: 'Data encoded in molecules, such as DNA base sequences. It has extreme density and a long life, but reading and writing are slow and expensive.' },
      { n: 7, f: 'Name the five medical areas affected by new technologies on the 9626 syllabus', b: 'Patient care and monitoring, prosthetics, tissue engineering, artificial blood vessels, and medical tools and equipment.' },
      { n: 8, f: 'Name the five environmental areas affected by new technologies', b: 'E-waste, recycling, power consumption, manufacturing processes, and energy from wireless signals.' },
      { n: 9, f: 'How do new technologies affect power consumption?', b: 'AI data centres and some blockchains use a lot of energy, but smart IoT controls can save energy.', src: NEW },
    ]),

    // 14 Communications technology
    ...topicOnly('communications-technology', 14, [
      { n: 1, f: 'Physical vs logical topology', b: 'Physical topology is the cabling layout; logical topology is how data flows. A hub-based star is a physical star but a logical bus.', src: COM },
      { n: 2, f: 'Hub vs switch', b: 'A hub broadcasts to all ports. A switch sends a frame only to the port of the destination MAC address.', src: COM },
      { n: 3, f: 'Bridge vs router vs gateway', b: 'A bridge joins two segments using the same protocol. A router forwards packets between networks by IP address. A gateway joins networks that use different protocols.', src: COM },
      { n: 4, f: 'What does a repeater do, and what does a WAP do?', b: 'A repeater regenerates a weak signal. A wireless access point joins wireless devices to a cabled LAN.', src: COM },
      { n: 5, f: 'What does a proxy server do?', b: 'It acts as a go-between for internet requests: it filters them, caches pages and hides internal addresses.', src: COM },
      { n: 6, f: 'Packet vs circuit vs message switching', b: 'Packet: data split into packets that take separate routes and are reassembled. Circuit: a dedicated channel for the whole session. Message: the whole message is stored and forwarded node by node.', src: COM },
      { n: 7, f: 'Static vs dynamic routing', b: 'Static routing uses manually set tables: secure, but cannot adapt. Dynamic routing updates automatically: it adapts to changes but uses bandwidth.', src: COM },
      { n: 8, f: 'How does BitTorrent transfer a file?', b: 'The file is split into pieces downloaded from many peers at once, and each peer also uploads pieces to others.', src: COM },
      { n: 9, f: 'How is data sent by satellite?', b: 'Data is encoded and modulated, sent from a ground station uplink, amplified by the satellite\'s transponder, sent down on another frequency, and decoded by the receiving dish.', src: COM },
      { n: 10, f: 'How can the effects of a disaster on a network be minimised?', b: 'UPS and surge protection, passwords and access control, anti-malware, off-site back-ups and a tested restore plan.', src: COM },
    ]),

    // 15 Project management
    ...topicOnly('project-management', 15, [
      { n: 1, f: 'Name the four stages of the project life cycle', b: 'Initiation, planning, execution and monitoring, and close.' },
      { n: 2, f: 'Initiation vs planning', b: 'Initiation decides what the project is and whether to do it. Planning decides how and when, task by task.', src: PM },
      { n: 3, f: 'Objective vs success criterion', b: 'An objective is what the project must achieve, e.g. "launch online booking". A success criterion measures whether it was met, e.g. "60% of bookings online within two months".', src: PM },
      { n: 4, f: 'What is scope, and what is scope creep?', b: 'Scope is the boundary of the project: what is in and what is out. Scope creep is uncontrolled growth of that boundary.', src: PM },
      { n: 5, f: 'What three constraints are monitored during a project?', b: 'Time (against the schedule), cost (against the budget) and quality (against agreed standards, e.g. by testing).', src: PM },
      { n: 6, f: 'Name the six uses of project management software', b: 'Planning, scheduling of tasks, allocation of resources, costings, communication, and collaborative working and decisions.' },
      { n: 7, f: 'What is the critical path?', b: 'The longest sequence of dependent activities through a project. It sets the shortest possible project time; any delay to a critical activity delays the whole project. Critical activities have zero float.' },
      { n: 8, f: 'What is float in critical path analysis?', b: 'The time an activity can be delayed without delaying the whole project. Staff can be moved from activities with float to critical ones.' },
      { n: 9, f: 'Why are projects reviewed at close?', b: 'To check objectives and success criteria were met, compare actual time and cost with the plan, find what went well and badly, record lessons for future projects and confirm stakeholders are satisfied.' },
    ]),

    // 16 System life cycle
    ...topicOnly('system-life-cycle', 16, [
      { n: 1, f: 'Name the stages of the system life cycle in order', b: 'Analysis, design, development and testing, implementation, documentation, evaluation, then maintenance.', src: SLC },
      { n: 2, f: 'User requirements specification vs design specification', b: 'The user requirements specification says what users need. The design specification says how the system will be built.' },
      { n: 3, f: 'Data flow diagram vs system flowchart', b: 'A DFD shows the movement of data. A system flowchart shows hardware, files and processes.' },
      { n: 4, f: 'Phased vs pilot implementation', b: 'Phased: one part of the system is introduced everywhere at a time. Pilot: the whole system is introduced in one place first.' },
      { n: 5, f: 'Waterfall vs agile development', b: 'Waterfall completes one stage at a time with sign-off: a clear plan, but late changes are expensive. Agile uses short cycles with close customer contact: it handles changing needs but needs constant user time.' },
      { n: 6, f: 'What is RAD?', b: 'Rapid application development: fast prototypes, workshops with users and strict time limits. Quick and user-focused, but poor for large, complex systems.' },
      { n: 7, f: 'Evolutionary vs throwaway prototyping', b: 'An evolutionary prototype is refined until it becomes the final system. A throwaway prototype is discarded once the requirements are clear.' },
      { n: 8, f: 'Name the four types of maintenance', b: 'Corrective (fix a fault), adaptive (the environment changed, e.g. law or operating system), perfective (users want improvements) and preventive (reduce the risk of future faults).' },
      { n: 9, f: 'What criteria are used to evaluate a system?', b: 'Efficiency, ease of use and appropriateness for its intended use, judged by checking against the specifications and user requirements and collecting user feedback.', src: SLC },
    ]),

    // 17 Data analysis and visualisation
    ...topicOnly('data-analysis-and-visualisation', 17, [
      { n: 1, f: 'Cleaning vs transforming data', b: 'Cleaning fixes errors in the data. Transforming reshapes data that is already correct.', src: DAV },
      { n: 2, f: 'Splitting vs merging fields', b: 'Splitting turns one field into many, e.g. a full name into first name and surname. Merging joins many fields into one.', src: DAV },
      { n: 3, f: 'Comparing vs consolidating data', b: 'Comparing finds the differences between sources. Consolidating produces one combined data set from them.', src: DAV },
      { n: 4, f: 'Pivot table vs pivot chart', b: 'A pivot table holds the summary numbers. A pivot chart is a linked chart of them.', src: DAV },
      { n: 5, f: 'Pivot table vs SUMIF formulas', b: 'A pivot table is quick to rearrange and picks up new categories on refresh. SUMIF needs one formula per total but recalculates automatically.', src: DAV },
      { n: 6, f: 'Row or column field vs filter field in a pivot table', b: 'A row or column field groups the records. A filter field includes only some of the records.', src: DAV },
      { n: 7, f: 'Why must dates be stored as true dates, not date-like text?', b: 'Only a true date sorts in date order, groups by month and works in date calculations.', src: DAV },
    ]),

    // 18 Mail merge
    ...topicOnly('mail-merge', 18, [
      { n: 1, f: 'When is mail merge used?', b: 'When the same document goes to many people with some details different, e.g. letters, invoices, reminders, certificates, badges, labels and directories.', src: MM },
      { n: 2, f: 'Why use mail merge?', b: 'The fixed text is typed once; every copy has the same layout; data is not retyped, so there are fewer errors; copies are personalised; rules send copies only where needed.', src: MM },
      { n: 3, f: 'Give two drawbacks of mail merge', b: 'One error in the source data repeats in every copy that uses it; set-up time is not worth it for very few documents; bulk post may be seen as junk.', src: MM },
      { n: 4, f: 'Fill-in vs Ask fields', b: 'Fill-in shows the user\'s answer where the field sits. Ask stores the answer so it can be used elsewhere, possibly several times or in a condition.', src: MM },
      { n: 5, f: 'If Then Else vs Skip Record If', b: 'If Then Else changes what a copy says. Skip Record If stops that copy being produced at all.', src: MM },
      { n: 6, f: 'Skip Record If vs Next Record If', b: 'Skip Record If removes a whole copy. Next Record If moves on one record inside the same document, without re-testing the new record.', src: MM },
      { n: 7, f: 'Letter merge vs directory merge', b: 'A letter merge produces one document per record. A directory merge puts all the records into one document.', src: MM },
      { n: 8, f: 'Embedded vs linked object in a master document', b: 'An embedded object is a stored copy that does not change when its original file changes. A linked object updates from its file.', src: MM },
    ]),

    // 19 Graphics creation
    ...topicOnly('graphics-creation', 19, [
      { n: 1, f: 'What happens if an image\'s resolution is too low or too high?', b: 'Too low: blocky or soft images, worst in print or when enlarged. Too high: no visible gain on screen, but larger files, slower web pages and more storage.', src: GC },
      { n: 2, f: 'What is a Bezier curve?', b: 'A vector curve whose shape is set by its end nodes and their control handles, which set the direction and strength of the bend.', src: GC },
      { n: 3, f: 'What does tracing a bitmap gain and lose?', b: 'It turns edges and colour areas into vector paths. Gains: scalable, editable, small for simple logos. Losses: detail and shading, many nodes for complex images, and clean-up time.', src: GC },
      { n: 4, f: 'Kerning vs letter spacing', b: 'Kerning adjusts the space between one pair of letters. Letter spacing sets even spacing across all the selected letters.', src: GC },
      { n: 5, f: 'What does converting text to curves do?', b: 'The letters become paths, so no font is needed and letters can be reshaped, but the text can no longer be edited as text.', src: GC },
      { n: 6, f: 'Lossless vs lossy image compression', b: 'Lossless rebuilds the original exactly, e.g. run-length encoding (RRRRBB → 4R 2B), and is best on flat colour. Lossy permanently removes detail for much smaller files, giving artefacts that get worse with each re-save.', src: GC },
      { n: 7, f: 'Bring to front vs raise', b: 'Raise moves an object up one step in the stacking order. Bring to front moves it all the way to the top.', src: GC },
      { n: 8, f: 'What is the effect of reducing colour depth?', b: 'Fewer bits per pixel give a smaller file but fewer colours, so smooth areas show banding.', src: GC },
    ]),

    // 20 Animation
    ...topicOnly('animation', 20, [
      { n: 1, f: 'Key frame vs tweened frame', b: 'A key frame is a frame where you set or change a value. Tweened frames are generated by the software between two key frames.' },
      { n: 2, f: 'Motion tween vs shape tween', b: 'A motion tween moves an object (its position, possibly along a path). A shape tween changes an object\'s outline into another shape.' },
      { n: 3, f: 'Shape tween vs morphing', b: 'A shape tween changes vector shapes. Morphing warps and cross-fades one image seamlessly into another.' },
      { n: 4, f: 'Layer vs mask', b: 'A layer holds objects that animate independently. A mask is a shape that decides which parts of the layers it masks are visible.' },
      { n: 5, f: 'Stop motion vs time lapse', b: 'Stop motion: you move the objects between photos. Time lapse: the scene changes by itself between photos taken at intervals.' },
      { n: 6, f: 'What is frame rate?', b: 'The number of frames shown per second (fps).' },
      { n: 7, f: 'Primary vs secondary components of an animation', b: 'Primary components are the main focus, e.g. the main characters. Secondary components support them, e.g. sound and background.', src: ANI },
      { n: 8, f: 'Loop vs stop at the end of an animation', b: 'Loop replays from the start, e.g. banners and loading icons. Stop holds on the final frame, e.g. an advert ending on a logo.' },
      { n: 9, f: '2D vs 3D animation', b: '2D uses x and y only: quicker, cheaper and smaller files, but less realistic depth. 3D uses x, y and z with models, lighting, camera and rendering: realistic, but complex with long render times.' },
    ]),

    // 21 Programming for the web
    ...topicOnly('programming-for-the-web', 21, [
      { n: 1, f: 'How is JavaScript added to a web page?', b: 'Inside a script element in the HTML, or in an external .js file linked using the script element\'s src attribute.' },
      { n: 2, f: 'What is a variable in JavaScript, and how is it declared?', b: 'A named store whose value can change, declared with let, const or var.', src: WEB },
      { n: 3, f: 'Literal vs expression', b: 'A literal is a fixed value written in the code, such as 7, "Lahore" or false. An expression is values and operators that work out to one value, such as price * qty.', src: WEB },
      { n: 4, f: 'What is a JavaScript array, and where does its index start?', b: 'An ordered list in square brackets. The first index is 0.', src: WEB },
      { n: 5, f: 'What do alert, confirm and prompt return?', b: 'alert shows a message with OK and returns nothing useful. confirm returns true (OK) or false (Cancel). prompt returns the typed string, an empty string if nothing is typed, or null on Cancel.' },
      { n: 6, f: 'When do onload, onchange, onclick and onkeydown fire?', b: 'onload: when the page or image finishes loading. onchange: when a value changes (a text box fires when it loses focus). onclick: when the element is clicked. onkeydown: when a key is pressed.' },
      { n: 7, f: 'Name four ways JavaScript can display data', b: 'innerHTML, document.write(), window.alert() and console.log().' },
      { n: 8, f: 'How do you change an element\'s style with JavaScript?', b: 'document.getElementById(id).style.property = new value, e.g. setting style.display or style.visibility to show or hide it.' },
      { n: 9, f: 'setTimeout vs setInterval', b: 'setTimeout runs a function once after a delay. setInterval runs it repeatedly at a fixed interval until cleared.' },
      { n: 10, f: 'What is a JavaScript event?', b: 'Something that happens to an HTML element, such as a click or a page loading, which can trigger code.', src: WEB },
    ]),
  ],
};
