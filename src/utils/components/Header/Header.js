import React from 'react'
import '../Header/Header.css'
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div>
        <section className='h-wrapper'>
            <section className="flexCenter paddings innerWidth h-container">
                <img src={logo} alt="logo" width={100} srcset="" />

                <div className="flexCenter h-menu">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                    <a href="">Contact</a>
                    </button>
                </div>
            </section>
        </section>
      
    </div>
  )
}

export default Header
