import React from "react";
import White_logo from "../images/mexalogo_white.png";
import Icon1 from "../images/contact_01.png";
import Icon2 from "../images/contact_02.png";
import Icon3 from "../images/contact_03.png";
import { Col, Row } from "antd";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from 'react-router-dom';
import BackToTopButton from "./BackToTop";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="top_footer" id="contact">
          <div className="dotes_anim_bloack">
            <div className="dots dotes_1"></div>
            <div className="dots dotes_2"></div>
            <div className="dots dotes_3"></div>
            <div className="dots dotes_4"></div>
            <div className="dots dotes_5"></div>
            <div className="dots dotes_6"></div>
            <div className="dots dotes_7"></div>
            <div className="dots dotes_8"></div>
          </div>

          <div className="container">
            <Row gutter={24}>
              <Col sm={24} md={8}>
                <div className="abt_side">
                  <div className="logo">
                    {" "}
                    <img src={White_logo} alt="image" />
                  </div>
                  <p>
                    Our dedicated team excels in boosting businesses through
                    digital marketing, content creation, logo design, and web
                    development, with a proven track record of successful
                    business transformations.
                  </p>
                </div>
              </Col>

              <Col sm={24} md={4}>
                <div className="links">
                  <h3>Useful Links</h3>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col sm={24} md={6}>
                <div className="links">
                  <h3>Help &amp; Suport</h3>
                  <ul>
                    <li>
                      <Link to="/logo">Logo</Link>
                    </li>
                    <li>
                      <Link to="/ui-ux-design">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/mobile-apps">Mobile Apps</Link>
                    </li>
                    <li>
                      <Link to="/seo">SEO</Link>
                    </li>
                    <li>
                      <Link to="/social-media-marketing">SMM</Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col sm={24} md={6}>
                <div className="try_out">
                  <h3>Contact us</h3>
                  <ul>
                    <li>
                      <span className="icon">
                        <img src={Icon1} alt="image" />
                      </span>
                      <div className="text">
                        <p>Reach us 7250 Sheffield pl Cumming, GA 30040</p>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <img src={Icon2} alt="image" />
                      </span>
                      <div className="text">
                        <p>
                          Call us{" "}
                          <Link to="tel:+1 470 3540088" target="_blank">+1 470 3540088</Link>
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <img src={Icon3} alt="image" />
                      </span>
                      <div className="text">
                        <p>
                          Email us{" "}
                          <Link to="mailto:info@mexatechnologies.com" target="_blank">
                            info@mexatechnologies.com
                            </Link>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="bottom_footer">
          <div className="container">
            <Row gutter={24} type="flex" align="middle">
              <Col sm={24} md={8}>
                <p>© Copyrights 2024. All rights reserved.</p>
              </Col>
              <Col sm={24} md={8}>
                <ul className="social_media">
                  <li>
                  <Link to="https://www.facebook.com/mexatechnologies" target="_blank">
                      <TiSocialFacebook/>
                      </Link>
                  </li>
                  <li>
                  <Link to="https://twitter.com/mexatechnology" target="_blank">
                      <TiSocialTwitter/>
                      </Link>
                  </li>
                  <li>
                  <Link to="https://www.instagram.com/mexatechnologies" target="_blank">
                      <TiSocialInstagram/>
                      </Link>
                  </li>
                  <li>
                  <Link to="https://www.linkedin.com/company/mexatechnologies/" target="_blank">
                      <TiSocialLinkedin/>
                      </Link>
                  </li>
                </ul>
              </Col>
              <Col sm={24} md={8}>
                <p className="developer_text">
                  Design &amp; developed by{" "}
                  <Link to="https://mexatechnologies.com/" target="_blank">Mexa Technologies</Link>
                </p>
              </Col>
            </Row>
          </div>
        </div>
            <BackToTopButton/>
      </footer>
    </>
  );
};

export default Footer;
