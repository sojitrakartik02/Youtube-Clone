import React from 'react'
import './Video.css';
import PlayVideo from '../../Compo/PlayVideo/PlayVideo';
import Recom from '../../Compo/Recom/Recom';
import { useParams } from 'react-router-dom';
const Video = () => {
  const {videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />  
      <Recom categoryId={categoryId} />
      
    </div>
  )
}

export default Video
