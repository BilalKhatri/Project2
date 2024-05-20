import React from 'react'
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/services.png";
import Rightsidebar from "../Component/ServiceRightSide";
import LogoImg from "../images/smm.png";

const SocialMediaMarketing = () => {
  return (
    <>
      <InnerBanner Banback={servicesimg} title="Social Media Marketing" />

<div className="service_detail_section">
  <div className="container">
    <Row gutter={24}>
      <Col sm={24} md={16}>
        <div class="service_left_side">
          <div class="section_title">
            <h2>We Do Social – So You Don’t Have To!</h2>
            <p>
            At Mexa Technologies SMM, we transform your company's presence on social media into a dynamic social brand by utilizing both organic and paid social media marketing strategies to connect with your specific audience and share your narrative.
            </p>
          </div>
          <div class="img aos-init">
            <img src={LogoImg} alt="image" />
          </div>
          <h3>How we Perform?</h3>
          <p>
          We use a comprehensive approach involving strategy, content creation, engagement, and analytics to enhance your online presence, connect with your audience, and drive results through effective social media campaigns.
          </p>
          <ul class="list_block">
          <li>
                  <h3>Strategic Planning</h3>
                  <p>We start by evaluating your business objectives and the audience you want to reach in order to develop a customized social media strategy. This involves selecting the appropriate platforms, types of content, and posting schedules.</p>
                </li>
                <li>
                  <h3>Energetic Content Creation</h3>
                  <p>Our team of skilled professionals creates engaging content, such as articles, visuals, and videos, that are tailored to connect with your target audience and effectively communicate your brand's message.</p>
                </li>
                <li>
                  <h3>Active Management</h3>
                  <p>We proactively oversee your social media accounts, track interactions, engage with comments and messages, and adapt strategies as necessary to uphold a powerful online presence for your brand.</p>
                </li>
                <li>
                  <h3>Data-Drive Optimization</h3>
                  <p>We consistently evaluate the effectiveness of your social media campaigns, utilizing data analysis to improve tactics and optimize outcomes, to keep your business competitive in the digital realm.</p>
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

export default SocialMediaMarketing
