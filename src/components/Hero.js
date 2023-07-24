import img from "../logos/hero-right.png";
import imgdark from "../logos/imgdark (1).png";
import git from "../logos/github.png";
import gitdark from "../logos/imgdark (2).png";
import linkedin from "../logos/LinkedIn.png";
import "../style/Hero.css";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";



const Hero = ()=> {

    const { theme } = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);

    return (

    
    <div className="Hero" >



        <div className="Header" >

            <h2>Negris</h2>

        </div>
        
        <div className="hero-content" >
            <div  className="hero-left" >
                {language === "eng" ? 
                <h1>I am a Frontend Developer...</h1> :  <h1>Ben bir Frontend geliştiricisiyim...</h1>
                }
                {language === "eng" ? 
                <p>...who likes to craft solid and scalable frontend products with great user experiences.</p> : <p>...harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seviyorum</p>
                }
                <div className="buttons">
                    <div className="git-button">
                        <a style={{textDecoration: 'none'}} href= "https://github.com/negrisar" target="_blank">
                            <button >
                            {theme === "light" ?
                                <img src={git} alt="git"/> : <img src={gitdark}  alt="linkedin"/>
                            }
                            Github
                            </button>
                        </a>
                    </div>

                    <div className="linkedin-button">
                    <a style={{textDecoration: 'none'}} href= "https://www.linkedin.com/in/nergis-arma%C4%9Fan-836538223/" target="_blank">
                        <button >
                        {theme === "light" ?
                        <img src={linkedin} alt="linkedin"/> : <img src={imgdark}  alt="linkedin"/>
                        }
                            Linkedin
                        </button>
                    </a>
                    </div>

                </div>

            </div>

            <div className="hero-right">
                
            <img src={img} alt="hero-right"/>

            </div>
            
        </div>
    </div>
    )
};

export default Hero;

