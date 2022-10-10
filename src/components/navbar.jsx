import React from 'react'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import home from '../assets/home.svg'
import collections from '../assets/playlist.svg'
import radio from '../assets/radio.svg'
import video from '../assets/videos.svg'
import profile from '../assets/profile.svg'
import logout from '../assets/Logout.svg'
export default function Navbar(){
      const [clicked, setClicked] = React.useState(false)

{/*flip clicked state*/}
      function clickAct(){
        setClicked(val => !val)
      }
	return(
		<nav className='nav'>
		   <div className='flex'>
                <img src={menu} onClick={clickAct} className=''/>
				<img src={logo} className='app-logo' />
				<form>
                   <input placeholder='search artists' className='search'/>
				</form>			
		  </div>
		  <div className={clicked ? 'block' : 'hidden'}>
			<div className='flex flex-row items-center'><img src={home} className=''/><h6>Home</h6></div>
			<div className='flex flex-row items-center'><img src={collections} className=''/><h6>My collections</h6></div>
			<div className='flex flex-row items-center'><img src={radio} className=''/><h6>Radio</h6></div>
			<div className='flex flex-row items-center'><img src={video} className=''/><h6>Music video</h6></div>
			<div>
            <div className='flex flex-row items-center'><img src={profile} className=''/><h6>Profile</h6></div>
            <div className='flex flex-row items-center'><img src={logout} className=''/><h6>Log out</h6></div>
			</div>
		  </div>		
		</nav>
	)
}