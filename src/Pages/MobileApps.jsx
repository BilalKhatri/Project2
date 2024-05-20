import React from "react";
import { Row, Col } from "antd";
import InnerBanner from "../Component/InnerBanner";
import servicesimg from "../images/services.png";
import Rightsidebar from "../Component/ServiceRightSide";
import LogoImg from "../images/mobile-apps.png";

const MobileApps = () => {
  return (
    <>
      <InnerBanner Banback={servicesimg} title="Mobile Apps" />

      <div className="service_detail_section">
        <div className="container">
          <Row gutter={24}>
            <Col sm={24} md={16}>
              <div class="service_left_side">
                <div class="section_title">
                  <h2>App Design & Development</h2>
                  <p>
                    Create mobile solutions driven by your brand with our
                    assistance! In a rapidly evolving technological landscape,
                    it's essential to stay abreast of the latest trends. Mobile
                    applications have emerged as significant influencers in this
                    arena. Our tailored mobile applications embody dependability
                    and functionality. Partner with us to design a custom
                    application that meets all of your requirements.
                  </p>
                </div>
                <div class="img aos-init">
                  <img src={LogoImg} alt="image" />
                </div>
                <h3>What exactly is it that we do?</h3>
                <p>
                  We have a wide-ranging portfolio of mobile application design
                  and development, which enables us to offer our clients a
                  variety of options tailored to their specific needs. This
                  ensures that we can provide you with a clearer understanding
                  of what you might require from us.
                </p>
                <ul class="list_block">
                  <li>
                    <h3>Native Apps</h3>
                    <p>
                      These are the top choices among our clients due to their
                      speed and effectiveness in achieving specific goals. We
                      develop native apps that maximize your device's
                      capabilities and ensure that your app excels in fulfilling
                      its intended purpose. However, native apps are limited to
                      a specific operating system, causing issues if you decide
                      to switch to a different one.
                    </p>
                  </li>
                  <li>
                    <h3>Hybrid Apps</h3>
                    <p>
                      These applications are aptly named as they integrate
                      features from both types of websites. This results in an
                      enhanced combination of the best functions from each type.
                      Our app designers excel in creating these types of
                      applications, boasting the most experience in this area.
                      They offer customization and processes to enable you to
                      deliver top-notch service to your customers.
                    </p>
                  </li>
                  <li>
                    <h3>Web Apps</h3>
                    <p>
                      These applications often function more like a website than
                      traditional apps, with a user interface resembling that of
                      a website. They are faster and lighter because they do not
                      store much data on the device, instead storing it in the
                      cloud. When the app is opened, it loads content in real
                      time, displaying the information you want to see. These
                      apps are ideal for use with eCommerce platforms like
                      Amazon and eBay.
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

export default MobileApps;
