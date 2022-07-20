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
padding-top: 20px;
background-color: #212121;
color: #AAA492;
padding: 10px 40px 10px 40px;
`

const Head = styled.div``