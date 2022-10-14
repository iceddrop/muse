import React from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import search from '../assets/search.svg'
import video from '../assets/videos.svg'
import profile from '../assets/profile.svg'
import logout from '../assets/Logout.svg'
import { FaHome } from 'react-icons/fa'
import { BsFillCollectionFill } from "react-icons/bs"
import { IoMdRadio } from "react-icons/io";

export default function Navbar(){
      const [clicked, setClicked] = React.useState(false)

{/*flip clicked state*/}
      function clickAct(){
        setClicked(val => !val)
      }
	  
	return(
		<nav className='nav p-4 fixed-top'>
		   <div className='flex'>
                <img src={menu} onClick={clickAct} className='hamburger md:hidden'/>
				<img src={logo} className='app-logo pl-4' />
				<form className='search-input flex justify-between md:flex-row-reverse md:items-center'>
                   <input placeholder='search artists'  className='search ml-6'/>
				   <img src={search} className='search-icon md:ml-12 lg:ml-14 2xl:ml-18' />
				</form>	
			</div>
				<div className={clicked ? 'block nav-dropdown' : 'hidden'}>
					<div className='flex flex-row items-center pt-4 pb-3 px-2 nav-item'><FaHome className='bar-icon'/><h6 className='pl-4'>Home</h6></div>
					<div className='flex flex-row items-center px-2 py-3 nav-item'><BsFillCollectionFill className='bar-icon'/><h6 className='pl-4'>My collections</h6></div>
					<div className='flex flex-row items-center px-2 py-3 nav-item'><IoMdRadio className='bar-icon'/><h6 className='pl-4'>Radio</h6></div>
					<div className='flex flex-row items-center px-2 py-3 nav-item'><img src={video} className='bar-icon'/><h6 className='pl-4'>Music video</h6></div>
					<div className='flex flex-row items-center px-2 py-3 nav-item'><img src={profile} className='bar-icon'/><h6 className='pl-4'>Profile</h6></div>
					<div className='flex flex-row items-center px-2 py-3 nav-item'><img src={logout} className='bar-icon'/><h6 className='pl-4'>Log out</h6></div>
				</div>				
		</nav>
		
	)
}