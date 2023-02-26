import React from 'react'
import { MDBContainer } from 'mdb-react-ui-kit';
import './Container.css'

function Container() {
  return (
    <MDBContainer breakpoint="sm">
        <p className='para'>Discover, collect, and sell extraordinary NFTs</p>
        <div className='ellipse'></div>
        <div className='ellipse-two'></div>
    </MDBContainer>
    
  )
}

export default Container