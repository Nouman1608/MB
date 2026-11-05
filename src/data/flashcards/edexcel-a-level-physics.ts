/**
 * D-438 -- flashcards for Pearson Edexcel International Advanced Level Physics
 * YPH11 (Issue 3).
 *
 * One block per subtopic (specification content section), in syllabus order.
 * Card ids are `<subtopic number>-<n>` and are permanent (browser progress is
 * keyed by them): add a new card with the next unused n, never renumber.
 *
 *   src: '...'  The card restates that revision-notes page (found with
 *               scripts/flashcard-candidates.mjs YPH11); origin 'revision-notes'.
 *
 * Not tiered, so no card carries u: true. Material the Marlbridge notes label
 * "background, beyond the specification" is left out. Plain text only (see types.ts).
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

const MAT = 'edexcel-ial-physics-materials-revision-notes';
const CIRC = 'edexcel-ial-physics-electric-circuits-revision-notes';
const DECAY = 'edexcel-ial-physics-nuclear-decay-revision-notes';
const OSC = 'edexcel-ial-physics-oscillations-revision-notes';

export const DECK_EDEXCEL_A_LEVEL_PHYSICS: FlashcardDeck = {
  boardSlug: 'edexcel',
  qualificationSlug: 'a-level',
  subjectSlug: 'physics',
  syllabusCode: 'YPH11',
  syllabusSeries: 'Issue 3',
  author: 'marlbridge-academic-team',
  updated: '2026-11-05',
  deckReview: { reviewerSlug: 'hassan', reviewedOn: '2026-11-05' },
  cards: [
    // Unit 1 Mechanics and Materials
    ...sub('unit-1-mechanics-and-materials', 'mechanics', '1.3', [
      { n: 1, f: 'The four equations of uniformly accelerated motion, and when they apply', b: 'v = u + at\ns = ut + ½at²\nv² = u² + 2as\ns = (u + v)t / 2\nOnly for uniform (constant) acceleration.' },
      { n: 2, f: 'What do the gradient and the area of a velocity–time graph give?', b: 'Gradient: acceleration. Area under the line: displacement. (Gradient of a displacement–time graph: velocity.)' },
      { n: 3, f: 'How do you solve a projectile problem?', b: 'Treat horizontal and vertical motion independently. Horizontal: constant velocity (no drag). Vertical: acceleration g = 9.81 m s⁻² downwards. Time links the two: find it from the vertical motion.' },
      { n: 4, f: 'Velocity of a projectile at its maximum height', b: 'The vertical component is zero, but the horizontal component is unchanged, so the velocity is not zero.' },
      { n: 5, f: 'Newton’s second law in its general form', b: 'Resultant force = rate of change of momentum, F = Δp/Δt. For constant mass this reduces to F = ma.' },
      { n: 6, f: 'Newton’s third law', b: 'If body A exerts a force on body B, B exerts a force on A that is equal in size, opposite in direction and of the same type.' },
      { n: 7, f: 'Explain how an object falling through air reaches terminal velocity', b: 'As its speed rises, drag increases until it equals the weight. The resultant force, and so the acceleration, is then zero, and the velocity is constant.' },
      { n: 8, f: 'Moment of a force, and the principle of moments', b: 'Moment = F × x, where x is the perpendicular distance from the line of action of the force to the axis. In equilibrium, the sum of clockwise moments about any point = the sum of anticlockwise moments.' },
      { n: 9, f: '60 N hangs 0.8 m left of a central pivot. Where must 40 N hang on the right to balance?', b: '40 × d = 60 × 0.8 = 48, so d = 1.2 m' },
      { n: 10, f: 'Momentum, impulse and the force–time graph', b: 'p = mv. Impulse = FΔt = Δp, which is the area under a force–time graph.' },
      { n: 11, f: 'What is conserved in elastic and in inelastic collisions?', b: 'Momentum is conserved in all collisions (no external force). Kinetic energy is conserved only in elastic collisions; in inelastic ones some becomes thermal energy, sound and deformation.' },
      { n: 12, f: 'Work done by a force at an angle θ to the displacement', b: 'W = Fs cos θ. Only the component along the displacement does work, so a force perpendicular to the motion does no work.' },
      { n: 13, f: 'Two expressions for power', b: 'P = W/t, and P = Fv for a force F moving its point of application at velocity v.' },
      { n: 14, f: 'Core Practical 1', b: 'Determine the acceleration of a freely-falling object (g), using light gates or strobe/video photography.' },
    ]),
    ...sub('unit-1-mechanics-and-materials', 'materials', '1.4', [
      { n: 1, f: 'Density, and upthrust', b: 'ρ = m/V. Upthrust = weight of fluid displaced = ρgV (ρ the fluid’s density, V the volume displaced).' },
      { n: 2, f: 'Stokes’ law, and when it applies', b: 'F = 6πηrv, the viscous drag on a small sphere of radius r moving at speed v. Only for small spheres at low speed in laminar flow.' },
      { n: 3, f: 'Forces on a sphere falling at terminal velocity in a liquid', b: 'Weight = upthrust + viscous drag (three forces). Leaving out upthrust is the usual error.' },
      { n: 4, f: 'How does viscosity change with temperature?', b: 'For liquids it decreases as temperature rises. For gases it increases.' },
      { n: 5, f: 'Hooke’s law', b: 'F = kΔx: extension is proportional to the applied force, up to the limit of proportionality.' },
      { n: 6, f: 'Elastic vs plastic deformation', b: 'Elastic: the material returns to its original shape when the force is removed. Plastic: the deformation is permanent.' },
      { n: 7, f: 'Stress, strain and the Young modulus', b: 'stress = F/A (Pa)\nstrain = Δx/x (no unit)\nE = stress/strain = Fx/(AΔx)\nE is a property of the material, not of the specimen.' },
      { n: 8, f: 'A 2.00 m wire (area 1.5 × 10⁻⁷ m²) extends 3.0 mm under 45 N. Young modulus?', b: 'stress = 45 ÷ 1.5 × 10⁻⁷ = 3.0 × 10⁸ Pa\nstrain = 0.0030 ÷ 2.00 = 1.5 × 10⁻³\nE = 2.0 × 10¹¹ Pa' },
      { n: 9, f: 'Core Practical 3: why is a long, thin wire used to find the Young modulus?', b: 'Long, so the extension is large enough to measure. Thin, so a modest load gives a large stress. Measure the diameter at several points with a micrometer.' },
      { n: 10, f: 'Elastic strain energy', b: 'The area under the force–extension graph. In the linear region, E = ½FΔx.' },
      { n: 11, f: 'Strong', b: 'Has a high breaking stress.', src: MAT },
      { n: 12, f: 'Stiff', b: 'Has a high Young modulus.', src: MAT },
      { n: 13, f: 'Tough', b: 'Absorbs a lot of energy before it fractures.', src: MAT },
      { n: 14, f: 'Brittle', b: 'Breaks with no plastic deformation (glass, for example).', src: MAT },
      { n: 15, f: 'Ductile', b: 'Can undergo large plastic deformation, so it can be drawn into a wire (copper, for example).', src: MAT },
    ]),

    // Unit 2 Waves and Electricity
    ...sub('unit-2-waves-and-electricity', 'waves-and-particle-nature-of-light', '2.3', [
      { n: 1, f: 'Wave equation and period', b: 'v = fλ, T = 1/f' },
      { n: 2, f: 'Why does polarisation show that light is a transverse wave?', b: 'Only transverse waves have oscillations in more than one plane perpendicular to the direction of travel, so only they can be polarised. Sound (longitudinal) cannot be polarised.' },
      { n: 3, f: 'Refractive index and Snell’s law', b: 'n = c/v\nn₁ sin θ₁ = n₂ sin θ₂' },
      { n: 4, f: 'Two conditions for total internal reflection', b: 'Light travels from a medium of higher refractive index to one of lower refractive index, and the angle of incidence is greater than the critical angle (sin C = n₂/n₁).' },
      { n: 5, f: 'Coherent sources', b: 'Sources with the same frequency and a constant phase difference. Needed for a stable interference pattern.' },
      { n: 6, f: 'Path difference for constructive and destructive interference (sources in phase)', b: 'Constructive: path difference = nλ.\nDestructive: path difference = (n + ½)λ.' },
      { n: 7, f: 'How does a stationary wave form, and how far apart are the nodes?', b: 'Two waves of equal frequency and amplitude travel in opposite directions and superpose. Adjacent nodes are λ/2 apart.' },
      { n: 8, f: 'Speed of a transverse wave on a stretched string (Core Practical 5)', b: 'v = √(T/μ), where T is the tension and μ the mass per unit length.' },
      { n: 9, f: 'Diffraction grating equation', b: 'nλ = d sin θ, where d is the slit spacing and n the order.' },
      { n: 10, f: '589 nm light falls on a grating with 500 lines per mm. First-order angle?', b: 'd = 1/(500 × 1000) = 2.0 × 10⁻⁶ m\nsin θ = 589 × 10⁻⁹ ÷ 2.0 × 10⁻⁶ = 0.2945\nθ = 17.1°' },
      { n: 11, f: 'Huygens’ construction', b: 'Every point on a wavefront acts as a source of secondary wavelets; the new wavefront is the envelope of these wavelets. Used to explain diffraction.' },
      { n: 12, f: 'Photon energy, and the photoelectric equation', b: 'E = hf = hc/λ\nhf = φ + ½mv²max' },
      { n: 13, f: 'Work function and threshold frequency', b: 'Work function φ: the minimum energy needed to remove an electron from the metal surface.\nThreshold frequency f₀: below it, no electrons are emitted at any intensity (hf₀ = φ).' },
      { n: 14, f: 'Why does the photoelectric effect support a particle model of light?', b: 'One photon gives all its energy to one electron, and energy is not accumulated. So below f₀ there is no emission however intense the light; above it emission is instantaneous; intensity changes only the rate of emission.' },
      { n: 15, f: 'De Broglie wavelength, and the evidence for it', b: 'λ = h/p = h/mv. Electrons passing through a thin graphite film produce diffraction rings, and diffraction is a wave property.' },
      { n: 16, f: 'Why are line spectra discrete?', b: 'Electron energy levels are discrete, so only photons with energy hf = E₂ − E₁ can be emitted or absorbed.' },
      { n: 17, f: 'Intensity', b: 'Power per unit area: I = P/A.' },
    ]),
    ...sub('unit-2-waves-and-electricity', 'electric-circuits', '2.4', [
      { n: 1, f: 'Current in terms of charge carriers', b: 'I = Q/t, and I = nAvq: number density × cross-sectional area × drift velocity × charge on each carrier.' },
      { n: 2, f: 'Why does a thinner section of wire heat up more, for the same current?', b: 'From I = nAvq, a smaller area A needs a larger drift velocity v, so electrons collide more often with the lattice and transfer more energy there.' },
      { n: 3, f: 'Resistivity, and how it differs from resistance', b: 'R = ρL/A. Resistivity ρ (Ω m) is a property of the material; resistance R is a property of the specimen.' },
      { n: 4, f: 'Three expressions for electrical power', b: 'P = VI = I²R = V²/R' },
      { n: 5, f: 'Filament lamp I–V characteristic', b: 'A curve that flattens: as the current rises the temperature rises, lattice vibrations increase and the resistance rises.', src: CIRC },
      { n: 6, f: 'Diode I–V characteristic', b: 'Almost no current until about 0.6 V in forward bias, then a sharp rise; effectively no current in reverse.', src: CIRC },
      { n: 7, f: 'Why does the resistance of an NTC thermistor fall as it gets hotter?', b: 'Heating releases more charge carriers, and this outweighs the increased lattice vibration.' },
      { n: 8, f: 'Kirchhoff’s first law', b: 'The current into a junction equals the current out. A consequence of conservation of charge.', src: CIRC },
      { n: 9, f: 'Kirchhoff’s second law', b: 'Around any closed loop, the sum of the e.m.f.s equals the sum of the p.d.s. A consequence of conservation of energy.', src: CIRC },
      { n: 10, f: 'Resistors in series and in parallel', b: 'Series: R = R₁ + R₂\nParallel: 1/R = 1/R₁ + 1/R₂' },
      { n: 11, f: 'E.m.f. vs potential difference', b: 'E.m.f.: energy supplied to each coulomb of charge by the source.\nP.d.: energy transferred from each coulomb of charge in a component.' },
      { n: 12, f: 'Internal resistance equation, and the graph used in Core Practical 8', b: 'E = I(R + r), so V = E − Ir. A graph of terminal p.d. V against current I has gradient −r and intercept E.' },
      { n: 13, f: 'A cell (e.m.f. 6.0 V, r = 0.50 Ω) drives a 5.5 Ω resistor. Current and terminal p.d.?', b: 'I = 6.0 ÷ 6.0 = 1.0 A\nV = 6.0 − 1.0 × 0.50 = 5.5 V' },
      { n: 14, f: 'Potential divider output', b: 'V_out = V_in × R₂ / (R₁ + R₂). Using a thermistor or LDR as one resistor makes the output depend on temperature or light.' },
      { n: 15, f: 'Core Practical 7', b: 'Determine the resistivity of a material: measure length and diameter (micrometer) and use the gradient of a graph of R against length (or against l/A).' },
    ]),

    // Unit 3 Practical Skills in Physics I
    ...sub('unit-3-practical-skills-in-physics-i', 'planning-unit-3-yph11', '3.3', [
      { n: 1, f: 'Resolution of a metre rule, Vernier calipers and a micrometer screw gauge', b: 'Metre rule: 1 mm.\nVernier calipers: 0.1 mm.\nMicrometer: 0.01 mm.' },
      { n: 2, f: 'Uncertainty in a single reading', b: 'Half the resolution of the instrument (for example ±0.5 mm on a metre rule).' },
      { n: 3, f: 'Correcting a zero error', b: 'A zero error is systematic: every reading is shifted by the same amount. Subtract a positive zero error; add the size of a negative one. Repeating does not remove it.' },
      { n: 4, f: 'How should safety be written in a plan?', b: 'As a pair: the specific hazard and its precaution (for example, a falling mass: a sand tray and feet kept clear).' },
      { n: 5, f: 'When are repeat readings useful, and when not?', b: 'Useful where there is random scatter (hand timing, a wire’s diameter). Not useful for a zero error or a digital reading that does not change.' },
      { n: 6, f: 'Controls in a plan for resistance against length of a wire', b: 'Same wire (material and diameter), low current, short switch-on time, so the temperature stays the same.' },
    ]),
    ...sub('unit-3-practical-skills-in-physics-i', 'implementation-and-measurements-unit-3-yph11', '3.4', [
      { n: 1, f: 'Micrometer: sleeve 2.0 mm, thimble 45, zero error +0.03 mm. Reading?', b: '2.0 + 0.45 = 2.45 mm; 2.45 − 0.03 = 2.42 mm' },
      { n: 2, f: 'Reading Vernier calipers', b: 'Main-scale reading before the Vernier zero + 0.1 mm × the number of the Vernier mark that lines up. For example 32 mm and the seventh mark: 32.7 mm.' },
      { n: 3, f: 'Four things to check in another student’s results', b: 'Number of readings (at least six for a graph), range, significant figures matching the instrument’s resolution, and any inconsistent readings.' },
      { n: 4, f: 'Improvements to avoid parallax and misreadings', b: 'A set square to keep a rule vertical; a pointer or fiducial marker and eye level with the scale; a micrometer instead of a ruler for a thin wire.' },
      { n: 5, f: 'What should you do with an inconsistent reading?', b: 'Check it against the trend, re-measure and repeat. Do not simply delete it.' },
    ]),
    ...sub('unit-3-practical-skills-in-physics-i', 'processing-results-unit-3-yph11', '3.5', [
      { n: 1, f: 'Uncertainty from repeated readings, and percentage uncertainty', b: 'Half the range: (largest − smallest) ÷ 2.\nPercentage uncertainty = uncertainty ÷ value × 100%.' },
      { n: 2, f: 'Times of 3.2 s, 3.4 s and 3.3 s. Mean and percentage uncertainty?', b: 'Mean 3.3 s, half range 0.1 s, so 0.1 ÷ 3.3 × 100 = 3.0%' },
      { n: 3, f: 'Random vs systematic error', b: 'Random: readings scatter either side of the true value; repeating and averaging reduces it.\nSystematic: every reading is shifted the same way; repeating does not remove it.' },
      { n: 4, f: 'Precise vs accurate', b: 'Precise: repeated readings agree closely.\nAccurate: close to the true value.' },
      { n: 5, f: 'How should you find a gradient from a graph?', b: 'Draw a large triangle on the best-fit line using two points far apart that are not data points, and give the gradient a unit.' },
      { n: 6, f: 'A straight line that should pass through the origin has an intercept. What does it suggest?', b: 'A systematic error (such as a zero error) in one of the measurements.' },
      { n: 7, f: 'Graph of R against L for a wire has gradient 7.3 Ω m⁻¹; the wire’s area is 7.07 × 10⁻⁸ m². Resistivity?', b: 'Gradient = ρ/A, so ρ = 7.3 × 7.07 × 10⁻⁸ = 5.2 × 10⁻⁷ Ω m' },
    ]),

    // Unit 4 Further Mechanics, Fields and Particles
    ...sub('unit-4-further-mechanics-fields-and-particles', 'further-mechanics', '4.3', [
      { n: 1, f: 'How is momentum conserved in a two-dimensional collision?', b: 'Momentum is a vector, so it is conserved separately in each of two perpendicular directions. Resolve, apply conservation to each, then recombine.' },
      { n: 2, f: 'Kinetic energy in terms of momentum', b: 'Ek = p²/2m' },
      { n: 3, f: '0.15 kg at 8.0 m/s hits a stationary 0.25 kg ball and rebounds at 2.0 m/s. Velocity of the second ball?', b: '1.2 = −0.30 + 0.25v, so v = 6.0 m/s. KE before 4.8 J, after 0.3 + 4.5 = 4.8 J, so the collision is elastic.' },
      { n: 4, f: 'Angular velocity', b: 'ω = θ/t = 2π/T = 2πf, in rad s⁻¹. Angles must be in radians. v = rω.' },
      { n: 5, f: 'Centripetal acceleration and centripetal force', b: 'a = v²/r = rω²\nF = mv²/r = mrω²' },
      { n: 6, f: 'Is centripetal force a separate force?', b: 'No. It is the resultant of the real forces present (tension, gravity, friction, normal contact or magnetic force), directed towards the centre.' },
      { n: 7, f: 'Why does an object in uniform circular motion accelerate but keep the same kinetic energy?', b: 'Its direction, and so its velocity, changes continuously. The resultant force is perpendicular to the velocity, so it does no work.' },
      { n: 8, f: 'Minimum speed at the top of a vertical circle on a string', b: 'When the tension is zero, gravity alone provides the centripetal force: mg = mv²/r, so v = √(gr).' },
      { n: 9, f: 'Core Practicals 9 and 10', b: '9: investigate the relationship between force and change of momentum.\n10: use ICT (such as video analysis) to analyse collisions between small spheres.' },
    ]),
    ...sub('unit-4-further-mechanics-fields-and-particles', 'electric-and-magnetic-fields', '4.4', [
      { n: 1, f: 'Electric field strength', b: 'E = F/Q: force per unit positive charge (N C⁻¹ or V m⁻¹). Field lines run from positive to negative.' },
      { n: 2, f: 'Coulomb’s law, and the radial field of a point charge', b: 'F = Q₁Q₂ / (4πε₀r²)\nE = Q / (4πε₀r²): an inverse-square field.' },
      { n: 3, f: 'Field between parallel plates', b: 'Uniform: E = V/d, the same everywhere between the plates.' },
      { n: 4, f: 'Electric potential of a point charge, and equipotentials', b: 'V = Q / (4πε₀r). Equipotentials are always perpendicular to field lines.' },
      { n: 5, f: 'Path of a charged particle entering a uniform field at right angles: electric vs magnetic', b: 'Electric field: a parabola (constant force in a fixed direction, like a projectile).\nMagnetic field: a circle (force always perpendicular to the velocity).' },
      { n: 6, f: 'Radius of a charged particle’s circular path in a magnetic field', b: 'BQv = mv²/r, so r = mv/BQ = p/BQ.' },
      { n: 7, f: 'Capacitance, and energy stored by a capacitor', b: 'C = Q/V\nW = ½QV = ½CV² = Q²/2C (the area under a Q–V graph).' },
      { n: 8, f: 'Capacitor discharge equation and time constant', b: 'Q = Q₀ e^(−t/RC). Time constant RC: after one time constant the charge has fallen to about 37% of its initial value.' },
      { n: 9, f: 'A 220 μF capacitor at 9.0 V discharges through 47 kΩ. Time constant, and p.d. after it?', b: 'RC = 220 × 10⁻⁶ × 47 × 10³ = 10.3 s\nV = 9.0 × e⁻¹ = 3.3 V' },
      { n: 10, f: 'Force on a current-carrying conductor and on a moving charge in a magnetic field', b: 'F = BIl sin θ\nF = BQv sin θ\nZero when parallel to the field, maximum when perpendicular.' },
      { n: 11, f: 'Magnetic flux and flux linkage', b: 'Flux φ = BA (Wb). Flux linkage = Nφ.' },
      { n: 12, f: 'Faraday’s law and Lenz’s law', b: 'Faraday: the induced e.m.f. is proportional to the rate of change of flux linkage, ε = −d(Nφ)/dt.\nLenz: the induced current opposes the change producing it (the minus sign), as conservation of energy requires.' },
      { n: 13, f: 'Core Practical 11', b: 'Use an oscilloscope or data logger to display and analyse the p.d. across a capacitor as it charges and discharges through a resistor.' },
    ]),
    ...sub('unit-4-further-mechanics-fields-and-particles', 'nuclear-and-particle-physics', '4.5', [
      { n: 1, f: 'Quark composition of a proton and a neutron, with charges', b: 'Proton: uud, charge (+⅔) + (+⅔) + (−⅓) = +1.\nNeutron: udd, charge (+⅔) + (−⅓) + (−⅓) = 0.' },
      { n: 2, f: 'Hadrons, baryons, mesons and leptons', b: 'Hadrons feel the strong force: baryons are three quarks; mesons are a quark and an antiquark. Leptons (electron, muon, tau and their neutrinos) are fundamental and do not feel the strong force.' },
      { n: 3, f: 'Antiparticle', b: 'A particle with the same mass as its partner but with opposite properties such as charge.' },
      { n: 4, f: 'What must be conserved in a particle interaction?', b: 'Charge, baryon number, lepton number, energy and momentum. To reject an interaction, name the rule it breaks.' },
      { n: 5, f: 'Mass–energy, and the electronvolt', b: 'ΔE = c²Δm. 1 eV = 1.60 × 10⁻¹⁹ J, so 1 MeV = 1.60 × 10⁻¹³ J and 1 GeV = 1.60 × 10⁻¹⁰ J. Masses can be given in MeV/c².' },
      { n: 6, f: 'Electron–positron annihilation at rest', b: 'The mass becomes two photons travelling in opposite directions (so momentum is conserved), each of energy 0.511 MeV.' },
      { n: 7, f: 'Why are very high energies needed to probe the inside of nucleons?', b: 'Resolving very small distances needs a very short de Broglie wavelength, which means high momentum and so high energy. Kinetic energy can also become the mass of new particles.' },
      { n: 8, f: 'How does a linear accelerator work?', b: 'An alternating p.d. across successive drift tubes is timed so the particle is accelerated at each gap. The tubes get longer because the particle is moving faster.' },
      { n: 9, f: 'How does a cyclotron work?', b: 'Two dees in a magnetic field with an alternating p.d. across the gap. The field keeps the particle circling; it is accelerated at each crossing of the gap and its radius grows (r = mv/BQ).' },
      { n: 10, f: 'What does a particle track in a magnetic field tell you?', b: 'The radius of curvature gives the momentum (r = p/BQ); the direction of curvature gives the sign of the charge.' },
    ]),

    // Unit 5 Thermodynamics, Radiation, Oscillations and Cosmology
    ...sub('unit-5-thermodynamics-radiation-oscillations-and-cosmology', 'thermodynamics-edexcel', '5.3', [
      { n: 1, f: 'Internal energy', b: 'The sum of the randomly distributed kinetic and potential energies of the molecules in a system.' },
      { n: 2, f: 'Why does the temperature stay constant while a substance melts or boils?', b: 'The energy supplied increases the potential energy of the molecules (their separation), not their kinetic energy, so the temperature does not change.' },
      { n: 3, f: 'Specific heat capacity and specific latent heat equations', b: 'ΔE = mcΔθ: energy to raise 1 kg by 1 K is c.\nΔE = LΔm: energy to change the state of 1 kg with no temperature change is L.' },
      { n: 4, f: 'Energy to turn 0.50 kg of water at 100 °C into steam? (L = 2.26 × 10⁶ J/kg)', b: 'E = 2.26 × 10⁶ × 0.50 = 1.13 × 10⁶ J' },
      { n: 5, f: 'Absolute zero and the kelvin scale', b: 'T(K) = θ(°C) + 273. At absolute zero the molecules have minimum internal energy, not zero energy.' },
      { n: 6, f: 'Ideal gas equations', b: 'pV = nRT (R = 8.31 J mol⁻¹ K⁻¹)\npV = NkT (k = 1.38 × 10⁻²³ J K⁻¹)\nT in kelvin.' },
      { n: 7, f: 'Kinetic theory: pressure, and mean molecular kinetic energy', b: 'pV = ⅓Nm⟨c²⟩\n½m⟨c²⟩ = (3/2)kT: mean molecular kinetic energy depends only on absolute temperature.' },
      { n: 8, f: 'Assumptions of the kinetic model of an ideal gas', b: 'Many molecules in random motion; molecular volume negligible; no forces between molecules except in collisions; collisions elastic; collision time negligible compared with time between collisions.' },
      { n: 9, f: 'Why is the internal energy of an ideal gas only kinetic?', b: 'There are no intermolecular forces, so there is no molecular potential energy. The internal energy depends only on temperature.' },
      { n: 10, f: 'Core Practicals 12, 13 and 14', b: '12: calibrate a thermistor in a potential divider as a thermostat.\n13: determine a specific latent heat.\n14: pressure and volume of a fixed mass of gas at constant temperature.' },
    ]),
    ...sub('unit-5-thermodynamics-radiation-oscillations-and-cosmology', 'nuclear-decay', '5.4', [
      { n: 1, f: 'Alpha radiation', b: 'A helium nucleus, charge +2. Stopped by paper. Strongly ionising.', src: DECAY },
      { n: 2, f: 'Beta-minus radiation', b: 'An electron, charge −1. Stopped by about 3 mm of aluminium. Moderately ionising.', src: DECAY },
      { n: 3, f: 'Gamma radiation', b: 'An electromagnetic photon, no charge. Reduced by thick lead. Weakly ionising.', src: DECAY },
      { n: 4, f: 'Why is alpha the least penetrating radiation?', b: 'It is the most strongly ionising, so it loses its energy quickly and travels only a short distance.' },
      { n: 5, f: 'Mass deficit and binding energy', b: 'Mass deficit: the mass of the separated nucleons minus the mass of the nucleus. The binding energy is ΔE = c²Δm. 1 u = 1.66 × 10⁻²⁷ kg.' },
      { n: 6, f: 'Why do both fission and fusion release energy?', b: 'Binding energy per nucleon peaks around iron. Fusing light nuclei and splitting heavy nuclei both move towards higher binding energy per nucleon.' },
      { n: 7, f: 'Beta-minus and beta-plus decay in terms of nucleons', b: 'β⁻: n → p + e⁻ + antineutrino (A same, Z + 1).\nβ⁺: p → n + e⁺ + neutrino (A same, Z − 1).' },
      { n: 8, f: 'Activity and the decay constant', b: 'A = λN (Bq). λ is the probability per unit time that a nucleus decays.\nN = N₀e^(−λt), and t½ = ln 2 / λ.' },
      { n: 9, f: 'How do you find λ from activity measurements?', b: 'Subtract background, then plot ln A against t: a straight line of gradient −λ.' },
      { n: 10, f: 'Core Practical 15', b: 'Investigate the absorption of gamma radiation by lead (count rate against absorber thickness, background subtracted).' },
    ]),
    ...sub('unit-5-thermodynamics-radiation-oscillations-and-cosmology', 'oscillations-edexcel', '5.5', [
      { n: 1, f: 'Definition of simple harmonic motion', b: 'Acceleration is proportional to the displacement from the equilibrium position and always directed towards it: a = −ω²x. The restoring force F = −kx.' },
      { n: 2, f: 'Maximum speed and maximum acceleration in SHM', b: 'v_max = ωA, at the equilibrium position.\na_max = ω²A, at maximum displacement.\nω = 2πf = 2π/T.' },
      { n: 3, f: 'Periods of a simple pendulum and of a mass on a spring', b: 'Pendulum: T = 2π√(l/g) (small angles only).\nMass–spring: T = 2π√(m/k).\nNeither depends on the amplitude.' },
      { n: 4, f: 'A 0.60 kg mass oscillates on a spring of k = 15 N/m. Period?', b: 'T = 2π√(0.60/15) = 2π × 0.20 = 1.26 s' },
      { n: 5, f: 'Phase of velocity relative to displacement in SHM', b: 'Velocity leads displacement by 90°: it is maximum at zero displacement and zero at maximum displacement.', src: OSC },
      { n: 6, f: 'Phase of acceleration relative to displacement in SHM', b: 'Acceleration is 180° out of phase with displacement: maximum and opposite at the extremes, zero at the centre.', src: OSC },
      { n: 7, f: 'Light damping', b: 'The amplitude decays gradually over many oscillations.', src: OSC },
      { n: 8, f: 'Critical damping', b: 'The fastest return to equilibrium without overshooting (used in car suspension). Heavy damping returns more slowly, also without oscillating.', src: OSC },
      { n: 9, f: 'Free vs forced oscillation, and resonance', b: 'Free: at the natural frequency with no driving force. Forced: driven by an external periodic force. Resonance: driving frequency = natural frequency, giving maximum amplitude.' },
      { n: 10, f: 'Effect of more damping on a resonance curve', b: 'Lower peak amplitude, a broader curve, and the peak shifts slightly to a lower frequency.' },
    ]),
    ...sub('unit-5-thermodynamics-radiation-oscillations-and-cosmology', 'astrophysics-and-cosmology', '5.6', [
      { n: 1, f: 'Newton’s law of gravitation, and the field of a point mass', b: 'F = Gm₁m₂/r²\ng = F/m = Gm/r²' },
      { n: 2, f: 'Gravitational potential of a point mass', b: 'V = −Gm/r. Always negative, rising to zero at infinity (unlike electric potential, which can be positive).' },
      { n: 3, f: 'Luminosity vs radiant flux', b: 'Luminosity L: total power emitted by a star.\nRadiant flux F: power received per unit area, F = L / (4πd²).' },
      { n: 4, f: 'Standard candle, with an example', b: 'An object of known luminosity, so measuring its flux gives its distance. Type Ia supernovae have a consistent peak luminosity.' },
      { n: 5, f: 'Trigonometric parallax', b: 'The apparent shift of a nearby star against distant background stars as the Earth orbits the Sun, used to find its distance.' },
      { n: 6, f: 'Wien’s law and the Stefan–Boltzmann law', b: 'λmax T = 2.898 × 10⁻³ m K\nL = 4πr²σT⁴\nUse Wien for temperature first, then Stefan for radius.' },
      { n: 7, f: 'A star has surface temperature 5800 K. Peak wavelength?', b: 'λmax = 2.898 × 10⁻³ ÷ 5800 = 5.00 × 10⁻⁷ m (500 nm)' },
      { n: 8, f: 'Hertzsprung–Russell diagram: axes and regions', b: 'Luminosity (up) against temperature (increasing to the left). Main sequence: diagonal band. Red giants: top right (cool, luminous, so large). White dwarfs: bottom left (hot, dim, so small).' },
      { n: 9, f: 'Evolution of a Sun-like star and of a massive star', b: 'Sun-like: main sequence → red giant → planetary nebula → white dwarf.\nMassive: main sequence → red supergiant → supernova → neutron star or black hole.' },
      { n: 10, f: 'Doppler red-shift equation, and the age of the universe', b: 'z = Δλ/λ ≈ v/c. Hubble’s law v = H₀d gives an age of about 1/H₀.' },
      { n: 11, f: 'Why is there controversy about the age and fate of the universe?', b: 'The value of the Hubble constant is uncertain, and the possible existence of dark matter (from galactic rotation curves) and dark energy affects how the expansion changes.' },
    ]),

    // Unit 6 Practical Skills in Physics II
    ...sub('unit-6-practical-skills-in-physics-ii', 'planning-unit-6-yph11', '6.3', [
      { n: 1, f: 'The seven things a Unit 6 plan is assessed on', b: 'Apparatus, calibration, measuring, control of variables, repeats, safety, and use of the data.' },
      { n: 2, f: 'Why time 20 oscillations rather than one?', b: 'A reaction time of about 0.2 s is about 20% of a 1 s period but about 0.5% of a 40 s total, so the percentage uncertainty is much smaller.' },
      { n: 3, f: 'A plan to test y = kxⁿ: what graph should be plotted?', b: 'lg y against lg x. The gradient is n and the intercept is lg k.' },
      { n: 4, f: 'A plan to test y = A e^(bx): what graph should be plotted?', b: 'ln y against x. The gradient is b and the intercept is ln A.' },
      { n: 5, f: 'How should calibration be stated in a plan?', b: 'A zero check on each instrument, or a comparison with a known value, before readings are taken.' },
    ]),
    ...sub('unit-6-practical-skills-in-physics-ii', 'implementation-and-measurements-unit-6-yph11', '6.4', [
      { n: 1, f: 'Improvements to timing an oscillation', b: 'Use a fiducial marker at the equilibrium position for a consistent start and stop, and time more oscillations to cut the reaction-time percentage.' },
      { n: 2, f: 'Number and range of readings', b: 'At least six readings, over a wide, evenly spaced range. A narrow range gives a poor gradient.' },
      { n: 3, f: 'Significant figures in a table of raw readings', b: 'Keep the instrument’s resolution, with trailing zeros, and the same number of decimal places down a column.' },
      { n: 4, f: 'How is the heading of a logged column written?', b: 'With the unit inside the bracket, for example lg (L / m) or ln (V / V). The logarithm itself has no unit.' },
      { n: 5, f: 'A reading lies off the line. What should you do?', b: 'Re-read and repeat it, and compare with the value the line predicts. Keep it if the repeat is still off the line, because the physics may change there.' },
    ]),
    ...sub('unit-6-practical-skills-in-physics-ii', 'analysis-unit-6-yph11', '6.5', [
      { n: 1, f: 'Repeatability vs reproducibility', b: 'Repeatability: precision with one operator, one method and a short timescale.\nReproducibility: precision when different operators or apparatus are used.' },
      { n: 2, f: 'Combining uncertainties', b: 'Add or subtract quantities: add absolute uncertainties.\nMultiply or divide: add percentage uncertainties.\nRaise to a power n: multiply the percentage uncertainty by n.' },
      { n: 3, f: 'm = 0.240 ± 0.002 kg, v = 3.40 ± 0.05 m s⁻¹. Kinetic energy and its uncertainty?', b: 'KE = ½ × 0.240 × 3.40² = 1.39 J\n% = 0.83% + 2 × 1.5% = 3.8%\nKE = 1.39 ± 0.05 J' },
      { n: 4, f: 'A lg T against lg L graph has gradient 0.50. What does this show?', b: 'T ∝ L^0.50: the period is proportional to the square root of the length.' },
      { n: 5, f: 'How do you judge whether a result is accurate?', b: 'Find the range allowed by its uncertainty: if the accepted value lies inside it, the result is accurate within the uncertainty. Without an uncertainty, use percentage difference = (measured − accepted) ÷ accepted × 100%.' },
      { n: 6, f: 'Error (in measurement)', b: 'The difference between a result and the true value. It is not a mistake by the operator.' },
      { n: 7, f: 'Valid measurement', b: 'A measurement that measures what it is meant to measure.' },
    ]),
  ],
};
