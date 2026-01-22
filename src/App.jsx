import { Canvas } from '@react-three/fiber';
import { Scene } from './components/canvas/Scene';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/ui/Hero';
import { Projects } from './components/ui/Projects';
import { About } from './components/ui/About';
import { Footer } from './components/ui/Footer';

function App() {
  return (
    <main className="bg-[#FFFFFF] selection:bg-[#333333] selection:text-white font-sans">
      <Navbar />
      
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <div className="pointer-events-auto">
          <Projects />
          <About />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
