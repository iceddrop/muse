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
import React from 'react'
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import ChartOverview from './chartOverview'



export default function Home(){
   const {chartDisplayed, setChartDisplayed} = useContext(SearchContext)


    return(
        <section>
           <div className="sidebar  flex-col items-center hidden md:flex">
                  <div className='icon-div-1 flex flex-col items-center py-4 rounded-3xl'>
                      <FaHome className='bar-icon mb-4 cursor-pointer' onClick={() => {setChartDisplayed(false)}}/>
                      <BsFillCollectionFill className='bar-icon mb-4 cursor-pointer'/>
                      <IoMdRadio className='bar-icon mb-4 cursor-pointer'/>
                      <img src={video} className='bar-icon cursor-pointer' alt='video-icon'/>
                </div>
                <div className='icon-div-2 flex flex-col items-center mt-4 py-4 rounded-3xl'>
                      <img src={profile} className='bar-icon mb-3 cursor-pointer' alt='profile-icon'/>
                      <img src={logout} className='bar-icon cursor-pointer' alt='logout-icon'/>
                </div>
            </div>
            {
               chartDisplayed ?  
               <ChartOverview />
               :
               <div className='hero-div lg:flex'>
               <div className='hero-accomodate'>
               <img src={smallHeroImg} className='md:hidden hero-img mb-4'/>
                  <img src={heroImg} className='hero-img hidden md:flex '/>
                     <div className='hero-section-text text-white flex flex-col justify-between pb-8 items-start'>
                        <h3 className='mt-2 hero-section-title'>Currated playlist</h3> 
                        <div className='mini-hero-div flex flex-col justify-between'>
                            <div className=''>
                                <h1 className='mb-3 hero-section-title-2'>R & B Hits</h1>
                                <p className='mb-4 hero-paragraph'>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit and so much more.</p>
                             </div> 
                             <div className='flex'>
                                <img src={musicdisk} className='music-disk' alt='music-disk'/>
                                <img src={heart} className='heart-icon ml-2' alt='heart-icon'/>
                                <p className='ml-2 mt-1'>33k likes</p>
                            </div> 
                        </div>   
                  </div>
               </div>
               <div className='text-white lg:ml-4'>
                  <h1 className='pb-3 top-chart lg:ml-4'>Top Charts</h1>
                  <div className='carousel '> 
                  <div className='inner-carousel lg:flex lg:flex-col'>
                     <div className='music-chart-card flex justify-between p-3 lg:ml-4 cursor-pointer'>
                           <div className='lg:flex'>
                              <img src={rectangle} className='rectangle' alt='music-artwork'/>
                              <div className='music-info lg:ml-4'>
                                 <h3 className='chart-card-header' onClick={() =>{setChartDisplayed(true)}}>Golden age of 90's</h3>
                                 <h6 className='chart-card-artist'>Nivarna</h6>
                                 <p className=' chart-card-playtime'>2:10:45</p>
                              </div>  
                           </div>
                           <div className='heart-icon-div'>
                                <img src={heart2} className='heart2  p-1' alt='heart-icon'/> 
                           </div>   
                     </div>
                     <div className='music-chart-card flex justify-between p-3 ml-4 cursor-pointer'>
                           <div className='lg:flex'>
                              <img src={rectangle} className='rectangle' alt='music-artwork'/>
                              <div className='music-info lg:ml-4'>
                                 <h3 className='chart-card-header' onClick={() =>{setChartDisplayed(true)}}>Golden age of 90's</h3>
                                 <h6 className='chart-card-artist'>Nivarna</h6>
                                 <p className='chart-card-playtime'>2:10:45</p>
                              </div>  
                           </div>
                           <div className='heart-icon-div'>
                                <img src={heart2} className='heart2  p-1' alt='heart-icon'/> 
                           </div>  
                     </div>
                     <div className='music-chart-card flex justify-between p-3 ml-4 cursor-pointer'>
                           <div className='lg:flex'>
                              <img src={rectangle} className='rectangle' alt='music-artwork'/>
                              <div className='music-info lg:ml-4'>
                                 <h3 className='chart-card-header' onClick={() =>{setChartDisplayed(true)}}>Golden age of 90's</h3>
                                 <h6 className='chart-card-artist'>Nivarna</h6>
                                 <p className='chart-card-playtime'>2:10:45</p>
                              </div>  
                           </div>
                           <div className='heart-icon-div'>
                                <img src={heart2} className='heart2  p-1' alt='heart-icon'/> 
                           </div> 
                     </div>
                  </div>
                  </div>
               </div>      
         </div>
            }
 
        </section> 
    )
}