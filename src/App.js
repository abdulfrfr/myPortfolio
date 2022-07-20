import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Both from './Header/Both';
import About from './About/About'
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Main from './Main/Main';
import Foot from './Foot'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Both/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='portfolio' element={<Portfolio/>} />
        <Route path='blog' element={<Blog/>} />
      </Routes>
      <Foot/>
    </BrowserRouter>
    </div>

  );
}

export default App;

