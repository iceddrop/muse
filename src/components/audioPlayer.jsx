import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import coverImg from '../assets/image-from-rawpixel-id-402204-jpeg.jpg'
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import shuffler from "../assets/shuffle.svg";
import repeatOne from "../assets/repeate-one.svg";
import volume from '../assets/volume-high.svg'
import React from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
export default function AudioPlayer() {
  const {isPlaying, setIsPlaying} = useContext(SearchContext)

    
  const {audioPlayer} = useContext(SearchContext)

  const [duration, setDuration] = React.useState(0)

  const [currentTime, setCurrentTime] = React.useState(0)

  const progressBar = React.useRef();

  const animationRef = React.useRef();

  const {chartData, setChartData} = useContext(SearchContext)

  const {songIndex,setSongIndex} = useContext(SearchContext)

   const [randomNum, setRamdomNum] = React.useState(0)

console.log('di')
  React.useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  function togglePlayPause() {
    const prevVal = isPlaying;
    setIsPlaying(!prevVal);
    if (!prevVal) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  function changeRange() {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  }

  function whilePlaying() {
    progressBar.current.value = audioPlayer.current.currentTime;
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  function prevSong(){
    if (songIndex === 0){
      setSongIndex(chartData.length - 1)
    }else{
      setSongIndex(prevVal => prevVal - 1)
    }
    
  }

  function nextSong(){
    if (songIndex === chartData.length - 1){
      setSongIndex(0)
    }else{
      setSongIndex(prevVal => prevVal + 1)
    }
 
  }

  
 const audio = chartData?.[songIndex]?.hub?.actions?.[1]?.uri
 const audioTitle = chartData?.[songIndex]?.title
 const artiste = chartData?.[songIndex]?.subtitle
 const coverart = chartData?.[songIndex]?.images?.coverart
  
 const songArr = chartData.map((data) => data)
console.log(songArr)

function shuffle(arr){
  for (let i = arr.length; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
  }
  return arr;
}

 function playShuffle(){
  setChartData(shuffle(songArr))
 }
  return (
    <div className="audio-player flex justify-between">
      <div className="text-white flex">
        <img src={songIndex ? coverart : coverImg} className="song-cover-art" alt="song-cover-art" />
        <div className="ml-3">
          <h4 className="song-title">{audioTitle}</h4>
          <h6 className="artiste-name">{artiste}</h6>
        </div>
      </div>
      <audio
        ref={audioPlayer}
        src={audio}
        preload="metadata"
      ></audio>
      <div className="flex flex-col">
        <div className="flex w-16 control-icons-div">
          <button className="hidden md:block" onClick={playShuffle}>
            <img src={shuffler} />
          </button>
          <button className="forward-backward hidden md:block ml-8" onClick={prevSong}>
            <img src={previous} />
          </button>
          <button onClick={togglePlayPause} className=" flex items-center justify-center text-white play-pause mr-4 md:mx-8">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="forward-backward md:mr-8" onClick={nextSong}>
            <img src={next} />
          </button>
          <button className="hidden md:block ">
            <img src={repeatOne} />
          </button>
        </div>
        {/*Progresbar*/}
        <div>
          <input
            className="progress-bar hidden md:block"
            type="range"
            defaultValue={0}
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
      </div>
        <div className="hidden md:flex items-center mb-16">
          <img src={volume} className='volume mr-2' alt='volume'/>
          <input
          className="progress-bar progress-bar-2 hidden md:block"
          type="range"
           />    
      </div>
    </div>
  );
}
