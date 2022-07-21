import React, {useState} from 'react';
import styled from 'styled-components';
import {GoMarkGithub} from 'react-icons/go';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import abdul from './abdul.png';



function Main(){

    const currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currentTime);

    function theTime(){
    const setTheTime = new Date().toLocaleTimeString();

    setTime(setTheTime);
    }

setInterval(theTime, 1000);
    
    return(
        <MainOga>
        
        <MainP>
        <Div>
        <Time>{time}</Time>
        <MainH>
        
            I'm Abdul
        </MainH>
        <MainH>
            a Software Engineer!
        </MainH>
        <MainPara>
            WANT TO CONNECT?... CONTACT ME!
        </MainPara>
        <GitH> <Ref href='https://www.github.com/abdulfrfr/'><GoMarkGithub/></Ref> </GitH>
        <GitH> <Ref href='https://www.twitter.com/abdulfrfr/'><AiFillTwitterCircle/></Ref> </GitH>
        <GitH> <Ref href='https://www.linkedin.com/in/abdulfrfr/'><BsLinkedin/></Ref>  </GitH>
        </Div>
        <Div>
        
        <Img>
        <img className='my-img' alt='mine' src={abdul}/>
        </Img>
        
        </Div>
            
       
        </MainP>
        
        </MainOga>
    );
}

export default Main;
const MainOga = styled.div`
height: 100vh;
padding: 0;
margin: 0;
background-color:#F4DFBA;
font-family: 'Montserrat', sans-serif;
`
const Time = styled.div`
font-weight: 700;

@media screen and (max-width: 768px){
   
}

@media screen and (min-width: 768px){
   
}
`
const MainP = styled.div`
margin-top: 60px;

padding-left: 40px;
padding-right: 40px;
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 768px){
    padding-top: 20px;
    height: 100vh;
    margin: 0;
    flex-direction: column-reverse;
    justify-content: center;
    align-items:center;
    padding: 0;

}
`


const MainH = styled.h1`
font-family: 'Kalam', cursive;
font-size: 75px;
line-height: 0.5;

@media screen and (max-width: 768px){
    font-size: 40px;
    font-family: 'PT Sans', sans-serif;
}
`

const Div = styled.div`
padding-top: 0;
margin-top: 0;
`

const MainPara = styled.p`
font-family: 'Alegreya Sans SC', sans-serif;
font-size: 25px;

@media screen and (max-width: 768px){
    font-size: 15px;
    font-family: 'Alegreya Sans SC', sans-serif;
    color: blue;
}

`

const GitH = styled.a`
font-size: 30px;
padding-left: 30px;


`

const Ref = styled.a`
color: black;
`


const Img = styled.div`
@media screen and (min-width: 768px){
    
   
}
`

