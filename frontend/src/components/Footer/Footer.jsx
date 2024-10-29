import  { useState } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.cat} alt="" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>Go to </h2>
            <ul>
              <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Want to make your own website, Contact him 👇</h2>
            <ul>
                <li>+91 9990874079</li>
                <li>mdsahil622004@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 ©- All Right Reserved.</p>
    </div>
  )
}

export default Footer
