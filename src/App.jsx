import Navbar from "./components/navbar";
import Home from "./components/Home";
import ArtisteMusicOverview from "./components/artisteMusicOverview";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchContext } from "./contexts/SearchContext";
import { PlaySongContext } from "./contexts/playSongContext";
import AudioPlayer from "./components/audioPlayer";
import React from "react";
import LeadImage from './assets/Lead-image.svg'

function App() {
  const [searchInput, setSearchInput] = React.useState("");
  const [currentSong, setCurrentSong] = React.useState('');
  const [chartDisplayed, setChartDisplayed] = React.useState(false);
  const [usHopChart, setUsHopChart] = React.useState([]);
  const [naijaChart, setNaijaChart] = React.useState([])
  const [chartImg, setChartImg] = React.useState('');
  const [chartTitle, setChartTitle] = React.useState('')
  const [alternativeChart, setAlternativeChart] = React.useState([]);
  const background = {
    backgroundImage: `url(${LeadImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    height:'1000px'
 }
 const noBg ={
    backgroundColor: '#1D2123'
 }
 const overlay={
  width:'100%',
  height:'100%',
  background: 'linear-gradient(180deg, transparent 0%, black 62%)'
 }
  return (
    <div style={chartDisplayed ? background : noBg}>
      <div style={chartDisplayed ? overlay : noBg}>
          <PlaySongContext.Provider value={{currentSong, setCurrentSong}}>
            <Router>
              <SearchContext.Provider value={{ searchInput, setSearchInput, chartDisplayed, setChartDisplayed, usHopChart, setUsHopChart, chartImg, setChartImg,chartTitle, setChartTitle,naijaChart, setNaijaChart,alternativeChart, setAlternativeChart}}>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/artisteMusicOverview"
                    element={<ArtisteMusicOverview />}
                  />
                </Routes>
              </SearchContext.Provider>
            </Router>
            <AudioPlayer />
          </PlaySongContext.Provider>
      </div>
    </div>
  );
}

export default App;
