import React from 'react';
import styled from 'styled-components';
import useimg from './useimg.png';

function ExploreSection (){
    return(
        <ExploreSec>
        <Explore>
        <SecH>EXPLORE THE VERTICAL WAY</SecH>
        <LineDiv>
        <DivLine></DivLine>
        <DivNum>1</DivNum>
        </LineDiv>
        <Dev>DESIGN</Dev>
        <DevStart>Starting with the designers</DevStart>


        <ExploreTextDiv>
        <ExploreText1>
            Designers love Figma, the web app which enables them to give a very good UI/UX designers for developers. 
            Ther are other technolies they use to also make their work very efficient, for use cases 
            in web app designs, mobile apps, and and others.
        </ExploreText1>
        <ExploreText2>
        Designers are the best place to start any frontend app. 
        Start by designing with zero configuration to a global edge network. 
        Scale dynamically to millions of pages without breaking a sweat. Designers are great
        </ExploreText2>
        </ExploreTextDiv>
        <Use>

        <UseImg>
        <img className='useimg' alt='img' src={useimg}/>
        </UseImg>
            
            
            <UseSections2>
                <Lists className='first'>
                    <ListsHead>Fast Designs</ListsHead>
                    <ListsParagraph>Reliable live-editing experience for your UI components.</ListsParagraph>
                </Lists>
                <Lists>
                    <ListsHead>Flexible Data Structure</ListsHead>
                    <ListsParagraph>Connect your pages to any data, 
                    headless CMS, very good data structure for effectiveness and efficiency.</ListsParagraph>

                </Lists>
                <Lists>
                    <ListsHead>Edge on Localhost</ListsHead>
                    <ListsParagraph>From caching to Serverless Functions, all our cloud 
                    primitives work perfectly on localhost.</ListsParagraph>
                </Lists>
                
            </UseSections2>
        </Use>
        
        </Explore>
            
        </ExploreSec>
    )
} 

export default ExploreSection;

const ExploreSec = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
padding: auto;
`

const Explore = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`

const SecH = styled.h3`
font-family: monospace;
font-size: 20px;
text-align: center;
`
const DivLine = styled.div`
border: none;
width: 2px;
height: 100px;
margin-top: 50px;
background: rgb(46,176,255);
background: linear-gradient(0deg, rgba(46,176,255,1) 23%, rgba(255,255,255,1) 100%);
`


const DivNum = styled.div`
border: none;
border-radius: 50%;
background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
color: white;
text-align: center;
width: 20px;
padding: 10px;
margin-bottom: 10px;
`

const LineDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Dev = styled.h2`
font-size: 40px;
background: rgb(36,147,214);
background: linear-gradient(87deg, rgba(36,147,214,1) 10%, rgba(0,255,239,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 25px;  
}
`


const DevStart = styled.h2`
font-size: 60px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;  
}
`
const ExploreTextDiv = styled.div`
display: flex;
justify-content: space-around;

flex: 1;
color: grey;

@media screen and (min-width: 768px){
    padding: 0 200px 0 200px;
}

@media screen and (max-width: 768px){
flex-direction: column; 
padding:  0 30px 0 30px
}
`
const ExploreText1 = styled.h3`
font-size: 15px;
font-weight: 200;
line-height: 1.5;


@media screen and (max-width: 768px){
    
}
`

const ExploreText2 = styled.h3`
font-size: 15px;
font-weight: 200;
line-height: 1.5;
margin-bottom: 50px;


@media screen and (max-width: 768px){
    
}
`

const Use = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 768px){
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
}
`



const UseSections2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

@media screen and (min-width: 768px){
   width: 40%;
}

@media screen and (max-width: 768px){
    text-align: center;
}
`

const UseImg = styled.div`
`

const Lists = styled.div`

`

const ListsHead = styled.h1`
font-size: 20px;
font-weight: 800;
`

const ListsParagraph = styled.p`
font-size: 15px;
color: grey;
padding-bottom: 30px;
@media screen and (max-width: 768px){
    line-height: 1.5;
    margin-bottom: 50px;
}
`