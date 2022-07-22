import React from 'react';
import styled from 'styled-components';

function Blog(){
    return(
        <BlogP>
            <Head>
            <h1>Read Some Tech Related Articles Here.</h1>
            </Head>
            <Head>
            <h1>Read Some Tech Related Articles Here.</h1>
            </Head>
            <Head>
            <h1>Read Some Tech Related Articles Here.</h1>
            </Head>
            <Head>
            <h1>Read Some Tech Related Articles Here.</h1>
            </Head>
        </BlogP>
    );
}

export default Blog;

const BlogP = styled.div`
font-family: 'Encode Sans', sans-serif;
margin-top: 60px;
background-color: #212121;
color: #AAA492;
padding: 20px 20px 10px 20px;

@media screen and (min-width:768px){
height: 100vh;
}
`

const Head = styled.div``
