import React from 'react'
import { Link } from 'react-router-dom';

const InnerBanner=({Banback,title}) => {
  return (
    <>

<div className="inner_page_block white_option abt-pg" style={{ backgroundImage: `url(${Banback})` }}>
      <div className="bread_crumb">

        <div className="container">

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
          <div className="bred_text">
            <h1>{title}</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><span>»</span></li>
              <li><Link to="">{title}</Link></li>
            </ul>
          </div>
        </div>
      </div>

    </div>

    </>
  );
};
export default InnerBanner;