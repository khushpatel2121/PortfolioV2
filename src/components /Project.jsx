import React from 'react';
import styled from "styled-components";
import {VscGithub} from "react-icons/vsc";
import {Link } from "react-router-dom"


const Container = styled.div`
height: 200px;
width: 300px;
border:3px solid #303D57 ;
box-shadow: 3px 3px 3px 3px rgba(54, 112, 85,0.4);
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px 20px;
transition:transform 0.2s ease ;

&:hover{
    transform: scale(1.3);
   
  
}

@media screen and (max-width:784px) {
  height: 200px;
width: 300px; 

&:hover{
    transform: scale(1);
   
  
}

}
`
const Title = styled.div`
font-family: 'Roboto Slab', serif;
color: #367055;
font-size: 20px;




`
const Desc = styled.div`
font-family: 'Roboto', sans-serif;
color: #303D57;

@media screen and (max-width:784px) {
font-size: 14px;

}
`
const Skills = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
`
const Span = styled.span`
font-size: 14px;
color:  #737270;
`
const REP = styled.div`
display: flex;
gap: 10px;
`
const HUb = styled.div`
color: #303D57;
font-size: 20px;
cursor: pointer;

&:hover{
   color: #367055;
}
`

const Project = ({item}) => {
  return (
   <Container>
      <Title>
      {item.title}
      </Title>
      <Desc>
     {item.desc}
      </Desc>
      <Skills>
      <REP>

        <Span>
        {item.skill1}
        </Span>
        <Span>
        {item.skill2}
        </Span>
        <Span>
        {item.skill3}
        </Span>
        <Span>
        {item.skill4}
        </Span>
      </REP>
      <Link to={`${item.link}`} target='blank'>

      <HUb>

        <VscGithub/>
      </HUb>
      </Link>
      </Skills>
   </Container>
  )
}

export default Project
