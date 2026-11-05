/**
 * D-438 -- flashcards for OxfordAQA International GCSE Physics 9203
 * (for exams May/June 2018 onwards).
 *
 * One block per sub-topic, in specification order (3.1.1 ... 3.8.3). Card ids are
 * `<subtopic number>-<n>` and are permanent (browser progress is keyed by them):
 * add a new card with the next unused n, never renumber.
 *
 * 9203 is untiered, so no card is marked upper tier. Every card is authored:
 * scripts/flashcard-candidates.mjs 9203 finds candidates only on the topic-level
 * energy revision notes, which map to no sub-topic, so none can be placed here.
 *
 * Plain text only (see types.ts). Unicode for symbols.
 */
import type { Flashcard, FlashcardDeck } from './types.ts';

interface Spec { n: number; f: string; b: string }

const sub = (topic: string, subtopic: string, number: string, specs: Spec[]): Flashcard[] =>
  specs.map(({ n, f, b }) => ({
    id: `${number}-${n}`,
    topic,
    subtopic,
    front: f,
    back: b,
    origin: 'authored' as const,
  }));

const T1 = 'forces-and-their-effects-oxfordaqa-igcse';
const T2 = 'energy-oxfordaqa-igcse';
const T3 = 'waves-oxfordaqa-igcse';
const T4 = 'particle-model-of-matter-oxfordaqa-igcse';
const T5 = 'electricity-and-magnetism-oxfordaqa-igcse';
const T6 = 'generating-and-distributing-electricity-and-household-use';
const T7 = 'nuclear-physics-oxfordaqa-igcse';
const T8 = 'space-physics-oxfordaqa-igcse';

