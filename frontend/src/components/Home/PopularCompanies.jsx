import React from "react";
import { FaMicrosoft, FaApple, FaGoogle, FaAmazon } from "react-icons/fa";
import { SiApple, SiNetflix, SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
     
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "apple",
     
      icon: <SiApple />,
    },
    {
      id: 3,
      title: "Google",
      
      icon: <FaGoogle />,
    },
    {
      id: 4,
      title: "NetFlix",
    
      icon: <SiNetflix />,
    }, {
      id: 5,
      title: "Amazon",
      
      icon: <FaAmazon />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                   
                  </div>
                </div>
               
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
