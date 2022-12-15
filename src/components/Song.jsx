import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
export default function Song(props) {
  let { audio } = useContext(SearchContext);

 

  function changeSong() {
    audio = props.song;
  }
  changeSong();

  console.log(audio);
  return (
    <div className="text-white singles-div ml-6 pointer-cursor">
      <img
        src={props.img}
        className="singles-coverart rounded-xl cursor-pointer"
      onClick={changeSong}
      />
      <h4 className="song-title pt-2">{props.title}</h4>
      <p className="artiste pt-2">{props.artiste}</p>
    </div>
  );
}
