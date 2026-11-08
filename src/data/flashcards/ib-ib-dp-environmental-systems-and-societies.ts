/**
 * D-444 -- flashcards for IB Diploma Programme Environmental Systems and Societies
 * (first assessment 2026).
 *
 * One block per subtopic (Topics 1-8), then one block per HL lens (HL.a-HL.c,
 * which the syllabus record lists as topics 9-11 with no subtopics), in syllabus
 * order. Card ids are `<subtopic number>-<n>` (or `<topic number>-<n>` for the HL
 * lenses) and are permanent (browser progress is keyed by them): add a new card
 * with the next unused n, never renumber.
 *
 *   The syllabus record is not tiered, so no card carries a tier. The HL lenses
 *   are HL only, and their cards say so in words.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Environmental Systems and
 *               Societies'); origin 'revision-notes'.
 *
 * Worked figures are invented for illustration, as on the revision notes.
 * Plain text only (see types.ts). Unicode for formulae.
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

const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, u, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    ...(u ? { tier: 'upper' as const } : {}),
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const P = 'ib-dp-environmental-systems-and-societies';
const T1 = `${P}-foundation`;
const T2 = `${P}-ecology`;
const T3 = `${P}-biodiversity-and-conservation`;
const T4 = `${P}-water`;
const T5 = `${P}-land`;
const T6 = `${P}-atmosphere-and-climate-change`;
const T7 = `${P}-natural-resources`;
const T8 = `${P}-human-populations-and-urban-systems`;

const FND = 'ib-dp-ess-foundation-perspectives-systems-sustainability-revision-notes';
const ECO = 'ib-dp-ess-ecosystems-energy-biogeochemical-cycles-revision-notes';
const BIOME = 'ib-dp-ess-climate-biomes-succession-revision-notes';
const BIO = 'ib-dp-ess-biodiversity-conservation-revision-notes';
const WAT = 'ib-dp-ess-water-systems-security-pollution-revision-notes';
const SOIL = 'ib-dp-ess-soil-agriculture-food-revision-notes';
const ATM = 'ib-dp-ess-atmosphere-climate-change-ozone-revision-notes';
const NAT = 'ib-dp-ess-natural-resources-energy-waste-revision-notes';
const POP = 'ib-dp-ess-human-populations-urban-systems-revision-notes';

export const DECK_IB_IB_DP_ENVIRONMENTAL_SYSTEMS_AND_SOCIETIES: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'environmental-systems-and-societies',
  syllabusCode: 'DP Environmental Systems and Societies',
  syllabusSeries: 'First assessment 2026',
  author: 'marlbridge-academic-team',
  updated: '2026-11-08',
  cards: [
    // 1 Foundation
    ...sub(T1, `${P}-1-1`, '1.1', [
      { n: 1, f: 'What is an environmental value system (EVS)?', b: 'The worldview that shapes how a person or group sees and judges environmental issues. A perspective is how someone sees one particular issue; a worldview is the wider set of beliefs and values behind it.' },
      { n: 2, f: 'Ecocentric, anthropocentric and technocentric: what does each believe?', b: 'Ecocentric: nature has value in itself (deep ecologists, self-reliance soft ecologists).\nAnthropocentric: manage nature for human benefit (environmental managers).\nTechnocentric: technology will solve environmental problems (cornucopians).' },
      { n: 3, f: 'How can an EVS be described as a system?', b: 'Inputs: culture, religion, education, media, experience, economic position.\nProcessing: values.\nOutputs: decisions, actions and arguments.' },
      { n: 4, f: 'Name five events often used as examples of shifts in environmental perspectives', b: 'Silent Spring (1962), Chernobyl (1986), the Montreal Protocol (1987), the Brundtland Report (1987) and the UN Sustainable Development Goals (2015, 17 goals).' },
      { n: 5, f: 'How do you label a stakeholder\'s EVS from a source?', b: 'Find their own words or actions; ask what they value most (nature itself, human benefit, or a technical fix); name the EVS; quote the evidence and explain the link. If the position is mixed, place it on the spectrum and say why.' },
      { n: 6, f: 'A politician says new desalination plants mean the country will never run short of water. Which EVS is this?', b: 'Technocentric: it trusts technology to remove the limit.' },
    ]),
    ...sub(T1, `${P}-1-2`, '1.2', [
      { n: 1, f: 'Transfer versus transformation in a system', b: 'Transfer: a flow with no change of form or state (river flow, grazing).\nTransformation: a flow with a change of form or state (evaporation, photosynthesis, respiration).', src: FND },
      { n: 2, f: 'Open, closed and isolated systems', b: 'Open: both energy and matter cross the boundary.\nClosed: only energy crosses.\nIsolated: neither crosses.' },
      { n: 3, f: 'Steady-state equilibrium versus static equilibrium', b: 'Steady-state: an open system with continuing flows that fluctuates around an average.\nStatic: no change at all; found in non-living systems.', src: FND },
      { n: 4, f: 'Negative versus positive feedback', b: 'Negative feedback reduces a change and stabilises the system. Positive feedback amplifies a change and destabilises it. The words describe the direction of the effect, not whether it is good or bad.', src: FND },
      { n: 5, f: 'What are a tipping point and resilience?', b: 'Tipping point: a threshold beyond which a small change causes a large, often long-lasting shift.\nResilience: the ability of a system to absorb disturbance and keep the same state. It rises with diversity, large storages, fast recovery rates and a wide geographic range.' },
      { n: 6, f: 'How do you calculate the change in a storage?', b: 'Net change per time = total inputs − total outputs. New storage = old storage + net change × number of time steps.\nExample: 500 units, inputs 80, outputs 95 per year → −15 per year → 440 units after 4 years.' },
      { n: 7, f: 'Strengths and limitations of models', b: 'Strengths: they simplify, predict, allow testing and communicate.\nLimitations: they omit factors, rest on assumptions, are sensitive to input data and become less accurate the further ahead they predict.' },
    ]),
    ...sub(T1, `${P}-1-3`, '1.3', [
      { n: 1, f: 'What is sustainability?', b: 'Using resources to meet present needs without reducing the ability of future generations to meet theirs. A plan must be judged on all three pillars: environmental, social and economic.' },
      { n: 2, f: 'Natural capital versus natural income', b: 'Natural capital: the stock of natural resources (the forest).\nNatural income: the yield that can be taken from the stock each year without reducing it (the yearly timber growth).' },
      { n: 3, f: 'How do you test whether a harvest is sustainable?', b: 'Natural income = stock × growth rate. Compare the harvest with it: harvest ≤ income is sustainable; harvest > income depletes the capital.\nExample: 20,000 t fish stock growing 6% a year → income 1,200 t; a 1,500 t catch is not sustainable.' },
      { n: 4, f: 'Ecological footprint versus biocapacity', b: 'Ecological footprint (EF): the land and water area needed to supply a population and absorb its waste, in global hectares (gha).\nBiocapacity: the area actually available. EF > biocapacity is an ecological deficit; EF < biocapacity is a reserve.' },
      { n: 5, f: 'Name the four categories of ecosystem services', b: 'Provisioning (food, timber, water), regulating (for example pollination, climate and flood regulation), cultural (recreation, spiritual value) and supporting (soil formation, nutrient cycling).' },
      { n: 6, f: 'Planetary boundaries versus doughnut economics', b: 'Planetary boundaries: nine Earth-system limits (Rockström and colleagues, 2009) — environmental limits only.\nDoughnut economics adds a social foundation (inner ring: basic needs) below the ecological ceiling (outer ring); the aim is the space between.' },
      { n: 7, f: 'What are the stages of an environmental impact assessment (EIA)?', b: 'Baseline study → predict impacts → mitigation → report → decision → monitoring. An EIA predicts and reduces impacts; it does not guarantee that harm will not happen.' },
    ]),

    // 2 Ecology
    ...sub(T2, `${P}-2-1`, '2.1', [
      { n: 1, f: 'Define population, community and ecosystem', b: 'Population: organisms of the same species in the same area at the same time.\nCommunity: populations of different species living and interacting in one area.\nEcosystem: a community plus its abiotic environment, interacting.' },
      { n: 2, f: 'Fundamental niche versus realised niche', b: 'Fundamental niche: everything a species could occupy.\nRealised niche: what it actually occupies, reduced by competition and other interactions.' },
      { n: 3, f: 'J-curve versus S-curve population growth', b: 'J-curve: exponential growth with no limit reached yet, often followed by a crash.\nS-curve: lag → exponential → transitional → plateau at carrying capacity (K), held there by negative feedback.', src: ECO },
      { n: 4, f: 'How do you estimate a population with the Lincoln index?', b: 'Mark M individuals and release them; after mixing, catch C and count R marked. N = (M × C) ÷ R.\nExample: 30 marked, 45 caught, 9 marked → N = 150.\nAssumes a closed population, marks stay on and do not affect survival, full mixing.' },
      { n: 5, f: 'How do you estimate a plant population with quadrats?', b: 'Place quadrats at random; count individuals in each. Mean per quadrat ÷ quadrat area = density per m²; density × total area = population.\nExample: mean 5 in 0.25 m² quadrats → 20 per m² → 12,000 in a 600 m² lawn.' },
      { n: 6, f: 'What is carrying capacity (K)?', b: 'The maximum population an environment can support sustainably. A limiting factor is the factor in shortest supply relative to need, which restricts growth.' },
    ]),
    ...sub(T2, `${P}-2-2`, '2.2', [
      { n: 1, f: 'How do you calculate net primary productivity?', b: 'NPP = GPP − R, in kJ m⁻² yr⁻¹ or g m⁻² yr⁻¹.\nExample: GPP 12,000 and R 7,800 → NPP = 4,200 kJ m⁻² yr⁻¹.' },
      { n: 2, f: 'How do you calculate GSP and NSP for consumers?', b: 'GSP = food eaten − faecal loss. NSP = GSP − R.\nExample: eats 900, faeces 540, respiration 250 → GSP 360, NSP 110 kJ m⁻² yr⁻¹. Remove faecal loss before subtracting respiration.' },
      { n: 3, f: 'How do you calculate ecological efficiency?', b: '(energy into new biomass at a level ÷ energy at the level below) × 100. About 10% is typical but values vary.\nExample: 270 ÷ 3,000 × 100 = 9.0%. A value over 100% means you divided the wrong way up.' },
      { n: 4, f: 'Why is energy lost between trophic levels?', b: 'Not all biomass is eaten (roots, bones, bark); not all eaten material is digested (lost as faeces); most assimilated energy is respired and lost as heat (second law of thermodynamics). Energy flows one way; matter cycles.' },
      { n: 5, f: 'Which ecological pyramids can be inverted?', b: 'Numbers: yes (one tree, many insects). Biomass: yes (phytoplankton and zooplankton at one moment). Productivity: never, because each level receives only part of the energy flowing into the level below.' },
      { n: 6, f: 'What is biomagnification?', b: 'Persistent substances such as some pesticides and mercury become more concentrated at each higher trophic level.' },
    ]),
    ...sub(T2, `${P}-2-3`, '2.3', [
      { n: 1, f: 'Carbon cycle: main storages', b: 'Atmosphere, oceans, biomass, soil, fossil fuels and sedimentary rock.', src: ECO },
      { n: 2, f: 'Carbon store versus carbon sink versus source', b: 'A store holds carbon. A sink takes in more carbon than it releases. A source releases more than it takes in.' },
      { n: 3, f: 'How does more atmospheric CO₂ cause ocean acidification?', b: 'More CO₂ dissolves in the ocean → carbonic acid → lower pH → less carbonate available for shells and coral.' },
      { n: 4, f: 'Nitrification versus denitrification', b: 'Nitrification: NH₄⁺ → NO₂⁻ → NO₃⁻ by Nitrosomonas and Nitrobacter; needs oxygen (aerobic).\nDenitrification: NO₃⁻ → N₂ by anaerobic bacteria, for example in waterlogged soil.' },
      { n: 5, f: 'What is nitrogen fixation and what carries it out?', b: 'Conversion of N₂ gas into usable compounds (NH₄⁺, or nitrate via nitrogen oxides from lightning). Done by free-living bacteria, Rhizobium in legume root nodules, the Haber process and lightning.' },
      { n: 6, f: 'How do you convert a mass of carbon to a mass of CO₂?', b: 'Multiply by 44/12 (1 t C ≈ 3.67 t CO₂).\nExample: 2 t C per hectare per year → 2 × 44/12 = 7.33 t CO₂.' },
    ]),
    ...sub(T2, `${P}-2-4`, '2.4', [
      { n: 1, f: 'What is a biome?', b: 'A collection of ecosystems with similar climate and so similar communities, found in different parts of the world.', src: BIOME },
      { n: 2, f: 'Why is insolation per m² lower at high latitudes?', b: 'Rays hit at a low angle, so the energy spreads over a larger area; and they pass through more atmosphere, so more is absorbed, scattered or reflected.' },
      { n: 3, f: 'Tricellular model: what happens at 0°, 30°, 60° and 90°?', b: '0°: rising air, low pressure, heavy rain (ITCZ) → rainforest.\n30°: sinking air warms and dries, high pressure → hot deserts.\n60°: rising air at the polar front → temperate forest.\n90°: sinking cold air, high pressure, very dry → polar desert.' },
      { n: 4, f: 'How do you identify a biome from a climate graph?', b: 'Total the monthly precipitation; find the annual temperature range (warmest − coldest month); check for a dry season or months below 0 °C; match to a biome quoting at least two figures; link the pattern to its cause (ITCZ, sinking air, latitude).' },
      { n: 5, f: 'How is climate change expected to affect biomes?', b: 'Biomes shift poleward and upslope; tundra and mountain-top habitats shrink; thawing permafrost releases CO₂ and CH₄, which causes more warming (positive feedback).' },
    ]),
    ...sub(T2, `${P}-2-5`, '2.5', [
      { n: 1, f: 'Zonation versus succession', b: 'Zonation: change in community along an environmental gradient in space.\nSuccession: change in community at one place over time. A dune transect shows zonation that reflects succession, because inland dunes are older.' },
      { n: 2, f: 'Primary versus secondary succession', b: 'Primary: starts on bare substrate with no soil (a lava flow).\nSecondary: starts where soil is already present (an abandoned field), so it is faster.' },
      { n: 3, f: 'What are pioneer species?', b: 'The first colonisers of bare ground. They tolerate harsh conditions, grow fast, produce many small well-dispersed seeds or spores (r-strategists) and add organic matter that helps build soil.' },
      { n: 4, f: 'What does the P:R ratio show during succession?', b: 'P:R = GPP ÷ R. Above 1: biomass is accumulating. About 1: steady state (climax). Below 1: biomass is falling.\nExample: GPP 12,000 and R 7,500 → P:R = 1.6, still accumulating.' },
      { n: 5, f: 'When is NPP highest in a succession?', b: 'Mid-succession. GPP keeps rising towards climax, but respiration by the large standing biomass rises to nearly match it, so NPP falls towards zero at climax.' },
      { n: 6, f: 'Climax community versus plagioclimax', b: 'Climax: a relatively stable end community in balance with climate and soil.\nPlagioclimax: a community held below climax by human activity, such as grazed pasture, a mown lawn or moorland burned in rotation.' },
    ]),

    // 3 Biodiversity and conservation
    ...sub(T3, `${P}-3-1`, '3.1', [
      { n: 1, f: 'What are the three levels of biodiversity?', b: 'Genetic diversity: the range of genes and alleles within a species or population.\nSpecies diversity: the number of species and their relative abundance.\nHabitat diversity: the range of habitats or ecosystems in an area.' },
      { n: 2, f: 'Species richness versus species evenness', b: 'Richness: the number of species present.\nEvenness: how similar the population sizes of the species are. "Biodiversity = number of species" describes richness only.' },
      { n: 3, f: 'How do you calculate Simpson\'s reciprocal index?', b: 'D = N(N − 1) ÷ Σn(n − 1), where N is the total number of individuals and n the number of each species. A species with n = 1 contributes 0. Higher D = more diverse; minimum 1.\nExample: counts 5, 5, 5, 5 → 380 ÷ 80 = 4.75.' },
      { n: 4, f: 'How does speciation happen?', b: 'Variation exists; a geographical barrier or a difference in behaviour or timing stops gene flow; different selection pressures act on each population; allele frequencies change separately over many generations; the populations can no longer interbreed to give fertile offspring.' },
      { n: 5, f: 'How does plate tectonics affect biodiversity?', b: 'Splitting land masses isolates populations (speciation); collisions build mountains and new habitats; land bridges allow species to spread and compete.' },
      { n: 6, f: 'Mass extinction versus background extinction rate', b: 'Mass extinction: loss of a large share of species over a geologically short time; five are recorded in the fossil record (the end-Cretaceous, about 66 million years ago, followed an asteroid impact).\nBackground rate: the normal, slow rate of extinction between them.' },
    ]),
    ...sub(T3, `${P}-3-2`, '3.2', [
      { n: 1, f: 'Name five main human causes of biodiversity loss', b: 'Habitat loss and fragmentation; overexploitation (harvest exceeds replacement); invasive species; pollution; climate change (conditions shift faster than species can move or adapt).' },
      { n: 2, f: 'What is an edge effect?', b: 'Changed conditions near a habitat\'s boundary: more light, wind and drying, and more predators and invasive species. Fragmentation increases the amount of edge.', src: BIO },
      { n: 3, f: 'Which features make a species vulnerable to extinction?', b: 'Small population, small range, low reproductive rate, specialised niche, high trophic level or large body, low genetic diversity, and value to people (hunting or trade).' },
      { n: 4, f: 'Why are tropical rainforests especially vulnerable?', b: 'They have very high diversity, most nutrients are held in the biomass rather than the soil, and they recover slowly once cleared.' },
      { n: 5, f: 'What is the IUCN Red List?', b: 'A classification of extinction risk: Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild, Extinct (plus Data Deficient). Criteria include population size, rate of decline, range size and fragmentation.' },
    ]),
    ...sub(T3, `${P}-3-3`, '3.3', [
      { n: 1, f: 'Keystone, flagship and umbrella species: what is the difference?', b: 'Keystone: has a large effect on the ecosystem relative to its numbers (defined by effect, not trophic level).\nFlagship: has public appeal that attracts support.\nUmbrella: needs a large area, so protecting it protects many others.' },
      { n: 2, f: 'Captive breeding and reintroduction: one strength and two limitations', b: 'Strength: can save species close to extinction and educates the public.\nLimitations: expensive; small gene pool; the habitat may still be damaged.' },
      { n: 3, f: 'What does the SLOSS debate compare?', b: 'Single large or several small reserves. One large reserve usually gives more core area (less edge); several small ones can spread risk from fire or disease and cover more habitat types.' },
      { n: 4, f: 'How do you calculate the core area of a square reserve?', b: '(side − 2 × edge depth)², because the edge depth comes off both sides. Core share = core area ÷ total area × 100.\nExample: a 10 km square with a 1 km edge → (10 − 2)² = 64 km², 64% of the reserve.' },
      { n: 5, f: 'What is the role of corridors and buffer zones in reserve design?', b: 'Corridors link habitat fragments so organisms can move between them. Buffer zones surround the core and protect it from outside disturbance. Compact shapes have less edge per unit area than long, thin ones.' },
      { n: 6, f: 'Regeneration versus rewilding', b: 'Regeneration: active restoration of a degraded site.\nRewilding: restoring natural processes so the ecosystem regulates itself with minimal ongoing management, often with reintroductions.' },
    ]),

    // 4 Water
    ...sub(T4, `${P}-4-1`, '4.1', [
      { n: 1, f: 'What drives the hydrological cycle?', b: 'Solar energy and gravity. It is the system of storages and flows that moves water between the oceans, atmosphere, land and living things.' },
      { n: 2, f: 'Water transfers versus transformations', b: 'Transfer: water moves without a change of state (infiltration, runoff, advection, precipitation).\nTransformation: the state changes (evaporation, condensation, melting). A change of state is the test.' },
      { n: 3, f: 'How do you calculate residence time?', b: 'Residence time = storage ÷ flow rate.\nExample: an aquifer holding 150 km³ recharged at 0.5 km³ per year → 300 years. Pumping faster than recharge mines it like a non-renewable resource.' },
      { n: 4, f: 'How does urbanisation change the water cycle?', b: 'Impermeable surfaces mean less infiltration and more surface runoff, so lag time shortens and flood peaks are higher.' },
      { n: 5, f: 'Thermohaline circulation and upwelling', b: 'Thermohaline circulation: deep ocean circulation driven by differences in temperature and salinity.\nUpwelling: the rising of cold, nutrient-rich deep water to the surface, supporting high productivity.' },
    ]),
    ...sub(T4, `${P}-4-2`, '4.2', [
      { n: 1, f: 'What is water security?', b: 'Reliable access to enough safe water for people and ecosystems, with an acceptable risk from floods and droughts.', src: WAT },
      { n: 2, f: 'Physical versus economic water scarcity', b: 'Physical: there is not enough water in the region.\nEconomic: water exists but people cannot afford or reach it.' },
      { n: 3, f: 'What are the water-availability thresholds per person per year?', b: '1,700 m³ or more: no stress. 1,000–1,699 m³: stress. 500–999 m³: scarcity. Below 500 m³: absolute scarcity. Remember 1 km³ = 10⁹ m³ when dividing by population.' },
      { n: 4, f: 'Water footprint versus virtual water', b: 'Water footprint: the total freshwater used to produce what a person or country consumes.\nVirtual water: the water embedded in traded goods.' },
      { n: 5, f: 'How do you evaluate a water-security strategy?', b: 'Say whether it increases supply or reduces demand; give one benefit and who gains; give one environmental and one social or economic cost; judge under what conditions it would work best.' },
    ]),
    ...sub(T4, `${P}-4-3`, '4.3', [
      { n: 1, f: 'What are MSY and CPUE?', b: 'Maximum sustainable yield (MSY): the largest catch that can be taken every year without shrinking the stock.\nCatch per unit effort (CPUE): catch ÷ fishing effort, a proxy for stock size.' },
      { n: 2, f: 'Why can a steady catch hide a collapsing fish stock?', b: 'If effort rises, the total catch can hold steady while CPUE falls. Falling CPUE with rising effort means a shrinking stock.' },
      { n: 3, f: 'Name four fishery controls and one limit of each', b: 'Quota: needs honest reporting; discards may rise.\nMesh size: does not cut overall effort.\nClosed season: effort may shift to other months.\nNo-take marine protected area: needs patrols; fishers lose grounds.' },
      { n: 4, f: 'What is the feed conversion ratio in aquaculture?', b: 'Feed mass ÷ increase in body mass (no units). A lower value means the farmed organism turns feed into body mass more efficiently. Aquaculture is not automatically sustainable: name its impacts.' },
    ]),
    ...sub(T4, `${P}-4-4`, '4.4', [
      { n: 1, f: 'Point versus non-point source pollution', b: 'Point: from one identifiable outlet, such as a pipe, which can be licensed and monitored.\nNon-point: from many diffuse sources, such as farm runoff, which is much harder to control.' },
      { n: 2, f: 'What is biochemical oxygen demand (BOD)?', b: 'The oxygen used by microorganisms to break down organic matter in a water sample over a set time. BOD is the demand; dissolved oxygen is the supply left. High BOD usually goes with low dissolved oxygen.', src: WAT },
      { n: 3, f: 'Outline the stages of eutrophication', b: 'Nutrients (nitrate, phosphate) enter → algal bloom → light blocked, plants die → decomposers use oxygen → animals die → more nutrients released → positive feedback. Decomposers, not algae, cause the fall in oxygen.' },
      { n: 4, f: 'What is an indicator species?', b: 'An organism whose presence or absence shows the level of pollution. It gives an indirect measurement: a record of conditions over time, unlike a chemical snapshot.' },
      { n: 5, f: 'Bioaccumulation versus biomagnification', b: 'Bioaccumulation: build-up of a persistent pollutant within one organism.\nBiomagnification: rising concentration at each higher trophic level. Factor = higher-level concentration ÷ lower-level concentration (0.2 → 5.0 ppm gives 25).' },
      { n: 6, f: 'What are the three levels of pollution management?', b: 'Change the human activity that produces the pollutant; control its release; clean up and restore the damaged ecosystem.' },
    ]),

    // 5 Land
    ...sub(T5, `${P}-5-1`, '5.1', [
      { n: 1, f: 'What is humus?', b: 'Dark, stable organic matter formed when dead material decomposes. It holds water and nutrients.', src: SOIL },
      { n: 2, f: 'Soil as a system: give the transfers and transformations', b: 'Transfers (material moves): infiltration, percolation, leaching, mixing by earthworms, translocation between horizons.\nTransformations (material changes): decomposition, humification, weathering, nitrogen fixation.' },
      { n: 3, f: 'Sand versus clay soils', b: 'Sand: largest particles; drains and warms quickly, well aerated, but holds little water and few nutrients.\nClay: smallest particles; holds water and nutrients but drains poorly. Loam (a mix) has the highest primary productivity.' },
      { n: 4, f: 'Why is soil effectively non-renewable?', b: 'It forms very slowly, from parent material, climate, organisms, relief and time, so losses by erosion cannot be replaced on a human timescale.' },
      { n: 5, f: 'What is salinization and how can it be reduced?', b: 'The build-up of salts at the surface when irrigation water evaporates in hot, dry climates with poor drainage. Reduced by drip irrigation, drainage channels and flushing salts.' },
      { n: 6, f: 'How do you measure soil water content and organic matter?', b: 'Water: (fresh mass − oven-dry mass) ÷ fresh mass × 100, "of fresh mass".\nOrganic matter (loss on ignition): (dry mass − mass after strong heating) ÷ dry mass × 100.' },
      { n: 7, f: 'Match conservation methods to water and wind erosion', b: 'Water erosion: contour ploughing, terracing, cover crops, mulching, no-till.\nWind erosion: windbreaks, cover crops, controlled grazing.\nLink each method to its mechanism: slows water, slows wind, or covers the surface.' },
    ]),
    ...sub(T5, `${P}-5-2`, '5.2', [
      { n: 1, f: 'What is food security?', b: 'All people, at all times, having access to enough safe and nutritious food.', src: SOIL },
      { n: 2, f: 'Intensive versus extensive farming', b: 'Intensive: high inputs (labour, capital, fertiliser) per unit area. Extensive: low inputs per unit area. The terms describe inputs per area, not farm size or purpose; a farm can be subsistence and intensive.' },
      { n: 3, f: 'What is the energy ratio of a farm system?', b: 'Food energy out ÷ energy in. It is high for labour-based subsistence farms and low for intensive livestock, which eats crops people could eat.' },
      { n: 4, f: 'Why does a plant-based diet feed more people per hectare?', b: 'Roughly 90% of energy is lost at each trophic step (an approximation, not an exact rule), so eating crops directly feeds many more people than eating animals fed on crops. Grazing land that cannot grow crops is the main exception.' },
      { n: 5, f: 'Food loss versus food waste', b: 'Food loss happens early in the supply chain (harvest, storage, transport), mostly in lower-income countries.\nFood waste happens late (retail, households), mostly in higher-income countries.' },
      { n: 6, f: 'Which greenhouse gases come from agriculture?', b: 'Methane from cattle and rice paddies; nitrous oxide from fertilised soils; carbon dioxide from machinery and land clearance.' },
    ]),

    // 6 Atmosphere and climate change
    ...sub(T6, `${P}-6-1`, '6.1', [
      { n: 1, f: 'What is the composition of dry air?', b: 'N₂ 78%, O₂ 21%, Ar 0.93%, CO₂ about 0.04%. CO₂ was about 280 ppm before industrialisation and is now above 420 ppm.' },
      { n: 2, f: 'Troposphere versus stratosphere', b: 'Troposphere: surface to about 12 km on average; weather, almost all water vapour, most of the mass; temperature falls about 6.5 °C per km.\nStratosphere: to about 50 km; contains the ozone layer; temperature rises with height because ozone absorbs UV.' },
      { n: 3, f: 'What is albedo and how do you use it?', b: 'The fraction of incoming solar radiation a surface reflects (0 to 1); Earth\'s overall albedo is about 0.30.\nAbsorbed = incoming × (1 − albedo). Example: 300 W m⁻² on snow of albedo 0.8 → 60 W m⁻² absorbed.' },
      { n: 4, f: 'Natural versus enhanced greenhouse effect', b: 'Natural: naturally occurring greenhouse gases keep Earth\'s average near 15 °C instead of about −18 °C (about 33 °C of warming); it is essential.\nEnhanced: extra warming caused by human additions of greenhouse gases.' },
      { n: 5, f: 'How do greenhouse gases warm the surface?', b: 'Short-wave radiation comes in from the Sun; some is reflected and the rest absorbed. The surface emits long-wave (infrared) radiation, which greenhouse gases absorb and re-emit, some back towards the surface. They do not absorb UV or "reflect heat".' },
    ]),
    ...sub(T6, `${P}-6-2`, '6.2', [
      { n: 1, f: 'What is global warming potential (GWP) and CO₂e?', b: 'GWP: warming from 1 t of a gas relative to 1 t of CO₂, usually over 100 years (CO₂ 1, CH₄ about 28, N₂O about 265).\nCO₂e = mass × GWP. Example: 4 t CH₄ × 28 = 112 t CO₂e.' },
      { n: 2, f: 'Main human sources of CO₂, CH₄ and N₂O', b: 'CO₂: fossil fuels, deforestation, cement.\nCH₄: livestock, rice, landfill, fossil-fuel leaks.\nN₂O: fertilisers.\nHalocarbons: refrigerants and foams.' },
      { n: 3, f: 'Give three positive feedbacks in climate change', b: 'Ice–albedo (melting ice exposes darker surfaces that absorb more energy); permafrost thaw releasing CH₄ and CO₂; more water vapour in warmer air; forest dieback and fire. Negative feedbacks include more plant growth and more low cloud.' },
      { n: 4, f: 'What evidence shows rising greenhouse gases and temperatures?', b: 'Direct CO₂ measurements (rising trend with a seasonal wobble from Northern Hemisphere plants); air bubbles in ice cores; instrumental temperature records — about 1.1 °C warming by 2011–2020 above 1850–1900 (IPCC AR6).' },
      { n: 5, f: 'Name five impacts of climate change', b: 'Sea-level rise (thermal expansion and land-ice melt); more extreme weather; species and biomes shifting poleward and uphill; coral bleaching and ocean acidification; changes to crop yields, water supply and disease vectors; displacement of people.' },
      { n: 6, f: 'What is a tipping point in the climate system?', b: 'A threshold beyond which a system shifts to a new, hard-to-reverse state.', src: ATM },
    ]),
    ...sub(T6, `${P}-6-3`, '6.3', [
      { n: 1, f: 'Mitigation versus adaptation', b: 'Mitigation reduces emissions or removes greenhouse gases (tackles the cause): renewables, reforestation, carbon capture, carbon tax.\nAdaptation reduces harm (tackles the effects): sea walls, drought-tolerant crops, early-warning systems, managed retreat.' },
      { n: 2, f: 'Kyoto Protocol versus Paris Agreement', b: 'Kyoto (1997): binding targets for industrialised countries only.\nParis (2015): keep warming well below 2 °C and pursue 1.5 °C, through nationally determined contributions (NDCs) reviewed every five years. Both sit under the UNFCCC (1992).' },
      { n: 3, f: 'What is a carbon sink?', b: 'A store that takes in more carbon than it releases, such as forests, peat and oceans. Protecting and expanding sinks is a form of mitigation.', src: ATM },
      { n: 4, f: 'What is the main limitation of solar radiation management?', b: 'It reflects sunlight to cool the planet, so it treats a symptom: greenhouse gases stay high and ocean acidification is left untouched.' },
      { n: 5, f: 'How do you evaluate a climate strategy?', b: 'Say whether it is mitigation or adaptation; give strengths (scale, speed, co-benefits) and limitations (cost, who pays, technology risk, side effects, equity); bring in a perspective (technocentric vs ecocentric, richer vs poorer countries); end with a conditional judgement.' },
    ]),
    ...sub(T6, `${P}-6-4`, '6.4', [
      { n: 1, f: 'How is stratospheric ozone formed and how does it absorb UV?', b: 'Formation: O₂ + UV → O + O, then O + O₂ → O₃.\nAbsorption: O₃ + UV → O₂ + O.' },
      { n: 2, f: 'How does chlorine destroy ozone?', b: 'UV releases Cl from CFCs. Cl + O₃ → ClO + O₂, then ClO + O → Cl + O₂. Chlorine is regenerated, so it acts as a catalyst: one atom can destroy many thousands of ozone molecules.' },
      { n: 3, f: 'Why does the Antarctic ozone hole form in spring?', b: 'Polar stratospheric clouds form in the polar winter; chlorine is released from them when sunlight returns in spring (September–October). Below 220 Dobson units counts as an ozone hole.' },
      { n: 4, f: 'Montreal Protocol and Kigali Amendment', b: 'Montreal Protocol (1987), following the Vienna Convention (1985): phased out ozone-depleting substances; ratified by every UN member state.\nKigali Amendment (2016): phases down HFCs, the substitutes, because they are strong greenhouse gases.' },
      { n: 5, f: 'Ozone depletion versus climate change', b: 'Different mechanisms: ozone absorbs UV; greenhouse gases absorb infrared. The ozone hole does not cause warming and CO₂ does not destroy ozone. The link: CFCs and HFCs are also greenhouse gases.' },
      { n: 6, f: 'Why is ozone recovery slow?', b: 'Ozone-depleting substances last decades in the atmosphere, so recovery lags behind the ban. The 2022 WMO/UNEP assessment expects the Antarctic ozone layer to return to 1980 levels around the 2060s.' },
    ]),

    // 7 Natural resources
    ...sub(T7, `${P}-7-1`, '7.1', [
      { n: 1, f: 'Renewable versus non-renewable natural capital', b: 'Renewable: regenerates within a human timescale if used at or below its growth rate (forests, fish stocks).\nNon-renewable: forms far more slowly than it is used, so any extraction depletes it (ores, fossil fuels).' },
      { n: 2, f: 'What is sustainable yield and how is it found from data?', b: 'The rate of increase of natural capital: the amount that can be taken without reducing the stock. SY = stock at t + 1 − stock at t, with no harvest in between, in units per year. Harvest > SY means capital is being depleted.' },
      { n: 3, f: 'What is the tragedy of the commons?', b: 'Overuse of a shared resource, because each user gains the full benefit of taking more but shares the cost with everyone. Commons can be managed well where boundaries are clear, rules are local and cheating is punished.' },
      { n: 4, f: 'Why is the value of a natural resource dynamic?', b: 'It changes with technology (lithium for batteries), culture (sacred groves), price (low-grade ore becomes worth mining) and substitution.' },
      { n: 5, f: 'How do you calculate the lifespan of a resource?', b: 'Lifespan = remaining stock ÷ net annual use, in years. State the assumption that the rate of use stays constant.' },
    ]),
    ...sub(T7, `${P}-7-2`, '7.2', [
      { n: 1, f: 'Is nuclear power renewable?', b: 'No. Nuclear fission is non-renewable because uranium is a finite ore, but it is not a fossil fuel. Non-renewable: coal, oil, natural gas, nuclear. Renewable: solar, wind, hydro, geothermal, tidal, wave, biomass.' },
      { n: 2, f: 'Energy efficiency versus energy conservation', b: 'Efficiency: getting the same output from less energy input (technology).\nConservation: using less energy by changing behaviour.', src: NAT },
      { n: 3, f: 'How is the intermittency of wind and solar managed?', b: 'By energy storage, a mixed grid, interconnection with other regions and demand management.' },
      { n: 4, f: 'Percentage change versus percentage-point change', b: 'A renewable share rising from 17.9% to 30.6% is a rise of 12.7 percentage points. As a relative change it is 12.7 ÷ 17.9 × 100 = 70.9%. Say which you mean.' },
      { n: 5, f: 'Why can energy security conflict with low-carbon goals?', b: 'Energy security is reliable, affordable access to enough energy. A domestic coal supply is secure but high-carbon, while imported or intermittent low-carbon sources can reduce security unless storage and diversity are added.' },
    ]),
    ...sub(T7, `${P}-7-3`, '7.3', [
      { n: 1, f: 'What is the waste hierarchy?', b: 'Reduce → reuse → recycle or compost → recover energy → dispose. Reduction prevents waste; recycling manages waste that already exists.' },
      { n: 2, f: 'What does landfill release?', b: 'Methane, from organic waste breaking down without oxygen, and leachate, a liquid that can pollute groundwater.' },
      { n: 3, f: 'Incineration: one advantage and two disadvantages', b: 'Advantage: cuts waste volume and can generate electricity (energy-from-waste).\nDisadvantages: air emissions and toxic ash.' },
      { n: 4, f: 'Place waste strategies on the three levels of pollution management', b: 'Altering human activity: less packaging, repair, reuse, durable goods.\nControlling release: recycling, composting, energy-from-waste, deposit-return, landfill tax.\nClean-up and restoration: litter picks, beach clean-ups, reclaiming landfill sites.' },
      { n: 5, f: 'How do you work out the lifespan of a landfill site?', b: 'Volume per year = mass ÷ density; lifespan = space left ÷ volume per year.\nExample: 12,000 t a year at 0.8 t/m³ = 15,000 m³; 150,000 m³ left → 10 years.' },
    ]),

    // 8 Human populations and urban systems
    ...sub(T8, `${P}-8-1`, '8.1', [
      { n: 1, f: 'How do you calculate the natural increase rate and doubling time?', b: 'NIR (%) = (CBR − CDR) ÷ 10, with CBR and CDR per 1,000. Doubling time ≈ 70 ÷ growth rate (%).\nExample: CBR 25, CDR 10 → NIR 1.5% → doubling time about 47 years. Assumes a constant rate and no migration.' },
      { n: 2, f: 'What is the total fertility rate (TFR)?', b: 'The average number of children per woman over her lifetime at current rates. Replacement level ≈ 2.1. Unlike the crude birth rate, it does not depend on the age structure, so it is better for comparing countries.', src: POP },
      { n: 3, f: 'How do you calculate the dependency ratio?', b: '(people aged 0–14 + people aged 65+) ÷ people aged 15–64 × 100, giving dependants per 100 people of working age.' },
      { n: 4, f: 'Describe stages 1–4 of the demographic transition model', b: '1: high birth and death rates. 2: death rate falls fast (clean water, sanitation, vaccination); birth rate stays high. 3: birth rate falls (contraception, education of women, urban living). 4: both low.' },
      { n: 5, f: 'Limitations of the demographic transition model', b: 'Based on European history; assumes birth rates will follow death rates down; ignores migration; gives no timescale; stage 5 was added later and is not explained by the original model.' },
      { n: 6, f: 'Malthus versus Boserup', b: 'Malthus: population growth is limited by resources (food), leading to checks such as famine.\nBoserup: population pressure drives innovation that raises food production.' },
      { n: 7, f: 'What is population momentum?', b: 'Continued growth after fertility falls to replacement level, because many young people are still entering child-bearing age.', src: POP },
    ]),
    ...sub(T8, `${P}-8-2`, '8.2', [
      { n: 1, f: 'Urbanisation versus urban growth', b: 'Urbanisation: an increase in the proportion of people living in urban areas.\nUrban growth: an increase in the number. Both can happen together.' },
      { n: 2, f: 'Why is a city described as an open system?', b: 'Food, water, energy, materials and people flow in; waste, pollutants, heat and goods flow out. It relies on land far beyond its boundary, so its ecological footprint is much larger than its area.' },
      { n: 3, f: 'What causes an urban heat island?', b: 'Dark surfaces absorb and store heat; waste heat from vehicles, buildings and air conditioning; less vegetation, so less evapotranspiration; tall buildings trap heat and reduce wind. It is most marked at night.' },
      { n: 4, f: 'Give push and pull factors in rural–urban migration', b: 'Push (rural): few jobs, low incomes, poor services, drought, land degradation, farm mechanisation.\nPull (urban): jobs, wages, education, healthcare, perceived opportunity.' },
      { n: 5, f: 'Name five features of sustainable urban planning', b: 'Compact mixed-use design; brownfield before greenfield; public transport and cycling; green roofs, parks and street trees; energy- and water-efficient buildings; waste separation and recycling.' },
    ]),
    ...sub(T8, `${P}-8-3`, '8.3', [
      { n: 1, f: 'Primary versus secondary pollutants', b: 'Primary: emitted directly from a source (CO, NOx, SO₂, particulates, VOCs).\nSecondary: formed by reactions between primary pollutants in the atmosphere (tropospheric ozone, PANs).' },
      { n: 2, f: 'How does photochemical smog form?', b: 'Traffic emits NO and VOCs; NO oxidises to NO₂; sunlight splits NO₂ → NO + O, then O + O₂ → O₃; VOCs and nitrogen oxides form PANs and more ozone. Sunny, warm, still weather favours it.' },
      { n: 3, f: 'What is a thermal inversion?', b: 'A layer of warm air above cooler surface air, which stops pollutants rising and dispersing, so smog is trapped near the ground.' },
      { n: 4, f: 'Tropospheric versus stratospheric ozone', b: 'Tropospheric (ground-level) ozone is a harmful secondary pollutant. Stratospheric ozone absorbs UV and protects life.' },
      { n: 5, f: 'Two strategies for urban air pollution and their limits', b: 'Low-emission zone (controls release): traffic may divert and it needs enforcement.\nCatalytic converters (control release): work only if fitted and maintained, and do not cut vehicle numbers.\nCongestion charge (alters activity): can fall hardest on lower-income drivers.' },
    ]),

    // HL lenses (HL only)
    ...topicOnly(`${P}-hl-a-environmental-law`, '9', [
      { n: 1, f: 'Convention versus protocol in environmental law', b: 'A convention (treaty) is an agreement between states setting a framework. A protocol is a later agreement that adds binding detail to it. Ratification is a state formally agreeing to be bound. (HL only)' },
      { n: 2, f: 'Hard law versus soft law', b: 'Hard law: legally binding and enforceable, with penalties.\nSoft law: guidance, declarations and voluntary targets with no penalties, working through reputation. The Paris Agreement mixes both: a binding duty to submit pledges, no penalty for missing them. (HL only)' },
      { n: 3, f: 'Name four principles of environmental law', b: 'Precautionary principle (act despite uncertainty when harm could be serious); polluter pays; prevention (stop harm before it happens); intergenerational equity. (HL only)' },
      { n: 4, f: 'Give four international environmental agreements with their dates and targets', b: 'Ramsar Convention (wetlands, 1971); CITES (trade in endangered species, 1973); Montreal Protocol (ozone-depleting substances, 1987); Paris Agreement (climate, 2015). UNCLOS sets exclusive economic zones to 200 nautical miles. (HL only)' },
      { n: 5, f: 'What is meant by rights of nature?', b: 'Giving ecosystems legal standing. Examples: Ecuador\'s constitution (2008) and the Whanganui River in New Zealand (2017). (HL only)' },
      { n: 6, f: 'Why do international environmental laws often fail?', b: 'No global enforcer because of state sovereignty; free riders; costly monitoring of oceans and remote forests; weak penalties or corruption; key polluters outside the agreement. (HL only)' },
      { n: 7, f: 'Why did the Montreal Protocol succeed?', b: 'Clear science, cheap substitutes, few producers to regulate, trade pressure and financial help for poorer countries. It is ratified by every UN member state. (HL only)' },
      { n: 8, f: 'How do you evaluate an environmental law?', b: 'Scale (international, national, local); force (hard or soft); target pressure; enforcement (who monitors, what happens to a breach); evidence (has the indicator improved, and could anything else explain it); judgement. (HL only)' },
    ]),
    ...topicOnly(`${P}-hl-b-environmental-and-ecological-economics`, '10', [
      { n: 1, f: 'What is an externality?', b: 'A cost or benefit to people outside a transaction. When prices leave out environmental costs, the result is market failure; internalising makes the polluter pay the external cost. (HL only)' },
      { n: 2, f: 'Environmental economics versus ecological economics', b: 'Environmental economics: the environment sits inside the economy; fix market failure by pricing harm; uses cost-benefit analysis; weak sustainability.\nEcological economics: the economy sits inside the biosphere; limit material throughput first; strong sustainability. (HL only)' },
      { n: 3, f: 'Weak versus strong sustainability', b: 'Weak: human-made capital can replace natural capital.\nStrong: critical natural capital cannot be replaced. (HL only)' },
      { n: 4, f: 'What are the components of total economic value (TEV)?', b: 'Use values: direct use (fish, recreation), indirect use (flood control, pollination, water purification), option (possible future medicines).\nNon-use values: existence (knowing a species survives), bequest (leaving it to future generations). (HL only)' },
      { n: 5, f: 'Pollution tax versus cap-and-trade', b: 'A pollution tax fixes the price per unit and lets the quantity emitted vary.\nCap-and-trade fixes the total quantity and lets the permit price vary; cheaper abaters do more of the cutting. (HL only)' },
      { n: 6, f: 'Will a firm cut emissions under a tax?', b: 'It cuts every tonne that is cheaper to abate than to tax and pays tax on the rest.\nExample: tax USD 40 per tonne; the first 5,000 t cost USD 25 to cut, further cuts USD 60 → cut 5,000 t and stop. (HL only)' },
      { n: 7, f: 'How does the discount rate affect environmental decisions?', b: 'Present value = future value ÷ (1 + r)ᵗ. USD 1,000,000 of damage in 50 years is worth about USD 608,000 now at 1% but about USD 87,000 at 5%, so high rates favour short-term gains. The rate is a value judgement. (HL only)' },
      { n: 8, f: 'Name four methods of valuing nature', b: 'Market prices; contingent valuation (stated willingness to pay in a survey); travel cost; hedonic pricing. (HL only)' },
    ]),
    ...topicOnly(`${P}-hl-c-environmental-ethics`, '11', [
      { n: 1, f: 'Intrinsic versus instrumental value', b: 'Intrinsic: valuable in itself (ecocentric views).\nInstrumental: valuable for its use to someone (anthropocentric and technocentric views). (HL only)' },
      { n: 2, f: 'Consequentialism, deontology and virtue ethics', b: 'Consequentialism: judge actions by outcomes (utilitarianism: the greatest good for the greatest number).\nDeontology: judge by duties and rights, whatever the outcome.\nVirtue ethics: ask what a person of good character would do. (HL only)' },
      { n: 3, f: 'Who has moral standing? Anthropocentric, sentientist, biocentric, ecocentric', b: 'Anthropocentric: humans only. Sentientist: beings that can suffer (Singer, 1975). Biocentric: every living organism (Taylor, 1986). Ecocentric: ecosystems, species and processes as wholes (Leopold\'s land ethic, 1949; Naess\'s deep ecology, 1973). (HL only)' },
      { n: 4, f: 'Distributive, procedural and intergenerational justice', b: 'Distributive: who gets the costs and benefits.\nProcedural: who has a say in decisions.\nIntergenerational: duties to future people. (HL only)' },
      { n: 5, f: 'What is climate justice?', b: 'The idea that the impacts of climate change fall hardest on many low-emitting, low-income countries and people, who did least to cause it, so responsibility and support should reflect that. (HL only)' },
      { n: 6, f: 'How do the three HL lenses explain the success of the Montreal Protocol?', b: 'Law: a binding phase-out. Economics: affordable substitutes made compliance cheap and benefits to health and crops large. Ethics: precaution and intergenerational equity justified acting before every uncertainty was resolved. (HL only)' },
    ]),
  ],
};
