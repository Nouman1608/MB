/**
 * D-444 -- flashcards for OxfordAQA International AS and A-level Geography 9635 (Version 3.2).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The syllabus is not tiered, so there are no tier marks. Written from the
 * Marlbridge 9635 study guides and revision notes. Figures come only from those
 * pages. 3.2.2 Resource security has no Marlbridge page, so its cards are
 * conservative standard geography with no figures.
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

const U1 = 'unit-1-physical-geography-1-9635';
const U2 = 'unit-2-human-geography-1-9635';
const U3 = 'unit-3-physical-geography-2-9635';
const U4 = 'unit-4-human-geography-2-9635';
const U5 = 'unit-5-fieldwork-geographical-skills-9635';

export const DECK_OXFORDAQA_A_LEVEL_GEOGRAPHY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'geography',
  syllabusCode: '9635',
  syllabusSeries: 'Version 3.2',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  deckReview: { reviewerSlug: 'azam-siddique', reviewedOn: '2026-11-15' },
  cards: [
    // 1 Unit 1: Physical geography 1
    ...sub(U1, 'section-a-living-with-hazards-9635', '3.1.1', [
      { n: 1, f: 'Hazard vs disaster', b: 'A hazard is a natural event with the potential to cause damage. A disaster occurs when it overwhelms a community\'s ability to cope.' },
      { n: 2, f: 'The risk equation', b: 'Risk = hazard × vulnerability ÷ capacity to cope. Vulnerability: poverty, building quality, density, warning systems. Capacity to cope: governance, wealth, infrastructure, preparedness.' },
      { n: 3, f: 'Three ways people perceive hazard risk', b: 'Fatalistically (accept it), by adapting to it, or by seeking to dominate it through engineering. The view held shapes what management is politically possible.' },
      { n: 4, f: 'Park model (disaster response curve)', b: 'Traces quality of life after a disaster through relief, rehabilitation and reconstruction. Comparing curves for different countries (depth of fall, recovery time) is a standard task.' },
      { n: 5, f: 'Hazard management cycle', b: 'Preparedness, response, recovery, mitigation. Risk management of storms and fires uses preparedness, mitigation, prevention and adaptation.' },
      { n: 6, f: 'Which plate margins have no volcanoes, and why?', b: 'Collision and conservative margins. No crust is created or destroyed there, so no magma is generated. Collision gives fold mountains and major earthquakes; conservative gives powerful earthquakes.' },
      { n: 7, f: 'Magnitude vs intensity of an earthquake', b: 'Magnitude (moment magnitude scale) is a property of the event itself. Intensity (Mercalli scale) measures effects at a particular place, so one earthquake has one magnitude but many intensities.' },
      { n: 8, f: 'Can earthquakes and volcanic eruptions be predicted?', b: 'Volcanic eruptions often can, from measurable precursors (seismicity, ground deformation, gas emission). Earthquakes cannot be reliably predicted.' },
      { n: 9, f: 'Conditions needed for a tropical storm to form', b: 'Sea temperature above about 27 °C to a depth of 60 m, latitude 5° to 30° for Coriolis deflection, low wind shear, and convergence in the lower atmosphere.' },
      { n: 10, f: 'Forms of storm hazard in the specification', b: 'High winds, storm surges (usually the greatest killer), coastal flooding, river flooding and landslides.' },
      { n: 11, f: 'Conditions favouring an intense wildfire', b: 'Vegetation type, fuel characteristics, climate and recent weather, and fire behaviour. Causes are natural (for example lightning) or human (accidental or deliberate).' },
      { n: 12, f: 'Why do two earthquakes of the same magnitude cause different impacts in HIC and LIC?', b: 'Hazard is identical; vulnerability and capacity to cope differ: building codes, warning systems, emergency response, healthcare capacity and recovery funding (insurance vs aid).' },
      { n: 13, f: 'Hard vs soft engineering for river flooding as a storm hazard', b: 'Hard (dams, levées, channelisation): effective but expensive, can shift the problem downstream. Soft (floodplain zoning, afforestation, wetland restoration): cheaper, more sustainable, less immediate.' },
    ]),
    ...sub(U1, 'unit-1a-hot-desert-systems-9635', '3.1.2', [
      { n: 1, f: 'Causes of aridity', b: 'Pressure (sinking air), winds, continentality, relief (rain shadow) and cold ocean currents. Water balance and the aridity index are used to define dryness.' },
      { n: 2, f: 'Arid weathering processes', b: 'Thermal fracture, exfoliation, chemical weathering, and block and granular disintegration.' },
      { n: 3, f: 'Wind erosion and transport processes in deserts', b: 'Erosion by deflation and abrasion. Transport by suspension, saltation and surface creep. Deposition when wind energy falls.' },
      { n: 4, f: 'Three sources of water in hot deserts', b: 'Exogenous (from outside, such as a river from wetter regions), endorheic (drains inland, never reaching the sea) and ephemeral (short-lived). Water acts episodically.' },
      { n: 5, f: 'Episodic water action in deserts', b: 'Sheet flooding and channel flash flooding after rare, intense rainfall do much of the erosion and transport.' },
      { n: 6, f: 'Aeolian (wind) landforms in hot deserts', b: 'Deflation hollows, desert pavements, ventifacts, yardangs, zeugen, and barchan and seif dunes.' },
      { n: 7, f: 'Water-formed landforms in hot deserts', b: 'Wadis, bahadas, pediments, playas and inselbergs.' },
      { n: 8, f: 'Desertification: what must you know?', b: 'The changing extent of hot deserts over the last 10,000 years, causes (climate change and human impact), areas at risk, impacts and alternative futures.' },
      { n: 9, f: 'Systems concepts applied to hot deserts', b: 'Inputs, outputs, energy, stores, flows, feedback and dynamic equilibrium, plus sediment sources, cells and budgets.' },
    ]),
    ...sub(U1, 'unit-1b-coastal-systems-9635', '3.1.3', [
      { n: 1, f: 'Four coastal erosion processes', b: 'Hydraulic action (water compressing air in cracks), abrasion (rock fragments scouring), attrition (fragments wearing each other down) and solution (chemical dissolving).' },
      { n: 2, f: 'Longshore drift', b: 'Waves approach at an angle, so swash carries sediment obliquely up the beach and backwash returns it perpendicular under gravity, giving net movement along the shore.' },
      { n: 3, f: 'Headlands and bays: how do they form?', b: 'Differential erosion of alternating resistant and less-resistant rock: softer rock erodes into bays, harder rock is left as headlands.' },
      { n: 4, f: 'Sequence of landforms on an eroding headland', b: 'Line of weakness → cave → arch → stack (roof collapses) → stump (base eroded). Retreating cliffs leave a wave-cut platform.' },
      { n: 5, f: 'Spit vs tombolo', b: 'Spit: deposition builds out into open water where the coastline changes direction. Tombolo: a spit that joins the land to an offshore island.' },
      { n: 6, f: 'Constructive vs destructive waves', b: 'Constructive: low, long wavelength, swash stronger than backwash, build beaches. Destructive: high, short wavelength, strong backwash, erode beaches.' },
      { n: 7, f: 'Sediment cell', b: 'A largely closed system of sources, transfers and sinks of sediment. It explains why management in one place affects another.' },
      { n: 8, f: 'Why can groynes cause erosion elsewhere?', b: 'They trap sediment moving by longshore drift, starving the beach further along the drift direction, which becomes more vulnerable to erosion.' },
      { n: 9, f: 'Hard vs soft coastal engineering', b: 'Hard: sea walls, groynes, rip-rap. Soft: beach nourishment, dune stabilisation, managed retreat.' },
      { n: 10, f: 'Managed retreat: why favoured and why contentious?', b: 'Favoured on cost and sustainability grounds (let the sea reclaim land rather than defend it). Contentious socially, because it means abandoning land and property.' },
    ]),

    // 2 Unit 2: Human geography 1
    ...sub(U2, 'global-systems-governance-9635', '3.2.1', [
      { n: 1, f: 'Five dimensions (flows) of globalisation', b: 'Flows of capital, labour, products, services and information. Know a real example of each.' },
      { n: 2, f: 'Factors driving globalisation', b: 'Technologies, systems and relationships across financial, transport, security, communications, management and information systems, plus trade agreements.' },
      { n: 3, f: 'Globalisation vs global systems', b: 'Globalisation is the process and its drivers (what is flowing and why). Global systems are the structures and networks that result, and their consequences (who gains or loses).' },
      { n: 4, f: 'Interdependence', b: 'A state where decisions in one place affect others elsewhere. It can be economic, political, social and environmental.' },
      { n: 5, f: 'Why is interdependence described as double-edged?', b: 'Unequal flows of people, money, ideas and technology can promote stability, growth and development, but can also cause inequalities, conflicts and injustices.' },
      { n: 6, f: 'Unequal power relations in global systems', b: 'Powerful states can drive global systems (trade rules, financial institutions) to their own advantage and influence geopolitics. Others can only respond or resist in a more constrained way.' },
      { n: 7, f: 'Structure for a strong interdependence answer', b: 'Claim → example → consequence → balance. Show both outcomes for the same flow, and acknowledge genuine opportunities for less powerful states.' },
      { n: 8, f: 'Geopolitics', b: 'How geography, power and international relations interact to shape political decisions.' },
      { n: 9, f: 'What does 3.2.1.3 International trade and access to markets cover?', b: 'Trends in trade and investment, trading relationships between economies at different levels of development, differential access to markets, a specified TNC, and world trade in a food commodity or manufactured product.' },
      { n: 10, f: 'What are the global commons, and which ocean topics sit under them?', b: 'The concept of shared resources to whose benefits all have a right and which need protecting. The oceans are studied as a global common: threats and governance (IMO, UNCLOS, MSC, NGOs).' },
    ]),
    ...sub(U2, 'resource-security-9635', '3.2.2', [
      { n: 1, f: 'Resource security', b: 'Reliable access to enough of a resource (such as water, energy or minerals) at an affordable price and acceptable quality for a population or country.' },
      { n: 2, f: 'Renewable vs non-renewable resources', b: 'Renewable resources are replenished naturally on human timescales (for example solar, wind, water). Non-renewable resources are finite on those timescales (for example fossil fuels and minerals).' },
      { n: 3, f: 'Why do resource supplies and demand differ between places?', b: 'Resources are unevenly distributed physically, while demand varies with population, income and development. This mismatch drives trade, dependence and geopolitical tension.' },
      { n: 4, f: 'Physical vs economic water scarcity', b: 'Physical scarcity: there is not enough water to meet demand. Economic scarcity: water exists but people lack the investment or infrastructure to use it.' },
      { n: 5, f: 'Energy mix', b: 'The combination of energy sources a country uses. A diverse mix reduces dependence on one fuel or supplier and so improves energy security.' },
      { n: 6, f: 'Why can resource insecurity cause conflict?', b: 'Competition for scarce or shared resources, dependence on imports and control by a few producers can create tension between and within states. Evaluate with named examples.' },
      { n: 7, f: 'Sustainable management of resources', b: 'Using resources so that supplies last for future generations: efficiency, recycling, substitution and demand management alongside increased supply.' },
      { n: 8, f: 'Resource development: trade-offs to evaluate', b: 'Extraction and supply bring economic benefits and jobs but can carry environmental damage and social costs. Weigh costs against benefits and reach a judgement.' },
    ]),

    // 3 Unit 3: Physical geography 2
    ...sub(U3, 'water-carbon-life-earth-9635', '3.3.1', [
      { n: 1, f: 'Open vs closed system', b: 'Open: energy and matter cross the boundary (a drainage basin). Closed: only energy crosses (close to true for the global water and carbon cycles).' },
      { n: 2, f: 'Positive vs negative feedback', b: 'Positive: a change sets off effects that amplify it. Negative: a change sets off effects that reduce it. Dynamic equilibrium: inputs and outputs balance so stores stay roughly steady.' },
      { n: 3, f: 'Drainage basin water balance equation', b: 'P = Q + E ± ΔS: precipitation = runoff + evapotranspiration ± change in storage.' },
      { n: 4, f: 'Lag time on a flood hydrograph', b: 'The time between peak rainfall and peak discharge. Flashy hydrographs have a short lag and high peak; subdued ones have a long lag and low peak.' },
      { n: 5, f: 'Infiltration, percolation, throughflow and overland flow', b: 'Infiltration: water entering soil. Percolation: moving down into rock. Throughflow: sideways through soil. Overland flow: across the surface when soil cannot absorb it.' },
      { n: 6, f: 'Stemflow vs throughfall', b: 'Stemflow: intercepted water running down stems and trunks. Throughfall: water dripping from leaves to the ground.' },
      { n: 7, f: 'Approximate shares of the world\'s water (USGS)', b: 'Oceans about 96.5%, ice caps, glaciers and permanent snow about 1.74%, groundwater about 1.69%, atmosphere about 0.001%.' },
      { n: 8, f: 'Carbon store sizes (year 2000 estimates)', b: 'Oceans about 38,400 GtC; fossil fuels about 4,130; soils about 1,500; living biomass about 600 to 1,000; atmosphere about 720 then, now nearer 890. Quote as estimates.' },
      { n: 9, f: 'Convert GtC to gigatonnes of carbon dioxide', b: 'Multiply by 44/12 (about 3.67). Example: 5 GtC = about 18.3 Gt of carbon dioxide.' },
      { n: 10, f: 'Fast vs slow carbon cycle', b: 'Fast: photosynthesis and respiration, days to decades. Slow: rock weathering and sedimentation, millions of years. Burning fossil fuels moves carbon from slow to fast.' },
      { n: 11, f: 'Name three positive feedbacks affecting climate', b: 'Ice-albedo (melting exposes darker surface), water vapour (warming → more vapour), permafrost thaw (releases carbon dioxide and methane). Rainforest drying is another.' },
      { n: 12, f: 'Name two negative feedbacks in the carbon cycle', b: 'Carbon dioxide fertilisation (more carbon dioxide → faster photosynthesis → more uptake) and chemical weathering (warmer and wetter → faster weathering → carbon dioxide drawn down, very slowly).' },
      { n: 13, f: 'Amazon deforestation: key figures to quote', b: '27,772 km² cleared in 2004 and 4,571 km² in 2012; about 80% linked to cattle; about 20% of the forest lost by 2022. The fall after 2004 shows policy can work but was not sustained.' },
      { n: 14, f: 'River Eden, Cumbria: flooding facts', b: 'January 2005: up to 180 mm upstream in a day, about 2,700 Carlisle homes flooded. December 2015, Storm Desmond: defences overwhelmed, so defences alone are not enough.' },
      { n: 15, f: 'Mauna Loa record of atmospheric carbon dioxide', b: 'Annual mean 315.98 ppm (1959) to 421.08 ppm (2023). One site, but matches global records.' },
      { n: 16, f: 'Name human interventions that reduce carbon transfers to the atmosphere', b: 'Afforestation, carbon capture and storage, peatland restoration, reduced tillage and forest protection such as REDD+. Judge scale, cost and permanence.' },
    ]),
    ...sub(U3, 'ecosystems-under-stress-9635', '3.3.2', [
      { n: 1, f: 'Biodiversity', b: 'The variety of life at three levels: genetic, species and ecosystem diversity. Species richness (number of species) is only one part.' },
      { n: 2, f: 'Biomass vs net primary production (NPP)', b: 'Biomass is a store (how much living matter per unit area). NPP is a rate: gross primary production minus producers\' respiration, the new matter available to consumers.' },
      { n: 3, f: 'Energy vs nutrients in an ecosystem', b: 'Energy flows one way and is lost as heat. Nutrients cycle and are reused.' },
      { n: 4, f: 'Sub-climax vs plagioclimax', b: 'Sub-climax: succession halted by a natural factor (for example waterlogging). Plagioclimax: held back by continuing human activity, as heath at Studland is kept open by cattle grazing.' },
      { n: 5, f: 'Pioneer species and climatic climax', b: 'Pioneers are first colonisers that change conditions for later species. Climatic climax is the final stable community the regional climate supports.' },
      { n: 6, f: 'The four seres in the specification', b: 'Lithosere (bare rock), halosere (salt water), psammosere (sand) and hydrosere (fresh water).' },
      { n: 7, f: 'Rainforest vs savanna: nutrient stores', b: 'Rainforest: the largest store is in biomass, with a small litter store because decay is fast. Savanna: more nutrients in the soil, and fire returns nutrients quickly as ash.' },
      { n: 8, f: 'Adaptations of savanna plants', b: 'Deep roots, thick bark, small or waxy leaves, grasses that regrow from roots, and fire tolerance.' },
      { n: 9, f: 'Great Barrier Reef: protection facts', b: 'Marine Park Act 1975; World Heritage 1981; 2004 zoning raised highly protected area from 4.5% to over 33%; Reef 2050 Plan (2015). Over 90% of pollution is farm runoff.' },
      { n: 10, f: 'What is coral bleaching and what causes it?', b: 'Stress, usually high water temperature, makes corals expel their symbiotic zooxanthellae algae and turn white. Bleached coral can recover if stress ends soon.' },
      { n: 11, f: 'Ocean acidification', b: 'A fall in seawater pH as the ocean absorbs carbon dioxide. Warming and acidification are driven by human emissions, even though the specification lists them as natural factors.' },
      { n: 12, f: 'Rondônia, Brazil: key facts', b: 'BR-364 paved in the 1980s; population about 117,000 (1970) to over 1.1 million (1991); about 70,000 km² cleared by 2003; "fishbone" clearance pattern; cattle and soy economy.' },
      { n: 13, f: 'Studland, Dorset: what is the case study?', b: 'A psammosere on the Isle of Purbeck (National Trust, 631 ha): embryo, yellow (marram) and grey dunes, slacks, then heath. pH falls inland. Cattle grazing keeps the heath open.' },
      { n: 14, f: 'Sungei Buloh, Singapore: key facts', b: 'Mangrove and wetland reserve of 130 ha run by the National Parks Board: nature park 1993, nature reserve 2002, ASEAN Heritage Park 2003. A stopover on the East Asian-Australasian Flyway.' },
      { n: 15, f: 'Living Planet Report 2024 finding', b: 'An average 73% decline in monitored wildlife populations between 1970 and 2020. It measures average population change, not species lost.' },
    ]),

    // 4 Unit 4: Human geography 2
    ...sub(U4, 'changing-places-9635', '3.4.1', [
      { n: 1, f: 'Space vs place', b: 'Space is a location without attached human meaning. Place is space given meaning by people through experience, memory and attachment.' },
      { n: 2, f: 'Insider vs outsider perspective', b: 'Insider: someone who lives in or belongs to a place and knows it through routine and memory. Outsider: a visitor, investor, planner or media audience. A person can be both in different places.' },
      { n: 3, f: 'Endogenous vs exogenous factors', b: 'Endogenous: internal factors (location, topography, land use, built environment, demographic and economic characteristics). Exogenous: relationships with other places.' },
      { n: 4, f: 'Formal vs informal representation of place', b: 'Formal: census data, maps, statistics. Informal: advertising, tourist material, film, photography, art, story, song. Neither is neutral.' },
      { n: 5, f: 'Name two kinds of external force on places', b: 'Government policies and decisions of multinational corporations. Flows of people, goods, capital and ideas link places to these forces.' },
      { n: 6, f: 'Gentrification', b: 'Arrival of higher-income residents and businesses that raises costs and often displaces existing residents.' },
      { n: 7, f: 'Massey\'s view of place (1991)', b: 'Places are open meeting points of flows and relations, not bounded, fixed units. Useful for exogenous factors, connections and globalisation.' },
      { n: 8, f: 'Tuan, Relph and Agnew: one idea each', b: 'Tuan: space becomes place through experience. Relph: insideness and outsideness, and placelessness. Agnew: place = location + locale + sense of place.' },
      { n: 9, f: 'Census data: strength and limitation for place studies', b: 'Strength: comparable over time and covers the whole population. Limitation: categories and boundaries change, and averages hide variation within an area.' },
      { n: 10, f: 'Stratford, east London: key facts', b: 'Newham population 351,030 (2021 census). 2012 Olympic park of 560 acres, open permanently from 2014. East Village has 2,818 homes, 1,379 affordable. A 2017 report found 36% of Newham employees in low-paid work.' },
      { n: 11, f: 'Walled City of Lahore: key facts', b: 'About 256 ha, population about 200,000. Wazir Khan Mosque (1634 to 1641). Partition (1947) changed its demography sharply. Shahi Hammam restoration won a UNESCO Award of Merit (2016).' },
    ]),
    ...sub(U4, 'urban-environments-9635', '3.4.2', [
      { n: 1, f: 'Urbanisation vs urban growth', b: 'Urbanisation is a rise in the proportion of people living in urban areas. Urban growth is a rise in the absolute number of urban dwellers.' },
      { n: 2, f: 'Megacity vs world city', b: 'Megacity: urban area of more than 10 million people (size). World city: major command role in the global economy (function). Singapore is a world city but not a megacity.' },
      { n: 3, f: 'UN World Urbanization Prospects 2018 figures', b: '30% urban in 1950, 55% in 2018, 68% projected for 2050; 33 megacities in 2018. Projections depend on how each country defines urban.' },
      { n: 4, f: 'Four stages of urban change in the more developed world', b: 'Urbanisation, suburbanisation, counter-urbanisation and urban resurgence.' },
      { n: 5, f: 'Fortress development vs gentrification', b: 'Fortress development: gated, guarded space with controlled access, built to exclude. Gentrification: an existing area changing as higher-income newcomers move in.' },
      { n: 6, f: 'Urban heat island: why strongest on calm, clear nights?', b: 'Clear skies let rural areas lose heat fast while city surfaces release stored heat. Calm air means the warm air is not mixed away. Causes include heat storage, waste heat and less evaporation.' },
      { n: 7, f: 'Photochemical smog', b: 'Ground-level ozone pollution formed when sunlight acts on nitrogen oxides and hydrocarbons from traffic and industry. Distinct from particulate pollution.' },
      { n: 8, f: 'Incineration vs landfill', b: 'Incineration: volume reduction and energy recovery. Landfill: cheap burial with methane emissions and leachate. Singapore incinerates, cutting waste by up to 90%, and sends ash to Semakau Landfill (opened 1999).' },
      { n: 9, f: 'Lagos: Olusosun landfill and Makoko facts', b: 'Olusosun: about 40 ha, up to 10,000 tonnes a day, now surrounded by housing. Makoko: stilt settlement; July 2012 demolitions left nearly 3,000 homeless.' },
      { n: 10, f: 'Singapore: HDB and Ethnic Integration Policy', b: 'HDB formed 1960; close to 80% live in public housing. Ethnic quotas since 1989 prevent enclaves but limit sellers\' choice. ERP road pricing began 1 April 1998.' },
      { n: 11, f: 'Why is malaria an urban issue?', b: 'The female Anopheles mosquito is the vector. Urban risk depends on drainage and water storage. Anopheles stephensi is an invasive urban vector that breeds in containers.' },
      { n: 12, f: 'Mortality vs morbidity; ecological footprint', b: 'Mortality is the death rate; morbidity is the illness rate. Ecological footprint is the land and water area needed to supply a population and absorb its waste.' },
    ]),

    // 5 Unit 5: Geographical and Fieldwork skills
    ...sub(U5, 'geographical-skills-checklist-9635', '3.5.1', [
      { n: 1, f: 'Unit 5 at a glance', b: 'Written exam, 1 hour 30 minutes, 60 marks, 20% of the International A-level. 15 of the 60 marks assess your own investigation.' },
      { n: 2, f: 'Desire line vs flow line vs trip line', b: 'Desire line: straight line from origin to destination. Flow line: follows the route, width proportional to volume. Trip line: one line for each individual journey.' },
      { n: 3, f: 'Choropleth vs isoline map', b: 'Choropleth shades bounded areas by rate or density (use rates, not totals). Isolines join points of equal value and show continuous change across boundaries.' },
      { n: 4, f: 'When do you use a triangular graph or a logarithmic scale?', b: 'Triangular graph: three components that add to 100%. Logarithmic scale: each cycle is a tenfold increase, compressing a very wide range of values.' },
      { n: 5, f: 'Inter-quartile range', b: 'Upper quartile minus lower quartile: the spread of the middle half. Lower quartile at (n + 1) ÷ 4, upper at 3(n + 1) ÷ 4. It ignores the tails.' },
      { n: 6, f: 'Spearman\'s rank formula and interpretation', b: 'rs = 1 − 6Σd² ÷ (n³ − n). Shows strength and direction of association, never causation. Example: Σd² = 24, n = 10 gives 1 − 144 ÷ 990 = 0.855.' },
      { n: 7, f: 'Chi-square: formula and conditions', b: 'Σ(O − E)² ÷ E. Needs raw counts and expected values of at least 5. Degrees of freedom for a table = (rows − 1) × (columns − 1).' },
      { n: 8, f: 'Critical values to recognise', b: 'Spearman n = 10 two-tailed: 0.648 (0.05), 0.794 (0.01). Chi-square df = 1: 3.84 (0.05), 6.63 (0.01). df = 2: 5.99 and 9.21.' },
      { n: 9, f: 'Null hypothesis and significance level', b: 'Null hypothesis: there is no relationship or no difference. Significance level (0.05 or 0.01) is the chance probability below which you reject it. Significant does not mean important or causal.' },
      { n: 10, f: 'Standard deviation', b: 'The average spread of values around the mean: square root of Σ(x − mean)² ÷ n. It uses every value, unlike range or IQR.' },
      { n: 11, f: 'Remote sensing, databases and crowd sourcing: limits', b: 'Remote sensing: limited by cloud, resolution and need for ground checks. Databases: collected for other purposes. Crowd sourcing and big data: unrepresentative, with privacy concerns.' },
    ]),
    ...sub(U5, 'fieldwork-skills-9635', '3.5.2', [
      { n: 1, f: 'Five stages of fieldwork enquiry', b: 'Planning and preparation; collection of data; presentation; analysis; conclusions and evaluation.' },
      { n: 2, f: 'Three sampling types in the specification', b: 'Random (chance), systematic (regular interval) and structured/stratified (proportional to known sub-groups).' },
      { n: 3, f: 'Primary vs secondary data', b: 'Primary data is collected by you. Secondary data is collected by someone else.' },
      { n: 4, f: 'Reliability vs validity', b: 'Reliable: repeatable. Valid: measures what you meant to measure.' },
      { n: 5, f: 'What does a risk assessment involve?', b: 'Identifying hazards, judging their risk and setting control measures. Each risk needs a matching way to reduce it.' },
      { n: 6, f: 'What must conclusions and evaluation include?', b: 'Accepting or rejecting the hypothesis; ethics and the impact of collecting and representing data; increased understanding; evaluation of every stage; improvements and future use.' },
      { n: 7, f: 'If practical fieldwork is impossible, what is allowed?', b: 'School-grounds enquiries, interviews in school or at home, or raw unprocessed data from your teacher that you help plan and sample. Pre-processed data alone is not enough.' },
      { n: 8, f: 'Familiar vs unfamiliar fieldwork questions', b: 'Familiar: your own experiences and findings. Unfamiliar: apply fieldwork knowledge to a new scenario in the paper.' },
    ]),
  ],
};
