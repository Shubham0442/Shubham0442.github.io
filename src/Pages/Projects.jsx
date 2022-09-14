import React from 'react'
import style from "./project.module.css"
import "../App.css"
import { Button } from '@chakra-ui/react'
import {FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className={style.mainProjectDiv}>
      <h1 className={style.mainProjectDivTitle}>Projects</h1>
      <h4>-What I Built-</h4>
      <div className={style.ProjectDiv}>
            <div>
              <img src="/sitePhotos/2022-08-18.png" alt="project" />
              <div>
                <h2>Max-fashion-Clone</h2>
                <p>Clone of an e-commerce website maxfashion.in, which has wide range of categories for shopping, built with some of its basic functionalities </p>
              </div>
              <hr />
              <div className={style.techStackDiv}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
              </div>
              <hr />
              <div className={style.DeployGitDiv}>
                  <a href="https://maxfashion-clonelc.netlify.app/index.html" target={"_blank"}>
                    <div>
                    <Button colorScheme='teal' size="xs">Go Live</Button>
                    </div>
                  </a>
                  <a href="https://github.com/Shubham0442/max-fashion-clone" target={"_blank"}>
                    <div>
                    <Button colorScheme='teal' size="xs">
                      <FaGithub color='black'/> code
                    </Button>
                    </div>
                  </a>
              </div>
            </div>
            <div>
              <img src="/sitePhotos/2022-08-19.png" alt="project" />
              <div>
                <h2>IdeaKart-Clone</h2>
                <p>Clone of the site Ideakart.com that gives an idea and platform to buy books. Built with some of it's basic functionality.</p>
              </div>
              <hr />
              <div className={style.techStackDiv}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt='pic'/>
                  <img id='chakraIcon' src="https://raw.githubusercontent.com/feguedi/cra-template-chakra-ui-base/HEAD/assets/logo-colored@2x.png" alt="chakraicon" />
                  <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
              </div>
              <hr />
              <div  className={style.DeployGitDiv}>
                  <a href="https://ideakart-clone-rct101.netlify.app/" target={"_blank"}>
                    <div>
                    <Button colorScheme='teal' size="xs">Go Live</Button>
                    </div>
                  </a>
                  <a href="https://github.com/Shubham0442/ideakart-clone" target={"_blank"}>
                    <div>
                    <Button colorScheme='teal' size="xs">
                      <FaGithub color='black'/> code
                    </Button>
                    </div> 
                  </a>   
              </div>
            </div>
            <div>
              <img src="/sitePhotos/2022-08-19 (1).png" alt="project" />
              <div>
                <h2>YOOX-clone</h2>
                <p>Clone of an e-commerce website yoox.us, built with some of it's basic functionality, built individually.</p>
              </div>
              <hr />
              <div className={style.techStackDiv}>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="htmlpic"/>
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="cssicon" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="jsicon" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt='pic'/>
                  <img id='chakraIcon' src="https://raw.githubusercontent.com/feguedi/cra-template-chakra-ui-base/HEAD/assets/logo-colored@2x.png" alt="chakraicon" />
                  <img src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667" alt="githubb" />
              </div>
              <hr />
              <div  className={style.DeployGitDiv}>
                 <a href="https://yoox-clone-project.vercel.app/" target={"_blank"}>
                    <div>
                      <Button colorScheme='teal' size="xs">Go Live</Button>
                    </div>
                  </a>
                  <a href="https://github.com/Shubham0442/mighty-cobweb-4218" target={"_blank"}>
                    <div>
                     <Button colorScheme='teal' size="xs">
                      <FaGithub color='black'/> code
                    </Button>
                    </div>
                  </a>
              </div>
            </div>
      </div>
      
    </div>
  )
}

export default Projects