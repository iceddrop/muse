import video from '../assets/videos.svg'
import profile from '../assets/profile.svg'
import logout from '../assets/Logout.svg'
import { FaHome } from 'react-icons/fa'
import { BsFillCollectionFill } from "react-icons/bs"
import { IoMdRadio } from "react-icons/io"
import heart from '../assets/Heart.svg'
import musicdisk from '../assets/musiccards.svg'
import heart2 from '../assets/Heart2.svg'
import rectangle from '../assets/Rectangle.svg'
import heroImg from '../assets/HeroSection.svg'
import smallHeroImg from '../assets/homesecmobile.svg'
export default function Home(){
    return(
        <section className=''>
           <div class="sidebar  flex-col items-center hidden md:flex">
                  <div className='icon-div-1 flex flex-col items-center py-4 rounded-lg'>
                      <FaHome className='bar-icon mb-4'/>
                      <BsFillCollectionFill className='bar-icon mb-4'/>
                      <IoMdRadio className='bar-icon mb-4'/>
                      <img src={video} className='bar-icon' alt='video-icon'/>
                </div>
                <div className='icon-div-2 flex flex-col items-center mt-4 py-4'>
                      <img src={profile} className='bar-icon mb-3' alt='profile-icon'/>
                      <img src={logout} className='bar-icon ' alt='logout-icon'/>
                </div>
            </div>
            <div className='hero-div lg:flex'>
                  <div className='hero-accomodate'>
                  <img src={smallHeroImg} className='md:hidden hero-img mb-4'/>
                     <img src={heroImg} className='hero-img hidden md:flex '/>
                        <div className='hero-section-text text-white flex flex-col justify-between pb-8 items-start'>
                           <h3 className='mt-2'>Currated playlist</h3> 
                           <div className='mini-hero-div flex flex-col justify-between'>
                               <div className=''>
                                   <h1 className='mb-4'>R & B Hits</h1>
                                   <p className='hero-paragraph'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit and so much more.</p>
                                </div> 
                                <div className='flex'>
                                   <img src={musicdisk} className='music-disk' alt='music-disk'/>
                                   <img src={heart} className='heart-icon ml-2' alt='heart-icon'/>
                                   <p className='ml-2'>33k likes</p>
                               </div> 
                           </div>   
                     </div>
                  </div>
                  <div className='text-white'>
                     <h1 className='pb-3'>Top Charts</h1>
                     <div className='carousel '> 
                     <div className='inner-carousel lg:flex lg:flex-col'>
                        <div className='music-chart-card flex justify-between p-4 lg:ml-4'>
                              <div className='lg:flex'>
                                 <img src={rectangle} className='rectangle' alt='music-artwork'/>
                                 <div className='mt-3 music-info'>
                                    <h3 className='chart-card-header'>Golden age of 90's</h3>
                                    <h6 className='chart-card-artist'>Nivarna</h6>
                                    <p className='mt-3 chart-card-playtime'>2:10:45</p>
                                 </div>  
                              </div>
                              <img src={heart2} className='heart2  p-1' alt='heart-icon'/>  
                        </div>
                        <div className='music-chart-card flex justify-between p-4 ml-4'>
                              <div className='lg:flex'>
                                 <img src={rectangle} className='rectangle' alt='music-artwork'/>
                                 <div className='mt-3 music-info'>
                                    <h3 className='chart-card-header'>Golden age of 90's</h3>
                                    <h6 className='chart-card-artist'>Nivarna</h6>
                                    <p className='mt-3 chart-card-playtime'>2:10:45</p>
                                 </div>  
                              </div>
                              <img src={heart2} className='heart2  p-1' alt='heart-icon'/>  
                        </div>
                        <div className='music-chart-card flex justify-between p-4 ml-4'>
                              <div className='lg:flex'>
                                 <img src={rectangle} className='rectangle' alt='music-artwork'/>
                                 <div className='mt-3 music-info'>
                                    <h3 className='chart-card-header'>Golden age of 90's</h3>
                                    <h6 className='chart-card-artist'>Nivarna</h6>
                                    <p className='mt-3 chart-card-playtime'>2:10:45</p>
                                 </div>  
                              </div>
                              <img src={heart2} className='heart2  p-1' alt='heart-icon'/>  
                        </div>
                     </div>
                     </div>
                  </div>      
            </div>  
        </section> 
    )
}