import React from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import search from "../assets/search.svg";
import video from "../assets/videos.svg";
import profile from "../assets/profile.svg";
import logout from "../assets/Logout.svg";
import { FaHome } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { IoMdRadio } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


export default function Navbar() {
  const [artisteData, setArtisteData] = React.useState([]);

  const [clicked, setClicked] = React.useState(false);

  const {searchInput, setSearchInput} = useContext(SearchContext);

  const {chartDisplayed, setChartDisplayed} = useContext(SearchContext);

  {
    /*flip clicked state*/
  }
  function clickAct() {
    setClicked((val) => !val);
  }

  function searchArtistes() {
      setIsOpen(true)
  }

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  console.log(artisteData);

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchArtistes();
    }

    document.addEventListener("keydown", keyDownHandler);

    return document.removeEventListener("keydown", keyDownHandler);
  };
  
  const [isOpen, setIsOpen] = React.useState(false)

  const container = React.useRef(null);
/*listens to click outside search result*/
  function handleClickOutside(event){
     if (container.current && !container.current.contains(event.target)){
         setIsOpen(false)
     }
  }
  React.useEffect(()=>{
       document.addEventListener('click', handleClickOutside, true);

       return ()=>{
         document.removeEventListener('click', handleClickOutside, true)
       }
  },[])
console.log(isOpen)

 
  return (
    <>
    <nav className={chartDisplayed ? 'navy' : 'default-nav'}>
      <div className="flex flex-col">
        <div className="flex">
          <img src={menu} onClick={clickAct} className="hamburger md:hidden" />
          <img src={logo} className="app-logo pl-4" />
          <form className="search-input flex justify-between  md:items-center">
            <div className="flex md:flex-row-reverse">
              <input
                placeholder="search artists"
                onChange={handleChange}
                onKeyDown={keyDownHandler}
                className="search ml-6 "
              />
              <img
                src={search}
                className="search-icon md:ml-12 lg:ml-14 2xl:ml-18"
              />
            </div>
          </form>
        </div>
      </div>
      <div className={clicked ? "block nav-dropdown" : "hidden"}>
        <div className="flex flex-row items-center pt-4 pb-3 px-2 nav-item">
          <FaHome className="bar-icon" />
          <h6 className="pl-4" onClick={()=>{setChartDisplayed(false)}}>Home</h6>
        </div>
        <div className="flex flex-row items-center px-2 py-3 nav-item">
          <BsFillCollectionFill className="bar-icon" />
          <h6 className="pl-4">My collections</h6>
        </div>
        <div className="flex flex-row items-center px-2 py-3 nav-item">
          <IoMdRadio className="bar-icon" />
          <h6 className="pl-4">Radio</h6>
        </div>
        <div className="flex flex-row items-center px-2 py-3 nav-item">
          <img src={video} className="bar-icon" />
          <h6 className="pl-4">Music video</h6>
        </div>
        <div className="flex flex-row items-center px-2 py-3 nav-item">
          <img src={profile} className="bar-icon" />
          <h6 className="pl-4">Profile</h6>
        </div>
        <div className="flex flex-row items-center px-2 py-3 nav-item">
          <img src={logout} className="bar-icon" />
          <h6 className="pl-4">Log out</h6>
        </div>
      </div>
    </nav>
          {
            isOpen ?        
             <div ref={container} className='search-result-div'>
                <Link to='./artisteMusicOverview' className="flex flex-col items-center text-white cursor-pointer pt-1">{searchInput}</Link>
          </div> : ''
          }
          </>
  );
}
