import React from 'react'
import Carousel from 'react-elastic-carousel';
import "./TopSellers.css"
import {default as profile1} from "../../images/Sufyan.jpg"
//import {default as profile2} from "../../images/Sufyan.jpg"
//import {default as profile3} from "../../images/Noman.jpeg"
//import {cards} from '../Constants/Constants'
//import Slider from "react-slick";
//import HorizontalScroll from 'react-scroll-horizontal'

function TopSellers() {

    const items = [
        {id: 1, title: 'item #1' , image: profile1 , name: "Noman"},
      ]


  return (
    
    <div className='topSellersConatiner'>
        <p className='topSellersHeading'>Top Sellers</p>
        <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
        <div className='icons'>
            {/* <img className="right" src='../Icons/arrow-right-circle.svg' alt='arrow'></img>
            <img className="left" src='../Icons/arrow-left-circle.svg' alt='arrow'></img> */}
                <div className='multiple-cards'>
                <div className='ids1'>
                    <div className='profile'>
                        <div className='status'>
                            <div className='check'>
                                <div className='vector'>
                                    <p>Sufyan</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='ids2'>
                        <div className='profile' >
                            <div className='status'>
                                <div className='check'>
                                <div className='vector'>
                                    Noman
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ids3'>
                        <div className='profile'>
                            <div className='status'>
                                <div className='check'>
                                    <div className='vector'>
                                        <p>Faizan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ids4'>
                        <div className='profile'>
                            <div className='status'>
                                <div className='check'>
                                    <div className='vector'>
                                        <p>Hamza</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='ids5'>
                        <div className='profile'>
                            <div className='status'>
                                <div className='check'>
                                    <div className='vector'>
                                        <p>Maryam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div> 
        </div>
        </Carousel>
         </div>
    
  )
}

export default TopSellers