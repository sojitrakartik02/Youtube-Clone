import React, { useEffect, useState } from 'react';
import './Feed.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
        try {
            const response = await fetch(videoList_url);
            const jsonData = await response.json();
            if (jsonData.items && jsonData.items.length > 0) {
                setData(jsonData.items);
            } else {
                console.error('No data found in response:', jsonData);
            }
        } catch (error) {
            console.error('Error fetching video data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return (
        <div className="feed">
            {data.map((item, index) => {
                // Check if item has snippet property
                if (item.snippet) {
                    return (
                        <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                            <h2>{item.snippet.title}</h2>
                            <h3>{item.snippet.channelTitle}</h3>
                            <p>
                                {value_converter(item.statistics.viewCount)} view &bull;{' '}
                                {moment(item.snippet.publishedAt).fromNow()}
                            </p>
                        </Link>
                    );
                } else {
                    // Handle case where snippet property is missing
                    console.error('Snippet property is missing in item:', item);
                    return null; // or render a placeholder
                }
            })}
        </div>
    );
};

export default Feed;
