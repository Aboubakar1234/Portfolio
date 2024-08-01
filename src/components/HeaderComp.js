import React from "react";
import pp from "../assets/pp.jpg";
import { FaLinkedin, FaGithub, FaRegComment} from "react-icons/fa";  
const HeaderComp = () => {
  return (
    <header>
      <div className="left">
            <img src={pp} alt="user" />
            <div className="user-infos">
                <h1>ABOUBAKAR MOHAMED ABDOULAYE</h1>
                <h3>Software Engineering Student at Efrei</h3>
                <div className="contacts">
                    <div className="contact-item">
                    <a href="https://www.linkedin.com/in/mohamed-abdoulaye-aboubakar-489546283/"  target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size="25px"/> 
                    </a>  
                    </div>
                    <div className="contact-item"> 
                    <a href="https://github.com/Aboubakar1234"  target="_blank" rel="noopener noreferrer">    
                        <FaGithub size="25px"/> 
                    </a>
                    </div>
                </div>
            </div>
      </div>
      <div className="right">
      <a href="mailto:abdoulaye.aboubakar@efrei.net">
      <button className="contact-btn">
          <FaRegComment /> Contact me
      </button>
      </a>
      </div>
    </header>
  );
};

export default HeaderComp;