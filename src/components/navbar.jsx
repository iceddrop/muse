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

export default function Navbar() {
  const [artisteData, setArtisteData] = React.useState([]);

  const [clicked, setClicked] = React.useState(false);

  const [searchInput, setSearchInput] = React.useState("");

  {
    /*flip clicked state*/
  }
  function clickAct() {
    setClicked((val) => !val);
  }

  function searchArtistes() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "86f453f970msh48154777add2da0p1e185cjsn969596f1a317",
        "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
      },
    };

    fetch(
      `https://spotify81.p.rapidapi.com/search?q=${searchInput}&type=multi&offset=0&limit=10&numberOfTopResults=5`,
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setArtisteData(
          response.artists.items.map((artist) => artist.data.profile.name)
        )
      )
      .catch((err) => console.error(err));

  }

  function handleChange(event) {
    setSearchInput(event.target.value);
  }
  console.log(searchInput);
  console.log(artisteData);
 
   
     const keyDownHandler = event => {
        console.log('user pressed', event.key );
        if (event.key === 'Enter'){
          event.preventDefault();
          searchArtistes();
        }


   document.addEventListener('keydown', keyDownHandler)

   return(
    document.removeEventListener('keydown', keyDownHandler)
   )
  };

  return (
    <nav className="nav p-4 fixed-top">
      <div className="flex flex-col">
        <div className="flex">
          <img src={menu} onClick={clickAct} className="hamburger md:hidden" />
          <img src={logo} className="app-logo pl-4" />
          <form className="search-input flex justify-between  md:items-center">
            <div className="flex md:flex-row-reverse">
              <input
                placeholder="search artists"
                onChange={
                  handleChange
                }
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
        <div>
          <ul className="flex flex-col items-center text-white">
            {artisteData.map((name) => (
              <li className="cursor-pointer pt-1">{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={clicked ? "block nav-dropdown" : "hidden"}>
        <div className="flex flex-row items-center pt-4 pb-3 px-2 nav-item">
          <FaHome className="bar-icon" />
          <h6 className="pl-4">Home</h6>
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
  );
}
