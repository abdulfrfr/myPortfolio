import React from 'react';
import styled from 'styled-components';
import note from './note.PNG'
import todo from './todo.PNG'
import calc from './calc.PNG'


function Portfolio(){
    return(
        <PortfolioP>
        <PortfolioH>Projects I Worked on</PortfolioH>
        <Projects>
            <Project>

            <img className='port-img' src={note} alt='img' />
            <lebel>Note App</lebel>
            <a className='proj-link' href='https://pro-note-app.vercel.app/'>Visit App</a>
            <a className='proj-link' href='https://github.com/abdulfrfr/pro-note-app'>Visit Repro</a>
            
            </Project>
            <Project>

            <img className='port-img' src={todo} alt='img' />
            <lebel>To-Do List App</lebel>
            <a className='proj-link' href='https://to-do-list-app-liart.vercel.app/'>Visit App</a>
            <a className='proj-link' href='https://github.com/abdulfrfr/toDoList-App'>Visit Repro</a>
            
            </Project>
            <Project>

            <img className='port-img' src={calc} alt='img' />
            <lebel>Calculator App</lebel>
            <a className='proj-link' href='https://calculator-rust-gamma.vercel.app/'>Visit App</a>
            <a className='proj-link' href='https://github.com/abdulfrfr/calculator-app'>Visit Repro</a>
            
            </Project>
        </Projects>

        <Explanatory>
            <p>These are wep apps i have made using some common techmologies HTML5, CSS3, JavaScript, and ReactJs. These are not 
            very good projects but they have taught me some good lessons which would be really handy in the nearest future. 
            I have used some good react methods like the router, hooks, styled components, react icons and some very good technical 
            problems</p>

            <h1>PLEASE CHECK BACK FOR MORE PROJECTS. I AM COOKING SOME COOL STUFF!!!</h1>
        </Explanatory>
        

        </PortfolioP>
    );
}

export default Portfolio;

const PortfolioP = styled.div`
font-family: 'Encode Sans', sans-serif;
margin-top: 60px;
padding-top: 20px;
background-color: #212121;
color: #AAA492;
padding: 10px 40px 10px 40px;
`
const PortfolioH = styled.h1`
font-family: 'Sora', sans-serif;
font-size: 30px;

@media screen and (max-width: 768px){
    border-bottom: 1px solid #AAA492;
    
}
@media screen and (min-width: 768px){
    
}

`

const Projects = styled.div`
display: flex;
justify-content: space-around;
text-align: center;

@media screen and (max-width: 768px){
    flex-direction: column;
    text-align: center;
    align-items: center;
}

`
const Project = styled.div`
display: flex;
flex-direction: column;
`
const Explanatory = styled.div`
padding: 30px;
`