import React, { useState } from "react";
import styled from "styled-components";

function Contact(){
const [isDone, setIsDone] = useState(false)
const [isFilled, setIsFilled] = useState(false)
const [messageInputs, setMessageInputs] = useState({
    firstName : '',
    lastName : '',
    email : '',
    message : ''
})

function handleInputChanges(event){
const {name, value} = event.target;

setMessageInputs((prevInputs) =>{ return{...prevInputs, [name]: value}})

if(messageInputs.firstName !== '' || messageInputs.lastName !== '' || messageInputs.email !== '' || messageInputs.message !== ''){
    
    setIsFilled(false)
    }

}

function handleSubmit(event){
event.preventDefault();

if(messageInputs.firstName === '' || messageInputs.lastName === '' || messageInputs.email === '' || messageInputs.message === ''){
setIsDone(false)
setIsFilled(true)
} else {
setIsDone(true)
setIsFilled(false)
setMessageInputs({
    firstName : '',
    lastName : '',
    email : '',
    message : ''
})
}

}


    return(
        <ContactMain>
        <form>
        <ContactP>
        {isDone ? <h1 style={{fontSize: '20px', paddingLeft: '20px'}}>Thank your for Contacting me!</h1> : <h1 style={{fontSize: '20px', paddingLeft: '20px'}}>Contact me</h1>}
            <FInputs>
                <InputsDiv>
                    <lebel className='lebel'>First Name</lebel>
                    <p style={{display: isFilled ? 'block' : 'none', fontSize: '12px', color: 'red', margin: '0', padding: '0', paddingLeft: '20px'}}> please fill up all inputs</p>
                    <input className='inputs' type='text' onChange={handleInputChanges} placeholder="First Name" name='firstName' value={messageInputs.firstName}/>
                </InputsDiv>
                <InputsDiv>
                    <lebel className='lebel'>Last Name</lebel>
                    <p style={{display: isFilled ? 'block' : 'none', fontSize: '12px', color: 'red', margin: '0', padding: '0', paddingLeft: '20px'}}>please fill up all inputs</p>
                    <input className='inputs' type='text' onChange={handleInputChanges} placeholder="Last Name" name='lastName' value={messageInputs.lastName}/>
                </InputsDiv>
            </FInputs>
            <InputsDiv>
                    <lebel className='lebel'>Email</lebel>
                    <p style={{display: isFilled ? 'block' : 'none', fontSize: '12px', color: 'red', margin: '0', padding: '0', paddingLeft: '20px'}}>please fill up all inputs</p>
                    <input className='inputs-email' type='text' onChange={handleInputChanges} placeholder="Email" name='email' value={messageInputs.email}/>
            </InputsDiv>
            <InputsDiv>
                    <lebel className='lebel'>Message</lebel>
                    <p style={{display: isFilled ? 'block' : 'none', fontSize: '12px', color: 'red', margin: '0', padding: '0', paddingLeft: '20px'}}>please fill up all inputs</p>
                    <textarea className='inputs-m' type='text' onChange={handleInputChanges} placeholder="Message" rows='5' name='message' value={messageInputs.message}/>
            </InputsDiv>
            <button onClick={handleSubmit} className='send-button'>Send</button>
        </ContactP>
        </form>
        </ContactMain>
    );
}

export default Contact;


const ContactMain = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #212121;
margin-top: 60px;
color: #F2F2F2;
padding: 10px;
`
const ContactP = styled.div`
margin-top: 60px;
padding-top: 20px;
height: 100vh;
`
const InputsDiv = styled.div`
display: flex;
flex-direction: column;
`
const FInputs = styled.div`
display: flex;

`

