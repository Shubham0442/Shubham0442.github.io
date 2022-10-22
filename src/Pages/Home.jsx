import React from 'react'
import style from "./home.module.css"
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Box >
          <Flex w={"100%"} h={"600px"} m={"auto"} flexDirection={{base:"column-reverse", sm:"column-reverse", md:"column-reverse", lg:"row"}} bg={"#e0e5e9"}justifyContent={"center"} alignItems={"center"} gap={{base:"25px"}} mt={{base:"80px", sm:"80px", md:"80px"}}>
            <Box   w={{base:"280px", sm:"350px", md:"400px", lg:"450px"}} textAlign={"left"}>
                <Text color={"#ff6263"} fontSize={{base:"40px", sm:"40px", md:"50px", lg:"55px"}} fontWeight={"700"}>Hi,👋</Text>
                <Text  fontSize={{ base:"22px", sm:"25px", md:"30px", lg:"35px"}} fontWeight={"700"}>I'm Shubham Rakhonde</Text>
                <Text color={"#ef234b"} fontSize={{ base:"18px", sm:"18px", md:"23px", lg:"28px"}} fontWeight={"700"}>
                  <Typewriter
                    options={{
                    strings: ['Full-Stack-Web-Developer', 'MERN Developer', "Coder"],
                    autoStart: true,
                    loop: true,
                    changeDeleteSpeed:300,
                    
                  }}
                /></Text> 

                <Text fontWeight={"700"}>Connect me here:</Text>
                <Flex  w={"100%"} m={"auto"} flexDirection={"row"} gap={"8px"} mt={"1px"} mb={"17px"}>
                  <a href="https://www.linkedin.com/in/shubham-rakhonde-102964166/" target={"_blank"}>
                    <Box h={"25px"} w={"25px"}>
                          <Image src="https://th.bing.com/th/id/R.d2b259e9514fa5f15790c87cb23a0411?rik=NhGFQgZ%2bCYmm0Q&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fLinkedIn-Logo.png&ehk=xpZWROnsJABCG%2fEK4fTwutyurbxCi4XyZH7Wu9HFCSI%3d&risl=&pid=ImgRaw&r=0" alt="linkin" />
                    </Box>
                  </a>
                  <a href="https://github.com/Shubham0442" target={"_blank"}>
                    <Box h={"25px"} w={"25px"}>
                           <Image src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="githubb" />
                    </Box>
                  </a>
                  <a href="https://medium.com/@shubhamrakhonde507" target={"_blank"}>
                    <Box h={"25px"} w={"25px"}>
                           <Image src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="mediam" />
                    </Box>
                  </a>
                </Flex>
                <a href="/Shubham_Rakhonde_Resume.pdf" download >
                   <Button bg={"#3470e4"} color="white" size='sm'>Resume</Button>
                </a>
            </Box>
            <Box >
                <Image w={{base:"300px", sm:"350px", md:"400px", lg:"460px"}}  src="/sitePhotos/2022-07-26 (1).png" alt="pic" /> 
            </Box>       
    </Flex>
    
    </Box>
  )
}

export default Home