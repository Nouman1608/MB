/**
 * D-444 -- flashcards for OxfordAQA International GCSE Geography 9230 (Version 4.3).
 *
 * Every topic lists subtopics, so every card is keyed by its subtopic number
 * (`<subtopic number>-<n>`). On 20 Nov 2026 the cards on topics 1 and 3 were
 * re-filed under their subtopics, and `idMigration` below moves saved progress
 * onto the new ids. Card ids are permanent (browser progress is keyed by
 * them): add a new card with the next unused n, never renumber.
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

export const DECK_OXFORDAQA_IGCSE_GEOGRAPHY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'geography',
  syllabusCode: '9230',
  syllabusSeries: 'Version 4.3',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'azam-siddique', reviewedOn: '2026-11-15' },
  idMigration: {
    id: '9230-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1-1': '3.1.1.2-1', '1-2': '3.1.1.2-2', '1-3': '3.1.1.2-3', '1-4': '3.1.1.1-1', '1-5': '3.1.1.1-2',
      '1-6': '3.1.1.2-4', '1-7': '3.1.1.1-3', '1-8': '3.1.1.3-1', '1-9': '3.1.1.3-2', '1-10': '3.1.1.4-1',
      '1-11': '3.1.1.4-2', '1-12': '3.1.2.2-1', '1-13': '3.1.2.2-2', '1-14': '3.1.2.3-1', '1-15': '3.1.3.2-1',
      '1-16': '3.1.4.2-1', '1-17': '3.1.3.2-2', '1-18': '3.1.4.2-2', '1-19': '3.1.3.2-3', '1-20': '3.1.1.1-4',
      '3.2.1.1-1': '3.2.1.1-1', '3.2.1.1-2': '3.2.1.1-2', '3.2.1.1-3': '3.2.1.1-3', '3.2.1.1-4': '3.2.1.1-4', '3.2.1.1-5': '3.2.1.1-5',
      '3.2.1.1-6': '3.2.1.1-6', '3.2.1.1-7': '3.2.1.1-7', '3.2.1.1-8': '3.2.1.1-8', '3.2.1.1-9': '3.2.1.1-9', '3.2.1.1-10': '3.2.1.1-10',
      '3.2.1.2-1': '3.2.1.2-1', '3.2.1.2-2': '3.2.1.2-2', '3.2.1.2-3': '3.2.1.2-3', '3.2.1.2-4': '3.2.1.2-4', '3.2.1.2-5': '3.2.1.2-5',
      '3.2.1.2-6': '3.2.1.2-6', '3.2.1.2-7': '3.2.1.2-7', '3.2.1.2-8': '3.2.1.2-8', '3-1': '3.3.1.1-1', '3-2': '3.3.1.1-2',
      '3-3': '3.3.1.1-3', '3-4': '3.3.1.1-4', '3-5': '3.3.1.3-1', '3-6': '3.3.1.4-1', '3-7': '3.3.1.4-2',
      '3-8': '3.3.1.2-1', '3-9': '3.3.1.2-2', '3-10': '3.3.1.1-5', '3-11': '3.3.1.1-6', '3-12': '3.3.1.2-3',
      '3-13': '3.3.2-1', '3-14': '3.3.2-2', '3-15': '3.3.2-3', '3-16': '3.3.2-4', '3-17': '3.3.1.2-4',
      '3-18': '3.3.1.4-3',
    },
  },
  cards: [
    // 1 Living with the Physical Environment
    ...sub('living-with-physical-environment-9230', 'natural-hazards-9230', '3.1.1.1', [
      { n: 1, f: 'Primary effect vs secondary effect of a hazard', b: 'Primary: caused directly by the hazard (buildings collapse, deaths). Secondary: follows from the primary effects (fires from ruptured gas mains, disease, homelessness, tsunami).' },
      { n: 2, f: 'Immediate response vs long-term response', b: 'Immediate: search and rescue, shelter, medical aid, emergency aid. Long-term: rebuilding to better standards, repairing infrastructure, better monitoring, economic recovery.' },
      { n: 3, f: 'What are the four Ps of managing natural hazards?', b: 'Prediction (monitoring), protection (resistant buildings, defences), preparation (drills, education, supplies) and planning (land-use zoning away from high risk).' },
      { n: 4, f: 'Section structure of 9230 Paper 1 (Component 1)', b: 'A: natural hazards. B: the living world. C: coastal landscapes. D: hot desert OR river landscapes (one chosen). There is no cold environments option.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'tectonic-hazards-9230', '3.1.1.2', [
      { n: 1, f: 'Constructive plate margin: movement and features', b: 'Plates move apart. Shield volcanoes, mid-ocean ridges and minor earthquakes (for example the Mid-Atlantic Ridge).' },
      { n: 2, f: 'Destructive plate margin: movement and features', b: 'Oceanic plate subducts beneath continental plate. Composite volcanoes, ocean trenches and deep-focus earthquakes.' },
      { n: 3, f: 'Which two plate margins have no volcanoes, and why?', b: 'Collision and conservative margins. No crust is being created or destroyed there, so no magma is generated. Collision gives fold mountains; conservative gives powerful earthquakes.' },
      { n: 4, f: 'Why does the same earthquake cause more deaths in a low-income country than a high-income one?', b: 'Weaker building codes and enforcement, fewer emergency resources, harder communications, limited healthcare and less preparation or early warning. The hazard is the same; vulnerability differs.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'weather-hazards-9230', '3.1.1.3', [
      { n: 1, f: 'Conditions needed for a tropical storm to form', b: 'Sea temperature above about 27 °C, deep warm ocean, low wind shear and a position roughly 5° to 30° from the equator so the Coriolis effect can start rotation.' },
      { n: 2, f: 'Structure of a tropical storm', b: 'A calm, clear, low-pressure eye at the centre; the eyewall around it with the most intense wind and rain; then spiralling rainbands further out.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'climate-change-9230', '3.1.1.4', [
      { n: 1, f: 'Mitigation vs adaptation in climate change', b: 'Mitigation reduces the causes (renewable energy, afforestation, carbon capture, international agreements). Adaptation copes with effects (flood defences, drought-resistant crops, managed retreat).' },
      { n: 2, f: 'Natural and human causes of climate change', b: 'Natural: orbital cycles, solar output variation, volcanic ash and aerosols. Human: burning fossil fuels, deforestation, livestock and rice farming, industry and cement. Mechanism: the enhanced greenhouse effect.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'ecosystems-9230', '3.1.2.1', [
      { n: 1, f: 'Biotic vs abiotic components of an ecosystem', b: 'Biotic: living parts (plants, animals, fungi, bacteria). Abiotic: non-living parts (sunlight, water, temperature, soil, air, nutrients). Soil is abiotic, but the bacteria living in it are biotic.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
      { n: 2, f: 'Producer, primary consumer, secondary consumer and decomposer', b: 'Producers make food by photosynthesis. Primary consumers eat producers. Secondary consumers eat primary consumers. Decomposers break down dead material and waste, releasing nutrients.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
      { n: 3, f: 'Food chain vs food web, and which way do the arrows point?', b: 'A food chain is one line of feeding links; a food web is many interlinked chains. Arrows point from the organism eaten to the one that eats it, showing energy flow.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
      { n: 4, f: 'Why are there fewer top predators than primary consumers?', b: 'Much energy is lost at each level as heat and in life processes, so less is available to support organisms higher up the chain.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
      { n: 5, f: 'The five steps of nutrient cycling', b: 'Producers take up nutrients, consumers eat them, death and waste fall to the ground or bed, decomposers break the material down, and nutrients are released for producers to reuse.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
      { n: 6, f: 'Sequence of eutrophication in a pond', b: 'Fertiliser adds nutrients, algae bloom, light is blocked and plants die, decomposers use up the oxygen, fish die and predators leave. Always give the whole chain of effects.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
      { n: 7, f: 'What mainly controls where each global biome is found?', b: 'Climate (temperature and rainfall), which varies with latitude. Rising air gives heavy rain near the equator; sinking dry air gives hot deserts at about 15° to 30° north and south.', src: 'oxfordaqa-igcse-geography-9230-ecosystems-revision-notes' },
    ]),
    ...sub('living-with-physical-environment-9230', 'tropical-rainforests-9230', '3.1.2.2', [
      { n: 1, f: 'Why does cleared tropical rainforest land quickly become infertile?', b: 'Nutrients are held in the biomass (the trees), not the soil. Once the trees are removed the store is lost, and the thin soil is infertile within a few growing seasons.' },
      { n: 2, f: 'Adaptations of tropical rainforest plants', b: 'Buttress roots for stability in thin soil, drip tips to shed heavy rain, lianas and epiphytes to reach light, and a dense closed canopy.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'hot-deserts-9230', '3.1.2.3', [
      { n: 1, f: 'Adaptations of hot desert plants and animals', b: 'Deep or wide-spreading roots, water stored in stems, waxy or spiny leaves to cut transpiration, and nocturnal behaviour to avoid daytime heat.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'physical-landscapes-in-middle-and-far-east-9230', '3.1.3.1', [
      { n: 1, f: 'Why do the Middle and Far East have such varied landscapes?', b: 'Plate collisions raised the Himalayas and Tibetan Plateau and the Alpine belt (Zagros, Elburz, Taurus). Volcanoes follow the Pacific Ring of Fire. Rivers build plains and deltas, and climate ranges from desert to monsoon.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 2, f: 'Where is the Tibetan Plateau, and why does it matter for rivers?', b: 'South-west China, north of the Himalayas; the highest and largest plateau, averaging over 4 000 m. The Yangtze, Yellow River and Mekong all rise there and flow out in different directions.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 3, f: 'Highest mountain range and peak in the world', b: 'The Himalayas, along the northern edge of South Asia. Mount Everest is about 8 849 m, on the border of Nepal and China (Tibet).', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 4, f: 'Zagros vs Elburz mountains', b: 'Zagros: a folded range in western Iran running north-west to south-east. Elburz: in northern Iran, south of the Caspian Sea, and includes Damavand.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 5, f: 'Mesopotamia', b: 'The alluvial lowland plain of Iraq between the Tigris and Euphrates rivers. Its flat, fertile land supported some of the earliest farming.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 6, f: 'Source and mouth of the Tigris and Euphrates', b: 'Both rise in eastern Turkey and flow through dry land to the Persian Gulf, where they join. The Euphrates is the longer, at about 2 800 km.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 7, f: 'Describe the course of the Yangtze', b: 'It rises on the Tibetan Plateau, flows east through mountains and the Sichuan Basin, then across the lowlands to the East China Sea near Shanghai. At about 6 300 km it is the longest river in Asia.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
      { n: 8, f: 'Method for describing a landscape or river from an atlas', b: 'Give location with direction and a landmark; relief (high, low, flat, steep) with named features; drainage (source, direction, mouth); links between features; and evidence such as heights and names.', src: 'oxfordaqa-igcse-geography-9230-physical-landscapes-middle-far-east-revision-notes' },
    ]),
    ...sub('living-with-physical-environment-9230', 'coastal-landscapes-9230', '3.1.3.2', [
      { n: 1, f: 'Four processes of coastal and river erosion', b: 'Hydraulic action, abrasion, attrition and solution.' },
      { n: 2, f: 'Sequence of erosional coastal landforms', b: 'Headland, cave, arch, stack, stump. Erosional landforms also include bays and wave-cut platforms; depositional ones include beaches, spits and bars.' },
      { n: 3, f: 'Hard engineering vs soft engineering', b: 'Hard (dams, sea walls, groynes): effective but costly and visually intrusive. Soft (beach nourishment, managed retreat, afforestation): cheaper and more sustainable but slower and less certain.' },
    ]),
    ...sub('living-with-physical-environment-9230', 'hot-desert-landscapes-9230', '3.1.4.1', [
      { n: 1, f: 'Three ways wind transports material in a desert', b: 'Surface creep (large grains rolled along the ground), saltation (sand bouncing in short hops) and suspension (fine dust carried high and far).', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 2, f: 'Abrasion vs deflation by wind', b: 'Abrasion is sand-blasting that wears rock away, strongest near the ground. Deflation is the removal of loose, fine material, which leaves stony desert pavement or hollows.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 3, f: 'Three ways water transports material in a desert', b: 'Traction (boulders rolled along the bed), saltation (sand and gravel bouncing) and suspension (silt and clay carried in the flow).', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 4, f: 'Why does a desert flash flood deposit its load?', b: 'The flood loses energy as it spreads out, sinks into the dry ground and evaporates, so it drops the material it carries.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 5, f: 'Yardang vs zeugen', b: 'Yardang: a long, streamlined ridge aligned with the prevailing wind. Zeugen: a table-shaped rock with a hard cap left on a pedestal of softer rock worn away by abrasion.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 6, f: 'How does a barchan dune form and move?', b: 'Sand is deposited when wind slows at an obstacle. Sand is pushed up the gentle windward slope and slides down the steep slip face, so the crescent dune migrates downwind with its horns pointing downwind.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 7, f: 'How does an alluvial fan form?', b: 'A flash flood leaves a narrow valley and spreads over an open plain, slows and sinks in. It drops its load, boulders first, and the deposits build into a fan shape at the valley mouth.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 8, f: 'Wadi vs salt lake in a hot desert', b: 'A wadi is a steep-sided, flat-floored valley, mostly dry, cut by flash floods. A salt lake forms when a temporary lake in a basin with no outlet evaporates and leaves a crust of salt.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
      { n: 9, f: 'Opportunities and challenges of developing a hot desert', b: 'Opportunities: oil and minerals, solar power, irrigated farming, tourism. Challenges: extreme heat, scarce water (desalination or slowly recharging groundwater) and costly access across sand and distance.', src: 'oxfordaqa-igcse-geography-9230-hot-desert-landscapes-revision-notes' },
    ]),
    ...sub('living-with-physical-environment-9230', 'river-landscapes-9230', '3.1.4.2', [
      { n: 1, f: 'Four processes of transport', b: 'Traction, saltation, suspension and solution. Deposition happens when energy falls.' },
      { n: 2, f: 'River landforms by course', b: 'Upper course: waterfalls and gorges. Middle course: meanders and ox-bow lakes. Lower course: floodplains, levees and estuaries.' },
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
    ...sub('challenges-human-environment-9230', 'global-variations-in-levels-of-economic-development-9230', '3.2.2.1', [
      { n: 1, f: 'What does the Human Development Index (HDI) combine?', b: 'Life expectancy, education and income, giving a score from 0 to 1. It leaves out inequality, the environment and human rights.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 2, f: 'Why is GNI per head a limited measure of development?', b: 'It is an average, so it hides inequality. It misses the informal economy and subsistence farming, ignores price differences between countries, and says nothing about health or education.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 3, f: 'Why can a low death rate be a misleading indicator?', b: 'A country with a young population has a low death rate even if it is poor, so death rate does not show how developed a country is.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 4, f: 'Demographic Transition Model: Stage 2 and Stage 3', b: 'Stage 2: high birth rate, falling death rate, rapid growth (many LICs). Stage 3: falling birth rate, low death rate, growth still continuing (NEEs).', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 5, f: 'Why do death rates fall before birth rates in the DTM?', b: 'Better food, water and medicine cut deaths first. Birth rates fall later, with education for women, urban living, contraception and higher incomes.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 6, f: 'Physical, economic and historical causes of uneven development', b: 'Physical: drought, hazards, poor soil, disease, being landlocked. Economic: reliance on raw material exports, debt, unfair trade. Historical: colonial export economies, slavery, conflict.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 7, f: 'Brain drain and remittances', b: 'Brain drain: skilled people leaving their home country to work abroad. Remittances: money that migrants send home to their families.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 8, f: 'Strategies to reduce the development gap, each with a limitation', b: 'Aid (dependency, corruption), investment (profits leave), Fairtrade (small share of trade), debt relief (borrowing may resume), microfinance (high interest), intermediate technology (small scale).', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
      { n: 9, f: 'Intermediate technology', b: 'Simple, low-cost tools and methods suited to local needs and skills. They are cheap and easy to repair, but only work at a small scale.', src: 'oxfordaqa-igcse-geography-9230-global-variations-economic-development-revision-notes' },
    ]),
    ...sub('challenges-human-environment-9230', 'challenges-of-rapid-economic-development-9230', '3.2.2.2', [
      { n: 1, f: 'Primary, secondary, tertiary and quaternary sectors', b: 'Primary: raw materials. Secondary: manufacturing. Tertiary: services. Quaternary: knowledge and research, such as technology.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 2, f: 'Transnational corporation (TNC) and special economic zone (SEZ)', b: 'TNC: a company operating in more than one country. SEZ: an area with incentives such as low taxes, designed to attract foreign investment.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 3, f: 'How does manufacturing stimulate economic development?', b: 'It creates jobs and higher incomes, earns export income, moves workers out of low-productivity farming, and raises demand in other industries (multiplier effect). Tax revenue then pays for infrastructure.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 4, f: 'Advantages of TNCs for a host country', b: 'Jobs, investment, transfer of technology and skills, exports that earn foreign currency, and tax revenue.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 5, f: 'Disadvantages of TNCs for a host country', b: 'Low wages and poor conditions, profits sent abroad, factories that relocate when wages rise, pollution, dependence on foreign firms and competition for local businesses.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 6, f: 'Bilateral, multilateral and tied aid', b: 'Bilateral: government to government. Multilateral: through organisations such as the World Bank or UN. Tied: must be spent on goods or services from the donor country.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 7, f: 'Emergency aid vs development aid', b: 'Emergency aid is short-term relief after a disaster. Development aid funds long-term projects such as schools, roads and clinics.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 8, f: 'Environmental impacts of rapid economic development', b: 'Air pollution from coal, polluted rivers and water shortages, soil loss and farmland lost to cities, and rising carbon dioxide emissions. Responses include renewable energy, stricter laws and tree planting.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
      { n: 9, f: 'Slots to prepare for the required LIC or NEE case study', b: 'Location and importance; political, social, cultural and environmental context; industrial structure; TNCs; trading relationships; aid; environmental impacts; quality of life.', src: 'oxfordaqa-igcse-geography-9230-challenges-rapid-economic-development-revision-notes' },
    ]),
    ...sub('challenges-human-environment-9230', 'water-and-energy-9230', '3.2.3.1', [
      { n: 1, f: 'Physical vs economic water scarcity', b: 'Physical: not enough water exists naturally. Economic: water exists but people cannot reach or afford it. Both are forms of water insecurity.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 2, f: 'Factors that reduce water availability', b: 'Low rainfall, geology (few aquifers), pollution, over-abstraction, limited infrastructure and poverty.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 3, f: 'Impacts of water or energy insecurity', b: 'Waterborne disease, lower food and industrial output, and conflict where demand exceeds supply. Energy insecurity also pushes drilling into difficult, sensitive areas.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 4, f: 'Desalination: advantage and disadvantage', b: 'Advantage: reliable water supply for coastal areas. Disadvantage: high energy use and cost, plus brine waste.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 5, f: 'Strategies that increase water supply vs strategies that reduce demand', b: 'Dams and reservoirs, transfers and desalination increase supply. Conservation reduces demand. Groundwater management and recycling or grey water make existing supplies last.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 6, f: 'Advantages and disadvantages of a large-scale water transfer scheme', b: 'Advantages: water for dry areas, supports industry and farming. Disadvantages: very expensive, people relocated, source area loses water and there is a pollution risk.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 7, f: 'Renewable vs non-renewable energy', b: 'Renewable (wind, solar, hydro, tidal, geothermal, biomass) does not run out. Non-renewable (coal, oil, gas, nuclear) will run out. Nuclear counts as non-renewable.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 8, f: 'Disadvantages of renewable energy', b: 'Intermittent supply, high set-up costs, and effects on landscape and wildlife, even though they are low carbon in use.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
      { n: 9, f: 'What is a carbon footprint, and how can an individual reduce theirs?', b: 'The carbon dioxide released by a person or activity. Reduce it by using less electricity, travelling less by car, insulating the home and eating less meat.', src: 'oxfordaqa-igcse-geography-9230-water-and-energy-revision-notes' },
    ]),
    ...sub('challenges-human-environment-9230', 'population-and-communication-9230', '3.2.3.2', [
      { n: 1, f: 'Natural increase', b: 'Birth rate minus death rate. When births exceed deaths the population grows without any migration.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 2, f: 'Causes of rapid population growth in LICs', b: 'Improved medical care and sanitation, aid, religion, low status and education of women, and the role of children in farm work. Death rates fall before birth rates, so growth is rapid.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 3, f: 'Why does a young age structure keep population growing?', b: 'There are many young women of childbearing age, so total births keep rising even if each woman has fewer children.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 4, f: 'Contrast China\'s one-child policy with Thailand\'s voluntary approach', b: 'China used a one-child policy with legal limits, fines and rewards, and left an ageing population. Thailand used contraception, health workers and education, which worked more slowly but with less resentment.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 5, f: 'Refugee vs asylum seeker vs economic migrant', b: 'Refugee: forced to flee war or persecution. Asylum seeker: has applied for protection and awaits a decision. Economic migrant: chooses to move to find work.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 6, f: 'Push and pull factors in international migration', b: 'Push: war, poverty, lack of jobs. Pull: safety, jobs and higher wages.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 7, f: 'Impacts of international migration on origin and destination countries', b: 'Origin: loss of young workers and brain drain, but remittances. Destination: more workers and diversity, but pressure on housing and services and sometimes tension.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 8, f: 'Containerisation', b: 'Shipping goods in standard-size steel boxes that move easily between ships, trains and lorries, which makes goods cheaper to move and supports global supply chains.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 9, f: 'Benefits and challenges of airport expansion', b: 'Benefits: more flights and links, jobs, growth, reduced delays. Challenges: noise, air pollution and emissions, homes and land lost, road traffic, cost and opposition.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 10, f: 'The digital divide and the pattern of ICT access', b: 'The gap between those with and without ICT access. Access is highest in HICs and lowest in LICs, especially rural areas, but mobile phones are spreading fastest in NEEs and LICs.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
      { n: 11, f: 'How can ICT support growth in an NEE?', b: 'Call centres and outsourcing, software exports, TNC investment, and online trade and tourism. Problems include shift work, competition from other countries and uneven access.', src: 'oxfordaqa-igcse-geography-9230-population-and-communication-revision-notes' },
    ]),

    // 3 Geographical and Fieldwork Skills
    ...sub('geographical-fieldwork-skills-9230', 'cartographic-skills-9230', '3.3.1.1', [
      { n: 1, f: 'Paper 3 structure (9230)', b: '1 hour 15 minutes, 60 marks, three compulsory 20-mark sections: A geographical skills, B fieldwork in unfamiliar contexts, C your own individual enquiry (you must identify its title).' },
      { n: 2, f: 'Four-figure vs six-figure grid reference', b: 'Four figures name a whole grid square. Six figures name a point to one-tenth of a square. Always give eastings before northings.' },
      { n: 3, f: 'Map scales: 1:50 000 and 1:25 000', b: '1:50 000: 1 cm = 500 m, so 2 cm = 1 km. 1:25 000: 1 cm = 250 m, so 4 cm = 1 km.' },
      { n: 4, f: 'How do you calculate a gradient from a map?', b: 'Vertical rise ÷ horizontal distance, in the same units (convert km to m), written as 1 in x. Example: 80 m over 1.2 km = 80 in 1200 = 1 in 15.' },
      { n: 5, f: 'Desire lines vs flow lines', b: 'Desire lines: straight lines from origin to destination. Flow lines: follow a route, with line width showing the amount.' },
      { n: 6, f: 'Choropleth vs isoline map', b: 'Choropleth: areas shaded by class of value. Isoline: lines joining points of equal value on a continuous surface such as temperature. Close isolines mean fast change.' },
    ]),
    ...sub('geographical-fieldwork-skills-9230', 'graphical-skills-9230', '3.3.1.2', [
      { n: 1, f: 'How do you work out a pie chart angle?', b: 'Percentage × 3.6 degrees. Example: 35% × 3.6 = 126°.' },
      { n: 2, f: 'Bar chart vs histogram', b: 'Bar chart: separate bars with gaps, for categories. Histogram: touching bars with equal class intervals, for continuous grouped data.' },
      { n: 3, f: 'Interpolation vs extrapolation', b: 'Interpolation estimates within the range of the data. Extrapolation estimates beyond it and is less reliable.' },
      { n: 4, f: 'How should you describe a pattern on a map or graph?', b: 'Overall pattern first, then quote at least two figures with units (or grid references), then name the exception or anomaly. Do not explain reasons if the question only says describe.' },
    ]),
    ...sub('geographical-fieldwork-skills-9230', 'numerical-skills-9230', '3.3.1.3', [
      { n: 1, f: 'Percentage change formula', b: '(new − old) ÷ old × 100. Divide by the original value, not the new one. Example: 250 to 310 is a 24% increase.' },
    ]),
    ...sub('geographical-fieldwork-skills-9230', 'statistical-skills-9230', '3.3.1.4', [
      { n: 1, f: 'Mean vs median vs mode', b: 'Mean: total ÷ number of values. Median: middle value of ordered data (average the middle two if n is even). Mode: most frequent value.' },
      { n: 2, f: 'Inter-quartile range and quartile positions', b: 'IQR = upper quartile − lower quartile. In ordered data the quartiles sit at positions (n + 1) ÷ 4 and 3(n + 1) ÷ 4.' },
      { n: 3, f: 'Correlation vs cause', b: 'Two variables can change together without one causing the other. A line of best fit shows a link, not a cause.' },
    ]),
    ...sub('geographical-fieldwork-skills-9230', 'section-b-fieldwork-skills-and-section-c-individual-fieldwork-enquiry-9230', '3.3.2', [
      { n: 1, f: 'Accuracy vs reliability', b: 'Accuracy: how close a reading is to the true value. Reliability: repeating the method gives similar results.' },
      { n: 2, f: 'Random, systematic and stratified sampling', b: 'Random: random numbers pick sites, avoiding bias. Systematic: regular interval (every 20 m), even coverage. Stratified: sample groups in proportion, needs prior information.' },
      { n: 3, f: 'Primary vs secondary data; qualitative vs quantitative', b: 'Primary: collected by you. Secondary: collected by someone else. Qualitative: words and images. Quantitative: numbers.' },
      { n: 4, f: 'The six strands of the fieldwork enquiry', b: 'Suitable question; selecting, measuring and recording; processing and presenting; describing, analysing and explaining; conclusions; evaluation.' },
    ]),
  ],
};
