import React from 'react'
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/services.png";
import Rightsidebar from "../Component/ServiceRightSide";
import LogoImg from "../images/seo.png";

const SEO = () => {
  return (
    <>
      <InnerBanner Banback={servicesimg} title="SEO" />

<div className="service_detail_section">
  <div className="container">
    <Row gutter={24}>
      <Col sm={24} md={16}>
        <div class="service_left_side">
          <div class="section_title">
            <h2>SEO services provider</h2>
            <p>
            A team of Search Engine Optimization experts offers top-notch services to help businesses enhance their websites and convert potential clients into active consumers. They are known for their expertise in achieving higher conversion rates for business websites, providing the best SEO services
            </p>
          </div>
          <div class="img aos-init">
            <img src={LogoImg} alt="image" />
          </div>
          <h3>How do we Perform?</h3>
          <p>
          We are a group of SEO experts offering cost-effective SEO solutions. Our range of services can help your business thrive across various digital marketing channels. What sets us apart is our team of highly skilled search engine optimization specialists. If you're in need of SEO and marketing professionals, you've come to the right place.
          </p>
          <ul class="list_block">
          <li>
                  <h3>We Analyze</h3>
                  <p>When it comes to SEO, it's crucial to evaluate the backlinks of the website and adjust strategies accordingly. Additionally, the key to successful SEO lies in understanding the strengths and weaknesses of competitors in the market.</p>
                </li>
                <li>
                  <h3>We Optimize</h3>
                  <p>Optimization plays a vital role in ensuring the effective operation of Search Engine Optimization. We focus on optimizing for mobile devices and address all other factors that require assistance in terms of optimization.</p>
                </li>
                <li>
                  <h3>We Secure</h3>
                  <p>We utilize SEO tools to ensure the security of your content and data, and we structure the data according to the website's needs. Our top-notch SEO services are backed by a team of experts experienced in website and SEO security</p>
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

export default SEO
