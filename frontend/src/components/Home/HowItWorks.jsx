import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3> JobQuest About</h3>
           <div className="about" style={{display:"flex", justifyContent:"center", textAlign:"justify", lineHeight:"2rem"}}>
            <p style={{width:"70%", textJustify:"distribute"}}>JobQuest is a state-of-the-art job-seeking application dedicated to revolutionizing the employment search process. Our mission is to connect job seekers with their ideal positions through the power of advanced algorithms and AI. By providing personalized job matching, a built-in resume builder, job alerts, and an application tracking system, we aim to simplify and enhance the job search experience. At JobQuest, we are committed to helping you find the perfect job efficiently and effortlessly, ensuring that you stay organized and informed every step of the way.</p>
           </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
