import React from 'react';
import "./styles/Channel.css"
import SD from '../assests/SD.jpg'

const Channel = (props:any) => {
    return(
        <>
        <div>
            <span className='videoNameBox'>{props.video.name}</span>
        </div>
        <div className='channelConatainer'>
            <img src={SD} alt={'SD'} className="logoChannel"/>
            <div className='channelName'>Channel Name</div>
            <div className='channelSubscribe'>Subscribe</div>
        </div>
        </>
    )
}

export default Channel;