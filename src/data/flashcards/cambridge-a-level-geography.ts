/**
 * D-444 -- flashcards for Cambridge A Level Geography 9696 (2025-2026).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Geography is not tiered, so no card sets `u`. Facts are generic (no case
 * studies and no statistics); src: '...' marks a card that restates a Marlbridge 9696
 * revision-notes page (origin 'revision-notes'); the rest are authored.
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

const TROP = 'a-level-geography-9696-tropical-environments-revision-notes';
const COAST = 'a-level-geography-9696-coastal-environments-revision-notes';
const HAZ = 'a-level-geography-9696-hazardous-environments-revision-notes';
const ARID = 'a-level-geography-9696-hot-arid-and-semi-arid-environments-revision-notes';
const PROD = 'a-level-geography-9696-production-location-and-change-revision-notes';
const ENVM = 'a-level-geography-9696-environmental-management-revision-notes';
const GLOB = 'a-level-geography-9696-global-interdependence-revision-notes';
const ECON = 'a-level-geography-9696-economic-transition-revision-notes';

const T1 = 'paper-1-core-physical-geography-9696';
const T2 = 'atmosphere-and-weather-9696';
const T3 = 'rocks-and-weathering-9696';
const T4 = 'paper-2-core-human-geography-9696';
const T5 = 'migration-9696';
const T6 = 'settlement-dynamics-9696';
const T7 = 'tropical-environments-9696';
const T8 = 'paper-3-advanced-physical-geography-options-9696';
const T9 = 'hazardous-environments-9696';
const T10 = 'hot-arid-and-semi-arid-environments-9696';
const T11 = 'production-location-and-change-9696';
const T12 = 'environmental-management-9696';
const T13 = 'global-interdependence-9696';
const T14 = 'economic-transition-9696';

export const DECK_CAMBRIDGE_A_LEVEL_GEOGRAPHY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'a-level',
  subjectSlug: 'geography',
  syllabusCode: '9696',
  syllabusSeries: '2025-2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-15',
  cards: [
    // 1 Hydrology and fluvial geomorphology
    ...sub(T1, 'the-drainage-basin-system-9696', '1.1', [
      { n: 1, f: 'Drainage basin', b: 'The area of land drained by a river and its tributaries, bounded by a watershed (the high ground dividing it from neighbouring basins).' },
      { n: 2, f: 'Inputs and outputs of the drainage basin system', b: 'Input: precipitation. Outputs: evaporation, transpiration (together evapotranspiration) and river discharge to the sea.' },
      { n: 3, f: 'Stores in the drainage basin', b: 'Interception (vegetation), surface storage, soil moisture, groundwater and channel storage.' },
      { n: 4, f: 'Flows in the drainage basin', b: 'Infiltration, percolation, throughflow, overland flow (surface runoff), groundwater flow, stemflow and channel flow.' },
      { n: 5, f: 'Infiltration vs percolation', b: 'Infiltration is water entering the soil surface. Percolation is water moving down from the soil into the underlying rock.' },
      { n: 6, f: 'Why is a drainage basin an open system?', b: 'It exchanges matter and energy with its surroundings: precipitation enters and water and energy leave as evapotranspiration and discharge.' },
    ]),
    ...sub(T1, 'discharge-relationships-within-drainage-basins-9696', '1.2', [
      { n: 1, f: 'Storm (flood) hydrograph', b: 'A graph of river discharge over time following a rainfall event, showing the rising limb, peak discharge and falling limb.' },
      { n: 2, f: 'Lag time', b: 'The time between peak rainfall and peak discharge. A short lag time means a flashier response.' },
      { n: 3, f: 'Factors giving a steep hydrograph with short lag time', b: 'Impermeable rock, saturated soil, steep relief, sparse vegetation, urban land use, circular basin shape and intense rainfall.' },
      { n: 4, f: 'Why does an urban area shorten lag time?', b: 'Impermeable surfaces and drains stop infiltration and send water quickly to the channel as overland flow.' },
      { n: 5, f: 'River regime', b: 'The pattern of a river\'s discharge through the year, controlled by climate, rock type and vegetation.' },
      { n: 6, f: 'Water balance equation', b: 'Precipitation = evapotranspiration + runoff ± change in storage.' },
    ]),
    ...sub(T1, 'river-channel-processes-and-landforms-9696', '1.3', [
      { n: 1, f: 'Processes of river erosion', b: 'Hydraulic action, abrasion, attrition and solution (corrosion).' },
      { n: 2, f: 'Hjulström curve', b: 'A graph relating particle size to flow velocity, showing the velocities needed to erode, transport and deposit sediment.' },
      { n: 3, f: 'How is a waterfall formed and how does it retreat?', b: 'Hard rock overlies softer rock. Undercutting forms a plunge pool and overhang, which collapses, so the fall retreats upstream leaving a gorge.' },
      { n: 4, f: 'How is a meander formed?', b: 'Faster flow on the outside erodes a river cliff. Slower flow on the inside deposits a slip-off slope.' },
      { n: 5, f: 'How is an ox-bow lake formed?', b: 'The neck of a meander narrows until it is breached in flood. Deposition then seals the abandoned loop.' },
      { n: 6, f: 'How are levées and floodplains formed?', b: 'Overbank flow deposits coarse material nearest the channel (levées) and fine material further away (floodplain).' },
      { n: 7, f: 'Conditions for delta formation', b: 'A high sediment load and low wave and tidal energy, so sediment is deposited faster than it is removed.' },
    ]),
    ...sub(T1, 'the-human-impact-1-4-9696', '1.4', [
      { n: 1, f: 'Human causes of increased flood risk', b: 'Deforestation, urbanisation, drainage of wetlands, land-use change and building on floodplains all raise runoff and shorten lag time.' },
      { n: 2, f: 'Hard engineering flood management', b: 'Dams and reservoirs, embankments or levées, channel straightening or deepening and flood relief channels.' },
      { n: 3, f: 'Soft engineering flood management', b: 'Floodplain zoning, flood warnings, afforestation, wetland restoration and washlands.' },
      { n: 4, f: 'Disadvantage of hard engineering', b: 'It is costly, can increase flood risk downstream and harm habitats, and may give a false sense of security.' },
      { n: 5, f: 'Impacts of a river flood', b: 'Loss of life, damage to property and crops, disruption and disease, though silt deposition can later enrich farmland.' },
    ]),

    // 2 Atmosphere and weather
    ...sub(T2, 'diurnal-energy-budgets-9696', '2.1', [
      { n: 1, f: 'Insolation', b: 'Incoming solar radiation, shortwave energy received at the Earth\'s surface.' },
      { n: 2, f: 'Albedo', b: 'The proportion of incoming solar radiation reflected by a surface. Fresh snow has a high albedo; dark forest has a low albedo.' },
      { n: 3, f: 'Components of a diurnal energy budget', b: 'Incoming shortwave radiation, reflected radiation, outgoing longwave radiation, sensible heat, latent heat and ground heat flux.' },
      { n: 4, f: 'Why is a clear night colder than a cloudy night?', b: 'Cloud reflects outgoing longwave radiation back down. Without cloud, more heat escapes to space.' },
      { n: 5, f: 'Sensible heat vs latent heat', b: 'Sensible heat is transferred by conduction and convection and can be sensed as a temperature change. Latent heat is absorbed or released during a change of state.' },
    ]),
    ...sub(T2, 'the-global-energy-budget-9696', '2.2', [
      { n: 1, f: 'Greenhouse effect', b: 'Greenhouse gases in the atmosphere absorb outgoing longwave radiation and re-radiate it, keeping the Earth warmer than it would otherwise be.' },
      { n: 2, f: 'Why does the equator have an energy surplus and the poles a deficit?', b: 'Solar rays hit the equator at a high angle over a smaller area. At the poles they are spread over a larger area and pass through more atmosphere, and ice reflects more.' },
      { n: 3, f: 'How is the energy imbalance corrected?', b: 'Heat is transferred from low to high latitudes by atmospheric circulation and ocean currents.' },
      { n: 4, f: 'Hadley, Ferrel and Polar cells', b: 'Three atmospheric circulation cells in each hemisphere that redistribute heat. Rising air gives low pressure and sinking air gives high pressure.' },
      { n: 5, f: 'Where does air rise and sink in the global circulation?', b: 'Air rises at the equator (ITCZ) and in the sub-polar low-pressure zones. It sinks in the subtropical high-pressure belts (about 30°N and 30°S) and at the poles.' },
    ]),
    ...sub(T2, 'weather-processes-and-phenomena-9696', '2.3', [
      { n: 1, f: 'Adiabatic cooling', b: 'Rising air expands and cools without heat exchange with its surroundings. Cooling to dew point causes condensation.' },
      { n: 2, f: 'Dry adiabatic lapse rate vs saturated adiabatic lapse rate', b: 'The saturated rate is lower than the dry rate because latent heat is released as vapour condenses.' },
      { n: 3, f: 'Stable vs unstable air', b: 'Stable air resists rising and gives little cloud. Unstable air continues to rise and can give deep cloud and heavy rain.' },
      { n: 4, f: 'Features of a tropical cyclone', b: 'A low-pressure system with an eye, strong spiralling winds, heavy rain and a storm surge. It forms over warm ocean water.' },
      { n: 5, f: 'Conditions for tropical cyclone formation', b: 'Sea surface temperature of at least 26.5 °C to a depth of about 50 m, a location away from the equator so the Coriolis force can start rotation, and low vertical wind shear.' },
      { n: 6, f: 'Why does a tropical cyclone weaken over land?', b: 'It loses its supply of warm moist air as energy source and friction increases.' },
    ]),
    ...sub(T2, 'the-human-impact-2-4-9696', '2.4', [
      { n: 1, f: 'Urban heat island', b: 'A city that is warmer than its surrounding rural area, because of heat from buildings and traffic and dark surfaces that absorb heat.' },
      { n: 2, f: 'Other urban climate effects', b: 'Lower humidity and wind speed, more cloud and precipitation downwind, and more pollution and fog.' },
      { n: 3, f: 'Ways to reduce urban heat islands', b: 'Green spaces and roofs, reflective materials, water features and less energy-generating waste heat.' },
      { n: 4, f: 'Effect of human activity on global climate', b: 'Burning fossil fuels, deforestation and farming increase greenhouse gases, enhancing the greenhouse effect.' },
    ]),

    // 3 Rocks and weathering
    ...sub(T3, 'plate-tectonics-9696', '3.1', [
      { n: 1, f: 'Layers of the Earth', b: 'Crust, mantle, outer core (liquid) and inner core (solid). The lithosphere is the crust plus the rigid upper mantle.' },
      { n: 2, f: 'Evidence for plate tectonics', b: 'Fit of continents, matching rocks and fossils, sea-floor spreading, paleomagnetism and the pattern of earthquakes and volcanoes.' },
      { n: 3, f: 'Mechanisms driving plate movement', b: 'Mantle convection, slab pull and ridge push.' },
      { n: 4, f: 'What happens at a destructive margin?', b: 'The denser oceanic plate subducts beneath the other, forming a trench, volcanoes or island arc and earthquakes.' },
      { n: 5, f: 'What happens at a constructive margin?', b: 'Plates diverge and magma rises, forming new crust, with ridges, rift valleys, basaltic volcanoes and shallow earthquakes.' },
      { n: 6, f: 'Collision margin', b: 'Two continental plates meet. Neither subducts easily, so crust is folded and uplifted into fold mountains.' },
    ]),
    ...sub(T3, 'weathering-9696', '3.2', [
      { n: 1, f: 'Weathering vs erosion', b: 'Weathering is the in-situ breakdown of rock with no movement of the material. Erosion involves a transporting agent such as water or ice.' },
      { n: 2, f: 'Types of physical weathering', b: 'Freeze–thaw, exfoliation (thermal expansion), salt crystallisation and pressure release.' },
      { n: 3, f: 'Types of chemical weathering', b: 'Carbonation, hydrolysis, oxidation, hydration and solution.' },
      { n: 4, f: 'Biological weathering', b: 'Root action, burrowing animals and chelation by organic acids.' },
      { n: 5, f: 'Carbonation', b: 'Rainwater containing dissolved carbon dioxide forms weak carbonic acid, which dissolves calcium carbonate rocks such as limestone.' },
      { n: 6, f: 'Which climate favours chemical vs physical weathering?', b: 'Chemical weathering is fastest where it is warm and wet. Freeze–thaw operates where temperatures fluctuate around 0 °C with moisture present.' },
    ]),
    ...sub(T3, 'slope-processes-9696', '3.3', [
      { n: 1, f: 'Mass movement', b: 'The downslope movement of rock, soil and debris under gravity, without a transporting medium such as water or ice.' },
      { n: 2, f: 'Types of mass movement', b: 'Rockfall, landslide, mudflow, slumping (rotational slip), soil creep and debris flow.' },
      { n: 3, f: 'Why does heavy rain trigger mass movement?', b: 'Water adds weight and reduces friction and cohesion between particles, so shear stress exceeds shear strength.' },
      { n: 4, f: 'Shear stress vs shear strength', b: 'Shear stress is the force pulling material downslope. Shear strength is the resistance to movement. Failure occurs when stress exceeds strength.' },
      { n: 5, f: 'Slope angle and mass movement', b: 'Steeper slopes increase gravitational pull parallel to the slope, raising shear stress.' },
    ]),
    ...sub(T3, 'the-human-impact-3-4-9696', '3.4', [
      { n: 1, f: 'Human activities that increase slope instability', b: 'Deforestation, building and quarrying, adding weight, cutting into slopes, and altering drainage.' },
      { n: 2, f: 'Methods to reduce mass movement', b: 'Grading or terracing the slope, drainage, rock bolting, netting, pinning, retaining walls and afforestation.' },
      { n: 3, f: 'How do trees help stabilise slopes?', b: 'Roots bind soil, canopies intercept rain, and transpiration removes water from the soil.' },
      { n: 4, f: 'Why does drainage reduce mass movement?', b: 'It lowers pore water pressure and reduces the weight of the slope material.' },
    ]),

    // 4 Population
    ...sub(T4, 'natural-increase-as-a-component-of-population-change-9696', '4.1', [
      { n: 1, f: 'Birth rate', b: 'Live births per 1000 population per year.' },
      { n: 2, f: 'Death rate', b: 'Deaths per 1000 population per year.' },
      { n: 3, f: 'Fertility rate', b: 'The average number of births per woman of childbearing age.' },
      { n: 4, f: 'Infant mortality rate', b: 'Deaths under the age of 1 per 1000 live births.' },
      { n: 5, f: 'Natural increase rate', b: 'Birth rate minus death rate, usually expressed per 1000 population per year.' },
      { n: 6, f: 'Factors affecting fertility', b: 'Female education and employment, contraception, infant mortality, cost of children, culture and religion, and government policy.' },
    ]),
    ...sub(T4, 'demographic-transition-9696', '4.2', [
      { n: 1, f: 'Stage 1 of the demographic transition model', b: 'High birth rate and high death rate, both fluctuating, so population is low and stable or growing slowly.' },
      { n: 2, f: 'Stage 2 of the demographic transition model', b: 'High birth rate with a rapidly falling death rate, so natural increase is high and population grows quickly.' },
      { n: 3, f: 'Stage 3 of the demographic transition model', b: 'Birth rate falls while the death rate stays low, so growth slows.' },
      { n: 4, f: 'Stage 4 of the demographic transition model', b: 'Low birth and death rates, so population is high and stable.' },
      { n: 5, f: 'Stage 5 of the demographic transition model', b: 'Birth rate drops below death rate, leading to natural decrease and an ageing population.' },
      { n: 6, f: 'Limitation of the demographic transition model', b: 'It is based on European experience and may not fit other regions, where timing, causes and speed of change differ.' },
    ]),
    ...sub(T4, 'populationresource-relationships-9696', '4.3', [
      { n: 1, f: 'Overpopulation', b: 'Too many people for the resources and technology available, so living standards fall.' },
      { n: 2, f: 'Underpopulation', b: 'Too few people to make full use of the resources available, so the economy cannot reach its potential.' },
      { n: 3, f: 'Optimum population', b: 'The population size that gives the highest standard of living for the resources and technology of an area.' },
      { n: 4, f: 'Malthusian theory', b: 'Population grows geometrically while food supply grows arithmetically, so checks such as famine, disease and war limit population.' },
      { n: 5, f: 'Boserup\'s theory', b: 'Population growth stimulates innovation and intensive farming, increasing food production to match need.' },
      { n: 6, f: 'Carrying capacity', b: 'The maximum population that an environment can support indefinitely with its resources.' },
    ]),
    ...sub(T4, 'the-management-of-natural-increase-9696', '4.4', [
      { n: 1, f: 'Anti-natalist policy', b: 'A policy that aims to reduce birth rates, for example through family planning, contraception and incentives for smaller families.' },
      { n: 2, f: 'Pro-natalist policy', b: 'A policy that aims to raise birth rates, for example through child benefits, tax incentives and parental leave.' },
      { n: 3, f: 'Non-coercive vs coercive population policy', b: 'Non-coercive policies use education and incentives. Coercive policies use penalties or limits and are more controversial.' },
      { n: 4, f: 'Why is educating women effective in lowering fertility?', b: 'Educated women tend to marry later, have careers and use contraception, so they have fewer children.' },
      { n: 5, f: 'Problems of policies to reduce births', b: 'Changed age structure and ageing population later, gender imbalance, and ethical concerns.' },
    ]),

    // 5 Migration
    ...sub(T5, 'migration-as-a-component-of-population-change-9696', '5.1', [
      { n: 1, f: 'Net migration', b: 'Immigrants minus emigrants over a period of time.' },
      { n: 2, f: 'Immigration vs emigration', b: 'Immigration is movement into a country. Emigration is movement out of a country.' },
      { n: 3, f: 'Voluntary vs forced migration', b: 'Voluntary migrants choose to move. Forced migrants, such as refugees, move because of conflict, persecution or disaster.' },
      { n: 4, f: 'Intervening obstacles (Lee\'s model)', b: 'Barriers between origin and destination, such as distance, cost, laws and language.' },
      { n: 5, f: 'Economic vs social push and pull factors', b: 'Economic: jobs and wages. Social: services, family, safety, culture. Both influence the decision to move.' },
    ]),
    ...sub(T5, 'internal-migration-within-a-country-9696', '5.2', [
      { n: 1, f: 'Rural-urban migration', b: 'Movement of people from the countryside to towns and cities, driven by rural push and urban pull factors.' },
      { n: 2, f: 'Counterurbanisation', b: 'Movement of people from large urban areas to smaller towns and rural areas, often for a better quality of life.' },
      { n: 3, f: 'Impacts of rural-urban migration on rural areas', b: 'Loss of young adults, ageing population, abandoned services and farmland but remittances may help.' },
      { n: 4, f: 'Impacts of rural-urban migration on cities', b: 'Rapid growth, pressure on housing, services and infrastructure, and informal settlements.' },
      { n: 5, f: 'Gravity model', b: 'Predicts movement between two places as proportional to their sizes and inversely related to the distance between them.' },
    ]),
    ...sub(T5, 'international-migration-9696', '5.3', [
      { n: 1, f: 'Remittances', b: 'Money sent home by migrants to their families in their country of origin.' },
      { n: 2, f: 'Brain drain', b: 'The emigration of skilled and educated workers from a country, reducing its human capital.' },
      { n: 3, f: 'Refugee', b: 'A person forced to flee their country because of a well-founded fear of persecution, conflict or violence.' },
      { n: 4, f: 'Economic benefits to destination countries', b: 'Fill labour shortages, increase tax revenue and bring skills and diversity.' },
      { n: 5, f: 'Costs to destination countries', b: 'Pressure on housing and public services, possible wage competition and social tension.' },
    ]),
    ...sub(T5, 'the-management-of-international-migration-9696', '5.4', [
      { n: 1, f: 'Ways countries manage immigration', b: 'Quotas, points-based visa systems, border controls, work permits and refugee or asylum policies.' },
      { n: 2, f: 'Ways countries encourage immigration', b: 'Skills-based visas, recruitment of workers, and policies to address labour shortages.' },
      { n: 3, f: 'Asylum seeker', b: 'A person who has applied for refugee status and is awaiting a decision.' },
      { n: 4, f: 'Challenges of controlling migration', b: 'Irregular crossings, enforcement cost, human rights concerns and differing views within the population.' },
    ]),

    // 6 Settlement dynamics
    ...sub(T6, 'changes-in-rural-settlements-9696', '6.1', [
      { n: 1, f: 'Counterurbanisation effects on rural settlements', b: 'Population growth, commuter villages, rising house prices and pressure on services and countryside.' },
      { n: 2, f: 'Rural depopulation', b: 'Loss of population from rural areas, usually through out-migration of young adults, leading to service closures.' },
      { n: 3, f: 'Rural settlement patterns', b: 'Nucleated (clustered), dispersed (scattered) and linear (along a feature such as a road or river).' },
      { n: 4, f: 'Gentrification of rural areas', b: 'Wealthier incomers buy property, raising prices and often displacing lower-income local residents.' },
      { n: 5, f: 'Strategies to support rural settlements', b: 'Affordable housing, rural transport, broadband, support for local businesses and shared services.' },
    ]),
    ...sub(T6, 'urban-trends-and-issues-of-urbanisation-9696', '6.2', [
      { n: 1, f: 'Urbanisation', b: 'The increase in the proportion of a population living in towns and cities.' },
      { n: 2, f: 'Suburbanisation', b: 'The outward growth of cities, as people move from the centre to the suburbs.' },
      { n: 3, f: 'Urban decentralisation', b: 'The movement of people, shops, offices and industry from the city centre to outer areas.' },
      { n: 4, f: 'Informal settlement', b: 'Housing built without legal tenure, using cheap materials and often lacking water, sanitation and electricity.' },
      { n: 5, f: 'Primate city', b: 'A city that is much larger than the next largest city in a country and dominates it economically and politically.' },
      { n: 6, f: 'Megacity', b: 'A city with a very large population. The exact threshold varies between sources.' },
    ]),
    ...sub(T6, 'the-changing-structure-of-urban-settlements-9696', '6.3', [
      { n: 1, f: 'Burgess concentric model', b: 'Cities form rings of land use around the CBD: CBD, transition zone, working-class, middle-class and commuter zones.' },
      { n: 2, f: 'Hoyt sector model', b: 'Land uses extend as wedges or sectors along transport routes from the centre, rather than as complete rings.' },
      { n: 3, f: 'Multiple nuclei model', b: 'Cities develop around several centres, each with its own specialised land use.' },
      { n: 4, f: 'Bid-rent theory', b: 'Land values and rents are highest in the centre where accessibility is best, and fall with distance. Different land uses outbid others at different distances.' },
      { n: 5, f: 'Urban regeneration', b: 'Redevelopment of run-down urban areas to improve housing, business and the environment.' },
      { n: 6, f: 'Gentrification', b: 'The renovation of older urban housing by wealthier residents, raising house prices and changing the character of an area.' },
    ]),
    ...sub(T6, 'the-management-of-urban-settlements-9696', '6.4', [
      { n: 1, f: 'Causes of traffic congestion', b: 'Rising car ownership, road capacity limits, concentrated employment and poor public transport.' },
      { n: 2, f: 'Ways to reduce urban traffic congestion', b: 'Public transport investment, congestion charging, park-and-ride, cycling infrastructure and traffic management.' },
      { n: 3, f: 'Causes of urban air pollution', b: 'Vehicle emissions, industry, domestic fuel burning and construction dust.' },
      { n: 4, f: 'Urban sustainability', b: 'Managing cities so they meet current needs without harming future generations, for example through compact design, green space and efficient energy.' },
      { n: 5, f: 'Housing strategies in cities', b: 'Self-help schemes, upgrading informal settlements, social housing and site-and-service schemes.' },
    ]),

    // 7 Tropical environments
    ...sub(T7, 'tropical-climates-9696', '7.1', [
      { n: 1, f: 'Intertropical convergence zone (ITCZ)', b: 'The low-pressure belt near the equator where trade winds from both hemispheres converge. It migrates seasonally with the overhead sun.', src: TROP },
      { n: 2, f: 'Equatorial climate', b: 'High temperatures all year with a small annual range, and heavy convectional rainfall in every month.' },
      { n: 3, f: 'Tropical wet-dry (savanna) climate', b: 'Hot all year, with a distinct wet season when the ITCZ is overhead and a dry season when it moves away.' },
      { n: 4, f: 'Monsoon climate', b: 'A seasonal reversal of wind direction, bringing a wet summer and a dry winter.', src: TROP },
      { n: 5, f: 'Why does the rainfall pattern change with distance from the equator?', b: 'The ITCZ spends less time over places further from the equator, so the wet season shortens and the dry season lengthens.' },
    ]),
    ...sub(T7, 'landforms-of-tropical-environments-9696', '7.2', [
      { n: 1, f: 'Why is chemical weathering intense in the humid tropics?', b: 'Warm temperatures and abundant moisture speed chemical reactions, producing deep weathered regolith.' },
      { n: 2, f: 'Etchplain', b: 'A surface formed when deep chemical weathering strips away regolith, exposing the weathering front.' },
      { n: 3, f: 'Inselberg', b: 'An isolated resistant rock hill that stands above a surrounding plain, such as a bornhardt.', src: TROP },
      { n: 4, f: 'Tropical karst', b: 'Limestone landscape in the humid tropics with features such as cone karst and tower karst, formed by solution.' },
      { n: 5, f: 'Laterite (duricrust)', b: 'A hard iron- and aluminium-rich layer formed in tropical soils by leaching and repeated wetting and drying.' },
    ]),
    ...sub(T7, 'humid-tropical-rainforest-ecosystems-and-seasonally-humid-tropical-savanna-ecosystems-9696', '7.3', [
      { n: 1, f: 'Why is nutrient cycling fast in rainforests?', b: 'Heat and moisture decompose litter quickly, and nutrients are taken up rapidly by vegetation, so most are stored in biomass.' },
      { n: 2, f: 'Why are rainforest soils infertile when cleared?', b: 'Most nutrients are held in vegetation, not soil, and heavy rain leaches the remainder away.' },
      { n: 3, f: 'Rainforest vegetation structure', b: 'Layered: emergent trees, canopy, understorey and shrub layers, with high biodiversity.' },
      { n: 4, f: 'Savanna vegetation', b: 'Grassland with scattered drought-resistant trees, adapted to a dry season and to fire.' },
      { n: 5, f: 'Factors controlling savanna extent', b: 'Climate with a seasonal drought, soil, fire and grazing.' },
      { n: 6, f: 'Ferrallitic soil', b: 'A deep, leached, red tropical soil rich in iron and aluminium oxides and low in nutrients.' },
    ]),
    ...sub(T7, 'sustainable-management-of-tropical-environments-9696', '7.4', [
      { n: 1, f: 'Causes of tropical deforestation', b: 'Commercial and subsistence farming, logging, mining, infrastructure and settlement.' },
      { n: 2, f: 'Consequences of rainforest clearance', b: 'Loss of biodiversity, soil erosion, altered local climate and increased carbon dioxide.' },
      { n: 3, f: 'Sustainable management of rainforests', b: 'Selective logging, agroforestry, protected areas, ecotourism and debt-for-nature swaps.' },
      { n: 4, f: 'Desertification risk on savanna margins', b: 'Overgrazing, over-cultivation and drought can strip vegetation and degrade the soil.' },
      { n: 5, f: 'Agroforestry', b: 'Growing trees together with crops or livestock, giving products while protecting soil.' },
    ]),

    // 8 Coastal environments
    ...sub(T8, 'coastal-processes-9696', '8.1', [
      { n: 1, f: 'Factors affecting wave energy', b: 'Wind speed, wind duration and fetch (the distance of open water the wind crosses).', src: COAST },
      { n: 2, f: 'Constructive vs destructive waves', b: 'Constructive waves have a strong swash and build beaches. Destructive waves have a strong backwash and remove material.' },
      { n: 3, f: 'Marine erosion processes', b: 'Hydraulic action (including cavitation), abrasion (corrasion), attrition and solution (corrosion).' },
      { n: 4, f: 'Longshore drift', b: 'Swash moves material up the beach at an angle, and backwash returns it straight down, shifting sediment along the coast.' },
      { n: 5, f: 'Sediment cell', b: 'A stretch of coast within which sediment movement is largely self-contained, treated as a system with inputs, stores, transfers and outputs.', src: COAST },
      { n: 6, f: 'Subaerial processes on coasts', b: 'Weathering and mass movement acting on cliffs above the high tide level.' },
    ]),
    ...sub(T8, 'characteristics-and-formation-of-coastal-landforms-9696', '8.2', [
      { n: 1, f: 'How is a wave-cut platform formed?', b: 'Wave erosion undercuts a cliff, forming a notch. The cliff collapses and retreats, leaving a gently sloping platform.' },
      { n: 2, f: 'Sequence of erosional headland landforms', b: 'Crack, cave, arch, stack, stump.' },
      { n: 3, f: 'How is a spit formed?', b: 'Longshore drift deposits sediment where the coast changes direction, building a ridge. A recurved end forms from changing wave direction.' },
      { n: 4, f: 'Tombolo', b: 'A spit or bar that links an island to the mainland.', src: COAST },
      { n: 5, f: 'Coastal sand dune succession', b: 'Dunes develop from embryo dunes to fore dunes, yellow dunes and grey dunes as vegetation colonises and stabilises sand.' },
      { n: 6, f: 'Salt marsh', b: 'A vegetated, muddy area in sheltered tidal areas, where silt is trapped by salt-tolerant plants.' },
      { n: 7, f: 'Emergent vs submergent coasts', b: 'Emergent coasts form when sea level falls relative to land (raised beaches). Submergent coasts form when sea level rises (rias, fjords).' },
    ]),
    ...sub(T8, 'coral-reefs-9696', '8.3', [
      { n: 1, f: 'Conditions for coral reef growth', b: 'Warm water (typically 23–29 °C, rarely below about 18 °C), clear and shallow water with light for the algae in the coral, normal salinity and low sediment.' },
      { n: 2, f: 'Types of coral reef', b: 'Fringing reef, barrier reef and atoll.' },
      { n: 3, f: 'Coral bleaching', b: 'Corals expel the algae living in their tissue under stress, such as warmer water, leaving the coral white and weakened.', src: COAST },
      { n: 4, f: 'Darwin\'s theory of atoll formation', b: 'A volcanic island subsides as coral grows upwards, progressing from fringing to barrier reef to atoll.', src: COAST },
      { n: 5, f: 'Threats to coral reefs', b: 'Rising sea temperatures, ocean acidification, pollution, sedimentation, overfishing and physical damage.' },
    ]),
    ...sub(T8, 'sustainable-management-of-coasts-9696', '8.4', [
      { n: 1, f: 'Hard engineering of coasts', b: 'Sea walls, groynes, rock armour (riprap) and revetments.' },
      { n: 2, f: 'Soft engineering of coasts', b: 'Beach nourishment, dune stabilisation, and managed realignment (managed retreat).' },
      { n: 3, f: 'Managed retreat', b: 'Allowing the sea to flood or erode land in a controlled way, often creating salt marsh as natural defence.' },
      { n: 4, f: 'Integrated coastal zone management', b: 'Managing coasts as a whole, including all users, environments and uses, rather than single places.' },
      { n: 5, f: 'Cost-benefit analysis for coastal defence', b: 'Compares the costs of defence with the value of assets protected, to decide whether protection is justified.' },
    ]),

    // 9 Hazardous environments
    ...sub(T9, 'hazards-resulting-from-tectonic-processes-9696', '9.1', [
      { n: 1, f: 'Primary vs secondary impacts of an earthquake', b: 'Primary impacts are caused directly by the event, such as shaking and building collapse. Secondary impacts follow from them, such as fire, disease and lost income. Tsunami, landslides and liquefaction are earthquake hazards.' },
      { n: 2, f: 'Volcanic hazards', b: 'Lava flows, pyroclastic flows, ash fall, lahars and volcanic gases.' },
      { n: 3, f: 'Tsunami', b: 'A series of large sea waves, generated by sudden displacement of water, often by an undersea earthquake.', src: HAZ },
      { n: 4, f: 'Factors affecting hazard impact', b: 'Magnitude, population density, level of development, preparedness, building quality and time of day.' },
      { n: 5, f: 'Hazard prediction and prevention', b: 'Volcanoes can be monitored through gas, tilt and seismic signals. Earthquakes cannot be reliably predicted.' },
      { n: 6, f: 'Liquefaction', b: 'Shaking turns saturated loose sediment into a fluid-like state, causing buildings to sink or tilt.', src: HAZ },
    ]),
    ...sub(T9, 'hazards-resulting-from-mass-movements-9696', '9.2', [
      { n: 1, f: 'Rapid mass movement hazards', b: 'Landslides, rockfalls, avalanches, mudflows and debris flows.' },
      { n: 2, f: 'Triggers of mass movement', b: 'Heavy rainfall, earthquakes, undercutting by rivers or waves, deforestation and human loading or excavation.' },
      { n: 3, f: 'Lahar', b: 'A mudflow of volcanic ash and water, often triggered by eruption melting ice or by heavy rain.', src: HAZ },
      { n: 4, f: 'Reducing mass movement hazard', b: 'Monitoring, slope stabilisation, drainage, restricting building and hazard mapping.' },
    ]),
    ...sub(T9, 'hazards-resulting-from-atmospheric-disturbances-9696', '9.3', [
      { n: 1, f: 'Tropical cyclone hazards', b: 'High winds, storm surges, flooding from heavy rain and landslides.' },
      { n: 2, f: 'Tornado', b: 'A narrow, rotating column of air extending from a thunderstorm to the ground, with very high wind speeds.' },
      { n: 3, f: 'Storm surge', b: 'A rise in sea level caused by low pressure and strong winds pushing water on to the coast.', src: HAZ },
      { n: 4, f: 'Saffir-Simpson scale', b: 'Categorises hurricanes from 1 to 5 by sustained wind speed.' },
      { n: 5, f: 'Predicting atmospheric hazards', b: 'Satellite tracking, radar and computer models give warnings. Track and intensity forecasts can still be uncertain.' },
    ]),
    ...sub(T9, 'sustainable-management-in-hazardous-environments-9696', '9.4', [
      { n: 1, f: 'Hazard management cycle', b: 'Mitigation, preparedness, response and recovery. The cycle repeats after each event.' },
      { n: 2, f: 'Risk equation', b: 'Risk is often summarised as hazard × vulnerability. Higher vulnerability or a lower capacity to cope increases risk.' },
      { n: 3, f: 'Ways to reduce vulnerability', b: 'Land-use planning, building codes, education, early warning systems and insurance.' },
      { n: 4, f: 'Park model of hazard response', b: 'A graph of quality of life over time after a disaster, showing relief, rehabilitation and reconstruction.' },
      { n: 5, f: 'Why do poorer countries suffer more from hazards?', b: 'Less money for protection, poor building quality, weaker warning systems and slower recovery.' },
    ]),

    // 10 Hot arid and semi-arid environments
    ...sub(T10, 'hot-arid-and-semi-arid-climates-9696', '10.1', [
      { n: 1, f: 'Why do hot deserts occur in the subtropics (about 20–30° latitude)?', b: 'Sinking dry air of the subtropical high-pressure belt (Hadley cell) suppresses cloud and rainfall.' },
      { n: 2, f: 'Other causes of aridity', b: 'Continentality (distance from the sea), rain shadow effects and cold ocean currents.' },
      { n: 3, f: 'Characteristics of hot arid climates', b: 'Low and unreliable rainfall, very high daytime temperatures, a large diurnal range and high evaporation.' },
      { n: 4, f: 'Semi-arid climate', b: 'Slightly wetter than hot desert, with a short rainy season, and more variable rainfall.' },
      { n: 5, f: 'Aridity index', b: 'Compares precipitation with potential evapotranspiration. Lower values mean greater aridity.', src: ARID },
    ]),
    ...sub(T10, 'landforms-of-hot-arid-and-semi-arid-environments-9696', '10.2', [
      { n: 1, f: 'Wind erosion processes', b: 'Deflation (removal of loose material) and abrasion (sandblasting).' },
      { n: 2, f: 'Barchan dune', b: 'A crescent-shaped dune with its horns pointing downwind, formed where sand is limited and wind direction is constant.' },
      { n: 3, f: 'Wadi', b: 'A dry river valley that carries water only in flash floods after rare, intense rain.' },
      { n: 4, f: 'Pediment and bajada (bahada)', b: 'A pediment is a gently sloping erosional bedrock surface at the foot of a mountain. A bajada (also spelled bahada) is merged alluvial fans, a depositional surface.' },
      { n: 5, f: 'Playa (salt lake)', b: 'A flat basin where water collects and evaporates, leaving salt deposits.', src: ARID },
      { n: 6, f: 'Inselberg (arid environments)', b: 'A residual rock hill rising abruptly above a plain, left as surrounding rock is worn away.' },
    ]),
    ...sub(T10, 'soils-and-vegetation-9696', '10.3', [
      { n: 1, f: 'Features of desert soils', b: 'Thin, coarse, low in organic matter and often saline because evaporation draws salts upward.' },
      { n: 2, f: 'Salinisation', b: 'Accumulation of salts in the soil surface layer as evaporation exceeds rainfall, harming plants.', src: ARID },
      { n: 3, f: 'Xerophytic adaptations', b: 'Deep or widespread roots, small waxy leaves, water storage in stems, and shedding leaves in drought.' },
      { n: 4, f: 'Ephemeral plants', b: 'Plants that complete their life cycle in a short time after rain and survive dry periods as seeds.', src: ARID },
    ]),
    ...sub(T10, 'sustainable-management-of-hot-arid-and-semi-arid-environments-9696', '10.4', [
      { n: 1, f: 'Desertification', b: 'Land degradation in dry areas, caused by climate variation and human activity, which reduces land productivity.', src: ARID },
      { n: 2, f: 'Human causes of desertification', b: 'Overgrazing, over-cultivation, deforestation for fuelwood and poor irrigation practice.' },
      { n: 3, f: 'Strategies to reduce desertification', b: 'Planting trees as shelterbelts, controlled grazing, stone lines and terracing, and better irrigation.' },
      { n: 4, f: 'Drip irrigation', b: 'Delivers water directly to plant roots, reducing evaporation and saving water.' },
      { n: 5, f: 'Risks of irrigation in dry lands', b: 'Waterlogging and salinisation, depleted groundwater and conflicts over water.' },
    ]),

    // 11 Production, location and change
    ...sub(T11, 'agricultural-systems-and-food-production-9696', '11.1', [
      { n: 1, f: 'Agricultural system', b: 'A farm seen as inputs (labour, seed, capital), processes or throughputs (farming operations) and outputs (crops, livestock, products), with feedback.', src: PROD },
      { n: 2, f: 'Subsistence vs commercial farming', b: 'Subsistence produces food mainly for the farmer\'s household. Commercial produces mainly to sell for profit.' },
      { n: 3, f: 'Physical factors in agriculture', b: 'Climate, relief, soil and water availability.' },
      { n: 4, f: 'Human and economic factors in agriculture', b: 'Capital, labour, markets, transport, land tenure and government policy.' },
      { n: 5, f: 'Von Thünen model', b: 'Land use around a market forms rings set by locational rent. Perishable, high-output uses are nearest the market.' },
      { n: 6, f: 'Food security', b: 'Reliable access by all people to enough safe, nutritious food for a healthy life.' },
    ]),
    ...sub(T11, 'the-management-of-agricultural-change-9696', '11.2', [
      { n: 1, f: 'Green Revolution', b: 'The adoption of high-yielding crop varieties, fertilisers, pesticides and irrigation to raise food production.' },
      { n: 2, f: 'Problems linked to the Green Revolution', b: 'High input costs, environmental damage, inequality between rich and poor farmers and reliance on chemicals.' },
      { n: 3, f: 'Land reform', b: 'Changes to the ownership or distribution of farmland, aiming to make farming more efficient or fairer.' },
      { n: 4, f: 'Organic and sustainable farming', b: 'Uses natural fertilisers, crop rotation and low chemical inputs to protect soil and ecosystems.' },
      { n: 5, f: 'Impacts of globalisation on agriculture', b: 'Trade, agribusiness and supply chains raise specialisation and exports but can disadvantage small farmers.' },
    ]),
    ...sub(T11, 'manufacturing-and-related-service-industry-9696', '11.3', [
      { n: 1, f: 'Industrial system', b: 'Inputs (raw materials, labour, energy, capital), processes (manufacturing) and outputs (goods, waste).' },
      { n: 2, f: 'Weber\'s least-cost theory', b: 'Factories locate where total costs of transport, labour and agglomeration are lowest.' },
      { n: 3, f: 'Footloose industry', b: 'Industry not tied to a particular resource location, typically light and high-value, such as electronics.', src: PROD },
      { n: 4, f: 'Agglomeration economies', b: 'Benefits to firms from clustering together, such as shared suppliers, labour and knowledge.', src: PROD },
      { n: 5, f: 'Deindustrialisation', b: 'The decline in manufacturing employment and output in an area or country.' },
      { n: 6, f: 'New international division of labour', b: 'Manufacturing shifting from high-income countries to lower-cost countries, with TNCs organising global production.' },
    ]),
    ...sub(T11, 'the-management-of-change-in-manufacturing-industry-9696', '11.4', [
      { n: 1, f: 'Causes of industrial decline in older regions', b: 'Loss of competitiveness, resource exhaustion, global competition and outdated technology.' },
      { n: 2, f: 'Strategies to regenerate industrial areas', b: 'Redeveloping brownfield sites, grants and tax incentives, new service industries, infrastructure upgrades and skills training.' },
      { n: 3, f: 'Special economic zone', b: 'A designated area with incentives such as tax breaks to attract investment and industry.' },
      { n: 4, f: 'Multiplier effect in industry', b: 'New investment creates jobs and demand that stimulate further jobs and growth in the region.' },
    ]),

    // 12 Environmental management
    ...sub(T12, 'sustainable-energy-supplies-9696', '12.1', [
      { n: 1, f: 'Renewable vs non-renewable energy', b: 'Renewable energy is replenished naturally and does not run out. Non-renewable sources are finite and will be exhausted.' },
      { n: 2, f: 'Examples of renewable energy', b: 'Solar, wind, hydroelectric (HEP), geothermal, tidal, wave and biofuels.' },
      { n: 3, f: 'Energy mix', b: 'The combination of different energy sources used in a country.', src: ENVM },
      { n: 4, f: 'Advantages of fossil fuels', b: 'Reliable, high energy density, established technology and infrastructure, and relatively cheap.' },
      { n: 5, f: 'Disadvantages of fossil fuels', b: 'Emit carbon dioxide, finite, cause air pollution and extraction harms environments.' },
      { n: 6, f: 'Energy security', b: 'Reliable and affordable access to energy supplies, reducing dependence on imports or unstable sources.', src: ENVM },
    ]),
    ...sub(T12, 'the-management-of-energy-supply-9696', '12.2', [
      { n: 1, f: 'Ways to manage energy supply sustainably', b: 'Increase renewables, improve efficiency, conserve energy and diversify the energy mix.' },
      { n: 2, f: 'Energy conservation vs energy efficiency', b: 'Conservation is using less energy overall. Efficiency is getting more output from each unit of energy.' },
      { n: 3, f: 'Barriers to renewable energy', b: 'High set-up costs, intermittent supply, grid limits and public objections.' },
      { n: 4, f: 'Nuclear power: advantages and disadvantages', b: 'Large output with low carbon emissions, but high costs, radioactive waste and accident risk.' },
    ]),
    ...sub(T12, 'environmental-degradation-9696', '12.3', [
      { n: 1, f: 'Environmental degradation', b: 'The deterioration of the environment through depletion of resources, loss of ecosystems and pollution.' },
      { n: 2, f: 'Causes of soil degradation', b: 'Overgrazing, deforestation, monoculture, poor irrigation and compaction.' },
      { n: 3, f: 'Causes of water pollution', b: 'Sewage, industrial waste, fertiliser and pesticide runoff, and oil spills.' },
      { n: 4, f: 'Eutrophication', b: 'Nutrient enrichment of water, causing algal blooms. Oxygen is depleted when algae die and decompose, killing aquatic life.', src: ENVM },
      { n: 5, f: 'Causes of air pollution', b: 'Burning fossil fuels, vehicles, industry and burning of biomass.' },
    ]),
    ...sub(T12, 'the-management-of-a-degraded-environment-9696', '12.4', [
      { n: 1, f: 'Ways to restore degraded land', b: 'Reforestation, soil conservation, remediation of polluted sites and reintroduction of native species.' },
      { n: 2, f: 'Polluter pays principle', b: 'Those who cause pollution should pay the costs of managing or cleaning it up.' },
      { n: 3, f: 'Role of governments and international agreements', b: 'They set laws and standards, give incentives and coordinate action across borders.' },
      { n: 4, f: 'Environmental impact assessment', b: 'A study of the likely environmental effects of a project before it goes ahead.' },
    ]),

    // 13 Global interdependence
    ...sub(T13, 'trade-flows-and-trading-patterns-9696', '13.1', [
      { n: 1, f: 'Visible vs invisible trade', b: 'Visible trade is physical goods. Invisible trade is services such as tourism, banking and insurance.', src: GLOB },
      { n: 2, f: 'Balance of trade', b: 'Value of exports minus value of imports. A surplus means exports exceed imports; a deficit means imports exceed exports.' },
      { n: 3, f: 'Trading bloc', b: 'A group of countries that reduce trade barriers among themselves, such as a free trade area or customs union.' },
      { n: 4, f: 'Tariff and quota', b: 'A tariff is a tax on imports. A quota is a limit on the quantity of imports.' },
      { n: 5, f: 'World Trade Organization (WTO)', b: 'An organisation that sets rules for international trade and settles trade disputes.', src: GLOB },
      { n: 6, f: 'Terms of trade problem for primary exporters', b: 'Prices of primary products are volatile and tend to rise more slowly than manufactured goods, so exporters may lose out.' },
    ]),
    ...sub(T13, 'international-debt-and-international-aid-9696', '13.2', [
      { n: 1, f: 'Causes of international debt', b: 'Borrowing for development, falling commodity prices, rising interest rates, corruption and conflict.' },
      { n: 2, f: 'Effects of high debt', b: 'Money used for debt repayment instead of health and education, and reduced investment.' },
      { n: 3, f: 'Bilateral vs multilateral aid', b: 'Bilateral aid goes directly from one country to another. Multilateral aid is channelled through organisations such as the World Bank.', src: GLOB },
      { n: 4, f: 'Tied aid', b: 'Aid that must be spent on goods or services from the donor country.', src: GLOB },
      { n: 5, f: 'Debt relief', b: 'Reduction or cancellation of debt so the country can spend more on development.' },
      { n: 6, f: 'Arguments for and against aid', b: 'For: reduces poverty, supports health and education. Against: may create dependency, corruption and tied conditions.' },
    ]),
    ...sub(T13, 'the-development-of-international-tourism-9696', '13.3', [
      { n: 1, f: 'Reasons for growth of international tourism', b: 'Rising incomes, cheaper flights, more leisure time, internet booking and growing destinations.' },
      { n: 2, f: 'Factors attracting tourists to a destination', b: 'Climate, scenery, culture and heritage, accessibility, safety, and facilities.' },
      { n: 3, f: 'Butler tourist area life cycle', b: 'Stages: exploration, involvement, development, consolidation, stagnation, then decline or rejuvenation.', src: GLOB },
      { n: 4, f: 'Economic benefits of tourism', b: 'Jobs, foreign exchange and the multiplier effect.' },
      { n: 5, f: 'Leakage in tourism', b: 'Money paid by tourists that leaves the local economy, such as profits to overseas companies.', src: GLOB },
    ]),
    ...sub(T13, 'the-management-of-a-tourist-destination-9696', '13.4', [
      { n: 1, f: 'Carrying capacity of a destination', b: 'The number of visitors a place can sustain without unacceptable damage to its environment, society or visitor experience.', src: GLOB },
      { n: 2, f: 'Sustainable tourism', b: 'Tourism managed to meet visitor needs while protecting the environment and benefiting local communities.' },
      { n: 3, f: 'Ecotourism', b: 'Small-scale, nature-based tourism that aims to conserve the environment and support local people.' },
      { n: 4, f: 'Visitor management strategies', b: 'Zoning, visitor limits, entry fees, footpath management and education.' },
      { n: 5, f: 'Environmental impacts of tourism', b: 'Habitat damage, pollution, erosion, high water use and waste.' },
    ]),

    // 14 Economic transition
    ...sub(T14, 'national-development-9696', '14.1', [
      { n: 1, f: 'Economic vs social indicators of development', b: 'Economic indicators measure income, such as GNI per capita. Social indicators measure health, education and welfare.' },
      { n: 2, f: 'Human Development Index (HDI)', b: 'A UNDP composite of health (life expectancy), education (mean and expected years of schooling) and income (GNI per capita, PPP).', src: ECON },
      { n: 3, f: 'Rostow\'s model of development', b: 'Economies move through stages: traditional society, preconditions for take-off, take-off, drive to maturity and high mass consumption.' },
      { n: 4, f: 'Newly industrialising country (NIC)', b: 'A country that has moved rapidly from an agricultural to an industrial economy, with fast growth in manufacturing and exports.' },
      { n: 5, f: 'Clark-Fisher model', b: 'As economies develop, employment shifts from the primary sector to secondary and then to tertiary.', src: ECON },
      { n: 6, f: 'Core-periphery model', b: 'Wealth and growth concentrate in the core, while peripheral regions lag behind, though the core can also spread growth outward.' },
    ]),
    ...sub(T14, 'the-globalisation-of-economic-activity-9696', '14.2', [
      { n: 1, f: 'Globalisation', b: 'Increasing interconnection of countries through trade, finance, information, people and culture.' },
      { n: 2, f: 'Transnational corporation (TNC)', b: 'A company that operates in more than one country, with headquarters usually in a high-income country.' },
      { n: 3, f: 'Offshoring', b: 'Moving part of a firm\'s production or services to another country, often to cut costs.', src: ECON },
      { n: 4, f: 'Benefits of TNCs to host countries', b: 'Jobs, investment, technology transfer and tax revenue.' },
      { n: 5, f: 'Problems linked to TNCs for host countries', b: 'Profit leaving the country, low wages and poor conditions, environmental damage and dependence.' },
      { n: 6, f: 'Factors helping globalisation', b: 'Transport and communications technology, trade liberalisation and containerisation.' },
    ]),
    ...sub(T14, 'regional-development-within-countries-9696', '14.3', [
      { n: 1, f: 'Regional inequality', b: 'Differences in income, jobs and services between regions within one country.' },
      { n: 2, f: 'Cumulative causation (Myrdal)', b: 'Growth in a core region attracts investment and people, increasing its advantages. Peripheral regions suffer backwash effects.', src: ECON },
      { n: 3, f: 'Backwash vs spread effects', b: 'Backwash is the drain of resources from periphery to core. Spread effects are benefits that move outward from the core.', src: ECON },
      { n: 4, f: 'Causes of regional differences', b: 'Resources, accessibility, history of industry, government policy and links to global markets.' },
      { n: 5, f: 'Peripheral region', b: 'A region far from the core, often with lower incomes, fewer jobs, ageing population and poorer services.' },
    ]),
    ...sub(T14, 'the-management-of-regional-development-9696', '14.4', [
      { n: 1, f: 'Strategies to reduce regional inequality', b: 'Investment in infrastructure, grants and tax incentives, relocation of government offices and support for local businesses.' },
      { n: 2, f: 'Growth pole', b: 'A centre of economic activity where investment is concentrated, expected to stimulate growth in the surrounding region.' },
      { n: 3, f: 'Top-down vs bottom-up development', b: 'Top-down is planned and funded by government. Bottom-up involves local communities in planning and managing projects.' },
      { n: 4, f: 'Role of transport in regional development', b: 'Better roads, rail and ports improve access to markets, labour and investment.' },
      { n: 5, f: 'Evaluating regional development schemes', b: 'Judge by jobs created, income growth, environmental impact, cost and whether benefits reach local people.' },
    ]),
  ],
};
