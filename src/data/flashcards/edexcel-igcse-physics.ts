/**
 * D-444 -- flashcards for Pearson Edexcel International GCSE Physics 4PH1 (Issue 4).
 *
 * One block per sub-topic, in specification order (1a, 1b, ... 8d). Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * 4PH1 is untiered, so no card is marked upper tier. Content the specification
 * marks P (assessed on Paper 2 only, as Marlbridge's 4PH1 pages flag it) says
 * "(Paper 2 only)" at the end of the back.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 4PH1); origin 'revision-notes'.
 *
 * Plain text only (see types.ts). Unicode for symbols.
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

const ENERGY = 'edexcel-igcse-physics-energy-revision-notes';
const RADIO = 'edexcel-igcse-physics-radioactivity-revision-notes';

const T1 = 'forces-and-motion';
const T2 = 'electricity';
const T3 = 'waves';
const T4 = 'energy-resources-and-energy-transfers';
const T5 = 'solids-liquids-and-gases-edexcel';
const T6 = 'magnetism-and-electromagnetism';
const T7 = 'radioactivity-and-particles';
const T8 = 'astrophysics';

export const DECK_EDEXCEL_IGCSE_PHYSICS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'igcse',
  subjectSlug: 'physics',
  syllabusCode: '4PH1',
  syllabusSeries: 'Issue 4',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hassan', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Forces and motion
    ...sub(T1, 'units-forces-and-motion', '1a', [
      { n: 1, f: 'SI units of speed, acceleration, force and gravitational field strength', b: 'Speed: metre/second (m/s).\nAcceleration: metre/second² (m/s²).\nForce: newton (N).\nGravitational field strength: newton/kilogram (N/kg).' },
      { n: 2, f: 'Unit of the moment of a force', b: 'Newton metre (N m). (Paper 2 only)' },
      { n: 3, f: 'Unit of momentum', b: 'Kilogram metre/second (kg m/s). (Paper 2 only)' },
    ]),
    ...sub(T1, 'movement-and-position', '1b', [
      { n: 1, f: 'Average speed', b: 'Average speed = distance moved ÷ time taken.' },
      { n: 2, f: 'What does a distance–time graph show?', b: 'Gradient = speed. A horizontal line means stationary; a curve means the speed is changing.' },
      { n: 3, f: 'Acceleration equation', b: 'Acceleration = change in velocity ÷ time taken: a = (v − u)/t, in m/s².' },
      { n: 4, f: 'What do the gradient and the area of a velocity–time graph show?', b: 'Gradient = acceleration.\nArea under the graph = distance travelled. (Do not mix them up.)' },
      { n: 5, f: 'A car starts from rest and accelerates at 2.0 m/s² over 25 m. Final speed?', b: 'v² = u² + 2as = 0 + 2 × 2.0 × 25 = 100, so v = 10 m/s.' },
    ]),
    ...sub(T1, 'forces-movement-shape-and-momentum', '1c', [
      { n: 1, f: 'Scalars and vectors', b: 'Scalars have magnitude only (distance, speed, mass). Vectors have magnitude and direction (displacement, velocity, force, momentum).' },
      { n: 2, f: 'Resultant force of forces along a line', b: 'Add them, taking direction into account. 4000 N forward and 1500 N backward gives 2500 N forward.' },
      { n: 3, f: 'Force, mass and acceleration; weight', b: 'F = m × a.\nWeight = mass × gravitational field strength, W = m × g.' },
      { n: 4, f: 'Newton\'s first law', b: 'An object stays at rest or moves at constant velocity unless a resultant force acts on it.' },
      { n: 5, f: 'Stopping distance, and what increases each part', b: 'Stopping distance = thinking distance + braking distance.\nThinking: speed, tiredness, alcohol, drugs, distraction.\nBraking: speed, poor brakes, worn tyres, wet or icy roads.' },
      { n: 6, f: 'Why does braking distance rise so sharply with speed?', b: 'Kinetic energy is proportional to v², so doubling the speed quadruples the braking distance.' },
      { n: 7, f: 'Explain terminal velocity in four steps', b: 'Weight makes the object accelerate. As speed rises, air resistance increases. When air resistance equals weight, the resultant force is zero. Acceleration is zero, so it falls at constant velocity.' },
      { n: 8, f: 'A skydiver at terminal velocity opens her parachute. What happens?', b: 'Air resistance suddenly increases above her weight, so the resultant force is upward and she decelerates. Air resistance falls until it equals weight again: a new, lower terminal velocity.' },
      { n: 9, f: 'Hooke\'s law and elastic behaviour', b: 'F = kx: extension is proportional to force up to the limit of proportionality. Elastic behaviour: the object returns to its original shape when the force is removed. Beyond the elastic limit the deformation is permanent.' },
      { n: 10, f: 'Momentum', b: 'Momentum = mass × velocity, p = mv. It is a vector: give opposite directions opposite signs. (Paper 2 only)' },
      { n: 11, f: 'A 1200 kg car slows from 25 m/s to 15 m/s in 5.0 s. Average force?', b: 'Force = change in momentum ÷ time, F = (mv − mu)/t = 1200 × 10 ÷ 5.0 = 2400 N. (Paper 2 only)' },
      { n: 12, f: 'How do crumple zones, airbags and seatbelts reduce injury?', b: 'They increase the time over which the momentum changes. Force is the rate of change of momentum, so the force on the passenger is smaller. (Paper 2 only)' },
      { n: 13, f: 'Conservation of momentum', b: 'In a closed system, the total momentum before a collision or explosion equals the total momentum after. (Paper 2 only)' },
      { n: 14, f: 'Newton\'s third law', b: 'For every force there is an equal and opposite force, acting on a different body. (Paper 2 only)' },
      { n: 15, f: 'Moments: a 2.5 N weight is 40 cm from the pivot. What weight 20 cm on the other side balances it?', b: 'Moment = force × perpendicular distance from the pivot. In equilibrium, clockwise = anticlockwise: 2.5 × 40 = 100 N cm, so W = 100 ÷ 20 = 5.0 N. (Paper 2 only)' },
    ]),

    // 2 Electricity
    ...sub(T2, 'units-electricity', '2a', [
      { n: 1, f: 'Units of charge and current', b: 'Charge: coulomb (C). Current: ampere (A). 1 A = 1 C/s.' },
      { n: 2, f: 'Units of voltage and resistance', b: 'Voltage: volt (V); 1 V = 1 J/C. Resistance: ohm (Ω).' },
      { n: 3, f: 'Units of energy and power', b: 'Energy: joule (J). Power: watt (W); 1 W = 1 J/s. Time in seconds (s).' },
    ]),
    ...sub(T2, 'mains-electricity', '2b', [
      { n: 1, f: 'a.c. vs d.c.', b: 'Mains is alternating current (a.c.), reversing direction periodically. Cells and batteries supply direct current (d.c.), flowing one way only.' },
      { n: 2, f: 'How do a fuse and a circuit breaker protect a circuit?', b: 'Both cut off the current if it becomes too large. A fuse melts; a circuit breaker switches off and can be reset.' },
      { n: 3, f: 'Earthing vs double insulation', b: 'Earthing: a metal case is connected to earth, so a fault sends a large current to earth and the fuse blows.\nDouble insulation: the case is non-conducting, so it cannot become live.' },
      { n: 4, f: 'Why does a current in a resistor heat it, and where is this useful?', b: 'The moving electrons collide with the ions of the resistor, transferring energy so its temperature rises. Used in heaters, kettles, toasters and irons.' },
      { n: 5, f: 'A kettle draws 10 A from 230 V. Power, and the best fuse from 3 A, 5 A and 13 A?', b: 'P = IV = 10 × 230 = 2300 W. The fuse must be just above the normal current: 13 A.' },
      { n: 6, f: 'The same kettle (10 A, 230 V) runs for 3 minutes. Energy transferred?', b: 'E = IVt = 10 × 230 × 180 = 414 000 J (414 kJ).' },
    ]),
    ...sub(T2, 'energy-and-voltage-in-circuits', '2c', [
      { n: 1, f: 'Series circuit rules', b: 'The current is the same everywhere; the voltage is shared between the components. Resistances add.' },
      { n: 2, f: 'Parallel circuit rules, and why house lighting is parallel', b: 'The voltage is the same across every branch; the current divides between branches. Each lamp gets full mains voltage and one failing does not switch off the others.' },
      { n: 3, f: 'A 6.0 V battery drives 0.50 A through a resistor. Resistance?', b: 'V = IR, so R = 6.0 ÷ 0.50 = 12 Ω.' },
      { n: 4, f: 'Current–voltage graphs: resistor, filament lamp, diode', b: 'Resistor (constant temperature): straight line through the origin.\nFilament lamp: curve, as resistance rises with temperature.\nDiode: conducts one way only; almost no current in reverse.' },
      { n: 5, f: 'LDR and thermistor', b: 'LDR: resistance falls as light intensity increases.\nThermistor: resistance falls as temperature increases.' },
      { n: 6, f: 'Current and charge. 15 C passes a point in 5.0 s: current?', b: 'Current is the rate of flow of charge: Q = It, so I = 15 ÷ 5.0 = 3.0 A.' },
      { n: 7, f: 'What is the current in a metal, and what happens at a junction?', b: 'A flow of electrons. Current is conserved at a junction: current in = current out.' },
      { n: 8, f: 'Voltage in terms of energy and charge', b: 'Voltage is the energy transferred per unit charge: E = QV. 1 V = 1 J/C.' },
      { n: 9, f: '4 Ω and 8 Ω resistors in series across 6 V. Current, and voltage across the 8 Ω?', b: 'Total R = 12 Ω, so I = 6 ÷ 12 = 0.5 A.\nV = IR = 0.5 × 8 = 4 V (and 2 V across the 4 Ω).' },
    ]),
    ...sub(T2, 'electric-charge', '2d', [
      { n: 1, f: 'Conductors and insulators', b: 'Conductors (metals) allow charge to flow; insulators (plastics) do not. (Paper 2 only)' },
      { n: 2, f: 'How does rubbing two insulators charge them?', b: 'Electrons are transferred. The surface that loses electrons becomes positive; the one that gains electrons becomes negative. Charge is not created. (Paper 2 only)' },
      { n: 3, f: 'Forces between charges', b: 'Like charges repel; unlike charges attract. (Paper 2 only)' },
      { n: 4, f: 'Uses and dangers of electrostatic charge', b: 'Uses: photocopiers, inkjet printers.\nDanger: sparks while fuelling aircraft or tankers, so fuelling equipment is designed to dissipate static. (Paper 2 only)' },
    ]),

    // 3 Waves
    ...sub(T3, 'units-waves', '3a', [
      { n: 1, f: 'Unit of frequency', b: 'Hertz (Hz): one wave (oscillation) per second.' },
      { n: 2, f: 'Units of wavelength, wave speed and period', b: 'Wavelength: metre (m). Wave speed: metre/second (m/s). Period: second (s).' },
      { n: 3, f: 'Unit of the angles of incidence, reflection and refraction', b: 'Degrees (°), measured from the normal.' },
    ]),
    ...sub(T3, 'properties-of-waves', '3b', [
      { n: 1, f: 'Transverse vs longitudinal waves', b: 'Transverse: oscillations perpendicular to the direction of travel (light, water waves).\nLongitudinal: oscillations parallel to the direction of travel (sound).' },
      { n: 2, f: 'What do waves transfer?', b: 'Energy and information, without transferring matter.' },
      { n: 3, f: 'Amplitude and wavefront', b: 'Amplitude: the maximum displacement from the equilibrium position.\nWavefront: a line joining points on a wave that are in phase.' },
      { n: 4, f: 'Wavelength, frequency and period', b: 'Wavelength: distance between successive identical points.\nFrequency: number of waves per second.\nPeriod: time for one full oscillation.' },
      { n: 5, f: 'A 500 Hz sound wave travels at 340 m/s. Wavelength?', b: 'v = fλ, so λ = v/f = 340 ÷ 500 = 0.68 m.' },
      { n: 6, f: 'A wave has a period of 0.02 s. Frequency?', b: 'f = 1/T = 1 ÷ 0.02 = 50 Hz.' },
      { n: 7, f: 'The Doppler effect', b: 'Source moving towards you: wavefronts bunch up, wavelength shortens, observed frequency rises. Moving away: wavelength lengthens, frequency falls. A siren sounds higher approaching and lower receding.' },
    ]),
    ...sub(T3, 'the-electromagnetic-spectrum', '3c', [
      { n: 1, f: 'Electromagnetic spectrum in order of decreasing wavelength', b: 'Radio, microwave, infrared, visible, ultraviolet, x-ray, gamma. Frequency increases along this order.' },
      { n: 2, f: 'What do all electromagnetic waves have in common in free space?', b: 'They all travel at the same speed (3.0 × 10⁸ m/s). Only frequency and wavelength differ.' },
      { n: 3, f: 'Colours of visible light in order of increasing frequency', b: 'Red, orange, yellow, green, blue, indigo, violet.' },
      { n: 4, f: 'Uses of radio waves, microwaves and infrared', b: 'Radio: broadcasting.\nMicrowaves: cooking, communications.\nInfrared: thermal imaging, remote controls.' },
      { n: 5, f: 'Uses of visible light, ultraviolet, x-rays and gamma rays', b: 'Visible: photography, optical fibres.\nUltraviolet: fluorescent lamps, sterilising.\nX-rays: medical imaging.\nGamma: sterilisation, medical treatment.' },
      { n: 6, f: 'Harmful effects of excessive exposure to electromagnetic waves', b: 'Microwaves: internal heating of body tissue.\nInfrared: skin burns.\nUltraviolet: damage to surface cells, blindness.\nGamma: cancer, mutation.' },
    ]),
    ...sub(T3, 'light-and-sound', '3d', [
      { n: 1, f: 'Law of reflection', b: 'Angle of incidence = angle of reflection, both measured from the normal.' },
      { n: 2, f: 'Light enters glass from air at an angle. What happens?', b: 'It refracts: it slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence.' },
      { n: 3, f: 'A ray in air meets glass at i = 40° and refracts to r = 25°. Refractive index?', b: 'n = sin i / sin r = sin 40° ÷ sin 25° = 0.643 ÷ 0.423 = 1.52.' },
      { n: 4, f: 'Critical angle of a material with n = 1.5', b: 'sin c = 1/n = 1 ÷ 1.5 = 0.667, so c = 41.8°.' },
      { n: 5, f: 'Total internal reflection: when it happens, and two uses', b: 'Light travels from a denser to a less dense medium and meets the boundary above the critical angle. Uses: optical fibres; prisms in periscopes and binoculars.' },
      { n: 6, f: 'Sound waves: type, and two wave behaviours', b: 'Sound waves are longitudinal. They can be reflected and refracted.' },
      { n: 7, f: 'Range of human hearing', b: '20 Hz to 20 000 Hz. (Paper 2 only)' },
      { n: 8, f: 'What sets the pitch and the loudness of a sound?', b: 'Pitch: frequency (higher frequency, higher pitch).\nLoudness: amplitude (greater amplitude, louder). (Paper 2 only)' },
      { n: 9, f: 'How can a sound wave be displayed and its frequency investigated?', b: 'A microphone connected to an oscilloscope displays the waveform; the frequency can be found from the trace. (Paper 2 only)' },
    ]),

    // 4 Energy resources and energy transfers
    ...sub(T4, 'units-energy-resources', '4a', [
      { n: 1, f: 'Unit of energy and work done', b: 'Joule (J).' },
      { n: 2, f: 'Unit of power', b: 'Watt (W). 1 W = 1 J/s.' },
      { n: 3, f: 'Units in kinetic energy = ½ × mass × speed²', b: 'Mass in kilograms (kg), speed in metre/second (m/s), energy in joules (J).' },
    ]),
    ...sub(T4, 'energy-transfers', '4b', [
      { n: 1, f: 'Energy stores', b: 'Kinetic, gravitational potential, elastic potential, chemical, thermal, nuclear, magnetic, electrostatic.' },
      { n: 2, f: 'Energy transfer pathways', b: 'Mechanically, electrically, by heating, by radiation. "Heat" and "light" are pathways, not stores.' },
      { n: 3, f: 'Conservation and dissipation of energy', b: 'Energy cannot be created or destroyed, only transferred between stores. Dissipated energy is not destroyed: it goes to the thermal store of the surroundings, spread out and no longer useful.' },
      { n: 4, f: 'Efficiency. A motor gets 500 J of electrical energy and gives 350 J of kinetic energy.', b: 'Efficiency = (useful energy output ÷ total energy output) × 100% = 350 ÷ 500 × 100 = 70%.' },
      { n: 5, f: 'What does a Sankey diagram show?', b: 'Energy transfers, with each arrow\'s width proportional to the amount of energy, so the split between useful and wasted energy is visible.' },
      { n: 6, f: 'Conduction', b: 'Vibrating particles pass energy to neighbours; in metals, free electrons carry it far faster. Mainly in solids.', src: ENERGY },
      { n: 7, f: 'Convection', b: 'Heated fluid expands, becomes less dense and rises; cooler fluid sinks to replace it. Fluids only.', src: ENERGY },
      { n: 8, f: 'Radiation', b: 'Infrared electromagnetic waves; needs no medium. Can happen anywhere, including a vacuum.', src: ENERGY },
      { n: 9, f: 'Which surfaces are the best emitters, absorbers and reflectors of radiation?', b: 'Matt black: best emitter and best absorber.\nShiny silver: best reflector and poorest emitter. A good absorber is also a good emitter.' },
      { n: 10, f: 'How do loft insulation, cavity walls and shiny foil behind radiators reduce energy transfer?', b: 'Insulation traps air (a poor conductor) and stops convection currents. Shiny foil reflects radiation back into the room.' },
    ]),
    ...sub(T4, 'work-and-power', '4c', [
      { n: 1, f: 'Work done', b: 'Work done = force × distance moved in the direction of the force. Work done = energy transferred.' },
      { n: 2, f: 'Gravitational potential energy and kinetic energy equations', b: 'GPE = mass × g × height (mgh).\nKE = ½ × mass × speed² (½mv²).' },
      { n: 3, f: 'A crane lifts 200 kg through 15 m in 10 s (g = 9.8 N/kg). Work done and power?', b: 'W = mgh = 200 × 9.8 × 15 = 29 400 J.\nP = W/t = 29 400 ÷ 10 = 2940 W.' },
      { n: 4, f: 'Power', b: 'The rate of transfer of energy, or the rate of doing work: power = work done ÷ time taken.' },
      { n: 5, f: 'An object falls with no air resistance. How are its GPE and KE linked?', b: 'By conservation of energy, the GPE lost equals the KE gained (the work done by gravity).' },
      { n: 6, f: 'A car doubles its speed. What happens to its kinetic energy?', b: 'It quadruples, because KE depends on v².' },
    ]),
    ...sub(T4, 'energy-resources-and-electricity-generation', '4d', [
      { n: 1, f: 'Renewable and non-renewable energy resources', b: 'Renewable: solar, wind, hydroelectric, tidal, wave, geothermal, biomass.\nNon-renewable: coal, oil, gas, nuclear. (Paper 2 only)' },
      { n: 2, f: 'Energy transfers in a fossil-fuel power station', b: 'Chemical energy in the fuel → thermal energy (burning heats water to steam) → kinetic energy of the turbine → electrical energy from the generator. (Paper 2 only)' },
      { n: 3, f: 'Wind and hydroelectric generation', b: 'Moving air or falling water turns a turbine directly, which drives a generator: kinetic energy → electrical energy. (Paper 2 only)' },
      { n: 4, f: 'Solar cells vs solar heating systems', b: 'Solar cells transfer light directly to electrical energy. Solar heating systems use the Sun\'s radiation to heat water. (Paper 2 only)' },
      { n: 5, f: 'Nuclear power: one advantage and two disadvantages', b: 'High output with no CO₂ during generation (non-renewable but not a fossil fuel). It produces long-lived radioactive waste and has high decommissioning costs. (Paper 2 only)' },
      { n: 6, f: 'Factors for evaluating an energy resource', b: 'Reliability, environmental impact, cost (setup and running) and power output. E.g. wind is clean but unreliable; gas is reliable but emits CO₂. (Paper 2 only)' },
    ]),

    // 5 Solids, liquids and gases
    ...sub(T5, 'units-solids-liquids-and-gases', '5a', [
      { n: 1, f: 'Units of density and of pressure', b: 'Density: kilogram/metre³ (kg/m³).\nPressure: pascal (Pa); 1 Pa = 1 N/m².' },
      { n: 2, f: 'Units of temperature', b: 'Degree Celsius (°C) and kelvin (K). A change of 1 K equals a change of 1 °C.' },
      { n: 3, f: 'Unit of specific heat capacity', b: 'Joules per kilogram degree Celsius (J/kg °C). (Paper 2 only)' },
    ]),
    ...sub(T5, 'density-and-pressure', '5b', [
      { n: 1, f: 'Density equation', b: 'Density = mass ÷ volume, ρ = m/V.' },
      { n: 2, f: 'How do you find the density of an irregular solid?', b: 'Measure its mass on a balance. Find its volume by displacement: the rise in water level in a measuring cylinder. ρ = m/V.' },
      { n: 3, f: 'Pressure equation', b: 'Pressure = force ÷ area, p = F/A.' },
      { n: 4, f: 'In which direction does pressure act in a liquid or gas at rest?', b: 'Equally in all directions at a given point.' },
      { n: 5, f: 'Pressure difference between the surface and 5.0 m deep in water (ρ = 1000 kg/m³, g = 9.8 N/kg)', b: 'p = h × ρ × g = 5.0 × 1000 × 9.8 = 49 000 Pa.' },
      { n: 6, f: 'Why is a dam built thicker at the base?', b: 'Pressure in a liquid depends only on depth and density (not the container\'s shape or the volume), so it is greatest at the bottom.' },
    ]),
    ...sub(T5, 'change-of-state', '5c', [
      { n: 1, f: 'Particle arrangement and motion in solids, liquids and gases', b: 'Solid: regular, close-packed, vibrate about fixed positions.\nLiquid: close, irregular, slide past one another.\nGas: far apart, random, fast in all directions. (Paper 2 only)' },
      { n: 2, f: 'What can heating a substance do to its stored energy?', b: 'Raise its temperature, or change its state. (Paper 2 only)' },
      { n: 3, f: 'Why does the temperature stay constant during a change of state?', b: 'The energy supplied breaks the forces between particles instead of increasing their kinetic energy. On a temperature–time graph this is a flat section. (Paper 2 only)' },
      { n: 4, f: 'Specific heat capacity', b: 'The energy needed to raise the temperature of 1 kg of a substance by 1 °C. ΔQ = m × c × ΔT. (Paper 2 only)' },
      { n: 5, f: 'Energy to heat 2.0 kg of water (c = 4200 J/kg °C) from 20 °C to 100 °C?', b: 'ΔQ = mcΔT = 2.0 × 4200 × 80 = 672 000 J. (Paper 2 only)' },
      { n: 6, f: 'Do particles expand when a solid is heated?', b: 'No. They vibrate more vigorously and take up more space; the particles themselves do not expand. (Paper 2 only)' },
    ]),
    ...sub(T5, 'ideal-gas-molecules', '5d', [
      { n: 1, f: 'What causes gas pressure?', b: 'Molecules in random motion collide with the container walls and exert a force on them.' },
      { n: 2, f: 'Absolute zero', b: '0 K (−273 °C): the temperature at which molecules have minimum kinetic energy (not zero energy).' },
      { n: 3, f: 'Kelvin temperature and molecular energy', b: 'T (K) = θ (°C) + 273. The kelvin temperature is directly proportional to the average kinetic energy of the molecules: doubling T doubles the average kinetic energy.' },
      { n: 4, f: 'Gas at 2.0 × 10⁵ Pa and 0.30 m³ is compressed to 0.10 m³ at constant temperature. New pressure?', b: 'p₁V₁ = p₂V₂ (fixed mass, constant temperature): p₂ = 2.0 × 10⁵ × 0.30 ÷ 0.10 = 6.0 × 10⁵ Pa.' },
      { n: 5, f: 'A fixed volume of gas at 1.0 × 10⁵ Pa is heated from 27 °C to 127 °C. New pressure?', b: 'p₁/T₁ = p₂/T₂ with T in kelvin: 300 K and 400 K.\np₂ = 1.0 × 10⁵ × 400 ÷ 300 = 1.3 × 10⁵ Pa.' },
      { n: 6, f: 'Particle explanation: reducing volume vs raising temperature', b: 'Smaller volume (constant T): molecules hit the walls more frequently, so pressure rises.\nHigher temperature (constant V): molecules move faster, hitting the walls more frequently and harder.' },
    ]),

    // 6 Magnetism and electromagnetism
    ...sub(T6, 'units-magnetism', '6a', [
      { n: 1, f: 'Units of current, voltage and power used in electromagnetism', b: 'Current: ampere (A). Voltage: volt (V). Power: watt (W).' },
      { n: 2, f: 'Express 1 watt in terms of amperes and volts', b: '1 W = 1 A × 1 V, since power = current × voltage.' },
      { n: 3, f: 'Units in the ideal transformer relation Vp × Ip = Vs × Is', b: 'Voltages in volts (V), currents in amperes (A); each side is a power in watts (W).' },
    ]),
    ...sub(T6, 'magnetism', '6b', [
      { n: 1, f: 'What do magnets attract and repel?', b: 'Magnets repel and attract other magnets (like poles repel, unlike attract), and attract magnetic substances.' },
      { n: 2, f: 'Magnetically hard vs soft materials', b: 'Hard (steel): keeps its magnetism; used for permanent magnets.\nSoft (iron): loses it easily; used for electromagnet cores.' },
      { n: 3, f: 'Magnetic field lines', b: 'Run from north to south outside the magnet, never cross, and are closer together where the field is stronger.' },
      { n: 4, f: 'Induced magnetism', b: 'Magnetism produced in a magnetic material placed in a magnetic field. It is temporary: it appears only in the field.' },
      { n: 5, f: 'How can a uniform magnetic field be produced?', b: 'With two permanent magnets, opposite poles facing each other: the field between them is uniform.' },
    ]),
    ...sub(T6, 'electromagnetism', '6c', [
      { n: 1, f: 'Magnetic field of a current-carrying wire', b: 'Circular field lines around the wire. Right-hand grip rule: thumb along the current, fingers curl in the field direction.' },
      { n: 2, f: 'Field patterns of a straight wire, a flat coil and a solenoid', b: 'Straight wire: concentric circles.\nFlat coil: like a short bar magnet.\nSolenoid: like a bar magnet, strong and nearly uniform inside. (Paper 2 only)' },
      { n: 3, f: 'How is an electromagnet made, and made stronger?', b: 'A coil of wire (solenoid) carrying a current, usually around a soft iron core. Stronger with more current, more turns, or a soft iron core. (Paper 2 only)' },
      { n: 4, f: 'Fleming\'s left-hand rule', b: 'For the force on a current-carrying wire in a magnetic field: first finger = field, second finger = current, thumb = motion (force).' },
      { n: 5, f: 'When is the force on a current-carrying wire in a field zero, and how is it reversed?', b: 'Zero when the wire is parallel to the field (maximum when perpendicular). Reversing either the current or the field reverses the force; reversing both leaves it unchanged.' },
      { n: 6, f: 'How can the force on a current-carrying wire be increased?', b: 'Increase the current or use a stronger magnetic field.' },
      { n: 7, f: 'What does the split-ring commutator in a d.c. motor do?', b: 'It reverses the current every half turn, so the force on each side keeps acting in the same rotational sense and the coil keeps turning.' },
      { n: 8, f: 'How does a loudspeaker work?', b: 'An alternating current in a coil in a magnetic field produces a changing force (motor effect), making the cone vibrate and produce sound.' },
      { n: 9, f: 'Force on a charged particle moving in a magnetic field', b: 'It experiences a force, unless it moves parallel to the field. (Paper 2 only)' },
    ]),
    ...sub(T6, 'electromagnetic-induction', '6d', [
      { n: 1, f: 'When is a voltage induced in a conductor or coil?', b: 'When it moves through a magnetic field (cuts field lines), or when the magnetic field through it changes.' },
      { n: 2, f: 'Three ways to increase an induced voltage', b: 'Move faster, use a stronger magnet, use more turns on the coil.' },
      { n: 3, f: 'How is electricity generated by rotation?', b: 'By rotating a magnet inside a coil, or rotating a coil in a magnetic field; the changing field induces an alternating voltage.' },
      { n: 4, f: 'Lenz\'s law, and why it must be true', b: 'The induced current opposes the change producing it. If it helped the motion, energy would be created from nothing, breaking conservation of energy.' },
      { n: 5, f: 'Structure of a transformer, and why it needs a.c.', b: 'Two coils (primary and secondary) on a soft iron core. a.c. makes a continuously changing field in the core, inducing a voltage in the secondary; steady d.c. induces none. (Paper 2 only)' },
      { n: 6, f: 'A transformer has 100 primary turns, 500 secondary turns and 12 V input. Output voltage?', b: 'Vp/Vs = Np/Ns: 12/Vs = 100/500, so Vs = 60 V (step-up). (Paper 2 only)' },
      { n: 7, f: 'Why are step-up transformers used for transmission?', b: 'For the same power, a higher voltage means a lower current. Cable losses are I²R, so halving the current quarters the loss. Step-down transformers then lower the voltage for consumers. (Paper 2 only)' },
      { n: 8, f: 'Power in a 100% efficient transformer', b: 'Input power = output power: Vp × Ip = Vs × Is. (Paper 2 only)' },
    ]),

    // 7 Radioactivity and particles
    ...sub(T7, 'units-radioactivity', '7a', [
      { n: 1, f: 'Unit of activity', b: 'The becquerel (Bq): one decay per second.' },
      { n: 2, f: 'Units for half-life', b: 'Any unit of time: seconds (s), minutes (min) or hours (h), chosen to suit the isotope.' },
      { n: 3, f: 'Which unit is used for how far radiation travels through air?', b: 'Centimetres (cm). For example, alpha particles travel only a few cm in air.' },
    ]),
    ...sub(T7, 'radioactivity', '7b', [
      { n: 1, f: 'Atomic number and mass number', b: 'Atomic number: number of protons. Mass number: protons + neutrons. Nuclide notation shows the mass number above and the atomic number below the symbol.' },
      { n: 2, f: 'Isotopes', b: 'Atoms with the same number of protons but different numbers of neutrons: identical chemistry, different nuclear stability.' },
      { n: 3, f: 'Alpha radiation', b: 'A helium nucleus, charge +2. Stopped by paper. Strongly ionising.', src: RADIO },
      { n: 4, f: 'Beta radiation', b: 'A fast electron, charge −1. Stopped by about 3 mm of aluminium. Moderately ionising.', src: RADIO },
      { n: 5, f: 'Gamma radiation', b: 'An electromagnetic wave, no charge. Reduced by thick lead. Weakly ionising.', src: RADIO },
      { n: 6, f: 'Effect on mass number and atomic number of α, β, γ and neutron emission', b: 'α: mass −4, atomic −2.\nβ: mass unchanged, atomic +1 (a neutron becomes a proton + electron).\nγ: no change.\nNeutron: mass −1, atomic unchanged.' },
      { n: 7, f: 'How is ionising radiation detected?', b: 'With photographic film (it darkens) or a Geiger–Müller detector (clicks or counts).' },
      { n: 8, f: 'Sources of background radiation', b: 'Rocks (notably radon gas), cosmic rays, food, and medical sources. Subtract it from measured count rates before half-life calculations.' },
      { n: 9, f: 'Half-life', b: 'The time for half the undecayed nuclei in a sample to decay, or for the activity (count rate) to halve. Decay is random, so it is an average; it is not affected by temperature or pressure.' },
      { n: 10, f: 'A source has activity 800 Bq and a half-life of 2 hours. Activity after 6 hours?', b: '6 ÷ 2 = 3 half-lives: 800 → 400 → 200 → 100 Bq.' },
      { n: 11, f: 'Monitoring foil thickness', b: 'Beta. Alpha would be completely absorbed and gamma would pass almost entirely through, so neither would respond to changes in thickness; beta is partly absorbed, so the count rate varies as the foil thickness changes.', src: RADIO },
      { n: 12, f: 'Smoke detector', b: 'Alpha. It strongly ionises the air in the detector but is safely stopped within the device itself.', src: RADIO },
      { n: 13, f: 'Medical tracer', b: 'Gamma, with a short half-life. Gamma penetrates the body so it can be detected externally, and a short half-life means activity falls quickly, limiting the patient\'s overall exposure.', src: RADIO },
      { n: 14, f: 'Contamination vs irradiation', b: 'Contamination: radioactive material gets onto or into an object or person, so the risk continues after the source is removed.\nIrradiation: exposure to an external source; the risk stops when the source is removed.' },
      { n: 15, f: 'Dangers of ionising radiation and how to reduce exposure', b: 'Mutation and damage to cells and tissue; radioactive waste must be disposed of safely. Reduce exposure by shielding (lead, concrete), distance (tongs) and limiting time.' },
    ]),
    ...sub(T7, 'fission-and-fusion', '7c', [
      { n: 1, f: 'Fission of uranium-235', b: 'A U-235 nucleus absorbs a neutron, becomes unstable and splits into two daughter nuclei, releasing energy and two or three neutrons.' },
      { n: 2, f: 'Chain reaction', b: 'Neutrons released by one fission cause further fissions, which release more neutrons, and so on.' },
      { n: 3, f: 'Roles of control rods, the moderator and shielding in a reactor', b: 'Control rods absorb neutrons to control the rate of fission. The moderator slows neutrons so they can cause fission. Thick shielding absorbs radiation escaping from the core.' },
      { n: 4, f: 'Nuclear fusion', b: 'Small (light) nuclei join to form a larger nucleus, with a loss of mass and a release of energy. Fusion is the energy source of stars.' },
      { n: 5, f: 'Why is fusion hard to achieve on Earth?', b: 'Both nuclei are positively charged and repel. Overcoming this electrostatic repulsion needs extremely high temperature and pressure, which are hard to contain.' },
      { n: 6, f: 'Fission vs fusion', b: 'Fission splits a large nucleus into smaller ones; fusion joins small nuclei into a larger one. Both release energy.' },
    ]),

    // 8 Astrophysics
    ...sub(T8, 'units-astrophysics', '8a', [
      { n: 1, f: 'Unit of gravitational field strength', b: 'Newton/kilogram (N/kg).' },
      { n: 2, f: 'Units in orbital speed = 2π × orbital radius ÷ time period', b: 'Orbital radius in metres (m), time period in seconds (s), orbital speed in metre/second (m/s).' },
      { n: 3, f: 'Units in weight = mass × gravitational field strength', b: 'Weight in newtons (N), mass in kilograms (kg), g in N/kg.' },
    ]),
    ...sub(T8, 'motion-in-the-universe', '8b', [
      { n: 1, f: 'The universe, galaxies and our solar system', b: 'The universe is a large collection of billions of galaxies; a galaxy is a large collection of billions of stars. Our solar system is in the Milky Way galaxy.' },
      { n: 2, f: 'Is gravitational field strength the same everywhere?', b: 'No. g varies with location, and is different on other planets and on the Moon.' },
      { n: 3, f: 'What causes moons, planets, artificial satellites and comets to orbit?', b: 'The gravitational force (gravity provides the centripetal force).' },
      { n: 4, f: 'How do the orbits of planets, moons and comets differ?', b: 'Planets orbit the Sun in nearly circular ellipses. Moons orbit planets. Comets orbit the Sun in highly elliptical orbits.' },
      { n: 5, f: 'Where is a comet fastest, and why?', b: 'At its closest approach to the Sun. As it approaches, gravitational potential energy is converted into kinetic energy.' },
      { n: 6, f: 'A satellite orbits at radius 8000 km with a period of 7200 s. Orbital speed?', b: 'v = 2πr/T = 2π × 8 000 000 ÷ 7200 ≈ 6980 m/s.' },
    ]),
    ...sub(T8, 'stellar-evolution', '8c', [
      { n: 1, f: 'How are stars classified by colour?', b: 'Colour relates to surface temperature: hotter stars appear blue/white, cooler stars red.' },
      { n: 2, f: 'Evolution of a star like the Sun', b: 'Nebula → (protostar) → main sequence star → red giant → (planetary nebula) → white dwarf.' },
      { n: 3, f: 'Evolution of a star much more massive than the Sun', b: 'Main sequence → red supergiant → supernova → neutron star or black hole. Mass determines the fate.' },
      { n: 4, f: 'Why is a main sequence star stable?', b: 'The inward gravitational force balances the outward pressure from the energy released by fusion of hydrogen into helium.' },
      { n: 5, f: 'Absolute magnitude', b: 'How bright a star would appear from a standard distance, so stars can be compared fairly. (Apparent brightness also depends on distance.) (Paper 2 only)' },
      { n: 6, f: 'Hertzsprung–Russell (HR) diagram', b: 'A plot of stars by temperature against luminosity (or absolute magnitude), showing patterns such as the main sequence band. (Paper 2 only)' },
    ]),
    ...sub(T8, 'cosmology', '8d', [
      { n: 1, f: 'Red-shift', b: 'Light from a galaxy moving away is shifted towards longer wavelengths (Doppler effect). (Paper 2 only)' },
      { n: 2, f: 'Two red-shift observations, and what they show', b: 'Almost all galaxies are red-shifted (receding), and more distant galaxies show greater red-shift (receding faster). So the universe is expanding. (Paper 2 only)' },
      { n: 3, f: 'Argument for the Big Bang from an expanding universe', b: 'If the universe is expanding, it was smaller, denser and hotter in the past. Space itself expands, so any galaxy sees the same pattern: Earth is not at the centre. (Paper 2 only)' },
      { n: 4, f: 'Cosmic microwave background radiation (CMBR)', b: 'Microwave radiation found uniformly in all directions: the cooled remnant of radiation from the hot early universe. Only the Big Bang model explains it. (Paper 2 only)' },
      { n: 5, f: 'Red-shift equation. A 500 nm line is observed at 500.5 nm. Galaxy\'s speed?', b: 'Δλ/λ₀ = v/c, so v = c × Δλ/λ₀ = 3.0 × 10⁸ × 0.5 ÷ 500 = 3.0 × 10⁵ m/s. (Paper 2 only)' },
    ]),
  ],
};
