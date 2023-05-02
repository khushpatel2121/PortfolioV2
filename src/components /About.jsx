import React from 'react';
import styled from "styled-components";
import Profile from "../images/profile.png"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 40px;

@media screen and (max-width:944px) {
  display: flex;
  flex-direction: column;
  

justify-content: center;
}
`
const Wrapper =styled.div`

padding-bottom:100px ;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
margin-top:80px ;
gap: 50px;
@media screen and (max-width:944px) {
  display: flex;
  flex-direction: column;
  width: 70%;
display: flex;
justify-content: center;
}

`
const Hr = styled.hr`
border: 2px solid lightgray;
width: 30%;
`
const Img = styled.img`
height: 300px;
width: 300px;
border-radius: 50%;
margin: 20px 0px;

@media screen and (max-width:944px) {
  height: 200px;
width: 200px;
}
@media screen and (max-width:1080px) {
  height: 200px;
width: 200px;
}
`
const Title = styled.h1`
font-family: 'RoBoto', sans-serif;
color: #303D57;
font-weight: 900;
font-size: 50px;
`
const Desc = styled.p`
margin-top:10px ;
text-align: start;
width: 65%;
font-size: 18px;
width: 600px;
color: rgba(48, 61, 87,0.5);
font-family: 'RoBoto Slab', serif;

@media screen and (max-width:748px) {
  max-width: 30ch;
  margin-top:10px ;
text-align: start;
height: auto;
font-size: 14px;
width: 600px;
color: rgba(48, 61, 87,0.5);
font-family: 'RoBoto Slab', serif;
}

`
const B =styled.span`
font-size: 20px;
padding: 5px;
color: #367055;
font-weight: 900;
@media screen and (max-width:748px) {
  font-size: 18px;
}
`
const Image = styled.div`
display: flex;
justify-content: center;
`
const Details  =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
`

const About = () => {
  return (
   <Container id="about">
    <Title>
             ABOUT ME.
          </Title>
       <Wrapper>
       
         <Image>
         <Img src={Profile} alt='this is not image'/>
         </Image>
       <Details>
       <Desc>
           Hello everyone myself <B>KHUSH PATEL</B> ,
           I am passionate about web Development and new web technologies happening all around us.
          I am currently persuring a Bachlors degree in the field of CSE(AI-ML) 
           from Gujarat Technological University.  
          </Desc>
          <Desc>
          With knowledge of contemporary Back-end and front-end frameworks such as <B>ReactJS</B>,<B>NodeJS</B>,<B>MongoDB</B> and <B>expressJS</B> we can Build robust web-application which can scale at a global level and can benefit everyone.
          
          </Desc>
          <Desc>
          My journey as web-developer started as I entered into my Bachlors degress, the subjects of the first two semesters of engineering were the epitome of Boredom and I couldn't scream so I needed a way out and then I found my joy in web-development.
           So from there I started my journey with <B>HTML</B>,<B>CSS</B>&<B>JAVASCRIPT</B> and climbed way up to becoming a <B>Fullstack MERN</B> developer
          </Desc>
       </Details>
        </Wrapper>
  
   </Container>
   
  )
}

export default About
