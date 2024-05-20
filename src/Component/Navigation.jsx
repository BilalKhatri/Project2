import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo_image from "../images/mexalogo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { IoChevronDownOutline } from "react-icons/io5";




export default function Navigation() {

  const[sticky,setSticky] = useState(false);
  useEffect( ()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "about",
    },
    {
      label: "Services",
      link: "services",
      submenu: [
        {
          label: "Web Development",
          link: "/mexa/web-development",
        },
        { label: "Logo", link: "logo" },
        { label: "Social Media Marketing", link: "social-media-marketing" },
        { label: "UI/UX Designs", link: "ui-ux-design" },
        { label: "Web Development", link: "web-development" },
        { label: "SEO", link: "seo" },
        { label: "Mobile Apps", link: "mobile-apps" },
      ],
    },
    // {
    //   label: "Contact",
    //   link: "contact",
    // },
  ];
  return (
    <>
    <header className={`main-header ${sticky? 'dark-nav' : ''}`}>

    <div className="container">    
    <nav className="navbar">
        <NavLink className='navbar-brand' to="/">
              <img src={Logo_image} alt='' />
        </NavLink>

      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${item.submenu ? "has-submenu" : ""}`}>
            {/* <NavLink key={index} className='menu-item ddmenu' to={item.link}>{item.label}</NavLink> */}

            {item.submenu ? <button key={index} className='menu-link'>{item.label} <span class="drp_btn"><IoChevronDownOutline /></span></button> : <NavLink key={index} className='menu-link' to={item.link}>{item.label}</NavLink>}

            {item.submenu && (
              <ul className="submenu-content">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className='menu-item'>
                    <NavLink to={subItem.link}>{subItem.label}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="menu-item"><NavLink to='/contact-us' className='dark_btn'>Contact <FaArrowRight /></NavLink></li>
      </ul>
      <div className="toggle-button" onClick={toggleMenu}><HiOutlineMenuAlt3 /></div>
    </nav>
    </div>
    </header>
    </>
  );
}
