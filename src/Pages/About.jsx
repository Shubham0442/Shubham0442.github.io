import React from 'react'
import style from "./about.module.css"
import Typewriter from 'typewriter-effect';
import { Box, Text,} from '@chakra-ui/react'
import GitHubCalendar from 'react-github-calendar';


const About = () => {
  return (
   
    <Box w={"100%"} h={"600px"} m={"auto"} bg={"#e0e5e9"}>

         <Text fontSize={{ base:"21px", sm:"24px", md:"27px", lg:"30px"}} fontWeight={"700"} color={"#ff6263"} mb={"20px"}>About Me</Text>
         <Box w={{ base:"80%", sm:"80%", md:"70%", lg:"60%"}} m={"auto"} textAlign={"left"}>
            <Box >
              <Text fontSize={{ base:"18px", sm:"18px", md:"21px", lg:"25px"}} fontWeight={"700"}>Shubham Rakhonde</Text>
              <Text fontSize={{ base:"16px", sm:"16px", md:"18px", lg:"20px"}} fontWeight={"700"} color={"#ef234b"}>
              <Typewriter
                  options={{
                    strings: ['Full-Stack-Web-Developer', 'MERN Developer', "Coder", "Car Enthusiast"],
                    autoStart: true,
                    loop: true,
                    changeDeleteSpeed:900,
                    
                  }}
                />
              </Text>
              <Text fontSize={{ base:"14px"}} fontWeight={"500"}>Has imparted his frontend and backend techanical skill during the construct week at Masai School while working in collaborative projects. Problem solving mindset with committed to shared goals and highly believed in team work. Having keen interest for developing the dynamic web applications.</Text>
            </Box>
        </Box>
    </Box>
        
    )
    }

export default About