/**
 * D-438 -- flashcards for OCR GCSE (9-1) Physics A (Gateway Science) J249
 * (Version 5.0, July 2026, for first assessment in 2018).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: statements the specification prints in bold (Higher Tier
 *               only), following the "Higher Tier only" labels on Marlbridge's own
 *               J249 revision notes. Foundation candidates can hide these cards.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs J249); origin 'revision-notes'.
 *
 * OCR data uses g = 10 N/kg, so the cards do too. Plain text only (see types.ts).
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

const NSL = 'ocr-gcse-physics-newtons-second-law-inertia-momentum-and-circular-motion-revision-notes';
const WDP = 'ocr-gcse-physics-work-done-stored-energy-and-power-from-forces-revision-notes';
const GRID = 'ocr-gcse-physics-the-national-grid-and-transformers-revision-notes';

export const DECK_OCR_GCSE_PHYSICS: FlashcardDeck = {
  boardSlug: 'ocr',
  qualificationSlug: 'gcse',
  subjectSlug: 'physics',
  syllabusCode: 'J249',
  syllabusSeries: 'Version 5.0 (July 2026), for first assessment in 2018',
  tierScheme: 'foundation-higher',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // P1 Matter
    ...sub('matter-ocr-gcse', 'the-particle-model-ocr-gcse', 'P1.1', [
      { n: 1, f: 'Thomson’s plum pudding model of the atom', b: 'A ball of positive charge with tiny negative electrons embedded in it. There is no nucleus.' },
      { n: 2, f: 'Alpha scattering (Geiger and Marsden): the three results and what each showed', b: 'Most went straight through: the atom is mostly empty space.\nSome were deflected through large angles: the centre is positive.\nA very few bounced back: the centre is tiny, dense and holds nearly all the mass.' },
      { n: 3, f: 'What did Bohr add to the nuclear model?', b: 'Electrons orbit at fixed distances (energy levels). This explained atomic stability and light emitted at particular wavelengths.' },
      { n: 4, f: 'Why does a scientific model of the atom change?', b: 'New experimental evidence cannot be explained by the old model. The new model must explain both the old and the new evidence.' },
      { n: 5, f: 'Size of an atom, and of its nucleus compared with it', b: 'An atom (or small molecule) is about 1 × 10⁻¹⁰ m across. The nuclear radius is about 10 000 times smaller, yet holds almost all the mass.' },
      { n: 6, f: 'Density: definition, equation and units', b: 'Mass per unit volume. ρ = m ÷ V, in kg/m³ (or g/cm³). 1 g/cm³ = 1000 kg/m³.' },
      { n: 7, f: 'A metal cylinder has volume 35 cm³ and mass 273 g. Density?', b: '273 ÷ 35 = 7.8 g/cm³ = 7800 kg/m³' },
      { n: 8, f: 'How do you find the volume of an irregular solid?', b: 'By displacement: measure the rise in water level in a measuring cylinder, or use a eureka can. Read at the bottom of the meniscus with your eye level with it.' },
      { n: 9, f: 'Why is a gas much less dense than its solid or liquid?', b: 'The particles are the same, but in a gas they are far apart, so a given volume contains far fewer particles. The particles are not lighter or smaller.' },
    ]),
    ...sub('matter-ocr-gcse', 'changes-of-state-ocr-gcse', 'P1.2', [
      { n: 1, f: 'What happens to the mass when a substance melts, boils or sublimes?', b: 'It is conserved. The same particles are present; only their arrangement and motion change.' },
      { n: 2, f: 'Physical change vs chemical change', b: 'Physical: no new substance; reversing it gives back the original properties (ice melting).\nChemical: a new substance forms; the original properties do not return (iron rusting).' },
      { n: 3, f: 'What does heating do to a substance below, and at, a change of state?', b: 'Below: particles gain kinetic energy and the temperature rises.\nAt a change of state: particles gain potential energy as they separate; the temperature stays constant.' },
      { n: 4, f: 'Specific heat capacity: definition and equation', b: 'The energy needed to raise the temperature of 1 kg of a substance by 1 °C (J/kg °C).\nE = m × c × Δθ' },
      { n: 5, f: 'Specific latent heat: definition and equation', b: 'The energy needed to change 1 kg of a substance from one state to another at constant temperature (J/kg).\nE = m × L' },
      { n: 6, f: 'Specific latent heat of fusion vs of vaporisation', b: 'Fusion: solid ↔ liquid (melting, freezing).\nVaporisation: liquid ↔ gas (boiling, condensing).' },
      { n: 7, f: '0.80 kg of steel (c = 490 J/kg °C) is heated by 60 °C. Energy needed?', b: 'E = 0.80 × 490 × 60 = 23 520 J ≈ 24 000 J' },
      { n: 8, f: '0.15 kg of ice at 0 °C becomes water at 20 °C. Energy? (L = 334 000 J/kg, c = 4200 J/kg °C)', b: 'Melting: 0.15 × 334 000 = 50 100 J\nWarming: 0.15 × 4200 × 20 = 12 600 J\nTotal = 62 700 J' },
      { n: 9, f: 'In a specific heat capacity experiment, how does heat lost to the surroundings affect the result?', b: 'The temperature rise is smaller than it should be, so the calculated c is too high. Lag (insulate) the apparatus.' },
    ]),
    ...sub('matter-ocr-gcse', 'pressure-ocr-gcse', 'P1.3', [
      { n: 1, f: 'What causes gas pressure?', b: 'Gas particles colliding with the surfaces of the container. Pressure is the force per unit area from these collisions.' },
      { n: 2, f: 'A sealed gas is heated at constant volume. Explain what happens to its pressure.', b: 'The particles move faster, so they hit the walls more often and harder. The force on the walls increases, so the pressure increases.' },
      { n: 3, f: 'Pressure and volume of a gas at constant temperature', b: 'p₁V₁ = p₂V₂ (pressure × volume = constant, for a fixed mass of gas). A bigger volume gives a lower pressure because the particles hit the walls less often.', u: true },
      { n: 4, f: 'Gas at 120 kPa and 0.50 m³ is compressed to 0.20 m³ at constant temperature. New pressure?', b: 'p₂ = 120 × 0.50 ÷ 0.20 = 300 kPa', u: true },
      { n: 5, f: 'Why does a bicycle pump warm up when you compress the air?', b: 'Work is done on the gas: particles rebound faster from the moving piston, so their average kinetic energy, and so the temperature, rises.', u: true },
      { n: 6, f: 'Why does atmospheric pressure decrease with height?', b: 'There is less air above, so less weight pressing down, and the air is thinner, so there are fewer particles per cubic metre.', u: true },
      { n: 7, f: 'Pressure due to a column of liquid', b: 'p = h × ρ × g (Pa, m, kg/m³, N/kg). Pressure increases with depth and with the density of the liquid.', u: true },
      { n: 8, f: 'Pressure due to the water at a depth of 35 m? (ρ = 1000 kg/m³, g = 10 N/kg)', b: 'p = 35 × 1000 × 10 = 350 000 Pa', u: true },
      { n: 9, f: 'What causes upthrust?', b: 'The bottom of an immersed object is deeper than the top, so the pressure and the upward force on it are greater. The resultant force is upwards.', u: true },
      { n: 10, f: 'When does an object float in a liquid?', b: 'When the upthrust equals its weight. A fully submerged object floats up if its density is less than the liquid’s and sinks if it is greater.', u: true },
    ]),

    // P2 Forces
    ...sub('forces-ocr-gcse', 'motion-ocr-gcse', 'P2.1', [
      { n: 1, f: 'Scalar and vector pairs for motion', b: 'Distance (scalar) and displacement (vector).\nSpeed (scalar) and velocity (vector). A vector needs a direction.' },
      { n: 2, f: 'Speed equation, and average speed', b: 'speed = distance ÷ time (m/s).\nAverage speed = total distance ÷ total time, including stops.' },
      { n: 3, f: 'A runner covers 4.5 km in 25 minutes. Average speed in m/s?', b: '4500 m ÷ 1500 s = 3.0 m/s' },
      { n: 4, f: 'Converting between km/h and m/s', b: 'km/h ÷ 3.6 = m/s\nm/s × 3.6 = km/h' },
      { n: 5, f: 'Acceleration equation', b: 'a = (v − u) ÷ t\na in m/s², u initial velocity and v final velocity in m/s, t in s.' },
      { n: 6, f: 'What do the gradient and the area under a velocity–time graph give?', b: 'Gradient: acceleration.\nArea under the line: distance travelled.' },
      { n: 7, f: 'How do you find the speed at one moment from a curved distance–time graph?', b: 'Draw a tangent to the curve at that point and find its gradient.' },
      { n: 8, f: 'Uniform acceleration equation without time', b: 'v² − u² = 2as' },
      { n: 9, f: 'From rest, an object accelerates at 3.2 m/s² over 40 m. Final speed?', b: 'v² = 2 × 3.2 × 40 = 256, so v = 16 m/s' },
      { n: 10, f: 'Velocity rises from 0 to 12 m/s in 4 s, then stays at 12 m/s for 6 s. Distance?', b: '½ × 4 × 12 + 6 × 12 = 24 + 72 = 96 m' },
    ]),
    ...sub('forces-ocr-gcse', 'newtons-laws-ocr-gcse', 'P2.2', [
      { n: 1, f: 'Contact and non-contact forces: examples', b: 'Contact: normal contact force, friction, drag, tension.\nNon-contact: gravity, electrostatic, magnetic.' },
      { n: 2, f: 'Resultant force, and equilibrium', b: 'Resultant: the single force that has the same effect as all the forces acting.\nEquilibrium: the resultant force is zero (at rest or constant velocity).' },
      { n: 3, f: 'Newton’s first law', b: 'If the resultant force is zero, an object stays at rest or keeps moving at the same speed in the same direction. A non-zero resultant changes its velocity.' },
      { n: 4, f: 'Forces of 21 N west and 20 N south act on an object. Size of the resultant?', b: 'R = √(21² + 20²) = √841 = 29 N' },
      { n: 5, f: 'Explain how a falling skydiver reaches terminal velocity', b: 'At first weight > drag, so she accelerates. As speed rises, drag rises and the resultant falls. When drag = weight the resultant is zero and the velocity is constant.' },
      { n: 6, f: 'Newton’s second law, with an example', b: 'Resultant force = mass × acceleration (F = ma). A 1300 kg car with 900 N driving force and 640 N resistance: a = 260 ÷ 1300 = 0.20 m/s².' },
      { n: 7, f: 'Inertia', b: 'A measure of how difficult it is to change the velocity of an object.', src: NSL },
      { n: 8, f: 'Inertial mass', b: 'The ratio of force over acceleration, m = F / a.', src: NSL },
      { n: 9, f: 'Momentum, and conservation of momentum', b: 'p = m × v (kg m/s), a vector. With no external force, total momentum before a collision = total momentum after.' },
      { n: 10, f: 'A 2.5 kg cart at 4.8 m/s hits a resting 1.5 kg cart and they lock together. Velocity?', b: 'Momentum = 2.5 × 4.8 = 12 kg m/s. v = 12 ÷ 4.0 = 3.0 m/s' },
      { n: 11, f: 'Force and change in momentum', b: 'Force = change in momentum ÷ time. The same change in momentum over a longer time needs a smaller force.', u: true },
      { n: 12, f: 'A 0.30 kg ball moving at 12 m/s is stopped in 0.020 s. Average force?', b: 'F = 0.30 × 12 ÷ 0.020 = 180 N', u: true },
      { n: 13, f: 'Why does an object moving in a circle at constant speed need a resultant force?', b: 'Its direction keeps changing, so its velocity changes: it is accelerating. A resultant force towards the centre is needed.' },
      { n: 14, f: 'Newton’s third law pair', b: 'Two forces from one interaction: equal in size, opposite in direction, the same type, acting on different objects. They never cancel.' },
      { n: 15, f: 'Work done (by a force)', b: 'Energy transferred when a force moves an object along the line of action of the force. W = F × s (J, N, m).', src: WDP },
      { n: 16, f: 'Joule (J)', b: 'The work done when a force of 1 N moves an object 1 m along the line of action of the force. So 1 N m = 1 J.', src: WDP },
      { n: 17, f: 'Power (of a force or device)', b: 'The rate of energy transfer, which is the same as the rate of doing work. P = W ÷ t; 1 W = 1 J per second.', src: WDP },
    ]),
    ...sub('forces-ocr-gcse', 'forces-in-action-ocr-gcse', 'P2.3', [
      { n: 1, f: 'Why does stretching, bending or compressing need more than one force?', b: 'One force on a free object only changes its motion. Changing its shape needs forces in opposite senses on different parts of it.' },
      { n: 2, f: 'Elastic vs plastic deformation', b: 'Elastic: returns to its original shape and size when the forces are removed.\nPlastic: the change of shape is permanent.' },
      { n: 3, f: 'Force–extension equation for a spring', b: 'F = k × e (N, N/m, m), valid in the linear region (up to the limit of proportionality). k is the gradient of the straight part of the force–extension graph.' },
      { n: 4, f: 'A force of 9.0 N gives a 4.5 cm extension. Spring constant?', b: 'e = 0.045 m, so k = 9.0 ÷ 0.045 = 200 N/m' },
      { n: 5, f: 'Energy stored in a stretched spring', b: 'E = ½ke² in the linear region; in general, the work done = the area under the force–extension graph.' },
      { n: 6, f: 'Gravitational field strength, and the weight equation', b: 'g: the force per kilogram in a gravitational field (10 N/kg at the Earth’s surface).\nW = m × g (N, kg, N/kg).' },
      { n: 7, f: 'Mass vs weight', b: 'Mass: amount of matter, in kg, the same everywhere, measured with a balance.\nWeight: a force, in N, that changes with g, measured with a newtonmeter.' },
      { n: 8, f: 'Acceleration in free fall near the Earth', b: 'About 10 m/s² (9.8 m/s² more precisely). All masses fall with the same acceleration when air resistance is absent.' },
      { n: 9, f: 'An object weighs 7.4 N where g = 3.7 N/kg. What does it weigh on Earth (g = 10 N/kg)?', b: 'Mass = 7.4 ÷ 3.7 = 2.0 kg (mass does not change). Weight on Earth = 2.0 × 10 = 20 N.', u: true },
      { n: 10, f: 'Pressure at a surface: equation and units', b: 'p = F ÷ A, where F is the force normal to the surface (Pa, N, m²).', u: true },
      { n: 11, f: 'How does a hydraulic system multiply force?', b: 'The enclosed liquid passes pressure on equally, so F₁ / A₁ = F₂ / A₂. The larger piston gets a larger force but moves a smaller distance.', u: true },
      { n: 12, f: 'Moment of a force', b: 'M = F × d (N m), where d is the perpendicular distance from the pivot to the line of action of the force.', u: true },
      { n: 13, f: 'Principle of moments, with an example', b: 'For balance, total clockwise moment = total anticlockwise moment. 12 N at 0.50 m balances F at 0.20 m on the other side: F = 6.0 ÷ 0.20 = 30 N.', u: true },
      { n: 14, f: 'How does a lever act as a force multiplier?', b: 'effort × effort distance = load × load distance. A longer effort distance needs a smaller effort, but the effort moves further. No energy is gained.', u: true },
      { n: 15, f: 'Gear ratio, and what a small driver turning a large driven gear does', b: 'Gear ratio = teeth on driven gear ÷ teeth on driver gear. Ratio greater than 1: bigger moment, slower turning.', u: true },
    ]),

    // P3 Electricity
    ...sub('electricity-ocr-gcse', 'static-and-charge-ocr-gcse', 'P3.1', [
      { n: 1, f: 'Why does an object usually have no overall charge?', b: 'It contains equal amounts of positive charge (protons) and negative charge (electrons), so its net charge is zero.' },
      { n: 2, f: 'How do two insulators become charged by rubbing?', b: 'Electrons are transferred from one to the other. The one that gains electrons becomes negative; the one that loses them becomes positive, by an equal amount.' },
      { n: 3, f: 'Why does static charge build up only on insulators?', b: 'Charge cannot flow through an insulator, so it stays where it is. A conductor held in the hand loses its charge through the body to the ground.' },
      { n: 4, f: 'Why is a charged balloon attracted to a neutral wall?', b: 'Electrons in the wall’s surface shift slightly, so the nearest surface gets the opposite charge. The attraction to these nearer charges is stronger than the repulsion from the farther ones.' },
      { n: 5, f: 'Electric field', b: 'The space surrounding a charged object in which any other charge experiences a force.', u: true },
      { n: 6, f: 'Electric field lines: direction and spacing', b: 'They show the direction of the force on a small positive charge: away from positive, towards negative. Closer lines mean a stronger field. Lines never cross.', u: true },
      { n: 7, f: 'Two conditions needed for a current to flow', b: 'A source of potential difference and a closed (complete) circuit.' },
      { n: 8, f: 'Current, and the charge equation', b: 'Current is the rate of flow of charge.\nQ = I × t (C, A, s).' },
      { n: 9, f: '72 C of charge flows past a point in 4.0 minutes. What is the current?', b: 't = 240 s, so I = 72 ÷ 240 = 0.30 A' },
      { n: 10, f: 'Conventional current vs electron flow', b: 'Conventional current is drawn from positive to negative. In a metal, the electrons actually move from negative to positive.' },
    ]),
    ...sub('electricity-ocr-gcse', 'simple-circuits-ocr-gcse', 'P3.2', [
      { n: 1, f: 'Series vs parallel: current and potential difference', b: 'Series: same current everywhere; the pd is shared.\nParallel: the same pd across each branch; branch currents add up to the supply current.' },
      { n: 2, f: 'Potential difference', b: 'The energy transferred per unit charge between two points. 1 V = 1 J per coulomb. E = Q × V.' },
      { n: 3, f: 'How are an ammeter and a voltmeter connected?', b: 'Ammeter: in series (very low resistance).\nVoltmeter: in parallel across the component (very high resistance).' },
      { n: 4, f: 'Equation linking pd, current and resistance', b: 'V = I × R (V, A, Ω)' },
      { n: 5, f: 'I–V graph of a filament lamp, and why its resistance rises', b: 'An S-shaped curve. More current heats the filament; its ions vibrate more, so electrons collide with them more often and resistance rises.' },
      { n: 6, f: 'How do a diode, an NTC thermistor and an LDR behave?', b: 'Diode: current in one direction only (huge resistance in reverse).\nNTC thermistor: resistance falls as temperature rises.\nLDR: resistance falls as light intensity rises.' },
      { n: 7, f: 'Why does adding a resistor in parallel decrease the net resistance?', b: 'It gives the charge another path, so the total current from the supply increases for the same pd.' },
      { n: 8, f: 'A 6.0 V supply has 4.0 Ω and 12 Ω in parallel. Supply current and net resistance?', b: 'Currents 1.5 A and 0.50 A, so 2.0 A in total. Net R = 6.0 ÷ 2.0 = 3.0 Ω' },
      { n: 9, f: 'Two equations for electrical power', b: 'P = V × I\nP = I² × R' },
      { n: 10, f: 'Kilowatt-hour', b: 'A unit of energy: the energy transferred by a 1 kW device in 1 hour. 1 kW h = 3 600 000 J. E = P × t with P in kW and t in h.' },
      { n: 11, f: 'A 3.0 kW oven runs for 90 minutes. Energy in kW h?', b: 'E = 3.0 × 1.5 = 4.5 kW h' },
    ]),

    // P4 Magnetism and magnetic fields
    ...sub('magnetism-and-magnetic-fields-ocr-gcse', 'magnets-and-magnetic-fields-ocr-gcse', 'P4.1', [
      { n: 1, f: 'Magnetic field', b: 'The space around a magnet or a current in which magnetic materials and other magnets experience a force.' },
      { n: 2, f: 'Permanent vs induced magnet', b: 'Permanent: keeps its magnetism, always has two poles, can attract or repel.\nInduced: a magnetic material that is a magnet only while in another magnet’s field; always attracted.' },
      { n: 3, f: 'What is the only sure test that an object is a magnet?', b: 'Repulsion. Attraction could just mean it is a magnetic material (iron, steel, cobalt or nickel).' },
      { n: 4, f: 'Rules for magnetic field lines', b: 'Outside a magnet they go from north to south, never cross, and are closest (strongest field) at the poles.' },
      { n: 5, f: 'What does a dipping compass show about the Earth?', b: 'The needle is nearly horizontal near the equator and nearly vertical near the magnetic poles, like the field of a bar magnet, so the Earth’s core must be magnetic.' },
      { n: 6, f: 'Magnetic field around a straight current-carrying wire', b: 'Concentric circles at right angles to the wire. Right-hand grip rule: thumb along the conventional current, fingers curl along the field.' },
      { n: 7, f: 'Ways to make a solenoid’s field stronger', b: 'More current, more turns, turns closer together, and an iron core (which makes it an electromagnet).' },
    ]),
    ...sub('magnetism-and-magnetic-fields-ocr-gcse', 'uses-of-magnetism-ocr-gcse', 'P4.2', [
      { n: 1, f: 'Motor effect', b: 'A current-carrying wire in a magnet’s field experiences a force, at right angles to both the wire and the field. There is no force if the wire is parallel to the field.' },
      { n: 2, f: 'Fleming’s left-hand rule', b: 'First finger: Field (north to south). Second finger: Current (positive to negative). Thumb: force (Motion). Left hand only, all three at right angles.' },
      { n: 3, f: 'Force on a conductor in a magnetic field: equation', b: 'F = B × I × l (N, T, A, m), for a conductor at right angles to the field. B is the magnetic flux density.' },
      { n: 4, f: 'A wire with 0.15 m in a 0.40 T field carries 5.0 A at right angles. Force?', b: 'F = 0.40 × 5.0 × 0.15 = 0.30 N' },
      { n: 5, f: 'How does a d.c. motor keep turning one way?', b: 'Opposite forces on the two sides of the coil turn it. The current in the coil is reversed every half turn, so each side keeps being pushed the same way round.' },
      { n: 6, f: 'When is a potential difference induced in a conductor?', b: 'When the magnetic field around it changes (moving a magnet, moving the conductor across field lines, switching the field). A current flows only if the circuit is complete.', u: true },
      { n: 7, f: 'Direction of an induced current’s magnetic field', b: 'It opposes the change that caused it.', u: true },
      { n: 8, f: 'Alternator vs dynamo', b: 'Alternator: slip rings, output a.c.\nDynamo: split-ring commutator, output d.c. (pulsing, two pulses per rotation).', u: true },
      { n: 9, f: 'How does a transformer work?', b: 'Alternating current in the primary coil gives a changing magnetic field in the core. This changing field passes through the secondary coil and induces an alternating pd across it. A steady d.c. supply induces nothing.', u: true },
      { n: 10, f: 'A transformer has 500 primary and 125 secondary turns, Vp = 80 V. Find Vs.', b: 'Vs = Vp × Ns ÷ Np = 80 × 125 ÷ 500 = 20 V (step-down)', u: true },
      { n: 11, f: 'How does a microphone turn sound into a current?', b: 'Sound makes the diaphragm and attached coil vibrate in a permanent magnet’s field, so a pd is induced and an alternating current flows with the frequency of the sound.', u: true },
      { n: 12, f: 'How does a loudspeaker make sound?', b: 'A varying current in the coil, in a permanent magnet’s field, gives a force that keeps reversing, so the coil and cone vibrate and make pressure variations in the air.', u: true },
    ]),

    // P5 Waves in matter
    ...sub('waves-in-matter-ocr-gcse', 'wave-behaviour-ocr-gcse', 'P5.1', [
      { n: 1, f: 'Amplitude and wavelength', b: 'Amplitude: the maximum displacement from the rest position.\nWavelength: the length of one complete wave, for example crest to crest.' },
      { n: 2, f: 'Frequency and period', b: 'Frequency: waves passing a point per second (Hz).\nPeriod: time for one complete wave (s). T = 1 ÷ f.' },
      { n: 3, f: 'Wave speed equation', b: 'v = f × λ (m/s, Hz, m)' },
      { n: 4, f: 'A note of 850 Hz travels in air at 340 m/s. Its wavelength?', b: 'λ = 340 ÷ 850 = 0.40 m' },
      { n: 5, f: 'Transverse vs longitudinal waves', b: 'Transverse: vibrations at right angles to the direction of travel, with crests and troughs (ripples).\nLongitudinal: vibrations along it, with compressions and rarefactions (sound in air).' },
      { n: 6, f: 'Evidence that a wave, not the medium, travels', b: 'A floating cork bobs up and down in the same spot as ripples pass. A wave transfers energy, not matter.' },
      { n: 7, f: 'Measuring the speed of sound with an echo', b: 'Time the echo from a wall a distance d away. The sound travels there and back, so v = 2d ÷ t. Use an electronic timer for short times.' },
      { n: 8, f: 'Sound passes from air into water. What happens to its frequency, speed and wavelength?', b: 'Frequency stays the same (set by the source). Speed increases, so wavelength increases in proportion.', u: true },
      { n: 9, f: 'A 640 Hz note passes from air (340 m/s) into water (1480 m/s). Wavelength in each?', b: 'Air: 340 ÷ 640 = 0.53 m\nWater: 1480 ÷ 640 = 2.3 m', u: true },
      { n: 10, f: 'A sonar echo returns from the seabed after 0.68 s (speed in water 1500 m/s). Depth?', b: '1500 × 0.68 = 1020 m there and back, so the depth is 510 m.', u: true },
      { n: 11, f: 'Ultrasound, and how it makes an image', b: 'Sound above the upper limit of human hearing (above 20 kHz). Pulses are partly reflected at boundaries between tissues, and the echo timing builds an image.', u: true },
      { n: 12, f: 'How the ear converts sound into nerve signals', b: 'Eardrum vibrates → three small bones pass the vibration on → cochlea (fluid-filled) → hair cells produce electrical signals → auditory nerve to the brain.', u: true },
      { n: 13, f: 'Human hearing range, and why any hearing range is limited', b: 'Roughly 20 Hz to 20 kHz (the upper limit falls with age). Vibrating parts have mass and stiffness, so outside a range they cannot follow the pressure changes.', u: true },
    ]),
    ...sub('waves-in-matter-ocr-gcse', 'the-electromagnetic-spectrum-ocr-gcse', 'P5.2', [
      { n: 1, f: 'Properties shared by all electromagnetic waves', b: 'Transverse; travel through a vacuum; all travel at the same speed in a vacuum (3.0 × 10⁸ m/s); transfer energy from a source to an absorber.' },
      { n: 2, f: 'Order of the electromagnetic spectrum, long wavelength to short', b: 'Radio, microwave, infrared, visible, ultraviolet, X-rays, gamma rays. This is also low frequency to high frequency.' },
      { n: 3, f: 'A microwave signal has frequency 10 GHz. Wavelength? (c = 3.0 × 10⁸ m/s)', b: 'λ = 3.0 × 10⁸ ÷ 1.0 × 10¹⁰ = 0.030 m' },
      { n: 4, f: 'What part of the spectrum can the eye detect?', b: 'Only visible light, about 400 nm (violet) to 700 nm (red). Red has the longest wavelength and lowest frequency of visible light.' },
      { n: 5, f: 'One use each of radio, microwaves, infrared and ultraviolet', b: 'Radio: broadcasting radio and TV. Microwaves: satellite links, mobile phones, cooking. Infrared: remote controls, heaters, thermal imaging. Ultraviolet: security marking, sterilising water.' },
      { n: 6, f: 'One use each of X-rays and gamma rays', b: 'X-rays: imaging bones and teeth, baggage scanners.\nGamma rays: sterilising equipment and food, cancer treatment, medical tracers.' },
      { n: 7, f: 'Hazards of ultraviolet, X-rays and gamma rays', b: 'Ultraviolet: sunburn, skin ageing, skin cancer, eye damage.\nX-rays and gamma: ionising, so they damage cells and DNA and can cause cancer.' },
      { n: 8, f: 'How are radio waves transmitted and received?', b: 'Alternating current makes electrons in the transmitting aerial oscillate, giving radio waves of the same frequency. In a receiving aerial the waves make electrons oscillate, producing an alternating current of the same frequency.' },
      { n: 9, f: 'Three differences between materials that waves use to detect hidden structures', b: 'Different wave speeds, different amounts of absorption, and reflection at boundaries.', u: true },
      { n: 10, f: 'How does an X-ray image show a broken bone?', b: 'Bone absorbs X-rays more than soft tissue does, so the bone shows as a shadow on the detector.', u: true },
    ]),
    ...sub('waves-in-matter-ocr-gcse', 'wave-interaction-ocr-gcse', 'P5.3', [
      { n: 1, f: 'Four things that can happen to a wave at a boundary', b: 'Absorbed, transmitted, reflected or refracted. Which happens depends on the substance and the wavelength.' },
      { n: 2, f: 'What causes refraction?', b: 'A change in wave speed. One end of the wavefront enters the new substance first and changes speed while the other end is still at the old speed, so the wavefront turns.' },
      { n: 3, f: 'Which way does a ray bend entering a medium where it travels more slowly?', b: 'Towards the normal. Entering a faster medium it bends away from the normal; along the normal it does not bend.' },
      { n: 4, f: 'Light enters water. What happens to its frequency and wavelength?', b: 'The frequency stays the same. The speed falls, so the wavelength gets shorter in the same proportion.' },
      { n: 5, f: 'Light through a parallel-sided glass block', b: 'The emergent ray is parallel to the incident ray but shifted sideways.', u: true },
      { n: 6, f: 'Convex vs concave lens', b: 'Convex: thicker in the middle; converges parallel rays to the principal focus; can form a real image.\nConcave: thinner in the middle; diverges rays; image always virtual, upright and smaller.', u: true },
      { n: 7, f: 'Image formed by a convex lens when the object is beyond 2F, between F and 2F, and inside F', b: 'Beyond 2F: real, inverted, smaller.\nBetween F and 2F: real, inverted, larger.\nInside F: virtual, upright, larger.', u: true },
      { n: 8, f: 'Primary and secondary colours of light', b: 'Primary: red, green, blue.\nRed + green = yellow; green + blue = cyan; red + blue = magenta.', u: true },
      { n: 9, f: 'What do a coloured filter and an opaque coloured object do to light?', b: 'A filter transmits its own colour and absorbs the others. An opaque object reflects its own colour and absorbs the rest. Neither adds colour.', u: true },
      { n: 10, f: 'A green leaf is seen in red light. What colour does it look?', b: 'Black. It reflects only green, and there is no green in red light.', u: true },
      { n: 11, f: 'Specular reflection vs scattering', b: 'Specular: from a smooth surface; parallel rays stay parallel, so you see an image.\nScattering: from a rough surface; rays leave in many directions.', u: true },
    ]),

    // P6 Radioactivity
    ...sub('radioactivity-ocr-gcse', 'radioactive-emissions-ocr-gcse', 'P6.1', [
      { n: 1, f: 'Charge and relative mass of the proton, neutron and electron', b: 'Proton: +1, mass 1.\nNeutron: 0, mass 1.\nElectron: −1, negligible mass (about 1/1800).' },
      { n: 2, f: 'Atomic number and mass number', b: 'Atomic number Z: number of protons (fixes the element).\nMass number A: protons + neutrons. Neutrons = A − Z.' },
      { n: 3, f: 'Isotopes', b: 'Atoms of the same element (same number of protons) with different numbers of neutrons, so the same nuclear charge but different mass.' },
      { n: 4, f: 'Alpha, beta, gamma and neutron emission: what each is', b: 'Alpha: 2 protons + 2 neutrons (a helium nucleus).\nBeta: a fast electron from the nucleus, made when a neutron becomes a proton.\nGamma: EM radiation.\nNeutron: a single neutron.' },
      { n: 5, f: 'Effect of each emission on mass number A and atomic number Z', b: 'Alpha: A − 4, Z − 2.\nBeta: A unchanged, Z + 1.\nNeutron: A − 1, Z unchanged.\nGamma: no change.' },
      { n: 6, f: 'Complete the decay: uranium-238 (Z = 92) emits an alpha particle.', b: '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (238 = 234 + 4; 92 = 90 + 2)' },
      { n: 7, f: 'What happens to an electron when an atom absorbs or emits EM radiation, and what is ionisation?', b: 'Absorbs: the electron moves to a higher energy level. Emits: it falls to a lower level. Ionisation: the atom loses an outer electron and becomes a positive ion.' },
      { n: 8, f: 'Half-life, and why it can be used although decay is random', b: 'The time for the number of undecayed nuclei, or the activity, to halve. Each nucleus decays at an unpredictable moment, but a large sample behaves predictably.' },
      { n: 9, f: 'Activity 1600 Bq, half-life 5 minutes. Activity after 20 minutes, and the net decline as a ratio?', b: '4 half-lives, 2⁴ = 16: 1600 ÷ 16 = 100 Bq. Ratio 16 : 1.', u: true },
      { n: 10, f: 'Penetrating power and ionising ability of alpha, beta and gamma', b: 'Alpha: stopped by paper or a few cm of air; most ionising.\nBeta: stopped by a few mm of aluminium.\nGamma: reduced by thick lead or concrete; least ionising.' },
    ]),
    ...sub('radioactivity-ocr-gcse', 'uses-and-hazards-ocr-gcse', 'P6.2', [
      { n: 1, f: 'Irradiation vs contamination', b: 'Irradiation: exposure to radiation from outside; the object does not become radioactive.\nContamination: radioactive atoms on or inside an object or person.' },
      { n: 2, f: 'Why is an alpha source more dangerous inside the body than outside it?', b: 'Outside, alpha is stopped by skin and a few cm of air. Inside, all its energy goes into nearby living cells, because it is strongly ionising.' },
      { n: 3, f: 'Precautions against irradiation and against contamination', b: 'Irradiation: shielding, distance, short exposure time, tongs.\nContamination: gloves, protective clothing, no eating or drinking, cleaning spills.' },
      { n: 4, f: 'Short half-life vs long half-life: activity and hazard', b: 'Short: higher activity from the same number of nuclei, but the hazard does not last long.\nLong: lower activity, but the hazard lasts a very long time.', u: true },
      { n: 5, f: 'A spill reads 960 Bq; safe level 120 Bq; half-life 2 hours. How long to wait?', b: '960 ÷ 120 = 8 = 2³, so 3 half-lives: 3 × 2 = 6 hours.', u: true },
      { n: 6, f: 'Choice of radioactive tracer for medical imaging', b: 'A gamma emitter, so it passes out of the body to the detector, with a half-life of hours. Alpha would not leave the body and would ionise cells inside.', u: true },
      { n: 7, f: 'Nuclear fission of uranium-235', b: 'The nucleus usually absorbs a neutron first, becomes unstable and splits into two smaller nuclei, releasing two or three neutrons and gamma radiation. The products have kinetic energy.', u: true },
      { n: 8, f: 'Chain reaction', b: 'Neutrons released by one fission cause further fissions. An average of exactly one new fission per fission gives a steady energy release.', u: true },
      { n: 9, f: 'Nuclear fusion, and why it needs extreme conditions', b: 'Two light nuclei join to form a heavier nucleus; some mass may be converted into energy carried by radiation. Very high temperature and pressure are needed to overcome the repulsion between positive nuclei.', u: true },
    ]),

    // P7 Energy
    ...sub('energy-ocr-gcse', 'work-done-ocr-gcse', 'P7.1', [
      { n: 1, f: 'Conservation of energy', b: 'Energy is never created or destroyed; it is transferred from store to store. In a closed system there is no net change to the total energy.' },
      { n: 2, f: 'Three ways the energy of a system can change', b: 'Heating, work done by forces, and work done by an electric current.' },
      { n: 3, f: 'Energy stores: a ball thrown upwards', b: 'The kinetic store decreases and the gravitational potential store increases (plus a little thermal store if there is air resistance).' },
      { n: 4, f: 'Kinetic, gravitational potential and elastic energy equations', b: 'Kinetic: E = ½mv²\nGravitational potential: E = mgh\nElastic: E = ½kx²' },
      { n: 5, f: 'A cyclist and bike (80 kg) move at 9.0 m/s. Kinetic energy?', b: 'E = ½ × 80 × 9.0² = 3240 J' },
      { n: 6, f: 'A 60 W lamp is on for 2.0 hours. Energy in kW h and in J?', b: '0.060 kW × 2.0 h = 0.12 kW h\n60 W × 7200 s = 432 000 J' },
      { n: 7, f: '0.25 kg of water is warmed from 20 °C to 90 °C (c = 4200 J/kg °C). Energy?', b: 'ΔE = 0.25 × 4200 × 70 = 73 500 J' },
    ]),
    ...sub('energy-ocr-gcse', 'power-and-efficiency-ocr-gcse', 'P7.2', [
      { n: 1, f: 'Dissipation', b: 'Energy spreads out and ends up stored in less useful ways, mostly in the thermal store of the surroundings. It is not destroyed.' },
      { n: 2, f: 'Power rating vs efficiency', b: 'Power rating: energy transferred per second (a higher rating means stores change faster).\nEfficiency: the fraction of the input that is useful. A higher rating does not mean more efficient.' },
      { n: 3, f: 'Efficiency equation', b: 'efficiency = useful output energy transfer ÷ input energy transfer. × 100 for a percentage. Real devices are always below 100%.' },
      { n: 4, f: 'A fan takes in 640 J and wastes 160 J. Efficiency?', b: 'Useful = 480 J, so efficiency = 480 ÷ 640 = 0.75 (75%)' },
      { n: 5, f: 'How does lubrication increase efficiency?', b: 'A layer of liquid separates the surfaces, so friction falls and less energy is transferred to thermal stores.' },
      { n: 6, f: 'How does loft insulation or double glazing reduce energy loss?', b: 'Trapped air (or gas) is a poor conductor and cannot circulate, so conduction and convection are reduced. Insulation slows energy transfer; it never stops it.' },
      { n: 7, f: 'Two features of a building’s walls that reduce its rate of cooling', b: 'Greater thickness and lower thermal conductivity.' },
    ]),

    // P8 Global challenges
    ...sub('global-challenges-ocr-gcse', 'physics-on-the-move-ocr-gcse', 'P8.1', [
      { n: 1, f: 'Typical speeds: walking, cycling, car in town, car on a motorway, sound in air', b: 'Walking ~1.5 m/s, cycling ~6 m/s, car in town ~13 m/s, motorway ~30 m/s, sound in air ~340 m/s.' },
      { n: 2, f: 'Typical accelerations: car pulling away, emergency braking, free fall', b: 'Car pulling away: 2 to 3 m/s². Emergency braking: 6 to 8 m/s². Free fall: about 10 m/s².' },
      { n: 3, f: 'How do you measure reaction time with a ruler drop?', b: 'Drop the ruler without warning between the person’s thumb and finger, read the distance fallen when caught, convert it to a time, repeat and take the mean. A typical value is about 0.2 s.' },
      { n: 4, f: 'Thinking distance and braking distance: what affects each?', b: 'Thinking (speed × reaction time): speed, tiredness, alcohol, drugs, distraction.\nBraking: speed, wet or icy roads, worn tyres or brakes, greater mass.' },
      { n: 5, f: 'A driver at 90 km/h has a reaction time of 0.60 s. Thinking distance?', b: '90 ÷ 3.6 = 25 m/s, so 25 × 0.60 = 15 m' },
      { n: 6, f: 'Why is a large deceleration dangerous?', b: 'F = ma, so a large deceleration means a large force on the body, which can cause broken bones and internal injuries.' },
      { n: 7, f: 'How do crumple zones, seat belts and airbags reduce injury?', b: 'They make the stop take a longer time (or distance), so the deceleration and the force on the person are smaller. Airbags also spread the force over a larger area.' },
      { n: 8, f: 'Estimate the stopping distance at 25 m/s (reaction time 0.7 s, deceleration 5.0 m/s²).', b: 'Thinking: 25 × 0.7 = 17.5 m\nBraking: 25² ÷ (2 × 5.0) = 62.5 m\nTotal ≈ 80 m', u: true },
      { n: 9, f: 'A 1000 kg car at 20 m/s stops in 40 m. Estimate the braking force.', b: 'Kinetic energy = ½ × 1000 × 20² = 200 000 J. Force = 200 000 ÷ 40 = 5000 N.', u: true },
    ]),
    ...sub('global-challenges-ocr-gcse', 'powering-earth-ocr-gcse', 'P8.2', [
      { n: 1, f: 'Renewable vs non-renewable energy resource', b: 'Renewable: replaced as fast as it is used (wind, tides, the Sun, hydroelectricity, biofuel).\nNon-renewable: used faster than it forms, so it will run out (coal, oil, gas, nuclear fuel).' },
      { n: 2, f: 'How do fossil-fuel and nuclear power stations generate electricity?', b: 'The fuel’s energy heats water to make steam, the steam turns a turbine, and the turbine turns a generator.' },
      { n: 3, f: 'Compare gas and wind for generating electricity', b: 'Gas: reliable on demand, but burning it releases carbon dioxide and it needs a continuing fuel supply.\nWind: no fuel and no carbon dioxide, but output depends on the weather.' },
      { n: 4, f: 'National grid', b: 'The network of cables and transformers linking power stations to users.', src: GRID },
      { n: 5, f: 'Step-up transformer', b: 'Raises the potential difference, at the power station end of the grid.', src: GRID },
      { n: 6, f: 'Step-down transformer', b: 'Lowers the potential difference near where the power is used, so homes get a safe, usable supply.', src: GRID },
      { n: 7, f: 'Why is high-voltage transmission efficient?', b: 'For a fixed power, P = VI, so a high pd means a low current. Wasted power is I²R, so a lower current means much less heating in the cables.' },
      { n: 8, f: 'Does a transformer increase power?', b: 'No. A transformer changes the potential difference. It does not increase power.', src: GRID },
      { n: 9, f: 'How do the turns on a step-up transformer compare?', b: 'More turns on the secondary coil than the primary (Vp / Vs = Np / Ns), so the secondary pd is higher and, for the same power, the current is lower.', u: true },
      { n: 10, f: 'UK domestic electricity supply', b: 'Alternating current, 50 Hz, about 230 V. One cycle lasts 1 ÷ 50 = 0.02 s.' },
      { n: 11, f: 'Live, neutral and earth wires: colours and potential differences', b: 'Live: brown, about 230 V.\nNeutral: blue, about 0 V, completes the circuit.\nEarth: green and yellow, 0 V, safety wire joined to the metal case.' },
      { n: 12, f: 'What does the earth wire do if the live wire touches a metal case?', b: 'A large current flows through the earth wire instead of through the user. Without an earth wire the case would be at about 230 V and could give a shock.' },
    ]),
    ...sub('global-challenges-ocr-gcse', 'beyond-earth-ocr-gcse', 'P8.3', [
      { n: 1, f: 'How does the radiation from a body change as it gets hotter?', b: 'The intensity (energy emitted per second per square metre) increases, and the strongest emission moves to a shorter wavelength.', u: true },
      { n: 2, f: 'Order of the planets from the Sun', b: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.', u: true },
      { n: 3, f: 'Geostationary vs polar orbit', b: 'Geostationary: about 36 000 km up, period 24 hours, above the equator, appears fixed (communications).\nPolar: low, period around 1.5 hours, passes over both poles (mapping, monitoring, weather).', u: true },
      { n: 4, f: 'In a circular orbit, which stay constant: speed, velocity, size of the resultant force?', b: 'Speed and the size of the resultant force stay constant. The velocity changes because the direction changes; gravity acts towards the centre.', u: true },
      { n: 5, f: 'How are orbit radius and speed linked for a stable orbit?', b: 'A lower orbit needs a faster speed (and has a shorter period). If the speed changes, the radius must change.', u: true },
      { n: 6, f: 'What determines whether a body warms, cools or stays at a constant temperature?', b: 'Absorbed more than emitted: it warms. Emitted more than absorbed: it cools. Equal: constant temperature (equilibrium).', u: true },
      { n: 7, f: 'Red-shift', b: 'Light from a receding source is observed at a longer wavelength and lower frequency than it was emitted. A bigger shift means a faster recession.', u: true },
      { n: 8, f: 'How does red-shift data support an expanding universe?', b: 'Nearly every galaxy is red-shifted, and more distant galaxies have bigger red-shifts, so they move away faster: space itself is expanding.', u: true },
      { n: 9, f: 'How does the CMBR support the Big Bang model?', b: 'The early universe was very hot and dense and full of radiation. Expansion stretched its wavelengths, so it is now seen from all directions as microwaves.', u: true },
      { n: 10, f: 'How does a star form and become stable?', b: 'Gravity pulls a cloud of dust and gas together; it heats up until hydrogen nuclei fuse to helium, releasing energy. Inward gravitational collapse is then balanced by outward expansion from the fusion energy.', u: true },
      { n: 11, f: 'Life cycle of a star much more massive than the Sun', b: 'Cloud → protostar → stable star → red supergiant → supernova → neutron star or black hole.', u: true },
    ]),
  ],
};
