import React from 'react'
import Analys_img from '../images/Analyze_Icon.svg'
import Data_img from '../images/analyze-data-03.png'
import { Col, Row } from 'antd';

export default function HomeAbout() {
  return (
    <>
      <div className="row_am analyze_section">
      <div className="container">
      <Row type="flex" justify="space-around" align="middle">
        <Col sm={24} md={12}>
            <div class="analyze_text">
              <span className="icon"><img src={Analys_img} alt="image" /></span>
              <div className="section_title">
                <h2>About Us</h2>
                <h3>WE ARE COMMITTED TO OUR WORK</h3>
                <p>We provide top-notch digital solutions to various industries, excelling in design and development. They prioritize meeting clients' digital needs with their expert team. Their services focus on enhancing organizational performance and their custom website solutions aim to boost businesses and drive revenue.</p>
              </div>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <div className="analyze_image">
              <img className="moving_animation" src={Data_img} alt="image" />
            </div>
            </Col>
          </Row>
      </div>
    </div>
    </>
  )
}
