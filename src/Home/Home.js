import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import ExploreSection from "../ExploreSection/ExploreSection";
import ProLang from '../ProLang/ProLang';
import PreviewSection from "../PreviewSection/PreviewSection";



function Home(){
    const num = 0;
    const [time, setChangeTime] = useState(num);

    const develop = useRef();
    const preview = useRef();
    const ship = useRef();


    const color1 = ['blue', 'black', 'black'];
    const color2 = ['black', 'black' , 'purple'];
    const color3 = ['black', 'tomato','black' ];

   useEffect(()=>{
    develop.current.style.color = color1[time % color1.length];
    develop.current.style.transition = 'all 350ms';
    preview.current.style.color = color2[time % color2.length];
    preview.current.style.transition = 'all 350ms';
    ship.current.style.color = color3[time % color3.length];
    ship.current.style.transition = 'all 350ms';
   },[time]);

   useEffect(()=>{
    setInterval(()=>{
        setChangeTime((element)=> element + 1)
    }, 1000)
   },[])


    return(
        <WholeHome>
        <HomePage>
        <HomeHead >
            <HomeText ref={develop}>DESIGN.</HomeText>
            <HomeText ref={preview}>DEVELOP.</HomeText>
            <HomeText ref={ship}>DEPLOY.</HomeText>
        </HomeHead>

        <Buttons>
            <button className="btn btn1">Start Developing</button>
            <button className="btn btn2">Get a Demo</button>
        </Buttons>

        <HomePara>
        <Hpara>
        @abdulfrfr combines his developer experience 
        with an obsessive focus on end-user performance.
         Using good and advanced technologies  
        enables him to do the best of his work.
        </Hpara>
        </HomePara>
        <ExploreSection/>
        <ProLang/>
        <PreviewSection/>
        </HomePage>
        </WholeHome>

        
    );
}

export default Home;

const WholeHome = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: white;
`

const HomePage = styled.div`
margin-top: 60px;
padding-top: 20px;
padding-bottom: 20px;
background-color: white;


`

const HomeHead = styled.div`
Text-align: center;
margin-top: 90px;
`

const HomeText = styled.h1`
font-size: 120px;
line-height: 0.5;
font-weight: 1000;
font-family: 'Montserrat', sans-serif;


@media screen and (max-width: 768px){
    font-size: 20px;
    font-weight: bolder;

    
  
}
`
const Buttons = styled.div`
display: flex;
justify-content: center;

@media screen and (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    
}
`

const HomePara = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
margin-bottom: 50px;

@media screen and (max-width: 768px){
    
    
    display: flex;
    justify-content: center;
    align-items: center;
}

    
    

`

const Hpara = styled.p`

color: #666;
text-align: center;
margin-top: 40px;
margin-bottom: 40px;
width: 1000px;
font-size: 20px;
line-height: 1.5;

@media screen and (max-width: 768px){
    
    line-height: 1.8;
    font-size: 18px;
    width: auto;
    
}

`