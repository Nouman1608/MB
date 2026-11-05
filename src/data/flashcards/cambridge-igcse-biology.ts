/**
 * D-438 -- flashcards for Cambridge IGCSE Biology 0610 (2026-2028).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: Supplement (Extended-only) content, following the tier marks
 *               on Marlbridge's own 0610 revision notes. Core candidates can
 *               hide these cards. Never set on a subtopic whose tier is 'core'.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0610); origin 'revision-notes'.
 *
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

const S = '-cambridge-igcse-biology';
const t = (slug: string) => `${slug}${S}`;

const CC = 'igcse-biology-characteristics-classification-revision-notes';
const NUT = 'igcse-biology-human-nutrition-revision-notes';
const DIS = 'igcse-biology-0610-diseases-and-immunity-revision-notes';
const GAS = 'igcse-biology-0610-gas-exchange-in-humans-revision-notes';
const RESP = 'igcse-biology-0610-respiration-revision-notes';
const EXC = 'igcse-biology-0610-excretion-in-humans-revision-notes';
const INH = 'igcse-biology-0610-inheritance-revision-notes';
const VAR = 'igcse-biology-0610-variation-and-selection-revision-notes';

const T1 = t('characteristics-and-classification-of-living-organisms');
const T2 = t('organisation-of-the-organism');
const T3 = t('movement-into-and-out-of-cells');
const T4 = t('biological-molecules');
const T5 = t('enzymes');
const T6 = t('plant-nutrition');
const T7 = t('human-nutrition');
const T8 = t('transport-in-plants');
const T9 = t('transport-in-animals');
const T10 = t('diseases-and-immunity');
const T11 = t('gas-exchange-in-humans');
const T12 = t('respiration');
const T13 = t('excretion-in-humans');
const T14 = t('coordination-and-response');
const T15 = t('drugs');
const T16 = t('reproduction');
const T17 = t('inheritance');
const T18 = t('variation-and-selection');
const T19 = t('organisms-and-their-environment');
const T20 = t('human-influences-on-ecosystems');
const T21 = t('biotechnology-and-genetic-modification');

export const DECK_CAMBRIDGE_IGCSE_BIOLOGY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'biology',
  syllabusCode: '0610',
  syllabusSeries: 'For examination in 2026, 2027 and 2028',
  tierScheme: 'core-extended',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Characteristics and classification of living organisms
    ...sub(T1, t('characteristics-of-living-organisms'), '1.1', [
      { n: 1, f: 'The seven characteristics of living organisms (MRS GREN)', b: 'Movement, respiration, sensitivity, growth, reproduction, excretion, nutrition.' },
      { n: 2, f: 'Growth (characteristic of life)', b: 'A permanent increase in size and dry mass.', src: CC },
      { n: 3, f: 'Excretion (characteristic of life)', b: 'The removal of the waste products of metabolism and substances in excess of requirements.', src: CC },
      { n: 4, f: 'Respiration (characteristic of life)', b: 'The chemical reactions in cells that break down nutrient molecules and release energy for metabolism.', src: CC },
      { n: 5, f: 'Sensitivity (characteristic of life)', b: 'The ability to detect and respond to changes in the internal or external environment.', src: CC },
      { n: 6, f: 'Nutrition and movement (characteristics of life)', b: 'Nutrition: the taking in of materials for energy, growth and development.\nMovement: an action by an organism or part of an organism causing a change of position or place.' },
      { n: 7, f: 'Why must a definition of growth say "permanent" and "dry mass"?', b: 'A plant that absorbs water gains mass without growing. Only a permanent increase in dry mass counts as growth.' },
    ]),
    ...sub(T1, t('concept-and-uses-of-classification-systems'), '1.2', [
      { n: 1, f: 'Species', b: 'A group of organisms that can reproduce to produce fertile offspring.' },
      { n: 2, f: 'The binomial system of naming', b: 'Genus then species, e.g. Panthera leo. Genus has a capital letter, species is lower case; both are italicised (or underlined when handwritten). It is used worldwide, so it avoids confusion over common names.' },
      { n: 3, f: 'Dichotomous key', b: 'A series of paired statements. At each step you choose the one that applies and follow it to the next pair or to a name.' },
      { n: 4, f: 'Good practice when constructing a dichotomous key', b: 'Use observable, contrasting features, so exactly one statement of each pair applies. Avoid relative terms such as "large" and features that vary with age or season, such as colour or behaviour.' },
      { n: 5, f: 'How are DNA base sequences used in classification?', b: 'The more similar the base sequences of two species, the more closely related they are and the more recently they shared a common ancestor. Classification systems aim to reflect these evolutionary relationships.', u: true },
    ]),
    ...sub(T1, t('features-of-organisms'), '1.3', [
      { n: 1, f: 'Features shared by all arthropods', b: 'A hard exoskeleton, jointed legs and a segmented body.' },
      { n: 2, f: 'Insect: legs, body parts, antennae', b: '6 legs; 3 body parts (head, thorax, abdomen); 1 pair of antennae.', src: CC },
      { n: 3, f: 'Arachnid: legs, body parts, antennae', b: '8 legs; 2 body parts; no antennae.', src: CC },
      { n: 4, f: 'Crustacean and myriapod: key features', b: 'Crustacean: many legs, 2 pairs of antennae, chalky exoskeleton.\nMyriapod: many body segments with one or two pairs of legs per segment, 1 pair of antennae.' },
      { n: 5, f: 'Vertebrate groups: the single identifying feature of birds, mammals and reptiles', b: 'Birds: feathers (and hard-shelled eggs laid on land).\nMammals: hair or fur, and mammary glands.\nReptiles: dry scales, and soft leathery-shelled eggs laid on land.' },
      { n: 6, f: 'Fish vs amphibians: skin and eggs', b: 'Fish: wet scales; eggs laid in water with no shell.\nAmphibians: moist, smooth skin; jelly-coated eggs laid in water.' },
      { n: 7, f: 'Fungus kingdom: key features', b: 'Mostly multicellular, made of hyphae; cell wall of chitin (not cellulose); saprotrophic nutrition: secrete enzymes and absorb the products.', u: true, src: CC },
      { n: 8, f: 'Prokaryote vs protoctist', b: 'Prokaryotes are single cells with no nucleus. Protoctists have a nucleus and are mostly single-celled (some multicellular). The difference is the nucleus, not size.', u: true },
      { n: 9, f: 'Monocotyledons vs dicotyledons', b: 'Monocots: one cotyledon, parallel leaf veins, flower parts in threes.\nDicots: two cotyledons, branching (net-like) leaf veins, flower parts in fours or fives.', u: true },
      { n: 10, f: 'Ferns vs flowering plants; and the features of a virus', b: 'Ferns have fronds and reproduce by spores, with no flowers or seeds. Flowering plants reproduce by seeds made in flowers.\nA virus is only a protein coat and genetic material, and is in none of the five kingdoms.', u: true },
    ]),

    // 2 Organisation of the organism
    ...sub(T2, t('cell-structure'), '2.1', [
      { n: 1, f: 'Three structures in a plant cell but not in an animal cell', b: 'Cell wall, chloroplasts, large permanent vacuole.' },
      { n: 2, f: 'What does a bacterial cell have that plant and animal cells do not?', b: 'Circular DNA (no true nucleus) and plasmids. Bacteria also have no mitochondria or chloroplasts.' },
      { n: 3, f: 'Functions of the nucleus, cell membrane, mitochondria and ribosomes', b: 'Nucleus: contains DNA, controls the cell.\nMembrane: controls what enters and leaves.\nMitochondria: aerobic respiration releases energy.\nRibosomes: make proteins.' },
      { n: 4, f: 'Specialised cells: ciliated cell, root hair cell, palisade mesophyll cell', b: 'Ciliated cell: movement of mucus in the trachea and bronchi.\nRoot hair cell: absorption.\nPalisade mesophyll cell: photosynthesis.' },
      { n: 5, f: 'Specialised cells: neurone, red blood cell, sperm and egg cells', b: 'Neurone: conduction of electrical impulses.\nRed blood cell: transport of oxygen.\nSperm and egg cells (gametes): reproduction.' },
      { n: 6, f: 'Tissue, organ and organ system', b: 'Tissue: a group of cells with similar structures working together to perform a shared function.\nOrgan: several tissues working together.\nOrgan system: a group of organs with related functions working together.' },
      { n: 7, f: 'Levels of organisation, smallest to largest', b: 'Cell → tissue → organ → organ system → organism.' },
    ]),
    ...sub(T2, t('size-of-specimens'), '2.2', [
      { n: 1, f: 'Magnification formula', b: 'magnification = image size ÷ actual size (both in the same units).' },
      { n: 2, f: 'A drawing is 45 mm across; the actual cell is 0.03 mm. Magnification?', b: '45 ÷ 0.03 = ×1500.' },
      { n: 3, f: 'How do you find the actual size of a specimen from a drawing?', b: 'actual size = image size ÷ magnification.' },
      { n: 4, f: 'The most common way marks are lost in magnification calculations', b: 'Mixing units, e.g. an image measured in mm with an actual size in μm. Convert both to the same unit first.' },
      { n: 5, f: 'Millimetres and micrometres', b: '1 mm = 1000 μm. To change μm to mm divide by 1000; to change mm to μm multiply by 1000.', u: true },
      { n: 6, f: 'A cell 0.02 mm across gives a 60 mm image. Magnification, and the cell size in μm?', b: '60 ÷ 0.02 = ×3000. 0.02 mm × 1000 = 20 μm.', u: true },
    ]),

    // 3 Movement into and out of cells
    ...sub(T3, t('diffusion'), '3.1', [
      { n: 1, f: 'Diffusion', b: 'The net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of their random movement.' },
      { n: 2, f: 'Four factors that affect the rate of diffusion', b: 'Surface area, temperature, concentration gradient, distance.' },
      { n: 3, f: 'Does diffusion need energy from respiration?', b: 'No. The energy comes from the kinetic energy of the particles\' random movement.' },
      { n: 4, f: 'How could you investigate the effect of surface area on diffusion?', b: 'Cut agar blocks of different sizes containing an indicator, place them in a solution that changes the indicator colour, and time how long the colour change takes to reach the centre of each block.' },
    ]),
    ...sub(T3, t('osmosis'), '3.2', [
      { n: 1, f: 'Osmosis (Core statement)', b: 'Water diffuses through partially permeable membranes by osmosis. Water moves into and out of cells by osmosis through the cell membrane.' },
      { n: 2, f: 'Why is water important as a solvent in organisms?', b: 'Substances dissolve in it, so it is needed for digestion, excretion and transport.' },
      { n: 3, f: 'How are plants supported by water?', b: 'The pressure of water inside the cells presses outwards on the cell wall.' },
      { n: 4, f: 'Osmosis investigation with dialysis tubing', b: 'Fill the tubing with sugar solution, place it in water, and measure the change in mass (or the level in a capillary tube). Water enters by osmosis, so mass increases.' },
      { n: 5, f: 'Osmosis (Extended definition)', b: 'The net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution), through a partially permeable membrane.', u: true },
      { n: 6, f: 'Turgid, turgor pressure, flaccid and plasmolysis', b: 'In a dilute solution a plant cell gains water and becomes turgid, pressing on the wall (turgor pressure). In a concentrated solution it loses water and becomes flaccid; if enough is lost the membrane pulls away from the wall (plasmolysis).', u: true },
    ]),
    ...sub(T3, t('active-transport'), '3.3', [
      { n: 1, f: 'Active transport', b: 'The movement of particles through a cell membrane from a region of lower concentration to a region of higher concentration (against a concentration gradient), using energy from respiration.' },
      { n: 2, f: 'Which of diffusion, osmosis and active transport needs energy?', b: 'Only active transport. It is also the only one that moves substances against a concentration gradient.' },
      { n: 3, f: 'Why do root hair cells need active transport?', b: 'To take up mineral ions from the soil when the ion concentration in the soil is lower than inside the root hair cell.', u: true },
      { n: 4, f: 'What moves molecules or ions across the membrane in active transport?', b: 'Protein carriers in the cell membrane, using energy from respiration.', u: true },
    ]),

    // 4 Biological molecules
    ...sub(T4, t('biological-molecules'), '4.1', [
      { n: 1, f: 'Elements in carbohydrates, fats and proteins', b: 'Carbohydrates and fats: C, H, O.\nProteins: C, H, O, N (some also S). Only proteins contain nitrogen.' },
      { n: 2, f: 'Starch, glycogen and cellulose are made from…', b: 'Glucose. Starch is a store in plants, glycogen a store in animals and fungi, cellulose forms plant cell walls.' },
      { n: 3, f: 'Building blocks of proteins, and of fats and oils', b: 'Proteins: amino acids.\nFats and oils: fatty acids and glycerol.' },
      { n: 4, f: 'Iodine test for starch', b: 'Add iodine solution. Orange-brown → blue-black if starch is present.' },
      { n: 5, f: "Benedict's test for reducing sugars", b: "Add Benedict's solution and heat in a water bath (about 80 °C). Blue → green, yellow, orange or brick-red. The further along, the more reducing sugar." },
      { n: 6, f: 'Biuret test for protein', b: 'Add biuret solution and mix (no heating). Blue → purple if protein is present.' },
      { n: 7, f: 'Ethanol emulsion test for fats and oils', b: 'Shake the food with ethanol, then pour into water. A cloudy white emulsion shows fat or oil. (Ethanol first, water second; ethanol is flammable.)' },
      { n: 8, f: 'DCPIP test for vitamin C', b: 'Add the food solution drop by drop to DCPIP: blue → colourless. The smaller the volume needed to decolourise it, the more vitamin C.' },
      { n: 9, f: 'Structure of DNA', b: 'Two strands coiled together to form a double helix. Each strand contains bases. Bonds between pairs of bases hold the strands together. A pairs with T; C pairs with G.', u: true },
      { n: 10, f: 'In a DNA sample 15% of the bases are A. What percentage are C?', b: 'T = 15%, so A + T = 30%. C + G = 70%, so C = 35%.', u: true },
    ]),

    // 5 Enzymes
    ...sub(T5, t('enzymes'), '5.1', [
      { n: 1, f: 'Catalyst', b: 'A substance that increases the rate of a chemical reaction and is not changed by the reaction.' },
      { n: 2, f: 'Enzyme', b: 'A protein that functions as a biological catalyst. Enzymes are involved in all metabolic reactions; without them these reactions would be too slow to sustain life.' },
      { n: 3, f: 'Active site (Core description of enzyme action)', b: 'The region of an enzyme where the substrate fits. Its shape is complementary to the substrate, and the substrate is converted to products.' },
      { n: 4, f: 'Effect of temperature on enzyme activity (Core)', b: 'Activity rises to an optimum, then falls. High temperatures denature the enzyme. At low temperatures the enzyme is slow but not denatured.' },
      { n: 5, f: 'Denatured', b: "The enzyme's shape, including its active site, has changed so the substrate no longer fits and it no longer works. Enzymes are never \"killed\"." },
      { n: 6, f: 'An amylase reaction reaches its end point in 40 s. Rate using 1000 ÷ time?', b: '1000 ÷ 40 = 25 arbitrary units. A shorter time means a faster rate.' },
      { n: 7, f: 'Enzyme action in four steps (Extended)', b: 'Substrate enters the active site (complementary shape) → enzyme-substrate complex forms → substrate converted to products → products leave; the enzyme is unchanged and reused.', u: true },
      { n: 8, f: 'Enzyme specificity', b: 'Only a substrate with a shape complementary to the active site can fit and form an enzyme-substrate complex. E.g. starch cannot fit the active site of lipase.', u: true },
      { n: 9, f: 'Explain why rate increases with temperature up to the optimum', b: 'Molecules gain kinetic energy and move faster, so there are more frequent effective collisions between enzyme and substrate, and more enzyme-substrate complexes form per second.', u: true },
      { n: 10, f: 'Explain the effect of pH away from the optimum', b: 'The shape of the active site changes, so the substrate fits less well and fewer enzyme-substrate complexes form. At extreme pH the enzyme is denatured. (Kinetic energy belongs only in temperature answers.)', u: true },
    ]),

    // 6 Plant nutrition
    ...sub(T6, t('photosynthesis'), '6.1', [
      { n: 1, f: 'Photosynthesis', b: 'The process by which plants synthesise carbohydrates from raw materials using energy from light.' },
      { n: 2, f: 'Word equation for photosynthesis', b: 'carbon dioxide + water → glucose + oxygen, in the presence of light and chlorophyll.' },
      { n: 3, f: 'Chlorophyll: where it is and what it does', b: 'A green pigment in chloroplasts. It transfers energy from light into energy in chemicals, for the synthesis of carbohydrates.' },
      { n: 4, f: 'Uses of the carbohydrates made in photosynthesis', b: 'Starch: energy store. Cellulose: cell walls. Glucose: respiration. Sucrose: transport in the phloem. Nectar: attracts insects for pollination.' },
      { n: 5, f: 'Why plants need nitrate ions and magnesium ions', b: 'Nitrate: to make amino acids (then proteins); lack gives poor growth.\nMagnesium: to make chlorophyll; lack gives yellow leaves.' },
      { n: 6, f: 'Steps in testing a leaf for starch', b: 'Destarch the plant (dark, about 2 days). After the experiment: boil the leaf in water, warm it in ethanol in a hot water bath (removes chlorophyll), rinse in warm water, add iodine on a white tile: blue-black = starch.' },
      { n: 7, f: 'Hydrogencarbonate indicator colours', b: 'Purple: less CO₂ than air (bright light, photosynthesis faster than respiration).\nOrange-red: same as air.\nYellow: more CO₂ than air (dark, respiration only).' },
      { n: 8, f: 'Balanced equation for photosynthesis', b: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', u: true },
      { n: 9, f: 'Limiting factor', b: 'The factor in shortest supply, which stops the rate increasing. Raising it raises the rate; raising another factor does not. Light intensity, carbon dioxide concentration and temperature can all be limiting.', u: true },
      { n: 10, f: 'On the flat part of a rate vs light intensity graph, what is limiting?', b: 'Not light intensity. Another factor, such as carbon dioxide concentration or temperature, is limiting.', u: true },
    ]),
    ...sub(T6, t('leaf-structure'), '6.2', [
      { n: 1, f: 'Palisade mesophyll: position and adaptation', b: 'Near the upper surface; tall, closely packed cells with many chloroplasts, so they absorb most of the light.' },
      { n: 2, f: 'Spongy mesophyll and air spaces', b: 'Loosely packed cells with air spaces between them, so carbon dioxide can diffuse to the cells and oxygen out, over a large internal surface.' },
      { n: 3, f: 'Cuticle and upper epidermis', b: 'The waxy cuticle reduces water loss and is transparent. The upper epidermis is transparent with no chloroplasts, so light passes through.' },
      { n: 4, f: 'Stomata and guard cells', b: 'Stomata (mostly in the lower epidermis) let carbon dioxide in and oxygen out. Guard cells open and close them.' },
      { n: 5, f: 'Xylem and phloem in a leaf vein', b: 'Xylem (upper side of the bundle) brings water and mineral ions. Phloem (lower side) carries sucrose away.' },
    ]),

    // 7 Human nutrition
    ...sub(T7, t('diet'), '7.1', [
      { n: 1, f: 'Balanced diet', b: 'A diet containing the right foods in the right amounts.' },
      { n: 2, f: 'Why the body needs carbohydrates, fats and proteins', b: 'Carbohydrates: energy.\nFats and oils: energy store and insulation.\nProteins: growth and repair.' },
      { n: 3, f: 'Deficiency diseases of vitamin C and vitamin D', b: 'Vitamin C: scurvy.\nVitamin D: rickets.' },
      { n: 4, f: 'Why the body needs calcium and iron', b: 'Calcium: bones and teeth.\nIron: making haemoglobin.' },
      { n: 5, f: 'Why the body needs fibre and water', b: 'Fibre (roughage): helps food move through the gut.\nWater: solvent and transport medium.' },
    ]),
    ...sub(T7, t('digestive-system'), '7.2', [
      { n: 1, f: 'Parts of the alimentary canal, in order', b: 'Mouth, oesophagus, stomach, small intestine (duodenum and ileum), large intestine (colon, rectum), anus.' },
      { n: 2, f: 'Associated organs of the digestive system', b: 'Salivary glands, pancreas, liver, gall bladder.' },
      { n: 3, f: 'Ingestion and digestion', b: 'Ingestion: taking food and drink into the body.\nDigestion: the breakdown of food.' },
      { n: 4, f: 'Absorption', b: 'The movement of nutrients from the intestines into the blood.', src: NUT },
      { n: 5, f: 'Assimilation', b: 'The uptake and use of nutrients by cells.', src: NUT },
      { n: 6, f: 'Egestion, and how it differs from excretion', b: 'Egestion is the removal of undigested food as faeces. It was never absorbed, so it is not excretion (removal of waste made by metabolism).' },
    ]),
    ...sub(T7, t('physical-digestion'), '7.3', [
      { n: 1, f: 'Physical digestion', b: 'The breakdown of food into smaller pieces without chemical change to the food molecules. It increases the surface area for chemical digestion.' },
      { n: 2, f: 'Types of human teeth and their jobs', b: 'Incisors cut, canines tear, premolars and molars crush and grind.' },
      { n: 3, f: 'Structure of a tooth (parts to name)', b: 'Enamel on the crown, dentine beneath it, pulp in the centre containing nerves and blood vessels, and cement covering the root and fixing it in the jaw.' },
      { n: 4, f: 'Role of the stomach in physical digestion', b: 'Churning the food.' },
      { n: 5, f: 'Role of bile in emulsifying fats', b: 'Bile breaks large fat droplets into smaller ones, increasing the surface area for lipase. It is a physical change: bile is not an enzyme.', u: true },
    ]),
    ...sub(T7, t('chemical-digestion'), '7.4', [
      { n: 1, f: 'Chemical digestion', b: 'The breakdown of large insoluble molecules into small soluble molecules that can be absorbed.' },
      { n: 2, f: 'Amylase, protease and lipase: substrate → product', b: 'Amylase: starch → simple reducing sugars.\nProteases: protein → amino acids.\nLipase: fats and oils → fatty acids and glycerol.' },
      { n: 3, f: 'Two functions of hydrochloric acid in gastric juice', b: 'It kills harmful microorganisms in food, and it gives an acidic pH that is the optimum for enzymes in the stomach.' },
      { n: 4, f: 'Amylase and maltase (Extended detail)', b: 'Amylase breaks starch down to maltose. Maltase, on the membranes of the small intestine epithelium, breaks maltose down to glucose.', u: true },
      { n: 5, f: 'Pepsin vs trypsin', b: 'Both are proteases. Pepsin works in the acidic stomach; trypsin works in the alkaline small intestine.', u: true },
      { n: 6, f: 'How bile helps chemical digestion in the duodenum', b: 'Bile is alkaline. It neutralises the acidic mixture arriving from the stomach, giving a suitable pH for the enzymes in the small intestine.', u: true },
    ]),
    ...sub(T7, t('absorption'), '7.5', [
      { n: 1, f: 'Where are most nutrients and most water absorbed?', b: 'The small intestine absorbs nutrients and most of the water. Some water is also absorbed in the colon.' },
      { n: 2, f: 'How is the absorbing surface of the small intestine increased?', b: 'By villi and microvilli.', u: true },
      { n: 3, f: 'In a villus, what do the capillaries and the lacteal absorb?', b: 'Capillaries: sugars and amino acids.\nLacteal (part of the lymphatic system): fatty acids and glycerol.', u: true },
    ]),

    // 8 Transport in plants
    ...sub(T8, t('xylem-and-phloem'), '8.1', [
      { n: 1, f: 'Functions of xylem and phloem', b: 'Xylem: transports water and mineral ions, and gives support.\nPhloem: transports sucrose and amino acids.' },
      { n: 2, f: 'Position of xylem and phloem in a root', b: 'Xylem in the centre in a star or cross shape, with phloem between its arms.' },
      { n: 3, f: 'Position of xylem and phloem in a stem', b: 'Vascular bundles in a ring near the edge: xylem on the inner side of each bundle, phloem on the outer side.' },
      { n: 4, f: 'Structure of xylem vessels linked to function', b: 'Thick walls with lignin: strength and support. No cell contents: unobstructed water flow. Cells joined end to end with no cross walls: a long continuous tube.', u: true },
    ]),
    ...sub(T8, t('water-uptake'), '8.2', [
      { n: 1, f: 'Function of root hair cells, and how their shape helps', b: 'They take up water and mineral ions. The long extension gives a large surface area, increasing uptake.' },
      { n: 2, f: 'Pathway of water from the soil to the leaf', b: 'Soil → root hair cells → root cortex cells → xylem → mesophyll cells.' },
      { n: 3, f: 'How does water enter a root hair cell?', b: 'By osmosis.' },
      { n: 4, f: 'Investigating the pathway of water with a stain', b: 'Stand a cut celery stalk in water with a dye such as methylene blue for a few hours, then cut a thin transverse section: the dye appears in a ring of spots, showing the xylem.' },
    ]),
    ...sub(T8, t('transpiration'), '8.3', [
      { n: 1, f: 'Transpiration', b: 'The loss of water vapour from leaves.' },
      { n: 2, f: 'Where does water leave the leaf in transpiration?', b: 'Water evaporates from the surfaces of mesophyll cells into the air spaces, then water vapour diffuses out through the stomata.' },
      { n: 3, f: 'Effect of temperature and wind speed on transpiration rate', b: 'Increasing either increases the rate of transpiration.' },
      { n: 4, f: 'What does a potometer measure?', b: 'The rate of water uptake (from how far an air bubble moves in a set time), which is close to the rate of water loss.' },
      { n: 5, f: 'Transpiration pull', b: 'Water vapour lost from the leaves creates a pull that draws a continuous column of water up the xylem. The column holds together because of forces of attraction between water molecules.', u: true },
      { n: 6, f: 'Explain why transpiration is slower when humidity is high', b: 'There is more water vapour in the air outside the leaf, so the concentration gradient is smaller and water vapour diffuses out through the stomata more slowly.', u: true },
      { n: 7, f: 'Why do plants wilt?', b: 'Water is lost by transpiration faster than it is taken up. Cells lose water by osmosis, turgor pressure falls, cells become flaccid and no longer support the leaves and stems.', u: true },
    ]),
    ...sub(T8, t('translocation'), '8.4', [
      { n: 1, f: 'Translocation', b: 'The movement of sucrose and amino acids in the phloem from sources to sinks.', u: true },
      { n: 2, f: 'Source and sink', b: 'Source: a part of a plant that releases sucrose or amino acids.\nSink: a part of a plant that uses or stores sucrose or amino acids.', u: true },
      { n: 3, f: 'Examples of sources and sinks', b: 'Source: a mature photosynthesising leaf.\nSinks: growing root and shoot tips, developing fruits and seeds, a storage organ being filled.', u: true },
      { n: 4, f: 'How can one part of a plant be both a source and a sink?', b: 'At different times. A storage organ is a sink while it fills with starch, and a source at the start of new growth, when starch is broken down and sucrose released.', u: true },
    ]),

    // 9 Transport in animals
    ...sub(T9, t('circulatory-systems'), '9.1', [
      { n: 1, f: 'Circulatory system', b: 'A system of blood vessels with a pump and valves to ensure one-way flow of blood.' },
      { n: 2, f: 'Single vs double circulation', b: 'Single (fish): blood passes through the heart once per circuit: heart → gills → body → heart.\nDouble (mammal): twice per circuit: heart → lungs → heart → body → heart.', u: true },
      { n: 3, f: 'Advantages of a double circulation', b: 'Blood is pumped again after the lungs, so it reaches the body at high pressure and flows faster. Blood goes to the lungs at lower pressure. Oxygenated and deoxygenated blood are kept separate.', u: true },
    ]),
    ...sub(T9, t('heart'), '9.2', [
      { n: 1, f: 'Route of blood through the heart', b: 'Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body.' },
      { n: 2, f: 'Three ways to monitor the activity of the heart', b: 'ECG, pulse rate, and listening to the sounds of the valves closing.' },
      { n: 3, f: 'Coronary heart disease', b: 'Blockage of the coronary arteries, so heart muscle gets less oxygen and glucose, cannot respire, and may die (heart attack).' },
      { n: 4, f: 'Risk factors for coronary heart disease', b: 'Diet, lack of exercise, stress, smoking, genetic predisposition, age and sex.' },
      { n: 5, f: 'Why is the left ventricle wall thicker than the right?', b: 'It pumps blood round the whole body at higher pressure; the right ventricle pumps only to the lungs. (Higher pressure, not a bigger volume.)', u: true },
      { n: 6, f: 'Atrioventricular and semilunar valves during a heartbeat', b: 'Ventricles contract: atrioventricular valves close (no backflow into the atria) and semilunar valves open. Ventricles relax: semilunar valves close (no backflow into the ventricles).', u: true },
      { n: 7, f: 'Explain why heart rate rises during exercise', b: 'Muscles respire faster, so need more oxygen and glucose and must lose more carbon dioxide. A faster heart rate delivers blood faster.', u: true },
    ]),
    ...sub(T9, t('blood-vessels'), '9.3', [
      { n: 1, f: 'Artery and vein (definitions)', b: 'Artery: carries blood away from the heart.\nVein: carries blood back to the heart.\n(Defined by direction, not oxygen: the pulmonary artery carries deoxygenated blood.)' },
      { n: 2, f: 'Artery vs vein vs capillary: wall, lumen, valves', b: 'Artery: thick muscular elastic wall, narrow lumen, no valves.\nVein: thin wall, wide lumen, valves.\nCapillary: wall one cell thick, very narrow lumen, no valves.' },
      { n: 3, f: 'Blood vessels into and out of the lungs and the kidneys', b: 'Lungs: in by the pulmonary artery, out by the pulmonary vein.\nKidney: in by the renal artery, out by the renal vein.' },
      { n: 4, f: 'Link the structure of each vessel to its function', b: 'Artery: thick wall withstands high pressure; elastic tissue stretches and recoils. Vein: low pressure, wide lumen, valves stop backflow. Capillary: one-cell-thick wall gives a short diffusion distance.', u: true },
      { n: 5, f: 'Hepatic portal vein', b: 'Carries blood with absorbed nutrients from the gut to the liver. (The liver also receives the hepatic artery and drains into the hepatic vein.)', u: true },
    ]),
    ...sub(T9, t('blood'), '9.4', [
      { n: 1, f: 'Functions of red blood cells, white blood cells and platelets', b: 'Red cells: transport oxygen (haemoglobin combines with oxygen).\nWhite cells: phagocytosis and antibody production.\nPlatelets: clotting.' },
      { n: 2, f: 'What does plasma transport?', b: 'Blood cells, ions, nutrients, urea, hormones and carbon dioxide. (Not oxygen: red blood cells carry that.)' },
      { n: 3, f: 'Why is blood clotting important?', b: 'It prevents blood loss and the entry of pathogens.' },
      { n: 4, f: 'Lymphocyte vs phagocyte', b: 'Lymphocyte: large round nucleus, little cytoplasm; produces antibodies.\nPhagocyte: lobed nucleus, more cytoplasm; engulfs pathogens by phagocytosis.', u: true },
      { n: 5, f: 'Process of blood clotting', b: 'Soluble fibrinogen is converted to insoluble fibrin, which forms a mesh that traps blood cells to form a clot.', u: true },
    ]),

    // 10 Diseases and immunity
    ...sub(T10, t('diseases-and-immunity'), '10.1', [
      { n: 1, f: 'Pathogen and transmissible disease', b: 'Pathogen: a disease-causing organism.\nTransmissible disease: one in which the pathogen can be passed from one host to another.' },
      { n: 2, f: 'Direct vs indirect transmission', b: 'Direct: contact with blood or other body fluids. Indirect: contaminated surfaces, food, animals or air.' },
      { n: 3, f: 'Mucus (body defence)', b: 'Traps pathogens in the airways.', src: DIS },
      { n: 4, f: 'Stomach acid (body defence)', b: 'Kills pathogens in food and drink.', src: DIS },
      { n: 5, f: 'Five ways to control the spread of disease', b: 'Clean water supply, hygienic food preparation, good personal hygiene, waste disposal, sewage treatment.' },
      { n: 6, f: 'Antigen and antibody', b: 'Antigen: a molecule on a pathogen with a specific shape.\nAntibody: a protein made by lymphocytes with a shape complementary to a specific antigen; it binds to it.', u: true },
      { n: 7, f: 'Active immunity: definition and how it is gained', b: 'Defence against a pathogen by antibody production in the body. Gained after infection by the pathogen or by vaccination. Memory cells give long-term immunity.', u: true },
      { n: 8, f: 'How vaccination works', b: 'Weakened pathogens or their antigens are put into the body. The antigens stimulate lymphocytes to produce antibodies, and memory cells are made, giving long-term immunity. (Vaccines do not contain antibodies.)', u: true },
      { n: 9, f: 'Passive immunity', b: 'Short-term defence by antibodies acquired from another individual, e.g. across the placenta or in breast milk. No memory cells are made, so it does not last.', u: true },
      { n: 10, f: 'How cholera causes dehydration', b: 'The bacterium produces a toxin that causes chloride ions to be secreted into the small intestine. Water moves into the gut by osmosis, causing diarrhoea, dehydration and loss of ions from the blood.', u: true },
    ]),

    // 11 Gas exchange in humans
    ...sub(T11, t('gas-exchange-in-humans'), '11.1', [
      { n: 1, f: 'Four features of gas exchange surfaces, with reasons', b: 'Large surface area: more diffusion at once. Thin surface: short diffusion distance. Good blood supply and good ventilation with air: both maintain a steep concentration gradient.' },
      { n: 2, f: 'Route of air from the larynx to the gas exchange surface', b: 'Larynx → trachea → bronchi → bronchioles → alveoli.' },
      { n: 3, f: 'Inspired vs expired air: oxygen, carbon dioxide, water vapour', b: 'Oxygen: about 21% in, about 16% out.\nCarbon dioxide: about 0.04% in, about 4% out.\nWater vapour: more in expired air.' },
      { n: 4, f: 'Effect of physical activity on breathing', b: 'The rate and depth of breathing increase, then fall back gradually to resting values afterwards.' },
      { n: 5, f: 'Gas exchange v ventilation', b: 'Diffusion across alveoli v air moving in and out.', src: GAS },
      { n: 6, f: 'Rate v depth of breathing', b: 'Breaths per minute v volume of air per breath.', src: GAS },
      { n: 7, f: 'Breathing in: muscles, ribs, diaphragm, volume and pressure', b: 'External intercostals contract, internal intercostals relax; ribs move up and out; diaphragm contracts and flattens; thorax volume increases, so pressure falls below atmospheric and air flows in.', u: true },
      { n: 8, f: 'Function of cartilage in the trachea', b: 'Keeps the trachea open so it does not collapse when pressure falls during breathing in.', u: true },
      { n: 9, f: 'Why exercise increases the rate and depth of breathing (Extended chain)', b: 'More aerobic respiration in muscles → more carbon dioxide in the blood → detected by the brain → increased rate and depth of breathing.', u: true },
      { n: 10, f: 'Ciliated cells (protecting the airways)', b: 'Cilia beat and move mucus up to the throat, where it is swallowed.', u: true, src: GAS },
      { n: 11, f: 'Goblet cells v ciliated cells', b: 'Goblet cells make mucus, which traps pathogens and particles; ciliated cells move the mucus. Cilia do not trap anything.', u: true, src: GAS },
    ]),

    // 12 Respiration
    ...sub(T12, t('respiration'), '12.1', [
      { n: 1, f: 'Seven uses of energy in the human body', b: 'Muscle contraction, protein synthesis, cell division, active transport, growth, passage of nerve impulses, maintenance of a constant body temperature.' },
      { n: 2, f: 'Respiration v breathing', b: 'Chemical energy release in cells v air moving in and out of the lungs.', src: RESP },
      { n: 3, f: 'Release v produce (energy in respiration)', b: 'Energy is released, never produced or made.', src: RESP },
      { n: 4, f: 'Effect of temperature on respiration in yeast', b: 'The rate rises towards an optimum, then falls and almost stops at high temperatures, because the enzymes controlling respiration are denatured. (The enzymes are denatured, not the yeast.)' },
      { n: 5, f: 'Measuring the rate of respiration of yeast at different temperatures', b: 'Keep yeast and glucose volumes and concentrations the same, equilibrate in a water bath, then count bubbles of carbon dioxide per minute (or measure gas volume). Repeat and take a mean.' },
    ]),
    ...sub(T12, t('aerobic-respiration'), '12.2', [
      { n: 1, f: 'Aerobic respiration', b: 'The chemical reactions in cells that use oxygen to break down nutrient molecules to release energy.' },
      { n: 2, f: 'Word equation for aerobic respiration', b: 'glucose + oxygen → carbon dioxide + water' },
      { n: 3, f: 'Balanced equation for aerobic respiration', b: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', u: true },
      { n: 4, f: 'How many oxygen molecules are needed to respire 2 glucose molecules aerobically?', b: '2 × 6 = 12.', u: true },
    ]),
    ...sub(T12, t('anaerobic-respiration'), '12.3', [
      { n: 1, f: 'Anaerobic respiration', b: 'The chemical reactions in cells that break down nutrient molecules to release energy without using oxygen.' },
      { n: 2, f: 'Word equations for anaerobic respiration in yeast and in muscles', b: 'Yeast: glucose → alcohol + carbon dioxide.\nMuscles (vigorous exercise): glucose → lactic acid.' },
      { n: 3, f: 'Energy released by anaerobic compared with aerobic respiration', b: 'Anaerobic respiration releases much less energy per glucose molecule.' },
      { n: 4, f: 'Balanced equation for anaerobic respiration in yeast', b: 'C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂', u: true },
      { n: 5, f: 'Cause of the oxygen debt', b: 'During vigorous exercise muscles respire anaerobically, so lactic acid builds up in the muscles and blood.', u: true },
      { n: 6, f: 'How the oxygen debt is removed after exercise', b: 'A fast heart rate continues, carrying lactic acid to the liver. Deeper, faster breathing continues, supplying oxygen. In the liver, lactic acid is broken down by aerobic respiration.', u: true },
    ]),

    // 13 Excretion in humans
    ...sub(T13, t('excretion-in-humans'), '13.1', [
      { n: 1, f: 'What do the lungs and the kidneys excrete?', b: 'Lungs: carbon dioxide.\nKidneys: urea, excess water and excess ions (as urine).' },
      { n: 2, f: 'Order of the urinary system structures', b: 'Kidney → ureter (one from each kidney) → bladder (stores urine) → urethra (one) → outside.' },
      { n: 3, f: 'Ureter vs urethra', b: 'The two ureters carry urine from the kidneys to the bladder. The single urethra carries urine from the bladder to the outside.' },
      { n: 4, f: 'Cortex and medulla of the kidney', b: 'Cortex: the outer, darker layer.\nMedulla: the inner region, made of cone-shaped sections.', u: true, src: EXC },
      { n: 5, f: 'Role of the nephron in three steps', b: 'At the glomerulus, water, glucose, urea and ions are filtered out of the blood. All of the glucose, some of the ions and most of the water are reabsorbed. Urea, excess water and excess ions remain as urine.', u: true },
      { n: 6, f: 'Why is there no protein in the urine of a healthy person?', b: 'Proteins (and blood cells) are too large to be filtered out at the glomerulus, so they stay in the blood.', u: true },
      { n: 7, f: 'Deamination', b: 'The removal of the nitrogen-containing part of amino acids to form urea. It happens in the liver, to excess amino acids.', u: true },
      { n: 8, f: 'Why must urea be excreted?', b: 'Urea is toxic. If it were not excreted it would build up in the blood and damage cells.', u: true },
    ]),

    // 14 Coordination and response
    ...sub(T14, t('coordination-and-response'), '14.1', [
      { n: 1, f: 'Central and peripheral nervous systems', b: 'CNS: brain and spinal cord.\nPNS: the nerves outside the brain and spinal cord.' },
      { n: 2, f: 'Reflex arc, in order', b: 'Receptor → sensory neurone → relay neurone → motor neurone → effector (muscle or gland).' },
      { n: 3, f: 'Reflex action', b: 'A means of automatically and rapidly integrating and coordinating stimuli with the responses of effectors (muscles and glands).' },
      { n: 4, f: 'Synapse', b: 'A junction between two neurones.', u: true },
      { n: 5, f: 'Events at a synapse', b: 'An impulse arrives → neurotransmitter is released from vesicles into the synaptic gap → it diffuses across the gap → binds with receptor proteins on the next neurone → a new impulse is stimulated.', u: true },
      { n: 6, f: 'Why do impulses cross a synapse in one direction only?', b: 'Neurotransmitter is released only from the vesicles on one side, and the receptor proteins are only on the next neurone.', u: true },
    ]),
    ...sub(T14, t('sense-organs'), '14.2', [
      { n: 1, f: 'Sense organ', b: 'A group of receptor cells responding to specific stimuli: light, sound, touch, temperature and chemicals.' },
      { n: 2, f: 'Functions of the cornea, iris and lens', b: 'Cornea: refracts light.\nIris: controls how much light enters the pupil.\nLens: focuses light on to the retina.' },
      { n: 3, f: 'Functions of the retina and optic nerve; what is the blind spot?', b: 'Retina: contains light receptors, some sensitive to different colours. Optic nerve: carries impulses to the brain. Blind spot: where the optic nerve leaves; no receptors.' },
      { n: 4, f: 'Pupil reflex', b: 'Bright light: pupil diameter decreases.\nDim light: pupil diameter increases.' },
      { n: 5, f: 'Iris muscles in bright and in dim light', b: 'Bright: circular muscles contract, radial muscles relax, pupil constricts.\nDim: radial muscles contract, circular muscles relax, pupil dilates.', u: true },
      { n: 6, f: 'Accommodation for a near object', b: 'Ciliary muscles contract → suspensory ligaments slacken → lens becomes fatter (more convex) → light refracted more. For a distant object, every step is reversed.', u: true },
      { n: 7, f: 'Rods vs cones', b: 'Rods: more sensitive to light, give night vision, spread over the retina.\nCones: three kinds, for colour vision, concentrated at the fovea.', u: true },
    ]),
    ...sub(T14, t('hormones'), '14.3', [
      { n: 1, f: 'Hormone', b: 'A chemical substance, produced by a gland and carried by the blood, which alters the activity of one or more specific target organs.' },
      { n: 2, f: 'Glands and their hormones: adrenal glands, pancreas, testes, ovaries', b: 'Adrenal glands: adrenaline. Pancreas: insulin. Testes: testosterone. Ovaries: oestrogen.' },
      { n: 3, f: 'Effects of adrenaline ("fight or flight")', b: 'Increased breathing rate, heart rate and pupil diameter.' },
      { n: 4, f: 'Nervous vs hormonal control', b: 'Nervous: fast action, short-lived effect.\nHormonal: slower action, longer-lasting effect.' },
      { n: 5, f: 'Role of adrenaline in controlling metabolic activity', b: 'It increases the blood glucose concentration and the heart rate.', u: true },
    ]),
    ...sub(T14, t('homeostasis'), '14.4', [
      { n: 1, f: 'Homeostasis', b: 'The maintenance of a constant internal environment.' },
      { n: 2, f: 'Effect of insulin on blood glucose (Core)', b: 'Insulin decreases the blood glucose concentration.' },
      { n: 3, f: 'Negative feedback', b: 'A change away from the set point triggers a response that reverses the change.', u: true },
      { n: 4, f: 'Control of blood glucose by insulin and glucagon', b: 'Too high: pancreas secretes insulin → liver converts glucose to glycogen → level falls.\nToo low: pancreas secretes glucagon → liver converts glycogen to glucose → level rises.', u: true },
      { n: 5, f: 'Treatment of Type 1 diabetes', b: 'Insulin injections, monitoring blood glucose, controlling carbohydrate in the diet, and planning exercise.', u: true },
      { n: 6, f: 'How the body responds when it is too hot', b: 'Sweating (evaporation cools the skin); vasodilation of arterioles supplying skin capillaries, so more heat is lost; hairs lie flat. (Capillaries do not move.)', u: true },
      { n: 7, f: 'How the body responds when it is too cold', b: 'Shivering (respiration in muscles releases heat); vasoconstriction of arterioles supplying skin capillaries, so less heat is lost; hair erector muscles contract so hairs trap insulating air.', u: true },
    ]),
    ...sub(T14, t('tropic-responses'), '14.5', [
      { n: 1, f: 'Gravitropism and phototropism', b: 'Gravitropism: parts of a plant grow towards or away from gravity.\nPhototropism: parts of a plant grow towards or away from the direction of the light source.' },
      { n: 2, f: 'Responses of shoots and roots to light and gravity', b: 'Shoots grow towards light and away from gravity.\nRoots grow towards gravity and away from light.' },
      { n: 3, f: 'Four facts about auxin', b: 'Made in the shoot tip; diffuses through the plant from the tip; unequally distributed in response to light and gravity; stimulates cell elongation.', u: true },
      { n: 4, f: 'Explain why a shoot lit from one side bends towards the light', b: 'Auxin collects on the shaded side, so cells there elongate more, and the shoot bends towards the light.', u: true },
    ]),

    // 15 Drugs
    ...sub(T15, t('drugs'), '15.1', [
      { n: 1, f: 'Drug', b: 'Any substance taken into the body that modifies or affects chemical reactions in the body.' },
      { n: 2, f: 'What are antibiotics used for?', b: 'To treat bacterial infections. Antibiotics kill bacteria but do not affect viruses.' },
      { n: 3, f: 'Why does an antibiotic not cure flu?', b: 'Flu is caused by a virus. Viruses are not cells, so antibiotics have nothing to act on.' },
      { n: 4, f: 'Effect of antibiotic resistance', b: 'Some bacteria are resistant to antibiotics, which reduces the effectiveness of antibiotics: an infection may not be cured and another antibiotic may be needed.' },
      { n: 5, f: 'Why should antibiotics be used only when essential?', b: 'Each use selects resistant bacteria. Using antibiotics only when essential gives fewer chances for selection, so resistant strains such as MRSA are less likely to develop and spread.', u: true },
      { n: 6, f: 'MRSA', b: 'Methicillin-resistant Staphylococcus aureus: a strain of a common bacterium that is resistant to many antibiotics.', u: true },
    ]),

    // 16 Reproduction
    ...sub(T16, t('asexual-reproduction'), '16.1', [
      { n: 1, f: 'Asexual reproduction', b: 'A process resulting in the production of genetically identical offspring from one parent.' },
      { n: 2, f: 'Asexual reproduction: gametes, speed and variation', b: 'No gametes or fertilisation; fast; offspring are genetically identical, so there is no variation.' },
      { n: 3, f: 'Advantages and disadvantages of asexual reproduction in a crop', b: 'For: uniform, predictable plants with the grower\'s chosen features, produced quickly. Against: genetically identical plants can all be destroyed by one disease, and no new varieties arise.', u: true },
    ]),
    ...sub(T16, t('sexual-reproduction'), '16.2', [
      { n: 1, f: 'Sexual reproduction', b: 'A process involving the fusion of the nuclei of two gametes to form a zygote, and the production of offspring that are genetically different from each other.' },
      { n: 2, f: 'Fertilisation', b: 'The fusion of the nuclei of gametes.' },
      { n: 3, f: 'Gamete and zygote nuclei: haploid or diploid?', b: 'Gamete nuclei are haploid; the zygote nucleus is diploid.', u: true },
      { n: 4, f: 'Advantage of sexual reproduction for a wild population', b: 'Offspring vary, so the population can adapt when the environment changes. (Asexual reproduction is faster and needs no mate.)', u: true },
    ]),
    ...sub(T16, t('sexual-reproduction-in-plants'), '16.3', [
      { n: 1, f: 'Functions of the anther, stigma and ovary', b: 'Anther: makes pollen.\nStigma: receives pollen.\nOvary: contains the ovules, which contain the female gametes.' },
      { n: 2, f: 'Pollination', b: 'The transfer of pollen grains from an anther to a stigma.' },
      { n: 3, f: 'Insect-pollinated vs wind-pollinated flowers', b: 'Insect: large bright scented petals; anthers and sticky stigma inside; fewer, larger sticky or spiky pollen grains.\nWind: small dull petals; anthers and feathery stigmas hang outside; huge numbers of small light smooth grains.' },
      { n: 4, f: 'Conditions needed for germination', b: 'Water, oxygen and a suitable temperature. (Not light.)' },
      { n: 5, f: 'Self-pollination vs cross-pollination', b: 'Self: pollen to the stigma of the same flower or another flower on the same plant.\nCross: pollen to a flower on a different plant of the same species. Cross-pollination gives more variation but relies more on pollinators.', u: true },
      { n: 6, f: 'Events from pollination to fertilisation in a flowering plant', b: 'Pollen lands on the stigma; a pollen tube grows down through the style and enters the ovule through the micropyle; the pollen nucleus fuses with the nucleus in the ovule.', u: true },
    ]),
    ...sub(T16, t('sexual-reproduction-in-humans'), '16.4', [
      { n: 1, f: 'Functions of the testes, sperm ducts, prostate gland and urethra', b: 'Testes: make sperm. Sperm ducts: carry sperm to the urethra. Prostate gland: adds fluid for sperm to swim in. Urethra: carries semen out through the penis.' },
      { n: 2, f: 'Functions of the ovaries, oviducts, uterus and cervix', b: 'Ovaries: make eggs. Oviducts: carry the egg; site of fertilisation. Uterus: site of implantation, where the fetus develops. Cervix: holds the fetus in and widens at birth.' },
      { n: 3, f: 'Sperm vs egg cell', b: 'Sperm: much smaller, motile, made in very large numbers; flagellum, many mitochondria, acrosome with enzymes.\nEgg: much larger, not motile, few made; energy stores in the cytoplasm and a jelly coat.' },
      { n: 4, f: 'Placenta, umbilical cord and amniotic fluid', b: 'Placenta: exchange of substances between mother and fetus. Umbilical cord: links the fetus to the placenta. Amniotic fluid (in the amniotic sac): protects and cushions the fetus.' },
      { n: 5, f: 'What crosses the placenta, and in which direction?', b: 'Mother → fetus: oxygen, glucose, amino acids and other dissolved nutrients.\nFetus → mother: carbon dioxide and urea.\nSome pathogens and toxins can also cross. The bloods do not mix.', u: true },
    ]),
    ...sub(T16, t('sex-hormones-in-humans'), '16.5', [
      { n: 1, f: 'Roles of testosterone and oestrogen at puberty', b: 'Testosterone (testes): facial and body hair, deeper voice, muscle growth.\nOestrogen (ovaries): breasts develop, hips widen, menstrual cycle starts.' },
      { n: 2, f: 'Menstrual cycle: changes in the ovary', b: 'Days 1–5: a new follicle starts to develop. Days 6–13: the egg matures in the follicle. About day 14: ovulation, the egg is released.' },
      { n: 3, f: 'Menstrual cycle: changes in the uterus lining', b: 'Days 1–5: the lining breaks down and is lost. It then repairs and thickens, and is kept thick after ovulation ready for implantation. If no implantation, it is lost again.' },
      { n: 4, f: 'FSH and LH: source and roles', b: 'Both from the pituitary gland.\nFSH: a follicle develops and oestrogen is made.\nLH: triggers ovulation and formation of the corpus luteum.', u: true },
      { n: 5, f: 'Progesterone: source and role', b: 'From the corpus luteum (and the placenta in pregnancy). Maintains the uterus lining and inhibits FSH and LH. A fall in progesterone leads to menstruation.', u: true },
    ]),
    ...sub(T16, t('sexually-transmitted-infections'), '16.6', [
      { n: 1, f: 'Sexually transmitted infection (STI)', b: 'An infection that is transmitted through sexual contact.' },
      { n: 2, f: 'HIV and AIDS', b: 'HIV is a pathogen that causes an STI. HIV infection may lead to AIDS.' },
      { n: 3, f: 'Ways HIV is transmitted', b: 'Unprotected sex; sharing needles; transfusion of infected blood; from mother to baby across the placenta, at birth or in breast milk.' },
      { n: 4, f: 'Ways to control the spread of STIs', b: 'Condoms; fewer sexual partners; testing, treating and informing partners; screening donated blood; not sharing needles; education.' },
    ]),

    // 17 Inheritance
    ...sub(T17, t('chromosomes-genes-and-proteins'), '17.1', [
      { n: 1, f: 'Gene', b: 'A length of DNA that codes for a protein. (Chromosomes are made of DNA.)' },
      { n: 2, f: 'Gene vs allele', b: 'The gene is the length of DNA for a feature; alleles are its alternative forms.', src: INH },
      { n: 3, f: 'Inheritance of sex in humans', b: 'Females are XX, males XY. All eggs carry X; half of sperm carry X and half Y. The chance of a boy is 1/2 at every birth.' },
      { n: 4, f: 'How a gene controls a protein', b: 'The sequence of bases in the gene sets the sequence of amino acids, which sets the shape of the protein and therefore its function (e.g. enzymes, membrane carriers, receptors for neurotransmitters).', u: true },
      { n: 5, f: 'Outline of protein synthesis', b: 'The gene stays in the nucleus; an mRNA copy is made there and moves to the cytoplasm; it passes through a ribosome, which joins amino acids in the order set by the mRNA base sequence.', u: true },
      { n: 6, f: 'Haploid vs diploid nucleus', b: 'Haploid: a single set of chromosomes (human gamete: 23).\nDiploid: two sets (human body cell: 23 pairs, 46).', u: true },
      { n: 7, f: 'Why does a muscle cell not make insulin although it has the insulin gene?', b: 'Most genes in a cell are not expressed: each cell makes only the proteins it needs.', u: true },
    ]),
    ...sub(T17, t('mitosis'), '17.2', [
      { n: 1, f: 'Mitosis', b: 'Nuclear division giving rise to genetically identical cells.', u: true },
      { n: 2, f: 'Roles of mitosis', b: 'Growth, repair of damaged tissues, replacement of cells, and asexual reproduction.', u: true },
      { n: 3, f: 'What happens to chromosomes before and during mitosis?', b: 'Before: exact replication of the chromosomes. During: the copies of the chromosomes separate, so the chromosome number is maintained.', u: true },
      { n: 4, f: 'Stem cell', b: 'An unspecialised cell that divides by mitosis to produce daughter cells that can become specialised.', u: true },
    ]),
    ...sub(T17, t('meiosis'), '17.3', [
      { n: 1, f: 'Meiosis', b: 'A reduction division in which the chromosome number is halved from diploid to haploid, giving genetically different cells.', u: true },
      { n: 2, f: 'Role of meiosis', b: 'Production of gametes.', u: true },
      { n: 3, f: 'Mitosis vs meiosis', b: 'Identical and same number vs different and halved.', u: true, src: INH },
      { n: 4, f: 'A dog body cell has 78 chromosomes. How many in a dog sperm and a dog zygote?', b: 'Sperm (made by meiosis, haploid): 39.\nZygote (diploid): 78.', u: true },
    ]),
    ...sub(T17, t('monohybrid-inheritance'), '17.4', [
      { n: 1, f: 'Genotype vs phenotype', b: 'Genotype: the genetic make-up of an organism in terms of the alleles present.\nPhenotype: the observable features of an organism.' },
      { n: 2, f: 'Homozygous vs heterozygous; pure-breeding', b: 'Homozygous: two identical alleles of a gene. Heterozygous: two different alleles. Two identical homozygous individuals bred together are pure-breeding; a heterozygote is not.' },
      { n: 3, f: 'Dominant and recessive alleles', b: 'Dominant: expressed if it is present in the genotype.\nRecessive: only expressed when there is no dominant allele of the gene present.' },
      { n: 4, f: 'Offspring ratios of Aa × Aa and Aa × aa', b: 'Aa × Aa: 1 AA : 2 Aa : 1 aa, a 3 : 1 phenotype ratio.\nAa × aa: 1 Aa : 1 aa, a 1 : 1 ratio.' },
      { n: 5, f: 'Ratio v probability', b: '3 : 1 means a 1/4 (25%) chance of the recessive phenotype, not 1/3.', src: INH },
      { n: 6, f: 'How does a pedigree show that a feature is recessive?', b: 'Two unaffected parents have an affected child. Both parents must be heterozygous, and the affected child is homozygous recessive.' },
      { n: 7, f: 'Test cross', b: 'Cross the dominant-phenotype organism with a homozygous recessive. All offspring dominant: it was probably homozygous dominant. Any recessive offspring: it was heterozygous.', u: true },
      { n: 8, f: 'ABO blood group alleles and genotypes', b: 'Iᴬ and Iᴮ are codominant; both are dominant to Iᵒ.\nGroup A: IᴬIᴬ or IᴬIᵒ. Group B: IᴮIᴮ or IᴮIᵒ. Group AB: IᴬIᴮ. Group O: IᵒIᵒ.', u: true },
      { n: 9, f: 'Why is red-green colour blindness more common in males?', b: 'It is sex-linked: the gene is on the X chromosome, with no allele on the Y. A male (XᵇY) with one recessive allele always shows it; a female needs two (XᵇXᵇ).', u: true },
    ]),

    // 18 Variation and selection
    ...sub(T18, t('variation'), '18.1', [
      { n: 1, f: 'Variation', b: 'Differences between individuals of the same species.' },
      { n: 2, f: 'Continuous vs discontinuous variation', b: 'Continuous: a range of phenotypes between two extremes, e.g. body length and mass; caused by genes and environment.\nDiscontinuous: a limited number of phenotypes with no intermediates, e.g. ABO blood group; usually genes only.' },
      { n: 3, f: 'Graphs for continuous and discontinuous variation', b: 'Continuous: histogram with touching bars and equal class intervals.\nDiscontinuous: bar chart with separate bars.' },
      { n: 4, f: 'Mutation v cause of mutation', b: 'Radiation and chemicals increase the rate; mutation also happens without them.', src: VAR },
      { n: 5, f: 'Mutation (Core) and what it produces', b: 'Mutation is genetic change. It is how new alleles are formed. Ionising radiation and some chemicals increase the rate.' },
      { n: 6, f: 'Gene mutation', b: 'A random change in the base sequence of DNA.', u: true },
      { n: 7, f: 'Four sources of genetic variation in populations', b: 'Mutation, meiosis, random mating and random fertilisation.', u: true },
    ]),
    ...sub(T18, t('adaptive-features'), '18.2', [
      { n: 1, f: 'Adaptive feature', b: 'An inherited feature that helps an organism to survive and reproduce in its environment.' },
      { n: 2, f: 'How to answer an "adaptive feature" question about a species', b: 'For each feature say what it does and how that helps survival or reproduction in that environment. The feature must be inherited, not gained during life.' },
      { n: 3, f: 'Adaptation (Extended definition)', b: 'The process, resulting from natural selection, by which populations become more suited to their environment over many generations.', u: true },
      { n: 4, f: 'Adaptive features of xerophytes', b: 'Thick waxy cuticle, sunken stomata, hairs, rolled leaves, few stomata, spines instead of leaves, deep or wide roots, water-storage tissue.', u: true },
      { n: 5, f: 'How do sunken stomata, hairs and rolled leaves reduce water loss?', b: 'They trap moist air next to the stomata, so the water vapour concentration gradient is smaller and less water vapour diffuses out.', u: true },
      { n: 6, f: 'Adaptive features of hydrophytes', b: 'Large air spaces (buoyancy); stomata on the upper surface of floating leaves; thin or no cuticle; little xylem and support tissue; large flat leaves.', u: true },
    ]),
    ...sub(T18, t('selection'), '18.3', [
      { n: 1, f: 'Natural selection, in steps', b: 'Variation within the population → many offspring → struggle for survival (competition, predation, disease) → better-adapted individuals survive and reproduce more → they pass on their alleles → over many generations the allele becomes more common.' },
      { n: 2, f: 'Individual v population (in selection)', b: 'Individuals do not adapt during their lifetime; populations change over generations.', src: VAR },
      { n: 3, f: 'Selective breeding, in steps', b: 'Select individuals with the desired feature → cross them → select offspring showing the feature → breed from them → repeat over many generations.' },
      { n: 4, f: 'How antibiotic resistance develops in bacteria', b: 'A random mutation gives a few bacteria resistance → the antibiotic kills non-resistant bacteria → resistant ones survive and reproduce, passing on the allele → over many generations a resistant strain develops.', u: true },
      { n: 5, f: 'Natural selection vs artificial selection', b: 'Natural: the environment selects; features that aid survival; usually slower.\nArtificial: humans select; features useful to humans; usually faster.', u: true },
    ]),

    // 19 Organisms and their environment
    ...sub(T19, t('energy-flow'), '19.1', [
      { n: 1, f: 'Principal source of energy input to biological systems', b: 'The Sun.' },
      { n: 2, f: 'Describe the flow of energy through living organisms', b: 'Light energy → chemical energy in organic compounds (by photosynthesis in producers) → passed along by feeding → eventually transferred to the environment as heat.' },
      { n: 3, f: 'Energy vs nutrients in an ecosystem', b: 'Energy flows in one direction and is not recycled; it is eventually transferred to the environment as heat. Nutrients such as carbon are recycled.' },
    ]),
    ...sub(T19, t('food-chains-and-food-webs'), '19.2', [
      { n: 1, f: 'Food chain and food web', b: 'Food chain: shows the transfer of energy from one organism to the next, beginning with a producer.\nFood web: a network of interconnected food chains.' },
      { n: 2, f: 'Producer, consumer and decomposer', b: 'Producer: makes its own organic nutrients, usually using energy from sunlight, through photosynthesis. Consumer: gets energy by feeding on other organisms. Decomposer: gets energy from dead or waste organic material.' },
      { n: 3, f: 'Trophic level, and the order of trophic levels', b: 'The position of an organism in a food chain, food web or ecological pyramid. Producers → primary → secondary → tertiary → quaternary consumers.' },
      { n: 4, f: 'Why can a pyramid of numbers be inverted, and why is biomass better?', b: 'One large organism (e.g. a tree) can support many small ones. A pyramid of biomass accounts for the size of organisms, so it gives a truer picture.' },
      { n: 5, f: 'Efficiency of energy transfer between trophic levels', b: 'efficiency (%) = energy at higher level ÷ energy at lower level × 100. E.g. 360 ÷ 4500 × 100 = 8.0%.', u: true },
      { n: 6, f: 'Why energy transfer between trophic levels is inefficient', b: 'Heat lost in respiration; parts not eaten; parts not digested (faeces); excretion; energy used in movement.', u: true },
      { n: 7, f: 'Why is it more efficient for humans to eat crops than livestock?', b: 'Eating crops involves one energy transfer; eating livestock fed on crops adds another trophic level, with energy lost as heat, in movement and in faeces. More people can be fed from the same area.', u: true },
    ]),
    ...sub(T19, t('nutrient-cycles'), '19.3', [
      { n: 1, f: 'Carbon cycle: processes that remove CO₂ from or add CO₂ to the air', b: 'Removes: photosynthesis.\nAdds: respiration, decomposition (respiration by decomposers) and combustion.' },
      { n: 2, f: 'How are fossil fuels formed in the carbon cycle?', b: 'From dead organisms that were not fully decomposed, over millions of years.' },
      { n: 3, f: 'Nitrification', b: 'Ammonium ions → nitrate ions, by nitrifying bacteria.', u: true },
      { n: 4, f: 'Nitrogen fixation vs denitrification', b: 'Fixation: nitrogen gas → nitrogen compounds, by lightning or nitrogen-fixing bacteria (in soil and root nodules).\nDenitrification: nitrate ions → nitrogen gas, by denitrifying bacteria.', u: true },
      { n: 5, f: 'Role of decomposers in the nitrogen cycle', b: 'They break down protein in dead organisms and waste into ammonium ions.', u: true },
    ]),
    ...sub(T19, t('populations'), '19.4', [
      { n: 1, f: 'Population', b: 'A group of organisms of one species, living in the same area, at the same time.' },
      { n: 2, f: 'Community and ecosystem', b: 'Community: all of the populations of different species in an ecosystem.\nEcosystem: a unit containing the community of organisms and their environment, interacting together.' },
      { n: 3, f: 'Factors affecting the rate of population growth', b: 'Food supply, competition, predation and disease.' },
      { n: 4, f: 'Phases of a sigmoid population growth curve', b: 'Lag (slow rise), exponential or log (steep rise), stationary (level), death (fall).' },
      { n: 5, f: 'Explain the stationary phase of a sigmoid curve', b: 'Limiting factors such as food or space act, so births equal deaths.', u: true },
      { n: 6, f: 'Explain the exponential and death phases', b: 'Exponential: resources are plentiful, so births far exceed deaths.\nDeath: food runs out or toxic waste builds up, so deaths exceed births.', u: true },
    ]),

    // 20 Human influences on ecosystems
    ...sub(T20, t('food-supply'), '20.1', [
      { n: 1, f: 'Ways agricultural machinery and chemical fertilisers increase food production', b: 'Machinery: larger areas can be farmed, more efficiently.\nFertilisers: improved yields.' },
      { n: 2, f: 'How insecticides and herbicides increase food production', b: 'Insecticides kill insect pests, improving quality and yield.\nHerbicides kill weeds, reducing competition with the crop.' },
      { n: 3, f: 'Advantages and disadvantages of large-scale monocultures', b: 'For: efficient use of machinery, high yield, lower cost per unit.\nAgainst: low biodiversity, pests and diseases spread easily, heavy use of pesticides and fertiliser, habitats such as hedgerows removed.' },
      { n: 4, f: 'Advantages and disadvantages of intensive livestock production', b: 'For: animals move less and are kept warm, so less energy is lost and they grow faster; high output at lower cost.\nAgainst: disease spreads quickly, waste can pollute water, welfare concerns, large amounts of crop feed needed.' },
    ]),
    ...sub(T20, t('habitat-destruction'), '20.2', [
      { n: 1, f: 'Biodiversity', b: 'The number of different species that live in an area.' },
      { n: 2, f: 'Reasons for habitat destruction', b: 'More land for housing, crop plants and livestock; extraction of natural resources; freshwater and marine pollution.' },
      { n: 3, f: 'Undesirable effects of deforestation', b: 'Reduced biodiversity, extinction, loss of soil, flooding, and an increase in carbon dioxide in the atmosphere.' },
      { n: 4, f: 'Why can deforestation cause flooding and loss of soil?', b: 'Fewer trees take up and transpire water, so more rain runs off; with no roots holding it, soil is washed away.' },
    ]),
    ...sub(T20, t('pollution'), '20.3', [
      { n: 1, f: 'Effect of untreated sewage or excess fertiliser in a river', b: 'Sewage: bacteria decompose it, using up dissolved oxygen, so aquatic animals die.\nFertiliser run-off: producers grow rapidly; when they die, decomposition lowers oxygen and animals die.' },
      { n: 2, f: 'Effects of non-biodegradable plastics', b: 'Not broken down by decomposers. In water: animals become entangled or swallow plastic, and fragments enter food chains. On land: plastic fills landfill and traps or is eaten by animals.' },
      { n: 3, f: 'Sources of carbon dioxide and methane', b: 'Carbon dioxide: combustion of fossil fuels, burning forests.\nMethane: livestock such as cattle, rice fields, landfill.' },
      { n: 4, f: 'Enhanced greenhouse effect', b: 'Extra carbon dioxide and methane keep more thermal energy in the atmosphere, leading to climate change.' },
      { n: 5, f: 'Eutrophication in six steps', b: 'More nitrate and other ions → more growth of producers → producers die and are decomposed → more aerobic respiration by decomposers → dissolved oxygen falls → organisms that need dissolved oxygen die.', u: true },
    ]),
    ...sub(T20, t('conservation'), '20.4', [
      { n: 1, f: 'Sustainable resource', b: 'One which is produced as rapidly as it is removed from the environment, so that it does not run out. Examples: forests and fish stocks.' },
      { n: 2, f: 'Why species become endangered or extinct', b: 'Climate change, habitat destruction, hunting, overharvesting, pollution and introduced species.' },
      { n: 3, f: 'How endangered species can be conserved', b: 'Monitoring and protecting species and habitats; education; captive breeding programmes; seed banks.' },
      { n: 4, f: 'Methods for conserving fish stocks', b: 'Education, closed seasons, protected areas, controlled net types and mesh size, quotas and monitoring.', u: true },
      { n: 5, f: 'Artificial insemination (AI) vs IVF in conservation', b: 'AI: sperm collected from a male, stored or transported, and placed in a female.\nIVF: eggs fertilised outside the body; embryos placed in a female.', u: true },
      { n: 6, f: 'Why is a small population at greater risk of extinction?', b: 'It has reduced genetic variation, so fewer individuals may have alleles that let them survive environmental change or a new disease.', u: true },
    ]),

    // 21 Biotechnology and genetic modification
    ...sub(T21, t('biotechnology-and-genetic-modification'), '21.1', [
      { n: 1, f: 'Why are bacteria useful in biotechnology? (Core)', b: 'Their rapid reproduction rate and their ability to make complex molecules.' },
      { n: 2, f: 'Biotechnology', b: 'Using living organisms, usually microorganisms, to make useful products.' },
      { n: 3, f: 'Two further reasons bacteria are useful in biotechnology and GM (Extended)', b: 'There are few ethical concerns over their manipulation and growth, and they have plasmids, which can carry an inserted gene into bacteria.', u: true },
    ]),
    ...sub(T21, t('biotechnology'), '21.2', [
      { n: 1, f: 'Yeast in bread-making vs biofuel production', b: 'Both use anaerobic respiration: glucose → alcohol + carbon dioxide. Bread needs the carbon dioxide (bubbles make dough rise). Biofuel needs the ethanol.' },
      { n: 2, f: 'Pectinase in fruit juice production', b: 'Breaks down pectin in plant cell walls, so more juice is released and the juice is clearer.' },
      { n: 3, f: 'Biological washing powders', b: 'Contain proteases, lipases and amylases, which digest stains to small soluble molecules, so stains are removed at lower temperatures.' },
      { n: 4, f: 'Lactase and lactose-free milk', b: 'Lactase breaks down lactose to glucose and galactose, making milk that people who cannot digest lactose can drink.', u: true },
      { n: 5, f: 'Products made in fermenters', b: 'Insulin (by GM bacteria), penicillin (fungus) and mycoprotein (fungus).', u: true },
      { n: 6, f: 'Why is a fermenter cooled, and what else is controlled?', b: 'Microbial respiration releases heat, so a water jacket cools it to keep enzymes near the optimum. Also controlled: pH, oxygen (sterile air, paddles), nutrient supply and waste products.', u: true },
    ]),
    ...sub(T21, t('genetic-modification'), '21.3', [
      { n: 1, f: 'Genetic modification', b: 'Changing the genetic material of an organism by removing, changing or inserting individual genes.' },
      { n: 2, f: 'Four examples of genetic modification', b: 'Human genes inserted into bacteria to make human proteins (e.g. insulin); crop plants given genes for herbicide resistance, for resistance to insect pests, and for improved nutritional qualities.' },
      { n: 3, f: 'Restriction enzymes vs DNA ligase', b: 'Restriction enzymes cut DNA at a particular point, leaving sticky ends. DNA ligase joins pieces of DNA together.', u: true },
      { n: 4, f: 'Steps in making a human protein in bacteria', b: 'Cut out the gene with restriction enzymes (sticky ends); cut plasmids with the same enzymes; insert the gene and join with DNA ligase (recombinant plasmid); insert into bacteria; bacteria multiply and express the gene.', u: true },
      { n: 5, f: 'Why must the plasmid be cut with the same restriction enzyme as the gene?', b: 'So the sticky ends are complementary and can pair up.', u: true },
      { n: 6, f: 'Advantages and disadvantages of GM crops', b: 'For: higher yields, less insecticide sprayed, weeds killed without harming the crop, better nutrition.\nAgainst: costly seed, genes may spread to wild relatives, reduced biodiversity, pests may evolve resistance.', u: true },
    ]),
  ],
};
