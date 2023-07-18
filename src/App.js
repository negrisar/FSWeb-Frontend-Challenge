import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import "../src/App.css";


function App() {
  return (

    <div className="App">

      <div>
        <Hero/>
      </div>

      <div>
        <Skills/>
      </div>

      <div>
        <Profile/>
      </div>

      <div>
        <Projects/>
      </div>

      <div>
        <Footer/>
      </div>

  </div>
  );
}

export default App;
