import React ,  {useState} from 'react'
import './HotBids.css'
//import { CSSTransition } from 'react-transition-group';

function HotBids() {
    const [showcomponent , setShowComponent] = useState(false)
    const [button , setButton] =  useState(true)
    // const nodeRef = useRef(null);
  return (
    <div>
    <div className='HotBids-container'><p>Hot Bids</p>
     <div className='HotBids-containerInside'>
        <div className='HotBids-containerInside1'>
            <div className='HotBids-cards1'>
                <div className='pic1'>
                <img src="../Icons/card1.svg" alt='error'/>
                <text className='text1'>Mountain Land Scape</text>
                </div>
            </div>
            <div className='HotBids-cards2'>
                <div className='pic2'>
                <img src="../Icons/card2.svg" alt='error'/>
                <text className='text2'>Abstract Pattern</text>
                </div>
            </div>
            <div className='HotBids-cards3'>
                <div className='card-pic3'>
                <img src="../Icons/card3.svg" alt='error'/>
                <text className='text3'>Abstract Smoke</text>
                </div>
            </div>
            <div className='HotBids-cards4'>
                <div className='card-pic4'>
                <img src="../Icons/card4.svg" alt='error'/>
                <text className='text4'>Paint Color On Wall</text>
                </div>
            </div>
        </div>
        {showcomponent &&  <div className='HotBids-containerInside2'>
            <div className='Card-Card1'>
                <div className='frame1'>

                </div>
            </div>
            <div className='Card-Card2'>
            <div className='frame2'>
                    
            </div>
            </div>
            <div className='Card-Card3'>
            <div className='frame3'>
                    
            </div>
            </div>
            <div className='Card-Card4'>
            <div className='frame4'>
                    
            </div>
            </div>
        </div>}
        </div>
            </div>
        {/* <CSSTransition
        in={showcomponent}
        nodeRef={nodeRef}
        timeout={300}
        classNames="HotBids-containerInside2"
        unmountOnExit
        onEnter={() => setButton(false)}
        onExited={() => setButton(true)}
      >  */}
   { button && <div>
        <button className='button' onClick={() => {setShowComponent(!showcomponent)}}>Load More</button>
    </div>
   }
    {/* </CSSTransition> */}
    </div>
  )
}

export default HotBids