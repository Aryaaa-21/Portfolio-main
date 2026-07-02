import GridScan from './GridScan';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#05050a' }}>
      <GridScan
        enableWebcam={false}
        showPreview={false}
        sensitivity={0.55}
        lineThickness={1.6}
        linesColor="#2A2335"
        scanColor="#A498A4"
        scanOpacity={0.5}
        gridScale={0.1}
        lineStyle="dashed"
        lineJitter={0.25}
        scanDirection="pingpong"
        enablePost={true}
        bloomIntensity={0.6}
        chromaticAberration={0.002}
        noiseIntensity={0.01}
        scanGlow={1.05}
        scanSoftness={2.0}
        scanPhaseTaper={0.9}
        scanDuration={2.0}
        scanDelay={2.0}
        enableGyro={false}
        scanOnClick={true}
        snapBackDelay={250}
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      />
    </div>
  );
}

export default App;
