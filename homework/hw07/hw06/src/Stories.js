import React from 'react';
import {getHeaders} from './utils';
import { useState, useEffect } from "react";

export default function Stories({token}) {
    const [stories, setstories] = useState([]);
    useEffect(() => {
        async function fetchstories() {
            const response = await fetch('/api/stories', {
                headers: getHeaders(token)
            });
            const data = await response.json();
            setstories(data);
        }
        fetchstories();
    }, [token]);
    if(stories.length === 0) {
        return <div id="stories"></div>
    }
    return (
        <header className="stories">
            {stories.map(story => {
                return (<div key={story.id}>
                    <img src={story.user.thumb_url} alt="thumb url" />
                    <h3>{story.user.username}</h3>
                </div>)
            })
        }
        </header>
    );
}