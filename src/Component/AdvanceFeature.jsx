import React from "react";
import { Col, Row } from "antd";
import DataSource from "../images/Secure-data.svg";
import FullyFunctional from "../images/Fully-functional.svg";
import LiveChat from "../images/Live-chat.svg";
import Support from "../images/24-7-Support.svg";

export default function AdvanceFeature() {
  return (
    <>
      <section className="row_am advance_feature_section" id="getstarted">
        <div className="container">
          <div className="advance_feature_inner">
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

            <Row gutter={24}>
              <Col sm={24} md={12}>
                <div className="feature_block">
                  <div className="icon">
                    <img src={DataSource} alt="image" />
                  </div>
                  <div className="text_info">
                    <h3>Competitive Approach</h3>
                    <p>
                      We strive to enhance clients' brand presence and surpass
                      competitors by strategically highlighting unique
                      qualities, positioning them favorably in the market for
                      optimal performance.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={24} md={12}>
                <div className="feature_block">
                  <div className="icon">
                    <img src={FullyFunctional} alt="image" />
                  </div>
                  <div className="text_info">
                    <h3>Customer-Centric</h3>
                    <p>
                      Our services focus on exceptional customer orientation,
                      placing consumers at the forefront of our creative and
                      development efforts to ensure their needs are prioritized
                      effectively.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={24} md={12}>
                <div className="feature_block">
                  <div className="icon">
                    <img src={LiveChat} alt="image" />
                  </div>
                  <div className="text_info">
                    <h3>Quick Turnaround</h3>
                    <p>
                      At our organization, we prioritize sticking to project
                      timelines to show respect for our clients' time.
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={24} md={12}>
                <div className="feature_block">
                  <div className="icon">
                    <img src={Support} alt="image" />
                  </div>
                  <div className="text_info">
                    <h3>100% Satisfaction Guaranteed</h3>
                    <p>
                      We are committed to ensuring your complete satisfaction
                      and promise to work closely with you that perfectly meet
                      your specific needs.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}
