import myData from "../mocks/myData";
import "../style/Projects.css";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Projects = ()=>{

    const {language} = useContext(LanguageContext);

    return(
        <div className="Projects" >
            <div >
                {language === "eng" ?
                <h1>Projects</h1> : <h1>Projelerim</h1>
                }
            </div>

            

                {myData.map((project)=>{
                    return(
                        
                        <div className="each-card">

                                <div className="project-img">
                                    <img src={project.image} alt=""/>
                                </div>
                               
                                    <div className="project-card">

                                        <h2>
                                       
                                        {project.name}
                                         
                                        </h2>
                                        { language === "eng" ?
                                        <p>{project.text}</p> : <p>{project.texttr}</p> }

                                        <div className="skills">
                                            <div className="each-skill">
                                            <p>
                                            {project.skills[0]}
                                            </p>
                                            </div>
                                            <br/>
                                            <div className="each-skill">
                                            <p>
                                            {project.skills[1]}
                                            </p>
                                            </div>
                                            <br/>
                                            <div className="each-skill">
                                            <p>
                                            {project.skills[2]}
                                            </p>
                                            </div>
                                            
                                        </div>

                                        <div className="link">
                                            <a href= {project.git} target="_blank">GitHub</a>

                                            {language === "eng" ? 
                                            <a href={project.website} target="_blank">View Site</a> :
                                            <a href={project.website} target="_blank">Siteye Git</a>
                                            }
                                        </div>

                                    </div>

                                    

                                   
                        </div>
                            
                        
                    );
                })}

            
        </div>
    

    )
};

export default Projects;