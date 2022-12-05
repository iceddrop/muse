import Song from './Song'
import React from 'react'
export default function SinglesSongs(){
    const [singlesData, setSinglesData] = React.useState([])
    const options = {
        method: 'GET',
        headers: {
           'X-RapidAPI-Key': 'f4b3066387msh67203ea580d45c8p12e232jsn331e2bd3e2ca',
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
            <Song key={data?.key} img={data?.images?.coverart} artiste={data?.subtitle} title={data?.title}/>
        ))
    return(
        <section className="carousel japan-singles text-white">
            <h3>Hits from japan</h3>
            <div className='inner-carousel'>
               {singlesEl}
            </div>
        </section>
    )
}