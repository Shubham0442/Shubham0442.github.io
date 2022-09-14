import React from 'react'
import style from "./about.module.css"
import Typewriter from 'typewriter-effect';

const About = () => {
  return (
   
    <div className={style.aboutContainerDiv}>

         <h2 className={style.aboutHeadingDiv}>About Me</h2>
         <div className={style.aboutDataContainer}>
            <div className={style.aboutText}>
              <h2>Shubham Rakhonde</h2>
              <h3>
              <Typewriter
                  options={{
                    strings: ['Full-Stack-Web-Developer', 'MERN Developer', "Coder", "Car Enthusiast"],
                    autoStart: true,
                    loop: true,
                    changeDeleteSpeed:900,
                    
                  }}
                />
              </h3>
              <p>Has imparted his frontend and backend techanical skill during the construct week at Masai School while working in collaborative projects. Problem solving mindset with committed to shared goals and highly believed in team work. Having keen interest for developing the dynamic web applications.</p>
            </div>
            {/* <div className={style.aboutImageDiv}>
               <img src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47jfgc7emepc8u3jn72svhv7l7rt7eppnfgrbhn9fc&rid=giphy.gif&ct=g" alt="shubham" />
           </div> */}
        </div>
    </div>
        
    )
    }

export default About