import React from "react";
import { Col, Row } from 'antd';

export default function HomeBanner() {
  return (
    <>
      <div className="banner_section">
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
            <Row>
            <Col sm={24} md={24}>
              <div className="banner_text">
                <div className="ban_inner_text">
                  <h2 className="head1">We Are</h2>
                  <div className="te"></div>
                  <h1 className="head2">Mexa</h1>
                  <h3 className="head3">Technologies</h3>
                  <p>Design – Development – Marketing </p>
                </div>
              </div>
              </Col>
            </Row>
          </div>
        </div>
    </>
  );
}
