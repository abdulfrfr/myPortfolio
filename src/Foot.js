import React from "react";
import styled from 'styled-components'

function Foot(){
    const year = new Date().getFullYear();
    return(
        <MainF>
        <Foots> CopyRight © {year}</Foots>
        </MainF>
    );
}

export default Foot;

const MainF = styled.div`
font-size: 15px;
text-align: center;
padding-bottom: 20px;
padding-top: 26px;
background-color: black;
color: #F4DFBA;
`
const Foots = styled.div`
font-size: 15px;
text-align: center;
padding-bottom: 20px;
padding-top: 20px;
background-color: black;
color: #F4DFBA;
`