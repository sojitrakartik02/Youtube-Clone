import React from 'react'
import './Navbar.css'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notifi_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import search_icon from '../../assets/search.png'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu.png'
import { Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} />
            <Link to='/'><img src={logo} className='logo' /></Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
            <input type='text' placeholder='Search'/>
            <img src={search_icon} />
            </div>
            
        </div>

        <div className="nav-right flex-div">
            <img src={upload_icon} />
            <img src={more_icon} />
            <img src={notifi_icon} className=''/>
            <img src={profile_icon} className='user-icon' />
        </div>
    </nav>
  )
}

export default Navbar
