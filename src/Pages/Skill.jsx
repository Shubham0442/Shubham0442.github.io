import React from 'react'
import style from "./skill.module.css"
import { Box, SimpleGrid, Text, Image, Flex } from '@chakra-ui/react';
import  GitHubCalendar  from 'react-github-calendar'

const Skill = () => {
  return (
      <Box w={"100%"} m={"auto"} bg={"#e0e5e9"} mt={{base:"430px", sm:"400px", md:"100px", lg:"50px"}}>
             <Text color={"#ff6263"} fontWeight={"660"} fontSize={"25px"} mb={"10px"} pt={"30px"}>Tech-Skills</Text>
             <SimpleGrid columns={[3, 4, 6]} w={{base:"80%", sm:"85%", md:"80%", lg:"65%"}} m={"auto"} gap={"40px"} alignItems={"center"} justifyContent={"center"} mb={"50px"}>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"
                       >
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt='pic'/>
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt='pic'/>
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt='pic'/>
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"        
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                      
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt='pic'/>
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt='pic'/>
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >
                      <Image 
                      w={{base:"100%"}}
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://cdn.iconscout.com/icon/free/png-128/npm-3-1175132.png" alt="react rouer dom" />
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >
                      <Image 
                      w={{base:"100%"}}
                      _hover={{transform:"scale(1.2)"}} 
                      src={"https://brandeps.com/logo-download/R/React-Router-logo-vector-01.svg"} alt="react rouer dom" />
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://bestofjs.org/logos/chakra-ui.svg" alt='pic'/>
                  </Box> 
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="db" />
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >  
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="node" />
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"20px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                       
                       >
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" />
                  </Box>
                  <Box 
                       p={{base:"10px", sm:"10px", md:"15px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s" 
                       m={"auto"} textAlign={"center"}
                       >
                      <Image 
                      w={{base:"90%"}}
                      _hover={{transform:"scale(1.2)"}} display={"block"} m={"auto"}
                      src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" alt="mongoose" />
                  </Box>
                  <Box 
                       p={{base:"15px", sm:"15px", md:"15px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s" 
                       >
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="mongoose" />
                  </Box>
                  <Box 
                       p={{base:"0px", sm:"0px", md:"0px"}} 
                       boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"} borderRadius={"5px"} transition= "all 0.6s"                         
                       >
                      <Image 
                      w={{base:"100%"}} 
                      _hover={{transform:"scale(1.2)"}} 
                      src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo-data-structure.png" alt="express" />
                  </Box>
             </SimpleGrid>
             <Text  color={"#ff6263"} mb={"30px"} fontWeight={"550"} fontSize={"25px"}>Git-Hub Statistics</Text>
             <Flex w={{base: "80%",sm:"75%", md:"75%", lg:"56%"}} margin={"auto"} mt={"50px"} fontWeight={"550"} gap={"10px"} fontSize={{base:"8px", sm:"10px", md:"14px"}} mb={"50px"} flexDirection={{base: "column", sm:"column",md: "row", lg:"row"}} justifyContent={"space-evenly"}>
                  <Box w={{ base: "100%", sm: "100%", md:"50%"}} >
                    <Image w={"100%"}   src={"https://github-readme-stats.vercel.app/api?username=Shubham0442&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en"}/>
                  </Box>
                  <Box w={{ base: "100%", sm: "100%", md:"50%"}} >
                       <Image w={"100%"} src={"https://github-readme-stats.vercel.app/api/top-langs/?username=Shubham0442&layout=compact&hide=Shell&border_radius=0"}/>
                  </Box>
             </Flex>
              <Box w={{base: "80%",sm:"75%", md:"75%", lg:"56%"}} margin={"auto"} mt={"50px"} fontWeight={"550"} fontSize={{base:"8px", sm:"10px", md:"14px"}} mb={"50px"}>
                      <Box >
                          <Image w={"100%"} h={"200px"} src={"https://github-readme-streak-stats.herokuapp.com/?user=Shubham0442&hide_border=true"}/>
                      </Box>   
              </Box>
             <Box w={{base: "90%",sm:"85%", md:"85%", lg:"56%"}} margin={"auto"} mt={"50px"} fontWeight={"550"} fontSize={{base:"8px", sm:"10px", md:"14px"}} mb={"50px"}>
                  <Text  color={"#ff6263"} mb={"30px"} fontWeight={"550"} fontSize={"25px"}>Days I Code</Text>
                  <GitHubCalendar 
                      username="Shubham0442" 
                      year={new Date().getFullYear()} 
                      color={"#ff6263"} 
                      w={"100%"}
                  />
             </Box>
              <Text mt={"50px"} color={"#ff6263"} mb={"15px"} fontWeight={"650"} fontSize={"25px"}>Soft-Skill</Text>
              <Flex w={"70%"} m={"auto"} justifyContent={"space-around"} flexWrap={"wrap"} pb={"50px"} gap={"15px"}>
                <Text color={"rgb(49, 83, 187)"} mb={"30px"} fontWeight={"600"} fontSize={"17px"}>🎯 Team Work</Text>
                <Text color={"rgb(49, 83, 187)"} mb={"30px"} fontWeight={"600"} fontSize={"17px"}>🎯 Adaptability</Text>
                <Text color={"rgb(49, 83, 187)"} mb={"30px"} fontWeight={"600"} fontSize={"17px"}>🎯 Problem Solving</Text>
                <Text color={"rgb(49, 83, 187)"} mb={"30px"} fontWeight={"600"} fontSize={"17px"}>🎯 Creativity</Text>
              </Flex>

      </Box>
  )
}

export default Skill


{/* <div className={style.Mainskillcontainer}>
      <div>
        <h2>Tech-Skill</h2>
        <div className={style.skillcontainer}>
         <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt='pic'/>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt='pic'/>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt='pic'/>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt='pic'/>
        </div>
        <div>
          <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt='pic'/>
        </div>
        <div>
          <img alt='pic' src="https://bestofjs.org/logos/chakra-ui.svg" />
        </div> 
        <div>
          <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="db" />
        </div>
        <div>
          <img src="https://www.svgrepo.com/show/303360/nodejs-logo.svg" alt="node" />
        </div>
        <div>
          <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg" alt="express" />
        </div>
       </div>
      </div>
      <div className={style.softSkillDiv}>
        <h2>Soft-Skill</h2>
        <div className={style.softSkillInnerDiv}>
          <h3>🎯 Team Work</h3>
          <h3>🎯 Adaptability</h3>
          <h3>🎯 Problem Solving</h3>
          <h3>🎯 Creativity</h3>
        </div>
      </div>
      <Box w={{base: "90%",sm:"85%", md:"85%", lg:"60%"}} margin={"auto"} mt={"30px"} fontWeight={"550"} fontSize={{base:"8px", sm:"10px", md:"14px"}} h={{base:"200px", sm:"200px", md:"300px", lg:"350px"}} border={"1px solid"}>
            <Text  color={"#ff6263"} mb={"30px"} fontWeight={"550"}>Days I Code</Text>
            <GitHubCalendar 
                username="Shubham0442" 
                year={new Date().getFullYear()} 
                color={"#ff6263"} 
            />
        </Box> 
    </div>  */}