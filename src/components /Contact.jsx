import React from 'react';
import styled from "styled-components";
import { useForm , ValidationError} from '@formspree/react';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 50px;
font-family: 'Fjalla One', sans-serif;
position: relative;

`
const Wrapper  = styled.div`
width: 70%;
justify-content: center;
display: flex;
flex-direction: column;
`
const Title = styled.h1`
font-family: 'RoBoto', sans-serif;
color: #303D57;
font-weight: 900;
font-size: 50px;
margin-top:40px;
margin-bottom: 10px;
`
const Form  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
margin-top:40px ;
`
const Input = styled.input`
background-color: transparent;
border: 3px solid #303D57 ;
width: 40%;
padding: 10px;
outline: none;

@media screen and (max-width:784px) {
  width: 80%;
}
`
const Textbox = styled.textarea`
background-color: transparent;
border: 3px solid #303D57 ;
width: 40%;
padding: 10px;
outline: none;
height: 200px;
@media screen and (max-width:784px) {
  width: 80%;
}
`
const Button = styled.button`
background-color: transparent;
font-size: 23px;
border: 3px solid #303D57;
padding:10px;
transition: background-color .3s ease-in;
cursor: pointer;
width: 20%;

color: #303D57;
&:hover{
  background-color:rgba(54, 112, 85,0.5);
}

@media screen and (max-width:784px) {
  width: 60%;
}
`


const Contact = () => {
 
  const [state, handleSubmit] = useForm('mayzlkkr');
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <Container id="contact">
      <Title>
            Contact Me.
          </Title>
        <Wrapper>
        
          <Form onSubmit={handleSubmit} method='post' >
            <Input 
            type='text'
            placeholder='Name' 
               required
               id="name"
              name="name"
            />
                <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
            <Input placeholder='Email' 
            autoComplete='off' 
            id="email" type="email" name="email" required
            />
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <Textbox placeholder='Job Description...'
               id="description" type="description" name="description" required

            />
                <ValidationError 
        prefix="description" 
        field="description"
        errors={state.errors}
      />
            <Button type='submit' disabled={state.submitting}>
       SUBMIT
      </Button>
          </Form>
       
        </Wrapper>
       
    </Container>
  )
}

export default Contact
