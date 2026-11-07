/**
 * D-444 -- flashcards for OxfordAQA International GCSE Biology 9201
 * (Version 5.2, for exams May/June 2018 onwards).
 *
 * 9201 is untiered, so no card carries a tier.
 *
 * Topic 2 (Bioenergetics) is itemised into sub-topics 3.2.1-3.2.6, so its ids
 * are `<sub-topic number>-<n>`. Topics 1 and 3-6 itemise no sub-topics in the
 * syllabus record, so their cards sit on the topic and ids are `<topic>-<n>`.
 * Ids are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9201); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for formulae.
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

/** For a topic that itemises no subtopics: the card sits on the topic alone. */
const topicOnly = (topic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b, src }) => ({
    id: `${number}-${n}`,
    topic,
    front: f,
    back: b,
    origin: src ? 'revision-notes' as const : 'authored' as const,
    ...(src ? { source: src } : {}),
  }));

const BIO = 'bioenergetics-oxfordaqa-igcse-biology';

const R = (slug: string) => `oxfordaqa-igcse-biology-${slug}-revision-notes`;
const ORG = 'igcse-oxfordaqa-biology-organisation-revision-notes';
const PHT = R('photosynthesis-limiting-factors-and-transport-in-plants');
const CIRC = R('circulation-in-humans-heart-vessels-blood-and');
const DIG = R('digestion-and-enzymes');
const BR = R('breathing-and-respiration');
const EN = R('energy-transfer-biomass-pyramids-adaptations-and');
const DECAY = R('decay-the-carbon-cycle-and-human-effects-on-the');
const NERV = R('nervous-system-reflexes-and-animal-behaviour');
const HOM = R('homeostasis-temperature-control-and-blood-glucose');
const INF = R('infection-immunity-vaccination-and-antibiotics');
const WAT = R('water-and-ion-balance-liver-kidneys-and-adh');
const GV = R('genetic-variation-monohybrid-inheritance-dna-and');
const RCD = R('reproduction-cell-division-stem-cells-and-tumours');
const GM = R('genetic-manipulation-cloning-genetic-engineering-and');
const VNS = R('variation-natural-selection-and-the-origin-of-species');

