import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Text, Image } from "@chakra-ui/react";

const About = () => {
  return (
    <Box w={"100%"} h={"600px"} m={"auto"} bg={"#e0e5e9"}>
      <Text
        fontSize={{ base: "21px", sm: "24px", md: "27px", lg: "30px" }}
        fontWeight={"700"}
        color={"#ff6263"}
        mb={"20px"}
      >
        About Me
      </Text>
      <Box
        w={{ base: "80%", sm: "80%", md: "70%", lg: "60%" }}
        m={"auto"}
        textAlign={"left"}
      >
        <Box w={"50%"} m={"auto"}>
          <Image
            w={"100%"}
            h={{ base: "150px", sm: "200px", md: "200px", lg: "250px" }}
            borderRadius={"50%"}
            src={"https://www.foxtraut.com/images/php-development-banner.png"}
            alt={"about"}
          />
        </Box>
        <Box>
          <Text
            fontSize={{ base: "18px", sm: "18px", md: "21px", lg: "25px" }}
            fontWeight={"700"}
          >
            Shubham Rakhonde
          </Text>
          <Text
            fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight={"700"}
            color={"#ef234b"}
          >
            <Typewriter
              options={{
                strings: [
                  "Full-Stack-Web-Developer",
                  "MERN Developer",
                  "Coder",
                  "Car Enthusiast"
                ],
                autoStart: true,
                loop: true,
                changeDeleteSpeed: 900
              }}
            />
          </Text>
          <Text
            fontSize={{ base: "14px", sm: "15px", md: "16.5", lg: "17.5px" }}
            fontWeight={"500"}
          >
            Has imparted his frontend and backend techanical skill during the
            construct week at Masai School while working in collaborative
            projects. Problem solving mindset with committed to shared goals and
            highly believed in team work. Has 1000+ hours of hands on experience
            in web development and always energetic and eager to learn new
            things. Has keen interest for developing the dynamic web
            applications. Ambitious and hardworking individual, looking forward
            to work in the software industry to demonstrate skills and enhance
            capabilities.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
