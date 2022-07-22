import React from "react";
import styled from "styled-components";


function About(){
    return(
        <TotalAbout>
        <AboutP>
            <Name>ABDULSALAM ABDULRAZAQ</Name> 
           <Contacts>Location: Lagos, Nigeria.</Contacts>
           <Contacts>Tel: +2347025557114</Contacts>
           <Contacts>Email: abdulmails112@gmail.com</Contacts>
        </AboutP>
        <ContactInfo>
        <DivAlign>
            <AboutH> About Me </AboutH>
            <AboutCon>I'm Abdul, I am 20 by age. A Software Engineer from Nigeria. Attended
            the Nigeria Navy Secondary School, Ojo, Lagos. A computer Science student at 
            Usman Danfodio University, Soko State Nigeria.  </AboutCon>
            </DivAlign>
        </ContactInfo>
        <ExperienceInfo>
            <ExperienceH>Experience</ExperienceH>
            <ExperienceDetails>
                I am a self-taught developer with less than 1 year of Experience working with different technolohies
                such as; HTML5, CSS3, JavaScript, ReactJs, Git and GitHub.
            </ExperienceDetails>
        </ExperienceInfo>
        <Hobbies>
            <HobbiesH>Hobbies</HobbiesH>
            <Lists>
                <List>Playing Basketball</List>
                <List>Writig Codes</List>
                <List>Reading Documentations Online</List>
                <List>Swimming</List>
                <List>Sleeping</List>
            </Lists>
        </Hobbies>
        <Ambitions>
        <DivAlign>
            <AmbitionH>Ambition</AmbitionH>
            <Ambition>
                I have always had a strong desire to know what was behind everything my parents use to look at 
                inside their mobile device since i was little, and i grew up with a strong love to computers and i
                 will alwsys want to operate a computer. And that made me to start learning the Javascript Language after 
                 i was done with high school. And my desired Tech firms to work with are the following but not limmited to; 
                 Microsoft Inc, Google Inc, Amazon, Twitter, Meta, JP Morgan... etc.
            </Ambition>

            <Quote>Personal Quote</Quote>
            <Quo>"You've Only failed when you give up"</Quo>
         </DivAlign>
        </Ambitions>
        
        </TotalAbout>
    );
}

export default About;

const TotalAbout = styled.div`
font-family: 'Encode Sans', sans-serif;
margin-top: 60px;
background-color: #212121;
color: #AAA492;
@media screen and (min-width: 768px){
padding: 20px 200px 10px 200px;
}
padding: 10px 20px 10px 20px;


`
const AboutP = styled.div`
@media screen and (min-width: 768px){
    
    margin-bottom: 50px;
}
@media screen and (max-width: 768px){
    
    margin-bottom: 90px;
}
`

const Name = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;

@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
    
}
@media screen and (min-width: 768px){
    
}

`

const Contacts = styled.p`
line-height: 0.5;
font-size: 15px;
padding-buttom: 0;
`
const ContactInfo = styled.div`
text-align: right;
display: flex;
justify-content: end;
@media screen and (max-width: 768px){
    margin-bottom: 90px;
}
@media screen and (min-width: 768px){
    margin-bottom: 50px;
}

`

const AboutH = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;


@media screen and (min-width: 768px){
    
}
@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
}


`
const AboutCon = styled.p`
font-size: 18px;


@media screen and (min-width: 768px){
    
    max-width: 400px;
}


`
const ExperienceInfo = styled.div`
font-size: 18px;


@media screen and (min-width: 768px){
    
    margin-bottom: 50px;
    
}
@media screen and (max-width: 768px){
    margin-bottom: 90px;
}
`
const ExperienceH = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;

@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
    
}
@media screen and (min-width: 768px){
    
}

`
const ExperienceDetails = styled.p`
font-size: 18px;


@media screen and (min-width: 768px){
    max-width: 400px;
}

`

const Hobbies = styled.div`

@media screen and (max-width: 768px){
    margin-bottom: 90px;
}
@media screen and (min-width: 768px){
    margin-bottom: 90px;
    
    
}
`

const HobbiesH = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;

@media screen and (min-width: 768px){
    
}
@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
}
`
const Lists = styled.ul`
font-size: 18px;


@media screen and (min-width: 768px){
    max-width: 400px;
}
@media screen and (max-width: 768px){
    text-align: left;
}
`
const List = styled.li`
`

const Ambitions = styled.div`
text-align: right;
display: flex;
justify-content: end;
@media screen and (max-width: 768px){
    margin-bottom: 90px;
}
@media screen and (min-width: 768px){
    margin-bottom: 50px;
}
`
const AmbitionH = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;

@media screen and (min-width: 768px){
    
}
@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
}
`

const Ambition = styled.p`
font-size: 18px;
margin-bottom: 30px;


@media screen and (min-width: 768px){
    
    max-width: 660px;
}

`

const Quote = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;

@media screen and (min-width: 768px){
    
}
@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
}
`

const Quo = styled.p`
font-size: 30px;
font-family: 'La Belle Aurore', cursive;
margin-bottom: 30px;


@media screen and (min-width: 768px){
    
    max-width: 660px;
}
`

const DivAlign = styled.div`

`
