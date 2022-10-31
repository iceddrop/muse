import Navbar from './components/navbar'
import Home from './components/Home'
import ArtisteMusicOverview from './components/artisteMusicOverview'
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {SearchContext} from './contexts/SearchContext'
import React from 'react'
function App() {
  const [searchInput, setSearchInput] = React.useState("");
  return (
          <div className='overall'>
            <Router>
              <SearchContext.Provider value={{searchInput, setSearchInput}}>
              <Navbar/>
              <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/artisteMusicOverview' element={<ArtisteMusicOverview/>}/>
              </Routes>
              </SearchContext.Provider>
            </Router>
          </div>
  )
}

export default App
