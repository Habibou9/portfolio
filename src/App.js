import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/Resume/resume';
import Portfolio from './components/Work/work';
import Testimonials from  './components/testimonials/testimonials';
import ContactUs from './components/contact/contact';
import Footer from './components/footer/footer';

import myResumeData from './myResumeData';


function App() {
  return (
    <div className="App">
        <Header resumeData={myResumeData}/>
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
  );
}

export default App;
