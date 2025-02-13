import React from 'react'
import BannerBackground from '../assets/home-banner-background.PNG'
import BannerImage from '../assets/gameconsole.png'
import { FiArrowRight } from 'react-icons/fi'

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

disableScroll();

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-image-container">
        <img src={BannerImage} alt=""/>
      </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Welcome to Ultimate Gaming Pardise</h1>
          <p className="primary-text">"Unbox the Magic of Gaming!!<br></br> 
From iconic classics to rare treasures, Make your dream come true. <br></br>
The Ultimate Gaming Feast is Awaiting !"  </p>
<button className="secondary-button">
  Explore More <FiArrowRight/>
</button>

        </div>     
     
    </div>
    </div>
  )
}

export default Home