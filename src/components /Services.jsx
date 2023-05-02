import React from 'react';
import styled from "styled-components";
import WebDevelopment from "../images/undraw_heatmap_uyye.svg";
import Seo from "../images/undraw_search_engines_ij7q.svg"

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
height: 100vh;
width: 70%;
display: flex;
flex-direction: column;
margin-top:40px ;

gap: 40px;

@media screen and (max-width:999px) {
  margin-top:80px ;
 gap: 300px;
}
`
const Top = styled.div`
display: flex;
height: 30vh;
width: 100%;
padding: 20px;
justify-content: center;

@media screen and (max-width:999px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`
const Bottom = styled.div`
display: flex;
height: 20vh;
width: 100%;
@media screen and (max-width:999px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
`
const Title = styled.h1`
margin-top:30px ;
font-family: 'RoBoto', sans-serif;
color: #303D57;
font-weight: 900;
font-size: 50px;


`
const Details = styled.div`
flex: 2;
`
const Image = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:999px) {
  padding: 20px;
}
`
const Desc = styled.div`
font-size: 14px;

color: rgba(48, 61, 87,0.5);
font-family: 'Roboto Slab', serif;
margin-top: 8px;
`
const Dtitle = styled.h2`

font-family: 'Roboto Slab', serif;
color: #367055;
font-size: 30px;
display: flex;
flex-direction: column;
@media screen and (max-width:999px) {
  
padding: 20px;
text-align: center;
font-size: 20px;
}
`
const Img = styled.img`
height: 200px;
width: 400px;

@media screen and (max-width:999px) {
  height: 130px;
width: 200px;
}
`
const Span = styled.span`

`

const Services = () => {
  return (
  <Container id="services">
   <Title>
  SERVICES.
  </Title>
    <Wrapper>
 
      <Top>
      <Details>
        <Dtitle>
         Web-Development
        </Dtitle>
        <Desc>
        Hello! As a web developer, I believe that a strong online presence is crucial for any business or individual who wants to succeed in today's digital age. That's why I specialize in creating high-quality, custom-designed websites that are tailored to meet your specific needs and goals
        </Desc>
      </Details>
      <Image>
        <Img
        src={WebDevelopment}
        />
      </Image>
      </Top>
      <Bottom>
      <Image>
        <Img
            src={Seo}
        />
      </Image>
     <Details>
     <Dtitle>
        Search Engine Optimization<Span>-SEO</Span>
        </Dtitle>
        <Desc>
        Are you looking to increase your online visibility and drive more traffic to your website? Look no further than our top-notch SEO services!
        </Desc>
        <Desc>
        Our team of experienced SEO experts will work tirelessly to optimize your website for search engines, ensuring that you rank higher in search results and attract more potential customers to your business. We'll conduct extensive keyword research, optimize your website's structure and content, and build high-quality backlinks to improve your search engine rankings and increase your organic traffic.
        </Desc>
     </Details>
     </Bottom>
    </Wrapper>
  </Container>
  )
}

export default Services
