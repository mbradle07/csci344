import React from 'react';
import LikeButton from './LikeButton';
import { getHeaders } from './utils';
import {useState} from 'react';

export default function Post({post, token}) {
    const [actualPost, setActualPost] = useState(post);
    async function requeryPost () {
        const response = await fetch(`/api/posts/${post.id}`, {
            method: "GET",
            headers: getHeaders(token)
        });
        const data = await response.json();
        console.group(data);
        setActualPost(data);
    }
     return (
        <section className="card">
            <img src={actualPost.image_url} alt={actualPost.caption} />
            <div>{actualPost.caption}</div>
            <span>{actualPost.likes.length} {(actualPost.likes.length == 1) ? 'like' : 'likes' }</span>
            <div className="buttons">
                <LikeButton post={actualPost} token={token} requeryPost={requeryPost}/>
            </div>
        </section>
     )
}