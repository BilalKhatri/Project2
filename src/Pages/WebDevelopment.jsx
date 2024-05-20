import React from 'react'
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/services.png";
import Rightsidebar from "../Component/ServiceRightSide";
import LogoImg from "../images/webd.png";

const WebDevelopment = () => {
  return (
    <>
    <InnerBanner Banback={servicesimg} title="Web Development" />

    <div className="service_detail_section">
      <div className="container">
        <Row gutter={24}>
          <Col sm={24} md={16}>
            <div class="service_left_side">
              <div class="section_title">
                <h2>Web Development services provider</h2>
                <p>Our teams for website development and creation prioritize your needs and provide exceptional services. We offer a variety of solutions through our services</p>
                <p>Ecommerce Website</p>
              <p>WordPress Website</p>
              <p>Social Networking Website</p>
              <p>Responsive Website</p>
              <p>And others</p> 
              </div>
              <div class="img aos-init">
                <img src={LogoImg} alt="image" />
              </div>
              <h3>A Complete Range of Website Design and Development Solutions</h3>
              <p>
              No matter what kind of website you need designed or developed, whether it's a custom design, custom backend, or industry-approved CMS, we have the expertise to assist you.
              </p>
              <ul class="list_block">
              <li>
                  <h3>WordPress Web Development</h3>
                </li>
                <li>
                  <h3>Custom CMS Development</h3>
                </li>
                <li>
                  <h3>HTML Website Development</h3>
                </li>
                <li>
                  <h3>Ecommerce Website Development</h3>
                </li>
                <li>
                  <h3>Shopify Website Development</h3>
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
  )
}

export default WebDevelopment
