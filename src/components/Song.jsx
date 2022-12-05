export default function Song(props){
    return(
        <div className="text-white singles-div">
           <img src={props.img} className="singles-coverart"/>
           <h4 className="song-title">{props.title}</h4>
           <p className="artiste">{props.artiste}</p>
        </div>
    )
}