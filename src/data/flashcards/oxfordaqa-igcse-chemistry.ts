/**
 * D-444 -- flashcards for OxfordAQA International GCSE Chemistry 9202
 * (specification Version 6.2, for exams May/June 2018 onwards).
 *
 * 9202 is untiered, so no card carries a tier. One block per sub-topic, in
 * specification order. Card ids are `<sub-topic number>-<n>` (e.g. '3.2.1-4')
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9202); origin 'revision-notes'.
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

const T1 = 'atomic-structure-and-the-periodic-table-9202';
const T2 = 'structure-bonding-and-the-properties-of-matter-9202';
const T3 = 'chemical-changes-9202';
const T4 = 'chemical-analysis-9202';
const T5 = 'acids-bases-and-salts-9202';
const T6 = 'quantitative-chemistry-9202';
const T7 = 'trends-within-the-periodic-table-9202';
const T8 = 'the-rate-and-extent-of-chemical-change-9202';
const T9 = 'energy-changes-9202';
const T10 = 'organic-chemistry-9202';

const BONDS = 'oxfordaqa-igcse-chemistry-chemical-bonds-ionic-covalent-and-metallic-revision-notes';
const BSP = 'oxfordaqa-igcse-chemistry-bonding-structure-and-properties-revision-notes';
const CARB = 'oxfordaqa-igcse-chemistry-structure-and-bonding-of-carbon-and-nanoparticles-revision-notes';
const ENER = 'oxfordaqa-igcse-chemistry-exothermic-endothermic-and-energy-change-revision-notes';
const FUEL = 'oxfordaqa-igcse-chemistry-carbon-compounds-as-fuels-revision-notes';

export const DECK_OXFORDAQA_IGCSE_CHEMISTRY: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'chemistry',
  syllabusCode: '9202',
  syllabusSeries: 'Version 6.2, for exams May/June 2018 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'nouman-ahmed', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Atomic structure and the periodic table
    ...sub(T1, 'solids-liquids-and-gases-9202', '3.1.1', [
      { n: 1, f: 'Particles in a solid, a liquid and a gas', b: 'Solid: close together in a fixed, regular arrangement; vibrate.\nLiquid: close together, irregular; move past each other.\nGas: far apart, random; move quickly in all directions.' },
      { n: 2, f: 'What happens to the particles when a solid melts?', b: 'They gain enough energy to overcome some of the forces holding them in a fixed arrangement, and start to move past each other while staying close together.' },
      { n: 3, f: 'What happens to the particles when a liquid boils or evaporates?', b: 'They gain enough energy to overcome the remaining forces between them and spread apart to fill the container.' },
      { n: 4, f: 'Name the changes of state: solid → liquid, liquid → gas, gas → liquid, liquid → solid', b: 'Melting; boiling (or evaporating); condensing; freezing.' },
      { n: 5, f: 'What do diffusion experiments (bromine in air, NH₃ and HCl, KMnO₄ in water) show?', b: 'That particles are in constant, random motion.' },
      { n: 6, f: 'Ammonia and hydrogen chloride gases diffuse towards each other in a tube. What do you see?', b: 'A white ring of ammonium chloride where the two gases meet.' },
    ]),
    ...sub(T1, 'a-simple-model-of-the-atom-9202', '3.1.2', [
      { n: 1, f: 'Element', b: 'A substance made of only one type of atom, represented by a chemical symbol.' },
      { n: 2, f: 'Relative charge and relative mass of a proton, a neutron and an electron', b: 'Proton: +1, mass 1.\nNeutron: 0, mass 1.\nElectron: −1, very small mass.' },
      { n: 3, f: 'Atomic number and mass number', b: 'Atomic number: the number of protons.\nMass number: protons + neutrons.' },
      { n: 4, f: 'Protons, electrons and neutrons in ²⁷₁₃Al', b: '13 protons, 13 electrons, 27 − 13 = 14 neutrons.' },
      { n: 5, f: 'Isotopes', b: 'Atoms of the same element (same atomic number) with different numbers of neutrons, so different mass numbers.' },
      { n: 6, f: 'Electron structure of sodium (atomic number 11)', b: '2,8,1 — shells fill 2, then 8, then the remainder.' },
      { n: 7, f: 'Relative atomic mass, Ar', b: 'An average mass of the atoms of an element, compared with carbon-12.' },
      { n: 8, f: 'How did the model of the atom change from the plum pudding model?', b: 'Alpha-particle scattering showed the mass and positive charge are concentrated in a tiny nucleus, so the nuclear model replaced the plum pudding model. Electrons were then placed in shells, and the neutron was found later.' },
    ]),
    ...sub(T1, 'the-periodic-table-9202', '3.1.3', [
      { n: 1, f: 'How are the elements arranged in the modern periodic table?', b: 'In order of atomic (proton) number, with elements with similar properties in the same columns (groups).' },
      { n: 2, f: 'For Groups 1–7, what does the group number tell you?', b: 'The number of electrons in the outer shell.' },
      { n: 3, f: 'How did Mendeleev’s table allow undiscovered elements to be predicted?', b: 'He grouped elements by similar properties and left gaps where no known element fitted, then predicted the properties of the missing elements from their groups.' },
      { n: 4, f: 'Why are the noble gases (Group 0) unreactive?', b: 'They have a stable outer shell: 8 outer electrons (helium has 2), so they have no tendency to gain, lose or share electrons.' },
      { n: 5, f: 'Why do Group 1 and Group 7 elements react?', b: 'To reach a stable, noble-gas-like outer shell: Group 1 atoms lose their one outer electron; Group 7 atoms gain one electron.' },
    ]),

    // 2 Structure, bonding and the properties of matter
    ...sub(T2, 'chemical-bonds-ionic-covalent-and-metallic-9202', '3.2.1', [
      { n: 1, f: 'Chemical bonding', b: 'Transferring or sharing electrons in the highest occupied energy levels (outer shells) so that atoms reach a noble gas electron arrangement.', src: BONDS },
      { n: 2, f: 'Ion', b: 'An atom that has gained or lost electrons, so it carries an overall charge.', src: BONDS },
      { n: 3, f: 'Ionic bonding', b: 'The strong electrostatic pull between oppositely charged ions, which works in every direction through a giant lattice.', src: BONDS },
      { n: 4, f: 'Ion charges for Groups 1, 2, 3, 5, 6 and 7', b: 'Group 1: 1+. Group 2: 2+. Group 3: 3+.\nGroup 5: 3−. Group 6: 2−. Group 7: 1−.' },
      { n: 5, f: 'Charge and electron arrangement of the phosphide ion (P, atomic number 15)', b: '3−; [2,8,8]³⁻ — the atom (2,8,5) gains three electrons.' },
      { n: 6, f: 'Structure of sodium chloride', b: 'A regular cubic lattice: each Na⁺ is surrounded by six Cl⁻ and each Cl⁻ by six Na⁺, alternating in every direction.', src: BONDS },
      { n: 7, f: 'Covalent bond', b: 'A pair of electrons shared by two atoms; it is a strong bond.', src: BONDS },
      { n: 8, f: 'Shared pairs and non-bonding pairs in HCl, H₂O and NH₃', b: 'HCl: 1 shared, 3 non-bonding (on Cl).\nH₂O: 2 shared, 2 non-bonding (on O).\nNH₃: 3 shared, 1 non-bonding (on N).' },
      { n: 9, f: 'Giant covalent structures (macromolecules) named in 9202', b: 'Diamond and silicon dioxide.', src: BONDS },
      { n: 10, f: 'Structure and bonding in a metal', b: 'A giant structure of positive ions in a regular pattern, with delocalised outer electrons. Strong electrostatic attractions between the ions and the delocalised electrons hold it together.' },
      { n: 11, f: 'Molecule vs giant structure', b: 'A molecule has a fixed, small number of atoms. A giant structure has no fixed size; its formula is only a ratio.', src: BONDS },
    ]),
    ...sub(T2, 'how-bonding-and-structure-are-related-to-the-properties-of-substances-9202', '3.2.2', [
      { n: 1, f: 'Explain why ionic compounds have high melting points', b: 'A giant ionic lattice has many strong electrostatic attractions between oppositely charged ions, acting in all directions. Overcoming them takes a large amount of energy.' },
      { n: 2, f: 'When does an ionic compound conduct electricity, and why?', b: 'When molten or dissolved in water: the ions are free to move and carry charge. In the solid they are fixed in the lattice.' },
      { n: 3, f: 'Melting and boiling points of simple molecular substances', b: 'Relatively low: they are gases, liquids or solids with relatively low melting and boiling points.', src: BSP },
      { n: 4, f: 'What is overcome when a simple molecular substance melts or boils?', b: 'Only the weak intermolecular forces between molecules. The covalent bonds are not broken.', src: BSP },
      { n: 5, f: 'Why do simple molecular substances not conduct electricity?', b: 'The molecules have no overall electric charge, so there are no charged particles to carry a current.', src: BSP },
      { n: 6, f: 'Why do giant covalent substances have very high melting points?', b: 'Every atom is held by strong covalent bonds, so a very large number of them must be broken. There are no separate molecules, so no intermolecular forces.' },
      { n: 7, f: 'Why do metals conduct heat and electricity?', b: 'Their delocalised electrons can move through the whole structure, carrying charge and energy.' },
      { n: 8, f: 'Substance Y melts at −210 °C and boils at −196 °C. What is its state at 25 °C?', b: 'Gas — 25 °C is above its boiling point.' },
    ]),
    ...sub(T2, 'structure-and-bonding-of-carbon-9202', '3.2.3', [
      { n: 1, f: 'Why can a carbon atom form four covalent bonds?', b: 'Its electron arrangement is 2,4, so it has four outer electrons to share.' },
      { n: 2, f: 'Why is diamond hard?', b: 'Every carbon atom is locked in place by four strong covalent bonds pointing in all directions, so scratching it means breaking many strong bonds.', src: CARB },
      { n: 3, f: 'Why is graphite slippery?', b: 'There are no covalent bonds between the layers, only weak forces, so the layers slide.', src: CARB },
      { n: 4, f: 'Why does graphite conduct electricity?', b: 'One electron from each carbon atom is delocalised and moves through the structure.', src: CARB },
      { n: 5, f: 'Why does graphite still melt at a very high temperature?', b: 'Melting breaks the strong covalent bonds inside the layers.', src: CARB },
      { n: 6, f: 'Fullerenes: structure and the four uses named in 9202', b: 'Forms of carbon based on hexagonal rings, with different numbers of carbon atoms. Uses: drug delivery into the body, lubricants, catalysts, and nanotubes for reinforcing materials (e.g. tennis rackets).' },
      { n: 7, f: 'Graphite vs metal conduction', b: 'Both use delocalised electrons. Graphite is not a metal; it is a giant covalent structure.', src: CARB },
    ]),
    ...sub(T2, 'nanoparticles-9202', '3.2.4', [
      { n: 1, f: 'Nanoscale range', b: '1–100 nm, not "anything small". Of the order of a few hundred atoms.', src: CARB },
      { n: 2, f: 'Nanoparticle vs bulk', b: 'Same substance, different size, different properties, because of the far higher surface area to volume ratio.', src: CARB },
      { n: 3, f: 'Surface area to volume ratio of a cube with sides of 2 nm', b: 'Surface area = 6 × 2² = 24 nm². Volume = 2³ = 8 nm³. Ratio = 24 ÷ 8 = 3 nm⁻¹ (or 6 ÷ L).' },
      { n: 4, f: 'Is a particle 6.5 × 10⁻⁸ m across a nanoparticle?', b: '6.5 × 10⁻⁸ ÷ 1 × 10⁻⁹ = 65 nm, which is within 1–100 nm, so yes.' },
      { n: 5, f: 'Possible applications of nanoparticles named in 9202', b: 'New computers, new catalysts, new coatings, highly selective sensors, stronger and lighter construction materials, and new cosmetics such as suntan creams and deodorants.' },
    ]),

    // 3 Chemical changes
    ...sub(T3, 'metals-9202', '3.3.1', [
      { n: 1, f: 'Why do metals conduct, and why can they be hammered into shape?', b: 'Conduct heat and electricity: delocalised electrons move through the structure.\nHammered or bent: the layers of atoms slide over each other.' },
      { n: 2, f: 'Alloy, and what steel is', b: 'Alloy: a mixture of at least two elements, at least one a metal (not a compound).\nSteel: iron mixed with carbon, sometimes with other metals too.' },
      { n: 3, f: 'Why is copper used for wiring and plumbing?', b: 'Good conductor of heat and electricity; can be bent but is hard enough for pipes and tanks; does not react with water.' },
      { n: 4, f: 'The 9202 reactivity series, most reactive first (with carbon)', b: 'Potassium, sodium, lithium, calcium, magnesium, (carbon), zinc, iron, copper.' },
      { n: 5, f: 'Copper wire is placed in silver nitrate solution. Ionic equation, and what is oxidised and reduced?', b: 'Cu + 2Ag⁺ → Cu²⁺ + 2Ag\nCopper atoms are oxidised (lose electrons); silver ions are reduced (gain electrons). Nitrate ions are spectators.' },
      { n: 6, f: 'How is a metal’s extraction method chosen?', b: 'Very unreactive (gold): found as the metal.\nBelow carbon (zinc, iron): heat the oxide with carbon (reduction).\nAbove carbon (aluminium): electrolysis of the molten compound — high energy, so expensive.' },
      { n: 7, f: 'Blast furnace: raw materials and the reduction step', b: 'Iron ore, coke, limestone and hot air.\nCO₂ + C → 2CO, then Fe₂O₃ + 3CO → 2Fe + 3CO₂.' },
      { n: 8, f: 'Phytomining vs bioleaching', b: 'Phytomining: plants absorb copper compounds, then are burned; the ash contains copper compounds.\nBioleaching: bacteria produce a leachate solution containing copper compounds.' },
      { n: 9, f: 'Three reasons to recycle metals', b: 'Extraction uses limited resources, costs a lot of energy and damages the environment.' },
      { n: 10, f: 'Thermal decomposition of copper carbonate: equation and colour change. Which carbonates do not decompose in a Bunsen flame?', b: 'CuCO₃ → CuO + CO₂; green → black.\nSodium and potassium carbonates do not decompose at Bunsen temperatures.' },
      { n: 11, f: '6.20 g of CuCO₃ is heated to constant mass. Mass of copper oxide left? (Ar: Cu = 64, C = 12, O = 16)', b: 'Mr CuCO₃ = 124, Mr CuO = 80.\n6.20 × 80 ÷ 124 = 4.00 g' },
    ]),
    ...sub(T3, 'electrolysis-9202', '3.3.2', [
      { n: 1, f: 'Electrolysis and electrolyte', b: 'Electrolysis: breaking down an ionic substance, molten or in solution, by passing an electric current through it.\nElectrolyte: the molten or dissolved ionic substance that is broken down.' },
      { n: 2, f: 'Why must an ionic compound be melted or dissolved for electrolysis?', b: 'In the solid lattice the ions are fixed in place. Melting or dissolving frees them to move and carry charge.' },
      { n: 3, f: 'Cathode and anode: charge, which ions go there, and what happens', b: 'Cathode: negative; positive ions move to it; reduction (gain of electrons).\nAnode: positive; negative ions move to it; oxidation (loss of electrons).' },
      { n: 4, f: 'Aqueous solution: rules for the cathode and anode products', b: 'Cathode: hydrogen if the metal is more reactive than hydrogen; otherwise the metal (copper, silver).\nAnode: the halogen from a concentrated halide; otherwise (dilute halide, sulfate, nitrate) oxygen.' },
      { n: 5, f: 'Required practical: copper sulfate solution with carbon electrodes. What is seen at each electrode?', b: 'Cathode: pink-brown copper coating, mass increases (Cu²⁺ + 2e⁻ → Cu).\nAnode: bubbles of oxygen, which relight a glowing splint (4OH⁻ → O₂ + 2H₂O + 4e⁻).\nThe blue colour fades.' },
      { n: 6, f: 'Electroplating: the cathode, anode and electrolyte, and three reasons for it', b: 'Cathode: the object. Anode: the plating metal. Electrolyte: a solution of ions of the plating metal.\nReasons: appearance, durability, prevention of corrosion.' },
      { n: 7, f: 'Aluminium manufacture: why cryolite, and why are the anodes replaced?', b: 'Aluminium oxide is dissolved in molten cryolite, which is molten at a much lower temperature, saving energy.\nThe carbon anodes react with the oxygen formed (C + O₂ → CO₂), so they wear away.' },
      { n: 8, f: 'Electrode half equations in aluminium manufacture', b: 'Negative electrode: Al³⁺ + 3e⁻ → Al\nPositive electrode: 2O²⁻ → O₂ + 4e⁻' },
      { n: 9, f: 'Electrolysis of sodium chloride solution: products and uses', b: 'Cathode: hydrogen. Anode: chlorine. Solution: sodium hydroxide.\nSodium hydroxide → soap; chlorine → bleach and plastics.' },
    ]),

    // 4 Chemical analysis
    ...sub(T4, 'purity-and-chromatography-9202', '3.4.1', [
      { n: 1, f: 'Pure substance (in chemistry)', b: 'A single element or compound, with no other substance mixed in. Everyday "pure" (nothing added) is different: a "pure" natural product can still be a mixture.' },
      { n: 2, f: 'How do impurities affect melting and boiling points?', b: 'A pure substance melts and boils at sharp, fixed values. Impurities lower the melting point and raise the boiling point, and make them happen over a range.' },
      { n: 3, f: 'Why does purity matter for drugs and foodstuffs?', b: 'Drugs: the correct dose of the active compound, with no harmful impurities.\nFood: no harmful contaminants, and the contents match the label.' },
      { n: 4, f: 'Choose the method: insoluble solid from a liquid; soluble solid from a solution; a liquid from a solution', b: 'Filtration; crystallisation; distillation.' },
      { n: 5, f: 'Stationary and mobile phase in paper chromatography', b: 'Stationary phase: the paper.\nMobile phase: the solvent.' },
      { n: 6, f: 'Rf value, and a spot that moves 3.3 cm when the solvent front moves 5.5 cm', b: 'Rf = distance moved by substance ÷ distance moved by solvent, both from the baseline (to the centre of the spot). 3.3 ÷ 5.5 = 0.60. No units; never above 1.' },
      { n: 7, f: 'How does paper chromatography separate the components of a mixture?', b: 'Each component is shared between the paper and the solvent. The more soluble it is in the solvent, the further it moves, so components with different solubilities separate.' },
      { n: 8, f: 'Does one spot in one solvent prove a substance is pure?', b: 'No. Run it in a second solvent alongside a pure reference. One spot each time, level with the reference, is strong evidence.' },
    ]),
    ...sub(T4, 'identification-of-common-gases-9202', '3.4.2', [
      { n: 1, f: 'Test for hydrogen', b: 'A lighted splint near the gas: a pop (2H₂ + O₂ → 2H₂O).' },
      { n: 2, f: 'Test for oxygen', b: 'A glowing splint in the gas relights.' },
      { n: 3, f: 'Test for carbon dioxide, and why it works', b: 'Bubble the gas through limewater (calcium hydroxide solution): it turns cloudy white.\nCa(OH)₂ + CO₂ → CaCO₃ + H₂O — insoluble calcium carbonate forms.' },
      { n: 4, f: 'Two tests for ammonia', b: 'Damp red litmus paper turns blue.\nHydrogen chloride from concentrated hydrochloric acid held near it gives white smoke of ammonium chloride (NH₃ + HCl → NH₄Cl).' },
      { n: 5, f: 'Test for chlorine', b: 'Damp blue litmus paper turns red, then is bleached white.' },
    ]),
    ...sub(T4, 'identification-of-ions-9202', '3.4.3', [
      { n: 1, f: 'Flame test colours for Li⁺, Na⁺, K⁺, Ca²⁺ and Ba²⁺', b: 'Li⁺: crimson. Na⁺: yellow. K⁺: lilac. Ca²⁺: red. Ba²⁺: green.' },
      { n: 2, f: 'Flame test practical: how is the wire cleaned, and what can spoil the result?', b: 'Dip a nichrome loop in dilute hydrochloric acid and heat, repeating until the flame shows no colour. Sodium contamination gives a strong yellow that can hide other colours (especially lilac); a mixture of ions may show one colour only.' },
      { n: 3, f: 'Sodium hydroxide solution: precipitates with Cu²⁺, Fe²⁺ and Fe³⁺', b: 'Cu²⁺: blue. Fe²⁺: green (slowly turns brown in air). Fe³⁺: brown.' },
      { n: 4, f: 'Al³⁺, Ca²⁺ and Mg²⁺ all give a white precipitate with NaOH. How do you tell them apart?', b: 'Add excess NaOH: only aluminium hydroxide dissolves. For Ca²⁺ vs Mg²⁺ use a flame test: calcium gives red; magnesium gives no characteristic colour.' },
      { n: 5, f: 'Test for carbonate ions', b: 'Add dilute acid: fizzing. Pass the gas into limewater: it turns cloudy white (carbon dioxide).' },
      { n: 6, f: 'Test for halide ions, and the precipitate colours', b: 'Acidify with dilute nitric acid, then add silver nitrate solution.\nCl⁻: white. Br⁻: cream. I⁻: yellow.' },
      { n: 7, f: 'Test for sulfate ions, and why sulfuric acid is not used', b: 'Add dilute hydrochloric acid, then barium chloride solution: a white precipitate of barium sulfate. Sulfuric acid contains sulfate ions, so it would always give a precipitate.' },
      { n: 8, f: 'A solution gives a brown precipitate with NaOH and a white precipitate with acidified BaCl₂. Name and formula?', b: 'Iron(III) sulfate, Fe₂(SO₄)₃ — two Fe³⁺ balance three SO₄²⁻.' },
    ]),

    // 5 Acids, bases and salts
    ...sub(T5, 'the-properties-of-acids-and-bases-9202', '3.5.1', [
      { n: 1, f: 'Base and alkali', b: 'Base: a metal oxide or metal hydroxide.\nAlkali: a soluble hydroxide (a base that dissolves in water). Copper(II) oxide is a base, not an alkali.' },
      { n: 2, f: 'Salt', b: 'The compound formed when the hydrogen of an acid is replaced by a metal (or ammonium) ion.' },
      { n: 3, f: 'Salt endings from hydrochloric, nitric and sulfuric acid', b: 'Hydrochloric → chloride. Nitric → nitrate. Sulfuric → sulfate.' },
      { n: 4, f: 'acid + metal →\nacid + metal oxide or hydroxide →\nacid + ammonia →', b: 'salt + hydrogen\nsalt + water\nan ammonium salt (no water)' },
      { n: 5, f: 'Why is a solution of ammonia alkaline?', b: 'Ammonia reacts with water to form hydroxide ions: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻.' },
      { n: 6, f: 'pH ranges and universal indicator colours', b: '0–2 very acidic (red); 3–6 weakly acidic (orange/yellow); 7 neutral (green); 8–11 weakly alkaline (blue); 12–14 very alkaline (purple).' },
      { n: 7, f: 'Ionic equation for neutralisation', b: 'H⁺(aq) + OH⁻(aq) → H₂O(l). H⁺ comes from the acid, OH⁻ from the alkali; the other ions are spectators.' },
      { n: 8, f: 'Balance: Al(OH)₃ + HNO₃ → Al(NO₃)₃ + H₂O', b: 'Al(OH)₃ + 3HNO₃ → Al(NO₃)₃ + 3H₂O' },
    ]),
    ...sub(T5, 'preparation-of-salts-9202', '3.5.2', [
      { n: 1, f: 'Making a soluble salt from a metal or an insoluble base', b: 'Warm the acid; stir in the solid until some is left over (excess); filter off the excess; crystallise the filtrate.' },
      { n: 2, f: 'Which metals are unsuitable for the metal + acid route, and why?', b: 'Potassium, sodium, lithium: too reactive — violent and dangerous.\nCopper, silver, gold: not reactive enough — no reaction with dilute hydrochloric or sulfuric acid.' },
      { n: 3, f: 'Making a salt from an alkali and an acid', b: 'Pipette the alkali into a flask with indicator; add acid from a burette until the colour just changes; repeat with the same volumes and no indicator; crystallise.' },
      { n: 4, f: 'Crystallisation: method', b: 'Heat to evaporate some water until saturated (crystals form on a cooled glass rod); cool slowly; filter, rinse with a little cold water and dry between filter papers. Do not heat to dryness.' },
      { n: 5, f: 'Making an insoluble salt such as barium sulfate', b: 'Mix two solutions, e.g. barium nitrate and potassium sulfate; filter; wash the residue with distilled water; dry.\nBa(NO₃)₂(aq) + K₂SO₄(aq) → BaSO₄(s) + 2KNO₃(aq)' },
      { n: 6, f: 'How is precipitation used in water treatment?', b: 'To remove unwanted ions: calcium ions from hard water as calcium carbonate; metal ions from effluent as insoluble hydroxides; phosphate as an insoluble phosphate.' },
    ]),

    // 6 Quantitative chemistry
    ...sub(T6, 'conservation-of-mass-including-the-quantitative-interpretation-of-chemical-equations-9202', '3.6.1', [
      { n: 1, f: 'Why is mass conserved in a chemical reaction?', b: 'Atoms are rearranged, not created or destroyed, so the total mass of the products equals the total mass of the reactants.' },
      { n: 2, f: 'A metal carbonate is heated in an open crucible and its mass falls. Explain.', b: 'Carbon dioxide gas is produced and escapes. In a closed system the total mass would be unchanged.' },
      { n: 3, f: 'A metal is heated in air and its mass increases. Explain.', b: 'A gas from the air (oxygen) is a reactant, so its mass is added to the product.' },
      { n: 4, f: 'What does 2Mg + O₂ → 2MgO tell you quantitatively?', b: '2 moles of magnesium react with 1 mole of oxygen to form 2 moles of magnesium oxide. The coefficients, not the subscripts, give the reacting ratio.' },
      { n: 5, f: 'Relative formula mass, Mr', b: 'The sum of the relative atomic masses of all the atoms in the formula.' },
      { n: 6, f: 'Why are relative atomic masses not whole numbers?', b: 'They are weighted averages of the masses of an element’s isotopes, taking their abundances into account.' },
    ]),
    ...sub(T6, 'use-of-amount-of-substance-in-relation-to-masses-of-pure-substances-9202', '3.6.2', [
      { n: 1, f: 'Equation linking moles, mass and Mr', b: 'moles = mass (g) ÷ Mr, so mass = moles × Mr.' },
      { n: 2, f: 'Three steps of a reacting-mass calculation', b: '1. Convert the known mass to moles.\n2. Use the equation’s mole ratio to find moles of the wanted substance.\n3. Convert back to mass. Never use the mass ratio directly.' },
      { n: 3, f: 'Mass of MgO from burning 4.8 g of magnesium (2Mg + O₂ → 2MgO; Ar: Mg = 24, O = 16)', b: '4.8 ÷ 24 = 0.2 mol Mg → 0.2 mol MgO.\n0.2 × 40 = 8.0 g' },
      { n: 4, f: 'Finding an empirical formula from masses or percentages', b: 'Divide each by its Ar, divide all results by the smallest, then scale to whole numbers. Molecular formula = empirical formula × (Mr ÷ empirical formula mass).' },
      { n: 5, f: 'A compound is 40.0% C, 6.7% H and 53.3% O, with Mr 180. Empirical and molecular formulae?', b: 'C 3.33, H 6.7, O 3.33 → 1 : 2 : 1, CH₂O (mass 30).\n180 ÷ 30 = 6, so C₆H₁₂O₆.' },
      { n: 6, f: 'Why might you not obtain the calculated mass of product?', b: 'The reaction may not go to completion (it is reversible); some product may be lost when it is separated; some reactants may react in unexpected ways. No atoms are lost.' },
    ]),
    ...sub(T6, 'the-mole-concept-9202', '3.6.3', [
      { n: 1, f: 'The mole and the Avogadro constant', b: 'One mole contains 6.02 × 10²³ particles (the Avogadro constant). Its mass in grams equals the relative formula mass.' },
      { n: 2, f: 'Number of particles from moles', b: 'number of particles = moles × 6.02 × 10²³' },
      { n: 3, f: 'Volume of one mole of any gas at room temperature and pressure', b: '24 dm³ (24 000 cm³). volume (dm³) = moles × 24.' },
      { n: 4, f: 'Why do gas volume ratios equal the mole ratios in an equation?', b: 'Equal volumes of any gases at the same temperature and pressure contain equal numbers of molecules.' },
      { n: 5, f: 'Volume of CO₂ at rtp from 2.50 g of CaCO₃ with excess HCl (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂; Mr CaCO₃ = 100)', b: '2.50 ÷ 100 = 0.0250 mol CaCO₃ → 0.0250 mol CO₂.\n0.0250 × 24 = 0.600 dm³' },
    ]),
    ...sub(T6, 'molar-concentrations-9202', '3.6.4', [
      { n: 1, f: 'Concentration in g/dm³ and in mol/dm³', b: 'g/dm³ = mass ÷ volume.\nmol/dm³ = moles ÷ volume.\ng/dm³ = mol/dm³ × Mr. Volume must be in dm³ (cm³ ÷ 1000).' },
      { n: 2, f: 'Moles of HCl in 25.0 cm³ of 2.00 mol/dm³ hydrochloric acid', b: '2.00 × (25.0 ÷ 1000) = 0.0500 mol' },
      { n: 3, f: '25.0 cm³ of 0.0500 mol/dm³ H₂SO₄ neutralises 20.0 cm³ of NaOH (H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O). Concentration of NaOH?', b: 'H₂SO₄: 1.25 × 10⁻³ mol → NaOH: 2.50 × 10⁻³ mol (1 : 2).\n2.50 × 10⁻³ ÷ 0.0200 = 0.125 mol/dm³' },
      { n: 4, f: 'Which titres are used to calculate the mean?', b: 'Only concordant titres (within 0.10 cm³ of each other). Leave out the rough titre.' },
    ]),

    // 7 Trends within the periodic table
    ...sub(T7, 'group-properties-9202', '3.7.1', [
      { n: 1, f: 'Group 1 metal + water: products, and the pattern equation', b: 'The metal hydroxide (an alkaline solution) and hydrogen.\n2M + 2H₂O → 2MOH + H₂' },
      { n: 2, f: 'Lithium, sodium and potassium with water: observations', b: 'Lithium: floats, steady fizzing.\nSodium: floats, melts into a ball, moves about quickly.\nPotassium: floats; the hydrogen ignites with a lilac flame.' },
      { n: 3, f: 'Compounds of Group 1 metals with non-metals', b: 'Ionic compounds containing the M⁺ ion; white solids that dissolve to give colourless solutions.' },
      { n: 4, f: 'Halogens: form of the element, ion charge and trends down the group', b: 'Diatomic molecules (F₂, Cl₂, Br₂, I₂). They form 1− halide ions with metals. Down the group: reactivity decreases; melting and boiling points increase.' },
      { n: 5, f: 'Appearance of fluorine, chlorine, bromine and iodine at room temperature', b: 'Fluorine: pale yellow gas. Chlorine: pale yellow-green gas. Bromine: red-brown liquid. Iodine: grey-black solid.' },
      { n: 6, f: 'Chlorine water + lithium bromide solution: equation and what you see', b: 'Cl₂ + 2LiBr → 2LiCl + Br₂ (ionic: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂). The solution turns yellow-orange.' },
      { n: 7, f: 'Explain why Group 1 metals get more reactive down the group', b: 'More energy levels: the outer electron is further from the nucleus with more shielding, so the attraction is weaker and the electron is lost more easily.' },
      { n: 8, f: 'Explain why halogens get less reactive down the group', b: 'More energy levels: the outer level is further from the nucleus with more shielding, so the attraction for an incoming electron is weaker and an electron is gained less easily.' },
    ]),
    ...sub(T7, 'transition-metals-9202', '3.7.2', [
      { n: 1, f: 'Where are the transition metals, and what three properties do many of them have?', b: 'In the centre of the periodic table, between Groups 2 and 3. Many form ions with different charges, form coloured compounds and are useful as catalysts.' },
      { n: 2, f: 'Transition metals compared with Group 1 metals', b: 'Higher melting points (except mercury) and higher densities; stronger and harder; much less reactive, so they react far less vigorously with water and oxygen.' },
      { n: 3, f: 'Which transition metal is the melting-point exception?', b: 'Mercury: liquid at room temperature, melting at −39 °C. The exception is for melting point only — its density is still high.' },
      { n: 4, f: 'Charge on the vanadium ion in V₂O₅, and the compound’s name', b: 'Five O²⁻ give 10−, shared by two V ions: V⁵⁺. Vanadium(V) oxide.' },
      { n: 5, f: 'Name CuBr and give the formula of iron(III) nitrate', b: 'CuBr: copper(I) bromide (Br⁻ is 1−, so Cu⁺).\nIron(III) nitrate: Fe(NO₃)₃.' },
      { n: 6, f: 'Is every transition metal compound coloured?', b: 'No — "many", not all. Zinc compounds and anhydrous copper(II) sulfate are white.' },
      { n: 7, f: 'Transition metal catalysts in the Haber and Contact processes', b: 'Haber process: iron.\nContact process (stage 2, SO₂ → SO₃): vanadium(V) oxide, V₂O₅.' },
    ]),

    // 8 The rate and extent of chemical change
    ...sub(T8, 'rate-of-reaction-9202', '3.8.1', [
      { n: 1, f: 'Ways to calculate a mean rate of reaction, with units', b: 'Mass of reactant used ÷ time (g/s); volume of gas formed ÷ time (cm³/s); moles ÷ time (mol/s). For a time to a visible change, 1 ÷ time (s⁻¹).' },
      { n: 2, f: 'A gas syringe reads 21 cm³ at 20 s and 57 cm³ at 50 s. Mean rate over this interval?', b: '(57 − 21) ÷ (50 − 20) = 36 ÷ 30 = 1.2 cm³/s' },
      { n: 3, f: 'Collision theory and activation energy', b: 'Particles react only when they collide with sufficient energy. Activation energy is the minimum energy particles need for a reaction to happen.' },
      { n: 4, f: 'Why does raising the temperature increase the rate?', b: 'Particles move faster, so they collide more frequently and more energetically. A greater proportion of collisions have at least the activation energy.' },
      { n: 5, f: 'How do concentration, pressure and surface area increase the rate?', b: 'Concentration and pressure: more particles in the same volume. Surface area: more particles exposed. Each gives more frequent collisions — but not more energetic ones.' },
      { n: 6, f: 'Catalyst: what it does and why industry uses one', b: 'Alters the rate of a reaction and is not used up (same mass at the end); it does not change the amount of product. Industry: faster production, lower temperatures and pressures (less energy), and it can be reused, reducing costs.' },
      { n: 7, f: 'A product curve levels off. What does that mean, and what does a faster run with the same reactants look like?', b: 'The reaction has stopped: a reactant is used up. A faster run starts steeper, levels off sooner, at the same height.' },
    ]),
    ...sub(T8, 'factors-affecting-equilibrium-9202', '3.8.2', [
      { n: 1, f: 'Equilibrium (9202 definition)', b: 'In a closed system, the forward and backward reactions occur at exactly the same rate. Both reactions continue; the amounts stay constant but are usually not equal.' },
      { n: 2, f: 'Effect of raising the temperature on an equilibrium', b: 'The yield of the endothermic direction increases; the yield of the exothermic direction decreases. (Lowering the temperature does the opposite.)' },
      { n: 3, f: 'Effect of increasing the pressure on an equilibrium of gases', b: 'It favours the reaction producing the fewest molecules of gas. If both sides have the same number of molecules, the yield does not change.' },
      { n: 4, f: 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). Effect of increasing the pressure?', b: '1 molecule on the left, 2 on the right, so the backward reaction is favoured: more PCl₅ remains.' },
      { n: 5, f: 'Does a catalyst change the yield at equilibrium?', b: 'No. It speeds up the forward and backward reactions equally, so equilibrium is reached sooner but the amounts are the same.' },
      { n: 6, f: 'Four things industry balances when choosing conditions', b: 'Yield, rate, cost and safety. For an exothermic forward reaction a low temperature gives the best yield but is too slow, so a compromise temperature is used.' },
    ]),
    ...sub(T8, 'production-of-ammonia-and-sulfuric-acid-9202', '3.8.3', [
      { n: 1, f: 'Haber process: equation, raw materials and conditions', b: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Nitrogen from the air; hydrogen from natural gas or other sources. Iron catalyst, about 450 °C, about 200 atmospheres.' },
      { n: 2, f: 'Haber process: how is ammonia separated, and what happens to unreacted gases?', b: 'Cooling: ammonia condenses at a much higher temperature than nitrogen or hydrogen, so it liquefies and is removed. Unreacted nitrogen and hydrogen are recycled.' },
      { n: 3, f: 'Why is about 450 °C used in the Haber process?', b: 'The forward reaction is exothermic, so a lower temperature would give a higher yield but would be too slow. 450 °C is a compromise.' },
      { n: 4, f: 'Why not use a pressure much higher than 200 atmospheres in the Haber process?', b: 'Higher pressure gives a higher yield (4 → 2 molecules) and faster rate, but needs stronger, more expensive equipment and more energy, and is more dangerous.' },
      { n: 5, f: 'Why are fertilizers made from ammonia needed?', b: 'Crops need nitrogen to make proteins, and most cannot take it from the air; harvesting removes nutrients; the population is rising and farmland is limited, so fertilizers maximise food yields.' },
      { n: 6, f: 'The three stages of the contact process', b: '1. S + O₂ → SO₂\n2. 2SO₂ + O₂ ⇌ 2SO₃ (exothermic)\n3. H₂O + SO₃ → H₂SO₄' },
      { n: 7, f: 'Contact process stage 2: conditions, and why atmospheric pressure is used', b: 'Vanadium(V) oxide catalyst, around 450 °C, atmospheric pressure. The yield is already high, so the extra cost of high pressure is not justified.' },
    ]),
    ...sub(T8, 'redox-reactions-9202', '3.8.4', [
      { n: 1, f: 'Oxidation and reduction in terms of oxygen', b: 'Oxidation: gain of oxygen by a substance.\nReduction: loss of oxygen from a substance.' },
      { n: 2, f: 'Oxidation and reduction in terms of electrons', b: 'Oxidation is loss of electrons; reduction is gain of electrons (OIL RIG).' },
      { n: 3, f: 'In Fe₂O₃ + 3CO → 2Fe + 3CO₂, what is oxidised and what is reduced?', b: 'Fe₂O₃ loses oxygen: reduced.\nCO gains oxygen: oxidised.' },
      { n: 4, f: 'Zinc in lead(II) nitrate solution: ionic equation and half equations', b: 'Zn + Pb²⁺ → Zn²⁺ + Pb\nZn → Zn²⁺ + 2e⁻ (oxidation)\nPb²⁺ + 2e⁻ → Pb (reduction)' },
      { n: 5, f: 'Is MgO + 2HCl → MgCl₂ + H₂O a redox reaction?', b: 'No. The ions only change partners; no particle gains or loses electrons and nothing gains oxygen. Neutralisation, precipitation and carbonate decomposition are not redox.' },
      { n: 6, f: 'Fe²⁺ → Fe³⁺ + e⁻: oxidation or reduction?', b: 'Oxidation — an electron is lost, so the ion becomes more positive.' },
    ]),

    // 9 Energy changes
    ...sub(T9, 'exothermic-and-endothermic-reactions-9202', '3.9.1', [
      { n: 1, f: 'Exothermic and endothermic reactions', b: 'Exothermic: transfers energy to the surroundings, which get hotter; ΔH negative.\nEndothermic: takes in energy from the surroundings, which get colder; ΔH positive.' },
      { n: 2, f: 'Three types of exothermic reaction, and two everyday uses', b: 'Combustion, many oxidation reactions (e.g. rusting) and neutralisation.\nUses: self-heating cans and hand warmers.' },
      { n: 3, f: 'A type of endothermic reaction, and an everyday use', b: 'Thermal decomposition (e.g. calcium carbonate → calcium oxide + carbon dioxide).\nUse: sports injury packs that go cold (e.g. ammonium nitrate dissolving in water).' },
      { n: 4, f: 'Hydrated copper sulfate ⇌ anhydrous copper sulfate + water: colours and energy changes', b: 'Heating: blue → white, endothermic.\nAdding water: white → blue and it gets hot, exothermic. The same amount of energy is transferred each way.' },
    ]),
    ...sub(T9, 'calculating-and-explaining-energy-change-9202', '3.9.2', [
      { n: 1, f: 'Q = mcΔT: what each symbol means, with units', b: 'Q: energy transferred (J). m: mass of water or solution heated (g) — not the fuel. c: specific heat capacity (4.2 J/g °C for water). ΔT: temperature change (°C).' },
      { n: 2, f: '0.50 g of a fuel heats 100 g of water by 15.0 °C. Energy released per gram? (c = 4.2 J/g °C)', b: 'Q = 100 × 4.2 × 15.0 = 6300 J = 6.30 kJ.\n6.30 ÷ 0.50 = 12.6 kJ/g' },
      { n: 3, f: 'Why are calorimetry results usually lower than the true value?', b: 'Energy heats the container, thermometer and air; fuels burn incompletely; fuel evaporates from the wick; slow reactions lose more heat before the highest temperature is reached.' },
      { n: 4, f: 'Reaction profile: how are activation energy and ΔH read, and what does a catalyst change?', b: 'Activation energy = peak − reactant level. ΔH = product level − reactant level. A catalyst gives a lower peak with the same start, finish and ΔH.', src: ENER },
      { n: 5, f: 'Bond breaking and bond making: energy and the overall sign', b: 'Breaking bonds takes energy in; making bonds gives energy out. Energy change = bonds broken − bonds formed: negative (exothermic) when more is released making bonds.' },
      { n: 6, f: 'CO + H₂O → CO₂ + H₂. Bond energies: C≡O 1077, O–H 464, C=O 805, H–H 436 kJ/mol. Energy change?', b: 'Broken: 1077 + 2 × 464 = 2005. Formed: 2 × 805 + 436 = 2046.\n2005 − 2046 = −41 kJ/mol (exothermic).' },
    ]),
    ...sub(T9, 'chemical-cells-and-fuel-cells-9202', '3.9.3', [
      { n: 1, f: 'Chemical cell, and why it stops producing a potential difference', b: 'It contains reactants that react to transfer energy electrically. It produces a pd until a reactant is used up — not because it "runs out of electricity".' },
      { n: 2, f: 'Fuel cell, and how it differs from a chemical cell', b: 'It produces electricity from the reaction of a fuel with oxygen, both supplied from outside, so it works as long as they keep being supplied. It is refuelled, not replaced.' },
      { n: 3, f: 'Hydrogen–oxygen fuel cell: overall reaction, waste product and uses', b: '2H₂ + O₂ → 2H₂O, without burning. Water is the only waste product. Uses: cars and spacecraft.' },
      { n: 4, f: 'Why do fuel cells cause less pollution only "when in use"?', b: 'Only water is released at the vehicle, but making the hydrogen may use fossil fuels or electricity from them, so pollution can be released elsewhere.' },
      { n: 5, f: 'Two disadvantages of storing hydrogen as a fuel', b: 'It is a very low-density gas, so a useful mass has a huge volume and must be kept at high pressure in strong, heavy tanks (or cooled to a liquid); it is highly flammable and leaks can explode.' },
      { n: 6, f: 'Why might a hydrogen engine release a pollutant that a fuel cell does not?', b: 'The engine burns hydrogen in air at high temperature, so oxides of nitrogen can form. The fuel cell does not burn it.' },
      { n: 7, f: 'Mass of water made from 3.0 kg of hydrogen in a fuel cell (H = 1, O = 16)', b: '3000 ÷ 2 = 1500 mol H₂ → 1500 mol H₂O.\n1500 × 18 = 27 000 g = 27 kg (always 9 × the mass of hydrogen).' },
    ]),

    // 10 Organic chemistry
    ...sub(T10, 'carbon-compounds-as-fuels-9202', '3.10.1', [
      { n: 1, f: 'Crude oil vs the hydrocarbons in it', b: 'Crude oil is a mixture; each hydrocarbon in it is a compound.', src: FUEL },
      { n: 2, f: 'How does fractional distillation separate crude oil?', b: 'The oil is vaporised and fed into a column that is hotter at the base than the top. Each vapour rises until it reaches a level cooler than its boiling point, then condenses and is tapped off. It is continuous.' },
      { n: 3, f: 'Saturated vs unsaturated', b: 'Saturated: only single C–C bonds.\nUnsaturated: at least one C=C.', src: FUEL },
      { n: 4, f: 'General formulae of alkanes and alkenes, and the formula of the alkane with 20 carbons', b: 'Alkanes: CₙH₂ₙ₊₂. Alkenes: CₙH₂ₙ.\nC₂₀H₄₂' },
      { n: 5, f: 'How do boiling point, viscosity and flammability change as hydrocarbon molecules get bigger?', b: 'Boiling point rises, viscosity increases and flammability decreases — so short-chain hydrocarbons make better fuels.' },
      { n: 6, f: 'Complete and incomplete combustion of ethane', b: 'Complete: 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O.\nIncomplete (oxygen short): CO or soot forms, e.g. 2C₂H₆ + 5O₂ → 4CO + 6H₂O. Water still forms.' },
      { n: 7, f: 'Acid rain vs global dimming vs climate change: the pollutants', b: 'Acid rain: SO₂ (sulfur in the fuel) and NOₓ (air reacting at high temperature).\nGlobal dimming: particulates.\nClimate change: CO₂.', src: FUEL },
      { n: 8, f: 'Making ethanol: hydration of ethene vs fermentation', b: 'Hydration: C₂H₄ + H₂O → C₂H₅OH; phosphoric acid, about 300 °C, high pressure; fast, continuous, pure; non-renewable raw material.\nFermentation: yeast enzymes, 20–35 °C; slow, batch, dilute; renewable sugar.' },
      { n: 9, f: 'Biofuels: renewability, land use and carbon footprint', b: 'Renewable: crops regrow. Land use: fuel crops can take land from food or lead to forest clearing. Carbon footprint: growing plants absorb CO₂, but farming, processing and transport add emissions, so it is reduced, not removed.' },
      { n: 10, f: 'Cracking: what it is and the two methods', b: 'Thermal decomposition of large hydrocarbons into smaller alkanes and alkenes. Vaporise them, then pass over a hot catalyst, or mix with steam and heat to a very high temperature.' },
      { n: 11, f: 'Fractional distillation vs cracking', b: 'Fractional distillation: physical separation by boiling point.\nCracking: a chemical reaction that breaks molecules.', src: FUEL },
      { n: 12, f: 'Required practical: testing for a C=C double bond', b: 'Shake with bromine water. Alkene: orange → colourless. Alkane: stays orange.', src: FUEL },
    ]),
    ...sub(T10, 'synthetic-and-naturally-occurring-polymers-9202', '3.10.2', [
      { n: 1, f: 'Monomer and polymer', b: 'Monomer: a small molecule that can join with many others.\nPolymer: a very large molecule formed from many monomers joined together.' },
      { n: 2, f: 'Addition polymerisation of an alkene: what happens?', b: 'One bond of each C=C opens and the freed bonds link neighbouring monomers into a long chain. Nothing else is made. Ethene → poly(ethene); propene → poly(propene).' },
      { n: 3, f: 'Give the monomer of the chain unit –(CHF–CF₂)n–', b: 'CHF=CF₂ — remove the bonds through the brackets and the n, and put a double bond between the two carbons.' },
      { n: 4, f: 'LD vs HD poly(ethene)', b: 'Same monomer, different conditions and catalysts. LD: highly branched chains, loose packing, weaker forces — flexible, lower density. HD: mainly unbranched, close packing, stronger forces — rigid, higher density.' },
      { n: 5, f: 'Thermosoftening vs thermosetting polymers', b: 'Thermosoftening: separate chains held by weak intermolecular forces; soften and melt on heating.\nThermosetting: chains joined by strong covalent cross-links; do not melt.' },
      { n: 6, f: 'Why are non-biodegradable polymers a problem, and what does biodegradable mean?', b: 'Biodegradable: can be broken down by microbes. Many polymers are not, so they persist in landfill and as litter that harms wildlife.' },
      { n: 7, f: 'Polymer + cornstarch bag vs biodegradable plastic made from cornstarch', b: 'Polymer + cornstarch: microbes digest the starch so the bag falls apart, but polymer fragments may remain.\nCornstarch plastic: the whole material can be broken down by microbes.' },
    ]),
    ...sub(T10, 'organic-compounds-their-structure-and-reactions-9202', '3.10.3', [
      { n: 1, f: 'Functional groups of alcohols, carboxylic acids and esters', b: 'Alcohols: –OH (names end -ol).\nCarboxylic acids: –COOH (end -oic acid).\nEsters: –COO– (two words, the second ending -oate).' },
      { n: 2, f: 'Alcohols: effect on water, reaction with sodium, and combustion', b: 'Dissolve to give a neutral solution (pH 7). With sodium: fizzing, hydrogen given off. Burn completely to carbon dioxide and water.' },
      { n: 3, f: 'Complete combustion of ethanol', b: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O' },
      { n: 4, f: 'Two ways to oxidise ethanol to ethanoic acid', b: 'A chemical oxidising agent (e.g. acidified potassium dichromate), or microbial action using oxygen from the air — why opened wine turns sour. Ethanoic acid is the main acid in vinegar.' },
      { n: 5, f: 'Ethanoic acid + potassium carbonate: balanced equation', b: '2CH₃COOH + K₂CO₃ → 2CH₃COOK + H₂O + CO₂ (fizzing; the gas turns limewater milky).' },
      { n: 6, f: 'Why does 0.1 mol/dm³ ethanoic acid have a higher pH than 0.1 mol/dm³ nitric acid?', b: 'Ethanoic acid is a weak acid: it only partly ionises (CH₃COOH ⇌ CH₃COO⁻ + H⁺), so it gives fewer H⁺ ions. Nitric acid ionises completely.' },
      { n: 7, f: 'Making ethyl ethanoate, and two properties and uses of esters', b: 'Ethanol + ethanoic acid ⇌ ethyl ethanoate + water, with an acid catalyst.\nEsters are volatile with distinctive smells, used in flavourings and perfumes.' },
    ]),
  ],
};
