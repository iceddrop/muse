import Navbar from "./components/navbar";
import Home from "./components/Home";
import ArtisteMusicOverview from "./components/artisteMusicOverview";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchContext } from "./contexts/SearchContext";
import { PlaySongContext } from "./contexts/playSongContext";
import AudioPlayer from "./components/audioPlayer";
import React from "react";
function App() {
  const [searchInput, setSearchInput] = React.useState("");
  const [currentSong, setCurrentSong] = React.useState('');
  const [chartDisplayed, setChartDisplayed] = React.useState(false)
  return (
    <div className="overall">
      <PlaySongContext.Provider value={{currentSong, setCurrentSong}}>
        <Router>
          <SearchContext.Provider value={{ searchInput, setSearchInput, chartDisplayed, setChartDisplayed}}>
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
  );
}

export default App;
