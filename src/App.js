import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SwitchMode from "./components/SwitchMode";
import "../src/App.css";
import { useState} from 'react';

import { ThemeContext } from "./context/themeContext";
import { LanguageContext} from "./context/languageContext";


function App() {

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("eng");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");}

  const handleLanguage = () => {
    setLanguage(language === "eng" ? "tr" : "eng");}


  return (
   
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
       <LanguageContext.Provider value={{ language, handleLanguage }} >

        <div className="App" id={theme}>

          <SwitchMode/>

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

      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
