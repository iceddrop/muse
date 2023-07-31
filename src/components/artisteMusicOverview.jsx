import React from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";


export default function ArtisteMusicOverview() {
    const {searchInput} = useContext(SearchContext)
   
    const [artisteData, setArtisteData] = React.useState([])

    const [songsData, setSongsData] = React.useState([])

     

   React.useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26de8eae8cmshf94dce60944bca6p17a2e1jsn726a251f07c4',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    
    fetch(`https://shazam-core.p.rapidapi.com/v1/search/multi?query=${searchInput}&search_type=SONGS_ARTISTS`, options)
        .then(response => response.json())
        .then(response => setArtisteData(response.tracks.hits?.map(details => details)))
        .catch(err => console.error(err));
   },[])
   
   
  return (
    <div className="artiste-profile">
        <div className="artiste-img-div flex">
          <img src={artisteData[0]?.track.share.avatar} className='artiste-img text-white' alt='artiste-img'/>
          <h4 className="text-white ml-3 artiste-overview-name">{artisteData[0]?.track.subtitle}</h4>
        </div>
    </div>
  )
}
