import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
  <div className="row section-head">
    <div className="two columns header-col">
      <h1><span>Get In Touch.</span></h1>
    </div>
    <div className="ten columns">
      <p className="lead">Please Feel free to get in touch with me for any additional questions, opportunities or inquiries.
      Thank you for your time and consideration.
      </p>
    </div>
  </div>
  <div className="row">
    <div className="eight columns">
      {/* form */}
      <form action method="post" id="contactForm" name="contactForm">
        <fieldset>
          <div>
            <label htmlFor="contactName">Name <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactName" name="contactName" />
          </div>
          <div>
            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
            <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
          </div>
          <div>
            <label htmlFor="contactSubject">Subject</label>
            <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
          </div>
          <div>
            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
          </div>
          <div>
            <button className="submit">Submit</button>
            <span id="image-loader">
              <img alt="" src="images/loader.gif" />
            </span>
          </div>
        </fieldset>
      </form> {/* Form End */}
      {/* contact-warning */}
      <div id="message-warning"> Error boy</div>
      {/* contact-success */}
      <div id="message-success">
        <i className="fa fa-check" />Your message was sent, thank you!<br />
      </div>
    </div>
    <aside className="four columns footer-widgets">
      <div className="widget widget_contact">
        <h4>Address and Phone</h4>
        <p className="address">
          Habibou Maizoumbou Dan Aouta<br />
          3140 Patrick Henry dr NW <br />
          Concord, NC 28207 US<br />
          <span>(336) 417-6209</span>
        </p>
      </div>
      <div className="widget widget_tweets">
        <h4 className="widget-title">Latest Work/Accomplishments</h4>
        <ul id="twitter">
          <li>
            <span>
            I am currently working on a Fuzzing Research Project to fuzz a Linux Network Manager.
              {/*<a href="#">http://t.co/CGIrdxIlI3</a>*/}
            </span>
            <b><a href="#">2 Days Ago</a></b>
          </li>
          <li>
            <span>
             Also, currently finishing a Computer Forensics project.
              {/*<a href="#">http://t.co/CGIrdxIlI3</a>*/}
            </span>
            <b><a href="#">3 Days Ago</a></b>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section> {/* Contact Section End*/}


      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}
