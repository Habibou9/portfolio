import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
  {/* Education
----------------------------------------------- */}
  <div className="row education">
    <div className="three columns header-col">
      <h1><span>Education</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of North Carolina At Charlotte </h3>
          <p className="info">Master of Science: Computer Science - Information Security and Privacy <span>•</span> <em className="date">December 2020</em></p>
          <p>
            •	GPA:3.5/4.0
          </p>
          <p>
            •	Honors: Dean's List Fall 2019
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>University of North Carolina At Charlotte</h3>
          <p className="info">Bachelor of Science: Computer Science - Software Engineering <span>•</span> <em className="date">May 2019</em></p>
          <p>
              •	GPA:3.12/4.0
    
          </p>
          <p>

              •	Honors: Dean's List Fall 2018 & Chancellor’s List Spring 2019

          </p>
          <p>
              •	Member of The National Society of Leadership and Success
          </p>
        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Education */}
</section>


      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}
