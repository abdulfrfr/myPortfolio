import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';


function Header({hidden, handleClick, handleTrue}) {
    return(
 <NavContainer>
 <LinkA onClick = {handleTrue} to="/"><Logo>@abdulfrfr</Logo></LinkA>
<Nav>
    <LinkA to="/home"><NavI>Home</NavI></LinkA>
    <LinkA to="/about"><NavI>About</NavI></LinkA>
    <LinkA to="/contact"><NavI>Contact</NavI></LinkA>
</Nav>
<Nav>
    <LinkA to="/portfolio"><Portfolio>Portfolio</Portfolio></LinkA>
    <LinkA to="/blog"><Blog>Blog</Blog></LinkA>
</Nav>
{ hidden? <Menu onClick = {handleClick}> <AiOutlineClose /> </Menu> : <Menu onClick = {handleClick}> <BiMenuAltRight /> </Menu> }
</NavContainer>
    )
}
export default Header;
const LinkA = styled(NavLink)`
text-decoration: none;

&.active{
    color: white;
}


`
const NavContainer = styled.div`
background: rgba( 135, 100, 69, 0.15 );
display: flex;
justify-content: space-around;
align-items: center;
height: 60px;
border-bottom: 2px solid black;
position: fixed;
top: 0;
width: 100%;


@media screen and (max-width: 768px){
    justify-content: space-between; 
}

`

const Logo = styled.div`
color: black;
font-family: 'Poppins', sans-serif;
@media screen and (max-width: 768px){
    color: black;
    font-family: 'Poppins', sans-serif;
    margin-left: 20px;
}
`

const Nav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;


@media screen and (max-width: 768px){
    display: none;
}
`

const NavI = styled.a`
text-decoration: none;
color: black;
margin-left: 40px;
margin-right: 40px;

:hover{
  color: white;
  border-bottom: 2px solid black; 
}


`
const Portfolio = styled.a`
margin-right: 40px;
color: Black;
padding: 5px 20px 5px 20px;
border: 2px solid black;
border-radius: 20px;

:hover{
    background-color: black;
    color: white;
}
`


const Blog = styled.a`
margin-left: 40px;
color: Black;

:hover{
  color: white;
  border-bottom: 2px solid black; 
}

`

const Menu = styled.div`
:hover{
    color: white;
}

&.active{
    color: white;
}
font-size: 30px;
cursor: pointer;
@media screen and (min-width: 768px){
display: none;
}
@media screen and (max-width: 768px){
    margin-right: 20px;
}

`