/**
 * D-444 -- flashcards for Cambridge O Level Physics 5054 (2026-2028).
 *
 * Every topic itemises its x.y sub-topics, so card ids are `<subtopic number>-<n>`.
 * Ids are permanent (browser progress is keyed by them): add a new card with the
 * next unused n, never renumber. Topics 2-6 were itemised (2.1-6.2) on 2026-11-05;
 * their former topic-level cards (2-n to 6-n) moved to the matching sub-topic and
 * took new ids there.
 *
 * 5054 is not tiered, so no card is marked upper tier.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 5054); origin 'revision-notes'.
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

const DENS = 'measurement-and-density-revision-notes';
const FORCE = 'forces-and-motion-revision-notes';

const T1 = 'motion-forces-and-energy';

export const DECK_CAMBRIDGE_O_LEVEL_PHYSICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'o-level',
  subjectSlug: 'physics',
  syllabusCode: '5054',
  syllabusSeries: '2026-2028',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hassan', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Motion, forces and energy
    ...sub(T1, 'physical-quantities-and-measurement-techniques', '1.1', [
      { n: 1, f: 'Resolution of a metre rule and of a micrometer screw gauge', b: 'Metre rule: 1 mm.\nMicrometer screw gauge: 0.01 mm.' },
      { n: 2, f: 'How do you read a micrometer screw gauge?', b: 'Add the main scale reading (whole and half millimetres) to the thimble scale reading (hundredths of a millimetre) at the line level with the datum. Both scales are needed.' },
      { n: 3, f: 'Parallax error, and how to avoid it', b: 'An error from reading a scale at an angle. Look perpendicular to the scale (eye level with a meniscus, read at its bottom).' },
      { n: 4, f: 'A pendulum takes 18.4 s for 20 oscillations. Period? Why time 20?', b: 'Period = 18.4 ÷ 20 = 0.92 s.\nHuman reaction time (about 0.2 s) is a fixed error; spreading it over 20 swings cuts its effect on each period by a factor of 20.' },
      { n: 5, f: 'Scalars and vectors: classify distance, displacement, speed, velocity, acceleration', b: 'Scalars (size only): distance, speed.\nVectors (size and direction): displacement, velocity, acceleration.' },
      { n: 6, f: 'A runner completes one lap of a 400 m track. Distance travelled and displacement?', b: 'Distance = 400 m (total path length).\nDisplacement = 0 m (back at the start).' },
    ]),
    ...sub(T1, 'motion', '1.2', [
      { n: 1, f: 'Acceleration: definition and equation', b: 'Rate of change of velocity: a = (v − u)/t, in m/s². u = initial velocity, v = final velocity. A deceleration is a negative acceleration.' },
      { n: 2, f: 'A cyclist speeds up from 2 m/s to 8 m/s in 4 s. Acceleration?', b: 'a = (8 − 2) ÷ 4 = 1.5 m/s².' },
      { n: 3, f: 'Gradients of distance–time and speed–time graphs', b: 'Distance–time: gradient = speed.\nSpeed–time: gradient = acceleration.' },
      { n: 4, f: 'Uniform acceleration from rest to 10 m/s in 5 s, then 10 m/s for 8 s. Total distance?', b: 'Area under the speed–time graph: ½ × 5 × 10 = 25 m, plus 8 × 10 = 80 m. Total 105 m.' },
      { n: 5, f: 'How do objects fall without air resistance?', b: 'All fall with the same acceleration of free fall, g = 9.8 m/s², whatever their mass.' },
      { n: 6, f: 'Explain terminal velocity', b: 'As the object speeds up, drag increases until drag = weight. The resultant force is then zero, so the acceleration is zero and it falls at constant (terminal) velocity. It does not slow down.' },
      { n: 7, f: 'Is an object moving in a circle at constant speed accelerating?', b: 'Yes. Velocity is a vector and its direction keeps changing, so the velocity changes.' },
      { n: 8, f: 'Convert km/h to m/s', b: 'Divide by 3.6. For example, 72 km/h = 20 m/s.' },
    ]),
    ...sub(T1, 'mass-and-weight', '1.3', [
      { n: 1, f: 'Mass vs weight', b: 'Mass: amount of matter, in kg; does not change with location; measured with a balance.\nWeight: the force due to gravity, in N; changes with location; measured with a newtonmeter.' },
      { n: 2, f: 'Weight of a 60 kg astronaut on Earth (g = 9.8 N/kg) and on the Moon (g = 1.6 N/kg)?', b: 'Earth: 60 × 9.8 = 588 N.\nMoon: 60 × 1.6 = 96 N. The mass is 60 kg in both places.' },
      { n: 3, f: 'Gravitational field strength', b: 'Force per unit mass: g = W/m, in N/kg. About 9.8 N/kg on Earth. It is numerically equal to the acceleration of free fall in m/s².' },
      { n: 4, f: 'Gravitational field', b: 'The region around a mass in which another mass feels a force due to gravitational attraction.' },
      { n: 5, f: 'Inertia', b: 'The resistance of an object to a change in its state of rest or motion. It depends on mass only, not weight: a weightless object in space still has inertia.' },
    ]),
    ...sub(T1, 'density', '1.4', [
      { n: 1, f: 'Density: equation and units', b: 'ρ = m/V, in kg/m³ or g/cm³.\n1 g/cm³ = 1000 kg/m³. Water: 1 g/cm³.' },
      { n: 2, f: 'Density of a regular solid', b: 'Measure dimensions, calculate volume, weigh.', src: DENS },
      { n: 3, f: 'Density of an irregular solid', b: 'Weigh, then use a displacement can or measuring cylinder; volume = water displaced.', src: DENS },
      { n: 4, f: 'Density of a liquid', b: 'Weigh empty cylinder, add liquid, reweigh, subtract; read volume directly.', src: DENS },
      { n: 5, f: 'A 2 cm × 3 cm × 4 cm block has mass 96 g. Density? Does it float in water?', b: 'V = 24 cm³, ρ = 96 ÷ 24 = 4 g/cm³. It sinks: an object floats only if its density is less than the fluid\'s.' },
      { n: 6, f: 'Convert a volume from cm³ to m³', b: 'Divide by 1 000 000 (1 m³ = 10⁶ cm³).' },
    ]),
    ...sub(T1, 'forces', '1.5', [
      { n: 1, f: 'Newton\'s first law', b: 'An object stays at rest or at constant velocity unless acted on by a resultant force. Constant velocity means zero resultant force.', src: FORCE },
      { n: 2, f: 'Newton\'s second law', b: 'A resultant force produces an acceleration in its direction: F = ma.', src: FORCE },
      { n: 3, f: 'Newton\'s third law', b: 'If object A exerts a force on object B, then object B exerts an equal and opposite force on object A ("action and reaction"). The pair acts on two different objects.', src: FORCE },
      { n: 4, f: 'A book rests on a table. Are its weight and the table\'s push on it a third-law pair?', b: 'No. Both act on the book (and are different types of force), so they are a first-law balance. A third-law pair is the same type of force acting on two different bodies.' },
      { n: 5, f: 'A car has a driving force of 4000 N and drag of 1500 N. Resultant force?', b: '4000 − 1500 = 2500 N forward. The driving force is not the resultant.' },
      { n: 6, f: 'A 1500 kg car accelerates at 2 m/s². Resultant force?', b: 'F = ma = 1500 × 2 = 3000 N.' },
      { n: 7, f: 'Hooke\'s law', b: 'F = kx: extension x is proportional to load up to the limit of proportionality. k = spring constant (N/m), the gradient of a load–extension graph. Use extension, not total length.' },
      { n: 8, f: 'A spring of natural length 12 cm stretches to 18 cm under 3 N. Find k.', b: 'Extension = 0.06 m. k = F/x = 3 ÷ 0.06 = 50 N/m.' },
      { n: 9, f: 'Moment of a force', b: 'Moment = force × perpendicular distance from the pivot, in N m. It is zero if the force acts through the pivot.' },
      { n: 10, f: 'Principle of moments. 30 N acts 0.8 m left of a pivot; what force 0.5 m right balances it?', b: 'In equilibrium, sum of clockwise moments = sum of anticlockwise moments.\nF × 0.5 = 30 × 0.8 = 24 N m, so F = 48 N.' },
      { n: 11, f: 'Centre of gravity, and finding it for an irregular lamina', b: 'The point where the whole weight appears to act. Suspend the lamina freely, mark the vertical with a plumb line; repeat from a second point; the lines cross at the centre of gravity.' },
      { n: 12, f: 'What makes an object stable, and when does it topple?', b: 'A low centre of gravity and a wide base make it stable. It topples when the vertical line through its centre of gravity falls outside its base.' },
      { n: 13, f: 'Circular motion: how does the force needed change with speed, radius and mass?', b: 'A bigger force is needed for a higher speed, a smaller radius, or a larger mass. (Qualitative only: F = mv²/r is not required.)' },
      { n: 14, f: 'Stopping distance, and the effect of doubling speed', b: 'Stopping distance = thinking distance + braking distance. Doubling the speed doubles the thinking distance and quadruples the braking distance.' },
    ]),
    ...sub(T1, 'momentum', '1.6', [
      { n: 1, f: 'Momentum and impulse', b: 'Momentum p = mv (kg m/s), a vector.\nImpulse = Ft = mv − mu, the change in momentum (N s).' },
      { n: 2, f: 'Principle of conservation of momentum', b: 'In a closed system with no external forces, total momentum before = total momentum after. It applies to all collisions and explosions.' },
      { n: 3, f: 'Elastic vs inelastic collisions', b: 'Momentum is conserved in both.\nElastic: kinetic energy is also conserved.\nInelastic: kinetic energy is not conserved (objects often stick together).' },
      { n: 4, f: 'A 2 kg trolley at 3 m/s hits a stationary 4 kg trolley and they move off together. Velocity?', b: 'Before: 2 × 3 = 6 kg m/s. After: 6v. So v = 1 m/s.' },
      { n: 5, f: 'A 5 kg object at rest explodes; a 2 kg piece moves at 6 m/s. Velocity of the 3 kg piece?', b: '0 = (2 × 6) + 3v, so v = −4 m/s: 4 m/s in the opposite direction.' },
      { n: 6, f: 'A 0.15 kg ball hits a wall at 12 m/s and rebounds at 8 m/s. Change in momentum?', b: 'Towards the wall positive: 0.15 × (−8) − 0.15 × 12 = −1.2 − 1.8 = −3.0 kg m/s (magnitude 3.0 N s). Not 0.6.' },
      { n: 7, f: 'How do airbags, crumple zones and seatbelts reduce injury?', b: 'They increase the time over which momentum changes. Since F = Δp/t, a longer time means a smaller force.' },
    ]),
    ...sub(T1, 'energy-work-and-power', '1.7', [
      { n: 1, f: 'Energy stores', b: 'Kinetic, gravitational potential, chemical, elastic (strain), nuclear, electrostatic, internal (thermal).' },
      { n: 2, f: 'Ways energy is transferred between stores', b: 'By forces (mechanical work), by electrical currents (electrical work), by heating, and by electromagnetic, sound and other waves.' },
      { n: 3, f: 'Kinetic energy of a 1500 kg car at 20 m/s', b: 'Ek = ½mv² = ½ × 1500 × 20² = 300 000 J.' },
      { n: 4, f: 'Change in gravitational potential energy when 5 kg is lifted 3 m (g = 9.8 N/kg)', b: 'ΔEp = mgΔh = 5 × 9.8 × 3 = 147 J.' },
      { n: 5, f: 'Work done: equation and condition', b: 'W = F × d, where d is the distance moved in the direction of the force. Work done = energy transferred (J).' },
      { n: 6, f: 'Does a waiter carrying a tray horizontally at constant speed do work against gravity?', b: 'No. The force on the tray is upward, perpendicular to the horizontal motion.' },
      { n: 7, f: 'Power. A motor does 6000 J of work in 15 s: power?', b: 'P = W/t = ΔE/t (watts, W = J/s).\n6000 ÷ 15 = 400 W.' },
      { n: 8, f: 'A 2 kg ball is dropped 5 m (no air resistance, g = 9.8 m/s²). Landing speed?', b: 'mgh = ½mv², so v = √(2gh) = √(2 × 9.8 × 5) = √98 ≈ 9.9 m/s. Mass cancels.' },
      { n: 9, f: 'Efficiency. A motor uses 500 J and does 350 J of useful work: efficiency?', b: 'Efficiency = (useful energy out ÷ total energy in) × 100% (or the same with power).\n350 ÷ 500 × 100 = 70%. The other 150 J is dissipated, usually as thermal energy.' },
      { n: 10, f: 'Renewable and non-renewable energy resources', b: 'Non-renewable (finite): coal, oil, natural gas, nuclear fuel.\nRenewable: solar, wind, hydroelectric, tidal, wave, geothermal, biofuels.' },
      { n: 11, f: 'How do most power stations (including biofuel) generate electricity?', b: 'Burning fuel (or nuclear fission) heats water in a boiler to steam; the steam turns a turbine, which drives a generator. Wind and hydroelectric turn the turbine directly.' },
      { n: 12, f: 'Which three energy resources do not come from the Sun?', b: 'Nuclear (mined fuel), geothermal (heat from radioactive decay inside the Earth) and tidal (mainly the Moon\'s gravity).' },
      { n: 13, f: 'The three factors the syllabus uses to compare energy resources', b: 'Whether it is renewable, when or whether it is available, and its environmental impact. (Not cost, reliability or public opinion.)' },
    ]),
    ...sub(T1, 'pressure', '1.8', [
      { n: 1, f: 'Pressure from a force', b: 'p = F/A, in pascals: 1 Pa = 1 N/m². The same force on a smaller area gives a greater pressure (knives, drawing pins); a large area gives a low pressure (skis, tractor tyres).' },
      { n: 2, f: 'A 600 N person stands on one foot of area 0.015 m². Pressure?', b: 'p = 600 ÷ 0.015 = 40 000 Pa.' },
      { n: 3, f: 'Pressure in a liquid', b: 'p = ρgh, where h is the depth. It increases with depth and density, acts equally in all directions, and does not depend on the container\'s shape or width.' },
      { n: 4, f: 'Water is 2.5 m deep (ρ = 1000 kg/m³, g = 9.8 N/kg). Pressure due to the water at the bottom?', b: 'p = 1000 × 9.8 × 2.5 = 24 500 Pa. Adding atmospheric pressure (about 100 000 Pa) gives the total, 124 500 Pa.' },
      { n: 5, f: 'Why are dam walls thicker at the base?', b: 'Pressure increases with depth, so the force on the wall is greatest at the bottom.' },
      { n: 6, f: 'Atmospheric pressure and the mercury barometer', b: 'Caused by the weight of air above; about 1 × 10⁵ Pa at sea level, less at altitude. It supports a mercury column of about 760 mm. Mercury is used because its high density keeps the column short (water would need over 10 m).' },
      { n: 7, f: 'What does a manometer measure?', b: 'The pressure of a gas supply: the difference in the two liquid levels of the U-tube gives the pressure above atmospheric.' },
    ]),

    // 2 Thermal physics
    ...sub('thermal-physics', 'kinetic-particle-model-of-matter', '2.1', [
      { n: 1, f: 'Particles in solids, liquids and gases: spacing and movement', b: 'Solid: close, regular, vibrate in place.\nLiquid: close, irregular, slide past each other.\nGas: far apart, random, fast with straight paths between collisions.' },
      { n: 2, f: 'Absolute zero, and converting °C to K. What is 25 °C in kelvin?', b: 'Absolute zero, −273 °C = 0 K, is the lowest possible temperature (particles have least kinetic energy). T = θ + 273, so 25 °C = 298 K.' },
      { n: 3, f: 'Explain why a sealed rigid can of gas has a higher pressure when warm', b: 'Gas pressure is the force per unit area from particles hitting the walls. Warmer particles move faster, so they hit the walls more often and with greater force.' },
      { n: 4, f: 'Gas at 90 kPa and 50 cm³ is compressed to 30 cm³ at constant temperature. New pressure?', b: 'p₁V₁ = p₂V₂ (fixed mass, constant temperature): p₂ = 90 × 50 ÷ 30 = 150 kPa.' },
    ]),
    ...sub('thermal-physics', 'thermal-properties-and-temperature', '2.2', [
      { n: 1, f: 'What happens to particles when a substance expands on heating? Which state expands most?', b: 'They move or vibrate more, so their average spacing increases; the particles do not get bigger. Gases expand most, then liquids, then solids.' },
      { n: 2, f: 'Specific heat capacity', b: 'The energy required per unit mass per unit temperature increase. c = ΔE/(mΔθ), in J/(kg °C).' },
      { n: 3, f: 'A heater warms 2.0 kg of water by 10 °C in 5.0 min (c = 4200 J/(kg °C)). Power, if no losses?', b: 'E = mcΔθ = 2.0 × 4200 × 10 = 84 000 J.\nP = 84 000 ÷ 300 = 280 W.' },
      { n: 4, f: 'Latent heat', b: 'The energy transferred for a substance to change state, at constant temperature. It overcomes the forces between particles, raising their potential energy, not their kinetic energy.' },
      { n: 5, f: 'Boiling vs evaporation', b: 'Boiling: one fixed temperature, throughout the liquid, bubbles, fast.\nEvaporation: any temperature, surface only, no bubbles, slow.' },
      { n: 6, f: 'Why does evaporation cool a liquid, and what makes it faster?', b: 'Only the fastest particles leave the surface, so the remaining liquid has a lower average kinetic energy. Faster with higher temperature, larger surface area and moving air.' },
    ]),
    ...sub('thermal-physics', 'transfer-of-thermal-energy', '2.3', [
      { n: 1, f: 'Conduction vs convection', b: 'Conduction: energy passes between neighbouring particles that stay in place (lattice vibrations; free electrons in metals). Best in solids.\nConvection: the heated fluid itself moves; warm, less dense fluid rises.' },
      { n: 2, f: 'Thermal radiation: what it is, and the best and worst surfaces', b: 'Infrared electromagnetic waves; needs no medium. Dull black: best emitter and absorber. Shiny silver or white: worst emitter and absorber, best reflector.' },
      { n: 3, f: 'What does the rate of emission of infrared radiation from a surface depend on?', b: 'Its surface temperature (a hotter surface emits more), its surface area (a larger area emits more), and its colour and texture (dull black emits most).' },
      { n: 4, f: 'Explain a metal pan with a plastic handle, and a heater that warms a whole room', b: 'The metal base is a good conductor, so energy passes quickly to the food; the plastic handle is a poor conductor, so it stays cool to hold.\nThe heater warms nearby air, which becomes less dense and rises; cooler, denser air sinks to replace it, setting up a convection current.' },
      { n: 5, f: 'How does thermal insulation in buildings reduce energy transfer?', b: 'Materials such as loft insulation, cavity-wall foam and double glazing trap air, which is a poor conductor, and stop it moving, so conduction and convection are reduced.' },
    ]),

    // 3 Waves
    ...sub('waves', 'general-properties-of-waves', '3.1', [
      { n: 1, f: 'Transverse vs longitudinal waves, with examples', b: 'Transverse: vibration at right angles to the energy transfer (electromagnetic waves, water waves, seismic S-waves).\nLongitudinal: vibration parallel to it, with compressions and rarefactions (sound, seismic P-waves).' },
      { n: 2, f: 'Wave speed and period. Waves of 12 Hz have λ = 0.25 m: speed?', b: 'v = fλ and T = 1/f.\nv = 12 × 0.25 = 3.0 m/s.' },
      { n: 3, f: 'What happens to speed, wavelength and frequency when a wave refracts?', b: 'Speed and wavelength change; frequency stays the same. Entering a slower medium the ray bends towards the normal.' },
      { n: 4, f: 'When is diffraction through a gap greatest?', b: 'When the gap is about one wavelength wide. A much wider gap gives little spreading; a longer wavelength spreads more.' },
    ]),
    ...sub('waves', 'light', '3.2', [
      { n: 1, f: 'Plane mirror: law of reflection and the image', b: 'Angle of incidence = angle of reflection (from the normal). The image is the same size, as far behind the mirror as the object is in front, and virtual.' },
      { n: 2, f: 'Refractive index and critical angle. Find c for glass with n = 1.5.', b: 'n = sin i / sin r (i in air). sin c = 1/n = 0.667, so c = 41.8°.' },
      { n: 3, f: 'Two conditions for total internal reflection, and two advantages of optical fibres', b: 'Light travels from the more dense to the less dense medium, and the angle of incidence is greater than the critical angle.\nFibres carry a large amount of information and avoid electrical interference.' },
      { n: 4, f: 'Converging lens images: object beyond 2F, between F and 2F, inside F', b: 'Beyond 2F: inverted, real, diminished.\nBetween F and 2F: inverted, real, magnified.\nInside F: upright, virtual, magnified (magnifying glass).' },
    ]),
    ...sub('waves', 'electromagnetic-spectrum', '3.3', [
      { n: 1, f: 'Electromagnetic spectrum order and speed', b: 'Increasing frequency: radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma rays. All travel at 3.0 × 10⁸ m/s in a vacuum.' },
      { n: 2, f: 'Which electromagnetic waves are ionising, and what harm do they do?', b: 'Ultraviolet (skin cancer, cataracts), X-rays and gamma rays (cell mutation, cancer). Microwaves and infrared cause heating of tissue and burns.' },
      { n: 3, f: 'Uses of radio waves, microwaves and infrared', b: 'Radio: radio and television communications, astronomy.\nMicrowaves: satellite television, mobile phones, Bluetooth, microwave ovens.\nInfrared: remote controllers, intruder alarms, thermal imaging, optical fibres, household appliances such as toasters.' },
      { n: 4, f: 'Uses of visible light, ultraviolet, X-rays and gamma rays', b: 'Visible: vision and photography.\nUltraviolet: security marking, detecting forged bank notes, sterilising water.\nX-rays: medical imaging, security scanners, detecting cracks in metal.\nGamma: killing cancer cells, sterilising food and medical equipment.' },
    ]),
    ...sub('waves', 'sound', '3.4', [
      { n: 1, f: 'Sound: nature, audible range, speed in air, ultrasound', b: 'Longitudinal; cannot travel in a vacuum. Audible range 20 Hz to 20 000 Hz. Speed in air about 330–350 m/s (faster in liquids, faster still in solids). Ultrasound: above 20 kHz.' },
      { n: 2, f: 'A sonar pulse returns after 0.40 s; sound travels at 1500 m/s in water. Depth?', b: 'distance = v × t ÷ 2 = 1500 × 0.40 ÷ 2 = 300 m. Halve because the pulse goes there and back.' },
      { n: 3, f: 'How do amplitude and frequency affect a sound?', b: 'A larger amplitude gives a louder sound. A higher frequency gives a higher pitch.' },
      { n: 4, f: 'Why can sound not travel through a vacuum, and how is this shown?', b: 'Sound is passed on by vibrating particles, and a vacuum has none. A ringing electric bell in a jar goes quiet as the air is pumped out, although the bell can still be seen vibrating.' },
      { n: 5, f: 'A student stands 85 m from a wall and hears the echo of a clap 0.50 s later. Speed of sound?', b: 'The sound travels to the wall and back: 2 × 85 = 170 m. v = 170 ÷ 0.50 = 340 m/s.' },
    ]),

    // 4 Electricity and magnetism
    ...sub('electricity-and-magnetism', 'simple-magnetism-and-magnetic-fields', '4.1', [
      { n: 1, f: 'Magnets: the test for a magnet, soft iron vs steel, and field direction', b: 'Only repulsion proves a magnet. Soft iron: temporary magnet (easily magnetised and demagnetised); steel: permanent. Field direction = force on an N pole; lines run N to S outside the magnet.' },
      { n: 2, f: 'Induced magnetism', b: 'A magnetic material (iron, steel, nickel, cobalt) placed near a magnet becomes a magnet itself, with the end nearest the magnet an opposite pole, so it is attracted.' },
      { n: 3, f: 'How are magnetic field lines plotted, and what does their spacing show?', b: 'With a plotting compass (its N end points along the field direction) or with iron filings. Lines closer together show a stronger field, so the field is strongest near the poles.' },
      { n: 4, f: 'Uses of permanent magnets and electromagnets', b: 'Permanent: compasses, loudspeakers, motors, fridge door seals.\nElectromagnets (can be switched off and their strength changed): relays, electric bells, scrapyard cranes.' },
    ]),
    ...sub('electricity-and-magnetism', 'electrical-quantities', '4.2', [
      { n: 1, f: 'Charging by friction', b: 'Only electrons move. The object that gains electrons becomes negative; the one that loses them becomes positive. Like charges repel; unlike attract.' },
      { n: 2, f: 'Current and charge. 540 C passes a point in 30 minutes: current?', b: 'I = Q/t. t = 1800 s, so I = 540 ÷ 1800 = 0.30 A.' },
      { n: 3, f: 'e.m.f. vs p.d.', b: 'e.m.f.: work done by a source per unit charge, E = W/Q.\np.d.: work done by unit charge passing through a component, V = W/Q. Both in volts (J/C).' },
      { n: 4, f: 'Ohm\'s law and the I–V graphs of a resistor, a filament lamp and a diode', b: 'Current is proportional to p.d. at constant temperature (resistor: straight line through origin). Filament lamp: curve flattening (hot filament, higher R). Diode: conducts one way only.' },
    ]),
    ...sub('electricity-and-magnetism', 'electric-circuits', '4.3', [
      { n: 1, f: 'Combined resistance of 6.0 Ω and 12 Ω in parallel, and in series', b: 'Parallel: R = (R₁ × R₂) ÷ (R₁ + R₂) = 72 ÷ 18 = 4.0 Ω.\nSeries: 6.0 + 12 = 18 Ω.' },
      { n: 2, f: 'A thermistor in series with a fixed resistor warms up. What happens to the p.d.s?', b: 'The thermistor\'s resistance falls, so its p.d. falls and the fixed resistor\'s p.d. rises. (The larger resistance takes the larger share.)' },
      { n: 3, f: 'Current and p.d. rules for series and parallel circuits', b: 'Series: the current is the same everywhere; the p.d.s across the components add up to the supply p.d.\nParallel: the currents into a junction equal the currents out; each branch has the same p.d.' },
      { n: 4, f: 'A 2.0 kΩ and a 3.0 kΩ resistor form a potential divider across 10 V. Find the p.d. across each.', b: 'The p.d. divides in the ratio of the resistances (R₁/R₂ = V₁/V₂): 2.0 kΩ gets 10 × 2/5 = 4.0 V and 3.0 kΩ gets 6.0 V.' },
      { n: 5, f: 'How does a light-dependent resistor (LDR) act as a sensor?', b: 'Its resistance falls as the light gets brighter. In a potential divider its share of the p.d. changes with light level, which can switch a circuit, such as a lamp that comes on when it gets dark.' },
    ]),
    ...sub('electricity-and-magnetism', 'practical-electricity', '4.4', [
      { n: 1, f: 'Where do the fuse and switch go, and why is a metal case earthed?', b: 'Both in the live wire, so the appliance is disconnected from the live supply when off or after a fault. If live touches an earthed case, a large current flows to earth and the fuse melts.' },
      { n: 2, f: 'A 2.4 kW heater runs for 3.0 h at 15 cents per kW h. Cost?', b: 'Energy = 2.4 kW × 3.0 h = 7.2 kW h. Cost = 7.2 × 15 = 108 cents.' },
      { n: 3, f: 'A kettle takes 10 A from a 230 V supply for 2.0 minutes. Power and energy?', b: 'P = IV = 10 × 230 = 2300 W.\nE = IVt = 10 × 230 × 120 = 276 000 J.' },
      { n: 4, f: 'Hazards of using mains electricity', b: 'Damaged insulation, overheating cables, damp conditions, and excess current from overloading plugs, extension leads and sockets.' },
      { n: 5, f: 'Advantages of connecting lamps in parallel in a lighting circuit', b: 'Each lamp gets the full supply p.d., each can be switched on and off independently, and if one fails the others stay lit.' },
    ]),
    ...sub('electricity-and-magnetism', 'electromagnetic-effects', '4.5', [
      { n: 1, f: 'Electromagnetic induction and Lenz\'s law', b: 'An e.m.f. is induced when a magnet and coil move relative to each other; larger with faster cutting of field lines and more turns. Lenz\'s law: the induced current opposes the change that causes it.' },
      { n: 2, f: 'Fleming\'s left-hand rule, and how to increase a motor\'s turning effect', b: 'First finger = field, second finger = current, thumb = force. More turns, a larger current or a stronger field increase the turning effect.' },
      { n: 3, f: 'Transformer: 2300 primary turns on 230 V, 150 secondary turns. Output p.d.?', b: 'Vp/Vs = Np/Ns, so Vs = 230 × 150 ÷ 2300 = 15 V (step-down). Transformers need a.c.' },
      { n: 4, f: 'The a.c. generator: slip rings, and coil position against e.m.f.', b: 'A coil rotates in a magnetic field; slip rings and brushes connect it to the circuit. The e.m.f. is a peak or trough when the coil is parallel to the field and zero when it is perpendicular. Faster rotation gives higher peaks and a shorter period.' },
      { n: 5, f: 'How do a relay and a loudspeaker use the magnetic effect of a current?', b: 'Relay: a small current in an electromagnet closes a switch in a separate high-current circuit. Loudspeaker: a varying current in a coil in a permanent magnet\'s field makes the coil and cone vibrate.' },
      { n: 6, f: 'Why is electricity transmitted at high voltage?', b: 'For the same power, a higher voltage means a smaller current, so less power is lost heating the cables (and thinner cables can be used).' },
    ]),
    ...sub('electricity-and-magnetism', 'uses-of-an-oscilloscope', '4.6', [
      { n: 1, f: 'What does an oscilloscope show, and what do the Y-gain and timebase set?', b: 'It displays a waveform as a trace. The Y-gain sets the p.d. per vertical division; the timebase sets the time per horizontal division.' },
      { n: 2, f: 'Y-gain 5.0 V/div, timebase 2.0 ms/div. The peak is 2.4 divisions above the centre and one cycle spans 5.0 divisions. Find the peak p.d., period and frequency.', b: 'Peak p.d. = 2.4 × 5.0 = 12 V.\nPeriod = 5.0 × 2.0 = 10 ms = 0.010 s.\nFrequency = 1 ÷ 0.010 = 100 Hz.' },
      { n: 3, f: 'On an oscilloscope trace, what shows a louder note and what shows a higher note?', b: 'Louder: a taller trace (larger amplitude). Higher pitch: more complete waves across the screen (shorter period, higher frequency).' },
    ]),

    // 5 Nuclear physics
    ...sub('nuclear-physics', 'the-nuclear-model-of-the-atom', '5.1', [
      { n: 1, f: 'Proton number, nucleon number and isotopes', b: 'Z = number of protons; A = protons + neutrons; neutrons = A − Z.\nIsotopes: same element (same Z), different A, so different numbers of neutrons.' },
      { n: 2, f: 'Alpha scattering: what each observation shows', b: 'Most pass straight through: mostly empty space.\nA few deflect a lot: a small, positive nucleus holding most of the mass.\nA very few bounce back: repelled by a heavy, positive nucleus.' },
      { n: 3, f: 'Structure of the atom', b: 'A small, positively charged nucleus of protons (positive) and neutrons (no charge), with negatively charged electrons in orbit around it.' },
      { n: 4, f: 'How do atoms form ions?', b: 'A positive ion forms when an atom loses electrons; a negative ion forms when it gains electrons. The nucleus does not change.' },
      { n: 5, f: 'A nuclide is written ²³⁵₉₂U. How many protons, neutrons and nucleons?', b: 'Proton number Z = 92 and nucleon number A = 235, so neutrons = 235 − 92 = 143 and there are 235 nucleons.' },
    ]),
    ...sub('nuclear-physics', 'radioactivity', '5.2', [
      { n: 1, f: 'Alpha, beta and gamma: nature and penetration', b: 'α: helium nucleus (2p + 2n), stopped by paper or a few cm of air.\nβ: electron from the nucleus, stopped by a few mm of aluminium.\nγ: very high frequency EM wave, reduced by thick lead or concrete.' },
      { n: 2, f: 'Ionising power, and deflection in an electric field', b: 'Ionising: α strongest, β medium, γ weakest (the reverse of penetrating power).\nElectric field: α bends slightly to the negative plate, β bends a lot to the positive plate, γ is not deflected.' },
      { n: 3, f: 'Background radiation sources, and corrected count rate', b: 'Cosmic rays, radon gas, rocks and buildings, food and drink.\nCorrected count rate = count rate with the source − background count rate.' },
      { n: 4, f: 'Changes in A and Z for α, β and γ emission', b: 'α: A − 4, Z − 2.\nβ: A unchanged, Z + 1.\nγ: no change.\ne.g. ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He.' },
      { n: 5, f: 'Half-life. 720 counts/min, half-life 5 min: count rate after 20 min?', b: 'The time for half the nuclei of an isotope in any sample to decay (decay is random).\n20 ÷ 5 = 4 half-lives: 720 ÷ 16 = 45 counts/min.' },
      { n: 6, f: 'Fission of uranium-235, and a chain reaction', b: 'U-235 absorbs a neutron and splits into two daughter nuclei, releasing energy and two or more neutrons. In a chain reaction these neutrons cause further fissions.' },
      { n: 7, f: 'Jobs of the moderator, control rods and coolant in a reactor', b: 'Moderator: slows neutrons so they can be absorbed.\nControl rods: absorb neutrons (in to reduce power).\nCoolant: carries thermal energy out of the core to make steam.' },
      { n: 8, f: 'Carbon-14 dating: a sample has one quarter of the activity of living material. Age? (half-life 5730 years)', b: 'One quarter = two half-lives, so 2 × 5730 = 11 460 years. Living things keep a constant proportion of carbon-14; after death intake stops and it decays.' },
      { n: 9, f: 'Radiation for a smoke alarm, thin-sheet thickness control and a medical tracer', b: 'Smoke alarm: alpha (ionises air, easily stopped; long half-life).\nThin sheet: beta (partly absorbed).\nTracer: gamma (detected outside the body) with a short half-life.' },
      { n: 10, f: 'Effects of ionising radiation, and the three ways to reduce exposure', b: 'Cell death, mutations, cancer.\nReduce exposure time, increase distance (use tongs), use shielding (lead-lined containers).' },
    ]),

    // 6 Space physics
    ...sub('space-physics', 'earth-and-the-solar-system', '6.1', [
      { n: 1, f: 'Earth and Moon: rotation, orbit periods, and Sun–Earth light time', b: 'Earth rotates once in about 24 hours and orbits the Sun in about 365 days (an ellipse, nearly circular). The Moon orbits the Earth in about one month. Sunlight takes about 500 s to reach us.' },
      { n: 2, f: 'Average orbital speed equation', b: 'v = 2πr/T, where r is the average orbit radius and T the orbital period (in seconds). Rearranged: r = vT/2π, T = 2πr/v.' },
      { n: 3, f: 'A body orbits at r = 2.0 × 10⁸ km in 300 days. Average orbital speed?', b: 'T = 300 × 24 × 3600 = 2.59 × 10⁷ s.\nv = 2π × 2.0 × 10⁸ ÷ 2.59 × 10⁷ = 48 km/s.' },
      { n: 4, f: 'Members of the Solar System, and the planets in order', b: 'The Sun, eight planets (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), minor planets (dwarf planets such as Pluto, asteroids), moons, and smaller bodies such as comets.' },
      { n: 5, f: 'What does gravitational field strength depend on in the Solar System?', b: 'At a planet\'s surface: the planet\'s mass. Around a planet: it decreases with distance. The Sun\'s surface field is greater than any planet\'s.' },
      { n: 6, f: 'What keeps planets in orbit, and how does orbital speed change with distance from the Sun?', b: 'The gravitational attraction of the Sun, acting towards the Sun. Further from the Sun its field is weaker and the orbital speed is lower.' },
    ]),
    ...sub('space-physics', 'stars-and-the-universe', '6.2', [
      { n: 1, f: 'The Sun as a star', b: 'A medium-sized star, mostly hydrogen and helium. Radiates most energy as infrared, visible and ultraviolet. Powered by fusion of hydrogen into helium.' },
      { n: 2, f: 'Galaxy, Milky Way and light-year', b: 'A galaxy is many billions of stars; the Milky Way contains the Sun and is about 100 000 light-years across. A light-year is the distance light travels in a vacuum in one year (a distance, not a time).' },
      { n: 3, f: 'How does a protostar become a stable star?', b: 'The protostar collapses and warms under its own gravity. It is stable when the inward gravitational force is balanced by an outward force from the high temperature at its centre.' },
      { n: 4, f: 'End points of less massive and more massive stars', b: 'Less massive: red giant → planetary nebula and white dwarf.\nMore massive: red supergiant → supernova → nebula with heavier elements, leaving a neutron star or black hole.' },
      { n: 5, f: 'Redshift. Galaxy X has a larger redshift than galaxy Y: compare them.', b: 'Redshift: an increase in the observed wavelength of radiation from receding galaxies. X is further away and moving away faster than Y.' },
      { n: 6, f: 'How does redshift support the Big Bang?', b: 'Light from distant galaxies is redshifted, so they are receding and the Universe is expanding. Reversing the expansion, everything started close together.' },
    ]),
  ],
};
