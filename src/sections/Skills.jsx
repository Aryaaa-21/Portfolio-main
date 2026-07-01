import React, { useRef, useMemo, Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { EffectComposer, N8AO } from '@react-three/postprocessing';
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from '@react-three/rapier';

// Load textures for the spheres
const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  '/images/react2.webp',
  '/images/mongo.webp',
  '/images/javascript.webp',
];
const textures = imageUrls.map((url) => textureLoader.load(url));
const techNames = [
  'C',
  'Java',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Framer Motion',
  'MongoDB',
  'AWS',
  'Docker',
  'Vercel',
  'Git',
  'Vite',
  'Postman'
];

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

// Create random scales and assign tech names to the 30 spheres
const spheres = [...Array(30)].map(() => {
  const techIndex = Math.floor(Math.random() * techNames.length);
  return {
    scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
    techIndex,
    techName: techNames[techIndex]
  };
});

function SphereGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
  techName,
  onSelect,
}) {
  const api = useRef(null);

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(techName);
        }}
      />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3(), isActive }) {
  const ref = useRef(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

export default function Skills() {
  const isActive = true;
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = {
    Languages: [
      { name: 'C', projects: ['VEDAX'] },
      { name: 'Java', projects: ['VEDAX'] },
      { name: 'JavaScript', projects: ['VEDAX', 'StellarPay', 'ChainRent'] },
    ],
    Frontend: [
      { name: 'React', projects: ['StellarPay', 'VEDAX', 'RakshaMarg'] },
      { name: 'Tailwind CSS', projects: ['VEDAX', 'StellarPay'] },
      { name: 'Framer Motion', projects: ['VEDAX'] },
    ],
    Database: [
      { name: 'MongoDB', projects: ['RakshaMarg'] },
    ],
    Cloud: [
      { name: 'AWS', projects: ['RakshaMarg'] },
      { name: 'Docker', projects: ['StellarPay'] },
      { name: 'Vercel', projects: ['ChainRent', 'VEDAX'] },
    ],
    Tools: [
      { name: 'Git', projects: ['RakshaMarg', 'ChainRent', 'StellarPay', 'VEDAX'] },
      { name: 'Vite', projects: ['StellarPay', 'VEDAX'] },
      { name: 'Postman', projects: ['RakshaMarg', 'StellarPay'] },
    ]
  };

  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: '#ffffff',
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    );
  }, []);

  const handleSelectTech = (techName) => {
    for (const cat in categories) {
      const found = categories[cat].find(s => s.name.toLowerCase() === techName.toLowerCase());
      if (found) {
        setSelectedSkill(found);
        return;
      }
    }
  };

  return (
    <section id="ecosystem" className="py-24 bg-surface dark:bg-surface-dark border-b border-border/20 dark:border-border-dark/20 theme-transition relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center">
        
        {/* Title / Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-20 pointer-events-none"
        >
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-text/50 dark:text-text-dark/50 block mb-4 uppercase">
            Development Arsenal
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text dark:text-text-dark">
            TECH ECOSYSTEM
          </h2>
        </motion.div>

        {/* 3D Canvas Box */}
        <div className="relative w-full h-[400px] border border-border/40 dark:border-border-dark/40 bg-background/30 dark:bg-background-dark/30 backdrop-blur-sm rounded-none overflow-hidden mb-16">
          
          <Suspense fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center text-text/40 dark:text-text-dark/40 font-body text-xs uppercase tracking-widest gap-2">
              <span className="animate-spin w-5 h-5 border-t-2 border-text dark:border-text-dark rounded-full" />
              Loading Ecosystem physics...
            </div>
          }>
            <Canvas
              shadows
              gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
              camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
              onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
              className="w-full h-full cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={1} />
              <spotLight
                position={[20, 20, 25]}
                penumbra={1}
                angle={0.2}
                color="white"
                castShadow
                shadow-mapSize={[512, 512]}
              />
              <directionalLight position={[0, 5, -4]} intensity={2} />
              <Physics gravity={[0, 0, 0]}>
                <Pointer isActive={isActive} />
                {spheres.map((props, i) => (
                  <SphereGeo
                    key={i}
                    {...props}
                    material={materials[props.techIndex % materials.length]}
                    isActive={isActive}
                    onSelect={handleSelectTech}
                  />
                ))}
              </Physics>
              <Environment
                files="/models/char_enviorment.hdr"
                environmentIntensity={0.5}
                environmentRotation={[0, 4, 2]}
              />
              <EffectComposer enableNormalPass={false}>
                <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
              </EffectComposer>
            </Canvas>
          </Suspense>

          {/* Interactive Help Hint Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10 w-full px-4">
            <span className="font-body text-[10px] tracking-widest text-text/30 dark:text-text-dark/30 uppercase bg-background/80 dark:bg-background-dark/80 px-3 py-1 border border-border/20 dark:border-border-dark/20 backdrop-blur-sm">
              Hover cursor to collide • Click spheres or buttons to view details
            </span>
          </div>
        </div>

        {/* Detailed Grid & Interactivity Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
          {/* Left Column: Skill Clusters Grid */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {Object.keys(categories).map((catName) => (
              <div key={catName} className="p-6 border border-border dark:border-border-dark bg-background/55 dark:bg-background-dark/55 cursor-target">
                <h3 className="font-display text-sm font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase mb-4 pb-2 border-b border-border/10 dark:border-border-dark/10">
                  {catName}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories[catName].map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`px-3 py-1.5 border text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-target ${
                          isSelected
                            ? 'bg-text border-text text-background dark:bg-text-dark dark:border-text-dark dark:text-background-dark'
                            : 'border-border dark:border-border-dark text-text/80 dark:text-text-dark/80 hover:border-text dark:hover:border-text-dark'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interaction details panel */}
          <div className="col-span-1 lg:col-span-4 lg:sticky lg:top-28">
            <div className="p-8 border border-border dark:border-border-dark bg-background dark:bg-background-dark/80 backdrop-blur min-h-[300px] flex flex-col justify-between cursor-target">
              <AnimatePresence mode="wait">
                {selectedSkill ? (
                  <motion.div
                    key={selectedSkill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase">
                        SKILL DETAILS
                      </span>
                      <h4 className="font-display text-2xl font-bold text-text dark:text-text-dark mt-2 mb-6">
                        {selectedSkill.name}
                      </h4>
                      
                      <span className="font-body text-[10px] font-bold tracking-widest text-text/40 dark:text-text-dark/40 uppercase block mb-3">
                        INTEGRATED WITHIN
                      </span>
                      
                      <div className="space-y-3">
                        {selectedSkill.projects.map((proj) => (
                          <div
                            key={proj}
                            className="p-3 border border-border dark:border-border-dark bg-surface dark:bg-surface-dark flex items-center justify-between"
                          >
                            <span className="font-body text-xs font-semibold text-text dark:text-text-dark uppercase">
                              {proj}
                            </span>
                            <span className="w-1.5 h-1.5 bg-text dark:bg-text-dark" />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/10 dark:border-border-dark/10 text-xs font-body text-text/40 dark:text-text-dark/40 italic">
                      This technology forms a critical part of Arya's real-world product engineering workflow.
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center text-center p-6 text-text/40 dark:text-text-dark/40"
                  >
                    <span className="material-symbols-outlined text-4xl mb-4 opacity-30">
                      hub
                    </span>
                    <p className="font-body text-xs leading-relaxed uppercase tracking-wider">
                      Select any technology skill on the left or click a 3D sphere to discover its integration across Arya's projects.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


