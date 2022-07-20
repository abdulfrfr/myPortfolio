import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';



function Slider({hidden, handleClick}){

    return(

        
        <NavB hidden={hidden}>
    
    <LinkB onClick={handleClick} to='/about'><div>About</div></LinkB>
    <LinkB onClick={handleClick} to='/contact'><div>Contact</div></LinkB>
    <LinkB onClick={handleClick} to='/portfolio'><div>Portfolio</div></LinkB>
    <LinkB onClick={handleClick} to='/blog'><div>Blog</div></LinkB>
           
          
        </NavB>

    );
}

export default Slider;

const NavB = styled.div`
background: rgba( 244, 223, 186, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 3px );
-webkit-backdrop-filter: blur( 3px );

text-align: center;
height: 100vh;
position: fixed;
width: 100%;
top: 60px;


 display : ${({hidden})=>(hidden?'block':'none')};
 opacity : ${({hidden})=>(hidden?'100':'0')};

 transition: 400ms ease-in;
 left: ${({hidden})=>(hidden?'0':'-100%')};


`

const LinkB = styled(NavLink)`
text-decoration: none;
color: Black;
font-size: 20px;
margin: 20px;
`