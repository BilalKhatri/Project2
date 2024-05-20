import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/contact.png";
import mail from "../images/mail.png";
import location from "../images/location.png";
import phone from "../images/phone.png";
import planpaper from "../images/paperplane.png"

function Contact() {
  return (
    <>
      <InnerBanner Banback={servicesimg} title="Contact Us" />
      <section className="row_am contact_list_section">
      <div className="container">
        
        <div className="contact_list_inner">
          <div className="c_list_card">
            <div className="icons">
              <img src={mail} alt="image" />
              <div className="dot_block">
                <span className="dot_anim"></span>
                <span className="dot_anim"></span>
                <span className="dot_anim"></span>
              </div>
            </div>
            <div className="inner_text">
              <h3>Chat to sales</h3>
              <p>Let’s discuss with our sales team
              </p>
              <Link to="mailto:info@mexatechnologies.com" className="text_btn">info@mexatechnologies.com</Link>
            </div>
          </div>
          <div className="c_list_card">
            <div className="icons">
              <img src={location} alt="image" />
              <div className="dot_block">
                <span className="dot_anim"></span>
                <span className="dot_anim"></span>
                <span className="dot_anim"></span>
              </div>
            </div>
            <div className="inner_text">
              <h3>Visit our office</h3>
              <p>Reach us to our offcie and meest us
              </p>
              <Link to="https://maps.app.goo.gl/SgJH2PBQWqJ6dbsQ7" className="text_btn">7250 Sheffield pl Cumming, GA 30040 </Link>
            </div>
          </div>
          <div className="c_list_card">
            <div className="icons">
              <img src={phone} alt="image" />
              <div className="dot_block">
                <span className="dot_anim"></span>
                <span className="dot_anim"></span>
                <span className="dot_anim"></span>
              </div>
            </div>
            <div className="inner_text">
              <h3>Call us</h3>
              <p>Call us directly with sales team
              </p>
              <Link to="tel:+1 470 3540088" className="text_btn">+1 470 35400881</Link>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="contact_form_section">
      <div className="container">
          <div className="contact_inner">
              <div className="contact_form">
                <div className="section_title">
                    <h2>Leave a <span>message</span></h2>
                    <p>Fill up form below, our team will get back soon</p>
                </div>
                  <form action="proces.php" method="post">
                  	<Row gutter={24}>
                    	<Col sm={24} md={12}>
		                    <div className="form-group">
		                        <input type="text" name="Name" placeholder="Name" required="" className="form-control" />
		                    </div>
		                </Col>
		                <Col sm={24} md={12}>
		                    <div className="form-group">
		                        <input type="email" name="Email" placeholder="Email" required="" className="form-control" />
		                    </div>
                        </Col>
                    </Row>

                  	<Row gutter={24}>
                    	<Col sm={24} md={12}>
		                    <div className="form-group">
		                        <input type="text" name="Company_name" placeholder="Company Name" className="form-control" />
		                    </div>
                        </Col>
		                <Col sm={24} md={12}>
		                    <div className="form-group">
		                        <input type="text" name="Number" placeholder="Phone" required="" className="form-control" />
		                    </div>
                        </Col>
                    </Row>
                    <div className="form-group">
                        <textarea className="form-control" name="Message" placeholder="Your message"></textarea>
                    </div>

                    <div className="form-group ">
                      <input className="btn btn_main" type="submit" name="submit" id="contact-submit" value="Submit Message" tabindex="100" />
                	</div>

                  </form>

                  <div className="form-graphic">
                  	<img src={planpaper} alt="image" />
                  </div>
              </div>
              
              
          </div>
      </div>
    </section>
    <section className="row_am map_section">
      <div className="container">
          <div className="map_inner">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7849.313072412296!2d-84.20291948171833!3d34.19160929298691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59cb5c13d78df%3A0xddf8602c7632e78a!2s7250%20Sheffield%20Pl%2C%20Cumming%2C%20GA%2030040%2C%20USA!5e0!3m2!1sen!2s!4v1709945356941!5m2!1sen!2s" 
              width="100%" 
              height="510" 
              style={{ border: 0 }}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
      </div>
    </section>
    </>
  )
}

export default Contact
