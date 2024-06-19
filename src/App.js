import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import { MoonSection } from './components/MoonSection';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Connect } from './components/Connect';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <MoonSection/> */}
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;