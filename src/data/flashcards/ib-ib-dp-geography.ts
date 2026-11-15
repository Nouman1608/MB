/**
 * D-444 -- flashcards for IB Diploma Programme Geography (first assessments 2019).
 *
 * One block per subtopic, in syllabus order (Part one options A-G, Part two
 * units 1-6, then fieldwork). Card ids are `<subtopic number>-<n>` (or
 * `<topic number>-<n>` for the fieldwork topic) and are permanent: add a new
 * card with the next unused n, never renumber.
 *
 * Not tiered, and the syllabus record carries no SL/HL marks on subtopics, so
 * no card is marked. Written from Marlbridge's own IB DP Geography pages only;
 * numbers in worked examples are the pages' own illustrative figures.
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

const s = (n: string) => `ib-dp-geography-${n}`;

const FW = 'ib-dp-geography-freshwater';
const OC = 'ib-dp-geography-oceans-coastal-margins';
const EX = 'ib-dp-geography-extreme-environments';
const GH = 'ib-dp-geography-geophysical-hazards';
const LT = 'ib-dp-geography-leisure-tourism-sport';
const FH = 'ib-dp-geography-food-health';
const UE = 'ib-dp-geography-urban-environments';
const CP = 'ib-dp-geography-changing-population';
const GC = 'ib-dp-geography-global-climate';
const RC = 'ib-dp-geography-global-resource-consumption';
const PP = 'ib-dp-geography-power-places-networks';
const HD = 'ib-dp-geography-human-development-diversity';
const GR = 'ib-dp-geography-global-risks-resilience';
const FWK = 'ib-dp-geography-fieldwork';

export const DECK_IB_IB_DP_GEOGRAPHY: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'geography',
  syllabusCode: 'DP Geography',
  syllabusSeries: 'First assessments 2019',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  deckReview: { reviewerSlug: 'azam-siddique', reviewedOn: '2026-11-15' },
  cards: [
    // Option A: Freshwater
    ...sub(FW, s('1-1'), '1.1', [
      { n: 1, f: 'Drainage basin as an open system: inputs, stores, flows, outputs', b: 'Input: precipitation. Stores: interception, surface, soil moisture, groundwater, channel. Flows: infiltration, throughflow, percolation, overland flow, baseflow, stemflow. Outputs: evaporation, transpiration, discharge.' },
      { n: 2, f: 'Water balance equation', b: 'P = Q + E ± change in storage (precipitation = runoff + evapotranspiration ± storage). Storage change is near zero over a long period in a stable basin.' },
      { n: 3, f: 'Worked water balance: P = 920 mm, Q = 410 mm, E = 480 mm', b: 'Change in storage = 920 − 410 − 480 = 30 mm (a store increase). Runoff ratio = Q ÷ P = 410 ÷ 920 = 0.446, about 44.6%.' },
      { n: 4, f: 'Lag time on a storm hydrograph', b: 'The delay between peak rainfall and peak discharge. Example: rainfall peak 06:00, discharge peak 10:30 gives 4.5 hours. A short lag and steep rising limb mean a flashy response.' },
      { n: 5, f: 'Factors that make a drainage basin flashy', b: 'Steep slopes, impermeable rock, saturated or frozen soil, urban surfaces, high drainage density, circular shape and sparse vegetation.' },
      { n: 6, f: 'Hjulstrom curve', b: 'Shows how flow velocity relates to erosion, transport and deposition for different particle sizes. Fine silts and clays are hard to erode once settled because of cohesion; sands erode at the lowest velocities.' },
      { n: 7, f: 'Bradshaw model', b: 'Describes expected downstream changes: discharge, channel width, depth and velocity tend to increase.' },
    ]),
    ...sub(FW, s('1-2'), '1.2', [
      { n: 1, f: 'Physical and human causes of flooding', b: 'Physical: intense or prolonged rainfall, snowmelt, saturated ground, estuary storm surges. Human: deforestation, urbanisation, wetland drainage, poorly maintained defences, building on floodplains.' },
      { n: 2, f: 'Primary, secondary and long-term flood impacts', b: 'Primary: immediate damage, deaths and injuries. Secondary: disease, disrupted services, lost livelihoods. Long-term: insurance costs, mental health effects, migration.' },
      { n: 3, f: 'Hard engineering for floods', b: 'Dams, embankments and levees, channel straightening, flood walls and storage reservoirs. Effective against a design flood but costly, and can displace risk downstream.' },
      { n: 4, f: 'Soft engineering for floods', b: 'Afforestation, wetland and floodplain restoration, washlands, flood warnings, land-use zoning and natural flood management that slows water in the upper catchment.' },
      { n: 5, f: 'Adaptation and preparedness for floods', b: 'Flood-proofing buildings, community plans, insurance and evacuation routes. Many strategies combine all approaches in integrated catchment management.' },
    ]),
    ...sub(FW, s('1-3'), '1.3', [
      { n: 1, f: 'Physical vs economic water scarcity', b: 'Physical: not enough water to meet demand. Economic: water exists but people lack the infrastructure or money to use it.' },
      { n: 2, f: 'Water stress, water footprint and virtual water', b: 'Water stress: pressure on available supply. Water footprint: water used to produce goods and services. Virtual water: water embedded in traded products.' },
      { n: 3, f: 'Causes of water scarcity', b: 'Climate variability, population growth, rising per-capita demand, irrigation, industrial use, leaking infrastructure and shared transboundary rivers where upstream use affects downstream users.' },
      { n: 4, f: 'Eutrophication: sequence', b: 'Nutrients cause algal blooms → blooms block light, die and decompose → bacteria use up dissolved oxygen → fish and other organisms die.' },
      { n: 5, f: 'Common water pollutants', b: 'Sewage, agricultural fertiliser and pesticides, industrial effluent, heavy metals, plastics and saline intrusion in coastal aquifers.' },
    ]),
    ...sub(FW, s('1-4'), '1.4', [
      { n: 1, f: 'Supply-side water management strategies', b: 'Dams and reservoirs, inter-basin transfers, desalination, rainwater harvesting and groundwater abstraction.' },
      { n: 2, f: 'Demand-side water management strategies', b: 'Metering, pricing, efficient irrigation, leak repair, and changing diets and crops.' },
      { n: 3, f: 'Integrated water resources management', b: 'Brings supply-side and demand-side approaches together with stakeholders: governments, farmers, industries, communities, NGOs and international bodies.' },
      { n: 4, f: 'Criteria for judging a water strategy as sustainable', b: 'Does it meet today\'s needs without compromising future supply? Does it share costs and benefits fairly? Example trade-off: a reservoir secures supply but displaces communities and alters downstream ecology.' },
    ]),

    // Option B: Oceans and coastal margins
    ...sub(OC, s('2-1'), '2.1', [
      { n: 1, f: 'What drives surface ocean currents and gyres?', b: 'Prevailing winds, deflected by the Earth\'s rotation (Coriolis effect), form large circular gyres. Warm currents carry heat poleward; cold currents move the other way.' },
      { n: 2, f: 'Thermohaline circulation', b: 'The global ocean conveyor, driven by density differences from temperature and salinity. Cold, salty water sinks in polar regions and flows at depth.' },
      { n: 3, f: 'Upwelling', b: 'Brings cold, nutrient-rich water to the surface, supporting productive fisheries.' },
      { n: 4, f: 'El Niño: what happens?', b: 'Trade winds weaken, warm water spreads east, upwelling off South America is reduced and rainfall patterns shift (drought in some regions, floods in others). La Niña is the opposite phase with stronger trade winds.' },
      { n: 5, f: 'Ocean effects of global warming', b: 'Oceans absorb carbon dioxide (acidification) and most of the extra heat, causing thermal expansion that adds to sea level rise. Warm sea surface fuels tropical cyclones.' },
    ]),
    ...sub(OC, s('2-2'), '2.2', [
      { n: 1, f: 'Constructive vs destructive waves', b: 'Constructive waves tend to build beaches; destructive waves remove sediment. Longshore drift moves sediment along the coast in the direction of prevailing wave approach.' },
      { n: 2, f: 'Sediment cell', b: 'A stretch of coast treated as a system of sediment inputs, transfers, stores and outputs. Interrupting flow (groyne, harbour wall) can starve beaches downdrift.' },
      { n: 3, f: 'Eustatic vs isostatic sea level change', b: 'Eustatic: change in the global volume of water. Isostatic: land rising or sinking. Present relative sea level rise reflects both.' },
      { n: 4, f: 'How do reefs, mangroves and salt marshes protect coasts?', b: 'They dissipate wave energy, support fisheries and store carbon. They are threatened by warming, acidification, pollution, development and destructive fishing; losing them raises vulnerability.' },
      { n: 5, f: 'Landforms of coastal erosion and deposition', b: 'Erosion: cliffs, wave-cut platforms, caves, arches, stacks. Deposition: beaches, spits, bars and tombolos.' },
    ]),
    ...sub(OC, s('2-3'), '2.3', [
      { n: 1, f: 'Hard vs soft coastal engineering', b: 'Hard: sea walls, rock armour, revetments, groynes, breakwaters (protect assets but costly, alter sediment, false security). Soft: beach nourishment, dune stabilisation, managed realignment.' },
      { n: 2, f: 'Four shoreline management plan policy options', b: 'Hold the line, advance the line, managed realignment and no active intervention.' },
      { n: 3, f: 'Managed realignment', b: 'Defences are deliberately breached or removed so the sea floods land behind them, creating natural buffers.' },
      { n: 4, f: 'Cost-benefit ratio for a coastal defence', b: 'Benefits ÷ costs. Example: 9.0 ÷ 2.4 = 3.75 (above 1, so benefits exceed costs). It struggles to value habitats, heritage or community ties.' },
      { n: 5, f: 'Cliff retreat rate calculation', b: 'Distance ÷ time. Example: 3.6 m over 8 years = 0.45 m per year. Retreat is episodic (mostly in storms), so a mean hides variation and extrapolating is risky.' },
    ]),
    ...sub(OC, s('2-4'), '2.4', [
      { n: 1, f: 'UNCLOS and marine protected areas', b: 'The UN Convention on the Law of the Sea sets rules including exclusive economic zones. Marine protected areas conserve habitats and give ecosystems space to recover.' },
      { n: 2, f: 'Pressures on the oceans', b: 'Overfishing, marine plastic, oil and chemical pollution, shipping, offshore energy, deep-sea mining and tourism.' },
      { n: 3, f: 'Criteria for evaluating ocean management approaches', b: 'Is it enforceable, fair to developing states and effective across borders? Fish quotas, certification, plastic agreements and ecosystem-based management each have strengths and weaknesses.' },
      { n: 4, f: 'Why is adaptive management favoured under climate change?', b: 'It can be revised as evidence and conditions change, as climate change will alter currents, ecosystems and sea level.' },
    ]),

    // Option C: Extreme environments
    ...sub(EX, s('3-1'), '3.1', [
      { n: 1, f: 'What makes an environment extreme?', b: 'Conditions at or beyond the usual limits for human settlement or ecosystem productivity (temperature, aridity, altitude, ice cover). It is relative to species and societies.' },
      { n: 2, f: 'Aridity index', b: 'Precipitation ÷ potential evapotranspiration. Lower values are drier. Example: 180 ÷ 1,500 = 0.12 (arid range); quote the classification used.' },
      { n: 3, f: 'Environmental lapse rate', b: 'About 6.5 °C of cooling per 1,000 m of height gained. Example: 14 °C at 500 m gives about −12 °C at 4,500 m. Aspect, cloud and airflow cause departures.' },
      { n: 4, f: 'Typical characteristics of extreme environments', b: 'Extreme temperatures or large diurnal ranges, low unreliable precipitation, sparse vegetation, thin immature or saline soils, low net primary productivity, and hazards such as drought, avalanches and flash floods.' },
    ]),
    ...sub(EX, s('3-2'), '3.2', [
      { n: 1, f: 'Freeze-thaw weathering in three steps', b: 'Water enters cracks; it freezes and expands; repeated cycles widen the cracks and break the rock, producing scree.' },
      { n: 2, f: 'Glacial erosion processes and landforms', b: 'Plucking and abrasion form corries (cirques), arêtes, pyramidal peaks, glacial troughs, hanging valleys and moraines.' },
      { n: 3, f: 'Periglacial features and processes', b: 'Permafrost, the active layer that thaws in summer, frost heave and solifluction; landforms include patterned ground and pingos.' },
      { n: 4, f: 'Arid environment processes', b: 'Wind transports by saltation, suspension and surface creep, and erodes by deflation and abrasion. Rare heavy rain causes flash floods in wadis and forms alluvial fans and playas.' },
      { n: 5, f: 'Why are many desert landscapes described as inherited?', b: 'They were shaped partly under wetter climates in the past, so landforms need explanation by both present and past processes.' },
    ]),
    ...sub(EX, s('3-3'), '3.3', [
      { n: 1, f: 'Traditional strategies for living in extreme environments', b: 'Nomadic pastoralism, seasonal movement and climate-suited building designs, using traditional knowledge.' },
      { n: 2, f: 'Pressures on extreme environments', b: 'Resource extraction, tourism, irrigation agriculture, infrastructure and research stations.' },
      { n: 3, f: 'Management strategies for extreme environments', b: 'Protected areas, visitor management, water-efficient farming, drought-resistant crops, engineering for frozen ground (raised structures) and international agreements.' },
      { n: 4, f: 'Why is permafrost thaw a management problem?', b: 'It destabilises ground, damaging buildings and pipelines, and may release stored carbon.' },
    ]),
    ...sub(EX, s('3-4'), '3.4', [
      { n: 1, f: 'Climate change effects in cold extreme environments', b: 'Glacier retreat, permafrost thaw, changing river regimes and new access for shipping and resource use.' },
      { n: 2, f: 'Permafrost carbon feedback', b: 'Thawing permafrost releases stored carbon, which strengthens warming (a positive feedback).' },
      { n: 3, f: 'Climate change in arid areas', b: 'Changing rainfall and rising temperatures may intensify drought, though the pattern differs from place to place. Population growth into marginal lands adds pressure.' },
      { n: 4, f: 'Scenarios for extreme environments', b: 'A managed, adaptive future with cooperation and careful planning vs business-as-usual with degradation. Judge which communities are most vulnerable and what makes them resilient.' },
    ]),

    // Option D: Geophysical hazards
    ...sub(GH, s('4-1'), '4.1', [
      { n: 1, f: 'Drivers of plate movement', b: 'Mantle convection, slab pull and ridge push.' },
      { n: 2, f: 'Three boundary types and their hazards', b: 'Divergent: shallow earthquakes, basaltic volcanism. Convergent: subduction gives trenches, powerful earthquakes, explosive volcanoes; collision builds fold mountains. Transform: strong shallow earthquakes, no crust destroyed.' },
      { n: 3, f: 'Hotspots', b: 'Volcanoes away from plate boundaries where mantle plumes rise beneath moving plates.' },
      { n: 4, f: 'Focus vs epicentre', b: 'Focus: point of rupture underground. Epicentre: the point on the surface directly above it.' },
      { n: 5, f: 'Moment magnitude scale vs Modified Mercalli scale', b: 'Moment magnitude is logarithmic and measures the event. Modified Mercalli describes intensity from observed effects at a place.' },
      { n: 6, f: 'Volcanic hazards and tsunami cause', b: 'Lava flows, pyroclastic flows, ash fall, gas emissions and lahars. Tsunamis form when sudden sea floor displacement moves a large volume of water.' },
    ]),
    ...sub(GH, s('4-2'), '4.2', [
      { n: 1, f: 'Risk equation (conceptual)', b: 'Risk = (hazard × vulnerability) ÷ capacity to cope. Risk is the probability that a hazard causes harm and depends on exposure.' },
      { n: 2, f: 'Hazard profile characteristics', b: 'Magnitude, frequency, duration, speed of onset, spatial extent and predictability. Frequency and magnitude are typically inversely related.' },
      { n: 3, f: 'Prediction vs forecasting of earthquakes and eruptions', b: 'Volcanoes show precursors (seismic swarms, ground deformation, gas changes) allowing warnings. Precise earthquake prediction is not possible; efforts focus on long-term probability forecasts, early warning and building design.' },
      { n: 4, f: 'Magnitude 7.1 vs 5.1: how much stronger?', b: 'Two units: amplitude ×10 × 10 = 100 times; energy about 32 × 32, roughly 1,000 times. Magnitude is never a linear scale.' },
      { n: 5, f: 'Why do people live near geophysical hazards?', b: 'Fertile volcanic soils, trade routes, geothermal energy, or simply lack of choice.' },
    ]),
    ...sub(GH, s('4-3'), '4.3', [
      { n: 1, f: 'Vulnerability factors', b: 'Poverty, urban density, building quality, governance, education, health, inequality, age, disability and access to information.' },
      { n: 2, f: 'Pressure and release model', b: 'Disaster results when root causes, dynamic pressures and unsafe conditions combine with a hazard. Resilience is the capacity to absorb shocks, adapt and recover.' },
      { n: 3, f: 'Loss of life vs economic loss: richer and poorer places', b: 'Loss of life tends to be larger in poorer places; economic losses tend to be larger in wealthy places because of high-value assets.' },
      { n: 4, f: 'Disaster management cycle', b: 'Mitigation, preparedness, response and recovery, involving governments, communities, international agencies and NGOs.' },
      { n: 5, f: 'Risk comparison: hazard 6, vulnerability 8, capacity 4 vs hazard 6, vulnerability 3, capacity 9', b: 'City A: 48 ÷ 4 = 12. City B: 18 ÷ 9 = 2. Same hazard, six times the risk. Illustrative scores only.' },
    ]),
    ...sub(GH, s('4-4'), '4.4', [
      { n: 1, f: 'Structural measures for reducing geophysical risk', b: 'Earthquake-resistant design, retrofitting, tsunami barriers, lava diversion and evacuation shelters.' },
      { n: 2, f: 'Non-structural measures for reducing geophysical risk', b: 'Land-use planning, building codes, hazard education, drills, insurance and early warning systems.' },
      { n: 3, f: 'Community-based approaches to resilience', b: 'Draw on local knowledge and build social networks.' },
      { n: 4, f: 'Criteria for evaluating adaptation strategies', b: 'Cost, feasibility, equity, speed and sustainability. Adaptation is a continual process, not a single event.' },
    ]),

    // Option E: Leisure, tourism and sport
    ...sub(LT, s('5-1'), '5.1', [
      { n: 1, f: 'Leisure vs recreation', b: 'Leisure is time free from work and obligations. Recreation is what people do with it.' },
      { n: 2, f: 'Influences on changing leisure patterns', b: 'Time and income, mobility, technology, demographics, and culture and values.' },
      { n: 3, f: 'Why is leisure participation unequal?', b: 'Low income, disability, caring responsibilities or little access to green space reduce opportunities. Look for patterns by age, gender, income and location.' },
      { n: 4, f: 'Commercialisation of leisure', b: 'Growth of theme parks, shopping as leisure, fitness industries and sporting events.' },
    ]),
    ...sub(LT, s('5-2'), '5.2', [
      { n: 1, f: 'Butler\'s tourism area life cycle stages', b: 'Exploration, involvement, development, consolidation, stagnation, then decline or rejuvenation. It is a model: not every destination follows it, and management can alter the path.' },
      { n: 2, f: 'Doxey\'s irritation index', b: 'Host attitudes change from euphoria through apathy and annoyance to antagonism as visitor numbers rise.' },
      { n: 3, f: 'Economic impacts of tourism', b: 'Employment, income, multiplier effects, foreign exchange; but seasonal work, low wages, leakage of profits and price inflation.' },
      { n: 4, f: 'Social and environmental impacts of tourism', b: 'Social: cultural exchange and preserved traditions vs commodification, crowding, displacement. Environmental: conservation funding vs habitat pressure, water, waste, erosion and emissions.' },
      { n: 5, f: 'Sport legacy', b: 'Large events can bring investment and infrastructure but leave costly, underused facilities. Evaluate who benefits and for how long.' },
    ]),
    ...sub(LT, s('5-3'), '5.3', [
      { n: 1, f: 'Drivers of global tourism growth', b: 'Falling real transport costs, rising incomes, visa liberalisation, digital platforms and low-cost airlines. Growth is interrupted by shocks such as health crises and conflict.' },
      { n: 2, f: 'Push and pull factors in tourism', b: 'Push (origin): stress, income, climate, leisure time. Pull (destination): climate, attractions, safety, price, accessibility.' },
      { n: 3, f: 'Tourism leakage: worked example', b: '40,000 visitors × 650 = 26,000,000 spent. At 55% leakage, 45% is retained: 11,700,000. Cutting leakage to 35% retains 16,900,000, an increase of 5,200,000.' },
      { n: 4, f: 'Percentage change in arrivals: 1.2 million to 1.5 million', b: '(1.5 − 1.2) ÷ 1.2 × 100 = 25%. If capacity is fixed, this may approach carrying capacity.' },
      { n: 5, f: 'Criticisms of mega-events', b: 'Cost overruns, displacement of residents and uneven benefits, set against visibility and development gains.' },
    ]),
    ...sub(LT, s('5-4'), '5.4', [
      { n: 1, f: 'Sustainable tourism', b: 'Balances economic, social and environmental goals so present needs are met without compromising future generations.' },
      { n: 2, f: 'Approaches to managing tourism', b: 'Ecotourism and community-based tourism, visitor management (zoning, quotas, pricing, timed entry), planning controls, carrying capacity assessments and certification schemes.' },
      { n: 3, f: 'Sustainable approaches in sport', b: 'Sustainable event design, reuse of existing venues and planned legacy.' },
      { n: 4, f: 'Criteria for evaluating tourism management', b: 'Who benefits, long-term viability and enforcement. Stakeholders disagree: businesses may want growth while residents want less crowding.' },
    ]),

    // Option F: Food and health
    ...sub(FH, s('6-1'), '6.1', [
      { n: 1, f: 'Food security: definition and dimensions', b: 'All people at all times have physical and economic access to enough safe, nutritious food for an active, healthy life. Dimensions: availability, access, utilisation, stability.' },
      { n: 2, f: 'Stunting, wasting and BMI', b: 'Stunting: low height for age. Wasting: low weight for height. BMI = weight (kg) ÷ height (m)². Example: 52 ÷ 2.56 = 20.3.' },
      { n: 3, f: 'Disability-adjusted life years (DALYs)', b: 'Years of life lost to early death plus years lived with disability. Example: 1,000 × 20 = 20,000 YLL; 5,000 × 0.2 × 3 = 3,000 YLD; total 23,000.' },
      { n: 4, f: 'Nutrition transition', b: 'Diets shift towards processed foods, fats and sugar as incomes and urbanisation rise, increasing obesity and diet-related disease alongside continuing undernutrition in some places.' },
      { n: 5, f: 'Limitation of national averages in food and health data', b: 'They hide inequality between regions, income groups and genders. Data quality and definitions also vary.' },
    ]),
    ...sub(FH, s('6-2'), '6.2', [
      { n: 1, f: 'Components of a food system', b: 'Production, processing, distribution, retailing, consumption and waste, with surrounding inputs, institutions and environment.' },
      { n: 2, f: 'Three types of disease diffusion', b: 'Contagious (person to person), hierarchical (through settlement networks, large cities to small towns) and relocation (infected people moving to new places).' },
      { n: 3, f: 'Communicable vs non-communicable disease', b: 'Communicable diseases are infectious. Non-communicable ones, such as type 2 diabetes and heart disease, are diet-related and growing in many countries.' },
      { n: 4, f: 'Links between food and disease', b: 'Poor nutrition weakens immunity; livestock and wildlife contact produces zoonotic disease; food contamination causes illness; intensive farming raises antimicrobial resistance concerns.' },
    ]),
    ...sub(FH, s('6-3'), '6.3', [
      { n: 1, f: 'Stakeholders in food and health', b: 'Governments, international organisations, NGOs and charities, transnational corporations, farmers and communities, and consumers.' },
      { n: 2, f: 'Strategies to improve food and health', b: 'Agricultural innovation (Green Revolution style), GM crops, better storage and transport, nutrition programmes, vaccination, primary health care, clean water and sanitation.' },
      { n: 3, f: 'Trade-offs of food and health strategies', b: 'High-input agriculture raises yields but can pollute and cost small farmers; aid can save lives but risks dependency if not linked to local capacity.' },
    ]),
    ...sub(FH, s('6-4'), '6.4', [
      { n: 1, f: 'Future pressures on food and health', b: 'Population growth, rising demand for animal products, climate effects on yields and water, soil degradation, biofuel competition for land, conflict and price volatility.' },
      { n: 2, f: 'Sustainable options for food security', b: 'Sustainable intensification, agroecology, reducing food waste, changing diets, protecting soils and water, crop resilience and stronger local and regional food systems.' },
      { n: 3, f: 'Future health challenges', b: 'Emerging and re-emerging disease, antimicrobial resistance, ageing and the burden of non-communicable disease.' },
    ]),

    // Option G: Urban environments
    ...sub(UE, s('7-1'), '7.1', [
      { n: 1, f: 'Urbanisation vs urban growth; megacity', b: 'Urbanisation: growth in the share of population in towns and cities. Urban growth: increase in the urban population. Megacity: commonly over 10 million people.' },
      { n: 2, f: 'Three classic models of urban structure', b: 'Burgess concentric zones, Hoyt\'s sector model and Harris and Ullman\'s multiple nuclei model. Each has failings; real cities reflect history, topography, planning and inequality.' },
      { n: 3, f: 'Rank-size rule', b: 'The nth city has 1/n the population of the largest. Largest 8 million: second 4 million, third 2.67 million, fourth 2 million. A much smaller second city indicates a primate pattern.' },
      { n: 4, f: 'Informal settlements', b: 'Common in rapidly growing cities in lower-income countries, where housing may lack secure tenure and services.' },
    ]),
    ...sub(UE, s('7-2'), '7.2', [
      { n: 1, f: 'Processes of change in urban systems', b: 'Rural-urban migration and natural increase; deindustrialisation, regeneration and gentrification; suburbanisation, counter-urbanisation and sprawl; globalisation and networks; digital technology and smart cities.' },
      { n: 2, f: 'Cities as systems', b: 'Inputs: people, energy, food, water, capital. Outputs: waste, goods, emissions.' },
      { n: 3, f: 'Urban growth projection: 2.4 million at 3.5% a year', b: 'After 10 years: 2.4 × 1.035¹⁰ ≈ 2.4 × 1.4106 = 3.385 million. Rule of 70: doubling time = 70 ÷ 3.5 = 20 years.' },
      { n: 4, f: 'Contrasting urban change: lower-income vs post-industrial city', b: 'A lower-income city may absorb migrants faster than services expand. A post-industrial city may face population loss and the need to reinvent its economy.' },
    ]),
    ...sub(UE, s('7-3'), '7.3', [
      { n: 1, f: 'Urban heat island', b: 'Built-up areas are warmer than surroundings because of heat-absorbing materials, reduced vegetation and waste heat.' },
      { n: 2, f: 'Environmental stresses in cities', b: 'Air pollution, waste, water supply and wastewater, loss of green space, and flooding where impermeable surfaces overload drainage.' },
      { n: 3, f: 'Social stresses in cities', b: 'Inadequate or unaffordable housing, inequality and segregation, unemployment, crime, pollution and overcrowding health problems, and uneven access to transport, education and health care.' },
      { n: 4, f: 'How to evaluate an urban stress response', b: 'Ask who benefits, how long it lasts, and whether it addresses root causes or only symptoms. Examples: public transport, low emission zones, upgrading informal settlements, green infrastructure.' },
    ]),
    ...sub(UE, s('7-4'), '7.4', [
      { n: 1, f: 'Features of a sustainable city', b: 'Compact mixed-use development, efficient public transport, renewable energy, resource efficiency, circular waste approaches, green and blue infrastructure, inclusive governance and resilience.' },
      { n: 2, f: 'Why does participation matter in urban planning?', b: 'Top-down plans that ignore residents often fail. Stakeholders include governments, planners, developers, businesses, community groups and residents.' },
      { n: 3, f: 'Urban resilience', b: 'How a city copes with shocks such as extreme heat, floods or economic change.' },
    ]),

    // Unit 1: Changing population (core)
    ...sub(CP, s('8-1'), '8.1', [
      { n: 1, f: 'Physical factors in population distribution', b: 'Climate, relief, soil fertility, availability of fresh water and resource access.' },
      { n: 2, f: 'Human factors in population distribution', b: 'Economic opportunity, historical settlement patterns, political stability and infrastructure.' },
      { n: 3, f: 'Population density vs population distribution', b: 'Density: people per unit area (usually per km²). Distribution: the pattern of where people are located.' },
      { n: 4, f: 'Carrying capacity', b: 'The maximum population size an environment can sustainably support given its resources.' },
      { n: 5, f: 'Demographic transition model', b: 'Describes how birth and death rates change as a country develops, moving from high birth and death rates to low ones, with a different effect on growth rate at each stage.' },
    ]),
    ...sub(CP, s('8-2'), '8.2', [
      { n: 1, f: 'Two components of population change', b: 'Natural change (births minus deaths) and net migration (immigration minus emigration). State them separately.' },
      { n: 2, f: 'Reading a population pyramid: base and top', b: 'Wide base: high birth rate. Sharply narrowing top: high death rate, low life expectancy. Relatively wide top: ageing population with high life expectancy.' },
      { n: 3, f: 'What does an unusually narrow or wide band on a pyramid indicate?', b: 'A historical event affecting that cohort, such as war, a baby boom or mass migration.' },
      { n: 4, f: 'Pyramid with narrow base, wide middle and wide top', b: 'Low and likely falling birth rate and a relatively large elderly population: an ageing population.' },
    ]),
    ...sub(CP, s('8-3'), '8.3', [
      { n: 1, f: 'What case-study bank does this theme need?', b: 'A densely populated area and its factors, a sparsely populated area and its factors, and an example of significant population change (migration or natural change) with named dates and figures.' },
      { n: 2, f: 'How does population distribution affect other core themes?', b: 'It shapes vulnerability to climate impacts (dense coastal populations and sea-level rise) and resource consumption (size and distribution drive demand).' },
      { n: 3, f: 'Paper 2 data-response skill for population questions', b: 'Move between quantitative reading (a figure or trend from a pyramid, map or graph) and qualitative explanation using named factors, since unseen data is usual.' },
    ]),

    // Unit 2: Global climate
    ...sub(GC, s('9-1'), '9.1', [
      { n: 1, f: 'Natural greenhouse effect and energy balance', b: 'Incoming shortwave radiation is balanced by outgoing longwave radiation. Greenhouse gases absorb and re-emit some outgoing longwave, warming the lower atmosphere; human emissions enhance this.' },
      { n: 2, f: 'Volcanic eruptions and the energy balance', b: 'Volcanic aerosols reflect sunlight (global dimming), causing temporary cooling.' },
      { n: 3, f: 'Ice-albedo feedback', b: 'Melting ice lowers terrestrial albedo, so more sunlight is absorbed and warming increases: a positive feedback loop.' },
      { n: 4, f: 'Factors changing the global energy balance', b: 'Solar radiation variations (including global dimming from volcanic eruptions) and terrestrial albedo changes, with feedback loops.' },
    ]),
    ...sub(GC, s('9-2'), '9.2', [
      { n: 1, f: 'Commonly studied consequences of climate change', b: 'Sea-level rise, changing rainfall patterns, more frequent or intense extreme weather, and impacts on ecosystems, farming, water supply and health.' },
      { n: 2, f: 'Vulnerability: exposure, sensitivity and adaptive capacity', b: 'Marlbridge\'s analytical framework (not IB terms): hazard exposure, how sensitive people and places are, and their capacity to respond. Identical hazards give different outcomes.' },
      { n: 3, f: 'Resilience', b: 'The capacity of a place or community to absorb, recover from and adapt to climate-related disturbance.' },
      { n: 4, f: 'Why might two places facing the same flood hazard have different outcomes?', b: 'Differences in housing quality and building codes, drainage, economic resources and institutions mean vulnerability depends on exposure, sensitivity and adaptive capacity, not hazard size alone.' },
    ]),
    ...sub(GC, s('9-3'), '9.3', [
      { n: 1, f: 'Adaptation vs mitigation', b: 'Adaptation: deliberate change in response to actual or expected impacts (flood defences, drought-resistant crops). Mitigation: reducing the causes of climate change. Do not use them interchangeably.' },
      { n: 2, f: 'Government-led responses to climate change', b: 'Global geopolitical efforts, carbon emissions offsetting and trading, and technology including geo-engineering.' },
      { n: 3, f: 'Factors in disparities of climate risk and vulnerability', b: 'Location, wealth, social differences such as age, gender and education, and risk perception.' },
      { n: 4, f: 'Civil society and corporate responses', b: 'The guide asks for a case study of one country\'s response focusing on actions of non-governmental stakeholders.' },
    ]),

    // Unit 3: Global resource consumption and security
    ...sub(RC, s('10-1'), '10.1', [
      { n: 1, f: 'Resource distinctions to know', b: 'Renewable vs non-renewable, stock vs flow, and natural vs human-made capital. The three focus resources are food, water and energy.' },
      { n: 2, f: 'Trends in global consumption', b: 'Total consumption has risen with population and incomes; per-capita use is very unequal; diets shift to animal products; fossil fuels still dominate energy though renewables are growing; agriculture dominates water use.' },
      { n: 3, f: 'Ecological footprint vs biocapacity', b: 'Footprint: the productive land and water needed to supply consumption and absorb waste. Biocapacity: area available. Footprint above biocapacity is an ecological deficit.' },
      { n: 4, f: 'Ecological deficit worked example', b: 'Population 5 million, footprint 3.2 gha, biocapacity 1.8 gha each. Footprint 16 million, biocapacity 9 million, deficit 7 million gha, ratio 16 ÷ 9 = 1.78.' },
      { n: 5, f: 'How should you describe a trend from a graph?', b: 'State the overall direction, quote start and end values with units, identify rates of change, note anomalies and compare regions; then explain with reasons.' },
    ]),
    ...sub(RC, s('10-2'), '10.2', [
      { n: 1, f: 'Pressures from rising consumption', b: 'Environmental: land use change, deforestation, soil degradation, aquifer depletion, pollution, biodiversity loss, emissions. Economic: price volatility, import dependence, stranded assets. Social and political: unequal access, energy poverty, conflict.' },
      { n: 2, f: 'Resource security', b: 'Reliable access to adequate, affordable and safe supplies. Profiles differ: resource-rich exporters, import-dependent countries and countries facing shortages.' },
      { n: 3, f: 'Causes of supply disruption', b: 'Concentrated production, transport chokepoints, political instability and extreme weather.' },
      { n: 4, f: 'Reserves-to-production (R/P) ratio', b: 'Reserves ÷ annual production. Example: 360 ÷ 12 = 30 years; with 60 more of reserves 420 ÷ 12 = 35; at production 14, 360 ÷ 14 = 25.7. A snapshot, not a forecast.' },
    ]),
    ...sub(RC, s('10-3'), '10.3', [
      { n: 1, f: 'Resource stewardship', b: 'Responsible management of resources so they are available for the future, at scales from individual to global, involving governments, businesses, NGOs, communities and consumers.' },
      { n: 2, f: 'Circular economy vs linear model', b: 'Circular economy designs out waste by reusing, repairing, remanufacturing and recycling. Linear model: take-make-dispose.' },
      { n: 3, f: 'Stewardship approaches', b: 'Efficiency and conservation, substitution and technology, certification and labelling, regulation, pricing and incentives, and international and local agreements.' },
      { n: 4, f: 'Rebound effect', b: 'Efficiency gains reduce cost and lead to more consumption, offsetting savings.' },
      { n: 5, f: 'Criteria for evaluating stewardship', b: 'Is it effective, affordable, fair and enforceable? Lower-income countries argue their right to develop, while higher-income countries are responsible for most past consumption.' },
    ]),

    // Unit 4: Power, places and networks
    ...sub(PP, s('11-1'), '11.1', [
      { n: 1, f: 'Hard power vs soft power', b: 'Hard power uses coercion or payment (military force, sanctions). Soft power (Joseph Nye) is influence through attraction: culture, values, education, aid, diplomacy.' },
      { n: 2, f: 'Who holds power in global interactions?', b: 'States and non-state actors: TNCs, international organisations, NGOs and influential individuals. Power is plural and contested.' },
      { n: 3, f: 'Core and periphery', b: 'A core of wealthy, well-connected places and a periphery that supplies resources or labour and has less influence.' },
      { n: 4, f: 'Mackinder\'s heartland idea (1904)', b: 'An early geopolitical theory linking physical geography to power. Worth knowing as a historical example, but criticise it as dated.' },
      { n: 5, f: 'Effect of interdependence on conflict', b: 'Heavy trade and investment can bind states together and restrain conflict, but also transmits shocks.' },
    ]),
    ...sub(PP, s('11-2'), '11.2', [
      { n: 1, f: 'Network vs flow', b: 'A network is nodes (places) linked by connections. A flow is the movement along those links of goods, capital, people, ideas, data or services.' },
      { n: 2, f: 'Types of global flow', b: 'Trade, foreign direct investment, remittances, migration, tourism, information and communication, and culture.' },
      { n: 3, f: 'Time-space compression', b: 'David Harvey\'s phrase for how transport and communication technology shrink the effective distance between places.' },
      { n: 4, f: 'Nodes, hubs and gatekeepers', b: 'Global cities, ports and airports concentrate flows and influence. Gatekeepers (governments, institutions, corporations) decide who can access a network.' },
      { n: 5, f: 'Global production network', b: 'TNCs place design, assembly and sales in different countries according to costs and markets.' },
    ]),
    ...sub(PP, s('11-3'), '11.3', [
      { n: 1, f: 'Human influences on global connection', b: 'Government policy and trade agreements, political stability, infrastructure investment, transport cost, language and cultural ties, colonial history and skilled labour.' },
      { n: 2, f: 'Physical influences on global connection', b: 'Coasts and navigable rivers, mountain and desert barriers, climate, natural harbours and resource endowment. Technology and policy can overcome many barriers.' },
      { n: 3, f: 'Gravity model', b: 'Interaction ∝ (P₁ × P₂) ÷ d². Example: A (4.2) and B (1.5) at d = 3 gives 6.3 ÷ 9 = 0.70; A and C (0.9) at d = 2 gives 3.78 ÷ 4 = 0.945.' },
      { n: 4, f: 'Effect of doubling distance in the gravity model', b: 'Distance is squared, so interaction falls to a quarter: 6.3 ÷ 36 = 0.175 against 0.70.' },
      { n: 5, f: 'Limits of the gravity model', b: 'Ignores political borders, language, transport quality and trade agreements.' },
    ]),

    // Unit 5: Human development and diversity
    ...sub(HD, s('12-1'), '12.1', [
      { n: 1, f: 'Human Development Index dimensions', b: 'A long and healthy life (life expectancy), knowledge (years of schooling) and a decent standard of living (income). Dimension scores are combined with a geometric mean.' },
      { n: 2, f: 'Limits of GNI per capita and HDI', b: 'GNI per capita ignores distribution and non-monetary well-being. HDI hides inequality, environmental cost and gender gaps unless adjusted.' },
      { n: 3, f: 'Gini coefficient', b: 'Shows how evenly income is shared within a country. A country can rise on average income while inequality widens.' },
      { n: 4, f: 'Routes to development and their costs', b: 'Trade, FDI, aid, remittances, education, technology transfer, governance. FDI brings jobs but profit outflows; remittances may signal skilled emigration; aid may create dependence.' },
    ]),
    ...sub(HD, s('12-2'), '12.2', [
      { n: 1, f: 'Culture vs identity', b: 'Culture: language, religion, food, dress, values and practices. Identity: how individuals and groups see themselves and are seen by others.' },
      { n: 2, f: 'Cultural diffusion and homogenisation', b: 'Diffusion: spread of cultural traits through migration, trade, media and networks. Homogenisation: cultures converge on a shared, often Western or commercial pattern.' },
      { n: 3, f: 'Glocalisation and hybridisation', b: 'Blending of global and local features, such as global brands adapting products to local tastes (glocalisation: Roland Robertson).' },
      { n: 4, f: 'Cultural resistance and revival', b: 'Communities defend or reinvigorate traditions, language or heritage because they feel threatened.' },
      { n: 5, f: 'Multiple identities', b: 'People often hold overlapping local, national, ethnic and global identities, which migration and digital life can intensify.' },
    ]),
    ...sub(HD, s('12-3'), '12.3', [
      { n: 1, f: 'Types of local response to global interactions', b: 'Acceptance and adaptation, resistance, protection of heritage, local entrepreneurship, and political and community action.' },
      { n: 2, f: 'Slow Food movement', b: 'Founded in Italy in the 1980s, a well-known movement defending local food culture.' },
      { n: 3, f: 'Heritage protection tools', b: 'Cultural quotas, language laws, protected designations for local products and heritage listing.' },
      { n: 4, f: 'Central evaluative question for local responses', b: 'Who benefits locally and who bears the costs? Consider scale, time (short-term gain, long-term loss) and different voices within a place.' },
    ]),

    // Unit 6: Global risks and resilience
    ...sub(GR, s('13-1'), '13.1', [
      { n: 1, f: 'Risk', b: 'The probability of a harmful event combined with its likely consequences.' },
      { n: 2, f: 'Geopolitical risks', b: 'Armed conflict, terrorism, border and resource tensions, state fragility, sanctions and weakening international cooperation.' },
      { n: 3, f: 'Economic risks', b: 'Financial crises, sovereign debt problems, volatile commodity prices, unemployment and trade disputes. The global financial crisis from 2007 to 2008 spread through connected financial systems.' },
      { n: 4, f: 'Interdependence as a transmission mechanism', b: 'Heavy reliance on a single supplier, market or route makes a system efficient but fragile.' },
    ]),
    ...sub(GR, s('13-2'), '13.2', [
      { n: 1, f: 'Environmental risks listed', b: 'Climate change, biodiversity loss and ecosystem decline, pollution and resource pressure, disease and pandemics, and natural hazards.' },
      { n: 2, f: 'Pressure and release model (Blaikie and colleagues)', b: 'Vulnerability results from root causes (poverty, political structures) that become dynamic pressures and unsafe conditions.' },
      { n: 3, f: 'Disaster risk factors', b: 'Disaster risk depends on hazard, exposure and vulnerability, reduced by capacity to cope. Environmental risks are often transboundary.' },
    ]),
    ...sub(GR, s('13-3'), '13.3', [
      { n: 1, f: 'Resilience, adaptation and mitigation', b: 'Resilience: capacity to anticipate, absorb, adapt to and recover from shocks. Adaptation: adjusting to expected change. Mitigation: reducing the cause of the risk.' },
      { n: 2, f: 'Local, national and global responses', b: 'Local: community warning, defences, diversified livelihoods. National: planning, regulation, social protection. Global: Paris Agreement and Sendai Framework (both 2015).' },
      { n: 3, f: 'Risk scoring heuristic: Region X vs Region Y', b: 'X: hazard 6, vulnerability 8, capacity 4 → 12. Y: 8, 4, 8 → 4. Raising X\'s capacity to 8 halves its risk to 6. A teaching heuristic, not an official formula.' },
      { n: 4, f: 'Why is resilience unevenly available?', b: 'Wealth, governance, information and social cohesion affect it. Top-down measures may be well funded but poorly matched; community-based ones fit well but lack resources.' },
    ]),

    // Fieldwork (internal assessment)
    ...topicOnly(FWK, '14', [
      { n: 1, f: 'What does the IB geography internal assessment involve?', b: 'A student-formulated research question with primary data, written up as one report of around 2,500 words. It is worth 25% of the grade at SL and 20% at HL.' },
      { n: 2, f: 'What is the fieldwork IA assessed on?', b: 'The quality of the research question, appropriate methodology and technique, accurate analysis, and a conclusion genuinely supported by the evidence, not decided beforehand.' },
      { n: 3, f: 'Hypothesis vs null hypothesis', b: 'A hypothesis predicts a relationship or difference. The null hypothesis states there is no relationship or difference, and is what a statistical test examines.' },
      { n: 4, f: 'Random, systematic and stratified sampling', b: 'Random avoids bias. Systematic takes points at regular intervals. Stratified represents each sub-group in proportion. Justify the method and give sample size and limits.' },
      { n: 5, f: 'Why pilot and risk-assess?', b: 'A pilot exposes problems in equipment, timing or definitions. A risk assessment covers hazards and precautions; also consider ethics such as consent and respect for property and wildlife.' },
      { n: 6, f: 'Choosing a statistical test', b: 'Spearman\'s rank: strength of association between two ranked variables. Chi-squared: observed vs expected frequencies. Mann-Whitney U: two independent samples.' },
      { n: 7, f: 'Spearman\'s rank formula', b: 'rs = 1 − 6Σd² ÷ n(n² − 1). Worked example: Σd² = 166, n = 8 gives 1 − 996 ÷ 504 = −0.976, a very strong negative correlation (critical value 0.738 at 5%, two-tailed).' },
      { n: 8, f: 'How to interpret statistical significance', b: 'It states the chance of seeing such data if the null hypothesis were true. It is not proof, and correlation does not prove cause.' },
      { n: 9, f: 'What should the evaluation of a fieldwork investigation cover?', b: 'Reliability and accuracy, effect of sample size, sampling bias and representativeness, validity, limits of time, access and equipment, and realistic improvements.' },
      { n: 10, f: 'Rules for every figure in a fieldwork report', b: 'A title, labelled axes with units, and a source, each referred to in the text. Include a graph or test only if it helps answer the question.' },
    ]),
  ],
};
