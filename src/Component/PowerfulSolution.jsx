import React from "react";
import { Col, Row } from "antd";
import BusinessVector from "../images/business_vectore.png";
import p1 from "../images/Powerful-solution-01.png";
import p2 from "../images/Powerful-solution-02.png";
import p3 from "../images/Powerful-solution-03.png";
import p4 from "../images/Powerful-solution-04.png";
import p5 from "../images/Powerful-solution-05.png";
import p6 from "../images/Powerful-solution-06.png";
import p7 from "../images/Powerful-solution-07.png";
import p8 from "../images/Powerful-solution-08.png";
import CountUp from "react-countup";

export default function PowerfulSolution() {
  return (
    <>
      <section className="powerful_solution">
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

        <div className="bg_pattern">
          <img src={BusinessVector} alt="image" />
        </div>
        <div className="container">
          <div className="section_title">
            <h2>PROJECT HIGHLIGHTS</h2>
            <p>
              We have assisted companies of various types worldwide by
              delivering top-notch designs and logos.
            </p>
          </div>
          <div className="quality_lable">
            <ul>
              <li>
                <p>
                  <i className="icofont-check-circled"></i>
                  Highly customizable
                </p>
              </li>
              <li>
                <p>
                  <i className="icofont-check-circled"></i>
                  Pixel perfect design
                </p>
              </li>
              <li>
                <p>
                  <i className="icofont-check-circled"></i>
                  Worldwide support
                </p>
              </li>
            </ul>
          </div>
          <div className="counters_block">
            <ul className="app_statstic">
              <li>
                <div className="text">
                  <p>
                    <span className="counter-value">
                    <CountUp end={450} />
                    </span>
                    <span>+</span>
                  </p>
                  <p>Satisfied Clients</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>
                    <span className="counter-value">
                    <CountUp end={950} />
                    </span>
                    <span>+</span>
                  </p>
                  <p>Projects Completed</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>
                    <span className="counter-value">
                    <CountUp end={135} />
                    </span>
                    <span>+</span>
                  </p>
                  <p>Percent yearly turnover increase</p>
                </div>
              </li>
              <li>
                <div className="text">
                  <p>
                    <span className="counter-value">
                    <CountUp end={324} />
                    </span>
                    <span>+</span>
                  </p>
                  <p>Million active accounts</p>
                </div>
              </li>
            </ul>
          </div>
          <Row gutter={24} className="images_gallery_block">
            <Col sm={24} md={6} className="gl_block">
              <div className="img">
                <img src={p1} alt="image" />
              </div>
              <div className="img">
                <img src={p2} alt="image" />
              </div>
            </Col>
            <Col sm={24} md={6} className="gl_block">
              <div className="img">
                <img src={p3} alt="image" />
              </div>
              <div className="img">
                <img src={p4} alt="image" />
              </div>
              <div className="img">
                <img src={p5} alt="image" />
              </div>
            </Col>
            <Col sm={24} md={6} className="gl_block">
              <div className="img">
                <img src={p6} alt="image" />
              </div>
              <div className="img">
                <img src={p7} alt="image" />
              </div>
            </Col>
            <Col sm={24} md={6} className="gl_block">
              <div className="img">
                <img src={p8} alt="image" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
