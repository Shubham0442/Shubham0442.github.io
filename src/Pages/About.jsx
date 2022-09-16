import React from 'react'
import style from "./about.module.css"
import Typewriter from 'typewriter-effect';
import { Box, Text,} from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';


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
        </div>
        <Box w={{base: "90%",sm:"85%", md:"85%", lg:"60%"}} margin={"auto"} mt={"30px"} fontWeight={"550"} fontSize={{base:"8px", sm:"10px", md:"14px"}} >
            <Text  color={"#ff6263"} mb={"30px"} fontWeight={"550"} fontSize={"23px"}>Days I Code</Text>
            <GitHubCalendar 
                username="Shubham0442" 
                year={new Date().getFullYear()} 
                color={"#ff6263"} 
            />
        </Box>
    </div>
        
    )
    }

export default About