
import React from 'react'
import { Link, NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
import {HamburgerIcon } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from '@chakra-ui/react'

const links = [
    {
        title : "Projects",
        to : "/projects"
    },
    {
        title : "Contact",
        to : "/contact"
    },
    {
        title : "Education",
        to : "/education"
    },
    {
        title : "Skill",
        to : "/skill"
    }
]


const Navbar = ({homeRef, skillRef, projectsRef, contactRef, aboutRef}) => {

    const handleScroll = (ref) => {
        window.scrollTo({
          top: ref.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }

      
  return (
    <div className={styles.Navbar}>
        <div>
                <Link to="/"
                  className={
                    ({ isActive }) =>
                     isActive ? styles.activeStyle : styles.inactiveStyle
                } 
              
                onClick = {()=>{handleScroll(homeRef.current)}}
                >
                    <h1 className={styles.SrDiv}>SR</h1>
                </Link>
        </div>
        <div className={styles.LinksDiv}>
           
                    <NavLink 
                     className={
                        ({ isActive }) =>
                         isActive ? styles.activeStyle : styles.inactiveStyle
                    }
                      to="/" 
                     
                      onClick = {()=>{handleScroll(homeRef.current)}}
                      >
                     Home
                    </NavLink>
                    <NavLink 
                     className={
                        ({ isActive }) =>
                         isActive ? styles.activeStyle : styles.inactiveStyle
                    }
                      to="/about"
                      
                      onClick = {()=>{handleScroll(aboutRef.current)}}
                      >
                     About
                    </NavLink>
                    <NavLink 
                     className={
                        ({ isActive }) =>
                         isActive ? styles.activeStyle : styles.inactiveStyle
                    }
                      to="/skill"
                      
                      onClick = {()=>{handleScroll(skillRef.current)}}
                      >
                     Skills
                    </NavLink>
                    <NavLink 
                     className={
                        ({ isActive }) =>
                         isActive ? styles.activeStyle : styles.inactiveStyle
                    }
                      to="/projects"
                      
                      onClick = {()=>{handleScroll(projectsRef.current)}}
                      >
                     Projects
                    </NavLink>
                    <NavLink 
                     className={
                        ({ isActive }) =>
                         isActive ? styles.activeStyle : styles.inactiveStyle
                    }
                      to="/contact"
                      
                      onClick = {()=>{handleScroll(contactRef.current)}}
                      >
                     Contact
                    </NavLink>
                    
          
        </div>
        <div className={styles.HamburgerDiv}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            variant='ghost'
                        />
                        <MenuList w="50px" fontSize="15px" className={styles.menuListDiv}>
                                    <Link to="/" onClick = {()=>{handleScroll(homeRef.current)}}>
                                        <MenuItem fontWeight="550">Home</MenuItem>
                                    </Link>
                                    <Link to="/about" onClick = {()=>{handleScroll(aboutRef.current)}}>
                                        <MenuItem fontWeight="550">About</MenuItem>
                                    </Link>
                                    <Link to="/skill" onClick = {()=>{handleScroll(skillRef.current)}}>
                                        <MenuItem fontWeight="550">Skills</MenuItem>
                                    </Link>
                                    <Link to="/project"  onClick = {()=>{handleScroll(projectsRef.current)}}>
                                        <MenuItem fontWeight="550">Projects</MenuItem>
                                    </Link> 
                                    <Link to="/contact" onClick = {()=>{handleScroll(contactRef.current)}}>
                                        <MenuItem fontWeight="550">Contact</MenuItem>
                                    </Link> 
                        </MenuList>
                    </Menu>
            </div>
    </div>
  )
}

export default Navbar