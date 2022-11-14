
import whiteHeart from '../assets/white-heart.svg'
import coverart from '../assets/coverart.svg'
import more from '../assets/more-vertical.svg'

export default function chartSongs(props){
 
    return(
        <div className='chart-songs-div flex justify-between items-center px-2 mt-4'>
        <div className='flex'>
            <img src={props.coverarts} className='chart-coverart' alt='song-coverart'/>
            <img src={whiteHeart} className='hidden lg:block white-heart ml-4 mt-2' alt='white-heart'/>
        </div>
        <div className='md:flex justify-between md:w-80 md:itrems-center'>
            <h3 className='chart-song-title'>{props.title}</h3>
            <h5 className='chart-artsite'>{props.artiste}</h5>
        </div>
        <div className='flex flex-col  md:flex md:flex-row-reverse md:w-60 md:justify-between md:pr-4'>
           <img src={more} className='more-icon' alt='more-icon'/>
            <p className='song-duration'>4:17</p>
        </div>
    </div>
    )
}