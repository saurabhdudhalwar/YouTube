import React from 'react'
import template from '../assests/tamplate.png'
import './styles/SideBox.css'

const SideBox = ({Array,setVideo}:any) => {

    function openVideo(data:any){
        setVideo(data)
    }
    return(
        <>
        <div className='mainContainerSide'>
            {Array.map((data: any,i:any)=>{
                return(
                    <div className='cardContainer' onClick={() => openVideo(data)}>
                        <img src={template} alt={'template'} className="template"/>
                       <div className='videoName'>{data.name}</div> 
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default SideBox;