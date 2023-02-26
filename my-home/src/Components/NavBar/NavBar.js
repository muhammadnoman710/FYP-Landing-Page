import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function NavBar() {

  return (
   
    <div className='Navbar'>
        <div className='NavInside'>
        <img src="../Icons/Group 18.svg" alt='error'/>
          <h2>NIFTY</h2>
        <div className='ui icon input'>
        <i className='search icon'></i>
            <input className="prompt" type="text" placeholder='Search Item Here'/>
        </div>
        <Container> 
            <Col sm={8}>
                <text className='para1'>Explore</text>  {/*Change this line into button later*/}
                <text className='para2'>My Items</text> {/*Change this line into button later*/}
                <text className='para3'>Following</text> {/*Change this line into button later*/}
            </Col>
        </Container>
        <div>
        <button className='create'>Create</button>
        <button className='connect'>Connect</button>
        </div>
        </div>
    </div>
  
  )
}

export default NavBar