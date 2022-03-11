import './App.css';
import './CSS/Global.css';
import './CSS/Landing.css';
import './CSS/Projects.css';

import Landing from './Pages/Landing';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
