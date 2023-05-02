import React from 'react';
import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import {AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai";

const Container = styled.div`

display: ${({isOpen})=>(isOpen?'flex':'none')};
background-color: rgba(255, 255, 255, 0.2);
transition: 0.3s ease-in-out;
z-index: 9999;

`
const Wrapper = styled.div`
position: fixed;
top: 80px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
right: 0px;
z-index: 9999;
background-color: white;
`
const Bottom  =styled.div`

`

const Items=styled.div`
font-size: 35px;
padding: 5px;
transition: transform .1s ease;
color:#303D57;

&:hover {
  transform: scale(1.1)};
  
`
const HItems = styled.div`
display: flex;



`

const Right = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
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
margin-right:10px ;

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
 user-select: none;`

const Sidebar = ({isOpen,toggle}) => {
  return (
    <Container isOpen={isOpen} toggle={toggle} onClick={toggle}>
        <Wrapper>
        <Right>
        
        
        <NavLinks to="about" 
        smooth={true} duration={500}
        spy={true}
        exact='true'
        offset={-80}
        onClick={toggle}
        >

        
        <MenuLinks 
        >
            ABOUT ME.
          </MenuLinks>
        
        </NavLinks>
        <NavLinks to="projects"
         smooth={true} duration={500}
        spy={true}
        exact='true'
        offset={-80}
        onClick={toggle}
        >

          
          <MenuLinks>
            PROJECTS.
          </MenuLinks>
          
        </NavLinks>

        <NavLinks to="services"  smooth={true} duration={500}
        spy={true}
        exact='true'
        offset={-80}
        onClick={toggle}
        >
        
        <MenuLinks>
        
            SERVICES.
          </MenuLinks>
        
        </NavLinks>

        <NavLinks to='contact' 
         smooth={true} duration={500}
        spy={true}
        exact='true'
        offset={-80}
        onClick={toggle}
        >
        
     
     <Button>
         CONTACT ME
       </Button>
     
        </NavLinks>
          
        </Right>
        <Bottom>
        <HItems>
     <Items>
        <AiOutlineInstagram/>
        </Items>
        <Items>
        <AiOutlineGithub/>
        </Items>
        <Items>
        <AiFillLinkedin/>
        </Items>
        <Items>
        <AiFillTwitterCircle/>
        </Items>
      </HItems>
        </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Sidebar
