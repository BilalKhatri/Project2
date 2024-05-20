import React from "react";
import FeatureServices from "../Content/FeatureServices";
import { Col, Row } from 'antd';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OurFeaturedServices = ({ heading, paragraph }) => {
  return (
    <>
      <div className="row_am service_list_section">
        <div className="container">
          <div className="section_title">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
          </div>


          <div class="service_list_inner">
          <Row gutter={24} className="fsmobilefdc">
            {FeatureServices.map((fs, index) => (
                <Col sm={12} md={8} >
              <div className="s_list_card" key={index}>
                <div className="icons">
                  <img src={fs.image} alt="image" />
                  <div className="dot_block">
                    <span className="dot_anim"></span>
                    <span className="dot_anim"></span>
                    <span className="dot_anim"></span>
                  </div>
                </div>
                <div className="inner_text">
                  <h3>{fs.title}</h3>
                  <p>{fs.content}</p>
                 <Link to={fs.path} className="btn text_btn" >{fs.readmorebtn} <FaArrowRight /></Link>
                </div>
              </div>
              </Col>
            ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurFeaturedServices;
