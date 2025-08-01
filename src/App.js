import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/skills';
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { AboutMe } from "./components/About-Me";
import { Footer } from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
