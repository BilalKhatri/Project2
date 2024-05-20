import React from 'react'
import StartImg from '../images/start-free-side-img.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

export default function YourDream() {
  return (
    <>
<section className="free_trial_section">
      <div className="free_inner">
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

        <div className="text">
          <div className="section_title">
            <h2>You Dream It, We Build It.</h2>
            <p>Mexa Technologies is proud of its creative team, comprised of skilled designers, developers, strategists, and consultants who can transform your innovative concepts into meaningful outcomes.</p>
          </div>
          <div className="start_and_watch">
            <Link to='/contact-us' className='btn btn_main'>GET STARTED <FaArrowRight /></Link>
          </div>
        </div>
        <div className="side_img">
          <img src={StartImg} alt="image" />
        </div>
      </div>
    </section>      
    </>
  )
}
