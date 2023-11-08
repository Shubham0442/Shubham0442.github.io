import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import React from "react";

const Work = () => {
  return (
    <Box
      w={"100%"}
      m={"auto"}
      h="100%"
      bg={"#e0e5e9"}
      mt={{ base: "430px", sm: "400px", md: "100px", lg: "50px" }}
    >
      <Text
        color={"#ff6263"}
        fontWeight={"660"}
        fontSize={"25px"}
        mb={"10px"}
        pt={"30px"}
      >
        Work
      </Text>
      <Box
        w={{ base: "90%", sm: "90%", md: "90%", lg: "75%" }}
        m={"auto"}
        textAlign="center"
      >
        <Box>
          <Text
            fontSize={{ base: "18px", sm: "18px", md: "21px", lg: "25px" }}
            fontWeight={"700"}
          >
            Codeacious Technologies Pvt. Ltd., Noida (UP)
          </Text>
          <Flex flexWrap="wrap" justifyContent={"center"} alignItems="center">
            <Text
              fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={"500"}
            >
              Software Developer (Full Stack)
            </Text>
            -
            <Text
              fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
              fontWeight={"500"}
            >
              Nov 2022 – Nov 2023
            </Text>
          </Flex>
          <Text
            mt="20px"
            fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight={"700"}
            textAlign="center"
            color={"#ff6263"}
          >
            Tech-Stack used at work:
          </Text>
          <Flex
            w={{ base: "90%", sm: "80%", md: "80%", lg: "75%" }}
            m={"auto"}
            flexWrap="wrap"
            alignItems={"center"}
            justifyContent={"center"}
            mt="25px"
            gap={{ base: "20px", sm: "25px", md: "30px", lg: "40px" }}
          >
            <Box
              w={{ base: "60px", sm: "60px", md: "85px", lg: "95px" }}
              h={{ base: "60px", sm: "60px", md: "85px", lg: "95px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="htmlpic"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="cssicon"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="jsicon"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="pic"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="pic"
                w="70%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                id="material-ui"
                src="/icons/material-ui-1.svg"
                alt="material-ui"
                w="60%"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s ease-in-out"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                id="tailwind"
                src="/tailwindcss-logo.svg"
                alt="tailwind"
              />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image w="70%" src="/icons/nodejs-icon.svg" alt="nodejs" />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image w="70%" src="/icons/typescript.svg" alt="typescript" />
            </Box>
            <Box
              w={{ base: "55px", md: "85px" }}
              h={{ base: "55px", md: "85px" }}
              p={{ base: "5px", sm: "5px", md: "10px" }}
              boxShadow={"rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
              borderRadius="50%"
              transition="all 0.6s"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="20px"
            >
              <Image
                w="70%"
                src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
                alt="githubb"
              />
            </Box>
          </Flex>
          <Text
            fontSize={{ base: "16px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight={"700"}
            mt="20px"
            color={"#ff6263"}
          >
            Key Responsibilities:
          </Text>
          <Box w={{ base: "100%", sm: "80%", md: "70%", lg: "60%" }} m={"auto"}>
            <UnorderedList
              fontSize={{ base: "14px", sm: "15px", md: "16.5", lg: "17.5px" }}
              fontWeight={"500"}
              textAlign="left"
            >
              <ListItem>
                Developing the new features and project screens with optimized
                code to boost performance.
              </ListItem>
              <ListItem>
                Developing the reusable components which can decrease
                development cycle and maintain consistency throughout the
                application.
              </ListItem>
              <ListItem>
                Developing the AI model and services on backend side.
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
