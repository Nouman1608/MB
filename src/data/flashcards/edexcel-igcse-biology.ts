/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE Biology 4BI1 (Issue 3).
 *
 * 4BI1 is untiered, so no card carries a tier. Content that the specification
 * marks with a "B" reference (bold) is Biology-only and assessed on Paper 2
 * only; those cards say "(Paper 2 only)" on the card itself, following the
 * Marlbridge 4BI1 revision notes.
 *
 * Topics 2 and 3 are itemised into lettered sub-topics, so ids are
 * `<sub-topic letter>-<n>`. Both topics use the letters a and b, so Topic 3's
 * cards are numbered from 101 (a-101, b-101, ...) to keep every id unique.
 * Topics 1, 4 and 5 itemise no sub-topics in the syllabus record, so their
 * cards sit on the topic and ids are `<topic>-<n>`. Ids are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4BI1); origin 'revision-notes'.
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

const T1 = 'the-nature-and-variety-of-living-organisms-edexcel-igcse-biology';
const T2 = 'structures-and-functions-in-living-organisms-edexcel-igcse-biology';
const T3 = 'reproduction-and-inheritance-edexcel-igcse-biology';
const T4 = 'ecology-and-the-environment-edexcel-igcse-biology';
const T5 = 'use-of-biological-resources-edexcel-igcse-biology';

const NV = 'igcse-edexcel-biology-nature-variety-revision-notes';
const LOBM = 'edexcel-igcse-biology-4bi1-level-of-organisation-and-biological-molecules-revision-notes';
const CELL = 'edexcel-igcse-biology-cell-structure-revision-notes';
const MOV = 'edexcel-igcse-biology-4bi1-movement-of-substances-into-and-out-of-cells-revision-notes';
const RESP = 'edexcel-igcse-biology-4bi1-respiration-revision-notes';
const GAS = 'edexcel-igcse-biology-4bi1-gas-exchange-revision-notes';
const TRANS = 'edexcel-igcse-biology-4bi1-transport-revision-notes';
const EXC = 'edexcel-igcse-biology-4bi1-excretion-revision-notes';
const INH = 'edexcel-igcse-biology-4bi1-inheritance-revision-notes';
const ECO = 'edexcel-igcse-biology-4bi1-ecology-and-the-environment-revision-notes';
const USE = 'edexcel-igcse-biology-4bi1-use-of-biological-resources-revision-notes';

