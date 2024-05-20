import React from "react";
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/services.png";
import Rightsidebar from "../Component/ServiceRightSide";
import LogoImg from "../images/uiux.png";

const UIUXDesign = () => {
  return (
    <>
      <InnerBanner Banback={servicesimg} title="UI/UX Design" />

      <div className="service_detail_section">
        <div className="container">
          <Row gutter={24}>
            <Col sm={24} md={16}>
              <div class="service_left_side">
                <div class="section_title">
                  <h2>UI/UX Design services provider</h2>
                  <p>
                    Our team of designers brings together knowledge in UX,
                    technology, and visualization to create products that align
                    with your objectives. With a diverse range of talent, we
                    offer a comprehensive service with specialized skills in UX,
                    technology, and visualization to deliver data products that
                    fulfill your needs.{" "}
                  </p>
                </div>
                <div class="img aos-init">
                  <img src={LogoImg} alt="image" />
                </div>
                <h3>Benifits of our services</h3>
                <p>
                  Experience the seamless integration of user interface (UI) and
                  user experience (UX) design with our services, where every
                  pixel is meticulously crafted to enhance usability and
                  engagement. By prioritizing intuitive navigation and visually
                  appealing layouts, we ensure that users effortlessly interact
                  with your product or platform. With our expertise, you can
                  expect increased user satisfaction, reduced bounce rates, and
                  amplified conversion rates, ultimately leading to a more
                  successful digital presence. Unlock the full potential of your
                  brand with our UI/UX services, where innovation meets
                  functionality to deliver unparalleled results.
                </p>
                <ul class="list_block">
                  <li>
                    <h3>User-centered Product Design</h3>
                    <p>
                      Obtain all the necessary elements to guarantee a
                      user-friendly display of information for our customers.
                      Our product design team's creative skills are complemented
                      by a grasp of business and the purpose of data tools.
                    </p>
                  </li>
                  <li>
                    <h3>Diagram Design and Data Visualization Experts</h3>
                    <p>
                      Our clients look for help to present data effectively and
                      find suppliers who can combine design and diagramming
                      skills. As a team of experts in diagram design and data
                      visualization with technical knowledge, we assure you that
                      deliver optimal solutions at the highest quality.
                    </p>
                  </li>
                  <li>
                    <h3>Experienced, Diverse, and Business-Savvy team</h3>
                    <p>
                      Properly presenting information can be expensive when
                      creating projects that are not feasible. We carefully
                      assess business requirements and limitations to ensure
                      that our interdisciplinary team can provide security and
                      guarantee the feasibility of services.
                    </p>
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

export default UIUXDesign;
