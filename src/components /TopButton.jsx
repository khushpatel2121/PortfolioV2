import { useState,useEffect } from "react";
import React from 'react';
import {AiOutlineArrowUp} from "react-icons/ai"
import styled from "styled-components";
import {Link as LinkS} from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

const Container = styled.div`

`
const Button = styled.button`
position: fixed;
bottom: 30px;
right: 30px;
width: 50px;
height: 50px;
 border:3px solid #303D57 ;
 margin-top: 10px;
 font-size: 30px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: transparent;
 transition: background-color .3s ease-in;
cursor: pointer;

&:hover{
  background-color:rgba(54, 112, 85,0.4);
}
`
export const NavLinks =styled(LinkS)`

 display:flex;
 align-items: center;
 text-decoration:none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 user-select: none;

`


const TopButton = () => {
    const [Top,setTop] = useState(true);

    useEffect(()=>{
     window.addEventListener("scroll",()=>{
        if(window.scrollY>600){
               setTop(true);
        }else{
              setTop(false);
        }
     })
    },[])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

  return (
  <Container>
  {
    Top && 
    <NavLinks to="home" onClick={toggleHome}>
    <Button><AiOutlineArrowUp/></Button>
        </NavLinks>
    
  }
    
  </Container>
  )
}

export default TopButton
