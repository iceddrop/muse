import Song from './Song'
import React from 'react'
export default function SinglesSongs(){
    const [singlesData, setSinglesData] = React.useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '036795ec2amsh8c2b98ef8a502acp146724jsn6f3538b26522',
            'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
        }
    };
    
    React.useEffect(() =>{
        fetch('https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=JP', options)
        .then(response => response.json())
        .then(response => setSinglesData(response))
        .catch(err => console.error(err));
    },[])

       const singlesEl = singlesData.map((data) =>(
            <Song key={data?.key} img={data?.images?.coverart} artiste={data?.subtitle} title={data?.title} song={data?.hub?.actions?.[1]?.uri}/>
        ))
    return(
        <section className="carousel japan-singles text-white">
            <h3 className='mb-3 singles-title'>Hits from Japan</h3>
            <div className='inner-carousel'>
               {singlesEl}
            </div>
        </section>
    )
}