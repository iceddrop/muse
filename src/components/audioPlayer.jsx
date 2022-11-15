import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import coverart from "../assets/coverart.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";
import repeatOne from "../assets/repeate-one.svg";
import volume from '../assets/volume-high.svg'
import React from "react";
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [duration, setDuration] = React.useState(0)

  const [currentTime, setCurrentTime] = React.useState(0)

  const audioPlayer = React.useRef();

  const progressBar = React.useRef();

  const animationRef = React.useRef();

  React.useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  function backThirty() {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  function forwardThirty() {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }

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


  return (
    <div className="audio-player flex justify-between">
      <div className="text-white flex">
        <img src={coverart} className="song-cover-art" alt="song-cover-art" />
        <div className="ml-3">
          <h4 className="song-title">Song title</h4>
          <h6 className="artiste-name">Song artiste</h6>
        </div>
      </div>
      <audio
        ref={audioPlayer}
        src='https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2f/61/dd/2f61ddd5-8387-a233-3c12-7da105dc5808/mzaf_14470070219437854763.plus.aac.ep.m4a'
        preload="metadata"
      ></audio>
      <div className="flex flex-col">
        <div className="flex w-16 control-icons-div">
          <button className="hidden md:block">
            <img src={shuffle} />
          </button>
          <button className="forward-backward hidden md:block ml-8" onClick={backThirty}>
            <img src={previous} />
          </button>
          <button onClick={togglePlayPause} className=" flex items-center justify-center text-white play-pause mr-4 md:mx-8">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="forward-backward md:mr-8" onClick={forwardThirty}>
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
