import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
  {/* Work
----------------------------------------------- */}
  <div className="row work">
    <div className="three columns header-col">
      <h1><span>Work</span></h1>
    </div>
    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>MakeMeHealthy Project</h3>
          <p className="info">Class Project <span>•</span> <em className="date">June 2019 – July 2019</em></p>
          <p>
          •	Developed an app using Python and Django utilizing recommender system to gather user’s information and recommend new recipes based on their taste and ingredients of their choosing.
          •	Implemented an algorithm to find ingredients that are relevant to the user in order to optimize the quality of the app.

          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Meal Share Capstone</h3>
          <p className="info">Class project <span>•</span> <em className="date">February 2019 – May 2019</em></p>
          <p>
            •	Developed an app used to connect businesses such as grocery stores with food care centers in order to reduce food waste in the U.S. (Frameworks: Node.js & Express.js).
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>Shoe Store</h3>
          <p className="info">Class project <span>•</span> <em className="date">July 2018 – December 2018</em></p>
          <p>
          •	Produced a shopping website to buy and exchange items. Also, implemented a store cart system that manages purchases that are not occurring between users. (Node.js/Express.js/MongoDB).
          </p>
        </div>
      </div> {/* item end */}
      <div className="row item">
        <div className="twelve columns">
          <h3>My Charlotte App</h3>
          <p className="info">Class project <span>•</span> <em className="date">February 2018 – May 2018</em></p>
          <p>
          •	Assisted a team in redesigning the MyCharlotte app, incorporating user experience design techniques.
          •	Implemented wireframes with user stories for the MyCharlotte app project.
          •	Collected data by surveying people in the downtown Charlotte area.
          •	Competed against 10+ teams and judged by representatives of the city of Charlotte at the end of the project.

          </p>

        </div>
      </div> {/* item end */}
    </div> {/* main-col end */}
  </div> {/* End Work */}
  {/* Skills
----------------------------------------------- */}
  <div className="row skill">
    <div className="three columns header-col">
      <h1><span>Skills</span></h1>
    </div>
    <div className="nine columns main-col">
      <p>
      List of My Skills:
      </p>
      <div className="bars">
        <ul className="skills">
          <li><span className="bar-expand photoshop" /><em>React.js</em></li>
          <li><span className="bar-expand jquery" /><em>Babel</em></li>
          <li><span className="bar-expand html5" /><em>Node.js</em></li>
          <li><span className="bar-expand photoshop" /><em>Express.js</em></li>
          <li><span className="bar-expand jquery" /><em>JavaScript</em></li>
          <li><span className="bar-expand illustrator" /><em>Django.js</em></li>
          <li><span className="bar-expand html5" /><em>Java</em></li>
          <li><span className="bar-expand wordpress" /><em>Python</em></li>
          <li><span className="bar-expand photoshop" /><em>SQL/NoSQL</em></li>
          <li><span className="bar-expand css" /><em>CSS</em></li>
          <li><span className="bar-expand html5" /><em>HTML5</em></li>
          <li><span className="bar-expand jquery" /><em>jQuery</em></li>
          <li><span className="bar-expand html5" /><em>Linux</em></li>
          <li><span className="bar-expand photoshop" /><em>UI/UX design</em></li>
          <li><span className="bar-expand lang" /><em>French</em></li>
          <li><span className="bar-expand lang" /><em>English</em></li>
          <li><span className="bar-expand lang" /><em>Spanish</em></li>
        </ul>
      </div>{/* end skill-bars */}
    </div> {/* main-col end */}
  </div> {/* End skills */}
  {/* Resume Section End*/}
  {/* Portfolio Section
   ================================================== */}
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>
        {/* portfolio-wrapper */}
        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title>
                <img alt="" src="images/portfolio/MakeMeHealthy" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>MakeMeHealthy App</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title>
                <img alt="" src="images/portfolio/MealShare" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Meal Share App</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title>
                <img alt="" src="images/portfolio/ShoeStore" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>ShoeStore App</h5>
                    <p>Web Development</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}

        </div> {/* portfolio-wrapper end */}
      </div> {/* twelve columns end */}
      {/* Modal Popup
	      --------------------------------------------------------------- */}
      <div id="modal-01" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />
        <div className="description-box">
          <h4>Coffee Cup</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-01 End */}
      <div id="modal-02" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
        <div className="description-box">
          <h4>Console</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Web Development</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-02 End */}
      <div id="modal-03" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
        <div className="description-box">
          <h4>Judah</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-03 End */}
      <div id="modal-04" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />
        <div className="description-box">
          <h4>Into the Light</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Photography</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-04 End */}
      <div id="modal-05" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />
        <div className="description-box">
          <h4>Farmer Boy</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Webdesign</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-05 End */}
      <div id="modal-06" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />
        <div className="description-box">
          <h4>Girl</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Photography</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-06 End */}
      <div id="modal-07" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />
        <div className="description-box">
          <h4>Origami</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Branding, Illustration</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-07 End */}
      <div id="modal-08" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />
        <div className="description-box">
          <h4>Retrocam</h4>
          <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
          <span className="categories"><i className="fa fa-tag" />Webdesign, Photography</span>
        </div>
        <div className="link-box">
          <a href="http://www.behance.net">Details</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-01 End */}
    </div> {/* row End */}
  </section> {/* Portfolio Section End*/}
</div>


      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}
