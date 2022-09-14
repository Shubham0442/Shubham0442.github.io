import React from 'react'
import style from "./skill.module.css"

const Skill = () => {
  return (
    <div className={style.Mainskillcontainer}>
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
      {/* <div className={style.softSkillDiv}>
        <h2>Soft-Skill</h2>
        <div className={style.softSkillInnerDiv}>
          <h3>🎯 Team Work</h3>
          <h3>🎯 Adaptability</h3>
          <h3>🎯 Problem Solving</h3>
          <h3>🎯 Creativity</h3>
        </div>
      </div>    */}
    </div> 
  )
}

export default Skill