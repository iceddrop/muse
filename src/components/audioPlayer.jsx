import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import coverImg from "../assets/image-from-rawpixel-id-402204-jpeg.jpg";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";
import shuffler from "../assets/shuffle.svg";
import repeatOne from "../assets/repeate-one.svg";
import volumeIcon from "../assets/volume-high.svg";
import goldShuffle from "../assets/icons8-shuffle-arrows-32.png";
import React from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
export default function AudioPlayer() {
  const { isPlaying, setIsPlaying } = useContext(SearchContext);

  const { audioPlayer } = useContext(SearchContext);

  const [duration, setDuration] = React.useState(0);

  const [currentTime, setCurrentTime] = React.useState(0);

  const progressBar = React.useRef();

  const animationRef = React.useRef();

  const { chartData } = useContext(SearchContext);

  const { songIndex, setSongIndex } = useContext(SearchContext);

  const [isRandom, setIsRandom] = React.useState(false);

  const [randomNum, setRandomNum] = React.useState(0);

  const [volume, setVolume] = React.useState(30);

  const { audio, setAudio } = useContext(SearchContext);

  const { songTitle, setSongTitle } = useContext(SearchContext);

  React.useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  function togglePlayPause() {
    setIsPlaying((prevVal) => !prevVal);
    if (isPlaying == false) {
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

  function prevSong() {
    if (songIndex === 0) {
      setSongIndex(chartData.length - 1);
    } else if (isRandom === true) {
      setSongIndex(randomNum);
      setRandomNum(Math.floor(Math.random() * chartData.length - 1));
    } else {
      setSongIndex((prevVal) => prevVal - 1);
    }
  }

  function nextSong() {
    if (songIndex === chartData.length - 1) {
      setSongIndex(0);
    } else if (isRandom === true) {
      setSongIndex(randomNum);
      setRandomNum(Math.floor(Math.random() * chartData.length - 1));
    } else {
      setSongIndex((prevVal) => prevVal + 1);
    }
  }

  function playShuffle() {
    setIsRandom((prevVal) => !prevVal);
  }

  function repeatSong() {
    setRepeat((prevVal) => !prevVal);
  }

  React.useEffect(() => {
    if (audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }
  }, [volume]);

  setAudio(chartData?.[songIndex]?.hub?.actions?.[1]?.uri)
  setSongTitle(chartData?.[songIndex]?.title)
  const artiste = chartData?.[songIndex]?.subtitle;
  const coverart = chartData?.[songIndex]?.images?.coverart;
console.log(audio)
  return (
    <div className="audio-player flex justify-between">
      <div className="text-white flex">
        <img
          src={songIndex ? coverart : coverImg}
          className="song-cover-art"
          alt="song-cover-art"
        />
        <div className="ml-3">
          <h4 className="song-title">{songTitle}</h4>
          <h6 className="artiste-name">{artiste}</h6>
        </div>
      </div>
      <audio ref={audioPlayer} src={audio} preload="metadata"></audio>
      <div className="flex flex-col">
        <div className="flex w-16 control-icons-div">
          <button className ="hidden md:block" onClick={playShuffle}>
            <img
              className="shuffle-icon"
              src={isRandom ? goldShuffle : shuffler}
            />
          </button>
          <button
            className="forward-backward hidden md:block ml-8"
            onClick={prevSong}
          >
            <img src={previous} />
          </button>
          <button
            onClick={togglePlayPause}
            className=" flex items-center justify-center text-white play-pause mr-4 md:mx-8"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="forward-backward md:mr-8" onClick={nextSong}>
            <img src={next} />
          </button>
          <button className="hidden md:block " onClick={repeatSong}>
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
        <img src={volumeIcon} className="volume mr-2" alt="volume" />
        <input
          className="progress-bar progress-bar-2 hidden md:block"
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          id="audio"
        />
      </div>
    </div>
  );
}
