import React from 'react';
import styled from 'styled-components';
import { TbBrandHtml5, TbBrandCss3 } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di'




function ProLang (){
    return (
        <ProLangDiv>
            <ProLangHead>WORKS WITH GOOD TECHNOLOGIES</ProLangHead>
            <ProLongIcons>
                <Icon><DiJavascript1/></Icon>
                <Icon><FaReact/></Icon>
                <Icon><TbBrandHtml5/></Icon>
                <Icon><TbBrandCss3/></Icon>
                
            </ProLongIcons>
            <LineDiv>
            <DivLine>
            <Line2></Line2>
            <Line2Circle>2</Line2Circle>
            </DivLine>
            <PreviewText>DEVELOP</PreviewText>
            <PreviewHead>Accelerate with your team</PreviewHead>
            </LineDiv>
            <ParagraphDiv>
                <DivP>Frontend development is not meant to be a solo activity. @abdulfrfr makes and adds collaborative experience with deploy previews for every code change by seamlessly
                integrating with git and Github.</DivP>
            </ParagraphDiv>
        </ProLangDiv>
    );
}


export default ProLang;

const ProLangDiv = styled.div`
margin-top: 50px;
`

const ProLangHead = styled.div`
font-family: monospace;
font-size: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;

@media screen and (max-width: 768px){
    font-size: 20px;

}
`

const ProLongIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`
const Icon = styled.div`
font-size: 40px;
padding: 15px;
`
const LineDiv = styled.div`
`

const DivLine = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Line2 = styled.div`
border: none;
width: 2px;
height: 100px;
margin-top: 50px;
background: rgb(249,6,56);
background: linear-gradient(0deg, rgba(249,6,56,1) 22%, rgba(255,255,255,0) 100%);

`
const Line2Circle = styled.div`
border: none;
border-radius: 50%;
color: white;
text-align: center;
width: 20px;
padding: 10px;
margin-bottom: 10px;
background: rgb(249,6,56);
background: linear-gradient(267deg, rgba(249,6,56,1) 28%, rgba(145,0,255,1) 77%);
`
const PreviewText = styled.h2`
font-size: 40px;
background: rgb(249,6,56);
background: linear-gradient(267deg, rgba(249,6,56,1) 43%, rgba(106,0,255,1) 57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 25px;  
}
`

const PreviewHead = styled.h2`
font-size: 60px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;  
}
`

const ParagraphDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const DivP = styled.p`
text-align: center;
color: grey;
@media screen and (min-width: 768px){
padding-left: 350px;
padding-right: 350px;
}
@media screen and (max-width: 768px){
padding-left: 20px;
padding-right: 20px;
}


`