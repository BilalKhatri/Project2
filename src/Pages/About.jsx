import React from "react";
import WhoSays from "../Component/WhoSays";
import YourDream from "../Component/YourDream";
import InnerBanner from "../Component/InnerBanner";
import aboutimg from "../images/aboutus.png";
import abt_01 from "../images/abt_01.png";
import abt_02 from "../images/abt_02.png";
import abt_03 from "../images/abt_03.png";
import solution from "../images/solution.png";
import { Col, Row } from "antd";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <InnerBanner Banback={aboutimg} title="About Us" />

      <div className="about_us_page_section">
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
          <div className="about_block">
            <Row gutter={24} type="flex" justify="space-around" align="middle">
              <Col sm={24} md={12}>
                <div className="section_title">
                  <h2>Few words about us, what we provide for your growth</h2>
                  <p>
                    We are dedicated to boosting your business! Design
                    Perfecto's team of digital marketing professionals,
                    innovative content producers, skilled logo designers, and
                    web development experts have been transforming businesses
                    since we started. Our goal is to ensure your business is
                    successful and thriving!
                  </p>
                </div>
              </Col>
              <Col sm={24} md={12}>
                <div className="abt_img_block">
                  <div className="top_img">
                    <img src={abt_01} alt="image" />
                    <img src={abt_02} alt="image" />
                  </div>
                  <div className="bottom_img">
                    <img src={abt_03} alt="image" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div id="counter">
            <Row gutter={24}>
              <Col sm={24} md={8}>
                <div className="counter_outer">
                  <div className="counter_box">
                    <p>
                      <span className="counter-value">
                        <CountUp end={950} />
                      </span>
                      <span>+</span>
                    </p>
                    <p>
                      Projects <br /> Completed
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={24} md={8}>
                <div className="counter_outer">
                  <div className="counter_box">
                    <p>
                      <span className="counter-value">
                        <CountUp end={450} />
                      </span>
                      <span>+</span>
                    </p>
                    <p>
                      Client <br /> served
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={24} md={8}>
                <div className="counter_outer">
                  <div className="counter_box">
                    <p>
                      <span className="counter-value">
                        <CountUp end={10} />
                      </span>
                      <span>+</span>
                    </p>
                    <p>
                      Years <br /> in business
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="row_am solution_page_section">
        <div className="container">
          <Row gutter={24} type="flex" justify="space-around" align="middle">
            <Col sm={24} md={12}>
              <div className="solution_image">
                <img src={solution} alt="image" />
              </div>
            </Col>
            <Col sm={24} md={12}>
              <div className="solution_text">
                <div className="section_title">
                  <h2>
                    We Emphasize on Productivity to Generate Long-Term Results
                  </h2>
                  <p>
                    Being a proficient digital platform, we offer a variety of
                    online services. We understand the importance of navigating
                    the digital realm. Our primary goal is to provide
                    easy-to-use services that assist brands in making a strong
                    impression. To us, commitment, efficiency, skill, and
                    competitive evaluation are more than just trendy terms.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <WhoSays />
      <YourDream />
    </>
  );
};

export default About;
