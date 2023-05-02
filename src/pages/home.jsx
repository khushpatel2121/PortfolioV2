import React from 'react'
import Navbar from '../components /Navbar';
import styled from "styled-components";
import Footer from '../components /Footer';
import Intro from '../components /Intro';
import Lines from '../components /lines';
import About from '../components /About';
import ProjectList from '../components /ProjectList';
import Contact from '../components /Contact';
import Services from "../components /Services"
import TopButton from '../components /TopButton';
import {useState} from "react"
import Sidebar from '../components /sidebar';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #E5E5DB;


`


const Home = () => {

  const [isOpen,setOpen] = useState(false);

const toggle =()=>{
    setOpen(!isOpen);
};

  return (
   <Container >
     <Navbar isOpen={isOpen} toggle={toggle}/>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <TopButton/>
     <Intro/>
     <About/>
     <ProjectList/>
     <Services/>
     <Contact/>
     <Footer/>
     <Lines/>
  </Container>
   
  )
}

export default Home
