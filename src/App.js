import './App.css';
import './CSS/About.css';
import './CSS/Global.css';
import './CSS/Landing.css';
import './CSS/Projects.css';
import './CSS/Nav.css';
import './CSS/Experience.css';
import './CSS/Contact.css';

import Landing from './Pages/Landing';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';
import Nav from './Components/Nav';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
