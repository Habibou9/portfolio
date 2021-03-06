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
          <h3>H3 UI/UX design</h3>
          <p className="info">Company Website design <span>•</span> <em className="date">August 2019 – December 2019</em></p>
          <p>
            •	This website design purpose is to help students and under represented communities finding Jobs. Students, Employers and recruiters have the ability to sign up and look for jobs or talents.
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
          <li><span className="bar-expand jquery" /><em>Spanish</em></li>
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
                <img alt="" src="images/portfolio/MakeMeHealthy.png" />
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
                <img alt="" src="images/portfolio/MealShare.png" />
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
              <a href="#modal-02" title>
                <img alt="" src="images/portfolio/H3.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>H3 UI/UX design</h5>
                    <p>Website Design</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div> {/* item end */}
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-03" title>
                <img alt="" src="images/portfolio/MycharlotteApp.png" />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>My Charlotte App</h5>
                    <p>Mobile App Development</p>
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
        <img className="scale-with-grid" src="images/portfolio/MakeMeHealthy.png" alt="" />
        <div className="description-box">
          <h4>MakeMeHealthy App</h4>
          <p>The MakeMeHealthy app goal is to help users try new recipes.
          Therefore a new user will be asked a few questions such as taste and favorite ingredients so the app can pick specific recipes depending on the user taste.</p>
          <span className="categories"><i className="fa fa-tag" />Web app</span>
        </div>
        <div className="link-box">
          <a href="https://github.com/malcolmrjones/PiqueRecipe.git">Github</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-01 End */}
      <div id="modal-04" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/MealShare.png" alt="" />
        <div className="description-box">
          <h4>MealShare</h4>
          <p>This app Goal is to help People in need of Food to get Connected with Kitchen Soup, Grocerie Stores, Restaurents and Fast Foods.
          Also, this app purpose is to help reduce food waste as well.
          </p>
          <span className="categories"><i className="fa fa-tag" />Web Development</span>
        </div>
        <div className="link-box">
          <a href="https://cloud.indigo.design/share/run/hgzf1qpqw2gq#f=homepage">Prototype</a>
          <a className="popup-modal-dismiss" href="https://github.com/marsgs/MealShare.git"> Github </a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-02 End */}
      <div id="modal-02" className="popup-modal mfp-hide">{/* modal-02 duplicate for H3 Start */}
        <img className="scale-with-grid" src="images/portfolio/H3.png" alt="" />
        <div className="description-box">
          <h4>H3 UI/UX design</h4>
          <p>This website design purpose is to help students and under represented communities finding Jobs.
          Students, Employers and recruiters have the ability to sign up and look for jobs or talents. H3 stands for
          Humble Hungry Hustle.
          </p>
          <span className="categories"><i className="fa fa-tag" />Web Design</span>
        </div>
        <div className="link-box">
          <a href="https://xd.adobe.com/view/ce223a42-5d9b-4e88-8821-f027ebb3cd70-9b71/">Prototype</a>
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-02 duplicate for H3 End */}
      <div id="modal-03" className="popup-modal mfp-hide">
        <img className="scale-with-grid" src="images/portfolio/MycharlotteApp.png" alt="" />
        <div className="description-box">
          <h4>My Charlotte App</h4>
          <p>This Charlotte app allows user to be aware of events taking place in Charlotte,Nc.
          Also, it alows user to be aware of any issue, incidents or important information about Charlotte,NC.</p>
          <span className="categories"><i className="fa fa-tag" />Mobile App Development</span>
        </div>
        <div className="link-box">
          <a className="popup-modal-dismiss">Close</a>
        </div>
      </div>{/* modal-03 End */}
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
