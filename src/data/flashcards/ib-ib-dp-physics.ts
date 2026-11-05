/**
 * D-438 -- flashcards for IB Diploma Programme Physics (first assessment 2025).
 *
 * One block per subtopic, in syllabus order. Card ids are `<subtopic number>-<n>`
 * and are permanent (browser progress is keyed by them): add a new card with
 * the next unused n, never renumber.
 *
 * The syllabus record is not tiered, so there is no tierScheme and no u: true.
 * Additional higher level (AHL) content ends its back with "(HL only)", following
 * the HL labels on Marlbridge's own DP Physics revision notes. A.4, A.5, B.4, D.4
 * and E.2 are HL-only sub-topics, so every card in them is marked.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs 'DP Physics'); origin 'revision-notes'.
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

const ROT = 'ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and-revision-notes';
const REL = 'ib-dp-physics-galilean-and-special-relativity-frames-lorentz-revision-notes';
const THERMO = 'ib-dp-physics-first-law-of-thermodynamics-gas-processes-and-work-revision-notes';
const GPOT = 'ib-dp-physics-gravitational-potential-escape-speed-and-orbital-energy-revision-notes';

export const DECK_IB_IB_DP_PHYSICS: FlashcardDeck = {
  boardSlug: 'ib',
  qualificationSlug: 'ib-dp',
  subjectSlug: 'physics',
  syllabusCode: 'DP Physics',
  syllabusSeries: 'First assessment 2025',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  cards: [
    // A. Space, time and motion
    ...sub('ib-dp-physics-topic-a', 'ib-dp-physics-a-1', 'A.1', [
      { n: 1, f: 'Displacement vs distance', b: 'Displacement: the change in position, a vector; it can be zero or negative.\nDistance: the total path length, a scalar; never negative.' },
      { n: 2, f: 'A trolley moves 60 m east, then 20 m west, in 16 s. Average speed and average velocity?', b: 'Average speed = 80 ÷ 16 = 5.0 m s⁻¹.\nAverage velocity = 40 ÷ 16 = 2.5 m s⁻¹ east.' },
      { n: 3, f: 'Average vs instantaneous velocity on a displacement–time graph', b: 'Average: the gradient of the chord joining two points.\nInstantaneous: the gradient of the tangent at that instant.' },
      { n: 4, f: 'What do the gradient and the area of a velocity–time graph give?', b: 'Gradient: acceleration. Area: displacement (area below the time axis counts as negative).' },
      { n: 5, f: 'Equations for uniformly accelerated motion', b: 's = (u + v)t / 2\nv = u + at\ns = ut + ½at²\nv² = u² + 2as\nValid only while the acceleration is constant.' },
      { n: 6, f: 'A car at 30 m s⁻¹ brakes at 6.0 m s⁻². Stopping time and distance?', b: 't = 30 ÷ 6.0 = 5.0 s\ns = 30² ÷ (2 × 6.0) = 75 m' },
      { n: 7, f: 'Projectile with no fluid resistance: horizontal and vertical motion', b: 'Horizontal: zero acceleration, constant velocity uₓ = u cos θ.\nVertical: acceleration g downward, starting from u_y = u sin θ.\nAt the top only the vertical velocity is zero.' },
      { n: 8, f: 'Launch at 24 m s⁻¹, 40° above level ground. Time of flight and range?', b: 'uₓ = 18.4 m s⁻¹, u_y = 15.4 m s⁻¹\nT = 2u_y ÷ g = 3.15 s\nRange = uₓT = 57.8 m' },
      { n: 9, f: 'Qualitative effects of fluid resistance on a projectile', b: 'Smaller range and maximum height; the path is no longer a parabola and is steeper on the way down; the horizontal velocity keeps falling; the acceleration is not constant.' },
      { n: 10, f: 'Explain how a falling body reaches terminal speed', b: 'As speed rises, drag rises, so the resultant force and the acceleration fall. When drag equals weight the acceleration is zero and the speed is constant.' },
    ]),
    ...sub('ib-dp-physics-topic-a', 'ib-dp-physics-a-2', 'A.2', [
      { n: 1, f: 'Newton’s three laws of motion', b: 'First: a body stays at rest or at constant velocity unless a resultant force acts.\nSecond: F = ma, or generally F = Δp/Δt.\nThird: the force of A on B is equal and opposite to the force of B on A.' },
      { n: 2, f: 'Static and dynamic friction', b: 'Static: Ff ≤ μs FN.\nDynamic (sliding): Ff = μd FN.' },
      { n: 3, f: 'Elastic restoring force and buoyancy', b: 'Hooke’s law: FH = −kx.\nBuoyancy: Fb = ρVg (ρ the fluid’s density, V the volume displaced).' },
      { n: 4, f: 'Linear momentum and impulse', b: 'p = mv. Impulse J = FΔt, equal to the change in momentum. Momentum is conserved unless a resultant external force acts.' },
      { n: 5, f: 'A 0.5 kg ball at 4 m s⁻¹ is hit back at 6 m s⁻¹; contact time 0.02 s. Average force?', b: 'Δp = 0.5 × 6 − 0.5 × (−4) = 5 kg m s⁻¹\nF = 5 ÷ 0.02 = 250 N' },
      { n: 6, f: 'Elastic vs inelastic collisions', b: 'Momentum is conserved in both (no external force). Kinetic energy is conserved only in an elastic collision.' },
      { n: 7, f: '2 kg at 3 m s⁻¹ hits a stationary 1 kg trolley; they move off together at 2 m s⁻¹. Elastic?', b: 'Momentum: 6 = 6, conserved. KE before 9 J, after 6 J, so the collision is inelastic.' },
      { n: 8, f: 'Centripetal acceleration', b: 'a = v²/r = ω²r = 4π²r/T², directed towards the centre. v = 2πr/T = ωr.' },
      { n: 9, f: 'What provides the centripetal force?', b: 'Not a new force: it is whichever real forces (tension, gravity, friction, normal force) give the resultant towards the centre.' },
    ]),
    ...sub('ib-dp-physics-topic-a', 'ib-dp-physics-a-3', 'A.3', [
      { n: 1, f: 'Work done by a constant force', b: 'W = Fs cos θ, θ the angle between force and displacement. Negative if θ > 90°; zero at 90°.' },
      { n: 2, f: 'A 20 N force acts at 30° to a 4.0 m displacement. Work done?', b: 'W = 20 × 4.0 × cos 30° = 69.3 J' },
      { n: 3, f: 'Kinetic, gravitational and elastic potential energy', b: 'Ek = ½mv² = p²/2m\nΔEp = mgΔh (near the Earth’s surface)\nEe = ½k(Δx)²' },
      { n: 4, f: 'When is mechanical energy conserved?', b: 'When no frictional or other resistive forces act. Otherwise the change in mechanical energy equals the work done by the non-conservative forces.' },
      { n: 5, f: 'Work done by the resultant force', b: 'Equals the change in kinetic energy, W = ΔEk.' },
      { n: 6, f: 'Two expressions for power', b: 'P = ΔW/Δt, and P = Fv for a constant force at constant velocity.' },
      { n: 7, f: 'Efficiency', b: 'η = useful energy output ÷ total energy input = useful power output ÷ total power input. No unit.' },
      { n: 8, f: 'Energy density of a fuel', b: 'The energy released per unit volume of fuel (for example MJ per litre). Efficiency then says how much of it becomes useful output.' },
      { n: 9, f: 'Sankey diagram', b: 'A diagram of energy flow in which arrow widths are proportional to energy; the outputs add up to the input.' },
    ]),
    ...sub('ib-dp-physics-topic-a', 'ib-dp-physics-a-4', 'A.4', [
      { n: 1, f: 'Torque', b: 'The turning effect of a force about an axis, τ = Fr sin θ, in N m. (HL only)', src: ROT },
      { n: 2, f: 'Rotational equilibrium', b: 'Zero resultant torque. The body can still rotate at constant ω; it need not be at rest. (HL only)', src: ROT },
      { n: 3, f: 'Moment of inertia', b: 'How the distribution of mass about an axis resists a change in rotation, in kg m². For point masses I = Σmr². (HL only)', src: ROT },
      { n: 4, f: 'Newton’s second law for rotation', b: 'τ = Iα, where τ is the resultant torque and α the angular acceleration. (HL only)' },
      { n: 5, f: 'Angular momentum, and when it is conserved', b: 'L = Iω, in kg m² s⁻¹. Conserved if no resultant external torque acts. (HL only)', src: ROT },
      { n: 6, f: 'Angular impulse', b: 'τΔt, equal to the change in angular momentum. (HL only)', src: ROT },
      { n: 7, f: 'Rotational kinetic energy', b: 'Ek = ½Iω² = L²/2I. (HL only)' },
      { n: 8, f: 'A spinning body’s I falls to a third, with no external torque. What happens to ω and Ek?', b: 'L is conserved, so ω triples, and Ek = L²/2I also triples. The extra energy comes from work done on the body. (HL only)' },
      { n: 9, f: 'A hoop (I = mr²) rolls without slipping from rest down a drop of 0.80 m. Speed at the bottom?', b: 'mgh = ½mv² + ½mv² = mv², so v = √(gh) = √(9.81 × 0.80) = 2.80 m s⁻¹. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-a', 'ib-dp-physics-a-5', 'A.5', [
      { n: 1, f: 'Inertial frame', b: 'A frame of reference that is not accelerating. (HL only)', src: REL },
      { n: 2, f: 'The two postulates of special relativity', b: 'The laws of physics are the same in every inertial frame. The speed of light in a vacuum is the same in all inertial frames, whatever the motion of source or observer. (HL only)' },
      { n: 3, f: 'Galilean transformation', b: 'x′ = x − vt, t′ = t, u′ = u − v. It works at low speeds but fails for light. (HL only)' },
      { n: 4, f: 'Lorentz factor and Lorentz transformations', b: 'γ = 1/√(1 − v²/c²)\nx′ = γ(x − vt)\nt′ = γ(t − vx/c²) (HL only)' },
      { n: 5, f: 'Proper time interval', b: 'The time between two events measured in the frame where both happen at the same place. It is the shortest interval; Δt = γΔt₀. (HL only)', src: REL },
      { n: 6, f: 'Proper length', b: 'The length of an object measured in the frame where it is at rest. It is the longest; L = L₀/γ along the motion. (HL only)', src: REL },
      { n: 7, f: 'A clock in a spacecraft ticks every 3.0 μs; the craft moves at 0.80c. Interval measured outside?', b: 'γ = 1/√(1 − 0.64) = 1.667, so Δt = 3.0 × 1.667 = 5.0 μs. (HL only)' },
      { n: 8, f: 'Relativistic velocity addition', b: 'u′ = (u − v) / (1 − uv/c²). The result is always below c. (HL only)' },
      { n: 9, f: 'Space-time interval', b: '(Δs)² = (cΔt)² − (Δx)². It is invariant: the same in all inertial frames. (HL only)' },
      { n: 10, f: 'Muon evidence for special relativity', b: 'In the Earth frame, the muon lifetime is dilated. In the muon frame, the distance is contracted. Both lead to the same result. (HL only)', src: REL },
    ]),

    // B. The particulate nature of matter
    ...sub('ib-dp-physics-topic-b', 'ib-dp-physics-b-1', 'B.1', [
      { n: 1, f: 'Internal energy', b: 'The sum, over all molecules, of the intermolecular potential energy and the random kinetic energy.' },
      { n: 2, f: 'Temperature and average kinetic energy', b: 'Temperature (in kelvin) measures the average random kinetic energy per particle: Ek = (3/2)kB T. It is not a measure of total internal energy.' },
      { n: 3, f: 'Average kinetic energy of a gas particle at 620 K? (kB = 1.38 × 10⁻²³ J K⁻¹)', b: 'Ek = 1.5 × 1.38 × 10⁻²³ × 620 = 1.28 × 10⁻²⁰ J' },
      { n: 4, f: 'Specific heat capacity and specific latent heat equations', b: 'Q = mcΔT (temperature change, no change of phase)\nQ = mL (change of phase at constant temperature)' },
      { n: 5, f: 'What happens to the particles during a phase change?', b: 'The temperature and average kinetic energy stay constant; the energy supplied increases the potential energy as the particles separate.' },
      { n: 6, f: 'Evaporation vs boiling', b: 'Evaporation: at the surface, at any temperature.\nBoiling: throughout the liquid, at the boiling point.' },
      { n: 7, f: 'Rate of thermal conduction', b: 'ΔQ/Δt = kA ΔT/Δx, where k is the thermal conductivity (W m⁻¹ K⁻¹), A the area and ΔT/Δx the temperature gradient.' },
      { n: 8, f: 'Convection', b: 'Heated fluid expands and becomes less dense, so it rises while cooler, denser fluid sinks to replace it, forming a convection current. It needs a fluid.' },
      { n: 9, f: 'Black body', b: 'An ideal body that absorbs all radiation incident on it and emits the maximum power for its temperature.' },
      { n: 10, f: 'Stefan–Boltzmann law, and the effect of doubling T', b: 'L = σAT⁴ (σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴, T in kelvin). Doubling T multiplies L by 16.' },
      { n: 11, f: 'Apparent brightness and Wien’s law', b: 'b = L / (4πd²), in W m⁻².\nλmax T = 2.9 × 10⁻³ m K: a hotter body peaks at a shorter wavelength.' },
    ]),
    ...sub('ib-dp-physics-topic-b', 'ib-dp-physics-b-2', 'B.2', [
      { n: 1, f: 'Emissivity', b: 'The power radiated per unit area by a surface divided by that of a black body at the same temperature (σT⁴). No unit. P = eσAT⁴.' },
      { n: 2, f: 'Albedo', b: 'Total scattered (reflected) power divided by total incident power. No unit, between 0 and 1. Fraction absorbed = 1 − α.' },
      { n: 3, f: 'Solar constant, and why the mean incoming intensity is S/4', b: 'S: the intensity of the Sun’s radiation at the planet’s distance, on a surface facing the Sun at the top of the atmosphere. The planet intercepts S × πR² but has surface area 4πR².' },
      { n: 4, f: 'Equilibrium temperature of a planet with no atmosphere', b: 'Absorbed = emitted: S(1 − α)/4 = eσT⁴, so T = [S(1 − α)/(4eσ)]^(1/4).' },
      { n: 5, f: 'S = 1800 W m⁻², α = 0.50, e = 1. Equilibrium temperature?', b: 'Absorbed = 1800 × 0.50 ÷ 4 = 225 W m⁻². T⁴ = 225 ÷ 5.67 × 10⁻⁸ = 3.97 × 10⁹, so T = 251 K.' },
      { n: 6, f: 'Four main greenhouse gases', b: 'Carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O) and water vapour (H₂O).' },
      { n: 7, f: 'Why do greenhouse gases absorb infrared but not sunlight?', b: 'Their molecules have vibrational energy gaps (or natural frequencies) matching infrared photons. Sunlight peaks near 500 nm and passes through; the surface’s radiation peaks near 10 μm and is absorbed.' },
      { n: 8, f: 'How do greenhouse gases warm the surface?', b: 'They absorb infrared from the surface and re-emit it in all directions, so part returns to the surface. The surface warms until the power escaping to space equals the absorbed solar power.' },
      { n: 9, f: 'Enhanced greenhouse effect', b: 'The extra warming caused by greenhouse gases added by human activity (fossil fuels, deforestation, livestock, fertilisers).' },
    ]),
    ...sub('ib-dp-physics-topic-b', 'ib-dp-physics-b-3', 'B.3', [
      { n: 1, f: 'Pressure and amount of substance', b: 'P = F/A, F perpendicular to the surface (Pa).\nn = N/NA, with NA = 6.02 × 10²³ mol⁻¹.' },
      { n: 2, f: 'The gas laws for a fixed mass of gas', b: 'PV/T = constant (T in kelvin). Constant T: PV = constant. Constant P: V/T = constant. Constant V: P/T = constant.' },
      { n: 3, f: 'Ideal gas equation in two forms', b: 'PV = nRT (R = 8.31 J K⁻¹ mol⁻¹)\nPV = NkBT (kB = 1.38 × 10⁻²³ J K⁻¹)' },
      { n: 4, f: 'Amount of gas in 3.1 × 10⁻³ m³ at 1.5 × 10⁵ Pa and 280 K?', b: 'n = PV/RT = (1.5 × 10⁵ × 3.1 × 10⁻³) ÷ (8.31 × 280) = 0.20 mol' },
      { n: 5, f: 'Pressure from kinetic theory, and mean molecular kinetic energy', b: 'P = (1/3)ρv², where v² is the mean of the squared speeds.\n½mv² = (3/2)kBT per molecule.' },
      { n: 6, f: 'Internal energy of a monatomic ideal gas', b: 'U = (3/2)NkBT = (3/2)nRT: only random kinetic energy, because there are no intermolecular forces.' },
      { n: 7, f: 'The temperature of a gas is quadrupled. What happens to the rms speed of its molecules?', b: 'It doubles, because rms speed ∝ √T.' },
      { n: 8, f: 'When does a real gas behave most like an ideal gas?', b: 'At low pressure, low density and high temperature (well above its condensation point), where molecular volume and intermolecular forces are negligible.' },
      { n: 9, f: 'A graph of V against temperature at constant pressure meets the temperature axis where?', b: 'At 0 K, which is about −273 °C.' },
    ]),
    ...sub('ib-dp-physics-topic-b', 'ib-dp-physics-b-4', 'B.4', [
      { n: 1, f: 'First law of thermodynamics, with the sign convention', b: 'Q = ΔU + W. Q positive for heat supplied to the gas; W positive for work done by the gas (expansion); ΔU positive when the temperature rises. (HL only)' },
      { n: 2, f: 'Closed system', b: 'Matter cannot cross the boundary, but energy can cross it in either direction, as heat or as work. (HL only)', src: THERMO },
      { n: 3, f: 'Adiabatic', b: 'No thermal energy is transferred to or from the gas, so Q = 0 and ΔU = −W. (HL only)', src: THERMO },
      { n: 4, f: 'Work done by a gas, and change of internal energy of a monatomic ideal gas', b: 'W = PΔV at constant pressure; in general, the area under the P–V graph.\nΔU = (3/2)nRΔT. (HL only)' },
      { n: 5, f: 'Isothermal vs adiabatic change of a monatomic ideal gas', b: 'Isothermal: ΔU = 0, so Q = W.\nAdiabatic: Q = 0, temperature changes, PV^(5/3) = constant; its curve is steeper on a P–V graph. (HL only)' },
      { n: 6, f: 'Entropy: two expressions', b: 'ΔS = ΔQ/T (T in kelvin).\nS = kB ln Ω, where Ω is the number of microstates. (HL only)' },
      { n: 7, f: 'Second law of thermodynamics: Clausius, Kelvin and entropy forms', b: 'Clausius: heat does not flow by itself from cold to hot.\nKelvin: no cyclic device can turn all the energy from one reservoir into work.\nEntropy of an isolated system never decreases. (HL only)' },
      { n: 8, f: '750 J flows from a reservoir at 360 K to one at 250 K. Total entropy change?', b: '−750/360 + 750/250 = −2.08 + 3.00 = +0.917 J K⁻¹. Positive, so the flow is allowed. (HL only)' },
      { n: 9, f: 'Heat engine efficiency and the Carnot limit', b: 'η = W/Qh, with W = Qh − Qc.\nη_Carnot = 1 − Tc/Th (kelvin). For Th = 900 K and Tc = 300 K, η_Carnot = 0.667. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-b', 'ib-dp-physics-b-5', 'B.5', [
      { n: 1, f: 'Current, potential difference and emf', b: 'Current: rate of flow of charge, I = Δq/Δt.\nP.d.: work done per unit charge, V = W/q.\nEmf: energy transferred to each coulomb of charge by the cell.' },
      { n: 2, f: 'Resistance, Ohm’s law and resistivity', b: 'R = V/I. Ohm’s law: at constant temperature, current is directly proportional to p.d.\nR = ρL/A, where ρ (Ω m) is a property of the material.' },
      { n: 3, f: 'A wire of resistance 8.0 Ω has area 2.0 × 10⁻⁷ m² and length 1.5 m. Resistivity?', b: 'ρ = RA/L = 8.0 × 2.0 × 10⁻⁷ ÷ 1.5 = 1.1 × 10⁻⁶ Ω m' },
      { n: 4, f: 'Origin of resistance in a metal', b: 'Electrons driven by the p.d. collide with vibrating lattice ions and transfer energy to them. Hotter means larger vibrations, more collisions and higher resistance.' },
      { n: 5, f: 'Electrical power, and resistors in series and parallel', b: 'P = IV = I²R = V²/R\nSeries: Rs = R₁ + R₂ + …\nParallel: 1/Rp = 1/R₁ + 1/R₂ + …' },
      { n: 6, f: 'Real cell: emf, internal resistance and terminal p.d.', b: 'ε = I(R + r), so terminal p.d. V = ε − Ir. A graph of V against I has intercept ε and gradient −r.' },
      { n: 7, f: 'A 1.5 V cell with r = 0.60 Ω supplies 0.50 A. Terminal p.d.?', b: 'Lost volts Ir = 0.30 V, so V = 1.5 − 0.30 = 1.2 V' },
      { n: 8, f: 'I–V graphs of a filament lamp and a thermistor', b: 'Filament lamp: bends towards the V axis; heating raises R.\nThermistor (common type): bends towards the I axis as it heats; more charge carriers are freed, so R falls.' },
      { n: 9, f: 'Resistance of an ideal ammeter and an ideal voltmeter', b: 'Ammeter: zero (connected in series).\nVoltmeter: infinite (connected in parallel).' },
      { n: 10, f: 'Chemical cell vs solar cell', b: 'Both are sources of emf. A chemical cell converts stored chemical energy; a solar cell converts the energy of absorbed light, so its output depends on light intensity.' },
    ]),

    // C. Wave behaviour
    ...sub('ib-dp-physics-topic-c', 'ib-dp-physics-c-1', 'C.1', [
      { n: 1, f: 'Conditions for simple harmonic motion, and its defining equation', b: 'The net force acts towards equilibrium and is proportional to displacement (F = −kx). a = −ω²x.' },
      { n: 2, f: 'Period, frequency and angular frequency', b: 'T = 1/f = 2π/ω, with ω = 2πf in rad s⁻¹.' },
      { n: 3, f: 'Periods of a mass–spring system and a simple pendulum', b: 'T = 2π√(m/k)\nT = 2π√(l/g) (small angles)\nNeither depends on the amplitude.' },
      { n: 4, f: 'A 0.50 kg mass on a spring with k = 200 N m⁻¹. Period and ω?', b: 'T = 2π√(0.50/200) = 0.314 s; ω = 2π/T = 20 rad s⁻¹' },
      { n: 5, f: 'Where in SHM are the speed and the acceleration greatest?', b: 'Speed is greatest at equilibrium, where acceleration is zero. Acceleration is greatest at the turning points, where speed is zero.' },
      { n: 6, f: 'Energy changes during one oscillation (no damping)', b: 'Kinetic energy is maximum at equilibrium and zero at the turning points; potential energy does the opposite; the total stays constant.' },
      { n: 7, f: 'Displacement and velocity as functions of time in SHM', b: 'x = x₀ sin(ωt + φ)\nv = ωx₀ cos(ωt + φ) (HL only)' },
      { n: 8, f: 'Speed at displacement x, and total energy, in SHM', b: 'v = ±ω√(x₀² − x²)\nE_T = ½mω²x₀² (HL only)' },
      { n: 9, f: 'ω = 10 rad s⁻¹, amplitude 0.030 m. Speed at x = 0.020 m?', b: 'v = 10 × √(0.030² − 0.020²) = 0.224 m s⁻¹ (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-c', 'ib-dp-physics-c-2', 'C.2', [
      { n: 1, f: 'Travelling wave', b: 'A disturbance that transfers energy through a medium or space without the medium as a whole being shifted.' },
      { n: 2, f: 'Transverse vs longitudinal waves', b: 'Transverse: particles oscillate at right angles to the direction of travel.\nLongitudinal: particles oscillate along it, forming compressions and rarefactions.' },
      { n: 3, f: 'Wavelength, and the wave equation', b: 'Wavelength: the distance between neighbouring points in phase.\nv = fλ = λ/T.' },
      { n: 4, f: 'Sound vs electromagnetic waves', b: 'Sound: longitudinal, needs a medium, speed depends on the medium.\nEM: transverse (perpendicular electric and magnetic fields), needs no medium, all travel at c in a vacuum.' },
      { n: 5, f: 'A wave has period 0.125 s and wavelength 0.90 m. Speed and frequency?', b: 'v = 0.90 ÷ 0.125 = 7.2 m s⁻¹; f = 1/T = 8.0 Hz' },
      { n: 6, f: 'Electromagnetic spectrum, long wavelength to short', b: 'Radio, microwave, infrared, visible (about 4 to 7 × 10⁻⁷ m), ultraviolet, X-ray, gamma. Frequency increases in that order.' },
      { n: 7, f: 'On a longitudinal wave’s displacement graph, where is a compression?', b: 'At a point of zero displacement where the particles on either side are displaced towards it (a rarefaction: displaced away from it).' },
    ]),
    ...sub('ib-dp-physics-topic-c', 'ib-dp-physics-c-3', 'C.3', [
      { n: 1, f: 'Wavefront and ray', b: 'Wavefront: a line or surface joining points at the same phase.\nRay: the direction of travel and energy transfer, perpendicular to the wavefronts.' },
      { n: 2, f: 'Snell’s law and refractive index', b: 'n₁ sin θ₁ = n₂ sin θ₂, i.e. n₁/n₂ = sin θ₂/sin θ₁ = v₂/v₁.\nn = c/v.' },
      { n: 3, f: 'What changes at a boundary when a wave refracts?', b: 'Speed and wavelength change (and usually direction). Frequency stays the same.' },
      { n: 4, f: 'Critical angle from n = 1.45 into n = 1.20?', b: 'sin C = 1.20 ÷ 1.45 = 0.8276, so C = 55.9°. Total internal reflection if the angle of incidence exceeds C.' },
      { n: 5, f: 'When is diffraction significant?', b: 'When the gap or obstacle is about the same size as the wavelength or smaller. Speed, wavelength and frequency do not change.' },
      { n: 6, f: 'Principle of superposition', b: 'Where waves meet, the resultant displacement is the sum of the individual displacements, signs included.' },
      { n: 7, f: 'Conditions for constructive and destructive interference (coherent sources in phase)', b: 'Constructive: path difference = nλ.\nDestructive: path difference = (n + ½)λ.\nCoherent: same frequency, constant phase difference.' },
      { n: 8, f: 'Young’s double slit: λ = 589 nm, d = 0.45 mm, D = 1.35 m. Fringe separation?', b: 's = λD/d = 589 × 10⁻⁹ × 1.35 ÷ 0.45 × 10⁻³ = 1.77 × 10⁻³ m' },
      { n: 9, f: 'Single-slit diffraction: angle of the first minimum', b: 'θ = λ/b (radians), b the slit width. A narrower slit gives a wider, dimmer central maximum. (HL only)' },
      { n: 10, f: 'Diffraction grating equation, with an example', b: 'nλ = d sin θ. 700 lines per mm gives d = 1.43 × 10⁻⁶ m; a second order at 40.0° gives λ = d sin θ / 2 = 459 nm. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-c', 'ib-dp-physics-c-4', 'C.4', [
      { n: 1, f: 'Standing wave, node and antinode', b: 'The superposition of two matching waves travelling in opposite directions; no net energy is carried along. Node: permanently zero amplitude. Antinode: maximum amplitude.' },
      { n: 2, f: 'Distances in a standing wave', b: 'Node to adjacent node: λ/2.\nNode to adjacent antinode: λ/4.' },
      { n: 3, f: 'Allowed frequencies for a string fixed at both ends and a pipe open at both ends', b: 'f = nv/2L, all harmonics n = 1, 2, 3, …' },
      { n: 4, f: 'Allowed frequencies for a pipe closed at one end', b: 'f = nv/4L, odd harmonics only (n = 1, 3, 5, …).' },
      { n: 5, f: 'A string of length 0.80 m has wave speed 240 m s⁻¹. First harmonic?', b: 'f₁ = 240 ÷ (2 × 0.80) = 150 Hz' },
      { n: 6, f: 'Resonance', b: 'A large-amplitude response when the driving frequency is at or very near a natural frequency of the system.' },
      { n: 7, f: 'Light, critical and heavy damping', b: 'Light: several oscillations of decreasing amplitude.\nCritical: fastest return to equilibrium with no overshoot.\nHeavy: no oscillation, but a slower return than critical.' },
      { n: 8, f: 'Effect of increasing damping on a resonance curve', b: 'Lower peak amplitude, a broader peak, and the peak moves slightly below the natural frequency.' },
    ]),
    ...sub('ib-dp-physics-topic-c', 'ib-dp-physics-c-5', 'C.5', [
      { n: 1, f: 'Doppler effect', b: 'The change in observed frequency (and wavelength) when the source and observer are in relative motion.' },
      { n: 2, f: 'Moving source vs moving observer', b: 'Moving source: wavefronts bunch up in front (shorter λ, higher f) and spread out behind.\nMoving observer: λ is unchanged, but wavefronts are met more or less often.' },
      { n: 3, f: 'Doppler shift for light (v much less than c)', b: 'Δf/f = Δλ/λ ≈ v/c. A positive Δλ (redshift) means recession; blueshift means approach.' },
      { n: 4, f: 'Doppler formula for sound from a moving source', b: 'f′ = f v / (v ± us): minus when the source moves towards the observer, plus when it moves away. (HL only)' },
      { n: 5, f: 'A 300 Hz source recedes at 17 m s⁻¹ (v = 340 m s⁻¹). Observed frequency?', b: 'f′ = 300 × 340 ÷ (340 + 17) = 286 Hz (HL only)' },
      { n: 6, f: 'Doppler formula for sound with a moving observer', b: 'f′ = f (v ± uo) / v: plus when moving towards the source, minus when moving away. (HL only)' },
      { n: 7, f: 'Two applications of the Doppler effect', b: 'Doppler ultrasound: the shifted echo from moving blood gives its speed and direction.\nRadar speed checks: microwaves reflected from a moving vehicle are shifted.' },
    ]),

    // D. Fields
    ...sub('ib-dp-physics-topic-d', 'ib-dp-physics-d-1', 'D.1', [
      { n: 1, f: 'Kepler’s three laws', b: 'First: orbits are ellipses with the Sun at a focus.\nSecond: the Sun–planet line sweeps out equal areas in equal times.\nThird: T² ∝ r³.' },
      { n: 2, f: 'Newton’s law of gravitation', b: 'F = Gm₁m₂/r², attractive, along the line joining the centres (r centre to centre). G = 6.67 × 10⁻¹¹ N m² kg⁻².' },
      { n: 3, f: 'Gravitational field strength', b: 'g = F/m, the force per unit mass on a small point mass (N kg⁻¹). For a point mass or uniform sphere, g = GM/r².' },
      { n: 4, f: 'g at 500 km above a planet of mass 6.0 × 10²³ kg and radius 3.0 × 10⁶ m?', b: 'r = 3.5 × 10⁶ m, g = 6.67 × 10⁻¹¹ × 6.0 × 10²³ ÷ (3.5 × 10⁶)² = 3.27 N kg⁻¹' },
      { n: 5, f: 'A second moon orbits at twice the radius of a moon with period 2.0 days. Its period?', b: 'T ∝ r^(3/2), so T = 2.0 × 2^(3/2) = 5.7 days' },
      { n: 6, f: 'When can an extended body be treated as a point mass?', b: 'When it is spherically symmetric (such as a uniform sphere), or the separation is much larger than the size of either body.' },
      { n: 7, f: 'Gravitational potential at a point', b: 'The work done per kilogram to bring a small test mass from infinity to the point: Vg = −GM/r. Zero at infinity, negative everywhere else. (HL only)' },
      { n: 8, f: 'Escape speed', b: 'The speed at a point that lets a body reach infinity with no kinetic energy left: vesc = √(2GM/r), independent of the body’s mass. (HL only)', src: GPOT },
      { n: 9, f: 'Orbital speed and total energy of a satellite in a circular orbit', b: 'v = √(GM/r). Ek = GMm/2r, Ep = −GMm/r, so E = −GMm/2r. (HL only)' },
      { n: 10, f: 'Atmospheric drag acts on a satellite. Effect on its orbit?', b: 'Total energy decreases, so the radius decreases and the speed increases (Ek rises while Ep falls by twice as much). (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-d', 'ib-dp-physics-d-2', 'D.2', [
      { n: 1, f: 'Coulomb’s law', b: 'F = kq₁q₂/r², k = 1/(4πε₀) ≈ 8.99 × 10⁹ N m² C⁻². Like charges repel, unlike attract.' },
      { n: 2, f: 'Force between 2.0 μC and 3.0 μC point charges 0.10 m apart?', b: 'F = 8.99 × 10⁹ × 2.0 × 10⁻⁶ × 3.0 × 10⁻⁶ ÷ 0.10² = 5.4 N (repulsive)' },
      { n: 3, f: 'What did Millikan’s experiment show?', b: 'Balanced charged oil drops (qE = mg) always carried whole-number multiples of e = 1.60 × 10⁻¹⁹ C, so charge is quantised.' },
      { n: 4, f: 'Three ways to charge a body', b: 'Friction: electrons transfer, giving equal and opposite charges.\nContact: charge is shared, same sign.\nInduction (with earthing): opposite sign to the charged body.' },
      { n: 5, f: 'Electric field strength', b: 'E = F/q, the force per unit positive test charge (N C⁻¹ or V m⁻¹). Point charge: E = kQ/r². Parallel plates: E = V/d, uniform.' },
      { n: 6, f: '600 V across plates 1.5 cm apart. Field strength?', b: 'E = 600 ÷ 0.015 = 4.0 × 10⁴ V m⁻¹' },
      { n: 7, f: 'Field inside and outside a charged conducting sphere', b: 'Charge sits on the surface; E = 0 inside; outside, the field is radial, as if the charge were a point at the centre.' },
      { n: 8, f: 'Electric field lines vs magnetic field lines', b: 'Electric lines start on positive and end on negative charges. Magnetic lines form closed loops (outside a magnet from N to S).' },
      { n: 9, f: 'Electric potential, and its value for a point charge', b: 'The work done per unit charge to bring a small positive test charge from infinity to the point. Ve = kQ/r, a scalar with the sign of Q. (HL only)' },
      { n: 10, f: 'Electric potential energy of two point charges, and field from potential', b: 'Ep = kq₁q₂/r (negative for unlike charges).\nE = −ΔVe/Δr: the field points towards falling potential. (HL only)' },
      { n: 11, f: 'Why is no work done moving a charge along an equipotential?', b: 'ΔVe = 0, so W = qΔVe = 0. Field lines cross equipotentials at 90°. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-d', 'ib-dp-physics-d-3', 'D.3', [
      { n: 1, f: 'Force and acceleration of a charge in an electric field', b: 'F = qE, a = qE/m. Along E for a positive charge, against it for a negative one. Crossing a uniform field at right angles gives a parabolic path.' },
      { n: 2, f: 'Magnetic force on a moving charge and on a conductor', b: 'F = qvB sin θ\nF = BIL sin θ\nθ is the angle between v (or I) and B.' },
      { n: 3, f: 'Why does a magnetic field not change a charged particle’s speed?', b: 'The force is always at right angles to the velocity, so it does no work. Only the direction changes.' },
      { n: 4, f: 'Radius and period of a charged particle’s circular path in a magnetic field', b: 'qvB = mv²/r gives r = mv/(qB).\nT = 2πm/(qB), independent of speed.' },
      { n: 5, f: 'Velocity selector', b: 'Crossed electric and magnetic fields: a particle goes straight through when qE = qvB, i.e. v = E/B, whatever its charge or mass.' },
      { n: 6, f: 'Force between two parallel current-carrying wires', b: 'F/L = μ₀I₁I₂ / (2πr), μ₀ = 4π × 10⁻⁷ T m A⁻¹. Same-direction currents attract; opposite currents repel.' },
      { n: 7, f: '10 A and 5.0 A in the same direction, 2.0 cm apart. Force per metre?', b: 'F/L = 4π × 10⁻⁷ × 10 × 5.0 ÷ (2π × 0.020) = 5.0 × 10⁻⁴ N m⁻¹, attractive' },
    ]),
    ...sub('ib-dp-physics-topic-d', 'ib-dp-physics-d-4', 'D.4', [
      { n: 1, f: 'Magnetic flux', b: 'Φ = BA cos θ, in Wb (T m²), θ the angle between B and the normal to the area. (HL only)' },
      { n: 2, f: 'Faraday’s law of induction', b: 'ε = −N ΔΦ/Δt: the induced emf equals the rate of change of flux linkage. (HL only)' },
      { n: 3, f: 'Emf induced in a straight conductor moving through a field', b: 'ε = BvL, with B, v and the conductor mutually perpendicular. (HL only)' },
      { n: 4, f: 'Lenz’s law', b: 'The induced current opposes the change in flux that produces it, as conservation of energy requires (work must be done to produce the electrical energy). (HL only)' },
      { n: 5, f: 'A 60-turn coil’s flux rises uniformly from 0 to 4.0 × 10⁻³ Wb in 0.50 s. Emf?', b: '60 × 4.0 × 10⁻³ ÷ 0.50 = 0.48 V (zero while the flux then stays constant). (HL only)' },
      { n: 6, f: 'Emf of a coil rotating in a uniform field', b: 'ε = NBAω sin ωt, peak NBAω. Zero when the coil’s plane is perpendicular to B (flux maximum); peak when parallel. (HL only)' },
      { n: 7, f: 'A generator’s rotation frequency is increased by a factor k. Effect on its output?', b: 'Peak emf × k and period ÷ k: a taller, narrower sine wave. (HL only)' },
    ]),

    // E. Nuclear and quantum physics
    ...sub('ib-dp-physics-topic-e', 'ib-dp-physics-e-1', 'E.1', [
      { n: 1, f: 'Geiger–Marsden–Rutherford scattering: observations and conclusions', b: 'Nearly all alpha particles go straight through: mostly empty space.\nA few deflect through large angles; very few bounce back: a tiny, massive, positive nucleus.' },
      { n: 2, f: 'Nucleon number, proton number and neutron number', b: 'A: protons + neutrons. Z: protons. N = A − Z. A neutral atom has Z electrons.' },
      { n: 3, f: 'Continuous, emission and absorption spectra', b: 'Continuous: all wavelengths (hot, dense solid).\nEmission: bright lines (excited gas, electrons falling).\nAbsorption: dark lines on a continuous spectrum (cool gas absorbing matching photons).' },
      { n: 4, f: 'What do line spectra show about atoms?', b: 'Energy levels are discrete. A photon emitted or absorbed has energy equal to the gap between two levels: E = hf, λ = hc/ΔE.' },
      { n: 5, f: 'Levels at −8.0, −3.0 and −1.0 eV. Is a 4.0 eV photon absorbed from the ground state?', b: 'No: the gaps are 5.0, 7.0 and 2.0 eV, and none equals 4.0 eV.' },
      { n: 6, f: 'The electronvolt', b: '1 eV = 1.60 × 10⁻¹⁹ J, the energy gained by charge e moved through 1 V.' },
      { n: 7, f: 'Nuclear radius and nuclear density', b: 'R = R₀A^(1/3) (R₀ ≈ 1.2 fm). The volume is proportional to A, so all nuclei have about the same density. (HL only)' },
      { n: 8, f: 'Distance of closest approach of an alpha particle to a nucleus', b: 'All the kinetic energy becomes electric potential energy: Ek = k(2e)(Ze)/d, so d = 2kZe²/Ek. (HL only)' },
      { n: 9, f: 'Bohr model energy levels of hydrogen, and the n = 3 to n = 2 photon', b: 'E = −13.6/n² eV (with mvr = nh/2π). 3 → 2: 13.6 × (1/4 − 1/9) = 1.89 eV, about 658 nm. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-e', 'ib-dp-physics-e-2', 'E.2', [
      { n: 1, f: 'Threshold frequency and work function', b: 'Threshold frequency f₀: the lowest frequency that releases photoelectrons from a given metal.\nWork function Φ: the least energy needed to free an electron at the surface. hf₀ = Φ. (HL only)' },
      { n: 2, f: 'Einstein’s photoelectric equation', b: 'Emax = hf − Φ. One photon gives all its energy to one electron; Φ is used to free it and the rest is kinetic energy. (HL only)' },
      { n: 3, f: 'Three photoelectric observations that wave theory cannot explain', b: 'A threshold frequency, whatever the intensity; Emax rises with frequency but not intensity; emission with no measurable delay, even in faint light. (HL only)' },
      { n: 4, f: 'Graph of stopping potential against frequency', b: 'A straight line: gradient h/e, horizontal intercept f₀, vertical intercept −Φ/e. All metals give parallel lines. (HL only)' },
      { n: 5, f: '360 nm light needs a stopping potential of 0.80 V. Work function?', b: 'Photon energy = hc/λ = 5.52 × 10⁻¹⁹ J = 3.45 eV, so Φ = 3.45 − 0.80 = 2.65 eV. (HL only)' },
      { n: 6, f: 'De Broglie wavelength, and the evidence for matter waves', b: 'λ = h/p. Electrons (and neutrons, atoms) diffract, and diffraction is a wave property. For an electron accelerated through V, p = √(2meV). (HL only)' },
      { n: 7, f: 'Compton scattering', b: 'A photon scatters from an electron with a longer wavelength: Δλ = (h/mₑc)(1 − cos θ), h/mₑc = 2.43 × 10⁻¹² m. It shows photons carry momentum. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-e', 'ib-dp-physics-e-3', 'E.3', [
      { n: 1, f: 'Mass defect and binding energy', b: 'Mass defect: mass of the separated nucleons minus the mass of the nucleus.\nBinding energy: its energy equivalent, the energy needed to separate the nucleus into free nucleons. 1 u = 931.5 MeV/c².' },
      { n: 2, f: 'Shape of the binding energy per nucleon curve', b: 'Rises steeply for light nuclides (high point at helium-4), broad peak near A = 56 to 62 at about 8.8 MeV per nucleon, then falls slowly to about 7.6 MeV at uranium.' },
      { n: 3, f: 'Strong nuclear force', b: 'An attractive force between nucleons acting over only a few femtometres.' },
      { n: 4, f: 'Alpha, beta-minus, beta-plus and gamma decay', b: 'α: He-4 nucleus, A − 4, Z − 2.\nβ⁻: electron + antineutrino, Z + 1.\nβ⁺: positron + neutrino, Z − 1.\nγ: photon, no change to A or Z.' },
      { n: 5, f: 'Random and spontaneous decay', b: 'Random: which nucleus decays next, and when, cannot be predicted.\nSpontaneous: not triggered or changed by outside conditions such as temperature or pressure.' },
      { n: 6, f: 'Activity vs count rate, and correcting for background', b: 'Activity: decays per unit time in the source (Bq). Count rate: what the detector registers. Subtract the background count rate before halving or plotting.' },
      { n: 7, f: 'A source of 1280 Bq has a half-life of 20 min. Activity after 1.0 h?', b: '60 ÷ 20 = 3 half-lives, so 1280 ÷ 8 = 160 Bq' },
      { n: 8, f: 'Radioactive decay law and the decay constant', b: 'N = N₀e^(−λt), A = λN, T½ = ln 2 / λ. λ is the probability per unit time that a nucleus decays. (HL only)' },
      { n: 9, f: 'Why does the continuous beta spectrum show a neutrino exists?', b: 'Beta electrons have a range of energies up to a maximum, so a third particle (the neutrino or antineutrino) must share the energy. (HL only)' },
    ]),
    ...sub('ib-dp-physics-topic-e', 'ib-dp-physics-e-4', 'E.4', [
      { n: 1, f: 'Spontaneous vs neutron-induced fission', b: 'Spontaneous: no trigger needed; rare.\nNeutron-induced: the nucleus (such as uranium-235) absorbs a neutron and then splits into two fragments, usually releasing two or three neutrons.' },
      { n: 2, f: 'Why does fission release energy?', b: 'The fragments have a higher binding energy per nucleon than the parent, so the products have less mass. Energy released = Δm c², mostly as kinetic energy of the fragments.' },
      { n: 3, f: 'U-235 + n → Xe-140 + Sr-94 + 2n loses 0.198264 u. Energy released?', b: '0.198264 × 931.5 = 185 MeV (2.96 × 10⁻¹¹ J)' },
      { n: 4, f: 'Subcritical, critical and supercritical chain reactions', b: 'k = average number of neutrons per fission causing another fission.\nk < 1: dies away. k = 1: steady (a power plant). k > 1: grows.' },
      { n: 5, f: 'Role of the moderator vs the control rods', b: 'Moderator: slows fast neutrons by elastic collisions so they can cause fission.\nControl rods: absorb neutrons to keep k = 1, or below 1 to shut down.' },
      { n: 6, f: 'Role of the heat exchanger and of shielding', b: 'Heat exchanger: passes thermal energy from the radioactive primary coolant to a second circuit that makes steam.\nShielding: absorbs neutrons and gamma rays from the core.' },
      { n: 7, f: 'Why is there a critical mass, and why is uranium enriched?', b: 'Bigger pieces lose a smaller fraction of neutrons through the surface. Natural uranium is only about 0.7% uranium-235; enrichment raises this fraction.' },
    ]),
    ...sub('ib-dp-physics-topic-e', 'ib-dp-physics-e-5', 'E.5', [
      { n: 1, f: 'Why is a main sequence star stable?', b: 'Outward pressure from hot gas and radiation balances inward gravity at every layer. If the core cools the star contracts and heats; if it heats it expands and cools.' },
      { n: 2, f: 'Conditions needed for fusion in a star', b: 'High temperature, so nuclei can overcome their electric repulsion, and high density, so collisions are frequent.' },
      { n: 3, f: 'Four hydrogen atoms (1.007825 u each) fuse to helium-4 (4.002603 u). Energy released?', b: 'Mass lost = 0.028697 u, so 0.028697 × 931.5 = 26.7 MeV (about 0.7% of the mass).' },
      { n: 4, f: 'Hertzsprung–Russell diagram: axes and main regions', b: 'Luminosity up, temperature across (increasing to the left). Main sequence: diagonal band. Red giants: upper right. Super giants: top. White dwarfs: bottom left.' },
      { n: 5, f: 'Parallax distance, with an example', b: 'd (pc) = 1 / p (arc-second). p = 0.0125″ gives 80 pc (about 261 ly). 1 pc = 3.26 ly = 3.09 × 10¹⁶ m.' },
      { n: 6, f: 'Evolution of a low-mass star and of a high-mass star', b: 'Low mass: main sequence → red giant → outer layers shed → white dwarf.\nHigh mass: main sequence → super giant → supernova → neutron star or black hole.' },
      { n: 7, f: 'Two stars have the same luminosity; one has half the surface temperature. Compare radii.', b: 'L = 4πσR²T⁴, so R ∝ 1/T² at fixed L: the cooler star has four times the radius.' },
      { n: 8, f: 'Why does a star leave the main sequence?', b: 'Core hydrogen runs out, core fusion falls, gravity wins, the core contracts and heats, fusion continues in a shell, and the outer layers expand and cool.' },
    ]),
  ],
};
