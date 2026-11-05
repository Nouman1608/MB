/**
 * D-438 -- flashcards for OCR GCSE (9-1) Gateway Science Suite Biology A J247
 * (Version 4.0, August 2026, for first assessment in 2018).
 *
 * Topics B1-B6 are itemised into sub-topics (B1.1 ... B6.3), so ids are
 * `<sub-topic number>-<n>`, e.g. 'B1.1-1'. Topic B7 (Practical skills)
 * itemises no sub-topics in the syllabus record, so its cards sit on the topic
 * and ids are `7-<n>`. Ids are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 *   u: true     Upper tier: statements printed in bold in the specification
 *               (Higher Tier only), following the "Higher Tier only" labels on
 *               Marlbridge's own J247 revision notes. Foundation candidates can
 *               hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs J247); origin 'revision-notes'.
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

/** For a topic that itemises no subtopics: the card sits on the topic alone. */
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

const B1 = 'cell-level-systems-ocr-gcse-biology';
const B2 = 'scaling-up-ocr-gcse-biology';
const B3 = 'organism-level-systems-ocr-gcse-biology';
const B4 = 'community-level-systems-ocr-gcse-biology';
const B5 = 'genes-inheritance-and-selection-ocr-gcse-biology';
const B6 = 'global-challenges-ocr-gcse-biology';
const B7 = 'practical-skills-ocr-gcse-biology';

const R = (slug: string) => `ocr-gcse-biology-${slug}-revision-notes`;
const MIC = R('microscopy-eukaryotic-and-prokaryotic-cells-and');
const DNA = R('dna-structure-protein-synthesis-and-enzyme-action');
const RESP = R('respiration-and-the-synthesis-and-breakdown-of');
const PHOTO = R('photosynthesis-process-investigation-and-limiting');
const TAM = R('transport-across-membranes-mitosis-and-stem-cells');
const ESC = R('exchange-surfaces-and-the-human-circulatory-system');
const TIP = R('transport-in-plants-water-uptake-transpiration-and');
const NERV = R('nervous-system-coordinated-responses-and-reflex-arcs');
const EYE = R('the-eye-eye-defects-the-brain-and-limits-of-treatment');
const ENDO = R('the-endocrine-system-thyroxine-adrenaline-and-the');
const HORM = R('hormones-in-contraception-and-fertility-treatment-and');
const HOMEO = R('homeostasis-temperature-control-and-blood-glucose');
const OSMO = R('osmoregulation-water-balance-the-kidney-and-adh');
const CYC = R('material-cycling-and-decomposition-in-ecosystems');
const ECOS = R('ecosystem-organisation-abiotic-and-biotic-factors');
const GEN = R('genome-alleles-variants-and-mutations');
const REPRO = R('sexual-and-asexual-reproduction-haploid-and-diploid');
const CROSS = R('single-gene-inheritance-genetic-crosses-sex');
const NATSEL = R('variation-natural-selection-evolution-and');
const FIELD = R('field-investigations-biodiversity-and-human-impact-on');
const FOOD = R('food-security-agricultural-solutions-and-selective');
const GE = R('genetic-engineering-and-biotechnology-in-food');
const DIS = R('health-disease-types-and-the-spread-and-prevention-of');
const WBC = R('white-blood-cells-the-immune-system-and-vaccination');
const MAB = R('monoclonal-antibodies-aseptic-technique-and-drug');
const STEM = R('stem-cells-gene-technology-and-genomics-in-medicine');
const WS = R('working-scientifically-planning-recording-presenting');

