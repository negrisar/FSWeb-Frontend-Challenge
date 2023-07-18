import twitter from "../logos/twitter 1.png";
import codepen from "../logos/codepen 1.png";
import sign from "../logos/at-sign 1.png";
import instagram from "../logos/instagram 1.png";
import "../style/Footer.css";

const Footer = ()=>{
    return(
        <div className="Footer">
            <div className="footer-content">
                <h1>Send me a message!</h1>

                <p className="text">
                 Got a question or proposal, or just want
                 </p>
                 
                 <p className="text">
                 to say hello? Go ahead.
                </p>

                <a href="mailto:armaganergis@gmail.com">armaganergis@gmail.com</a>
            </div>
            <br/>
            <div className="social">

                <a href="https://twitter.com/negrisamganra target=" target="_blank">
                    <img src={twitter} alt="twitter" />
                </a>
                
                <a href="https://codepen.io/negrisar" target="_blank">
                    <img src={codepen} alt="codepen"/>
                </a>

                <a href="mailto:armaganergis@gmail.com">
                    <img src={sign} alt="sign"/>
                </a>

                <a href="https://www.instagram.com/nergisarmagan/" target="_blank">
                    <img src={instagram} alt="instagram"/>
                </a>

            </div>

        </div>
    )
};

export default Footer;