import React from "react";
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/services.png";
import Rightsidebar from "../Component/ServiceRightSide";
import LogoImg from "../images/main-logo.png";

const Logo = () => {
  return (
    <>
      <InnerBanner Banback={servicesimg} title="Logo Design" />

      <div className="service_detail_section">
        <div className="container">
          <Row gutter={24}>
            <Col sm={24} md={16}>
              <div class="service_left_side">
                <div class="section_title">
                  <h2>Logo Design services provider</h2>
                  <p>
                    With a team of highly artistic and innovative designers, we
                    play a crucial role in developing a professional brand
                    identity for our clients.
                  </p>
                </div>
                <div class="img aos-init">
                  <img src={LogoImg} alt="image" />
                </div>
                <h3>Satisfy your branding needs</h3>
                <p>
                  We create completely unique logos for our clients,
                  establishing their distinct and unparalleled presence in the
                  digital realm. Drawing on our extensive experience across
                  various industries, we understand how to craft a design that
                  seamlessly integrates with your business website, portfolios,
                  case studies, business cards, and stationary. Contact us for
                  exceptional logo services and elevate your brand to new
                  heights. Here are a few reasons why you should choose us over
                  others.
                </p>
                <ul class="list_block">
                  <li>
                    <h3>Interactive and engaging</h3>
                  </li>
                  <li>
                    <h3>Cost-effective packages </h3>
                  </li>
                  <li>
                    <h3>Enhanced brand recognition </h3>
                  </li>
                  <li>
                    <h3>Cutting-edge graphics</h3>
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm={24} md={8}>
              <Rightsidebar />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Logo;
