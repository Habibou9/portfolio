import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let myResumeData = this.props.myResumeData;
    return (
      <React.Fragment>
      <header id="home">
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
      <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#resume">Resume</a></li>
        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
        <li><a className="smoothscroll" href="#contact">Contact</a></li>
      </ul> {/* end #nav */}
    </nav> {/* end #nav-wrap */}
    <div className="row banner">
      <div className="banner-text">
        <h1 className="responsive-headline">I'm Habibou Maizoumbou Dan Aouta.</h1>
        <h3>I'm a Charlotte,NC based <span>Developper</span>, <span>UI/UX designer</span> and <span>Security Engineer(CyberSecurity) </span>. I  Use various web design software to develop customer-focused websites and designs.
        Committed to high standards of web design, user experience, usability and speed for multiple types of end-users.
        Successful at maintaining customer satisfaction through effective customer support.  Let's <a className="smoothscroll" href="#about">start scrolling</a>
          and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
        <hr />
        <ul className="social">
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          <li><a href="#"><i className="fa fa-instagram" /></a></li>
          <li><a href="#"><i className="fa fa-dribbble" /></a></li>
          <li><a href="#"><i className="fa fa-skype" /></a></li>
        </ul>
      </div>
    </div>
    <p className="scrolldown">
      <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
    </p>
  </header> {/* Header End */}


          );
        }
      });
      <header id="home">
        ....
        ....
      </header>
      </React.Fragment>
    );
  }
}
