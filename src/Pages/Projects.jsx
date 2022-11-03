import React from 'react'
import style from "./project.module.css"
import "../App.css"
import {Flex, Box, Image, Text, SimpleGrid} from '@chakra-ui/react'
import {FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <Box w={"100%"}  bg={"#e0e5e9"} h={{base:"1850px", sm:"1900px", md:"1500px", lg:"1200px"}}>
      <Text fontSize={"25px"} fontWeight={"650"} color={"#ff6263"} mt={"20px"} mb={"8px"}>Projects</Text>
      <Text fontSize={"18px"} fontWeight={"650"} color={"#ef234b"} mb={"20px"}>-What I Built-</Text>
      <SimpleGrid columns={[1, 1, 2, 2]} w={{base:"90%", sm:"90%", md:"90%", lg:"80%"}} m={"auto"} gap={"40px"} alignItems={"center"} justifyContent={"center"} mb={"50px"}>
            <Box bg={"white"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} borderRadius={"8px"} >
              <Image src="/sitePhotos/shoesformen.png" alt="project" w={"100%"} borderTopLeftRadius={"8px"} borderTopRightRadius={"8px"} />
              <Box p={"10px"}>
                <Text fontSize={{base:"15px", sm:"16.5px"}} fontWeight={"550"}>Shoes-for-men</Text>
                <Text fontSize={{base:"10px", sm:"12px"}} fontWeight={"500"}>An e-commerce website consisting different kinds of shoes with admin and user-side functionalities built in five weeks individually.</Text>
              </Box>
              <hr />
              <Flex justifyContent={"space-around"}  flexWrap={"wrap"} p={"10px"}>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt='pic'/>
                  <Image w={"30px"}  h={"20px"} id='chakraIcon' src="https://raw.githubusercontent.com/feguedi/cra-template-chakra-ui-base/HEAD/assets/logo-colored@2x.png" alt="chakraicon" />
                  <Image w={"25px"} src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
              </Flex>
              <hr />
              <Flex gap={"10px"} p={"10px"} justifyContent={"center"}>
                  <a href="https://shoesformens.netlify.app/" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs">Go Live</button>
                    </Box>
                  </a>
                  <a href="https://github.com/Shubham0442/Project-Shoes-for-men" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs"> 
                      <Flex alignItems={"center"} gap={"5px"}>
                         <FaGithub color='black'/><p>Code</p>
                      </Flex>
                    </button>
                    </Box>
                  </a>
              </Flex>
            </Box>
            <Box bg={"white"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} borderRadius={"8px"}>
              <Image src="/sitePhotos/2022-08-19.png" alt="project" w={"100%"} borderTopLeftRadius={"8px"} borderTopRightRadius={"8px"} />
              <Box p={"10px"}>
                <Text fontSize={{base:"15px", sm:"16.5px"}} fontWeight={"550"}>IdeaKart-Clone</Text>
                <Text fontSize={{base:"10px", sm:"12px"}} fontWeight={"500"}>Clone of the site Ideakart.com that gives an idea and platform to buy books. Built with some of it's basic functionality, collaboratively.</Text>
              </Box>
              <hr />
              <Flex justifyContent={"space-around"} flexWrap={"wrap"} p={"10px"}>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt='pic'/>
                  <Image w={"30px"}  h={"20px"} id='chakraIcon' src="https://raw.githubusercontent.com/feguedi/cra-template-chakra-ui-base/HEAD/assets/logo-colored@2x.png" alt="chakraicon" />
                  <Image w={"25px"} src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
              </Flex>
              <hr />
              <Flex  gap={"10px"} p={"10px"} justifyContent={"center"} >
                  <a href="https://ideakart-clone-rct101.netlify.app/" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs">Go Live</button>
                    </Box>
                  </a>
                  <a href="https://github.com/Shubham0442/ideakart-clone" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs"> 
                      <Flex alignItems={"center"} gap={"5px"}>
                         <FaGithub color='black'/><p>Code</p>
                      </Flex>
                    </button>
                    </Box> 
                  </a>   
              </Flex>
            </Box>
            <Box bg={"white"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} borderRadius={"8px"}>
              <Image src="/sitePhotos/2022-08-19 (1).png" alt="project" w={"100%"} borderTopLeftRadius={"8px"} borderTopRightRadius={"8px"} />
              <Box p={"10px"}>
                <Text fontSize={{base:"15px", sm:"16.5px"}} fontWeight={"550"}>YOOX-Clone</Text>
                <Text fontSize={{base:"10px", sm:"12px"}} fontWeight={"500"}>YOOX-Clone is clone of an e-commerce website yoox.us, which has wide range of categories for shopping, built with some of it's basic functionality, built individually.</Text>
              </Box>
              <hr />
              <Flex justifyContent={"space-around"} flexWrap={"wrap"} p={"10px"}>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <Image w={"25px"} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
                  <Image w={"30px"} h={"20px"} id='chakraIcon' src="https://raw.githubusercontent.com/feguedi/cra-template-chakra-ui-base/HEAD/assets/logo-colored@2x.png" alt="chakraicon" />
                  <Image w={"25px"} src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
              </Flex>
              <hr />
              <Flex gap={"10px"} p={"10px"} justifyContent={"center"}>
                 <a href="https://yoox-clone-project.vercel.app/" target={"_blank"}>
                    <Box>
                      <button className={style.btn} colorScheme='teal' size="xs">Go Live</button>
                    </Box>
                  </a>
                  <a href="https://github.com/Shubham0442/mighty-cobweb-4218" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs"> 
                      <Flex alignItems={"center"} gap={"5px"} >
                         <FaGithub color='black'/><p>Code</p>
                      </Flex>
                    </button>
                    </Box>
                  </a>
              </Flex>
            </Box>
            <Box bg={"white"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"} borderRadius={"8px"}>
              <Image src="/sitePhotos/2022-08-18.png" alt="project" w={"100%"} borderTopLeftRadius={"8px"} borderTopRightRadius={"8px"} />
              <Box p={"10px"}>
                <Text fontSize={{base:"15px", sm:"16.5px"}} fontWeight={"550"}>Max-fashion-Clone</Text>
                <Text fontSize={{base:"10px", sm:"12px"}} fontWeight={"500"}>Clone of an e-commerce website maxfashion.in, which has wide range of categories for shopping, built with some of its functionalities, collaboratively.</Text>
              </Box>
              <hr />
              <Flex justifyContent={"space-around"} flexWrap={"wrap"} p={"10px"} >
                  <Image w={"25px"}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <Image w={"25px"}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <Image w={"25px"}  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <Image w={"25px"}  src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
                  <Image w={"25px"}  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="bootstrap" />
              </Flex>
              <hr />
              <Flex gap={"10px"} p={"10px"} justifyContent={"center"}>
                  <a href="https://maxfashion-clonelc.netlify.app/index.html" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs">Go Live</button>
                    </Box>
                  </a>
                  <a href="https://github.com/Shubham0442/max-fashion-clone" target={"_blank"}>
                    <Box>
                    <button className={style.btn} colorScheme='teal' size="xs"> 
                      <Flex alignItems={"center"} gap={"5px"}>
                         <FaGithub color='black'/><p>Code</p>
                      </Flex>
                    </button>
                    </Box>
                  </a>
              </Flex>
            </Box>
      </SimpleGrid>
      
    </Box>
  )
}

export default Projects