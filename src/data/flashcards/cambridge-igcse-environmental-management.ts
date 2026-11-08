/**
 * D-444 -- flashcards for Cambridge IGCSE Environmental Management 0680 (2027-2029).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The course's 0680 revision notes map to topics only (no subtopic), so no card
 * can cite a page as `source`: every card is authored (origin 'authored'),
 * written from Marlbridge's own 0680 study guides and revision notes. The
 * energy subtopics (1.4-1.6) follow the same syllabus content as the sibling
 * O Level 5014 2027-2029 notes, which share this content. Worked figures are
 * invented for illustration. Not tiered. Plain text only (see types.ts).
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

const NR = 'natural-resources-0680';
const LAND = 'land-0680';
const WAT = 'water-0680';
const ATM = 'the-atmosphere-and-human-activities-0680';
const ECO = 'ecosystems-biodiversity-and-fieldwork-0680';
const HAZ = 'natural-hazards-0680';
const POP = 'human-population-0680';

export const DECK_CAMBRIDGE_IGCSE_ENVIRONMENTAL_MANAGEMENT: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'environmental-management',
  syllabusCode: '0680',
  syllabusSeries: '2027-2029',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Natural resources
    ...sub(NR, 'formation-of-rocks-0680', '1.1', [
      { n: 1, f: 'How do igneous rocks form? Give two examples.', b: 'Magma or lava cools and crystallises. Granite cools slowly underground and has large crystals; basalt cools quickly at the surface and has small crystals.' },
      { n: 2, f: 'How do sedimentary rocks form? Give three examples.', b: 'Eroded particles are deposited in layers, then compacted and cemented. Examples: limestone, sandstone, shale. They commonly contain fossils.' },
      { n: 3, f: 'How do metamorphic rocks form? Give two examples.', b: 'Existing rock is changed by heat and/or pressure without melting. Marble forms from limestone; slate forms from shale.' },
      { n: 4, f: 'What is permeability, and which rocks are permeable?', b: 'The ability of water to pass through the pore spaces of rock and soil. Most sedimentary rocks, such as limestone and sandstone, are permeable; igneous and metamorphic rocks and shale are impermeable.' },
      { n: 5, f: 'Why is the rock cycle not one fixed loop?', b: 'It branches: any rock can be weathered into sediment, changed by heat and pressure, or melted and recrystallised, so a rock need not pass through all three types in order.' },
    ]),
    ...sub(NR, 'extraction-of-rocks-ores-and-minerals-0680', '1.2', [
      { n: 1, f: 'What is an ore?', b: 'Rock containing minerals and metals in amounts worth extracting.' },
      { n: 2, f: 'What are the three methods of extracting rocks, ores and minerals?', b: 'Surface extraction (opencast, open-pit, open-cut, strip mining), subsurface extraction (deep or shaft mining) and biological extraction (phytomining and bioleaching).' },
      { n: 3, f: 'Phytomining vs bioleaching', b: 'Phytomining: plants absorb metal compounds from the soil, then are harvested and burned, and the metal is recovered from the ash.\nBioleaching: bacteria release metal compounds from low-grade ore into a solution.' },
      { n: 4, f: 'Which factors affect the decision to extract a deposit?', b: 'Exploration, geology, accessibility and terrain, the quantity and quality (grade) of the deposit, climate, environmental impact assessment, supply and demand, and cost and profit.' },
      { n: 5, f: 'Land restoration vs repurposing after extraction', b: 'Restoration returns land towards its earlier state: replacing overburden, improving soil, bioremediation, tree planting.\nRepurposing gives it a new use: landfill, lakes, recreation, nature reserves.' },
    ]),
    ...sub(NR, 'sustainable-management-of-rocks-ores-and-minerals-0680', '1.3', [
      { n: 1, f: 'What is a finite resource?', b: 'A natural resource that is used up faster than it is replaced, such as a mineral ore.' },
      { n: 2, f: 'What does sustainable management of resources mean?', b: 'Using strategies that meet the needs of the present without compromising the ability of future generations to meet their own needs.' },
      { n: 3, f: 'Give strategies for managing rocks, ores and minerals sustainably', b: 'Reduce and reuse, recycling, more efficient extraction, avoiding depletion, legislation and its enforcement, and using alternative materials.' },
      { n: 4, f: 'Give a benefit and a limitation of recycling metals', b: 'Benefit: less mining, so less habitat damage and waste.\nLimitation: collecting and sorting cost money and depend on people taking part.' },
    ]),
    ...sub(NR, 'energy-resources-0680', '1.4', [
      { n: 1, f: 'How does coal form?', b: 'Swamp plants partly decay in waterlogged, low-oxygen conditions, are buried, and are changed by heat and pressure over millions of years.' },
      { n: 2, f: 'How do oil and natural gas form?', b: 'Remains of marine organisms are buried in sea-bed mud without oxygen and changed by heat and pressure over millions of years. The oil and gas are trapped beneath impermeable rock.' },
      { n: 3, f: 'Which energy resources are renewable and which are non-renewable?', b: 'Renewable: biofuels (bioethanol, biomass, biogas, wood), geothermal, hydro-electric, tidal, wave, solar and wind power.\nNon-renewable: fossil fuels (coal, oil, gas) and nuclear power using uranium.' },
      { n: 4, f: 'How do most power stations generate electricity?', b: 'Heat from burning fuel, nuclear fission or hot rocks turns water to steam, which drives a turbine connected to a generator. Moving water or wind turns turbines directly; solar cells convert light directly.' },
      { n: 5, f: 'Give one benefit and one limitation of nuclear power', b: 'Benefit: steady output with very little carbon dioxide during generation.\nLimitation: radioactive waste that must be stored safely for a very long time, and a risk of accidents.' },
      { n: 6, f: 'Which factors affect demand for energy?', b: 'Transport, personal and national wealth, climate, population size, industry, disruption to supply, unreliable supply and scarcity of resources.' },
    ]),
    ...sub(NR, 'conservation-and-management-of-energy-resources-0680', '1.5', [
      { n: 1, f: 'What strategies conserve and manage energy resources?', b: 'Reducing consumption, insulation, energy-efficient devices and vehicles, using existing resources better, education, transport policies, battery storage and developing new energy resources.' },
      { n: 2, f: 'Blue hydrogen vs green hydrogen', b: 'Blue hydrogen is produced from natural gas.\nGreen hydrogen is produced using renewable resources.' },
      { n: 3, f: 'What does a heat pump do?', b: 'It transfers heat from the ground (ground source) or from the air (air source) into a building for heating.' },
      { n: 4, f: 'Why does battery storage help renewable energy?', b: 'It saves no energy itself, but it stores surplus electricity from intermittent sources such as solar and wind for use later, at a cost.' },
      { n: 5, f: 'Behaviour-based vs technology-based energy saving', b: 'Behaviour-based (reducing use, education): cheap but depends on people changing habits.\nTechnology-based (insulation, efficient devices, heat pumps): saves energy over time but costs more at the start.' },
    ]),
    ...sub(NR, 'fracking-0680', '1.6', [
      { n: 1, f: 'What is fracking?', b: 'The extraction of natural gas or petroleum from shale rock by hydraulic fracturing: water, sand and chemicals are pumped down at high pressure to crack the rock and release the gas or oil.' },
      { n: 2, f: 'Why does gas in shale need fracking to extract it?', b: 'Shale is impermeable, so the gas cannot flow through it to a well until the rock is cracked open.' },
      { n: 3, f: 'What are the benefits of fracking?', b: 'Access to gas and oil otherwise out of reach, greater national energy supply and fewer imports, jobs and tax income, and gas emits less carbon dioxide than coal when generating electricity.' },
      { n: 4, f: 'What are the limitations of fracking?', b: 'Large water use, risk of ground water contamination, small earthquakes, methane leaks, and it is still a fossil fuel.' },
    ]),

    // 2 Land
    ...sub(LAND, 'soils-and-crop-growth-0680', '2.1', [
      { n: 1, f: 'What is soil made of?', b: 'Mineral particles (sand, silt and clay), organic content, air (gases) and water.' },
      { n: 2, f: 'Why is loam an ideal soil for crops?', b: 'It has a good mix of particle sizes and pore spaces, holds moisture yet drains well, contains useful organic and mineral content, and is easy to cultivate.' },
      { n: 3, f: 'Which mineral ions do plants need from soil, and what for?', b: 'Nitrate (N) for growth of leaves and proteins, phosphate (P) for root growth, and potassium (K) for flowers, fruit and resistance to disease.' },
      { n: 4, f: 'Sandy soil vs clay soil', b: 'Sandy: large particles and pore spaces; drains quickly and is easy to dig, but dries out and loses nutrients.\nClay: tiny particles; holds water and nutrients, but drains poorly, can waterlog and is hard to work.' },
      { n: 5, f: 'Which conditions allow optimum crop growth?', b: 'A long enough growing season, suitable weather (temperature and water) and enough daylight hours for photosynthesis, along with soil nutrients and the right pH.' },
    ]),
    ...sub(LAND, 'food-production-and-crop-yield-0680', '2.2', [
      { n: 1, f: 'Subsistence vs commercial agriculture', b: 'Subsistence: food grown mainly for the farmer’s own family.\nCommercial: crops or livestock produced for sale at a profit.' },
      { n: 2, f: 'What is sustainable food production?', b: 'Producing enough food for the present generation using methods that allow future generations to keep growing food on the same land.' },
      { n: 3, f: 'Name ways of increasing crop yield', b: 'Crop rotation and intercropping, improved irrigation such as drip irrigation, mechanisation, fertilisers, pest control, genetically modified crops, greenhouses and hydroponics, and agroforestry.' },
      { n: 4, f: 'Drip irrigation vs flood irrigation', b: 'Drip: delivers water directly to roots with little waste, so it is sustainable.\nFlood: wastes water and can cause waterlogging and salinisation over time.' },
      { n: 5, f: 'What problems can unsustainable farming cause?', b: 'Soil erosion, salinisation, nutrient exhaustion, pollution from overuse of fertiliser and pesticide, deforestation, biodiversity loss from monoculture, and food shortages when cash or biofuel crops replace food crops.' },
    ]),
    ...sub(LAND, 'soil-erosion-0680', '2.3', [
      { n: 1, f: 'What causes soil erosion?', b: 'Unsustainable farming such as overgrazing, deforestation, farming on steep slopes, leaving soil bare, and removal of soil by wind and water.' },
      { n: 2, f: 'What are the impacts of soil erosion?', b: 'Lower crop yields, silting of rivers, desertification, landslides and mudslides, loss of habitat, malnutrition and famine, and displacement of people.' },
      { n: 3, f: 'How do terracing and contour ploughing reduce erosion?', b: 'Terracing cuts steep slopes into flat steps; contour ploughing makes furrows along the slope rather than down it. Both slow surface run-off so water soaks in instead of washing soil away.' },
      { n: 4, f: 'How do wind breaks and vegetation cover reduce erosion?', b: 'Wind breaks (lines of trees or hedges) slow the wind across fields. Keeping plant cover means roots bind the soil and leaves shelter it from rain.' },
    ]),

    // 3 Water
    ...sub(WAT, 'water-sources-and-supply-0680', '3.1', [
      { n: 1, f: 'Water cycle: name four stores and four transfers', b: 'Stores: oceans, ice sheets and glaciers, ground water, the atmosphere, lakes and rivers.\nTransfers: precipitation, interception, infiltration, surface run-off, through-flow, transpiration, evaporation, condensation.' },
      { n: 2, f: 'What are the stages of treating water to make it potable?', b: 'Screening (removes large objects) → sedimentation (particles settle) → filtration (sand and gravel remove fine particles) → chlorination (kills microorganisms).' },
      { n: 3, f: 'Distillation vs reverse osmosis for desalination', b: 'Distillation: seawater is boiled and the vapour condensed; reliable but energy-intensive.\nReverse osmosis: pressure forces water through a membrane; usually uses less energy but membranes need maintenance and can foul.' },
      { n: 4, f: 'What are the uses of a multipurpose dam?', b: 'Flood control, hydro-electric power, irrigation, water storage, transport, recreation, tourism and fish farming.' },
      { n: 5, f: 'Give limitations of multipurpose dams', b: 'High cost, people and habitats displaced by the reservoir, silt trapped behind the dam, and disrupted river ecosystems and communities downstream.' },
    ]),
    ...sub(WAT, 'water-pollution-0680', '3.2', [
      { n: 1, f: 'Match water pollution sources to their impacts', b: 'Sewage and domestic waste: infectious disease such as cholera.\nIndustry: toxic substances.\nFarming: eutrophication from fertiliser.\nAir pollution: acid rain harming aquatic life.' },
      { n: 2, f: 'What are the stages of eutrophication?', b: 'Nutrient enrichment from fertiliser or sewage → algal bloom → light is blocked and plants die → bacteria decompose them, using up oxygen → fish and other aquatic life die.' },
      { n: 3, f: 'Bioaccumulation vs biomagnification', b: 'Bioaccumulation: a toxin builds up within a single organism over time.\nBiomagnification: the concentration increases at each step up a food chain, from prey to predator.' },
      { n: 4, f: 'How can water pollution be reduced?', b: 'Treating sewage and industrial waste before discharge, controlling fertiliser use and leaving buffer strips beside rivers, and passing and enforcing pollution laws.' },
    ]),
    ...sub(WAT, 'water-related-diseases-0680', '3.3', [
      { n: 1, f: 'How is malaria transmitted?', b: 'It is vector-borne: the Plasmodium parasite is passed to people in the bite of an infected female Anopheles mosquito.' },
      { n: 2, f: 'How is cholera transmitted?', b: 'It is waterborne: people swallow water or food contaminated with the cholera bacterium from the faeces of infected people.' },
      { n: 3, f: 'How can malaria be controlled?', b: 'Personal protection (insecticide-treated bed nets, repellents, covering skin) and vector control (draining standing water, spraying insecticide). Insecticide resistance limits spraying.' },
      { n: 4, f: 'How can cholera be controlled?', b: 'Safe potable water, proper sanitation and sewage treatment, handwashing, and vaccination. Access to vaccines and clean water can be limited in poorer or disaster-hit areas.' },
    ]),
    ...sub(WAT, 'marine-aquaculture-0680', '3.4', [
      { n: 1, f: 'What is marine aquaculture?', b: 'The farming of marine species, such as fish, crustaceans and seaweeds, in captivity.' },
      { n: 2, f: 'Target species vs bycatch', b: 'Target species: the species a fishery intends to catch.\nBycatch: other species caught unintentionally. Overfishing harms both and wider food chains.' },
      { n: 3, f: 'What are the impacts of marine aquaculture?', b: 'Benefits: less pressure on wild fisheries and more food.\nProblems: escapes and disease spreading to wild stocks, effects on local food webs, nutrient enrichment, energy use, and catching wild fish to feed farmed species.' },
      { n: 4, f: 'How can fisheries be managed sustainably?', b: 'Limits on boat and net size, larger mesh sizes, sustainable methods such as pole and line, quotas, closed seasons, limited fishing days, marine protected areas, conservation laws and international agreements.' },
    ]),
    ...sub(WAT, 'oil-pollution-0680', '3.5', [
      { n: 1, f: 'What are the causes of oil pollution?', b: 'Off-shore and on-shore extraction, pipelines, shipping accidents, tank cleaning at sea and refineries.' },
      { n: 2, f: 'What are the impacts of oil pollution?', b: 'Oil coats birds and marine mammals, poisons fish and crustaceans, smothers seaweeds and coral reefs, and pollutes beaches.' },
      { n: 3, f: 'How can oil pollution be prevented?', b: 'MARPOL (the International Convention for the Prevention of Pollution from Ships), double-hulled tankers, risk assessments and regular maintenance.' },
      { n: 4, f: 'How can the impact of an oil spill be minimised?', b: 'Improved navigation to avoid collisions, booms and sorbents to contain and soak up oil, skimmers, detergent sprays and controlled burning.' },
    ]),
    ...sub(WAT, 'plastic-pollution-0680', '3.6', [
      { n: 1, f: 'Conventional plastic vs bioplastic', b: 'Conventional plastics are made from fossil fuels and are generally non-biodegradable.\nBioplastics are made fully or partly from biological material and may or may not be biodegradable.' },
      { n: 2, f: 'What are microplastics?', b: 'Pieces of plastic less than 5 mm in size, formed when larger plastics break down.' },
      { n: 3, f: 'How does plastic pollution affect marine ecosystems?', b: 'Visual pollution, entanglement of animals, plastic mistaken for food, and bioaccumulation and biomagnification of plastics and the chemicals in them.' },
      { n: 4, f: 'How can plastic pollution be managed?', b: 'Alternative packaging, avoiding single-use plastics, safe disposal, recycling, and legislation with enforcement.' },
    ]),

    // 4 The atmosphere and human activities
    ...sub(ATM, 'the-atmosphere-0680', '4.1', [
      { n: 1, f: 'What is the composition of dry air?', b: 'About 78% nitrogen, 21% oxygen, just under 1% argon and about 0.04% carbon dioxide. Water vapour varies.' },
      { n: 2, f: 'Troposphere vs stratosphere', b: 'Troposphere: the lowest layer, holding most of the air, where weather happens.\nStratosphere: the layer above, containing the ozone layer.' },
      { n: 3, f: 'What is the natural greenhouse effect?', b: 'Gases such as carbon dioxide, methane, water vapour and nitrous oxide absorb heat radiated from the Earth’s surface and re-emit some back, keeping the Earth warm enough for liquid water and life.' },
      { n: 4, f: 'Why is ozone helpful high up but harmful at ground level?', b: 'In the stratosphere it absorbs much of the Sun’s harmful ultraviolet radiation. At ground level it is a pollutant.' },
    ]),
    ...sub(ATM, 'climate-change-0680', '4.2', [
      { n: 1, f: 'What is the enhanced greenhouse effect?', b: 'Extra warming caused when human activities add greenhouse gases to the atmosphere, so more heat is retained and average global temperature rises.' },
      { n: 2, f: 'What are the main human sources of carbon dioxide, methane and nitrous oxide?', b: 'Carbon dioxide: burning fossil fuels, deforestation, cement making.\nMethane: rice paddies, cattle, landfill, gas leaks.\nNitrous oxide: nitrogen fertilisers, burning biomass.' },
      { n: 3, f: 'What are the impacts of climate change?', b: 'Rising sea level from thermal expansion and melting land ice, changing rainfall with more droughts and floods, changing crop yields, shifting habitats and species loss, and more heatwaves and extreme weather.' },
      { n: 4, f: 'Mitigation vs adaptation to climate change', b: 'Mitigation reduces the cause: renewable energy, energy efficiency, tree planting, less deforestation.\nAdaptation copes with the effects: sea walls, drought-tolerant crops, water storage, early warning systems.' },
    ]),
    ...sub(ATM, 'acid-rain-0680', '4.3', [
      { n: 1, f: 'What causes acid rain?', b: 'Sulfur dioxide (from burning sulfur-containing fossil fuels and smelting ores) and nitrogen oxides (from vehicle engines and power stations) dissolve in water droplets to form acids. Normal rain is about pH 5.6; acid rain is lower.' },
      { n: 2, f: 'What are the impacts of acid rain?', b: 'Acidified lakes and rivers harm fish and invertebrates; soils lose nutrients and release aluminium that damages tree roots; leaves are damaged; limestone, marble and metal structures corrode.' },
      { n: 3, f: 'How can acid rain be reduced?', b: 'Flue-gas desulfurisation (scrubbers) in power stations, low-sulfur fuels or renewables, and catalytic converters on vehicles to reduce nitrogen oxides.' },
      { n: 4, f: 'Why is liming a lake only a partial solution to acid rain?', b: 'It treats the effect, not the cause, so it must be repeated.' },
      { n: 5, f: 'Why is acid rain an international problem?', b: 'Winds carry the gases across borders, so acid rain often falls in countries that did not produce the pollution.' },
    ]),
    ...sub(ATM, 'ozone-depletion-0680', '4.4', [
      { n: 1, f: 'What causes ozone depletion?', b: 'Chlorofluorocarbons (CFCs), once used in aerosols, refrigerators and foam packaging, reach the stratosphere, where ultraviolet light releases chlorine atoms that destroy ozone repeatedly.' },
      { n: 2, f: 'What are the effects of ozone depletion?', b: 'More ultraviolet radiation reaches the surface, raising the risk of skin cancer and cataracts and harming plankton and crops.' },
      { n: 3, f: 'What was the Montreal Protocol?', b: 'An international agreement of 1987 to phase out CFCs and similar substances, widely seen as successful international cooperation. The ozone layer is slowly recovering.' },
      { n: 4, f: 'Is ozone depletion the main cause of global warming?', b: 'No. They are separate problems: ozone depletion lets in more ultraviolet radiation, while climate change is caused mainly by the enhanced greenhouse effect.' },
    ]),

    // 5 Ecosystems, biodiversity and fieldwork
    ...sub(ECO, 'ecosystems-0680', '5.1', [
      { n: 1, f: 'What is an ecosystem?', b: 'A community of living organisms interacting with each other and with the non-living (abiotic) environment in a particular area.' },
      { n: 2, f: 'Producer vs consumer vs decomposer', b: 'Producer: makes its own food by photosynthesis, usually a green plant.\nConsumer: gets energy by eating other organisms.\nDecomposer: bacteria and fungi that break down dead material and return nutrients to the soil.' },
      { n: 3, f: 'Why do food chains rarely have more than four or five trophic levels?', b: 'Only about 10% of energy is passed to the next level; the rest is lost as heat from respiration, in movement, in waste and in uneaten parts, so little is left for higher levels.' },
      { n: 4, f: 'How does energy flow differ from nutrient cycling?', b: 'Energy flows one way through an ecosystem and is lost as heat. Nutrients are recycled: decomposers return them to the soil and plants absorb them again.' },
    ]),
    ...sub(ECO, 'forest-ecosystems-0680', '5.2', [
      { n: 1, f: 'What are the layers of a tropical rainforest?', b: 'Emergent trees, canopy, understorey and forest floor.' },
      { n: 2, f: 'Why does a rainforest recover poorly after clearance?', b: 'Most nutrients are held in the living vegetation and leaf litter, not the thin soil, so clearing the trees removes the nutrients and the exposed soil erodes.' },
      { n: 3, f: 'What are the causes of deforestation?', b: 'Clearance for farming, cattle ranching and plantations such as palm oil; commercial logging; mining, roads and settlement; and fuelwood collection.' },
      { n: 4, f: 'What are the impacts of deforestation?', b: 'Habitat and biodiversity loss, soil erosion and more flooding, less carbon dioxide absorbed and more released if trees are burned, and loss of livelihoods for forest communities.' },
      { n: 5, f: 'How can forests be managed sustainably?', b: 'Selective logging with replanting, protected reserves, agroforestry, timber certification, ecotourism, and alternatives that give local people an income.' },
    ]),
    ...sub(ECO, 'managing-biodiversity-0680', '5.3', [
      { n: 1, f: 'What is biodiversity, and why does it matter?', b: 'The variety of living things in an area, including the number of species and genetic variety within them. It makes ecosystems more resilient and provides food, medicines and materials.' },
      { n: 2, f: 'What are the main threats to biodiversity?', b: 'Habitat loss, overharvesting and hunting, invasive species, pollution and climate change.' },
      { n: 3, f: 'Captive breeding vs seed banks', b: 'Captive breeding: breeding rare species in zoos for release; saves very rare species but is expensive and needs the habitat to survive.\nSeed banks: store seeds in cold storage; preserve genetic variety cheaply but do not protect wild habitats.' },
      { n: 4, f: 'What are the strengths and limitations of protected areas?', b: 'Strength: they protect whole habitats and all the species in them.\nLimitation: they need funding and enforcement, and can exclude local people who depend on the land.' },
      { n: 5, f: 'What is CITES?', b: 'The Convention on International Trade in Endangered Species, an international agreement that controls trade in endangered species. It reduces illegal trade but is hard to police.' },
    ]),
    ...sub(ECO, 'fieldwork-investigations-0680', '5.4', [
      { n: 1, f: 'Quadrat vs transect', b: 'Quadrat: a square frame placed on the ground to count organisms in a known area.\nTransect: a line along which samples are taken at regular intervals, used where conditions change gradually.' },
      { n: 2, f: 'Random vs systematic sampling', b: 'Random sampling (for example using random number tables) avoids bias in where samples are placed.\nSystematic sampling at fixed intervals suits a gradient, such as along a transect.' },
      { n: 3, f: 'How do you measure abiotic factors in fieldwork?', b: 'With a light meter for light intensity, a moisture meter for soil moisture, a thermometer for temperature, and pH paper or a probe for soil or water pH. Repeat readings and calculate means.' },
      { n: 4, f: 'How can a fieldwork investigation be made more reliable?', b: 'Take more samples, place quadrats randomly, repeat the study at different times or seasons, and use calibrated equipment.' },
      { n: 5, f: 'Five quadrats contain 3, 4, 2, 5 and 1 plants. What is the mean per quadrat?', b: 'Total = 3 + 4 + 2 + 5 + 1 = 15. Mean = 15 ÷ 5 = 3 plants per quadrat.' },
    ]),

    // 6 Natural hazards
    ...sub(HAZ, 'earthquakes-and-volcanoes-0680', '6.1', [
      { n: 1, f: 'What happens at destructive, constructive and conservative plate boundaries?', b: 'Destructive: one plate is forced beneath another; powerful earthquakes and explosive volcanoes.\nConstructive: plates move apart and magma rises; smaller earthquakes, gentler eruptions.\nConservative: plates slide past; earthquakes, no volcanoes.' },
      { n: 2, f: 'Focus vs epicentre', b: 'Focus: the point underground where an earthquake starts.\nEpicentre: the point on the surface directly above the focus.' },
      { n: 3, f: 'Primary vs secondary effects of an earthquake', b: 'Primary: the immediate effects of shaking, such as collapsed buildings, deaths and broken roads and pipes.\nSecondary: later effects such as fires, landslides, tsunamis, disease, homelessness and economic loss.' },
      { n: 4, f: 'How are earthquake and volcano risks managed?', b: 'Earthquakes cannot be reliably predicted, so the focus is preparation: resistant buildings, building codes, drills and land-use planning. Volcanoes can be monitored with seismometers, gas sensors and ground-deformation measurements to give warnings.' },
      { n: 5, f: 'Why do people live near volcanoes?', b: 'Fertile volcanic soils, geothermal energy, minerals and tourism.' },
    ]),
    ...sub(HAZ, 'tropical-cyclones-0680', '6.2', [
      { n: 1, f: 'What conditions are needed for a tropical cyclone to form?', b: 'Warm ocean water of at least about 26.5 °C, and a position away from the equator so that the Earth’s rotation makes the system spin.' },
      { n: 2, f: 'Why do tropical cyclones weaken over land?', b: 'They lose their energy supply of warm, moist air from the ocean, which releases heat as it condenses.' },
      { n: 3, f: 'What is a storm surge, and why is it so dangerous?', b: 'A rise in sea level driven by strong winds and low pressure. It floods low-lying coasts rapidly and often causes the greatest loss of life.' },
      { n: 4, f: 'How can the impact of tropical cyclones be reduced?', b: 'Tracking by satellite and radar for warnings, evacuation plans, cyclone shelters, strengthened buildings, coastal defences, mangrove protection and education.' },
    ]),
    ...sub(HAZ, 'flooding-0680', '6.3', [
      { n: 1, f: 'What causes river floods?', b: 'Prolonged or intense rainfall, rapid snowmelt, saturated or impermeable ground, urbanisation that sends water quickly to rivers, and deforestation.' },
      { n: 2, f: 'Hard vs soft engineering flood management', b: 'Hard: dams, embankments, flood walls, channel straightening; effective but costly and may move the problem downstream.\nSoft: floodplain zoning, afforestation, wetland restoration, warning systems; cheaper and more sustainable.' },
      { n: 3, f: 'What is lag time on a flood hydrograph?', b: 'The time between peak rainfall and peak river discharge. Urban surfaces shorten lag time and raise the peak.' },
      { n: 4, f: 'Rain peaks at 09:20 and the river peaks at 13:05. What is the lag time?', b: '3 hours 45 minutes.' },
    ]),
    ...sub(HAZ, 'drought-0680', '6.4', [
      { n: 1, f: 'What is a drought?', b: 'A long period of below-average rainfall that causes water shortage.' },
      { n: 2, f: 'What causes drought?', b: 'Persistent high-pressure systems, changes in ocean and atmospheric patterns, and climate change. Overuse of water and poor land management make the effects worse.' },
      { n: 3, f: 'What are the impacts of drought?', b: 'Crop failure and food shortages, livestock deaths, reduced water supply, wildfires, migration and conflict over resources.' },
      { n: 4, f: 'How can drought be managed?', b: 'Water conservation, rainwater harvesting, drip irrigation, drought-resistant crops, storage reservoirs, reuse of treated wastewater and early warning from rainfall monitoring.' },
    ]),

    // 7 Human population
    ...sub(POP, 'human-population-density-distribution-and-structure-0680', '7.1', [
      { n: 1, f: 'What is population density, and how is it calculated?', b: 'The average number of people per unit area, usually per km². Density = total population ÷ area. It is an average and hides differences within a country.' },
      { n: 2, f: 'Why are some areas densely populated and others sparse?', b: 'Dense: fertile land, reliable water, a mild climate, jobs, trade routes and infrastructure.\nSparse: deserts, mountains, ice-covered land and dense forest, where settlement is hard.' },
      { n: 3, f: 'What does the shape of a population pyramid show?', b: 'Wide base, narrow top: high birth rate and short life expectancy.\nStraighter sides: lower birth and death rates.\nNarrow base, broad top: an ageing population.' },
      { n: 4, f: 'How do you calculate the dependency ratio?', b: '(Population under 15 + population over 64) ÷ population aged 15-64 × 100. For example, (20,000 + 5,000) ÷ 50,000 × 100 = 50.' },
    ]),
    ...sub(POP, 'human-population-size-0680', '7.2', [
      { n: 1, f: 'How do you calculate natural change as a percentage?', b: 'Birth rate − death rate (both per 1,000), then divide by 10. For example, 18 − 8 = 10 per 1,000 = 1.0%.' },
      { n: 2, f: 'Why are birth rates high in some countries?', b: 'High child mortality, children working on farms or supporting parents in old age, limited access to contraception and education for girls, and cultural or religious beliefs favouring large families.' },
      { n: 3, f: 'What are the stages of the demographic transition model?', b: 'Stage 1: high birth and death rates, stable population. Stage 2: death rate falls, rapid growth. Stage 3: birth rate falls, growth slows. Stage 4: both low, stable. Death rates fall first; birth rates follow.' },
      { n: 4, f: 'How do you estimate population doubling time?', b: '70 ÷ annual percentage growth rate. At 1.4% growth, 70 ÷ 1.4 = 50 years. It assumes the rate stays constant.' },
    ]),
    ...sub(POP, 'managing-human-population-size-0680', '7.3', [
      { n: 1, f: 'Anti-natalist vs pro-natalist policies', b: 'Anti-natalist: reduce birth rates, through family planning, free contraception, education for girls and incentives for small families.\nPro-natalist: raise birth rates, through child benefit, tax breaks, paid parental leave and childcare.' },
      { n: 2, f: 'What were the effects of China’s one-child policy?', b: 'Introduced around 1980 and ended in 2015, it slowed population growth but led to a gender imbalance and an ageing population.' },
      { n: 3, f: 'How can a country cope with an ageing population?', b: 'Raise the retirement age, encourage skilled migration and reform pensions, while planning for more pressure on healthcare.' },
      { n: 4, f: 'Why do many experts favour voluntary approaches to lowering birth rates?', b: 'Education, especially of girls, and rising wealth reduce birth rates strongly without compulsion, avoiding the ethical problems of strict laws.' },
    ]),
  ],
};
