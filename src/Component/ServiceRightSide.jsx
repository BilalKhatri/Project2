import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceRightSide() {
  return (
    <>
      <div className="service_right_side">
              <div className="service_list_panel">
                <h3>Services</h3>
                <ul className="service_list">
                <li>
                      <Link to="/mexa/logo">Logo</Link>
                    </li>
                    <li>
                      <Link to="/mexa/ui-ux-design">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/mexa/web-development">Web Development</Link>
                    </li>
                    <li>
                      <Link to="/mexa/mobile-apps">Mobile Apps</Link>
                    </li>
                    <li>
                      <Link to="/mexa/seo">SEO</Link>
                    </li>
                    <li>
                      <Link to="/mexa/social-media-marketing">Social Media Marketing</Link>
                    </li>
                </ul>
              </div>
              <div className="side_contact_block">
                <div className="icon"><MdOutlineSupportAgent/></div>
                <h3>Let’s work together</h3>
                <Link to="/contact-us" className="btn btn_main">CONTACT US <FaArrowRight /></Link>
                <p><Link to="tel:+1 470 3540088"> +1 470 3540088</Link></p>
              </div>
            </div>
    </>
  )
}