export const DECK_OCR_GCSE_BIOLOGY: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'gcse',
  subjectSlug: 'biology',
  syllabusCode: 'J247',
  syllabusSeries: 'Version 4.0 (August 2026), for first assessment in 2018',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // B1 Cell level systems
    ...sub(B1, 'cell-structures-ocr-gcse-biology', 'B1.1', [
      { n: 1, f: 'Total magnification of a light microscope with a ×10 eyepiece and a ×40 objective', b: 'Total magnification = eyepiece × objective = 10 × 40 = ×400.' },
      { n: 2, f: 'Why are cells stained for light microscopy? Give two stains.', b: 'Cells are mostly colourless, so a stain makes structures visible or colours different structures differently. Methylene blue for cheek cells; iodine solution for onion epidermis.' },
      { n: 3, f: 'Preparing and viewing a slide: the key steps', b: 'Thin layer of cells in a drop of liquid; add stain; lower a cover slip at an angle to avoid air bubbles; start with the lowest-power objective; coarse then fine focus; then higher power.' },
      { n: 4, f: 'An image is 45 mm long and the real length is 15 µm. Magnification?', b: 'magnification = image size ÷ actual size. 45 mm = 45 000 µm, so 45 000 ÷ 15 = ×3000.' },
      { n: 5, f: 'An image is 24 mm long at ×400. Actual size in µm?', b: 'Actual size = image ÷ magnification = 24 ÷ 400 = 0.06 mm = 60 µm.' },
      { n: 6, f: 'Functions of the nucleus, mitochondria, chloroplasts and ribosomes', b: 'Nucleus: contains the genetic material (chromosomes) and controls the cell. Mitochondria: enzymes for cellular respiration. Chloroplasts: chlorophyll for photosynthesis. Ribosomes: protein synthesis.', src: MIC },
      { n: 7, f: 'Cell membrane and plasmids: what each is or does', b: 'Cell membrane: a selective barrier with receptor molecules that detect chemical signals.\nPlasmids: small rings of extra DNA in bacteria, carrying genes such as antibiotic resistance.', src: MIC },
      { n: 8, f: 'Eukaryotic vs prokaryotic cells', b: 'Eukaryotic: nucleus, several linear chromosomes, mitochondria, larger.\nProkaryotic: no nucleus (one circular chromosome free in the cytoplasm, plus plasmids), no mitochondria or chloroplasts, much smaller. Both have ribosomes.' },
      { n: 9, f: 'Transmission electron microscope (TEM) vs light microscope', b: 'The TEM uses a beam of electrons and has much higher resolution, so it shows ribosomes and the inside of organelles. But specimens must be dead, thin and treated, images are black and white, and it is expensive. The light microscope resolves only to about 200 nm.' },
      { n: 10, f: 'Magnification vs resolution', b: 'Magnification is how many times bigger the image is. Resolution is the ability to see two close points as separate, which decides how much fine detail is visible.' },
      { n: 11, f: 'Write 0.0000048 m in standard form', b: '4.8 × 10⁻⁶ m. The number in front must be at least 1 and less than 10; tiny lengths have negative powers.' },
    ]),
    ...sub(B1, 'what-happens-in-cells-ocr-gcse-biology', 'B1.2', [
      { n: 1, f: 'Structure of DNA', b: 'A polymer made of nucleotides. Two strands form a double helix: sugar and phosphate form the outside of each strand, and the bases pair in the middle.' },
      { n: 2, f: 'Nucleotide', b: 'The monomer of DNA: a sugar, a phosphate group and one of four bases (A, T, G or C).', src: DNA },
      { n: 3, f: 'Complementary base pairs, and the strand paired with GGATC', b: 'A pairs with T, and G with C. GGATC pairs with CCTAG.', src: DNA },
      { n: 4, f: 'A DNA sample is 35% thymine. Percentage of cytosine?', b: 'Adenine = 35%, so A + T = 70%. The remaining 30% is split equally, so 15% guanine and 15% cytosine.' },
      { n: 5, f: 'Protein synthesis: transcription and translation', b: 'Transcription: DNA unzips around the gene and an mRNA copy is made in the nucleus. The mRNA moves to the cytoplasm. Translation: at a ribosome the mRNA is read and tRNA brings amino acids, which join in order; the chain folds into the protein.', u: true },
      { n: 6, f: 'A DNA template strand reads CAT TGC. What is the mRNA?', b: 'GUA ACG. RNA uses U instead of T, so A on the template pairs with U.', u: true },
      { n: 7, f: 'How can a change in DNA base sequence change an enzyme?', b: 'Base sequence → triplets → order of amino acids. A different order folds into a different shape, so the active site may change and the substrate no longer fits. Some base changes give the same amino acid and have no effect.', u: true },
      { n: 8, f: 'Active site, and the lock and key model', b: 'The active site is the part of the enzyme with a specific shape that the substrate fits into. The substrate shape matches the active site, so each enzyme is specific.', src: DNA },
      { n: 9, f: 'Denatured', b: 'The enzyme\'s shape, including the active site, is permanently altered (by high temperature or extreme pH), so it cannot work. Cold only slows an enzyme, reversibly.', src: DNA },
      { n: 10, f: 'Effect of temperature, pH and substrate concentration on enzyme rate', b: 'Temperature: rate rises to an optimum, then falls to zero as the enzyme denatures.\npH: fastest at the optimum, slower either side.\nSubstrate concentration: rises then levels off when all active sites are occupied.' },
      { n: 11, f: 'Catalase makes 45 cm³ of oxygen in 90 s. Rate?', b: 'Rate = amount ÷ time = 45 ÷ 90 = 0.50 cm³/s. If only a time is measured, 1 ÷ time is a measure of rate.' },
    ]),
    ...sub(B1, 'respiration-ocr-gcse-biology', 'B1.3', [
      { n: 1, f: 'Cellular respiration', b: 'A chemical process in all living cells that transfers energy from fuels such as glucose to make ATP. It happens all the time, in plants too, and is enzyme-controlled.', src: RESP },
      { n: 2, f: 'ATP, and what cells use it for', b: 'A small molecule that carries energy to where the cell needs it; made from ADP and phosphate. Used for building molecules, muscle contraction, active transport, cell division and nerve impulses.', src: RESP },
      { n: 3, f: 'Why is respiration described as exothermic?', b: 'It transfers energy to the surroundings: some energy is captured in ATP and the rest is released as heat.' },
      { n: 4, f: 'Aerobic respiration vs anaerobic respiration in animals and in plants and fungi', b: 'Aerobic: glucose + oxygen → carbon dioxide + water.\nAnimals: glucose → lactic acid.\nPlants and fungi (yeast): glucose → ethanol + carbon dioxide.' },
      { n: 5, f: 'Why does anaerobic respiration give much less ATP per glucose?', b: 'Glucose is only partly broken down, so energy is left in the lactic acid or ethanol. Anaerobic respiration gives 2 ATP per glucose, far less than aerobic.' },
      { n: 6, f: 'Fermentation', b: 'Anaerobic respiration by yeast, producing ethanol and carbon dioxide. Brewing uses the ethanol; baking uses the carbon dioxide.', src: RESP },
      { n: 7, f: 'Investigating yeast respiration: method', b: 'Yeast in glucose solution (boiled, cooled glucose under oil for anaerobic); collect gas in a gas syringe; change one variable such as temperature; keep yeast mass and glucose volume and strength the same; rate = volume ÷ time; repeat.' },
      { n: 8, f: 'Monomers of carbohydrates, proteins and lipids, and the enzymes that break them down', b: 'Carbohydrates: sugars (glucose); carbohydrase.\nProteins: amino acids; protease.\nLipids: 1 glycerol + 3 fatty acids; lipase. Lipids are not true polymers.' },
      { n: 9, f: 'Condensation vs hydrolysis', b: 'Condensation joins two molecules with the loss of a water molecule. Hydrolysis splits a bond by adding water, which is what digestive enzymes do.', src: RESP },
      { n: 10, f: 'How many water molecules are released making a starch chain of 300 glucose units?', b: '299. A chain of n monomers has n − 1 joins.' },
      { n: 11, f: 'Food tests for starch, reducing sugar, protein and lipid', b: 'Starch: iodine, orange-brown → blue-black.\nReducing sugar: Benedict\'s in a hot water bath, blue → green, yellow, orange, brick red.\nProtein: biuret, blue → purple.\nLipid: ethanol then water, cloudy white emulsion.' },
    ]),
    ...sub(B1, 'photosynthesis-ocr-gcse-biology', 'B1.4', [
      { n: 1, f: 'Photosynthesis: word and balanced symbol equations', b: 'carbon dioxide + water → glucose + oxygen (light)\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\nLight is absorbed by chlorophyll in the chloroplasts.' },
      { n: 2, f: 'Why is photosynthesis endothermic?', b: 'It takes in energy (light) from the surroundings and stores it as chemical energy in glucose.' },
      { n: 3, f: 'The two stages of photosynthesis', b: 'Stage one needs light: water is split, oxygen is released and hydrogen is made available. Stage two: the hydrogen is used to fix carbon dioxide into glucose.' },
      { n: 4, f: 'Why are photosynthetic organisms called producers?', b: 'They make organic compounds from carbon dioxide and water using light energy. They are the main producers of food and biomass, so all consumers depend on them for food, energy and carbon.' },
      { n: 5, f: 'Light exclusion experiment with a geranium leaf', b: 'Destarch for 24–48 h in the dark; cover part of a leaf with foil and leave in light; boil the leaf, then warm in ethanol in a water bath to remove chlorophyll; add iodine. Exposed part blue-black, covered part orange-brown.' },
      { n: 6, f: 'Investigating rate with Cabomba (pondweed)', b: 'Stem cut under water in sodium hydrogencarbonate solution; lamp at measured distances with a water heat shield; let it settle; count bubbles or measure gas volume in a fixed time. Gas volume is more reliable than bubble counts.' },
      { n: 7, f: 'Algae in alginate beads in hydrogencarbonate indicator: what do the colours show?', b: 'Red: normal CO₂. Purple: less CO₂ (photosynthesis faster). Yellow: more CO₂ (respiration only, in the dark).' },
      { n: 8, f: 'Effect of light intensity, CO₂ and temperature on the rate of photosynthesis', b: 'Light intensity and CO₂ concentration: rate rises, then levels off when another factor limits.\nTemperature: rate rises to an optimum, then falls fast as enzymes denature.' },
      { n: 9, f: 'Inverse square law: a lamp moves from 60 cm to 30 cm. Effect on light intensity?', b: 'Light intensity ∝ 1/distance². (60 ÷ 30)² = 4, so the intensity is 4 times greater. Moving from 10 cm to 30 cm gives 1/9 of the intensity.' },
      { n: 10, f: 'Two curves at different CO₂ levels overlap at low light but separate at high light. What does it show?', b: 'Where the curves overlap, light intensity is limiting. Where the lower curve has flattened but the higher one keeps rising, CO₂ is limiting the lower curve. If the higher curve also flattens, a third factor (often temperature) limits it.', u: true },
      { n: 11, f: 'What did Priestley and Ingenhousz show?', b: 'Priestley: a plant restored air in which a candle had stopped burning. Ingenhousz: light was needed, and the green parts released the gas.' },
    ]),

    // B2 Scaling up
    ...sub(B2, 'supplying-the-cell-ocr-gcse-biology', 'B2.1', [
      { n: 1, f: 'Diffusion', b: 'Net movement of particles from more to less concentrated, down a concentration gradient. Passive.', src: TAM },
      { n: 2, f: 'Osmosis', b: 'Net movement of water across a partially permeable membrane from higher water potential to lower water potential. Passive.', src: TAM },
      { n: 3, f: 'Active transport', b: 'Movement of particles from lower to higher concentration, against the gradient, using energy from respiration.', src: TAM },
      { n: 4, f: 'Water potential', b: 'A measure of how freely water can move. Pure water has the highest; more solute lowers it. Water moves from higher to lower water potential.', src: TAM },
      { n: 5, f: 'An animal cell and a plant cell are put in a solution with a lower water potential than the cell. What happens?', b: 'Both lose water by osmosis. The animal cell shrinks. The plant cell becomes flaccid and its membrane pulls away from the wall. (In a more dilute solution the animal cell may burst; the plant cell becomes turgid.)' },
      { n: 6, f: 'A potato chip goes from 2.50 g to 2.75 g. Percentage change?', b: '(2.75 − 2.50) ÷ 2.50 × 100 = +10.0%. Always divide by the initial mass.' },
      { n: 7, f: 'The cell cycle in order', b: 'Cell growth (more ribosomes, mitochondria), DNA replication, more cell growth, movement of chromosomes (mitosis), then division of the cytoplasm to give two genetically identical cells.' },
      { n: 8, f: 'A cell has 12 chromosomes. How many chromatids after replication, and chromosomes in each daughter cell?', b: 'After replication: 12 chromosomes, each of two chromatids (24 chromatids). Each daughter cell: 12 chromosomes.' },
      { n: 9, f: '200 cells are counted in a root tip and 18 are in mitosis. Percentage?', b: '18 ÷ 200 × 100 = 9.0%. A high percentage means rapid growth.' },
      { n: 10, f: 'Why does differentiation help a multicellular organism? Give two specialised cells.', b: 'Specialised cells each do one job efficiently, so the organism works better.\nRed blood cell: biconcave, no nucleus, haemoglobin, to carry oxygen.\nPalisade cell: many chloroplasts for photosynthesis.' },
      { n: 11, f: 'Embryonic stem cells, adult stem cells and meristems', b: 'Embryonic (early embryo): can become any cell type.\nAdult (e.g. bone marrow): a limited range; repair and replacement, making blood cells.\nMeristems (root and shoot tips): divide throughout the plant\'s life, forming tissues such as xylem and phloem.' },
      { n: 12, f: 'Why does a root hair cell need many mitochondria to take up nitrate?', b: 'Nitrate is often less concentrated in the soil than in the cell, so it is moved in by active transport, using carrier proteins and energy from respiration in the mitochondria.' },
    ]),
    ...sub(B2, 'the-challenges-of-size-ocr-gcse-biology', 'B2.2', [
      { n: 1, f: 'Why does a large organism need exchange surfaces and a transport system?', b: 'As size increases, volume rises faster than surface area, so SA : V falls. The distance to inner cells is long and diffusion alone is too slow, so it needs a large, thin exchange surface and a transport system.' },
      { n: 2, f: 'Surface area to volume ratio of a cube of side 10 mm', b: 'SA = 6 × 10² = 600 mm²; V = 10³ = 1000 mm³; ratio = 0.6 : 1. Doubling the side halves the ratio.' },
      { n: 3, f: 'Double circulation, and why mammals have one', b: 'Blood goes heart → lungs → heart, then heart → body → heart. Blood loses pressure in the lung capillaries, so it returns to be pumped hard again to the body; the lungs get lower pressure, which protects their fragile capillaries.' },
      { n: 4, f: 'Heart valves: names and positions', b: 'Tricuspid (right) and bicuspid (left) valves lie between the atria and ventricles. Semilunar valves are at the exits into the aorta and pulmonary artery. All stop backflow.', src: ESC },
      { n: 5, f: 'Arteries, veins and capillaries: structure linked to function', b: 'Artery: thick wall with muscle and elastic fibres, narrow lumen; stretches and recoils under high pressure.\nVein: thin wall, wide lumen, valves for low pressure.\nCapillary: one cell thick, for a short diffusion distance.' },
      { n: 6, f: 'Why does blood flow slowly in capillaries?', b: 'The total cross-sectional area of all the capillaries is far larger than that of the aorta, so flow is slow and there is time for diffusion. Narrow width alone is not the reason.' },
      { n: 7, f: 'Red blood cell adaptations, and what plasma carries', b: 'Biconcave disc (large surface area, flexible); no nucleus (more haemoglobin); haemoglobin picks up oxygen in the lungs and gives it up in tissues.\nPlasma carries dissolved CO₂, glucose, amino acids, mineral ions, urea and hormones.' },
      { n: 8, f: 'How do water and mineral ions enter a root hair cell?', b: 'Water: by osmosis from the dilute soil water. Mineral ions: mostly by active transport, against the gradient. The long thin hair gives a large surface area.' },
      { n: 9, f: 'Transpiration, in order', b: 'Water evaporates from mesophyll cell surfaces into the leaf air spaces; water vapour diffuses out through open stomata; water is pulled up the xylem to replace it (the transpiration stream), carrying mineral ions.' },
      { n: 10, f: 'Xylem vs phloem', b: 'Xylem: water and mineral ions, upwards only; dead hollow cells, no end walls, lignin.\nPhloem: dissolved sugars, both ways (translocation, from sources to sinks); living sieve tubes with perforated end walls and companion cells.', src: TIP },
      { n: 11, f: 'Effect of light, temperature, air movement and humidity on the rate of transpiration', b: 'Light up: rate up (stomata open wider). Temperature up: rate up (faster evaporation and diffusion). Air movement up: rate up (vapour swept away, gradient kept steep). Humidity up: rate down (smaller gradient).' },
      { n: 12, f: 'A potometer bubble moves 63 mm in 7.0 min in a capillary of radius 0.40 mm. Volume of water taken up per minute?', b: 'Rate = 63 ÷ 7.0 = 9.0 mm per minute. Area = π × 0.40² = 0.503 mm². Volume = 9.0 × 0.503 = 4.5 mm³ per minute. A potometer measures uptake, which approximates transpiration.' },
    ]),

    // B3 Organism level systems
    ...sub(B3, 'coordination-and-control-the-nervous-system-ocr-gcse-biology', 'B3.1', [
      { n: 1, f: 'The pathway of a nervous response', b: 'Stimulus → receptor → sensory neurone → CNS (brain and spinal cord) → motor neurone → effector (muscle or gland) → response.' },
      { n: 2, f: 'How is a neurone adapted to carry impulses?', b: 'A long axon carries impulses over long distances; the myelin sheath insulates it and speeds up the impulse; branched endings pass the signal on.' },
      { n: 3, f: 'What happens at a synapse, and why is it one-way?', b: 'The impulse reaches the end of a neurone; a transmitter chemical is released, diffuses across the gap and binds to receptors on the next neurone, starting a new impulse. Receptors are only on the receiving side.', src: NERV },
      { n: 4, f: 'Why is a reflex faster than a voluntary response?', b: 'It has a short pathway with few neurones and synapses (receptor, sensory, relay, motor, effector) and needs no conscious decision. Reflexes protect the body from harm.' },
      { n: 5, f: 'A ruler is caught after falling 22 cm. Reaction time? (t = √(2d/g), g = 9.8 m/s²)', b: 'd = 0.22 m. t = √(2 × 0.22 ÷ 9.8) = √0.0449 = 0.21 s.' },
      { n: 6, f: 'Functions of the cornea, iris, lens and retina', b: 'Cornea: transparent front; refracts light and does most of the focusing. Iris: muscle that changes pupil size. Lens: fine focusing onto the retina. Retina: rods (dim light) and cones (colour) change light into impulses.', src: EYE },
      { n: 7, f: 'The iris reflex in bright light and in dim light', b: 'Bright: circular muscles contract, radial muscles relax, pupil smaller.\nDim: circular muscles relax, radial muscles contract, pupil larger.' },
      { n: 8, f: 'Accommodation: focusing on a near object vs a distant object', b: 'Near: ciliary muscle contracts (shortens), tension in suspensory ligaments low, lens fatter, light bent more.\nDistant: ciliary muscle relaxes, ligaments taut, lens slimmer, light bent less.' },
      { n: 9, f: 'Short-sightedness vs long-sightedness: cause and correction', b: 'Short-sight: eyeball too long or lens too strong; focus in front of the retina; concave lens.\nLong-sight: eyeball too short or lens too weak; focus behind the retina; convex lens. Laser surgery can also be used.' },
      { n: 10, f: 'Functions of the cerebrum, cerebellum, medulla, hypothalamus and pituitary', b: 'Cerebrum: conscious thought, memory, language, voluntary movement. Cerebellum: coordination and balance. Medulla: unconscious actions such as heart and breathing rate. Hypothalamus: body temperature and water balance. Pituitary: releases hormones.', src: EYE },
      { n: 11, f: 'Why is brain function difficult to investigate?', b: 'The brain is delicate and inside the skull, so it cannot be examined safely while working. Case studies rely on rare, different injuries (small samples); other areas may compensate; and there are ethical limits on consent and harm.', u: true },
      { n: 12, f: 'Why is damage to the nervous system hard to treat?', b: 'Damaged neurones in the brain and spinal cord are not readily replaced; surgery or radiation can harm healthy tissue around the damage; and the skull and backbone make deep parts hard and risky to reach.', u: true },
    ]),
    ...sub(B3, 'coordination-and-control-the-endocrine-system-ocr-gcse-biology', 'B3.2', [
      { n: 1, f: 'Hormone, and why only some cells respond to it', b: 'A chemical messenger secreted by an endocrine gland directly into the blood, carried in the plasma to all parts of the body. Only target cells respond, because only they have receptors that fit that hormone.', src: ENDO },
      { n: 2, f: 'Which gland makes FSH and LH, thyroxine, adrenaline, oestrogen and progesterone, and testosterone?', b: 'Pituitary: FSH and LH. Thyroid: thyroxine. Adrenal glands: adrenaline. Ovaries: oestrogen and progesterone. Testes: testosterone.' },
      { n: 3, f: 'Thyroxine and negative feedback', b: 'Thyroxine (thyroid gland) controls metabolic rate. When its level falls, more is released; when it rises, less is released. The response reverses the change: negative feedback.', u: true },
      { n: 4, f: 'Effects of adrenaline', b: 'Released by the adrenal glands in fear or excitement ("fight or flight"): faster, stronger heartbeat, faster breathing, glucose released from the liver, more blood to the muscles, so muscles get more oxygen and glucose.', u: true },
      { n: 5, f: 'Roles of FSH, oestrogen and progesterone in the menstrual cycle', b: 'FSH (pituitary): an egg matures in the ovary, and the ovary makes oestrogen.\nOestrogen: thickens the uterus lining.\nProgesterone (after ovulation): maintains the lining. Ovulation is at about day 14.' },
      { n: 6, f: 'How do FSH, oestrogen, LH and progesterone interact?', b: 'FSH matures an egg and stimulates oestrogen. Oestrogen inhibits FSH and stimulates an LH surge, which triggers ovulation. The empty follicle makes progesterone, which keeps the lining thick and inhibits FSH and LH.', u: true },
      { n: 7, f: 'How do the combined pill and progesterone-only methods prevent pregnancy?', b: 'Combined pill (oestrogen and progesterone): inhibits FSH, so no egg matures or is released.\nProgesterone-only methods: thicken cervical mucus so sperm cannot reach the egg, and may stop ovulation.', src: HORM },
      { n: 8, f: 'Non-hormonal contraception, and which method protects against infection', b: 'Condoms, diaphragm or cap, copper coil (IUD), natural family planning, sterilisation, abstinence. Only condoms give some protection from infection.' },
      { n: 9, f: 'IVF in steps', b: 'FSH and LH are given so several eggs mature; eggs are collected; mixed with sperm in a dish; embryos grow for a few days; one or two are placed in the uterus. Drawbacks: cost, strain, not guaranteed, multiple births.', u: true },
      { n: 10, f: 'Auxin: why shoots grow up and roots grow down when laid on their side', b: 'Auxin collects on the lower side of both. In shoots it promotes elongation, so the lower side grows more and the shoot bends up. In roots high auxin inhibits elongation, so the root bends down.' },
      { n: 11, f: 'Effects of gibberellins and ethene', b: 'Gibberellins: stem growth, germination (enzymes break down stored food), can promote flowering.\nEthene (a gas): fruit ripening and shedding of leaves.', u: true },
      { n: 12, f: 'Commercial uses of auxin, ethene and gibberellins', b: 'Auxin: rooting powder; selective herbicides (synthetic auxin kills broad-leaved weeds, not grasses); seedless fruit.\nEthene: ripening fruit on demand.\nGibberellins: end dormancy; seedless fruit.', u: true },
    ]),
    ...sub(B3, 'maintaining-internal-environments-ocr-gcse-biology', 'B3.3', [
      { n: 1, f: 'Homeostasis, and why body temperature matters', b: 'Keeping the internal environment constant despite internal and external change. Metabolic reactions are enzyme-controlled: too cold and they are too slow; too hot and enzymes denature. Core temperature is kept near 37 °C.', src: HOMEO },
      { n: 2, f: 'Negative feedback in four steps', b: 'A receptor detects a change; a control centre (brain or pancreas) processes it; an effector responds; the response reverses the change, so the level returns towards normal.' },
      { n: 3, f: 'Responses when the body is too hot', b: 'Sweat glands release sweat, which evaporates and transfers energy from the skin. Arterioles to the skin widen (vasodilation), so more blood flows near the surface and more heat is transferred to the surroundings.' },
      { n: 4, f: 'Responses when the body is too cold', b: 'Shivering (rapid muscle contraction; respiration releases heat); vasoconstriction (arterioles to the skin narrow, less heat transferred); less sweat.' },
      { n: 5, f: 'How insulin lowers blood glucose after a meal', b: 'The pancreas detects the rise and secretes insulin into the blood. Target cells, mainly in the liver and muscles, take up glucose; the liver converts it to glycogen. Blood glucose falls and insulin release falls.' },
      { n: 6, f: 'Glucagon vs insulin', b: 'Glucagon is released by the pancreas when blood glucose is low; it acts on the liver, which converts glycogen to glucose and releases it, so blood glucose rises. Insulin and glucagon are an antagonistic pair.', u: true },
      { n: 7, f: 'Type 1 vs type 2 diabetes', b: 'Type 1: too little insulin made; treated with insulin injections or a pump (insulin is a protein, so a tablet would be digested).\nType 2: cells respond poorly to insulin; diet, exercise, weight loss, medicines. Obesity is a risk factor.' },
      { n: 8, f: 'What happens to an animal cell in a solution with a higher water potential than the cell?', b: 'Water enters by osmosis; the cell swells and may burst (lysis), because it has no cell wall. In a lower water potential it shrinks.', src: OSMO },
      { n: 9, f: 'The parts of a kidney tubule and their jobs', b: 'Bowman\'s capsule: filtration under pressure (water, glucose, urea, ions; no cells or proteins). Proximal convoluted tubule: selective reabsorption of all glucose, much water, many ions. Loop of Henlé: more water reabsorbed. Collecting duct: final water adjustment.' },
      { n: 10, f: 'Water gained is 2400 cm³ and water lost other than in urine is 1100 cm³. Urine volume for balance?', b: '2400 − 1100 = 1300 cm³. Water is gained from drinks, food and respiration, and lost in urine, sweat, breath and faeces.' },
      { n: 11, f: 'ADH negative feedback when the blood is too concentrated', b: 'Blood water potential falls; the hypothalamus detects it; the pituitary releases more ADH; the collecting duct becomes more permeable, so more water is reabsorbed; blood returns to normal; less ADH is released.', u: true },
      { n: 12, f: 'Responses to heavy sweating and to drinking too much water', b: 'Heavy sweating: blood more concentrated, so thirst, more ADH, a small volume of concentrated urine.\nDrinking too much: blood more dilute, so less ADH, a large volume of dilute urine.', u: true },
    ]),

    // B4 Community level systems
    ...sub(B4, 'ecosystems-ocr-gcse-biology', 'B4.1', [
      { n: 1, f: 'Population, community and ecosystem', b: 'Population: every individual of a single species in one area.\nCommunity: the populations of every species living together in one area.\nEcosystem: the community plus the non-living parts of the area.', src: ECOS },
      { n: 2, f: 'Abiotic vs biotic factors: examples', b: 'Abiotic (non-living): temperature, light intensity, moisture, soil pH.\nBiotic (caused by living organisms): predators, food supply, competition.' },
      { n: 3, f: 'Predation, mutualism and parasitism', b: 'Predation: predator gains, prey killed (ladybirds and aphids).\nMutualism: both gain (nitrogen-fixing bacteria in clover root nodules).\nParasitism: parasite gains, host harmed (tapeworm, flea).' },
      { n: 4, f: 'What do plants and animals compete for?', b: 'Plants: light, water, mineral ions, space.\nAnimals: food, water, shelter, territory, mates. Competition within a species is often stronger, because individuals need identical resources.' },
      { n: 5, f: 'Why does a pyramid of biomass narrow at each level?', b: 'Biomass is lost at each transfer: egestion (undigested material in faeces), excretion (urea, CO₂) and respiration (glucose broken down, carbon lost as CO₂).' },
      { n: 6, f: 'Producers make 450 kg of biomass; primary consumers gain 36 kg. Efficiency of transfer?', b: '36 ÷ 450 × 100 = 8%. The lower level is always the denominator. 92% is lost.' },
      { n: 7, f: 'Why are food chains usually only four or five levels long?', b: 'So much biomass is lost at each step that too little remains to support another level.' },
      { n: 8, f: 'How do decomposers break down dead material?', b: 'Bacteria and fungi secrete enzymes onto it; the enzymes break large insoluble molecules into small soluble ones; decomposers absorb them for growth and respiration, releasing CO₂ to the air and mineral ions to the soil.', src: CYC },
      { n: 9, f: 'Processes that move carbon in the carbon cycle', b: 'Photosynthesis takes CO₂ into producers; feeding passes carbon along food chains; respiration, decomposition and combustion return CO₂ to the air.' },
      { n: 10, f: 'The water cycle, in order', b: 'Evaporation (and transpiration) → condensation → precipitation → run-off and drainage → uptake by roots or drinking, then it repeats.' },
      { n: 11, f: 'Conditions for fastest decay, and why waterlogged soil slows it', b: 'Warm (up to the enzymes\' optimum), moist and plenty of oxygen. Waterlogged soil fills the air spaces, so oxygen is short; decay is slow and anaerobic microorganisms can produce methane (as in peat bogs).' },
      { n: 12, f: 'A 90 g sample of leaves falls to 54 g in 9 days. Percentage loss and rate of decay?', b: 'Mass lost = 36 g. Percentage loss = 36 ÷ 90 × 100 = 40%. Rate = 36 ÷ 9 = 4.0 g per day.' },
    ]),

    // B5 Genes, inheritance and selection
    ...sub(B5, 'inheritance-ocr-gcse-biology', 'B5.1', [
      { n: 1, f: 'Gene vs allele', b: 'A gene is a section of DNA that codes for a protein (the instruction); an allele is one version of it.', src: GEN },
      { n: 2, f: 'Genotype vs phenotype', b: 'Genotype: the alleles an organism has, e.g. Gg. Phenotype: the observable characteristic, e.g. green.', src: GEN },
      { n: 3, f: 'Homozygous vs heterozygous', b: 'GG and gg are homozygous (two identical alleles); Gg is heterozygous (two different alleles).', src: GEN },
      { n: 4, f: 'Genome vs gene', b: 'The genome is all of the genetic material of an organism, including non-coding DNA; genes are only part of it.', src: GEN },
      { n: 5, f: 'Continuous vs discontinuous variation', b: 'Discontinuous: separate categories (eye colour, ABO blood group); mostly one or a few genes; bar chart.\nContinuous: any value in a range (height, weight); many genes plus the environment; histogram.' },
      { n: 6, f: 'Mutation, and its usual effect on phenotype', b: 'A change in the DNA base sequence. Most have no effect on phenotype, some influence it, very few determine it. More likely with ionising radiation, UV light and some chemicals.' },
      { n: 7, f: 'How can a variant in coding DNA, or in non-coding DNA, change the phenotype?', b: 'Coding DNA: changes the order of amino acids, so the protein shape (e.g. an active site) and its activity.\nNon-coding DNA: changes how the gene is expressed (switched on or off), so more or less protein; the amino acid sequence is unchanged.', u: true },
      { n: 8, f: 'Advantages of asexual and of sexual reproduction', b: 'Asexual: one parent, quick, many offspring; good in a stable environment.\nSexual: variation, so some offspring are likely to survive a new disease or a changing environment.', src: REPRO },
      { n: 9, f: 'Haploid and diploid, and why gametes must be haploid', b: 'Diploid (2n): two sets of chromosomes, in body cells and the zygote (human 46). Haploid (n): one set, in gametes (human 23). Meiosis halves the number so fertilisation restores the diploid number.', src: REPRO },
      { n: 10, f: 'Two heterozygous plants are crossed and 200 seeds grow. Expected numbers?', b: 'Tt × Tt gives 1 TT : 2 Tt : 1 tt, a 3 : 1 phenotype ratio. 200 × 3/4 = 150 dominant and 200 × 1/4 = 50 recessive.' },
      { n: 11, f: 'How is sex determined in humans?', b: 'Females XX, males XY. All eggs carry X; sperm carry X or Y in equal numbers, so the sperm decides. Probability of a boy = 1/2 for every pregnancy.', src: CROSS },
      { n: 12, f: 'What did Mendel do, and why was his work not accepted at first?', b: 'In the 1860s he bred pea plants and counted offspring, finding separate inherited units and 3 : 1 ratios. Chromosomes and genes were not yet known, so there was no physical explanation, and his work was not widely read.' },
    ]),
    ...sub(B5, 'natural-selection-and-evolution-ocr-gcse-biology', 'B5.2', [
      { n: 1, f: 'Species', b: 'Organisms that can breed together to produce fertile offspring.', src: NATSEL },
      { n: 2, f: 'Sources of genetic variation', b: 'Mutation, meiosis (a random mix of alleles in gametes) and random fertilisation.' },
      { n: 3, f: 'Natural selection: the chain', b: 'Variation exists; more offspring are born than survive; individuals with the better-suited phenotype are more likely to survive and reproduce; they pass on the allele; the allele becomes more common over generations.' },
      { n: 4, f: 'How does a new species form?', b: 'A population is separated into groups that do not interbreed. Each faces different selection pressures and mutations. Over many generations they become so different they cannot produce fertile offspring together.' },
      { n: 5, f: 'Fossils as evidence for evolution, and a limitation', b: 'Fossils show past organisms differed from today\'s, with features changing through rock layers and intermediate forms. Limitation: the record is incomplete (soft bodies decay, few remains fossilise, many are undiscovered).' },
      { n: 6, f: 'How does antibiotic resistance evolve?', b: 'A random mutation gives one bacterium a resistance allele; the antibiotic kills non-resistant cells; the resistant cell survives and divides; the allele spreads and the antibiotic stops working.' },
      { n: 7, f: 'Artificial vs natural classification', b: 'Artificial: based on a few chosen, convenient features; does not show relationships.\nNatural: based on many features and shared ancestry; shows relationships.' },
      { n: 8, f: 'How has DNA sequencing changed classification?', b: 'Molecular phylogenetics compares sequences: fewer differences mean a more recent common ancestor. It can regroup look-alike organisms. Ribosomal RNA sequencing led to three domains: Archaea, Bacteria, Eukaryota.' },
      { n: 9, f: 'Darwin and Wallace', b: 'Both developed natural selection independently; their ideas were presented together in 1858, and Darwin published On the Origin of Species in 1859. The ideas were challenged partly because the mechanism of inheritance was unknown.' },
      { n: 10, f: 'Why are seedbanks kept?', b: 'Seeds are stored cold and dry so that genetic variation survives if wild populations are lost.' },
    ]),

    // B6 Global challenges
    ...sub(B6, 'monitoring-and-maintaining-the-environment-ocr-gcse-biology', 'B6.1', [
      { n: 1, f: 'Distribution vs abundance, and which sampling method suits each', b: 'Distribution: where organisms are found; use a transect with quadrats at regular intervals across a gradient.\nAbundance: how many there are; use random quadrats to avoid bias.', src: FIELD },
      { n: 2, f: 'Eight 0.25 m² quadrats on an 800 m² hillside hold 30 plants in total. Estimate the population.', b: 'Mean = 30 ÷ 8 = 3.75 per quadrat. Per m² = 3.75 ÷ 0.25 = 15. Estimate = 15 × 800 = 12 000.' },
      { n: 3, f: 'Capture-recapture: 35 snails marked; later 30 caught, 7 marked. Estimate, and the assumptions', b: '(35 × 30) ÷ 7 = 150 snails. Assumes marks stay and do no harm, marked animals mix evenly, and no significant births, deaths or migration.' },
      { n: 4, f: 'Equipment for field sampling: quadrat, pooter, nets, key', b: 'Quadrat: counts plants or slow animals in a known area (or percentage cover). Pooter: collects small insects by suction. Sweep and pond nets. Key: identifies organisms from their features.' },
      { n: 5, f: 'Ways humans reduce biodiversity', b: 'Land use (forest clearance, building, draining wetlands); monoculture; hunting and poaching; pollution such as acid rain and sewage.' },
      { n: 6, f: 'Ways humans protect biodiversity', b: 'Protecting species: laws against hunting, captive breeding, reintroduction, seed banks. Protecting habitats: nature reserves, restoring hedgerows and ponds, controlling pollution.' },
      { n: 7, f: 'How are lichens used as indicator species?', b: 'Crusty lichens tolerate more sulfur dioxide; bushy lichens need cleaner air. Mapping lichen types shows an air-quality gradient.' },
      { n: 8, f: 'Ecotourism: benefits and a limit', b: 'Links conservation to income: pays for rangers and monitoring, gives local people jobs and a reason to protect habitats. Limit: too many visitors can disturb wildlife.' },
      { n: 9, f: 'Challenges of maintaining biodiversity', b: 'International agreements are hard to reach and enforce; monitoring needs money and trained staff; local people may lose income from land, hunting or fishing; illegal activity is hard to detect in remote areas.' },
      { n: 10, f: 'How does low dissolved oxygen, or sulfur dioxide, change the distribution of species?', b: 'Low dissolved oxygen (made worse by warmer water): high-oxygen species such as mayfly nymphs decline; bloodworms can remain. Sulfur dioxide in air: sensitive lichens disappear.', u: true },
    ]),
    ...sub(B6, 'feeding-the-human-race-ocr-gcse-biology', 'B6.2', [
      { n: 1, f: 'Food security, and five threats to it', b: 'People can reliably get enough safe, nutritious food. Threats: increasing population, changing diets, new pests and pathogens, environmental change, and the cost and sustainability of inputs.', src: FOOD },
      { n: 2, f: 'Why does a shift to more meat and dairy threaten food security?', b: 'Energy is lost at each trophic level, so producing animal food needs more land per unit of energy than growing crops for people.' },
      { n: 3, f: 'Why do plants need nitrate, phosphate and potassium?', b: 'Nitrate: amino acids and proteins. Phosphate: DNA, ATP and membranes. Potassium: enzymes and water balance.' },
      { n: 4, f: 'Eutrophication in steps', b: 'Fertiliser washes into water → algal bloom → light blocked, submerged plants die → decomposers respire aerobically and use up oxygen → fish and other animals suffocate.' },
      { n: 5, f: 'Pesticides: benefits, risks, and how resistance spreads', b: 'Less crop lost, so higher yields. Risks: harm to non-target species such as pollinators, build-up along food chains, cost. A few pests are resistant by chance; they survive and breed, so resistance spreads.' },
      { n: 6, f: 'Hydroponics: advantages and disadvantages', b: 'Roots in an aerated solution of mineral ions. Advantages: exact control of ions and pH, no soil pests or weeds, water recycled, works on poor soil. Disadvantages: high set-up and energy costs, skilled management, disease spreads in shared solution.' },
      { n: 7, f: 'Biological control: examples, advantages and disadvantages', b: 'Using a predator, parasite or pathogen of the pest, e.g. ladybirds against aphids. No residues, specific, resistance less likely; but slow, incomplete, and the introduced species may become a pest.' },
      { n: 8, f: 'Selective breeding: benefits and costs', b: 'More food from the same land; uniform produce. Costs: less genetic variation, so a new disease can wipe out a crop or herd; inbreeding raises inherited disorders; slow, over many generations.' },
      { n: 9, f: 'Genetic engineering', b: 'A process that modifies the genome of an organism to introduce desirable characteristics. Because the genome is changed, the change is inherited. Transgenic: carrying a gene from another species.', src: GE },
      { n: 10, f: 'Genetic engineering of bacteria: the steps', b: 'Isolate the gene; cut it out with a restriction enzyme, leaving sticky ends; cut the plasmid with the same enzyme; join with ligase to make a recombinant plasmid; add to host bacteria; grow on antibiotic agar so only transformed bacteria grow.', u: true },
      { n: 11, f: 'What does the antibiotic resistance marker on a plasmid show?', b: 'Only bacteria that took up the plasmid can grow on antibiotic agar. It shows plasmid uptake, not that the right gene is present.', u: true },
      { n: 12, f: 'Benefits and risks of GM crops', b: 'Benefits: higher yield, fewer insecticide sprays for toxin-making crops, added nutrients (beta-carotene rice), drought or salt tolerance.\nRisks: gene flow to wild relatives, pest resistance, harm to non-target organisms, unknown long-term effects, seed cost.' },
    ]),
    ...sub(B6, 'monitoring-and-maintaining-health-ocr-gcse-biology', 'B6.3', [
      { n: 1, f: 'Communicable vs non-communicable disease', b: 'Communicable: caused by a pathogen and passed between hosts (influenza, cholera, malaria, athlete\'s foot).\nNon-communicable: not passed on; caused by genes, diet, lifestyle, environment or ageing (cystic fibrosis, scurvy, most cancers, type 2 diabetes).', src: DIS },
      { n: 2, f: 'How influenza, cholera, malaria and athlete\'s foot spread', b: 'Influenza (virus): droplets in the air. Cholera (bacterium): contaminated water and food. Malaria (protist): mosquito vector. Athlete\'s foot (fungus): direct contact, damp shared floors.' },
      { n: 3, f: 'Tobacco mosaic virus, barley powdery mildew and crown gall', b: 'TMV (virus): mosaic leaf patches, less photosynthesis; spread by contact.\nPowdery mildew (fungus): white powdery growth; wind-blown spores.\nCrown gall (bacterium): galls at the stem base; enters wounds from soil or water.' },
      { n: 4, f: 'Physical and chemical defences of plants', b: 'Physical: the waxy, waterproof leaf cuticle and the tough cellulose cell wall.\nChemical: antimicrobial substances (e.g. allicin in garlic) that kill or slow bacteria and fungi.' },
      { n: 5, f: 'Detecting plant disease: field vs lab methods', b: 'Field: observing symptoms against identification guides; microscopy of spores. Lab: antigen detection with monoclonal antibodies; DNA testing (PCR) compared with positive and negative controls. Field is quick and cheap; lab tests confirm the pathogen.', u: true },
      { n: 6, f: 'Non-specific defences of the human body', b: 'Skin; clots and scabs; nose hairs and mucus; cilia sweep mucus up the airways; stomach acid kills swallowed pathogens; lysozyme in tears breaks down bacterial cell walls; phagocytes engulf and digest any pathogen.' },
      { n: 7, f: 'Primary vs secondary immune response, and how a vaccine uses it', b: 'Primary (first exposure): slow, few matching lymphocytes, less antibody. Secondary: fast and much larger, because memory cells are already present. A vaccine gives safe antigens, so memory cells form without illness.', src: WBC },
      { n: 8, f: 'How are monoclonal antibodies made, and one use?', b: 'Inject an antigen into a mouse; take B lymphocytes making the antibody and fuse them with tumour cells to make hybridomas; select, clone and grow them; purify the antibody. Use: pregnancy tests detect hCG in urine.', u: true },
      { n: 9, f: 'Stages in testing a new medicine', b: 'Preclinical (cells, computer models, animals): toxicity, effect, dose. Phase 1: few healthy volunteers, safety and dose. Phase 2: few patients, effectiveness. Phase 3: many patients, against a placebo or current treatment, often double-blind.' },
      { n: 10, f: 'Treatments for cardiovascular disease, with one drawback each', b: 'Lifestyle change: slow. Statins (lower cholesterol): possible muscle pain. Stent (holds artery open): clots, re-narrowing. Bypass: major surgery. Heart transplant: few donors, rejection.' },
      { n: 11, f: 'Benign vs malignant tumours', b: 'Cancer is uncontrolled cell growth and division after mutations. Benign: stays in one place, does not invade, not cancer. Malignant: invades nearby tissue and spreads in the blood to form secondary tumours.' },
      { n: 12, f: 'Why are transplanted stem cells rejected, and how is rejection reduced?', b: 'Donor cells carry different antigens, which the recipient\'s lymphocytes attack. Reduce it by tissue matching, immunosuppressant drugs, using the patient\'s own stem cells, or therapeutic cloning.', src: STEM },
    ]),

    // B7 Practical skills
    ...topicOnly(B7, '7', [
      { n: 1, f: 'Accuracy vs precision', b: 'Accuracy: closeness to the true value. Precision: closeness of repeat readings to each other.', src: WS },
      { n: 2, f: 'Repeatability vs reproducibility', b: 'Repeatable: the same person, method and equipment give the same results. Reproducible: a different person, method or equipment give the same results.', src: WS },
      { n: 3, f: 'Random vs systematic error', b: 'Random error: unpredictable scatter, reduced by repeats and a mean. Systematic error: the same shift in every reading; repeats do not remove it.', src: WS },
      { n: 4, f: 'Hypothesis vs prediction', b: 'A hypothesis is a testable explanation built from scientific theory. A prediction is what you expect to observe if the hypothesis is right.', src: WS },
      { n: 5, f: 'Repeats read 5.1, 5.4, 5.2 and 5.3. Mean and uncertainty?', b: 'Mean = 21.0 ÷ 4 = 5.25. Range = 0.3, half-range 0.15, so the result is 5.25 ± 0.15.' },
      { n: 6, f: 'Independent, dependent and control variables', b: 'Independent: the one you change. Dependent: the one you measure. Control: kept the same so the test is fair.' },
      { n: 7, f: 'Continuous sampling with amylase: the end point is at 50 s. Rate?', b: 'Test drops of the mixture with iodine at set intervals; the end point is the first sample that no longer turns blue-black. Rate = 1 ÷ time = 1 ÷ 50 = 0.02 s⁻¹.' },
      { n: 8, f: 'A pulse of 21 beats is counted in 15 s. Heart rate?', b: '21 × 4 = 84 beats per minute. Recovery time is the time to return to the resting rate after exercise.' },
      { n: 9, f: 'Bacterial lawn practical: safe technique, and the area of a clear zone 14 mm across', b: 'Sterilise dishes and agar; work near a Bunsen flame; flame the loop; tape the lid with short strips; incubate at no more than about 25 °C. Area = πr² = π × 7² = 154 mm².' },
      { n: 10, f: 'Making 100 cm³ of 0.3 M sucrose solution from a 1.0 M stock', b: '30 cm³ of stock + 70 cm³ of water (0.3 × 100 ÷ 1.0 = 30 cm³ of stock).' },
      { n: 11, f: 'A mean of 2.4 plants per 0.25 m² quadrat. How many in 50 m²?', b: '2.4 ÷ 0.25 = 9.6 per m². 9.6 × 50 = 480 plants (an estimate).' },
      { n: 12, f: 'Rules for drawing a results graph', b: 'Independent variable on the x-axis; axes labelled with quantity and unit; even scales using more than half the grid; points plotted exactly; a line of best fit, not dot to dot.' },
    ]),
  ],
};