export const DECK_OXFORDAQA_IGCSE_BIOLOGY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'biology',
  syllabusCode: '9201',
  syllabusSeries: 'Version 5.2, for exams May/June 2018 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Organisation
    ...topicOnly('organisation-oxfordaqa-igcse-biology', '1', [
      { n: 1, f: 'Functions of the nucleus, cytoplasm and cell membrane', b: 'Nucleus: controls the activities of the cell.\nCytoplasm: where most of the chemical reactions take place.\nCell membrane: controls the passage of substances into and out of the cell.', src: ORG },
      { n: 2, f: 'Functions of mitochondria and ribosomes', b: 'Mitochondria: where most energy is released in respiration.\nRibosomes: where protein synthesis occurs.', src: ORG },
      { n: 3, f: 'Structures plant cells have that animal cells lack', b: 'Chloroplasts (absorb light energy to make food), a permanent vacuole filled with cell sap, and a cell wall made of cellulose, which strengthens the cell.' },
      { n: 4, f: 'How does a bacterial cell differ from a plant or animal cell?', b: 'It is prokaryotic: the genes are not in a distinct nucleus, and some genes are in small circular structures called plasmids. It has cytoplasm and a membrane surrounded by a cell wall.' },
      { n: 5, f: 'Tissue, organ and organ system', b: 'Tissue: a group of cells with similar structure and function.\nOrgan: made of tissues; one organ may contain several different tissues.\nOrgan system: a group of organs that perform a particular function.', src: ORG },
      { n: 6, f: 'Muscular, glandular and epithelial tissue', b: 'Muscular: contracts to bring about movement.\nGlandular: produces substances such as enzymes and hormones.\nEpithelial: covers some parts of the body.', src: ORG },
      { n: 7, f: 'Why is the stomach an organ?', b: 'It contains several tissues working together: muscular tissue moves the contents, glandular tissue produces digestive juices, and epithelial tissue covers the outside and the inside.' },
      { n: 8, f: 'Roles of the liver, small intestine and large intestine in the digestive system', b: 'Liver: produces bile.\nSmall intestine: digestion, and where soluble food is absorbed.\nLarge intestine: water is absorbed from the undigested food, producing faeces.', src: ORG },
      { n: 9, f: 'Plant tissues: epidermal, palisade mesophyll, spongy mesophyll, xylem and phloem', b: 'Epidermal: covers the plant. Palisade mesophyll: carries out photosynthesis. Spongy mesophyll: air spaces help gases diffuse. Xylem and phloem: transport substances around the plant.', src: ORG },
      { n: 10, f: 'Diffusion, osmosis and active transport: what moves, which way, and is energy used?', b: 'Diffusion: particles in solution or of a gas, higher → lower concentration, no energy.\nOsmosis: water through a partially permeable membrane, dilute → more concentrated solution, no energy.\nActive transport: against a concentration gradient, energy from respiration.', src: ORG },
      { n: 11, f: 'Isotonic, hypotonic and hypertonic solutions: effect on a cell', b: 'Isotonic: no net movement of water. Hypotonic (more dilute): water enters the cell. Hypertonic (more concentrated): water leaves. A plant cell that takes in water is turgid; one that loses a lot shrinks from its wall (plasmolysis).' },
      { n: 12, f: 'Features that make an exchange surface effective', b: 'A large surface area that is thin, giving a short diffusion path; in animals, an efficient blood supply; and for gas exchange in animals, ventilation. Examples: villi in the small intestine, alveoli in the lungs, root hair cells.' },
    ]),

    // 2 Bioenergetics
    ...sub(BIO, 'photosynthesis-oxfordaqa-igcse-biology', '3.2.1', [
      { n: 1, f: 'Photosynthesis: word and balanced symbol equations', b: 'carbon dioxide + water → glucose + oxygen (light energy)\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', src: PHT },
      { n: 2, f: 'Where is light absorbed, and where do the raw materials come from?', b: 'Light is absorbed by chlorophyll in the chloroplasts (some plant cells and algae). Carbon dioxide comes from the air; water comes from the soil. Oxygen is the by-product.' },
      { n: 3, f: 'Five ways a plant uses the glucose it makes', b: 'Respiration; insoluble starch for storage; fat or oil for storage (e.g. in seeds); cellulose to strengthen cell walls; protein for growth and repair (needs nitrate ions from the soil).' },
      { n: 4, f: 'Limiting factor', b: 'The factor in shortest supply, which sets the maximum rate at that moment. The three are low temperature, shortage of carbon dioxide and shortage of light, and they interact.', src: PHT },
      { n: 5, f: 'How do you name the limiting factor from a graph?', b: 'Where the line is still rising, the x-axis factor is limiting. Where it is flat, another factor is limiting: compare a second line or name the factor held constant, and quote two numbers.' },
      { n: 6, f: 'At light 4, the rate is 10 at 15 °C but 16 at 25 °C. What limits the rate at 15 °C?', b: 'Temperature. Warming raises the rate by (16 − 10) ÷ 10 × 100 = 60%, so light was not limiting at 15 °C.' },
      { n: 7, f: 'When is it worth heating, lighting or adding CO₂ to a greenhouse?', b: 'Only when that factor is limiting and the value of the extra yield is greater than the cost. Net gain = extra yield × price − extra cost.' },
      { n: 8, f: 'Required practical on the rate of photosynthesis: variables', b: 'Independent: one of lamp distance, CO₂ supply (hydrogencarbonate) or temperature. Dependent: bubbles or volume of oxygen per minute. Control: the other two factors, the same pondweed, the same time per setting.' },
      { n: 9, f: 'Pondweed gives 60, 64 and 62 bubbles in 4 minutes. Mean rate?', b: 'Mean = (60 + 64 + 62) ÷ 3 = 62 bubbles. Rate = 62 ÷ 4 = 15.5 bubbles per minute.' },
      { n: 10, f: 'Photosynthesis vs respiration', b: 'Photosynthesis: in cells with chloroplasts, only when there is light; takes in CO₂ and water; absorbs energy.\nRespiration: in all living cells, all the time; takes in glucose and oxygen; releases energy.' },
    ]),
    ...sub(BIO, 'exchange-and-transport-in-plants-oxfordaqa-igcse-biology', '3.2.2', [
      { n: 1, f: 'Stomata and guard cells', b: 'A stoma is a pore in the leaf surface through which gases diffuse (CO₂ in, oxygen out). A pair of guard cells changes shape to open or close it, helping to control water loss.', src: PHT },
      { n: 2, f: 'Root hair', b: 'A tiny extension of a root cell that increases the surface area for absorbing water and mineral ions.', src: PHT },
      { n: 3, f: 'A leaf is 6 cm × 2 cm × 0.1 cm. Surface area to volume ratio?', b: 'SA = 2(12 + 0.6 + 0.2) = 25.6 cm². V = 1.2 cm³. Ratio = 21.3 : 1. Thin, flat shapes give high ratios.' },
      { n: 4, f: 'How do internal air spaces help a leaf?', b: 'They let gases diffuse to the cells inside the leaf, giving a large internal surface area and a short diffusion path.' },
      { n: 5, f: 'When is water lost fastest from leaves?', b: 'In hot, dry and windy conditions. Water vapour is lost mainly from the leaves, mostly through the stomata.' },
      { n: 6, f: 'Wilting, and how stomata closing prevents it', b: 'Wilting is loss of firmness when water leaves cells faster than it is replaced. Water leaving the guard cells closes the stomata, which prevents wilting but reduces CO₂ uptake.', src: PHT },
      { n: 7, f: 'Transpiration stream vs translocation', b: 'Transpiration stream: movement of water from the roots, through the xylem, out of the leaves.\nTranslocation: movement of dissolved sugars in the phloem from the leaves to the rest of the plant.', src: PHT },
      { n: 8, f: 'Xylem vs phloem: structure', b: 'Xylem: hollow dead tubes with strong walls containing lignin, so water flows and the walls resist collapse.\nPhloem: living sieve tubes with pores, and companion cells that supply energy.' },
      { n: 9, f: 'Where do xylem and phloem carry substances?', b: 'Xylem: water and mineral ions from the roots to the stem and leaves.\nPhloem: dissolved sugars from the leaves to growing regions and storage organs.' },
    ]),
    ...sub(BIO, 'circulation-in-humans-oxfordaqa-igcse-biology', '3.2.3', [
      { n: 1, f: 'The four chambers of the heart, and the order in which they contract', b: 'Right and left atria, right and left ventricles. Blood enters the atria; the atria contract and force blood into the ventricles; the ventricles contract and force blood out. Valves keep the flow one way.' },
      { n: 2, f: 'Route of blood through the heart and lungs, from the vena cava', b: 'Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body organs.' },
      { n: 3, f: 'Double circulation, and why the left ventricle wall is thicker', b: 'Two circuits: heart to lungs and back, and heart to all other organs and back, so blood is pumped again after the lungs. The left ventricle pumps blood around the whole body; the right only to the nearby lungs.' },
      { n: 4, f: 'Arteries, veins and capillaries', b: 'Artery: thick wall with muscle and elastic fibres, carries blood away from the heart.\nVein: thinner wall, often has valves to prevent back-flow.\nCapillary: very thin wall, very narrow; substances pass in and out through the wall.' },
      { n: 5, f: 'What does plasma carry?', b: 'Carbon dioxide (organs to lungs), soluble products of digestion (small intestine to organs) and urea (liver to kidneys).' },
      { n: 6, f: 'How do red blood cells carry oxygen?', b: 'In the lungs: haemoglobin + oxygen → oxyhaemoglobin. In other organs: oxyhaemoglobin → haemoglobin + oxygen. Red cells have no nucleus.' },
      { n: 7, f: 'How does blood clot?', b: 'At a wound, platelets help start a series of enzyme-controlled reactions. Soluble fibrinogen is changed to fibrin, which forms a network of fibres that traps blood cells, forming a clot.', src: CIRC },
      { n: 8, f: 'Artificial pacemaker and stent: what each treats', b: 'Artificial pacemaker: an electrical device that corrects an irregular heart rate (the natural pacemaker cells are in the right atrium).\nStent: holds open a coronary artery narrowed by fatty layers in coronary heart disease.' },
      { n: 9, f: 'Biological vs mechanical replacement heart valves', b: 'Biological (from humans or other mammals): usually less need for lifelong anticoagulant drugs, but can wear out.\nMechanical: can last a long time, but blood may clot on it, so anticoagulants are often needed.' },
      { n: 10, f: 'Why can a transplanted organ be rejected, and how is rejection reduced?', b: 'The recipient\'s antibodies attack antigens on the donor organ that they do not recognise as their own. Reduce it by choosing a donor with a similar tissue type and giving immune-suppressing drugs.', src: CIRC },
      { n: 11, f: 'ABO blood groups: antigens and plasma antibodies', b: 'A: antigen A, anti-B. B: antigen B, anti-A. AB: A and B, no antibodies. O: no antigens, anti-A and anti-B. Group O is the universal donor; AB can receive from all groups.' },
      { n: 12, f: 'A pulse of 31 beats is counted in 20 s. Heart rate?', b: '31 ÷ 20 × 60 = 93 beats per minute.' },
    ]),
    ...sub(BIO, 'digestion-oxfordaqa-igcse-biology', '3.2.4', [
      { n: 1, f: 'Why is food digested, and what are starch, protein and fat broken into?', b: 'They are insoluble, so they are broken into soluble substances that can be absorbed into the blood in the wall of the small intestine. Starch → sugars; protein → amino acids; fat → fatty acids and glycerol.' },
      { n: 2, f: 'What happens in the large intestine?', b: 'Much of the water mixed with the food is absorbed into the blood. The indigestible food left makes up the bulk of the faeces, which leave through the anus.' },
      { n: 3, f: 'Enzymes, and what high temperature does to them', b: 'Large proteins that act as biological catalysts, increasing the rate of reactions without being used up. High temperature denatures them: the active site changes shape, so the substrate cannot fit. Cooling does not reverse it.', src: DIG },
      { n: 4, f: 'Where are digestive enzymes made, and where do they act?', b: 'They are made in specialised cells in glands and the gut lining, then pass out of the cells into the gut to meet the food.' },
      { n: 5, f: 'Amylase: where made, where it acts, and the reaction', b: 'Made in the salivary glands, pancreas and small intestine; acts in the mouth and small intestine; starch → sugars.', src: DIG },
      { n: 6, f: 'Protease and lipase: where made and the reactions', b: 'Protease: stomach, pancreas, small intestine; protein → amino acids.\nLipase: pancreas, small intestine; lipid → fatty acids and glycerol.', src: DIG },
      { n: 7, f: 'Hydrochloric acid and bile: where made and their jobs', b: 'Hydrochloric acid (stomach): acid conditions in which stomach enzymes work best.\nBile (made in the liver, stored in the gall bladder): neutralises the acid, giving alkaline conditions for small intestine enzymes. Neither is an enzyme.' },
      { n: 8, f: 'Emulsification', b: 'Bile breaks large fat drops into small droplets. The volume is unchanged but the surface area increases, so lipase has more surface to act on.', src: DIG },
      { n: 9, f: 'Required practical: starch is digested in a mean of 60 s. Rate, and how it compares with 30 s?', b: 'Rate = 1000 ÷ 60 = 16.7 (arbitrary units). At 30 s, 1000 ÷ 30 = 33.3, twice as fast. Use a water bath for temperature and buffer solutions for pH.' },
      { n: 10, f: 'Uses of enzymes from microorganisms', b: 'Protease and lipase: biological washing powders. Lactase: lactose-free milk. Pectinase: fruit juice extraction. Amylase: breaking starch into sugars in food manufacture.' },
      { n: 11, f: 'Denatured vs slowed enzyme', b: 'Denatured: the shape of the active site is lost, permanently (high temperature, extreme pH). Slowed: at low temperature there are fewer successful collisions, and it is reversible.' },
    ]),
    ...sub(BIO, 'breathing-oxfordaqa-igcse-biology', '3.2.5', [
      { n: 1, f: 'Function and position of the breathing system', b: 'It moves air in and out, so oxygen passes into the blood and carbon dioxide passes out by diffusion. The lungs are in the thorax, protected by the ribcage and separated from the abdomen by the diaphragm.' },
      { n: 2, f: 'Path of air into the lungs', b: 'Trachea → bronchi → bronchioles → alveoli.' },
      { n: 3, f: 'Inhaling: what happens', b: 'Intercostal muscles contract and pull the ribcage up; the diaphragm contracts and flattens; thorax volume increases; pressure falls below that of the outside air; air enters.' },
      { n: 4, f: 'Exhaling: what happens', b: 'Intercostal muscles relax and the ribcage moves down; the diaphragm relaxes and becomes domed; thorax volume decreases; pressure rises above that of the outside air; air leaves.' },
      { n: 5, f: 'How are the alveoli adapted for gas exchange?', b: 'They provide a very large surface area, richly supplied with blood capillaries, with thin walls, so gases diffuse readily into and out of the blood.' },
      { n: 6, f: 'Negative pressure vs positive pressure ventilators', b: 'Negative pressure: pressure is lowered around the chest in a sealed chamber, so air is drawn into the lungs.\nPositive pressure: air is pushed into the airway above outside pressure, so it is forced into the lungs.', src: BR },
      { n: 7, f: 'Why can a ventilator save a life?', b: 'When spontaneous breathing stops through disease or injury, oxygen cannot reach the blood. A ventilator moves air into the lungs, so oxygen can still diffuse into the blood and carbon dioxide out.' },
      { n: 8, f: 'Breathing vs respiration', b: 'Breathing is moving air into and out of the lungs. Respiration is the chemical reactions in cells that transfer energy from glucose.' },
    ]),
    ...sub(BIO, 'respiration-oxfordaqa-igcse-biology', '3.2.6', [
      { n: 1, f: 'Aerobic respiration: word and balanced symbol equations', b: 'glucose + oxygen → carbon dioxide + water\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O\nIt happens continuously in plants and animals; most of the reactions occur inside mitochondria.', src: BR },
      { n: 2, f: 'What is the energy from respiration used for?', b: 'Building larger molecules from smaller ones; muscle contraction (animals); keeping a steady body temperature in cold surroundings (mammals and birds); building sugars, nitrates and other nutrients into amino acids and proteins (plants).' },
      { n: 3, f: 'How does the body respond to exercise?', b: 'Heart rate rises, so more blood flows to the muscles; breathing rate and depth rise; muscle glycogen is converted back to glucose. More glucose and oxygen are supplied and carbon dioxide is removed faster.' },
      { n: 4, f: 'Anaerobic respiration in muscle: word and symbol equations', b: 'glucose → lactic acid\nC₆H₁₂O₆ → 2C₃H₆O₃\nMuch less energy is transferred than in aerobic respiration.' },
      { n: 5, f: 'Anaerobic respiration in plants and yeast: word and symbol equations', b: 'glucose → ethanol + carbon dioxide\nC₆H₁₂O₆ → 2C₂H₅OH + 2CO₂' },
      { n: 6, f: 'Oxygen debt', b: 'The oxygen needed after exercise to oxidise the lactic acid that built up to carbon dioxide and water. It is repaid after exercise, which is why you keep breathing hard; it is not a store of oxygen.', src: BR },
      { n: 7, f: 'Why do muscles become fatigued?', b: 'During long vigorous activity lactic acid builds up in the muscles and they stop contracting efficiently. Blood flowing through the muscles eventually removes the lactic acid.' },
      { n: 8, f: 'Why is less energy transferred in anaerobic respiration?', b: 'Glucose is only partly broken down, to lactic acid. The lactic acid still holds energy, which is only released when it is later oxidised using oxygen.' },
      { n: 9, f: 'Resting pulse is 72 bpm and 126 bpm after exercise. Percentage increase?', b: '(126 − 72) ÷ 72 × 100 = 54 ÷ 72 × 100 = 75%.' },
      { n: 10, f: 'Required practical on exercise: method and controls', b: 'Record resting pulse and breathing rate; exercise for a set time at a set intensity; measure straight afterwards and at regular intervals until back to resting. Same person, same step, same timing; count for 15 s and multiply by 4.' },
    ]),

    // 3 Ecology
    ...topicOnly('ecology-oxfordaqa-igcse-biology', '3', [
      { n: 1, f: 'How much light energy do plants transfer, and how much biomass passes up each trophic level?', b: 'Plants and algae transfer about 1% of the incident light energy. About 10% of the biomass passes up to each trophic level.' },
      { n: 2, f: 'Why is about 90% of biomass not passed on?', b: 'Waste materials (faeces, urine) carry materials and energy away; respiration supplies energy for life processes such as movement, and much ends up as heat in the surroundings; some parts are not eaten.' },
      { n: 3, f: 'Light energy is 3.2 × 10⁶ kJ per m². Energy reaching secondary consumers?', b: 'Producers store 1%: 3.2 × 10⁴ kJ. Primary consumers 10%: 3.2 × 10³ kJ. Secondary consumers 10%: 320 kJ.' },
      { n: 4, f: 'Why is a short food chain more efficient for food production?', b: 'About 90% of the biomass is lost at every extra stage, so eating a crop directly gives more of the producers\' biomass to humans than feeding it to livestock (for example 7500 MJ against 750 MJ).' },
      { n: 5, f: 'Competition vs interdependence', b: 'Competition is for scarce resources (plants: light, space, water, mineral ions; animals: food, mates, territory). Interdependence is reliance on other organisms, such as flowers on pollinators.', src: EN },
      { n: 6, f: 'Structural, behavioural and functional adaptations: examples', b: 'Structural: white fur in snow, a thick waxy cuticle.\nBehavioural: migration, huddling, burrowing.\nFunctional: concentrated urine, many eggs, hibernation.' },
      { n: 7, f: 'Extremophiles', b: 'Organisms that live where conditions are very extreme: high salt, high temperature or high pressure. Examples: archaea in salt lakes, Thermus aquaticus in hot springs.' },
      { n: 8, f: 'How is a tapeworm adapted to life in the intestine?', b: 'Hooks and suckers hold it to the gut wall; a thick covering resists digestive enzymes; it is flat and long to absorb digested food; it produces many eggs.' },
      { n: 9, f: 'Conditions for fast decay, and the role of detritus feeders', b: 'Warm (enzymes faster, but too hot stops decay), moist and with oxygen. Detritus feeders such as earthworms and woodlice break dead material into small pieces, giving microorganisms a larger surface area.' },
      { n: 10, f: 'Processes in the carbon cycle', b: 'Photosynthesis removes CO₂ from the air into carbohydrates, fats and proteins; feeding passes carbon along food chains; respiration by plants, algae, animals and microorganisms, decay, and combustion of wood and fossil fuels return CO₂.' },
      { n: 11, f: 'Eutrophication in four stages', b: 'Mineral ions rise, so algae and plants grow more; dense growth shades others, which die; microorganisms feeding on the dead organisms increase; their respiration depletes the oxygen, so aerobic organisms die.', src: DECAY },
      { n: 12, f: 'Effects of deforestation and of global warming', b: 'Deforestation: less biodiversity; less CO₂ removed by photosynthesis; burning and decay release CO₂.\nGlobal warming (rising CO₂ and methane): climate change, rising sea level, changed migration patterns and species distribution.' },
    ]),

    // 4 Organisms' interaction with the environment
    ...topicOnly('organisms-interaction-with-the-environment-oxfordaqa-igcse-biology', '4', [
      { n: 1, f: 'The reflex arc, in order', b: 'Stimulus detected by a receptor → impulses along a sensory neurone to the CNS → chemical released at a synapse → relay neurone → synapse → motor neurone → effector: a muscle contracts or a gland secretes.', src: NERV },
      { n: 2, f: 'What information reaches the thermoregulatory centre?', b: 'Impulses from receptors in the centre itself, sensitive to the temperature of blood flowing through the brain (core temperature), and from temperature receptors in the skin.' },
      { n: 3, f: 'Responses when core temperature is too high and too low', b: 'Too high: skin blood vessels dilate, so more energy is transferred from the skin; more sweat, which cools as it evaporates.\nToo low: skin blood vessels constrict, less energy transferred; muscles may shiver.' },
      { n: 4, f: 'Insulin vs glucagon', b: 'Both from the pancreas. Insulin (glucose too high): glucose moves from the blood into cells and is stored as glycogen in the liver and muscles, or as lipid when full. Glucagon (glucose too low): glycogen changes back into glucose, which enters the blood.', src: HOM },
      { n: 5, f: 'Type 1 vs Type 2 diabetes', b: 'Type 1: the pancreas does not produce enough insulin; diet, exercise and insulin injections.\nType 2: the body does not respond to its own insulin; obesity is a significant factor; diet, exercise and drugs.' },
      { n: 6, f: 'Jobs of the liver in removing waste and poisons', b: 'Excess amino acids are deaminated to form ammonia, which is converted into urea; poisons are detoxified; old red blood cells are broken down and the iron is stored.', src: WAT },
      { n: 7, f: 'How does a healthy kidney make urine?', b: 'Blood is filtered (water, glucose, ions, urea; not cells or large proteins); all the glucose, the needed ions and as much water as needed are reabsorbed; urea, excess ions and excess water are released as urine.' },
      { n: 8, f: 'ADH and negative feedback when blood water content is too low', b: 'The pituitary gland releases more ADH; the kidneys reabsorb more water; a small volume of concentrated urine is made; blood water content rises, so less ADH is released.' },
      { n: 9, f: 'Three ways white blood cells defend the body', b: 'Phagocytosis (ingesting pathogens); producing antibodies that destroy particular bacteria or viruses; producing antitoxins that counteract toxins.', src: INF },
      { n: 10, f: 'How does vaccination give immunity, and what is herd immunity?', b: 'Dead or inactive pathogen is injected; white blood cells make specific antibodies; if the real pathogen arrives, the correct antibody is made rapidly. If a large proportion of people are immune, spread is very much reduced.' },
      { n: 11, f: 'How does an antibiotic-resistant strain such as MRSA spread?', b: 'A mutation produces a resistant strain; the antibiotic kills non-resistant bacteria; resistant ones survive and reproduce; the strain spreads rapidly because people are not immune and there is no effective treatment. Overuse speeds this up.' },
      { n: 12, f: 'Innate behaviour, imprinting, habituation, classical and operant conditioning', b: 'Innate: inborn. Imprinting: early attachment to the first moving object seen. Habituation: learning to ignore a repeated harmless stimulus. Classical: linking a neutral stimulus with a natural one. Operant: trial and error with reward or punishment.', src: NERV },
    ]),

    // 5 Inheritance
    ...topicOnly('inheritance-oxfordaqa-igcse-biology', '5', [
      { n: 1, f: 'Sexual vs asexual reproduction', b: 'Sexual: fusion of male and female gametes; genetic information from two parents is mixed, giving variety.\nAsexual: one parent, no fusion of gametes, no mixing, so the offspring are genetically identical clones.', src: RCD },
      { n: 2, f: 'Mitosis vs meiosis', b: 'Mitosis: a body cell divides once into two genetically identical cells with the full set in pairs; for growth and replacement.\nMeiosis: a cell in a reproductive organ divides twice into four gametes with a single set (human 46 → 23).' },
      { n: 3, f: 'Stem cells and therapeutic cloning', b: 'Stem cells from human embryos or adult bone marrow can be made to differentiate into many types of human cell, possibly to treat conditions such as paralysis. In therapeutic cloning the embryo carries the patient\'s genes, so the cells are not rejected.', src: RCD },
      { n: 4, f: 'Benign vs malignant tumours, and carcinogens', b: 'Both are abnormal, uncontrolled cell growth. Benign: does not invade healthy tissue. Malignant: invades tissue, cells may enter the blood and form secondary tumours. Carcinogens: tobacco smoke chemicals, asbestos, ionising radiation.' },
      { n: 5, f: 'Sex determination, and the chance that four children are all boys', b: 'Females XX, males XY; eggs all carry X, sperm half X and half Y, so P(boy) = 1/2 every time. Four boys: (1/2)⁴ = 1/16.' },
      { n: 6, f: 'Dominant, recessive and carrier', b: 'Dominant: shows in the phenotype when present on one chromosome only. Recessive: shows only when no dominant allele is present. Carrier: a heterozygous person with a recessive disorder allele who does not show the disorder.', src: GV },
      { n: 7, f: 'Two heterozygous tall pea plants (Rr) give 80 seedlings. Expected numbers?', b: 'Rr × Rr gives 3 tall : 1 short. Tall: 80 × 3/4 = 60. Short: 80 × 1/4 = 20. Counts such as 57 and 23 still fit, because fertilisation is random.' },
      { n: 8, f: 'How did Mendel work, and what did he find?', b: 'He used garden peas with clear either-or characteristics, began with pure-breeding lines, studied one characteristic at a time, controlled the crosses and counted large numbers. The second generation was about 3 : 1 (5474 round to 1850 wrinkled seeds).' },
      { n: 9, f: 'How many bases code for a protein of 210 amino acids?', b: 'Three bases code for one amino acid, so at least 210 × 3 = 630 bases. The base sequence decides the order of amino acids.' },
      { n: 10, f: 'Polydactyly, cystic fibrosis, sickle cell anaemia and Down\'s syndrome', b: 'Polydactyly (extra fingers or toes): dominant allele. Cystic fibrosis (thick sticky mucus) and sickle cell anaemia: recessive alleles. Down\'s syndrome: an extra chromosome (47 in body cells), not an allele.' },
      { n: 11, f: 'Adult cell cloning in steps', b: 'Remove the nucleus from an unfertilised egg cell; insert the nucleus from an adult body cell; an electric shock makes the egg cell divide into embryo cells; place the ball of cells in the womb of an adult female. The offspring matches the body-cell donor.', src: GM },
      { n: 12, f: 'Genetic engineering in steps, and concerns about GM crops', b: 'Enzymes isolate the gene; it is put into a vector (a bacterial plasmid or a virus); the vector inserts it into the cells, early in development. Concerns: effects on wild flowers and insects; uncertain effects of eating GM crops on health.' },
    ]),

    // 6 Variation and evolution
    ...topicOnly('variation-and-evolution-oxfordaqa-igcse-biology', '6', [
      { n: 1, f: 'Genetic, environmental and combined causes of variation: examples', b: 'Genetic: blood group, eye colour. Environmental (acquired): a scar, a suntan, plant height with and without mineral ions. Both: human height and body mass.' },
      { n: 2, f: 'Cuttings from one plant grow to 19.0 cm with nitrate and 12.0 cm without. What causes the difference?', b: 'The environment. The cuttings are clones with identical genes, so the 7.0 cm difference is environmental.' },
      { n: 3, f: 'Mutation', b: 'A random change in a gene that makes a new allele. It is the original source of new alleles.', src: VNS },
      { n: 4, f: 'Natural selection vs Lamarck\'s theory', b: 'Natural selection: variation already exists in genes; the best-suited survive and breed, passing on their alleles.\nLamarck: changes acquired during a lifetime are inherited. In the vast majority of cases this cannot occur.' },
      { n: 5, f: 'The three statements of natural selection', b: 'Individuals in a species show a wide range of variation because of differences in their genes. Those most suited to the environment are more likely to survive to breed successfully. The genes that enabled them to survive are passed on to the next generation.' },
      { n: 6, f: 'Selection pressures: examples', b: 'Factors that affect survival: predators, food supply, disease and climate change.' },
      { n: 7, f: 'The four stages in forming a new species', b: 'Isolation (populations separated, e.g. geographically); genetic variation within each; natural selection of different alleles in each; speciation, when they can no longer interbreed to produce fertile offspring.', src: VNS },
      { n: 8, f: 'Horses and donkeys can mate. Why are they different species?', b: 'Their offspring, the mule, is usually sterile. The test for one species is producing fertile offspring.' },
      { n: 9, f: 'Why is evolution counted in generations, not years?', b: 'Evolution usually takes many generations. A bacterium dividing every 30 minutes passes 40 generations in 20 hours; a species with a 25-year generation time needs 1000 years. Species that cannot respond to environmental change risk extinction.' },
      { n: 10, f: 'Continuous vs discontinuous variation', b: 'Continuous: a full range of values (height, leaf length). Discontinuous: separate groups (blood group).' },
    ]),
  ],
};
