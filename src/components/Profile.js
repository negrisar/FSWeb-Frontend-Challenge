import img2 from "../logos/image 2.png";
import "../style/Profile.css";

const Profile = ()=>{
    return(
        <div className="Profile">

            <h1>Profile</h1>
            <div className="profile-content">
                <div className="basic-info">
                    <div>
                        <h2>Basic Information</h2>
                    </div>
                    <div className="info">
                        <p>Date of Birth: 02.09.1997</p>
                        <p>City of Residence: Kocaeli</p>
                        <p>Education Info: Osmangazi Uni., Chemical Engineering 2021</p>
                        <p>Preferred Role: Frontend</p>
                    </div>
                </div>

                <div className="profile-img">
                    <img src={img2} alt="git"/>  
                </div>

                <div className="about-box">
                    <div>
                        <h2>About Me</h2>
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