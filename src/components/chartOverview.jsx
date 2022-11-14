import MusicSquare from '../assets/music-square-add.svg'
import redHeart from '../assets/red-heart.svg'
import playTwo from '../assets/chartPlay.svg'
import { useContext } from "react";
import ChartSongs from './ChartSongs'
import { SearchContext } from "../contexts/SearchContext";
export default function showOverview(){
    const {chartImg, setChartImg} = useContext(SearchContext)
    const {chartTitle, setChartTitle} = useContext(SearchContext)
    const {chartData, setChartData} = useContext(SearchContext)

    const songTitleEl = chartData.map(data =>(
        <ChartSongs title={data.title} artiste={data.subtitle} coverarts={data.images?.coverart} audio={data.hub?.actions[1].uri} />
    ))
    return(
       <section className="chart-category text-white pr-8">
        <div className=' md:flex'>
            <div className='md:flex'>
                <img src={chartImg} className='chart-img rounded-3xl' alt='chart-image'/>
                <div className=' mt-4 md:pt-14 md:ml-6 xl:pt-20 lg:pr-10'>
                    <h2 className='chart-header'>{chartTitle}</h2>
                    <p className='chart-paragraph mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellat sapiente sequi dolore commodi.</p>
                    <div className='flex mt-1 chart-duration'>
                        <p>64 songs -</p>
                        <p> 16 hrs+</p>
                    </div>
                    <div className='flex mt-4'>
                        <div className='flex chart-icon-div cursor-pointer'>
                            <img src={redHeart} className='red-heart' alt='heart-icon'/>
                            <p className='ml-2'>Play all</p>
                        </div>
                        <div className='flex chart-icon-div ml-3 cursor-pointer'>
                            <img src={MusicSquare} className='' alt='music-icon'/>
                            <p className='ml-2'>Add to collection</p>
                        </div>
                        <div className='flex chart-icon-div ml-3 '>
                            <img src={playTwo} className='' alt='play-icon'/>
                            <p className='ml-2 md:hidden'>Like</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-5 chart-songs'>
            {songTitleEl}
        </div>
       </section>
    )
}