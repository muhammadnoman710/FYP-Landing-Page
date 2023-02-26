import React from 'react'
import "./TopSellers.css"

function TopSellers() {
  return (
    <div className='topSellersConatiner'>
        <p className='topSellersHeading'>Top Sellers</p>
        <div className='icons'>
            <img className="right" src='../Icons/arrow-right-circle.svg' alt='arrow'></img>
            <img className="left" src='../Icons/arrow-left-circle.svg' alt='arrow'></img>
            <div className='cards'>
                <div className='multiple-cards'>
                    <div className='ids'>
                        <div className='profile'>
                            <div className='status'>
                                <div className='check'>
                                    <div className='vector'>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopSellers