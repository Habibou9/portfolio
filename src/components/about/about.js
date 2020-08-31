import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
  <div className="row">
    <div className="three columns">
      <img className="profile-pic" src="images/profilepic.jpg" alt="" />
    </div>
    <div className="nine columns main-col">
      <h2>About Me</h2>
      <p>Goal-oriented Software Developer with strong commitment to collaboration and solutions-oriented problem-solving.
       Use various web design software to develop customer-focused websites and designs.
       Committed to high standards of web design, user experience, usability and speed for multiple types of end-users.
       Successful at maintaining customer satisfaction through effective customer support.
      </p>
      <div className="row">
        <div className="columns contact-details">
          <h2>Contact Details</h2>
          <p className="address">
            <span>Habibou Maizoumbou Dan Aouta</span><br />
            <span>3140 Patrick Henry dr Nw<br />
            Concord, NC 28027 US
            </span><br />
            <span>(336)427-6209</span><br />
            <span>danaoutah@yahoo.com</span>
          </p>
        </div>
        <div className="columns download">
          <p>
            <a href="https://drive.google.com/file/d/1luphSDBKDwA3OLOnHWn5MQMUxThrz5-4/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
          </p>
        </div>
      </div> {/* end row */}
    </div> {/* end .main-col */}
  </div>
</section> {/* About Section End*/}


      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}
