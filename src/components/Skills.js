import java from "../logos/logo-js.png";
import node from "../logos/logo-nodejs.png";
import figma from "../logos/logo-figma.png";
import react from "../logos/logo-react.png";
import redux from "../logos/logo-redux.png";
import vscode from "../logos/logo-vscode.png";
import "../style/Skills.css";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Skills = ()=>{

    const {language} = useContext(LanguageContext);

    return(
    <div className="Skills">

        <div className="skill-container">

            <div>
            {language === "eng" ?
                <h1> Skills</h1> : <h1> Yetenekler </h1>
            }
            </div>


            <div className="skill-box">
                <div className="skill">
                    <img src={java} alt="java"/>
                    <p>JAVASCRIPT</p>
                </div>
                <br/>
                <div className="skill">
                    <img src={react} alt="react"/>
                    <p>REACT</p>
                </div>
                <br/>
                <div className="skill">
                    <img src={redux} alt="redux"/>
                    <p>REDUX</p>
                </div>

            </div>

            <div className="skill-box">

                <div className="skill">
                    <img src={node} alt="node"/>
                    <p>NODE</p>
                </div>
                <br/>
                <div className="skill">
                    <img src={vscode} alt="vscode"/>
                    <p>VS CODE</p>
                </div>
                <br/>
                <div className="skill">
                    <img src={figma} alt="figma"/>
                    <p>FIGMA</p>
                </div>

            </div>
        </div>
      
    </div>
    )
};

export default Skills;