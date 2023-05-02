import React from 'react';
import styled from "styled-components";
import {AiOutlineInstagram, AiOutlineLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai";
import {Link} from "react-router-dom"

const Container = styled.div`
 @media screen and (max-width:944px) {
  display: none;}
`

const BottomLeft = styled.div`
display: flex;
flex-direction: column;
height: auto;
align-items: center;

height: 42vh;
position: fixed;
bottom: 0;
right: 100px;
`
const Text = styled.h6`
writing-mode: vertical-rl;text-orientation: mixed;
font-family: 'Fjalla One', sans-serif;
letter-spacing: 3px;
transition: color 0.2s ease;
cursor: pointer;

&:hover{
 
  color:#367055 ;
}
`

const Items=styled.div`
font-size: 35px;
padding: 5px;
transition: transform .1s ease;
color:#303D57;

&:hover {
  transform: scale(1.2)};
  
`
const HItems = styled.div`
display: flex;
flex-direction: column;


`

const Vertical = styled.div`
border-left: 4px solid #303D57;
height: 100px;
width: 4px;
position: fixed;
bottom: 0;
`

const BottomRight = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
position: fixed;
bottom: 0;
left: 80px;
height: 43vh;
`


const Lines = () => {
  return (
    <Container>
      <BottomLeft>
     <Text>
      KHUSHPATEL2121@GMAIL.COM
     </Text>
      <Vertical>
      
      </Vertical>
     </BottomLeft>
     <BottomRight>
     <HItems>
     <Link to="/instagram-is-bullShit">

     <Items>
        <AiOutlineInstagram/>
        </Items>
     </Link>
     <Link to="https://github.com/khushpatel2121" target="_blank">

        <Items>
        <AiOutlineGithub/>
        </Items>
     </Link>
     <Link to="https://www.linkedin.com/in/khush-patel-986250270/" target="_blank"
>

        <Items>
        <AiFillLinkedin/>
        </Items>
     </Link>
     <Link to="https://twitter.com/Khush6547" target="_blank">

        <Items>
        <AiFillTwitterCircle/>
        </Items>
     </Link>
      </HItems>
     <Vertical>
     </Vertical>
     </BottomRight>
     </Container>
  )
}

export default Lines
