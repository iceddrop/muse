import LeadImage from '../assets/Lead-image.svg'
import MusicSquare from '../assets/music-square-add.svg'
import redHeart from '../assets/red-heart.svg'
import playTwo from '../assets/chartPlay.svg'
import whiteHeart from '../assets/white-heart.svg'
import coverart from '../assets/coverart.svg'
import more from '../assets/more-vertical.svg'
export default function showOverview(){
    return(
       <section className="chart-category text-white pr-8">
        <div className=' md:flex'>
            <div className='md:flex'>
                <img src={LeadImage} className='chart-img rounded-3xl' alt='chart-image'/>
                <div className=' mt-4 md:pt-14 md:ml-6 xl:pt-20 lg:pr-10'>
                    <h2 className='chart-header'>Tommorrow's tunes</h2>
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
            <div className='chart-songs-div flex justify-between items-center px-2'>
                <div className='flex'>
                    <img src={coverart} className='chart-coverart' alt='song-coverart'/>
                    <img src={whiteHeart} className='hidden md:block white-heart ml-4 mt-2' alt='white-heart'/>
                </div>
                <div className='md:flex justify-between md:w-80 md:itrems-center'>
                    <h3 className='chart-song-title'>Song title</h3>
                    <h5 className='chart-artsite'>Artist</h5>
                </div>
                <div className='flex flex-col  md:flex md:flex-row-reverse md:w-60 md:justify-between md:pr-4'>
                   <img src={more} className='more-icon' alt='more-icon'/>
                    <p className='song-duration'>4:17</p>
                </div>
            </div>
        </div>
       </section>
    )
}