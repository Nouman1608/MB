/**
 * D-438 -- flashcards for OxfordAQA International AS and A-level Physics 9630.
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * Untiered course, so no tierScheme and no `u: true` cards. Sections 3.1-3.5
 * are shared International AS / A-level content; 3.6-3.13 are International
 * A-level only (the syllabus record's `stage`), which the topic comments note.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 9630); origin 'revision-notes'.
 *
 * Values and wording follow Marlbridge's own 9630 revision notes. Plain text
 * only (see types.ts). Unicode for symbols.
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

// Topic slugs
const MEAS = 'measurements-and-their-errors-oxfordaqa-alevel';
const MECH = 'mechanics-and-materials-oxfordaqa-alevel';
const PART = 'particles-radiation-and-radioactivity';
const ELEC = 'electricity-oxfordaqa-alevel';
const WAVE = 'oscillations-and-waves-oxfordaqa-alevel';
const CIRC = 'circular-and-periodic-motion-oxfordaqa';
const GRAV = 'gravitational-fields-and-satellites';
const EFLD = 'electric-fields-and-capacitance';
const EXPO = 'exponential-change-oxfordaqa';
const MAG = 'magnetic-fields-oxfordaqa-alevel';
const THERM = 'thermal-physics-oxfordaqa-alevel';
const NUC = 'nuclear-energy-oxfordaqa-alevel';
const ENER = 'energy-sources-oxfordaqa-alevel';

// Revision-notes sources
const VEC = 'oxfordaqa-a-level-physics-vectors-equilibrium-of-forces-and-moments-revision-notes';
const MECHRN = 'oxfordaqa-a-level-physics-mechanics-materials-revision-notes';
const BULK = 'oxfordaqa-a-level-physics-bulk-properties-of-solids-and-the-young-modulus-revision-notes';
const OSC = 'oxfordaqa-a-level-physics-oscillating-systems-damping-free-and-forced-vibrations-revision-notes';
const STAT = 'oxfordaqa-a-level-physics-superposition-and-stationary-waves-revision-notes';
const GPOT = 'oxfordaqa-a-level-physics-gravitational-potential-and-orbits-of-planets-and-revision-notes';
const EPOT = 'oxfordaqa-a-level-physics-electric-potential-and-capacitors-revision-notes';

export const DECK_OXFORDAQA_A_LEVEL_PHYSICS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'a-level',
  subjectSlug: 'physics',
  syllabusCode: '9630',
  syllabusSeries: 'International AS and A-level',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'iftikhar-azeemi', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Measurements and their errors (AS)
    ...sub(MEAS, 'use-of-si-units-and-their-prefixes-oxfordaqa', '3.1.1', [
      { n: 1, f: 'The six SI base units needed for 9630', b: 'metre (m), kilogram (kg), second (s), ampere (A), kelvin (K) and mole (mol).' },
      { n: 2, f: 'Write the newton, joule, watt and pascal in SI base units', b: 'N = kg m s⁻²\nJ = kg m² s⁻²\nW = kg m² s⁻³\nPa = kg m⁻¹ s⁻²' },
      { n: 3, f: 'Powers of ten for the prefixes T, G, M, k, c, m, μ, n, p, f', b: 'T 10¹², G 10⁹, M 10⁶, k 10³, c 10⁻², m 10⁻³, μ 10⁻⁶, n 10⁻⁹, p 10⁻¹², f 10⁻¹⁵.' },
      { n: 4, f: 'Converting squared and cubed units: 1 cm² and 1 mm³ in SI units', b: 'Apply the power to the whole prefix factor: 1 cm² = (10⁻²)² m² = 10⁻⁴ m²; 1 mm³ = (10⁻³)³ m³ = 10⁻⁹ m³.' },
      { n: 5, f: 'Converting electronvolts and kilowatt-hours to joules', b: 'eV → J: multiply by 1.60 × 10⁻¹⁹.\nkW h → J: multiply by 3.6 × 10⁶ (1000 W × 3600 s).\nDivide to convert back.' },
    ]),
    ...sub(MEAS, 'limitation-of-physical-measurements-oxfordaqa', '3.1.2', [
      { n: 1, f: 'Random error vs systematic error', b: 'Random error scatters readings either side of the true value and is reduced by repeating and averaging. Systematic error shifts every reading the same way and is not reduced by averaging.' },
      { n: 2, f: 'How do you remove a systematic error?', b: 'Zero or recalibrate the instrument, correct readings for the zero error, or change the technique (for example read at eye level to avoid parallax). Repeating readings does not remove it.' },
      { n: 3, f: 'Accuracy, precision and resolution', b: 'Accurate: close to the true value.\nPrecise: repeat readings agree closely.\nResolution: the smallest change the instrument can detect or display.' },
      { n: 4, f: 'Repeatable vs reproducible', b: 'Repeatable: the same result when the same operator repeats it with the same method and equipment.\nReproducible: the same result with a different operator, method or equipment.' },
      { n: 5, f: 'Combining uncertainties: sums, products and powers', b: 'Sum or difference: add absolute uncertainties.\nProduct or quotient: add percentage uncertainties.\nPower n (including roots): multiply the percentage uncertainty by n.' },
      { n: 6, f: 'How do you find the uncertainty in the gradient of a graph?', b: 'Draw the steepest and shallowest lines that still pass through all the error bars. Gradient uncertainty = (steepest gradient − shallowest gradient) ÷ 2.' },
    ]),
    ...sub(MEAS, 'estimation-of-physical-quantities-oxfordaqa', '3.1.3', [
      { n: 1, f: 'What does "to the nearest order of magnitude" mean?', b: 'To the nearest power of ten. A common convention: a leading figure below about 3.2 rounds down, above it rounds up (so 2.9 × 10⁸ is 10⁸ and 3.4 × 10⁸ is 10⁹).' },
      { n: 2, f: 'Rough reference sizes: a person\'s mass, an atom\'s diameter, the Earth\'s radius', b: 'Person: about 10² kg.\nAtom: about 10⁻¹⁰ m.\nEarth\'s radius: about 10⁷ m (6.4 × 10⁶ m).' },
      { n: 3, f: 'Method for an estimation question', b: 'State each estimated value, combine them in the relevant equation, round the final answer to an order of magnitude, then check it is plausible.' },
      { n: 4, f: 'Estimate the kinetic energy of a 70 kg sprinter at 8 m s⁻¹', b: '½ × 70 × 8² = 2240 J, so about 10³ J.' },
    ]),

    // 2 Mechanics and materials (AS)
    ...sub(MECH, 'scalars-and-vectors-oxfordaqa', '3.2.1', [
      { n: 1, f: 'Scalar vs vector', b: 'A scalar has size only (distance, speed, mass, energy). A vector has size and direction (displacement, velocity, acceleration, force, weight).', src: VEC },
      { n: 2, f: 'Resolving a force F at angle θ to the horizontal', b: 'Horizontal component = F cos θ.\nVertical component = F sin θ.' },
      { n: 3, f: 'Resultant of two perpendicular vectors a and b', b: 'R = √(a² + b²), at an angle given by tan θ = opposite ÷ adjacent. State the reference direction (e.g. 12 N east + 5 N north = 13 N at 22.6° north of east).' },
      { n: 4, f: 'Conditions for three coplanar forces at a point to be in equilibrium', b: 'The resultant force is zero: components sum to zero in any direction, and drawn tip to tail the three forces form a closed triangle.' },
      { n: 5, f: 'Does equilibrium mean the object is at rest?', b: 'No. Equilibrium means zero resultant force, so the object is at rest or moving at constant velocity.', src: VEC },
    ]),
    ...sub(MECH, 'moments-oxfordaqa-alevel', '3.2.2', [
      { n: 1, f: 'Moment of a force', b: 'Force × perpendicular distance from the point to the line of action of the force. Unit N m.', src: VEC },
      { n: 2, f: 'Principle of moments', b: 'For a body in equilibrium, the total clockwise moment about any point equals the total anticlockwise moment about that point.' },
      { n: 3, f: 'Couple, and the moment of a couple', b: 'A couple is two equal, opposite, coplanar forces acting along different (parallel) lines. Moment = one force × perpendicular distance between the lines. Resultant force is zero, so it turns without accelerating sideways.', src: VEC },
      { n: 4, f: 'Centre of mass', b: 'The point through which the whole weight of a body can be taken to act. For a uniform regular solid it is at the geometric centre; it can lie outside the material (e.g. a ring).', src: VEC },
      { n: 5, f: 'Beam problems: why take moments about a point where an unknown force acts?', b: 'A force through the chosen point has zero moment about it, so that unknown drops out of the equation.' },
    ]),
    ...sub(MECH, 'motion-along-a-straight-line-oxfordaqa', '3.2.3', [
      { n: 1, f: 'The four SUVAT equations (uniform acceleration)', b: 'v = u + at\ns = ½(u + v)t\ns = ut + ½at²\nv² = u² + 2as' },
      { n: 2, f: 'Displacement-time and velocity-time graphs: what do gradient and area give?', b: 'Displacement-time: gradient = velocity.\nVelocity-time: gradient = acceleration; area under graph = displacement.\nAcceleration-time: area = change in velocity.' },
      { n: 3, f: 'Displacement, velocity and acceleration', b: 'Displacement: distance moved in a specified direction (vector).\nVelocity: rate of change of displacement.\nAcceleration: rate of change of velocity.', src: MECHRN },
      { n: 4, f: 'Required practical: finding g by free fall. Which graph, and how is g found?', b: 'From rest, s = ½gt². Plot s against t²: a straight line through the origin with gradient g/2, so g = 2 × gradient.' },
      { n: 5, f: 'Velocity-time graph: 0 to 12 m s⁻¹ in 6 s, then 12 m s⁻¹ for 4 s. Total displacement?', b: 'Triangle ½ × 6 × 12 = 36 m, plus rectangle 4 × 12 = 48 m: total 84 m.' },
    ]),
    ...sub(MECH, 'projectile-motion-oxfordaqa', '3.2.4', [
      { n: 1, f: 'Key idea of projectile motion (no air resistance)', b: 'Horizontal and vertical motions are independent and share only the time. Horizontal: constant velocity. Vertical: uniform acceleration g = 9.81 m s⁻² downwards.' },
      { n: 2, f: 'At the top of its path, what are a projectile\'s vertical velocity, speed and acceleration?', b: 'Vertical velocity is zero; speed equals the horizontal component (not zero); acceleration is still 9.81 m s⁻² downwards.' },
      { n: 3, f: 'Launch at speed u, angle θ, landing at the same level: time of flight, maximum height, range', b: 'u_y = u sin θ, u_x = u cos θ.\nTime of flight = 2u_y/g.\nMaximum height = u_y²/2g.\nRange = u_x × time of flight.' },
      { n: 4, f: 'Describe how a falling object reaches terminal speed', b: 'At release drag is zero and a = g. As speed rises, drag rises, so resultant force and acceleration fall. When drag equals weight the resultant force is zero and the speed stays constant.' },
      { n: 5, f: 'Effects of air resistance on a projectile\'s path', b: 'Horizontal velocity decreases; range and maximum height are smaller; the path is asymmetrical, with a steeper descent than ascent; landing speed is lower.' },
      { n: 6, f: 'Direction of drag and of lift', b: 'Drag acts opposite to the velocity relative to the fluid and increases with speed. Lift acts perpendicular to the flow of fluid past the object.' },
    ]),
    ...sub(MECH, 'newtons-laws-of-motion-oxfordaqa', '3.2.5', [
      { n: 1, f: 'Newton\'s first law', b: 'An object stays at rest or moves at constant velocity unless acted on by a resultant force.' },
      { n: 2, f: 'Newton\'s second law, and its condition', b: 'Resultant force = mass × acceleration, F = ma, which applies only when the mass is constant. In general F = rate of change of momentum.' },
      { n: 3, f: 'Newton\'s third law', b: 'If body A exerts a force on body B, B exerts an equal and opposite force on A. The pair are the same type of force and act on different bodies.' },
      { n: 4, f: 'A book rests on a table. Are its weight and the normal contact force a third-law pair?', b: 'No. Both act on the book, so they are balanced forces (first law). The pair to the weight is the book pulling the Earth up.' },
      { n: 5, f: 'Tension in a lift cable of mass m accelerating upwards at a', b: 'T − mg = ma, so T = m(g + a). Tension exceeds weight for upward acceleration, and is less than weight for downward acceleration.' },
    ]),
    ...sub(MECH, 'momentum-oxfordaqa-alevel', '3.2.6', [
      { n: 1, f: 'Momentum: equation and unit', b: 'p = mv, a vector in the direction of the velocity. Unit kg m s⁻¹ (the same as N s).' },
      { n: 2, f: 'Principle of conservation of linear momentum', b: 'The total momentum of a closed system stays constant provided no resultant external force acts on it.' },
      { n: 3, f: 'Impulse', b: 'The change in momentum: FΔt = Δ(mv) for a constant force. It equals the area under a force-time graph. Unit N s.' },
      { n: 4, f: 'Elastic vs inelastic collision', b: 'Momentum is conserved in both. Elastic: total kinetic energy is also conserved. Inelastic: some kinetic energy is transferred to other forms. Check by calculating KE before and after.' },
      { n: 5, f: 'Why does an airbag or crumple zone reduce injury?', b: 'It increases the time taken to stop. The change in momentum is the same, so the rate of change of momentum, and hence the force, is smaller.' },
      { n: 6, f: 'Water hits a wall at 0.80 kg s⁻¹ and 6.0 m s⁻¹ and stops. Force on the wall?', b: 'F = (Δm/Δt) × v = 0.80 × 6.0 = 4.8 N.' },
    ]),
    ...sub(MECH, 'work-energy-and-power-oxfordaqa', '3.2.7', [
      { n: 1, f: 'Work done by a force', b: 'Force × displacement in the direction of the force: W = Fs cos θ, where θ is the angle between F and s. Unit J. Also the area under a force-displacement graph.' },
      { n: 2, f: 'Power: definition and equations', b: 'The rate of doing work (rate of energy transfer). P = ΔW/Δt, and P = Fv for a force F along velocity v. Unit W.' },
      { n: 3, f: 'Efficiency', b: 'Useful output power ÷ input power (or useful energy out ÷ total energy in). No unit; never more than 100%.' },
      { n: 4, f: 'An 18 kW engine drives a car at a steady 30 m s⁻¹. What is the resistive force?', b: 'At steady speed driving force = resistive force. F = P/v = 18 000 ÷ 30 = 600 N.' },
      { n: 5, f: 'Work done by a force at 90° to the displacement', b: 'Zero, since cos 90° = 0 (e.g. the normal force on a block sliding along a level floor).' },
    ]),
    ...sub(MECH, 'conservation-of-energy-oxfordaqa-alevel', '3.2.8', [
      { n: 1, f: 'Principle of conservation of energy', b: 'Energy cannot be created or destroyed. In an isolated system the total energy stays the same while it is transferred between stores.' },
      { n: 2, f: 'Equations for gravitational potential energy and kinetic energy', b: 'ΔEp = mgΔh (vertical height change, uniform field).\nEk = ½mv².' },
      { n: 3, f: 'Speed of an object dropped from rest through height Δh (no air resistance)', b: 'mgΔh = ½mv², so v = √(2gΔh). The mass cancels. For 1.8 m: v = √(2 × 9.81 × 1.8) = 5.9 m s⁻¹.' },
      { n: 4, f: 'Energy equation when resistive forces act', b: 'Initial energy + work done on the system = final energy + work done against resistive forces.' },
      { n: 5, f: 'Why does each bounce of a ball reach a lower height?', b: 'At each impact some kinetic energy is dissipated as thermal energy and sound in the ball and floor, and energy is also transferred by air resistance.' },
    ]),
    ...sub(MECH, 'bulk-properties-of-solids-oxfordaqa', '3.2.9', [
      { n: 1, f: 'Hooke\'s law', b: 'The extension is proportional to the applied force, up to the limit of proportionality: F = kΔL, where k is the stiffness (spring constant) in N m⁻¹.' },
      { n: 2, f: 'Elastic limit', b: 'The point beyond which the material does not return to its original length when the force is removed.', src: BULK },
      { n: 3, f: 'Tensile stress and tensile strain', b: 'Stress = F/A, force per unit cross-sectional area (Pa).\nStrain = ΔL/L, extension ÷ original length (no unit).' },
      { n: 4, f: 'Elastic strain energy stored in a stretched spring or wire', b: 'The area under the force-extension graph. Within Hooke\'s law: E = ½FΔL = ½kΔL².' },
      { n: 5, f: 'Elastic vs plastic deformation; ductile vs brittle', b: 'Elastic: returns to its original length. Plastic: permanent extension remains.\nDuctile: large plastic region before fracture. Brittle: fractures with little or no plastic deformation.' },
      { n: 6, f: 'Density', b: 'Mass per unit volume: ρ = m/V. Unit kg m⁻³.', src: BULK },
    ]),
    ...sub(MECH, 'the-young-modulus-oxfordaqa', '3.2.10', [
      { n: 1, f: 'Young modulus: definition and equation', b: 'Tensile stress ÷ tensile strain, in the region where they are proportional. E = (F/A)/(ΔL/L) = FL/(AΔL). Unit Pa.' },
      { n: 2, f: 'How is E found from a stress-strain graph?', b: 'It is the gradient of the straight (initial) part of the stress-strain graph.' },
      { n: 3, f: 'Required practical: Young modulus of a wire. Outline and analysis', b: 'Long thin clamped wire with a marker against a fixed scale. Measure L and the diameter at several places with a micrometer. Add loads and record extensions. Gradient of extension against force = L/(EA), so E = L/(A × gradient).' },
      { n: 4, f: 'Which measurement dominates the uncertainty in the Young modulus practical, and why?', b: 'The diameter: it is small, and A = πd²/4 depends on d², so its percentage uncertainty is doubled.' },
      { n: 5, f: 'Stiffness k vs Young modulus E', b: 'k depends on the size and shape of the sample (k = EA/L). E is a property of the material.' },
    ]),

    // 3 Particles, radiation and radioactivity (AS)
    ...sub(PART, 'constituents-of-the-atom-oxfordaqa', '3.3.1', [
      { n: 1, f: 'Charge and mass of the proton, neutron and electron', b: 'Proton: +1.60 × 10⁻¹⁹ C, 1.67 × 10⁻²⁷ kg.\nNeutron: 0, 1.67 × 10⁻²⁷ kg.\nElectron: −1.60 × 10⁻¹⁹ C, 9.11 × 10⁻³¹ kg (about 1/1840 of a proton).' },
      { n: 2, f: 'Nuclide notation: what are A and Z, and how many neutrons?', b: 'A = nucleon number (protons + neutrons); Z = proton number. Neutrons = A − Z. Isotopes have the same Z but different A.' },
      { n: 3, f: 'Specific charge', b: 'Charge ÷ mass, in C kg⁻¹. Proton: 9.58 × 10⁷ C kg⁻¹. Electron: 1.76 × 10¹¹ C kg⁻¹. For an ion use the net charge.' },
      { n: 4, f: 'Rutherford scattering: the three observations and what each shows', b: 'Most alpha particles pass straight through: the atom is mostly empty space.\nA few deflect through large angles: positive charge is concentrated in a tiny nucleus (repulsion).\nVery few rebound: the nucleus is also massive.' },
      { n: 5, f: 'Why was Rutherford scattering done in a vacuum with very thin gold foil?', b: 'Vacuum: air would absorb or scatter the alpha particles.\nThin foil: each alpha particle is scattered at most once (by one nucleus).' },
      { n: 6, f: 'Approximate sizes of an atom and a nucleus', b: 'Atomic radius about 10⁻¹⁰ m; nuclear radius about 10⁻¹⁵ m. Nearly all the mass is in the nucleus.' },
    ]),
    ...sub(PART, 'elementary-particles-oxfordaqa', '3.3.2', [
      { n: 1, f: 'How does a particle differ from its antiparticle?', b: 'Same mass and rest energy, opposite charge. Neutral particles (neutron, neutrino) still have distinct antiparticles.' },
      { n: 2, f: 'Antiparticles of the electron, proton, neutron and neutrino', b: 'Positron, antiproton, antineutron and antineutrino. Rest energies: electron/positron 0.511 MeV; proton/antiproton 938.3 MeV; neutron/antineutron 939.6 MeV.' },
      { n: 3, f: 'Annihilation', b: 'A particle and its antiparticle meet and are converted into photons. Charge, energy and momentum are conserved, so at least two photons are produced, travelling in opposite directions.' },
      { n: 4, f: 'Pair production, and the minimum photon energy', b: 'A photon near a nucleus becomes a particle and its antiparticle. Minimum photon energy = 2 × rest energy of one particle: 1.022 MeV for an electron-positron pair.' },
      { n: 5, f: 'Energy of each photon when an electron and a positron annihilate at rest', b: '0.511 MeV each (1.022 MeV in total). 1 MeV = 1.60 × 10⁻¹³ J.' },
    ]),
    ...sub(PART, 'radioactivity-oxfordaqa-alevel', '3.3.3', [
      { n: 1, f: 'Changes in A and Z for alpha, beta-minus, beta-plus and gamma decay', b: 'Alpha: A − 4, Z − 2.\nBeta-minus: A same, Z + 1 (neutron → proton; electron and antineutrino emitted).\nBeta-plus: A same, Z − 1 (proton → neutron; positron and neutrino emitted).\nGamma: no change.' },
      { n: 2, f: 'How did the beta energy spectrum lead to the neutrino hypothesis?', b: 'Beta particles from one nuclide have a continuous range of energies up to a maximum, and energy and momentum seemed not to balance. A third, neutral, weakly interacting particle was proposed to carry the missing energy and momentum.' },
      { n: 3, f: 'Half-life', b: 'The time taken for half the unstable nuclei in a sample to decay. The activity and corrected count rate halve in the same time.' },
      { n: 4, f: 'Penetration and ionisation of alpha, beta and gamma', b: 'Alpha: most ionising; stopped by paper or a few cm of air.\nBeta: medium; stopped by a few mm of aluminium.\nGamma: least ionising; thick lead greatly reduces it.' },
      { n: 5, f: 'Inverse-square law for gamma radiation', b: 'I = I₀/r² for a point source with negligible absorption in air. Doubling the distance divides the intensity by 4.' },
      { n: 6, f: 'Why is technetium-99m used in medical diagnosis?', b: 'It emits only gamma, which leaves the body to be detected, and no alpha or beta. Its half-life of about 6 hours is long enough for a scan but short enough to limit the dose.' },
      { n: 7, f: 'How do you correct for background radiation?', b: 'Count with no source present for a long time, find the background rate, and subtract it from every reading.' },
    ]),

    // 4 Electricity (AS)
    ...sub(ELEC, 'basics-of-electricity-oxfordaqa', '3.4.1', [
      { n: 1, f: 'Electric current', b: 'The rate of flow of charge: I = ΔQ/Δt. Unit A (C s⁻¹).' },
      { n: 2, f: 'Potential difference', b: 'The work done (energy transferred) per unit charge moving between two points: V = W/Q. Unit V (J C⁻¹).' },
      { n: 3, f: 'Resistance', b: 'The ratio of the p.d. across a component to the current through it: R = V/I. Unit Ω.' },
      { n: 4, f: 'How many electrons pass a point each second when the current is 1.0 mA?', b: 'N = I/e = 1.0 × 10⁻³ ÷ 1.60 × 10⁻¹⁹ = 6.3 × 10¹⁵ per second.' },
      { n: 5, f: 'Properties of an ideal ammeter and an ideal voltmeter', b: 'Ideal ammeter: zero resistance (connected in series).\nIdeal voltmeter: infinite resistance (connected in parallel).' },
    ]),
    ...sub(ELEC, 'current-voltage-characteristics-oxfordaqa', '3.4.2', [
      { n: 1, f: 'Ohm\'s law', b: 'For a conductor, the current is proportional to the p.d. provided physical conditions such as temperature stay constant.' },
      { n: 2, f: 'I-V characteristic of a filament lamp, and why', b: 'S-shaped curve through the origin, symmetrical, flattening at high p.d. As current rises the filament gets hotter, so its resistance increases.' },
      { n: 3, f: 'I-V characteristic of a semiconductor diode', b: 'Almost no current in reverse bias, or in forward bias below about 0.6 V; above the threshold the current rises steeply. It conducts in one direction only.' },
      { n: 4, f: 'Finding the resistance at a point on a curved I-V graph', b: 'Read the coordinates and calculate R = V/I. Do not use the gradient (or its reciprocal) of the curve.' },
      { n: 5, f: 'Circuit for measuring an I-V characteristic', b: 'Ammeter in series with the component, voltmeter in parallel across it, and a variable supply (or potential divider) so the p.d. can be varied from near zero. Reverse the connections for negative values.' },
    ]),
    ...sub(ELEC, 'resistivity-oxfordaqa-alevel', '3.4.3', [
      { n: 1, f: 'Resistivity: equation and unit', b: 'ρ = RA/L, so R = ρL/A. Unit Ω m. For a round wire A = πd²/4.' },
      { n: 2, f: 'Finding resistivity from a graph of R against L', b: 'The gradient of the straight line through the origin is ρ/A, so ρ = gradient × A, with A from the measured diameter in metres.' },
      { n: 3, f: 'Effect of temperature on the resistance of a metal and of an ntc thermistor', b: 'Metal: resistance increases, because the ions vibrate more and electrons collide with them more often.\nntc thermistor: resistance decreases, because more charge carriers are released.' },
      { n: 4, f: 'Superconductor and critical temperature', b: 'A superconductor has zero resistivity at and below its critical temperature.' },
      { n: 5, f: 'Two uses of superconductors, and the drawback', b: 'Strong magnetic fields (scanners, particle accelerators) and power cables with no heating loss. The material must be kept below its critical temperature, which usually needs expensive cooling.' },
      { n: 6, f: 'A wire\'s length and diameter are both doubled. What happens to its resistance?', b: 'L × 2 doubles R; A × 4 divides R by 4. Overall R halves.' },
    ]),
    ...sub(ELEC, 'circuits-oxfordaqa-alevel', '3.4.4', [
      { n: 1, f: 'Total resistance in series and in parallel', b: 'Series: R_T = R₁ + R₂ + R₃ + …\nParallel: 1/R_T = 1/R₁ + 1/R₂ + 1/R₃ + …' },
      { n: 2, f: 'Electrical power and energy equations', b: 'P = IV = I²R = V²/R.\nE = IVt.' },
      { n: 3, f: 'Current and p.d. in series and in parallel circuits', b: 'Series: same current everywhere; the p.d.s add to the supply p.d.\nParallel: same p.d. across each branch; the branch currents add to the total.' },
      { n: 4, f: 'Which conservation laws apply in d.c. circuits?', b: 'Charge: current into a junction equals current out.\nEnergy: round any loop, the sum of the emfs equals the sum of the p.d.s.' },
      { n: 5, f: 'Combining identical cells in series and in parallel', b: 'Series: emfs add and internal resistances add.\nn identical cells in parallel: emf unchanged, internal resistance r/n.' },
    ]),
    ...sub(ELEC, 'potential-divider-oxfordaqa', '3.4.5', [
      { n: 1, f: 'Potential divider equation', b: 'V_out = V_in × R₂/(R₁ + R₂), where the output is taken across R₂.' },
      { n: 2, f: 'ntc thermistor in a divider: what happens to the output across the fixed resistor as temperature rises?', b: 'The thermistor\'s resistance falls, so its share of the p.d. falls and the output across the fixed resistor rises.' },
      { n: 3, f: 'LDR in a divider: output across the LDR as the light level rises', b: 'The LDR\'s resistance falls as light increases, so the p.d. across it falls.' },
      { n: 4, f: 'Effect of connecting a load across the output of a potential divider', b: 'The load is in parallel with R₂, lowering the combined resistance, so the output p.d. falls. The smaller the load resistance, the bigger the drop.' },
      { n: 5, f: 'Advantage of a potential divider over a variable resistor in series', b: 'A divider can vary the p.d. across the load from 0 V up to the supply p.d.; a series variable resistor cannot take it to zero.' },
    ]),
    ...sub(ELEC, 'electromotive-force-and-internal-resistance-oxfordaqa', '3.4.6', [
      { n: 1, f: 'Electromotive force (emf)', b: 'The energy the source supplies per coulomb of charge it drives round the circuit: ε = E/Q.' },
      { n: 2, f: 'Equations linking emf, terminal p.d. and internal resistance', b: 'ε = I(R + r), so terminal p.d. V = ε − Ir. Ir is the "lost volts".' },
      { n: 3, f: 'Required practical: emf and internal resistance from a graph', b: 'Vary the external resistance and record terminal p.d. V and current I. Plot V against I: the vertical intercept is ε and the gradient is −r.' },
      { n: 4, f: 'Short-circuit current of a cell', b: 'I = ε/r, the largest current the source can supply; it is why a shorted battery heats up.' },
      { n: 5, f: 'ε = 1.80 V, r = 0.60 Ω, R = 2.4 Ω. Find the current and terminal p.d.', b: 'I = 1.80 ÷ 3.0 = 0.60 A. V = 0.60 × 2.4 = 1.44 V (lost volts 0.36 V).' },
    ]),

    // 5 Oscillations and waves (AS)
    ...sub(WAVE, 'oscillating-systems-oxfordaqa', '3.5.1', [
      { n: 1, f: 'Period and amplitude of an oscillation', b: 'Period T: the time taken by one full oscillation (f = 1/T).\nAmplitude: the maximum displacement from equilibrium.', src: OSC },
      { n: 2, f: 'Period of a mass-spring system and of a simple pendulum', b: 'Mass-spring: T = 2π√(m/k).\nSimple pendulum (small angles): T = 2π√(l/g), with l measured to the centre of the bob. Neither depends on amplitude; the pendulum does not depend on the bob\'s mass.' },
      { n: 3, f: 'Damping', b: 'Energy is transferred from the oscillator to the surroundings by resistive forces, so the amplitude falls.', src: OSC },
      { n: 4, f: 'Light, critical and heavy damping', b: 'Light: oscillates with amplitude falling each cycle; period almost unchanged.\nCritical: returns to equilibrium in the shortest time without oscillating (e.g. car suspension).\nHeavy: no oscillation, slow return.' },
      { n: 5, f: 'Required practical: finding g with a pendulum. Graph and timing technique', b: 'Vary l and time 10 oscillations, repeating. Plot T² against l: gradient = 4π²/g. Start and stop timing at the equilibrium position using a fiducial marker, where the bob moves fastest.' },
      { n: 6, f: 'How do Ek and Ep vary during an undamped oscillation?', b: 'Ek is maximum at equilibrium and zero at maximum displacement; Ep the reverse. The total is constant. Against time, each goes through two cycles for every cycle of the motion.' },
    ]),
    ...sub(WAVE, 'forced-vibrations-and-resonance-oxfordaqa', '3.5.2', [
      { n: 1, f: 'Free vibration vs forced vibration', b: 'Free: displaced once, then left to oscillate at its natural frequency.\nForced: driven by a periodic force, it vibrates at the driver\'s frequency.', src: OSC },
      { n: 2, f: 'Resonance', b: 'When the driving frequency equals the natural frequency, the amplitude is a maximum and the driver transfers energy to the system at its greatest rate.', src: OSC },
      { n: 3, f: 'Effect of increasing damping on a resonance curve', b: 'The peak is lower and broader, and occurs slightly below the natural frequency. Light damping gives a tall, sharp peak.' },
      { n: 4, f: 'Two examples of resonance', b: 'Any two: a child on a swing pushed in time, a car panel rattling at one engine speed, footbridges swaying, musical instruments, stationary waves on strings and in air columns.' },
      { n: 5, f: 'Lowest resonant frequency of a string fixed at both ends', b: 'f = v/2L, then 2f, 3f and so on. For L = 1.0 m and v = 50 m s⁻¹: 25 Hz, then 50 Hz.' },
    ]),
    ...sub(WAVE, 'progressive-waves-oxfordaqa-alevel', '3.5.3', [
      { n: 1, f: 'Progressive wave', b: 'A wave that transfers energy from one place to another without transferring the medium itself.' },
      { n: 2, f: 'Wavelength, frequency and wave speed', b: 'Wavelength λ: distance between two adjacent points oscillating in phase.\nFrequency f: number of complete oscillations per second (Hz).\nWave speed c = fλ.' },
      { n: 3, f: 'Phase difference between two points a distance x apart on a wave', b: 'Phase difference = 2πx/λ radians (or x/λ cycles, × 360 for degrees). In phase: 0, 2π, 4π…; antiphase: π, 3π…' },
      { n: 4, f: 'Points 0.45 m apart on a wave of wavelength 0.60 m: phase difference?', b: '0.45 ÷ 0.60 = 0.75 cycle = 270° = 3π/2 rad.' },
      { n: 5, f: 'Ultrasound imaging: depth of a boundary from an echo', b: 'Depth = (speed × time delay) ÷ 2, because the pulse travels there and back. Gel removes the air gap, which would otherwise reflect most of the ultrasound.' },
    ]),
    ...sub(WAVE, 'longitudinal-and-transverse-waves-oxfordaqa', '3.5.4', [
      { n: 1, f: 'Transverse vs longitudinal waves', b: 'Transverse: oscillations perpendicular to the direction of energy transfer (string waves, all electromagnetic waves).\nLongitudinal: oscillations parallel to the direction of energy transfer, with compressions and rarefactions (sound).' },
      { n: 2, f: 'Plane-polarised wave', b: 'A wave whose oscillations are confined to a single plane that contains the direction of travel.' },
      { n: 3, f: 'What does polarisation show about light, and why can sound not be polarised?', b: 'Only transverse waves can be polarised, so polarisation is evidence that light is transverse. Sound is longitudinal, so it cannot be polarised.' },
      { n: 4, f: 'Unpolarised light passes through two Polaroids. What happens as the second is rotated through 360°?', b: 'Two maxima (axes parallel) and two minima, with almost no light when the axes are crossed at 90°.' },
      { n: 5, f: 'How should a receiving rod aerial be aligned?', b: 'Parallel to the transmitting aerial (along the plane of the electric field) for the strongest signal; at 90° the signal is nearly zero.' },
      { n: 6, f: 'Speed of all electromagnetic waves in a vacuum', b: '3.00 × 10⁸ m s⁻¹. They are oscillating electric and magnetic fields, perpendicular to each other and to the direction of travel, and need no medium.' },
    ]),
    ...sub(WAVE, 'principle-of-superposition-and-stationary-waves-oxfordaqa', '3.5.5', [
      { n: 1, f: 'Principle of superposition', b: 'Where waves meet, the resultant displacement is the sum of their separate displacements (taking signs into account).', src: STAT },
      { n: 2, f: 'How is a stationary wave formed?', b: 'Two waves of the same frequency (and similar amplitude) travelling in opposite directions, often a wave and its reflection, superpose. It has fixed nodes and antinodes and transfers no energy along its length.' },
      { n: 3, f: 'Node and antinode', b: 'Node: a point of zero amplitude, where the two waves are always in antiphase.\nAntinode: a point of maximum amplitude, where they are always in phase.', src: STAT },
      { n: 4, f: 'Node-to-node and node-to-antinode distances', b: 'Node to node = λ/2.\nNode to adjacent antinode = λ/4.' },
      { n: 5, f: 'First harmonic frequency of a stretched string', b: 'f = (1/2l)√(T/μ), where l is the vibrating length, T the tension and μ the mass per unit length. The nth harmonic has n loops and frequency nf₁.' },
      { n: 6, f: 'Stationary vs progressive wave: phase of points', b: 'Stationary: all points within one loop are in phase; points in adjacent loops are in antiphase.\nProgressive: phase changes continuously along the wave.' },
    ]),
    ...sub(WAVE, 'interference-oxfordaqa-alevel', '3.5.6', [
      { n: 1, f: 'Coherent sources', b: 'Sources with the same frequency and a constant phase difference.' },
      { n: 2, f: 'Path difference for constructive and destructive interference (coherent sources in phase)', b: 'Constructive (bright, loud): path difference = nλ.\nDestructive (dark, quiet): path difference = (n + ½)λ.' },
      { n: 3, f: 'Young\'s double slit fringe spacing equation', b: 'w = λD/s, where s is the slit separation and D the slit-to-screen distance (D much greater than s).' },
      { n: 4, f: 'Effect on double-slit fringe spacing of increasing λ, s and D', b: 'Longer λ: wider spacing.\nGreater slit separation s: narrower spacing.\nGreater screen distance D: wider spacing.' },
      { n: 5, f: 'Laser safety in an interference practical', b: 'Use a low-power laser, never look into the beam or at a shiny reflection, and stop the beam at the end of its path with a matt surface.' },
      { n: 6, f: 'Double-slit pattern with white light', b: 'A white central fringe, with coloured fringes either side: blue on the inner edge, red on the outer.' },
    ]),
    ...sub(WAVE, 'diffraction-oxfordaqa-alevel', '3.5.7', [
      { n: 1, f: 'Diffraction', b: 'The spreading of a wave as it passes through a gap or around an edge.' },
      { n: 2, f: 'Single-slit diffraction: what affects the width of the central maximum?', b: 'A narrower slit or a longer wavelength gives a wider central maximum; a wider slit gives a narrower one.' },
      { n: 3, f: 'Diffraction grating equation', b: 'd sin θ = nλ, where d is the slit spacing (1 ÷ lines per metre), n the order and θ measured from the straight-through direction.' },
      { n: 4, f: 'How do you find the highest order a grating can produce?', b: 'Since sin θ cannot exceed 1, n ≤ d/λ, rounded down to a whole number. Total maxima = 2n + 1.' },
      { n: 5, f: 'Grating with 200 lines per mm: what is d?', b: 'd = 1 ÷ (200 × 10³ m⁻¹) = 5.00 × 10⁻⁶ m.' },
    ]),
    ...sub(WAVE, 'refraction-at-a-plane-surface-oxfordaqa', '3.5.8', [
      { n: 1, f: 'Refractive index of a substance', b: 'n = c/c_s, the speed of light in a vacuum ÷ the speed in the substance. No unit; n of air ≈ 1.' },
      { n: 2, f: 'Snell\'s law', b: 'n₁ sin θ₁ = n₂ sin θ₂, with angles measured from the normal.' },
      { n: 3, f: 'Critical angle: equation and condition for total internal reflection', b: 'sin θc = n₂/n₁ (n₁ > n₂). TIR happens when light travels towards a medium of lower refractive index and the angle of incidence exceeds θc.' },
      { n: 4, f: 'Step-index optical fibre: role of the cladding', b: 'It has a lower refractive index than the core, so TIR happens at the core boundary. It also protects the core surface, prevents cross-talk between fibres and adds strength.' },
      { n: 5, f: 'Modal vs material dispersion in an optical fibre', b: 'Modal: rays take different paths, so arrive at different times; reduced by a narrow (single-mode) core.\nMaterial: n depends on wavelength, so different wavelengths travel at different speeds; reduced by monochromatic light.' },
      { n: 6, f: 'Absorption vs pulse broadening in a fibre', b: 'Absorption reduces the amplitude (power) of a pulse. Dispersion broadens (lengthens) it, so pulses can overlap, which limits the data rate.' },
    ]),
    ...sub(WAVE, 'collisions-of-electrons-with-atoms-oxfordaqa', '3.5.9', [
      { n: 1, f: 'Electronvolt', b: 'The energy gained by an electron accelerated through a p.d. of 1 V: 1 eV = 1.60 × 10⁻¹⁹ J.' },
      { n: 2, f: 'Excitation vs ionisation', b: 'Excitation: an electron in an atom moves to a higher energy level.\nIonisation: an electron is removed from the atom.' },
      { n: 3, f: 'Exciting an atom: colliding electron vs photon', b: 'A free electron can excite the atom if its kinetic energy is at least the energy gap; it keeps the surplus. A photon is absorbed only if its energy exactly equals a gap.' },
      { n: 4, f: 'What do line spectra show, and what is the photon energy for a transition?', b: 'Only certain frequencies appear, so atomic energy levels are discrete. Photon energy hf = E₁ − E₂, the difference between the two levels.' },
      { n: 5, f: 'How does a fluorescent tube produce visible light?', b: 'Accelerated electrons collide with mercury atoms and excite them. De-excitation emits ultraviolet photons, which the phosphor coating absorbs and re-emits as visible light.' },
      { n: 6, f: 'Shortest X-ray wavelength from a tube at p.d. V', b: 'An electron gives all its energy eV to one photon: λmin = hc/eV.' },
    ]),
    ...sub(WAVE, 'photoelectric-effect-oxfordaqa', '3.5.10', [
      { n: 1, f: 'Work function and threshold frequency', b: 'Work function ϕ: the smallest energy an electron needs to escape the metal surface.\nThreshold frequency f₀: the lowest frequency that releases photoelectrons. ϕ = hf₀.' },
      { n: 2, f: 'Photoelectric equation', b: 'hf = ϕ + Ek(max).' },
      { n: 3, f: 'Stopping potential', b: 'The reverse p.d. that just stops the fastest photoelectrons: eVs = Ek(max).' },
      { n: 4, f: 'Why does light below the threshold frequency release no electrons, however intense?', b: 'One photon gives all its energy to one electron. If hf < ϕ, no single electron gets enough energy to escape; more intense light only means more such photons.' },
      { n: 5, f: 'Effect of intensity and of frequency on photoemission (above f₀)', b: 'Greater intensity: more photoelectrons per second (larger current).\nHigher frequency: greater maximum kinetic energy.' },
      { n: 6, f: 'Graph of stopping potential against frequency: what do the gradient and intercept give?', b: 'Gradient = h/e, so h = gradient × e. The intercept on the frequency axis is f₀.' },
    ]),
    ...sub(WAVE, 'wave-particle-duality-oxfordaqa', '3.5.11', [
      { n: 1, f: 'de Broglie wavelength', b: 'λ = h/p = h/mv, the wavelength associated with a particle of momentum p.' },
      { n: 2, f: 'Evidence for wave-particle duality', b: 'Electron diffraction shows particles behaving as waves. The photoelectric effect shows electromagnetic waves behaving as particles.' },
      { n: 3, f: 'When is electron diffraction noticeable?', b: 'When the de Broglie wavelength is about the same size as the gap or atomic spacing. Greater momentum gives a shorter wavelength and less diffraction.' },
      { n: 4, f: 'de Broglie wavelength of an electron accelerated through p.d. V', b: 'Ek = eV, p = √(2mEk), λ = h/p.' },
      { n: 5, f: 'Why do large everyday objects show no wave behaviour?', b: 'Their momentum is so large that λ = h/p is negligible compared with any gap they could pass through.' },
    ]),

    // 6 Circular and periodic motion (International A-level only)
    ...sub(CIRC, 'circular-motion-oxfordaqa-alevel', '3.6.1', [
      { n: 1, f: 'Radian', b: 'The angle at the centre of a circle when the arc length equals the radius: θ = s/r. 360° = 2π rad.' },
      { n: 2, f: 'Angular speed: definition and equations', b: 'The angle turned per unit time, in rad s⁻¹. ω = v/r = 2πf = 2π/T.' },
      { n: 3, f: 'Centripetal acceleration and centripetal force', b: 'a = v²/r = ω²r, directed towards the centre.\nF = mv²/r = mω²r: the resultant force towards the centre.' },
      { n: 4, f: 'Why is an object moving in a circle at constant speed accelerating?', b: 'Its direction, and so its velocity, is continuously changing. The acceleration is towards the centre, so a resultant force towards the centre is needed.' },
      { n: 5, f: 'Why does the centripetal force do no work?', b: 'It acts at 90° to the velocity, so it transfers no energy and the speed stays constant.' },
      { n: 6, f: 'What provides the centripetal force for a car on a flat bend, a mass on a string, and a satellite?', b: 'Car: friction (sideways grip of the tyres).\nMass on a string: tension.\nSatellite: gravitational attraction.' },
    ]),
    ...sub(CIRC, 'simple-harmonic-motion-oxfordaqa', '3.6.2', [
      { n: 1, f: 'Simple harmonic motion: definition and defining equation', b: 'Motion in which the acceleration is proportional to the displacement from equilibrium and always directed towards it: a = −ω²x.' },
      { n: 2, f: 'SHM equations for displacement and speed', b: 'x = A cos ωt (timing from x = +A, ωt in radians).\nv = ±ω√(A² − x²).' },
      { n: 3, f: 'Maximum speed and maximum acceleration in SHM, and where they occur', b: 'Maximum speed ωA, at equilibrium (x = 0).\nMaximum acceleration ω²A, at the extremes (x = ±A).' },
      { n: 4, f: 'Derive the period of a mass-spring system', b: 'F = −kx and F = ma give a = −(k/m)x. Comparing with a = −ω²x, ω² = k/m, so T = 2π/ω = 2π√(m/k).' },
      { n: 5, f: 'Derive the period of a simple pendulum, and its condition', b: 'Restoring force −mg sin θ. For small θ in radians, sin θ ≈ θ = x/l, so a = −(g/l)x, ω² = g/l and T = 2π√(l/g). The mass cancels.' },
      { n: 6, f: 'Total energy in SHM, and the period of the Ek and Ep graphs against time', b: 'Total energy = ½mω²A² (½kA² for a spring), proportional to A². Ek and Ep each vary with period T/2.' },
    ]),

    // 7 Gravitational fields and satellites (International A-level only)
    ...sub(GRAV, 'newtons-gravitational-law', '3.7.1', [
      { n: 1, f: 'Newton\'s law of gravitation', b: 'Two point masses attract each other with a force proportional to the product of their masses and inversely proportional to the square of their separation: F = Gm₁m₂/r².' },
      { n: 2, f: 'Value and unit of the gravitational constant G', b: 'G = 6.67 × 10⁻¹¹ N m² kg⁻² (use the value given in the question).' },
      { n: 3, f: 'The distance between two masses is tripled. What happens to the gravitational force?', b: 'F ∝ 1/r², so it falls to (1/3)² = 1/9 of its original value.' },
      { n: 4, f: 'In F = Gm₁m₂/r² for a satellite, what is r?', b: 'The distance between the centres of mass: planet radius + height above the surface (r = R + h).' },
    ]),
    ...sub(GRAV, 'gravitational-field-strength-oxfordaqa', '3.7.2', [
      { n: 1, f: 'Gravitational field strength g', b: 'The force per unit mass acting on a small mass placed at that point in the field: g = F/m. Unit N kg⁻¹ (equivalent to m s⁻²).' },
      { n: 2, f: 'Field strength in a radial field', b: 'g = GM/r², where M is the mass creating the field and r the distance from its centre.' },
      { n: 3, f: 'Derive g = GM/r²', b: 'Force on a small mass m: F = GMm/r². Field strength g = F/m = GM/r²; the test mass cancels.' },
      { n: 4, f: 'Field lines around a planet and near its surface', b: 'Around the planet: radial, pointing inwards, spreading out as the field weakens. In a small region near the surface: parallel and equally spaced (approximately uniform).' },
      { n: 5, f: 'G vs g', b: 'G is a universal constant, the same everywhere. g is a field strength that depends on the source mass and the position.' },
    ]),
    ...sub(GRAV, 'gravitational-potential-oxfordaqa', '3.7.3', [
      { n: 1, f: 'Gravitational potential V', b: 'The work done per unit mass by an external agent in moving a small mass from infinity to the point. Zero at infinity, so negative everywhere else. Unit J kg⁻¹.', src: GPOT },
      { n: 2, f: 'Potential in a radial field, and work done moving a mass', b: 'V = −GM/r.\nΔW = mΔV, where ΔV = V(final) − V(initial).' },
      { n: 3, f: 'Equipotential surface (gravitational)', b: 'A surface on which V is constant. The field is at right angles to it, and no work is done moving a mass along it.', src: GPOT },
      { n: 4, f: 'Field strength from a graph of V against r', b: 'g = −ΔV/Δr: the magnitude of g is the gradient of the tangent to the V–r graph at that point.' },
      { n: 5, f: 'Gravitational potential difference', b: 'The work done per unit mass in moving a mass between two points.', src: GPOT },
    ]),
    ...sub(GRAV, 'orbits-of-planets-and-satellites-oxfordaqa', '3.7.4', [
      { n: 1, f: 'Orbital speed and period of a satellite in a circular orbit', b: 'GMm/r² = mv²/r gives v = √(GM/r), independent of the satellite\'s mass.\nT² = 4π²r³/(GM), so T² ∝ r³.' },
      { n: 2, f: 'Kinetic, potential and total energy of an orbiting satellite', b: 'Ek = GMm/(2r)\nEp = −GMm/r\nE = −GMm/(2r), so E = −Ek.' },
      { n: 3, f: 'Geosynchronous orbit', b: 'An orbit whose period equals the planet\'s rotation period (23 h 56 min for the Earth).', src: GPOT },
      { n: 4, f: 'Geostationary orbit', b: 'A geosynchronous orbit above the equator in the same direction as the planet\'s rotation, so the satellite stays above one point and a fixed ground antenna can point at it.', src: GPOT },
      { n: 5, f: 'Why does a satellite speed up when drag makes it fall to a lower orbit?', b: 'Drag removes total energy, so the orbit radius falls. Potential energy falls by twice the gain in kinetic energy, so the speed increases (v = √(GM/r)).' },
    ]),

    // 8 Electric fields and capacitance (International A-level only)
    ...sub(EFLD, 'coulombs-law-oxfordaqa', '3.8.1', [
      { n: 1, f: 'Coulomb\'s law', b: 'The force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation: F = Q₁Q₂/(4πε₀r²). Like charges repel; unlike attract.' },
      { n: 2, f: 'Value of ε₀ and of 1/(4πε₀)', b: 'ε₀ = 8.85 × 10⁻¹² F m⁻¹, so 1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻². Air can be treated as a vacuum.' },
      { n: 3, f: 'Where is the charge on a charged sphere taken to act?', b: 'At its centre, so r is measured from the centre of the sphere.' },
      { n: 4, f: 'Electrostatic vs gravitational force between a proton and an electron', b: 'The electrostatic force is about 2.3 × 10³⁹ times larger. Both are inverse-square, so the ratio does not depend on r; gravity is negligible between subatomic particles.' },
      { n: 5, f: 'Charges +1.5 μC and +2.5 μC are 0.20 m apart in air. Force?', b: 'F = (1.5 × 10⁻⁶ × 2.5 × 10⁻⁶) ÷ (4π × 8.85 × 10⁻¹² × 0.20²) = 0.84 N, repulsive.' },
    ]),
    ...sub(EFLD, 'electric-field-strength-oxfordaqa', '3.8.2', [
      { n: 1, f: 'Electric field strength E', b: 'The force per unit positive charge at a point: E = F/Q. A vector, in N C⁻¹ (equivalent to V m⁻¹).' },
      { n: 2, f: 'Field strength in a uniform field and in a radial field', b: 'Uniform (parallel plates): E = V/d.\nRadial (point charge Q): E = Q/(4πε₀r²).' },
      { n: 3, f: 'Derive E = V/d for parallel plates', b: 'Work done moving charge Q across the gap: W = Fd = QEd. Also W = QV. So QEd = QV and E = V/d.' },
      { n: 4, f: 'Path of a charged particle entering a uniform field at right angles', b: 'Constant velocity along the plates (no force that way) and constant acceleration a = QE/m across them, so the path is a parabola.' },
      { n: 5, f: 'Field lines between charged parallel plates', b: 'Parallel, equally spaced straight lines at right angles to the plates, from positive to negative, bending slightly outwards only at the edges.' },
    ]),
    ...sub(EFLD, 'electric-potential-oxfordaqa', '3.8.3', [
      { n: 1, f: 'Absolute electric potential at a point', b: 'The energy transferred per coulomb of positive test charge when a small test charge is moved from infinity to that point. Zero at infinity. Unit V (J C⁻¹).' },
      { n: 2, f: 'Potential in a radial field, and work done moving a charge', b: 'V = Q/(4πε₀r), keeping the sign of Q.\nΔW = QΔV.' },
      { n: 3, f: 'Equipotential surface (electric)', b: 'A surface on which every point has the same potential. No work is done moving a charge along it.', src: EPOT },
      { n: 4, f: 'How are E and V related on graphs against r?', b: 'E = −ΔV/Δr: E is the gradient of the V–r graph. The area under the E–r graph between two radii gives the potential difference.' },
      { n: 5, f: 'Potential vs field strength', b: 'Potential is a scalar varying as 1/r; field strength is a vector varying as 1/r². A point of zero potential need not have zero field.' },
    ]),
    ...sub(EFLD, 'capacitors-oxfordaqa-alevel', '3.8.4', [
      { n: 1, f: 'Capacitance', b: 'The charge stored per unit potential difference: C = Q/V. Unit farad, F (C V⁻¹).', src: EPOT },
      { n: 2, f: 'Capacitance of a parallel-plate capacitor', b: 'C = Aε₀ε_r/d, where A is the overlap area, d the plate separation and ε_r the relative permittivity of the dielectric.' },
      { n: 3, f: 'Energy stored by a capacitor', b: 'E = ½QV = ½CV² = Q²/(2C): the area under a graph of Q against V.' },
      { n: 4, f: 'How does a dielectric of polar molecules increase capacitance?', b: 'In the field each molecule feels a couple and rotates to align. The aligned molecules produce a field opposing the applied field, so the net field falls. For the same Q the p.d. falls, so C = Q/V rises.' },
      { n: 5, f: 'A dielectric is inserted into a capacitor. Isolated vs still connected to the battery', b: 'Isolated: Q stays fixed and V falls.\nConnected: V stays fixed and Q rises.' },
      { n: 6, f: 'Energy stored by 100 μF charged to 10 V', b: '½CV² = ½ × 100 × 10⁻⁶ × 10² = 5.0 × 10⁻³ J.' },
    ]),

    // 9 Exponential change (International A-level only)
    ...sub(EXPO, 'capacitor-charge-and-discharge-oxfordaqa', '3.9.1', [
      { n: 1, f: 'Equations for a capacitor discharging through a resistor', b: 'Q = Q₀e^(−t/RC), V = V₀e^(−t/RC), I = I₀e^(−t/RC), with I₀ = V₀/R.' },
      { n: 2, f: 'Equations for a capacitor charging through a resistor from a supply V₀', b: 'Q = Q₀(1 − e^(−t/RC)) and V = V₀(1 − e^(−t/RC)), where Q₀ = CV₀ is the final charge. The current I = I₀e^(−t/RC) falls.' },
      { n: 3, f: 'Time constant, and what happens in one time constant', b: 'Time constant = RC (seconds with R in Ω and C in F). In one RC a discharging quantity falls to 0.37 (37%) of its start value; a charging capacitor reaches 0.63 of its final value.' },
      { n: 4, f: 'Time to halve when a capacitor discharges', b: 'T½ = ln 2 × RC = 0.693RC, which is shorter than RC.' },
      { n: 5, f: 'Finding RC from a graph of ln V against t (discharge)', b: 'The graph is a straight line with gradient −1/RC, so RC = −1/gradient. The intercept is ln V₀.' },
      { n: 6, f: 'What do the gradient of a Q–t graph and the area under an I–t graph give?', b: 'Gradient of Q–t: the current.\nArea under I–t: the charge that has flowed.' },
    ]),
    ...sub(EXPO, 'exponential-changes-in-radioactivity-oxfordaqa', '3.9.2', [
      { n: 1, f: 'Radioactive decay is random and spontaneous. Meaning?', b: 'Random: you cannot predict which nucleus will decay or when. Spontaneous: it is not affected by external conditions such as temperature, pressure or chemical state.' },
      { n: 2, f: 'Decay constant λ', b: 'The probability per unit time that a nucleus will decay. Unit s⁻¹ (or h⁻¹, y⁻¹).' },
      { n: 3, f: 'Activity: definition and equation', b: 'The number of decays per second in a sample: A = λN. Unit becquerel, Bq (s⁻¹).' },
      { n: 4, f: 'Exponential decay equations and half-life', b: 'N = N₀e^(−λt), A = A₀e^(−λt).\nT½ = ln 2/λ = 0.693/λ.' },
      { n: 5, f: 'Number of nuclei in a mass m of a nuclide of molar mass M', b: 'N = (m/M) × N_A, with m in g, M in g mol⁻¹ and N_A = 6.02 × 10²³ mol⁻¹.' },
      { n: 6, f: 'Finding λ from a graph of ln A against t', b: 'ln A = ln A₀ − λt: a straight line with gradient −λ. So λ = −gradient and T½ = ln 2/λ. Use corrected count rates.' },
    ]),

    // 10 Magnetic fields (International A-level only)
    ...sub(MAG, 'magnetic-flux-density-oxfordaqa-alevel-physics', '3.10.1', [
      { n: 1, f: 'Force on a current-carrying wire in a magnetic field', b: 'F = BIL, with the wire at right angles to the field and L the length of wire inside the field.' },
      { n: 2, f: 'Magnetic flux density B, and the tesla', b: 'B is the force per metre of conductor per ampere of current, with the conductor at right angles to the field. 1 T is the flux density that gives a force of 1 N on 1 m of wire carrying 1 A across the field.' },
      { n: 3, f: 'The tesla in base units', b: '1 T = 1 N A⁻¹ m⁻¹ = 1 kg s⁻² A⁻¹.' },
      { n: 4, f: 'Fleming\'s left-hand rule', b: 'Thumb: force (motion). First finger: field (north to south). Second finger: conventional current.' },
      { n: 5, f: 'Measuring B with a current balance', b: 'Zero the balance, pass current I and record the mass change Δm, so F = Δm g. Plot Δm against I: a straight line through the origin with gradient BL/g, so B = gradient × g/L.' },
    ]),
    ...sub(MAG, 'moving-charges-in-a-magnetic-field-oxfordaqa-alevel-physics', '3.10.2', [
      { n: 1, f: 'Force on a charged particle moving across a magnetic field', b: 'F = BQv, perpendicular to both the field and the velocity. For a negative charge, point the second finger opposite to the velocity.' },
      { n: 2, f: 'Radius of the circular path of a charged particle in a uniform magnetic field', b: 'BQv = mv²/r, so r = mv/(BQ).' },
      { n: 3, f: 'Why does a magnetic field not change a charged particle\'s speed?', b: 'The force is always perpendicular to the velocity, so it does no work and the kinetic energy stays constant; only the direction changes.' },
      { n: 4, f: 'Period of a charged particle\'s orbit in a magnetic field', b: 'T = 2πm/(BQ), independent of the speed (frequency f = BQ/(2πm)).' },
      { n: 5, f: 'How does a cyclotron accelerate particles?', b: 'Two dees in a vacuum with a magnetic field across them. An alternating p.d. across the gap accelerates the particle each crossing; inside a dee the field bends it in a semicircle at constant speed. The radius grows, so the path spirals outwards.' },
      { n: 6, f: 'Why can a cyclotron use a fixed-frequency alternating p.d.?', b: 'The time for each semicircle, πm/(BQ), does not depend on speed (at speeds well below the speed of light), so the p.d. frequency f = BQ/(2πm) stays in step.' },
    ]),
    ...sub(MAG, 'magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics', '3.10.3', [
      { n: 1, f: 'Magnetic flux', b: 'Φ = BA, with B perpendicular to the area A. Unit weber, Wb (1 Wb = 1 T m²).' },
      { n: 2, f: 'Flux linkage', b: 'NΦ for a coil of N turns. Unit Wb (often written Wb-turns).' },
      { n: 3, f: 'Flux linkage of a coil at an angle to the field', b: 'NΦ = BAN cos θ, where θ is the angle between B and the normal to the coil.' },
      { n: 4, f: 'A 30-turn coil, 0.12 m × 0.090 m, normal along a 0.35 T field. Flux linkage?', b: 'A = 1.08 × 10⁻² m², Φ = 3.78 × 10⁻³ Wb, NΦ = 30 × 3.78 × 10⁻³ = 0.113 Wb.' },
    ]),
    ...sub(MAG, 'electromagnetic-induction-oxfordaqa-alevel-physics', '3.10.4', [
      { n: 1, f: 'Faraday\'s law', b: 'The magnitude of the induced emf equals the rate of change of flux linkage: ε = NΔΦ/Δt.' },
      { n: 2, f: 'Lenz\'s law', b: 'The induced emf (and current) acts in a direction to oppose the change in flux linkage that causes it.' },
      { n: 3, f: 'emf induced in a straight conductor moving across a field', b: 'ε = BLv, with B, L and v mutually perpendicular.' },
      { n: 4, f: 'emf of a coil rotating in a uniform field', b: 'ε = BANω sin ωt, with peak value BANω (ω = 2πf). The emf is maximum when the plane of the coil is parallel to B (flux linkage zero) and zero when it is perpendicular.' },
      { n: 5, f: 'Eddy currents: what they are and how they are reduced', b: 'Circulating currents induced in bulk metal when the flux through it changes. They oppose the change, heat the metal and damp motion. Laminating the metal into thin insulated sheets reduces them.' },
      { n: 6, f: 'How is the emf found from a graph of flux linkage against time?', b: 'The emf is the gradient of the flux linkage–time graph. A flat section gives zero emf however large the flux linkage.' },
    ]),
    ...sub(MAG, 'alternating-currents-oxfordaqa-alevel-physics', '3.10.5', [
      { n: 1, f: 'Root mean square (rms) value of an alternating current or p.d.', b: 'The steady d.c. value that would give the same mean power in a given resistor.' },
      { n: 2, f: 'rms, peak and peak-to-peak for a sinusoidal a.c.', b: 'Irms = I₀/√2 and Vrms = V₀/√2. Peak-to-peak = 2 × peak.' },
      { n: 3, f: 'Mean power in a resistor on a.c.', b: 'P = IrmsVrms = Irms²R = Vrms²/R, using rms values.' },
      { n: 4, f: 'Reading an oscilloscope trace', b: 'Voltage = vertical divisions × Y-gain (V per division). Period = horizontal divisions for one cycle × time-base (time per division). f = 1/T.' },
      { n: 5, f: 'A sinusoidal supply has peak voltage 25 V. rms and peak-to-peak values?', b: 'Vrms = 25/√2 = 17.7 V. Peak-to-peak = 50 V.' },
    ]),
    ...sub(MAG, 'the-operation-of-a-transformer-oxfordaqa-alevel-physics', '3.10.6', [
      { n: 1, f: 'Transformer equation (ideal)', b: 'Ns/Np = Vs/Vp. Step-up: Ns > Np. Step-down: Ns < Np.' },
      { n: 2, f: 'Transformer efficiency', b: 'Efficiency = output power ÷ input power = IsVs/(IpVp).' },
      { n: 3, f: 'Causes of transformer energy losses and how each is reduced', b: 'Coil resistance (I²R heating): thick copper wire.\nEddy currents in the core: laminated core.\nHysteresis: soft iron core.\nFlux leakage: coils wound close together on a closed core.' },
      { n: 4, f: 'Np = 500, Ns = 2000, primary 12 V. Secondary voltage?', b: 'Vs = 12 × 2000/500 = 48 V.' },
      { n: 5, f: 'Why is electricity transmitted at high voltage?', b: 'For a given power P = IV, a higher voltage means a smaller current, so the line loss I²R is much smaller. Raising V tenfold cuts the loss by a factor of 100.' },
    ]),

    // 11 Thermal physics (International A-level only)
    ...sub(THERM, 'energy-transfer-by-heating-and-doing-work-oxfordaqa-alevel-physics', '3.11.1', [
      { n: 1, f: 'Internal energy', b: 'The sum of the randomly distributed kinetic energies and potential energies of the particles in a body.' },
      { n: 2, f: 'First law of thermodynamics', b: 'ΔU = Q + W, where Q is the energy transferred to the system by heating and W the work done on the system.' },
      { n: 3, f: 'Specific heat capacity and specific latent heat', b: 'c: energy to raise the temperature of 1 kg by 1 K, Q = mcΔθ (J kg⁻¹ K⁻¹).\nl: energy to change the state of 1 kg at constant temperature, Q = ml (J kg⁻¹).' },
      { n: 4, f: 'During a change of state, why does the temperature stay constant?', b: 'The energy supplied increases the potential energy of the particles as they separate; their average kinetic energy, and so the temperature, does not change.' },
      { n: 5, f: 'Heating a continuously flowing fluid', b: 'P = (Δm/Δt) c Δθ, where Δm/Δt is the mass flow rate in kg s⁻¹.' },
      { n: 6, f: 'Required practical: specific heat capacity by an electrical method. Equation and main error', b: 'VIt = mcΔθ, so c = VIt/(mΔθ). Energy lost to the surroundings makes Δθ too small and c too large; reduce it by lagging the block.' },
    ]),
    ...sub(THERM, 'energy-transfer-by-conduction-oxfordaqa-alevel-physics', '3.11.2', [
      { n: 1, f: 'Rate of energy transfer by conduction', b: 'Rate = kAΔθ/L, where k is the thermal conductivity (W m⁻¹ K⁻¹), A the area, Δθ the temperature difference and L the thickness. Applies in a steady state.' },
      { n: 2, f: 'U-value', b: 'U = k/L, unit W m⁻² K⁻¹. Rate of energy transfer = UAΔθ. A lower U-value means better insulation.' },
      { n: 3, f: 'Why are metals good thermal conductors?', b: 'Free electrons carry energy through the metal as well as lattice vibrations.' },
      { n: 4, f: 'Thermal conductivity k vs U-value', b: 'k is a property of the material. U belongs to a particular thickness of that material (U = k/L).' },
      { n: 5, f: 'Roof of area 12 m², U = 0.25 W m⁻² K⁻¹, temperature difference 14 K. Rate of loss?', b: 'Rate = UAΔθ = 0.25 × 12 × 14 = 42 W.' },
    ]),
    ...sub(THERM, 'ideal-gases-oxfordaqa-alevel-physics', '3.11.3', [
      { n: 1, f: 'Boyle\'s law, Charles\'s law and the pressure law', b: 'For a fixed mass of gas:\nBoyle: pV = constant at constant T.\nCharles: V/T = constant at constant p.\nPressure law: p/T = constant at constant V. T in kelvin.' },
      { n: 2, f: 'Ideal gas equation in moles and in molecules', b: 'pV = nRT, R = 8.31 J mol⁻¹ K⁻¹.\npV = NkT, k = 1.38 × 10⁻²³ J K⁻¹.\nR = N_A k.' },
      { n: 3, f: 'Absolute zero', b: '0 K, about −273 °C: the temperature at which an ideal gas would, by extrapolation, have zero volume at constant pressure (or zero pressure at constant volume).' },
      { n: 4, f: 'Work done by a gas expanding at constant pressure', b: 'W = pΔV, the area under a p–V graph.' },
      { n: 5, f: 'Required practical: verifying Boyle\'s law', b: 'Trap air in a syringe attached to a pressure gauge. Change V slowly, wait for thermal equilibrium and record p. A graph of p against 1/V is a straight line through the origin.' },
      { n: 6, f: 'Converting Celsius to kelvin', b: 'T/K = θ/°C + 273. Always use kelvin in gas-law calculations.' },
    ]),
    ...sub(THERM, 'kinetic-theory-of-gases-oxfordaqa-alevel-physics', '3.11.4', [
      { n: 1, f: 'Kinetic theory equation for pressure', b: 'pV = ⅓Nm(c_rms)², where m is the mass of one molecule. Equivalently p = ⅓ρ(c_rms)².' },
      { n: 2, f: 'Assumptions of the kinetic theory model', b: 'A large number of molecules in random motion; molecular volume negligible compared with the container; no intermolecular forces except during collisions; elastic collisions; collision time negligible compared with time between collisions.' },
      { n: 3, f: 'Average kinetic energy of a gas molecule', b: '½m(c_rms)² = (3/2)kT = 3RT/(2N_A).' },
      { n: 4, f: 'Brownian motion: what is seen and what it shows', b: 'Smoke or pollen particles jitter randomly because unequal numbers of fast-moving air or water molecules hit them from different sides. It is evidence that molecules exist and move randomly.' },
      { n: 5, f: 'Internal energy of an ideal gas', b: 'The total kinetic energy of its molecules (no potential energy): U = (3/2)nRT = (3/2)NkT.' },
      { n: 6, f: 'Root mean square speed c_rms', b: 'The square root of the mean of the squares of the molecular speeds.' },
    ]),

    // 12 Nuclear energy (International A-level only)
    ...sub(NUC, 'radius-of-the-nucleus-oxfordaqa-alevel-physics', '3.12.1', [
      { n: 1, f: 'Distance of closest approach for an alpha particle fired at a nucleus', b: 'All the kinetic energy becomes electric potential energy: Ek = (2e × Ze)/(4πε₀r). It gives only an upper limit for the nuclear radius.' },
      { n: 2, f: 'Why are high-energy electrons used to measure nuclear radius by diffraction?', b: 'Electrons are not affected by the strong interaction, only the nuclear charge. At hundreds of MeV their de Broglie wavelength is comparable with nuclear size. First minimum: sin θ ≈ 1.22λ/D.' },
      { n: 3, f: 'Nuclear radius and nucleon number', b: 'R = R₀A^(1/3), with R₀ ≈ 1.2 fm (1 fm = 10⁻¹⁵ m).' },
      { n: 4, f: 'Why is nuclear density the same for all nuclei?', b: 'Volume ∝ R³ ∝ A and mass ∝ A, so mass ÷ volume is independent of A: about 2.3 × 10¹⁷ kg m⁻³.' },
      { n: 5, f: 'How does lg R against lg A test R = R₀A^(1/3)?', b: 'It gives a straight line of gradient 1/3, with intercept lg R₀.' },
    ]),
    ...sub(NUC, 'mass-and-energy-oxfordaqa-alevel-physics', '3.12.2', [
      { n: 1, f: 'Mass defect', b: 'The mass of the separate nucleons minus the mass of the nucleus: Δm = Zm_p + (A − Z)m_n − m_nucleus.' },
      { n: 2, f: 'Binding energy', b: 'The minimum energy needed to separate a nucleus into its individual protons and neutrons. It equals Δmc².' },
      { n: 3, f: 'Atomic mass unit and its energy equivalent', b: '1 u = 1/12 of the mass of a carbon-12 atom = 1.66 × 10⁻²⁷ kg, equivalent to 931.5 MeV.' },
      { n: 4, f: 'Binding energy per nucleon graph: where is the peak, and what does it mean for fission and fusion?', b: 'Peak near A = 56 (iron), the most tightly bound nuclei. Fusion of light nuclei (left of the peak) and fission of heavy nuclei (right of it) both increase binding energy per nucleon, so release energy.' },
      { n: 5, f: 'How do you find the energy released in a nuclear reaction from masses?', b: 'Total mass before − total mass after, in u, × 931.5 gives MeV. Use nuclear masses throughout (or atomic masses when the electron numbers balance).' },
    ]),
    ...sub(NUC, 'induced-fission-oxfordaqa-alevel-physics', '3.12.3', [
      { n: 1, f: 'Induced fission', b: 'A heavy nucleus (e.g. uranium-235) absorbs a neutron and splits into two fragments, releasing two or three neutrons and energy.' },
      { n: 2, f: 'Thermal neutron', b: 'A neutron slowed until its kinetic energy is of the order of the thermal energy of its surroundings (about 0.04 eV at room temperature).' },
      { n: 3, f: 'Chain reaction and critical mass', b: 'Chain reaction: neutrons from each fission go on to cause further fissions.\nCritical mass: the least mass of fissile material that can sustain a chain reaction.' },
      { n: 4, f: 'Why is there a critical mass?', b: 'Neutrons are produced throughout the volume but escape through the surface. The surface-to-volume ratio falls as size increases, so below a certain mass too many neutrons escape.' },
      { n: 5, f: 'Roles of the moderator, control rods and coolant', b: 'Moderator: slows neutrons by elastic collisions (water, graphite).\nControl rods: absorb neutrons to control the rate (boron, cadmium).\nCoolant: removes energy from the core (pressurised water, carbon dioxide).' },
    ]),
    ...sub(NUC, 'safety-aspects-nuclear-reactors-oxfordaqa-alevel-physics', '3.12.4', [
      { n: 1, f: 'How is a reactor shut down in an emergency?', b: 'Control rods drop fully into the core (under gravity or on an alarm); absorber can be added to the coolant. Cooling must continue because of decay heat from the fission products.' },
      { n: 2, f: 'Why is spent fuel handled remotely?', b: 'It is intensely radioactive and hot. Machines move it, often under water, which both shields and cools it.' },
      { n: 3, f: 'Shielding around a reactor core', b: 'A steel pressure vessel inside thick concrete. Water absorbs neutrons; dense materials absorb gamma rays.' },
      { n: 4, f: 'Treatment of low-, intermediate- and high-level waste', b: 'Low: sealed and buried at shallow depth.\nIntermediate: shielded and set in concrete.\nHigh (spent fuel): cooled, sealed in glass and steel, stored deep underground.' },
      { n: 5, f: 'Benefits and risks of nuclear power', b: 'Benefits: high energy per kilogram, no carbon dioxide from the reactor in normal use, steady output.\nRisks: rare but severe accidents, long-lived waste, decommissioning cost, links to weapons.' },
    ]),
    ...sub(NUC, 'nuclear-fusion-oxfordaqa-alevel-physics', '3.12.5', [
      { n: 1, f: 'Nuclear fusion', b: 'Two light nuclei combine to form a heavier nucleus, releasing energy because the mass of the products is less than the mass of the reactants.' },
      { n: 2, f: 'Why does fusion need a very high temperature?', b: 'The nuclei are both positive and repel. They need enough kinetic energy (mean Ek = (3/2)kT) to get close enough for the strong interaction to act, so temperatures of about 10⁸ K are needed.' },
      { n: 3, f: 'Which nuclei are used in fusion reactors?', b: 'Deuterium (²₁H) and tritium (³₁H). Tritium can be made from lithium-6 by neutron absorption in a lithium blanket.' },
      { n: 4, f: 'Practical problems with fusion power', b: 'Reaching about 10⁸ K; confining the plasma with magnetic fields; achieving enough density and confinement time for net energy gain; neutron damage to the structure; tritium supply.' },
      { n: 5, f: 'Plasma', b: 'An ionised gas of nuclei and free electrons.' },
    ]),

    // 13 Energy sources (International A-level only)
    ...sub(ENER, 'rotational-motion-oxfordaqa-alevel-physics', '3.13.1', [
      { n: 1, f: 'Moment of inertia: definition and what it depends on', b: 'A measure of how hard it is to change an object\'s rotation about an axis: I = Σmr² (kg m²). It depends on the mass, how the mass is distributed about the axis, and the axis.' },
      { n: 2, f: 'Torque and rotational Newton\'s second law', b: 'Torque T = Fr, with r the perpendicular distance from the axis to the line of the force. Resultant torque T = Iα, where α is the angular acceleration.' },
      { n: 3, f: 'Rotational kinetic energy, work and power', b: 'Ek(rot) = ½Iω².\nWork done by a torque W = Tθ.\nPower P = Tω.' },
      { n: 4, f: 'Conservation of angular momentum', b: 'Angular momentum Iω of a system stays constant if no external resultant torque acts on it.' },
      { n: 5, f: 'A spinning diver tucks in, reducing I from 3.6 to 1.2 kg m². What happens to ω (1.5 rad s⁻¹) and Ek?', b: 'Iω is conserved: ω = 3.6 × 1.5/1.2 = 4.5 rad s⁻¹. Ek rises threefold (4.05 J to 12.15 J); the extra comes from work done by the diver\'s muscles.' },
      { n: 6, f: 'Equations for uniform angular acceleration', b: 'ω = ω₀ + αt\nθ = (ω₀ + ω)t/2\nθ = ω₀t + ½αt²\nω² = ω₀² + 2αθ' },
    ]),
    ...sub(ENER, 'wind-energy-oxfordaqa-alevel-physics', '3.13.2', [
      { n: 1, f: 'Maximum power available from the wind', b: 'P = ½πr²ρv³, where r is the blade length and ρ the air density. Mass per second ρπr²v carries kinetic energy ½mv² per second.' },
      { n: 2, f: 'Wind speed doubles. Effect on the power available?', b: 'P ∝ v³, so it rises by a factor of 8.' },
      { n: 3, f: 'Why can a turbine not extract all the wind\'s kinetic energy?', b: 'The air must keep moving past the rotor, so it keeps some kinetic energy. There are also friction, turbulence, gearbox and generator losses.' },
      { n: 4, f: 'Why are turbines in a wind farm spaced well apart?', b: 'Behind each turbine is a wind shadow of slower, turbulent air; spacing stops one turbine sitting in another\'s shadow.' },
      { n: 5, f: 'Advantages and disadvantages of wind power', b: 'For: no fuel, no carbon dioxide in operation, low running cost.\nAgainst: intermittent, noise, visual impact, risk to birds and bats, needs a lot of land or sea.' },
    ]),
    ...sub(ENER, 'solar-energy-oxfordaqa-alevel-physics', '3.13.3', [
      { n: 1, f: 'Intensity at distance r from a point source', b: 'I = P/(4πr²), in W m⁻². I ∝ 1/r², so tripling the distance cuts intensity to one ninth.' },
      { n: 2, f: 'Solar cell V–I characteristic: where is the maximum power?', b: 'Current is nearly constant at low p.d., then falls steeply to zero at the open-circuit voltage. Power IV is zero at both ends and greatest near the knee: calculate IV for each point.' },
      { n: 3, f: 'Solar cells in series and in parallel', b: 'n cells in series: n × the voltage, same current.\nm branches in parallel: same voltage, m × the current. A series string is limited by its weakest (e.g. shaded) cell.' },
      { n: 4, f: 'Panel of area 1.6 m², 800 W m⁻² at right angles, 17% efficient. Output power?', b: 'Incident power = 800 × 1.6 = 1280 W. Output = 0.17 × 1280 = 218 W.' },
      { n: 5, f: 'Required practical: testing the inverse square law with an LDR', b: 'Small lamp and LDR on a rule in a darkened room; vary d and record resistance, subtracting background. A distance offset to the filament is a systematic error; the LDR may not respond in proportion to intensity.' },
    ]),
    ...sub(ENER, 'hydroelectric-power-and-pumped-storage-oxfordaqa-alevel-physics', '3.13.4', [
      { n: 1, f: 'Power from water falling through a head h', b: 'P = ρQgh, where Q is the volume flow rate (m³ s⁻¹) and ρ the density of water.' },
      { n: 2, f: 'Energy changes in a hydroelectric station', b: 'Gravitational potential energy of water → kinetic energy of water → kinetic energy of the turbine → electrical energy from the generator.' },
      { n: 3, f: 'Pumped storage: how it works', b: 'Water is pumped to an upper reservoir when demand is low and released through turbines when demand is high. It is an energy store, not a source, and returns less energy than it uses.' },
      { n: 4, f: 'Why do hydroelectric and pumped storage stations suit back-up supply?', b: 'They can start up and reach full output within minutes when demand rises, unlike base-load stations that run continuously.' },
      { n: 5, f: 'Round-trip efficiency of pumped storage with pumping and generating each 85% efficient', b: '0.85 × 0.85 = 0.72 (72%).' },
    ]),
  ],
};
