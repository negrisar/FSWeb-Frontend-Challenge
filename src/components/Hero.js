import img from "../logos/hero-right.png";
import git from "../logos/github.png";
import linkedin from "../logos/LinkedIn.png";
import "../style/Hero.css";


const Hero = ()=> {
    return (
    <div className="Hero" >

        <div className="Header" >
            <h2>Negris</h2>
        </div>
        
        <div className="hero-content" >
            <div  className="hero-left" >
                <h1>I am a Frontend Developer...</h1>

                <p>...who likes to craft solid and scalable frontend products with great user experiences.</p>

                <div className="buttons">

                    <a href= "https://github.com/negrisar" target="_blank">
                        <button >
                            <img src={git} alt="git"/>
                            Github
                        </button>
                    </a>

                    <a href= "https://www.linkedin.com/in/nergis-arma%C4%9Fan-836538223/" target="_blank">
                        <button>
                            <img src={linkedin} alt="linkedin" />
                            Linkedin
                        </button>
                    </a>

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

