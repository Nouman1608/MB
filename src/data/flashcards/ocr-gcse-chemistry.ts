/**
 * D-438 -- flashcards for OCR GCSE (9-1) Chemistry A (Gateway Science) J248
 * (Version 4.0, August 2026, for first assessment in 2018).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: Higher Tier only content, following the Higher Tier
 *               marks on Marlbridge's own J248 revision notes. Foundation
 *               candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs J248); origin 'revision-notes'.
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

const PM = 'ocr-gcse-chemistry-the-particle-model-revision-notes';
const ATOM = 'gcse-chemistry-atomic-structure-revision-notes';
const PURE = 'ocr-gcse-chemistry-purity-separating-revision-notes';
const BOND = 'ocr-gcse-chemistry-bonding-revision-notes';
const ELEC = 'ocr-gcse-chemistry-electrolysis-revision-notes';
const IDENT = 'ocr-gcse-chemistry-identifying-products-of-reactions-revision-notes';

const C1 = 'topic-c1-particles-j248';
const C2 = 'topic-c2-elements-compounds-mixtures-j248';
const C3 = 'topic-c3-chemical-reactions-j248';
const C4 = 'topic-c4-predicting-identifying-reactions-j248';
const C5 = 'topic-c5-monitoring-controlling-reactions-j248';
const C6 = 'topic-c6-global-challenges-j248';

export const DECK_OCR_GCSE_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'gcse',
  subjectSlug: 'chemistry',
  syllabusCode: 'J248',
  syllabusSeries: 'Version 4.0 (August 2026), for first assessment in 2018',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // C1 Particles
    ...sub(C1, 'c1-1-particle-model-j248', 'C1.1', [
      { n: 1, f: 'Particle model', b: 'Everything is built from tiny particles, which may be atoms, molecules or ions. Their arrangement, movement and spacing explain the states of matter.', src: PM },
      { n: 2, f: 'Particles in a solid, a liquid and a gas: arrangement and movement', b: 'Solid: regular, touching, vibrate in place.\nLiquid: random, close (mostly touching), slide past each other.\nGas: random, far apart, move fast in all directions. The gaps between gas particles are empty space.' },
      { n: 3, f: 'Which changes of state take in energy, and which give it out?', b: 'Taken in: melting, boiling or evaporating, subliming.\nGiven out: freezing, condensing.\nMass stays the same, because no particles are gained or lost.' },
      { n: 4, f: 'Physical change', b: 'The particles stay the same. No new substance forms.', src: PM },
      { n: 5, f: 'Chemical change', b: 'Atoms are rearranged into new particles. At least one new substance forms.', src: PM },
      { n: 6, f: 'Is "it can be reversed" enough to call a change physical?', b: 'No. Some chemical changes can be reversed. The test is whether new particles, and so new substances, form.' },
      { n: 7, f: 'A substance has mp 6 °C and bp 81 °C. What state is it in at 2 °C, 25 °C and 95 °C?', b: 'Below the mp: solid at 2 °C.\nBetween mp and bp: liquid at 25 °C.\nAbove the bp: gas at 95 °C.' },
      { n: 8, f: 'What does the inelastic sphere model of particles not take into account?', b: 'The forces of attraction between particles, the size of the particles, and the space between them (gases are drawn far too crowded).', u: true },
      { n: 9, f: 'A gas takes up 1000 times the volume of the same mass of liquid. How much further apart are its particles?', b: 'About the cube root: ∛1000 = 10 times further apart.', u: true },
    ]),
    ...sub(C1, 'c1-2-atomic-structure-j248', 'C1.2', [
      { n: 1, f: "Thomson's model of the atom", b: 'Plum pudding: electrons embedded in positive charge.', src: ATOM },
      { n: 2, f: "Rutherford's model of the atom", b: 'Nuclear model: a small, dense, positive nucleus, with the atom mostly empty space.', src: ATOM },
      { n: 3, f: "Bohr's contribution to the model of the atom", b: 'Electrons in fixed shells at set distances from the nucleus.', src: ATOM },
      { n: 4, f: "Chadwick's contribution to the model of the atom", b: 'Discovery of the neutron.', src: ATOM },
      { n: 5, f: 'Alpha scattering: three observations and the conclusion from each', b: 'Most passed straight through → the atom is mostly empty space.\nSome were deflected → the nucleus is positively charged.\nA very few bounced back → the nucleus is very small but contains most of the mass.' },
      { n: 6, f: 'Relative mass, charge and location of protons, neutrons and electrons', b: 'Proton: mass 1, charge +1, nucleus.\nNeutron: mass 1, charge 0, nucleus.\nElectron: very small mass, charge −1, shells.' },
      { n: 7, f: 'Isotopes, and why they react identically', b: 'Atoms with the same number of protons but different numbers of neutrons. Chemical behaviour depends on the electrons, which are the same.' },
      { n: 8, f: 'Protons, neutrons and electrons in a sodium-23 atom (atomic number 11)', b: '11 protons, 23 − 11 = 12 neutrons, 11 electrons.' },
      { n: 9, f: 'Typical radius of an atom', b: 'About 10⁻¹⁰ m (0.1 nm).' },
    ]),

    // C2 Elements, compounds and mixtures
    ...sub(C2, 'c2-1-purity-separating-mixtures-j248', 'C2.1', [
      { n: 1, f: 'Pure substance (chemical sense), and how melting point shows purity', b: 'A single chemical substance. A pure substance melts and boils at a single, sharp temperature; impurities lower the melting point and widen its range. "Pure" fruit juice is a mixture.' },
      { n: 2, f: 'Filtration separates…', b: 'An insoluble solid from a liquid.', src: PURE },
      { n: 3, f: 'Crystallisation separates…', b: 'A dissolved solid from its solvent: evaporate the solvent and the solid remains.', src: PURE },
      { n: 4, f: 'Simple distillation vs fractional distillation', b: 'Simple: a liquid from dissolved solids, or liquids with very different boiling points.\nFractional: miscible liquids with similar boiling points; needs a fractionating column.' },
      { n: 5, f: 'Rf value, and the Rf of a spot that moves 3.2 cm when the solvent front moves 8.0 cm', b: 'Rf = distance travelled by spot ÷ distance travelled by solvent.\n3.2 ÷ 8.0 = 0.4' },
      { n: 6, f: 'How does a chromatogram show purity, and when can Rf values be compared?', b: 'A pure substance gives a single spot; an impure sample gives several. Compare Rf values only under the same conditions (same solvent, paper, temperature), ideally on the same chromatogram.' },
      { n: 7, f: 'A compound contains 2.4 g of carbon and 0.6 g of hydrogen. Empirical formula?', b: 'C: 2.4 ÷ 12 = 0.2. H: 0.6 ÷ 1 = 0.6.\nDivide by 0.2: 1 : 3, so CH₃.' },
      { n: 8, f: 'How do you recover dry sand and dry salt from a mixture of sand and salt water?', b: 'Filter: the insoluble sand stays on the paper. Then crystallise the filtrate: heat to evaporate water until crystals form, cool and dry.' },
    ]),
    ...sub(C2, 'c2-2-bonding-j248', 'C2.2', [
      { n: 1, f: 'Ion', b: 'An atom or group of atoms with a charge, because electrons have been lost or gained. Protons never change.', src: BOND },
      { n: 2, f: 'Ionic bond', b: 'The electrostatic pull holding positive and negative ions together, acting in all directions.', src: BOND },
      { n: 3, f: 'Covalent bond', b: 'An electron pair held between two non-metal atoms, with both nuclei pulling on it.', src: BOND },
      { n: 4, f: 'Metallic bond', b: 'Positive metal ions in a regular lattice pulled towards the delocalised electrons that surround them.', src: BOND },
      { n: 5, f: 'Lone pair', b: 'A pair of outer electrons on one atom that is not shared.', src: BOND },
      { n: 6, f: 'Ion charges from the group number', b: 'Groups 1, 2, 3: +1, +2, +3.\nGroups 5, 6, 7: −3, −2, −1.' },
      { n: 7, f: 'Deduce the formula of calcium nitride', b: 'Each Ca loses 2 electrons; each N gains 3. Lowest common number 6: 3 Ca²⁺ and 2 N³⁻, so Ca₃N₂.' },
      { n: 8, f: 'Metal oxides vs non-metal oxides', b: 'Metal oxides are basic (they neutralise acids; soluble ones are alkaline), e.g. Li₂O.\nNon-metal oxides are acidic, e.g. CO₂.' },
      { n: 9, f: 'What a dot and cross diagram does not show', b: 'The 3D shape, that all electrons are identical, and the relative sizes of the atoms or ions.' },
    ]),
    ...sub(C2, 'c2-3-properties-of-materials-j248', 'C2.3', [
      { n: 1, f: 'Why does carbon form so many compounds?', b: 'It forms four covalent bonds, it bonds strongly to other carbon atoms, so it makes chains (straight or branched) and rings, and families of similar compounds differing by CH₂.' },
      { n: 2, f: 'Diamond: bonding and properties', b: 'Each carbon bonded to 4 others in a giant 3D tetrahedral network. Very hard, very high melting point; does not conduct (no delocalised electrons).' },
      { n: 3, f: 'Graphite: bonding and properties', b: 'Each carbon bonded to 3 others in stacked hexagonal layers. Soft and slippery (weak forces between layers); conducts along the layers (one delocalised electron per carbon).' },
      { n: 4, f: 'Graphene and fullerenes', b: 'Graphene: a single graphite sheet; very strong and conducts.\nFullerenes: molecules such as hollow C₆₀ spheres or nanotubes. C₆₀ is soft (weak forces between molecules); nanotubes are strong and conduct.' },
      { n: 5, f: 'When water boils, what is overcome?', b: 'The weak intermolecular forces between water molecules. The covalent bonds inside the molecules do not break.' },
      { n: 6, f: 'Size of a nanoparticle, and 1 nm in metres', b: 'Nanoparticles are 1 nm to 100 nm across. 1 nm = 1 × 10⁻⁹ m.' },
      { n: 7, f: 'Surface area to volume ratio of a cube of side 4 nm', b: 'Area 6 × 4² = 96 nm²; volume 4³ = 64 nm³; ratio 96 ÷ 64 = 1.5 nm⁻¹. Smaller particles have a larger ratio (6 ÷ x).' },
      { n: 8, f: 'Two uses of nanoparticles, and one risk linked to a property', b: 'Silver: antibacterial (wound dressings). Titanium dioxide or zinc oxide: block UV in sunscreens.\nRisk: they are so small they may pass through skin or be inhaled, and long-term effects are not fully known.' },
    ]),

    // C3 Chemical reactions
    ...sub(C3, 'c3-1-introducing-chemical-reactions-j248', 'C3.1', [
      { n: 1, f: 'Which elements exist as diatomic molecules?', b: 'H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂ (the Group 7 elements plus hydrogen, nitrogen and oxygen).' },
      { n: 2, f: 'Formula of iron(III) oxide and of magnesium nitrate', b: 'Fe³⁺ and O²⁻: lowest common multiple 6, so Fe₂O₃.\nMg²⁺ and two NO₃⁻: Mg(NO₃)₂.' },
      { n: 3, f: 'The four state symbols', b: '(s) solid, (l) liquid, (g) gas, (aq) dissolved in water. Pure water is (l); a precipitate is (s).' },
      { n: 4, f: 'Half equation for chloride ions forming chlorine', b: '2Cl⁻ → Cl₂ + 2e⁻ (atoms and charges both balance).' },
      { n: 5, f: 'Why might a balance reading change during a reaction in an open container?', b: 'Falls: a gas product escapes (e.g. CO₂ from an acid and a carbonate).\nRises: a gas from the air joins on (e.g. oxygen forming a metal oxide).\nMass is still conserved.' },
      { n: 6, f: 'Ionic equation for barium chloride solution + sodium sulfate solution', b: 'Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s). Na⁺ and Cl⁻ are spectator ions.', u: true },
      { n: 7, f: 'The mole and the Avogadro constant', b: 'One mole contains exactly 6.02214076 × 10²³ elementary entities (classically, as many as atoms in 12 g of carbon-12). Avogadro constant ≈ 6.02 × 10²³ per mole. amount = mass ÷ Mr.', u: true },
      { n: 8, f: 'Mass of one methane molecule (Mr 16)', b: '16 ÷ (6.02 × 10²³) = 2.66 × 10⁻²³ g', u: true },
      { n: 9, f: '2H₂ + O₂ → 2H₂O with 0.30 mol H₂ and 0.12 mol O₂. Which is limiting, and how much water forms?', b: '0.30 mol H₂ needs 0.15 mol O₂, but only 0.12 mol is present, so oxygen is limiting. Water = 2 × 0.12 = 0.24 mol.', u: true },
    ]),
    ...sub(C3, 'c3-2-energetics-j248', 'C3.2', [
      { n: 1, f: 'Exothermic vs endothermic (in terms of the surroundings)', b: 'Exothermic: energy transferred from the chemicals to the surroundings; their temperature rises.\nEndothermic: energy transferred from the surroundings to the chemicals; their temperature falls.' },
      { n: 2, f: 'Examples of exothermic and endothermic reactions', b: 'Exothermic: combustion, neutralisation, many metals + dilute acids.\nEndothermic: thermal decomposition of a carbonate, hydrogencarbonate + citric or ethanoic acid.' },
      { n: 3, f: 'Profile: reactants 140, peak 200, products 90 kJ/mol. Activation energy and energy change?', b: 'Activation energy = 200 − 140 = 60 kJ/mol.\nEnergy change = 90 − 140 = −50 kJ/mol, so exothermic.' },
      { n: 4, f: 'A candle needs a match to light. Does that make burning endothermic?', b: 'No. The match only supplies the activation energy. Overall more energy is released than taken in, so it is exothermic.' },
      { n: 5, f: 'Measuring a temperature change in a polystyrene cup: main systematic error and how to reduce it', b: 'Heat transfer to or from the room makes every measured change too small. Insulate the cup and use a lid.' },
      { n: 6, f: 'Bond breaking and bond making in energy calculations', b: 'Breaking bonds takes in energy; making bonds releases it. Energy change = bonds broken − bonds made. Negative = exothermic.', u: true },
      { n: 7, f: '2H₂O₂ → 2H₂O + O₂. O–H 464, O–O 146, O=O 498 kJ/mol. Energy change?', b: 'Broken: 4 × 464 + 2 × 146 = 2148.\nMade: 4 × 464 + 498 = 2354.\nChange = 2148 − 2354 = −206 kJ/mol (exothermic).', u: true },
      { n: 8, f: 'Why does a value from bond energies differ from a measured one?', b: 'Bond energies are average values from many compounds, so the calculation gives only an estimate.', u: true },
    ]),
    ...sub(C3, 'c3-3-types-of-chemical-reactions-j248', 'C3.3', [
      { n: 1, f: 'Oxidising agent and reducing agent', b: 'Oxidising agent: oxidises something else and is itself reduced.\nReducing agent: reduces something else and is itself oxidised.' },
      { n: 2, f: 'NiO + H₂ → Ni + H₂O: what is reduced, and what is the reducing agent?', b: 'Nickel(II) oxide loses oxygen, so it is reduced (the oxidising agent). Hydrogen gains oxygen, so it is oxidised and is the reducing agent.' },
      { n: 3, f: 'Redox in terms of electrons: Mg + Zn²⁺ → Mg²⁺ + Zn', b: 'OIL RIG: oxidation is loss, reduction is gain of electrons.\nMg → Mg²⁺ + 2e⁻ (oxidised).\nZn²⁺ + 2e⁻ → Zn (reduced).', u: true },
      { n: 4, f: 'What ions do acids and alkalis form in water?', b: 'Acids form H⁺ ions (HCl → H⁺ + Cl⁻). Alkalis form OH⁻ ions (LiOH → Li⁺ + OH⁻). An alkali is a soluble base.' },
      { n: 5, f: 'Balanced equation: calcium carbonate + nitric acid', b: 'CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂' },
      { n: 6, f: 'Making a pure, dry salt from an insoluble base (PAG C7)', b: 'Warm the acid; add the base in excess, stirring; filter off the unreacted solid; heat the filtrate to boil off part of the water and leave to crystallise; filter and dry the crystals.' },
      { n: 7, f: 'Strong vs weak, and concentrated vs dilute (acids)', b: 'Strong/weak: degree of ionisation (hydrochloric, nitric, sulfuric are fully ionised; ethanoic, citric, carbonic partly).\nConcentrated/dilute: amount of acid in a given volume.', u: true },
      { n: 8, f: 'pH falls from 6 to 3. How does the H⁺ concentration change?', b: 'Each fall of 1 pH unit is 10 times more H⁺: 10 × 10 × 10 = 1000 times greater.', u: true },
      { n: 9, f: 'One advantage of a pH probe over universal indicator', b: 'Any one: more precise; not affected by the colour of the solution; can record pH continuously; no subjective colour matching.' },
    ]),
    ...sub(C3, 'c3-4-electrolysis-j248', 'C3.4', [
      { n: 1, f: 'Electrolysis and electrolyte', b: 'Electrolysis: decomposition of a liquid (molten or aqueous) by passing a direct current through it.\nElectrolyte: an ionic substance, melted or in solution, that carries the current and is broken down.' },
      { n: 2, f: 'Why must an ionic compound be molten or dissolved to be electrolysed?', b: 'In the solid, the ions are locked in the lattice and cannot move. Melted or dissolved, the ions are free to move and carry charge.' },
      { n: 3, f: 'Products of electrolysing molten sodium chloride with inert electrodes', b: 'Sodium at the cathode (negative); chlorine at the anode (positive).' },
      { n: 4, f: 'Rules for the products of an aqueous solution (inert electrodes)', b: 'Cathode: the metal only if it is less reactive than hydrogen (Cu, Ag); otherwise hydrogen.\nAnode: a halogen if Cl⁻, Br⁻ or I⁻ is present; otherwise oxygen.' },
      { n: 5, f: 'Products of electrolysing NaCl(aq) and CuSO₄(aq) with inert electrodes', b: 'NaCl(aq): hydrogen at the cathode, chlorine at the anode; sodium hydroxide is left.\nCuSO₄(aq): copper at the cathode, oxygen at the anode; sulfuric acid is left and the blue colour fades.' },
      { n: 6, f: 'Half equation for oxygen forming at the anode from an aqueous solution', b: '4OH⁻ → O₂ + 2H₂O + 4e⁻ (charge 4− on each side).' },
      { n: 7, f: 'Why do hydrogen and oxygen form in a 2 : 1 volume ratio?', b: 'Each H₂ needs 2 electrons and each O₂ releases 4, so twice as many hydrogen molecules form as oxygen molecules.' },
      { n: 8, f: 'Inert vs non-inert anode in copper sulfate solution', b: 'Graphite gives oxygen and a fading colour; copper dissolves and the colour stays.', src: ELEC },
      { n: 9, f: 'In electrolysis, what moves through the liquid and what moves through the wires?', b: 'Ions move through the liquid; electrons move through the wires.', src: ELEC },
    ]),

    // C4 Predicting and identifying reactions and products
    ...sub(C4, 'c4-1-predicting-chemical-reactions-j248', 'C4.1', [
      { n: 1, f: 'Group 1 metals: physical properties and how they are stored', b: 'Soft, low density, low melting point (falling down the group). Stored under oil because they react with air and water vapour.' },
      { n: 2, f: 'Why does potassium react faster with water than lithium?', b: 'Its outer electron is further from the nucleus with more inner shells shielding it, so it is attracted less strongly and lost more easily.' },
      { n: 3, f: 'Chlorine, bromine and iodine: state and colour at room temperature', b: 'Chlorine: pale green gas.\nBromine: red-brown liquid (orange in water).\nIodine: grey-black solid (brown in water).' },
      { n: 4, f: 'Chlorine water is added to sodium bromide solution. Equation and observation', b: 'Cl₂ + 2NaBr → 2NaCl + Br₂. The colourless solution turns orange as bromine forms.' },
      { n: 5, f: 'Group 0 (noble gases): properties and the reason for them', b: 'Colourless, monatomic, very unreactive gases. Full outer shells (2 for helium, 8 for the rest). Boiling point and density increase down the group.' },
      { n: 6, f: 'Transition metals compared with Group 1', b: 'Higher melting point and density, much less reactive, ions with different charges (Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺), coloured compounds, and many are catalysts.' },
      { n: 7, f: 'Three transition metal catalysts and their reactions', b: 'Iron: the Haber process.\nNickel: adding hydrogen to alkenes.\nManganese(IV) oxide: decomposing hydrogen peroxide.' },
      { n: 8, f: 'Metal Q displaces copper from copper(II) sulfate but not iron from iron(II) sulfate. Where is Q?', b: 'Between them: iron > Q > copper. A metal displaces only a less reactive metal from its salt.' },
      { n: 9, f: '1.10 g of manganese forms 1.74 g of oxide (Mn = 55, O = 16). Empirical formula?', b: 'O = 1.74 − 1.10 = 0.64 g.\nMn: 1.10 ÷ 55 = 0.020 mol. O: 0.64 ÷ 16 = 0.040 mol.\nRatio 1 : 2, so MnO₂.' },
    ]),
    ...sub(C4, 'c4-2-identifying-products-j248', 'C4.2', [
      { n: 1, f: 'Precipitate', b: 'An insoluble solid that forms when two solutions are mixed.', src: IDENT },
      { n: 2, f: 'Tests for oxygen, hydrogen and carbon dioxide', b: 'Oxygen: glowing splint relights.\nHydrogen: lighted splint at the mouth of the tube gives a squeaky pop.\nCarbon dioxide: bubble through limewater, which turns milky.' },
      { n: 3, f: 'Test for chlorine', b: 'Damp blue litmus paper (in a fume cupboard) turns red, then is bleached white.' },
      { n: 4, f: 'Flame test colours: Li⁺, Na⁺, K⁺, Ca²⁺, Cu²⁺. Why use a blue flame?', b: 'Li⁺ crimson, Na⁺ yellow, K⁺ lilac, Ca²⁺ orange-red, Cu²⁺ green.\nA yellow flame would add its own colour.' },
      { n: 5, f: 'Sodium hydroxide test: results for Ca²⁺, Zn²⁺, Cu²⁺, Fe²⁺, Fe³⁺', b: 'Ca²⁺ white, stays in excess. Zn²⁺ white, dissolves in excess.\nCu²⁺ blue. Fe²⁺ green. Fe³⁺ orange-brown.', u: true },
      { n: 6, f: 'Tests for halide ions and their results', b: 'Acidify with dilute nitric acid, add silver nitrate solution.\nCl⁻ white (AgCl), Br⁻ cream (AgBr), I⁻ yellow (AgI).', u: true },
      { n: 7, f: 'Tests for sulfate and carbonate ions', b: 'Sulfate: acidify with dilute hydrochloric acid, add barium chloride solution → white BaSO₄.\nCarbonate: dilute acid → fizzing; the gas turns limewater milky.', u: true },
      { n: 8, f: 'The three advantages of instrumental methods named in the specification', b: 'Sensitivity (detects very small amounts), accuracy (reliable, correct results) and speed (fast, often automatic).' },
      { n: 9, f: 'Molecular ion peak', b: 'The peak at the highest m/z in a mass spectrum; its value is the Mr of the compound.', src: IDENT },
      { n: 10, f: 'Base peak', b: 'The tallest peak in a mass spectrum. It is not always the molecular ion.', src: IDENT },
    ]),

    // C5 Monitoring and controlling chemical reactions
    ...sub(C5, 'c5-1-monitoring-chemical-reactions-j248', 'C5.1', [
      { n: 1, f: 'Titration technique (PAG C6)', b: 'Pipette a measured volume into a conical flask with a few drops of indicator; fill a rinsed burette, read the bottom of the meniscus at eye level; add while swirling, drop by drop near the end point; repeat until titres are concordant.' },
      { n: 2, f: 'Concordant titres', b: 'Accurate titres that agree closely, usually within 0.10 cm³. Only these are averaged; the rough titre is left out.' },
      { n: 3, f: 'Colours of phenolphthalein and methyl orange', b: 'Phenolphthalein: pink in alkali, colourless in acid.\nMethyl orange: yellow in alkali, red in acid.' },
      { n: 4, f: 'Why is the actual yield less than the theoretical yield?', b: 'The reaction is incomplete or reversible; product is lost during filtering, transferring or crystallising; side reactions form unwanted products.' },
      { n: 5, f: 'Atom economy: formula, and why it matters', b: '(total Mr of desired product ÷ total Mr of reactants) × 100, from the balanced equation. High atom economy means less waste. A reaction with one product has 100%.' },
      { n: 6, f: '2.92 g of HCl (Mr 36.5) is dissolved to make 400 cm³. Concentration in mol/dm³?', b: '2.92 ÷ 36.5 = 0.0800 mol; 0.0800 ÷ 0.400 = 0.200 mol/dm³.', u: true },
      { n: 7, f: '25.0 cm³ of KOH needs 16.00 cm³ of 0.125 mol/dm³ HNO₃ (1 : 1). Concentration of KOH?', b: 'HNO₃: 0.125 × 0.01600 = 0.00200 mol = KOH.\n0.00200 ÷ 0.0250 = 0.0800 mol/dm³.', u: true },
      { n: 8, f: 'Molar gas volume at RTP. What volume does 0.0250 mol of oxygen occupy?', b: '24 dm³ (24 000 cm³) per mole at room temperature and pressure.\n0.0250 × 24 = 0.600 dm³.', u: true },
      { n: 9, f: 'Factors to weigh when choosing a reaction pathway', b: 'Atom economy, percentage yield, rate, equilibrium position, and the usefulness of by-products.', u: true },
    ]),
    ...sub(C5, 'c5-2-controlling-reactions-j248', 'C5.2', [
      { n: 1, f: 'Three ways to measure the rate of a reaction that gives off a gas', b: 'Gas volume at set times (gas syringe, or upturned measuring cylinder over water); mass loss on a balance (good for a heavy gas such as CO₂, poor for hydrogen); or time for a fixed change (1/t).' },
      { n: 2, f: '105 cm³ of gas forms in 70 s. Mean rate?', b: '105 ÷ 70 = 1.5 cm³/s' },
      { n: 3, f: 'A tangent passes through (10 s, 28 cm³) and (50 s, 76 cm³). Rate at that time?', b: '(76 − 28) ÷ (50 − 10) = 48 ÷ 40 = 1.2 cm³/s' },
      { n: 4, f: 'Which factors change only collision frequency, and which change collision energy too?', b: 'Concentration, pressure and surface area: more frequent collisions only.\nTemperature: more frequent and more energetic collisions, so more reach the activation energy.' },
      { n: 5, f: 'Surface area to volume ratio of a 5 mm cube, and of it cut into 1 mm cubes', b: '5 mm cube: 150 mm² ÷ 125 mm³ = 1.2 : 1.\n1 mm cubes: 125 × 6 = 750 mm² ÷ 125 mm³ = 6 : 1. Smaller pieces react faster.' },
      { n: 6, f: 'Characteristics of a catalyst, and how it works', b: 'Increases the rate, is not used up (same mass at the end), does not change the amount of product; needed in small amounts. It provides an alternative pathway with a lower activation energy.' },
      { n: 7, f: 'Enzyme', b: 'A biological catalyst: it speeds up reactions in living things and is not used up.' },
      { n: 8, f: 'Run X takes 20 s and run Y takes 80 s for the same change. How many times faster is X?', b: 'Rate ∝ 1/t. 1/20 = 0.050 s⁻¹ and 1/80 = 0.0125 s⁻¹, so X is 4 times as fast.' },
    ]),
    ...sub(C5, 'c5-3-equilibria-j248', 'C5.3', [
      { n: 1, f: 'Heating hydrated cobalt(II) chloride, then adding water to the product', b: 'Heat: pink → blue as water is driven off (forward, endothermic).\nAdd water: blue → pink, heat released (reverse, exothermic).' },
      { n: 2, f: 'Dynamic equilibrium', b: 'In a closed system, the forward and reverse reactions happen at equal rates, so the concentrations stay constant. Both reactions continue.' },
      { n: 3, f: 'At equilibrium, are the concentrations of reactants and products equal?', b: 'No. They are constant, rarely equal. It is the rates of the two reactions that are equal.' },
      { n: 4, f: "Le Chatelier's principle", b: 'A change made to a system at equilibrium makes the position shift to oppose the change.', u: true },
      { n: 5, f: 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Effect of raising the pressure?', b: 'The position shifts left, to the side with fewer gas molecules (1 on the left, 2 on the right). Count gas molecules, not atoms.', u: true },
      { n: 6, f: 'A forward reaction is endothermic. What happens to the amount of product when the temperature is lowered?', b: 'The position shifts in the exothermic (reverse) direction, so there is less product.', u: true },
      { n: 7, f: 'CO(g) + 3H₂(g) ⇌ CH₄(g) + H₂O(g), forward exothermic. Conditions for the most methane?', b: 'High pressure (4 gas molecules → 2), low temperature (forward is exothermic), and excess hydrogen.', u: true },
    ]),

    // C6 Global challenges
    ...sub(C6, 'c6-1-improving-processes-products-j248', 'C6.1', [
      { n: 1, f: 'Ore', b: 'Rock from which a metal compound can be extracted at a profit.' },
      { n: 2, f: 'Which metals are extracted by heating with carbon, and which by electrolysis?', b: 'Metals below carbon in the reactivity series (e.g. iron, zinc, copper, lead): heat the oxide with carbon, which is the reducing agent. Metals above carbon (e.g. aluminium): electrolysis, which needs large amounts of electricity.' },
      { n: 3, f: 'Extracting aluminium: electrolyte and electrode half equations', b: 'Aluminium oxide dissolved in molten cryolite (lower operating temperature).\nCathode: Al³⁺ + 3e⁻ → Al.\nAnode: 2O²⁻ → O₂ + 4e⁻; the oxygen burns the carbon anodes to CO₂, so they are replaced.' },
      { n: 4, f: 'Bioleaching vs phytoextraction', b: 'Bioleaching: bacteria produce a leachate of metal ions from low-grade ore.\nPhytoextraction: plants absorb metal ions and are burned, leaving metal-rich ash.\nBoth are low energy but slow; the metal is then got by scrap iron displacement or electrolysis.', u: true },
      { n: 5, f: 'Haber process conditions, and why the pressure is about 200 atm', b: 'N₂ + 3H₂ ⇌ 2NH₃ (exothermic): iron catalyst, about 450 °C, about 200 atm. Fewer gas molecules on the right, so high pressure helps yield and rate; higher still would cost too much.', u: true },
      { n: 6, f: 'Contact process: equation and conditions', b: '2SO₂ + O₂ ⇌ 2SO₃ (exothermic): vanadium(V) oxide catalyst, about 450 °C, pressure close to atmospheric (the yield is already high).', u: true },
      { n: 7, f: 'Fertilisers: the three elements, and one property every fertiliser compound needs', b: 'Nitrogen, phosphorus and potassium (NPK). The compounds must be soluble.' },
      { n: 8, f: 'The four stages of a life-cycle assessment', b: 'Raw materials and manufacture; use; transport; disposal (landfill, incineration or recycling).' },
      { n: 9, f: 'Composition of brass, bronze and solder', b: 'Brass: copper + zinc.\nBronze: copper + tin.\nSolder: tin + lead (or tin with small amounts of copper or silver).' },
      { n: 10, f: 'What does rusting need, and how does sacrificial protection work?', b: 'Oxygen and water. A more reactive metal (zinc or magnesium) attached to the iron oxidises first, in place of the iron. Galvanising gives a barrier and sacrificial protection.' },
    ]),
    ...sub(C6, 'c6-2-organic-chemistry-j248', 'C6.2', [
      { n: 1, f: 'Homologous series', b: 'A family with one general formula and the same functional group; each member adds CH₂.' },
      { n: 2, f: 'General formulae of alkanes, alkenes, alcohols and carboxylic acids', b: 'Alkane CₙH₂ₙ₊₂. Alkene CₙH₂ₙ. Alcohol CₙH₂ₙ₊₁OH. Carboxylic acid CₙH₂ₙ₊₁COOH.' },
      { n: 3, f: 'How does bromine water distinguish an alkene from an alkane?', b: 'The alkene adds bromine across the C=C, turning bromine water from orange to colourless. An alkane leaves it orange.' },
      { n: 4, f: 'Oxidising an alcohol: reagent, observation and product', b: 'Warm with acidified potassium manganate(VII): purple → colourless. Ethanol → ethanoic acid.' },
      { n: 5, f: 'Monomer and repeat unit of PTFE', b: 'Monomer: tetrafluoroethene, CF₂=CF₂. Repeat unit: –[CF₂–CF₂]– with n outside the brackets. The C=C opens to C–C.' },
      { n: 6, f: 'Condensation polymers: what the monomers need, and the two types', b: 'Each monomer has two functional groups, and a small molecule (usually water) is released at each link.\nPolyester: diol + dicarboxylic acid. Polyamide (nylon): diamine + dicarboxylic acid.', u: true },
      { n: 7, f: 'Monomers of DNA, starch and cellulose, and proteins', b: 'DNA: four nucleotides (bases adenine, thymine, cytosine, guanine).\nStarch and cellulose: sugars (glucose).\nProteins: amino acids.' },
      { n: 8, f: 'Fractions of crude oil, from the top of the column to the bottom', b: 'Refinery gases, petrol, kerosene, diesel, fuel oil, bitumen. Bigger molecules have stronger intermolecular forces and higher boiling points, so they are collected lower.' },
      { n: 9, f: 'Cracking: products, conditions and reasons', b: 'Long alkanes → shorter alkanes + alkenes. Vapour over a hot catalyst (zeolite at about 500 °C in industry; aluminium oxide in the lab). Demand for short-chain fuels exceeds supply, and alkenes make polymers.' },
      { n: 10, f: 'A chain of poly(butene) has Mr 56 000. How many C₄H₈ monomers joined?', b: 'Mr of C₄H₈ = 48 + 8 = 56. 56 000 ÷ 56 = 1000.' },
    ]),
    ...sub(C6, 'c6-3-earth-systems-j248', 'C6.3', [
      { n: 1, f: "Earth's first atmosphere: thought composition and source", b: 'Mainly carbon dioxide and water vapour, some nitrogen, possibly a little methane and ammonia, almost no oxygen. Released by volcanic outgassing.' },
      { n: 2, f: 'How the early atmosphere changed', b: 'Water vapour condensed to form oceans; CO₂ dissolved and was locked into carbonate rocks; photosynthesis removed more CO₂; carbon was stored in fossil fuels; unreactive nitrogen built up.' },
      { n: 3, f: 'Composition of dry air today', b: 'About 78% nitrogen, 21% oxygen, 0.9% argon and 0.04% carbon dioxide.' },
      { n: 4, f: 'How did oxygen build up in the atmosphere?', b: 'Cyanobacteria, then algae and plants, photosynthesised. Early oxygen reacted with dissolved iron (banded iron formations), then built up in the air; an ozone layer formed. It took billions of years.' },
      { n: 5, f: 'How do greenhouse gases keep the Earth warm?', b: 'Mostly short-wavelength sunlight warms the surface, which emits longer-wavelength infrared. Greenhouse gases absorb the infrared and re-emit it in all directions, so less energy escapes to space.' },
      { n: 6, f: 'Why does a correlation between CO₂ and temperature not prove a human cause on its own?', b: 'Correlation is not causation: a mechanism is needed. Natural factors also change climate, past data come from proxies with larger error, and models simplify complex systems.' },
      { n: 7, f: 'Convert 0.038% carbon dioxide into ppm', b: '1% = 10 000 ppm, so 0.038 × 10 000 = 380 ppm.' },
      { n: 8, f: 'How carbon monoxide, sulfur dioxide and oxides of nitrogen form, and their problems', b: 'CO: incomplete combustion; toxic, no colour or smell.\nSO₂: sulfur impurities in fuels burn; acid rain.\nNO and NO₂: nitrogen from the air reacts at high engine temperatures; acid rain and breathing problems.' },
      { n: 9, f: 'How is fresh surface water made potable, and which source needs most energy?', b: 'Sedimentation → filtration (sand, gravel) → sterilisation (chlorine, ozone or UV).\nSalt water needs most energy: desalination by distillation or reverse osmosis.' },
    ]),
  ],
};
