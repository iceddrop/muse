import React from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
export default function showOverview() {
    const {searchInput} = useContext(SearchContext)
    console.log(searchInput)
    const [artisteData, setArtisteData] = React.useState([])
   React.useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '036795ec2amsh8c2b98ef8a502acp146724jsn6f3538b26522',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    
    fetch(`https://shazam-core.p.rapidapi.com/v1/search/multi?query=${searchInput}&search_type=SONGS_ARTISTS`, options)
        .then(response => response.json())
        .then(response => setArtisteData(response.tracks.hits?.map(details => details)))
        .catch(err => console.error(err));
   },[])
    console.log(artisteData)
   
  return (
    <div>
        <div>
          <img src={artisteData[0]?.track.share.avatar}/>
          <h4 className="text-red-600">{artisteData[0]?.track.subtitle}</h4>
        </div>
    </div>
  )
}
