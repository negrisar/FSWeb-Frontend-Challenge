import twitter from "../logos/twitter 1.png";
import codepen from "../logos/codepen 1.png";
import sign from "../logos/at-sign 1.png";
import instagram from "../logos/instagram 1.png";
import "../style/Footer.css";

import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

import twitterdark from "../logos/twitter-dark.png";
import codepenrdark from "../logos/codepen-dark.png";
import signdark from "../logos/@-dark (1).png";
import instadark from "../logos/insta-dark.png";


const Footer = ()=>{
    const { theme } = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);
    return(
        <div className="Footer">
            <div className="footer-content">
                {language === "eng" ?
                <h1>Send me a message!</h1> : <h1>Bana mesaj gönder!</h1>
                }

                {language === "eng" ?
                <p className="text">
                 Got a question or proposal, or just want 
                </p> : <p className="text">
                 Bir sorun ya da teklifin mi var, ya da sadece 
                </p>
                }
                

                 {language === "eng" ? 
                 <p className="text">
                 to say hello? Go ahead.
                </p> : <p className="text">
                 merhaba demek mi istedin? Devam et.</p>}

                <a href="mailto:armaganergis@gmail.com">armaganergis@gmail.com</a>
            </div>
            <br/>
            <div className="social">


                <a href="https://twitter.com/negrisamganra target=" target="_blank">
                {theme === "light" ? 
                    <img src={twitter} alt="twitter" /> : <img src={twitterdark}alt="twitter" />}
                </a>
                
                <a href="https://codepen.io/negrisar" target="_blank">
                {theme === "light" ? 
                    <img src={codepen} alt="codepen"/> : <img src={codepenrdark}alt="codepen" />}
                </a>

                <a href="mailto:armaganergis@gmail.com">
                    {theme === "light" ? 
                    <img src={sign} alt="sign"/> : <img src={signdark}alt="sign" />}
                </a>

                <a href="https://www.instagram.com/nergisarmagan/" target="_blank">
                    {theme === "light" ? 
                    <img src={instagram} alt="instagram"/> : <img src={instadark}alt="instagram" />}
                </a>

            </div>

        </div>
    )
};

export default Footer;