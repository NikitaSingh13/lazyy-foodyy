import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menu, setMenu] = useState("home");
    
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2 className='header-title'>Quick Bites, Zero Wait – Order Now!</h2>
                <p className='header-description'>
                    Explore our mouthwatering menu and pre-order your meal to skip the wait! 
                    dive straight into deliciousness—no more long queues!
                </p>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={`menu-link ${menu === "menu" ? "active" : ""}`}>
                    View Menu
                </a>
            </div>
        </div>
    );
}

export default Header;