export const DECK_OXFORDAQA_IGCSE_PHYSICS: FlashcardDeck = {
  boardSlug: 'oxfordaqa',
  qualificationSlug: 'igcse',
  subjectSlug: 'physics',
  syllabusCode: '9203',
  syllabusSeries: 'For exams May/June 2018 onwards',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // 1 Forces and their effects
    ...sub(T1, 'forces-and-their-interactions-oxfordaqa', '3.1.1', [
      { n: 1, f: 'Contact vs non-contact forces, with examples', b: 'Contact forces need the objects to touch: friction, air resistance, tension, normal contact force.\nNon-contact (field) forces act across a gap: gravity, electrostatic, magnetic.' },
      { n: 2, f: 'Scalars vs vectors, with examples', b: 'Scalar: magnitude only (distance, speed, time).\nVector: magnitude and direction (displacement, velocity, acceleration, force, momentum). A vector arrow\'s length shows magnitude; its head shows direction.' },
      { n: 3, f: 'Forces when two objects interact', b: 'Each exerts a force on the other. The two forces are equal in size, opposite in direction and act on different objects, so they never cancel. E.g. a boot pushes the ground back; the ground pushes the boot forward.' },
      { n: 4, f: 'Weight equation. A 2.0 kg bag where g = 1.6 N/kg: weight?', b: 'W = m × g = 2.0 × 1.6 = 3.2 N. Its mass is still 2.0 kg.' },
      { n: 5, f: 'Elastic vs inelastic distortion', b: 'Elastic: the object returns to its original shape when the forces stop.\nInelastic: it stays out of shape afterwards.' },
      { n: 6, f: 'A spring of length 20.0 cm is 26.0 cm long under 3.0 N. Find k.', b: 'F = k × e. Extension e = 6.0 cm = 0.060 m, so k = 3.0 ÷ 0.060 = 50 N/m.' },
      { n: 7, f: 'Force–extension graph for a spring', b: 'A straight line through the origin (extension proportional to force) up to the limit of proportionality, then it curves. Gradient = spring constant k; a stiffer spring has a steeper line.' },
      { n: 8, f: 'Force and extension practical: two ways to reduce error', b: 'Read the rule at eye level with the pointer (avoid parallax), check the zero, use small mass steps and repeat readings. Unload and re-measure to check the distortion was elastic.' },
    ]),
    ...sub(T1, 'motion-oxfordaqa-igcse', '3.1.2', [
      { n: 1, f: 'Velocity', b: 'Speed in a given direction. v = s ÷ t (m/s), with s the displacement.' },
      { n: 2, f: 'A cat walks 6 m north then 2 m south in 8 s. Distance, speed, displacement, velocity?', b: 'Distance 8 m, speed 1.0 m/s.\nDisplacement 4 m north, velocity 0.50 m/s north.' },
      { n: 3, f: 'Reading a distance–time graph', b: 'Flat line: stationary. Straight slope: constant speed (gradient = speed). Curve: changing speed.' },
      { n: 4, f: 'How do you find the speed at one instant from a curved distance–time graph?', b: 'Draw a tangent to the curve at that point and find its gradient.' },
      { n: 5, f: 'A runner covers 100 m in 20 s, rests 10 s, then covers 100 m in 30 s. Average speed?', b: 'Total distance ÷ total time, including rests: 200 ÷ 60 = 3.3 m/s.' },
    ]),
    ...sub(T1, 'resultant-forces-oxfordaqa', '3.1.3', [
      { n: 1, f: 'Newton\'s Third Law: features of a force pair', b: 'Equal size, opposite direction, same type of force, acting on two different objects.' },
      { n: 2, f: 'Are an object\'s weight and the push of the table on it a Third Law pair?', b: 'No. Both act on the same object and are different types of force. The pair to its weight is the object pulling the Earth upwards.' },
      { n: 3, f: 'Resultant force', b: 'The single force that has the same effect as all the forces acting together. A non-zero resultant force causes acceleration.' },
      { n: 4, f: 'Acceleration equation. Velocity rises from 5 m/s to 17 m/s in 4 s:', b: 'a = Δv ÷ t = (17 − 5) ÷ 4 = 3.0 m/s². A deceleration is a negative acceleration.' },
      { n: 5, f: 'Velocity–time graph: gradient and area', b: 'Gradient = acceleration. Area under the line = distance travelled. A horizontal line means constant velocity.' },
      { n: 6, f: 'From rest to 9 m/s in 3 s, then 9 m/s for 6 s. Distance travelled?', b: 'Area: ½ × 3 × 9 + 6 × 9 = 13.5 + 54 = 67.5 m.' },
      { n: 7, f: 'Newton\'s First Law', b: 'If the resultant force is zero, a stationary object stays at rest and a moving object keeps the same speed in the same direction.' },
      { n: 8, f: 'Newton\'s Second Law. A 2000 kg van: driving force 5000 N, resistive forces 1400 N.', b: 'F = ma. Resultant = 5000 − 1400 = 3600 N, so a = 3600 ÷ 2000 = 1.8 m/s², in the direction of the resultant.' },
    ]),
    ...sub(T1, 'momentum-oxfordaqa-igcse', '3.1.4', [
      { n: 1, f: 'Momentum', b: 'p = mv (kg m/s). It has a direction: choose one direction as positive.' },
      { n: 2, f: 'Conservation of momentum', b: 'In a closed system, the total momentum before an interaction equals the total momentum after.' },
      { n: 3, f: 'A 0.40 kg trolley at 2.5 m/s hits a stationary 0.10 kg trolley and they join. Velocity?', b: 'Before: 0.40 × 2.5 = 1.0 kg m/s. After: 0.50v. So v = 2.0 m/s.' },
      { n: 4, f: 'Two skaters at rest push apart. The 70 kg skater moves right at 1.5 m/s. The 50 kg skater?', b: 'Total momentum stays zero. 70 × 1.5 = 105 kg m/s, so the 50 kg skater has 105 kg m/s left: v = 2.1 m/s left.' },
      { n: 5, f: 'Force and momentum. A 60 kg passenger at 10 m/s is stopped by a seat belt in 0.25 s.', b: 'F = Δp ÷ t = (60 × 10) ÷ 0.25 = 2400 N.' },
      { n: 6, f: 'Explain how an air bag or crumple zone reduces injury', b: 'It increases the time taken for the momentum to change to zero, so the rate of change of momentum is smaller, so the force on the person is smaller.' },
    ]),
    ...sub(T1, 'safety-in-public-transport', '3.1.5', [
      { n: 1, f: 'A vehicle moves at a steady speed in a straight line. What can you say about the forces?', b: 'The resultant force is zero: the driving force equals the resistive forces. A larger driving force makes it accelerate; a smaller one makes it decelerate.' },
      { n: 2, f: 'Stopping distance, and what thinking and braking distance depend on', b: 'Stopping distance = thinking distance + braking distance.\nThinking: speed and reaction time.\nBraking: speed, braking force (road and vehicle condition) and mass.' },
      { n: 3, f: 'What makes reaction time longer?', b: 'Tiredness, distractions, drugs and alcohol. A longer reaction time increases the thinking distance only.' },
      { n: 4, f: 'What happens to the energy when a vehicle brakes?', b: 'Friction between brake and wheel does work, reducing the kinetic energy and raising the temperature of the brakes. Braking force × braking distance = kinetic energy lost.' },
      { n: 5, f: 'A 900 kg car at 12 m/s; reaction time 0.90 s; braking force 4000 N. Stopping distance?', b: 'Thinking: 12 × 0.90 = 10.8 m.\nKE = ½ × 900 × 12² = 64 800 J, so braking = 64 800 ÷ 4000 = 16.2 m.\nStopping distance = 27.0 m.' },
      { n: 6, f: 'The speed doubles, with the same braking force. Effect on thinking and braking distance?', b: 'Thinking distance doubles. Kinetic energy is proportional to speed², so braking distance becomes four times as long.' },
      { n: 7, f: 'How do wet or icy roads and worn tyres or brakes affect braking?', b: 'Less friction (or grip), so a smaller braking force and a longer braking distance; worn tyres can skid sooner.' },
    ]),
    ...sub(T1, 'forces-and-terminal-velocity', '3.1.6', [
      { n: 1, f: 'Drag', b: 'A frictional force on an object moving through a fluid (liquid or gas). It opposes motion and grows as speed grows.' },
      { n: 2, f: 'Explain how a falling object reaches terminal velocity', b: 'At first drag is zero, so the resultant equals the weight and acceleration is largest. As speed rises, drag rises, so the resultant and acceleration fall. When drag = weight the resultant is zero: constant (terminal) velocity.' },
      { n: 3, f: 'A skydiver at terminal velocity opens a parachute. Describe the velocity–time graph.', b: 'A sharp fall in speed (drag > weight), then it levels off at a new, lower terminal velocity where drag again equals the (unchanged) weight.' },
      { n: 4, f: 'Why does a parachute give a lower terminal velocity?', b: 'Its large area gives a large drag at low speed, so the weight is balanced at a lower speed.' },
      { n: 5, f: 'How does streamlining help a shark or a car?', b: 'A smooth, tapered shape lets the fluid flow smoothly past, reducing drag, so it moves faster (higher maximum speed) using less energy.' },
    ]),
    ...sub(T1, 'centre-of-mass-oxfordaqa', '3.1.7', [
      { n: 1, f: 'Centre of mass', b: 'The point at which the mass of an object may be thought to be concentrated; its weight can be treated as acting there.' },
      { n: 2, f: 'Where is the centre of mass of a symmetrical object, and of a freely suspended one?', b: 'Symmetrical: on the axis of symmetry. Freely suspended: it comes to rest with its centre of mass directly below the pivot. (It can be outside the object, as in a ring.)' },
      { n: 3, f: 'How do you find the centre of mass of an irregular thin lamina?', b: 'Hang it from a pin so it swings freely, hang a plumb line from the pin and mark the line. Repeat from two other holes. The lines cross at the centre of mass.' },
      { n: 4, f: 'What makes an object stable?', b: 'A low centre of mass and a wide base. A high centre of mass and a narrow base make it easier to topple.' },
      { n: 5, f: 'When does a tilted object topple?', b: 'When the line of action of its weight (through the centre of mass) falls outside its base, giving a resultant moment about the tipping edge.' },
    ]),
    ...sub(T1, 'moments-and-levers-oxfordaqa', '3.1.8', [
      { n: 1, f: 'Moment of a force', b: 'The turning effect of a force: M = F × d, in N m, where d is the perpendicular distance from the pivot to the line of action.' },
      { n: 2, f: 'A 450 N force acts 0.20 m from a pivot. Moment?', b: 'M = 450 × 0.20 = 90 N m.' },
      { n: 3, f: 'Principle of moments', b: 'For an object that is not turning, the total clockwise moment equals the total anticlockwise moment about any pivot.' },
      { n: 4, f: 'A 240 N weight is 0.75 m left of a pivot. What force 0.50 m right balances it?', b: 'F × 0.50 = 240 × 0.75 = 180 N m, so F = 360 N.' },
      { n: 5, f: 'How does a lever act as a force multiplier?', b: 'With the effort far from the pivot and the load close to it, a small effort overcomes a larger load. The cost: the effort moves further than the load. E.g. crowbar, wheelbarrow, nutcracker.' },
      { n: 6, f: 'An object rests in equilibrium on one pivot. What is the support force at the pivot?', b: 'It equals the sum of the downward forces.' },
    ]),

    // 2 Energy
    ...sub(T2, 'forces-and-energy-oxfordaqa', '3.2.1', [
      { n: 1, f: 'Work done', b: 'W = F × d (J, N, m), with d along the line of the force. Work done = energy transferred; 1 J = 1 N m. Holding something still does no work on it.' },
      { n: 2, f: 'What happens to work done against friction?', b: 'It is transferred by heating to the surfaces and surroundings (not lost). E.g. brakes heat up; a meteor glows as air resistance heats it.' },
      { n: 3, f: 'Elastic potential energy. A spring (k = 120 N/m) is stretched from 0.30 m to 0.45 m.', b: 'Ee = ½ × k × e², with e the extension (0.15 m): ½ × 120 × 0.15² = 1.35 J. Valid below the limit of proportionality.' },
      { n: 4, f: 'Gravitational potential energy', b: 'Ep = m × g × h, where h is the vertical height gained (not the distance along a ramp). Use the g given in the question.' },
      { n: 5, f: 'Kinetic energy: effect of doubling mass, or doubling speed', b: 'Ek = ½ × m × v². Doubling mass doubles Ek; doubling speed makes Ek four times as large; tripling speed, nine times.' },
      { n: 6, f: 'An 800 kg van at 10 m/s brakes with a 4000 N force. Braking distance?', b: 'Ek = ½ × 800 × 10² = 40 000 J. Braking force × distance = Ek, so d = 40 000 ÷ 4000 = 10 m.' },
      { n: 7, f: 'Power. A hoist does 15 000 J of work in 20 s:', b: 'P = E/t = W/t, in watts (1 W = 1 J/s).\nP = 15 000 ÷ 20 = 750 W.' },
    ]),
    ...sub(T2, 'energy-transfers-conservation-and-dissipation', '3.2.2', [
      { n: 1, f: 'Energy transfers: a released catapult, a falling object, a thrown ball going up', b: 'Catapult: elastic potential → kinetic.\nFalling: gravitational potential → kinetic.\nThrown up: kinetic → gravitational potential.' },
      { n: 2, f: 'Why does a pendulum\'s swing get lower over time?', b: 'Energy moves between kinetic and gravitational potential, but air resistance and friction at the pivot dissipate a little energy to the surroundings each swing. It is not destroyed.' },
      { n: 3, f: 'Conservation and dissipation of energy', b: 'Energy cannot be created or destroyed, only transferred usefully, stored or dissipated. Dissipated energy is spread into the surroundings. Reduce it with lubrication, insulation and streamlining.' },
      { n: 4, f: 'Efficiency. A motor takes in 150 W and gives 93 W of useful power:', b: 'Efficiency = useful output ÷ total input = 93 ÷ 150 = 0.62 (62%). Wasted power = 57 W. It has no unit and is always less than 1.' },
      { n: 5, f: 'A device is 40% efficient and gives 270 J of useful energy. Input and dissipated energy?', b: 'Input = 270 ÷ 0.40 = 675 J. Dissipated = 675 − 270 = 405 J.' },
      { n: 6, f: 'Sankey diagram: input arrow 40 mm, useful arrow 10 mm, scale 1 mm = 2 kJ. Efficiency?', b: 'Input 80 kJ, useful 20 kJ, so efficiency = 20 ÷ 80 = 0.25. Arrow widths are in proportion to the energy.' },
      { n: 7, f: 'A 0.25 kg pendulum bob is released 0.080 m above its lowest point (g = 9.8 N/kg). Speed at the bottom?', b: 'GPE = 0.25 × 9.8 × 0.080 = 0.196 J = KE at the bottom.\nv² = 2 × 0.196 ÷ 0.25 = 1.568, so v = 1.25 m/s.' },
    ]),
    ...sub(T2, 'energy-resources-oxfordaqa-igcse', '3.2.3', [
      { n: 1, f: 'Renewable vs non-renewable', b: 'Renewable: replaced naturally as fast as it is used (wind, hydroelectric, tidal, wave, solar, geothermal, biofuels).\nNon-renewable: used up much faster than it forms, so it can run out (coal, oil, natural gas, nuclear fuel).' },
      { n: 2, f: 'Factors when choosing a fuel', b: 'Ease of storage (solids and liquids easier than gases), energy content (energy released per kg) and safety (ease of ignition, toxic fumes, explosion risk).' },
      { n: 3, f: '2.0 kg of fuel (30 MJ/kg) heats water, which gains 33 MJ. Fuel efficiency?', b: 'Energy released = 2.0 × 30 = 60 MJ. Efficiency = 33 ÷ 60 = 0.55 (55%).' },
      { n: 4, f: 'Environmental effects of fossil fuels and of nuclear fuel', b: 'Fossil fuels: carbon dioxide (global warming); coal can release sulfur dioxide (acid rain); mining and oil spills damage habitats.\nNuclear: no CO₂ in use, but mining and radioactive waste needing long-term storage.' },
      { n: 5, f: 'Wave power: advantages and drawbacks', b: 'No fuel and no CO₂ in use; good for coastal countries. Depends on sea conditions, costly to build and repair, may disturb marine life and shipping.' },
      { n: 6, f: 'Solar and geothermal: one advantage and one drawback each', b: 'Solar: no fuel or emissions in use, but no output at night and less in cloud.\nGeothermal: steady output day and night, but needs accessible hot rock and costly drilling.' },
      { n: 7, f: '12 m² of solar panel receives 450 W/m² and is 18% efficient. Useful output?', b: 'Input = 12 × 450 = 5400 W. Output = 0.18 × 5400 = 972 W.' },
    ]),

    // 3 Waves
    ...sub(T3, 'general-properties-of-waves', '3.3.1', [
      { n: 1, f: 'Wave', b: 'A disturbance from a vibrating source that carries energy and information without carrying the material itself along. A floating cork bobs up and down but does not travel with the ripples.' },
      { n: 2, f: 'Transverse vs longitudinal waves, with examples', b: 'Transverse: oscillations at right angles to the direction energy moves (electromagnetic waves, water waves).\nLongitudinal: vibrations along the direction of energy travel (sound, a pushed and pulled spring).' },
      { n: 3, f: 'Compression and rarefaction', b: 'Compression: region where the particles (or coils) are squashed together.\nRarefaction: region where they are spread apart.' },
      { n: 4, f: 'Amplitude and wavelength', b: 'Amplitude: the largest displacement of a point from its undisturbed position.\nWavelength (λ): the length of one full wave, from a point to the matching point on the next wave.' },
      { n: 5, f: 'Frequency, period and wavefront', b: 'Frequency: waves passing a point each second (Hz).\nPeriod: time for one complete wave (s); T = 1/f.\nWavefront: a line joining points at the same stage of oscillation.' },
      { n: 6, f: 'A wave of 1200 Hz has a wavelength of 0.28 m. Speed?', b: 'v = fλ = 1200 × 0.28 = 336 m/s.' },
      { n: 7, f: 'What happens to a wave entering a different medium?', b: 'Its speed changes, so its wavelength changes; the frequency stays the same. If it arrives at an angle its direction changes (refraction).' },
      { n: 8, f: 'When is diffraction noticeable?', b: 'When the wavelength is comparable to the size of the gap or obstacle. A gap much wider than the wavelength gives very little spreading.' },
      { n: 9, f: 'Three things that can happen to a wave at a boundary', b: 'It can be reflected, transmitted or absorbed, or any combination of these.' },
    ]),
    ...sub(T3, 'the-electromagnetic-spectrum-oxfordaqa', '3.3.2', [
      { n: 1, f: 'Electromagnetic waves: type, speed and order', b: 'Transverse; all travel at the same speed in a vacuum. Increasing frequency (decreasing wavelength): radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays.' },
      { n: 2, f: 'Visible light', b: 'The part of the spectrum the eye detects; different wavelengths look like different colours. Red has the longest wavelength, violet the shortest.' },
      { n: 3, f: 'Which objects emit and absorb infrared, and which surfaces are best?', b: 'All objects; a hotter object radiates more in a given time. Dark, matt surfaces are good absorbers and emitters; light, shiny surfaces are poor absorbers and emitters, and good reflectors.' },
      { n: 4, f: 'Black-body radiation', b: 'The range of electromagnetic radiation emitted by an object at a particular temperature. As it heats up it radiates more infrared and at higher frequencies.' },
      { n: 5, f: 'Uses of radio waves, microwaves, infrared and visible light', b: 'Radio: TV and radio, Bluetooth.\nMicrowaves: mobile phones, satellite TV.\nInfrared: remote controls, night vision, heating.\nVisible: photography, fibre optic communications.' },
      { n: 6, f: 'Uses of ultraviolet, X-rays and gamma rays', b: 'Ultraviolet: security marking.\nX-rays: medical imaging.\nGamma: sterilising surgical instruments, killing harmful bacteria in food.' },
      { n: 7, f: 'Hazards of microwaves, infrared, ultraviolet, X-rays and gamma rays', b: 'Microwaves: heating of body tissue.\nInfrared: skin burns.\nUltraviolet: skin cancer and blindness.\nX-rays: high doses kill cells.\nGamma: genetic mutations.' },
      { n: 8, f: 'Low-energy vs high-energy electromagnetic waves: main effect on the body', b: 'Low energy: heating. High energy: ionisation, the removal of an electron from an atom or molecule.' },
      { n: 9, f: 'Why do X-rays show bones on an image?', b: 'Soft tissue transmits most X-rays, exposing the film or detector; bone absorbs them strongly, so less reaches the film behind it. Used for fractures, dental problems and CT scans.' },
      { n: 10, f: 'A radio station transmits at 100 MHz (c = 3.00 × 10⁸ m/s). Wavelength?', b: 'λ = c/f = 3.00 × 10⁸ ÷ 1.00 × 10⁸ = 3.0 m.' },
      { n: 11, f: 'Precautions for people who work with ionising radiation', b: 'Less time near the source, more distance, shielding (lead aprons and screens), and a monitoring badge to record exposure.' },
    ]),
    ...sub(T3, 'sound-and-ultrasound-oxfordaqa', '3.3.3', [
      { n: 1, f: 'Sound: type of wave, medium and range of human hearing', b: 'Longitudinal, with compressions and rarefactions. Needs a medium (cannot cross a vacuum). Human hearing: about 20 Hz to 20 000 Hz.' },
      { n: 2, f: 'Pitch and loudness on an oscilloscope trace', b: 'Pitch depends on frequency: higher pitch, more cycles across the screen.\nLoudness is related to amplitude: louder, taller wave.' },
      { n: 3, f: 'One cycle on a trace is 4 divisions at 0.5 ms per division. Frequency?', b: 'T = 4 × 0.5 = 2.0 ms = 0.0020 s. f = 1/T = 500 Hz.' },
      { n: 4, f: 'An echo from a wall returns after 0.50 s (sound at 340 m/s). How far is the wall?', b: 'Halve the time (there and back): s = vt = 340 × 0.25 = 85 m.' },
      { n: 5, f: 'Ultrasound: what it is and how it is produced', b: 'Sound above 20 000 Hz. An electrical signal makes a transducer vibrate at high frequency; the same device detects returning pulses. At a boundary it is partially reflected.' },
      { n: 6, f: 'An ultrasound pulse in tissue (1500 m/s) returns after 50 µs. Depth of the boundary?', b: 'One-way time 25 µs: s = 1500 × 25 × 10⁻⁶ = 0.0375 m, about 3.8 cm.' },
      { n: 7, f: 'Two medical uses of ultrasound', b: 'Prenatal scanning: reflections from tissue boundaries build an image (non-ionising).\nKidney stones: focused high-intensity ultrasound breaks them into small pieces.' },
    ]),
    ...sub(T3, 'reflection-oxfordaqa-igcse', '3.3.4', [
      { n: 1, f: 'The normal, and how angles are measured', b: 'A construction line at 90° to the surface at the point of incidence. Angles of incidence, reflection and refraction are measured from it.' },
      { n: 2, f: 'Law of reflection', b: 'Angle of incidence = angle of reflection.' },
      { n: 3, f: 'Image in a plane mirror', b: 'Virtual, upright, laterally inverted, the same size, and the same distance behind the mirror as the object is in front.' },
      { n: 4, f: 'How do you locate a plane-mirror image on a ray diagram?', b: 'Draw two rays from one point of the object to the mirror, reflect each with equal angles to the normal, then extend the reflected rays backwards with dashed lines; the image is where they cross.' },
      { n: 5, f: 'Real vs virtual image', b: 'Real: rays actually pass through it, so it can be shown on a screen.\nVirtual: rays only appear to come from it; it cannot be shown on a screen.' },
    ]),
    ...sub(T3, 'refraction-and-total-internal-reflection-oxfordaqa', '3.3.5', [
      { n: 1, f: 'Which way does light bend entering a denser medium? Along the normal?', b: 'Entering a denser (slower) medium: towards the normal. Entering a less dense (faster) one: away from the normal. Along the normal: speed changes, direction does not.' },
      { n: 2, f: 'Refractive index in terms of speed. Light travels at 1.80 × 10⁸ m/s in a plastic:', b: 'n = c/v = 3.00 × 10⁸ ÷ 1.80 × 10⁸ = 1.67. n has no unit and is greater than 1.' },
      { n: 3, f: 'Light enters glass (n = 1.60) from air at 30°. Angle of refraction?', b: 'n = sin i / sin r, so sin r = sin 30° ÷ 1.60 = 0.3125, r = 18.2°.' },
      { n: 4, f: 'Critical angle. Find c for glass with n = 1.60.', b: 'The angle of incidence in the denser medium at which the refracted ray skims along the boundary. n = 1/sin c, so c = sin⁻¹(1 ÷ 1.60) = 38.7°.' },
      { n: 5, f: 'Conditions for total internal reflection', b: 'Light travels in a denser medium towards a less dense one, and the angle of incidence is greater than the critical angle. All the light is then reflected back.' },
      { n: 6, f: 'Dispersion by a prism', b: 'White light splits into a spectrum because each colour is bent by a different amount: red least, violet most.' },
      { n: 7, f: 'Optical fibres: how they work and two uses', b: 'Light or infrared hits the wall above the critical angle each time, so it is totally internally reflected along the fibre. Uses: endoscopes in medicine; communications (large capacity, low loss, no electrical interference).' },
      { n: 8, f: 'Refraction practical: how do you find n from a graph?', b: 'Measure i and r from the normal for at least five angles. Plot sin i against sin r; the gradient is n.' },
    ]),
    ...sub(T3, 'lenses-and-the-eye-oxfordaqa', '3.3.6', [
      { n: 1, f: 'Convex vs concave lens', b: 'Convex (converging): thicker in the middle; parallel rays are brought to a focus at the principal focus.\nConcave (diverging): thinner in the middle; parallel rays diverge as if from the principal focus.' },
      { n: 2, f: 'Focal length', b: 'The distance from the lens to the principal focus.' },
      { n: 3, f: 'Convex lens: images for an object beyond 2f, at 2f, and between f and 2f', b: 'Beyond 2f: real, inverted, smaller.\nAt 2f: real, inverted, same size.\nBetween f and 2f: real, inverted, larger.' },
      { n: 4, f: 'Convex lens: object closer than the principal focus', b: 'Virtual, upright, larger: a magnifying glass.' },
      { n: 5, f: 'Image formed by a concave lens', b: 'Always virtual, upright and smaller, on the same side of the lens as the object.' },
      { n: 6, f: 'Magnification. A cell 0.040 mm across appears 6.0 mm across:', b: 'Magnification = image height ÷ object height = 6.0 ÷ 0.040 = 150 (no unit).' },
      { n: 7, f: 'Functions of the cornea, iris, pupil and retina', b: 'Cornea: transparent front; refracts light.\nIris: muscle that changes pupil size to control the light entering.\nPupil: opening that lets light in.\nRetina: light-sensitive cells; the image must focus on it.' },
      { n: 8, f: 'Accommodation: focusing on a near object', b: 'The ciliary muscle contracts, the suspensory ligaments go slack, and the lens becomes thicker and more strongly curved, so it bends light more. (Distant object: the reverse.)' },
      { n: 9, f: 'Near point, far point and range of vision of a typical eye', b: 'Near point about 25 cm; far point infinity. Range of vision: from about 25 cm to infinity.' },
      { n: 10, f: 'Long sight vs short sight: cause and correction', b: 'Long sight: eyeball too short (or lens cannot focus); near objects blurred; image behind the retina; convex lens.\nShort sight: eyeball too long; distant objects blurred; image in front of the retina; concave lens.' },
      { n: 11, f: 'Eye vs camera', b: 'The retina corresponds to the film or CCD sensor. The eye focuses by changing the shape of its lens; a camera focuses by changing the distance between lens and sensor.' },
      { n: 12, f: 'Uses of lasers', b: 'A laser is a concentrated source of light, used for cutting, cauterising and burning, including eye surgery to correct visual defects.' },
    ]),

    // 4 Particle model of matter
    ...sub(T4, 'kinetic-theory-oxfordaqa-igcse', '3.4.1', [
      { n: 1, f: 'Particle arrangement, motion and forces in solids, liquids and gases', b: 'Solid: lattice, vibrating, strong forces.\nLiquid: disordered, sliding past each other, weaker forces.\nGas: large gaps, fast and free, almost no forces.' },
      { n: 2, f: 'Why does temperature stay constant during a change of state?', b: 'The energy changes the separation (potential energy) of the particles, not their speed (kinetic energy).' },
      { n: 3, f: 'Specific heat capacity', b: 'The energy that warms 1 kg of a substance by 1 °C. E = m c Δθ (J, kg, J/kg °C, °C).' },
      { n: 4, f: 'Energy to raise 0.30 kg of copper (c = 390 J/kg °C) from 25 °C to 85 °C?', b: 'E = mcΔθ = 0.30 × 390 × 60 = 7020 J (7.0 × 10³ J).' },
      { n: 5, f: 'Specific latent heat of fusion and of vaporisation', b: 'Fusion (LF): energy to melt 1 kg of solid at constant temperature.\nVaporisation (LV): energy to vaporise 1 kg of liquid at constant temperature.\nE = m L.' },
      { n: 6, f: 'A 1.8 kW heater for 90 s evaporates 0.075 kg of liquid at its boiling point. Find LV.', b: 'E = Pt = 1800 × 90 = 162 000 J.\nLV = E ÷ m = 162 000 ÷ 0.075 = 2.16 × 10⁶ J/kg.' },
      { n: 7, f: 'Reading a temperature–time heating graph', b: 'Sloping section: one state, temperature rising (kinetic energy increases). Flat section: change of state at constant temperature (potential energy changes). The boiling flat is usually longer, as LV > LF.' },
      { n: 8, f: 'Stearic acid cooling practical: method and expected result', b: 'Melt the acid in hot water, then record its temperature at regular intervals (e.g. every 30 s) as it cools. The graph falls, has a plateau at the freezing point (close to 69 °C), then falls again.' },
      { n: 9, f: 'How do impurities affect melting and boiling?', b: 'They lower the melting point, raise the boiling point, and make the change happen over a range rather than a sharp step.' },
    ]),
    ...sub(T4, 'energy-transfers-and-particle-motion', '3.4.2', [
      { n: 1, f: 'Why are metals good thermal conductors?', b: 'Vibrating particles pass energy on, and free electrons move through the lattice carrying energy. Insulators have no free electrons; gases have widely spaced particles.' },
      { n: 2, f: 'Convection', b: 'Warmed fluid expands, its particles move apart and its density falls, so it rises; cooler, denser fluid sinks to replace it. Only in liquids and gases.' },
      { n: 3, f: 'Why does evaporation cool a liquid, and what speeds it up?', b: 'The fastest particles leave the surface, so the average kinetic energy of those left falls. Faster with higher temperature, larger surface area, moving air and drier air.' },
      { n: 4, f: 'Factors that increase the rate of energy transfer by heating', b: 'A larger surface area to volume ratio, a better conducting material in contact, a dull dark surface, and a bigger temperature difference.' },
      { n: 5, f: 'Surface area to volume ratio of cubes of side 1 cm and 3 cm', b: 'Ratio = 6/s: 6 per cm and 2 per cm. The larger cube has a lower ratio, so it cools more slowly.' },
      { n: 6, f: 'Thermal expansion: cause, a hazard and a use', b: 'Heated particles vibrate with larger amplitude and move slightly further apart. Hazard: bridges need expansion joints. Use: a bimetallic strip bends (the metal that expands more is on the outside) to work a thermostat.' },
      { n: 7, f: 'Condensation in terms of particles', b: 'Vapour particles lose energy and become liquid, transferring energy to the surroundings.' },
    ]),

    // 5 Electricity and magnetism
    ...sub(T5, 'electrical-circuits-oxfordaqa-igcse', '3.5.1', [
      { n: 1, f: 'Why do metals conduct, and which way does conventional current flow?', b: 'Metals contain many free electrons. Conventional current leaves the positive terminal; the electrons move the opposite way. A current needs a source and a complete loop.' },
      { n: 2, f: 'Static electricity', b: 'Rubbing two insulators transfers electrons: the surface that gains electrons is negative, the one that loses them positive. The charge stays because there is no conducting route; given one, it discharges.' },
      { n: 3, f: 'Current and charge. 1.8 A flows for 2.5 minutes: charge?', b: 'Current is the rate of flow of charge: I = Q/t. Q = It = 1.8 × 150 = 270 C. 1 A = 1 C/s.' },
      { n: 4, f: 'Potential difference. A motor transfers 330 J from 55 C:', b: 'p.d. is the energy transferred per unit charge in a component: V = E/Q = 330 ÷ 55 = 6.0 V. 1 V = 1 J/C.' },
      { n: 5, f: 'Voltage of a source vs potential difference', b: 'Voltage of a source: energy it gives to charges driving them round the whole circuit.\nPotential difference: energy transferred by charges in a component.' },
      { n: 6, f: 'Resistance equation. A heater has 12 V across it and carries 0.50 A:', b: 'V = I × R, so R = 12 ÷ 0.50 = 24 Ω.' },
      { n: 7, f: 'Ohmic conductor', b: 'A resistor at constant temperature: current is directly proportional to p.d., so the resistance is constant and the I–V graph is a straight line through the origin.' },
      { n: 8, f: 'I–V graphs of a filament lamp and a diode', b: 'Filament lamp: a curve through the origin that flattens (resistance rises as it heats); symmetrical for negative p.d.\nDiode: almost no current in reverse and for small forward p.d., then a steep rise.' },
      { n: 9, f: 'Explain why a filament lamp\'s resistance rises with current', b: 'The current heats the filament, so the positive ions vibrate with larger amplitude. Free electrons collide with the ions more often, so the flow of charge is hindered more.' },
      { n: 10, f: 'Thermistor and LDR: how resistance changes, and a use', b: 'Thermistor: resistance decreases as temperature increases (thermostat, fire alarm).\nLDR: resistance decreases as light intensity increases (switching lights on when it gets dark).' },
      { n: 11, f: 'Diode and LED', b: 'A diode conducts in one direction only (low forward, very high reverse resistance). An LED is a diode that emits light; LEDs use a much smaller current than other lighting.' },
      { n: 12, f: 'A 9.0 V supply is across 8.0 Ω and 22 Ω in series. Current, and each p.d.?', b: 'Series: resistances add, same current, p.d. shared. R = 30 Ω, I = 9.0 ÷ 30 = 0.30 A.\np.d.s: 0.30 × 8.0 = 2.4 V and 0.30 × 22 = 6.6 V.' },
      { n: 13, f: 'A 24 V supply is across 40 Ω and 60 Ω in parallel. Branch currents and combined resistance?', b: 'Parallel: same p.d. across each branch, currents add. 24 ÷ 40 = 0.60 A and 24 ÷ 60 = 0.40 A, total 1.0 A.\nCombined R = 24 ÷ 1.0 = 24 Ω (less than either branch).' },
      { n: 14, f: 'Cells in series', b: 'The combined voltage is the sum of their voltages (cells facing the same way). Four 2.0 V cells give 8.0 V.' },
      { n: 15, f: 'Heating effect of a current', b: 'Moving electrons collide with the stationary atoms of the wire, transferring energy so the atoms vibrate more and the wire heats up. A filament lamp wastes a lot of energy this way; a CFL wastes less.' },
    ]),
    ...sub(T5, 'magnetism-and-electromagnetism-oxfordaqa-igcse', '3.5.2', [
      { n: 1, f: 'Forces between poles, and the test for a magnet', b: 'Like poles repel; unlike poles attract. Induced magnetism always attracts, so only repulsion proves an object is a magnet.' },
      { n: 2, f: 'Magnetic field, and the magnetic materials', b: 'The space around a magnet where another magnet or a magnetic material experiences a force. Magnetic materials: iron, steel, cobalt, nickel.' },
      { n: 3, f: 'Field line rules, and a uniform field', b: 'Lines go out of north and into south, never cross, and are closer where the field is stronger. A uniform field has parallel, equally spaced lines.' },
      { n: 4, f: 'Induced magnet', b: 'A material that becomes a magnet when placed in a magnetic field (its near end becomes the opposite pole, so it is attracted) and loses most or all of its magnetism quickly when removed.' },
      { n: 5, f: 'The Earth\'s field and a plotting compass', b: 'The Earth has a magnetic field. A compass is a small, freely turning magnet that lines up with the field; its north-seeking end points north.' },
      { n: 6, f: 'Magnetic field around a straight wire', b: 'Concentric circles in a plane perpendicular to the wire. Stronger closer to the wire and with a larger current; reversing the current reverses the field.' },
      { n: 7, f: 'Solenoid and electromagnet: field, and how to make it stronger', b: 'A solenoid\'s field is strong and uniform inside and like a bar magnet outside. An electromagnet is a solenoid with an iron core. Stronger with a larger current, more turns, an iron core.' },
      { n: 8, f: 'Three uses of electromagnets', b: 'Scrapyard crane (lifts then releases scrap), electric bell (the coil pulls an armature that breaks the circuit, then a spring resets it), relay (a small current closes a switch in a second circuit).' },
    ]),

    // 6 Generating and distributing electricity and household use
    ...sub(T6, 'generating-electricity-oxfordaqa', '3.6.1', [
      { n: 1, f: 'When is a potential difference induced across a conductor?', b: 'When it moves relative to a magnetic field (cutting field lines), or sits in a changing magnetic field. A current flows only if the circuit is complete.' },
      { n: 2, f: 'A north pole is pushed into a coil. What pole forms at the near end, and why?', b: 'A north pole, so it repels the magnet: the induced current\'s field opposes the change causing it.' },
      { n: 3, f: 'Four ways to increase an induced potential difference', b: 'Faster movement, a stronger magnetic field, more turns on the coil, a larger coil area.' },
      { n: 4, f: 'Alternator vs dynamo', b: 'Alternator: ac output, a wave above and below the axis.\nDynamo: dc output, humps all on one side of the axis, because the connection swaps every half turn.' },
      { n: 5, f: 'Coil positions for maximum and zero induced p.d.', b: 'Maximum: plane of the coil parallel to the field lines.\nZero: plane of the coil at right angles to the field lines.' },
      { n: 6, f: 'A generator\'s output has a period of 0.10 s. Frequency and rotations per minute?', b: 'f = 1 ÷ 0.10 = 10 Hz, so a simple coil turns 10 times a second: 600 rotations per minute.' },
      { n: 7, f: 'How does a power station generator produce electricity?', b: 'Fuel heats water to steam (or moving water or wind is used) to turn a turbine. The turbine turns coils between magnets, so the coils cut field lines and a p.d. is induced.' },
    ]),
    ...sub(T6, 'electricity-transmission-and-distribution', '3.6.2', [
      { n: 1, f: 'The chain from power station to consumer', b: 'Power station → step-up transformer → transmission cables → step-down transformer(s) → consumers.' },
      { n: 2, f: 'Why is electricity transmitted at a high voltage?', b: 'P = V × I, so for the same power a higher voltage means a lower current. A lower current heats the cables less, so less energy is wasted and the system is more efficient.' },
      { n: 3, f: 'How does a transformer work?', b: 'Alternating current in the primary coil gives a changing magnetic field in the soft iron core. The field passes through the secondary coil and induces a changing p.d. across it. It needs ac (a changing current).' },
      { n: 4, f: 'Step-up vs step-down transformers', b: 'Step-up: Vs > Vp, more turns on the secondary; used before the transmission lines.\nStep-down: Vs < Vp, fewer secondary turns; used to give a safer voltage for local consumers.' },
      { n: 5, f: 'Turns ratio. Vp = 1500 V, np = 600, Vs = 75 V. Find ns.', b: 'Vp/Vs = np/ns, so ns = 600 × 75 ÷ 1500 = 30 turns (step-down).' },
      { n: 6, f: 'A 100% efficient transformer gives 6.0 V at 2.0 A from a 12 V primary. Primary current?', b: 'Vp × Ip = Vs × Is: power = 6.0 × 2.0 = 12 W, so Ip = 12 ÷ 12 = 1.0 A.' },
      { n: 7, f: '2.7 MW is sent through a 3.0 Ω cable at 90 kV, then at 270 kV. Power lost each time?', b: 'I = P/V: 30 A, then 10 A. Loss = I²R: 30² × 3.0 = 2700 W, then 10² × 3.0 = 300 W. One third of the current gives one ninth of the loss.' },
      { n: 8, f: 'Switch mode transformers', b: 'Work at high frequency (often 50 kHz to 200 kHz), are much lighter and smaller than traditional 50 Hz transformers (e.g. phone chargers), and use very little power when on with no load.' },
    ]),
    ...sub(T6, 'using-electricity-in-the-home-oxfordaqa', '3.6.3', [
      { n: 1, f: 'Direct vs alternating current', b: 'dc always passes in the same direction (cells and batteries). ac repeatedly changes direction. Mains is ac with a set frequency and voltage.' },
      { n: 2, f: 'An ac trace peaks 2.5 divisions high at 4 V/div; one cycle is 4 divisions at 5 ms/div. Peak p.d. and frequency?', b: 'Peak p.d. = 2.5 × 4 = 10 V. Period = 4 × 5 = 20 ms = 0.020 s, so f = 1/T = 50 Hz.' },
      { n: 3, f: 'The live wire touches the metal case of an earthed appliance. What happens?', b: 'A large current flows through the earth wire, the fuse melts (or circuit breaker trips) in the live wire, and the appliance is disconnected so the case is no longer live.' },
      { n: 4, f: 'Fuse vs circuit breaker', b: 'Both go in the live wire and disconnect the circuit when the current is too great. A fuse overheats, melts and must be replaced. A circuit breaker trips, works much faster and can be reset.' },
      { n: 5, f: 'Double-insulated appliance', b: 'Live parts are kept out of reach inside a non-conducting case, so it has no earth wire connection.' },
      { n: 6, f: 'A 690 W iron runs on 230 V. Choose a fuse from 3 A, 5 A and 13 A.', b: 'I = P/V = 690 ÷ 230 = 3.0 A. A 3 A fuse could melt in normal use, so choose 5 A (the smallest rating above the current).' },
    ]),
    ...sub(T6, 'the-motor-effect-oxfordaqa-igcse', '3.6.4', [
      { n: 1, f: 'The motor effect, and when the force is zero', b: 'A current-carrying conductor in a magnetic field, cutting the field lines, experiences a force. There is no force when it is parallel to the field; the force is largest at 90°.' },
      { n: 2, f: 'Three ways to increase the force on a current-carrying conductor in a field', b: 'A stronger magnetic field, a larger current, a longer length of conductor in the field.' },
      { n: 3, f: 'How is the direction of the motor-effect force reversed?', b: 'Reverse either the current or the field. Reversing both leaves the force direction unchanged.' },
      { n: 4, f: 'Fleming\'s left-hand rule', b: 'Thumb and first two fingers at right angles. First finger: field (north to south). Second finger: current (positive to negative). Thumb: force (motion).' },
      { n: 5, f: 'The field points to the left and the current flows up the page. Direction of the force?', b: 'Out of the page, towards you (first finger left, second finger up, thumb out).' },
      { n: 6, f: 'Why does a current-carrying coil in a magnetic field rotate?', b: 'The two long sides carry currents in opposite directions, so the forces on them are opposite, giving a turning effect. More current, a stronger magnet or more turns increase it.' },
    ]),
    ...sub(T6, 'transferring-electrical-energy-oxfordaqa', '3.6.5', [
      { n: 1, f: 'Main energy transfer in a kettle, a motor, a loudspeaker and a battery charger', b: 'Kettle: electrical → thermal.\nMotor: electrical → kinetic.\nLoudspeaker: electrical → sound.\nCharger: electrical → chemical.' },
      { n: 2, f: 'Power equations. A hob ring takes 4.0 A from 230 V:', b: 'P = E/t and P = I × V. P = 4.0 × 230 = 920 W.' },
      { n: 3, f: 'The 920 W hob runs for 300 s at 4.0 A and 230 V. Energy, found two ways?', b: 'E = P × t = 920 × 300 = 276 000 J.\nQ = It = 1200 C, and E = Q × V = 1200 × 230 = 276 000 J.' },
      { n: 4, f: 'Kilowatt-hour', b: 'The energy transferred by a 1 kW appliance running for 1 hour. kWh measure energy; watts measure power.' },
      { n: 5, f: 'A 0.50 kW heater runs for 4.0 h at 31 p per kWh. Cost?', b: 'Energy = 0.50 × 4.0 = 2.0 kWh. Cost = 2.0 × 31 = 62 p.' },
      { n: 6, f: 'A meter reads 10230, later 10265, at 30 p per kWh. Cost?', b: 'Units used = 10265 − 10230 = 35 kWh. Cost = 35 × 30 = 1050 p = £10.50.' },
    ]),

    // 7 Nuclear physics
    ...sub(T7, 'atomic-structure-oxfordaqa-igcse', '3.7.1', [
      { n: 1, f: 'Size of an atom and its nucleus', b: 'Atom radius about 10⁻¹⁰ m. The nucleus is far smaller (about 10⁻¹⁵ m) and holds almost all the mass. Electrons surround it at various distances.' },
      { n: 2, f: 'Relative charge and mass of a proton, neutron and electron', b: 'Proton: +1, mass 1.\nNeutron: 0, mass 1.\nElectron: −1, very small mass.' },
      { n: 3, f: 'Atomic number and mass number. How many neutrons in ⁶⁰₂₇Co?', b: 'Atomic (proton) number: protons. Mass number: protons + neutrons.\n⁶⁰₂₇Co: 60 − 27 = 33 neutrons.' },
      { n: 4, f: 'Isotopes', b: 'Atoms with equal atomic numbers but different mass numbers, because their neutron numbers differ. Same chemistry, as they have the same number of electrons.' },
      { n: 5, f: 'An atom of ⁵⁶₂₆Fe has 24 electrons. Its charge?', b: 'It is an ion. Charge = protons − electrons = 26 − 24 = +2. (Losing electrons gives a positive ion; the nucleus does not change.)' },
      { n: 6, f: 'Alpha scattering: three observations and conclusions', b: 'Most go straight on: most of the atom is empty space.\nSome slightly deflected: repelled by a positive nucleus.\nVery few bounce back: a tiny nucleus holds the charge and the mass.' },
    ]),
    ...sub(T7, 'ionizing-radiation-from-the-nucleus', '3.7.2', [
      { n: 1, f: 'Radioactive decay: what happens, and what affects it', b: 'An unstable nucleus emits alpha, beta, a neutron or gamma and becomes more stable. It is random and is not affected by chemical or physical conditions such as temperature and pressure.' },
      { n: 2, f: 'What are alpha, beta and gamma radiation?', b: 'Alpha: 2 protons + 2 neutrons (a helium nucleus), charge +2.\nBeta: a fast electron from the nucleus (a neutron changes to a proton), charge −1.\nGamma: electromagnetic radiation from the nucleus, no charge.' },
      { n: 3, f: 'Ionising power, what stops each radiation, and range in air', b: 'Alpha: strongest; stopped by paper or skin; a few cm.\nBeta: moderate; a few mm of aluminium; tens of cm to a few m.\nGamma: weakest; reduced by thick lead or concrete; very long range.' },
      { n: 4, f: 'Ionising radiation, and why strong ionisers have a short range', b: 'Radiation that can remove electrons from atoms, making ions. A strongly ionising radiation uses up its energy quickly, so its range is short.' },
      { n: 5, f: 'Changes in mass and atomic number. ²³⁰₉₀Th emits an alpha particle:', b: 'Alpha: −4, −2. Beta: no change, +1. Gamma: no change.\n²³⁰₉₀Th → a nucleus with A = 226, Z = 88 (+ ⁴₂He).' },
      { n: 6, f: '2130 counts in 3 minutes with a source; background 30 per minute. Corrected count rate?', b: '2130 ÷ 3 = 710 per minute. Corrected = 710 − 30 = 680 per minute. Background comes from the environment (e.g. radon from rocks), space and devices such as X-ray machines.' },
      { n: 7, f: 'Half-life (two definitions)', b: 'The average time for the number of nuclei of the isotope in a sample to halve, or the time for the count rate from it to fall to half.' },
      { n: 8, f: '3200 nuclei, half-life 2 h. How many remain after 6 h?', b: '6 ÷ 2 = 3 half-lives: 3200 ÷ 8 = 400 nuclei.' },
      { n: 9, f: 'A detector reads 150 counts/min (background 18). Half-life 4 min. Reading after 8 min?', b: 'Corrected 132; two half-lives: 132 ÷ 4 = 33; add background back: 51 counts per minute.' },
      { n: 10, f: 'Contamination vs irradiation', b: 'Contamination: unwanted radioactive atoms on or in a material; it stays radioactive until they are removed or decay.\nIrradiation: exposure to radiation; the object does not become radioactive.' },
      { n: 11, f: 'Why is an alpha source more dangerous inside the body than outside?', b: 'Inside, alpha is absorbed close by and is strongly ionising, so it is very damaging. Outside, it is stopped by the skin or air.' },
      { n: 12, f: 'Choosing an isotope by half-life', b: 'Very short half-life: high activity at first, gone quickly (suits a medical tracer). Very long half-life: low activity lasting a very long time (suits a long-lived source, but needs safe storage).' },
      { n: 13, f: 'Paper makes little difference to a count, but aluminium cuts it sharply. What is emitted?', b: 'Beta radiation is present (no significant alpha). If aluminium made little difference and thick lead cut the rate, it would be gamma.' },
    ]),
    ...sub(T7, 'nuclear-fission-oxfordaqa-igcse', '3.7.3', [
      { n: 1, f: 'Fissionable substances used in reactors', b: 'Uranium-235 and plutonium-239. Most reactors use uranium-235.' },
      { n: 2, f: 'Describe the fission of a uranium-235 nucleus', b: 'It absorbs a neutron, becomes unstable and splits into two smaller nuclei, releasing two or three neutrons and energy (much more than a chemical reaction of similar mass).' },
      { n: 3, f: 'Chain reaction: what happens when more than, exactly, or less than one neutron per fission causes another?', b: 'More than 1: fissions grow rapidly.\nExactly 1: steady rate (normal reactor running).\nLess than 1: the reaction dies away.' },
      { n: 4, f: 'What do control rods do?', b: 'They absorb neutrons so that on average only one neutron per fission causes another. Lowering them slows the reaction; raising them lets it speed up.' },
      { n: 5, f: 'Why is nuclear waste a problem?', b: 'It is radioactive and may stay so for a long time, so its disposal must be managed carefully. This can influence whether nuclear power is used.' },
    ]),
    ...sub(T7, 'nuclear-fusion-oxfordaqa-igcse', '3.7.4', [
      { n: 1, f: 'Nuclear fusion', b: 'Two light nuclei join to form a heavier nucleus. Some of the mass of the smaller nuclei is converted into energy.' },
      { n: 2, f: 'Why does fusion need very high temperature and pressure?', b: 'Both nuclei are positive and repel. High temperature makes them move fast and high pressure keeps them close, so the repulsion is overcome and they can fuse.' },
      { n: 3, f: 'Where does fusion release energy naturally?', b: 'In stars.' },
      { n: 4, f: 'Fission vs fusion', b: 'Fission: a large nucleus splits, after absorbing a neutron; used in reactors.\nFusion: light nuclei join, once repulsion is overcome; happens in stars.' },
    ]),

    // 8 Space physics
    ...sub(T8, 'life-cycle-of-a-star', '3.8.1', [
      { n: 1, f: 'How does a star form?', b: 'Gravity pulls clouds of dust and gas (mainly hydrogen and helium) together; the material gets denser and hotter until hydrogen nuclei fuse. Smaller masses can become planets.' },
      { n: 2, f: 'Why is a main sequence star stable?', b: 'Hydrogen nuclei fuse to helium in the core. The inward pull of gravity is balanced by the outward push of the very hot gas, so the size stays steady. Fusion has not stopped.' },
      { n: 3, f: 'How does a star\'s mass affect its core and lifetime?', b: 'More mass: stronger gravitational squeeze, so a hotter, denser core that fuses faster and makes heavier nuclei. It uses its fuel faster and has a shorter life.' },
      { n: 4, f: 'Life cycle of a smaller star like the Sun', b: 'Main sequence → red giant (expands, sheds outer layers) → white dwarf (exposed core) → black dwarf (cooled white dwarf).' },
      { n: 5, f: 'Life cycle of a larger star', b: 'Main sequence → red supergiant → supernova → neutron star or black hole (which one depends on mass).' },
      { n: 6, f: 'Where do the elements come from?', b: 'Fusion in stars makes helium, then heavier nuclei. Elements heavier than iron form in a supernova, and the explosion distributes the elements through the universe.' },
    ]),
    ...sub(T8, 'solar-system-and-orbital-motion-oxfordaqa', '3.8.2', [
      { n: 1, f: 'What orbits the Sun, and the planets in order', b: 'Eight planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), asteroids, dwarf planets and comets. Moons orbit planets.' },
      { n: 2, f: 'Our place in the universe', b: 'The Sun is a medium-sized star, one of thousands of millions in the Milky Way. The universe has thousands of millions of galaxies.' },
      { n: 3, f: 'Natural vs artificial satellites', b: 'Natural: formed naturally and orbits a planet (e.g. the Moon).\nArtificial: built and launched, usually orbiting the Earth (e.g. weather or communications satellites).' },
      { n: 4, f: 'Geostationary orbit: features and use', b: 'Above the equator, about 36 000 km up, period 24 hours, moving the same way as the Earth spins, so it stays over one point. Used for communications and TV.' },
      { n: 5, f: 'Low polar orbit: features and use', b: 'A few hundred km up, passing over both poles, period about an hour and a half; the Earth turns beneath it. Used for weather, mapping and whole-surface coverage.' },
      { n: 6, f: 'Why is a body in a circular orbit accelerating at constant speed?', b: 'Gravity provides a centripetal force towards the centre, at right angles to the motion. Its direction changes, so its velocity (a vector) changes: that is acceleration, with no change of speed.' },
      { n: 7, f: 'How does orbital radius affect orbital speed and period?', b: 'A larger radius: weaker gravity, lower speed, longer period. A smaller radius: higher speed, shorter period. Each radius has one stable speed.' },
      { n: 8, f: 'A satellite orbits at radius 8.4 × 10⁶ m, taking 7660 s. Orbital speed?', b: 'v = 2πr/T = 2π × 8.4 × 10⁶ ÷ 7660 = 6890 m/s. Use the radius from the Earth\'s centre.' },
    ]),
    ...sub(T8, 'red-shift-and-the-expanding-universe', '3.8.3', [
      { n: 1, f: 'Doppler effect', b: 'A source moving away gives a longer observed wavelength and lower frequency; moving towards, a shorter wavelength and higher frequency. It applies to sound, light and microwaves.' },
      { n: 2, f: 'Red shift, and how it changes with distance', b: 'Light from most distant galaxies has a longer wavelength than expected. The further the galaxy, the bigger the shift, so more distant galaxies are moving away faster.' },
      { n: 3, f: 'How does red shift support the Big Bang model?', b: 'It suggests space itself is expanding. If so, everything was once closer together, supporting the idea that the universe began from one tiny point.' },
      { n: 4, f: 'Cosmic microwave background radiation (CMBR)', b: 'Microwave radiation filling the universe, left over from soon after the universe began. Currently only the Big Bang theory explains it. (Red shift shows expansion; CMBR shows a hot early universe.)' },
      { n: 5, f: 'Approximate age of the universe', b: 'About 14 thousand million years (1.4 × 10¹⁰ years).' },
      { n: 6, f: 'A 486.0 nm line is seen at 487.2 nm in galaxy A and 489.9 nm in galaxy B. Compare them.', b: 'Shifts of 1.2 nm and 3.9 nm; both are red shifts (longer wavelengths). B has the larger shift, so it is moving away faster and is probably further away.' },
    ]),
  ],
};
