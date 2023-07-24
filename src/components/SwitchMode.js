import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { LanguageContext } from "../context/languageContext";


const SwitchMode = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, handleLanguage } = useContext(LanguageContext);

    return (

        <div className="switchMain">
            <div className="switch">
                    <div className="language">
                        
                            <span className="languageHover" onClick={handleLanguage}>
                                {language === "tr" ? "ENGLISH" : "TÜRKÇE"}
                            </span>
                       
                    </div>

                    <div className="darkMode">
                        <button className="darkButton" onClick={toggleTheme}>
                            {theme === "light" ? "🌙" : "🌞"}
                        </button>

                        <span className="darkText">
                             
                            {theme === "light" ? "DARK MODE"   :  "LIGHT MODE" }

                        
                        </span>

                    </div>

                </div>
        </div>

    );
}

export default SwitchMode;