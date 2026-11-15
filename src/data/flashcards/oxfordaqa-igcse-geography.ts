/**
 * D-444 -- flashcards for OxfordAQA International GCSE Geography 9230 (Version 4.3).
 *
 * Topics 1 and 3 list no subtopics, so their cards are keyed by topic number
 * (`<topic number>-<n>`); topic 2 is keyed by its two subtopic numbers. Card ids
 * are permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber.
 *
 * The syllabus is not tiered, so there are no tier marks. Written from the
 * Marlbridge 9230 study guides and revision notes. No named case-study figures
 * are given because the Marlbridge pages do not fix a case-study city.
 *
 * Plain text only (see types.ts). Unicode for symbols.
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

export const DECK_OXFORDAQA_IGCSE_GEOGRAPHY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'geography',
  syllabusCode: '9230',
  syllabusSeries: 'Version 4.3',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  deckReview: { reviewerSlug: 'azam-siddique', reviewedOn: '2026-11-15' },
  cards: [
    // 1 Living with the Physical Environment
    ...topicOnly('living-with-physical-environment-9230', '1', [
      { n: 1, f: 'Constructive plate margin: movement and features', b: 'Plates move apart. Shield volcanoes, mid-ocean ridges and minor earthquakes (for example the Mid-Atlantic Ridge).' },
      { n: 2, f: 'Destructive plate margin: movement and features', b: 'Oceanic plate subducts beneath continental plate. Composite volcanoes, ocean trenches and deep-focus earthquakes.' },
      { n: 3, f: 'Which two plate margins have no volcanoes, and why?', b: 'Collision and conservative margins. No crust is being created or destroyed there, so no magma is generated. Collision gives fold mountains; conservative gives powerful earthquakes.' },
      { n: 4, f: 'Primary effect vs secondary effect of a hazard', b: 'Primary: caused directly by the hazard (buildings collapse, deaths). Secondary: follows from the primary effects (fires from ruptured gas mains, disease, homelessness, tsunami).' },
      { n: 5, f: 'Immediate response vs long-term response', b: 'Immediate: search and rescue, shelter, medical aid, emergency aid. Long-term: rebuilding to better standards, repairing infrastructure, better monitoring, economic recovery.' },
      { n: 6, f: 'Why does the same earthquake cause more deaths in a low-income country than a high-income one?', b: 'Weaker building codes and enforcement, fewer emergency resources, harder communications, limited healthcare and less preparation or early warning. The hazard is the same; vulnerability differs.' },
      { n: 7, f: 'What are the four Ps of managing natural hazards?', b: 'Prediction (monitoring), protection (resistant buildings, defences), preparation (drills, education, supplies) and planning (land-use zoning away from high risk).' },
      { n: 8, f: 'Conditions needed for a tropical storm to form', b: 'Sea temperature above about 27 °C, deep warm ocean, low wind shear and a position roughly 5° to 30° from the equator so the Coriolis effect can start rotation.' },
      { n: 9, f: 'Structure of a tropical storm', b: 'A calm, clear, low-pressure eye at the centre; the eyewall around it with the most intense wind and rain; then spiralling rainbands further out.' },
      { n: 10, f: 'Mitigation vs adaptation in climate change', b: 'Mitigation reduces the causes (renewable energy, afforestation, carbon capture, international agreements). Adaptation copes with effects (flood defences, drought-resistant crops, managed retreat).' },
      { n: 11, f: 'Natural and human causes of climate change', b: 'Natural: orbital cycles, solar output variation, volcanic ash and aerosols. Human: burning fossil fuels, deforestation, livestock and rice farming, industry and cement. Mechanism: the enhanced greenhouse effect.' },
      { n: 12, f: 'Why does cleared tropical rainforest land quickly become infertile?', b: 'Nutrients are held in the biomass (the trees), not the soil. Once the trees are removed the store is lost, and the thin soil is infertile within a few growing seasons.' },
      { n: 13, f: 'Adaptations of tropical rainforest plants', b: 'Buttress roots for stability in thin soil, drip tips to shed heavy rain, lianas and epiphytes to reach light, and a dense closed canopy.' },
      { n: 14, f: 'Adaptations of hot desert plants and animals', b: 'Deep or wide-spreading roots, water stored in stems, waxy or spiny leaves to cut transpiration, and nocturnal behaviour to avoid daytime heat.' },
      { n: 15, f: 'Four processes of coastal and river erosion', b: 'Hydraulic action, abrasion, attrition and solution.' },
      { n: 16, f: 'Four processes of transport', b: 'Traction, saltation, suspension and solution. Deposition happens when energy falls.' },
      { n: 17, f: 'Sequence of erosional coastal landforms', b: 'Headland, cave, arch, stack, stump. Erosional landforms also include bays and wave-cut platforms; depositional ones include beaches, spits and bars.' },
      { n: 18, f: 'River landforms by course', b: 'Upper course: waterfalls and gorges. Middle course: meanders and ox-bow lakes. Lower course: floodplains, levees and estuaries.' },
      { n: 19, f: 'Hard engineering vs soft engineering', b: 'Hard (dams, sea walls, groynes): effective but costly and visually intrusive. Soft (beach nourishment, managed retreat, afforestation): cheaper and more sustainable but slower and less certain.' },
      { n: 20, f: 'Section structure of 9230 Paper 1 (Component 1)', b: 'A: natural hazards. B: the living world. C: coastal landscapes. D: hot desert OR river landscapes (one chosen). There is no cold environments option.' },
    ]),

    // 2 Challenges in the Human Environment
    ...sub('challenges-human-environment-9230', 'urban-growth-and-challenges-9230', '3.2.1.1', [
      { n: 1, f: 'Urbanisation', b: 'The increasing proportion of a population living in urban areas.' },
      { n: 2, f: 'Megacity', b: 'An urban area with a population of over 10 million.' },
      { n: 3, f: 'Push and pull factors in rural-urban migration', b: 'Push factors drive people from rural areas (poverty, limited services). Pull factors attract them to the city (jobs, education, healthcare).' },
      { n: 4, f: 'Natural increase vs migration as causes of urban growth', b: 'Natural increase: birth rate higher than death rate, with no movement of people. Migration: people moving in. They are separate mechanisms; name which one a fact shows.' },
      { n: 5, f: 'Squatter settlement', b: 'Informal housing built without legal permission or planning, often lacking services such as clean water and sanitation.' },
      { n: 6, f: 'Four-step chain for a case-study answer on urban growth', b: 'Cause (migration, natural increase) → growth → opportunity and challenge → response. Skipping the cause step is a common way to lose marks.' },
      { n: 7, f: 'Slots to prepare for the required LIC or NEE city case study', b: 'Location and importance; cause of growth; two opportunities; two challenges; one named planning response with an evaluation of how effective it was.' },
      { n: 8, f: 'Opportunities that urban growth can create in an LIC or NEE city', b: 'Better access to services and resources, and industrial areas that stimulate economic development and employment.' },
      { n: 9, f: 'Challenges that urban growth creates in an LIC or NEE city', b: 'Managing slums and squatter settlements; providing clean water, sanitation and energy; access to health and education; unemployment and crime; environmental problems; sustainability.' },
      { n: 10, f: 'How should you treat an urban planning example in an answer?', b: 'Name the scheme, then evaluate it: what improved, for whom, and what limits remained (cost, scale, who it reached). Description alone stops short of full marks.' },
    ]),
    ...sub('challenges-human-environment-9230', 'world-cities-london-new-york-9230', '3.2.1.2', [
      { n: 1, f: 'How many world cities must you study in 3.2.1.2?', b: 'One: London or New York. Learning both and comparing them is an optional extension, not required.' },
      { n: 2, f: 'Themes to cover for your chosen world city (importance)', b: 'National and global location; impact of national and international migration on growth and character; importance in finance, business, trade, culture and politics.' },
      { n: 3, f: 'Opportunities a world city offers', b: 'Economic, social and environmental: employment, recreation and urban greening.' },
      { n: 4, f: 'Challenges facing a world city', b: 'Urban deprivation and inequalities in housing, education, health and employment; dereliction; brownfield vs greenfield development; urban sprawl; food supply; congestion; waste, water and energy management.' },
      { n: 5, f: 'Urban sprawl', b: 'The unplanned outward spread of a city into surrounding countryside.' },
      { n: 6, f: 'Three things to know about a flagship urban regeneration project', b: 'Why the area needed regeneration (for example dereliction or deprivation), the main features of the project, and its social, economic and environmental impact, judged and not just listed.' },
      { n: 7, f: 'Why does a named, specific world-city answer score better than a general one?', b: 'The mark scheme rewards specific detail from London or New York (named places, districts and schemes) over general statements about world cities.' },
      { n: 8, f: 'Brownfield vs greenfield development', b: 'Brownfield: building on land previously developed, often derelict. Greenfield: building on undeveloped land, often on the city edge, which feeds urban sprawl.' },
    ]),

    // 3 Geographical and Fieldwork Skills
    ...topicOnly('geographical-fieldwork-skills-9230', '3', [
      { n: 1, f: 'Paper 3 structure (9230)', b: '1 hour 15 minutes, 60 marks, three compulsory 20-mark sections: A geographical skills, B fieldwork in unfamiliar contexts, C your own individual enquiry (you must identify its title).' },
      { n: 2, f: 'Four-figure vs six-figure grid reference', b: 'Four figures name a whole grid square. Six figures name a point to one-tenth of a square. Always give eastings before northings.' },
      { n: 3, f: 'Map scales: 1:50 000 and 1:25 000', b: '1:50 000: 1 cm = 500 m, so 2 cm = 1 km. 1:25 000: 1 cm = 250 m, so 4 cm = 1 km.' },
      { n: 4, f: 'How do you calculate a gradient from a map?', b: 'Vertical rise ÷ horizontal distance, in the same units (convert km to m), written as 1 in x. Example: 80 m over 1.2 km = 80 in 1200 = 1 in 15.' },
      { n: 5, f: 'Percentage change formula', b: '(new − old) ÷ old × 100. Divide by the original value, not the new one. Example: 250 to 310 is a 24% increase.' },
      { n: 6, f: 'Mean vs median vs mode', b: 'Mean: total ÷ number of values. Median: middle value of ordered data (average the middle two if n is even). Mode: most frequent value.' },
      { n: 7, f: 'Inter-quartile range and quartile positions', b: 'IQR = upper quartile − lower quartile. In ordered data the quartiles sit at positions (n + 1) ÷ 4 and 3(n + 1) ÷ 4.' },
      { n: 8, f: 'How do you work out a pie chart angle?', b: 'Percentage × 3.6 degrees. Example: 35% × 3.6 = 126°.' },
      { n: 9, f: 'Bar chart vs histogram', b: 'Bar chart: separate bars with gaps, for categories. Histogram: touching bars with equal class intervals, for continuous grouped data.' },
      { n: 10, f: 'Desire lines vs flow lines', b: 'Desire lines: straight lines from origin to destination. Flow lines: follow a route, with line width showing the amount.' },
      { n: 11, f: 'Choropleth vs isoline map', b: 'Choropleth: areas shaded by class of value. Isoline: lines joining points of equal value on a continuous surface such as temperature. Close isolines mean fast change.' },
      { n: 12, f: 'Interpolation vs extrapolation', b: 'Interpolation estimates within the range of the data. Extrapolation estimates beyond it and is less reliable.' },
      { n: 13, f: 'Accuracy vs reliability', b: 'Accuracy: how close a reading is to the true value. Reliability: repeating the method gives similar results.' },
      { n: 14, f: 'Random, systematic and stratified sampling', b: 'Random: random numbers pick sites, avoiding bias. Systematic: regular interval (every 20 m), even coverage. Stratified: sample groups in proportion, needs prior information.' },
      { n: 15, f: 'Primary vs secondary data; qualitative vs quantitative', b: 'Primary: collected by you. Secondary: collected by someone else. Qualitative: words and images. Quantitative: numbers.' },
      { n: 16, f: 'The six strands of the fieldwork enquiry', b: 'Suitable question; selecting, measuring and recording; processing and presenting; describing, analysing and explaining; conclusions; evaluation.' },
      { n: 17, f: 'How should you describe a pattern on a map or graph?', b: 'Overall pattern first, then quote at least two figures with units (or grid references), then name the exception or anomaly. Do not explain reasons if the question only says describe.' },
      { n: 18, f: 'Correlation vs cause', b: 'Two variables can change together without one causing the other. A line of best fit shows a link, not a cause.' },
    ]),
  ],
};
