import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import coverart from "../assets/coverart.svg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import shuffle from "../assets/shuffle.svg";
import repeatOne from "../assets/repeate-one.svg";
import React from "react";
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [duration, setDuration] = React.useState(0)

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
    <div className="audio-player flex">
      <div className="text-white flex">
        <img src={coverart} className="song-cover-art" alt="song-cover-art" />
        <div className="">
          <h4>Song title</h4>
          <h6>Song artiste</h6>
        </div>
      </div>
      <audio
        ref={audioPlayer}
        src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a"
        preload="metadata"
      ></audio>
      <div className="flex flex-col">
        <div className="flex">
          <button>
            <img src={shuffle} />
          </button>
          <button className="forward-backward" onClick={backThirty}>
            <img src={previous} />
          </button>
          <button onClick={togglePlayPause} className="text-white">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="forward-backward" onClick={forwardThirty}>
            <img src={next} />
          </button>
          <button>
            <img src={repeatOne} />
          </button>
        </div>
        {/*Progresbar*/}
        <div>
          <input
            className="progress-bar"
            type="range"
            defaultValue={0}
            ref={progressBar}
            onChange={changeRange}
          />
        </div>
      </div>
      <div>
        <input
          className="progress-bar"
          type="range"
          defaultValue={0}
          ref={progressBar}
          onChange={changeRange}
        />
       
      </div>
    </div>
  );
}
