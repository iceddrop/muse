import Navbar from "./components/navbar";
import Home from "./components/Home";
import ArtisteMusicOverview from "./components/artisteMusicOverview";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchContext } from "./contexts/SearchContext";
import AudioPlayer from "./components/audioPlayer";
import React from "react";
import LeadImage from './assets/Lead-image.svg'


function App() {
  const [searchInput, setSearchInput] = React.useState("");
  const [chartDisplayed, setChartDisplayed] = React.useState(false);
  const [usHopChart, setUsHopChart] = React.useState([]);
  const [naijaChart, setNaijaChart] = React.useState([])
  const [chartImg, setChartImg] = React.useState('');
  const [chartTitle, setChartTitle] = React.useState('')
  const [alternativeChart, setAlternativeChart] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);
  const [audio, setAudio] = React.useState('');
  const [songTitle, setSongTitle] = React.useState('');
  const [artiste, setArtiste] = React.useState('');
  const background = {
    backgroundImage: `url(${LeadImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
    height:'5000px'
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
      <SearchContext.Provider value={{ searchInput, setSearchInput, chartDisplayed, setChartDisplayed, usHopChart, setUsHopChart, chartImg, setChartImg,chartTitle, setChartTitle,naijaChart, setNaijaChart,alternativeChart, setAlternativeChart,chartData, setChartData,audio, setAudio,songTitle, setSongTitle,artiste, setArtiste }}>
            <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/artisteMusicOverview"
                    element={<ArtisteMusicOverview />}
                  />
                </Routes>
            </Router>
            <AudioPlayer />
            </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
