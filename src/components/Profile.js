import img2 from "../logos/image 2.png";
import "../style/Profile.css";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const Profile = ()=>{

    const {language} = useContext(LanguageContext);

    return(
        <div className="Profile">

            {language === "eng" ?
            <h1>Profile</h1> : <h1>Profil</h1> }

            <div className="profile-content">
                <div className="basic-info">
                    <div>
                        {language === "eng" ?
                        <h2>Basic Information</h2> : <h2>Genel Bilgi</h2>
                        }
                    </div>
                    <div className="info">
                        <div className="each-info">
                            <div className="pf">
                            {language === "eng" ? 
                            <p style={{color: "rgba(203, 242, 129, 1)"}}>Date of Birth</p> : <p style={{color: "rgba(203, 242, 129, 1)"}}>Doğum Tarihi</p>
                            }
                            <p>:</p>
                            </div>
                            <div className="ps">
                                {language === "eng" ? 
                                <p className="p1"> 02.09.1997</p> : <p> 09.02.1997</p>}
                            </div>
                        </div>
                        <div className="each-info"> 
                            <div className="pf">
                            {language === "eng" ?
                            <p style={{color: "rgba(203, 242, 129, 1)"}}>City of Residence</p> :  <p style={{color: "rgba(203, 242, 129, 1)"}}>Bulunduğu Şehir</p>
                            }
                            <p>:</p>
                            </div>
                            <div className="ps">
                                <p className="p1"> Kocaeli</p>
                            </div>
                        </div>
                        <div className="each-info">
                            <div className="pf">
                            {language === "eng" ? 
                            <p style={{color: "rgba(203, 242, 129, 1)"}}>Education Info</p> : <p style={{color: "rgba(203, 242, 129, 1)"}}>Eğitim Bilgisi</p>
                            }
                            <p>:</p>
                            </div>
                            <div className="ps">
                                {language === "eng" ? 
                                <p className="p1"> Osmangazi Uni., Chemical Engineering 2021</p> : <p className="p1"> Osmangazi Üni., Kimya Mühendisliği 2021</p>
                                }
                            </div>
                        </div>
                        <div className="each-info">
                            <div className="pf">
                            {language === "eng" ?
                            <p style={{color: "rgba(203, 242, 129, 1)"}}>Preferred Role</p> : <p style={{color: "rgba(203, 242, 129, 1)"}}>Pozisyon Tercihi</p> 
                            }
                            <p>:</p>
                            </div>
                            <div className="ps">
                                <p className="p1"> Frontend</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-img">
                    <img src={img2} alt="git"/>  
                </div>

                <div className="about-box">
                    <div>
                        {language === "eng" ?
                        <h2>About Me</h2> : <h2>Hakkımda</h2>}
                    </div>

                    <div className="about-text">
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                            aut, odit laborum aliquam voluptatum nisi mollitia.
                        </p>
                        <p>
                            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
                            deserunt quam temporibus cumque magnam!
                        </p>
                    </div>

                </div>

            </div>
        

        </div>
    )
    
};

export default Profile;