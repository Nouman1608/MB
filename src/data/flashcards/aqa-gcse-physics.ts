/**
 * D-444 -- flashcards for AQA GCSE Physics 8463 (for first teaching 2016).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: content the specification marks (HT only), following the
 *               "Higher tier only" labels on Marlbridge's own 8463 revision notes and
 *               study guides. Foundation candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 8463); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for symbols.
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

const DISS = 'aqa-gcse-physics-energy-revision-notes';
const RES = 'aqa-gcse-physics-8463-national-and-global-energy-resources-revision-notes';
const ATOM = 'aqa-gcse-physics-8463-atomic-structure-revision-notes';
const FORCE = 'aqa-gcse-physics-8463-forces-revision-notes';
const WAVE = 'aqa-gcse-physics-8463-waves-revision-notes';
const MAG = 'aqa-gcse-physics-8463-magnetism-and-electromagnetism-revision-notes';

export const DECK_AQA_GCSE_PHYSICS: FlashcardDeck = {
  boardSlug: 'aqa',
  qualificationSlug: 'gcse',
  subjectSlug: 'physics',
  syllabusCode: '8463',
  syllabusSeries: 'For first teaching 2016',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'iftikhar-azeemi', reviewedOn: '2026-11-05' },
  cards: [
    // 4.1 Energy
    ...sub('energy-aqa-gcse', 'energy-changes-in-a-system', '4.1.1', [
      { n: 1, f: 'What is a system, in energy questions?', b: 'An object or group of objects. When a system changes, energy is stored differently before and after the change, but the total amount is conserved.' },
      { n: 2, f: 'Three ways the energy of a system can be changed', b: 'Heating, work done by a force, and work done when a current flows.' },
      { n: 3, f: 'Kinetic energy equation, with units', b: 'Ek = ½mv²\nEk in J, m in kg, v in m/s.' },
      { n: 4, f: 'A moving object doubles its speed. What happens to its kinetic energy?', b: 'It quadruples (× 4), because Ek depends on v².' },
      { n: 5, f: 'Elastic potential energy equation, and the condition for using it', b: 'Ee = ½ke² (k spring constant in N/m, e extension in m). It applies only within the limit of proportionality.' },
      { n: 6, f: 'Gravitational potential energy equation, with units', b: 'Ep = mgh\nEp in J, m in kg, g in N/kg, h (height gained) in m.' },
      { n: 7, f: 'Specific heat capacity: definition and equation', b: 'The energy needed to raise the temperature of 1 kg of a substance by 1 °C.\nΔE = mcΔθ (J, kg, J/kg °C, °C).' },
      { n: 8, f: 'Required practical 1: what is measured, and the main source of error?', b: 'The specific heat capacity of a material: an electric heater supplies a measured amount of energy and the temperature rise is recorded. Some energy is always dissipated to the surroundings, so insulate the block.' },
      { n: 9, f: 'Power: definition and two equations', b: 'Power is the rate of energy transfer (or the rate of doing work).\nP = E/t and P = W/t. 1 W = 1 J/s.' },
      { n: 10, f: 'A 0.20 kg ball is thrown up at 8.0 m/s. What is its kinetic energy at launch?', b: 'Ek = ½ × 0.20 × 8.0² = 6.4 J' },
    ]),
    ...sub('energy-aqa-gcse', 'conservation-and-dissipation-of-energy', '4.1.2', [
      { n: 1, f: 'Principle of conservation of energy', b: 'Energy cannot be created or destroyed, only transferred usefully, stored or dissipated.' },
      { n: 2, f: 'Name the eight energy stores', b: 'Kinetic, gravitational potential, elastic potential, chemical, thermal, magnetic, electrostatic and nuclear.' },
      { n: 3, f: 'Four ways energy is transferred between stores', b: 'Mechanically (by a force), electrically (by a current), by heating, and by radiation (light and sound).' },
      { n: 4, f: 'What happens to “wasted” energy?', b: 'It is dissipated, usually to the thermal store of the surroundings, where it is spread out and hard to use. It is not destroyed.' },
      { n: 5, f: 'Efficiency equations', b: 'efficiency = useful output energy transfer ÷ total input energy transfer\nefficiency = useful power output ÷ total power input\nNo unit; × 100 for a percentage. It can never exceed 1 (100%).' },
      { n: 6, f: 'Lubrication', b: 'Reduces friction between moving surfaces, so less energy is dissipated.', src: DISS },
      { n: 7, f: 'Thermal insulation', b: 'Reduces the rate of energy transfer by conduction.', src: DISS },
      { n: 8, f: 'Two properties of a wall that decide how fast a house loses energy', b: 'Its thickness (thicker → slower transfer) and the thermal conductivity of the material (lower → slower transfer).' },
      { n: 9, f: 'How can the efficiency of an intended energy transfer be increased?', b: 'Reduce wasted transfers: reduce friction (for example by lubrication) and reduce unwanted heating (for example by thermal insulation).', u: true },
    ]),
    ...sub('energy-aqa-gcse', 'national-and-global-energy-resources', '4.1.3', [
      { n: 1, f: 'Renewable energy resource', b: 'One that is being (or can be) replenished as it is used.', src: RES },
      { n: 2, f: 'Non-renewable energy resource', b: 'One that is not replenished as it is used. Supplies are finite, so it will eventually run out.', src: RES },
      { n: 3, f: 'Which of the main energy resources are non-renewable?', b: 'Fossil fuels (coal, oil and gas) and nuclear fuel. Bio-fuel, wind, hydro-electricity, geothermal, the tides, the Sun and water waves are renewable.' },
      { n: 4, f: 'Is renewable the same as reliable? Give an example.', b: 'No. Wind is renewable but unreliable (no output on still days). Coal is reliable but non-renewable.' },
      { n: 5, f: 'Tidal power vs wave power: which is predictable, and why?', b: 'Tidal: tides happen at known times each day. Waves depend on the weather, so wave power is unreliable.' },
      { n: 6, f: 'Environmental impacts of burning fossil fuels', b: 'Carbon dioxide is released, which contributes to global warming and climate change. Coal and oil also release sulfur dioxide, which causes acid rain.' },
      { n: 7, f: 'Environmental impact of nuclear power', b: 'No carbon dioxide while running, but it produces radioactive waste that must be stored safely for a very long time, and there is a risk of a serious accident.' },
      { n: 8, f: 'Science can identify an energy problem but not always solve it. Name the kinds of barrier.', b: 'Political, social, ethical and economic considerations (for example cost, energy security, local objections, lost jobs).' },
    ]),

    // 4.2 Electricity
    ...sub('electricity-aqa-gcse', 'current-potential-difference-and-resistance-aqa', '4.2.1', [
      { n: 1, f: 'Electric current: definition and equation', b: 'The rate of flow of electrical charge.\nQ = It (Q in C, I in A, t in s).' },
      { n: 2, f: 'Equation linking potential difference, current and resistance', b: 'V = IR (V in volts, I in amperes, R in ohms).' },
      { n: 3, f: 'Ohmic conductor', b: 'A conductor in which current is directly proportional to potential difference at constant temperature, so its resistance is constant.' },
      { n: 4, f: 'I–V graph of a filament lamp, and why it has that shape', b: 'An S-shaped curve that flattens at both ends. As the current rises the filament gets hotter and its resistance increases.' },
      { n: 5, f: 'How does a diode behave?', b: 'Current flows in one direction only. Its resistance is very high in the reverse direction.' },
      { n: 6, f: 'Thermistor vs LDR', b: 'Thermistor: resistance falls as temperature rises (used in thermostats).\nLDR: resistance falls as light intensity rises (used for lights that switch on in the dark).' },
      { n: 7, f: 'How do you connect meters to measure the resistance of a component?', b: 'Ammeter in series with the component; voltmeter in parallel across it. Then R = V ÷ I.' },
      { n: 8, f: 'Required practical 3: how does the resistance of a wire depend on its length?', b: 'Resistance is directly proportional to length. Keep the temperature constant (small current, switch off between readings).' },
      { n: 9, f: 'A lamp has 3.0 V across it and 0.60 A through it. What is its resistance?', b: 'R = 3.0 ÷ 0.60 = 5.0 Ω' },
    ]),
    ...sub('electricity-aqa-gcse', 'series-and-parallel-circuits-aqa', '4.2.2', [
      { n: 1, f: 'Current and potential difference in a series circuit', b: 'The current is the same through each component. The supply pd is shared between the components.' },
      { n: 2, f: 'Current and potential difference in a parallel circuit', b: 'The pd is the same across each branch. The branch currents add up to the total current.' },
      { n: 3, f: 'Total resistance of resistors in series', b: 'R_total = R₁ + R₂ (adding a resistor in series increases the total resistance).' },
      { n: 4, f: 'Why does adding a resistor in parallel decrease the total resistance?', b: 'It gives the charge an extra path. The total resistance of two resistors in parallel is less than the smaller one.' },
      { n: 5, f: 'A 10 Ω and a 15 Ω resistor are in series with a 5.0 V supply. Find the current.', b: 'R_total = 25 Ω, so I = 5.0 ÷ 25 = 0.20 A' },
      { n: 6, f: 'In a thermistor and fixed-resistor circuit, what happens to the thermistor’s share of the pd when it gets colder?', b: 'Its resistance rises, so it takes a bigger share of the supply pd.' },
    ]),
    ...sub('electricity-aqa-gcse', 'domestic-uses-and-safety', '4.2.3', [
      { n: 1, f: 'Direct vs alternating potential difference', b: 'Direct: one direction only (cells and batteries).\nAlternating: keeps reversing direction (the mains).' },
      { n: 2, f: 'Frequency and potential difference of the UK mains supply', b: 'Alternating current at 50 Hz and about 230 V.' },
      { n: 3, f: 'Live, neutral and earth wires: colours', b: 'Live: brown.\nNeutral: blue.\nEarth: green and yellow stripes.' },
      { n: 4, f: 'What does each wire do, and what is its pd?', b: 'Live: carries the alternating pd, about 230 V. Neutral: completes the circuit, at or close to 0 V. Earth: safety wire at 0 V, carries current only if there is a fault.' },
      { n: 5, f: 'Why is a live wire dangerous even when the switch is open?', b: 'It is still at about 230 V and your body is at 0 V, so touching it puts a large pd across you and a current flows through you: an electric shock.' },
      { n: 6, f: 'What is the danger of a connection between the live wire and earth?', b: 'It is a low-resistance path, so a very large current flows, which can cause a fire (or a shock if the path is through a person).' },
    ]),
    ...sub('electricity-aqa-gcse', 'energy-transfers-aqa-electricity', '4.2.4', [
      { n: 1, f: 'Two equations for electrical power', b: 'P = VI\nP = I²R\n(P in W, V in V, I in A, R in Ω)' },
      { n: 2, f: 'Two equations for energy transferred electrically', b: 'E = Pt (J, W, s)\nE = QV (J, C, V)' },
      { n: 3, f: 'What does the energy transferred by an appliance depend on?', b: 'Its power and how long it is switched on. Work is done when charge flows; motors transfer energy to kinetic stores, heaters to thermal stores.' },
      { n: 4, f: 'A 1.5 kW heater is on for 2 hours. How much energy does it transfer?', b: 'E = Pt = 1500 × 7200 = 10 800 000 J (10.8 MJ)' },
      { n: 5, f: 'The National Grid', b: 'A system of cables and transformers linking power stations to consumers. Step-up transformers raise the pd for transmission; step-down transformers lower it for domestic use.' },
      { n: 6, f: 'Why is electricity transmitted at a high potential difference?', b: 'For the same power (P = VI), a higher pd means a lower current. A lower current means much less heating of the cables (P = I²R), so less energy is wasted.' },
    ]),
    ...sub('electricity-aqa-gcse', 'static-electricity', '4.2.5', [
      { n: 1, f: 'How do two insulators become charged when rubbed together?', b: 'Electrons are transferred from one to the other. The one that gains electrons becomes negative; the one that loses them becomes equally positive.' },
      { n: 2, f: 'Forces between charged objects', b: 'Like charges repel; unlike charges attract. Both are non-contact forces.' },
      { n: 3, f: 'Electric field', b: 'The region around a charged object where another charged object experiences a force.' },
      { n: 4, f: 'Electric field lines round an isolated charged sphere', b: 'Radial: outward for a positive sphere, inward for a negative one. The field is strongest close to the sphere.' },
      { n: 5, f: 'Why does sparking happen?', b: 'Charge builds up on an object, so the pd between it and a nearby earthed object becomes large enough for electrons to jump across the gap.' },
      { n: 6, f: 'Exam trap: which charged particles move when an object is charged by friction?', b: 'Only electrons. Protons and “positive charge” do not move.' },
    ]),

    // 4.3 Particle model of matter
    ...sub('particle-model-of-matter-aqa-gcse', 'changes-of-state-and-the-particle-model', '4.3.1', [
      { n: 1, f: 'Density equation, with units', b: 'ρ = m / V\nρ in kg/m³, m in kg, V in m³.' },
      { n: 2, f: 'Why is a gas much less dense than the same substance as a solid or liquid?', b: 'The same mass of particles is spread over a much bigger volume, because gas particles are far apart.' },
      { n: 3, f: 'Particle arrangement and motion in a solid, a liquid and a gas', b: 'Solid: touching, regular, vibrate in place.\nLiquid: touching, irregular, slide past each other.\nGas: far apart, random, move fast in all directions.' },
      { n: 4, f: 'Why is a change of state a physical change?', b: 'Mass is conserved and, if the change is reversed, the material gets its original properties back. No new substance forms.' },
      { n: 5, f: 'Required practical 5: finding the volume of an irregular solid', b: 'By displacement: measure the rise in water level in a measuring cylinder, or collect the overflow from a eureka can in a measuring cylinder.' },
      { n: 6, f: 'A 0.60 kg block has a volume of 2.4 × 10⁻⁴ m³. What is its density?', b: 'ρ = 0.60 ÷ 2.4 × 10⁻⁴ = 2500 kg/m³' },
      { n: 7, f: 'Sublimation', b: 'A change of state from solid straight to gas.' },
    ]),
    ...sub('particle-model-of-matter-aqa-gcse', 'internal-energy-and-energy-transfers', '4.3.2', [
      { n: 1, f: 'Internal energy', b: 'The total kinetic energy and potential energy of all the particles (atoms and molecules) that make up a system.' },
      { n: 2, f: 'Two things heating a system can do', b: 'Raise its temperature (particles gain kinetic energy), or change its state (particles gain potential energy, temperature stays constant).' },
      { n: 3, f: 'Specific latent heat', b: 'The energy needed to change the state of 1 kg of a substance with no change in temperature.\nE = mL (J, kg, J/kg).' },
      { n: 4, f: 'Specific latent heat of fusion vs of vaporisation', b: 'Fusion: solid ↔ liquid.\nVaporisation: liquid ↔ vapour.' },
      { n: 5, f: 'What is happening on a flat section of a heating graph?', b: 'A change of state (melting or boiling). The energy supplied raises the internal energy, but the temperature stays constant. Use E = mL, not ΔE = mcΔθ.' },
      { n: 6, f: 'How much energy melts 0.50 kg of ice at 0 °C? (L = 334 000 J/kg)', b: 'E = mL = 0.50 × 334 000 = 167 000 J' },
    ]),
    ...sub('particle-model-of-matter-aqa-gcse', 'particle-model-and-pressure', '4.3.3', [
      { n: 1, f: 'What causes gas pressure?', b: 'Molecules in constant random motion collide with the container walls, producing a net force at right angles to the wall.' },
      { n: 2, f: 'Temperature of a gas is related to…', b: 'The average kinetic energy of its molecules.' },
      { n: 3, f: 'Why does the pressure of a gas rise when it is heated at constant volume?', b: 'The molecules move faster, so they hit the walls more often and with more force.' },
      { n: 4, f: 'Why does the pressure of a gas fall when its volume increases at constant temperature?', b: 'The molecules move at the same speed but hit each unit area of the wall less often.' },
      { n: 5, f: 'Gas at 200 kPa in 0.050 m³ is compressed to 0.020 m³ at constant temperature. New pressure?', b: 'p₁V₁ = p₂V₂, so p₂ = 200 × 0.050 ÷ 0.020 = 500 kPa' },
      { n: 6, f: 'Why does a bicycle pump get warm when you use it?', b: 'Work is done on the gas (work is the transfer of energy by a force). This increases the internal energy of the gas, so its temperature rises.', u: true },
    ]),

    // 4.4 Atomic structure
    ...sub('atomic-structure-aqa-gcse', 'atoms-and-isotopes-aqa', '4.4.1', [
      { n: 1, f: 'Size of an atom and of its nucleus', b: 'Atom radius: about 1 × 10⁻¹⁰ m.\nNucleus radius: less than 1/10 000 of the radius of the atom.' },
      { n: 2, f: 'Atomic number vs mass number', b: 'Atomic number: protons only. Mass number: protons + neutrons.', src: ATOM },
      { n: 3, f: 'Isotope vs ion', b: 'Isotopes of an element have different numbers of neutrons. An ion has a different number of electrons from protons (so it is charged).', src: ATOM },
      { n: 4, f: 'How many protons, neutrons and electrons are in an atom of sodium-23 (atomic number 11)?', b: '11 protons, 23 − 11 = 12 neutrons, 11 electrons.' },
      { n: 5, f: 'What happens to an electron when an atom absorbs or emits electromagnetic radiation?', b: 'Absorbs: the electron moves to a higher energy level (further from the nucleus).\nEmits: it moves to a lower energy level (closer to the nucleus).' },
      { n: 6, f: 'Plum pudding model vs nuclear model', b: 'Plum pudding: a ball of positive charge with electrons embedded in it.\nNuclear: mass and positive charge concentrated in a tiny nucleus, with electrons outside.', src: ATOM },
      { n: 7, f: 'Alpha scattering: what each observation showed', b: 'Most went straight through: the atom is mostly empty space.\nSome were deflected: the centre is charged.\nVery few bounced back: the centre is tiny and holds most of the mass.' },
      { n: 8, f: 'Who gave evidence for the neutron, and when, relative to the nuclear model?', b: 'James Chadwick, about 20 years after the nucleus became an accepted idea.' },
    ]),
    ...sub('atomic-structure-aqa-gcse', 'atoms-and-nuclear-radiation', '4.4.2', [
      { n: 1, f: 'Alpha, beta and gamma: what each is', b: 'Alpha: 2 protons + 2 neutrons (a helium nucleus).\nBeta: a high-speed electron ejected from the nucleus as a neutron turns into a proton.\nGamma: electromagnetic radiation from the nucleus.' },
      { n: 2, f: 'Penetration and ionising power of alpha, beta and gamma', b: 'Alpha: stopped by paper, a few cm in air, most ionising.\nBeta: stopped by thin aluminium.\nGamma: reduced by thick lead or concrete, least ionising.' },
      { n: 3, f: 'Activity', b: 'The number of decays per second of a source, in becquerel (Bq).', src: ATOM },
      { n: 4, f: 'Count-rate', b: 'The number of decays recorded each second by a detector (for example a Geiger-Muller tube).', src: ATOM },
      { n: 5, f: 'Effect of alpha and of beta decay on mass number and atomic number', b: 'Alpha: mass number − 4, atomic number − 2.\nBeta: mass number unchanged, atomic number + 1.\nGamma: no change to either.' },
      { n: 6, f: 'Half-life', b: 'The time it takes for the number of nuclei of the isotope in a sample to halve, or for the count-rate (or activity) to fall to half its initial level.' },
      { n: 7, f: 'A source has activity 800 Bq and half-life 2 days. What is its activity after 6 days?', b: '6 ÷ 2 = 3 half-lives: 800 → 400 → 200 → 100 Bq' },
      { n: 8, f: 'Net decline as a ratio after n half-lives', b: '1 : 2ⁿ. For example, after 4 half-lives it is 1 : 16.', u: true },
      { n: 9, f: 'Contamination vs irradiation', b: 'Contamination: radioactive atoms get on or into an object, so the hazard continues.\nIrradiation: the object is exposed to radiation from outside; it does not become radioactive.', src: ATOM },
    ]),
    ...sub('atomic-structure-aqa-gcse', 'hazards-and-uses-of-radioactive-emissions', '4.4.3', [
      { n: 1, f: 'Sources of background radiation', b: 'Natural: rocks and cosmic rays from space.\nMan-made: fallout from nuclear weapons testing and nuclear accidents.' },
      { n: 2, f: 'Unit of radiation dose', b: 'The sievert (Sv). 1000 millisieverts (mSv) = 1 Sv.' },
      { n: 3, f: 'Hazard of a source with a short half-life vs a long half-life', b: 'Short: very active at first but the activity falls quickly.\nLong: less intense, but stays hazardous for a long time.' },
      { n: 4, f: 'What kind of source is chosen as a medical tracer, and why?', b: 'A gamma emitter, so the radiation can leave the body and reach the detector, with a half-life of hours: long enough to do the job, short enough to limit the dose.' },
      { n: 5, f: 'Why is a beta source used to monitor the thickness of thin card?', b: 'Alpha would be stopped by the card; gamma would pass through almost unchanged, so small changes in thickness would not show.' },
    ]),
    ...sub('atomic-structure-aqa-gcse', 'nuclear-fission-and-fusion-aqa-gcse', '4.4.4', [
      { n: 1, f: 'Nuclear fission', b: 'A large unstable nucleus (such as uranium or plutonium) absorbs a neutron and splits into two smaller nuclei of roughly equal size, releasing two or three neutrons, gamma rays and energy.', src: ATOM },
      { n: 2, f: 'Chain reaction', b: 'The neutrons released by one fission go on to cause further fissions. It is controlled in a nuclear reactor and uncontrolled in a nuclear weapon.', src: ATOM },
      { n: 3, f: 'Nuclear fusion', b: 'Two light nuclei join to form a heavier nucleus. Some of the mass may be converted into the energy of radiation.', src: ATOM },
      { n: 4, f: 'What usually has to happen before a uranium-235 nucleus undergoes fission?', b: 'It must absorb a neutron. Spontaneous fission is rare.' },
      { n: 5, f: 'Fission vs fusion', b: 'Fission: a heavy nucleus splits. Fusion: light nuclei join.', src: ATOM },
    ]),

    // 4.5 Forces
    ...sub('forces-aqa-gcse', 'forces-and-their-interactions', '4.5.1', [
      { n: 1, f: 'Scalar vs vector', b: 'Scalar: magnitude only. Vector: magnitude and direction, shown by an arrow whose length represents the size.', src: FORCE },
      { n: 2, f: 'Contact forces: examples', b: 'Friction, air resistance, tension and normal contact force.', src: FORCE },
      { n: 3, f: 'Non-contact forces: examples', b: 'Gravitational, electrostatic and magnetic forces.', src: FORCE },
      { n: 4, f: 'Weight equation, and where weight acts', b: 'W = mg (W in N, m in kg, g in N/kg). Weight acts at the object’s centre of mass and is measured with a newtonmeter.' },
      { n: 5, f: 'Mass vs weight', b: 'Mass: in kg, the same everywhere. Weight: a force in N, which depends on the gravitational field strength.', src: FORCE },
      { n: 6, f: 'Find the resultant of 45 N to the right and 60 N to the left.', b: '60 − 45 = 15 N to the left' },
      { n: 7, f: 'Resolving forces and scale diagrams', b: 'A single force can be resolved into two components at right angles. If an object is in equilibrium, the force arrows drawn tip-to-tail make a closed triangle.', u: true },
    ]),
    ...sub('forces-aqa-gcse', 'work-done-and-energy-transfer-aqa', '4.5.2', [
      { n: 1, f: 'Work done equation, with units', b: 'W = Fs\nW in J, F in N, s (distance moved along the line of action of the force) in m.' },
      { n: 2, f: 'How many newton-metres is one joule?', b: '1 J = 1 N m: one joule of work is done when a force of one newton causes a displacement of one metre.' },
      { n: 3, f: 'What happens when work is done against friction?', b: 'Energy is transferred to the thermal store, so the temperature of the object rises.' },
      { n: 4, f: 'A 25 N force moves an object 4.0 m along its line of action. Work done?', b: 'W = 25 × 4.0 = 100 J' },
    ]),
    ...sub('forces-aqa-gcse', 'forces-and-elasticity', '4.5.3', [
      { n: 1, f: 'Why does stretching, bending or compressing an object need more than one force?', b: 'With only one force acting, the object would simply accelerate instead of changing shape.' },
      { n: 2, f: 'Elastic vs inelastic deformation', b: 'Elastic: the object returns to its original shape when the forces are removed. Inelastic: it does not.' },
      { n: 3, f: 'Force–extension equation, and when it applies', b: 'F = ke (F in N, k in N/m, e in m). It applies up to the limit of proportionality, where extension is directly proportional to force.' },
      { n: 4, f: 'Required practical 6: how do you find a spring constant from the results?', b: 'Extension = stretched length − original length (in m). In the linear region, k = F ÷ e, or the gradient of the force–extension graph.' },
      { n: 5, f: 'A spring (k = 25 N/m) is stretched 0.20 m. Force and energy stored?', b: 'F = 25 × 0.20 = 5.0 N\nEe = ½ × 25 × 0.20² = 0.50 J' },
      { n: 6, f: 'Work done stretching a spring', b: 'Equals the elastic potential energy stored, provided the spring is not inelastically deformed.' },
    ]),
    ...sub('forces-aqa-gcse', 'moments-levers-and-gears', '4.5.4', [
      { n: 1, f: 'Moment of a force: equation', b: 'M = Fd\nM in N m, F in N, d = perpendicular distance from the pivot to the line of action of the force, in m.' },
      { n: 2, f: 'Condition for a balanced object (principle of moments)', b: 'Total clockwise moment about a pivot = total anticlockwise moment about that pivot.' },
      { n: 3, f: 'Calculate the moment of a 30 N force acting 0.40 m from a pivot.', b: 'M = 30 × 0.40 = 12 N m' },
      { n: 4, f: 'What do levers and gears do?', b: 'They transmit the rotational effects of forces. A small gear driving a larger gear gives a bigger moment, but the larger gear turns more slowly.' },
    ]),
    ...sub('forces-aqa-gcse', 'pressure-and-pressure-differences-in-fluids', '4.5.5', [
      { n: 1, f: 'Pressure at a surface: equation and units', b: 'p = F / A\np in Pa, F (force normal to the surface) in N, A in m².' },
      { n: 2, f: 'In which direction does the pressure in a fluid act on a surface?', b: 'At right angles (normal) to the surface.' },
      { n: 3, f: 'Why does atmospheric pressure decrease with height?', b: 'The atmosphere gets less dense with height, and there is less air above a surface, so the weight of air above it is smaller.' },
      { n: 4, f: 'Pressure due to a column of liquid', b: 'p = hρg (h height of the column in m, ρ density in kg/m³, g in N/kg). Pressure increases with depth and with the density of the liquid.', u: true },
      { n: 5, f: 'Pressure due to 5.0 m of water? (ρ = 1000 kg/m³, g = 9.8 N/kg)', b: 'p = 5.0 × 1000 × 9.8 = 49 000 Pa', u: true },
      { n: 6, f: 'What causes upthrust, and when does an object float?', b: 'The pressure on the bottom surface is greater than on the top, giving a resultant upward force. An object floats if the upthrust equals its weight before it is fully submerged (its density is less than the fluid’s).', u: true },
    ]),
    ...sub('forces-aqa-gcse', 'forces-and-motion-aqa-gcse', '4.5.6', [
      { n: 1, f: 'Distance vs displacement; speed vs velocity', b: 'Distance and speed are scalars. Displacement and velocity are vectors: they include a direction.' },
      { n: 2, f: 'Typical speeds: walking, running, cycling, sound in air', b: 'Walking ~1.5 m/s, running ~3 m/s, cycling ~6 m/s, sound in air ~330 m/s.' },
      { n: 3, f: 'Acceleration equation, and the equation-sheet equation without time', b: 'a = Δv / t (m/s²)\nv² − u² = 2as' },
      { n: 4, f: 'A car accelerates from rest at 2.5 m/s² over 80 m. Final velocity?', b: 'v² = 0 + 2 × 2.5 × 80 = 400, so v = 20 m/s' },
      { n: 5, f: 'What does the gradient of a distance–time graph and of a velocity–time graph give?', b: 'Distance–time: speed.\nVelocity–time: acceleration.' },
      { n: 6, f: 'What does the area under a velocity–time graph give?', b: 'The distance travelled (displacement).', u: true },
      { n: 7, f: 'Terminal velocity', b: 'The steady velocity reached when the resistive force (drag) equals the weight, so the resultant force is zero.' },
      { n: 8, f: 'Newton’s first law', b: 'If the resultant force on an object is zero, its velocity does not change: it stays at rest or keeps moving at the same speed in the same direction.', src: FORCE },
      { n: 9, f: 'Newton’s second law', b: 'Acceleration is proportional to the resultant force and inversely proportional to mass: F = ma.', src: FORCE },
      { n: 10, f: 'Newton’s third law pair vs balanced forces', b: 'A third-law pair acts on two different objects and is the same type of force. Balanced forces act on one object.', src: FORCE },
      { n: 11, f: 'Inertia and inertial mass', b: 'Inertia: the tendency of an object to stay at rest or in uniform motion.\nInertial mass = force ÷ acceleration: a measure of how hard it is to change its velocity.', u: true },
      { n: 12, f: 'Stopping distance', b: 'Stopping distance = thinking distance + braking distance. Typical reaction times are 0.2–0.9 s.' },
      { n: 13, f: 'Thinking vs braking distance: what affects each?', b: 'Thinking: the driver’s reaction time (tiredness, drugs, alcohol, distractions) and speed.\nBraking: speed, wet or icy roads, worn brakes or tyres.', src: FORCE },
      { n: 14, f: 'Speed doubles (same reaction time and deceleration). Effect on thinking and braking distance?', b: 'Thinking distance doubles; braking distance quadruples.' },
      { n: 15, f: 'Why does an object moving in a circle at constant speed have a changing velocity?', b: 'Its direction is always changing, and velocity is a vector, so the velocity changes (it is accelerating).', u: true },
    ]),
    ...sub('forces-aqa-gcse', 'momentum-aqa-gcse', '4.5.7', [
      { n: 1, f: 'Momentum equation, with units', b: 'p = mv\np in kg m/s, m in kg, v in m/s.', u: true },
      { n: 2, f: 'Conservation of momentum', b: 'In a closed system, the total momentum before an event is equal to the total momentum after it.', u: true },
      { n: 3, f: 'Calculate the momentum of a 0.060 kg ball at 25 m/s.', b: 'p = 0.060 × 25 = 1.5 kg m/s', u: true },
      { n: 4, f: 'A 2.0 kg trolley at 3.0 m/s hits a stationary 1.0 kg trolley and they move off together. Their velocity?', b: 'Momentum before = 2.0 × 3.0 = 6.0 kg m/s. After: 3.0 kg × v = 6.0, so v = 2.0 m/s.', u: true },
      { n: 5, f: 'Force and change in momentum', b: 'F = mΔv / Δt: force equals the rate of change of momentum.', u: true },
      { n: 6, f: 'How do air bags, seat belts and crash mats reduce injury?', b: 'They increase the time taken for the change in momentum, so the rate of change of momentum, and so the force, is smaller.', u: true },
    ]),

    // 4.6 Waves
    ...sub('waves-aqa-gcse', 'waves-in-air-fluids-and-solids', '4.6.1', [
      { n: 1, f: 'Transverse vs longitudinal waves', b: 'Transverse: oscillations perpendicular to the direction of energy transfer (ripples, EM waves).\nLongitudinal: oscillations parallel to it, with compressions and rarefactions (sound in air).', src: WAVE },
      { n: 2, f: 'Amplitude vs wave height', b: 'Amplitude is the maximum displacement from the undisturbed position: half the crest-to-trough height.', src: WAVE },
      { n: 3, f: 'Wavelength and frequency', b: 'Wavelength: distance from a point on one wave to the equivalent point on the next wave.\nFrequency: number of waves passing a point each second, in Hz.' },
      { n: 4, f: 'Wave speed equation, and period equation', b: 'v = fλ (m/s, Hz, m)\nT = 1/f (T in s)' },
      { n: 5, f: 'Evidence that a wave moves but the medium does not travel with it', b: 'A floating object bobs up and down on ripples but stays in place; air particles vibrate about fixed positions as sound passes.' },
      { n: 6, f: 'A wave has speed 12 m/s and frequency 4.0 Hz. Find its wavelength.', b: 'λ = v / f = 12 / 4.0 = 3.0 m' },
      { n: 7, f: 'Specular vs diffuse reflection', b: 'Specular: from a smooth surface, in a single direction.\nDiffuse: from a rough surface, scattered in many directions.' },
      { n: 8, f: 'Range of normal human hearing', b: '20 Hz to 20 kHz.', u: true },
      { n: 9, f: 'Ultrasound', b: 'Sound above 20 kHz. It is partly reflected at boundaries between media, and the echo time gives the distance. Used for medical and industrial imaging.', u: true, src: WAVE },
      { n: 10, f: 'P-waves vs S-waves', b: 'P-waves: longitudinal, travel through solids and liquids.\nS-waves: transverse, cannot pass through liquids, so the S-wave shadow shows part of the Earth’s core is liquid.', u: true, src: WAVE },
      { n: 11, f: 'A sonar pulse (1500 m/s) returns after 0.20 s. How deep is the water?', b: '1500 × 0.20 = 300 m there and back, so the depth is 150 m.', u: true },
    ]),
    ...sub('waves-aqa-gcse', 'electromagnetic-waves-aqa-gcse', '4.6.2', [
      { n: 1, f: 'Order of the electromagnetic spectrum, long wavelength to short', b: 'Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.' },
      { n: 2, f: 'Properties shared by all electromagnetic waves', b: 'Transverse; all travel at the same speed in a vacuum (or air); transfer energy from source to absorber; form a continuous spectrum.' },
      { n: 3, f: 'One use each: radio, microwaves, infrared, visible light', b: 'Radio: television and radio. Microwaves: satellite communications, cooking. Infrared: electric heaters, infrared cameras. Visible: fibre optic communications.' },
      { n: 4, f: 'Hazards of ultraviolet, X-rays and gamma rays', b: 'Ultraviolet: premature skin ageing and increased risk of skin cancer.\nX-rays and gamma: ionising radiation that can cause gene mutation and cancer.' },
      { n: 5, f: 'A radio wave has frequency 200 MHz. What is its wavelength? (c = 3.0 × 10⁸ m/s)', b: 'λ = 3.0 × 10⁸ ÷ 2.0 × 10⁸ = 1.5 m' },
      { n: 6, f: 'What causes refraction, and how does a wave front diagram show it?', b: 'A change in wave speed. The part of the wave front that enters the slower medium first slows first, so the wave front turns and the fronts get closer together.', u: true },
      { n: 7, f: 'How are radio waves produced and detected?', b: 'Oscillations in electrical circuits produce them. When absorbed, they can induce an alternating current with the same frequency as the radio wave.', u: true },
      { n: 8, f: 'Convex vs concave lens', b: 'Convex: parallel rays converge at the principal focus; image can be real or virtual.\nConcave: parallel rays spread out as if from the principal focus; image always virtual.' },
      { n: 9, f: 'Magnification equation', b: 'magnification = image height ÷ object height. It is a ratio, so it has no units (use the same units for both heights).' },
      { n: 10, f: 'What colour does a blue object appear in red light?', b: 'Black. It reflects only blue light, and there is no blue in red light, so all the light is absorbed.' },
      { n: 11, f: 'Required practical 10: how do you compare infrared emission from different surfaces?', b: 'Fill a Leslie cube with hot water and hold an infrared detector at the same distance from each face. Matt black emits most; shiny silver emits least.' },
    ]),
    ...sub('waves-aqa-gcse', 'black-body-radiation-aqa-gcse', '4.6.3', [
      { n: 1, f: 'Which objects emit and absorb infrared radiation?', b: 'All bodies, at any temperature. The hotter the body, the more infrared radiation it emits in a given time.' },
      { n: 2, f: 'Perfect black body', b: 'An object that absorbs all the radiation incident on it, reflecting and transmitting none. It is also the best possible emitter.' },
      { n: 3, f: 'What does the temperature of a body change about the radiation it emits?', b: 'Both the intensity and the wavelength distribution of the emitted radiation depend on the temperature.' },
      { n: 4, f: 'A body stays at a constant temperature. What is true about its radiation?', b: 'It absorbs radiation at the same rate as it emits radiation.', u: true },
      { n: 5, f: 'A body absorbs radiation faster than it emits it. What happens?', b: 'Its temperature increases.', u: true },
      { n: 6, f: 'What does the temperature of the Earth depend on?', b: 'The rates at which light and infrared radiation are absorbed and emitted by the Earth and its atmosphere, and the radiation reflected back into space.', u: true },
    ]),

    // 4.7 Magnetism and electromagnetism
    ...sub('magnetism-and-electromagnetism-aqa-gcse', 'permanent-and-induced-magnetism', '4.7.1', [
      { n: 1, f: 'Magnetic pole', b: 'The place on a magnet where the magnetic forces are strongest.' },
      { n: 2, f: 'Permanent vs induced magnet', b: 'Permanent: produces its own magnetic field all the time; can attract or repel.\nInduced: becomes a magnet only when placed in a magnetic field, loses most or all of it quickly when removed, and always attracts.', src: MAG },
      { n: 3, f: 'Magnetic field, and the direction of field lines', b: 'The region around a magnet where a force acts on another magnet or a magnetic material. Field lines point from the north pole to the south pole.' },
      { n: 4, f: 'The four magnetic materials', b: 'Iron, steel, cobalt and nickel.' },
      { n: 5, f: 'What evidence does a compass give about the Earth’s core?', b: 'A compass needle lines up with a magnetic field wherever it is, which shows the Earth has a magnetic field, produced by its magnetic core.' },
      { n: 6, f: 'Where is a magnet’s field strongest, and how do field lines show it?', b: 'At the poles. The closer together the field lines, the stronger the field.' },
    ]),
    ...sub('magnetism-and-electromagnetism-aqa-gcse', 'the-motor-effect', '4.7.2', [
      { n: 1, f: 'Magnetic field around a straight current-carrying wire', b: 'Concentric circles around the wire. Stronger with a larger current; weaker further from the wire. Direction from the right-hand grip rule.' },
      { n: 2, f: 'Field of a solenoid, and how to make it stronger', b: 'Strong and uniform inside, shaped like a bar magnet’s outside. Adding an iron core makes it stronger: this is an electromagnet.' },
      { n: 3, f: 'Motor effect', b: 'A conductor carrying a current in a magnetic field and the magnet producing the field exert a force on each other.', u: true, src: MAG },
      { n: 4, f: 'Fleming’s left-hand rule', b: 'First finger = Field; seCond finger = Current; thuMb = Motion (force). Used to find the direction of the force on a wire.', u: true, src: MAG },
      { n: 5, f: 'Force on a wire in a magnetic field: equation', b: 'F = BIl (F in N, B magnetic flux density in T, I in A, l length in the field in m), for a wire at right angles to the field. The force is zero if the wire is parallel to the field.', u: true },
      { n: 6, f: 'A 0.30 m wire carries 2.5 A at right angles to a 0.40 T field. Force?', b: 'F = 0.40 × 2.5 × 0.30 = 0.30 N', u: true },
      { n: 7, f: 'How does an electric motor keep turning?', b: 'Current flows in opposite directions in the two sides of the coil, so the forces on them are in opposite directions and the coil rotates. A split-ring commutator keeps it turning one way.', u: true, src: MAG },
      { n: 8, f: 'How does a loudspeaker work?', b: 'Alternating current in a coil in a permanent magnet’s field produces a force that reverses as the current reverses, so the cone vibrates and makes pressure variations: sound.', u: true, src: MAG },
    ]),
    ...sub('magnetism-and-electromagnetism-aqa-gcse', 'induced-potential-transformers-and-the-national-grid', '4.7.3', [
      { n: 1, f: 'Generator effect', b: 'A potential difference is induced across a conductor that moves relative to a magnetic field, or that is in a changing field. In a complete circuit it drives an induced current.', u: true },
      { n: 2, f: 'Direction of the field from an induced current', b: 'It opposes the change that induced it.', u: true },
      { n: 3, f: 'Three ways to increase the potential difference induced by moving a magnet in a coil', b: 'Move it faster, use a stronger magnet, use more turns on the coil.', u: true },
      { n: 4, f: 'Alternator vs dynamo', b: 'Alternator: slip rings, gives ac (the output graph crosses the axis).\nDynamo: split-ring commutator, gives dc (the graph stays on one side).', u: true, src: MAG },
      { n: 5, f: 'Microphone', b: 'Sound moves a diaphragm and coil in a magnet’s field, inducing a pd, so the current varies like the sound (generator effect).', u: true, src: MAG },
      { n: 6, f: 'How does a transformer work?', b: 'Alternating current in the primary coil makes a changing magnetic field in the iron core. This changing field passes through the secondary coil and induces an alternating pd across it.', u: true },
      { n: 7, f: 'Transformer equations', b: 'Vp / Vs = np / ns\nVs × Is = Vp × Ip (for a 100% efficient transformer).', u: true },
      { n: 8, f: 'A transformer has 200 primary and 50 secondary turns; Vp = 240 V. Find Vs.', b: 'Vs = 240 × 50 ÷ 200 = 60 V. Fewer secondary turns, so it is a step-down transformer.', u: true },
      { n: 9, f: 'Why is the core of a transformer made of iron?', b: 'Iron is easily magnetised.', u: true },
    ]),

    // 4.8 Space physics
    ...sub('space-physics-aqa-gcse', 'solar-system-orbital-motions-satellites', '4.8.1', [
      { n: 1, f: 'What is in our solar system?', b: 'One star (the Sun), eight planets, dwarf planets, and natural satellites (moons) that orbit planets. It is a small part of the Milky Way galaxy.' },
      { n: 2, f: 'How did the Sun form and start to shine?', b: 'Gravity pulled a cloud of dust and gas (a nebula) together. It became hot and dense enough for nuclear fusion of light nuclei, which releases energy.' },
      { n: 3, f: 'Why is a main sequence star stable?', b: 'The inward pull of gravity is balanced by the outward pressure from the energy released by fusion, so the star is in equilibrium.' },
      { n: 4, f: 'Life cycle of a star about the size of the Sun', b: 'Nebula → protostar → main sequence star → red giant → white dwarf → black dwarf.' },
      { n: 5, f: 'Life cycle of a star much more massive than the Sun', b: 'Nebula → protostar → main sequence star → red super giant → supernova → neutron star or black hole.' },
      { n: 6, f: 'Where are elements heavier than iron produced?', b: 'In a supernova, which also distributes the elements throughout the universe. Fusion in stars makes elements up to iron.' },
      { n: 7, f: 'What keeps planets and satellites in their orbits?', b: 'Gravity, which provides the force towards the centre of the orbit.' },
      { n: 8, f: 'A satellite in a stable orbit changes speed. What must happen to its orbit?', b: 'The radius must change: a faster speed needs a smaller orbit; a slower speed, a larger one.', u: true },
      { n: 9, f: 'Why is a body in a circular orbit accelerating, though its speed is constant?', b: 'Its direction changes all the time, so its velocity changes. The resultant force (gravity) acts towards the centre.', u: true },
    ]),
    ...sub('space-physics-aqa-gcse', 'red-shift', '4.8.2', [
      { n: 1, f: 'Red-shift', b: 'The observed increase in the wavelength of light from most distant galaxies.' },
      { n: 2, f: 'What pattern does red-shift show?', b: 'The further away a galaxy is, the faster it is moving away from us and the bigger its red-shift.' },
      { n: 3, f: 'How does red-shift support the Big Bang theory?', b: 'Distant galaxies are moving away, faster the further they are, so the universe is expanding. Traced back, it must have begun from a very small region that was extremely hot and dense.' },
      { n: 4, f: 'What have observations of supernovae since 1998 suggested?', b: 'Distant galaxies are receding ever faster: the expansion of the universe is accelerating.' },
      { n: 5, f: 'Name two things about the universe that are still not understood.', b: 'Dark mass (dark matter) and dark energy.' },
      { n: 6, f: 'A line at 500 nm in the lab is seen at 515 nm from a galaxy. Percentage increase in wavelength?', b: '15 ÷ 500 × 100 = 3.0%' },
    ]),
  ],
};
