/**
 * D-444 -- flashcards for Cambridge O Level Environmental Management 5014 (2027-2029).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 5014); origin 'revision-notes'.
 *
 * 5014 shares its 2027-2029 subject content with IGCSE 0680; this deck is
 * written separately for 5014, from Marlbridge's own 5014 2027-2029 study
 * guides and revision notes (rocks, ores and minerals; energy resources; land;
 * water; the atmosphere; ecosystems; natural hazards; human population; exam
 * preparation). Worked figures are invented for illustration. Not tiered.
 * Plain text only (see types.ts).
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

const ROCK = 'o-level-environmental-management-rocks-ores-minerals-revision-notes';
const ENERGY = 'o-level-environmental-management-energy-resources-revision-notes';

const NR = 'natural-resources-5014-2027';
const LAND = 'land-5014-2027';
const WAT = 'water-5014-2027';
const ATM = 'the-atmosphere-and-human-activities-5014-2027';
const ECO = 'ecosystems-biodiversity-and-fieldwork-5014-2027';
const HAZ = 'natural-hazards-5014-2027';
const POP = 'human-population-5014-2027';

export const DECK_CAMBRIDGE_O_LEVEL_ENVIRONMENTAL_MANAGEMENT: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'environmental-management',
  syllabusCode: '5014',
  syllabusSeries: '2027-2029',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Natural resources
    ...sub(NR, 'formation-of-rocks-5014-2027', '1.1', [
      { n: 1, f: 'Igneous rock', b: 'Forms when magma or lava cools and crystallises. Granite cools slowly underground (large crystals); basalt cools quickly at the surface (small crystals).', src: ROCK },
      { n: 2, f: 'Sedimentary rock', b: 'Forms when layers are deposited, then compacted and cemented. Examples: limestone, sandstone and shale.', src: ROCK },
      { n: 3, f: 'Metamorphic rock', b: 'Existing rock changed by heat and/or pressure, without melting. Marble comes from limestone and slate from shale.', src: ROCK },
      { n: 4, f: 'Name the eight processes of the rock cycle', b: 'Weathering, erosion, transportation, deposition, sedimentation, compaction, cementation and crystallisation.' },
      { n: 5, f: 'Is shale permeable? Explain.', b: 'No. Although it is sedimentary, shale is impermeable: water cannot pass through its pore spaces. Limestone and sandstone are permeable; igneous and metamorphic rocks are impermeable.' },
    ]),
    ...sub(NR, 'extraction-of-rocks-ores-and-minerals-5014-2027', '1.2', [
      { n: 1, f: 'Define an ore', b: 'Rock containing minerals and metals.' },
      { n: 2, f: 'Surface vs subsurface extraction', b: 'Surface: material is removed from near the surface by opencast, open-pit, open-cut or strip mining.\nSubsurface: deep or shaft mining reaches deposits far underground.' },
      { n: 3, f: 'What are the two forms of biological extraction?', b: 'Phytomining (plants take up metal compounds, are burned, and the metal is recovered from the ash) and bioleaching (bacteria release metal compounds from low-grade ore into solution).' },
      { n: 4, f: 'What impacts can extraction have?', b: 'Loss of habitat and biodiversity; air, land, noise, visual and water pollution; water use; waste; and changes to jobs, local and national economies, and facilities and infrastructure.' },
      { n: 5, f: 'Land restoration', b: 'Returning extraction sites towards their earlier state: replacing overburden, improving soil, bioremediation and tree planting.', src: ROCK },
      { n: 6, f: 'Repurposing land', b: 'Giving old extraction sites a new use: landfill, lakes, recreation or nature reserves.', src: ROCK },
    ]),
    ...sub(NR, 'sustainable-management-of-rocks-ores-and-minerals-5014-2027', '1.3', [
      { n: 1, f: 'Why are mineral ores called finite resources?', b: 'They are used up faster than they are replaced by natural processes.' },
      { n: 2, f: 'Define sustainable management of resources', b: 'The use of strategies that meet the needs of the present without compromising the ability of future generations to meet their own needs.' },
      { n: 3, f: 'List seven strategies for sustainable use of rocks and minerals', b: 'Reduce and reuse; recycling; more efficient extraction; avoiding resource depletion; legislation; enforcement; alternative materials.' },
      { n: 4, f: 'Why does legislation alone not protect mineral resources?', b: 'Laws set rules but only work if they are enforced, and enforcement needs money and staff.' },
    ]),
    ...sub(NR, 'energy-resources-5014-2027', '1.4', [
      { n: 1, f: 'Coal formation', b: 'Swamp plants partly decay in waterlogged, low-oxygen conditions, are buried, and are changed by heat and pressure over millions of years.', src: ENERGY },
      { n: 2, f: 'Describe the formation of petroleum and natural gas', b: 'Marine organisms die and settle in sea-bed mud, are buried without oxygen, and are changed by heat and pressure over millions of years. The fuels collect beneath impermeable rock.' },
      { n: 3, f: 'Classify nuclear power, tidal power, biogas and natural gas', b: 'Renewable: tidal power, biogas.\nNon-renewable: nuclear power (uses uranium), natural gas (a fossil fuel).' },
      { n: 4, f: 'How do hydro-electric, tidal and wave power generate electricity?', b: 'Moving water turns a turbine, which drives a generator.' },
      { n: 5, f: 'Give one benefit and one limitation of wind power', b: 'Benefit: no emissions during generation.\nLimitation: output depends on the wind, so supply is intermittent.' },
      { n: 6, f: 'How do wealth and climate affect energy demand?', b: 'Richer people and countries use more energy for transport, appliances and industry. Very hot or very cold climates raise demand for cooling or heating.' },
    ]),
    ...sub(NR, 'conservation-and-management-of-energy-resources-5014-2027', '1.5', [
      { n: 1, f: 'List eight ways of managing energy resources', b: 'Reducing consumption; insulation; energy-efficient devices and vehicles, including electric vehicles; exploiting existing resources; education; transport policies; battery storage; developing new energy resources.' },
      { n: 2, f: 'Where does blue hydrogen come from, and where does green hydrogen come from?', b: 'Blue hydrogen: produced from natural gas.\nGreen hydrogen: produced using renewable resources.' },
      { n: 3, f: 'Ground source vs air source heat pumps', b: 'Ground source: transfer heat from the ground to heat a building.\nAir source: transfer heat from the air to heat a building.' },
      { n: 4, f: 'Why are insulation and electric vehicles said to save energy "over time"?', b: 'They reduce energy use for years, but they cost more at the start than behaviour changes such as switching off devices.' },
    ]),
    ...sub(NR, 'fracking-5014-2027', '1.6', [
      { n: 1, f: 'Define fracking', b: 'The extraction of natural gas or petroleum from shale rock by hydraulic fracturing.' },
      { n: 2, f: 'Describe how hydraulic fracturing works', b: 'Water, sand and chemicals are pumped down a well at high pressure to crack the impermeable shale, so the gas or oil can escape through the cracks to the well.' },
      { n: 3, f: 'Give two benefits of fracking for a country', b: 'A larger national gas and oil supply with fewer imports, and jobs and tax income. Gas also emits less carbon dioxide than coal when generating electricity.' },
      { n: 4, f: 'Give two environmental limitations of fracking', b: 'It uses large amounts of water and risks contaminating ground water. It can also trigger small earthquakes and leak methane, and it is still a fossil fuel.' },
    ]),

    // 2 Land
    ...sub(LAND, 'soils-and-crop-growth-5014-2027', '2.1', [
      { n: 1, f: 'Name the four components of soil', b: 'Mineral particles (sand, silt and clay), organic matter, air and water.' },
      { n: 2, f: 'What makes loam the best soil for farming?', b: 'A balanced mix of particles and pore spaces, so it holds moisture but drains well, has organic and mineral nutrients, and is easy to cultivate.' },
      { n: 3, f: 'What do nitrogen, phosphorus and potassium do for crops?', b: 'Nitrogen (as nitrate) supports leaf growth and protein; phosphorus (as phosphate) supports roots; potassium supports flowering, fruiting and disease resistance.' },
      { n: 4, f: 'Why does soil pH matter for crops?', b: 'It affects which nutrients plants can absorb. Most crops grow best in soil that is close to neutral, so acidic soils are often limed.' },
    ]),
    ...sub(LAND, 'food-production-and-crop-yield-5014-2027', '2.2', [
      { n: 1, f: 'Arable vs pastoral vs mixed farming', b: 'Arable: growing crops.\nPastoral: rearing livestock.\nMixed: both on the same farm.' },
      { n: 2, f: 'Intensive farming vs monoculture', b: 'Intensive: high inputs of labour, capital, fertiliser or machinery to get a high yield from a small area.\nMonoculture: growing a single crop over a large area.' },
      { n: 3, f: 'How do crop rotation and intercropping help yields?', b: 'Rotation changes the crop each season so nutrients are not exhausted and pests do not build up. Intercropping grows different crops together so they use space and nutrients efficiently.' },
      { n: 4, f: 'What are hydroponics and aeroponics?', b: 'Growing plants without soil in controlled environments: hydroponics with roots in nutrient solution, aeroponics with roots misted by nutrient solution.' },
      { n: 5, f: 'How can growing cash crops or biofuels cause food shortages?', b: 'Land that could grow food for local people is used for crops sold abroad or turned into fuel.' },
    ]),
    ...sub(LAND, 'soil-erosion-5014-2027', '2.3', [
      { n: 1, f: 'Why does deforestation lead to soil erosion?', b: 'Without roots to bind the soil and leaves to intercept rain, rain and wind remove the exposed topsoil.' },
      { n: 2, f: 'How can soil erosion lead to famine and migration?', b: 'Loss of fertile topsoil lowers crop yields and can lead to desertification, causing malnutrition, famine and the displacement of people.' },
      { n: 3, f: 'What are bunds, and how do they reduce erosion?', b: 'Low walls of earth or stones built along the contour of a slope. They slow run-off, trap soil and help water soak in.' },
      { n: 4, f: 'How does adding organic matter reduce soil erosion?', b: 'It improves soil structure, binding particles together and helping the soil hold water, so it is less easily washed or blown away.' },
    ]),

    // 3 Water
    ...sub(WAT, 'water-sources-and-supply-5014-2027', '3.1', [
      { n: 1, f: 'Infiltration vs surface run-off vs through-flow', b: 'Infiltration: water soaking into the soil.\nSurface run-off: water flowing over the ground surface.\nThrough-flow: water moving sideways through the soil.' },
      { n: 2, f: 'Where can fresh water be obtained?', b: 'From the atmosphere (rain), surface water (lakes and rivers), ground water (wells and aquifers) and desalinated sea water.' },
      { n: 3, f: 'Put the water treatment stages in order and give the purpose of each', b: 'Screening removes large objects; sedimentation lets particles settle; filtration through sand and gravel removes fine particles; chlorination kills microorganisms. The result is potable (drinkable) water.' },
      { n: 4, f: 'How does reverse osmosis desalinate water?', b: 'Pressure forces sea water through a membrane that holds back the salt. It usually uses less energy than distillation, but the membranes need maintenance.' },
      { n: 5, f: 'Give two benefits and two limitations of a multipurpose dam', b: 'Benefits: hydro-electric power, flood control, irrigation water, storage, recreation.\nLimitations: high cost, people and habitats displaced, silt trapped, river ecosystems downstream disrupted.' },
    ]),
    ...sub(WAT, 'water-pollution-5014-2027', '3.2', [
      { n: 1, f: 'Explain how fertiliser run-off can kill fish in a lake', b: 'Nutrients cause an algal bloom, which blocks light so plants die. Bacteria decomposing the dead material use up the oxygen, and fish suffocate. This is eutrophication.' },
      { n: 2, f: 'Why do top predators have the highest levels of some toxins?', b: 'Biomagnification: the toxin builds up in each organism (bioaccumulation) and its concentration increases at each step up the food chain.' },
      { n: 3, f: 'Which diseases are linked to sewage in water?', b: 'Infectious waterborne diseases such as cholera, spread when untreated sewage contaminates drinking water.' },
      { n: 4, f: 'How can acid rain pollute fresh water?', b: 'Sulfur dioxide and nitrogen oxides from the air dissolve in rain, which lowers the pH of lakes and rivers and harms aquatic organisms.' },
    ]),
    ...sub(WAT, 'water-related-diseases-5014-2027', '3.3', [
      { n: 1, f: 'Malaria vs cholera: how is each spread?', b: 'Malaria: vector-borne, spread by the bite of an infected female Anopheles mosquito.\nCholera: waterborne, spread by drinking water or eating food contaminated with the bacterium.' },
      { n: 2, f: 'Why do insecticide-treated bed nets reduce malaria?', b: 'Anopheles mosquitoes bite mainly at night, so nets protect sleepers, and the insecticide kills mosquitoes that land on them.' },
      { n: 3, f: 'Why does draining standing water help control malaria?', b: 'Mosquitoes lay their eggs in standing water, so removing it reduces the number of vectors.' },
      { n: 4, f: 'Give a limitation of vaccination as a way to control cholera', b: 'Vaccines may not reach everyone at risk, especially in poor or disaster-hit areas, and they do not replace the need for clean water and sanitation.' },
    ]),
    ...sub(WAT, 'marine-aquaculture-5014-2027', '3.4', [
      { n: 1, f: 'Define marine aquaculture', b: 'Farming marine species, such as fish, crustaceans and seaweeds, in captivity.' },
      { n: 2, f: 'Overfishing vs overharvesting', b: 'Overfishing: catching fish faster than stocks can reproduce.\nOverharvesting: taking any wild species, such as shellfish or seaweed, faster than it can recover.' },
      { n: 3, f: 'Give two problems marine aquaculture can cause', b: 'Farmed animals can escape and spread disease to wild stocks, and waste and uneaten feed cause nutrient enrichment. Wild fish may also be caught to feed farmed species.' },
      { n: 4, f: 'How do mesh sizes, quotas and closed seasons protect fish stocks?', b: 'Larger mesh lets young fish escape to breed; quotas limit the total catch; closed seasons stop fishing while fish breed.' },
    ]),
    ...sub(WAT, 'oil-pollution-5014-2027', '3.5', [
      { n: 1, f: 'Name sources of oil pollution at sea', b: 'Off-shore oil extraction, pipelines, shipping and tanker accidents, cleaning tanks at sea, and refineries on shore.' },
      { n: 2, f: 'Why is oil so harmful to seabirds?', b: 'It coats their feathers, which then lose their insulation and waterproofing, and birds swallow it while preening.' },
      { n: 3, f: 'What is MARPOL?', b: 'The International Convention for the Prevention of Pollution from Ships, which sets international rules to prevent pollution, including oil discharges, from ships.' },
      { n: 4, f: 'Prevention vs minimising the impact of oil spills', b: 'Prevention: MARPOL, double-hulled tankers, risk assessments, regular maintenance.\nMinimising impact: improved navigation, booms, sorbents, skimmers, detergent sprays, controlled burning.' },
    ]),
    ...sub(WAT, 'plastic-pollution-5014-2027', '3.6', [
      { n: 1, f: 'Does a bioplastic always biodegrade?', b: 'No. Bioplastics are made fully or partly from biological material, but some are not biodegradable.' },
      { n: 2, f: 'Define microplastics', b: 'Plastic pieces smaller than 5 mm, formed when larger plastic items break down.' },
      { n: 3, f: 'How do plastics harm marine animals?', b: 'Animals become entangled, or mistake plastic for food, and plastics and their chemicals build up in organisms and food chains.' },
      { n: 4, f: 'Suggest ways to reduce plastic pollution', b: 'Use alternative packaging, avoid single-use plastics, dispose of waste safely, recycle, and pass and enforce laws.' },
    ]),

    // 4 The atmosphere and human activities
    ...sub(ATM, 'the-atmosphere-5014-2027', '4.1', [
      { n: 1, f: 'Give the approximate percentages of the main gases in dry air', b: 'Nitrogen about 78%, oxygen about 21%, argon just under 1%, carbon dioxide about 0.04%.' },
      { n: 2, f: 'Which atmospheric layer contains the ozone layer, and which holds our weather?', b: 'The ozone layer is in the stratosphere. Weather happens in the troposphere, the lowest layer.' },
      { n: 3, f: 'Why is the natural greenhouse effect necessary for life?', b: 'Greenhouse gases trap some of the heat radiated from the Earth’s surface, keeping it warm enough for liquid water.' },
      { n: 4, f: 'Name four greenhouse gases', b: 'Carbon dioxide, methane, water vapour and nitrous oxide.' },
    ]),
    ...sub(ATM, 'climate-change-5014-2027', '4.2', [
      { n: 1, f: 'Natural vs enhanced greenhouse effect', b: 'Natural: keeps the Earth warm enough for life.\nEnhanced: extra warming caused by greenhouse gases added by human activities.' },
      { n: 2, f: 'Name human activities that release methane', b: 'Rice paddies, cattle farming, landfill sites and leaks from gas extraction.' },
      { n: 3, f: 'Why does global warming make sea level rise?', b: 'Seawater expands as it warms (thermal expansion), and melting land ice adds water to the oceans.' },
      { n: 4, f: 'Is a sea wall mitigation or adaptation? Is tree planting?', b: 'A sea wall is adaptation: it copes with the effects. Tree planting is mitigation: it reduces the cause by absorbing carbon dioxide.' },
    ]),
    ...sub(ATM, 'acid-rain-5014-2027', '4.3', [
      { n: 1, f: 'Which gases cause acid rain, and where do they come from?', b: 'Sulfur dioxide, from burning sulfur-containing fossil fuels and smelting ores, and nitrogen oxides, from vehicle engines and power stations.' },
      { n: 2, f: 'What is the pH of normal rain, and why is it slightly acidic?', b: 'About 5.6, because carbon dioxide dissolves in it. Acid rain has a lower pH.' },
      { n: 3, f: 'How does acid rain damage forests?', b: 'It washes nutrients out of the soil, releases aluminium that damages tree roots, and damages leaves directly.' },
      { n: 4, f: 'Scrubbers vs catalytic converters', b: 'Scrubbers (flue-gas desulfurisation) remove sulfur dioxide from power station emissions.\nCatalytic converters reduce nitrogen oxides from vehicle exhausts.' },
    ]),
    ...sub(ATM, 'ozone-depletion-5014-2027', '4.4', [
      { n: 1, f: 'Which chemicals destroy stratospheric ozone?', b: 'Chlorofluorocarbons (CFCs), formerly used in aerosols, refrigerators and foam. Ultraviolet light releases chlorine from them, which breaks down ozone.' },
      { n: 2, f: 'Why does a thinner ozone layer harm health?', b: 'More ultraviolet radiation reaches the ground, increasing skin cancer and cataracts.' },
      { n: 3, f: 'Why is the Montreal Protocol (1987) seen as a success?', b: 'Countries agreed to phase out CFCs and similar chemicals, replacements were introduced, and the ozone layer is slowly recovering.' },
      { n: 4, f: 'How do ozone depletion and climate change differ?', b: 'Ozone depletion is caused mainly by CFCs and lets in more ultraviolet radiation. Climate change is caused mainly by extra greenhouse gases trapping heat.' },
    ]),

    // 5 Ecosystems, biodiversity and fieldwork
    ...sub(ECO, 'ecosystems-5014-2027', '5.1', [
      { n: 1, f: 'Define an ecosystem', b: 'A community of organisms interacting with each other and with the non-living environment in an area.' },
      { n: 2, f: 'Food chain vs food web', b: 'A food chain shows one feeding pathway. A food web shows how many food chains link together.' },
      { n: 3, f: 'What is a trophic level?', b: 'A feeding position in a food chain: producers, primary consumers, secondary consumers and so on.' },
      { n: 4, f: 'Why can eating plants feed more people per hectare than eating animals?', b: 'About 90% of energy is lost at each trophic level, so eating producers directly uses far more of the energy captured by crops.' },
    ]),
    ...sub(ECO, 'forest-ecosystems-5014-2027', '5.2', [
      { n: 1, f: 'Describe the climate of a tropical rainforest', b: 'High rainfall and steady warm temperatures all year, which support very high biodiversity.' },
      { n: 2, f: 'Where are most nutrients stored in a tropical rainforest?', b: 'In the living vegetation and leaf litter, not the soil, which is often thin.' },
      { n: 3, f: 'Give four causes of deforestation', b: 'Clearance for farmland and plantations such as palm oil, commercial logging, mining and road building, and fuelwood collection.' },
      { n: 4, f: 'How does deforestation contribute to climate change?', b: 'Fewer trees absorb carbon dioxide, and burning cleared trees releases more of it.' },
      { n: 5, f: 'What are selective logging and agroforestry?', b: 'Selective logging: removing only some trees, with replanting, so the forest survives.\nAgroforestry: growing crops among trees.' },
    ]),
    ...sub(ECO, 'managing-biodiversity-5014-2027', '5.3', [
      { n: 1, f: 'Define biodiversity', b: 'The variety of living things in an area, including the number of species and the genetic variety within each species.' },
      { n: 2, f: 'Why is high biodiversity valuable?', b: 'Ecosystems with more species are usually more resilient, and species provide food, medicines and materials. Many people also value nature for its own sake.' },
      { n: 3, f: 'Give one strength and one limitation of captive breeding', b: 'Strength: can save very rare species from extinction.\nLimitation: expensive, and released animals need a surviving habitat.' },
      { n: 4, f: 'Why do community schemes help conservation?', b: 'When local people share the benefits, such as ecotourism jobs, they support conservation in the long term, though results are slow.' },
    ]),
    ...sub(ECO, 'fieldwork-investigations-5014-2027', '5.4', [
      { n: 1, f: 'What is a quadrat used for?', b: 'Counting organisms or estimating plant cover in a known area of ground, so samples can be compared.' },
      { n: 2, f: 'When should a transect be used instead of random quadrats?', b: 'When conditions change gradually along a line, such as inland from a shore or away from a footpath.' },
      { n: 3, f: 'What are the stages of a fieldwork investigation?', b: 'State an aim or hypothesis, plan the method, collect data, present it, analyse it and evaluate it.' },
      { n: 4, f: 'Why may one field visit give unreliable results?', b: 'Populations and conditions change with season and time of day, so a single visit can miss this variation.' },
      { n: 5, f: 'Six quadrats contain 2, 6, 4, 3, 5 and 4 limpets. What is the mean?', b: 'Total = 24. Mean = 24 ÷ 6 = 4 limpets per quadrat.' },
    ]),

    // 6 Natural hazards
    ...sub(HAZ, 'earthquakes-and-volcanoes-5014-2027', '6.1', [
      { n: 1, f: 'Why do explosive volcanoes form at destructive plate boundaries?', b: 'One plate is forced beneath another and melts, producing magma that rises to the surface.' },
      { n: 2, f: 'Why are there no volcanoes at conservative boundaries?', b: 'The plates slide past each other, so no plate is destroyed and no magma is produced. Stress is released as earthquakes.' },
      { n: 3, f: 'Magnitude vs intensity of an earthquake', b: 'Magnitude: the energy released, measured on the Richter or moment magnitude scale.\nIntensity: how strongly shaking is felt at a place, measured on the Mercalli scale.' },
      { n: 4, f: 'How much larger is the ground motion of a magnitude 7 earthquake than a magnitude 5?', b: '100 times: each whole step on the scale is a tenfold increase in ground motion, and 10 × 10 = 100.' },
      { n: 5, f: 'How can volcanic eruptions be predicted?', b: 'By monitoring with seismometers for small earthquakes, gas sensors for changing emissions, and measurements of ground swelling.' },
    ]),
    ...sub(HAZ, 'tropical-cyclones-5014-2027', '6.2', [
      { n: 1, f: 'What are tropical cyclones called in different regions?', b: 'Hurricanes, typhoons or cyclones, depending on the region.' },
      { n: 2, f: 'Why do tropical cyclones not form on the equator?', b: 'The Earth’s rotation is needed to make the system spin, and its effect is too weak at the equator.' },
      { n: 3, f: 'What powers a tropical cyclone?', b: 'Warm, moist air rises over the ocean, condenses and releases heat, which drives the storm.' },
      { n: 4, f: 'How do mangroves protect coasts from cyclones?', b: 'Their dense roots and trees absorb wave energy and reduce the force of storm surges.' },
    ]),
    ...sub(HAZ, 'flooding-5014-2027', '6.3', [
      { n: 1, f: 'Why does urbanisation increase flood risk?', b: 'Impermeable surfaces such as concrete and drains send rainwater quickly to rivers, shortening lag time and raising peak discharge.' },
      { n: 2, f: 'Give a benefit of flooding', b: 'Floods deposit fertile silt on floodplains, improving farmland.' },
      { n: 3, f: 'Give one advantage and one disadvantage of building a flood embankment', b: 'Advantage: protects the area behind it effectively.\nDisadvantage: costly, and it can move the flood problem further downstream.' },
      { n: 4, f: 'What is floodplain zoning?', b: 'A soft engineering approach that restricts building on land most at risk of flooding, keeping it for uses such as farmland or parks.' },
    ]),
    ...sub(HAZ, 'drought-5014-2027', '6.4', [
      { n: 1, f: 'Define drought', b: 'A long period of below-average rainfall that leads to a shortage of water.' },
      { n: 2, f: 'How can human activity make drought worse?', b: 'Overusing water and poor land management, such as overgrazing and deforestation, increase water shortage and soil damage.' },
      { n: 3, f: 'Give two drought management methods suited to a low-income farming community', b: 'Rainwater harvesting and drought-resistant crops. Drip irrigation and small storage reservoirs are also suitable.' },
      { n: 4, f: 'Why can drought lead to conflict and migration?', b: 'Crop failure, livestock deaths and water shortages force people to move or compete for scarce resources.' },
    ]),

    // 7 Human population
    ...sub(POP, 'human-population-density-distribution-and-structure-5014-2027', '7.1', [
      { n: 1, f: 'A country has 12 million people and an area of 300,000 km². What is its population density?', b: '12,000,000 ÷ 300,000 = 40 people per km².' },
      { n: 2, f: 'Population density vs population distribution', b: 'Density: the average number of people per unit area.\nDistribution: where people live, the pattern of their spread across an area.' },
      { n: 3, f: 'What does a population pyramid with a narrow base and wide top show?', b: 'An ageing population with a low birth rate and long life expectancy.' },
      { n: 4, f: 'Which age groups count as dependants in the dependency ratio?', b: 'People under 15 and over 64, compared with the working-age population aged 15 to 64.' },
    ]),
    ...sub(POP, 'human-population-size-5014-2027', '7.2', [
      { n: 1, f: 'Define birth rate and death rate', b: 'Birth rate: live births per 1,000 people per year.\nDeath rate: deaths per 1,000 people per year.' },
      { n: 2, f: 'How do you calculate net migration?', b: 'Immigration − emigration.' },
      { n: 3, f: 'Why do death rates fall before birth rates in the demographic transition?', b: 'Healthcare, food, clean water and sanitation improve quickly, while attitudes to family size change more slowly.' },
      { n: 4, f: 'Birth rate 30, death rate 10 per 1,000. What is natural increase as a percentage, and the doubling time?', b: 'Natural increase = 20 per 1,000 = 2.0%. Doubling time ≈ 70 ÷ 2 = 35 years.' },
    ]),
    ...sub(POP, 'managing-human-population-size-5014-2027', '7.3', [
      { n: 1, f: 'Give three anti-natalist measures', b: 'Family planning clinics and free contraception, education for girls and raising the status of women, and financial incentives for small families.' },
      { n: 2, f: 'Give three pro-natalist measures', b: 'Child benefit payments, tax breaks for families, and paid parental leave and childcare.' },
      { n: 3, f: 'Give one advantage and one disadvantage of a strict one-child policy', b: 'Advantage: slows population growth.\nDisadvantage: can cause a gender imbalance and an ageing population, and raises ethical concerns.' },
      { n: 4, f: 'Why might a government encourage skilled migration?', b: 'To add working-age people who pay taxes and fill jobs, easing the pressure of an ageing population.' },
    ]),
  ],
};
