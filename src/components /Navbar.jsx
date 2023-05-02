import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';
import Hamburger from "hamburger-react"


const Container = styled.div`
top: 0;
position:sticky;
z-index: 9999;
background-color:#E5E5DB;
`
const Wrapper = styled.div`
position: relative;
width: 100%;
height: 70px;
display: flex;
margin-bottom: 10px;
padding:20px 25px 25px 25px ;
`
const Left = styled.div`
flex:1;
display: flex;
justify-content: start;
align-items:center;
padding: 20px;
font-family: 'Fjalla One', sans-serif;
color: #303D57;
`
const Logo = styled.div`
width: 50px;
height: 50px;
 border:3px solid #303D57 ;
 margin-top: 10px;
 font-size: 30px;
 display: flex;
 align-items: center;
 justify-content: center;

 transition: background-color .3s ease-in;
cursor: pointer;

&:hover{
  background-color:rgba(54, 112, 85,0.4);
}
`
const Right = styled.div`
flex:3;
display: flex;
justify-content: end ;
align-items: center;
padding: 20px;
gap: 2rem;
`
const MenuLinks = styled.div`
margin-left: 20px;
color: #303D57;
font-size: 20px;
font-weight: 900;
font-family: 'Fjalla One', sans-serif;
transition: color .2s ease-in;
cursor: pointer;

&:hover{
  color: #367055
}


`
const Button = styled.button`
background-color: transparent;
font-size: 23px;
border: 3px solid #303D57;
padding:10px;
transition: background-color .3s ease-in;
cursor: pointer;

&:hover{
  background-color:rgba(54, 112, 85,0.5);
}
`
 const NavLinks =styled(LinkS)`

 display:flex;
 align-items: center;
 text-decoration:none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 user-select: none;

 @media screen and (max-width:944px) {
  display: none;
}

`
const MNavLinks =styled(LinkS)`

display:flex;
align-items: center;
text-decoration:none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
user-select: none;




`
const MobileIcon =styled.div`
display: none;

@media screen and (max-width:944px) {
    display: flex;
    position:fixed;
   justify-content: center;
    align-items: center;
    top:-7px;
    right:0;
    transform:translate(-100%,60%); 
    font-size:1.2rem ;
    cursor: pointer;
    z-index: 99999;

    background-color: transparent;
    width: 50px;
height: 50px;
}
`


const Navbar = ({toggle,isOpen}) => {

  const toggleHome =()=>{
    scroll.scrollToTop();
  }

  return (
    <Container >
    
        <Wrapper>

         <Left>
         
            <Logo>
        <MNavLinks to="home" onClick={toggleHome}>
            K.
        </MNavLinks>
            </Logo>
         </Left>
         <Right>
        
         <MobileIcon onClick={toggle}>
              <Hamburger color="#303D57" toggled={isOpen} toggle={toggle}></Hamburger>
               
            </MobileIcon>
         <NavLinks to="about" 
         smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}
         >

         <Fade left>
         <MenuLinks 
         >
             ABOUT ME.
           </MenuLinks>
         </Fade>
         </NavLinks>
         <NavLinks to="projects"
          smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}
         >

           <Fade left>
           <MenuLinks>
             PROJECTS.
           </MenuLinks>
           </Fade>
         </NavLinks>

         <NavLinks to="services"  smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
         <Fade left>
         <MenuLinks>
         
             SERVICES.
           </MenuLinks>
         </Fade>
         </NavLinks>

         <NavLinks to='contact' 
          smooth={true} duration={500}
         spy={true}
         exact='true'
         offset={-80}>
      <Fade left>
      <Button>
          CONTACT ME
        </Button>
      </Fade>
         </NavLinks>
           
         </Right>
       
        </Wrapper>
        
    </Container>
  )
}

export default Navbar
