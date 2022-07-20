import React from 'react';
import styled from 'styled-components';
import firstimg from './firstimg.PNG';
import secondimg from './secondimg.PNG';
import thirdimg from './thirdimg.PNG'

function PreviewSection (){
    return(
        <div>
            <WholeSection>
            <TheFirstLineDiv>
                        <TheFirstLine></TheFirstLine>
                        <TheCircle></TheCircle>
            </TheFirstLineDiv>
                        
            <CarrierDiv>
                <ImgDiv>
                    <img className='preview-img' alt='firstimg' src={firstimg}/>
                </ImgDiv>
                <TextLineDiv>
                    <Line>
                        <TheSecondLine className = 'Lines'></TheSecondLine>
                        <TheCircle></TheCircle>
                    </Line>
                    <Text>
                        <TextHead>Push to deploy</TextHead>
                        <TextBody>Import the whole repo with one click, then push to Github which 
                        triggers for every code change.</TextBody>
                    </Text>
                </TextLineDiv>
                    
            </CarrierDiv>
            <CarrierDiv>
                <ImgDiv><img className='preview-img' alt='secondimg' src={secondimg}/></ImgDiv>
                <TextLineDiv>
                    <Line>
                        <TheSecondLine className = 'Lines'></TheSecondLine>
                        <TheCircle></TheCircle>
                    </Line>
                    <Text>
                        <TextHead>Share and Collaborate</TextHead>
                        <TextBody>Avoid surprises by iterating with your entire team. 
                        Test from the perspective of your users, on every platform.</TextBody>
                    </Text>
                </TextLineDiv>
                    
            </CarrierDiv>
            <CarrierDiv>
                <ImgDiv><img className='preview-img' alt='thirdimg' src={thirdimg}/></ImgDiv>
                <TextLineDiv>
                    <Line>
                        <TheLine></TheLine>
                        <TheCircle></TheCircle>
                    </Line>
                    <Text>
                        <TextHead>Get your Preview URL</TextHead>
                         <TextBody>Every Git branch and PR receives a live, production-like URL 
                        that everyone on your team can visit.</TextBody> 
                    </Text>
                </TextLineDiv>

            </CarrierDiv>

            </WholeSection>
        </div>
    );
}

export default PreviewSection;

const WholeSection = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin-top: 70px;
padding: 50px;


`
const CarrierDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 768px){
    flex-direction: column-reverse;
}

`


const ImgDiv = styled.div`


`
const TextLineDiv = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px){
    flex-direction: column
}


`
const Line = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 100px;
@media screen and (max-width: 768px){
    padding-left: 0;
}


`
const TheLine = styled.div`
width: 1px;
border: none;
background-color: grey;
height: 425px;

@media screen and (max-width: 768px){
    height: 100px;
}

`
const TheSecondLine = styled.div`
width: 1px;
border: none;
border-left: 1px solid grey;
border-left-styled: dotted;
height: 350px;

@media screen and (max-width: 768px){
    height: 100px;
}

`

const TheFirstLineDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 103px;

@media screen and (max-width: 768px){
    display: none;
}
`


const TheFirstLine = styled.div`
width: 1px;
border: none;
background-color: grey;
height: 80px;


`
const TheCircle = styled.div`
width: 1px;
padding: 4px;
border: 2px solid grey;
border-radius: 50%;

`
const Text = styled.div`
padding-left: 70px;
padding-right: 50px;
@media screen and (max-width: 768px){
    padding-left: 0;
    padding-right: 0;
    text-align: center;
}

`
const TextHead = styled.h3`


`
const TextBody = styled.p`


`
