import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React from "react";

const Work = () => {
  const experience = [
    {
      company: "Openintervue",
      role: "MERN Full Stack Developer",
      location: "Bengaluru",
      duration: "Apr 2024 – Present",
      description: [
        "Developed core modules like User Management, Analytics Dashboard, and Kanban Board using React, Redux, and Node.js.",
        "Improved performance and maintainability by 15–20% by refactoring codebase using ES6 standards and reusable components.",
        "Collaborated with cross-functional teams to deliver scalable, user-friendly features aligned with business goals.",
        "Implemented authentication, REST APIs, and AWS deployments for production readiness."
      ],
      techStack: [
        "React.js",
        "Redux",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
        "Ant Design",
        "Git",
        "GitHub"
      ]
    },
    {
      company: "Codeacious Technology Pvt. Ltd.",
      role: "Software Developer – Full Stack",
      location: "Noida",
      duration: "Nov 2022 – Nov 2023",
      description: [
        "Built Media Management and Editor components for internal CMS platforms.",
        "Integrated GenAI services like Midjourney and Leonardo.ai in backend systems for creative automation.",
        "Designed SEO-optimized screens to enhance content visibility and search performance.",
        "Developed chatbot UI components for real-time user interaction using WebSockets."
      ],
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.io",
        "Tailwind CSS",
        "Material UI",
        "Git",
        "GitHub",
        "Redux-Saga"
      ]
    }
  ];

  return (
    <Box
      w={"100%"}
      m={"auto"}
      h="100%"
      bg={"#e0e5e9"}
      mt={{ base: "430px", sm: "400px", md: "100px", lg: "40px" }}
    >
      <Text
        color={"#ff6263"}
        fontWeight={"660"}
        fontSize={"25px"}
        mb={"30px"}
        pt={"30px"}
      >
        Work
      </Text>
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        w={{ base: "90%", sm: "90%", md: "90%", lg: "90%" }}
        m={"auto"}
        gap={"40px"}
        justifyContent={"center"}
        mb={"40px"}
        textAlign="left"
      >
        {experience?.map((org) => (
          <Box
            w="100%"
            bg="#FFF"
            borderRadius="10px"
            key={org?.role}
            py="15px"
            px="20px"
          >
            <Heading
              fontSize={"22px"}
              fontWeight={"650"}
              color={"#545454"}
              mt={"20px"}
            >
              {org?.role}
            </Heading>
            <Flex
              alignItems="center"
              justifyContent="start"
              gap="10px"
              flexWrap="wrap"
            >
              <Heading fontSize={"18px"} fontWeight={"650"} color={"#545454"}>
                {org?.company}
              </Heading>
              <Text fontSize={"15px"} fontWeight={"650"} color={"#646464"}>
                |
              </Text>
              <Text fontSize={"18px"} fontWeight={"650"} color={"#545454"}>
                {org?.duration}
              </Text>
            </Flex>
            <List textAlign="left">
              {org?.description?.map((para, index) => (
                <ListItem
                  key={para}
                  fontSize={"13px"}
                  fontWeight={"650"}
                  color={"#646464"}
                  mt={"20px"}
                  mb={"2px"}
                  display="flex"
                  justifyContent="flex-start"
                  gap="5px"
                >
                  <Text>{index + 1}.</Text>
                  <Text>{para}</Text>
                </ListItem>
              ))}
            </List>
            <Text
              fontSize={"15px"}
              fontWeight={"650"}
              color={"#646464"}
              mt={"20px"}
              mb={"8px"}
            >
              Tech Stack Used:
            </Text>
            <Flex
              w="100%"
              h="auto"
              alignItems="center"
              justifyContent="center"
              mt="10px"
              flexWrap="wrap"
              gap="10px"
            >
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="pic"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="pic"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="pic"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="/icons/github.svg"
                alt="pic"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://cdn.iconscout.com/icon/free/png-512/free-mongodb-5-1175140.png?f=webp&w=256"
                alt="db"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                src="/material-ui.svg"
                alt="material-ui"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=256"
                alt="tailwind"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src={"/icons/typescript.svg"}
                alt="ts"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://www.svgrepo.com/show/303360/nodejs-logo.svg"
                alt="node"
              />
              <Image
                w={{ base: "30px" }}
                h={{ base: "30px" }}
                _hover={{ transform: "scale(1.2)" }}
                transition="all 0.6s"
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="express"
              />
              {org?.techStack?.includes("Redux-Saga") && (
                <Image
                  mt="10px"
                  w={{ base: "40px" }}
                  h={{ base: "40px" }}
                  _hover={{ transform: "scale(1.2)" }}
                  src="/icons/redux-saga.svg"
                  alt="redux-saga"
                />
              )}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Work;