export const DECK_EDEXCEL_IGCSE_BIOLOGY: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'biology',
  syllabusCode: '4BI1',
  syllabusSeries: 'Issue 3',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  cards: [
    // 1 The nature and variety of living organisms
    ...topicOnly(T1, '1', [
      { n: 1, f: 'The eight characteristics of living organisms', b: 'Nutrition, respiration, excretion, growth, movement, sensitivity, reproduction, and control of internal conditions (homeostasis).' },
      { n: 2, f: 'Excretion (and how it differs from egestion)', b: 'Excretion is the removal of the waste products of metabolism, substances the body itself produced. Egestion is undigested food leaving the gut; it was never absorbed, so it is not excretion.', src: NV },
      { n: 3, f: 'Growth', b: 'A permanent increase in size and dry mass. Taking up water increases mass without being growth.', src: NV },
      { n: 4, f: 'Plant kingdom: key features and examples', b: 'Multicellular, with chloroplasts and a cellulose cell wall; store starch and sucrose.\nExamples: flowering plants, ferns.', src: NV },
      { n: 5, f: 'Animal kingdom: key features and examples', b: 'Multicellular, no cell wall, no chloroplasts; store glycogen; usually have nervous co-ordination.\nExamples: mammals, insects.', src: NV },
      { n: 6, f: 'Fungi: key features and examples', b: 'Body of thread-like hyphae forming a mycelium; cell wall made of chitin; saprotrophic nutrition; store glycogen; no chloroplasts.\nExamples: Mucor, and yeast (single-celled).', src: NV },
      { n: 7, f: 'Describe saprotrophic nutrition, in the right order', b: 'Enzymes are secreted onto the food, digestion happens outside the organism, then the soluble products are absorbed. Digestion first, absorption second.' },
      { n: 8, f: 'Protoctists: key features and examples', b: 'Microscopic and single-celled, with a nucleus; some are plant-like (with chloroplasts) and some animal-like.\nExamples: Amoeba, Chlorella, Plasmodium.', src: NV },
      { n: 9, f: 'Prokaryotes (bacteria): key features and examples', b: 'Single-celled, no nucleus; circular DNA and plasmids.\nExamples: Lactobacillus, Pneumococcus.', src: NV },
      { n: 10, f: 'Why are viruses not classed as living organisms?', b: 'They have no cellular structure (no cytoplasm or organelles), only genetic material (DNA or RNA) inside a protein coat, and they can only reproduce inside a living host cell.\nExamples: influenza virus, HIV, tobacco mosaic virus.' },
      { n: 11, f: 'Pathogen vs vector, using malaria as the example', b: 'The pathogen is the organism that causes the disease: Plasmodium, a protoctist. The vector carries and transmits it: the mosquito.' },
      { n: 12, f: 'Which kingdoms store starch, and which store glycogen?', b: 'Plants store starch (and sucrose). Animals and fungi store glycogen.' },
    ]),

    // 2 Structures and functions in living organisms
    ...sub(T2, 'level-of-organisation-4bi1', 'a', [
      { n: 1, f: 'Levels of organisation, smallest first', b: 'Organelle → cell → tissue → organ → organ system → organism.' },
      { n: 2, f: 'Organelle', b: 'A structure inside a cell with a specific function, such as the nucleus, a mitochondrion, a chloroplast or a ribosome.', src: LOBM },
      { n: 3, f: 'Tissue', b: 'A group of similar cells working together for one function, such as muscle tissue, epithelium or palisade mesophyll.', src: LOBM },
      { n: 4, f: 'Organ', b: 'A group of different tissues working together to perform a specific function, such as the heart, stomach, brain, leaf or root.', src: LOBM },
      { n: 5, f: 'Organ system', b: 'A group of organs working together with related functions, such as the digestive, circulatory or nervous system.', src: LOBM },
      { n: 6, f: 'Is the heart a tissue or an organ? Why?', b: 'An organ: it contains several different tissues (such as muscle and nervous tissue) working together.' },
      { n: 7, f: 'Walk a leaf down the levels of organisation', b: 'Leaf: organ. Palisade mesophyll: tissue. Palisade cell: cell. Chloroplast: organelle. The leaf works with the stem and other organs in the shoot system.' },
      { n: 8, f: 'Name the tissue, organ and organ system in this example: the stomach lining that secretes enzymes', b: 'Glandular tissue in the lining: tissue. The stomach (glandular, muscular and epithelial tissue): organ. Stomach with intestines and glands: the digestive system.' },
      { n: 9, f: 'Exam trap: "an organ is a group of cells"', b: 'Wrong. An organ is a group of different tissues. A tissue is a group of similar cells.' },
    ]),
    ...sub(T2, 'cell-structure-4bi1', 'b', [
      { n: 1, f: 'Function of the nucleus', b: 'Contains the genetic material and controls the activities of the cell.', src: CELL },
      { n: 2, f: 'Function of the cytoplasm', b: 'The site of most of the chemical reactions in the cell.', src: CELL },
      { n: 3, f: 'Function of the cell membrane', b: 'Controls which substances enter and leave the cell.', src: CELL },
      { n: 4, f: 'Function of the cell wall (plant cells)', b: 'Made of cellulose; provides structural support.', src: CELL },
      { n: 5, f: 'Function of mitochondria', b: 'The site of aerobic respiration, which releases energy.', src: CELL },
      { n: 6, f: 'Function of chloroplasts (plant cells)', b: 'The site of photosynthesis; they contain chlorophyll, which absorbs light.', src: CELL },
      { n: 7, f: 'Function of ribosomes', b: 'The site of protein synthesis.', src: CELL },
      { n: 8, f: 'Function of the large permanent vacuole (plant cells)', b: 'Stores cell sap and keeps the cell turgid.', src: CELL },
      { n: 9, f: 'Structures found in both plant and animal cells', b: 'Nucleus, cytoplasm, cell membrane, mitochondria and ribosomes.' },
      { n: 10, f: 'Three structures found in plant cells but not in animal cells', b: 'Cell wall, chloroplasts and a large permanent vacuole.' },
      { n: 11, f: 'Cell differentiation, and why it matters', b: 'The process by which a cell becomes specialised for a particular function. It lets a multicellular organism develop the different specialised cells (such as red blood cells, neurones and muscle cells) that make up its tissues. (Paper 2 only)' },
      { n: 12, f: 'Stem cells in medicine: one advantage and two disadvantages', b: 'Advantage: stem cells can differentiate into specialised cells, so they could replace lost or damaged cells and treat disease.\nDisadvantages: ethical concerns (especially over embryonic stem cells), and a risk of tumours. (Paper 2 only)' },
    ]),
    ...sub(T2, 'biological-molecules-4bi1', 'c', [
      { n: 1, f: 'Elements in carbohydrates, lipids and proteins', b: 'Carbohydrates and lipids: carbon, hydrogen and oxygen.\nProteins: carbon, hydrogen, oxygen and nitrogen (often sulfur too).\nNitrogen present → protein.', src: LOBM },
      { n: 2, f: 'Starch vs glycogen', b: 'Both are built from glucose (simple sugar) units. Starch is the storage carbohydrate of plants; glycogen of animals and fungi.', src: LOBM },
      { n: 3, f: 'The smaller units that make up proteins and lipids', b: 'Proteins: amino acids (the order of amino acids decides the shape).\nLipids: fatty acids and glycerol (usually three fatty acids to one glycerol).' },
      { n: 4, f: 'Food test for glucose', b: 'Add Benedict\'s solution and heat in a water bath. Positive: blue → green / yellow / orange / brick-red (brick-red = most glucose). Sucrose gives a negative result.' },
      { n: 5, f: 'Food test for starch', b: 'Add iodine solution, no heating. Positive: orange-brown → blue-black.' },
      { n: 6, f: 'Food test for protein', b: 'Biuret test (sodium hydroxide + copper sulfate), no heating. Positive: blue → purple.' },
      { n: 7, f: 'Food test for fat', b: 'Shake with ethanol, then pour into water. Positive: a cloudy white emulsion forms.' },
      { n: 8, f: 'Enzyme', b: 'A protein that acts as a biological catalyst in metabolic reactions: it speeds up the reaction without being used up.', src: LOBM },
      { n: 9, f: 'Active site and enzyme specificity', b: 'The active site is a region with a specific shape; the substrate has a complementary shape. Each enzyme works on one type of substrate because of the shape of its active site.', src: LOBM },
      { n: 10, f: 'Enzyme slowed vs denatured', b: 'Cold slows an enzyme reversibly (less kinetic energy, fewer collisions). Heat above the optimum breaks bonds and changes the shape of the active site permanently, so the substrate no longer fits: denatured.', src: LOBM },
      { n: 11, f: 'How does pH affect an enzyme?', b: 'A pH away from the optimum alters the active site, so fewer enzyme-substrate complexes form; extreme pH denatures the enzyme. Typical optima: stomach protease about pH 2, salivary amylase about pH 7.' },
      { n: 12, f: 'Amylase and starch practical: how is the rate found? Starch disappears after 125 s.', b: 'Test a drop with iodine every 30 s until it stays orange-brown. Rate = 1 ÷ time = 1 ÷ 125 = 0.008 s⁻¹. The temperature practical is on both papers; the pH practical is Paper 2 only.' },
    ]),
    ...sub(T2, 'movement-of-substances-into-and-out-of-cells-4bi1', 'd', [
      { n: 1, f: 'Diffusion', b: 'The net movement of particles from a region of higher concentration to a region of lower concentration (down a concentration gradient). Passive.', src: MOV },
      { n: 2, f: 'Osmosis', b: 'The net movement of water molecules from a dilute solution to a more concentrated solution through a partially permeable membrane. Passive.', src: MOV },
      { n: 3, f: 'Active transport', b: 'Movement of substances from a region of lower concentration to a region of higher concentration (against a concentration gradient), using energy from respiration. Needs carrier proteins in the membrane.', src: MOV },
      { n: 4, f: 'Partially permeable membrane', b: 'A membrane that lets small molecules such as water through but not larger ones such as sucrose.', src: MOV },
      { n: 5, f: 'Turgid, flaccid and plasmolysed plant cells', b: 'Turgid: has taken in water; the vacuole presses the cytoplasm against the wall.\nFlaccid: has lost water, no longer firm.\nPlasmolysed: has lost so much water that the cytoplasm and membrane pull away from the wall.', src: MOV },
      { n: 6, f: 'An animal cell and a plant cell are put in pure water. What happens to each?', b: 'Animal cell: swells and may burst (no cell wall). Plant cell: becomes turgid but does not burst, because the cell wall resists.' },
      { n: 7, f: 'Four factors that increase the rate of diffusion', b: 'A steeper concentration gradient, a higher temperature (more kinetic energy), a shorter distance, and a larger surface area to volume ratio.' },
      { n: 8, f: 'Surface area to volume ratio of a cube of side 5 cm', b: 'Surface area = 6 × 5² = 150 cm². Volume = 5³ = 125 cm³. Ratio = 150 ÷ 125 = 1.2 : 1. Smaller objects have larger ratios.' },
      { n: 9, f: 'A 2.00 g potato cylinder becomes 2.30 g in sucrose solution. Percentage change, and what it shows?', b: '(2.30 − 2.00) ÷ 2.00 × 100 = +15%. Water entered by osmosis, so the solution was more dilute than the cell contents.' },
      { n: 10, f: 'Potato practical: why use percentage change, and what does the x-intercept show?', b: 'Starting masses differ, so percentage change gives a fair comparison. Where the line crosses 0% there is no net water movement: an estimate of the concentration of the cell contents.' },
      { n: 11, f: 'Visking tubing filled with sucrose solution is put in water. What happens to its mass?', b: 'It increases. Water moves in by osmosis from the dilute water to the concentrated sucrose solution; sucrose molecules are too large to pass out.' },
      { n: 12, f: 'Why do root hair cells need active transport to take up nitrate ions?', b: 'Nitrate is often at a lower concentration in the soil water than in the cell, so the ions must be moved against the concentration gradient, using energy from respiration.' },
    ]),
    ...sub(T2, 'nutrition-4bi1', 'e', [
      { n: 1, f: 'Photosynthesis: word and balanced symbol equations', b: 'carbon dioxide + water → glucose + oxygen (light, chlorophyll)\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\nIt converts light energy into chemical energy in glucose.' },
      { n: 2, f: 'Limiting factors of photosynthesis and the shape of each graph', b: 'Light intensity and carbon dioxide concentration: the rate rises, then levels off. Temperature: the rate rises to an optimum, then falls steeply (enzymes). On a flat part of a graph, the x-axis factor is not limiting.' },
      { n: 3, f: 'How is a leaf adapted for photosynthesis?', b: 'Large surface area to absorb light; thin for a short CO₂ diffusion path; transparent cuticle and upper epidermis; palisade mesophyll with most chloroplasts near the top; air spaces in the spongy mesophyll; stomata; xylem and phloem.' },
      { n: 4, f: 'Why does a plant need magnesium ions and nitrate ions?', b: 'Magnesium: to make chlorophyll (shortage → yellow leaves).\nNitrate: to make amino acids, then proteins (shortage → poor growth).' },
      { n: 5, f: 'Testing a leaf for starch: the steps and why', b: 'Boiling water: kills the leaf and makes cells permeable.\nHot ethanol (in a water bath, flame off): removes chlorophyll.\nWarm water: softens the leaf.\nIodine: blue-black means starch.' },
      { n: 6, f: 'Showing that light, CO₂ and chlorophyll are needed for photosynthesis', b: 'Destarch the plant first (about 48 hours in the dark). Light: cover part of a leaf with foil. CO₂: put soda lime with the plant. Chlorophyll: use a variegated leaf. The covered part, soda-lime plant and white areas give no starch.' },
      { n: 7, f: 'Balanced diet, and the deficiency linked to vitamin C, vitamin D and iron', b: 'A balanced diet has carbohydrate, protein, lipid, vitamins, minerals, water and dietary fibre in appropriate proportions.\nVitamin C: scurvy. Vitamin D (calcium absorption): rickets. Iron (haemoglobin): anaemia.' },
      { n: 8, f: 'Order of the alimentary canal', b: 'Mouth → oesophagus → stomach → duodenum → ileum → colon → rectum → anus. The pancreas releases enzymes into the duodenum; the liver makes bile.' },
      { n: 9, f: 'Amylase, maltase, protease and lipase: substrate and product', b: 'Amylase: starch → maltose.\nMaltase: maltose → glucose.\nProtease: protein → amino acids.\nLipase: lipid → fatty acids + glycerol.' },
      { n: 10, f: 'Bile: where made, where stored, and its two jobs', b: 'Made in the liver, stored in the gall bladder, released into the duodenum. It is alkaline, neutralising stomach acid, and it emulsifies lipids into small droplets, giving a larger surface area for lipase. It is not an enzyme.' },
      { n: 11, f: 'How is a villus adapted for absorption?', b: 'Many villi and microvilli give a large surface area; the wall is one cell thick (short diffusion distance); a capillary network carries away glucose and amino acids, keeping the gradient steep; a lacteal absorbs fatty acids and glycerol.' },
      { n: 12, f: 'Energy in food: 0.60 g of food heats 30 cm³ of water by 15 °C. Energy per gram?', b: 'Energy = 30 × 4.2 × 15 = 1890 J. Per gram = 1890 ÷ 0.60 = 3150 J/g = 3.15 kJ/g. The value is too low because of heat loss and incomplete burning. (Paper 2 only)' },
    ]),
    ...sub(T2, 'respiration-4bi1', 'f', [
      { n: 1, f: 'Respiration', b: 'Chemical reactions in living cells that break down glucose to release energy, which is used to make ATP. It happens in every living cell, all the time, and is controlled by enzymes.', src: RESP },
      { n: 2, f: 'What does ATP stand for, and what is its energy used for?', b: 'Adenosine triphosphate. Its energy is used for muscle contraction, active transport, building large molecules such as proteins, cell division and growth, nerve impulses, and keeping body temperature constant.' },
      { n: 3, f: 'Aerobic respiration: word and balanced symbol equations', b: 'glucose + oxygen → carbon dioxide + water\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O' },
      { n: 4, f: 'Anaerobic respiration in animals vs in plants and yeast', b: 'Animals: glucose → lactic acid.\nPlants and yeast: glucose → ethanol + carbon dioxide.', src: RESP },
      { n: 5, f: 'Does anaerobic respiration release no energy?', b: 'No. It releases less energy than aerobic respiration, not none. Glucose is only partly broken down, so energy is left in the lactic acid or ethanol.', src: RESP },
      { n: 6, f: 'When does anaerobic respiration happen?', b: 'In human muscle during vigorous exercise when oxygen cannot be supplied fast enough; in plant roots in waterlogged soil; in yeast in a sealed container.', src: RESP },
      { n: 7, f: 'Aerobic vs anaerobic: oxygen, energy per glucose, and site in the cell', b: 'Aerobic: needs oxygen, releases much more energy, mainly in the mitochondria.\nAnaerobic: no oxygen, releases much less energy, in the cytoplasm.' },
      { n: 8, f: 'Respiration vs breathing', b: 'Respiration is a chemical process in cells that releases energy from glucose. Breathing (ventilation) is moving air into and out of the lungs.' },
      { n: 9, f: 'Hydrogen-carbonate indicator: colours for normal, raised and lowered carbon dioxide', b: 'Starts red/orange (atmospheric CO₂). More CO₂: yellow. Less CO₂: purple. Respiring organisms in a sealed tube turn it yellow.' },
      { n: 10, f: 'Germinating peas in a vacuum flask: the control, and why rinse in disinfectant?', b: 'Control: boiled (dead) peas, which cannot respire. Disinfectant kills microbes on the peas, which would respire and give off heat. The vacuum flask insulates, so heat released by respiration raises the temperature.' },
      { n: 11, f: 'Germinating seeds rise by 9.0 °C over 6 days. Mean rate of temperature rise?', b: '9.0 ÷ 6 = 1.5 °C per day.' },
    ]),
    ...sub(T2, 'gas-exchange-4bi1', 'g', [
      { n: 1, f: 'Gases exchanged by a leaf in respiration and in photosynthesis', b: 'Respiration: all the time, in all living cells. Takes in oxygen, gives out carbon dioxide.\nPhotosynthesis: in the light only. Takes in carbon dioxide, gives out oxygen. (Paper 2 only)', src: GAS },
      { n: 2, f: 'Net gas exchange of a leaf in the dark, in dim light and in bright light', b: 'Dark: respiration only, so oxygen in and CO₂ out.\nDim (balance point): photosynthesis rate = respiration rate, so no net exchange.\nBright: CO₂ in, oxygen out. (Paper 2 only)' },
      { n: 3, f: 'A leaf in hydrogen-carbonate indicator: what colour in the dark, and in bright light?', b: 'Dark: yellow (respiration only, CO₂ rises). Bright light: purple (photosynthesis faster, CO₂ falls). At the balance point it stays red. A no-leaf tube is the control. (Paper 2 only)' },
      { n: 4, f: 'How is a leaf adapted for gas exchange?', b: 'Thin (short diffusion distance); broad and flat (large surface area); air spaces in the spongy mesophyll; stomata, mostly on the lower surface; moist cell walls so gases dissolve. (Paper 2 only)' },
      { n: 5, f: 'When are stomata usually open, and when closed?', b: 'Open in the light, so CO₂ can enter for photosynthesis. Closed in the dark or when water is short, which reduces water loss but limits gas exchange. Guard cells open and close the pore. (Paper 2 only)' },
      { n: 6, f: 'Structures of the thorax: the airway, and the diaphragm', b: 'Airway: trachea → bronchi → bronchioles → alveoli. Ribs protect the lungs, with intercostal muscles between them. The diaphragm is a muscle sheet below the lungs, separating the thorax from the abdomen.', src: GAS },
      { n: 7, f: 'Breathing in: describe the steps', b: 'External intercostal muscles contract, ribs move up and out; the diaphragm contracts and flattens; thorax volume increases; pressure falls below atmospheric; air flows in.' },
      { n: 8, f: 'Breathing out (normal): describe the steps', b: 'External intercostal muscles relax, ribs move down and in; the diaphragm relaxes and domes upwards; thorax volume decreases; pressure rises above atmospheric; air flows out.' },
      { n: 9, f: 'How are the alveoli adapted for gas exchange?', b: 'Huge number of alveoli (large surface area); alveolar and capillary walls one cell thick (short diffusion distance); dense capillary network and ventilation keep the concentration gradient steep; moist lining.' },
      { n: 10, f: 'Effects of tar, carbon monoxide and nicotine in tobacco smoke', b: 'Tar: carcinogens cause lung cancer; irritates airways.\nCarbon monoxide: binds to haemoglobin more readily than oxygen, so the blood carries less oxygen.\nNicotine: addictive; raises heart rate and blood pressure.' },
      { n: 11, f: 'How does smoking cause emphysema and bronchitis?', b: 'Emphysema: alveolar walls break down, reducing the surface area, so the person is breathless.\nBronchitis: cilia are damaged and more mucus is made, so mucus is not cleared, giving a smoker\'s cough and chest infections.' },
      { n: 12, f: 'Investigating the effect of exercise on breathing rate', b: 'Count breaths per minute at rest, exercise for a fixed time, count again; repeat for a mean. Control the type, length and intensity of exercise.', src: GAS },
    ]),
    ...sub(T2, 'transport-4bi1', 'h', [
      { n: 1, f: 'Why do multicellular organisms need a transport system when unicellular ones do not?', b: 'Unicellular: large surface area to volume ratio and short distances, so diffusion is fast enough.\nMulticellular: small surface area to volume ratio and long distances to inner cells, so diffusion is too slow.', src: TRANS },
      { n: 2, f: 'Xylem vs phloem', b: 'Xylem: water and mineral ions, upwards only, from the roots; dead, hollow, lignified cells.\nPhloem: sucrose and amino acids, up and down, from the leaves to growing regions and stores; living cells.', src: TRANS },
      { n: 3, f: 'How is a root hair cell adapted to take up water?', b: 'Its long extension gives a large surface area. The cell sap is more concentrated than the soil water, so water enters by osmosis across the partially permeable membrane. (Paper 2 only)', src: TRANS },
      { n: 4, f: 'Transpiration, and the effect of humidity, wind, temperature and light on its rate', b: 'The evaporation of water from the surface of a plant; water vapour diffuses out through the stomata.\nHumidity up: rate falls. Wind, temperature and light intensity up: rate rises (more stomata open in light). (Paper 2 only)' },
      { n: 5, f: 'What does plasma carry?', b: 'Carbon dioxide, digested food (glucose, amino acids), urea, hormones and heat energy.' },
      { n: 6, f: 'How is a red blood cell adapted to carry oxygen?', b: 'Biconcave shape: large surface area to volume ratio for fast diffusion. No nucleus: more space for haemoglobin. Haemoglobin + oxygen → oxyhaemoglobin in the lungs; oxygen is released in respiring tissues.' },
      { n: 7, f: 'Phagocytes vs lymphocytes', b: 'Phagocytes ingest and digest pathogens (phagocytosis); not specific.\nLymphocytes release antibodies specific to the antigens on one pathogen.', src: TRANS },
      { n: 8, f: 'How does vaccination give immunity?', b: 'A dead or weakened pathogen, or its antigens, is introduced. Lymphocytes make antibodies and memory cells. On later infection, antibodies are made sooner, faster and in greater quantity, so there is no illness. (Paper 2 only)', src: TRANS },
      { n: 9, f: 'How does blood clot, and why is clotting important?', b: 'Platelets cause soluble fibrinogen to be converted into insoluble fibrin, a mesh that traps red blood cells to form a clot. It stops blood loss and the entry of micro-organisms. (Paper 2 only)', src: TRANS },
      { n: 10, f: 'Route of blood through the heart, starting at the vena cava', b: 'Vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta. Valves prevent backflow. The left ventricle wall is thicker to pump blood at higher pressure round the whole body.' },
      { n: 11, f: 'Why does heart rate rise during exercise?', b: 'More respiration → more CO₂ → detected by the brain → nerve impulses → heart beats faster and stronger → more oxygen and glucose to the muscles, and CO₂ removed faster. Adrenaline also increases heart rate.', src: TRANS },
      { n: 12, f: 'Arteries vs veins vs capillaries', b: 'Arteries: away from the heart, high pressure, thick muscular elastic wall, narrow lumen, no valves.\nVeins: towards the heart, low pressure, thin wall, wide lumen, valves.\nCapillaries: wall one cell thick, link arteries to veins.' },
    ]),
    ...sub(T2, 'excretion-4bi1', 'i', [
      { n: 1, f: 'Which gases does a plant excrete, and when?', b: 'Carbon dioxide (from respiration), when respiration is faster than photosynthesis, in the dark or dim light. Oxygen (from photosynthesis), in bright light. Both diffuse out through the stomata.' },
      { n: 2, f: 'Excretory organs in humans and what each excretes', b: 'Lungs: carbon dioxide (and water vapour).\nKidneys: urea, excess water and excess ions, as urine.\nSkin: water, ions and a little urea, as sweat.' },
      { n: 3, f: 'Urea', b: 'A nitrogen-containing waste made in the liver from excess amino acids, carried in the plasma to the kidneys.', src: EXC },
      { n: 4, f: 'Path of urine out of the body, from the kidney', b: 'Kidney → ureter → bladder (stores urine) → urethra → outside. The ureter comes first; the urethra is the exit. (Paper 2 only)' },
      { n: 5, f: 'How does ultrafiltration happen in the glomerulus?', b: 'The vessel into the glomerulus is wider than the vessel out, so blood pressure is high. Small molecules are forced out through the capillary wall into Bowman\'s capsule, forming the glomerular filtrate. (Paper 2 only)' },
      { n: 6, f: 'Which substances are in the glomerular filtrate, and which are not?', b: 'In: water, glucose, urea, ions, amino acids.\nNot in (too large): red and white blood cells, platelets, plasma proteins. (Paper 2 only)' },
      { n: 7, f: 'Where and how is glucose reabsorbed, and why?', b: 'All of it, in the proximal convoluted tubule, including by active transport (the cells have many mitochondria and microvilli). Glucose is needed for respiration, so it must not be lost. (Paper 2 only)' },
      { n: 8, f: 'Role of the loop of Henle and collecting duct in reabsorbing water', b: 'The loop of Henle makes the tissue of the medulla concentrated. As the collecting duct passes through the medulla, water leaves it by osmosis into the tissue and then the blood. (Paper 2 only)' },
      { n: 9, f: 'ADH: where it is released, what it does, and what happens when blood water content is low', b: 'Released by the pituitary gland; makes the collecting duct more permeable to water. Low water content (sweating, little drinking) → more ADH → more water reabsorbed → a small volume of concentrated urine. (Paper 2 only)' },
      { n: 10, f: 'Filtrate forms at 130 cm³ per minute and urine at 1.3 cm³ per minute. Percentage of filtrate reabsorbed?', b: '(130 − 1.3) ÷ 130 × 100 = 99.0%. Divide by the filtrate volume, not the urine volume. (Paper 2 only)' },
      { n: 11, f: 'Ultrafiltration vs selective reabsorption', b: 'Ultrafiltration: non-selective, by high pressure, at the glomerulus; all small molecules enter the filtrate.\nSelective reabsorption: particular useful substances, such as glucose, taken back into the blood from the tubules. (Paper 2 only)', src: EXC },
      { n: 12, f: 'Why is urea more concentrated in urine than in the filtrate?', b: 'Water is reabsorbed but urea is not, so the urea becomes more concentrated. It is not "added" to the urine. (Paper 2 only)' },
    ]),
    ...sub(T2, 'co-ordination-and-response-4bi1', 'j', [
      { n: 1, f: 'Stimulus, receptor and effector', b: 'Stimulus: a change in the environment that can be detected.\nReceptor: detects a stimulus.\nEffector: carries out the response, a muscle (contracts) or a gland (secretes).' },
      { n: 2, f: 'Homeostasis, and the two examples named in the specification', b: 'The maintenance of a constant internal environment. Examples: body water content and body temperature.' },
      { n: 3, f: 'Phototropism and geotropism in stems and roots', b: 'Stems: positive phototropism (towards light), negative geotropism (away from gravity).\nRoots: negative phototropism, positive geotropism (grow down).' },
      { n: 4, f: 'Explain how a stem bends towards light', b: 'Auxin is made in the shoot tip. Light from one side makes auxin move to the shaded side. More auxin causes more cell elongation on the shaded side, so the stem bends towards the light.' },
      { n: 5, f: 'Nervous vs hormonal co-ordination', b: 'Nervous: electrical impulses along neurones; fast, short-lived, precise.\nHormonal: chemicals carried in the blood; slower, longer-lasting, widespread.' },
      { n: 6, f: 'What happens at a synapse?', b: 'An impulse arrives, neurotransmitter is released, diffuses across the gap and binds to receptors on the next neurone, starting a new impulse. Synapses work in one direction only.' },
      { n: 7, f: 'The reflex arc for pulling a hand from a hot object', b: 'Receptor in the skin → sensory neurone → relay neurone (spinal cord) → motor neurone → muscle (biceps) contracts → hand withdrawn. Fast because the route is short and bypasses conscious thought.' },
      { n: 8, f: 'Functions of the cornea, iris, lens, retina, fovea and optic nerve', b: 'Cornea: refracts light. Iris: controls pupil size. Lens: fine focusing. Retina: receptors, rods (dim light) and cones (colour). Fovea: most cones, sharpest vision. Optic nerve: carries impulses to the brain.' },
      { n: 9, f: 'Accommodation: focusing on a near object vs a distant object', b: 'Near: ciliary muscle contracts, suspensory ligaments slacken, lens becomes fatter and refracts more.\nDistant: ciliary muscle relaxes, ligaments tighten, lens becomes thinner and refracts less.' },
      { n: 10, f: 'Pupil size in bright light and in dim light', b: 'Bright: circular muscles contract, radial muscles relax, pupil constricts.\nDim: circular muscles relax, radial muscles contract, pupil dilates.' },
      { n: 11, f: 'How does the skin cool the body when it is too hot?', b: 'More sweat is released; its evaporation removes heat. Arterioles supplying the skin capillaries widen (vasodilation), so more blood flows near the surface and more heat is lost by radiation. When cold: less sweat and vasoconstriction.' },
      { n: 12, f: 'Adrenaline and insulin: gland and effect', b: 'Adrenaline (adrenal glands): raises heart and breathing rate, liver glycogen → glucose, pupils widen.\nInsulin (pancreas): lowers blood glucose, glucose → glycogen in the liver and muscles.' },
    ]),

    // 3 Reproduction and inheritance (numbered from 101: see the note at the top)
    ...sub(T3, 'reproduction-4bi1', 'a', [
      { n: 101, f: 'Sexual vs asexual reproduction', b: 'Sexual: usually two parents, gametes fuse at fertilisation, offspring genetically different.\nAsexual: one parent, no gametes, mitosis, offspring genetically identical (clones).' },
      { n: 102, f: 'Fertilisation and zygote', b: 'Fertilisation: the fusion of the nuclei of a male and a female gamete. The zygote is the single cell formed; it divides by mitosis to form an embryo.' },
      { n: 103, f: 'Pollination', b: 'The transfer of pollen from an anther to a stigma.' },
      { n: 104, f: 'Insect-pollinated vs wind-pollinated flowers', b: 'Insect: large, bright, scented petals; nectar; anthers and sticky stigma inside the flower; larger, sticky or spiky pollen.\nWind: small or no petals; anthers outside on long filaments; large feathery stigma outside; lots of small, light, smooth pollen.' },
      { n: 105, f: 'After pollination: how is a seed formed, and what do the ovule and ovary become?', b: 'A pollen tube grows down the style into the ovule; the male nucleus fuses with the female nucleus, forming a zygote, then an embryo. The ovule becomes the seed; the ovary becomes the fruit.' },
      { n: 106, f: 'Conditions needed for germination, and why', b: 'Water: activates enzymes, the seed swells and the coat splits. Oxygen: for aerobic respiration to release energy. A suitable temperature: enzymes work at a useful rate. Light is not usually needed.' },
      { n: 107, f: 'Why does the dry mass of a germinating seed fall, then rise?', b: 'It falls because stored food is broken down and respired, and there are no leaves yet to photosynthesise. It rises once the leaves photosynthesise faster than the seedling respires.' },
      { n: 108, f: 'Runners vs cuttings', b: 'Runners (natural, e.g. strawberry): side stems along the soil grow roots and form new plants.\nCuttings (artificial): cut below a node, remove lower leaves to reduce transpiration, use rooting powder.\nBoth give clones of the parent.' },
      { n: 109, f: 'Functions of the oviduct, uterus and cervix', b: 'Oviduct: cilia move the egg; site of fertilisation.\nUterus: lining for implantation; muscular wall for birth.\nCervix: ring of muscle that keeps the fetus in and widens at birth.' },
      { n: 110, f: 'Oestrogen vs progesterone in the menstrual cycle', b: 'Both made in the ovary. Oestrogen repairs and thickens the uterus lining (about days 5–14). Progesterone (from the corpus luteum) maintains the lining (days 14–28); when it falls, menstruation follows.' },
      { n: 111, f: 'FSH and LH: where made and what they do', b: 'Both from the pituitary gland. FSH makes an egg mature in a follicle and stimulates oestrogen production. An LH surge triggers ovulation (about day 14). Oestrogen inhibits FSH and stimulates LH; progesterone inhibits both. (Paper 2 only)' },
      { n: 112, f: 'What crosses the placenta, and what does amniotic fluid do?', b: 'Mother → embryo: glucose, amino acids, fatty acids, minerals, vitamins, water, oxygen. Embryo → mother: carbon dioxide, urea. The bloods do not mix.\nAmniotic fluid cushions and supports the embryo against knocks.' },
    ]),
    ...sub(T3, 'inheritance-4bi1', 'b', [
      { n: 101, f: 'Genome, gene and chromosome', b: 'Genome: the entire DNA of an organism.\nGene: a section of a DNA molecule that codes for a specific protein.\nChromosome: a structure in the nucleus on which genes are located.' },
      { n: 102, f: 'Gene vs allele', b: 'A gene codes for a protein; an allele is one version (an alternative form) of that gene.', src: INH },
      { n: 103, f: 'Genotype vs phenotype', b: 'Genotype: the alleles an organism has (e.g. Hh). Phenotype: the characteristic shown (e.g. tall).', src: INH },
      { n: 104, f: 'Dominant, recessive, homozygous, heterozygous', b: 'Dominant: expressed even with one copy. Recessive: expressed only with two copies (no dominant allele).\nHomozygous: two identical alleles (HH or hh). Heterozygous: two different alleles (Hh).' },
      { n: 105, f: 'DNA vs RNA', b: 'DNA: two strands coiled into a double helix; bases A, T, C, G (A–T, C–G).\nRNA: one strand; bases A, U, C, G (U replaces T). (Paper 2 only)' },
      { n: 106, f: 'Protein synthesis: transcription and translation', b: 'Transcription (nucleus): a complementary mRNA strand is made on one DNA strand. mRNA goes to a ribosome. Translation: the ribosome reads codons (three bases each); tRNA anticodons pair with them, bringing amino acids that are joined in order. (Paper 2 only)' },
      { n: 107, f: 'Codominance, and the ratio from two heterozygotes', b: 'Both alleles in a heterozygote are expressed in the phenotype. A cross of two heterozygotes gives a 1 : 2 : 1 phenotype ratio. (Paper 2 only)' },
      { n: 108, f: 'Hh × Hh: offspring ratio, and probability of a recessive offspring', b: 'Genotypes 1 HH : 2 Hh : 1 hh, so 3 dominant : 1 recessive (a ratio). Probability of a recessive offspring = 1/4 (0.25, 25%). Each fertilisation is independent.', src: INH },
      { n: 109, f: 'How can you find whether a dominant-phenotype organism is HH or Hh?', b: 'Cross it with a homozygous recessive (hh). Any recessive offspring shows it is Hh. All dominant offspring in a large sample suggests HH.' },
      { n: 110, f: 'How is sex determined in humans?', b: 'Females XX, males XY. All eggs carry X; half the sperm carry X and half Y, so the sperm decides the sex. Probability of a boy (or a girl) = 1/2 at every fertilisation.' },
      { n: 111, f: 'Mitosis vs meiosis', b: 'Mitosis: 2 genetically identical diploid cells; for growth, repair, cloning and asexual reproduction.\nMeiosis: 4 genetically different haploid cells; makes gametes. Humans: diploid 46, haploid 23.', src: INH },
      { n: 112, f: 'Natural selection: the sequence of steps', b: 'Variation (from mutation) → competition → the better-adapted survive → they reproduce → their alleles are passed on → the allele frequency increases over many generations. Example: antibiotic-resistant bacteria.' },
    ]),

    // 4 Ecology and the environment
    ...topicOnly(T4, '4', [
      { n: 1, f: 'Population, community and ecosystem', b: 'Population: all the organisms of one species in an area.\nCommunity: all the populations of different species in an area.\nEcosystem: a community and its abiotic environment, interacting.', src: ECO },
      { n: 2, f: 'Estimating a population with quadrats: a mean of 2.5 plants per 1 m² quadrat in a 400 m² field', b: 'Place quadrats at random (coordinates from random numbers), at least ten; find the mean per m². Population = 2.5 × 400 = 1000 plants.' },
      { n: 3, f: 'Distribution vs biodiversity: how to sample each', b: 'Distribution: quadrats at regular intervals along a tape running across a change in conditions.\nBiodiversity: quadrats at random in each area, recording every species and how many of each. (Paper 2 only)', src: ECO },
      { n: 4, f: 'Abiotic vs biotic factors: examples', b: 'Abiotic (non-living): temperature, light intensity, water, pH, soil minerals, oxygen in water, wind.\nBiotic (living): food supply, predation, competition, disease, parasites.' },
      { n: 5, f: 'Pyramids of numbers, biomass and energy: which is always a true pyramid?', b: 'The pyramid of energy is always a pyramid. Biomass almost always is. Numbers can be any shape (one tree, many insects).' },
      { n: 6, f: 'Primary consumers receive 5000 kJ and pass 450 kJ on. Efficiency, and where the rest goes?', b: '(450 ÷ 5000) × 100 = 9.0%. The rest is lost mainly as heat from respiration, and in parts not eaten, faeces, excretion and movement.' },
      { n: 7, f: 'Processes in the carbon cycle that remove and return CO₂', b: 'Removed: photosynthesis.\nReturned: respiration by plants, animals and decomposers; combustion of fossil fuels and wood. Carbon passes along food chains by feeding.' },
      { n: 8, f: 'Roles of nitrogen-fixing, nitrifying and denitrifying bacteria', b: 'Nitrogen-fixing (soil, legume root nodules): nitrogen gas → nitrogen compounds.\nNitrifying (need oxygen): ammonium → nitrite → nitrate.\nDenitrifying (waterlogged soil): nitrate → nitrogen gas. (Paper 2 only)' },
      { n: 9, f: 'Sulfur dioxide and carbon monoxide: source and effect', b: 'Sulfur dioxide: burning fossil fuels containing sulfur; acid rain damages leaves, kills trees and acidifies lakes.\nCarbon monoxide: incomplete combustion; binds to haemoglobin, so less oxygen is carried.' },
      { n: 10, f: 'The five greenhouse gases in the specification, and the enhanced greenhouse effect', b: 'Water vapour, carbon dioxide, nitrous oxide, methane, CFCs. Extra gases from human activity absorb and re-radiate more infrared back towards the Earth, which may lead to global warming.' },
      { n: 11, f: 'Eutrophication: the sequence', b: 'Nitrates and phosphates from fertiliser leach into water → algal bloom → plants below die (no light) → decomposing bacteria multiply and respire aerobically → oxygen falls → fish and aerobic invertebrates die.' },
      { n: 12, f: 'Effects of deforestation on soil and the atmosphere', b: 'Leaching of mineral ions; soil erosion (no roots to hold soil); less evapotranspiration, so less rain; less CO₂ absorbed and more released by burning or decay; less oxygen released. (Paper 2 only)', src: ECO },
    ]),

    // 5 Use of biological resources
    ...topicOnly(T5, '5', [
      { n: 1, f: 'How do glasshouses increase crop yield?', b: 'They let light in and trap heat, protect crops from frost, wind and some pests, and allow control of temperature, CO₂ and water. Burning paraffin or gas supplies both heat and CO₂.' },
      { n: 2, f: 'Why does adding more CO₂ to a glasshouse eventually stop increasing yield?', b: 'Another factor, such as light intensity or temperature, becomes limiting. Too high a temperature also denatures photosynthesis enzymes.' },
      { n: 3, f: 'Pesticides vs biological control', b: 'Pesticides: fast and kill most pests, but kill non-target species, build up along food chains, and pests become resistant.\nBiological control: specific, no residues, no resistance, but slow, does not remove all pests, and the control organism may become a pest.' },
      { n: 4, f: 'How does yeast make bread rise?', b: 'Yeast respires anaerobically: glucose → ethanol + carbon dioxide. Bubbles of CO₂ make the dough rise. Baking kills the yeast and evaporates the ethanol.' },
      { n: 5, f: 'Making yoghurt', b: 'Pasteurise milk to kill unwanted bacteria and cool it; add Lactobacillus; incubate warm. The bacteria ferment lactose to lactic acid; the pH falls, milk proteins clot and the yoghurt thickens and tastes sour.' },
      { n: 6, f: 'Conditions controlled in an industrial fermenter, and why', b: 'Aseptic (steam, filtered air): no contaminants. Nutrients: for respiration and growth. Temperature (water jacket): respiration releases heat; keep enzymes at the optimum. pH: optimum for enzymes. Oxygen: aerobic respiration. Paddles: mix evenly.' },
      { n: 7, f: 'How are fish farms managed to increase yield?', b: 'Keep water quality and oxygen high; separate fish by size (intraspecific predation) and keep one species (interspecific predation); control disease and density; remove waste; high-protein food little and often; selective breeding. (Paper 2 only)' },
      { n: 8, f: 'Selective breeding: the steps', b: 'Choose parents with the desired characteristic; cross them; select the offspring showing it most strongly; cross these; repeat for many generations.' },
      { n: 9, f: 'Transgenic', b: 'Genetic material has been transferred from one species to a different species.', src: USE },
      { n: 10, f: 'Restriction enzyme, ligase and vector', b: 'Restriction enzyme: cuts DNA at a specific base sequence, leaving sticky ends.\nLigase: joins pieces of DNA.\nVector: a plasmid or virus that carries DNA into a cell.', src: USE },
      { n: 11, f: 'Producing human insulin with bacteria', b: 'Cut the insulin gene out with a restriction enzyme; cut a plasmid with the same enzyme (matching sticky ends); join with ligase to make recombinant DNA; insert into bacteria; grow them in a fermenter; extract and purify the insulin.' },
      { n: 12, f: 'Cloning Dolly the sheep: which sheep is the clone identical to?', b: 'A diploid body-cell nucleus from sheep A goes into an egg from sheep B whose nucleus was removed; an electric shock makes it divide; the embryo is implanted in surrogate C. The lamb is a clone of sheep A, the nucleus donor. (Paper 2 only)' },
    ]),
  ],
};
