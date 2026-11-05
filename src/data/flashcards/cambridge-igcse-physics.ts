/**
 * D-438 -- flashcards for Cambridge IGCSE Physics 0625 (2026-2028).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 *   u: true     Upper tier: Supplement (Extended-only) content, following the tier marks
 *               on Marlbridge's own 0625 revision notes and study guides. Core candidates
 *               can hide these cards. 1.6 Momentum is Supplement-only; 4.4 Electrical
 *               safety is Core-only, so it has no upper-tier card.
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 0625); origin 'revision-notes'.
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

const MFE = 'igcse-physics-motion-forces-and-energy-revision-notes';
const THERM = 'igcse-physics-thermal-physics-revision-notes';

const T1 = 'motion-forces-and-energy-cambridge-igcse-physics';
const T2 = 'thermal-physics-cambridge-igcse-physics';
const T3 = 'waves-cambridge-igcse-physics';
const T4 = 'electricity-and-magnetism-cambridge-igcse-physics';
const T5 = 'nuclear-physics-cambridge-igcse-physics';
const T6 = 'space-physics-cambridge-igcse-physics';

export const DECK_CAMBRIDGE_IGCSE_PHYSICS: FlashcardDeck = {
  boardSlug: 'cambridge',
  qualificationSlug: 'igcse',
  subjectSlug: 'physics',
  syllabusCode: '0625',
  syllabusSeries: 'For examination in 2026, 2027 and 2028',
  tierScheme: 'core-extended',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'iftikhar-azeemi', reviewedOn: '2026-11-05' },
  cards: [
    // 1 Motion, forces and energy
    ...sub(T1, 'physical-quantities-and-measurement-techniques-cambridge-igcse-physics', '1.1', [
      { n: 1, f: 'How do you read the volume in a measuring cylinder correctly?', b: 'Stand the cylinder on a level bench and read the bottom of the meniscus with your eye level with it. 1 cm³ = 1 ml.' },
      { n: 2, f: 'How do you measure a length with a ruler without parallax error?', b: 'Measure from the zero mark (not the worn end of the ruler), with your eye directly above the reading.' },
      { n: 3, f: 'Why measure multiples, for example timing 20 swings of a pendulum?', b: 'A single short time or small length is hard to measure accurately, so measure many and divide.\n20 swings in 28.4 s → period = 28.4 ÷ 20 = 1.42 s.' },
      { n: 4, f: 'Why use light gates and a digital timer, rather than a hand-held stopwatch, for a short time interval?', b: 'Starting and stopping a stopwatch by hand adds your reaction time (a few tenths of a second) to each reading.' },
      { n: 5, f: 'Scalar and vector quantities', b: 'Scalar: magnitude only (distance, speed, time, mass, energy, temperature).\nVector: magnitude and direction (force, weight, velocity, acceleration, momentum, electric and gravitational field strength).', u: true },
      { n: 6, f: 'Find the resultant of 3.0 N east and 4.0 N north.', b: '√(3.0² + 4.0²) = 5.0 N, at tan⁻¹(4.0 ÷ 3.0) = 53° north of east. (Or use a scale drawing.)', u: true },
    ]),
    ...sub(T1, 'motion-cambridge-igcse-physics', '1.2', [
      { n: 1, f: 'Speed and velocity', b: 'Speed = distance ÷ time, v = s/t (a scalar).\nVelocity is speed in a given direction (a vector).' },
      { n: 2, f: 'Average speed', b: 'Average speed = total distance travelled ÷ total time taken.' },
      { n: 3, f: 'What does the gradient of a distance–time graph show?', b: 'The speed. A flat line means stationary; a steepening curve means the speed is increasing.' },
      { n: 4, f: 'What does the area under a speed–time graph show?', b: 'The distance travelled.' },
      { n: 5, f: 'A speed–time graph is a straight line from 0 m/s at 0 s to 20 m/s at 10 s. How far does the object travel?', b: 'Area of the triangle = ½ × 10 × 20 = 100 m.' },
      { n: 6, f: 'Approximate acceleration of free fall near the Earth', b: 'About 9.8 m/s².' },
      { n: 7, f: 'Acceleration: definition and how to find it from a speed–time graph', b: 'a = Δv/Δt, the change in velocity per unit time, in m/s². It is the gradient of a speed–time graph. A deceleration is a negative acceleration.', u: true },
      { n: 8, f: 'Explain terminal velocity for an object falling through air', b: 'It accelerates at first. As it speeds up, air resistance (drag) increases until it balances the weight. The resultant force is then zero, so it falls at a constant (terminal) velocity.', u: true },
      { n: 9, f: 'An object moves in a circle at constant speed. Is it accelerating?', b: 'Yes. Its direction keeps changing, so its velocity changes. The acceleration, and the force causing it, point towards the centre of the circle.', u: true },
    ]),
    ...sub(T1, 'mass-and-weight-cambridge-igcse-physics', '1.3', [
      { n: 1, f: 'Mass', b: 'The quantity of matter in an object, measured in kilograms (kg). It is the same everywhere.' },
      { n: 2, f: 'Weight', b: 'The gravitational force on an object that has mass, measured in newtons (N). It changes if the gravitational field strength changes.' },
      { n: 3, f: 'Gravitational field strength: equation and value at the Earth\'s surface', b: 'g = W/m (weight per unit mass), so W = mg.\nAt the Earth\'s surface g ≈ 9.8 N/kg.' },
      { n: 4, f: 'Weight of a 5.0 kg mass on Earth, and roughly on the Moon (g about a sixth as large)?', b: 'Earth: 5.0 × 9.8 = 49 N.\nMoon: about 8.2 N. The mass is still 5.0 kg.' },
      { n: 5, f: 'How can two masses (or weights) be compared?', b: 'Using a balance.' },
      { n: 6, f: 'Weight, described in terms of a gravitational field', b: 'Weight is the effect of a gravitational field on a mass.', u: true },
    ]),
    ...sub(T1, 'density-cambridge-igcse-physics', '1.4', [
      { n: 1, f: 'Density: definition, equation and units', b: 'Mass per unit volume: ρ = m/V.\nUnits g/cm³ or kg/m³ (1 g/cm³ = 1000 kg/m³).' },
      { n: 2, f: 'How do you find the density of a liquid?', b: 'Find the mass of an empty measuring cylinder, pour in the liquid and read its volume, then find the mass again. Mass of liquid = difference. ρ = m/V.' },
      { n: 3, f: 'How do you find the volume of an irregular solid that sinks?', b: 'Displacement: part-fill a measuring cylinder with water, read the level, lower the object in fully on a thread and read again. Volume = rise in level.' },
      { n: 4, f: 'A 54 g stone raises the water level from 40.0 cm³ to 60.0 cm³. Find its density.', b: 'V = 20.0 cm³, so ρ = 54 ÷ 20.0 = 2.7 g/cm³ (2700 kg/m³).' },
      { n: 5, f: 'When does an object float in a liquid?', b: 'When its density is less than the liquid\'s density. It sinks if its density is greater. Water: 1.0 g/cm³.' },
      { n: 6, f: 'Two liquids that do not mix are poured together. Which ends up on top?', b: 'The less dense liquid floats on top, e.g. oil (0.92 g/cm³) on water (1.0 g/cm³).', u: true },
    ]),
    ...sub(T1, 'forces-cambridge-igcse-physics', '1.5', [
      { n: 1, f: 'Newton\'s first law', b: 'An object stays at rest, or keeps moving at constant velocity in a straight line, unless a resultant force acts on it. No resultant force does not mean "at rest".' },
      { n: 2, f: 'Resultant force', b: 'The single force that has the same effect as all the forces acting together. If the forces are balanced, the resultant is zero.' },
      { n: 3, f: 'Friction and drag', b: 'Solid friction opposes relative motion between two touching surfaces.\nDrag (fluid friction) opposes motion through a liquid or gas, and increases with speed.' },
      { n: 4, f: 'Load–extension experiment for a spring: method', b: 'Hang the spring from a clamp beside a vertical ruler, with a pointer. Add equal loads one at a time, reading the pointer at eye level. Extension = new length − original length. Plot load against extension.' },
      { n: 5, f: 'Moment of a force', b: 'Moment = force × perpendicular distance from the pivot (N m). A long spanner or a door handle far from the hinge gives a bigger moment for the same force.' },
      { n: 6, f: 'Principle of moments: 2.0 N hangs 0.30 m left of the pivot. What weight 0.20 m to the right balances it?', b: 'For equilibrium, clockwise moments = anticlockwise moments.\n2.0 × 0.30 = W × 0.20, so W = 3.0 N.' },
      { n: 7, f: 'Conditions for an object to be in equilibrium', b: 'No resultant force AND no resultant moment. Balanced moments alone are not enough.' },
      { n: 8, f: 'Centre of gravity', b: 'The single point where an object\'s whole weight can be considered to act. A wider base and lower centre of gravity make an object more stable.', src: MFE },
      { n: 9, f: 'How do you find the centre of gravity of an irregular flat card?', b: 'Hang it from a pin so it swings freely, hang a plumb line from the same pin and mark its line. Repeat from a second hole. The centre of gravity is where the lines cross.' },
      { n: 10, f: 'Hooke\'s law', b: 'F = kx: the extension is directly proportional to the force, up to the limit of proportionality. k is the spring constant (N/m). Beyond the limit the graph is no longer a straight line.', u: true },
      { n: 11, f: 'A spring with k = 40 N/m has a 6.0 N load (within the limit of proportionality). Find the extension.', b: 'x = F/k = 6.0 ÷ 40 = 0.15 m.', u: true },
      { n: 12, f: 'Newton\'s second law as an equation', b: 'F = ma: resultant force (N) = mass (kg) × acceleration (m/s²). The acceleration is in the direction of the resultant force.', u: true },
    ]),
    ...sub(T1, 'momentum-cambridge-igcse-physics', '1.6', [
      { n: 1, f: 'Momentum', b: 'p = mv (kg m/s). It is a vector, so velocities in opposite directions take opposite signs.', u: true },
      { n: 2, f: 'Impulse', b: 'Impulse = FΔt = Δp, the change in momentum (N s).', u: true },
      { n: 3, f: 'Resultant force in terms of momentum', b: 'F = Δp/Δt: resultant force = rate of change of momentum.', u: true },
      { n: 4, f: 'Principle of conservation of momentum', b: 'In a closed system with no external forces, the total momentum before a collision or explosion equals the total momentum after.', u: true },
      { n: 5, f: 'A 2 kg trolley at 3 m/s hits a stationary 1 kg trolley and they stick together. Find their velocity.', b: '(2 × 3) + (1 × 0) = (2 + 1) × v, so v = 2 m/s.', u: true },
      { n: 6, f: 'Two trolleys at rest are pushed apart by a spring. What can you say about their momenta afterwards?', b: 'Total momentum was zero before, so it is zero after: the two momenta are equal in size and opposite in direction.', u: true },
    ]),
    ...sub(T1, 'energy-work-and-power-cambridge-igcse-physics', '1.7', [
      { n: 1, f: 'Name the energy stores', b: 'Kinetic, gravitational potential, chemical, elastic (strain), nuclear, electrostatic and internal (thermal).' },
      { n: 2, f: 'Four ways energy is transferred between stores', b: 'By forces (mechanical work), by electrical currents (electrical work), by heating, and by waves (electromagnetic, sound).' },
      { n: 3, f: 'Principle of conservation of energy', b: 'Energy cannot be created or destroyed, only transferred from one store to another.' },
      { n: 4, f: 'Work done, W = Fd = ΔE', b: 'Work done equals the energy transferred; the force must act in the direction of motion; only that component does work.', src: MFE },
      { n: 5, f: 'A 250 N push moves a box 4.0 m. How much work is done?', b: 'W = Fd = 250 × 4.0 = 1000 J, so 1000 J of energy is transferred.' },
      { n: 6, f: 'Power, P = W/t = ΔE/t', b: 'The rate of doing work, or the rate of energy transfer. Units: watts (W), 1 W = 1 J/s.', src: MFE },
      { n: 7, f: 'Kinetic energy and gravitational potential energy equations', b: 'KE = ½mv².\nChange in GPE = mgΔh.', u: true },
      { n: 8, f: 'Efficiency', b: 'Efficiency = useful energy (or power) output ÷ total energy (or power) input, as a fraction or percentage. It can never exceed 100%, because some energy is always wasted.', u: true },
      { n: 9, f: 'A power station: 100 J in; 10 J, 50 J and 5 J wasted at boiler, turbine and generator. Electrical output and efficiency?', b: 'Output = 100 − 10 − 50 − 5 = 35 J. Efficiency = 35 ÷ 100 = 35%. On a Sankey diagram, arrow width is in proportion to the energy.', u: true },
      { n: 10, f: 'How do fossil-fuel and nuclear power stations generate electricity?', b: 'The energy heats water in a boiler to make steam, which turns a turbine that drives a generator.' },
      { n: 11, f: 'Renewable and non-renewable energy resources', b: 'Renewable: biofuels, hydroelectric, tides, waves, geothermal, solar, wind.\nNon-renewable: fossil fuels and nuclear fuel.' },
      { n: 12, f: 'Solar cells vs solar panels', b: 'Solar cells transfer light directly to electrical energy. Solar panels use the Sun\'s radiation (infrared) to heat water.' },
      { n: 13, f: 'Which energy resources do not get their energy mainly from the Sun? How does the Sun release energy?', b: 'Geothermal, nuclear and tidal. The Sun releases energy by nuclear fusion.', u: true },
    ]),
    ...sub(T1, 'pressure-cambridge-igcse-physics', '1.8', [
      { n: 1, f: 'p = F/A', b: 'For the same force, a smaller area gives a larger pressure. This is the idea behind sharp blades (small contact area) and snowshoes (large contact area).', src: MFE },
      { n: 2, f: 'Unit of pressure', b: 'The pascal (Pa). 1 Pa = 1 N/m².' },
      { n: 3, f: 'Why does a drawing pin have a sharp point?', b: 'The small contact area at the point gives a much larger pressure for the same force (p = F/A), so it goes into the surface.' },
      { n: 4, f: 'Pressure change with depth in a liquid', b: 'Δp = ρgΔh. Pressure increases with depth and with the liquid\'s density. It does not depend on the shape or width of the container.', u: true },
      { n: 5, f: 'Pressure change 2.0 m below the surface of water (ρ = 1000 kg/m³, g = 9.8 N/kg)?', b: 'Δp = 1000 × 9.8 × 2.0 = 19 600 Pa.', u: true },
    ]),

    // 2 Thermal physics
    ...sub(T2, 'kinetic-particle-model-of-matter-cambridge-igcse-physics', '2.1', [
      { n: 1, f: 'Particles in a solid', b: 'Very close together in a regular arrangement, in fixed positions. They only vibrate about fixed points.' },
      { n: 2, f: 'Particles in a liquid', b: 'Close together in a random arrangement. They move around, sliding past each other.' },
      { n: 3, f: 'Particles in a gas', b: 'Far apart in a random arrangement. They move fast and randomly, in straight lines between collisions.' },
      { n: 4, f: 'Brownian motion', b: 'The random, erratic motion of visible smoke/pollen particles suspended in a gas or liquid, caused by collisions with the much smaller, fast-moving gas/liquid particles — evidence for the particle model.', src: THERM },
      { n: 5, f: 'Absolute zero', b: '−273 °C (0 K): the lowest possible temperature, where particles have the least possible kinetic energy.' },
      { n: 6, f: 'Converting between °C and kelvin. What is 27 °C in K?', b: 'T (in K) = θ (in °C) + 273.\n27 °C = 300 K.' },
      { n: 7, f: 'How do gas particles cause pressure?', b: 'They collide with the walls of the container. More frequent or harder collisions give a higher pressure.' },
      { n: 8, f: 'A fixed mass of gas is heated at constant volume. What happens to its pressure, and why?', b: 'The pressure increases. The particles move faster, so they hit the walls more often and harder.' },
      { n: 9, f: 'Boyle\'s law: pV = constant', b: 'For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume. Halving the volume doubles the pressure.', u: true },
      { n: 10, f: 'Gas at 100 kPa is compressed from 2.0 m³ to 0.50 m³ at constant temperature. New pressure?', b: 'p₁V₁ = p₂V₂: 100 × 2.0 = p₂ × 0.50, so p₂ = 400 kPa.', u: true },
    ]),
    ...sub(T2, 'thermal-properties-and-temperature-cambridge-igcse-physics', '2.2', [
      { n: 1, f: 'Thermal expansion: everyday consequences and uses', b: 'Expansion gaps in bridges and railway tracks; bimetallic strips in thermostats; a tight metal jar lid loosens when warmed.' },
      { n: 2, f: 'Order of thermal expansion for solids, liquids and gases (at constant pressure), and why', b: 'Gases expand most, then liquids, then solids. Gas particles are far apart with very weak forces between them; particles in solids are held most strongly.', u: true },
      { n: 3, f: 'What does a rise in an object\'s temperature tell you about its energy?', b: 'Its internal energy has increased.' },
      { n: 4, f: 'Specific heat capacity', b: 'The energy needed per unit mass per unit temperature rise: the energy to raise 1 kg of a substance by 1 °C. c = ΔE/(mΔθ), in J/(kg °C).', u: true },
      { n: 5, f: 'A 12 V heater takes 4.0 A for 5.0 min and warms a 1.0 kg block by 16 °C. Find c.', b: 'E = IVt = 4.0 × 12 × 300 = 14 400 J.\nc = 14 400 ÷ (1.0 × 16) = 900 J/(kg °C).', u: true },
      { n: 6, f: 'Why is a measured specific heat capacity usually higher than the true value?', b: 'Some energy is lost to the surroundings, so more energy is supplied than goes into the block. Insulating the block reduces this.', u: true },
      { n: 7, f: 'Melting/boiling', b: 'Energy is put in, but temperature stays constant while the state changes — the energy is used to overcome the forces between particles (increasing potential energy), not to speed the particles up.', src: THERM },
      { n: 8, f: 'Melting and boiling points of pure water at standard atmospheric pressure', b: 'Melts (and freezes) at 0 °C; boils (and condenses) at 100 °C.' },
      { n: 9, f: 'Condensation', b: 'Gas particles lose energy, slow down and are pulled close together by the attractive forces, forming a liquid. Energy is transferred to the surroundings at constant temperature.', src: THERM },
      { n: 10, f: 'Why does evaporation cool a liquid?', b: 'The more energetic particles escape from the surface, so the average kinetic energy of the remaining particles falls, and the temperature falls.' },
      { n: 11, f: 'Boiling vs evaporation', b: 'Boiling: at one fixed temperature, throughout the liquid (bubbles).\nEvaporation: at any temperature, from the surface only.', u: true },
      { n: 12, f: 'Three factors that increase the rate of evaporation', b: 'Higher temperature, larger surface area, and air moving over the surface.', u: true },
    ]),
    ...sub(T2, 'transfer-of-thermal-energy-cambridge-igcse-physics', '2.3', [
      { n: 1, f: 'Conduction', b: 'Needs a medium (solids are best). Vibrating particles pass energy on to their neighbours.', src: THERM },
      { n: 2, f: 'Convection', b: 'Needs a fluid (liquid or gas). Heated fluid expands, becomes less dense and rises; cooler, denser fluid sinks to replace it.', src: THERM },
      { n: 3, f: 'Radiation', b: 'Needs no medium: works through a vacuum. Infrared is emitted by all objects. Dull black surfaces are the best emitters and absorbers; shiny/light surfaces are the worst emitters and best reflectors.', src: THERM },
      { n: 4, f: 'An experiment to compare thermal conductors', b: 'Heat one end of equal rods of different materials equally, with a drawing pin fixed by wax to the far end of each. The pin on the best conductor falls first.' },
      { n: 5, f: 'How can a convection current in water be shown?', b: 'Drop a potassium manganate(VII) crystal at the bottom of one side of a beaker of water and heat gently beneath it. The purple colour rises, moves across the top and sinks on the far side.' },
      { n: 6, f: 'Why are metals much better thermal conductors than other solids?', b: 'In all solids, lattice vibrations pass energy along. Metals also have free electrons, which move through the metal and carry energy quickly.', u: true },
      { n: 7, f: 'Why do gases conduct thermal energy badly?', b: 'The particles are far apart, so there is little particle-to-particle contact to pass vibrations along.', u: true },
      { n: 8, f: 'When does an object stay at a constant temperature?', b: 'When it transfers energy away at the same rate as it receives energy. If it receives energy faster, its temperature rises; if it loses energy faster, it falls. The Earth\'s temperature depends on this balance.', u: true },
      { n: 9, f: 'Two factors that increase the rate at which a surface emits radiation', b: 'A higher surface temperature and a larger surface area.', u: true },
      { n: 10, f: 'How does a car radiator transfer energy from the coolant to the air?', b: 'By conduction through the thin metal tubes and fins, then by convection in the air moving over the large surface area. Mainly conduction and convection, not radiation.', u: true },
    ]),

    // 3 Waves
    ...sub(T3, 'general-properties-of-waves-cambridge-igcse-physics', '3.1', [
      { n: 1, f: 'What do waves transfer?', b: 'Energy, without transferring matter.' },
      { n: 2, f: 'Wavelength', b: 'The distance between two identical points on consecutive waves, e.g. crest to crest. Never crest to trough.' },
      { n: 3, f: 'Amplitude', b: 'The distance from the middle (undisturbed) position to a crest or a trough. Not crest to trough.' },
      { n: 4, f: 'Frequency', b: 'The number of waves passing a point per second, in hertz (Hz).' },
      { n: 5, f: 'The wave equation. Find v for f = 2.5 Hz and λ = 0.80 m.', b: 'v = fλ (also f = v/λ, λ = v/f).\nv = 2.5 × 0.80 = 2.0 m/s.' },
      { n: 6, f: 'Transverse vs longitudinal waves, with examples', b: 'Transverse: vibration at right angles to the direction of travel (electromagnetic waves, water waves, seismic S-waves).\nLongitudinal: vibration parallel to the direction of travel (sound, seismic P-waves).' },
      { n: 7, f: 'What can a ripple tank show?', b: 'Reflection (at a barrier), refraction (waves slow down in shallower water) and diffraction (through a gap or at an edge).' },
      { n: 8, f: 'A wave is described by compressions and rarefactions. What type is it?', b: 'Longitudinal.', u: true },
      { n: 9, f: 'How do wavelength and gap size affect diffraction?', b: 'Diffraction through a gap increases as the wavelength increases relative to the gap size. Diffraction at an edge is more noticeable for longer wavelengths.', u: true },
    ]),
    ...sub(T3, 'light-cambridge-igcse-physics', '3.2', [
      { n: 1, f: 'Law of reflection', b: 'Angle of incidence = angle of reflection, both measured from the normal.' },
      { n: 2, f: 'Image in a plane mirror', b: 'Same size as the object, the same distance behind the mirror as the object is in front, and virtual.' },
      { n: 3, f: 'Light passes from air into glass at an angle. What happens?', b: 'It slows down and bends towards the normal. Leaving the glass, it speeds up and bends away from the normal.' },
      { n: 4, f: 'What happens when the angle of incidence inside glass exceeds the critical angle?', b: 'There is no refracted ray at all: all the light is reflected back inside (total internal reflection).' },
      { n: 5, f: 'Refractive index equations. Find n if the critical angle is 42°.', b: 'n = sin i / sin r and n = 1/sin c.\nn = 1/sin 42° = 1.5.', u: true },
      { n: 6, f: 'How do optical fibres carry signals?', b: 'Light (or infrared) is totally internally reflected along the fibre. Used in telecommunications.', u: true },
      { n: 7, f: 'Principal focus of a converging lens', b: 'The point where rays travelling parallel to the principal axis converge after refraction by the lens. Both parts are needed.' },
      { n: 8, f: 'Focal length', b: 'The distance from the centre of the lens to the principal focus.' },
      { n: 9, f: 'Converging lens: image of an object beyond 2F', b: 'Real, inverted, diminished.' },
      { n: 10, f: 'Converging lens: image of an object between F and 2F', b: 'Real, inverted, enlarged.' },
      { n: 11, f: 'Converging lens: image of an object closer than F', b: 'Virtual, upright, enlarged: the lens acts as a magnifying glass.', u: true },
      { n: 12, f: 'How is a virtual image formed?', b: 'By extrapolating diverging rays backwards: the rays appear to come from the image but do not actually pass through it.' },
      { n: 13, f: 'Correcting short sight and long sight', b: 'Short sight (light focused in front of the retina): diverging lens.\nLong sight (focus behind the retina): converging lens.', u: true },
      { n: 14, f: 'Why does a glass prism split white light into a spectrum?', b: 'Different colours refract by different amounts: blue/violet refracts more than red. Order: red, orange, yellow, green, blue, indigo, violet.' },
      { n: 15, f: 'Monochromatic light', b: 'Light of a single frequency (a single colour).', u: true },
    ]),
    ...sub(T3, 'electromagnetic-spectrum-cambridge-igcse-physics', '3.3', [
      { n: 1, f: 'Electromagnetic spectrum in order of increasing frequency', b: 'Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. (Wavelength decreases along this order.)' },
      { n: 2, f: 'What do all electromagnetic waves have in common in a vacuum?', b: 'They all travel at the same high speed.' },
      { n: 3, f: 'Speed of electromagnetic waves in a vacuum', b: '3.0 × 10⁸ m/s.', u: true },
      { n: 4, f: 'Uses of radio waves and of microwaves; harm from microwaves', b: 'Radio: radio and TV transmissions, astronomy, RFID.\nMicrowaves: satellite TV, mobile phones, microwave ovens. Harm: internal heating of body cells.' },
      { n: 5, f: 'Uses and harm of infrared', b: 'Electric grills, remote controls, intruder alarms, thermal imaging, optical fibres. Harm: skin burns.' },
      { n: 6, f: 'Uses and harm of ultraviolet', b: 'Security marking, detecting fake bank notes, sterilising water. Harm: damage to surface cells and eyes, leading to skin cancer and eye conditions.' },
      { n: 7, f: 'Uses and harm of X-rays and gamma rays', b: 'X-rays: medical scanning, security scanners.\nGamma: sterilising food and medical equipment, detecting and treating cancer.\nHarm (both): mutation or damage to cells.' },
      { n: 8, f: 'How do we communicate with satellites?', b: 'Mainly by microwaves. Some satellite phones use low-orbit satellites; other satellite phones and direct-broadcast satellite TV use geostationary satellites.' },
      { n: 9, f: 'Which waves do mobile phones, Wi-Fi, Bluetooth and optical fibres use?', b: 'Mobile phones and Wi-Fi: microwaves (pass through some walls, short aerial).\nBluetooth: radio waves.\nOptical fibres: visible light or infrared (high data rates).', u: true },
      { n: 10, f: 'Analogue vs digital signals, and two benefits of digital', b: 'Analogue varies continuously; digital takes only set values (1 and 0).\nDigital: higher data rate, and the signal can be regenerated accurately, so it can travel further.', u: true },
    ]),
    ...sub(T3, 'sound-cambridge-igcse-physics', '3.4', [
      { n: 1, f: 'How is sound produced and transmitted?', b: 'By a vibrating source. Sound is a longitudinal wave and needs a medium: it cannot travel through a vacuum.' },
      { n: 2, f: 'Range of human hearing, and ultrasound', b: 'About 20 Hz to 20 000 Hz. Ultrasound is sound above 20 kHz.' },
      { n: 3, f: 'Approximate speed of sound in air', b: '330–350 m/s.' },
      { n: 4, f: 'What affects the loudness and the pitch of a sound?', b: 'Loudness: amplitude (larger amplitude, louder).\nPitch: frequency (higher frequency, higher pitch).' },
      { n: 5, f: 'Echo', b: 'A reflected sound wave.' },
      { n: 6, f: 'A method to measure the speed of sound in air', b: 'Measure a long distance between a sound source that can be seen (e.g. two blocks banged together) and an observer. Time from seeing the bang to hearing it. Speed = distance ÷ time; repeat and average.' },
      { n: 7, f: 'Speed of sound in solids, liquids and gases', b: 'Fastest in solids, then liquids, slowest in gases.', u: true },
      { n: 8, f: 'A sonar echo from the sea bed returns after 0.40 s. Sound travels at 1500 m/s in sea water. How deep is it?', b: 'depth = (speed × time) ÷ 2 = (1500 × 0.40) ÷ 2 = 300 m. Halve because the pulse goes down and back. (Do not use v = fλ.)', u: true },
      { n: 9, f: 'Two uses of ultrasound other than sonar', b: 'Non-destructive testing (echoes from cracks in metal) and medical scanning of soft tissue (echoes from tissue boundaries).', u: true },
    ]),

    // 4 Electricity and magnetism
    ...sub(T4, 'simple-phenomena-of-magnetism-cambridge-igcse-physics', '4.1', [
      { n: 1, f: 'Forces between magnetic poles, and the test for a magnet', b: 'Like poles repel; unlike poles attract. Only repulsion proves an object is a magnet, because a magnet attracts unmagnetised iron too.' },
      { n: 2, f: 'Induced magnetism', b: 'A magnet attracts an unmagnetised magnetic material by making it a magnet, with the opposite pole facing the magnet.' },
      { n: 3, f: 'Soft iron vs steel', b: 'Soft iron: easy to magnetise, loses it easily; temporary magnets, electromagnet cores.\nSteel: keeps its magnetism; permanent magnets.' },
      { n: 4, f: 'Magnetic and non-magnetic materials', b: 'Magnetic: iron, steel, nickel, cobalt.\nNon-magnetic: e.g. copper, aluminium, plastic, wood.' },
      { n: 5, f: 'Magnetic field, and the direction of a field line', b: 'A region in which a magnetic pole experiences a force. The direction is the force on an N pole, so lines run N → S outside a magnet.' },
      { n: 6, f: 'How do you plot the field of a bar magnet with a compass?', b: 'Mark the tip of the needle, move the compass so its tail is on that dot, mark again, and repeat; join the dots and add the arrow. Iron filings show the pattern but not the direction.' },
      { n: 7, f: 'What causes magnetic forces, and how is field strength shown on a diagram?', b: 'Magnetic forces are due to interactions between magnetic fields. Closer field lines mean a stronger field.', u: true },
    ]),
    ...sub(T4, 'electrical-quantities-cambridge-igcse-physics', '4.2', [
      { n: 1, f: 'Charging by friction: what moves, and which way?', b: 'Only electrons move. The object that gains electrons becomes negative; the one that loses them becomes positive. Rubbed polythene becomes negative; rubbed acetate becomes positive.' },
      { n: 2, f: 'Conductors vs insulators (electron model)', b: 'Conductors (metals) have free electrons that can move through them. In insulators the electrons are held in their atoms.' },
      { n: 3, f: 'Direct current vs alternating current', b: 'd.c. flows in one direction only (cells, batteries). a.c. keeps reversing direction (the mains supply).' },
      { n: 4, f: 'Electromotive force (e.m.f.)', b: 'The electrical work done by a source in moving a unit charge around a complete circuit. Measured in volts.' },
      { n: 5, f: 'Potential difference (p.d.)', b: 'The work done by a unit charge passing through a component. Measured in volts.' },
      { n: 6, f: 'How are an ammeter and a voltmeter connected?', b: 'Ammeter in series. Voltmeter in parallel, across the component.' },
      { n: 7, f: 'Resistance equation. A lamp has 6.0 V across it and 0.25 A through it: resistance?', b: 'R = V/I = 6.0 ÷ 0.25 = 24 Ω.' },
      { n: 8, f: 'How do the length and thickness of a wire affect its resistance?', b: 'Longer wire: more resistance. Thicker wire: less resistance.' },
      { n: 9, f: 'Resistance, length and cross-sectional area. Length doubled, area halved: effect on R?', b: 'R is proportional to length and inversely proportional to area. ×2 for length and ×2 for halving the area: 4 times larger.', u: true },
      { n: 10, f: 'Electrical power and energy equations. A 12 V lamp takes 2.0 A: power?', b: 'P = IV and E = IVt.\nP = 2.0 × 12 = 24 W.' },
      { n: 11, f: 'Kilowatt-hour (kW h)', b: 'The energy transferred by a 1 kW appliance in 1 hour. 1 kW h = 3.6 × 10⁶ J.' },
      { n: 12, f: 'An 800 W microwave runs 15 min a day for 30 days at 25 cents per kW h. Cost?', b: '0.80 kW × 0.25 h × 30 = 6.0 kW h.\n6.0 × 25 = 150 cents.' },
      { n: 13, f: 'Current in terms of charge. 0.50 A flows for 2.0 minutes: charge?', b: 'I = Q/t, so Q = It = 0.50 × 120 = 60 C.', u: true },
      { n: 14, f: 'e.m.f. and p.d. in terms of work and charge. A battery does 54 J moving 6.0 C: e.m.f.?', b: 'E = W/Q (and V = W/Q for p.d.).\nE = 54 ÷ 6.0 = 9.0 V.', u: true },
      { n: 15, f: 'Electric field: definition and direction', b: 'A region in which a charge experiences a force. Its direction is the force on a positive charge: radially outward from a positive point charge; parallel and evenly spaced from + to − between plates.', u: true },
      { n: 16, f: 'I–V graphs: fixed resistor, filament lamp and diode', b: 'Resistor: straight line through the origin.\nFilament lamp: curve getting less steep (filament heats, R increases).\nDiode: no current in reverse; current rises steeply after a small forward p.d.', u: true },
    ]),
    ...sub(T4, 'electric-circuits-cambridge-igcse-physics', '4.3', [
      { n: 1, f: 'Series circuit: current and combined resistance', b: 'The current is the same everywhere. Combined resistance R = R₁ + R₂ + …' },
      { n: 2, f: 'Two resistors in parallel: combined resistance and currents', b: 'The combined resistance is less than either resistor alone. The current from the source is larger than the current in each branch.' },
      { n: 3, f: 'Why are lighting circuits wired in parallel?', b: 'Each lamp gets the full p.d., can be switched on and off separately, and stays lit if another lamp fails.' },
      { n: 4, f: 'Three 1.5 V cells in series, all facing the same way. Total e.m.f.?', b: 'The e.m.f.s add: 3 × 1.5 = 4.5 V.' },
      { n: 5, f: 'NTC thermistor and LDR', b: 'NTC thermistor: resistance falls as temperature rises.\nLDR: resistance falls as light intensity increases.' },
      { n: 6, f: 'Potential divider: which resistor gets the bigger p.d.?', b: 'The larger resistance takes the larger share of the supply p.d.' },
      { n: 7, f: 'Combined resistance of 20 Ω and 30 Ω in parallel', b: '1/R = 1/20 + 1/30 = 5/60, so R = 12 Ω.', u: true },
      { n: 8, f: 'Currents at a junction, and why', b: 'Current into a junction = current out, because charge is not used up or stored at a junction.', u: true },
      { n: 9, f: 'p.d. rules for series and parallel', b: 'Series: the p.d.s across the components add up to the total.\nParallel: each branch has the same p.d.', u: true },
      { n: 10, f: '3.0 kΩ and 1.0 kΩ in series across 12 V. p.d. across the 1.0 kΩ?', b: 'R₁/R₂ = V₁/V₂. Total 4.0 kΩ; the 1.0 kΩ takes ¼ of 12 V = 3.0 V (and 9.0 V across the 3.0 kΩ).', u: true },
      { n: 11, f: 'Diode and LED', b: 'A diode lets current through in one direction only. An LED also conducts one way only, and emits light when it conducts.', u: true },
      { n: 12, f: 'An LDR is the lower resistor of a potential divider. It gets darker. What happens to the p.d. across it?', b: 'Its resistance rises, so its share of the p.d. rises. This can switch on a lamp at dusk.', u: true },
    ]),
    ...sub(T4, 'electrical-safety-cambridge-igcse-physics', '4.4', [
      { n: 1, f: 'Four electrical hazards', b: 'Damaged insulation, overheating cables, damp conditions, and overloaded plugs, extension leads and sockets.' },
      { n: 2, f: 'The three wires in mains wiring, and where the switch and fuse go', b: 'Live (line), neutral and earth. The switch and the fuse go in the live wire.' },
      { n: 3, f: 'Why must the switch be in the live wire?', b: 'So that when it is off, the appliance is disconnected from the high voltage. In the neutral, the appliance would stay live.' },
      { n: 4, f: 'Fuse vs trip switch', b: 'A fuse melts if the current exceeds its rating. A trip switch (circuit breaker) opens automatically and can be reset.' },
      { n: 5, f: 'A 1.2 kW hairdryer runs on 230 V. Choose a fuse: 3 A, 5 A or 13 A.', b: 'I = P/V = 1200 ÷ 230 = 5.2 A, so 13 A (the rating must be just above the normal current; 5 A would melt).' },
      { n: 6, f: 'Why is a metal casing earthed?', b: 'If the live wire touches the casing, a large current flows to earth and the fuse melts, so the casing does not stay live.' },
      { n: 7, f: 'Double-insulated appliance', b: 'It has a non-conducting (plastic) casing, so it needs no earth wire. Its fuse still protects the circuit and cabling.' },
    ]),
    ...sub(T4, 'electromagnetic-effects-cambridge-igcse-physics', '4.5', [
      { n: 1, f: 'When is an e.m.f. induced in a conductor?', b: 'When it moves across a magnetic field (cuts field lines), or when the magnetic field linking it changes.' },
      { n: 2, f: 'Three ways to increase an induced e.m.f.', b: 'Faster movement, a stronger magnet (field), more turns on the coil.' },
      { n: 3, f: 'A magnet is pushed into a coil joined to a meter, held still, then pulled out. What does the meter show?', b: 'A deflection while it moves in, zero while it is still, and a deflection the other way as it is pulled out.' },
      { n: 4, f: 'Direction of an induced e.m.f.: the rule and the hand rule', b: 'The induced e.m.f. opposes the change causing it. Fleming\'s right-hand rule: thumb = motion, first finger = field, second finger = induced current.', u: true },
      { n: 5, f: 'a.c. generator: connection, and coil positions for maximum and zero e.m.f.', b: 'Slip rings and brushes connect the rotating coil. e.m.f. is maximum when the plane of the coil is parallel to the field, zero when it is perpendicular.', u: true },
      { n: 6, f: 'Magnetic field of a straight wire and of a solenoid', b: 'Wire: concentric circles (right-hand grip rule).\nSolenoid: like a bar magnet outside; strong and nearly uniform inside.' },
      { n: 7, f: 'Relay', b: 'A small current in a coil magnetises it and closes a switch in a second circuit, so a small current can switch a large one (e.g. a car ignition switching the starter motor).' },
      { n: 8, f: 'How does a loudspeaker work?', b: 'A changing current in a coil in a permanent magnet\'s field makes the coil and cone vibrate, producing sound.' },
      { n: 9, f: 'Three ways to increase the turning effect on a current-carrying coil in a magnetic field', b: 'More turns on the coil, a larger current, a stronger magnetic field.' },
      { n: 10, f: 'Fleming\'s left-hand rule', b: 'First finger = field, second finger = current, thumb = force (motion). For an electron beam, the current is opposite to the electrons\' motion.', u: true },
      { n: 11, f: 'What does the split-ring commutator in a d.c. motor do?', b: 'It reverses the current in the coil every half turn, so the forces keep turning the coil the same way.', u: true },
      { n: 12, f: 'Transformer equation. 400 primary turns, 230 V in, 11.5 V out: secondary turns?', b: 'Vp/Vs = Np/Ns, so Ns = 400 × 11.5 ÷ 230 = 20 turns.' },
      { n: 13, f: 'Step-up vs step-down transformer', b: 'Step-up: more secondary turns than primary, so Vs > Vp. Step-down: fewer secondary turns, so Vs < Vp. Both have a soft-iron core.' },
      { n: 14, f: 'Why is electricity transmitted at high voltage?', b: 'For the same power the current is smaller, so less energy is wasted heating the cables, and thinner, cheaper cables can be used.' },
      { n: 15, f: 'How does a transformer work, and why does it need a.c.?', b: 'Alternating current in the primary makes a changing magnetic field in the core, which induces an alternating e.m.f. in the secondary. A steady d.c. gives no changing field.', u: true },
      { n: 16, f: 'Ideal transformer power equation, and power lost in cables', b: 'IpVp = IsVs (100% efficient).\nCable loss P = I²R, so ten times the current gives one hundred times the loss.', u: true },
    ]),

    // 5 Nuclear physics
    ...sub(T5, 'the-nuclear-model-of-the-atom-cambridge-igcse-physics', '5.1', [
      { n: 1, f: 'Structure of an atom', b: 'A small, positively charged nucleus of protons and neutrons, with negatively charged electrons in orbit around it.' },
      { n: 2, f: 'Proton number (Z) and nucleon number (A)', b: 'Z: the number of protons. A: the number of protons + neutrons. Neutrons = A − Z.' },
      { n: 3, f: 'How many neutrons are in a nucleus of ²³⁸₉₂U?', b: '238 − 92 = 146.' },
      { n: 4, f: 'Isotopes', b: 'Atoms of the same element (same proton number) with different numbers of neutrons (different nucleon numbers).' },
      { n: 5, f: 'An atom of ²³₁₁Na loses one electron. Charge on the ion, and number of electrons?', b: 'Charge +1; 10 electrons. (Losing electrons gives a positive ion; gaining gives a negative ion.)' },
      { n: 6, f: 'Relative charges of a proton, a neutron and an electron', b: 'Proton +1, neutron 0, electron −1.' },
      { n: 7, f: 'Alpha-particle scattering: three observations and what each shows', b: 'Most pass straight through: the atom is mostly empty space.\nSome are deflected: the nucleus is positive.\nA few bounce back: the nucleus is tiny and holds most of the mass.', u: true },
      { n: 8, f: 'Relative charge and relative mass of the nucleus of ⁵⁶₂₆Fe', b: 'Relative charge +26 (= Z); relative mass 56 (= A).', u: true },
      { n: 9, f: 'Nuclear fission', b: 'A large nucleus splits into two smaller nuclei, usually after absorbing a neutron, releasing more neutrons and energy.', u: true },
      { n: 10, f: 'Nuclear fusion', b: 'Two light nuclei join to form a heavier nucleus, releasing energy. In both fission and fusion the total mass of the products is slightly less than before.', u: true },
      { n: 11, f: 'Check this fission equation balances:\n²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3 ¹₀n', b: 'Top: 235 + 1 = 236 and 144 + 89 + 3 = 236.\nBottom: 92 + 0 = 92 and 56 + 36 + 0 = 92.', u: true },
    ]),
    ...sub(T5, 'radioactivity-cambridge-igcse-physics', '5.2', [
      { n: 1, f: 'Four main sources of background radiation', b: 'Radon gas in the air, rocks and buildings, food and drink, and cosmic rays.' },
      { n: 2, f: 'How is ionising radiation measured?', b: 'With a detector connected to a counter. Count rate = counts per second or per minute.' },
      { n: 3, f: 'What are α, β and γ radiation?', b: 'α: a helium nucleus (2 protons + 2 neutrons), charge +2.\nβ: a fast electron from the nucleus, charge −1.\nγ: electromagnetic radiation, no charge.' },
      { n: 4, f: 'Ionising and penetrating abilities of α, β and γ', b: 'α: most ionising; stopped by paper or a few cm of air.\nβ: medium; stopped by a few mm of aluminium.\nγ: least ionising; reduced by thick lead or concrete.' },
      { n: 5, f: 'Radioactive decay', b: 'A change in an unstable nucleus that can emit α or β particles and/or γ radiation. It is spontaneous and random. In α or β decay the nucleus becomes a different element.' },
      { n: 6, f: 'Half-life', b: 'The time taken for half the nuclei of a particular isotope in any sample to decay.' },
      { n: 7, f: 'A count rate falls from 960 counts/s to 60 counts/s in 32 hours. Half-life?', b: '960 → 480 → 240 → 120 → 60 is 4 half-lives. 32 ÷ 4 = 8.0 hours.' },
      { n: 8, f: 'Effects of ionising radiation on living things, and safe handling of sources', b: 'Cell death, mutations and cancer.\nUse tongs, lead-lined boxes, point sources away from people, use for the shortest time, store locked and labelled.' },
      { n: 9, f: 'Corrected count rate', b: 'Measured count rate − background count rate (measure the background with the source removed).', u: true },
      { n: 10, f: 'Changes to A and Z in α, β and γ emission', b: 'α: A − 4, Z − 2.\nβ: A unchanged, Z + 1 (a neutron → proton + electron).\nγ: no change; the nucleus loses energy.', u: true },
      { n: 11, f: 'Write the β decay of ¹³¹₅₃I to xenon (Xe).', b: '¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e', u: true },
      { n: 12, f: 'Deflection of α, β and γ in electric and magnetic fields', b: 'α and β are deflected in opposite directions; β is deflected much more (it is far lighter). In an electric field α bends towards −, β towards +. γ is not deflected.', u: true },
      { n: 13, f: 'Why is α radiation the most ionising?', b: 'It has the largest charge (+2) and a large kinetic energy, so it interacts strongly with the atoms it passes and loses its energy quickly.', u: true },
      { n: 14, f: 'Which radiation for a smoke alarm, paper-thickness control and a medical tracer?', b: 'Smoke alarm: α, long half-life.\nPaper thickness: β (partly absorbed by paper).\nTracer: γ, short half-life (detected outside the body, little lasting dose).', u: true },
      { n: 15, f: 'Readings: 340, then 12 min later 100 counts/minute; background 20 counts/minute. Half-life?', b: 'Corrected: 320 and 80. 320 → 160 → 80 is 2 half-lives. 12 ÷ 2 = 6.0 minutes.', u: true },
      { n: 16, f: 'Why are some isotopes radioactive?', b: 'They have too many neutrons and/or the nucleus is too heavy. Decay makes the nucleus more stable.', u: true },
    ]),

    // 6 Space physics
    ...sub(T6, 'the-earth-and-the-solar-system-cambridge-igcse-physics', '6.1', [
      { n: 1, f: 'What causes day and night, and the Sun\'s apparent daily motion?', b: 'The Earth spins on its axis once in about 24 hours. The side facing the Sun has day. The Sun appears to rise in the east and set in the west because the Earth rotates.' },
      { n: 2, f: 'What causes the seasons?', b: 'The Earth\'s axis is tilted. As it orbits the Sun (about 365 days), each hemisphere in turn leans towards the Sun and gets more energy per square metre. Not distance from the Sun.' },
      { n: 3, f: 'What causes the phases of the Moon?', b: 'The Moon reflects sunlight. As it orbits the Earth (about one month) we see different amounts of its lit half. Not the Earth\'s shadow.' },
      { n: 4, f: 'The eight planets in order from the Sun', b: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.' },
      { n: 5, f: 'Members of the Solar System besides the Sun and planets', b: 'Minor planets (dwarf planets such as Pluto, asteroids in the asteroid belt), moons, and smaller bodies such as comets.' },
      { n: 6, f: 'Why are the inner planets small and rocky and the outer ones large and gaseous?', b: 'Accretion model: near the young Sun it was hot, so only rock and metal stayed solid. Further out it was cold, so gas and ice were available and large cores pulled in gas.' },
      { n: 7, f: 'Why do the planets orbit the Sun?', b: 'The Sun holds most of the Solar System\'s mass. Its gravitational attraction keeps the planets in orbit.' },
      { n: 8, f: 'How long does light take to travel 1.5 × 10¹¹ m from the Sun to the Earth?', b: 't = d/v = 1.5 × 10¹¹ ÷ 3.0 × 10⁸ = 500 s.' },
      { n: 9, f: 'Shape of planetary and comet orbits', b: 'Elliptical. The Sun is not at the centre of the ellipse, except for a nearly circular orbit.', u: true },
      { n: 10, f: 'Where in its orbit is a comet fastest, and why?', b: 'Nearest the Sun. As it moves towards the Sun it loses gravitational potential energy, which is transferred to kinetic energy.', u: true },
      { n: 11, f: 'Average orbital speed equation. Earth: r = 1.5 × 10¹¹ m, T = 3.15 × 10⁷ s.', b: 'v = 2πr/T = 2π × 1.5 × 10¹¹ ÷ 3.15 × 10⁷ = 3.0 × 10⁴ m/s.', u: true },
      { n: 12, f: 'How do the Sun\'s field strength and orbital speed change for planets further from the Sun?', b: 'The gravitational field is weaker further out, and the planets orbit more slowly.', u: true },
    ]),
    ...sub(T6, 'stars-and-the-universe-cambridge-igcse-physics', '6.2', [
      { n: 1, f: 'The Sun as a star', b: 'A medium-sized star, mostly hydrogen and helium. It radiates most of its energy as infrared, visible light and ultraviolet.' },
      { n: 2, f: 'Galaxy, and the size of the Milky Way', b: 'A galaxy is made of many billions of stars. The Sun is in the Milky Way, which is about 100 000 light-years across.' },
      { n: 3, f: 'Light-year', b: 'The distance light travels through space in one year. It is a distance, not a time.' },
      { n: 4, f: 'Value of one light-year in metres', b: '9.5 × 10¹⁵ m.', u: true },
      { n: 5, f: 'Redshift', b: 'An increase in the observed wavelength of electromagnetic radiation from receding stars and galaxies.' },
      { n: 6, f: 'What does redshift from distant galaxies show?', b: 'The galaxies are moving away, so the Universe is expanding. This supports the Big Bang Theory.' },
      { n: 7, f: 'What powers a stable star like the Sun?', b: 'Nuclear fusion of hydrogen into helium.', u: true },
      { n: 8, f: 'Life cycle of a star from cloud to stable star', b: 'Interstellar cloud of gas and dust → gravity pulls it together and it heats up → protostar → stable star, when inward gravity is balanced by the outward force from the high core temperature.', u: true },
      { n: 9, f: 'End of a less massive star (like the Sun)', b: 'When its core hydrogen is mostly used up it becomes a red giant, then forms a planetary nebula with a white dwarf at its centre.', u: true },
      { n: 10, f: 'End of a more massive star', b: 'Red supergiant → supernova → a nebula of hydrogen and heavier elements, leaving a neutron star or a black hole. The nebula may form new stars with planets.', u: true },
      { n: 11, f: 'Cosmic microwave background radiation (CMBR)', b: 'Microwave radiation of a specific frequency observed at all points in space. It was produced shortly after the Universe formed and was expanded into the microwave region as the Universe expanded.', u: true },
      { n: 12, f: 'Hubble constant: equation, value and what 1/H₀ estimates', b: 'H₀ = v/d (recession speed ÷ distance) ≈ 2.2 × 10⁻¹⁸ per second. 1/H₀ estimates the age of the Universe.', u: true },
      { n: 13, f: 'How are a distant galaxy\'s recession speed and distance found?', b: 'Speed: from the change in wavelength (redshift) of its light.\nDistance: from the brightness of a supernova in it.', u: true },
      { n: 14, f: 'A galaxy recedes at 4.4 × 10⁶ m/s. Using H₀ = 2.2 × 10⁻¹⁸ /s, how far away is it?', b: 'd = v/H₀ = 4.4 × 10⁶ ÷ 2.2 × 10⁻¹⁸ = 2.0 × 10²⁴ m.', u: true },
    ]),
  ],
};
