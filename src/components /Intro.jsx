import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide"
import Zoom from "react-reveal/Zoom"

const Container = styled.div`
background-color: transparent;
padding-bottom:200px ;
display: flex;
justify-content: center;

`
const Wrapper = styled.div`


width: 70%;
display: flex;
`
const Details = styled.div`
display: flex;
flex-direction: column;
padding-top: 200px;


@media screen and (max-width:530px) {
  padding-top: 100px;
}

`
const Greet = styled.h6`
font-family: 'Roboto Slab', serif;
color: #367055;
font-size: 20px;

@media screen and (max-width:530px) {
 font-size: 15px;
}


`
const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 900;
font-size: 100px;
color: #303D57;

@media screen and (max-width:530px) {
  font-size: 65px;
}
`
const Desc = styled.h2`
font-size: 28px;
font-family: 'Roboto', sans-serif;
font-weight: 900;
margin-top: 8px;
color: #303D57;

@media screen and (max-width:530px) {
  font-size: 20px;
}
`
const Desc2 = styled.h4`
font-size: 14px;
width: 80%;
color: rgba(48, 61, 87,0.5);
font-family: 'Roboto Slab', serif;
margin-top: 8px;

@media screen and (max-width:480){
  font-size: 10px;
}
`
const Span =styled.span`
font-size: 14px;
font-size: 10px;
font-family: 'Roboto Slab', serif;
`
const Button = styled.button`
background-color: transparent;
font-size: 23px;
border: 3px solid #303D57;
padding:10px;
transition: background-color .3s ease-in;
cursor: pointer;
width: 40%;
margin-top:30px ;
color: #303D57;
&:hover{
  background-color:rgba(54, 112, 85,0.5);
}
@media screen and (max-width:530px) {
  font-size: 17px;
}
`

const Intro = () => {
  return (
   <Container id="home">
<Wrapper>
    <Details>
    <Fade right>

      <Greet>
       Hi,Everyone I'm
      </Greet>
    </Fade>
      <Zoom left>

      <Title>
    KHUSH PATEL.
      </Title>
      </Zoom>
      <Fade left>

      <Desc>
     I am a Web Developer. 
      </Desc>
      </Fade>
      <Fade right>

      <Desc2>
      As a MERN stack developer, I specialize in building web applications using a combination of four powerful technologies: MongoDB, Express.js, React.js, and Node.js. 
      </Desc2>
      </Fade>
      <Slide bottom>

      <Button>
       Buy me a Drink🍺
      </Button>
      </Slide>
    </Details>
</Wrapper>
   </Container>
  )
}

export default Intro
