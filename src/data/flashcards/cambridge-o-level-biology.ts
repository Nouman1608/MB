/**
 * D-444 -- flashcards for Cambridge O Level Biology 5090 (2026-2028).
 *
 * One block per subtopic, in syllabus order. Every topic now itemises
 * subtopics in syllabus-topics.ts, so every card sits on a subtopic and its id
 * is `<subtopic number>-<n>`. On 20 Nov 2026 the cards of topics 2, 3 and 6 to
 * 19, which until then sat on the topic with ids `<topic number>-<n>`, were
 * re-filed under their subtopics (card text unchanged); `idMigration` below
 * moves browser progress saved before that onto the new ids. Ids are permanent
 * (browser progress is keyed by them): add a new card with the next unused n,
 * never renumber.
 *
 * Not tiered: 5090 has one set of outcomes for every candidate.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 5090); origin 'revision-notes'.
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

const CELLS = 'cell-structure-and-organisation-revision-notes';
const BIO = 'biological-molecules-revision-notes';
const DEV = 'o-level-biology-5090-development-of-organisms-and-continuity-of-life-revision-notes';
const DIS = 'o-level-biology-5090-disease-and-immunity-revision-notes';
const GAS = 'o-level-biology-5090-human-gas-exchange-revision-notes';
const INH = 'o-level-biology-5090-inheritance-revision-notes';
const REL = 'o-level-biology-5090-relationships-of-organisms-with-one-another-and-with-the-env-revision-notes';
const RESP = 'o-level-biology-5090-respiration-revision-notes';
const TRH = 'o-level-biology-5090-transport-in-humans-revision-notes';

export const DECK_CAMBRIDGE_O_LEVEL_BIOLOGY: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'biology',
  syllabusCode: '5090',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-20',
  deckReview: { reviewerSlug: 'hina-mogul', reviewedOn: '2026-11-05' },
  idMigration: {
    id: '5090-subtopics-2026-11-20',
    before: '2026-11-20',
    map: {
      '1.1-1': '1.1-1', '1.1-2': '1.1-2', '1.1-3': '1.1-3', '1.1-4': '1.1-4', '1.1-5': '1.1-5', '1.1-6': '1.1-6',
      '1.1-7': '1.1-7', '1.2-1': '1.2-1', '1.2-2': '1.2-2', '1.2-3': '1.2-3', '1.2-4': '1.2-4', '1.2-5': '1.2-5',
      '1.2-6': '1.2-6', '1.2-7': '1.2-7', '2-1': '2.1-1', '2-2': '2.1-2', '2-3': '2.1-3', '2-4': '2.1-4',
      '2-5': '2.2-1', '2-6': '2.2-2', '2-7': '2.2-3', '2-8': '2.2-4', '2-9': '2.2-5', '2-10': '2.2-6',
      '2-11': '2.2-7', '2-12': '2.2-8', '3-1': '3.1-1', '3-2': '3.1-2', '3-3': '3.2-1', '3-4': '3.1-3',
      '3-5': '3.1-4', '3-6': '3.1-5', '3-7': '3.1-6', '3-8': '3.1-7', '3-9': '3.1-8', '3-10': '3.2-2',
      '4.1-1': '4.1-1', '4.1-2': '4.1-2', '4.1-3': '4.1-3', '4.1-4': '4.1-4', '4.1-5': '4.1-5', '4.1-6': '4.1-6',
      '4.1-7': '4.1-7', '4.1-8': '4.1-8', '4.1-9': '4.1-9', '5.1-1': '5.1-1', '5.1-2': '5.1-2', '5.1-3': '5.1-3',
      '5.1-4': '5.1-4', '5.1-5': '5.1-5', '5.2-1': '5.2-1', '5.2-2': '5.2-2', '5.2-3': '5.2-3', '5.2-4': '5.2-4',
      '5.2-5': '5.2-5', '6-1': '6.1-1', '6-2': '6.1-2', '6-3': '6.1-3', '6-4': '6.1-4', '6-5': '6.1-5',
      '6-6': '6.1-6', '6-7': '6.1-7', '6-8': '6.1-8', '6-9': '6.1-9', '6-10': '6.2-1', '6-11': '6.2-2',
      '6-12': '6.3-1', '7-1': '7.2-1', '7-2': '7.2-2', '7-3': '7.1-1', '7-4': '7.1-2', '7-5': '7.2-3',
      '7-6': '7.2-4', '7-7': '7.2-5', '7-8': '7.2-6', '7-9': '7.2-7', '7-10': '7.2-8', '7-11': '7.1-3',
      '7-12': '7.1-4', '8-1': '8.1-1', '8-2': '8.1-2', '8-3': '8.1-3', '8-4': '8.2-1', '8-5': '8.2-2',
      '8-6': '8.2-3', '8-7': '8.2-4', '8-8': '8.2-5', '8-9': '8.2-6', '8-10': '8.3-1', '8-11': '8.3-2',
      '8-12': '8.3-3', '9-1': '9.1-1', '9-2': '9.1-2', '9-3': '9.1-3', '9-4': '9.1-4', '9-5': '9.1-5',
      '9-6': '9.1-6', '9-7': '9.1-7', '9-8': '9.1-8', '9-9': '9.1-9', '9-10': '9.1-10', '10-1': '10.1-1',
      '10-2': '10.1-2', '10-3': '10.2-1', '10-4': '10.3-1', '10-5': '10.1-3', '10-6': '10.3-2', '10-7': '10.3-3',
      '10-8': '10.3-4', '10-9': '10.3-5', '10-10': '10.2-2', '11-1': '11.1-1', '11-2': '11.1-2', '11-3': '11.1-3',
      '11-4': '11.2-1', '11-5': '11.2-2', '11-6': '11.2-3', '11-7': '11.2-4', '11-8': '11.3-1', '11-9': '11.3-2',
      '11-10': '11.4-1', '11-11': '11.4-2', '11-12': '11.4-3', '12-1': '12.1-1', '12-2': '12.1-2', '12-3': '12.1-3',
      '12-4': '12.1-4', '12-5': '12.1-5', '12-6': '12.1-6', '12-7': '12.1-7', '12-8': '12.2-1', '12-9': '12.3-1',
      '12-10': '12.3-2', '12-11': '12.3-3', '12-12': '12.3-4', '13-1': '13.1-1', '13-2': '13.1-2', '13-3': '13.1-3',
      '13-4': '13.1-4', '13-5': '13.2-1', '13-6': '13.2-2', '13-7': '13.2-3', '13-8': '13.2-4', '13-9': '13.1-5',
      '14-1': '14.1-1', '14-2': '14.1-2', '14-3': '14.2-1', '14-4': '14.2-2', '14-5': '14.2-3', '14-6': '14.3-1',
      '14-7': '14.3-2', '14-8': '14.4-1', '14-9': '14.5-1', '14-10': '14.5-2', '14-11': '14.6-1', '14-12': '14.6-2',
      '15-1': '15.1-1', '15-2': '15.1-2', '15-3': '15.1-3', '15-4': '15.1-4', '15-5': '15.1-5', '15-6': '15.1-6',
      '15-7': '15.1-7', '15-8': '15.1-8', '16-1': '16.1-1', '16-2': '16.1-2', '16-3': '16.1-3', '16-4': '16.1-4',
      '16-5': '16.2-1', '16-6': '16.3-1', '16-7': '16.3-2', '16-8': '16.3-3', '16-9': '16.3-4', '16-10': '16.4-1',
      '16-11': '16.4-2', '16-12': '16.4-3', '17-1': '17.1-1', '17-2': '17.2-1', '17-3': '17.2-2', '17-4': '17.2-3',
      '17-5': '17.3-1', '17-6': '17.3-2', '17-7': '17.3-3', '17-8': '17.3-4', '17-9': '17.3-5', '17-10': '17.1-2',
      '17-11': '17.1-3', '17-12': '17.4-1', '18-1': '18.1-1', '18-2': '18.1-2', '18-3': '18.1-3', '18-4': '18.1-4',
      '18-5': '18.1-5', '18-6': '18.1-6', '18-7': '18.2-1', '18-8': '18.2-2', '18-9': '18.2-3', '18-10': '18.2-4',
      '19-1': '19.1-1', '19-2': '19.1-2', '19-3': '19.1-3', '19-4': '19.1-4', '19-5': '19.1-5', '19-6': '19.2-1',
      '19-7': '19.2-2', '19-8': '19.3-1', '19-9': '19.4-1', '19-10': '19.4-2', '19-11': '19.5-1', '19-12': '19.5-2',
    },
  },
  cards: [
    // 1 Cells
    ...sub('cells', 'cell-structure-and-function', '1.1', [
      { n: 1, f: 'Three structures in plant cells that animal cells lack', b: 'A cellulose cell wall, chloroplasts and a large permanent vacuole (containing cell sap).' },
      { n: 2, f: 'Functions of the cell membrane, cytoplasm and nucleus', b: 'Cell membrane: controls what enters and leaves.\nCytoplasm: site of chemical reactions.\nNucleus: contains DNA and controls the cell.' },
      { n: 3, f: 'Functions of mitochondria and ribosomes', b: 'Mitochondria: aerobic respiration.\nRibosomes: protein synthesis.' },
      { n: 4, f: 'How is a bacterial cell different from plant and animal cells?', b: 'No nucleus: its DNA is a circular loop free in the cytoplasm, often with plasmids. No mitochondria or chloroplasts. Its cell wall is not made of cellulose. (Bacteria do have DNA.)' },
      { n: 5, f: 'Iodine solution and methylene blue as stains', b: 'Iodine solution: stains starch grains and cell walls; used for plant cells such as onion epidermis.\nMethylene blue: stains the nucleus and cytoplasm; used for animal cells such as cheek cells.', src: CELLS },
      { n: 6, f: 'Magnification formula and its rearrangements', b: 'magnification = image size ÷ actual size.\nactual size = image size ÷ magnification; image size = actual size × magnification. Use the same units for both sizes.' },
      { n: 7, f: 'A cell is drawn 60 mm long and is actually 0.03 mm long. Magnification?', b: '60 ÷ 0.03 = ×2000.' },
    ]),
    ...sub('cells', 'specialised-cells-tissues-and-organs', '1.2', [
      { n: 1, f: 'Red blood cell: adaptations and why', b: 'Biconcave shape and no nucleus, full of haemoglobin: a large surface area and more space for haemoglobin, so more oxygen is carried.' },
      { n: 2, f: 'Root hair cell and palisade cell: adaptations', b: 'Root hair cell: long projection gives a large surface area for uptake of water.\nPalisade cell: many chloroplasts, near the upper surface, for maximum light absorption.' },
      { n: 3, f: 'Xylem vessel and nerve cell: adaptations', b: 'Xylem vessel: hollow, dead and lignified, giving an uninterrupted water column and support.\nNerve cell: long axon with branched ends, carrying impulses over a distance.' },
      { n: 4, f: 'Tissue', b: 'A group of similar cells with a shared function (e.g. muscle).', src: CELLS },
      { n: 5, f: 'Organ', b: 'Several tissues working together (e.g. stomach, leaf).', src: CELLS },
      { n: 6, f: 'Organ system', b: 'Organs cooperating (e.g. digestive system).', src: CELLS },
      { n: 7, f: 'Levels of organisation, from organelle to organism', b: 'Organelle → cell → tissue → organ → organ system → organism. (A leaf is an organ, not a tissue.)' },
    ]),

    // 2 Classification
    ...sub('classification', 'concept-and-use-of-a-classification-system', '2.1', [
      { n: 1, f: 'Species', b: 'A group of organisms that can reproduce to produce fertile offspring.' },
      { n: 2, f: 'Binomial system', b: 'An internationally agreed system in which the scientific name of an organism has two parts showing the genus and species, e.g. Panthera leo. Genus has a capital letter; species is lower case; italics in print, underlined by hand.' },
      { n: 3, f: 'Dichotomous key: what it is, and how many couplets for n organisms?', b: 'A key in which each step splits the organisms into two groups using one identifiable feature. n organisms need n − 1 couplets.' },
      { n: 4, f: 'Why should colour or size not be used in a dichotomous key?', b: 'They vary between individuals of the same species, so they are not reliable. Use clear features such as number of legs, wings present or absent, or leaf veins parallel or branching.' },
    ]),
    ...sub('classification', 'features-of-organisms', '2.2', [
      { n: 1, f: 'Prokaryote kingdom: main features', b: 'Single cells with no nucleus; circular DNA free in the cytoplasm, plasmids, ribosomes and a cell wall.' },
      { n: 2, f: 'Fungus kingdom: main features', b: 'Nucleus; cell wall not made of cellulose; no chloroplasts; body of hyphae (yeast is single-celled); secrete enzymes and absorb the food.' },
      { n: 3, f: 'Insects vs arachnids', b: 'Insects: 3 body sections, 3 pairs of legs, 1 pair of antennae.\nArachnids: 2 body sections, 4 pairs of legs, no antennae.' },
      { n: 4, f: 'Crustaceans vs myriapods', b: 'Crustaceans: more than 4 pairs of legs, 2 pairs of antennae.\nMyriapods: many segments with 1 or 2 pairs of legs per segment, 1 pair of antennae.' },
      { n: 5, f: 'Reptiles vs amphibians', b: 'Reptiles: dry scales; rubbery or leathery-shelled eggs laid on land.\nAmphibians: moist skin with no scales; soft eggs without shells laid in water; larvae with gills.' },
      { n: 6, f: 'Mammals vs birds: identifying features', b: 'Mammals: hair or fur, external ears (pinnae), mammary glands; most give birth to live young.\nBirds: feathers, beak, wings, hard-shelled eggs.' },
      { n: 7, f: 'Ferns vs flowering plants; monocots vs dicots', b: 'Ferns: fronds, reproduce by spores, no flowers. Flowering plants: reproduce by seeds.\nMonocots: 1 cotyledon, parallel veins, flower parts in threes. Dicots: 2 cotyledons, branching veins, parts in fours or fives.' },
      { n: 8, f: 'Features of viruses', b: 'Only a protein coat and genetic material. Not cells and in none of the five kingdoms; they can only replicate inside living cells.' },
    ]),

    // 3 Movement into and out of cells
    ...sub('movement-into-and-out-of-cells', 'diffusion-and-osmosis', '3.1', [
      { n: 1, f: 'Diffusion', b: 'The net movement of molecules or ions from a region of their higher concentration to a region of their lower concentration (down a concentration gradient), as a result of their random movement.' },
      { n: 2, f: 'Osmosis', b: 'The net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.' },
      { n: 3, f: 'Source of energy for diffusion and osmosis', b: 'The kinetic energy of the random movement of molecules and ions. No energy from respiration is used.' },
      { n: 4, f: 'Factors that increase the rate of diffusion', b: 'Larger surface area, higher temperature, steeper concentration gradient, shorter distance.' },
      { n: 5, f: 'Surface area to volume ratio of a 3 cm cube', b: 'Surface area = 6 × 3² = 54 cm²; volume = 3³ = 27 cm³; SA:V = 2 : 1. (A 1 cm cube is 6 : 1.)' },
      { n: 6, f: 'Plant cell vs animal cell placed in pure water', b: 'Both gain water by osmosis. The plant cell becomes turgid; its cellulose wall stops it bursting. An animal cell, such as a red blood cell, has no wall, so it swells and bursts.' },
      { n: 7, f: 'Turgid, flaccid and plasmolysed', b: 'Turgid: has taken in water; firm, membrane pressed against the wall (turgor pressure).\nFlaccid: has lost water and turgor pressure; soft.\nPlasmolysed: membrane and cytoplasm pulled away from the wall.' },
      { n: 8, f: 'A potato cylinder goes from 4.0 g to 3.4 g in a sucrose solution. % change and meaning?', b: '(3.4 − 4.0) ÷ 4.0 × 100 = −15%. The solution had a lower water potential than the cells, so water left by osmosis.' },
    ]),
    ...sub('movement-into-and-out-of-cells', 'active-transport', '3.2', [
      { n: 1, f: 'Active transport', b: 'The movement of molecules or ions into or out of a cell through the cell membrane, from a region of their lower concentration to a region of their higher concentration (against a concentration gradient), using energy released during respiration.' },
      { n: 2, f: 'Why must root hair cells take up mineral ions by active transport?', b: 'The ion concentration in soil water is lower than in the cell, so ions must move against the concentration gradient. This needs energy from respiration, so lack of oxygen reduces ion uptake.' },
      { n: 3, f: 'Active transport vs diffusion', b: 'Diffusion goes down the gradient and needs no respiratory energy. Active transport goes against the gradient, needs energy from respiration, and stops when oxygen is short, so it can build up a concentration difference.', src: 'cambridge-o-level-biology-5090-active-transport-revision-notes' },
      { n: 4, f: 'Why do root hair cells have many mitochondria and a long, thin shape?', b: 'The mitochondria release energy by aerobic respiration to drive active transport of ions. The long, thin root hair gives a large surface area for taking up ions.', src: 'cambridge-o-level-biology-5090-active-transport-revision-notes' },
      { n: 5, f: 'What is the evidence that ion uptake by roots is active transport?', b: 'Less oxygen or a lower temperature lowers respiration and uptake falls. A respiratory poison stops it. Ions are still taken up against a concentration gradient.', src: 'cambridge-o-level-biology-5090-active-transport-revision-notes' },
    ]),

    // 4 Biological molecules
    ...sub('biological-molecules', 'biological-molecules-content', '4.1', [
      { n: 1, f: 'Chemical elements in carbohydrates, lipids and proteins', b: 'Carbohydrates and lipids: carbon, hydrogen, oxygen.\nProteins: carbon, hydrogen, oxygen, nitrogen (some also sulfur). Nitrogen marks out proteins.' },
      { n: 2, f: 'Starch, glycogen and cellulose: what they are made from and their roles', b: 'All are made from glucose. Starch: energy store in plants. Glycogen: store in animals. Cellulose: strength in plant cell walls.' },
      { n: 3, f: 'Lipid', b: 'One glycerol + three fatty acids. Lipids release more energy per gram than carbohydrates when respired.', src: BIO },
      { n: 4, f: 'Protein', b: 'A chain of amino acids folded into a specific shape. The sequence of amino acids determines the shape, and the shape determines the function, e.g. of enzymes and antibodies.', src: BIO },
      { n: 5, f: 'Test for starch', b: 'Add iodine solution: orange-brown → blue-black if starch is present.' },
      { n: 6, f: "Test for reducing sugars (glucose, maltose)", b: "Add Benedict's solution and heat in a water bath: blue → green → yellow → brick-red. The further along the sequence, the more reducing sugar." },
      { n: 7, f: 'Test for protein', b: 'Biuret test (or sodium hydroxide then a few drops of copper sulfate): blue → purple/lilac. No heating.' },
      { n: 8, f: 'Test for lipids', b: 'Ethanol emulsion test: shake the food with ethanol, then add water. A white cloudy emulsion shows lipid.' },
      { n: 9, f: 'Which of the four food tests needs heating?', b: "Only Benedict's (in a water bath). Iodine, biuret and the emulsion test are done at room temperature." },
    ]),

    // 5 Enzymes
    ...sub('enzymes', 'enzyme-action', '5.1', [
      { n: 1, f: 'Catalyst', b: 'A substance that increases the rate of a chemical reaction and is not changed (not used up) by the reaction.' },
      { n: 2, f: 'Enzyme', b: 'A protein that functions as a biological catalyst.' },
      { n: 3, f: 'How an enzyme works (lock and key)', b: 'The substrate fits into the active site, whose shape is complementary to it. An enzyme-substrate complex forms, the reaction occurs, and the products are released. The enzyme is unchanged and reused.' },
      { n: 4, f: 'Why are enzymes specific?', b: 'Each active site has a shape complementary to one particular substrate, so only that substrate can bind and form an enzyme-substrate complex.' },
      { n: 5, f: 'Two ways to follow the progress of an enzyme reaction', b: 'Measure the disappearance of substrate (e.g. sample amylase and starch into iodine until no blue-black forms) or the appearance of product (e.g. collect oxygen from catalase and hydrogen peroxide in a gas syringe).' },
    ]),
    ...sub('enzymes', 'effects-of-temperature-and-ph', '5.2', [
      { n: 1, f: 'Effect of temperature below the optimum', b: 'Rate increases with temperature: molecules have more kinetic energy, so there are more frequent successful collisions between enzyme and substrate.' },
      { n: 2, f: 'Effect of temperature above the optimum', b: 'Rate falls sharply. The active site changes shape, the substrate no longer fits and no enzyme-substrate complexes form: the enzyme is denatured.' },
      { n: 3, f: 'Is denaturation reversible? Are enzymes "killed"?', b: 'Denaturation is permanent: cooling does not restore activity. Enzymes are denatured, never killed, because they were never alive.' },
      { n: 4, f: 'Effect of pH on enzyme activity', b: 'Each enzyme has an optimum pH. Either side of it activity falls; extremes of pH denature the enzyme by changing the shape of the active site.' },
      { n: 5, f: 'Approximate optimum pH of pepsin, amylase and trypsin', b: 'Pepsin: about 2 (stomach).\nAmylase: about 7 (mouth, small intestine).\nTrypsin: about 8 (small intestine).' },
    ]),

    // 6 Plant nutrition
    ...sub('plant-nutrition', 'photosynthesis', '6.1', [
      { n: 1, f: 'Photosynthesis', b: 'The process by which plants make carbohydrates from raw materials using energy from light.' },
      { n: 2, f: 'Word and balanced equations for photosynthesis', b: 'carbon dioxide + water → glucose + oxygen\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n(light energy and chlorophyll written by the arrow)' },
      { n: 3, f: 'Chlorophyll', b: 'A green pigment found in chloroplasts. It transfers light energy into chemical energy for the formation of glucose and other carbohydrates.' },
      { n: 4, f: 'Uses of starch, cellulose, glucose and sucrose in a plant', b: 'Starch: energy store. Cellulose: cell walls. Glucose: respiration. Sucrose: transport through the plant.' },
      { n: 5, f: 'Testing a leaf for starch: steps and reasons', b: 'Boil in water (kills cells, breaks membranes); hot ethanol in a water bath, no naked flame (removes chlorophyll); warm water (softens the leaf); iodine on a white tile (blue-black = starch).' },
      { n: 6, f: 'Why is a plant destarched before a photosynthesis experiment?', b: 'Keeping it in the dark uses up stored starch, so any starch found later was made during the experiment.' },
      { n: 7, f: 'Limiting factor', b: 'The factor in shortest supply that keeps the rate of photosynthesis down. Only increasing this factor raises the rate.' },
      { n: 8, f: 'Effect of temperature on the rate of photosynthesis', b: 'Rises to an optimum, then falls sharply: up to the optimum, more kinetic energy gives more effective collisions; above it, enzymes are denatured.' },
      { n: 9, f: 'Hydrogencarbonate indicator around pondweed: yellow, red, purple', b: 'Yellow: more CO₂ than air (respiration greater than photosynthesis, e.g. dark).\nRed: same as air (the two balance).\nMagenta to purple: less CO₂ than air (photosynthesis greater, bright light).' },
    ]),
    ...sub('plant-nutrition', 'leaf-structure', '6.2', [
      { n: 1, f: 'Palisade vs spongy mesophyll', b: 'Palisade: tightly packed, near the upper surface, most chloroplasts, for photosynthesis.\nSpongy: loosely packed, fewer chloroplasts, air spaces giving a large surface for gas exchange.' },
      { n: 2, f: 'Why is a leaf large and thin?', b: 'Large surface area absorbs more light and lets more carbon dioxide in. Thin: short diffusion distance for gases, and light reaches all the mesophyll cells.' },
      { n: 3, f: 'How do guard cells open and close a stoma?', b: 'When guard cells take in water they become turgid and the stoma opens. When they lose water they become flaccid and the stoma closes, reducing water loss. Guard cells contain chloroplasts.', src: 'cambridge-o-level-biology-5090-leaf-structure-revision-notes' },
      { n: 4, f: 'Describe the route of carbon dioxide into a leaf cell', b: 'Air outside → stomata → air spaces → water film on the mesophyll cells → carbon dioxide dissolves and diffuses into the cells. Oxygen leaves by the reverse route.', src: 'cambridge-o-level-biology-5090-leaf-structure-revision-notes' },
      { n: 5, f: 'What do xylem and phloem carry in a leaf\'s vascular bundle?', b: 'Xylem carries water and mineral ions into the leaf, and gives support. Phloem carries sucrose and amino acids away from the leaf.', src: 'cambridge-o-level-biology-5090-leaf-structure-revision-notes' },
    ]),
    ...sub('plant-nutrition', 'mineral-nutrition', '6.3', [
      { n: 1, f: 'Why plants need nitrate and magnesium ions', b: 'Nitrate: nitrogen to make amino acids, then proteins for growth.\nMagnesium: to make chlorophyll; less chlorophyll means less light absorbed.' },
      { n: 2, f: 'Effects of nitrate deficiency in a plant', b: 'Stunted growth and pale green or yellow leaves, older leaves first, because amino acids and proteins cannot be made.', src: 'cambridge-o-level-biology-5090-mineral-nutrition-revision-notes' },
      { n: 3, f: 'Effects of magnesium deficiency in a plant', b: 'Yellow leaves (chlorosis), older leaves first, because chlorophyll cannot be made. Less light is absorbed, so photosynthesis and glucose production fall.', src: 'cambridge-o-level-biology-5090-mineral-nutrition-revision-notes' },
      { n: 4, f: 'Water culture experiment: sets and controlled variables', b: 'Set A has all ions (control), B lacks nitrate, C lacks magnesium. Keep seedlings, volume, light and temperature the same, aerate the solutions, and compare height, leaf colour and mass.', src: 'cambridge-o-level-biology-5090-mineral-nutrition-revision-notes' },
      { n: 5, f: 'Control seedling 24.0 cm; without nitrate 9.0 cm. What is the percentage reduction?', b: '(24.0 − 9.0) ÷ 24.0 × 100 = 62.5% shorter. Percentage reduction = (control − test) ÷ control × 100.', src: 'cambridge-o-level-biology-5090-mineral-nutrition-revision-notes' },
    ]),

    // 7 Transport in flowering plants
    ...sub('transport-in-flowering-plants', 'uptake-and-transport-of-water-and-ions', '7.1', [
      { n: 1, f: 'How root hair cells take up water and mineral ions', b: 'A long, thin extension gives a large surface area. Water enters by osmosis; mineral ions enter by active transport, using energy from respiration (many mitochondria).' },
      { n: 2, f: 'Pathway of water through a plant', b: 'Root hair cells → root cortex cells → xylem → mesophyll cells. Water then evaporates into the air spaces and diffuses out through the stomata.' },
      { n: 3, f: 'Position of xylem and phloem in a non-woody dicot root and stem', b: 'Root: xylem in the centre in a star shape, phloem between its arms.\nStem: bundles in a ring; xylem on the inner side, phloem on the outer side of each bundle.' },
      { n: 4, f: 'Features of xylem vessels and their functions', b: 'Thick lignified walls: strength and support. No cell contents: unobstructed water flow. Joined end to end with no cross walls: a continuous tube. Functions: transport of water and mineral ions, and support.' },
    ]),
    ...sub('transport-in-flowering-plants', 'transpiration-and-translocation', '7.2', [
      { n: 1, f: 'Transpiration', b: 'The loss of water vapour from leaves.' },
      { n: 2, f: 'Translocation', b: 'The movement of sucrose and amino acids in the phloem from sources to sinks.' },
      { n: 3, f: 'Effects of humidity and light intensity on transpiration', b: 'Higher humidity: slower, because there is a smaller water vapour concentration gradient.\nHigher light intensity: faster, because stomata open wider.' },
      { n: 4, f: 'Effects of wind speed and temperature on transpiration', b: 'Both increase the rate. Wind removes water vapour near the leaf, keeping the gradient steep. Higher temperature gives more kinetic energy, so faster evaporation and diffusion.' },
      { n: 5, f: 'How does transpiration pull move water up the xylem?', b: 'Water vapour lost from the leaves is replaced from the xylem, creating a pull on the water column. Forces of attraction between water molecules hold the column together, so it is drawn up from the roots.' },
      { n: 6, f: 'Wilting', b: 'Drooping of leaves and soft stems when water loss exceeds water uptake: cells lose water, become flaccid and lose turgor pressure.' },
      { n: 7, f: 'What does a potometer actually measure?', b: 'Water uptake (distance an air bubble moves in a set time), used as an estimate of water loss by transpiration.' },
      { n: 8, f: 'Source and sink (translocation)', b: 'Source: a part that produces or releases sucrose and amino acids, e.g. a photosynthesising leaf.\nSink: a part that uses or stores them, e.g. roots, growing tips, fruits, seeds.' },
    ]),

    // 8 Human nutrition
    ...sub('human-nutrition', 'diet', '8.1', [
      { n: 1, f: 'Balanced diet', b: 'A diet with all the nutrients in the correct proportions and enough energy for the person\'s needs (which vary with age, sex, activity and pregnancy).' },
      { n: 2, f: 'Vitamin C and vitamin D: why needed, and deficiency diseases', b: 'Vitamin C: collagen for healthy gums, skin and blood vessels; lack causes scurvy.\nVitamin D: absorbing calcium for bones and teeth; lack causes rickets.' },
      { n: 3, f: 'Calcium and iron: why needed, and deficiency', b: 'Calcium: hard bones and teeth (also clotting, muscle contraction); lack can cause rickets.\nIron: haemoglobin to carry oxygen; lack causes anaemia (tiredness, pale skin).' },
    ]),
    ...sub('human-nutrition', 'human-digestive-system', '8.2', [
      { n: 1, f: 'Physical vs chemical digestion', b: 'Physical: breakdown of food into smaller pieces without chemical change, increasing surface area for enzymes.\nChemical: breakdown of large insoluble molecules into small soluble ones that can be absorbed.' },
      { n: 2, f: 'Peristalsis', b: 'Waves of contraction of the longitudinal and circular muscles of the gut wall that move food through the digestive system.' },
      { n: 3, f: 'Jobs of incisors, canines, premolars and molars', b: 'Incisors: biting and cutting. Canines: gripping and tearing. Premolars and molars: grinding and crushing.' },
      { n: 4, f: 'Digestive enzymes: substrate → products', b: 'Amylase: starch → maltose. Maltase: maltose → glucose. Protease (pepsin, trypsin): protein → amino acids. Lipase: lipids → fatty acids and glycerol.' },
      { n: 5, f: 'Bile: where made, where stored, and what it does', b: 'Made in the liver, stored in the gall bladder. It emulsifies fats into small droplets, increasing the surface area for lipase. This is physical: bile contains no enzyme.' },
      { n: 6, f: 'Function of hydrochloric acid in the stomach', b: 'It kills ingested bacteria. (The stomach is acidic and pepsin works best at that pH.)' },
    ]),
    ...sub('human-nutrition', 'absorption-and-assimilation', '8.3', [
      { n: 1, f: 'Absorption vs assimilation', b: 'Absorption: movement of nutrients from the intestines into the cells lining the gut and then into the blood.\nAssimilation: uptake and use by cells of nutrients from the blood.' },
      { n: 2, f: 'Features of a villus that help absorption', b: 'Villi and microvilli give a large surface area; epithelium one cell thick gives a short diffusion distance; capillaries absorb glucose and amino acids; the lacteal absorbs fatty acids and glycerol.' },
      { n: 3, f: 'Where is most water absorbed, and where do absorbed nutrients go?', b: 'Most water is absorbed in the small intestine (some in the colon). The hepatic portal vein carries absorbed molecules from the ileum to the liver.' },
    ]),

    // 9 Human gas exchange
    ...sub('human-gas-exchange', 'human-gas-exchange-content', '9.1', [
      { n: 1, f: 'Features of gas exchange surfaces', b: 'Large surface area (more diffusion at once); thin surface (short diffusion distance); good blood supply and good air supply (both keep the concentration gradient steep).' },
      { n: 2, f: 'Route of air into the lungs', b: 'Larynx → trachea → bronchi → bronchioles → alveoli (with associated capillaries).' },
      { n: 3, f: 'Composition of atmospheric air', b: 'Nitrogen about 78%, oxygen 21%, argon and other noble gases about 0.9%, carbon dioxide 0.04%, water vapour variable.' },
      { n: 4, f: 'Inspired vs expired air, with reasons', b: 'Oxygen ~21% → ~16% (diffuses into blood, used in respiration). Carbon dioxide ~0.04% → ~4% (made in respiration). Water vapour: expired air saturated (evaporates from alveoli). Expired air is also warmer.' },
      { n: 5, f: 'Breathing in: muscles, ribs, diaphragm, volume, pressure', b: 'External intercostals contract; ribs move up and out; diaphragm contracts and flattens; thorax volume increases, pressure falls below atmospheric, so air flows in.' },
      { n: 6, f: 'External vs internal intercostals', b: 'External raise the ribs (in); internal lower them in forced breathing out.', src: GAS },
      { n: 7, f: 'Breathing vs respiration', b: 'A physical process moving air vs chemical reactions in cells.', src: GAS },
      { n: 8, f: 'Why do breathing rate and depth increase during exercise?', b: 'Muscles respire faster, so more carbon dioxide is made. The rise in blood carbon dioxide concentration is detected by the brain, which increases the rate and depth of breathing.' },
      { n: 9, f: 'How goblet cells, mucus and cilia protect the gas exchange system', b: 'Goblet cells secrete mucus, which traps pathogens and particles. Cilia beat and move the mucus up to the throat to be swallowed.' },
      { n: 10, f: 'Limewater vs hydrogencarbonate indicator', b: 'Limewater shows carbon dioxide only by turning milky; the indicator changes colour (red/orange to yellow) as carbon dioxide rises.', src: GAS },
    ]),

    // 10 Respiration
    ...sub('respiration', 'respiration-content', '10.1', [
      { n: 1, f: 'Respiration (definition)', b: 'The chemical reactions in all living cells that release energy from glucose.' },
      { n: 2, f: 'Aerobic and anaerobic respiration (definitions)', b: 'Aerobic: the release of a relatively large amount of energy by the breakdown of glucose in the presence of oxygen.\nAnaerobic: the release of a relatively small amount of energy by the breakdown of glucose without using oxygen.' },
      { n: 3, f: 'Seven uses of energy released in respiration', b: 'Muscle contraction, protein synthesis, cell division, active transport, growth, passage of electrical impulses along neurones, maintenance of a constant body temperature.' },
    ]),
    ...sub('respiration', 'aerobic-respiration', '10.2', [
      { n: 1, f: 'Aerobic respiration: word and balanced equations', b: 'glucose + oxygen → carbon dioxide + water\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O' },
      { n: 2, f: 'Cells (where respiration happens)', b: 'Aerobic respiration happens in the mitochondria; muscle cells have many of them.', src: RESP },
      { n: 3, f: 'Define aerobic respiration', b: 'The release of a relatively large amount of energy by the breakdown of glucose in the presence of oxygen.', src: RESP },
      { n: 4, f: 'How many oxygen molecules are needed, and carbon dioxide made, from 4 glucose molecules?', b: 'The ratio is 1 glucose : 6 O₂ : 6 CO₂ : 6 H₂O, so 4 glucose need 24 oxygen molecules and give 24 carbon dioxide molecules.', src: RESP },
      { n: 5, f: 'Respiration vs breathing vs gas exchange', b: 'Respiration: chemical reactions in cells that release energy. Breathing: muscle movements that move air in and out of the lungs. Gas exchange: diffusion of oxygen and carbon dioxide across the alveoli.', src: RESP },
    ]),
    ...sub('respiration', 'anaerobic-respiration', '10.3', [
      { n: 1, f: 'Anaerobic respiration in humans and in yeast (word equations)', b: 'Humans (muscles): glucose → lactic acid.\nYeast: glucose → ethanol + carbon dioxide.' },
      { n: 2, f: 'Why does yeast release almost no gas at 60 °C?', b: 'The enzymes that control respiration are denatured, so the reactions stop.' },
      { n: 3, f: 'Why does lactic acid build up during vigorous exercise?', b: 'Oxygen cannot be supplied fast enough for aerobic respiration alone, so muscles also respire anaerobically and lactic acid builds up in the muscles and blood.' },
      { n: 4, f: 'Oxygen debt (EPOC)', b: 'The extra oxygen needed after vigorous exercise to break down the lactic acid that built up. EPOC: Excess Post-exercise Oxygen Consumption.' },
      { n: 5, f: 'How the oxygen debt is removed', b: 'A fast heart rate continues, transporting lactic acid from the muscles to the liver. Deeper and faster breathing continues, supplying oxygen for its breakdown in the liver.' },
    ]),

    // 11 Transport in humans
    ...sub('transport-in-humans', 'circulatory-system', '11.1', [
      { n: 1, f: 'Double circulation', b: 'Blood passes through the heart twice for each complete circuit of the body.' },
      { n: 2, f: 'Pulmonary circuit', b: 'Right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium. Low pressure.', src: TRH },
      { n: 3, f: 'Systemic circuit', b: 'Left ventricle → aorta → body organs → vena cava → right atrium. High pressure.', src: TRH },
    ]),
    ...sub('transport-in-humans', 'heart', '11.2', [
      { n: 1, f: 'Septum', b: 'Separates left and right sides, so oxygenated and deoxygenated blood do not mix.', src: TRH },
      { n: 2, f: 'Why is the left ventricle wall thicker than the right?', b: 'It pumps blood round the whole body at high pressure; the right ventricle pumps only to the nearby lungs.' },
      { n: 3, f: 'Valves during one heartbeat', b: 'Ventricles contract: atrioventricular valves close (no backflow to atria) and semilunar valves open. Ventricles relax: semilunar valves close (no backflow to ventricles).' },
      { n: 4, f: 'Coronary heart disease: cause and risk factors', b: 'A coronary artery is blocked (fatty deposits, clot), so heart muscle is short of oxygen and glucose. Risk factors: diet, sedentary lifestyle, stress, smoking, genetic predisposition, age, gender.' },
    ]),
    ...sub('transport-in-humans', 'blood-vessels', '11.3', [
      { n: 1, f: 'Artery vs vein vs capillary', b: 'Artery: high pressure, thick muscular elastic wall, narrow lumen, no valves.\nVein: low pressure, thin wall, wide lumen, valves.\nCapillary: wall one cell thick, short diffusion distance.' },
      { n: 2, f: 'Hepatic portal vein vs hepatic vein', b: 'Hepatic portal vein: small intestine → liver, rich in absorbed food.\nHepatic vein: liver → vena cava.' },
      { n: 3, f: 'Name the vessels taking blood into and out of the lungs, kidneys and liver', b: 'Lungs: pulmonary artery in, pulmonary vein out. Kidneys: renal artery in, renal vein out. Liver: hepatic artery and hepatic portal vein in, hepatic vein out.', src: 'cambridge-o-level-biology-5090-blood-vessels-revision-notes' },
      { n: 4, f: 'How is an artery\'s structure suited to its function?', b: 'The thick wall withstands high pressure. Elastic tissue stretches and recoils to smooth the surges, and muscle can change the width of the vessel.', src: 'cambridge-o-level-biology-5090-blood-vessels-revision-notes' },
      { n: 5, f: 'How is a vein\'s structure suited to its function?', b: 'Pressure is low, so a thin wall is enough. A wide lumen reduces resistance, valves prevent backflow, and body muscles squeeze the veins to push blood on.', src: 'cambridge-o-level-biology-5090-blood-vessels-revision-notes' },
    ]),
    ...sub('transport-in-humans', 'blood', '11.4', [
      { n: 1, f: 'Functions of the blood components', b: 'Red cells: oxygen transport. Lymphocytes: produce antibodies. Phagocytes: engulf pathogens. Platelets: clotting. Plasma: transports cells, ions, glucose, amino acids, hormones, carbon dioxide, urea, vitamins and plasma proteins.' },
      { n: 2, f: 'Blood clotting', b: 'Soluble fibrinogen is converted to insoluble fibrin threads, forming a clot that stops blood loss and the entry of pathogens.' },
      { n: 3, f: 'Tissue fluid', b: 'Fluid from plasma that is forced out of capillaries and bathes the cells. Oxygen, glucose and amino acids pass to the cells; carbon dioxide and urea pass back. Much of it returns to the capillaries.' },
    ]),

    // 12 Disease and immunity
    ...sub('disease-and-immunity', 'disease', '12.1', [
      { n: 1, f: 'Pathogen and transmissible disease (O Level)', b: 'Pathogen: a disease-causing organism.\nTransmissible disease: a disease in which the pathogen can be passed from one host to another.' },
      { n: 2, f: 'Direct contact (transmission)', b: 'Blood or other body fluids.', src: DIS },
      { n: 3, f: 'Indirect (transmission)', b: 'Contaminated surfaces or food, animals, the air.', src: DIS },
      { n: 4, f: 'Malaria: pathogen, vector and control', b: 'Pathogen: Plasmodium, a single-celled parasite. Vector: the female mosquito. Control: drain or cover still water, oil films, larva-eating fish, insecticides, treated bed nets, repellent.' },
      { n: 5, f: 'HIV: transmission', b: 'Unprotected sex, shared needles, infected blood transfusion, mother to baby (pregnancy, birth, breast milk).', src: DIS },
      { n: 6, f: 'How the cholera bacterium causes dehydration', b: 'Its toxin causes chloride ions to be secreted into the small intestine; the water potential of the gut contents falls; water moves into the gut by osmosis; diarrhoea causes dehydration and loss of ions.' },
      { n: 7, f: 'Effects of nicotine, tar and carbon monoxide in tobacco smoke', b: 'Nicotine: addictive; raises heart rate and blood pressure.\nTar: carcinogens; stops cilia working.\nCarbon monoxide: combines with haemoglobin, so less oxygen is carried.' },
    ]),
    ...sub('disease-and-immunity', 'antibiotics', '12.2', [
      { n: 1, f: 'Antibiotics and resistance', b: 'Antibiotics kill bacteria but do not affect viruses. Resistant bacteria (e.g. MRSA) survive and reproduce; resistance is minimised by using antibiotics only when essential.' },
      { n: 2, f: 'Define a drug and an antibiotic', b: 'A drug is any substance taken into the body that modifies or affects chemical reactions in the body. An antibiotic is a drug that kills bacteria, used to treat bacterial infections.', src: 'cambridge-o-level-biology-5090-antibiotics-revision-notes' },
      { n: 3, f: 'How does antibiotic resistance develop?', b: 'A chance mutation makes a bacterium resistant. The antibiotic kills the non-resistant bacteria; the resistant one survives, reproduces and passes on the gene. The resistant population grows.', src: 'cambridge-o-level-biology-5090-antibiotics-revision-notes' },
      { n: 4, f: 'How can the development of antibiotic resistance be minimised?', b: 'Use antibiotics only when essential, never for viral infections, and complete the prescribed course. Limit use in farming and keep up hospital hygiene to stop MRSA spreading.', src: 'cambridge-o-level-biology-5090-antibiotics-revision-notes' },
      { n: 5, f: 'In the inhibition zone practical, what does a clear zone round a disc show?', b: 'The bacteria cannot grow there. A larger zone means a more effective antibiotic; no zone means the bacteria are resistant.', src: 'cambridge-o-level-biology-5090-antibiotics-revision-notes' },
    ]),
    ...sub('disease-and-immunity', 'immunity', '12.3', [
      { n: 1, f: 'Active vs passive immunity', b: 'Active: defence by antibody production in the body; memory cells, long-term.\nPassive: short-term defence by antibodies acquired from another individual (across the placenta, in breast milk); no memory cells.' },
      { n: 2, f: 'How vaccination gives long-term immunity', b: 'Weakened pathogens or their antigens are given. The antigens stimulate lymphocytes to produce antibodies, and memory cells are produced, giving long-term immunity.' },
      { n: 3, f: 'How antibodies destroy pathogens', b: 'Antibodies with a shape complementary to the pathogen\'s antigens bind to them. This directly destroys the pathogen or marks it for destruction by phagocytes.' },
      { n: 4, f: 'Effect of HIV on the immune system', b: 'It reduces the number of lymphocytes, so fewer antibodies are produced and the immune system is weakened.' },
    ]),

    // 13 Excretion
    ...sub('excretion', 'excretion-content', '13.1', [
      { n: 1, f: 'Excretion (O Level definition)', b: 'The removal of toxic materials and the waste products of metabolism from organisms.' },
      { n: 2, f: 'Excretory products: where they are made and how they are excreted', b: 'Carbon dioxide: made by respiration in every cell; excreted by the lungs.\nUrea: made in the liver by deamination; excreted by the kidneys in urine (with excess salts and water).' },
      { n: 3, f: 'Deamination', b: 'Removal of the nitrogen-containing part of excess amino acids, in the liver, forming urea.' },
      { n: 4, f: 'Why must urea be excreted? (O Level)', b: 'Urea is toxic. The liver keeps making it, so without excretion its concentration in the blood would rise and damage cells.' },
      { n: 5, f: 'What happens to amino acids absorbed from the small intestine?', b: 'They reach the liver in the hepatic portal vein. Those needed are assimilated into proteins (e.g. plasma proteins); the excess cannot be stored, so they are deaminated.' },
    ]),
    ...sub('excretion', 'urinary-system', '13.2', [
      { n: 1, f: 'Kidney, ureter, bladder and urethra: number and function', b: 'Kidneys (2): remove urea, excess salts and water as urine. Ureters (2): kidney to bladder. Bladder (1): stores urine. Urethra (1): bladder to outside.' },
      { n: 2, f: 'Route of fluid through a nephron', b: "Bowman's capsule → first coiled tubule → loop of Henle → second coiled tubule → collecting duct → ureter. The glomerulus is the knot of capillaries inside the capsule." },
      { n: 3, f: 'What happens in the nephron (outline)', b: "Filtration at the glomerulus: water, glucose, urea and ions enter the Bowman's capsule; blood cells and large proteins stay in the blood. Reabsorption: all the glucose, some ions and most water return to the blood. Urea, excess water and ions form urine." },
      { n: 4, f: 'Why is urea more concentrated in urine than in plasma?', b: 'Urea is filtered but not reabsorbed, while most of the water is reabsorbed, so the urea is left in a much smaller volume of water.' },
    ]),

    // 14 Coordination and control
    ...sub('coordination-and-control', 'mammalian-nervous-system', '14.1', [
      { n: 1, f: 'Reflex arc (O Level)', b: 'Receptor → sensory neurone → relay neurone → motor neurone → effector (muscle or gland). A reflex action is a rapid and automatic response to a stimulus.' },
      { n: 2, f: 'Events at a synapse (O Level)', b: 'An impulse arrives; neurotransmitter is released from vesicles into the gap; it diffuses across and binds with receptor proteins on the next neurone; an impulse is stimulated there. One way only: vesicles on one side, receptors on the other.' },
      { n: 3, f: 'CNS vs PNS, and the three types of neurone', b: 'CNS: brain and spinal cord. PNS: nerves outside them. Sensory neurones carry impulses from receptor to CNS, relay neurones link within the CNS, motor neurones carry them from CNS to effector.', src: 'cambridge-o-level-biology-5090-mammalian-nervous-system-revision-notes' },
      { n: 4, f: 'Why are reflex actions fast?', b: 'The pathway is short with few synapses, and the response is automatic, so no decision by the brain is needed. Reflexes protect the body, e.g. pulling a hand from heat.', src: 'cambridge-o-level-biology-5090-mammalian-nervous-system-revision-notes' },
      { n: 5, f: 'An impulse travels 1.2 m to the spinal cord and 1.2 m back at 80 m/s. How long does it take?', b: 'Distance = 2.4 m. Time = 2.4 ÷ 80 = 0.03 s. The synapses add a little more time.', src: 'cambridge-o-level-biology-5090-mammalian-nervous-system-revision-notes' },
    ]),
    ...sub('coordination-and-control', 'mammalian-sense-organs', '14.2', [
      { n: 1, f: 'Functions of the cornea, lens, retina and fovea', b: 'Cornea: refracts light. Lens: focuses light onto the retina. Retina: light receptors, some sensitive to different colours. Fovea: greatest density of light receptors.' },
      { n: 2, f: 'Pupil reflex in bright light', b: 'Circular muscles of the iris contract and radial muscles relax, so the pupil constricts and less light enters. (In dim light the reverse: radial contract, pupil dilates.)' },
      { n: 3, f: 'Accommodation: focusing on a near object', b: 'Ciliary muscles contract, suspensory ligaments slacken, the lens becomes fatter and refracts light more. For a distant object: muscles relax, ligaments taut, lens thinner.' },
    ]),
    ...sub('coordination-and-control', 'mammalian-hormones', '14.3', [
      { n: 1, f: 'Hormones from the pituitary, pancreas and adrenal glands', b: 'Pituitary: FSH and LH. Pancreas: insulin and glucagon. Adrenal glands: adrenaline.' },
      { n: 2, f: 'Effects of adrenaline', b: 'Released in fear, stress or excitement. It raises the blood glucose concentration and the heart rate, so more glucose and oxygen reach the muscles for respiration.' },
      { n: 3, f: 'Define a hormone', b: 'A chemical substance, produced by a gland and carried by the blood, which alters the activity of one or more specific target organs.', src: 'cambridge-o-level-biology-5090-mammalian-hormones-revision-notes' },
      { n: 4, f: 'Nervous vs hormonal control', b: 'Nervous: electrical impulses along neurones, very fast, short-lived. Hormonal: chemicals in the blood, slower and longer-lasting, because hormones must reach the target organ and stay until broken down.', src: 'cambridge-o-level-biology-5090-mammalian-hormones-revision-notes' },
      { n: 5, f: 'Which hormones do the testes and ovaries make?', b: 'Testes: testosterone. Ovaries: oestrogen and progesterone.', src: 'cambridge-o-level-biology-5090-mammalian-hormones-revision-notes' },
    ]),
    ...sub('coordination-and-control', 'homeostasis', '14.4', [
      { n: 1, f: 'Negative feedback (O Level)', b: 'A change away from the set point triggers a response that returns the value towards the set point.' },
      { n: 2, f: 'Define homeostasis', b: 'The maintenance of a constant internal environment, meaning the blood and tissue fluid surrounding the cells.', src: 'cambridge-o-level-biology-5090-homeostasis-revision-notes' },
      { n: 3, f: 'Parts of a negative feedback loop', b: 'Receptor: detects the change from the set point. Control centre: compares it with the set point (the hypothalamus for temperature). Effector: carries out the corrective response, which reverses the change.', src: 'cambridge-o-level-biology-5090-homeostasis-revision-notes' },
      { n: 4, f: 'Why is homeostasis important?', b: 'Enzymes work best at an optimum temperature and pH. Cells need a steady glucose supply and the right water content to avoid osmosis swelling or shrinking them.', src: 'cambridge-o-level-biology-5090-homeostasis-revision-notes' },
      { n: 5, f: 'How does a thermostat illustrate negative feedback?', b: 'The set temperature is the set point, the thermometer is the receptor, the switch is the control centre and the heater is the effector. The room warms, so the heater switches off.', src: 'cambridge-o-level-biology-5090-homeostasis-revision-notes' },
    ]),
    ...sub('coordination-and-control', 'temperature-control', '14.5', [
      { n: 1, f: 'Responses to overheating (O Level)', b: 'Sweating: water evaporates, transferring heat away. Hair erector muscles relax, hairs lie flat. Vasodilation: skin arterioles widen, so more heat is lost by radiation. Coordinated by the hypothalamus.' },
      { n: 2, f: 'Responses to getting too cold (O Level)', b: 'Shivering: respiration in contracting muscles releases heat. Hair erector muscles contract, hairs trap air. Vasoconstriction: skin arterioles narrow, so less heat is lost.' },
      { n: 3, f: 'Which structures detect, control and carry out temperature regulation?', b: 'Receptors in the skin and brain detect changes. The hypothalamus is the control centre. Effectors are sweat glands, skeletal muscles, hair erector muscles and skin arterioles.', src: 'cambridge-o-level-biology-5090-temperature-control-revision-notes' },
      { n: 4, f: 'Why does sweating cool the body?', b: 'Evaporating water needs energy, and this energy is taken from the skin, so the skin cools.', src: 'cambridge-o-level-biology-5090-temperature-control-revision-notes' },
      { n: 5, f: 'What does insulation do in the skin?', b: 'Fatty tissue and hair reduce heat loss, and trapped air is a poor conductor of heat. Insulation does not produce heat; it only slows heat loss.', src: 'cambridge-o-level-biology-5090-temperature-control-revision-notes' },
    ]),
    ...sub('coordination-and-control', 'blood-glucose-control', '14.6', [
      { n: 1, f: 'How blood glucose concentration is controlled', b: 'High: pancreas secretes insulin; the liver converts glucose to glycogen; level falls.\nLow: pancreas secretes glucagon; the liver converts glycogen to glucose; level rises.' },
      { n: 2, f: 'Type 1 diabetes: signs and treatment', b: 'Signs: increased blood glucose concentration and glucose in the urine. Treatment: administration of insulin.' },
      { n: 3, f: 'Why must blood glucose concentration be controlled?', b: 'Too low: not enough glucose for respiration, so the brain and muscles lack energy. Too high: it upsets the water balance of cells by osmosis and glucose is lost in the urine.', src: 'cambridge-o-level-biology-5090-blood-glucose-control-revision-notes' },
      { n: 4, f: 'Why is insulin injected rather than swallowed?', b: 'Insulin is a protein. If swallowed it would be digested.', src: 'cambridge-o-level-biology-5090-blood-glucose-control-revision-notes' },
      { n: 5, f: 'Why does glucose appear in the urine in Type 1 diabetes?', b: 'Blood glucose is so high that the kidney tubules cannot reabsorb all of it, so some passes out in the urine.', src: 'cambridge-o-level-biology-5090-blood-glucose-control-revision-notes' },
    ]),

    // 15 Coordination and response in plants
    ...sub('coordination-and-response-in-plants', 'coordination-and-response-in-plants-content', '15.1', [
      { n: 1, f: 'Phototropism and gravitropism (O Level)', b: 'Phototropism: a response in which parts of a plant grow towards or away from light.\nGravitropism: a response in which parts of a plant grow towards or away from gravity.' },
      { n: 2, f: 'Responses of shoots and roots to gravity and light', b: 'Shoot: away from gravity (negatively gravitropic), towards light (positively phototropic).\nRoot: towards gravity (positively gravitropic).' },
      { n: 3, f: 'The four syllabus points about auxin', b: 'Made in the shoot tip; spreads through the plant from the shoot tip; unequally distributed in response to light and gravity; stimulates cell elongation.' },
      { n: 4, f: 'Why does a shoot lit from one side bend towards the light?', b: 'More auxin collects on the shaded side; cells there elongate more than on the lit side, so the shaded side grows longer and the shoot bends towards the light.' },
      { n: 5, f: 'Why does a horizontal shoot curve upwards?', b: 'Gravity causes more auxin on the lower side; lower-side cells elongate more, so the shoot curves upwards, away from gravity.' },
      { n: 6, f: 'A shoot tip is covered with a light-proof cap and lit from one side. Result?', b: 'It grows straight up. Auxin is still made but is not unequally distributed, so all sides elongate equally.' },
      { n: 7, f: 'Clinostat', b: 'A device that slowly rotates seedlings so gravity (or one-sided light) acts on all sides equally. It is the control in a gravitropism investigation.' },
      { n: 8, f: 'Why is a gravitropism investigation kept in the dark?', b: 'So light cannot cause a response: gravity must be the only one-sided stimulus.' },
    ]),

    // 16 Development of organisms and continuity of life
    ...sub('development-of-organisms-and-continuity-of-life', 'nuclear-division', '16.1', [
      { n: 1, f: 'Mitosis v meiosis', b: 'Same number and identical v halved and different.', src: DEV },
      { n: 2, f: 'Roles of mitosis and of meiosis', b: 'Mitosis: growth, repair, replacing dying cells, asexual reproduction.\nMeiosis: making gametes.' },
      { n: 3, f: 'Stem cells', b: 'Unspecialised cells that divide by mitosis to give daughter cells that can become specialised.', src: DEV },
      { n: 4, f: 'Diploid nucleus', b: 'Two sets of chromosomes; a pair of each type. Human diploid cells: 23 pairs.', src: DEV },
    ]),
    ...sub('development-of-organisms-and-continuity-of-life', 'asexual-and-sexual-reproduction', '16.2', [
      { n: 1, f: 'Asexual vs sexual reproduction: one advantage of each', b: 'Asexual: no mate or pollinator needed; fast; good features kept.\nSexual: variation, so the population can respond to environmental change.' },
      { n: 2, f: 'Define asexual reproduction', b: 'A process resulting in the production of genetically identical offspring from one parent. Offspring are clones, and nuclear division is by mitosis.', src: 'cambridge-o-level-biology-5090-asexual-and-sexual-reproduction-revision-notes' },
      { n: 3, f: 'Define sexual reproduction', b: 'The fusion of haploid nuclei (fertilisation) to form a diploid zygote, producing genetically different offspring. Haploid gametes are made by meiosis.', src: 'cambridge-o-level-biology-5090-asexual-and-sexual-reproduction-revision-notes' },
      { n: 4, f: 'Give examples of asexual reproduction in bacteria, yeast, strawberry, potato and onion', b: 'Bacteria: binary fission. Yeast: budding. Strawberry: runners. Potato: tubers. Onion and daffodil: bulbs. Gardeners also use cuttings.', src: 'cambridge-o-level-biology-5090-asexual-and-sexual-reproduction-revision-notes' },
      { n: 5, f: 'Disadvantages of asexual and of sexual reproduction', b: 'Asexual: no variation, so a whole population is at risk from one disease or change. Sexual: needs two parents and a mate, is slower, uses more energy and gives fewer offspring.', src: 'cambridge-o-level-biology-5090-asexual-and-sexual-reproduction-revision-notes' },
    ]),
    ...sub('development-of-organisms-and-continuity-of-life', 'sexual-reproduction-in-plants', '16.3', [
      { n: 1, f: 'Pollination v fertilisation', b: 'Moving pollen v fusing nuclei.', src: DEV },
      { n: 2, f: 'Insect- vs wind-pollinated flowers (O Level)', b: 'Insect: large coloured scented petals, nectar; anthers and sticky stigma inside; larger sticky or spiky pollen.\nWind: small dull petals; anthers on long filaments and feathery stigmas outside; small light smooth pollen in huge amounts.' },
      { n: 3, f: 'From pollen to seed', b: 'Pollen lands on the stigma; a pollen tube grows down the style and enters an ovule through the micropyle; the male nucleus fuses with the female nucleus. The ovule becomes the seed; the ovary becomes the fruit.' },
      { n: 4, f: 'Germination: conditions and what water does', b: 'Water, oxygen and a suitable temperature (not light). Water activates enzymes: amylase breaks starch to maltose and proteases break protein to amino acids, for respiration and growth of the embryo.' },
    ]),
    ...sub('development-of-organisms-and-continuity-of-life', 'sexual-reproduction-in-humans', '16.4', [
      { n: 1, f: 'Sperm', b: 'Flagellum (swims); mitochondria (energy for swimming); acrosome enzymes (digest jelly coat).', src: DEV },
      { n: 2, f: 'Menstrual cycle hormones: FSH, LH, oestrogen and progesterone', b: 'FSH (pituitary): egg develops; ovary makes oestrogen. Oestrogen: rebuilds lining; inhibits FSH; triggers LH. LH (pituitary): ovulation. Progesterone (empty follicle): keeps lining thick; inhibits FSH and LH.' },
      { n: 3, f: 'Placenta', b: 'O₂ and dissolved nutrients to fetus; CO₂ and urea to mother. Bloods do not mix.', src: DEV },
    ]),

    // 17 Inheritance
    ...sub('inheritance', 'variation', '17.1', [
      { n: 1, f: 'Continuous v discontinuous', b: 'Range v categories; genes and environment v genes only.', src: INH },
      { n: 2, f: 'Gene mutation v chromosome mutation', b: 'Base sequence v chromosome number or structure.', src: INH },
      { n: 3, f: 'Sickle cell anaemia and Down\'s syndrome', b: "Sickle cell anaemia: a gene mutation in the haemoglobin gene changes the amino acid sequence and the haemoglobin shape.\nDown's syndrome: a chromosome mutation, 47 chromosomes instead of 46." },
    ]),
    ...sub('inheritance', 'dna', '17.2', [
      { n: 1, f: 'Structure of DNA (O Level)', b: 'Two strands coiled into a double helix. Each strand is a chain of nucleotides, each with a base (A, T, C or G). Bonds between pairs of bases hold the strands together: A with T, C with G.' },
      { n: 2, f: 'In a DNA molecule 18% of bases are G. What percentage are A?', b: 'C = 18%, so A + T = 100 − 36 = 64%, and A = 32%.' },
      { n: 3, f: 'How does DNA control the cell?', b: 'A gene is a length of DNA that codes for a protein. Its base sequence sets the amino acid sequence, which sets the protein\'s shape and function. DNA controls cell function by controlling protein production, including enzymes.' },
    ]),
    ...sub('inheritance', 'inheritance-content', '17.3', [
      { n: 1, f: 'Allele', b: 'An alternative form of a gene.', src: INH },
      { n: 2, f: 'Codominance', b: 'Both alleles in a heterozygote are expressed in the phenotype.', src: INH },
      { n: 3, f: 'Phenotypic ratios from Tt × Tt and Tt × tt', b: 'Tt × Tt: 1 TT : 2 Tt : 1 tt, so 3 dominant : 1 recessive.\nTt × tt: 1 Tt : 1 tt, so 1 dominant : 1 recessive.' },
      { n: 4, f: 'Why do observed ratios often differ from expected ones?', b: 'Fertilisation is random, so a ratio is a probability. Small numbers of offspring often give ratios far from 3 : 1 or 1 : 1; larger samples come closer.' },
      { n: 5, f: 'ABO blood group genotypes', b: 'A: IᴬIᴬ or IᴬIᵒ. B: IᴮIᴮ or IᴮIᵒ. AB: IᴬIᴮ. O: IᵒIᵒ. Iᴬ and Iᴮ are codominant; Iᵒ is recessive to both.' },
    ]),
    ...sub('inheritance', 'selection', '17.4', [
      { n: 1, f: 'Natural v artificial selection', b: 'Environment selects v humans select.', src: INH },
      { n: 2, f: 'Five points that explain natural selection', b: 'Variation in the population; many offspring; a struggle for survival with competition for resources; better-adapted individuals survive and reproduce; they pass on their alleles.', src: INH },
      { n: 3, f: 'How do antibiotic-resistant bacteria such as MRSA arise?', b: 'Mutation gives a few bacteria resistance. The antibiotic kills the non-resistant ones, the resistant ones survive and reproduce, and the resistance allele is passed on to give a resistant strain.', src: INH },
      { n: 4, f: 'Four points of artificial selection', b: 'Humans select individuals with desirable features, cross them, select offspring with the desirable features, and repeat over many generations.', src: INH },
      { n: 5, f: 'What is artificial selection used for?', b: 'Producing economically important plants and animals, such as high-yield or disease-resistant crops and cattle with high milk yield.', src: INH },
    ]),

    // 18 Biotechnology and genetic modification
    ...sub('biotechnology-and-genetic-modification', 'biotechnology', '18.1', [
      { n: 1, f: 'Biotechnology (O Level)', b: 'Using living organisms, or their enzymes, to make useful products.' },
      { n: 2, f: 'Yeast in bread vs ethanol production', b: 'Both use anaerobic respiration: glucose → ethanol + carbon dioxide. Bread uses the carbon dioxide (bubbles make dough rise; most ethanol evaporates in baking). Ethanol production uses the ethanol, for drinks or fuel.' },
      { n: 3, f: 'Four reasons bacteria are useful in biotechnology', b: 'Rapid reproduction rate; they make complex molecules (e.g. human insulin); no ethical concerns over their manipulation and growth; plasmids, into which a gene can be inserted.' },
      { n: 4, f: 'A bacterium divides every 20 minutes. How many cells from one cell in 80 minutes?', b: '80 ÷ 20 = 4 divisions; 2⁴ = 16 cells.' },
      { n: 5, f: 'Five conditions controlled in a fermenter', b: 'Temperature (cooling water jacket: respiration releases heat), pH (probe, add acid or alkali), oxygen (sterile air, paddles), nutrient supply, and removal of waste products.' },
      { n: 6, f: 'Enzymes in washing powder, fruit juice and lactose-free milk', b: 'Washing powder: proteases and lipases digest stains at lower temperatures.\nFruit juice: pectinase breaks down pectin in cell walls, giving more and clearer juice.\nLactase: lactose → glucose + galactose.' },
    ]),
    ...sub('biotechnology-and-genetic-modification', 'genetic-modification', '18.2', [
      { n: 1, f: 'Genetic modification (O Level)', b: 'Changing the genetic material of an organism by removing, changing or inserting individual genes.' },
      { n: 2, f: 'How GM bacteria produce human insulin', b: 'The gene for human insulin is inserted into bacterial DNA. The bacteria multiply in fermenters and make human insulin, which is extracted for people with diabetes.' },
      { n: 3, f: 'Three reasons genes are inserted into crop plants', b: 'Resistance to herbicides, resistance to insect pests, and additional vitamins (e.g. Golden Rice makes beta-carotene, converted to vitamin A).' },
      { n: 4, f: 'Advantages and risks of GM crops', b: 'Advantages: higher yields, less insecticide used, more nutritious crops.\nRisks: genes spread to wild relatives by pollen, pests become resistant to the toxin, non-pest insects harmed, seed costs for farmers.' },
    ]),

    // 19 Relationships of organisms with one another and with the environment
    ...sub('relationships-of-organisms-with-one-another-and-with-the-environment', 'energy-flow', '19.1', [
      { n: 1, f: 'Energy flow through an ecosystem (O Level)', b: 'The Sun is the principal energy source. Photosynthesis brings light energy into food chains as chemical energy. Energy flows one way and is eventually transferred to the environment as heat; it is not recycled.' },
      { n: 2, f: 'Producer, consumer and decomposer (O Level)', b: 'Producer: makes its own organic nutrients, usually by photosynthesis. Consumer: gets energy by feeding on other organisms. Decomposer: gets energy from dead or waste organic material.' },
      { n: 3, f: 'Reasons energy is lost between trophic levels', b: 'Parts not eaten; parts eaten but not digested (faeces); energy released in respiration and lost as heat; energy used for movement; some lost in excretory products.' },
      { n: 4, f: 'Wheat contains 1500 kJ and mice eating it 120 kJ. Efficiency of transfer?', b: '120 ÷ 1500 × 100 = 8%.' },
      { n: 5, f: 'Pyramids of numbers, biomass and energy: can they be inverted?', b: 'Numbers: yes (one tree, many insects). Biomass: rarely. Energy: never, because energy is lost at every transfer.' },
    ]),
    ...sub('relationships-of-organisms-with-one-another-and-with-the-environment', 'nutrient-cycles', '19.2', [
      { n: 1, f: 'Carbon cycle processes that add carbon dioxide to the air', b: 'Respiration (by plants, animals and decomposers), decomposition and combustion of fossil fuels and wood. Photosynthesis removes it.' },
      { n: 2, f: 'Nitrogen fixation, nitrification and denitrification', b: 'Fixation: nitrogen gas → compounds plants can use (lightning or nitrogen-fixing bacteria).\nNitrification: ammonium ions → nitrate ions (nitrifying bacteria).\nDenitrification: nitrate ions → nitrogen gas (denitrifying bacteria).' },
      { n: 3, f: 'How do decomposers break down dead matter, and what makes it faster?', b: 'Fungi and bacteria release enzymes onto dead matter, which digest it to soluble molecules that are absorbed. They respire, releasing carbon dioxide. It is faster when warm, moist and with oxygen.', src: 'cambridge-o-level-biology-5090-nutrient-cycles-revision-notes' },
      { n: 4, f: 'Why do plants grow poorly in waterlogged soil?', b: 'Denitrification increases, so nitrate ions fall, plants make less protein and grow poorly.', src: 'cambridge-o-level-biology-5090-nutrient-cycles-revision-notes' },
      { n: 5, f: 'Why can legumes grow in poor soil and enrich it?', b: 'Nitrogen-fixing bacteria in the root nodules provide nitrogen compounds. When the legumes decay, the nitrogen compounds return to the soil.', src: 'cambridge-o-level-biology-5090-nutrient-cycles-revision-notes' },
    ]),
    ...sub('relationships-of-organisms-with-one-another-and-with-the-environment', 'ecosystems-and-biodiversity', '19.3', [
      { n: 1, f: 'Population, community, ecosystem and biodiversity', b: 'Population: one species, same area, same time. Community: all the populations of different species in an ecosystem. Ecosystem: the community and its environment interacting. Biodiversity: the number of different species in an area.' },
      { n: 2, f: 'Factors affecting the growth of a population', b: 'Food supply, competition, predation and disease. Births and immigration increase a population; deaths and emigration decrease it.', src: 'cambridge-o-level-biology-5090-ecosystems-and-biodiversity-revision-notes' },
      { n: 3, f: 'Describe the three phases of a population growth curve', b: 'A slow start with few individuals, a rapid increase while resources are plentiful, then levelling off as food, competition, predation and disease limit growth.', src: 'cambridge-o-level-biology-5090-ecosystems-and-biodiversity-revision-notes' },
      { n: 4, f: 'Describe the predator and prey population pattern', b: 'Prey increase, so predators have more food and increase later. More predators eat more prey, so prey fall, then predators fall. The cycle repeats, with the predator peak following the prey peak.', src: 'cambridge-o-level-biology-5090-ecosystems-and-biodiversity-revision-notes' },
      { n: 5, f: 'Why is the human population growing, and what are the consequences?', b: 'Death rates have fallen through better food, medicine and sanitation. Demand for food, land, water and energy rises, causing deforestation, pollution and loss of habitats and biodiversity.', src: 'cambridge-o-level-biology-5090-ecosystems-and-biodiversity-revision-notes' },
    ]),
    ...sub('relationships-of-organisms-with-one-another-and-with-the-environment', 'effects-of-humans-on-ecosystems', '19.4', [
      { n: 1, f: 'Non-native species', b: 'No natural predators or diseases; spreads fast; out-competes or eats native species.', src: REL },
      { n: 2, f: 'Eutrophication chain (O Level)', b: 'More nitrate and other ions → more growth of producers → more decomposition when they die → more aerobic respiration by decomposers → less dissolved oxygen → organisms that need dissolved oxygen die.' },
      { n: 3, f: 'Five consequences of deforestation', b: 'Loss of biodiversity, extinction of species, loss of soil (no roots to hold it), flooding, and a higher carbon dioxide concentration (less photosynthesis; burning releases carbon dioxide).', src: REL },
      { n: 4, f: 'What is over-harvesting and what are its effects?', b: 'Species are removed faster than they reproduce. Populations fall and may become extinct, and food webs are disrupted.', src: REL },
      { n: 5, f: 'Effects of greenhouse gases such as carbon dioxide and methane', b: 'They trap heat, contributing to global warming. Likely effects include rising sea levels, more extreme weather and changes in species distribution.', src: REL },
      { n: 6, f: 'Harmful effects of insecticides, herbicides and non-biodegradable plastics', b: 'Insecticides kill non-target insects such as pollinators and harm animals that eat them. Herbicides kill non-target plants. Plastics persist, so animals are entangled or swallow them.', src: REL },
    ]),
    ...sub('relationships-of-organisms-with-one-another-and-with-the-environment', 'conservation', '19.5', [
      { n: 1, f: 'Sustainable resource', b: 'One produced as rapidly as it is removed from the environment, so that it does not run out.', src: REL },
      { n: 2, f: 'Fish stocks', b: 'Education, closed seasons, protected areas, controlled net types and mesh size, quotas, monitoring.', src: REL },
      { n: 3, f: 'Why conserve species and habitats?', b: 'To maintain biodiversity, reduce extinction and protect vulnerable environments.', src: REL },
      { n: 4, f: 'Conservation measures for forests and for fish stocks', b: 'Forests: education, protected areas, quotas, replanting. Fish stocks: education, closed seasons, protected areas, controlled net types and mesh size, quotas, monitoring.', src: REL },
      { n: 5, f: 'What is a sustainable resource?', b: 'One that is produced as rapidly as it is removed from the environment, so that it does not run out.', src: REL },
    ]),
  ],
};
