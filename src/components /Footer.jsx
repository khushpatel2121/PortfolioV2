import React from 'react';
import styled from "styled-components";
import {AiOutlineCopyright} from "react-icons/ai"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
margin-top: 50px;
width: 20%;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
font-size: 20px;
font-weight: 900;
font-family: 'Fjalla One', sans-serif;
color:#737270;

@media screen and (max-width:784px) {
  width: 60%;
}
`

const Footer = () => {
    const dates = new Date().getFullYear();
  return (
   <Container>
     <Wrapper>
     <AiOutlineCopyright/>KHUSH PATEL  {dates}
     </Wrapper>
   </Container>
  )
}

export default Footer
