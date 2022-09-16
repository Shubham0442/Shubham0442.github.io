import React from 'react'
import style from "./home.module.css"
import { Button } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div >
          <div className={style.Maincontainer}>
            <div>
                <h1>Hi,👋</h1>
                <h2>I'm Shubham Rakhonde</h2>
                <p><Typewriter
                  options={{
                    strings: ['Full-Stack-Web-Developer', 'MERN Developer', "Coder"],
                    autoStart: true,
                    loop: true,
                    changeDeleteSpeed:300,
                    
                  }}
                /></p> 

                <h3>Connect me here:</h3>
                <div className={style.ContactSocilDiv}>
                  <a href="https://www.linkedin.com/in/shubham-rakhonde-102964166/" target={"_blank"}>
                    <div>
                          <img src="https://th.bing.com/th/id/R.d2b259e9514fa5f15790c87cb23a0411?rik=NhGFQgZ%2bCYmm0Q&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fLinkedIn-Logo.png&ehk=xpZWROnsJABCG%2fEK4fTwutyurbxCi4XyZH7Wu9HFCSI%3d&risl=&pid=ImgRaw&r=0" alt="linkin" />
                    </div>
                  </a>
                  <a href="https://github.com/Shubham0442" target={"_blank"}>
                    <div>
                           <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="githubb" />
                    </div>
                  </a>
                  <a href="https://medium.com/@shubhamrakhonde507" target={"_blank"}>
                    <div>
                           <img src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="mediam" />
                    </div>
                  </a>
                </div>
                <a href="/Shubham_Rakhonde_Resume.pdf" download >
                   <Button bg={"#3470e4"} color="white" size='sm'>Resume</Button>
                </a>
            </div>
            <div>
                <img src="/sitePhotos/2022-07-26 (1).png" alt="pic" /> 
            </div>       
    </div>
    
    </div>
  )
}

export default Home