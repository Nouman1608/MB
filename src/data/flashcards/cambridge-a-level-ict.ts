/**
 * D-444 -- flashcards for Cambridge International AS & A Level Information
 * Technology 9626 (2025-2027).
 *
 * Every one of the 21 topics itemises subtopics in syllabus-topics.ts, so
 * every card is keyed `<subtopic number>-<n>`, in one block per subtopic.
 * Topics 1 and 4-21 were first written as whole-topic cards (`<topic
 * number>-<n>`) and re-filed on 20 Nov 2026 when the syllabus record gained
 * its numbered sub-headings; `idMigration` below moves browser progress saved
 * before then onto the new ids. Ids are permanent: add a new card with the
 * next unused n, never renumber.
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
const P9626 = (t: string) => `cambridge-a-level-ict-9626-${t}-revision-notes`;
const GAC = P9626('graphs-and-charts');
const CLOUD = P9626('cloud-computing');
const PROT = P9626('network-protocols');
const WIRE = P9626('wireless-technology');
const NSEC = P9626('network-security');
const DEVT = P9626('development-testing');
const DOCS = P9626('documentation');

export const DECK_CAMBRIDGE_A_LEVEL_ICT: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'ict',
  // D-484: recorded on the owner's word (16 Nov 2026), accountable teacher for this course.
  deckReview: { reviewerSlug: 'harris-khan', reviewedOn: '2026-11-16' },
  syllabusCode: '9626',
  syllabusSeries: '2025-2027',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  idMigration: {
    id: '9626-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-1': '1.1-1', '1-2': '1.1-2', '1-3': '1.1-3', '1-4': '1.2-1', '1-5': '1.3-1', '1-6': '1.4-1', '1-7': '1.4-2', '1-8': '1.4-3', '1-9': '1.5-1',
      '2.1-1': '2.1-1', '2.1-2': '2.1-2', '2.1-3': '2.1-3', '2.1-4': '2.1-4',
      '2.2-1': '2.2-1', '2.2-2': '2.2-2', '2.2-3': '2.2-3', '2.2-4': '2.2-4',
      '2.3-1': '2.3-1', '2.3-2': '2.3-2', '2.3-3': '2.3-3',
      '2.4-1': '2.4-1', '2.4-2': '2.4-2', '2.4-3': '2.4-3',
      '2.5-1': '2.5-1', '2.5-2': '2.5-2', '2.5-3': '2.5-3',
      '3.1-1': '3.1-1', '3.1-2': '3.1-2', '3.1-3': '3.1-3', '3.1-4': '3.1-4',
      '3.2-1': '3.2-1', '3.2-2': '3.2-2', '3.2-3': '3.2-3', '3.2-4': '3.2-4',
      '4-1': '4.1-1', '4-2': '4.1-2', '4-3': '4.1-3', '4-4': '4.1-4', '4-5': '4.1-5', '4-6': '4.1-6', '4-7': '4.2-1', '4-8': '4.1-7', '4-9': '4.1-8',
      '5-1': '5.1-1', '5-2': '5.1-2', '5-3': '5.1-3', '5-4': '5.1-4', '5-5': '5.1-5', '5-6': '5.2-1', '5-7': '5.2-2', '5-8': '5.2-3', '5-9': '5.2-4',
      '6-1': '6.1-1', '6-2': '6.1-2', '6-3': '6.1-3', '6-4': '6.1-4', '6-5': '6.1-5', '6-6': '6.1-6', '6-7': '6.1-7',
      '7-1': '7.1-1', '7-2': '7.1-2', '7-3': '7.1-3', '7-4': '7.1-4', '7-5': '7.1-5', '7-6': '7.1-6', '7-7': '7.1-7',
      '8-1': '8.1-1', '8-2': '8.1-2', '8-3': '8.1-3', '8-4': '8.1-4', '8-5': '8.1-5', '8-6': '8.1-6', '8-7': '8.1-7', '8-8': '8.3-1', '8-9': '8.2-1', '8-10': '8.1-8',
      '9-1': '9.1-1', '9-2': '9.1-2', '9-3': '9.1-3', '9-4': '9.1-4', '9-5': '9.1-5', '9-6': '9.1-6', '9-7': '9.1-7', '9-8': '9.1-8', '9-9': '9.1-9',
      '10-1': '10.1-1', '10-2': '10.1-2', '10-3': '10.1-3', '10-4': '10.2-1', '10-5': '10.2-2', '10-6': '10.1-4', '10-7': '10.1-5', '10-8': '10.4-1', '10-9': '10.3-1', '10-10': '10.1-6',
      '11-1': '11.1-1', '11-2': '11.1-2', '11-3': '11.1-3', '11-4': '11.1-4', '11-5': '11.2-1', '11-6': '11.2-2', '11-7': '11.2-3', '11-8': '11.2-4', '11-9': '11.2-5', '11-10': '11.2-6',
      '12-1': '12.1-1', '12-2': '12.1-2', '12-3': '12.1-3', '12-4': '12.2-1', '12-5': '12.2-2', '12-6': '12.3-1', '12-7': '12.3-2', '12-8': '12.5-1', '12-9': '12.4-1',
      '13-1': '13.1-1', '13-2': '13.1-2', '13-3': '13.1-3', '13-4': '13.1-4', '13-5': '13.1-5', '13-6': '13.1-6', '13-7': '13.1-7', '13-8': '13.1-8', '13-9': '13.1-9',
      '14-1': '14.1-1', '14-2': '14.2-1', '14-3': '14.2-2', '14-4': '14.2-3', '14-5': '14.3-1', '14-6': '14.5-1', '14-7': '14.5-2', '14-8': '14.5-3', '14-9': '14.8-1', '14-10': '14.10-1',
      '15-1': '15.1-1', '15-2': '15.1-2', '15-3': '15.1-3', '15-4': '15.1-4', '15-5': '15.1-5', '15-6': '15.2-1', '15-7': '15.3-1', '15-8': '15.3-2', '15-9': '15.1-6',
      '16-1': '16.1-1', '16-2': '16.2-1', '16-3': '16.3-1', '16-4': '16.5-1', '16-5': '16.8-1', '16-6': '16.8-2', '16-7': '16.9-1', '16-8': '16.10-1', '16-9': '16.7-1',
      '17-1': '17.1-1', '17-2': '17.1-2', '17-3': '17.1-3', '17-4': '17.1-4', '17-5': '17.1-5', '17-6': '17.1-6', '17-7': '17.1-7',
      '18-1': '18.1-1', '18-2': '18.1-2', '18-3': '18.1-3', '18-4': '18.1-4', '18-5': '18.1-5', '18-6': '18.1-6', '18-7': '18.1-7', '18-8': '18.1-8',
      '19-1': '19.3-1', '19-2': '19.2-1', '19-3': '19.2-2', '19-4': '19.5-1', '19-5': '19.5-2', '19-6': '19.4-1', '19-7': '19.1-1', '19-8': '19.3-2',
      '20-1': '20.1-1', '20-2': '20.1-2', '20-3': '20.1-3', '20-4': '20.1-4', '20-5': '20.1-5', '20-6': '20.1-6', '20-7': '20.1-7', '20-8': '20.1-8', '20-9': '20.1-9',
      '21-1': '21.1-1', '21-2': '21.1-2', '21-3': '21.1-3', '21-4': '21.1-4', '21-5': '21.1-5', '21-6': '21.1-6', '21-7': '21.1-7', '21-8': '21.1-8', '21-9': '21.1-9', '21-10': '21.1-10',
    },
  },
  cards: [
    // 1 Data processing and information
    // 1.1 Data and information
    ...sub('data-processing-and-information', 'data-and-information', '1.1', [
      { n: 1, f: 'Data vs information', b: 'Data: raw facts and figures with no context, e.g. 37, Smith, 2410. Information: data given context and meaning, e.g. "Patient Smith\'s temperature is 37 °C".', src: DP },
      { n: 2, f: 'Direct vs indirect data sources', b: 'Direct data is collected for the purpose at hand (questionnaires, interviews, data logging, observation). Indirect data was collected for another purpose and reused (census data, the electoral register, weather data).', src: DP },
      { n: 3, f: 'Direct data: advantages and disadvantages', b: 'Relevant, current, of known accuracy and in the required format. But costly and slow to gather, and may need a large sample.', src: DP },
    ]),
    // 1.2 Quality of information
    ...sub('data-processing-and-information', 'quality-of-information', '1.2', [
      { n: 1, f: 'Name five factors that affect the quality of information', b: 'Accuracy, relevance, age, level of detail and completeness.', src: DP },
    ]),
    // 1.3 Encryption
    ...sub('data-processing-and-information', 'encryption', '1.3', [
      { n: 1, f: 'Symmetric vs asymmetric encryption', b: 'Symmetric: one secret key both encrypts and decrypts, so it must be shared securely; fast, but key sharing is the weak point. Asymmetric: a public key encrypts and only the matching private key decrypts; solves key sharing but is slower.', src: DP },
    ]),
    // 1.4 Checking the accuracy of data
    ...sub('data-processing-and-information', 'checking-the-accuracy-of-data', '1.4', [
      { n: 1, f: 'Validation vs verification', b: 'Validation: an automatic check that data is reasonable and of the correct type; it cannot show data is correct. Verification: a check that data has been accurately entered, transferred or copied.', src: DP },
      { n: 2, f: 'Consistency check vs limit check', b: 'Consistency: one field is checked against another for a logical match, e.g. a start date before an end date. Limit: a value is checked against one boundary only, e.g. no more than 60 hours.', src: DP },
      { n: 3, f: 'Hash total vs control total', b: 'Both are totals compared before and after data entry or transfer. A hash total has no meaning (e.g. a sum of employee numbers); a control total is meaningful (e.g. total hours worked in a batch).', src: DP },
    ]),
    // 1.5 Data processing
    ...sub('data-processing-and-information', 'data-processing', '1.5', [
      { n: 1, f: 'Batch vs online vs real-time processing', b: 'Batch: data collected and processed later as a group (payroll, utility bills). Online: each transaction is processed as entered while the user waits (online shopping, EFT). Real-time: processed at once and the output affects the input (central heating, traffic lights).', src: DP },
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
    // 4.1 Algorithms
    ...sub('algorithms-and-flowcharts', 'algorithms', '4.1', [
      { n: 1, f: 'What is a rogue value?', b: 'A value that marks the end of the data, such as -1 or 0, and is not processed.', src: ALG },
      { n: 2, f: 'WHILE ... ENDWHILE vs REPEAT ... UNTIL', b: 'WHILE tests at the start and continues while the condition is true, so it may run 0 times. REPEAT tests at the end and continues until the condition is true, so it always runs at least once.' },
      { n: 3, f: 'Which loop would you use to re-ask for a PIN until it is valid, and why?', b: 'REPEAT ... UNTIL, because the PIN must be asked for at least once and the test comes after the input.' },
      { n: 4, f: 'What values does FOR K ← 2 TO 20 STEP 6 produce?', b: '2, 8, 14 and 20: four passes.' },
      { n: 5, f: 'IF vs CASE', b: 'IF tests any condition. CASE matches the value of one variable against a list of values, with OTHERWISE catching anything not listed.' },
      { n: 6, f: 'What is a nested loop? How many times does the inner body run for an outer loop of 5 and inner of 3?', b: 'A loop inside another loop; the inner loop runs fully on every pass of the outer one. 5 × 3 = 15 times.', src: ALG },
      { n: 7, f: 'How do you process data ending in a rogue value with a WHILE loop?', b: 'INPUT the first value before the loop; loop WHILE the value is not the rogue value; process it, then INPUT the next value as the last line of the loop body.' },
      { n: 8, f: 'What is a trace table?', b: 'A table that records the value of each variable after each step, used to test an algorithm.', src: ALG },
    ]),
    // 4.2 Flowcharts
    ...sub('algorithms-and-flowcharts', 'flowcharts', '4.2', [
      { n: 1, f: 'Which flowchart symbols are used for a subroutine and a connector?', b: 'Subroutine: a rectangle with double vertical lines at the sides, holding the procedure\'s name. Connector: a small circle with a letter, linking two parts of a chart.' },
    ]),

    // 5 eSecurity
    // 5.1 Personal data
    ...sub('esecurity', 'personal-data', '5.1', [
      { n: 1, f: 'What is personal data?', b: 'Information about a living person who can be identified from it, alone or combined with other data, e.g. name, address, date of birth, bank details, medical records.' },
      { n: 2, f: 'Anonymising vs aggregating data', b: 'Anonymising removes or replaces identifiers such as name and ID number from each record. Aggregating combines many records into totals or averages so no individual record is shown.' },
      { n: 3, f: 'What is a geotag, and why is it a risk?', b: 'A GPS location stored as metadata in a photo or video file. A posted photo could reveal where someone lives.' },
      { n: 4, f: 'Phishing, smishing, vishing and pharming', b: 'Phishing: email with a link to a fake site. Smishing: SMS text message. Vishing: phone call or voicemail. Pharming: malicious code or a tampered DNS redirects the browser even when the correct address is typed.' },
      { n: 5, f: 'Hardware firewall vs software firewall', b: 'A hardware firewall is a separate device that protects every device on the network and uses none of their resources. A software firewall runs on one computer, protects it on any network, and can control which applications use the network.' },
    ]),
    // 5.2 Malware
    ...sub('esecurity', 'malware', '5.2', [
      { n: 1, f: 'Worm vs trojan', b: 'A worm is standalone and spreads across networks by itself. A trojan looks legitimate, has a hidden payload, and relies on a user installing it; it does not replicate.' },
      { n: 2, f: 'What are a rootkit and a malicious bot?', b: 'A rootkit gains administrator-level access and hides itself and other malware. A malicious bot lets an infected computer be controlled remotely as part of a botnet.' },
      { n: 3, f: 'Name four uses of malware', b: 'Fraud, theft (of money, data, identities or intellectual property), industrial espionage and sabotage.', src: SEC },
      { n: 4, f: 'Signature-based vs heuristic malware detection', b: 'Signature-based matches known malware, so it needs updates and misses new malware. Heuristic spots suspicious behaviour, so it can catch new malware but gives more false positives.' },
    ]),

    // 6 The digital divide
    // 6.1 The digital divide
    ...sub('the-digital-divide', 'the-digital-divide-content', '6.1', [
      { n: 1, f: 'What is the digital divide?', b: 'The gap between people who have access to modern information technology, and the skills to use it, and those who do not.' },
      { n: 2, f: 'Name five groups between which a digital divide exists', b: 'Age groups; cities and rural areas; levels of education; socioeconomic groups; more and less industrially developed nations.' },
      { n: 3, f: 'Why are rural areas affected by the digital divide?', b: 'They often have weaker wireless coverage and slower connections, so people cannot easily work or study online.', src: DD },
      { n: 4, f: 'How are socioeconomic groups affected by the digital divide?', b: 'Devices, connections and data cost money, so poorer households may have no device, or a shared low-performance device with limited data.', src: DD },
      { n: 5, f: 'Give four services people miss without internet access', b: 'Any four of: online banking, online shopping, online education, online job adverts and applications, government services, health appointments and consultations, email and video calls.' },
      { n: 6, f: 'Why are some older people on the wrong side of the digital divide?', b: 'Some did not use computers at school or work and may lack the skills or confidence, so they are excluded as services move online.', src: DD },
      { n: 7, f: 'How can the effects of the digital divide be reduced?', b: 'For example: public access points in libraries, free or low-cost devices and data, better rural broadband and mobile coverage, and digital skills training. Match the measure to the cause.' },
    ]),

    // 7 Expert systems
    // 7.1 Expert systems
    ...sub('expert-systems', 'expert-systems-content', '7.1', [
      { n: 1, f: 'What is an expert system?', b: 'A computer system that stores the knowledge of human experts in one field and uses rules to reason with it, producing possible solutions and explaining how it reached them.', src: ES },
      { n: 2, f: 'Name the components of an expert system', b: 'User interface, inference engine, knowledge base (a database of facts and a rules base), explanation system, and knowledge base editor.' },
      { n: 3, f: 'Inference engine vs explanation system', b: 'The inference engine does the reasoning: it matches facts to rules, fires rules and decides the next question. The explanation system reports how a conclusion was reached and why a question is asked.' },
      { n: 4, f: 'What is the knowledge base editor used for, and by whom?', b: 'To add, edit and delete facts and rules so the system stays up to date. It is used by the knowledge engineer or experts, not by the user entering case data.' },
      { n: 5, f: 'Forward chaining vs backward chaining', b: 'Forward chaining (data driven) starts with known facts and works from IF parts to THEN parts. Backward chaining (goal driven) starts with a goal and works back to test its IF conditions.' },
      { n: 6, f: 'Name six scenarios where expert systems are used', b: 'Any six of: mineral prospecting, investment analysis, financial planning, insurance planning, car engine fault diagnosis, medical diagnosis, route scheduling for delivery vehicles, plant and animal identification.' },
      { n: 7, f: 'Give two advantages and two disadvantages of expert systems', b: 'Advantages: consistent with no tiredness; available any time; combines several experts\' knowledge; explains its reasoning. Disadvantages: errors in the knowledge base give wrong advice; no common sense; expensive to build; needs updating.' },
    ]),

    // 8 Spreadsheets
    // 8.1 Creating a spreadsheet
    ...sub('spreadsheets', 'creating-a-spreadsheet', '8.1', [
      { n: 1, f: 'Relative, absolute and mixed cell references', b: 'B4 is relative: both parts move when copied. $B$4 is absolute: nothing moves. $B4 fixes the column; B$4 fixes the row. A two-way table needs mixed references.' },
      { n: 2, f: 'COUNT vs COUNTA vs COUNTBLANK', b: 'COUNT counts cells with numbers only. COUNTA counts any non-empty cell. COUNTBLANK counts empty cells.', src: SS },
      { n: 3, f: 'INT vs ROUND. What are INT(-2.3) and ROUND(14.678, 1)?', b: 'INT rounds down to a whole number, so INT(-2.3) = -3. ROUND goes to the nearest value at the stated decimal places, so ROUND(14.678, 1) = 14.7.' },
      { n: 4, f: 'How are the arguments of SUMIF and SUMIFS ordered?', b: 'SUMIF(range, criterion, sum_range) puts the sum range last. SUMIFS(sum_range, range1, criterion1, ...) puts it first.' },
      { n: 5, f: 'How do you write an exact-match VLOOKUP?', b: 'VLOOKUP(lookup value, table, column number, FALSE). The table is an absolute range with the key in its first column; the column is counted from the table\'s first column; FALSE gives an exact match.' },
      { n: 6, f: 'How do you build nested IF bands?', b: 'List the bands from highest to lowest; test the highest first with >=; put the next IF in each false branch; the last false value is the lowest band; one closing bracket per IF.' },
      { n: 7, f: 'IFERROR vs ISERROR', b: 'IFERROR(formula, message) replaces an error with a value or message. ISERROR returns TRUE or FALSE.' },
      { n: 8, f: 'Input message vs error message in spreadsheet validation', b: 'An input message appears when the cell is selected and tells the user what to enter. An error message appears when the rule is broken and says what went wrong and what is allowed.' },
    ]),
    // 8.2 Testing a spreadsheet
    ...sub('spreadsheets', 'testing-a-spreadsheet', '8.2', [
      { n: 1, f: 'Normal, extreme and abnormal test data for a percentage from 0 to 100', b: 'Normal: e.g. 57. Extreme: 0 and 100 (valid, on the limits). Abnormal: e.g. -1, 101 or "pass" (must be rejected).' },
    ]),
    // 8.3 Using a spreadsheet
    ...sub('spreadsheets', 'using-a-spreadsheet', '8.3', [
      { n: 1, f: 'Pivot table vs subtotals', b: 'A pivot table builds a separate summary and needs no sorting. Subtotals insert totals into the list itself and need the data sorted by the grouping field first.' },
    ]),

    // 8.4 Graphs and charts
    ...sub('spreadsheets', 'graphs-and-charts', '8.4', [
      { n: 1, f: 'Which chart suits change over time, the share of a whole and a comparison of categories?', b: 'Line graph for change over time or a trend. Pie chart for the share of a whole. Bar (column) chart to compare values for different categories; a comparative bar chart for several series per category.', src: GAC },
      { n: 2, f: 'How do you select two separate blocks of data for a chart?', b: 'Select the first range, hold Ctrl, then select the second. Include the headings so they become series names and category labels rather than being plotted as data.', src: GAC },
      { n: 3, f: 'When do you use a combination chart with a secondary axis?', b: 'When two series have different units or very different sizes. For example, rainfall (mm) as columns and temperature (°C) as a line on a secondary value axis.', src: GAC },
      { n: 4, f: 'How do you work out a pie sector? Find the percentage and angle for 102 out of a total of 175', b: 'Share = value ÷ total × 100 = 58.29%. Angle = value ÷ total × 360 = 209.8°. The shares of all sectors add up to 100%.', src: GAC },
      { n: 5, f: 'What labelling must a chart have?', b: 'A title saying what it shows, a category axis title and labels, a value axis title with the unit, a legend if there is more than one series, and a value axis scale with a set minimum, maximum and regular interval.', src: GAC },
      { n: 6, f: 'Why must a bar chart value axis start at zero?', b: 'If it starts at 90, small differences look much larger than they are, which is misleading. Avoid 3-D effects too, because they distort the sizes of bars and sectors.', src: GAC },
    ]),

    // 9 Modelling
    // 9.1 Modelling and simulations
    ...sub('modelling', 'modelling-and-simulations', '9.1', [
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
    // 10.1 Creating a database
    ...sub('database-and-file-concepts', 'creating-a-database', '10.1', [
      { n: 1, f: 'Primary key, foreign key and composite key', b: 'Primary key: a unique value for every record. Foreign key: the primary key of another table stored to make a link; it may repeat. Composite key: two or more fields that are unique together.' },
      { n: 2, f: 'What is referential integrity?', b: 'The rule that every foreign key value must match an existing primary key value. It prevents orphan records.', src: DB },
      { n: 3, f: 'How is a many-to-many relationship built?', b: 'As two one-to-many relationships through a link table, e.g. Student and Course linked by an Enrolment table.' },
      { n: 4, f: 'Static vs dynamic parameter query', b: 'A static parameter query has its criterion fixed in the design. A dynamic parameter query asks the user to type the value each time it runs.' },
      { n: 5, f: 'Name the four action queries', b: 'Make-table (copy results into a new table), append (add results to an existing table), delete (remove matching records) and update (change values in matching records).' },
      { n: 6, f: 'Conceptual vs logical vs physical ERD', b: 'Conceptual: entities and relationships only. Logical: adds attributes and keys. Physical: adds real table and field names, data types and sizes.' },
    ]),
    // 10.2 Normalisation to third normal form (3NF)
    ...sub('database-and-file-concepts', 'normalisation-to-third-normal-form-3nf', '10.2', [
      { n: 1, f: 'What are the tests for 1NF, 2NF and 3NF?', b: '1NF: no repeating groups, atomic values, a primary key. 2NF: 1NF and no field depends on only part of a composite key. 3NF: 2NF and no non-key field depends on another non-key field.' },
      { n: 2, f: 'Employee(EmpID, DeptID, DeptName). Which normal form does it break?', b: '3NF. DeptName depends on DeptID, which is a non-key field (a transitive dependency).' },
    ]),
    // 10.3 Data dictionary
    ...sub('database-and-file-concepts', 'data-dictionary', '10.3', [
      { n: 1, f: 'Name eight components of a data dictionary', b: 'Any eight of: field name, data type, field size, format, key, validation rule, error text, default value, whether required, description, table name.' },
    ]),
    // 10.4 File and data management
    ...sub('database-and-file-concepts', 'file-and-data-management', '10.4', [
      { n: 1, f: 'Indexed sequential vs direct access files', b: 'Indexed sequential: records in key order plus an index; good for sequential runs and fairly fast single look-ups. Direct access: hashing turns the key into an address; fastest single look-up, poor for processing in order.' },
    ]),

    // 11 Video and audio editing
    // 11.1 Video editing
    ...sub('video-and-audio-editing', 'video-editing', '11.1', [
      { n: 1, f: 'Trim vs crop in video editing', b: 'Trimming removes time: unwanted footage from the start or end of a clip. Cropping removes the edges of the frame or image.' },
      { n: 2, f: 'Subtitle vs caption', b: 'Subtitles show the spoken words. Captions show speech and other sounds, e.g. [phone rings], for deaf and hard-of-hearing viewers.', src: VA },
      { n: 3, f: 'Interframe vs intraframe video compression', b: 'Interframe stores only the changes between key frames, giving much smaller files, but suffers when the whole picture changes. Intraframe compresses each frame on its own, so files are larger but quality does not depend on other frames.' },
      { n: 4, f: 'Compare MP4, AVI, MOV and WMV', b: 'MP4: small for its quality and plays almost everywhere, but usually lossy. AVI: widely played on Windows but often large. MOV: Apple, high quality, suits editing, but large. WMV: Microsoft, small, weaker support elsewhere.' },
    ]),
    // 11.2 Audio editing
    ...sub('video-and-audio-editing', 'audio-editing', '11.2', [
      { n: 1, f: 'What does normalising audio do?', b: 'It applies the same gain to the whole clip so the loudest peak reaches a target level, which may be quieter or louder. Any DC offset should be removed first.' },
      { n: 2, f: 'High pass vs low pass filter', b: 'Named after what they let through. A high pass filter keeps frequencies above the cut-off, removing rumble and hum. A low pass filter keeps frequencies below it, removing hiss.' },
      { n: 3, f: 'Echo vs reverberation', b: 'Echo (delay) gives distinct, quieter repeats after a set time. Reverb is many dense reflections blended together, sounding like a room or hall.' },
      { n: 4, f: 'How do you calculate the size of uncompressed audio?', b: 'Bits = sampling rate × sampling resolution × channels × seconds; ÷ 8 for bytes. E.g. 8,000 Hz × 8 bits × 1 channel × 10 s = 640,000 bits = 80,000 bytes.' },
      { n: 5, f: 'File vs container', b: 'A plain file holds one stream encoded one way. A container such as MP4 or MOV wraps one or more streams plus information about them; the codec inside sets the compression.' },
      { n: 6, f: 'WAV: one advantage and one disadvantage', b: 'Advantage: usually uncompressed, so full quality and best for editing. Disadvantage: very large files.' },
    ]),

    // 12 IT in society
    // 12.1 Digital currencies
    ...sub('it-in-society', 'digital-currencies', '12.1', [
      { n: 1, f: 'Virtual currency vs cryptocurrency', b: 'A virtual currency is issued and controlled by its developers and used in one online community. A cryptocurrency is a virtual currency secured by cryptography and recorded on a decentralised ledger.' },
      { n: 2, f: 'Centralised vs decentralised digital currencies', b: 'Centralised: one authority, such as a bank, checks transactions and keeps the record (debit and credit cards, EPOS). Decentralised: a network of peers checks them and every node holds a copy of the ledger (Bitcoin, Litecoin).' },
      { n: 3, f: 'Describe how a blockchain works', b: 'Transactions are grouped into a block; the block stores the hash of the previous block; nodes agree the block is valid; it is added to every copy of the ledger. Editing an old block changes its hash and breaks the link.' },
    ]),
    // 12.2 Data mining
    ...sub('it-in-society', 'data-mining', '12.2', [
      { n: 1, f: 'What is data mining?', b: 'Using software to search large data sets for previously unknown patterns, relationships and anomalies, to make predictions and support decisions.' },
      { n: 2, f: 'Name the six stages of data mining in order', b: 'Business understanding, data understanding, data preparation, data modelling, evaluation, deployment.', src: ITS },
    ]),
    // 12.3 Social networking services/platforms
    ...sub('it-in-society', 'social-networking-services-platforms', '12.3', [
      { n: 1, f: 'Instant messaging vs chat room', b: 'Instant messaging is real-time messaging with known contacts or small groups. A chat room is a real-time, topic-based space open to many users, often strangers.' },
      { n: 2, f: 'Give two negative impacts of social networking on individuals', b: 'Any two of: intellectual isolation, effects on physical and mental health, ideological polarisation, stereotyping, cognitive issues.' },
    ]),
    // 12.4 The impact of IT
    ...sub('it-in-society', 'the-impact-of-it', '12.4', [
      { n: 1, f: 'Give one benefit and one drawback of surveillance by the police', b: 'Benefit: CCTV, number plate and facial recognition help detect crime. Drawback: mass surveillance reduces privacy and misidentification can occur.' },
    ]),
    // 12.5 Technology enhanced learning
    ...sub('it-in-society', 'technology-enhanced-learning', '12.5', [
      { n: 1, f: 'MOOC vs networked course', b: 'A MOOC (massive open online course) is open to anyone at very large scale, with little individual support. A networked course is delivered to a closed group over one network.' },
    ]),

    // 13 New and emerging technologies
    // 13.1 New and emerging technologies
    ...sub('new-and-emerging-technologies', 'new-and-emerging-technologies-content', '13.1', [
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
    // 14.1 Networks
    ...sub('communications-technology', 'networks', '14.1', [
      { n: 1, f: 'Physical vs logical topology', b: 'Physical topology is the cabling layout; logical topology is how data flows. A hub-based star is a physical star but a logical bus.', src: COM },
    ]),
    // 14.2 Components in a network
    ...sub('communications-technology', 'components-in-a-network', '14.2', [
      { n: 1, f: 'Hub vs switch', b: 'A hub broadcasts to all ports. A switch sends a frame only to the port of the destination MAC address.', src: COM },
      { n: 2, f: 'Bridge vs router vs gateway', b: 'A bridge joins two segments using the same protocol. A router forwards packets between networks by IP address. A gateway joins networks that use different protocols.', src: COM },
      { n: 3, f: 'What does a repeater do, and what does a WAP do?', b: 'A repeater regenerates a weak signal. A wireless access point joins wireless devices to a cabled LAN.', src: COM },
    ]),
    // 14.3 Network servers
    ...sub('communications-technology', 'network-servers', '14.3', [
      { n: 1, f: 'What does a proxy server do?', b: 'It acts as a go-between for internet requests: it filters them, caches pages and hides internal addresses.', src: COM },
    ]),
    // 14.4 Cloud computing
    ...sub('communications-technology', 'cloud-computing', '14.4', [
      { n: 1, f: 'Define cloud computing', b: 'Using storage, processing power, databases or software held on remote servers and reached over the internet, instead of on local equipment. The cloud is not simply "the internet".', src: CLOUD },
      { n: 2, f: 'List the main characteristics of cloud computing', b: 'Shared (pooled) resources, on-demand self-service, broad network access, elasticity (scalability), measured service (charged by use) and remote management by the provider.', src: CLOUD },
      { n: 3, f: 'SaaS vs PaaS vs IaaS', b: 'SaaS: a finished application used through a browser, such as web email. PaaS: a platform for developers to build and run applications. IaaS: virtual servers, storage and networks rented by the user.', src: CLOUD },
      { n: 4, f: 'How do organisations use cloud computing?', b: 'Hosting websites and shops, data storage and backup, business software, data analysis, software testing, supporting home working and disaster recovery.', src: CLOUD },
      { n: 5, f: 'Give advantages and disadvantages of the cloud for an organisation', b: 'Advantages: no hardware to buy, scalable, less maintenance, remote working, disaster recovery. Disadvantages: running costs continue, reliance on the provider and the connection, less control of data, security and legal worries, lock-in.', src: CLOUD },
      { n: 6, f: 'How can the security risks of storing data in the cloud be reduced?', b: 'Encrypt the data, use strong access controls, choose a reputable provider, keep a second copy and check where the data is held.', src: CLOUD },
    ]),
    // 14.5 Data transmission across networks
    ...sub('communications-technology', 'data-transmission-across-networks', '14.5', [
      { n: 1, f: 'Packet vs circuit vs message switching', b: 'Packet: data split into packets that take separate routes and are reassembled. Circuit: a dedicated channel for the whole session. Message: the whole message is stored and forwarded node by node.', src: COM },
      { n: 2, f: 'Static vs dynamic routing', b: 'Static routing uses manually set tables: secure, but cannot adapt. Dynamic routing updates automatically: it adapts to changes but uses bandwidth.', src: COM },
      { n: 3, f: 'How does BitTorrent transfer a file?', b: 'The file is split into pieces downloaded from many peers at once, and each peer also uploads pieces to others.', src: COM },
    ]),
    // 14.6 Network protocols
    ...sub('communications-technology', 'network-protocols', '14.6', [
      { n: 1, f: 'TCP vs UDP', b: 'TCP is reliable and connection-based: it numbers segments and re-sends lost ones. UDP is connectionless and fast with no re-sending, so it suits live video, voice and games.', src: PROT },
      { n: 2, f: 'POP3 vs IMAP', b: 'POP3 downloads mail to one device, usually removing it from the server. IMAP keeps mail on the server so several devices see the same messages. SMTP is used to send mail.', src: PROT },
      { n: 3, f: 'Telnet vs SSH, and HTTP vs HTTPS', b: 'Telnet gives remote text control with no encryption; SSH does the same encrypted. HTTP carries web pages unencrypted; HTTPS is HTTP plus TLS encryption.', src: PROT },
      { n: 4, f: 'What do ARP, InARP and DHCP do?', b: 'ARP finds the MAC address that matches an IP address. InARP finds the IP address for a known hardware address at the other end. DHCP gives a device an IP address automatically when it joins a network.', src: PROT },
      { n: 5, f: 'A 3 000 byte file is sent in packets with 250 bytes of payload and a 30 byte header. How many packets and bytes in total?', b: '3 000 ÷ 250 = 12 packets. Headers: 12 × 30 = 360 bytes. Total sent = 3 000 + 360 = 3 360 bytes.', src: PROT },
      { n: 6, f: 'List the seven layers of the OSI model, top to bottom', b: 'Application, Presentation, Session, Transport, Network, Data link, Physical. The transport layer handles end-to-end delivery; the network layer handles logical addresses and routing.', src: PROT },
    ]),
    // 14.7 Wireless technology
    ...sub('communications-technology', 'wireless-technology', '14.7', [
      { n: 1, f: 'Bluetooth: range, frequency and how it avoids interference', b: 'About 10 m range at 2.4 GHz. It hops between channels in time slots (frequency hopping), uses little power and needs devices to be paired.', src: WIRE },
      { n: 2, f: 'NFC: range and how it works', b: 'A few centimetres, using magnetic induction at 13.56 MHz; tags need no battery. Used for contactless payment, tickets and quick pairing.', src: WIRE },
      { n: 3, f: 'Why do infrared and microwave links need line of sight?', b: 'Both travel in straight lines and are blocked by obstacles. Infrared cannot pass walls (remote controls); microwave links between towers need a clear path and are affected by rain.', src: WIRE },
      { n: 4, f: 'How does inductive wireless charging work?', b: 'A coil in the charging pad makes a changing magnetic field, which induces a current in a coil in the device. It works over millimetres to centimetres, so the device must be well placed.', src: WIRE },
      { n: 5, f: 'Rank the wireless security protocols WEP, WPA, WPA2 and WPA3', b: 'WEP is broken and must not be used. WPA is an interim, weak protocol. WPA2 uses strong AES encryption. WPA3 is the strongest and resists password guessing.', src: WIRE },
      { n: 6, f: 'Why do hiding the network name and MAC address filtering give little protection?', b: 'Network names and MAC addresses can be seen in transmitted data and then copied by an attacker. A long passphrase with WPA2 or WPA3 matters far more.', src: WIRE },
      { n: 7, f: 'How long does a 12 MB file take to send by Bluetooth at 2 Mbit/s?', b: '12 MB = 12 × 8 = 96 megabits. 96 ÷ 2 = 48 seconds. At 160 Mbit/s over Wi-Fi it would take 96 ÷ 160 = 0.6 seconds.', src: WIRE },
    ]),
    // 14.8 Mobile communication systems
    ...sub('communications-technology', 'mobile-communication-systems', '14.8', [
      { n: 1, f: 'How is data sent by satellite?', b: 'Data is encoded and modulated, sent from a ground station uplink, amplified by the satellite\'s transponder, sent down on another frequency, and decoded by the receiving dish.', src: COM },
    ]),
    // 14.9 Network security
    ...sub('communications-technology', 'network-security', '14.9', [
      { n: 1, f: 'What are the three aims of network security?', b: 'Confidentiality: only authorised people can read the data. Integrity: data is accurate and unchanged. Availability: data and services are usable when needed.', src: NSEC },
      { n: 2, f: 'DoS vs DDoS, and what is a botnet?', b: 'A denial of service floods a server so users cannot be served. A DDoS comes from many sources at once. A botnet is a network of infected devices an attacker controls, often used for DDoS.', src: NSEC },
      { n: 3, f: 'How does SQL injection work, and how is it prevented?', b: 'The attacker types SQL code into a form field and the database runs it, for example x\' OR \'1\'=\'1 makes a condition always true. Prevent it with input validation and parameterised queries.', src: NSEC },
      { n: 4, f: 'A 4-digit PIN is guessed at 100 guesses per second. How long does a brute force attack take?', b: '10⁴ = 10 000 combinations. 10 000 ÷ 100 = 100 seconds at most. A lock-out after 3 failed attempts allows only 3 guesses.', src: NSEC },
      { n: 5, f: 'How should a firewall be configured?', b: 'Default deny: block everything not allowed. Allow only needed ports and protocols, block Telnet, block unsolicited incoming connections but allow replies to outgoing requests, and log blocked traffic.', src: NSEC },
      { n: 6, f: 'Why are insiders and poor network policies security threats, and what defends against them?', b: 'Insiders already have access and knowledge, and many breaches are caused by people. Defences: access rights (least privilege), logs, physical security, a written policy, staff training and audits.', src: NSEC },
    ]),
    // 14.10 Disaster recovery management
    ...sub('communications-technology', 'disaster-recovery-management', '14.10', [
      { n: 1, f: 'How can the effects of a disaster on a network be minimised?', b: 'UPS and surge protection, passwords and access control, anti-malware, off-site back-ups and a tested restore plan.', src: COM },
    ]),

    // 15 Project management
    // 15.1 The stages of the project life cycle
    ...sub('project-management', 'the-stages-of-the-project-life-cycle', '15.1', [
      { n: 1, f: 'Name the four stages of the project life cycle', b: 'Initiation, planning, execution and monitoring, and close.' },
      { n: 2, f: 'Initiation vs planning', b: 'Initiation decides what the project is and whether to do it. Planning decides how and when, task by task.', src: PM },
      { n: 3, f: 'Objective vs success criterion', b: 'An objective is what the project must achieve, e.g. "launch online booking". A success criterion measures whether it was met, e.g. "60% of bookings online within two months".', src: PM },
      { n: 4, f: 'What is scope, and what is scope creep?', b: 'Scope is the boundary of the project: what is in and what is out. Scope creep is uncontrolled growth of that boundary.', src: PM },
      { n: 5, f: 'What three constraints are monitored during a project?', b: 'Time (against the schedule), cost (against the budget) and quality (against agreed standards, e.g. by testing).', src: PM },
      { n: 6, f: 'Why are projects reviewed at close?', b: 'To check objectives and success criteria were met, compare actual time and cost with the plan, find what went well and badly, record lessons for future projects and confirm stakeholders are satisfied.' },
    ]),
    // 15.2 Project management software
    ...sub('project-management', 'project-management-software', '15.2', [
      { n: 1, f: 'Name the six uses of project management software', b: 'Planning, scheduling of tasks, allocation of resources, costings, communication, and collaborative working and decisions.' },
    ]),
    // 15.3 Tools and techniques for project management tasks
    ...sub('project-management', 'tools-and-techniques-for-project-management-tasks', '15.3', [
      { n: 1, f: 'What is the critical path?', b: 'The longest sequence of dependent activities through a project. It sets the shortest possible project time; any delay to a critical activity delays the whole project. Critical activities have zero float.' },
      { n: 2, f: 'What is float in critical path analysis?', b: 'The time an activity can be delayed without delaying the whole project. Staff can be moved from activities with float to critical ones.' },
    ]),

    // 16 System life cycle
    // 16.1 The stages in the system life cycle
    ...sub('system-life-cycle', 'the-stages-in-the-system-life-cycle', '16.1', [
      { n: 1, f: 'Name the stages of the system life cycle in order', b: 'Analysis, design, development and testing, implementation, documentation, evaluation, then maintenance.', src: SLC },
    ]),
    // 16.2 Analysis
    ...sub('system-life-cycle', 'analysis', '16.2', [
      { n: 1, f: 'User requirements specification vs design specification', b: 'The user requirements specification says what users need. The design specification says how the system will be built.' },
    ]),
    // 16.3 Design
    ...sub('system-life-cycle', 'design', '16.3', [
      { n: 1, f: 'Data flow diagram vs system flowchart', b: 'A DFD shows the movement of data. A system flowchart shows hardware, files and processes.' },
    ]),
    // 16.4 Development and testing
    ...sub('system-life-cycle', 'development-and-testing', '16.4', [
      { n: 1, f: 'Give normal, extreme and abnormal test data for a field that accepts a whole number from 1 to 8', b: 'Normal: 4 (accepted). Extreme: 1 and 8 (valid, on the limits, accepted). Abnormal: 0, 9, 3.5 and "four" (rejected with a message).', src: DEVT },
      { n: 2, f: 'What does a test plan contain?', b: 'Test number, purpose, test data, type of data, the expected result (written before testing and precise, not just "error"), the actual result, and pass or fail with comments.', src: DEVT },
      { n: 3, f: 'A price is £5 and 3 or more items get 10% off. What is the expected total for 3 items?', b: '3 × £5 = £15, less 10% (£1.50) = £13.50. Work out each expected result by hand before testing.', src: DEVT },
      { n: 4, f: 'Alpha vs beta testing', b: 'Alpha: the developer\'s own staff, in the developer\'s environment, first. Beta: a limited group of real users in their own environment, after alpha and before final release.', src: DEVT },
      { n: 5, f: 'White box vs black box testing', b: 'White box: the tester sees the code and tests its paths, branches and loops. Black box: the code is hidden and tests are based on requirements, inputs and expected outputs.', src: DEVT },
      { n: 6, f: 'Can testing prove that a system has no faults?', b: 'No. Testing shows that faults exist but cannot prove that none remain, so a plan should cover as much as possible. Faults are cheaper to fix before users find them.', src: DEVT },
    ]),
    // 16.5 Implementation
    ...sub('system-life-cycle', 'implementation', '16.5', [
      { n: 1, f: 'Phased vs pilot implementation', b: 'Phased: one part of the system is introduced everywhere at a time. Pilot: the whole system is introduced in one place first.' },
    ]),
    // 16.6 Documentation
    ...sub('system-life-cycle', 'documentation', '16.6', [
      { n: 1, f: 'Who reads technical documentation, and what does it contain?', b: 'Programmers, technicians and support staff who fix, update or move the system. Contents: commented code, algorithms, data dictionary, file structures, input and output formats, installation, test results and backup and recovery procedures.', src: DOCS },
      { n: 2, f: 'What does user documentation contain?', b: 'Start-up and login, step-by-step tasks with screenshots, a tutorial, error messages and what to do, troubleshooting, an FAQ, a glossary and help-desk contact details.', src: DOCS },
      { n: 3, f: 'Why are requirements and design documents needed?', b: 'They record what was agreed, give developers and testers a target to build and test against, and allow the finished system to be evaluated. They include specifications, DFDs, flowcharts, layouts and validation rules.', src: DOCS },
      { n: 4, f: 'What is marketing documentation, and who is it for?', b: 'It describes and promotes the system to potential customers: features and benefits, screenshots or a demo, requirements, price and licence. It sells the system; it does not teach people how to use it.', src: DOCS },
      { n: 5, f: 'Which document answers: what did the client ask for, how do I change my password, how do I restore from a backup?', b: 'Requirements documentation, user documentation and technical documentation, in that order. Always ask who reads the document and what they need to do.', src: DOCS },
      { n: 6, f: 'Give a disadvantage of each type of documentation', b: 'Requirements and design: go out of date and are long. Technical: hard for non-specialists and must be updated. User: printed copies date and users may not read them. Marketing: may exaggerate.', src: DOCS },
    ]),
    // 16.7 Evaluation
    ...sub('system-life-cycle', 'evaluation', '16.7', [
      { n: 1, f: 'What criteria are used to evaluate a system?', b: 'Efficiency, ease of use and appropriateness for its intended use, judged by checking against the specifications and user requirements and collecting user feedback.', src: SLC },
    ]),
    // 16.8 Methods of software development
    ...sub('system-life-cycle', 'methods-of-software-development', '16.8', [
      { n: 1, f: 'Waterfall vs agile development', b: 'Waterfall completes one stage at a time with sign-off: a clear plan, but late changes are expensive. Agile uses short cycles with close customer contact: it handles changing needs but needs constant user time.' },
      { n: 2, f: 'What is RAD?', b: 'Rapid application development: fast prototypes, workshops with users and strict time limits. Quick and user-focused, but poor for large, complex systems.' },
    ]),
    // 16.9 Prototyping
    ...sub('system-life-cycle', 'prototyping', '16.9', [
      { n: 1, f: 'Evolutionary vs throwaway prototyping', b: 'An evolutionary prototype is refined until it becomes the final system. A throwaway prototype is discarded once the requirements are clear.' },
    ]),
    // 16.10 Maintenance
    ...sub('system-life-cycle', 'maintenance', '16.10', [
      { n: 1, f: 'Name the four types of maintenance', b: 'Corrective (fix a fault), adaptive (the environment changed, e.g. law or operating system), perfective (users want improvements) and preventive (reduce the risk of future faults).' },
    ]),

    // 17 Data analysis and visualisation
    // 17.1 Data Analysis and Visualisation
    ...sub('data-analysis-and-visualisation', 'data-analysis-and-visualisation-content', '17.1', [
      { n: 1, f: 'Cleaning vs transforming data', b: 'Cleaning fixes errors in the data. Transforming reshapes data that is already correct.', src: DAV },
      { n: 2, f: 'Splitting vs merging fields', b: 'Splitting turns one field into many, e.g. a full name into first name and surname. Merging joins many fields into one.', src: DAV },
      { n: 3, f: 'Comparing vs consolidating data', b: 'Comparing finds the differences between sources. Consolidating produces one combined data set from them.', src: DAV },
      { n: 4, f: 'Pivot table vs pivot chart', b: 'A pivot table holds the summary numbers. A pivot chart is a linked chart of them.', src: DAV },
      { n: 5, f: 'Pivot table vs SUMIF formulas', b: 'A pivot table is quick to rearrange and picks up new categories on refresh. SUMIF needs one formula per total but recalculates automatically.', src: DAV },
      { n: 6, f: 'Row or column field vs filter field in a pivot table', b: 'A row or column field groups the records. A filter field includes only some of the records.', src: DAV },
      { n: 7, f: 'Why must dates be stored as true dates, not date-like text?', b: 'Only a true date sorts in date order, groups by month and works in date calculations.', src: DAV },
    ]),

    // 18 Mail merge
    // 18.1 Mail merge
    ...sub('mail-merge', 'mail-merge-content', '18.1', [
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
    // 19.1 Common graphics skills
    ...sub('graphics-creation', 'common-graphics-skills', '19.1', [
      { n: 1, f: 'Bring to front vs raise', b: 'Raise moves an object up one step in the stacking order. Bring to front moves it all the way to the top.', src: GC },
    ]),
    // 19.2 Vector graphics
    ...sub('graphics-creation', 'vector-graphics', '19.2', [
      { n: 1, f: 'What is a Bezier curve?', b: 'A vector curve whose shape is set by its end nodes and their control handles, which set the direction and strength of the bend.', src: GC },
      { n: 2, f: 'What does tracing a bitmap gain and lose?', b: 'It turns edges and colour areas into vector paths. Gains: scalable, editable, small for simple logos. Losses: detail and shading, many nodes for complex images, and clean-up time.', src: GC },
    ]),
    // 19.3 Bitmap images
    ...sub('graphics-creation', 'bitmap-images', '19.3', [
      { n: 1, f: 'What happens if an image\'s resolution is too low or too high?', b: 'Too low: blocky or soft images, worst in print or when enlarged. Too high: no visible gain on screen, but larger files, slower web pages and more storage.', src: GC },
      { n: 2, f: 'What is the effect of reducing colour depth?', b: 'Fewer bits per pixel give a smaller file but fewer colours, so smooth areas show banding.', src: GC },
    ]),
    // 19.4 Compression
    ...sub('graphics-creation', 'compression', '19.4', [
      { n: 1, f: 'Lossless vs lossy image compression', b: 'Lossless rebuilds the original exactly, e.g. run-length encoding (RRRRBB → 4R 2B), and is best on flat colour. Lossy permanently removes detail for much smaller files, giving artefacts that get worse with each re-save.', src: GC },
    ]),
    // 19.5 Text
    ...sub('graphics-creation', 'text', '19.5', [
      { n: 1, f: 'Kerning vs letter spacing', b: 'Kerning adjusts the space between one pair of letters. Letter spacing sets even spacing across all the selected letters.', src: GC },
      { n: 2, f: 'What does converting text to curves do?', b: 'The letters become paths, so no font is needed and letters can be reshaped, but the text can no longer be edited as text.', src: GC },
    ]),

    // 20 Animation
    // 20.1 Animation
    ...sub('animation', 'animation-content', '20.1', [
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
    // 21.1 Programming for the web
    ...sub('programming-for-the-web', 'programming-for-the-web-content', '21.1', [
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
