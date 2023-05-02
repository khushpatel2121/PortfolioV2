import React from 'react';
import styled from "styled-components";
import Project from './Project';
import { projects } from '../pages/data';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 50px;

@media screen and (max-width:999px) {
 padding-bottom: 200px;
}
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 80%;
padding: 40px;
gap: 50px;
`
const Title = styled.h1`
font-family: 'RoBoto', sans-serif;
color: #303D57;
font-weight: 900;
font-size: 50px;
margin-top:40px;
margin-bottom: 10px;
`

const ProjectList = () => {
  return (
<Container id="projects">
<Title>PROJECTS.</Title>
    <Wrapper>
  {
    projects.map((item)=>(
        <Project item={item} key={item.id}/>
    ))
  }
       
     

    </Wrapper>
</Container>
  )
}

export default ProjectList
