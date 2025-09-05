// App.jsx
import React, { useState, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Loader } from '@react-three/drei';

const QueenBedModel = React.lazy(() =>
  import(/* webpackChunkName: "queen-bed" */ './components/model/QueenBedModel')
);
const SingleBedModel = React.lazy(() =>
  import(/* webpackChunkName: "single-bed" */ './components/model/SingleBedModel')
);
const SofaModel = React.lazy(() =>
  import(/* webpackChunkName: "sofa" */ './components/model/SofaModel')
);
const SofaBedModel = React.lazy(() =>
  import(/* webpackChunkName: "sofa-bed" */ './components/model/SofaBedModel')
);

const CONFIG = {
  bed: {
    label: 'Bed',
    position: [-2, 0, -2],
    options: {
      queen: { label: 'Queen Bed' },
      single: { label: 'Single Bed' },
      none: { label: 'None', skip: true },
    },
    defaultId: 'queen', // make sure this matches an option
  },
  sofa: {
    label: 'Sofa',
    position: [0, 0.3, 0],
    options: {
      sofa: { label: 'Sofa' },
      sofabed: { label: 'Sofa Bed' },
      none: { label: 'None', skip: true },
    },
    defaultId: 'sofa', // make sure this matches an option
  },
};

function Furniture({ type, selectedId }) {
  const item = CONFIG[type];
  const opt = item.options[selectedId];
  if (!opt || opt.skip) return null;

  return (
    <mesh position={item.position} castShadow receiveShadow>
      <boxGeometry args={[2, 1, 1]} />
      <meshStandardMaterial color={opt.color} />
    </mesh>
  );
}

function ModelFallback({ text = 'Loading model…' }) {
  return (
    <Html center>
      <div style={{ padding: 8, background: 'rgba(0,0,0,0.6)', color: '#fff', borderRadius: 6 }}>
        {text}
      </div>
    </Html>
  );
}

function Bed({ id, position }) {
  if (id === 'queen') {
    return (
      <Suspense fallback={<ModelFallback text="Loading queen bed…" />}>
        <QueenBedModel position={position} />
      </Suspense>
    );
  }
  if (id === 'single') {
    return (
      <Suspense fallback={<ModelFallback text="Loading single bed…" />}>
        <SingleBedModel position={position} />
      </Suspense>
    );
  }
  return null;
}

function Sofa({ id, position }) {
  if (id === 'sofa') {
    return (
      <Suspense fallback={<ModelFallback text="Loading sofa…" />}>
        <SofaModel position={position} />
      </Suspense>
    );
  }
  if (id === 'sofabed') {
    return (
      <Suspense fallback={<ModelFallback text="Loading sofa bed…" />}>
        <SofaBedModel position={position} />
      </Suspense>
    );
  }
  return null;
}

export default function App() {
  const defaults = useMemo(() => {
    const s = {};
    for (const key in CONFIG) s[key] = CONFIG[key].defaultId;
    return s;
  }, []);
  const [selection, setSelection] = useState(defaults);

  // optional: lightweight inline preloads on hover
  const preloadQueen = () => import('./components/model/QueenBedModel');
  const preloadSingle = () => import('./components/model/SingleBedModel');
  const preloadSofa = () => import('./components/model/SofaModel');
  const preloadSofaBed = () => import('./components/model/SofaBedModel');

  return (
    <div style={{ display: 'flex' }}>
      {/* Control Panel */}
      <aside style={{ width: 250, padding: 20 }}>
        {/* Bed group */}
        <section style={{ marginBottom: 16 }}>
          <h3>{CONFIG.bed.label}</h3>

          <label
            style={{ display: 'block', margin: '4px 0' }}
            onMouseEnter={preloadQueen}
          >
            <input
              type="radio"
              name="bed"
              checked={selection.bed === 'queen'}
              onChange={() => setSelection((s) => ({ ...s, bed: 'queen' }))}
            />{' '}
            {CONFIG.bed.options.queen.label}
          </label>

          <label
            style={{ display: 'block', margin: '4px 0' }}
            onMouseEnter={preloadSingle}
          >
            <input
              type="radio"
              name="bed"
              checked={selection.bed === 'single'}
              onChange={() => setSelection((s) => ({ ...s, bed: 'single' }))}
            />{' '}
            {CONFIG.bed.options.single.label}
          </label>

          <label style={{ display: 'block', margin: '4px 0' }}>
            <input
              type="radio"
              name="bed"
              checked={selection.bed === 'none'}
              onChange={() => setSelection((s) => ({ ...s, bed: 'none' }))}
            />{' '}
            {CONFIG.bed.options.none.label}
          </label>
        </section>

        {/* Sofa group */}
        <section style={{ marginBottom: 16 }}>
          <h3>{CONFIG.sofa.label}</h3>

          <label
            style={{ display: 'block', margin: '4px 0' }}
            onMouseEnter={preloadSofa}
          >
            <input
              type="radio"
              name="sofa"
              checked={selection.sofa === 'sofa'}
              onChange={() => setSelection((s) => ({ ...s, sofa: 'sofa' }))}
            />{' '}
            {CONFIG.sofa.options.sofa.label}
          </label>

          <label
            style={{ display: 'block', margin: '4px 0' }}
            onMouseEnter={preloadSofaBed}
          >
            <input
              type="radio"
              name="sofa"
              checked={selection.sofa === 'sofabed'}
              onChange={() => setSelection((s) => ({ ...s, sofa: 'sofabed' }))}
            />{' '}
            {CONFIG.sofa.options.sofabed.label}
          </label>

          <label style={{ display: 'block', margin: '4px 0' }}>
            <input
              type="radio"
              name="sofa"
              checked={selection.sofa === 'none'}
              onChange={() => setSelection((s) => ({ ...s, sofa: 'none' }))}
            />{' '}
            {CONFIG.sofa.options.none.label}
          </label>
        </section>
      </aside>

      {/* 3D Canvas */}
      <Canvas
        style={{ height: '100vh', flex: 1 }}
        camera={{ position: [0, 5, 8], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <OrbitControls />

        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[10, 7]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>

        {/* Back wall */}
        <mesh position={[0, 2.5, -3.5]} receiveShadow>
          <boxGeometry args={[10, 5, 0.1]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>

        {/* Furniture */}
        <Bed id={selection.bed} position={CONFIG.bed.position} />
        <Sofa id={selection.sofa} position={CONFIG.sofa.position} />
      </Canvas>

      {/* Nice global loader (shows GLTF progress); optional */}
      <Loader />
    </div>
  );
}
