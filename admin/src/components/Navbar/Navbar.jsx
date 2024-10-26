import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.light} alt="" />
      <img className='profile' src={assets.cat} alt="" />
    </div>
  )
}

export default Navbar
