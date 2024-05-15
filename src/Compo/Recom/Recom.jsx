import React, { useEffect, useState } from 'react'
import './Recom.css'

import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'




const Recom = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const reletedVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(reletedVideo).then(res => res.json()).then(data => setApiData(data.items))

    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='recom'>
            {apiData.map((item, index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video'>
                        <img src={item.snippet.thumbnails.medium.url} />
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{value_converter(item.statistics.viewCount)} viwes</p>
                        </div>
                    </Link>
                )
            })}

        </div>
    )
}

export default Recom