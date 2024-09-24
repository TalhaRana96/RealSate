import React from 'react'
import '../Hero/Hero.css'
import heroImg from "../../../assets/hero-image.png";
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/> 
                <h1>Discover  <br/> Most Suitable <br/> Property </h1>
                </div>

                <div className="flecColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                    <br />
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>
                <div className="flexCenter search-bar">
                <FontAwesomeIcon icon={faLocationDot} color='var(--blue)' size='2x' />
                <input type="text" />
                    <button className='button'>Search</button>
                </div>
                <div className='flexCenter stats'>
                  <div className='flexColCenter stat'>
                    <span>
                    <CountUp start={0} end={2200} delay={1}/>
                      <span className='Orng'> +</span>
                    </span>
                    <span>Premium Product</span>
                  </div>
                  <div className='flexColCenter stat'>
                    <span>
                    <CountUp start={0} end={300} delay={1}/>
                      <span className='Orng'> +</span>
                    </span>
                    <span>Happy Cutomer</span>
                  </div>
                  <div className='flexColCenter stat'>
                    <span>
                    <CountUp start={0} end={10} delay={1}/>
                      <span className='Orng'> +</span>
                    </span>
                    <span>Awards Wining</span>
                  </div>
                </div>
            </div>
            <div className="flexColCenter hero-right">
                <div className="image-container">
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
