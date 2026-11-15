/**
 * D-444 -- flashcards for Cambridge IGCSE Geography 0460 (2025-2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Geography is not tiered, so no card sets `u`. Facts are generic (no case
 * studies and no statistics). src: '...' marks a card that restates a Marlbridge
 * 0460 revision-notes page; origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for symbols.
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

const DEV = 'igcse-geography-0460-development-revision-notes';
const FOOD = 'igcse-geography-0460-food-production-revision-notes';
const TOUR = 'igcse-geography-0460-tourism-revision-notes';

const T1 = 'theme-1-population-settlement-0460';
const T2 = 'theme-2-natural-environment-0460';
const T3 = 'theme-3-economic-development-0460';

export const DECK_CAMBRIDGE_IGCSE_GEOGRAPHY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'geography',
  syllabusCode: '0460',
  syllabusSeries: '2025-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  cards: [
    // Theme 1 Population and settlement
    ...sub(T1, 'population-dynamics-0460', '1.1', [
      { n: 1, f: 'Birth rate', b: 'The number of live births per 1000 people in a population per year.' },
      { n: 2, f: 'Death rate', b: 'The number of deaths per 1000 people in a population per year.' },
      { n: 3, f: 'How is natural change calculated?', b: 'Birth rate minus death rate. A positive result is natural increase; a negative result is natural decrease.' },
      { n: 4, f: 'Give three reasons for a high birth rate', b: 'Lack of family planning or contraception, high infant mortality (so families have more children), children needed as farm labour, and religious or cultural beliefs.' },
      { n: 5, f: 'Give three reasons for a low birth rate', b: 'Access to contraception, education and careers for women, high cost of raising children, and later marriage.' },
      { n: 6, f: 'Why does a death rate fall as a country develops?', b: 'Better healthcare, clean water and sanitation, improved diet and better medical knowledge reduce deaths from disease and malnutrition.' },
    ]),
    ...sub(T1, 'migration-0460', '1.2', [
      { n: 1, f: 'Push factors (migration)', b: 'Negative things that drive people to leave a place, such as unemployment, poverty, conflict, natural disasters, persecution and poor services.' },
      { n: 2, f: 'Pull factors (migration)', b: 'Attractions that draw people to a place, such as jobs, higher wages, better services, safety and family already living there.' },
      { n: 3, f: 'Internal vs international migration', b: 'Internal migration is movement within one country. International migration is movement between countries.' },
      { n: 4, f: 'Voluntary vs forced migration', b: 'Voluntary migrants choose to move, usually for work or a better life. Forced migrants (such as refugees) must leave because of conflict, persecution or disaster.' },
      { n: 5, f: 'Give two impacts of migration on the source country', b: 'Benefits: remittances, less unemployment. Costs: brain drain, loss of working-age people and split families.' },
      { n: 6, f: 'Give two impacts of migration on the receiving country', b: 'Benefits: fills labour shortages, young taxpayers, cultural diversity. Costs: pressure on housing and services, possible social tension.' },
    ]),
    ...sub(T1, 'population-structure-0460', '1.3', [
      { n: 1, f: 'What does a population pyramid show?', b: 'The percentage or number of males and females in each age group of a population. Males are usually on the left and females on the right.' },
      { n: 2, f: 'Dependent population', b: 'People too young (under about 15) or too old (over about 65) to work, who rely on the working-age population for support.' },
      { n: 3, f: 'Dependency ratio', b: 'The number of dependents (young plus elderly) compared with the working-age population, often shown per 100 working-age people.' },
      { n: 4, f: 'What does a wide base on a pyramid show?', b: 'A high birth rate and many young dependents. This is typical of a low-income country.' },
      { n: 5, f: 'What does a narrow base and wide top show?', b: 'A low birth rate and an ageing population with high life expectancy. This is typical of a high-income country.' },
      { n: 6, f: 'Problems of an ageing population', b: 'More pensions and healthcare needed, a shrinking workforce, fewer taxpayers, and pressure on government spending.' },
    ]),
    ...sub(T1, 'population-density-distribution-0460', '1.4', [
      { n: 1, f: 'Population density', b: 'The average number of people per square kilometre in an area.' },
      { n: 2, f: 'Population distribution', b: 'How people are spread across an area, showing where it is densely or sparsely populated.' },
      { n: 3, f: 'Physical factors that give a dense population', b: 'Flat or gently sloping land, fertile soil, a reliable water supply, a mild climate and mineral resources.' },
      { n: 4, f: 'Physical factors that give a sparse population', b: 'Mountains, deserts, dense rainforest, very cold or very wet climates, poor soil and a lack of fresh water.' },
      { n: 5, f: 'Human and economic factors affecting density', b: 'Job opportunities, industry, good transport links, political stability and government policy. These attract people to an area.' },
    ]),
    ...sub(T1, 'settlements-service-provision-0460', '1.5', [
      { n: 1, f: 'Site vs situation of a settlement', b: 'Site is the actual land the settlement is built on. Situation is its position in relation to the surrounding area, such as routes and other places.' },
      { n: 2, f: 'Give four site factors for early settlements', b: 'Water supply, flat or well-drained land, defence (for example a hill or river bend), fuel and building materials, and fertile land.' },
      { n: 3, f: 'Threshold population', b: 'The minimum number of people needed to support a service.' },
      { n: 4, f: 'Range (of a service)', b: 'How far people will travel to use a service.' },
      { n: 5, f: 'Settlement hierarchy', b: 'Settlements ranked by size and importance. There are many small villages with few services and few large cities with many.' },
      { n: 6, f: 'Dispersed, linear and nucleated patterns', b: 'Dispersed: scattered buildings. Linear: buildings in a line along a road, river or coast. Nucleated: buildings clustered around a central point.' },
    ]),
    ...sub(T1, 'urban-settlements-0460', '1.6', [
      { n: 1, f: 'Central business district (CBD)', b: 'The commercial centre of a city, with shops, offices and the highest land values, easy access and the tallest buildings.' },
      { n: 2, f: 'Why are land values highest in the CBD?', b: 'It is the most accessible point, with the best transport links and the highest demand for space, so it is the most expensive.' },
      { n: 3, f: 'Typical land use zones from centre to edge', b: 'CBD, inner city (older housing and industry), inner suburbs, outer suburbs, then the rural-urban fringe.' },
      { n: 4, f: 'Problems in the inner city', b: 'Old and poor-quality housing, derelict land, unemployment, crime, traffic congestion and a poor environment.' },
      { n: 5, f: 'Problems at the rural-urban fringe', b: 'Loss of farmland and green space through urban sprawl, and more commuting and traffic. Greenfield sites are cheap and spacious.' },
      { n: 6, f: 'Brownfield vs greenfield site', b: 'Brownfield: land previously built on and now reused. Greenfield: land that has not been built on before, often on the edge of a town.' },
    ]),
    ...sub(T1, 'urbanisation-0460', '1.7', [
      { n: 1, f: 'Urbanisation', b: 'The increase in the proportion of a country\'s population living in towns and cities.' },
      { n: 2, f: 'Main cause of urbanisation in low-income countries', b: 'Rural-urban migration, driven by rural push factors and urban pull factors, plus natural increase in cities.' },
      { n: 3, f: 'Rural push factors', b: 'Few jobs, low farm incomes, poor services, drought or land shortage, and hardship in the countryside.' },
      { n: 4, f: 'Urban pull factors', b: 'More jobs, higher wages, better schools and hospitals and a perceived better standard of living in the city.' },
      { n: 5, f: 'Problems of rapid urban growth', b: 'Shortage of housing leading to squatter settlements, traffic congestion, unemployment, pollution and strain on water and sanitation.' },
      { n: 6, f: 'Squatter settlement', b: 'Housing built illegally on land the residents do not own, usually from poor materials and often lacking water, sewage and electricity.' },
    ]),

    // Theme 2 The natural environment
    ...sub(T2, 'earthquakes-volcanoes-0460', '2.1', [
      { n: 1, f: 'Layers of the Earth, from the surface inwards', b: 'Crust, mantle, outer core (liquid) and inner core (solid).' },
      { n: 2, f: 'Constructive plate margin', b: 'Plates move apart. Magma rises to fill the gap, forming new crust, for example at mid-ocean ridges.' },
      { n: 3, f: 'Destructive plate margin', b: 'An oceanic plate sinks beneath a continental plate (subduction). This produces ocean trenches, fold mountains, earthquakes and explosive volcanoes.' },
      { n: 4, f: 'Conservative plate margin', b: 'Plates slide past each other. Pressure builds then releases as earthquakes. Crust is neither created nor destroyed.' },
      { n: 5, f: 'Focus and epicentre of an earthquake', b: 'The focus is the point underground where the earthquake starts. The epicentre is the point on the surface directly above it.' },
      { n: 6, f: 'What instrument measures earthquake magnitude, and on what scale?', b: 'A seismometer records the waves. Magnitude is expressed on the Richter or moment magnitude scale.' },
      { n: 7, f: 'Why do people live near volcanoes?', b: 'Fertile volcanic soils, geothermal energy, minerals, tourism and the fact that eruptions are infrequent.' },
      { n: 8, f: 'Ways to reduce earthquake impacts', b: 'Earthquake-resistant buildings, public education and drills, emergency plans and monitoring, and land-use planning.' },
    ]),
    ...sub(T2, 'rivers-0460', '2.2', [
      { n: 1, f: 'Four processes of river erosion', b: 'Hydraulic action, abrasion (corrasion), attrition and solution (corrosion).' },
      { n: 2, f: 'Attrition', b: 'Rocks carried by the river knock into each other and become smaller and rounder.' },
      { n: 3, f: 'Four ways a river transports its load', b: 'Traction (rolling along the bed), saltation (bouncing), suspension (carried in the water) and solution (dissolved).' },
      { n: 4, f: 'How is a waterfall formed?', b: 'A river flows over hard rock onto softer rock. The soft rock erodes faster, creating a step and a plunge pool. The overhang collapses and the waterfall retreats upstream, forming a gorge.' },
      { n: 5, f: 'How is a meander formed?', b: 'Erosion on the outside bend (faster flow) forms a river cliff. Deposition on the inside bend (slower flow) forms a slip-off slope.' },
      { n: 6, f: 'How is a flood plain formed?', b: 'Repeated flooding deposits silt and alluvium across the valley floor, building a flat, fertile area beside the river.' },
      { n: 7, f: 'Hard vs soft engineering of rivers', b: 'Hard: dams, embankments and straightening channels. Soft: flood warnings, floodplain zoning and planting trees. Soft methods work with natural processes.' },
      { n: 8, f: 'Discharge', b: 'The volume of water flowing past a point in a river in a given time, usually measured in cubic metres per second (cumecs).' },
    ]),
    ...sub(T2, 'coasts-0460', '2.3', [
      { n: 1, f: 'Constructive vs destructive waves', b: 'Constructive waves are low with a strong swash and build beaches. Destructive waves are high with a strong backwash and erode beaches.' },
      { n: 2, f: 'Longshore drift', b: 'Waves approach at an angle, swash carries material up the beach at that angle, and backwash returns straight down, moving sediment along the coast in a zigzag.' },
      { n: 3, f: 'How is a wave-cut platform formed?', b: 'Waves undercut a cliff, forming a notch. The cliff collapses and retreats, leaving a gently sloping rock platform at its base.' },
      { n: 4, f: 'Sequence of headland landforms', b: 'Cave, arch, stack, then stump, formed by erosion of a weakness in a headland.' },
      { n: 5, f: 'How is a spit formed?', b: 'Longshore drift deposits sand and shingle where the coast changes direction, building a ridge out into the sea.' },
      { n: 6, f: 'Coral reef conditions', b: 'Warm, clear, shallow, salty water, usually above about 18 °C, with plenty of sunlight and no heavy sediment.' },
      { n: 7, f: 'Why are mangroves valuable?', b: 'Their roots trap sediment and reduce wave energy, protecting coasts. They are also habitats and nursery areas for fish.' },
      { n: 8, f: 'Examples of coastal management', b: 'Hard: sea walls, groynes, rock armour. Soft: beach nourishment, dune stabilisation and managed retreat.' },
    ]),
    ...sub(T2, 'weather-0460', '2.4', [
      { n: 1, f: 'Stevenson screen: features and purpose', b: 'A white, louvred box raised on legs in an open site. It shelters instruments from direct sun and rain while allowing air to flow through.' },
      { n: 2, f: 'Which instrument measures maximum and minimum temperature?', b: 'A maximum-minimum thermometer, kept in the Stevenson screen.' },
      { n: 3, f: 'What does a barometer measure?', b: 'Atmospheric pressure, usually in millibars or hectopascals.' },
      { n: 4, f: 'What does an anemometer measure?', b: 'Wind speed. A wind vane shows wind direction, named as the direction the wind comes from.' },
      { n: 5, f: 'Rain gauge: how should it be sited?', b: 'In an open space with its rim above the ground, away from trees and buildings that could shelter it from rain.' },
      { n: 6, f: 'Three types of rainfall', b: 'Convectional (heated ground, rising air), relief (air forced up high ground) and frontal (warm air rising over cold air at a front).' },
      { n: 7, f: 'Describe the weather of an area of low pressure', b: 'Air rises, cools and condenses, giving cloud, rain and often wind. Low pressure is generally unsettled weather.' },
      { n: 8, f: 'Describe the weather of an area of high pressure', b: 'Air sinks and warms, giving clear skies and dry, settled weather. Winds are light.' },
    ]),
    ...sub(T2, 'climate-natural-vegetation-0460', '2.5', [
      { n: 1, f: 'Weather vs climate', b: 'Weather is the day-to-day state of the atmosphere. Climate is the average weather of an area over a long period, usually 30 years or more.' },
      { n: 2, f: 'Climate of a tropical rainforest', b: 'Hot all year, with a small temperature range and high rainfall, often daily, throughout the year.' },
      { n: 3, f: 'Layers of a tropical rainforest', b: 'Emergent layer, canopy, understorey and forest floor. Most life is found in the dense canopy.' },
      { n: 4, f: 'How are plants adapted to the rainforest?', b: 'Drip tips shed heavy rain, buttress roots support tall trees, and the evergreen canopy competes for light. Growth is fast.' },
      { n: 5, f: 'Climate of a hot desert', b: 'Very hot by day and cooler at night, so a large daily temperature range, with low and unreliable rainfall.' },
      { n: 6, f: 'How are desert plants adapted?', b: 'Long roots or wide shallow roots, waxy or small leaves, spines and water-storing stems to reduce water loss.' },
      { n: 7, f: 'Causes of deforestation', b: 'Logging, farming and cattle ranching, mining, road building and settlement.' },
      { n: 8, f: 'Impacts of deforestation', b: 'Loss of biodiversity, soil erosion, flooding, less transpiration and rainfall locally, and more carbon dioxide in the atmosphere.' },
    ]),

    // Theme 3 Economic development
    ...sub(T3, 'development-0460', '3.1', [
      { n: 1, f: 'Primary sector', b: 'Extracting raw materials, such as farming, fishing, mining and forestry.', src: DEV },
      { n: 2, f: 'Secondary sector', b: 'Making things, such as factories, food processing and construction.', src: DEV },
      { n: 3, f: 'Tertiary sector', b: 'Services, such as teachers, nurses, shops, transport, banks and tourism.', src: DEV },
      { n: 4, f: 'Quaternary sector', b: 'Knowledge and research, such as software, research and development, data and consultancy.', src: DEV },
      { n: 5, f: 'GNP vs GNP per capita', b: 'GNP is the total; GNP per capita is the average per person. Only per capita compares living standards.', src: DEV },
      { n: 6, f: 'Economic vs social indicators', b: 'Economic indicators measure income. Social indicators measure health, education and welfare.', src: DEV },
      { n: 7, f: 'What is the Human Development Index (HDI)?', b: 'A composite measure combining income, life expectancy and education to rank countries\' level of human development.' },
      { n: 8, f: 'Transnational corporation (TNC)', b: 'A company that operates in more than one country, often with its headquarters in a high-income country.', src: DEV },
    ]),
    ...sub(T3, 'food-production-0460', '3.2', [
      { n: 1, f: 'Commercial vs subsistence farming', b: 'It is about who the food is for. Commercial farming produces to sell for profit; subsistence farming feeds the farmer\'s own family.', src: FOOD },
      { n: 2, f: 'Intensive vs extensive farming', b: 'Intensive farming has high inputs and output per hectare. Extensive farming has low inputs and output per hectare over a large area.', src: FOOD },
      { n: 3, f: 'Farming system: inputs, processes, outputs', b: 'Inputs (seed, labour, rain), processes (ploughing, harvesting, feeding animals), outputs (crops, milk, meat).' },
      { n: 4, f: 'Natural factors affecting farming', b: 'Relief, climate (temperature and rainfall) and soil.', src: FOOD },
      { n: 5, f: 'Human factors affecting farming', b: 'Capital, markets, transport, government policy, land tenure and tradition.', src: FOOD },
      { n: 6, f: 'Food shortage vs famine', b: 'A shortage is not enough food. Famine is the extreme end, with widespread deaths.', src: FOOD },
      { n: 7, f: 'Causes of food shortages', b: 'Drought, flood, war and conflict, poverty, pests and disease, and poor storage or transport.' },
      { n: 8, f: 'Ways to increase food supply', b: 'Irrigation, fertilisers, high-yield seed varieties, mechanisation and better storage.' },
    ]),
    ...sub(T3, 'industry-0460', '3.3', [
      { n: 1, f: 'Industrial system', b: 'Inputs (raw materials, labour, energy, capital), processes (manufacturing) and outputs (products and waste).' },
      { n: 2, f: 'Factors influencing industrial location', b: 'Raw materials, energy, labour supply, transport, markets, capital and government policy.' },
      { n: 3, f: 'Why do TNCs locate factories in low-income countries?', b: 'Cheaper labour, lower land costs, government incentives and access to local markets or raw materials.' },
      { n: 4, f: 'Benefits of industry to a low-income country', b: 'Jobs, higher incomes, tax revenue, skills training and growth in related businesses.' },
      { n: 5, f: 'Problems of industrial growth', b: 'Pollution, poor working conditions, loss of farmland and profits sent abroad.' },
      { n: 6, f: 'Why have many industries moved away from high-income countries?', b: 'Higher labour costs, and lower costs of production overseas. Many jobs shift from manufacturing to services.' },
    ]),
    ...sub(T3, 'tourism-0460', '3.4', [
      { n: 1, f: 'Reasons for the growth of tourism', b: 'More leisure time, higher incomes, cheaper and faster transport, and more advertising and online booking.' },
      { n: 2, f: 'Physical vs human attraction', b: 'A beach is physical; a beach hotel is human.', src: TOUR },
      { n: 3, f: 'Multiplier effect', b: 'Money from tourists circulates locally, creating jobs and income beyond the tourist industry itself.', src: TOUR },
      { n: 4, f: 'Leakage (tourism)', b: 'Money paid by tourists that leaves the local economy, for example profits sent to foreign-owned companies.', src: TOUR },
      { n: 5, f: 'Mass tourism vs ecotourism', b: 'Mass tourism is large-scale, with a bigger impact. Ecotourism is small-scale and aims to protect the environment and local people.', src: TOUR },
      { n: 6, f: 'Negative impacts of tourism', b: 'Pollution, erosion, loss of habitats, overcrowding, rising prices and loss of local culture.' },
    ]),
    ...sub(T3, 'energy-0460', '3.5', [
      { n: 1, f: 'Non-renewable energy sources', b: 'Coal, oil and natural gas (fossil fuels) and nuclear fuel. They will run out and fossil fuels release carbon dioxide.' },
      { n: 2, f: 'Renewable energy sources', b: 'Solar, wind, hydroelectric, geothermal, tidal and biomass. They are replaced naturally and do not run out.' },
      { n: 3, f: 'Advantages of hydroelectric power', b: 'Renewable, produces no greenhouse gases in generation, and the dam can supply water and control floods.' },
      { n: 4, f: 'Disadvantages of hydroelectric power', b: 'High building costs, flooding of land and homes, loss of habitats and altered river flow.' },
      { n: 5, f: 'Advantages and disadvantages of nuclear power', b: 'Advantages: large output and low carbon emissions. Disadvantages: high cost, risk of accidents and radioactive waste that is difficult to store.' },
      { n: 6, f: 'Why is energy use higher in high-income countries?', b: 'More industry, transport, heating and appliances. Energy use per person rises with development.' },
    ]),
    ...sub(T3, 'water-0460', '3.6', [
      { n: 1, f: 'Ways of obtaining water supply', b: 'Dams and reservoirs, wells and boreholes (groundwater), rivers, desalination and rainwater harvesting.' },
      { n: 2, f: 'Desalination', b: 'Removing salt from sea water to make fresh water. It is expensive and uses a lot of energy.' },
      { n: 3, f: 'Water scarcity: physical vs economic', b: 'Physical scarcity: not enough water exists. Economic scarcity: water exists but people cannot afford or access it because of a lack of infrastructure.' },
      { n: 4, f: 'Causes of water shortage', b: 'Low rainfall and drought, growing population, pollution of supplies and over-use for farming and industry.' },
      { n: 5, f: 'Impacts of water shortage', b: 'Disease from unsafe water, crop failure, conflict over supplies and time spent collecting water.' },
      { n: 6, f: 'Ways to manage water supply', b: 'Reduce leaks, recycle water, irrigate efficiently, build reservoirs and educate people about conservation.' },
    ]),
    ...sub(T3, 'environmental-risks-economic-development-0460', '3.7', [
      { n: 1, f: 'Global warming', b: 'The rise in average temperatures of the Earth, linked to more greenhouse gases from human activity.' },
      { n: 2, f: 'Enhanced greenhouse effect', b: 'More carbon dioxide and methane from burning fossil fuels, farming and deforestation trap extra heat in the atmosphere.' },
      { n: 3, f: 'Possible impacts of climate change', b: 'Sea level rise, more extreme weather, melting ice, changes to farming and loss of habitats.' },
      { n: 4, f: 'Environmental risks of resource extraction', b: 'Habitat loss, soil and water pollution, air pollution and waste.' },
      { n: 5, f: 'Ways to reduce environmental risk', b: 'Use renewable energy, recycle, control pollution through laws, replant trees and international agreements.' },
      { n: 6, f: 'Sustainable development', b: 'Development that meets present needs without harming the ability of future generations to meet their own needs.' },
    ]),
  ],
};
